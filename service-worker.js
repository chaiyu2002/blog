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

var precacheConfig = [["about/index.html","1dde95de56a980a77c6c0d5e89b5eeec"],["archives/2018/06/index.html","134453574846cc851fa3e723b2f20b75"],["archives/2018/07/index.html","83d22b2b3f112269920e9a0d9989f78a"],["archives/2018/08/index.html","03a8ada0f67bc5cbb0ef30f406633f1b"],["archives/2018/index.html","28b5a0f919bddcf1f9a71e5629685b1d"],["archives/index.html","40875d8ede5a6990f0182854c9fa5b57"],["atom/index.html","f1b860202349948e966cd58bc51ce30c"],["blockchain/base64-base58.html","e63c84f42437cd80beda70ec19994245"],["blockchain/bitcoin-difficulty.html","fcb9096aca80ac4384277bc5e461ed69"],["blockchain/block-chain-ethereum-contract-program.html","df1d886cb691cb4748b916bef5abf56d"],["blockchain/ethereum-programming-introduction.html","6b7954bec3a0b945d9b4f3449187cfbe"],["blockchain/ethereum-rationale-introduction.html","41b7770621e0a5277f0c784bb4b5059b"],["books/index.html","63d75d2663121031482af4e32703e79e"],["categories/Blockchain/index.html","decf643dadffd6bc91593eb3db019d73"],["categories/Blockchain/以太坊/index.html","5a62e591ec9b97d779d9e37cfc2b4727"],["categories/Blockchain/以太坊/智能合约/index.html","5c62565f88f024e5f495c1e005d1d5d8"],["categories/CSS/index.html","6848a842d0d05f659e2a9df45eeec0c4"],["categories/Git/index.html","e7b04b8b2a7dc72cd3e698dadffdd8f9"],["categories/Java/index.html","c5d160710ee9470c75265990aeb1e445"],["categories/JavaScript/NPM/index.html","00a0f139b67e9ef0f4b2f7446f942ae2"],["categories/JavaScript/index.html","b8339d98b8056a8cbd170b615962fc59"],["categories/Linux/Shell/index.html","8356dcb7b2b13d08ad53141c2d0509a4"],["categories/Linux/Ubuntu/index.html","fdf34246c17ca017427993e1a0050244"],["categories/Linux/index.html","0e0ec47853b98cb8b4f7f9112d53273a"],["categories/MongoDB/index.html","24f98e36776eca556dc163da473bab19"],["categories/index.html","c390bd8ba1f3eb5e067be9017783dceb"],["categories/程序人生/index.html","16e9ca9bea2f0e2f782d7cfebc814a86"],["css/css-normal-flow.html","dea08bffd21d3256a8ea8771c75318e8"],["css/main.css","e691427e0a781afa202b2578efeb31fd"],["drafts/configure-multiple-vue-project-with-nginx.html","9488ec110c11c3eaaffa07cb5136fc4d"],["drafts/iframe.html","544a7f8a6e0e52b21737a243f51c9600"],["drafts/record-re-install-mac-os-10-12-6.html","ee0c64bc2520504963b145f2cbbf2e8d"],["git/git-DETACHED-HEAD.html","8941f4beac40f3a0151d67ad6e147b84"],["git/git-branch.html","76683d7ceffa3f5d9e9c1deebb44faf4"],["git/git-change-server-password.html","c1993f3254d4149dc688d9a584e6eb39"],["git/git-checkout-1.html","f54092aec69fca5b2edcb75b6f3ec3fc"],["git/git-checkout-2.html","37e0af01be90caf7b06f38de77c471ab"],["git/git-diff-m-symbol.html","b400ad496a412acd715ee4ae1382a605"],["git/git-git-flow.html","cea2f42f6bf926d826caae1a0b0e8a91"],["git/git-git-merge-ff-no-ff.html","ba69d92f142858deff10ece457be450e"],["git/git-reflog.html","7c3c8e2c563595de6e157d77a560cadf"],["git/git-remote-set-url.html","ec57ff36fdd7b4fae84bf5d3069d9242"],["git/git-reset.html","239c6e9bd2f2a62cc808821d4d55842d"],["git/git-revert.html","fb5c40fe77619dcd1abfb4328b8ef9af"],["git/git-tag.html","fd5ad91314139a8c917456d84196c542"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e7549006dfa80e088c3a6e1c681d99d6"],["java/java-deploy-resource-folder.html","c85fe5e75a18bb9d66c18ad775f11ece"],["java/java-shiro-note.html","a8e447805fe9c2ce1412eb3fc0f0d586"],["java/java-springmvc-X-Frame-Options.html","c01fb6e0b37b52755a7e967b059a1660"],["js/js-logical-operator.html","5b619501f2f61855b9718cb0f88deebf"],["js/js-npm-symbol-caret.html","5ddadcfdfa8b8e657eb627c8e407565f"],["js/js-npm-symbol-tilde.html","2e9520baddc03f100f8a2403107ce2cf"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","37989b5fac95a6fc7244a7c2bf042bb1"],["linux/shell-command-netstat.html","90c6e7d8db6d8a1261fb66fc94de3294"],["linux/shell-command-sed.html","53266c4d0b8e3a096ccb0b381a609557"],["linux/shell-command-tar.html","608c5d4b05b7f95d01622a557ba43e2d"],["linux/shell-command-top.html","3617847a04acf6d6158719a53c4caa0c"],["linux/shell-command-touch.html","f17893cc891b0ba66c45b7795a495d36"],["linux/shell-command-which.html","9153d3e392390dc12f0d16b66d243156"],["linux/ubuntu-user-add-delete.html","aba4e77124e851a2a7d9a5f6af0ce3fb"],["mongodb/mongodb-collection-aggregation-introduction.html","35a75877032ee04c3194daa16bfd3928"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","957961ee2284fb8807b14a3905c75067"],["mongodb/mongodb-collection-create.html","b0afee16322af6cdb6d89afdd9137697"],["mongodb/mongodb-collection-delete.html","ea4627b777fde651b7901649d1674d22"],["mongodb/mongodb-collection-find-1.html","76b4fb120a71f404be60445295ff147d"],["mongodb/mongodb-collection-find-projection-operator.html","56e3f624464ba424f6360dbc38e6767d"],["mongodb/mongodb-collection-insert-1.html","79a0d072cfa79129ebcf3ee5e345dfb3"],["mongodb/mongodb-dababase-create.html","7cbc5f4d18537e440c7dbc2dc80514b3"],["mongodb/mongodb-schema-design-note.html","e9835a63b44e8935e5e3dcccc6f00954"],["mongodb/mongodb-study-note-1.html","5b94cf8fb94d27cc31819fa6423ef10c"],["page/2/index.html","35f060b1a00637197a314981991914ab"],["page/3/index.html","6e93c273058602583e34c6a092c7dae6"],["photos/index.html","e3ca65bc40149f91c75f7fae4926e29f"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","f5681d88a0e3b99c1c4e627713259ab9"],["tags/Base48/index.html","024da58c9af017132b00de3c4dfe7c18"],["tags/DETACHED-HEAD/index.html","923ecbac7f330ea068c8c3b81ade1b2e"],["tags/Git-Flow/index.html","6912de80387e08458c2921c792b797e6"],["tags/Git/index.html","40e71ab1de39c5f4cd9640e91558152e"],["tags/JS-逻辑操作符/index.html","4e095beaef8018f7b7709fcf4b0a1a57"],["tags/Java/index.html","9043ac97e943c020a91d2018dc2ea609"],["tags/JavaScript/index.html","46c458d85fccc13cfb9b2642c84760d0"],["tags/Linux/index.html","eafe30c0451f85485bb4d2f7e4042a7f"],["tags/M/index.html","9ce61e0ce9d60249997e3443d96c4787"],["tags/MongoDB/index.html","2c6d2aa8c937fc8336e9b744636d4b7d"],["tags/Repository-not-found/index.html","b0a6157638bd06609a910545084cb29b"],["tags/X-Frame-Options/index.html","6f75fac543bc5448553c61f960f05e64"],["tags/checkout/index.html","c58ec8b93b81f66a42ed380e9274c780"],["tags/diff/index.html","34ace8a7a31c50602eb6d536189ae707"],["tags/fast-forward/index.html","b016199a6a22990c8920ec5823d1f935"],["tags/ff/index.html","39aade0fee330524746691f96dadb8c7"],["tags/git-branch/index.html","b0c2e814e741d19dc1101d948146c6b5"],["tags/git-merge/index.html","0bccf9cbd4cbbe9587e0f9f6b1a8f0a0"],["tags/git-reflog/index.html","df56326c656b8ab2209cc4076a8a87a0"],["tags/git-reset/index.html","23eedadaee27d4c303597a540b496414"],["tags/git-revert/index.html","ccad9f7549f422f3ef71e3c8feec1ef8"],["tags/git-tag/index.html","dad52d82a1f8a59a4857476aa38c4358"],["tags/index.html","2a59f2cf920de84e2971a229cbe5019e"],["tags/no-ff/index.html","a2122dee8d03f655eff1aa5202f0a5c3"],["tags/schema/index.html","a07c099ecfc59ca3891053f7ac73dcf3"],["tags/shiro/index.html","0de6e71f4eacf1113d59119e7516946b"],["tags/tomcat/index.html","17a3b0627d3d896b6fa7c578a67e668b"],["tags/windows/index.html","3b9f4de14c0da9a44b1d07194b823f4b"],["tags/以太坊/index.html","66ac7b0dd3cc8bb5de8f5411743b66ba"],["tags/修改/index.html","9d6e61a5d2cb415dec1a604823b64963"],["tags/分支/index.html","71d46228784377912f8f382c75c75482"],["tags/创建数据库/index.html","58625461517272b44f2f98cfcae43fdc"],["tags/区块链/index.html","b74b4a69275e34ace6cb7a77b5805fe7"],["tags/学习笔记/index.html","92efba502311235d772d0635664f0e92"],["tags/工作流/index.html","7b63054b0b059d7c68bbf8c236cf3fcc"],["tags/智能合约/index.html","b095b39d8819c8ebd6a661e7845bbde1"],["tags/标签/index.html","2f63fcb1fc92ed87b0d2387ba591a9f8"],["tags/比特币/index.html","6e051bef63d288f714c8ebc5383e5232"],["tags/用法/index.html","305e37136ff3ac95c439735abfcac113"],["tags/符号/index.html","7e3402e167a6047bf68305e22d4bc9e0"],["tags/编程/index.html","1ff316d0bbcc90076cdba258d584878f"],["tags/远程仓库地址/index.html","98ca3428e0513aa232adb62c754e64b9"],["tags/部署/index.html","301ff647cf8efcb5e65e6e59de53bb6e"],["tags/难度/index.html","83ae362e1037a927c83c79d60d3803df"],["thinking in programmer life/full-stack-programmer.html","c1825b4bee1ba42374b322afd5ff8516"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







