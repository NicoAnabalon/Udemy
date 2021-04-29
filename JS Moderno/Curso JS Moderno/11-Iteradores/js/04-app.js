// while(condicion){ codigo }
let i = 0; // Inicializacion de i para ser utilizado dentro del while
while(i <= 10) {
    console.log(`Numero: ${i}`);
    i++; // Incremento
}

//Fizz Buzz en while
let n = 0;
while(n <= 100) {
    if(n % 15 === 0){
        console.log(`${n} Fizz Buzz`);
    } else if (n % 5 === 0) {
        console.log(`${n} Buzz`);
    } else if (n % 3 === 0) {
        console.log(`${n} Fizz`);
    }
    n++;
}