const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}
console.log("Producto:", producto);

// Destructuring para objetos dentro otros objetos
const { informacion: { medidas: {medida} } } = producto;
console.log("Medida:", medida);
// Medidas no queda creado al acceder mediante destructuring
// console.log("Medidas:", medidas);

// Creando todas las variables hasta pais con destructuring
const { informacion, informacion: { fabricacion, fabricacion: { pais } }} = producto;
console.log("Informacion:", informacion);
console.log("Fabricacion:", fabricacion);
console.log("Pais:", pais);