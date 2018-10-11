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

var precacheConfig = [["about/index.html","d241a8fac89c68ed6edd4fd6e206c571"],["archives/2018/06/index.html","b91b34b923390459dad640803aadf99e"],["archives/2018/07/index.html","9608751f0ebb97bb9d25490477b97581"],["archives/2018/08/index.html","72a0c4c5b3787c5cf3771fd2921656a7"],["archives/2018/09/index.html","caa5d0e919dadf475fca5441a7a547e9"],["archives/2018/10/index.html","2ab6010472d334ccebfb25483cafa8c3"],["archives/2018/index.html","91a51e70f208c4ec3dcb905fce9407dd"],["archives/2018/page/2/index.html","8a6cd3d848258035d3eed88eb906093f"],["archives/index.html","903f79cd88a929c01c08055b999b6583"],["archives/page/2/index.html","bcb456a4c4237042be54cf44fdef6107"],["atom/index.html","32b9d4a2eed953a9a6d8e2683fec4634"],["blockchain/base64-base58.html","11aa12beae6822e57ae93866234daedd"],["blockchain/bitcoin-data-storage.html","04bad5ca3fe462406f7cb82098e1c678"],["blockchain/bitcoin-difficulty.html","ae3da3cb5c01cb3b20a448e9d203f90d"],["blockchain/block-chain-ethereum-contract-program.html","40c37b0a1426e2dc232632197aa9d97c"],["blockchain/ethereum-programming-introduction.html","59d4eff7c220da99c3a4f91e3fff12d0"],["blockchain/ethereum-rationale-introduction.html","f370738c29dfb3990bc4a2943d36c663"],["books/index.html","fd6fb091c1387580a36633f0d2816088"],["categories/Blockchain/index.html","7210476e8a2e13799c9ffbc58f393bbd"],["categories/Blockchain/以太坊/index.html","6573a130adbd6aa7e5c8f49547581cdf"],["categories/Blockchain/以太坊/智能合约/index.html","a417d90d1c4a00c97d87593b59fcb4cb"],["categories/CSS/index.html","12e4d1421329a27fa0dfbfb4fcf18699"],["categories/Git/index.html","2d97c7ea38fcbf72eb76031508c0fc49"],["categories/Java/index.html","bc03244ca7f6d049c4c80ff18760891f"],["categories/JavaScript/NPM/index.html","0de2d368f0ca2aa2c18805094325de65"],["categories/JavaScript/Vue/index.html","0d7ea0352e88949f906a67cebd52c7ad"],["categories/JavaScript/index.html","acf422714c797f51c123a9f1fbed7f36"],["categories/Linux/Shell/index.html","8dda30b9ea031569944f9db5c1e65ffd"],["categories/Linux/Ubuntu/index.html","3a20fb7a3348ea10029885bf408a13b8"],["categories/Linux/index.html","c4f444020cc07617340015b93bef3aa9"],["categories/MongoDB/index.html","f1102164c66f91d40e2c0adc5a6aae95"],["categories/Python/index.html","c42f6b30300c8be55ca3fefbdbc82ee2"],["categories/index.html","b3684aff4947d5370db51cf5c5f607d4"],["categories/程序人生/index.html","82196c4b5f28ca1d4127da720c22580b"],["css/css-normal-flow.html","bc381b68db134bd76f5cdee820e0b309"],["css/main.css","49ba056bb0e9697e713ee37acbc199ba"],["drafts/configure-multiple-vue-project-with-nginx.html","d6e4b3ea98764be86698294283b74881"],["drafts/iframe.html","1cf5f5adfb28a772addebb9101e16c56"],["drafts/record-re-install-mac-os-10-12-6.html","0f4a3bcf00e14f7b9cb13bde81f55931"],["git/git-DETACHED-HEAD.html","60df1ae0f4149d9bb83620af3fbb9d2f"],["git/git-branch.html","1c20954ec904978792ab49584afe84d5"],["git/git-change-server-password.html","0891353a094728d83245cb341bd78a24"],["git/git-checkout-1.html","bec02b7775cfe0720227d807d99b1b2b"],["git/git-checkout-2.html","bde98c242b59b8ed162a4e8f339139fb"],["git/git-diff-m-symbol.html","39ee6c8d5fbe1f8bfc6cc62b2e0c7d2f"],["git/git-git-flow.html","0443b8c09ec617f718a888038d5caf02"],["git/git-git-merge-ff-no-ff.html","a34e08af5843e6e42da96e13c3bf5756"],["git/git-pull-1.html","fdd86cfb9f633c5e52ad3700aa78b9cf"],["git/git-reflog.html","033ed6a340aa65b8f1822edd91d6ea21"],["git/git-remote-set-url.html","15ceae80d2fc8d08418cf907cd71f672"],["git/git-reset.html","eb8cfc19ceb05165532ab3acdf258474"],["git/git-revert.html","7c6082328e207c987e2de106621132e2"],["git/git-tag.html","a9c39e49fd20ada0fc16d86ebe9a0951"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","0ed098dab047d4e7e23cadb8bff413bd"],["java/java-deploy-resource-folder.html","f2b5a2bfb6399c6053316793fda2bdc8"],["java/java-shiro-note.html","99c7e55836faaaf34e15fa4dc1466c68"],["java/java-springmvc-X-Frame-Options.html","867444bdc5f9ed02ad2efba605feaf97"],["js/js-logical-operator.html","1a13bf22455c1e4e52dddfa869dcd178"],["js/js-npm-symbol-caret.html","84b5295cfa09e2abc20a0133a0930902"],["js/js-npm-symbol-tilde.html","17b850a45ab4bd9b3eba7fda78bf2e0a"],["js/js-this.html","02ee63a7650a1a8f488d7a4b5d0b40b3"],["js/js-vue-note-instance.html","5cf0702170fd55af59590ea88a829a81"],["js/js-vue-note-introduction.html","88ab6c25335fc28b8e9e3b16c607ee99"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","aa5bc570ac1ba8c8adfe495ed4087eec"],["linux/shell-command-df.html","43a63743556d1863a1dbb88ccec196cf"],["linux/shell-command-netstat.html","9f49dca3bb0616cc48f3483c6503ce14"],["linux/shell-command-sed.html","7e356f959dd9cd962e4b25206b13dea5"],["linux/shell-command-tar.html","9635bc90e769c1bb02f64b4dc3e1d443"],["linux/shell-command-top.html","4eeb818ee471cffe8973d6cc2bb66098"],["linux/shell-command-touch.html","d8027e4ae60dd7f61eb925f31d8f3266"],["linux/shell-command-which.html","3b9189015273802904e608c2b4ae167d"],["linux/ubuntu-user-add-delete.html","1a1f982970c8d2d81be6f7ab651f6433"],["mongodb/mongodb-collection-aggregation-introduction.html","784798adf7e1d6f61da16ef2f0a527fb"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","9ef4aa05e8c6bc2ab03dc6d51f0e2aed"],["mongodb/mongodb-collection-create.html","b75989c87ce7ba1b17a9613e77eb136d"],["mongodb/mongodb-collection-delete.html","05e70f6441c556e8c4f6ecd3a6204045"],["mongodb/mongodb-collection-find-1.html","812c9ec6f856f5faca0d0d35d4758d1d"],["mongodb/mongodb-collection-find-projection-operator.html","1445cf6d17b45d0f9dcb9f3f7fe63925"],["mongodb/mongodb-collection-insert-1.html","ece014479f649693bd7b362d68f45bcb"],["mongodb/mongodb-database-create.html","daf0dfcd25343ccafb8f9bee1ee0ade4"],["mongodb/mongodb-schema-design-note.html","9c3ac8d47714964e146b9679434a89e4"],["mongodb/mongodb-study-note-1.html","512e7676b875ee98a73b9725f91d2a10"],["mongodb/mongodb-study-note-2.html","5005a59c664a3ea29d109a1859fba5e8"],["mongodb/mongodb-study-note-3.html","73d2382265923bdd8d3ca236697e5444"],["page/2/index.html","5abb4cc756e83175015ab3c9ead5d572"],["page/3/index.html","7558a9bd9ddb665747a48ac1fc0c51c9"],["photos/index.html","4a84149ecb01d3252e17d2bab95474eb"],["python/upgrade-python-under-ubuntu1604.html","2f8c25c587a94db484f764fbab46e4ff"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","77a44a14cd5fc0bc351f218493381a56"],["tags/Base48/index.html","aa1ee9266d4463af74064eb2dda236df"],["tags/DETACHED-HEAD/index.html","8f21909343c0d92970ee89b915af9994"],["tags/Git-Flow/index.html","b65450e5fce446a9f75684aabf52605b"],["tags/Git/index.html","85ee0644a8cad34d3caf18bbd39a7813"],["tags/JS/index.html","967b45115f321bb5e5c2115a4e125ab1"],["tags/Java/index.html","b8b6ffba6ef924d14798598343a7bfba"],["tags/JavaScript/index.html","43b7826c8d31326812f5ba59b3bad66c"],["tags/Linux/index.html","920669e51b9f3ec98a514f26664b8824"],["tags/M/index.html","ff3b5cf065cd40b9f8bc89992e9d777d"],["tags/MongoDB/index.html","34d296c31967675d946b035080092cd5"],["tags/NPM/index.html","11832b10fd70be9dcffe01637bf1af4e"],["tags/Python/index.html","8a1dcf2ceb8fc1b8420d31dc2cff4803"],["tags/Repository-not-found/index.html","73496d27d763014e9714bde5a7c66414"],["tags/Ubuntu16-04/index.html","2c23f00044035c18d75b1087f23626d6"],["tags/Vue/index.html","8f7fbc0fc9df69bf189f31ab4889582c"],["tags/X-Frame-Options/index.html","43febf5742ce2213e53eed26799ec0ef"],["tags/aggregate/index.html","9a11e4436395dbdbda344142116f8b60"],["tags/checkout/index.html","b7e2c9dbd13072cd67eaeb27d7cf0211"],["tags/collection/index.html","e512d549328ae47da8b5607b502e388e"],["tags/create/index.html","aeb1a9812c82ae11cb73f793e97b567d"],["tags/database/index.html","db6b38826b81748cef76142996f85be8"],["tags/df/index.html","baad381ca89aa03a81564ebd5bd0fd33"],["tags/diff/index.html","688ae3a939a0779cdab5e36f3762f0a3"],["tags/fast-forward/index.html","364b4b5b2ccc4d036a7513982aa5c736"],["tags/ff/index.html","55e0d694c00affd8c6eba7b6201baa27"],["tags/git-branch/index.html","3cefeda8f4dace3b2fda375a0215a01e"],["tags/git-merge/index.html","931547d1d7f715245e292ac1e06118dd"],["tags/git-pull/index.html","ec18916e68f3740203012e387f85b0b0"],["tags/git-reflog/index.html","a78dda6cdcc1d137cb722c98fefd182c"],["tags/git-reset/index.html","680db4218041a784bcf632373a0074a8"],["tags/git-revert/index.html","6b2e43c78db1d2f034352d148bd4ebc3"],["tags/git-tag/index.html","cd3c3d484f8661d4e6e2c541a8a22c7a"],["tags/index.html","4c44d542b363c991a8b5e172210d163c"],["tags/no-ff/index.html","ab574e0024c4f29457ed8a7e949404db"],["tags/schema/index.html","ee8a5608337f699edaf3669429d08d9d"],["tags/shell/index.html","5b986da7f4c28543f33a77845b614329"],["tags/shiro/index.html","4b42f0c19fed5e8fe171cba86480e928"],["tags/this/index.html","c1711a5657bb4bea2f063da7b126da7b"],["tags/tomcat/index.html","045a02173a9af74180e29ccb5fe229c9"],["tags/windows/index.html","c52bb2bf3838026ace7d82a6f7568531"],["tags/介绍/index.html","f95223a9dedca699c4260861f5c9f88b"],["tags/以太坊/index.html","26f70ab86a56617445b1f99d3d5c99e7"],["tags/依赖包/index.html","c25f84f303e064f022101d4dd9f912df"],["tags/修改/index.html","00f5fac0c4d591e0c9334576c570574a"],["tags/分支/index.html","d1425826c90f363092c92afe8ce5db00"],["tags/创建/index.html","4c176bb6dfb7761d3ed2400897a01c55"],["tags/创建数据库/index.html","dbd4c9c7fc630f3d00f70a03cd0bd524"],["tags/区块链/index.html","ad41e36bf2485d4fc12d6fac5daf8420"],["tags/升级/index.html","d8aaa3785c7d7cbd6127d0a2966c2e35"],["tags/学习笔记/index.html","bd2a423dec9a76adc7b5f432921a246e"],["tags/实例/index.html","95630f24a7c89868d710c0aafddb0635"],["tags/工作流/index.html","b9066f9d09dd0a6dad1c3f19f924649a"],["tags/插入/index.html","be9e6836c75c626f67b3ede752c2d6c1"],["tags/数据存储/index.html","f3a656ad098422e14a4ecea62c6465fd"],["tags/数据库/index.html","73ab4852a26b5afe99558b78da0ba3ac"],["tags/数据集合/index.html","49d9d7db742a72682be6697da89a7b5f"],["tags/文档/index.html","73823a6f31564c4747d1e69aed16bb8c"],["tags/智能合约/index.html","2a42aaa1d2d1e3e65e0c07c62de6054c"],["tags/标签/index.html","be1241edf815403b2b702fcb0f2f9740"],["tags/比特币/index.html","a7c8e2c0ac75282c83d55e5f28c57da1"],["tags/波浪字符/index.html","41e5418b63937ba6ae8df4cdde8c9033"],["tags/用法/index.html","b0d05d1dcb3d801d93946d9901367558"],["tags/笔记/index.html","6a4fb8a96aa04448d10031ec99ad9534"],["tags/符号/index.html","2ed3f88809e9c09271b49eda2440b2b0"],["tags/编程/index.html","756b41839bb8b88f79164f55cfcd6add"],["tags/聚合/index.html","2d5d85da0ab46b1337bf3a646367a4a9"],["tags/远程仓库地址/index.html","4f608ea2b9a71e19591b7d467c497b2a"],["tags/逻辑操作符/index.html","4c9fd20b07dfc8d1939b22fabe106271"],["tags/部署/index.html","5758112b986f35a9deb0ced8a50a5d3e"],["tags/难度/index.html","c9ffc5882d4a85e5bec4b8821ccfb4b0"],["tags/集合/index.html","615548d1ec83510b73f912aef3cda0ea"],["thinking in programmer life/full-stack-programmer.html","9c8c237407e70ae1de31fd5252284788"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







