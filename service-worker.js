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

var precacheConfig = [["about/index.html","d0b879a4c29d3ff15f275ef6ea432e76"],["archives/2018/06/index.html","41081eb64171be2f150de44570329992"],["archives/2018/07/index.html","89c15949f495b630f64bdb1705402912"],["archives/2018/08/index.html","d47f9f2f2460227b5ea1fee275f2d535"],["archives/2018/09/index.html","308a898eaf879a3c329be75a9e3a6622"],["archives/2018/10/index.html","12163fdfd6f08cd127be56b1338bca23"],["archives/2018/11/index.html","8d7f73d17f4222a63b902f0bfeb01bc1"],["archives/2018/index.html","784cf801b62af0ce075d5c71b62d9cd1"],["archives/2018/page/2/index.html","7627b3b7d97c3f575c9b6d9864e68678"],["archives/index.html","8b00eabee13bf54e384c71a1ad56eb9e"],["archives/page/2/index.html","8bf62ea7e2d6055bffd1f9c036aa2ab5"],["atom/index.html","55bf267ab368276e69758c758bd24c94"],["blockchain/base64-base58.html","4c858ed762cbdcc0dff773df3bbb6f79"],["blockchain/bitcoin-data-storage.html","34c96206325570b1da13265b9464934f"],["blockchain/bitcoin-difficulty.html","5c50e582aab73a2a08e99102fbc9b25f"],["blockchain/block-chain-ethereum-contract-program.html","219a8516d69f6dece327e7284f51bcb8"],["blockchain/ethereum-programming-introduction.html","e1b6af765be7778d4e5763316d4ecadf"],["blockchain/ethereum-rationale-introduction.html","c8d1eb05d64a62dab059e8ae269220e1"],["books/index.html","6d706ef6bfa118a2b50f06a75f70fa06"],["categories/Blockchain/index.html","ec2ab5c05d0b14d6de6f7bb540a5dbb8"],["categories/Blockchain/以太坊/index.html","f8a695fe9c566b93ec8241e9a52dcc1a"],["categories/Blockchain/以太坊/智能合约/index.html","8200a4913709c2082614c8f60a2c46d2"],["categories/CSS/index.html","f776113dd3819754d4f70addf202a59f"],["categories/Git/index.html","13d37ea02d1713aa91d7e37eb63a8233"],["categories/Java/index.html","6ea6a11b27a18ed7fbad1f9406789bf1"],["categories/JavaScript/NPM/index.html","08e542599c746fd548b4f2f3f8a0c72c"],["categories/JavaScript/Vue/index.html","06a8f218e14a162affc8471b81ff15c7"],["categories/JavaScript/index.html","773555f8d10843d1d446d120e3d4bbff"],["categories/Linux/Shell/index.html","a80acdddc38dbb3287954831e62cfbec"],["categories/Linux/Ubuntu/index.html","f3a8d1932297e473191fce73953f6635"],["categories/Linux/index.html","455e8b1898ca4bf81990486724e45e98"],["categories/MongoDB/index.html","45bc5012430c31905a541df61f4e55e8"],["categories/Python/index.html","1d06a39a6ca37b25e0101d76b07a0c79"],["categories/index.html","d0fa3294f5f63d05aa91af37e13674ea"],["categories/程序人生/index.html","07b08cd428ecee806c9e5d04031d4475"],["categories/计划/index.html","d7c20951e5439978cac67b7236eb266b"],["css/css-normal-flow.html","1959b7eafb9d12556b74b97758d67bc0"],["css/main.css","3007cedb6eac7a82d56c1c59a2e786d8"],["drafts/configure-multiple-vue-project-with-nginx.html","488a7fbdecd64d39c28e748f4b1b2e2b"],["drafts/iframe.html","9736bca0791f507ca99ed3e75a4f3d14"],["drafts/record-re-install-mac-os-10-12-6.html","12c6bf9cdab129f5595f1a395739278b"],["git/git-DETACHED-HEAD.html","b5f6b1b81deae4fe64d09a4012bb1341"],["git/git-branch.html","b8d1b74e8347a176f2f6a70ee6cb518e"],["git/git-change-server-password.html","6658b553ee56fe3ef39a58f0d1342228"],["git/git-checkout-1.html","54d9519b4577e0b7f94e09b556eda917"],["git/git-checkout-2.html","26a4589c8bd86f430d5a2c9cc31f6262"],["git/git-diff-m-symbol.html","60945c367120fc0793a574a63ee9e62e"],["git/git-git-flow.html","84a1b37363589254b5b56ca8d9c39ce4"],["git/git-git-merge-ff-no-ff.html","8322ca66a2dde27601bc85175e17d337"],["git/git-merge-exist-conflict.html","8c4ad53d7dc48e0df0c4038575b81093"],["git/git-pull-1.html","9ac20ee2246e25cf9d6fa11c7d333a81"],["git/git-reflog.html","7ad03e6df2fcf0af589ec1c031bf11aa"],["git/git-remote-set-url.html","7ceff24f238a8ace3005553cd89fd568"],["git/git-reset.html","d483758ec6541fa774637e61fc495a28"],["git/git-revert.html","5302b7fb8cff5bbbe1d3e83d1b18c7c9"],["git/git-tag.html","b345b16793ec7126f45564d0b3cc496b"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","aa3de17198582add13fe3249a8f4add7"],["java/java-deploy-resource-folder.html","a655d73bafa4c6944dea21cd8fd52b73"],["java/java-shiro-note.html","af58efc0967ee338e373c3e887a63a72"],["java/java-springmvc-X-Frame-Options.html","791c0ee00e5b49111d5874ba355b783e"],["js/js-logical-operator.html","28cf45e2132f5df5421c6225eeb95388"],["js/js-npm-symbol-caret.html","9de873f336fc2fe060760031c7dfdd93"],["js/js-npm-symbol-tilde.html","2ea3fc227d086f07988e109c85fe5e83"],["js/js-this.html","f277f0e0afabe4aa62e9579ed77c88ed"],["js/js-vue-note-components.html","1fda3a86d707392dbbe69ad1ef8c7f4f"],["js/js-vue-note-computed.html","370508003b94bf855deb28c66110b1a4"],["js/js-vue-note-css-style-binding.html","a480eff1bafa9d9e5b2718d61864e305"],["js/js-vue-note-instance.html","f815d3893def1fe4e504820ed3b3192e"],["js/js-vue-note-introduction.html","b18c8a119f85190e401912550dab9318"],["js/js-vue-note-syntax.html","4204034cfd8848037dc679bd2c18417d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","8017e7ca4dddc1b0f7f71ee9c847a9ff"],["linux/shell-command-df.html","9aad2f3f6dfac445cfe693488c0c9eb9"],["linux/shell-command-netstat.html","932a2f8189ef275783b09f6dbd175025"],["linux/shell-command-sed.html","bee9222310727ede6a6d06d115092423"],["linux/shell-command-tar.html","af5e26f673e4a85f32cbb3b9f70ecff7"],["linux/shell-command-top.html","db2445d2e80c9ad809cfaff132948889"],["linux/shell-command-touch.html","99755ddba1a420b51e630f54d3ce34c2"],["linux/shell-command-which.html","865561577df194715519d7f9b7daa548"],["linux/ubuntu-user-add-delete.html","948d1c5343d50a452d5347486eea3e28"],["mongodb/mongodb-collection-aggregation-introduction.html","dc1e1c62fea11135246fed43d0daf1e9"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f531ef846f9fbd6746fe8756c37441a7"],["mongodb/mongodb-collection-create.html","02d35c9ba223c79c3f8855226358d8da"],["mongodb/mongodb-collection-delete.html","edb2ed30e312337e610a94b679d7222d"],["mongodb/mongodb-collection-find-1.html","a45eb1c9f3d478fce8061737fb1391e9"],["mongodb/mongodb-collection-find-projection-operator.html","2a29cc0a4d779497e74346e1cbeafdc7"],["mongodb/mongodb-collection-insert-1.html","1f296213bf6a1af982984bef8c1f6f83"],["mongodb/mongodb-database-create.html","a0df2bb185632242a17a3dc12b0b5158"],["mongodb/mongodb-schema-design-note.html","b4705d828731e9e9b3e42a97fb8e3e78"],["mongodb/mongodb-study-note-1.html","3cc4728414807cfaa9023cee3fa7b8f6"],["mongodb/mongodb-study-note-2.html","55576f9cfd2337585e6c033087483511"],["mongodb/mongodb-study-note-3.html","d4b3cf8b5f89e41647371e698fc0bb0b"],["page/2/index.html","9e730af72008d0d2e17bfcdd6a083941"],["page/3/index.html","c53451c0ded613cca59ec3c6d13eff15"],["photos/index.html","eaee10eed147b1f2b18a070d168ed631"],["python/upgrade-python-under-ubuntu1604.html","146d0bfea2a2b67885f562c264715af6"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","0a739b7c67fac3763a397635ba6f7706"],["slides/index.html","e0446790faddff5cf2f1241e6ce1d9ee"],["tags/Base48/index.html","fff34f3d7105d3220b6adecade3e4a25"],["tags/CSS/index.html","fa36dc1d74069cc5c955b3f53053aaf1"],["tags/DETACHED-HEAD/index.html","75efb549368524a7c80c8a82d80aceeb"],["tags/Git-Flow/index.html","af7d7e1a423a83f72267996da1dc5f59"],["tags/Git/index.html","51fd2690394962fdf5baed67e26b8b95"],["tags/JS/index.html","eb80e886378d0d06aed5879c0f1bda79"],["tags/Java/index.html","10583850ec704f0db2b93769fae2f075"],["tags/JavaScript/index.html","4f4e0555caf18131927517f3d5d86e60"],["tags/Linux/index.html","346b351fc968ecf28c755e3f4562dcac"],["tags/M/index.html","a2d2fe184798439d00739b5ad2b41e80"],["tags/MongoDB/index.html","c8b03a24f14bd7a23bdf2372a435bf11"],["tags/NPM/index.html","4eda18b0d2324fadfa87f1fcdd54b66d"],["tags/Python/index.html","dcdd514ca5d6de6ba2c83d442d2c1c1c"],["tags/Repository-not-found/index.html","99c18fba30f2d2964b9b808b9f174bc3"],["tags/Style/index.html","6f76524da1a0e61a142c75db9a4fae2e"],["tags/Ubuntu16-04/index.html","1146139be0c1bc96cd55fb55ef8d8ab6"],["tags/Vue/index.html","959110d6a82e19a4610a89c1f272bbc7"],["tags/X-Frame-Options/index.html","ace622b8de384539856c1cf9062aab78"],["tags/aggregate/index.html","70f27b34d6e57d0ae55ceceb3ebb7c0e"],["tags/checkout/index.html","040cd13d91df83e84542845f87b51ee6"],["tags/collection/index.html","666c2a8432a6d8816c07f8535551e48b"],["tags/component/index.html","c77f726c0d15a9ef81c8357a91f8e897"],["tags/computed/index.html","2f796b54b6bbbd1c73c2ae56f947e716"],["tags/create/index.html","80accc6f5f8afa887ba49b452bb6869e"],["tags/database/index.html","643e0aeb0e8aa15c7bdb7cda91e0b2ff"],["tags/df/index.html","222bf75228b5f18f3a148a17d9c09132"],["tags/diff/index.html","3e55df7976157a81b4978aa8bd5b99d9"],["tags/fast-forward/index.html","8a4566773d185e1c6eb8e51904252251"],["tags/ff/index.html","2528f8ddc43bced70ce52b88551a425d"],["tags/git-branch/index.html","792a96f564f69dd45aa20c981a4204c7"],["tags/git-merge/index.html","c0fcbea2b5d4f3e51cb584fde4e7d022"],["tags/git-pull/index.html","fdf63deebf2fe2631a33a9977913cfe0"],["tags/git-reflog/index.html","0e6ed62d7fa3c8887518290417d73665"],["tags/git-reset/index.html","008808306899aaa54a3ff54478ecac30"],["tags/git-revert/index.html","d98b87a69cc2c40916c5ca6ac254a666"],["tags/git-tag/index.html","93684f73e0e08eb9d9d345687ceff8e5"],["tags/index.html","820b12485885aefe693930a4dcf2a1ba"],["tags/no-ff/index.html","f279bdef36b81f84749c10cbd2f08cf1"],["tags/schema/index.html","22d84c54c7e1bf58aaba5fd0b3e6c7dc"],["tags/shell/index.html","25870c0860726e987940486af032f8ec"],["tags/shiro/index.html","f556316eb7ab68f0ae671735301cfc94"],["tags/this/index.html","599f3470a8cfb37aef9366ff64783712"],["tags/tomcat/index.html","b2065cbd0a223f60606892b7ef9f7e1b"],["tags/windows/index.html","288750773f3c1466d220450fc71a8744"],["tags/介绍/index.html","272d0e496211b73a7bd6630fb0826625"],["tags/以太坊/index.html","0984273e16d76110497f85a134b73839"],["tags/依赖包/index.html","8c93400ee2395a58675e825db1c90f4d"],["tags/修改/index.html","b5c91f111decc15e0d1dee559edcdbf4"],["tags/分支/index.html","ebb9082dee817e88220bc1c8f6d74e46"],["tags/创建/index.html","fd9edd800bd8c5e5b061561a6ae5c2d2"],["tags/创建数据库/index.html","40f52f45489f898255b37d677f055c9d"],["tags/区块链/index.html","4c6fb8a10a5e47996deb1ebd2df57646"],["tags/升级/index.html","4dc43b18866b211f33496015efb300ad"],["tags/学习笔记/index.html","0cdf9ee384edb37c6e07d1142d858225"],["tags/实例/index.html","5a856558bbbd0f48a7157e1dfdb6f832"],["tags/工作流/index.html","933f123f35619af5226b184b0ff246f6"],["tags/插入/index.html","ca8c9d55470e0a0aa4598ebfac6b6087"],["tags/数据存储/index.html","9435db6a733227e4b0be8376d13fb839"],["tags/数据库/index.html","d5eab36f69846e3ac2ee9b9b5ce9fc05"],["tags/数据集合/index.html","81640f48bfbfddfdf1f48cf1a0b9425d"],["tags/文档/index.html","23423fe353cbb7c082b8f0577ff742d4"],["tags/智能合约/index.html","1f395373f76df8fcb1b2dcee6c58a357"],["tags/标签/index.html","e57a1849c1cebf7610bcb3c4c0166bcf"],["tags/模板语法/index.html","33355ee742d90f436bda501d4ad72793"],["tags/比特币/index.html","404bdbafb772c982a17e144f2067bb9d"],["tags/波浪字符/index.html","3f53f29b16082ae8bccb5661f0a75f5b"],["tags/用法/index.html","e4860fdeb1ad0c011f13ce67218b3b76"],["tags/笔记/index.html","cbb83c940b978f38496fc79e545d9afd"],["tags/符号/index.html","4b0206129094335aa03493ad9dea139d"],["tags/组件基础/index.html","03fcef28f979f98d6e81598b1d536c91"],["tags/绑定/index.html","f4ee75f8b660769caaff1c4204d99bb2"],["tags/编程/index.html","e9267e85491f932c91f04c340ea91f16"],["tags/聚合/index.html","e947ccdb5615ff8ba6d5be7b1960f432"],["tags/计算属性/index.html","e25f46421569816c16f25347338bc3ec"],["tags/远程仓库地址/index.html","05802d7d9203be48469fee10ec945b3b"],["tags/逻辑操作符/index.html","16ad3a05f980891748c24e3cf8e31acd"],["tags/部署/index.html","06db0acd1e4fe8bd0a7a55506dd241f0"],["tags/难度/index.html","c9faa504cc693a57f02afe05ba2a5dd6"],["tags/集合/index.html","f983db3fdc75115ae83e55c1362e6ab7"],["thinking_in_programmer_life/full-stack-programmer.html","5d1172c0980201e3564435f24e902c89"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







