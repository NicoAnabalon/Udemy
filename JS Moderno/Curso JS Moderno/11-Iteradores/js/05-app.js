// do { codigo } while (condicion)
let i = 0; // Inicializando i para ser utilizado en el do while
do {
    console.log(`Numero: ${i}`);
    i++; // Incremento
} while (i <= 10); // Condicion

// Fizz Buzz
let n = 0;
do {
    if(n % 15 === 0){
        console.log(`${n} Fizz Buzz`);
    } else if(n % 5 === 0){
        console.log(`${n} Buzz`);
    } else if(n % 3 === 0){
        console.log(`${n} Fizz`);
    }
    n++;
} while (n <= 100);