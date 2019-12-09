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

var precacheConfig = [["Kafka/kafka-introduction-note.html","68fd1c0607346fc73a1124d7094e56b9"],["Kafka/kafka-storage-principle.html","b2d77f4de2bf4f31dbff5a778381eb7b"],["about/index.html","52c03228de6d74c053c3d107db06026a"],["archives/2018/06/index.html","d657a08d63bb402df48dc3c81423f493"],["archives/2018/07/index.html","549eac0feeed44d8ca407c31cdc95080"],["archives/2018/08/index.html","21b83e0aecde194a7337b9754c0caf91"],["archives/2018/09/index.html","0d59a970a0e4df04c797a4c6ab540ac0"],["archives/2018/10/index.html","cdbc308c6ac0edb92dbf08901dc16d3d"],["archives/2018/11/index.html","edc64bb98d063bb7667579afd8399c73"],["archives/2018/12/index.html","2800942ebb38362ebf45f0b9f1a3eb50"],["archives/2018/index.html","ce49ca9bfec313d252110cb6d019bd1a"],["archives/2018/page/2/index.html","6446face99e1f88b05248605f1cfd620"],["archives/2019/01/index.html","91800f51e7ee8e136ce78a5d56503156"],["archives/2019/02/index.html","db58eec4187312c9f51b137c4fe71a50"],["archives/2019/04/index.html","39236e40fd50a5dffdb14841756cbd3f"],["archives/2019/05/index.html","b8f4367b604f35ee9c0653164834ac73"],["archives/2019/06/index.html","888d37ba373a3f1a26be2c18e9b355c7"],["archives/2019/07/index.html","b293d98b87f9fefaea0a287078dd8ae8"],["archives/2019/08/index.html","741828a13c31f9d9ba7fa33e0730e1ad"],["archives/2019/09/index.html","eca271bc9ba0a17eb57f24a1e247fab0"],["archives/2019/10/index.html","e0234fa5c2a048b500ae519f7e9c3893"],["archives/2019/11/index.html","f766e04e6d9013910c9d510267a766f3"],["archives/2019/12/index.html","e8a3b3d2af6e7bffd67c54bf12ba43e0"],["archives/2019/index.html","34bd9bfed58c84c9ffbf56b21c5ae25e"],["archives/index.html","d38248b613fc932aaa09b8acf64db257"],["archives/page/2/index.html","52fde7211252fbff1454e01d544331ef"],["archives/page/3/index.html","69f37a2c5054be40e5d6c14a4480132f"],["atom/index.html","0fc74df757c46fb4bb86af2cfd1ca189"],["blockchain/base64-base58.html","c969d68c0b49793a6a334cc3f42c6ba8"],["blockchain/bitcoin-data-storage.html","7fc430bc4783d1dca5b9d4626b1bb578"],["blockchain/bitcoin-difficulty.html","de7ed44aa8692412029a3cb2b054f299"],["blockchain/block-chain-ethereum-contract-program.html","126558e424064dfa9f594fae39ddf391"],["blockchain/ethereum-programming-introduction.html","d8f508cee0bbb372ab38fe9dbef4b69a"],["blockchain/ethereum-rationale-introduction.html","030f9f55d88621533400e8a81f88dbdb"],["books/index.html","0943d85f585e4ca55ad0a97469231d1b"],["categories/Blockchain/index.html","6b17c5ea9917b57742038e8858102ea5"],["categories/Blockchain/以太坊/index.html","3b47981f2c31adc01463fb3af9af93f5"],["categories/Blockchain/以太坊/智能合约/index.html","7a2d554177722b0c939bc414d3b301e2"],["categories/CSS/index.html","09b182eb0e300f26694f70ffc955c070"],["categories/Design-Pattern/index.html","27be252f6b61298434d3a365b6727e03"],["categories/Git/index.html","99cb14c92e31b42d19cfa118c79f6579"],["categories/Java/index.html","1764358c8e5537859dfa460ef3478bec"],["categories/JavaScript/NPM/index.html","f7785398f52922558b643a6fe927a1f3"],["categories/JavaScript/Vue/index.html","ba3c14fdd0fe2ff05048006888f15ae1"],["categories/JavaScript/index.html","e2213c9dfa2ad935824207eb27ba3e4f"],["categories/Kafka/index.html","dbf4e1652f2048897d582c19130155dc"],["categories/Linux/Shell/index.html","b9478771abb417d6ae3701ff91c241aa"],["categories/Linux/Ubuntu/index.html","b1ccfd092049b49a18a4a0340e928941"],["categories/Linux/index.html","c6173832470ff2718f0a40fe2f95606a"],["categories/MongoDB/index.html","b708ed50a231423f90c28971b293e077"],["categories/MySQL/index.html","2c9511ddfab2b83b88554775aafe956e"],["categories/Python/index.html","7c412a77f4c4454011acd3bea0b8c443"],["categories/iOS/index.html","ceb845bce794f8619d56e84f51ccc94a"],["categories/index.html","d7817291df3b69f3870af309061cd694"],["categories/微信/index.html","4211a5a674d6561c628c932bfa7da6aa"],["categories/数据结构/index.html","c241dbc0ca2c70e4fe4e22461a260425"],["categories/杂记/index.html","88d9eb82f12e950516377ca6feb25ced"],["categories/程序人生/index.html","ca4954b4fb2091ac53f1c69fab5825d0"],["categories/计划/index.html","5e5812de309e83ac0a70a065e08c2ca6"],["css/css-font-note.html","913c298da693cf0d27cbff354450f29a"],["css/css-normal-flow.html","6fa5fd95d80713149099ca5c2bec28ce"],["css/css-sass-introduction.html","5f7672c833f96f1b7e945b85204a42d7"],["css/main.css","fdb164d0a301725f3252ba3110024b8a"],["data-structure/B-tree-note-1.html","37a46b8923e1a6bd149b5569cde4aec2"],["data-structure/Binary-tree-note.html","2e4d0e4a734aee66b018297d65c2b85c"],["design-pattern/chain-of-responsibility.html","bd92fd533149b3c6a0b208048521228c"],["design-pattern/delegate-and-proxy.html","98fe130fb4ba733524a296bb4d85aa4d"],["drafts/configure-multiple-vue-project-with-nginx.html","601ec49d914fbf8c740110f7a635892a"],["drafts/iframe.html","9b0d43bd0067c983062e36d65ac677c0"],["drafts/record-re-install-mac-os-10-12-6.html","4d59cd534cc51b6dd9a81674cabd88e1"],["essay/note-ximurong-tree.html","9337fe4735ecca903b41de844fd2256c"],["git/git-DETACHED-HEAD.html","6cf063d2f8613af16bc105be31dfdfa8"],["git/git-branch.html","725debe5a0cbd2c5d4a167f79d54f935"],["git/git-change-server-password.html","ba06148be9faf1a0959fef87d9932e6a"],["git/git-checkout-1.html","4d430556c155ce21360983ffc305ba4e"],["git/git-checkout-2.html","031e80f92d7ce69ee354229a5e5719ce"],["git/git-diff-m-symbol.html","661606f0daac2cbe8ec091c904ea2dc0"],["git/git-git-flow.html","c29ed75ec73adc373e35f028cf62b1e4"],["git/git-git-merge-ff-no-ff.html","29a970310f373ad9aae079f287cb6603"],["git/git-git-merge-true-merge.html","5e844d57de6af0990343c52c19872154"],["git/git-gitlab-flow.html","69472198b449d4ac7d7de61947670019"],["git/git-index.html","fa66a1076bddce8039d6b07f11a17d90"],["git/git-merge-choose-one-side-code.html","f0b8ad430d8a4cb44df575f1eca04502"],["git/git-merge-exist-conflict.html","94e94f177b67b781658cbc66fbc67794"],["git/git-pull-1.html","4088e87f0578eb79749bf66f91d43b9a"],["git/git-reflog.html","13b446ed6121a024cd4c0483d6233135"],["git/git-remote-set-url.html","850c043a0d0feae5a4f1e6cab1bafce3"],["git/git-reset.html","2cd0b7ef9f5307d7ea74eb1f0a8b702a"],["git/git-rev-parse.html","c46a2837bef650ca8ed2aa71567d272a"],["git/git-revert.html","7c65452f479e7aef695787e41e1c5e2f"],["git/git-tag.html","b5e66416bd3b814b36cc83ce3a18365e"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4558beb8537241d9beefa4f4d2ea9aa9"],["ios/ios-oc-kvc-1.html","470b20bac8e918d4ec8fe2012179ca4c"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","3a52b3aef267833b20db1788c2625bee"],["ios/ios-themes.html","a2859f2516d12279a58863ad907de564"],["java/java-annotation-note.html","e3cd60386e1a3ed7cf8d0790bc0c064c"],["java/java-annotation-request-response.html","42129480dea764ec78b91f957e193f30"],["java/java-array-and-container-note.html","9c7f0b75c02df2ffa6fd70253dfb764e"],["java/java-deploy-resource-folder.html","ce0a00801bf94f2ca20a4c3079ca3d4e"],["java/java-jps-note.html","d5fc0eab6c9883b968401675694586c2"],["java/java-maven-nexus-note.html","d1ff97d2148bcd671f92157bed558153"],["java/java-pojo-bean-note.html","4be95d717c46d0ffc6cd6f3e7774e46e"],["java/java-shiro-note.html","6bcc4c7074b8c389d76e8fa76098f704"],["java/java-shiro-springmvc-integration.html","da8e21a55223b2b5e829949438d8fc50"],["java/java-spring-autowired.html","dbb0ba87d833527b4de8d067f5059de3"],["java/java-spring-configuration-bean.html","71da8c44bf473adc4027898c62e0bbcf"],["java/java-spring-restcontroller-note.html","a7214e9709336a32498e26cba422d5de"],["java/java-springmvc-X-Frame-Options.html","c9cc5cf0fc9a3596f8e1a3328b4c1087"],["java/java-synchronized-note.html","828d0a42d630a7b7a29dcff448cdd1be"],["java/java-value-pass.html","932d5cb079236297cfb308512f76acf5"],["java/java-vo-dto-pojo.html","8c0178cebaefc7aea3fadbcc4bed7895"],["java/url-rewrite.html","8513c26ec400b4f60fef44e06c02efbf"],["js/js-logical-operator.html","5a9b5bf0ab7de95cedc45cead9ef3ad7"],["js/js-npm-symbol-caret.html","ebab5cc68fc59f49637635734c4e534c"],["js/js-npm-symbol-tilde.html","4d683c7b2d32724b763a17e6ed9445dd"],["js/js-this.html","9bf5eb0d03761bcaf603b07573717175"],["js/js-vue-note-components.html","99596ea5a630500e284f40437c68e0a0"],["js/js-vue-note-computed.html","466266d1e6ac9a776eda036a559fec0d"],["js/js-vue-note-css-style-binding.html","45e0c6e07b216f5a9e109679f09d7cd3"],["js/js-vue-note-directive.html","a24a954db077355481665aef68afe9bd"],["js/js-vue-note-instance.html","336638e3425005039966b30f0f61581e"],["js/js-vue-note-introduction.html","a3a1c3aa7320f03813dcfe55c7572bc4"],["js/js-vue-note-syntax.html","68cfba4f7d8ac3f21dab20f3f941523d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","e4d7169e78d7e83678b2715a627af316"],["linux/mac-find-port-occupy-process.html","aef090aee6099d73f63bb78380b1eec1"],["linux/make-vs-cmake.html","03bab91051a2077c9aa23066987015ab"],["linux/shell-command-awk.html","c5c0bb1018b0ed2dd93882b0f1b1da5c"],["linux/shell-command-df.html","08854941a6acd3ec3b7fb8835d528439"],["linux/shell-command-du.html","a32bc326fff03a161c18c9184a6430b6"],["linux/shell-command-netstat.html","b666d08cc0699589db94efd02033242c"],["linux/shell-command-sed.html","2b921a38c939958e2d312f85ec0787a8"],["linux/shell-command-tar.html","4e5dcda367b693f9dcbf7f7796f3869e"],["linux/shell-command-top.html","0a4fd2c646f6fadfb648b0e25fd34982"],["linux/shell-command-touch.html","bc350125dea3a7d38bad85bde22cc13d"],["linux/shell-command-which.html","717ffa0f27092133202c3f270fed4525"],["linux/shell-difference-semicolon-double ampersand.html","3978942247e79cb358b7e89ceff1a71d"],["linux/ubuntu-user-add-delete.html","62ac4090a61530baa4c3a7183a6fd009"],["linux/vim-copy-note.html","a46665c959d9e4941fdc64c920184a82"],["mongodb/mongodb-collection-aggregation-introduction.html","243a3a1fdadf59b0bd8ef4a98651073d"],["mongodb/mongodb-collection-aggregation-stage-operator.html","a06224552fe34a44f44606c2696ef273"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","4a9a2c9b1d06fdff346d6dfac7711124"],["mongodb/mongodb-collection-create.html","b72b114f4719d45395f454b3246e43ae"],["mongodb/mongodb-collection-delete.html","82253cd7e028e99e7ba5979add139d25"],["mongodb/mongodb-collection-find-1.html","7eb1ebd30dbe74f1bfdd0e78986fe282"],["mongodb/mongodb-collection-find-projection-operator.html","a1bd1984976d6cdfc87b2275f3cc7b28"],["mongodb/mongodb-collection-insert-1.html","5939c07cbe7cab392e3390cb09d766f2"],["mongodb/mongodb-database-create.html","395ccdff28edf8682421ad49d92c3f87"],["mongodb/mongodb-java-driver.html","dc93c12d1bae8facf33e04212f912319"],["mongodb/mongodb-schema-design-note.html","6ae6c197ceb0e473b060af29d95c8e6e"],["mongodb/mongodb-study-note-1.html","65601aa34dff2e9b78dedea5f7e896c9"],["mongodb/mongodb-study-note-2.html","a7125d1ec14d8e0ba563c3d6755093fd"],["mongodb/mongodb-study-note-3.html","cdcda1b09a1cca41b483a95d773cf278"],["mysql/B-tree-note-1.html","c12979e6036b09ab7324de6123adb4c5"],["mysql/clustered-index-mysql.html","e52ecafafafb77be9f1bed5846ab6f2f"],["mysql/mysql-ddl-handy-book.html","112e43b467274b1e0e8864326c71e9fd"],["page/2/index.html","ea9d1960ad3878387c678773da407704"],["page/3/index.html","5ed9792c8e9fafe8d6928ec913d4d93b"],["page/4/index.html","4a973a0d42db4dd62415eb48ce2b4a05"],["page/5/index.html","bba347fca28ec0557cd73737cb326ccf"],["page/6/index.html","638cb70057689927c9eb175fed0964a3"],["photos/index.html","7a078a88f80b00c70cd521c0fc84c95d"],["python/python-args-kwargs.html","c447cc1c982605d0c5355bfa48b199a7"],["python/python-async-program.html","e6ff0d3d35cad6d4cc080590321efdd8"],["python/python-package-module-note.html","3737b033fde6846c82c12d6a1e3b99d3"],["python/upgrade-python-under-ubuntu1604.html","19266c6cbb7a93bb6d518750e1446960"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","35f618dd6922c0ef673571111cab1485"],["slides/index.html","f05bcc30dc9d799c097f7ccf43427024"],["tags/Autowired/index.html","da4abab9d696300aff5ea2c62d7df392"],["tags/B-树/index.html","c44cf798a65ec195921f425e3163539f"],["tags/Base48/index.html","3a83faec6e87e504645477a696429607"],["tags/Beans/index.html","634dca8e5e2bf44290f3329f9c040814"],["tags/CSS/index.html","bb2d1b972d8b19f479b3473a1646dfa3"],["tags/DETACHED-HEAD/index.html","29cd80ad94376390e1a4e1a0a56792cd"],["tags/DTO/index.html","c455c5858666b6ae5d92ed43c4f2369d"],["tags/Git-Flow/index.html","f2b0fdd511afc923fc4f23bb797a5895"],["tags/Git/index.html","c918525487c36629da0601d0d585b331"],["tags/JS/index.html","af277f77003cfae8af75dd56ff9f1906"],["tags/Java/index.html","2f7830bb45ff8ae529bf2d4e51d133ca"],["tags/Javascript/index.html","4a3df866e1dc0d6acb625cd40141bee3"],["tags/KVC/index.html","16399bdb3f7b094e76df60fb6e981188"],["tags/Kafka/index.html","6245d32d20892a368f6db3f2f4b634bc"],["tags/Linux/index.html","c52b7a5f4c23645211bfbf1354ed33f9"],["tags/M/index.html","bdede333801183ca52c832e394496367"],["tags/MongoDB/index.html","16f88747eb6aa8ae3159b84733897d22"],["tags/MySQL/index.html","bdad45adeccbf4c8f87db0e50d3a1272"],["tags/NAT/index.html","36cbf861aa73b675a02ab0f1248d2ca8"],["tags/NPM/index.html","10a6ada1f3a4fb3e2d1a22ba94d64af8"],["tags/OC/index.html","26f3b035729134c79b3411f065b815a2"],["tags/POJO/index.html","a4331fbdcd7fa92f55b1177bcf0b7a44"],["tags/Python/index.html","a82af55b92c012273941084a32648219"],["tags/ReactiveCocoa/index.html","5cb3a318ba492eb7ca2ac05d57c60d64"],["tags/ReactiveObjC/index.html","ca0ece9b1483e4f719d691fdf1387e6a"],["tags/Repository-not-found/index.html","dfa719b183bff55139d8c5436e26823f"],["tags/RequestBody/index.html","2a0b3f8260e0db6c378a4486b999dd71"],["tags/ResponseBody/index.html","d2793e9096d6f01d1c4794c35fcd1470"],["tags/RestControlle/index.html","0f8b113295784b55f20906efa378f962"],["tags/SASS/index.html","51b6879ae8624a87c51d233d5d574aa9"],["tags/Shiro/index.html","821f8281610441c87857bd79043ff466"],["tags/Spring/index.html","853363d9bbda49d81a52c99473528261"],["tags/SpringMVC/index.html","515ba762ced199a152e3f10822151685"],["tags/SprintMVC/index.html","9a47ee18a3a411fdcd62680d9cbaef4f"],["tags/Style/index.html","0494c15ae3714b6c41847c7e254761a7"],["tags/Ubuntu16-04/index.html","280d8348577b14cd20b1ec166b8a6547"],["tags/VO/index.html","31aecdc199eb1b175499d08305ae0274"],["tags/Vue/index.html","42f240348fab0a8164ee0f0bba03b2d4"],["tags/Workflow/index.html","f5164a13a11e170b63f5e4d8f3b3a70b"],["tags/X-Frame-Options/index.html","e3dd6e67636b83580e7ef1d938908f4f"],["tags/aggregate/index.html","025c84aa4d47b588b7897ec497bdea8b"],["tags/alter/index.html","4710babcb94d1317e588d27de6240d96"],["tags/annotation/index.html","1c96687db8512b027cbaa0e20cb5df73"],["tags/args/index.html","57e21d23bb7016ad72eae1fa2b63d31d"],["tags/buffer/index.html","04fc3e609c890d54a4ee72a642f9765d"],["tags/cache/index.html","0af4ac53ae323f6d5f4a810e7af334fa"],["tags/change/index.html","a631119d145fc9c9af4fda7aee29b948"],["tags/checkout/index.html","24415edd1f9b127fc2d5d7e5f3c3f98b"],["tags/cmake/index.html","fe56e158d51e31fbd2be76d051f201b9"],["tags/collection/index.html","33bd6f28b44e57cfb3acd6af64b8ab8c"],["tags/component/index.html","1b372bbcdc5927fd8049e4d9a2826744"],["tags/computed/index.html","4f1c751b9b540a2956b7e0af63e89650"],["tags/create/index.html","09eba2ead4186e2cc2b9043ef3e69c47"],["tags/database/index.html","7d9a7812a1d7aaf2460a182d91a30858"],["tags/df/index.html","91aacc07bc5a10f0b0c2c62d5d97dfb6"],["tags/diff/index.html","33f148b1bb6ad54ab7de75f54e268668"],["tags/double-ampersand/index.html","0d5df1133108087f0a9526e5fa197c76"],["tags/double-vertical-bar/index.html","9b70bee1d82b06590b0f274e5dd97b05"],["tags/driver/index.html","38b1bd6134c837bfdf0e52314a5a5365"],["tags/du/index.html","d8e9633372a153418849cab0f0921cd5"],["tags/fast-forward/index.html","c3ae20bb0337cec26dd8d6f81e7174cd"],["tags/ff/index.html","07ea1a5a223b799ba15060688573a62d"],["tags/font-size/index.html","34bc15530cb52fbd55808b6e639f9f34"],["tags/font/index.html","e53b918fd1eae4c158d9f9475250f287"],["tags/free/index.html","c20540ae66109a7d817a861b71eb38f5"],["tags/git-branch/index.html","2c337b11a1041568ca55e1b4c0769a0a"],["tags/git-index/index.html","6e08c584aef140fbabab8f0b0d29d48b"],["tags/git-merge/index.html","188d618e4b4275103f21f1a39e87c324"],["tags/git-pull/index.html","063115c89ca9347bc4da078ab8093905"],["tags/git-reflog/index.html","6b67e21d7e56d8e6b1ff097b8b71c816"],["tags/git-reset/index.html","b65a0485a4039036b6a3b59b7171b902"],["tags/git-rev-parse/index.html","64adb35916020a9380dbe6dfe458cb6c"],["tags/git-revert/index.html","5928307759186b5117d7055caed1cd24"],["tags/git-tag/index.html","feddf28d376d1eba885c8d21417fc4e9"],["tags/iOS/index.html","5ff06c73088428ae8c2e7e8c17789d6a"],["tags/index.html","61b010b99ae1c3f5c1eebab96eea30b8"],["tags/jps/index.html","90853cd7d0ec57cb86ca2b7bd7d340ae"],["tags/kwargs/index.html","0ee80cf207891c9d5bf411cfe373c23d"],["tags/mac/index.html","9fb0fe87f5b7714722176f4a62573a36"],["tags/make/index.html","e1b30c6ec5b4720a7e5cef2cf6e9b543"],["tags/maven/index.html","6c407e3384621d6c68c5c70cac81ef23"],["tags/modify/index.html","d097d78dee68c79d0e73632acdd37aa1"],["tags/module/index.html","66057507ef35072b426b67bc8ae856eb"],["tags/nexus/index.html","b884b17790aa6700dbf44589769e691c"],["tags/no-ff/index.html","41deee3b3301ff6c23d98d7426c8268b"],["tags/package/index.html","c4d23e6a9ac2773103da295f87ac676e"],["tags/rewrite/index.html","2249b2a4ed47c40908883cddd48a67f3"],["tags/schema/index.html","e71bc7f5713da0cd0a4cd9967f9f413b"],["tags/semicolon/index.html","5dba01f4ae3182ac7e04c7c6efb6cc80"],["tags/shell/index.html","7d820993339a070eb0b33cfdc1eff104"],["tags/synchronized/index.html","8aacfe0b0034d0d2c25cb9f459a1e4d6"],["tags/this/index.html","53b174c1e200f7926409cce4059ced74"],["tags/tomcat/index.html","a5e97539bbd3f259b555e6aaffbbece2"],["tags/top/index.html","fbd2d62b909dd50d65f79010571c4955"],["tags/true-merge/index.html","1315414d326c29635e574f357300aaf2"],["tags/url/index.html","9491bd0394bd022767636db3497bb91b"],["tags/vim/index.html","43b3be739bf8466a534c7be3fc2db382"],["tags/windows/index.html","5a54b2efd9e1dae72f3c3335635b7f34"],["tags/一棵开花的树/index.html","1df2bef14c49a10d7038442350ab2a23"],["tags/主题/index.html","6154d166906d3189744f7ca76faf1ef9"],["tags/二叉树/index.html","c82bfdb3359f188a49698d0615be879e"],["tags/介绍/index.html","5156e2d94598aea0b38c7af4c1d45378"],["tags/代理/index.html","15e6863f87b06be27368b4af6f02121f"],["tags/以太坊/index.html","37b57d97f2a3cd9daa253d035a79217e"],["tags/依赖包/index.html","b89c436fe870e537cdc6f7446b504351"],["tags/修改/index.html","c674c74b4cfa87b4ccc783d955bc0a45"],["tags/值传递/index.html","6e4f2fc450f48ef16a047027e9b04521"],["tags/冲突/index.html","e1837d6455f66d67fdbea0c7ba3b335f"],["tags/分支/index.html","b61551e3116a73947c406dfd58f2faa1"],["tags/创建/index.html","2cee1a8136bd25cb7dd0fda61d57b0c9"],["tags/创建数据库/index.html","7f73cf8ca10b7a855a349c020b49efbe"],["tags/区块链/index.html","8009fc39884d54b873925db7a0a9d179"],["tags/升级/index.html","02067f42d5af5763b57a56b04a6b9d89"],["tags/参数/index.html","a6d21d60eb709b2634778adf0e1f99b0"],["tags/委托/index.html","0ccd4811f3181f24f034ba5f491a02e8"],["tags/存储/index.html","9cd3c7f8f6d4f5c7de2ff4288c022763"],["tags/存在/index.html","51832677132c926664e9a06eae7637bd"],["tags/学习笔记/index.html","6e9936b781b9cb8079def58b63fa3f23"],["tags/实例/index.html","bb3c0c06eb8f0f42ea31083c02e780b2"],["tags/容器/index.html","1ca21723f65a120706b5b77b02e646f4"],["tags/工作流/index.html","fec9f2c570f12c8930e7bf8fed66a00e"],["tags/工具/index.html","cf3ede64efe0bc8154a17c4b4514b0b3"],["tags/席慕蓉/index.html","a1fc4fca87b92bfdc8cfb292cd539443"],["tags/异步编程/index.html","a8fda808e331e4c02046e20bca69e04f"],["tags/微信/index.html","4108435723c86510c02654d16a170a4c"],["tags/插入/index.html","416178390bd079ba3a034bce0590e684"],["tags/数据存储/index.html","08c9f4aff1547a670a5b9dac6eb56978"],["tags/数据库/index.html","e91e6f33fcf8511748e748968518c42b"],["tags/数据集合/index.html","5723fd77e3da1ab1e4099b5a97cbe29c"],["tags/数组/index.html","2335fa9c4c632abb2872f2c35f89de0a"],["tags/文档/index.html","bb09ad9f8ed261542a56b05f6c9dc226"],["tags/文档流/index.html","10f8a57a5e3a3acc8180f8a8bf9a4e86"],["tags/智能合约/index.html","7e59cade95262e4394198abcf0de1e87"],["tags/标签/index.html","96e7f2a587a26c014fb235e0cf28cd05"],["tags/模板语法/index.html","a0026231785b0100dd41f8f36fd61a9d"],["tags/比特币/index.html","e51a70758f32dc5c0c99dc451a155b20"],["tags/波浪字符/index.html","83c7c5ee277e157314645315207dc210"],["tags/注解/index.html","786bd2b84f01db42675766dc44a3c233"],["tags/用法/index.html","103c072a82949458c0f2858402202ac5"],["tags/穿透/index.html","3328b9d35d645538bdecaa6fd439f8ff"],["tags/端口占用/index.html","4e4ab9f15da2872b14eefe2c44e50a0a"],["tags/笔记/index.html","7a9dae0d5744984b8da5d45b95f6c072"],["tags/符号/index.html","005fbe4cfe3aae3ef30837c314b416ed"],["tags/红黑树/index.html","15f8ff0a33c6564ad3965fa1500e997a"],["tags/组件基础/index.html","085ab30e60cfac3858ca198a8c5d2ca3"],["tags/绑定/index.html","ddeb11d28a3cb9deb8529702cc15f189"],["tags/编程/index.html","1be500d16b991612e027f02dda839b8b"],["tags/职责链模式/index.html","6553e33a2412dbcc174fd163157b963f"],["tags/聚合/index.html","e2b1092e800a19f6ff85d1db504eae4c"],["tags/聚集索引/index.html","ac08572e4c690484428731e8f5bee55f"],["tags/自定义指令/index.html","59999cbe5cd7d6feaf4b534914e03aa3"],["tags/计算属性/index.html","1574a9cd09209de39392e34e58b12a3b"],["tags/设计模式/index.html","a5de68c5027cfe88bbdceb25263ad134"],["tags/进程/index.html","215e4eea14a74e29630c4c50b1fe6d21"],["tags/远程仓库地址/index.html","fb654a6abef1727a36e103b4edcbfe46"],["tags/逻辑操作符/index.html","fa2ad08b06d848d925fbf30ef020bd96"],["tags/部署/index.html","a395a26188bffd990c14d202343748fc"],["tags/难度/index.html","ae18bb7495dfb42a6dd4513d6e8939a8"],["tags/集合/index.html","e4caa19f2d3e17a8139988cecc2ff140"],["thinking_in_programmer_life/full-stack-programmer.html","dd91556c17ff5e005d146a54a55a3b0b"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","2190381a347bc4d2ce87449ad2913fe9"]];
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







