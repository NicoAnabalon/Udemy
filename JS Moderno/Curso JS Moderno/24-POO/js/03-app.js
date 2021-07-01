// Creando una clase (Class Declaration)
class Cliente {
    // Constructor de la clase
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Crear función
    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de $${this.saldo}`;
    }

    // Creando función estática
    static bienvenida() {
        return "Bienvenido al cajero";
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // Función que va a buscar atributos del Padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribiendo función estática sólo para este objeto
    static bienvenida() {
        return "Bienvenido al cajero de empresas";
    }
}

// Instanciando clase
const nicolas = new Cliente("Nicolas", 400);
const empresa = new Empresa("Practicando con Nicolas", 500, 996747517, "Cursos");
console.log(empresa);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());