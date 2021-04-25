// Creando función principal
function iniciarApp(){
    console.log("Iniciando app...");
    segundaFuncion();
}

// Creando función secundaria
function segundaFuncion(){
    console.log("Aplicacion iniciada...");
    usuarioAutenticado("Nicolás");
}

// Creando función terciaria
function usuarioAutenticado(usuario){
    console.log("Autenticando usuario...");
    console.log(`${usuario} autenticado exitosamente`);
}

// Llamando a la función principal
iniciarApp();