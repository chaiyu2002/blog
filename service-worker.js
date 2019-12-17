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

var precacheConfig = [["English/ie-note.html","a490fa48caddcc6f1c71121119fc11e0"],["Kafka/kafka-introduction-note.html","8dd77e7b6b0d7f69ae024c48193a5906"],["Kafka/kafka-storage-principle.html","4c28ac8b309c4f71a9a2a6ac220ce9f0"],["about/index.html","edbbde54fce859433316f375b6ca2baa"],["archives/2018/06/index.html","e29ed48f650a46fa1c5eab83a4e8c9cc"],["archives/2018/07/index.html","8507ea84332c26fceef124dc85479ed9"],["archives/2018/08/index.html","df4a9c12c789d19f51858de52983ebd9"],["archives/2018/09/index.html","3fae17669a51a3f217a65ee009195c89"],["archives/2018/10/index.html","85650424b62bee835bc610055f0ff8c5"],["archives/2018/11/index.html","aaffe0881439adb048b77cf6b32ee13e"],["archives/2018/12/index.html","d8d010691f9612d7c1a729501949dd6e"],["archives/2018/index.html","4c6b4c0a40a08c5fdb54837c13333c47"],["archives/2018/page/2/index.html","9b7b8e6683402ffed74c27403fb549f2"],["archives/2019/01/index.html","61cdb411ce0c7e9b8a701bcda973d7f7"],["archives/2019/02/index.html","674c8f96eccf19e9b3faf0216b0b21bf"],["archives/2019/04/index.html","001ccf4f404deccf322c0b96142b6493"],["archives/2019/05/index.html","f82a2ec4924e95e3f803274dee65e97a"],["archives/2019/06/index.html","4eed78789c77439d28683b85e2f7a034"],["archives/2019/07/index.html","d1dac0ace2a30ce106d8ff33ef8a0259"],["archives/2019/08/index.html","c225db8fed4ad5631ed37b9e451490b3"],["archives/2019/09/index.html","bde62f3eabdaa26a57fa158cc416d215"],["archives/2019/10/index.html","c63a09e8949fc0c27c85b401cb887ac9"],["archives/2019/11/index.html","e3688e1196ac72ae02b8550ae29924be"],["archives/2019/12/index.html","de336f5444abbe130da54fe2e80a3f11"],["archives/2019/index.html","0d9d2beebe91aba84335ac4f38f8d636"],["archives/index.html","d24607da0ba341a10737680bc8328045"],["archives/page/2/index.html","1d1dfac6720e215fdba26211192d14a2"],["archives/page/3/index.html","0ad64e9047eb1c16113935bbdb5a531d"],["atom/index.html","24ab88357adf483f3a39aa37333ff4f7"],["blockchain/base64-base58.html","8ed77c7f1ba5ed503cc3a0643df94af9"],["blockchain/bitcoin-data-storage.html","ba5645b47cc6e8a92c27f88d1aea7880"],["blockchain/bitcoin-difficulty.html","9e590ed2e430c1210cb4235c67bcd241"],["blockchain/block-chain-ethereum-contract-program.html","72896aa4ef9973bf3a21a1f1374a8fdf"],["blockchain/ethereum-programming-introduction.html","43a7bdb6a4ec96ef03a0fe0ff2f60b4f"],["blockchain/ethereum-rationale-introduction.html","e401876b42e8d7c6f7bd6b975c1238cb"],["books/index.html","aba7e31993612cb231168c29620c8480"],["categories/Blockchain/index.html","308944830c6b02a23f76b1f97fff0dd6"],["categories/Blockchain/以太坊/index.html","17991060bc3132d723e11b584868a2f3"],["categories/Blockchain/以太坊/智能合约/index.html","25704b2a44788a4f6acc837ebbcdfb86"],["categories/CSS/index.html","d1fa8ef85c9a2d07921838e2dbfe507b"],["categories/Design-Pattern/index.html","6709568a5ffe994669455774173bf52e"],["categories/ES/index.html","19ffec86bd63004e5c5f303b6d8089bf"],["categories/English/index.html","5ca7ed750bb3c3136a53e870c9652dd6"],["categories/Git/index.html","abb2da84e10ec1c955d83151895d722f"],["categories/Java/index.html","de7b1ffe13204b00a10de9628ab5a7fe"],["categories/JavaScript/NPM/index.html","812df9adc3cdd7886071f20b846cb5fc"],["categories/JavaScript/Vue/index.html","087862f00065e71b9058c68add9fe573"],["categories/JavaScript/index.html","483a4c2707bae2e091448362a002ee52"],["categories/Kafka/index.html","4642aeb23112e64fe35e42bbd6cd73a9"],["categories/Linux/Shell/index.html","0266c0f0b1bffcde368e4a58e38589fe"],["categories/Linux/Ubuntu/index.html","e3daefd6f44d6e4e1f2db3533ff0252b"],["categories/Linux/index.html","4a8491cf764da66225ffcbe05eab0bc7"],["categories/MongoDB/index.html","fae6468393dc7997eed1ec3be99a29d9"],["categories/MySQL/index.html","1f0c5ca7ca511d7f415c002cd46eb837"],["categories/Python/index.html","c87322685ae750a1fff172b17bc1a0bb"],["categories/iOS/index.html","bfa67df6441f5174c45b4ec6c17968a3"],["categories/index.html","4a0e1ef441b8d526c9d65209a7ad1024"],["categories/微信/index.html","ec6dbe13eb6279244c6d983930eaa9f2"],["categories/数据结构/index.html","b1a1661170bb29b4302f810351cc1518"],["categories/杂记/index.html","120bfa1a3ffee8071e99474ac6c3685b"],["categories/程序人生/index.html","5fb7bed12c5e2ddb8c1140e02588747f"],["categories/计划/index.html","b3328756b471ab2df235140de35abd38"],["css/css-font-note.html","5b49589c7fe7aeebe0838fe7b4848fcb"],["css/css-normal-flow.html","0a26c40d478bcc757f26713fe324faa7"],["css/css-sass-introduction.html","0e39c26560481e0fe0aafbce5c952612"],["css/main.css","9dcb8d42ff3f2d67ac9f00a77d01b966"],["data-structure/B-tree-note-1.html","04c50381381c2fbff4a654490b9684ea"],["data-structure/Binary-tree-note.html","fab07a7c45c8154a7a7c47555a32943c"],["design-pattern/chain-of-responsibility.html","1b4f40c09f9c4fd8aca7d97e07cec772"],["design-pattern/delegate-and-proxy.html","6fd90e93910128d5b32c9a04f36d2b3f"],["drafts/configure-multiple-vue-project-with-nginx.html","eb431d745738bbdde240131bf9de0ed1"],["drafts/iframe.html","67b38e66f9bd32fdc1573769190af07c"],["drafts/record-re-install-mac-os-10-12-6.html","18025d685ad1a9971f6f1162c64a327d"],["es/restudy-es-note.html","ca55eeb0edd074ccea05cc4aa57f0ebb"],["essay/note-ximurong-tree.html","cd2bf2136874e91d63dda963d2b55800"],["git/git-DETACHED-HEAD.html","76a50fbaf5d335d4394ff1bc0b7093cf"],["git/git-branch.html","9295e98aa873b82c99d5ed6ca4e08346"],["git/git-change-server-password.html","9651fcd92158296db65eb8b889faf51e"],["git/git-checkout-1.html","81824127077465d2e792bbc618008962"],["git/git-checkout-2.html","39a8a625602e66cea6cbd21dfbfc3079"],["git/git-diff-m-symbol.html","bc65b753907ff643d0da5320691b9b72"],["git/git-git-flow.html","29beddaa8712b2683cf086faec1011eb"],["git/git-git-merge-ff-no-ff.html","23f3a4f0954daeadb5fd5efbd532e3da"],["git/git-git-merge-true-merge.html","f74726fc732858e0e4db9e829c2884f4"],["git/git-gitlab-flow.html","9ee47f4a32fd3ba8f028f4be6c8b77cf"],["git/git-index.html","967f7e770b90a63574ac9c0eb80b68ff"],["git/git-merge-choose-one-side-code.html","3b6b6845eaa77e00da70575a993b9c43"],["git/git-merge-exist-conflict.html","b50a6aa7d8e97f1a5817849653fe3f13"],["git/git-merge-note.html","2fc2e256e693a59666b799b2d4a2f3d8"],["git/git-pull-1.html","b7ab9e5dea34253fae8cc4c4ffeff1bb"],["git/git-reflog.html","c5db9e162cbff54631c4c6bdd192b078"],["git/git-remote-set-url.html","b53eba4a672404d4842f0baa151570eb"],["git/git-reset.html","e78ef9717e930fcd7a3863b274d00cc7"],["git/git-rev-parse.html","f2a1a78fcee8fd03748110a30140bc0e"],["git/git-revert.html","2dbed24d95ff6b7253da48e8a89f0e54"],["git/git-tag.html","f03df2db90c9dac28e82d3e3775cef05"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","363a20a833f1e27e8af09153d80f2dfd"],["ios/ios-oc-kvc-1.html","a4285aae4e361d5078bd4b1ba235056d"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","74ca65b597583162411d4db89a7a75ed"],["ios/ios-themes.html","5bc30559c3061311bacb1f9cc08efa7b"],["java/java-annotation-note.html","71cea5968c1c4a03e1a7efaf1240fe5d"],["java/java-annotation-request-response.html","5eb9a8b3a56f59d0d792441d2afeb9bd"],["java/java-array-and-container-note.html","baa1fd0d4658bc9d885322406c641744"],["java/java-deploy-resource-folder.html","d01a6ecd81804ed16d88e38ae81fd48f"],["java/java-jps-note.html","c129cdf4fca757d4135953683ec5cc8c"],["java/java-maven-nexus-note.html","3deafbc8795da7ff4e865823e2b1b1c9"],["java/java-pojo-bean-note.html","5123a43fb307ef5b38c03f24415b56d3"],["java/java-shiro-note.html","4db816d7049eb946c33203dd47530a65"],["java/java-shiro-springmvc-integration.html","58b75eec630b830401104f764c212498"],["java/java-spring-autowired.html","12018296f3261697a9977f400d99687d"],["java/java-spring-configuration-bean.html","e7ea1d4feb5705073fc58961b2ecb963"],["java/java-spring-restcontroller-note.html","6e1ccfbb69c38518297543f3eb198a9b"],["java/java-springmvc-X-Frame-Options.html","4dae5ac637b007dba4ba4bc0594b8b16"],["java/java-synchronized-note.html","1c9840af78ef3fe3aaaf50373e93944c"],["java/java-value-pass.html","a2e74d8abe4398a945f185d222bdd85a"],["java/java-vo-dto-pojo.html","b4325787879d009f4ca9031732f31fad"],["java/url-rewrite.html","f03d90ab0e9d9b0a1f0ebde0f65ca302"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","14169113946a6cb59882d89d243355cf"],["js/js-npm-symbol-caret.html","71327c1a4d5baf64421add66c68b2fbc"],["js/js-npm-symbol-tilde.html","608e9481223e057c9bf528105ac864d6"],["js/js-this.html","3c45707f215ea8e7c3cacf4514b7e76d"],["js/js-vue-note-components.html","b9abff935988e87e16371c380f395c8d"],["js/js-vue-note-computed.html","c5d8792c57015a751bf0535252b75b87"],["js/js-vue-note-css-style-binding.html","b330f0ad184a33a25148930ce81ba570"],["js/js-vue-note-directive.html","fb59ab404136ddf7bfc54f353acc531b"],["js/js-vue-note-instance.html","b16f4e8e19ef534bea0227750d11c1a5"],["js/js-vue-note-introduction.html","cb888a43a828d3c1e1b1d443d5d250eb"],["js/js-vue-note-syntax.html","c81f9bd312652413e5b27a87ebe45b51"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","cc3b2d3aadd298b855a50eac3dd5014e"],["linux/linux-top-buffer-cache.html","f11c735915794a5792e48ca12ff72ef0"],["linux/mac-find-port-occupy-process.html","e1e274735acaaec6a461c051b2892740"],["linux/make-vs-cmake.html","f05866a397bff05addd94e27a360d101"],["linux/shell-command-awk.html","a13f837855f77fd1cf828c614d548b94"],["linux/shell-command-df.html","3fd9b217378a413341b45574b07bcae3"],["linux/shell-command-du.html","db9e1edf78b1c834e1d59b9f7ef21314"],["linux/shell-command-netstat.html","5b2b572e1ec91f555c7561199c907f5f"],["linux/shell-command-sed.html","dbb341234f356ed86f70c6481f226d38"],["linux/shell-command-tar.html","fd95be50479aeac01c6cf489846158cf"],["linux/shell-command-top.html","1a17ad143a7b6703d4056dc7ff71d7b9"],["linux/shell-command-touch.html","2a0ae25d434cee8cd6a3ae485540ef6f"],["linux/shell-command-which.html","88d2a9ce5206c30674fe2ced4b1c5ce8"],["linux/shell-difference-semicolon-double ampersand.html","139d33a9578f40f0096e3478b0fc8bf6"],["linux/ubuntu-user-add-delete.html","47e299df454fd163ddbb3d7a5f2a0256"],["linux/vim-copy-note.html","9a57a1bb20e0bde3b82838d7137076a4"],["mongodb/mongodb-collection-aggregation-introduction.html","14205ebb05790944f9dbb1c7b5b7e6fc"],["mongodb/mongodb-collection-aggregation-stage-operator.html","67788f30c0d732e7f278d8cf28af01e7"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","52bb8e6aa8eb0a09c72f5bde3856d166"],["mongodb/mongodb-collection-create.html","11157b05f4a84f863c0dfc34a295b017"],["mongodb/mongodb-collection-delete.html","b4790dfe7d9e78ec171f13c83b62b91b"],["mongodb/mongodb-collection-find-1.html","3a02b7353bc7b4ea093352c18dfca052"],["mongodb/mongodb-collection-find-projection-operator.html","1b8d2bad77fc28507f2580a3dde0989d"],["mongodb/mongodb-collection-insert-1.html","4cdf171c03170df064b3284b1bf04d93"],["mongodb/mongodb-database-create.html","cbda7f7db774749987feb2fee1bbddfb"],["mongodb/mongodb-java-driver.html","355852270a7ac6ce9d2953467cbc61e7"],["mongodb/mongodb-schema-design-note.html","53fd412acffbc3d696cdbba0edfdeeb3"],["mongodb/mongodb-study-note-1.html","eface6dbd1610a90e2bd40fa831efe6d"],["mongodb/mongodb-study-note-2.html","371c90bab8f34a4ca1a61421cfbc25c6"],["mongodb/mongodb-study-note-3.html","ca229d90080153abc237dd7e4a6a23bd"],["mysql/B-tree-note-1.html","6d0c01dadf22e0539a6967e605b574a3"],["mysql/clustered-index-mysql.html","476703ec0bf70313e6cd355f94b9a4e5"],["mysql/mysql-ddl-handy-book.html","7e60f9a334285ebb8702965d24595221"],["page/2/index.html","a69141a49a9e35125f710e5cf1c52f2c"],["page/3/index.html","a209106dfe6a83fc549a589c25ba8f63"],["page/4/index.html","bf9e68e982d0455fbed7c404c3527d41"],["page/5/index.html","836272d4e929dd1a8e25d7c14d4a78df"],["page/6/index.html","22978b586ddcdeeedc3be4e2b1132cac"],["photos/index.html","0230f0c7da32a361e8e2e4dd0bfd7052"],["python/python-args-kwargs.html","178028c1e3756be09dfac722ece8e34a"],["python/python-async-program.html","669104da081ed4dd3b1d0aa6eeaee7df"],["python/python-package-module-note.html","3a864fbc7f8ed083bd270bb077f9216d"],["python/upgrade-python-under-ubuntu1604.html","164d33a270d431d6b52b2aaad53532c6"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1a8d43cd3c9f40eadf4443d55776fff4"],["slides/index.html","78f67da657079a8a9fe5bed2a70dd999"],["tags/Autowired/index.html","b1dd9b531b547ef43b889b8e4009b233"],["tags/B-树/index.html","0a5751fbe02303dacc35e37025d8139e"],["tags/Base48/index.html","0872af10377552d7b2145c42fbcb0091"],["tags/Beans/index.html","34309a5b6fe637daccbf66fc4ac44e7f"],["tags/CSS/index.html","1938ab737936389f369df52e014dd3e1"],["tags/DETACHED-HEAD/index.html","39c63cfffc00e2986ada6939299fce6d"],["tags/DTO/index.html","0d23deed7fd4adf1db8785b5158f926c"],["tags/ES/index.html","1dcd5ba9b3fd61f2a504d65fdcaf1422"],["tags/English/index.html","ba7d02bcd2b7ebbbfbd2a3e0e9c20735"],["tags/Git-Flow/index.html","d9778f8d51484bc861ffcefc92feff77"],["tags/Git/index.html","36c70d9d6862e33e50d228140019da33"],["tags/JS/index.html","5a7afe2b538ad30afb01430185e7a700"],["tags/Java/index.html","e2d33a1f7212d99b2366aa8033a29d8c"],["tags/JavaScript/index.html","fb6edfca618ae0a8027820f8fd1859f2"],["tags/KVC/index.html","083fd2245efdc94b1d6a2317c2a93c98"],["tags/Kafka/index.html","791c5ad5fa7fbc9bf19544f25f3cee16"],["tags/M/index.html","ada05e0751ce2b263fe187fdf9d2d1a6"],["tags/MongoDB/index.html","8c639eb8686d6cbcb361ca14471253ea"],["tags/MySQL/index.html","b89e90b3150d0f956f975fdb1e1624fc"],["tags/NAT/index.html","e504a908e7296350b7863e7e743a9b8b"],["tags/NPM/index.html","7c8b6a38b8e9303293b29d45c34debb4"],["tags/OC/index.html","2f599387d22cfc74af5d132a90a166a5"],["tags/POJO/index.html","db9b15852d159c0397b91788a55189ce"],["tags/Python/index.html","e3c0291ceda0ee8de91749d8fc92cc4b"],["tags/ReactiveCocoa/index.html","a99b4de74325c5d211e4027d5bb65bed"],["tags/ReactiveObjC/index.html","5f25f83ac73d79e38cd5bb4a02265d1f"],["tags/Repository-not-found/index.html","33623ac795c6ee7eb18f3ea8d90c44be"],["tags/RequestBody/index.html","ea5867d56873e728ec99e8cfaa6feb0a"],["tags/ResponseBody/index.html","4bfb172c7989259d19e880f8404cafea"],["tags/RestControlle/index.html","5633ba9a3acb5a46b67e3548ab2c1956"],["tags/SASS/index.html","cfe9280fdb8cf7a72730e869acc7fd23"],["tags/Shiro/index.html","03d8a1b93ec73044effc8559c1e6d312"],["tags/Spring/index.html","f0ec59eb0f2fafa9d7f6d35c5edc430a"],["tags/SpringMVC/index.html","7218ad49a568b56b5bc6fb2dfbec8212"],["tags/SprintMVC/index.html","16c79f69ba8578cd311923b0bec02e0a"],["tags/Style/index.html","f7eabf7f6b13ae80a5cfc0c286767bd1"],["tags/Ubuntu16-04/index.html","6a4f0c7fa5648e0da95541c158e4a375"],["tags/VO/index.html","72e525c2a9e5fa863329e9921afcfa9e"],["tags/Vue/index.html","2562939a66838e25119024b91957255b"],["tags/Workflow/index.html","a42b2f8cd6cbdfbed6b295217c51b8de"],["tags/X-Frame-Options/index.html","c44f59284a9fa52e83a4a57b9fc3ce12"],["tags/aggregate/index.html","69ab2e2e7399918e0c84762cc9d9a25b"],["tags/alter/index.html","f97d59c43e838dbba616253bdaf3f8ee"],["tags/annotation/index.html","61fc0f9ee16e56191fd177e130e40674"],["tags/args/index.html","393eb435b23a4bd008051130a1cce2ee"],["tags/buffer/index.html","44fc12750a9ceca8fc6afa60640758f3"],["tags/cache/index.html","18761e476b5f629a945b9464dc1a2ebd"],["tags/change/index.html","167541267bbc45011e6ae027b17210b9"],["tags/checkout/index.html","a523f12a3143f9cb1b76befc143178c9"],["tags/cmake/index.html","ab25928d4e357b7b6eed7a138f629983"],["tags/collection/index.html","6bd0f064f1107c390ad345c462327cf7"],["tags/component/index.html","baa412ee87b5fbfe9a85196193cc675f"],["tags/computed/index.html","2f2d45c35efbb5572478588de94505ef"],["tags/create/index.html","8d229651cad24fb884b3a9331061cd54"],["tags/database/index.html","7cf3d0e7d02e878ed24518648aed678c"],["tags/df/index.html","5f91338ae3ef5fb58242f41e8c97f05c"],["tags/diff/index.html","611e833fc0504411c2ceaab66e40b135"],["tags/double-ampersand/index.html","e9dd6abf37a58d6bef595c272b92060a"],["tags/double-vertical-bar/index.html","683d2a219a9f5c411653b095a906c801"],["tags/driver/index.html","26ea128cfc6e1ab46d54d3a197063072"],["tags/du/index.html","3cee337cbca938644c9a43f805564dab"],["tags/fast-forward/index.html","a51ebafec9ace53cadace77aa9cf872f"],["tags/ff/index.html","d43b4c0b0c1147e1e28975e9e2f851d1"],["tags/font-size/index.html","2c52b4795a83e64d5052950ddf248026"],["tags/font/index.html","46b6db57b16716e97cb0a0c555a74f58"],["tags/free/index.html","5be55ba9e5e565911d4b3355107b9bb5"],["tags/git-branch/index.html","796e7be96e08308a3410d5ea62fef832"],["tags/git-index/index.html","eb03c1196a0062b1ebcc9714de05e965"],["tags/git-merge/index.html","e89bb90b0b56a9421823f80524d46a68"],["tags/git-pull/index.html","7e67fdbd3fd42497b8a421d4a321a064"],["tags/git-reflog/index.html","79b80900c72d62c91580123302ba7e04"],["tags/git-reset/index.html","ecf46181024aafd988682630987ad28d"],["tags/git-rev-parse/index.html","c19a318a0f9c6769e6316e869a0eee16"],["tags/git-revert/index.html","319d9c9dd53a42625c90e815662e8f21"],["tags/git-tag/index.html","6149cfdd42e8637a0891f026c58ea217"],["tags/i-e/index.html","4f778ce1e45fb9576d2d330008bd54b1"],["tags/iOS/index.html","60ab3d0b238de6615c42006ff0bf7f4d"],["tags/index.html","6fff760b5ce6deb1c951e7a7b6a3c1f5"],["tags/inode/index.html","429219c737f789644fefe5f68895fc23"],["tags/jps/index.html","ae68c5689a8d1c7604d0ecda349049d8"],["tags/kwargs/index.html","93f720ebb9b7a04bb8aec2afea5a4f5e"],["tags/linux/index.html","1a72b3ae29dc8f4383c6f1e98044b7c7"],["tags/mac/index.html","b39c111c2e89efa45a4c05b3f30f1d97"],["tags/make/index.html","c85a2427a050dbd982750af868ac56cc"],["tags/maven/index.html","bacea33812fd0df1fd2adb6705e6778c"],["tags/modify/index.html","5d1714ce50d34864b9205c9d0538dd7f"],["tags/module/index.html","5a5209d81a919a8d6f2874df0ca09eaf"],["tags/nexus/index.html","9a6d78ca9c8d80c35fa89a215f5587c1"],["tags/no-ff/index.html","6c123bfc2c48c1481d8d78c5dc254341"],["tags/package/index.html","9c6580dff257ece2e1153bd337083fa4"],["tags/rewrite/index.html","0a88b3d8fe30a871d097b9a5a52e8081"],["tags/rm/index.html","af7d3d0df7de074421c559c52bd1bfea"],["tags/schema/index.html","164579dbfffa67c2a9e58a3eab0e77c4"],["tags/semicolon/index.html","3cb8fef76125c2cc3317d4b9405af490"],["tags/shell/index.html","27e9847c75a609a3c43f5f0d6f65c7a5"],["tags/synchronized/index.html","84497d288cdff318167270b3eaf3004d"],["tags/this/index.html","3007aa6f0e9b7346e473c818c35c9ef7"],["tags/tomcat/index.html","997eb67609844023d75d0abc3a202bda"],["tags/top/index.html","194d8604edbfc27de6e0a068f07198c3"],["tags/true-merge/index.html","85f5f3d5e8697f0280616bbf5a0637f8"],["tags/url/index.html","a2b7d88936d087f61f363d3a8523c6e3"],["tags/vim/index.html","9456b5f0a638327051cbe1352254f231"],["tags/windows/index.html","6b99c60a6c756d5b119fa839546770f3"],["tags/一棵开花的树/index.html","efae384516b09113efec33a38c0428a6"],["tags/主题/index.html","d68d6725917710a46edf53cf4c208c87"],["tags/二叉树/index.html","3f43084fbb108f12f66fdac51a84a4a2"],["tags/介绍/index.html","a3ae30d7a2d6bb2a1be40f31bc343a80"],["tags/代理/index.html","b737654228a053e014eff444d07eabd6"],["tags/以太坊/index.html","e8d2b3f7c36a4bfb1b03ce5b1bfdb649"],["tags/依赖包/index.html","05607b56fae48458faf99c8da914b004"],["tags/修改/index.html","53ad015474ab7cc349cffc66a6c60617"],["tags/值传递/index.html","30dc7ec196018f7e51a5a79130ca48e0"],["tags/冲突/index.html","789ef53cab6c20dca7d50557da1810ef"],["tags/分支/index.html","6da7a7ba8f112ce6a24f32b6d96bcfa5"],["tags/创建/index.html","9e12a64a8e23b043eb293d12c5a19f6f"],["tags/创建数据库/index.html","0f407f6e1c41c1165d42e41cf29320d8"],["tags/区块链/index.html","df1584739f18c407d742bee42dd639da"],["tags/升级/index.html","f18142cb19d287d6ceb26237bcfcc9f8"],["tags/参数/index.html","8fd7e3c9ac3b5bfb7ad581019b5dcabc"],["tags/委托/index.html","5a2ffca9beeff73ad5159a92d134bd9a"],["tags/存储/index.html","02592247788dc679c83bd4aa81ffded1"],["tags/存在/index.html","51bac6097ebfc8d30991b8d67691e213"],["tags/学习笔记/index.html","de04684e4b2f52897ad85bc7073759ce"],["tags/实例/index.html","ece57dda0f276918126302ff8463f719"],["tags/容器/index.html","30053b85421c3aca424568c95cdb9284"],["tags/工作流/index.html","b46d8701b9091c65bdd52acad564de8e"],["tags/工具/index.html","b57025647afd6aac26b42a5d219fb41d"],["tags/席慕蓉/index.html","0882816a5a41719e5e4f68ddac84efc7"],["tags/异步编程/index.html","966cffe3e4b528cdb5e97dbdee9cf100"],["tags/微信/index.html","2aec405951e90775595a9890d71a0eea"],["tags/插入/index.html","c05665947ccffe35987002e58cb3011a"],["tags/数据存储/index.html","46b06f666942cf30fd6c51f7213f3b6a"],["tags/数据库/index.html","5d26792bed795a7a3008789d3ed6abb6"],["tags/数据集合/index.html","f2933c897dd40e366fc67e59eb614e99"],["tags/数组/index.html","548126b4fb784bf037bcdfb1900ca0e1"],["tags/文档/index.html","e498b153ea0154288401d7cfb0028146"],["tags/文档流/index.html","389557d821007de0c40fde7157d5a072"],["tags/智能合约/index.html","923b73a3f0920d07a19965c2b301ca95"],["tags/标签/index.html","8c842a67796e5ead46dc845422a0eee5"],["tags/模板语法/index.html","8035ee2b1065494eb4d1e8c8c299c956"],["tags/比特币/index.html","728e498922455e61a6ea08497b3fb10c"],["tags/波浪字符/index.html","fa5d402264b3bafdc899e8e002d8a899"],["tags/注解/index.html","505fadd23f9fc75569781f89cf48cf25"],["tags/用法/index.html","be00d42dae643f8a2ee6cc0716ea7a4d"],["tags/穿透/index.html","1e24ff3eedf86f1b750e89aff770ed8f"],["tags/端口占用/index.html","c584eec21f4e19f4c3531a9b314cbded"],["tags/笔记/index.html","901866640b7a99a4ffa8d3d5bb636886"],["tags/符号/index.html","e70603f885f703d9c20542fb6b15be3f"],["tags/红黑树/index.html","aea1bdf38b46c66d2202e2be146d36ac"],["tags/组件基础/index.html","e86a5e26eecd26322d88670f9b35b567"],["tags/绑定/index.html","5c0893126d304a55f3e8ddb2b8f2e77e"],["tags/编程/index.html","0022e86f9ae85ab82c18651373222330"],["tags/职责链模式/index.html","7251eb77511864a3117837cdda2cc03f"],["tags/聚合/index.html","091ac3a01b6edac7fc63562b6b548ed1"],["tags/聚集索引/index.html","798a6cdf0431c5f6e099325a83a31981"],["tags/自定义指令/index.html","6a5ce951df685a36f81ed30b6b95a047"],["tags/计算属性/index.html","c7b7af456f457280ded1a29ad4eba289"],["tags/设计模式/index.html","6531e702a1ff1e7ab8afa48cc2354534"],["tags/进程/index.html","5a4ddbccc75eba7249a4024347e05842"],["tags/远程仓库地址/index.html","c8dda807a2b84527c31cac1fe7db6780"],["tags/逻辑操作符/index.html","227479790c61d6235751348ed89fcca1"],["tags/部署/index.html","0a62eafe35a087b0f6a05b7141ad1991"],["tags/难度/index.html","681b3a6f50e2434235dfcf824854cbd9"],["tags/集合/index.html","722c95bcee2c4b87ca5160e787881851"],["thinking_in_programmer_life/full-stack-programmer.html","a9a08224cc8e5856ac7f8f88b659c951"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","e4ee18b02496ce60d2737ed081f8c97a"]];
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







