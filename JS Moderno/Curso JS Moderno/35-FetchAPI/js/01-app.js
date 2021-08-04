const cargarTxtBtn = document.querySelector('#cargarTxt');
const contenido = document.querySelector('#contenido');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        .then(datos => {
            mostrarTexto(datos);
        })
        .catch(error => {
            console.log(error);
        });
};

function mostrarTexto(texto){
    limpiarHTML();
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = `Contenido txt: ${texto}`;
    div.appendChild(p);
    contenido.appendChild(div);
};

function limpiarHTML() {
    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}