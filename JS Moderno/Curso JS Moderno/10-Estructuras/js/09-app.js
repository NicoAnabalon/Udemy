const autenticado = true;
console.log(`Autenticado: ${autenticado}`);

// Operador ternario condicion ? true : false
console.log(autenticado ? "Está autenticado" : "No está autenticado");

const puedePagar = true;
console.log(`Puede pagar: ${puedePagar}`);

// Operador ternario condicion1 && condicion2 ? true : false
console.log(autenticado && puedePagar ? "Puedes pagar" : "No puedes pagar");

// Operador ternario condicion1 || condicion2 ? true : false
console.log(autenticado || puedePagar ? "Ambas o al menos una se cumple" : "Ninguna se cumple");

// Operador ternario condicion1 ? condicion2 ? (condicion1 y condicion2 verdaderas) : (condicion1 verdadera) : (condicion1 falsa)
console.log(autenticado ? puedePagar ? "Está autenticado y puede pagar" : "Está autenticado pero no puede pagar" : "No está autenticado ni puede pagar");