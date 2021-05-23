const nav = document.querySelector('.navegacion');

// Registrando evento al hacer click en la navegación
nav.addEventListener('click', () => {
    console.log("click en nav");
});

// Registrando evento al pasar el mouse sobre la navegacion
nav.addEventListener('mouseenter', () => {
    console.log("Mouse entró");
    nav.style.backgroundColor = 'red';
});

// Registrando evento al sacar el mouse de la navegacion
nav.addEventListener('mouseout', () => {
    console.log("Mouse salió");
    nav.style.backgroundColor = 'transparent';
});

// Registrando evento al presionar el boton del mouse en la navegacion
nav.addEventListener('mousedown', () => {
    console.log("Se apretó el mouse");
});

// Registrando evento al soltar el boton del mouse en la navegacion
nav.addEventListener('mouseup', () => {
    console.log("Se soltó el mouse");
});

// Registrando evento al hacer doble click en la navegación
nav.addEventListener('dblclick', () => {
    console.log("Doble click en nav");
});