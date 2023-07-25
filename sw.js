'use strict';
importScripts('sw-toolbox.js'); toolbox.precache(["index.html", "ant.htm", "butterfly.htm", "spider.htm", "style.css"," style1.css","style2.css", "style3.css"]); toolbox.router.get('/images/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
