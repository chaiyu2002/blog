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

var precacheConfig = [["English/ie-note.html","19596ec4fb5376b4e6fae13ae0dc4807"],["Kafka/kafka-introduction-note.html","81083f7d305c9e0a33c510d547aef95d"],["Kafka/kafka-storage-principle.html","0d336dec7d1dbcdfdeb4d783339045c1"],["about/index.html","9699d4a2707fb17125d407d6e43ae0b4"],["archives/2018/06/index.html","d85175fe097978af15240a44348530a7"],["archives/2018/07/index.html","ad47ec148bc46eec0144ad39b9a277f0"],["archives/2018/08/index.html","aeac1ede47059eefbe76dccc133bdcc7"],["archives/2018/09/index.html","853d72322af243239c2af5da9fc2eec2"],["archives/2018/10/index.html","9ca35635e8ee8a4d7667e5dde6a09c61"],["archives/2018/11/index.html","6f5ff1707d31b073f29b4f7a54b2e7be"],["archives/2018/12/index.html","85af4c218448bb7486d49dbd282ff390"],["archives/2018/index.html","bf2d6186fd1fc60d4458e908e2122c81"],["archives/2018/page/2/index.html","4b94662210ce4f12bb01cd87b0a7deb0"],["archives/2019/01/index.html","28bfcf968e58184dac83d20a863efc26"],["archives/2019/02/index.html","de4ed193b605a2107e3ef32f10f2d65e"],["archives/2019/04/index.html","8514cfb5032929c3b7248dda57b54f4c"],["archives/2019/05/index.html","ee6bf7bdfb1fbec2f2eb036661a1944b"],["archives/2019/06/index.html","87f6779bece3cb476092a758d1225f87"],["archives/2019/07/index.html","26991eedf6e86ae2bb813c172a13e1ec"],["archives/2019/08/index.html","ce5557ebca253506cc342d3522842dd0"],["archives/2019/09/index.html","fe580f90c15a7504e8b852af9a1c0fb8"],["archives/2019/10/index.html","03e2b0fd0c3585d269be1c61c9c92bd4"],["archives/2019/11/index.html","3a67e8a9e15b9bbd1f835d9370ad1fba"],["archives/2019/12/index.html","2398c2819ce56871e9707fe4a8729a40"],["archives/2019/index.html","b238bdf62b0155ba31ffb53a911786c9"],["archives/index.html","316441e8d95116e41b93eb026315010f"],["archives/page/2/index.html","1bb16e3073d0ca2d923bf8aee9ddb199"],["archives/page/3/index.html","5674f2ddf9586a5b9fbd585322fd9ebd"],["atom/index.html","09c31b301c91b870deb4d2b1f47c694c"],["blockchain/base64-base58.html","3d327e5c0663b789afebb5e22c17ece2"],["blockchain/bitcoin-data-storage.html","780af93adbee802e26e5bb973193f8a0"],["blockchain/bitcoin-difficulty.html","f648886d70b05d53a7f72f85b29cfa06"],["blockchain/block-chain-ethereum-contract-program.html","20f8565f278b48d5115e8dabb3050f7b"],["blockchain/ethereum-programming-introduction.html","9a387a9f12eb577c7d55f5adb13abaea"],["blockchain/ethereum-rationale-introduction.html","3642ff8e7e9146b72f4b1805f863b7be"],["books/index.html","a82521c250f5ce72d704953469797040"],["categories/Blockchain/index.html","0b957f77043fd13f1827aef7d4c78059"],["categories/Blockchain/以太坊/index.html","f2a01950179ff8d59958da143201cde8"],["categories/Blockchain/以太坊/智能合约/index.html","813c087a1c6cc333622aec244341510b"],["categories/CSS/index.html","fd71cb18be33d4733cbe49823aa04ce4"],["categories/Design-Pattern/index.html","d26b0afb3c423deb91eece717eebac45"],["categories/ES/index.html","dc70d0186d76eda6c496f831d6b644de"],["categories/English/index.html","0bfb89299175d07a61b3567aab4e53ea"],["categories/Git/index.html","c309ade2970e471f2f152df3c55fd27d"],["categories/Java/index.html","99dedfa34b1abb0d7d67d2c7f9115eb0"],["categories/JavaScript/NPM/index.html","1a58627758b9175f8618bcc70508781a"],["categories/JavaScript/Vue/index.html","eb0c680579dff70a549f5561ead14a76"],["categories/JavaScript/index.html","d4363a62e4fcd8bbdc8b323a2455975a"],["categories/Kafka/index.html","c7b3c1e45232c785e9c40646133db971"],["categories/Linux/Shell/index.html","bf77b072274e07f7fa52b5a6f87bf528"],["categories/Linux/Ubuntu/index.html","adf7dd306c05c214e483eb1db08bfeda"],["categories/Linux/index.html","17150db52d2111026f05d057517938c7"],["categories/MongoDB/index.html","b2fc5ed9ed6baa8ee50be1e955bb482d"],["categories/MySQL/index.html","6e3bb530d0a7d333d38ca7cf1379fdf1"],["categories/Python/index.html","5afb5de88f5cf3500de874800f567b75"],["categories/iOS/index.html","4be71202cba1c7c1781a1db7339777e8"],["categories/index.html","1d56a6b3e4025b2dccf5ae6446f03516"],["categories/微信/index.html","c4cdec1ef54cde17b7f4a4c869c1d47a"],["categories/数据结构/index.html","60b83624e89c97d8d7e12bf15ddaa7c2"],["categories/杂记/index.html","c2f3e92a1022041bd8b23ff2f77e90ca"],["categories/程序人生/index.html","6cdaaadda955a53fc055bd57e88dc5cf"],["categories/计划/index.html","3f68fbb8d44975c2551d73947bea64c0"],["css/css-font-note.html","20d58e0439cf052955458497a746001c"],["css/css-normal-flow.html","349a3d04c27769affaad69294feb673f"],["css/css-sass-introduction.html","8812e6457f2a53e126b62b29f980fcb3"],["css/main.css","acfe7df2d66a95581f19985c1648e083"],["data-structure/B-tree-note-1.html","5c21ab0298c86fe508eaac1dacca1675"],["data-structure/Binary-tree-note.html","8eef8f28cd2dcf9140b89c94d685df03"],["design-pattern/chain-of-responsibility.html","620bb3acb1b438765ac8a8ae6a9087a2"],["design-pattern/delegate-and-proxy.html","cabb15a098d07eea5f5439815dc1ab6c"],["drafts/configure-multiple-vue-project-with-nginx.html","59cf0f1a61f963f854c7ffd6f702cab2"],["drafts/iframe.html","fe5f47863efe57d3f3ca79e2ea3e7b21"],["drafts/record-re-install-mac-os-10-12-6.html","ba4b197ad7b1bb758a3c3a041e363328"],["es/restudy-es-note.html","75742853fd43fedfe35908dbde91b251"],["essay/note-ximurong-tree.html","146e9afc97e128cf491c284ee17f6da8"],["git/git-DETACHED-HEAD.html","055cbba0af76bd9c0fc1988a51f260ae"],["git/git-branch.html","57d5bf1d5539878e46d44d926c4357e0"],["git/git-change-server-password.html","c13b6fc18bfc40a8bd214220235d5eaa"],["git/git-checkout-1.html","de8248e30f852924dbb651980740cda0"],["git/git-checkout-2.html","61de52b0683eb995fc7750021f08a206"],["git/git-diff-m-symbol.html","314793960ea4edfee10437bf3aee9e0e"],["git/git-git-flow.html","522e2d179e86b2d6a2167571c5a08e2e"],["git/git-git-merge-ff-no-ff.html","c479d63bc5cc918a8b334160c6e49ac0"],["git/git-git-merge-true-merge.html","be7e47c2afd7784674a27544e18d50d4"],["git/git-gitlab-flow.html","07641506d55de41845abf952538e14a4"],["git/git-index.html","4c93dffb813420f346686065b54953d7"],["git/git-merge-choose-one-side-code.html","e780481db2de6a72192d500f14e9311c"],["git/git-merge-exist-conflict.html","f8f24624f097f3b6485437599dfffa9b"],["git/git-merge-note.html","d097e130e92ef5f72f80c5dab6df5991"],["git/git-pull-1.html","1e6621c9fa585ea6abc36b4cc71da296"],["git/git-reflog.html","a9b6e5e7281fbead3698374ade9dd483"],["git/git-remote-set-url.html","9944a08a326293f569b518c2afd60211"],["git/git-reset.html","ef3222d6c854f0b9c06414c6e00383c2"],["git/git-rev-parse.html","fc87a75fc3c4ecd9260f76de87e01855"],["git/git-revert.html","5b75e0e77e6cba6ad0a3699417d5c317"],["git/git-tag.html","a189696bc6159af4f79abfb9da5ffe6f"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","220231eda8688858dd2a28a328032b83"],["ios/ios-oc-kvc-1.html","5820fea182741040ab5a10942de1c939"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","864c1283206fa7216bba4d56b3da3598"],["ios/ios-themes.html","1fa209584a2587f1af0091777afa6fc7"],["java/java-annotation-note.html","b7b2774bc7427837cb657a12bccacdcd"],["java/java-annotation-request-response.html","a47e1c69e13c5f083ada8f9ad83a692e"],["java/java-array-and-container-note.html","1e328ddccffc7a5af1d18dcd643ce7d0"],["java/java-deploy-resource-folder.html","af1be45827edaf569db2ea64553eac90"],["java/java-jps-note.html","a5e7865645b18bd77edcf413559df99c"],["java/java-maven-nexus-note.html","aac7f1cf355f29fd604db3cc4c9d84f3"],["java/java-maven-pom-note.html","63437fc37f095354f8b532df47fbf9d6"],["java/java-pojo-bean-note.html","5a2544f4f4c4f82858a1ca54712ec011"],["java/java-shiro-note.html","de19e40e2ab0aa33c56ed1a2af843740"],["java/java-shiro-springmvc-integration.html","eab973b8168865d264a1029889928ddf"],["java/java-spring-autowired.html","fb4cb0ab70ae24ef533088148122d43a"],["java/java-spring-configuration-bean.html","1244ea4d0bf2f7e5b1b41010a2646705"],["java/java-spring-restcontroller-note.html","e63109f0734b54dd6c498c6d68a35172"],["java/java-springmvc-X-Frame-Options.html","2db94b64b715b59f1c651edc63cb7c38"],["java/java-synchronized-note.html","9c2ec23e61fafdc48e4c983634865083"],["java/java-value-pass.html","4d0aef1255a66474edaaca32b658076c"],["java/java-vo-dto-pojo.html","adbdfe49f32b59cf866401099acfec75"],["java/url-rewrite.html","5697a1f6af87ef7a9bdfbde0f9363f7c"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","7732f9d6b239cc7daf9ba42daac12034"],["js/js-npm-symbol-caret.html","1d507de427480f54b9cf327b877d1348"],["js/js-npm-symbol-tilde.html","c7656cb989f9f3c48c3584d653e52d82"],["js/js-this.html","803c79154fe7c57cde42a71ca062787a"],["js/js-vue-note-components.html","6931c88e3129b10f80584a636435cc84"],["js/js-vue-note-computed.html","dfc921d0e21f1abc73ad5f73c8aa5c04"],["js/js-vue-note-css-style-binding.html","143993f9a7c3a7030576859b888fadf1"],["js/js-vue-note-directive.html","e842416640d28e796b565ff0b9032fae"],["js/js-vue-note-instance.html","0bfd06285923fc13741ddcd62d6fb3a9"],["js/js-vue-note-introduction.html","388966a05becea1188a07aebf0a667ca"],["js/js-vue-note-syntax.html","3fa8c7f3b77169c580d70a8557a82917"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","adb1a72bcbcc90fc353f421f6e445792"],["linux/linux-top-buffer-cache.html","857c67a92a8c0913941c4c2d3878cc29"],["linux/mac-find-port-occupy-process.html","036c544698b23cb599d4c21bd813a006"],["linux/make-vs-cmake.html","18eca0a1e55d9a8bc9520609e5c6951d"],["linux/shell-command-awk.html","b2f9fbec61f78d8d706109d97dd5ba7c"],["linux/shell-command-df.html","0df595eac5d53b5bbdbaf026b712ba2b"],["linux/shell-command-du.html","32994355e59dad6dd3fce686549c9c09"],["linux/shell-command-netstat.html","9aad99bb31041b8df76ea887c46fbfef"],["linux/shell-command-sed.html","9f4de9011caa4a416d0a698f0ac1a8da"],["linux/shell-command-tar.html","e76db1a3da62ff040103086bf4f3c82f"],["linux/shell-command-top.html","70eefe200654110c1e6962098f9b0ffb"],["linux/shell-command-touch.html","438a3c236f5eb251076a9e7e72be05d5"],["linux/shell-command-which.html","23e47da16bc142afa9fde13c78b74eee"],["linux/shell-difference-semicolon-double ampersand.html","95a5f883268ae2254ab5e943b29033d8"],["linux/ubuntu-user-add-delete.html","0ff0faf84c30f3d2849954006377ac7c"],["linux/vim-copy-note.html","3a0d627367e1f769173c49497de80073"],["mongodb/mongodb-collection-aggregation-introduction.html","83373a5cda72c8cccc2db9f8481c98bb"],["mongodb/mongodb-collection-aggregation-stage-operator.html","b4d17c25309c12dd35e68a20dbbc881b"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","d9d8adda5a44fdcff331ecebfc56550b"],["mongodb/mongodb-collection-create.html","fd417cc7abf98b5a144e2cb0540294d3"],["mongodb/mongodb-collection-delete.html","65e7dd17ce6964269d95aea4dbeb9ea4"],["mongodb/mongodb-collection-find-1.html","f629bf9f222c1486478ad490742fdf50"],["mongodb/mongodb-collection-find-projection-operator.html","9944d776b277cdeb57a1413e7ee164de"],["mongodb/mongodb-collection-insert-1.html","5f13870a538954fab321d9ee7a8132ba"],["mongodb/mongodb-database-create.html","ade04226690459375c3ec52cd6139e3d"],["mongodb/mongodb-java-driver.html","50e5232f4770cddaf79b2a0851ca8a15"],["mongodb/mongodb-schema-design-note.html","bcfc8da8e838679c8eb4177ffb0cbc82"],["mongodb/mongodb-study-note-1.html","4529a3e14a4b7de467d436eed747cd47"],["mongodb/mongodb-study-note-2.html","85190df056c904ab951e26b7f1782d13"],["mongodb/mongodb-study-note-3.html","fa18cc3e676aba4855015c8f0f77f5ae"],["mysql/B-tree-note-1.html","6cf08324654942f066c60df3323ba6c9"],["mysql/clustered-index-mysql.html","c15176e62675914f3fdcc247f5f6df11"],["mysql/mysql-ddl-handy-book.html","f96805a489cb12fd64f777f8cca0d873"],["page/2/index.html","cc66f3451c8c3a520424ca9889599c09"],["page/3/index.html","44edc843e9c3a1e6090dbd5c8bf2ac7d"],["page/4/index.html","c14797eedb54d512f435de871656714e"],["page/5/index.html","38a73a618156ff20d7300b1bbe8215e6"],["page/6/index.html","8f3d5af13128a5196bf418bd0e003bb7"],["photos/index.html","c4b48d25055b043ee2886c5ca56bac29"],["python/python-args-kwargs.html","76e66f98664f178904b72e7e49721da0"],["python/python-async-program.html","357c4cda99c98ffac77e0385605ac831"],["python/python-package-module-note.html","6942a4dac29b6b754d33b1e319477977"],["python/upgrade-python-under-ubuntu1604.html","62ddc826cc6e717ba40d19814148d089"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","6fbd07ca6c9dd0d040ddf4009ab284e7"],["slides/index.html","e8037f8d07a388a7e972c83c2717bdc7"],["tags/Autowired/index.html","7cdbef3549f857fc0ba5a20dbbf5df62"],["tags/B-树/index.html","499da8d9165a9fbd4ae351ee373a7c8b"],["tags/Base48/index.html","9dcbab6a126e204888815465da08c79f"],["tags/Beans/index.html","e9077a38c0863d992c5a4b4dd5bbc7a3"],["tags/CSS/index.html","2ddc6c32f4fc6c47333ade939fb807df"],["tags/DETACHED-HEAD/index.html","de24111b937cf886dd439883f3084c60"],["tags/DTO/index.html","82d52ad099978ea11f6b01cb1e4fe96b"],["tags/ES/index.html","e919e0a4d0b9fe863c7af7cd5656ee36"],["tags/English/index.html","94881636288f84011fc9bf17fb732515"],["tags/Git-Flow/index.html","4426263ca9e0a9d8a8fa6257e01713e6"],["tags/Git/index.html","3eaab3600a406874b4bfb0aed91d25ee"],["tags/JS/index.html","fc331ef2020dec24e5ee77f348502adc"],["tags/Java/index.html","f1112cbd3db09e7d13c0af51a6b5d5a5"],["tags/JavaScript/index.html","667bfc18ac961c8d07bac2a5e2064e5a"],["tags/KVC/index.html","da150bf01a2ec3a8c315347de2f8bcfa"],["tags/Kafka/index.html","ed0229f9a4fbd289c559b0d1d10747c0"],["tags/M/index.html","0f151c8d8d539f816350ca5b97da5341"],["tags/MongoDB/index.html","6bca8885a670467eb67fbcc62d972199"],["tags/MySQL/index.html","38cf0424fcb7cc2a390d0887b823ee68"],["tags/NAT/index.html","258333677d9662a842152f93283727e3"],["tags/NPM/index.html","ae26eba5997d350e58f4460abc6b95d1"],["tags/OC/index.html","7e62dbfcb47c29dbdcbe346d8512160c"],["tags/POJO/index.html","ec56afdcb5aed0bda8f5be3c25d7ba24"],["tags/Python/index.html","602a84610e69266f3a4f16c036d9088c"],["tags/ReactiveCocoa/index.html","2f4eaa50f54f11635eccf50c718ba12b"],["tags/ReactiveObjC/index.html","71a1ce17644d39b79b1e9335ca098d0e"],["tags/Repository-not-found/index.html","4474459b1d102dd31f34532d8b2bd6b2"],["tags/RequestBody/index.html","4c9474dc0cd152a2ab4796974645f67c"],["tags/ResponseBody/index.html","fc28611c9739bad9c77e67b49fc343cd"],["tags/RestControlle/index.html","ac2b75030dcd9d3cdd65f5f43e13e3fc"],["tags/SASS/index.html","8bf42e0d3241f3356efd70049b8c519b"],["tags/Shiro/index.html","ce6efde98571ab62f06bcdd8efeaca49"],["tags/Spring/index.html","3890e93419fa2ce444b8967c81be52a1"],["tags/SpringMVC/index.html","bbb7a8b5d0b6b8bf06282eb77074d290"],["tags/SprintMVC/index.html","803888750eabef4f34ff4e07875d09d1"],["tags/Style/index.html","6225e64f4c6d7f7b675a0036167db54e"],["tags/Ubuntu16-04/index.html","cf5967988b450b01d5ac2a58393cd11d"],["tags/VO/index.html","2ace2ebdc145d4fce144a14733cb6129"],["tags/Vue/index.html","3553ae4bcefa11df9e09034e0863e56b"],["tags/Workflow/index.html","121705318d208dec9dd77f4281b59f93"],["tags/X-Frame-Options/index.html","0a330492f3583faee768577c7ac87427"],["tags/aggregate/index.html","8cbf1e2d2afebdaef14543e80b5b418f"],["tags/alter/index.html","33dd1c8526c01c7e72d91a785a433fee"],["tags/annotation/index.html","09ec0b3dc6550ba1b1ada0c92d9a5a96"],["tags/args/index.html","f4bb59969e4b99cea7ddc8d216cf5e89"],["tags/buffer/index.html","6b65c6cb32f4b46f24683808f921d44a"],["tags/cache/index.html","04f2675db43aa6d2e5356c265a3ad9d9"],["tags/change/index.html","4c9f97803852ece9b1602ae19cd41cd0"],["tags/checkout/index.html","b159b64ff6da550edd4d5fb68ea617ed"],["tags/cmake/index.html","0b8e7fc73bbe6346c531b0d9291af0a6"],["tags/collection/index.html","fed3cf629112e53362de7b0829eed2c1"],["tags/component/index.html","e525b33170262d08f83ab8adcec854c8"],["tags/computed/index.html","f2d1307226a24c4c53d7c7d0cfeca2ff"],["tags/create/index.html","e1da153c47f97958db601efdc884a074"],["tags/database/index.html","1618b61c38412d12f482db556ffc4e49"],["tags/df/index.html","c27d8925fa3deb66282d464e978f75be"],["tags/diff/index.html","096f699a4df62c209c128bc1a8402deb"],["tags/double-ampersand/index.html","47d540b47486352a693e5e366e3de83e"],["tags/double-vertical-bar/index.html","956bc6172f14e08d130dec76a6425d75"],["tags/driver/index.html","048fb8ac622ee0d1814d6c1f0cbc25fb"],["tags/du/index.html","af8e037066db711d61572674615f9a5b"],["tags/fast-forward/index.html","461fedc74782977f73078790d2ad33c6"],["tags/ff/index.html","11c9b49c21305b817e30bdb884b81e0f"],["tags/font-size/index.html","3ab6c6225800e65350fafd3ed0001fc2"],["tags/font/index.html","2c74fe2efc1a7eb576ddb8f51a959069"],["tags/free/index.html","36d294888c4dab81842a90f39d6c87c9"],["tags/git-branch/index.html","2c70f4b7aefd16e0794c64287d2adbc8"],["tags/git-index/index.html","6dc3823029bab1f9ab039eab27f874f5"],["tags/git-merge/index.html","bf0b71ce25630ed6d34d157ca8bf7dc1"],["tags/git-pull/index.html","0b85fe6b285c5567a9914d8616056ee9"],["tags/git-reflog/index.html","5eb3b8130059f05aa438415d6b4f4673"],["tags/git-reset/index.html","3a5bb9b20fd1bfb0a2b001e9c187e1de"],["tags/git-rev-parse/index.html","dc22b53af37294c932177d235ebd451e"],["tags/git-revert/index.html","4b4d8219ad49dd983169a1549fafa299"],["tags/git-tag/index.html","acfe8b2689d5b0d4d0ea606785a4ca46"],["tags/i-e/index.html","336c475e55eb1772799ee24dd23043a5"],["tags/iOS/index.html","e8f3503f0b8366ed3607fa3441385973"],["tags/index.html","0b18ea420cac156bbfb95c87cbd78662"],["tags/inode/index.html","3f8ff62571a081ae129d9aab93c499e1"],["tags/jps/index.html","c139ab78697a3a3cd34dc4aa41127bc4"],["tags/kwargs/index.html","e35d7d5b130cbdc22dd29c1671b0da39"],["tags/linux/index.html","a864cc58182d5e76c0d88e520b0e8e80"],["tags/mac/index.html","1f5ab9f790210fe53fb5235160ac1e1a"],["tags/make/index.html","4dddae23f807940dee683bacdc3ffacb"],["tags/maven/index.html","36fc6bb7624cb348a2ee731be0356cc5"],["tags/modify/index.html","7d31f8d6e1b41739ad8daf5aa90bda65"],["tags/module/index.html","9a37ca18ed7eb2ee4603acac6cd72db5"],["tags/nexus/index.html","95be575fa3466a295e38cbd7a5f80d16"],["tags/no-ff/index.html","3cd57ae7528b8f2ad9fe98eae6a8955b"],["tags/package/index.html","21fdaf769b14e8759a4aa74abe3eeb0a"],["tags/pom/index.html","5f1e116464a645c259d1f7c911d1445d"],["tags/rewrite/index.html","98295ba30f168fa4bfc992f7c5aa0ddf"],["tags/rm/index.html","24def494fee29e2029fdfaf2d6cf76ba"],["tags/schema/index.html","262bd0d3a9431a95dbe303ab5e5a2c57"],["tags/semicolon/index.html","8738ec1b8e2a39bc63f9ae165180ca88"],["tags/shell/index.html","97fd8fc15ce37aa8e7e0b1118d8bd601"],["tags/synchronized/index.html","2b0d42aa82781498d61e820fb972190d"],["tags/this/index.html","0a101072f5f20bbfc6ce2ff1b907974a"],["tags/tomcat/index.html","79dd8c8ae8faf2910b142e412190a12d"],["tags/top/index.html","c1761b3cf8324cc61256ab815e58ab18"],["tags/true-merge/index.html","1630b5ec88cb475bf5276608cde357b3"],["tags/url/index.html","4dcae1f8820ef31d81faf51a14d87db8"],["tags/vim/index.html","b4beb6597dcc59845c4f027fe02f4aa0"],["tags/windows/index.html","d7319dcfbc2fd26ef17552df01f486f0"],["tags/一棵开花的树/index.html","6e10754bfbb52ec22304343ffba46ee8"],["tags/主题/index.html","ccaa1afd642cd7429ed0ae359b2e7d89"],["tags/二叉树/index.html","7a5b63a3da9c56093f1b637cb00a2468"],["tags/介绍/index.html","e3489a979eae82d9261cc24c6c7628e0"],["tags/代理/index.html","85c4202780506b22b8515b2e599b0920"],["tags/以太坊/index.html","27ad916f32ee4cb6b0d80d20c7834dbc"],["tags/依赖包/index.html","8f7af1c42dbb744513a74a1542c30b34"],["tags/修改/index.html","5e267842356d8fcc8995096a80f8cc40"],["tags/值传递/index.html","3c20aac4ad2542a3cb5527c3d9c5ad9c"],["tags/冲突/index.html","46c8e0ee5741c077e3d5be7d5b9c02a3"],["tags/分支/index.html","dc59cfdd130e2e8225945c5cbefdd386"],["tags/创建/index.html","b6de37f32582998f8404cb8a6da104aa"],["tags/创建数据库/index.html","f963767235da2605577d8ace754eb236"],["tags/区块链/index.html","08f786619ba48305a73193d61ea24748"],["tags/升级/index.html","9e9fc721705e0168a40b3ab4e5bf02b0"],["tags/参数/index.html","99ac3eb8c2c5c28c671d78591f6f4f0c"],["tags/委托/index.html","6c35e70e33bee1453f6884564c09c49d"],["tags/存储/index.html","7908f81fe3cde98d86dcfc78789cb183"],["tags/存在/index.html","f6327153f291fa4e402ebcb9db40b5e1"],["tags/学习笔记/index.html","0e7eb10faac483a1e4dbaf8043b431c3"],["tags/实例/index.html","408584272a055f7fe54fff6ceb41bf3a"],["tags/容器/index.html","523eaba41918bfa1a453f4bdfe17e910"],["tags/工作流/index.html","126d529c4f6b8738955bf271c4178d4f"],["tags/工具/index.html","69234bd72d20aafa3659ddeea9594ee4"],["tags/席慕蓉/index.html","25cce59015082eb9e56c0ebd9d439014"],["tags/异步编程/index.html","1c14e8835a1cc52bb4bf2229860a2c26"],["tags/微信/index.html","237fa1980e01c885a72274adfd7cddcd"],["tags/插入/index.html","f73f18c01a8bc3883962b1d49c1014d3"],["tags/数据存储/index.html","14c49655049c361829c0fb2db8646882"],["tags/数据库/index.html","df65bc00cdc038fcee16fb6d9d2929c0"],["tags/数据集合/index.html","122374656c17b5e69cc932d8a41f14b2"],["tags/数组/index.html","1698379ca54587da8d02f2bf516da839"],["tags/文档/index.html","6d7afd79710e5567938e4b33777e1935"],["tags/文档流/index.html","7266c6856bcd9565846a8cbe8adfd415"],["tags/智能合约/index.html","708292eb8cf3c7bc1ad5d054f80d0e32"],["tags/标签/index.html","28179a26e85321a29205293adfc3cf4a"],["tags/模板语法/index.html","d3eb3eff61457ca7554b425d8adfcf10"],["tags/比特币/index.html","f40b011b11051097768ccf996d98439c"],["tags/波浪字符/index.html","cfbe95dd608e31aa3ed545d91e5f8bdd"],["tags/注解/index.html","a6ac9895d052d5b24ae1d60e58c5bc45"],["tags/用法/index.html","ddba5287004000322d0b22a976e12b3c"],["tags/穿透/index.html","61cf5ffad62a146af760ece1a036a124"],["tags/端口占用/index.html","4e29b2ee0ba9bcd253c398dd9250f2d4"],["tags/笔记/index.html","7cd4fb966e431c2565662bc96fd59ac5"],["tags/符号/index.html","fc097403e7904a7a58a22484013ad42f"],["tags/红黑树/index.html","54c30330092bb6cb56552ae8d37d7684"],["tags/组件基础/index.html","3df74defa8214943e57e33c59d67c22e"],["tags/绑定/index.html","15f36e489220aa442dd5041e837c0b85"],["tags/编程/index.html","aeebe1b4c5f433c569e64a85068b498d"],["tags/职责链模式/index.html","eedc081f862c488cc920d9f88adbd7d3"],["tags/聚合/index.html","41dd0a932452d991d89fb28c75dd1165"],["tags/聚集索引/index.html","53e915d4fa4ccf18a5b2fd166b7583f2"],["tags/自定义指令/index.html","da27e5dfa64c4898d9fe4dcd2168c3e9"],["tags/计算属性/index.html","4f8c0c829f3e8d11e1d96dd892f5c9bf"],["tags/设计模式/index.html","2a6e2427350fe2b95b772673a2cea45d"],["tags/进程/index.html","b07cabcc8ec8a14711194130a53da394"],["tags/远程仓库地址/index.html","fd2d5f85f55e6522c16a25e2442d7144"],["tags/逻辑操作符/index.html","a51db86bd83d73e82bbf227106e08083"],["tags/部署/index.html","3fcdd35c5ab4b318bec23cdb52f30e7c"],["tags/难度/index.html","3f4d8134f733608d0feb89c21ff13a92"],["tags/集合/index.html","d407e8cdc0691b81da89d293cbf1b1f4"],["thinking_in_programmer_life/full-stack-programmer.html","05f171ec6a1cdae518f4dfdd15aebcc9"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","375833e79faedaaf7c2b6ef1a9cf3b72"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







