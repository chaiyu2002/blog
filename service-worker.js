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

var precacheConfig = [["about/index.html","1eb537242f1638cab78127e7236a2d3f"],["archives/2018/06/index.html","61002b33f33fc16b0950d87558dfefd5"],["archives/2018/07/index.html","74af5ae525cabb6fdde1dda228cf4c77"],["archives/2018/08/index.html","17a55f920f30f7890959c6f9c5ed1f59"],["archives/2018/09/index.html","3e4e4d9d3cf26e2a20d4a203c5d86cc7"],["archives/2018/10/index.html","6f1e504a0622475d88b4f849cd910628"],["archives/2018/index.html","a4a102ec8c936a578407072aec6949a0"],["archives/2018/page/2/index.html","d6b1f0e8d454bc35210ccf035cf70fab"],["archives/index.html","ef17480d6d4bd5b85df534bc081ee892"],["archives/page/2/index.html","dfdda6e980b81cc39eeb8f98368e4b2c"],["atom/index.html","08d1d205f42019bc7b9eb58ef9dc7c0a"],["blockchain/base64-base58.html","ab3874cc4932d2b0eb47e59e1005c0fa"],["blockchain/bitcoin-data-storage.html","417fd60a211abe6abc85d38939de5078"],["blockchain/bitcoin-difficulty.html","65028e9b2a3a1ce161706864c3bcda5b"],["blockchain/block-chain-ethereum-contract-program.html","7a33fa0629135b6a6e627d030698569b"],["blockchain/ethereum-programming-introduction.html","c4184e37a5da2d22622f20dff4bcfda1"],["blockchain/ethereum-rationale-introduction.html","9a71903dade68e04dff81aebf2121250"],["books/index.html","c776ea52c468987622f54066f487f056"],["categories/Blockchain/index.html","a5caebdaa426916587256eb693310f80"],["categories/Blockchain/以太坊/index.html","6b6e5ad4032e3125fe2e234437fb2295"],["categories/Blockchain/以太坊/智能合约/index.html","49772be6c1ee8bdd50d8cee0da833f1f"],["categories/CSS/index.html","e05f86774f1224cce6aa22c0bf6a88b3"],["categories/Git/index.html","a557202fe56651a7ddee7ab22629ffad"],["categories/Java/index.html","439faee2d564b81d29f5a149ff92b311"],["categories/JavaScript/NPM/index.html","334cba73fe22b677daf6ba11cf82f573"],["categories/JavaScript/Vue/index.html","07a6900a7f11ab9634cea752a8768171"],["categories/JavaScript/index.html","cab3b7ed0e8ac931d451865a9f0a3517"],["categories/Linux/Shell/index.html","d93302b548571581cf96492ec78664fc"],["categories/Linux/Ubuntu/index.html","4ef4a47f550ff142439453d25f49f906"],["categories/Linux/index.html","36c4892bd54bb3ecb0060ec8b14d1128"],["categories/MongoDB/index.html","d876e63824418bfaf61533a4b4e67d51"],["categories/Python/index.html","f9375cd50a1df4cce1d21620f68ead9c"],["categories/index.html","189a1cc5a05396176897220c86bb7cdb"],["categories/程序人生/index.html","861cd8178f9c6fbdd2088565e19307cd"],["categories/计划/index.html","a04fab603d0b146f5cd7b4b8497a7806"],["css/css-normal-flow.html","7a8055d845da2bf39913e60ed6db26b3"],["css/main.css","3d0a67dacae306639d58135d0afa4f82"],["drafts/configure-multiple-vue-project-with-nginx.html","79adc893405cef1d3a2cdf0012b42c3e"],["drafts/iframe.html","2077d19d34cedd7d198794907b9e0a68"],["drafts/record-re-install-mac-os-10-12-6.html","2a2bd822dbcb769813bdbedb9ee02096"],["git/git-DETACHED-HEAD.html","79510355eb706abe8297035966aaa858"],["git/git-branch.html","69cb4bd3f5d10e9fe9d0bd8394d811ce"],["git/git-change-server-password.html","fc3e3c88f982094d013c1dbefb247037"],["git/git-checkout-1.html","dcd3a7341a5042b10a3fa454df76d3aa"],["git/git-checkout-2.html","c32575fa88dc1bb418172932693d1f56"],["git/git-diff-m-symbol.html","5f11e7d4c3c580a6d60ea9c9751450b7"],["git/git-git-flow.html","74452c8fb91cca89c44e0b8c60793b3f"],["git/git-git-merge-ff-no-ff.html","6120a406aa68ace3f7135c2dd73152c1"],["git/git-pull-1.html","30c343d9d97c8901116ffaaacbded61c"],["git/git-reflog.html","43b12716195960fcd124f94fded467c1"],["git/git-remote-set-url.html","9afb1ff147dcfd2b4bc9a2daef78cad7"],["git/git-reset.html","f90eabc6e518864be8f5c805aef16449"],["git/git-revert.html","d19ce2196e628df5d0f8304a82801c0d"],["git/git-tag.html","9c34f783b798b77f8f88993b2fab03cd"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","05077bea8b71929c096b6722ca8a92fd"],["java/java-deploy-resource-folder.html","91b2f6f77b482ef9cce8973ac0b416df"],["java/java-shiro-note.html","aa5a3057f357931e5971195feb00b955"],["java/java-springmvc-X-Frame-Options.html","8dbf0d59d4c8e4e1943c2018525c6030"],["js/js-logical-operator.html","3419bdb99f7ad1a336182073243b92c0"],["js/js-npm-symbol-caret.html","5bc6da60f7c235893ea3c0991a0ce14e"],["js/js-npm-symbol-tilde.html","37a99e5ee5bb25aefefce968f902fed8"],["js/js-this.html","4d804d79dcca553f61fe6dd3faa73b55"],["js/js-vue-note-computed.html","55e0fd91d8281d9ee39b80c962a16fdd"],["js/js-vue-note-css-style-binding.html","af322eea11aed2843f149510d4c05294"],["js/js-vue-note-instance.html","afb2d85ef460db896b246fbe3a21655b"],["js/js-vue-note-introduction.html","ce79922fa12d6874b511923b9bcd7757"],["js/js-vue-note-syntax.html","2b4eee0ace20e7f3c7af74c86b962208"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","4852156f6fd75a70a56805e8eae4a342"],["linux/shell-command-df.html","6bfc59ac1eeb7f2c8d5463650ffe0fa2"],["linux/shell-command-netstat.html","691aa248325e49d6f36b06db9d801c7f"],["linux/shell-command-sed.html","6a190b1af1081aaa49d4df845f25002a"],["linux/shell-command-tar.html","48d241f067c7b4c66112c3e33f0541ff"],["linux/shell-command-top.html","9c199088f91b08881733e51d39eb9ba4"],["linux/shell-command-touch.html","a71f875fb70675177c35f65fcb1f146f"],["linux/shell-command-which.html","3f18b918baa34ae66f63693309c40abb"],["linux/ubuntu-user-add-delete.html","054904fc2039d4ed846ddbdd11d0ab21"],["mongodb/mongodb-collection-aggregation-introduction.html","78a8b547325acd1f44a4acb12ac8031c"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","a56d835d94968c068401845ff2bff3ca"],["mongodb/mongodb-collection-create.html","04bea32d0e99d5f5401ec677121eadc3"],["mongodb/mongodb-collection-delete.html","60eee6520c7fc59464a3d86bb3e2360d"],["mongodb/mongodb-collection-find-1.html","59f6e24738a2b99859ec0a0cc46d7c87"],["mongodb/mongodb-collection-find-projection-operator.html","d0641161c8805b294089b36093e31cd7"],["mongodb/mongodb-collection-insert-1.html","82e2459370d673e226c1b8d6eb9f6f50"],["mongodb/mongodb-database-create.html","aed4952932d503dc3d0528afb96acb1a"],["mongodb/mongodb-schema-design-note.html","540ee58c2ecf61607dacd296b6333de6"],["mongodb/mongodb-study-note-1.html","35457df2a9077b1c8ec98b84f76f72a1"],["mongodb/mongodb-study-note-2.html","6bb2b750a396e6ac3bf7cfd98b6d6d23"],["mongodb/mongodb-study-note-3.html","e87b152c62394067ff2f584050168034"],["page/2/index.html","5fd39ca89777aee72f82d4fe35913189"],["page/3/index.html","fbe443a1f0c356e919091e530b6e3439"],["photos/index.html","6fa5e5b8b2d35bf6ebde3ae76755d796"],["python/upgrade-python-under-ubuntu1604.html","a51d6be08ce62a116e38dd4bd8cb4268"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","d0464438d8c1a39db1c908d14dc88ebd"],["slides/index.html","bf414c264e9055f214e3105601044d2b"],["tags/Base48/index.html","1b09fbea0faf85d855d6ef1fc0ab74bf"],["tags/CSS/index.html","fafaa77dd14fa2f9cd0d4e73a57b1267"],["tags/DETACHED-HEAD/index.html","573091400d1e9fa208aa798b8c249ab1"],["tags/Git-Flow/index.html","adce23ac77a3a6387aedd9954afe9932"],["tags/Git/index.html","c82668c67c55360a5e86230c7c7b2c3b"],["tags/JS/index.html","0f6d6e3b0d97cad653e3435564509e5b"],["tags/Java/index.html","8d25fd449949c90d354dd3d333154044"],["tags/JavaScript/index.html","2617c2485049c4304f8e51a8b7cbe081"],["tags/Linux/index.html","b2bfc73aaf871fe3b8cc6b1ab090866b"],["tags/M/index.html","295392e317460ca512c9d835bb6d1824"],["tags/MongoDB/index.html","49612d8085113ac0d4c49d435e1b87ca"],["tags/NPM/index.html","f0225f20274b79342f0fb501cbc6ba74"],["tags/Python/index.html","ac589af3f628aa7293a278a8f8b8001a"],["tags/Repository-not-found/index.html","18098cd25bad12f098d03a72a120d93c"],["tags/Style/index.html","38b7e003066a5e39a1438633b2717826"],["tags/Ubuntu16-04/index.html","a0579875f9a9404103acfed1e814593b"],["tags/Vue/index.html","674b67dd90b7b32caf76572b5d0b338f"],["tags/X-Frame-Options/index.html","ed7ad7dc4af1bd15c601174163bd36f3"],["tags/aggregate/index.html","47cf71e76000028620704021ba5fbcc8"],["tags/checkout/index.html","c499bfe186f963b6f705ee3082a21fc8"],["tags/collection/index.html","4a2d4841c6e710895b232126dcec0924"],["tags/computed/index.html","b2b535977e143544eea6f9ce3ece33db"],["tags/create/index.html","059afe9c2604df7e6620e65f2de5185f"],["tags/database/index.html","97d0a17530a24ebe9b53457b33dc68f5"],["tags/df/index.html","02035800730d2a50244c7e675586c375"],["tags/diff/index.html","6a6eb5dfeea4b04bc78c1623d2cf9947"],["tags/fast-forward/index.html","9fbf30898f73a75ff721ed41d979adf6"],["tags/ff/index.html","b6470e17fa4e5647ccea27c7568bbe02"],["tags/git-branch/index.html","57196f13e11b15db70b6a1c3819e8870"],["tags/git-merge/index.html","9ff72185798d3149a1858a9e055c889d"],["tags/git-pull/index.html","872342ab98dfd46135c97e88e5ddc8b8"],["tags/git-reflog/index.html","ad58ed0359999d82dec54eb0155a902c"],["tags/git-reset/index.html","31e4e5c5b7539299a5099776cd8d42eb"],["tags/git-revert/index.html","c3a57c2a51b0ad3c5b5c0836dfa4d688"],["tags/git-tag/index.html","34895371a152977f511f6afc894d5bbc"],["tags/index.html","77ff0f7c2821ca9749b94afc4fc76230"],["tags/no-ff/index.html","0014a73135ae3da44fd158653446b8c3"],["tags/schema/index.html","2d1e56080e451a50d6cfc47394ee0dda"],["tags/shell/index.html","cc5c90cb93e236336b8ab1be2fd784b9"],["tags/shiro/index.html","4f8a6acdc3b9a26167c2fb665b512820"],["tags/this/index.html","cf6d232c63b56fd5f46bd29b32983a2e"],["tags/tomcat/index.html","f31c038e7d3f8ce040ac42ec73fbb25c"],["tags/windows/index.html","9b0871fcc26a44f6f72872cefea081b8"],["tags/介绍/index.html","338d92b8a21890b35eee43bde87b6bb9"],["tags/以太坊/index.html","eaa14605e7e7990341c912bb1d16c66b"],["tags/依赖包/index.html","120a7972aac6a412ce8c9d9c51d6ac26"],["tags/修改/index.html","ae280de4e7f021934d861c8c5c9acc9a"],["tags/分支/index.html","ad1e65a2ef1d4ef8bfc1f8d02283ada1"],["tags/创建/index.html","fa7ca6869b39ac197a406aac52abf81c"],["tags/创建数据库/index.html","292b4fe23770f6b727dc1c04955b671c"],["tags/区块链/index.html","8b0838469158078dbb55b4907c18e0a3"],["tags/升级/index.html","205dcfaea56f92cc3d21719a691952c0"],["tags/学习笔记/index.html","2cb3649ba59e7597e7809c2570265030"],["tags/实例/index.html","2f7731e5a8eec1a31fedae4e394320e6"],["tags/工作流/index.html","a41578e53b1d7fc29146190b96ccf3cb"],["tags/插入/index.html","ae67864969e69ad704ec2f85183cea4d"],["tags/数据存储/index.html","3898971140055c03306dcc0a8862f768"],["tags/数据库/index.html","273c54cde8708806ba27931a74d944bc"],["tags/数据集合/index.html","0f3af7a4d0b7d2b6ed6d9342e390fb4b"],["tags/文档/index.html","8e70a69b044a1ce17be77716208bbe36"],["tags/智能合约/index.html","346044954094d8ad5fc6c3d204f08f64"],["tags/标签/index.html","af32b3d2ce9690272136bf39a2367db5"],["tags/模板语法/index.html","493286d764457784d8e4ba642427500d"],["tags/比特币/index.html","679ad0fb4e756ea300196e5923e5cf7b"],["tags/波浪字符/index.html","c3e53a1db1004e9c248459a027dc9dc0"],["tags/用法/index.html","89d152f6f800520b3bdd31008ffc285c"],["tags/笔记/index.html","bce6fe131758fb6452079559116be20d"],["tags/符号/index.html","10239fc016559467b978e28831c2e1fe"],["tags/绑定/index.html","4f14916e93e9bbfc8fff9fcc4f203b46"],["tags/编程/index.html","042607ba91018d338d217a669ea1f347"],["tags/聚合/index.html","0ace8339f96ee9eb1d7a12df53093b0d"],["tags/计算属性/index.html","b71b7424d4dc4a5ff26f244480c2f954"],["tags/远程仓库地址/index.html","2bfdac554177b3b13767c710fee774c6"],["tags/逻辑操作符/index.html","8f3474b78efbaa38a77dc436eab8e9b1"],["tags/部署/index.html","45af7991be639967b96d8f0d7b95a281"],["tags/难度/index.html","6f358e4a3a4ddcc64e80d3abac338d2a"],["tags/集合/index.html","543b3e2d927476edad0b2faf3c1e169d"],["thinking_in_programmer_life/full-stack-programmer.html","777523b906c6db160dac9bb4766d8ae6"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







