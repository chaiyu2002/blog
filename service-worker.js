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

var precacheConfig = [["Kafka/kafka-introduction-note.html","1fb1e896661e791f510ba37f8de891a1"],["Kafka/kafka-storage-principle.html","0c51fede86c9825ab00243493ee7a3b8"],["about/index.html","22603f07f3f4e36737a78d85330758ca"],["archives/2018/06/index.html","9528bd849c8437085ff1eaff993685b0"],["archives/2018/07/index.html","0d8f943ff7ba61141e9415bcedb4d8a1"],["archives/2018/08/index.html","40d2d3c96cad3c411ae887b7469e8c5d"],["archives/2018/09/index.html","fc94fcac001b3b33e7f7fdfa2ff690ec"],["archives/2018/10/index.html","8638c936aa803b4c4020f8620c596ece"],["archives/2018/11/index.html","0f3861ee29c579d98edf4dd7e25f9a3e"],["archives/2018/12/index.html","735633113fbeb99dd91bb1edbed2ced3"],["archives/2018/index.html","a456f5df7e0342744f7770e6ed1f9e9f"],["archives/2018/page/2/index.html","37055fcd430f04060d48c47cbd8e9837"],["archives/2019/01/index.html","a29548740301046ae6ede3f4ac1e60b5"],["archives/2019/02/index.html","82800b6fb567b18cd9bafe278acd6e29"],["archives/2019/04/index.html","0f280bfa349aef438d0ed03c8dd5682c"],["archives/2019/05/index.html","d94405f5714e45e4b654a4b5aa41886d"],["archives/2019/index.html","8e8380c724f9cab7967572126809696b"],["archives/index.html","1e97223d9e056028d3114fb80aae6315"],["archives/page/2/index.html","cc7cd2c1448d7cf05d9066f39b96e223"],["atom/index.html","28f72b14350e8b007682faa292e591c2"],["blockchain/base64-base58.html","f05c1da5b3c3613195117debb004c7c5"],["blockchain/bitcoin-data-storage.html","7f4bb9f141dc413bd855869045d56073"],["blockchain/bitcoin-difficulty.html","454c65b279de12e5e39e3d78b1329fde"],["blockchain/block-chain-ethereum-contract-program.html","0d99ac493347a5556c82925977cc304a"],["blockchain/ethereum-programming-introduction.html","dfa3ea0b16eb1bc7c9afd9ee822bc55f"],["blockchain/ethereum-rationale-introduction.html","9d4a5b4f6f631e7bbdd521aa00f51ae9"],["books/index.html","b025bdec2d4322cf60b221b91f430867"],["categories/Blockchain/index.html","0ba9677f55dec7edfdad7f8a0e141400"],["categories/Blockchain/以太坊/index.html","b94820ecf1332c9b05e42928a98cc4e8"],["categories/Blockchain/以太坊/智能合约/index.html","bee2f6bd4beb774c7fab60cc90e56874"],["categories/CSS/index.html","371a1e75bce188d6f863c542176c2765"],["categories/Design-Pattern/index.html","460534f5cee670d13eaecc2cf534462a"],["categories/Git/index.html","25518d202c0f6803f9f8937d01d41d48"],["categories/Java/index.html","96df3d8cf10d84df5f9950e5501e1f7a"],["categories/JavaScript/NPM/index.html","d8f4085362dd3385144a001792e176e9"],["categories/JavaScript/Vue/index.html","88599f895d95e22687394ba8a8a70a72"],["categories/JavaScript/index.html","7732e5489f37168a86bc2847e88c6b1b"],["categories/Kafka/index.html","8aa19ab8c4a31e9fff4ffd9320cdd375"],["categories/Linux/Shell/index.html","2db67359f45a4296742a03504ec8ca46"],["categories/Linux/Ubuntu/index.html","e4a110b2dcb8ca8a5a140152368e8bad"],["categories/Linux/index.html","592736a6380aa33c62e0f57085d0e546"],["categories/MongoDB/index.html","e5bd4c6dface6ac0f964cd28dd6d19a6"],["categories/MySQL/index.html","23d611ae5ffc12212c5be5a7ebbffc56"],["categories/Python/index.html","5b1df81cfe6bdabd10c59648a1aa289a"],["categories/iOS/index.html","0059b26ec96333485b8b27489c03c7bb"],["categories/index.html","5cf6e92a282ccff137bc2f6255b7c466"],["categories/微信/index.html","3be5cf66a6043e04a5a4c5db52ef12fc"],["categories/杂记/index.html","4a19369e439e0d069fe45b75bea7d9b2"],["categories/程序人生/index.html","115f14bb19fc2b3fa16abe33d1a3753d"],["categories/计划/index.html","05875645baf0e2c51a18cf4922a16d19"],["css/css-font-note.html","92972db76e2fe0204110f64bdf4376ac"],["css/css-normal-flow.html","cc1f8bc6628cf8abc4a57292f353cc2f"],["css/css-sass-introduction.html","397b346023d7d1128521f9ee53b14a06"],["css/main.css","907956dd5f5462e2c0774c434188c161"],["design-pattern/chain-of-responsibility.html","7b9ec636963a4a26ae9bb6ae60ebabe3"],["design-pattern/delegate-and-proxy.html","ad225685e01e58410d464f44fb352e47"],["drafts/configure-multiple-vue-project-with-nginx.html","dfef7021fb4b8eb84e467ddabc567c09"],["drafts/iframe.html","85e82ba969a3dc8809ae0d900a44b960"],["drafts/record-re-install-mac-os-10-12-6.html","21d06b4b4eae6d6d5a4e74e9bf7c4b93"],["essay/note-ximurong-tree.html","46a09cb6d793e9b41b2908908876cb03"],["git/git-DETACHED-HEAD.html","15a84b017e61ed0701b2dbc977b3f979"],["git/git-branch.html","d6d57b658a5a4fceeb8113f4305d94cf"],["git/git-change-server-password.html","3436c0d7dd341f537a98d6b6d87dd6e2"],["git/git-checkout-1.html","84ffcec998fdaba0df1271e74224f017"],["git/git-checkout-2.html","073df8225b87c921afec26bf6cb4199a"],["git/git-diff-m-symbol.html","023e012fd8fecd2231e29c62f64db8db"],["git/git-git-flow.html","0a7265f5a1938ea38bf9c43d66bd759f"],["git/git-git-merge-ff-no-ff.html","d7e185f9fc05f4476f8844378634f6f7"],["git/git-git-merge-true-merge.html","29ad663e7da508403e1807d1d546c775"],["git/git-gitlab-flow.html","9fe056fa64aeed87132004e0f1f5b180"],["git/git-index.html","cb844044bcea425888b94fcf20052a5a"],["git/git-merge-choose-one-side-code.html","ed7a7dece5453cf6b13e0dfe831c3ce4"],["git/git-merge-exist-conflict.html","4616b6db4e4b55c12b7bf92432aaecf7"],["git/git-pull-1.html","04924f534e77f767c2661e013085c2eb"],["git/git-reflog.html","343a0085e9014a3c5f40a27b693f9cfc"],["git/git-remote-set-url.html","f58c7de4559f83772b40410d7605bd6c"],["git/git-reset.html","e545ab1d21fbb503ab4083842dcb04ff"],["git/git-revert.html","baaa39509129dcece97575038c8a9ceb"],["git/git-tag.html","892c721552bd0f6d3a0bf20b7d6d6b31"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","8fb219ca46e051aa447c638f0e4461f6"],["ios/ios-oc-kvc-1.html","a9b14a18662e30b016d1b549ebdd2a5e"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","c6d29e4ccab55410e972db7319028743"],["java/java-annotation-request-response.html","ce368b55204d01633fca777eeee2f571"],["java/java-array-and-container-note.html","0e67c5674938cd8a5bb1809b27c01111"],["java/java-deploy-resource-folder.html","b5fbd5c29a15b60a171d4ac9c877e338"],["java/java-jps-note.html","c96cf713daa16a7229239fcffa203637"],["java/java-pojo-bean-note.html","70e5849ae6a3e5a3e4d3f80a841f09d1"],["java/java-shiro-note.html","391f99c45b3f1ce86d9eed2bd62678d4"],["java/java-spring-autowired.html","9706c3a341c5b64dad788cf9187c9e9b"],["java/java-spring-configuration-bean.html","bde6da63f1221dfa56aa3c5e41d4c9a9"],["java/java-spring-restcontroller-note.html","92ba24a557768228720aba9f71be0596"],["java/java-springmvc-X-Frame-Options.html","08fd12c1f2b740ddadae113f699841dd"],["java/java-synchronized-note.html","c392797baca806a3b23c382be0bbff37"],["java/url-rewrite.html","0542639210ce147bfde798b07e5f6c19"],["java/url-value-pass.html","40e412585c0a317aa7eed858dbab9f2d"],["js/js-logical-operator.html","5f89e4d1b54b3dafabc5f3047654a7c3"],["js/js-npm-symbol-caret.html","c1faa095e11447f4c19b688b9ecc1090"],["js/js-npm-symbol-tilde.html","a6308e6d7920c5b46d48bb1b12d5c716"],["js/js-this.html","e5377e1863950f047fb3c8043d7fdf8e"],["js/js-vue-note-components.html","05d5c743bd917099d403452b38d18c81"],["js/js-vue-note-computed.html","d2750ddc6e1c1435813cf06f93af9d65"],["js/js-vue-note-css-style-binding.html","ae14e5ba4839201810289eadb1137bfc"],["js/js-vue-note-directive.html","c90fa756cdfb3aa0cba95eb39c26b43a"],["js/js-vue-note-instance.html","3f1cb2d326be828d5fdb135610d40689"],["js/js-vue-note-introduction.html","6ecece0882513bcfb5c5072841d6d294"],["js/js-vue-note-syntax.html","34ab913415eeef106cd4d45047e10644"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","3e978d0a6c7dd4631c7f751d4d181861"],["linux/shell-command-df.html","a0674a73b19b8078e0c118b6e229c022"],["linux/shell-command-du.html","7ce9bf170ab882e0ef45cdbbea5871b5"],["linux/shell-command-netstat.html","a72b1d1abf1fbd42da5d173e2324b8bb"],["linux/shell-command-sed.html","01d891fcdf680502f5c3b5dddd59798b"],["linux/shell-command-tar.html","40d1e051f82cf6bf8b3369d85c88d530"],["linux/shell-command-top.html","f4fcc48dc4a70826de7a446fbc2cdc7e"],["linux/shell-command-touch.html","e2aa46c02fd83e10879ea49bcf1a8725"],["linux/shell-command-which.html","30ccc8fa0e52e25b16393274434c90d3"],["linux/ubuntu-user-add-delete.html","ee8cadac5a2487cc392499e5b49cb2c6"],["mongodb/mongodb-collection-aggregation-introduction.html","c8af1a9c2824737ff69d06cf44a87e91"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","2d4e95834dd4e6a924ece9e4e0236ce3"],["mongodb/mongodb-collection-create.html","7d6d8da030ede7fc039955e8e8ba04e6"],["mongodb/mongodb-collection-delete.html","470b621cb8cffdd45001090a5c0170a8"],["mongodb/mongodb-collection-find-1.html","de8018d93e72d123b61ab204c245c669"],["mongodb/mongodb-collection-find-projection-operator.html","7b5b121ba117c709f254f0c56af8cbe7"],["mongodb/mongodb-collection-insert-1.html","d9589daa32e9d09c74d4d9e813503fe1"],["mongodb/mongodb-database-create.html","663262045d55dbdb226c07d123cfe76f"],["mongodb/mongodb-java-driver.html","49223924cbb5bb084d708488570cbc15"],["mongodb/mongodb-schema-design-note.html","acc0328b376660a301a5ac465e3a530c"],["mongodb/mongodb-study-note-1.html","e1ef28742ee3f30afc85b5dbf0489496"],["mongodb/mongodb-study-note-2.html","b204284353b391e5fedabaa60f40e067"],["mongodb/mongodb-study-note-3.html","ee12b8c5601ea9449126fcf59d43b8eb"],["mysql/mysql-ddl-handy-book.html","c501f977f6a0e268918675ae17005804"],["page/2/index.html","170bcf2f95b10e36e0d7055a88797d0a"],["page/3/index.html","8c0811188f1a2627b978501ff201f1c1"],["page/4/index.html","f4357fb3c1a9c9063e098c9eeb2efc74"],["page/5/index.html","cdb2a1157a75c8afc5c956d7f8ac6fb8"],["photos/index.html","dbed1e2b34556ee3abd3f360629b713c"],["python/python-args-kwargs.html","3a386b3769307757f5c4334193c64035"],["python/upgrade-python-under-ubuntu1604.html","b1f97367838b370d65a52198b72a9369"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","028aba2ff6e70bdadda2ee9cf2bd2cc9"],["slides/index.html","f5318a1ec0a82cd6bcd8a5d155104583"],["tags/Autowired/index.html","fec7d122df7b5e163972bb6688ada3f6"],["tags/Base48/index.html","3a67e9b126f70299cd52c02348acf23f"],["tags/Beans/index.html","4bf6ca7c76430db26b5467d83f0226da"],["tags/CSS/index.html","0fadbec865badd1058d82cc27d17dc4e"],["tags/DETACHED-HEAD/index.html","d924c4a568c4a9dadbe8aa5521ce3213"],["tags/Git-Flow/index.html","2afa90999934f2ef731bfd04e37e2814"],["tags/Git/index.html","d6bd6fd7b5a1c45bbc37f14890c73cab"],["tags/GitLab-Workflow/index.html","b5ba32368e73862a50ed5e76c345ea6f"],["tags/JS/index.html","39bca0f4fc9896cb5412469e68041864"],["tags/Java/index.html","beb3b66161e6202dae77396a2455f66c"],["tags/JavaScript/index.html","41c101f14c4928cc4aa490d45e80c07c"],["tags/KVC/index.html","4c7cf16f658b1fb1cae766e7b3b95021"],["tags/Kafka/index.html","54644befbf89887cada6aadbc120a298"],["tags/Linux/index.html","cf0c64322500eb6ecc9411250bba4bb7"],["tags/M/index.html","a5b5041c40b52412279b90b46d230897"],["tags/MongoDB/index.html","c0c4138f2840429246a697be0a5eb201"],["tags/MySQL/index.html","3b28ab33776b31c130f45b2c426492f4"],["tags/NAT/index.html","07ad4bc0516880f7ad48cb8a4af5fddb"],["tags/NPM/index.html","edb40d81a45c0fe853e75dbc4a45a0b4"],["tags/OC/index.html","d03589cdf53191ce1b6f956b9873099f"],["tags/POJO/index.html","7a32fcd9cc67d567fd9bfb11653bd4ea"],["tags/Python/index.html","55b465675a74c789a00aee9889dc6680"],["tags/ReactiveCocoa/index.html","f1849e8fe4d31e48cccbd21a7af72147"],["tags/ReactiveObjC/index.html","764f4b2c38230cd5f27bfab6cc1b6f12"],["tags/Repository-not-found/index.html","fc84c937bb098341e305f9d85895a51c"],["tags/RequestBody/index.html","206d2fb94770f3039ac1812d302e1abf"],["tags/ResponseBody/index.html","6213d542c1bad83bb6bf843efb29392b"],["tags/RestControlle/index.html","cc54f05e19860055f36227c89ec116ff"],["tags/SASS/index.html","2879e2e8a2832b08dc9df34ec9baa04f"],["tags/Spring/index.html","2d3bb17360dc5b91fbb5be16a898a46b"],["tags/SprintMVC/index.html","a7ade7c752c98e8ddefe306aba92ece3"],["tags/Style/index.html","585f62dcd6c577c7a1fe98cbf464eea9"],["tags/Ubuntu16-04/index.html","cdfcaf7744da512c4ab100e6778de54c"],["tags/Vue/index.html","abe8488221e7f8158d745729be17e8d8"],["tags/X-Frame-Options/index.html","762e021d3afd8a199e666cd5135fac69"],["tags/aggregate/index.html","d6edd8e5bfe8a051a11a415c73ec25fa"],["tags/alter/index.html","9a34415986d517b0ef4c9a2b6041a253"],["tags/annotation/index.html","deec458f5d1355772f5d1a10f4d604da"],["tags/args/index.html","3dbf07b774335c2531f7d386277114f9"],["tags/change/index.html","0ac532b03e89e6b40024e9a9302df754"],["tags/checkout/index.html","e8b59a70997a922680c9bda7e0917d80"],["tags/collection/index.html","91611f4b70dbdd98d2818362fd83a30f"],["tags/component/index.html","0dab94c56c00ccd6df412379bb5391c8"],["tags/computed/index.html","14e1dfce0cb5e3b125b4788005831013"],["tags/create/index.html","07a752991f6cfa191bc978b16c6fbcd2"],["tags/database/index.html","41f2d54269ad72fbbac97e576e5a8824"],["tags/df/index.html","cfa4d5de45b3eebee2c75f08905cc6f1"],["tags/diff/index.html","68d12f375dce629abaa0dcb2c5b8d893"],["tags/driver/index.html","e64cb5a5cf165565c52c972f6f02f679"],["tags/du/index.html","756cf2d9baa415bf9d69937fa605d313"],["tags/fast-forward/index.html","360b1db5cc2997e699f0b214440b107e"],["tags/ff/index.html","dfeb36dd6bcb31f55037507ee0701747"],["tags/font-size/index.html","62c16ac7119c7baa923099b890a12ecc"],["tags/font/index.html","001be24ff9ed321cf4a1f5b66b5757c0"],["tags/git-branch/index.html","163359432df6a25b5a74b4adf5a591a4"],["tags/git-index/index.html","cda5477c2dc2d71d43ce1ddeb8bfc539"],["tags/git-merge/index.html","30161c5d14a7dd50d33886a52797df16"],["tags/git-pull/index.html","0bc4764f11486d72095b465e1879e077"],["tags/git-reflog/index.html","fae219462ee19c2db790d1e142b85f5a"],["tags/git-reset/index.html","afbce3fe954f4f90176cd07d30efe7a5"],["tags/git-revert/index.html","78c2f518db6dc1e95adfb7d05197dc58"],["tags/git-tag/index.html","aea15af22828486ddc7a2897916b4402"],["tags/index.html","3be238010e4e127b60a3ed94781668dc"],["tags/jps/index.html","678997018a30fdcb5f8c9b54523760e9"],["tags/kwargs/index.html","be8b6b3980653dbc2e5e920381e2b6e8"],["tags/modify/index.html","a37bfb383b4ee57992c2ee1978972c97"],["tags/no-ff/index.html","94c3e3f030f7630cf91291edaf5f19c0"],["tags/rewrite/index.html","e8c6fd141a5e40768e0a6a32b43b582d"],["tags/schema/index.html","cfd8fe607a807d2e922cca6e9017ebdd"],["tags/shell/index.html","2b4241c29c95293e784903ee28663d08"],["tags/shiro/index.html","19e30570ca5cb4756e05d3989d4b9406"],["tags/synchronized/index.html","27061d9e300eb431d3cd2ac7dd80fa83"],["tags/this/index.html","b3ef547e511b3a874df4068ba58366de"],["tags/tomcat/index.html","2528a1b5a0036797aa51b095930294a9"],["tags/true-merge/index.html","e272d4231613f73600b7bf936d534061"],["tags/url/index.html","09387f62130b847fb2808384a5f921af"],["tags/windows/index.html","87bd37c6bdb4463d75c9e2f5aa29d9b3"],["tags/一棵开花的树/index.html","c4e612e8350158bf0f0582dc1e4ab350"],["tags/介绍/index.html","102bdff0cad59fa146cdaf78b415f515"],["tags/代理/index.html","88e92226bbd33df30027cd0b32a0d683"],["tags/以太坊/index.html","349d73e10396f5296c607f7ae093ec08"],["tags/依赖包/index.html","75c64dd82fd429fadc9935e3cfb7cb94"],["tags/修改/index.html","10b2099935d91ec77b22226520554aa7"],["tags/值传递/index.html","1c79114625dfb140833c4cb4202e7b41"],["tags/冲突/index.html","065dec904722aad3ff21b457267f0b72"],["tags/分支/index.html","788368750c136f95f9631030b2113cf2"],["tags/创建/index.html","43f2d03b2cf3850a46e3f256d04d39ec"],["tags/创建数据库/index.html","9a1b0d699b72e89c6940b454e07db94f"],["tags/区块链/index.html","6973e4342c099f3df5e52538296269c0"],["tags/升级/index.html","81bbb0af0f0b95a5f6d83c8a4d11d16c"],["tags/参数/index.html","35255618d08a361e04a6b19ba71bd08d"],["tags/委托/index.html","06699a784772a57c4452060b2bdd447b"],["tags/存储/index.html","77db407f11aad361d81de13ae3736a9b"],["tags/存在/index.html","6323480cacdd6f692e390d22ae51f772"],["tags/学习笔记/index.html","4165f9dabcdf850ed385681ddf54b95b"],["tags/实例/index.html","48c93d992c9ef92259d8ced9e152ec52"],["tags/容器/index.html","5cc661b57ce83a0a21a8f275defd2e19"],["tags/工作流/index.html","3dfe28cab8d0d6c8140725b44d0c8679"],["tags/工具/index.html","db5892cf6948692d3ebd33289bc55823"],["tags/席慕蓉/index.html","d4ab97e4eed3d50c871199002239669e"],["tags/微信/index.html","f02e755c4f86221d911a0f9579ce8cbf"],["tags/插入/index.html","5823b67bc2cc7f4098704a2a34520200"],["tags/数据存储/index.html","b7ba608df8c53bd887ad2f97c8813346"],["tags/数据库/index.html","3eef84fd0e8599e102dd7a6391bb1861"],["tags/数据集合/index.html","3ca0cc3d56967a1edd2f9e5fc472b98f"],["tags/数组/index.html","8ebe8a1e6139d210948fc448bfb5bdc5"],["tags/文档/index.html","d0042f78eeb701146682687ba5fbe1a6"],["tags/文档流/index.html","46042e3e2da01c95d57af6c5a839d352"],["tags/智能合约/index.html","639183015ce1790eea563d3a8628ba51"],["tags/标签/index.html","2ca11e61b54d612ec99ce353c6647912"],["tags/模板语法/index.html","6e6e61534a5fd7b5d8198f999df4803e"],["tags/比特币/index.html","c883e8b388b1ad08b0047eeb5184106c"],["tags/波浪字符/index.html","5b3e45e689d16f30e7db00e0e215ebba"],["tags/注解/index.html","6e69b88eb831559efec1164b17684881"],["tags/用法/index.html","9fcef372ff2d85396e317e90f69f52aa"],["tags/穿透/index.html","a77a7dbcc9276adc1f68d5d9ca16bd23"],["tags/笔记/index.html","bc267f56fbc278644d1975fb20163249"],["tags/符号/index.html","4fbeb832c5fd2ed504bb8360c795822a"],["tags/组件基础/index.html","2198785b7f8f4b07281efe3940d3f240"],["tags/绑定/index.html","a7402129eba4cb2f74b8541a044ea465"],["tags/编程/index.html","8e9b55413aca8cfa433c74e1317b3737"],["tags/聚合/index.html","0165893823269b70e228e03f0db8542e"],["tags/自定义指令/index.html","54cf4f41e7c4aabc02f99ac04255e806"],["tags/计算属性/index.html","24672d27cfe535893e9497d08ae3812a"],["tags/设计模式/index.html","5c5f9cdcf933d420277d18f683ce0750"],["tags/进程/index.html","1b265a3810b9899450e3ce84b49c36c0"],["tags/远程仓库地址/index.html","2ce8ac6fe8d38e064f7ae534b499f017"],["tags/逻辑操作符/index.html","49f56cabfcd885706bbf87c48e4c19df"],["tags/部署/index.html","c30a404513a8d8889b7464f1627ccd2c"],["tags/难度/index.html","a7d85580fa5675927581ee16253637d3"],["tags/集合/index.html","c85b9ee2accb8b3bd0e9549f396fe0c7"],["thinking_in_programmer_life/full-stack-programmer.html","54e3392e0ff8ab5b7a01a9dd3486fe99"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","92118297ef5e7ef7ddaf3b733485367d"]];
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







