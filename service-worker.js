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

var precacheConfig = [["about/index.html","5109a54c57e8c8b5b0a8ccd14bc8c76e"],["apple-touch-icon.png","1a14ee6767a418f4bfb047625991b2d8"],["archives/2018/06/index.html","b82bcbe4f75b1eb9aa84921d01ef5b65"],["archives/2018/07/index.html","35ac2a4c033f8728649202d5b9645cdb"],["archives/2018/index.html","ff4914f3b8408c38de5a8736385614e3"],["archives/index.html","ff4914f3b8408c38de5a8736385614e3"],["atom/index.html","e7bc66048acf61be0e954413609a2748"],["books/index.html","30dc9e1a3b88bc46a3c6e05766e86793"],["categories/CSS/index.html","29bed4e5e2e2fc6f082bd9f5cd5af230"],["categories/Git/index.html","fa87dddedb642c419e699aea3661bda3"],["categories/Java/index.html","d02082232c844253ce965e3ede0634a3"],["categories/JavaScript/index.html","0a61336f7acab2ff0e79adb9dd7cf688"],["categories/Linux/Shell/index.html","b7c4ecbd8b01e247bb2cfda0a7f59736"],["categories/Linux/Ubuntu/index.html","018f95606ca73c1ac5356364ddfcffdd"],["categories/Linux/index.html","82a4b73e81386904da2a4503056018c5"],["categories/MongoDB/index.html","56c8e9fa22c8c9066109a6844ee1e2c7"],["categories/Thinking-in-programmer-life/index.html","006ca0277aba467225699720eab378d5"],["categories/index.html","584ea4db723fbbc9692256f1d5c89148"],["css/css-normal-flow.html","869b3c0fce7ad520e1194c7271b547cc"],["css/highlight.css","031cfbfac179947d61d069c43ec73bd5"],["css/style.css","dee5831201f873be48b1097e72fab102"],["drafts/configure-multiple-vue-project-with-nginx.html","03c571b51397d10c3bb1273537a728e7"],["drafts/iframe.html","5927c300f64d87f052453c76916842d9"],["drafts/record-re-install-mac-os-10-12-6.html","788731839a95618399ff9afac9b2b153"],["git/git-checkout-1.html","7f8a38d5098574a3a68311bad520616f"],["git/git-git-flow.html","ff0b720d1854a04ca7dbbfa983e3eb69"],["git/git-git-merge-ff-no-ff.html","bb9fa4a95197f137b672820bbfb8ed09"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["iconfont/iconfont.eot","ddef454ac0b3956e4fbd73384c703372"],["iconfont/iconfont.svg","5d755768575cbb0fa3a9241b17943fed"],["iconfont/iconfont.ttf","ffee6da452d3f0a99be63dfba7678882"],["iconfont/iconfont.woff","612821d47cbeca4a00984d8246eba8fe"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["img/bg.jpg","8ac1abf50fd9a6b8788ef007be338a14"],["index.html","e826a688e4acac09d4c076d88c00d874"],["java/java-deploy-resource-folder.html","e05a7ce539a8177408df82cf03be51de"],["js/js-npm-symbol-caret.html","944d9f271dda19a3154034adc83a420f"],["js/js-npm-symbol-tilde.html","620a28333658a31dcff95cbde02a3890"],["js/search.json.js","c36ccb08dc487ab21258122580cdc223"],["js/toctotop.js","339329e8364230f51add2c9c22d7cd8d"],["js/totop.js","cdc04c8c4b072eaa621a222a15440adb"],["linux/shell-command-awk.html","148e5f87e5cdf338be8bf0fd16e7dbe4"],["linux/shell-command-netstat.html","f9fd6e43bec31c1ccb0612fd3e97071b"],["linux/shell-command-sed.html","4364fcfbead18b15b3b8544a8a3431d4"],["linux/shell-command-tar.html","e0a0c060ebc204ee225d5e3ca53318aa"],["linux/shell-command-top.html","df532bb240c82b2dcdf3531a066782bd"],["linux/shell-command-touch.html","40140dbe9a7ae0aa50646d0de4169f5e"],["linux/ubuntu-user-add-delete.html","5b5dd00328602db036f8a29d1475157b"],["mongodb/mongodb-collection-aggregation-introduction.html","8473073db75c2712f2219de98956402c"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","856deac9bb6267a2a68e7687a58eb8ee"],["mongodb/mongodb-collection-create.html","96cae8c7eee1c6884cf1cfadbe49cf31"],["mongodb/mongodb-collection-find-1.html","7d6c803c0917c4a2ca821b2a8d8b45dd"],["mongodb/mongodb-collection-find-projection-operator.html","2316dd2f86bafdba090bfd5bce821a8f"],["mongodb/mongodb-dababase-create.html","b96c6fefc401df80d1997bb1af6bdce5"],["page/2/index.html","e25e1b7c29ce5322a28fd5734ad6ed97"],["photos/index.html","e6d203466e084a8ea0a95fde1d6c25b1"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","3cdae316f68ac644b3b6091c86d149fc"],["tags/Linux/index.html","9382c76814b6739b4e39cd2c68745925"],["tags/index.html","7c4258bce07b865d8e30ecce6e09af28"],["thinking in programmer life/full-stack-programmer.html","5e2d5f52cdaf8c6e28a8a828e5b5b6fd"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







