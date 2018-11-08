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

var precacheConfig = [["about/index.html","efd40edac95eb4a2d542c4064d4aaaf4"],["archives/2018/06/index.html","b152239183404725cbda247f3c34aad1"],["archives/2018/07/index.html","d494020f699ea905af654a8eaa93656c"],["archives/2018/08/index.html","7ee699528bd91dc1b9dec46de378691c"],["archives/2018/09/index.html","83cfa8e0b5cee007d231119a0a619d3b"],["archives/2018/10/index.html","220a1bd262e1a159519fd6bfda42d5ed"],["archives/2018/11/index.html","3976871f08faf325c4eb7e4a0f847545"],["archives/2018/index.html","88312b693390b73a2aa9b34dc74f2e14"],["archives/2018/page/2/index.html","5ec1b4d23d1ae52f0d3022f0ef087825"],["archives/index.html","b1f35c9f326066e1c2dd4f052a42fbf6"],["archives/page/2/index.html","7c84467b713a81af88314e91e5195630"],["atom/index.html","ed974390c3f0c27a94b0e20125db0e2a"],["blockchain/base64-base58.html","29a04a2efe4e3abb7cb7ace01720a971"],["blockchain/bitcoin-data-storage.html","bccf79318e2b94e6881a2848c5f5b151"],["blockchain/bitcoin-difficulty.html","bca8a913a08387085e3a9abaafdc1480"],["blockchain/block-chain-ethereum-contract-program.html","210f304a4b8aab293973c2aa4285e5f9"],["blockchain/ethereum-programming-introduction.html","619f346e6f8b899b3c34c8731cef1a0c"],["blockchain/ethereum-rationale-introduction.html","4386a1cc61d73642654f4706608e8d91"],["books/index.html","cc1e64f42a68a37aa64a89f7ddf32896"],["categories/Blockchain/index.html","7668983084b10a7265fe1e327370d2d4"],["categories/Blockchain/以太坊/index.html","e01240cd28948b8686ed5f4c9224ea36"],["categories/Blockchain/以太坊/智能合约/index.html","e38eb1647c20f3cc039f919c1d8ea288"],["categories/CSS/index.html","eb4dee15d65392ed57049a5a7cda811f"],["categories/Git/index.html","20ab51a1bc5c5fc27c2943184eda9541"],["categories/Java/index.html","36f0e88d50891de126d13881a9ac5c9b"],["categories/JavaScript/NPM/index.html","31edcea0b129f6c48dcd6a826455fc43"],["categories/JavaScript/Vue/index.html","c8b7d3d55203733175e9853df9e22406"],["categories/JavaScript/index.html","9dc53d3edbc443a77f478ab896bb6fe5"],["categories/Linux/Shell/index.html","71ae36f7e87f249245c65994ae362b03"],["categories/Linux/Ubuntu/index.html","a05d0065c8c25a4099711cdf5bc388d9"],["categories/Linux/index.html","88a219afd37895cc0e1133e542543bb0"],["categories/MongoDB/index.html","f04d3cae997a978e7e3655fa4cf86b89"],["categories/Python/index.html","7ec7022a5540796e5477b467566e0fd9"],["categories/index.html","958b7b9a6e546202671fecf347aaeef2"],["categories/程序人生/index.html","d2ea652232a19577299611a5161ff344"],["categories/计划/index.html","b638b304fb87962198ccea8adcc308c9"],["css/css-normal-flow.html","0063aa5bb16d02290d0d13ddc8888d7e"],["css/main.css","31b2ecc5019775626af2906a4084b6ca"],["drafts/configure-multiple-vue-project-with-nginx.html","c043ccb8d434600c1977be65c043f8b2"],["drafts/iframe.html","f4fa6dd057ffb0cd334365dc59d53910"],["drafts/record-re-install-mac-os-10-12-6.html","0c9411dcbb7dcc4956c54fec621348d4"],["git/git-DETACHED-HEAD.html","04af9f4eedbd69e8c5e7f787c2cbc54e"],["git/git-branch.html","1297e0e21ff78ea1c65d9a289b18088f"],["git/git-change-server-password.html","0dd1f312c70b1767b2d4bc2b2cf998c2"],["git/git-checkout-1.html","217553d333121df41289f14fb7af6a54"],["git/git-checkout-2.html","52d3d2d356522af8ec97e47c9bdea05d"],["git/git-diff-m-symbol.html","8d02719335b07466f02af2f3850e042e"],["git/git-git-flow.html","bd9f209736b82d26ea28e9157c346c7d"],["git/git-git-merge-ff-no-ff.html","9dd0cdf2c024bd1431091067dd68d486"],["git/git-git-merge-true-merge.html","4fcdd563c273ee02ac1807f973ce4749"],["git/git-merge-choose-one-side-code.html","0d513b7891780484ace30fee3c2c73b1"],["git/git-merge-exist-conflict.html","4b3dd858b31c06342a4f7abc6a8aec33"],["git/git-pull-1.html","61d0bc888ed2ffdb7a36f68ed6a30306"],["git/git-reflog.html","ea7077fc434d7265bb339abaa56060c9"],["git/git-remote-set-url.html","332a4434637bc3e961a2a41af6f4b003"],["git/git-reset.html","1fd329b4ef543acfd9b030bb073c274a"],["git/git-revert.html","3d95f458fe23e9633175f6ae0cfac1b6"],["git/git-tag.html","ffd4576b2564e459604d4ab542efdcef"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","2d8fc5f2f0210fd0bc10752166ac4736"],["java/java-deploy-resource-folder.html","53ab708e32c8640af82da4bb215b911e"],["java/java-shiro-note.html","1e61f1b9c805c48105ecf15f6808a2b9"],["java/java-springmvc-X-Frame-Options.html","666296f5bda53bc2df43e5236714e234"],["js/js-logical-operator.html","033f017fdd65ad906de600a7b58bd5a4"],["js/js-npm-symbol-caret.html","12172cf9b2ee0ed2434a7d876bb0496e"],["js/js-npm-symbol-tilde.html","14381c420b11d0a0342da5d1e0e0e025"],["js/js-this.html","f6c3a36e0b1d093ca8d5370b596f7d4f"],["js/js-vue-note-components.html","f4d9b484d0155ada91b737fc6b754e12"],["js/js-vue-note-computed.html","d456b2f7e08c80cfc594a72d8e1e7052"],["js/js-vue-note-css-style-binding.html","5b265d273f31feee70b9adf9b4c33eca"],["js/js-vue-note-instance.html","1aff629e0188e063bd001127afa0caa7"],["js/js-vue-note-introduction.html","2c397129b05f7b122093b00d9224e88d"],["js/js-vue-note-syntax.html","fefa02ce84cfa37ef8bbb1373ec4c7bb"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","5f8913ec1cadadd32c2f376980018f20"],["linux/shell-command-df.html","c918d5f0d543fe1eb0e698ca8eb77ea6"],["linux/shell-command-netstat.html","bb8adbc85a95c867b0a9d812d7a1beb6"],["linux/shell-command-sed.html","0bc230f624edd39d7d454d0f56a38a9b"],["linux/shell-command-tar.html","5fe18f8cf256b44ab3dfa02c3d484569"],["linux/shell-command-top.html","04f28ba24836c531c8fe6d4212a0e76f"],["linux/shell-command-touch.html","0673f3ce9420acd0cbcf7a0f8815cbcd"],["linux/shell-command-which.html","2104656ee10a6f909ad0ceac1bccdc83"],["linux/ubuntu-user-add-delete.html","6db0d395d72e823410cec9bc4b32a90a"],["mongodb/mongodb-collection-aggregation-introduction.html","3eb393d9da17650d701fab74bd19d413"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","81fd46d5f55459a952cf0d3d300deb86"],["mongodb/mongodb-collection-create.html","04083b685d69f2751c1742e75993bb3a"],["mongodb/mongodb-collection-delete.html","7a7c1c357f168816b4dc4e1108da1f6c"],["mongodb/mongodb-collection-find-1.html","c06b2db56f2894ff4cfb062215553889"],["mongodb/mongodb-collection-find-projection-operator.html","04aeb9f24ca3c25b96e982817bd0a8a9"],["mongodb/mongodb-collection-insert-1.html","f918fa6a9982793be2f02d2ddd01881e"],["mongodb/mongodb-database-create.html","0aaf6f9805e7561ba0158222d7583b4d"],["mongodb/mongodb-schema-design-note.html","cee7062c9cd4af8cf8955a0204e89dd2"],["mongodb/mongodb-study-note-1.html","3367df81bb2f8092d12c089d9b71793b"],["mongodb/mongodb-study-note-2.html","68e91f28a891b9d6317c9ab72a92419c"],["mongodb/mongodb-study-note-3.html","85c0a14fa096f64e3bbf1686b312caf9"],["page/2/index.html","9cf07ae0920bf2bd3e315233ca42d694"],["page/3/index.html","deb2e4769dff990036a5c149c5145d63"],["page/4/index.html","cbc9d66fecfd74cefc11f0fa96cd3f97"],["photos/index.html","e1bba9473a142c01037cfd40d6511f62"],["python/upgrade-python-under-ubuntu1604.html","38285589d7c41fbf450a8c744836118c"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","6593dee884f93becb0575340279e4d4f"],["slides/index.html","6aefc701d514f80f72bf966672ec665a"],["tags/Base48/index.html","353efabf03c6f1901ccaa94d9f7137a8"],["tags/CSS/index.html","07519b659cd3b8971a472b87aca6d578"],["tags/DETACHED-HEAD/index.html","a990edf6d8114664532520a0419cecc7"],["tags/Git-Flow/index.html","edaa547b52acbb873ed145e29049d6c6"],["tags/Git/index.html","844151334a77856b25f1a7269571e612"],["tags/JS/index.html","39490489c605c8a728bb0289c26cbaf2"],["tags/Java/index.html","bde4098907c95fdd986479ccd4f37792"],["tags/JavaScript/index.html","55117bc210c1d323f320c2900326032b"],["tags/Linux/index.html","dcb497d1791460ed2234a4a3f0d39861"],["tags/M/index.html","62214fe4ee63ee3c5e9e63e29a4bff26"],["tags/MongoDB/index.html","15080f1368c1d2268b7c8ba707a09e45"],["tags/NPM/index.html","8985427ce9c4eeb58949d2ec3e772c1c"],["tags/Python/index.html","8dcf07b2f56f944936f85448f90b1d92"],["tags/Repository-not-found/index.html","ac532c1f071d2c78258e6a5ea6cf4a42"],["tags/Style/index.html","a3dd5b26786baa4f0d14179e64c2d71b"],["tags/Ubuntu16-04/index.html","e9a0a34516ade6e627522e865d0cdb8b"],["tags/Vue/index.html","e402b15c07fed8e41afdb8163eb683e5"],["tags/X-Frame-Options/index.html","e78276b8e8c6b2cd4be1de88dda28874"],["tags/aggregate/index.html","e75a645b34ab0c08643d2fc27e924770"],["tags/checkout/index.html","2e761e09da6cb5fcf47db0f0f23a43c3"],["tags/collection/index.html","0a0f1e47f595f69c5c9852c1171522c1"],["tags/component/index.html","71d0fd33c571d8e83d200b7d86ab9735"],["tags/computed/index.html","a01ade5d5ff526146ffa14728adb9807"],["tags/create/index.html","53da7b37e79a892df651b0465d301444"],["tags/database/index.html","e0402a4f8cebb75004fb62fe4f2c4939"],["tags/df/index.html","f9fd6140d0eacbea414752b5e639cee7"],["tags/diff/index.html","64d5c1d1fdb17cba77a51b7ecffe0cd0"],["tags/fast-forward/index.html","c8093de32614427ded3ae54889b59ea3"],["tags/ff/index.html","4087f4c34af3375bc3eea22113ed5767"],["tags/git-branch/index.html","cfea242da6c4292863e091e7f83d5268"],["tags/git-merge/index.html","c096f1c4ad47d5c00478e85577ef784a"],["tags/git-pull/index.html","b0794d47b991bee383fbc860022b35ac"],["tags/git-reflog/index.html","10cc94ee73ae8f064e5ad4182c866492"],["tags/git-reset/index.html","eb3d88ac9b3f9d6971b7f018fb2a9de6"],["tags/git-revert/index.html","26d9244184021f929138e4ad11c80d76"],["tags/git-tag/index.html","6915e7bad0226b8102e008dabe77417d"],["tags/index.html","53ef4562771f64b3a669daf0a2facce6"],["tags/no-ff/index.html","ab91aad099dc39e996ef672e923fcb32"],["tags/schema/index.html","ca9a2f50d710cfa0bfecb5b5270b3518"],["tags/shell/index.html","06f395483a8fb321e3e5b1a1e1a425b8"],["tags/shiro/index.html","a3a764644ea10b4ae2a5ac2023512043"],["tags/this/index.html","2616b5f0f4f5fa2c9efba9e7e333f98f"],["tags/tomcat/index.html","f7d5793cb701a795122434faa6f9976e"],["tags/true-merge/index.html","681cbbdbf9920f127831dfbc266060f9"],["tags/windows/index.html","574cb67bb73769b9686e56203c6b3e77"],["tags/介绍/index.html","acd220b4bbcfb72ca3dae461eb17b8ac"],["tags/以太坊/index.html","2d283e2fe9b8c0d62f99574f1c9537ba"],["tags/依赖包/index.html","a41a1011cbece068c5f72c2281bbe039"],["tags/修改/index.html","0841db4e5e4995e17185a8e7e73f9300"],["tags/冲突/index.html","ade372297fab026d5aef61fd82479580"],["tags/分支/index.html","78304bfd3f80fe3335bfa884b799228e"],["tags/创建/index.html","f6efe6ff04025b85edb96675a132ee25"],["tags/创建数据库/index.html","5a7d4818d0f29fa0c0e511bd5c132144"],["tags/区块链/index.html","e756c7e81fa0b492a44f45c727ded856"],["tags/升级/index.html","3f990c838661836ddfaef8c8fd3b7b8f"],["tags/存在/index.html","07de62824f6265f978c4d13b276ed0b7"],["tags/学习笔记/index.html","c7f2b0069b70eba554a258ad853cbcb9"],["tags/实例/index.html","309fc5c7789e598f99b8fa149a4fa048"],["tags/工作流/index.html","aae357a406de9c4981af8e30fb41f98e"],["tags/插入/index.html","77a56f93c38b1eff8180e4e11bf00756"],["tags/数据存储/index.html","a7755bbf0f4c022aaab5e9b4ce975f92"],["tags/数据库/index.html","6fb44f6fcf31866a7cc512406ea6bb9c"],["tags/数据集合/index.html","85c8429839036ee8a099e8bd8d3a1b78"],["tags/文档/index.html","387c9d026f9f3bcabb2c9371bc706df0"],["tags/智能合约/index.html","d6775e9d990802cb1e5b173610992dac"],["tags/标签/index.html","27548fb5b479c2b114f62ce6b8b79aa9"],["tags/模板语法/index.html","d1fef7531b4afee931a0fbd7cc8234ca"],["tags/比特币/index.html","b65a2ca21adf47a2744fd67180dba0f6"],["tags/波浪字符/index.html","de752108dfe7fad8ec2430d009ad3e91"],["tags/用法/index.html","afee52031f5d8e06b81c52edb5b14f37"],["tags/笔记/index.html","9b67ebaaa557f2a6c7bd5283b8dde4e6"],["tags/符号/index.html","8012c918d8e9c850e8e9814b506d663d"],["tags/组件基础/index.html","8db1169cb770b1a459b7b205ef75c59f"],["tags/绑定/index.html","31d6a4e53a45c2db1e8d668662a20421"],["tags/编程/index.html","5d44fafd48c48a5fe197cd1eb32dbcc9"],["tags/聚合/index.html","5f494b280b807f50da7c86d0a5091186"],["tags/计算属性/index.html","b01bda8de2889e3c814a37c87301de65"],["tags/远程仓库地址/index.html","986e0638a2d1c0243446c62636d9a3c2"],["tags/逻辑操作符/index.html","007e772af415bd1797f2b3f9357f9c4c"],["tags/部署/index.html","404be2e695d30ebaa961fe689e80daa8"],["tags/难度/index.html","47382090dbb81c359d8c5fcb7c161cb2"],["tags/集合/index.html","db9a899b70e4bafef6a0168f1cc23060"],["thinking_in_programmer_life/full-stack-programmer.html","efa28ab4d29ec67937a59d9d72ac3fe9"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







