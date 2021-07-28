// Arreglo inicial de paises
const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra"];

// Agrega un pais y realiza un callback a la función
function nuevoPais(pais, callback) {
    setTimeout(() => {
        console.log("----------------");
        paises.push(pais);
        callback();
    }, 2000);
}

// Muestra los paises iniciales
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        });
    }, 1000);
}

mostrarPaises();
nuevoPais("Alemania", mostrarPaises);