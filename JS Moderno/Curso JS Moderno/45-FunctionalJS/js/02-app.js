// Definiendo función de suma
const suma = (a, b) => a + b;
// Definiendo función de multiplicación
const multiplicar = (a, b) => a * b;

// Definiendo función con función como argumento
const sumarOMultiplicar = fn => fn(10, 20);

// Usando suma como argumento
console.log('sumarOMultiplicar(suma) :>> ', sumarOMultiplicar(suma));
// Usando multiplicar como argumento
console.log('sumarOMultiplicar(suma) :>> ', sumarOMultiplicar(multiplicar));