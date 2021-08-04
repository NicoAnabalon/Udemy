const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(respuesta => respuesta.json())
        .then (resultado => mostrarJSON(resultado));
};

function mostrarJSON({empresa, id, nombre, trabajo}) {
    limpiarHTML();
    const div = document.createElement('div');

    const empresaP = document.createElement('p');
    empresaP.textContent = `Empresa: ${empresa}`;
    div.appendChild(empresaP);

    const idP = document.createElement('p');
    idP.textContent = `Id: ${id}`;
    div.appendChild(idP);

    const nombreP = document.createElement('p');
    nombreP.textContent = `Nombre: ${nombre}`;
    div.appendChild(nombreP);

    const trabajoP = document.createElement('p');
    trabajoP.textContent = `Trabajo: ${trabajo}`;
    div.appendChild(trabajoP);

    contenido.appendChild(div);
};

function limpiarHTML() {
    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
};