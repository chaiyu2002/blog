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

var precacheConfig = [["English/ie-note.html","9299c032904fe1790e18ed7e1a90bf3e"],["Kafka/kafka-introduction-note.html","f6f83a9fc7c7b91212fdc932acf351ce"],["Kafka/kafka-storage-principle.html","9c22c1e4914a9f459f97ed692056ca05"],["about/index.html","49f481d0e95fd68eafa189025b8f7953"],["archives/2018/06/index.html","9f4cbe73e51f9a983fd8ba1fadc2ca8d"],["archives/2018/07/index.html","12f324b8a945dfef8c359947c9334268"],["archives/2018/08/index.html","c212ad24a21a51536b6186bd43d5763d"],["archives/2018/09/index.html","3d7423f3852133002efdc372638de5bd"],["archives/2018/10/index.html","c7588f6240a8b9d968509f2fa5d0b60b"],["archives/2018/11/index.html","ccd2e24b56655dbbd55729a399b16b58"],["archives/2018/12/index.html","f64fa072f09093a7745ad21fc1ca4d3d"],["archives/2018/index.html","fa5c26905038fcc766d6a37f1eb057ce"],["archives/2018/page/2/index.html","704410cd950a502898dcf72c0c13edaa"],["archives/2019/01/index.html","7eaf496cf3ca27988de12c11b8a1774a"],["archives/2019/02/index.html","7f72d8f9cb28961699cdd096623aca4f"],["archives/2019/04/index.html","ab28cf6e5b0c133c0ebf414ad919b75a"],["archives/2019/05/index.html","5e1c5c1e89e78728a4a3411817436415"],["archives/2019/06/index.html","4a63cb6b104addc68208898c81c56e0f"],["archives/2019/07/index.html","25d7fbd175ca04d7240f51b072af8a7d"],["archives/2019/08/index.html","50c66ca31f9c5296b27756e2209b78ea"],["archives/2019/09/index.html","3d3f74dfd4936e97fb057a351feeadc5"],["archives/2019/10/index.html","63e086085de21d3db334ca55d10ff36a"],["archives/2019/11/index.html","2ea4d822bfb1daf99663445bb5b479c5"],["archives/2019/12/index.html","f45b5ce4e80a3e40a86d1fc910419651"],["archives/2019/index.html","5e9aaa15ed793dd3345e54221e6cb1e7"],["archives/2020/01/index.html","429793120c044ec00b745c227d32e007"],["archives/2020/02/index.html","ab270f90f2499cdb533d691c6b7b171e"],["archives/2020/03/index.html","df29bc8fcf6272a73689d32a6903a9d7"],["archives/2020/04/index.html","90a9654ac78a5146cc92812247d6b0e4"],["archives/2020/index.html","e2b619a8ce08a7cafa282834aa92f406"],["archives/index.html","e9d45c5a5f07624bc6b450cf1d136e54"],["archives/page/2/index.html","12b54d7a17e6eb364e4b1b8dbef26800"],["archives/page/3/index.html","4268b580e7880c5ac42f0a6caa3cb330"],["atom/index.html","41040b9b0f4522a0b892f69a587a7a02"],["blockchain/base64-base58.html","637bbe5ddee3720b8b86e81490e32363"],["blockchain/bitcoin-data-storage.html","72ef9cd293f75a32b7b870fdb714f98a"],["blockchain/bitcoin-difficulty.html","66b74f10c738c222e1f8f178805e6ca5"],["blockchain/block-chain-ethereum-contract-program.html","db443c8bda39f6d8689c647e126a674c"],["blockchain/ethereum-programming-introduction.html","de3656edf81173524a1181fde1063993"],["blockchain/ethereum-rationale-introduction.html","b28c36d302c263a605e3089258588333"],["books/index.html","24e028822d29e0d1be5d7b1858923ff0"],["categories/Blockchain/index.html","2e19a664f72276658f37745afe0df9b0"],["categories/Blockchain/以太坊/index.html","635cfe0e2ecab18939c05b0a3f5bbec8"],["categories/Blockchain/以太坊/智能合约/index.html","5b1883f734ffae67a66e6a863e0c51aa"],["categories/CSS/index.html","9e025cafab129b3dd5de4647c7f5d475"],["categories/Design-Pattern/index.html","211d67e4ecd49199cc6c516eb278b38b"],["categories/ES/index.html","91f1d626138602621ebf8b91ad458bea"],["categories/English/index.html","1920aa1f2ceba2800362442cde5e3e18"],["categories/Git/index.html","586e6433d303d5b9cd7f6ce6acca5f9a"],["categories/Java/index.html","87f7278dcb0ae332d2f130f13ab8f688"],["categories/JavaScript/NPM/index.html","291fd9f98c72d9de8bb637935b3bb6c6"],["categories/JavaScript/Vue/index.html","958d4232c98395d9cf6908ce3e7beebe"],["categories/JavaScript/index.html","5743a78e5a1e4df7b6f189e3c38be2c9"],["categories/Kafka/index.html","fbfcd5f4bb420278c3cdcb8412ecbdea"],["categories/Linux/Shell/index.html","40852172f6c01aab6180935a2a337589"],["categories/Linux/Ubuntu/index.html","da9bbe42b0739b66b859c5045c3d5829"],["categories/Linux/index.html","67d7d1b93a440dca5f87bc8f76d26e16"],["categories/MongoDB/index.html","5c6e994a765e043db07dcf2fdf670ab9"],["categories/MySQL/index.html","b04c2ec9f12530b446524fd0549ee768"],["categories/Python/index.html","830ad9ad33e24b40165894cf2495982b"],["categories/SOA/index.html","81472f9569183b27a88026dc00f45a7a"],["categories/iOS/index.html","cb7b93b2caad3e3b1115c951744f7fd0"],["categories/index.html","69532829678a8617262e9c882acb5b7b"],["categories/微信/index.html","46c17ad9b6493de77d26831755cd23f9"],["categories/数据结构/index.html","3c4d34702743a1c79ea5ae49f2a78c91"],["categories/杂记/index.html","89c69a194a50f171f4cb7e23fb7ad2f5"],["categories/程序人生/index.html","3fd7877eb5f0735118fc9a16a9f2af0c"],["categories/计划/index.html","f0639ec5dfd2f183a5a65e1dd79e91af"],["css/css-font-note.html","a695983ea10663d73b9f3375fa1d9248"],["css/css-normal-flow.html","dff8791ac42f2944be22b3b3cae22f5a"],["css/css-sass-introduction.html","56acbfa12d55fb80c57c0c413c156a59"],["css/main.css","fe47e5acf4e4083cd55fffdd444e7b01"],["data-structure/B-tree-note-1.html","88dd1a1266ca8418902d996dec0f9657"],["data-structure/Binary-tree-note.html","db9d1c633ec01f8c9d5dc09c0608c5c4"],["design-pattern/chain-of-responsibility.html","c486ee3ff9260f34c32e315f7840c87f"],["design-pattern/delegate-and-proxy.html","178cfb4e4283969821039a8d324dd14c"],["drafts/configure-multiple-vue-project-with-nginx.html","a1fc6a56f1e9543cf9dc72975cb86096"],["drafts/iframe.html","69ccd3983a42df232b6bf363ac3ffc03"],["drafts/record-re-install-mac-os-10-12-6.html","a5e0dd70f93653c66da997e0aafaa5c1"],["es/restudy-es-note.html","677143ea7a5bf768e078fe743b441076"],["essay/note-ximurong-tree.html","078cfb7ed143801debc9305e7c2216b2"],["git/git-DETACHED-HEAD.html","eb33f3c1febd328962d099b1f348121c"],["git/git-branch.html","fa419423bfaf8cd8f333b6c34e38bfec"],["git/git-change-server-password.html","fb2e6c6f4f8e663fc1248d8c7aa67fe4"],["git/git-checkout-1.html","f03da337b3c006b144c5012c77988c79"],["git/git-checkout-2.html","374784b5141e282339a79da0fdc9f954"],["git/git-diff-m-symbol.html","822f2fd1d5edbada5d63241e483130f4"],["git/git-git-flow.html","58552bdbd9c9e98a68bdef4f526357b3"],["git/git-git-merge-ff-no-ff.html","8f75435437e340c43b31688486d0b16a"],["git/git-git-merge-true-merge.html","ef357197e3e86eadd09b96cda3653699"],["git/git-gitlab-flow.html","2905fb4c3b46d7aa1c8e435fa5c0b8f2"],["git/git-index.html","3b82cf48e1dac60ed4c6027294323204"],["git/git-merge-choose-one-side-code.html","5385ab27083cd0de6704c6c179635f80"],["git/git-merge-exist-conflict.html","b14951a01f7289461c9a5c5aa3e34fa5"],["git/git-merge-note.html","4c14f6d7ac0bfdeb1c7dffa5b7c04f3b"],["git/git-pull-1.html","1c244026ffc366e83e10567b705d7a91"],["git/git-reflog.html","5801e42bc9058877ba6a562b29f4c9ed"],["git/git-remote-set-url.html","85dd3591cd34e172200d4836ed92f6f4"],["git/git-reset.html","eead72223f5fd64dfacfc8b4bd069562"],["git/git-rev-parse.html","4017b4061a1fa2e8b04eea8bae961b26"],["git/git-revert.html","a7d2c1bc65a92f491822e02db4f2b03e"],["git/git-tag.html","854c7d6ae06d927a13675727e2dd163d"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","89f899f4156c76cb26328ce9f75daabd"],["ios/ios-oc-kvc-1.html","b09277acf8207c0b5d8f14b463eccef0"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","b5443581cc51c2d438b0bccb47ca8b00"],["ios/ios-themes.html","cf3aa1bcf60f4f7a267947d54e925287"],["java/java-annotation-note.html","99f850bd107a0b70394438d11fe34e0d"],["java/java-annotation-request-response.html","7958462dd481954c80fc81378a3348b7"],["java/java-array-and-container-note.html","6ddf7cf8f54ec95fc392ce63ec6fda48"],["java/java-deploy-resource-folder.html","0818390dafe9d568c46f1490e29d3adb"],["java/java-jps-note.html","59e2ff666f03a407a134cdb206ac0b31"],["java/java-maven-nexus-note.html","0a119f07f278e27df2f776d5135e25a0"],["java/java-maven-pom-note.html","116bfb550eacdbefdb04aedabad7cbf9"],["java/java-pojo-bean-note.html","75d7bf9ef7ab2f358c64cf3ef4c27130"],["java/java-shiro-note.html","3fec8639a04508c0a8d3339a8a83a604"],["java/java-shiro-springmvc-integration.html","d5d8703d571ca0777cffa300f07179b9"],["java/java-spring-autowired.html","980972f9195b06a62f51e183fc41d4be"],["java/java-spring-configuration-bean.html","17de24642346b8446675ca9fc9b56d08"],["java/java-spring-restcontroller-note.html","af65af074adecdea9cee15a5931271fe"],["java/java-springmvc-X-Frame-Options.html","75973def9b93936e64bcb83f10afc8e0"],["java/java-synchronized-note.html","b9625e413cc2b041a9acc4b27d534584"],["java/java-value-pass.html","f25f46c9d893aff5c102638aca77a7e7"],["java/java-vo-dto-pojo.html","e8423107cb2eed4d1dea36cbddb1ea8b"],["java/mybatis-mapper-locations.html","418fdd43597c666db128bb9bbe30471e"],["java/url-rewrite.html","609af44f52c65af116aef36db514425e"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","e83701ca0b6391e11234b934a028f275"],["js/js-npm-symbol-caret.html","185951e72a32f03d4dbfc0cfd389c17d"],["js/js-npm-symbol-tilde.html","fe0e8832f6c548e68c70aaba8ed38a9b"],["js/js-this.html","56c0e2b77479a88af4a5265a6a9e2d72"],["js/js-vue-note-components.html","ae929bd6ba1e68c23d5a41e10d4869e1"],["js/js-vue-note-computed.html","dbf18853dbea24921a306c07fa64e8fb"],["js/js-vue-note-css-style-binding.html","980d5280eb4d3d77fba4913399b694ef"],["js/js-vue-note-directive.html","236411faf63ad4d1f56e32ec55c6e7f5"],["js/js-vue-note-instance.html","ed4f9a4d9e4e3af1575fc0a8e7f9b5d4"],["js/js-vue-note-introduction.html","b88e7580844976b940ae8fa089551b20"],["js/js-vue-note-syntax.html","144812905373f41a4abe1ecd5863ee5c"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","c8c1a4a88ef88b49f596d66e2fab5bb6"],["linux/linux-top-buffer-cache.html","380becbcfc803a6ab455bc98c31e3dbe"],["linux/mac-find-port-occupy-process.html","4c95e29e5fccd759f7bc3594c266a2db"],["linux/make-vs-cmake.html","d69b7f5792325736be1cdc80ea61c408"],["linux/shell-command-awk.html","e2830743d05c70bc0f8644643b77e9a1"],["linux/shell-command-df.html","d4333ef34652ddfa8638dd884837eec0"],["linux/shell-command-du.html","3bb655fe91c33b89cbc95d91de734374"],["linux/shell-command-netstat.html","24545f5160145aa234fc8814a3522f20"],["linux/shell-command-sed.html","766017fce628585e47d8b31b685f6235"],["linux/shell-command-tar.html","09e20043d572180f63dbf430b9505f86"],["linux/shell-command-top.html","f7e66f7392ec1ff80c438be866693ca3"],["linux/shell-command-touch.html","cf2f56c61ac9834f19165ea64eee8291"],["linux/shell-command-which.html","f8ed18325d9d4c3abf9cfcb5bcfd21b6"],["linux/shell-difference-semicolon-double ampersand.html","f24939af522f3583dabb4be993052ef5"],["linux/ubuntu-user-add-delete.html","58145ac8fa8d52c620e94739519c6ac4"],["linux/vim-copy-note.html","d8c6a9cedd5fb516b981deaba6529357"],["mongodb/mongodb-collection-aggregation-introduction.html","92d7fce87d4dbfc52251ca29e3cada36"],["mongodb/mongodb-collection-aggregation-note.html","ad1943a175dcc204285f47515e1f969a"],["mongodb/mongodb-collection-aggregation-stage-operator.html","065b874e5d38bcaface89f5e3b098064"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","e013dc38bbb23bdbca22cefea61fae8b"],["mongodb/mongodb-collection-create.html","74d662b68ee1edc51743539af2b8895b"],["mongodb/mongodb-collection-delete.html","d386e245ca814950934521d755e610b3"],["mongodb/mongodb-collection-find-1.html","e64d43a15e587ad837ae1b80eb5c551e"],["mongodb/mongodb-collection-find-projection-operator.html","dc3abf30070d9e166c985778e3f7d49f"],["mongodb/mongodb-collection-insert-1.html","6b2f7ef91ec960f53731a1c20209fe79"],["mongodb/mongodb-database-create.html","cdeeedd6d04d985afc430222a3a6b1ea"],["mongodb/mongodb-java-driver.html","6b2b9053d8c84e89f6f62caf439118c3"],["mongodb/mongodb-schema-design-note.html","027b0d751c11d017f014676854dd822e"],["mongodb/mongodb-study-note-1.html","d1ed5eb61e67dcd661bc06d3da99f9da"],["mongodb/mongodb-study-note-2.html","b3638cb8be8604968cd429590441d80b"],["mongodb/mongodb-study-note-3.html","da177c2bf8c20f670282d9f2c8bdc23e"],["mysql/B-tree-note-1.html","80e99071b4f007e4627e24c7c797be88"],["mysql/clustered-index-mysql.html","ddcd481a338965d824be1a8ea8272c8d"],["mysql/mysql-ddl-handy-book.html","b6757a09b05ec00d030ff0e280d1088e"],["mysql/mysql-ddl-note.html","670ea24637bb211a9da75702569e3d76"],["page/2/index.html","d23526f3116140cd35d33e9cdaf00fdb"],["page/3/index.html","56cfa1951e2d5487cc70c2f45c07708b"],["page/4/index.html","08fde563d14aefd0f677bc8cf66bc8b0"],["page/5/index.html","684b0f1b000fa8e8d5d441b4b6a8c3f0"],["page/6/index.html","2d646a940791a6dcb33ddcfbcbbead8d"],["photos/index.html","39d67556a30cc0e3877c5a0113f4ad02"],["python/python-args-kwargs.html","068fe1397d857723c79c3f8014740714"],["python/python-async-program.html","4cc7496f642675cf9b2f806315425f5b"],["python/python-package-module-note.html","d90413138e7eef9f56af84ee42657f42"],["python/python-package-module.html","35620fd4b4e22881ccc4211726d0e3a9"],["python/upgrade-python-under-ubuntu1604.html","fd91f22226dbf035da74baff37dcf28a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","22e16f1c411dcf001192208d591c7ba2"],["slides/index.html","f3c2db99e36f634562b71ce481a167e5"],["soa/microservice-article-note.html","15264babc7c88cb3333d621e47c1bcc1"],["tags/Autowired/index.html","46425f094e23029cfc5b6d14dee2d5e7"],["tags/B-树/index.html","a3068a64c49f45526973b1594d8a8d87"],["tags/Base48/index.html","24003d0f1a2becbf9cd88a3321d52d98"],["tags/Beans/index.html","5c82e19ef8705a47e76af593f0f78265"],["tags/CSS/index.html","63bab20dd28438a42b2d339fb7747f85"],["tags/DDL/index.html","7bb4a751bde206f2a493320ff4bcceb4"],["tags/DETACHED-HEAD/index.html","df17907245ba61f49fdb1268102e207f"],["tags/DTO/index.html","757420dce723f485901f41c20cf5beb8"],["tags/ES/index.html","245a1d29cabd6070d279b2e0527313a5"],["tags/English/index.html","cc1abf80465b0b99febd326e1ce30400"],["tags/Git-Flow/index.html","46382722da68f9f0e29029b6f0dc78f5"],["tags/Git/index.html","af13f72b4c682e5ab2b9e507e7b614ec"],["tags/JS/index.html","c97caa8cbcedcfe958c978adb1b2f225"],["tags/Java/index.html","28cc07d34cab1eb954ee0c10dcbeed0f"],["tags/JavaScript/index.html","da1202b51fed22037af32865ccb234ec"],["tags/KVC/index.html","de0106413e29b8233f01ee2b541c2e77"],["tags/Kafka/index.html","70ccb9127c9701d26f4c1c9b1965b169"],["tags/M/index.html","225b4149430405a5b67f7d3b6eddf322"],["tags/MongoDB/index.html","f5240ec6ee945226c259d112abfd02e3"],["tags/MySQL/index.html","bd9d242cc5537ab5d5c5898de7fd2b9a"],["tags/NAT/index.html","0163c97da61ac7cd126c9c5e25df9674"],["tags/NPM/index.html","0744b5258127765619a849ccc5b2f729"],["tags/OC/index.html","995191d866fef194bc943507884c0546"],["tags/POJO/index.html","4c83b3eb4afb4ab4bb3fe8359fe40753"],["tags/Python/index.html","ba61c4edc5ed1fe73240af0207360591"],["tags/ReactiveCocoa/index.html","6995cbd4397a709c3f9a6641472c2e73"],["tags/ReactiveObjC/index.html","447de0dcbe0c5de72f8c89c4941b1335"],["tags/Repository-not-found/index.html","b6700192c77be8425b05c7baeaca4e20"],["tags/RequestBody/index.html","ad8e81c7d8a923acaee0af303f3ac6a3"],["tags/ResponseBody/index.html","20609ee8e9e990cf7dd0ca0b2dfea448"],["tags/RestControlle/index.html","8fc5bd2bde14114e6147ce9be06b054a"],["tags/SASS/index.html","52a93e4aa01984dc22e65ba6b8bcc44e"],["tags/Shiro/index.html","798b44f3d1b6ed6c6b89b08cae77cf51"],["tags/Spring/index.html","79b601f36ea11779a5008acf392b431a"],["tags/SpringMVC/index.html","d4571578f184653905d177e2a2a5473b"],["tags/SprintMVC/index.html","dda81526016bf8edb219060bcdf53ba4"],["tags/Style/index.html","b6780c3aa8a8c071255b5ba2f99fb9fc"],["tags/Ubuntu16-04/index.html","9e60b4672a9add853523e54adc96423b"],["tags/VO/index.html","f3a77d42c8d6a2e8b991f339d2ba2142"],["tags/Vue/index.html","c8d6eb62f6c98010a543586913376231"],["tags/Workflow/index.html","d8964f3905c0222694bfe75374aacff0"],["tags/X-Frame-Options/index.html","9fe565c04f5ae05360e919298e4d7344"],["tags/aggregate/index.html","b88246203ef865730683157418b5ec3e"],["tags/alter/index.html","35cecffca633f606b2e2dac8cd0b6a38"],["tags/annotation/index.html","2bdd8c1cb58e3dfc133849e49af34142"],["tags/args/index.html","c6f68871e5d3501d7d82fec43f38f109"],["tags/buffer/index.html","f987b08a0422d74993992431a4322833"],["tags/cache/index.html","477cba5d35bd18a0ae99cb2ca5d90bb2"],["tags/change/index.html","43c50614c0d4c8f2ac0284c932ecdc0e"],["tags/checkout/index.html","aa6e501fc95d9166804bbb133184c3b8"],["tags/cmake/index.html","2ec62097a8de3bf99ef30432b40e6a02"],["tags/collection/index.html","fc2168fdb33cc57d7ff2d3538e50dcc9"],["tags/component/index.html","add81a6d7c0b1b363653cc7ca3fd651f"],["tags/computed/index.html","26b956ca1ca88d21b6ca7fc560f8cc76"],["tags/create/index.html","36dee7c5a73b19a1079ad3fda3fe064c"],["tags/database/index.html","b3858bec8da3a37e70e628a43cc6b5f7"],["tags/df/index.html","14154ad4adb2912dff436d00c85563f6"],["tags/diff/index.html","19a26db350472288003fed68d6a05082"],["tags/double-ampersand/index.html","381bba10182056903b63fb8bc048b3bf"],["tags/double-vertical-bar/index.html","af9fdc3618a858401f9b852ae5bf0693"],["tags/driver/index.html","b52922796b6944970336a63c03f287d8"],["tags/du/index.html","85211e2b252d39d09f05beda455b5c62"],["tags/fast-forward/index.html","19e8787fea474fa3e7b09c170334300f"],["tags/ff/index.html","95bf8e1c5312aea5c73c9974632683d1"],["tags/font-size/index.html","131e08191f607c12473c1692454e0b12"],["tags/font/index.html","6255461272a0708cc5b87283e6abdf0a"],["tags/free/index.html","db6b44c2a01deb6cd7516f7b6afc0e0a"],["tags/git-branch/index.html","ccc2f146cc74a401eb15bd03b8e59ab0"],["tags/git-index/index.html","df1eedcbd8cf8d93adfb377d4b90832e"],["tags/git-merge/index.html","a704f51c19dd7b6145270e95a2be1975"],["tags/git-pull/index.html","01690b64de8775288a35d8b0e0f5c93c"],["tags/git-reflog/index.html","77e4feecd3b2a7d55a91f7f844f340c2"],["tags/git-reset/index.html","382468072ef2b80ccc656b5ef024d032"],["tags/git-rev-parse/index.html","20b7ef83722157736c66b9ece75ce151"],["tags/git-revert/index.html","f67901e7f14bb26323c899a34de588bc"],["tags/git-tag/index.html","93629e7011729ed4dd6658b81b843be5"],["tags/i-e/index.html","7140088fff48f34e515c262d8dbf69c7"],["tags/iOS/index.html","ef210a13fd90bb0ed3ef44315f3f1421"],["tags/index.html","918776ae674b6d57666401c4fb1d2310"],["tags/inode/index.html","f794b9d07ce7f382d0c2c9cd24abfff3"],["tags/jps/index.html","b709304e183b452486b31033b7c2062a"],["tags/kwargs/index.html","41a055e2be5325fa618cad2fcce8ccac"],["tags/linux/index.html","bd05e5ded02b9b04d6595fb1f749a5dd"],["tags/mac/index.html","403dae59c3b61ce83d73b3bc01980de6"],["tags/make/index.html","a3f0da314bd1c062d62f9f436b74f889"],["tags/mapper-locations/index.html","3712bdd605143da0ccc5b49b0626a4a3"],["tags/maven/index.html","789ca5aed7790c0d93758bda3799d49a"],["tags/microservice/index.html","cbe6e66a45f798ddda2cba95989fd5b8"],["tags/modify/index.html","22b19db800aa7f34b8e87447d0720798"],["tags/module/index.html","5d8f28ae7d5e7cb730bc47b6a4cd1ef9"],["tags/nexus/index.html","524960fc228566f7c13fdfcaff4dbaa5"],["tags/no-ff/index.html","4aa7edea61a918008e997874a5503b2c"],["tags/package/index.html","16eb77e41c46d3021d8ccd3715dd0439"],["tags/pom/index.html","8e93b6c8b12e5603a62495b88903a3f7"],["tags/rewrite/index.html","c31006247b1bfc4d01000a1510cb93ec"],["tags/rm/index.html","2747c176f8eea392f2ffe8a8e41f09f5"],["tags/schema/index.html","8d8e3c1ec617580ca69772eba78dd9ab"],["tags/semicolon/index.html","edba3b0e42852a106c07f7ed0c1bf82b"],["tags/shell/index.html","bbe3a8c3a9f0c8dae11ec2e527fb0bab"],["tags/soa/index.html","6abdb3f3ac5af7720626d2cf75ffde84"],["tags/synchronized/index.html","39e12a100426100094b2787de426a295"],["tags/this/index.html","bd6f0f30672d45a9836b9df822f0f40b"],["tags/tomcat/index.html","d203f5fa73190216a97f3d98c7ade2af"],["tags/top/index.html","16ba67c9f517a5cfe1a9d9839c4c605c"],["tags/true-merge/index.html","b994d5ad2c41ad3ed566fe3ca70fc93b"],["tags/url/index.html","e961d9a0e2ada5916c4e8dba0aba08f6"],["tags/vim/index.html","ba3494bdbee53d01757a91cf2dd746ce"],["tags/windows/index.html","740b4b6e8ecfde30448ea981802d2a82"],["tags/一棵开花的树/index.html","4c3428b8cace934edf120e538ef54bbf"],["tags/主题/index.html","93d6657d2a60508e64463c0a966c1f04"],["tags/二叉树/index.html","16f8269e741420e70fc44581dd805ecb"],["tags/介绍/index.html","7921858a3037d7fa20119d71e989f1af"],["tags/代理/index.html","94c461900bb193be2db35a6414af8d71"],["tags/以太坊/index.html","0382b000c21858ef3ca7d7401df1c4be"],["tags/依赖包/index.html","601f1510ebc9cf911f9ec5e4480a8f75"],["tags/修改/index.html","8fea568b80aeb65256bd26b99ae38568"],["tags/值传递/index.html","e4b065c9ec073f2a5854780bbebf5398"],["tags/冲突/index.html","8232686120bcc6c72ae3944738b74b0b"],["tags/分支/index.html","5ab939df856b3160e82d719b3f78ceaa"],["tags/创建/index.html","23ab1f60aa11cb6a67910ef4b509390b"],["tags/创建数据库/index.html","6567465637f509a114e23d5d767d2ea7"],["tags/区块链/index.html","e44f7a97095fea546fc712e007522ea9"],["tags/升级/index.html","f240327f360ccb81bdf633e53272cd42"],["tags/参数/index.html","f15f9e11af07bf90a4d37165b2f63a4a"],["tags/委托/index.html","f86962f044a32bb9a85fe73b947f7570"],["tags/存储/index.html","f24908d405dd0dddeec85d4c1a0fe666"],["tags/存在/index.html","b63731bda98e54d7785825aab1592a2a"],["tags/学习笔记/index.html","7ea9ff8ea4f8dedf5dbfcaefac419ba7"],["tags/实例/index.html","36053cdf482af0d64fc308a9df8d5c55"],["tags/容器/index.html","be7a38b1a23be37b710c3a31ff8924a6"],["tags/工作流/index.html","5998367b40299b68e69f3d9364dd0fd7"],["tags/工具/index.html","c12f8e65c83492916f1df6f9a3a0c69c"],["tags/席慕蓉/index.html","8cdd7837c5c059f79262fef7c1cfdf79"],["tags/异步编程/index.html","2ffebfe327f43324851c8dabedf96dc0"],["tags/微信/index.html","90dfe4bb30e7bf0584100f283425c055"],["tags/插入/index.html","e221af4c372b9667343555b8756e152d"],["tags/数据存储/index.html","a77a384f39802c2c03a17d6d11859590"],["tags/数据库/index.html","76546f50c23e544d3bb960a8ad8a4b9f"],["tags/数据集合/index.html","2481fca1ca85b4ae633decaed79d4ff8"],["tags/数组/index.html","67bd6ed0b2c1b8990afe83352e0f1f06"],["tags/文档/index.html","9c325a17ba8f8e1f8d9a32982e991031"],["tags/文档流/index.html","258cda6a20dbaada9ce5e3d34949521c"],["tags/智能合约/index.html","bb8d0a1a0d55236f994a32c00d418184"],["tags/标签/index.html","8b6a8bfbc258342e83b07e2fe2635720"],["tags/模板语法/index.html","124d47e8f5631ea8770e5c3249ef94bc"],["tags/比特币/index.html","5c296523ebcf7844f70c16de166fe30c"],["tags/波浪字符/index.html","39129d6cf5f2271f2e44d39caf09ecdf"],["tags/注解/index.html","f57bae431e36ea096735ee318cb4ad67"],["tags/用法/index.html","773395583b94c15ed814bc3f160e76db"],["tags/穿透/index.html","8b15fea1606d8ff91bec6af8e4af1846"],["tags/端口占用/index.html","acd9aa169801ede78a52fee8b5f8cff4"],["tags/笔记/index.html","b44cae4540ecfc9ff8514d74564d401d"],["tags/符号/index.html","6abf69344d0936d9c0b46f2f57bebd22"],["tags/红黑树/index.html","6b3c78c98c7e8b785ede9de545317952"],["tags/组件基础/index.html","89666ef50aa3f3c65ec6e3aa976584f3"],["tags/绑定/index.html","7bfa26c2e62c757b4a9f0540447b4449"],["tags/编程/index.html","3421859ed8ad50557a2cd51f4e76c9fe"],["tags/职责链模式/index.html","870b59f1c8cd298ed09eb05d4d5d8629"],["tags/聚合/index.html","f886f1424014ef09d61fcd84c195922e"],["tags/聚集索引/index.html","1d1354a19adb721c32a9311f4ec19fd7"],["tags/自定义指令/index.html","fc6de814c6d1abd810ea6c4bd36eaa5a"],["tags/计算属性/index.html","be262f87cdd0d37d42597fc68904e100"],["tags/设计模式/index.html","d729ae2faf4abb1ca598f9458379981b"],["tags/进程/index.html","5bdc949334d65c4175f888a8526d0288"],["tags/远程仓库地址/index.html","712b741fb46478cb9b73f6e42c7e53ee"],["tags/逻辑操作符/index.html","8b4068c26e4d201f485cce03142c9fb4"],["tags/部署/index.html","589c2f44b7976977c04ee83b1cd15619"],["tags/难度/index.html","ce24dabc6e3c230e4c3ec792601ab43a"],["tags/集合/index.html","b553734b2d1effc2514ea51f9efa5859"],["thinking_in_programmer_life/full-stack-programmer.html","71926575d88a495cbb5b0d2b304b9c1d"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","5376d0da6700286ea52b2ca226be7956"]];
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







