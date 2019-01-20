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

var precacheConfig = [["Kafka/kafka-introduction-note.html","710307ac4a452fcbdcf4aae09fe31d8a"],["about/index.html","f2cd4904c63e683237caf69d29ba7c4f"],["archives/2018/06/index.html","85023ed52b4cf1d2928377b834b690f5"],["archives/2018/07/index.html","04fd2d0e66e8526c8bb1620232640fe3"],["archives/2018/08/index.html","280fc5d712292ad39b2658226aea92d6"],["archives/2018/09/index.html","69a48790bd9c5f80894200a0b1f8efa3"],["archives/2018/10/index.html","3ef889ff464d8bc7496b68d9f7009158"],["archives/2018/11/index.html","b080a658c8cd4b5595d3f949f5836402"],["archives/2018/12/index.html","27d0e0233aeac7e1d748646d9fb49a7e"],["archives/2018/index.html","15b855d6c5c591b0e3ea17ca05d10372"],["archives/2018/page/2/index.html","5439f8d98574d6b8a300f3da3f25e309"],["archives/2019/01/index.html","f60059a25f95d93f6e820b6fc327eec5"],["archives/2019/index.html","66a59ef654db090c4dda4810d0703153"],["archives/index.html","eee39761c7b959dd43ee1fc8682cf243"],["archives/page/2/index.html","1de8948107c3f856a1fabe7466b8027a"],["atom/index.html","8f7567230e1ccfe088fb7143cac6e763"],["blockchain/base64-base58.html","c31c15d2b341c2186b030da1ab6d4ab3"],["blockchain/bitcoin-data-storage.html","dd9cd9f4b9973e9eb243987bf8be7ed2"],["blockchain/bitcoin-difficulty.html","b4ebb708be909fc718b1348e337d514b"],["blockchain/block-chain-ethereum-contract-program.html","706a4dccf2a9e60ab0d5a7db047981ff"],["blockchain/ethereum-programming-introduction.html","865d55197cab441df609b828dd83ee75"],["blockchain/ethereum-rationale-introduction.html","c27312eefd90ff9b0bec89bebc2780b1"],["books/index.html","c7f8507b3da07e46c6de35b90ca3d5d4"],["categories/Blockchain/index.html","b1ac2f2fe2a7e0e05bba5de4521642db"],["categories/Blockchain/以太坊/index.html","5a0502691fe55b4d809f7872cdae6b3a"],["categories/Blockchain/以太坊/智能合约/index.html","98ec33843f29374ae33e0f3f3b81dae1"],["categories/CSS/index.html","2ece0054b18ae0182aa9fe605c6196aa"],["categories/Git/index.html","8dc34152be03d46f9cc61110c0f75bed"],["categories/Java/index.html","89b9747d1127d3eeebe0aae05fdb42c4"],["categories/JavaScript/NPM/index.html","f711d9a6421a56dc1a3f4d02368b43f4"],["categories/JavaScript/Vue/index.html","df9d4200806d7a93ab13e95edf192c74"],["categories/JavaScript/index.html","9fc29bc4d66c5fa8cc5f903bf4354b92"],["categories/Kafka/index.html","98a4992dfa0d63e3df5e6f9467745b8d"],["categories/Linux/Shell/index.html","34623f0e0ef5c2aa74943e962e6d936d"],["categories/Linux/Ubuntu/index.html","d3347c3215499f9f99c37c614b22e1e0"],["categories/Linux/index.html","76685fc3fdf664cd6c1d93f73539f4a6"],["categories/MongoDB/index.html","b10a1698d602de14df5b81683971cb41"],["categories/MySQL/index.html","e157036b01b53e642e1163f54fdfd8f7"],["categories/Python/index.html","8ca6c9827f5e3d7a75142548dce9d372"],["categories/iOS/index.html","edbe34631c9826254c3052c22d8747f8"],["categories/index.html","be008a7a0b0b756f1760fb6c1ba37c8b"],["categories/微信/index.html","7e9a756e454f6b27333a6659ae08bed8"],["categories/杂记/index.html","687a30a36d98effddfce20dccaa0e992"],["categories/程序人生/index.html","a2e8cea23e6a1dd1c5ab8f06c47af6af"],["categories/计划/index.html","3f8f2ad4453ccd0a57dd95b24868b80e"],["css/css-font-note.html","05f0edc7ac6ce68ec7a06dd889f1ae66"],["css/css-normal-flow.html","4612ba4780613bae409a0388b5bcf283"],["css/css-sass-introduction.html","7e02be5958afd2ee794e4709462c7cb1"],["css/main.css","19129c04c078d914054bb771e8e587bc"],["drafts/configure-multiple-vue-project-with-nginx.html","d3d7e68cb4ab37e8049ccc113f91eac4"],["drafts/iframe.html","30a8711c95eec1eb4703851601a20a3c"],["drafts/record-re-install-mac-os-10-12-6.html","55c3631212c584136634b3f79ae10464"],["essay/note-ximurong-tree.html","4fa95804a09995019916c852e1a8d733"],["git/git-DETACHED-HEAD.html","88ad4453415d553d3add55f1bde7472c"],["git/git-branch.html","6049ef6cb907a94959e2aa4e574ae436"],["git/git-change-server-password.html","37490a7fe06e124c0f89e62906f7b010"],["git/git-checkout-1.html","2fc371c04018a53d8baede1294ce47f8"],["git/git-checkout-2.html","65a288f7bd3be90e007cb7e02e0f1a9a"],["git/git-diff-m-symbol.html","5414c744328180fdf8fbcff49adebf1e"],["git/git-git-flow.html","eb35f91cced63d2bb93a2de301ea7194"],["git/git-git-merge-ff-no-ff.html","dcd2d27656eea8e5ca936a9bcb712e4e"],["git/git-git-merge-true-merge.html","4501b2f60acbb25a1aedc76c43afa808"],["git/git-merge-choose-one-side-code.html","9bf1507a4d5e284166e2b7dd1fdf0dea"],["git/git-merge-exist-conflict.html","a7390665d323ab31db053bac02018aac"],["git/git-pull-1.html","535223fbc298d0c78ca1b5f9650499ca"],["git/git-reflog.html","4b01957a8c75f9bc904c8cc35cd693b3"],["git/git-remote-set-url.html","8acfea5b6287bb5839f680ebadae2207"],["git/git-reset.html","1a915cbfab8483c403d9449b582a3e96"],["git/git-revert.html","f55a17d6cf3dfeaa114613e85a585807"],["git/git-tag.html","7e1e7691bd6c6a1155a971401cd19e54"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","5cf43668aa6d5461e9943598e85dfcee"],["ios/ios-oc-kvc-1.html","d72530e4edf729e45bfdb8f426cc934b"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","5ddb68929a15026c1d62330c47872f0a"],["java/java-deploy-resource-folder.html","ea549b4b72e94ac2bb9bff22aaa54f21"],["java/java-shiro-note-2.html","1c2f534278842762b4b4c38bd053b857"],["java/java-shiro-note.html","79c37dc4c5142b350671ae9ba8db055f"],["java/java-spring-autowired.html","97ef9b6b36caa3178cbea76b3a5e234b"],["java/java-springmvc-X-Frame-Options.html","454c31caf806ec5d425c1104ec7face3"],["java/java-synchronized-note.html","bf35eb28099448ac30fd268920ec80ce"],["java/url-rewrite.html","5f2ec96933a340d24ab9b071c20e35db"],["js/js-logical-operator.html","4f1d3c34c3a3626b18740bece1f4f1cd"],["js/js-npm-symbol-caret.html","f7bdf3f1a297643bfa14b9c68a7158c5"],["js/js-npm-symbol-tilde.html","7709fa5c77a97e2b57310804309bfd92"],["js/js-this.html","4c043287ba0ef7177653a1218475dc5c"],["js/js-vue-note-components.html","851ff781a101d6bd5f817fa5685b02b8"],["js/js-vue-note-computed.html","48b25ed7e026da674c43cc1bc3b3f93d"],["js/js-vue-note-css-style-binding.html","8b9f3ca88d3b1f50fa76c6e11910ef07"],["js/js-vue-note-directive.html","c33efe52bc43a2a9f512dd93656bc026"],["js/js-vue-note-instance.html","ba40fd0bac0e2b6c599da440e54bd515"],["js/js-vue-note-introduction.html","b6baa16faf0a62e76689b75b9b0c6e3a"],["js/js-vue-note-syntax.html","c4cc707def4419dc35e66663fd4041cf"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","f8a95fbfa16a378e50cbe6fd968f4603"],["linux/shell-command-df.html","cd9fa12fa9e205361d1258829e1bfad7"],["linux/shell-command-du.html","2839495213f066cea3010890b4cd9aed"],["linux/shell-command-netstat.html","4e8a379428002c369251290ef878f778"],["linux/shell-command-sed.html","68629f005efe8f673ff3b7e63fbe242d"],["linux/shell-command-tar.html","3ef0d0a92377862566421171a54796ed"],["linux/shell-command-top.html","e5730d5daf13d8f172b6957e61eabfef"],["linux/shell-command-touch.html","835fd7d1798bc49bff9e6c20bfd9cad2"],["linux/shell-command-which.html","ff6c851ca0acd6fc31dc1b60ebe182fe"],["linux/ubuntu-user-add-delete.html","e927f615209354911c73cb7040408700"],["mongodb/mongodb-collection-aggregation-introduction.html","d1aba85d30b13bbd3461792be7973c00"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","abcaede8ecd3a6eca26a78aba4e55815"],["mongodb/mongodb-collection-create.html","af9819755d8038a0223d3ca1904f818b"],["mongodb/mongodb-collection-delete.html","a0a813b5edff1652a415d1ef2c10b1d5"],["mongodb/mongodb-collection-find-1.html","b5342feac22a592cba4e930b4fb35d02"],["mongodb/mongodb-collection-find-projection-operator.html","4c071c7fa09d4ba5b298818afd76f373"],["mongodb/mongodb-collection-insert-1.html","84bc34bae63f1cfabf5a0cef9ec16bad"],["mongodb/mongodb-database-create.html","e213c2f7a66990756c68efc9d0ad5956"],["mongodb/mongodb-java-driver.html","141907f795574d86174c9e50a50b3b1c"],["mongodb/mongodb-schema-design-note.html","e059aa22155f4c835f5dfb6dfc54c56f"],["mongodb/mongodb-study-note-1.html","07348fe3f157cb129675f4cee88a78cc"],["mongodb/mongodb-study-note-2.html","4a6272fad55095ccbde8002b6b9440bd"],["mongodb/mongodb-study-note-3.html","467372f643cd107cd31e94372a04b6b3"],["mysql/mysql-ddl-handy-book.html","38f4a611c8c9dcf408c5f6908d71831f"],["page/2/index.html","2388d7a55f72412a30c3a43c68992415"],["page/3/index.html","cc02fd2aac74fb398ae8f23abf810979"],["page/4/index.html","35e9d817f6f6b80638a8d94512ccc562"],["photos/index.html","f5702e9422031fe43be1ea4c606e7841"],["python/upgrade-python-under-ubuntu1604.html","553953b8da75bafd203fb7f14f85a91f"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","3f5e207505c11392cfd2d5a8df98f4f4"],["slides/index.html","954c82144518cada00ff3856436404f6"],["tags/Autowired/index.html","ee82bc953a96fc795123878999d5a20f"],["tags/Base48/index.html","9c985c0b2d772f27f8b36d18727df08d"],["tags/CSS/index.html","17d566ef04a86638f0fb76e20474c3e3"],["tags/DETACHED-HEAD/index.html","89d4dd82c248fe2ff557d110119029bc"],["tags/Git-Flow/index.html","4459a3d450c5b743a6efdfe0a1ec6416"],["tags/Git/index.html","f60fd2f060e4b98498ea160327ab225e"],["tags/JS/index.html","b41d65ef3de1ed7965ab630f9aa63780"],["tags/Java/index.html","ab5ebf24bc5e70c48f470fe43892425c"],["tags/Javascript/index.html","b181d69a6a3c35624012631f4392b52f"],["tags/KVC/index.html","2edb5c855db09f83be3cefb8d12ff3bc"],["tags/Kafka/index.html","cef8773952df36e603944203836e7c88"],["tags/Linux/index.html","ae59b9a9f5400cf96be984ad17a3a7c4"],["tags/M/index.html","e550f9a2ad90e54a1a60ceb36ca4caec"],["tags/MongoDB/index.html","c8facd2256a452368de33c94541936d0"],["tags/MySQL/index.html","332b53f7be5dc8650c49fa8404649612"],["tags/NAT/index.html","ea4aea1d9a8378b9443b8469bd4e95bb"],["tags/NPM/index.html","afcc43a705304ff141482001285fb15c"],["tags/OC/index.html","0e330bb003ac0a8f15e3e1efd60fc6e5"],["tags/Python/index.html","85488caed630d8aec46b203f3e0087b6"],["tags/ReactiveCocoa/index.html","db69b588850b34fcb3ec8ae5ea632411"],["tags/ReactiveObjC/index.html","4c36d5dab8aee233f3265d8d335a5318"],["tags/Repository-not-found/index.html","8f2ece20ff5408d0acd4bf79c1deed44"],["tags/SASS/index.html","50aaf6fe250e9bc24b9d8f6634b760d5"],["tags/SprintMVC/index.html","351fce7ff4d989cf1eabe9876727f9bc"],["tags/Style/index.html","0c632cbef971493c498dac92733ae244"],["tags/Ubuntu16-04/index.html","b47aa399d1f7c75d53d562c73105aec4"],["tags/Vue/index.html","ebd3f6ddc765583c94c73352bf37bf3c"],["tags/X-Frame-Options/index.html","ebf7c09ce0844ba83eadf83af0800ff2"],["tags/aggregate/index.html","4a21c3b1e427d29f2477e0aeea45a0ae"],["tags/alter/index.html","f4b7d61555e93588ae91d0400680d239"],["tags/change/index.html","c4725ab5cac947f366def50af4bfa7f7"],["tags/checkout/index.html","b28b7cf52f50cd9b3641d15a8171c570"],["tags/collection/index.html","c19543c2f94c013f021917ac67001fe5"],["tags/component/index.html","d455a7e685519cbdff1932749695898b"],["tags/computed/index.html","153fb8a57737f5037db3e51cc047d3a7"],["tags/create/index.html","fd1e06339b1dbf8df9daec0cdda90991"],["tags/database/index.html","93c4fdc4e01e43da30175c1b2fc75463"],["tags/df/index.html","82a090e3634825d884a9adc4f5c7642c"],["tags/diff/index.html","8b0344cec13fe443a34589e8250a816f"],["tags/driver/index.html","3496ce4ffc3ccf9c7c9be82c17bb9681"],["tags/du/index.html","1364a2590519d31a484fb289993c2792"],["tags/fast-forward/index.html","19c61ac51c70d1b0a0db33a6ed96e3e9"],["tags/ff/index.html","82059e6c52566c8e90c51afa96f0afba"],["tags/font-size/index.html","de18a7c69a66f39a5c27fabfe238ad0b"],["tags/font/index.html","71516f6f80b42f8afe88d0adaf19512b"],["tags/git-branch/index.html","d0e04859ecd391dbf0e8981a47248ddb"],["tags/git-merge/index.html","865d4ac3483903693c3c08ff4a1a636e"],["tags/git-pull/index.html","c0a0e39aacabfa78f91a1b918d6a8845"],["tags/git-reflog/index.html","5f4285bae0cfae7278d6c47c50a376f8"],["tags/git-reset/index.html","c3edd73519adefba8dff2753b3f37290"],["tags/git-revert/index.html","69c3d7aa4f751de9b898de9a830b0505"],["tags/git-tag/index.html","3761d740c06474e7f9dac5cae2cafe27"],["tags/index.html","4fcba9fe300bd499bce626476ca48f77"],["tags/modify/index.html","a15931350c2f106e9cb996b77a43568e"],["tags/no-ff/index.html","a22f77c4259c3937638cd2ee0a3708dc"],["tags/rewrite/index.html","c8bb8736e07c5c34d1a443a40b1f9f62"],["tags/schema/index.html","9d9fa92c80cd7dea8c0496bd06647a8b"],["tags/shell/index.html","bc7263ea8097d54d5fb00f42d704030d"],["tags/shiro/index.html","373da33c0d0308a5b78079ce2592d217"],["tags/synchronized/index.html","04fe59506ea79a2ea209a839a2a40602"],["tags/this/index.html","8200cc7aee7e706112599d9b15afdf0f"],["tags/tomcat/index.html","cdba59fcdf57e3b8d2d8229bd1b74855"],["tags/true-merge/index.html","834c69d59257a4f2664c054b5ee57454"],["tags/url/index.html","a39e072ac1768ce514f8347cbc9f15e9"],["tags/windows/index.html","b0c126411d0c8c4522106a60736ab1fd"],["tags/一棵开花的树/index.html","f27656dba36f10c26de328454916f6da"],["tags/介绍/index.html","564a5c3d98e189c32e47201cfb86ce33"],["tags/以太坊/index.html","bae4a65bfa3033785e12dfe1230a9989"],["tags/依赖包/index.html","9607b569fd73e90eae08fe9f791e28e7"],["tags/修改/index.html","781eb64bd768732b72d57c5438098f24"],["tags/冲突/index.html","41224e36a5d37a5f8d836fcc8f1502fe"],["tags/分支/index.html","15d43c26c4cef9be89b0ab8c35a389bc"],["tags/创建/index.html","2949863517d30ccea8af3dcc67446248"],["tags/创建数据库/index.html","a0c11835044eca7a61faf91b8c79e37f"],["tags/区块链/index.html","2824c0cb303dba72cedc6f7c2531000c"],["tags/升级/index.html","2e93d8b53fe9a8ce8ea2b04014125338"],["tags/存在/index.html","c372983e0e1b684fb17e6feaa87fe8d5"],["tags/学习笔记/index.html","472d23d136563ab918375ddd7ae20e8b"],["tags/实例/index.html","5e75539ee7a6a8b205e492bdea34182b"],["tags/工作流/index.html","511787927b736e0a1fac6112c2bc6144"],["tags/席慕蓉/index.html","c09b10916c9c8e54abdabf405b24dbae"],["tags/微信/index.html","fa5bf5711bc0e08ea5ac49e238d034f2"],["tags/插入/index.html","a10722851906fce25db1460d38903f81"],["tags/数据存储/index.html","f27cef6778a6b6980ce335ef8f145d34"],["tags/数据库/index.html","bb3c96d7858b3dc91ddb525cd4070bcb"],["tags/数据集合/index.html","9721e34a5bec2037de8c2c19385b62bf"],["tags/文档/index.html","3bc710b967c168c59c78a445dfee355e"],["tags/文档流/index.html","925749a321094aee3172d8fff9564dc3"],["tags/智能合约/index.html","43d1bf7241425534e04625f545ea3c98"],["tags/标签/index.html","db6db48f54a83d05535780dcf2f8d2f3"],["tags/模板语法/index.html","1e8ec1c95a0bdcceefb3c42abe69d391"],["tags/比特币/index.html","c6dc638fdb1c132a6ff69655b67bf857"],["tags/波浪字符/index.html","0de4f958dd1b95eebe51f3500b728670"],["tags/用法/index.html","eaa11fb4c45b0c177c6bbb30ea590078"],["tags/穿透/index.html","5f15a7b4b51baea954d96dcfafa5c48f"],["tags/笔记/index.html","c8ac5d2bfd4d7ed927df7aacca7749b7"],["tags/符号/index.html","8897ce1d3ce5dfd70c3bfb30a026b416"],["tags/组件基础/index.html","b9b1f7efcf2b94c0fb62499c9b23b274"],["tags/绑定/index.html","db406ae36b693085279fbcd3f090da22"],["tags/编程/index.html","b758a966011d11285b05accb8669ce29"],["tags/聚合/index.html","15b82c195739800ab6067e43dd05a426"],["tags/自定义指令/index.html","16608385b1769f59eb8bc8359aed46d8"],["tags/计算属性/index.html","010f21b1d832e636f1dd8820dd922333"],["tags/远程仓库地址/index.html","5ea217724345c2b0dc6a8efb72cc0240"],["tags/逻辑操作符/index.html","cf2074bbff698beb1abab62ad751a696"],["tags/部署/index.html","b93a0ebf7e6ebf9d5a6bf6a1cd2fa04f"],["tags/难度/index.html","fb61bb069c36359a8af8490159471c54"],["tags/集合/index.html","d2ce4461c1d2e4b2ea8911d3979d4603"],["tags/集成/index.html","a26dbe75611fc2997a4ff0259b053080"],["thinking_in_programmer_life/full-stack-programmer.html","6327a7ea0039470598ceda90a9e04a0f"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","fa6a11eacdc5e29d7e17671ca5ac0fac"]];
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







