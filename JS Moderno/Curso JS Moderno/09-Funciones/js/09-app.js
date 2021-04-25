// Definiendo un objeto con funciones en sus valores
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log("Canción pausada");
    },
    borrar: function(id) {
        console.log(`Cancion ${id} borrada`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}

// Llamando a la función de la llave reproducir
reproductor.reproducir(30);

// Llamando a la función de la llave pausar
reproductor.pausar();

// Llamando a la función de la llave borrar
reproductor.borrar(30);

// Llamando a la función de la llave crearPlaylist
reproductor.crearPlaylist('Música Nico');

// Llamando a la función de la llave reproducirPlaylist
reproductor.reproducirPlaylist('Música Nico');