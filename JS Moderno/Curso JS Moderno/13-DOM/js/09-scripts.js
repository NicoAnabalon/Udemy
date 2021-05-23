const primerEnlace = document.querySelector('a');
console.log("Primer enlace: ");
console.log(primerEnlace);

// Eliminando un elemento mediante remove
primerEnlace.remove();

const navegacion = document.querySelector('.navegacion');
console.log("Navegacion children:");
console.log(navegacion.children);
// Eliminando un elemento desde el padre
navegacion.removeChild(navegacion.children[1]);