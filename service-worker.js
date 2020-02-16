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

var precacheConfig = [["English/ie-note.html","c134c70fff4f27c4c2d64c418de19af8"],["Kafka/kafka-introduction-note.html","1e01078e8e30801b72df19919b3d6878"],["Kafka/kafka-storage-principle.html","b0f6d2ed2e781b8688670da58f5b2c17"],["about/index.html","a5088bd17bff5ea40882ec6f08eb7b70"],["archives/2018/06/index.html","f54264c6f945398e28bc928040755f43"],["archives/2018/07/index.html","aeac02dae1903972949bc650432d73a7"],["archives/2018/08/index.html","fb4782f0a2b916f723bcabc95a1abb58"],["archives/2018/09/index.html","3821130fa069474016d7c0f64907f322"],["archives/2018/10/index.html","5e8d41afc093cd61e0820474fac717fd"],["archives/2018/11/index.html","a3f0bb76f72c2a3c55d960c1442d829f"],["archives/2018/12/index.html","08dc27c95b6be3db2c02fd42f6fbe944"],["archives/2018/index.html","d98c08245497f8af4c2e2ccc9c0f92a7"],["archives/2018/page/2/index.html","7b7d5a5ddfb06b1bbafe76b622f11f68"],["archives/2019/01/index.html","b10d20dfecad34a7d1f93c0a1649f541"],["archives/2019/02/index.html","9959b08a6b4d96a9a9a4decf8d905809"],["archives/2019/04/index.html","b5b99e2ead7223719fdccea22e6d2088"],["archives/2019/05/index.html","639e03b35d269ff7b4655845bed1ef5f"],["archives/2019/06/index.html","e1663c7dcc19566145720935e437bda5"],["archives/2019/07/index.html","962149a99c37c8fc02e3258af756b025"],["archives/2019/08/index.html","751a7e6e2fba13b2c357d2214ce77cb2"],["archives/2019/09/index.html","af2e9e973aa4fa0df2041623521eccb1"],["archives/2019/10/index.html","f8d0a20556f046e07175d62b3f8aebcf"],["archives/2019/11/index.html","6d884b4118c1bd9e88fa4eb2d2369a51"],["archives/2019/12/index.html","9285e1dbe254f440804c6496fba5324f"],["archives/2019/index.html","51967c70751c3c420b30d207b7c18e09"],["archives/2020/01/index.html","64c3a7582eb62a4ec7f4c9f401bafa04"],["archives/2020/02/index.html","f41448d469416a0a2d78af405b730dbe"],["archives/2020/index.html","86a2f66da7d21f86024f4b9522747946"],["archives/index.html","b327a14aeec81bf51c97ac72eba37b7b"],["archives/page/2/index.html","ecbefa2a190f89cc23c07c1c85752080"],["archives/page/3/index.html","531c509adb3c986754de155342dbcfa1"],["atom/index.html","eb5d8c68713a13b7d93459d21e88eb19"],["blockchain/base64-base58.html","55c0feaa65a45a4dbe4b2449fb035a2e"],["blockchain/bitcoin-data-storage.html","d0ee7e4467b471d12b97c0318d5695cb"],["blockchain/bitcoin-difficulty.html","9c3c30aa01cfea44027c788a21b6105b"],["blockchain/block-chain-ethereum-contract-program.html","a16ac487a84e4edf9082846d00b853fc"],["blockchain/ethereum-programming-introduction.html","fbab86458759eda0bc586d330ff489ba"],["blockchain/ethereum-rationale-introduction.html","a7648f861f40bd7ef26aade1ac525740"],["books/index.html","3cf68e86c53bc53109b6fe1f7168a868"],["categories/Blockchain/index.html","071691228cb45547df4cc5f24db5cd2a"],["categories/Blockchain/以太坊/index.html","4e72fd7da71dea62ae2af385fdf23f47"],["categories/Blockchain/以太坊/智能合约/index.html","15e0ea37ad4f74977fb09bca67b5b09f"],["categories/CSS/index.html","925d1f3fea9048616fadc97518915f7d"],["categories/Design-Pattern/index.html","27290e5fd14c069ddfd6ec0434d3ae46"],["categories/ES/index.html","3ca67ab062e1732e6d637e21ef4cbe41"],["categories/English/index.html","218f7ca723c498c00282bb8e80c9657a"],["categories/Git/index.html","a9c11b2773e19aa61d542ed1b780376d"],["categories/Java/index.html","9e4369d0e3bf67eac5acf4776fea2862"],["categories/JavaScript/NPM/index.html","3f156492bc3b6e274f75cece19f652dd"],["categories/JavaScript/Vue/index.html","ba46ae175114ab9d93ce0f7d8188addb"],["categories/JavaScript/index.html","636e5b90f43db35c1f09f8d8644dae92"],["categories/Kafka/index.html","2135b7534150637d42d136e76746f238"],["categories/Linux/Shell/index.html","3ef977983768b277b20887775a161b64"],["categories/Linux/Ubuntu/index.html","097f66cdf6825264e6719fd2b9a3669b"],["categories/Linux/index.html","95eb43be75afc3520a8e2f5035ff07b8"],["categories/MongoDB/index.html","fafa0ad601c8c284e2c6913cbcf3abd5"],["categories/MySQL/index.html","91a7d6f1105416072950e1c75a91fd4c"],["categories/Python/index.html","50846b97c98f203e3afce20b1e055d64"],["categories/SOA/index.html","c2bf0cf073b717e192e6e6d1a3a3094d"],["categories/iOS/index.html","54600ed57daff0e88163a28dba27ed80"],["categories/index.html","9ffc194d6f3d13da96564636b5f1e25e"],["categories/微信/index.html","eecf0e77eed08fc5dea036ce5c6bd4ce"],["categories/数据结构/index.html","590188584ff3c68bfa220a37167267a9"],["categories/杂记/index.html","eed65e6a028a6f84640c1d94a2e3111d"],["categories/程序人生/index.html","f82d1b507995a219f8b6d9ad58a90f63"],["categories/计划/index.html","59073ce171bc342fdf13684ab879b87b"],["css/css-font-note.html","a123bc3559ee343f3a6fe63123babf20"],["css/css-normal-flow.html","2f35d58f67351715abd3e077fba36e37"],["css/css-sass-introduction.html","7e707df40332eb3449d38453a1fc80ba"],["css/main.css","01ee5b463668a4c2564ae2f647dba383"],["data-structure/B-tree-note-1.html","988a1056799a56ada58122e8e2832001"],["data-structure/Binary-tree-note.html","2a84b2ac8701f39090c67515ef219070"],["design-pattern/chain-of-responsibility.html","164d058efb9b81d23ef1941f949f28db"],["design-pattern/delegate-and-proxy.html","668e90bf3f33d9537e560d2107820a73"],["drafts/configure-multiple-vue-project-with-nginx.html","14db6e8222a7f9f6e487e1491687e53d"],["drafts/iframe.html","689639f9f40ef33e8ab41a6ba7f175d9"],["drafts/record-re-install-mac-os-10-12-6.html","a2c1a3d211c16613cc1f956f57b5d33e"],["es/restudy-es-note.html","ae18162fb5ab247f7a0a3ac913325f8b"],["essay/note-ximurong-tree.html","a2e9949ecab1dfb26caa3720933bed0f"],["git/git-DETACHED-HEAD.html","2aeb59e24f9c91f4615198eda1ea03e9"],["git/git-branch.html","64ecd1b896bc61b3d062f72ebf9a938e"],["git/git-change-server-password.html","eb5d413ef8a9767b806ec0b4cdb89bf8"],["git/git-checkout-1.html","07b53c8c1e2d5678aaa9bcb5fd522d10"],["git/git-checkout-2.html","fc6e33603cca97734d0cccf215cc8f1d"],["git/git-diff-m-symbol.html","05744cdb43117b7f8bbc8ff88e10168d"],["git/git-git-flow.html","b409a58ee3ecb449d0ca33d7cdf97dc3"],["git/git-git-merge-ff-no-ff.html","7439385183828c4ec2e16dabb6a381e1"],["git/git-git-merge-true-merge.html","2146a7fe0170b497d95634d8d08ef13b"],["git/git-gitlab-flow.html","1c6ca51eabf9c46979c66a0a9192c6c7"],["git/git-index.html","798325603183f739faac659304170aba"],["git/git-merge-choose-one-side-code.html","a1e524ead43f619283bb0f8d503b1994"],["git/git-merge-exist-conflict.html","1ec1a3c477a1c821d61c2fcd3af6ca3a"],["git/git-merge-note.html","21932cb2d5008e2b3e116d2f550f4a14"],["git/git-pull-1.html","d5cafa556a93ab68a662a60ef16ce5a5"],["git/git-reflog.html","676f1a8b3e04a3c4d2f2a7e00317528b"],["git/git-remote-set-url.html","b593d726af3f01d56e672a7c8d0e2b2a"],["git/git-reset.html","43a11ffd4cd69a7166010f122cbc69a9"],["git/git-rev-parse.html","a547b317768a9af36cc629b4dfd3fb28"],["git/git-revert.html","c5a60b896c9a83a5de2fbc71b448c24a"],["git/git-tag.html","cb669d8806bff4b0afb9c44c0bfcca4e"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","43625849f11ce1fa34e4e58d82f973b9"],["ios/ios-oc-kvc-1.html","f3d4e8fd98953bd32e701fa83d415639"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","23731aedcc5aa2cdec378d812aad9e28"],["ios/ios-themes.html","cc09e2d42405ee422cfe1ddbf2d5085d"],["java/java-annotation-note.html","d54b20a91e2583f6a0986ce2028ea9f0"],["java/java-annotation-request-response.html","35a922abc65b13d752ac7914542cb1fb"],["java/java-array-and-container-note.html","ccd76942d5f3909896addd9644e24830"],["java/java-deploy-resource-folder.html","a7d28f387c04eec37fd4409e364109d5"],["java/java-jps-note.html","eb101dd06a27281ab3a54837355d17e1"],["java/java-maven-nexus-note.html","0096e4079d761286801439f51093540d"],["java/java-maven-pom-note.html","cf278b458386bdb96297cbe824d7eba5"],["java/java-pojo-bean-note.html","876bcc24e85f0e724a51a94fa51768c7"],["java/java-shiro-note.html","a4f531279a7029500cf12c1ca443496f"],["java/java-shiro-springmvc-integration.html","c6c4559259049e8a228121299bc4aa42"],["java/java-spring-autowired.html","aa41d9e28226500f8a5c2a24430734f2"],["java/java-spring-configuration-bean.html","55b55e5b33c0a4a97ed74b9628132943"],["java/java-spring-restcontroller-note.html","46e49c61d0799b07eb4869496d730600"],["java/java-springmvc-X-Frame-Options.html","01b2eadcd0ae3ec51e31ee3950feb0f6"],["java/java-synchronized-note.html","1d727bcb80b76c29a4b1bd948477180e"],["java/java-value-pass.html","e1545412ed466ab565fe546d2b0df7e9"],["java/java-vo-dto-pojo.html","e0a27c1659a4a8a5e54342b4cd0b34de"],["java/mybatis-mapper-locations.html","8773aa7b04bfed2c7965b64fb95a1c4a"],["java/url-rewrite.html","dcca394c28ded277fbe5c15ff4e0ce52"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","23dd476e4c15f1727397329033b806be"],["js/js-npm-symbol-caret.html","3a2be02575025276237baa510aaaf62f"],["js/js-npm-symbol-tilde.html","bc695c8ab94b2ea2598735e3c734edca"],["js/js-this.html","366d07b589ae766670032387e29f871c"],["js/js-vue-note-components.html","eea0ec37e3b3679d999b2e01d005bb75"],["js/js-vue-note-computed.html","407a6a2b21dc2767b8e85adafcd2afde"],["js/js-vue-note-css-style-binding.html","d140241ea6f7d56073304417d57fe8f2"],["js/js-vue-note-directive.html","21defa667aae7e08053d0a052f8dc778"],["js/js-vue-note-instance.html","5e5395f028dbfe2e41dc34e2ab12f08a"],["js/js-vue-note-introduction.html","cef3a59905e4bf8336488dd9b42f7c59"],["js/js-vue-note-syntax.html","9d1b33b42bfb4b715a5310084d112ea2"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","550f47da32b50adf9198cd3b3469f0bd"],["linux/linux-top-buffer-cache.html","e58613e9080fe1ced739deca86bb416b"],["linux/mac-find-port-occupy-process.html","38fb50abda133013d6cd7db0b963e1f0"],["linux/make-vs-cmake.html","831eff225f8b43f00776fc3ba167218b"],["linux/shell-command-awk.html","e04e0772af689fd0083a387349ca4fbf"],["linux/shell-command-df.html","60ced8e35ac54c0405c563a1d32ace18"],["linux/shell-command-du.html","84f86b5643bc1e912f4c535a35556c01"],["linux/shell-command-netstat.html","a6fbc4b91603b1fb1869fee4c1d68700"],["linux/shell-command-sed.html","3765e41e54fe8c3e46508116610fddbb"],["linux/shell-command-tar.html","cf865ffda3f379be49cead9663322203"],["linux/shell-command-top.html","0ad7ff43ed16c737d74c7c0b9d123b59"],["linux/shell-command-touch.html","1f867c923af7f646b5c49dcc11ad8050"],["linux/shell-command-which.html","1716848eafccee5f00f11f7b23f5ff64"],["linux/shell-difference-semicolon-double ampersand.html","53ac2b6d5cba21641789c7aed8c5754a"],["linux/ubuntu-user-add-delete.html","1fa95f4759bf990b8ea7a118c3b40233"],["linux/vim-copy-note.html","7904bb539eba8fdebc63fb910fee19c2"],["mongodb/mongodb-collection-aggregation-introduction.html","49012d3a918a4041f3ef0dc50b0dfbea"],["mongodb/mongodb-collection-aggregation-stage-operator.html","9c4c9ce29d746d613c70308f68c5ce30"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","27c50279d6650142de10a55c7f5ec2c8"],["mongodb/mongodb-collection-create.html","7692ab40323fab3cfeeddd65a72fcddb"],["mongodb/mongodb-collection-delete.html","d219c4be8ecb5239ab12e090fc541845"],["mongodb/mongodb-collection-find-1.html","fe3d13ab167be17d82e15060979c97bd"],["mongodb/mongodb-collection-find-projection-operator.html","f1fc4f1d832634ad4f344747d18df12c"],["mongodb/mongodb-collection-insert-1.html","c1425cb820da026744ff3ddf0f2608aa"],["mongodb/mongodb-database-create.html","31e39b68f70bccb231154e2e487ed6f3"],["mongodb/mongodb-java-driver.html","f01736dbe51383229627dbeb66314e32"],["mongodb/mongodb-schema-design-note.html","1e910404d1844bf626dd276b4d6887e3"],["mongodb/mongodb-study-note-1.html","e349d5482399b59f08c7904b5996d3dc"],["mongodb/mongodb-study-note-2.html","b715e9cf9063f163d1d11607aac2b886"],["mongodb/mongodb-study-note-3.html","2639dc033bc163b2b0a95a54e9b069b3"],["mysql/B-tree-note-1.html","0c5de0ae7644c4dd1679f39c355499c7"],["mysql/clustered-index-mysql.html","33be206a51717fb7d04dd6322383fc40"],["mysql/mysql-ddl-handy-book.html","168afc638cb7f033ccae2a1ac36cb54c"],["page/2/index.html","35726c0439098884585ccc39e605eaa3"],["page/3/index.html","c24bcdd3392f04c6104eff1834c0c022"],["page/4/index.html","77a64c5e4693fc8aaf5699ae647f76d3"],["page/5/index.html","9b6175b04fec319c02684900432d2768"],["page/6/index.html","fddb73e587869c5773a1f4f566092d58"],["photos/index.html","d73f08b9dfb690bd854f279e9de10510"],["python/python-args-kwargs.html","b80b7a04edf30532565c9ec9f2a01e9b"],["python/python-async-program.html","287d4898b640a2cee4ef33d2b4a9d638"],["python/python-package-module-note.html","0d1d9daa66227be61fc3a1c1f6628623"],["python/upgrade-python-under-ubuntu1604.html","0d667186cebe26988843c599329c0b15"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","62cac767560288e24869ee188860d55d"],["slides/index.html","75c2e7424d7c2fb30c5fe7269eb65b2f"],["soa/microservice-article-note.html","a3bf390cc2651b2a282ec281fa43da84"],["tags/Autowired/index.html","4a9eb93bd174e20f3863cf0adfc2f7b5"],["tags/B-树/index.html","423888fdc07f6f11428f208856da2592"],["tags/Base48/index.html","287fab124cfe4bae6efabee6b2428e8a"],["tags/Beans/index.html","5f70172ca06c228edfd3f4637a5c8f5b"],["tags/CSS/index.html","426f7475713c4012b72629e3e9325a0a"],["tags/DETACHED-HEAD/index.html","5b86eb0ab5c9007e71b52257b8f895f9"],["tags/DTO/index.html","01230c0785c58311aadefff25d5db8b2"],["tags/ES/index.html","b76f863c11f04a91071b5ae977dc545b"],["tags/English/index.html","53c0447eadf117cb24d2528ba891a87c"],["tags/Git-Flow/index.html","7492d59b5a0c920ab6dfe09e7fc9239b"],["tags/Git/index.html","43a0fe1d4dcef70f855d8902fdca79d5"],["tags/JS/index.html","f76b47b2a0c4e16904fefae3e382f783"],["tags/Java/index.html","06edee58feeaeb85c7ad0b12bfd2691e"],["tags/JavaScript/index.html","471fd2a55e78db0c2e17bf0638e77174"],["tags/KVC/index.html","ec6bcf40480e7993aa7a755280556526"],["tags/Kafka/index.html","161578f7ef29e657605a60b805149736"],["tags/M/index.html","6abf021ce26cc9d02141f844ab04bc5d"],["tags/MongoDB/index.html","8599e52975bbfed038cb0ee510ffca26"],["tags/MySQL/index.html","90c87db8d5e70e4b387ada71d40f9e09"],["tags/NAT/index.html","7d64cf3bd52cb7c49a220f604133293a"],["tags/NPM/index.html","de8c9e5030d5e7933f41e1c9167aa925"],["tags/OC/index.html","60dd39f665f14dd3ef52df5c3812d0cb"],["tags/POJO/index.html","e058550be026a1bee0171464820678de"],["tags/Python/index.html","e460681d09c9b44647fb5b095e77e1c3"],["tags/ReactiveCocoa/index.html","21e06df120b072843b777ce858466718"],["tags/ReactiveObjC/index.html","9c35d0b863e83ac23f839cc7162575ad"],["tags/Repository-not-found/index.html","53f20833c4c92e64e8cb5f438628d191"],["tags/RequestBody/index.html","dfb0d92eb6f02a530324d8cecebcb513"],["tags/ResponseBody/index.html","577e375b60fdab49f20f3964190d53d0"],["tags/RestControlle/index.html","9d5fa18f1c8104fc3a63c81ff8c1162a"],["tags/SASS/index.html","7abc71e3f52128b7904272e6a9b4ec4b"],["tags/Shiro/index.html","8884ce885a51cbe6217bd2e46012dbef"],["tags/Spring/index.html","321477ed63141008a5dd730c3c1d1cd9"],["tags/SpringMVC/index.html","4062cda63c56e5f5d22a0b8af55b3b0b"],["tags/SprintMVC/index.html","5c9b174932c6844db79013392d8fffb8"],["tags/Style/index.html","f1bc16c858aa6eb228353732896a04ef"],["tags/Ubuntu16-04/index.html","232fc1d5c63e7dd5d3c6a003226d8985"],["tags/VO/index.html","c9dd0cedaf88b3936a43027ab28ef930"],["tags/Vue/index.html","22708a301a5cd3553217ec0a4f2d4daa"],["tags/Workflow/index.html","52fdee97530a55767d28751658e56a2a"],["tags/X-Frame-Options/index.html","fbc4914ed64b92353e904934c269fe4e"],["tags/aggregate/index.html","55d7a29f8f06d0e09f360888fe01c830"],["tags/alter/index.html","585184645c201a10e11bfa286a262046"],["tags/annotation/index.html","499e092081ab72a2989a708f8142c0f9"],["tags/args/index.html","5e7fef3501c99bc5bbd96a64755b91da"],["tags/buffer/index.html","9df4e663bd7f7f2c2259b271c3dc85e3"],["tags/cache/index.html","caf643b16f6a9213c87e90f88bc554c0"],["tags/change/index.html","4f07a9891ea53ee67594584dce4824dd"],["tags/checkout/index.html","cbd4803cb7b525c646f4fbc056eba964"],["tags/cmake/index.html","38cc0788766581aa18695525e7c91f24"],["tags/collection/index.html","324a7e22674f0dbc9a10dfe5b05ab97a"],["tags/component/index.html","c747a91c2fd5a8181426f3d58adaec21"],["tags/computed/index.html","3201d3886b79679d15c91a2190607dfa"],["tags/create/index.html","24d07c8220a5dbf15fa86dc2772acbd7"],["tags/database/index.html","140993480407aab3d44c1efa1028e335"],["tags/df/index.html","fc3e3564392aba26a01e4f9d0f959aea"],["tags/diff/index.html","24be27552dae5e8d3bbed7324c45c08d"],["tags/double-ampersand/index.html","b75d032ad596e109049465e32cc5b9a9"],["tags/double-vertical-bar/index.html","499169fc8a75aff21bc622675f05803b"],["tags/driver/index.html","b5c8c40d8cb2435301d9cdcf74331cfa"],["tags/du/index.html","5f83ad2d2fdd4d82f058c2c5de6eda26"],["tags/fast-forward/index.html","cd5e3b428384da38bfdabeb48d3838db"],["tags/ff/index.html","31f6554833a18eb92c980c172561b1c5"],["tags/font-size/index.html","e4c9c6f1c877d851aec6b9efa4691325"],["tags/font/index.html","a51aecf8465662a141bc9ad6cb9d1032"],["tags/free/index.html","1e402cc1c5c763a60a33429ce6a65f5e"],["tags/git-branch/index.html","05ac2fe08214c0cb1f024b6038ad1e4b"],["tags/git-index/index.html","c538e4b1aa9bae70611b01679949b76c"],["tags/git-merge/index.html","139a2ea3b70f577f92ad82bf7359681a"],["tags/git-pull/index.html","caeda5fc9133de7a45cbb67f5c500d09"],["tags/git-reflog/index.html","f07e09ca7841078d6138ebf09fa97aef"],["tags/git-reset/index.html","2d3198ee85485a571ef8c575e40f4fc8"],["tags/git-rev-parse/index.html","2172d5ca675c36a00f096bb40a6b71ca"],["tags/git-revert/index.html","036d4e8d224cc2ffff904e3d21d9506f"],["tags/git-tag/index.html","a8bc6ab6b031c34f52314d2aac2c56a4"],["tags/i-e/index.html","a1413cf3152ad4861d6f99b6bc847e0e"],["tags/iOS/index.html","17a74efebe1de58bf34de2e782e34af5"],["tags/index.html","7a2a836f614948b07d5f49dc9920c66a"],["tags/inode/index.html","b60b3bfcdc9b70f67bbd69051072acb9"],["tags/jps/index.html","16b252d29853b6380e3414e9ad94a174"],["tags/kwargs/index.html","efdd174c5fa64064684d93470cfa3de3"],["tags/linux/index.html","2e872964963b336e6934bc56c7c4dce9"],["tags/mac/index.html","88eacae9a78f2645ba972e27969dbbd6"],["tags/make/index.html","3d42c682b8ced66cc0ebe19dfdfeb477"],["tags/mapper-locations/index.html","eb469dbd8b34a780b7a45f0afc896b39"],["tags/maven/index.html","9a410fd3c23034c4c9b38c7940443a9e"],["tags/microservice/index.html","da472eed7a618caa945c72dbe7f7e65b"],["tags/modify/index.html","063afcac4208397531026792f3053659"],["tags/module/index.html","e5ba25fe108e1f61c10e31bfcb02bd87"],["tags/nexus/index.html","34a6cfe905304c9ec8ea28d45de0e1d6"],["tags/no-ff/index.html","290d34ef0e9d061490a47f3833babc8c"],["tags/package/index.html","50852101cc99ed8df51b64cb55fe1768"],["tags/pom/index.html","d07b8f1a55e9c80d9e71a0ec8ed65bc6"],["tags/rewrite/index.html","619d72eb29086c76febff182a5a50f98"],["tags/rm/index.html","5d605cac4c69860c5bd4830456b96c86"],["tags/schema/index.html","c2498517cc8b6c0a6a1094a10a7fce34"],["tags/semicolon/index.html","d6eaed997a1860025174ac393aaecb6d"],["tags/shell/index.html","6366f828b920decd2a7bc8664a9512e8"],["tags/soa/index.html","e5426261b9d4d1eee69c7d473a0093e8"],["tags/synchronized/index.html","11b681101bd6a1218d2e1eeb9769c157"],["tags/this/index.html","2e61f3272bb3e708dc7a4b0492189a2f"],["tags/tomcat/index.html","b3cc915d3667303abd7f6d01a2c1be2b"],["tags/top/index.html","3f877cb51290c0678226ea5366a78727"],["tags/true-merge/index.html","8aa10e469d2b77547cc4d15405814995"],["tags/url/index.html","cbb00ce2cdf3f3448e4c8cf9a13b66ed"],["tags/vim/index.html","48884679fc18ece09ed9172691d0f6b7"],["tags/windows/index.html","3c423a33466986dd42b02bd38fbee5cf"],["tags/一棵开花的树/index.html","64594ba0602c6789879c1a5ff227199e"],["tags/主题/index.html","2b98e1cc398bd1bdd659b46eae616985"],["tags/二叉树/index.html","69c755885523825ae2b8793bd8a3a699"],["tags/介绍/index.html","475e36d3c098f8b89b17ed026b895ddc"],["tags/代理/index.html","30ce9631ac6bbae92fdfd1a1d2d1e251"],["tags/以太坊/index.html","57e919de4472556f9fc3430779dc4b87"],["tags/依赖包/index.html","2b8c18a05b0059474c2e8c638f1976ee"],["tags/修改/index.html","49a7b51e1a1aee0efcbe210e37f38e29"],["tags/值传递/index.html","305e1e2bbc78207053c551337de19301"],["tags/冲突/index.html","99b69f1d491f65e8759519b581caa224"],["tags/分支/index.html","eaadf289d710ae28d23a83f4317f20cf"],["tags/创建/index.html","d558cf5641c4e256ff83c515cbbc5891"],["tags/创建数据库/index.html","ab6b52cadb6667bd4644f6223b57e83f"],["tags/区块链/index.html","976aab0b4020d6131126772f88c473f6"],["tags/升级/index.html","d4e58d1068f98a7a222a17e63215dfe0"],["tags/参数/index.html","9f93c4b42d5c60f699bc55e9970584a8"],["tags/委托/index.html","0c057ef2109a9a275a0b79af9d0716fb"],["tags/存储/index.html","46257cc9ebbe89c00ffaaae35881d305"],["tags/存在/index.html","de4469d6fe965907ad3bddee10122a95"],["tags/学习笔记/index.html","d9e91ee12b3aefcc76ced0e160c2ca31"],["tags/实例/index.html","d2c0145971d9834009535b03ef9e5fdd"],["tags/容器/index.html","5efd7016fdba4e8d39aa4e7d2a51a8fb"],["tags/工作流/index.html","6ac5d8826b85a52593aadb1190b44c37"],["tags/工具/index.html","467ce3d6552934a6d26809faa210558b"],["tags/席慕蓉/index.html","5940e4a4fa01a131a8498e751a15f48a"],["tags/异步编程/index.html","c230f78f77836109ea22e5feed8849f9"],["tags/微信/index.html","563f55ceeafa53fdf7ff33386f8bef3f"],["tags/插入/index.html","d43bfbe9f68317bbe444d6d297f90c09"],["tags/数据存储/index.html","5f416ecfa7413125f2d9998a4aa67ff0"],["tags/数据库/index.html","fff3743b8be3cf51433bfb03c627ab4c"],["tags/数据集合/index.html","fcd5003e8698e6d987fe9980ef8cb366"],["tags/数组/index.html","48ccb4b188bdd91f2205e46616b21c50"],["tags/文档/index.html","536d65ed2ce93b5c77501ae1916ac495"],["tags/文档流/index.html","02902fd37a026a05098bad171112066c"],["tags/智能合约/index.html","dfc85aed2262e1149f30a4159633706d"],["tags/标签/index.html","98052f7767fca59864d4a72a09a16ea5"],["tags/模板语法/index.html","d624c1129a25d417e0b3c7562826a4ca"],["tags/比特币/index.html","8cbd95b5104ca19844da8fc38bc1841c"],["tags/波浪字符/index.html","7574e9d0068798b92b51fa43e58a7fab"],["tags/注解/index.html","ea7e60dcfe60f7a7176ed18016ee4b63"],["tags/用法/index.html","c59559f59e71f4fddb4d44269292db17"],["tags/穿透/index.html","055480f8b72b23dcd8329a54caf26913"],["tags/端口占用/index.html","1d64b50c48c7779278825c3384e746f0"],["tags/笔记/index.html","e8c35bd9a7d101da981e248ffc66981d"],["tags/符号/index.html","48cada89dc8d9bae84de3c556feba221"],["tags/红黑树/index.html","805c503462c5ad03b6a13ca29e53ea28"],["tags/组件基础/index.html","4b295d171ef008f59a56120c7565b601"],["tags/绑定/index.html","7c7d28ebf9d375df3f41bfa5e853996f"],["tags/编程/index.html","88f9b10a3ee31deba633c608e152bf36"],["tags/职责链模式/index.html","d5b8eca651413003cd1b24205730670e"],["tags/聚合/index.html","f28ea7642b4d325b375c0cf395894976"],["tags/聚集索引/index.html","5c85b42328b1208a584f4230115e84ee"],["tags/自定义指令/index.html","e4a4b9b46bab65466887b5944cbfa8e4"],["tags/计算属性/index.html","746f2b12e25e2785b71be1552e258915"],["tags/设计模式/index.html","cdfdb1c863334ca67c4ad91648eb9401"],["tags/进程/index.html","ae1f954de219cd5b1e6f64edc5f6e73c"],["tags/远程仓库地址/index.html","82fac4ab07602ba23b8f90de29b60fa4"],["tags/逻辑操作符/index.html","6a66ea30e636e22c278e8a23e737a816"],["tags/部署/index.html","c1616fdb45fbdf0a0b0e62edddffcb80"],["tags/难度/index.html","7fc9d0b0f079ed73f255756f8ec8ce80"],["tags/集合/index.html","629046a9c643f270fd487ae8798b408b"],["thinking_in_programmer_life/full-stack-programmer.html","945666abd59d96633406160e8d84b847"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","980b6ec261426fb049b4f71727617503"]];
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







