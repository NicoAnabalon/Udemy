// for(variable, condicion, incremento) {codigo a ejecutar mientras se cumpla la condicion}
for(let i = 0; i <= 10; i++){
    console.log(`Numero: ${i}`);
}

// Utilizando un for para saber cuáles numeros del 0 al 20 son pares y cuales son impares
for(let n = 0; n <= 20; n++){
    if(n % 2 === 0) {
        console.log(`${n} es par`);
    } else {
        console.log(`${n} es impar`);
    }
}

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Televisión", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
]
console.table(carrito);

// Utilizando un for para recorrer un arreglo
for (let producto = 0; producto < carrito.length; producto++){
    console.log(`El producto ${carrito[producto].nombre} tiene un costo de ${carrito[producto].precio}`);
}