import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        // URL Prod
        // const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        // URL Test
        const url = `https://private-anon-c7d99f691b-lyricsovh.apiary-mock.com/v1/${this.artista}/${this.cancion}`;

        fetch(url, {mode: 'cors'})
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if(resultado.lyrics) {
                    const {lyrics} = resultado;
    
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = "La canción no existe, prueba con otra búsqueda";
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = "";
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            });
    }
}

export default API;