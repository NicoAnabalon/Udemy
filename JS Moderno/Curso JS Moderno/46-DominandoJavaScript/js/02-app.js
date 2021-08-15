// Esto funcionará debido a que la función está declarada como tal y es registrada en la "primera" ejecución de js.
obtenerCliente("Nicolas");
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
};

// Esto dará error debido a que la función esta dentro de una variable
obtenerCliente2("Felipe");
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
};