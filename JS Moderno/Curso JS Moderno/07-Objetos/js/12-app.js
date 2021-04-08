// Object Literal (OL)
const productoOL = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log("Object Literal:", productoOL);

// Object Constructor (OC)
function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const productoOC = new Producto("Monitor 20 Pulgadas", 300, true);
console.log("Object Constructor:", productoOC);

// Reutilizando el object constructor para crear un nuevo objeto
const productoNuevo = new Producto("Monitor 24 Pulgadas", 350, false);
console.log("Nuevo objeto reutilizando el object constructor:", productoNuevo);