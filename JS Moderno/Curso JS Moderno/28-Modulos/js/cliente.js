// Exportando variables
export const nombreCliente = "Nicolas";
export const ahorro = 20000;

// Exportando funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}
export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log("Si tiene saldo");
    } else {
        console.log("No tiene saldo");
    }
}

// Exportando clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// Exportando mediante export default
export default function nuevaFuncion() {
    console.log("Export default");
}