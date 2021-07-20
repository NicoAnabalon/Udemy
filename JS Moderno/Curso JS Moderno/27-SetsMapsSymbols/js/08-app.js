const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("Nombre", "Nicolás");
datos.set("Profesion", "Desarrollador Backend");

// Iterador entries. Devuelve key y value.
// Sobre objetos
for (let entry of ciudades.entries()) {
    console.log(entry);
}
// Sobre Set
for (let entry of ordenes.entries()) {
    console.log(entry);
}
// Sobre Map
for (let entry of datos.entries()) {
    console.log(entry);
}

// Iterador values. Devuelve sólo value.
// Sobre objetos
for (let value of ciudades.values()) {
    console.log(value);
}
// Sobre Set
for (let value of ordenes.values()) {
    console.log(value);
}
// Sobre Map
for (let value of datos.values()) {
    console.log(value);
}

// Iterador keys. Devuelve sólo key.
// Sobre objetos
for (let key of ciudades.keys()) {
    console.log(key);
}
// Sobre Set
for (let key of ordenes.keys()) {
    console.log(key);
}
// Sobre Map
for (let key of datos.keys()) {
    console.log(key);
}

// Iterador Default
// Sobre objetos
for(let ciudad of ciudades) {
    console.log(ciudad);
}
// Sobre Set
for(let orden of ordenes) {
    console.log(orden);
}
// Sobre Map
for(let dato of datos) {
    console.log(dato);
}