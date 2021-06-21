// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    } );
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Accediendo a lo que el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    // Validacion
    if (tweet === '') {
        mostrarError("El tweet no puede ir vacío.");
        return; // Evitando que se ejecute el resto del código
    }

    const tweetObj = {
        id: Date.now(),
        tweet // Al ser la llave y el valor iguales no es necesario ponerlo con la sintaxis tweet: tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado creamos el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Muestra mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertando el mensaje en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina mensajeError después de 3 segundos
    setTimeout( () => {
        mensajeError.remove();
    }, 3000 );
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertando en el HTML
            listaTweets.appendChild(li);
        } );
    }

    sincronizarStorage();
}

// Agrega tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}