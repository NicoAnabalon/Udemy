const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Objeto:", producto);

// Objeto dentro de otro objeto
const producto2 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        peso: "1kg",
        medida: "1m"
    }
}
console.log("Objeto con otro objeto dentro:", producto2);

// Accediendo a propiedad del objeto dentro de producto2
console.log("Peso:", producto2.informacion.peso);
console.log("Medida:", producto2.informacion.medida);