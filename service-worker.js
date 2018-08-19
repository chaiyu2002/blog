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

var precacheConfig = [["about/index.html","8d13dc78c7fdd75f092929748066b0f7"],["archives/2018/06/index.html","d120fa389dd6e249bbdc77c09fd687c5"],["archives/2018/07/index.html","0e17e9d09948a5b83e133a7771bcea26"],["archives/2018/08/index.html","e8aef5148bff351b24876a1dc54c1ae4"],["archives/2018/index.html","05f31edde26bb24660e268d73416940b"],["archives/index.html","c2315cd6b7a1e97b28dcb45740b2f0d3"],["atom/index.html","5abaf17ddb8832431fe25eac092f4e58"],["blockchain/base64-base58.html","4fd3b6fef35c2ae5f919fdc673686e9c"],["blockchain/bitcoin-difficulty.html","82947a2ea5f70e5a9c1c5aca196571d6"],["blockchain/block-chain-ethereum-contract-program.html","5e6cb752784eff424867a03803cb658b"],["blockchain/ethereum-programming-introduction.html","c265d20d2ec44f019bee3b5e1fca49ef"],["blockchain/ethereum-rationale-introduction.html","fba04bcc0bd87ff8069f3e16e307d928"],["books/index.html","f0fbd184a68846520d1b89daf361702c"],["categories/Blockchain/index.html","19cc39f925b37b3c69a5adc408fffe26"],["categories/Blockchain/以太坊/index.html","23e7b612252c64e88aebd4d37a0733c7"],["categories/Blockchain/以太坊/智能合约/index.html","111f58038b6014a57ad03debf109e531"],["categories/CSS/index.html","3acd6dbed4a1f5f9a467efa23232ddbe"],["categories/Git/index.html","8faddfe6848d1dc8b4ac78785941e188"],["categories/Java/index.html","b5a6e3248d4f456b7f71c6ba709dd0f2"],["categories/JavaScript/NPM/index.html","e74cecb2ce892be5be1eac7e672cc484"],["categories/JavaScript/index.html","507c11ad35ad4181ae0e9cfdccce0433"],["categories/Linux/Shell/index.html","64b01038b91bd7076eb07931f0cedbed"],["categories/Linux/Ubuntu/index.html","d7bc5c707576236d13b650d5310ad745"],["categories/Linux/index.html","22fec6637d17e776a758946d34188d5b"],["categories/MongoDB/index.html","7538a439b9b8e09c105e8a887f09d9c7"],["categories/index.html","c0530da08f2615e18b9e34207260129e"],["categories/程序人生/index.html","39d401b42577c07575ad962400cb22f7"],["css/css-normal-flow.html","d2aba38a2ecf896baba141b6aeb5138b"],["css/main.css","693a0b5b313bcc6e245716686d054fad"],["drafts/configure-multiple-vue-project-with-nginx.html","1df387dd930dfd2e39c559730e93d9f3"],["drafts/iframe.html","9006e87ee87608597f3d7f6322b0886e"],["drafts/record-re-install-mac-os-10-12-6.html","b73f7fbd842bc7e80e0de0e1ff50acfb"],["git/git-DETACHED-HEAD.html","389aca8b43e1cc4c4f49dc1c67c41a13"],["git/git-branch.html","c3ac26b696bd6a0ec64a048a17b9656b"],["git/git-change-server-password.html","41435d9a0876315d1c91883318223f56"],["git/git-checkout-1.html","584d1ffe5f3c0841b16a896d1df76014"],["git/git-checkout-2.html","450490afdbc9d6e7142e4b604a5b74da"],["git/git-diff-m-symbol.html","2a7f4da1da5d669d7e084f64379cc3ce"],["git/git-git-flow.html","e5275486a402af73e5e74bc6cb98abab"],["git/git-git-merge-ff-no-ff.html","c6ea76442aaa3f07043fc6e3ccb5de9a"],["git/git-reflog.html","100c6b1619463fec93fb28eadfb8c605"],["git/git-remote-set-url.html","8551131fc0c017ac931296c0afd78b20"],["git/git-reset.html","2ee57240e40b721e4dc15fb1469fdffc"],["git/git-revert.html","840f03c36be6fee817587902ad981873"],["git/git-tag.html","8996f159469fc956609a9594e37c2793"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","2db23834f661d9768b356a2d21453829"],["java/java-deploy-resource-folder.html","c75697c3e2b9816027951e286243712b"],["java/java-shiro-note.html","0c42c0cdb4ec5a6293ec33d7119ce697"],["java/java-springmvc-X-Frame-Options.html","cd792ff5cb55357a3f9af2bbdb191d8f"],["js/js-logical-operator.html","46dd3bd2e9fae9a966cdb54521897d3e"],["js/js-npm-symbol-caret.html","85496f89a64700584fd3263fdd15641f"],["js/js-npm-symbol-tilde.html","21c4ad9e11d333d967ed6a9e8a219fac"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","8bc4d406b8eab5750bddd570ba85b3ce"],["linux/shell-command-netstat.html","b951126496414dd6df2fb86fb1552947"],["linux/shell-command-sed.html","c76d12216d2312ae792a53104bcf9523"],["linux/shell-command-tar.html","a466dd370180b9e8b0e147c878aceec7"],["linux/shell-command-top.html","861daf4ecfaa57b47de5581b9fe23d99"],["linux/shell-command-touch.html","714c746cc2a0e0f0a0d3f58e0060ac4d"],["linux/shell-command-which.html","94660fbfec7748f7920f52eb59e901ad"],["linux/ubuntu-user-add-delete.html","3807ca2a8f53eb47045b3dd56631374a"],["mongodb/mongodb-collection-aggregation-introduction.html","106f527d54412510631a1ee6abc1d2a8"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","cff865e8cd4b961efd1c51062389022c"],["mongodb/mongodb-collection-create.html","b29c4f20bee6fde32afdcf335ff8b28b"],["mongodb/mongodb-collection-delete.html","9374e6f5d78137be574e332b5f46153b"],["mongodb/mongodb-collection-find-1.html","bbe9e2ba742325517b3bd2ae930886d9"],["mongodb/mongodb-collection-find-projection-operator.html","5e82c16d779cb0d62f829384145f6658"],["mongodb/mongodb-collection-insert-1.html","79873a69b436af61face80fee19dfdbb"],["mongodb/mongodb-database-create.html","153c88077d1a4358287d609595c90b30"],["mongodb/mongodb-schema-design-note.html","92cc6c99aa2344a9e3af41a4cb5b413b"],["mongodb/mongodb-study-note-1.html","d2e4596a2e7b02826fd629d48fd0dd18"],["page/2/index.html","1add7a33bee8ff9b024f361b534f7d70"],["page/3/index.html","5b7bbbcb795fce406159538bffc6261b"],["photos/index.html","316b455a5e02c53faa9a21ad9ed52bc0"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","ec82bfdcbdda398773b17476410f61c5"],["tags/Base48/index.html","76923cbd28b35cb3776b92b660fc6245"],["tags/DETACHED-HEAD/index.html","0fb96201ed1e108dc2b5504a618c036f"],["tags/Git-Flow/index.html","4cc6905721c6125d6752fd6799ea907e"],["tags/Git/index.html","ea24eaf2601f631c2e91764785320a4a"],["tags/JS-逻辑操作符/index.html","9d2c8f9a0aa780fc294338c1e78f3aaa"],["tags/Java/index.html","4c4066a7ee2de39badcc300340259b29"],["tags/JavaScript/index.html","9a93fbe3d757885cbdfaf8687080c58a"],["tags/Linux/index.html","afb995ba7be660e245a213452fbd4ec9"],["tags/M/index.html","e568d9e5564c9104bf37222d75cf308e"],["tags/MongoDB/index.html","b0241b5f03971f5e9fb7cf1eab7d503e"],["tags/Repository-not-found/index.html","69e093651275729deba689f9ac584a8a"],["tags/X-Frame-Options/index.html","f4cebc21ba14e520542b8eab70c13213"],["tags/checkout/index.html","9519d94865a2757ea5d53b287ca90b37"],["tags/collection/index.html","16525000e7ce29c480a3a0deedd3dfc7"],["tags/create/index.html","0899f5548e001b2e1530c43e7b634b2a"],["tags/database/index.html","3c3874615ebb479236c8057de102890b"],["tags/diff/index.html","1644e38651b06011298a0da79a47afbd"],["tags/fast-forward/index.html","711af3a67aa24fb29c0278365dfd6065"],["tags/ff/index.html","6670b09893d6eed528ee59317fcfd16f"],["tags/git-branch/index.html","76fa97b5e7ad2e894c641db0eba4f731"],["tags/git-merge/index.html","a43412fff5db751666cc7a878016d3f5"],["tags/git-reflog/index.html","331e3c509386b7ef24cb7f0fb6f88d0f"],["tags/git-reset/index.html","23a36514a8656d7cb805d17275da92b4"],["tags/git-revert/index.html","109dacd0c9359f8255a527883042ebc0"],["tags/git-tag/index.html","b8f1f6eb323ffdafcaf57cedd4b2164e"],["tags/index.html","89c3a8253e607c9555c381625bfd63ac"],["tags/no-ff/index.html","f93ff3c13ba72576dc04bdfa06f547be"],["tags/schema/index.html","41a691a181b4200eb8eca9a83e787573"],["tags/shiro/index.html","2119749e1338d488da815e7fc4e880ce"],["tags/tomcat/index.html","bea17db86293b5819410b61beb998fe5"],["tags/windows/index.html","f61efc6d6d172321e7c017e8da6b5905"],["tags/以太坊/index.html","dfa0ccb43a40e1996eb67141082acaef"],["tags/修改/index.html","afaaa7f03a0c7087f4be75fa4f58480f"],["tags/分支/index.html","50fe2f7deff4ec43a08ff144e288b046"],["tags/创建/index.html","392d256ce2d4a4e23499e5695e683401"],["tags/创建数据库/index.html","a238c29899a82ea70e1d26e01cf6e7ff"],["tags/区块链/index.html","d2f551d48fd4d27fb0a394c91ecbdd6a"],["tags/学习笔记/index.html","c30bab564e69e7cae1be65b8f2645022"],["tags/工作流/index.html","e8fa836227d728fa687ba79269f2e06e"],["tags/插入/index.html","857389160438ded8869ccac02accb80f"],["tags/数据集合/index.html","aa89ee0740beaddd478798adef7306da"],["tags/文档/index.html","cef94f73e0da1342b29ae01424992491"],["tags/智能合约/index.html","65f423345bc3f8dcf48de9b5274da73a"],["tags/标签/index.html","1c877c38d694953d2b75fbcf0fdf6ce9"],["tags/比特币/index.html","c9dd7652e73c75fb6a1014ada181e040"],["tags/用法/index.html","3f1317666aeb6401465344100e84f95d"],["tags/符号/index.html","40684695cd3a08ea2444b0aaea4f1c35"],["tags/编程/index.html","155eeb51aa7d617291b3fb740271cce5"],["tags/远程仓库地址/index.html","0d917a8cd5daef27674ae67571443833"],["tags/部署/index.html","be2b39487a6c6402e766a88a2e83789d"],["tags/难度/index.html","f030edd87a16b0476eee9bd90de836de"],["thinking in programmer life/full-stack-programmer.html","e71739f0d9324fb57cae73e82a34abd4"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







