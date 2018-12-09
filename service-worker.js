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

var precacheConfig = [["about/index.html","49bb1c729d1fd69e5f4dc7545ba7145a"],["archives/2018/06/index.html","655c9a6d6c39eee2e86d85cadeaf62c6"],["archives/2018/07/index.html","b49369a677a6b308f3a00d9fddde922f"],["archives/2018/08/index.html","07541e613e39ab4deed4333e1598afce"],["archives/2018/09/index.html","36d81f51d2388c35a0ad3366d5fa7eb6"],["archives/2018/10/index.html","adfd5d225616b9ec2e94d440eb4bbeb0"],["archives/2018/11/index.html","a7c5cfc1223f88beb6941bcd953d9020"],["archives/2018/12/index.html","0939b9e6b488e923c6ea79965a4d5bdb"],["archives/2018/index.html","189d464f7a7aa06f681efe443e6e907d"],["archives/2018/page/2/index.html","e2dc558120266286270e0e00503e8dd1"],["archives/index.html","50d8d2661d181bb3a2317c473091430b"],["archives/page/2/index.html","fe2fa817e0e390ddffc13c672bb194c5"],["atom/index.html","75becf5b4c67e29b1d07fa4e2c9c36a0"],["blockchain/base64-base58.html","f0d3a0a68596ba8f4c53188b28fa7d27"],["blockchain/bitcoin-data-storage.html","3bcf7cb19f43d171407bc6d73bbb1ca2"],["blockchain/bitcoin-difficulty.html","13e8b0e57c68be24d0279de7eb5cdecd"],["blockchain/block-chain-ethereum-contract-program.html","dec6a4ed129142acf3aa341fd597ffac"],["blockchain/ethereum-programming-introduction.html","7f95950f0bf9e353a1b4a4966ce7299d"],["blockchain/ethereum-rationale-introduction.html","80b1bd1bc21079b7284b33e6b5a349ca"],["books/index.html","d4cad2fb6160a69da3ca67b2548292a3"],["categories/Blockchain/index.html","2c910422dfbd1e1ce1ab72f2c789b8a5"],["categories/Blockchain/以太坊/index.html","ac0d2d300df6619ab05d638b4829e8b3"],["categories/Blockchain/以太坊/智能合约/index.html","6efb690c3a3be88f602821c3505a386c"],["categories/CSS/index.html","1d842917b18d41158a6c38b953a978a0"],["categories/Git/index.html","8c7afc9f89b76c429aeb138e866e2026"],["categories/Java/index.html","7316828fd4bd6c97715f0674584a9b23"],["categories/JavaScript/NPM/index.html","068c6bbc64219ec67f280d8aeb530ee5"],["categories/JavaScript/Vue/index.html","04d789ef5dc7a15b4990706a69a84ef7"],["categories/JavaScript/index.html","9e990469854c8ddbb1e9ccc874241667"],["categories/Linux/Shell/index.html","9692982c9edb49afb3400fd65c45608c"],["categories/Linux/Ubuntu/index.html","a05e8020c234d07d3e22b27961146223"],["categories/Linux/index.html","21a9906eb2e37e41bf23335b0c32cefd"],["categories/MongoDB/index.html","6c0e6c70e374111f3f6d7f40ea4437b6"],["categories/MySQL/index.html","8005e35798e2e3def7da117826e1d3b4"],["categories/Python/index.html","1db5dacc9c6058cad82dd0f4c207ad63"],["categories/iOS/index.html","5e6a86ffcca60cc203b403c302a673eb"],["categories/index.html","a2a85144e87825179e31cdefb7f9f02f"],["categories/杂记/index.html","ebd41dd69b2353d3ee732dcfb47b0798"],["categories/程序人生/index.html","aacd0c5143ecb1b96dfe304b68d7ba7c"],["categories/计划/index.html","861159e44cc65d18b97d884fb2fc8d9f"],["css/css-normal-flow.html","85805f75da0b7a771e4524668772d9a7"],["css/css-sass-introduction.html","4497127e5615609c13eae4bbe04f9603"],["css/main.css","ad2e404fac4dc1a56211ad13456ae4a0"],["drafts/configure-multiple-vue-project-with-nginx.html","906d3a1f4c21861b765b0023a7a55654"],["drafts/iframe.html","9ec3137670bd1b80a66cde11689e483c"],["drafts/record-re-install-mac-os-10-12-6.html","5abc35e8f6643262ae93a029b7545a75"],["essay/note-ximurong-tree.html","0ce1a8361ab27543a78e3d52e78de915"],["git/git-DETACHED-HEAD.html","2fd4945804695a6e0731a10c6edd3ee3"],["git/git-branch.html","f106493cce296e68405285b85f51c644"],["git/git-change-server-password.html","9554c8e960a2ec859d3b63875d28596a"],["git/git-checkout-1.html","38f3fe22c0b66a6f7da7a28825476a5b"],["git/git-checkout-2.html","9fb8ec9848d6f34610fde00cdb1f9d18"],["git/git-diff-m-symbol.html","d5b40bbf7aba8e0e121782017c7114a2"],["git/git-git-flow.html","0d86491e9833f78d6a4e6a3bf8da1b39"],["git/git-git-merge-ff-no-ff.html","44198153091c62399fb34c71bbb4d43a"],["git/git-git-merge-true-merge.html","18c448552ea6ebb46f15d20bee3172ad"],["git/git-merge-choose-one-side-code.html","691947432a0bc14c75e4d358335b386f"],["git/git-merge-exist-conflict.html","309becf6d445fb6f670c1a2c3418f347"],["git/git-pull-1.html","1e2fc3e870fef7bcc3913bc1dc484be4"],["git/git-reflog.html","0f85840e939ad9ce691685a3e0736a94"],["git/git-remote-set-url.html","1941fb8fd119073edbdfbc12a4338a6b"],["git/git-reset.html","03c3f36d41fc843ff1bb7fcdefe557b5"],["git/git-revert.html","884d2c132a1e4a178927374d64ed2165"],["git/git-tag.html","1c539bf04b9ab8624ee89cbde0f46bf2"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4c229f36fd03a1a52c9c8307a3a625bf"],["ios/ios-oc-kvc-1.html","fae3b3fd0030f7f7fd2df3dab92ad372"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","ae9e974c9497278857598ce0455ae858"],["java/java-deploy-resource-folder.html","62f43ff46462b3ae5c1c60ccb2a18c92"],["java/java-shiro-note-2.html","de8700f9982023198c08988db6350a99"],["java/java-shiro-note.html","1cf7ce516a4380d89e173d3751d3456b"],["java/java-springmvc-X-Frame-Options.html","0d29b3aa15b2821c3665c0870142cbb6"],["java/url-rewrite.html","5e8eb82c9beb4690fdd50828dac1543c"],["js/js-logical-operator.html","85842de8619aea8c512ce99bae289fa3"],["js/js-npm-symbol-caret.html","fa826cea820b890369bde828a2f3100b"],["js/js-npm-symbol-tilde.html","ea6600048168e84700f4785e15eaa1d3"],["js/js-this.html","6ac1431e69bb1c99c90e9465b2d28492"],["js/js-vue-note-components.html","25c6ae091b2a29585cc05a5191ca166d"],["js/js-vue-note-computed.html","30ca761f5ac61f26aa846e0e5afe577d"],["js/js-vue-note-css-style-binding.html","f1361844997867d313e720d307e43194"],["js/js-vue-note-directive.html","c777df3eef981a76aa5659f425852118"],["js/js-vue-note-instance.html","cff0400d41ab1418fc2a9f0b138f149c"],["js/js-vue-note-introduction.html","822d8098954895a1529ac2f95bfaefe5"],["js/js-vue-note-syntax.html","e566354f2860d8dc89677466d84ddd54"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","c4c446db5065d572a97307712b47d461"],["linux/shell-command-df.html","1eb9099246da92b1b7c73d4e5bf61607"],["linux/shell-command-du.html","4d720aa21292915a75542bcefefd3cd4"],["linux/shell-command-netstat.html","ad16a729bdd7994fe9f30b1dffb3ef2b"],["linux/shell-command-sed.html","87802843e2b59180d41be009126692b9"],["linux/shell-command-tar.html","03dd9a1133f74923cd22f7a342a09aa4"],["linux/shell-command-top.html","2f0fe33cf970369d3b54b757a1031622"],["linux/shell-command-touch.html","8d567658422b97fc77b4fac0781af31b"],["linux/shell-command-which.html","593a71aa46566d99233373addefc0b6c"],["linux/ubuntu-user-add-delete.html","79bed10f8626c805f7b5d802640cbea9"],["mongodb/mongodb-collection-aggregation-introduction.html","a0ee6640dea60084878e849333beb2a8"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","2c3d7fa9a78fa33e9b6ad7d4ec857c8c"],["mongodb/mongodb-collection-create.html","b5afbf29119c56762b5b2fcca3aa39ff"],["mongodb/mongodb-collection-delete.html","a75fc72838e25e6dd4be484d31ee59ae"],["mongodb/mongodb-collection-find-1.html","66b387ca3f016373b6bdaa65405c56c5"],["mongodb/mongodb-collection-find-projection-operator.html","9e47c1ba650f3edcade37a8c429e4e12"],["mongodb/mongodb-collection-insert-1.html","c76ea01cbb19f3af8fd8b406e65d0134"],["mongodb/mongodb-database-create.html","574a49c8ab21fcbcc225e1206dbd78f3"],["mongodb/mongodb-schema-design-note.html","dfebc9d95bca1a95ddf7db2a3c04dcaa"],["mongodb/mongodb-study-note-1.html","96a44d0ad95e2b35ca0288c52a1a86f0"],["mongodb/mongodb-study-note-2.html","7e4377aa1284e288ab63e6f26daaa9d8"],["mongodb/mongodb-study-note-3.html","c77f128c0f4e6918d4569d4c4a1995d3"],["mysql/mysql-ddl-handy-book.html","b1bbbaebb4bfb12854a634568810a799"],["page/2/index.html","8f6416fc78c2ab9cf24e5422853c6aac"],["page/3/index.html","07c0bb4735076e435f20629eb1934626"],["page/4/index.html","4719dfceb547f4ee7411d83e41fea918"],["photos/index.html","7a55acb56a589548efbe0b1f2b7ea4f0"],["python/upgrade-python-under-ubuntu1604.html","00bf7b55526a53d8715adcdec83bc742"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1312360c057c30223cea9f20bda62b39"],["slides/index.html","de49154393dea4acb73d3e774ce7bfaa"],["tags/Base48/index.html","fb1cf7670027be5e86ad26cc470101b4"],["tags/CSS/index.html","1105bf2c9e4702d30721c086aefd21c3"],["tags/DETACHED-HEAD/index.html","d72fa40b4584670c3c11ad04ef29068a"],["tags/Git-Flow/index.html","f032f95d1716555edd8a846051c8e034"],["tags/Git/index.html","e67df9d6acb871bfed2d01069672494b"],["tags/JS/index.html","029f7cb813af82dc5031970dd17f6a44"],["tags/Java/index.html","cc30606a5541fcd67f58996af0559f31"],["tags/JavaScript/index.html","f43b91b99941d30d12668a1da3cd647c"],["tags/KVC/index.html","66fc6700ab66f76782a421b79f868b65"],["tags/Linux/index.html","038deadafb611225185970d7215a1d3a"],["tags/M/index.html","953e389a442043c749025c73a8469dc1"],["tags/MongoDB/index.html","a907e574c163b98d193b7aa0f9d593df"],["tags/MySQL/index.html","1a71b7607c70260c84b7d6ccfd44c009"],["tags/NPM/index.html","b4ced6adee335e0eac6a8fc75dacba8b"],["tags/OC/index.html","b206304b70c0d84c7e7145a9be3b143d"],["tags/Python/index.html","ea5a26119f00d88e3dde16c40272bc01"],["tags/ReactiveCocoa/index.html","2bfded67da26f8b588dd0b8bddd28932"],["tags/ReactiveObjC/index.html","f37392077000be3198ee6ef2d8adbe47"],["tags/Repository-not-found/index.html","2cd7fe3d1ba3166cd81f8ce50f1156f5"],["tags/SASS/index.html","991edccef8c28ec6c5955ef3f35f6f2e"],["tags/SprintMVC/index.html","66b4824267fa20e53523762cf24a488a"],["tags/Style/index.html","b366f1b5da8f9f2058abdca9e44338a1"],["tags/Ubuntu16-04/index.html","379ebadfadafb8c179d42249ad392c33"],["tags/Vue/index.html","105ff6215e0e734af364adf906065ad1"],["tags/X-Frame-Options/index.html","9712eae493d2525ecc89d0f8ef51cbad"],["tags/aggregate/index.html","448665494824f456830f599812fea9e2"],["tags/alter/index.html","e992d50f873a555f083a6405490d63b4"],["tags/change/index.html","17332385be0c33c14845991fb3c2b07c"],["tags/checkout/index.html","7ca1ba803bec843a70d8f54d49105bb8"],["tags/collection/index.html","ce0edfb40c691e17347b7c4345068689"],["tags/component/index.html","3cb201ebe118d4232f60bcceff91aafb"],["tags/computed/index.html","077026b2593abf770aab178135331d5b"],["tags/create/index.html","ea4fcd2e4c9141fd610235c8e8be6fa7"],["tags/database/index.html","c993e55d87b3c980ec333839915b6d72"],["tags/df/index.html","17acb74dd432bd5839f6787b2f3b815d"],["tags/diff/index.html","e8505741333a4aa4302d981ee9a16b25"],["tags/du/index.html","a6775afaa8068560b661d4ef10fc2a94"],["tags/fast-forward/index.html","f8b3d9292a130a2af8434055d8eb1651"],["tags/ff/index.html","568a1a2a3972c30c41c1222c5a144346"],["tags/git-branch/index.html","fbc978d6002e3e3fc15944f56b158961"],["tags/git-merge/index.html","575033c4ba014851fb02a9dec7701866"],["tags/git-pull/index.html","4eaa678eeed59c41ce52142f82b210a3"],["tags/git-reflog/index.html","a1b00a90d93b06ab725026bd0582e9cd"],["tags/git-reset/index.html","5e712625adca8623547211c31a0b21d9"],["tags/git-revert/index.html","a5ca6e9031f86772c189501d49f3f777"],["tags/git-tag/index.html","0f05fc1dd62ce1eb2c7b33ba3683e26f"],["tags/index.html","8860d8f7887bd9ba31d74831e97b156d"],["tags/modify/index.html","c7f2708fd8b0f0f4cadd5ff8c8d75413"],["tags/no-ff/index.html","46e81cefdc3cad6ef6dbcde282d5d170"],["tags/rewrite/index.html","02e6355ab108875ca737ce0b8fd482b7"],["tags/schema/index.html","2ba97c7e4100dfec6b8381e18bfcb70f"],["tags/shell/index.html","9f79125287270231ee74f3b48e73f7d4"],["tags/shiro/index.html","6396c7ed04bcc287ff179ca62a5f2949"],["tags/this/index.html","e2f3cbe7184129894cc8af17d5f48a4a"],["tags/tomcat/index.html","cb51f1bf1a56d298f834eff1e3c56cbf"],["tags/true-merge/index.html","df947079f153fa1d0d24917f74bf5da0"],["tags/url/index.html","0b1e11fbd0f42e0e997ec808b92f8a39"],["tags/windows/index.html","6ed68de5b72af6846b07aac3c105418b"],["tags/一棵开花的树/index.html","6b59e9d58e49148889d9925e84519249"],["tags/介绍/index.html","fc86103c62c9da1447b7ba56f2049802"],["tags/以太坊/index.html","8a9b4c4a74a2383bdb68d7dfc26bc2d6"],["tags/依赖包/index.html","441f7220a6fd60afe9e1254959cdf746"],["tags/修改/index.html","44fa00df66fc80549f2ce00fbca2a2ba"],["tags/冲突/index.html","3596594f6c6e8c4ef820461c8c7ee229"],["tags/分支/index.html","93a0b043beab1a301f802e40afc4da1a"],["tags/创建/index.html","0ac799e5d739a22c8c8c774fe1052b82"],["tags/创建数据库/index.html","94b667dc4a4b5e37a5c853dcfd8187d6"],["tags/区块链/index.html","9beeb2a01014152f95ed01d05670f130"],["tags/升级/index.html","aff598c6a1cfff42330da061a7415017"],["tags/存在/index.html","547d68d57326d298f2cf433f4ac23394"],["tags/学习笔记/index.html","c5eb53ef2173d5a14dddab356a988aeb"],["tags/实例/index.html","242c66bcc7dd3d0a101edfe7bc70cad8"],["tags/工作流/index.html","6bfd86c29f0d50cb029bfc08ef0ca652"],["tags/席慕蓉/index.html","4539a4c8d8bf6f3490e73d6bc4c69e2d"],["tags/插入/index.html","d7b5a8a46027859ebafb6a9e5dadbb36"],["tags/数据存储/index.html","d2aa42f0689d1c7d68276b8d11ae8b02"],["tags/数据库/index.html","7cfe22f2ce4d3331f5e955b032a43117"],["tags/数据集合/index.html","8b2d27c4e6fc2eed8d3b2fe5a5050a97"],["tags/文档/index.html","78e98a62d54fa6476d2ff2bbcd7991a8"],["tags/文档流/index.html","d85f4c1bc941eb80b3baf2b44129b48d"],["tags/智能合约/index.html","4c243cdf1cd1c34fbafa3e6bfc1bd08f"],["tags/标签/index.html","3ec79aea46dfbe9e27f15991ffdd3c13"],["tags/模板语法/index.html","3b1c2f7843bb149233d51c4e4095dfb2"],["tags/比特币/index.html","e4b519e88431963719e7756dbf8a4910"],["tags/波浪字符/index.html","e8de0145ce60894293aff8398e953cbc"],["tags/用法/index.html","9d396d58ed27d972b3d959e15f448ddd"],["tags/笔记/index.html","8c31d29b635bf1645c8ab124cd372452"],["tags/符号/index.html","c19bb1e7940c516d6302a9cf4df918e1"],["tags/组件基础/index.html","23709a7557e0b506d7a303ca43563a10"],["tags/绑定/index.html","e21c771e8f6de9ecc1cb5de8d06ecbb6"],["tags/编程/index.html","bacd266f64f9971a7293da9cb06195c6"],["tags/聚合/index.html","cab238df9fe163d033faf2aa2b42e002"],["tags/自定义指令/index.html","4a6194fed8435b7d779de7773403ffaa"],["tags/计算属性/index.html","bf3d0cf4f88979bc85a262e9b6b64f54"],["tags/远程仓库地址/index.html","4a51cd586a0e4fe0ddd44b8424d0d663"],["tags/逻辑操作符/index.html","2f56a97928ad3547a9e869306705ea8e"],["tags/部署/index.html","6407bdebd767b77a93053791209e969e"],["tags/难度/index.html","9b096698733f7380d91c3fbbb1b8b6b9"],["tags/集合/index.html","038b823a146d26aaf9af16ef7fa080c4"],["tags/集成/index.html","583e9bceadd5719b97a2f31f0c6bd204"],["thinking_in_programmer_life/full-stack-programmer.html","e54078c869b8c5f4633a5ccfc7852a63"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







