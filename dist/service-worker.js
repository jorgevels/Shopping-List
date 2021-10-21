if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, i, r) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-23258390"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "./index.html", revision: "a8b8a288d0f85c81e4e984fd32c9fb66" },
        { url: "65.bundle.js", revision: "074078f4977a72468f35142eee5300e4" },
        {
          url: "assets/android-chrome-144x144.png",
          revision: "250049eb60b2ff181651e946bf7e7154",
        },
        {
          url: "assets/android-chrome-192x192.png",
          revision: "40c3433f94a29bad514586423d544565",
        },
        {
          url: "assets/android-chrome-256x256.png",
          revision: "19637d595c02df97f6dfabf2e4cfdc30",
        },
        {
          url: "assets/android-chrome-36x36.png",
          revision: "223f9e569576c7eb4570cbe098fa7461",
        },
        {
          url: "assets/android-chrome-384x384.png",
          revision: "ea74d40df83072ffcc6526a44e09d20a",
        },
        {
          url: "assets/android-chrome-48x48.png",
          revision: "00ea6b1f76340d752a2bde716053caf6",
        },
        {
          url: "assets/android-chrome-512x512.png",
          revision: "1efa7974a044e86d2d84c71524db2572",
        },
        {
          url: "assets/android-chrome-72x72.png",
          revision: "9606530d3f3434e8743c7b39c0c9e068",
        },
        {
          url: "assets/android-chrome-96x96.png",
          revision: "1c2412773aeeb0804e547d225adb8ee1",
        },
        {
          url: "assets/apple-touch-icon-1024x1024.png",
          revision: "c81a6e928285d3d05b2f13a59ee8e5ca",
        },
        {
          url: "assets/apple-touch-icon-114x114.png",
          revision: "fabe07f99005977920c076572f0038fd",
        },
        {
          url: "assets/apple-touch-icon-120x120.png",
          revision: "b66d4e2ba392744d4f960152830cb54d",
        },
        {
          url: "assets/apple-touch-icon-144x144.png",
          revision: "7b16e1814ceb82ca35244001057f81d5",
        },
        {
          url: "assets/apple-touch-icon-152x152.png",
          revision: "f4312631bb925c89c2abd7fc6b82f00c",
        },
        {
          url: "assets/apple-touch-icon-167x167.png",
          revision: "38f22306f785462a2abfd2dfa689f8dd",
        },
        {
          url: "assets/apple-touch-icon-180x180.png",
          revision: "dba1e76cfb5586ba217c2db72511921b",
        },
        {
          url: "assets/apple-touch-icon-57x57.png",
          revision: "256432914b03582ce632fe0644918766",
        },
        {
          url: "assets/apple-touch-icon-60x60.png",
          revision: "5082767b58030b8e96aa0b96dd288903",
        },
        {
          url: "assets/apple-touch-icon-72x72.png",
          revision: "3e0eed016678a941eabcd9e72b134e11",
        },
        {
          url: "assets/apple-touch-icon-76x76.png",
          revision: "f5686188e3022dd5f1c44b47d8596f0f",
        },
        {
          url: "assets/apple-touch-icon-precomposed.png",
          revision: "dba1e76cfb5586ba217c2db72511921b",
        },
        {
          url: "assets/apple-touch-icon.png",
          revision: "dba1e76cfb5586ba217c2db72511921b",
        },
        {
          url: "assets/apple-touch-startup-image-1125x2436.png",
          revision: "f1a95bb6eb855f961ecc6785b13a3999",
        },
        {
          url: "assets/apple-touch-startup-image-1136x640.png",
          revision: "7d45cea0aeeb7646ec54137f34687635",
        },
        {
          url: "assets/apple-touch-startup-image-1242x2208.png",
          revision: "e73d546585c70dc75d98f8bc15b4cdda",
        },
        {
          url: "assets/apple-touch-startup-image-1242x2688.png",
          revision: "d6e9a984373e25b4717f54e44708dbd2",
        },
        {
          url: "assets/apple-touch-startup-image-1334x750.png",
          revision: "2191cdcd7cd77409e4d4b5d8fc30585e",
        },
        {
          url: "assets/apple-touch-startup-image-1536x2048.png",
          revision: "492ab07438f1636889ab70ff26182915",
        },
        {
          url: "assets/apple-touch-startup-image-1620x2160.png",
          revision: "ccc6ec68ee3f0c08a42ba50fd9fd9f2a",
        },
        {
          url: "assets/apple-touch-startup-image-1668x2224.png",
          revision: "4bcfdfda37bb7f0a63f959f55abe6620",
        },
        {
          url: "assets/apple-touch-startup-image-1668x2388.png",
          revision: "99427e170245ea3753fc66a30cd6b015",
        },
        {
          url: "assets/apple-touch-startup-image-1792x828.png",
          revision: "ba7a17308b5e64635b5e09535e337414",
        },
        {
          url: "assets/apple-touch-startup-image-2048x1536.png",
          revision: "4db61d18c40d19f5572ea3fd4c873854",
        },
        {
          url: "assets/apple-touch-startup-image-2048x2732.png",
          revision: "0d631ca44a92576327ce6a11729e91bf",
        },
        {
          url: "assets/apple-touch-startup-image-2160x1620.png",
          revision: "6eecd0304f2c29021c99be1c4e8f989c",
        },
        {
          url: "assets/apple-touch-startup-image-2208x1242.png",
          revision: "c6b18eae73e75ee94a1f0101e312a858",
        },
        {
          url: "assets/apple-touch-startup-image-2224x1668.png",
          revision: "8438f75dc8fac90395c20c3e71dc681a",
        },
        {
          url: "assets/apple-touch-startup-image-2388x1668.png",
          revision: "1c02daec1e624f3bc394f633934e5866",
        },
        {
          url: "assets/apple-touch-startup-image-2436x1125.png",
          revision: "d47c2d71de035ab51dab4544f5c31014",
        },
        {
          url: "assets/apple-touch-startup-image-2688x1242.png",
          revision: "b28e3050a5a704db3b0fff90ca957506",
        },
        {
          url: "assets/apple-touch-startup-image-2732x2048.png",
          revision: "5f6d4c41992f7d3e1bfc8d9a45267b5a",
        },
        {
          url: "assets/apple-touch-startup-image-640x1136.png",
          revision: "499fc31a3ba59cd1c2fb32000457a548",
        },
        {
          url: "assets/apple-touch-startup-image-750x1334.png",
          revision: "2ac5fda234ac7e03333b201d40e8a193",
        },
        {
          url: "assets/apple-touch-startup-image-828x1792.png",
          revision: "829be545f1fd2b945cdd3574cef239db",
        },
        {
          url: "assets/browserconfig.xml",
          revision: "068568e3cf189c0e00f5634e4fdb51c3",
        },
        {
          url: "assets/coast-228x228.png",
          revision: "cc2c922952a32ff973ca4a6f6a71866e",
        },
        { url: "assets/common.d7d2794b0433140a3085.js", revision: null },
        {
          url: "assets/common.d7d2794b0433140a3085.js.LICENSE.txt",
          revision: "6b1ee8f8beb55f51a269f7dfe73b387f",
        },
        {
          url: "assets/favicon-16x16.png",
          revision: "bc44f09673f49755a15faba5771eb262",
        },
        {
          url: "assets/favicon-32x32.png",
          revision: "8701419d2b405af30e8ce6c8ea2cc8ed",
        },
        {
          url: "assets/favicon-48x48.png",
          revision: "00ea6b1f76340d752a2bde716053caf6",
        },
        {
          url: "assets/favicon.ico",
          revision: "9830dcafa119ec95c789e1a45d9f3eaf",
        },
        {
          url: "assets/firefox_app_128x128.png",
          revision: "ba21cb34326cc123b465b0a3105fc177",
        },
        {
          url: "assets/firefox_app_512x512.png",
          revision: "4282bcc2c1aac12758968fc91605aa5c",
        },
        {
          url: "assets/firefox_app_60x60.png",
          revision: "91553753a133a3c834ec82a2ff23277f",
        },
        {
          url: "assets/header.css",
          revision: "6b0e659c1ccdda69776b3011ba961de6",
        },
        {
          url: "assets/home.css",
          revision: "a0700057eada09268386d92a6fd43cdd",
        },
        {
          url: "assets/manifest.json",
          revision: "10adc432996ea875a9cce46f0b06a098",
        },
        {
          url: "assets/manifest.webapp",
          revision: "c1c5dbb908fd1804f6d476a81154b357",
        },
        {
          url: "assets/mstile-144x144.png",
          revision: "250049eb60b2ff181651e946bf7e7154",
        },
        {
          url: "assets/mstile-150x150.png",
          revision: "e39c215aa30a5e9cd92ea2fa73953776",
        },
        {
          url: "assets/mstile-310x150.png",
          revision: "1acc7a7d201f750662c2b61b70033ea4",
        },
        {
          url: "assets/mstile-310x310.png",
          revision: "08786431c48d6379af923203d7938f6b",
        },
        {
          url: "assets/mstile-70x70.png",
          revision: "1b0f313f98495f54c0bd999a4da844ca",
        },
        { url: "assets/vendor.2af251502aa3eb4d331f.js", revision: null },
        {
          url: "assets/vendor.2af251502aa3eb4d331f.js.LICENSE.txt",
          revision: "69d7f24562cacc2f90361b350cdafe4b",
        },
        {
          url: "assets/yandex-browser-50x50.png",
          revision: "b605c4ec5b4334713133df3ab00c1094",
        },
        {
          url: "assets/yandex-browser-manifest.json",
          revision: "4aa45c18df4bd3d9ec3acfee3751d9ad",
        },
        {
          url: "header.bundle.js",
          revision: "950448f1bb346856b7e378e33eb30f09",
        },
        { url: "home.bundle.js", revision: "4a14d76ae6483381cf77f085a43c4a97" },
      ],
      {}
    ),
    e.registerRoute(
      /https:\/\/maps.arcgis.com\/sharing\/rest\/content\/items\/3ddd6c4932d649d6996db442e920ceb9\/data|res.cloudinary.com/,
      new e.CacheFirst({ cacheName: "images", plugins: [] }),
      "GET"
    ),
    e.registerRoute(
      /https:\/\/api-covi-19.jorgevelasquez006.now.sh\/API\/covi19.json|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/brief|https:\/\/wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai\/jhu-edu\/latest?iso2=CO/,
      new e.NetworkFirst({ cacheName: "api", plugins: [] }),
      "GET"
    );
});
