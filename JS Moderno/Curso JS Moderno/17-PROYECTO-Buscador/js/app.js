// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: '',
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los automoviles al cargar
    mostrarAutos(autos);

    // Llena las opciones de año
    llenarSelect();
} );

// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
} );

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
} );

precioMin.addEventListener('change', e => {
    datosBusqueda.precioMin = e.target.value;
    filtrarAuto();
} );

precioMax.addEventListener('change', e => {
    datosBusqueda.precioMax = e.target.value;
    filtrarAuto();
} );

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
} );

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
} );

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
} );


// Funciones
function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    } );
}

// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        // Agregamos opciones de año
        year.appendChild(opcion);
    }
}

// Filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultado);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado ();
    }
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay resultados, intenta con otra búsqueda";
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarPrecioMin(auto) {
    const {precioMin} = datosBusqueda;
    if (precioMin) {
        return auto.precio >= precioMin;
    }
    return auto;
}

function filtrarPrecioMax(auto) {
    const {precioMax} = datosBusqueda;
    if (precioMax) {
        return auto.precio <= precioMax;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}