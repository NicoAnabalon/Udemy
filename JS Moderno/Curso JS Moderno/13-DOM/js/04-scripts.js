// Seleccionando clases mediante querySelector (Retorna el primero que encuentre)
const card = document.querySelector(".card");
console.log("Card:");
console.log(card);

// Seleccionando id mediante querySelector (Retorna el primero que encuentre)
const formulario = document.querySelector("#formulario");
console.log("Formulario:");
console.log(formulario);

// Seleccionando elemento HTML mediante querySelector (Retorna el primero que encuentre)
const navegacion = document.querySelector("nav");
console.log("Nav:");
console.log(navegacion);

// Se pueden tener selectores especificos
const info = document.querySelector(".premium .info");
console.log("Info:");
console.log(info);

// Seleccionando el segundo card de hospedaje
const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log("Card:");
console.log(segundoCard);