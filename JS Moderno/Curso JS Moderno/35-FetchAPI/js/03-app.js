const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarArray(resultado));
};


function mostrarArray(empleados) {
    limpiarHTML();
    let html = document.createElement('div');
    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        
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
        trabajoP.innerHTML = `Trabajo: ${trabajo} <hr>`;
        div.appendChild(trabajoP);

        html.appendChild(div);
    }) 
    contenido.appendChild(html);
}



function limpiarHTML() {
    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}