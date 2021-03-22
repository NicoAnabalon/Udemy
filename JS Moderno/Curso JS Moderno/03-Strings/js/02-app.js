const producto = "Monitor 20";
console.log(producto);

// Determinando la cantidad de letras de la cadena de texto
console.log(producto.length);

// Verificando el indice de la palabra a buscar (Retorna el index o -1). Es case sensitive
console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('20'));
console.log(producto.indexOf('monitor'));

// Verificando si la palabra se encuentra (Retorna true o false). Es case sensitive
console.log(producto.includes('Monitor'));
console.log(producto.includes('pulgadas'));
console.log(producto.includes('monitor'));