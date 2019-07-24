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

var precacheConfig = [["Kafka/kafka-introduction-note.html","eed0b1132ee1a69cd6ffc702124e1a84"],["Kafka/kafka-storage-principle.html","c894c61791e528fc01690cb046a6a0af"],["about/index.html","ed88f2d07d058244dbb73fdeab6c9e4d"],["archives/2018/06/index.html","243e0471f93ad3a511ea5430063f5d59"],["archives/2018/07/index.html","2ca6f0dc5b2a8e8c6303e493d2cdfeaf"],["archives/2018/08/index.html","8edf3d4f451209261891cc28b761a192"],["archives/2018/09/index.html","7da205d5f2452af7b1406a998bb945c9"],["archives/2018/10/index.html","93ca06235bce39d18db46999f66481e5"],["archives/2018/11/index.html","df7eb46e08a9cc80f10a18a136a268e3"],["archives/2018/12/index.html","f34d4a72a559e23d295afdc05bcb6ce7"],["archives/2018/index.html","637a97f2a59adcb31804cdfe01666432"],["archives/2018/page/2/index.html","51cec7af8d1874a0279b0d28d9d3815b"],["archives/2019/01/index.html","bfc7ed763a36b99a3a869669ace697d9"],["archives/2019/02/index.html","07634776cfd5778b252c70d502a5ff0b"],["archives/2019/04/index.html","0ecfc733558a06b7a8f7822a96ed972d"],["archives/2019/05/index.html","7868939bc58dff4990c0e8e7aaa0c663"],["archives/2019/06/index.html","5206f834ce187fc7012a3e97974e34f6"],["archives/2019/07/index.html","50fe2010de16f6859c8ec09ac11399ba"],["archives/2019/index.html","bdea555cfdfbfd0fe89efa212e2cd2d6"],["archives/index.html","ac53f0da1c22f6f2e2935dc91dd761c2"],["archives/page/2/index.html","930fc545fb545c69edd00bf7e2eab650"],["atom/index.html","a49723e3cc9b7b1961f7e942a9b2d537"],["blockchain/base64-base58.html","b952ea51282d9cf3ba63f9847f8c9659"],["blockchain/bitcoin-data-storage.html","fae1292e9dee61bb07bdb67db0ca8c66"],["blockchain/bitcoin-difficulty.html","59075ee6891ddf84b8cbb8382807b60c"],["blockchain/block-chain-ethereum-contract-program.html","bfb818febfed93123bbb30ba739062bc"],["blockchain/ethereum-programming-introduction.html","8015073c8ca0613a9cc4d9bb8fe5ab8b"],["blockchain/ethereum-rationale-introduction.html","436f10626a78e468d863e49ab40fad8c"],["books/index.html","4887a95cc24254202ecc7248e9c30557"],["categories/Blockchain/index.html","1e4d00c9a92e40db63486ed818d2b62d"],["categories/Blockchain/以太坊/index.html","9144c7a19e1ec7d7adc8cf97ca38def6"],["categories/Blockchain/以太坊/智能合约/index.html","051c920f16babf032453fb3d018d169c"],["categories/CSS/index.html","6d96d3dca5c9436c9525193567b945d2"],["categories/Design-Pattern/index.html","15398cb585c3adb3bd40feed430df350"],["categories/Git/index.html","868b4b999f18e5871ebc01848132a02b"],["categories/Java/index.html","4b225dfe8152b00b488f3ab82a1321b8"],["categories/JavaScript/NPM/index.html","fb7096ac73a88761d3f332e6c6a5b10f"],["categories/JavaScript/Vue/index.html","56931367c6914a92e1c1bfc3c6967f58"],["categories/JavaScript/index.html","16189f501df6c71bac5195563cfa36fa"],["categories/Kafka/index.html","c3113a772c942a90adeeac28c2746a37"],["categories/Linux/Shell/index.html","6a6819bb02521d9363da0af5fff72e91"],["categories/Linux/Ubuntu/index.html","b0d1c9cb0dc1f4c476d0d4298a24b74e"],["categories/Linux/index.html","bcac478fe618342f820387970db37c64"],["categories/MongoDB/index.html","754b3269137f3b1259f7cb6b90dc4aca"],["categories/MySQL/index.html","52bd374c6be95589670484175785219e"],["categories/Python/index.html","839ffbc64e61fd4d602230c0075a2a14"],["categories/iOS/index.html","4bc94c53c3f8090dece31678f3355b12"],["categories/index.html","960b7fc3e82efebb74a7e76fa8aa2a65"],["categories/微信/index.html","e1f32134dabbc1318b6bd2a5a50f91af"],["categories/杂记/index.html","de790d912f514edc54fb6b839975fcfd"],["categories/程序人生/index.html","a695cafd4356266d1aa5dab443d516c2"],["categories/计划/index.html","c579fec56134f7891feea76c47463b20"],["css/css-font-note.html","79a2d17d46c313a914ee08f0d58b985a"],["css/css-normal-flow.html","ad98627147e002ebcff8edf563408f22"],["css/css-sass-introduction.html","daf02b0929fb7c456ade0a196dda9159"],["css/main.css","f49605bda05bb78763ed92067f3bf2cf"],["design-pattern/chain-of-responsibility.html","b8daff3bca1cc946960138a75aa28632"],["design-pattern/delegate-and-proxy.html","67796469bb4725579dfd628753c93099"],["drafts/configure-multiple-vue-project-with-nginx.html","77b52da947297b6d1406630776646fc0"],["drafts/iframe.html","ae77d7aa48bb90f59e8a0d61ccebea25"],["drafts/record-re-install-mac-os-10-12-6.html","72d542bd37598dc30a7bff43cf7d51a2"],["essay/note-ximurong-tree.html","d4af85a36fc62a59fc34b22b5a8688ff"],["git/git-DETACHED-HEAD.html","ea6bc6bba596a9d2f6ab0fa9f8f784ef"],["git/git-branch.html","6540a546a7e74e1cef590d82301cd03c"],["git/git-change-server-password.html","322a3ac3b8ce451df7eaf1c70a19b1be"],["git/git-checkout-1.html","481a81818df3b6c5b8a0e9704dd8a287"],["git/git-checkout-2.html","bf530d3ec4e2b1dac2b90499af575af8"],["git/git-diff-m-symbol.html","75e78a29801daf336736d4feda4c6039"],["git/git-git-flow.html","db125f6caf74de02d6bd535aadf8a8bd"],["git/git-git-merge-ff-no-ff.html","5b78941519a8f6f44fedb5dbebce1255"],["git/git-git-merge-true-merge.html","538e2516e4c95346059c4467810758ea"],["git/git-gitlab-flow.html","aeaac3ac582f5c19d6a82f1b48d612b4"],["git/git-index.html","15ba3a25b166c16cb1f9202e3d3f1bf5"],["git/git-merge-choose-one-side-code.html","0192981cd216c09444018c7b5af3efb2"],["git/git-merge-exist-conflict.html","458539270a7b3eefb40d6afcc8bc3d4f"],["git/git-pull-1.html","a78dd89a47d04390e09aba1fc4b12bb8"],["git/git-reflog.html","30be37b5de4ec9345ff26760cafdfc6b"],["git/git-remote-set-url.html","83f2c75a86fcc194ae87572f2c4a53af"],["git/git-reset.html","3e13801c73825b11cd9673f9989a4cb8"],["git/git-revert.html","528238bc4c1edb005743c504736d5d47"],["git/git-tag.html","04272e03b5074cf4896d51009e7bbcff"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4d180dd167b2c5105c8745dcb2c25271"],["ios/ios-oc-kvc-1.html","60f14047130d81942669a35d6abf9c06"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","86e8082b7512c6d862af7b64ad3991e2"],["ios/ios-themes.html","8879263e7d7f4aee8b33535ed35ce290"],["java/java-annotation-request-response.html","078ab632c8895dd771e82a68c180546e"],["java/java-array-and-container-note.html","83c7a2920ecc127345aeef10d4c6f8da"],["java/java-deploy-resource-folder.html","544da52f56cc476ae9ebd5ecce1c380b"],["java/java-jps-note.html","38a713867d16fb13796602434824f6e7"],["java/java-pojo-bean-note.html","9575dd405a1cea6aea85a37a2827551c"],["java/java-shiro-note.html","a30a77df0b0ef50956cb9e439a898e48"],["java/java-spring-autowired.html","74304d4e55f19d4862d05896f6d6737d"],["java/java-spring-configuration-bean.html","4b5bee9bf7a884f34d260600baf9d64d"],["java/java-spring-restcontroller-note.html","4aa45a7714bfbaa6404bda761d76a8c5"],["java/java-springmvc-X-Frame-Options.html","a58cfe1ca2834b811ec94aeba481e0d2"],["java/java-synchronized-note.html","743410c1ae812833e1cb186a138466d6"],["java/url-rewrite.html","a738c70375ce51781a8616653bbac0b3"],["java/url-value-pass.html","5d478553a19d1f5dae29b822eb624adb"],["js/js-logical-operator.html","39470503ff2f91da9c2c0570c53dd2a9"],["js/js-npm-symbol-caret.html","2169c9512ca91b430f9be54898270b4d"],["js/js-npm-symbol-tilde.html","526229858dbd5b26eea0e15c9f8c2037"],["js/js-this.html","09bf9492903e3f9bf6bbf3a17d118e75"],["js/js-vue-note-components.html","e1d0ef7bcb65082085ed6668ea1d953c"],["js/js-vue-note-computed.html","eed88c2e2ae72857e68026620a1f12d3"],["js/js-vue-note-css-style-binding.html","5db3e603670af3971b5b8f83e78e11ad"],["js/js-vue-note-directive.html","f7d9be21fbad709e9c004f646c0a8951"],["js/js-vue-note-instance.html","db27fcbe53769b3b6427029cc5332bbe"],["js/js-vue-note-introduction.html","f87656cae2c5468349b46e98cd669f5d"],["js/js-vue-note-syntax.html","6b3dd5c7c1185882d6726ca80083518c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","a5502d12f93c659eede8ae1a44e15d30"],["linux/shell-command-awk.html","0af24e77dbc40e6fab02e87126f37d5d"],["linux/shell-command-df.html","b3afe29d5b005f184b6c1e9d7ea7cb8a"],["linux/shell-command-du.html","388c9176c0639dc96c179c756bb04565"],["linux/shell-command-netstat.html","934cc0d5f871dc4a85de9661a28e9b35"],["linux/shell-command-sed.html","24a7033e142c85063992c3b50f715a71"],["linux/shell-command-tar.html","fe29df382dbb295b7023e9d70f08ef80"],["linux/shell-command-top.html","7e59ce26f54e168508cf57f65725e89a"],["linux/shell-command-touch.html","a264fca8ca265621a6a7fe07a1dadc60"],["linux/shell-command-which.html","fce7e41706f099924172e81b7ba8e28f"],["linux/ubuntu-user-add-delete.html","e391ce6563de70f570c1147cfdb89cd5"],["mongodb/mongodb-collection-aggregation-introduction.html","b68560499d1463645d51ed65028121fa"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","68f744f720476ab616a51e60ca1076b0"],["mongodb/mongodb-collection-create.html","7f7efecc5163f55dba4efa877b24f354"],["mongodb/mongodb-collection-delete.html","ed809566e46a9e2ba56499c3cb04bab0"],["mongodb/mongodb-collection-find-1.html","9947801f410815b36f332733c80b5a8e"],["mongodb/mongodb-collection-find-projection-operator.html","dd1d0c351c629707f94b5abf63fee088"],["mongodb/mongodb-collection-insert-1.html","f990fd3ed60d95b59d7e942fb94b22f4"],["mongodb/mongodb-database-create.html","6461a595b8006efe987ce9c621a2c819"],["mongodb/mongodb-java-driver.html","f62e55a7e18b878f3012fbe4172802af"],["mongodb/mongodb-schema-design-note.html","dc2b34681f6669b2b3ffaecdfe86ba9a"],["mongodb/mongodb-study-note-1.html","4ec42755205bb54ea4832c7fbd86b3fd"],["mongodb/mongodb-study-note-2.html","c91bed581b17362c9c53439dc9ec2a01"],["mongodb/mongodb-study-note-3.html","e79d5e3ccc1d5a8da0e4060eb562cf56"],["mysql/mysql-ddl-handy-book.html","bc6ca7a6f978a8b3f3bae0e1d972a89a"],["page/2/index.html","578f3ec6a690fb9db8c235a0e404d663"],["page/3/index.html","5ec60b30677e91cbdc65fb256e9fb289"],["page/4/index.html","8f79bad570ea9be6cdafb1b7a85e2a79"],["page/5/index.html","090aeec63d6af892682f0cad78b4d71b"],["photos/index.html","1df0b445adf9f5d60880d89b8f9cec18"],["python/python-args-kwargs.html","ed1b28e9758e39b788b993a3641e0bc8"],["python/upgrade-python-under-ubuntu1604.html","dc76df1edeedfb44f76defc6c22efe78"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","9b1520f56d186e7579771705c848bd45"],["slides/index.html","7ac92d31d0dc797317ffa08f43f73d79"],["tags/Autowired/index.html","21e2a7e2fd93c1aed9ec5d69b99e3f16"],["tags/Base48/index.html","a49f52a35b7d9567b614e690edd10a9e"],["tags/Beans/index.html","da31b011f9f5d31b3cbee7383376c743"],["tags/CSS/index.html","0e6be5b374eee44e9002a8570da8a2c5"],["tags/DETACHED-HEAD/index.html","ebd12fe1a200c9894b8c4c58a7d9f7cd"],["tags/Git-Flow/index.html","d28b2656706be2ac46975fd7937415db"],["tags/Git/index.html","78b398ae53c6cf4c3749e4740e97545e"],["tags/JS/index.html","a3ccf975fe40cc51d1b94caac33637d4"],["tags/Java/index.html","acef3206f7ef33588aa9e17faa77c2e1"],["tags/JavaScript/index.html","94f3ef4e296ef4e2863114a924f3ea2c"],["tags/KVC/index.html","46441bcd0b8369b475dbd70d957bcf1b"],["tags/Kafka/index.html","4d3b027e7c7f4f56de185476926f558f"],["tags/Linux/index.html","146e9acf8897a20250177512275a7f7d"],["tags/M/index.html","386c75bb8197b479258ca9b0a65a9ab9"],["tags/MongoDB/index.html","b4134aff41f8d8c52013990e992c2cb0"],["tags/MySQL/index.html","5d9b0e6282d4412b2b98c813ff266524"],["tags/NAT/index.html","ba8dc8fe9eabe9b8ff92e869f3a4ccac"],["tags/NPM/index.html","35b49135d2af755b5a62056554bf87fa"],["tags/OC/index.html","71fc05cddae258d84f429cb40761962e"],["tags/POJO/index.html","ad378ef186473b48a44428613655e263"],["tags/Python/index.html","484183a665433c72ef2811fbe9d2cdf5"],["tags/ReactiveCocoa/index.html","2daf09b4ef72ef9750787da7fba12747"],["tags/ReactiveObjC/index.html","6a9f08cd08533fc42b635060b27c02e9"],["tags/Repository-not-found/index.html","bc187047ace5de262dd300d10adba5ed"],["tags/RequestBody/index.html","11b358cc0f5dbba3ddad6e40935f3dad"],["tags/ResponseBody/index.html","b0e5a5acffc73a0035f709710b0c1a53"],["tags/RestControlle/index.html","dc4c25044d69237a443c9721db6bd06b"],["tags/SASS/index.html","6a6b1f3218303a0420714cb0b63507d8"],["tags/Spring/index.html","f17d3d2edee80955b57f11033585966a"],["tags/SprintMVC/index.html","3b9f197451dd32bd5909c718095b6e00"],["tags/Style/index.html","01a50713af79562fdde291c6e6e99e09"],["tags/Ubuntu16-04/index.html","b9822ae4391436228b14605906006c11"],["tags/Vue/index.html","4aee947b2e5cd0aa04f6f374f5d2919e"],["tags/Workflow/index.html","0bd8189a817105022e37a462b7f02349"],["tags/X-Frame-Options/index.html","b56c569ff72c8624a20dca9f4bfb9469"],["tags/aggregate/index.html","61bcd69053a38d7dc35fad6a6dcb44ae"],["tags/alter/index.html","f7b152e55379b419e67d3105a7bf9bb6"],["tags/annotation/index.html","09b45140bba6c938af2d4742ab79d87d"],["tags/args/index.html","955d98d955c1de2461689944a91285b0"],["tags/change/index.html","3c843c75cb917ff97613eed99223090d"],["tags/checkout/index.html","46a16e083ac6b77ce2eca1055c16c62b"],["tags/collection/index.html","7819583ee5731162b4fa51a2e4887850"],["tags/component/index.html","d598a8741b57506695d5ed6e72a6f840"],["tags/computed/index.html","d03d014c7da87366357cac84785ac825"],["tags/create/index.html","ff92c268ff5c3649d5bd04f6e160e955"],["tags/database/index.html","bf5ec507a52dc332744c53784944149f"],["tags/df/index.html","06bd4bffdbc889b3078f84d3ce0a3b26"],["tags/diff/index.html","cd9cf289e2e52b7b561cacb11b4f902f"],["tags/driver/index.html","4d98d6b3c1055ee0f54414a3f16eaaa8"],["tags/du/index.html","9a82dd54bfd17c841b599f593748fb21"],["tags/fast-forward/index.html","ed4560d6d84a65c03bb2302b7e699bef"],["tags/ff/index.html","42dca1ad8a89e07ac4ad46e46a0c8e07"],["tags/font-size/index.html","bd97e9546340df737dd64d0049c446be"],["tags/font/index.html","265625772783d2a37eb01d77f0f7ef24"],["tags/git-branch/index.html","45b1ab5a1a71055df91720bc0937ceb7"],["tags/git-index/index.html","b83d35beb95dc21f36eaaaa9a11ede57"],["tags/git-merge/index.html","9c55c06bb9e249be6bdaad8d6032050b"],["tags/git-pull/index.html","cb662341e99f22e308254e9bea85ef10"],["tags/git-reflog/index.html","7885c775f397c8f7c4ce66eff71c6819"],["tags/git-reset/index.html","54d57684994b8d726e74f2ce4d666a1b"],["tags/git-revert/index.html","a5581d0d61d13a2b21c4745266eecab8"],["tags/git-tag/index.html","2cf00371abe6bd82db3a73aa59c66e40"],["tags/index.html","1a39d63fa1072ed7d56eb41a62b05bf6"],["tags/jps/index.html","2fe0261353ae62a99ca2573b83ce0235"],["tags/kwargs/index.html","5bc6b7c64a35e8cad327965ccfd4f0f5"],["tags/mac/index.html","a13c511aa23bcbac219d6d8fe6a985b0"],["tags/modify/index.html","ca80637a52424da22da59ca7e3207c95"],["tags/no-ff/index.html","43bd756097a77cb4c9f0ed850142584e"],["tags/rewrite/index.html","838de1b675d4f5bb001b8aef5c0a53ff"],["tags/schema/index.html","a98d8427781fee6402083da2dad65fee"],["tags/shell/index.html","8cc8b4bb03f24cf4ab5da007653457b4"],["tags/shiro/index.html","7fdde6dab11eeadca2dc9c16bc7d9483"],["tags/synchronized/index.html","5548cca0b4478e6b20975be6637b038b"],["tags/this/index.html","cbc6e76a9e21a7a8f7bc4e107479243a"],["tags/tomcat/index.html","d991d68b706e12614825fedc7a659352"],["tags/true-merge/index.html","aaf64fdb27035590486792a313194f72"],["tags/url/index.html","2db5a828a83d73fa80674526f6e087cf"],["tags/windows/index.html","dbc62addef1d5f26116f463fa5a27e3f"],["tags/一棵开花的树/index.html","df8ae33e27859b2e7df6c1f9aed09eef"],["tags/介绍/index.html","33bb804814cde9a02f1e6ab86ebff240"],["tags/代理/index.html","adb7ee4eaed5b7622beb6eda52f66c7a"],["tags/以太坊/index.html","5f659b255dd4d870e77a19196008e05c"],["tags/依赖包/index.html","7611a63fb9013fcc75c3eec5809ea507"],["tags/修改/index.html","1599724e01a3bf8adfd5e7c565e615b0"],["tags/值传递/index.html","ba9c9e1fcde8c32e3a54ad30269d5152"],["tags/冲突/index.html","6a044147a4d780adff6ec8ff2dad220d"],["tags/分支/index.html","0e27875e83cc18bed8b7c72251b47984"],["tags/创建/index.html","f0d315a442d7fb5443de77ff16424eb9"],["tags/创建数据库/index.html","468cd7aef6a3564dea984845da4ff642"],["tags/区块链/index.html","8ab7ca1a27bdbd10c7da52934d68c3bf"],["tags/升级/index.html","90abef12692544685f2779d7451647ad"],["tags/参数/index.html","83b4e36293f8747783f53fa5b49e3c8a"],["tags/委托/index.html","360c0fbcc32eb881a2cb16ab994912d8"],["tags/存储/index.html","c22874f6f00b786c46e07dcf4659e9cb"],["tags/存在/index.html","297ede04be543d8eb3b7ac47786c0f0d"],["tags/学习笔记/index.html","c7459c81f210b23bf0313cee86281d22"],["tags/实例/index.html","b75c46059ccb0501aad038484af0836c"],["tags/容器/index.html","28f7b0bfa33d90a2122b2d5b81cbb0cc"],["tags/工作流/index.html","b6068c32baffcf6a6b7509ba7b310b20"],["tags/工具/index.html","2795114f612f6f4b78e92192e47ca1d2"],["tags/席慕蓉/index.html","0f836a045d492477bab6662f3c4279da"],["tags/微信/index.html","f8d0346830953b004414ba4de2851174"],["tags/插入/index.html","90a8a44d5c103e84bdd617b107ba3545"],["tags/数据存储/index.html","6f5a77ca85c539e5fbdbb487097b499e"],["tags/数据库/index.html","c50e4088e8d8dc71b9031aaa5e88a34c"],["tags/数据集合/index.html","1d6babcbf16bf55ad8b064cc5a01c292"],["tags/数组/index.html","745859ebf0bf90b278885dd748be27f0"],["tags/文档/index.html","d948dd42c633c2326fe5d2723c6b4a91"],["tags/文档流/index.html","4e9ab8bf6bb7e439843955128993a5f0"],["tags/智能合约/index.html","f436ab4be1d4339f35a590191c018571"],["tags/标签/index.html","ac7d4d4673be1611b3cfbed697b7ccd1"],["tags/模板语法/index.html","a926e16ab99044cf91b14c5e3d72013c"],["tags/比特币/index.html","1b8146a97670af995e497bc6d11b695c"],["tags/波浪字符/index.html","9208abbc98072f336ae6bdadbea95d76"],["tags/注解/index.html","de8e77df087f4de27fb9daa2fac67336"],["tags/用法/index.html","52137a85d024da741ffa79077f8728e2"],["tags/穿透/index.html","5a7e8b82044cd8babeb941aaaa2dd242"],["tags/端口占用/index.html","10c9566c6af6007ec40defe99d1cd8bc"],["tags/笔记/index.html","2e2c3d59c10e7aa2502756a8206b1c87"],["tags/符号/index.html","c45f72b07f6e23dd918659a35f8a02f1"],["tags/组件基础/index.html","b953c9b58e9915d370a6bb87063e963c"],["tags/绑定/index.html","8357d36d23be21e3fff2528d67aab213"],["tags/编程/index.html","3da9f62c7cad319bd6c197beafa11c39"],["tags/职责链模式/index.html","cf876529b2b954d2731c49bf2a1d2482"],["tags/聚合/index.html","1da0721748c8686290778dfeb177f5b2"],["tags/自定义指令/index.html","adc9e02864bef1d9e40f2f707fa9bb6b"],["tags/计算属性/index.html","5f248c110c6495f73d58df6888fb0bc9"],["tags/设计模式/index.html","cfd1c7f9d0e837174b4bac081edff044"],["tags/进程/index.html","ef5ee47024d4a741c6eb0e6e8c47bac8"],["tags/远程仓库地址/index.html","b3f32bd5b40de8baac1c0d05a2887115"],["tags/逻辑操作符/index.html","2419217ec3121d705710c3c89cf23a17"],["tags/部署/index.html","a7f5f4b289371f2c4c5172f96bf783b1"],["tags/难度/index.html","071e01489d458b9165615c46618f1e86"],["tags/集合/index.html","b02a92ea3c27953b5c13eadc07ef0004"],["thinking_in_programmer_life/full-stack-programmer.html","bd942f8e3af0f2e2f4cb65935bf66edf"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","5b74f14bb37ec0ff0a661a9c858d669f"]];
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







