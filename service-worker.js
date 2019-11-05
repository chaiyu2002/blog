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

var precacheConfig = [["Kafka/kafka-introduction-note.html","37de9a92756114685729b2797dfdafad"],["Kafka/kafka-storage-principle.html","0bff9686c2844bc3ddafed1cff6de90d"],["about/index.html","6a35486deeb01e284dc5ad7746322106"],["archives/2018/06/index.html","52f7bab2bfbad3d36571dd55ee839be0"],["archives/2018/07/index.html","169484c77b58b928fb15c6f8bba82691"],["archives/2018/08/index.html","0c7dba241359a5f9e7312092a932fb22"],["archives/2018/09/index.html","4566f52d83f0e2a9f5272883d101e30f"],["archives/2018/10/index.html","2b67dfb010dc0d2f12117ff039e29e5d"],["archives/2018/11/index.html","2ee1cb332659ec079511aaa02eb91c0d"],["archives/2018/12/index.html","3b615141b6a2b6bbc2dc3bb922bf5330"],["archives/2018/index.html","50578fd97bf184c01faf48092fe069df"],["archives/2018/page/2/index.html","19b604ae4984610ea3c679d388ae6a5a"],["archives/2019/01/index.html","9442ec098d429fca23e7fd4934021838"],["archives/2019/02/index.html","d1efd92be640d9b82b5fe93be9be8cc6"],["archives/2019/04/index.html","567ff95798f35a3775c8925a742d46a3"],["archives/2019/05/index.html","0ee1352c3213ce03f6d83083d9933e3e"],["archives/2019/06/index.html","b3c1e2a3c608565bfa7de5ece2f73fcf"],["archives/2019/07/index.html","38bae2eafdd5d7ddb92abafb9c5fdd49"],["archives/2019/08/index.html","48fdfb69f29c9c99320d813d3ad9fed4"],["archives/2019/09/index.html","43c432bdbc62478b131b5fa1ab6d2249"],["archives/2019/10/index.html","7e9c79150993286da199d6a94bf50cab"],["archives/2019/11/index.html","b6b2676a648560f988aecb5a09b467a9"],["archives/2019/index.html","50ff256f3ae0149a8f5a87ab1d939665"],["archives/index.html","9165b22aeca477017a1f5ef437ae9fa7"],["archives/page/2/index.html","3518c75f902c3ed999f289bb5ef31533"],["atom/index.html","8121ffb482db6a1170443ca964c641b6"],["blockchain/base64-base58.html","25251798aa1bbc513cee4f84bf315242"],["blockchain/bitcoin-data-storage.html","e2da6412942236efef5f0fe867be6c58"],["blockchain/bitcoin-difficulty.html","51af4322d706002a9a186f2dfe935721"],["blockchain/block-chain-ethereum-contract-program.html","53ef62f6e593740980fdfe649e7a7f4a"],["blockchain/ethereum-programming-introduction.html","5fb4e14147c93e24de74e7e05a186e90"],["blockchain/ethereum-rationale-introduction.html","f38e204a493dcf22ffd5309ae951aaf6"],["books/index.html","86d9aa6845435252e49c1b0d3b93d16a"],["categories/Blockchain/index.html","6c3ade1a2e857a7deb6d1010063ecd46"],["categories/Blockchain/以太坊/index.html","8ec8fad6bf1022ef85a2ee8bb437c4ea"],["categories/Blockchain/以太坊/智能合约/index.html","e567c914b319dd77fc6effe8c4616e97"],["categories/CSS/index.html","0d03693c21df7c4ab22bec9f4d7dcfc4"],["categories/Design-Pattern/index.html","2b9c429e3777db145a37b1656a379734"],["categories/Git/index.html","00bbfcc273ddccb20ac2f8c6480979de"],["categories/Java/index.html","9fe1b4f9327dd6ce2411d9e688bfbc83"],["categories/JavaScript/NPM/index.html","8d331c41c7b8e626ec528ac43cb24175"],["categories/JavaScript/Vue/index.html","534302f039c63ba7766f104dce713245"],["categories/JavaScript/index.html","0e514f822cda0de978cdeeda6b714199"],["categories/Kafka/index.html","25c68d02251878cc0e250bbdcf4b8c4b"],["categories/Linux/Shell/index.html","8c84b7e5d0440ad27eeba5c2029954dc"],["categories/Linux/Ubuntu/index.html","1924961ef0ec2a1dc0530d9ed91bc3d3"],["categories/Linux/index.html","13afb46fb8e4b55cfa9cfa33ea7ce8ec"],["categories/MongoDB/index.html","1f70bec9d7b0e6576950557375c6b32c"],["categories/MySQL/index.html","22549fecfe5229b1cf84bca6c1fef280"],["categories/Python/index.html","834fbb2f8258d09bd3bc035b498f51ba"],["categories/iOS/index.html","201de448987242fcd7a120c21c29df69"],["categories/index.html","dade230db05eb65a1ab4e945b51b6d5b"],["categories/微信/index.html","62f073712731576fe509aa787bbced07"],["categories/杂记/index.html","a16b72eaf71d3fac1cc4a4042ccaa8d4"],["categories/程序人生/index.html","a9347cfb4c4335154bfd2da74a8b9d3c"],["categories/计划/index.html","107d87a09eb3cb68f96deaeaebfd7538"],["css/css-font-note.html","c70261caf827110fae5de5351a218d11"],["css/css-normal-flow.html","12f919c8d4caae8ba4f642c8383184dc"],["css/css-sass-introduction.html","558fe88cf10dab34dd91597494e28164"],["css/main.css","5e1656d3eabfc23819c2317d0e3bef19"],["design-pattern/chain-of-responsibility.html","c1b54e8dbf21bb79c5639cf6079f85b3"],["design-pattern/delegate-and-proxy.html","6bfcbddfc10846f5e114b5280b8ebc75"],["drafts/configure-multiple-vue-project-with-nginx.html","f4b8631847b3c4ef710b8d51956afb73"],["drafts/iframe.html","dd5c24aa9d1cfeb2b1114d04ea974871"],["drafts/record-re-install-mac-os-10-12-6.html","272f749536cbe588eea941652303324c"],["essay/note-ximurong-tree.html","50e1e137854eb3dc57a1977e577327a8"],["git/git-DETACHED-HEAD.html","2329cf788b8277e7c20e1a2bd0e1ad4f"],["git/git-branch.html","bf89b39d01d5e8c562cadb4b31a74f4b"],["git/git-change-server-password.html","c24e302f208a93bbbe08dfb41335e48a"],["git/git-checkout-1.html","9485bc79868519f163c50c62495c508f"],["git/git-checkout-2.html","70863b475d783e06de3977a04b54a88a"],["git/git-diff-m-symbol.html","07670db7334c6d480dd0b5e80d567bac"],["git/git-git-flow.html","6ebfbff6dd5be67a8ec3481c3799f48c"],["git/git-git-merge-ff-no-ff.html","7810d1c0c3d07356527ae52151ad8cd9"],["git/git-git-merge-true-merge.html","e688d635a3ce8f57fe35a65c75c8bd33"],["git/git-gitlab-flow.html","3583899f324949ad5a34d9f9c4809118"],["git/git-index.html","e25cee7a6baa6daed22de7f0703abc5d"],["git/git-merge-choose-one-side-code.html","18404cc7a4fbc4037c769cd7ed646ea5"],["git/git-merge-exist-conflict.html","2c6c68a85685506c6326357374c7f937"],["git/git-pull-1.html","56a2611b91bf6cd19c0330ec99c0e3cc"],["git/git-reflog.html","6587b5b1062113a81301e14d612b8717"],["git/git-remote-set-url.html","0347e2d6752470454c489125a3857022"],["git/git-reset.html","531384bd9b2078fdd976760a506f0b6c"],["git/git-rev-parse.html","ae39955f7e534094bcfee5542524ba47"],["git/git-revert.html","2aa168c7c46b86da6eacf078fed964b7"],["git/git-tag.html","df322d7c908ebaf26ea279e38f86238e"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","0469bf5f596737eb8faec96bcb201f21"],["ios/ios-oc-kvc-1.html","6d215e93f3148df627d4c7e5115512b6"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","e1c259f078a1255a7bd3b42c31cd31a1"],["ios/ios-themes.html","2b48c4f981134d3985eb26313231ef23"],["java/java-annotation-request-response.html","b467913fd3cb284e7e2870e28bac5b31"],["java/java-array-and-container-note.html","ba41167afd6a6040af3197c54482fde8"],["java/java-deploy-resource-folder.html","fe4d251e2d7a4954d1faa9cecde59632"],["java/java-jps-note.html","bf81fdeae99f96b48cca21fd7f3c0725"],["java/java-pojo-bean-note.html","5ce1ba81ca4b81f22c23999bc8d60ab2"],["java/java-shiro-note.html","e63a675c1cfd24f728e6f83008b953d7"],["java/java-shiro-springmvc-integration.html","a03ec1116bd6e0c556655c5483caf5a7"],["java/java-spring-autowired.html","5f724432bb03f52602e4dd7cef4a6db2"],["java/java-spring-configuration-bean.html","8235f3c47a689bfa0b4326c2cc837585"],["java/java-spring-restcontroller-note.html","a5a7eb5a390c47d44585548c73d10db3"],["java/java-springmvc-X-Frame-Options.html","d7bfb31713d84bd95990d0c2e2d9181c"],["java/java-synchronized-note.html","087d64132c85b3dc7db81dedb4cd399e"],["java/java-value-pass.html","2bb704434d90172223ada1e222df67a3"],["java/java-vo-dto-pojo.html","1aeed6875091ff7f561d0156b1f87180"],["java/url-rewrite.html","1c51fc15b6b1f812d99d6b0a946b45fd"],["js/js-logical-operator.html","a2bda7e0e42fae7fc4b1d824e7c5fe47"],["js/js-npm-symbol-caret.html","c1b10242fc61988653e3025cd6c008f3"],["js/js-npm-symbol-tilde.html","9b490d6aadcb4e02978bc67233d6c329"],["js/js-this.html","4701758f9bcb96dd4b776278c300965f"],["js/js-vue-note-components.html","0a0400af028aac6713a0a7a6fd73daef"],["js/js-vue-note-computed.html","ff795492de2ac824215e424b84c14395"],["js/js-vue-note-css-style-binding.html","c00b789f9547ee4135f908405f5a5c31"],["js/js-vue-note-directive.html","b4a6a042a0cff6d93e9492a5832fcb9f"],["js/js-vue-note-instance.html","951af165c1d518cbdbf84de03bf96054"],["js/js-vue-note-introduction.html","a34761acb549b4e261857b036435a3ee"],["js/js-vue-note-syntax.html","72c464dfdbd353981c2263a0671a558d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","8c86298d68743a80c1998645eeb39944"],["linux/mac-find-port-occupy-process.html","31ad6771b8e7630505d7c18ea0d37e69"],["linux/make-vs-cmake.html","1c4eb7cb00da1b7e9327afa92a9f1f27"],["linux/shell-command-awk.html","3abf645d5c5cea8ebc939df4b51bdd60"],["linux/shell-command-df.html","0df322984926a548ddec209f4a7b80d0"],["linux/shell-command-du.html","c4a2ca592523a0b424cc52904eafd741"],["linux/shell-command-netstat.html","f744639733bdcd06db73a9314ccdfd01"],["linux/shell-command-sed.html","df85f71ebb94767dbba366ad8fb9df9e"],["linux/shell-command-tar.html","b53a1530956bde7715327cceacf8f95f"],["linux/shell-command-top.html","ccf9aecde226d02884d95f9cc6a3133e"],["linux/shell-command-touch.html","0200fc58875455a582d73ee83be0d96e"],["linux/shell-command-which.html","0ec63f1c0a9a6a41d1ae2751041b7714"],["linux/ubuntu-user-add-delete.html","2819bd46d27d21a584622c203ea3979c"],["mongodb/mongodb-collection-aggregation-introduction.html","a59617fee9f872168d042098375c9a23"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","3629d99d4b36c8a568392c0ac3ffbaaf"],["mongodb/mongodb-collection-create.html","908eb22fd6b8053f969eb78dda6c7b6e"],["mongodb/mongodb-collection-delete.html","eccaa3f931680bc892d11d2bbe082dd5"],["mongodb/mongodb-collection-find-1.html","134e9736e9215ec72e0e4b6af9ef06b8"],["mongodb/mongodb-collection-find-projection-operator.html","166d9cb689aedefbbd1272157087d94e"],["mongodb/mongodb-collection-insert-1.html","27d3b602c54db10cfa5bd70876bb57d2"],["mongodb/mongodb-database-create.html","2d2f5ff75fdb676f4e3989348e765b09"],["mongodb/mongodb-java-driver.html","112b9b12246e18f68ac8f9fff58b45e9"],["mongodb/mongodb-schema-design-note.html","bb86573461b1256b84bf132d94c965c8"],["mongodb/mongodb-study-note-1.html","be4c6af47d454ee0b99c046a3fd79a17"],["mongodb/mongodb-study-note-2.html","b414cd77e71a384b85fc23bedb58687b"],["mongodb/mongodb-study-note-3.html","1e8012db0239f652f7909596e62986f2"],["mysql/B-tree-note-1.html","65fbe3a1251556cba14a0600c3fa23a9"],["mysql/mysql-ddl-handy-book.html","9f44e94f86d78005a091573b15c0f4e7"],["page/2/index.html","0803cfa6e8a43e9e20308df1ccd91a39"],["page/3/index.html","d7b9d2ce525733c03a95c8fc011043f4"],["page/4/index.html","9da9a06494c3f3d4d7d7fd168db41325"],["page/5/index.html","e1c29ebcb0ce8e1e20c84d6de2094e7a"],["photos/index.html","c319c0773f1f735143bf904acf211708"],["python/python-args-kwargs.html","d278646f3e4822c70cb829dbff9aca3d"],["python/upgrade-python-under-ubuntu1604.html","23367be79999e7e4c9ae1fdbb3cce61a"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","7ea2f7f086a7b203fc506e32b1201eb7"],["slides/index.html","d4ff6907fd2350868fcbf445104f6f2f"],["tags/Autowired/index.html","136bd6af84e5b0d116d57bcc9132325b"],["tags/B-树/index.html","4538ba62129f8172f90c5cf9146723a8"],["tags/Base48/index.html","984971c42b0f2071ab81ae31f463b8aa"],["tags/Beans/index.html","a67702e0b84737d36ed8a180c2463801"],["tags/CSS/index.html","b8b7f957c7d1f17f33ee3fde6e5140a9"],["tags/DETACHED-HEAD/index.html","29b4a7a203b4cd358c278598b0fa870b"],["tags/DTO/index.html","597a80f5c14361832a6b73aba7dbaf52"],["tags/Git-Flow/index.html","3f8b7bca93e13aaf3d2f1bb54008bce0"],["tags/Git/index.html","b005db1138f2de66191ac249fd3b8997"],["tags/JS/index.html","63877d194bf112757791fac7c5f0a13b"],["tags/Java/index.html","94dd1944e54944f0d5407c4eeb5bed7d"],["tags/JavaScript/index.html","ef2f5ecde398b7fef30561ca96249cba"],["tags/KVC/index.html","ff7b5a36e68514bf0e1c406c1d150635"],["tags/Kafka/index.html","c413c651ef7be5d882765324d1ac4303"],["tags/Linux/index.html","d4f26662e759960f3c5a5cf41bc50d2b"],["tags/M/index.html","98f4f0795fab4e8e53185b5990606445"],["tags/MongoDB/index.html","6065f9eab4945519a1ae60f68a863292"],["tags/MySQL/index.html","756c92242ec44c80d192d69664a8b0f7"],["tags/NAT/index.html","597e5392fcce5b5e712dbeede2bb1645"],["tags/NPM/index.html","2f60a828e6a1dfb01513190334e56cac"],["tags/OC/index.html","c5e2cbdbee638a1b471b53f631795c11"],["tags/POJO/index.html","604ca21a4d1eb4d995f1aaf8e0d3995a"],["tags/Python/index.html","8092242284ec6ba8c4c86acc6fa4ea04"],["tags/ReactiveCocoa/index.html","23e4589a8ccac637bf06091aeddbdfbc"],["tags/ReactiveObjC/index.html","b4013d27c005440abd698e485619c9e7"],["tags/Repository-not-found/index.html","6818f68fda0314af9e704f424cafefb6"],["tags/RequestBody/index.html","4dd02b152dff9f927ea3ef6dc416a17c"],["tags/ResponseBody/index.html","425d4a739cfdda4d9297bd5c7d945094"],["tags/RestControlle/index.html","4ce324153677b9b70298e0dbdc031620"],["tags/SASS/index.html","1f46cd34ffb6a46e9a73d7ecb0a62628"],["tags/Shiro/index.html","68fcb91bc332241e106ea188cb05bcb9"],["tags/Spring/index.html","bb16b0f8f30d6e427497ba2f7d6ea7ee"],["tags/SpringMVC/index.html","ca79393dd887bae584a9d24744bd54a6"],["tags/SprintMVC/index.html","c046ed85cdbd0c45288e04aec2e7429a"],["tags/Style/index.html","b1cace4605ff2783a9e30ff93714e81d"],["tags/Ubuntu16-04/index.html","ef23946d47b06b9383ef422e10d75ff5"],["tags/VO/index.html","dbe6cad493ce0c614ef1c4fffefa5a62"],["tags/Vue/index.html","9f5c4bffd740c02050235b6530da38da"],["tags/Workflow/index.html","9d3a7bd587b71210c0efc482c2a2add8"],["tags/X-Frame-Options/index.html","a58bce30f7942fe3067d8e1a6179d771"],["tags/aggregate/index.html","125ad7c4327108b8af1ff95918ce6643"],["tags/alter/index.html","651ce98ebe4c8bfd1d136e80363c563f"],["tags/annotation/index.html","f7b0d84e5e1c2196ebe3c16cd608e90b"],["tags/args/index.html","cc944a64de60b09900485f853884b977"],["tags/buffer/index.html","44dd8c87b1c7f8af1306105c33050d90"],["tags/cache/index.html","0a298d39a26703cf4cb64a2584e5f96f"],["tags/change/index.html","0bd1228d7f8a7e465df9b2c39e66cb71"],["tags/checkout/index.html","0914b4f5e86bad397cc0b7408069d3ee"],["tags/cmake/index.html","edd7f44079fc861b32cecb3c7a597ec2"],["tags/collection/index.html","9e65d74d81cea215dd46ccdc9e04004f"],["tags/component/index.html","309738ffd42ffcc7f31def7b186a0ff8"],["tags/computed/index.html","b15bca1f132482af9756450d55496843"],["tags/create/index.html","b6fccfeb0223fedd2c07b9c54e5c049c"],["tags/database/index.html","84adc33de813045cd2a58f0bbcbdff89"],["tags/df/index.html","227d1ff6d09c9ec13547934187a37708"],["tags/diff/index.html","c3c1435a6b7bfb51bac3a94d6a0bc98e"],["tags/driver/index.html","57d4c4d8d0c907a1eec72ef6504ec132"],["tags/du/index.html","9301c5c3421ace32401081e88e8d6f0c"],["tags/fast-forward/index.html","ab00018c040d051696d1a5fffbc7743d"],["tags/ff/index.html","d94b7609d40041adadcbe8d1ff2ffc8d"],["tags/font-size/index.html","2daba35a2ebedbed538f5068951ea5a4"],["tags/font/index.html","a0d49397b77b945d310fc0485660c07c"],["tags/free/index.html","ed222f5d4bf7c4e3822b226514119367"],["tags/git-branch/index.html","682cb83c2afff5be54b33b173494784a"],["tags/git-index/index.html","96c97dd9d96dbed513c73010f576594f"],["tags/git-merge/index.html","2608f9412be4df5bbb5e69600401242c"],["tags/git-pull/index.html","6e837f1b3883faa678477cc5e9463d5e"],["tags/git-reflog/index.html","45a24a7efd7fffb53ecc7e12d042640b"],["tags/git-reset/index.html","328c4429277572b069733f7c919fe1b9"],["tags/git-rev-parse/index.html","7abca153de6dd22a59e8135e57a04ba8"],["tags/git-revert/index.html","cabb70405839aeb83e11b075c17ce256"],["tags/git-tag/index.html","5a88e17c2340ec88257040a6775ff38b"],["tags/iOS/index.html","e1225495c229d37a8289998f29e3ce16"],["tags/index.html","1388c472d017bb5a01da526829f955df"],["tags/jps/index.html","30ea30f4c85e7a2b28c1212de20ebf10"],["tags/kwargs/index.html","5ed108ba505aa9944b4be14df63c587d"],["tags/mac/index.html","6c358571e31341632f2c6fb4ffb4918c"],["tags/make/index.html","5439619fee1d30f8f2e4bb9a3823df28"],["tags/modify/index.html","78bf4a954727b9c5069bef9b072e3750"],["tags/no-ff/index.html","8ed049e9caac7d7039489d494b579110"],["tags/rewrite/index.html","e55adeb53c712898e185bcf4a8b0e67a"],["tags/schema/index.html","724a31e4228fa99da59e05d357359667"],["tags/shell/index.html","16decf0c00fe8ef85116452b70cf3999"],["tags/synchronized/index.html","18deddac320941dc038e1bede0173cd6"],["tags/this/index.html","31c39613943aa0bffb630e3c822d8763"],["tags/tomcat/index.html","579826d51249058dcaf11dbdbefb4208"],["tags/top/index.html","97e2b3d0f034f9141e24bf680a2dfe63"],["tags/true-merge/index.html","64c9f3122e37cf9ed76ff3d09c9f36cf"],["tags/url/index.html","8ffb30002ad65577b4bdb5f37770e2b4"],["tags/windows/index.html","652e6e50c55b5ce5daeb0dfec0ef1990"],["tags/一棵开花的树/index.html","b134c04c46edc46fcfe688b0f3957755"],["tags/主题/index.html","f84ea4fd2f5e5eca1fdbef24fb5ea449"],["tags/介绍/index.html","c280384a0c43373bb82c63a6debc0231"],["tags/代理/index.html","8857c356af648e4c7ea14d226cfa354a"],["tags/以太坊/index.html","c5f11701a93a197ea94184e294a5de36"],["tags/依赖包/index.html","c3d29e8e0dadee49a48f954b5816f44e"],["tags/修改/index.html","aef2143e6fbdf06cc042a36a52026b7e"],["tags/值传递/index.html","e2a6ff1be35869cf497db9775b4af1e4"],["tags/冲突/index.html","cf0c692f1143ecdb9b34934c73549633"],["tags/分支/index.html","20659262a577bc9b49d9e25fbbbac09d"],["tags/创建/index.html","6a45a018462b243ab35a5bcee1259062"],["tags/创建数据库/index.html","d14527d3bc7ba291452fb4eb95095c69"],["tags/区块链/index.html","77575d6b5812cb6bfd053afac090ce99"],["tags/升级/index.html","13ff848617a7a8255d5cd55715badc6b"],["tags/参数/index.html","572002c61a7d2e4bcfe5d67635ca8ee5"],["tags/委托/index.html","aba31a61de21ea7a3a5f4a7b38ac102f"],["tags/存储/index.html","fc604af741983c3c0de618586c33ddac"],["tags/存在/index.html","feddef9a5fc6882aeb51b870ecfa3f96"],["tags/学习笔记/index.html","641a52da54c1c733e44da366a4053f40"],["tags/实例/index.html","460b7b862e2ccc55c049beeecc5b8b47"],["tags/容器/index.html","17686985a8f1da24809d0a993ad9a0b7"],["tags/工作流/index.html","4ead8411566aebc8e34fdbe781add48c"],["tags/工具/index.html","ff4fdf4d64624c47c45ea8b9c9d713ad"],["tags/席慕蓉/index.html","a98e49e724b7a9e163ecb6c9008304da"],["tags/微信/index.html","3bcdce5a2d4b371f4591e1022133ed99"],["tags/插入/index.html","d6e8e1087e1e9d9c10e879f9a23fc49d"],["tags/数据存储/index.html","d6ea39447e83ca9ad98a10e5b942580b"],["tags/数据库/index.html","93eca79ffd9d4ba6a30b9c73ec44c406"],["tags/数据集合/index.html","71f5b62fee1f6a5f17c2bab7f87358b3"],["tags/数组/index.html","0314f7a0524e6304257827e9a374c6b8"],["tags/文档/index.html","9707098b300df90ee76330d79b3ba7e5"],["tags/文档流/index.html","be15a22b56e4343bfadbf56bf092fe7c"],["tags/智能合约/index.html","e5dc4d01f5439d98b99b86b2fd70f8ff"],["tags/标签/index.html","908b580029caaaef1048fac8e68494fc"],["tags/模板语法/index.html","f9f2c7386f6a0f3c83cc5253279ee756"],["tags/比特币/index.html","b561991b35964bc6a7f4d73bfb942436"],["tags/波浪字符/index.html","a081a511f684b3332f552f84b8c20160"],["tags/注解/index.html","a308efb1829a7dd105325a24f531796f"],["tags/用法/index.html","1827ef955140a09081b4d77df7112877"],["tags/穿透/index.html","ea3ce2744414018c8670bb006b478d07"],["tags/端口占用/index.html","45068341cb0a230c39317e137e1bc3b8"],["tags/笔记/index.html","cb35822a2d86b405690de91c21923ccd"],["tags/符号/index.html","39a652cfb7da1c55b148c54e75df5079"],["tags/组件基础/index.html","bdd356e09f7d66e03debd67496d1db5f"],["tags/绑定/index.html","443b39b571eaf6932768724e96e91b19"],["tags/编程/index.html","532f2e51e19026e0ad69443eb0419694"],["tags/职责链模式/index.html","1c8c6d91b72c8c9eafeccd9b1d688705"],["tags/聚合/index.html","5aae62450cb6712a4ab243461696c4e8"],["tags/自定义指令/index.html","c6bd7c6833f6c722fb2720418b4d1739"],["tags/计算属性/index.html","a62410601eea91ec8b3ee791e16a49c9"],["tags/设计模式/index.html","7b63c214c004f881f9d9f9ff940bb76c"],["tags/进程/index.html","30ed83cf19059f328106f9447a07d6fa"],["tags/远程仓库地址/index.html","193dfce9f02380d2fb61737de2f812fb"],["tags/逻辑操作符/index.html","6e318c7b624e6e19d12229a9a768c0ac"],["tags/部署/index.html","24bbe5f2e8ce5bf4ead679698f60badf"],["tags/难度/index.html","cdd6b5ecdd9d5483dd19d8a343cccfa1"],["tags/集合/index.html","c11e44555052fa1b5f71900f4ba3dd23"],["thinking_in_programmer_life/full-stack-programmer.html","ee56c831f1b2f240c4d8fcaa357fd45c"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","33a8f345357bd66d6c7d6f44714f61b0"]];
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







