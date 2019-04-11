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

var precacheConfig = [["Kafka/kafka-introduction-note.html","0e7ef836acc3767c0c17b46f497f06f3"],["about/index.html","9a39f3a65fcb0a9ceb6d654bbe97d3ab"],["archives/2018/06/index.html","5a8788d10e20dd0ec2dce8e08347188b"],["archives/2018/07/index.html","0935f90bc5c38dbcd6400289a7931568"],["archives/2018/08/index.html","85cff932d7a59be891b37938ee708fce"],["archives/2018/09/index.html","bfbcae236c8c1cce328f33d1bbc84a30"],["archives/2018/10/index.html","a8b049132ea3a8486ee87eb10a848ea0"],["archives/2018/11/index.html","7a26ee092c464e6ef2e36941376d1a0e"],["archives/2018/12/index.html","6df0050db3575d15e3cbdb06c4eea73f"],["archives/2018/index.html","7ee0937336b627932b7e5e631293be7f"],["archives/2018/page/2/index.html","6b184dce58278281750ae9a8f6a737f0"],["archives/2019/01/index.html","a20d9da42d9a1523569bf962f4f3daef"],["archives/2019/02/index.html","158bd78e3040d931323fedf6bc802111"],["archives/2019/04/index.html","49c3225a5cd620bd7dc7d30cff6f4e20"],["archives/2019/index.html","1302ce1568927044ba387672bd4237dc"],["archives/index.html","d3ae0e9a5f0b1710bb8471764ff81524"],["archives/page/2/index.html","5fca33982ac51e121c3b409e3c8f508a"],["atom/index.html","01f274f1764bc5e751abbc0c7b570312"],["blockchain/base64-base58.html","034029cd92100884707b115929bb905e"],["blockchain/bitcoin-data-storage.html","40176e69488bb769e1d7724d18beae22"],["blockchain/bitcoin-difficulty.html","cda78e783c35e57acacad33fa03b7f7e"],["blockchain/block-chain-ethereum-contract-program.html","f036c92f56f6d1d387f678942620fc6f"],["blockchain/ethereum-programming-introduction.html","07f2ec690ac74eb441699561163d7061"],["blockchain/ethereum-rationale-introduction.html","e0a1fdad3b29bdc545d102be6f3dc805"],["books/index.html","9ab93abf4cd83b157b5e0a3004d489d2"],["categories/Blockchain/index.html","24da384afe0f7a7cb0de35e27a6643c5"],["categories/Blockchain/以太坊/index.html","1fbc8bb81c6e92d03f107e51c80626e8"],["categories/Blockchain/以太坊/智能合约/index.html","209cd901142ebedf6ae8107911be8c82"],["categories/CSS/index.html","6ef0acbde1a3821b6694ac48985a2009"],["categories/Git/index.html","7063627df0d19c0982a132642dd5e36c"],["categories/Java/index.html","c3a621162c109211d178d073a4e87d68"],["categories/JavaScript/NPM/index.html","26d21add1eba2581087dfbf5b4a0682c"],["categories/JavaScript/Vue/index.html","b4cd332a5245f303255f13d984b432e5"],["categories/JavaScript/index.html","8f43f35df8256a826f43754e093327d3"],["categories/Kafka/index.html","e860a23d13e369e42ffbddf180c736e8"],["categories/Linux/Shell/index.html","0fd855021a9ca040b7f094846cffebe0"],["categories/Linux/Ubuntu/index.html","5337e25111b6fb476a6d8732a352f176"],["categories/Linux/index.html","3a35f397684c2cba80dc705e8896ea6a"],["categories/MongoDB/index.html","9320573a542ff66ad5c9dd7b35732b9d"],["categories/MySQL/index.html","a145ad46b3bb5695a84aa6e2f31ea1f6"],["categories/Python/index.html","653dc8d504f117413a7d8e06b44d85f6"],["categories/iOS/index.html","c7513da8134d720dfb1a52b91c8fc084"],["categories/index.html","8d4b4fb1538e6fab6af914b518d7f5db"],["categories/微信/index.html","0bb8d3f98dc5b7ddc5e81ce059b06dc3"],["categories/杂记/index.html","1970dc5ace14a66f1b62b2de02b09a96"],["categories/程序人生/index.html","12c5cc0903201add180fb97c702ade22"],["categories/计划/index.html","3cb22e566bcb7943b0eed59f338a4576"],["css/css-font-note.html","3a1b1ee20c0b02a209a07a44dd8df16d"],["css/css-normal-flow.html","660589b07d9d1c118967df06b587ad4c"],["css/css-sass-introduction.html","703836db809879ecc18b1932eb8fa47d"],["css/main.css","c60198b83a64071cfd4af9fdea5522a5"],["drafts/configure-multiple-vue-project-with-nginx.html","69071b77c69d9cba7f691cd1058dd4ea"],["drafts/iframe.html","fbf94b26a684d65d77a7c195c71b1f2e"],["drafts/record-re-install-mac-os-10-12-6.html","5ba270a516b86b8501ddef62ddf388d4"],["essay/note-ximurong-tree.html","34efdd112f492cb22e5a8bab93fc0b0b"],["git/git-DETACHED-HEAD.html","fb847307444bdd10fc909769d0759a5b"],["git/git-branch.html","25feb1e448c2ec194c1cbaf543d003fa"],["git/git-change-server-password.html","b50ce596cfa9273757506b9a8c83a7dd"],["git/git-checkout-1.html","3cee0a10bab2c5fa2b54810979acb244"],["git/git-checkout-2.html","e18462086daeda036aca3221d041f521"],["git/git-diff-m-symbol.html","c6c968844948dee3a7b19689710c7108"],["git/git-git-flow.html","cf680783a8e4fe7f487e53b1a5b931a7"],["git/git-git-merge-ff-no-ff.html","6646e0b5c11257588d8b0c48e98206c7"],["git/git-git-merge-true-merge.html","b00ca272b318230088327e60cb5078d5"],["git/git-index.html","a586c7586f9eb173ac3f2196bde12dba"],["git/git-merge-choose-one-side-code.html","22cddfb1b22798dbc033c2bb5a31418e"],["git/git-merge-exist-conflict.html","3fe3207ae2c33be1eb2b4b8d905b8ad2"],["git/git-pull-1.html","2fa4925982bffd40086c0b08b7672fe5"],["git/git-reflog.html","724ad90063268715ea9b0712e7e0e171"],["git/git-remote-set-url.html","a742cac8be4f9367bcca688128f456c7"],["git/git-reset.html","17c32abdbf3b6538e31e62b54e5eab83"],["git/git-revert.html","b32017900b9a816ef5a72fd0316dcf9c"],["git/git-tag.html","5d82b923ba4cf6ef67af0a14e64272bc"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","5658ace22adb4adfb3eea9f3ee4e675d"],["ios/ios-oc-kvc-1.html","60576ffdb3b5e2874e9a3ada2503debe"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","7b0559b959601c26d62372c09d43c858"],["java/java-deploy-resource-folder.html","3907bbdb3b32a5a5f5ed6eb8734dfa5e"],["java/java-jps-note.html","f0e44929c92f253db71ac3366010dd63"],["java/java-pojo-bean-note.html","410dd38b3cb0ece23d3991d60deebc3e"],["java/java-shiro-note.html","2c49b357da8d71ee63e390155c8c1b0d"],["java/java-spring-autowired.html","9c044e1624f8a1f738008802f265c33a"],["java/java-spring-configuration-bean.html","028b4b18a71f64794dbcb9dbd44fde85"],["java/java-spring-restcontroller-note.html","c3df5956e3efb49f8b36e403816e4c08"],["java/java-springmvc-X-Frame-Options.html","0eab61d62140668d16aba70fe9f0a724"],["java/java-synchronized-note.html","9cab1cbd4934a01926f002d1311d3321"],["java/url-rewrite.html","47f8f20b4958bfcbb9ee2c4992c91a07"],["js/js-logical-operator.html","fa7373298faae2a006c7469ebb39744c"],["js/js-npm-symbol-caret.html","069b82d6a4e3a56708de553deb5a6903"],["js/js-npm-symbol-tilde.html","d34e82e1d839a68698a6ecf5fd854f4a"],["js/js-this.html","6449c9c2bbb8ed7899398780727797bd"],["js/js-vue-note-components.html","de30800a6c22ab3b9ecec8d35a8ad567"],["js/js-vue-note-computed.html","1005a3d6b8cb162d7a771041ebc66ac3"],["js/js-vue-note-css-style-binding.html","c2cd4fce84c2e0879ef83c93e21c67ee"],["js/js-vue-note-directive.html","c59f30ab7424aaca64884996bdf12cc1"],["js/js-vue-note-instance.html","101b4a3f355c5a5b1c4eb280912eca92"],["js/js-vue-note-introduction.html","c88f2caa18dcbdb455adaa852d60e0c7"],["js/js-vue-note-syntax.html","1ee3ef30a019b835fe6895508a73501b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","08a873a44f34cebc8e74cee3feea0e35"],["linux/shell-command-df.html","205d6e031b319cee7140b86fb733c95e"],["linux/shell-command-du.html","15ef700cdc53034267c480207e77ea80"],["linux/shell-command-netstat.html","e39222e3e2b344e9f0c7d21985bf56cf"],["linux/shell-command-sed.html","47a38b258b7a4c48a028dcb541425d09"],["linux/shell-command-tar.html","0ca5b18277545cef44db571864a79814"],["linux/shell-command-top.html","e1392978b433c5b8c819bc60ba4c4a26"],["linux/shell-command-touch.html","be326ae1fb4399e3d2279b32d8d98315"],["linux/shell-command-which.html","554595c1d2f0a84d6141b71404802f71"],["linux/ubuntu-user-add-delete.html","9f794e41ca1e4820a8a19ffd06649c5b"],["mongodb/mongodb-collection-aggregation-introduction.html","7ccc7a02bdeda87eb2182c62ab321636"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","daaced56e0c7a48f4fe4cffa218fc195"],["mongodb/mongodb-collection-create.html","a8d0829dd368742895f9a7170416d118"],["mongodb/mongodb-collection-delete.html","8921ab90e541cdba5c7be9c4ace96bb0"],["mongodb/mongodb-collection-find-1.html","9b81a7f5123c172e0524990c1438b9e8"],["mongodb/mongodb-collection-find-projection-operator.html","bbce28b0bdeed9b90b37f3098f0d0e60"],["mongodb/mongodb-collection-insert-1.html","9cde1a1e7ebe6cb13df1ca5ccd30f076"],["mongodb/mongodb-database-create.html","9e00c08b5ac6134f2ef33d6d57e91391"],["mongodb/mongodb-java-driver.html","c71b410c5d9b424bc278ed0697a7ec1d"],["mongodb/mongodb-schema-design-note.html","c6846e1b0760ac4dcf541363ae1850cb"],["mongodb/mongodb-study-note-1.html","2725437d4f575efb12c72d0f088ba4c4"],["mongodb/mongodb-study-note-2.html","1a739200e87db57e634fedeb75594cc8"],["mongodb/mongodb-study-note-3.html","5ef0f409947d79da437260edd61af214"],["mysql/mysql-ddl-handy-book.html","5a24276dc90982700b74fa902d2d5b6b"],["page/2/index.html","9da10db13d6b3e89b468dcf96af5c5b3"],["page/3/index.html","5aab2a4cfed44144d76bf86bb789ced4"],["page/4/index.html","0b21b18e75bdd75a76d4cda9a1c2beda"],["photos/index.html","636ad7b636f7669e1f45db329bdcdcfe"],["python/upgrade-python-under-ubuntu1604.html","ce4bc1b21905ee002994a4767a93035a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","255642bcb95ffb0d8067cf20f9ce5dec"],["slides/index.html","9bb2c57dc53ab81240b8f8ff8e8a5d67"],["tags/Autowired/index.html","06efd276c94a704a60d8dbfd7661eeb5"],["tags/Base48/index.html","c8106dd1f425b8ab4cfede9feaaffc1e"],["tags/Beans/index.html","d9be408282c6f4abf60f164175d26b60"],["tags/CSS/index.html","403423f509f0088c7c766995e1870124"],["tags/DETACHED-HEAD/index.html","bd35d5dbc7f17153b148e9a0679cb5ed"],["tags/Git-Flow/index.html","baf465a746ed20935f2eb388a45143f9"],["tags/Git/index.html","f445a2f081c8b169244f5c19fe6bc48f"],["tags/JS/index.html","d1a0f4f75abc68124f81e2c733929b8a"],["tags/Java/index.html","7ef31bd67ef8eef10f5847ea12951ae6"],["tags/Javascript/index.html","73d6797ccab3e920b1da4e301bed1e09"],["tags/KVC/index.html","59102135946d88cf7e3f6972295dddb3"],["tags/Kafka/index.html","24f2ffba77b46052e0a4e693decfdbe9"],["tags/Linux/index.html","0ebb0930e82c39d02da16926d8f83efd"],["tags/M/index.html","3bfde6bd8c8370d57b83c8968201c4e8"],["tags/MongoDB/index.html","97690f0a98df00092229a98f886d0ec6"],["tags/MySQL/index.html","12e97acfe6de2087f155a7622a238c88"],["tags/NAT/index.html","5357a9e538e9118439a70b8e901d158c"],["tags/NPM/index.html","94fb3838d1862efe2ba765ea9bfab630"],["tags/OC/index.html","3ce2c32865ea43007d70673ed749a0e3"],["tags/POJO/index.html","b7409877da23c3bd701a39cad1bed9e0"],["tags/Python/index.html","514229355416dad14a01814b30f9c149"],["tags/ReactiveCocoa/index.html","475aa22211e72d9694eb631c813c3a3a"],["tags/ReactiveObjC/index.html","6ffc9a6f8e63249d0273e827307f4b29"],["tags/Repository-not-found/index.html","5a90a4615721d71495f2376e602ffd34"],["tags/RestControlle/index.html","5d6673cfd8448884187f3667b7ef5085"],["tags/SASS/index.html","f826fbf470dd4e1bf7463009a52d788c"],["tags/Spring/index.html","b02150102e53134aa3efba7010a18b80"],["tags/SprintMVC/index.html","35ab6286b91795dd54577f26908027e9"],["tags/Style/index.html","6f10f39dda699bbaa1c03d71f9353369"],["tags/Ubuntu16-04/index.html","32b9f873b60534e285f3cbd9e94b76e1"],["tags/Vue/index.html","f5e803f980f0293d52806ebb8f92575a"],["tags/X-Frame-Options/index.html","28f93b538acafcefe0758f08a80f2d91"],["tags/aggregate/index.html","ccd6b3d721c9f6e161fd6952dd0491b6"],["tags/alter/index.html","a5fdab2b2d0025dae8fcdd527909ad83"],["tags/annotation/index.html","8ac6fad7b16a0ff11561c5d6e8580ad8"],["tags/change/index.html","022a2086d958a15e7d6526574085c200"],["tags/checkout/index.html","926a9b23d43a80e9c826f030f1ea5600"],["tags/collection/index.html","cc17ce7e9e81408b475ca81b2900e882"],["tags/component/index.html","fb4846759f74eecfdbade3d824789f34"],["tags/computed/index.html","46354585379dc1cf4f532cacebe9457d"],["tags/create/index.html","a385601581cbb3a29d81ab55285a8615"],["tags/database/index.html","22089d4e68c355a0d751a0c8520d1217"],["tags/df/index.html","cb6cdec6ae5f82bb98324a7b2e18b254"],["tags/diff/index.html","57f1f0a5d479054be341cfe49298ecaf"],["tags/driver/index.html","b1f7922c140920a76d6fa94aba3947f4"],["tags/du/index.html","986eb4dc2c72af3ab4faba65b33c839c"],["tags/fast-forward/index.html","f4b6933a67e4772f6393f50d01a79f01"],["tags/ff/index.html","9cdc2d88e1737f1866b8527ed1a11899"],["tags/font-size/index.html","ffe4b4bd259f64542ce82231354b5cac"],["tags/font/index.html","acbdf708dcb22c54c3a0e8c760696180"],["tags/git-branch/index.html","604d4b2d0fefd207b0e1c145ac10eb2e"],["tags/git-index/index.html","82ade80f929a0d70632b00ed801d7e05"],["tags/git-merge/index.html","bbd72671049c0b1f4341096fe388cf04"],["tags/git-pull/index.html","6d26e2310d7519e56202fef903079fb6"],["tags/git-reflog/index.html","f44bb591c8af824038041440738718d8"],["tags/git-reset/index.html","f6a7101bb6d4bd6938a82e1527729c7d"],["tags/git-revert/index.html","ea67c1a5c69803e0f94ae08120a82432"],["tags/git-tag/index.html","c0f28b346aff4c1d0f0cb5139ca29713"],["tags/index.html","9f065a33d420983a12866f18c7fac184"],["tags/jps/index.html","e8e513ce81bdb39c68bded9bb0228b68"],["tags/modify/index.html","749d8b36dbd8798e67c44e1db5cde461"],["tags/no-ff/index.html","305e23e6bf985511a4d97c8a158184ca"],["tags/rewrite/index.html","468ba56fad55bbb43218293c2fc4e445"],["tags/schema/index.html","81a466f6cf398b3d23ee25811fc11558"],["tags/shell/index.html","75e1bcadafd237d3ab71eab8397baaa6"],["tags/shiro/index.html","cf3b4dbc8bb26d39e56eba985dd99f47"],["tags/synchronized/index.html","0c28df63ab51892b52d2684a3917c46d"],["tags/this/index.html","bb02c8e861f59f442f1cab25d94079c3"],["tags/tomcat/index.html","6a374d01363fa0d3decef9bd995a0500"],["tags/true-merge/index.html","3954ba65a907b8fcbe3084bbe85f3efd"],["tags/url/index.html","da379e004b62a86a82688b2d3d74f097"],["tags/windows/index.html","d9c9257876d1090e89034e7f1a79fd78"],["tags/一棵开花的树/index.html","bcd42e766a70ece3c1ab040c27ba3f35"],["tags/介绍/index.html","a7b189d8223723968a484f48928166e2"],["tags/以太坊/index.html","df7cef87add9caa9bc479e036d769237"],["tags/依赖包/index.html","720f4300abb59e3295c803ff03f1e33e"],["tags/修改/index.html","93f6dba93e2780602859c56a6dae26bc"],["tags/冲突/index.html","8621d92097f8aa380e3b227a072afec8"],["tags/分支/index.html","6b0e6743b8cf97a280f8e13f24fc0795"],["tags/创建/index.html","5e8d40d65176e85b6f27ff06eb2ffa04"],["tags/创建数据库/index.html","55862bcdc73278090c28a8a48cbf9964"],["tags/区块链/index.html","87a70b3815bf450bdfe0a9822e7da616"],["tags/升级/index.html","195b550d452a43f128e27da76ab63f66"],["tags/存在/index.html","7301e448f2abc76538c8a86a360ed5ff"],["tags/学习笔记/index.html","c04762dcdf580808417f4468e4f94283"],["tags/实例/index.html","ac37470ddb3095404b5eb0344ef3493d"],["tags/工作流/index.html","93ac17b1e33bcbfdb01b8536f9845902"],["tags/工具/index.html","1154f74a7166a995a9a895b9fee41973"],["tags/席慕蓉/index.html","3523407d398b2927eeeff678c3c894bd"],["tags/微信/index.html","cf86251b0ecfe2d6c7ef1fefb9f009e0"],["tags/插入/index.html","d186929a88e0de1949ed3138ef78447b"],["tags/数据存储/index.html","e90d5dc57c6a53afc562b840d855c4a8"],["tags/数据库/index.html","fdd807264f6584b4985a95a4bada2299"],["tags/数据集合/index.html","3c50de457f35fc30619263a1730fbd08"],["tags/文档/index.html","e4ce6f57fd6a64824fc902587d9050e2"],["tags/文档流/index.html","a0feda6bc16f753d13239cfe800a6ef1"],["tags/智能合约/index.html","efffb685610fa1260f2877720cfc17fe"],["tags/标签/index.html","aca46ac4fbe2f0563d9866ae1ad38e25"],["tags/模板语法/index.html","8708342622185cdecb90a59b341d3e72"],["tags/比特币/index.html","5d3b4f7a28ce5c6d503d9b66c70a6e69"],["tags/波浪字符/index.html","060bf59ae52969bdb253307db4b6c803"],["tags/用法/index.html","f613adeee0f34e3d1bd7ff91d033af9f"],["tags/穿透/index.html","0183acc4b029c20ae753a59774147993"],["tags/笔记/index.html","c92fdb3ce4695df7c6048947c82369b2"],["tags/符号/index.html","6a87464052767a6d65bc3f38a1affd71"],["tags/组件基础/index.html","168436ef69cf754a11565ec705374bee"],["tags/绑定/index.html","cd82863025066abe93b74480f399b60f"],["tags/编程/index.html","c23a79ae23561224fd1b48754074af67"],["tags/聚合/index.html","eebe042963b49feb718a69a63296f51d"],["tags/自定义指令/index.html","8032647df7b29117a0bf05d70f5e6ff6"],["tags/计算属性/index.html","f264d784075c43f136dadd5a51e3c978"],["tags/进程/index.html","42d327bd875b68d373c4b370a5c54c20"],["tags/远程仓库地址/index.html","8a5b9cd2173ed5d4003e39b70e698bc7"],["tags/逻辑操作符/index.html","bbdca40a182a3de6eaf0f040b9767b52"],["tags/部署/index.html","11933e08c7553f5a1bcf0548eedda13e"],["tags/难度/index.html","d1218436fad10507637f6099f7a156e7"],["tags/集合/index.html","f5de739cf5ce4e05a6d3d7c9300ad568"],["thinking_in_programmer_life/full-stack-programmer.html","5199df9c35f1045f62341a3a46959b02"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","5b91638e91676f069fea1ec9cf8838fc"]];
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







