const producto = '                    Monitor 20 Pulgadas                    ';
// Imprimiendo el producto
console.log(producto);
// Imprimiendo el largo del producto
console.log(producto.length);

// Eliminando espacios en blanco del inicio
console.log(producto.trimStart());

// Eliminando espacios en blanco del final
console.log(producto.trimEnd());

// Eliminando espacios en blanco del inicio y el final
console.log(producto.trim());

// Concatenando metodos para eliminar el espacio en blanco del inicio y el final
console.log(producto.trimStart().trimEnd());