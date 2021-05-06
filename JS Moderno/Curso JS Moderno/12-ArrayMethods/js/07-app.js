const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
console.log(meses);
const meses2 = ["Agosto", "Septiembre"];
console.log(meses2);

// Uniendo dos arreglos con .concat
const resultado = meses.concat(meses2);
console.log(resultado);

// Uniendo dos arreglos con spread operator
const resultado2 = [...meses, ...meses2];
console.log(resultado2);