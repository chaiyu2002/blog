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

var precacheConfig = [["Kafka/kafka-introduction-note.html","ff4d18db3f0247753777f56a4c80936e"],["Kafka/kafka-storage-principle.html","315255f1eca8e74917c71ba6e55d39df"],["about/index.html","5f6d1ea8150b519acd5042e91b639d31"],["archives/2018/06/index.html","1528d20f7559f7a9dbd42dfe08714653"],["archives/2018/07/index.html","064a320a733263648ca12620c276a56c"],["archives/2018/08/index.html","8ff3e0485aa46250aa244c10ebd1bc84"],["archives/2018/09/index.html","a08b88b97cdf80a1f74b845195d39ee5"],["archives/2018/10/index.html","d096eb1cc3590c4891ec0a6a924fe56b"],["archives/2018/11/index.html","32fdad14f9449bdd7f6290fb06d52b02"],["archives/2018/12/index.html","2190b53f816f62b7706ff4d743838529"],["archives/2018/index.html","263e21106c17488d8d6fe88ff48e28ba"],["archives/2018/page/2/index.html","7b33bf6581c4c53c9bba9f245e6bfc51"],["archives/2019/01/index.html","6bc8878c93e28ecb06a44dda7ff512d3"],["archives/2019/02/index.html","8f6d7a3221127d7e88700a7efb882567"],["archives/2019/04/index.html","91ad385033a030593cf5bc22183deced"],["archives/2019/05/index.html","e244d6427f70d503fc01dfee25e50bff"],["archives/2019/06/index.html","7a4d52e378ec45e6d1a7ebfb418a907b"],["archives/2019/index.html","7451be82570e45e2802a6344ff495f00"],["archives/index.html","62e38947403ebf5c667a6742860ceecd"],["archives/page/2/index.html","e8ee80663443f943c23d76104e14e155"],["atom/index.html","d5c692322772332de3621bc2d09e509e"],["blockchain/base64-base58.html","2e05744db6eff675f53769b5e5a2222d"],["blockchain/bitcoin-data-storage.html","81592efb58a4d47eee20018e88ecefd4"],["blockchain/bitcoin-difficulty.html","6adb1d93b08323685ec09e4bb6010d0b"],["blockchain/block-chain-ethereum-contract-program.html","7482c3c05c6f9a44cbe648a6e2b8f1cf"],["blockchain/ethereum-programming-introduction.html","ea3ea95591d04995aef7d6dbf25f0e5a"],["blockchain/ethereum-rationale-introduction.html","661a7c6a3b1a628d4d2a82c96c9cb3a7"],["books/index.html","15864ce93d7e2c6a39627b47b1aa6cb1"],["categories/Blockchain/index.html","e3dcb7b5b72c2cb96fc2530b982d679f"],["categories/Blockchain/以太坊/index.html","4a0a28b6c6410e8579e2ff0137c21e51"],["categories/Blockchain/以太坊/智能合约/index.html","3c9bb154d50be841ac8e2e164b404668"],["categories/CSS/index.html","257857eb74d150831d48eb261d89d294"],["categories/Design-Pattern/index.html","302567f735f7e02ca9258cc2232c7e78"],["categories/Git/index.html","e69993bc5bc9748743137d48b13c3e4a"],["categories/Java/index.html","02d484a33041eaf8bc167992d41ee54a"],["categories/JavaScript/NPM/index.html","7fa605adf74d7566b9ba0dbaa0150413"],["categories/JavaScript/Vue/index.html","5938cdb102b3bd3fbb88e267e3c02e82"],["categories/JavaScript/index.html","6a3f4fc09f6ef0cd3007efec47582fd8"],["categories/Kafka/index.html","6ede2e8d3d15073e25d32caa27d9d5dc"],["categories/Linux/Shell/index.html","492f1ed2ab8c093218f1974f8692f676"],["categories/Linux/Ubuntu/index.html","43f5566758257e7af7f9d6291d26d670"],["categories/Linux/index.html","b99ba5492d7e6cde24cd35895cfc1e4f"],["categories/MongoDB/index.html","89e1fd7645d75a5881d5d580b615b8b3"],["categories/MySQL/index.html","875841e5e2a1165933e6627524df99ad"],["categories/Python/index.html","7306178decb9d21f07b88060591b0cd5"],["categories/iOS/index.html","41f14b95e8600af751ce35f2e35ab944"],["categories/index.html","7ba23953d82c8b3730dbcba194233e83"],["categories/微信/index.html","06258904a875a1bff2a3397df972fcb7"],["categories/杂记/index.html","f147c0198e24aa600384cf299ce95ed1"],["categories/程序人生/index.html","0d9c19e43be6d69112472c78168fe9a4"],["categories/计划/index.html","60cb5584863702940e3ed8c35ad5ffc6"],["css/css-font-note.html","b15d75b1be0aa1fecd86e7b98a209e97"],["css/css-normal-flow.html","5fb302a7f79bcbff0785091cfd3b5e6d"],["css/css-sass-introduction.html","5d709fe48aaeee3d0f8e84a11a9f88ae"],["css/main.css","eab7b16a4b787816ff297d9e257d760f"],["design-pattern/chain-of-responsibility.html","1cd74305680ab9a5df2a470c44d5bffa"],["design-pattern/delegate-and-proxy.html","af2ebf3a928ab57170572a55403193b5"],["drafts/configure-multiple-vue-project-with-nginx.html","f63d1a65347836170fa4c27ffd0bfae2"],["drafts/iframe.html","52a55255d26d20d304f820a3a9949ebd"],["drafts/record-re-install-mac-os-10-12-6.html","c5babb6b3986a37f663a223239f6d073"],["essay/note-ximurong-tree.html","ad297211fb62246411450b3e1332e6c8"],["git/git-DETACHED-HEAD.html","86175e061d9b1e06f6adc850cc26fca0"],["git/git-branch.html","c7470fa90438ba2bf1b14c43e859ccde"],["git/git-change-server-password.html","51ec371ce8a6a22a4cf2cef0d7a06356"],["git/git-checkout-1.html","8a6bb91bb370119edb79748772014fec"],["git/git-checkout-2.html","fa64e7b77c08bdb2f688ff12a75f1b20"],["git/git-diff-m-symbol.html","d413dfcc2355822d0a992738b6c937ed"],["git/git-git-flow.html","fc751cc2a2989da573d27b067e30b480"],["git/git-git-merge-ff-no-ff.html","3789c2cd0e3867443cb508d206203473"],["git/git-git-merge-true-merge.html","7e752b70172fe922fa24681b457ea2bc"],["git/git-gitlab-flow.html","51f473f07b961cc1949dac7286bc0600"],["git/git-index.html","e2800b5ff426319e95b17c0ea2ba48d1"],["git/git-merge-choose-one-side-code.html","5ac86fdda1890f5eace0231829848c94"],["git/git-merge-exist-conflict.html","e27ba1922fb420132e4da16df43424ce"],["git/git-pull-1.html","c8a5192a3caed13aa8e24c15a306e401"],["git/git-reflog.html","2103cfbe738b591cc23ac64d3200cddd"],["git/git-remote-set-url.html","abffe88a5c75b1389a019abfcc8a2cb9"],["git/git-reset.html","4362f350c282f6c4e22ef3fea2f86cc0"],["git/git-revert.html","34aa822e2193f5684b6cea0c2f103037"],["git/git-tag.html","0e45fdaf3c295674cfcbda06a1560590"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","795e3575b83b9a8b3174591ef83ec113"],["ios/ios-oc-kvc-1.html","a093c18bc14772188085e5e64ba9e411"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","26f8e6cf421e2f3cb467aacdb6e9b1d9"],["java/java-annotation-request-response.html","a920bda6db1e553aaf1f48002c262821"],["java/java-array-and-container-note.html","0e42a940daa3b904b30b366a4fbd99e0"],["java/java-deploy-resource-folder.html","b0b77c73dbcc8014a227a9fd770671b1"],["java/java-jps-note.html","3857af323ec7a6338a44b3caf75fd18d"],["java/java-pojo-bean-note.html","cfd46ba1b99fa816c73fde52f6ba8629"],["java/java-shiro-note.html","3b89021f567b594c17ecb36573744e3b"],["java/java-spring-autowired.html","fafd18074b35984863ca2474260d83c7"],["java/java-spring-configuration-bean.html","47fa69fb1fed8fb70e524b977a42a810"],["java/java-spring-restcontroller-note.html","ee05c56f34ae1488465e4b400ce7e7ff"],["java/java-springmvc-X-Frame-Options.html","2e8b473bd2d75b27f93a83a398c1bd35"],["java/java-synchronized-note.html","4ed83c4e126fa8664411e4a42eb26aa4"],["java/url-rewrite.html","6864d870edf32dd23b3c90d5af920526"],["java/url-value-pass.html","51858b5aade235cc26f105aafc4164e1"],["js/js-logical-operator.html","cd033a133a8757e6f1d59274a4514649"],["js/js-npm-symbol-caret.html","1b0f99b3e3c7b525450f6c2d3eaed0b5"],["js/js-npm-symbol-tilde.html","a9f01dd72592b8174dc093527f7080d9"],["js/js-this.html","e96cf6f1c9e1434ace9ee7b4e0c3ba4b"],["js/js-vue-note-components.html","3a1b145c27aa599262adcbbde6232cbd"],["js/js-vue-note-computed.html","24f1ecc79a461ffac3d9ee80c4673a21"],["js/js-vue-note-css-style-binding.html","b20626755d4db7ecee86b9fd8e323fbf"],["js/js-vue-note-directive.html","69a1dff581d7eb82800b9012b9dd8bdc"],["js/js-vue-note-instance.html","aa231c14dc65878d6f8fadc97487339a"],["js/js-vue-note-introduction.html","4c6953b9018dd4af61eb7e61b6e5ff43"],["js/js-vue-note-syntax.html","58c13051746e637cfe8b711829e90901"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","2a683d7ad13508c71a3876c5ffe78ea3"],["linux/shell-command-df.html","9288b7111d7cb7b6bba7e66c00175ac0"],["linux/shell-command-du.html","d2b322e15c4f5807e33489c551cfb891"],["linux/shell-command-netstat.html","25d29350cfdfea79b4c86484bb0aa0f2"],["linux/shell-command-sed.html","450a383828e2d988dfa80e5824a35c84"],["linux/shell-command-tar.html","cf40abb9324cbcb3ff91ffd53de7c511"],["linux/shell-command-top.html","18d604fde60f88e545588f9ac0fbef7d"],["linux/shell-command-touch.html","d074e8cfd987f2978edbe7d4a5153a81"],["linux/shell-command-which.html","7f5cce28d1722a173328f25d0d222916"],["linux/ubuntu-user-add-delete.html","3e5ce416643324e220f4236f8358c854"],["mongodb/mongodb-collection-aggregation-introduction.html","6363a01040360fd1d2c49bdd795b9035"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","dc8b43773e1587c5a5a8a6fb109af69d"],["mongodb/mongodb-collection-create.html","157b103b71ec44558450880e2a1bc096"],["mongodb/mongodb-collection-delete.html","6f1250d1699503764e90a40fc2d332d0"],["mongodb/mongodb-collection-find-1.html","a63783f68e20158e521aca9dbe488be4"],["mongodb/mongodb-collection-find-projection-operator.html","4c77204eac3b8f01269585d6ab6e5032"],["mongodb/mongodb-collection-insert-1.html","1a8cf5ef93e23f3cb9ca1a36b261e9a3"],["mongodb/mongodb-database-create.html","9aa59f349617ce5a5624994621bd6e3b"],["mongodb/mongodb-java-driver.html","051f3aed983542eade7d191a66542bac"],["mongodb/mongodb-schema-design-note.html","837e491daf22a2a4cb2614f7314573fa"],["mongodb/mongodb-study-note-1.html","400d1a40e501fcc95604c7069f6e29d6"],["mongodb/mongodb-study-note-2.html","1cbd80d8e8f1f48ab0557e16f3f3761e"],["mongodb/mongodb-study-note-3.html","cb4687bb18d236d28d57462d4f7ffae0"],["mysql/mysql-ddl-handy-book.html","2bc995203a57f702943128561d1fd994"],["page/2/index.html","2e8770ec33e265cdba4db7121be1ccc4"],["page/3/index.html","03097a164c4d59874dace28dafcc3605"],["page/4/index.html","69124e2e740ea6c8374183f3cd9eef5a"],["page/5/index.html","03939029fb47ce9bc2543166a3a51257"],["photos/index.html","be0dbd2861f9a942432d3ccc344de3d9"],["python/python-args-kwargs.html","2f8eeee420b2a1813d7aca0658a6f18c"],["python/upgrade-python-under-ubuntu1604.html","35c84e3bab525900e1d2f7555a767ff1"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","c39f7862d5f85d958a20d9f888fe8ab4"],["slides/index.html","96d117701f06adb0654a44456aefe616"],["tags/Autowired/index.html","5a7c6fcd2f6a6f5f9e3db0fdab4a569a"],["tags/Base48/index.html","32adb1fcb1992af8c2090458122a79bb"],["tags/Beans/index.html","a281bd4f39399d07f87adc6ff23a134d"],["tags/CSS/index.html","098d0ebfb019f4c4f99da8c323286448"],["tags/DETACHED-HEAD/index.html","15471f38e94c50feaaeb65279add1c2e"],["tags/Git-Flow/index.html","9e361a5a2b6e3de6e71991261019c21a"],["tags/Git/index.html","fa9d7ee5a3099940d64127480b6f0f4e"],["tags/GitLab-Workflow/index.html","6dd3d5496fb8acc929759a6c09c2560a"],["tags/JS/index.html","b2ca3935a3b277c9c799d9154f8ebe5d"],["tags/Java/index.html","9e9816a16d1fe37684b06d32ebb0bd0d"],["tags/Javascript/index.html","4ce700a1f7815da677c7c73a6a536a7e"],["tags/KVC/index.html","c43c08b7d75d996e8e27a8abed063ea6"],["tags/Kafka/index.html","a8c3ca8b01e6db768e71382ec17c6e33"],["tags/Linux/index.html","addfa2842abe5dba320ee1223e592c81"],["tags/M/index.html","9b744bfc03f4a9a2be34791fbac2a68c"],["tags/MongoDB/index.html","6f8c237a0e801c3531f1bb21c92ee93f"],["tags/MySQL/index.html","61cc505e8c7ef58f43d21f5a13b4ff2e"],["tags/NAT/index.html","521adabeb9af8f830906408643843b6f"],["tags/NPM/index.html","10e2527aa3bbf574e3315adec268b33f"],["tags/OC/index.html","417dfb54a3d86907e44cd929f482148b"],["tags/POJO/index.html","7a7b94b4f179af520bc3ee63079bb1a2"],["tags/Python/index.html","f5bd678da54b732cc0a4203dfe07e78e"],["tags/ReactiveCocoa/index.html","9e4d65389551e1cb3a3cdff73b1f0957"],["tags/ReactiveObjC/index.html","147157e8fbdb260801517e965a910501"],["tags/Repository-not-found/index.html","f25868ae404a8500677291cb2a4dca05"],["tags/RequestBody/index.html","fc9275982ec3df0094ee2c66365f71f8"],["tags/ResponseBody/index.html","b2b79c2c9fb2f8a377b238cd058eece1"],["tags/RestControlle/index.html","9b103669f737715c056fd133fe64e3a9"],["tags/SASS/index.html","94a72f1594509b26abd1cc042dc1e0f0"],["tags/Spring/index.html","f749326d64c7686742ab0e024eab5176"],["tags/SprintMVC/index.html","4f283649407e782564de95f3fcceb9ff"],["tags/Style/index.html","a302769294bcb93b0e06a7210b19bfb1"],["tags/Ubuntu16-04/index.html","a4489066a9c566d6e104dd7e3bdf2817"],["tags/Vue/index.html","e662a54f26817191a89dd0856ca08eef"],["tags/X-Frame-Options/index.html","0cf761dd6c084113633d3d9ef91d530f"],["tags/aggregate/index.html","767ca0f0f01add1a8de0f90b45c8acd4"],["tags/alter/index.html","c8816977cdf8357315d368a5f296acf1"],["tags/annotation/index.html","70065bb7eb1a7cb850ec48c2abadaa5d"],["tags/args/index.html","584069ac4404cd64b4bd3366969288c7"],["tags/change/index.html","230349c2fea1e7f0a721739166ee9ef7"],["tags/checkout/index.html","a0663b9bba0732a16bc8bbb711eb319f"],["tags/collection/index.html","d1321042c2cef50090fd908fbe08a4f3"],["tags/component/index.html","9568bd48c3db3ef166080301e7c82c58"],["tags/computed/index.html","7a257b965bba53b3ba33c462a42f3b85"],["tags/create/index.html","b730f5fce614315205c52fda8a70b812"],["tags/database/index.html","25555fc7d78725019875c80fd9cf199e"],["tags/df/index.html","3f81245a11c3324900a71218ee14f370"],["tags/diff/index.html","17aa1dba0d33b2df917c0179f5ff1e68"],["tags/driver/index.html","e89dc203124af903312dcc0cc504a030"],["tags/du/index.html","bdbb9d9d6714d5f7618ca61ec87b2e6e"],["tags/fast-forward/index.html","b60208f004e6b704b135b0478463268d"],["tags/ff/index.html","7ebaec10ca7acdf02f6743627548eb15"],["tags/font-size/index.html","f823a4faf9d90f0956c85573869885a9"],["tags/font/index.html","7448243f005399074d2c152ae88ebd2b"],["tags/git-branch/index.html","e9f5697c2750872fa4f50838851e037f"],["tags/git-index/index.html","cb8543046eb57380114c85e164fd9c10"],["tags/git-merge/index.html","e5d23637fbc44b3827f1319cabfaf34e"],["tags/git-pull/index.html","9bd7e77b79476b0a28e6bcb8cdd0a2fa"],["tags/git-reflog/index.html","ae887c44fc17c8a140479dcbbf259c1c"],["tags/git-reset/index.html","ec952a56b77f986a735a93dfb700d036"],["tags/git-revert/index.html","d01233553d734e677ddcce3f89b46d6c"],["tags/git-tag/index.html","387f2c9bf0653778116ec21ecc8cfdfa"],["tags/index.html","5d6bb2c4a58f356d0ea73a77e151d964"],["tags/jps/index.html","31c93a45aa13c71f33def7c436c53386"],["tags/kwargs/index.html","9b61421ede48a8f9b48640afa46925b1"],["tags/modify/index.html","33e04e70a69771c33181fa1a6a55b872"],["tags/no-ff/index.html","b34442ddb7d3532f7e52f83adc427bb4"],["tags/rewrite/index.html","77989e819eec25509fc3536ea2f6d59e"],["tags/schema/index.html","a63af94bcd677651cea1d9df372047eb"],["tags/shell/index.html","949f03a2cf822d6ada8cc6f0214f7d0d"],["tags/shiro/index.html","3462ee22a7b7f391b2c14fa8215e6ffa"],["tags/synchronized/index.html","586368c1af0e591808d17ead83e65fa1"],["tags/this/index.html","8b92a664fad078e33f3e14eca75cc1f0"],["tags/tomcat/index.html","36141122d05a6a2b9311829dfb81dd8c"],["tags/true-merge/index.html","43f16cf27650d726cdd64cbfba2ab379"],["tags/url/index.html","1c1db061364402891dfc29e113476230"],["tags/windows/index.html","6b9a395e1dfaf61f82ae7d4ae357dffc"],["tags/一棵开花的树/index.html","a0deb8c24482623f57910f34a02e0a32"],["tags/介绍/index.html","f224c7647c70a24b1e75355be99ab4eb"],["tags/代理/index.html","0d9c440fc4223bbebbb983b8fad734a4"],["tags/以太坊/index.html","6cbafe88f4f3b597041f3a8df534aad4"],["tags/依赖包/index.html","f9e6154d1e50a36c7d2ac8f491464bfd"],["tags/修改/index.html","03ba19f5aee8736b674c821aca0dddce"],["tags/值传递/index.html","353c44190bdb2e262f2d4167a4eddc2c"],["tags/冲突/index.html","14ecd15657efaf1707059b56cce81b7f"],["tags/分支/index.html","a6f81030d7b1242ee98aa1ac1e70de6f"],["tags/创建/index.html","9e498f2eb1198b6bd3e01661178b17b1"],["tags/创建数据库/index.html","a9af5bef8948744c23205e0f4c6bfd46"],["tags/区块链/index.html","fde32a5e351a1b8e958ad67f9228a072"],["tags/升级/index.html","1a9405979617d0be6f3d41a5bb023789"],["tags/参数/index.html","b14fb4dffa6a31f4f8ea664f223c2c8f"],["tags/委托/index.html","9c4d36362d93d828e5ceba763d818d9a"],["tags/存储/index.html","e20bbb25b8595836ae8e5a37c6bcdc19"],["tags/存在/index.html","0b567dc312c0a12f1d32556c7db1b30b"],["tags/学习笔记/index.html","178380d1dd8418196e54d758affda420"],["tags/实例/index.html","8414750cbff64b55256158af81c29a0c"],["tags/容器/index.html","c94da2b8ea0a91c4ff7048e4b9419199"],["tags/工作流/index.html","430889c90f220a2dd086bdeb9c907dec"],["tags/工具/index.html","ed1eac35f1731e136287ac9565eb17c3"],["tags/席慕蓉/index.html","bbb8b562d783be6f6590632edfa610ed"],["tags/微信/index.html","4725a8612fdf8385468153b2e126e7a8"],["tags/插入/index.html","a0f327867e4e7039a535a1fd5f3c970e"],["tags/数据存储/index.html","c461faf3b55d0699707888c2fdbfe881"],["tags/数据库/index.html","d20924c5115038eb91b224def9345126"],["tags/数据集合/index.html","ebe276d64d32b6fe71292354e771c220"],["tags/数组/index.html","23fa1c83536083e88675de69231ee364"],["tags/文档/index.html","58ffecde5a251c7b54ac518159484b4a"],["tags/文档流/index.html","b66cad335c56523b6dbb8ec4dd3e1906"],["tags/智能合约/index.html","ebe869cd211e5e3e3b242431b49daa7a"],["tags/标签/index.html","85e0f68815601609fb7612b8dbe00bac"],["tags/模板语法/index.html","bdf537997d2c543591a6a0c126337ceb"],["tags/比特币/index.html","18af574cf5f06dbecc300f7b4c493c99"],["tags/波浪字符/index.html","a65d71a355ce853553373cd6fa86fae9"],["tags/注解/index.html","555d09f54c5cdc60090e524743ed5fad"],["tags/用法/index.html","16bfdc0d3d73c2a22dbe536c6fdd6d5c"],["tags/穿透/index.html","226f9cabeeaa843f74227ea8dd553cd8"],["tags/笔记/index.html","a271682a89d688469fc5f6db5bca2ec4"],["tags/符号/index.html","a4a4e2d2bfdfd39e6c3fb0b649e79afc"],["tags/组件基础/index.html","65afdaab1a3a7b3954f56c48d304a9ad"],["tags/绑定/index.html","c873eb02c4b15d7c7da7f6c436c8b7b2"],["tags/编程/index.html","71d1c1c9f510ca50c5cbde2ac2ed786b"],["tags/职责链模式/index.html","0055afee1018324f19029e83d93d0d37"],["tags/聚合/index.html","cdc7ced389151f16ec05c1ec6ee83b3e"],["tags/自定义指令/index.html","1af62e6165fcd82050d6fe97d224d4b2"],["tags/计算属性/index.html","cb950d8c7c6e4be6df86578c770092fb"],["tags/设计模式/index.html","8ffcca65cd3c568affdc25fae317a163"],["tags/进程/index.html","f9744b6f1bbd740251bdba44364bf281"],["tags/远程仓库地址/index.html","05be598c7038f3daf12a9a508aa4a6ac"],["tags/逻辑操作符/index.html","0d642892700e1f7ab24183c074a4275f"],["tags/部署/index.html","6fc6e56d0fa43908623d3ec5d980537b"],["tags/难度/index.html","a6b6159b8a8e94c5842b3e7080d544f4"],["tags/集合/index.html","94613e2d5dd0598cef8608c2041f1bbd"],["thinking_in_programmer_life/full-stack-programmer.html","8423229c5d96470a03aa5474f7821e39"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","0ccbf6007f53fcfb99ba83cc51596ecf"]];
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







