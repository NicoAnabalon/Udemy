"use strict";
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Producto:", producto);

// Sellando el objeto (Permite modificar valores de propiedades pero no agregar ni eliminar propiedades)
Object.seal(producto);
// Modificando propiedad
producto.disponible=false;
console.log("Disponibilidad modificada:", producto);
// Añadiendo propiedad
// producto.imagen = "imagen.jpg";
// Eliminando propiedad
// delete producto.disponible;

// Verificando si un objeto se encuentra sellado
console.log("Objeto sellado:", Object.isSealed(producto));