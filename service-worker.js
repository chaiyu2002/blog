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

var precacheConfig = [["Kafka/kafka-introduction-note.html","d7ec0a88c8cdff25f67656bf9c58e138"],["about/index.html","ee54aa7e009fa142b73395e850332bac"],["archives/2018/06/index.html","72458fb6162ac3e4d4be0a690bbc935f"],["archives/2018/07/index.html","c4299b9b76d3d3c9aa2953a78b6bd1d4"],["archives/2018/08/index.html","461dcf7f5b966644c1d1a4d5b3915030"],["archives/2018/09/index.html","4d4c6c26f33244ea42275498da0212a4"],["archives/2018/10/index.html","d799b702138e9c3437b928b0e7bdff21"],["archives/2018/11/index.html","0f242720c07404a106c7005aceb48fea"],["archives/2018/12/index.html","8055b1a303e4a3a10ff5c29bb2e73b4c"],["archives/2018/index.html","b89de27aae5c9588f408fe4f78023439"],["archives/2018/page/2/index.html","6436c464bb950b4befd456d555963add"],["archives/2019/01/index.html","6e3726e9a62e573bd250d838767a250d"],["archives/2019/index.html","e8133e8dd8706f7be831401bd871f774"],["archives/index.html","eafbff17ad34521e871be18eb5f41a04"],["archives/page/2/index.html","0c00bc695594a955797ea1811500d103"],["atom/index.html","1fc3f66bcf1a5ade0a6f041a481db1e5"],["blockchain/base64-base58.html","51e52c6bc05b3a4c39ad57d6ed106036"],["blockchain/bitcoin-data-storage.html","c3d7c6d7da003ef0a41e2468428345ec"],["blockchain/bitcoin-difficulty.html","ed5255ef7253f6a2f8a49d59d5246279"],["blockchain/block-chain-ethereum-contract-program.html","589bac3a5eecb915aa9034df6a37d2b2"],["blockchain/ethereum-programming-introduction.html","891d7244fbce171c0ec7e4641640f67a"],["blockchain/ethereum-rationale-introduction.html","2b0435646bebf7b87d6c34e62fd67725"],["books/index.html","c8bed94fc97fe6c173d757cd69f4138b"],["categories/Blockchain/index.html","39323901c56c934d6dd76759cda85846"],["categories/Blockchain/以太坊/index.html","7a314a75167c26429ccd952998d36122"],["categories/Blockchain/以太坊/智能合约/index.html","abe756b8a70cb8f9f43f3932f30dc153"],["categories/CSS/index.html","08ab35ef66bbb3e38a92e79903ad700e"],["categories/Git/index.html","5a2c91f48f59bafb8b17898da2d1c705"],["categories/Java/index.html","a4b9c842d47ff9ba12f44ad8eddc6503"],["categories/JavaScript/NPM/index.html","5a56ffa75c7cf32f09114449a70d5e40"],["categories/JavaScript/Vue/index.html","2c7c52955c45b8b0e80ebba1a7d99e1b"],["categories/JavaScript/index.html","92b277ba9dc0ed86b58c2376b4593a8e"],["categories/Kafka/index.html","64e574e61ebb3cde7d61c09357016b0f"],["categories/Linux/Shell/index.html","39cfab303303a0a277ac812121721f19"],["categories/Linux/Ubuntu/index.html","77d3b10f14beb359dc45a09f280798d4"],["categories/Linux/index.html","4be50331018f19b4a218d68affc64557"],["categories/MongoDB/index.html","b24a98ea389b1497458b76cf7d5fe6fa"],["categories/MySQL/index.html","d4abb8ccd14807a615ac10304d1c802f"],["categories/Python/index.html","78876b552073cd3468a23532154f4a15"],["categories/iOS/index.html","810bdf5b6afe7c7d6ef75768fe9b9d37"],["categories/index.html","465b476c05c16d1854830eca92dd5c39"],["categories/微信/index.html","6698cf4d383523843966c86da5a573de"],["categories/杂记/index.html","4b8c0d7d0e14984807f3b9d22af552c1"],["categories/程序人生/index.html","d35e613de2277c5df578abebf789b744"],["categories/计划/index.html","c7a5aad94bd2368fc69ce7b6d2a84642"],["css/css-font-note.html","887055abdd1f21533464998cdd1614e1"],["css/css-normal-flow.html","7fb12a16825c65e3d04f14f6fe2bcdb8"],["css/css-sass-introduction.html","df921428cd16c8c5fc4a0778827d5ead"],["css/main.css","bcc25c8e735bab4e533d224d5f8f1a03"],["drafts/configure-multiple-vue-project-with-nginx.html","50a97cc3078daa5de68dc549b0daa977"],["drafts/iframe.html","64d8845b1293ae50183691d9dbb20d9b"],["drafts/record-re-install-mac-os-10-12-6.html","70d70e5e0a0c225fe2243ac54ee3ac13"],["essay/note-ximurong-tree.html","ac242866617a2991c2920cfadb2b7dc2"],["git/git-DETACHED-HEAD.html","b5bfbba2793744d4b39b94fa15c8e452"],["git/git-branch.html","9185f48c1fadd0f756431cf0a1346325"],["git/git-change-server-password.html","65a8b3ed66aee976992a2698c37177f6"],["git/git-checkout-1.html","9b9e14120e8b4c28fae3b933cfa9fd54"],["git/git-checkout-2.html","0961dca5406621c0a4a9b0edd6abbe4e"],["git/git-diff-m-symbol.html","e12b8ccee8bf2028feaebbadb9d45876"],["git/git-git-flow.html","484062dcb6b440ca1297e4540ed1ca2f"],["git/git-git-merge-ff-no-ff.html","085425b36c8f491fd82826ef9e8231da"],["git/git-git-merge-true-merge.html","ee28f1bf9f5173d0dadf8b9092b04267"],["git/git-merge-choose-one-side-code.html","a08716318ea40d4b2ee9c1e1fe4bd67a"],["git/git-merge-exist-conflict.html","fd0d875f43dcd4a3275e7facc309bb79"],["git/git-pull-1.html","90d988199a7905f26da0527db35e2e04"],["git/git-reflog.html","1e54491a7473b26003586bee3ca6c429"],["git/git-remote-set-url.html","36c4ff4a363f8c514e30e3397a83aba2"],["git/git-reset.html","65ce42f1dbf748ad1d7d1e618302dc2e"],["git/git-revert.html","8afb37db3c720fa519d90f1739e21cdf"],["git/git-tag.html","c94e2a363e06ed1ef282206e07afabcc"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","0d175be58be64d04e235af998fb25816"],["ios/ios-oc-kvc-1.html","471f2a203a2396f79819d51c75b5e52c"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","c810d462f88f5b4b426604a764c5ea89"],["java/java-deploy-resource-folder.html","348a9a7008fdd6e839bb4a6a69562fba"],["java/java-jps-note.html","9fbdc7c44cf81ec87d9ca00d00916139"],["java/java-pojo-bean-note.html","016c2849917a05be39c577d75246fd7a"],["java/java-shiro-note-2.html","79b7980c790e8eb2227829d86024dff7"],["java/java-shiro-note.html","eebdfaae81b8c949c41b600dc96bcadb"],["java/java-spring-autowired.html","e202d942460ad2adef46542ff83af23e"],["java/java-springmvc-X-Frame-Options.html","da8a2cb746aae68b207ecb9100fc2b8f"],["java/java-synchronized-note.html","353ef7605aef3896ec62b4731f0ef5d3"],["java/url-rewrite.html","c60928d7a2ba622a71ad032d2b76a078"],["js/js-logical-operator.html","8a9c06ae35fe77d258bc2a2f7c06878e"],["js/js-npm-symbol-caret.html","c767775e90b626b986c71d278a78bb17"],["js/js-npm-symbol-tilde.html","33ed3cd589b2f25786c3f5d61e2043c6"],["js/js-this.html","964c677463271436ee0379af28cf85ae"],["js/js-vue-note-components.html","a8f22035a4621c5cdc51e84265e319e2"],["js/js-vue-note-computed.html","d74d7c025b5e7b38be3ec7ca06e42923"],["js/js-vue-note-css-style-binding.html","d58b4a8ec1d2a18cff026e4fcc6deb57"],["js/js-vue-note-directive.html","7ada22b17ee7e4f6f208a95366b05759"],["js/js-vue-note-instance.html","b36bdd8d6a326fb47bbcc1072b02c82c"],["js/js-vue-note-introduction.html","4c5638f93e5a69a8b498ec3e5afeab0e"],["js/js-vue-note-syntax.html","9b913c43ee5f93759e7e95d37d65d499"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","df56f315312ec478edfa8791f9cef61f"],["linux/shell-command-df.html","82ff732ef3a46ee30a672db967a9934b"],["linux/shell-command-du.html","f7d78937cc264c3b8ec3018974f7d322"],["linux/shell-command-netstat.html","121de2ac24276771fc969f995ba172aa"],["linux/shell-command-sed.html","e7e466aba698adf0ae29e47c89fa5296"],["linux/shell-command-tar.html","cc2b2b43bcc11d7dcfea29103dbb1301"],["linux/shell-command-top.html","cfd4afeca18643446983ace2ca006de8"],["linux/shell-command-touch.html","f6c863da513a3f07631110ef7387a4bf"],["linux/shell-command-which.html","bd47fd36921deb4260b5273f363c8019"],["linux/ubuntu-user-add-delete.html","2cc14b3f505884f99db7023070796ed9"],["mongodb/mongodb-collection-aggregation-introduction.html","19357a0899ece1f6773640f973cd2ceb"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","3b8807d040e6654e1b52786d964cdc78"],["mongodb/mongodb-collection-create.html","7d51f14e1bfb0888416d1c8ee241f803"],["mongodb/mongodb-collection-delete.html","1ef7ef1d839c1f8658944322da437d4d"],["mongodb/mongodb-collection-find-1.html","bc5b1e5f1b94f590e88abffb27a4b9ad"],["mongodb/mongodb-collection-find-projection-operator.html","cec8aec46dec6dc16d331cf917606b5d"],["mongodb/mongodb-collection-insert-1.html","174f62f4ac683225c349b2035cfc2069"],["mongodb/mongodb-database-create.html","61372464735ed63ec023345eae671f9d"],["mongodb/mongodb-java-driver.html","192b488270facbefeb861e8fbd6399d2"],["mongodb/mongodb-schema-design-note.html","fe1ead79017df5bc7e552b96307283a1"],["mongodb/mongodb-study-note-1.html","193005e8ff5850f492bd6d2f0b9cfdc1"],["mongodb/mongodb-study-note-2.html","7c67b1ab5aea3096f1bf0bf36cb856dc"],["mongodb/mongodb-study-note-3.html","0ce21e29e389b299c8eb04ac045942ab"],["mysql/mysql-ddl-handy-book.html","25c4a7366980e53d14a62ff67ddfe40d"],["page/2/index.html","e956cb8d6fd1e3ebfeee7e7ea43e4abf"],["page/3/index.html","e295e5da7eab0b5cf21a9c8aea376a1e"],["page/4/index.html","b2ab360af3e47145f80082cee62c49df"],["photos/index.html","fe40ede89b5ed09a4b57dec4624c9d0f"],["python/upgrade-python-under-ubuntu1604.html","98275f0f49b77394560c7eae81362326"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","64079909bb5e23b98c81708bb917f7e4"],["slides/index.html","c7d4931683b98320cfef3c42d2bf6c76"],["tags/Autowired/index.html","f9e92bf3c06c3677f45b38cbc3fc31b8"],["tags/Base48/index.html","4ad01086d65853160917ad84db7f9828"],["tags/Beans/index.html","f08472cef354fee003d0d0348b4bce70"],["tags/CSS/index.html","400246e9369cfa21d7a0628c0af1fa8d"],["tags/DETACHED-HEAD/index.html","f1d8038e6bcbc868a4d532f5f3cc8851"],["tags/Git-Flow/index.html","f241f39adb396fdfd83c47eaa2083e44"],["tags/Git/index.html","ad2a3f76a987fec84faa7149d13ff139"],["tags/JS/index.html","963b7c8da13a73ae93ae17bc4dfe3689"],["tags/Java/index.html","90c5b6f453545c3a3344e4e6264e4512"],["tags/JavaScript/index.html","307680baed3b022b3ced96183264cf1c"],["tags/KVC/index.html","4c046c57824f2af477f717619012d630"],["tags/Kafka/index.html","d2710e5efb70801f242756cd8f07c34b"],["tags/Linux/index.html","92a390dca0a58173b55ae0667d059edf"],["tags/M/index.html","73dd7bef5be2da91b7943b48e377911a"],["tags/MongoDB/index.html","daf407ee46f3b84e2f3e614f3e805b4e"],["tags/MySQL/index.html","994ed5cd3bf47df5c49cfac5686da764"],["tags/NAT/index.html","2aadca35bfd6091c02b37a5570d24dc2"],["tags/NPM/index.html","ef52afe27792751fac91d70c07c6733b"],["tags/OC/index.html","2b4d024c284de9f63a4a3d9ee5f0180d"],["tags/POJO/index.html","3981daf6a0e2c672dd37df2e1bb27ca1"],["tags/Python/index.html","2a3d1cc0d9ba7ed31a38a233e27d5603"],["tags/ReactiveCocoa/index.html","e87205eb5b6926747b54229b2f2d316c"],["tags/ReactiveObjC/index.html","c36309cf73660d5b77423d681eeb1c9b"],["tags/Repository-not-found/index.html","87050fe0818dca492e3db55b1357f487"],["tags/SASS/index.html","080d8410c6743abc8002a930a2af298a"],["tags/SprintMVC/index.html","8cb7795ced35059e8f526ea924c5858c"],["tags/Style/index.html","f747fa203a835a988d035b76af58ce77"],["tags/Ubuntu16-04/index.html","ad75e0496c4f138e4d40c9d4e96fb700"],["tags/Vue/index.html","7d05101af2f8f4d77c259e35ec4e0060"],["tags/X-Frame-Options/index.html","d6848428ace6992b85ec514ad4a6abc8"],["tags/aggregate/index.html","f1e3666592877eea8f203360b4cc2ee0"],["tags/alter/index.html","68d8940b7390b71d3f2f5da89954c57f"],["tags/change/index.html","a8880783500d5818c9529da8a2894901"],["tags/checkout/index.html","4044b6e63e7da803824c710db6abcc12"],["tags/collection/index.html","820e1ea824d6cb748d0333b8ce0895c6"],["tags/component/index.html","190b7d024030c9fb527c532517440359"],["tags/computed/index.html","de945fecaf03ad9477fa40e63093abeb"],["tags/create/index.html","beb790553f378446695eb0e7ee7d582f"],["tags/database/index.html","2d99ba6c7348eab104d3353ffdd5f72b"],["tags/df/index.html","ff4fe2a4db43795945d23827c6c88682"],["tags/diff/index.html","36b892368e9614847d22d4256657ec2c"],["tags/driver/index.html","852e2bab175732089a36bb181f2771bf"],["tags/du/index.html","f30ee52ce16be59cc307344e5f4e9c86"],["tags/fast-forward/index.html","00e79ca52b177224ed961f141fe539c1"],["tags/ff/index.html","7641fe163ea0774c027bf229fd777f3c"],["tags/font-size/index.html","5d815a10f6705e1cb27a5e2f70a2afd1"],["tags/font/index.html","84cd04fa2c58f0ee209233a4d5cfd0ed"],["tags/git-branch/index.html","1af1520d51ca0de30cb4afc16039efda"],["tags/git-merge/index.html","fe1f55708ee45b73ddc8ced7db6fe8bc"],["tags/git-pull/index.html","f2a5ce90cf49842a1e2b30fb812817dc"],["tags/git-reflog/index.html","0ee36c772df3347d5acb814b736e09ad"],["tags/git-reset/index.html","0453ce0757f23e89ae66aa429365e317"],["tags/git-revert/index.html","5d844ddec1bbeac865841e508c2ab776"],["tags/git-tag/index.html","bdbf1be883a47db09803114df933df13"],["tags/index.html","5861cf2d5616079546534c8024bd4d8d"],["tags/jps/index.html","11775bea2dbbf6b3bcce625bc3287ddd"],["tags/modify/index.html","be9c3574a23166d194b14959cc7aa117"],["tags/no-ff/index.html","30b42b2aa8c54a984d647cb88d701c7b"],["tags/rewrite/index.html","f62d63924193eaabfa6fc67d1b7f6942"],["tags/schema/index.html","b1a259d72d90a1018dd68f1ba81d115a"],["tags/shell/index.html","6d7a2ee2e5efc80478b2da47e669bc9b"],["tags/shiro/index.html","0124b53ef6255544bba1a7b0e22b0383"],["tags/synchronized/index.html","110d8f5cf904aca9c59c6b06f934ff20"],["tags/this/index.html","d99d655f4ff32f6bb6217dd60063835b"],["tags/tomcat/index.html","97043d8df45936d3812fccaa27026d4d"],["tags/true-merge/index.html","e69e4c327c05bd179f52d7196fd441eb"],["tags/url/index.html","18a2bc99b0c1d4436e7e8da068160eb7"],["tags/windows/index.html","70ac0aa0ff8de000dce93f449594015c"],["tags/一棵开花的树/index.html","6d3fcf80ded97ca3a84621bd04d1bf9a"],["tags/介绍/index.html","918e83df6d800d5d8e93348e017880cb"],["tags/以太坊/index.html","7fcb8cbb3493417d233411819d173c53"],["tags/依赖包/index.html","b8da4170abf991baaa3548475ae366be"],["tags/修改/index.html","71fbea3bda6a4c6a14bf6f3d15e32dfb"],["tags/冲突/index.html","e278696283f9f5abcab0c33c0a43adf6"],["tags/分支/index.html","ce9b165cae06c10075c7ca0c2527d0f2"],["tags/创建/index.html","dee7e61ba66c1d00e004c8d3cd3cf944"],["tags/创建数据库/index.html","dba9416fd3b141a0e337ef6ac3d67e44"],["tags/区块链/index.html","6c3fbf8b35cea25b7c57559ea0801c2c"],["tags/升级/index.html","3323c84850ba22773d61144668f1728f"],["tags/存在/index.html","f015994e9b3a442e06e0c74f16c73a99"],["tags/学习笔记/index.html","6a5477acd8ed819eebb5954d175f0753"],["tags/实例/index.html","da1ba0555f5fe287e4d0edc1cf36c2e0"],["tags/工作流/index.html","d7761d8fdafae547681c053a60b0b59e"],["tags/工具/index.html","aaf87f80337525e65d2a1e135d9f917e"],["tags/席慕蓉/index.html","94a21b1676da4f2455c9b288cab554c3"],["tags/微信/index.html","63c67ec1aca2065a3e998c5c4aafc823"],["tags/插入/index.html","6fa5b0a61c84f6559cacf61cea7e4a27"],["tags/数据存储/index.html","c17669dce476183b491bc97790d1df37"],["tags/数据库/index.html","579e3ee57e7ee26bd9d4fcf5efae2a3f"],["tags/数据集合/index.html","ca04bf8b75f5d082e6d2725dc1651adc"],["tags/文档/index.html","8e6f7c13c4b63a6d1b0f1a291333fa6e"],["tags/文档流/index.html","abe16f59be938fbda639dcc58fe5eb71"],["tags/智能合约/index.html","dd628d35ec53179551a64e29eb14bb8d"],["tags/标签/index.html","049d03f2c11f6af648998f4b0e4fe5d4"],["tags/模板语法/index.html","177f920859143780ca77f65813d0ea94"],["tags/比特币/index.html","cc817b8e620c02634faa5554a3464bcb"],["tags/波浪字符/index.html","cc490bb67ed87f9a9b2f781bd1c9913b"],["tags/用法/index.html","072f06ac653ee509789e12c6983d14d7"],["tags/穿透/index.html","8c70a5163898c8def2e3397e3439b886"],["tags/笔记/index.html","0c14b80a571d2e177527ccade201fc5b"],["tags/符号/index.html","bd98a22d465a2b6fe1d3debdc67ff584"],["tags/组件基础/index.html","79df6d25d4dc5fc58d106f0409739b4f"],["tags/绑定/index.html","c0bd268fccc17775aa72a2c386bcd65e"],["tags/编程/index.html","799ba481b83b5191ddf9380f73267bb3"],["tags/聚合/index.html","c6a8892168f93ac060b1a15a170f9ff1"],["tags/自定义指令/index.html","28273bc17e3815eefd96fc0fd6853300"],["tags/计算属性/index.html","ebf32f5731d2227ebfe0046e106cbfa8"],["tags/进程/index.html","8934dba8e603288525a7672778a61017"],["tags/远程仓库地址/index.html","53cf65d9f6263bc07995a0a58baae7b5"],["tags/逻辑操作符/index.html","609211412f5622c8cbd84cf25d246cc9"],["tags/部署/index.html","29d112d0d183821c43f8ebec0ae19279"],["tags/难度/index.html","54c5caeedc1ec39761ef5ca10fcb7b27"],["tags/集合/index.html","5e0c3f88d4e871bc72e0243d3335ebd9"],["tags/集成/index.html","0a5d7aa7884ebd9181915c0f8e40ae8c"],["thinking_in_programmer_life/full-stack-programmer.html","dea24f5a5952844e592c8f94485b082e"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","6d10a7bf4ee776eca89bc74b8cc4aceb"]];
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







