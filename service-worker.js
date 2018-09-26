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

var precacheConfig = [["about/index.html","eb6d50c15290f4c0df63fd3a42a80441"],["archives/2018/06/index.html","d8ab6fcf7eb997e95edfbb7eac679515"],["archives/2018/07/index.html","683af5f4afafdf34d0284c4ea0c95ce0"],["archives/2018/08/index.html","719f682e17a45976773fc91b0608f39a"],["archives/2018/09/index.html","d7c2f9ec647a346ccfd845b606a9b020"],["archives/2018/index.html","d175f351f78ae76de193d8d7cfc259c7"],["archives/2018/page/2/index.html","96aa98e6f8b9c95389f24b30f6baa385"],["archives/index.html","a962f698db856b41c006ecbb9963c1cf"],["archives/page/2/index.html","e748b8aed260fdc73d8691cfe55cfb13"],["atom/index.html","fb343421720b3c7ae5900713e998268b"],["blockchain/base64-base58.html","5b6fee0294eb58784f4feda73bab10d5"],["blockchain/bitcoin-data-storage.html","1fb7fedaac5b688797b1fd16e8cea891"],["blockchain/bitcoin-difficulty.html","c2f6384d18afb4f422db76c5daf373fa"],["blockchain/block-chain-ethereum-contract-program.html","5cd003f8bd595a839f7a2f589fde5808"],["blockchain/ethereum-programming-introduction.html","00493b1899735574f492a84f39cc2f8c"],["blockchain/ethereum-rationale-introduction.html","2a9fed2a9625ac2cbe0a5882c620ab47"],["books/index.html","98766b6b24fbe81b5219661d12cee17b"],["categories/Blockchain/index.html","fd417a9d3b811cebe93f8e58ed646f15"],["categories/Blockchain/以太坊/index.html","a5aced803d2e8a0a6106f1225868cd7e"],["categories/Blockchain/以太坊/智能合约/index.html","024784094b9491c555f46cd25a514be8"],["categories/CSS/index.html","17cea44b7244a70c36148c9a3d0fc6f9"],["categories/Git/index.html","340f02fda77f8cbdcdaafcd15193b39d"],["categories/Java/index.html","dbff830489c2337eb8318adeac5d1d0c"],["categories/JavaScript/NPM/index.html","284e57e63f94b5cc6140a63050462281"],["categories/JavaScript/Vue/index.html","9d0a3a1c08a4d1234ca08327adaa6333"],["categories/JavaScript/index.html","520cee9031fd4bb1a7906480dfeaf7dd"],["categories/Linux/Shell/index.html","79f6fb0d88507078d73bc0a6dfab900d"],["categories/Linux/Ubuntu/index.html","0e140eaa35e361002afe04b9dfaa628e"],["categories/Linux/index.html","f76a8882c9b5f2641ed4e556e9a71de2"],["categories/MongoDB/index.html","0202e9fa77b6e1c332b9fc2b9f5c526b"],["categories/Python/index.html","4070a28662b36056bde7413af716aa0b"],["categories/index.html","32c409bb4f150f8cea8161013d049860"],["categories/程序人生/index.html","e94b9bf719164983d32becd50cd83088"],["css/css-normal-flow.html","982f70aaaaf21edb133a74eaaaecbc7b"],["css/main.css","398c375a3e967fb8ab172e1144850120"],["drafts/configure-multiple-vue-project-with-nginx.html","e720cb3aab2f49ad57a8b4b10782f446"],["drafts/iframe.html","1cac911b50d9cc0ee112d4fb08008386"],["drafts/record-re-install-mac-os-10-12-6.html","0ee2f290ea882722c8fde0537e027d5f"],["git/git-DETACHED-HEAD.html","5aff8d0067fa98a6f29828f50fa8777b"],["git/git-branch.html","0dcd8709618b17d7c7b02caa9f6b1b4e"],["git/git-change-server-password.html","0b533cb26804d2889531381a031a146b"],["git/git-checkout-1.html","bcc277ec1cd5e144523c8054697b06a2"],["git/git-checkout-2.html","c3620bb5f800b4c0363364536372010b"],["git/git-diff-m-symbol.html","0b7082a148dd7699498278274e40cff2"],["git/git-git-flow.html","400c9970f20ee2c76b41d52b6cc7ef25"],["git/git-git-merge-ff-no-ff.html","ea25cbe32e2b53985072579928257411"],["git/git-pull-1.html","3a3c079d22c0ad10c314f41cc8e888bf"],["git/git-reflog.html","0ed1ec46f52c663a0114b6fd481a60e6"],["git/git-remote-set-url.html","0c6a6d216ac7acb4e072afe256479748"],["git/git-reset.html","f98af67e35c5c719bdf7ee9ca4efe0d1"],["git/git-revert.html","f06581eddb0944403201b2ec740b45af"],["git/git-tag.html","4d9b754b378efd52e0ef25ccfdc4f5e3"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","8bc7a194cd04c1ed08e5c967370336c6"],["java/java-deploy-resource-folder.html","d0305765706de87995df85d0903b3309"],["java/java-shiro-note.html","1c68818314825eaa0e358954bdf7f47d"],["java/java-springmvc-X-Frame-Options.html","652567876e5ac7826648c383d5807dc4"],["js/js-logical-operator.html","b0a218c77f6e15a6088b4a93aed1e6cd"],["js/js-npm-symbol-caret.html","5d831ac5aca0cb0334ba9adc53c8f5a9"],["js/js-npm-symbol-tilde.html","8f83e8f1629d1d26437b4a41ad769898"],["js/js-vue-note-instance.html","57cd6d32bce448f54edb8a25ad154a15"],["js/js-vue-note-introduction.html","8c00dac9cd7dbfa6b0a80152238d6cf2"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","d4c28e916ac3e435d541031818ea1a5d"],["linux/shell-command-df.html","811222b313305879d35e900b1ec8eb76"],["linux/shell-command-netstat.html","50250548869abbf07380c0e0057497d7"],["linux/shell-command-sed.html","33f5c6ea217ff2b47df1cd87bd869d7e"],["linux/shell-command-tar.html","1ed232c8b26c784dc76878fdb0a9e9b1"],["linux/shell-command-top.html","1dda995cfd9cd6983ca1a38322568ca5"],["linux/shell-command-touch.html","2894e6c4819b11636a18ec8261524d0f"],["linux/shell-command-which.html","808620d0cb3556db008e8f29d26e1c8e"],["linux/ubuntu-user-add-delete.html","8ae953094c90b1950dd4b96205a74cc0"],["mongodb/mongodb-collection-aggregation-introduction.html","3308c06e65288792a510d2679cd16180"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","0adfac4cffb88754b5001e9f30b726d7"],["mongodb/mongodb-collection-create.html","647ffcf63f81973188905a274491043a"],["mongodb/mongodb-collection-delete.html","f2414ba67637f6c066f1866c16b3332b"],["mongodb/mongodb-collection-find-1.html","71b5c326aefc99e5220fe72bf9968391"],["mongodb/mongodb-collection-find-projection-operator.html","c87506af4a5ad6f92f47479a2a7b222e"],["mongodb/mongodb-collection-insert-1.html","60a7136687b18c235bb3f85f232f3dec"],["mongodb/mongodb-database-create.html","1c835c075c86d6537acd928974d957a8"],["mongodb/mongodb-schema-design-note.html","1dfe608caecce13580b87c5f9d1a045e"],["mongodb/mongodb-study-note-1.html","ed15dae5742ccb58dd4e82dc31c80284"],["mongodb/mongodb-study-note-2.html","e2b8c2576a41180fba354c4566901a58"],["mongodb/mongodb-study-note-3.html","1a89b780191a4a358119c3639464fc37"],["page/2/index.html","9fbbd26337259ee3390cb5300ce4e80a"],["page/3/index.html","20d617c795b9118c4216e29f59f27bf3"],["photos/index.html","c9de51e58e950613a532d728aeb32c4c"],["python/upgrade-python-under-ubuntu1604.html","a011625bd8e25570b9fc0e69d75b10f6"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","0275357af4062a05a3910048915113b2"],["tags/Base48/index.html","dc8fd7847080cf66d00bb5dac73dd953"],["tags/DETACHED-HEAD/index.html","7c3d108f932a0067ae84e0265d480592"],["tags/Git-Flow/index.html","3799231f110e5ec54c508c2f8bcd3712"],["tags/Git/index.html","cafd05a2871745d1f8be293cebf66984"],["tags/JS/index.html","2bfed314e9355585bec5f0c9f3f0332a"],["tags/Java/index.html","12d17665a56bf8f3873bbe5242a80139"],["tags/JavaScript/index.html","e60e1d17133c9743799cca4d1c811fdd"],["tags/Linux/index.html","d11427c542ad8ecc25b329ebb315c9ed"],["tags/M/index.html","f1973b94e159eda9e56ec5feed9be0a7"],["tags/MongoDB/index.html","a013bffb444bccefadd44ce179fe6ab0"],["tags/NPM/index.html","a8a8f5bcf266f8197089b11ad466b0cc"],["tags/Python/index.html","41a7a246aa6bb75e8c87c92622fbc02e"],["tags/Repository-not-found/index.html","28c1c004ef8e0cac5199b2ab9b194126"],["tags/Ubuntu16-04/index.html","6817fe9244b4e6ab5659395b490bb056"],["tags/Vue/index.html","cd9eeda1510da1054abf6820045eb3a4"],["tags/X-Frame-Options/index.html","7ee75be043f138593c4005594e736a2c"],["tags/aggregate/index.html","e60bbbf7923db7cf01b3d2aac3a0fd5d"],["tags/checkout/index.html","0c3964c04f6d0f30e78b23c52f87c39d"],["tags/collection/index.html","d95a7357eb200ee8c087c827daea2ac5"],["tags/create/index.html","2d318c86f1470fd80d9c0a9577d7038d"],["tags/database/index.html","73daa1494f9088f839112bada549444a"],["tags/df/index.html","1a69ddd5da918b7ddf1ae70ef4146590"],["tags/diff/index.html","214b53d79494a1d2864bf12573d0b9e3"],["tags/fast-forward/index.html","801d640b1ff150934e5c2750c1dae49e"],["tags/ff/index.html","a025cd38bb0c7e2a1f49f25c2e5e8580"],["tags/git-branch/index.html","ad752a625fb39781e8b0c01350d78f17"],["tags/git-merge/index.html","b320674393527b96206991d2b0df3446"],["tags/git-pull/index.html","7a18f012fd5adea6c02ad17f2e01f83e"],["tags/git-reset/index.html","d10350e18fad184a050fc662b926c0cf"],["tags/git-revert/index.html","a75476fe53ddb579526b06e724319534"],["tags/git-tag/index.html","ccb5269247ac274deb6724e5aff221f6"],["tags/index.html","fb136560c5e9a3f835873f347f18d903"],["tags/no-ff/index.html","5526d15378f6a1e5aa58955073e79360"],["tags/schema/index.html","b90d7b6e7bf11fdb51923c335691f5f3"],["tags/shell/index.html","b3d7b482ee1764c59fcf395672345f3c"],["tags/shiro/index.html","0a455a7aed94c27bcccf535ff809ab4e"],["tags/tomcat/index.html","17fcaa9eaaba49f25d44a9b319b5a618"],["tags/windows/index.html","c81bafecf1768400110e8ba236ee0c71"],["tags/介绍/index.html","03159fa4fef6ff4d3bf5bfbb128d69cb"],["tags/以太坊/index.html","4d0855e2a0ccf48e723962a6d8ce4027"],["tags/依赖包/index.html","1888bc4a36f4894378320524551245fc"],["tags/修改/index.html","1450c1dfe455556d81be15b0da703d68"],["tags/分支/index.html","1595f73c8693453899051e793b743568"],["tags/创建/index.html","f1d7891d798baa4009b5a11bb22a19d0"],["tags/创建数据库/index.html","7a706cb5f03b70029f3766615a3ce7a7"],["tags/区块链/index.html","6bf6d8b0c6e2aee20ec24d204be62b4f"],["tags/升级/index.html","32b556ec8a322c54c1f449420bfb942f"],["tags/学习笔记/index.html","7eef22faadbb7f86981690f246e1ccf8"],["tags/实例/index.html","5dda78bbbd5a6de50e725b956a96c4be"],["tags/工作流/index.html","39f497e038486333e9eb4ba06daeb974"],["tags/插入/index.html","3916abba166ca72b44fb5a0278e08e3f"],["tags/数据存储/index.html","9cba7ae6cef94947d79f146ee811d171"],["tags/数据库/index.html","574a6742c69df50c89f4ea20f9e32c3f"],["tags/数据集合/index.html","10f95027e30f7145e5e2ccc0efcdd5d7"],["tags/文档/index.html","98b233980dcedbce1e7a0193ad109feb"],["tags/智能合约/index.html","fbc4a062c22b1ab96ed713acc133bbf3"],["tags/标签/index.html","b733088b4ba89af03e80b5d8bc1c8b03"],["tags/比特币/index.html","d8dbe519effd81d2828e826095987106"],["tags/波浪字符/index.html","337b651523bd404dd9397d7646a70dea"],["tags/用法/index.html","c429ccf1cf98bb7ff6bff8f9c70929d4"],["tags/笔记/index.html","96a245e4f3800ae573df5887623ab0dc"],["tags/符号/index.html","31aed25189be56f1808c2d1ec6a06153"],["tags/编程/index.html","3f0d9f2514118252d829c6dd8067041a"],["tags/聚合/index.html","476a206f9cb47b7a11b9333cef368fcf"],["tags/远程仓库地址/index.html","0ef61915cd30a9d91495f76a5d87f1a8"],["tags/逻辑操作符/index.html","adb42214ceee25af18eecc8983aff481"],["tags/部署/index.html","278af02818bd4c0a31c5eae8ef88e06f"],["tags/难度/index.html","f9a42291d76cc82e6840ae3dda9a5a56"],["tags/集合/index.html","c523ba2e542934b50a7b637da2f93fc3"],["thinking in programmer life/full-stack-programmer.html","e8089f7d705ca63968989be930cc9fe9"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







