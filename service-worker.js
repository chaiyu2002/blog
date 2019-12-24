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

var precacheConfig = [["English/ie-note.html","bd0e3953c775cbb82aa08278495ec1d8"],["Kafka/kafka-introduction-note.html","f3885b2f3b4b3b687256acc42dbb9acf"],["Kafka/kafka-storage-principle.html","32944fd7d979aab20a008552dafd778f"],["about/index.html","646736bd382bbc58e29867e620b7dbd4"],["archives/2018/06/index.html","0e96985306fbb39baec1f3951f4ee19c"],["archives/2018/07/index.html","36a651eacd4903bfd39eb7c40b880759"],["archives/2018/08/index.html","97791e0c6232060001c2dadf57a3b1e8"],["archives/2018/09/index.html","1daabcb640080e0658e127372d9879d1"],["archives/2018/10/index.html","5cf4eba0552a6b77fbb6854b124ea092"],["archives/2018/11/index.html","018617f4313b59cf15b81e082c840e6e"],["archives/2018/12/index.html","f314f045a5b5c54d03f01fd3fa04414e"],["archives/2018/index.html","ab00fbcbd4667f7d101eff42506f1a78"],["archives/2018/page/2/index.html","d1be25c4e86b0022b9d036ce277a5ddb"],["archives/2019/01/index.html","15375434781086d1436bfa74516c3f3a"],["archives/2019/02/index.html","46b21428aebd099b0297a1a52b279d65"],["archives/2019/04/index.html","37fb69ac35193413d80d534dac82f48b"],["archives/2019/05/index.html","5f3291eac650702bad6cd2d87f9e2df6"],["archives/2019/06/index.html","f4f808f1afcc41cb175397a7332d48e0"],["archives/2019/07/index.html","c576de6e396c629256d6368bef3bb75c"],["archives/2019/08/index.html","836c4ede7217fa89279c433803b74cb1"],["archives/2019/09/index.html","1a4d3aa707a44092909f54623e682a95"],["archives/2019/10/index.html","90a881d3f38f7a716f817d813ec8bb20"],["archives/2019/11/index.html","658a9eb9d562414b6f7bcea07de94198"],["archives/2019/12/index.html","e05ed50ba08dfa927f5c97400597571c"],["archives/2019/index.html","a5102f05709fb3ca67d0c1feee3e4862"],["archives/index.html","3943ed44bf9294b8a7de90fc72042647"],["archives/page/2/index.html","730a7ecb8dd7835ad83725e893868eab"],["archives/page/3/index.html","587058909bb69ef0941359cc9f840b00"],["atom/index.html","e6c925508f0bbf703546a748677e06ef"],["blockchain/base64-base58.html","8c7adc02550dadc55ac7eea11eca3a88"],["blockchain/bitcoin-data-storage.html","53efede7a6788472c989636c3fa7ea04"],["blockchain/bitcoin-difficulty.html","197e373d0ff475ddb62714bd4bc63801"],["blockchain/block-chain-ethereum-contract-program.html","d0d499e5f05c8723bfd81974ad81aa9d"],["blockchain/ethereum-programming-introduction.html","7461eceec72728736f023496cd20f422"],["blockchain/ethereum-rationale-introduction.html","5435d81df6184c062c731eb12d2afbac"],["books/index.html","47cb22c008a53b7e4f88a4d6a3d7db17"],["categories/Blockchain/index.html","46590b348961c009af1cdb05ebdd6b99"],["categories/Blockchain/以太坊/index.html","ed7c7e71caeef095d6547fe3a31649cc"],["categories/Blockchain/以太坊/智能合约/index.html","5155ee19d597d0e22ec628f62da251c9"],["categories/CSS/index.html","88a5f8488502ed4169df5c97343cd978"],["categories/Design-Pattern/index.html","f1c16740dc6ea9e2639f08a984421b7c"],["categories/ES/index.html","fe57590ea71ec212dfe1672797ae3180"],["categories/English/index.html","1f31938e3f8142eb8dc3fe7c40135358"],["categories/Git/index.html","32b0845639e629df89f237931bad83f8"],["categories/Java/index.html","fa222659b9640295c7eb8c176cc5af88"],["categories/JavaScript/NPM/index.html","a809f3c5a8f2a8124712f2d1567b1c41"],["categories/JavaScript/Vue/index.html","09447bc34f85e00a01aeead5023a3f37"],["categories/JavaScript/index.html","d50f583359d542f9a229496711f23200"],["categories/Kafka/index.html","adad8117421e7c409a519852ce82844a"],["categories/Linux/Shell/index.html","0e46faf9991e4a8107311ffb8ae4adaf"],["categories/Linux/Ubuntu/index.html","f31b604719e0d3611c5cc44521828c58"],["categories/Linux/index.html","f9bfa515282ca2ca26af7b4724e35f18"],["categories/MongoDB/index.html","b0810682780394d4f1b75a2b0952b6f0"],["categories/MySQL/index.html","86eb8c137c8bf4c8c8238856e21611f8"],["categories/Python/index.html","09c08a0c4eeb9d94bad1e72801b8d8cd"],["categories/iOS/index.html","511b06adab61ff8cb878fe8d0497c74d"],["categories/index.html","e69c64ffbe9fb028f46a3f023dc90332"],["categories/微信/index.html","af3432f6a96f086f255a31cc4df48220"],["categories/数据结构/index.html","9af75ae43a219c9f2ff20261eb123011"],["categories/杂记/index.html","36d3de9653bfe28430f5012dc2e050fe"],["categories/程序人生/index.html","7dd8debd1c11ad72ec32e7ee6931746d"],["categories/计划/index.html","049842ef6a6052546407920416f1c1f2"],["css/css-font-note.html","f7bf5abf5f9cd093a26ac91c43696d9b"],["css/css-normal-flow.html","aaf89b8cc41ea1a99eaac0b0358ba245"],["css/css-sass-introduction.html","4d2a300bd88f82a090262e5268e2bfb3"],["css/main.css","7530bc62bb714bfc22685339b8766167"],["data-structure/B-tree-note-1.html","c1f34b0bdde381fcc967e2a499325e1d"],["data-structure/Binary-tree-note.html","0d0b3949552eac0aa682a455a30314d9"],["design-pattern/chain-of-responsibility.html","164d42aa77f52158b07567e6785fe592"],["design-pattern/delegate-and-proxy.html","f394afa5311226bc348e03b268b43bcc"],["drafts/configure-multiple-vue-project-with-nginx.html","0d0a9eac4970f0919278a362e77c7c4f"],["drafts/iframe.html","ef1440f6af4b2593c1e363ae168920ee"],["drafts/record-re-install-mac-os-10-12-6.html","d7281d0ff33d590062128586bb6a839f"],["es/restudy-es-note.html","78632c2a691f2b13ac2fb141d3f495fd"],["essay/note-ximurong-tree.html","e78e969d99d7c10bbba73d545c50a75f"],["git/git-DETACHED-HEAD.html","4f96371c358a87c5799cc9b9ec8cc8e7"],["git/git-branch.html","d02d9cbe677b232e01ced5cdc1e43211"],["git/git-change-server-password.html","1dc9adba93a1efe9148cadd80308dcec"],["git/git-checkout-1.html","5f40a55b9133ea1726f1fd80230e36dc"],["git/git-checkout-2.html","be3140b6282e119c0c0f58f9179ec061"],["git/git-diff-m-symbol.html","b04173eb1430b121e73e869096884702"],["git/git-git-flow.html","c58cec3864d5659d2d45a8e82f1e65c8"],["git/git-git-merge-ff-no-ff.html","efea2b62e3d5f604c342790412449c76"],["git/git-git-merge-true-merge.html","76a97b62783c0dd9b923c921db240850"],["git/git-gitlab-flow.html","69ad46279ce6f185d31e93c60c1b15e3"],["git/git-index.html","9d41b7e5464638c6c9daa542ebf1c81c"],["git/git-merge-choose-one-side-code.html","7e3295caeddf7f73525079054af054c1"],["git/git-merge-exist-conflict.html","c770bc7de03da3f8afe4100e2619cb30"],["git/git-merge-note.html","c5ff67fc7ab8d5338c80e2e95f29d069"],["git/git-pull-1.html","f460c9839749d5c78b583765662e6a68"],["git/git-reflog.html","72a4f184b6ee41421fb7db6bb0dd0948"],["git/git-remote-set-url.html","d243bee734e5ea8eff80cbacb686bf4b"],["git/git-reset.html","2f51a7dc2cd97cf88a1115d7b6e4c77b"],["git/git-rev-parse.html","64f0bf8c90ba00d1b1690f6ba5def525"],["git/git-revert.html","c68ff07b4659480617a48c452a962cb9"],["git/git-tag.html","bf5632c7490ee435abb2b954590a125e"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","4af30765263fd7be6300e08cf5dc6998"],["ios/ios-oc-kvc-1.html","32ce702902fc789481dd9575d827cce0"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","8694b2a4812ce04c3ff96ee335574949"],["ios/ios-themes.html","31047120ef1692e40d9a7ac319a2eb3b"],["java/java-annotation-note.html","578c0f554a2e34d1d7b30932bf02c42f"],["java/java-annotation-request-response.html","e05d92f3b4b265b473a6636adb8932e5"],["java/java-array-and-container-note.html","1bc3a8dfe501eb4da91b5d7c2a013ae3"],["java/java-deploy-resource-folder.html","99227229e3cae4c8d6590592e8fdcceb"],["java/java-jps-note.html","42ec8e5676d3120b7e42c5c999ffae66"],["java/java-maven-nexus-note.html","be2d0671a54efeb41fa214e95ac18702"],["java/java-maven-pom-note.html","6130d6d6cb880d8c0cb3d9d9905a3c23"],["java/java-pojo-bean-note.html","1d9bcf207cdb52752a5fae85199f8be5"],["java/java-shiro-note.html","0487dc32b6320ff53a610091b3b269b6"],["java/java-shiro-springmvc-integration.html","54bfa0e6be0e003be09d80055cb1063d"],["java/java-spring-autowired.html","64099486b314d3b71cf9da81ce61e5a8"],["java/java-spring-configuration-bean.html","3a2ca3f11a8731f0d1217b8ba0879b20"],["java/java-spring-restcontroller-note.html","97249f565126c220b492b98d398dd330"],["java/java-springmvc-X-Frame-Options.html","393e89434c10d6595cffcddd1d94b1be"],["java/java-synchronized-note.html","41c55cabddf3248a6090ab657ea42559"],["java/java-value-pass.html","3f51ce65ca7726568f44ac92edb244bd"],["java/java-vo-dto-pojo.html","29cce7ebea1d490c92b1e534b72d1993"],["java/url-rewrite.html","ea3d05fb37118faa26ea8b2f5fffac04"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","791a379e912c4a859b55728d239ebd71"],["js/js-npm-symbol-caret.html","7372baec5d3706a140b221f44aacb302"],["js/js-npm-symbol-tilde.html","4a5113c7494487dd8bb1f5251ca2222d"],["js/js-this.html","f67fc26b1b56370defa25514c24e7dca"],["js/js-vue-note-components.html","7887135eaccb5760d3eb4e5ef3d78237"],["js/js-vue-note-computed.html","8dd994f257e99d4a878fe3cf8d6ef386"],["js/js-vue-note-css-style-binding.html","2c98e409a7d28089ad766f2e1d519c5f"],["js/js-vue-note-directive.html","4fbd7c5098e4929dcae4cad926f3c333"],["js/js-vue-note-instance.html","be67c1baf142f5c9315103bcae6f18f0"],["js/js-vue-note-introduction.html","69f0edc4df58bf3163c4618d34495880"],["js/js-vue-note-syntax.html","23196b29a9d9eca2dfa4cb44b058275b"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","3ac373590db2a849711becc99b302052"],["linux/linux-top-buffer-cache.html","fc68cea959bde50fbb408b6f13759762"],["linux/mac-find-port-occupy-process.html","e4aaa84b244608b8b78fa58805b408b6"],["linux/make-vs-cmake.html","bade25a5ef7a22fbafa14cb0948125ec"],["linux/shell-command-awk.html","ec40acbe27a49293c5068c08deffa2c1"],["linux/shell-command-df.html","990ff695906ce22fe8e6bf3e5e81b6a6"],["linux/shell-command-du.html","3496c68825624da389b8ee686073368e"],["linux/shell-command-netstat.html","b9c9845caaa1c6e8506399fed185eb99"],["linux/shell-command-sed.html","83f544374527e7041670c4e38549dde0"],["linux/shell-command-tar.html","5db3a67829bc99344ad7ca19a4744750"],["linux/shell-command-top.html","2858a3851b181a9bd14534175c9aca6f"],["linux/shell-command-touch.html","dc3b0cca8d758f9ca7138095e335133a"],["linux/shell-command-which.html","14961bdd39a09131cff079f762fe28a4"],["linux/shell-difference-semicolon-double ampersand.html","22d8a55440c72aeb3e0d61cb335868de"],["linux/ubuntu-user-add-delete.html","6becf48a0c91c8879fcf7e458df098ea"],["linux/vim-copy-note.html","be383489935052ad90f620d6918efe1d"],["mongodb/mongodb-collection-aggregation-introduction.html","665e183966dcad20985b28ac9024ceef"],["mongodb/mongodb-collection-aggregation-stage-operator.html","95759986376fc5f82443bd4918b595bd"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","c843127c6b23a3cf1474a3021eb19322"],["mongodb/mongodb-collection-create.html","8103a727e7891aeca130d5b93a6cc40b"],["mongodb/mongodb-collection-delete.html","dc94669be84c6a9065afddbc1af7dd12"],["mongodb/mongodb-collection-find-1.html","3e19bca0e33f9a5314e59f8484e4e337"],["mongodb/mongodb-collection-find-projection-operator.html","927033bf31e2e45e9b94b1493be52ab5"],["mongodb/mongodb-collection-insert-1.html","705879d0936411b915898374c8df1520"],["mongodb/mongodb-database-create.html","d8628bacfddcfdb405b19d5d51f78213"],["mongodb/mongodb-java-driver.html","d0205face4a89d8eabac24f56b5c99cc"],["mongodb/mongodb-schema-design-note.html","4f986813ef4779b6cb4ff06fd8089255"],["mongodb/mongodb-study-note-1.html","cfc12d604aca69f417d040b43c29c73f"],["mongodb/mongodb-study-note-2.html","eb2ac45a0ed8eb12cc2fd90a299c57c1"],["mongodb/mongodb-study-note-3.html","0606061db73768b378d59031d14149df"],["mysql/B-tree-note-1.html","652793b3dc0c58f34a4a913df31521cf"],["mysql/clustered-index-mysql.html","f84348b69269273c8609150d680f90f9"],["mysql/mysql-ddl-handy-book.html","3bd271937123e98d6a105c00d17e4720"],["page/2/index.html","2a8e837579f1ce660ab783e25478ec27"],["page/3/index.html","94c4807cb424def3236b5d7d085bbab1"],["page/4/index.html","1e01ba006e704ad1a2b4bcf58b060cbf"],["page/5/index.html","9ce197b874a41b91bf5a19af1beaa26a"],["page/6/index.html","4cea4832861204f1e0a7f9350032b47f"],["photos/index.html","b05709708bcc0ce51a0f2856e7fb599e"],["python/python-args-kwargs.html","20c5a2961a7fefa283a6a04e4830ae3b"],["python/python-async-program.html","6131851355544454c62a2e3f56cbc76f"],["python/python-package-module-note.html","e33ff41f6415a8ebfa96940d5ba62914"],["python/upgrade-python-under-ubuntu1604.html","a94259e7e061d89706da566ab72cbc9a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","5679ce496a3913c75f27e6a877a3622b"],["slides/index.html","d99be9ebb659177adfbd8d0e82918f37"],["tags/Autowired/index.html","f6bb405101ee001d56a93b6296a805ff"],["tags/B-树/index.html","3e67dcf141af0f99c2341de6ab3e8eda"],["tags/Base48/index.html","709ed971f114de2d8458f0350e04cbd1"],["tags/Beans/index.html","027c4292d7619d010873e45de44d05e9"],["tags/CSS/index.html","f0c7353578ce9fa71b3c308f590fa2c1"],["tags/DETACHED-HEAD/index.html","04f7fd6ca60df3981b9aaee30a67dd9f"],["tags/DTO/index.html","7ce17c34a1d8e0656db4acb367d1e4bd"],["tags/ES/index.html","218c22b6e34199beb2f23fa12f7cd40a"],["tags/English/index.html","1d19490452368168fcbff15090f611c4"],["tags/Git-Flow/index.html","17df7d06a56d9a370723cda4cb942fed"],["tags/Git/index.html","781b2402b8d316af453ec2689e28ac21"],["tags/JS/index.html","dd9f02bb7abb58ddbe204b89d5c730f5"],["tags/Java/index.html","8be8a63deb036503822970f2f58e50aa"],["tags/JavaScript/index.html","0b5569c9ed0a524d37b7fd1301eb941f"],["tags/KVC/index.html","e9df24a6ccfe30e495fe31769bc26671"],["tags/Kafka/index.html","54c842238c4fda6562218792f5d1c262"],["tags/M/index.html","2141802d3b3029597ff70ca53264a252"],["tags/MongoDB/index.html","bf50d9896459a48ed98c434c9db383ca"],["tags/MySQL/index.html","833839dbd1b957ad0264d20875680e34"],["tags/NAT/index.html","80b6bd034513db5e4fb0bd477ce22c79"],["tags/NPM/index.html","43de96763061b38e740ffc919f348ec8"],["tags/OC/index.html","3168ee1e16a0eadecd120d5b73bd3e28"],["tags/POJO/index.html","1d08332c6e8a87d1f73372aa74c3aa73"],["tags/Python/index.html","e6ef5f676170bd5116ed8849f816731a"],["tags/ReactiveCocoa/index.html","cac9366c34c864b5a56806ee4b803474"],["tags/ReactiveObjC/index.html","953cb4970b036a259b78f1038e982b0a"],["tags/Repository-not-found/index.html","a776817cea87d389019976138088abe4"],["tags/RequestBody/index.html","f42ab45290f292bdb4647adb4a6a92ca"],["tags/ResponseBody/index.html","981f89f664f45a57a413b81a221c13d2"],["tags/RestControlle/index.html","852116cdd84b59e9c8aedcdcb5cbad41"],["tags/SASS/index.html","1d6bb859a96d8aaae93cf7766ace5637"],["tags/Shiro/index.html","a775a551660f6b945f2ca9ac037e0473"],["tags/Spring/index.html","6dd4d2a85cfea0ff4293264bb76fe43f"],["tags/SpringMVC/index.html","4c52ced7f92effd304e10a9b00b019c2"],["tags/SprintMVC/index.html","43e7bfc553396357a305e3123a4e1089"],["tags/Style/index.html","02346c2ccb43fa9b0707de40c83a560b"],["tags/Ubuntu16-04/index.html","50cc4c3c7ed73b6b8cfe9a4c94828685"],["tags/VO/index.html","c08941007cf39f2bb7cfa1cd45561477"],["tags/Vue/index.html","2e79601f3561bbdb2b342f61da74ce1b"],["tags/Workflow/index.html","5046de278fa21b772455345155e56bee"],["tags/X-Frame-Options/index.html","f53cb0b7333129dff3236cf21016bdbf"],["tags/aggregate/index.html","dff8e968c54e9a2c7dfb62993715ee8b"],["tags/alter/index.html","d505d1f4e5c6bbd1e5d4ebe10a1d8b36"],["tags/annotation/index.html","3b8dd8b9d8292f6113a9649d15502b94"],["tags/args/index.html","92d800f064177fcd75a0653a6a599c11"],["tags/buffer/index.html","24b5b0bd44dae990171b0d212e34806e"],["tags/cache/index.html","cc1f58d2526983022c3d702f027eed86"],["tags/change/index.html","5e24e07cde30369a9a9a0fd058aaca74"],["tags/checkout/index.html","e77355886136c80b35e23a688bfe2d90"],["tags/cmake/index.html","ce82f296bdd69806707caa3a50928fcf"],["tags/collection/index.html","69b581648546b7cdab33a3e70a217590"],["tags/component/index.html","172a5d85a763b487cb1d7f319946a551"],["tags/computed/index.html","53a73b9a906cd3c68a926c643855d27d"],["tags/create/index.html","326df6fa3cf3f1f4cc352d13a438d4ab"],["tags/database/index.html","340728da60ac44e04f21a455aab3b095"],["tags/df/index.html","75f2486d628d5cb3666646b0ff5a7ddb"],["tags/diff/index.html","23d899bbd4db47e989f78a963ab773fc"],["tags/double-ampersand/index.html","013574c05e4f15666cbfe5b714c6d81e"],["tags/double-vertical-bar/index.html","fb519dea860565c93ca55d9c3d777b97"],["tags/driver/index.html","604d73cae03b4b0ce6e8a44ee3153473"],["tags/du/index.html","54e127beb3d3e121ce4348f82a82e0e4"],["tags/fast-forward/index.html","29815e761c1c7e423ebbf7a9a31245f5"],["tags/ff/index.html","b895e6f2b62f085b11b1ea5e8c734601"],["tags/font-size/index.html","0c4c52b307bfa15fa3aab07753dbebca"],["tags/font/index.html","5c9418a39706997085e1a153ce44c8f4"],["tags/free/index.html","f96211fa141b13b4b280bea39c9fd320"],["tags/git-branch/index.html","4666bb857250c9c434be667592f02f57"],["tags/git-index/index.html","5b5fea4f051aa4f4ba39595064d9519a"],["tags/git-merge/index.html","ec513b4f14fd19345873b7d0d547d39f"],["tags/git-pull/index.html","b93c5ae3451c006b09a1547d490ae907"],["tags/git-reflog/index.html","62e8024a878c6706f35660471180e6b0"],["tags/git-reset/index.html","18449082349937fa4947614ef0e0ee88"],["tags/git-rev-parse/index.html","1f936e41507cd0e62ff623ff4f44572f"],["tags/git-revert/index.html","817d454c4f8f92a433f9994c12303429"],["tags/git-tag/index.html","5b471fbfd49d2caab02f202fd3b13d8b"],["tags/i-e/index.html","37da89f4929febd870b8d6ff7d4ed0d6"],["tags/iOS/index.html","ed41c36ffdb180dbd617aa99d8636355"],["tags/index.html","70f521a091c23594ae40ed67ffededcf"],["tags/inode/index.html","a4b332f68568f594b77afdca626ca04e"],["tags/jps/index.html","0974c1eae5fd7bdf3f98ea12a774d080"],["tags/kwargs/index.html","15caab5c8279d4d44830354144c68d2a"],["tags/linux/index.html","427719aec0bc4e31225aeb4d18f57d93"],["tags/mac/index.html","fca903127ced291663610efcdeecee6f"],["tags/make/index.html","a7676225db447e5a8f916129cf41efe8"],["tags/maven/index.html","5a73223862e968f5104e689a558ab309"],["tags/modify/index.html","57490b8c4c99d5cd47073efe078ec7e4"],["tags/module/index.html","70af6bffe0849439f8ecbd0146872268"],["tags/nexus/index.html","3db8f90a8bb436c65851afe02803ec0a"],["tags/no-ff/index.html","86402ab3c6b496ea2c1e351ed0073db6"],["tags/package/index.html","9395f87c62b403e6e1885572cdbac4f5"],["tags/pom/index.html","4692b886f9eba6add2be1e77dbb31363"],["tags/rewrite/index.html","3c07efd1e25c79aaca18b6d74a1bd8c1"],["tags/rm/index.html","da8ce855cd272f8834b10ef81e064967"],["tags/schema/index.html","142c608ef8cdea3ae8aa49739a1e806d"],["tags/semicolon/index.html","243b0d4066f041fea6a0c8ecbee365c5"],["tags/shell/index.html","5e83d0afd3ab7b0b6216f926293c2c8c"],["tags/synchronized/index.html","642cea053c416cc9d5bf83a2e26c9f11"],["tags/this/index.html","6fa5e9c2c92f074270956bd96a1a7501"],["tags/tomcat/index.html","2da012f5be96fa5fd6ea47948eceaae1"],["tags/top/index.html","4504a2bcce9f7cad994296f1cb73b5ef"],["tags/true-merge/index.html","3bf37f9670753dbb1144e63ad711cc95"],["tags/url/index.html","2a4cf1966af24fb62615a16e776e7c6a"],["tags/vim/index.html","fa3dca6d31867f5e8ba202a3fb95fcb3"],["tags/windows/index.html","27115ad18eafc22e72ae09790f2441cd"],["tags/一棵开花的树/index.html","825a59f74312b98eed847b063c921d79"],["tags/主题/index.html","bbdabb17150846e01746f4f2144df77b"],["tags/二叉树/index.html","612a7baddc088ee563897773c76c2177"],["tags/介绍/index.html","96023cbc10794831c9d8e41e7bf2d45d"],["tags/代理/index.html","cecac101de29aad53672950a2c601663"],["tags/以太坊/index.html","101dd8f3a6b53ed1729bceacd1a992f2"],["tags/依赖包/index.html","73af46c77bcfd0e656f3a73eab241f4b"],["tags/修改/index.html","5b1e020a2f065024296d6d2811a911f9"],["tags/值传递/index.html","9b6bac039f785891f760d9612d9c11de"],["tags/冲突/index.html","63e1880b914638cd33a370de1f0725f5"],["tags/分支/index.html","a0628c0af611c45a6f5922554af32ae7"],["tags/创建/index.html","0713bf7ec209b717986af755189462ea"],["tags/创建数据库/index.html","fb8c04aeb0b3907b96e5c7d68fd2a504"],["tags/区块链/index.html","1b701306d9afe07af8399d702a9c5ff1"],["tags/升级/index.html","99be3be2de4540434fe05aa5643a2112"],["tags/参数/index.html","a8f20dd549d831d70f13062399631af5"],["tags/委托/index.html","4dfa86f679bcdd56cfba17a6f270fe67"],["tags/存储/index.html","bad37a0f073b1301b11f15de1bda6d34"],["tags/存在/index.html","fc4b76c56f65eb3e090b5da64a644a12"],["tags/学习笔记/index.html","4517372aae64a8706638912d4b6daffd"],["tags/实例/index.html","0e546ea4a919234ad13609d614847d4c"],["tags/容器/index.html","808b0a857069ef19a7d50094fc6835e9"],["tags/工作流/index.html","746bcbd558ae24b765a6bbecfa5ad38f"],["tags/工具/index.html","312b7973a13afb54d0bb95d318f262b6"],["tags/席慕蓉/index.html","c0efeeeba7bfbfc933576dbb42cee2f9"],["tags/异步编程/index.html","2be8bcc9d339d83cd6ad2dfb2efc98ec"],["tags/微信/index.html","1e930d406d0f8746da4791fdae620d1c"],["tags/插入/index.html","298b0753084697675d250d2018c19d09"],["tags/数据存储/index.html","13c88e7f0cf3e02cf5485adfc738b181"],["tags/数据库/index.html","873a46506e88e4fadc140fc8f9e0b564"],["tags/数据集合/index.html","9a47adc61d0719d0e7d22a1dafb1c8ee"],["tags/数组/index.html","4425e0ed8b1451a2c902e63b04215fa0"],["tags/文档/index.html","96c03b48ca36a4f931eae74157f76670"],["tags/文档流/index.html","9195a22b8a5730bd2da24109b2b51b7e"],["tags/智能合约/index.html","d59c5094bfb5cdb31481abdc9ab4971e"],["tags/标签/index.html","707f4f507e2f4ab733186d1266ea5d44"],["tags/模板语法/index.html","96bc88cc026aa1c6e7d14020244eec04"],["tags/比特币/index.html","40c26ba73880eded842f9eaa75bdaa67"],["tags/波浪字符/index.html","ccab103c03db1b90d2ef7c9e84a88757"],["tags/注解/index.html","1645f9a25d1cd379176b01c5496132b8"],["tags/用法/index.html","00c03f0832222f9b6b15f713ce0ccdf2"],["tags/穿透/index.html","86c834a6114a1bd62c1eac5f4468e986"],["tags/端口占用/index.html","ab7933aaa3c50f13cf7220d4c5b0306f"],["tags/笔记/index.html","44e55e5d991bf80c69e4ac410f641bc0"],["tags/符号/index.html","f8518130fee5d61b80e61293b6f3f478"],["tags/红黑树/index.html","28c8748317518cbb18e04577de91fded"],["tags/组件基础/index.html","086383d534e3a3d8ccded485d004d5ce"],["tags/绑定/index.html","1d4913706ce26e21e9e4e9dd8085d56c"],["tags/编程/index.html","70f9d3aff5ce9d4c797b6a58485824ea"],["tags/职责链模式/index.html","60d7cee68e3ae949011f5a782233b0f0"],["tags/聚合/index.html","f3264bc7c91fc96d1e0112f4044a749a"],["tags/聚集索引/index.html","3ede5ee9715c668bf7e4a32d155e8dd8"],["tags/自定义指令/index.html","fff4149ebfaef055a357d23bc5e5af40"],["tags/计算属性/index.html","dd814463ae6ca6ea76d2b0f561b94344"],["tags/设计模式/index.html","2fea580cbef9dd523d2a9ad93b48cf98"],["tags/进程/index.html","736a7ba528b110d8247cd00a0c638503"],["tags/远程仓库地址/index.html","1eb6cd79057fca702b5c4b1708444da4"],["tags/逻辑操作符/index.html","dcfe441f661bbcec36b3034a350a856b"],["tags/部署/index.html","b71deaead33538a3d11c2d9c09fdb1eb"],["tags/难度/index.html","54fe2b9b918cbd083ab12b8ab115d076"],["tags/集合/index.html","eaea612e1e37890134322ef0d91532af"],["thinking_in_programmer_life/full-stack-programmer.html","f039742a219b7462e26652af30c92b5e"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","e990c4f1c363e3648f15f034b29306e0"]];
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







