// Función original que suma 3 numeros
const suma = (a, b, c) => a + b + c;
console.log('suma(1,2,3) :>> ', suma(1,2,3));

// Función parcial que separa la suma de 2 numeros
const parcial = (a) => (b, c) => suma(a, b, c);
const primerNumero = parcial(1);
const resultado = primerNumero(2, 3);
console.log('resultado currying :>> ', resultado);

// Función parcial total que separa la suma de los 3 numeros
const parcialTotal = a => b => c => suma(a, b, c);
const primero = parcialTotal(1);
const segundo = primero(2);
const resultadoParcialTotal = segundo(3);
console.log('resultadoParcialTotal :>> ', resultadoParcialTotal);

// Sintaxis final
const currying = a => b => c => suma(a, b, c);
const curryingFinal = currying(1)(2)(3);
console.log('curringFinal :>> ', curryingFinal);