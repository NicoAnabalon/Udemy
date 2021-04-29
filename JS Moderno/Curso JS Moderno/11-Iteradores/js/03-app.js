// Fizz Buzz: Desde 0 a n, todos los multiplos de 3 imprimen fizz, todos los multiplos de 5 imprimen buzz y todos los multiplos de 3 y 5 imprimen fizz buzz
for(let n = 0; n <= 100; n++){
    if(n % 15 === 0){
        console.log(`${n} Fizz Buzz`);
    } else if (n % 5 === 0){
        console.log(`${n} Buzz`);
    } else if (n % 3 === 0){
        console.log(`${n} Fizz`);
    }
}
