// En informacion() se declara que las variables se obtendran del mismo objeto
const usuario = {
    nombre: "Nicolas",
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: "Atenea",
        edad: 1,
        informacion() {
            console.log(`Mi mascota es ${this.nombre} y su edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();