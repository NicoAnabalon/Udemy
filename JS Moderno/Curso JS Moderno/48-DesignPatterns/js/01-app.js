// Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    };
};

const persona = new Persona("Nicolas", "nicolas.anabalon.a@gmail.com");
console.log('persona :>> ', persona);