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

var precacheConfig = [["about/index.html","8323e2c6840b8162107888ae013d89d5"],["archives/2018/06/index.html","7ae97d44054e41cad585d259fa7886aa"],["archives/2018/07/index.html","278baaa33413253eea1ed55ee2c1e2c4"],["archives/2018/08/index.html","6e8d97d7ddd31723eba8847d19a54423"],["archives/2018/09/index.html","d94ac9b4cff32e7ae7bd66dfa83e4ae2"],["archives/2018/10/index.html","c1fc3420d22c9f88038ae6b1f9f70df6"],["archives/2018/11/index.html","c676c88bb5d82a6f8ced44240d7dd15a"],["archives/2018/index.html","a69a378ca416debc13ef7ed606306e90"],["archives/2018/page/2/index.html","ef43eee2af2dfba8b26acfe01a214332"],["archives/index.html","a3648a47c2f6ea34532b649c909180c0"],["archives/page/2/index.html","13f6d1480da0ec8cba876818bb936335"],["atom/index.html","7a2837833969ab7135e8485c90d78c87"],["blockchain/base64-base58.html","0dd8f8f1141578271243736a5c2b5820"],["blockchain/bitcoin-data-storage.html","5363c863d9c5cf5cbc0df333549dc510"],["blockchain/bitcoin-difficulty.html","17431706984e181db4e59c8c5751d4de"],["blockchain/block-chain-ethereum-contract-program.html","16bcb2358b9fd2dc6e520b4d677cc66d"],["blockchain/ethereum-programming-introduction.html","9437734ddbfd309f112777ba3db14a9a"],["blockchain/ethereum-rationale-introduction.html","2fd292eca282d7bb08ec340c11659e6b"],["books/index.html","e87a7534f24936d7095227f187d2e77a"],["categories/Blockchain/index.html","163818a6d791e7fb73942d8503fde3b5"],["categories/Blockchain/以太坊/index.html","7ebb6eb0b9853d32a45770f9488d32d8"],["categories/Blockchain/以太坊/智能合约/index.html","9a3fbaf30144667ac1f781de495d3f16"],["categories/CSS/index.html","6a06ed3161033f13a97dec112a7aaa25"],["categories/Git/index.html","6d1e9ae3b0167273442b4cca8054f7df"],["categories/Java/index.html","bb5b10adbcac08b26e4165b7f54b1363"],["categories/JavaScript/NPM/index.html","ba3a52ee1692754fcbcdb3a0f975d0bb"],["categories/JavaScript/Vue/index.html","479e4b946c30d25319a62276ca06e9d9"],["categories/JavaScript/index.html","389cfef0208e00641631a7021298b40b"],["categories/Linux/Shell/index.html","fe87cb752e84b065250562e148908e45"],["categories/Linux/Ubuntu/index.html","67a24c28872efa912648dab22c69882e"],["categories/Linux/index.html","db7144610e70b0bd30bf469a095fed50"],["categories/MongoDB/index.html","1e4fafcbe8d70682a648f37b0f8a1ebe"],["categories/MySQL/index.html","632052681a26329b3a458c3f3ed7e5a4"],["categories/Python/index.html","a3cb80ff39621498521e8fb2bd0a2da7"],["categories/index.html","3571c24c046bc3beb28433f98c5b2052"],["categories/程序人生/index.html","0c346b091a28b7267d2c1e683c4a7ad1"],["categories/计划/index.html","92ed58a2a8d40d056028540526f1f976"],["css/css-normal-flow.html","a9cef5d560065a538761e252a718ae99"],["css/main.css","45463732d114ec83968f0dc5e278e41e"],["drafts/configure-multiple-vue-project-with-nginx.html","6b6b29a045e64ea7cc52202199ff84f8"],["drafts/iframe.html","a7121959aabebeff9a154115e8ef4788"],["drafts/record-re-install-mac-os-10-12-6.html","7a361a5a6f70bb18bea5232a1a4342fa"],["git/git-DETACHED-HEAD.html","b43542de551413e16d0cc1822212e599"],["git/git-branch.html","85d264e82b221ed35265f47f434565b4"],["git/git-change-server-password.html","fbc808fe33f912a1057db02751366fc3"],["git/git-checkout-1.html","86d8f50c197a1ea60d760c656ece95a0"],["git/git-checkout-2.html","23d7c419dbaed66ceb5e0cc046839bfd"],["git/git-diff-m-symbol.html","4fd5e89b2ed96768f6622eab6d4be57e"],["git/git-git-flow.html","666a20a7026a8a57849f386ef0f6fbc0"],["git/git-git-merge-ff-no-ff.html","dc1a2e26bc7b0420f09dd500ac38e87f"],["git/git-git-merge-true-merge.html","d46dc8db86b1ef1e51591bd5d30620a2"],["git/git-merge-choose-one-side-code.html","fecaf624eca56cb126695fd5d2baf796"],["git/git-merge-exist-conflict.html","5ab62588adcbd613f7486ef1c8d1c76b"],["git/git-pull-1.html","63a090ec177b5422fa0681492ffe4019"],["git/git-reflog.html","fc0a1034a72c600d1a95dd5aba4b1373"],["git/git-remote-set-url.html","b5aef48e296d5b3014e51e07e85214da"],["git/git-reset.html","401426def261c199979656ee4e3c5177"],["git/git-revert.html","40d47a837856332a86821e281552f5d8"],["git/git-tag.html","7b15309c29df079607c8a2ed6aaf3b3e"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","6d159a6dda42f4e56ee6f25d94136a9e"],["java/java-deploy-resource-folder.html","2725b3034b9d486c5b95c9e4276a362c"],["java/java-shiro-note-2.html","4f74e881c5b02a27b2369c915a6615e7"],["java/java-shiro-note.html","638ee57bea9d77db232fa8f143d4d65a"],["java/java-springmvc-X-Frame-Options.html","de3c3825b23a5810a2b1511a424ae633"],["js/js-logical-operator.html","d744ca3a331b42683dff936ec0cd4847"],["js/js-npm-symbol-caret.html","4f0b23d142aedfa3b53a553773235f97"],["js/js-npm-symbol-tilde.html","072f3abd10a1e8ce672352f617c643c0"],["js/js-this.html","25124d9c30c9478a0b7616bc35b34c4b"],["js/js-vue-note-components.html","b0814305a205338c53359e35abbd7a7f"],["js/js-vue-note-computed.html","28a2a2ef8b251b59812a39876ca564b3"],["js/js-vue-note-css-style-binding.html","49e501369316fc34787ecab7a340113b"],["js/js-vue-note-directive.html","be1e20c9be420758e4dc548b8a361c22"],["js/js-vue-note-instance.html","cac3381527593a5de12d3835d400fdb6"],["js/js-vue-note-introduction.html","e62a906c5d2ed19261959333b83b7834"],["js/js-vue-note-syntax.html","8ab508d52a0a947ecc44b7a3b4c19920"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","c8630c5f92c53a2259cf4f4d47743f32"],["linux/shell-command-df.html","c218da5bec3901ad444d78c67ba6236a"],["linux/shell-command-du.html","5cc43e9a1ba1f93fb7ba69d20fc90465"],["linux/shell-command-netstat.html","dc50dd515a763f8ae8ba0dc41faf8c3f"],["linux/shell-command-sed.html","60cdd79116beefc191dd86964f0d1d61"],["linux/shell-command-tar.html","0aee46cecf337a5ceee3b6a6fecef782"],["linux/shell-command-top.html","a7fe5bf83631cccfee37f93f43f5770b"],["linux/shell-command-touch.html","5894bf9136e1a53c4abc9fcd366116db"],["linux/shell-command-which.html","ef60dc53b606c34e3e1a23e87661fd71"],["linux/ubuntu-user-add-delete.html","f7ae9355282ad3f430091c88657e15ce"],["mongodb/mongodb-collection-aggregation-introduction.html","88e2be32cb83b7b087466e9d406b5ee6"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","536eea7893f86bf5e3b2cfb8fc8f433c"],["mongodb/mongodb-collection-create.html","ae1c77d0f8d75d84670c5e770ad1b7db"],["mongodb/mongodb-collection-delete.html","5f62ae8b05f926d2c2ecad106b2d436b"],["mongodb/mongodb-collection-find-1.html","0e217bfb70758e96bd1337e33b02c024"],["mongodb/mongodb-collection-find-projection-operator.html","b4c3328e0340554908fbd9912884b0b4"],["mongodb/mongodb-collection-insert-1.html","6b611243028ac93c205ef274361a33d7"],["mongodb/mongodb-database-create.html","736fdde8fee10eccbc69472fe6f568c6"],["mongodb/mongodb-schema-design-note.html","a1342dedc707c3ac974519c0150a82aa"],["mongodb/mongodb-study-note-1.html","54179691e456d86f593a0b00b576cfb8"],["mongodb/mongodb-study-note-2.html","c1987bcf55d45e5e94a2ece0639ed5f1"],["mongodb/mongodb-study-note-3.html","9a0a1cf846e9a0ed12f28c4b73d9a2e3"],["mysql/mysql-ddl-handy-book.html","c58a10c90eb835970ac162e54d2514a4"],["page/2/index.html","9eb20298b463e0fe7661130bfae2fc9f"],["page/3/index.html","e1578f7397869c2a2faab5811a746794"],["page/4/index.html","5f0e6e1e8398ba4e37dd1346aec34976"],["photos/index.html","9a2eacb6891bdb1c09fef911b7ab5df4"],["python/upgrade-python-under-ubuntu1604.html","56cebf5b3896b4c91e268edbc671bbe7"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","5b70a0866f7f186ab6335d6df2723dec"],["slides/index.html","80a809c71f5110c99498dd2059bcec05"],["tags/Base48/index.html","e82a898f37fe8835de23c68f070ee991"],["tags/CSS/index.html","1e88df8333fb903278ebde35b62f3acc"],["tags/DETACHED-HEAD/index.html","213e421324a74c0489484105356e38cd"],["tags/Git-Flow/index.html","9ca7a935350777ca226e0f2d05cca54d"],["tags/Git/index.html","2cced7718772359e701964df5c1b6c3a"],["tags/JS/index.html","68fda7e5b73f8bd196601ddc9c82794e"],["tags/Java/index.html","e59c26dd65504434c6d8c22c3f75dbcf"],["tags/JavaScript/index.html","7c50b22ad9d5bdb1abc6e332f90aabe7"],["tags/Linux/index.html","c83ca2d6b6c85bc9c1dfcd21b9e70703"],["tags/M/index.html","c702063cc95d83c024775d583879b768"],["tags/MongoDB/index.html","d302f12b0bf558a5b7879d36931251b2"],["tags/MySQL/index.html","60af98fc05b17a424f1772130df501f8"],["tags/NPM/index.html","a2fbe3ed79beadbdff4320cf4b8195c2"],["tags/Python/index.html","d48074e5ce3197d49291eec316a21287"],["tags/Repository-not-found/index.html","befb299f7a87bb2eda50b0ac0c6428f1"],["tags/SprintMVC/index.html","ee02a18a3bb12eef782db9cc8e4fa180"],["tags/Style/index.html","bb7aa3b80ba36d576abc19fb81870620"],["tags/Ubuntu16-04/index.html","761ef0d0005226aa10f4342c7847863f"],["tags/Vue/index.html","9431e2aa344de7ee47a469989f447dd6"],["tags/X-Frame-Options/index.html","e13b57aba2daf7822631d6ff39efea83"],["tags/aggregate/index.html","6a7698e9fd2c5fbda63c946fd533724f"],["tags/alter/index.html","8a2f44c0f879eec0e2c722d7e49afaac"],["tags/change/index.html","7470b06992536cf9b7ade056c9beae9d"],["tags/checkout/index.html","410274841dfcd044bf9c614457d2abfc"],["tags/collection/index.html","1a80578b915b84ef5ecce79a61cc958e"],["tags/component/index.html","8a1fe6c0f89b7b7c72dbe4a7f9ae849f"],["tags/computed/index.html","3889ca23e034e99ad50ad61c14354aa3"],["tags/create/index.html","24aafbaa695e8092f1bb8f4ad1b70f95"],["tags/database/index.html","67d43ae10c5ddbc63c202e2eb41c6108"],["tags/df/index.html","809c445417b6cd15e661895019136319"],["tags/diff/index.html","dc7bfc709fa5a95e3088487ee99e3b02"],["tags/du/index.html","e987fa93e16da0db3440ce3048885e9c"],["tags/fast-forward/index.html","2b3b4dfc79b5d394ec38c7676d2e6b22"],["tags/ff/index.html","a53ca42cc3634eda20e9c9c17ce205ef"],["tags/git-branch/index.html","2de6701f071f9f9695a9fa9a1ba80562"],["tags/git-merge/index.html","3240aa7230e75c8d8c6549628f19ce83"],["tags/git-pull/index.html","771d49b604e18fe0cdffcf5eb581dcbc"],["tags/git-reflog/index.html","3448c9d5d4d1e60a85ba23bb632f624b"],["tags/git-reset/index.html","5ced89cd7430360a406db29407b3f554"],["tags/git-revert/index.html","7552c7d3794cddd0fa2e337e41f2d331"],["tags/git-tag/index.html","d09ff65a92fa71fd71bbe65bfb2c67ad"],["tags/index.html","f8188ea5f7a8b1de34a3d9765f702c4c"],["tags/modify/index.html","da436f336488767e39443c20a050f92b"],["tags/no-ff/index.html","fc8d6d057d9250a988d60058120909f9"],["tags/schema/index.html","4517562dec8bffbc3fd27e683bed4ffa"],["tags/shell/index.html","f195080095719559d37bfff6d8877dcc"],["tags/shiro/index.html","bf4b529d09d94ec8f54c7ceb51353232"],["tags/this/index.html","b4ba8236ac3dfd19eb309d8b28b63736"],["tags/tomcat/index.html","c887d0c825022e9bf8543c95fe616b6a"],["tags/true-merge/index.html","ec14186c46bdaab9cd68baefe0a9e583"],["tags/windows/index.html","64a29f1a6998809ab5b7ee212ee59d0a"],["tags/介绍/index.html","820ea72f8df39208f55486457401580e"],["tags/以太坊/index.html","ca2500529306255a46fdc79a63e34cb7"],["tags/依赖包/index.html","40699b35c7421f830e160870bab52c67"],["tags/修改/index.html","69a681ce4e4fe4bdf463366fc9f87938"],["tags/冲突/index.html","bb02f3202d9bff6fccca5d8fe69591c6"],["tags/分支/index.html","ad35614ce1971745b653510247e6478e"],["tags/创建/index.html","50d7a9a84b62a67407aaa1fe36ce2825"],["tags/创建数据库/index.html","668057a74f6a41004293a4d70b58eea1"],["tags/区块链/index.html","f1c941e0d189671e174dd459f3d05fd8"],["tags/升级/index.html","fb2cb36b38acf97962f52a6b1d6c2bf8"],["tags/存在/index.html","85ecf27c6fd88c6676d73b59db503afa"],["tags/学习笔记/index.html","cbfbdb28cc98c268bbfcd2b73aa96739"],["tags/实例/index.html","04b026fc2b27a1f4445832e4fafc33dd"],["tags/工作流/index.html","09a60a97664a496c84b5ac4a6e0352f4"],["tags/插入/index.html","810144bf64c85f2514ebc8d210fc835d"],["tags/数据存储/index.html","6f24a8da25d1f51ef29e3e83347b0e0b"],["tags/数据库/index.html","4ae9605853dc9c812e194d6d099d65c7"],["tags/数据集合/index.html","f4a462819337c9d58bb86c22f13c5e76"],["tags/文档/index.html","1f32893c43ee44d98e2045418a1e890b"],["tags/智能合约/index.html","12e4b03bd7b034b804fc6f8af4451d34"],["tags/标签/index.html","e6b6128027a85152afb0b161ea5061bb"],["tags/模板语法/index.html","4e4a201c8015559f108c387fffe4c7dc"],["tags/比特币/index.html","a1d23604cd5d9fba8c72b637d8041df0"],["tags/波浪字符/index.html","047c43a12852ded49c38a113d6b4ea9d"],["tags/用法/index.html","3ead4470b926bf513df446a3d7669ccc"],["tags/笔记/index.html","1b175961b9ee740f7aab4cb5ed80df17"],["tags/符号/index.html","fbb841bbe4a66a27a5862400169322e3"],["tags/组件基础/index.html","5904f55f65efc0e26f38cbc44e10cffe"],["tags/绑定/index.html","c959598b50857bc93f3b04db7d28dc3e"],["tags/编程/index.html","e2536c02dc888c0732239086c223ef67"],["tags/聚合/index.html","194b2f9afb43755235a4424aec3054c7"],["tags/自定义指令/index.html","571cf482a3d157bf0e6643294d125d87"],["tags/计算属性/index.html","6cb7d90b4d56b3cd5bd2d9ea71a4a980"],["tags/远程仓库地址/index.html","e1875b0918e393edca8d5b61e335fae9"],["tags/逻辑操作符/index.html","bc11e13e2e8ee2a01cf9e9f079fc991a"],["tags/部署/index.html","8b0205f15692bce55d821c096bad558d"],["tags/难度/index.html","55f6b473c03e3a634c651c656aafdbaf"],["tags/集合/index.html","88fc5e1ef3a7c8e81aa561da5003cc71"],["tags/集成/index.html","ad0989ed91777c35c6705625350b94b4"],["thinking_in_programmer_life/full-stack-programmer.html","91808ce9eb58bbddd57373e24268658a"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







