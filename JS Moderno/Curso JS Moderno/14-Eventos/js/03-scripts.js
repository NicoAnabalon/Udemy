const busqueda = document.querySelector('.busqueda');

// Registrando evento al presionar una tecla en el input de busqueda
// busqueda.addEventListener('keydown', () => {
//     console.log('Tecla presionada');
// });

// // Registrando evento al soltar una tecla en el input de busqueda
// busqueda.addEventListener('keyup', () => {
//     console.log('Tecla soltada');
// });

// // Registrando evento al salir del input de busqueda
// busqueda.addEventListener('blur', () => {
//     console.log('Saliste del input');
// });

// // Registrando evento al copiar un texto en el input de busqueda
// busqueda.addEventListener('copy', () => {
//     console.log('Texto copiado');
// });

// // Registrando evento al cortar un texto en el input de busqueda
// busqueda.addEventListener('cut', () => {
//     console.log('Texto cortado');
// });

// // Registrando evento al pegar un texto en el input de busqueda
// busqueda.addEventListener('paste', () => {
//     console.log('Texto pegado');
// });

// // Registrando evento al registrar/borrar algo en el input de busqueda
// busqueda.addEventListener('input', () => {
//     console.log('input');
// });

// Trabajando con el evento input
busqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
        console.log("Falló la validación");
    }
}); 