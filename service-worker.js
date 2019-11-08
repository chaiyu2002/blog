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

var precacheConfig = [["Kafka/kafka-introduction-note.html","9b5a6a59231b02a01cd5a244ace2e8d0"],["Kafka/kafka-storage-principle.html","46c9b0319b712e51493b2278e2505949"],["about/index.html","28e50f186b4d861d524bb59eaeb215cb"],["archives/2018/06/index.html","1e58e396461aa18287c570b4ebb0c607"],["archives/2018/07/index.html","99279c83c79c4d61b78c4a0039f19038"],["archives/2018/08/index.html","0f3ce47f9e92e572600f5f00339f0f03"],["archives/2018/09/index.html","b9508c63449f425780bc09edc0262073"],["archives/2018/10/index.html","db836413e81460266af685c46ce6f7ca"],["archives/2018/11/index.html","0cdcc50515a34df39ff9a256e0a9d98a"],["archives/2018/12/index.html","d30661ae645c35af2ab05b288d20d0e0"],["archives/2018/index.html","c6b0c3344ffd508689d17b31017f466a"],["archives/2018/page/2/index.html","6a814dbb02559aa4fd3f2f4346258618"],["archives/2019/01/index.html","2ffb9073186a2073fdbd265b2ce6c81a"],["archives/2019/02/index.html","d04d7eaf198bdda68d91bdd26132c481"],["archives/2019/04/index.html","439dcb5e733945e0dd81645af97eb719"],["archives/2019/05/index.html","ec14ea61c63478743be83036d819daad"],["archives/2019/06/index.html","6a19c103d334b09e2d5e268789285bb5"],["archives/2019/07/index.html","f8e920717810c5a42e39bb6aac3725f9"],["archives/2019/08/index.html","23b62d8983c9e4a5a9756111665a227c"],["archives/2019/09/index.html","086b76dd63111779635866dcc9853516"],["archives/2019/10/index.html","e8d3ec210c6a761e034de86b331c2f3f"],["archives/2019/11/index.html","ecb39437ed7e614bb8f6f76b1f1f4171"],["archives/2019/index.html","785f097cacaf02098c74747825ae8682"],["archives/index.html","fd1ba93791715766059f011155db1c54"],["archives/page/2/index.html","8da25abe6492347a8c01b5943d02f782"],["atom/index.html","bd0ff3990572060833ceea68b6311cbf"],["blockchain/base64-base58.html","9e5db1b55c7b179bf6f12c01292e34d5"],["blockchain/bitcoin-data-storage.html","cd2a15ddfd3bbbe291fadc66e4b83729"],["blockchain/bitcoin-difficulty.html","2633f875dfc455d16ccf34abbcafb628"],["blockchain/block-chain-ethereum-contract-program.html","81d0fdb89d3982798d19dd65d5f8bf9c"],["blockchain/ethereum-programming-introduction.html","b94c4221d4b545aade85ea2ff4056f61"],["blockchain/ethereum-rationale-introduction.html","9edfac1150f4d0307db0a4c1f22c4568"],["books/index.html","070b1bbd3a6ac4268118e996aed7dd54"],["categories/Blockchain/index.html","c507aa8684ce158b6458613e35fa49b7"],["categories/Blockchain/以太坊/index.html","b7a6b779b1dccdc8b50a786a5007b344"],["categories/Blockchain/以太坊/智能合约/index.html","b32a98a9c01bee469a9a528a50ef6734"],["categories/CSS/index.html","162ec0c91b1833db5186166580d84813"],["categories/Design-Pattern/index.html","c8fb6ac4dc18c2fc4664f1a6419697de"],["categories/Git/index.html","ddf5f82d15b896d4703071e5cc5aee49"],["categories/Java/index.html","e6ae3677261bb9ef10e8cece87504b6c"],["categories/JavaScript/NPM/index.html","10864fff264ed8a0b7aaafd0fabb546a"],["categories/JavaScript/Vue/index.html","f91b6677729ab2bfb1f86fc981d263fd"],["categories/JavaScript/index.html","e2f45cace4bb268324c5e6ecbabe5b39"],["categories/Kafka/index.html","3d504646d2322140f20e4a5353a45ab0"],["categories/Linux/Shell/index.html","135cc34ee8cd13007a5870a5d3120e8b"],["categories/Linux/Ubuntu/index.html","59a79bdaecfac4717091e1e69a9e5b0a"],["categories/Linux/index.html","d6227cdc91d1c76235d8f61b47d52d2a"],["categories/MongoDB/index.html","f6a0e725a741e90628b6d02c84e2f772"],["categories/MySQL/index.html","95e9b92a8cce69640e868d394cb7cecc"],["categories/Python/index.html","e3f4c0032c0c66c41768f71cac2aab58"],["categories/iOS/index.html","b527456ceba79635c5c4618cf0bbb616"],["categories/index.html","3fd9572c07f1c243b5efda5b5cc22af5"],["categories/微信/index.html","6c6675eada7bf08717fbf4019da32256"],["categories/数据结构/index.html","2613f69896d17aba7f1f2895c921d177"],["categories/杂记/index.html","c87b33cc2e94707c9ec0c16b48a1371a"],["categories/程序人生/index.html","f9507271fe0c2f1bb38c70821447d91a"],["categories/计划/index.html","b7fe446ca8c18cf9b25a9047d8f78875"],["css/css-font-note.html","c74b62bf42262495fdfcc6debe58dd2f"],["css/css-normal-flow.html","3e91de22322c3ac14061c3f8acd1c4c7"],["css/css-sass-introduction.html","3eb36e183b1a95ccf294c58adc316155"],["css/main.css","148b65bad3fcabeed5d61eb31b753d35"],["data-structure/B-tree-note-1.html","42b3828e8740b1e54b96ef11da041aea"],["data-structure/Binary-tree-note.html","340f203d58b4d41056925492666c952b"],["design-pattern/chain-of-responsibility.html","d971126341e3b80e0eba6fbf8c997350"],["design-pattern/delegate-and-proxy.html","bee03c90c2b812e0f61b9d73cdcffe64"],["drafts/configure-multiple-vue-project-with-nginx.html","9e77b9a349ab37d5d38c865326f24e8f"],["drafts/iframe.html","dd6bf082f3a9305725f7d5b2b48277dc"],["drafts/record-re-install-mac-os-10-12-6.html","349b0e4413992f1a37559f65fefdb4ee"],["essay/note-ximurong-tree.html","b15db12b4e0fd3c931ce60e063ee8d5e"],["git/git-DETACHED-HEAD.html","667074a3d5d260aa4db9bb1ca2c12d93"],["git/git-branch.html","eae9f3f6df7970648ba920d075355b45"],["git/git-change-server-password.html","adddca71447f2d880f290ffe8c899e61"],["git/git-checkout-1.html","353a4aa076c15e19b53196e42dc0b9d3"],["git/git-checkout-2.html","66363c39af860d836c071924bc427bc8"],["git/git-diff-m-symbol.html","518ca3f9cdf88f5b904e8656e4f416e8"],["git/git-git-flow.html","2562cbb24e49b0531bc168bb4586206a"],["git/git-git-merge-ff-no-ff.html","4528b2c26d644b02e4b0fc55120378a6"],["git/git-git-merge-true-merge.html","d337bb87a2d208bb1d3653fe5708f124"],["git/git-gitlab-flow.html","9547b127c5b0f5e83f7f4261fdb8a661"],["git/git-index.html","119a8bcda18bdabbfa28e6db6707c6ca"],["git/git-merge-choose-one-side-code.html","79468ea0cbf5e1f7c1a9b0de7c2ec227"],["git/git-merge-exist-conflict.html","c210b8a5e56042ce213291aaa543de50"],["git/git-pull-1.html","af7d755512ae972849ccf193ff2fa0ab"],["git/git-reflog.html","aa25cd734a75e68729d05f22c07ce522"],["git/git-remote-set-url.html","159128e79cff874e7e5c577fa9e5c5c8"],["git/git-reset.html","4c1b4772294f9381a33108facc390758"],["git/git-rev-parse.html","b05d6c4bf0f224d1fb49ab4750a6c04a"],["git/git-revert.html","7588ff856c64dbcefe69604c83a78ad3"],["git/git-tag.html","d5f506715648de9ed0c4308b5fe9f20f"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","d41f08d794bd9cfb9cb1a0b2651361f2"],["ios/ios-oc-kvc-1.html","faf98efac41af8c454c53e654d9153bb"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","f3f3409443c5d43b8d121229a8e0c719"],["ios/ios-themes.html","f8dd27c1c72a79e70e550038a1385232"],["java/java-annotation-request-response.html","dd6a62b970ab16c0116674c6730227ba"],["java/java-array-and-container-note.html","cda31331f5aa1355f0642111ab6c689b"],["java/java-deploy-resource-folder.html","72ebe66d6a6f3c18efa0127e306e1dd7"],["java/java-jps-note.html","200db0a58aff77e7e70a76fb6929801f"],["java/java-pojo-bean-note.html","17908ed1eb9d031c457ee47d7af46ea7"],["java/java-shiro-note.html","af3d2fb953c2de2c0d165729b2fc80f8"],["java/java-shiro-springmvc-integration.html","d93ce83daed30fa664322fa51c2cb23f"],["java/java-spring-autowired.html","a5708108d040bc83e44a6183b0d6bf4d"],["java/java-spring-configuration-bean.html","1df5c71f69ed510821115d663be9e7d9"],["java/java-spring-restcontroller-note.html","75b01588704a0cdaf98b6200d8bb5637"],["java/java-springmvc-X-Frame-Options.html","338e5693f8dd5fb23353f2e620b72a94"],["java/java-synchronized-note.html","409b9d6612828a2224fbd937cf616f14"],["java/java-value-pass.html","d81b8eaab56a54424ef3ea74c6e48638"],["java/java-vo-dto-pojo.html","c83f97580022aea1b022534d0d2e1b7e"],["java/url-rewrite.html","6c7ca2e71851a429e6cdc8a1db5fffcd"],["js/js-logical-operator.html","384bee14961ef78b4456b426e7b146f1"],["js/js-npm-symbol-caret.html","a28e192d845b29d9964b868cd2e52ec2"],["js/js-npm-symbol-tilde.html","254216352b7c4bfbc0416a276c4cc9c4"],["js/js-this.html","6c8428bcdaf40e4cda128bd75c04c463"],["js/js-vue-note-components.html","8ae23e7a396831b41e7fbe696736f3e8"],["js/js-vue-note-computed.html","b8bf3ee819e415921f800fcee4de78e8"],["js/js-vue-note-css-style-binding.html","9db6582b36b8a2065169ca4878fa1156"],["js/js-vue-note-directive.html","f92f8703600e17058aa6cdd318627b5b"],["js/js-vue-note-instance.html","cd7213ff53fa0535fed3dbfeb26b8c0b"],["js/js-vue-note-introduction.html","04e6c67fadfb069f3a4325471e47e469"],["js/js-vue-note-syntax.html","62f06fb91d4fc4e8ebe2540241af9872"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","ff70724829f62abbe800805ff9550f5f"],["linux/mac-find-port-occupy-process.html","16eec410203ef14f2246a1f7ebc38bae"],["linux/make-vs-cmake.html","f9b1d1a4874939c4bdff65ad6e6892b9"],["linux/shell-command-awk.html","2d833f20a5b712d18446facfbe2453f9"],["linux/shell-command-df.html","f534b7341c6dc8ec6f6b966a201af932"],["linux/shell-command-du.html","8c818041ef952a4cef75be75ebb17918"],["linux/shell-command-netstat.html","f6f31684f1805c105dd26e1981819d41"],["linux/shell-command-sed.html","ea3f4888d5d06bd530207153fb95abd2"],["linux/shell-command-tar.html","b254b01607ec15c4efc2990383f27bd8"],["linux/shell-command-top.html","201347fe3d7b871f3ed4aaa2249cc950"],["linux/shell-command-touch.html","6d7dfb71273c115a11e14ae3574f099d"],["linux/shell-command-which.html","394ee46be51db4d0eb0222ee2c84180d"],["linux/ubuntu-user-add-delete.html","7643d74250486fc2bd984969c6198bed"],["mongodb/mongodb-collection-aggregation-introduction.html","887ad60a0f33ea5a8f51762d2877c562"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","92e1994b214d344ceaa99b3f6a75ac97"],["mongodb/mongodb-collection-create.html","ad3967220c4dc66f3fd06165eba32d6a"],["mongodb/mongodb-collection-delete.html","d269a5866c96a83d8a05a065c0ed4ad9"],["mongodb/mongodb-collection-find-1.html","a0bb7d6ef5be7d256700826d9c1a7277"],["mongodb/mongodb-collection-find-projection-operator.html","d77fc9d8533e6e107de35cfae9712c08"],["mongodb/mongodb-collection-insert-1.html","085c82acec7e6bd1358d534c62833084"],["mongodb/mongodb-database-create.html","a5e8078f4a211ab146ed675226a2fd7d"],["mongodb/mongodb-java-driver.html","7a0c62db2d52fdab4c6660096ea9ad3e"],["mongodb/mongodb-schema-design-note.html","8fcc9e6cbc7032dbbc217a405ecbd0f4"],["mongodb/mongodb-study-note-1.html","6d4afa93837f5b78ee294b6865ec3b2c"],["mongodb/mongodb-study-note-2.html","8669b4f5a00fcacef9a9048f1a6d1434"],["mongodb/mongodb-study-note-3.html","767f3766356f7ae7675ce4cae0e3f8a3"],["mysql/B-tree-note-1.html","f10775d73e182c2de0a9ad9abb273555"],["mysql/clustered-index-mysql.html","7342249355fe9f1f52a9ac01909a9544"],["mysql/mysql-ddl-handy-book.html","1791dd1ccd612d8e9e2c681a0612b7bb"],["page/2/index.html","7ab1187a6b558da825153fbe25eacaae"],["page/3/index.html","70be039e13a2f108ba4a7c4a3914f9b9"],["page/4/index.html","80097a5a5ad9e1e5f8990d0188897308"],["page/5/index.html","77552d18c53925da84a7dffbb502d785"],["photos/index.html","f13ce71c7284270edee701f9eedf11ba"],["python/python-args-kwargs.html","2cfb201df53ace1d825d58891db2b228"],["python/upgrade-python-under-ubuntu1604.html","c680bf2494e2080f56946ae6f0dfb035"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a198fa22400ed4e99f699c49dfb9abf1"],["slides/index.html","f91e329c64b770112bbb5814087197bc"],["tags/Autowired/index.html","2b4c2b3c91376031da2cf716961f0281"],["tags/B-树/index.html","0c4d2ff5f7dc22ad9959d70df7ed6319"],["tags/Base48/index.html","23b9a45ed270805e8d756978002a326a"],["tags/Beans/index.html","173eb8c6c326e22762b6e69e09fb8f2b"],["tags/CSS/index.html","9726efbcba590761d32dfa218c14b53f"],["tags/DETACHED-HEAD/index.html","bf7534b78fe1533cc6938be4e1116ae6"],["tags/DTO/index.html","e185cdc059e910e3a00ee6699cd7de83"],["tags/Git-Flow/index.html","a69fe923d11c54a3f62ccd45e39b1187"],["tags/Git/index.html","00d65ff72e8d15eba062ee32951f3eee"],["tags/JS/index.html","4ce7a0ceaea5b74c98abc303783537be"],["tags/Java/index.html","c228dd9431f80d36229007b0ee6653b7"],["tags/JavaScript/index.html","8467b4ac7655c404ee3fc5a3820afe0b"],["tags/KVC/index.html","068a72a19c18b05da6ee0116a0f43315"],["tags/Kafka/index.html","30657950d4e958cde0068fb00d040834"],["tags/Linux/index.html","6c095f89ca45e3285550cd1d9a59be86"],["tags/M/index.html","d1cd74743a11a745478d87b50b32b3dd"],["tags/MongoDB/index.html","202f5939b533be0cb827aaf88a9d538d"],["tags/MySQL/index.html","4d942dedc508c7571f912dbbd5f46121"],["tags/NAT/index.html","8012559d9e96a0940a557943dc18f53c"],["tags/NPM/index.html","cbd08945f1117af790d6527648bfffff"],["tags/OC/index.html","6eb0c169e6f728d30b86782c4df2e1f0"],["tags/POJO/index.html","0d7b7f60ebf01bd26f3979026f14cfa3"],["tags/Python/index.html","8af50d55f2bf6ff6f764f2abf5d494cd"],["tags/ReactiveCocoa/index.html","34e880dc80e9c7a3710b9a578cc74dd9"],["tags/ReactiveObjC/index.html","4087eafb41775c13ec3921a359996014"],["tags/Repository-not-found/index.html","25badc6f88e33b0b38be1ef37cd1f750"],["tags/RequestBody/index.html","97aafeb9773afa6ae428c0c4294fc82d"],["tags/ResponseBody/index.html","80eeb81aff5f2d5f63f661948774be9f"],["tags/RestControlle/index.html","bece6a5ecf92a9dd903cf5af92116449"],["tags/SASS/index.html","b4bd7b36a19af5f2ad0d557eb15c7268"],["tags/Shiro/index.html","a6efbfd256ea714bcc9a266fa35b3303"],["tags/Spring/index.html","e0e1cdcb17b9a99bec99856c2f2d3b92"],["tags/SpringMVC/index.html","6630c2bf9cff27b2a61672de7a4d0f69"],["tags/SprintMVC/index.html","b9b6ae3a004541d87d628bc6eeb2a5f2"],["tags/Style/index.html","1020ee9bc125ea3ccc1ac0f96c67d74b"],["tags/Ubuntu16-04/index.html","59c36ad1b2b3bd91da8eb00c142c4b5e"],["tags/VO/index.html","9b2a4e50429edeea8973ec1e8f15c140"],["tags/Vue/index.html","88adec19c00cd8eccf9a1dcf59cf49e1"],["tags/Workflow/index.html","ed0ac3a6e5a3c30c8dc729e492d6897d"],["tags/X-Frame-Options/index.html","0708e96be7ac1bc5899e4d82d961fb01"],["tags/aggregate/index.html","9a04010e14f6e731605fe306361a3d63"],["tags/alter/index.html","91dc5ecb4afbc04cc62b0ae0395f7b47"],["tags/annotation/index.html","478470031120dd337e817c19c0af5fb5"],["tags/args/index.html","6b9a4530e20155de78f6d6bbccfe442d"],["tags/buffer/index.html","aabaa18f622c1a296b852402cb14b2c6"],["tags/cache/index.html","7d1f5cb3f9bb20f7dd2bee979ff0d77e"],["tags/change/index.html","0c4e0c07f8e36e7dde2323953037aff5"],["tags/checkout/index.html","123e8ee428b73eb140267d20b74f01e6"],["tags/cmake/index.html","0db29eee155f37bb522d3b6157a8351b"],["tags/collection/index.html","5b8526f6286ec70bc1f7a69e6788cddf"],["tags/component/index.html","7eedcbf39e30b2bc3258afadb1c59796"],["tags/computed/index.html","05bc730cd2d1e20b4931868ac027e427"],["tags/create/index.html","4fdf912822687cb851cc34f252365de8"],["tags/database/index.html","e8e9dfbc942fc5d96fa036aef00d7353"],["tags/df/index.html","821137740f0eff1bd36f70d155d40daa"],["tags/diff/index.html","b2c220d0d25d663d5badc0af1c642a54"],["tags/driver/index.html","b7866157dc298b9b5bf8213385da4f53"],["tags/du/index.html","35f9eb67713f276d1a696278bac710be"],["tags/fast-forward/index.html","699b5061d640cff06cf31bc1b53dac83"],["tags/ff/index.html","2f6133617f29b52781587162acdd61a4"],["tags/font-size/index.html","5736f12ae32b872d1f4be3e9d8a93e29"],["tags/font/index.html","99cca8b8222c47adb9b1717c1a77b8d8"],["tags/free/index.html","1ad8a7a63b7ccef1d88fef50a6b5f031"],["tags/git-branch/index.html","52e446ca03c25b8e216fd1739d440a0c"],["tags/git-index/index.html","6cc5724f9229821817e4ce937830f483"],["tags/git-merge/index.html","f659ba0980cbec4ec20fd4450a9bb340"],["tags/git-pull/index.html","213a915f811d3d0f5632ff66403fb825"],["tags/git-reflog/index.html","5699d38283552a8514e15143917d9a4f"],["tags/git-reset/index.html","502d0fe6ee3a710c62f0d833f26a0b13"],["tags/git-rev-parse/index.html","6472623fe61c65885a1861ae2b141520"],["tags/git-revert/index.html","86995adcf5ba16c20b0d7c97b52ad316"],["tags/git-tag/index.html","2eba6d5f100e5640abce5027838d6274"],["tags/iOS/index.html","651d0a7d29b601aecf361f85d715c74f"],["tags/index.html","f9c28a7b8a2fbb74db42da31844dc4e4"],["tags/jps/index.html","4e14218480fa93f5b1385866243f9a68"],["tags/kwargs/index.html","2aefde5ced9933c9398933292bc0ed2e"],["tags/mac/index.html","a98de30e632cf86185cca952be95f132"],["tags/make/index.html","5dc431611e910174eae1ba7608e63820"],["tags/modify/index.html","0128aadee9397d37c6192ba027b8cd2f"],["tags/no-ff/index.html","0f859fec4cdf970b1a298376abc48db3"],["tags/rewrite/index.html","bde01ba2a81481a35e36e032a6b819d1"],["tags/schema/index.html","89a4554860a1d4d6ed060cd93080e0a9"],["tags/shell/index.html","ed11c00b510504f91d8f3a52f6e3ab12"],["tags/synchronized/index.html","f5f1f4ac51fc44d06c428655ba990f5f"],["tags/this/index.html","403f93dea1a8dc0746bdb490ec0af852"],["tags/tomcat/index.html","def05f4ee1acc29c23eecccdfb7a29ed"],["tags/top/index.html","c1b089ec712d2d28680cbf118dcdf6be"],["tags/true-merge/index.html","8217ec6e5f3ccefa5809145eff2ed497"],["tags/url/index.html","54ee08f6ecff3e3e310e4c0a33c5505f"],["tags/windows/index.html","2b01587ecb7cc91617ce8e335f1e3ae0"],["tags/一棵开花的树/index.html","0b3dde67da01d0c72807484708d7ecb2"],["tags/主题/index.html","b846f98aadd46fb089c360ca939d2f01"],["tags/二叉树/index.html","d5973e292bb58c3212095a9fd1730e67"],["tags/介绍/index.html","705ff1b9dacf0450d8d37955fe5aa701"],["tags/代理/index.html","315f80571be96772ebf46ca2440fb4df"],["tags/以太坊/index.html","7af46e33c40ae5c83a22307ce5a605ea"],["tags/依赖包/index.html","4cc9b0e6ee9a4addef5b00882129702f"],["tags/修改/index.html","3886482f0903f84c368e85590da332ff"],["tags/值传递/index.html","6c83e6c8a01a0850411a0d33e725ae31"],["tags/冲突/index.html","532f17c36f32deb76f14885fca6ba418"],["tags/分支/index.html","3771a461d5276bdf6acd901b83ff3ee8"],["tags/创建/index.html","62b8a033da0e9e14d158d9e8c871c557"],["tags/创建数据库/index.html","a088e247e85769e754c6b8cbdb84bf51"],["tags/区块链/index.html","d0d61b292eb75ee970bd30225f6c3539"],["tags/升级/index.html","c530c22980eeba015af74fa2780dc878"],["tags/参数/index.html","93d614195bd271fd9d0c8805182d378f"],["tags/委托/index.html","ba4eb298bad0b03af4daaf3048c69147"],["tags/存储/index.html","bebf9c89787913c9e7c532b662f25ad6"],["tags/存在/index.html","1d533340b61826c6adcc44bdda93d613"],["tags/学习笔记/index.html","3c349334d69c2c7321214e8d69e17cb1"],["tags/实例/index.html","06fefbe7dc7f8f70c7de38c0cbd511c5"],["tags/容器/index.html","058bfd6c50c28625303f0a5970b5f56e"],["tags/工作流/index.html","5ae9c900ad7e80e98d7942f36d779054"],["tags/工具/index.html","aaa7cf211ce55726ca03217a792e82b9"],["tags/席慕蓉/index.html","e1cdbcdf2225071b1c43ea436493a691"],["tags/微信/index.html","129867fe7333ad952dcc1f3f6e1dab6a"],["tags/插入/index.html","acf368344311e8c76583782d0e98e64d"],["tags/数据存储/index.html","2095ba55f5d1876e5631b9f859998b16"],["tags/数据库/index.html","96b9df05ee2259c19b50fd9e50eb4223"],["tags/数据集合/index.html","c7e0d3ea00a0cbba5c1a6621a7b0ca7a"],["tags/数组/index.html","326daaea87a5d82eb288c18e4893b020"],["tags/文档/index.html","c374359e91c112df5884344a8a93fa8a"],["tags/文档流/index.html","6d4cf3c8cb96ec6c27497e81c8d5eea5"],["tags/智能合约/index.html","dcbe598f0e121b0c7c132694242c7c0f"],["tags/标签/index.html","485c65ad4b8395d68b93a40d2595ded0"],["tags/模板语法/index.html","a16b8d437a8254b8c2cfe09af2fa25b4"],["tags/比特币/index.html","344fefd6f86dcdd1974a0590ac53063a"],["tags/波浪字符/index.html","8792fefe0b5d0214a74d1b51a203da95"],["tags/注解/index.html","7d7972a7d4c32750da5e2853d32d4f43"],["tags/用法/index.html","ecaca315653273334bcbb800a805b713"],["tags/穿透/index.html","bdc038f4f3e48ea4a3c3e350b6427acd"],["tags/端口占用/index.html","db995044e8647291be48c9d67b0e4304"],["tags/笔记/index.html","e12c88985d49ebf77e6dce3af952e587"],["tags/符号/index.html","a6d688c0db0141ef5dbd83e80cf0e85d"],["tags/红黑树/index.html","fe53d7d1e5d280a56e8ec17c72b87941"],["tags/组件基础/index.html","f20a4ea0d538150c8fcaf26be9f36e84"],["tags/绑定/index.html","811083226184e19ed91f6eee23deceef"],["tags/编程/index.html","0b996dfa4e01e5387d105be9d6600f93"],["tags/职责链模式/index.html","5fcedb9f519b4bce7787d7f8e27bc7d0"],["tags/聚合/index.html","94df0c46340ac4c9ec37de04c347e0b3"],["tags/聚集索引/index.html","ace691c1dfc5bae823f719ff57531b80"],["tags/自定义指令/index.html","0b328fba4896014c1f355e8ead1a2b89"],["tags/计算属性/index.html","6e56afa8c5550ffc43e0ef2641eaca37"],["tags/设计模式/index.html","b5c78bfcb4c1f41921be665e532be766"],["tags/进程/index.html","aac16fa78b3db9b2014d45bb432b093a"],["tags/远程仓库地址/index.html","4be033b570b305d525afb47371aac9a5"],["tags/逻辑操作符/index.html","72dc29bbd3227e985edd33b0c48ec208"],["tags/部署/index.html","94e0cc4bf7b8d79d2f483443baecfd59"],["tags/难度/index.html","e6249e197c97d2b8b1412beca98b4ae6"],["tags/集合/index.html","726ed0ddca0cf70df1dbfec4083c661e"],["thinking_in_programmer_life/full-stack-programmer.html","8af401ba68fcd0b5f26f683813134511"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","78cb2a82aa65d8d1672a68a5aca0ebe8"]];
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







