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

    // Creando función estática. No se debe instanciar para utilizarlas, si se llama desde la instancia dará un error
    static bienvenida() {
        return "Bienvenido al cajero";
    }
}

// Instanciando clase
const nicolas = new Cliente("Nicolas", 400);
console.log(nicolas.mostrarInformacion());
console.log(Cliente.bienvenida());