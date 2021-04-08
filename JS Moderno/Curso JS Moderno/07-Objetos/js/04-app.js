const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Objeto:", producto);

// Asignando una propiedad del objeto a una variable
const nombre = producto.nombre;
console.log("Variable nombre:", nombre);

// Asignando varias propiedades del objeto a variables con destructuring
const { precio, disponible } = producto;
console.log("Variable precio:", precio);
console.log("Variable disponible:", disponible);