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

var precacheConfig = [["Kafka/kafka-introduction-note.html","1d4f1f45d5fbf85ce18e8eb1591a91e1"],["Kafka/kafka-storage-principle.html","500e3b1896cfb2ace0cdbd7fe601dd77"],["about/index.html","eeb74344000f576579f04708b805ba1f"],["archives/2018/06/index.html","3d7bc3565c42ce51daafde1570105731"],["archives/2018/07/index.html","466687debab97a9aa0bd51a403a1b3ee"],["archives/2018/08/index.html","132f4c091e1fbaf168fd056dddfcc333"],["archives/2018/09/index.html","667dbf9a02caa426a0224a0b8fba7b35"],["archives/2018/10/index.html","c5464dcb69365af36be70247e3f4b0e8"],["archives/2018/11/index.html","fbcd309e341803b2951773c0c99f5cfd"],["archives/2018/12/index.html","fc41468ab2fb22a0b09068584bfdc327"],["archives/2018/index.html","02458a466953f783ca772abdcf61e030"],["archives/2018/page/2/index.html","c696fffd08ca2a425c64cdbf4f3eccb1"],["archives/2019/01/index.html","2ec49781ac5752e48f74748fbbeb1619"],["archives/2019/02/index.html","14b1eb977fd8c47f9ee18ec646d4857e"],["archives/2019/04/index.html","564e8b6cae3b9002dd3efafb05a7d64d"],["archives/2019/05/index.html","616515b5ff2940f9169a5c82c8cb7ce5"],["archives/2019/06/index.html","9195cd288a44e02b42af5d6e27fa2417"],["archives/2019/07/index.html","9ab180d2752012b7e26c476df7f64da4"],["archives/2019/08/index.html","1b80c358bf0543271f2e818bf603dd5d"],["archives/2019/09/index.html","a3b02c4f532ae086743358d4a4757449"],["archives/2019/10/index.html","16e12418d359682c4eda249a4fa1843a"],["archives/2019/11/index.html","6dc800747a0ab9862efb535d7af44b93"],["archives/2019/12/index.html","2f50c5f79cd0778fd1def246d2611adf"],["archives/2019/index.html","0112182c5a27c5beb3ec5e1d728b6bec"],["archives/index.html","cee31bb37101fc665ff1c04d81494e16"],["archives/page/2/index.html","8fafbad4b2013f77b29234ca117ef6c2"],["archives/page/3/index.html","d03fdb489217c970539103ff980879aa"],["atom/index.html","e738bd541342f8d846601f1d527c8f22"],["blockchain/base64-base58.html","55ce878236fa3afc4c8e0007cf1ab15a"],["blockchain/bitcoin-data-storage.html","80f1c0f59cae128581c7418930a94198"],["blockchain/bitcoin-difficulty.html","afe9163bc35c6bd4d89874e968613116"],["blockchain/block-chain-ethereum-contract-program.html","ecec456185b2c921bdd5499ad3a1a69d"],["blockchain/ethereum-programming-introduction.html","9ba287ee9a4437e6f69fe550e68af3ec"],["blockchain/ethereum-rationale-introduction.html","7b7422b89cd26d762babaa95fc2f72db"],["books/index.html","605c0b00c3564bc124e63cfde616cecb"],["categories/Blockchain/index.html","e2ddad068c7f0191b36daa597edf3488"],["categories/Blockchain/以太坊/index.html","4406b32fc70c956db35169157cc62873"],["categories/Blockchain/以太坊/智能合约/index.html","99f05f18d7456cc8e4e5f1a146ee6354"],["categories/CSS/index.html","fbb398c837162bbbcf8423624c5260b6"],["categories/Design-Pattern/index.html","0060c0cda8b6d2636af17adc956266cc"],["categories/Git/index.html","0dce4237ee2c425c1eb993d06163e4f0"],["categories/Java/index.html","32d184892526c84682f43e5cc1918f07"],["categories/JavaScript/NPM/index.html","72b562284cad4c06d467a3d3296d00d6"],["categories/JavaScript/Vue/index.html","683d9d1827ad0ab05a2b318f53cf80b1"],["categories/JavaScript/index.html","5a642cf737ca0a7f890193367916178a"],["categories/Kafka/index.html","a14c81e1aa1e659f4bd5030fbd3edd7b"],["categories/Linux/Shell/index.html","ac46d6a1581401395fe604b3f3eb15a6"],["categories/Linux/Ubuntu/index.html","375c4e8bac60fb502a0757890f33959a"],["categories/Linux/index.html","8416fbb803adc8c360634d19c41cb852"],["categories/MongoDB/index.html","ad494d25c4c892d0fc5621bc451f73f2"],["categories/MySQL/index.html","54f065faf0d40e41b601f2e6111b7db6"],["categories/Python/index.html","faf28e64f75a6a7592e15d65933deb2e"],["categories/iOS/index.html","f4af41a13acdd0aaaae3171239772540"],["categories/index.html","ea5622cfbfc46f472a409a201d98eabd"],["categories/微信/index.html","eaa9d08b46032c01cd3605ff254f7773"],["categories/数据结构/index.html","48e10e8a52c5432ff95a32f7a73b7b0e"],["categories/杂记/index.html","dad434f1c46404ff4285337961480fa4"],["categories/程序人生/index.html","402a84a1568a9ca848f87d1ed5413aaa"],["categories/计划/index.html","de82481be9ccf6e832da1e173b724b20"],["css/css-font-note.html","6ad908d54618807cabcf08b84ff9dc42"],["css/css-normal-flow.html","50e1f651878cf76b5d6d1173315cc934"],["css/css-sass-introduction.html","b3bbbf01a1a220deb753073e4f2ea6d7"],["css/main.css","1cb49a117e678021bd86b43eb7873953"],["data-structure/B-tree-note-1.html","bfcec80479146d1d587b5ca5ff2cc825"],["data-structure/Binary-tree-note.html","8003e354ca7dba8efc7f7baa01aa4dcd"],["design-pattern/chain-of-responsibility.html","49378ac799b30eaab72177b6e2835be5"],["design-pattern/delegate-and-proxy.html","9d17ecb3fbee8d69c086922ac7cceb4a"],["drafts/configure-multiple-vue-project-with-nginx.html","67211572007dc0fedaa1cdeb1bc518e9"],["drafts/iframe.html","16018eecd8bbbcd08650bfd887296674"],["drafts/record-re-install-mac-os-10-12-6.html","19058d6b981adf419c72823bf7b88666"],["essay/note-ximurong-tree.html","aa8a4777d5cd3cfa3e45b5c4a0ef9f72"],["git/git-DETACHED-HEAD.html","1241cd6e2c826f83daf0adc1ec8e6d1e"],["git/git-branch.html","b763aee49c4929952cbf33d37b73dda3"],["git/git-change-server-password.html","00901368bf2cb1d2b0a89ab37ce95a7a"],["git/git-checkout-1.html","7918a14119cb9671b411935798465b43"],["git/git-checkout-2.html","772fbc0297ef2caade2b4b257ce944eb"],["git/git-diff-m-symbol.html","3c641c2818189f94930721f25c5c2240"],["git/git-git-flow.html","c71afd7b4e7a545bc85221047bc5283e"],["git/git-git-merge-ff-no-ff.html","ab372aada6a09f2dcb8b5e62b738e690"],["git/git-git-merge-true-merge.html","ac87bbd3a49c1e4758c6f2e8dd657483"],["git/git-gitlab-flow.html","42f7e6bbcb0e86e188500018a748f689"],["git/git-index.html","04ef10ee9da3dc3818d4f0d4d23956b5"],["git/git-merge-choose-one-side-code.html","1623af50dc9b91ae79338b7ac5505730"],["git/git-merge-exist-conflict.html","a784bfca9464b7bd211c281658300d63"],["git/git-pull-1.html","c152809313b50db333211f60705efce5"],["git/git-reflog.html","33c0b75e321429fa697a380286ef0605"],["git/git-remote-set-url.html","9183240edf9316887974014a01147f4b"],["git/git-reset.html","1d3eea16c30b778c5a059d6aa5234f1f"],["git/git-rev-parse.html","6d76345b9aa63c3eaff9d56f63913314"],["git/git-revert.html","31853a2f06393416d08d75e24196043c"],["git/git-tag.html","de6e1e6256a1c1d267cd468b2166e236"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ad5a4ffd7a01c6eab136f6a6b612fd84"],["ios/ios-oc-kvc-1.html","edc96fcbe770af16f8bc3e45a2ea866a"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","345e46592f8956350a71708b65af4fca"],["ios/ios-themes.html","15e7391681059f68506004adc9063ce5"],["java/java-annotation-note.html","25b21656c755603a3dd07b703458aa97"],["java/java-annotation-request-response.html","18a4565a81d46d0f07ec18dc3a3b2f32"],["java/java-array-and-container-note.html","87e29eadcb35bcb0e89ea7c6fd784106"],["java/java-deploy-resource-folder.html","f04bf8fb85113304694c7f29408d8db8"],["java/java-jps-note.html","0c46d84b6723b9d4b6755b57a573f465"],["java/java-maven-nexus-note.html","ef245a18a49c8bdb4643469ca066bfad"],["java/java-pojo-bean-note.html","fcbb527c991f04450ccf567c63af310a"],["java/java-shiro-note.html","dae7cf65415ae9ff36e4889984b13cbd"],["java/java-shiro-springmvc-integration.html","13ccde5b5c65e80825a5b5e9dd830a07"],["java/java-spring-autowired.html","1d9fb56a9c2ed4e0bb194eaf4777dde4"],["java/java-spring-configuration-bean.html","781ff3e3d125296de8c404bb9c56fb9d"],["java/java-spring-restcontroller-note.html","5fa03110cbaea28b51d7c73f25db93ad"],["java/java-springmvc-X-Frame-Options.html","1a90ca74d1f620f284be694641a4c6e2"],["java/java-synchronized-note.html","c41fe0661361831ab1bf3add9c9c479c"],["java/java-value-pass.html","0f84ed4dd2eaf2f556bc7f5f0110ef44"],["java/java-vo-dto-pojo.html","d29ca582050cea414d939d3614108788"],["java/url-rewrite.html","244e1f9adcb97747d2fc307eb5428cdf"],["js/js-logical-operator.html","baa78583a3932f6e1ee43bc5845a6341"],["js/js-npm-symbol-caret.html","79316bf63ea1e4de7730644bc0dc4ad2"],["js/js-npm-symbol-tilde.html","bfd1233ce2109a1413703f3718def0d7"],["js/js-this.html","d66b0fdd75c059e4e37fdcdc360f762e"],["js/js-vue-note-components.html","3e071c0ee190e7b6e748d854f669623c"],["js/js-vue-note-computed.html","77e01f66b1645bc7844bf6d1c1d5df26"],["js/js-vue-note-css-style-binding.html","d4ad708a3862532bb6f58e4a87efe98d"],["js/js-vue-note-directive.html","9e9bb16b52f55f136fa9103b5b9e91de"],["js/js-vue-note-instance.html","7626cb8f0e1e28bcda196d95bf08e30a"],["js/js-vue-note-introduction.html","4db5ab0419ea6a1b7dc2c3cfcb76964d"],["js/js-vue-note-syntax.html","f06b422b6a4672f4b956542583f52d7c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","0adba308f55f61f32b29160dab96597d"],["linux/mac-find-port-occupy-process.html","35e39a9a3f799557a759297b8b66ef70"],["linux/make-vs-cmake.html","226d6e5631f15de48a42af75f1a3160e"],["linux/shell-command-awk.html","5a1becd9e3fb0a6a8af8c9e1d59b4a47"],["linux/shell-command-df.html","f1ff73dff329ab7006dd37c1ae835025"],["linux/shell-command-du.html","31752ea0dfd02a2e0d3a6e500dd60276"],["linux/shell-command-netstat.html","cbef02cb0a1001a17b13dd3379212911"],["linux/shell-command-sed.html","17ea3b6339f4b680ad49c98375c516b6"],["linux/shell-command-tar.html","83c60c6135d50eedbf96c1af0a3eae5e"],["linux/shell-command-top.html","9bf8c8b818cefcb62de3ea6b657ae4b7"],["linux/shell-command-touch.html","40d103254f6a262af25f0154cf5b839f"],["linux/shell-command-which.html","52d9c72d91a5cedd4885650827f697aa"],["linux/ubuntu-user-add-delete.html","1ddf80973426bad710bc13b666fe3ed7"],["linux/vim-copy-note.html","358fd95b4a7a5534dd85de6f041ed90f"],["mongodb/mongodb-collection-aggregation-introduction.html","891d34651b3af551f3c8b5d29c9aafe2"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","1eccf6294519a9b98ed952ec1559a104"],["mongodb/mongodb-collection-create.html","0427011e2e82ebcbbd2e001f0ff31b3b"],["mongodb/mongodb-collection-delete.html","7a76fd5e9affd968dff88805e0751cce"],["mongodb/mongodb-collection-find-1.html","e14faa39118629b629bd8d4a35171875"],["mongodb/mongodb-collection-find-projection-operator.html","46c07dd3e675a460853afe4168cf9b9f"],["mongodb/mongodb-collection-insert-1.html","b00ddffbebb6494169bc515261a01fad"],["mongodb/mongodb-database-create.html","a5aaa59dc5fd5015f3604dbb910ebcf1"],["mongodb/mongodb-java-driver.html","ebe7b7b147870c8c821d7c0862ace173"],["mongodb/mongodb-schema-design-note.html","5da4e4767a7d99e4087d3aba54bfd422"],["mongodb/mongodb-study-note-1.html","21ca40387e9f21f859244d8bb5fa937b"],["mongodb/mongodb-study-note-2.html","6f02232841d338d2ca904767ec410bb3"],["mongodb/mongodb-study-note-3.html","03cf67809c3972402f7bc27e2b5a408f"],["mysql/B-tree-note-1.html","ef0e3c4c9be9da4cf39c9d95446a851b"],["mysql/clustered-index-mysql.html","87e8500ddf14daf960ff994fd7ee7f87"],["mysql/mysql-ddl-handy-book.html","1ab6123220bec1bb4f84d789b201bcc2"],["page/2/index.html","d6e1747a67d7afaf2cd4c00074dee4ad"],["page/3/index.html","79ad46b86fcfad1005175c17ec3264c2"],["page/4/index.html","7d5b79e91196466414466cd5870f99bd"],["page/5/index.html","873f1f42a929262527d9a922e558ac2e"],["page/6/index.html","0e1d3f960efa55ae053a23ed4e0d2a98"],["photos/index.html","8f1c3159b6769933b28ab8dc3ae83282"],["python/python-args-kwargs.html","2c792474ffc83301ee8b6a7da8ede822"],["python/python-async-program.html","c2bdfd28b56fa4c949f09bd11b85edaf"],["python/upgrade-python-under-ubuntu1604.html","47c4fa141ef3dc84c4323a7abc4cf11f"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","0e82016cb2dec846156f14d9b15e8715"],["slides/index.html","1e3b5f06978be8f8a6578c021abc333f"],["tags/Autowired/index.html","8f9067ed2aa42c7dde4ff1e1f5e75995"],["tags/B-树/index.html","ad8350c46e854e8fdc77df66d8722855"],["tags/Base48/index.html","8c00b2c5771d6135faab800121d41981"],["tags/Beans/index.html","703761efbdd2d8535aa28f06760e918c"],["tags/CSS/index.html","c017ef2d914087a2197b90b2b99e2dbb"],["tags/DETACHED-HEAD/index.html","623bcf4a12d12d167e51225deba2498a"],["tags/DTO/index.html","2fa15c9936a00fa3daf1e7852348da42"],["tags/Git-Flow/index.html","b64c0cb790ab89139eaa6acffb9ce94f"],["tags/Git/index.html","6249792c0ec435c2aea8dbd3955ee813"],["tags/JS/index.html","6fd32d2c415bb1906a26ba7fff39ab53"],["tags/Java/index.html","be0c4a5449b22aa6707b67b72af314ca"],["tags/JavaScript/index.html","1c44b15764d0da5b0fab93a218a765e8"],["tags/KVC/index.html","20fe6d368f2dc143c4f79c917dc24160"],["tags/Kafka/index.html","55e0e11d19dc6bd15c221ccb1f3f6403"],["tags/Linux/index.html","cb47a716d4ff5e5caf36044266030093"],["tags/M/index.html","4023d5efc406d19933ce2e53732180e4"],["tags/MongoDB/index.html","5d018443b39d55779823b95c05cf27ea"],["tags/MySQL/index.html","328acd8653bf31a941ea949b731b3911"],["tags/NAT/index.html","0c8c683a32eb33da82e0c619258c6847"],["tags/NPM/index.html","f4d4ba096b324ba68e1b61cc5a58e44c"],["tags/OC/index.html","7664723cf28b954b8b8584a10c98c884"],["tags/POJO/index.html","19bf3f256a22d757ba94932c346c4726"],["tags/Python/index.html","5592ddde37e6584ce87ac8bde1a56ba0"],["tags/ReactiveCocoa/index.html","d61baac8f79eb487e39eaa79eced2618"],["tags/ReactiveObjC/index.html","e008f8077bada3904120b46cd6c60a4b"],["tags/Repository-not-found/index.html","fd9099c516d76ad8e8a4fbfeb34494b8"],["tags/RequestBody/index.html","cfaa370ac7c4c2e2b9c8ee39cf68e995"],["tags/ResponseBody/index.html","53adb338bb1ac8fd5dea624582d26c39"],["tags/RestControlle/index.html","5db9cf393c2c4fa51c7cbd839f34ba63"],["tags/SASS/index.html","a208987e083f144bb2bbe852d5f226b4"],["tags/Shiro/index.html","9d7ab36d2b08299efee51a80d9cf75a0"],["tags/Spring/index.html","ae3e839b7264b9f1869c1a0add0ccc09"],["tags/SpringMVC/index.html","01e37a7df1daddb88c5e7e7a1c2e4dcc"],["tags/SprintMVC/index.html","085a480be221bac2b808aa763e1f4dc7"],["tags/Style/index.html","151dfa106560fc916cf5b6150a5e161c"],["tags/Ubuntu16-04/index.html","1a42e6f0563f2270feaabb96d06457b2"],["tags/VO/index.html","234e14c48a0851a72d15730f1ecf6ef5"],["tags/Vue/index.html","734631d22b145477b0020afa086bd335"],["tags/Workflow/index.html","ac5200df55e36d872c8a8d2ef5152493"],["tags/X-Frame-Options/index.html","629c747cbb649df03696f2517c3e3b75"],["tags/aggregate/index.html","ffaec1a1331b860f13b6499d224892c5"],["tags/alter/index.html","93d409fbb6cf58a018df0f86a7887e4e"],["tags/annotation/index.html","5d87a537c5b98d10640860431ed7814e"],["tags/args/index.html","916cb224fb62809204af2daf2d6ec410"],["tags/buffer/index.html","2bcf8787e6fc57d9b01edcaaf4d2246e"],["tags/cache/index.html","d2632f828db33421485a725e474ccb44"],["tags/change/index.html","5992796b6e3ef23fa4d10994ae674aee"],["tags/checkout/index.html","25f0a3ed8fdec98bb5b17a5e88be61e3"],["tags/cmake/index.html","b315efddbf59de953920a7b42122815d"],["tags/collection/index.html","78af655ece575a65e49316adab24d140"],["tags/component/index.html","902d7902c677211066c7dd1efdc24f2b"],["tags/computed/index.html","d941e4c87496f2c0dc0eb5a2ea23ced1"],["tags/create/index.html","c1b568abeedc88b362efc9bb9261f85d"],["tags/database/index.html","542d92c0a0fa213ef30a84ebaed2b28b"],["tags/df/index.html","07aed9cb3e266ab46d95058670c0020a"],["tags/diff/index.html","a5575ab41b958ea00d8ea0a98ea7326e"],["tags/driver/index.html","bc0be3004c8d3fa928370884e91df5a6"],["tags/du/index.html","a975252a7842fa22e4ae95d78af850ef"],["tags/fast-forward/index.html","47ba15b75dca5ef8099c23478f047a26"],["tags/ff/index.html","d7581f421162c69ef08edc873cc9ff87"],["tags/font-size/index.html","b8037dd8c05e8dfd1069ff2f1fdd471f"],["tags/font/index.html","7524fb838de64c2a07d2de2600642ee4"],["tags/free/index.html","7f1844fa2d8ebfdb45bc1deda4450318"],["tags/git-branch/index.html","e355d72ec455301b919c93621e8c987c"],["tags/git-index/index.html","b1a50a8617bf3d032476e094a76ce2f2"],["tags/git-merge/index.html","6df173e0162e5575fb0c4b63ac4c395c"],["tags/git-pull/index.html","d098830323aee66ef561b07b7a143bb5"],["tags/git-reflog/index.html","40b94c4f0c920c27716aa55652b70f76"],["tags/git-reset/index.html","47910c1d0ff8b20c04f569bc3c18015f"],["tags/git-rev-parse/index.html","83f79f03260f9eacc94464e5df313f12"],["tags/git-revert/index.html","b75145c9c289e4e566f4af26dd996d09"],["tags/git-tag/index.html","79993070e4ff1311364fd2a2b328cd0a"],["tags/iOS/index.html","263e52c89702f68cc03794962154eb35"],["tags/index.html","4c6f2d9dd70aa4e4312936f9b760798a"],["tags/jps/index.html","1a5f19f8da04503b54bf7dddf80831ee"],["tags/kwargs/index.html","c2a0a2f401792d936ad26995f95ddba2"],["tags/mac/index.html","d6b8dd0fbdf4b247167b5cd7683243f5"],["tags/make/index.html","6ee3e5fd69bffcb0003f85ebbbdb7b63"],["tags/maven/index.html","a3dc511bc4bbce67d15353b287480717"],["tags/modify/index.html","7d3401ec2dd05ea5d3dafcca61dafb00"],["tags/nexus/index.html","bdf09cb4eaaa7b53bd1e62b337db76c8"],["tags/no-ff/index.html","5fa39a7b03aaa71564c4346422c689aa"],["tags/rewrite/index.html","1fd86be20e6533e2500da3da594164ae"],["tags/schema/index.html","4c1226dbaa2a615a789221a913eb1d98"],["tags/shell/index.html","e3a2f7abd853fda7d0720f079bd179ba"],["tags/synchronized/index.html","79311f36f9518554cec550c9d2e8de2b"],["tags/this/index.html","fc2d6339a0dc7fd654f4a7538f63c9d4"],["tags/tomcat/index.html","0170362ff3fc8d25e554657cb9523d84"],["tags/top/index.html","30b7dfabc765c1a25deea3eaa7eec0a5"],["tags/true-merge/index.html","a70a73e8f01bd6d95465955cc5972461"],["tags/url/index.html","1d5d38448af023c0411bee9c15e7779c"],["tags/vim/index.html","4b03573494d933f2691c141db2e77150"],["tags/windows/index.html","b9628efa2b77aafe88ea7b3fcdd38d18"],["tags/一棵开花的树/index.html","fd35568824e3bd4d4613d4208d0b014d"],["tags/主题/index.html","8c3b77775cea2432ca90ae1883fb251d"],["tags/二叉树/index.html","b9fedbd52a2bc45ef591d3f972e30468"],["tags/介绍/index.html","b1ab9aecc0812c3c0e4532102ef60c8d"],["tags/代理/index.html","df9d37ffb079f17ea7073d0f76fa0f9f"],["tags/以太坊/index.html","4896b5bd862730b1d79a9416bac0cd95"],["tags/依赖包/index.html","48de1adbcfb4016f4c1afffbec864fc7"],["tags/修改/index.html","53ebdce4168e0cb85453dbf8123ff320"],["tags/值传递/index.html","d78c3f06e02fbc4ee2de7fef033272cc"],["tags/冲突/index.html","51516b7d985dab88cc8acfd187380546"],["tags/分支/index.html","85ee7e319df20f0a8053b4694e1a8feb"],["tags/创建/index.html","ebb5fb374fbc77779c3e3f8af68fad16"],["tags/创建数据库/index.html","0a8b5e4a70f0cca20ba66e7a2a556d20"],["tags/区块链/index.html","4b78c96065ce7e02576b41d45233f641"],["tags/升级/index.html","50abee3ff6247633a114e2a3b43c3deb"],["tags/参数/index.html","84cb19cc1f204cc74345e535ebfc86b7"],["tags/委托/index.html","7c420587ba3639efe43de3353b8f209d"],["tags/存储/index.html","81d4d57cc5f7453738177b0f21fec0a7"],["tags/存在/index.html","8e008bba4efea1efcd9aa10bb3f404a1"],["tags/学习笔记/index.html","93b920bb36caa1153e0d324a7423fe23"],["tags/实例/index.html","f7060bc3c9c641047edc0059de7faf32"],["tags/容器/index.html","802e286a2b1519ee06e8decba84f3d46"],["tags/工作流/index.html","6c9c3f5f28bc61a5f46a2f84094cf7b3"],["tags/工具/index.html","ec4baa715f74dcec92260af184e48e12"],["tags/席慕蓉/index.html","09b8a5c42baa210efc80db43afd4278c"],["tags/异步编程/index.html","69758658aad627b4a7d7a28c5ed08078"],["tags/微信/index.html","1bec163731e5e4b555c1410ec6f16739"],["tags/插入/index.html","c49735c494b2eb62bf6335d8f9cde173"],["tags/数据存储/index.html","a70495b37b9f923e2a2d51f1175b4881"],["tags/数据库/index.html","657807a4b25afdddc61b31813e2c5745"],["tags/数据集合/index.html","fae7f317e4b74451142cec0fbc602243"],["tags/数组/index.html","565b221e5f415c6d1b4c75850641a6c1"],["tags/文档/index.html","0fd4f17a7f570f0bd7c743dfbabb9f11"],["tags/文档流/index.html","4d73168238ec69703e730e58e779d0a9"],["tags/智能合约/index.html","7c53873797235a44a415e3715cdcbd87"],["tags/标签/index.html","e206afda23c63a43fd41c6efdd7ce17c"],["tags/模板语法/index.html","9f1dd730c6f5a8896773943f60ea56e1"],["tags/比特币/index.html","f840915c22f082765f73669d550ac9dc"],["tags/波浪字符/index.html","857830974bb4fe05dc04e09fc4ca4de0"],["tags/注解/index.html","b5ff24e537a0312612ca8ab2b6864c16"],["tags/用法/index.html","6173649d77bf1a2d3e57dfbc9a62817d"],["tags/穿透/index.html","37d9ce0da1ad3f08088b9dd60654e15d"],["tags/端口占用/index.html","b79b81e720d0ddcd682a085438099668"],["tags/笔记/index.html","c33939f41fbfd13abb7fb3a813700691"],["tags/符号/index.html","faca450e705aefc4eee4e83eeef45407"],["tags/红黑树/index.html","d30df4c24537769a73cc9fbd814dde8d"],["tags/组件基础/index.html","34738d10f33e9232dae7e56435e7899a"],["tags/绑定/index.html","8919751dba7198f2707c6e8516a48595"],["tags/编程/index.html","448d46f4ab02187ba7da92ca004f5dfa"],["tags/职责链模式/index.html","9967d7aaef7e08dafa327e9ea9da8e9a"],["tags/聚合/index.html","9ec187e3b83ce4890f5e9bf433e5324c"],["tags/聚集索引/index.html","79ecf5ccfac7586adbeac2dd13b9e168"],["tags/自定义指令/index.html","5e7968b1e83291bd614da8b778c3bed6"],["tags/计算属性/index.html","d8ea47559428bb2a72b4e78901a82b53"],["tags/设计模式/index.html","c20fd6c8dfaa45801e900f8b20e10f17"],["tags/进程/index.html","b164ce6743081864a573ecd64927ac8a"],["tags/远程仓库地址/index.html","54b4b980a3409557bd9519dca81fc32e"],["tags/逻辑操作符/index.html","a83779b55e960988579741ad54efa6d5"],["tags/部署/index.html","3ed3adea538442302af9ff0f1a77e0ba"],["tags/难度/index.html","bdd3b00d83f6d03b4851675f55df3eb8"],["tags/集合/index.html","7428e060a2bef5c238812106dce1f9b9"],["thinking_in_programmer_life/full-stack-programmer.html","47f25c83936d5cda0e3609ebdfc1d0a4"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","b8b191487193c62ccba0506d6dbc7233"]];
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







