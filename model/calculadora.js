class Calculadora {
    static operacion(expresion) {
        try {
            const resultado = math.evaluate(expresion);
            return resultado;
        } catch (error) {
            console.error("Error en la operación:", error);
            return "Error";
        }
    }
}

export default Calculadora;