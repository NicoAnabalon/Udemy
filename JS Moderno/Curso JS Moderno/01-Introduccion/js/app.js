console.time("Tiempo transcurrido");
const nombre = prompt('Cual es tu nombre?');
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JS Moderno.`;
console.timeEnd("Tiempo transcurrido");