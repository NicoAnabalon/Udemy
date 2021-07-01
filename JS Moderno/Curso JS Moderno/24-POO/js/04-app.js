// Creando una clase (Class Declaration)
class Cliente {
    // Declarando propiedad como privada. Utilizable sólo dentro de la clase
    #nombre;

    // Constructor de la clase
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // Creando función
    mostrarInformacion() {
        return `Cliente ${this.#nombre}, tu saldo es de $${this.saldo}`;
    }

    // Creando función estática
    static bienvenida() {
        return "Bienvenido al cajero";
    }
}

// Instanciando clase
const nicolas = new Cliente("Nicolas", 400);
console.log(nicolas.mostrarInformacion());