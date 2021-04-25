// Declarando una función con return
function sumar(a, b){
    return a + b;
}

// Asignando return de la función a una variable
const resultado = sumar(2, 3);
console.log(resultado);

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.19;
}

console.log(`Total inicial: ${total}`);
total = agregarCarrito(300);
console.log(`Total al agregar 300: ${total}`);
const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar es: ${totalAPagar}`);