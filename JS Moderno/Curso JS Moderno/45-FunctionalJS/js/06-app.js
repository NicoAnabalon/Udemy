// Funciones Puras o Pure Functions

// Retornan la misma cantidad de dato que toma
const duplicar = numero => numero * 2;

// No modifican el valor original
const numero = 20;
const resultado = duplicar(numero);
console.log('numero :>> ', numero);
console.log('resultado :>> ', resultado);