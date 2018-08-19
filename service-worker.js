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

var precacheConfig = [["about/index.html","d1a4e411d7c31b2633b37c91a5ead523"],["archives/2018/06/index.html","c1be86a38524580c3488dc0611b8d63d"],["archives/2018/07/index.html","f54a797d32224d0b0c0806c75c0e74b1"],["archives/2018/08/index.html","dc376540c5a1f5f0bb6eb90980dd93a5"],["archives/2018/index.html","387a1462a4d7694037d729abad9369a5"],["archives/index.html","350cfce4a19f982791402ed444461318"],["atom/index.html","4f47e6035cedd3e53716e74a71526f7f"],["blockchain/base64-base58.html","226cbb2394a6ecbf1c0c920c7794355f"],["blockchain/bitcoin-difficulty.html","9e9c6b956f53c049df2179540a7e2992"],["blockchain/block-chain-ethereum-contract-program.html","8c8315318a7a878945f659a51dc39caa"],["blockchain/ethereum-programming-introduction.html","6251767148331bb4119c246391cf3666"],["blockchain/ethereum-rationale-introduction.html","75915df8b5fb1ea1da81748fde80d3e1"],["books/index.html","161768e86311b67bfdc13a254050c3cd"],["categories/Blockchain/index.html","2d1c9b2a6dc94c241e676f12448cc0f1"],["categories/Blockchain/以太坊/index.html","6514dd048c3d5b040d3b27f86467e9ed"],["categories/Blockchain/以太坊/智能合约/index.html","15d873c17b7dd9dc7271156fb4f4be11"],["categories/CSS/index.html","c5c2f446c053829dba5f51a3191ee5c4"],["categories/Git/index.html","95d0fa51cad736dba17c3608deeda8a5"],["categories/Java/index.html","7ccc5fdd2e08cadf6e76eeae105f9932"],["categories/JavaScript/NPM/index.html","4e876a7a3fbc313b648bbceaa957692e"],["categories/JavaScript/index.html","fbb72f3da7d7845dfb834e6f839c8ee0"],["categories/Linux/Shell/index.html","bcc54aa8d3404ef74fa686f843e8ca81"],["categories/Linux/Ubuntu/index.html","8bd15c122fb569627e99ea593409c2dc"],["categories/Linux/index.html","277b85fe9d51cf502e2f21b2082a4041"],["categories/MongoDB/index.html","066214669d40264f75cf2ae4f57a9018"],["categories/index.html","c1bfe1a4bf8d29a50d4005bd40cb3ae9"],["categories/程序人生/index.html","ef1af646157c218878a999516db2ec52"],["css/css-normal-flow.html","f74cdfbfd90a1eeb7a5ff20aade11a08"],["css/main.css","7868c88287e4e8a72cdfd17f0c25e742"],["drafts/configure-multiple-vue-project-with-nginx.html","d6124d7b51f089eff34dfd3e51edd7e7"],["drafts/iframe.html","3742ac7158bd642503d3f20c44feac43"],["drafts/record-re-install-mac-os-10-12-6.html","ad950f85a9eaab81239db1732722f252"],["git/git-DETACHED-HEAD.html","4f55503bcf11ef3a69f0d034c923043a"],["git/git-branch.html","dffed7d004d7cc750a1de4e14bca345f"],["git/git-change-server-password.html","87b80f90e3693125888acdeb054286b9"],["git/git-checkout-1.html","24d4017d11005d8851fde03ce911ad79"],["git/git-checkout-2.html","34041c8a59cde3b912d46306bfd5948e"],["git/git-diff-m-symbol.html","03aaa2c7121f3765ab55ad1870cd2065"],["git/git-git-flow.html","85210d1911ce967709effa5678e80b35"],["git/git-git-merge-ff-no-ff.html","972e30bd6e1a9f29f151da1747232f98"],["git/git-reflog.html","e82ddfe210b9caea08bc38cc7d3846af"],["git/git-remote-set-url.html","a9b739c9f61640b45bc696fcfc30177c"],["git/git-reset.html","e1f9864a7ef5ebf5cce3ada3f352d727"],["git/git-revert.html","484b3d4890324385cb893a8611e389c5"],["git/git-tag.html","247af38926b08c5b5754ca201a5f8b28"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e4cf5721130286811f3f44625afb5f63"],["java/java-deploy-resource-folder.html","5a53379d4ac304ee83d0acfda51e176c"],["java/java-shiro-note.html","6efb46e81c021dd5fb5abdc714e9c0b4"],["java/java-springmvc-X-Frame-Options.html","731de209b22170d62a627d5e9e97fd0c"],["js/js-logical-operator.html","1a70957d3b907f85d46ea0cba9b3b3fb"],["js/js-npm-symbol-caret.html","abebb213b68d10e7add0be61427548e9"],["js/js-npm-symbol-tilde.html","13f1bc223df184fb0b4e6104017d3300"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","f5309652c5b2eefbfbe4de871d314bbe"],["linux/shell-command-netstat.html","e58e04b6a7df1df353864fe024c8d01d"],["linux/shell-command-sed.html","3c866b41c2c0e025e330251b5d87b812"],["linux/shell-command-tar.html","ee7f50a1631332d988a3f2e63324f474"],["linux/shell-command-top.html","22a73afe18d9c9222799b57f5ac97b74"],["linux/shell-command-touch.html","460ff5600a230831c719ca30ff22d39e"],["linux/shell-command-which.html","3fa61ebfe780a016d4805163620d453e"],["linux/ubuntu-user-add-delete.html","40188331785e28b48d5fb6b9a957da2d"],["mongodb/mongodb-collection-aggregation-introduction.html","6b2ab4b444f26e0fd1b6aaadbbfa4395"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","21f7907aee8a17f2d7f1a279836f14fa"],["mongodb/mongodb-collection-create.html","c81ae4ed539caeaec42875a2a8092d46"],["mongodb/mongodb-collection-delete.html","55d86c57a9dee159cd8a008a1fa2bdca"],["mongodb/mongodb-collection-find-1.html","83c015611ce9e0df09da6d4c226aa0f2"],["mongodb/mongodb-collection-find-projection-operator.html","cd7d729bc9619be4dc5d8b77c44a3f59"],["mongodb/mongodb-collection-insert-1.html","0c6d6d978861ec719e113198569fab39"],["mongodb/mongodb-database-create.html","f5d2d17b0f887806bc1ba4879ea82f30"],["mongodb/mongodb-schema-design-note.html","b12edc4594d2c2e74bc8b3291bd2fe37"],["mongodb/mongodb-study-note-1.html","1163926f2eb9cf6ed316b6eb718df9c4"],["page/2/index.html","79d804a72c450ab6d024bedf6210ca9c"],["page/3/index.html","d826cd0c4cc94ada1549dbb5549ebfa6"],["photos/index.html","62cc012da76b17e87f2e8f8b41fda33b"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["slides/index.html","65e2b19ac0321ffbe27818ce019dd34a"],["tags/Base48/index.html","c4aa85ecf060e3dc1d7016cec7689758"],["tags/DETACHED-HEAD/index.html","5fa4e25312d3f8c2f15673a53201a3a9"],["tags/Git-Flow/index.html","1dbc3e1d609d74eea74cb3d61d1ed470"],["tags/Git/index.html","45902b60e9163edaae4a8fa3c55dcea7"],["tags/JS-逻辑操作符/index.html","70c8462fbb8835033c319ec0840106a8"],["tags/Java/index.html","b5b6cb8d248a4045988d2df0f2c389eb"],["tags/JavaScript/index.html","d0949f726b9d997c0ab8f42f99ca0ccc"],["tags/Linux/index.html","bd01c96bfab334f4d958bb9df59bd5ab"],["tags/M/index.html","401fd51e66a3147ab94ecb57a3bd621c"],["tags/MongoDB/index.html","38a1de546eda3f41a960ce695959d076"],["tags/Repository-not-found/index.html","b79622a65ffd5feab72b067e2600a908"],["tags/X-Frame-Options/index.html","8ec1d1e5b9666771abb62f638ca059fd"],["tags/checkout/index.html","5439b9e70c537d5e3b2512c5cf0c3d5e"],["tags/collection/index.html","d6277490e3c6afcc8a8b9f3873de3e65"],["tags/create/index.html","85b97d550bc4b90886e3a05c0840f586"],["tags/database/index.html","6fc9e1f38537d72f311cfba514e8c0b7"],["tags/diff/index.html","140694d7ae37bf2f6c20088a4319766c"],["tags/fast-forward/index.html","3676618a391067efaeb47c54c0c910eb"],["tags/ff/index.html","41468857a1b7b2848dfa27997b55bc36"],["tags/git-branch/index.html","65cd0244b42ecd2e5cf78c87b028fa9b"],["tags/git-merge/index.html","3a427dc30282805af7da15b409ddcc6b"],["tags/git-reflog/index.html","0402475b0835a00afee99c1362776a91"],["tags/git-reset/index.html","319df1a98a24e86afb977a5a28dc2543"],["tags/git-revert/index.html","d198925fa54a5bee35ac7f20b56f8608"],["tags/git-tag/index.html","78035a947557ac3309f6bdf707e9b069"],["tags/index.html","a705b58e220f54696d425841b3abe61a"],["tags/no-ff/index.html","a052d21a1b452e77afab3d85c71a89f6"],["tags/schema/index.html","dcca13c679f63764f568c245193a917a"],["tags/shiro/index.html","179dc673212ae16416571f7366b0bb08"],["tags/tomcat/index.html","5e1d4183da761d30caba65102c610dd7"],["tags/windows/index.html","1c94129d7839b183e2652e989833f728"],["tags/以太坊/index.html","2a3b7b7f5ff458b350dba4a16d96e480"],["tags/修改/index.html","2f41691a49afa54ce312aea3d738f70e"],["tags/分支/index.html","9274276e8be7811f956df8c5afcd87ab"],["tags/创建/index.html","6a0aef889aa7b74bb6864c54e086a8b4"],["tags/创建数据库/index.html","f3b571c0fe9ef444b8f11bc5783d1424"],["tags/区块链/index.html","b0968e412348b0c1d68ca8815d0c06cb"],["tags/学习笔记/index.html","c8aeb24ee57b892ccab24a63903c0b62"],["tags/工作流/index.html","57bbcce72a9228fddc52790cca7a046a"],["tags/数据集合/index.html","7bdf1b731bb65e9e2d8ea6941e2bda73"],["tags/智能合约/index.html","4c9f797ad9afd9feb732a424ef1c910f"],["tags/标签/index.html","a7085c2b9dd01715bf5a74ae02a78ca4"],["tags/比特币/index.html","6ee0bd06c07fcb6344c17ed170b176c4"],["tags/用法/index.html","6a40fc64b2d0171c25537859893b46c2"],["tags/符号/index.html","a1a0b50abbd423e1ba52b6ba93a4fff9"],["tags/编程/index.html","ba14e28ba7a4e4db776979d337ba2dc6"],["tags/远程仓库地址/index.html","3801a58f669178d117d70699fbc226fc"],["tags/部署/index.html","71a4438120f086049b1deea5309188cb"],["tags/难度/index.html","306a814bed37ad1d9d5400860baf3175"],["thinking in programmer life/full-stack-programmer.html","6cf3639dd63e45fe9879551886645d29"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







