// Importando variables. Se puede renombrar algo importado con as, por ejemplo: nombreCliente as cliente. Por otra parte, para el export default se le puede poner directamente otro nombre
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// Utilizando variables importadas
console.log(nombreCliente);
console.log(ahorro);

// Utilizando funciones importadas
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

// Utilizando clases importadas
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());
const empresa = new Empresa("Código con Nicolás", 200, "Curso online");
console.log(empresa);
console.log(empresa.mostrarInformacion());

// Utilizando el export default
nuevaFuncion();