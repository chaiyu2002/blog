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

var precacheConfig = [["about/index.html","a8261ce59f85e6c19007d4cff0a32bcc"],["archives/2018/06/index.html","80420d0d22c20d22697615e111c46e40"],["archives/2018/07/index.html","26646df8f5c1a0890639509f6736e53d"],["archives/2018/08/index.html","8508214eb6fee65f0662dd31fb0303f9"],["archives/2018/09/index.html","24890d523aaecd78708501d07c09dddc"],["archives/2018/10/index.html","59290738b4f657eac00750bd979a6723"],["archives/2018/index.html","5de4b0194403fb5ffc11e310ae1dd6c1"],["archives/2018/page/2/index.html","ba9715d459ffbfb103d997f95311ee74"],["archives/index.html","b0cf2698c191c9b22f2c35e41a2c3644"],["archives/page/2/index.html","88e4301d387e9c60ff4561901de6b483"],["atom/index.html","49b05988526ece491e436f0ad762c78d"],["blockchain/base64-base58.html","9d0eced0561b8df53d596012e8b17592"],["blockchain/bitcoin-data-storage.html","6d7200dbfff3172645e563004dcdc41f"],["blockchain/bitcoin-difficulty.html","9c5407e5f367ed021e1f2aef0c1fc8f4"],["blockchain/block-chain-ethereum-contract-program.html","e256cc164613b35470b777145a840c10"],["blockchain/ethereum-programming-introduction.html","720054eefa7bd0abd0643c2ea7d97684"],["blockchain/ethereum-rationale-introduction.html","7470e37018ccaeb4b22450d545b1aebb"],["books/index.html","2697ce6a00c376a5ca6bd25e4520f39a"],["categories/Blockchain/index.html","8d1ecd5bb6dbc07cf6c253e95d12595d"],["categories/Blockchain/以太坊/index.html","cc670b0baa67a96988b6906653682564"],["categories/Blockchain/以太坊/智能合约/index.html","81f860b640a52dae895a647f8982cdf6"],["categories/CSS/index.html","449fd69a5880b083df825eefad655700"],["categories/Git/index.html","b4781f8976b4107f41e545b80bb7f5d4"],["categories/Java/index.html","905e1ee2ad2bf3b452b864201b65bc2c"],["categories/JavaScript/NPM/index.html","0518e73b785af5a30863d15c67cf871a"],["categories/JavaScript/Vue/index.html","1630ce400599de629c4391d916034f62"],["categories/JavaScript/index.html","b655c9e5c9fc33cc02bbe51e2adc8a9a"],["categories/Linux/Shell/index.html","c540f97a2af4ae6929315e408a66c63b"],["categories/Linux/Ubuntu/index.html","65e37d50f74cdb0ea2bb813a664ffe9f"],["categories/Linux/index.html","8f5c6bf87b79b9f1045c2d40e20c19ae"],["categories/MongoDB/index.html","f5797220cb74e44f87e7d4b70715b1e3"],["categories/Python/index.html","af7d886908a7c12135ba565dc9a1065f"],["categories/index.html","5d8c8a2c64c5dcc95da7123cf4aeac1b"],["categories/程序人生/index.html","05ccec5aa9e9de2421af240a4fcd9595"],["categories/计划/index.html","fb28c35503593824c3f3ccab3816ac23"],["css/css-normal-flow.html","552a9a19cdd2eea817da1678dd06ee9f"],["css/main.css","2e92c57a2814ec7c7a996ba3d26c99c1"],["drafts/configure-multiple-vue-project-with-nginx.html","3db3bac5d76f4c8c85ffd7bd15b0102b"],["drafts/iframe.html","8f8488cf726b07aabe22676d56596bc1"],["drafts/record-re-install-mac-os-10-12-6.html","8ef111afeea3d49a65cbc4a080f46d7c"],["git/git-DETACHED-HEAD.html","4bde34e9ef243b4db62744b7be7ce908"],["git/git-branch.html","dcc520960646ff93054972fbaeb71871"],["git/git-change-server-password.html","be4f3addfb2e01caa85530ef39247b89"],["git/git-checkout-1.html","cc2e6fbf11de87cdbdc14b3484e1de7b"],["git/git-checkout-2.html","5f1141cc2768ee4f9bfdad2c1a628f1b"],["git/git-diff-m-symbol.html","676f167910e33167a86833d541527df2"],["git/git-git-flow.html","f3e1b68040e152df24ef77daf40e456d"],["git/git-git-merge-ff-no-ff.html","3b8b713824c63dccf2874c52bcc0ab93"],["git/git-pull-1.html","20fc5f7cca93b8b58acbc0e233512286"],["git/git-reflog.html","df27e79658f2b527116c6dd6017da4ad"],["git/git-remote-set-url.html","820c8f7a8c91cad5b9ec047a8ec62597"],["git/git-reset.html","cdc3092c2ddc8ce943adad0f3f308dd2"],["git/git-revert.html","19d1b9e30abaf579da8f9fe6e4b47a38"],["git/git-tag.html","5d0d2a5f6731278a4f0fd41acd3fbd0a"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","27d6ea3dbbc073bb868135fedf52fd4c"],["java/java-deploy-resource-folder.html","13d2e8f6f67dad30210746e41db551a8"],["java/java-shiro-note.html","077c28e8f5a104b5a4cefbc887028de5"],["java/java-springmvc-X-Frame-Options.html","42de589f8226a2fe776884fb5019bedb"],["js/js-logical-operator.html","70b0ec68cd5dba51215dafd928ac8ca8"],["js/js-npm-symbol-caret.html","e73dee480eed146515f746c295b5230e"],["js/js-npm-symbol-tilde.html","8da8a63efc6b8419873780b9a228df58"],["js/js-this.html","5fa56e6f3f530fee1ea0409e2aed42a2"],["js/js-vue-note-computed.html","e13098db6decad56df6f3ed7aa373cff"],["js/js-vue-note-css-style-binding.html","a4937396f7bda81970931d1eac270ef7"],["js/js-vue-note-instance.html","8e726174432e05bf7cbca85453cd9bef"],["js/js-vue-note-introduction.html","b641ea61fc0ec9518204f3c0acbf6a9f"],["js/js-vue-note-syntax.html","868f3d1c02383225e3f062ba84c68306"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","040dd675f041a7ef3771d6470b81394f"],["linux/shell-command-df.html","9ae41987768c81b9fc261a2ecfd92d36"],["linux/shell-command-netstat.html","c463b02e95c8bdc6ea507208bfa1102d"],["linux/shell-command-sed.html","cc6272797e8fc01d2af5290efccc21ba"],["linux/shell-command-tar.html","20475d75573511f82069adc1227a3d2b"],["linux/shell-command-top.html","c136f6781ec40b669ac695d99753571e"],["linux/shell-command-touch.html","04495300ca8c981077d63422ee001433"],["linux/shell-command-which.html","5dc1e712af046061b31552b7ef68ccf8"],["linux/ubuntu-user-add-delete.html","bc1a07b7a0d4b0f09732ab181b44ef8c"],["mongodb/mongodb-collection-aggregation-introduction.html","9d3cb044e0b0e0c14e9e2716c66be4ad"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f27fc2b19cd7b0a87e74437b46843717"],["mongodb/mongodb-collection-create.html","b123c37c605666701103cf50daae255b"],["mongodb/mongodb-collection-delete.html","7d658c93b3d0083dfddbb2829af3b957"],["mongodb/mongodb-collection-find-1.html","1e58fb60cb6acea1d1e42e34824196c6"],["mongodb/mongodb-collection-find-projection-operator.html","9e0c79c5783cfb59e21324a23efe41d1"],["mongodb/mongodb-collection-insert-1.html","257b8482d1041944d2378f161022f882"],["mongodb/mongodb-database-create.html","4b51a67d435a186b7ddd36764dd3b1ce"],["mongodb/mongodb-schema-design-note.html","77b3014ddccc1a34f347c49e917befb6"],["mongodb/mongodb-study-note-1.html","09a5cbac65dfeb19a03d674e23e79196"],["mongodb/mongodb-study-note-2.html","8aab0ba20e1d21bbe9bc87a60fcce96d"],["mongodb/mongodb-study-note-3.html","e54ce2e0d2ae837d615b57499abc7cd2"],["page/2/index.html","9fc6fa6868d9d3201366da0c3195fb98"],["page/3/index.html","bea6376fcdd091fd49656992881e48ab"],["photos/index.html","a5e9b1b5b9e4841ea96966a2f2303d74"],["python/upgrade-python-under-ubuntu1604.html","5499557659951a33d3b531bcfb512e35"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","cf263b074c25a082e2578c6f420a287f"],["slides/index.html","c108c3c4bcd836025e6c3fabe6ba7538"],["tags/Base48/index.html","b5b255e7c97c6ebe759654b6a841312b"],["tags/CSS/index.html","9c303d1bdde1245cbe3e6f796a7189e8"],["tags/DETACHED-HEAD/index.html","04be502d70e855f98cb3a0a28fca7112"],["tags/Git-Flow/index.html","3ab35a4820117c7f472affbb3f7cf820"],["tags/Git/index.html","6e51a3d40b41cd09f265e96cd086b67b"],["tags/JS/index.html","d6dbad472963e91edb7513a9ab8b9f83"],["tags/Java/index.html","e172c32f78ea5b0d30dced8b4026660f"],["tags/Javascript/index.html","7fcc906d94568b29d209ead48ee59b6c"],["tags/Linux/index.html","5b33a1d28f0f08eebdcbbd735e3b0ba3"],["tags/M/index.html","118190b27da668bd791999215452e3df"],["tags/MongoDB/index.html","73a58a6b05d931da435eaec4b1cb7d0f"],["tags/NPM/index.html","89193c50dcb6ebda9495e5d73df427a0"],["tags/Python/index.html","7fcf3d59b82793be81e68642e751ff8f"],["tags/Repository-not-found/index.html","8227de7b1f0b44835fea2c6e6603cd13"],["tags/Style/index.html","00c45cf8c42434e0f9ca22aac30a2f28"],["tags/Ubuntu16-04/index.html","ab3d1adac2e5ebe2819f800206725cd1"],["tags/Vue/index.html","a6647ca501c6012a7432d785a5faff82"],["tags/X-Frame-Options/index.html","1a5d0894c21f95d2704ac0472dff2161"],["tags/aggregate/index.html","e64c478c62dcabf405e4cae3565704c3"],["tags/checkout/index.html","268ade9ce2aebeef9a8a32177dbe0692"],["tags/collection/index.html","40d1c51a08e21cf900805aa893ce65b3"],["tags/computed/index.html","d07cc600e09af77ed382ff58336ee8ba"],["tags/create/index.html","0d70e08524eb5ab7f7c52ad40db48d21"],["tags/database/index.html","22b71fef2fab3468ca20db8c41d9d7df"],["tags/df/index.html","02832ddff3eb3b949552cfbaef65d0e7"],["tags/diff/index.html","ccc3106a50dea9130a021b446ba65469"],["tags/fast-forward/index.html","d5679e070a0a5b7fed3b02e50ff6cce2"],["tags/ff/index.html","4a2de51f5433278b2a7af87f26c918e4"],["tags/git-branch/index.html","312bab2f366a7ad8aef44ad8b0d3e574"],["tags/git-merge/index.html","8075321f151d131793f04a572b042c08"],["tags/git-pull/index.html","439bbfbf39a707a545c986f3145e447d"],["tags/git-reflog/index.html","346823678eb270292df9ef58d410eb0b"],["tags/git-reset/index.html","0e6e66cfc90be1fe29be606551ca040a"],["tags/git-revert/index.html","a3545f8dae975f036e850459234eb657"],["tags/git-tag/index.html","ead54e75db1394958c6da17aecbd268a"],["tags/index.html","a38c82bdab27956084b2029bcd44283e"],["tags/no-ff/index.html","10291016d6d0d505969d601c0ab069e1"],["tags/schema/index.html","466aa2156b7a71d0191cffbf3f03d4c6"],["tags/shell/index.html","bb8b893431fe2e9b04bb9ff25d5d5bb3"],["tags/shiro/index.html","f537662ec6c09fac108b70534708504c"],["tags/this/index.html","1234f9968ef980f2b19bf3b549702060"],["tags/tomcat/index.html","5515b6b7ea0a4f50eff96dd38e5d7b66"],["tags/windows/index.html","a08498bdab6cbe5780958ea682fb5d7f"],["tags/介绍/index.html","d2c7917db4ec462c9b37038ef2e916cb"],["tags/以太坊/index.html","07b18947fb80d085f1d408ba9d79bc0c"],["tags/依赖包/index.html","58485028468340579e621684c1e1439c"],["tags/修改/index.html","ac7a8f8354b7a01803b0e72725f94bf7"],["tags/分支/index.html","eddaf33ccfc551044d67fa1b09befd03"],["tags/创建/index.html","00a1ded34d0a5cd0bb08e8915fea866e"],["tags/创建数据库/index.html","3c43458b84cb623502f7d35f1de65aa7"],["tags/区块链/index.html","004d299a70b4f41d98a4f63c6e6df704"],["tags/升级/index.html","d1fd0436776f6713556c3a5bf8a0759a"],["tags/学习笔记/index.html","07c909ea72ae8ee8352416a4832d7728"],["tags/实例/index.html","72cc5f86d0161fcf7614dc83bf8b8e60"],["tags/工作流/index.html","a4d4a5f7ca9162c9ba3e49c1c7436044"],["tags/插入/index.html","f784ce824f270357a4733de5594d1c64"],["tags/数据存储/index.html","2ad2751fbb5a1d0fc921808f14b29b73"],["tags/数据库/index.html","cd02c30878a844830a2fdb6d446fad29"],["tags/数据集合/index.html","814f6d97311aad59bd77c76c7245580f"],["tags/文档/index.html","b1aad930dfd3622edad5d17cf27a8d0a"],["tags/智能合约/index.html","5815f19ec970aaeb726d2d330979546b"],["tags/标签/index.html","2c89f41ab696506aa4679aea53432e63"],["tags/模板语法/index.html","b28c297a88d1d14d943fa750bdd9f446"],["tags/比特币/index.html","a3accbd802f88fdad45d41cadd1389f8"],["tags/波浪字符/index.html","b1a2ff64ba3907247e77753a5c2e4a6d"],["tags/用法/index.html","f3c6ef363f2b3cdf58a6ecf13e21610c"],["tags/笔记/index.html","2af8cbcc652f78453a4f6cace43bb654"],["tags/符号/index.html","1b2f640827ef1dc6d992e60f985db7b4"],["tags/绑定/index.html","6c9ff08988ec10e0184e7117914836e0"],["tags/编程/index.html","27cdf808dceb979bdc13aa611d5a3fa7"],["tags/聚合/index.html","460f7dfdcd3050587aed49ee00a403c6"],["tags/计算属性/index.html","5e3057acfa41a7ace60013876be72841"],["tags/远程仓库地址/index.html","55d4a071ed332311a68c64921d783120"],["tags/逻辑操作符/index.html","94603a57b32937a6ad40dfda421671fd"],["tags/部署/index.html","05b8db82e31fc1eab4d4814127fe61ab"],["tags/难度/index.html","c7a62fe267786c8efccb2494f30f7af5"],["tags/集合/index.html","ae30e04f346299c5746585f05ddf4a01"],["thinking_in_programmer_life/full-stack-programmer.html","75989676f019c74018fe365ea5f19dbe"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







