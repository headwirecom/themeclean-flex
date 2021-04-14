importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
    console.log(`init service worker`);

    workbox.precaching.precacheAndRoute(['/content/themecleanflex/pages/index.html']);
    workbox.routing.registerRoute(
        // Cache CSS files.
        /\.css$/,
        // Use cache but update in the background.
        new workbox.strategies.NetworkFirst({
            // Use a custom cache name.
            cacheName: 'css-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache CSS files.
        /\.json$/,
        // Use cache but update in the background.
        new workbox.strategies.NetworkFirst({
            // Use a custom cache name.
            cacheName: 'json-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache CSS files.
        /\.html$/,
        // Use cache but update in the background.
        new workbox.strategies.NetworkFirst()
    );

    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache only 20 images.
                    maxEntries: 20,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );

} else {
    console.log(`no service worker, sorry`);
}