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

var precacheConfig = [["Kafka/kafka-introduction-note.html","3341de32d2f5ee356b06f9fa62bfa013"],["Kafka/kafka-storage-principle.html","998e47b82d7db74fabfde4564ed7c752"],["about/index.html","cdb3569f189100c49febea46d261b8bc"],["archives/2018/06/index.html","904e18958169c575861accadf81a312e"],["archives/2018/07/index.html","20cd89a13c64be9e561bb8ba963877b0"],["archives/2018/08/index.html","ef02ffd85ac22a513dcdadb0d46721fd"],["archives/2018/09/index.html","54b3872724865571269d97916655fce2"],["archives/2018/10/index.html","3ceeea8b9fe4c9785b4ac4b68fcdef3b"],["archives/2018/11/index.html","9a355c0fb4765471f2bf6caf1a231b23"],["archives/2018/12/index.html","ee1dd9e7aec8f59d801e24e95e3daa51"],["archives/2018/index.html","f73723675e85e13317a72894e6ed117a"],["archives/2018/page/2/index.html","483f54d45c74a007c9cd38f63bb31e9f"],["archives/2019/01/index.html","783eb74790986c4a793a5f8ad9c6a4f5"],["archives/2019/02/index.html","32fc98b66ed95f061237db4c07fca6b1"],["archives/2019/04/index.html","e72e6f2edb5f23b0648d799e0db7d23b"],["archives/2019/05/index.html","668225de75a80a759d595c4b995b34c5"],["archives/2019/06/index.html","875f8c02211bf1f33c0a7aa921e476d9"],["archives/2019/07/index.html","e6739a51c1ecd741ac6bf2b976617bab"],["archives/2019/08/index.html","04977219ed6a23abe22f7616403dc826"],["archives/2019/09/index.html","38f31413d3d05ed8efd11d59f2e1c8db"],["archives/2019/10/index.html","7b50afaeb57d12d0a2ecdbbdc066d074"],["archives/2019/11/index.html","c6dcdb9c1cf99e39ffcfddc1682adbeb"],["archives/2019/index.html","5286cb265317c03f852e1103ee299227"],["archives/index.html","aa4e451d27dd113188600f41b7152ad3"],["archives/page/2/index.html","0c7e75143393607a7894dec62b7003df"],["atom/index.html","6236b047b1c608786721f679015c8fbc"],["blockchain/base64-base58.html","5a69409e9b5e0d5621ade76963661774"],["blockchain/bitcoin-data-storage.html","032bcefb850c8101ea197b584ec10916"],["blockchain/bitcoin-difficulty.html","f2de32f500627eb5ba96c90d88cae009"],["blockchain/block-chain-ethereum-contract-program.html","3e2a989cfad4ed6f46f247eeda45b68e"],["blockchain/ethereum-programming-introduction.html","9bdc7894f27f2bed78e01d86cb46b244"],["blockchain/ethereum-rationale-introduction.html","df4d414cb9b222523de1a6057c78af55"],["books/index.html","ef1457aa29df8b37503d431e6604d476"],["categories/Blockchain/index.html","f2b9e6f782eeab46d8a6e878b7afa626"],["categories/Blockchain/以太坊/index.html","01ca336efcd21e086c93ac97fdbf8364"],["categories/Blockchain/以太坊/智能合约/index.html","a36aebba579b83f57f561f803e101409"],["categories/CSS/index.html","e08f4ce1802fc658f74c5d0642866e6f"],["categories/Design-Pattern/index.html","8b6a3602dd6ff505122b04c7915988de"],["categories/Git/index.html","cd7504b45de51d761145fe876a3e9e0b"],["categories/Java/index.html","8b80485712f1de9d9b1f9261a386019c"],["categories/JavaScript/NPM/index.html","c7e1df6c45ba2df44f9511d7d0ceed1f"],["categories/JavaScript/Vue/index.html","2eab3aad90755c97500639f18eb42e87"],["categories/JavaScript/index.html","0db6da4e013bbf7d421144795259c654"],["categories/Kafka/index.html","28959b4d39ed3ad5c2dfd7d08ca4fff6"],["categories/Linux/Shell/index.html","fa2f77e032f39f14908d09efb39cc48d"],["categories/Linux/Ubuntu/index.html","369cc22555388c565080c0c0be0925b0"],["categories/Linux/index.html","f39d8df09a283eceb91b053b18fe6c64"],["categories/MongoDB/index.html","498c5737f07dc1aa20594c583cc60ac3"],["categories/MySQL/index.html","5dd770d12d72bb2aa91aabf873708d81"],["categories/Python/index.html","1e785af67c3591c0ed36c8d07dd06467"],["categories/iOS/index.html","c2ee38d933cb1f4b0d590f94cd430e28"],["categories/index.html","2c94e768805f2402d88cfd809eb29fad"],["categories/微信/index.html","39b8591b088a88f9c2b2bb5c9918503d"],["categories/数据结构/index.html","5e9576101760651c4d3cf6b77ce2349b"],["categories/杂记/index.html","793fc763f4f766c2bafc44076b189297"],["categories/程序人生/index.html","22d826c8c61fd8e44f6b94ef6c9bf778"],["categories/计划/index.html","8556e1ffc953e810b0b4e78c335280f5"],["css/css-font-note.html","084ed00c1073870d37f90290691583cb"],["css/css-normal-flow.html","94d7b43be7806bc01016d899f6ff916e"],["css/css-sass-introduction.html","343ee5fc34ae889eacb83afbc4a01c0d"],["css/main.css","5e0b5f1c94fa54ff318056d617a2a6d4"],["data-structure/B-tree-note-1.html","9d0cd4a8884e90373773a04f81705029"],["design-pattern/chain-of-responsibility.html","e8159617bce8f1de1e63176e1429f89b"],["design-pattern/delegate-and-proxy.html","ab5929bf777c3176427a6707c08a3f97"],["drafts/configure-multiple-vue-project-with-nginx.html","c32903d3b9dffa245fe20560771187f0"],["drafts/iframe.html","fba5eb9d26f89502c8780cee56dad0d2"],["drafts/record-re-install-mac-os-10-12-6.html","73be0ea5328bd0c059b12b550699316c"],["essay/note-ximurong-tree.html","4532e2e9220eba2ac4c9bd0594a93a83"],["git/git-DETACHED-HEAD.html","eb121c2e7441fdd6577a1ef81a6b31d6"],["git/git-branch.html","2efee3c1d3773552e37899827af492ff"],["git/git-change-server-password.html","c980b6d042d191677871e75361de83f7"],["git/git-checkout-1.html","61cd7613365d529247f672f80b0a7a32"],["git/git-checkout-2.html","a4810e5990a5d95281ce2d16f868af9a"],["git/git-diff-m-symbol.html","0294bb5bb9faac28eec93a4682fee701"],["git/git-git-flow.html","b2acf9a16065ae814a864ce35762a8f4"],["git/git-git-merge-ff-no-ff.html","cffeb52ffb05c5dc1d4e3db1702bf67d"],["git/git-git-merge-true-merge.html","a9f687f1a3d23c0b4624d7e90e2a6da9"],["git/git-gitlab-flow.html","7e370513fa01513428997b5302cf5481"],["git/git-index.html","4ba9f9613f9169789c87312e56c32b95"],["git/git-merge-choose-one-side-code.html","867658088463364f182d794cdc1ab84f"],["git/git-merge-exist-conflict.html","f8aa4ca2054fbc2336173577c5cedfa8"],["git/git-pull-1.html","3c0b6605df3a367f6e2b23f304c79bee"],["git/git-reflog.html","a560666dcfeb661237f7b96f0a9e9ad1"],["git/git-remote-set-url.html","2cc35090a18fef82b26341e8147c0149"],["git/git-reset.html","3616859ea66ab70591d2f81f79cb5ef0"],["git/git-rev-parse.html","b4173d428c67b4b8b9ccead695b7fe7d"],["git/git-revert.html","72d927b15b22c462632a6ebc0bd89fdf"],["git/git-tag.html","3a9dd73d19be5af860d710baa6078fd8"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3963ad78b7ca3a42f492532b8a411f81"],["ios/ios-oc-kvc-1.html","91b0469566460112d846f829939f968d"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","78fa717daadce4eecee7e59b4d8cfd33"],["ios/ios-themes.html","94e322fd134dd0c7aab7c854e096e49b"],["java/java-annotation-request-response.html","d52c3578c5cf5b38fa80480126f6918d"],["java/java-array-and-container-note.html","3b4be1a52ef6d4818f074b77a8a6288a"],["java/java-deploy-resource-folder.html","7bc566f5bd26c8558c20b89530020bdc"],["java/java-jps-note.html","c6b363a7ccf78627440d2b3324a0eec7"],["java/java-pojo-bean-note.html","acf5414e3a9fed9428a0c768b18064ea"],["java/java-shiro-note.html","cbbab4f8dcf5e1719397393320db6b16"],["java/java-shiro-springmvc-integration.html","2ab63fde15fe6003598f14e0f2576606"],["java/java-spring-autowired.html","d3d55db69d72eaf0451c13e7bba7eec6"],["java/java-spring-configuration-bean.html","f8d30abea863c2cc37e94437f4873fa9"],["java/java-spring-restcontroller-note.html","37c924b6b13699f0666616875aa00f96"],["java/java-springmvc-X-Frame-Options.html","c82ca9ec0a49d34cf73a25dc230a53ab"],["java/java-synchronized-note.html","6931491bfd027f9af55965a12c1647fa"],["java/java-value-pass.html","13f2b1afd07a7f7b8fdbb22a6f6da77d"],["java/java-vo-dto-pojo.html","063301273487aac6a669cc2f6f2e2238"],["java/url-rewrite.html","5352959b4045a7055b12368d579c87ff"],["js/js-logical-operator.html","c837563ab8e7e7d1c788f023c21cbf57"],["js/js-npm-symbol-caret.html","cef56441788c45db0e2feef69653f265"],["js/js-npm-symbol-tilde.html","fe46f9605a54bba79d4a0f9a6bc2ecfa"],["js/js-this.html","bbff62664fb0b99e063a20969500d7ec"],["js/js-vue-note-components.html","8df46bc75ad66fccec02a92a509bdb7d"],["js/js-vue-note-computed.html","734ca077b3336782dfaec692c0eec7fe"],["js/js-vue-note-css-style-binding.html","1784f1b37729292d53533f3d2c70921d"],["js/js-vue-note-directive.html","c25806b73295d8674bfed36217fe45d3"],["js/js-vue-note-instance.html","5b991cbdd99d3971a294f4628e43a86d"],["js/js-vue-note-introduction.html","61d3774c27d0f229af9dafb26fdd1cab"],["js/js-vue-note-syntax.html","5a22a1406522d37469d7330fe83f3347"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","681786720ce991973a47ea7acc731b14"],["linux/mac-find-port-occupy-process.html","74dcb3de5ec77f4785889226008c8d83"],["linux/make-vs-cmake.html","8a3710668980a76f698dc267593ae899"],["linux/shell-command-awk.html","540733f92e2e95ad2c7e7604d43b3f8f"],["linux/shell-command-df.html","c103dcb7b7e8cea140704ab9d630f28f"],["linux/shell-command-du.html","658202c6bac1548d9f8b3a34c23a5992"],["linux/shell-command-netstat.html","e71798bdd41b15f56d11c35390217d76"],["linux/shell-command-sed.html","c4aeaaaf75cc9df98db720bece8d99fc"],["linux/shell-command-tar.html","4b2113853a47a7c9d8f86ae57df72d9b"],["linux/shell-command-top.html","686fa082316af7bfde4faac36d74808d"],["linux/shell-command-touch.html","5f89bbb18f78ebf435f698e1525a3db9"],["linux/shell-command-which.html","c4d39141aadda6667e322684d78ac547"],["linux/ubuntu-user-add-delete.html","6c2ac55d65af5d9a786db37f25cdd975"],["mongodb/mongodb-collection-aggregation-introduction.html","249ffa144a8111893a9d67e22b1a5ace"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","8355c1a024e8cf910a8f6d872f9b7013"],["mongodb/mongodb-collection-create.html","2f15c5749a71d664b693e344fb7d7db9"],["mongodb/mongodb-collection-delete.html","e920af273596ee032f45549d974d519e"],["mongodb/mongodb-collection-find-1.html","61e6b93bd0542d30f6f530750e7d71f3"],["mongodb/mongodb-collection-find-projection-operator.html","1d8b482e719cb5ed5224188d33cfab9a"],["mongodb/mongodb-collection-insert-1.html","3bc12f0fbf71637729809967609dba5e"],["mongodb/mongodb-database-create.html","73b6b53600c6703b5cb8b7939e57d9f7"],["mongodb/mongodb-java-driver.html","50f28988008ed36ff3c8e5d2d05a6926"],["mongodb/mongodb-schema-design-note.html","1a6a9999c7db682267ecdf536a5fffb1"],["mongodb/mongodb-study-note-1.html","753fff2327f266e67e7baaef6d8157aa"],["mongodb/mongodb-study-note-2.html","1c62101342241c3ad859630ea2ee40a6"],["mongodb/mongodb-study-note-3.html","07a1f359c7a08cac7e2cddfb06d25db4"],["mysql/B-tree-note-1.html","c25688445a3626bca71b5bf27213c598"],["mysql/clustered-index-mysql.html","8ebd931d6c5ad1ceaeb07ea47232db76"],["mysql/mysql-ddl-handy-book.html","f48dfdb5fd675a3c266a2afc90f338b5"],["page/2/index.html","a90e4e145f0a15582da9128dbf889d22"],["page/3/index.html","b6f5b7184e6eb12e65a76f312d315c47"],["page/4/index.html","727bfa282442135d3a5a4abda086bc68"],["page/5/index.html","0da59f52fb72d9cd77c2f8a3d8bb9229"],["photos/index.html","1adbde97ece2495153250b00c253f422"],["python/python-args-kwargs.html","65e712d02ab938f32eec99d8fc1101b4"],["python/upgrade-python-under-ubuntu1604.html","04c59a32959e6bd97a232e8a93cd82e6"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","f713c81467534cc48a2b0c74199bf160"],["slides/index.html","777ddff3966cf43080318c238b707688"],["tags/Autowired/index.html","ec38cef1f4b3ce7d787f231c6971bf70"],["tags/B-树/index.html","f05225002efe676471eb1f9df08733da"],["tags/Base48/index.html","dc1f55b85fa26e9f76deece15140b7bd"],["tags/Beans/index.html","c0a39eb800a043b270af7537c072285f"],["tags/CSS/index.html","0bacfe8801a5b15e9bfa84f0f6fe7f63"],["tags/DETACHED-HEAD/index.html","ac1ba6b84e2813833404d1c5ee46021c"],["tags/DTO/index.html","53aaee3a5b714066a06c9396950ca86c"],["tags/Git-Flow/index.html","3f1c5e9e841461fe4a62527781607a07"],["tags/Git/index.html","65f9ed967e84aaca07f62042378d88d2"],["tags/JS/index.html","c8b49755deed53b815f5a9525e68b6cc"],["tags/Java/index.html","2a4d806d2937c4aeb802b0b79f3eacf2"],["tags/JavaScript/index.html","3e9741a37c0cf734b557ff561e3edfab"],["tags/KVC/index.html","23a9da4bc154e627ef982b5421dc222c"],["tags/Kafka/index.html","78ffbdf8d2ff29e00f259014c25573ce"],["tags/Linux/index.html","26326d10f34fa6503f6ae31e6fc7c4ae"],["tags/M/index.html","f7ca2f65927b9c2e2c919b565b09e5d1"],["tags/MongoDB/index.html","e7bf6226fbb94ace93017f9320923db0"],["tags/MySQL/index.html","24cb6b43914204496fa4d6ed13faee74"],["tags/NAT/index.html","b332eb83955410292057f5093a17769a"],["tags/NPM/index.html","146959e5d0ffbe2a1f4cbf5e469c8035"],["tags/OC/index.html","c1789e8518f1c4b9c666c6de245c3344"],["tags/POJO/index.html","6c0415182e0140833e773b0c1b891a74"],["tags/Python/index.html","d80526159edebb36eeee5747ff768709"],["tags/ReactiveCocoa/index.html","ec274c5121fa0c8656d5785208b96d7c"],["tags/ReactiveObjC/index.html","558b42d23feb50d1e5feed12187f340a"],["tags/Repository-not-found/index.html","3b27e5e6c82ba76de1f161cc6068a3fc"],["tags/RequestBody/index.html","2e327a5b6e50ce78e7ba0e7eb51aa2f0"],["tags/ResponseBody/index.html","72188f2b961ff362a77b68c59f02464a"],["tags/RestControlle/index.html","83ef9ea80d2a552cf1ee72b07c54d79a"],["tags/SASS/index.html","974867e64df0c5b6ad0a62db6c53ce65"],["tags/Shiro/index.html","7be84df46b6a172038bab5d423bfd3c4"],["tags/Spring/index.html","2ae6687b0d1e807fb52827604aab3552"],["tags/SpringMVC/index.html","b87e7f005a8adf0cf327dd8ff5f7789f"],["tags/SprintMVC/index.html","bc98c0bebba03e4062a3465cc0a564ac"],["tags/Style/index.html","b313c1a424aa46abf43ee005e5bb902a"],["tags/Ubuntu16-04/index.html","92a65d97542173aca85530fff2e10c05"],["tags/VO/index.html","2ad8f63cb47ca7ef63d27cb5fbbdb9de"],["tags/Vue/index.html","7cd0fe7aa8b30dd4ed65d88a7134aa69"],["tags/Workflow/index.html","e7d81ddb8310b0891ec33ae81158954b"],["tags/X-Frame-Options/index.html","a9ce444c3fae32211f3d44ea15be22aa"],["tags/aggregate/index.html","0d646f4e1bab3f4ebd37c32f9f0b19af"],["tags/alter/index.html","e0d19f9ddc60df2e306f63e9112d87fd"],["tags/annotation/index.html","e5a2495c1b08736c99f53b97851ceed2"],["tags/args/index.html","68bc67a7a26859d818c3b4b17ebb5316"],["tags/buffer/index.html","356fdd17b61093c8ad083fd31673b47e"],["tags/cache/index.html","d5c7665283d30bae870f9b22189ced7a"],["tags/change/index.html","c2132dacbc6ec72ea5121ec3f2a348a4"],["tags/checkout/index.html","9b4c9d992e0c715e3f453c02dc238ae5"],["tags/cmake/index.html","78c660d0e105436b034a5b830e0c508d"],["tags/collection/index.html","c442b50c5c2a6caab788740fe9314e8a"],["tags/component/index.html","4485555bb5475b9587efbee232241860"],["tags/computed/index.html","d0911108b3a8fa6f8f36c5bc6b1d2e6a"],["tags/create/index.html","6f9b8e4f219fe91f016f459f28a9c5da"],["tags/database/index.html","b947dc6cd822573faaf94d99ff8a5f63"],["tags/df/index.html","6162c30ee6310c11492ea2444b86eb81"],["tags/diff/index.html","13cfec035a6526cbaa0f6a34531c181c"],["tags/driver/index.html","b8c1d92a29800645fb66dfb15bf8e24e"],["tags/du/index.html","fa46a907c20d02de3f2f21e5c6bbb0ce"],["tags/fast-forward/index.html","bd0d5014388f573f7291e8a5244d7753"],["tags/ff/index.html","18de5cc40a23187e99871d741321a353"],["tags/font-size/index.html","81755b86550218366387cc32b1123dfa"],["tags/font/index.html","66f6dd8663c0b7bfd4df258de2c23a5b"],["tags/free/index.html","d52c20f1ab9038706f3d18aea4092720"],["tags/git-branch/index.html","5ae33416b6a36a7026577708510e9d1e"],["tags/git-index/index.html","018f8ed00f61f29f828df6eaaa2f1876"],["tags/git-merge/index.html","67c94ee29fd48de81a835750449409a1"],["tags/git-pull/index.html","8d65a1bde3824dc3a913aaac7b559ce2"],["tags/git-reflog/index.html","f7fb371195796d5c26900ddc94090c5c"],["tags/git-reset/index.html","b41af4c2e53ccd0e30852a082a9ed18a"],["tags/git-rev-parse/index.html","2d5aa23047b14c1d213612366e71f0e8"],["tags/git-revert/index.html","5adb2ba9a8415b3c4d62e1bb23fc5f51"],["tags/git-tag/index.html","ceb6508b6d293230fe69101edad20e12"],["tags/iOS/index.html","4560d95ed49f0e53cba2ca63811299f1"],["tags/index.html","db81e383c0bff5d510f5d0b2da8eccbb"],["tags/jps/index.html","202f8a405d5d0ed30ce586c372a850cf"],["tags/kwargs/index.html","fed7e054a18abae7f4c97ff9a9576afa"],["tags/mac/index.html","f189e410189abf001224aac60bd77fe4"],["tags/make/index.html","6873aafc2cd2a538760dc5ba1d271436"],["tags/modify/index.html","3f7bc7a0e5e4efd9cf0dac369d8393e3"],["tags/no-ff/index.html","a68f6d397fdcefaa88c7c566174a4a18"],["tags/rewrite/index.html","c6998ea92701a5b79bd4856159d95f0b"],["tags/schema/index.html","ff2e309de237ae747df8933b0ccd1a29"],["tags/shell/index.html","d9a0e75300eba7ebdbf4d9b7aff52f6a"],["tags/synchronized/index.html","3dafd94a517cf210467da903ece8ee2f"],["tags/this/index.html","3f71f163e94f00fad7762440ae168094"],["tags/tomcat/index.html","ac2d5767b05fdf99f4c5165790c6d34b"],["tags/top/index.html","5c194ca50fb5988ce5ad2411c7b262a1"],["tags/true-merge/index.html","a43b149d6f1af8aa76c7b38633d55a5e"],["tags/url/index.html","0b1889275a27e9592bdf6a920c072726"],["tags/windows/index.html","f451e60d2367c7d32aedf18787c2fcf5"],["tags/一棵开花的树/index.html","84cb44d003e955c9ac14ab6712e3bcee"],["tags/主题/index.html","3e693f3caf66f4928522f267f63140a9"],["tags/介绍/index.html","55e4b5a6d70b11970f6ac796569fdf1e"],["tags/代理/index.html","2495349c159e57eacea5b73a796fb7a5"],["tags/以太坊/index.html","2eed46bdd14163b8b96875c1f7a45424"],["tags/依赖包/index.html","b3190422b8723a06cd6a843eac3a06a1"],["tags/修改/index.html","ff0eaef98aa092378792dee0212f1206"],["tags/值传递/index.html","46c315379dcf9158a67193f32f141ea3"],["tags/冲突/index.html","ab17dbd837a0cf389170d9800e4e2af8"],["tags/分支/index.html","6e41c602e46b141f274cabf453cf62ed"],["tags/创建/index.html","ccddb73180cbe46afa714ef297785fc7"],["tags/创建数据库/index.html","53e93fe7be8cbffad46e2ec92ce3ced7"],["tags/区块链/index.html","46562431af088992b12995f804fd9369"],["tags/升级/index.html","8e1747206b1ae6f29961920d9756842a"],["tags/参数/index.html","03928d85b84a207aa86118a85d315763"],["tags/委托/index.html","6c58bcb94811cbd39b020e244448e8e3"],["tags/存储/index.html","563c11564111854be24aa11533360817"],["tags/存在/index.html","77b44e94411ffda8b2009f3c9157c8af"],["tags/学习笔记/index.html","08c40b9078d46de61e43ded65c254a44"],["tags/实例/index.html","7a7687862afc00add117aba7f1789234"],["tags/容器/index.html","60e8cdc480e6a9199898fb3bd8f50ea2"],["tags/工作流/index.html","30fa4ab6cdbe4ce91436fd8914f0eeba"],["tags/工具/index.html","e37b54637f4a7d9b48d5f1602a7f1822"],["tags/席慕蓉/index.html","cad9160d91b1602d8c6c05e8bcbb8d03"],["tags/微信/index.html","cce794f4db3f9cda8907e95488915121"],["tags/插入/index.html","d77258940f45eb91aeb230161c7af0e6"],["tags/数据存储/index.html","4ba11eefa4d49fc86d986260a6f123ab"],["tags/数据库/index.html","899950a99695930835066265c8a9818a"],["tags/数据集合/index.html","12f016423487719c39338a8cab4f89ed"],["tags/数组/index.html","16aeb28b420c41cfa8737de410d8e6d8"],["tags/文档/index.html","f4b3d2b47ab483aea2e6e7fb7b9f0b41"],["tags/文档流/index.html","bbde1d601af08841988e98c02936d7f5"],["tags/智能合约/index.html","f4abaebfb1e299eed5204fad741ea926"],["tags/标签/index.html","1488e9bd2bc2b312f799abb4be77b0e2"],["tags/模板语法/index.html","88283e338d5c0ba98fb7716362e0d4fb"],["tags/比特币/index.html","b7b92e30c64993fedac08a505ad3009f"],["tags/波浪字符/index.html","f3bb28aa05c5745b4e629f42b51edc9c"],["tags/注解/index.html","e9b94eca15bf569c54cc219bd6fc66d1"],["tags/用法/index.html","ec3b34f65b7f0b41776d725555887a18"],["tags/穿透/index.html","fa6b4b7dc71baa76bf57e6b3c427b985"],["tags/端口占用/index.html","8a12f9594a7bddb9cadcf7ffd194767e"],["tags/笔记/index.html","7f33325fed2ab1a0ef3db702bec0a1a4"],["tags/符号/index.html","1a55180bcf136c835e849d772842c536"],["tags/红黑树/index.html","f8348253b5afc43d5f07b13d260c256e"],["tags/组件基础/index.html","e17dde05f65dfab9ae6174b5aea53aa0"],["tags/绑定/index.html","8300fff8e20b0836f38139627304651b"],["tags/编程/index.html","9db7477aa01ead4b5938d0c627ba66fe"],["tags/职责链模式/index.html","bfc2ef5e578f5e7523007cdd428bdc70"],["tags/聚合/index.html","0f63fe8dadf3b6a5ce5a4949bf8f9c2c"],["tags/聚集索引/index.html","819253bb1aa9597e673cab0ad73e40b2"],["tags/自定义指令/index.html","8ffa57e685ffb62b9eacdd2a9d8b8187"],["tags/计算属性/index.html","1bff247f35c81e72fc9a3c086c9fd1bf"],["tags/设计模式/index.html","8d649e78f0f2e8229549e13d1d1dc737"],["tags/进程/index.html","623b23c3e9f2fcee94f65ee46b15b26f"],["tags/远程仓库地址/index.html","9b8825b8036349dd6c5315b59120e6d0"],["tags/逻辑操作符/index.html","57c23732bafdc03c0f5189b97dd13af9"],["tags/部署/index.html","cd2dc5d8c4a669f6f24cbb45a255ccee"],["tags/难度/index.html","dc4521f5a26c37e4b818400d1d2a1f68"],["tags/集合/index.html","b20e837cfabf073a8d04a2fd6f4320a7"],["thinking_in_programmer_life/full-stack-programmer.html","95e485c0fee353941bfb346fe60e344a"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","6b4b305c7d28554b655d92875f2f97fa"]];
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







