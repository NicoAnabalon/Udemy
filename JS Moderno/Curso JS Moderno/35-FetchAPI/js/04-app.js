const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarAPI(resultado));
}

function mostrarAPI(resultado) {
    limpiarHTML();

    let html = document.createElement('div');
    resultado.forEach(dato => {
        const {format, width, height, filename, author, author_url, post_url} = dato;
        const div = document.createElement('div');

        const texto = document.createElement('p');
        texto.textContent = `${filename} (${width}x${height}) de ${author} en formato ${format}`;
        div.appendChild(texto);

        const postURLP = document.createElement('p');
        postURLP.innerHTML = `Autor: ${author_url} <br> Post: ${post_url} <hr>`;
        div.appendChild(postURLP);

        html.appendChild(div);
    });

    contenido.appendChild(html);
}