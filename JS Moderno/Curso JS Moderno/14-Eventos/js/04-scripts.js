const formulario = document.querySelector('#formulario');

// Agregando evento submit al formulario
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log(e);
}