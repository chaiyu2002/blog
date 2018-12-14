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

var precacheConfig = [["about/index.html","3394741b900eff7e4982a86bbea4b9e2"],["archives/2018/06/index.html","6f98d1cc93540114f3810233d61a9510"],["archives/2018/07/index.html","2a79b836e7053e443ee359108bce3783"],["archives/2018/08/index.html","7c2bf7dc26a3651bb23d6540ce140f18"],["archives/2018/09/index.html","62ae56a2f591af7466eee0cb96440898"],["archives/2018/10/index.html","f08888a231856fab67db9dec45d739da"],["archives/2018/11/index.html","8e62faadd0218d0c2b9cb1238e25b303"],["archives/2018/12/index.html","1d2f9007afd8fd9775fe7e9e46811346"],["archives/2018/index.html","d88c70959a64eba859e16ff6e0fa4560"],["archives/2018/page/2/index.html","7e30397de973093e8effe2da1ee0871f"],["archives/index.html","aa6075f1f1dfe29c498f26a4317b2235"],["archives/page/2/index.html","37b8b9e94d460702dfce72abd45903b5"],["atom/index.html","bdf6899145b8ca655f91f3d2204d5aff"],["blockchain/base64-base58.html","8704687fec31167ec10452af98834982"],["blockchain/bitcoin-data-storage.html","9309c86216b02fd184fa722f017941c9"],["blockchain/bitcoin-difficulty.html","18583b9843624a7f8e6c3b298a83b966"],["blockchain/block-chain-ethereum-contract-program.html","d329111a66c61d6c7470d131b69dfee7"],["blockchain/ethereum-programming-introduction.html","d34e6c74a39c995154fa40be8133034c"],["blockchain/ethereum-rationale-introduction.html","f470a3f3a5e53e43421d85d588780e32"],["books/index.html","1a132fa8dce02f45e80dec76a36a73cb"],["categories/Blockchain/index.html","0796c3f240d6851346c2d20d6447523e"],["categories/Blockchain/以太坊/index.html","77cc83751fc94bae2c33caa454ad6d47"],["categories/Blockchain/以太坊/智能合约/index.html","621d23247974518442738c8e525927b1"],["categories/CSS/index.html","77eea13f7a3017ce6425ad2c3a225ce0"],["categories/Git/index.html","5ada4ed5bffc5a2ce47d7eac31275e4b"],["categories/Java/index.html","be097a2cd1c514991afe6871793e359d"],["categories/JavaScript/NPM/index.html","433001ead20e3af7f5401e686a6c9591"],["categories/JavaScript/Vue/index.html","a5ca0ed4557fe0de0e7e02ac6fd67760"],["categories/JavaScript/index.html","027f0d55f50953c459469c22464379d6"],["categories/Linux/Shell/index.html","fed66e1c7373a47b45592acd1e9a97de"],["categories/Linux/Ubuntu/index.html","bfc6b26c51fafab7e92b4200f698584e"],["categories/Linux/index.html","d786ea2a6155283ecc696b58ee7eca9f"],["categories/MongoDB/index.html","342a263adf721da2719f98047e83f70d"],["categories/MySQL/index.html","5a83abeaf7df46a8b877b33bea210ea2"],["categories/Python/index.html","01df9f52447cf80c392e39f3518a4e7e"],["categories/iOS/index.html","a7eb6c9d8e9e3feb2e1b39d20619ef13"],["categories/index.html","91be258aa153242cd6ebb1ed9fca310e"],["categories/微信/index.html","4e59921b0283508db2a2b30d31449bd0"],["categories/杂记/index.html","383a0dc291ba7547443bff74aae5b98b"],["categories/程序人生/index.html","7e5103b9058a8117adfb48a788097cd7"],["categories/计划/index.html","36e9ae680a60619ddad3a6fbfe6294bb"],["css/css-normal-flow.html","b3fae37558c11a48643764169fe37a78"],["css/css-sass-introduction.html","c233ccc808eb902f01fec9c9c502dc10"],["css/main.css","7d9c9669d6fbbaf7348a165bc7f15614"],["drafts/configure-multiple-vue-project-with-nginx.html","cf9d4365e9e943edbb6462bfdc572d45"],["drafts/iframe.html","186539e203bc4ee28d00851603634206"],["drafts/record-re-install-mac-os-10-12-6.html","157555b0a26f65cc96621f3f0da1ad53"],["essay/note-ximurong-tree.html","c6de1a5eb19eba1efdb8648bc9d82588"],["git/git-DETACHED-HEAD.html","c9459a58b7524ec9002b21783e2601ff"],["git/git-branch.html","972405de7ccfcc9f264d4197656ac7ea"],["git/git-change-server-password.html","cafbe357895e528f77a6ef41827e768c"],["git/git-checkout-1.html","a4358f3f411f40bda8e1e55f0b841da8"],["git/git-checkout-2.html","ad7e6ed522f007435d24c533fe9b1c71"],["git/git-diff-m-symbol.html","53fbc64eade2f7ca3345c66ac1233418"],["git/git-git-flow.html","b0031e7240281f1f5044961dab1be094"],["git/git-git-merge-ff-no-ff.html","3d137dc9e01e71cf0be1ecfe5f0c41f0"],["git/git-git-merge-true-merge.html","9756e21482188aacfdfba22f918844cc"],["git/git-merge-choose-one-side-code.html","306563984dc45926f5b99edc13ff0055"],["git/git-merge-exist-conflict.html","50eb2078ded3fc14e55a908ed8e15ca3"],["git/git-pull-1.html","25607ec79065a0c1ed9b73308e30c726"],["git/git-reflog.html","c1fede217be32f900a0e84f0ced4024b"],["git/git-remote-set-url.html","672f02665f020562d3bedf20b3d7a21d"],["git/git-reset.html","f2d2404d12caebb9336f21cc748d2643"],["git/git-revert.html","16b796dac2e21eb2f9d7660a771c70c1"],["git/git-tag.html","e31c0d7ed5f642151f8ef4aa29834302"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","60eb2466e85d8908a9f2dca9a4b386c4"],["ios/ios-oc-kvc-1.html","18aca904a7eb4b51089dcacf93dac867"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","e31c541238b138d39161c2166dca7f61"],["java/java-deploy-resource-folder.html","2f279ce0a969437c4b5a5fe0e3e4117e"],["java/java-shiro-note-2.html","b0f4446da10b58df0e7289b07c2add26"],["java/java-shiro-note.html","3d385111fff7fe1be9bb153f5ef924b1"],["java/java-springmvc-X-Frame-Options.html","2ccf99c3ccce8baf1c68a136f2bb6da0"],["java/java-synchronized-note.html","7727411b31ae371f253747fe071b04e5"],["java/url-rewrite.html","f0c070c22f3a8a7d3e6de5e82e845b27"],["js/js-logical-operator.html","298da25a93072a70fc4283b94def474e"],["js/js-npm-symbol-caret.html","3ae6d93fbc70441b5dc3f0720c6452dc"],["js/js-npm-symbol-tilde.html","c4fec8d2752833d0f9b743fc0a6b821a"],["js/js-this.html","23107aa5ee9e1bc3f48cd299d4266086"],["js/js-vue-note-components.html","81ed7ab7b9437c5bf83eeb30b3ca33ff"],["js/js-vue-note-computed.html","f4851b7b1478647588c0e392751d076f"],["js/js-vue-note-css-style-binding.html","3962b02fa57ad1b8267917d559f3010a"],["js/js-vue-note-directive.html","83fcca606a08cbf58b17003e293b79de"],["js/js-vue-note-instance.html","727bf365f29dd68b4b1693ac6796bff3"],["js/js-vue-note-introduction.html","fd94a8ee797d90c7c4975ea14a694526"],["js/js-vue-note-syntax.html","93aec665396ca0e807613679e921e164"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","e43279bdc5925d02a5f9569d743f7e9e"],["linux/shell-command-df.html","e284b83269741fc7dd2c9f12cc86b406"],["linux/shell-command-du.html","e2d8b5c87d31ab04b14718e12f172080"],["linux/shell-command-netstat.html","7cdbe0f41e9c1db743bd99da73239271"],["linux/shell-command-sed.html","2cef26c51731a878b81983883be0359a"],["linux/shell-command-tar.html","78167836e473b641a3f87cecd242a2e0"],["linux/shell-command-top.html","13bb764cab7ba198c8a6af042a3a78c4"],["linux/shell-command-touch.html","00fea60a2b00965fb2619b28c9920832"],["linux/shell-command-which.html","6e4394415729115bc2686ffd95e5c283"],["linux/ubuntu-user-add-delete.html","2f596eb522cc98e9f009bcbe9cd6667a"],["mongodb/mongodb-collection-aggregation-introduction.html","63b0640ea7a0ac310b55a534a7126365"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f380894f55ec82b89443271dbeb6595f"],["mongodb/mongodb-collection-create.html","07f05a890230f408a2b797fc26cf8135"],["mongodb/mongodb-collection-delete.html","62c2c65852c061970a7e0b62356b2e7d"],["mongodb/mongodb-collection-find-1.html","2803f68a53188361d8e76d9f2502a874"],["mongodb/mongodb-collection-find-projection-operator.html","c03dee0d3c0a23050ad2f5b940361271"],["mongodb/mongodb-collection-insert-1.html","587d9b21956b8a818dfa229ee19ae931"],["mongodb/mongodb-database-create.html","3c6725f1da912ce1e367c7d5e34dff48"],["mongodb/mongodb-schema-design-note.html","89f8a5a99c8cb0d25f1fb62d6dc0ea78"],["mongodb/mongodb-study-note-1.html","bae037e38cb9e53f757ad3e385161452"],["mongodb/mongodb-study-note-2.html","cb0e9490f74821cc5ceff5d6aa7c040e"],["mongodb/mongodb-study-note-3.html","9ec2887f0bbd46b7017d1c5294e15cf0"],["mysql/mysql-ddl-handy-book.html","4ac7e11b5985670fb162632d6c3ac270"],["page/2/index.html","67527409cfbca0c02c81aaa1e13a7e0a"],["page/3/index.html","6eb0a7c6c8e03eb2addc73faaaa50c02"],["page/4/index.html","7187fcbc4cdced1b9e05176ea5f3490a"],["photos/index.html","280893b7499f927388cbee33b3d4a412"],["python/upgrade-python-under-ubuntu1604.html","0ba14936721e56e7a16c971d99cbb8cb"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","74ce85ec414dd219f52d4b9fa3d54ac8"],["slides/index.html","3897c09b2a4a3cf85e1ec6a93fad3dd7"],["tags/Base48/index.html","85ddc09b4edf4ac271497402bfb4f911"],["tags/CSS/index.html","7f233b429e0627820ad8bdb9065521b1"],["tags/DETACHED-HEAD/index.html","9f15e7a1f320a8871dec34b8d9535e65"],["tags/Git-Flow/index.html","754a994eb1f97fce2ec46e765b93745a"],["tags/Git/index.html","5d913fdd723706c03cf6a2664695121e"],["tags/JS/index.html","564779af29b66434a4aa38862a978bf7"],["tags/Java/index.html","b2e26d5466686d7531ed00c2b94f61a7"],["tags/JavaScript/index.html","de0912f4799114e66bd7f0b68ba9ff13"],["tags/KVC/index.html","986bd55d18a5f03e1492ceb70f59d16f"],["tags/Linux/index.html","58f47ee472717990126676ef619febfb"],["tags/M/index.html","bf66d939026ad03b7e9f40aa5ad97d3f"],["tags/MongoDB/index.html","61e5fee89c52a642327c2bd75f2b5fc9"],["tags/MySQL/index.html","c81fa85e3c01b7d7430b554b0aa024de"],["tags/NAT/index.html","1320894267487597d6129889896589a6"],["tags/NPM/index.html","cd11d71ac5f06a6d5a5809e90ed1b4fd"],["tags/OC/index.html","957a5d7460b7445d491efcf295ae82b6"],["tags/Python/index.html","9603bbee92c6650c60882c2cf3ab0820"],["tags/ReactiveCocoa/index.html","7920d690cefbd8bb5bbf86b55f1b578d"],["tags/ReactiveObjC/index.html","24ca177e8e0092c0ef98dbe2e7a4668d"],["tags/Repository-not-found/index.html","3a334344df5040c9319c6b1fa2a42f33"],["tags/SASS/index.html","708f14fc20d029ca1a5930aa56fba5a9"],["tags/SprintMVC/index.html","c103fe5a3a836e044bb47659586e6170"],["tags/Style/index.html","364646152a1313d436cb7c8c0c292fef"],["tags/Ubuntu16-04/index.html","a89ead9a221f9af29113ff1e482faed4"],["tags/Vue/index.html","f394308518fa2b73c22161cece1f59f1"],["tags/X-Frame-Options/index.html","0058ade921b01926165bdbdd78e3aaa1"],["tags/aggregate/index.html","b649435eb77f2967791f3af102512b53"],["tags/alter/index.html","c59ee2e20a9dc05e8a0da183e6b265ca"],["tags/change/index.html","1d4595502620582003b44e9d07ef15f9"],["tags/checkout/index.html","22a168e6dd907ab2e7e0a497743a2bae"],["tags/collection/index.html","682fd368e153a66ddc71ea9e720d4886"],["tags/component/index.html","ca748bcf2e05753cb64d342d94432613"],["tags/computed/index.html","efb08181852cf7614d710bb68f79c91c"],["tags/create/index.html","7b377f315030f7d5d0b69e780f807425"],["tags/database/index.html","32a39e52e1366d2bb3043074e1949277"],["tags/df/index.html","5f98d7e1b03d9b909c99e6f603e4a2da"],["tags/diff/index.html","816c1366762d4507517729fd4b5cf20e"],["tags/du/index.html","ed7e8ff5a3cbb153f313c73ca1fa0548"],["tags/fast-forward/index.html","7927ea2fce4a61d3eca6c6f611ff3a75"],["tags/ff/index.html","26dd76de0fbfe35cd247e4e8518454d7"],["tags/git-branch/index.html","e1aef0bb995c39c4e244db3a5dd52d6c"],["tags/git-merge/index.html","5b8b078b18e8468056347275770b7c91"],["tags/git-pull/index.html","cdec8c22df6fe3ee72d7e8cbd27c84f3"],["tags/git-reflog/index.html","be820490f35fa2abc393dcb0c822ff1d"],["tags/git-reset/index.html","6d9a85a3131aeb32058eddb6ad682dfc"],["tags/git-revert/index.html","9f47be0cfde48e58a6f043915fc4e182"],["tags/git-tag/index.html","8ad0a468b2d409e2fa9586216e7772ce"],["tags/index.html","c658c60195888d7753f5e1f235033361"],["tags/modify/index.html","9ab09d4c7ca9f986072dd9047ace95e4"],["tags/no-ff/index.html","99f238f7c58dc02f205af2aa593b87ef"],["tags/rewrite/index.html","4a82e988759e3db6b9d5837fc34bf7f4"],["tags/schema/index.html","7483dd25901303f55d737c6771cfd343"],["tags/shell/index.html","8d0229e6d3d828005995ea1c0857e93c"],["tags/shiro/index.html","509d27e4ab1143e6b1c7c0f6f84fb563"],["tags/synchronized/index.html","8152eb7de83089e7ecc6d339aa001af9"],["tags/this/index.html","2d0add0a2949168f801887aa50453037"],["tags/tomcat/index.html","7d8709b70733848bcce7f3677a748647"],["tags/true-merge/index.html","ffced34dcc1bb6e1ad438da33c37249a"],["tags/url/index.html","10be6a5aea63656240a837e3bb9b1584"],["tags/windows/index.html","f29ae139803e8c56fa4d814015972842"],["tags/一棵开花的树/index.html","a9498586d63535b86984586014e8c2dd"],["tags/介绍/index.html","3b6fc4b392be2933c5a591841831b4ee"],["tags/以太坊/index.html","4e4627ea3c01a64d6039cbc5114e7ec0"],["tags/依赖包/index.html","2f49bc7e9d2006609e531ec9f7dc3185"],["tags/修改/index.html","d96b67e09385bab9d049f791da762f01"],["tags/冲突/index.html","3684290a26a9462383a2ec16b107e185"],["tags/分支/index.html","783f7aa8bfa1fb577516990ec2d26f34"],["tags/创建/index.html","34e540c5ed441957157797ae7f556261"],["tags/创建数据库/index.html","dae446caf9f380cfcd43cf6cb8e06089"],["tags/区块链/index.html","f81c7a843faf0700dd5c9ce7cf3400c9"],["tags/升级/index.html","266817300d22b337cb32e661dabd633f"],["tags/存在/index.html","0da83e351f4f1000c8e31f3751a1e31b"],["tags/学习笔记/index.html","291410e2b249f88f8d837eb1397815e7"],["tags/实例/index.html","308dd85eb0d488ef531bc8b827fc2c1f"],["tags/工作流/index.html","32a6105f6f5934615f044ac7ba96b6d8"],["tags/席慕蓉/index.html","064ceaa41d2fa2930c5f6a0d47c7bb83"],["tags/微信/index.html","1471cfeb90280c1c2e405dfab5094fd6"],["tags/插入/index.html","fa27922cdc5912dbe7e8d18649a13313"],["tags/数据存储/index.html","7fecf0ed51250d8ed3ed1526dc9e0af4"],["tags/数据库/index.html","5ecd852b7792e3380150e61a4184ac2e"],["tags/数据集合/index.html","7a76fc35d70e058a1087757370b5f69b"],["tags/文档/index.html","496f806aba56b20cad2e4300a5c1e1c1"],["tags/文档流/index.html","42f4466b9aace930edb0a36e2bc783a3"],["tags/智能合约/index.html","c56e622b62cb3d36874a2067d351d0cf"],["tags/标签/index.html","46e1508403fe38e965ab4c468efdc826"],["tags/模板语法/index.html","efc52b24e49969b0e0f9fe65362efe54"],["tags/比特币/index.html","0ebfd9e35b13459ee5e83e2e5b297e5a"],["tags/波浪字符/index.html","bb1fccfdf1adcf11f585263ae0b9781d"],["tags/用法/index.html","d41991d51c38cd828cab50ee076fbdb6"],["tags/穿透/index.html","08cc60abeb04d6b4af6c0df1d8bc48e7"],["tags/笔记/index.html","9a6b7f5c6c5a2ee390a7e15ba60b703e"],["tags/符号/index.html","d900a21a42634d830a7e68b86ce976d0"],["tags/组件基础/index.html","5e78f27e902ec6cec6beedfb55982923"],["tags/绑定/index.html","df3947c31221c134fa0fc74e629c2600"],["tags/编程/index.html","bd853575e056fdc3164c8a1d963f61f2"],["tags/聚合/index.html","e75a560bba83caafa605f7123c8296ad"],["tags/自定义指令/index.html","2040182da2e1010fef27ba4bca49832a"],["tags/计算属性/index.html","87ece211ddf0449d374fa9fef08d023e"],["tags/远程仓库地址/index.html","2e1f7e01fd13bde7482b7a5dd678c7a4"],["tags/逻辑操作符/index.html","7efc012b6c1279f81148ffb3b4cfc727"],["tags/部署/index.html","3b58a97a2b338fb298614b970336824d"],["tags/难度/index.html","20bbc5f62d6066584715feabfa4749f5"],["tags/集合/index.html","9dfe3e4d19d6dc5262e4881ccc2c5af2"],["tags/集成/index.html","8090a3ec718da5c8f728529a5869998f"],["thinking_in_programmer_life/full-stack-programmer.html","8b126211d4a2ad6d197689295e496cfc"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","c37c17985f540c3037c86898fa5c4080"]];
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







