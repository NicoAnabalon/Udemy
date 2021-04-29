// Declaramos la variable puntaje con valor 1000
const puntaje = 1000;
console.log(`Puntaje: ${puntaje}`);

// Creando condicional if y else
if(puntaje != 1000) {
    console.log("Es diferente...");
} else {
    console.log("Es igual...");
}

// Es importante destacar la diferencia entre operador no estricto (==, !=) y operador estricto (===, !==)
if(puntaje === "1000") {
    console.log("Si es igual...");
} else {
    console.log("No es igual...");
}