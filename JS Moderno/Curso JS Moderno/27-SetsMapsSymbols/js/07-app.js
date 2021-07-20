// Creando un generador
function *crearGenerador() {
    yield 1;
    yield "Nicolas";
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador); // Al comenzar a iterar queda suspendido el generador
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador); // Al terminar de iterar queda cerrado el generador

// Generador para carrito de compras
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"]

const iteradorNuevo = generadorCarrito(carrito);

console.log(iteradorNuevo.next());
console.log(iteradorNuevo.next());
console.log(iteradorNuevo.next());
console.log(iteradorNuevo.next());