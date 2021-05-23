// Seleccionando clases .btn-flotante y .footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Agregando eventListener al btnFlotante: al hacer click se ejecuta la función mostrarOcultarFooter
btnFlotante.addEventListener('click', mostrarOcultarFooter);

// Creando función mostrarOcultarFooter
function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = "Idioma y Moneda";
    }
    else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = "X Cerrar";
    }
}