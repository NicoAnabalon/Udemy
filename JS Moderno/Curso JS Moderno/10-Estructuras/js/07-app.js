const efectivo = 300;
console.log(`Efectivo: ${efectivo}`);
const credito = 1000;
console.log(`Credito: ${credito}`);
const disponible = efectivo + credito;
console.log(`Disponible: ${disponible}`);
const totalAPagar = 600;
console.log(`Total a Pagar: ${totalAPagar}`);

if (efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar){
    console.log("Podemos pagar");
} else {
    console.log("Saldo insuficiente")
}