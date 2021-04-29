const usuario = true;
console.log(`Usuario: ${usuario}`);
const puedePagar = true;
console.log(`Puede pagar: ${puedePagar}`);

// If con &&, y !. && sirve para evaluar dos o más condiciones y ! niega la condicion sobre la cual esta al lado
if(usuario && puedePagar){
    console.log("Eres usuario y puedes pagar");
} else if (!usuario && !puedePagar){ 
    console.log("No eres usuario ni puedes pagar")
} else if (!usuario) {
    console.log("No eres usuario");
} else if (!puedePagar) {
    console.log("No puedes pagar");
} else{
    console.log("No puedes comprar");
}