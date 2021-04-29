const metodoDePago = "Efectivo";
console.log(`Metodo de Pago: ${metodoDePago}`);

// Switch case. Case funcionan como if/else if y default funciona como else.
switch(metodoDePago) {
    case "Efectivo":
        pagar();
        console.log(`Pagaste con Efectivo`);
        break;
    case "Cheque":
        pagar();
        console.log("Pagaste con Cheque");
        break;
    case "Tarjeta":
        pagar();
        console.log("Pagaste con Tarjeta");
        break;
    default:
        console.log("Metodo de pago no soportado");
        break;
}

function pagar() { 
    console.log("Pagando...");
}