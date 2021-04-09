const carrito = [];

// Definiendo objetos
const producto = {
    nombre:"Monitor 32 Pulgadas",
    precio: 400
}
const producto2 = {
    nombre:"Celular",
    precio: 800
}
const producto3 = {
    nombre:"Teclado",
    precio: 50
}
const producto4 = {
    nombre:"Mouse",
    precio: 25
}
const producto5 = {
    nombre:"Audifonos",
    precio: 40
}

// Agregando elementos
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

console.log("Arreglo inicial:");
console.table(carrito);

// Eliminando con destructuring
const [, , tercero] = carrito;
console.log("Arreglo modificado:", tercero);

