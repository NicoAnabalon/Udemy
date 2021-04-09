const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log("Arreglo:", meses);

// Verificando el largo del arreglo
console.log("Largo del arreglo:", meses.length);

// Recorriendo el arreglo
console.log("---- Inicio recorrido del arreglo ----");
for(let i=0; i < meses.length; i++){
    console.log("Indice", i + ":", meses[i]);
}
console.log("---- Fin recorrido del arreglo ----");