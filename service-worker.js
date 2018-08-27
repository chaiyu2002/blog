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

var precacheConfig = [["about/index.html","a342159eda1c493bfa7f5c7e4840c2cb"],["archives/2018/06/index.html","e2dc465fd856b36991e722b25dfdfb5a"],["archives/2018/07/index.html","221731d444e72d181bcc8bd4c52a07a5"],["archives/2018/08/index.html","778d3502f0082b7f3430b5b4a48bb322"],["archives/2018/index.html","68e02968b5dbc0b8d1bb702279c40e05"],["archives/index.html","93571e1f47d21e70adde23fa8f648c5b"],["atom/index.html","fb4386a6b6f959755ff7da76c5cd7344"],["blockchain/base64-base58.html","b7f09ebe936a1ef4b0d8c4d4f2c626c0"],["blockchain/bitcoin-difficulty.html","49a78e190cb9be934ad60528da4247c1"],["blockchain/block-chain-ethereum-contract-program.html","82381b41366336a11d066b208f909753"],["blockchain/ethereum-programming-introduction.html","820a620fad70b7610bfa1a48ba84fafa"],["blockchain/ethereum-rationale-introduction.html","8a328bf0d69e1e5d8f4228b0c52798e4"],["books/index.html","cd37c5cb3674ea98e172b90a9b5e7f64"],["categories/Blockchain/index.html","aed816253008ef0669ca0940b9d62997"],["categories/Blockchain/以太坊/index.html","7e13e136327d3ef08c1d0e81e769f2e8"],["categories/Blockchain/以太坊/智能合约/index.html","5629a43b0a05727d18d47e723247a33b"],["categories/CSS/index.html","e5a7c4d92ca0a83cc5fe718f0c720cd5"],["categories/Git/index.html","e4dbe56e14d6812c070242d878bc7f15"],["categories/Java/index.html","655afe8e2366341d5c7b211c759bf4e5"],["categories/JavaScript/NPM/index.html","44fe0bea1c8968c8f0de1e39f24ce2b5"],["categories/JavaScript/index.html","b96147b2a1c63fa66dc452f4f7347a91"],["categories/Linux/Shell/index.html","e809e9f16b1994397ec95a3a7271a0c8"],["categories/Linux/Ubuntu/index.html","c2635dc67800a8075b289e800d4e9330"],["categories/Linux/index.html","dcd274755fa1e05b9655ae8dbdbfedba"],["categories/MongoDB/index.html","670cc92cfbca4b5a9a876ce36c7dff0b"],["categories/index.html","1a3252573f91670238b4baea4f55de42"],["categories/程序人生/index.html","27aea06344014c8d05bbef00719b35a5"],["css/css-normal-flow.html","57d1c2768a1d27d0d84695dc03dd6d32"],["css/main.css","96f92507cf9b039fbe8186ac6ca9eec8"],["drafts/configure-multiple-vue-project-with-nginx.html","1da3a63c3fd701a9e8222a5562b38983"],["drafts/iframe.html","1ba0097c0e9fe1cd1a00e61600038638"],["drafts/record-re-install-mac-os-10-12-6.html","a68b3210eb1d9ffba3fe2dee8de3f526"],["git/git-DETACHED-HEAD.html","b1b3cc9fb7e11d909231346b7a522232"],["git/git-branch.html","aba4970676ab0b27a4479912bbcb000c"],["git/git-change-server-password.html","df7214f70c86433d6af650ea237dca75"],["git/git-checkout-1.html","8f8f623ba515fba3b0b15d9c05e46bc3"],["git/git-checkout-2.html","1b731f07f5ed18d6e2e6015e119c3bd6"],["git/git-diff-m-symbol.html","3b18ab7eb6db1d841089c7e6078d39fc"],["git/git-git-flow.html","d4eacefd7ad1d5a8773fe9aca817e24b"],["git/git-git-merge-ff-no-ff.html","0cae49467752d41cc0bbe4d74a8cf52a"],["git/git-reflog.html","58e31520eb9b042ce849a1c56f9950a7"],["git/git-remote-set-url.html","d8d1be70bf05308793c9c9a5df561152"],["git/git-reset.html","e7003a257bde33f0ce940f84bfc0df6a"],["git/git-revert.html","fa407a581353d7e255af31b2e6b7247d"],["git/git-tag.html","0fc21a157251063b4f61bb331224f6fc"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","8f970565bfc6f6a295c1581fe9998159"],["java/java-deploy-resource-folder.html","a0dbe5afa74059b8f966c2a65b09f163"],["java/java-shiro-note.html","46dacaac2dc71a9de70eaf0efcce7db6"],["java/java-springmvc-X-Frame-Options.html","552a200d8de4000bca95c179e3890645"],["js/js-logical-operator.html","17c250f3e9964ce6f9f7d5c264305bf1"],["js/js-npm-symbol-caret.html","4318d74f16e6d2af1c615ed648891aa7"],["js/js-npm-symbol-tilde.html","990fd6842f0ce5db175fa817c1015e23"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","cb55b43b76784719ae339940fc9c2f29"],["linux/shell-command-df.html","796d5625e9e42541bd58b33f99c77230"],["linux/shell-command-netstat.html","b34d670ca55f23415bc5d7f8bd85e48e"],["linux/shell-command-sed.html","7036ce0e1842ae4372276571f6860514"],["linux/shell-command-tar.html","1dd9dcaaeec101b1eac16675925d77a6"],["linux/shell-command-top.html","17db66622fed921cf184b5f3fdbb88db"],["linux/shell-command-touch.html","326baaff51114f2e9b8931a3b09fa9a8"],["linux/shell-command-which.html","4fbce8002d59277e311782c0ce0c6be9"],["linux/ubuntu-user-add-delete.html","37914fd891f321d533003f0e62603f2b"],["mongodb/mongodb-collection-aggregation-introduction.html","47eba6e4867ae4b8c8f1b71e05cd898c"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","886030dfa241213e080904037ff8089d"],["mongodb/mongodb-collection-create.html","b790c3a742b0991beaf5ff036d08210b"],["mongodb/mongodb-collection-delete.html","95624555481891beb6ec426f73e4f992"],["mongodb/mongodb-collection-find-1.html","02f1958a7e2b4cfd1df8e8981fdb17c4"],["mongodb/mongodb-collection-find-projection-operator.html","5749b2f2c96a9cab39f53c8d225340f1"],["mongodb/mongodb-collection-insert-1.html","3e5d07085f8f22a572ac5702ef146ed9"],["mongodb/mongodb-database-create.html","f40a31f48b42bf8b993ddb94646e157b"],["mongodb/mongodb-schema-design-note.html","381be2eae04b2fc7174dc18dddc4a80e"],["mongodb/mongodb-study-note-1.html","fd5afb9c855d31482ebae50714a635ed"],["mongodb/mongodb-study-note-2.html","be1589cb2c85a36570972cd6b0e5d726"],["mongodb/mongodb-study-note-3.html","5c74d2eb19d91085a68a0c8070d439ea"],["page/2/index.html","d919ef5f5c3f24559ac85ffa5f200f3c"],["page/3/index.html","61eedd1ed8fe46cf0c5230c237be1837"],["photos/index.html","b22c7b88b09933b58b6e6aef5d030b10"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","0c77da8eb4888862703b43f20ec135e1"],["tags/Base48/index.html","1f1bea12096a2c1ebc9b1370f168ab7b"],["tags/DETACHED-HEAD/index.html","78110babccb017a9c36740349c01e0b6"],["tags/Git-Flow/index.html","9b41125f020d8c7019d1485fa551e1a9"],["tags/Git/index.html","4bb8fc5fffe2ebd0c0ebef3739f38504"],["tags/JS-逻辑操作符/index.html","e8b6a03ec1f8d2746434c1a61ee39b8e"],["tags/Java/index.html","46bcbed82efdc6f523ab98c60ab09c7c"],["tags/JavaScript/index.html","0dcfb8088c789c42813c393aac03a8c8"],["tags/Linux/index.html","f2457616431443b0307e02335f740c02"],["tags/M/index.html","9d3eee3984c95a7b8cc080e67ebe129c"],["tags/MongoDB/index.html","a8f471982fa463062d9083f4b2389658"],["tags/Repository-not-found/index.html","dfebd33b9efd002f2ce58aac4ef7d48c"],["tags/X-Frame-Options/index.html","ef85cfbd1b7bd2761483b90c66dd0536"],["tags/checkout/index.html","6055857ea60999ab04b81f8d800f1c5d"],["tags/collection/index.html","2c64e09b8dcf16848795626446c41e8e"],["tags/create/index.html","e769d13389fe48b11837111b5bdcd4d6"],["tags/database/index.html","d745ed7e8076a66aadf5f911fb1ed593"],["tags/df/index.html","745fd4145845d1eaf41aa07dabc270e4"],["tags/diff/index.html","89d05d3cab6626618d23fb2d2415ff61"],["tags/fast-forward/index.html","63bf1a13871ac8228f20cb2805e3d97b"],["tags/ff/index.html","5a9e0ac35a503a6d8801d626d9cde76b"],["tags/git-branch/index.html","f6d06eb69aee6409c99820821e5d8fda"],["tags/git-merge/index.html","c73b0c532169735b43173ea2ae96e403"],["tags/git-reflog/index.html","73b2cf747e9773bdeb3c7801cda8ab2b"],["tags/git-reset/index.html","03855b87b4d3e68c48bf3686ebf61ccc"],["tags/git-revert/index.html","6d3c9f34a228531085254a9b3491fa50"],["tags/git-tag/index.html","48d94d1e3465b0dc40d7678c14660964"],["tags/index.html","65e1ed08d6c0bdf431413a0f13cd781c"],["tags/no-ff/index.html","70984386d1c20465968b7a340e40e2b3"],["tags/schema/index.html","df2842500929bf57b2b386b55204d4ed"],["tags/shell/index.html","174ef8cd3e130b2f7d09993cf6c74316"],["tags/shiro/index.html","83521a5e5a966b07d21135d6fe527063"],["tags/tomcat/index.html","5a7ffd0efefbe70b19a889401504fa67"],["tags/windows/index.html","c521b7f7e9123544baed62f445d394ad"],["tags/以太坊/index.html","a4af664f1ff7c8732de38b8b1307d095"],["tags/修改/index.html","b852095ab018cf22ecc6df1990d5d75a"],["tags/分支/index.html","bbd494baecada29a7f78c7a75aeba701"],["tags/创建/index.html","0d2d48224068c7bb11095a653cfd23ec"],["tags/创建数据库/index.html","b91b03063e4cd39e83231514d7cf2d39"],["tags/区块链/index.html","f2eff17fa96e07d6ac2d63d20f90e900"],["tags/学习笔记/index.html","1a331397c77c990221ae297c42904b08"],["tags/工作流/index.html","780aef3830e3b82f10b993177c58b742"],["tags/插入/index.html","7e3889e2e4efffa42241e64aa3d5b0c9"],["tags/数据库/index.html","9caae12c49875dd46bcc2ddce23af273"],["tags/数据集合/index.html","7ac3cb588843febc266948890623ba65"],["tags/文档/index.html","f8c0d1639e7528fb3d9e1e6021ad7473"],["tags/智能合约/index.html","2e40cb325000fde4b2028b34d4e7c097"],["tags/标签/index.html","a63e1cf59fc84cab287df31fee4fc72b"],["tags/比特币/index.html","5eb22fa11a1558801cf7b8a2a6fca1d5"],["tags/用法/index.html","f0b9a4664fc15d9ffac10bf18d5a74c1"],["tags/符号/index.html","1a392091dc292da3e4573951e5dae08f"],["tags/编程/index.html","3f13736e132871336b0da207648910fa"],["tags/远程仓库地址/index.html","d9e84cb718a658251d47ae1b973691b6"],["tags/部署/index.html","df0072511fca325da8616a1678de3d08"],["tags/难度/index.html","99c2dfeda68ec8b585e30948efd1a57e"],["tags/集合/index.html","410a4019e28891f20c812a66dda00107"],["thinking in programmer life/full-stack-programmer.html","796a5b0cc3af7cfa93a9868c8678f7fd"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







