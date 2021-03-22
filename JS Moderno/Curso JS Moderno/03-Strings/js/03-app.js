const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Concatenando producto y precio con la funcion concat
console.log(producto.concat(precio));

// Concatenando producto y precio con un +
console.log(producto + precio);

// Concatenando producto y precio con , esto agrega un espacio entre las variables
console.log(producto, precio);

// Concatenando con variables declaradas y strings
console.log("El producto " + producto + " tiene un precio de " + precio);

// Concatenando con template literals o backtick. Para llamar variables se usa ${}
console.log(`El producto ${producto} tiene un precio de ${precio}`);