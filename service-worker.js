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

var precacheConfig = [["about/index.html","dcd10edf3ea70d7d80a9dc53b6b87659"],["apple-touch-icon.png","1a14ee6767a418f4bfb047625991b2d8"],["archives/2018/06/index.html","ff9adb28d082d71f77a7bea21d0e2006"],["archives/2018/07/index.html","6d4c1dacfa675a1c1baded2307026fa2"],["archives/2018/index.html","bcdc4d6c3e0272ffc885af6c545f40c1"],["archives/index.html","bcdc4d6c3e0272ffc885af6c545f40c1"],["atom/index.html","f44c5581da969a00b02a062f53ed30a5"],["blockchain/mongodb-collection-aggregation-introduction.html","f44efe4f65102e1e23723f0e84389cfe"],["books/index.html","931f38626b1e802b41f14bf059c706c4"],["categories/Blockchain/index.html","5b10815ca51b2dfb1753d88217a54fc7"],["categories/CSS/index.html","ddad895cca9f2aa921cceeb34186b142"],["categories/Git/index.html","9c7cdfdfcf7afce51ae6aef895e90898"],["categories/Java/index.html","e6fd67ea152bd9cce65272e91202b946"],["categories/JavaScript/index.html","37cdc3c0ff1937cdf7ca597c2fcca7a3"],["categories/Linux/Shell/index.html","57bf2e5b37e75bf7d5824a406e7591ce"],["categories/Linux/Ubuntu/index.html","e2557a77981420a2f9a94cc3314b6567"],["categories/Linux/index.html","a0e39bb5ac10a5cff86256021a15fbc3"],["categories/MongoDB/index.html","e6ffe7bf132354db8ea6df5a2b30df3a"],["categories/index.html","4c7b428cf5a4269d890aed3bd1f9e99a"],["categories/程序人生/index.html","11244500db7a6cfc2f7bc682971d9f57"],["css/css-normal-flow.html","b455c39c34ba76840c3bd56bc1c8dcb9"],["css/highlight.css","031cfbfac179947d61d069c43ec73bd5"],["css/style.css","dee5831201f873be48b1097e72fab102"],["drafts/configure-multiple-vue-project-with-nginx.html","287aa743d88f28f648a6fbc36648e351"],["drafts/iframe.html","c441bcd0d966fc5339b3adac1b0603d0"],["drafts/record-re-install-mac-os-10-12-6.html","2d8ad46a2b2f0adbdffb8619a4347bd4"],["git/git-checkout-1.html","faf9ad56382ee1dd7e027f89fb2789b3"],["git/git-diff-m-symbol.html","05339a8dda8b0f8d272ddf16265b2025"],["git/git-git-flow.html","e4833506037324e78e20f044aade957d"],["git/git-git-merge-ff-no-ff.html","1fdc11e5cdf4b7ddc0e32ca8d9b59f89"],["git/git-remote-set-url.html","79616754c36c4079d7d6be7920d86609"],["git/git-revert.html","e4cd03e92652e6bd6f293196fe6c5965"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["iconfont/iconfont.eot","ddef454ac0b3956e4fbd73384c703372"],["iconfont/iconfont.svg","5d755768575cbb0fa3a9241b17943fed"],["iconfont/iconfont.ttf","ffee6da452d3f0a99be63dfba7678882"],["iconfont/iconfont.woff","612821d47cbeca4a00984d8246eba8fe"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["img/bg.jpg","8ac1abf50fd9a6b8788ef007be338a14"],["index.html","c20d53a372f8490d721477c2d200673b"],["java/java-deploy-resource-folder.html","8cdb8cfd1d136c63afb632a33e896866"],["js/js-logical-operator.html","b1d66b70bbd8748c193d42c3d3e8700b"],["js/js-npm-symbol-caret.html","c5ad3e5cb592f3133277db525b7ea675"],["js/js-npm-symbol-tilde.html","0a40a1c2bb49cec0b21400f9275444c0"],["js/search.json.js","c36ccb08dc487ab21258122580cdc223"],["js/toctotop.js","339329e8364230f51add2c9c22d7cd8d"],["js/totop.js","cdc04c8c4b072eaa621a222a15440adb"],["linux/shell-command-awk.html","ac8861e59ef8459f79383d693122b4c9"],["linux/shell-command-netstat.html","4be29cb9a61af2f8699b52dc979025cb"],["linux/shell-command-sed.html","b8cb9d3b4b7b807047ea24bebcf7191f"],["linux/shell-command-tar.html","849710afa7b2836602d7c155695657ec"],["linux/shell-command-top.html","be1860d98438d484b28f50960704ac88"],["linux/shell-command-touch.html","3c56b20b4026483cc21b0c1b5eae11d2"],["linux/shell-command-which.html","277dd7365ef30574778fd22ac104c0a1"],["linux/ubuntu-user-add-delete.html","8b8c799350124ce3db119800a8e813eb"],["mongodb/mongodb-collection-aggregation-introduction.html","bcf9d492e0e10a0c9118004f0cdb1b71"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","8afa3bcd03f43c6b566f609aa6ac694a"],["mongodb/mongodb-collection-create.html","0cd15d6e74efdef36334066e9515f901"],["mongodb/mongodb-collection-delete.html","5d6dd2e5d3f86fdebac5c9d302cc812a"],["mongodb/mongodb-collection-find-1.html","688f5182aa9f3400823f2defb6227b98"],["mongodb/mongodb-collection-find-projection-operator.html","9334c065a13fc53e3fbffb68450bc7b1"],["mongodb/mongodb-collection-insert-1.html","ee0a6b6e449208490d6410dc47116cc4"],["mongodb/mongodb-dababase-create.html","139384c45c42d0f45f03e62e765c7cb4"],["page/2/index.html","3dfa370054d691da07621120b8913a83"],["photos/index.html","d891c69d729f8913b0f9c7a55727a779"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","699815eb7c1cfecdb8ce96d8fa36010a"],["tags/Blockchain/index.html","b4858bc9e1619211131aefca5b59584f"],["tags/Git/index.html","4e1b5d3439bc4b7f5bfcc98687f3ffad"],["tags/JS-逻辑操作符/index.html","7f2928ed393a83373dfc8f8cd07f352c"],["tags/Linux/index.html","b175bff62ca66fc4e3aeda48c5c34a7d"],["tags/MongoDB/index.html","8cefce45a81917882fd911b91082e6ed"],["tags/index.html","d267acac201c60b872702ee7a026d7ff"],["thinking in programmer life/full-stack-programmer.html","d24033afc6c4b9a4f0ac1e58a7d5a7b8"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







