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

var precacheConfig = [["about/index.html","d2c998be437b734a0f53aac19a223285"],["archives/2018/06/index.html","dbb442c3451b3cec8b044525f03ff031"],["archives/2018/07/index.html","2554bdbc363598d803cbe30f059d0e2f"],["archives/2018/08/index.html","c1760ccd63f6b41b74b72fac518109af"],["archives/2018/index.html","7730c8c4992f5ff3b15ef57ac5cbe997"],["archives/index.html","b7237788293b06f4418db1dc27260468"],["atom/index.html","5defd61ae2798455fd6d45f601e2a3c0"],["blockchain/base64-base58.html","eb1586d0ef779f9858fc8d37f0c695b7"],["blockchain/bitcoin-difficulty.html","1c76d9f7f264a6cca0e94ee13211d257"],["blockchain/block-chain-ethereum-contract-program.html","00c324f6073820360bb48c4b7b0ae8c2"],["blockchain/ethereum-programming-introduction.html","e817a158edd45729cc08f9f2c7f7b3c7"],["blockchain/ethereum-rationale-introduction.html","a5efc19873ce4ff428814e932b0902d5"],["books/index.html","c043c388e9b93227b79ea3bdd86cbb15"],["categories/Blockchain/index.html","b5e236f3c505b3c48226e65b2c238e33"],["categories/Blockchain/以太坊/index.html","140150530ef479756755b97c1b581a09"],["categories/Blockchain/以太坊/智能合约/index.html","0a4423c3dd81cd70d481c2e00a95249a"],["categories/CSS/index.html","5ba01fc2a2cfd88634f5b35a87727174"],["categories/Git/index.html","a7e4dda4ecf4ce1f6dcd36afd0ee65e3"],["categories/Java/index.html","faa507a78b2f97e22dae843de95c060e"],["categories/JavaScript/NPM/index.html","89c6b255a822001bcb648202c6bcc536"],["categories/JavaScript/index.html","26e57ba1473851ed5e35f23596500ee3"],["categories/Linux/Shell/index.html","9f220da12f9355ff1c21ab8242e64a5a"],["categories/Linux/Ubuntu/index.html","886e053801b8f499c200072553e39474"],["categories/Linux/index.html","f53737d3aa0f6bf9cc0450af2dd17337"],["categories/MongoDB/index.html","66d742afad2bad387e291019359c48bc"],["categories/index.html","a7c29612f5b9163b50396a88d8752370"],["categories/程序人生/index.html","46fc98536055dd6633be6913e7f9bd06"],["css/css-normal-flow.html","83c2128ce63a2325931e1c97842e1733"],["css/main.css","4be63852cbe3e0153249afc3f8cc0668"],["drafts/configure-multiple-vue-project-with-nginx.html","cf96cf7b79c099b5c4f695e999e259f3"],["drafts/iframe.html","a159908986ff1065d2a11da759b6c727"],["drafts/record-re-install-mac-os-10-12-6.html","b5f92029e010fab053f4b5fe408f4f90"],["git/git-DETACHED-HEAD.html","d31c192dc25517e08820e1cff28f6ba8"],["git/git-branch.html","da690eabc70e5b2f162f9a0ead0ae587"],["git/git-change-server-password.html","8e83f4e6d8642d48ac1e37f64f6df08d"],["git/git-checkout-1.html","41512edd9d300ecd6b727bf7589e01bd"],["git/git-checkout-2.html","41964810ce23607720519bd8cb7601cb"],["git/git-diff-m-symbol.html","db03f1134f74f164844867d56c3f799d"],["git/git-git-flow.html","9fea49d43a7257516b44eea6dfcd9a3f"],["git/git-git-merge-ff-no-ff.html","f6c7d2ae2afb2af10bd9cfd9c90c576d"],["git/git-pull-1.html","623bccbcbf5021332858d9a06ddb4398"],["git/git-reflog.html","fbfe5a507d96e8ff5c095b979d5d1c3f"],["git/git-remote-set-url.html","c5c77668dd54a36a02f8a1871114bc50"],["git/git-reset.html","bf613291ed939d44e5af375d90d068e1"],["git/git-revert.html","c61e888b72eaf2000b266d947d02c315"],["git/git-tag.html","d2219033b07cbed18af65af483673e4d"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","bc0f1953f5a7807dcd2530fb1ee36c16"],["java/java-deploy-resource-folder.html","8c17090c248dc765710390d2bf06ec3a"],["java/java-shiro-note.html","3dfbcb2815a3f4d308fa1df5bb66bbf7"],["java/java-springmvc-X-Frame-Options.html","4aa112df7f53c7051baa827a810008b4"],["js/js-logical-operator.html","45fe12b53ac6ebe9356ebf36f0172697"],["js/js-npm-symbol-caret.html","d95239976fff3aed849016520a685a26"],["js/js-npm-symbol-tilde.html","53f0772b023c41b15f72d0cb8920d852"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","a9c77efba1f39c1961e00b8d503fb0dc"],["linux/shell-command-df.html","edd18b3cc9dee80d7677e59ac23d3f2a"],["linux/shell-command-netstat.html","055540d3dcc800d168c7533df535bd16"],["linux/shell-command-sed.html","3cb4f42bc309d3830db696458b4eb1e2"],["linux/shell-command-tar.html","f3f867800df69b1b884a38de06ba6281"],["linux/shell-command-top.html","db19df58d5fcc96ecf31130aeab32c7f"],["linux/shell-command-touch.html","d0fc79d4ab696e347536d5c225fdc42d"],["linux/shell-command-which.html","55e6a5416c997625e00636704f348507"],["linux/ubuntu-user-add-delete.html","1dccdf87b08455c180422562ff8ca398"],["mongodb/mongodb-collection-aggregation-introduction.html","dc0242d44024c8e7eb71c1bb358d77e9"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","7e863d1e069dea0b8845b6e72776244c"],["mongodb/mongodb-collection-create.html","930597df9dbf6c79aa99f3d52e95c4bd"],["mongodb/mongodb-collection-delete.html","90b344d42aa4cf299a0067720619f315"],["mongodb/mongodb-collection-find-1.html","7794dc66e40b32ce7c966dd75eeb98de"],["mongodb/mongodb-collection-find-projection-operator.html","515e7ec0bcdd46428a2423765b09a435"],["mongodb/mongodb-collection-insert-1.html","135e71af1b6e4560bdb06ccde882d663"],["mongodb/mongodb-database-create.html","7de15fe6d6c6524136299af76b65c754"],["mongodb/mongodb-schema-design-note.html","371a467be31b2c7504b96412e6204f02"],["mongodb/mongodb-study-note-1.html","660aa9c8cd0886d981e9851d82ccee72"],["mongodb/mongodb-study-note-2.html","5d818c33a1f333942d13f04de9c79b83"],["mongodb/mongodb-study-note-3.html","4931241a6a1bbaa97dd04ad6e0e3e91f"],["page/2/index.html","82c00291aa7d8396e517906fd83811d2"],["page/3/index.html","0d0cab5a360e0eda4a411f9f149d1997"],["photos/index.html","4c18328d36951865b307ab9a119ceafe"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","e43a8ce1bfb2bc1dd1c568fc58a13e5e"],["tags/Base48/index.html","264152ce815f6da53a18b03624584ddf"],["tags/DETACHED-HEAD/index.html","e4ef488f29f18b3990707e5cc4f8246a"],["tags/Git-Flow/index.html","32f611d1427fea6b3242cbfedbc36fef"],["tags/Git/index.html","aeea548c1a18518065e6761c4389b291"],["tags/JS-逻辑操作符/index.html","c3cb75ab8f547e4b2d3f6d2c0fb48dca"],["tags/Java/index.html","669c57608037e625456b96312b17f848"],["tags/JavaScript/index.html","57d12d18d2678a7a9c57ce06e127a2a9"],["tags/Linux/index.html","26d4e92d17b225b98aea53dbda7930c2"],["tags/M/index.html","fb7ab25a70576d4362257c47e8929c8a"],["tags/MongoDB/index.html","779c52bc04266bcd7b0eb471c9a283f5"],["tags/Repository-not-found/index.html","bb1f845697a2d547ada1ae31fe153bfb"],["tags/X-Frame-Options/index.html","2ca7bc4f44822d36f86e3ec4c2a69771"],["tags/checkout/index.html","0046203c6b365ac93d7dab3f2ad244d0"],["tags/collection/index.html","195f5508807a009b1c070d541a077046"],["tags/create/index.html","d51eeda40995843c5cf2ab3cc66bcf9a"],["tags/database/index.html","7842138267e1fc9f2b4c6795a7caab0c"],["tags/df/index.html","9ffc38bd597a00d468f5e7424036e66c"],["tags/diff/index.html","9aa2383c42a48b75b7036de6a7728542"],["tags/fast-forward/index.html","fdcdb44ff623187586f54e6040747135"],["tags/ff/index.html","37b8ebfd1fc54c1c08ea057b5b95369c"],["tags/git-branch/index.html","2fd061990a0a0de02d9931d7400ec6ca"],["tags/git-merge/index.html","7879b718513ea308d22c65320cabd6ef"],["tags/git-pull/index.html","08af5c4904dc8148671c7467f26ded89"],["tags/git-reflog/index.html","f616abbd833f4492d0ad8855325c852e"],["tags/git-reset/index.html","c35d5257fb1c12461fee79fcf727e979"],["tags/git-revert/index.html","fce2ec1143212c04a67c87a3a84d72ea"],["tags/git-tag/index.html","3560f86e9fa01d47ae36d0fec9300a01"],["tags/index.html","37b7cd2235a424e5b0b06bdc41e2519b"],["tags/no-ff/index.html","f119dfb03ccffc18e06b1927868e1d69"],["tags/schema/index.html","4b95f89da29acde97aa4a1e9bb8528f7"],["tags/shell/index.html","efecc392dd208f899dd26452e58513c3"],["tags/shiro/index.html","27c775e8ada0b23f5b9731a9ea48d92f"],["tags/tomcat/index.html","6dffe567bc3a75213d2157fc50e6291d"],["tags/windows/index.html","2062e2621fe0ae4f282d4bec99a03307"],["tags/以太坊/index.html","2c20177862aaa366d10898890158bc71"],["tags/修改/index.html","0b486f4cc2e16ac8ffeaa3bbf12ed387"],["tags/分支/index.html","2080e3f703ea49eb1470707c1b60de4b"],["tags/创建/index.html","6e75646c9cb3a5b9aaf54ac0274d4ad0"],["tags/创建数据库/index.html","b403a5eee4a25463095f7b190196baa7"],["tags/区块链/index.html","006f5702f7a6067c83e133aac996d768"],["tags/学习笔记/index.html","c1f7eae5f2ff11d9b9c615acc7123087"],["tags/工作流/index.html","5d88839a3c6b37eee964010d8c4702f6"],["tags/插入/index.html","725c71393293f0a77873a9330e98c9c2"],["tags/数据库/index.html","9dbfec893cc942fc69fa01c2143f7857"],["tags/数据集合/index.html","e0e91f1ea8c00577d3a0bba33223e392"],["tags/文档/index.html","81d5fec5b0fa7494adafeb53af916da6"],["tags/智能合约/index.html","1c4fe698b9773d4500575eaff382d64c"],["tags/标签/index.html","da9f335765435eceaa8f2f020df4fa18"],["tags/比特币/index.html","dfa0e7bff08a77f59bbbf2e1c038eb56"],["tags/用法/index.html","95023bb4c68be4d34eb911d6837aee1b"],["tags/符号/index.html","d7682000c26fc4e0052d42b7150d3ac3"],["tags/编程/index.html","db6c97cd3ecd15c01afd4d8d70f8fb01"],["tags/远程仓库地址/index.html","d3c975e69b59d259837708c4762a5b69"],["tags/部署/index.html","15e60ff689b46019deb7dd63dff4ea16"],["tags/难度/index.html","b66ddafc02c5a0a425536a817e7be1d6"],["tags/集合/index.html","a7f00d676dc0110d6c50b72e43857e21"],["thinking in programmer life/full-stack-programmer.html","c054dfcd810f3da2d9e61ca5784c76df"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







