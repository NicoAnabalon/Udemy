// Seleccionando clase mediante querySelectorAll (Retorna todos los elementos encontrados)
const card = document.querySelectorAll(".card");
console.log("Card:");
console.log(card);

// Seleccionando elementos HTML mediante querySelectorAll (Retorna todos los elementos encontrados)
const etiquetaA = document.querySelectorAll("a");
console.log("Etiqueta a:");
console.log(etiquetaA);

// Si no existe el elemento retorna un NodeListVacio
const noExiste = document.querySelectorAll("no-existe");
console.log("No existe:");
console.log(noExiste);