// Obteniendo un objeto de localStorage usando localStorage.getItem(key);
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// Obteniendo un objeto de sessionStorage usando localStorage.getItem(key);
const nombre2 = localStorage.getItem('nombre');
console.log(nombre2);

// Obteniendo un JSON en string desde localStorage y parseandolo a JSON
const productoJSON = JSON.parse(localStorage.getItem('producto'));
console.log(productoJSON);

// Obteniendo un JSON en string desde sessionStorage y parseandolo a JSON
const mesesJSON = JSON.parse(sessionStorage.getItem('meses'));
console.log(mesesJSON);