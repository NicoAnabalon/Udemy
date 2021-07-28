document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === "visible") {
        console.log("Estás en la página");
    } else {
        console.log("Saliste de la página");
    }
});