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

var precacheConfig = [["Kafka/kafka-introduction-note.html","558814613eb0eb5a9f47d80102917d44"],["about/index.html","0d1054fd2c213167ddfd2877595ece8a"],["archives/2018/06/index.html","3c86d0ed78fc64af6db4f36df53b8da0"],["archives/2018/07/index.html","9728c6d9f85de3a3c93dece4ea738ce8"],["archives/2018/08/index.html","4e1eb1dad3c6da3777c3d0db61aebcfc"],["archives/2018/09/index.html","55b80bfa6612a99b57e8e4bcb21a4929"],["archives/2018/10/index.html","7ad5ec4b5974c5152107758121aa1d39"],["archives/2018/11/index.html","5bf356976932233ac55cdc841846e638"],["archives/2018/12/index.html","12c519bf61af9e35bbae1ca248b8a32a"],["archives/2018/index.html","56a06c5a45829e68dc3da1c42671f313"],["archives/2018/page/2/index.html","bd88195c4238979f05b77debc53702ad"],["archives/2019/01/index.html","4b35bb7ecd5d3bf4411142e1bdff4fdc"],["archives/2019/02/index.html","055f94548d619737105bc4bc58d383c5"],["archives/2019/04/index.html","a9ae1d726d19b2aa13c2fb91f582f932"],["archives/2019/index.html","0e74399f59d2fbd1ab66818653daa118"],["archives/index.html","545d9cd8b66a7345f7c224209ac08055"],["archives/page/2/index.html","2975d969ebc80a6536fc101625c2a83b"],["atom/index.html","dca49ca1a33a729f23d159fba2d0007c"],["blockchain/base64-base58.html","f113dc2d546bb978e5a9881a7e864812"],["blockchain/bitcoin-data-storage.html","fa5ed4fe18d5bc71d2b98181121c69dc"],["blockchain/bitcoin-difficulty.html","239ec8312a8cf646a1c8bf4771838353"],["blockchain/block-chain-ethereum-contract-program.html","46b540b3ae7b2afec4bebafdb048edce"],["blockchain/ethereum-programming-introduction.html","cd09212d91043fb012449bc0d1662431"],["blockchain/ethereum-rationale-introduction.html","00518d2fd92f15cd20fe014282b17148"],["books/index.html","502cb73e02534f61d5a8ca20a399816b"],["categories/Blockchain/index.html","5123b5b9cfbdcf7badda561725ef0afa"],["categories/Blockchain/以太坊/index.html","d865390559d4087138a69b06760497bd"],["categories/Blockchain/以太坊/智能合约/index.html","a34988230c5c5e08fad62f0d55b4bfcd"],["categories/CSS/index.html","7436945c96919da9d6dac801ffe61f4a"],["categories/Git/index.html","660ac6313be7cc56a8c9dacbb3ecc897"],["categories/Java/index.html","0ad01d8a0ab010253cc7dab96c1236ec"],["categories/JavaScript/NPM/index.html","9887a18c84c80031f80d6962c02fe3d1"],["categories/JavaScript/Vue/index.html","8e94f190e2ce19a1d6d107a5d171ff67"],["categories/JavaScript/index.html","4c13d6100b53a651f8db2222c9fbd463"],["categories/Kafka/index.html","eece85c6e9cc0c9f0fb95b79043bc208"],["categories/Linux/Shell/index.html","f61b4b9439991dc7336efafa6b2cb465"],["categories/Linux/Ubuntu/index.html","94bf89537d4f3a0d87d351439be5bcd5"],["categories/Linux/index.html","911be968d53530f801138cdaecb4deeb"],["categories/MongoDB/index.html","5fdba536e71c8448cc42f73713c9d31e"],["categories/MySQL/index.html","698c17ae9bd42af53b13bedd0544120d"],["categories/Python/index.html","1c77ed6ce16dcb80ce029f052d8bd735"],["categories/iOS/index.html","f214d51bf0f82109b61c0dd79162bc43"],["categories/index.html","2361d66df0b8f1c7b7d6de04a7d2077b"],["categories/微信/index.html","2495ab5bb5dc005d817638d7d984145c"],["categories/杂记/index.html","1c919bc7627a6c5294da6a34c0a0f5b3"],["categories/程序人生/index.html","f955156654b3e6d7fcf02dd08b792348"],["categories/计划/index.html","4a047ea930fba1805117d25615f91ee9"],["css/css-font-note.html","74566549ca67c21029592ca99991ecbd"],["css/css-normal-flow.html","238058fa62fbf987c03fba5bffb81f32"],["css/css-sass-introduction.html","128768ab17df47c0f212a7ec223a3f32"],["css/main.css","a8e000741d27b3f1c0bf0d8fb736bf8e"],["drafts/configure-multiple-vue-project-with-nginx.html","73d28c783ed4f8e1449ed0745a6433d1"],["drafts/iframe.html","62b9c81fe27e98b44184b8712e0cfc31"],["drafts/record-re-install-mac-os-10-12-6.html","806b155e669fbf964bb7169fc6b2ee45"],["essay/note-ximurong-tree.html","aa61436c5257bd7308149aa3ee426a55"],["git/git-DETACHED-HEAD.html","f8eaaba92f76253a33186542de674944"],["git/git-branch.html","b68a68da19ed06fe067e4b0826414642"],["git/git-change-server-password.html","b51458bf5f7f870df685cfe9740d1f97"],["git/git-checkout-1.html","9d591cdee4cc0fd373e7cb9d3d3639c5"],["git/git-checkout-2.html","d9a3dd6b7be27c2f284fbcf475b4a3e4"],["git/git-diff-m-symbol.html","b060c586538bad3117b0f716033430aa"],["git/git-git-flow.html","5011dd448e61a5c1bfaf1732172ec50f"],["git/git-git-merge-ff-no-ff.html","e41613393583f696c0931f2b8ac09bd0"],["git/git-git-merge-true-merge.html","bb9268980590060472ea0f0c6ae32460"],["git/git-index.html","65ddcbda2358753aa9858cda7ea2c585"],["git/git-merge-choose-one-side-code.html","af4ba1aa45082386e92a2991ad368d11"],["git/git-merge-exist-conflict.html","2cb22cadf3723a549cf44d686f3451e3"],["git/git-pull-1.html","ac2b7fbc08d6aa7dae8ceb58e525af45"],["git/git-reflog.html","9048333febe57dee8c5e43d9b5fb7e6c"],["git/git-remote-set-url.html","f24c523a8d4fd543bc3f83d05faa9326"],["git/git-reset.html","886f2036ba07d1b49803538577619e46"],["git/git-revert.html","825790e9aed1b3e5aff61cde253271a8"],["git/git-tag.html","a93d51771c66e80a8ecdad6c4f3a8ef5"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","f6008fa123d32cb07b0efc1b934de2dd"],["ios/ios-oc-kvc-1.html","99b2eb4113581a84b5262a23ac05003d"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","50a2e3e94d049a7a88b6ec334cf072b1"],["java/java-annotation-request-response.html","722f480af089e9c3c682d0a02aff9d31"],["java/java-deploy-resource-folder.html","22592c5f67cf558cdce4d2f49f46392a"],["java/java-jps-note.html","becc19bb21377d12858d9617903b66d3"],["java/java-pojo-bean-note.html","6ad8a35a4e5d8f77f86da9a31171fb13"],["java/java-shiro-note.html","f2fc0b7e155657042397d71956e1c12a"],["java/java-spring-autowired.html","5928399d2bc7df150a9956d7cb53d3d0"],["java/java-spring-configuration-bean.html","6adc31bec9d6336355aa58d52bd4361d"],["java/java-spring-restcontroller-note.html","b8f663f4ce209661354589fe7ccaf135"],["java/java-springmvc-X-Frame-Options.html","4a1e25c45df9be2712757511bb9917c1"],["java/java-synchronized-note.html","4149902732256eeefcdec642fd1997b7"],["java/url-rewrite.html","91bf2d3a431b16e9b4ac787a35b4af61"],["java/url-value-pass.html","95237c89d7a4dc1da33b7f639c4e8fd0"],["js/js-logical-operator.html","4b2274878e8f382c67e4a7737dd36441"],["js/js-npm-symbol-caret.html","adcc9059c88cee8d55a1aa2e1a5ef40c"],["js/js-npm-symbol-tilde.html","96c557c75ce36f536a1c3ef3f21f01f4"],["js/js-this.html","e51ec067d71f1ae7d9e330256f92605a"],["js/js-vue-note-components.html","476f891d91692a3fd5c7795e56c4927e"],["js/js-vue-note-computed.html","4531464c9e8c90a503953160bcbeb26e"],["js/js-vue-note-css-style-binding.html","6b518f31856a0cc6754613700a968736"],["js/js-vue-note-directive.html","d8579acbce464e20e66c9df15d34eacb"],["js/js-vue-note-instance.html","9d4182c174bb971a40ddaf5f44c44cca"],["js/js-vue-note-introduction.html","b0597bd90219b4d41fce06812bf77af4"],["js/js-vue-note-syntax.html","eca385005a1d90f334f866c4a2fca2a2"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","0e658b0eb84a66cb3cf243041b9bfc1b"],["linux/shell-command-df.html","6f18228ba7620cd9a494917e88cbae4a"],["linux/shell-command-du.html","dc51ffff3595b785afd919060081afc2"],["linux/shell-command-netstat.html","69e4f5565f5d94bb9d003f039ba0ea38"],["linux/shell-command-sed.html","5441235f16fdf5ae675b525d9d6d53be"],["linux/shell-command-tar.html","804b6fba900fa6361baea9cce42c5d19"],["linux/shell-command-top.html","c9a2f17f515b3b9bbc96e7bf6161709c"],["linux/shell-command-touch.html","ccda63334f91bcee59af8889695b0721"],["linux/shell-command-which.html","ff951921db401b9593315dace6ae90f9"],["linux/ubuntu-user-add-delete.html","a29c6f9bbc518c4e8a03b7dab141440a"],["mongodb/mongodb-collection-aggregation-introduction.html","1cf49607406643b5317b20bc42aae096"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","8f8e5ffb4564da389342b3e0c3562d3e"],["mongodb/mongodb-collection-create.html","6a8167a0a7b05927575bb966010ee7e7"],["mongodb/mongodb-collection-delete.html","f414265afde051774ef9d443bb0d840a"],["mongodb/mongodb-collection-find-1.html","b628da7645ef053c50a03dd2f2c50fce"],["mongodb/mongodb-collection-find-projection-operator.html","41d5a8f7679f62b964f275c3c821214c"],["mongodb/mongodb-collection-insert-1.html","4047c4bc5fcc8c6e09a1ccb057560fd2"],["mongodb/mongodb-database-create.html","146094d7a90dfe28cacb2478df368b60"],["mongodb/mongodb-java-driver.html","ff42f7b5950b3e6090ba3d4f454d3020"],["mongodb/mongodb-schema-design-note.html","077ebd215d528cf0b536dd6b42b8c3d8"],["mongodb/mongodb-study-note-1.html","90b2baac3c33743344482ddeee4b2210"],["mongodb/mongodb-study-note-2.html","5ecb131a9931d2cd89bbf788d16a7af5"],["mongodb/mongodb-study-note-3.html","d542a037f8797dc3e23e1d835df1631d"],["mysql/mysql-ddl-handy-book.html","c948ad999cdd9082db8a72255de669d4"],["page/2/index.html","80fb27aee358a51d59ebe7866f1a410e"],["page/3/index.html","fe6217057ed277357e34ce66bda9fcd8"],["page/4/index.html","d2b4c904057418f81e7b9de8be7b18a2"],["page/5/index.html","7e7e222e678bccb1b22444b5af9db1bf"],["photos/index.html","7444a7b101291819ad19b7f02fb51242"],["python/python-args-kwargs.html","9f964cfdbd14e3efc6e48cd0c868b90d"],["python/upgrade-python-under-ubuntu1604.html","0e647ba9623fdbbd932070458bf2de28"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a3db3c8c8b033b38ff59f8927edddb86"],["slides/index.html","bf6892b3035692ecf2a801c20b09a0b3"],["tags/Autowired/index.html","bcbbe9b541a529d717d2ba525cff155e"],["tags/Base48/index.html","41cf05625466aec5079c2783b8f672fd"],["tags/Beans/index.html","790627aef1cd01c9f6902de88bf2e69f"],["tags/CSS/index.html","87e3b783fa86d9511c506f35f4d2caa5"],["tags/DETACHED-HEAD/index.html","8fbfbc861236347dd709dde0a227801f"],["tags/Git-Flow/index.html","a166338f5799c179024f13b6a6da350f"],["tags/Git/index.html","d5953f8edd076e9e8e8f088186e5b7bc"],["tags/JS/index.html","39e8ee87b78bd8ac32179acb423ef38c"],["tags/Java/index.html","27b6814a9f415754d6238906023916bb"],["tags/JavaScript/index.html","e08a5645c95a317fa5f020f901d58758"],["tags/KVC/index.html","3fc13d491302bbed3187d6cea753bfc3"],["tags/Kafka/index.html","8c3fd1f84278c368365e9233cc2925ae"],["tags/Linux/index.html","0f019b53853d14d7886b774e3fcbc4d6"],["tags/M/index.html","6191fd27d9b5345cf28516f649fa9374"],["tags/MongoDB/index.html","df798d343fdf9e357ec258c59dcaac66"],["tags/MySQL/index.html","72234f6be2b17dcfcd5164486fd5e049"],["tags/NAT/index.html","e8972363f94aede4ac8bab85ce7de02a"],["tags/NPM/index.html","5c24745ff1485b65ad20ff31e257c504"],["tags/OC/index.html","3efb90fa9770e6a233226c945068430c"],["tags/POJO/index.html","76d9712e7ee5bd49dc7fc42f29b5dc75"],["tags/Python/index.html","77fb7cbf23f99aac5683c1d2e8095a9a"],["tags/ReactiveCocoa/index.html","5e68005b3fbe1dfc0c3dde929b9cf782"],["tags/ReactiveObjC/index.html","d41bab505289b267e3fe8f5036808113"],["tags/Repository-not-found/index.html","249a30eb97a0c7acda49cd04312be4b7"],["tags/RequestBody/index.html","328157e8300a1f670c3f264862d1b9ee"],["tags/ResponseBody/index.html","24fe60d4f7cc80480452617f0ff127e8"],["tags/RestControlle/index.html","8d94a9f9ef82de0566e3ccfd134e285f"],["tags/SASS/index.html","3bcc21f81b09cd8143623d3085c90640"],["tags/Spring/index.html","d870a3bae1179791df4fba142cd12277"],["tags/SprintMVC/index.html","cc1eeb1c283773db8993dbc32bed43b1"],["tags/Style/index.html","20aabff5223583f3b0a57ccd99cc9d36"],["tags/Ubuntu16-04/index.html","ed1dbe75d086bdaf8e4ced8830efbe01"],["tags/Vue/index.html","742f371ba868d011189c4f52854d1ce2"],["tags/X-Frame-Options/index.html","62bb4d091099f87b5b68119d74eb13fe"],["tags/aggregate/index.html","b53606c81458d9497e4e3ea41ef66c54"],["tags/alter/index.html","df50dbe21c55092c3927f445c7bf4344"],["tags/annotation/index.html","96f1f065b4781c947c2b6a09ae5de2b0"],["tags/args/index.html","572387065bc5c347034bf5809cbc5dcc"],["tags/change/index.html","f87a62634f8ab877f401e18f06211af7"],["tags/checkout/index.html","0687890dd8bea6ba4ffa7247350f3f2b"],["tags/collection/index.html","32c304bc75aa72d8a9eb75058c447f27"],["tags/component/index.html","730b9dae10de7a5eaad91d4e3f37f9b1"],["tags/computed/index.html","bbcbffe06b0bf1ec65dc869ec4092a87"],["tags/create/index.html","e0610608c869dbcb74db967a5843ee85"],["tags/database/index.html","0ae3a3268d404a3fe44a5f48ee377c63"],["tags/df/index.html","1ae9d45eca5d80442c01e68ba5cc456a"],["tags/diff/index.html","f7089a178b630f699381088cb4b0a204"],["tags/driver/index.html","6efb2a26fd1c59c39435d3cffe67d8c4"],["tags/du/index.html","6d1dce86bb97199d7fbd3ce393490d38"],["tags/fast-forward/index.html","fb7410f7fa069209227c9b9d6b87cebc"],["tags/ff/index.html","37dab46a5f476c42d23e748843194076"],["tags/font-size/index.html","8e22b97654c2c1cba923de3fa96ed98b"],["tags/font/index.html","4d1ed7f47865068151d8d6fb25db3f43"],["tags/git-branch/index.html","1f426cd04c72d1d27d5cb80215979691"],["tags/git-index/index.html","94e8cf1f77c80c44a09221e2cc377e54"],["tags/git-merge/index.html","bf6eeac260ef24d6112078ca230fe771"],["tags/git-pull/index.html","d053b194c890a9e668051cbf42983863"],["tags/git-reflog/index.html","e0d7a16754e2fb086d0767c81b2b9ca6"],["tags/git-reset/index.html","087ed020d1449718420faea7e5d31919"],["tags/git-revert/index.html","e56455322b17bdc185f00a26d7cb894e"],["tags/git-tag/index.html","179d6c687f98f007fc23018188f613f3"],["tags/index.html","fc0c3ef0f086d34153d67ae0a2c1caf3"],["tags/jps/index.html","5dc20ad4b83e65a6dfc816c81e01b166"],["tags/kwargs/index.html","fa3b83013b94d03ed364f793a0908fdf"],["tags/modify/index.html","f1d8110c940bcea15cce7b262df096ad"],["tags/no-ff/index.html","0da2bde4e43144d69c58c526e72bd3b3"],["tags/rewrite/index.html","5c66583cfd93d7bfd66cb20ed120fa2d"],["tags/schema/index.html","4cf4212d184d71b568368fb1478684f5"],["tags/shell/index.html","3037f01b40e60200473322f4db2813f4"],["tags/shiro/index.html","d675cdbaddbfe04ffc655f8fd4d33146"],["tags/synchronized/index.html","660582328780374f3f9709bf60444e8d"],["tags/this/index.html","c9bf066451a58974408012b69f71a64f"],["tags/tomcat/index.html","c28a97bf5049997f6f05eed29df921fa"],["tags/true-merge/index.html","94ce6df8c15a20f95542fb8ebd85c2d5"],["tags/url/index.html","90d301c4cd55eafc7109a81aafcd7437"],["tags/windows/index.html","f38e8c5bac7c93c29f5e1c5a0128a8c4"],["tags/一棵开花的树/index.html","44c1e0d39aefd4fb9ce07b8717929333"],["tags/介绍/index.html","d5d5456fdf8f685bc95ae59fc3034849"],["tags/以太坊/index.html","e7445e48e8f8b5b309d9a51756779e40"],["tags/依赖包/index.html","cb5871dce17141d7339be85c570cbe21"],["tags/修改/index.html","11462b87cb7d4735ac48fd491a4b1be0"],["tags/值传递/index.html","a756743a7c520ea14e31361e88995042"],["tags/冲突/index.html","194c54127264b6b49722f33af394a2dc"],["tags/分支/index.html","15f55cc5af8fe3f51bbeafa0c60ec222"],["tags/创建/index.html","88638cf310416835cbb776de552b8574"],["tags/创建数据库/index.html","2ad4d5ea7cc69c0cf2cc65e1e0a472fd"],["tags/区块链/index.html","5d564c6f6b1446dcffa541cfa85840a8"],["tags/升级/index.html","466a51a2f0afb82cf0218e6f67f120a2"],["tags/参数/index.html","d29980be3222a10ab461ec3b6e4c4cf8"],["tags/存在/index.html","3ab2d358036013f865b2d77d22cebcde"],["tags/学习笔记/index.html","c2524113b9708e7e718dab9430193fc1"],["tags/实例/index.html","2a6c4d130ee5bcefa1ba70b5c1ab500f"],["tags/工作流/index.html","d5f4696d0a15a5702cdd19f98b3b3364"],["tags/工具/index.html","e8354f68418cd99360e9dd64cd8bed9f"],["tags/席慕蓉/index.html","969cd68135430d8e6ffdc7b69a8b5394"],["tags/微信/index.html","7a83d4d967fae85cc672b4e43e3ac013"],["tags/插入/index.html","43ed7d1aa066f3c3a3487b8966c2e8ce"],["tags/数据存储/index.html","b65ab1904ce75da88bee4aad79ae9b33"],["tags/数据库/index.html","e7c8a179b90e380c86271344fdf9c35c"],["tags/数据集合/index.html","06080dae6b3afe90f1df6bca5b9863a8"],["tags/文档/index.html","da23b3561070a3508246d25fc73f55ab"],["tags/文档流/index.html","8ebea2eea93ecc690cc2b0b6f2c1afb3"],["tags/智能合约/index.html","66326e6b8e06e312d08fe9fd5539d69d"],["tags/标签/index.html","e602a4332096060f4a6ac8dbfdb4b0e8"],["tags/模板语法/index.html","2ef39c98f4275ab8ba66094e838e8428"],["tags/比特币/index.html","90956f97fc9838c8febb23e562244c66"],["tags/波浪字符/index.html","f78d1063c2ac224ce8fb7bff050f8bf9"],["tags/注解/index.html","cd362d3fbff378d6546bcf9e08eabc6f"],["tags/用法/index.html","efc748d020070c1d522ab7e8c4529c13"],["tags/穿透/index.html","87933e78ae73097c634bfa1b8449e08e"],["tags/笔记/index.html","0acb2037272f2e4fe13a2fcad8ff5c52"],["tags/符号/index.html","6610d0ac55a6c10fc797475863e7ee4c"],["tags/组件基础/index.html","226d8befee961f3683cd4adf28f259ab"],["tags/绑定/index.html","ad3e2dce7b68094bd9ec5a8d8a54d7c7"],["tags/编程/index.html","de0b17d3c815e54ad4cba034758daa65"],["tags/聚合/index.html","36481d78d9114a909cb85d1ef545e42e"],["tags/自定义指令/index.html","09c0f2d86f70fdcbe58c7c12bfb3e067"],["tags/计算属性/index.html","aeb48a9cf159a60fe108430040e774c4"],["tags/进程/index.html","c7c1b99e8b09309e6a8fb6461479e5cc"],["tags/远程仓库地址/index.html","d4f468e90d3cfc5af0247dd6f4ff2fa5"],["tags/逻辑操作符/index.html","89d18e23f3fb9dec4395cf84e7ccd975"],["tags/部署/index.html","0413fa11fd41c2b0b6605e3654565b8a"],["tags/难度/index.html","01be5bcb9efb4b0b7cce5ae751a4ea55"],["tags/集合/index.html","d8929ecb293d479be837ff9dfee0ec0f"],["thinking_in_programmer_life/full-stack-programmer.html","219c931d735c2f57c877ff6c5925334c"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","06b88d894869acbf6e94d384d91ad02f"]];
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







