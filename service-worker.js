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

var precacheConfig = [["Kafka/kafka-introduction-note.html","ae2e2a0fb3e85f9e7f5671754e7ea43c"],["Kafka/kafka-storage-principle.html","18d0209b8f3f45c880c1286b6f5d3008"],["about/index.html","91e6513b53eee973ed419df4d33639ce"],["archives/2018/06/index.html","9d832af14a42e13de1adac9d3b1d542b"],["archives/2018/07/index.html","8ffdb9aca83ede7559b859044dbcc9ca"],["archives/2018/08/index.html","b6a2d63ec6c5a00b7a7ad4e787ad790e"],["archives/2018/09/index.html","9408959e3fe240c93e34d63f7877c6ce"],["archives/2018/10/index.html","79085f8b05372c1b421318dc2868efb4"],["archives/2018/11/index.html","a1b0e7abebd7c4cd035a7eceb067d16f"],["archives/2018/12/index.html","e95142a0edaad00607c7306e3afdb0d1"],["archives/2018/index.html","dbcdabe6aca05cfae9cdbf0c073d932a"],["archives/2018/page/2/index.html","f412796f609a7875d1c93a85be9ee693"],["archives/2019/01/index.html","095b1bd4001440c81f1bfdc51913edf3"],["archives/2019/02/index.html","4b4e7ba9ffdaa179fed38e3453151377"],["archives/2019/04/index.html","af5d71d5707146ef70df3db88e731d6e"],["archives/2019/05/index.html","e5348852b7661c905d62b56aa7ad7b7b"],["archives/2019/06/index.html","2d47b98ada83e704634578a970e93424"],["archives/2019/07/index.html","1a5e72c8cc1ea3ac56d99deea961269e"],["archives/2019/08/index.html","d93a7d34d9e2046624f1900b07c6470b"],["archives/2019/09/index.html","31c45970dac50cde4606e880437e530f"],["archives/2019/10/index.html","b2aa8eb32f6cd4995bd10a3e3aabf82d"],["archives/2019/11/index.html","94a95da7c93b3d9860299093bb4b87a6"],["archives/2019/12/index.html","e8fbfeeae95ea582b8a202ff32684d0c"],["archives/2019/index.html","7f3b6c3691d0eb61bf8435aa3ccda647"],["archives/index.html","6ba0271fbb305245bcff64a2a2af7923"],["archives/page/2/index.html","9927592f3b1119877fc8600f8cbc7729"],["archives/page/3/index.html","c5a474db067351ee741d9ea6b645ddd8"],["atom/index.html","7c05442e3716d699d27c8bf55246d026"],["blockchain/base64-base58.html","2dae7271c53603fc2fbaf15ef58a6eab"],["blockchain/bitcoin-data-storage.html","ed39ccdba791e8705f0fbe0e1dce2944"],["blockchain/bitcoin-difficulty.html","e1935daa16c0bc1c304ef1d6c157ab74"],["blockchain/block-chain-ethereum-contract-program.html","51ffb32c8d3f94ba29eb2722523bd12e"],["blockchain/ethereum-programming-introduction.html","c32c1f0746adebf6a3f338d67764574f"],["blockchain/ethereum-rationale-introduction.html","a494439e974141038b326d12ebd6b445"],["books/index.html","e11046c5323b5d25088760262431dd65"],["categories/Blockchain/index.html","55bc3bb55693e5e047b5d98041446204"],["categories/Blockchain/以太坊/index.html","fca5bcec98c3a7e5ad65a6a0865b56a9"],["categories/Blockchain/以太坊/智能合约/index.html","35ef1947f0e926b2f1112275be56bb75"],["categories/CSS/index.html","1f8fd7f57c2814c9dc4420a14fcc349f"],["categories/Design-Pattern/index.html","8476b6515daf8fba6fda158582be5128"],["categories/ES/index.html","31225193b83ae808095fee81173a884b"],["categories/Git/index.html","e239ba6e231ca1eacb97c6d414499018"],["categories/Java/index.html","dabd130022f9e311ba507482453520cf"],["categories/JavaScript/NPM/index.html","dd0b2030157c0a3e724bdf2062dc1a95"],["categories/JavaScript/Vue/index.html","15e9f8d7ba4a5646dc03cf96bcfcce86"],["categories/JavaScript/index.html","58eb8a567124cf5621c99da10ee4ae60"],["categories/Kafka/index.html","6666cf95bb4ddb10fccc7d00d2af4344"],["categories/Linux/Shell/index.html","3e26ae55f6f4e6f30845c1e3956c2cd8"],["categories/Linux/Ubuntu/index.html","cdf1eec84dc9892f69adaf708bab9358"],["categories/Linux/index.html","0ef342538a031673adf346752ad3bb76"],["categories/MongoDB/index.html","6a0f29f9d8a4d4732552cbe02781be22"],["categories/MySQL/index.html","12df24ec035f08912f65ba123da17d85"],["categories/Python/index.html","efa6540c41b0c62c1c78bb6c652bc317"],["categories/iOS/index.html","4a71ba9c32cc159c21a537d0bd5359e1"],["categories/index.html","0b9efdb0ebae42337381452e1360cadd"],["categories/微信/index.html","3de1bc0028d11eed4c76883d1753f9bb"],["categories/数据结构/index.html","57a6b612ffe73582aaec983198493cb3"],["categories/杂记/index.html","a4a3779269120b03c9000191501f6866"],["categories/程序人生/index.html","3ab6bd8da26ccded73f35ea734a83919"],["categories/计划/index.html","9c32d742ace3f38a6028cdd0f0a7821e"],["css/css-font-note.html","d23ff2aa71cc3bb51933498697950815"],["css/css-normal-flow.html","d9efc78dd8b1791082ada30cd36d180a"],["css/css-sass-introduction.html","871047a6f40624f791e7e8a7d824a0ad"],["css/main.css","fd6349c602fa51b610a2d0be30b66d00"],["data-structure/B-tree-note-1.html","30a9322c85f38141dd8ad151c655cb08"],["data-structure/Binary-tree-note.html","c7520f3c8f4e74544255ec15fb480f29"],["design-pattern/chain-of-responsibility.html","593fc90dedced50d9c0b8a11b3afd8fe"],["design-pattern/delegate-and-proxy.html","ff34394d6642e20a28968099ca23bb42"],["drafts/configure-multiple-vue-project-with-nginx.html","3436f54894e80d733f460c43b528fb05"],["drafts/iframe.html","1e3499baaa38271a9e81d82a0366aaad"],["drafts/record-re-install-mac-os-10-12-6.html","288f421ebc0b76322435d7b75f5bab92"],["es/restudy-es-note.html","e474d6e9e18dcc9e2c2e467c3a554efc"],["essay/note-ximurong-tree.html","218b2f47174ab00d656b3fcc3423ee06"],["git/git-DETACHED-HEAD.html","e9dd0aba0f1a4b5e47cc72745475efd3"],["git/git-branch.html","05eb1220c6da7679dc9d6130727538a3"],["git/git-change-server-password.html","a7979d0abbf9f74778400e2daebb86a4"],["git/git-checkout-1.html","e7fe13a836eaa52c4e4afe073f0202f6"],["git/git-checkout-2.html","b922036879341323c858dd0af1765f91"],["git/git-diff-m-symbol.html","27f5ca8ed2f03e635e245bf54bdd0848"],["git/git-git-flow.html","ed1676bdcf8297fa32dc51ffcf9aed60"],["git/git-git-merge-ff-no-ff.html","f188fd0090116457a3a0adb43822efd7"],["git/git-git-merge-true-merge.html","199e5cd6cf5638c47c3a4c386005d950"],["git/git-gitlab-flow.html","7a1609f37955eeec72967f5f2fc1b466"],["git/git-index.html","9e9fb941d21a537b6433d2efe501e9ce"],["git/git-merge-choose-one-side-code.html","4096bc62f1108813b9c978b9b55514d7"],["git/git-merge-exist-conflict.html","83fdc3f6519aeed00040f720bbcca7fe"],["git/git-pull-1.html","28c1a4e38e6cb5e3b880e80d468734c0"],["git/git-reflog.html","b957ff728f045095890379f7d862ac84"],["git/git-remote-set-url.html","55077880e1b31d240cb5fb6bf572016b"],["git/git-reset.html","a2b8cc54c19d4e71df68fced8017ba8f"],["git/git-rev-parse.html","95565acab4639fd9970b54df7d8090c1"],["git/git-revert.html","75be8ca195d7c053f65c4b3b607a1e33"],["git/git-tag.html","a581e41d75719c43e506294b11eb7dbf"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","1ff381a971c0bc34f3b79085ffa8ea7c"],["ios/ios-oc-kvc-1.html","7614afcec4b7655554fcc2398b94af44"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","c17ab4d26c76371742a38b18ee510228"],["ios/ios-themes.html","6b4e3d3ca5d887eaedddab3698a9b3f2"],["java/java-annotation-note.html","c5d32f5b8ca913456bd3bce299de52f5"],["java/java-annotation-request-response.html","c89272bd132f913b3d8a76702f0296b0"],["java/java-array-and-container-note.html","60b853ca4906f146a174f11b593765fe"],["java/java-deploy-resource-folder.html","0c2fba68223b3f4dbc0e10556bea53fa"],["java/java-jps-note.html","746c9bcab5c39cedee8bf0d94eb19444"],["java/java-maven-nexus-note.html","d6dc10787dc594a4a533d8014562ef81"],["java/java-pojo-bean-note.html","141b7453fa8048231092ea98aea37988"],["java/java-shiro-note.html","eca8f95e24ac689dfa7cb1a511dc1da2"],["java/java-shiro-springmvc-integration.html","e0fe4f7862b8e7e0ac51220fc3274434"],["java/java-spring-autowired.html","18c165fcfd8f64612fd85ec06bd2e6dc"],["java/java-spring-configuration-bean.html","f2279f515750ff726dea6c12b2c97d68"],["java/java-spring-restcontroller-note.html","a7a4d58aba4b0bbf613c747359af57ab"],["java/java-springmvc-X-Frame-Options.html","cfd675c3d147ac1f365358fe59ad51b4"],["java/java-synchronized-note.html","cbcaf8aa6cfa73019865d75d2e6d3df6"],["java/java-value-pass.html","cf1af7b01c1b7c9ff924e242a6d1a7c3"],["java/java-vo-dto-pojo.html","80896cb82dc2d2f3aa53b7f3a43a5586"],["java/url-rewrite.html","c0af4310d3650e905c66d7aee3bc9383"],["js/js-logical-operator.html","be3de5079cbb3eeb92d6e37690f05f40"],["js/js-npm-symbol-caret.html","6928fe3b4d753b8fa83c402d23414200"],["js/js-npm-symbol-tilde.html","a09bdf464325d81e494b42b1e9305080"],["js/js-this.html","fdd446676860a6e82c11e275883e232c"],["js/js-vue-note-components.html","e5945f1d301a5bba9e7496ac7093d9d6"],["js/js-vue-note-computed.html","4f3b9da322594bb6e59b32062887dc6d"],["js/js-vue-note-css-style-binding.html","d564fe354fbf3161155583835adfb311"],["js/js-vue-note-directive.html","52be8502a83cad11115d333ff636eb30"],["js/js-vue-note-instance.html","d5517bec4f87bb5e3354b0c7fc911dbb"],["js/js-vue-note-introduction.html","249c4f9c8a3a6ee2a52cf811b77fe717"],["js/js-vue-note-syntax.html","657b4e9fa9ac0cc781ef478ea38355ae"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","1b4b2d79fc3effa649259546552e5a98"],["linux/mac-find-port-occupy-process.html","7432ec2d6628d6736047ae2bf548c73c"],["linux/make-vs-cmake.html","44000287b98254961fdba4c83e1ffc14"],["linux/shell-command-awk.html","089f3131afb6bbd0101c803a04498ab2"],["linux/shell-command-df.html","f9e3be489b3a00592c4d650e560f023d"],["linux/shell-command-du.html","8bc9b06421e889c4ea865526fdb3ede3"],["linux/shell-command-netstat.html","09cb118f9c411bc239a4e919ca0bb26b"],["linux/shell-command-sed.html","aa468f178a421d5a198a7e2fdc91ff4b"],["linux/shell-command-tar.html","1058fc27adcfac104889d831e1477fb7"],["linux/shell-command-top.html","b5472e629adb115d025ea17defc273f1"],["linux/shell-command-touch.html","684cb1d320652e5ec2fec8854349d38a"],["linux/shell-command-which.html","3ec9fc52a80a0527e8c17badcc54069f"],["linux/shell-difference-semicolon-double ampersand.html","c3f86d358079560f6a52533bf31f7fad"],["linux/ubuntu-user-add-delete.html","92c47cbe9f7c337b6f986a14bf162e09"],["linux/vim-copy-note.html","1ea6494b35bbf51e8c6dc5d042120dc2"],["mongodb/mongodb-collection-aggregation-introduction.html","5224b442725acf6611e6e6ac9cae5d2f"],["mongodb/mongodb-collection-aggregation-stage-operator.html","2ee7f9521c639f4bce7b6d7ba9b2ba0e"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","0f6b17a74d344fab78c2ead467773a80"],["mongodb/mongodb-collection-create.html","473f8a5bb2f4119d28f74869c0f64bf2"],["mongodb/mongodb-collection-delete.html","e5668674093dd69fc8e13195e5374334"],["mongodb/mongodb-collection-find-1.html","5ba4be0f1cbb3d9001365a243714d32a"],["mongodb/mongodb-collection-find-projection-operator.html","c60f154bedf61c6fd0f9293786a77b93"],["mongodb/mongodb-collection-insert-1.html","8d0b9b48b371fed53a76582dba3db36c"],["mongodb/mongodb-database-create.html","f7cf6becdd341b060cf64e4e092e3766"],["mongodb/mongodb-java-driver.html","98ad297cc83d9d6ed720594419dd9d57"],["mongodb/mongodb-schema-design-note.html","eaacae99bc6f7d6c401dcda780e0bd51"],["mongodb/mongodb-study-note-1.html","60c675abeb7dc3ee4ab45bd7a850dd39"],["mongodb/mongodb-study-note-2.html","7c98dc08378f1f34aeeacb8fe64cfda4"],["mongodb/mongodb-study-note-3.html","9cb8d0cb4ef7c7740b419b1a58aa6468"],["mysql/B-tree-note-1.html","d263f051e668c99c8d42a56ee9c60f9d"],["mysql/clustered-index-mysql.html","607bd3ddc2ce621bd143a556303ac762"],["mysql/mysql-ddl-handy-book.html","90196faae93bba4ba7e6eafa819af90d"],["page/2/index.html","7769d74e86543ce452f90091d5ea02bb"],["page/3/index.html","3203f7c9f831252cd80e904e2af58c4a"],["page/4/index.html","d082819420a537cb4f02b8024be5464d"],["page/5/index.html","7d52552110b4e9fbf2f358e32ea114fb"],["page/6/index.html","eb932acdf4e419645c45c903d325e6d7"],["photos/index.html","45584a13af309513e1d1988601b7545f"],["python/python-args-kwargs.html","e101ce18dd0038bdccfb691c16f13a5e"],["python/python-async-program.html","c981f7d423a8ae93f736d29f07a957bc"],["python/python-package-module-note.html","0904b36039c0eef3710a957737ada8b2"],["python/upgrade-python-under-ubuntu1604.html","7a55d4126b3f5346bf22624ba468c64c"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1b726314ec638b8ecbf77a4739653fdb"],["slides/index.html","3f910716492036edb8f2123e416d782b"],["tags/Autowired/index.html","2c7adf797f522b9952e8fa99eb2ccc47"],["tags/B-树/index.html","77cc38be2666480efc1831b52d0499b5"],["tags/Base48/index.html","bbb5b6fb241b0243f2f8d41f7612d833"],["tags/Beans/index.html","03e998dd7e4555ef4d24dac9742a917f"],["tags/CSS/index.html","94c61f524d9e17f899c4d531c5b9bfaf"],["tags/DETACHED-HEAD/index.html","191d6cde2ffb7a38d9e30c725fb3118b"],["tags/DTO/index.html","ed10d230c831275be75c4b702b24baf1"],["tags/ES/index.html","921a415c8bdbe4e3835689773af9411c"],["tags/Git-Flow/index.html","7f7d67ade37f3e4c3ef21869c8246de7"],["tags/Git/index.html","9fc9e1aea7f2f832839a5b4dfba38d1f"],["tags/JS/index.html","6d31ee05f31b0f8913dafc73edaaf7c7"],["tags/Java/index.html","0a7459fc148fb988d03e74bc043b3211"],["tags/JavaScript/index.html","fd5bba0f8c3ef1e7848368b0a15abce3"],["tags/KVC/index.html","c91bd6462d07c2e28f7ea8d07f0a6b66"],["tags/Kafka/index.html","1a427b3ac56b09b35714d5f6cb12a2fc"],["tags/Linux/index.html","6e4bda2da727f03e9ea01422e1c72263"],["tags/M/index.html","e46d5f51579da93c628d1ec31c2462de"],["tags/MongoDB/index.html","a539571f21ab4d48117c6daf58ecca1d"],["tags/MySQL/index.html","6ef6d211e364c9043d749897c002108f"],["tags/NAT/index.html","fc179e2ed782352748c3d4395a1caa93"],["tags/NPM/index.html","d76fc8d3d0adc740c6f121ee6b5f12ca"],["tags/OC/index.html","6fc266e71bf0bbda3f8ecc17042c3963"],["tags/POJO/index.html","8369e4eb119331a7c25a5c78a3ef8e74"],["tags/Python/index.html","73346593a67c27b68369608613adf9bc"],["tags/ReactiveCocoa/index.html","747b42e3a6b473e910f142d050132420"],["tags/ReactiveObjC/index.html","2af1257be6b73e61d5de3e7380cea73f"],["tags/Repository-not-found/index.html","a3d3ebbe3a0554edfbb639c2b27be0b8"],["tags/RequestBody/index.html","d45e87db3bb2272b85ab3f0a1435ab15"],["tags/ResponseBody/index.html","19dc9a3084ee5e5c066008a6e2abc474"],["tags/RestControlle/index.html","c83744d653336db152788a4fae595fa0"],["tags/SASS/index.html","a078f279d0da953641f0421f806b919d"],["tags/Shiro/index.html","4affbcf145a7a8a05939346c9ad77c46"],["tags/Spring/index.html","86f1f4bc787aeb40819e94eb59659a14"],["tags/SpringMVC/index.html","189dad3ee7d780a8dde5cc5b2ac8cdc6"],["tags/SprintMVC/index.html","9b8a8a26000c091c00c26a0c472eac67"],["tags/Style/index.html","04d0745102a26a995a32db56c7ec0d2c"],["tags/Ubuntu16-04/index.html","f67766fb5107dd899026593760be1af8"],["tags/VO/index.html","11ee323486fb9a99dc852c342509956d"],["tags/Vue/index.html","6fff64d8a5ce65234cc11505c466e9a3"],["tags/Workflow/index.html","57a00f1bf0795b641407d192649cb4e1"],["tags/X-Frame-Options/index.html","2dce634a6eca85573e8b6528bef8ea38"],["tags/aggregate/index.html","2cc45b344a4f2cd8b6aaff0054dd8cfe"],["tags/alter/index.html","0efdf4cbaba5c63dfa155e34177eef98"],["tags/annotation/index.html","63aa7da10b1c9c5e7a0dbafe81665293"],["tags/args/index.html","d37e87ddfe0aaa537cae7e876cf7dff7"],["tags/buffer/index.html","6ccd314bca27317b91e279b9aaaebfbc"],["tags/cache/index.html","3e5f9ea4cd44c7df451a5efab5ee1d34"],["tags/change/index.html","8cac3f51a8a6d576b5554ec4f8dfe85e"],["tags/checkout/index.html","32f858c176d19e76b8e5ba616e382f3a"],["tags/cmake/index.html","f2cee35e7a2a65b1354ed2421f9bb9e2"],["tags/collection/index.html","2b59446892c62262c545d69b15c0fd71"],["tags/component/index.html","00ca711882bcfae990bf55d4c7a4706f"],["tags/computed/index.html","99204e06ad25148d6d846348ef1b3507"],["tags/create/index.html","c60e578f01f45b8cb0ba0df94f0e3cff"],["tags/database/index.html","fc73bfc35da3210e16ac00332526ac0c"],["tags/df/index.html","becba7a73b9b8b0feabc108cf5c41b0b"],["tags/diff/index.html","56d451db16c7caab1a1af16b2048bf75"],["tags/double-ampersand/index.html","84974646d579b448231e130579e791ac"],["tags/double-vertical-bar/index.html","e041c797994051340c2ad8ffd18549e3"],["tags/driver/index.html","a81514cc4bd3d38c64d74e6e18c1991b"],["tags/du/index.html","c12bddd0a04b66f43535a64611104904"],["tags/fast-forward/index.html","44eea9e8c5a38d14e88b8032d25bacc5"],["tags/ff/index.html","94804653b6c980abdd31a743942ddb2c"],["tags/font-size/index.html","bdeb72af552a37b78281b9d6453aa5b7"],["tags/font/index.html","b33e0a8fdb0cafc3504f97bb46c6a2b2"],["tags/free/index.html","0d16f43fc9dad95a13db81a64efbd0e5"],["tags/git-branch/index.html","8e1071632cd9ed52bef1a6e851393a7f"],["tags/git-index/index.html","cbcc9289ec29255a30deda5c761b44a7"],["tags/git-merge/index.html","3f3822c39ec168615a874b5fdb4468fe"],["tags/git-pull/index.html","065227ddaf96eb657f8d337253fe6dc4"],["tags/git-reflog/index.html","a460aba8089a487fca04b269de924c71"],["tags/git-reset/index.html","2cd8c3b75f8e2dab3f65d0e17ba8d8be"],["tags/git-rev-parse/index.html","f3a222a925c38d5f82c86d00d1718e38"],["tags/git-revert/index.html","ca38e6dab1ccfaa5fa605ebf3edf44ac"],["tags/git-tag/index.html","787b7c5575c91e67eb3fc05cca2ef4a1"],["tags/iOS/index.html","600ecc6fb1907d43d92d04b483797022"],["tags/index.html","29196e0b3679c5acaedac93b5fc0ab17"],["tags/jps/index.html","56a6bddc9ad9be705081439bde0cf975"],["tags/kwargs/index.html","e0928a33cd0cea830fa6a48de015fdb3"],["tags/mac/index.html","eac015a82c8964178c1b7b51fd588b76"],["tags/make/index.html","4e533f24ed9e0c762a78aa57909a5c0b"],["tags/maven/index.html","98d1a93a41b44831341f1c633d1b6255"],["tags/modify/index.html","ecd533b509a2d08ee9b32f52c3d6f831"],["tags/module/index.html","eb53f0fb5d2abe3fc5a1aa2b1657ee98"],["tags/nexus/index.html","a993491159b3aabd0511b446d3a4735f"],["tags/no-ff/index.html","317f68d5a276a153edeedafb47bb4d86"],["tags/package/index.html","b3c2a5c224e8304093107aaf10a7e816"],["tags/rewrite/index.html","625911cb52c7286f421514d5967b7dda"],["tags/schema/index.html","4d0a3bfec71b36879b74108a43ee4d5b"],["tags/semicolon/index.html","e416a187e7cb8b0a26ab74580b4e3efb"],["tags/shell/index.html","21793c7b0f64ff5aa63cac52ba166980"],["tags/synchronized/index.html","0337ae687c38651cc9265ff59f555d7a"],["tags/this/index.html","bd5abf79c1e3a4c51d26a1bd0741247c"],["tags/tomcat/index.html","c1ef7d6e54a8cfc449aef559d5a3bc22"],["tags/top/index.html","2de846cf82b0612e5da6308d8aa16fb4"],["tags/true-merge/index.html","e3f3797131fff72efd3d90b2b6f47a9a"],["tags/url/index.html","1b539a09e2bc50a8c587018212f71203"],["tags/vim/index.html","971ac2d07686f2b894118fa110be344e"],["tags/windows/index.html","b0aefc7ac8544310bdc2944003e5216c"],["tags/一棵开花的树/index.html","bd31e05152a84473f4518e15d5c4de0e"],["tags/主题/index.html","e29d2cbd8aae11f762a2c6f5f735f697"],["tags/二叉树/index.html","3d7bc7c2bc9b77dbb05022739650d57b"],["tags/介绍/index.html","cad168e0edc901f12bf194128c98a70f"],["tags/代理/index.html","bce1bb08566e5bc15644cb816a1aa629"],["tags/以太坊/index.html","423d97e21bf31f2e710a6892e627dd5f"],["tags/依赖包/index.html","a94e177b716f26d2d9e576d0a3bcbbc9"],["tags/修改/index.html","a0857be3ffee6c2baf79aaef42e641bf"],["tags/值传递/index.html","09fed7a108ce070d725da7dcfad7a7b2"],["tags/冲突/index.html","d5e9fa843d7c6157af7a86af8a4703cc"],["tags/分支/index.html","b48ec91287778ed022733abb7a1c32ac"],["tags/创建/index.html","bcc69340a02cfa022a53dc5b92a858bc"],["tags/创建数据库/index.html","1dde17a944ef61ae75490db5f27472ab"],["tags/区块链/index.html","b82b20fec31a4e3feb3e9e002e8ac9d8"],["tags/升级/index.html","445bce917a060a93d1a6d1883d09951d"],["tags/参数/index.html","3a472a73f76a75d594960ea20a5cb559"],["tags/委托/index.html","f2759094544bafc008dc79a62dba96c0"],["tags/存储/index.html","e5d64bd01853b2a0c2c2db8ad53ad26c"],["tags/存在/index.html","38c7a5404e257be627598e26c14aa3ad"],["tags/学习笔记/index.html","fe7cabd67998c83b2965f837f2466eb2"],["tags/实例/index.html","a6f96eb2a0bd0cf63d15ec69b4a86ad9"],["tags/容器/index.html","26d933143783db78624e48c42788f2db"],["tags/工作流/index.html","670515d52cf450add967cf382ce80c95"],["tags/工具/index.html","c4984bf170d1d00f36a6bea1ed70933c"],["tags/席慕蓉/index.html","b0716470de4eb35a3e6a86c0d98f4fd0"],["tags/异步编程/index.html","96c4cbd51e530d57b4fe0809fdad441a"],["tags/微信/index.html","a851584ce1cb9d94efc443a381551f67"],["tags/插入/index.html","a0545d5dd9f6b14ebae936e84b8df462"],["tags/数据存储/index.html","20d42ea76749341ede99a4209f9b1ac9"],["tags/数据库/index.html","08a2d219acf8f59848e7c9a782990ae0"],["tags/数据集合/index.html","2e59e08636f6d0f2977b3d01102153df"],["tags/数组/index.html","9f3a7947f7de4a5c2236f08496614d40"],["tags/文档/index.html","2e442b40377453296d7156ab5adb5980"],["tags/文档流/index.html","f0a464d7ec6cc5f416671ab72d699269"],["tags/智能合约/index.html","c54018c217dd85ff700b52d4bcc3b91e"],["tags/标签/index.html","115493414723e727d55453c4bbd8c110"],["tags/模板语法/index.html","5cad2847e93c8572bfe3618e942bee5b"],["tags/比特币/index.html","8ac5b043d89b3d32d07697a9a1fb7a5e"],["tags/波浪字符/index.html","9511cc99f2765f9c4cebe0e1f0fb0e8a"],["tags/注解/index.html","c15740788610e8b9dade926b56314510"],["tags/用法/index.html","78d9721e41bc3a27df1bf31b50c009e0"],["tags/穿透/index.html","045aac9b82c6b73dfcd395ad4bc6864c"],["tags/端口占用/index.html","32308cc736f29a9bcad9aed56ea17d38"],["tags/笔记/index.html","af8f26af3377cec56a73b8ee88952df7"],["tags/符号/index.html","31244f4e36e628bd5e1a618679b3511f"],["tags/红黑树/index.html","193cc040be90aafb855391a481bef2c9"],["tags/组件基础/index.html","38e960a74f9d8afc890d9e26570ce132"],["tags/绑定/index.html","f9f156421d149ca5731d63f280b7642b"],["tags/编程/index.html","41fbbe62b03436adcf51deb13050ed1a"],["tags/职责链模式/index.html","54946d4629f3786b7c60742baa23bbe1"],["tags/聚合/index.html","e41877c81e940f1a322e29ffdb96e1dc"],["tags/聚集索引/index.html","c201b214a9dfea59db0bdb1d0ba8952c"],["tags/自定义指令/index.html","d5a03c033517c672a815f7dbf36024f7"],["tags/计算属性/index.html","1c60f4550f237337d18bea3e96652359"],["tags/设计模式/index.html","6f592056d9248b9377f79c9bed4b9f14"],["tags/进程/index.html","76781148ed3b3da6c4d3f1cd3c9ac822"],["tags/远程仓库地址/index.html","577e913ad589ce0c8fb15661b35864d1"],["tags/逻辑操作符/index.html","68cb65bc8e2858aacd4b1bbb4fc432ee"],["tags/部署/index.html","dee5e3accc48378d3b2efca288905892"],["tags/难度/index.html","5d0598c0a66b260b35475b32f8f7d2ce"],["tags/集合/index.html","535427bf7dc332907bf527bd11059858"],["thinking_in_programmer_life/full-stack-programmer.html","196cbc9e4d39d345c5feccf9ba871a85"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","6d0639a9291f8c3d968b2cc0f1f35723"]];
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







