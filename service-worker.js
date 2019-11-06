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

var precacheConfig = [["Kafka/kafka-introduction-note.html","4bf3342d32516414195b159fd5d2c838"],["Kafka/kafka-storage-principle.html","67fe74025e56f34e74cfd20482e4416a"],["about/index.html","0e6217cc447c676f65d23eb3c14e23de"],["archives/2018/06/index.html","c552531be34f9a3e2a5d4206afea41c9"],["archives/2018/07/index.html","8dc67b92f4133683929adc78822584e4"],["archives/2018/08/index.html","028ba974241314caacf985dd01331024"],["archives/2018/09/index.html","e982c653989ec4a58a159ff672850a41"],["archives/2018/10/index.html","429d22d12ba4c79725c818ec31b4e36e"],["archives/2018/11/index.html","4616d1692dc7dc1750ae616051cbc07b"],["archives/2018/12/index.html","1a92eddb7d6092cd1fbbddbf60e39101"],["archives/2018/index.html","01984c68a67a2477eb1589b2869f7a78"],["archives/2018/page/2/index.html","f684da3e1c8ee3aded8f9773f968a0b1"],["archives/2019/01/index.html","d8247af4e11dfd97effe19a0bf7d4fd3"],["archives/2019/02/index.html","caf669859ab7682a456a51e0e618a88a"],["archives/2019/04/index.html","c2c60d6a4421d0e8494e20c258a6d69d"],["archives/2019/05/index.html","c35101ee0d64e909cefba12d7381ae06"],["archives/2019/06/index.html","5ad2c3d1c3fe55d1c3fc9ea942e00685"],["archives/2019/07/index.html","cb5d239e5f73f56a938fde5de3fb9b5a"],["archives/2019/08/index.html","19b7126b9ea86dc611e21a10689a2f75"],["archives/2019/09/index.html","aa245f41610248f69227495009b31af6"],["archives/2019/10/index.html","d77cf6fa746c728faf599b2c5ac34cba"],["archives/2019/11/index.html","140ff0672c248f474bfd0e758ef8b45c"],["archives/2019/index.html","2b7332cf6a2dfb72225967ad97ad63b3"],["archives/index.html","cad454d2fac19d98af0aafe1c8d707d8"],["archives/page/2/index.html","615a242df2867c58844e6bf9dd6fa8a4"],["atom/index.html","9052412324d6b43c8a04affa6a47220d"],["blockchain/base64-base58.html","056d4e65d91fc2d8c19e8e4ba60c02ac"],["blockchain/bitcoin-data-storage.html","2fc48bffa0e351a12ca450e0fb9a8d34"],["blockchain/bitcoin-difficulty.html","dc1f4695f5e7352e4c6a354d4de1e16a"],["blockchain/block-chain-ethereum-contract-program.html","33a53a10b3ffe1b8a0cebef8cf1559de"],["blockchain/ethereum-programming-introduction.html","e4a2db5ca3b7db01104292d2e7369218"],["blockchain/ethereum-rationale-introduction.html","cc8e61233435496f2efd28218d5f98ea"],["books/index.html","5de60c65c166dbd468088287e44f706f"],["categories/Blockchain/index.html","957df4d6743792c9519f723c3334e709"],["categories/Blockchain/以太坊/index.html","8c5b9197231ea821f6e1a5b8757c2b9a"],["categories/Blockchain/以太坊/智能合约/index.html","1f5665e8cab5740ae3d95232575f7a18"],["categories/CSS/index.html","5d47d1b154c20d2261abede1e9a2155b"],["categories/Design-Pattern/index.html","303045bdae60b7412726e0bb742cd7a9"],["categories/Git/index.html","caef8b5f5073071e06947b459bfd6d67"],["categories/Java/index.html","2aee62d4d82e55c9898a8fbe7d162eba"],["categories/JavaScript/NPM/index.html","4fd5568076f92ec14f371ac66e7045a6"],["categories/JavaScript/Vue/index.html","cde20105a3c1c4b6e6c07c034a65a52a"],["categories/JavaScript/index.html","c2a82ae86a784540edb4b028889f3c0d"],["categories/Kafka/index.html","ba527911ab82fb84f1f0cbbd4c1b341d"],["categories/Linux/Shell/index.html","b03103d10bc217bec4f35132b14f331d"],["categories/Linux/Ubuntu/index.html","fab9f246cee9687f4b67422dc530998b"],["categories/Linux/index.html","866dfb353029e045d82eff12e01be480"],["categories/MongoDB/index.html","5d80560b1e02e50045370eeaa2f81730"],["categories/MySQL/index.html","9aeea2cf976821c216db9f6ab406f854"],["categories/Python/index.html","529ac0ad86824c017966a20da03cd6ae"],["categories/iOS/index.html","ade29006d2aedc06108a6e56d2363dc0"],["categories/index.html","120e4314118a038670067fc6c23451d6"],["categories/微信/index.html","aedd3d8e5b062d692dc43da3ec0efd2a"],["categories/杂记/index.html","056605134d267cb9cc63947f1270536f"],["categories/程序人生/index.html","c1a8716bb948525ad59be7da7d83dcab"],["categories/计划/index.html","d8c5e44d0f8f6db2116ebf7cf842fb1c"],["css/css-font-note.html","69341bcff1645997fbd2534430b0b154"],["css/css-normal-flow.html","4e04422cea34f8f53442cfa1462e0f65"],["css/css-sass-introduction.html","fa553a44f0cd5c527863140479d9b207"],["css/main.css","b44d910413709e119e8472ff9916cb53"],["design-pattern/chain-of-responsibility.html","8f22856678c14b5e69577b234f67d751"],["design-pattern/delegate-and-proxy.html","d0a57c59d4449d1da161dd1478f64910"],["drafts/configure-multiple-vue-project-with-nginx.html","9f467202127b4a4a14a203c5d996bcf6"],["drafts/iframe.html","d198617feb176f8cb47109a4f363693b"],["drafts/record-re-install-mac-os-10-12-6.html","e3a4b46ec2fd92a76a513cf20b08288e"],["essay/note-ximurong-tree.html","cac91c3c192cf0709e33887b57a83fdf"],["git/git-DETACHED-HEAD.html","08026fcbbc30c0122ddce769b51a2376"],["git/git-branch.html","e99040041761b2556cb07d625407dd66"],["git/git-change-server-password.html","72c5232d17ad614d0d3eba33ac7620ab"],["git/git-checkout-1.html","a40e1f777b0131bcd002520ddd8e7d8e"],["git/git-checkout-2.html","3dfd60e5ac5953f66872112e3a6f7f0b"],["git/git-diff-m-symbol.html","3465a33e76d9f5dbf6971717d38fce87"],["git/git-git-flow.html","e407aea5582747de5481fdb998178686"],["git/git-git-merge-ff-no-ff.html","4cdf255ec3695a30ef3599adb9515e57"],["git/git-git-merge-true-merge.html","68414592283d7167f864ccd40c6de4c0"],["git/git-gitlab-flow.html","5943ec285e57e6069f8364a6b4944d47"],["git/git-index.html","41eef936e8046eb9e039577558375bc9"],["git/git-merge-choose-one-side-code.html","66d1a3dc82f116f09d375d047cac90d1"],["git/git-merge-exist-conflict.html","d21f74f059c46d98f2a8dcb050e2a4d7"],["git/git-pull-1.html","27ea3e0b4dcaa4986ee9ee4a66da4384"],["git/git-reflog.html","c7650a8558c7e85aca7232cb4529e977"],["git/git-remote-set-url.html","a5ccf80c3969e6c369307fad0fd9afb3"],["git/git-reset.html","49a4b4764f0623ae27d1b0c71ac477db"],["git/git-rev-parse.html","10e0d3dfb709851a5997b4bddfd4ebee"],["git/git-revert.html","4b23cba16833ef863146b8ff264bb5cc"],["git/git-tag.html","26f86bfa767785729045c67520a117e3"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ebdaa062e7c8a552105fbe5ecbdf984c"],["ios/ios-oc-kvc-1.html","321907d1ac6b49746470885650134554"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","7abc54b807342fac9647705369704e99"],["ios/ios-themes.html","41c546bc445eb67dbca26f05eaf71d3c"],["java/java-annotation-request-response.html","6fac8fcbc4aa8421732a2236476e68dc"],["java/java-array-and-container-note.html","e2efb7a0a1bb4fabc9bb440f1ef61e25"],["java/java-deploy-resource-folder.html","5a21e0aa8e7e37a25cc11922b4736cb9"],["java/java-jps-note.html","9ab7ccfab763f4e94ef4807522894c1a"],["java/java-pojo-bean-note.html","c03c3d8aabc9b4c5eaed6bd8f0db4efc"],["java/java-shiro-note.html","1bbd966700c3b7ce2b3564b83541db9b"],["java/java-shiro-springmvc-integration.html","d51203d490bef4273f9eb620a96e19ef"],["java/java-spring-autowired.html","8e517caa4d537e9e7842a617aa8e266e"],["java/java-spring-configuration-bean.html","353b4860ec8ab24b3e5bc5791847d154"],["java/java-spring-restcontroller-note.html","01565eb0830f846fddef4d036a54643c"],["java/java-springmvc-X-Frame-Options.html","c803fae4943ec7c3d86c9ed34621dabc"],["java/java-synchronized-note.html","c24a2d4533bfeb2a9db882a354747de7"],["java/java-value-pass.html","a1a677ad37fe38ccdcf2960f8b004219"],["java/java-vo-dto-pojo.html","febeb92494da5984c336d918aa635473"],["java/url-rewrite.html","947ff8ffcfa287780e31ec3ea198a344"],["js/js-logical-operator.html","830d81d2339b3b9533f2111d715e7175"],["js/js-npm-symbol-caret.html","f79caf43fa3fcfc50390f06c655c8a35"],["js/js-npm-symbol-tilde.html","6a30f3d72a76fc0bbd6375eccf58be26"],["js/js-this.html","13cb525ab82df2f86dfcb011183a9297"],["js/js-vue-note-components.html","a9f0ea08371eaa27148fc3e9344438fa"],["js/js-vue-note-computed.html","261c1aed7416a69332cd7d6e2e53219b"],["js/js-vue-note-css-style-binding.html","ae4e77400bcdd3d06882fbdcacc7afab"],["js/js-vue-note-directive.html","4c701a034866c6f8088766eef3eff533"],["js/js-vue-note-instance.html","6344a9c591ebaeff1443756db425af5b"],["js/js-vue-note-introduction.html","b8b0698a32fdf4fc91d336f2d2fdc762"],["js/js-vue-note-syntax.html","cc2f371dc7bb99bdc9fc6d40b912a7a1"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","6256be5a52c0f108d2adb79dace14191"],["linux/mac-find-port-occupy-process.html","30f3f776a0224d1227ff27fb8e9571cc"],["linux/make-vs-cmake.html","a63f64822ceb471d74737eca048fe98f"],["linux/shell-command-awk.html","a349a892e1ea4f8ac359d0dc7650180a"],["linux/shell-command-df.html","b8a4e4d78782b584bcfd5481013bef5b"],["linux/shell-command-du.html","d638313e1e02ca9e85f68ad548c6e704"],["linux/shell-command-netstat.html","63fda9c02f523c0ed8e8c6bb9d2eea95"],["linux/shell-command-sed.html","8dddcce04e16f983c2f177c1fcd107d2"],["linux/shell-command-tar.html","08924b99b27e7f643704a1ce2aafb3c8"],["linux/shell-command-top.html","e0c7bf8ff71c23a802c3bb4de247cab9"],["linux/shell-command-touch.html","95171859680f841c47624d75adc47738"],["linux/shell-command-which.html","20e7340c4e5911653e3fb473d596a6dd"],["linux/ubuntu-user-add-delete.html","f68103357513a178b07753d196784611"],["mongodb/mongodb-collection-aggregation-introduction.html","31dffed35ce1d4c3fc0ba96598ec262c"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","22735a77d87e17365e7da35f5609922e"],["mongodb/mongodb-collection-create.html","a7c601fe8efc759a1d65a29036873b30"],["mongodb/mongodb-collection-delete.html","b78d4a601a83fb12120b6bf176edec96"],["mongodb/mongodb-collection-find-1.html","a7c6a16d2c1845ccc62a9f6f1d297cc9"],["mongodb/mongodb-collection-find-projection-operator.html","7f0cb60fdec51b5d31510cd85562a4c3"],["mongodb/mongodb-collection-insert-1.html","fd0a682820df4aba422e87bf1d3596c7"],["mongodb/mongodb-database-create.html","2701d4f0ea7c2547e03c24182a518d93"],["mongodb/mongodb-java-driver.html","4cce2cf6e539bf09dd7bbccd4bbdc7e7"],["mongodb/mongodb-schema-design-note.html","78419fee6ec6f3712d2f6966de45fcbd"],["mongodb/mongodb-study-note-1.html","6b84fffe92697de8eec831bc509aee6b"],["mongodb/mongodb-study-note-2.html","a8b80f063bfca2366be53a917034df6c"],["mongodb/mongodb-study-note-3.html","a40b66ae6fb8d0f79a826ea220b3506c"],["mysql/B-tree-note-1.html","3183ba1d8a04da697a67ae9861362cd6"],["mysql/clustered-index-mysql.html","f9763e3c821803653d1f5b4b1752f028"],["mysql/mysql-ddl-handy-book.html","87ce94ed0c29d0d3fb78469073d5e2b6"],["page/2/index.html","5810a6b1c9c2a4a7c24d490fd07d18f5"],["page/3/index.html","2c236b9d200c8ef30e8282273f3a8cd8"],["page/4/index.html","2fd886b0f1472bf6d72c954fbfdd0e98"],["page/5/index.html","e8995bb41510c13b7369f9821b813eea"],["photos/index.html","2561f17e6068e3fbb0b83a593ff7a7a1"],["python/python-args-kwargs.html","521b01f8d1008644bb0065f2e09fcdd4"],["python/upgrade-python-under-ubuntu1604.html","68a15dd41872e1aaa4536caf0aa22fcd"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","84afa7ca5a596f63f3200f216ec08d8d"],["slides/index.html","a908dac1f2988f114e5611b873d5777f"],["tags/Autowired/index.html","70e80e977ee07780d6148f963428459e"],["tags/B-树/index.html","867ba4e78f98cef380f3fefae6977778"],["tags/Base48/index.html","795056b685d82e86989f126fed646aef"],["tags/Beans/index.html","008a7f774003a4b22098f2c459a45e79"],["tags/CSS/index.html","896b810368497fe5b9418674ad351185"],["tags/DETACHED-HEAD/index.html","37add663cc0f081db1e43720533941e4"],["tags/DTO/index.html","8bfbfa0481399c207965af65b8d1bdd4"],["tags/Git-Flow/index.html","a85e774389b657e18d96316af5d9bc9c"],["tags/Git/index.html","b123a65bac72952c6340d5d3ccc45e34"],["tags/JS/index.html","7c600d46841af27cd34f2ce631fe5b30"],["tags/Java/index.html","2866c07e1831629dd7afe486770c1e34"],["tags/JavaScript/index.html","9fe56f189aba5588851dd4dea253c4db"],["tags/KVC/index.html","67d0f546a5a26e550029be5e3fe70ac7"],["tags/Kafka/index.html","c1d04c64cc3014ddc5c70e59018b8816"],["tags/Linux/index.html","eab293e0139ec060433cb2f70aa64d18"],["tags/M/index.html","5f8f9a72a7d1770dd6257f99df1b68af"],["tags/MongoDB/index.html","8313e425dd74011a88f03eb50cf03e55"],["tags/MySQL/index.html","81c08e6f1af2618acb0ec57b0295d042"],["tags/NAT/index.html","3799fcf0695bb64a36a4cd36526bfeab"],["tags/NPM/index.html","78994ad908098e00e281ae4258335e69"],["tags/OC/index.html","3ce749656d47df199339389af4b6499c"],["tags/POJO/index.html","a5cc292a748df8084f23e42a99e820b1"],["tags/Python/index.html","243db0109062bc55871c8df544ce40a7"],["tags/ReactiveCocoa/index.html","7035888386b7b2bf247362df78bf9fb2"],["tags/ReactiveObjC/index.html","9f0c14505367257843278661d43306a2"],["tags/Repository-not-found/index.html","c6bafc098dda609cc13786a38f06954b"],["tags/RequestBody/index.html","873cba9890ede4d93a6da835e1d9a370"],["tags/ResponseBody/index.html","2f56635c4ce42d500e50fb0a1cbd1bb3"],["tags/RestControlle/index.html","84db5f82038b6da9b3373c4f6e60efb4"],["tags/SASS/index.html","7cb901fd9124515ce56d4a2b8d24c57c"],["tags/Shiro/index.html","573df937fd454caf4beb859f86d75f94"],["tags/Spring/index.html","167cc3e7e5d8bf5e8dc716ef59f1bd7e"],["tags/SpringMVC/index.html","3744b210c521d992b88120286fd3f055"],["tags/SprintMVC/index.html","096df53e9baae8d4564d72207f90067b"],["tags/Style/index.html","7321eaeccca7a754e18801732a7ce606"],["tags/Ubuntu16-04/index.html","b3bbf22a4ae6a57d7a40850e1741cd6b"],["tags/VO/index.html","8787e236c6831c6c0cdb2fcf196c7d6a"],["tags/Vue/index.html","52bd18d11cb564c3fa6d30795b0b2407"],["tags/Workflow/index.html","f731d7d1efc46aea7aeb5f799a6cbcf6"],["tags/X-Frame-Options/index.html","659d7737211f6504b8121c5b65b8878b"],["tags/aggregate/index.html","afed159a50723890c77f97d5229b3610"],["tags/alter/index.html","1215ab6fadb499b65455f99bdff68467"],["tags/annotation/index.html","02e73fc51ad2d9006afd920fc7e4974d"],["tags/args/index.html","671265b497bbe971cd3fb65fb584d2ca"],["tags/buffer/index.html","651b3540f9de8a9287ea096c54254972"],["tags/cache/index.html","63ae367bcc6bb0f2e39916a662d11cc2"],["tags/change/index.html","249786888cf21f321c106687ba328b01"],["tags/checkout/index.html","025d9720f5971bee94fcc83e511806fa"],["tags/cmake/index.html","7a23d4112251ecfd7bcbf1a423c6cc29"],["tags/collection/index.html","da488465f1d053530e522c78aed6725c"],["tags/component/index.html","5d3a65701fac5b4d5879da0363146f4d"],["tags/computed/index.html","50a9418df47ff46616133bc7fb7798b1"],["tags/create/index.html","50e9a8c8eb435de3274cb8e5ae8c1570"],["tags/database/index.html","3e5788f6a306e76e18ad8bbcc04caba8"],["tags/df/index.html","64506f2d328af1186b23b4132b860f21"],["tags/diff/index.html","0379ed7eb9b2b5be670cd9d88fffe485"],["tags/driver/index.html","e75d8870c28a6006eef0ac136067fefd"],["tags/du/index.html","cfcef23ba6941ca7d4b2a41938f3b806"],["tags/fast-forward/index.html","39fc2916b58af75e03ba2703c5ecd57c"],["tags/ff/index.html","e8577880bc8a679f71f555b6ac1ae219"],["tags/font-size/index.html","b4340b9ac4ac7c3e8b30e5ea0ec05013"],["tags/font/index.html","2642f57e6e73ae6cb4a92529ef2b8d1a"],["tags/free/index.html","d39720af2bb56a3252b8a5f7ad9f7c8d"],["tags/git-branch/index.html","2a756aef44f8653ad4dad49f41aa64ab"],["tags/git-index/index.html","7a6632c89cbb282769b19b1f817e1c5c"],["tags/git-merge/index.html","9f81c87172d1b24f4f7889b4e158a422"],["tags/git-pull/index.html","ec067a47440c40318534b6529e569e5d"],["tags/git-reflog/index.html","a9fd9cf4b15edd8d0f5301bbbbe39130"],["tags/git-reset/index.html","0d5297bbb55dc1ba753cc4cd464ae4d3"],["tags/git-rev-parse/index.html","80a8b3832af66ceec73c5e0ab5693835"],["tags/git-revert/index.html","5c0c2c4cc32572adda5c1336bd0b218e"],["tags/git-tag/index.html","8809de059beaa646f0a61f2dec9e31b6"],["tags/iOS/index.html","cba82e4d6ae51c45be4139d3cef8dc84"],["tags/index.html","895fabeb11ddf4954b18654c5440d56c"],["tags/jps/index.html","6d9e4a0e75954564357b2a6e18955bb9"],["tags/kwargs/index.html","4876af966136ed965de97188282ba430"],["tags/mac/index.html","b7ad0917c0fbdfc8a41ebdcbf0fedc0a"],["tags/make/index.html","92236008189c53c4bf45e081e1b57f91"],["tags/modify/index.html","87fe449ddb260fe416cd2144348b6885"],["tags/no-ff/index.html","07b00643888632c2cd632acadadecb25"],["tags/rewrite/index.html","9831339f4cbf72b32fc6a8f01012fd7c"],["tags/schema/index.html","dc228b6f324bc31ed091250c5b02eccb"],["tags/shell/index.html","4886dc0a5e92838468da253ec6f1c88e"],["tags/synchronized/index.html","c2c73e1602182fc1068271b206635f2d"],["tags/this/index.html","32ea83e88a530a06d5354ad74fbcf0c4"],["tags/tomcat/index.html","c8782315a594cbb1a0f08848233d2e8c"],["tags/top/index.html","00bc4db33d53d382da1855418b75c024"],["tags/true-merge/index.html","f58bb34ad63917b3cecafcf13fb5cd27"],["tags/url/index.html","20a6f7b34a677fdeb2427711104e13ff"],["tags/windows/index.html","6b65bd4e7e0509c15d713148db0202e6"],["tags/一棵开花的树/index.html","b1e00c953de38be22640f90420494915"],["tags/主题/index.html","137ddfe00825950067d92ede2fcc8259"],["tags/介绍/index.html","9540d8a4906654f8f797efaa5e004b8b"],["tags/代理/index.html","099df4377ddde270850a6f9d94f7cffe"],["tags/以太坊/index.html","ba19fd7e462fbf58419bc623232c15d5"],["tags/依赖包/index.html","7136b55d039efa743c454f2a9633a57e"],["tags/修改/index.html","cab5c26e0c317a21f15be2327accdf31"],["tags/值传递/index.html","bcf12a66d75dc6739e9913ef903c3712"],["tags/冲突/index.html","6da42e9e054b25d08c01402adfc9fa96"],["tags/分支/index.html","078989c52318d6c9338e5a43d12da699"],["tags/创建/index.html","74cea9f7b64903623f8cd69c60d550b6"],["tags/创建数据库/index.html","e0a5aa2dd7ae01f3bf696fbe004052bd"],["tags/区块链/index.html","2a93d03203d22b3a148d42b98091e120"],["tags/升级/index.html","9eba28c107b3e041665c72fec76e96a4"],["tags/参数/index.html","d0d045c5b1cef3e836d4794d0871f2c7"],["tags/委托/index.html","f5c61e08679ac4426a0165e5aa3a805a"],["tags/存储/index.html","7c846a142ed7cf19009afb10a2416dd3"],["tags/存在/index.html","b884bc67a22f34b43f9d5f457a579600"],["tags/学习笔记/index.html","485e14e8c43949579463d8c57e8290f3"],["tags/实例/index.html","01104bcbec66aa16faf68119327b8754"],["tags/容器/index.html","7925c49b1534dd145146228d74009bc2"],["tags/工作流/index.html","cffbbf0cabffc121ad7aa4ea3c9d3f44"],["tags/工具/index.html","f45a41f3bec328e3a8492ad9e1329761"],["tags/席慕蓉/index.html","66bf62fc8f20551d225d5e4a8788c1fa"],["tags/微信/index.html","440b25a50e51147c5a33cc3756c72f43"],["tags/插入/index.html","acbfa01d4177d75d69b754e24cbbed21"],["tags/数据存储/index.html","e0e84d8e26517a764823dc62c17048d9"],["tags/数据库/index.html","b3a256f61c8fcf4e915a342d4c1e02ed"],["tags/数据集合/index.html","5f6af62670ee1bd5518838f1d678733d"],["tags/数组/index.html","b9e74292c69664e73b552b1b355c44cb"],["tags/文档/index.html","13933e71796fd7189bcbea99086e0e09"],["tags/文档流/index.html","9b0f7ca60be8e812763c9aa12b99d1e2"],["tags/智能合约/index.html","099b3b0b886705b9696a5856fc96c82e"],["tags/标签/index.html","2b422ed1d77a1d420c713eadc17b5645"],["tags/模板语法/index.html","cc6acd648f160d8142fa12d66e585c24"],["tags/比特币/index.html","419bb4b57d8f52f6e4e1d725973eab66"],["tags/波浪字符/index.html","d0884ae64d19787538a2036cedb8ac5c"],["tags/注解/index.html","22f1714c1c32838f061aed79408c56c6"],["tags/用法/index.html","93ce62de2f7bbf786edb7a643962a79a"],["tags/穿透/index.html","4d750685982639fdb05db8d5d5cf6106"],["tags/端口占用/index.html","d55d6f6b4181e06dd312571df0dd3f91"],["tags/笔记/index.html","381ecb21802e27493ee71c590cee967d"],["tags/符号/index.html","59050a9696d21d0165dd90b2eb7940f8"],["tags/组件基础/index.html","332cd68e163518ec95409c32479f514a"],["tags/绑定/index.html","4fa51d6602b3bd8863e686e2a12ae661"],["tags/编程/index.html","4d0775d7ca8fc103ddff88368d70f218"],["tags/职责链模式/index.html","49f6032908d1b494d1c191156a3ded28"],["tags/聚合/index.html","ede3c1e416bbb4c5e006a3587b5f73a6"],["tags/聚集索引/index.html","b7fea601c0848e96e563603adf97c78a"],["tags/自定义指令/index.html","8cba47d531b2ef30a82141fcaab2a647"],["tags/计算属性/index.html","44ee83c47184519848a79b4dae174fe8"],["tags/设计模式/index.html","edb1fad3989adcbe70e81d7fc4a571b9"],["tags/进程/index.html","65ce7bedca878738be883e3dca31d13f"],["tags/远程仓库地址/index.html","dff1ad36d4eafbf48a17c47727bd65f3"],["tags/逻辑操作符/index.html","6e4c235b0f03805765bec3785837d026"],["tags/部署/index.html","328e88aa53da330c2c449e882e019ef2"],["tags/难度/index.html","f3a4b375f40f80927cbcf4ddd32eb4a5"],["tags/集合/index.html","2003f561d526eff6eca710d83f3de81f"],["thinking_in_programmer_life/full-stack-programmer.html","d3201ad4dfdeb97bad136b71d0614cf7"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","4ecde72ca3afda599f58dc9ba53ae68d"]];
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







