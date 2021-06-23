// Constructor Cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creando prototype específico para Cliente
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000) {
        tipo = "Gold";
    } else if (this.saldo > 5000) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retiro) {
    this.saldo -= retiro;
}

// Instanciando cliente
const catalina = new Cliente("Catalina", 100000);
console.log(catalina);
console.log(catalina.tipoCliente());
console.log(catalina.nombreClienteSaldo());
catalina.retiraSaldo(1000);
console.log(catalina.nombreClienteSaldo());