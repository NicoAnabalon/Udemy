// Variables
const numero1 = 20;
const numero2 = "40";
const pedido = [1, 2, 3, 4];

// Coersion implicita
console.log('numero1 + numero2 :>> ', numero1 + numero2);

// Coersion explicita
console.log('Number(numero2) :>> ', Number(numero2));
console.log('numero1.toString() :>> ', numero1.toString());
console.log('pedido.toString() :>> ', pedido.toString());
console.log('JSON.stringify(pedido) :>> ', JSON.stringify(pedido));