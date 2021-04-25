// Creando función normal con un parametro
const aprendiendo = function(tecnologia = '') {
    console.log(`Aprendiendo ${tecnologia}`);
}
// Llamando función normal con un parametro
aprendiendo("JavaScript");

// Creando función de flecha con un parametro
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
// Llamando función de flecha con un parametro
console.log(aprendiendo2("Javascript"));

// Creando función normal con dos parametros
const aprendiendo3 = function(tecnologia1 = '', tecnologia2 = ''){
    console.log(`Aprendiendo ${tecnologia1} y ${tecnologia2}`)
}
// Llamando función de flecha con dos parametro
aprendiendo3("JavaScript", "React");

// Creando función de flecha con un parametro
const aprendiendo4 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
// Llamando función de flecha con un parametro
console.log(aprendiendo4("Javascript", "React"));