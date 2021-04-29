// arreglo.forEach( (elemento, indice) => { codigo })
const pendientes = ["Trabajo", "Comer", "Estudiar JavaScript"];
pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
} )

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500 },
    {nombre: "Televisión", precio: 100 },
    {nombre: "Tablet", precio: 200 },
    {nombre: "Audifonos", precio: 300 },
    {nombre: "Teclado", precio: 400 },
    {nombre: "Celular", precio: 700 }
]
carrito.forEach(producto => console.log(`${producto.nombre}: ${producto.precio}`));

// arreglo.map( elemento => codigo;)
carrito.map( (producto) => console.log(`${producto.nombre}: ${producto.precio}`))

// forEach no crea un arreglo nuevo mientras que map si crea un arreglo nuevo
const arregloForEach = carrito.forEach(producto => producto.nombre);
console.log(`Arreglo con for each: ${arregloForEach}`);
const arregloMap = carrito.map(producto => producto.nombre);
console.log(`Arreglo con map: ${arregloMap}`);