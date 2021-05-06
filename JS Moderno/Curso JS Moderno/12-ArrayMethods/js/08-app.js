const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
console.log(meses);

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
console.log(carrito);

// Spread operator crea un nuevo arreglo, no modifica el inicial
const meses2 = [...meses, "Agosto"];
console.log(meses2);
console.log(meses);

// Spread operator para arreglo de objetos
const producto = {nombre: "Disco Duro", precio: 300};
console.log(producto);
const carrito2 = [...carrito, producto];
console.log(carrito2);