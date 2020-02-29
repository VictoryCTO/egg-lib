export const registerServiceWorker = ({ message, source, update }) => {
    import("workbox-window").then(({ Workbox }) => {
        if ("serviceWorker" in navigator) {
            const workbox = new Workbox(source);
            workbox.addEventListener("installed", update);
            workbox.addEventListener("message", message);
            workbox.register();
        }
    });
};
