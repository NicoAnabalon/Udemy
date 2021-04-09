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
const producto3 = {
    nombre:"Teclado",
    precio: 50
}

// Agregando elementos a carrito
let resultado;
// Agregando primer producto al final
resultado = [...carrito, producto];
console.log("Agregando un producto al final del arreglo:");
console.table(resultado);
// Agregando segundo producto al final
resultado = [...resultado, producto2];
console.log("Agregando otro producto al final del arreglo:");
console.table(resultado);
// Agregando tercer producto al principio
resultado = [producto3, ...resultado];
console.log("Agregando un producto al principio del arreglo:");
console.table(resultado);