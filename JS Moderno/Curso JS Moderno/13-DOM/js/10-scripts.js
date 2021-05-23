// Creando elemento con createElement
const enlace = document.createElement('a');
// Agregando texto
enlace.textContent = "Nuevo enlace";
// Agregando href
enlace.href = '#';
// Agregando target
enlace.target = "_blank";
console.log("Enlace:");
console.log(enlace);

// Seleccionando la navegacion
const navegacion = document.querySelector('.navegacion');

// Agregando enlace con appendChild
navegacion.appendChild(enlace);

// Agregando enlace con insertBefore
navegacion.insertBefore(enlace, navegacion.children[1]);

// Crear un card de forma dinamica
// Creando el parrafo1
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add('categoria', 'concierto');
// Creando el parrafo2
const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add('titulo');
// Creando el parrafo3
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
// Creando el div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
// Creando la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
// Crear el card
const card = document.createElement('div');
card.classList.add('card');
// Asignar la imagen
card.appendChild(imagen);
// Asignar info
card.appendChild(info);
console.log(card);

// Insertar card en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);