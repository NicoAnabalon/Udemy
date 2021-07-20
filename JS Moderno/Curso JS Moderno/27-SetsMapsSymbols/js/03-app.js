// Creando un Map
const cliente = new Map();

// Agregando llave y valor al map
cliente.set('nombre', 'Catalina');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

// Verificando el largo del map
console.log(cliente.size);

// Verificando si existe cierta llave en el map
console.log(cliente.has('nombre'));
console.log(cliente.has('Catalina'));

// Obteniendo valor de una llave
console.log(cliente.get('nombre'));

// Eliminando llave y valor
cliente.delete('tipo');

console.log(cliente);

// Iniciando map con valores
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

// Reescribiendo un valor
paciente.set('nombre', 'Nicolas');

// Iterando en un map
paciente.forEach( (datos, index) => {
    console.log(index);
});

console.log(paciente);