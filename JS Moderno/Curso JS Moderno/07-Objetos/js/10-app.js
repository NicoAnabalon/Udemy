"use strict";
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Producto:", producto);

const informacion = {
    peso: "1kg",
    medida: "1m"
}
console.log("Informacion:", informacion);

// Uniendo dos objetos con assign
const assign = Object.assign(producto, informacion);
console.log("Unión con assign:", assign);

// Uniendo dos objetos con Spread Operator o Rest Operator ("...nombre" genera una copia del objeto llamado "nombre")
const spreadRest = { ...producto, ...informacion };
console.log("Unión con spread/rest:", spreadRest);