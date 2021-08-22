// Singleton Pattern
let instancia = null;
class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    };
};

const persona = new Persona("Nicolas", "nicolas.anabalon.a@gmail.com");
console.log('persona :>> ', persona);

const persona2 = new Persona("Felipe", "persona@persona.com");
console.log('persona2 :>> ', persona2);