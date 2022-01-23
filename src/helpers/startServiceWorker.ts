import assets from '../../assets.json';

export function startServiceWorker(): void {
    window.addEventListener("load", () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(`${assets.sw.js}`)
            .then(registration => {
                console.log("ServiceWorker registration successful with scope: ", registration.scope);
            }).catch((error) => {
                console.log("ServiceWorker registration failed: ", error);
            });
        }
    });
}
