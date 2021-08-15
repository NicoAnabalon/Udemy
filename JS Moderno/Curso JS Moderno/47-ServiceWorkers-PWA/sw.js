const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// Cuando se instaló el Service Worker
self.addEventListener('install', e => {
    console.log("Instalado el Service Worker");
    console.log('Install :>> ', e);

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log("Cacheando...");
                cache.addAll(archivos)
            })
    );
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log("Service Worker activado");
    
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                )
            })
    )
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch(() => caches.match("error.html"))
    );
})