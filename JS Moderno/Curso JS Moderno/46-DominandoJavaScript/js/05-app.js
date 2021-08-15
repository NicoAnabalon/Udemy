function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
};

const informacion = {
    nombre: "Nicolás"
};

const musicaFavorita = ["Metal", "Rock"];

// Call acepta elementos individuales
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);
// Apply acepta objetos
persona.apply(informacion, musicaFavorita);
// Bind funciona similar a call pero crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();