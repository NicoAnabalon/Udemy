// Instanciando Date
const diaHoy = new Date();

// Dejando locale como español
moment.locale('es');

// Mostrando fecha en formato especificado
console.log(moment().format('MMMM Do YYYY h:mm:ss a'));

// Mostrando fecha en formato predefinido de moment
console.log(moment().format('LLLL', diaHoy));

// Mostrando fecha de 3 días a futuro
console.log(moment().add(3, 'days').calendar());