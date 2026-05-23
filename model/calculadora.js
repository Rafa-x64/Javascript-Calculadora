class Calculadora {
    /**
     * Evalúa una expresión matemática y devuelve el resultado como string.
     * @param {string} expresion - La expresión a evaluar.
     * @returns {string} El resultado o "Error" si la expresión es inválida.
     */
    static operacion(expresion) {
        if (!expresion || typeof expresion !== 'string') {
            return 'Error';
        }

        const expr = expresion.trim();
        if (!expr) return 'Error';

        try {
            if (typeof math === 'undefined' || !math.evaluate) {
                console.error('La biblioteca math.js no está cargada. Verifique su conexión.');
                return 'Error: Sin math.js';
            }
            const resultado = math.evaluate(expr);

            // Rechazar resultados no numéricos (ej. matrices, unidades complejas)
            if (typeof resultado === 'object' && resultado !== null) {
                // Si mathjs devuelve un objeto con .toNumber(), intentarlo
                if (typeof resultado.toNumber === 'function') {
                    const num = resultado.toNumber();
                    return Calculadora._formatearNumero(num);
                }
                return 'Error';
            }

            if (typeof resultado !== 'number' && typeof resultado !== 'bigint') {
                return 'Error';
            }

            return Calculadora._formatearNumero(Number(resultado));
        } catch (error) {
            console.error('Error en la operación:', error.message);
            return 'Error';
        }
    }

    /**
     * Formatea un número para mostrarlo limpiamente en la pantalla.
     * @param {number} num
     * @returns {string}
     */
    static _formatearNumero(num) {
        if (!isFinite(num)) return 'Error';
        if (isNaN(num))     return 'Error';

        // Evitar notación científica para números manejables
        if (Math.abs(num) < 1e15 && Math.abs(num) > 1e-10 || num === 0) {
            // Limitar a 10 decimales significativos para evitar ruido de punto flotante
            const str = parseFloat(num.toPrecision(10)).toString();
            return str;
        }

        // Muy grande o muy pequeño → notación exponencial legible
        return num.toExponential(6);
    }
}

export default Calculadora;