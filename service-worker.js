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

var precacheConfig = [["Kafka/kafka-introduction-note.html","5985629a54ef74e032dcb2dbee817c9b"],["Kafka/kafka-storage-principle.html","49c511990b9930c9066a30f04ead0019"],["about/index.html","c32bc06b7d32e2f9852435fea4754841"],["archives/2018/06/index.html","1452ec4fc67c36a347471541ec5c7aa4"],["archives/2018/07/index.html","8f6fa081579f21354fa400d039ec12be"],["archives/2018/08/index.html","eb79e74f54f64d8d9454afaf3c7222b5"],["archives/2018/09/index.html","3746d35ff639d8b4212a3a3b50bf2351"],["archives/2018/10/index.html","62130cca3f652c74d6b4e4afdddfaeb8"],["archives/2018/11/index.html","6a471e758a9287dd18b688ec19428cac"],["archives/2018/12/index.html","e082a98a27f6fe6af0c8eba274d82016"],["archives/2018/index.html","c4d3cc67ab11b5bfec350ffc4a438a9d"],["archives/2018/page/2/index.html","8b810fd9e78f7dde6ee661f2344670b0"],["archives/2019/01/index.html","2569bfa0ca36115bf3c38fee52c75bae"],["archives/2019/02/index.html","114f122e7d652339bd0983c30d2f33c8"],["archives/2019/04/index.html","2968d2587115918a61a10db48f07b8c4"],["archives/2019/05/index.html","950bae376cebec30c72faf0e89c498f7"],["archives/2019/06/index.html","ade3234537a250b6366e81ee7465fa4c"],["archives/2019/07/index.html","cc65a26d974d38a8babef3c2f2560507"],["archives/2019/08/index.html","e0a429a6d8e831b9388ec640e2bf3fd5"],["archives/2019/09/index.html","a496dcff821e4165d3f048f193be1eb4"],["archives/2019/10/index.html","674669b864b6b0124f44109cb49ddc9a"],["archives/2019/11/index.html","69013ebc9d333e1c24ccf455ce2f1e14"],["archives/2019/index.html","561de6bbd6f6abfa231e186b548c58ff"],["archives/index.html","4df5438296d68f17218befe3df44d262"],["archives/page/2/index.html","346028d8285ba9953a1f8cec984f64c9"],["archives/page/3/index.html","5bb8b25b742269cc9998b5c0a40c1ad6"],["atom/index.html","e45a361b5a112282766ed85472ced766"],["blockchain/base64-base58.html","a4ae6c70af97c8f3e5ea83c53ddd8dc9"],["blockchain/bitcoin-data-storage.html","f8c327c87023b11238cd43d103f24d3a"],["blockchain/bitcoin-difficulty.html","a1b9443df44f277fc05b802949273b19"],["blockchain/block-chain-ethereum-contract-program.html","29eeb451d712a75f3f5795c7af28225e"],["blockchain/ethereum-programming-introduction.html","b0a858e986883ba6e5147d3f99c1a163"],["blockchain/ethereum-rationale-introduction.html","413061695f550dc06fd585c75860fcfc"],["books/index.html","a584679913ccb63309ba8cc5a47b9066"],["categories/Blockchain/index.html","2564d231ec7c900dbda0ac9ffd2962f1"],["categories/Blockchain/以太坊/index.html","966439647c371e3343520b73abfce6ef"],["categories/Blockchain/以太坊/智能合约/index.html","783b874de15ba8bb46b304bc772ba731"],["categories/CSS/index.html","df16aee844cd69314e4fbcc1b04e685e"],["categories/Design-Pattern/index.html","dac8674df34d5ae756d0bc944cb95347"],["categories/Git/index.html","5f513c26840bc29b5a3e04cafbb75eae"],["categories/Java/index.html","972404798416c7e03802467290e75c0d"],["categories/JavaScript/NPM/index.html","bb88557a972d5c689fb5d7248664ec60"],["categories/JavaScript/Vue/index.html","e24cde45c93c38eb701220297a12d7d8"],["categories/JavaScript/index.html","8a5691258c4e1d1790958316d6d6ff51"],["categories/Kafka/index.html","3d74fe1362e11f5ab0ede6fcc8ac355c"],["categories/Linux/Shell/index.html","767e9172769e57168bb2001699a11014"],["categories/Linux/Ubuntu/index.html","71c6b02121893a349855fde7ffadd1b6"],["categories/Linux/index.html","ad985afffd881f605d2c8d04404f3105"],["categories/MongoDB/index.html","50bbd469cf133797bd93983da9daa7f6"],["categories/MySQL/index.html","d70776a3be4be20423ae174cbc5dee83"],["categories/Python/index.html","2bc93b71f324019b975811df347762d6"],["categories/iOS/index.html","78d7976871b66911202b84a258269fc6"],["categories/index.html","9f106dde00bcabd78e95c77d8edf8b4f"],["categories/微信/index.html","84ae0ba188f4701655b609029b40436b"],["categories/数据结构/index.html","e7fad2fc65df98596f79e9bb52b1609b"],["categories/杂记/index.html","a78153e9315dbb494a1bf3ad0f8ca980"],["categories/程序人生/index.html","7d41b2c142b6f97c2185dbfa3060602d"],["categories/计划/index.html","5dbddb8828943a1988c954befb314f86"],["css/css-font-note.html","eab11c4270d45e6c570207bb677e8e47"],["css/css-normal-flow.html","34668b105c57a426acd598a60f953faf"],["css/css-sass-introduction.html","5df4e3b3c070737a17a01adea3ca57f6"],["css/main.css","228bed1ddf8c7deef5ca0b588ffab2d0"],["data-structure/B-tree-note-1.html","3d865eba6b67c6312e063bb534339911"],["data-structure/Binary-tree-note.html","0335e6e7108550b83a60bb2701d1efc0"],["design-pattern/chain-of-responsibility.html","41bab3f25bab439952bd466e88548bba"],["design-pattern/delegate-and-proxy.html","48077a4e17e437af4ffb53e5c56b36e1"],["drafts/configure-multiple-vue-project-with-nginx.html","75a80ede4fd380a1f49f59947f8ee6cb"],["drafts/iframe.html","c23d2aa43efd186fdf9565140a17d8e2"],["drafts/record-re-install-mac-os-10-12-6.html","3eaa237ea9477b9b844b8d5f7694b66b"],["essay/note-ximurong-tree.html","5e34502de98cf788ef2893033a2d6efb"],["git/git-DETACHED-HEAD.html","a452215adcdfae0d3104928a2deaafa3"],["git/git-branch.html","b99ae290490c73fdeea0743170ad8bce"],["git/git-change-server-password.html","01c14b078ec5e219ffeb8ed78e957ef7"],["git/git-checkout-1.html","f5476fda8ce5110c60d9f9b9242b8129"],["git/git-checkout-2.html","86f84378bdea6dffc538c6b49c3c38f2"],["git/git-diff-m-symbol.html","fa7d25e3a3d4ee37c9145cf42078b091"],["git/git-git-flow.html","fa5304d88ac3f723958dcfe7255e5086"],["git/git-git-merge-ff-no-ff.html","9fc4d1d419bb9e329dba49766e77dc4f"],["git/git-git-merge-true-merge.html","33e0d986948cbb9227c4c5ca02c49cbe"],["git/git-gitlab-flow.html","1dccd71d7e7bdbdc45f7dc7fd9bea1e2"],["git/git-index.html","16a57362a5cc920bc617a86cef67a059"],["git/git-merge-choose-one-side-code.html","b2936a6de96ed2b63337d3a2d18c7d99"],["git/git-merge-exist-conflict.html","f6a0d029a5e8ff39ab3bc609bf875c02"],["git/git-pull-1.html","def3ba2f6366674244ea81b57709fb6d"],["git/git-reflog.html","11bddf4c786c98cd4caf512098c744d1"],["git/git-remote-set-url.html","d58ddddc2cba76553c22fe6e1b642506"],["git/git-reset.html","e9426d499ccb09813fd449b8442da907"],["git/git-rev-parse.html","3603e631a639910d6ca470feaf16396a"],["git/git-revert.html","90f6515637d3bf5d679c964fd0354f60"],["git/git-tag.html","09e5851d9b1123bbd22c8d8a04def612"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ffc1b4b10f06d5a7b44eade74c3eb084"],["ios/ios-oc-kvc-1.html","3680e0dccb71e2e2d3e5680ec66425d4"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","40f2fddb075dda4e42e39cee9102ed66"],["ios/ios-themes.html","b87d437f40f2581db4fd62531240ee70"],["java/java-annotation-note.html","3f8176bed0ec79c066be2f5d46068498"],["java/java-annotation-request-response.html","0ae8cc00323e38777abf7e5adbeff09f"],["java/java-array-and-container-note.html","9dbdcf28a660a1b51584bbba847bdca5"],["java/java-deploy-resource-folder.html","4c55ad6cad3600ce0cb45bcae179d162"],["java/java-jps-note.html","a4e7a4fa51a8f70d9ba05e6c15b864fb"],["java/java-pojo-bean-note.html","2b07bf4c538e0f9d3978890235a9a714"],["java/java-shiro-note.html","c83ba5280dc8d6ec0a40b282ceb1fbb8"],["java/java-shiro-springmvc-integration.html","cfabc800528fef8b477b8945b02fa767"],["java/java-spring-autowired.html","8d0c8a44070d7a270e15310a766c213c"],["java/java-spring-configuration-bean.html","57de252e7a0d4a9eb4fc815885f8b19c"],["java/java-spring-restcontroller-note.html","4b5cda4b01995e736fbacd2208a83678"],["java/java-springmvc-X-Frame-Options.html","e0704206c8b8fdc7e1418960c921d25c"],["java/java-synchronized-note.html","7939449362c65111c5d8b0e9cca15b41"],["java/java-value-pass.html","c48e6464b103ced032f27493af4f2b2e"],["java/java-vo-dto-pojo.html","b381f5a2ae670f94212c44b99aa44b0b"],["java/url-rewrite.html","e595f8cd196d52a5ee195ac5d4a79750"],["js/js-logical-operator.html","1339bb07190ab3ab25a1a9691a1ae9fe"],["js/js-npm-symbol-caret.html","b86f07996fb8d6d87fe83f1042a24502"],["js/js-npm-symbol-tilde.html","274b957c3162063b998c85b6a3649af1"],["js/js-this.html","799869fe34845e808b6b3100b9dc4ce0"],["js/js-vue-note-components.html","f13289983fdba1a875d070c7249a435d"],["js/js-vue-note-computed.html","1b15c5edf0d46581aec89d26aea5dc85"],["js/js-vue-note-css-style-binding.html","65e0bff74222190914325ac757cbec32"],["js/js-vue-note-directive.html","324d7d565d82d4400da7d267fc05a7d8"],["js/js-vue-note-instance.html","1f9ff4fc0e89b277a8b9bd495e344dbc"],["js/js-vue-note-introduction.html","2e1e417ecd6de6342fe0a3888baec5ad"],["js/js-vue-note-syntax.html","4eddca434b6d68e02e37e2c75b2b5a30"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","1e96c1e4307e4067777bc4fd0585d12b"],["linux/mac-find-port-occupy-process.html","770b1c8fbcf13da95de3d8eb57f6e7b0"],["linux/make-vs-cmake.html","8cc2e8acb16de81e2670af53b444bb39"],["linux/shell-command-awk.html","13a3a48b4ab29cc7187bbb49359aefb4"],["linux/shell-command-df.html","06db2d630f770ab497e2e6a52f498bf3"],["linux/shell-command-du.html","1df986260a2cd891b1d266081c7c5e0b"],["linux/shell-command-netstat.html","648add18288bb12ca66d2c1b1d4051e1"],["linux/shell-command-sed.html","9f238c999ed5ad21a3ad0b0821acc047"],["linux/shell-command-tar.html","9f1c810e888b41f454261628ff5464e5"],["linux/shell-command-top.html","cb9e65fc1ac67e56e0d1b10c5a071a85"],["linux/shell-command-touch.html","100e818940a74c24afa11d4f46836080"],["linux/shell-command-which.html","e55ac6990a88ddaa3c0c565ffacb5202"],["linux/ubuntu-user-add-delete.html","7e2d0ba4f8d849b95f6a1be66b68c15a"],["linux/vim-copy-note.html","24103d43fe04e8023f612eadcfd23283"],["mongodb/mongodb-collection-aggregation-introduction.html","b80de8b600081a9d1ad7d994aa9e33d4"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","3f56ad0d8afe856489e9e54a39433b15"],["mongodb/mongodb-collection-create.html","5f0754b696429813e708a9672a230e4f"],["mongodb/mongodb-collection-delete.html","562a03df885448362969ff6c5552fd8a"],["mongodb/mongodb-collection-find-1.html","afc99476bc3b962efbc8095e8404185a"],["mongodb/mongodb-collection-find-projection-operator.html","9f6cded6c0b389aff8a3632a517a110f"],["mongodb/mongodb-collection-insert-1.html","e9a64ab545ecc407a5413db7a5e7f172"],["mongodb/mongodb-database-create.html","8294e817c1a36efe3774428bba76999b"],["mongodb/mongodb-java-driver.html","0bfc354e0f65b33d9ac81b4f6e76a052"],["mongodb/mongodb-schema-design-note.html","ec65d56ab4fc033110a8a5e5d9c36bc0"],["mongodb/mongodb-study-note-1.html","cb37073894e9f2af3c643ec8de77ef21"],["mongodb/mongodb-study-note-2.html","cbefe81bdf027ba1e2a0937505d514d8"],["mongodb/mongodb-study-note-3.html","40c64b956081ea807a10cc32ebeed601"],["mysql/B-tree-note-1.html","4055d995db4a66221b5f9ed6fd78328e"],["mysql/clustered-index-mysql.html","14f56b1e30ca041623ede9310a107027"],["mysql/mysql-ddl-handy-book.html","6cc22819158eef804d9ba173e192ad3b"],["page/2/index.html","2bf8a616fa4cec4e3124d33ff3c5b5b7"],["page/3/index.html","a32e55d30d59c50eec0e86550fafb873"],["page/4/index.html","e3b556348b20d0ef090f19beecbe757b"],["page/5/index.html","38ce9e823e34e569c8e0850ca26b0a9b"],["page/6/index.html","482e7278bebc616159d10c8cdbcf40f8"],["photos/index.html","259321d1a08c1fcf2a9c7a2a25eb7955"],["python/python-args-kwargs.html","6e3427c8ded8507bbccb699188b77e1c"],["python/python-async-program.html","4b35e3f8efa8c3d97d307a275b60b1e0"],["python/upgrade-python-under-ubuntu1604.html","b5b67288f0db94ebd52cb5c680eca363"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","92424ef2e28fd4be009710aa31d00878"],["slides/index.html","418cae65dcd2d2b4fb5d0a7240df881d"],["tags/Autowired/index.html","104a8e5a10e66191846a15f32eb43284"],["tags/B-树/index.html","fc8002044ba5b0d103fa5aecc7370428"],["tags/Base48/index.html","25ccf9b4cf0249c79c8fd7823c42f696"],["tags/Beans/index.html","fc76deebedb0e0dbac35df623bd599ea"],["tags/CSS/index.html","5b33542a18421f14717b6573a1d5a8e4"],["tags/DETACHED-HEAD/index.html","98e477335ecac079fe9ae258c614e946"],["tags/DTO/index.html","e29052e037413146f5def0bc55d456a9"],["tags/Git-Flow/index.html","03e29e4bd7a21ae4432eee3ecc686d28"],["tags/Git/index.html","cbbb083f97acf2814ca875026feeb259"],["tags/JS/index.html","2b56e1971fc788ecd88869f43b0be50e"],["tags/Java/index.html","497816217f6ac8467845e746b4545fe8"],["tags/JavaScript/index.html","373a2da1805cf8904a4b5cba13ee886a"],["tags/KVC/index.html","8620f67c757c140ef467c03e8a8409c8"],["tags/Kafka/index.html","c33e1880cd59056176490b0d61d3767a"],["tags/Linux/index.html","6691e8f9306190eaf4ba0f0869989680"],["tags/M/index.html","909b08db2e66343e06d8f53afd19bffc"],["tags/MongoDB/index.html","5d93313cc5bb5af6ccb7731643b79cd6"],["tags/MySQL/index.html","138a225990ab0af5fd0ddcadc4a068fd"],["tags/NAT/index.html","3331f02484e95108ac8ddba8c9ed2070"],["tags/NPM/index.html","e77c3e7ebb45a9c74542c9195cd0fded"],["tags/OC/index.html","bf72126d23eaec13645179d62895cfc7"],["tags/POJO/index.html","6409096ba332a8e32157c90c3a3234bc"],["tags/Python/index.html","f4ef30585d727a14ac0f53f4d273de2a"],["tags/ReactiveCocoa/index.html","f94404e1e1484cf48368e06a291290f2"],["tags/ReactiveObjC/index.html","3c8349e492c0426200d48b392d6d77f7"],["tags/Repository-not-found/index.html","faf231d2a26f9dd78fe61850a3c5cf05"],["tags/RequestBody/index.html","7b906f064efa6f517c0b77370308bb7e"],["tags/ResponseBody/index.html","4e423455f6df54afaa06e19b1e10a53c"],["tags/RestControlle/index.html","f08b605f8e931631d68e2722d8858878"],["tags/SASS/index.html","9a4c480586791118b0a288f7bfbba720"],["tags/Shiro/index.html","46db634f95b8fa2d8526698ec31f669c"],["tags/Spring/index.html","72ce98503abb558785087c13d5fb4281"],["tags/SpringMVC/index.html","9f4b7aaddf9d040b3596040c44dbcb8e"],["tags/SprintMVC/index.html","e73e9b0decd10b1c66253a1ab24ec26a"],["tags/Style/index.html","b7e3ac919e488cfb26f3faa2097b2aca"],["tags/Ubuntu16-04/index.html","6ada1a8aeaa2071857780bdb3eeae44a"],["tags/VO/index.html","724a479af468569c24d31d2bbe1ab8c3"],["tags/Vue/index.html","a84617f75fece64e2ef36d436212c5dd"],["tags/Workflow/index.html","e15afe831fab98b6f4dd7d61af379b4c"],["tags/X-Frame-Options/index.html","92edffe34a975f464aa341245cfc5575"],["tags/aggregate/index.html","abbeb2b176e38a7f7cb6ebb203924530"],["tags/alter/index.html","6650743eaa6aa597077ece508564587f"],["tags/annotation/index.html","b042c63441f32b35d672cfa2cb3a5eb3"],["tags/args/index.html","440c9853ca806d5da8cddddc7dc00054"],["tags/buffer/index.html","6ba97fa710f6da01c31f409d434bf7aa"],["tags/cache/index.html","5594a69f5b5d6f735bd4e7259508c172"],["tags/change/index.html","5c193717b2271e3d793a603a4002342a"],["tags/checkout/index.html","b745693eb8bbdaf61ddf7ef77554d890"],["tags/cmake/index.html","4a6ebe1e625d8951f0015bee6e03f0b2"],["tags/collection/index.html","5dfd4ec5d50af1962e58a6dc78ebf2cc"],["tags/component/index.html","eebff6815af6570ef82b6a3cf14cd584"],["tags/computed/index.html","c646c4f981400ea42d65ce5261093492"],["tags/create/index.html","52ed273ec179e34778f462f8e0de40cf"],["tags/database/index.html","39c2bb419d92e532243cb30bf610d065"],["tags/df/index.html","f105a91067b916b51048c4c611073de1"],["tags/diff/index.html","d251f3d994c47da89e4039a6682dfd17"],["tags/driver/index.html","6497dc1cb46f0c3345650e079ebceeb6"],["tags/du/index.html","1e1e6e4b38fba2d0d821eaf128d3cd14"],["tags/fast-forward/index.html","0b81ef5b7eb731bc6c8f95c93f5869e3"],["tags/ff/index.html","9337167f88df8486ba62309010dcd323"],["tags/font-size/index.html","f8b6b606e9106ad3c01946df7a04344f"],["tags/font/index.html","e49e44a4cf817ec80ec07c1ce2bc8eff"],["tags/free/index.html","cb9b285c2cf3665cdb298548f41a3118"],["tags/git-branch/index.html","4d5828a054b95bbfe97c507d39b33836"],["tags/git-index/index.html","b458b8d0f0f4f9392a7bc64d2fe6d116"],["tags/git-merge/index.html","0a48208c49c1586bba4d3915b4578f25"],["tags/git-pull/index.html","957f178bb0181ffda205a1dfe1804361"],["tags/git-reflog/index.html","1a5e56ed7d40c923a94e2108eb4b7a69"],["tags/git-reset/index.html","27416296df22e0331c1890792dd87a80"],["tags/git-rev-parse/index.html","1b9afdaf5cced02872872261033eef61"],["tags/git-revert/index.html","4bf87946801e3c08a96f490c853300c5"],["tags/git-tag/index.html","f0a570e59e13aacb5f1562585185acf5"],["tags/iOS/index.html","afbe278dfd2f8c7a036cadf8e37ee1b1"],["tags/index.html","347323ababc430a98f9795c032532906"],["tags/jps/index.html","c5b9a57575ecc6b2a3e5ef046f2eb2c8"],["tags/kwargs/index.html","76c392f5f6a2c30cbe5d8bc0d9f1b856"],["tags/mac/index.html","4fc3b19294e3691032244c700b941af1"],["tags/make/index.html","e76aa77d47edd53ef02213b6e4d490c1"],["tags/modify/index.html","64af9c8f047ee4987a77979ab9fb59e3"],["tags/no-ff/index.html","41152a5174e2050c78e09434228235fd"],["tags/rewrite/index.html","8610565f041bbeabb300124408e541a6"],["tags/schema/index.html","d77bbe1dab617b795e99ed448de46a37"],["tags/shell/index.html","4ec2f0bc581d39192e4c162b8c86522e"],["tags/synchronized/index.html","700eda6ecb44d907fc27aab8bfab47ec"],["tags/this/index.html","741747a1db1b47a8a0cb5c531187e3c3"],["tags/tomcat/index.html","7e0b254f0c91ee1268ec4e9b447dc42b"],["tags/top/index.html","29fc8a1e645dee8e8d83d3a3d5896252"],["tags/true-merge/index.html","667211a596e066a6695572b9f081325a"],["tags/url/index.html","5bd90fe1d10dda2f5548ea604f50d10f"],["tags/vim/index.html","cdc60a72d97d53b118c4b59620a44762"],["tags/windows/index.html","e03a0e5152420ba8154c08d0640264ff"],["tags/一棵开花的树/index.html","1ec8242781817931075a8c1339d6c789"],["tags/主题/index.html","e83001da7c6678a6d9cb68ec66c7b618"],["tags/二叉树/index.html","13fa5a2816f798a64da992c3281f013a"],["tags/介绍/index.html","3994603dc42226c399c92bc83551859e"],["tags/代理/index.html","493a5379c138e9ec78e67f2831aea89d"],["tags/以太坊/index.html","19b137bd778a8031ed32a8caf53b3d57"],["tags/依赖包/index.html","51dc9d4d9a5c8bb470d2de5c07b0af56"],["tags/修改/index.html","1acd7ec1f2a54bd9fa33ac5571350b43"],["tags/值传递/index.html","cbb819b588d9093cac3006093ccf5de6"],["tags/冲突/index.html","cfa2b6bc236a8abf7a3adb70fa379a2e"],["tags/分支/index.html","a98983be4d15c657bbde4c0f09f7a2e6"],["tags/创建/index.html","c8bc4e1649709c28b2486585dadf1d05"],["tags/创建数据库/index.html","ef554ed3f8b16935182ffe1e4f67cbfb"],["tags/区块链/index.html","baa9834b153b4c456dd6610f021a2374"],["tags/升级/index.html","7ac753a137c92e84a3dd8144066db9a5"],["tags/参数/index.html","16936886b399f3f53662c724f028eaab"],["tags/委托/index.html","209cb7d036d652d520fe6b7547504176"],["tags/存储/index.html","ff7805b253414027bc0f1d0465e90054"],["tags/存在/index.html","8b40135e73f005f85d48c784c9c74855"],["tags/学习笔记/index.html","5923a09693b56a68a6b368e88f7d5cdc"],["tags/实例/index.html","da28ef90cd2f6542eb1150c78c51f68f"],["tags/容器/index.html","1cac59658afdf9dbccec93a9af91d21e"],["tags/工作流/index.html","a364e9a01142320f7db8605d3f599b0e"],["tags/工具/index.html","db2f63b8b85d7370c0ae9ebd1caf45e3"],["tags/席慕蓉/index.html","10dcd34afae14d01dba47ca723bd4800"],["tags/异步编程/index.html","1428aca3e403cd70dbd5d9f32754e2f1"],["tags/微信/index.html","9fa04c3201005e795b94f93214448b24"],["tags/插入/index.html","abdce765045cee130a5a3678f18a83fa"],["tags/数据存储/index.html","c40910844753580e28ee4e4f0547ed6a"],["tags/数据库/index.html","545a81bcf06b44a3dfb97900c25a3068"],["tags/数据集合/index.html","cff1932c5cf3f128dcda7715d0a05351"],["tags/数组/index.html","5d7cdf4df08e666c42369e54159ac322"],["tags/文档/index.html","4a20df77cac9b210e5048924690426a5"],["tags/文档流/index.html","26c9d9846507fbc3bd8d75d2e371ad1a"],["tags/智能合约/index.html","8c98a68b3afbac56ec9c10e6cac74035"],["tags/标签/index.html","fa249eba6fdc39da9f15452a17a95359"],["tags/模板语法/index.html","acbda924d49284b369750e89aaa9b411"],["tags/比特币/index.html","2745c7bd3a2ed730ccb9483d72ea487b"],["tags/波浪字符/index.html","dc21e2dffbda0241aa4e728bd5db675c"],["tags/注解/index.html","6cb87e6b45954626ab3fd2156f9132d4"],["tags/用法/index.html","5b1059308e1033e918aa4079be7b0eac"],["tags/穿透/index.html","1cb56456f8453ff3e2b8aef9b8012500"],["tags/端口占用/index.html","0714a152ff32abb3bf8a5325175a937f"],["tags/笔记/index.html","a9029edce471326bda9f2980c6b76452"],["tags/符号/index.html","185d43158322e62939e543f4aff1fca4"],["tags/红黑树/index.html","33c3f0b61bcd13aaea7e24208dfbbd63"],["tags/组件基础/index.html","89dea093955dc876063f9cb3e4d47be2"],["tags/绑定/index.html","e863581165c695ccf604ecaa64bbb128"],["tags/编程/index.html","0192b32291fb788343a5f9512312dc17"],["tags/职责链模式/index.html","8248225c315ffa73db997671a49706eb"],["tags/聚合/index.html","2df0bc16e55704beac5badc79630733c"],["tags/聚集索引/index.html","0fe2ec1ba628d2885cd82315ba0d67fa"],["tags/自定义指令/index.html","3657fb1395d715ad615c8e5692c6b705"],["tags/计算属性/index.html","d38755dbbfc3840c29b9fc969b2a9bb0"],["tags/设计模式/index.html","0682a21e2228ad6583da74998261c01a"],["tags/进程/index.html","5853a9765dcf58f34dc3090ab63ab8e5"],["tags/远程仓库地址/index.html","4a3160ae5a99766bd0216b6f5ec1abb5"],["tags/逻辑操作符/index.html","186a92d21626a50b556e89b67fb99c48"],["tags/部署/index.html","4a1b70dcf305df88d96a40e64f00f9dd"],["tags/难度/index.html","62fc1a4c578fb11eb1a820340cae68e3"],["tags/集合/index.html","f36335c9fdf838814e2dba8f6668bc99"],["thinking_in_programmer_life/full-stack-programmer.html","51ffe4f09e5c7c45336bed6b225d7478"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","da53b0a5cdded250ceb78443021d4483"]];
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







