// Creando un Promise
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    
    if(descuento) {
        resolve("Descuento Aplicado");
    } else {
        reject("No se pudo aplicar el descuento");
    }
});

// Obteniendo el resultado del Promise
aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error));


// Hay 3 valores posibles en un promise:
// fulfilled = El promise se cumplió
// rejected = El promise no se cumplió
// pending = El promise aún no se cumple ni ha sido rechazado

function descuento(mensaje) {
    console.log(mensaje);
}