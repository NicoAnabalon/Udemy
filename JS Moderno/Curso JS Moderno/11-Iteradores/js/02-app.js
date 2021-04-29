// Rompiendo un ciclo mediante break
for(let i = 0; i <= 10; i++){
    if(i === 5){
        console.log("Este es el 5");
        break;
    }
    console.log(`Numero: ${i}`);
}

// Siguiendo el flujo normal mediante continue
for(let n = 0; n <= 10; n++){
    if(n === 5){
        console.log("Numero: cinco");
        continue;
    }
    console.log(`Numero: ${n}`);
}

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Televisión", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400, descuento: true},
    {nombre: "Celular", precio: 700}
]
console.table(carrito);

// Mostrando información distinta para los que tienen descuento
for (let producto = 0; producto < carrito.length; producto++){
    if(carrito[producto].descuento){
        console.log(`El producto ${carrito[producto].nombre} tiene un descuento`);
    }
    console.log(carrito[producto].nombre);
}