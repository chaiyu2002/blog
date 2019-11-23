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

var precacheConfig = [["Kafka/kafka-introduction-note.html","4bfbc1f1cd0791ca7dbafe1d95d3dc55"],["Kafka/kafka-storage-principle.html","b5643c9235b7ae45edba76d91b3a88a5"],["about/index.html","455896252247e4dfb9262b86d7c2fd1e"],["archives/2018/06/index.html","f4493720347182ef1633061b0310b0dd"],["archives/2018/07/index.html","68888c1002dba0c8aacad59809463014"],["archives/2018/08/index.html","c43e1f02375a21ead80799ab87ceaf78"],["archives/2018/09/index.html","2eecb4fe2d1a68dbc9842e74f5a46e15"],["archives/2018/10/index.html","9521b9f59b93baf6aa59d57e2de1c0ab"],["archives/2018/11/index.html","eb1fba11a3270af3112ca79d4e4edb31"],["archives/2018/12/index.html","0e13935d2b52bf3632ab6c546b5ef121"],["archives/2018/index.html","5750a6fa0ced6455d7d06bd5007dfdb7"],["archives/2018/page/2/index.html","f650bd0d47ba9e0fd58681de2272d86e"],["archives/2019/01/index.html","1e35f080461c81ce0536e7ea4c83e875"],["archives/2019/02/index.html","7549750d817cedf6a9285f1419e2bfd8"],["archives/2019/04/index.html","bf468772e6eb983c82f9207e231f038e"],["archives/2019/05/index.html","96a203ae216422c985b15b4005b26425"],["archives/2019/06/index.html","2a3a539978f8811be6a2c59932a67e2c"],["archives/2019/07/index.html","76061114949f814adae3f8d0690fffa8"],["archives/2019/08/index.html","d2068998169b814112e787a789382306"],["archives/2019/09/index.html","a1bde976f1944f490b42f6b517475a38"],["archives/2019/10/index.html","80ca0d8cf8191ebbc828e4d7c22b4e0d"],["archives/2019/11/index.html","1cdbf6e9da0c6bd2f6ef3945b2c3f043"],["archives/2019/index.html","4e7716928c287f01e53b32d3d8a4b795"],["archives/index.html","949ff332175f2cb2f3f1e80cf51a9dd0"],["archives/page/2/index.html","e4252d88478e87d61edd5359762aef9a"],["archives/page/3/index.html","8bdf98d21309753a54df0e744cfebb55"],["atom/index.html","1acb8cfb4d49089bf79eb941b9ef4173"],["blockchain/base64-base58.html","ba28e41680a445ee5dbd50b2bf7efb73"],["blockchain/bitcoin-data-storage.html","565c78745ac9ca8f8fd2380bf1868070"],["blockchain/bitcoin-difficulty.html","cd4efbd3a28e502f1b70e778806562d9"],["blockchain/block-chain-ethereum-contract-program.html","6054692e849cacfd35f008dec5b0b7b2"],["blockchain/ethereum-programming-introduction.html","d7cffb9ea4570a96ca2a36ea6f791137"],["blockchain/ethereum-rationale-introduction.html","020ffd41e40e3493f7c02c7682ecbc6e"],["books/index.html","b6b1f02231effb30ff11562df1cb9635"],["categories/Blockchain/index.html","2ed1fd4deface4a92d86ffec3a02f8f7"],["categories/Blockchain/以太坊/index.html","a2a6b371d329142f37d54ea1657ee8ff"],["categories/Blockchain/以太坊/智能合约/index.html","628affa601e2695596d95804f9b4de7e"],["categories/CSS/index.html","0dfe430e72797794c77f0371426ee24d"],["categories/Design-Pattern/index.html","ba3ba5e62f831f60d86aac6a7d6d7050"],["categories/Git/index.html","bd5ce334648374747a8c0826cff854dc"],["categories/Java/index.html","22e0700edfb6cd6f0c1a0c21913849b0"],["categories/JavaScript/NPM/index.html","701b043dc8612a2ad7a413f854118457"],["categories/JavaScript/Vue/index.html","74f1297c9aba0f82b656c69edc5c4748"],["categories/JavaScript/index.html","ec41afe35a957df0794a031a1339c1b5"],["categories/Kafka/index.html","ac7228d77e8382039ba5e64fa03eb541"],["categories/Linux/Shell/index.html","9f041153545f81bd28c499336e72e5b2"],["categories/Linux/Ubuntu/index.html","f03e18d0c10e524e4a29f41016409578"],["categories/Linux/index.html","f5907ee1693b8d3fa76aae6af827bd3c"],["categories/MongoDB/index.html","d56ddd0150744344da7541825bc04851"],["categories/MySQL/index.html","b0c913d6af8b40add58cfc55ced31768"],["categories/Python/index.html","a4e429a557feb00ff997bcad72a2b4c4"],["categories/iOS/index.html","0a8cfac4a683a3f66f5e4866d9e07c90"],["categories/index.html","c27a19e14728a5da965eea2946fc02c1"],["categories/微信/index.html","b069733845e857f09c301c89ad9c9582"],["categories/数据结构/index.html","798a74faca7e3b191bffab2696f22886"],["categories/杂记/index.html","d0c2e9faae4218dd3e9779c797bd159e"],["categories/程序人生/index.html","b05538c60c1e9d787bf8566d4938054d"],["categories/计划/index.html","3ae9ba05a526b85ad6ed964858c66330"],["css/css-font-note.html","d0a639fac18ee373c8edbfb9042177b3"],["css/css-normal-flow.html","2d2f9116c840fd322df5f769cf3bb573"],["css/css-sass-introduction.html","b5fa609c5f9575c24bf056f9994eb398"],["css/main.css","f6f7734fe0839455e0e8e066c3fd380e"],["data-structure/B-tree-note-1.html","f6e332051f7b489453a30c162a5daa8b"],["data-structure/Binary-tree-note.html","3700446d5b223b8cb9970a6c210d1186"],["design-pattern/chain-of-responsibility.html","ef7ec819aed3cec9d05e41995abf9e4d"],["design-pattern/delegate-and-proxy.html","ca09bc868703d6f2e21b8bdfbe4b7023"],["drafts/configure-multiple-vue-project-with-nginx.html","c621cc1085bd3b98d749a7f9686d9e22"],["drafts/iframe.html","82f7e255722d8c2a1fc60a2716eaf655"],["drafts/record-re-install-mac-os-10-12-6.html","b7649957d3034f27ccd4c3ba056f7e6d"],["essay/note-ximurong-tree.html","abd4f4b086636271ef9c41ae27bec757"],["git/git-DETACHED-HEAD.html","e3909e7c79efc2771bd1d187711228a9"],["git/git-branch.html","61de517b96b81be6757c238de5ea3854"],["git/git-change-server-password.html","e42dc2f2d45db012b7524f773ecbbae9"],["git/git-checkout-1.html","d8c9fb524bddf207071104f553d9305a"],["git/git-checkout-2.html","759f9d15476f7059464bb384ec89c53f"],["git/git-diff-m-symbol.html","740108e314b67a851535a48e2b70eabd"],["git/git-git-flow.html","8a3d8f844cae1259d5337231f60a4250"],["git/git-git-merge-ff-no-ff.html","49282625c70360b1eaf7b0cc676b70e1"],["git/git-git-merge-true-merge.html","94fc3d6d1958ef98b92c07547c1bc3aa"],["git/git-gitlab-flow.html","7d9f61db7ba192d53dab39e859e66ff7"],["git/git-index.html","df9491318e179541f89518c2c0c026c9"],["git/git-merge-choose-one-side-code.html","7697b04eecb8c75c3d679ea6dafec70b"],["git/git-merge-exist-conflict.html","c6e96bf477efab78d448a821cfa61902"],["git/git-pull-1.html","67eddd8a97f6d02e684c62f1209c05df"],["git/git-reflog.html","a15d9528e410ea426a860abbe7e327e3"],["git/git-remote-set-url.html","4268fe9d39d03c194a9739af667fd47f"],["git/git-reset.html","64cc56354a9ad07823b07f6dd3b9cf81"],["git/git-rev-parse.html","143f8f6dcf75c8be701332d5f065b9e6"],["git/git-revert.html","8d05d1f7c27e2bc7b483bb108b5c5b50"],["git/git-tag.html","26b98ac214d826c56d91460ab685fae4"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","264485e6ea5b8c2434eb49d8ad65be2c"],["ios/ios-oc-kvc-1.html","9bb317deb84cbad71334c21edf06ac75"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","d4e5ca0f12fd206e899e7e1aee538ed2"],["ios/ios-themes.html","e7a89b7bbea3201c2b3a987f5e6c2f4b"],["java/java-annotation-note.html","d5530498c43dcf5c365481504e8df317"],["java/java-annotation-request-response.html","b8036b9665a3e39d4624c88d551dfeb2"],["java/java-array-and-container-note.html","a89381be2d51f9d7905259ecc67a61dc"],["java/java-deploy-resource-folder.html","2eeefaf62c1f2aa2c189306e72d33033"],["java/java-jps-note.html","c3a4b6e95e4ae701365238a4cc685458"],["java/java-pojo-bean-note.html","797bb9df430657a04c32001e7d80dd4c"],["java/java-shiro-note.html","713830acdf3c2f0aff63295d6aa3cb6b"],["java/java-shiro-springmvc-integration.html","0177c245989bf4783c98da4d68d662ab"],["java/java-spring-autowired.html","4285257a5f4ccf887fe99df2f89640a2"],["java/java-spring-configuration-bean.html","afcc19e4042c6b63c3c8303ee889572c"],["java/java-spring-restcontroller-note.html","e62c4a619c122ea7a5bd1e3b95d8d0ac"],["java/java-springmvc-X-Frame-Options.html","e228f1652e30581fe4fa255d75ce4d97"],["java/java-synchronized-note.html","819c4925e4e5b04cd0a479556ca634f3"],["java/java-value-pass.html","88e22fcaca1a071bb27df6225b1c775e"],["java/java-vo-dto-pojo.html","f18da8256efdce835da5ec8121c44afa"],["java/url-rewrite.html","108f4f853e98bee579e1bee8d1dcd55e"],["js/js-logical-operator.html","eeafe9cb0f191a14e00d797108771231"],["js/js-npm-symbol-caret.html","9690b01aad73a7c07818745f19da9c5d"],["js/js-npm-symbol-tilde.html","dd094a5ea8e251ef525ff6529d58ec2b"],["js/js-this.html","a9e02d3f04b7179e29d85592da5fa35b"],["js/js-vue-note-components.html","b41e1c6fae20117a5fdbe6de6e2673d9"],["js/js-vue-note-computed.html","e623f1778a464d1d2fad57eac2be1fb2"],["js/js-vue-note-css-style-binding.html","ba9acc488be2c24ceb45790cf060fd0d"],["js/js-vue-note-directive.html","2a4d991bdad825a03e6133540811d259"],["js/js-vue-note-instance.html","75dfdc37fa60cfdc523e6c0bbe678908"],["js/js-vue-note-introduction.html","f24be1918f44538281757e1707ffcfeb"],["js/js-vue-note-syntax.html","8aa89ad16d735936e41f85f726634095"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache copy.html","1e4a1d71b52da62ca9c32ff6d8175328"],["linux/linux-top-buffer-cache.html","5e8bf75b65b033420eae193b750169d2"],["linux/mac-find-port-occupy-process.html","0fbfbea49928b2bbf6e47f73d28d4f6f"],["linux/make-vs-cmake.html","50a86b4cf96ba8fcd5e37f1541baa3e4"],["linux/shell-command-awk.html","b584366803193da5602e1eea5b22fd0b"],["linux/shell-command-df.html","4d22abe162c103fb8a7fb15f37bdd6b7"],["linux/shell-command-du.html","0013ebb58a6be029197e2a50dccba45d"],["linux/shell-command-netstat.html","ced1873b282b362eedc3c99939c870ca"],["linux/shell-command-sed.html","034ba04e7b63c4ce523031a97ced5f80"],["linux/shell-command-tar.html","d8d9066a26928cda447a47e3359765c2"],["linux/shell-command-top.html","687fd21f6ed6e25d2019a2983d8a8a40"],["linux/shell-command-touch.html","3397f104e3255c5377c1ce4a42a6182c"],["linux/shell-command-which.html","760413f1d485429ec442012aecf3711a"],["linux/ubuntu-user-add-delete.html","40dfda36541a1986bc4f87a798e7929c"],["mongodb/mongodb-collection-aggregation-introduction.html","c08c37fec9d69650c7840737a87519a8"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","01592090b7b096108ac3dcb1b2525474"],["mongodb/mongodb-collection-create.html","7211e93e64b12889e9a015f52eaf957d"],["mongodb/mongodb-collection-delete.html","11fd18dc9f00354cdcea5f3ea66bbe9c"],["mongodb/mongodb-collection-find-1.html","a18dd38fe2669a0f91acc93a65a73aee"],["mongodb/mongodb-collection-find-projection-operator.html","af61805e08a2c876837116975025ed5a"],["mongodb/mongodb-collection-insert-1.html","8f3bb3df6ca4cf647776cb0bca63abfa"],["mongodb/mongodb-database-create.html","5cd5121b775105f4f451715f0ef7c36d"],["mongodb/mongodb-java-driver.html","aaa6db2b84ff0e7a0de6e7b89dfeaae8"],["mongodb/mongodb-schema-design-note.html","08fa85166d65e06056c29cbc85811a2e"],["mongodb/mongodb-study-note-1.html","aa6f174c4cc9fe55c10f7d0ee5682b27"],["mongodb/mongodb-study-note-2.html","9be038fa45072508fa4ce6bbb68de0b2"],["mongodb/mongodb-study-note-3.html","7511f763469685bf409f4d249aa1a3f3"],["mysql/B-tree-note-1.html","ae83de3fe884693e54b8204f957e5b19"],["mysql/clustered-index-mysql.html","ea530590c79f07f4e742987680e2ee1d"],["mysql/mysql-ddl-handy-book.html","61899aa77c51d20b8776dd2c1111fe14"],["page/2/index.html","f76f2bf607f0021061166036eb978e6c"],["page/3/index.html","b435abe4e082ee1288fa178653565416"],["page/4/index.html","496a3ead90e791ba7688b53a5644bee5"],["page/5/index.html","7f32d352690f1bcc25c1f10a206a8599"],["page/6/index.html","8d28a32a221d7381bbd9f052a5bafa96"],["photos/index.html","8819274ccc4cb300e650d15658b22500"],["python/python-args-kwargs.html","c5ecb057dfbef1d5fca707e6ddc88719"],["python/upgrade-python-under-ubuntu1604.html","51fbf610863f9c9a8992f4b03fef3f09"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","745abb5c854d2bbd3589e45c87f9376f"],["slides/index.html","3ba89ee1f89100c115041e6ea6dd5de4"],["tags/Autowired/index.html","57922c1a3ae47324615bb6c7ff48d1a2"],["tags/B-树/index.html","759905ee8ef423de30c7a945a5c50f82"],["tags/Base48/index.html","8e38daad213e3da019162630e242bd67"],["tags/Beans/index.html","e5e1871d0718ccc797ef6d49cc3bb72e"],["tags/CSS/index.html","2b2e970c46c2d08b53f2103daa87d840"],["tags/DETACHED-HEAD/index.html","466fb4b7ab68d04c99627c683bb1b54e"],["tags/DTO/index.html","548e6cc1b940c088bf480cfc3b204235"],["tags/Git-Flow/index.html","cc4174a0b55aa8cc79f7e0a181b54291"],["tags/Git/index.html","aaa4a40c80445fc02f57d45119ca0b79"],["tags/JS/index.html","e52632927e6e337f6d81956adfa417f3"],["tags/Java/index.html","91d4d3b470474ff5f7fd51d5f7e84774"],["tags/JavaScript/index.html","d668b490c37ce180325238e39eeea775"],["tags/KVC/index.html","67c3ec839c9b5895ae7b9a4aebbe49b1"],["tags/Kafka/index.html","e6d6c3ce2c6697b035998833175a003e"],["tags/Linux/index.html","4264ed1d5f6d0851eb2c499dff788ed0"],["tags/M/index.html","c6a881c740714d75059152083ae3f7ba"],["tags/MongoDB/index.html","33addd8981ecab3c433e2773cd0c8708"],["tags/MySQL/index.html","be71c4591e3e1dadb80416e903640d50"],["tags/NAT/index.html","970882c4219ae9606ece2ac32fdd2ff8"],["tags/NPM/index.html","56d1b5b3cf79fe6423a274844d904b6f"],["tags/OC/index.html","ea2034f916be0400ed3009b786e7813b"],["tags/POJO/index.html","51d29df7d0a378078efc040258ee3bb8"],["tags/Python/index.html","76a5e723cc1c47b164764ee06f39b66f"],["tags/ReactiveCocoa/index.html","3e3fb94b8b57bf39400310e683531cf1"],["tags/ReactiveObjC/index.html","4f3a236922f89376b0ac3f6cbeef9079"],["tags/Repository-not-found/index.html","eb4d99486009e99750084c9a20a3e392"],["tags/RequestBody/index.html","50d7614c655e770458e1cf1181aab256"],["tags/ResponseBody/index.html","1292e838dbbe8b66e9cd0b052567756f"],["tags/RestControlle/index.html","1397239d0ee816a9f96542456e63fdcc"],["tags/SASS/index.html","85aaea6fb874129d372c2fd90c3067c9"],["tags/Shiro/index.html","6a58093e18a3c4aecbaf8933b3779572"],["tags/Spring/index.html","e249b0f832274e7bb0d8d2c769def4ce"],["tags/SpringMVC/index.html","ffa378e0fbc110f43036810a6082da8e"],["tags/SprintMVC/index.html","3e5b3a29bccbe19b45baaac965553ba4"],["tags/Style/index.html","caaef14094fdc7a84fe64af5510024c8"],["tags/Ubuntu16-04/index.html","4b2c87c18b21679b5e3424658f6a133e"],["tags/VO/index.html","8540860629013747e633b0923512e07e"],["tags/Vue/index.html","a99d46b370887eadb83eef6758fa5abf"],["tags/Workflow/index.html","72dd8053deb673714929135bb1192cb8"],["tags/X-Frame-Options/index.html","3c47b470c69f6392b1058b289170b00b"],["tags/aggregate/index.html","05d225130a148860d1e99d0ee57bee16"],["tags/alter/index.html","349c0257a4a157fabb4923ac8ab48797"],["tags/annotation/index.html","b101e472555b5d7784f3434cf073b236"],["tags/args/index.html","fd9475e41f2d6c526145db2cdc78ed66"],["tags/buffer/index.html","9df5eb14369b199b613ded8609835603"],["tags/cache/index.html","02204a7d7aa8b4ba05d720130bbff6b0"],["tags/change/index.html","1ec7795e931904baf3b94c7e4681d227"],["tags/checkout/index.html","e18d2138dd90187ce97a9e0897402b64"],["tags/cmake/index.html","233068c992ea92070d8a1eb576b7d40a"],["tags/collection/index.html","13a18912465987c9a431b38dd7c90132"],["tags/component/index.html","0c0f8faca3b031a21055a40ef15512fa"],["tags/computed/index.html","a536252abb560bee14db64cdc8b62716"],["tags/create/index.html","9dca190d77e00dd6f89c42ef6c933b27"],["tags/database/index.html","d99cadeb9f316e60b472c5430c1e349b"],["tags/df/index.html","56ec0935d1ffa3cfe7eb1b3124ae2fd2"],["tags/diff/index.html","dbacf5c74f802f404639d3d66bf640d6"],["tags/driver/index.html","7e69acf96a68602a276d79427da823f1"],["tags/du/index.html","b9ef4ca0bce540cd33425d12a601dba2"],["tags/fast-forward/index.html","d1f38eabab84d7ca00630ab7ac415e62"],["tags/ff/index.html","38d7f758db625c551c348c15e91b3112"],["tags/font-size/index.html","9621bdd5ea8b97a51e3ff43129b6f11d"],["tags/font/index.html","d87a3c2fa803cf6f7efbbb1d5186bf23"],["tags/free/index.html","5086ba184b7d99ed83f6e12d5ac38745"],["tags/git-branch/index.html","7307a3bbb66bb5e786ce907e9ed9df01"],["tags/git-index/index.html","dbaac68f456453c598214cd2c640b53f"],["tags/git-merge/index.html","472e938a78c9acecf39a204cc02ef750"],["tags/git-pull/index.html","319f08b8a4627b49f44afe392b7333f8"],["tags/git-reflog/index.html","fd15d0925e1a312414f35e572d6e6c9b"],["tags/git-reset/index.html","13f993280c51d38964321220b1a5e573"],["tags/git-rev-parse/index.html","a6c329973734028e076d936155b73161"],["tags/git-revert/index.html","4503cf2b9f9fe4a164617f2b0cc71bb9"],["tags/git-tag/index.html","5f479e8a8cdd1995cf035a23b5af814a"],["tags/iOS/index.html","39f1703f955b2abb47344801234236a3"],["tags/index.html","a0a475590217e8d554c6c856e40b33fc"],["tags/jps/index.html","6d713b2a083035e1903cb5dce06decec"],["tags/kwargs/index.html","dbc6ec831ea3d6ca4ec16384f36e9f51"],["tags/mac/index.html","3cf59482877cda28e7f4e6934d89f4af"],["tags/make/index.html","d9b9d622dd40446f1e7b2a1dd9a2c7de"],["tags/modify/index.html","ee6baabe1bf5cc95e64fd9a9964d85cc"],["tags/no-ff/index.html","6b357464ad517d71c9e906ad0df0155d"],["tags/rewrite/index.html","6d73df51cba8c3454c3afbb12c6cec68"],["tags/schema/index.html","83a4fb8a21022700a2950cfa3d4db598"],["tags/shell/index.html","dbe2d08354de2595a708cdeb4883f0fa"],["tags/synchronized/index.html","db45df0b03257d4a86aa9f2a46478055"],["tags/this/index.html","ff54993266cd4fea53406e58bfe6bfd8"],["tags/tomcat/index.html","fa13f7fabba2f578569f62582df26802"],["tags/top/index.html","1ae46fd085e2a315f54ee731bbd385c0"],["tags/true-merge/index.html","071fde6b25631563413293db66286c46"],["tags/url/index.html","11482343f09ed19f756ef04a5985f936"],["tags/vim/index.html","d679419a107f4dc6bb43eb8e17ed24c6"],["tags/windows/index.html","2cd29981d2698cc9ae95d4a0e8aa68fe"],["tags/一棵开花的树/index.html","2d19cf02f21dfbb148cf8b498eede2b5"],["tags/主题/index.html","976afa9c2b6b1aa610eec10dcec081bd"],["tags/二叉树/index.html","ae67f38616d4fd1d0867f8e2495b1ed5"],["tags/介绍/index.html","a4f5bd7a4b5c68ca85cb25d660ac0414"],["tags/代理/index.html","af3bba63c09aa6a5a80058890bbaaf7f"],["tags/以太坊/index.html","751f3de87434bb88d78aacf40ceaafa7"],["tags/依赖包/index.html","677d5b6322258498f6fed801c2102b89"],["tags/修改/index.html","3908b9a7eb700060f4a5e923675800d4"],["tags/值传递/index.html","06ef08c50a6354e5db21c1b5b6804bb1"],["tags/冲突/index.html","a41b862c2ebb186e60aaf34a8d4a41bc"],["tags/分支/index.html","274f83769e5ae048ca44ef559387a592"],["tags/创建/index.html","911d79611ec5d4a590feb943554383fe"],["tags/创建数据库/index.html","94023c6f299ddc4d979509956d8c0071"],["tags/区块链/index.html","716a1cf22708d37d2cadd611aba05d76"],["tags/升级/index.html","55c08cd0fac4f80655cc658488d6a597"],["tags/参数/index.html","86bf74ebdac3d594bf27800ed16e31a4"],["tags/委托/index.html","73498c9ef7c1ed56478caf90b34e6095"],["tags/存储/index.html","4c507607660a2c623d5dc22142ea30e7"],["tags/存在/index.html","67c192030d328a5377a378d8fa305ebc"],["tags/学习笔记/index.html","47a8065a68fb604c1212b576dae7b770"],["tags/实例/index.html","8290b48e1f59b20c52390482be5d6182"],["tags/容器/index.html","b38b3cd831d69a22db5e0f004f85596b"],["tags/工作流/index.html","19ae15badce0f7419a7937a7329cacc5"],["tags/工具/index.html","6ba05681880e0b76d35a63ce3c455ed3"],["tags/席慕蓉/index.html","8a8294b5d84a7e02277fca318cbcdbf3"],["tags/微信/index.html","0855a4cce03d31af01b61e9247a9064a"],["tags/插入/index.html","de27c748e24d3cb61c2c6a87590cb852"],["tags/数据存储/index.html","7d9a8a00452cb07c37ba60cb184e0a98"],["tags/数据库/index.html","7140601b1e2a4c483b7c2030ea396b49"],["tags/数据集合/index.html","bef4bfc814feacb961730a068a23c526"],["tags/数组/index.html","a2b2136e2a6ac79f5c4bd04e9d584eda"],["tags/文档/index.html","e8adaf65f20923f2c3e555d0daedded1"],["tags/文档流/index.html","6308d4f64766fba6984764923b1a8bba"],["tags/智能合约/index.html","ec60cce631ba71e3e86edcc8bb554fd8"],["tags/标签/index.html","3dad496f6419729cc1404a9b50378ece"],["tags/模板语法/index.html","7d8f22914c9eb56142fd47a8e9cbd5a6"],["tags/比特币/index.html","2b791a68b3fa7382d3af054dea434c38"],["tags/波浪字符/index.html","c7436f59742e0e208bfa6d4c03d1499e"],["tags/注解/index.html","ee970a12fed9dfd87f2738b52d500d90"],["tags/用法/index.html","8014cb62eab05030be757719752e6fcd"],["tags/穿透/index.html","e6c039111099b47c1cfac828c5c95d24"],["tags/端口占用/index.html","1997b94c12178e4b7d359e12f57429b9"],["tags/笔记/index.html","5951fe12ce472bd4509663995e385e9e"],["tags/符号/index.html","059836634a877ef9d733eafa54bd0ccf"],["tags/红黑树/index.html","3836196a66c93290edf3cdaab0034f73"],["tags/组件基础/index.html","5f944c6235651eed257c546743d0c524"],["tags/绑定/index.html","01c46b598ecd8d5fd97ced7b51520639"],["tags/编程/index.html","4e5fcfebb5d590ba3a07b1e015d027a1"],["tags/职责链模式/index.html","3b52ee22ad96e72f5067b51e0d42ad47"],["tags/聚合/index.html","28c0b17878e86ec98adb8a17cd851c73"],["tags/聚集索引/index.html","95402998d564f68f6ec4b450032a2257"],["tags/自定义指令/index.html","66352c37ba11c1db420884e4ea7f1b1e"],["tags/计算属性/index.html","ff86ccc7cea5b14fc6aeb8bbf18ba6b0"],["tags/设计模式/index.html","afa415e17bb0ed2a0290ef9df2226e0b"],["tags/进程/index.html","167f8a8fd871008d9cbce4f0e4941b9c"],["tags/远程仓库地址/index.html","50858d0e96ee75894f3451ed95802133"],["tags/逻辑操作符/index.html","192941ba9e5b42f72a0827f845fe7897"],["tags/部署/index.html","a029db8359725fd015fe360ee15059a3"],["tags/难度/index.html","bca092293dffa23bddae35e22cdeb527"],["tags/集合/index.html","e12536ad3f0dceb8d45b50619c31093b"],["thinking_in_programmer_life/full-stack-programmer.html","00a5013c07f256d0dd37b0df54bb6bed"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","e3fe73a8ef65381e4ca784556bac4d0d"]];
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







