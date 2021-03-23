let puntaje = 5;
console.log("Numero original:", puntaje);

// Incrementando de 1 en 1 con x++
puntaje++;
console.log("Sumando 1 con x++:", puntaje);

// Incrementando de 1 en 1 con ++x
++puntaje;
console.log("Sumando 1 con ++x:", puntaje);

// Disminuyendo de 1 en 1 con x--
puntaje--;
console.log("Restando 1 con x--:", puntaje);

// Disminuyendo de 1 en 1 con --x
--puntaje;
console.log("Restando 1 con --x:", puntaje);

// x++ no suma inmediatamente. Mismo comportamiento para la resta
let puntaje2 = 5;
console.log("Puntaje original:", puntaje2);
console.log("Sumando con x++:", puntaje2++);

// ++x si suma inmediatamente. Mismo comportamiento para la resta
let puntaje3= 5;
console.log("Puntaje original:", puntaje3);
console.log("Sumando con ++x:", ++puntaje3);

// Incrementando x con +=x
let original = 5;
console.log("Numero original:", original);
console.log("Sumando 3:", original+=3);

// Disminuyendo x con -=x
console.log("Restando3:", original-=3);