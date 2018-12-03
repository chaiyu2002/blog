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

var precacheConfig = [["about/index.html","9979410566af8a4a87204eab528b3605"],["archives/2018/06/index.html","8b032d928466e36cea9bb24bd38432de"],["archives/2018/07/index.html","6d4887f825d97862c471f7f4a9911d5c"],["archives/2018/08/index.html","2f44cd1449463b2dc68cfab2dc5180d6"],["archives/2018/09/index.html","114130af8629a4865d75d3868aa156e3"],["archives/2018/10/index.html","f37700f3764442acdf2ac81047f27003"],["archives/2018/11/index.html","8e2ca5bd0eb244414354a7e78c6612de"],["archives/2018/12/index.html","8e197f65ad67480f264cb9e54c95bbbd"],["archives/2018/index.html","4bd2e5899955627ab885284a1880d4ff"],["archives/2018/page/2/index.html","8a64d44691260fcdb1a34249c2802b9d"],["archives/index.html","e475340d9f24c7c098e66f20f4257d77"],["archives/page/2/index.html","11dd4ded405bf26345e700e6b1803fbc"],["atom/index.html","2b5b5aea1125bec3fc42912004790082"],["blockchain/base64-base58.html","d4182b07e9e84e6e9dd661922d196dab"],["blockchain/bitcoin-data-storage.html","0128540e33ac6092eb4ab5ea19bb2846"],["blockchain/bitcoin-difficulty.html","09f1c7985bbed7f95b181a3f1d1ecb0b"],["blockchain/block-chain-ethereum-contract-program.html","1a8dcd37bd5f9b090c5f85288132854e"],["blockchain/ethereum-programming-introduction.html","ac8ee6d8eb15396de6cfdd68c70b57cc"],["blockchain/ethereum-rationale-introduction.html","7a2df4ef5cc1577ac5a6a6012ba127db"],["books/index.html","9734639654642fcadff1e9b71f5a777b"],["categories/Blockchain/index.html","9c1d0719176625d7966c29fefd2dc19a"],["categories/Blockchain/以太坊/index.html","a28ea357c25a5a3f963f70b355e2f380"],["categories/Blockchain/以太坊/智能合约/index.html","fceb1f617b41cbfb0caa6636957b9b1f"],["categories/CSS/index.html","aae79d86fe5c0ce96fba5f35ad51a295"],["categories/Git/index.html","e949008b01279ec9f001a7834e5821fb"],["categories/Java/index.html","e5f6923d20cc8d92679f4ee10b9a5ad1"],["categories/JavaScript/NPM/index.html","9b2040709ba18e5f58970a075549f742"],["categories/JavaScript/Vue/index.html","6ee958dca788a4f1c3c137418358048d"],["categories/JavaScript/index.html","13dea1100d7b238db72a9d96cfde589c"],["categories/Linux/Shell/index.html","e9df9c0a0488f287665d384496780e06"],["categories/Linux/Ubuntu/index.html","02fb4439e57d178201f02d5ce7270cfa"],["categories/Linux/index.html","5ed7eb26ac0456107211334ea73cfcdd"],["categories/MongoDB/index.html","449c4915059d188a3573297f96933ee5"],["categories/MySQL/index.html","4fbb7995907398485893b4fa17f77aaf"],["categories/Python/index.html","aa2968ffad6dd4e42c8fdf44dded4369"],["categories/index.html","7f07427a7fa5d763d3ffe43956a2d39b"],["categories/杂记/index.html","01968a56aa6617cf952a025802ff54fd"],["categories/程序人生/index.html","1c6ecdd68f9094b1498ad0e7625ac27f"],["categories/计划/index.html","61e6e4c70ffe87a3115b1d66654a873c"],["css/css-normal-flow.html","ab858d1c896c471acb02b98484742e83"],["css/css-sass-introduction.html","4198018936f9ffbca62e9ae00f89ff5a"],["css/main.css","7c3a4aada59570589e43a4c4617d1267"],["drafts/configure-multiple-vue-project-with-nginx.html","c7b3eed45899c2b950970df86a0f4e1d"],["drafts/iframe.html","bb0c48bea83ef5bb882ff37aa2fb8209"],["drafts/record-re-install-mac-os-10-12-6.html","27001f78f1aeb6f19a8a90bbc57270a3"],["essay/note-ximurong-tree.html","bf8a07044e9be7fdacf559b930a6a838"],["git/git-DETACHED-HEAD.html","a8f998efc0510fe2b155af8d538d845a"],["git/git-branch.html","1579bbea361c963e53a1ed5c45408a74"],["git/git-change-server-password.html","1f41fc5abf57d5520a69226bfc2eba10"],["git/git-checkout-1.html","5e5432626fb1fd3d57df7b07091cc3f8"],["git/git-checkout-2.html","de19074bada452f39d7ce063e3949b76"],["git/git-diff-m-symbol.html","8d89ac402accd82467fc079d40aee26f"],["git/git-git-flow.html","cba3de9e8a88a6545cd8f8f4918e350f"],["git/git-git-merge-ff-no-ff.html","e2d8f2ff891a0c330ad55a01905e3dd4"],["git/git-git-merge-true-merge.html","e3e78a8df264f4ff31ead034e489d0a0"],["git/git-merge-choose-one-side-code.html","afabbabf11f61fe3a11425790537f5b3"],["git/git-merge-exist-conflict.html","ac738e0fd899dba9ed6c9e0b8e6eeafb"],["git/git-pull-1.html","5dfb7633008e0120bb64425250f70306"],["git/git-reflog.html","90825ea52f8257728ffedbde5664dcb5"],["git/git-remote-set-url.html","1dddf2520c538d4c85a713313dbf331a"],["git/git-reset.html","4408c2cd3cdae3d1bc714d97223233d8"],["git/git-revert.html","1428eb2cb58b6ffa6e72d9108bafe0f1"],["git/git-tag.html","9d3939606abe3ee1d6c4c6075571a2d6"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","10d2611b36f5403b2cdc8a0e2f30bb55"],["java/java-deploy-resource-folder.html","5e08ebacbf57d35857ca2ce8118619eb"],["java/java-shiro-note-2.html","63eaa8d6fc531e34d16683d8a6b9881a"],["java/java-shiro-note.html","4633140b9ee12aeb45b49550c7fa00b3"],["java/java-springmvc-X-Frame-Options.html","f72bbaa46a58c860caf7d6311073db7e"],["js/js-logical-operator.html","f98111107f60f3a63b622a020cc6dd3e"],["js/js-npm-symbol-caret.html","7c9a627ecf9188911cdc09989d7125a8"],["js/js-npm-symbol-tilde.html","1cd0860388a9ad57fea2e96df0d394a6"],["js/js-this.html","c43e2aeb5bc9fc9cb22e75fb21b3a60e"],["js/js-vue-note-components.html","d04ac457725ea2f4092e79acfd9482fa"],["js/js-vue-note-computed.html","d5e297b7683acecb41cbba59a375d76b"],["js/js-vue-note-css-style-binding.html","a778d50ce80106043fe349fa69d12dff"],["js/js-vue-note-directive.html","c48b8ab816a3e1994e21f909cb45d5df"],["js/js-vue-note-instance.html","53f25be9707fde953c1d63019f8cebce"],["js/js-vue-note-introduction.html","e817003fe5f957785de02c07acd95625"],["js/js-vue-note-syntax.html","6e93e7b93d6dd7f1b69487cee0d712ac"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","19dcb1d4790c911ea4ae376f31e79a5b"],["linux/shell-command-df.html","98bf276fce8f6f01b719d19a23a0a914"],["linux/shell-command-du.html","c679c4bd790eb7308b5a430160964c28"],["linux/shell-command-netstat.html","5f5bd1d09fc0eba58455e992adcf4a1b"],["linux/shell-command-sed.html","0b834d05465d59a93f7f7f74995b838b"],["linux/shell-command-tar.html","742b35fe6e73f8d54ba4f3703f2f4ee7"],["linux/shell-command-top.html","c320c8e666c4d90acb0659bb04f96a04"],["linux/shell-command-touch.html","5d31ae6a5251d7b5489de18d5cfd776e"],["linux/shell-command-which.html","bfab6a1ae34773e3ad9c8b2afc25e59d"],["linux/ubuntu-user-add-delete.html","7a82540cb4b3fd0f3834c7cf0711a471"],["mongodb/mongodb-collection-aggregation-introduction.html","9e465c55bd9c1b917e0ec7f20aaec22e"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","0c2905a8ec500ffe7c6ba9ef01b659ba"],["mongodb/mongodb-collection-create.html","d1ec918d6dca40c8578568bfcb38b20c"],["mongodb/mongodb-collection-delete.html","fbfc42b33def86219aa3d203410850fd"],["mongodb/mongodb-collection-find-1.html","fcb383340ba3dd6a567edfdfbfa60671"],["mongodb/mongodb-collection-find-projection-operator.html","82d1dda8b9bbe9b2a5031491efa0f493"],["mongodb/mongodb-collection-insert-1.html","bb78a2dfe6579c9b8365cf7dba1de4c5"],["mongodb/mongodb-database-create.html","a3b014206b13f0bc56b219b8288907d5"],["mongodb/mongodb-schema-design-note.html","e449580175628335d8918c0655092271"],["mongodb/mongodb-study-note-1.html","e1e537010c65f17ff4b8a30c6af376eb"],["mongodb/mongodb-study-note-2.html","ffc239f4af6f19bb16b24e715bbb1e08"],["mongodb/mongodb-study-note-3.html","615845534c25f9b73497bc165e29e660"],["mysql/mysql-ddl-handy-book.html","6075adc5199be0780eb071d8ce9a964c"],["page/2/index.html","78cd9659534bf3c4b6b2c9a2d04e3294"],["page/3/index.html","36093616bf7ddf82c96a71f28983a7ee"],["page/4/index.html","4bbff226af76bdc27c99ef582ed84d90"],["photos/index.html","10604c5de0858d69ff4192dbc8b48524"],["python/upgrade-python-under-ubuntu1604.html","faf5d94b24f76e55f7940c74ebe43c88"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","cada9dda72b2838e4511669068cea1a3"],["slides/index.html","91df85171300eecc09d195eb78e10757"],["tags/Base48/index.html","605fc15bc9025d879c7f216430b938ab"],["tags/CSS/index.html","58c5c8bfd8c73158be2147a4db314504"],["tags/DETACHED-HEAD/index.html","833d44ae9cdac0cf06ac691e7d454a92"],["tags/Git-Flow/index.html","0f8543dcc693d0326ef65d7c928d74f4"],["tags/Git/index.html","28a4f48cc977f83c0ef6c35e814baaa3"],["tags/JS/index.html","2435fc97494ac24a78ec1ebc1a43bcb3"],["tags/Java/index.html","9d98cc9ff084bf42f445752918278712"],["tags/JavaScript/index.html","7e49bb6776740a5faaf65adbe12cb2ca"],["tags/Linux/index.html","c1ea8da6fec627fc1464d17204a55eec"],["tags/M/index.html","b98b0d3624e98f606a720198d6aa1d03"],["tags/MongoDB/index.html","0d404a0860b4285a6f4dac877ccb5dc5"],["tags/MySQL/index.html","a9cec9db3ce1400a19eb3500fc70c4cb"],["tags/NPM/index.html","173c84f3d62aa678cc6d2cd0700af9f8"],["tags/Python/index.html","2529983e0e5cfc05cb883e7110628edc"],["tags/Repository-not-found/index.html","4a7bd1a6bb18e6919c83b7d14a359ee1"],["tags/SASS/index.html","3cd5b6dff9247fe5509c23b6408afe40"],["tags/SprintMVC/index.html","b4b0a8f0e8f6db0f44c4ae43a9e86b75"],["tags/Style/index.html","2425ab324eb52b9de3c6fd19be2a7dfc"],["tags/Ubuntu16-04/index.html","60e78d206126db3063f3cd9d2ecc9508"],["tags/Vue/index.html","c563502fa74293f3a4641e02ca693db1"],["tags/X-Frame-Options/index.html","559ecb09fc05f8783c5b8d3a18941256"],["tags/aggregate/index.html","0ef3bd24a7d5fb46cbba79e4ede91514"],["tags/alter/index.html","d4d2240fc95b569af4c340e279552015"],["tags/change/index.html","b5b60adb68946b7d6b30c2c7732c4078"],["tags/checkout/index.html","94f7da1fb7c57b3dca68b2009648d7fc"],["tags/collection/index.html","d3256e72488d1c8acf8cb2a8c9c782cf"],["tags/component/index.html","c17a554e63cf240999d074b73e78ace4"],["tags/computed/index.html","3d6943eb0804e1945f2483bbd7993c4e"],["tags/create/index.html","69b49c3d90f0ad156235f261af465f8c"],["tags/database/index.html","85217ff357c652b7520b859bce64702a"],["tags/df/index.html","64495aca5e47920a450bc3a34b606d04"],["tags/diff/index.html","3f933e303efce5e9cd32f2ee2c067629"],["tags/du/index.html","b9f7de6cd3f45747cb582753ea70c2a4"],["tags/fast-forward/index.html","d3ff23332bf16f834114afd649175fcc"],["tags/ff/index.html","1654055e8d9dd0f57edec10aa33f4f36"],["tags/git-branch/index.html","37a143fb22056d41d3f980dd1bccb0ae"],["tags/git-merge/index.html","ea4fc3fed5a40c26dabce830146089cc"],["tags/git-pull/index.html","4eb41014aa5448789bddb6466685bb6f"],["tags/git-reflog/index.html","db3f76c1b5f4dfd65d55cbdaadb77aac"],["tags/git-reset/index.html","44b584623864409c9da0fe911da4955e"],["tags/git-revert/index.html","8f37e633a2617ab8b18950163f9ecfe5"],["tags/git-tag/index.html","7a504f49bb6011d8a9ef43e94cb41995"],["tags/index.html","6cdcc707bdd23b25dba088ded77bb64d"],["tags/modify/index.html","e5fc040b2813219c7c3fd95f6d7335f6"],["tags/no-ff/index.html","56c77ccdc6ad37f6e6a2758494e3d5ad"],["tags/schema/index.html","faee0a861e88fefdbc0cd559ce977b9a"],["tags/shell/index.html","8732ada2abb5f3b291650cad72af0191"],["tags/shiro/index.html","1440c26ebe58e32fa131b00f6496874f"],["tags/this/index.html","9c5e02767ecf70d0265d2f4d64433c77"],["tags/tomcat/index.html","544342b3174aede852b0c2e5bbeec01b"],["tags/true-merge/index.html","d5a0f8a07e48f10180e82c1eb509852c"],["tags/windows/index.html","af469bb4cdf15084623d9201aa287d5b"],["tags/一棵开花的树/index.html","7082222c00fae733e096b136d942f2aa"],["tags/介绍/index.html","eb6363b2fb2fddce5c814f2e380978aa"],["tags/以太坊/index.html","1f5523acea4e4ba3a78ebcdb1b17daa6"],["tags/依赖包/index.html","bea10ff84630f4d1a70dcdebeb358ce6"],["tags/修改/index.html","499437b720eb32b7cd716dd7e9ebd002"],["tags/冲突/index.html","a5f0e7342ac241b29240fbb4ce46ed6d"],["tags/分支/index.html","4ffd97bc4284b2440b98cda69ecffcbd"],["tags/创建/index.html","a2bdea1918c44b25dafbb5fd60e8cbda"],["tags/创建数据库/index.html","464002ed48cc50db799fcf1d454a96f5"],["tags/区块链/index.html","f67d8f80ba168e504c7a38fa0ce89ada"],["tags/升级/index.html","6c7a5b301ab2b8c2e8b63629bad9f0fb"],["tags/存在/index.html","c22f3f7bbc292453ec49aef423142053"],["tags/学习笔记/index.html","6673f3eb6a06585accb6028142cc75a9"],["tags/实例/index.html","bb5c191f67e5d6e1955f9c6c235f87e8"],["tags/工作流/index.html","0faf6ee5a745f503066de1d5e5ca9a9b"],["tags/席慕蓉/index.html","5319e0902600f9322e3dd049df247170"],["tags/插入/index.html","2e02eea8099c0b910ab2ff9068f7cda1"],["tags/数据存储/index.html","4a4ad2d2b921315e3d1c5b76bf05fc93"],["tags/数据库/index.html","7837cd9ac81b9c5d6a636c7319b5a88e"],["tags/数据集合/index.html","69db27b847a8e78a6d5afcceba76660f"],["tags/文档/index.html","44d7cb0db29ca6688bca581e158c2f44"],["tags/文档流/index.html","a072d58761653729724e78e0a109c371"],["tags/智能合约/index.html","88a9793c483420f0d32338682b2dfa55"],["tags/标签/index.html","1984900aabada6320df7ff5272885649"],["tags/模板语法/index.html","8b7e917d9b90c6e452151e9b19133db8"],["tags/比特币/index.html","3c115c1ffcbca51e87120f264935a289"],["tags/波浪字符/index.html","235a33d682d168ecaf48f56131ed27da"],["tags/用法/index.html","50e70fcdff8d03a66d95f8ed7dd07ffd"],["tags/笔记/index.html","5ce80fcac8ec3f450fe77faa8d72e8a7"],["tags/符号/index.html","5a924271521c80c29d5e66dbbe7765e3"],["tags/组件基础/index.html","14b85a0d37d29a554ca0130af253b91c"],["tags/绑定/index.html","254b318a1fe34496185dd6800a7aa18a"],["tags/编程/index.html","64bcac50cf981585d4665e34b247b776"],["tags/聚合/index.html","60128dd71d899a89d01398d6a9306e2a"],["tags/自定义指令/index.html","723603d99fbd94278ed29eb889834a67"],["tags/计算属性/index.html","8269a6d60837e0370320482a50dcd7a1"],["tags/远程仓库地址/index.html","b6790c82b5b2372a0d09f6a2b0bdeb2d"],["tags/逻辑操作符/index.html","d02f2edb50648672fe39e59d6678932d"],["tags/部署/index.html","f85a1356f00c3b0ebaeaf376ae91037d"],["tags/难度/index.html","097b2c0d7202d2202704478280d64304"],["tags/集合/index.html","96f0367d129d60af173a6797ff3abbff"],["tags/集成/index.html","809a9084a883f7986f39820a7fe020b3"],["thinking_in_programmer_life/full-stack-programmer.html","3d497ba8ff9c398f0095e589e578c652"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







