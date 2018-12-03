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

var precacheConfig = [["about/index.html","014fd6e1d62f4a2443d51fc4df3e97bc"],["archives/2018/06/index.html","bed2b9000370bb6bedcabec9db910a23"],["archives/2018/07/index.html","cd6dc066544502ecfbda6342c56d2c56"],["archives/2018/08/index.html","3feac74be46b21ea76d1f7d67780f7a5"],["archives/2018/09/index.html","c645609044cdf1473d110e8018065f35"],["archives/2018/10/index.html","864aeedf93f53c660f0344e0f61f4ae9"],["archives/2018/11/index.html","150b61874dc892e170aab30ec2b3bc2a"],["archives/2018/12/index.html","4f7bb38e8595eb23427d966e6c9ad35f"],["archives/2018/index.html","2c01f382fb693fd1c41600ba5d759522"],["archives/2018/page/2/index.html","47c819ad101ed4be421ba9f2e38cf5c6"],["archives/index.html","3a1510e8302520a3bcf0e84b56b169cd"],["archives/page/2/index.html","a238fa0f47c84487e675a7971bda7e23"],["atom/index.html","5a2480023d8f40287fd514408577f25c"],["blockchain/base64-base58.html","0bad51abb2ed142962396f50b1944bfd"],["blockchain/bitcoin-data-storage.html","d34c22b85e2ea272c403d3f192f4c62f"],["blockchain/bitcoin-difficulty.html","c1969f246a348e287d817a4bbfb872bf"],["blockchain/block-chain-ethereum-contract-program.html","fe3d0f597f96404d6634089662871b5b"],["blockchain/ethereum-programming-introduction.html","a861611167a0de1a424c4ab06a85dee2"],["blockchain/ethereum-rationale-introduction.html","75663ae4b9de7d92e5a7c9a47f5c23e7"],["books/index.html","27d006bea2f673ded534c89e1fd88296"],["categories/Blockchain/index.html","a5afce5d6290dd6d4f784e6904cef892"],["categories/Blockchain/以太坊/index.html","8659fccc0b77839a98ac23a64009cf19"],["categories/Blockchain/以太坊/智能合约/index.html","fb8f3a08434c8b8cf69514311fc1c909"],["categories/CSS/index.html","4b7837d903fae65e062ae7a31d1a4b72"],["categories/Git/index.html","bdeed1a4ce729ece3cdd750c2b321e61"],["categories/Java/index.html","26accb9b424f2ce703521b988e03608d"],["categories/JavaScript/NPM/index.html","73e96f18f0cc9e5315e6f1e6f7a886bc"],["categories/JavaScript/Vue/index.html","8149b6781544813b941c980cb249a666"],["categories/JavaScript/index.html","7f9d0b35fb7c5e9184ba027a1f937f09"],["categories/Linux/Shell/index.html","da539e2ce4e53d5baec758349d6dc84f"],["categories/Linux/Ubuntu/index.html","c30f75ef2e9392395352f5363717b044"],["categories/Linux/index.html","941cd3fdaefbe39a159ea40fb3cc41d2"],["categories/MongoDB/index.html","7b2f3ac08293815e023c2565eb6ce5a4"],["categories/MySQL/index.html","64204818d58ecd70238a31535d2f5818"],["categories/Python/index.html","7e6ef4adef3ea48e4b214951d230476e"],["categories/index.html","a0160fdb05af54859d4fe787574b6e49"],["categories/杂记/index.html","77ad8d966fd0300cd3052c6e6067e0d0"],["categories/程序人生/index.html","103b4ee8a29510870ed79021a536e492"],["categories/计划/index.html","bf1a108e4df537d4e4f1323ffb03869f"],["css/css-normal-flow.html","8e6b3ff284f842dc9614fc0dfe694316"],["css/css-sass-introduction.html","27e2f3ed40553c92d9686d1f414654b6"],["css/main.css","d607a6b756b0c54d2dfd5d52eada1a60"],["drafts/configure-multiple-vue-project-with-nginx.html","461fff1a788d3b390c1aed2c8e8fe573"],["drafts/iframe.html","b75b9c737da8e3db3642759a76c335d7"],["drafts/record-re-install-mac-os-10-12-6.html","d64eb3766ff874c893d1f352e8a245bf"],["essay/note-ximurong-tree.html","f38ce91232455bb87cf866a3c6816011"],["git/git-DETACHED-HEAD.html","b64df81d657d935afdbe310b567eb87c"],["git/git-branch.html","ea2d6030ca077323bc56ee41426e2797"],["git/git-change-server-password.html","2145fe14666770064528711c47db232d"],["git/git-checkout-1.html","0a3322e07498a0483d752b12e88ae829"],["git/git-checkout-2.html","70b8244bd77806da2abfa0c0d48be78d"],["git/git-diff-m-symbol.html","bf3fdd33a6e77e51a95358d2031128ad"],["git/git-git-flow.html","8d14ca79dee538917bbc9f6eaf9eb140"],["git/git-git-merge-ff-no-ff.html","dff0b7f5500f49557774cd4d2406aaa4"],["git/git-git-merge-true-merge.html","ad99f0fd239e1fe59a46ef391c0de88d"],["git/git-merge-choose-one-side-code.html","8268830139df8b242467a07dc5f94354"],["git/git-merge-exist-conflict.html","820f2d7a0e56fde4b306ce170b3fa68f"],["git/git-pull-1.html","6e3888dc3d0e488a32c45b4a3507b0bc"],["git/git-reflog.html","611b6df5857f3212e36820bcabc70b9d"],["git/git-remote-set-url.html","1fd467338d554c300469e16007ffcf0c"],["git/git-reset.html","26de3c176bfa55d0f19f8f47c4b4ae48"],["git/git-revert.html","0952d3e797518aa412b4123d4f62f822"],["git/git-tag.html","4bcd446b2c2c16993e0da52961634261"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","683944fab6affa055493a5beef1cc7b5"],["java/java-deploy-resource-folder.html","2616d76c683bb594c0019067f09b478b"],["java/java-shiro-note-2.html","1eea668c3d36aeca80d883656a4356fe"],["java/java-shiro-note.html","855c1c457f20940a12324a5b53484805"],["java/java-springmvc-X-Frame-Options.html","77bdb54f8042ccdfa06c35b8af922280"],["java/url-rewrite.html","0e94eda755793da9ac65cded0469b1a0"],["js/js-logical-operator.html","85df7023c5a7bef42fc94a7dfcabab72"],["js/js-npm-symbol-caret.html","c1e1e94df22f4282fb35aa1d658a20ec"],["js/js-npm-symbol-tilde.html","90f171177f470dee1d5135e20f3c74ee"],["js/js-this.html","70c4b213d92803191922bded0e787768"],["js/js-vue-note-components.html","2021fbe7f27d4ad6349c8748747c810e"],["js/js-vue-note-computed.html","c22a7ac36ce13473b900964f017e8465"],["js/js-vue-note-css-style-binding.html","fe1b041383354d1bc32e43167d99b3ba"],["js/js-vue-note-directive.html","602801affab676a6afbee8efef3cff67"],["js/js-vue-note-instance.html","187da3b505fae3a13552c054342e8758"],["js/js-vue-note-introduction.html","bea98603774dd5165bf08ecf5ee5d918"],["js/js-vue-note-syntax.html","a370f31079096574480da3089c7cc1ff"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","7f2cbfc7613380f6e9deb077e53c7445"],["linux/shell-command-df.html","8bea90cc3e2295e1e4a7d1dc19daaf44"],["linux/shell-command-du.html","6e2f0dc926c1f8c5175c05e2d26f6e04"],["linux/shell-command-netstat.html","fcc283ddc8767ff416ae8cf8892caf46"],["linux/shell-command-sed.html","7badbd1640cb2ddfcd3a6d5897078a48"],["linux/shell-command-tar.html","be6fe3406547c838b2d995b2eb191576"],["linux/shell-command-top.html","83170d3185fa9e4f3acb9f39d86c944c"],["linux/shell-command-touch.html","5e3379f610ffd24cfb9985f4230bab31"],["linux/shell-command-which.html","01e547f9a376eb8f11bee1fb366aa718"],["linux/ubuntu-user-add-delete.html","3ec7f982d4a674b9c05ef974d2053c76"],["mongodb/mongodb-collection-aggregation-introduction.html","757e536b2ac1f5b62a9c8fa83d354d4d"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","5315bfc33a5d92a623b418d413da31eb"],["mongodb/mongodb-collection-create.html","98f6a3df11aa2cbb478a40e7c902d42d"],["mongodb/mongodb-collection-delete.html","3a3a207dacab6e79ece6eda91defdc42"],["mongodb/mongodb-collection-find-1.html","b962af5972d5881bd6b26847fc61e54f"],["mongodb/mongodb-collection-find-projection-operator.html","406db346f1ef7eb244b4bd1f6614dd4a"],["mongodb/mongodb-collection-insert-1.html","a1671382b56cac693d8483dc7433e57a"],["mongodb/mongodb-database-create.html","53d3a53d313d084422360deb13f3c094"],["mongodb/mongodb-schema-design-note.html","885247670fcbf74c0619473e9629ecff"],["mongodb/mongodb-study-note-1.html","1274af72d00789f9f6f3e17df0ce741e"],["mongodb/mongodb-study-note-2.html","a8285308450ba232734dd677528cd428"],["mongodb/mongodb-study-note-3.html","cb6654b077f755273ee7b8697469ce76"],["mysql/mysql-ddl-handy-book.html","075f2a72dbd65bd5ebce451c0c67e6f5"],["page/2/index.html","8120b471b9df6e2449f2f44739883228"],["page/3/index.html","c1ffbfba40129b28956e97e0f3140070"],["page/4/index.html","7b64e1ad634ae0cf0dd1c99c7c307b31"],["photos/index.html","a3798a417c3e78fbf45b583c3b3e495b"],["python/upgrade-python-under-ubuntu1604.html","b8be30fa128ab6133b009bdd4e91a9b8"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","e51d057492e11bf606154029b7cd0114"],["slides/index.html","4005ac70be24d3ad9d3f1b044ffccbd3"],["tags/Base48/index.html","d1bcb4abbcbfd3742a74ce4844ea760c"],["tags/CSS/index.html","9fdd9e5bea8eff52b28513ac42d05ad3"],["tags/DETACHED-HEAD/index.html","f3ea1a40c4046a74b9eb978a9a328d87"],["tags/Git-Flow/index.html","48cc798b760570e27a2b1af5e6a6c924"],["tags/Git/index.html","22b877c80a2943a04593fb9424c19e86"],["tags/JS/index.html","164f6fe5c7199dfd34b484c4b955a930"],["tags/Java/index.html","31da3d8e8eeca46b0bd754879a41b15d"],["tags/Javascript/index.html","b90037be707ac1eabede303c88adac2d"],["tags/Linux/index.html","0019a62d4ec1827ec6fde88f6b796fcd"],["tags/M/index.html","da53de8b2c9be8ba2ce3b54e1c3d7f48"],["tags/MongoDB/index.html","7dae58d4e23ab157577f9e1476f5b165"],["tags/MySQL/index.html","368f308626968349d775c9bc08491f8b"],["tags/NPM/index.html","a5c9acfb7aa7fedff688919dafda7c84"],["tags/Python/index.html","484e72d34e96b6a9e4543ef0193fba51"],["tags/Repository-not-found/index.html","9da317cff5bfdc48be9958f632dd73dd"],["tags/SASS/index.html","2d22d87aebc98ba70ca9af5600db5a71"],["tags/SprintMVC/index.html","fdf05c4ee11985712158b57fb2ab8e1a"],["tags/Style/index.html","7fd5c12d3377209369d82a8298a51b85"],["tags/Ubuntu16-04/index.html","5bdbaa5b78505e7095809a0531cc4c5b"],["tags/Vue/index.html","636d1fbdacb6562e13eb7ffd04130abe"],["tags/X-Frame-Options/index.html","e952994360619a5b13352f76412b40ea"],["tags/aggregate/index.html","f82a8ef896417c89e05e241b481708fc"],["tags/alter/index.html","0f9a39eb4bcbf2bf3b8419b20377ca01"],["tags/change/index.html","1396d9d74b0845becd03b957c7309b87"],["tags/checkout/index.html","29ebaf9f30be2046f3dceff917f3f59d"],["tags/collection/index.html","857c0879abc95b5692a11e459d334d0d"],["tags/component/index.html","1dd49a3c091ba92fe7dd53d57de6e72b"],["tags/computed/index.html","d2fda0d1d470c3d8e3de91e1d3bd1086"],["tags/create/index.html","2e450e41e57bbd1e6f3370dec62881a1"],["tags/database/index.html","e618f2b8f4287fa62a47ce796ab62ddd"],["tags/df/index.html","0ad8918a34d79a9313e4ca56d64b093f"],["tags/diff/index.html","dc97f8dd5f01a6dbdf0d3a682793402d"],["tags/du/index.html","c479f1b38127ba5eb200a31921b74210"],["tags/fast-forward/index.html","33a8a703c7bbd15f65bcce734b547b7a"],["tags/ff/index.html","6133947a28e40db6e47d9b891fc07192"],["tags/git-branch/index.html","c176812f317a8e6bb9f5ea0996680eb7"],["tags/git-merge/index.html","075cdf1c137837372cfc9001f184b28d"],["tags/git-pull/index.html","570de110e9b81a79985fb2dc18fc79d4"],["tags/git-reflog/index.html","40e7d6f63dbb5e07f77303b497fb17d5"],["tags/git-reset/index.html","cb36e87eec8e7f08b3e6118c583ffa02"],["tags/git-revert/index.html","3e712e7aba56cc7d2e91c5eccaeb5067"],["tags/git-tag/index.html","7b79a00537ac75d1fdc792989851be31"],["tags/index.html","a590a8274cc96ff24b7df4c41d05e18f"],["tags/modify/index.html","adb5ee744cc72c950811bfed527baa5e"],["tags/no-ff/index.html","041a6a531e054e7bf81bdfc15e4546cd"],["tags/rewrite/index.html","0b6077091af2fce1b76764576fb9dac9"],["tags/schema/index.html","740f3bace118216f3b500b53d94ed7b4"],["tags/shell/index.html","249d702ed090463535820fed4f701342"],["tags/shiro/index.html","d21b64a17c7f99c097abdc95ba4379e6"],["tags/this/index.html","59cfc3708a40392acdc5eb7939e8b5dd"],["tags/tomcat/index.html","bfc8469860f1efe5ca0374e1e2aff06d"],["tags/true-merge/index.html","abed5a9d9306aaa64300ae11c08e4b92"],["tags/url/index.html","b230826f7a15733f5250aea3932dc6ac"],["tags/windows/index.html","a15872d1de3da22da14651910885803b"],["tags/一棵开花的树/index.html","9814f9dc1075d0ba7d3dc620cbf3937f"],["tags/介绍/index.html","2f4e042755a8600ba1abb8140dbe0311"],["tags/以太坊/index.html","cbce10257f8663525f03a8b864273b48"],["tags/依赖包/index.html","929d163415082ec09dfa84025f74ed0c"],["tags/修改/index.html","d0d6fb20eb58f6157cc0b2efab18df7d"],["tags/冲突/index.html","2eb4c4ad94f1a4fc3b45d912b6a3b50e"],["tags/分支/index.html","75f0d1a7d7e34bd0d55502c60dda15d6"],["tags/创建/index.html","afba6d3fefeba2d7266704999077abcd"],["tags/创建数据库/index.html","9a5bc502b895920a69cc7694ba0dbde6"],["tags/区块链/index.html","690163c79c42b356b90166524afeac83"],["tags/升级/index.html","9d1898c67cf33f0127b2799937473657"],["tags/存在/index.html","56be024b77e66b6c0bd18b7c8e4979d9"],["tags/学习笔记/index.html","018ce217a655739a5e6b8ea2efd16973"],["tags/实例/index.html","7addf0467763fe4fc28f00839c5eb54c"],["tags/工作流/index.html","919ce6138f54777d7eac6c8173ece715"],["tags/席慕蓉/index.html","4e84303eadda2dd3ad4c176fc8a23bd9"],["tags/插入/index.html","7e1d89308495d8b448f78124bd36b298"],["tags/数据存储/index.html","cdd6b21f330ae2318da943feaefb717f"],["tags/数据库/index.html","850c245cbb596e726480db70f6df553a"],["tags/数据集合/index.html","d87f65c25812c5de0ab76714d52d904a"],["tags/文档/index.html","b2cee1a7e81c1af89b1c8536e4ddcd24"],["tags/文档流/index.html","38927df480b265ac89e25e20e35a8237"],["tags/智能合约/index.html","3ab83ba3969865cb9c5fef1f2624c134"],["tags/标签/index.html","861f8daa0aa7fdd4187c084e4aa50541"],["tags/模板语法/index.html","475963c743cc901438570640cc8445ee"],["tags/比特币/index.html","aa6c2f8bffaa5e3058d83d62e0fd754f"],["tags/波浪字符/index.html","2a0c08cf2808d442f1b8d49165b26357"],["tags/用法/index.html","5c5fb03064a3af8ee30d7906693c6d7c"],["tags/笔记/index.html","3cbf7b62eaaaf6f9c2903d1d22af071e"],["tags/符号/index.html","7f994872becd9de88065973d82b5db77"],["tags/组件基础/index.html","41cbaf51f0408a9d91e9c6d50b618a76"],["tags/绑定/index.html","78177a9a4e4ea83183477c414e494612"],["tags/编程/index.html","0d5f644c97d4d36b15968820ea7d2237"],["tags/聚合/index.html","7e8e9670b9000b7e06b80888cd4e5f6c"],["tags/自定义指令/index.html","c7722cce93c187bcaae771c47d688cdd"],["tags/计算属性/index.html","81c3c33912ad295d811202d0012ff906"],["tags/远程仓库地址/index.html","f9ac67c20e2bac0f1683f1745354344c"],["tags/逻辑操作符/index.html","c60c65403e05f79bb6309911fc7e19cf"],["tags/部署/index.html","b1e7d1988e3b561651b071b7d986dc24"],["tags/难度/index.html","817ba49edf73cfbb465cb436ececd551"],["tags/集合/index.html","6a2f1814f56740cf2244db81dda2111f"],["tags/集成/index.html","03d95292a977b65de1897656a8a6225d"],["thinking_in_programmer_life/full-stack-programmer.html","d7020947d44cd6cb1cb20ca1490c344c"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







