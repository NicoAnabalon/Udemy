// New Binding
function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
};

const auto = new Auto("Mustang", "Negro");
console.log('auto :>> ', auto);

// Window Binding
window.color = "Negro";
function hola() {
    console.log('color :>> ', color);
};
hola();