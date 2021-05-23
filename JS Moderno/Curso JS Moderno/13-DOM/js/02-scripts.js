// Seleccionar elementos por su clase
// header
const header = document.getElementsByClassName("header");
console.log("Header:");
console.log(header);
// hero
const hero = document.getElementsByClassName("hero");
console.log("Hero:");
console.log(hero);

// Si las clases existen más de 1 vez
const contenedores = document.getElementsByClassName("contenedor");
console.log("Contenedores:");
console.log(contenedores);

// Si una clase no existe
const noExiste = document.getElementsByClassName("no-existe");
console.log("No existe:");
console.log(noExiste);