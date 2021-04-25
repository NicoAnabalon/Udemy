// Creando una función con parametros por defecto
function saludar (nombre = '', apellido = ''){
    console.log(`¡Bienvenido ${nombre} ${apellido}!`);
}

// Llamando función
// Sin parametros
saludar();
// Con un parametro
saludar("Nicolás");
// Con dos parametros
saludar ("Nicolás", "Anabalón");