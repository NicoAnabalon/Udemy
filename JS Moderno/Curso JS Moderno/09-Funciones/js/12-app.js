const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Televisión", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
]
console.log("Arreglo:");
console.table(carrito);

// Utilizando map para crear un nuevo arreglo

// Función normal
// const nuevoArreglo = carrito.map( function(producto){
//     return `${producto.nombre} - Precio: ${producto.precio}`;
// });
// Función de flecha
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

// Retornando el nuevo arreglo
console.log("Nuevo arreglo:");
console.table(nuevoArreglo);