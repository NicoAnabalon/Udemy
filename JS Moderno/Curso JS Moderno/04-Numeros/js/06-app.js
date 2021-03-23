const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Sabiendo el tipo de dato de una variable
console.log(typeof numero1);
console.log(typeof numero4);

// Convertir string a numero entero
console.log(Number.parseInt(numero1));

// Convertir string a numero flotante
console.log(Number.parseFloat(numero2));

// Una palabra no puede ser convertida a numero. Retorna NaN (Not a Number)
console.log(Number.parseFloat(numero3));

// Verificar si un numero es entero
console.log(Number.isInteger(numero4));