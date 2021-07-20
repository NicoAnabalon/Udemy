// Creando un objeto
const producto = {
    idProducto: 10
}

// Creando un weakmap
const weakmap = new WeakMap();

// Añadiendo el objeto a weakmap
weakmap.set(producto, 'Monitor');

// Verificando si existe la llave
console.log(weakmap.has(producto));

// Obteniendo el valor del objeto
console.log(weakmap.get(producto));


console.log(weakmap);

// Eliminando producto del weakmap
weakmap.delete(producto);

// No se puede iterar un weakmap ni utilizar .size