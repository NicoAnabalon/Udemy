console.log('Anterior al catch');

// Se intenta llamar a la función hola(), al no existir entra al catch() debido a que no está definida
try {
    mostrarInformacion();
} catch (error) {
    console.log('Desde el catch');
}

console.log('Posterior al catch');