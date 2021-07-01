// Creando una clase (Class Declaration)
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Creando una clase (Class Expression)
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instanciando clase
const nicolas = new Cliente("Nicolas", 400);
console.log(nicolas);
const nicolas2 = new Cliente2("Nicolas 2", 400);
console.log(nicolas2);