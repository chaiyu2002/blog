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

var precacheConfig = [["about/index.html","f26907936e7c22053213033b9a76ec27"],["archives/2018/06/index.html","4ee96a4a1ccdd6fb890b2b75f01f90d8"],["archives/2018/07/index.html","58feee9b840245f716e1038fe5be0aaf"],["archives/2018/08/index.html","2834c4deabf0a7a850ffd119f7ac7c9b"],["archives/2018/09/index.html","e88144f4d3b9e64c0e53308d47065dbf"],["archives/2018/10/index.html","d9ad1dc607770b79a9ebaca3fd512697"],["archives/2018/index.html","d95704b950252d82e2381b894a18da45"],["archives/2018/page/2/index.html","2aee4b2d4ea6ccdc894794333a8c8e57"],["archives/index.html","d23ab59f143d1a13beac86c15872d20c"],["archives/page/2/index.html","721432e92757fcb84cb30bb2577b8d62"],["atom/index.html","edd97431f8f83e688c1d158aa09639f0"],["blockchain/base64-base58.html","02fc9e42c3837a2fff0e87b6a78931e4"],["blockchain/bitcoin-data-storage.html","8f1560c112b8ec4743a4ef6d911c7a2f"],["blockchain/bitcoin-difficulty.html","73cf6e1c96fe4f76c40e8009a7889dfb"],["blockchain/block-chain-ethereum-contract-program.html","5d768b3237456f4792848b2223df9356"],["blockchain/ethereum-programming-introduction.html","95c0b19d855deea4a28c198498544599"],["blockchain/ethereum-rationale-introduction.html","f3a603195eea461bfd7a07fa919aeb17"],["books/index.html","e0d0f589707694300163f354f2370e8a"],["categories/Blockchain/index.html","12b7f650c9db90055779cbdcfbffb82c"],["categories/Blockchain/以太坊/index.html","67d19b4bcfe28b26e1e22999ca99cbbf"],["categories/Blockchain/以太坊/智能合约/index.html","bb41d3ba53b5275ca67721ecbcbda2af"],["categories/CSS/index.html","7cd77c816581d0ee5f94124766f4797a"],["categories/Git/index.html","3559db7dafcebb6bd28e904b5ddfa1d0"],["categories/Java/index.html","58a95df91c4bf73fc76be6ffe82a6fba"],["categories/JavaScript/NPM/index.html","855d009ff94fc6f086e2e526421e974e"],["categories/JavaScript/Vue/index.html","fd99d7fbd9c28ad9579b29b49bf30c64"],["categories/JavaScript/index.html","8076e261242ea98dbff1a31410d8183e"],["categories/Linux/Shell/index.html","110e8a50dfa31ef877a1db9af22623f8"],["categories/Linux/Ubuntu/index.html","b9edb514bac4f658070cdbcef5ef04f9"],["categories/Linux/index.html","bc9059736148e4f7123c55a51197f646"],["categories/MongoDB/index.html","7b6feaff3cdb941282efa4582ff4c11b"],["categories/Python/index.html","7defcccf6490c91cb18afcf3f75bf286"],["categories/index.html","4f69bef55b8c33fd40df1f4dd7242454"],["categories/程序人生/index.html","12d50d884481e9fd8ba80ceb1a2ce5d7"],["categories/计划/index.html","6a9711b08ed068bd62b843a6c7a64fec"],["css/css-normal-flow.html","eb78fcce15cb98af7d08f746b6437573"],["css/main.css","d5158588444349fb18f7ae7b6a602961"],["drafts/configure-multiple-vue-project-with-nginx.html","862fa277d248c7e08a2a2d2e45f906fc"],["drafts/iframe.html","f326827183bdcf270af9f3a6a4c1a0d7"],["drafts/record-re-install-mac-os-10-12-6.html","775b95db601a59a594267c94b769eda2"],["git/git-DETACHED-HEAD.html","8b85b4419a3340dceff4f438b3ce9647"],["git/git-branch.html","2e5c2024e5c2a6840b5beb04f1b2c982"],["git/git-change-server-password.html","89619aaae29fad04a9b4bdda9181448f"],["git/git-checkout-1.html","27ee7fc6124ffa74f5002f4b7dcb2831"],["git/git-checkout-2.html","fd6d915c65b6d811eab80857ea088297"],["git/git-diff-m-symbol.html","8a7fb6c64441d1a474c19c05e0b97550"],["git/git-git-flow.html","6fd80e5e3ca0be4c8c8675428a325cab"],["git/git-git-merge-ff-no-ff.html","5b0918e10fa0442b53f30c08a7e383d7"],["git/git-pull-1.html","cfea60365b1e170b5c3d25face9dca5c"],["git/git-reflog.html","d8038a0927130d6cb4496f6cf7ff5ba2"],["git/git-remote-set-url.html","380fd7d7fd3bba0967b4831cc6e5f554"],["git/git-reset.html","7bb47c232a36d20e603ab86cb148ad82"],["git/git-revert.html","83b3068ef898b57ae4e12823c62708f7"],["git/git-tag.html","b0398f6eb3150b1a931766cc6b452562"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","01a6c57b6f6437e567975362709f1fb0"],["java/java-deploy-resource-folder.html","bd321eb3cc0108bffe0aeff16175d3f6"],["java/java-shiro-note.html","e031136020208d2cdd38d3cb8275bfe7"],["java/java-springmvc-X-Frame-Options.html","e9fd59743a85e30c877b927dbcedab91"],["js/js-logical-operator.html","6512436d98c83fdd5d5eb18443569ff8"],["js/js-npm-symbol-caret.html","1f613c9ced2e8b9b965783a4720b8f8d"],["js/js-npm-symbol-tilde.html","59770a93e35e3f97e4561c1a277178af"],["js/js-this.html","ffad7ccf2db08914d88c3c278ab3380b"],["js/js-vue-note-computed.html","697c20c9f0958a0a65be5af960a66032"],["js/js-vue-note-instance.html","402bd10fb4a46f283079dbb4c58167f1"],["js/js-vue-note-introduction.html","c0dec43d7446fbb1dd9f2a9d9aca9e1b"],["js/js-vue-note-syntax.html","ea63eef62f403cf98c64af0d50f16d30"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","106c5fe9a823ac4cd5508cc93b43fef1"],["linux/shell-command-df.html","19655b3fb8442f21fbace8fa11d8432b"],["linux/shell-command-netstat.html","c5e2b4996b1ceef08c00b42eb7d322f4"],["linux/shell-command-sed.html","47c2521071aaa1940d8f1db689d47d7c"],["linux/shell-command-tar.html","25fabb1ea691cfa25cd0043676c8c0a5"],["linux/shell-command-top.html","7fb86bd3d1dfdb9a3359f8a42a920ba2"],["linux/shell-command-touch.html","c13176c2befedbbaca4202d4fc8bb74f"],["linux/shell-command-which.html","38e500c41fbda0308063c5d05df507db"],["linux/ubuntu-user-add-delete.html","d9ccc1a317f8be3d19087f9764ffc98d"],["mongodb/mongodb-collection-aggregation-introduction.html","05ed1247b3a78e41a7fbd15acff1bbd4"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","af0e382e1da358eff96a6a51e09ba5d9"],["mongodb/mongodb-collection-create.html","5b34bed7ed568c315a1956aa02e50987"],["mongodb/mongodb-collection-delete.html","400a32d8961fad76714d379d45d6acca"],["mongodb/mongodb-collection-find-1.html","07496c40a4daea42a6a7197200a12af5"],["mongodb/mongodb-collection-find-projection-operator.html","881a03379617655baac08e35cc5d8bda"],["mongodb/mongodb-collection-insert-1.html","b27c9bf7725a152c882da21beac385b3"],["mongodb/mongodb-database-create.html","eea1b6fdea434963d54132196e5b4bbb"],["mongodb/mongodb-schema-design-note.html","e5322d8870394be718af3c0a6a658531"],["mongodb/mongodb-study-note-1.html","1f9c8ad94c77f2f3623f5cba013d7ff1"],["mongodb/mongodb-study-note-2.html","0e07873fe1abc1aafb0240afef6f6eda"],["mongodb/mongodb-study-note-3.html","d740fb5567d961d74a5717589be7409b"],["page/2/index.html","fe22be0ab4d98d48ef455fb307532da5"],["page/3/index.html","89bb57717fe16509c11f2d6cb19a461e"],["photos/index.html","8c16ddee5d6bbaef0d06132fee1edf9b"],["python/upgrade-python-under-ubuntu1604.html","138fdafa61ec7c6e64bedbe45278d591"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","6cae17ab79edf448c4809f629426c027"],["slides/index.html","282482e1fcf5aca9a6fa94c521694883"],["tags/Base48/index.html","e6e47e0e7ebad6840fc8a91a3f48d8ef"],["tags/DETACHED-HEAD/index.html","8db5343bfd30afc1ce43013ab4f3e39e"],["tags/Git-Flow/index.html","de48a227a95fdce5a21672ac67bad5e4"],["tags/Git/index.html","f15cf99e58d0ebf830ae449a6647323f"],["tags/JS/index.html","05806a5854a816b140cc24870ad8bb04"],["tags/Java/index.html","5dd60ab802bfe38390dfa9ec138cbfc6"],["tags/Javascript/index.html","59e3c4424b6a48ed002d5f6b419c7b8a"],["tags/Linux/index.html","36902e1e09669e0cc77df08ede50ba46"],["tags/M/index.html","76a2ebc553086b6b2ad77fefd1bd3d3f"],["tags/MongoDB/index.html","d5c65a83feae0b40ee9ffb889df1ae3f"],["tags/NPM/index.html","973b0e88f126969e5563e90fd87caa92"],["tags/Python/index.html","6e82efd79bb8c41d4b7e3e36d8651810"],["tags/Repository-not-found/index.html","2d2b318fee8b2c7ff9d039fb017071c5"],["tags/Ubuntu16-04/index.html","f628f9fda8b27e3d99537fd2b3c892aa"],["tags/Vue/index.html","2a82541c480ed22d8bdfe578c9da1025"],["tags/X-Frame-Options/index.html","9a57d95fcf701dea8bb5ee163ab2b072"],["tags/aggregate/index.html","73f731ace382a5a0bf2bb8ccf7485f0a"],["tags/checkout/index.html","936b5a483826b7f3e29a4e4c70129af9"],["tags/collection/index.html","2d5119e37ac7ece5619288c0ca27be09"],["tags/computed/index.html","13e5fe86e0103d78bace8ea48c1987fd"],["tags/create/index.html","f28328871e219dd67e3ae73363c9e465"],["tags/database/index.html","ae5eb89903e57814629393e20d915010"],["tags/df/index.html","949958ddf17b1c10c01def6e27133b85"],["tags/diff/index.html","6aef5763ebebe977162471674c8d739c"],["tags/fast-forward/index.html","8d795a863e3da82c7f469e99ed24152f"],["tags/ff/index.html","78b5384ebe03a38cc2a338dd77ad56a3"],["tags/git-branch/index.html","a0b0c71631e1eae863d8e73c9a498ac9"],["tags/git-merge/index.html","bb88736bf602aa3fa666234131f02d82"],["tags/git-pull/index.html","143c9571eb145cffa00657fdc20b13c1"],["tags/git-reflog/index.html","dc48a1d6e214c55cf79f31d0c31ad707"],["tags/git-reset/index.html","a142c088a2b654fb839d771a42cd3eca"],["tags/git-revert/index.html","8cc74cceb44fe9eb12c63ad3b1f08fff"],["tags/git-tag/index.html","fe6f477e6865a4a47edd329a2657a7a6"],["tags/index.html","8b0e3ae3cd8f514b8c30fca6848d088c"],["tags/no-ff/index.html","c39083cbae61518c4133f525be6775a3"],["tags/schema/index.html","bc634978f68daa637180ee102a5ac640"],["tags/shell/index.html","c011b68ba9bd71e233502e5804b57997"],["tags/shiro/index.html","ad25b088ec2714e589e68277642abfd7"],["tags/this/index.html","89b5b3ce752d15f01d9af202bf26621e"],["tags/tomcat/index.html","21d33192c42c5514d798f72d4b77c98b"],["tags/windows/index.html","2835f27c3355f4a389b4cd68b5a8cd47"],["tags/介绍/index.html","2afcb4b6a709b25e8d58e4dc4f667d1d"],["tags/以太坊/index.html","816adf9d506bc3427d85db260f2c1805"],["tags/依赖包/index.html","b9fcc69dd672287b7d09c2680f2fa21b"],["tags/修改/index.html","c2fc010f31dc4c44cc9c48f73eee8190"],["tags/分支/index.html","7ac4fb66a11e1d88f75f205771420af4"],["tags/创建/index.html","1deacd79cd1487d6e1bfdc05b4ed56d7"],["tags/创建数据库/index.html","d28f023dd2fd45c74b0d984ea4fbb7bb"],["tags/区块链/index.html","8261ec603d90227f7f657635efcf4fc1"],["tags/升级/index.html","64c4c875952549ecef4c838c3aeaae18"],["tags/学习笔记/index.html","2b41361064f491c0d58752d1a406dcb9"],["tags/实例/index.html","ba58fe2b69ed8283bad27aabb77306fc"],["tags/工作流/index.html","31417fa0ebd0984cb04164b793515188"],["tags/插入/index.html","699cf899aab5c5cdb1395c5fa8b52b0b"],["tags/数据存储/index.html","b4a8fec2f4365a5a6cb79d9ec4ed20ee"],["tags/数据库/index.html","cf32ca0e7ea931f5f7c443efab6ca500"],["tags/数据集合/index.html","dc0bb5b5aacb7cd32a50fc41e95bff04"],["tags/文档/index.html","32325a8f0aebc53045f201a4ce51abfe"],["tags/智能合约/index.html","74acf2d427f1cfd0939aad9858200ca5"],["tags/标签/index.html","2697f457ecb5c86e5913c16e87dd5b62"],["tags/模板语法/index.html","62d6e63f46e1fcb3954504d60bdb01e4"],["tags/比特币/index.html","bd02c0359782aa9b53118163846f673f"],["tags/波浪字符/index.html","e90326d3b4f7a9862698d350442dadd3"],["tags/用法/index.html","d46e80e315659dd067e1c5b3491ce27f"],["tags/笔记/index.html","6542c05b7ad0cabbd75d81566c61af82"],["tags/符号/index.html","c7b2c8d48e1b216bf3b01faa02649a80"],["tags/编程/index.html","479a31b7ed67902b467fe90cf5160cd6"],["tags/聚合/index.html","23c936323309cf36f904ad08bd344924"],["tags/计算属性/index.html","30be85509032a42fc661758d4132c843"],["tags/远程仓库地址/index.html","8bc40405a28c20654a82a86a6d56a998"],["tags/逻辑操作符/index.html","dac1904c0ab50102403b2b61531c6298"],["tags/部署/index.html","faefba12571168bab82b8d1e006c0e99"],["tags/难度/index.html","d7546af6af2087c62cae3db98d7b1669"],["tags/集合/index.html","9d451b03c89d6df9e59e96307aab289c"],["thinking_in_programmer_life/full-stack-programmer.html","3ce1ddb77d65ec03466f6e041b562b88"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







