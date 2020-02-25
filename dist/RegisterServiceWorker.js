export const registerServiceWorker = ({ source, update }) => {
    import("workbox-window").then(({ Workbox }) => {
        if ("serviceWorker" in navigator) {
            const workbox = new Workbox(source);
            workbox.addEventListener("installed", event => {
                if (event.isUpdate) {
                    update();
                }
            });
            workbox.register();
        }
    });
};
