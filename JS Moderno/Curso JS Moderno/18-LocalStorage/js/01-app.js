// Agregando un item a localStorage con localStorage.setItem(key, value);
localStorage.setItem('nombre', 'Nicolas');

// Agregando un item a sessionStorage con sessionStorage.setItem(key, value);
sessionStorage.setItem('nombre', 'Nicolas');

// Creando un objeto producto y guardando como json en localStorage
const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
};
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

// Creando un objeto producto y guardando como json en sessionStorage
const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);
sessionStorage.setItem('meses', mesesString);