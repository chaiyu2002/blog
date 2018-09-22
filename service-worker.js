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

var precacheConfig = [["about/index.html","213cf65d4fe02ae83f3a41421e6a90a8"],["archives/2018/06/index.html","4702dd0acfcbf8e9648634af6d8745b8"],["archives/2018/07/index.html","234c052bb108740f7f8d03ef02c71bd7"],["archives/2018/08/index.html","6191cfb76978a2cf131d9d52a0c63c54"],["archives/2018/09/index.html","5d8920e5777d2ad75cfe07864e73c24c"],["archives/2018/index.html","4624988da52feeb674a03a05200b1075"],["archives/index.html","dc805e89005d85e41522711ad00c2ae4"],["atom/index.html","03186e8264aebbda94f16b69d824f1a8"],["blockchain/base64-base58.html","1af819487ee0518b3c2ad28bf4f65743"],["blockchain/bitcoin-difficulty.html","fc49d8c48679bf0b71b216b97eab8894"],["blockchain/block-chain-ethereum-contract-program.html","a9038190ac216bcea4099a2350f12386"],["blockchain/ethereum-programming-introduction.html","4ca50085474aa58734acd22916182c75"],["blockchain/ethereum-rationale-introduction.html","6b9acdb8626d3fc80659c6bad4f48d6a"],["books/index.html","85061aa9378805dfb26589263d41758e"],["categories/Blockchain/index.html","c1e8b942e24adf9b7fbc4e533b27d9a9"],["categories/Blockchain/以太坊/index.html","ec325d380cc70779fd81c481f9b62e27"],["categories/Blockchain/以太坊/智能合约/index.html","5f5c46ce44d7efaa47cf544750f23045"],["categories/CSS/index.html","8e6f19193b744d5555c4e8706148b99a"],["categories/Git/index.html","57b61df3d58af99f68c5a7c8fba14f90"],["categories/Java/index.html","5fbe90b54e6c6a48546ccb086aac3159"],["categories/JavaScript/NPM/index.html","db9dc159b40836ac32935fee52fa0bb3"],["categories/JavaScript/Vue/index.html","b020e9ee6adfe8bdedc3c4d1be01d6a0"],["categories/JavaScript/index.html","62703bdaaaa1f31268f55e5c329efd65"],["categories/Linux/Shell/index.html","09cc36ee7915215ca66cf207c9059398"],["categories/Linux/Ubuntu/index.html","cf5c4d7485747e8a1e4941b0fd215dac"],["categories/Linux/index.html","80d06d480c3f8bb512df407466ca1f5d"],["categories/MongoDB/index.html","f1f159f63659d8c3d352dc006a6be8d1"],["categories/index.html","bb176000879b49ed03942d9b4d033119"],["categories/程序人生/index.html","2b759d4bc796002638b91cd2858672cc"],["css/css-normal-flow.html","60c224bedae1e172fc75247a00d5f574"],["css/main.css","7eeb82a53525288dd7bfa3e5b5d92c4c"],["drafts/configure-multiple-vue-project-with-nginx.html","5ded8da07f164ff30dec2004388810e8"],["drafts/iframe.html","d915fb12428cf6b7d70c49a14a88b294"],["drafts/record-re-install-mac-os-10-12-6.html","a0a8c924c2cf6cccea843987b47efeab"],["git/git-DETACHED-HEAD.html","bd509d1074a76c0056a084365dd58104"],["git/git-branch.html","1fe51b7f298dfb39dd64039223ed07a1"],["git/git-change-server-password.html","ae3f6453ec7047fa1ab0010f3f3b6448"],["git/git-checkout-1.html","ac7303374e8e5244d4acdd68dc4cacf7"],["git/git-checkout-2.html","e80122ab46437c37a8a2074f1f7fbf62"],["git/git-diff-m-symbol.html","df48e175aac189401a0720c9af4a62a4"],["git/git-git-flow.html","7824e48fcf979d19ae40be3819b89c55"],["git/git-git-merge-ff-no-ff.html","c9efe3b22eb2eb2bf190dc67c6493741"],["git/git-pull-1.html","df5d39a84b1654a26a37b3e6094ad7b9"],["git/git-reflog.html","6a135a5e427ad0eb0ae3a0a9453a7136"],["git/git-remote-set-url.html","10852739f2e7f1f5d3cf8e122c7d983e"],["git/git-reset.html","df930c73ec9d42a26c174a69a2b0ce2d"],["git/git-revert.html","632982ed2c2454176188223839440ee0"],["git/git-tag.html","724a5ec8486723fd7fdccb0312f7b9e9"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","a6d9d03b148f5401f3368c33d8582bcf"],["java/java-deploy-resource-folder.html","d65f03c029045b021c6781c7319758fe"],["java/java-shiro-note.html","e1a0cb8f2864b83d12b123141107ec0c"],["java/java-springmvc-X-Frame-Options.html","ae6bce7c2da6fdc85ccfb0d290191a7b"],["js/js-logical-operator.html","e7922b8415a1bcc20e393670aeb90bea"],["js/js-npm-symbol-caret.html","b0f25821c37ddb0cf7222482739c9f1d"],["js/js-npm-symbol-tilde.html","6794d2ea23184dff8a3596f4225ad555"],["js/js-vue-note-introduction.html","07298cb0fd9ef4956d6ff99a8cf894e6"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","20076e919ddf4da41f6c7a1cc1613475"],["linux/shell-command-df.html","6a484b4f3857827e8baf70979ee8c20a"],["linux/shell-command-netstat.html","d9635d045ad50f6b0f5d03e7375662f5"],["linux/shell-command-sed.html","de1a5e440282d786c6e86622bb191805"],["linux/shell-command-tar.html","9d49a5b855b8e903830ec257b5a67cc4"],["linux/shell-command-top.html","2ea33293992023404cd10a94df1bdfca"],["linux/shell-command-touch.html","f0f72c557d30d09292b0ebe7b74a2427"],["linux/shell-command-which.html","884db77efd2ce47caf38f78649a955ee"],["linux/ubuntu-user-add-delete.html","5675a075d2a1dd89cfc8f7d2f00fbfa5"],["mongodb/mongodb-collection-aggregation-introduction.html","ef17744df2eb59a77bba14c4fb029ac1"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","bcea5c98f90a400e1c94deec112511d4"],["mongodb/mongodb-collection-create.html","5b3899383caca0a937b153c8798efae2"],["mongodb/mongodb-collection-delete.html","5b7b9caa3962cdb8a6fe206f89b85f80"],["mongodb/mongodb-collection-find-1.html","b2269e58a7f05cfe0b0b3747cb872605"],["mongodb/mongodb-collection-find-projection-operator.html","ae83050430637a2c58e339c962e5c61e"],["mongodb/mongodb-collection-insert-1.html","028d5ff0a6481a1aecf4110eec367b50"],["mongodb/mongodb-database-create.html","6a9f98d94332bb181c28db243edac25a"],["mongodb/mongodb-schema-design-note.html","13cf53d84abd0ff537ab179dd6da8d10"],["mongodb/mongodb-study-note-1.html","1936af0b1fbfc40be4868312fa709f3c"],["mongodb/mongodb-study-note-2.html","9392d9f750ffd1e226be5a095e6f7e6e"],["mongodb/mongodb-study-note-3.html","d73a02bcc6714d2df8f9107744bdc04e"],["page/2/index.html","52373d8e5f45305b12d9152a17ff2625"],["page/3/index.html","467990664125ef7d1edbf20dc5586bf6"],["photos/index.html","94e0f495b3aaf27ecd0a843e0e5e4af1"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","c5b7d77314a8e59330ed46f9d47a2be3"],["tags/Base48/index.html","839d26d242aae3343b0dbd7ec51cc0d2"],["tags/DETACHED-HEAD/index.html","720c084b4647861e406ba78673adb989"],["tags/Git-Flow/index.html","41d57c0ac0e15893e7277b76864c18c2"],["tags/Git/index.html","045d1f8bddfbd94f1b660231716208f3"],["tags/JS/index.html","d3f5982bda213a2558b22f954d115322"],["tags/Java/index.html","79f00e1f2e8ffabd06a822f10a8d248a"],["tags/Javascript/index.html","2eb7778633c045759da2964adff41e10"],["tags/Linux/index.html","3a18825341dfd88da2d4978b750ef46f"],["tags/M/index.html","5149ed6cf141c5910ee82741e1277165"],["tags/MongoDB/index.html","e49bbd80d8dcd75db22bcaa9532d367e"],["tags/NPM/index.html","36470a68817a88dfa6e318a9e1a05d8b"],["tags/Repository-not-found/index.html","aca118624b3eac61349f01528703eceb"],["tags/Vue/index.html","ecf6c964219f843f6b92e624971bc95d"],["tags/X-Frame-Options/index.html","1642cf5fb2342815e0728f1072e6fcf8"],["tags/checkout/index.html","3569bc4a1a7df4029f92ffc970ff2788"],["tags/collection/index.html","f307b1b6b7c0bca4a5bb5cdefda9db9c"],["tags/create/index.html","50eb6186e55df76ffc0104f656f1074d"],["tags/database/index.html","498b2e1e9e6404b0ad9fb5ce1e99f660"],["tags/df/index.html","991b897726a0a08b3903d2af22ca8774"],["tags/diff/index.html","6e40163d990d1e4c14299a0ed4d5154d"],["tags/fast-forward/index.html","a741abe718ab8291ad4d3e116b0c0438"],["tags/ff/index.html","b6af6a4f7c80e0b155a89dcbb5699f64"],["tags/git-branch/index.html","6efe542d75c5339b2934cec138e5b5c3"],["tags/git-merge/index.html","1b65719b5305120bcbb1124f18ff37e9"],["tags/git-pull/index.html","3b655bb4a8ad4973cffc74048231e7ae"],["tags/git-reflog/index.html","bfba3bd15a94261c0ea196b55ccffac2"],["tags/git-reset/index.html","4c2a90f5446845c184f3be934fa9f900"],["tags/git-revert/index.html","b835f558d8b94cf3a15699b9579ad8cd"],["tags/git-tag/index.html","abd3741eefe798d0fc2ffde5dc7ce4a0"],["tags/index.html","220be4cfae940783a0b5a4df2c9ae78d"],["tags/no-ff/index.html","549842bb94ab92fa5a77f31b4a897452"],["tags/schema/index.html","59ec39b3326b5887be7ecf16c3fb68d0"],["tags/shell/index.html","ba376b83fcab11b245d23b798a15bea5"],["tags/shiro/index.html","9a95be716ab14bddb8a2f91b93811420"],["tags/tomcat/index.html","afbbcaf2f0c0112faba8227a5d6ee3d6"],["tags/windows/index.html","52c78ec21bde6bb4515c236cbbc974c4"],["tags/介绍/index.html","d5aac2480fcfd9689ce505d660652622"],["tags/以太坊/index.html","96bc577cfa207191db4d641737a62e1f"],["tags/依赖包/index.html","25e046136d4bda80694da09c5d0edb61"],["tags/修改/index.html","d537aad1437f6b9029d7382e91412a26"],["tags/分支/index.html","b3532da6c1d04c859bb4b06755192b40"],["tags/创建/index.html","ac77f7841b4b87b927bc52e4aea1cf4f"],["tags/创建数据库/index.html","84ee154d01c038ff9b85db39d089c28b"],["tags/区块链/index.html","a87b7e9a7a4bd973cf8cd5265ef2ba21"],["tags/学习笔记/index.html","55437d1d5a852872a9aab73b699b59c3"],["tags/工作流/index.html","99bb2e35ff963b8cc5f81511af6ed417"],["tags/插入/index.html","1e59b28eacb17c392ef61a5db9ff4625"],["tags/数据库/index.html","cf069dc8721f583271799902a7bfcd5d"],["tags/数据集合/index.html","14026f5e241fa2a94208281efae64c78"],["tags/文档/index.html","d973ef2537b55b1cb617779cee573a44"],["tags/智能合约/index.html","364d068a9537a84481da43265ddf592b"],["tags/标签/index.html","b409b6eb1861e2e36809d97294a15dac"],["tags/比特币/index.html","811ac791579da64896c0082e1a71265f"],["tags/波浪字符/index.html","581e0059f16c6cf58e1e3f49535ebbd5"],["tags/用法/index.html","5ff9642d74ce06c0f3cdeda9158ca161"],["tags/笔记/index.html","440596d154e74f924e45da1a2c887bbf"],["tags/符号/index.html","cb2bff24168dd3931edc398337d6de82"],["tags/编程/index.html","ce1ebacd9477979bcd5496e479ce324d"],["tags/远程仓库地址/index.html","d7a2f00a47a2e186f71955604c878384"],["tags/逻辑操作符/index.html","e94ee9c1b3a6c5d5212ebb6ebbfe29db"],["tags/部署/index.html","9b9fa11dc2a0ff529e974d68de49aa2b"],["tags/难度/index.html","0be14047f5faa03227337030141c664d"],["tags/集合/index.html","922753ba0b58db11b0a3e87b133a10c5"],["thinking in programmer life/full-stack-programmer.html","a3fd2805ccb32c30bf7023bdf0545e02"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







