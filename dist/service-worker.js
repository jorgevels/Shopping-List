if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-23258390"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"88ac0638bd68a12531e96c37c01dfd1b"},{url:"65.bundle.js",revision:"1519dad2576ca4a1df30376e16938641"},{url:"assets/android-chrome-144x144.png",revision:"dda01c3ad9cd41520e1e57cd1c4a5f6c"},{url:"assets/android-chrome-192x192.png",revision:"5b0944e284302af8ae311e82aa7fe1b4"},{url:"assets/android-chrome-256x256.png",revision:"33498b1a288fbf7b82bdc16c7c206b52"},{url:"assets/android-chrome-36x36.png",revision:"e12f276dd78631e0e9d3c2e854aeae6c"},{url:"assets/android-chrome-384x384.png",revision:"329d465d159b8f6fd95b7f8911f5faac"},{url:"assets/android-chrome-48x48.png",revision:"83276521deef3a9a4b0d0f17414dbc39"},{url:"assets/android-chrome-512x512.png",revision:"67c0cd6f74daa718e1c7f5e5f84e30d5"},{url:"assets/android-chrome-72x72.png",revision:"8e3535567d52d1cb2c3a3e33c20c4611"},{url:"assets/android-chrome-96x96.png",revision:"6981fadb6d1675513acbb70b2d1dfa90"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"07bb7c1005c9729e4cd26af145fc9dcb"},{url:"assets/apple-touch-icon-114x114.png",revision:"1780dfbfa5809f9ce5ca3a362a8bd563"},{url:"assets/apple-touch-icon-120x120.png",revision:"2a03356ca10b37bba2897df4b93eda43"},{url:"assets/apple-touch-icon-144x144.png",revision:"bde9712fc5af6b1ed94a56091ab01f66"},{url:"assets/apple-touch-icon-152x152.png",revision:"cf525d576ebf436de01acf4e1678f7fa"},{url:"assets/apple-touch-icon-167x167.png",revision:"08ebe463baf36b039b52c9105fcc3a98"},{url:"assets/apple-touch-icon-180x180.png",revision:"ad61a6b75f955751a0b33c69fce2ac96"},{url:"assets/apple-touch-icon-57x57.png",revision:"20428ff641b11470f7957a6e34d36ecc"},{url:"assets/apple-touch-icon-60x60.png",revision:"fc8ae745a4f77318259d2ccffb6a176a"},{url:"assets/apple-touch-icon-72x72.png",revision:"a18a790f787e5bb05b508972e3c40b23"},{url:"assets/apple-touch-icon-76x76.png",revision:"626e6798f575270222f580ef8508123c"},{url:"assets/apple-touch-icon-precomposed.png",revision:"ad61a6b75f955751a0b33c69fce2ac96"},{url:"assets/apple-touch-icon.png",revision:"ad61a6b75f955751a0b33c69fce2ac96"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"0f792183479ca096cc1632e351d45e28"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"d79f83ea7dc72059ee92800596e79055"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"5c343239b3d9737856a866bd74834ba3"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"9a4d35bc4d662910ae2320110b4a5626"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"8a2a2899bf9006f8c64f23b360d42a92"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"7dfbbb1abc3ee73c0246af6351a4427f"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"84ba31694331aa112684475b0c7964b3"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"5df208a648e4f7b5abaac764ffd43239"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"352e37fc21024b5f67869e08f4950930"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"49cc7757f102c28caa00db225e15ab57"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"1ad229b704e30979f8f27cf681e7f92c"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"7f74034797af0c2b0ba21d9870b0c87c"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"6dd2ad7420a12c3ae9afe3543c04fe11"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"7bab2ea82f5d00cf979b767711b49103"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"5b29772d474f08ca61ae7aa5118eb8f3"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"5bb90f8754c68a1785e02b3a2b9fe0e0"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"c26e699838c0d7578ca0d1208734e0a1"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"9cd1946673b40e2c790f92b321bf4db9"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"275306217e772615f84b6d61b222d769"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"b8bd5bf1493259b6d1e664f312ef2ea3"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"9229539d2987b03900ed00da6e2b137a"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"79655b22cba15c15e6728fb28780b9c8"},{url:"assets/browserconfig.xml",revision:"09c8b7d4aa3c010bd7428a648b19c40a"},{url:"assets/coast-228x228.png",revision:"24bd117feb79704be71e77bad0e6d361"},{url:"assets/common.14125d0a9f69e3c0cded.js",revision:null},{url:"assets/common.14125d0a9f69e3c0cded.js.LICENSE.txt",revision:"6b1ee8f8beb55f51a269f7dfe73b387f"},{url:"assets/favicon-16x16.png",revision:"2fbf024f02e89bda18c077564efddc5c"},{url:"assets/favicon-32x32.png",revision:"29470f4681b1c5ba234d92d36edb0f21"},{url:"assets/favicon-48x48.png",revision:"83276521deef3a9a4b0d0f17414dbc39"},{url:"assets/favicon.ico",revision:"267393fcad7fe6b27644a338b5826444"},{url:"assets/firefox_app_128x128.png",revision:"9d4835ba38605ef6869d97840b25bf43"},{url:"assets/firefox_app_512x512.png",revision:"54f26c905ea4ff2ab6af7270eca94755"},{url:"assets/firefox_app_60x60.png",revision:"d7155de6cde76a5f5c9e554b6e4c91cc"},{url:"assets/header.css",revision:"73e1707890055f1d2aa7c3e4d0844597"},{url:"assets/home.css",revision:"647cd904f926e422345972fbb62ccd8b"},{url:"assets/manifest.json",revision:"8f937e6cb8b0041867f5fdd92a877dbe"},{url:"assets/manifest.webapp",revision:"fcf1fe66a751ce0617afdff6a45c9dda"},{url:"assets/mstile-144x144.png",revision:"dda01c3ad9cd41520e1e57cd1c4a5f6c"},{url:"assets/mstile-150x150.png",revision:"7e9bbe68b6600696f3bd4c34728682af"},{url:"assets/mstile-310x150.png",revision:"8509e7e2ef54de9aec54ccdea1e8c790"},{url:"assets/mstile-310x310.png",revision:"e76fd63fe4a7452fcae6d4ab6f7720c5"},{url:"assets/mstile-70x70.png",revision:"b4b9e6722b15d2df3c3d30cd9b3cc453"},{url:"assets/vendor.66dd63c86155cbe42201.js",revision:null},{url:"assets/vendor.66dd63c86155cbe42201.js.LICENSE.txt",revision:"69d7f24562cacc2f90361b350cdafe4b"},{url:"assets/yandex-browser-50x50.png",revision:"bdf74913e4208a8dc56a7006b655fdee"},{url:"assets/yandex-browser-manifest.json",revision:"ed98d1268dd97313e3d1e2053facd924"},{url:"header.bundle.js",revision:"aab2d35595e56bfbf3c921df2ba98a20"},{url:"home.bundle.js",revision:"4f3cf00031871a66a73bf6b43495f341"}],{}),e.registerRoute(/https:\/\/maps.arcgis.com\/sharing\/rest\/content\/items\/3ddd6c4932d649d6996db442e920ceb9\/data|res.cloudinary.com/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/api-covi-19.jorgevelasquez006.now.sh\/API\/covi19.json|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/brief|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/latest?iso2=CO/,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
