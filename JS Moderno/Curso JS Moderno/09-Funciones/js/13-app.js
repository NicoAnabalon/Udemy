// Definiendo un objeto con funciones de flecha en sus valores
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log("Canción pausada"),
    borrar: id => console.log(`Cancion ${id} borrada`),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
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

// Agregando canción
reproductor.nuevaCancion = 'Nova Era';
// Obteniendo canción
reproductor.obtenerCancion;