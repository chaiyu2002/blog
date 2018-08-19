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

var precacheConfig = [["about/index.html","795c6b262c79746ab879ea1991d195ef"],["archives/2018/06/index.html","60e12edd2d08820cd24a5b660cffbc31"],["archives/2018/07/index.html","ca187aa4332fa02ae9a6f912d526af59"],["archives/2018/08/index.html","57c54a6f45bbd084e12e0985c5f9bca5"],["archives/2018/index.html","4ec39dcd3833a903215bdc615d5370e3"],["archives/index.html","b0e2f420ed1c4602e1db4f6eff6545df"],["atom/index.html","ac91e8bb517875e5b1bdfcbeaa9f4bc2"],["blockchain/base64-base58.html","20add60af93628f6cb3b86bd256e820c"],["blockchain/bitcoin-difficulty.html","77dac2b4511614b7ed2512c8b8cad024"],["blockchain/block-chain-ethereum-contract-program.html","890ab6c1026bbb25158742cd5188a4a6"],["blockchain/ethereum-programming-introduction.html","dbd5f37fab273b975058778c58191a9a"],["blockchain/ethereum-rationale-introduction.html","a24e5b580caa88bf3ca83945e27c9579"],["books/index.html","031fbb0e53b5ecb5b0a49592dd5dc700"],["categories/Blockchain/index.html","edc870b7a5aaf6d3ef3ca78a14b35ff5"],["categories/Blockchain/以太坊/index.html","7fac773ad41443a62e61c66f7d31ca73"],["categories/Blockchain/以太坊/智能合约/index.html","1cad181941aef84cc3e8292d361dfe0a"],["categories/CSS/index.html","3298742874d3b1a7a5e72742e2fc5328"],["categories/Git/index.html","51792ebd6e026cb575e1ab9afaa8aa90"],["categories/Java/index.html","3a5245eb138b1d30d615ea0463a04afd"],["categories/JavaScript/NPM/index.html","b8db9e80011ed0de6f8f65d5e80c2ccc"],["categories/JavaScript/index.html","006964dd1c83763bba10206fe8508961"],["categories/Linux/Shell/index.html","6e3f20d712bf4601a88391aadc8d9bd6"],["categories/Linux/Ubuntu/index.html","6b6a45724c56442e7524f51df8d11988"],["categories/Linux/index.html","ba26f6a536eb6d27670862ead60208fa"],["categories/MongoDB/index.html","8bd7f292c1121ebb859f01e9e51ee4ec"],["categories/index.html","4101c4a4e9f838a2e780b0979af78c3d"],["categories/程序人生/index.html","2578b6cf1a31324defadc783f79fad17"],["css/css-normal-flow.html","b06cc31129f595eeca131a9cb1e2b06e"],["css/main.css","69888c05d7afbd877a66626e2bc41db7"],["drafts/configure-multiple-vue-project-with-nginx.html","c344929ebdf9321d2f05ba6ebfe0fa1a"],["drafts/iframe.html","9e8b8eed9c703bbca42b6c01180657d8"],["drafts/record-re-install-mac-os-10-12-6.html","78c034fd6f5e0cdcd5ca8d0bf1334897"],["git/git-DETACHED-HEAD.html","8ecc7205775e686535c9cab1f6479be7"],["git/git-branch.html","900034129b9c055a50aa215d64b35f50"],["git/git-change-server-password.html","b167c54afa102ff35b906318b166a614"],["git/git-checkout-1.html","6bb087d605640b0e55bb4f3f77dc2e45"],["git/git-checkout-2.html","57384d5732ccd5b9fab0aa0d972d695e"],["git/git-diff-m-symbol.html","47a0e0f75a8e7445d9f63d58386ff068"],["git/git-git-flow.html","d650fb55ec424705fb5f8c671bfda6a9"],["git/git-git-merge-ff-no-ff.html","6defba4d04bd235b9deaa3fa1e69cb97"],["git/git-reflog.html","86b4ab87110f53fc612f1f133ae74d4d"],["git/git-remote-set-url.html","977e4941120883128c00eadab38c3cbe"],["git/git-reset.html","2fa1d9ed244a754133d859a718a240b2"],["git/git-revert.html","782a04926fe93c4ef31c3d6cfb0871f5"],["git/git-tag.html","d9495ba90da38073743c82fe54b151aa"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","de49a9fc7a48ce08268db7c8588a93f2"],["java/java-deploy-resource-folder.html","25c355cc4c5a7631ec642f52d83e8f9a"],["java/java-shiro-note.html","0c17c91c48a17768416f86410fb904f7"],["java/java-springmvc-X-Frame-Options.html","984c864fc0a2964e2a26d8023721f711"],["js/js-logical-operator.html","18874204922cc7e43bfd0be2ef3e9b9b"],["js/js-npm-symbol-caret.html","43f7862420b02c86cc690d11e4c7bfdf"],["js/js-npm-symbol-tilde.html","4a81f369ac52a87b71b978aabd88a77b"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","9cbe811ffa86bdf605ad43bde9b50adf"],["linux/shell-command-netstat.html","901c57c94867c79dbb6d2f42e2f4e384"],["linux/shell-command-sed.html","3cbd14be9103e0707fc7129776fcad5f"],["linux/shell-command-tar.html","0c37853a726408f9a24dd8ad488e5bec"],["linux/shell-command-top.html","2252cc09db879df847d333a7f8248593"],["linux/shell-command-touch.html","3151d24dc743bb580a8ddaaab89a44f6"],["linux/shell-command-which.html","4a41faa56aeff0515ec2693f7dfbc158"],["linux/ubuntu-user-add-delete.html","8880a1eee9226b0aaab9173327519b87"],["mongodb/mongodb-collection-aggregation-introduction.html","c5e19148bdddfd9e51e04cc52a5a2385"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","a5392eb3372b26e7b8c63071618dcd35"],["mongodb/mongodb-collection-create.html","c247f843f1a8ec7158aaa8cca41c29d6"],["mongodb/mongodb-collection-delete.html","9055210161e3af8f4eb8b8d67f6827e9"],["mongodb/mongodb-collection-find-1.html","c67a1309c81ccb17a09ac058ff2157a1"],["mongodb/mongodb-collection-find-projection-operator.html","4a6de32e10ec3680efc5464de7245214"],["mongodb/mongodb-collection-insert-1.html","ff914b720bbbfa2eb446431e356ecb99"],["mongodb/mongodb-dababase-create.html","b1ef30906dfa5dc7b6d94b6f41be89a3"],["mongodb/mongodb-schema-design-note.html","2ae1dcbab4d9fbfd7b49527ce32c2c6d"],["mongodb/mongodb-study-note-1.html","c4dcd60923a2b7e3f321ead13d7e1b14"],["page/2/index.html","ce57ed522905dbcca5a99d5304803d83"],["page/3/index.html","005591887534cb4601f560cd87467e62"],["photos/index.html","85eb0b69ee1086d591e4c2d2114c72f2"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","5f87ac2e9d5c9e526fce156ebd712b34"],["tags/Base48/index.html","03396b74d821d02f56c8d3e0722fced2"],["tags/DETACHED-HEAD/index.html","ba030bcf132b0143e0be91882d5b4b1f"],["tags/Git-Flow/index.html","5223101463519994489bc648bc8a0cd3"],["tags/Git/index.html","a414f9dff345d02d9058cfad19fad071"],["tags/JS-逻辑操作符/index.html","b7d08c50987357716bed41b743baec28"],["tags/Java/index.html","ff9dcfffe0f7081425fbe61a232b84d9"],["tags/JavaScript/index.html","a906c3b53c1f485249f4f90dd8a3a892"],["tags/Linux/index.html","e8bfa6985f4e0e284e8b2cc40f7e9503"],["tags/M/index.html","63d0a7665ffc28d36d059236cc0e2818"],["tags/MongoDB/index.html","4eef13ee7c059cc11780fd0c27f14430"],["tags/Repository-not-found/index.html","149c5e1d7536da71ec7af848515501dd"],["tags/X-Frame-Options/index.html","9cf05778d3c25eeabc8e412dd1416853"],["tags/checkout/index.html","1b93cb42810c9be7deca8cfa119a808d"],["tags/create/index.html","d9b3b33d42d5cb09403e6e5e20ff75aa"],["tags/database/index.html","7641690cc6bf1adea1aec0ca0adbb62b"],["tags/diff/index.html","9192da3e98da02c7889f6799a0ead338"],["tags/fast-forward/index.html","4a70f51c54ce37eaaeee29269c971569"],["tags/ff/index.html","16abb9e5ed016ca0d6990fa63e1d47e7"],["tags/git-branch/index.html","be66d80e053d7f7ec1b5ea4a90d1eb81"],["tags/git-merge/index.html","0d2bafa9c2c331e4ef3d7a9e8c1536b4"],["tags/git-reflog/index.html","36da8322429ede2f34fdbe0cf6f3b68b"],["tags/git-reset/index.html","ddc24a6865f866fa583b663c0cd9f45e"],["tags/git-revert/index.html","7db052885fa819d3c927d251eca68192"],["tags/git-tag/index.html","3ad0c8cd74e0858b15c5587ffca7b1bd"],["tags/index.html","4783e23ab9a7ad9c123c2df6473ff2ee"],["tags/no-ff/index.html","9bd1741cad9ef8e72bf6f22e676f48e9"],["tags/schema/index.html","fa590fad9c3b685444727360a8ebf793"],["tags/shiro/index.html","41d128e08bbc2eb95f7bf89b1d8b8ef9"],["tags/tomcat/index.html","5242e71a9d8a6c6c9cf8476e126697a5"],["tags/windows/index.html","7fb79bdaf42d4409a817bb680106759f"],["tags/以太坊/index.html","0ee0519fdf0efa94975c82743be340fe"],["tags/修改/index.html","3167155014c1a60c4b96fed8a52a9fda"],["tags/分支/index.html","015f5f46201e4d56b0adb17949b280bd"],["tags/创建数据库/index.html","d503eddd24e64d140ba460b77ec46fda"],["tags/区块链/index.html","3a0d77034943574085d73d550d826f6e"],["tags/学习笔记/index.html","6470d8b39a7a413635e9e8d61e1f782e"],["tags/工作流/index.html","741b642241648867b95804c115fb7e42"],["tags/智能合约/index.html","b53e8aed5547d4149f6e68b7b41151ab"],["tags/标签/index.html","d07e9b301c83d283f65bb4794aad24ca"],["tags/比特币/index.html","9a04fd86dc510c48d5deb3aefc04e977"],["tags/用法/index.html","f1362acf0ce08f11316294cec2dcd102"],["tags/符号/index.html","275ec946656bf6c918853d0b6ac88f60"],["tags/编程/index.html","80a657b08597c674c4f7591d600367e7"],["tags/远程仓库地址/index.html","1ffcd9d2e43a5a801bdef9586ed028c1"],["tags/部署/index.html","4b5602b7e27fa23cc5e6ea5e7c77717d"],["tags/难度/index.html","5322b0d56092a5d4f74e112e25b0d83d"],["thinking in programmer life/full-stack-programmer.html","9a579048fa44a68d7572d0a92a89efa7"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







