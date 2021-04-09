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

// Recorriendo con for
console.log("--- Inicio for ---");
for(let i=0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
console.log("--- Fin for ---");

// Recorriendo con forEach
console.log("--- Inicio forEach");
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} );
console.log("--- Fin forEach ---");