// Object methods utilizando use strict
"use strict";
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Producto:", producto);

// Modificando valor de una propiedad
producto.disponible = false;
console.log("Producto modificado:", producto);

// Congelando el objeto para que no pueda ser modificado
Object.freeze(producto);
// Intentando modificar el valor de una propiedad
// producto.disponible = true;
// Intentando eliminar una propiedad
// delete producto.disponible;

// Verificando si un objeto se encuentra congelado
console.log("Object.isFrozen:", Object.isFrozen(producto));