const producto = {nombre: "Monitor 27 Pulgadas", precio: 500 };

// For in: for(let propiedad in objeto) { codigo }
for(let propiedad in producto){
    console.log(`${propiedad}`);
}

// for (let [llave, valor] of Object.entries(objeto)) { codigo }
for (let [llave, valor] of Object.entries(producto)){
    console.log(`${llave}: ${valor}`);
}