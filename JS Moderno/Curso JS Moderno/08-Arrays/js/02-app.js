const numeros = [10, 20, 30, 40, 50, [1,2,3]];
console.log("Arreglo:", numeros);
console.table(numeros);

// Acceder al valor de un indice del arreglo
console.log("Primer valor:", numeros[2]);

// Si se accede a un indice que no existe da undefined
console.log("Indice inexistente:", numeros[20]);

// Accediendo al valor de un indice del arreglo dentro del arreglo
console.log("Primer valor dentro del array dentro de array:",numeros[5][2]);