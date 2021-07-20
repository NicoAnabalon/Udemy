// Creando un WeakSet. WeakSet sólo recibe objetos
const weakset = new WeakSet();

// Creando un objeto
const cliente = {
    nombre: "Nicolas",
    saldo: 100
}
// Afgregando el objeto
weakset.add(cliente);

// Creando una variable
const nombre = "Nicolas";
// Intentando agregar la variable
// weakset.add(nombre);

// Verificando que existe un objeto
console.log(weakset.has(cliente));

// ** No se puede saber el tamaño de un weakset ni tampoco iterar sobre este **

// Eliminando un objeto del weakset
weakset.delete(cliente);


console.log(weakset);