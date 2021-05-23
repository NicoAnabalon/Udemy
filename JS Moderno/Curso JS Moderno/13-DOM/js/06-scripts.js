// Seleccionando el encabezado del documento
const encabezado = document.querySelector(".contenido-hero h1");
console.log("Encabezado");
console.log(encabezado);

// Seleccionando el texto del encabezado del documento. No encuentra texto con visibility: hidden;
console.log("Encabezado inner text:");
console.log(encabezado.innerText);

// Seleccionando el texto del encabezado del documento. Si encuentra texto con visibility: hidden;
console.log("Encabezado text content:");
console.log(encabezado.textContent);

// Seleccionando el html del encabezado del documento
console.log("Encabezado inner html:");
console.log(encabezado.innerHTML);

// Seleccionando el textContent del encabezado del documento con query selector
const encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log("Encabezado text content:");
console.log(encabezado2);

// Cambiando el encabezado del documento
document.querySelector(".contenido-hero h1").textContent = "Este será el nuevo h1 del encabezado";

// Seleccionando la imagen de la primera card
const imagen = document.querySelector('.card img');
console.log("Imagen de la primera card:");
console.log(imagen);

imagen.src = "img/hacer2.jpg";