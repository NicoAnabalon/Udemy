const autenticado = true;
console.log(`Autenticado: ${autenticado}`);

if (autenticado){
    console.log("El usuario está autenticado");
}

const puntaje = 450;
console.log(`Puntaje: ${puntaje}`);

function revisarPuntaje(){
    if (puntaje > 400) {
        console.log("¡Felicidades! Excelente puntaje");
        return;
    } else if (puntaje > 300) {
        console.log("¡Felicidades! Buen puntaje");
        return;
    }
}

revisarPuntaje();