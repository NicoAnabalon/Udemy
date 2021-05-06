const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
console.log(carrito);

// Filtrando mediante precio > 400
let resultado = carrito.filter( producto => producto.precio > 400 );
console.log(resultado);

// Filtrando mediante precio < 600
let resultado2 = carrito.filter( producto => producto.precio < 600 );
console.log(resultado2);

// Filtrando para no obtener Tablet
let resultado3 = carrito.filter( producto => producto.nombre !== "Tablet");
console.log(resultado3);