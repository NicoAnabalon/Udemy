// Constructor Pattern
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    };
};

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    };
};

const persona = new Persona("Nicolas", "nicolas.anabalon.a@gmail.com");
console.log('persona :>> ', persona);

const cliente = new Cliente("Felipe", "cliente@cliente.com", "Codigo con Nicolas");
console.log('cliente :>> ', cliente);