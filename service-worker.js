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

var precacheConfig = [["Kafka/kafka-introduction-note.html","fe187a010012464f153df4fbdb39ca5c"],["Kafka/kafka-storage-principle.html","fe0960f2208944e604d1f631668fb13e"],["about/index.html","bfb04090ef4743901c2f87f56b9e223d"],["archives/2018/06/index.html","c50ea135b33c33c3ae8d5318e11b8ae4"],["archives/2018/07/index.html","2e92c6f90de78d8c2313f20ef6269c1b"],["archives/2018/08/index.html","9bbc0805ec8faa5501ea8aa2c236addd"],["archives/2018/09/index.html","0d187abbca95865fcc87d586ce022aeb"],["archives/2018/10/index.html","6845bc3b840f81d44de5105d9de3b809"],["archives/2018/11/index.html","a70b34b4264f78ab6fbdd9ef7167f108"],["archives/2018/12/index.html","982f36cfc9d4b4239099650a59c82810"],["archives/2018/index.html","b3507f56fbf108442287546cd3ccccfc"],["archives/2018/page/2/index.html","34f50274e74f77501d6d9e077a25def2"],["archives/2019/01/index.html","aa7d113c17f005e5638756e438a8b91b"],["archives/2019/02/index.html","151b0258ea0979c61c63b6c283d62c9e"],["archives/2019/04/index.html","068c421621873aea8262d2276930ffe0"],["archives/2019/05/index.html","d1c81ae236945107c03647d45dc02e13"],["archives/2019/06/index.html","4be0401d2cb39185c31c165794572270"],["archives/2019/07/index.html","693dda286c4dac88f76cb75e33e4be0d"],["archives/2019/08/index.html","54e56e650696e2aa2f7e5e0f131b1c87"],["archives/2019/09/index.html","8fcc6596d2ea29eabe746ef00499b8b2"],["archives/2019/10/index.html","40a65ca26f017233c6ee74a34d4cd39e"],["archives/2019/index.html","e916bc3404232d987b9bdb59781e3f8c"],["archives/index.html","8bd0e9e63aa0dacca67804d843c1e085"],["archives/page/2/index.html","eba018d8978ed830d310e0ad93acc61a"],["atom/index.html","9f8ff80158d4b293d9ecf14de426c4d2"],["blockchain/base64-base58.html","4d17b818f5f3a0093d6f1119a6a0d18e"],["blockchain/bitcoin-data-storage.html","b3e8fad9dfa0555553a26b1cda671015"],["blockchain/bitcoin-difficulty.html","9351f4795a1feaaf57d3b8e81d8c2cbb"],["blockchain/block-chain-ethereum-contract-program.html","2b6aa26661ed7e763993d5a58320fc23"],["blockchain/ethereum-programming-introduction.html","495f8b4a90dd7c3cd7002d11976cdfb8"],["blockchain/ethereum-rationale-introduction.html","4e954641d56f68897344bff585723a2b"],["books/index.html","2aab024f8197e64384d05125646542b9"],["categories/Blockchain/index.html","7eb2197da7b20e3971d47e5b3ed2e820"],["categories/Blockchain/以太坊/index.html","e71af5f123d5302748a55aa2d46e5eef"],["categories/Blockchain/以太坊/智能合约/index.html","d69b725efca2124fc233216359d6e3b2"],["categories/CSS/index.html","eea9ab6ede0d55bcbc138728c9e8c32e"],["categories/Design-Pattern/index.html","2c69ce54aabc56b3baee2867ec43ce43"],["categories/Git/index.html","2c05f580fd8795d3d5b6e5dc704cf115"],["categories/Java/index.html","1d4125161578e9a88a3861a9df0c66d3"],["categories/JavaScript/NPM/index.html","29ba6520f44958c4002e8ed86f26f8f5"],["categories/JavaScript/Vue/index.html","7c66441f6e26401810b498d37821b1e1"],["categories/JavaScript/index.html","d4c0db47151b9f965d5c58258e5cba37"],["categories/Kafka/index.html","c01c220e58d5be8fac0bf521e637c59b"],["categories/Linux/Shell/index.html","0acd697066ea53cd3dec68d9cb275bc6"],["categories/Linux/Ubuntu/index.html","3b6b50e0058046fa474df5e763cef3d2"],["categories/Linux/index.html","26ff9a16044ab0468d9126d2ebefc332"],["categories/MongoDB/index.html","00407f5ae9b04652d79b2df1140d09dd"],["categories/MySQL/index.html","99749cb764df41b8f1b2103c133b2708"],["categories/Python/index.html","514ff750cb40c9a893245dcc9e3cf906"],["categories/iOS/index.html","2d2e902c7dacfce9d38514fc980edded"],["categories/index.html","497c0ffa54a0190b80f8737a98faf8a3"],["categories/微信/index.html","dd8208f9d119743062cb1f570728f482"],["categories/杂记/index.html","66a800450d06c7b96a35c5ee6fa36178"],["categories/程序人生/index.html","85e061b9a48919178b5352494e2b31ef"],["categories/计划/index.html","2da1dbbb688a73ed9bef53e1fb6f0325"],["css/css-font-note.html","7deaca42cf7699b4d31a4be6199a2291"],["css/css-normal-flow.html","c581ac77e235b6b39c1a03b050d94dc2"],["css/css-sass-introduction.html","cbbb5588cdcbb854872ce0a528a643e8"],["css/main.css","d55b35e1eac8d9d2f1055bc0af993492"],["design-pattern/chain-of-responsibility.html","34cafd712d437cd7de65d7bb90eac55e"],["design-pattern/delegate-and-proxy.html","73056d95be76966723131e2b113b6fea"],["drafts/configure-multiple-vue-project-with-nginx.html","5d3a5ca3656148a7422d3737e44f8f8e"],["drafts/iframe.html","7ff151657ecdf2b339479ad7dd39e922"],["drafts/record-re-install-mac-os-10-12-6.html","c9a7597a49b920720bbfea4f9f89a79d"],["essay/note-ximurong-tree.html","2d6a2eae025265098f9ad7dd0921ab89"],["git/git-DETACHED-HEAD.html","0ea3b046ccaa8a42298a63535583b79c"],["git/git-branch.html","20a7c76e554bd8991ce20360761f8297"],["git/git-change-server-password.html","38fedde42b647713ba121c2c4388c127"],["git/git-checkout-1.html","90f3d33c1bd200d8b9ad3d021e0fe228"],["git/git-checkout-2.html","c593be4e5add3d3d2ba1bd982bf3ecf8"],["git/git-diff-m-symbol.html","530f31198f43deedeb2c81e4c6758804"],["git/git-git-flow.html","95f5af79f33a2c467f7764f9a5b55e08"],["git/git-git-merge-ff-no-ff.html","def70b498a4e3ee4e3ae1cd1e0b3a740"],["git/git-git-merge-true-merge.html","c56367355a3a5fb6fa813418b5f1f69b"],["git/git-gitlab-flow.html","50df2b40d49a76ff70d0ffe0fefaadc8"],["git/git-index.html","7b1d5a7d90b06335c59832b94cd14df5"],["git/git-merge-choose-one-side-code.html","0911b265fae4258b5fba87fb7cac4921"],["git/git-merge-exist-conflict.html","d5b8dabec2bb5d3ee6e59d2396461f89"],["git/git-pull-1.html","ffedf82158cf2f121c6dab4b7497425d"],["git/git-reflog.html","a03e169364a862d709adc59ae868f580"],["git/git-remote-set-url.html","55140e5dddb7d8e8c49f4e6bf1e1bbfa"],["git/git-reset.html","e4df5f6c91dbbe8953312b4b6c806429"],["git/git-rev-parse.html","8c86e6e2359d70c6fe57425f0a10c765"],["git/git-revert.html","176b9e9f072d8f7168a0f61f13186fd8"],["git/git-tag.html","31eb8c467c76be37611cb26498c57037"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4bee474c341284ce48f22b7300ddcb59"],["ios/ios-oc-kvc-1.html","f9fbba077c9c565b1da6bfc05be5bdb3"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","4700bf7905727c6c318cccdd2ddc0f36"],["ios/ios-themes.html","37f87431619d52844db2749f7c790f28"],["java/java-annotation-request-response.html","0956e5e05efd1e789614b5d5aa684212"],["java/java-array-and-container-note.html","9017055c94cac39e837c1b6640bab56f"],["java/java-deploy-resource-folder.html","382ef959ec952b351f0ab8b6a9339a6c"],["java/java-jps-note.html","b0ad0b14ef8a9f4b0f73bb8f9bfcb566"],["java/java-pojo-bean-note.html","e5a88eb2e583dbeaea3457a78b872708"],["java/java-shiro-note.html","49ed16c27f7cf67caf6633742278410a"],["java/java-shiro-springmvc-integration.html","cbe108cd4729963e6349444156b2cf12"],["java/java-spring-autowired.html","e19cce9a3fdba1177d99cc75d316be04"],["java/java-spring-configuration-bean.html","0ecba090c27af1556e2a51451c0637bc"],["java/java-spring-restcontroller-note.html","5b33eef43910140ec207741a82078c45"],["java/java-springmvc-X-Frame-Options.html","199bac14364486f3802c85a5d658a7bd"],["java/java-synchronized-note.html","2069f649ffc8fe05763e3d152774fb6b"],["java/java-value-pass.html","d17f7110c175b4ccc5dd5e061c4ceaba"],["java/java-vo-dto-pojo.html","b20ba83a7a85b0808b90d8cd351d488b"],["java/url-rewrite.html","e11e7c2fd6cbc86886bee7a4f76b5aa5"],["js/js-logical-operator.html","9991775a037e5dd0270e639e660de5cc"],["js/js-npm-symbol-caret.html","ca93ce54d51e1015a29e499e5401b6bc"],["js/js-npm-symbol-tilde.html","c938919fd522de4d09c103d505fb834c"],["js/js-this.html","2cabcac829d3c29ec0ec0aa7da2329b1"],["js/js-vue-note-components.html","f5fb49244b7f7ccc6b71d419fb270b12"],["js/js-vue-note-computed.html","582dc86dbc93b4b4c4a761e70cfe6c04"],["js/js-vue-note-css-style-binding.html","6bf5abe290c9de32a3f3a0f0510559ce"],["js/js-vue-note-directive.html","0d8196f5cb982d7c51976c6ec0d2a297"],["js/js-vue-note-instance.html","90c3df4bd01734a17e141ff38fc9dd51"],["js/js-vue-note-introduction.html","aa638e51a796877231c342c8a761edc9"],["js/js-vue-note-syntax.html","062ea426bb52120b4a36b40d55f4c92b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","dd8929ed94e722d06c30e768c0ce5541"],["linux/mac-find-port-occupy-process.html","794b536cec5d76d204c574165eadfbfb"],["linux/make-vs-cmake.html","c93803621ee84609f3c1bf7ce75deac6"],["linux/shell-command-awk.html","a57a2efdf8b624331f3c623b61089980"],["linux/shell-command-df.html","fa5b8e7372a9d726c594a7509acf95d6"],["linux/shell-command-du.html","7ec5dc207d89d2d4f73630c2d81652d6"],["linux/shell-command-netstat.html","b396721d31cb621b7fa93b431f4c810b"],["linux/shell-command-sed.html","452feb227b2c3037ff22fcaf979dbab0"],["linux/shell-command-tar.html","346f6e076eda0609f88dc2cd94d3faf3"],["linux/shell-command-top.html","a76d95c7c9ba6230c6cdd10ff6578778"],["linux/shell-command-touch.html","27c096c3a9b8ecaacbab950ec7eb0f32"],["linux/shell-command-which.html","eb971f32912e59b5a7d3ecf55863b0e1"],["linux/ubuntu-user-add-delete.html","0a4cd3c27c1f9f67d68492e41f1a0799"],["mongodb/mongodb-collection-aggregation-introduction.html","00fef5129ea44920053584fd23b09097"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","cc68cebf7d238be99436b5df486afbbf"],["mongodb/mongodb-collection-create.html","aa4bdb5375e66436a3e05d1f16f106d1"],["mongodb/mongodb-collection-delete.html","23971e5fb3ab17aec1e7522037e9d032"],["mongodb/mongodb-collection-find-1.html","d05d08899361c8c6f2791c4bc0c9f9fe"],["mongodb/mongodb-collection-find-projection-operator.html","31ecde3a885199a1145c601ba9f86ae1"],["mongodb/mongodb-collection-insert-1.html","383778e87e132a5afe0ee66ef9510164"],["mongodb/mongodb-database-create.html","515156572f7e70664755f5080f01e1a1"],["mongodb/mongodb-java-driver.html","e586bf026441a43e100f82dc911c69dc"],["mongodb/mongodb-schema-design-note.html","89a3a48a7ebc4087af9bdf867fa50f86"],["mongodb/mongodb-study-note-1.html","21602caeb291e7b8a128da97a026cc18"],["mongodb/mongodb-study-note-2.html","97896919134cf509f6958f70d393b1c3"],["mongodb/mongodb-study-note-3.html","2ea8a7ddf0b11e4557156e1638534ca8"],["mysql/mysql-ddl-handy-book.html","d54663d23f8a0f50833514efcb034d6b"],["page/2/index.html","91dc47e3498576b60687d8e06c96c7ae"],["page/3/index.html","cceccb9fd3cd3f39aca2a508af33a660"],["page/4/index.html","4fea28a8226c080317ec6cc99fa302b3"],["page/5/index.html","daa6d566fd7e98b3020e8944c229c2cd"],["photos/index.html","28e556899da14c77c13a25dbf34c5b1a"],["python/python-args-kwargs.html","32fefca92341559129d8da6265951204"],["python/upgrade-python-under-ubuntu1604.html","23564e79dbe67bb600a0fc3b6c49445a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","01f29385664a6f54a03ab64e098aefd3"],["slides/index.html","670e1f57a9ac896af523506fe92bf09e"],["tags/Autowired/index.html","c683ba7a60249ab5249c726049dfa1f4"],["tags/Base48/index.html","a5904d495c2fd5215f6008fe5e6152b4"],["tags/Beans/index.html","5e7005af00a36d8d3e7ba07bf2816557"],["tags/CSS/index.html","9f3ccc22f3387855f83c45516b1617e4"],["tags/DETACHED-HEAD/index.html","4c6bbf239e4e290dd17293e96b1dc2f5"],["tags/DTO/index.html","cbe2001a1ea7ca14c42d881e88a8f62a"],["tags/Git-Flow/index.html","eaff34c5f45c4a026124fba3b135d9f9"],["tags/Git/index.html","6820925bbaa113eaa7153fd9141ae526"],["tags/JS/index.html","7cb232627675aa205913fed04ce56c9f"],["tags/Java/index.html","d8d5d13c1ac98cab546160dc6c928e9f"],["tags/Javascript/index.html","45993d3e363b89d5eedc5540ec3e32a6"],["tags/KVC/index.html","f248caba19ffe3c69fed2839bb5bdccd"],["tags/Kafka/index.html","8fca1df46e2a14c8e8463c7f9c324942"],["tags/Linux/index.html","db062f157a51d0a21ade85e11321748b"],["tags/M/index.html","2aed52f477cb986d85c612fe37005329"],["tags/MongoDB/index.html","6957482092e6d7903e3ce271bd3edd9f"],["tags/MySQL/index.html","3844b3424ab72924648181ad81d086c3"],["tags/NAT/index.html","c268a18a73713fe6abc66a0f6a8ca399"],["tags/NPM/index.html","317c28610745eb1c34ac3176e3efbc40"],["tags/OC/index.html","a094f109719f6ccdcf6423c9943bdf67"],["tags/POJO/index.html","cf889ab3f0aa5e9070ba994b5c0f7436"],["tags/Python/index.html","a291a6f73958fd31b9cb39bf1057698d"],["tags/ReactiveCocoa/index.html","d11a1b91dda5990dc23b1aa0726e69a3"],["tags/ReactiveObjC/index.html","f8f486d0cc5b09ca6849101e50ae05d6"],["tags/Repository-not-found/index.html","f3245454dfd6c500c528f3522362223a"],["tags/RequestBody/index.html","75ba16325445adeb1300fc3ae8e88e54"],["tags/ResponseBody/index.html","161ceaba5f198eb5d32dc24fe62e7fff"],["tags/RestControlle/index.html","d91d98207b1671efc37de22424d52d00"],["tags/SASS/index.html","833df9ef2a162696beb7608771f66020"],["tags/Shiro/index.html","37912ee7f214aca98626dbca50926abb"],["tags/Spring/index.html","0fdbf84433de86c1ed4a7a090af430e7"],["tags/SpringMVC/index.html","8dbf457706d359863555f4ef6899ccd2"],["tags/SprintMVC/index.html","3ea401d07cbe90eb7374589c53408079"],["tags/Style/index.html","048f53db430346390dc648fcbaca8feb"],["tags/Ubuntu16-04/index.html","4375c109f592d1668e05d7d765b76599"],["tags/VO/index.html","c0f9ee79c8b9adb5309ef02549179611"],["tags/Vue/index.html","08a90a484eb42e06e9130008e3123822"],["tags/Workflow/index.html","dcd67cae31746b33acf412bee23d18de"],["tags/X-Frame-Options/index.html","36f844aeb6d73ff5e5f64c517ebfda7c"],["tags/aggregate/index.html","146d3202f25a7a04633916a9f20559a8"],["tags/alter/index.html","47a7c40bb986555ed45ff48f085759e1"],["tags/annotation/index.html","831ebf5dd6ad25fcdb2e0c489bf7ad68"],["tags/args/index.html","618b6e1276638d53bbc917bc20a7999c"],["tags/buffer/index.html","10222cf085309a8c8655b2ecf125bd71"],["tags/cache/index.html","7e4985547b56fdb0e50b3535934b213f"],["tags/change/index.html","7805ff69a78c1b2c14f0de08663547f3"],["tags/checkout/index.html","95d8c3fd19578f793303832ef8e4baa9"],["tags/cmake/index.html","cea7e48a74f5ff547933da83776812b2"],["tags/collection/index.html","da221a0c8df1b2ee29c9bf6148df3a91"],["tags/component/index.html","c75dba979c8ada009af7025c1162e7fa"],["tags/computed/index.html","383cf4e5edf12a8e9fbd14759ab3c8c4"],["tags/create/index.html","fc40683df389f3a4334713dab90d0c04"],["tags/database/index.html","4c39734e7335d9708b5977d258292815"],["tags/df/index.html","4de49b1a7e4d2d19d6f52f54a914f0a5"],["tags/diff/index.html","b151e8bf160cc27214876d91c3f9a909"],["tags/driver/index.html","58637c2b83c165cefe139a8d1ac99123"],["tags/du/index.html","8c4eb64974438435adf84da1efd3ea4d"],["tags/fast-forward/index.html","a78146189753b9fa3f93685c8fa9ecf3"],["tags/ff/index.html","72202ef7491e1a67f0067b974c2832fb"],["tags/font-size/index.html","245263fb18306bd949bba8911b8ef1f5"],["tags/font/index.html","ce3fe8f696ba4e4f591c6b2356296f18"],["tags/free/index.html","1a995590b1bb98eb76260fc9d2a3ccc8"],["tags/git-branch/index.html","54ed01c76b9cf99e914f34b149f37fd0"],["tags/git-index/index.html","35de9ef755d36343f1318881aa5b7dbf"],["tags/git-merge/index.html","f35f64f6e59a852d6c9907628af8198b"],["tags/git-pull/index.html","d831bb6c49a219d5e69197596cc48fdb"],["tags/git-reflog/index.html","3a0dc5caa30529404b843d79746425da"],["tags/git-reset/index.html","d345b13157e88581c87f4b6a628b1775"],["tags/git-rev-parse/index.html","af171de2b2ae532634a52639c2ab1507"],["tags/git-revert/index.html","fb848ea85ed97dc7429826ba1cc38b32"],["tags/git-tag/index.html","ada34d322c745a74ae1fa19db82b5496"],["tags/iOS/index.html","b9620804c3a54c2d1b17f1d9839413ec"],["tags/index.html","3aca00c540e2b993756f0996593c8ada"],["tags/jps/index.html","09100f53a666e12bea2f9aee15ea4798"],["tags/kwargs/index.html","98a7c0ced016b8de63673a163923815e"],["tags/mac/index.html","54d148ae99f6b7fff3eb9f9166a74bd9"],["tags/make/index.html","946caaecf3e6ba96f36636b3fbeebed4"],["tags/modify/index.html","0bd922663f0a541d9613abf93f5df64c"],["tags/no-ff/index.html","bfcc317694f85371e819f4f0e76b7fe8"],["tags/rewrite/index.html","95fa6878ada3c75098dc35d7c661009b"],["tags/schema/index.html","899a73ab96cd4b6e295b882772586c4d"],["tags/shell/index.html","ca34039b4a044d8618c8ad04e7fdf1bc"],["tags/synchronized/index.html","f6aeafff7be3351a1b73e99711306d2d"],["tags/this/index.html","d0f2d32523a6cf29a6f3e39e8a3f9a58"],["tags/tomcat/index.html","258fc7c55506fb42332c316037a9f86c"],["tags/top/index.html","8a8188ab2ce30825194535d3a004247f"],["tags/true-merge/index.html","50c66eb651cbbcb992ab251c21088cc8"],["tags/url/index.html","e0e000b6913aab99b88cc3aed6df36ed"],["tags/windows/index.html","c2abb50f31e397735b0605e4c0ddc75f"],["tags/一棵开花的树/index.html","03a2da6f5e9c11e885f446a8d5056eda"],["tags/主题/index.html","76110d7bc8d67d99f8f9797fbbc6b136"],["tags/介绍/index.html","cfa8d928ca4a6fbb61bb0ea53d1bfe41"],["tags/代理/index.html","b25eaeebaf690713a44237db5a2d12c5"],["tags/以太坊/index.html","461d12e590dca7d7114d0ced55c4d221"],["tags/依赖包/index.html","5e52335e282a968678bebb02a14b3d42"],["tags/修改/index.html","cf4d40f117424db7178c81da2894c53f"],["tags/值传递/index.html","e68cea59082549323e7edc935a071850"],["tags/冲突/index.html","04054ae062e271cc1273f254992d5a86"],["tags/分支/index.html","ad6e407892c43b2ada6fe0fa7ebd8f59"],["tags/创建/index.html","82351c90ec494d7f0b9beb406562bf52"],["tags/创建数据库/index.html","1a98068788f17d1b97e3cefac39022ef"],["tags/区块链/index.html","763ac46324f1328e904345f47d7ac30e"],["tags/升级/index.html","7148163d5f80bdde25c92e1c2389b21e"],["tags/参数/index.html","e19c7a8a7b723de2cdb14c58dc533cc1"],["tags/委托/index.html","07a0238767d9e82d5b1a27b437469538"],["tags/存储/index.html","9ac0252fb0a4843c291e0ae1e1566ec8"],["tags/存在/index.html","6695b7e1ae9abc7d5190174df24e03f6"],["tags/学习笔记/index.html","eb25d815a3ed522a5a50d6e02b42cdcc"],["tags/实例/index.html","e7f9954c6d3ce6e64ef396da1d4c67b5"],["tags/容器/index.html","2984572b8f6f3bc27efe4bead7699664"],["tags/工作流/index.html","4cf6af7e47c27b0e92fbec4410ba8656"],["tags/工具/index.html","8f695db88bc8583bfb9a10084a1d213b"],["tags/席慕蓉/index.html","fe6d10c60eae0e0c443c2a833641a118"],["tags/微信/index.html","9b85387758c0cfbfcb237b773273d446"],["tags/插入/index.html","94414d17fe331eb786c8ca7555ce66c0"],["tags/数据存储/index.html","63092faedf20cfdffd38da49c7a9f661"],["tags/数据库/index.html","308147b624834f1548edf715a86941c8"],["tags/数据集合/index.html","604005904a5d4ae4316674ca0b8a17c7"],["tags/数组/index.html","fe0ec90deca942f4a18fa9ff5a37da6e"],["tags/文档/index.html","55370eccd6152c33d7a1ff04e8e2406d"],["tags/文档流/index.html","1341897be6e45117a1eb5af81543434a"],["tags/智能合约/index.html","d1b75a8b926b02e59efb81da0c48aeb3"],["tags/标签/index.html","54802a4b083b2c9e73467175304662cd"],["tags/模板语法/index.html","4e88b5139a9b71e09003526065004919"],["tags/比特币/index.html","a1128f81a85bffe5cc9a36904c5f5b4d"],["tags/波浪字符/index.html","b031cd689b2bc01d919a997c2e56cca7"],["tags/注解/index.html","71256f7afae3e057d169358996fde650"],["tags/用法/index.html","1f727a2bb7258af5203cccd30e06edf6"],["tags/穿透/index.html","4e845adfa16cb82ca7dbfc9abb6707d8"],["tags/端口占用/index.html","0e10e46ca8ff073b5d8755bf1e7cea5b"],["tags/笔记/index.html","0e8addb8480bb1c61d717a5570f01da9"],["tags/符号/index.html","a68539f7da3f32122630cadc9bf92ee5"],["tags/组件基础/index.html","3b53ccd0515a6ab8f2d0998d25680889"],["tags/绑定/index.html","0c3e0426dc8efe3c8ceda8bf8a206095"],["tags/编程/index.html","34ee3a9a47ef8c84f5c0f9aa61456f44"],["tags/职责链模式/index.html","d747d8e85767f07d3b0c05bae974d59d"],["tags/聚合/index.html","2cd6a21af67eb6d44f47310e8ee2bc2f"],["tags/自定义指令/index.html","bff0d93df31a771092a945abca38180b"],["tags/计算属性/index.html","c2bdb23b4db527b69a82030ea52f8b5d"],["tags/设计模式/index.html","d68cdafdb976c59898551666a921ce28"],["tags/进程/index.html","aecc52eb9c80049925df9a9b1edbdd3c"],["tags/远程仓库地址/index.html","781482ace79ad5f5660b8d881c7d6974"],["tags/逻辑操作符/index.html","fb31cbc4aa9c1a6f8038f47a19b11116"],["tags/部署/index.html","07a3c5a47e2e2e2483abbbcb85c1a69b"],["tags/难度/index.html","ed310e62c0d5abc5d7d0b26cad977b61"],["tags/集合/index.html","daf806c49fd3b26d4981773a20d2b82c"],["thinking_in_programmer_life/full-stack-programmer.html","53ee2ce0fe7545012d63e5b2e0130a46"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","702cddd3ed19772a8134c836420d6d69"]];
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







