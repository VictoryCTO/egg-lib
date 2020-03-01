export const registerServiceWorker = ({ installed, message, source }) => {
    import("workbox-window").then(({ Workbox }) => {
        if ("serviceWorker" in navigator) {
            const workbox = new Workbox(source);
            workbox.addEventListener("installed", installed);
            workbox.addEventListener("message", message);
            workbox.register();
        }
    });
};
