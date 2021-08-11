const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Función normal
// function obtenerDatos() {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log('resultado :>> ', resultado))
//         .catch(error => console.log('error :>> ', error))
// }


async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log('resultado :>> ', resultado);
    } catch (error) {
        console.log('error :>> ', error);
    }
}