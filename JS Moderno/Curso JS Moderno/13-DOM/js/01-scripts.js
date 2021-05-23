// Con document se puede seleccionar todo el html de la pagina
let elemento = document;
console.log(`document: `);
console.log(elemento);

// Se pueden obtener varias cosas de un documento
// Todo el documento, incluyendo etiquetas
let elemento2 = document.all;
console.log(`document.all: `);
console.log(elemento2);
// El Head del documento
let elemento3 = document.head;
console.log(`document.head: `);
console.log(elemento3);
// El body del documento
let elemento4 = document.body;
console.log(`document.body: `);
console.log(elemento4);
// El domain del documento
let elemento5 = document.domain;
console.log(`document.domain: `);
console.log(elemento5);
// Los forms del documento
let elemento6 = document.forms;
console.log(`document.forms: `);
console.log(elemento6);
// El primer form del documento
let elemento7 = document.forms[0];
console.log(`document.forms[0]: `);
console.log(elemento7);
// El id del primer form del documento
let elemento8 = document.forms[0].id;
console.log(`document.forms[0].id: `);
console.log(elemento8);
// El method del primer form del documento
let elemento9 = document.forms[0].method;
console.log(`document.forms[0].method: `);
console.log(elemento9);
// El classList del primer form del documento
let elemento10 = document.forms[0].classList;
console.log(`document.forms[0].classList: `);
console.log(elemento10);
// El action del primer form del documento
let elemento11 = document.forms[0].action;
console.log(`document.forms[0].action: `);
console.log(elemento11);
// Los enlaces del documento (Etiqueta a)
let elemento12 = document.links;
console.log(`document.links: `);
console.log(elemento12);
// El quinto enlace del documento (Etiqueta a)
let elemento13 = document.links[4];
console.log(`document.links[4]: `);
console.log(elemento13);
// El classList del quinto enlace del documento (Etiqueta a)
let elemento14 = document.links[4].classList;
console.log(`document.links[4].classList: `);
console.log(elemento14);
// El className del quinto enlace del documento (Etiqueta a)
let elemento15 = document.links[4].className;
console.log(`document.links[4].className: `);
console.log(elemento15);
// Las imagenes del documento
let elemento16 = document.images;
console.log(`document.images`);
console.log(elemento16);
// Los scripts del documento
let elemento17 = document.scripts;
console.log(`document.scripts`);
console.log(elemento17);