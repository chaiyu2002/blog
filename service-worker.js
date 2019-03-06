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

var precacheConfig = [["Kafka/kafka-introduction-note.html","07a13d3082dbc6bb4ccf1e83caf57b12"],["about/index.html","0e781ea77fff49bb3ea21ed5df88f608"],["archives/2018/06/index.html","b866ca68557fb9044a3697369199bf51"],["archives/2018/07/index.html","9c077064c5731dd0741d75d5bfda34a8"],["archives/2018/08/index.html","f256c6aad4214cdb0aff50fbbee49b3e"],["archives/2018/09/index.html","96009ef4d1d3e9e3c58f7de3c23dd32e"],["archives/2018/10/index.html","ac0e65b4bbbeb80abb86d940b58d5bf1"],["archives/2018/11/index.html","6b7a40b6d187e6a748a69b598df3cc8c"],["archives/2018/12/index.html","449d254bc3f83bdef6ab9ae105f544a7"],["archives/2018/index.html","fa0d4efda65c8cfe6401b3f6deec97a2"],["archives/2018/page/2/index.html","c85f7aeb5bd1b454fa0df8a88e9ee13b"],["archives/2019/01/index.html","c51f222027ab7d1b196d381be482bbe1"],["archives/2019/02/index.html","6bc2304d1e0572262e101350bd1fd2dc"],["archives/2019/index.html","91389b4b62183cba2f19db7db4115505"],["archives/index.html","c1a89417cb42a04eaf7ae8b8a2637a10"],["archives/page/2/index.html","1f9851010b2b1affaae83d177da7f629"],["atom/index.html","536232698980c014dd0f02b72d73dc00"],["blockchain/base64-base58.html","03ef4efa7f62c292f6e028103f3be843"],["blockchain/bitcoin-data-storage.html","2b1d15eae3c18efea38a883e1a85ee74"],["blockchain/bitcoin-difficulty.html","a5360452103d212875898fa4b7df2298"],["blockchain/block-chain-ethereum-contract-program.html","314a95e3c24e631c243f01af83943f1a"],["blockchain/ethereum-programming-introduction.html","a280cf525cd060c3c637054f50eaa597"],["blockchain/ethereum-rationale-introduction.html","92477f8766d213bfa0f40970721b37e7"],["books/index.html","8364acfa462dccbfb19d72bef743d40a"],["categories/Blockchain/index.html","91243b90c876a79843121484f5192270"],["categories/Blockchain/以太坊/index.html","f980485148346dbb7607992a281d9ddb"],["categories/Blockchain/以太坊/智能合约/index.html","e726811b3a9756a76a031bd70118a782"],["categories/CSS/index.html","4142813847d0ba23caf5e70c378b99d3"],["categories/Git/index.html","fce85841b69fab6369bb81ecd90e7112"],["categories/Java/index.html","9cdac40f7264dfbde58a844e3232d4a2"],["categories/JavaScript/NPM/index.html","07dbc98bd7b69dda345ae237a564e633"],["categories/JavaScript/Vue/index.html","b958ae7a84868612dbc279a1635f5475"],["categories/JavaScript/index.html","bbc8f89d363e9567e97d9c12f9ca7995"],["categories/Kafka/index.html","9a085b96a06d67f6f087ff2b8a19ad80"],["categories/Linux/Shell/index.html","22c30c5a64c50adedbbd733855545436"],["categories/Linux/Ubuntu/index.html","90bc7bf172c85609ad431bcc1a8ea54b"],["categories/Linux/index.html","184f6047b23d56a0f94069d9dc119950"],["categories/MongoDB/index.html","3a8cbbd0dd8b7d6e5bcb0b21235fb8d8"],["categories/MySQL/index.html","917712cf60b900ab485081f5d6a7f024"],["categories/Python/index.html","8bdef09dba6b9f8526ede9802ef27c5b"],["categories/iOS/index.html","c8188e91714490beee524be8c709ae85"],["categories/index.html","39807a5046f06d6b18821fae9688d6d5"],["categories/微信/index.html","714dbdd30d29e21a8eff97af68981d2d"],["categories/杂记/index.html","3af0c5d1db32506ac47a93da811e661d"],["categories/程序人生/index.html","058faa66c71d677027501fe0eba7267f"],["categories/计划/index.html","92ff996936655dabf88547cc38ae1c19"],["css/css-font-note.html","6d7e220f5f106da8d2e46bd88d06daf2"],["css/css-normal-flow.html","3d8c05226b8509874cbb9a1b1615f257"],["css/css-sass-introduction.html","6ce0e0af57c5565be6eaa5db6d685165"],["css/main.css","9cada104b154d539406dca2477b42e72"],["drafts/configure-multiple-vue-project-with-nginx.html","e11742dbd508c4bb17979390511ea4bb"],["drafts/iframe.html","5370f15aad0b662d549d650948bcbaf7"],["drafts/record-re-install-mac-os-10-12-6.html","b62ecd051c58a0b7f640b89ce64bff65"],["essay/note-ximurong-tree.html","d10b8d1dcfabcb6792ff8311065c4d47"],["git/git-DETACHED-HEAD.html","efe5b0474dc16c8c32eec2adb9776d54"],["git/git-branch.html","acd89d09621d2dc1cd803bf49a180878"],["git/git-change-server-password.html","a0eb770d25a852d02da1271bbb1734e0"],["git/git-checkout-1.html","09f25adf9f1fe0b5d3547b009f23741f"],["git/git-checkout-2.html","d9881b2f3f0537b09c9d69ffcdde8c92"],["git/git-diff-m-symbol.html","4da2a24e2205cabc561dfc43f5e78d8a"],["git/git-git-flow.html","c3dfc22ae7cfe8418137bface3c9d1c2"],["git/git-git-merge-ff-no-ff.html","ea72f61f35e01bbfaed9878354414918"],["git/git-git-merge-true-merge.html","a67dd4c5b3dc16fac25d26e58de4a363"],["git/git-merge-choose-one-side-code.html","6e98ce8a0272a9b44b7ef57f3a9a2b12"],["git/git-merge-exist-conflict.html","017aa817ce924026224a9332b0a75893"],["git/git-pull-1.html","888ac13899ee990bd46a5d9788ac74de"],["git/git-reflog.html","b81be21a22d064435f01ce927e9edb82"],["git/git-remote-set-url.html","558c5f822b672d54d66472b83be37fcb"],["git/git-reset.html","6923436c83392842dc620bf92ecc8e64"],["git/git-revert.html","69391bf5ec010369ac42f29e959ace3b"],["git/git-tag.html","e8e66932ca0e83cea7256738ff9ab9f5"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","9d61d04bee4d57aab9cd3b0102d75865"],["ios/ios-oc-kvc-1.html","de6ee4266c4c9b6885721b7ecf5dbd50"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","b62744f1846e5b3d1d21b2e19e04e9db"],["java/java-deploy-resource-folder.html","3595e5befdf36b48188123b80c6831ed"],["java/java-jps-note.html","2159facb6bbcf185da2edeb85318f9e6"],["java/java-pojo-bean-note.html","ab075f3b65ffc993f721d10b019e787b"],["java/java-shiro-note.html","8257f135b047a6ddd348eca6c8e37d54"],["java/java-spring-autowired.html","221221ef3b9b1fea31c37c6efde7584c"],["java/java-spring-configuration-bean.html","363caedf1aaa2f41ef06f4948b1e5655"],["java/java-spring-restcontroller-note.html","bcf3de10d491be4225ed50bd4bb9aeec"],["java/java-springmvc-X-Frame-Options.html","a87ce09cf97f4d6409d2f58f7b62a087"],["java/java-synchronized-note.html","610a228ce216cd6d7eaeb44a93a74d21"],["java/url-rewrite.html","414800988583dfb54d7a5578627c00ce"],["js/js-logical-operator.html","ab82ed8159313ebdf1a2fd098ff4d942"],["js/js-npm-symbol-caret.html","2f836ccbd4368adff0d8d67a1b4cbddf"],["js/js-npm-symbol-tilde.html","d66b3c310b35b89d42d0223215d51eac"],["js/js-this.html","54698fd5892c6b6bb6d70e5dad2ed483"],["js/js-vue-note-components.html","de19b8a851c066a08844becfe81b5479"],["js/js-vue-note-computed.html","4571b3131a99892fa7c7d23dddf0c211"],["js/js-vue-note-css-style-binding.html","5f5d2efe2e52018eab2d148519312b55"],["js/js-vue-note-directive.html","900854b18b50e2b33f8e66b78318a577"],["js/js-vue-note-instance.html","f5c1d93b03659f785581aa232b595c15"],["js/js-vue-note-introduction.html","a14dd4b7f08306dba8b7bf92a504e4b0"],["js/js-vue-note-syntax.html","b4c911cee19a8e72b39c8974454a0031"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","394385b5d29d538af961ee032b1846ec"],["linux/shell-command-df.html","2b4eecb76abcf73d0b2799a90edbe487"],["linux/shell-command-du.html","c31c8dd7791e895253f94edc3b661c83"],["linux/shell-command-netstat.html","7d1b8ed39cf4a6f5ae8942c562ba581e"],["linux/shell-command-sed.html","59597b3ca0366f26cedb8833c2cffaf6"],["linux/shell-command-tar.html","b12b7dbe217e30507b5f3b5ff3e44120"],["linux/shell-command-top.html","cc21153828f9d266e4826893dfdd26e5"],["linux/shell-command-touch.html","d211c7f26a461cd3efbb5149050c4f6b"],["linux/shell-command-which.html","04ab996f5b03b23b98f8af104b87d671"],["linux/ubuntu-user-add-delete.html","b6a5f4769fb7b048d7558ecf78a430ec"],["mongodb/mongodb-collection-aggregation-introduction.html","b11e345fad5f9fb5e126afe4a96e86a8"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","0568c4db167b2e900281b47903e54614"],["mongodb/mongodb-collection-create.html","f2a3ba844c5f4d65edd68cfa4f7e8c30"],["mongodb/mongodb-collection-delete.html","b1fbc32f2530eba6e6a1c89560b5bfa5"],["mongodb/mongodb-collection-find-1.html","f63453fac4b8b4f2b7c2b9cee7268aa1"],["mongodb/mongodb-collection-find-projection-operator.html","6ecf3984fae0c5ad5659ebfb388a63c4"],["mongodb/mongodb-collection-insert-1.html","d41271adab0b4a5d6f279d1871cee6d2"],["mongodb/mongodb-database-create.html","472b3d7a8a546df922080fac35378cd3"],["mongodb/mongodb-java-driver.html","19dafe265c5944180f219fe81cf590f0"],["mongodb/mongodb-schema-design-note.html","aa3189187ce8ed538ad5e30377702fd9"],["mongodb/mongodb-study-note-1.html","7cdb0202c341190ae36783b435cc6b90"],["mongodb/mongodb-study-note-2.html","77728a37774b9f0480b7e57206def6f3"],["mongodb/mongodb-study-note-3.html","cf8d80692a5d742fb477e1257f06dd85"],["mysql/mysql-ddl-handy-book.html","2ab7d1b3e888220b00a51420ad9b8db3"],["page/2/index.html","cab2abedfdf9e4e645623aca2b20ac43"],["page/3/index.html","37821a9a483c80d18657df1092c3528d"],["page/4/index.html","9d6702f71b4780551d578eb5973b284d"],["photos/index.html","fd1b45b796a97416ad5c80304560f1c7"],["python/upgrade-python-under-ubuntu1604.html","a8e0640f28cbcd52e44119155851e4f2"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","220f56fd7c620eaac971b4eca7268391"],["slides/index.html","9122b04cc7fb4776bfcfc293ae4860ec"],["tags/Autowired/index.html","73a477455c6ec55d797911b27f47511a"],["tags/Base48/index.html","82b49c65615225b295b50de56f07bdbc"],["tags/Beans/index.html","d9fabeb1bee37e26b3aa06c972e8a64b"],["tags/CSS/index.html","cbdb8e2f0c49ee575de4ce170db4559f"],["tags/DETACHED-HEAD/index.html","1fb257f3de80177162b4086f9de68dc6"],["tags/Git-Flow/index.html","304c0ad862c02c099298c56db86453a6"],["tags/Git/index.html","c7f74128098c3030b8bc60f61b0943e1"],["tags/JS/index.html","bdf90a81120244722493efcfa97e4fe6"],["tags/Java/index.html","beba4446d87564e34b97f606089046ad"],["tags/Javascript/index.html","5c7a96fbdd6f0815f65cd6e721f5d389"],["tags/KVC/index.html","521c08ad74330fd7fa71b655deca4931"],["tags/Kafka/index.html","f5cbf667fa1eee4f282a28d4cbd391aa"],["tags/Linux/index.html","5114f7948ee6a531a0a10cd65b42d320"],["tags/M/index.html","5977a57fef26d33f4274140e4775426e"],["tags/MongoDB/index.html","ee08dd698b86eebd6339c456dfdd2902"],["tags/MySQL/index.html","bf018507c2e1d9eb7e5d4eead620bcc8"],["tags/NAT/index.html","57ea68d4a562b48c04cde74f23719a74"],["tags/NPM/index.html","8dc8471ad6d6b0dbd45c81eeb085ef3e"],["tags/OC/index.html","9ac730956c2f929725711f63cd7fd570"],["tags/POJO/index.html","cdc900bddbe2386900721acbc9ba40d6"],["tags/Python/index.html","41f791094221adb44cd5f576101c3fc3"],["tags/ReactiveCocoa/index.html","b59e77aa38ab97a2235eae6232ccd3d8"],["tags/ReactiveObjC/index.html","0ea0091855edeb1b72e586096ccef805"],["tags/Repository-not-found/index.html","07be6291bea9b24f1a21c1a9c56f605b"],["tags/RestControlle/index.html","b9472f93bf65c1be2b061b9279bf9e9f"],["tags/SASS/index.html","b709fbbda6918ab253815f37f588c631"],["tags/Spring/index.html","7bfc0552c037e0b428c4ed0b90a764fe"],["tags/SprintMVC/index.html","771e3a5fcdc1a7df5f5dbc6175174d4c"],["tags/Style/index.html","5369b762d3c434430b7f9b78fd5aa1c3"],["tags/Ubuntu16-04/index.html","ffa9bae765a7101f340f066d4e3cf21a"],["tags/Vue/index.html","b963dc658c4e478e13528bd3c55d062f"],["tags/X-Frame-Options/index.html","ed959a247772406a5e019a612ce9f9cf"],["tags/aggregate/index.html","a68a7d5fd65e4ab37167ca8fba2dab71"],["tags/alter/index.html","daf1608e221e9f3b48d5a851e42fc35a"],["tags/annotation/index.html","dc0c7b678b39032b7a3fa62c848cb133"],["tags/change/index.html","5c584f0cf775ef15c8f504f41c49a1ef"],["tags/checkout/index.html","b184776fd6ba1c87a6daaee92d736b49"],["tags/collection/index.html","d546e5446d4d680a28d6ad91dd6fb393"],["tags/component/index.html","10096dafeccfb5340d6c2fea6462e64c"],["tags/computed/index.html","367e5bda8ee8e86916f50cac7159debe"],["tags/create/index.html","7f46380303aab7682abcc45fd3b6ed1e"],["tags/database/index.html","2b932ec563b1bd7665e01599d4ca0404"],["tags/df/index.html","7e5a2fd509d9fe46bf97683edf6bbc99"],["tags/diff/index.html","293608000b3a62654b2760882fe7558c"],["tags/driver/index.html","b4d1dd115cdde879aa5221c292e6bc57"],["tags/du/index.html","3b17781e22891a7f2767f147639ff05b"],["tags/fast-forward/index.html","09579026465b22a7c16296343ba7ac51"],["tags/ff/index.html","7593c7fa1e3508b12b5cb9afdaf89624"],["tags/font-size/index.html","1542ca0c86d44191b3c35d6b802f6646"],["tags/font/index.html","1d2564319e1c0be8e04438eda8f68d4f"],["tags/git-branch/index.html","337e1b0ee81e600e77ce5c7dc759dfda"],["tags/git-merge/index.html","bf60608af5fbfa194b1336a0041a3365"],["tags/git-pull/index.html","bf595d9e060e80dee369ed124ec119d9"],["tags/git-reflog/index.html","cf38c73e6a814534c38dddf551db88a6"],["tags/git-reset/index.html","80a6a1a7404474d72d24e6760e7bd812"],["tags/git-revert/index.html","d3a888fb147273a3e358b22cc5ce3ad8"],["tags/git-tag/index.html","c9fc6120ded776221ee761d486d2d404"],["tags/index.html","d19e3409239ce9f71b2f14a57e5b8cbc"],["tags/jps/index.html","d5ca7f1b5e311f8607185181cce433f2"],["tags/modify/index.html","20f489cef4ccc317a2897d137b1d5370"],["tags/no-ff/index.html","93282f1aa8f57c38c0fa533895fb7376"],["tags/rewrite/index.html","547264eb04f48187c47ca054757e06c7"],["tags/schema/index.html","0e508eebbfbe13d6b5332ea1968ef764"],["tags/shell/index.html","4e34c34060f479199c715da5dd5c9bb3"],["tags/shiro/index.html","52f4422e62be8bbf063b74336b1dae4b"],["tags/synchronized/index.html","48294d062c94b6dcb12dbb94d62d681f"],["tags/this/index.html","6e5ce09ff6de15e6ce154ce8867e5a21"],["tags/tomcat/index.html","3c2163aa7f4f15350427cb1dcb92642c"],["tags/true-merge/index.html","71536635a0d2e42296fc1ed7b7cbdf53"],["tags/url/index.html","437e1d888842cd4b129b00ad7a8e7100"],["tags/windows/index.html","31d2d4d12bcbcf75788dd8473d4d7b19"],["tags/一棵开花的树/index.html","8eaa0d62a0709664ec59cf6df06c2d0d"],["tags/介绍/index.html","08f76eca2a1bf4fec3080a026fb53fbe"],["tags/以太坊/index.html","1c103f8a47073a434c840626faa497ab"],["tags/依赖包/index.html","bdb3a76dbd0e30ffdd37aa69c003033f"],["tags/修改/index.html","25f472761e3575a1157d5ed16d5c15ae"],["tags/冲突/index.html","7f80569db409ba2977a0d4cdd9a57da1"],["tags/分支/index.html","f90d1b714b3618a45843445e8f0971f1"],["tags/创建/index.html","50e152623d5128c6ad28de876e7da890"],["tags/创建数据库/index.html","9052fc14cf5356a3af1cb627d0b0add4"],["tags/区块链/index.html","2ebac45e1c1feed586e65babe4ac388d"],["tags/升级/index.html","8f9c5a6e7998e8791d97ba83ac3ce630"],["tags/存在/index.html","39f661b3f2d4c75b3e042c74e13305ce"],["tags/学习笔记/index.html","fccd74885d481ad551580d7b43cba927"],["tags/实例/index.html","3c64d2d1c31b79d6d5b1831eaa3afddb"],["tags/工作流/index.html","98a3eca07c163093bdaf8e6a51620f72"],["tags/工具/index.html","563ff372a7b03ebc11c7360600101174"],["tags/席慕蓉/index.html","6d2fca95bf90d0917c800e543ba14015"],["tags/微信/index.html","f38dba413a7715865f4bd80b4d70bea7"],["tags/插入/index.html","a5b48361b91652691883db731440a935"],["tags/数据存储/index.html","5e207184f766498bbe613407566ae942"],["tags/数据库/index.html","b0a7fdb69aab6333bec328075b6843a1"],["tags/数据集合/index.html","338f547ad16426d2befc4206f54dac47"],["tags/文档/index.html","b91294aa0fd56da193f753076e27b7d6"],["tags/文档流/index.html","594356d37c35072bf4b25e7f57b50cc1"],["tags/智能合约/index.html","65a3440bdecca5c22752606ef3bf2aa5"],["tags/标签/index.html","be185a35ccb4e15b76912233c1f5e440"],["tags/模板语法/index.html","1a3636a6410efbffd46712aaaa4aa146"],["tags/比特币/index.html","3a881dc56e1512daa38a63f493b35e8e"],["tags/波浪字符/index.html","90947af738a4a52b9d258d905d855d35"],["tags/用法/index.html","8ca19142a9d54903de960bc1f693cf3d"],["tags/穿透/index.html","6730765e7ae3fe3b6a40bbfb8aaf85a1"],["tags/笔记/index.html","37ef7e6b83cc7b18e53a1efccebef478"],["tags/符号/index.html","2f6fe640d5175b39b6e0199d47e408c8"],["tags/组件基础/index.html","6ec9d0beab377663e1dd18bb7f10e0ef"],["tags/绑定/index.html","58a51beba1080b30a55eb3fb69bb976f"],["tags/编程/index.html","9d2b94286f34fabbaea403f829b0dc2f"],["tags/聚合/index.html","3136525225775fca498f254e80d6b7a0"],["tags/自定义指令/index.html","1c7969853b550bc94dc0a1a7595b0784"],["tags/计算属性/index.html","d5fcde7f6069df278936f16114455703"],["tags/进程/index.html","bca3abf5f87154e17f222370f3bc3218"],["tags/远程仓库地址/index.html","9cac6fe69223333aedfc6ca7e02d817a"],["tags/逻辑操作符/index.html","ad33bc57cdfe4b2c67513aa56742fc45"],["tags/部署/index.html","c75ae240f963e167b6a8f1cd5541c376"],["tags/难度/index.html","c2b99978211765e66c41146b0418fb9e"],["tags/集合/index.html","f2eb65e2a20c39258c059059a6a97485"],["thinking_in_programmer_life/full-stack-programmer.html","e3f57a0e7076514fa54640bd2c757045"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","7d519256d4f08f7953e45cf1d26f96c2"]];
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







