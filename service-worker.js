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

var precacheConfig = [["about/index.html","1174c95c4fcf103babd4c2d4b2d1f2a4"],["archives/2018/06/index.html","7168f7380c3f33aa100421106a810978"],["archives/2018/07/index.html","0fbf8cd60983e69831471ea6f5255663"],["archives/2018/08/index.html","cef18b052c6edd32dcbe6afe89acb8b4"],["archives/2018/09/index.html","733c3b36cde1d04321bd5f486840d940"],["archives/2018/10/index.html","4025dae3e81f58b10eb99b01c309d72b"],["archives/2018/index.html","14c6496787985d05bbe6995c5e1e2dac"],["archives/2018/page/2/index.html","3eab711906c24e4cc52400a1c839cc57"],["archives/index.html","6ae40651545d917c63a17ad8d43d10bb"],["archives/page/2/index.html","81fad0499433fb0451f999c0c6f92119"],["atom/index.html","561bdeb35112ece2122672c9f66671c1"],["blockchain/base64-base58.html","3cc6dda86ea528c2a8e9c008fe552149"],["blockchain/bitcoin-data-storage.html","b1b1451659339b2f6fcc2c0f7fb38348"],["blockchain/bitcoin-difficulty.html","b54790388a8a987e2efd2e3711175072"],["blockchain/block-chain-ethereum-contract-program.html","08fd08bc2b1208470fba90689ab9611d"],["blockchain/ethereum-programming-introduction.html","b6897e6e26539cf59d4c4fd79e5e66e8"],["blockchain/ethereum-rationale-introduction.html","74ab8e41885c6a006503afca4ef80956"],["books/index.html","0f01dcbda937aaaa824c57e51d209693"],["categories/Blockchain/index.html","42c9492d4dc96adeac3f04d64fe7b967"],["categories/Blockchain/以太坊/index.html","41f9b6e9140b8f8682885041619f5081"],["categories/Blockchain/以太坊/智能合约/index.html","4d5380d2e324e9a0027f34d379a870ba"],["categories/CSS/index.html","4dc192e882dc3bf5b73201ed3b4589c2"],["categories/Git/index.html","e22e568110acb67f586b06509ef57cbf"],["categories/Java/index.html","bd7923cb6e542fcab326e2780fb4ac50"],["categories/JavaScript/NPM/index.html","516e5c32741e83aa5d4dbcad0742a14e"],["categories/JavaScript/Vue/index.html","176e87b952fe23774d4299627191a3c9"],["categories/JavaScript/index.html","dfb77c72ab9f00a35bd37bcc8b9dc132"],["categories/Linux/Shell/index.html","3fb564c4094e0133352b8c9b115ae645"],["categories/Linux/Ubuntu/index.html","4abfcee28c3a22738531bbcd82e11675"],["categories/Linux/index.html","c48210080f27b84c201c881a02363f13"],["categories/MongoDB/index.html","e0e9adc2ed921e6e85121c9621a8dc77"],["categories/Python/index.html","ade4b8f77d55906ea64c416c49cf7419"],["categories/index.html","b00ab1291de1bdaafc9a41fffb31b65e"],["categories/程序人生/index.html","75a1bfcd8104d1199296bc53f3df91d8"],["categories/计划/index.html","3e4727d380de1d10d0620a83f16314cb"],["css/css-normal-flow.html","648b2889c73c3f85b7b1ae1a44f88dd2"],["css/main.css","1d3ed5bed72bee7b63e85b68b741a980"],["drafts/configure-multiple-vue-project-with-nginx.html","031f4e2881634c0023a46b3d0463a669"],["drafts/iframe.html","b91472363594631e5eeae01c3640aca2"],["drafts/record-re-install-mac-os-10-12-6.html","31480a70f81cb99e69fecf2d8dfd7b18"],["git/git-DETACHED-HEAD.html","0e525d9c620ea2f7ea77fadb71b63ab4"],["git/git-branch.html","56bcae01744810236b467544f0c519ed"],["git/git-change-server-password.html","33a5a98b75d4ebfbcdddb07fb2e1674f"],["git/git-checkout-1.html","a3d7e9c3f308418df5e66020683b65a3"],["git/git-checkout-2.html","1d1b936e8fcfa64df7ae5e8d0c71cef2"],["git/git-diff-m-symbol.html","f5c1632ba0734e8b336dcdae16099514"],["git/git-git-flow.html","85a510ceb5448e0d082d705ee83622cb"],["git/git-git-merge-ff-no-ff.html","f7f431f10ff6e22eb177e9737f933308"],["git/git-pull-1.html","c9b0427935058d749b87a996a720c1ee"],["git/git-reflog.html","c7f29eecc9536e7af7a441248536b2bd"],["git/git-remote-set-url.html","e7f41c7aa29f668dd54e0d494a5325a0"],["git/git-reset.html","49a00986a4ebb90059c49a617b102bd0"],["git/git-revert.html","f51882871cbdc3a696307c8cdd4fd80c"],["git/git-tag.html","f6879f135c569b57e147ea863a2452cc"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","21e93720dee9da05c2c67c43480cbb57"],["java/java-deploy-resource-folder.html","5430dd401b00e5a4eec67e9a54081b1a"],["java/java-shiro-note.html","265343fd6ef1f9144d3f0e4473f320f5"],["java/java-springmvc-X-Frame-Options.html","398c92e1f01d570d268ed6deb88e9f6d"],["js/js-logical-operator.html","9f5fc1b98a182d6a3e9494508e5f75e0"],["js/js-npm-symbol-caret.html","beb002a35442ebbbf2dcba8bd076daeb"],["js/js-npm-symbol-tilde.html","a17b488573b025e254814aebb3df9e23"],["js/js-this.html","afe1a60412bb1fd32b3ba860573349d4"],["js/js-vue-note-components.html","e4360cb34a27a57706a5a3bcaa0296eb"],["js/js-vue-note-computed.html","e40e2bd1ad47979be1dafa494af8a4df"],["js/js-vue-note-css-style-binding.html","60885dc5c831804efabc61bccf341816"],["js/js-vue-note-instance.html","afcdfc24bc3dd00dcf7deebb25b40473"],["js/js-vue-note-introduction.html","53d92790145afa2e4cda1e13c6e68005"],["js/js-vue-note-syntax.html","5ea0890c1c4daad91371c0344477116b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","b217afa186d46da63238e596d330e01f"],["linux/shell-command-df.html","b6a5e4e450d5ee08b953a9475af7c733"],["linux/shell-command-netstat.html","09658d28fdc7123592e3e9b020c3f690"],["linux/shell-command-sed.html","34e2b5dc9e3e9c800269b13e41f2ced5"],["linux/shell-command-tar.html","06ee1198e77cbb4cfc4bf3630ded06fc"],["linux/shell-command-top.html","8e7fa8954ba36ad437f1ffc8cfa5a2b7"],["linux/shell-command-touch.html","584567969bf21a269e0fffbf1fa5f9f4"],["linux/shell-command-which.html","4ff9187708bc169c897c4a4c0a11e85f"],["linux/ubuntu-user-add-delete.html","c6a62b8ef926431e52c3717e381e48f4"],["mongodb/mongodb-collection-aggregation-introduction.html","aff8e1cb392888864f9c8ade18f46f2b"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","7be40cf88170ccc1b5c0574bc24c2d4e"],["mongodb/mongodb-collection-create.html","30ea7d1ce6a4296218e5c02fb60c98aa"],["mongodb/mongodb-collection-delete.html","d15d89c4a4fafbc19fbb69093043fd66"],["mongodb/mongodb-collection-find-1.html","0b3c7352fa1604f814b4f6773ced0c64"],["mongodb/mongodb-collection-find-projection-operator.html","56019c40f25ed638b596b9d90d8e97b2"],["mongodb/mongodb-collection-insert-1.html","d97e077be16c40ff484a6be37d1b932b"],["mongodb/mongodb-database-create.html","2c436b2202156d0d71b0682c95950589"],["mongodb/mongodb-schema-design-note.html","a04d1455f21e8c08191cdd396ea64a53"],["mongodb/mongodb-study-note-1.html","af71f046871ebc04071899ed307f6a30"],["mongodb/mongodb-study-note-2.html","737fd0039dfadc77b13ed74c48603f2e"],["mongodb/mongodb-study-note-3.html","35887a2b6d41898a1d9de4889450c2a8"],["page/2/index.html","3cf464655d74fce132241ae3b0d86153"],["page/3/index.html","e21dfa813d59ed67e29a7c2928bec42a"],["photos/index.html","7afa40bb59ee359392e4cf5e0f9c7312"],["python/upgrade-python-under-ubuntu1604.html","cd854ec220892edf71717c76b7d9a112"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a572595ec68d12a8993de9fd8c064c51"],["slides/index.html","8fd3b8c30cf032edeea9bd0a06fe85df"],["tags/Base48/index.html","fbbb52d155302aea80506908aeea0bc1"],["tags/CSS/index.html","c9014547dc059b590ab6d36edbfeda1d"],["tags/DETACHED-HEAD/index.html","f1fa680c342ede635257d9066783ff26"],["tags/Git-Flow/index.html","2e7eb6340cf7c8d4d1471299f19dc746"],["tags/Git/index.html","b52d818686876673aaa2d4c7d9ff7add"],["tags/JS/index.html","2df330071304796c3820b7d7ba563677"],["tags/Java/index.html","458a1995083cd3c96c3aaa9d8a0438ee"],["tags/Javascript/index.html","9260ee393bcb6ae1973235b3e80bdd83"],["tags/Linux/index.html","29020e7332f5ac23718d040fb93cb087"],["tags/M/index.html","2d05467e627901dc0ac0f942a3360322"],["tags/MongoDB/index.html","4082b6e353829fe32d6742ca4ef64595"],["tags/NPM/index.html","42902fe1b7756b49c72a018ad6759079"],["tags/Python/index.html","7413cf995879ab9f94aabaafd9794ada"],["tags/Repository-not-found/index.html","0a371e11bd2182cd0a0b8646e2b21e51"],["tags/Style/index.html","57e104d1ea6939c3f85c56d91b67d523"],["tags/Ubuntu16-04/index.html","a52c900e7adfc7191f256c78691a4bbe"],["tags/Vue/index.html","dc0af896a38e6d8e98bf2ce50fe3243b"],["tags/X-Frame-Options/index.html","f393e526759b71e317a00420173017e9"],["tags/aggregate/index.html","4d91421cbf7270fdf942dd9605f171c6"],["tags/checkout/index.html","12f2b8cbc53271d7b6dc68b5f0eab7dd"],["tags/collection/index.html","37c999a856b4eb60d5f54ade18057510"],["tags/component/index.html","aa94243280358e086eb2496efc05e074"],["tags/computed/index.html","78f83c55a30ce112e4567c055d1831c6"],["tags/create/index.html","f2abd1684852dc0a9ec6b2fba022b42c"],["tags/database/index.html","21034634b8d0524eebd37e7bd9ded5f7"],["tags/df/index.html","cb95ec33eb1738fb32a47c807ee34044"],["tags/diff/index.html","a1a3bf09db1f5fde22a7ffd85ff560a2"],["tags/fast-forward/index.html","8e562c2a99f50fe0d63dc4bea8f91134"],["tags/ff/index.html","d9164d6c0d86c09db632075eb5dc077d"],["tags/git-branch/index.html","bd327a01d0e63577acb77159922558bc"],["tags/git-merge/index.html","7d7b5613ba63aaede6de26412a5d3e8d"],["tags/git-pull/index.html","78f3ce57b07195abbc7040da5ddae47e"],["tags/git-reflog/index.html","4629709a1ffde4249326b376b203b307"],["tags/git-reset/index.html","bba47194d38bfdd59a78e93543ab9262"],["tags/git-revert/index.html","66d692e42b458e8cc12503248f1b743d"],["tags/git-tag/index.html","4c0c72187842990113035842bd3b94c2"],["tags/index.html","06ec61fda278018a7558d29813888012"],["tags/no-ff/index.html","b824893d059b40d910a1a34165b73445"],["tags/schema/index.html","22b1ad0c6f1fbf751ab63ae41f8f1ff1"],["tags/shell/index.html","e81963c4c1ab55904c2fc9456e228c93"],["tags/shiro/index.html","578907d0f72c14173189ca9d8fd15279"],["tags/this/index.html","4237c60c6fd83bec63dfa1387509368e"],["tags/tomcat/index.html","1c4d8a8fd7157645e85c7b1734b8c097"],["tags/windows/index.html","00006718f4e2b02e45446ad3d931a838"],["tags/介绍/index.html","d4a6e609dafaff4b0c790303062888d4"],["tags/以太坊/index.html","28d76a4ebd1680d453f180d33260bee1"],["tags/依赖包/index.html","fda2668b00d6878218f93cdfd1eb798e"],["tags/修改/index.html","2bda2a4645385a727f11a13edd406da7"],["tags/分支/index.html","073e1744e445ec504fea0d02db49066c"],["tags/创建/index.html","92abd4ea1a8ddb9a55bbd5892f3b27f2"],["tags/创建数据库/index.html","3530cf4bcb19e1ba15e969b663bab7b2"],["tags/区块链/index.html","4704112c9faadb10489abccc3602de83"],["tags/升级/index.html","0549c6a76115719acf51850f57cc6c5b"],["tags/学习笔记/index.html","7f841e6cd954127084b74a9935d68011"],["tags/实例/index.html","013d6ab9d00bcc38eabd0901bdd1617e"],["tags/工作流/index.html","4efcb785eb87c2a309acd5fbabfe7b60"],["tags/插入/index.html","4f910b058bb4dd588a264bdbf06ed3d9"],["tags/数据存储/index.html","87c87c01b2126eb55fb1e9927db9ce8a"],["tags/数据库/index.html","82cae05bd9a63e4acb11dc11c8224aaa"],["tags/数据集合/index.html","86d29ed616dd8f473dd917e287e9c539"],["tags/文档/index.html","358eddf68ea5635fb77138c4ca08f8b2"],["tags/智能合约/index.html","58b525d371254b0ad906ddfc89b720b2"],["tags/标签/index.html","1ee6fdbff22afbfc0ad6c72f6efb38fc"],["tags/模板语法/index.html","9e7cf6bfa5b341bbe0534676f57b56aa"],["tags/比特币/index.html","fde73a37d151547453583ef091177a45"],["tags/波浪字符/index.html","e261f307123e0ceabef50fab24715718"],["tags/用法/index.html","fc45c95aa3bf6d553c151073959bed2b"],["tags/笔记/index.html","b40b1c3c934b9e2733c91fbb5d3e6ce4"],["tags/符号/index.html","89a8c38617cc49e1ea4a160cceffff7a"],["tags/组件基础/index.html","13059e526e3298eea85c74cbb72bb7b8"],["tags/绑定/index.html","a1d6e41ec34351bc0dbdd54916c2cd25"],["tags/编程/index.html","257ecbc0b8b772a68ee2553d27494675"],["tags/聚合/index.html","9ddd7b76b692b717cf72d676eaeca15e"],["tags/计算属性/index.html","e70358aa848a9c338704fc0047e75aec"],["tags/远程仓库地址/index.html","93bc413968452e8d8316077b8a964302"],["tags/逻辑操作符/index.html","ac4494bf3401cc235e5871060e0288d7"],["tags/部署/index.html","7d999f1efaf1d9ab05eef488360747c4"],["tags/难度/index.html","62deef94a7b48ef4771f7908f64f3bdf"],["tags/集合/index.html","403047912b4b2303657d24ec5c2a7793"],["thinking_in_programmer_life/full-stack-programmer.html","483dfe2aaa4a20326f2bdfcc679e3a94"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







