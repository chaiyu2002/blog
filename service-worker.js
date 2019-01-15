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

var precacheConfig = [["about/index.html","c84f68943323e95eee515ba9cc58fb3b"],["archives/2018/06/index.html","5a82b12fd967a90c28a5f06453268c51"],["archives/2018/07/index.html","7b42a6c81e32a505b31fc029d2b75d08"],["archives/2018/08/index.html","b6894df6662df8bb84698c7be473392b"],["archives/2018/09/index.html","b6f809af1aa90ebadc15e6ed2e5a76e6"],["archives/2018/10/index.html","9cdd8f3b46ff5a410ec387212a924696"],["archives/2018/11/index.html","c4697550d3bc5bb152bac6746d79a80f"],["archives/2018/12/index.html","a978f183e56ed043c29cd28da922088e"],["archives/2018/index.html","3ad84b0cfc737fd6ecd659e2b829072f"],["archives/2018/page/2/index.html","76bc758cc73107a52f824d6e1a541d67"],["archives/2019/01/index.html","0af8ff37bea35ee8fd108cdd98fe75fd"],["archives/2019/index.html","9540ce287805ce216ba26348e42b8556"],["archives/index.html","0ad9fa5776c1c51d5731078ed5a64e52"],["archives/page/2/index.html","a823613a0e17a077cf40b5bc6d4372ee"],["atom/index.html","52cc12f2fd042bd0428affa76f72a73e"],["blockchain/base64-base58.html","248faa859f46ae2b33985e03f0b33817"],["blockchain/bitcoin-data-storage.html","6f676447886fcbc35a1fca4331bc3c5d"],["blockchain/bitcoin-difficulty.html","26059153683237ffb357425a51080ab1"],["blockchain/block-chain-ethereum-contract-program.html","6ce6e3ff1ff7b9fe17f839a07b92bcab"],["blockchain/ethereum-programming-introduction.html","fa89b0f7a52f5f40f40e9961ad326d7d"],["blockchain/ethereum-rationale-introduction.html","c978e2f314fa9acccc0366d71c3aa583"],["books/index.html","f7a3d59310d9d399c22e15c28dbc8510"],["categories/Blockchain/index.html","09b1bc8bd23e4b3d8c715ef662b53e94"],["categories/Blockchain/以太坊/index.html","b3062fc3abdc255c46a43e7a81fa3782"],["categories/Blockchain/以太坊/智能合约/index.html","a292049f56251ab972f2860c68aff4f1"],["categories/CSS/index.html","5484ba0c5d72fd1f255ec6fca00e56e0"],["categories/Git/index.html","4314471badb18b041eb9c1137d10a8a7"],["categories/Java/index.html","db2d41b9fd879eca30414525cc9a7cd2"],["categories/JavaScript/NPM/index.html","af71a43b168d35ae5a6b7243e84e2e1f"],["categories/JavaScript/Vue/index.html","657ed2052588bff21683fe4ebb7fcbc8"],["categories/JavaScript/index.html","0a4ad16a8b3b007c95e4963fe75b183f"],["categories/Linux/Shell/index.html","4801a8e55806e34c46deb059653d722b"],["categories/Linux/Ubuntu/index.html","49ed8486b2c12424612ad719d8db624b"],["categories/Linux/index.html","677466f9bf7ded172c8f0f0945cf1695"],["categories/MongoDB/index.html","1612f3b2dd34ccd536697f6592808f63"],["categories/MySQL/index.html","8701fa9c29a9247b247c192ca118c9bd"],["categories/Python/index.html","f061acb8556dfb08fa97ad7973931dc8"],["categories/iOS/index.html","2fcb5f7e902e8d080d95889daacd8265"],["categories/index.html","94728606cd1d6bc94157b507d759948d"],["categories/微信/index.html","ce6872d6b9ce0ff14a1d4602bd062b1b"],["categories/杂记/index.html","6e3d377e775579a46623bf770044fd59"],["categories/程序人生/index.html","d405ebca7c31a35345f2ac9088cadc2a"],["categories/计划/index.html","fd20f88bb92e5416cc7b65551ef60e38"],["css/css-font-note.html","17ee5e7f28e136558cf07dd24539805a"],["css/css-normal-flow.html","534e1737ef5c141cf4251b7cccb13acd"],["css/css-sass-introduction.html","2fb83845c04feca45d707bf02bcb6a56"],["css/main.css","e69f40ebb8964379ca17e5cf113c3efc"],["drafts/configure-multiple-vue-project-with-nginx.html","947f0ec41e7889fdd2a2ffb8e8aa2acf"],["drafts/iframe.html","57c2bcb3c0180e06ca3dd223339d7834"],["drafts/record-re-install-mac-os-10-12-6.html","5c5977a9a6be6f30fbb79fb3975d10bb"],["essay/note-ximurong-tree.html","9553abc08535453f1f7e669061ec5364"],["git/git-DETACHED-HEAD.html","9f6ea9f9af7f40c7b0fc0fdf17bdcbd1"],["git/git-branch.html","db62354129297008bfcaeb6454c91da2"],["git/git-change-server-password.html","4778cc2fca0b48385346b433b78a94a0"],["git/git-checkout-1.html","a6fa59c2a89897cd58c4bda1ab97887f"],["git/git-checkout-2.html","67158ab2f78152c801d58656f0bd5211"],["git/git-diff-m-symbol.html","09e7ee25b9cc29632b5fc515fb77734b"],["git/git-git-flow.html","e985cd45f598e08d3e5319ee0c815e4b"],["git/git-git-merge-ff-no-ff.html","ff00f1a2225f5e863dcd645db96a4874"],["git/git-git-merge-true-merge.html","af27ee9847e8dbd326bfb4eb20095910"],["git/git-merge-choose-one-side-code.html","4a416858b015f6005932d5ed68aaa4ea"],["git/git-merge-exist-conflict.html","a328cf1c99f6100aedf371d992886007"],["git/git-pull-1.html","2d3267f182d891a8b27a9b33aa99cb55"],["git/git-reflog.html","638d53e58ac452d168510981470c1d21"],["git/git-remote-set-url.html","7898e01b2d7c58353b6bd3aba342be64"],["git/git-reset.html","84d6261496418c41c109a76b2d1ad2d6"],["git/git-revert.html","8432003667050006ef86e5d84d33161c"],["git/git-tag.html","d7f4ae5ba86ee8b72bd40a1bc0e6d1da"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3095b603ecffc70c59e02dd3a5b6300d"],["ios/ios-oc-kvc-1.html","dc60d3c0495fdd751807215622e87528"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","89e44815bb793f8923e34b137f4b0fd5"],["java/java-deploy-resource-folder.html","11bf1d112df124c824e8ce49007d7578"],["java/java-shiro-note-2.html","6e3f671a272a4739b5482e8a3ae00fb7"],["java/java-shiro-note.html","321d25de59246d63b053fb52872bae98"],["java/java-spring-autowired.html","6db88673b4e85ecad2220eca9805c058"],["java/java-springmvc-X-Frame-Options.html","be41d2dbf1653c57b154de27ffd564d4"],["java/java-synchronized-note.html","8a881c113097c10f9a2cf250427a509f"],["java/url-rewrite.html","ef81f2019cd29e1396ad38b03d97a28c"],["js/js-logical-operator.html","f3b86a2eb5cda98c63b87f730a5a77be"],["js/js-npm-symbol-caret.html","8686def025553fe404350e2e121e2a19"],["js/js-npm-symbol-tilde.html","3b40c03a7dde07731e272b58e15e4f56"],["js/js-this.html","53db0197a4ef1e9e0808de3d9262af80"],["js/js-vue-note-components.html","eda4ce5b178a2249b9833cb0f8442742"],["js/js-vue-note-computed.html","f86eaaf1b647b44953a71f761d1f417e"],["js/js-vue-note-css-style-binding.html","86d289a45cc6c1a2bea5df19e0a3dafd"],["js/js-vue-note-directive.html","a315e9936d160ee224f20e7d56e60f9f"],["js/js-vue-note-instance.html","f968109544a563e9a940a2a9c0fcb7db"],["js/js-vue-note-introduction.html","5f7366f567a4186738dbb1220c7727ee"],["js/js-vue-note-syntax.html","4b032cf625d9f39dcb73ac0638c68dd2"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","120f7c86cde50c009a4a82ff4d518f9e"],["linux/shell-command-df.html","af2d4cad89aafbd56a25afc26ac67ee4"],["linux/shell-command-du.html","ecb1a5468999ec88095697c393df57cc"],["linux/shell-command-netstat.html","93db97a7d86d08d9e977aeceece9b277"],["linux/shell-command-sed.html","28a0f56a6a7ce527086e5e2fe4c247b4"],["linux/shell-command-tar.html","20addd99b5e51be50c6d6430aef9e967"],["linux/shell-command-top.html","75484261eea77a7eccd941c07e8bce67"],["linux/shell-command-touch.html","bbc3486e1a7bd7588f2232e3f2d10e9e"],["linux/shell-command-which.html","31063f4a674fc9afa778ec0f4c2e2931"],["linux/ubuntu-user-add-delete.html","3de5b9b6381b464db3db88fda6d1c432"],["mongodb/mongodb-collection-aggregation-introduction.html","ec69eeb3ee25e4f0157211e1df69f8a3"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f9ea70f1af4988475f7080695f40ffe7"],["mongodb/mongodb-collection-create.html","afd0c9ec81a7bae3d5b068d60705b2e6"],["mongodb/mongodb-collection-delete.html","9b538585167df3d1e646c8a207464432"],["mongodb/mongodb-collection-find-1.html","f9cb709e5589b97fb39f5fc27bd4a99e"],["mongodb/mongodb-collection-find-projection-operator.html","b3207fae1ab407eb379ba6954ead9bc6"],["mongodb/mongodb-collection-insert-1.html","97188cf0332a2e8dab2e7c59d5797d35"],["mongodb/mongodb-database-create.html","511104810ea9bc0ea9d5d57cedfbf297"],["mongodb/mongodb-java-driver.html","4e71686e94510476cb9d80f04304fcf8"],["mongodb/mongodb-schema-design-note.html","8562b0de8a4442dfd18493a18a8af375"],["mongodb/mongodb-study-note-1.html","72643ed4903ff251b9e8dac629502320"],["mongodb/mongodb-study-note-2.html","06162e5d03691f3ab19e842170a363ba"],["mongodb/mongodb-study-note-3.html","47d2fc60e1267b79987f6c2ec0cda624"],["mysql/mysql-ddl-handy-book.html","79b2bd8eb6ce61441df643badf409dc1"],["page/2/index.html","fd13da9a8b850a15cdc11e68f2d6ae7e"],["page/3/index.html","ded4697e73ed8a5a2aa0db546ac31cf2"],["page/4/index.html","fb7bc87e985fe471d17cbc22895c12eb"],["photos/index.html","7833952439b0789a7f4ac61fa9e69134"],["python/upgrade-python-under-ubuntu1604.html","3e180c24359dbbc106b3affdaae533d7"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","4665611d21f0064f0075c4644306c829"],["slides/index.html","46615c762620e00010d4e95ac2793b26"],["tags/Autowired/index.html","7587d390ad34b04b7a5f2c7f56fb83e0"],["tags/Base48/index.html","62025d21b98631d1b938d1fbc2bc3ca8"],["tags/CSS/index.html","cd4dee76946f85ee204da0f32a989666"],["tags/DETACHED-HEAD/index.html","88ccb2534d4a29a565ad5054981b26a3"],["tags/Git-Flow/index.html","6249f64edd86d8f223c8272af31d3ca1"],["tags/Git/index.html","3615510dc67419b5fe2aa40b8d499da6"],["tags/JS/index.html","28892f0068d36d342f76c41e93e4d508"],["tags/Java/index.html","7877095ca9d727fc8b545d2733394d9c"],["tags/JavaScript/index.html","ff5e8b2dbe4054bb38e8a715947e64e1"],["tags/KVC/index.html","83f2a13ec7242631b6989ff0a32bd998"],["tags/Linux/index.html","95f05db1dbe7f59b60a23f9ece48d88f"],["tags/M/index.html","1b5b6f12acaee5694e776b7d7e7a4ae6"],["tags/MongoDB/index.html","64518be79f5a789bd8ac049497378de5"],["tags/MySQL/index.html","3dee0e469759405bf1740e6c22202b95"],["tags/NAT/index.html","0749dba9cb39a14bec83a5021b5757c9"],["tags/NPM/index.html","545415f49e7222adb6c7c265d57d228b"],["tags/OC/index.html","0fa02e16603858a25f48558e4df00d15"],["tags/Python/index.html","6e57884093fdfab69e3fe1f4a5f35731"],["tags/ReactiveCocoa/index.html","ee1c4d949ad07965d5540583dfad3796"],["tags/ReactiveObjC/index.html","9e32628e6b131c1f0699862f07471b25"],["tags/Repository-not-found/index.html","86c75add3829f71d34041d124b5fa2ae"],["tags/SASS/index.html","8edef0c6292ef00e1f438718f645e127"],["tags/SprintMVC/index.html","0dc95057b13ab0ea723f851b9ea6a7bc"],["tags/Style/index.html","0cefea6e1dc8f5f73166f726af77b527"],["tags/Ubuntu16-04/index.html","14c714f69ab7e894fd188b3bcd5e0fc4"],["tags/Vue/index.html","021b6e90edeaf6724a8e1af06bc472de"],["tags/X-Frame-Options/index.html","d00aada0e0555a98e59b08560a92d70e"],["tags/aggregate/index.html","674bc6033dd6098f46b7e7267876ed28"],["tags/alter/index.html","5c13f5dc75625e0e51e984f1cca25230"],["tags/change/index.html","592054c7b059589ada388958b5029f99"],["tags/checkout/index.html","adb2f74b2bbc0ec169cf261672f27e34"],["tags/collection/index.html","423c769080a6c16fb905d04d548cee4a"],["tags/component/index.html","db02837082824bf77ea084fdeaa839cd"],["tags/computed/index.html","580f49bc5ca0e819f64ac2076a863536"],["tags/create/index.html","fb5742c7d959fe312e4eb5b438c7368b"],["tags/database/index.html","5757ed8fac09626c17718a0cdf910983"],["tags/df/index.html","c24104b326f640fd265ba7c880ec206c"],["tags/diff/index.html","8c351e84c688d3678abe395efcb02746"],["tags/driver/index.html","8741437d65bf10707716eac3f8110a61"],["tags/du/index.html","eb711f209a4c5d8afbe840ddd49abb85"],["tags/fast-forward/index.html","c83a9cd5eff60bbceafb789d21d7edcc"],["tags/ff/index.html","3ce7a35ce817fa71b913ec1ee4c5055f"],["tags/font-size/index.html","020ebd0f575556b4d959a02fdd9ba801"],["tags/font/index.html","f76b7d4b6ba970ebb08de30f34003baf"],["tags/git-branch/index.html","c34813d9b8d1987a7ded4b7abd2a17e8"],["tags/git-merge/index.html","815ef75ff098adf574ef2c3ffe511a55"],["tags/git-pull/index.html","f38418cad787630605570ba8fa0b217e"],["tags/git-reflog/index.html","b633a73910dca577a162d53bb303d4d5"],["tags/git-reset/index.html","69a314cc96f8146a2c1b46f8643bf6b6"],["tags/git-revert/index.html","4de5b543e13c2b56ceb741b560b47477"],["tags/git-tag/index.html","24c0502da46d8f5bf8adcdea5afd603d"],["tags/index.html","763c4c570d2bb3408537926ce4c19c56"],["tags/modify/index.html","71dfcaf243c87bf28dbad38a426a7ed5"],["tags/no-ff/index.html","532dff371835f0c153117c16e313910e"],["tags/rewrite/index.html","19c462a3f2c8b7eeff84fecd8544b94b"],["tags/schema/index.html","4c77dcde2a2865b09d5d69c927896e39"],["tags/shell/index.html","7a46a0375334f8ea2c8f107af6684f8e"],["tags/shiro/index.html","b446ef25e6f0723941b303778cf1154e"],["tags/synchronized/index.html","8eb5525d92c420ba7283f762c5a60d21"],["tags/this/index.html","10acf06300834655c4003d71608e0b0e"],["tags/tomcat/index.html","83d59052c465c21f3513cf958fc88803"],["tags/true-merge/index.html","ccf46b45626b8e0654730b051bd99442"],["tags/url/index.html","641faa240e127183fb7dfdc2cece0419"],["tags/windows/index.html","15c47dbd3b047fee18bf9f4ff018f479"],["tags/一棵开花的树/index.html","00ca6d0185ff1da8e7785147cb85f386"],["tags/介绍/index.html","8db18d8cc5d30741d4fa6aa893d67235"],["tags/以太坊/index.html","dd1615ff252f5ae8554d455cdcedb048"],["tags/依赖包/index.html","fd37195013f2aa56f90c5a4b49538986"],["tags/修改/index.html","0a3f0e21909c15944cc541021f3420f0"],["tags/冲突/index.html","6820dc938632a94c387a484b34a513ec"],["tags/分支/index.html","23a90120001a6bfe4b6022912d733aba"],["tags/创建/index.html","e4f18e7ffd2da4817daae85b843d5335"],["tags/创建数据库/index.html","3abe1d66c940154c0aaeedf02ea4830c"],["tags/区块链/index.html","195235d1dc4011dfa8fa652f73fd111b"],["tags/升级/index.html","b00a9f77d8339d919eff282232c6fb3b"],["tags/存在/index.html","3205c17270e4efa20e3d7f0ef0fb3cb0"],["tags/学习笔记/index.html","5ce71e2bf3b4ac32fd9bc005394d6faa"],["tags/实例/index.html","3fc73b2fc6bf38184bd9d9c8cb712619"],["tags/工作流/index.html","2563b8eb747ec37a8056ccc4e8251d20"],["tags/席慕蓉/index.html","5bbfab3ef1217caf23ee0b1b27ac28f5"],["tags/微信/index.html","cec37a4ddf6e34dfbac16f3d87d278d4"],["tags/插入/index.html","7df4171020b6da4a2f794df58d000f98"],["tags/数据存储/index.html","a3a9ba157c125e8a51323ecda0390dcf"],["tags/数据库/index.html","2f125ddabda98c0f7783c237facb3d29"],["tags/数据集合/index.html","a4e804c9524be76ab7a5f71517c8bc32"],["tags/文档/index.html","e8f38fcd55f4a039b176a0f2a845420b"],["tags/文档流/index.html","582a47ed36dab53a7767a648f424a06e"],["tags/智能合约/index.html","25833d29978e706780e8641ecb857f5b"],["tags/标签/index.html","74cdecae7723836098ac61a926a0b89b"],["tags/模板语法/index.html","6ff86ded7fb0eac3d4b5fd1597c1fc53"],["tags/比特币/index.html","e01080ea01d2b29520cfbbdc629b3ca3"],["tags/波浪字符/index.html","ed8107d1c4e1eff53f43f4e603055953"],["tags/用法/index.html","9a1699cf3281e3e2c93fc0de336616e3"],["tags/穿透/index.html","7bdab7877374ebe622cc1fde66e90d94"],["tags/笔记/index.html","b9dfe110f2344e8920cd09162b6220ca"],["tags/符号/index.html","990221af10fd2f107669fc1df6d86dec"],["tags/组件基础/index.html","405066a0db5074aacd58d0503914cbcd"],["tags/绑定/index.html","82232b1eaf1eb61fb3ceefdd0f320294"],["tags/编程/index.html","7cdda0a8f9616215c76c0be13a24f1ac"],["tags/聚合/index.html","880c393086df70923f84480a485792d5"],["tags/自定义指令/index.html","20fabc68296e3283a00a7283d787e379"],["tags/计算属性/index.html","0b5db84d08d0db8a4df6eccfe6622e1d"],["tags/远程仓库地址/index.html","de2e6a8048c9f3670ca3ea8919e62a97"],["tags/逻辑操作符/index.html","356632f260b79afe3ad24a0106d050ec"],["tags/部署/index.html","a19f4410e5ec19b5c64d6729c519bcc0"],["tags/难度/index.html","73423407d699ecba0399164c7e8b4510"],["tags/集合/index.html","b0b430440e4078bd32e9aa01c34d3c16"],["tags/集成/index.html","d5ea5bec1bb13b84092d573a628adcde"],["thinking_in_programmer_life/full-stack-programmer.html","0dea8a937341ec3b866b4dc763f5d399"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","8db4125f446fec78444f29a1fd54bf8b"]];
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







