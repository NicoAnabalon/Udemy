// Simulación de obtención de datos desde una API
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if(!error) {
                resolve("El Listado de Clientes se descargó correctamente");
            } else{
                reject("Error en la conexión");
            }
        }, 3000);
    })
}

// Async await. Await detiene la ejecución del código hasta que obtenga respuesta
const ejecutar = async () => {
    try {
        const respuesta = await descargarClientes();
        console.log('respuesta :>> ', respuesta);
    } catch (error) {
        console.log('error :>> ', error);
    }
}
ejecutar();