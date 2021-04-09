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

// Eliminando el ultimo elemento del arreglo
carrito.pop();
console.log("Arreglo con el ultimo elemento eliminado:");
console.table(carrito);

// Eliminando el primer elemento del arreglo
carrito.shift();
console.log("Arreglo con el primer elemento eliminado:");
console.table(carrito);

// Eliminando elemento(s) de cierta posicion a cierta posicion del arreglo con splice(x,y) donde x es el indice donde comenzará a eliminar e y es el indice donde terminará de eliminar
carrito.splice(1,1);
console.log("Arreglo con elemento especifico eliminado:");
console.table(carrito);