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

var precacheConfig = [["about/index.html","9950fbbdb9aa6e9ef496f2e8764d9bc7"],["archives/2018/06/index.html","8b83a75cad98547119ddd6a974f70817"],["archives/2018/07/index.html","65a69676ead33faf700ebf34ed933da0"],["archives/2018/08/index.html","c1e8ba510a03c52c95506c51b058ed83"],["archives/2018/09/index.html","127f9e032112ab82c1ac8992079d745a"],["archives/2018/10/index.html","ebaffc72a667d9ea7565b466da3f7844"],["archives/2018/index.html","90ab0fe3122edd905d10c6fd702c9e2a"],["archives/2018/page/2/index.html","771f360226a00acc4aa0ab3bf09d48b4"],["archives/index.html","20a7b291c7cd014f05cf978aaf3caaa6"],["archives/page/2/index.html","c0c3cab9bf8f2f2003c5a66cf69903eb"],["atom/index.html","f8916f58cd9303c129d11b03d09970bb"],["blockchain/base64-base58.html","b12c09f1735648fa19bda99b0df8011d"],["blockchain/bitcoin-data-storage.html","3c743e5881f4ec305cb72f5669743660"],["blockchain/bitcoin-difficulty.html","a8fdafab8d3cd2955a6af94cdfc726ed"],["blockchain/block-chain-ethereum-contract-program.html","1d5d3e911d47854389fcff40cd9ac729"],["blockchain/ethereum-programming-introduction.html","f515a20ae80365d30f2ad4bca34d534d"],["blockchain/ethereum-rationale-introduction.html","b1aa7df4550741304fae5bb3e4d8504e"],["books/index.html","090236a1eb58941a2d5b98c6847a47e4"],["categories/Blockchain/index.html","900aac017b8a9a0ff115a63f5164ecf2"],["categories/Blockchain/以太坊/index.html","4e7568e27968b43326fdaa0819e4e4fc"],["categories/Blockchain/以太坊/智能合约/index.html","e7dde41361c814d690e5949c46d5590a"],["categories/CSS/index.html","a21e3d14a6d7ca79fc46716fb51e00fd"],["categories/Git/index.html","f6ea3d610778bd02972402936d0350be"],["categories/Java/index.html","95e7cb1323ecc6bd395a21086a336e68"],["categories/JavaScript/NPM/index.html","75edcb8b3694a420202e4ec6666e9671"],["categories/JavaScript/Vue/index.html","f43dff3b8d287bca0d8ff6496c138ef5"],["categories/JavaScript/index.html","80d791216980c1ec51c6ecc5b058daa6"],["categories/Linux/Shell/index.html","593aea57428cecdf43895be85509ebb9"],["categories/Linux/Ubuntu/index.html","e68d303327221e6a57ad0c56fc9841a3"],["categories/Linux/index.html","f2ca8e9b05a56f9c19fcd87370f3df41"],["categories/MongoDB/index.html","3559347c697c807f4897b9e42b888227"],["categories/Python/index.html","619b232f66b2b15c9e6f2204f806425f"],["categories/index.html","771e9adeaff58180d03076345c2d481d"],["categories/程序人生/index.html","eefcf697f863efc42349765eb031bfa9"],["css/css-normal-flow.html","0fd99f2d7a59d9a654447725d4d8a2b3"],["css/main.css","f6ce11cefa7fd24bc3ed2f55bc6d1115"],["drafts/configure-multiple-vue-project-with-nginx.html","2745de93427d3b4d34395d1e6eb7a890"],["drafts/iframe.html","599f667d76456cd0fa31a8a218451e22"],["drafts/record-re-install-mac-os-10-12-6.html","402931878aab2f647d02d9106ff62b58"],["git/git-DETACHED-HEAD.html","372c1d65a06b705a2f845121917df2e5"],["git/git-branch.html","9de4396cd85f5f9c69ff3027dba91c3f"],["git/git-change-server-password.html","055d8b0ff9274cbaea3915469eafc519"],["git/git-checkout-1.html","fa1ae84a772c7a7dc096c3da08a542a9"],["git/git-checkout-2.html","f4ae5f394fa56719a16807347f738629"],["git/git-diff-m-symbol.html","a2d8af55fba6ad8c115a369e725acc3e"],["git/git-git-flow.html","d349872d7f10b85accf5d6e4bf459f89"],["git/git-git-merge-ff-no-ff.html","75f35b97520924e8951ef6b7da319595"],["git/git-pull-1.html","2ddc18d44c867c1449ab773f033dbf4f"],["git/git-reflog.html","225ddd4dccc547e122282288e25fcb3c"],["git/git-remote-set-url.html","a6b69617ad082fab6fe0584cc02c5d3a"],["git/git-reset.html","9dd3b12a793a0edee22725c422241f49"],["git/git-revert.html","661e40ceb156651701a6a95992c98a7f"],["git/git-tag.html","f6b2c359c1d31dc1ebeed8847e57c85d"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","d6c7607aec0ab31fe280e99c7aa8d2f9"],["java/java-deploy-resource-folder.html","ffa1638d7e95966f83792a058d61ef03"],["java/java-shiro-note.html","bb7455883673e3a7aafad7db67f157a0"],["java/java-springmvc-X-Frame-Options.html","05b4d91b1df583fed03727a1c172160a"],["js/js-logical-operator.html","494d39ab0e1857d1d4d21133dcea2c4a"],["js/js-npm-symbol-caret.html","350fb6d4f169be540c8f7fa8f4dab35d"],["js/js-npm-symbol-tilde.html","3b45a0e9e17a1fc47c1919916db95668"],["js/js-this.html","734a9040d02b7cc6460ff300b9ed7a90"],["js/js-vue-note-instance.html","5ca6502fd0d8b218683c582ad975ef43"],["js/js-vue-note-introduction.html","82d5d9724e16a005a7de41636695aee4"],["js/js-vue-note-syntax-1.html","9a42a54ff0672190c14630d915a64b94"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","984538ead70d99a6ab1d84a8a1dac316"],["linux/shell-command-df.html","f8fce3debaa534670f6d665847c51069"],["linux/shell-command-netstat.html","8bb0df433bade395ab73e6c235a5be24"],["linux/shell-command-sed.html","ca7170bd2cbb674b66568d9099547fae"],["linux/shell-command-tar.html","3cd1f37fb9465af0903ac0b1dda4b0b0"],["linux/shell-command-top.html","60f89c6b72e2619d739765485b965fd0"],["linux/shell-command-touch.html","07ba50c564d469145025756382b762d3"],["linux/shell-command-which.html","7e1943b325f13a8d6f2a1c9e595bcb89"],["linux/ubuntu-user-add-delete.html","a2cd6c76e913bd46e50bc689b72a3a3a"],["mongodb/mongodb-collection-aggregation-introduction.html","d23fdbe548cd8ca3d65288023d69e660"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","2dee56ac3142d15b1f6be753cd6b8db5"],["mongodb/mongodb-collection-create.html","378ed8f203d23aa4ec367228288ba0b6"],["mongodb/mongodb-collection-delete.html","8b54bffee2fc21960d43eeb43a079761"],["mongodb/mongodb-collection-find-1.html","00c66b77811ba06c4693500ad31786dc"],["mongodb/mongodb-collection-find-projection-operator.html","575b3b28d8f25374f39ed321d7ca71b6"],["mongodb/mongodb-collection-insert-1.html","0b69fe7195eb72b0ae4d199b9cb6a871"],["mongodb/mongodb-database-create.html","fe258e4bd2352d487f42992021fd721a"],["mongodb/mongodb-schema-design-note.html","f240a04684f42b9f0e3889377cefca77"],["mongodb/mongodb-study-note-1.html","b0d3bde4d52644202134e6687680e687"],["mongodb/mongodb-study-note-2.html","3871fbf9ab5ad111299116d589dfed05"],["mongodb/mongodb-study-note-3.html","894801dac0d682f07558f6585bd6cac1"],["page/2/index.html","d4d4d5fe4b05b6d6d8a706738469861c"],["page/3/index.html","b3e0e7ae5ac134a8d884114948b0f1bc"],["photos/index.html","89273860a658735381ac4b2010a6be17"],["python/upgrade-python-under-ubuntu1604.html","a82933ce4f931888b74f06307ac3540d"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","a82871d8178776675f8b4edd88885efa"],["tags/Base48/index.html","9c150bfaaaed92d197b6bd9a914a4ff0"],["tags/DETACHED-HEAD/index.html","448420e6885498e9694511e69e867553"],["tags/Git-Flow/index.html","6a66026918dc3ecd5da1c2eba7d89d34"],["tags/Git/index.html","10e3d5499c43103bc19a6e94bd10a950"],["tags/JS/index.html","60cea356ca50b5e41b39bad593ac4efc"],["tags/Java/index.html","0afca92837410a8a149a3f8ad304bf73"],["tags/JavaScript/index.html","b2b3cfa05485fc4f2194af43445b603c"],["tags/Linux/index.html","e1fbdc219df164c83db0df4406651c5a"],["tags/M/index.html","297906e14309d968a22224b6ccf00b9e"],["tags/MongoDB/index.html","a328ec92d1eb173c9b1651f52132988b"],["tags/NPM/index.html","b48b87d30e1c16fb9615d9a3294b5a7a"],["tags/Python/index.html","f935b74e7020a0493ec3d386b7c14a00"],["tags/Repository-not-found/index.html","1eedb2f37daa2e7a1526ebf8162b5392"],["tags/Ubuntu16-04/index.html","bb4db9fa7027eba31851b4d03fa07320"],["tags/Vue/index.html","afff68af8d053f7a1266b438871a8edf"],["tags/X-Frame-Options/index.html","e87680c3536252276a60abb80d363119"],["tags/aggregate/index.html","e0d9dc8a4429cfdb2ec85c8dc237a11c"],["tags/checkout/index.html","4f0f1d6f78a11d4e3cf911b9faedcdfb"],["tags/collection/index.html","3b2cbb1e75be0eaca9137cfc43d27d27"],["tags/create/index.html","a96a5aa0f0ce5aa781abee640a44c7ff"],["tags/database/index.html","f4e682dc1237b66a97e7635ffe0e3d43"],["tags/df/index.html","07989165af5f16642dd400ce14ce8db4"],["tags/diff/index.html","d4263c862a068d3a1437877742eabc93"],["tags/fast-forward/index.html","89bcedb1dcf4d9af97d93bf3a773b807"],["tags/ff/index.html","9809244463816de44867d9546e286883"],["tags/git-branch/index.html","d34d8d4df3db79f3188f2759555f94dc"],["tags/git-merge/index.html","a77ce9d498d74698beae48f489f4fee5"],["tags/git-pull/index.html","aa060704dea3735a1781c4d00a201d53"],["tags/git-reflog/index.html","4dc3f7d86c22a700c7111dc96a8d4353"],["tags/git-reset/index.html","805716ef5b09b1cd3b3cb5c9f3f90dc9"],["tags/git-revert/index.html","f5d930dae253dea1c4a74fce806cc7f5"],["tags/git-tag/index.html","6c4225f2c15a695e4d4fcbb96367c9d5"],["tags/index.html","48fb3404ec93f9de3b40c89aa5472313"],["tags/no-ff/index.html","fcdf1711bd4dfdc95989180083cb1119"],["tags/schema/index.html","5106d77756bdff2256296d077a6f1059"],["tags/shell/index.html","33db8728ab518f5c2054cca6af815215"],["tags/shiro/index.html","a5635756d947b05161db915e6971da27"],["tags/this/index.html","5c170d60b10edd6548eb0385dd8afc76"],["tags/tomcat/index.html","617e30b5f27818c021fb265b4d021360"],["tags/windows/index.html","ceaa445ff382ec67f015160f03fec49b"],["tags/介绍/index.html","52b9a6c8be19ec6a76ad364ac071be75"],["tags/以太坊/index.html","9ef8812ae290d9f34b2f81ec7f4d00e8"],["tags/依赖包/index.html","7bfe65e82fa5e0b7815cdbd8740bc54b"],["tags/修改/index.html","dced3e1e5beccfd9c64fda34cad04be1"],["tags/分支/index.html","a73a71898b2381f481b0c7da122e31c1"],["tags/创建/index.html","205632453841747363d0505665b3918d"],["tags/创建数据库/index.html","46bf38ab16a37a909808c5652cd136cc"],["tags/区块链/index.html","4527413bb11d505954402518a70a181c"],["tags/升级/index.html","f6754cbb85fe3bcf491177525b1adcea"],["tags/学习笔记/index.html","e288c3018d884ebe47223fc4df859f9f"],["tags/实例/index.html","ba7926c0371aad557a1d6bb1a684d037"],["tags/工作流/index.html","1bdd68f105597bdcc1e3bdb59977586d"],["tags/插入/index.html","b93dcfba1393abb80e93878e68af49a1"],["tags/数据存储/index.html","56ca950f2caf9a440017afeaeb9119e8"],["tags/数据库/index.html","414bf451dc45d426168c706e04cf441c"],["tags/数据集合/index.html","c640a427b3da1ddbaf9c92e2c03fb285"],["tags/文档/index.html","f2bc8dad15023602877ff723b0149b95"],["tags/智能合约/index.html","9ae30869d03c4cb991b0169216ce4741"],["tags/标签/index.html","b527e6f2937bc0c7fc53337e5ec78947"],["tags/模板语法/index.html","1475895c61738d66572f370cff12ce6c"],["tags/比特币/index.html","2a7ffd789a8cd559c8b3fc59682a6eb6"],["tags/波浪字符/index.html","f09e8ba64af2afd9525873807b0579e2"],["tags/用法/index.html","1d78fccbc4c394c808822be0a6757ff8"],["tags/笔记/index.html","1bb33ceb7a154f2e94ac0974f04ad57d"],["tags/符号/index.html","16a5f97ea17fee49d92a386bfbe5e232"],["tags/编程/index.html","6a3a086731ecfce7c5e68745d80422fd"],["tags/聚合/index.html","fe21132776e3fc2e272896aa1a600d88"],["tags/远程仓库地址/index.html","9546ce317f65e2b53ce71c486e7c1554"],["tags/逻辑操作符/index.html","b190b8784fb972a67ea6b7c9479206e2"],["tags/部署/index.html","d7a0c6a560d8b60ef4eca878969f8c9c"],["tags/难度/index.html","f5f5c8b3e576db967122398d39e02be1"],["tags/集合/index.html","63a38ff509f4d6112243452c6b3775d6"],["thinking in programmer life/full-stack-programmer.html","e27f87e483ae3e1b0b9d9241aaf189fc"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







