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

var precacheConfig = [["about/index.html","b2516364d386354f9475d40ec0db87b4"],["archives/2018/06/index.html","c8272852a9b2d9650d5e49a988ace1c0"],["archives/2018/07/index.html","9d54c914b70002493cd48f137a64e292"],["archives/2018/08/index.html","b08e3919e367bfbf40f3ec6280e79a29"],["archives/2018/09/index.html","6d4624afe7a8f434f21e19f4b14bdccc"],["archives/2018/10/index.html","8bfdfe1c1dfba7bdade55362c05dcd14"],["archives/2018/11/index.html","0cc8a41012734745c7ba0b652d3959e2"],["archives/2018/index.html","e30b311a9bfa20c34acf971584db7d57"],["archives/2018/page/2/index.html","086adf0d48a85ae12b464a1538ceb0f8"],["archives/index.html","b26b1847f51b4ed3e8ed9bb044181329"],["archives/page/2/index.html","6db68036ee5c0d2dd2c663bed16ad802"],["atom/index.html","87947e4bd437780b609379993f50a203"],["blockchain/base64-base58.html","53bc4bfb7d4b934c2d835eef731ba8a7"],["blockchain/bitcoin-data-storage.html","f3e529e3392476f183f4b3f4f383555c"],["blockchain/bitcoin-difficulty.html","fae1c47af69a6af96aa2375fb8e66730"],["blockchain/block-chain-ethereum-contract-program.html","88bc9893a7435b1bce0f1e3e376acc18"],["blockchain/ethereum-programming-introduction.html","6a9caa940a78099ae91dcc026c693edc"],["blockchain/ethereum-rationale-introduction.html","b92c70d116a6c4666f3c1fd174a44d23"],["books/index.html","295238a5846f0ab25561dbb40116a4e2"],["categories/Blockchain/index.html","73c94b0dcb680a0c5f08b390542f05c7"],["categories/Blockchain/以太坊/index.html","f791bd1d9777360b24e90a5938f2bf34"],["categories/Blockchain/以太坊/智能合约/index.html","612da1f0f5221c6c5142e930ed32b3a6"],["categories/CSS/index.html","6d9cdd94e5f858afac5aa228e5ab481c"],["categories/Git/index.html","fa9d0154aa3b62e05b59ab00d3d6b553"],["categories/Java/index.html","c1092a9fcb33e447fc2064310ddc039b"],["categories/JavaScript/NPM/index.html","60f624e9b15dd30409882581e4f418b3"],["categories/JavaScript/Vue/index.html","22630fd502cec11960fafda9f3dd2d2e"],["categories/JavaScript/index.html","3e281a1e5129a6f683a00afe11f5cfb6"],["categories/Linux/Shell/index.html","3827e341b088cd2313b7e4aa092f1edb"],["categories/Linux/Ubuntu/index.html","29194ef05d60fe0f98205b22292fed70"],["categories/Linux/index.html","bf7d50d10d50642fc40c570d1b5f86d2"],["categories/MongoDB/index.html","fc49c7183fef6b60baf398647058d475"],["categories/Python/index.html","04f60c48244e33f49cc506b6d87b5c89"],["categories/index.html","9f747035d8c866035d7fe96fb54b54cc"],["categories/程序人生/index.html","ca57120cbea1d7f96a0f11ec677fce55"],["categories/计划/index.html","0cefa0b988f2c2b6348b20bc20a05b41"],["css/css-normal-flow.html","f0cf80238d2096b20c67fb1ee3b5ee97"],["css/main.css","f50c65ad0aa18644ea18954f5782a325"],["drafts/configure-multiple-vue-project-with-nginx.html","af4f15eabb461723b6c6d5cf227ff743"],["drafts/iframe.html","2bfb358cf2cfece59970cad6c8788c0d"],["drafts/record-re-install-mac-os-10-12-6.html","d7a4dd19176ceb5f658be8129b0a2d0d"],["git/git-DETACHED-HEAD.html","18f7b7010fbb2b85d64d11dc85f62cd5"],["git/git-branch.html","16c935947f24587415f6f64dae667ea1"],["git/git-change-server-password.html","7252a40760b2c5a8ad99ce4ead6de19c"],["git/git-checkout-1.html","f70087732135a14c945065d831c0eebe"],["git/git-checkout-2.html","8cfda2a4d3786a1334b09a5a612e4810"],["git/git-diff-m-symbol.html","0f21ca4a5b30d93d9187df49f21d11eb"],["git/git-git-flow.html","7207fdf8a9b17a30f3ac64912b8ef62c"],["git/git-git-merge-ff-no-ff.html","81bcc5701f42deda9668f091f0e83695"],["git/git-git-merge-true-merge.html","15ce55dc27b574bbfab7ea5d1288850a"],["git/git-merge-choose-one-side-code.html","f652b82ba59282d9abc0f7c66a74734e"],["git/git-merge-exist-conflict.html","152991901b154876ec57f8df57a1c229"],["git/git-pull-1.html","3bc77adba5bab77a2035bdf604dbf8b2"],["git/git-reflog.html","21cfbff902dda721a488b2fe0f91db85"],["git/git-remote-set-url.html","5babd22fb8cb72ab3e94aa6940287d5d"],["git/git-reset.html","c124581f4dfdef525cb510c49af6205f"],["git/git-revert.html","c792921f42693aa45a18ffc8a9b57a3f"],["git/git-tag.html","591e8f38bdf459da949923d91ce6bde4"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","7dfcbce5d9b84ad66f02ea5a4d122576"],["java/java-deploy-resource-folder.html","1b914acfe340a99508c5d17ae4bf9a25"],["java/java-shiro-note-2.html","6c34db05f118b31e44ae6ef811407500"],["java/java-shiro-note.html","d1558e206bb56f9a64f426058d2b0e2b"],["java/java-springmvc-X-Frame-Options.html","019aec7e4bee086ab84c4b67efe3c041"],["js/js-logical-operator.html","d04520270d9f6c90c99bd65d5cd27048"],["js/js-npm-symbol-caret.html","befa22170af1bdfbfb68bffd5ab7296b"],["js/js-npm-symbol-tilde.html","76933f92bc3b95ac1d5aff83aa7d01bb"],["js/js-this.html","e3de40d3537e75197220a0c965924384"],["js/js-vue-note-components.html","312b4cf57b82bf4ea5630d72128bae77"],["js/js-vue-note-computed.html","c2ac17ffca0200225bd9a42458d062c6"],["js/js-vue-note-css-style-binding.html","9b8bf69b726387a5063640bb53481f53"],["js/js-vue-note-instance.html","c97979caba85689745616cb034a65479"],["js/js-vue-note-introduction.html","a54f6c8116b11964488a5e65b735edc8"],["js/js-vue-note-syntax.html","55997df958ee4c678fda61d462b1687c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","e1e54167b535825361ce447e7ea13b9e"],["linux/shell-command-df.html","8d095e152c32ab6599bf7871e61fbb0c"],["linux/shell-command-netstat.html","06c672293c1cbc8670c1d297a22055f5"],["linux/shell-command-sed.html","9d244df12cf79be51bd17344591166df"],["linux/shell-command-tar.html","53c8e42e611c18329d40583a2775665e"],["linux/shell-command-top.html","8301163df6ddac14509629bdbe0f78e1"],["linux/shell-command-touch.html","90051ff8e07385862ca3d8f4f75fc751"],["linux/shell-command-which.html","715e5255466093161e8745743c98b486"],["linux/ubuntu-user-add-delete.html","ac3d1368da2b18b61b16983aa416070d"],["mongodb/mongodb-collection-aggregation-introduction.html","346767f09f1dd48e7591de7b6fe10f72"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","67d4aced220f83247e6fdda43da171a2"],["mongodb/mongodb-collection-create.html","2549aabd3ec50d1f9f4f06a2b39c2c3b"],["mongodb/mongodb-collection-delete.html","dc4c7ec8cf7c67ebaa9f203fe811febc"],["mongodb/mongodb-collection-find-1.html","247b8c1d365e17ea81d782bec9d7cf31"],["mongodb/mongodb-collection-find-projection-operator.html","33a41e5987ade682961bc51e5cb05ef9"],["mongodb/mongodb-collection-insert-1.html","7ef394cda929da69836d577ab4f6b2eb"],["mongodb/mongodb-database-create.html","5f5395625e14d24fd4b111a4e33fbaf2"],["mongodb/mongodb-schema-design-note.html","6a6e31d8365112eedcf9c5e0eb70f7ff"],["mongodb/mongodb-study-note-1.html","3eb2e82a3e66f623e0648ff1420612a6"],["mongodb/mongodb-study-note-2.html","95746dbb3ea64f5b12ee5d1982767f20"],["mongodb/mongodb-study-note-3.html","393d51589d0050ceba30ca85779adbeb"],["page/2/index.html","fae3fc3baa195bf19771afa01a18be68"],["page/3/index.html","761e4be7e6fc85dd5583f5e4462e2f1d"],["page/4/index.html","ac6e8e41d5b22a9523abdd288b573b56"],["photos/index.html","dc58e97c889cbf7f1c78b8b63859424f"],["python/upgrade-python-under-ubuntu1604.html","b40ef1d310748c8a92caddbabbb6e195"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1dfd59048ce012b06402d6bf065d9fec"],["slides/index.html","ba5a9b7d9b28f4a8c1b0d7a242326a63"],["tags/Base48/index.html","64449e439afc0687c37aaf396f5b3370"],["tags/CSS/index.html","a012b3f9cf8708a3fbeb33830a3862e3"],["tags/DETACHED-HEAD/index.html","47103ae5d1e175d68a7b46b712eee2e3"],["tags/Git-Flow/index.html","eb4a437d8d213ee352a4c2c2d03df5ef"],["tags/Git/index.html","4d4f15b149f27f0d73891a4310e6a952"],["tags/JS/index.html","9377d3908e6e24d2ac4bef07b919f985"],["tags/Java/index.html","b386973db4f13fb5c5f10be3ddccb207"],["tags/JavaScript/index.html","5bfebdea83c964521b2061e1bd460247"],["tags/Linux/index.html","16c742c15f1f37443e3001e46d75d86b"],["tags/M/index.html","8a649c07fb74981b69782429065fa819"],["tags/MongoDB/index.html","2ebcb64411bf7b3d0ecf697df029b639"],["tags/NPM/index.html","692466c174b98cc600f7543430b52a1a"],["tags/Python/index.html","95a590adfdad5c161e4ddcc6e6e1591a"],["tags/Repository-not-found/index.html","2fbd230b75dabeb4780cd79e9f6c166b"],["tags/SprintMVC/index.html","c1ecb03c5f3fd5f59bebafd711386d86"],["tags/Style/index.html","33b6cf8b84e532c58d310e5d972398a0"],["tags/Ubuntu16-04/index.html","8053e9d9bfde7e34792753a9c278fc1b"],["tags/Vue/index.html","0e1d7fa42433e588148ad2261e491bae"],["tags/X-Frame-Options/index.html","7b57d37bf4182a0bcc44e932288347ab"],["tags/aggregate/index.html","9b3eb84712a94896a936e7177f9bfb9d"],["tags/checkout/index.html","6cf3db989c22d5109ed72774b83b5e56"],["tags/collection/index.html","6d943f21e2375e595b417255c4d3cfa6"],["tags/component/index.html","9b2798dd6dec594d10302b9bf7e7146c"],["tags/computed/index.html","3ac4114553333e4297350daa68d06a5e"],["tags/create/index.html","3753e9e24087881d06ae5f3ebdc7a14f"],["tags/database/index.html","9e0156512ea5d174e64f9dbd6de09f01"],["tags/df/index.html","7178311449d85fa6b74512d710215481"],["tags/diff/index.html","e66666e29cdfdf308ed59c97dd06d9ae"],["tags/fast-forward/index.html","0dbffd6ce486eb69e6e42345072f9d53"],["tags/ff/index.html","2e237b7d7f684d8b37cc0f48fa9e2859"],["tags/git-branch/index.html","f421005696ff192129b8525a5107d7b4"],["tags/git-merge/index.html","0708da3e43caa304cad974f00c54183f"],["tags/git-pull/index.html","7b448838ea72c9fd71f84d9c2639cc3d"],["tags/git-reflog/index.html","4ec8bb67b7e0b05f6905dd89e25a04d8"],["tags/git-reset/index.html","b81436ee085c464482c0b5f372db3d4d"],["tags/git-revert/index.html","6f31d88b41bc2c9ddbed9ac9d5a46d18"],["tags/git-tag/index.html","7ce4c902ecce95c8eff8a6a8c1780f4d"],["tags/index.html","a382bada6e0cfb8181e7a29cd9089a90"],["tags/no-ff/index.html","091934949e75c83e008ea4bf1c462cc9"],["tags/schema/index.html","7d2644626b1e9f8398855e119ed5184e"],["tags/shell/index.html","e3cb4c8a66fb776a1935ff83b6e59b04"],["tags/shiro/index.html","466a8a46d96651f02d1c6abf6e7bc91b"],["tags/this/index.html","88a3446fb182d21cfa91ef413433b264"],["tags/tomcat/index.html","827502376c066ad77f3159bb42227455"],["tags/true-merge/index.html","14780f245ca05f1dcfb1358386bc23fb"],["tags/windows/index.html","605a4a8934785cec298b181b5c549340"],["tags/介绍/index.html","a3487c38f8a9027859831b662f33f9d9"],["tags/以太坊/index.html","d109ced157fc7ef11b1b2d0aa1f38e9a"],["tags/依赖包/index.html","b28bb445d860f48833c204e7e3abf4f8"],["tags/修改/index.html","032867e208f2dc882cb56e85f43b04a6"],["tags/冲突/index.html","bf6bf2668e6626263f1e18f2de8e04d3"],["tags/分支/index.html","35bbf34b4055081aa1c8c0612c24a232"],["tags/创建/index.html","f1cbcb4ccf61bd3768c63c9859c8262e"],["tags/创建数据库/index.html","533b0f83bd43237aba012f6f3be7aada"],["tags/区块链/index.html","1c0f5f9cec1a7ec5fa2dbca0c2e83d75"],["tags/升级/index.html","4568bd5928f6bf218fdce686dfe974e2"],["tags/存在/index.html","e56466ed693dd33cd6e97bbfc855a5f9"],["tags/学习笔记/index.html","92be0857be43c312a35cc43752a196ea"],["tags/实例/index.html","1a006d84266c2d8ca51e7feeb2ac4c31"],["tags/工作流/index.html","2ad46735b4510e20116b6555e9b1438c"],["tags/插入/index.html","7209e3e0beb85cef408c12ca2f4b219f"],["tags/数据存储/index.html","dd1f85d5a29fb4bb824c2804925cf618"],["tags/数据库/index.html","a8d08810fc3851a04e86bd878c45e0a1"],["tags/数据集合/index.html","45d1f9aaf34d8bf53238ecc7f2c1809c"],["tags/文档/index.html","2d7d4ca30651291151cdd3826caa15a5"],["tags/智能合约/index.html","5922d36d4ec5c8be71b4708a6aafbb14"],["tags/标签/index.html","f78434f2d8620f48d1fff6267a7bf787"],["tags/模板语法/index.html","e1a461bd2d0e94d97c5a8077bc89fba0"],["tags/比特币/index.html","b4145efabc159be2fd02dd610c511ba0"],["tags/波浪字符/index.html","77036da0c0f644586f50628d2bfa32ba"],["tags/用法/index.html","9677d427415aff460524807c6650c8f7"],["tags/笔记/index.html","963d7b65ca227856c84b49183a394a12"],["tags/符号/index.html","b9e3d7ea0c286b65cc8562441af643f4"],["tags/组件基础/index.html","05b9b83b8e9faabbe675755057a3917f"],["tags/绑定/index.html","db7611d089eee29f7bc05c2f3a1eca19"],["tags/编程/index.html","be4b62cab4309781061101502a15b75f"],["tags/聚合/index.html","b61332f37dfca1ecfa2be3a5aabd0e84"],["tags/计算属性/index.html","1de0d8f782a53c073412a58f5302efc2"],["tags/远程仓库地址/index.html","9a6bf03c55afb8e58288f3441f610eab"],["tags/逻辑操作符/index.html","4f2acb9800a075a3dbb7d9b11ff043bd"],["tags/部署/index.html","fdfc0c2d4f9e02a82d28aba354fd37e0"],["tags/难度/index.html","eab79c5aaea16af94977e8542b0ae41e"],["tags/集合/index.html","ce3e8ae1fe9902e16366639d6bb3e7b0"],["tags/集成/index.html","0fcca97bbcc00c07a6dfbc489a1a091b"],["thinking_in_programmer_life/full-stack-programmer.html","4a5d9115b8d359f4e8213f23feb9b7ac"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







