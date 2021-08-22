// Mediator
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
};
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo: ${articulo}. Iniciamos con un precio de $${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
};

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
};
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: $${cantidad}`);
    }
};

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
};

// Crear objetos
const nicolas = new Comprador('Nicolas');
const felipe = new Comprador('Felipe');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

//Tienes que registrarlos
subasta.registrar(nicolas);
subasta.registrar(felipe);
subasta.registrar(vendedor);

vendedor.oferta("Mustang 66", 300);
nicolas.oferta(350, nicolas);
felipe.oferta(450, felipe);
nicolas.oferta(500, nicolas);
felipe.oferta(700, felipe);
vendedor.vendido("Felipe");