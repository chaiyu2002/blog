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

var precacheConfig = [["Kafka/kafka-introduction-note.html","35e46296d98f1d2d3a2af8a6ef61d446"],["about/index.html","82df79d6809d8ebb50072353b1a4dbed"],["archives/2018/06/index.html","e61288b875bb1a701fcea5541037e145"],["archives/2018/07/index.html","1f3aac2c03757449887340fa268fea81"],["archives/2018/08/index.html","972b2eb8fe89a60c561bb49215fb4a9a"],["archives/2018/09/index.html","999b227030cbfe9c054e09e7a1e5d197"],["archives/2018/10/index.html","f42a162cc5ce858576a0ea99adb1099b"],["archives/2018/11/index.html","a581aa530cf635f50841041c8d814cf5"],["archives/2018/12/index.html","e4e3a10a01f67dd81c20221e69c6b6a4"],["archives/2018/index.html","dd221d39cd256a51ecc3f0a4d7b47585"],["archives/2018/page/2/index.html","841c59addc26e7322a5d5ae79c51b083"],["archives/2019/01/index.html","8af1204c124c1cb5644f5fd355190c7d"],["archives/2019/02/index.html","5b2cecdb02873804788a6c606f8cdb75"],["archives/2019/04/index.html","03e39559ecd43c1b22e215505b367247"],["archives/2019/index.html","53124190617a9545a8c09ca99e0b43e6"],["archives/index.html","c300ae5f1868dc38fab406f658835111"],["archives/page/2/index.html","d687646f8d2a1f329411ca7fda90dce3"],["atom/index.html","1403ce2a91daff82794d5fb376dd5cdd"],["blockchain/base64-base58.html","97e58867b2c4b8abb8422a2213aab334"],["blockchain/bitcoin-data-storage.html","4d2aa77f9b61d414f33b210f8681248d"],["blockchain/bitcoin-difficulty.html","deac6396016d8d4acb866fc619f84862"],["blockchain/block-chain-ethereum-contract-program.html","149db3f89f07099d28a6c86f713543dc"],["blockchain/ethereum-programming-introduction.html","1e4965d1ca6599c3fc97fbfe6d165953"],["blockchain/ethereum-rationale-introduction.html","52897d7be05dc2b75206c31e979661b3"],["books/index.html","3d6a2432b6d004df09c890893114f5ee"],["categories/Blockchain/index.html","d813be99e0bc5de12104d9c5eccf8f82"],["categories/Blockchain/以太坊/index.html","f1c921dd8ef5d8a3296110d139e72a42"],["categories/Blockchain/以太坊/智能合约/index.html","c95b54111a3c1653d79cdfd342c58af0"],["categories/CSS/index.html","f755a04f2dcecf3f5a14073cec09f612"],["categories/Git/index.html","8970e7b2739fcdecf7a4f97ce251fca5"],["categories/Java/index.html","1a23d58bb2d86acab6b35fb4f3bea432"],["categories/JavaScript/NPM/index.html","6959705df6985fa11b3b4cb890b8a073"],["categories/JavaScript/Vue/index.html","37e6d21cd15b8d95b727245de0ce8116"],["categories/JavaScript/index.html","c5a4a3e018e31ee88ace758a141ed18b"],["categories/Kafka/index.html","8da69a3f26930c5e340bb179e06d4734"],["categories/Linux/Shell/index.html","3912949d1e1cf8daf4aeb30c4a525c50"],["categories/Linux/Ubuntu/index.html","ada8da7e336ee9e250b554a2e71ede31"],["categories/Linux/index.html","de6c1f12eab5adc1763e908c7b59809b"],["categories/MongoDB/index.html","d9c6a4ecc4c324b027a3253f78fc1ca9"],["categories/MySQL/index.html","59698ea146ed2add77f449db2893507d"],["categories/Python/index.html","f9c77cc9b9c0c70901efde794e4f76b1"],["categories/iOS/index.html","0290861f74cc9bde0eebe4c674139f00"],["categories/index.html","e2b7bad9030891786b316bea5d4b5fad"],["categories/微信/index.html","858413184a843cbc7899cb64bc37d332"],["categories/杂记/index.html","5c17efdcd642b2b193d7cddeedcca036"],["categories/程序人生/index.html","2398847eda0e09a6810bc5226f6266a4"],["categories/计划/index.html","7b4fd792df29f3a8e2b9e7a9adbc07bc"],["css/css-font-note.html","149eb5a169646b887897fff081437713"],["css/css-normal-flow.html","81ca9e9f0df97eef770e5f4cc069f78e"],["css/css-sass-introduction.html","503ea4762a3afaf5729531875fe360b8"],["css/main.css","b44d910413709e119e8472ff9916cb53"],["drafts/configure-multiple-vue-project-with-nginx.html","6f55abea71bbd0f7e8278085fa58cc08"],["drafts/iframe.html","cc4729a4134cf68c3097715507d8b522"],["drafts/record-re-install-mac-os-10-12-6.html","451bdeb402ee2d5fab822e039ede2d4c"],["essay/note-ximurong-tree.html","c93e4bd2ff11b7756e375e43a754727b"],["git/git-DETACHED-HEAD.html","59f0ce788aaea4d3ba5f42157f8da717"],["git/git-branch.html","c50c1ecd8155c9391d21d5129926ac44"],["git/git-change-server-password.html","4d160e8a5f3ba7d08ec356ef05e20cbd"],["git/git-checkout-1.html","049cb925f5d31b7c5aeba7548e28dee8"],["git/git-checkout-2.html","628b2f4bd4885770d7fd63574b253c8c"],["git/git-diff-m-symbol.html","d86f3d7da6dc0da494ec8fa1fe41e374"],["git/git-git-flow.html","d90250668bab927959712f57c1678ba2"],["git/git-git-merge-ff-no-ff.html","c810c9f4c1d2a8e2dd3cb00be9b14d72"],["git/git-git-merge-true-merge.html","e61818cbe3b8495fc35e8564f667a8f2"],["git/git-index.html","d38908d89faf89639e8d3fa980fa049e"],["git/git-merge-choose-one-side-code.html","9d3a2786b0c5e32aa01b96b58c7a857f"],["git/git-merge-exist-conflict.html","2718777b1c127980d5484ea474bb3e86"],["git/git-pull-1.html","e3c6f740c615445e8554c6caac9ec7d3"],["git/git-reflog.html","5e79334851b2aec0b42d4e4e02a884dd"],["git/git-remote-set-url.html","391c894a846bb62740994bf83764e947"],["git/git-reset.html","27f2b2d474838749c2197278c2a49c85"],["git/git-revert.html","f52e4aad0143cc98d3782c01035de8d4"],["git/git-tag.html","3f6b57e0e5dba0fb5465dd83209f3572"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","1f589c75a7e644fe28ea00793ac28efe"],["ios/ios-oc-kvc-1.html","10ea126bae3a697cc05e8dac50e7daaf"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","8e36922520176150be0127d5396dcafe"],["java/java-deploy-resource-folder.html","99d93f88adb2e461aa10240c1e0a5ad3"],["java/java-jps-note.html","09435818d6368d5cb0e67ecb59f28300"],["java/java-pojo-bean-note.html","c1cda2111e85aaf7fd024656502b7bcd"],["java/java-shiro-note.html","e26e5a1ca548eda0a8d87309cb809fe5"],["java/java-spring-autowired.html","7d82890a4d5fdb2abbd0a878ff50b542"],["java/java-spring-configuration-bean.html","4741a0db51c54b88b54099a6c8879a81"],["java/java-spring-restcontroller-note.html","b73054238e88f61fdb698be8e253eae2"],["java/java-springmvc-X-Frame-Options.html","b889a3462c93e57e5e9a2841ecfaecb8"],["java/java-synchronized-note.html","20e9514428e682cb9b1b54ac237ddac9"],["java/url-rewrite.html","0f7fdad8d776565d8eb972f81e9bd7f6"],["java/url-value-pass.html","9a5b6d07f36590a4bb131beb5784ebd0"],["js/js-logical-operator.html","25771aa8dc7380779dbb82beb97a8307"],["js/js-npm-symbol-caret.html","1b032961db29a91e708064eee953ff59"],["js/js-npm-symbol-tilde.html","f970caddf608fea65d9703d94d994acc"],["js/js-this.html","a32c4163056c3b4f5d2f5d9988f23328"],["js/js-vue-note-components.html","ab030562462172095c974814468a5119"],["js/js-vue-note-computed.html","001eccd990b1d0bae2f7d7487dbcc7f6"],["js/js-vue-note-css-style-binding.html","6816d57d9728cadf7f1679f0fdda5311"],["js/js-vue-note-directive.html","2ed1418ebdaa03c3fc5e2970f2e687d1"],["js/js-vue-note-instance.html","72be5dfb9bd2f46b74c663f21c992787"],["js/js-vue-note-introduction.html","5d5f8ecaf6166812e83e2fe031b3ec3a"],["js/js-vue-note-syntax.html","8205f8521da2a9d9195754b6445ae849"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","6e999165abb5f82d7773991f408a1820"],["linux/shell-command-df.html","c04d4f291f63c9bc5f63e90e0ba5ca13"],["linux/shell-command-du.html","a59ee8b027f848911ad3e50fdf3e1ffb"],["linux/shell-command-netstat.html","755b400e306f173ce700760081597782"],["linux/shell-command-sed.html","b0ad71bc3cbec15e778a73c7093e9849"],["linux/shell-command-tar.html","0175dbcca930b3cf070b2217ad415d61"],["linux/shell-command-top.html","a152d38e9d0f69baab29c27a032edfdf"],["linux/shell-command-touch.html","56f2d8605fc3bc8ce8d666f15fe0c854"],["linux/shell-command-which.html","bc2e84c29eb9060b24a55dbf2039b650"],["linux/ubuntu-user-add-delete.html","0bf15ce489328129ee5ac3479be8b7f5"],["mongodb/mongodb-collection-aggregation-introduction.html","03d9e740e3a7bb09f216a30c0dad06e3"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","6a0ada7149a598bbaf1269b4d6703a49"],["mongodb/mongodb-collection-create.html","9ffad97d64bfb3ee81a3384dfd791e88"],["mongodb/mongodb-collection-delete.html","c32862d7a6253b81317205e46019d42e"],["mongodb/mongodb-collection-find-1.html","a7365c4a90bc04b356c5a191b872fd48"],["mongodb/mongodb-collection-find-projection-operator.html","c43627a2507f2a60ae0e0966f94b1067"],["mongodb/mongodb-collection-insert-1.html","d21b4f9c9c687234ea2e152bb27965ed"],["mongodb/mongodb-database-create.html","f30469228e83a49d9fd938bf53309059"],["mongodb/mongodb-java-driver.html","83462b1cf41bca5b7c8c78030a79de6a"],["mongodb/mongodb-schema-design-note.html","b3a32abac47368c8a2d9ef157c353438"],["mongodb/mongodb-study-note-1.html","5a67f89dc4ff380a9ac5a1740f93dd49"],["mongodb/mongodb-study-note-2.html","fde09af52b503918d0d9c487fb8bef12"],["mongodb/mongodb-study-note-3.html","86a6e4fa50a76e5cee2a5ebcb257b434"],["mysql/mysql-ddl-handy-book.html","dc27c0105953256ff529f2b38d9dab52"],["page/2/index.html","d3a4f1f28745ef4a744b8738b1ae78da"],["page/3/index.html","2403078597c22c7e91d9d66f0632161d"],["page/4/index.html","43d648b0b4ea127555b86ef6ea5ab089"],["page/5/index.html","505f0298a64101dd20afdbdf7e1ffa9f"],["photos/index.html","9874bef68e4739f1e502d9d7d1e53ab3"],["python/python-args-kwargs.html","e9f87d91e746907ddad790bff7cecd76"],["python/upgrade-python-under-ubuntu1604.html","d49c2c820333b3abeea124f174ba4367"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a706d29e17150420212519626e83198e"],["slides/index.html","e84976b211f43d6745e85276d0bdd7ac"],["tags/Autowired/index.html","869386ee1ffd15a2a15d10ba61e089ee"],["tags/Base48/index.html","ce67a3b1c0eef495b92d69721a1b7631"],["tags/Beans/index.html","ef5437202ab3d5ea71c9099cc6500b9d"],["tags/CSS/index.html","9ce35733a482b2551ae0432bc4f56f97"],["tags/DETACHED-HEAD/index.html","f9a7945efdceaa4adc896aa95bbae22c"],["tags/Git-Flow/index.html","c6d750d2deacf5abb8f4dc0002039a7b"],["tags/Git/index.html","968a196a4ed49edec840f7c4b4e367a3"],["tags/JS/index.html","9e2447871948777b5fa239b924a9d4fd"],["tags/Java/index.html","cbc219f8f38a9567ca4dcb4f1aae0fe9"],["tags/JavaScript/index.html","1d25662f0fa878ea8488b37c491b4ca5"],["tags/KVC/index.html","eb14dea9bc9364492a49b25a0940e243"],["tags/Kafka/index.html","64e90396cc878f74bce5a24043f6b75d"],["tags/Linux/index.html","c048c83c59b4d32fc3206f0975b7cfb9"],["tags/M/index.html","6104d1fb9e46300182fc7bc54ce2d0f7"],["tags/MongoDB/index.html","0135b7b0bf1c908506dfa224687f468c"],["tags/MySQL/index.html","478358b275de42905b6f1431399c3f1b"],["tags/NAT/index.html","89d517f2a9033cdb9672d42fba48bb86"],["tags/NPM/index.html","b43bf408288d69da49363c50dc6cb23f"],["tags/OC/index.html","30229d45b247c936e217f84b81c6c36e"],["tags/POJO/index.html","98f8c642accb255ff999ded440038bf1"],["tags/Python/index.html","5e96ffa25281cdc0a0a33bb9a3178d9e"],["tags/ReactiveCocoa/index.html","fe9ed79b7b15672df811cf5a21553a54"],["tags/ReactiveObjC/index.html","7523c39f76a203247cd61605b4d1530e"],["tags/Repository-not-found/index.html","50b73781b6f0db18d21c66204acd890e"],["tags/RestControlle/index.html","2ced0c70b15e763fc6dde6281edbaeeb"],["tags/SASS/index.html","e6e5e67acdac2bb32c973b923bed88e8"],["tags/Spring/index.html","ddd71e8028e8bcd2a202613486571aaa"],["tags/SprintMVC/index.html","d43c6c2a97104c801e22aba99f56eca7"],["tags/Style/index.html","6cc97b605f9711fa0c57ce697fa42067"],["tags/Ubuntu16-04/index.html","724e9e940363641bcf2a92f38dfe479c"],["tags/Vue/index.html","272b42375d480be680e402fef57e1199"],["tags/X-Frame-Options/index.html","cf893283a7ad2f87d8029b25034c8910"],["tags/aggregate/index.html","7373b4849d2fd02f066a37e7574c3417"],["tags/alter/index.html","9d67a68b7e6a6ce5409a952d3e55066e"],["tags/annotation/index.html","40decad463b036081ac45f0744077533"],["tags/args/index.html","6060855dcaac7dd9a9b59f6d5e8ef54f"],["tags/change/index.html","39f652b05d24c51945e63b37fd412fc2"],["tags/checkout/index.html","d32dd97d336737caebd3383d2c9a0921"],["tags/collection/index.html","5ff30944f19067df7d7ec895e3684d94"],["tags/component/index.html","549894ce2b7f546163e7ebac9a152a92"],["tags/computed/index.html","36e1614d1371320a2db4cd9142a4ee48"],["tags/create/index.html","70958151dd8d70ce355d516a5f7c957a"],["tags/database/index.html","45f3ae2fb7bad8f48ad90a860eed817f"],["tags/df/index.html","32427ab1cfcd4563406ae2be7caa38cf"],["tags/diff/index.html","549302ab4a2397fcd112fcc48f9a5987"],["tags/driver/index.html","99e6e7d055210a4691f4c0f18e8380b3"],["tags/du/index.html","818ac852b6a98f70729110df1ff6d179"],["tags/fast-forward/index.html","4f0c5a2a4d415f904f4f072a94cbc928"],["tags/ff/index.html","fe165e088da9a910a8b378b7dcba8853"],["tags/font-size/index.html","4ebb15486ce75249d230d22205b7b46e"],["tags/font/index.html","3c6581773dae74db95b14bff05583e9a"],["tags/git-branch/index.html","83906b0f04c2f2e3bbcd3acdee70bfdc"],["tags/git-index/index.html","dde77d11c43ad3185ac612ee999f571f"],["tags/git-merge/index.html","6991c0052f369332e048ab70a0e7f62c"],["tags/git-pull/index.html","72b866d5029f470cbd229654cc77c464"],["tags/git-reflog/index.html","f1e9e43f41dbfc47598c0ff88685a534"],["tags/git-reset/index.html","308a45cbce24f05936ce52123eb10779"],["tags/git-revert/index.html","288fb6a3a9a1767298ad70043efd009e"],["tags/git-tag/index.html","c2e3d3ff8e372c5e177b56aefb6d9531"],["tags/index.html","859577e477911dea86fca48be1422de5"],["tags/jps/index.html","5abfd36f3c91e31d6f6c858d21a827f3"],["tags/kwargs/index.html","df06d39dd520ea10687be6bbe3edd9db"],["tags/modify/index.html","e077e6b1c776b66bff5c6f330d08f543"],["tags/no-ff/index.html","8303ef45f203104299da85c43f9ddba9"],["tags/rewrite/index.html","1c51b5d9976ecd945d082e8ee625aebf"],["tags/schema/index.html","a2822ebccc3a6c29343490046b03ce6f"],["tags/shell/index.html","638260f9cd40319bf5024739673429c5"],["tags/shiro/index.html","7aa9f1dd2b923dfd04ad975128e7ac14"],["tags/synchronized/index.html","4727db1681377e31987f2334fd4b9fed"],["tags/this/index.html","e91c531ef05f4762ed61bd37717d124c"],["tags/tomcat/index.html","3bbbefb74443cf720e772ce04732093f"],["tags/true-merge/index.html","9a4e78b0a718cefbfb7f27eafa5207a7"],["tags/url/index.html","be95d2a5cea24fa72c47a671acdbf029"],["tags/windows/index.html","01393ad3b16ba66e7620c34cbd956aae"],["tags/一棵开花的树/index.html","1fac12e6a1494eb9ea26c8b9a4888639"],["tags/介绍/index.html","9362568d4ba3d6abdfa7b410ac33c062"],["tags/以太坊/index.html","c41106df7fc3af87ac763c26cefa7103"],["tags/依赖包/index.html","1f8c685c515223aaf0eeaeb15c624fe0"],["tags/修改/index.html","c5728166946797d1b7ccf4ddbc573d4c"],["tags/值传递/index.html","3b5540be78bb686304c3f7d5cbb5af28"],["tags/冲突/index.html","fbe84eab16f9a2c6d6c8a8bb2581c71c"],["tags/分支/index.html","890d54c9d7c0017767fb549c3fbd7bb7"],["tags/创建/index.html","1df96e27a0a8ea525922d26e112a0445"],["tags/创建数据库/index.html","158eb21427e0606ca293da829d12ce34"],["tags/区块链/index.html","2bb8521b3707d3bc0bb345a58525bd35"],["tags/升级/index.html","cc0111ed40a126fe83db51770d1db12b"],["tags/参数/index.html","fc821476d00002b51ab3dc9a87875db5"],["tags/存在/index.html","b08498d718c41639268b31fff51ec051"],["tags/学习笔记/index.html","ca4a6ff6cffa9e18b9e9d229b626baa0"],["tags/实例/index.html","96428b679e3de7d92ddb795be1c06806"],["tags/工作流/index.html","25e508344582c67b84c3e1dbe4ddecb0"],["tags/工具/index.html","afe98debbd17d6c9b94b841bc1793d5e"],["tags/席慕蓉/index.html","a2a41741b5dce956006ca82a1aebe01b"],["tags/微信/index.html","69af71c60f170ff5a192156da88af105"],["tags/插入/index.html","f67c270e98284d3709148b261160ea3a"],["tags/数据存储/index.html","82c4ec6176c9d9d84802d7ff09fe38bf"],["tags/数据库/index.html","ba987d6eee1ca8ad713f6933a868c5f0"],["tags/数据集合/index.html","365d22dc78f1d1589e08e3e71db9b857"],["tags/文档/index.html","f5edca3156a4da9a4e91e2e96cb1352a"],["tags/文档流/index.html","ed9051687b703162033c74c4b6104f80"],["tags/智能合约/index.html","79fce402cb357e4adf5c6e7cd89d252c"],["tags/标签/index.html","f9e4903a40efd2207ba6275ca1181822"],["tags/模板语法/index.html","e8a937f46d2975487bed1d01e9f3546c"],["tags/比特币/index.html","47b7e898dd58b9c36cd8411b44ca1144"],["tags/波浪字符/index.html","b556cc8aea8bb6cd5e9f179b0e96edd6"],["tags/用法/index.html","c6ad114e31a5a5dbbb5e70c0129d5f1f"],["tags/穿透/index.html","43079bec3e10bb473c30fd6fe633e425"],["tags/笔记/index.html","d82cd30c20ed3bf40b2ce5a55d3efcf5"],["tags/符号/index.html","0193ff51c1f5dff8ef8e9c3507bd8ea6"],["tags/组件基础/index.html","3a7d241058a96e26437d408809a9485c"],["tags/绑定/index.html","c0a963c907133a037307c0a145d18d0a"],["tags/编程/index.html","9bf6c72202d1a51b0a8cc3b77f0984f3"],["tags/聚合/index.html","234255597a999990c1a418ef40cd7610"],["tags/自定义指令/index.html","0b71c382bb77b2e49f92cb0a26d5a869"],["tags/计算属性/index.html","6fc591fe88d86096e767a46adf8bd486"],["tags/进程/index.html","d820b42b1c49ba3ba5ec796be4ba01a7"],["tags/远程仓库地址/index.html","1f704d14816645f4ae3eda55f6f2050f"],["tags/逻辑操作符/index.html","c93b52f774d1f8069bedcc3805f678f4"],["tags/部署/index.html","73e234346a4b0e2625b0af296c13b962"],["tags/难度/index.html","a468687f3c93021e4a8bb8557dc679d8"],["tags/集合/index.html","2c2dcdc0e93fc00aaee3853b67ebb462"],["thinking_in_programmer_life/full-stack-programmer.html","d27c425322d1b2bbc2ea93ba963a29fa"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","0dfc8070b3a250987edc9d8482663d86"]];
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







