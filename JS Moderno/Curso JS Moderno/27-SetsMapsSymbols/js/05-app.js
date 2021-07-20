// Creando un symbol
const sym = Symbol();
const sym2 = Symbol();

// Cada symbol es único
console.log(sym === sym2);

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llave del objeto
persona[nombre] = "Nicolas";
persona[apellido] = "Anabalón";
persona.tipoCliente = "Premium";
persona.saldo = 40000;

// Accediendo al valor de un symbol
console.log(persona[nombre]);
console.log(persona[apellido]);

// Las propiedades que utilizan symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol("Nombre del Cliente");
persona[nombreCliente] = "Catalina";

console.log(persona);