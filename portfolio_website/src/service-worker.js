// Enregistrement du service worker
// This is replaced at build time with the list of assets to cache.


// ...rest of your service worker code
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(registration => {
                console.log('Service Worker enregistré avec succès!', registration);
            })
            .catch(error => {
                console.log('Échec de l\'enregistrement du Service Worker:', error);
            });
    });
}
