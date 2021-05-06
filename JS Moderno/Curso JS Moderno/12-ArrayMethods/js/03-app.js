const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
console.log(carrito);

// Calculando total con forEach
let total = 0
carrito.forEach( producto => total += producto.precio );
console.log(`Total: ${total}`);

// Calculando total con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(`Resultado: ${resultado}`);