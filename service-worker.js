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

var precacheConfig = [["Kafka/kafka-introduction-note.html","3d6afc417d441abfe821ef550d7ce6f3"],["Kafka/kafka-storage-principle.html","58491a20d07dd0be18591f1559ecf274"],["about/index.html","f7c8e82f1f21b4cdd71857d1730cdc9e"],["archives/2018/06/index.html","014048638ff21380cba9664e2ea73319"],["archives/2018/07/index.html","bc9433bddc6b072cb7a75370fce79f1d"],["archives/2018/08/index.html","48429a0d3f14d93754c3a2f22ad657e2"],["archives/2018/09/index.html","57ecd20c5d27d2d4f08a008500bb35a0"],["archives/2018/10/index.html","87e12903d13c01eaaec73fbdd8992af9"],["archives/2018/11/index.html","cf2d4a6f55e240d8587e0936886e6a7f"],["archives/2018/12/index.html","18293a85f4218d36e71790335a41f8d4"],["archives/2018/index.html","2668e01ea473f16269f773d4552d2949"],["archives/2018/page/2/index.html","f2378fbf6b8994725b96cd24d9968bc7"],["archives/2019/01/index.html","24aba76c6974d2efb13c8d7ec42860a4"],["archives/2019/02/index.html","ee5db02c4183ec41cc2e40a06c0965c7"],["archives/2019/04/index.html","a083282150b03a282ad310bf03e0680d"],["archives/2019/05/index.html","50c89d38f039c9e58e9feb83393087b8"],["archives/2019/06/index.html","21c37b495c3f747ce5346f1f4f8b3e3a"],["archives/2019/07/index.html","ae1958a196f3b695dd437eb9592e118c"],["archives/2019/08/index.html","4a3c55d56508bfa195cd291823971bfa"],["archives/2019/09/index.html","0f0e0f3cb507203ae41337c25b2d978a"],["archives/2019/index.html","ed90a58c154534da4d09af1260700a8e"],["archives/index.html","b6f8b8ee3e56a49fe17382c799eb701f"],["archives/page/2/index.html","055aba68a1b746ad2bbd055ede1a5e10"],["atom/index.html","d990d102520da85b700f8ab353076f2c"],["blockchain/base64-base58.html","295ce7146e1ff3a1f1471bb373becdcd"],["blockchain/bitcoin-data-storage.html","86ead5a36fab3cdce532458f7a4091d0"],["blockchain/bitcoin-difficulty.html","f0a6caf87bddbb63b2e42f2c07292b79"],["blockchain/block-chain-ethereum-contract-program.html","8bc7be428b9a67f58c8fba4644d7367d"],["blockchain/ethereum-programming-introduction.html","8f34757d66e529b33efbf809eb6a20c8"],["blockchain/ethereum-rationale-introduction.html","a5fb8703c4635d0208c9b352eb4a3ef8"],["books/index.html","e96b6bf1fcf9200eb36130e52deb8114"],["categories/Blockchain/index.html","3abef8fe1f3bcc718a1718775907858f"],["categories/Blockchain/以太坊/index.html","ee844b8f86e32981dd4668aa61a57e47"],["categories/Blockchain/以太坊/智能合约/index.html","022eddaed5fd3f7e459908273d0c5007"],["categories/CSS/index.html","4b52f5271b8c23d67f2aa7e1af4c19b9"],["categories/Design-Pattern/index.html","395cfd62f57415da7ea384faea234237"],["categories/Git/index.html","5caf03228e44f2748c55b97516d911cf"],["categories/Java/index.html","a56f6ac4e759899248ba786a836d40b1"],["categories/JavaScript/NPM/index.html","6ff5498fb32aa7d5a4d50968eb21dab7"],["categories/JavaScript/Vue/index.html","d85bc32dddca67f160b950c7d646b59d"],["categories/JavaScript/index.html","84e2fcce64c6fbdafd68c2b2aa332ab5"],["categories/Kafka/index.html","2772e09e221066a76e76c3b7a169d7ac"],["categories/Linux/Shell/index.html","087cd25bca12d16151dc9e34b0cb66fb"],["categories/Linux/Ubuntu/index.html","da3c11e06200fc4aa29ad32ccd4f1f74"],["categories/Linux/index.html","c8085daae015da4a3e7ef0bca28a2b79"],["categories/MongoDB/index.html","9d0c3fdcf82aba349ee9a7ad550a7c11"],["categories/MySQL/index.html","7b3a2667d69489b0759a526b87737c65"],["categories/Python/index.html","9fe7f4cde2c77fb9b6022bb746671f57"],["categories/iOS/index.html","8e0c23d42f45eeb0396276378eb6c1cd"],["categories/index.html","ac7bfbea28d057fe1f438e0d1b1b0cb7"],["categories/微信/index.html","60a638c8556ae8a94e6ffe815f74e4ca"],["categories/杂记/index.html","f7f77939b848c4341d987292e535c7ce"],["categories/程序人生/index.html","41eb31b033e97a0e5768a25cace46326"],["categories/计划/index.html","702dc5e2c64ffc48f9c82bc5187adbb3"],["css/css-font-note.html","e7c2352c490e435ad6324293c3f88632"],["css/css-normal-flow.html","82efa091653a64e3737d30f73af8dbc0"],["css/css-sass-introduction.html","2e434326bc0744d2cf6806cea358e02d"],["css/main.css","6a6ee025930680f922374a768206ed8d"],["design-pattern/chain-of-responsibility.html","0d4f13c31f71a0f895c2f7de3dd7bbe1"],["design-pattern/delegate-and-proxy.html","74869211d8366fc2e4bca2af4e830b0a"],["drafts/configure-multiple-vue-project-with-nginx.html","b4bed2fba14b71c82c19d6748d2e65ac"],["drafts/iframe.html","1b3ef40b4aa4047098186b716784d6be"],["drafts/record-re-install-mac-os-10-12-6.html","f6e454f564ce3360fe594db94618a8b2"],["essay/note-ximurong-tree.html","4c7dfce86d366d8b478f7f18e34f0c70"],["git/git-DETACHED-HEAD.html","bbc6bee2651dc5d02fb8a8cddd1a461e"],["git/git-branch.html","8a384dc3bc1ecd392c546575b304016d"],["git/git-change-server-password.html","d98555d74a56f02b5c0b9789cf4621ce"],["git/git-checkout-1.html","3f3e1df996520b9ffc4c845b3a7440a2"],["git/git-checkout-2.html","2ec6fd137fc3beec53a1d9f22ae2db1f"],["git/git-diff-m-symbol.html","ed490987c1520f4b024b95b35f45c925"],["git/git-git-flow.html","83a22dac6419b84f78f2a9c61da06ce2"],["git/git-git-merge-ff-no-ff.html","209f9f3194a0d0c2848d0e4b202c475e"],["git/git-git-merge-true-merge.html","6a9777665c54d6ae7c84b65bba9ff26d"],["git/git-gitlab-flow.html","58a5b09eb4ee8b78f4add1a9e4b54580"],["git/git-index.html","2fdaa4812483bc86f8d5de2c3fd982a4"],["git/git-merge-choose-one-side-code.html","9ac240f8d5972388121071a6fa5f82ec"],["git/git-merge-exist-conflict.html","6c854f486b1e6ad3b71e643460172cbf"],["git/git-pull-1.html","e604323f82d13ea6d2a8a13889d669c9"],["git/git-reflog.html","7301e7e84aaa0a97ff542cf6aa724908"],["git/git-remote-set-url.html","c06993bf90a9a66391fc0b99283d5c6c"],["git/git-reset.html","7857ea3038cf747bdadc04feab1854fd"],["git/git-rev-parse.html","07b6be8108b7259c8db4ab1cee27f95c"],["git/git-revert.html","5cab23713e274a45dca1f29fe29e4b6a"],["git/git-tag.html","efc2e5f81a28d934cdcb3f14c19c79a8"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","9661e030569084a0044738298d176c4b"],["ios/ios-oc-kvc-1.html","f7dc85e4f55761f82189a7ea221fa3de"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","dc43cbd89b467094d6bc8d178c0ec2fa"],["ios/ios-themes.html","7255826f25eab441e0d4f121e807a6af"],["java/java-annotation-request-response.html","54bdd01bb3693ffda61ae926927e2cdd"],["java/java-array-and-container-note.html","dcbff4aafd8d5ffbbce64f8138145b7e"],["java/java-deploy-resource-folder.html","74ba3edbb0253ff23be5420d96e1bc75"],["java/java-jps-note.html","eec773215f38f51e466c0da29ac9dff6"],["java/java-pojo-bean-note.html","a04d228a7b544ae58baec896cea46e23"],["java/java-shiro-note.html","21283686b7708ab6d696e517f80f0a44"],["java/java-shiro-springmvc-integration.html","b67d354ef784571697ee90ff19e9d6e0"],["java/java-spring-autowired.html","04970d72a3d23fcd1ce68db330b0399c"],["java/java-spring-configuration-bean.html","a38ce3aa77ffb448b0bbf869f38b5f8c"],["java/java-spring-restcontroller-note.html","f3efc6a50580ecdf2010bcdf59612989"],["java/java-springmvc-X-Frame-Options.html","198b2fd0967ba7d774e9aedc04c527c5"],["java/java-synchronized-note.html","9bc7ee6f77f0a7cb7efc1c0245d20c57"],["java/java-value-pass.html","6ca4138d455cd2bff569f0a3a7b53924"],["java/java-vo-dto-pojo.html","f940248331f8747d99a4808e8b8e7523"],["java/url-rewrite.html","8b7e16a5bec151b9da9ac6837224f135"],["js/js-logical-operator.html","f548ca56361d864bd96831d3382ad29c"],["js/js-npm-symbol-caret.html","e0e7d588a97b74a23ab86dd56f95947d"],["js/js-npm-symbol-tilde.html","884797fd52e2b678648812d4859b83a1"],["js/js-this.html","349cee62f56dc7eed5cbd431dd0c2f01"],["js/js-vue-note-components.html","89cbba08ef90765fe3ee1c9fadbd1899"],["js/js-vue-note-computed.html","4e7a472e837f4d90bcf4d66598376a95"],["js/js-vue-note-css-style-binding.html","fd3584809c05f0325d2f3e8c05cea083"],["js/js-vue-note-directive.html","f11d0ab129609a0a900365f776f713fd"],["js/js-vue-note-instance.html","20d837f1f85e255fe7842251c48980f1"],["js/js-vue-note-introduction.html","c5d92e260508e9ffe5ea88b8f70beb8a"],["js/js-vue-note-syntax.html","e348a83fbcfebd1316cd90afd7421e12"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","df8a8652c5c25f80e178ec140e65b44d"],["linux/make-vs-cmake.html","17bab3a34300ae5d4f2b8dc9546bc4f3"],["linux/shell-command-awk.html","86e9f69a1736b35ecd26595c911666a5"],["linux/shell-command-df.html","7f1e6830e3c3cfb31fb998d8b0b5c73d"],["linux/shell-command-du.html","226a31e2005f161ba14181ee05aa71f6"],["linux/shell-command-netstat.html","2dec312338718bb344dbca8fc62a601d"],["linux/shell-command-sed.html","efc2908530463e04cc68f16657d9c769"],["linux/shell-command-tar.html","f96fa6b5456def65db1cb92e65ec5a15"],["linux/shell-command-top.html","8135b91744a20d73800fa79d57b53f9f"],["linux/shell-command-touch.html","5ab2023f17d33f63e6ff8cc05f6a60c4"],["linux/shell-command-which.html","d180d330f6e8421dd78479c0fd303559"],["linux/ubuntu-user-add-delete.html","101f1ba1a67b99db6a343be2cc352e51"],["mongodb/mongodb-collection-aggregation-introduction.html","e90233fc6f47f17347c25aa01e22fa88"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","7a1fbf318701ea7567f2184e741a10b7"],["mongodb/mongodb-collection-create.html","c20b3562b4fecac7df0a5aa9c47ea4c9"],["mongodb/mongodb-collection-delete.html","f341605944a2cc6ca5fe4d6eb2801dfb"],["mongodb/mongodb-collection-find-1.html","8c5a76dabedaaedf6d79e976d58bcdf4"],["mongodb/mongodb-collection-find-projection-operator.html","868e1e049513160e3155e9222b2f9a5a"],["mongodb/mongodb-collection-insert-1.html","86e34261bf535731e2a517251bd787c6"],["mongodb/mongodb-database-create.html","aba0dd1fc18d282958bb64a8e14980d9"],["mongodb/mongodb-java-driver.html","1766fe60d676bced66b6248009b76159"],["mongodb/mongodb-schema-design-note.html","ebc784f9adb6e042730f237b85ea48ff"],["mongodb/mongodb-study-note-1.html","3362a11fb070646f99470c37bf701b9f"],["mongodb/mongodb-study-note-2.html","5870589c9f94e12f3601fb75ff46a847"],["mongodb/mongodb-study-note-3.html","255592c02001f24414d401407e609052"],["mysql/mysql-ddl-handy-book.html","cbd0b30a047649ac758f2d10d30d66da"],["page/2/index.html","75d11f133e3d9a80b91f277cbb143065"],["page/3/index.html","aaa86900e10835482525dfc6b7ca89d4"],["page/4/index.html","c3042a3ef3a31d4d95fb753c228e9263"],["page/5/index.html","85cf206534ffea828ee715e4d7d23fd9"],["photos/index.html","983055235cbd7ce65b7089249e619f98"],["python/python-args-kwargs.html","8c5a519e0e17b67cdd9bde7ef2efd16e"],["python/upgrade-python-under-ubuntu1604.html","dc26c2547fbc36911c3ab32f41e34952"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","b88246c8fd28830b06c5a67e0b64298e"],["slides/index.html","291d08d8e26216dcfb44a52f42029f17"],["tags/Autowired/index.html","db916282ef12d776fccfab12000f0740"],["tags/Base48/index.html","0cf5cf00863fafeafefaa0ae45ee0b9d"],["tags/Beans/index.html","d36482d9c290a7012c0ccec41292b75e"],["tags/CSS/index.html","268abb6fe7cb9247fcdd88ea7bc0b461"],["tags/DETACHED-HEAD/index.html","0a841faf7e73d99b64e0b41735aa4a30"],["tags/DTO/index.html","0e493ddd02028ff6499514e929f825c3"],["tags/Git-Flow/index.html","7115a4b469a9bfe9b020d236626b87e4"],["tags/Git/index.html","491b50c54f68b702a52a40bad28ed635"],["tags/JS/index.html","b4761750125f3da0e4835581c9adcfd2"],["tags/Java/index.html","77fca726d3238030a6e0edc492a74e50"],["tags/JavaScript/index.html","7b84cf9b6c70979813031542d237cad7"],["tags/KVC/index.html","4a2480ac9a863a9803f232560b13a5bd"],["tags/Kafka/index.html","1a380416fa27846fa0a1f572761af896"],["tags/Linux/index.html","61bc7f6f8b0304e1191ad186beb510b1"],["tags/M/index.html","3af675519faff4acb16ac18305ba084a"],["tags/MongoDB/index.html","21aed5b3ae98bb05d483783d69ac4798"],["tags/MySQL/index.html","74d05f327a1b120d88045182a42248e9"],["tags/NAT/index.html","5777cf8d49404f77e5255e5860922c43"],["tags/NPM/index.html","4b49146103cdf932d7bc07320b6b0072"],["tags/OC/index.html","cb1320f75dd32391d130a34802c3cea1"],["tags/POJO/index.html","6dca09ade4f3224abe44d61fc08edd96"],["tags/Python/index.html","772aa4ac4b0b8de221052fd3d7e83497"],["tags/ReactiveCocoa/index.html","37dbd56f5d62db33b898207ce28795d9"],["tags/ReactiveObjC/index.html","f7963b95a6f373c28bf668f55d549a43"],["tags/Repository-not-found/index.html","f803b1ab05745bb81986aed6c6798c81"],["tags/RequestBody/index.html","fdca5fdbeccfd92da195d4f2ba1dd733"],["tags/ResponseBody/index.html","51d50c681b3a492d82fa8ce8f7f2c2ff"],["tags/RestControlle/index.html","02d6ae1d9331ce7d49dfa0332f817123"],["tags/SASS/index.html","37b3b96d2b2093e27e29fb7bf27792a2"],["tags/Shiro/index.html","44519a813271c9e3b0de9b40f80eaf97"],["tags/Spring/index.html","76e97349d3a8d483101a2e8b83c3b5db"],["tags/SpringMVC/index.html","a20a89b7559fb4b839943a2b246f25db"],["tags/SprintMVC/index.html","aa4c595cfd0bef51fb7ef5ca4f20fb37"],["tags/Style/index.html","25249e3c83be4c000075f608ab1352a3"],["tags/Ubuntu16-04/index.html","487f4b0c81997d82657a398ebc813729"],["tags/VO/index.html","cae1aec55ea1382eab07c8283e5b5885"],["tags/Vue/index.html","1f5470496bdf40bd45c169f31e6b675b"],["tags/Workflow/index.html","aabde958709df8300da7bf472986f0d7"],["tags/X-Frame-Options/index.html","4746cb74d3cb4eb893f6aae5d2296f0e"],["tags/aggregate/index.html","ddda4d9f2a355762386c6d7dbb5f6a02"],["tags/alter/index.html","be92676e6f1f9777e89251b11bd65d61"],["tags/annotation/index.html","84993885fb97e319fb23a4c708efda00"],["tags/args/index.html","a8c80803be81cca84acfba8d3c3f9d28"],["tags/change/index.html","3126f1ac29f1db2e4ef82aa6025d6c9c"],["tags/checkout/index.html","f6a80f8d8fd6d02c838efb35263639c4"],["tags/cmake/index.html","34b388299750fb26e6e5516a7e1df101"],["tags/collection/index.html","9907adb89ca58a9d8fb59a18a54c314d"],["tags/component/index.html","3b8f6780412b79b4b811177bd94d22df"],["tags/computed/index.html","84c5ae26e46971517a2b5f090b2a246e"],["tags/create/index.html","9f20e015effb12f42eef1e585be7c4d2"],["tags/database/index.html","0863f0b25b51df26a342d01287d63b36"],["tags/df/index.html","484aa3e1632225ed70c7386127794c65"],["tags/diff/index.html","14a49ab3e221ba47d95e47e25c18dd03"],["tags/driver/index.html","c1068c6c21950eba3b469db2daabfdec"],["tags/du/index.html","8aa227fa7d9a9a1c390d23200610dc13"],["tags/fast-forward/index.html","71c5b42bba17b14407695b5344d452c6"],["tags/ff/index.html","5f346b0e2655373a4d4de3cc0ece95f9"],["tags/font-size/index.html","78da7ece36dd6a4efc8ed7edd15f151b"],["tags/font/index.html","763b26806119987b48fa2fa63dade62c"],["tags/git-branch/index.html","1807bcfc9247f5957a7afe1e86358e00"],["tags/git-index/index.html","f2229207583974cca6197409d65a9440"],["tags/git-merge/index.html","7b23ffc4ee7e04b84c0bb8e7e8b446ff"],["tags/git-pull/index.html","ca8571d3c5e3fafc94982e82af9a9ef1"],["tags/git-reflog/index.html","2b1cd058ae600ebed726ca6ec72411c4"],["tags/git-reset/index.html","669657b477c5f0a9a7d524ffa8fe77c0"],["tags/git-rev-parse/index.html","150f7609addbdb7079df0bf08445fd3c"],["tags/git-revert/index.html","526924854477b593b777b5da7d24b91f"],["tags/git-tag/index.html","8f295f5541663c381d4335de3225f52e"],["tags/iOS/index.html","5dd9e9b6b54b27d8ee2eb7ea1ef95edd"],["tags/index.html","f7752c04ee6d15f44ed66c49ed794b3a"],["tags/jps/index.html","d8f20fda7d597454989a5844a869a907"],["tags/kwargs/index.html","93c1c97bb30441e361783dfa6a8d6f54"],["tags/mac/index.html","f040a966b43d86977d2a6bb508726536"],["tags/make/index.html","b0ec0183f294e71afeae4faf53d82f61"],["tags/modify/index.html","4701aeed903780a4b7c36961ef16145b"],["tags/no-ff/index.html","a157d366a9b6e15bab1c7aa117a53c14"],["tags/rewrite/index.html","11b4a96ecbce38c90522c0051de1e86e"],["tags/schema/index.html","5d10192f5da68ff260612b8f2cda62f9"],["tags/shell/index.html","94064a8002d8870cdc95a5454d9dc5df"],["tags/synchronized/index.html","f0fee233fed6f1739b4f3eb5fcbeec1d"],["tags/this/index.html","6d8c2621b27c66b279dff34ccd3d0f01"],["tags/tomcat/index.html","266a4ffede042b23f7b1c574860c5e75"],["tags/true-merge/index.html","68c6e017a3a8d0917cee7ec01c237753"],["tags/url/index.html","7c6fd7f3221db8b650c42092c2d77b82"],["tags/windows/index.html","a1fa9953bc90d32f63e55a0307ddccc3"],["tags/一棵开花的树/index.html","7fa64e782a4e6441b42e6fb6d2aa8f99"],["tags/主题/index.html","9d1c918f5e79459e0d7b8156d6b18ba7"],["tags/介绍/index.html","1c1ba21d6904ac897fa2d2196ddb3131"],["tags/代理/index.html","ea22784ba7a2bcc264bbc14c34560d39"],["tags/以太坊/index.html","6f668947536b1cc7c01fef97ef0d0e5f"],["tags/依赖包/index.html","4cb4e149d95638b83b6b3a3a9f467ede"],["tags/修改/index.html","f2777f38ad3c085bbaebc58459f46951"],["tags/值传递/index.html","571ffde0669536a4a2a77d3d4a606f8f"],["tags/冲突/index.html","b7320233244f2af6c4b58723a74c8080"],["tags/分支/index.html","6534c9fd8c5b8a7e40ccf916521d37fd"],["tags/创建/index.html","11ee1bdfc061d704e956375a3cc4e23b"],["tags/创建数据库/index.html","194933cc06cd78b343294b938df9268b"],["tags/区块链/index.html","30bf4716933be8129313427a1e83b143"],["tags/升级/index.html","1c42c9d20e3180c075ea940ad00ba18e"],["tags/参数/index.html","2abef8a19a2ac0d5bd77e7c307fe2964"],["tags/委托/index.html","f397d050117e05a7559874111b265096"],["tags/存储/index.html","84a4acf6af076deb1f34bf1f52e7a026"],["tags/存在/index.html","015bfb4a76541ad0c6fd42a075a80e41"],["tags/学习笔记/index.html","8f5c5e8c3699ad196282e93f2a20ad1a"],["tags/实例/index.html","77b58b1610be8b8ef3af83eab4a872f0"],["tags/容器/index.html","c0e58dd138421bf2c7d136686e1694c9"],["tags/工作流/index.html","7616381d643225891124ae2f3549ea6a"],["tags/工具/index.html","d84407949acdc41dd07d53d9146d0c1e"],["tags/席慕蓉/index.html","edfe7d6d18e989b4b0b8c02e4a4969f1"],["tags/微信/index.html","c8bba1f33bb09de7e592f1d0b1214b5a"],["tags/插入/index.html","c30ecdd1a128306ef6f90b781a9dc512"],["tags/数据存储/index.html","8bc552395a6eca50a120f53eb1cf5d0d"],["tags/数据库/index.html","b8ec78e16c0868a85e951291697035b6"],["tags/数据集合/index.html","3f567e2ee0fe33b497d60d673417e1a8"],["tags/数组/index.html","d14ce3de78eca33a0f16c564c0103fc0"],["tags/文档/index.html","2c2d85f00da5b9d4ab747b07e6567b17"],["tags/文档流/index.html","c2ffbe0a4def9c8f8e50e84104869012"],["tags/智能合约/index.html","b8201c06f6aa34e1c03403368691dd17"],["tags/标签/index.html","5d3a0c55d6229e3fdf9a6a1eb19da857"],["tags/模板语法/index.html","ff93dc784615f7fe0097e596105fc824"],["tags/比特币/index.html","2e32e59ab724cd3f73ae45c869d01d8f"],["tags/波浪字符/index.html","f2e811c79743d960f32672ac1fd103a4"],["tags/注解/index.html","6ca1e3bba9a8b10c563719fcf91faf07"],["tags/用法/index.html","b778fade7ffbe04da0a8f2b41e3ec56b"],["tags/穿透/index.html","82ce3667c09af05101af8392e938c5b4"],["tags/端口占用/index.html","fdaf7222814030cd467b97b99ce9bfea"],["tags/笔记/index.html","fe0bec58c499f7c87623736ae555c93f"],["tags/符号/index.html","59402875082607e7bcc9517533114bf5"],["tags/组件基础/index.html","2fbc9009fff6378a70b99f62688d33f0"],["tags/绑定/index.html","234b620225ab89e959595034319d194f"],["tags/编程/index.html","9393a55f4500e713134d35fa057e40cb"],["tags/职责链模式/index.html","02a2649624095095d3fc29640d6b739a"],["tags/聚合/index.html","4fefee9d0caadf04b405bb636ca7b899"],["tags/自定义指令/index.html","3714ce949e3e9fba36d05bccb026fdbe"],["tags/计算属性/index.html","adf140fc39f7d006924bd96e7062a532"],["tags/设计模式/index.html","61abd8cdfe0d68c9e0ec68ee176cd1be"],["tags/进程/index.html","a51d1ecf7594dd67bc7e05d85cec146f"],["tags/远程仓库地址/index.html","ccc94c3d4218cc30ca0cc5f2ee132105"],["tags/逻辑操作符/index.html","63ec5f1950f1496d32ea21da6e6d963a"],["tags/部署/index.html","ab518eec39766624f4bbbcbf9667ab25"],["tags/难度/index.html","15e5b53abd9d965e32f1767d25fbc649"],["tags/集合/index.html","9f6e357287be1c640383bd88e88d9996"],["thinking_in_programmer_life/full-stack-programmer.html","9ee6159708c63bd71fb0035e893af1ed"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","f56a831826e58fba2dfe3e4b66048f90"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







