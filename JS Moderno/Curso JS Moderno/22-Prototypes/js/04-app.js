// Constructor Cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creando prototype específico para Cliente
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000) {
        tipo = "Gold";
    } else if (this.saldo > 5000) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retiro) {
    this.saldo -= retiro;
}

// Constructor Persona
function Persona(nombre, saldo, telefono) {
    // Utilizando herencia con Constructor.call(this, parametro1, ..., parametroN)
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Heredando funciones de prototype con Object.create(ConstructorOriginal.prototype);
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciando
const nicolas = new Persona("Nicolas", 5000, 996747517);
console.log(nicolas);
console.log(nicolas.nombreClienteSaldo());

// Agregando prototypes específicos para persona
Persona.prototype.mostrarTelefono = function () {
    return `El telefono de ${this.nombre} es ${this.telefono}`;
}

console.log(nicolas.mostrarTelefono());