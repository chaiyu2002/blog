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

var precacheConfig = [["English/ie-note.html","a93b1f62974f1634d96d6a17e1c2c4dd"],["Kafka/kafka-introduction-note.html","8550be23bc74257453e6f61bb64dfaf6"],["Kafka/kafka-storage-principle.html","983b38b3addc45a3dcd7621b3c20d729"],["about/index.html","580c0ac6ad6580d7a4fe9d82e66f1678"],["archives/2018/06/index.html","2e24ceed7e07c74750c6322810b5eeda"],["archives/2018/07/index.html","06ccc25b3befcba7e7f2a3190d0f0a47"],["archives/2018/08/index.html","d53d73c702abbdc215487c67ea1fcaf9"],["archives/2018/09/index.html","32d23728da1f5f09c508294531b2aa6e"],["archives/2018/10/index.html","be177d382afaa330793944d9e64bde18"],["archives/2018/11/index.html","53e1965b671a1d868fc7fb25a098e632"],["archives/2018/12/index.html","3b119f7981efe2983520b75ba9defed5"],["archives/2018/index.html","7163d8d7984ff7f16f4c0b094b1e80e6"],["archives/2018/page/2/index.html","e99b9045638ace70188ab3af60901647"],["archives/2019/01/index.html","56a69549659c87cb46df187ae900a509"],["archives/2019/02/index.html","4c472339ebf643aec95a0427fda4a00e"],["archives/2019/04/index.html","bd6e14c0d2a7de03d8ba06cac4d9c940"],["archives/2019/05/index.html","8ccd4fe30a97a6b3a25e6b71d9338a01"],["archives/2019/06/index.html","86ab1cbb380129a2557a3aead88b37cf"],["archives/2019/07/index.html","ec17d91e3f62777b44436bc05cec2de3"],["archives/2019/08/index.html","42832898d521b3f24a891af738418b0a"],["archives/2019/09/index.html","f3a36264a38e65679e044ac929135c50"],["archives/2019/10/index.html","535fd57d166eecbfcc564bf61fdbfd1f"],["archives/2019/11/index.html","47d4053133b06f9e246f30e2dd3757b0"],["archives/2019/12/index.html","f039423fde359947a9c7e67c447006f3"],["archives/2019/index.html","a2f2d04d7cb17a63af6d15e7f8794795"],["archives/index.html","eb540be58218b94604967077d22576e3"],["archives/page/2/index.html","0281a7829b815a669a84a098e3ed039c"],["archives/page/3/index.html","99caa9c3d536300a6d1c278dd40dd4ec"],["atom/index.html","7617e81018fba2ffbe696c40593966b1"],["blockchain/base64-base58.html","99a9d45451ed65228fe91ee3d75a0a1c"],["blockchain/bitcoin-data-storage.html","5929654e8b510d07539c0235b0b85b11"],["blockchain/bitcoin-difficulty.html","2b92cc4856a1d924a214435b1c1bf8c1"],["blockchain/block-chain-ethereum-contract-program.html","dd1dfbaa8b3824c55958c4d8f385d88d"],["blockchain/ethereum-programming-introduction.html","f747767e4ec1630e966eb45c78b12071"],["blockchain/ethereum-rationale-introduction.html","8205a821ba9cb15880b48f4b39c69a4a"],["books/index.html","7115da599240e3896f718c833e46c76a"],["categories/Blockchain/index.html","bb55aa70b9ca6d0525099146f9446561"],["categories/Blockchain/以太坊/index.html","a0c419b4c38716b80e7c846c59a51a04"],["categories/Blockchain/以太坊/智能合约/index.html","08becda2c70bb35604d18dcfe795540f"],["categories/CSS/index.html","484e886070587f61fabbee0af3c1f1fd"],["categories/Design-Pattern/index.html","6bf35cf6b5e2b21f46653ed306fb6be9"],["categories/ES/index.html","ed52e49d18bf56c14b1cb252a7db1685"],["categories/English/index.html","12df1557de40b4a83b687d51bfb20e68"],["categories/Git/index.html","0f6be4d91ff351026ae859fb94b977a2"],["categories/Java/index.html","e57734e0240ce931971588fe12025908"],["categories/JavaScript/NPM/index.html","15d0267ef1c2e3355263a4c599f95bd8"],["categories/JavaScript/Vue/index.html","1425a232d661d88b1253749b03e6c3d8"],["categories/JavaScript/index.html","c63de6ff5f2cbb49761d844084a7f936"],["categories/Kafka/index.html","b1644cc0837832870b4a1ebd3b5051ea"],["categories/Linux/Shell/index.html","2cb0ce5d782278c6f59219f6c73a5bde"],["categories/Linux/Ubuntu/index.html","f402b72245dcf222502a0553321cd635"],["categories/Linux/index.html","f1bc43ce6d8fee41d68555dff08022b1"],["categories/MongoDB/index.html","c383c669a363d77595f58679809dd836"],["categories/MySQL/index.html","fc14a1e3f184a873979bbc28660c62e7"],["categories/Python/index.html","40ae9814491097255b81b93e75bc7ce0"],["categories/iOS/index.html","a9e958d52f573368b13994034d51319e"],["categories/index.html","cf12b13e61a74bf70a5ece1b4cc057de"],["categories/微信/index.html","f6bf874fe26d911137dfb903d8c8ecf2"],["categories/数据结构/index.html","cc580ad561e8fc2c2be1baa9444fe441"],["categories/杂记/index.html","e89f09d147fe7f0be8b4348ddc434fbf"],["categories/程序人生/index.html","d4d2fcad38b74d9b50b27bc8bfb5c57a"],["categories/计划/index.html","6d1076ab14508f1129a061f970464945"],["css/css-font-note.html","b6a12257af2b1656645b52ae053705c7"],["css/css-normal-flow.html","5b66fc232df3ede1477a6183a6becc56"],["css/css-sass-introduction.html","5a02cacd615000e0e9a35d2283df5b69"],["css/main.css","5225dcdf152818a9465b0e637f1fbde7"],["data-structure/B-tree-note-1.html","63b0989c0c15c07e7cf8454ab7c7b797"],["data-structure/Binary-tree-note.html","56161ce162b77acfd58603b5dc9dc828"],["design-pattern/chain-of-responsibility.html","5c47738d16773894dc2f43a21998d947"],["design-pattern/delegate-and-proxy.html","0b82445117a512de37db2ec677ecb793"],["drafts/configure-multiple-vue-project-with-nginx.html","a972ec39e0dcae9a708a30f9a8fd8a86"],["drafts/iframe.html","98b942d161e7ddb02ed979fa46b1ff4c"],["drafts/record-re-install-mac-os-10-12-6.html","d9ef88a3d2c86bc0fc90244dffb4dacf"],["es/restudy-es-note.html","771b5d255dacb11ea054ca1f355851c4"],["essay/note-ximurong-tree.html","da3cb483634ccaae816312a33eba9b09"],["git/git-DETACHED-HEAD.html","482b843d339f1539217340b6fcdde74a"],["git/git-branch.html","eda6da8f0a79fbee1c1d7340823a02aa"],["git/git-change-server-password.html","883ec919263368e4679bb2675fcdae8a"],["git/git-checkout-1.html","7ac46803b01848b725aa91f0b111f11d"],["git/git-checkout-2.html","4c1efaa1c1ea055d97f97d70bfc7bb8f"],["git/git-diff-m-symbol.html","536cc65ee49a4bcb9b91f671a91b6e8c"],["git/git-git-flow.html","2a6e106a432b47327e6beb795cb6a938"],["git/git-git-merge-ff-no-ff.html","217381c85eb06ff87810ae844b99cf1b"],["git/git-git-merge-true-merge.html","0fe6d36a4bd12de19987c8fd69e2460d"],["git/git-gitlab-flow.html","f2f7e40cead6df80389871ba1b80e1f2"],["git/git-index.html","12c9cd9207cd6c5d03f3fb41195829eb"],["git/git-merge-choose-one-side-code.html","8616f1772fcc414ee6bcca97ed731d83"],["git/git-merge-exist-conflict.html","1c310917e1e252ac23d5b6da08458987"],["git/git-merge-note.html","3e53ea50a5d86395a3bf6c9c777a66e6"],["git/git-pull-1.html","29678491e8663e728eabf0542f10dac7"],["git/git-reflog.html","373e554174b6191e91730b21b68eda24"],["git/git-remote-set-url.html","0c6e0f9bac3cbff5ede0cc5bdc3349af"],["git/git-reset.html","90e55f3f8dbfdf9980f2e7d2b1bf820f"],["git/git-rev-parse.html","5ba659c220a0aa5d044f98e6be1f2633"],["git/git-revert.html","a9f351c7e5cc68c3aa6967a7cb491c24"],["git/git-tag.html","bf3d3541ed3725629fc82eec32e72412"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","44ab9ce73f4ab6312e06d3985ba1caa2"],["ios/ios-oc-kvc-1.html","398d521e5afba15c495c1814080e58ea"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","a798bbdae2ff25efc086fb2e4e81807d"],["ios/ios-themes.html","c499e0228708797c05a84f53bbc3be2f"],["java/java-annotation-note.html","0b531b630328304e46def912e4979f4d"],["java/java-annotation-request-response.html","cfda191e9fa53b12f25693bd910ed13e"],["java/java-array-and-container-note.html","36b1217f0cdf3809c9cec4c988c88883"],["java/java-deploy-resource-folder.html","2151ca9c9339185bf02dd8e236cfda29"],["java/java-jps-note.html","5afdd13436c4cce54ac9049835190a4b"],["java/java-maven-nexus-note.html","20c151457a5a8c0d0034566bdc185a1e"],["java/java-pojo-bean-note.html","45b09d3db4c5425e6cf86d5906a793bc"],["java/java-shiro-note.html","f7253cdbec7b007fd497a981746c2d44"],["java/java-shiro-springmvc-integration.html","457cb50e50f658929063374f4b56efb2"],["java/java-spring-autowired.html","12327b6b25d10e154099d8019241891a"],["java/java-spring-configuration-bean.html","ccd0fd1158b031a8eaa0bb6d9e10f7be"],["java/java-spring-restcontroller-note.html","d55138be011a0a06c6d27293626d2760"],["java/java-springmvc-X-Frame-Options.html","e2a330f46f9445784a85e4dea1c2eafa"],["java/java-synchronized-note.html","fd2233bf02dd110dce1c0d7d08dbd330"],["java/java-value-pass.html","db4c73120cabf2e0d6ad3d57700bee15"],["java/java-vo-dto-pojo.html","6ae9ae39a66137af8d91b1965baa068d"],["java/url-rewrite.html","4634ad47c92a1f20a1f618023569a209"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","cab3ce76eeaccf260e9be8983d7c2a03"],["js/js-npm-symbol-caret.html","0536d662a39aeec485eb797b4b91d71e"],["js/js-npm-symbol-tilde.html","f0c84765f69379d55041d36a3d85a11e"],["js/js-this.html","ca9490fd1e901ed2808c7e71d98ef649"],["js/js-vue-note-components.html","90a72523f59d7c2543fa86bd1ff5d7a7"],["js/js-vue-note-computed.html","f6f20511436d26194ae3b9606a21079d"],["js/js-vue-note-css-style-binding.html","323b1a80ecdea5e75d0e84c3108724ed"],["js/js-vue-note-directive.html","86c3ab3dcec46d761e6c3d521d904aea"],["js/js-vue-note-instance.html","b0eafd696ec637e78ac8686f62779266"],["js/js-vue-note-introduction.html","b2ed97e1bfa06a9d8b89568ad93e4bfd"],["js/js-vue-note-syntax.html","5247c004caf6db0e6e8ed846e92f7043"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","cfa9808de668cf4b320bf002309814bf"],["linux/linux-top-buffer-cache.html","605bc353ad35d2a479fbdafbb036e578"],["linux/mac-find-port-occupy-process.html","157e5ce31445e4773a4c90f50c6667da"],["linux/make-vs-cmake.html","cb22fb536164760648f3a629bee04267"],["linux/shell-command-awk.html","80098d3544d05d5b72df14aca591cb82"],["linux/shell-command-df.html","b37ed31c6c164d81c2715a0656ef60a9"],["linux/shell-command-du.html","f473dea24a08c7c3cc8f4a4f09fdd847"],["linux/shell-command-netstat.html","a08c1f58279976df62cce037191b099e"],["linux/shell-command-sed.html","67522ad0378993c5f252cfb87bf429d7"],["linux/shell-command-tar.html","9b416443bfea67cc1e455e03c21569ac"],["linux/shell-command-top.html","55a909b56af9e9f0894263e09467411d"],["linux/shell-command-touch.html","60659da9cfb6510d7df1cd445a1063eb"],["linux/shell-command-which.html","d1779c7a4882ebaf2c51723042cad4a1"],["linux/shell-difference-semicolon-double ampersand.html","b1df8b9f71feff6175af3f8e1a44a583"],["linux/ubuntu-user-add-delete.html","d2463f3d328e12abc551df5828136a75"],["linux/vim-copy-note.html","b5bc22275f5dff59e80ff6c4109ceb17"],["mongodb/mongodb-collection-aggregation-introduction.html","86733cf0122a74642da2b7ffaa4ef55d"],["mongodb/mongodb-collection-aggregation-stage-operator.html","be9d61369281113a59b4785f5cc6d4d8"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","899652ea4909bf41488a13780ac01c05"],["mongodb/mongodb-collection-create.html","6f111d6873b33cbac03ab77ce7106663"],["mongodb/mongodb-collection-delete.html","62b2ddf14057e4704da526d50327662a"],["mongodb/mongodb-collection-find-1.html","8470e90d49f3a6ab1de5a62b77622e0c"],["mongodb/mongodb-collection-find-projection-operator.html","2fe30e17bfa3f6ae77674b561d73a8ab"],["mongodb/mongodb-collection-insert-1.html","4717bf8a75fa822de4ca9975ca0e6b40"],["mongodb/mongodb-database-create.html","28b7390198e12e7f6a7ad90f10803239"],["mongodb/mongodb-java-driver.html","69f219759c54ce1564e789731471a29f"],["mongodb/mongodb-schema-design-note.html","e99b194510f95f25bf7b1d883dad94ea"],["mongodb/mongodb-study-note-1.html","a7a44fb8c28100ea3d3ecf375a207673"],["mongodb/mongodb-study-note-2.html","9803b7d3d3f23d66da884520f65a6c46"],["mongodb/mongodb-study-note-3.html","6b71dc50913a35328386aa3691cdfacc"],["mysql/B-tree-note-1.html","cbbcf04e83a0ef6ecbe25f4239319531"],["mysql/clustered-index-mysql.html","a301c68686be2730771091db0880efc2"],["mysql/mysql-ddl-handy-book.html","5f7ac2c20bf12730049f0ac85bd4fab2"],["page/2/index.html","eb1aae3d5a547aebd2e7bd7702067fdc"],["page/3/index.html","3ac94b466592f8734995d88e8b87813f"],["page/4/index.html","c600af9b67dcb1927c8b701c10793deb"],["page/5/index.html","c77cf38a9d0e9eaa2a97bd8a35c8d7f9"],["page/6/index.html","33e12781cdedc3f39f80cf771203a7c4"],["photos/index.html","830eadf1683c1ff8e958fd2f96189554"],["python/python-args-kwargs.html","3ef110d5cdcfa6b07ee86ac85873f5c2"],["python/python-async-program.html","74096e619502831bdb3cdeec1d46041b"],["python/python-package-module-note.html","9b9dc353d2abf31fff7ddcef8644ca72"],["python/upgrade-python-under-ubuntu1604.html","4194086fa80a477e592dd958fc70e554"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","46ad52354798ee7d085eb8298ed43e00"],["slides/index.html","64f1b8d6355ca6565060e5535148791d"],["tags/Autowired/index.html","4c170f8424c78cd9b93cad7c35408d86"],["tags/B-树/index.html","b6d7f780a5354f613a90b1ebcad5285f"],["tags/Base48/index.html","391ac971218ab2b37711879856081beb"],["tags/Beans/index.html","9ce4947be7d533dd72bca3606df23b9e"],["tags/CSS/index.html","82b457c23104b5811dd173d0db8bc5e1"],["tags/DETACHED-HEAD/index.html","4bc11e5867158004d505b65fe513b5b7"],["tags/DTO/index.html","1b907283c7d095157ad2122ef5f5e13e"],["tags/ES/index.html","a2801e351898ab732f2fb68d7f133ffc"],["tags/English/index.html","b32b53612c676da73f50c309f6441adc"],["tags/Git-Flow/index.html","eb308fa8be5277bb1d3a060c740efff6"],["tags/Git/index.html","df61c7eea980e86ced0cfe5ee405fbed"],["tags/JS/index.html","a68686ffae46ad85d5c9bdd3390a8ab1"],["tags/Java/index.html","fb179f1a88faef56fc53be3ebc96ec59"],["tags/JavaScript/index.html","7a277c06ebf4d42f2b9ed89ba44bd049"],["tags/KVC/index.html","9db7a2ddae9f21dbdd69484e94123c87"],["tags/Kafka/index.html","ea3af2b37d9bed96106ff79f3f851b70"],["tags/M/index.html","482c919ab74cd60cb12f6bfbc44e6df1"],["tags/MongoDB/index.html","0b1b37ccdda84fffaa3535930db5f01e"],["tags/MySQL/index.html","e547b636dd0d1b2cf27c53543764f815"],["tags/NAT/index.html","79ef17a09b83db0b7c7ba225411f8ea5"],["tags/NPM/index.html","a61364625abe94e6ebc83b66902649cf"],["tags/OC/index.html","dfb9c0563631f9216012a3b527bfb9f6"],["tags/POJO/index.html","e74949346530d70b7166b830b80d2c5e"],["tags/Python/index.html","0db13d5ded450e103a2ce2cd5d9ef7d8"],["tags/ReactiveCocoa/index.html","916ebb1fce561354c3c1f7eaec83548a"],["tags/ReactiveObjC/index.html","0ae727d82084d8c612d9197031cea5e4"],["tags/Repository-not-found/index.html","5db60bd2e223344e2796ca3da4c7077e"],["tags/RequestBody/index.html","b6f6a328bea4795c58a1a63a7f81e4e5"],["tags/ResponseBody/index.html","d2e23c2a9f8040545a14b39eeef7a935"],["tags/RestControlle/index.html","84cfc846bf7f81a1fa31e16cbd5771f9"],["tags/SASS/index.html","14de3c97cea46f906f6f59e394e51a1a"],["tags/Shiro/index.html","0b782ae0fb32f52872e1ef7e2909cd01"],["tags/Spring/index.html","0cc47cb3889fb228badd8d9d19ca98b5"],["tags/SpringMVC/index.html","beadd249f7f69715090ec38ae7bc4fa4"],["tags/SprintMVC/index.html","94b7e67b9bf4c43c2580a15f7d6142b5"],["tags/Style/index.html","44252bdbfbccdf5527706cd152d8c70d"],["tags/Ubuntu16-04/index.html","218d3159e6becc803eec410c08289ba1"],["tags/VO/index.html","c6ed7f2f4ef3ce0561eb069d5bdd61c4"],["tags/Vue/index.html","73a411e0eba421b073d972d87f13ddd0"],["tags/Workflow/index.html","8d3f0c281bec24f5a5fa6b6fee901ec5"],["tags/X-Frame-Options/index.html","dea42b683d274c41e13ed3203c47dbd2"],["tags/aggregate/index.html","f2e17f62a6c9418a296c25ac58d5b04d"],["tags/alter/index.html","92141da9b9492e869d73399598ae2acf"],["tags/annotation/index.html","5820e9571021221e937abd59c65a9b0d"],["tags/args/index.html","2c3e26cd0e06fa01ff356985741a0eb9"],["tags/buffer/index.html","4e7ad1df26834c0b3cee6671ebd823f4"],["tags/cache/index.html","10fd5c602bfbf8d28ace95fe2868a4d0"],["tags/change/index.html","e04602932797f40c2c5f1e52a6021f57"],["tags/checkout/index.html","b5fe11529f5135197889616deb123b4a"],["tags/cmake/index.html","63326de1d1a2fa1b3172f35a7c9d3796"],["tags/collection/index.html","124cf937b2fc6f2f3b1d1310ecff6d81"],["tags/component/index.html","db176e0ab1a8aa3f87b19b24bcdeeabd"],["tags/computed/index.html","64b25af21ba9ce01adccc5d43ab97f34"],["tags/create/index.html","87e98dfe9c841d97eebb67c1f6f2f932"],["tags/database/index.html","30a6e01854bf99a817723377d1251508"],["tags/df/index.html","78c4cf0c6170308fa6cbf3c110d1cb2a"],["tags/diff/index.html","9c9e5c7b1bab2a95abc0783b41704463"],["tags/double-ampersand/index.html","f1d85582a245c8460f51372409b83594"],["tags/double-vertical-bar/index.html","a158bfa1b7eb1fbb6eafe24678e3f170"],["tags/driver/index.html","304d057d822d7a4a929978f7d1f84c2b"],["tags/du/index.html","cf66a60e7e11b257fd2ed20b6ee08cb0"],["tags/fast-forward/index.html","7094031641b0adcb7e899223047e6bb7"],["tags/ff/index.html","d70a05a7095a0e404faf0a5e3c82846b"],["tags/font-size/index.html","e72512ee92ac8c485a7e54b18533dc2c"],["tags/font/index.html","5aa3c60b3fe4e3aa2abf2645fb9267d6"],["tags/free/index.html","2c0ff1325d752e5c0d7033be314854c9"],["tags/git-branch/index.html","26033f288e72a2ac737d1c2536f6e1c5"],["tags/git-index/index.html","c4ca94e96392626c641eee17ed01d41f"],["tags/git-merge/index.html","9366bb0ea1dd7f5378e198d824b604e7"],["tags/git-pull/index.html","41121325e5e5c0b081824a732d418d54"],["tags/git-reflog/index.html","18fd2eadf1b2b3883b098af46f237817"],["tags/git-reset/index.html","1b4f9b494aebcc41d4d98ff882e373cc"],["tags/git-rev-parse/index.html","84191857203c632bc716be757061d4fc"],["tags/git-revert/index.html","80bae2ed929d3acc953c987933078e7a"],["tags/git-tag/index.html","503e004fd38201cbe8f7bd5775f16b11"],["tags/i-e/index.html","0fbac84eb5ca2bd8149aa39cb92967dd"],["tags/iOS/index.html","7eda6c64d88c1420f8b4e03bc1ed14ad"],["tags/index.html","33d50e78c54914f178e5d73f3dc47d34"],["tags/inode/index.html","43a06bf726959cd1a8fbabc2714ac52d"],["tags/jps/index.html","41e383f546871846233bca55330f3291"],["tags/kwargs/index.html","f99fd7cdd79f67bf39c4faca784b1e33"],["tags/linux/index.html","5bdeca8a59f1da46e15948504e03d7a2"],["tags/mac/index.html","1cd370d652da253f56eed040671913f7"],["tags/make/index.html","d3d1423d9ec1a377aa526a7f4df21796"],["tags/maven/index.html","9a59b4c858580a9aaa41a19b7e381966"],["tags/modify/index.html","85274bb0944f4473a55d610266cc803e"],["tags/module/index.html","983991fe8c445a158465f43ca65a7227"],["tags/nexus/index.html","e54358d7f69f7d12fd1a44c0d7d78a89"],["tags/no-ff/index.html","6480596868955947c43f3bf9f75951e7"],["tags/package/index.html","e9371032056b961a1ef7af25ac497dbd"],["tags/rewrite/index.html","103f6a64afb91341baf77a1fdb09d738"],["tags/rm/index.html","e992499b5a791dacd1ce3e6160d4d355"],["tags/schema/index.html","2877e6e619fcfafca41a2ef056203c3d"],["tags/semicolon/index.html","d2085e86fe4b803a0c15e55d00f59363"],["tags/shell/index.html","97846e6c26411965e81d0990f727f4a0"],["tags/synchronized/index.html","80ad0bd6e68b34861cf23ea820fc69e1"],["tags/this/index.html","78f5f4ee8b775a0dfc3fb7dda419bf56"],["tags/tomcat/index.html","b5d71d91624213212164096090a6f839"],["tags/top/index.html","447d9d9ff621c67cf44324a55b116e34"],["tags/true-merge/index.html","9f79fc2d5778238b0a1a0f51db571277"],["tags/url/index.html","2552581dd617fb27d874ee71440b41cc"],["tags/vim/index.html","8cb5021a9d013efa7b0b27521a4f8cf6"],["tags/windows/index.html","61a7aa099012ef9a89c474565a7596a9"],["tags/一棵开花的树/index.html","9fb6a884fba39cf144efd70e0563be20"],["tags/主题/index.html","5c98419c7e963eb5fc614a0a8b957188"],["tags/二叉树/index.html","83ebb3b41c3638de82b4f5bde5ea004b"],["tags/介绍/index.html","50333f51e172f3db8dfe2bfdc22a4248"],["tags/代理/index.html","2fc891180457951ec5f9fcf64dc72bcd"],["tags/以太坊/index.html","5705a038c5731979177075a3efc85ca6"],["tags/依赖包/index.html","5a0d9f1d642508159dab9f3a9e30ded9"],["tags/修改/index.html","4cd81b02541896e9a669e3a57aaf81e1"],["tags/值传递/index.html","5d47e26312c1f6457c47902111a72a42"],["tags/冲突/index.html","02b8e4086e5f5b60052a6d4ae4ef32ed"],["tags/分支/index.html","21f875ab4046788e95fbd07d70ea06b3"],["tags/创建/index.html","2f88e2e57964ad1643ba66ddf99333d3"],["tags/创建数据库/index.html","1d0754cefcd3112b974569e82fc8857c"],["tags/区块链/index.html","ab1bdd103ecdbc40c47609b7fd241172"],["tags/升级/index.html","2c1aa6fb0b84075cb1f2e2c06d208354"],["tags/参数/index.html","bf277d5eaf1c022a0768d770123cd432"],["tags/委托/index.html","0e9565be96f7770dc523e6ab0e50fd65"],["tags/存储/index.html","0bfd5442a56e7bd6bc6f758d87813974"],["tags/存在/index.html","b46c422f213e55283bab579fabbcd1d7"],["tags/学习笔记/index.html","04298ae6f201518c6de73961c91794a3"],["tags/实例/index.html","c0f8a2c3cd83bc76c00a6c32c71549c9"],["tags/容器/index.html","1f672aee0c48084a9b546aa40400cef9"],["tags/工作流/index.html","39c2a6cab480094d99a1b7ec9633d707"],["tags/工具/index.html","5b66fa8ac99260487c6abec24daa35d3"],["tags/席慕蓉/index.html","48f1e3570a3eaa1ff79a7027a538c147"],["tags/异步编程/index.html","b6ce72050445d7941163902e42f656af"],["tags/微信/index.html","41cfd4da4b8d6332c391f84e98d8e96c"],["tags/插入/index.html","2e7a4b6360ae5c7c93c7ec258e586113"],["tags/数据存储/index.html","e56f4bbdff44f5598ec58be017a2cf93"],["tags/数据库/index.html","9633cbaa9ff467703bf8f443f7ea13ab"],["tags/数据集合/index.html","e2297b4af93dbcf34340c00419d34a11"],["tags/数组/index.html","f8ad6ddfe5a667c499cf723a496d56c9"],["tags/文档/index.html","7d846ca3ac092bfb7f71651991eea14e"],["tags/文档流/index.html","8f77e55bf7cf68606bd0d49a278023af"],["tags/智能合约/index.html","86fc0d6ecf9c7e8a0f89889b45461e56"],["tags/标签/index.html","6393af44b32d7fc867203dbaaef0dd47"],["tags/模板语法/index.html","01d8c3c707418d228f0d44f32c07b108"],["tags/比特币/index.html","b07535592ba3f567b39750251207ed7b"],["tags/波浪字符/index.html","c695a8010900c7dabd72d12ae81d67c5"],["tags/注解/index.html","c314bd4b6bda6402e3d7fe3e65d299c8"],["tags/用法/index.html","9b660a037e6cdfde544c743debf1ec07"],["tags/穿透/index.html","bc46e2716c3d51ccabbb26229b9b5c34"],["tags/端口占用/index.html","16b4312a70a82cdcd6db69d6be1f5925"],["tags/笔记/index.html","a87830a6c608aa84e92bad63c0738135"],["tags/符号/index.html","72dcb1daa5d7b1800863cd4368422f6b"],["tags/红黑树/index.html","82c2f9144cf74180414a4b0e7d1139e7"],["tags/组件基础/index.html","c0e35f281c788d19c06b9d2c4781c313"],["tags/绑定/index.html","e5abb4139f6ce0b67258a3405630cdf6"],["tags/编程/index.html","c9ffb1f669f425b57205a1cf74bc160a"],["tags/职责链模式/index.html","7269c4b4704d6371d5128a69bb0e6f54"],["tags/聚合/index.html","17e04996a516ba2f5b998fdf04910d82"],["tags/聚集索引/index.html","22d9d68e887a56b7ba39079626a51f72"],["tags/自定义指令/index.html","24501b06a26d277e4b5fc9d90a396bc7"],["tags/计算属性/index.html","adc3e41fd17e8185e926a136f7323207"],["tags/设计模式/index.html","5eaed418826e3f5c2a53b45a5740b126"],["tags/进程/index.html","8d72491693553862504313de6f32f7f9"],["tags/远程仓库地址/index.html","c34ac6be52c45fc76db98b70b4680885"],["tags/逻辑操作符/index.html","7bbe43b917d780e21783a71d39ac47ff"],["tags/部署/index.html","f68be9e5a0025a41a23352f07e1e0760"],["tags/难度/index.html","2c02c14ceb7b9018982fbb8a773645ef"],["tags/集合/index.html","0955640bc0c133ffb31933e77dcb24c5"],["thinking_in_programmer_life/full-stack-programmer.html","6962353a516cbd4f26646e964ef892d1"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","bbb051f1f71f12ffac6855f38ddb3f00"]];
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







