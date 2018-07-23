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

var precacheConfig = [["about/index.html","b950251a02300e833290da974cc8fb01"],["apple-touch-icon.png","1a14ee6767a418f4bfb047625991b2d8"],["archives/2018/06/index.html","c473018c5bfbaed33191acb693123f83"],["archives/2018/07/index.html","b1d6361ec04cbe5817b1b0118b93dfa0"],["archives/2018/index.html","02c146207279a1dca1951f066197b0ab"],["archives/index.html","02c146207279a1dca1951f066197b0ab"],["atom/index.html","5d29877aa64177442adf294e147dc21b"],["books/index.html","a42d077f5dba3cd103290d189a13996d"],["categories/CSS/index.html","4ce08fcf63dd5b884703c80ea49715a4"],["categories/Git/index.html","43a5a503eadee4423734f21692d4c249"],["categories/Java/index.html","ed5623b2ca745213fcbec45e5c76bb91"],["categories/JavaScript/index.html","df0614fbea8e4f047ad48298b90fe788"],["categories/Linux/Shell/index.html","889df0e67b741f9856710be3fbcd9e1d"],["categories/Linux/Ubuntu/index.html","20c4f9f2d36e2f239b0ded44ee1d8fd5"],["categories/Linux/index.html","98817baf936cd6ae7edf67f3005ce262"],["categories/MongoDB/index.html","fa8481538836e2be4ad628b4f57dcb59"],["categories/index.html","8fb58f5b5dd11ba8bc4076e86f32b9e6"],["categories/程序人生/index.html","0f75410773b29ae1016d53a27bb8eb94"],["css/css-normal-flow.html","5938904719d8e6bd8155833543fb6c44"],["css/highlight.css","031cfbfac179947d61d069c43ec73bd5"],["css/style.css","dee5831201f873be48b1097e72fab102"],["drafts/configure-multiple-vue-project-with-nginx.html","e3cf6d699f39716b3b91d635f3b4efc7"],["drafts/iframe.html","c95a9c998b5c8adff512c6bc8a77197f"],["drafts/record-re-install-mac-os-10-12-6.html","d7a92362b6317109a73f5527f06a6391"],["git/git-checkout-1.html","54540879c70eb6360c9b3fcf30844099"],["git/git-git-flow.html","a6701aba29815b046b130ed680746b58"],["git/git-git-merge-ff-no-ff.html","803f46d7bd250fdfa6afa7091bcac964"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["iconfont/iconfont.eot","ddef454ac0b3956e4fbd73384c703372"],["iconfont/iconfont.svg","5d755768575cbb0fa3a9241b17943fed"],["iconfont/iconfont.ttf","ffee6da452d3f0a99be63dfba7678882"],["iconfont/iconfont.woff","612821d47cbeca4a00984d8246eba8fe"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["img/bg.jpg","8ac1abf50fd9a6b8788ef007be338a14"],["index.html","725562a580068ca67c1e7ca073e3ebea"],["java/java-deploy-resource-folder.html","0694746c94aa8a5df971eebcd6991662"],["js/js-logical-operator.html","38b73e8e0dcce1ad32a5cb106c116181"],["js/js-npm-symbol-caret.html","dccb7426b7e7b2f72df59be973125815"],["js/js-npm-symbol-tilde.html","394ee0d1c181e824dcf0324dfbcbb123"],["js/search.json.js","c36ccb08dc487ab21258122580cdc223"],["js/toctotop.js","339329e8364230f51add2c9c22d7cd8d"],["js/totop.js","cdc04c8c4b072eaa621a222a15440adb"],["linux/shell-command-awk.html","c287b2282486db164a2e375bdda1c51c"],["linux/shell-command-netstat.html","93b719d9ca993059df4921f5ba5b9a36"],["linux/shell-command-sed.html","a5bef63c0552b91ebc643343ff9526be"],["linux/shell-command-tar.html","df2dec58a78b943df9c898e2e0fdcf3b"],["linux/shell-command-top.html","6dc9b9cb92c7b9d4e476c01b6364c065"],["linux/shell-command-touch.html","4e7ec16d58809f1104148755601d7236"],["linux/ubuntu-user-add-delete.html","9c09e606009bb283713ada61208c65f9"],["mongodb/mongodb-collection-aggregation-introduction.html","b9a5cbaec1d8829049e9cf0e119ee8be"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","71a602a53ac96231d7cc8773c0c4262f"],["mongodb/mongodb-collection-create.html","9e3bc41224d4e50789b7d02218f36d30"],["mongodb/mongodb-collection-find-1.html","5643cb102587ccd456216018c7d86e26"],["mongodb/mongodb-collection-find-projection-operator.html","195cddc2ee5fb6490d1544aab4b01f8b"],["mongodb/mongodb-collection-insert-1.html","1cbef8f369977ee50861de9ffd15dbbe"],["mongodb/mongodb-dababase-create.html","e77c3e0a84d4789da8bd24fd76ce792d"],["page/2/index.html","de7b4a6b4b10727cf95d35af3db00c6a"],["photos/index.html","0ff9814db653d9ad82b49f3cc5866076"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","3aaa5eb5924b919c38241e37085fa460"],["tags/JS-逻辑操作符/index.html","45f992895052e0f14cb8cd0aa849bd85"],["tags/Linux/index.html","e6c6ab96ca65fbdffc38f64288de037e"],["tags/MongoDB/index.html","52aebc14e677e0ecb8e548cf831b366c"],["tags/index.html","f9bf6ed955e852bd6a5629df16e696bd"],["thinking in programmer life/full-stack-programmer.html","d9de0b3f623beae1cd891b9360de004f"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







