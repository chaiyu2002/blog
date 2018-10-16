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

var precacheConfig = [["about/index.html","b4e8cc4fab40c2a2cb41f6ebe69391b6"],["archives/2018/06/index.html","b9229196190140eb5ff1305d5c1abcd5"],["archives/2018/07/index.html","404303f94d9124267597ae8bf7809423"],["archives/2018/08/index.html","fc59604aaac90ee347ec97b8124e17a5"],["archives/2018/09/index.html","673b892327e5bbae2d3c203ab37bbe55"],["archives/2018/10/index.html","562d1942cad23835e1698ce15b7a3858"],["archives/2018/index.html","1b09d4c28dbb809c03362b8efc74220d"],["archives/2018/page/2/index.html","473f091b37331f40161625b6349b1cd4"],["archives/index.html","d006da8684789a63dedb3bfaff6ef5d7"],["archives/page/2/index.html","5892ef4c8fef5050fafc834af9e623de"],["atom/index.html","dc218220fb8b64f7dd96c625a2c6d923"],["blockchain/base64-base58.html","be0ad5a108341da85aa37e3f2a9e15da"],["blockchain/bitcoin-data-storage.html","7020911037f19574fb21cf0529bfc766"],["blockchain/bitcoin-difficulty.html","c8260b96c27a4b32b333dd860c342d19"],["blockchain/block-chain-ethereum-contract-program.html","edd405892cb6e7d7a58f09bd4f055725"],["blockchain/ethereum-programming-introduction.html","1a118fd677a79ff3bd3c8e93100fa520"],["blockchain/ethereum-rationale-introduction.html","489eeab165640e9075ee6f6163331b02"],["books/index.html","94bc97fcaaf1121d7d6a870f749403d0"],["categories/Blockchain/index.html","0c03fe906b905cefa45d5364e8ad93a1"],["categories/Blockchain/以太坊/index.html","e81c7f163f727d161fbbfa44716d0344"],["categories/Blockchain/以太坊/智能合约/index.html","c8e86518eb07cfaf718fe59bfab436bf"],["categories/CSS/index.html","40e3d6f607175da1649485c7a64cf98a"],["categories/Git/index.html","f7768dc015292961898bb4ab8f863c20"],["categories/Java/index.html","b31b5d0f1bc59564dc3c18924fbf988c"],["categories/JavaScript/NPM/index.html","bcbc5d9d4983ca9c80b3db8752478fea"],["categories/JavaScript/Vue/index.html","16810f7e03e6de29f84ec6ecc114373b"],["categories/JavaScript/index.html","759ff3695d7204651eda6af3da4f7424"],["categories/Linux/Shell/index.html","b90b420c2e946daa28b21ed4d5a35843"],["categories/Linux/Ubuntu/index.html","04c8d7af12d41aaa45ca497df5ca7b68"],["categories/Linux/index.html","d3e32c63de7a9c1e640dfababb2cfab3"],["categories/MongoDB/index.html","d8d8e9696acee0d66d5dd30926c1fc25"],["categories/Python/index.html","23d798f18a03c9fdd6c5c4f5e7372220"],["categories/index.html","c24019fd3ad32e4b53e0028f0d690e7d"],["categories/程序人生/index.html","f2d3649cd5afe2089057a65699d2e900"],["css/css-normal-flow.html","521af8f451c5051f4384b00300a89855"],["css/main.css","c889721c775742f46b31908c5f37ee15"],["drafts/configure-multiple-vue-project-with-nginx.html","a2838e6ea0d995320ec20ed53470639c"],["drafts/iframe.html","db17aee47702936bf8a593adea72f341"],["drafts/record-re-install-mac-os-10-12-6.html","00e1d6e74a9b38568031cf90f026aad8"],["git/git-DETACHED-HEAD.html","328779e323a1230072027e67bc9b45dd"],["git/git-branch.html","505ef6bdceba3c7249aebc8a6806be0d"],["git/git-change-server-password.html","172fcbc07868671dc6b8d033dec86dd5"],["git/git-checkout-1.html","6f31dc3c567ddbb8bf939c1a9894ca28"],["git/git-checkout-2.html","2032f0b4d544e2424476f6ff4edcee5e"],["git/git-diff-m-symbol.html","b0eca78cbc9b9fd94fdda7213be806ce"],["git/git-git-flow.html","1fd6e9aaf21fe9e4ea9cecbcb677e5b8"],["git/git-git-merge-ff-no-ff.html","4a964ebae672aab45b3429129e4e6ee9"],["git/git-pull-1.html","110a032e59c256e88be99dd1ec131d92"],["git/git-reflog.html","66eafd031e0372b16802f4332b2d341c"],["git/git-remote-set-url.html","e2076fbe14566d12bc30740a6ef93d21"],["git/git-reset.html","ffcdaddfeb9a6541ff6d8a0d876d08f1"],["git/git-revert.html","51016d6df5821ac9a6cecabbb235a87e"],["git/git-tag.html","b4aff53596e2da38b304eafefde41bea"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e2c1954bc2b569ed0a85f055dd7dfdb7"],["java/java-deploy-resource-folder.html","76bec9f7535cff56633a41be5e8d7571"],["java/java-shiro-note.html","eb15c09f39327fead202432830eaf35b"],["java/java-springmvc-X-Frame-Options.html","78411fcae3b81fc9f4358998456a6ce2"],["js/js-logical-operator.html","2b3bc340e13b45853c20088794217ae8"],["js/js-npm-symbol-caret.html","0ebb9cbda16f415ab025802692f5ce64"],["js/js-npm-symbol-tilde.html","416edcd448e53205e9e7043511bae3ae"],["js/js-this.html","468871061d822880f0c031f9b548c635"],["js/js-vue-note-computed.html","2f0463c46fed15ce5b83cf663eaadf4e"],["js/js-vue-note-instance.html","40fc2ed8a111bfc5a013ad43dd796f86"],["js/js-vue-note-introduction.html","89821073865c0f8914e4623a8d15daf0"],["js/js-vue-note-syntax.html","d67e8b881ec6cded3162b396aa2784f2"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","5a8196a7a506199c5060db7a590c2b49"],["linux/shell-command-df.html","cca0ea4b869281599d5c95b5bdf979a6"],["linux/shell-command-netstat.html","578bfde09c427cf983b8cd9805621ce5"],["linux/shell-command-sed.html","ea91e5408b4faa4b7566a3cd05e475db"],["linux/shell-command-tar.html","4700b6e3625cb035d8e94f4db2352ad4"],["linux/shell-command-top.html","2b85762fa7624a4e682c69eb13addf82"],["linux/shell-command-touch.html","6a95add8d64fbae2a1ece618df27257c"],["linux/shell-command-which.html","f770c47d0b7fcb25b00df8d0971e4205"],["linux/ubuntu-user-add-delete.html","dcef1c20f0e0557b5304980d814dfdb3"],["mongodb/mongodb-collection-aggregation-introduction.html","9588f1e33cf07b55ac19bfacd59e3c06"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","cc2a23ef51fa8cd8fab137d38af1dac7"],["mongodb/mongodb-collection-create.html","6475e5d2167f90867909d70d17e4c12c"],["mongodb/mongodb-collection-delete.html","7856f6a49dce16858feedd74bbbbab01"],["mongodb/mongodb-collection-find-1.html","ea56f6c7b2b764a1a4aa8a373dca6cdd"],["mongodb/mongodb-collection-find-projection-operator.html","81fa4db70c19c64f6ceb59cb6568e512"],["mongodb/mongodb-collection-insert-1.html","ce7fbf17512772fc04a2bf7feeff6041"],["mongodb/mongodb-database-create.html","bfbeb0660bb9d4b57520b56e06da81f0"],["mongodb/mongodb-schema-design-note.html","7150ef4ea78da0ac443a130c0c5771fe"],["mongodb/mongodb-study-note-1.html","6a9af18ef9e64b0c84286f94f4379a00"],["mongodb/mongodb-study-note-2.html","4efe4bf3316ab197d065f1e08b53bc42"],["mongodb/mongodb-study-note-3.html","826340fec5960f15774d2f519ffb904f"],["page/2/index.html","d66246f53b33544ceb83a855ddcd2af8"],["page/3/index.html","37f186fadea71a5eff89c57ef3e7ec57"],["photos/index.html","216ea4c8402fe5331a494337a946fddf"],["python/upgrade-python-under-ubuntu1604.html","5cbdf6fe349dda0f19ca8e4727d37c18"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","e85472c13fec865f1d3f16fbcb71368f"],["tags/Base48/index.html","b40a7c6a6e6155f8dd4a1c482cf39b70"],["tags/DETACHED-HEAD/index.html","b18103213955a4831404e96ced08688b"],["tags/Git-Flow/index.html","0ba1fb6e317bfaafd1f6209e0f5894b9"],["tags/Git/index.html","5228af19c2ec0028f54a4ca179c54310"],["tags/JS/index.html","e8e88d8fdacebbdc8f83825f4d9524af"],["tags/Java/index.html","40815c03c1e9be1a7c6e99d68df89424"],["tags/JavaScript/index.html","0a3bf788342fd6e7bc68939dd27d35d0"],["tags/Linux/index.html","fbe98df9492c226da190f3c85604a618"],["tags/M/index.html","8fa67def1a3d72c05c1386bb59f27ee3"],["tags/MongoDB/index.html","ae9ee383564ef16e566483756c840be0"],["tags/NPM/index.html","1f40d943e7fc7cc94f9319cfd0ea8a5c"],["tags/Python/index.html","1a3562cb6a7bcc55d93a2fac2f531e42"],["tags/Repository-not-found/index.html","486e45c1612c918c964772a6011e98b3"],["tags/Ubuntu16-04/index.html","a9fae2c3e3bfe2fe81bc75f21c109b77"],["tags/Vue/index.html","bc5e87bcb9bb3660e99e02e4b343904b"],["tags/X-Frame-Options/index.html","c2135f60dbaa98d979977c9ae05bf1c5"],["tags/aggregate/index.html","f1424d19443de8d986479a6f303e1ff4"],["tags/checkout/index.html","2381e59ad6e00ea7e47f35219a5f6919"],["tags/collection/index.html","08836744385540c5d1911bab9c49026f"],["tags/computed/index.html","d8106b2eb794acd9f09d7638e75600b3"],["tags/create/index.html","439d5ac52a9dedf7aa53a93e87677fbd"],["tags/database/index.html","149e5a2a079b5f92c9c2c25d28e3ae8f"],["tags/df/index.html","963f7a2c441df8122fbe7fa25f92bd73"],["tags/diff/index.html","8e0a81301e1152367d71c554b7608748"],["tags/fast-forward/index.html","5e753e1d6a01a7cd5f83451bceebfa60"],["tags/ff/index.html","d4c199a35888472f5027a7f300cb4cc3"],["tags/git-branch/index.html","2a8483f7fc64be666239fdafb2458415"],["tags/git-merge/index.html","bed98ec6091e566006a67e09ce55d421"],["tags/git-pull/index.html","ff3bcfd2ef9c0f892e3e075dc30361d3"],["tags/git-reflog/index.html","a342740817ac08342bebd113988c46d4"],["tags/git-reset/index.html","37a5933b3f2afeb8d66c2ca15eb8a0bc"],["tags/git-revert/index.html","99615b8d9934a032913eba6ec7d1ecdc"],["tags/git-tag/index.html","3de5e2d288f06254b2360ae16b4a9a57"],["tags/index.html","0fc314adae2e121eb57b3d3216e616f3"],["tags/no-ff/index.html","9ab655ce771011093477c7088e33522c"],["tags/schema/index.html","3a040e69c07894ed460d548c46fbf6f9"],["tags/shell/index.html","2ea5eb20deacc29cd81ed3c7a78ff075"],["tags/shiro/index.html","2a31d611b9119ebf5fbcd408c8f82db8"],["tags/this/index.html","0ccac2313e96a5cc2cdc68572cc783f8"],["tags/tomcat/index.html","a25ecaaec156fc6a3532840f3bf22aab"],["tags/windows/index.html","62f8eec220b22011ce656dfc71caeff5"],["tags/介绍/index.html","ea9858e3bafdbdb6e4c52840834ba76b"],["tags/以太坊/index.html","f495e93cabef09e664e03ee219284213"],["tags/依赖包/index.html","5fac14d7a595c5a9355a4cf7dc63370f"],["tags/修改/index.html","6e7e2826858d879b12de96e1701593a9"],["tags/分支/index.html","7e2a35b647f71ff45faa7d601509a76d"],["tags/创建/index.html","a677688a11e521a6cdfca4b09c5225fa"],["tags/创建数据库/index.html","89988e6c4eb30d2e438e25632b6a5ebb"],["tags/区块链/index.html","5e6f02d248c2c5448eac606c9a20b056"],["tags/升级/index.html","69cb744a79cb15ac74746724559bd263"],["tags/学习笔记/index.html","8c983bd85bad9414b9c0befa2f017964"],["tags/实例/index.html","5034b8434abeaa9449db0c4c6448f392"],["tags/工作流/index.html","7893aec593479985064fc2221fa7eae4"],["tags/插入/index.html","ace57b8e094c6f20b451b3fdac1b02d4"],["tags/数据存储/index.html","b1593ca8658a2192aae9219bc3fce90c"],["tags/数据库/index.html","23838a21dd43fd1481644bafc8dca042"],["tags/数据集合/index.html","f9e046da87b07b725a416755aa14b6c5"],["tags/文档/index.html","2ed0fade346fd703143374a839ac0541"],["tags/智能合约/index.html","5bacfba3a1ec0e6d8abd39b24165f4f6"],["tags/标签/index.html","5caf3636f94ea0a42828ee76ae5cdb15"],["tags/模板语法/index.html","53dacb0ff34717f9cde6462c6d66998b"],["tags/比特币/index.html","d2fa408157354cc262f4b495fe32487b"],["tags/波浪字符/index.html","91dd69e127c314dd950bd3220b6d9dac"],["tags/用法/index.html","2888f7e15032294d8d49f0a7379e9329"],["tags/笔记/index.html","1c22b076055c36daf0fb4765c7a9397c"],["tags/符号/index.html","06a52487cc677278368e48532490cb01"],["tags/编程/index.html","23163ec0421742945fd5ed2bcf0a4d95"],["tags/聚合/index.html","24179f2e544d4c804bedd721688ac56a"],["tags/计算属性/index.html","f1ae30b4a2d2498124d36b4d3fb7f777"],["tags/远程仓库地址/index.html","b835be81285efba5718f1a6e7bd348eb"],["tags/逻辑操作符/index.html","5410865cefe6d9eac8f49e5053f61213"],["tags/部署/index.html","d6780cd33cfd1b46bc4e720484895cbb"],["tags/难度/index.html","251227c71ab1f1578abe51177afd259a"],["tags/集合/index.html","b00b58e235847f80920e11c8c85ad113"],["thinking_in_programmer_life/full-stack-programmer.html","187136ce9a8eea9637ffc38820909296"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







