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

var precacheConfig = [["Kafka/kafka-introduction-note.html","6df769bc664dda2ea7d6c6d80996ca5f"],["Kafka/kafka-storage-principle.html","c4bfc16c2b7a81a22ded2b8d1ba62b79"],["about/index.html","6347d076cd9e441e35a94b3c36271801"],["archives/2018/06/index.html","0c75c22914204961844ff66136da9713"],["archives/2018/07/index.html","bd2beb7163ee2348494334e0d01a0858"],["archives/2018/08/index.html","69a24d9ec703149d5d6a2cb6ab15674b"],["archives/2018/09/index.html","0cac326abe86a464e3f0f5df8cbfed37"],["archives/2018/10/index.html","b1bd90d518c95bf05c738bf9803125d6"],["archives/2018/11/index.html","5f9acc079b8f9ae35fdbcaf6ef871afe"],["archives/2018/12/index.html","5c747a8f8a1bfde362de5211bae4c701"],["archives/2018/index.html","67960d0c45e629123e387fedd2305fe1"],["archives/2018/page/2/index.html","a7404465ed5e0f10cabd643047983209"],["archives/2019/01/index.html","4c61369184861e4103117c79dbd1f419"],["archives/2019/02/index.html","7a893b0c25295cacef5e8d0edc848b51"],["archives/2019/04/index.html","85f50f04e13732d72d9d87fdacc10c8c"],["archives/2019/05/index.html","f40953b270e8549b4435c22881fff648"],["archives/2019/06/index.html","5f63663599fe1c70e065a5d6a1cc3d30"],["archives/2019/07/index.html","5065ace3470dfb82248587688fb8efa6"],["archives/2019/08/index.html","d0dc25c7d0e1620bcedc782c797e21fc"],["archives/2019/09/index.html","80bd25103d0d38b54a4f8eb68bbe4bfe"],["archives/2019/10/index.html","f78ae5dced30dc0f9bc83e8d58113d29"],["archives/2019/11/index.html","3f94cd1e15c9a0c373298ac8a66477c5"],["archives/2019/12/index.html","b44afb73242dd71c1ce7775999cffa24"],["archives/2019/index.html","58458cc9acf8976843d3ed9927e71e1d"],["archives/index.html","bd6a5a8af1131c62093195779115fd9e"],["archives/page/2/index.html","72635cb8b4aba47cb92cb6c01891c8f6"],["archives/page/3/index.html","bd2f6c458cc1f89fe5b8309994471004"],["atom/index.html","224dfb3abc2abfbb6907e774ca93b965"],["blockchain/base64-base58.html","48bd79b252bcd49cac182b6aada37162"],["blockchain/bitcoin-data-storage.html","cfe1a0f1c577fbb1f245c7bcca21bad2"],["blockchain/bitcoin-difficulty.html","22cf0c3f34084d7b0caaf2f78936a1e4"],["blockchain/block-chain-ethereum-contract-program.html","6872d31f482adca606d0c220af79287e"],["blockchain/ethereum-programming-introduction.html","a09b5e441a6fe1ea11c00507ad3e2fc1"],["blockchain/ethereum-rationale-introduction.html","126223c791ac1dd584ff574e64cf62e2"],["books/index.html","8112ca1608bdd3fa49576c30971600db"],["categories/Blockchain/index.html","f78e25fddfba97f21a8640dda2d90cc4"],["categories/Blockchain/以太坊/index.html","92dd42640b7e958964499b6396b48483"],["categories/Blockchain/以太坊/智能合约/index.html","9eca980717eca747fc60d77c43d571e7"],["categories/CSS/index.html","7da375d7e71f432ec635118f8e649462"],["categories/Design-Pattern/index.html","db7ecdac3a601e90fcd88f5f7d19cfb7"],["categories/ES/index.html","325e078fc324eb07a421e9691fabbc3b"],["categories/Git/index.html","eb35f113c4ac0de3392ccbc0bba1fe89"],["categories/Java/index.html","2e94fce9c1f11d7c6f501acfd4b25212"],["categories/JavaScript/NPM/index.html","0fb4dc87f7bbabd7e48b3549a1fc33cc"],["categories/JavaScript/Vue/index.html","9a1de856a0fb51cab976e762a279941f"],["categories/JavaScript/index.html","a5337f89cf8755be8999205c665cc366"],["categories/Kafka/index.html","6b037c6a92790e64965eb954b041b69d"],["categories/Linux/Shell/index.html","e11e1ca106cefd8f27343bc3fd8d7282"],["categories/Linux/Ubuntu/index.html","40405cfe9e8717dbb484ce12d2bbe43e"],["categories/Linux/index.html","56e54f5489789d0fde40e47389fd61a7"],["categories/MongoDB/index.html","7e8630a0db73633ca87c707e8e2277e1"],["categories/MySQL/index.html","40de7504362ba41ff0f7cd20beb3049d"],["categories/Python/index.html","cbf38977480b7a390567dec140fc7879"],["categories/iOS/index.html","06a8401ca2f39f41c0a61162ef19c8df"],["categories/index.html","4f4e75dd650ee5f870d9483ca3e6a453"],["categories/微信/index.html","7c4872070af1ec32b3649f46f83c6325"],["categories/数据结构/index.html","6929207ecfc4281fcc4ab997c3ea7878"],["categories/杂记/index.html","4da1bd3ec551128bd9e11668005d0c29"],["categories/程序人生/index.html","3c2304f3147dad15167d7ae3f1dfe064"],["categories/计划/index.html","850ccea396b63a0f97d6abceb2da7fde"],["css/css-font-note.html","7a6e3111692fb013f1e07896bcd1a751"],["css/css-normal-flow.html","6c6cc0f8353d36b7a72cc4fa076fb7d5"],["css/css-sass-introduction.html","43c46e48857f1c345b1b80fe4a6ddb87"],["css/main.css","ac29863ae66a0c353ee25b4da2565ed4"],["data-structure/B-tree-note-1.html","ff6fb48823357664319ffbf510e2cf8d"],["data-structure/Binary-tree-note.html","2070f1ffcc4c87d10620d8bf9fb2f3fa"],["design-pattern/chain-of-responsibility.html","a5a10a7f00f2e2c74fce2afe36017d1c"],["design-pattern/delegate-and-proxy.html","1432adb869e2ddb5e3a2dfbebfd8b48a"],["drafts/configure-multiple-vue-project-with-nginx.html","bbac85fc772ce67781813add3800de20"],["drafts/iframe.html","180c0d2753a64dbb13594c7d3777ae80"],["drafts/record-re-install-mac-os-10-12-6.html","c2b013f841869448c8e6ea88c1c1a988"],["es/restudy-es-note.html","c01873222e55ba6a0578177b90cc49e9"],["essay/note-ximurong-tree.html","f897f8f950b378a79f535e1d9c253191"],["git/git-DETACHED-HEAD.html","bba28c40da39038630e038b12c37e56d"],["git/git-branch.html","d46d128aec3e81e1089528d220bf1ac4"],["git/git-change-server-password.html","1de9e045a75c93b7bd993364fbc33055"],["git/git-checkout-1.html","c64f17c0e991d653a2c764953612a2cf"],["git/git-checkout-2.html","26ec47f1ef150f4dc672176d60020727"],["git/git-diff-m-symbol.html","2d91cf6121f5d22008581e06fb89540e"],["git/git-git-flow.html","bbe9d3626b9872e7478ff3149435cb5a"],["git/git-git-merge-ff-no-ff.html","3b3cb7f34ae8391bca01e64f1ad8e2fb"],["git/git-git-merge-true-merge.html","6e8eb60d55428c4fd9dc0533d47cf826"],["git/git-gitlab-flow.html","c0a8b1e38f3dd9ac7127cab6096bb552"],["git/git-index.html","4d8146660fc4056d4797e5df47d3c59c"],["git/git-merge-choose-one-side-code.html","66cbc46e8ee2ee04a2c4a2676229b4ee"],["git/git-merge-exist-conflict.html","3051d266e2c3f8b1edce4b2054da5bc9"],["git/git-pull-1.html","7c877f941b0711a123a9b5b07c2280d9"],["git/git-reflog.html","dfda9d78320e8ab44cb34017d948d0d8"],["git/git-remote-set-url.html","9598796ed293e6113cacae4a19e012d5"],["git/git-reset.html","65866918cff341554540e73be03c99ed"],["git/git-rev-parse.html","8f03f5b2d175e0f71c3be277bc4cd711"],["git/git-revert.html","5c797ff3ce87a90e231c878e8edcc518"],["git/git-tag.html","47191822ff3c160af0216c1f4bbfcb4a"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","550fe85efa0e275bfc3869928010a630"],["ios/ios-oc-kvc-1.html","d8db33e42424edbbdeceddaf8ecb1f55"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","5288ee509feaeb77441d506d692ee02d"],["ios/ios-themes.html","98a639d479453bff201f78f0cfa1044b"],["java/java-annotation-note.html","115734a3308ef31003f441f7cc86e93e"],["java/java-annotation-request-response.html","fb5d2bfac0f00be47c2a7540ad22f5cf"],["java/java-array-and-container-note.html","b9c85392715e0215f56abb947f17c15a"],["java/java-deploy-resource-folder.html","756eb91c1df3c85c59634958cedd2828"],["java/java-jps-note.html","ff91bdcbac26e16b1f3f0c5172ba1baf"],["java/java-maven-nexus-note.html","e7d4a8a82419a80ecfe800e22eec692f"],["java/java-pojo-bean-note.html","0a9e7676e550ff41af2bfdf9ea814e17"],["java/java-shiro-note.html","5c26cf61176b31bf69d82a8cc39f1a8b"],["java/java-shiro-springmvc-integration.html","982d4c28a9d08cdc78dbdabb4a4ed023"],["java/java-spring-autowired.html","c9b08891364c9a6442794cfac48fac08"],["java/java-spring-configuration-bean.html","b2a5dea516455c0be60626dbf818cbb7"],["java/java-spring-restcontroller-note.html","d70cc8fea3aa5f33e0331b32c89e8422"],["java/java-springmvc-X-Frame-Options.html","62b37b41a5633feecc54084b1e2551b1"],["java/java-synchronized-note.html","acb63b54b519ae8bc2f307a4f4f76e85"],["java/java-value-pass.html","f7bc13ae816f6a3f0eb39a53cc6f4146"],["java/java-vo-dto-pojo.html","6af80f4bc168b7f2d03bcf9d1b56f9ec"],["java/url-rewrite.html","2299016c1d4ed9aa990e578ce7f558b2"],["js/js-logical-operator.html","e1050af630ef24d8130cce4e59885afb"],["js/js-npm-symbol-caret.html","14b22b9b784cffec41ab9a8ac4524965"],["js/js-npm-symbol-tilde.html","06f60c7e3fa7bf6ad6538be4b6a30220"],["js/js-this.html","08f8b5eb91e2e8886dea3585473602bf"],["js/js-vue-note-components.html","463b886ebeb4c604b5ba41c25dcfd877"],["js/js-vue-note-computed.html","09d0910b9ffa110530729e0592f48206"],["js/js-vue-note-css-style-binding.html","796d59b248c10c6d519bdf97cd28568e"],["js/js-vue-note-directive.html","31616957ba6a4ed15c696a45639c44ba"],["js/js-vue-note-instance.html","a6b4c4aa1bac6a31e0216336971a09cc"],["js/js-vue-note-introduction.html","a7057437085eecc010d2ae78d4a657af"],["js/js-vue-note-syntax.html","c89229a531851b1a0d8d93b09fa3e7c0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","ff90bccc3f1fbcc97e425ca065dfa7e3"],["linux/linux-top-buffer-cache.html","9a3f80b84d5b48772d79d6b3fd9032d0"],["linux/mac-find-port-occupy-process.html","a25fb209fe1c0a1b68bc7850415cf832"],["linux/make-vs-cmake.html","843102c85254f3981332ac7a38ff7826"],["linux/shell-command-awk.html","df8a2ab14f18341c7ba5f3cf8e78dd0d"],["linux/shell-command-df.html","9dcb8998af1ae8a3522d238a41ec2597"],["linux/shell-command-du.html","2a91071bab23acc2e837ac23d885fc2a"],["linux/shell-command-netstat.html","6a44b006a39cb7482cdcb7dbc6d8fdb5"],["linux/shell-command-sed.html","fefe06aa2ae16fe1485c300142eab3ff"],["linux/shell-command-tar.html","5d7d67f6c562c3c6756fccf350e49a8e"],["linux/shell-command-top.html","d6c29a27b282ade746e06b32d670fd00"],["linux/shell-command-touch.html","18c0d6ed095151a6707f9d7ba383c948"],["linux/shell-command-which.html","a39aa65b297a3386f0c03cef61dc30f0"],["linux/shell-difference-semicolon-double ampersand.html","2e620682c0c656861f6d113cd83fbfc8"],["linux/ubuntu-user-add-delete.html","9b068cdbe60ed2ba9bff6176793bb0bb"],["linux/vim-copy-note.html","18a7f4c21a307613375bfad17bdc3c24"],["mongodb/mongodb-collection-aggregation-introduction.html","6e169d58937ad390708937db5fcffa88"],["mongodb/mongodb-collection-aggregation-stage-operator.html","e5c149896d7a1c84f0751b6ce12ca6f2"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","b2c02bdb688746b4428ec3550b5806ed"],["mongodb/mongodb-collection-create.html","d3293376491adf5792ae70bce42a7409"],["mongodb/mongodb-collection-delete.html","c59466fb5c902a36430ce7873cc63606"],["mongodb/mongodb-collection-find-1.html","06f9c3c84b44a465f51eb81c8aa0f0da"],["mongodb/mongodb-collection-find-projection-operator.html","8c2ae97ea42e601250388b5ea2a33bba"],["mongodb/mongodb-collection-insert-1.html","d1e79dbf979ee2cb96374507dd49a46e"],["mongodb/mongodb-database-create.html","2ec7f61c5333c25a46dfec2674ad40c3"],["mongodb/mongodb-java-driver.html","bb89495b93b6f893a7787447a441f504"],["mongodb/mongodb-schema-design-note.html","87f9604a82a36923614bf5955ee81d1c"],["mongodb/mongodb-study-note-1.html","c97c2cd0585045ab52e473810e999c9e"],["mongodb/mongodb-study-note-2.html","3ae593c8803d347d17d19d64e423ec4c"],["mongodb/mongodb-study-note-3.html","b7ce6ac8fd96c32142a38321b9e023d6"],["mysql/B-tree-note-1.html","e6e371d68b97bd8ad64e417988f17d59"],["mysql/clustered-index-mysql.html","f4b5f903d60b7ad30098d84574ded912"],["mysql/mysql-ddl-handy-book.html","d32fb475c91b3b7f82229ab9b72432f7"],["page/2/index.html","9f2b742f219ce2a77e16ce1ad099e09d"],["page/3/index.html","2beab5052b168aaf4b98dad0ef511bec"],["page/4/index.html","21e497b74880b4a372427ac06bc9e750"],["page/5/index.html","df5a5bef10f103928f56b23c013adca3"],["page/6/index.html","111d540bf1082ff2734f09b0d7b2b1d1"],["photos/index.html","67cf211ca63707c9c24a75b5b282ae19"],["python/python-args-kwargs.html","113cd745921e67ca0259fafb54bc353b"],["python/python-async-program.html","64ccadaf63a0205aab0c6e8451749847"],["python/python-package-module-note.html","e506f78ca9866f0d90ec990f3d6e899a"],["python/upgrade-python-under-ubuntu1604.html","e51eb9de222fcde18e5b558ca44431b6"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","e0dd64fcc9bc3107994ddbcab0e1fa0e"],["slides/index.html","4527b3250a7e98ea7763c71cbe62ecd8"],["tags/Autowired/index.html","b06502f3f653c793de9cf15f691383ec"],["tags/B-树/index.html","39f85780c27c924990b8200ccfed6200"],["tags/Base48/index.html","3b4aa6437388edf363002045a5cc9632"],["tags/Beans/index.html","0e6e2d0d2d1b213b01a78127ac30b38c"],["tags/CSS/index.html","e4521a725e2d35e43488b8fab619ea22"],["tags/DETACHED-HEAD/index.html","2d7b83dcee45d81257c61b1339532dd5"],["tags/DTO/index.html","268f5c7b3c508f7eae5fa371aa4d71fa"],["tags/ES/index.html","15f4761129be2b0679c3962d338e30be"],["tags/Git-Flow/index.html","da917ddf85fd2a1845c907f73f185a15"],["tags/Git/index.html","7569f0ad7c8ec148911ed5f1827e6454"],["tags/JS/index.html","0a24875d4227babd100f16e0c827a1b9"],["tags/Java/index.html","4dfeae61062d33a65bb40f2ab7fdb08a"],["tags/Javascript/index.html","a87686e705649468d3c10751d506fd02"],["tags/KVC/index.html","9336b1f35661ade6fdd0638d9f732e25"],["tags/Kafka/index.html","010fe012cad41b509b3d54418a9408ec"],["tags/Linux/index.html","ff3ca65a4ce87f7665edbbaa09af5a34"],["tags/M/index.html","daec0e0b67e0ae09ba0b77ce7bc236fe"],["tags/MongoDB/index.html","f4d7d43c2a2b89cc4f1aa1096eae6f65"],["tags/MySQL/index.html","d6bdb03f9c7f416b5586bc4bfe389c1c"],["tags/NAT/index.html","5d212ade91c3daa4a6e9d9df7efb2c5d"],["tags/NPM/index.html","37a20ba099feb05ad53452573be06cc1"],["tags/OC/index.html","d97da68d56488b8798be52b5b0044dfb"],["tags/POJO/index.html","c41987342e1cc95fb05fbf249d8a8601"],["tags/Python/index.html","3ce9c0284ad973468725986bce6fc76a"],["tags/ReactiveCocoa/index.html","d37bc6dfa75a26c353da0ec20b934941"],["tags/ReactiveObjC/index.html","eae422e87ea9b2149d269ac80063d1db"],["tags/Repository-not-found/index.html","72a414e13aa407d0feb68a0585525f71"],["tags/RequestBody/index.html","9e14f06e7c6a7165c29d309def2f92e3"],["tags/ResponseBody/index.html","9ca7428f25c10e4d608faf6d57aaf4c2"],["tags/RestControlle/index.html","501fed83e505f638dc0681bb55142c48"],["tags/SASS/index.html","663c108e61d50b507e91b5ba580d0cb9"],["tags/Shiro/index.html","6ff847f5f5d67467c0c0de37e1ca486f"],["tags/Spring/index.html","8705a5cb0bb6297dd9777e50fe94f36e"],["tags/SpringMVC/index.html","6a5fb134c99ca66cad22795b782b54c3"],["tags/SprintMVC/index.html","43da21ef0576f518ebbdb0da2b8ae592"],["tags/Style/index.html","cf33cebe63c483b36a651f456a9e0159"],["tags/Ubuntu16-04/index.html","5a4c6681b74bad0162dac4d705140a63"],["tags/VO/index.html","44acb1418024b6fcf2a41377167af070"],["tags/Vue/index.html","48f425ff67a074384c21cfbc157bbfa7"],["tags/Workflow/index.html","6a699098ddcdb1d280ef8db75006ffc0"],["tags/X-Frame-Options/index.html","a6cb5e8aea36cee5376c7b8d7fce9384"],["tags/aggregate/index.html","4cd5619717a36d7712c96145c833e778"],["tags/alter/index.html","5d3ef93a06d4188297e4371ec7094c77"],["tags/annotation/index.html","da7dcdfa0ea49642774b19b173c4ed16"],["tags/args/index.html","2b45be432ea6ba2a15edd9bc76f80434"],["tags/buffer/index.html","c748194558d6d10aa0097e196c90f2a5"],["tags/cache/index.html","c45333db5b08cde6cdccc3352263ec33"],["tags/change/index.html","e2ea096189380229a1df423da67b5963"],["tags/checkout/index.html","45c2be8cc4edd2931c04fb278ba4fc21"],["tags/cmake/index.html","264de2720540cfe75fd2a34b6cbb5c3c"],["tags/collection/index.html","9067a5531a68ee91876a7852e08840e8"],["tags/component/index.html","38e46c5a6c9ddcf6251b95d74b44e9b1"],["tags/computed/index.html","caf1f57f69413d6ebb0c04924b99a006"],["tags/create/index.html","6b46ae145f75adb7a12574f0be802112"],["tags/database/index.html","df450b8353a84294c2a6961f35dd6014"],["tags/df/index.html","3003bda804430124093007293f9c959f"],["tags/diff/index.html","d4050913548312619779289536dae923"],["tags/double-ampersand/index.html","abe0d94948611c6ff33426e5ceb3bb76"],["tags/double-vertical-bar/index.html","eb709548cd300454a12e5bbcf3663252"],["tags/driver/index.html","8105a910fa982a09622f02d226ef0d83"],["tags/du/index.html","197a73a63513f57a218248afbf46ac60"],["tags/fast-forward/index.html","83c6777bea2e26ff113530d3eb0b3624"],["tags/ff/index.html","b9994dcd740bbac60c9a254889dd2e0d"],["tags/font-size/index.html","7b5e6cb8c35128101a5c7cae47d2b976"],["tags/font/index.html","815e0820bb4169674d23423bee7855c7"],["tags/free/index.html","6e343beb2497d097da73199dd16a755d"],["tags/git-branch/index.html","c7eab512fb88dd504208f6090a2fcdbf"],["tags/git-index/index.html","706c8b0a95437daaa9bfd348f3b6f0e9"],["tags/git-merge/index.html","8e1cd9614de521b53b36d07c55b2f997"],["tags/git-pull/index.html","c54c2d78699d99a907e85917659dad9d"],["tags/git-reflog/index.html","17b2f0972eac24573dbf9232aa8e514c"],["tags/git-reset/index.html","b367ab5ba7b4c9581e95a767d673e1e9"],["tags/git-rev-parse/index.html","6642ed5ab7a2f793bc9c813c5420e537"],["tags/git-revert/index.html","ed589a73f31ecc23ce54ae1c3c9aed50"],["tags/git-tag/index.html","758ac25fba19c7803eef75d4c161b688"],["tags/iOS/index.html","abccf9cfe01262b1b6170d20b9495dfc"],["tags/index.html","dc7858e73d672112a02089a331cca444"],["tags/inode/index.html","c0e3f8434f5121d269994040dfb299e2"],["tags/jps/index.html","0db6cd5df034eb5ecddf8187a8103a7c"],["tags/kwargs/index.html","f087a2bfdc8b0fe4fde2d9d62904bea9"],["tags/mac/index.html","a64e766e7fc1fca61c2e38c818982780"],["tags/make/index.html","f54cd2e6514723f717734383f4fc29c7"],["tags/maven/index.html","09cde440d2beb73308a7dc0b661d2be7"],["tags/modify/index.html","45e6ffbd12143780e1a992254fc323ff"],["tags/module/index.html","2de215aa29ef67614bba0409c20a4e81"],["tags/nexus/index.html","6a436e1fe943a3dbead58f7a44186fc9"],["tags/no-ff/index.html","6f4b02b435dfcccd6bc3eea95dc8235a"],["tags/package/index.html","265221ebb34aa5cccfff54a0a4c57d5d"],["tags/rewrite/index.html","d78a5f3e7a2aef875d395fc1fe6d17e1"],["tags/rm/index.html","c0c15f68559d304daadae446579d2e78"],["tags/schema/index.html","eb3345c6fcc99ed33ac2ad4c10c12898"],["tags/semicolon/index.html","38ca1b4f9902a7a82b462d29a6a9c6b0"],["tags/shell/index.html","90536e2b40ebe159079dcee2efc99682"],["tags/synchronized/index.html","04514db14b7c2c7f6a2cedfd85c1fee4"],["tags/this/index.html","4aca97f9d86a6213690c9b9027006ec8"],["tags/tomcat/index.html","96e96174c6dc6494cfeb8fa6adc559f2"],["tags/top/index.html","f84c9c0e718cd86cae8865d5214caedc"],["tags/true-merge/index.html","a81a657e0a931b1213a9fa9724290f9e"],["tags/url/index.html","4ffbfd6bbc3068ff96ea325c1c207eb6"],["tags/vim/index.html","780582b0de1a1d9ea67c8b85c8d2aee3"],["tags/windows/index.html","5a1372cc3e6c65d1c80e7b54ddf28351"],["tags/一棵开花的树/index.html","bafeba8dc9427dac730a9cf236a6ed7f"],["tags/主题/index.html","64b2d2f088902a6aad2401b0abe1ec6b"],["tags/二叉树/index.html","d21f09a29e43c824f0b8042a140ce1cc"],["tags/介绍/index.html","01670e17031ad071c37330b3751b91bf"],["tags/代理/index.html","f34e74731902f7aa17aedb6c30cbc8d6"],["tags/以太坊/index.html","8d4fb0d85640a64ef16a1ee41faae330"],["tags/依赖包/index.html","c19569dbf476ad127ce87523fe26a5fb"],["tags/修改/index.html","37682111c534971fe1164c16fc90fc53"],["tags/值传递/index.html","6809da92ad46b37b8beb82a2d394f0ad"],["tags/冲突/index.html","d801d85251c20a81b5003c702324d853"],["tags/分支/index.html","a65c02c4f8702b50663461d3a5ff7e27"],["tags/创建/index.html","94d7b52222fe3de0ffa7b391188f0859"],["tags/创建数据库/index.html","235654e078bb019a04b5de27676f7935"],["tags/区块链/index.html","dd1bfeb9db15c539e29fb2f1846f7545"],["tags/升级/index.html","a8cc334fd823c2314cbae6aabe0902c5"],["tags/参数/index.html","29c51144461ace3ffee9603d3883354c"],["tags/委托/index.html","68d13a9d8c42a194263297b0b653c820"],["tags/存储/index.html","a42ffdf958f946cf5625287513e1a603"],["tags/存在/index.html","78a58ef97aefee161f7d2d5d4014e205"],["tags/学习笔记/index.html","6e9cfd2031e11415ff0e7d54f7d6bae1"],["tags/实例/index.html","b07ed61a89641564c533a434d2e3684e"],["tags/容器/index.html","13dfd58b9b030dbbb601e0d32faf2770"],["tags/工作流/index.html","551123ee6736df86c65397a6fd559a6a"],["tags/工具/index.html","f258699a749c68478139d2becbbb51a9"],["tags/席慕蓉/index.html","6590eb5abaf30c6d84bc0c730e1ed136"],["tags/异步编程/index.html","91b52268aaf61144d2f3a1b7aca826fd"],["tags/微信/index.html","8a7c7dc4dd5e3f9bf7f28c1a425b039c"],["tags/插入/index.html","7384992c4beb918df761be4a0584b9ee"],["tags/数据存储/index.html","58d9ef69a9af894f924646de162f238f"],["tags/数据库/index.html","13449e0609a2def85ceff794095cc425"],["tags/数据集合/index.html","eb79c90f2f7448410225de1891bac745"],["tags/数组/index.html","738f8019c2cb664ed5f4c75b4b42aecf"],["tags/文档/index.html","7b2975d99b98e4d8c2be697136a11161"],["tags/文档流/index.html","e90ff1ea5ddb2fc80895ea22b753a7db"],["tags/智能合约/index.html","edca94fe66dc0af8a7d59f055b956965"],["tags/标签/index.html","8ad4445aa747c3b98871b9cc83bf4cd9"],["tags/模板语法/index.html","512a1192c76d1543476c6d386934217a"],["tags/比特币/index.html","8fbe54123d314aff54071949e24a432a"],["tags/波浪字符/index.html","37633729ee2b40420c76f1119bfb5a43"],["tags/注解/index.html","e05e78ffdbc2dfc87722d247d41e07cf"],["tags/用法/index.html","80c357ce212f0f3cc173d59c4701171c"],["tags/穿透/index.html","9bec0bdf40a17ddcfe58c9c5cc445bc8"],["tags/端口占用/index.html","6e4bfb331b33cf4c7e94164d578dbd05"],["tags/笔记/index.html","f45db9607f5f248d1f9533866489a027"],["tags/符号/index.html","4dabe0c845cc516bc84a9fb47e6bd0d0"],["tags/红黑树/index.html","78be072b2aab2aab55b0590c2b38e9b8"],["tags/组件基础/index.html","7c27545a564cdda8a98eb52a7566fb86"],["tags/绑定/index.html","9c02d697539fc5e49700d10f6e7eda40"],["tags/编程/index.html","f608c26f6120c3fa90258d2e35101e8f"],["tags/职责链模式/index.html","7410000a6d15aa328e70fa7e113b1af5"],["tags/聚合/index.html","2a17c40b14993c0fd13fa9efbd9cd068"],["tags/聚集索引/index.html","884b6a8339b057ed64b0855bf43bdb79"],["tags/自定义指令/index.html","77a2e874bd257b3ccd8dcdbc5b8233ea"],["tags/计算属性/index.html","76ad112c6e8be32c574ec093343023b1"],["tags/设计模式/index.html","a3c27b470e847c06e6ab5a010aa20a6e"],["tags/进程/index.html","e1b4096808020a2f21cd4fe9349b1f6c"],["tags/远程仓库地址/index.html","61e980633148ddcf609cb827b77157ac"],["tags/逻辑操作符/index.html","d800d020c20d7b8590cb2cb0f35f9fb0"],["tags/部署/index.html","7371a7e97f5e429e787ec8b405a26525"],["tags/难度/index.html","7ec8afa85c3b538d487d205d1f2177d1"],["tags/集合/index.html","c5dd420aaada1bd7f3f6b5fdf8dc34f8"],["thinking_in_programmer_life/full-stack-programmer.html","86418c068e9940023d6886d81e9ab63d"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","998e7b3edb5588bcecaa89f19e901857"]];
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







