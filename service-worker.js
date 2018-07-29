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

var precacheConfig = [["about/index.html","edef20c892802b65b0ed5e9094715c82"],["apple-touch-icon.png","1a14ee6767a418f4bfb047625991b2d8"],["archives/2018/06/index.html","4072367c507c446907c9d72c633dbc1f"],["archives/2018/07/index.html","015e73c3d43fabcb7f44fdffcd405263"],["archives/2018/index.html","e464869252066233f386c958da898edf"],["archives/index.html","e464869252066233f386c958da898edf"],["atom/index.html","5e67d8a183627d680f5d986f9dd391f7"],["blockchain/mongodb-collection-aggregation-introduction.html","503bd1c821f984977c6bedc123e5dab6"],["books/index.html","ea6032904a47d09699b7cf52fee59bff"],["categories/Blockchain/index.html","055501a231a06097b19d1d17331927f5"],["categories/CSS/index.html","a5926ba5a176be60ecf2381a138773ab"],["categories/Git/index.html","305c6c5f25f9ae51066e3cef585b6994"],["categories/Java/index.html","07916fbb95477741173e44f4ca4f7f4f"],["categories/JavaScript/index.html","f3d9eba20b41e1bd48ee26ba5b2ecbaf"],["categories/Linux/Shell/index.html","5e01ceca134fe93146752d38b8a34d16"],["categories/Linux/Ubuntu/index.html","56120fb6d32b5aeb929fc2d0ffe3f0c4"],["categories/Linux/index.html","2a19c303ab15e2fa891d54e8b9337a99"],["categories/MongoDB/index.html","b6c3afe6e5f34065b8c3f3807c7e24f1"],["categories/index.html","6c9eb4f69e3ee11325bbcbe7694c1147"],["categories/程序人生/index.html","38fb3eb39a5d6b091718afcf075bcfaf"],["css/css-normal-flow.html","2b14ec40ab5ae485a181956512d3186c"],["css/highlight.css","031cfbfac179947d61d069c43ec73bd5"],["css/style.css","dee5831201f873be48b1097e72fab102"],["drafts/configure-multiple-vue-project-with-nginx.html","962773c9b91cb45ae2dde9b0c580d8e1"],["drafts/iframe.html","4fe12e4012d7d59eb3893abf02cecc51"],["drafts/record-re-install-mac-os-10-12-6.html","9462e15012711d838290fa6798c0dbab"],["git/git-checkout-1.html","067e894fc0e4bf9e40d87e8a07821b9b"],["git/git-diff-m-symbol.html","585f7b5d91ba7b119dbab3158ce0bbc4"],["git/git-git-flow.html","61eab2e9a38a0f54184953127b4bce56"],["git/git-git-merge-ff-no-ff.html","d111f09c8d9048f09972381af33a2d58"],["git/git-remote-set-url.html","aeccb4d6ade4bd97bf8e26e8ddc51fbc"],["git/git-revert.html","38314695df2845ce890841a4bcd72984"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["iconfont/iconfont.eot","ddef454ac0b3956e4fbd73384c703372"],["iconfont/iconfont.svg","5d755768575cbb0fa3a9241b17943fed"],["iconfont/iconfont.ttf","ffee6da452d3f0a99be63dfba7678882"],["iconfont/iconfont.woff","612821d47cbeca4a00984d8246eba8fe"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["img/bg.jpg","8ac1abf50fd9a6b8788ef007be338a14"],["index.html","78b876af90cf18ad22bbee9ae9953813"],["java/java-deploy-resource-folder.html","c32fadf416f56ddba60061b7bcd56469"],["java/java-springmvc-X-Frame-Options.html","be26e3873567c517e2ab97360c35790e"],["js/js-logical-operator.html","e6bf59742550c5bfc6f8814b8338eeae"],["js/js-npm-symbol-caret.html","4b8de3f8526ad049e1840f10a6664e14"],["js/js-npm-symbol-tilde.html","b9007a36ba8376dd20aa6438aa521005"],["js/search.json.js","c36ccb08dc487ab21258122580cdc223"],["js/toctotop.js","339329e8364230f51add2c9c22d7cd8d"],["js/totop.js","cdc04c8c4b072eaa621a222a15440adb"],["linux/shell-command-awk.html","0901b324bf184aadacb6457a970d2cca"],["linux/shell-command-netstat.html","e14ccd7c415af32ee6ad879923033aff"],["linux/shell-command-sed.html","808ebd22ed65cb72da9ae059dca548d7"],["linux/shell-command-tar.html","f85f434b2d80a295628584b274c59c29"],["linux/shell-command-top.html","898123ae90a4d66a41a87dcac7be9fe3"],["linux/shell-command-touch.html","b54255cf42f90651ba92aa02cc1f8aaf"],["linux/shell-command-which.html","8669c561090c26e078c7b5cbd2b65aea"],["linux/ubuntu-user-add-delete.html","215b7d5cdc2b7b25bf0b29908fd7ba19"],["mongodb/mongodb-collection-aggregation-introduction.html","d520b7bfd59a1061e321c1c069f4c55f"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","ce3083f8050dbcb15042c99a97f68b20"],["mongodb/mongodb-collection-create.html","44633b61c83c3c98c4448a216f4d1031"],["mongodb/mongodb-collection-delete.html","b876846b09d9ecd2560f0e051ee8d5bc"],["mongodb/mongodb-collection-find-1.html","020016024fe8bdd48d451d0019cd1899"],["mongodb/mongodb-collection-find-projection-operator.html","61beacaeedf8270d702ffa5790bd4fa0"],["mongodb/mongodb-collection-insert-1.html","9bce6787038c924ef89a6a86193a199e"],["mongodb/mongodb-dababase-create.html","7332bd13a6fd1f936f017ba165f56a7f"],["page/2/index.html","539f1da84f2bad334277f7b5eb4fb822"],["photos/index.html","842187e8f50e145c8dac46ab02400ae1"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","ed1ac3fa5e2ad1fcf5a7a43445dab1c1"],["tags/Blockchain/index.html","0a4222f7f2e26464db85a24a8ddfd99a"],["tags/Git/index.html","a45a5b11fc4844569652cc79bdb294ce"],["tags/JS-逻辑操作符/index.html","cd8a60ec37d0b41031ba18c121df05ae"],["tags/Java/index.html","050c312820b65b466417fa78c3da66be"],["tags/Linux/index.html","3386a2f61807c5756f199ebe4c0e5259"],["tags/MongoDB/index.html","323690ed21f1b6df1a01476329c973d5"],["tags/index.html","123dd5bcbf75ff5d715b828f997090c1"],["thinking in programmer life/full-stack-programmer.html","e728e051ab36dac0feb0b6d35b850a58"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







