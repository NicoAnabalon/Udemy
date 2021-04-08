const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Producto:", producto);

// Reasignando valor de una propiedad
producto.disponible = false;
console.log("Producto modificado:", producto);

// Eliminando una propiedad
delete producto.disponible;
console.log("Producto con disponible eliminado:", producto);