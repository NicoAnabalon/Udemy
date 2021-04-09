const carrito = [];
console.log("Arreglo inicial (vacio):", carrito);

// Definiendo objetos
const producto = {
    nombre:"Monitor 32 Pulgadas",
    precio: 400
}
const producto2 = {
    nombre:"Celular",
    precio: 800
}

// Agregando elemento al final del arreglo mediante push
carrito.push(producto);
carrito.push(producto2);
console.log("Arreglo con elementos agregados al final:");
console.table(carrito);

// Definiendo otro objeto
const producto3 = {
    nombre:"Teclado",
    precio: 50
}

// Agregando elemento al principio del arreglo mediante unshift
carrito.unshift(producto3);
console.log("Arreglo con elemento agregado al principio:");
console.table(carrito);