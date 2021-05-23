const navegacion = document.querySelector('.navegacion');
console.log("Navegacion:");
console.log(navegacion);

// Recuperando el primer elemento de la navegacion
console.log("Primer elemento de la navegacion:");
console.log(navegacion.firstElementChild);

// Recuperando el ultimo elemento de la navegacion
console.log("Ultimo elemento de la navegacion:");
console.log(navegacion.lastElementChild);

// Recuperando elementos HTML con childNodes (Espacios en blanco/Saltos de linea son considerados como text)
console.log("Child Nodes:");
console.log(navegacion.childNodes);

// Recuperando elementos HTML con children (No considera espacios en blanco ni saltos de linea, devuelve sólo los enlaces en este caso)
console.log("Children:");
console.log(navegacion.children);

// Accediendo al primer elemento del HTMLCollection retornado por children
console.log("Accediendo al primer elemento de children:");
console.log(navegacion.children[0]);

// Existe nodeName y nodeType
console.log(`Accediendo al nodeName del primer elemento de children: ${navegacion.children[0].nodeName}`);
console.log(`Accediendo al nodeType del primer elemento de children: ${navegacion.children[0].nodeType}`);

// Recuperando children de card
const card = document.querySelector('.card');
console.log("Children de card:");
console.log(card.children);

// Recuperando al segundo children de card
console.log("Segundo children de card:");
console.log(card.children[1]);

// Recuperando children del segundo children de card
console.log("Children del segundo children de card:");
console.log(card.children[1].children);

// Recuperando al titulo del segundo children del segundo children de card
console.log("Segundo children del segundo children de card:");
console.log(card.children[1].children[1]);

// Cambiando el titulo de la primera card
card.children[1].children[1].textContent = "Nuevo heading desde traversing the dom";

// Cambiando la imagen de la primera card
card.children[0].src = "img/hacer4.jpg";

// parentNode funciona similar a childNodes
console.log("Parent node de card:");
console.log(card.parentNode);

// parentElement funciona similar a children
console.log("Parent element de card:");
console.log(card.parentElement);

// parentElement de parentElement de card
console.log("Parent element del parent element de card:");
console.log(card.parentElement.parentElement);

// nextElementSibling selecciona al siguiente elemento hermano
console.log("nextElementSibling de card:");
console.log(card.nextElementSibling);

// Recuperando al ultimo elemento de card
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log("Ultimo card:");
console.log(ultimoCard);

// previousElementSibling selecciona al anterior elemento hermano
console.log("previousElementSibling del ultimo card:");
console.log(ultimoCard.previousElementSibling);