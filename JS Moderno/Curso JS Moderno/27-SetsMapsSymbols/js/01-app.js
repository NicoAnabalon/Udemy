// Creando un set
const carrito = new Set();

// Agregando valor a un set
carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("Camisa"); // Esta no se agrega porque es duplicado
carrito.add("camisa"); // Es case sensitive

// Sabiendo el largo de un carrito
console.log(carrito.size);

// Comprobar si un valor existe en el set
console.log(carrito.has("Camisa"));

// Eliminando valor del set
carrito.delete("camisa");

// Los set son iterables
carrito.forEach(producto => {
    console.log(producto);
});

// Limpiar el set
carrito.clear();

// Imprimiendo carrito
console.log(carrito);

// Se le puede pasar como parametro un objeto al Set
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);