// Mixin
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    };
};

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    };
};

const funciones = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} y Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
};

// Añadir funciones a las clases
Object.assign(Persona.prototype, funciones);
Object.assign(Cliente.prototype, funciones);

const persona = new Persona("Nicolas", "nicolas.anabalon.a@gmail.com");
console.log('persona :>> ', persona);
persona.mostrarInformacion();
persona.mostrarNombre();

const cliente = new Cliente("Cliente", "cliente@cliente.com");
console.log('cliente :>> ', cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();