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

var precacheConfig = [["English/ie-note.html","75ff2e7f0df76515f6410746c3f0c0ae"],["Kafka/kafka-introduction-note.html","592e7157563c7cbbb048cee314858d7d"],["Kafka/kafka-storage-principle.html","8a936acf6429a461b9b28faa3fb72a0b"],["about/index.html","b7a85336d5e08b351bd549f931390868"],["archives/2018/06/index.html","c97891a4f2f3eebd983e4f35420c5efe"],["archives/2018/07/index.html","bf9c70418d351cebb4a6f1305adc1c46"],["archives/2018/08/index.html","c21dc188a46920ab6c680936029b41ab"],["archives/2018/09/index.html","fc155e8d705ed49f6cf771e275cee58c"],["archives/2018/10/index.html","0a65d4cb8b64fa0bc29755518f2147bb"],["archives/2018/11/index.html","48db4827183f80639e2e01095ffcf044"],["archives/2018/12/index.html","f6b9b85aa741d9c7513e829d3ef87bea"],["archives/2018/index.html","a061207dfa17012279c654cf1433a382"],["archives/2018/page/2/index.html","dc9c659d80898223bffe2d2581163f95"],["archives/2019/01/index.html","3672e1467eee62d2f89512d2e8bbcb4b"],["archives/2019/02/index.html","4b0e40641d1c1f313e29903a8881870f"],["archives/2019/04/index.html","d10b82d5e08637674b3a078d6941e00a"],["archives/2019/05/index.html","066de0f873df4426588d2168391538a2"],["archives/2019/06/index.html","51bea244315d7f5aa6956dcd95eb5c02"],["archives/2019/07/index.html","7fdd810d5854528892c0be79dfda2286"],["archives/2019/08/index.html","414fa2fa2bcf65fb5eb7d9dc54b9193a"],["archives/2019/09/index.html","4dde8c801c3fdbf19b675259ad65cebc"],["archives/2019/10/index.html","bcf885aad713f1f5f267a9da9875fe32"],["archives/2019/11/index.html","2fada4949e84961b8f8b96dd17403159"],["archives/2019/12/index.html","dddfad88495910dc1287f9c98306d94e"],["archives/2019/index.html","83235cba96879e3b1b781abf2a65429b"],["archives/2020/01/index.html","b12fb62b4cc183f8d08a7782fcb4455b"],["archives/2020/02/index.html","d16aa63051a1ba8152275309a9e8bcc4"],["archives/2020/03/index.html","85d117b63c928a38088c5a17b987d634"],["archives/2020/index.html","1447b9250d2d6c6a81a8fdbb35611a6d"],["archives/index.html","2803ef4b790d41e367d646b7ec8135b3"],["archives/page/2/index.html","7012799d80d337950e783629119b7c5a"],["archives/page/3/index.html","61a4e0256c5ac7a9e85e180dbded2400"],["atom/index.html","98fbba8602a28971cf97372ec3c934ad"],["blockchain/base64-base58.html","b2ba69e582e7dbfbbc7e42d4c2076aa5"],["blockchain/bitcoin-data-storage.html","610996b134683de787ac344d210759c0"],["blockchain/bitcoin-difficulty.html","76a939a5752ac918a5f5d1e9a6443334"],["blockchain/block-chain-ethereum-contract-program.html","7ff6209df7c2e2e8738e16d147159250"],["blockchain/ethereum-programming-introduction.html","e1a07015399dd8d86f114ed72f0d6164"],["blockchain/ethereum-rationale-introduction.html","008229887ccfe61c55cd4f4c2219e188"],["books/index.html","e38bfdb5424f73ca22081a1f32643263"],["categories/Blockchain/index.html","773da03ebd84de077ba8bf6668cca9a5"],["categories/Blockchain/以太坊/index.html","4f74dba83cda6bd096083be8c171c4ad"],["categories/Blockchain/以太坊/智能合约/index.html","5a2ec2d60bc225f8e48356a909398939"],["categories/CSS/index.html","6fa6d86bd68d31ac92056b5b945d3294"],["categories/Design-Pattern/index.html","521cd99de25c8cc574fa1075062c47df"],["categories/ES/index.html","2dab671041bd5dd28111e8e3d064708f"],["categories/English/index.html","4ea2fc71e842f28ebddc141cee0c1591"],["categories/Git/index.html","732537f4b9deb9fd0345a4f56daa8fae"],["categories/Java/index.html","9a7427b08c7bdccb8580d98cff082c3b"],["categories/JavaScript/NPM/index.html","16a93d4909748dce8c0cc965069167d5"],["categories/JavaScript/Vue/index.html","3cd61f2672c4c3a31cee49d89ff9becb"],["categories/JavaScript/index.html","f9c4f83cf2b61e8dd5e6217b96191e5f"],["categories/Kafka/index.html","1d75ab5c436f59954da5f58a36b4a319"],["categories/Linux/Shell/index.html","25b6040aa877ead65b7f6186d416340e"],["categories/Linux/Ubuntu/index.html","4177c0536e6048e4d5412380ac192d01"],["categories/Linux/index.html","13ba876a9940ce6d9d81a0fb419daccd"],["categories/MongoDB/index.html","e82ac00a882a593c2d856edd426e1f71"],["categories/MySQL/index.html","a6d7c35e3ab5435977eaa51dcdd2893c"],["categories/Python/index.html","007ecd87836025d2936543e9f5cd0d64"],["categories/SOA/index.html","c14351b3b39d616bb183f9506f1dc8c9"],["categories/iOS/index.html","03fb0c36531c333b1ca57526c9352a76"],["categories/index.html","e5387dd161e55708fe84c5547a40f3b0"],["categories/微信/index.html","97b613b21c57d66856d21ed95d9bd76f"],["categories/数据结构/index.html","5824432e0924fb3cf0db9112e4344e63"],["categories/杂记/index.html","b41123309c12bfcdc6db076217d33979"],["categories/程序人生/index.html","dfba07d7c45c23d4fb73a4b3406b5dea"],["categories/计划/index.html","bf8abb047728b0c80d3995ae1507a3d3"],["css/css-font-note.html","1bdaaa69e2837b8049e38a9ec7dcbe7b"],["css/css-normal-flow.html","9db5fbfc600c5b07e306d7f032b9fb3c"],["css/css-sass-introduction.html","4ec39f383e093cf34af04f92faf2e33d"],["css/main.css","429dc4be51f8e6e53840686f28959a27"],["data-structure/B-tree-note-1.html","4e0d92a2f9fac63fcce8c28c8c1e0630"],["data-structure/Binary-tree-note.html","18a9a9b749faef02d87668f38fb382dd"],["design-pattern/chain-of-responsibility.html","7fd86e2b53b6649bbc4398bf7fb1aba6"],["design-pattern/delegate-and-proxy.html","abb70bb2239118eec854597c3a5daf4b"],["drafts/configure-multiple-vue-project-with-nginx.html","25301f44057a0051cab4b72c4d38c620"],["drafts/iframe.html","14d02114318ec5f39e2fca188967dbff"],["drafts/record-re-install-mac-os-10-12-6.html","4184363505303bf1a205d098ebc90cd2"],["es/restudy-es-note.html","94796c848f846f75ed4c1cd1551279ad"],["essay/note-ximurong-tree.html","7deedf7581b263259765b53794e07dda"],["git/git-DETACHED-HEAD.html","3813848dbe96f88428c804fd957e3987"],["git/git-branch.html","5a20e6624212c59722868fbe6b1f6672"],["git/git-change-server-password.html","661fd2542e297619707928b2baef07be"],["git/git-checkout-1.html","f1955a4c3f6ff657a89eec802feb3b2c"],["git/git-checkout-2.html","2e51a8448af458474c6237358f1b6849"],["git/git-diff-m-symbol.html","f4aa35019b2ccb554103e3d4b61b6cfb"],["git/git-git-flow.html","1c688ace03b7c81237370531adccf19e"],["git/git-git-merge-ff-no-ff.html","9a5500fd8be18fe8552841c62180589d"],["git/git-git-merge-true-merge.html","70a66f7d38ce3b702ab42bf04e35cc47"],["git/git-gitlab-flow.html","49fe86a4e6cb55f40e97d945776c2c26"],["git/git-index.html","6ddc2388858014e3b25a0a1efd578f3b"],["git/git-merge-choose-one-side-code.html","0b88447377ee0124c90e0fbab7c85715"],["git/git-merge-exist-conflict.html","63404c0cca79e527def2e90d666812f8"],["git/git-merge-note.html","3d31974bf03209941a2b3655c0edefad"],["git/git-pull-1.html","4334b916a4453492e906a202bd21001f"],["git/git-reflog.html","dd0038a01f0d036da9effe0b5fd1863a"],["git/git-remote-set-url.html","c48e52b3d656b112b07890f2a49ea407"],["git/git-reset.html","b10322fda3a896268bab468b9c0374da"],["git/git-rev-parse.html","68aa1d14b38387e37efd50de9547e9d6"],["git/git-revert.html","12f75d4e2af1a20979945bc34da3b3c4"],["git/git-tag.html","d972f88da8915b6a654cc9c6e63ffc44"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","fa55e836dc43112ef1f768e60f8af34a"],["ios/ios-oc-kvc-1.html","89be93041d5b30c150669e93dbab8911"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","f7a904a9b1deda0f50a0b0da82e9f1e3"],["ios/ios-themes.html","92766a73b0936633a96819b2f5507c39"],["java/java-annotation-note.html","894baf8d24ee47a1eed6bc5875aaa7f7"],["java/java-annotation-request-response.html","1c6a7001bdc4349d4fcc89ff86abdb0a"],["java/java-array-and-container-note.html","1863c722d9931c43ccec719067b95ff0"],["java/java-deploy-resource-folder.html","002c2905512a4739bbc732e805dca20f"],["java/java-jps-note.html","54c9895366d0413a944d6673f0ca06fc"],["java/java-maven-nexus-note.html","c72584958f947a822c27cf91dc6001bc"],["java/java-maven-pom-note.html","d16b352fea7b72d53fa9aeda6bd5947c"],["java/java-pojo-bean-note.html","612bf2453686e6b5a5f0b616b1dcb935"],["java/java-shiro-note.html","22f10769a5064cc91235c2a78afa7a96"],["java/java-shiro-springmvc-integration.html","2c240a06ab1847dbf8ef2a23e78b140a"],["java/java-spring-autowired.html","5ef80e3c32f424ff2d2637eb20c47b3f"],["java/java-spring-configuration-bean.html","7b3a37c842287af16b85f52914771395"],["java/java-spring-restcontroller-note.html","6b8546bc5ca1b17f1b00d59923c679e1"],["java/java-springmvc-X-Frame-Options.html","b4f330cfb3d9cc0e94847665626c54bf"],["java/java-synchronized-note.html","0412990c3a1fa7db95fef888410454cf"],["java/java-value-pass.html","e5ab35dfd3a13cdd195abede13ad8e67"],["java/java-vo-dto-pojo.html","432d32c4a5d8df1591ff59d351f7c94c"],["java/mybatis-mapper-locations.html","1aca955f156c6f4bba196a6567e19b4e"],["java/url-rewrite.html","0969b7604401b01c7f59a20f2ee91f60"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","d7003620b77f2384133737299b17fde9"],["js/js-npm-symbol-caret.html","9929f6ddf2556fbbf0934a8c255defeb"],["js/js-npm-symbol-tilde.html","c115cba86114b83e130ce9f03a521d9a"],["js/js-this.html","77a6acc4fb248a6a130e0695070c6ed5"],["js/js-vue-note-components.html","34ea16df037dfce3b690abc2f2779430"],["js/js-vue-note-computed.html","0392a26e56e82edbc706ee596b5ad1f7"],["js/js-vue-note-css-style-binding.html","ea9613fa225dfd27c5432156f2b2a1fe"],["js/js-vue-note-directive.html","6a452515b5a55ed02050c4aa3a1e735d"],["js/js-vue-note-instance.html","30595321e663dd008c77b9bede13c849"],["js/js-vue-note-introduction.html","f237e5e8ab8f8cfe5bf1d418e3b62dca"],["js/js-vue-note-syntax.html","bdde0e9f495657fe4b976cb07df8202a"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","1df1f00577fdf6a7520607055c16a2b7"],["linux/linux-top-buffer-cache.html","6f319270744ee9180b3f1a151017dab7"],["linux/mac-find-port-occupy-process.html","088f34bd2dbf39ff8d8bb18e1ca38c85"],["linux/make-vs-cmake.html","0222a08cd93a79b0694fa8083ca5d67e"],["linux/shell-command-awk.html","1e307ca6a3392caac66ea529859fc71f"],["linux/shell-command-df.html","886825c068d6c6af726210b7bbc1fa91"],["linux/shell-command-du.html","43e189fa19140fc0c8be042e7139af42"],["linux/shell-command-netstat.html","dfec91b4f73bea39edcec8a8abc8fccf"],["linux/shell-command-sed.html","5317eef709784db964b5dc9eb30f8ecf"],["linux/shell-command-tar.html","fed68e6c6ced6bc0ec49b3be9c07e1ad"],["linux/shell-command-top.html","f95db4090ae0bf2a384ac715df37977a"],["linux/shell-command-touch.html","93b1f530ad881a1eb0c6579a415490f6"],["linux/shell-command-which.html","a851e570117bc234b1910e2609d0801f"],["linux/shell-difference-semicolon-double ampersand.html","704850860f1767afcd7731b5fa5e7401"],["linux/ubuntu-user-add-delete.html","b1cc979ab295f6ade438f645c086183d"],["linux/vim-copy-note.html","6c127b5f3ff08ce50a70a15a8b7beebd"],["mongodb/mongodb-collection-aggregation-introduction.html","92723bdc65e176327ce7042306f65826"],["mongodb/mongodb-collection-aggregation-stage-operator.html","c94f77148b44bb1cf061e475db790d02"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","d81bd6cd87c1366c8a85b071ff7ded1a"],["mongodb/mongodb-collection-create.html","25009d6d8a25058ff47d9f4b9b71f804"],["mongodb/mongodb-collection-delete.html","93467b841d635f2c3f1004dc75293dea"],["mongodb/mongodb-collection-find-1.html","70a39898c9e174c1ab7000020504ecac"],["mongodb/mongodb-collection-find-projection-operator.html","4fd32e05d7ab81c2489678d4dfa4fadd"],["mongodb/mongodb-collection-insert-1.html","23411039131ab54dddc5f9397a60512a"],["mongodb/mongodb-database-create.html","5ea5a26a814fd2476c5bf4158e31be9b"],["mongodb/mongodb-java-driver.html","3529ee59e0c90afc52db4232b9b219a4"],["mongodb/mongodb-schema-design-note.html","fccac5982ba4d8607d7b09a7edaf830c"],["mongodb/mongodb-study-note-1.html","80def83274749ad1b1bab773719317ab"],["mongodb/mongodb-study-note-2.html","7592940dd83fbc2a100bc96cab79b6e5"],["mongodb/mongodb-study-note-3.html","de4c853598b6ddb1170848778ee2c794"],["mysql/B-tree-note-1.html","f52b9328439b38ac59087e322d337d12"],["mysql/clustered-index-mysql.html","9bd29fe7716e9b08275b9c12cc96b6c2"],["mysql/mysql-ddl-handy-book.html","279eb6511e7d848cffa13dfb68d2e8c7"],["mysql/mysql-ddl-note.html","45415f68a49079bc2e554d0f687aa728"],["page/2/index.html","4dd3b3e97aa86f2902c87030cef688b0"],["page/3/index.html","a266a0016554ff2befc9c0b3c4cec1b0"],["page/4/index.html","b832dc3c0a98595933ed046f613ac1e2"],["page/5/index.html","fb6609034e7c4347a133f39f6a10d34b"],["page/6/index.html","3a5d7e155205b81d06e4b4fe7ac6b217"],["photos/index.html","d892b530d9e53f4b06484fd7e9b5ffd5"],["python/python-args-kwargs.html","e846bafacfab71d088c83c09e9d64121"],["python/python-async-program.html","15ee7fcbf4362fc55ea52ac2e94ad150"],["python/python-package-module-note.html","7e1c8bcc98b324d09ae3282f081304e6"],["python/upgrade-python-under-ubuntu1604.html","1cf240e8c05dbbb7317154adb32d38ec"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","71537e0df6186802601c0e3e0fb3abcb"],["slides/index.html","01e264f4b9c86250d9e26382d4f2ff0f"],["soa/microservice-article-note.html","c72b8020b2fbc6587d461a814ef88532"],["tags/Autowired/index.html","df9ef185d6ccd51d08cab300a4ee0e51"],["tags/B-树/index.html","5b322bdf5cb40d27b2d18b80782e2eda"],["tags/Base48/index.html","fb4de01ab7281cafa91fb9a74ac5956c"],["tags/Beans/index.html","64c96b6d65f894233729d04dc5b9d7d2"],["tags/CSS/index.html","fa74a4c798ca52e5a51338111010b4a4"],["tags/DDL/index.html","51a88ea099f16d0903a3af599cad4e68"],["tags/DETACHED-HEAD/index.html","c8a8108fe170be21a46c0c413f90b120"],["tags/DTO/index.html","0efe07042d31924f2f3534cff8e957dd"],["tags/ES/index.html","72c0226a0b449cfc7e82485a1c514d0a"],["tags/English/index.html","56811016573eaa32dc9474f54335ef4d"],["tags/Git-Flow/index.html","0e7fbd19624b8618dab0312e27e8c9cc"],["tags/Git/index.html","3a18ac5689a86b5981afca3b4ca8d878"],["tags/JS/index.html","9426575f970efa5eac110391cef38917"],["tags/Java/index.html","f66e015a80116da09f9756fd8a902925"],["tags/Javascript/index.html","b1cb3073941af680701d03aa8a5002ba"],["tags/KVC/index.html","3b1eede0aedaab9600dbc0c6b49194c3"],["tags/Kafka/index.html","42a199667f04eb991768782993390fac"],["tags/M/index.html","f6f1a2b98c3bbc3833abc83c351f55b2"],["tags/MongoDB/index.html","ac14f13e953d5bc294c4c73bdb84c849"],["tags/MySQL/index.html","9850577fd8705d710c0e75e567000258"],["tags/NAT/index.html","d65d53d3247f20274aceb5c5d430a92a"],["tags/NPM/index.html","d150fdf45e6e7386ea578844041a5cf0"],["tags/OC/index.html","deea7a7097a61a9586be8f2b431087c8"],["tags/POJO/index.html","3e1e74671885491537ba1d73a73b3b5d"],["tags/Python/index.html","4b618aefbf31ae9454dfe3fcc346099f"],["tags/ReactiveCocoa/index.html","55bfe7708f78a440f3ef4f7266625b5e"],["tags/ReactiveObjC/index.html","11c30bc4165abfbde7415e82bc511407"],["tags/Repository-not-found/index.html","4e8702ae8b011779fa2f8843b1da3ec6"],["tags/RequestBody/index.html","6e9bd643b378c6bdb19c14a6c0d1f9db"],["tags/ResponseBody/index.html","d086f20ffdb605006610382a3ad071c5"],["tags/RestControlle/index.html","6f35b67c9c65272d41a813e0fef4ecb9"],["tags/SASS/index.html","43b00c523b87470788fa85467b03b01c"],["tags/Shiro/index.html","9c2db8416473090a8af9387c1a0fdc3c"],["tags/Spring/index.html","4a48f3bbc13dd3a06a2805e3e3ea6526"],["tags/SpringMVC/index.html","5ae9c2ac4c7bea7075483c635048cb10"],["tags/SprintMVC/index.html","ee7e1bc82cd63256b1e8085b5d3410f4"],["tags/Style/index.html","c4ba2d61e28a2c9a8a23fd94b248ab46"],["tags/Ubuntu16-04/index.html","55bfe33a08bd1dd117f2465db27be48d"],["tags/VO/index.html","904014eac1bf22c14a54865c86f6b917"],["tags/Vue/index.html","827bf05987dfcb65bd2111eb9eee6ac4"],["tags/Workflow/index.html","63718498d76e28a14bd253bdbbb03eff"],["tags/X-Frame-Options/index.html","00b990484d5cc7cfdf79e04dc300c91d"],["tags/aggregate/index.html","c4e1a8e69ab71cba780ff37d0ac4bf4b"],["tags/alter/index.html","4ddf2016a1d9ba75a4d70011a7a34b33"],["tags/annotation/index.html","6fe4057a6df08828ff1a397dac77095b"],["tags/args/index.html","e648924929efeb08b1fbacc76894cc49"],["tags/buffer/index.html","b3b8e60aeaa3784e0df27b8cdb6ec88b"],["tags/cache/index.html","0a65ed30169ec404286ec8d2a486e09b"],["tags/change/index.html","eda69a6ab212dbcc63f6b2ca90ca62ff"],["tags/checkout/index.html","6166c09c07a3c23f017ebd87206e4bf3"],["tags/cmake/index.html","140d0ff68d6f6a7f7c6ce87f33df7ede"],["tags/collection/index.html","b16f286343def67ed029a763aac5eaf3"],["tags/component/index.html","7e9d5ea3a444b08e5e0ce1252af8e30c"],["tags/computed/index.html","71672465c53592af2ea01a940b70918d"],["tags/create/index.html","3b7f25017dc12393fa7899909762284a"],["tags/database/index.html","9b550f47ee4b936b544fcf9a464299d7"],["tags/df/index.html","62c794dbf68f5b66c763ce579cb1e65f"],["tags/diff/index.html","67208e36e94e1f6109d42a11ae782072"],["tags/double-ampersand/index.html","cfdd61e5bfbc98799bdc2a89acb1d11e"],["tags/double-vertical-bar/index.html","0d9d1505b6d9c573ca568a6c11a4aa16"],["tags/driver/index.html","ca70f1657de10f3e88879b198790a097"],["tags/du/index.html","9092d8cfc499476c972e74b6c7a65894"],["tags/fast-forward/index.html","2492dec9d61181b39f42fe511cb980cd"],["tags/ff/index.html","af7b28e7692e7c068b9a572c35e72d32"],["tags/font-size/index.html","9dee30e5d6a186952464b4d385f34c7e"],["tags/font/index.html","ca5d1c880bb75f2fdc7b67dc8a9f6482"],["tags/free/index.html","1e99a6a80c57d066602c9ceea387e073"],["tags/git-branch/index.html","29b53f3a7e63403569767792e419d1e5"],["tags/git-index/index.html","767d819383625bb11492f2c6059add63"],["tags/git-merge/index.html","5c6955a0473b942fed15100ac5ca6683"],["tags/git-pull/index.html","cc3e221d307f8b886455eece1a1b2f44"],["tags/git-reflog/index.html","51c567b803bf0447fac9e47961a116a6"],["tags/git-reset/index.html","def0377c5cdf259b931b27581b1e4b14"],["tags/git-rev-parse/index.html","5cd83fa1b31bb345d5d87561209791a7"],["tags/git-revert/index.html","c1592fac3dd253eb33802261e3a8e575"],["tags/git-tag/index.html","6d0f806e51bef90fcade69f1042454d9"],["tags/i-e/index.html","6f581c217192487f73ec0f14d37e68dd"],["tags/iOS/index.html","ec1dd1e3f4a0afc01e7fe9b1e637a9d9"],["tags/index.html","37b682e0be7b2321baf6ba353e3be943"],["tags/inode/index.html","79d6d8e0f819c597932acbb82cf06940"],["tags/jps/index.html","bf137906d16afac8ed533c07911834f9"],["tags/kwargs/index.html","59bc89c29e5eaedb2cd05d41034fa736"],["tags/linux/index.html","f5e930ac8b3397171c87edc5801a645e"],["tags/mac/index.html","5f9df3cddbac78384505a16ac401ecf1"],["tags/make/index.html","5c6b76cc2b40920a21ed555279b032c1"],["tags/mapper-locations/index.html","77c01a7eb77ada7d37f7dab92212ba98"],["tags/maven/index.html","666f9e48c843ff356d2385a16a986230"],["tags/microservice/index.html","a0f49a0434f8ac96ee1a80a2de0cc382"],["tags/modify/index.html","1886a098a2277e656f27a02b8618d3c4"],["tags/module/index.html","70ac1d63e0424fa0a4967578666a4c6f"],["tags/nexus/index.html","84e1a0d362006bea0c9dddbc1402dec2"],["tags/no-ff/index.html","c6e1fc7aa0c98804d5b6ac2b8ee3a93c"],["tags/package/index.html","f33bc89db1d3b13371641f60fc4cecc7"],["tags/pom/index.html","f2b3d7cca9f0d6e9684c6867f8287fdb"],["tags/rewrite/index.html","53c4c45538cfa752cffaa1b4c9e01671"],["tags/rm/index.html","801d70365337babeff0f3db63ce73f31"],["tags/schema/index.html","3b50a4cd181062f3a363b6d1bb067524"],["tags/semicolon/index.html","3b6863d18b04de96f43248860016ada2"],["tags/shell/index.html","67e095b0c0ec6d98caa57aaa76bb9bad"],["tags/soa/index.html","df1408678bb44bcb0597e9dd057e08f0"],["tags/synchronized/index.html","00ae2d9f62bb88aa695b4dcce4d22f90"],["tags/this/index.html","0e11752a8f5a46253c5ca2709136d96c"],["tags/tomcat/index.html","c8fce6b455de972c81d882338ddcc8f6"],["tags/top/index.html","e2406a1e43cb6e4abeeb5f6adeef1de4"],["tags/true-merge/index.html","902cbd05d7338f756eb66dd910a582dc"],["tags/url/index.html","4563ed85551f41169aa01ec96f9f6911"],["tags/vim/index.html","1fc23e1ad9e51bf225dfe17ca8831563"],["tags/windows/index.html","793a3696e562f984ed872bd20d8c64dc"],["tags/一棵开花的树/index.html","663cc15d4244dcdf3950f1c28fe6a10a"],["tags/主题/index.html","02e98d66a3073f9d8b469fce24707e66"],["tags/二叉树/index.html","df0c75f8125ae4a3a5abb831bc28e387"],["tags/介绍/index.html","912f7ccc15b0c7528eea6e3a5bd25854"],["tags/代理/index.html","68fa99a67daa7e33602fd4066ba0da7c"],["tags/以太坊/index.html","1b48d8ae10e0bb1ea02e646b6fe157be"],["tags/依赖包/index.html","83a44614f2eaea742c0eacaaa0e110ce"],["tags/修改/index.html","7a10b6b92160c7ae6e3d82ff6fb7e705"],["tags/值传递/index.html","692a75e9381c9147d61903f45fe169bf"],["tags/冲突/index.html","033be7b29f0ac220a5eb47fc7913a280"],["tags/分支/index.html","a9a39a70729f5f81988d91486b0881fa"],["tags/创建/index.html","f9cd590f798fc3049fc3801531a54b2c"],["tags/创建数据库/index.html","92f367d54ce26f524327f95ba29bfb53"],["tags/区块链/index.html","59bec0878f15c061569168802c802020"],["tags/升级/index.html","2d4f23c01443ce269513f5b4a7c1ea41"],["tags/参数/index.html","948858b213419b750cf26fc9c255a1c2"],["tags/委托/index.html","d5ec5c167a04bd73a270f0636871c765"],["tags/存储/index.html","1dab6b263bafbe169ac820cd7371b924"],["tags/存在/index.html","cfaa0c91203f1b39aae0be25c242c393"],["tags/学习笔记/index.html","6b42e883d4a3c95487b78029c984ccd4"],["tags/实例/index.html","ee72ab0021311327b5866ec4efeb73d7"],["tags/容器/index.html","56d86dbf6eb43b17f621b2d001757eb3"],["tags/工作流/index.html","22fa85a94002aec8335419474b9ccb9b"],["tags/工具/index.html","b72f1d9b52ea7410ade84ce809020e86"],["tags/席慕蓉/index.html","a50d46278c1762e9ae0feb13f42033b8"],["tags/异步编程/index.html","ed53359a7b555088760ad51ead4b5021"],["tags/微信/index.html","ae09a0aab8ebfc11c4c8c54e72d8da0a"],["tags/插入/index.html","a3bd8cd6bf73c7c229517ce667390f51"],["tags/数据存储/index.html","abe83483d6cd1d7652d6e3cdd668a945"],["tags/数据库/index.html","a3d3b1b718aa45ff8b183db06b6acbec"],["tags/数据集合/index.html","924dddf98c2fdf634ce811cb1ea626f2"],["tags/数组/index.html","9c20d43a74db2a59153fc0d7236d61c6"],["tags/文档/index.html","f4b0b0aeabcd6315e0631673a18afded"],["tags/文档流/index.html","de5e2e8d8f8a086ef93a4cec37627a29"],["tags/智能合约/index.html","227ad3c1f485000cf3a8ad5e55544da6"],["tags/标签/index.html","dc48800def37eda6637991165f6668e7"],["tags/模板语法/index.html","9e7fa1bab70bc02c83f56682fafb7f11"],["tags/比特币/index.html","153683b1296375fea333e8fa3d2392c6"],["tags/波浪字符/index.html","618ff97ca4658b63b3dd5e1ecc871065"],["tags/注解/index.html","f4e954e89b77623876915b0195d5d31b"],["tags/用法/index.html","acfe86e9a6b69cc100e91f0a065299f6"],["tags/穿透/index.html","aabaf42bdf0816737d62111498f3c14b"],["tags/端口占用/index.html","3de169d8235bd7fab9e2760e53925ab4"],["tags/笔记/index.html","d2ef2e8553b36d53addc2181301dd999"],["tags/符号/index.html","49abecbba1e864d994b383dc62c1bdf5"],["tags/红黑树/index.html","2249b6d3313af39d3cae0e61e71b4748"],["tags/组件基础/index.html","629633a791dea9354f21b7eb36cc4ca0"],["tags/绑定/index.html","c9141b03c57b01bef9ed6500ccffc6c3"],["tags/编程/index.html","98819c6c04719bc7d030fc2ea072b741"],["tags/职责链模式/index.html","4009af65938ec8b78bcdb5565c0bd85b"],["tags/聚合/index.html","fb12485a691e5af7c4f2fca3a624b42b"],["tags/聚集索引/index.html","39fe405fe54d65f15839d45ba039eb95"],["tags/自定义指令/index.html","fa0041acd2f6b129d3cc464ad97dea60"],["tags/计算属性/index.html","e3209a7813a074e360e661f26f7d956d"],["tags/设计模式/index.html","be1ba11b50be738709868e1db64ab0e0"],["tags/进程/index.html","32881f0cded01bab92f2a4d71618152f"],["tags/远程仓库地址/index.html","3ca2292ab2728777828588862eeb311d"],["tags/逻辑操作符/index.html","b955269a76e3b1cb293f38f824be3b9c"],["tags/部署/index.html","4f9e2a5f28865c195a7b72b4501990d3"],["tags/难度/index.html","5ba4eed2a7ea9be1c9a99eef6c54c0ad"],["tags/集合/index.html","56839bafe81a13b23d9e62bcea34c61a"],["thinking_in_programmer_life/full-stack-programmer.html","cbe8dbae002c0d26f9fd2c74081f7176"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","c44f0d884507e295b5c81f034f3070d8"]];
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







