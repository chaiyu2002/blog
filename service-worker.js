/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","fc67bd9961f66e0471741d98a84b17ff"],["archives/2018/06/index.html","3204ed14d31ab0790fa86582c91dc945"],["archives/2018/07/index.html","ce6bdff77ec9a9203e51432f4ecf26f4"],["archives/2018/index.html","40b5723a49728f4a0b848b047bb89c5d"],["archives/index.html","bc3fd45f7aab780a0c0008a1ddf5ff46"],["atom/index.html","8098671b97522a134c373006120afe9a"],["books/index.html","6ba52849eba37a01419360d9fc77761b"],["categories/Git/index.html","cd155b204b72f4dd7803595b4f2859d6"],["categories/MongoDB/index.html","4fb272065e7fe9a7533b14e19e53e571"],["categories/index.html","026282f9d498c9cdf797db88ae4e2f18"],["categories/linux/index.html","391b70eea00b78c806ceb99053610286"],["categories/linux/shell/index.html","2eca22cc43a4c42247f337d55a5a3e05"],["css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["css/ins copy.css","77efb56d5042d0f5b8855c95173f70df"],["css/ins.css","6eb57e9f2b84acca30e1f930b2bbb204"],["css/style.css","122a17aef6daec6f9c1ed90acf6a0a94"],["drafts/configure-multiple-vue-project-with-nginx.html","ccff9255d61451f99b27857bd32783ce"],["drafts/iframe.html","bd766c6ed9c520c8c06ba5ef3fa2c4d1"],["drafts/record-re-install-mac-os-10-12-6.html","e4f755ddf204a9f27be934317bd58cff"],["fonts/chancery/Georgia.ttf","f5dc43ca33b20860f0f888b658f00aad"],["fonts/chancery/apple-chancery-webfont.eot","4ed7e60585ac6083e18a2df5a5c91cc1"],["fonts/chancery/apple-chancery-webfont.svg","e325e4f2b070121ea7d4050023b9f6f2"],["fonts/chancery/apple-chancery-webfont.ttf","49ec3c7bf028bca65ea9ef93614b2363"],["fonts/chancery/apple-chancery-webfont.woff","2e9659ae195f4a74a314901d88520ad0"],["git/mongodb-collection-aggregation-introduction.html","0bfe272bc7eca6f3be4756b533278761"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["icon_ios7.png","0bbfdda14a3114a73cb6f11200b83f33"],["image/reward/alipay.png","31b9ade4eab7ae253d9f7802430ecd68"],["image/reward/wechat.png","d23e08840223824da2e076076743d880"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["index.html","278c3c899a8da76d33b6677783c49b90"],["js/src/app.acbddb68268cee48be2a.js","e92f74eabc64f01dc20885c748e73e1b"],["js/src/bootstrap.js","587dc90fe04364592b5a4f846205ea8e"],["js/src/even.js","84254db5e304a6c3e87bf7fc5a079316"],["js/src/ins.js","6be70c309e71804dcd5df1e02022501b"],["js/src/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["js/src/manifest.5d56937d88b403e2a1a6.js","5c29453d59fe335645c80f2007650346"],["js/src/vendor.9942f0b07587c7901880.js","4babfeaaa702d46cf7f4ee6982b8c912"],["lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["linux/shell-command-awk.html","50dfad23c376373b9d1bd7475bc6bd4f"],["linux/shell-command-netstat.html","5b48c64159ea2fba51a39a082699f68a"],["linux/shell-command-sed.html","5c672b20420bd55dcb594bf74dbf9975"],["linux/shell-command-touch.html","c1e0fd4fdacb4446b12c359e1ae0d5ea"],["mongodb/mongodb-collection-aggregation-introduction.html","88c8b690a9f52d1d0b86e29c125994d1"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","194b35e05b15716dd599319cb073c82d"],["mongodb/mongodb-collection-create.html","125854e2b533b8a9f931e6890dfebbc6"],["mongodb/mongodb-collection-find-1.html","9df1209a65f1bb80f26243eb794c5e83"],["mongodb/mongodb-collection-find-projection-operator.html","8fa26adf23bb21235a69f743e833c4f5"],["mongodb/mongodb-dababase-create.html","73c1a5085f0153d0ac9be915275a0eef"],["photos/index.html","e3d66e8fec5b704bd67f3819b72e495b"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","4e7ca87562e9a7ccf4c67b50c5995ed9"],["tags/Linux/index.html","538e506ab8cbdcc1803d583e7a5b85f1"],["tags/index.html","a014804101db0f0ef96d5e3a77b35660"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







