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

var precacheConfig = [["about/index.html","e9d64abdd12d90d9ff9280c4809986ab"],["archives/2018/06/index.html","4adf7130dd21dbf0824f1fbf77c61be5"],["archives/2018/07/index.html","93f8e327ca0864c384cd1f40f5f07079"],["archives/2018/08/index.html","436e978abcdc10904c504aeb4faf4211"],["archives/2018/09/index.html","d4ccbcc260147d6047b125b2f49d7b2b"],["archives/2018/10/index.html","b209aa1e1f7a0a13faf626f61a55980f"],["archives/2018/11/index.html","8f4b41e774b022c0262b73c5421039a6"],["archives/2018/index.html","0b52bcce01355265734180f4d8476a5e"],["archives/2018/page/2/index.html","72ca3b5e1604a2f7755bbc297b8b78d1"],["archives/index.html","7d5d268229f7855c6d42c0308a9a1aa7"],["archives/page/2/index.html","e0889b0a4e2b9224814c969fa165deaf"],["atom/index.html","43e7381bc2b30aeac295c14736d9bcac"],["blockchain/base64-base58.html","b66b90a7efed02a56bb99c7d3524bfad"],["blockchain/bitcoin-data-storage.html","99ce3b64b38a70cbdae4d6e41ee91a75"],["blockchain/bitcoin-difficulty.html","fd5a74e39b0d54671f3eb9cea075fe83"],["blockchain/block-chain-ethereum-contract-program.html","6a59e411ab0bdc84c97f5560813553d0"],["blockchain/ethereum-programming-introduction.html","83170bfce38b43b108c6e8f0b74d9122"],["blockchain/ethereum-rationale-introduction.html","7c0d9dc2b9b412501e112a26f4d4d4e9"],["books/index.html","a1f9557cc02dfd2f9b71f5ad072bccb5"],["categories/Blockchain/index.html","3e710829d3427f35d7358e218d0be075"],["categories/Blockchain/以太坊/index.html","75c0c70d08ad142dd5c223c3a1c6e9b0"],["categories/Blockchain/以太坊/智能合约/index.html","1af3f34c6aa7d0b6ce9f528110879d8e"],["categories/CSS/index.html","37b20cd38ba8de1a3904749b0205b02d"],["categories/Git/index.html","b2ba7ba82bbbcd0e7a839a81b1d22fc8"],["categories/Java/index.html","7affb3e834dcdbf1027b664d9acc0b73"],["categories/JavaScript/NPM/index.html","cffefa6637f43a0c1908fe41a107044c"],["categories/JavaScript/Vue/index.html","b16db366018ab944384ee33597a13757"],["categories/JavaScript/index.html","b01ba0ec6e45bc9a84f31740e6f37a70"],["categories/Linux/Shell/index.html","e21d3e7eaa478c2a44f29f830c4ae871"],["categories/Linux/Ubuntu/index.html","90c9e31e2f2643efd1b36c2c08d20bd9"],["categories/Linux/index.html","fdc6aed172317aaf952a749a1ea2d216"],["categories/MongoDB/index.html","eadf4b9f006597fd61f58b01f4bfad0e"],["categories/MySQL/index.html","f2f33fe83e907801577466cb385b8e07"],["categories/Python/index.html","07bbae78e9b6e73c36fdbc374d6ae718"],["categories/index.html","d0309ebb9312ab46217fff5ff05f64e2"],["categories/杂记/index.html","08c46789b3b50ae77048e9298affbf92"],["categories/程序人生/index.html","c570cd439f9171ca11c3a69d0c391bdb"],["categories/计划/index.html","58507e2a7e1da5180ffe1cdc51e2062a"],["css/css-normal-flow.html","a7d4e80e16ab1adf0f729fa613890b3d"],["css/main.css","d8a3f4b0fe96c869d634e77a56628176"],["drafts/configure-multiple-vue-project-with-nginx.html","138dec09990336de16cda599a7e9e3e9"],["drafts/iframe.html","a17cdd0e2190e148a8995fbff7fcc7a4"],["drafts/record-re-install-mac-os-10-12-6.html","185e383f7d296f0706cf8dff88e784c5"],["essay/note-ximurong-tree.html","8bfe08ab335f81995d7462d275b37196"],["git/git-DETACHED-HEAD.html","8774e4b3b11ac6c02ee69b30183e471f"],["git/git-branch.html","9bfb55777cabdc9e575c568325c03578"],["git/git-change-server-password.html","8791f38177eef72e87b291e79a066257"],["git/git-checkout-1.html","898191bd57ec3127f06a88b578c0fbe4"],["git/git-checkout-2.html","0be57b0c773b98291551e8ba9317b9c3"],["git/git-diff-m-symbol.html","f0388fa5581e3c8dddf79cd8cbc47fdc"],["git/git-git-flow.html","e06408a6a8335354a21068a31c47ac77"],["git/git-git-merge-ff-no-ff.html","e3158240a5a0d40453ea0ae9f051e12c"],["git/git-git-merge-true-merge.html","b7481358b704b75d97e8b3e22a62359c"],["git/git-merge-choose-one-side-code.html","a7d5a562b3062e124482f2ae9960463e"],["git/git-merge-exist-conflict.html","03e41228559c20b58485aab0eb465940"],["git/git-pull-1.html","d0901737993676bc8b01fed86ca7d3ec"],["git/git-reflog.html","6d823d68baa49d9e2fbb7efd992fde60"],["git/git-remote-set-url.html","ca2d6c0a3af5da77391adf56e63386f6"],["git/git-reset.html","5e1fd4a92855f1b8192b8bbc70cae213"],["git/git-revert.html","88d125e1506dce9d147882914d837ac2"],["git/git-tag.html","daa126c657795483e6928a2e050d9765"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","746e8a2cf7a5be41efdf6e9e3addd948"],["java/java-deploy-resource-folder.html","d10baea827b82b9e9f064505edcf25d9"],["java/java-shiro-note-2.html","63c101dda765add3bcefab631ba0c6d6"],["java/java-shiro-note.html","c8144f6734647dc374c821e78a6a661b"],["java/java-springmvc-X-Frame-Options.html","3c1fcddc14c8b0eab3a449697e331a25"],["js/js-logical-operator.html","8ec8f1736a51ed1c67ad615b424a3919"],["js/js-npm-symbol-caret.html","6c5a6dd6ce13bcdacffadac4101b2197"],["js/js-npm-symbol-tilde.html","c7706b8d0cb886ce9456ba85d2013d9d"],["js/js-this.html","b5b0b556e24f4fd40d76a4ea2da2802f"],["js/js-vue-note-components.html","60d63a8a5b5c96a7278af2ddc225f31f"],["js/js-vue-note-computed.html","9a8c288ff9546dc32e6c5a10279cc152"],["js/js-vue-note-css-style-binding.html","188317db344c837b510c6f43e85ac043"],["js/js-vue-note-directive.html","16aa12d91dbfa4a3aac7bec695728272"],["js/js-vue-note-instance.html","2a7ae96a2d3bfc7bd9a7eec6826d5a0a"],["js/js-vue-note-introduction.html","29f7db0e51ef00577d38c12822019d5a"],["js/js-vue-note-syntax.html","84d31eea628c3c58024e7ea928ece6f8"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","ea26a75930ea6f8b213aa021ea4cd8b2"],["linux/shell-command-df.html","c1916478aa129dfe71a4293e642afa2a"],["linux/shell-command-du.html","7d56776db544cc4586c2bd7505ae7533"],["linux/shell-command-netstat.html","743d46df4ab9e7e83b5820a537145438"],["linux/shell-command-sed.html","948c16bb589f5d4bbcaba876db50e4ef"],["linux/shell-command-tar.html","aa893f134a15c14afb9e5aa15a714309"],["linux/shell-command-top.html","f93a1b27e4c542c9e9b386849e6b0dae"],["linux/shell-command-touch.html","0d3e267e6058243cf6e2fbe9b09a96f5"],["linux/shell-command-which.html","41f423e7fcfa7b253eab38aec2794a74"],["linux/ubuntu-user-add-delete.html","0e90c5d160430659363f376d0bd13262"],["mongodb/mongodb-collection-aggregation-introduction.html","730a16602de916907714ef610650cbf2"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f94530f90f183e8b5d7e43437482a44c"],["mongodb/mongodb-collection-create.html","d003c579294d4c881e15b5802e9a59fb"],["mongodb/mongodb-collection-delete.html","55036b5de94a60d8b78d51ed5f4c9b85"],["mongodb/mongodb-collection-find-1.html","3dac819343ee1c78054b0808523c027b"],["mongodb/mongodb-collection-find-projection-operator.html","a8a666d31acd9209e126f95769608781"],["mongodb/mongodb-collection-insert-1.html","59ed50a2c544f2266e68ff2771c0dc87"],["mongodb/mongodb-database-create.html","b787e67a27e94c56b7d055259abfd3cc"],["mongodb/mongodb-schema-design-note.html","75a32ad2e03dc22c98f4144f2584f90a"],["mongodb/mongodb-study-note-1.html","0eca1863d01441d79fcc130170226056"],["mongodb/mongodb-study-note-2.html","8c606d35535e3ef4944f4133d36f4025"],["mongodb/mongodb-study-note-3.html","0393586d8dc96dbc713a4274587868a0"],["mysql/mysql-ddl-handy-book.html","b32c23c5a52cb5ff4db28756649eaee4"],["page/2/index.html","5571d80d98b012cf416717c008e6643a"],["page/3/index.html","a6c090f7f043de1231311b82950a8779"],["page/4/index.html","76e0b8a9df00a43fba2f756a4a1516af"],["photos/index.html","f51b3a5445934494b60bac5dc27c465e"],["python/upgrade-python-under-ubuntu1604.html","db6f57c2144ea354f951b73174230292"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","18dfd247203098afeb08f3bf3a076a2c"],["slides/index.html","c678da66519ac2b1c8c83c48e0da3e3a"],["tags/Base48/index.html","51a2d87c27c2c2be40f27bcdd15e5010"],["tags/CSS/index.html","0e501de0aae5e7dace550d78b4c68459"],["tags/DETACHED-HEAD/index.html","117cac57832eb94d14ef971efbcda31a"],["tags/Git-Flow/index.html","9d5c67407cdf2b531f96b9371d120eba"],["tags/Git/index.html","c32c4398ce56f922abde769427e6f21b"],["tags/JS/index.html","3d97e22644d1f045ec4496ef810a2b01"],["tags/Java/index.html","d1709e299179f38bc3a918e72b63e0ab"],["tags/Javascript/index.html","306381502459010a5d9d0291336e0fa1"],["tags/Linux/index.html","0aba83c1f2904cdcc5e946fa14f6eee1"],["tags/M/index.html","6400469fa2eb7a8d1d20ba2a3ba2c18a"],["tags/MongoDB/index.html","6d88482eff76a29dfefcdb47cfab72f1"],["tags/MySQL/index.html","d7aa23e6a67cd7113dd46e8867aa9796"],["tags/NPM/index.html","56ad65d7554a2d15c88f1bf6892f9d11"],["tags/Python/index.html","62fad8144557fc00be54d77bfe6e2e60"],["tags/Repository-not-found/index.html","6f2a249c94c0cb36a8be3798d9e9a42f"],["tags/SprintMVC/index.html","6d3c8c3809b54f29ce863113f0eb75bc"],["tags/Style/index.html","4fb8f83fa09c3807a807a5dc6f1bfd09"],["tags/Ubuntu16-04/index.html","50395db1559a59978818a18fa9ecd820"],["tags/Vue/index.html","f0226ec6c2e3235f9000e36afbda8afc"],["tags/X-Frame-Options/index.html","f3585426a931a0af5606533dfac33505"],["tags/aggregate/index.html","31f1b63a0f1ee1e2be704f26c9404b3e"],["tags/alter/index.html","d51c439f4ca5770951b16115509363be"],["tags/change/index.html","1c981e3acd1641ade69c49c8527f34a1"],["tags/checkout/index.html","5adb12864f33c728c614dfc42dadb54c"],["tags/collection/index.html","0ca996ad2b7f65432f7deb38a20bdd86"],["tags/component/index.html","fba710ddf14eca850c7d92cea166ebc5"],["tags/computed/index.html","1b6c525affc21d62ac36cbe5e9db96b2"],["tags/create/index.html","3ee6e619276616095859fd839808093f"],["tags/database/index.html","8f82e21a3fe6f8bba200d95210891c79"],["tags/df/index.html","6e93efa290c0401e2941224b702791f5"],["tags/diff/index.html","2a75700afd66aab33078c609b7b2a0be"],["tags/du/index.html","b2a96e4c6acafcc047a15466a9b24e30"],["tags/fast-forward/index.html","d8cc7a676507808c1f96bda210de72e8"],["tags/ff/index.html","b2dbf06127e6d3d655c8cc42b951bdbc"],["tags/git-branch/index.html","9df19d48d2db17f366756666c62f1637"],["tags/git-merge/index.html","e8744323134a2aab42a93db6c7825e8e"],["tags/git-pull/index.html","34dd3c59237d147bfdbe09638ea6c20e"],["tags/git-reflog/index.html","1bdbad05ee77d495fa6491fa25381f9c"],["tags/git-reset/index.html","55b13afa45a6c75a3d0207034d8d6b78"],["tags/git-revert/index.html","ea046215cec80eff714bdc751f8f6576"],["tags/git-tag/index.html","8d8d20a81841bf560e679315d8f34be6"],["tags/index.html","739b49bc5e3e29fe207b5b799a83ffbb"],["tags/modify/index.html","188ae3b1fea4b2d4d03cfa50197a1181"],["tags/no-ff/index.html","384b1eff502fd8a693ba900e20367273"],["tags/schema/index.html","53493754efdea4b759d775c5e09f67d6"],["tags/shell/index.html","3df39dfd74180cda5c68b15bdceb0799"],["tags/shiro/index.html","82da03e046c000d7269c61e7fb3c041e"],["tags/this/index.html","3fe053fbfc2629f7d37feaf1b54e4b0a"],["tags/tomcat/index.html","dcbf2854265ee21ffede065f0e2f1871"],["tags/true-merge/index.html","a6df06ef1fc46aa24344123347517bd8"],["tags/windows/index.html","4c5b13d3525b3b229fe8c2dfa5ce15ef"],["tags/一棵开花的树/index.html","2f6951f18189923769dac29a243a57a4"],["tags/介绍/index.html","0273bb56e4bff11c1fd247f1d70a6ff6"],["tags/以太坊/index.html","490e3d5c5be14b2812d9e79621071728"],["tags/依赖包/index.html","7718e714843051f0d8df8a5923f76810"],["tags/修改/index.html","8539d7470ac075fa5f779cda33d9be5a"],["tags/冲突/index.html","2949385f33f81877f62c188b907ee94a"],["tags/分支/index.html","bc730558a9c1f058f81ed19eb64bc371"],["tags/创建/index.html","cb39c2d94ac144f848eb036b313e4d82"],["tags/创建数据库/index.html","ea10e6e08079d04770190265b7b24ebb"],["tags/区块链/index.html","beb987e0cf7d7f4709c9c1171e4f3c9d"],["tags/升级/index.html","10e0c7e3dd6743336ea03db930548fa9"],["tags/存在/index.html","e817a7948ff0d414b873d62fbc553c7b"],["tags/学习笔记/index.html","fc0df09931b3b8d1bc9a82a2c999d5c0"],["tags/实例/index.html","0b823bf20e724a733a6286d67373ae59"],["tags/工作流/index.html","0bd93dcbd8eb40f5000cbc732833c58e"],["tags/席慕蓉/index.html","339a03d75127d3a14dc541b13fb6f9b1"],["tags/插入/index.html","b66e4cc973fb10dcfde644bd582e680e"],["tags/数据存储/index.html","32f410ef6702267ddc33261f6f5bdf53"],["tags/数据库/index.html","7aa3ba8d0dd7c7abf043c8768545b945"],["tags/数据集合/index.html","e28ebfe1bbff7f31823ce15c798cfc88"],["tags/文档/index.html","3aa90a3b0d26eb808f99b4f4b85a4c04"],["tags/智能合约/index.html","7630216ee3c09e0449840faa5f6178eb"],["tags/标签/index.html","758f8fea0e543de0da7b1b60239699c4"],["tags/模板语法/index.html","ce0816880df59e34511aae6cf52c1b0c"],["tags/比特币/index.html","8dee2438819dd11b81bd22745190f07b"],["tags/波浪字符/index.html","e5f2339820dc18a55020766339f503e1"],["tags/用法/index.html","45542255ddb5be2725a6325a75d83600"],["tags/笔记/index.html","b29f260b5a9ac4994e69b2ba65356173"],["tags/符号/index.html","e40f749bac5306f785cfea4ecf44c7e1"],["tags/组件基础/index.html","cd345611c54d2974eaa536f29ffcf0db"],["tags/绑定/index.html","a66aa22819a4524ca8f22ba9fcca56f4"],["tags/编程/index.html","d5e15fe1eb87163484bae12d5c73b681"],["tags/聚合/index.html","9380eda2eee120ed3218322d41b5c4f9"],["tags/自定义指令/index.html","b922c1cdf573fdd6b6f0ccaba2605da3"],["tags/计算属性/index.html","ff9d92ddeff917b2360a09b1343b00fd"],["tags/远程仓库地址/index.html","0170a9c9780bb74f92464db16196d3e4"],["tags/逻辑操作符/index.html","2ee1f4042acbd4c12ee782b06cea6354"],["tags/部署/index.html","c7865c12220d3a4fb65c318e77e027ff"],["tags/难度/index.html","611de00e6e84c0ba787fd0f405738c5a"],["tags/集合/index.html","a3cd7db05c1826f8a9f26d6b2b099287"],["tags/集成/index.html","8135ec5a15cd23212ff15fb4962717fc"],["thinking_in_programmer_life/full-stack-programmer.html","6c9e3964b2415191ad5ef1f39b8198c1"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







