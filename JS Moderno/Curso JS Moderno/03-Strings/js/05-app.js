const producto = 'Monitor 20 pulgadas';
console.log(producto);

// Reemplazando una parte del string
console.log(producto.replace(' pulgadas', '\"'));

// Extraer una parte del string
// slice(x,y) muestra desde la posicion x hasta la posicion y
console.log(producto.slice(0,10));
// slice(x) muestra desde x en adelante
console.log(producto.slice(8));
// slice(x,y) con x>y no hace nada
console.log(producto.slice(10,8));

// Creando un substring
// substring(x,y) muestra desde la posicion x hasta la posicion y
console.log(producto.substring(0,10));
// substring(x,y) con x>y, invierte x e y, quedando substring(y,x)
console.log(producto.substring(10,0));

// Mostrando solo un caracter del string
// charAt(x) donde x es el string que mostrara
console.log(producto.charAt(0));