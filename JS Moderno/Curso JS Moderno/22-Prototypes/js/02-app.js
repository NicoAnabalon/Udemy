// Constructor Cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// Constructor Empresa
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// Función para mostrar información del cliente
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de $${saldo}`;
}

// Función para mostrar información de la empresa
function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de $${saldo} y pertenece a la categoria ${categoria}`;
}

// Creando un nuevo cliente y mostrando el return de formatearCliente
const nicolas = new Cliente('Nicolas', 500);
console.log(formatearCliente(nicolas));

// Creando una nueva empresa y mostrando el return de formatearEmpresa
const CCN = new Empresa("Código con Nico", 4000, "Cursos en Línea");
console.log(formatearEmpresa(CCN));