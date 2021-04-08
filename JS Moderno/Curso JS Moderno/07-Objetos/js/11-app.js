const nombre = "Esto aparece sin this";
const precio = 20;
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${nombre} tiene un precio de: ${precio}`)
    }
}
console.log("Producto:", producto);

// Llamando a la funcion dentro del objeto producto
producto.mostrarInfo();

// Modificando la funcion mostrarInfo para leer la información del mismo objeto utilizando this
producto.mostrarInfo = function() {
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
}
console.log("Producto modificado:", producto);

// Llamando nuevamente a la funcion dentro del objeto producto
producto.mostrarInfo();