// Object literal
const cliente = {
    nombre: "Nicolas",
    saldo: 500
}
console.log(cliente);

// Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const nicolas = new Cliente('Nicolas', 500);
console.log(nicolas);