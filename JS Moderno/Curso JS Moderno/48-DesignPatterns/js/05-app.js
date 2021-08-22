// Module Pattern

// Actual - Requiere type="module" en el script
const mostrarCliente = nombre => {
    console.log('nombre :>> ', nombre)
};
export default mostrarCliente;

// Antiguo
const modulo1 = (function() {
    const nombre = "Nicolas";

    function hola() {
        console.log("Hola");
    };

    return {
        nombre,
        hola
    }
})();