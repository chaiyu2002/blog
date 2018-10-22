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

var precacheConfig = [["about/index.html","c62f917e2b8853f2c92d035606f33723"],["archives/2018/06/index.html","e07b08321a1d265bf007007e1b344a71"],["archives/2018/07/index.html","f70fd6599aa09607a43f280959f56438"],["archives/2018/08/index.html","4996693b01729e5ddb7e018e931ca856"],["archives/2018/09/index.html","a7378212d72e31292e92569fe8c0daba"],["archives/2018/10/index.html","2ff7e49d9628bf4fc26510f896db89e3"],["archives/2018/index.html","c98565aba33c6fe2109035419fa9b263"],["archives/2018/page/2/index.html","23742e9252be1e96284b2bade54bf800"],["archives/index.html","895d5c3430629b1dbf84e5c356a61d05"],["archives/page/2/index.html","7a5b89218d23bac32f4b0fc54351b53e"],["atom/index.html","8fd1038a8e70e725589f7a268064d056"],["blockchain/base64-base58.html","a0038e60ada462415ad9716ed76ab569"],["blockchain/bitcoin-data-storage.html","f74dfd3fd8dd9a14ea56510a72147f56"],["blockchain/bitcoin-difficulty.html","7f606f2503a06ddf9ffb0c43f86a6868"],["blockchain/block-chain-ethereum-contract-program.html","ceb9bfac650716563240306f34c6a428"],["blockchain/ethereum-programming-introduction.html","956bf21219d4205d686ca9fed4bb6d7e"],["blockchain/ethereum-rationale-introduction.html","d672b72aec38d099d0e6367301845959"],["books/index.html","d0c265964bfe9e788eaf80ee08374864"],["categories/Blockchain/index.html","bb5313d5fb45ca40817ccd78c9d98f19"],["categories/Blockchain/以太坊/index.html","f005bc49ce18fe2ab997d4e4bfae3bf3"],["categories/Blockchain/以太坊/智能合约/index.html","7b44edc318cbbc74e1895df73ed30d04"],["categories/CSS/index.html","108f34ee4af619d2b7f5370ba7e2edc5"],["categories/Git/index.html","8432b90dc59564f2f2c5c7405c3d82e1"],["categories/Java/index.html","2bcfc7174b016bf6bc1f6dbd385117e3"],["categories/JavaScript/NPM/index.html","8a684f6b0dcac2527f03057279069131"],["categories/JavaScript/Vue/index.html","9e696fed9efc80406f69a71a222ea6cc"],["categories/JavaScript/index.html","4a8a649f88e0d1fadfa0b1a9ef028580"],["categories/Linux/Shell/index.html","156128428e472d431b00bfa9b176f663"],["categories/Linux/Ubuntu/index.html","e48e99c04aa7345b9de4e0e5391f8757"],["categories/Linux/index.html","f244c790d32b913482545ce08b7fa6d0"],["categories/MongoDB/index.html","d55a79a622320f5190634fb1d3c1b9f3"],["categories/Python/index.html","3200be0b1827ad2cd4b7615ad53359ab"],["categories/index.html","48a99daba0908d8f99704882497b1e4c"],["categories/程序人生/index.html","66ac0db55867610a73a362de10026c76"],["categories/计划/index.html","21bd8bdcd733e7de0be344b7351caa0c"],["css/css-normal-flow.html","5a3ba893d6360434d16d7003e1dc30f6"],["css/main.css","da8e34990917e574bd4ca82264dca62c"],["drafts/configure-multiple-vue-project-with-nginx.html","ae195f54d28b77ba1fe9d840ef0b6dfc"],["drafts/iframe.html","4e15091e7a59b643bb89fa30e0c2183a"],["drafts/record-re-install-mac-os-10-12-6.html","58e87eace05a93766acfb6567c936c6b"],["git/git-DETACHED-HEAD.html","9b3d1e54f51af03e1eccef5902dff726"],["git/git-branch.html","0fe48f882719890cda4a5a9f56590d55"],["git/git-change-server-password.html","ae9865875d863e6e5863a412a528a8af"],["git/git-checkout-1.html","db5d1aea7e74992bcbabf508f5ca1d71"],["git/git-checkout-2.html","9eda8058fcbc855d802667907087f75d"],["git/git-diff-m-symbol.html","779305522f24d54981589fbfd2fcda7c"],["git/git-git-flow.html","dcb642d904d0e6a0cae9732a5c466ed6"],["git/git-git-merge-ff-no-ff.html","9b68a15764d8eb665aa51b161d5fa2b4"],["git/git-pull-1.html","f10761c3b2ae0edea60b3ea06e92d33d"],["git/git-reflog.html","636876602e6638d31efec6764d0e7256"],["git/git-remote-set-url.html","ea7435ab0aa136d639bba8d79b6eff74"],["git/git-reset.html","7dbc144ba4a7e7ecd2353e6be72f9380"],["git/git-revert.html","02d106e2fdc910222a21c449114abd6e"],["git/git-tag.html","b4457de04fe20f3e58dab2e6e53eb6c8"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","7bbf4f97428c6ca9d12b55115d85ad2e"],["java/java-deploy-resource-folder.html","f8a7707f437e25c059fe3dac2eab55f2"],["java/java-shiro-note.html","e3ebe72d2ad788f2bca545a88ad461db"],["java/java-springmvc-X-Frame-Options.html","3684de99f743552c3af670de5ac28ebc"],["js/js-logical-operator.html","57d982247a64e3b12c34c807e06f6dbf"],["js/js-npm-symbol-caret.html","6fd09c517c6c9e8a56873f91b199b4ed"],["js/js-npm-symbol-tilde.html","07f2b06a893574baf5ac178775fa80f7"],["js/js-this.html","ab6c1a37ca8fc18f22e7dd4976c62faa"],["js/js-vue-note-computed.html","372afe692df4c491a7bd21d23a7924d3"],["js/js-vue-note-instance.html","878013cb879ec86f8a5b33dd08426d79"],["js/js-vue-note-introduction.html","c6c6df1386bc8cb0b4188c5eaab3c499"],["js/js-vue-note-syntax.html","9e5fe6f45859fe49edbff50b94e53b6f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","b2599733d1524b72cd12a5e5b58f4da7"],["linux/shell-command-df.html","381188a4ba2eeb3bb3db9b454b829efb"],["linux/shell-command-netstat.html","ad09f67896f90888378693499ff9778e"],["linux/shell-command-sed.html","876041b84f999c148bc63e6bd3fd19ed"],["linux/shell-command-tar.html","283a7ef714b95a17c8690254b25e6a87"],["linux/shell-command-top.html","bfca381bba62232c9c82911f184f8189"],["linux/shell-command-touch.html","3a7cc18f4a31b21bacef4b75427cd9c0"],["linux/shell-command-which.html","6b05a388f1bc3069c2ef73d0a03f2091"],["linux/ubuntu-user-add-delete.html","4e6247cdf00a97311857761e4376d46a"],["mongodb/mongodb-collection-aggregation-introduction.html","384704286de0413d81887fa90d03ac8d"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","34b7cba13f981de485faf15a0bb1e5be"],["mongodb/mongodb-collection-create.html","a5b41ab01d7899f0b93c97a1c8953479"],["mongodb/mongodb-collection-delete.html","ed56f8c4e8158847b13149d7fa3eef36"],["mongodb/mongodb-collection-find-1.html","a9df982fc805de62a49b9cb4e9caaf77"],["mongodb/mongodb-collection-find-projection-operator.html","b1af82bc783ad409516252f1d4591218"],["mongodb/mongodb-collection-insert-1.html","cca816cc5d2c8c35accfac43075542e8"],["mongodb/mongodb-database-create.html","d68ea93404bf34b5620b565d36e6ae1f"],["mongodb/mongodb-schema-design-note.html","afde399b0e4e4a1cc15b69b14e09841b"],["mongodb/mongodb-study-note-1.html","1391e453931e8f089537c4cbd1a5f564"],["mongodb/mongodb-study-note-2.html","0fc49104f38b8b092d4a5487fc9a377c"],["mongodb/mongodb-study-note-3.html","64c2cf94caaae2c15334a334821dadfc"],["page/2/index.html","627630e65027a2dcbf42da9c858622fd"],["page/3/index.html","e3a7d56a552a88e625735a8d71370816"],["photos/index.html","d8e4a72f068eba8d30ee70f532b8cded"],["python/upgrade-python-under-ubuntu1604.html","6f8ea0773d5c7e1634f252218c1f5a60"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1b6064d2375c56128b2d6515542affb2"],["slides/index.html","1d9efae7043650527ba1c16f9eecf09a"],["tags/Base48/index.html","126d8c4378ac966e0bd6c488d3923a64"],["tags/DETACHED-HEAD/index.html","356ddcb10fd6248f78f00884eeea2b18"],["tags/Git-Flow/index.html","8d7fce56f32cd182e881348130d1af9a"],["tags/Git/index.html","fcc612c24559f1dfc97d39b6e2f1140e"],["tags/JS/index.html","5822eb6eb38dd83d53a8505621e06ed6"],["tags/Java/index.html","2544b80edba0e2f12633cb94e2ee3f82"],["tags/JavaScript/index.html","3a0a0645e58e4b73d6c34eeff0581d62"],["tags/Linux/index.html","0aa2815d299437a24770bc6cea078c83"],["tags/M/index.html","9f014453fa84d36398260c9d41a6fc38"],["tags/MongoDB/index.html","eb6f75f720edb87afc5c2931fd403c02"],["tags/NPM/index.html","d3a25b5f5a6d9d8003e9daa26fe84560"],["tags/Python/index.html","bbbff4fced016b5945a0f753d75df633"],["tags/Repository-not-found/index.html","3613fa61f23e572645802cf1f8d7c549"],["tags/Ubuntu16-04/index.html","28b6bb825b5374156ae072072c38456d"],["tags/Vue/index.html","1c296542ea69921d79f754008a35f1e9"],["tags/X-Frame-Options/index.html","1d25c2b71b7c3e7e8b643fe3d07d87f3"],["tags/aggregate/index.html","8b6cce9af459143f9731d1b3a7eff76f"],["tags/checkout/index.html","ef4b09d6f12035953dc1de4be7b6d03e"],["tags/collection/index.html","34a3c6d60de9f6b70105b47baa098553"],["tags/computed/index.html","b203978b63371795bb4449ef3a3926b9"],["tags/create/index.html","3235bce2311c8137694946f97a164059"],["tags/database/index.html","69ef06305078ad33364d5640c1c72fe3"],["tags/df/index.html","a399dd5d6efcf54ffe5d52812a4be5ba"],["tags/diff/index.html","d6c2d579bbd704f8f35cee0fd4d3a29f"],["tags/fast-forward/index.html","653531424f92764076fe8cd4cff29fe7"],["tags/ff/index.html","1d2685f46a1f408c2d7205cbe7cbe756"],["tags/git-branch/index.html","88359b3303f47ec68299efe3982ed735"],["tags/git-merge/index.html","2ce2ca54cafd2252627735b662b0f136"],["tags/git-pull/index.html","b73973400a30cf2d48a65d7592570d12"],["tags/git-reflog/index.html","6302dc24ce187c2b7cb2dc81fe9424cc"],["tags/git-reset/index.html","0c80f90fc3e181573105acb19aad0459"],["tags/git-revert/index.html","710940fc9071a6f27a4e23486e47b904"],["tags/git-tag/index.html","549fbdb94146ca6939e9a5256851a69f"],["tags/index.html","d9bc9067ed539c1e5a791639243b303d"],["tags/no-ff/index.html","c8855d6671b94471817b3236ac89dbc4"],["tags/schema/index.html","ef3089a95d9879472bca3b40dc2c0dc7"],["tags/shell/index.html","45baa83ac4b702737d3e9217bba6f84c"],["tags/shiro/index.html","e7f1baf5a31154697d139a878c767fb3"],["tags/this/index.html","6099bb7b4d2bc3229deba35521d27985"],["tags/tomcat/index.html","f929f0ddcaee1e3469e1d9ee70b9caaf"],["tags/windows/index.html","5b4003a6cd08b2c843412b4b67b5d642"],["tags/介绍/index.html","70bff6444165f047cea5a3e3831b351c"],["tags/以太坊/index.html","4dfc04bdcd9f45d8fde16ae6dd019602"],["tags/依赖包/index.html","f7866cb4bcc869bb31cfc6c7a49be5e4"],["tags/修改/index.html","52bd83e6d7c823103cb5f6c4a07576b0"],["tags/分支/index.html","45bf8d6ee52bdc914232d0b597dcb89c"],["tags/创建/index.html","bc43db8e7ec0adc89f282271de4c0c11"],["tags/创建数据库/index.html","0859591d01ffcbe8ad03da6879d73f62"],["tags/区块链/index.html","a0137612e0a5390afa11b6fa85855c78"],["tags/升级/index.html","0b0f675cd5daa64b8edaedcecf92799c"],["tags/学习笔记/index.html","5b1fc4483cd6477ac6c86994d4877366"],["tags/实例/index.html","ccfc3f5d459f94e290b13d7c485115db"],["tags/工作流/index.html","7f7c8483f0b79564c0ba7c69b0d0963d"],["tags/插入/index.html","38d68ff497bf594a5196a921de07805d"],["tags/数据存储/index.html","00da5303868695b77879d09203966e1e"],["tags/数据库/index.html","a0ac6a038279384ffedeaabf29f0bf59"],["tags/数据集合/index.html","a88af83423d345843b6a0dcbb4fc616e"],["tags/文档/index.html","507aa6af7c337d9347dab4cfe3b6a3a6"],["tags/智能合约/index.html","7efb46a88c7a84fa9a94469ccd2d0943"],["tags/标签/index.html","c8fc1e8801ca72d805c42d96488a7efd"],["tags/模板语法/index.html","14722a3b774f6f531f5d9c54cf1b2755"],["tags/比特币/index.html","07d35043f81650184c08a7931104a735"],["tags/波浪字符/index.html","2a70df2f80c1c99a1a71f18638132dbc"],["tags/用法/index.html","4e360be87590aeaf17814fe0cf16732d"],["tags/笔记/index.html","00733e8bbba32ddc9b339f1b15b8392f"],["tags/符号/index.html","ae3353bd5805fe56c7e5711c327a2ce8"],["tags/编程/index.html","f995c40e315f6bcc029e2bda0d773be5"],["tags/聚合/index.html","2665192816b68766e9f2f21d8dd339f4"],["tags/计算属性/index.html","314d603e640f600b7d484e4213d3d469"],["tags/远程仓库地址/index.html","ae75bf9687e7f4d0335266670ba2cf33"],["tags/逻辑操作符/index.html","c20f8eb40b93b54278bf6f41186e4fbe"],["tags/部署/index.html","46280a41dc90611854772535054622c5"],["tags/难度/index.html","acb9654a844f54dcc5f00bd9bdb8570b"],["tags/集合/index.html","fb9387559d4184d982d6ecec690aaa1b"],["thinking_in_programmer_life/full-stack-programmer.html","dadc40bacb3313fde8fe097a8911c261"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







