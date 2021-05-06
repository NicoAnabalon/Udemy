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

// Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if (mes === "Enero"){
        console.log("Enero si existe");
    }
});

// Array method includes(valor) <= arreglo
const resultado = meses.includes("Diciembre");
console.log(`Resultado: ${resultado}`);

// Array method some() <= arreglo de objetos
const existe = carrito.some( producto => producto.nombre === "Monitor curvo");
console.log(`Existe: ${existe}`);

// Array method para arreglo
const existe2 = meses.some( mes => mes === "Enero" );
console.log(`Existe 2: ${existe2}`);