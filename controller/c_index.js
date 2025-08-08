import Calculadora from '../model/calculadora.js';
//event listeners
document.addEventListener("DOMContentLoaded", () => { 
    let pantalla = getPantalla();
    let arr1 = recibir_botones_numericos();
    let arr2 = recibir_botones_operadores();
    parsear_botones(arr1, arr2);
    clickear_botones(arr1, arr2, pantalla);
});

const modo_oscuro = document.getElementById("modo_oscuro");
const style_sheet = document.getElementById("style_sheet");
modo_oscuro.addEventListener("click", () => { 
    if (style_sheet.getAttribute("href") === "view/css/index.css") {
        style_sheet.setAttribute("href", "view/css/index_claro.css");
        alert("cambiando a modo claro");
    } else { 
        style_sheet.setAttribute("href", "view/css/index.css");
        alert("cambiando a modo oscuro");
    }
});

//funciones
function getPantalla() { 
    let pantalla = document.getElementById("pantalla");

    if (!pantalla) { 
        alert("pantalla no recibida");
        return;
    }

    return pantalla;
}
function recibir_botones_numericos() { 
    let btn_1 = document.getElementById('btn-1');
    let btn_2 = document.getElementById('btn-2');
    let btn_3 = document.getElementById('btn-3');
    let btn_4 = document.getElementById('btn-4');
    let btn_5 = document.getElementById('btn-5');
    let btn_6 = document.getElementById('btn-6');
    let btn_7 = document.getElementById('btn-7');
    let btn_8 = document.getElementById('btn-8');
    let btn_9 = document.getElementById('btn-9');
    let btn_0 = document.getElementById('btn-0');

    return [btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9];
}

function recibir_botones_operadores() { 
    let btn_sqrt = document.getElementById('btn-sqrt');
    let btn_lg = document.getElementById('btn-lg');
    let btn_ln = document.getElementById('btn-ln');
    let btn_open_parenthesis = document.getElementById('btn-open-parenthesis');
    let btn_close_parenthesis = document.getElementById('btn-close-parenthesis');
    let btn_percent = document.getElementById('btn-percent');
    let btn_power = document.getElementById('btn-power');
    let btn_divide = document.getElementById('btn-divide');
    let btn_multiply = document.getElementById('btn-multiply');
    let btn_subtract = document.getElementById('btn-subtract');
    let btn_add = document.getElementById('btn-add');
    let btn_ac = document.getElementById('btn-ac');
    let btn_decimal = document.getElementById('btn-decimal');
    let btn_delete = document.getElementById('btn-delete');
    let btn_equals = document.getElementById('btn-equals');

    return [
        btn_sqrt, btn_lg, btn_ln, btn_open_parenthesis, btn_close_parenthesis,
        btn_percent, btn_power, btn_divide, btn_multiply, btn_subtract,
        btn_add, btn_ac, btn_decimal, btn_delete, btn_equals
    ];
}

function clickear_botones(arr1, arr2, pantalla) {
    let botones = arr1.concat(arr2);

    botones.forEach(button => {
        button.addEventListener("click", () => {
            switch (button.value) { 
                case "delete":
                    pantalla.value = pantalla.value.slice(0, -1);
                    break;
                case "equals":
                    let resultado = Calculadora.operacion(pantalla.value);
                    pantalla.value = "=" + resultado;
                    break;
                case "ac":
                    pantalla.value = "";
                    break;
                default: 
                    let caracter = button.value;
                    pantalla.value += caracter;
            }
        });
    });
}

function parsear_botones(arr1, arr2) { 
    for (let i = 0; i < arr1.length; i++) { 
        let value = arr1[i].value;
        let resultado = parseInt(value, 10);
    }
    arr2[0].value = "sqrt(";
    arr2[1].value = "log10(";
    arr2[2].value = "log(";
    arr2[3].value = "(";
    arr2[4].value = ")";
    arr2[5].value = "%";
    arr2[6].value = "^";
    arr2[7].value = "/";
    arr2[8].value = "*"; 
    arr2[9].value = "-";
    arr2[10].value = "+";
    arr2[11].value = "ac";
    arr2[12].value = ".";
    arr2[13].value = "delete";
    arr2[14].value = "equals";
}