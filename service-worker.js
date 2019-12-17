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

var precacheConfig = [["English/ie-note.html","37a6259cc0c1dae299a7866489dff0bd"],["Kafka/kafka-introduction-note.html","37a6259cc0c1dae299a7866489dff0bd"],["Kafka/kafka-storage-principle.html","37a6259cc0c1dae299a7866489dff0bd"],["about/index.html","982d75d3378eb83b3c0d847a9a8d9531"],["archives/2018/06/index.html","f00c29afac62e87c977771f6bc797d94"],["archives/2018/07/index.html","d121e539abe300f3888ae4ad3fdff652"],["archives/2018/08/index.html","233be3231a1c485d749d97b8a1cfcdf7"],["archives/2018/09/index.html","919e3e128e70f1d25162078910355245"],["archives/2018/10/index.html","fe1bb919e4ad41661596b60737fb00b0"],["archives/2018/11/index.html","a85071496820a90c774fcd7176a3a62f"],["archives/2018/12/index.html","44977af332c850a4cb61d674ccdc4919"],["archives/2018/index.html","0d046dcdf4381538c3ee8b56ef21ef52"],["archives/2018/page/2/index.html","47fc76cef329e547220fbf5dd3b5f6b5"],["archives/2019/01/index.html","122b5c252090530fa6193f1ad287b616"],["archives/2019/02/index.html","aa20f650dacd222d5197af8b367bbd1f"],["archives/2019/04/index.html","1b7cb512ca20e5f0553af067aedb60ae"],["archives/2019/05/index.html","c16f285b049176d1da658692544a57e7"],["archives/2019/06/index.html","6029742be6c936e83292aada92fb55aa"],["archives/2019/07/index.html","3e3714b987997d2dd9cf6db01a5496f7"],["archives/2019/08/index.html","7b3272a742289f3bab63d5d3ad06a4b7"],["archives/2019/09/index.html","7c5dabe03eace31097d49280e408a465"],["archives/2019/10/index.html","371fdde48b06feeb4c5d1c992bb66979"],["archives/2019/11/index.html","618b52a05cfaa90ff939ea11da342fc8"],["archives/2019/12/index.html","4969d28478555b275a6c5d0e2b8c8c5c"],["archives/2019/index.html","6b9fe5bfef0a7296b024edcd6d4c8c08"],["archives/index.html","134b5b73e5508caeaf1f9e8458934cac"],["archives/page/2/index.html","29e1e0614cc2dfde8f3762cca2228444"],["archives/page/3/index.html","6c44f3d71fc3bb2492c4c33f212a83b5"],["atom/index.html","22adde9dfa2136cf942b4cd5a3a8294c"],["blockchain/base64-base58.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-data-storage.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-difficulty.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/block-chain-ethereum-contract-program.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-programming-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-rationale-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["books/index.html","4d47157445077cd5fd2cc6c96cf06ba8"],["categories/Blockchain/index.html","b60dc6a4c0fcbf8966a2dfd398a8c785"],["categories/Blockchain/以太坊/index.html","7c52fd68eab423c28fe950d8c61675e2"],["categories/Blockchain/以太坊/智能合约/index.html","61a3ba8f174728e2ba5df1eb5ebe3699"],["categories/CSS/index.html","660802168f82e7f55d8e5b6a2b325a64"],["categories/Design-Pattern/index.html","04258d355056fa4fd242a54173634657"],["categories/ES/index.html","6970c80907fdaeb5fad6eaa06f452659"],["categories/English/index.html","f7bb529a2caaff9617f5a736c3e83a6f"],["categories/Git/index.html","8386d87f50e1cebd7f62f148d2afea6d"],["categories/Java/index.html","df32f461e59cfd027ebf0ab6e9ec8649"],["categories/JavaScript/NPM/index.html","60195404b99aeef872213b49f624da49"],["categories/JavaScript/Vue/index.html","70260f86f7b341feb75a1d3ad3abcd5a"],["categories/JavaScript/index.html","a2b652e4e96d89c10e840dbc78e34c6c"],["categories/Kafka/index.html","edd21ad7f1ed8b611ba529d2fa990b17"],["categories/Linux/Shell/index.html","bacac4fd1d1e8a2609a83987aad6704e"],["categories/Linux/Ubuntu/index.html","f62d69f88aabf6c261b1c1ef5b805111"],["categories/Linux/index.html","e5d05d32c67e5e413f68bbbb45c25fe5"],["categories/MongoDB/index.html","f02f0d929b6b6c7c1bf5061d66d9eefa"],["categories/MySQL/index.html","f9adb640ef4b3039b5389585a94624a8"],["categories/Python/index.html","43ae5f7e6d435f0384b73102b286addd"],["categories/iOS/index.html","de5f6bf88eaabdc31f0c0abd3b928b4a"],["categories/index.html","a9c24616207bff8691172536d0fe7528"],["categories/微信/index.html","4332f65e9f84e65338047c2d05661272"],["categories/数据结构/index.html","72c204b7c7ac18e785a931d98a718367"],["categories/杂记/index.html","dadba45b4c81f5d56c157696d14bc4b5"],["categories/程序人生/index.html","bdba5cee4cdd8ae9f0b637a6d1d88c94"],["categories/计划/index.html","4aac0d2e80bcad1e18de5aad190790cf"],["css/css-font-note.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-normal-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-sass-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["css/main.css","250d930108e96cde0df8e96ed7d8a346"],["data-structure/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["data-structure/Binary-tree-note.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/chain-of-responsibility.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/delegate-and-proxy.html","37a6259cc0c1dae299a7866489dff0bd"],["drafts/configure-multiple-vue-project-with-nginx.html","71f9b25f51aa36a5d200abda728e7cdb"],["drafts/iframe.html","eaa4473fe252fbc4e1accc714a082559"],["drafts/record-re-install-mac-os-10-12-6.html","fa744fe94475f4f3dbd94e71bff6c7ae"],["es/restudy-es-note.html","37a6259cc0c1dae299a7866489dff0bd"],["essay/note-ximurong-tree.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-DETACHED-HEAD.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-branch.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-change-server-password.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-2.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-diff-m-symbol.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-ff-no-ff.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-true-merge.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-gitlab-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-index.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-choose-one-side-code.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-exist-conflict.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-note.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-pull-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reflog.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-remote-set-url.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reset.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-rev-parse.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-revert.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-tag.html","37a6259cc0c1dae299a7866489dff0bd"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","ebf0df011c5d60c0638963750ce05d9c"],["ios/ios-oc-kvc-1.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-themes.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-request-response.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-array-and-container-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-deploy-resource-folder.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-jps-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-maven-nexus-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-pojo-bean-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-springmvc-integration.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-autowired.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-configuration-bean.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-restcontroller-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-springmvc-X-Frame-Options.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-synchronized-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-value-pass.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-vo-dto-pojo.html","37a6259cc0c1dae299a7866489dff0bd"],["java/url-rewrite.html","37a6259cc0c1dae299a7866489dff0bd"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-caret.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-tilde.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-this.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-components.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-computed.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-css-style-binding.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-directive.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-instance.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-syntax.html","37a6259cc0c1dae299a7866489dff0bd"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","432db0ab3928890383447c0566927d39"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/linux-top-buffer-cache.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/mac-find-port-occupy-process.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/make-vs-cmake.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-awk.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-df.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-du.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-netstat.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-sed.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-tar.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-top.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-touch.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-which.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-difference-semicolon-double ampersand.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/ubuntu-user-add-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/vim-copy-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-stage-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-projection-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-insert-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-database-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-java-driver.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-schema-design-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-2.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-3.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/clustered-index-mysql.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/mysql-ddl-handy-book.html","37a6259cc0c1dae299a7866489dff0bd"],["page/2/index.html","afd5f82c5ec590ec303050679929086f"],["page/3/index.html","c735a8a52cd8b370488855be94fcbcca"],["page/4/index.html","6bdaf4686720ce2cfc617108f9f747ca"],["page/5/index.html","1c0454a4b315824b707cbd54486e19d1"],["page/6/index.html","d15617599e2b2eb959d71a08aad68652"],["photos/index.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-args-kwargs.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-async-program.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-package-module-note.html","37a6259cc0c1dae299a7866489dff0bd"],["python/upgrade-python-under-ubuntu1604.html","37a6259cc0c1dae299a7866489dff0bd"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","37a6259cc0c1dae299a7866489dff0bd"],["slides/index.html","6ff32acdbbe93807047c629731cc5b8e"],["tags/Autowired/index.html","8fa9d96597f9a374249e31b18ad2a984"],["tags/B-树/index.html","048c6c3569dac715dde6e2b32b059c82"],["tags/Base48/index.html","d81f3175cc394b5b6f734c952096f011"],["tags/Beans/index.html","a0ee5f2a79183555b9887cdcc9560ffb"],["tags/CSS/index.html","c49c589c1cdbab5cca829ee2999afa5c"],["tags/DETACHED-HEAD/index.html","f13457ae9d34abe79d5c32578be5557c"],["tags/DTO/index.html","967cd1e2f25828e6c72e922a34d66bb3"],["tags/ES/index.html","1965582f5fba7af8c02a909d680318d8"],["tags/English/index.html","0a689b03f8153ca56de1a95fd23d8afe"],["tags/Git-Flow/index.html","48c0c1380399dd2877ff5260ca0154be"],["tags/Git/index.html","edd007976b3551398b2627416b5c0084"],["tags/JS/index.html","595391ebc4b6513472ec9e15883c33af"],["tags/Java/index.html","b241916248d0974ea6c913932b63560e"],["tags/JavaScript/index.html","817b0ae403a79a7a2e314a6275a4cad7"],["tags/KVC/index.html","30b0b3b9acc510ae5c9a28e0a339be98"],["tags/Kafka/index.html","d19c65572e9ac7027d05cacf4791eef9"],["tags/M/index.html","079f3150934db9783c14a003abe5a41e"],["tags/MongoDB/index.html","038d4e35b3e26f9101ecb4d5a3d25931"],["tags/MySQL/index.html","a4bf70c34ecc602d74e05a8d1a771f92"],["tags/NAT/index.html","5ba2100f84c33877e5203d030eb83fdc"],["tags/NPM/index.html","e0783609093c0a51d0b084feae8f02b9"],["tags/OC/index.html","852a9eb83b31a2d6cf270ea34bd740ab"],["tags/POJO/index.html","a4e5fb324df30303670e1836ab70a4c0"],["tags/Python/index.html","85ed42b36d399f6a929cd2fe90a39a41"],["tags/ReactiveCocoa/index.html","56c8b0143a91763d475a1d7dd7ea7440"],["tags/ReactiveObjC/index.html","2732b63a56d125c5bac6201127affbed"],["tags/Repository-not-found/index.html","ca287f5b6de0668774b64981d2e0a67a"],["tags/RequestBody/index.html","b467bdbfb01276ff2b1e8d5493606ed8"],["tags/ResponseBody/index.html","02e17d7bcc05db81ae0ba3e19148f440"],["tags/RestControlle/index.html","b10d7bda820b5e23fd3751dbc85084d7"],["tags/SASS/index.html","feef8d99e17f98460807fba7e1069393"],["tags/Shiro/index.html","be8be5b77690c43e659a948460da70fe"],["tags/Spring/index.html","510a7d40909e748036bdc88a1725de37"],["tags/SpringMVC/index.html","238a7955f81feb7b32cdfc417b071e31"],["tags/SprintMVC/index.html","80eb7a3b9e511409766dec029544a24b"],["tags/Style/index.html","80459774e401c5c0368aca991752aeb6"],["tags/Ubuntu16-04/index.html","fb17ee4d45b06baa23f45eda6112d093"],["tags/VO/index.html","488d8b27016ccb2ec8a39566d82ddd0a"],["tags/Vue/index.html","bb758134c5e0b661a1073395cdabdbe1"],["tags/Workflow/index.html","bf8d4bff86b6306e6a4cf681f0100982"],["tags/X-Frame-Options/index.html","1102604cd69921919ed6a209dfba2b6b"],["tags/aggregate/index.html","226e996e8877ac9c0cd9c6179a7f64db"],["tags/alter/index.html","889639f7d943e925310163b2a09a6bfe"],["tags/annotation/index.html","0495e061898e5820248d40d48fdfc2ba"],["tags/args/index.html","7696b7e67527c5cb3933b8185fd21397"],["tags/buffer/index.html","1ab58e20317bf532524494347dfa260c"],["tags/cache/index.html","fd626dc3ac82d03f02fd26ae8960dd17"],["tags/change/index.html","a4dc01d1d99e2f7801a182ba05591a9d"],["tags/checkout/index.html","bdbd1880e51d8452fbb38977ada395b1"],["tags/cmake/index.html","7cfaecaf4cdb323749330a174c8d126e"],["tags/collection/index.html","78fa448828f5ae60e0d56169827f7a19"],["tags/component/index.html","9998cd5ede05799e9f29f7e29e044dcc"],["tags/computed/index.html","c95113ce463f3f38dd7a48ce344164fc"],["tags/create/index.html","42877c37e61a9391f2a4aef43f3caa00"],["tags/database/index.html","273e8d534cb5ce7ac493493cb771d38a"],["tags/df/index.html","f127bbc7915c758ccce15331f7fee8f2"],["tags/diff/index.html","5659ffc0449ae3230b63fabe0e10d093"],["tags/double-ampersand/index.html","b4dfa8ed1f542c5c01202e56490a0327"],["tags/double-vertical-bar/index.html","762bfb4447e07cd648f03a89a7393cc5"],["tags/driver/index.html","9e4b863c24b10940af1a925bb0adee19"],["tags/du/index.html","8b728bd07d20af5d4f7ff95f2eadc9be"],["tags/fast-forward/index.html","8c4cb12f182e8318ca58bc84a396253c"],["tags/ff/index.html","a8b91c92ec052767f9585d0e4261a502"],["tags/font-size/index.html","bb54921f3d956f46d34f1ca1d9e91054"],["tags/font/index.html","1d6973abe2b8b69a196889de7fbc909b"],["tags/free/index.html","b028d00c53466def2994af74ff1abe1a"],["tags/git-branch/index.html","7b8767e8466a7de12e994828de0df295"],["tags/git-index/index.html","476c88d82f03b5dcdd888d103a6940bb"],["tags/git-merge/index.html","e43a966725bda1dc82e0ef3b2b8eead5"],["tags/git-pull/index.html","fdbc083424b81e12d2974c7852e9c1e4"],["tags/git-reflog/index.html","953f40447472cde992ee689dfa5c5ee0"],["tags/git-reset/index.html","5d66e9bc96e3f0216b87dddcadacf031"],["tags/git-rev-parse/index.html","bbe3d7a40b048830523a4ef60a64cc92"],["tags/git-revert/index.html","c3dca061305eedd94b3a606c31755f3c"],["tags/git-tag/index.html","f3ad9075e3a69592a60da642407748e5"],["tags/i-e/index.html","fd0e730ae59be42f468111ed7df3a229"],["tags/iOS/index.html","217d19873619524e9736f541afd8f3c2"],["tags/index.html","cfbbc5885846ba4c3b5698dfa1d2729d"],["tags/inode/index.html","fe7f6eb8e66846706441282c7699634d"],["tags/jps/index.html","7db77aea48cc95ab0628f9e03585d716"],["tags/kwargs/index.html","92496e103299c4771c881c4712c6203f"],["tags/linux/index.html","4b1a67a4cd860466d05fe31dbcb3352d"],["tags/mac/index.html","0f154d9d2a1ea40ce8827513aabef87f"],["tags/make/index.html","debbf866791c0db7357b3f6b36368386"],["tags/maven/index.html","e470334063f264002eeeff859a631c6a"],["tags/modify/index.html","ae655d6e482893f604ca10fef6b4eb09"],["tags/module/index.html","38c55a57d2c425be4511c2d303f469ce"],["tags/nexus/index.html","06de7e7eb8b6f267112dd0409741f809"],["tags/no-ff/index.html","31490532b7377cab1a093d8d50ae8277"],["tags/package/index.html","6880cbecc8c38a34f37a4857ead1d882"],["tags/rewrite/index.html","bb7c7d7dea239f287730d10e1b6f9b5c"],["tags/rm/index.html","e0bf33dc91fca45f78e9b1eaabb77a48"],["tags/schema/index.html","ca1e7ddcbca35304c217ff94fb707b80"],["tags/semicolon/index.html","f718508799bfd0a7964e2b78f4b11341"],["tags/shell/index.html","282bfb74ca07462d513e1e79068d28ab"],["tags/synchronized/index.html","9e350d7aafc0329849f07c8cc095aafe"],["tags/this/index.html","9e2336c1b7fdcab71f6f2485496613ba"],["tags/tomcat/index.html","fa6117dc42d9b84afdfc6f4d82feda1f"],["tags/top/index.html","52319ddef5251b61ce7d411483c635cd"],["tags/true-merge/index.html","59a0176509f1a5e63c4a1ef1af4de680"],["tags/url/index.html","8c016853fa351f281ce10c222631c8a0"],["tags/vim/index.html","df365e297a266f408986b0269a519b8c"],["tags/windows/index.html","215522020c8707082e89fa078628b7d1"],["tags/一棵开花的树/index.html","888aacedd1a63ace5cafad04c84a56ad"],["tags/主题/index.html","3eb120839d876bd18caeef5ad7a3b7d5"],["tags/二叉树/index.html","f4ff75239dd121d638e85393ecb0e7a8"],["tags/介绍/index.html","54d9d0fc9ff3b98dae5b3f991beb1bf3"],["tags/代理/index.html","e4b655d610fed3de834b967dc9cd5df2"],["tags/以太坊/index.html","e08646ee725b4931e368c3c70fc97e2b"],["tags/依赖包/index.html","4d927c05df5bd6663b8b7a388bd8e81b"],["tags/修改/index.html","8f966425255818cb5385c6d06de2e76c"],["tags/值传递/index.html","787142fa582a33dae6c5870bdda7c8c7"],["tags/冲突/index.html","fdcf422d8fae6764b53104e9a7abf6a0"],["tags/分支/index.html","3d6f0819be6f26d8d7c27a87e6c0a68d"],["tags/创建/index.html","c05e995dad8d3c48f6272d8de968eca6"],["tags/创建数据库/index.html","d0ca1d11a407af1d0800da403c842f88"],["tags/区块链/index.html","a84e8a09c9bb057d2d5201293b8e232d"],["tags/升级/index.html","c5558e77243f15d5890f53d9821b3d64"],["tags/参数/index.html","e55db5993c7781712063a7909e6ce6bf"],["tags/委托/index.html","7e72f31a9678cbefade8fd609b373903"],["tags/存储/index.html","aba979f60d77c1c49011c49744afc194"],["tags/存在/index.html","4a6f3eff1af1e2c7d453215335563859"],["tags/学习笔记/index.html","122cb91720a08717146e1b3c7658b57f"],["tags/实例/index.html","2157bedfb06221e3caa67845c580c2cf"],["tags/容器/index.html","f76b5d1b9837943004099333c7a625fd"],["tags/工作流/index.html","e5cdeaf5385516a6ea7e5b6f5864d6d1"],["tags/工具/index.html","7138130a17c911679e0d6fbb85001285"],["tags/席慕蓉/index.html","4a5d45141392db05367007cf820e6186"],["tags/异步编程/index.html","1b2b3300e56d652f77dabc81908624c0"],["tags/微信/index.html","9be4014302a75103d46a5b2f92c1f42e"],["tags/插入/index.html","8eecbce911e30b491467ab6316f5a999"],["tags/数据存储/index.html","15ac328b3d5c6b176039e97d60866c22"],["tags/数据库/index.html","6df1cf57e93bce90d0145b6af88ad1e3"],["tags/数据集合/index.html","0cfb2729efdd3170042bd882c1c51aa6"],["tags/数组/index.html","0ed56ae78109605b61fb10bf480a8fbf"],["tags/文档/index.html","0ef0c18ee1f417c31f2419febf627bfa"],["tags/文档流/index.html","33c19efb9342cd6308348d3f9f4efad7"],["tags/智能合约/index.html","9a569503112de712503586f66426dbac"],["tags/标签/index.html","8a03af08cc7471b83cca905fd7bd9c58"],["tags/模板语法/index.html","4de3d229ebe14615d30a162d7fc80d81"],["tags/比特币/index.html","3da8f6a39f250c5a0cf1734940176616"],["tags/波浪字符/index.html","12389ec64b7b39de9d4905663b7c5830"],["tags/注解/index.html","33d58fc26ccdb70f0e617b6ebfdf7b62"],["tags/用法/index.html","e4acbb845eef59031ba6aa67309bf3d8"],["tags/穿透/index.html","2b98c4cf37c421b06514067c5b0010a6"],["tags/端口占用/index.html","7acc44bfc6d4ab5145ae81c5bb03487e"],["tags/笔记/index.html","300d890e146393b92d773d9d075435eb"],["tags/符号/index.html","306274021f45617119773a58e7d4ed93"],["tags/红黑树/index.html","a685d175253793f48f1652447bfd53c4"],["tags/组件基础/index.html","59a8b7132a7208e30d727c893679bc83"],["tags/绑定/index.html","30654a94a6d60964faa59d3ad43679f4"],["tags/编程/index.html","c7ce40f29d8e28e4ed791c90edae2428"],["tags/职责链模式/index.html","a8f24d8c824a00c54fa1e81f08ac25b0"],["tags/聚合/index.html","7629d7e3fbc076c56db632b9ef1cef90"],["tags/聚集索引/index.html","f85e376ca5f115040da08cc728bfc811"],["tags/自定义指令/index.html","8e0ade06d23eff1c843ffb47c27beb3e"],["tags/计算属性/index.html","8784ea55365f5533430b4b930eb6159f"],["tags/设计模式/index.html","a2d643bbfe1c7ac7c4432d3060951495"],["tags/进程/index.html","caad01224e9eb07d56f777061478ae82"],["tags/远程仓库地址/index.html","4c09a89e09e840e372d14c0c2474b83f"],["tags/逻辑操作符/index.html","1dcbb9866c8c3063ec90752d5d70eb65"],["tags/部署/index.html","8f1780e29aea9a8ef0ade041b14f21b3"],["tags/难度/index.html","2c2bb3199b59f3cff94b547cc892adec"],["tags/集合/index.html","f3a8abd9bdaf22e3f58abe8b478f09bc"],["thinking_in_programmer_life/full-stack-programmer.html","37a6259cc0c1dae299a7866489dff0bd"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","37a6259cc0c1dae299a7866489dff0bd"]];
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







