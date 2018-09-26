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

var precacheConfig = [["about/index.html","726338cc43083056438c1c2d26ef093a"],["archives/2018/06/index.html","90f5726b7efca2f93ecd1a0752bf7092"],["archives/2018/07/index.html","266b9d7673aa79e6fe3dfef2bd5aeefe"],["archives/2018/08/index.html","69600cba03d3845bd6c99e2d1af0e97e"],["archives/2018/09/index.html","63903b23042e0f2c1d89c46b32dd393a"],["archives/2018/index.html","9ebdecc20bd31b97cb3a0975653d38dd"],["archives/2018/page/2/index.html","c77773d78f885fc7098f5d3762c9d958"],["archives/index.html","42d493b163485718efad7e8d6af5a599"],["archives/page/2/index.html","91e269bb12387737ad3ce23e51b9196d"],["atom/index.html","cc28f4776e4cda966b69ab45b7241b20"],["blockchain/base64-base58.html","0adce2f39d1b50e1ecea8ac21ad0a50b"],["blockchain/bitcoin-data-storage.html","d62948f53da61599bb7d20948a26a746"],["blockchain/bitcoin-difficulty.html","1aadb215299d4c067803d945830ee118"],["blockchain/block-chain-ethereum-contract-program.html","79a339b60a75b298e5e06f9b2e5d7ced"],["blockchain/ethereum-programming-introduction.html","18f926f94858214987296860e4752e74"],["blockchain/ethereum-rationale-introduction.html","2724d7825135382d2200e530cb9b914d"],["books/index.html","03cab3a1c220fe630d6cee9261b3520e"],["categories/Blockchain/index.html","686128f40465e71286ab4d567ce2f18d"],["categories/Blockchain/以太坊/index.html","2f7902e67af62d9dd6d97d28d4c3c23e"],["categories/Blockchain/以太坊/智能合约/index.html","2df5af845503fc7a8f2b18bc03367cff"],["categories/CSS/index.html","e58a28915627391ccd34495085a72beb"],["categories/Git/index.html","4000ba07254f94686ad0948719768908"],["categories/Java/index.html","d8518d78d962380a06a4b15f33d0eb55"],["categories/JavaScript/NPM/index.html","1c28604395bdbd19ccd1f4bd922cc65f"],["categories/JavaScript/Vue/index.html","68446905821514badc8e083ba03e6510"],["categories/JavaScript/index.html","86e1648942a72e7ffb411706a571e1b1"],["categories/Linux/Shell/index.html","e96eb8c7060db71e5172a0eb5f65d333"],["categories/Linux/Ubuntu/index.html","01afe7aaa704991950a29cb48bc1ca4a"],["categories/Linux/index.html","34949dc16136fb2a5f5550099b2c4ab4"],["categories/MongoDB/index.html","577f107f900dcca874a424a60c966d03"],["categories/Python/index.html","766709940288144efcbdb25b74153cb5"],["categories/index.html","f3ae95cba00278deced1bc58a465b5b1"],["categories/程序人生/index.html","d77c8e3b9529108903cee3a865ec4481"],["css/css-normal-flow.html","d80c5731dd5c663c31d8f3e9e4172265"],["css/main.css","6c3f6bf383f5d62a0fbbd3cd0e8a663f"],["drafts/configure-multiple-vue-project-with-nginx.html","1b782d5a7edcc378ce28d9bdd28556be"],["drafts/iframe.html","5a49a243f89089264f2e5d4143e5a299"],["drafts/record-re-install-mac-os-10-12-6.html","6040a193453cc0ad8811cb7aaff7ba0c"],["git/git-DETACHED-HEAD.html","8d50435b089f8880d0b5ee20fe49b786"],["git/git-branch.html","3c548d3dfe91b95a52544442e5ba80c6"],["git/git-change-server-password.html","c7368cd5d7b172c57858af03dfa4c2a7"],["git/git-checkout-1.html","00e0361a80f004ae306cbd82d239ed2a"],["git/git-checkout-2.html","438f2d9e9597ca57c38ed4ecbeb4f40d"],["git/git-diff-m-symbol.html","838aebb61390812ca32c7a9a6dd9db01"],["git/git-git-flow.html","df1a812d23ac1cb66e87868be52ed0b1"],["git/git-git-merge-ff-no-ff.html","330ab05131241c00ac3b74480f308794"],["git/git-pull-1.html","74efd08eec106efd0d43c2f1f48f5387"],["git/git-reflog.html","1232a5bccfb3a58c03c74d2f8e1cacac"],["git/git-remote-set-url.html","03386f0883d2a890731246cb206fa838"],["git/git-reset.html","4542327fe93326377d972221f405637f"],["git/git-revert.html","83ef7e0e2a23ede3bb70720bd60c3018"],["git/git-tag.html","2edb0a2e913ce2def62dac5982290d61"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","94f46642d250f94bac6fe87fa557d15f"],["java/java-deploy-resource-folder.html","3ca747f1cb97d70dec425720b669fa73"],["java/java-shiro-note.html","18057996b48688366c7b54dce6146e4a"],["java/java-springmvc-X-Frame-Options.html","a6aaa085bf8e23c0a3db42cef04b77ba"],["js/js-logical-operator.html","d4a244de45f9ef932849d80903d3ca71"],["js/js-npm-symbol-caret.html","e008a67d98cdfeea640540d0a8960e1c"],["js/js-npm-symbol-tilde.html","1e753b89d6b8b965974d0e49f48b8901"],["js/js-vue-note-instance.html","2a440e24f2f96be460b6cf144aeb6b2f"],["js/js-vue-note-introduction.html","a7d3fee61ead689faede59fcee036c1a"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","68f1931050b188429aa33abf73c79fff"],["linux/shell-command-df.html","efeff7a076811faa2f95495def8691d3"],["linux/shell-command-netstat.html","1d996c4e55b537241ac006b91a64b03d"],["linux/shell-command-sed.html","30f76590965d7264b3271cba77a4667e"],["linux/shell-command-tar.html","8d0890d33e5f28925802ce894584ec6f"],["linux/shell-command-top.html","122897b08eeb214b76283db95e613ce6"],["linux/shell-command-touch.html","a8859dc6179630eb5d53456724f7b5f8"],["linux/shell-command-which.html","1c5a8a527f2c80cf332c01f4a10d91a4"],["linux/ubuntu-user-add-delete.html","3a10943fee3ba658d1fbafc1251e5e38"],["mongodb/mongodb-collection-aggregation-introduction.html","6fe479accbf9b78c25e8534ed6ff200e"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","fee47a90ab024273c12482571306be2d"],["mongodb/mongodb-collection-create.html","aea3deaac76a97aaddfd7e0b62754d96"],["mongodb/mongodb-collection-delete.html","57b14bbde7e47373b08e75de10ea2667"],["mongodb/mongodb-collection-find-1.html","d92f4045f9d6303e36630e4dd4bba9c6"],["mongodb/mongodb-collection-find-projection-operator.html","710c7945b498c12ea78d259d076a4d9a"],["mongodb/mongodb-collection-insert-1.html","92b0c47aa517f34077f300d12ef56b75"],["mongodb/mongodb-database-create.html","37ab20ef581d5f5ba2205a4bbdb9c6ed"],["mongodb/mongodb-schema-design-note.html","5bdfa24e0502c6a7e073a97b9abf9df0"],["mongodb/mongodb-study-note-1.html","754ce96820396ce0d12eb151bc2b4a1a"],["mongodb/mongodb-study-note-2.html","0938f76be00d9d2b41ebc5ade46cc4ea"],["mongodb/mongodb-study-note-3.html","59dfb27dfbfa37eae8fba39fe904f7f5"],["page/2/index.html","de3210f0d9edd9983f134ef6c9202754"],["page/3/index.html","6835da295cc927471a498fd48b9571b3"],["photos/index.html","5b801312a91f897b03d1885cc2deb06d"],["python/upgrade-python-under-ubuntu1604.html","1b9f55d0c772fbc7cbba69e5a8e229f7"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","d3dd61adf71f709472a766e8879b3258"],["tags/Base48/index.html","e332c57e003b1290db8890ed2232f63f"],["tags/DETACHED-HEAD/index.html","0af4661c967356b1dafdd7b7b12ac2ed"],["tags/Git-Flow/index.html","530492a51bb223bad8e77318540db58e"],["tags/Git/index.html","e94cd4eddf55b79a394f2001253d2b65"],["tags/JS/index.html","c898c841e0a75ce235ee52b6077165a3"],["tags/Java/index.html","b361ea30157f18e9c3c29cbfa6f847c1"],["tags/JavaScript/index.html","9ec3ca9b02ad17123366068861eb6cbd"],["tags/Linux/index.html","07ac4518d29e99805509632ddbfd79d3"],["tags/M/index.html","399501ef83646347b26f8725b5e57cfc"],["tags/MongoDB/index.html","1fa9561cdeeb2f42847336918d3d1d23"],["tags/NPM/index.html","c999e8d6146f459b6975df4a4a06c6a4"],["tags/Python/index.html","d834a94636861a519f89692a5cee12d4"],["tags/Repository-not-found/index.html","88a5c1cfc42f353aabc5a0340507dfaa"],["tags/Ubuntu16-04/index.html","7898c3bc4b6d2b7401d7c63055b0bebb"],["tags/Vue/index.html","42126494722267861abdad91ef2d1360"],["tags/X-Frame-Options/index.html","421c796a4ec4216b4b116ae9e65c6dc0"],["tags/aggregate/index.html","d304c7ef34c5537f9d9891b5ee12006a"],["tags/checkout/index.html","035c4a3738c7d695a71fa6fcbc0c078f"],["tags/collection/index.html","3b57085320c2d10b398d51a6512771e2"],["tags/create/index.html","99f496d6b1a5da670b77f9d39add49d1"],["tags/database/index.html","207aef942b2b37b7eb608d5eb000e0ec"],["tags/df/index.html","4166ae5eb9463f6a5f0257ab056a19f3"],["tags/diff/index.html","e2ad112d0c75d45757cfb3a672cc4976"],["tags/fast-forward/index.html","e2eb9777b826834c23a2d62f8be48e90"],["tags/ff/index.html","76c7aa9cb7b21b56e5f8d974bf261105"],["tags/git-branch/index.html","f487b1d16167522851a6f36d0d7605e5"],["tags/git-merge/index.html","93720306fad2da6b98bf9f7ab884cb4c"],["tags/git-pull/index.html","5094511bffe74fa2c4a2359718b89031"],["tags/git-reflog/index.html","1537756019c916f6c6f87e42f50318af"],["tags/git-reset/index.html","9b133e8be15026a26b8551557a3d194e"],["tags/git-revert/index.html","9db0e957b8370bd8b164a769e9ff04e8"],["tags/git-tag/index.html","973006ca68c9140387d97824cd00671f"],["tags/index.html","4a9b4c306a59ed6cf39535e4c0eb2c05"],["tags/no-ff/index.html","accee2d2b8176e0d4b6d8142141800a4"],["tags/schema/index.html","9cac684710c8cb3cd45f82a44036afce"],["tags/shell/index.html","146fa040203ccc9002dd5fc99ce8c826"],["tags/shiro/index.html","a7d698b09e7f4b7fb91c3cfc7598b7ce"],["tags/tomcat/index.html","d6c4862cb81ba6259d34587e1e20d5c9"],["tags/windows/index.html","323c50506bdba6cc3bb36562dea39ff6"],["tags/介绍/index.html","ef079f80e79328b4868a4601a2101892"],["tags/以太坊/index.html","f85b5017f29d44fc107dbdae2f2591af"],["tags/依赖包/index.html","3f03ac46d50f33b214fa97aa6d239538"],["tags/修改/index.html","b8c4f15b5be173dae1a8703482c24fa9"],["tags/分支/index.html","7b9c9cf96013d13e2e7523a74156f3d8"],["tags/创建/index.html","b0be4a89f8e042b2196eae193b0e2946"],["tags/创建数据库/index.html","6e049042851d99a6c4cf0d063ac65cc6"],["tags/区块链/index.html","5d7791c0b1fb0521cb907899900e0430"],["tags/升级/index.html","e82ac0c82d58fdc9dbb3f771d0e4d695"],["tags/学习笔记/index.html","ceabbdfd5eb22dc2d0a5d506267aa8a9"],["tags/实例/index.html","0550d4ea5a15fadcb1202ff749768453"],["tags/工作流/index.html","a3ae8ca4ff26bbe9679a5e43d59407c1"],["tags/插入/index.html","5aa487ca94485b1331be510bb1c46607"],["tags/数据存储/index.html","bc1102115c0234698512a7f31cd59be0"],["tags/数据库/index.html","a574493d722fbcf93b75dcea6ee385a9"],["tags/数据集合/index.html","9426d88441765c26a2981851c5b1a5e1"],["tags/文档/index.html","36cbf4f404093dc2fd3cde73efb92acf"],["tags/智能合约/index.html","d0b3cd91ff703b7e5f1375b5096ddb1b"],["tags/标签/index.html","c9aab9356a82ff7f26f43b9655a316a3"],["tags/比特币/index.html","ab9395c2b503abffbeafc63a80961046"],["tags/波浪字符/index.html","e6ccc43c31e3868386167c3da0e07078"],["tags/用法/index.html","97cab15d2323990bc9d1172125d4f0f2"],["tags/笔记/index.html","cb09873a3e85a6f14ffe47f20af3ddfa"],["tags/符号/index.html","be04da9f086a5e467bb8ff843dd36236"],["tags/编程/index.html","7f5b1ba6acbb72ada9f19c10aa9f58a2"],["tags/聚合/index.html","c56a6a8af742c26407cf2057fe48a5bf"],["tags/远程仓库地址/index.html","8ca1a858f69e299b9dc99a4019ed0e78"],["tags/逻辑操作符/index.html","43964e78762086b25d5459f5fd27323b"],["tags/部署/index.html","1c3f47bf63d2057bae57dc10b453cceb"],["tags/难度/index.html","1c2a281bd039bebff4a23193fb6498bc"],["tags/集合/index.html","fc425d475017bcaf46d96346c1dcbe24"],["thinking in programmer life/full-stack-programmer.html","6d13d6279d83c61d2c108c62cb22455c"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







