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

var precacheConfig = [["about/index.html","6953fe77cba4816caa8c440525013017"],["archives/2018/06/index.html","087f853ff135af923726cb900721c6c6"],["archives/2018/07/index.html","296441ae23c178b5478320a604f622ef"],["archives/2018/08/index.html","130aefddb37ab00443835506fb7fa983"],["archives/2018/09/index.html","dc5e02806cae0c740387beb993faea96"],["archives/2018/10/index.html","a214459609f37d7ba3ec49db7726c2fa"],["archives/2018/11/index.html","78dddd3985ff9a0597c602b182b56e3b"],["archives/2018/index.html","f62f3925c186084c1cf0495e4cedb2a0"],["archives/2018/page/2/index.html","e25afa4ecb4386506fe13951f2457f51"],["archives/index.html","d12d7114158a84fdfe550d281d3bf5b6"],["archives/page/2/index.html","de6ae3d9f4401f1beab442d91a4486bf"],["atom/index.html","8f4e9af4999758b9122610c362cf7e58"],["blockchain/base64-base58.html","85cea57e4c721094dd6521d418f9238d"],["blockchain/bitcoin-data-storage.html","22629f905872d809eae619d16254d409"],["blockchain/bitcoin-difficulty.html","b72e8a465b959ae00f3897e38da79cae"],["blockchain/block-chain-ethereum-contract-program.html","71379adc2e9846e5d5d5af2c3ef58b13"],["blockchain/ethereum-programming-introduction.html","c5c167ae1bad4c9b2d1d34687c0f4c8a"],["blockchain/ethereum-rationale-introduction.html","7b612cc86c1b23dfedb7da0d726f37d2"],["books/index.html","8edaf1d578ef5ae922ed4cb93f704851"],["categories/Blockchain/index.html","839285530b49319ca4b620421b74269a"],["categories/Blockchain/以太坊/index.html","53e5bc71270ebbe631ca728932ce6ae9"],["categories/Blockchain/以太坊/智能合约/index.html","bcf63c6f95430a155bc78c0e0a33bbff"],["categories/CSS/index.html","e8595c6973a72efbafd7e13b01c7551c"],["categories/Git/index.html","62caddd1dbd9037b66585a5085c6e097"],["categories/Java/index.html","4d9e830c62d87e20cfc0c13cf39bbaf6"],["categories/JavaScript/NPM/index.html","d05af759fe79df997c184402cce122f5"],["categories/JavaScript/Vue/index.html","14161ea414f544a802433f360c0adc45"],["categories/JavaScript/index.html","2a2150f65b3a8d7a2e1a88a6b19f75ed"],["categories/Linux/Shell/index.html","be07d62983f1f5c8d126d5394d91a34e"],["categories/Linux/Ubuntu/index.html","38701503a7c15cac4ad147048a07a4f2"],["categories/Linux/index.html","2c802be7ae3f6a1a88c65ad448a7aa09"],["categories/MongoDB/index.html","1a18bb29f7cfce801260e69fc93a98f1"],["categories/MySQL/index.html","5e598ef129b5227c95c06a55d4bdc08b"],["categories/Python/index.html","6834bc0f3f627bd2a86aab31f7f8eb3b"],["categories/index.html","20f2d111a5ed01c925934f5fc33abd04"],["categories/程序人生/index.html","06bbf1497ff6db0b272dc4381e526552"],["categories/计划/index.html","4af17e64e3d0087bf03f806f87563bd6"],["css/css-normal-flow.html","e36f1e11d625759fae089be8263653fe"],["css/main.css","4eb723274c0b0708b5f4ce4503322c8c"],["drafts/configure-multiple-vue-project-with-nginx.html","89aa9c5a6cfd4451f5276b729496409d"],["drafts/iframe.html","bcf0319fb8ca15ea3118d32439aa3995"],["drafts/record-re-install-mac-os-10-12-6.html","e48eb72c79248b4689c24571c2e9347e"],["git/git-DETACHED-HEAD.html","987fd746db78dbb117b090a9ce166a95"],["git/git-branch.html","32e3cc88589e429869581dcff9b3081b"],["git/git-change-server-password.html","3b3ac9251286a88d7323eccf0dde33b9"],["git/git-checkout-1.html","c67af64b7d8eb9e1bbf0e8204c5945bc"],["git/git-checkout-2.html","f7bbf5c2eeb0e45eeb289abceb2f5965"],["git/git-diff-m-symbol.html","78545c92d90b11f08129e5e38b0580de"],["git/git-git-flow.html","920d5a31a114447d0e2ca23eed90a4d6"],["git/git-git-merge-ff-no-ff.html","eba1a6005d0fd05a8c9b9399dd914a25"],["git/git-git-merge-true-merge.html","e91c4fb5bd4df8a4047f726eacbc60aa"],["git/git-merge-choose-one-side-code.html","c906b0095d32edf18cda998e14a660f0"],["git/git-merge-exist-conflict.html","4834aab6aafe9904fcdbc4e71a8990ed"],["git/git-pull-1.html","fe9e2edf5ca20b6dcefacb064d8d730a"],["git/git-reflog.html","daa5ef1e7b87cad11e833ea0fd3d0c33"],["git/git-remote-set-url.html","9976b7404645b6c028bcc00a06844460"],["git/git-reset.html","e2074c1477ac35882a83594f4aa32ee3"],["git/git-revert.html","83ddca798e71f130c0475e7fa9991dea"],["git/git-tag.html","dbe9174d587ef645e252242ab96bf44c"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","7fb54a4a06f69056cd5cad88bdd2131f"],["java/java-deploy-resource-folder.html","8af271544ef10dbc7e990b1de9011d4f"],["java/java-shiro-note-2.html","6072634a6e9176c0a4cfa3e29e7cfc90"],["java/java-shiro-note.html","a7fc2dd3d95830a5d8b88be496214726"],["java/java-springmvc-X-Frame-Options.html","c06b989178a01d62d61224da8df540e7"],["js/js-logical-operator.html","10a6b6cedcd77a087e1eddac093f6994"],["js/js-npm-symbol-caret.html","9bcd9ae9662fbd2d64338fc22590292d"],["js/js-npm-symbol-tilde.html","7fde0d3b9d608305fec0efb9bbf6ff63"],["js/js-this.html","4758235615eff3c82930e6580fddf97a"],["js/js-vue-note-components.html","a076b0ea5b3f76801f1f070b8a236660"],["js/js-vue-note-computed.html","7f18c4c4326c6249ea259ffa5846f502"],["js/js-vue-note-css-style-binding.html","a158fff980c5f18e110e4932f5d31f33"],["js/js-vue-note-instance.html","fa6f8045f370eb253057f839d38e3b93"],["js/js-vue-note-introduction.html","b208f66ee8a9a323161828e99fc950a5"],["js/js-vue-note-syntax.html","c6f18bfaa5f3458251c4b65af6293f76"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","f4ae7340f0074d8570c5a4e0819b09f8"],["linux/shell-command-df.html","ec7019e7c064f2ef217f18a8e0eaff86"],["linux/shell-command-netstat.html","ab1a9c767129995dfc23a26f68958386"],["linux/shell-command-sed.html","75e4465bcd1134f4308db96ac14a7a95"],["linux/shell-command-tar.html","39c9686326eb9d05b3f9fa2d017603ee"],["linux/shell-command-top.html","b2f754772d99241e9d6585afa1d71043"],["linux/shell-command-touch.html","d39883d120ad9df9675d0e183cbe0fb4"],["linux/shell-command-which.html","f5d1869badc34d19e616cf62996f06ac"],["linux/ubuntu-user-add-delete.html","2178ac897df9ed85542babcc40d3b365"],["mongodb/mongodb-collection-aggregation-introduction.html","f395dfa1f0cb67282cae39e5e60d5f79"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","a91b3b66450507b5d53cee9ccbc4693d"],["mongodb/mongodb-collection-create.html","3e41fe93b111da1d26f3a7116c0ce306"],["mongodb/mongodb-collection-delete.html","cdddca8898380de177f2efc5c38672b2"],["mongodb/mongodb-collection-find-1.html","b1b5d95106ba03f984dac4ff6cfbb912"],["mongodb/mongodb-collection-find-projection-operator.html","6ca0c5c4cadd8d3a452cffc893ec6c63"],["mongodb/mongodb-collection-insert-1.html","c31e1355b56324a3c6b12ce45e3b7a6b"],["mongodb/mongodb-database-create.html","a730f2139e338357e3302fe8b913b43c"],["mongodb/mongodb-schema-design-note.html","ee3839645a647303fee97a455f182163"],["mongodb/mongodb-study-note-1.html","d9d5f59489fc4656f13f2d9bc3ebca38"],["mongodb/mongodb-study-note-2.html","3c1bcdca04c3ca1d5dab4eb5953c6056"],["mongodb/mongodb-study-note-3.html","ad21c5e86a093c102ba5e4674341fe0b"],["mysql/mysql-ddl-handy-book.html","99d4816c7c30f420fd25cb65e77c258e"],["page/2/index.html","d234675771435190adc5fd578689a114"],["page/3/index.html","de880f8d912b47816a661e40ba959c9b"],["page/4/index.html","df8fd9688814a990ac9a6b30fc0df390"],["photos/index.html","bb555c80bf715b8c05d0973b0f1bc336"],["python/upgrade-python-under-ubuntu1604.html","083a1dcf1e2ada95d3a3788604ed47cb"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","b00d414f639876984ec482b444551213"],["slides/index.html","05f1eda28f9ed3c451fc91ba1ebe5585"],["tags/Base48/index.html","745accab3e76fb74544444ad67087bbe"],["tags/CSS/index.html","ecd4c08c38a7573418321dda245a3607"],["tags/DETACHED-HEAD/index.html","6649cc9a81f16f2740a6aa0b0ebc2a23"],["tags/Git-Flow/index.html","5be5dcd3254c046924bace3f2042655c"],["tags/Git/index.html","6ee5dee5d0e3600fd3ba170bed273921"],["tags/JS/index.html","62c4feb0068f961c4ef1a1970169ecbb"],["tags/Java/index.html","1b3103c1d2a20aaf98f12e58e1810630"],["tags/JavaScript/index.html","e9f75c7671781bab3d2e2820e1707e52"],["tags/Linux/index.html","c0df984438efc17f176b701d9b965330"],["tags/M/index.html","4edd79619552a57eaf88d2d7b73909b6"],["tags/MongoDB/index.html","478f7d07979b964bee05a470566e6bbf"],["tags/MySQL/index.html","67cb682fc19c2f5d20c3238fa38de08c"],["tags/NPM/index.html","dfbed51e6f9027197d7f8fe435eb30f3"],["tags/Python/index.html","a48c0600b9c8b45706f70e0cc5737ccc"],["tags/Repository-not-found/index.html","fda9e55485c2cdb7892649633b602674"],["tags/SprintMVC/index.html","70aa2e4e653081f2efc4fe2e8a8349d8"],["tags/Style/index.html","e6b6a2ada5e3242c0edf457dbd2469b4"],["tags/Ubuntu16-04/index.html","c88769f52c02cd5099f0b2a55dbd4fa4"],["tags/Vue/index.html","f771935352130261bcf140eb998645c8"],["tags/X-Frame-Options/index.html","9057d7faf135200d19634560341276be"],["tags/aggregate/index.html","f395f324d7b729496e3e092f88bffb0e"],["tags/alter/index.html","f59200d48819fec3cd3f5f66971b5e84"],["tags/change/index.html","4e28efee21c81055f0768fc60b056d06"],["tags/checkout/index.html","83800e2f17a5c920fbb13c7e13bd9716"],["tags/collection/index.html","f485a3ffd1c9390baa9fdd6f5185fe47"],["tags/component/index.html","1d154ec1cd402109c9d2d229f5e3543b"],["tags/computed/index.html","02e8adfded89d8b71bcc62cfa489217d"],["tags/create/index.html","71b1738910d26150b6fed5439204d5a6"],["tags/database/index.html","214ba548032bbbefc2dce431e1dfacbd"],["tags/df/index.html","f34d9621f1960f21f3fcd0430faf2b40"],["tags/diff/index.html","abf53bb560117c0e858395e00744851f"],["tags/fast-forward/index.html","0d76cb4a733d350d97872d89e0923fc0"],["tags/ff/index.html","04e0b69f1ca139118c346c01bc18e697"],["tags/git-branch/index.html","61430a1b6afb0a479bc95afb4b84d1a8"],["tags/git-merge/index.html","596e533d73d0b266620efd5f207caa27"],["tags/git-pull/index.html","86e409554eba4d98150727941d8702fc"],["tags/git-reflog/index.html","c286c778595fae6ea72b192d87847113"],["tags/git-reset/index.html","f0d7c9ebff014d79916ec300334d5c78"],["tags/git-revert/index.html","fa4af8bc76ebdcb33707a2b5446679e3"],["tags/git-tag/index.html","645949caf273b2487a9056c3b6c65417"],["tags/index.html","305019e6f6ff8fba364beb4f02d443d9"],["tags/modify/index.html","610308c6e17d3ccc5d7a88e53ae5a213"],["tags/no-ff/index.html","ae0269b87355b5a237ae18292a0d4ad7"],["tags/schema/index.html","a9c6256b423132fcdf473e951f2e8e2f"],["tags/shell/index.html","e66f5e06a7309b2c5180904420b0e098"],["tags/shiro/index.html","c3316d4fdddfe46d34478d3241c5ae58"],["tags/this/index.html","d0206a09f4fcf67bb801d6b7e4315bbb"],["tags/tomcat/index.html","4b2f13c94fc6febd8f7f0a1a168e6ab1"],["tags/true-merge/index.html","aeec336ce901b8521bae6aa28f175d6b"],["tags/windows/index.html","dad4808e4d8cc1d8ded5806f40e598ef"],["tags/介绍/index.html","758abb57ba9b64eca2a4ed592ee3d87e"],["tags/以太坊/index.html","395b600c78c285a0732bdce5d9a0639e"],["tags/依赖包/index.html","892b9575222112415d9d2a763168ab3c"],["tags/修改/index.html","673f95a22cdc02f6d790a90a2ade95d1"],["tags/冲突/index.html","969ac501ccc2d283fe61979ac8e80e7d"],["tags/分支/index.html","0cdd247161b1b379e39d39463d194e2d"],["tags/创建/index.html","370b7dd0601363df0a8aace7cd43b611"],["tags/创建数据库/index.html","dec979bd3769e555e58f869a6252b5b7"],["tags/区块链/index.html","5f96a1013721fc7ee8c793c33c6e931a"],["tags/升级/index.html","b30c7cd55427e60d8d03091914d72039"],["tags/存在/index.html","a4325ba308b044267d27691034214cba"],["tags/学习笔记/index.html","e57d10ba9c8f79bb12b551153417889c"],["tags/实例/index.html","632c2576665db9e9080d9e5712211105"],["tags/工作流/index.html","7c6d02ddd0f2beef9b873f5163624ba5"],["tags/插入/index.html","76e7f956cdac7a19cf0c1e7bd071e190"],["tags/数据存储/index.html","715279585163b8b9d4c6aae374e20d0a"],["tags/数据库/index.html","97a787a222cbe4dcf745a12fddc7d8ca"],["tags/数据集合/index.html","dd4c84c182c97c86c3f4ff3dba93a300"],["tags/文档/index.html","f896e8ea07b6b831e4f2d786cab6d7f7"],["tags/智能合约/index.html","949a517c5454b16d26b6fa0d4a6cc012"],["tags/标签/index.html","23985aee54eb85cd8de04e6034d42bde"],["tags/模板语法/index.html","b96d4d6e968b0d77a83adde2726bd07e"],["tags/比特币/index.html","619c364d995d1d9453fb21eaec45506d"],["tags/波浪字符/index.html","5571d7875b6bba3209442243c3bd4bcc"],["tags/用法/index.html","340b128fe0a2179e2c109980b06b5d29"],["tags/笔记/index.html","e64b76b475cc16fa81ed65bd7615789c"],["tags/符号/index.html","a0c602a910967a51afacaf1179545da8"],["tags/组件基础/index.html","8ea1bc2fff406f8b657e4f0dec6a1051"],["tags/绑定/index.html","20ff0afa940442d5cacb94e650da7077"],["tags/编程/index.html","35398be08a765d5ae1ad69f61b654dae"],["tags/聚合/index.html","73d93d0973cb20a9e11b4d4d6c0dc779"],["tags/计算属性/index.html","a19bc69b01f6eb4afd29f66058d78954"],["tags/远程仓库地址/index.html","03d822dbd31fa7bea51143452d98a30a"],["tags/逻辑操作符/index.html","c2d9880c5fac5dfa8cafab6e03a0c5e7"],["tags/部署/index.html","e681eece2169919e1499696c66b1f9e1"],["tags/难度/index.html","29ba9314cf99e2398bdba3b55c2426b1"],["tags/集合/index.html","13590f52d15c2f6673df06d2219592f7"],["tags/集成/index.html","dffbc7f86ca6cecd8c527c435610b3ef"],["thinking_in_programmer_life/full-stack-programmer.html","4d13bb10a28c33e3c8d1562334a5a8be"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







