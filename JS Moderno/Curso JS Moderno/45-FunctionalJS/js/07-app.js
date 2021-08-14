// Función que retorna otra función
const obtenerCliente = () => () => console.log('Nicolas');

// Asignando la primera función a fn
const fn = obtenerCliente();

// Ejecutando la función "dentro" de fn
fn();