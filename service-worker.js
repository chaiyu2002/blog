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

var precacheConfig = [["Kafka/kafka-introduction-note.html","37a6259cc0c1dae299a7866489dff0bd"],["Kafka/kafka-storage-principle.html","37a6259cc0c1dae299a7866489dff0bd"],["about/index.html","319461f32d273ab528e2f12df79d6d56"],["archives/2018/06/index.html","cc7e10427b0ca4408c15b777308af881"],["archives/2018/07/index.html","b53eab40cf685a9ac1bf6f4444941f31"],["archives/2018/08/index.html","f767b0a086676e860487c539990f7a4b"],["archives/2018/09/index.html","79568a4a557321aa1876ddbe943dfc80"],["archives/2018/10/index.html","211fcb7d8569b7bc56749b12aea81c60"],["archives/2018/11/index.html","1d5e3055340ca694604393b825e2b70c"],["archives/2018/12/index.html","5f22df4c82ba1790f111b1d3a4fdfed9"],["archives/2018/index.html","28e8e45c892cc9887eb4f09dee9c494a"],["archives/2018/page/2/index.html","c71ff03be0598b6a40bbd147002da4ec"],["archives/2019/01/index.html","55935b7866e9a974ae59089b96bf6ab9"],["archives/2019/02/index.html","3c3e16c5dbc3fb28afd1c31ef8f0c013"],["archives/2019/04/index.html","82ced1ffcfe24e52b443f13a640f8ecf"],["archives/2019/05/index.html","5820347499926116a3ea05929f86a95e"],["archives/2019/06/index.html","7c3a45286356859cfda670cd389b0a57"],["archives/2019/07/index.html","d935dd4f0e2c760e851dc27e812b4eda"],["archives/2019/08/index.html","b692d137f2257bbdb549669ce82928af"],["archives/2019/09/index.html","9b40fcf7532eb5373a20c55b1e3fdda3"],["archives/2019/10/index.html","fa1522b48881598fad533f4397c25c2b"],["archives/2019/11/index.html","44883ec57a4e223258d4ab3b3e913bb7"],["archives/2019/12/index.html","b3f5ab8ced5c035230c392c0c6f3bfc4"],["archives/2019/index.html","a5ba511111baf8e4c2f62aae9c47d1eb"],["archives/index.html","3461ecdf41d053ea048185cd2d2fc8b9"],["archives/page/2/index.html","63a3ab21e3a5975b0fcc183a3a2f8268"],["archives/page/3/index.html","ae33c97723981cf82a9667444144efb6"],["atom/index.html","71464aae0d844c5cc01ef246687ffe4d"],["blockchain/base64-base58.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-data-storage.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-difficulty.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/block-chain-ethereum-contract-program.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-programming-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-rationale-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["books/index.html","ea475e7c0deee21244d1358ee2e403f4"],["categories/Blockchain/index.html","8d8c491832c30f7b748990f8963283ff"],["categories/Blockchain/以太坊/index.html","96c48cb5242684b12c22654d70584efe"],["categories/Blockchain/以太坊/智能合约/index.html","d8fa770e36e82d340138481c0736e31c"],["categories/CSS/index.html","6fe7611833f25c794a39122be7c098e3"],["categories/Design-Pattern/index.html","b31860815f26694993b55b9ea8a0b7ec"],["categories/ES/index.html","20f9fc7f92142e6adace4a4e876815ea"],["categories/Git/index.html","f4168b31facf908733bda1c9e106e65b"],["categories/Java/index.html","8d847cdd0cb7b1263dca61b78832bce6"],["categories/JavaScript/NPM/index.html","0a47354b614be7e579a39c7f554cc632"],["categories/JavaScript/Vue/index.html","8ec1286db7dc1082253a5c2c8c7e745a"],["categories/JavaScript/index.html","3e51a3467658a97c1e4373d6aad816ec"],["categories/Kafka/index.html","4b7772862b1f5092bfca2f62afcb50f1"],["categories/Linux/Shell/index.html","a2fb1aae17c559e1697364e01feb7b98"],["categories/Linux/Ubuntu/index.html","bc740bea0b78cd6efb388e5443593811"],["categories/Linux/index.html","abdf95f33334570a152f649fa20bf40a"],["categories/MongoDB/index.html","e6876a9c94723fd1109e7ebdebd50f63"],["categories/MySQL/index.html","bee40215e4922239601dfb6304bbb8f7"],["categories/Python/index.html","7514985e411f9b2f764c0f0e6e2a4fb5"],["categories/iOS/index.html","537a04194d950f2215735c122d31df20"],["categories/index.html","078cb545adb8338084e204ea426271ab"],["categories/微信/index.html","c81e88f5819b2bcd72bd1fefba159e69"],["categories/数据结构/index.html","451136a9722272ad848bc690bce20bb8"],["categories/杂记/index.html","1229af50c9f751b0cf18750d8a46f189"],["categories/程序人生/index.html","ad5dc4a1522066e759757e015da3e2a4"],["categories/计划/index.html","ee13122b47fda45130fdf5bcd57a1a20"],["css/css-font-note.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-normal-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-sass-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["css/main.css","70556b53a1fc437cabc15e57962a379b"],["data-structure/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["data-structure/Binary-tree-note.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/chain-of-responsibility.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/delegate-and-proxy.html","37a6259cc0c1dae299a7866489dff0bd"],["drafts/configure-multiple-vue-project-with-nginx.html","990f3fa379683352b45f37dc2e908ce5"],["drafts/iframe.html","9ef9dbd76f0108ef15cac2cc2f0242b6"],["drafts/record-re-install-mac-os-10-12-6.html","bc30bfd31ab14caf2eb65df0aeb5d0a5"],["es/restudy-es-note.html","37a6259cc0c1dae299a7866489dff0bd"],["essay/note-ximurong-tree.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-DETACHED-HEAD.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-branch.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-change-server-password.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-2.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-diff-m-symbol.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-ff-no-ff.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-true-merge.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-gitlab-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-index.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-choose-one-side-code.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-exist-conflict.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-pull-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reflog.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-remote-set-url.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reset.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-rev-parse.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-revert.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-tag.html","37a6259cc0c1dae299a7866489dff0bd"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","25e224efbd072b1a896c28a4d5cfabd3"],["ios/ios-oc-kvc-1.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-themes.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-request-response.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-array-and-container-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-deploy-resource-folder.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-jps-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-maven-nexus-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-pojo-bean-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-springmvc-integration.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-autowired.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-configuration-bean.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-restcontroller-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-springmvc-X-Frame-Options.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-synchronized-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-value-pass.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-vo-dto-pojo.html","37a6259cc0c1dae299a7866489dff0bd"],["java/url-rewrite.html","37a6259cc0c1dae299a7866489dff0bd"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-caret.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-tilde.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-this.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-components.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-computed.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-css-style-binding.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-directive.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-instance.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-syntax.html","37a6259cc0c1dae299a7866489dff0bd"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","432db0ab3928890383447c0566927d39"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/linux-top-buffer-cache.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/mac-find-port-occupy-process.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/make-vs-cmake.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-awk.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-df.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-du.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-netstat.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-sed.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-tar.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-top.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-touch.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-which.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-difference-semicolon-double ampersand.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/ubuntu-user-add-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/vim-copy-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-stage-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-projection-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-insert-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-database-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-java-driver.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-schema-design-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-2.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-3.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/clustered-index-mysql.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/mysql-ddl-handy-book.html","37a6259cc0c1dae299a7866489dff0bd"],["page/2/index.html","64c9840e6e3f401c614a4d6e1229c0da"],["page/3/index.html","035eebc2d847ca84311e81f106e3dc2f"],["page/4/index.html","8b8798f8b1b230cbb5bf99e9879dd397"],["page/5/index.html","c679ed3170f1e3974e797accf4260481"],["page/6/index.html","e1d7a9ec41da538899e363a8c059797f"],["photos/index.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-args-kwargs.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-async-program.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-package-module-note.html","37a6259cc0c1dae299a7866489dff0bd"],["python/upgrade-python-under-ubuntu1604.html","37a6259cc0c1dae299a7866489dff0bd"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","37a6259cc0c1dae299a7866489dff0bd"],["slides/index.html","a5d0553b895b3523b33d38c08161713f"],["tags/Autowired/index.html","9c36e1cf97720916e3a97f3b7e8b17d9"],["tags/B-树/index.html","e3baf71d6c996dc8284f6aab4cdfa8ac"],["tags/Base48/index.html","33b4b934a2dfba3a3b88e42087bf7337"],["tags/Beans/index.html","423d80345434943f0ece55299821e378"],["tags/CSS/index.html","49ddd7bd81baf4222c74d8ff2329b005"],["tags/DETACHED-HEAD/index.html","fdc9094dbf39971ecf1b02c4456987e4"],["tags/DTO/index.html","69f2bd3d41148e510e506ff40afc8f91"],["tags/ES/index.html","30166ff42bb9401200ed41625b7aa5ec"],["tags/Git-Flow/index.html","1b4c0e012222f62bb609f66fd534b16e"],["tags/Git/index.html","7d9e838d0a9dfd8e2097a9ed685774cd"],["tags/JS/index.html","9b3f4299e9b1c4a0a455d49174ba7c60"],["tags/Java/index.html","def8e601f33dd2f7c9f661eb56da7e7d"],["tags/JavaScript/index.html","a0224a179b26af41c011826b86bf01f2"],["tags/KVC/index.html","c0cfded1c2be2e7a80536eaf9f5f98e6"],["tags/Kafka/index.html","9d8f35b5ec69e82e1e919b484a7a3618"],["tags/M/index.html","962edf5f964d56324b01a9f1767bfb76"],["tags/MongoDB/index.html","2e93f3ea86ebd4e33369634110c1f61b"],["tags/MySQL/index.html","80d7c0c3560182e08327b347b14a30d0"],["tags/NAT/index.html","1c7c1bbdbe65c8c47dcdf023687c351f"],["tags/NPM/index.html","4409c1208ac3c245051b7f15733ddb4e"],["tags/OC/index.html","60ac06c977cc11bd4b3b30a8ee4c4386"],["tags/POJO/index.html","1203fe1985e0ec9f28ee5f1c2b09bfea"],["tags/Python/index.html","f9739a607db94e25c848270b4b042055"],["tags/ReactiveCocoa/index.html","0379fbef174fd79a48602a25f23dada0"],["tags/ReactiveObjC/index.html","951fcbe4d7b5b87f98a1e6bef3db850c"],["tags/Repository-not-found/index.html","8e71e508d07bd2dd37206bfb10b58c68"],["tags/RequestBody/index.html","715e6576eb1cb6b8c4700c9f9d552e8f"],["tags/ResponseBody/index.html","25d2d046b654390a3ce5ac9f5fbd001a"],["tags/RestControlle/index.html","a8e2dc7871ba2a56e8e6df5fa3e9a2b6"],["tags/SASS/index.html","bbd03bbb34f3e13341614f0fe8f863f1"],["tags/Shiro/index.html","5b42a9a31009139b15a7fa44bf1584cc"],["tags/Spring/index.html","e482bd108d67b0f5b5eaee424c5c7724"],["tags/SpringMVC/index.html","367f000d3c855f796f14a3d0f5e6eeb9"],["tags/SprintMVC/index.html","a18d307312ced5ae495ccecffdcacb4a"],["tags/Style/index.html","17e8000621124f178a3e9149002e129c"],["tags/Ubuntu16-04/index.html","7439967f49c60c4b93f91685feaada56"],["tags/VO/index.html","19c6870d538fc3cb9846d934ee78d86c"],["tags/Vue/index.html","1e883ff83186d772f064e898f5ac3635"],["tags/Workflow/index.html","5ff2e3f3f97398f54e42522cc8442d9d"],["tags/X-Frame-Options/index.html","911324b5c409b7b23fac6b93dc9bc25e"],["tags/aggregate/index.html","57d38f0ee800038b9b1edac5a6768155"],["tags/alter/index.html","6c555e1e7d259271abb70f20f9d46530"],["tags/annotation/index.html","76eaa0a66bf6f50f974d1fab94f33562"],["tags/args/index.html","652ec220debdaa8f0d2d561cc87bec17"],["tags/buffer/index.html","b263dc63cb0ebac3235e3f466af6364b"],["tags/cache/index.html","aac7f22f2bf55642ca94820aa8318881"],["tags/change/index.html","e18ef24249f9b9affea51ad770dae8bd"],["tags/checkout/index.html","2cbefbfc1bb76b72efc2b8449a00a7dc"],["tags/cmake/index.html","d8797ccbb6805b12e973c7995c899a42"],["tags/collection/index.html","df14682df321c550454c24cb65542cb1"],["tags/component/index.html","0ad79aab3e0e848c3d032b67002bf126"],["tags/computed/index.html","bcefd293136b98d05466e4b13b4a48ae"],["tags/create/index.html","96a45dfeffdfa2674aefaf968a27c9eb"],["tags/database/index.html","27c4bfc4458107e2284a0789ca94169d"],["tags/df/index.html","0a45e7e90785ddcee85ab85fcb663c62"],["tags/diff/index.html","9a864296f7968e599e6bf8dfa9ed94ec"],["tags/double-ampersand/index.html","86efef8e884f5b6b069a22f29eae7522"],["tags/double-vertical-bar/index.html","2c89085934892085a5c0a7c102e9f619"],["tags/driver/index.html","452ed32e80d80e34bce06da6cea99899"],["tags/du/index.html","91bd32502e12d8de9c4b4a87e3df23ca"],["tags/fast-forward/index.html","4292d239348b07264be1e8a24f5f7ec3"],["tags/ff/index.html","8738377748948b3f1aa896a3fb11181b"],["tags/font-size/index.html","a42cee7ce80ef5fe0001fec49421e1cc"],["tags/font/index.html","c5df0437b891d5c832ee46ae79346bfd"],["tags/free/index.html","28498207d3aa361bf6c08430cd4ab4c5"],["tags/git-branch/index.html","2dbeeda7791d59bc20d5d9a8cbce6620"],["tags/git-index/index.html","deafa9f67eb67f964919abcf5fc3461c"],["tags/git-merge/index.html","75fc8f1c231f5deb0d398c650988c8d6"],["tags/git-pull/index.html","79d0df431eb5db5e988856729011bbfd"],["tags/git-reflog/index.html","c21a25571e13a24c2ff6fa6d6195500e"],["tags/git-reset/index.html","7e89954e641b767e2a77898fe1e87b11"],["tags/git-rev-parse/index.html","068b6e1f2d373a73e390f9fead4a6533"],["tags/git-revert/index.html","d2f5dec1345a1308b34ef9fbeef75bff"],["tags/git-tag/index.html","1b1c1dfe9acf0d27acdba0e88da633a2"],["tags/iOS/index.html","47931b4b321b698e58f26d14abd8f562"],["tags/index.html","b4f2677aaaa5d0648983a5e9cedb5eea"],["tags/inode/index.html","853f74a7b0f3b698d21e0e34f309f420"],["tags/jps/index.html","38ed1d139ebcd73ec821ca6dc6ac45a2"],["tags/kwargs/index.html","03e6a8b5bd438f7870d87ad0b101b999"],["tags/linux/index.html","bdf9c8741b1136d1448e75d80aabde53"],["tags/mac/index.html","d4a8cd59cd2afef4a4dae3ab45160a45"],["tags/make/index.html","f12a3eb06714e1eedd89e9fd81a44721"],["tags/maven/index.html","99aa0802101a11d9890f628ad6af0a27"],["tags/modify/index.html","17bcc54e4f4ca3e8b2be815632d71052"],["tags/module/index.html","fb3fb7c3a41dd31541981c64bb711dc4"],["tags/nexus/index.html","40cc5153e68feb67bc6eae5ba60f7c60"],["tags/no-ff/index.html","e827dfc67ad9db627959fed6f19c1fa4"],["tags/package/index.html","df86096309e3e37ed633b280b2c9362e"],["tags/rewrite/index.html","2ff4fa611717609c94ed6d9795658d20"],["tags/rm/index.html","ccb0532ddfc77d5f0ddc32603bcde0b7"],["tags/schema/index.html","1621402dcf108fb95773921b45933ef7"],["tags/semicolon/index.html","a23f87754f82b63294b666b8307e6311"],["tags/shell/index.html","7060e0e61a0a43eb7531f151f05bacba"],["tags/synchronized/index.html","4af67e95f0e0442d9c0c25e99dd04012"],["tags/this/index.html","0bf57fef743c7d9bd53452079756b575"],["tags/tomcat/index.html","56974ada16921e5daa5a6f3f31302de3"],["tags/top/index.html","820b1f971b0d1bae667c5b01cdee3091"],["tags/true-merge/index.html","8636da6e1c1ece215475439edd38cea9"],["tags/url/index.html","0a6ce08c0a32094f5fe821680cdfed2f"],["tags/vim/index.html","2840004bbc44349e2493c1049af911fd"],["tags/windows/index.html","1f19cf5754ff92762f2c9945d202d5c0"],["tags/一棵开花的树/index.html","22236bf6bf16cab428f459cc7caf98cb"],["tags/主题/index.html","3bfb082df9159f1ccc874608d3f802a9"],["tags/二叉树/index.html","5abe2a666fb91316075ab93d7bb6efc4"],["tags/介绍/index.html","61d5078619f3e41665258a3126e91fe1"],["tags/代理/index.html","d914f7a31b39f1c04fc2b4a8517f7ac1"],["tags/以太坊/index.html","72f58b6c01c0fdd1eaa73019e8e62973"],["tags/依赖包/index.html","01f87dfa34eafccfe22de95c0394871a"],["tags/修改/index.html","49b191004435141d69a86bc2410771f4"],["tags/值传递/index.html","57ab0fb2fe6375735237cce48b2fcc52"],["tags/冲突/index.html","80a0ac45b1135457e94d4d83a9f281c7"],["tags/分支/index.html","34419003a02a84096bc60e792e3cba18"],["tags/创建/index.html","cedcdedc85d60e9dba3c2b107cc7821c"],["tags/创建数据库/index.html","de55051d19d4152288a16cc332a070b3"],["tags/区块链/index.html","8ba5a7533ad1d05c9da5d243480db3d1"],["tags/升级/index.html","7774bc384f1d85ce8e6d40f69fceb83c"],["tags/参数/index.html","061411db1ad71b15dbaea32807949d37"],["tags/委托/index.html","6784b0d115976b4b8c7a717a08432b6e"],["tags/存储/index.html","ff3ef68751ff305233889d07240f7f51"],["tags/存在/index.html","b0e5a5563cc5b8f0ef2d62661c34691c"],["tags/学习笔记/index.html","e27b320086c45b750b9303ae7acfd4f0"],["tags/实例/index.html","44f518d572963e4e26b294d6350c802c"],["tags/容器/index.html","602bc249d9fc0f7c153eab5278fbaa04"],["tags/工作流/index.html","7ad9b253f24703890e1c1a4c30e9bee4"],["tags/工具/index.html","93197ac913dc49094c665fa5ad271aca"],["tags/席慕蓉/index.html","9563cbc8dfd5a632cc4aab8adcf3039b"],["tags/异步编程/index.html","fe25c1455cf78bb25c58c9f16013ee90"],["tags/微信/index.html","bf3b4c89c79ca1c60449b0ea5bcfa459"],["tags/插入/index.html","cdb47f0fccb504f582f6d2beb49dfe21"],["tags/数据存储/index.html","69990777e36a02d760cc98dbe44ca101"],["tags/数据库/index.html","9554f0df06e4f8bb8bb8d7f189e44571"],["tags/数据集合/index.html","fcfcb0f0c8bf4123cd1e18e179db8159"],["tags/数组/index.html","d5796b28eaf68b9b2569805face69ee7"],["tags/文档/index.html","e29e33053e95324f8799c922f273923c"],["tags/文档流/index.html","e0422e74007d23ce460ee8241365374d"],["tags/智能合约/index.html","ee3d6fb97664d9d55224db586d19783e"],["tags/标签/index.html","604b1855fcdcd031e6ee1c7277872f37"],["tags/模板语法/index.html","a8b8e7fb80cd66330bea13574b5112f5"],["tags/比特币/index.html","8441ccde2deb88ee5c0acaac8b45351c"],["tags/波浪字符/index.html","3dbe5a88ebf579d3b3d8eede79d0c1a2"],["tags/注解/index.html","b1427267bbb5419c43bb96153ae1b473"],["tags/用法/index.html","853294536db8499d92a542b33825af18"],["tags/穿透/index.html","e7949977c8cb4c7405b3e712a55616e8"],["tags/端口占用/index.html","2676fd251f5ae42117b78064fdbd6859"],["tags/笔记/index.html","d54482d7087d1460978640d52c64550f"],["tags/符号/index.html","7b30cf576e295d9f1f5f9102c2ad3b28"],["tags/红黑树/index.html","48e2bb94c6aac252f89fdcab540b89c7"],["tags/组件基础/index.html","1b4543007381f9d2fc18b8c5b6a449af"],["tags/绑定/index.html","c45e9d91f53deccaca1db005d47d115e"],["tags/编程/index.html","329bfc29fb4d20fba3a1ac22c1c5a9f7"],["tags/职责链模式/index.html","6535cfff268083756d674473756b4af6"],["tags/聚合/index.html","45abbad43f6a986e90e54e984245afd0"],["tags/聚集索引/index.html","0ba8406b946a698796104970f0f25f94"],["tags/自定义指令/index.html","02d513764498e964c98092f01df52b7c"],["tags/计算属性/index.html","829711303fa5567a6405fd2eabf35865"],["tags/设计模式/index.html","13ba8f479e641125bd7eb0cc26cc8b40"],["tags/进程/index.html","b94c8c3130c1e4f393afdfa970cf3212"],["tags/远程仓库地址/index.html","0e7f17c027219e8ebcfa5d134d61a56e"],["tags/逻辑操作符/index.html","c7b3df66897415734375d027fe89739c"],["tags/部署/index.html","d37a953260fadd469968771950d2baba"],["tags/难度/index.html","b7b8188f5f9baf16982d0bac23fe6624"],["tags/集合/index.html","9aa7268b3ae0347768995d17767a4d21"],["thinking_in_programmer_life/full-stack-programmer.html","37a6259cc0c1dae299a7866489dff0bd"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","37a6259cc0c1dae299a7866489dff0bd"]];
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







