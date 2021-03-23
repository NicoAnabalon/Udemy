const numero1 = 20;
console.log("numero1:", numero1);
const numero2 = "20";
console.log("numero2:", numero2);
const numero3 = 30;
console.log("numero3:", numero3);

// Comparar si 2 numeros son iguales. No verifica tipo de dato
console.log("numero1 = numero3:", numero1 == numero3);
console.log("numero1 = numero2:", numero1 == numero2);

// Comparador estricto de igualdad. Verifica tipo de dato
console.log("numero1 = numero3:", numero1 === numero3);
console.log("numero1 = numero2:", numero1 === numero2);
console.log("numero1 = parseInt(numero2):", numero1 === parseInt(numero2));

// Compara desigualdad. No verifica tipo de dato
console.log("numero1 != numero2:", numero1 != numero2);

// Compara desigualdad estricto. Verifica tipo de dato
console.log("numero1 !== numero2:", numero1 !== numero2);