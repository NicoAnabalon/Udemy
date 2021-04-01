// Verificado boolean
const authenticatedTrue = true;
const authenticatedFalse = false;
// Explicitamente true
if (authenticatedTrue === true){
    console.log("Explicitamente True: Si estás autenticado");
}
else{
    console.log("Explicitamente True: No estás autenticado");
}
// Explicitamente false
if (authenticatedFalse === true){
    console.log("Explicitamente False: Si estás autenticado");
}
else{
    console.log("Explicitamente False: No estás autenticado");
}
// Implicitamente true
if (authenticatedTrue){
    console.log("Implicitamente True: Si estás autenticado");
}
else{
    console.log("Implicitamente True: No estás autenticado");
}
// Implicitamente false
if (authenticatedFalse){
    console.log("Implicitamente False: Si estás autenticado");
}
else{
    console.log("Implicitamente False: No estás autenticado");
}

// Operador ternario (variable ? true : false)
// True
console.log(authenticatedTrue ? "Operador ternario True: Si estás autenticado" : "Operador ternario True: No estás autenticado");
// False
console.log(authenticatedFalse ? "Operador ternario False: Si estás autenticado" : "Operador ternario False: No estás autenticado");