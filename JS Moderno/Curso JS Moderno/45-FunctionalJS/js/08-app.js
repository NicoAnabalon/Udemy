const obtenerCliente = () => {
    const nombre = "Nicolás";

    function muestraNombre() {
        console.log('nombre :>> ', nombre);
    };

    return muestraNombre;
};

const cliente = obtenerCliente();

cliente();