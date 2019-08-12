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

var precacheConfig = [["Kafka/kafka-introduction-note.html","300c50ef9d6c913b528cbee2fcd1460e"],["Kafka/kafka-storage-principle.html","b270c7740edf2882489a72085bac5e43"],["about/index.html","e3d3617e25e3eb764c2e566833e29465"],["archives/2018/06/index.html","2a8883d16773705a16c504656298297a"],["archives/2018/07/index.html","3bc105df7bb5d092daf7b3038e9f0262"],["archives/2018/08/index.html","996ef842df7488bfc32498aac7154d0f"],["archives/2018/09/index.html","816a36e6c0f4d176346fb6abead4f1a1"],["archives/2018/10/index.html","ad7eb4a7d37e9437dca58844c8b6db28"],["archives/2018/11/index.html","1c58e37c1a277fec295e5af4e53db423"],["archives/2018/12/index.html","6b60524fe10e9c007379bcd111645ca1"],["archives/2018/index.html","1e0e3dd44b4d29caeab3bf9bc37b78b3"],["archives/2018/page/2/index.html","e8522237d506ac9c41aeff1566dedb72"],["archives/2019/01/index.html","76eb7f95769d9223ea776cca3ca8c5fc"],["archives/2019/02/index.html","66e50008306a42729ce0e04ed6c47883"],["archives/2019/04/index.html","e47a802e001b0703a61472cbb3735aba"],["archives/2019/05/index.html","5c3dc0f63f99450847f2b2fe73d998c3"],["archives/2019/06/index.html","6da3e0bd158ff9350e30c8ef1ba6902e"],["archives/2019/07/index.html","d7257f0411da42ce964e27b0cc418288"],["archives/2019/08/index.html","862735c6dc122c7a09d32b34dbdac362"],["archives/2019/index.html","d9218cf0819e98ddf59811c100ce4d1f"],["archives/index.html","8ac75fd83342faaf1069597107b42aac"],["archives/page/2/index.html","2a2e51fa45bf42e6c9b92ef0c18ec4bb"],["atom/index.html","191bf8bddb7608ecae6ec662f96e3eca"],["blockchain/base64-base58.html","15e9b5596ddc9ea96e638cdfe9d8435f"],["blockchain/bitcoin-data-storage.html","789002fd0bb3c7800938fc3aa1a37b48"],["blockchain/bitcoin-difficulty.html","86b1bd6b6d8540e0ea569c258a97e139"],["blockchain/block-chain-ethereum-contract-program.html","571e3bf4c49e41888ae6dabfc4658d96"],["blockchain/ethereum-programming-introduction.html","6f9ff56d60a6522d3200d40906e9e518"],["blockchain/ethereum-rationale-introduction.html","7150f64fd2392be9da9090c1c1381ddc"],["books/index.html","90f6fbf1b96b7ebd90b808181bc82734"],["categories/Blockchain/index.html","1f3735988f9104bb0833242b19a07f7a"],["categories/Blockchain/以太坊/index.html","99ec50e20b76164dec2554b5afaeb256"],["categories/Blockchain/以太坊/智能合约/index.html","6bf36255dbfe23675fe9154d4801ee33"],["categories/CSS/index.html","bb362d65188f314c5dc09251c09a3d73"],["categories/Design-Pattern/index.html","96cc05d55a0f501e4101f6b41fbb8344"],["categories/Git/index.html","c4d700b859e66d53d3d9705920dd87cd"],["categories/Java/index.html","b71eae7b8a0983414bc3bcf7bf27a788"],["categories/JavaScript/NPM/index.html","83cb8b0b0e90dfda159e18dd0c4b5c64"],["categories/JavaScript/Vue/index.html","20084f677c7df3654bd258e1d26974fe"],["categories/JavaScript/index.html","1ced40fa44dc97483d2800f89cd613cd"],["categories/Kafka/index.html","ac2543b7661918f672d459fd67ce77fc"],["categories/Linux/Shell/index.html","97baf9c0ea6c36c5de6559e130b6df99"],["categories/Linux/Ubuntu/index.html","0e433cddf8ebb17d38af691e340fc712"],["categories/Linux/index.html","cdd85dcd9c1736cd59e2655a6dbad95c"],["categories/MongoDB/index.html","8f3f8bc720be16b8a6be3c408c4980da"],["categories/MySQL/index.html","4e1e5e7ae2662ff437c5aa5ed68d036c"],["categories/Python/index.html","f6a521fec89ebe5a43a274493bb130ae"],["categories/iOS/index.html","615fa65210b635a709527dae81dab02f"],["categories/index.html","a254f842b1a732917db636548b08283e"],["categories/微信/index.html","fb28a7534681785d1c6fb52683f950e7"],["categories/杂记/index.html","ce6a2a8c0140b2a647b5be52aa22c60c"],["categories/程序人生/index.html","bf7d12a33ca81f0d7745ea8097c2d3d2"],["categories/计划/index.html","67d6a9ad0292d30fb9e7a1ef896c5955"],["css/css-font-note.html","985c0f2e143aeede73e75428dce1b73c"],["css/css-normal-flow.html","49c1483574cb69248b7a71b44c4a08e4"],["css/css-sass-introduction.html","0a34cf88856807040d7857f6cab9f619"],["css/main.css","4e294c4e2774f650951b675b58a69d51"],["design-pattern/chain-of-responsibility.html","411aa300e52bfcb916d44aa760669eda"],["design-pattern/delegate-and-proxy.html","1e0ff502f6dcbc28b60da18f82309720"],["drafts/configure-multiple-vue-project-with-nginx.html","bd5bb19f9a171b90049f528878ce3fd4"],["drafts/iframe.html","9b03a2c6287fa561037ec7940c280903"],["drafts/record-re-install-mac-os-10-12-6.html","20986121c2f164993ce728f7c43f00c1"],["essay/note-ximurong-tree.html","24460bbf9ef63c2b289799e28d494ed9"],["git/git-DETACHED-HEAD.html","5642f30b550108493260794b9ba34b6f"],["git/git-branch.html","4163eabdcec653e5ead103cbf914f9c9"],["git/git-change-server-password.html","b887ecc917d48710b2bd3c87ef7ece05"],["git/git-checkout-1.html","e36c7a6260823cbaa3e3ef39c4ebad08"],["git/git-checkout-2.html","168fe27e755108eeafef934c0613963f"],["git/git-diff-m-symbol.html","13ee13b756b3d4e0f9c82ef0729d4b58"],["git/git-git-flow.html","6fdb31378796344dc95f37d17057d408"],["git/git-git-merge-ff-no-ff.html","3c09dddfd96c18da13bc9c6b14ed0b3f"],["git/git-git-merge-true-merge.html","33d0cf091c26a2c2d350c2cf2846a3e5"],["git/git-gitlab-flow.html","dcb4363703df6ef611bd75efd7798f89"],["git/git-index.html","48b06768decb462f92a9758243ba0f2a"],["git/git-merge-choose-one-side-code.html","0482d5e9cda711a97049e4ed750f0139"],["git/git-merge-exist-conflict.html","0226d2c3008b18aeaac3fd3cb696c02f"],["git/git-pull-1.html","ae417b1d031a151ea674c0d926174dd4"],["git/git-reflog.html","d6ff2b7020e8843141bed6576939749d"],["git/git-remote-set-url.html","5e7777aca916d8198efc65f7f4db366a"],["git/git-reset.html","7dd7daf21036c603fb4feadd85568a7c"],["git/git-rev-parse.html","55b5bda103e1e4da439c7f2e543b9069"],["git/git-revert.html","34aa200e4a65abb93e4a71b72705181c"],["git/git-tag.html","994313e695cccbda76022ee122eae58b"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","c7a13d1c9862a16a5828af9597e80186"],["ios/ios-oc-kvc-1.html","82b1ef033b6994c6527070cd56dcf9a4"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","dc106243323c4b2fb1e628fd0f6718e3"],["ios/ios-themes.html","adfec400249cb12b54c398396a9bf41a"],["java/java-annotation-request-response.html","dbc78ae9cc62db3500f9ed7102225ca1"],["java/java-array-and-container-note.html","9106a061e23cec49e3cf1f1b47ac16b6"],["java/java-deploy-resource-folder.html","baac5a5bd4cba8c68ebb589621b7d44e"],["java/java-jps-note.html","bee13acfed7f7e785f9f4923fb2a8074"],["java/java-pojo-bean-note.html","5503f7a3bde8a338c523fb85bfbb6431"],["java/java-shiro-note.html","932450fba32ae8894a0dd02791418792"],["java/java-shiro-springmvc-integration.html","38ce156ef44bce2059c941fce08e019d"],["java/java-spring-autowired.html","851a50c71a40e9dec7f6081577eae6ff"],["java/java-spring-configuration-bean.html","50f31797ca211f3ec70a039d2974a9d1"],["java/java-spring-restcontroller-note.html","69b38bd56a317b2a7a9151ad516f16a7"],["java/java-springmvc-X-Frame-Options.html","f261b3cec93c92e583173549ccfd6eb5"],["java/java-synchronized-note.html","c93dde7bc4193daa35405fbce05666f4"],["java/url-rewrite.html","2fee11e9a1edf6a11df8a2abde621027"],["java/url-value-pass.html","908b4dcf33c884b560ffc0668da6b574"],["js/js-logical-operator.html","5e6c146cb7488533af6464f5d12b6eb2"],["js/js-npm-symbol-caret.html","bbe32b9dede55a3b0629acdc9bb30619"],["js/js-npm-symbol-tilde.html","f582e0fd1ef943b760ba016baf0ab1a0"],["js/js-this.html","54ad79b1196eb1b388d5249febc04b58"],["js/js-vue-note-components.html","b3b7307c20b975fc4ec0e8966834e4a7"],["js/js-vue-note-computed.html","b8bb1203cc55c58312d9c6b5433238fc"],["js/js-vue-note-css-style-binding.html","760b44616d83f03dee68af3d2473cf6c"],["js/js-vue-note-directive.html","b6a24da74d131be1fb364ce22891d70d"],["js/js-vue-note-instance.html","1dc8113fe19c08cfc3b59468af781667"],["js/js-vue-note-introduction.html","22054b014810768868a9a8a39c3e4c32"],["js/js-vue-note-syntax.html","0b971da35af020de6aaa510cd53d2332"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","b48624593ac03c7f8c47ad1d7efb54c6"],["linux/make-vs-cmake.html","df85559130537e2e3ccc831359e9cba2"],["linux/shell-command-awk.html","9f4bf000a50a515171e5a5f8138f62f7"],["linux/shell-command-df.html","e7006cc254b7ed9147e743ab20ebbd92"],["linux/shell-command-du.html","e78118456eed099fdf4aa4ed37ea0e23"],["linux/shell-command-netstat.html","11c8e6edf11f6b7ea61bd743fcaabda8"],["linux/shell-command-sed.html","a6b3ce24037e9d95bd48ed2808d737f5"],["linux/shell-command-tar.html","b255cb6813827f5933d73ff3d7426ec9"],["linux/shell-command-top.html","649e56ddef9a50996bff5f0389609c56"],["linux/shell-command-touch.html","987ac6ed4fba7d9df4ac28db04478fbf"],["linux/shell-command-which.html","1ccb594fb36c689f6f77ed286fe850c3"],["linux/ubuntu-user-add-delete.html","e5754e987d0c84a50dc5bcb47912b8e4"],["mongodb/mongodb-collection-aggregation-introduction.html","992fc19c290578c63e3cdf09b0e7ffd0"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","32b4690d88988ae04371ddbb9dcf98ea"],["mongodb/mongodb-collection-create.html","40828cb445e882417dbc415ec4de7aac"],["mongodb/mongodb-collection-delete.html","379d1c24a01f96c73b437919f5d08a87"],["mongodb/mongodb-collection-find-1.html","78300a6b0a444d46482ef8d56d2e5287"],["mongodb/mongodb-collection-find-projection-operator.html","5bb396f0dde6b4ec0c4d02f102733390"],["mongodb/mongodb-collection-insert-1.html","5c40309a6478efdf157dd9b03c4a9f46"],["mongodb/mongodb-database-create.html","90def28ed11e35804253a172f143d5e8"],["mongodb/mongodb-java-driver.html","4888be75d193144078c4e3819d8b6f82"],["mongodb/mongodb-schema-design-note.html","917a7d00648c5d74455ea085cf6fb004"],["mongodb/mongodb-study-note-1.html","169f9711bc49c1dad58ab121a81735cf"],["mongodb/mongodb-study-note-2.html","9b5c2c2a9b8d8e11e0aeeaff44c3d5f3"],["mongodb/mongodb-study-note-3.html","79bc1d5c1b8a753790c321d02d6a2513"],["mysql/mysql-ddl-handy-book.html","79c0dbcc5d7cf9a1f55bfd953b967f35"],["page/2/index.html","c5546bc0fda25f0c74737a379ee2eb35"],["page/3/index.html","a6285d5ef4381aadeecffd2a4e21ddf5"],["page/4/index.html","0dcdb9d60cceeb841f73e764faefa1f2"],["page/5/index.html","614840d505374f2a49181f4371ae012f"],["photos/index.html","2250fb9ad2818fcf8d7aa76f6232c859"],["python/python-args-kwargs.html","77412a2adb31d3b12032bd352825bd62"],["python/upgrade-python-under-ubuntu1604.html","564858631d1c737e22a3c9f13934a0ab"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","cb45a5e0b4633d33aabec1f07d87549b"],["slides/index.html","6297ca14d7353945376aa6948c8fbc12"],["tags/Autowired/index.html","64fad4395799bf7bbaffa2fa04e9e0e8"],["tags/Base48/index.html","d11b790f44b748d5f4c9c35e5c346643"],["tags/Beans/index.html","06ae95881ff931aa7682a6b105fff2e5"],["tags/CSS/index.html","57e63b341f80751363ffb4e0888a2f5a"],["tags/DETACHED-HEAD/index.html","fef9112d487bf256c2013b387c651b1b"],["tags/Git-Flow/index.html","b0a1937406c2f6dcfc9031af7a9131be"],["tags/Git/index.html","3e70ec3901ee5917bb8d70f1c25c8d15"],["tags/JS/index.html","44cf2d8ce479917890001669ac9d736f"],["tags/Java/index.html","65d3641e9646b5d7a54423fd3f18dd26"],["tags/JavaScript/index.html","5c780019edaa6e4076a4c83b43f84378"],["tags/KVC/index.html","81951e5877fe917c551ff88bc067c5e4"],["tags/Kafka/index.html","c30708b00179e6dcf852e956440db91a"],["tags/Linux/index.html","85b1f47808846e96af34c7df92853bf5"],["tags/M/index.html","6a05eac8849ffb2c560f290107fa6ab9"],["tags/MongoDB/index.html","2014f975d74865842bb44e5f06d88e73"],["tags/MySQL/index.html","5b5e5d6bedf061786e6dad8f894bee7d"],["tags/NAT/index.html","3b1ca214b0f48d31ecbfe1166e12999e"],["tags/NPM/index.html","a9f85bd6df6d3243e0e420ab85b263ed"],["tags/OC/index.html","747baa723675b9d7bf516e138af6b8c0"],["tags/POJO/index.html","12a2def4e7e51f15e831f6e763cdf2e1"],["tags/Python/index.html","ca501bb97eee6cf8d100eadb54081658"],["tags/ReactiveCocoa/index.html","8833e5484b2443a29f4e867cf117676b"],["tags/ReactiveObjC/index.html","33d0c7ff883d73cce0560b7998e6d9e7"],["tags/Repository-not-found/index.html","97c4220fb3700ccdd9feaa6bdbe47587"],["tags/RequestBody/index.html","f37b4966948c06eeca5ca481298db700"],["tags/ResponseBody/index.html","b0fc1c10b61e0d696bb0cd1a05ad469e"],["tags/RestControlle/index.html","5fee1c1e08711bc4c5f5c3b8a68578b8"],["tags/SASS/index.html","44cf2b8d3cea8a57e615620629a3f439"],["tags/Shiro/index.html","681d6ebf1447089fbe23e3cf5ebb7c50"],["tags/Spring/index.html","aff062c281fd86308da5afd51027744b"],["tags/SpringMVC/index.html","b0898bb8b8e463835a4bbb37c0aa2945"],["tags/SprintMVC/index.html","6296e4bec1ffb716afd59dc26e531e01"],["tags/Style/index.html","9126f5dd6ed3de829ef55ec65f719813"],["tags/Ubuntu16-04/index.html","30ef28bcf0b893c8c29b70a9252f61ea"],["tags/Vue/index.html","5f86de58b25a61138cd5c523db23d6f9"],["tags/Workflow/index.html","803fc7a218e10f762585c054052f56d3"],["tags/X-Frame-Options/index.html","0944cc63e8527717400f431e279d2b79"],["tags/aggregate/index.html","e363b17459cce8137d4abd5e2169f344"],["tags/alter/index.html","3a3dd65219633c784d4aa435b2746b06"],["tags/annotation/index.html","44a68846cde83a222c559e1230641f8e"],["tags/args/index.html","5b4d77f24c8bd4e6da9a26d2dd2fe0ef"],["tags/change/index.html","30751392e5cdcf54da2b5907d6f1c913"],["tags/checkout/index.html","e153c3b606c6d6bb2d54987cd5043249"],["tags/cmake/index.html","aa0e19f0669003aded3d39e827f8b974"],["tags/collection/index.html","8ca9dce6a897758210b865860077f82a"],["tags/component/index.html","d62c7f5aad51e9071735fabac142a854"],["tags/computed/index.html","6d9eab8fb59f325a75b61c43bf1ea5d3"],["tags/create/index.html","e98862dfc7244339d4502079e7657dbc"],["tags/database/index.html","8826e7f74b2dcf1f691ef349992d8bb7"],["tags/df/index.html","5e2906201f7d12f2359e83806f12103c"],["tags/diff/index.html","f389d08bb74ee49a96f45d525aade406"],["tags/driver/index.html","886add93550de1d6cf291cb07f0e4a58"],["tags/du/index.html","15b0ff2c56bd070e93b42d8eccbdd0e1"],["tags/fast-forward/index.html","62ad84bc8b13368129be5d74d0de6493"],["tags/ff/index.html","9f98fd9b68ad1a60e143eae6cb6e03d9"],["tags/font-size/index.html","41f1dd27e07f313f1192762c4ba0a3cf"],["tags/font/index.html","36337d444405137b28aa2f01f8709a19"],["tags/git-branch/index.html","dc1e09a5af8fa6ccc8c3a7441cb672f2"],["tags/git-index/index.html","6d5048edd356a12c0595a5246bd7144b"],["tags/git-merge/index.html","0a3f611a36e43d77879371dda60fd3b3"],["tags/git-pull/index.html","5b0ef4d122a86334dd61b4975dc0762a"],["tags/git-reflog/index.html","fefcb0ace7584cc0297977893fd69a59"],["tags/git-reset/index.html","5970ee544d6f13af8f275bc440593601"],["tags/git-rev-parse/index.html","2067b82a6226f8956eeded4a8d886f63"],["tags/git-revert/index.html","1bba1d690687589b07802d2027b021d3"],["tags/git-tag/index.html","23520ccdb875dfb65a439489a1356429"],["tags/iOS/index.html","af0228fc70c51d70d258b4d33cfe8870"],["tags/index.html","bf0b2f8c1cf1e678eb7ab048dada8713"],["tags/jps/index.html","29211ed548acf0ece5ed3b5f9ab39c0c"],["tags/kwargs/index.html","a7a67a48d377a554f145887c4e682eac"],["tags/mac/index.html","07116fffc1afb0103c51f95015e2ac8b"],["tags/make/index.html","7eda7b0b709fa3f097d5e910419aa893"],["tags/modify/index.html","6662c181a64d80c8672d924146c6b398"],["tags/no-ff/index.html","0a1cf8ef95c3392b179a8e7df4112808"],["tags/rewrite/index.html","56e21e3affd2075205602fe1f6bcd254"],["tags/schema/index.html","3672752bf16d9ffca449783c395554b4"],["tags/shell/index.html","f0ffe73215132e06bad8889d3e0e6514"],["tags/synchronized/index.html","2b40046b56610efca5ca16857e791809"],["tags/this/index.html","ecb5ac4c4f3a55d4a4c986567dc60ebf"],["tags/tomcat/index.html","0eae31e1ba5a29f81c6e0a6d59bcaee6"],["tags/true-merge/index.html","51d085fad378206dd3ee8022cbe84ae1"],["tags/url/index.html","95351944878ba0ac820b828bdd522921"],["tags/windows/index.html","85d872ad138cc21feeece2bd8a4bdc7b"],["tags/一棵开花的树/index.html","8c9ce7e9c0f75e13b910d429db09569a"],["tags/主题/index.html","f5d8ce9d2e33820c063645841bc3b7b5"],["tags/介绍/index.html","cd5a8646567da2b3247113118e519625"],["tags/代理/index.html","d4760000894f1d9c52b9018b0004e179"],["tags/以太坊/index.html","1729a1047a9e7df9bfcbab57deeb444f"],["tags/依赖包/index.html","08716c0fef23ea34c78c1b965ef2659b"],["tags/修改/index.html","f9709308c151faa251b491b4935e49a7"],["tags/值传递/index.html","7d594882b35af4f7dfb4738209f3b239"],["tags/冲突/index.html","473913453c98eccda788b00a13288b9a"],["tags/分支/index.html","2a69afdefa70ba4853af904539977b75"],["tags/创建/index.html","345b4a11a9709c6c0a50fccb46325a8e"],["tags/创建数据库/index.html","55f189a0cf0330ec9c75d3aa963a4b28"],["tags/区块链/index.html","66d7ed1c92dc940a69be0d8d125917f9"],["tags/升级/index.html","95d98baeedc6dc61dfb38eb72ff23239"],["tags/参数/index.html","2e883cc2b79d7da94cccb23ce6cbf54a"],["tags/委托/index.html","c83ede9ce3968ae5f222e3fd10f6ca65"],["tags/存储/index.html","e2748954ee51c5d446d349e0bfc7b929"],["tags/存在/index.html","559424155dc2d8c894217d8120af2d08"],["tags/学习笔记/index.html","8fe4e90b2be3e4aec985d32d3e68a32b"],["tags/实例/index.html","cb0db346fdc5890cdf501d36ecdcc3b1"],["tags/容器/index.html","980e1795f6eece026978d5befd2b8d12"],["tags/工作流/index.html","86a9e32ae5caf4db680e1eaf7044a27d"],["tags/工具/index.html","227df8eb930dc16afa6b31d77db7a8c5"],["tags/席慕蓉/index.html","aa036a36f9307131d25d79850a3082a2"],["tags/微信/index.html","199f02833d1c075e35a60dbb0ac40c11"],["tags/插入/index.html","ec1ba99554e6fc53e490ce38f59e6726"],["tags/数据存储/index.html","77dcdcac471bc08403be503fa394aaa8"],["tags/数据库/index.html","a8ec38197b98e06e51ea88d3572c6a8e"],["tags/数据集合/index.html","28b6faa627442bb9fbdf7f2b8be6ae27"],["tags/数组/index.html","32baeceaf2686e5f8dfae8e48036a55f"],["tags/文档/index.html","1366b2e4a09c2d213939aca7d477b95f"],["tags/文档流/index.html","117b3881474b24b630989ca26f892dbb"],["tags/智能合约/index.html","594193c57abf24b17399504aa72181c2"],["tags/标签/index.html","41af22f92ad84807502518b17b62e3e8"],["tags/模板语法/index.html","4e26e87bdce08acdde5df84438efaff4"],["tags/比特币/index.html","425f4770d5554a225f4f367bbe0f572b"],["tags/波浪字符/index.html","6921d061b101be99f19e7efcf0c2c6ac"],["tags/注解/index.html","3b95c7933d1d328797cc2c3fa1ae8543"],["tags/用法/index.html","957fc01c8fc1ffeacbc05615f979f239"],["tags/穿透/index.html","98ede58c424c4ead03de568fae5c54e7"],["tags/端口占用/index.html","98550d20340d4505d409ee15dbf0984f"],["tags/笔记/index.html","2e2473f3bf867376240d43f2f8b3dd12"],["tags/符号/index.html","b7ecf1aad08a4568bcd309bf9513f0d3"],["tags/组件基础/index.html","405405c77feaa40eb8c81d730fe1ba59"],["tags/绑定/index.html","b02dbcb04b43cedae34166d3d02185ec"],["tags/编程/index.html","91e80503754f37bfe4001dc2fe90d09a"],["tags/职责链模式/index.html","6b35c317fc315dc91f08d6794785b358"],["tags/聚合/index.html","d1a246384729d7c0b2b49a117dcd8686"],["tags/自定义指令/index.html","47543dd59252d2e9661cc227346b4539"],["tags/计算属性/index.html","87cef076bfc1df959409e77ac7ad2bc4"],["tags/设计模式/index.html","2fa4cf2b43b224b4c62f7c5af9ade01a"],["tags/进程/index.html","fa7ce3cb6ab5da3084be835567cc6c2a"],["tags/远程仓库地址/index.html","aae6c2cc1e1821c5ae3f96faa3df4573"],["tags/逻辑操作符/index.html","93026cd38156f12ab04aa7676e15e976"],["tags/部署/index.html","6db9bcd705e313c3768d814f46e79ea6"],["tags/难度/index.html","8ca242ea18dbc57f5f4254d52d82e69f"],["tags/集合/index.html","fc6ee2e497425714de6402ea4243c188"],["thinking_in_programmer_life/full-stack-programmer.html","427f84f25ad5e1030794cf2eaabd2e9f"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","24e76eeec8ba344d21b10cd23e0e58e7"]];
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







