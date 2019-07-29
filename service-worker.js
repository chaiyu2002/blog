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

var precacheConfig = [["Kafka/kafka-introduction-note.html","189efccb6906e38437ffd9bfe72b79e7"],["Kafka/kafka-storage-principle.html","16defcff859cc2049fb9a1d3faf3e809"],["about/index.html","727c74458f6b92a38aa6fafa1c9a8f2c"],["archives/2018/06/index.html","593d35ddfe1c17b0d51eede2e35d3cae"],["archives/2018/07/index.html","7b635a604b0a6df97083dc365038503a"],["archives/2018/08/index.html","7ff01437291b421544785fd61e95b9b5"],["archives/2018/09/index.html","d5b15e848740d69065b869b1c98f25c1"],["archives/2018/10/index.html","14792ada8a41b9057f2bb8b53e4d1ef7"],["archives/2018/11/index.html","616326ae3de601e510ff9daf4fa976b1"],["archives/2018/12/index.html","c90429c854dbdb24a8b271178f87c58c"],["archives/2018/index.html","862f008f855205b1c70a5410d1ec311f"],["archives/2018/page/2/index.html","6a748a403f015f678f7ef435fc0be052"],["archives/2019/01/index.html","ec09fd59df4a4202ad9cc7a70173a20d"],["archives/2019/02/index.html","daf648e54ca41128f559f7b50b9f901b"],["archives/2019/04/index.html","7560e4512f56418543d96a624608b06b"],["archives/2019/05/index.html","220cb6b301959f3110c7b9f9ba9204bc"],["archives/2019/06/index.html","8f584829ba794e23a45a1ed8a699b203"],["archives/2019/07/index.html","019273d59640c50cf7696b242ddec631"],["archives/2019/index.html","d06e80c4479c3861c8df6f414a95b58d"],["archives/index.html","b7725103c182c15e0200eff194928993"],["archives/page/2/index.html","5382cb9232f4b74b5dfb7d010665673c"],["atom/index.html","83c2cf72d7593413d4d4971b74c88af9"],["blockchain/base64-base58.html","e14bbf2f56771559b85cc30de2c47cb8"],["blockchain/bitcoin-data-storage.html","1bfa05f9fd4745f77cd8a630bf29801a"],["blockchain/bitcoin-difficulty.html","5c4c05f67378624b47e9259335e46bf1"],["blockchain/block-chain-ethereum-contract-program.html","3dc132a361100c0314319c2ba48f002e"],["blockchain/ethereum-programming-introduction.html","0f7ceeaa79d759eb47ade40f184663b3"],["blockchain/ethereum-rationale-introduction.html","9b04855d890f5e0e69b4ac495d97bec5"],["books/index.html","6c7bd9ce5f4d827fb18c4a5111e458e6"],["categories/Blockchain/index.html","50aff6b3169071982b9e68a2bbe2e18c"],["categories/Blockchain/以太坊/index.html","26f6204f80be838768b83cdd77208749"],["categories/Blockchain/以太坊/智能合约/index.html","e29be813a8237c293b291deb161c5a8e"],["categories/CSS/index.html","c6b449129fd00c0195cb855a1e612194"],["categories/Design-Pattern/index.html","682ed53e84d2681ec42218c0f88e96b1"],["categories/Git/index.html","7a7e3f96d1d4564ede5c364d8ed4a4f6"],["categories/Java/index.html","9ffa7e3b04eeb5367450cd4bf90b337d"],["categories/JavaScript/NPM/index.html","f058fedc82b3e01be88367e848373925"],["categories/JavaScript/Vue/index.html","5e326ccbf2d7df157c8645155741a2f6"],["categories/JavaScript/index.html","9b2354154f1b167140904805ec3632d8"],["categories/Kafka/index.html","404b62bf1e85055903ebe1fa75c127f3"],["categories/Linux/Shell/index.html","9e003d46676aa7ae2ba6fd93d54b84c2"],["categories/Linux/Ubuntu/index.html","9fb7ee22552fc7baccffdc4c2da444d3"],["categories/Linux/index.html","e072540b92acce4b7169d63081979db5"],["categories/MongoDB/index.html","4181e7af30ab8fa06150e3cf0bc3050b"],["categories/MySQL/index.html","ee0269841b3075d92aa9c42d44d6d3f2"],["categories/Python/index.html","5e32f7905243477e81ecc7f56e15875e"],["categories/iOS/index.html","bafad7e31e67349393073782d7cd7ee3"],["categories/index.html","0ccf70f13bc41b58a44196f36c0272ec"],["categories/微信/index.html","650aff079baa411dd626bc291a76809f"],["categories/杂记/index.html","c4ade8e1aca61cffc529481ae5ec2f93"],["categories/程序人生/index.html","acf7ec0d09601100549b050b342f78b5"],["categories/计划/index.html","7e1e45e9dec5829f81010916d0709e1b"],["css/css-font-note.html","76b15a4b31e8d10cd63759e97915ad0e"],["css/css-normal-flow.html","c96c8317df2a2ab505d518ad88f7cc5a"],["css/css-sass-introduction.html","e02de624dd999f4f886bdec26656ab4c"],["css/main.css","41dc741f4c884bf1ee791da7f3dfc10a"],["design-pattern/chain-of-responsibility.html","f46877790b9b7de2f0caa295b2bd3017"],["design-pattern/delegate-and-proxy.html","81ff30afc7b80d061580d89260fd9e35"],["drafts/configure-multiple-vue-project-with-nginx.html","7a5501f988b6c02053cf66542c00eacc"],["drafts/iframe.html","fc225e0f56baaee73ee65fe01d12a90e"],["drafts/record-re-install-mac-os-10-12-6.html","3506996827bbdb6f55636901ead6b395"],["essay/note-ximurong-tree.html","1d0793768f1c72739dc130f65921c819"],["git/git-DETACHED-HEAD.html","48c00e89c1a4e34169c596ee097aaeee"],["git/git-branch.html","ce9fd647c6156dcecf242c9e98b76188"],["git/git-change-server-password.html","d1e44dbadb8e940a015ed73782244ea9"],["git/git-checkout-1.html","e886ef15dc0cd628930cd45ab0c97fb1"],["git/git-checkout-2.html","f0c44cf1664b853b46360cb38032a232"],["git/git-diff-m-symbol.html","bd21938cfa894a30538ab7fb0c556e62"],["git/git-git-flow.html","d8552fd88e051acfd929d0405acbed12"],["git/git-git-merge-ff-no-ff.html","7042acd897e1bc3ed04b50fc0cd3b9c0"],["git/git-git-merge-true-merge.html","fb557c037422f35857bb0a7db2bd35ee"],["git/git-gitlab-flow.html","5082974ccda2c7632c9fd3ad82f4d920"],["git/git-index.html","84cb5cec9a2966b0bb6c3bcc424257d1"],["git/git-merge-choose-one-side-code.html","848b0966835f5f8ac105fa8f693488d9"],["git/git-merge-exist-conflict.html","eb95b5bb2fd296c7d2ae809345ce1518"],["git/git-pull-1.html","0160fe84809b2f4fbce4f34cc316c724"],["git/git-reflog.html","1d41d60b9873b848618956a58ac495b0"],["git/git-remote-set-url.html","5369a20bce4f6dc9481bb83e70a35824"],["git/git-reset.html","1a649c84249a996a1c6f41fa57fde012"],["git/git-revert.html","147306e65c154a6d7378011f60cbe985"],["git/git-tag.html","1e48ee2093da64de5a3803877e23d212"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","590bf33ab4c12ed0eb6197f345ee061e"],["ios/ios-oc-kvc-1.html","99ef802210b3157b8e0f0b395d269c00"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","81f5ee076ec818eafe007e535658aa17"],["ios/ios-themes.html","d8edb66c717fd09e7b96f81f7600430f"],["java/java-annotation-request-response.html","7ed5a1da5de4462bb3f9bb6f1992d604"],["java/java-array-and-container-note.html","8f9d082486f0934421bc56d533e1c267"],["java/java-deploy-resource-folder.html","dbfac7ced0b9947d3e2a71a000a36340"],["java/java-jps-note.html","99f0b88b8ee9afae197d29607b5d41d9"],["java/java-pojo-bean-note.html","cbcbf7f3eefd196d50fc93f8bb57bdbc"],["java/java-shiro-note.html","874651d5af1168728ffe78bde1fa3c13"],["java/java-shiro-springmvc-integration.html","2dbbb3d142c17509d680bc9eb114e543"],["java/java-spring-autowired.html","ca9f8b0cb9330b74dd6a5637a56d4d7d"],["java/java-spring-configuration-bean.html","979ebac2248a2674954eb1411a96f795"],["java/java-spring-restcontroller-note.html","796e8c3f01ce4848bfd0fb41a303986c"],["java/java-springmvc-X-Frame-Options.html","60cf8d3b0a90596034beec9073c0857f"],["java/java-synchronized-note.html","170e64511228ee406372215ea8226a14"],["java/url-rewrite.html","4587168980455a91b3acf8dee16a2d4c"],["java/url-value-pass.html","89eb9e38ce34130ecdf6f1fd040603ff"],["js/js-logical-operator.html","c1cc8d6e8f49782a02f3aca9e65caa93"],["js/js-npm-symbol-caret.html","835059b06881e2dfd6699e64f2f6d8e0"],["js/js-npm-symbol-tilde.html","29458ad8ba64aac7bea4f716fdab828b"],["js/js-this.html","615b83512f1ba51fb2941a1025570783"],["js/js-vue-note-components.html","d0b8bdeb076fb3eb133c64550308193c"],["js/js-vue-note-computed.html","038b08da24e3c4fbd159b5b2ec8ca76e"],["js/js-vue-note-css-style-binding.html","ced7de63856ca7c54796de9e735bd15e"],["js/js-vue-note-directive.html","35ee3c1ab2c563bbc5e301d24f99d9b9"],["js/js-vue-note-instance.html","636624082b10ea19550ee0a6fd885ffa"],["js/js-vue-note-introduction.html","31464d95e400ec1c1c03d490e20f1c43"],["js/js-vue-note-syntax.html","ba57a47e2c601fb6d69d369c101bfec0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","2bbcfccd5a1df9c0e1a9fbaba009927f"],["linux/shell-command-awk.html","c1dd10de0c0c0e469fdf9d76920e1b7e"],["linux/shell-command-df.html","3ca7b034ce252dee8e65093b1871d078"],["linux/shell-command-du.html","32b00a39c8996bc89a6841c48cec6af6"],["linux/shell-command-netstat.html","b219e9770ebd67dfde2a73f3d79cc1c1"],["linux/shell-command-sed.html","75543cb25d3990431d6beffca530b61b"],["linux/shell-command-tar.html","f2c279d824096fa6d50b83499737251f"],["linux/shell-command-top.html","07d03afec5b67f82806c48bcfc07b276"],["linux/shell-command-touch.html","e6e1bb7e8780f1cc26d9884adbc30cf7"],["linux/shell-command-which.html","ac42a7145484e84722f4ca1183ccb1b2"],["linux/ubuntu-user-add-delete.html","b7af3798b2b654b617194749bc8ac65d"],["mongodb/mongodb-collection-aggregation-introduction.html","1da3554573123a7ea79ed034f229d853"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","883d396cb5a8e7395fc3b86f2d4439e2"],["mongodb/mongodb-collection-create.html","5a37f12b2b86fb74755ced4c1ecbbe83"],["mongodb/mongodb-collection-delete.html","8e6e43c7eb11c92eb7dab23ad378b8cb"],["mongodb/mongodb-collection-find-1.html","8637efba87bcc4e6506c2e982f2da014"],["mongodb/mongodb-collection-find-projection-operator.html","a08043cd1ec4635a43f15c1bca827d17"],["mongodb/mongodb-collection-insert-1.html","1604f0452d7bcd7f13054f95890ab6b4"],["mongodb/mongodb-database-create.html","0be812cd16c79b055921e263a01c7548"],["mongodb/mongodb-java-driver.html","6cbaf545a988d7a81c6ea69adad6defc"],["mongodb/mongodb-schema-design-note.html","6ace48c60f9cb3c74640b9292fa988e9"],["mongodb/mongodb-study-note-1.html","8a800922b4850991c897a285c7d7c144"],["mongodb/mongodb-study-note-2.html","7c417bbd350a8791853e9c17b381e6a7"],["mongodb/mongodb-study-note-3.html","03056cdb23adff648b4719b9cf14466f"],["mysql/mysql-ddl-handy-book.html","481703fbf9a8c8019501a59b5bf71d25"],["page/2/index.html","5c27057c29ab44d28381b1257e0abdc1"],["page/3/index.html","9838b513ee8ea2e7b79eafc68b115db8"],["page/4/index.html","705459234e5ef34df442947c525fbe96"],["page/5/index.html","ccbe932ea7286332b1a2a556c73a3b63"],["photos/index.html","314d238ea96243db8e4ac8dc642454c0"],["python/python-args-kwargs.html","c4ea68511d986d4db333ad5ef386c6b8"],["python/upgrade-python-under-ubuntu1604.html","20ee6e49f05e8195c1358062af49fdbd"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1581ab7d9a5a5548f4c3b683e3f07e3d"],["slides/index.html","422a8d23db69a77eeaa748bff65dbc53"],["tags/Autowired/index.html","37b193ceaa332f4dbaabde54ecc47087"],["tags/Base48/index.html","4ec72d9978c4685abcde0383bc735067"],["tags/Beans/index.html","98e5683673c2983f465fe2d729b53862"],["tags/CSS/index.html","06ca7d9a9986ed23dd6f1c9fee3d56df"],["tags/DETACHED-HEAD/index.html","cf4de99c2117484a4d72a69d4781d06b"],["tags/Git-Flow/index.html","2a7c728270748730544484046f30245c"],["tags/Git/index.html","d066d1d866e2e37a1348f80c47076ef5"],["tags/JS/index.html","bb6757ccb3ab34aa80631c3693460793"],["tags/Java/index.html","63e2b41a58109436a8a4d3adc90738da"],["tags/Javascript/index.html","fb78459d589b8aff5404496e4f60c273"],["tags/KVC/index.html","33facdef7a10b89f73f1da026e61313e"],["tags/Kafka/index.html","128e5a2e3b78c52ef6ad74449275d971"],["tags/Linux/index.html","981ca01837c235f54d64a5eec8e15a2c"],["tags/M/index.html","cfa23e8fc6fec9973e23d58fb238ac6f"],["tags/MongoDB/index.html","7065e64a8199525bf03df9d87bfd9aa7"],["tags/MySQL/index.html","ab606714a3a62b1f45d028ba0226e487"],["tags/NAT/index.html","5d216a2c677e4ba467ecba1a0b6bce77"],["tags/NPM/index.html","7aaa6e9b605506c8888c9b01c24b7893"],["tags/OC/index.html","80ce991d2c8baea7cc78d01069e168a0"],["tags/POJO/index.html","1e7e4f7b52d1fe3f4b95f632a344ca18"],["tags/Python/index.html","7c865c3b3b8c4361b6cceaf621704624"],["tags/ReactiveCocoa/index.html","47ffc3eb9975e7d2da55131f78bcdb0c"],["tags/ReactiveObjC/index.html","ac91a7f5246cc87c5dd6765369213fab"],["tags/Repository-not-found/index.html","b6ddb3abea20bddb5893323af6c4b423"],["tags/RequestBody/index.html","cbeb24dbd2ee69d03f99496f05039bf0"],["tags/ResponseBody/index.html","fa0e9c70296025abc91fe227efa99aee"],["tags/RestControlle/index.html","0e3e1c0e81d3de6a61cae938cc98a4de"],["tags/SASS/index.html","ff797ae71553b5d0f72b8671bed5bf00"],["tags/Shiro/index.html","b0a5f78e55bb8dc2ec909c24fd4cbe54"],["tags/Spring/index.html","27d7f248b91942b23f15788495de2ba6"],["tags/SpringMVC/index.html","13319b68037a8f854debe83572a8eb6f"],["tags/SprintMVC/index.html","140c99332f24e0b150be083d367a873c"],["tags/Style/index.html","4dcc52a6411f071ec089cdd2eea3d6ec"],["tags/Ubuntu16-04/index.html","06aee57495b98dc71d4679f1189718ae"],["tags/Vue/index.html","2152315278d4e548ceb87f31dd34251a"],["tags/Workflow/index.html","5d0ce69cc9a1c99be7dfef22aacdb97d"],["tags/X-Frame-Options/index.html","081864251cfe21377ea902a723be4d13"],["tags/aggregate/index.html","664f119b0435ef877c0c537e24f37416"],["tags/alter/index.html","c66b4cf73d3dbddc3d305ce0a472f9b2"],["tags/annotation/index.html","3521e4fc707a64ce2c762e61a4d7cf72"],["tags/args/index.html","6f55df89dd1dbc12e51d0e52975b5380"],["tags/change/index.html","41cbe9d7ff8e9180a6ceacdfe776805d"],["tags/checkout/index.html","e110fcb9942f99d9fd5d58f8aaf07159"],["tags/collection/index.html","abc0c02f1510d2fa30af76c29497c4ed"],["tags/component/index.html","9b7e89689b471462800b73bab00f4cf8"],["tags/computed/index.html","e8512eb1bee23a286b96fac5f43f6717"],["tags/create/index.html","c42bf4f6060b51953a5d16ef60809813"],["tags/database/index.html","23f15c9ccd3314341fd72be16afea284"],["tags/df/index.html","eed8cbdf3d515748e6f1f8c0553cd361"],["tags/diff/index.html","5c63b5c4c53bc8865744f791a352a7c6"],["tags/driver/index.html","9cde7e1eb3ce09aea2f944b2d7e4d9d9"],["tags/du/index.html","087eb7dc32202bd501e68ff8a9eebbeb"],["tags/fast-forward/index.html","693a3e30f17cf1ba83f8552254c26e58"],["tags/ff/index.html","631500d645778195ee25ed4e56fb8e5c"],["tags/font-size/index.html","dfc9b56857205c1b78af1aca201f45bd"],["tags/font/index.html","2564fd41a9136369cb94548cbe9f506c"],["tags/git-branch/index.html","a123e260db3a061cccee1ba92322b26c"],["tags/git-index/index.html","154162228e7003c6d25451fcbef561db"],["tags/git-merge/index.html","c3c057d1f18320c59228bc09e534a7e5"],["tags/git-pull/index.html","78bd1dec55089f4ca0dd820152c75b49"],["tags/git-reflog/index.html","bddc430f2a75f35504a76984a18c8ad6"],["tags/git-reset/index.html","66617a95566f3c62cbbe66f4982f414d"],["tags/git-revert/index.html","a1a8c5a78ec62aa271bca1cf987529f6"],["tags/git-tag/index.html","66285116b1c88767504c2d19ac035a41"],["tags/iOS/index.html","8cae8f995cbfeb2c2b632e9221b8c83b"],["tags/index.html","557f2925b798a223704f85ff2877e779"],["tags/jps/index.html","89856cf5a8639e618b6045d62c651fc1"],["tags/kwargs/index.html","155b72b0d4a916bc2f7010b2a48be148"],["tags/mac/index.html","d46cab5698dda01a443f32cff8a9581d"],["tags/modify/index.html","e9289d8988d08b3e4a53e7adb18e34aa"],["tags/no-ff/index.html","dcf8c3ccd40f65254636bb62d0868209"],["tags/rewrite/index.html","2138f7eb2c21f8541a63b829b956993b"],["tags/schema/index.html","52ad91eabacc41f82db3cceaa0c24086"],["tags/shell/index.html","754a8c41c77a1f5753088310a6bc81d0"],["tags/synchronized/index.html","8437c3223561044e77680e834d602aba"],["tags/this/index.html","6415162a2c91d30d8e10ab7ad7279163"],["tags/tomcat/index.html","219f750d7899920cf298fa6b63cd62aa"],["tags/true-merge/index.html","6e9383526342b47aeda5d7f6362ccf6b"],["tags/url/index.html","a0a3de0a5a95012c878bd167c23fa830"],["tags/windows/index.html","b87b909c9537b7ed73f2f0e21aebd20f"],["tags/一棵开花的树/index.html","f1cf617fb7177e5aaeb0ca888968d8dd"],["tags/主题/index.html","9576994a3e740e2c855b85dce19dbba3"],["tags/介绍/index.html","73e6a04aadd79f7f61bcfdc53051d3ca"],["tags/代理/index.html","b9108b0aeebde16a98d4719103518f6c"],["tags/以太坊/index.html","27ab3a05a8d9e4592ebc170cec15d9bc"],["tags/依赖包/index.html","17b5846682a6046989b19729a03ce501"],["tags/修改/index.html","b7899e9eb6bd6f3cbd5c814480ba2a21"],["tags/值传递/index.html","988f0e6dcb785ed45079fed278d3cbda"],["tags/冲突/index.html","1127babeae48360827dc06ea768037eb"],["tags/分支/index.html","380148fb2efaf52cad312b917c8ea597"],["tags/创建/index.html","9b1db703594d8fb59c0fafd185760ad1"],["tags/创建数据库/index.html","14bb33828e44e292d9bf5f9dc0485b83"],["tags/区块链/index.html","39aad3faca18d82926632b8b849a5c93"],["tags/升级/index.html","b1e3802d4103081205a3ed1a0af840b2"],["tags/参数/index.html","f69843accdb5638e28fbbff8ba844b4b"],["tags/委托/index.html","f254ccd884c9e29e6855fb090dde9249"],["tags/存储/index.html","8c2aff9a4639cc91d8f5ef1e0f0e25ca"],["tags/存在/index.html","e10df1d753e2e594caa2258a113386e7"],["tags/学习笔记/index.html","3a01d4ef8e7de4e38dfbbad11d5edb15"],["tags/实例/index.html","3af5641f4ba190c9c00097260b94e6af"],["tags/容器/index.html","6b5d9407d58e5be1c81740e4489ff9eb"],["tags/工作流/index.html","e81bb68b0474e7c6748d539493e546c7"],["tags/工具/index.html","424f8f3bb888d0718209f5f8eeeca334"],["tags/席慕蓉/index.html","c53e7102f4d2909f841e0b173e72975a"],["tags/微信/index.html","65eed9d5b08e4ca22b2324c32940790d"],["tags/插入/index.html","6b136fc5efe9465a82bae44b43a07b0a"],["tags/数据存储/index.html","72519ab425dc06035e9c0bb5b1f5d8bb"],["tags/数据库/index.html","80eaec53259f9f8fff07add304a06fd3"],["tags/数据集合/index.html","1674dd99c29e68b0c680bd0a6ac6bd7b"],["tags/数组/index.html","cc231690d839a9e22ae51c9d6221603e"],["tags/文档/index.html","20b12392018251e99a1c5c8eb62ae507"],["tags/文档流/index.html","7d4372e94da311d02ae9baabab724168"],["tags/智能合约/index.html","715591f39b448633ea21454910bff0ff"],["tags/标签/index.html","00e7bd1e4955372795bc9766b47a2d57"],["tags/模板语法/index.html","d864a7d76136e37cc69f30ab08dac24f"],["tags/比特币/index.html","2aa4a665dd3160a56d52657eda6b17af"],["tags/波浪字符/index.html","54a1c0f8ae633933eb752c8e4ccba52c"],["tags/注解/index.html","1a0704a493e7e95645d46081146a2210"],["tags/用法/index.html","4f8990d22e3cefb6a31de22b5708741b"],["tags/穿透/index.html","2ae8df328ee131b4e8159f5214da7790"],["tags/端口占用/index.html","dde9726364b280a01c8ca752d4153c1d"],["tags/笔记/index.html","adfa3599f35ac2eda890569734392c6a"],["tags/符号/index.html","2ab49b2d39487114847cb20f6542a14f"],["tags/组件基础/index.html","f06432bd53d2549f80d24f76ef9be958"],["tags/绑定/index.html","b672fa6a1d3e695745d428a361ae2e50"],["tags/编程/index.html","398f946842fbc269b1950960e3e83b40"],["tags/职责链模式/index.html","766670fc83845da9d9d53ed0923eaa9b"],["tags/聚合/index.html","747c1b9b6153cc7d553d7b99bde0d189"],["tags/自定义指令/index.html","226b5848ffa30cf04d7f1fe2446fb7d2"],["tags/计算属性/index.html","71716f2557d4d683ffe522acc0fe8e23"],["tags/设计模式/index.html","0e0831030de814b3fa698f2915b31518"],["tags/进程/index.html","17c9f71612bc0c18c21285c4c3320d86"],["tags/远程仓库地址/index.html","bb98593a4cb7c7f1e63b076cd78a9df9"],["tags/逻辑操作符/index.html","0596d52ddb2e4f7ef466180be00e3aaf"],["tags/部署/index.html","7f8d0a7bb58e17b23764e44796d100be"],["tags/难度/index.html","20b4236c436326b988762e29c3b316eb"],["tags/集合/index.html","22117b3ca694f0c5a51421783d9ac6c4"],["thinking_in_programmer_life/full-stack-programmer.html","e5b9e00ef349100a6305d84c031c6577"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","cbc9d6024ffb57ac3859a10770fe60e8"]];
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







