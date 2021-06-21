// Eliminando elemento del localStorage con localStorage.removeItem(key);
localStorage.removeItem('nombre');

// Eliminando elemento del sessionStorage con sessionStorage.removeItem(key);
sessionStorage.removeItem('nombre');

// Actualizando arreglo de localStorage
const productoArray = JSON.parse(localStorage.getItem('producto'));
productoArray.marca = 'HP';
localStorage.setItem('producto', JSON.stringify(productoArray));

// Actualizando arreglo de sessionStorage
const mesesArray = JSON.parse(sessionStorage.getItem('meses'));
mesesArray.push('Abril');
sessionStorage.setItem('meses', JSON.stringify(mesesArray));

// Limpiando localStorage
localStorage.clear();

// Limpiando sessionStorage
sessionStorage.clear();