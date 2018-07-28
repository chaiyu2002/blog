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

var precacheConfig = [["about/index.html","65e343361c78ddb2e19ae8d5ed1b17e4"],["apple-touch-icon.png","1a14ee6767a418f4bfb047625991b2d8"],["archives/2018/06/index.html","c421166bfb48f5bb2b39747246261822"],["archives/2018/07/index.html","56a656b2d76def7256b3c9c405829f58"],["archives/2018/index.html","6b01aecc2647e3fdb6f74e9ecf7b5828"],["archives/index.html","6b01aecc2647e3fdb6f74e9ecf7b5828"],["atom/index.html","2e408616d89117bebfc70826bb7fb955"],["blockchain/mongodb-collection-aggregation-introduction.html","bfd800023286b168e68db79f46fca4d1"],["books/index.html","f92ec3c51fe1a6edb668f62634bd54c2"],["categories/Blockchain/index.html","c09dd61fa97b9fc5204f5fb3b0f4539b"],["categories/CSS/index.html","f1a0ceaba7048c54feb0a482f4429f47"],["categories/Git/index.html","60bed9d97faa5399afab7887506652e3"],["categories/Java/index.html","fd3e9eeec401e220d199f32859a0a4b5"],["categories/JavaScript/index.html","827194204b1008872a127214adff72bf"],["categories/Linux/Shell/index.html","ce2dfb69cbffd021b8b63af19ab62299"],["categories/Linux/Ubuntu/index.html","7088072347f3aa99f3f332a83d7f8efd"],["categories/Linux/index.html","e47e1a7114a73d4ff793335573159f41"],["categories/MongoDB/index.html","36eb48fca65773e3342c791f245d2d5c"],["categories/index.html","6c3f9d0c9f42f886052050e838342e9b"],["categories/程序人生/index.html","71b4f42073b36ba87378f7f696c8b2e2"],["css/css-normal-flow.html","18bacf51fa317a85b3da8e373464603e"],["css/highlight.css","031cfbfac179947d61d069c43ec73bd5"],["css/style.css","dee5831201f873be48b1097e72fab102"],["drafts/configure-multiple-vue-project-with-nginx.html","56d2ac0cc3df375c16f61fe150a2d867"],["drafts/iframe.html","f91a666f6abf2c0f404e17d85467dc1c"],["drafts/record-re-install-mac-os-10-12-6.html","d46c834150c723ecf95fd48ce5933d7d"],["git/git-checkout-1.html","4227149f2897cd9d0b17866bb1a588e1"],["git/git-diff-m-symbol.html","c57e8d0e04fe3681327153948ff3cd5f"],["git/git-git-flow.html","8d263d21648abb7fad3537b8dc2f7984"],["git/git-git-merge-ff-no-ff.html","7c25ddf40204409c33be72f75a94c539"],["git/git-remote-set-url.html","48a2326ff2a1693038974dd65d32dbc8"],["git/git-revert.html","a79583dbf001c96edfa1e05a79a733aa"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["iconfont/iconfont.eot","ddef454ac0b3956e4fbd73384c703372"],["iconfont/iconfont.svg","5d755768575cbb0fa3a9241b17943fed"],["iconfont/iconfont.ttf","ffee6da452d3f0a99be63dfba7678882"],["iconfont/iconfont.woff","612821d47cbeca4a00984d8246eba8fe"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["img/bg.jpg","8ac1abf50fd9a6b8788ef007be338a14"],["index.html","d95be5545142169712fe4b1ba59cc5da"],["java/java-deploy-resource-folder.html","06da9168d584e8bf8d9221313e4ad938"],["js/js-logical-operator.html","519fd8f7e3f1135790d28bd649760998"],["js/js-npm-symbol-caret.html","3e6c7dbfaa6ddfb8ca86fea85bd267a7"],["js/js-npm-symbol-tilde.html","a857e338485bed6e5cbe17a08fb3e662"],["js/search.json.js","c36ccb08dc487ab21258122580cdc223"],["js/toctotop.js","339329e8364230f51add2c9c22d7cd8d"],["js/totop.js","cdc04c8c4b072eaa621a222a15440adb"],["linux/shell-command-awk.html","a98ca14c57749e553ef9747cf183d86e"],["linux/shell-command-netstat.html","93c74caa0321d9c7f0f1c0deacb3f058"],["linux/shell-command-sed.html","995d8408d5e965515ec79ead7ee24f1a"],["linux/shell-command-tar.html","4807342a859dc3f52e6c41defe2b4cb6"],["linux/shell-command-top.html","6fc4742cc66a88f7b2c7766622e8f2c5"],["linux/shell-command-touch.html","94e05dfead7907a997d5201326f81a6b"],["linux/shell-command-which.html","326f9e31f4d9cf5d26233f31d4262782"],["linux/ubuntu-user-add-delete.html","2c45bcb31419b7ba51a03f815e26514e"],["mongodb/mongodb-collection-aggregation-introduction.html","e4ee581573cc041240f0d0d19118ff86"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","765278c04b71aaaaa82f3c6bb5276201"],["mongodb/mongodb-collection-create.html","77217d5ca3d7c9169d1e21aac71159ee"],["mongodb/mongodb-collection-delete.html","15c5801ea08dd68997f51fc1eb44ba8b"],["mongodb/mongodb-collection-find-1.html","709778dab7140ea2a07d8353aa4fc8cd"],["mongodb/mongodb-collection-find-projection-operator.html","66af60bd6b3189452dd49c959c7c0f0e"],["mongodb/mongodb-collection-insert-1.html","9c34618a46bfb093b3459a74d5b7a1c4"],["mongodb/mongodb-dababase-create.html","2a0d8d18912f7df2e1a803290b79afe3"],["page/2/index.html","202b2589dba64b9aca95b57ae2fa142e"],["photos/index.html","b58103841879f718ac84a5b0bb3c5f6e"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","08f3bd43ab3fdc265b93a3deb39d2af1"],["tags/Blockchain/index.html","1c170718b45f2be651f02b4ca896d366"],["tags/Git/index.html","c0911b08b5511abad74b70544bbb6e6a"],["tags/JS-逻辑操作符/index.html","71c1e8835cac238dce279458f4a9d5ce"],["tags/Linux/index.html","22fe84a8bd450552eaac4f696c766efc"],["tags/MongoDB/index.html","ca182b4714111120428053d442fa7fb1"],["tags/index.html","cd68e7921e16d228cb5f0666eee7b6b5"],["thinking in programmer life/full-stack-programmer.html","71515ebc8187cd2af75f16e0c09a7d7c"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







