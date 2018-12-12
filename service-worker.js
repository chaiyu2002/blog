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

var precacheConfig = [["about/index.html","8ee61e52c8c56cc00ad24204a733e964"],["archives/2018/06/index.html","755101a1521541b10d97952590a7d4a9"],["archives/2018/07/index.html","88c5f2a4865ade7b14739f9f9f49bfd2"],["archives/2018/08/index.html","0af62f93c55ed95a13eefb6ea69dbd88"],["archives/2018/09/index.html","6e8a07e4a3d713e338d3576322d5d649"],["archives/2018/10/index.html","4d3f2d60379d6cc3b76e9ab71d7ffef8"],["archives/2018/11/index.html","e02ba121eb9df8ca41d2fdcb9e179910"],["archives/2018/12/index.html","59d0b19ae6632e87be9cb20098918f8c"],["archives/2018/index.html","467a2b2eb7c1f1a90300f9b8bf86544a"],["archives/2018/page/2/index.html","102921e192c2233f3484bfee243ceb70"],["archives/index.html","b51a4f2a3ce5d1c22b2ea70271fa70fd"],["archives/page/2/index.html","6fc18542fc5e069ceff3d8f970cac6f4"],["atom/index.html","61a188d5be5f6f55cd0c01e260d4ee2b"],["blockchain/base64-base58.html","c9c9c05fedf7fee6176ca0d7ca7224aa"],["blockchain/bitcoin-data-storage.html","60226068922b126c23a724971a339011"],["blockchain/bitcoin-difficulty.html","11c35d9ad420a35e87bb8349babbfed5"],["blockchain/block-chain-ethereum-contract-program.html","3a3352e91d967d678a767988dbeba8d7"],["blockchain/ethereum-programming-introduction.html","881b44bf7d8143205065669a628841a7"],["blockchain/ethereum-rationale-introduction.html","001fcaa89894064017b943fb3938896e"],["books/index.html","da38f87c5d8b8cded3d163f73e0e9ba0"],["categories/Blockchain/index.html","a02ff5bab77821320d14529db235f1af"],["categories/Blockchain/以太坊/index.html","6f6ec119381d51bae1f073071b3af184"],["categories/Blockchain/以太坊/智能合约/index.html","f14ef1478da28ac2b52f7b5d1a719e6b"],["categories/CSS/index.html","40a13cc0cec957bc56fe16817cc817ee"],["categories/Git/index.html","7df1bd514f8e7fa3b024e95b581082c7"],["categories/Java/index.html","bcbba8b2e48a0b09b345c80b4672bd16"],["categories/JavaScript/NPM/index.html","af447d665e2dc307bdc01488cde4b681"],["categories/JavaScript/Vue/index.html","38beb528ffa5a7f42887f2a1892c95e2"],["categories/JavaScript/index.html","bebcb46075ae4033c47ce9fc0fe7f558"],["categories/Linux/Shell/index.html","31520366caddfe0d405f7f7dcbdd25ae"],["categories/Linux/Ubuntu/index.html","dea54261a560b049897013a45f037109"],["categories/Linux/index.html","d66428744f5a08ebbfb499de7739ead0"],["categories/MongoDB/index.html","44cb5f82a5297bf57c44153181cb75a6"],["categories/MySQL/index.html","b3bfbc1bd0a5233016878aa2bbb77a28"],["categories/Python/index.html","ed8ef546abce8be0c20b2ca6dcb546b2"],["categories/iOS/index.html","d8137a0ad6aca51466cc797df0ea4144"],["categories/index.html","3f8b8ece2595115bceb0dec19e44a732"],["categories/微信/index.html","3ee109e86cdc27f3b5e04f3eb4388eb2"],["categories/杂记/index.html","7b601d03809a6826b3d9862ce99c555a"],["categories/程序人生/index.html","a96b5442d45576118d53fbb20190b4b7"],["categories/计划/index.html","347d3ab8bcda662ceb1415079fa6acc4"],["css/css-normal-flow.html","aed0a0ff6337132110faf90a7f094b44"],["css/css-sass-introduction.html","91f3c3ffdc571e8bbfa1b3cb2ff4cee0"],["css/main.css","569c8aac89b8cb480dbc2a689ac7623b"],["drafts/configure-multiple-vue-project-with-nginx.html","20178ec60b8fedd467a28c123979a19f"],["drafts/iframe.html","673ff29a254c91268a380356c43a4b10"],["drafts/record-re-install-mac-os-10-12-6.html","ca0206126638418954c62706b5a88b7c"],["essay/note-ximurong-tree.html","a1463df7ab750beb4c845641cb39697f"],["git/git-DETACHED-HEAD.html","0ec82386945d8620f2282058b00f95b7"],["git/git-branch.html","c3f1d93225531204ef350305a61f3732"],["git/git-change-server-password.html","cf9fe469aac90a50b7df02414c616e4a"],["git/git-checkout-1.html","8033d24ba8e35ca5fda3c21f28216dc5"],["git/git-checkout-2.html","067eef1ffd43720874a0ba4887fad2c8"],["git/git-diff-m-symbol.html","7d3448d1559edf13c4a8d1a3cd7d30bb"],["git/git-git-flow.html","18e9dc120e00d236e620c5263fe1a40e"],["git/git-git-merge-ff-no-ff.html","2de73cc2a6f1688b08db6da4d80e711d"],["git/git-git-merge-true-merge.html","b9aa40cf04391c7af7055f7718c5ecd1"],["git/git-merge-choose-one-side-code.html","448790cd33cc145c3cc80b114b4c4e93"],["git/git-merge-exist-conflict.html","2f6d89f361c6352c0a2202affb632f2b"],["git/git-pull-1.html","98215017065ab81b6e731bfce0f40782"],["git/git-reflog.html","aab0a7017232391eb8beec93b8b15b2e"],["git/git-remote-set-url.html","94e4eee403cc737d52f99a34f7a07b0f"],["git/git-reset.html","fcae84d9c7e03a1c6bfe41b6850f31fb"],["git/git-revert.html","9384bafb0b31cc1dffc7441434c2a8d4"],["git/git-tag.html","f2e2420a979990246dbbf75daa90ab3a"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","407a88ee6f9d062ce551a924fd0c6fc4"],["ios/ios-oc-kvc-1.html","c7c9ad65087da9a0a62fbecde370de53"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","a1aae43bc25253b2b25adf9c4589f563"],["java/java-deploy-resource-folder.html","2615af1e4ed65b0b0589e69a96d9b4b0"],["java/java-shiro-note-2.html","9d467a36d20e927f2947f4e886a778b7"],["java/java-shiro-note.html","13df585c03f6029f107c41cc35d37c77"],["java/java-springmvc-X-Frame-Options.html","6e5f2c6c96af2500d3962c0804b61cc7"],["java/url-rewrite.html","3b91450ef9d7b233e48342b5677aa31e"],["js/js-logical-operator.html","d4203e9101909982959f36ef2c94650b"],["js/js-npm-symbol-caret.html","792f94ba30548aa767ea4f7c9aaa55ea"],["js/js-npm-symbol-tilde.html","6de6ffd48de8a215c3e80e8c22cfd91b"],["js/js-this.html","4483bf86280bb8d5ae9617dce9fa5b0c"],["js/js-vue-note-components.html","505c64b509a9554ef8617cb3f636ff96"],["js/js-vue-note-computed.html","dd8cdefbd4e9395a3714ed78f52aa53a"],["js/js-vue-note-css-style-binding.html","a3f875594bab2ca3a574e99791524b4a"],["js/js-vue-note-directive.html","04b096f7e577f527c62d7faa522d3fa1"],["js/js-vue-note-instance.html","760363498950c6b97776acb9fd6dd9a6"],["js/js-vue-note-introduction.html","1702c55eb9fd294ea7c2b9c640e2a844"],["js/js-vue-note-syntax.html","ab2e4eebd64c4be8a282b41ca27b42c0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","892b15a964c39b3551b30aa4414ac1cd"],["linux/shell-command-df.html","139050dcc9c148e781f0f8dab0e89e9d"],["linux/shell-command-du.html","cf4b3ca7ff65fed6f4a630baf27b893d"],["linux/shell-command-netstat.html","fdf1f41656736c312baa7c4f943eeeb3"],["linux/shell-command-sed.html","af2d17e46996582594994104e13e0e26"],["linux/shell-command-tar.html","9989411cced63ff3a98ccaa87bd28892"],["linux/shell-command-top.html","020168047aa902781ae495e2d6850b0b"],["linux/shell-command-touch.html","83ecfd99c899d9e57738858a54857a6f"],["linux/shell-command-which.html","5289b7f86cc641ca2115b712a7910166"],["linux/ubuntu-user-add-delete.html","fb88d366d159d9e3c3d5af540eaa2e5c"],["mongodb/mongodb-collection-aggregation-introduction.html","27ebe01a3862e2347797180b5e3d1381"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","00f7404025d2df6aeba1fa4197c9df84"],["mongodb/mongodb-collection-create.html","04864cc3239cc94ee58fcd10d6d5b5e6"],["mongodb/mongodb-collection-delete.html","6ae1dafbc124c91c761467d52c91cfe4"],["mongodb/mongodb-collection-find-1.html","5380e32bc8f3eb810ba6795ceff39be3"],["mongodb/mongodb-collection-find-projection-operator.html","2e6bbf4df265a3e1b9b14ccdc8d63648"],["mongodb/mongodb-collection-insert-1.html","3c48991f74d437015a022a3be5bc624f"],["mongodb/mongodb-database-create.html","89bd59cc4ec2868c8ac26f17f96b9fcd"],["mongodb/mongodb-schema-design-note.html","ed576120c6112df47ea33483b0addceb"],["mongodb/mongodb-study-note-1.html","4687c6c373e80eeedfc0ed0cdb9bf918"],["mongodb/mongodb-study-note-2.html","97fe63ffaf8f8ae1d6261bd9c5b76b8f"],["mongodb/mongodb-study-note-3.html","f3a49efcf12585cb549080b5df856f9b"],["mysql/mysql-ddl-handy-book.html","1fa5c3b5045fdb05e40a1df1c3c6a747"],["page/2/index.html","f6ef275391fed3f0cf2c0594a3db186a"],["page/3/index.html","52488a75a0091c1f9ef16b7d80cd9ab8"],["page/4/index.html","7ec5f531bdd382f52d30f50f4335cead"],["photos/index.html","7234083fa80d7e2a97226a3870411402"],["python/upgrade-python-under-ubuntu1604.html","6aeea06cfbe09757dcccddc936cb18e3"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1170d6caf3981da30d31db082139e62f"],["slides/index.html","122653635399b272b2bfd13a3328ec39"],["tags/Base48/index.html","0ed3eda4a1b7ccbbd8229b7fd1bc90ef"],["tags/CSS/index.html","fb918c20a2d4e357cf983f0de1935187"],["tags/DETACHED-HEAD/index.html","5ef06e8de521e81be3ce748f4fd18540"],["tags/Git-Flow/index.html","a6a9dcba79f6eb0a3a20a2a366a6fbd0"],["tags/Git/index.html","09f37c0782d7e14fc7eeee1ff59c3f76"],["tags/JS/index.html","808f64ab5325a15e490c446e13fb5c65"],["tags/Java/index.html","309a81aa55eca3382aafcb8a54689e86"],["tags/Javascript/index.html","1a0677a7e68a3427b261d2ca609642a4"],["tags/KVC/index.html","d444a33e487a2bf9f359e126123889e3"],["tags/Linux/index.html","3fd19d689e853907f618bd3c0410c14f"],["tags/M/index.html","2cbca84a7b24db3e5a2d8150c1a2c017"],["tags/MongoDB/index.html","81970d7b472fdabd0ad78fcd79ebc8c7"],["tags/MySQL/index.html","ac39a8399e6f3042f2a4813f9d0ad936"],["tags/NAT/index.html","8c79720857a98fbfaf9185b5ff9d3378"],["tags/NPM/index.html","0357516a2133c1d43a20cd68f687e241"],["tags/OC/index.html","2812cd2fdc733fa9e8dc20870db0b183"],["tags/Python/index.html","2adf941db39dba501cb3fd4be512c713"],["tags/ReactiveCocoa/index.html","093fd8543ab539e3b62bd0d1878aa181"],["tags/ReactiveObjC/index.html","37f793503e7626cb23602ad9f6091214"],["tags/Repository-not-found/index.html","b3563ce5711590bc30e1410eea6567be"],["tags/SASS/index.html","4df09a93af77ebc7c006e6e7921cabe2"],["tags/SprintMVC/index.html","cbc6769e2e38df0e8d28d29062eeaaa0"],["tags/Style/index.html","bb6569106f393c8675478aa913027cfa"],["tags/Ubuntu16-04/index.html","519f156d825b05d02a9cc2713a01fdea"],["tags/Vue/index.html","052aa843630a1727adadd2af650b5327"],["tags/X-Frame-Options/index.html","364c719e7355ebb57463903fb06eb29c"],["tags/aggregate/index.html","4be6e6b813bc5ce6152e6ccc9fbf77d0"],["tags/alter/index.html","a30da355ff3f43e2446db4f378914370"],["tags/change/index.html","17426754c37ef555efed3c3352e44be3"],["tags/checkout/index.html","c27544190e9525702f84fc9c49507a7c"],["tags/collection/index.html","4ceabb084c37bef847a75997020eb70e"],["tags/component/index.html","d6233c6ae3608c92d5ede9c6d898c50f"],["tags/computed/index.html","3c3546692081c8e6426c1bae6d6caaa4"],["tags/create/index.html","f381bed5a0d5d3b77bcf3951fadb3a33"],["tags/database/index.html","6d2e12100467194545ad20c8879b1bf5"],["tags/df/index.html","7a563db25bb99423860561c9531ee1d0"],["tags/diff/index.html","fb88cc381aef581cfc29d92ed9da120b"],["tags/du/index.html","9df019b58bde24609bfda7d4490501ab"],["tags/fast-forward/index.html","66c872cc17c1325b8b7a81ca68c19a7a"],["tags/ff/index.html","2d7f26f43bbd94c4708f489996f3ac0e"],["tags/git-branch/index.html","9781122be5ae7c26599d9d55fd6a8715"],["tags/git-merge/index.html","43991d614f9634b5fc1313ef38d4b81b"],["tags/git-pull/index.html","654810559c7b32d789e0073566a05f27"],["tags/git-reflog/index.html","b5c0a3c6b28d76f08fd2dcec3f084f24"],["tags/git-reset/index.html","e4d247fa7ecfe9e949639cba5493c2fa"],["tags/git-revert/index.html","605433719012b483b6283a28d8ca0fda"],["tags/git-tag/index.html","8575f77acf5d3c98f85d4c182fec4698"],["tags/index.html","a038576fc4074ff38bcd8d3af801b9b3"],["tags/modify/index.html","0db61e41cea6eda24b9242ae3797b4e1"],["tags/no-ff/index.html","04e93d55a23309bc18b7155c13199552"],["tags/rewrite/index.html","cb9af421db5982581d6dc13c36e252c5"],["tags/schema/index.html","9928b29afe046d935c47cdead967aaf9"],["tags/shell/index.html","30f3d710da41237dcd6b4996a64ea6dd"],["tags/shiro/index.html","34073515a7c496006f11dda5d211ebfe"],["tags/this/index.html","656dae1cb5602f0382ae1433c9051e6b"],["tags/tomcat/index.html","f6fa091b1e932a427e70f11cde5b40e0"],["tags/true-merge/index.html","435131401161747f6d937eb261b785b0"],["tags/url/index.html","a9ad1d58586e1b28979d5514a0732a81"],["tags/windows/index.html","3111e92d379a69f2a9186c749fa6db64"],["tags/一棵开花的树/index.html","587749eeda6c9e05d288c0546875268c"],["tags/介绍/index.html","f379bd8e1392e24eb77b27ef23316cdb"],["tags/以太坊/index.html","b73b74bd6348c997cf18cefd4acedf14"],["tags/依赖包/index.html","9beee32474d413ec8d6125e9ada92a3f"],["tags/修改/index.html","44ab6f0c94017d7baf689c8d9941bf49"],["tags/冲突/index.html","db2b970c3b0f9e3626eed0d8b80160e7"],["tags/分支/index.html","93295828975f2ce1f66ca18df811b781"],["tags/创建/index.html","6309b029f744a5ac88de4cfdfb3b9c8a"],["tags/创建数据库/index.html","fee119a691ac48e2b8e39c7cfaf6824c"],["tags/区块链/index.html","8e88338581301342b31f72fe5dd618fd"],["tags/升级/index.html","262b6072cc40b6c8ecf53917c5513dce"],["tags/存在/index.html","a08fd93ad8b8577e84337a9ff75c6770"],["tags/学习笔记/index.html","0fcf6fa15440124230a198b3662658db"],["tags/实例/index.html","cafcbabd6af876109ac0b4814e6c6d93"],["tags/工作流/index.html","71bc3a1144eca50ca08ccf955a1c479f"],["tags/席慕蓉/index.html","4e247c128b212d5d15e3f7d9557eb906"],["tags/微信/index.html","62a4d71eeec22b7e4e9944e87606240e"],["tags/插入/index.html","54abad141b9f57fd035790695c1b1f4f"],["tags/数据存储/index.html","1a712c7683e2e5ddc7b37d16809005be"],["tags/数据库/index.html","ae7f44f4d8c97c08576098a1d7125117"],["tags/数据集合/index.html","dd4a749091b291d83c9e5b4216ebaa54"],["tags/文档/index.html","bbcd19d6f36072f8d712eeb9665b6229"],["tags/文档流/index.html","79ce3aaa769b37f97b24036665c60275"],["tags/智能合约/index.html","41f17116da12d5f2d2d795ac940995d0"],["tags/标签/index.html","868207e2443103debf9cf1febbf27d9f"],["tags/模板语法/index.html","2ee2e5bad9e5c6f2aa34294f372e608a"],["tags/比特币/index.html","27a26edcfe7e1fa408189947463c9d19"],["tags/波浪字符/index.html","154dafd7870179e2392262186a0cc79a"],["tags/用法/index.html","6b3d3d234437c385cbfae9e503bc98e4"],["tags/穿透/index.html","93405e290f437d72804170fe90798b0f"],["tags/笔记/index.html","481070b17e6c89d11e706578de840998"],["tags/符号/index.html","1adf25e225e6597a262429606fbe6de9"],["tags/组件基础/index.html","134259c8f5388762474f834058cf0a47"],["tags/绑定/index.html","f65a24bde50efbd58ce6e63c5455c1f2"],["tags/编程/index.html","47e769f1e5e18b0a89142285a4c9ce0b"],["tags/聚合/index.html","3f2dc5c4f30ff3e87d23c06af0462f56"],["tags/自定义指令/index.html","07432d963c5a640394e979d78905f8d5"],["tags/计算属性/index.html","f4fef0ca1d1a1f4694ceee9fe3da1760"],["tags/远程仓库地址/index.html","19a5bf6ddb4bfef0836938ac3aac7924"],["tags/逻辑操作符/index.html","71c53fda4b999c242cbbae34c512c286"],["tags/部署/index.html","8fecd62158e5a12e812f4ad20606a4d8"],["tags/难度/index.html","2312471104048f60ec49dae6be55e84d"],["tags/集合/index.html","a11fc93384ae4574aade9251195b9d17"],["tags/集成/index.html","ddcf4c5ba50d1c16d2648c271554832d"],["thinking_in_programmer_life/full-stack-programmer.html","2c77fe5ba4f7e9bede533ab5a0289192"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","37aa6e2558a868b50ebc2432f9534118"]];
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







