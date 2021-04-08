const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Objeto:", producto);

// Agregando propiedades al objeto
producto.imagen = "imagen.jpg";
console.log("Propiedad imagen agregada:", producto);

// Eliminando propiedades del objeto
delete producto.imagen;
console.log("Propiedad imagen eliminada:", producto);