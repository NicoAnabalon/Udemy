const notificarBtn = document.querySelector("#notificar");
const verNotificacion = document.querySelector("#verNotificacion");

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es: ${resultado}`);
        });
});

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === "granted") {
        const notificacion = new Notification("Esta es la notificación", {
            icon: 'img/ccj.png',
            body: 'Aprendiendo con Nico'
        });

        notificacion.onclick = function () {
            window.open("https://www.codigoconjuan.com");
        }
    }
})