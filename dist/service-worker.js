/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

importScripts("./precache-manifest.865eb277cf07490c16e564afcd01d67c.js");

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /https:\/\/cloudinary.com\/console\/c-7e2ed658e0924b0e0fa252fbfa0813\/media_library\/folders\/be740a224208527f81d0eca2462420aaff/,
  new workbox.strategies.CacheFirst({
    cacheName: "images_Articles",
    plugins: [],
  }),
  "GET"
);
workbox.routing.registerRoute(
  /https:\/\/listacompras-ts.herokuapp.com\/api\/v1/,
  new workbox.strategies.NetworkFirst({
    cacheName: "api_Articles",
    plugins: [],
  }),
  "GET"
);
