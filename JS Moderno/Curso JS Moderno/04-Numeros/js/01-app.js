// Iniciando y declarando números
// Los numeros se declaran sin ""
const numero = 20;
console.log(numero);
// Si se declaran con "" pasan a ser strings
const noEsNumero = "20";
console.log(noEsNumero);

// Para declarar decimales se utiliza . como separador
const numeroDecimal = 20.2;
console.log(numeroDecimal);

// En caso de ser 0.algo no es necesario poner el 0
const numero0Decimal = .25;
console.log(numero0Decimal);

// Para un numero negativo se utiliza - antes del numero
const numeroNegativo = -20;
console.log(numeroNegativo);

// Igualmente se pueden declarar con Number(n). Esto crea un objeto con el numero.
const numeroNew = new Number(20);
console.log(numeroNew);