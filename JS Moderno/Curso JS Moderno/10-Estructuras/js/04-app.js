const dinero = 300;
console.log(`Dinero: ${dinero}`);
const totalAPagar = 500;
console.log(`Total a Pagar: ${totalAPagar}`);
const tarjeta = false;
console.log(`Tarjeta: ${tarjeta}`);
const cheque = false;
console.log(`Cheque: ${cheque}`);

if(dinero >= totalAPagar){
    console.log("Si podemos pagar");
} else if (tarjeta) {
    console.log("Si podemos pagar con tarjeta");
} else if (cheque){
    console.log("Si podemos pagar con cheque");
} else {
    console.log("No podemos pagar");
}