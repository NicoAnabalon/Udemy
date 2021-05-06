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

// Encontrar el indice de un elemento con forEach
meses.forEach( (mes, index) => {
    if(mes === "Abril"){
        console.log(`Indice de abril: ${index}`);
    }
} );

// Array method: findIndex
const indice = meses.findIndex( mes => mes === "Abril");
console.log(`Indice: ${indice}`);

// En caso de no encontrar el indice devuelve -1
const indiceNoEncontrado = meses.findIndex( mes => mes === "Diciembre");
console.log(`Indice no encontrado: ${indiceNoEncontrado}`);

// Encontrar indice de un arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(`Indice 2: ${indice2}`);

// findIndex retorna sólo el primer indice que encuentra cumpliendo la condición