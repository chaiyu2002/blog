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

var precacheConfig = [["Kafka/kafka-introduction-note.html","5b854e9d918b51b0b4d3df5c1d1733cc"],["Kafka/kafka-storage-principle.html","d08519bc1f53e1fa43741fc587776eb5"],["about/index.html","4fb1db28090ee1ef978b0dc9efc9352e"],["archives/2018/06/index.html","3c09bd273e6cddbe61849db44456ffd0"],["archives/2018/07/index.html","6bc76c0839c76c698ba9bcc28e34fad8"],["archives/2018/08/index.html","38778aec0c571f0f6b2a8c8ed12bd29b"],["archives/2018/09/index.html","5639f891406d00f0825854b87e4481d4"],["archives/2018/10/index.html","74352163fbc857013acb50f3805a939c"],["archives/2018/11/index.html","16fb2d7b90b1c60059cd0addcf887466"],["archives/2018/12/index.html","989e590a74192626c285fee99310fe6f"],["archives/2018/index.html","125147354a27dba2886867f0469d4f76"],["archives/2018/page/2/index.html","764cbba29f101c9ecd112e0d214dade8"],["archives/2019/01/index.html","243a8ebb44f38ae8c0e79a0b6f419f39"],["archives/2019/02/index.html","24aaa2ac4bcc1ebdc45756aa8f8b6b40"],["archives/2019/04/index.html","eac342aac503a913cbcce5721cf9b074"],["archives/2019/05/index.html","fea39aa2c5a3938e8a79642c8cd62dd0"],["archives/2019/06/index.html","878215b96af67e0af26aadc8c816db0b"],["archives/2019/07/index.html","dd4401c4aa680b2d7da189ab2cea6cdd"],["archives/2019/08/index.html","e5a0bb179e7045063735132d797d6fa1"],["archives/2019/09/index.html","c5978085471104f19af6af313a1a73ce"],["archives/2019/10/index.html","a77c478644abc2a71012d97271019bed"],["archives/2019/11/index.html","15332468fda78efdc6858e6fd809804e"],["archives/2019/index.html","2efd410c7dddf045fbd77304036c80aa"],["archives/index.html","8e85670a4e96e50497cc985755651f13"],["archives/page/2/index.html","6054f8e4756546a012927f81eb59500b"],["atom/index.html","f8fb5e7f16b647f20f5fd039afc643bd"],["blockchain/base64-base58.html","843a015936dd51b97f61f90cfdf92b93"],["blockchain/bitcoin-data-storage.html","e12c058f12ca8759a3fd993cb507cdbb"],["blockchain/bitcoin-difficulty.html","3ba35849236bb47b00f53804d512a071"],["blockchain/block-chain-ethereum-contract-program.html","f553ae7517eb3dcb05d65be24167e8b9"],["blockchain/ethereum-programming-introduction.html","ff5475a1fe8ddbdb55447d30b1bfee8e"],["blockchain/ethereum-rationale-introduction.html","04c07b7e8424d44426342de1b28531f9"],["books/index.html","f43d051b502b452c50556fa57315d7d6"],["categories/Blockchain/index.html","1ee73fdec9d47ecd929c499ff3305ca6"],["categories/Blockchain/以太坊/index.html","44c66256557a69a3f957ec1a336bf0aa"],["categories/Blockchain/以太坊/智能合约/index.html","af21b31cb4e520bd4c84d1e874a01ea8"],["categories/CSS/index.html","436ae4bb34df2b9edea937cbc7be6ac9"],["categories/Design-Pattern/index.html","be120e1083ed08112c9c1df7b0d01640"],["categories/Git/index.html","40f6ac83cf35dae9e992d9e715112045"],["categories/Java/index.html","01770390f2db7f1d66c87f38845d1309"],["categories/JavaScript/NPM/index.html","db985c0e6727b57fd6ad114d00cc2974"],["categories/JavaScript/Vue/index.html","184f8810f14f734087a11d9b93d54716"],["categories/JavaScript/index.html","57fc9e026f4037729eb6dcedafe7028b"],["categories/Kafka/index.html","7577919fd6463c823ee40343de362069"],["categories/Linux/Shell/index.html","3c19bfaf1d8779885e324701fa8948e9"],["categories/Linux/Ubuntu/index.html","a624a7a28fbe740c59150ee9b4b48438"],["categories/Linux/index.html","182d38d07b7a9db9581cb00b84cc4ee0"],["categories/MongoDB/index.html","c54819eeb22f4541016f91792ae95076"],["categories/MySQL/index.html","c9d1a15cc7b09763699dfc45c0bca677"],["categories/Python/index.html","3e8b31a2bdd884cd79ee39edba914fbb"],["categories/iOS/index.html","56179eabd0ae2d23749f45b2ddc38d59"],["categories/index.html","5219e1173918e4dd8f7c75c2b2a09750"],["categories/微信/index.html","47feedfd9b59f24cff6a21b4408906ff"],["categories/数据结构/index.html","b1d8b23b43b79757a2c9cd049bcb122e"],["categories/杂记/index.html","c2baf6348edab06f33dae281d186ff01"],["categories/程序人生/index.html","7ed116e7204ad5d79d70e7f7b6747ae7"],["categories/计划/index.html","669e2d92c0fbf7772bbf1ddbea681557"],["css/css-font-note.html","c63aad36c11f94f4b58546d2d6eafb18"],["css/css-normal-flow.html","018b82965313c21590754ff1e94bdb21"],["css/css-sass-introduction.html","fe13dd114a4cc6f69ef3bccd25e7590e"],["css/main.css","4a2d1b82828176948f542fe4570ea597"],["data-structure/B-tree-note-1.html","35206b2305c402c23caecf19919c9ea2"],["data-structure/Binary-tree-note.html","fb34d8079e879d758af54766ac3c1899"],["design-pattern/chain-of-responsibility.html","f6053f03fe216f1e70cb889d9085effc"],["design-pattern/delegate-and-proxy.html","4e76cdcac8651c44b1a2084d8c6da719"],["drafts/configure-multiple-vue-project-with-nginx.html","818720b9c2ef314cd4941ece3443a63a"],["drafts/iframe.html","ddda2b9016d1fe223e7f9edc0bd37142"],["drafts/record-re-install-mac-os-10-12-6.html","e3494ac7339271d9a4eb42ae167c091f"],["essay/note-ximurong-tree.html","091e87d16f8e174a8b010557c328e55b"],["git/git-DETACHED-HEAD.html","bb3ceb6d986a31711eafc2bc43bd963a"],["git/git-branch.html","b8b4f93995e14a24cef441b76ec505d0"],["git/git-change-server-password.html","66658f8cbdd867440b869101c05f277c"],["git/git-checkout-1.html","69b2c1019b09ce6062cf4ccb94fb9f60"],["git/git-checkout-2.html","dc41195839168496d4b527e3e9a4fca0"],["git/git-diff-m-symbol.html","ca308b644678ea3f8347d405a3d0d6c2"],["git/git-git-flow.html","452ee501cd76cb0d37eec8dab363339d"],["git/git-git-merge-ff-no-ff.html","43eb58839282c466a3d2e4fac0805b96"],["git/git-git-merge-true-merge.html","808e777bf48068af74464bfba0850ae5"],["git/git-gitlab-flow.html","3a0c44ca9f45b9d593f566ade9cdd372"],["git/git-index.html","5667260498d5402adbcd851b8fe22f07"],["git/git-merge-choose-one-side-code.html","d854739fdb8fea8fee275ba66952df99"],["git/git-merge-exist-conflict.html","d97ee3714a940eaf47ead6641b77a560"],["git/git-pull-1.html","db121ff2fdeb2c04de73578570e59237"],["git/git-reflog.html","3b0de0c1b54fc6786627da570b3810dc"],["git/git-remote-set-url.html","61c9f4f6d46dee63ea8705312c894ebf"],["git/git-reset.html","d3b0d1544b8013b402a83c2c2e8ac244"],["git/git-rev-parse.html","fccfb3f0e5c335e3394dcd6aa849b2f3"],["git/git-revert.html","4f6b3b2049f9616d06d309be9bdf362b"],["git/git-tag.html","a205fe227014204c105d4c1d1584552c"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3a5ab6e0b34c918154018f8d7e4cf883"],["ios/ios-oc-kvc-1.html","37e80ea876cc99793261961e820d89b0"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","639be1048431d4a371b3920c7d396d88"],["ios/ios-themes.html","3c7ced9b0e72d84305138178b8788665"],["java/java-annotation-note.html","acbe466f36ae8267bc43e58f7034fa22"],["java/java-annotation-request-response.html","3a5c45d68201c23345b32f468f98cae2"],["java/java-array-and-container-note.html","d53d586dec18bb28154076ee72a799a0"],["java/java-deploy-resource-folder.html","c7ee38021d8ee7f56c17b2189a0b45ab"],["java/java-jps-note.html","0ef17ed75d730cc4fce5f08bea0f9d40"],["java/java-pojo-bean-note.html","453be9f0543a5f16258ed8f62bd30f60"],["java/java-shiro-note.html","9cefa6d67807f4356eddf958df948560"],["java/java-shiro-springmvc-integration.html","fe26a4904052bbdf47abdb9024642b7b"],["java/java-spring-autowired.html","32370dfe4c44adc915f4909d3a0953b8"],["java/java-spring-configuration-bean.html","385910d4dc139e079f07826835e27915"],["java/java-spring-restcontroller-note.html","8761cc2ec6dcd423cac862e25b58a9c8"],["java/java-springmvc-X-Frame-Options.html","528200a7727ee3867f89a6ae174c8c17"],["java/java-synchronized-note.html","01060005d29aa051c13a6bcecf139ef4"],["java/java-value-pass.html","c19693d45fe8a83916549e9bb35db7f1"],["java/java-vo-dto-pojo.html","74ad238fc4e16ba5bcf6e6bcb7b51a84"],["java/url-rewrite.html","719acad63d2a9178d78cac313baa23a5"],["js/js-logical-operator.html","5d77bcd35c587c6dc506049c51bbe026"],["js/js-npm-symbol-caret.html","1d307d9a2c2aa1e511bce48b4eb4a9b4"],["js/js-npm-symbol-tilde.html","270ef916bd145709a0c785272a7b8807"],["js/js-this.html","181fc2cfdf8cd2d7baa11ca071d02303"],["js/js-vue-note-components.html","7b062be8e1b1e71330f953a6e44b8fbe"],["js/js-vue-note-computed.html","9d01ba63dc2758414db6a3a06e1837d8"],["js/js-vue-note-css-style-binding.html","74dfacab29ff4935fd251ab6f7a6d882"],["js/js-vue-note-directive.html","d3302ff22957c26665d4cfe454dc0455"],["js/js-vue-note-instance.html","3e90d059e81b15270624df91d370fb05"],["js/js-vue-note-introduction.html","45f85ff44f22a12ee8c16bbc6e758e12"],["js/js-vue-note-syntax.html","c762c3ebcbf611ddfe55aae98e8b975d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","3edea67a875c235e54433563946bdd1e"],["linux/mac-find-port-occupy-process.html","3969540d10adc92d061f869bf2bb132d"],["linux/make-vs-cmake.html","ea4417a09c1cde632c8fa8c1ab71d4ef"],["linux/shell-command-awk.html","5eced26f3075206406ffa2ea5984acb7"],["linux/shell-command-df.html","80230f6a60e4de35c9de4f6323ce3da2"],["linux/shell-command-du.html","c9db71dcfa59f3aae18a928a16efe996"],["linux/shell-command-netstat.html","5a5049b93a506b1dcbaca16583c8d491"],["linux/shell-command-sed.html","cd2cb2ba7cc4137eee813dbc8f020e75"],["linux/shell-command-tar.html","7225e34cb8395de787d8d654ea7efc1c"],["linux/shell-command-top.html","df31cb7b507d13b2758d47a1b03dd260"],["linux/shell-command-touch.html","31bd687effeff7d8a180beb7fd882867"],["linux/shell-command-which.html","0e32c999fa57f3c3be28e9e1549fb7e3"],["linux/ubuntu-user-add-delete.html","208514f2952357b2f904dfb869b84730"],["mongodb/mongodb-collection-aggregation-introduction.html","eac971b29ed1b47646f9ba4fba866dc1"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","34d9d7e6dfa83906f34dbda90e390895"],["mongodb/mongodb-collection-create.html","64d8a5f96ddf8b38cebf689ca6c60a60"],["mongodb/mongodb-collection-delete.html","28af862e6b34e6321889c61949fc24cb"],["mongodb/mongodb-collection-find-1.html","cacf0fd2ef03679cf9f29d07bf9f605b"],["mongodb/mongodb-collection-find-projection-operator.html","64279cfca56c7082d7045f2d83033769"],["mongodb/mongodb-collection-insert-1.html","9fdcb463c745a73f984f3d01baa83f57"],["mongodb/mongodb-database-create.html","5baa5dd6d34c44d9cafffcc678c58040"],["mongodb/mongodb-java-driver.html","5e692ed6151f8d319d324868491c9e61"],["mongodb/mongodb-schema-design-note.html","7e7523543a1ee75bffb8c4e730d3b961"],["mongodb/mongodb-study-note-1.html","fc88db8d5699bc1fcf61ae5d8c71d408"],["mongodb/mongodb-study-note-2.html","a52de275ca1c0dd46e6b30bc8d6f4442"],["mongodb/mongodb-study-note-3.html","47be535f582c36372be7b3a2b56c3787"],["mysql/B-tree-note-1.html","0239cb3997d9a638426b2039bf9bb2ff"],["mysql/clustered-index-mysql.html","36966b1ac1c29836c871a392d334ae27"],["mysql/mysql-ddl-handy-book.html","97a47f6845d026280ef22bf8a99572f2"],["page/2/index.html","395e2e922499e6d09c158db01fb71f5f"],["page/3/index.html","732b2430cd30a6bd2dba323e5e2a51c5"],["page/4/index.html","137bfa80224621888903b30ee3c3c7c2"],["page/5/index.html","e17efef933deaf2762038978276fe4fb"],["photos/index.html","11ae1493996d7aa69196ea7f17b248b0"],["python/python-args-kwargs.html","c827965c26dc5633dec97fe688a6cd15"],["python/upgrade-python-under-ubuntu1604.html","efd884cbcd488fbe000e7d91645f76c2"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","35105651404439c1fb236253d92e473f"],["slides/index.html","0660bfb970a9c75da815029c7f001699"],["tags/Autowired/index.html","ac0cd7e4b224bffeec32fd11daee9ad1"],["tags/B-树/index.html","cee60500209124d108ab04e64a755987"],["tags/Base48/index.html","d879cb680fb19abd8d715fd4ab0490ad"],["tags/Beans/index.html","57d5961dc582289e00919e3cf6793507"],["tags/CSS/index.html","06052dd16d47a8360682816a968b79a7"],["tags/DETACHED-HEAD/index.html","49b51538958aad52d445cfcb81cc0236"],["tags/DTO/index.html","c089830c4f8b22af9b8dd4b4bdc48917"],["tags/Git-Flow/index.html","08ef8c37227625373ed83a06b0dbcd64"],["tags/Git/index.html","041bc84826e1df44f54223de8867d053"],["tags/JS/index.html","7914172ef54a2518cc4619923ed67157"],["tags/Java/index.html","a1e9abf03a29b24123b6a4e38c1d9e06"],["tags/Javascript/index.html","032f7a9e33c6d9673e6a0d804a49dcc9"],["tags/KVC/index.html","06c8ac4a542488db42b5b960640b8f4a"],["tags/Kafka/index.html","4847b63952a19f61109dc747db0ff331"],["tags/Linux/index.html","973a82c8c2b6092771612c2d85e414f9"],["tags/M/index.html","fa59c92751eaad29971eaf4d399777c2"],["tags/MongoDB/index.html","c8af07773ea76e5c65db960fa812c7e8"],["tags/MySQL/index.html","587c1702075c1a663c1f7f221bf85d75"],["tags/NAT/index.html","117ba7c8bf20c8d6acaf5a94442aa5cf"],["tags/NPM/index.html","818a10bbfed815a8c069bbe42555f6cd"],["tags/OC/index.html","2ce612cfa8d6dee3ca9c2754dc6e5cc0"],["tags/POJO/index.html","0bd030f8b443984b9e4c5a3841a6b3b7"],["tags/Python/index.html","42814ae570e694356114012fb3f8edd3"],["tags/ReactiveCocoa/index.html","4ff8efa99f2d3477a47500a24d50b3f2"],["tags/ReactiveObjC/index.html","dcbcba008e99707c81627bfa2fd99dd5"],["tags/Repository-not-found/index.html","6d4d512ecc67ea577dc2f3919b1033fb"],["tags/RequestBody/index.html","f1603040e0b811827268450c6de248c4"],["tags/ResponseBody/index.html","fd8ec8eee8af2978031b8c27f3c1655b"],["tags/RestControlle/index.html","0b9f7c1619ba9762fee486fc96f1a428"],["tags/SASS/index.html","01700579a6e83f2a03e568a288097a05"],["tags/Shiro/index.html","b0b3a9c10a75a655398c352c3d7a4154"],["tags/Spring/index.html","85fb716bb0545161456a1ab9c924e3c9"],["tags/SpringMVC/index.html","dbc3ee94e8f590f39888cd3d1efb6ea5"],["tags/SprintMVC/index.html","942bfa61b2c1bf69fbbbdabf02c830ad"],["tags/Style/index.html","3182483cbc310be6fed76e553b2c12ec"],["tags/Ubuntu16-04/index.html","fe7a1928c6739bad6a4faf65233dbe57"],["tags/VO/index.html","11279f1979fbf22e6e89029341df7705"],["tags/Vue/index.html","49b2d95b9df75cec62e77dac58d4d2f1"],["tags/Workflow/index.html","7d3a50059e8796f62c1e3881d82b6a31"],["tags/X-Frame-Options/index.html","6258079104d8755854ce59f20c13ac70"],["tags/aggregate/index.html","ebdb18338b58cbef6119296610d302a1"],["tags/alter/index.html","8b5bdfc7fd49c8ab46981628fb055d39"],["tags/annotation/index.html","69d3a35377e79ea0852e07f6d2a53ea1"],["tags/args/index.html","1aa17812a6aa79862593939e49134fcb"],["tags/buffer/index.html","991403a64409839d907351d1dffd20df"],["tags/cache/index.html","65abe836dc4071ef37fa8a901389f108"],["tags/change/index.html","bef2475670e0c12ffe83e20c63ffa78e"],["tags/checkout/index.html","4c748632ae98020e37ca2441d81bfa05"],["tags/cmake/index.html","cc6909c5cb2c8e9172dec1152903a23f"],["tags/collection/index.html","7d121b5178897a96c285ae682a7f64ed"],["tags/component/index.html","cf7f681eb5996915b3d893e9c3f8599d"],["tags/computed/index.html","eda40f86dc1b8bba0e64bbd1dc8ce127"],["tags/create/index.html","e5dfe94f01504dab7886be410a98c4ba"],["tags/database/index.html","5d940c3e662c76ef6b9fbb6d1a17495d"],["tags/df/index.html","01c08defd9f472e42bd55d40f171225b"],["tags/diff/index.html","31047ce01bf662907fc14f5cef8a6d26"],["tags/driver/index.html","321e25ab7b5b9479d064afb48459d39b"],["tags/du/index.html","65de07368891826175c4cad7704411bf"],["tags/fast-forward/index.html","ec309dec20c0ce534c39bef13cbd4f72"],["tags/ff/index.html","fb1a85cb5b9e3d4f3ba34b0a6965e027"],["tags/font-size/index.html","5ee29612708981fec6976f11dd6ae96d"],["tags/font/index.html","1a2be25013a4bd7253e148b5210b5024"],["tags/free/index.html","daf0b544d941018350e6e93cfc72ab38"],["tags/git-branch/index.html","40b0098e5e45c0662339c6a3c8d8c17a"],["tags/git-index/index.html","b1df3d002d91e7ced7da09e528070ae2"],["tags/git-merge/index.html","a6731adadc4ca65101d5db6f5a1143df"],["tags/git-pull/index.html","3fbfd48b48845191f0515a3633c1b173"],["tags/git-reflog/index.html","2aded15c4f0ab7e5aa2718bc8ddfb9ce"],["tags/git-reset/index.html","687ab10db041af8f2ccbdbea18e5b42c"],["tags/git-rev-parse/index.html","ce85ef7c4bce066dc2a7379e33f66100"],["tags/git-revert/index.html","cc67c3a1f0127d8f85d49a90cf151986"],["tags/git-tag/index.html","1a33a7585c05365de1ddf07471016a5b"],["tags/iOS/index.html","cb8a33183397f4aa46a696b3d5ef4a5d"],["tags/index.html","d8cdc37b4c286af9e74087bb21347ed8"],["tags/jps/index.html","88bdf75fdbe9250c32caa8116dfbc014"],["tags/kwargs/index.html","6bb36361e48e26b97431158e6da011de"],["tags/mac/index.html","f37d1fd97349e9868abc67c4cb3039c1"],["tags/make/index.html","a54d4dce09ebdacd57ca383b55186254"],["tags/modify/index.html","0a11725e07be0ad474e1727e9023cf24"],["tags/no-ff/index.html","5ae97fbbf6b1f7912dc2ef848baacb3b"],["tags/rewrite/index.html","e83fa504e050c32de22e708c8b388d84"],["tags/schema/index.html","a0f63804de3a59494b79a2107142d89b"],["tags/shell/index.html","8792ba59a37f366c62658297dd15b8ae"],["tags/synchronized/index.html","a8ec830982e58acdb5bb1ec39f7566f7"],["tags/this/index.html","7ed18806e7f43cf790413e45ec9b43d0"],["tags/tomcat/index.html","1e4dbd5ca7909852f7e3ffc54caa14df"],["tags/top/index.html","a32bbca7ae25555b50bc9d7878fe7e03"],["tags/true-merge/index.html","8308a32ec24f07964c0243501c381bef"],["tags/url/index.html","4fff98a2003e88ce339a07898a01fbdf"],["tags/windows/index.html","8074477b4d6b9b191f201d81d398bbd1"],["tags/一棵开花的树/index.html","266378a2e6b710da5eb2ec7ae09b1714"],["tags/主题/index.html","70ce15948b21d63b8d5e6510ef842f8b"],["tags/二叉树/index.html","b9e70c3f4c5614c98cb2c88be65a77a8"],["tags/介绍/index.html","c380c1fda819d9c08520df59baa87636"],["tags/代理/index.html","0154feba7e83bb3e388f4f66a1ed832b"],["tags/以太坊/index.html","b97922d9ce7a79c622f29ff046e097e4"],["tags/依赖包/index.html","c12988c1773cbad7dbc0a9bad72fcbf3"],["tags/修改/index.html","ae043337a8d84baa1c05a06e1eb44ea7"],["tags/值传递/index.html","1e7e1394c03443dd9d280e11d695e4c5"],["tags/冲突/index.html","e3d681a0f4f7a9201eca66c6193eab44"],["tags/分支/index.html","56a799c714f3c76f7e0b302036ef78b4"],["tags/创建/index.html","e4f307c1342d820a996af9853d211c97"],["tags/创建数据库/index.html","946ddd14ddd6a0fb6f11ea6ea65e1586"],["tags/区块链/index.html","d8e81876c2e94dec8b7da7af7d399a65"],["tags/升级/index.html","4bf3f32b83352088ab6f3c5c47d4b496"],["tags/参数/index.html","e6b482e4eaf72f807fb06e8cecc01193"],["tags/委托/index.html","3023df549066b01e3eb18b275545ed66"],["tags/存储/index.html","82529081e565ec2455e4cee69e4c390a"],["tags/存在/index.html","5772f94ad8333999ae0f69d1b2dec6df"],["tags/学习笔记/index.html","2d46f05e37f0bf9ff13f26c4d728aa3f"],["tags/实例/index.html","564b724a1333afc956741ce878e5ab73"],["tags/容器/index.html","2eab7a689e4bca03b2ed065c985e4685"],["tags/工作流/index.html","4852b027023a61140c338f2288439001"],["tags/工具/index.html","60fa167ba35535f777da7c94cd1504a0"],["tags/席慕蓉/index.html","89fd8358669643772df7a5758454549d"],["tags/微信/index.html","86488e6a8de2078136d1ccd6c1be0aa7"],["tags/插入/index.html","b8cce8f7b4840a4d8b5517ca5e8b9733"],["tags/数据存储/index.html","2768e51719131f00f88d427f5d4c21da"],["tags/数据库/index.html","e0403bb2321e4a0e059b54e8bc35deb5"],["tags/数据集合/index.html","00442fe920c662a67ae4c5f855aa93b9"],["tags/数组/index.html","12f458bb08db51cd0a6f8d9c1db823a6"],["tags/文档/index.html","d121f9494c7bd2c0b72a789cbbc262dd"],["tags/文档流/index.html","746fe11095b43b3f3854ca82d0de30a6"],["tags/智能合约/index.html","db76f1c9633d541bdb4130f75bb497b4"],["tags/标签/index.html","83e821f146065823d1e7985f5af28a07"],["tags/模板语法/index.html","b29a74959d36dd5f4ebeb3dd1484ffeb"],["tags/比特币/index.html","05d7b6f682dbd142bc09bde6173dec29"],["tags/波浪字符/index.html","76537264f4536e0963283aca1022ab09"],["tags/注解/index.html","26ef1b50c504e54c6216e905e194692c"],["tags/用法/index.html","b9789b61d9fbd0c71f3ef2e7c1af1eb5"],["tags/穿透/index.html","a24b8920ef116d19a149648b2537b682"],["tags/端口占用/index.html","ec15cac8de761da6ad8ff3f11bde9624"],["tags/笔记/index.html","b35dcf0459d587a9bdd1aed8df46e0f9"],["tags/符号/index.html","49dde8e555b366730f3d0e3e665c1d08"],["tags/红黑树/index.html","6c2ca730529ee5983653bc866cef6291"],["tags/组件基础/index.html","8ba854e717ddd60a39961abd3bd14624"],["tags/绑定/index.html","4c495d8257eed9fd6e9b0683cc6d421d"],["tags/编程/index.html","9e281e7d8e2c634e75d9d60241821312"],["tags/职责链模式/index.html","1c78784f402e5ce8588b157ad85fd5e4"],["tags/聚合/index.html","f99f9c5c5b170b1394c5f1d51ccf8092"],["tags/聚集索引/index.html","d420bb4d400f9f729f0551de01c843b6"],["tags/自定义指令/index.html","3ca646088eaba052c672252a193a0aba"],["tags/计算属性/index.html","b909bf51c803c8acf798f4a7650ff911"],["tags/设计模式/index.html","2b81e463924b60e017171d3ccd3eff6f"],["tags/进程/index.html","01543f2baba8feaff71f66393b782a43"],["tags/远程仓库地址/index.html","caedcebfd789e1363746412f2f331a4a"],["tags/逻辑操作符/index.html","41b62a7b7de867566dba99f8a58b3926"],["tags/部署/index.html","efaa5a1a68da40712c743cdaf986760f"],["tags/难度/index.html","3df7008b157454df8813966589616b45"],["tags/集合/index.html","bc18670e18171b0e0a4041fea6d50519"],["thinking_in_programmer_life/full-stack-programmer.html","f52ca98c1f79573db19d8835d6ebc35a"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","89531f1f21534cfa5380bedfc1137efe"]];
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







