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

var precacheConfig = [["about/index.html","1ff8abc986c45e8a5d809e3fc96005aa"],["archives/2018/06/index.html","6ca45a5b3f7e207e914da09c5c2be065"],["archives/2018/07/index.html","a875850bdb853d8f8f78b25ffbfa2a58"],["archives/2018/08/index.html","6c7b033390639330db5e04a46be0a521"],["archives/2018/09/index.html","4b1934965256adac1d23b14a0072801f"],["archives/2018/10/index.html","16d33050a96cfaceaa3ce6a5d7678122"],["archives/2018/index.html","dac3fc8d33b685718385abac6f18beac"],["archives/2018/page/2/index.html","e445f5cf8d4deda1b576f21c8887d0bf"],["archives/index.html","c5ab6fd4745ad7e0644748896619c6a6"],["archives/page/2/index.html","29c651c0f7b0968bb52744441f47ab4b"],["atom/index.html","3585866e0687525fd30642f21726fc4f"],["blockchain/base64-base58.html","055b15df8f5f58d43d430e3424d31db5"],["blockchain/bitcoin-data-storage.html","fa2f6bf8ab6e340b70644902f6e3a1ca"],["blockchain/bitcoin-difficulty.html","38e4317c95c80a7cbcd8c2dde63c3711"],["blockchain/block-chain-ethereum-contract-program.html","204db3003a49c4654a49dadc3f962d41"],["blockchain/ethereum-programming-introduction.html","f962c1a74e3b7f9819b9464431877ba0"],["blockchain/ethereum-rationale-introduction.html","8d79177f8bee661b4a9cfc72b045056d"],["books/index.html","f8b7b87780ed6253df46c58a5a56b5f4"],["categories/Blockchain/index.html","1f02e07abb8f1828bb1557294bb65eb9"],["categories/Blockchain/以太坊/index.html","5839195b8a2a74b2f4b014dd947b60a1"],["categories/Blockchain/以太坊/智能合约/index.html","0ad73a00e06cd6aba3fb88592a95ed4d"],["categories/CSS/index.html","c45c95d83d6f548e3bf94701dd7e27f1"],["categories/Git/index.html","806d5e627873d1fb0c97a470396ac55e"],["categories/Java/index.html","f09c9d9a6ed7cdaeec9c67aa7a754f01"],["categories/JavaScript/NPM/index.html","fbca2f0de0548e9a945a0df29e1f3fd0"],["categories/JavaScript/Vue/index.html","fcbbbffe9e95e4b5a8375416659a859c"],["categories/JavaScript/index.html","00aa0a81d8080b2bf08c1bbce4098340"],["categories/Linux/Shell/index.html","623a61fc18c6d55ac7be3ff0ab30a42b"],["categories/Linux/Ubuntu/index.html","3ac2e0ae5f16d8dfbb37d521f583a33d"],["categories/Linux/index.html","d339a4ce585ac229c41e62ea87b6c4a7"],["categories/MongoDB/index.html","5261c8e9b0904460cc80207b0a924792"],["categories/Python/index.html","9f1209907a89a20eb6733a23f31df1a0"],["categories/index.html","fee42f1500ffadf0a0947cfe5b153b62"],["categories/程序人生/index.html","2677945912d4acc2eabf81c9d277b4db"],["categories/计划/index.html","cc8792094c0ee6ea552a31d08c003ebd"],["css/css-normal-flow.html","5e725021fe75c9d5592f009b852cebbb"],["css/main.css","d10416b9a2d92d6595734567cfd74a0d"],["drafts/configure-multiple-vue-project-with-nginx.html","74be4978e7911ccc44f77d6a734905bc"],["drafts/iframe.html","844480b263f2d88ea21e39007d318718"],["drafts/record-re-install-mac-os-10-12-6.html","927a6b0578d791722b2b921e52ab47a9"],["git/git-DETACHED-HEAD.html","2f99cf6eecb485fed8a23e767d48fc5a"],["git/git-branch.html","eb2135f75559a52ff4e15df46e3512cf"],["git/git-change-server-password.html","b60ae84edab1d91f9b0e8db278223a09"],["git/git-checkout-1.html","8292a9a9413910f333a246d974af4768"],["git/git-checkout-2.html","69905a53a350e61d423d2780e7b92828"],["git/git-diff-m-symbol.html","c3f691077cf11da982ce35e299887143"],["git/git-git-flow.html","2a9af11c7a7b45b8bf7e22310bc5462c"],["git/git-git-merge-ff-no-ff.html","c4dd6176f2dcc7b8ea9c4fe147be2513"],["git/git-pull-1.html","6377a775373a5b2d7f70ea2aa9ac42e7"],["git/git-reflog.html","c69ca7a756b452f1189877f6d653bb9c"],["git/git-remote-set-url.html","437bff71f2e598542618bdbfba729bbc"],["git/git-reset.html","d0acb7c56b2775c75fe185098d1ee0ae"],["git/git-revert.html","1cabdd97a90943b12a402132d4eae073"],["git/git-tag.html","ec813026e545323e06269ee371d66d4f"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","984db97a2cb9e3bca4c3cde08c50610d"],["java/java-deploy-resource-folder.html","a4381466dae5d4d5b6d0dad809185118"],["java/java-shiro-note.html","75d50e5ef68d12eeb695c19a96114499"],["java/java-springmvc-X-Frame-Options.html","e6a1f2e10475468d240f3901fe2f2294"],["js/js-logical-operator.html","2fff565e6bcd9da28b7733d40f8e292c"],["js/js-npm-symbol-caret.html","cbfe9976ba351a82ec13029f3c9d9770"],["js/js-npm-symbol-tilde.html","0dd7ebb2af8ba9e69221449b17421049"],["js/js-this.html","c5a3f1c90f0918148cb746f685b63d41"],["js/js-vue-note-computed.html","07aeda7196a1ac29264a7c19b88eeecb"],["js/js-vue-note-instance.html","cd28e2c4126ce44c540874f9d7e476c9"],["js/js-vue-note-introduction.html","d46ede9148543c8abebca555dc3ad001"],["js/js-vue-note-syntax.html","3be72719764fc569e1226a5c93cb46b3"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","d917e193183f5608e6ffb63dac85347e"],["linux/shell-command-df.html","de8f2b663bfbccb0f1476fcd92d3d137"],["linux/shell-command-netstat.html","52905cfc8dfbf3b2a9e1acda0be1a07d"],["linux/shell-command-sed.html","dc84e2be8b8bfa007a02c92622a17adf"],["linux/shell-command-tar.html","177e3b7b99ab932400d84bbb7cd5b10c"],["linux/shell-command-top.html","02409b474c300bbb4cb79cb529c75420"],["linux/shell-command-touch.html","dfae32f4ad675ed682d9b6cd40092374"],["linux/shell-command-which.html","db73f60965afcc8464cf3a1adbcc5bc2"],["linux/ubuntu-user-add-delete.html","fcf58ee062c8b942518651c8526919ec"],["mongodb/mongodb-collection-aggregation-introduction.html","2776c16dfec7d23a5c2b1f1edf2a7909"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","52eb46c6c9a4b0abd8c4ec49d7c2795a"],["mongodb/mongodb-collection-create.html","7adcec72d2ab981505c8fa14eada8ef3"],["mongodb/mongodb-collection-delete.html","3d05649aa0265d656b9ed91b7f4b7db7"],["mongodb/mongodb-collection-find-1.html","51301fb456a41032156a7affe6f7cdcb"],["mongodb/mongodb-collection-find-projection-operator.html","78a6430fdd224da50f25a0862e25f77e"],["mongodb/mongodb-collection-insert-1.html","d4dd3413490299c15cc4b689196484b4"],["mongodb/mongodb-database-create.html","2f98b5a3b2af29b39d37e63b14481ec0"],["mongodb/mongodb-schema-design-note.html","1b7ae808b5a34b2b344dc7ece771f438"],["mongodb/mongodb-study-note-1.html","0e68ec961d9ec0d6bc1f120adecbc6e5"],["mongodb/mongodb-study-note-2.html","15cd4ce280ae520447708291dd1be4f4"],["mongodb/mongodb-study-note-3.html","8040117fe36e8330e583a5c740ca616f"],["page/2/index.html","6caa3da4f126959d72b028cfb9fac5aa"],["page/3/index.html","22452e3b5cf36ba40f22eb0374b07d18"],["photos/index.html","87f7465fbbe6fb2bd4336f911bf101aa"],["python/upgrade-python-under-ubuntu1604.html","d7e4a5cb58fe012ed04da54578eeab7a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","71146bbaa669156db8d9a2da1cb4edf8"],["slides/index.html","1fe09baa567512f3a043f213e80bf8fb"],["tags/Base48/index.html","7a04d05c4067c507acb7945694db8398"],["tags/DETACHED-HEAD/index.html","7e0b6214d44819860d0271d3cd9f1125"],["tags/Git-Flow/index.html","72352f2de4021d8a2e8fdcef746d0e72"],["tags/Git/index.html","c5ba71992089c40aca742e0840d682b7"],["tags/JS/index.html","2abb3f826e63347fc4aa589f63e9c827"],["tags/Java/index.html","00881dca8141e663e58758ad88f87247"],["tags/Javascript/index.html","5ed9d88c3ae6301979994e9042ce2cdd"],["tags/Linux/index.html","a3a5797d23a949ccdb1b240ba8063c38"],["tags/M/index.html","397393646801e1bad63b92d496e3f1e4"],["tags/MongoDB/index.html","d417df62fc2039bca2030fd313f4305e"],["tags/NPM/index.html","4f4b2d269e7e2cc02d21aaf19de49e7c"],["tags/Python/index.html","65318b04b3e8a6447beca8d612e3f41d"],["tags/Repository-not-found/index.html","817676a724491e58831c4488604a6d92"],["tags/Ubuntu16-04/index.html","07baad95ad98b8667f8e859273d76597"],["tags/Vue/index.html","fdcbc3dcec6aeb10a08be07f1953d15f"],["tags/X-Frame-Options/index.html","0ebb1c4d280a6e1b24261f1c11d044de"],["tags/aggregate/index.html","ff32802f3d347286751fc030bb481cd4"],["tags/checkout/index.html","09a064fd188bf5dba1aac158e44fa791"],["tags/collection/index.html","128e4c70a28be337cf69f794efd27be7"],["tags/computed/index.html","b9b4de00c749e89044a0276ffd5d6923"],["tags/create/index.html","f7a287bd0058ca44f701133ae6136c60"],["tags/database/index.html","d96c0c46cdf0dd1feae38cab7801b307"],["tags/df/index.html","4fe4324fa559b055aecb22f97d949a95"],["tags/diff/index.html","644ca6656ad92e39db6be89cc9a6f1aa"],["tags/fast-forward/index.html","28e82cb08d13a0ac4065c66157053cb1"],["tags/ff/index.html","832d9027fe089b389ef7e92a1d9aeea5"],["tags/git-branch/index.html","23b2ed1c127c46aab2a660c478b3552f"],["tags/git-merge/index.html","3300aa254475fc669215aeffb482577c"],["tags/git-pull/index.html","5d5014b44d42af3cfc4578505f79994a"],["tags/git-reflog/index.html","061c4d6472e7f115d8886e171b4a5216"],["tags/git-reset/index.html","f6d40595f5b55953b9bb81b6a07bf3b0"],["tags/git-revert/index.html","2322ac35cd7d53b8816ddac534a9adc0"],["tags/git-tag/index.html","ad3a5c72894a8466dcb89cc44f378891"],["tags/index.html","dc86e09b397ec957e2c0da3a8bc53638"],["tags/no-ff/index.html","d541a59b15beec64914fc35e8bd52af9"],["tags/schema/index.html","3b5867f01d1d8fdeaf46d035d2e03a10"],["tags/shell/index.html","f40cdd95b7b46386683fe217e28ae3fc"],["tags/shiro/index.html","b4ff632502b5bdeab8fba3d17f4c5605"],["tags/this/index.html","0f2201d03cd9ea7bdb59d9724d2f3963"],["tags/tomcat/index.html","fc95cbe39e53df1aa1293ea9f6bd5ac2"],["tags/windows/index.html","6898bae1a17bf84f140481fe43ce9dd0"],["tags/介绍/index.html","c48f976d2f9805c7300a697a27c46da2"],["tags/以太坊/index.html","fc23da37772fb46ebca97a934fb980d2"],["tags/依赖包/index.html","c28beba15a34c4c81b713ea62c691994"],["tags/修改/index.html","634885e7ba7e335283ef2a1b97df521f"],["tags/分支/index.html","394850d9390a66b152ef396c2798ac0e"],["tags/创建/index.html","0c66e30364f4d2ed822b532a2f2482f5"],["tags/创建数据库/index.html","d82f2e5b4493fda0414b48d048a6bfa7"],["tags/区块链/index.html","fa5d1f9671882dfb8345cd04bf4b86ab"],["tags/升级/index.html","0e314fb15f7c2a979b733d4b5f59c5b2"],["tags/学习笔记/index.html","ecc433764d8e1d0b0c7a2eba9e41919f"],["tags/实例/index.html","164b049bdd04b8d7d64e6892d3fbdc5a"],["tags/工作流/index.html","2e51a3bb57ccd0bac217d8b435ce7186"],["tags/插入/index.html","bda795c49f13738fc5ff4ffdc4a83a2f"],["tags/数据存储/index.html","0b2be34d116748e9df0d06d26cdf8bfb"],["tags/数据库/index.html","b37316aa2e8854842403250d0410507d"],["tags/数据集合/index.html","f2f17edd1d9d367677a21bb9f2304aa0"],["tags/文档/index.html","0b4202dc7720fef915c3cedb877708d3"],["tags/智能合约/index.html","5cc91efb6a364fd5990551e6dc477bcd"],["tags/标签/index.html","2dcaa5f811b51e88d36ccd07582f3c29"],["tags/模板语法/index.html","17c986fd6a56042ef0e8fd7d4876c2a8"],["tags/比特币/index.html","159aedc46b4274d577b73c1b45400e7d"],["tags/波浪字符/index.html","c4c959e5dc2a8c01877b73fb0a9bc8e5"],["tags/用法/index.html","fcf680091e61ff82474d1457ff5c9ea7"],["tags/笔记/index.html","ea88488ea673ebf30be84d7b9ee634e6"],["tags/符号/index.html","76003ce75a5447147f079389e5d9ddb5"],["tags/编程/index.html","5d11a0391f61e5ee81fb9c748c7caf78"],["tags/聚合/index.html","d6b478eff8f893e04d0d94eb907a7dcf"],["tags/计算属性/index.html","9ca89af19f546c88c8b1426dc8daf042"],["tags/远程仓库地址/index.html","984cbf4257d6ec222cae7a3d16258ec5"],["tags/逻辑操作符/index.html","cf7eb2bee7abdd69247f184c4eb73a53"],["tags/部署/index.html","fd8561295a8fcd328c2a7a19f81c018b"],["tags/难度/index.html","9db149ecf4e6c5a88df025d79476a8a1"],["tags/集合/index.html","4edd0bac87429ed2ffa4e5efc8db2fb2"],["thinking_in_programmer_life/full-stack-programmer.html","2315fe2b4e26dc5d425d39c078b950e5"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







