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

var precacheConfig = [["English/ie-note.html","31d73e6ad5b4ce9f7b6cfb53c564dce8"],["Kafka/kafka-introduction-note.html","65fe38870dc1745600489c5c4889a530"],["Kafka/kafka-storage-principle.html","89e055f146d97c5ed1494d1ea7b995a7"],["about/index.html","8f3626a83858081dc1eeae114ba8ee48"],["archives/2018/06/index.html","769e0ebe826036ca35ea5c4d042356c4"],["archives/2018/07/index.html","b4704bc2fd3fedba8e93710a0c7e0f00"],["archives/2018/08/index.html","b73e090e2971ae72789e59aaf04fda1a"],["archives/2018/09/index.html","46badc75a274d7776d3d314ba631e791"],["archives/2018/10/index.html","599fbd90ea07d12b0945d00511f1508d"],["archives/2018/11/index.html","06d2a8946ccbbb73c48ccd12464e9506"],["archives/2018/12/index.html","9822e20bb9fcdf91705e7c8d34e8d0cb"],["archives/2018/index.html","ee13e914cbc75d1ce8f212e489b2c17d"],["archives/2018/page/2/index.html","678844de941299b27c02ec88deb04fc7"],["archives/2019/01/index.html","61caf85a297432130b925f90fa912186"],["archives/2019/02/index.html","3225056feabe9003079f247150522e86"],["archives/2019/04/index.html","ce8468dcf67090b181700d9b103d6cdf"],["archives/2019/05/index.html","35e65da4b914722fd9a4ddccf1894241"],["archives/2019/06/index.html","4a66092d8de5ea1483142acde3babe09"],["archives/2019/07/index.html","b863ce62646f2bedc12e912c96a111f4"],["archives/2019/08/index.html","2b17e538695f180f7b462e5235384487"],["archives/2019/09/index.html","d637b2c7dcc1dc1809e19f8fb56edb2c"],["archives/2019/10/index.html","2b155d35170193748f6577a669f6a852"],["archives/2019/11/index.html","d37127671851878506ed773987c3306e"],["archives/2019/12/index.html","7af2106e5961b02b5c83409449e2375a"],["archives/2019/index.html","7f5a8a65735c7289cc1fcccbe36a2c1d"],["archives/2020/01/index.html","3c92cbfa954aa12c59f90573ad2b648f"],["archives/2020/02/index.html","8fa69700543a2cc430ccc79bc5e21733"],["archives/2020/03/index.html","d3f5bdace3d0ddd006562b6fc00f001f"],["archives/2020/04/index.html","e87d51175045504aa8ee80be8b8d2b94"],["archives/2020/index.html","5017608a4eb445c7b6d10a40e599c5b4"],["archives/index.html","324f062992d1ef4b1c4748e85710f4b4"],["archives/page/2/index.html","12538fbf5c95295d625eeb1b2cc6d419"],["archives/page/3/index.html","06b83f7ec30435783984f1c234091cbe"],["atom/index.html","bbbc45efc8a6bc8421128ffd8b0edfb6"],["blockchain/base64-base58.html","d0ddce3a76dd94d396ea1fd398afeccf"],["blockchain/bitcoin-data-storage.html","083a37f7811d420fabea3a973cbcb95c"],["blockchain/bitcoin-difficulty.html","d32a3410e7e188606b8ed2178f91a93c"],["blockchain/block-chain-ethereum-contract-program.html","db77bc77079b5552f05859a5af1cf79f"],["blockchain/ethereum-programming-introduction.html","7baf9dfc114c5c75c8a89d401e8003cb"],["blockchain/ethereum-rationale-introduction.html","e6ad908fee8f697db185330636d0c760"],["books/index.html","5c9338dc1f0b32d7feafaeb9b9df3e7f"],["categories/Blockchain/index.html","68f8456a82c88a41d8aeefd8133a2a99"],["categories/Blockchain/以太坊/index.html","0b50442a3103b666e50a7b15b3024fc0"],["categories/Blockchain/以太坊/智能合约/index.html","1433a9ae61d32b48a4e747413b87d683"],["categories/CSS/index.html","b27be100576def0f9ae795edeaf70820"],["categories/Design-Pattern/index.html","f9439410b77066d982c596bd00cb552f"],["categories/ES/index.html","463c7f3823707eef7ddb75cb0e7c1599"],["categories/English/index.html","6a1ef0e5fae51c0149946b1078f6c542"],["categories/Git/index.html","38083cea8b5be2d9a99959245770ff54"],["categories/Java/index.html","4c8364b0de776e33a675c4a9365a2e29"],["categories/JavaScript/NPM/index.html","b5a05274e03c7c8c89ea280cb5dac341"],["categories/JavaScript/Vue/index.html","676d2e602eae3f319414d3fa8bd05204"],["categories/JavaScript/index.html","6e31070fd128fb04939a382d13951ac9"],["categories/Kafka/index.html","b5e0fec406b37ad25c6d86299a294cfc"],["categories/Linux/Shell/index.html","e5442696f152f516c73a5d5cb016bdb4"],["categories/Linux/Ubuntu/index.html","e4f0c09e5e0baf810a233c177b395233"],["categories/Linux/index.html","2b7b7dc14b5bc96d2fae72941e6dec5c"],["categories/MongoDB/index.html","f13183829e99e6ea7be206c09e47a516"],["categories/MySQL/index.html","9eddbc01e8b92fb8b7f347c63f5d4e69"],["categories/Python/index.html","b0f6b74343c9851ad9421cc628f674df"],["categories/SOA/index.html","26068223bed82e9d634bc9c9fd00dbff"],["categories/iOS/index.html","8d0ceadd7fa8dcdbfc1c4c6721d25968"],["categories/index.html","3d28331d82e35279ef3049ab8c536bcd"],["categories/微信/index.html","6da03c940b0a404480f7121b9aba3972"],["categories/数据结构/index.html","7e503640ad595cb803521671e292e939"],["categories/杂记/index.html","61a8675d6e5f668d0fe8f092a50dd9c7"],["categories/程序人生/index.html","90ff4dc4f1193d61174b7b51fd237d57"],["categories/计划/index.html","d8af9ffafe35edebb3fb0c271377145c"],["css/css-font-note.html","f2990cdb874a2e323cb29518ee914e22"],["css/css-normal-flow.html","f8fd5c7449285e4f7ed7bc7d49c2d090"],["css/css-sass-introduction.html","7d4db9ff205773342daa2f43dc16ab50"],["css/main.css","5da800c88bfe9d650bf6255cbe9fd138"],["data-structure/B-tree-note-1.html","02798c7317c90b0e1c9a7908a2759314"],["data-structure/Binary-tree-note.html","368eb804fdbaff20b5e19ed9829013ce"],["design-pattern/chain-of-responsibility.html","c43758cfec6b09329f58d8bce45e49d3"],["design-pattern/delegate-and-proxy.html","830b291bae7b07614801f4d577c6775e"],["drafts/configure-multiple-vue-project-with-nginx.html","86086a0066c5b651a5e134d672692e34"],["drafts/iframe.html","6e06b0ea0325254c8ec006626c95a390"],["drafts/record-re-install-mac-os-10-12-6.html","2023248da767205c89c73852d2e9c5df"],["es/restudy-es-note.html","75705ab0abab3285fb23958351278019"],["essay/note-ximurong-tree.html","7607a8e518ff0d1244141f298d72ace0"],["git/git-DETACHED-HEAD.html","b98ce4f1985a47120ab8bb88afd45c60"],["git/git-branch.html","393a34187b727816edea632c965ae58f"],["git/git-change-server-password.html","1705a4928cb60bf46defddefbedee96e"],["git/git-checkout-1.html","a58b933fd9a3b7978d7157954911b98b"],["git/git-checkout-2.html","0071605e80a5c062f25a6e7562a4e9ba"],["git/git-diff-m-symbol.html","7e5ca48578db5593361ab3cddc921a48"],["git/git-git-flow.html","af88ffb2104a716620519239cb6e0f76"],["git/git-git-merge-ff-no-ff.html","87009ee0b16d476d5959ace98edf2691"],["git/git-git-merge-true-merge.html","760d3ece8a6b828906afcf5adf3b60c9"],["git/git-gitlab-flow.html","924c4a62499a3c99f6d3394457b9a25b"],["git/git-index.html","e97ae9d57e525cd31314b1aa8e0596f1"],["git/git-merge-choose-one-side-code.html","1f5322b8b14ee0d2a21ea8f875879481"],["git/git-merge-exist-conflict.html","51fa8f8274a1ccd5e40e08bdc1ac0e45"],["git/git-merge-note.html","564839b2ee7b6e8174c96d350ca30bca"],["git/git-pull-1.html","08f7e008eb68a8739023a71931011fa5"],["git/git-reflog.html","33cd700c575e09d19894839083020f9b"],["git/git-remote-set-url.html","7f44d27904f4ea003d868732eb31a6b4"],["git/git-reset.html","28d6e5313847cf41392edf1e178b9b58"],["git/git-rev-parse.html","e5d117e4c9e6a43e7005dda3cd9b6971"],["git/git-revert.html","8ded09322fd3878a28b80c5ee991fa7d"],["git/git-tag.html","cb781609916ff0a51aaef11f72665e44"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","eba43643389df74569e304f319bac3e0"],["ios/ios-oc-kvc-1.html","b9a70178981bfbd970365370246e6ab4"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","0890576c66250637397bd33c9c59335f"],["ios/ios-themes.html","06c0b4ef7da7d3df97f1b3b876b25c31"],["java/java-annotation-note.html","57ca1adbb7d8ffeee1e7f566cb8f8399"],["java/java-annotation-request-response.html","ae40fea33e8eedbb3ddad03b2a41fc12"],["java/java-array-and-container-note.html","7170220952c061c29069d107d0f9d88f"],["java/java-deploy-resource-folder.html","0edccfda8edb5a0a538c79ffb13675d3"],["java/java-jps-note.html","d10a6b42556351cbd0a41853070b75f1"],["java/java-maven-nexus-note.html","46476c9cfdf1492a46ba29df558861d4"],["java/java-maven-pom-note.html","4920f1502ddb584be2ff0ff0f3dfdc1f"],["java/java-pojo-bean-note.html","992b28ac71cf0e8b644f72888305f1c1"],["java/java-shiro-note.html","3041d1555aa4f29ffcdef213578a0069"],["java/java-shiro-springmvc-integration.html","6a3debcc5103a254124bc32745809035"],["java/java-spring-autowired.html","7d806ee2feede793f88eba79f5a24eaf"],["java/java-spring-configuration-bean.html","3a2c99cf0711e551265066dd04f9c217"],["java/java-spring-restcontroller-note.html","07d79b8d93cebfd7f87c4dfd37d92a8d"],["java/java-springmvc-X-Frame-Options.html","fbbef9d86019c25f530a6cb6e3e36b0d"],["java/java-synchronized-note.html","9eb65834698b7ea9cb06b1639303c649"],["java/java-value-pass.html","3afceb497c3cc8433cf39ab4c138b2aa"],["java/java-vo-dto-pojo.html","b82cfdd41e4cd50b389944b9653ed409"],["java/mybatis-mapper-locations.html","8e10de1b04bb5953335ac674c816b259"],["java/url-rewrite.html","a3bfc7923a72f9cf91781f384dd750e4"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","4db65dfc2d88e335be32982078d32f43"],["js/js-npm-symbol-caret.html","f87bacd851c44316a3d10a283ec476c3"],["js/js-npm-symbol-tilde.html","1c7493e180e3e2127b134069b9d58510"],["js/js-this.html","16c58b30c7b086cb597909918a58b282"],["js/js-vue-note-components.html","3420621dfd5cd40e6fd66366ca054e1a"],["js/js-vue-note-computed.html","1e52a9bc5379f387c2ac9fab1d51230b"],["js/js-vue-note-css-style-binding.html","c2c7bfbadac2669d6206c2b385ba7fa3"],["js/js-vue-note-directive.html","a94c0fae92f48280862b0326b934ee82"],["js/js-vue-note-instance.html","98533420833ed77ff22856a45e8c8d35"],["js/js-vue-note-introduction.html","4b1c2e8fd3b6c5d7761d18efb0491af7"],["js/js-vue-note-syntax.html","c31f8bc06d505037873720f68bfc18c4"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","c34cbd14d434eba3e4b10888fb6a33d7"],["linux/linux-top-buffer-cache.html","fefe93177d898162fadb6a60c27c0f0b"],["linux/mac-find-port-occupy-process.html","ba77ba7a0b561e73882c6b6b7f59de31"],["linux/make-vs-cmake.html","b618b6133869b11787b01e398281a083"],["linux/shell-command-awk.html","845f916703f14a9cc8f6936fd81478e2"],["linux/shell-command-df.html","2c30b2f1c6a652ea1b4d7d7487a2714b"],["linux/shell-command-du.html","6ba6b41e7119959e7a6476fa10a92d68"],["linux/shell-command-netstat.html","36a53b0d1c71021daed19fbd59e13153"],["linux/shell-command-sed.html","f7338757582b2db98b1d6a7c78b1ab33"],["linux/shell-command-tar.html","24db65f440fb571942813027c0db190a"],["linux/shell-command-top.html","45a5d4b255f20bad9147341f2fa3be55"],["linux/shell-command-touch.html","c87fb4798b2021994315109ed03cd85e"],["linux/shell-command-which.html","07c8b30f1afa6b176f699ac46b793c6a"],["linux/shell-difference-semicolon-double ampersand.html","9421487d01076e9a6e5b4097789ff1a7"],["linux/ubuntu-user-add-delete.html","7e984ac24a35c56c60623a13ef894cd2"],["linux/vim-copy-note.html","b952e290394869728ddf368d3e70716a"],["mongodb/mongodb-collection-aggregation-introduction.html","3dfb444760bfd6f631b18db0d8f873e1"],["mongodb/mongodb-collection-aggregation-stage-operator.html","f7d57c0fd1a171deebaddc423bb3e959"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","551c907280d856123ab210b8b03c9978"],["mongodb/mongodb-collection-create.html","b9ed32a184f1aa7a36fcf787b092426c"],["mongodb/mongodb-collection-delete.html","18d444ab1dfe940ac4386795e537d112"],["mongodb/mongodb-collection-find-1.html","65d3e47b03f3b517b12ebb6cf2e133dd"],["mongodb/mongodb-collection-find-projection-operator.html","ac70b6b52a44dadb858de008ca0a6b76"],["mongodb/mongodb-collection-insert-1.html","e6a11c2043ceee84d4320e5118445b5c"],["mongodb/mongodb-database-create.html","65e00f535d6c693c263ebb2e198ec863"],["mongodb/mongodb-java-driver.html","bcd340583bdb1ed0412ab7a054f781a6"],["mongodb/mongodb-schema-design-note.html","bc8dcd682843d5e1d314d1dc49e3e4b4"],["mongodb/mongodb-study-note-1.html","21abe2b83a53826ea04083e7f0ff4e5e"],["mongodb/mongodb-study-note-2.html","deba510f763bc561d911734f7d2513ca"],["mongodb/mongodb-study-note-3.html","c4f22cd448c0750c38e5320111dda08b"],["mysql/B-tree-note-1.html","68a9deb33c90bbb2d619f9f7ec5d0ed6"],["mysql/clustered-index-mysql.html","a42e94fa781015f8d08f6f068c2ddadd"],["mysql/mysql-ddl-handy-book.html","6d52769bc5d585298252c73f450557e2"],["mysql/mysql-ddl-note.html","b7b82cc33ee93fa5cb17b3267a3ffdf9"],["page/2/index.html","50a8dcf211b842d47c7f3a1ba01512ec"],["page/3/index.html","9458a4d219ddec1188d3f94ebed8489a"],["page/4/index.html","bf1496bd4ad66c8cffac92215e30256c"],["page/5/index.html","605795eeadfe9832b4cb4d6102ee808d"],["page/6/index.html","a03e8c46d076cca2f1576800c1a111ec"],["photos/index.html","8d0f3f22d459db4cf92ed658122b6208"],["python/python-args-kwargs.html","bdcdbf5b554baa8ca01b3afec7d3b010"],["python/python-async-program.html","64d0890e12c7d517f22511976d4fdd4d"],["python/python-package-module-note.html","28963762fa76fa63e4158f0bbe67574c"],["python/python-package-module.html","d99040203129798dd6eb10a4e8549a7c"],["python/upgrade-python-under-ubuntu1604.html","21ec63b799c9f0b951adbbafd0bcc17e"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1e89c0278abad7fda57381b6bb0ea1f9"],["slides/index.html","2e5b5853b76c1f8da3bed26b10fbee02"],["soa/microservice-article-note.html","0262e916162a6c082ff8c622529e3a97"],["tags/Autowired/index.html","2ab2aa4b90b57c431543bab4e2646e61"],["tags/B-树/index.html","b49d4d2ade84af030333ab480f9f45fe"],["tags/Base48/index.html","a5257d5baba4ee61f5952245c725478f"],["tags/Beans/index.html","e62088a486787d708b75ec201b3a067b"],["tags/CSS/index.html","c7655b48786ddb9c769072e166f029c6"],["tags/DDL/index.html","fd7d8bd95408469b2ab3285d6fd8782e"],["tags/DETACHED-HEAD/index.html","abb35254e023ed96d9fdca3ab78b1bdb"],["tags/DTO/index.html","d97f3f4d3f41bdcfeea5c6127e57cc3d"],["tags/ES/index.html","f8b33dcf6572b45a9d684a87237463ff"],["tags/English/index.html","0a2d642731600e2055f0be11992fd7db"],["tags/Git-Flow/index.html","3dbf5863e7990863368862a5df9af0c6"],["tags/Git/index.html","f6b5ddc53d80f3bddde6e891614b3a3e"],["tags/JS/index.html","18a96aa57fb35079a025f2be9d7fb108"],["tags/Java/index.html","f783543053beb4b3fbd80b79cf504851"],["tags/JavaScript/index.html","25d97510d21073f65dd09093b425329b"],["tags/KVC/index.html","a789b323b457ef35430ddebdbe7cb282"],["tags/Kafka/index.html","585d0ef9b4b7e4532d872241ff63d564"],["tags/M/index.html","234b339f39c5a1c1bb0f0890c400e667"],["tags/MongoDB/index.html","c5a47fccff114e64836b30c17606365c"],["tags/MySQL/index.html","592ed5296fdbe78bb482a7e1ad26fa0a"],["tags/NAT/index.html","8dabf384b41b4b0c698baff4640fbcc6"],["tags/NPM/index.html","dbc5002ae040fb48af8e5e41ccd476e5"],["tags/OC/index.html","0d9eba989dbc636f60f5f2ebd27edb4b"],["tags/POJO/index.html","9dfbd3c5dbd2fefdf801d3b143190f2a"],["tags/Python/index.html","72f6ce55e1babd19fca86208f8cb4b36"],["tags/ReactiveCocoa/index.html","5548964b6c78a772d5a4fd8fda41a775"],["tags/ReactiveObjC/index.html","7d759164c47b664a805539ca9459bc8f"],["tags/Repository-not-found/index.html","425755d29a4026573d0bdf3462333814"],["tags/RequestBody/index.html","55c6c75c8cbbd17bced3ac09179d1cb5"],["tags/ResponseBody/index.html","59bb453758e0f1795d6af49ed0a49153"],["tags/RestControlle/index.html","7e01c02d3620d26844df0a96f7273698"],["tags/SASS/index.html","eb174009c7987f05c79550dfb944361e"],["tags/Shiro/index.html","9483ffec5c6587aabb82aa960dbe72f9"],["tags/Spring/index.html","b36069fa77ecf49df44d17c4d4c0cc31"],["tags/SpringMVC/index.html","184c2c79d1d1a44099266b7a78c53ebc"],["tags/SprintMVC/index.html","5422c8f2ac9cc5ba9598fd692e65cd61"],["tags/Style/index.html","03d70b1392b4e9784402a9e6c12b6bd5"],["tags/Ubuntu16-04/index.html","223b77930066eb3fc47478b8c7973017"],["tags/VO/index.html","300891c447f9a703f0aef76d84cc2596"],["tags/Vue/index.html","be1326d45c07cb1d5ca67100f5eb2086"],["tags/Workflow/index.html","1135fc95440d4c88e5ac35d989407bf0"],["tags/X-Frame-Options/index.html","f3758d3c84c629b0cd34424846da1ec7"],["tags/aggregate/index.html","9faa3d529d9ad390a9f3300148ac6635"],["tags/alter/index.html","f33193e72c823ab1b10f801ba3717071"],["tags/annotation/index.html","e1b0174e693bd39f4fb45cac3decb454"],["tags/args/index.html","300af52fcf950bc9691eaeaba6a606e1"],["tags/buffer/index.html","95a54adb77ff30ecff4a527da6f29548"],["tags/cache/index.html","5e51e2eb079118c33923c23a2c479a11"],["tags/change/index.html","98386b3905a13d03c13091efaf18c6d0"],["tags/checkout/index.html","7cbe6909f089a23820e519a6ec21c9c2"],["tags/cmake/index.html","b0a163bf01f37a91f16ffd1e31a62cd9"],["tags/collection/index.html","b6d57663870aec79a899c728c7cdd6f4"],["tags/component/index.html","0881ab683e37a211cdca97d60467506c"],["tags/computed/index.html","eb84bbfc935a6642a229e42071e700a4"],["tags/create/index.html","2742da9aa2501af7e6f9c7764401a510"],["tags/database/index.html","ceff148f07918702da37ab247679a665"],["tags/df/index.html","6b669745533be9e4918e5dccbf1f2cb9"],["tags/diff/index.html","6452f12f0b834017fa48a0d12d4f900a"],["tags/double-ampersand/index.html","b8926fbac625ca5552deed2a7d5743e9"],["tags/double-vertical-bar/index.html","66d82ca37d768d4458e81566002de3e8"],["tags/driver/index.html","9011921fe2520c51ef5de91afd64addd"],["tags/du/index.html","b8e6a986caf7d9e83b4d1285b3ae5da9"],["tags/fast-forward/index.html","89cd0ba0bb8174b0faa4d432c254491d"],["tags/ff/index.html","b6aec3ded822ef0065ac88565d403a48"],["tags/font-size/index.html","c7f6aa343fa60ef3f7899cff1d7b8c7a"],["tags/font/index.html","b26ca51ec4fe66f5e7c6ac0ec127b27f"],["tags/free/index.html","00c1694f9717b70e2553932c80f88461"],["tags/git-branch/index.html","20decc17ca6d3cd02110145f027af387"],["tags/git-index/index.html","1681c7104851a21cf9fef417676b4840"],["tags/git-merge/index.html","fa8d2894b746b21486914761c9cbe801"],["tags/git-pull/index.html","c011109513571e9b27a27c6ff6829b4e"],["tags/git-reflog/index.html","d07bb395069a25e57729a9d6dcfd6e99"],["tags/git-reset/index.html","6b1751bc541dae38fdbbcd24af7274f8"],["tags/git-rev-parse/index.html","ad22d6cc3691567e50204a81384b7f3f"],["tags/git-revert/index.html","891fe3ccf669bedcbdaeb580c732c1c9"],["tags/git-tag/index.html","82bd34eb8b4edbd4219890cdb73213d9"],["tags/i-e/index.html","c7fcc95fcea4665c7c022001bb8cae48"],["tags/iOS/index.html","89c34ae216bf95876f3c306399de94b7"],["tags/index.html","e097e7ee5fdf15060f3a17dc438f16d7"],["tags/inode/index.html","0f5f37a438f0bf53f41df9cce754b8de"],["tags/jps/index.html","89d87e770386c70cb2034311526757e7"],["tags/kwargs/index.html","5be3cc4a0a5029ed6c764c4206fb2800"],["tags/linux/index.html","a4e51d54ab7f9f0649d394a36bbe5064"],["tags/mac/index.html","b24e2e0e5061bf67a7de30d8275353ce"],["tags/make/index.html","bbab1c42436480a63a83e2034c5da34d"],["tags/mapper-locations/index.html","b108bb70343b52590a6781a536004c65"],["tags/maven/index.html","2c63e465adf106f28cd40b0dcb2c846b"],["tags/microservice/index.html","56ae46a5312073c2715bd4a1a68833ff"],["tags/modify/index.html","f39213349e21e2b5f87e1eec946297a4"],["tags/module/index.html","08e3aebf12f9576cfc6e4b4356a41330"],["tags/nexus/index.html","ab2d5c470d71d019bd0c6732be47c245"],["tags/no-ff/index.html","563a651d0137ca67983f111845e59b78"],["tags/package/index.html","4f66a5c4c5e3851a3a4bc46bcc57b7b0"],["tags/pom/index.html","a4cba890e54cd6539d17fc70b08e44e6"],["tags/rewrite/index.html","b91247075ee0cc7b52dbebc549d77fa0"],["tags/rm/index.html","6472bbd1066e29aa37787363533846a1"],["tags/schema/index.html","faaa6b9dc9b4517017ec8273103d3dc0"],["tags/semicolon/index.html","426b8a5b77ac4049a2bde8553e73ccae"],["tags/shell/index.html","2fb9ebb263b9f9f82894321ba8a44976"],["tags/soa/index.html","df6288c42bd8d8141ec0ea29fdf5489f"],["tags/synchronized/index.html","6bbeeb8ae15ae933159b2316eba886f6"],["tags/this/index.html","3229361ee9b693bdad84a117acf06789"],["tags/tomcat/index.html","5cf7829da77ec1733fe71e96e7375da3"],["tags/top/index.html","90979d7aed0216c78ae16ea9833a320d"],["tags/true-merge/index.html","358ce9ef9570355da87343e1d0371756"],["tags/url/index.html","5d5666d1a09fa5f95bb3a0a1927ef610"],["tags/vim/index.html","a2a78bd4f3a8daeb119b2d409a7d1271"],["tags/windows/index.html","a30ea5ccfb5b9d5bc411e466edc4d31f"],["tags/一棵开花的树/index.html","17e3feb1f3ce4f188048e379dffda9e6"],["tags/主题/index.html","6763630141e573d685e8a031ac8ff1fe"],["tags/二叉树/index.html","49b5f1c911ba4bc050e7e06885e253c6"],["tags/介绍/index.html","9008657f3c0b5698cb4877b51062ea64"],["tags/代理/index.html","e0383c7329950e71f741d464832cc965"],["tags/以太坊/index.html","f782289e3a1a7cf500c315ec06a91d1e"],["tags/依赖包/index.html","dd97f0ca18a3aff54987cdb6240845b9"],["tags/修改/index.html","4eeaef06ae1863659f247bd25137ec7a"],["tags/值传递/index.html","82e2d3a77cbc58094ec2f262fb63cd87"],["tags/冲突/index.html","282acc64e3e5ea336bd3099ed53656ec"],["tags/分支/index.html","f0b776843e8c0f2bed5ee385b9a7865c"],["tags/创建/index.html","91a9ba11e11c0ffc8ee7a0129a22e129"],["tags/创建数据库/index.html","323fc4d698e5df92651170c13d8fa527"],["tags/区块链/index.html","5e389df6340fad40297630e91d58a12e"],["tags/升级/index.html","1a56b3182a62759762e456045f7a3c7d"],["tags/参数/index.html","e48b0f24f9c9a113e362eaa3e51fb467"],["tags/委托/index.html","f1cee0679b54ef2ec2b37322b9c8f9ad"],["tags/存储/index.html","f1bab8145c420dabc151cba03e72d1f7"],["tags/存在/index.html","97eb27a1a2f60f75acd009a6425bbd55"],["tags/学习笔记/index.html","6318311ad89d979d7d221e1258f28472"],["tags/实例/index.html","13e18d7f2b201fd114f595a73bfae019"],["tags/容器/index.html","22121489d178061485a0c8b728565fab"],["tags/工作流/index.html","cd5f6884f2cedb3082c39481559936e3"],["tags/工具/index.html","5d8290a89e6a1a63ebc562bc62266302"],["tags/席慕蓉/index.html","bed72f7b34ab8668931d7dc8d240b3b0"],["tags/异步编程/index.html","860a845cb0421419f96c5c51ce58c28e"],["tags/微信/index.html","e3385886e396cbb3738f742071d6230d"],["tags/插入/index.html","5bdd41505bf1b8b0816e50a6f0714589"],["tags/数据存储/index.html","97e5d1653c5d62c260f710eeab8d1abe"],["tags/数据库/index.html","0a73b031d1ebb84d32a8ada58ed109b7"],["tags/数据集合/index.html","bd54a808f389a9a99dff49942fb5c59d"],["tags/数组/index.html","78af3c11c16843316578c1574965ff03"],["tags/文档/index.html","7efe0ac588dfb20cb7dd882c42e659de"],["tags/文档流/index.html","8d279d4334adb8bd049ba63f823a3ae0"],["tags/智能合约/index.html","2cbc726948077ca424fdfffb8e6f2241"],["tags/标签/index.html","0cf1c74e2dafd942824ed082028c87c1"],["tags/模板语法/index.html","d79cc8214d7ce2b31d2e776bc46e2b9b"],["tags/比特币/index.html","49b6e9b5db8fd94e5f729930db00d544"],["tags/波浪字符/index.html","72913c0c10a7b99a85b0b683c6ad1f53"],["tags/注解/index.html","bf11fcd20f34ae1c046c6096f2a6e4cb"],["tags/用法/index.html","7f672cf9a349ee338baf1af3487b58ca"],["tags/穿透/index.html","f6d7798dcd14f6489267863ecf9d9b8e"],["tags/端口占用/index.html","1786eba672f7888fdda97dfa39b41b3f"],["tags/笔记/index.html","52d8c758fb2e29ec0710b0760a39b2af"],["tags/符号/index.html","6f32b39a0eeedaeb046b21c6dde9c8dc"],["tags/红黑树/index.html","9c09eb0b386b1517f66d469a66cc2d16"],["tags/组件基础/index.html","4fa5d8bf6fb1026a78d5de967db8c314"],["tags/绑定/index.html","72d7a4571b54182832237ec872895629"],["tags/编程/index.html","84ef57feecfaa715988d160928ec9371"],["tags/职责链模式/index.html","bebdc7b8e67afd2246aa853fddded0d1"],["tags/聚合/index.html","5887ba13b4cd1d7183519b08869cd828"],["tags/聚集索引/index.html","9140cd270f1000f0a61444830bc63376"],["tags/自定义指令/index.html","1bd1f6a3ffc7adbe26bbef116d2ec0db"],["tags/计算属性/index.html","5c079967716c73ac1a2e3ab94f07c2d2"],["tags/设计模式/index.html","14e55161b43c8f367c30b298f47ee5fd"],["tags/进程/index.html","bbcc174f9f9a2ee94b20b60823240a34"],["tags/远程仓库地址/index.html","4f45afe0a1aee1eb86ec045e95e60c5f"],["tags/逻辑操作符/index.html","cd4b7831b188bf57ff1b331fa1582840"],["tags/部署/index.html","816f2d779664f61400ae10b299d8bcee"],["tags/难度/index.html","600a2562114bddbb1cda51998cacb722"],["tags/集合/index.html","e142de737c41534e3fc888480cfb66d9"],["thinking_in_programmer_life/full-stack-programmer.html","0a7e75bc58e2eda80795717709ee37b9"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","bba7d7ced9b5a309b861f0bbe85e021e"]];
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







