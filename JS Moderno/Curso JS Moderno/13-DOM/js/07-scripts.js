const encabezado = document.querySelector("h1");
console.log("Encabezado:");
console.log(encabezado);

// Cambiando el color de fondo del h1
encabezado.style.backgroundColor = "red";

// Cambiando la fuente del h1
encabezado.style.fontFamily = "Arial";

// Cambiando todas las letras a mayusculas del h1
encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
console.log("Primera card:");
console.log(card);

// Agregando una clase a la card
card.classList.add("nueva-clase");

// Eliminando la clase card
card.classList.remove("card");