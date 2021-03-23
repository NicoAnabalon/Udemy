// Se pueden utilizar las funciones/operaciones de Math

// PI
const pi = Math.PI;
console.log("PI:", pi);

// Redondear con round(x)
const redondear = Math.round(2.3);
console.log("Redondear:", redondear);
// Redondea hacia arriba desde 2.5 con round
const redondeaHaciaArriba = Math.round(2.5);
console.log("Redondear hacia arriba:", redondeaHaciaArriba);

// Redondear con ceil(x) siempre redondea hacia arriba
const redondeoCeil = Math.ceil(2.1);
console.log("Redondeando con Ceil:", redondeoCeil);

// Redondear con floor(x) siempre redondea hacia abajo
const redondeoFloor = Math.floor(2.9);
console.log("Redondeando con Floor:", redondeoFloor);

// Raiz cuadrada sqrt(x)
const raizCuadrada = Math.sqrt(144);
console.log("Raiz Cuadrada:", raizCuadrada);

// Absoluto abs(x)
const absoluto = Math.abs(-20);
console.log("Numero absoluto:", absoluto);

// Potencia pow(x,y) donde x es el numero e y la potencia
const potencia = Math.pow(2, 4);
console.log("Potencia:", potencia);

// Minimo entre una lista de numeros min(x,y,z)
const minimo = Math.min(2, 4, 6);
console.log("Minimo:", minimo);

// Maximo entre una lista de numeros max(x,y,z)
const maximo = Math.max(2, 4, 6);
console.log("Maximo:", maximo);

// Numero aleatorio random()
const aleatorio = Math.random();
console.log("Aleatorio:", aleatorio);

// Combinando funciones para obtener un rango de numeros aleatorios
const rango = Math.floor(Math.random()*30);
console.log("Numero entre 0 y 30:", rango);