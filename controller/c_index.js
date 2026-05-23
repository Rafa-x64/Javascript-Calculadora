import Calculadora from '../model/calculadora.js';

// ── Inicialización ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const pantalla   = getPantalla();
    const modoOscuro = document.getElementById('modo_oscuro');
    const styleSheet = document.getElementById('style_sheet');

    if (!pantalla || !modoOscuro || !styleSheet) {
        console.error('Error crítico: no se encontraron elementos esenciales del DOM.');
        return;
    }

    // Recuperar tema guardado
    const temaGuardado = localStorage.getItem('tema') || 'claro';
    aplicarTema(temaGuardado, styleSheet, modoOscuro);

    // Botón de cambio de tema (sin alert)
    modoOscuro.addEventListener('click', () => {
        const temaActual = styleSheet.getAttribute('href').includes('index_claro')
            ? 'claro'
            : 'oscuro';
        const nuevoTema = temaActual === 'claro' ? 'oscuro' : 'claro';
        aplicarTema(nuevoTema, styleSheet, modoOscuro);
        localStorage.setItem('tema', nuevoTema);
    });

    // Teclado físico
    document.addEventListener('keydown', (e) => manejarTecla(e, pantalla));

    // Botones
    const arr1 = recibir_botones_numericos();
    const arr2 = recibir_botones_operadores();
    parsear_botones(arr2);
    clickear_botones(arr1, arr2, pantalla);
});

// ── Tema ─────────────────────────────────────────────────────────────────────
function aplicarTema(tema, styleSheet, circulo) {
    const esOscuro = tema === 'oscuro';
    styleSheet.setAttribute(
        'href',
        esOscuro ? 'view/css/index.css' : 'view/css/index_claro.css'
    );
    circulo.title = esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    circulo.setAttribute('aria-label', circulo.title);
}

// ── Pantalla ──────────────────────────────────────────────────────────────────
function getPantalla() {
    const pantalla = document.getElementById('pantalla');
    if (!pantalla) {
        console.error('Elemento #pantalla no encontrado.');
    }
    return pantalla || null;
}

// ── Obtención de botones ──────────────────────────────────────────────────────
function recibir_botones_numericos() {
    return ['0','1','2','3','4','5','6','7','8','9']
        .map(n => document.getElementById(`btn-${n}`))
        .filter(Boolean);
}

function recibir_botones_operadores() {
    const ids = [
        'btn-sqrt', 'btn-lg', 'btn-ln',
        'btn-open-parenthesis', 'btn-close-parenthesis',
        'btn-percent', 'btn-power',
        'btn-divide', 'btn-multiply',
        'btn-subtract', 'btn-add',
        'btn-ac', 'btn-decimal', 'btn-delete', 'btn-equals'
    ];
    return ids.map(id => document.getElementById(id)).filter(Boolean);
}

// ── Parseo de valores de botones operadores ───────────────────────────────────
function parsear_botones(arr2) {
    const valores = [
        'sqrt(', 'log10(', 'log(',
        '(', ')',
        '%', '^',
        '/', '*',
        '-', '+',
        'ac', '.', 'delete', 'equals'
    ];
    arr2.forEach((btn, i) => {
        if (btn && valores[i] !== undefined) {
            btn.value = valores[i];
        }
    });
}

// ── Lógica de entrada ─────────────────────────────────────────────────────────
function procesarEntrada(valor, pantalla) {
    let contenido = pantalla.value;

    // Si la pantalla muestra un resultado anterior (empieza con "="),
    // limpiarla antes de continuar (excepto para seguir operando)
    if (contenido.startsWith('=')) {
        const prevResultado = contenido.slice(1);
        const esOperador = ['+','-','*','/','^','%'].includes(valor);
        contenido = esOperador ? prevResultado : '';
        pantalla.value = contenido;
    }

    switch (valor) {
        case 'delete':
            pantalla.value = contenido.slice(0, -1);
            break;

        case 'equals': {
            if (!contenido.trim()) return; // pantalla vacía → no hacer nada
            const resultado = Calculadora.operacion(contenido);
            pantalla.value = `= ${resultado}`;
            // Desplazar al final para ver el resultado completo
            pantalla.scrollLeft = pantalla.scrollWidth;
            break;
        }

        case 'ac':
            pantalla.value = '';
            break;

        default:
            pantalla.value = contenido + valor;
            pantalla.scrollLeft = pantalla.scrollWidth;
    }
}

// ── Event listeners de botones ────────────────────────────────────────────────
function clickear_botones(arr1, arr2, pantalla) {
    [...arr1, ...arr2].forEach(button => {
        if (!button) return;
        button.addEventListener('click', () => {
            procesarEntrada(button.value, pantalla);
        });
    });
}

// ── Teclado físico ────────────────────────────────────────────────────────────
function manejarTecla(e, pantalla) {
    const mapa = {
        'Enter'      : 'equals',
        '='          : 'equals',
        'Backspace'  : 'delete',
        'Escape'     : 'ac',
        'Delete'     : 'ac',
    };

    const permitidos = new Set('0123456789+-*/.%^()');

    if (mapa[e.key]) {
        e.preventDefault();
        procesarEntrada(mapa[e.key], pantalla);
    } else if (permitidos.has(e.key)) {
        e.preventDefault();
        procesarEntrada(e.key, pantalla);
    }
}