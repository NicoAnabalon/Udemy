// Definiendo primer Promise
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
    })
}

// Definiendo segundo Promise
function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000);
    })
}

// Consultando más de un promise en paralelo
const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log('respuesta :>> ', respuesta);
    } catch (error) {
        console.log('error :>> ', error);
    }
}
app();