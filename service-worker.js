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

var precacheConfig = [["Kafka/kafka-introduction-note.html","2dea8ac31d431a22205dd9414ceb9bf4"],["Kafka/kafka-storage-principle.html","4c9d8f905e7b101283eb2cef19c2b3e5"],["about/index.html","9b3a216a5d3c58365e42d169642cb0d8"],["archives/2018/06/index.html","2ee55888dacacc0906f3204d9bf52a21"],["archives/2018/07/index.html","0d8524afa0178245e20d8c8de4ec29d1"],["archives/2018/08/index.html","8b62ad9bd22d4fc27aaa010d84ae0f13"],["archives/2018/09/index.html","6fcf2e50279ee57e7c6a2956a1a9ad9d"],["archives/2018/10/index.html","4cbf508e1b71de814c015c67f6f97d68"],["archives/2018/11/index.html","b00f8fe2ddc4df42730e3d330031291f"],["archives/2018/12/index.html","6b049d37f77eeeffa32e9580a9fd6b2b"],["archives/2018/index.html","43141d0cd25dcaf19b80db7458b60d0b"],["archives/2018/page/2/index.html","daa005c48e9b69cfe479a755b69819e2"],["archives/2019/01/index.html","6d7fa4ec1207fc30d17f34a347bc7eab"],["archives/2019/02/index.html","2f8098f6bcd0ebe2942a7be56896770a"],["archives/2019/04/index.html","17cdb97405780e3107ca03f32ebff9a8"],["archives/2019/05/index.html","d9dce556bd31b532d2646b8bc10616e3"],["archives/2019/06/index.html","be723e06bd4a1c97fbcfb40f68bd7dfc"],["archives/2019/07/index.html","657cd3d8468373c155c36cb5b08cce8e"],["archives/2019/index.html","97222fb7c3a9bdefd0909297cad4b08a"],["archives/index.html","5fadd919be30f9622bc36798c1c4f0f5"],["archives/page/2/index.html","e09337c39ab19e41924a8d1e38e56330"],["atom/index.html","d59bd07360e2cfee900a21e97ba04543"],["blockchain/base64-base58.html","a78b9bc15c62463f14839162f2cd6013"],["blockchain/bitcoin-data-storage.html","d2c8259c62c9dcc200392945cfac7e78"],["blockchain/bitcoin-difficulty.html","31544def96322951ab9d722cbbb639bc"],["blockchain/block-chain-ethereum-contract-program.html","8454b584db82e1e870712a659056e0cb"],["blockchain/ethereum-programming-introduction.html","9ebe41a130cbb0e0ed594ac3aacbc132"],["blockchain/ethereum-rationale-introduction.html","d90d0dd0da139adfd3e5062094b4cc17"],["books/index.html","76640ef7058a86bd13b87b80eab0c5c4"],["categories/Blockchain/index.html","bfac47a480c46143013987deb1d0758e"],["categories/Blockchain/以太坊/index.html","46d08bfd78830be920d2359be608b0ed"],["categories/Blockchain/以太坊/智能合约/index.html","80258e15e5ee5a943d66b240690a0fe5"],["categories/CSS/index.html","556e7a406f89ac48fb582693ae978347"],["categories/Design-Pattern/index.html","c246fed8d83d64584105ce8dbde585f3"],["categories/Git/index.html","aec958830535643ce8f3a5ba0fb9ac9a"],["categories/Java/index.html","05fa56b3241aa5b5d907945988b91762"],["categories/JavaScript/NPM/index.html","8a48df050b965d592f250f84a0bf39db"],["categories/JavaScript/Vue/index.html","fd7c45f496376fa631ea9754289dd1d3"],["categories/JavaScript/index.html","2d3cf75ba4de3c4d493b6b537a6ad8c7"],["categories/Kafka/index.html","8d49a5197feeab6e99915d7768d2b607"],["categories/Linux/Shell/index.html","636ab42424a673c0db15ca61c43dcee3"],["categories/Linux/Ubuntu/index.html","e5df88b7a854ddf8da4cb491fa7c25c3"],["categories/Linux/index.html","78576ec0153c01da814dfab3422eec95"],["categories/MongoDB/index.html","406f4c49e5eb599e57df3d55dcfc042d"],["categories/MySQL/index.html","6fc50eebff4e07585f844db5cc7d89e4"],["categories/Python/index.html","9ca8c9475c4378d67091ce5c1eac8d92"],["categories/iOS/index.html","dc9710a617207dae4437d8c9dc09c3db"],["categories/index.html","0db7c60f7c7f2e9b3b8608941f1bc587"],["categories/微信/index.html","9457a5ecb40d6789e81f0b72f3b58358"],["categories/杂记/index.html","ebeb9f77b7f32aa9591f8507937a61ce"],["categories/程序人生/index.html","8ceb08c8790540a9ec1b25bcdefd84b1"],["categories/计划/index.html","942e8f5344aebb565f74658df9341c9b"],["css/css-font-note.html","13d83422a0c3592323f26c09e18979b4"],["css/css-normal-flow.html","e845389a2da12ee514d1c585fc44facb"],["css/css-sass-introduction.html","01f1cdf2718494200292202322a95930"],["css/main.css","c291af01f2f60b96ccc70f69f8a8b54f"],["design-pattern/chain-of-responsibility.html","dc0452ce968e552a70fe9823ec513b2c"],["design-pattern/delegate-and-proxy.html","6f84064ecf982ecda3183c96d169c228"],["drafts/configure-multiple-vue-project-with-nginx.html","4cc317656bf97e6613f7a29ce80d40f0"],["drafts/iframe.html","6f36c906fd1ff3712df3d8e3cb96d806"],["drafts/record-re-install-mac-os-10-12-6.html","e6c30e019a45dec134de52c0c6050d9f"],["essay/note-ximurong-tree.html","9bde64cd726c8da0249a9caf860dd36b"],["git/git-DETACHED-HEAD.html","c8cdd736a479b8eaea157804fb29f237"],["git/git-branch.html","4b227cec0ce026e1706916a3cc4ad0aa"],["git/git-change-server-password.html","e9ffbdca135b1ef4adc82dfc0a2ecaf5"],["git/git-checkout-1.html","14ad61736cc9837ead6d8c02b68506f9"],["git/git-checkout-2.html","0a1a5bda2df054e66ff9cd4bd5fa1cf0"],["git/git-diff-m-symbol.html","b487b85200a9e0a657fcc468cec70720"],["git/git-git-flow.html","2a3e4e6b6efee4b34dad1867c5ea6e92"],["git/git-git-merge-ff-no-ff.html","e129ecc45932e3703c02950d88950f08"],["git/git-git-merge-true-merge.html","ef6efeb1ac0c273f1d8161e6a338093b"],["git/git-gitlab-flow.html","0cbc7b4799b1d51103247873c5a17d13"],["git/git-index.html","1ed8f7ce3193f88ed8279ba7848833d3"],["git/git-merge-choose-one-side-code.html","f0967f149b56f93bbdf2033531290d97"],["git/git-merge-exist-conflict.html","c4b42d4fa53431e2602e3c108af66406"],["git/git-pull-1.html","3e8d45f66b0993993499232d80cfc108"],["git/git-reflog.html","faf22ae8ea3dc0a80efa60ec883e92e0"],["git/git-remote-set-url.html","b3027ea803c426ba1fe7b8f90d10eac9"],["git/git-reset.html","3bd65c91e10c72915325b9a57920550c"],["git/git-revert.html","48c5af938d3b8490e9f2951835407db7"],["git/git-tag.html","94eb3fa329a569b0651a7338956dbcb1"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","f2d58689b82071f94993fe73b3f4f79e"],["ios/ios-oc-kvc-1.html","a5db59288aa6d6d2ce655fa68d73934a"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","d65add2f8fb955071b74fe5e97687808"],["java/java-annotation-request-response.html","cad32e82e8fa57c31a83be5d6b0771be"],["java/java-array-and-container-note.html","cd8be62a68243b0ed8963439c7cb8230"],["java/java-deploy-resource-folder.html","140cc9c5523a6054157074166ebc3bdd"],["java/java-jps-note.html","2a16ac7d99d47a41e0a0d640fb887001"],["java/java-pojo-bean-note.html","e1376d78aef96bc69918eb93d75ded31"],["java/java-shiro-note.html","e21da33b2c21fd4932324795c205fcb5"],["java/java-spring-autowired.html","e59f1e2a8da33b7f32d3fe4a13c6fefc"],["java/java-spring-configuration-bean.html","b1ccf3225c5848f0c54234417abf4812"],["java/java-spring-restcontroller-note.html","825d5b11bd4988e8ec4d065982a6830f"],["java/java-springmvc-X-Frame-Options.html","b15d5b96fc2c15f4e57cd0ba7f23f353"],["java/java-synchronized-note.html","ffd79a70a9e7f90e0dfc7e8cce2911a6"],["java/url-rewrite.html","8fc41cef4ce4eca65eabb896f593737a"],["java/url-value-pass.html","7d97c07f1cee21b5617b9fc511b8fbaa"],["js/js-logical-operator.html","4073c733563ebc7ce9d129332916f699"],["js/js-npm-symbol-caret.html","9bef0a5809bf2fa352cd9228a54f2d34"],["js/js-npm-symbol-tilde.html","4148d22a6246a715c627134c3db1829f"],["js/js-this.html","3ed08f0ecc7deb542f84e8a8e9a6a756"],["js/js-vue-note-components.html","744a25142c7385ac3c2209e5ae3ae895"],["js/js-vue-note-computed.html","2589bc6518c5766f669757423dc08d88"],["js/js-vue-note-css-style-binding.html","9b0b1d268d2b8acdc852b7f361e704b3"],["js/js-vue-note-directive.html","8d76827cb0af0903e84dab417397f3be"],["js/js-vue-note-instance.html","69f3e9301bd903fd5c7c7389447fc561"],["js/js-vue-note-introduction.html","1849f9e30a7f05a2472d824fbec29206"],["js/js-vue-note-syntax.html","b589c6d578e7a4646e65b7619c4338d8"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","6d12709df49bb0cc7835eb19f81588ee"],["linux/shell-command-awk.html","66ed5da6b86d32dacc8425df7128c0cf"],["linux/shell-command-df.html","ac0044c68809fb97fc12bef5aa34f61b"],["linux/shell-command-du.html","beab3c0010996f101644aff90824ce74"],["linux/shell-command-netstat.html","0700f79bde2f39564f3a6cfcff4a7783"],["linux/shell-command-sed.html","7cb2aaa4a96d60d69d2177af219bf29b"],["linux/shell-command-tar.html","5fcdb09947ee7313617ac21a30a90c80"],["linux/shell-command-top.html","ca4679ec1387426f2581708906f75642"],["linux/shell-command-touch.html","b4c8f224004c83cf42586486aca2446f"],["linux/shell-command-which.html","b22957b028c19490dae5813034e6a5e5"],["linux/ubuntu-user-add-delete.html","6d9ba93b38b2ff385415cc9d8a5ad264"],["mongodb/mongodb-collection-aggregation-introduction.html","8c2623a18c58f0a08ed4d7f7297ac939"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","dd9392432193170ed95849ea6a99477e"],["mongodb/mongodb-collection-create.html","c9b7989cc9dd7974cca14d5ae5eae3fa"],["mongodb/mongodb-collection-delete.html","2d49268e648c01fe06bea4cb51a15871"],["mongodb/mongodb-collection-find-1.html","b9645f2b18915d83dc84fbcd66a364b8"],["mongodb/mongodb-collection-find-projection-operator.html","3c83e6696e9b1986e0b513d32b0e004e"],["mongodb/mongodb-collection-insert-1.html","d391cc0ffe310cbb11b2bde7c40549e7"],["mongodb/mongodb-database-create.html","61f9a11d4526e5dd7b40a470c4b52b74"],["mongodb/mongodb-java-driver.html","315eac54dba15de572c0276a0f4fa9ec"],["mongodb/mongodb-schema-design-note.html","69fcffe0a1b24952af0c1162828f96b7"],["mongodb/mongodb-study-note-1.html","35a4a1e8606246ad71454a339113dd98"],["mongodb/mongodb-study-note-2.html","1a680c71d16209589a8fee2837bf4672"],["mongodb/mongodb-study-note-3.html","b647a199868e12338fd82ad596c8728f"],["mysql/mysql-ddl-handy-book.html","7613c2888b5ff184e60263edaccc1af8"],["page/2/index.html","7cb38cfb0dc21504dc32ab34dd0f01c7"],["page/3/index.html","bb2d48584e26c65c0919dc15f1cb2e9b"],["page/4/index.html","5377c6a5437ca7f81892d43c007f0a1a"],["page/5/index.html","11827568454dd99f90faa8a56e643ce1"],["photos/index.html","5d9b8849590dc14a0937213b9dcf8100"],["python/python-args-kwargs.html","d8393908737741883b533e66cc600f00"],["python/upgrade-python-under-ubuntu1604.html","f509d41873b8cbd8994e96e26944d12c"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","1bf3ced94f05889cfcab5b54a21fbfde"],["slides/index.html","f5dab3e8e4970bfbc8c9805baba7a4c3"],["tags/Autowired/index.html","d8753524c82422aa901472f8fb9d1637"],["tags/Base48/index.html","5a070858924c1fbedfe0a6086434f518"],["tags/Beans/index.html","f4963e1543a17632ffe7d7b8bb14bec5"],["tags/CSS/index.html","46eabbe4ce5d99c241b3a4f06ba1010f"],["tags/DETACHED-HEAD/index.html","66781fbba369ac228ef852a6320d3623"],["tags/Git-Flow/index.html","2c33bedfb648d072eab1e39e57656f6e"],["tags/Git/index.html","7442743e76c5971cf86657aca99c521b"],["tags/JS/index.html","17abfaac7e882471c83ebea84faf8d03"],["tags/Java/index.html","9151e0aebfaf1e2d9a3f601e5320434e"],["tags/Javascript/index.html","dfa0e0d1bb6a2502a22f65f212406539"],["tags/KVC/index.html","f51cf623e97f4a30d92fca908fd7c20d"],["tags/Kafka/index.html","641e11f694e816c4f391f982fda6684b"],["tags/Linux/index.html","385195dbc4aaaee5f94a16f658e8082c"],["tags/M/index.html","9a736071b4e3feb52bbdb3cdfeac5084"],["tags/MongoDB/index.html","5b2cf01189144eef05876cd8a12cbb44"],["tags/MySQL/index.html","ee48925af0b51d5e1641f60ca27cc639"],["tags/NAT/index.html","d69d75c5ff63c0d1797c51ca688bb26d"],["tags/NPM/index.html","0eda7c1525f36d983c99adc131a5e861"],["tags/OC/index.html","0a00518bebfd72add9502ecb005f4ce6"],["tags/POJO/index.html","bdea3d40fcdd522b2d672d3455854379"],["tags/Python/index.html","86a2dcdbb53a7a8e6847550ba08790e3"],["tags/ReactiveCocoa/index.html","6bc3dbd05c5c92772d3a165513bfa8d6"],["tags/ReactiveObjC/index.html","58f27125f78e5d395ce706f6ee4792f4"],["tags/Repository-not-found/index.html","6cce87c76a44303b0fc6306869cce8fc"],["tags/RequestBody/index.html","181423204495e95b1fd1ef22e0f3296c"],["tags/ResponseBody/index.html","041ace4a1e806c271df1c85a83ea760b"],["tags/RestControlle/index.html","71b093ccd38281a67ff4eee9f309ec75"],["tags/SASS/index.html","ec2351a5e254a450e6cc476b6cb4b92a"],["tags/Spring/index.html","bbcc12852bb0e17ed4d8cc6c875d8acc"],["tags/SprintMVC/index.html","2808a99a840cd78f5a73c814bba56092"],["tags/Style/index.html","32e53129ee8f35302d1e07168599c2c5"],["tags/Ubuntu16-04/index.html","5e9e37275de170cccfe83d3cd2dff6e4"],["tags/Vue/index.html","5ddb752b9db9709e12bb10b0d894add6"],["tags/Workflow/index.html","896e55d3ab9ed6d09001629f9531e78b"],["tags/X-Frame-Options/index.html","664d9103ac5af6bee35becd187e074c1"],["tags/aggregate/index.html","bd6b1b54dff86f267a09fe0327f9c22b"],["tags/alter/index.html","16f0479d274c0af6c1a0aecbd27c365d"],["tags/annotation/index.html","0fe728c5b9423c5afa2240d10e98e678"],["tags/args/index.html","f832e99be783c1545f5f26fa4e37d9d6"],["tags/change/index.html","0323855847f7c220a7d888f02653fd59"],["tags/checkout/index.html","94cf0dcdd5ab675ea22ce201937682a5"],["tags/collection/index.html","703b0f6706ce83d5c47f8fdb845d9f5e"],["tags/component/index.html","acf2f2a4a680e593af326531e0c0c81f"],["tags/computed/index.html","b6f40d5763d191bbd17a5eed5522ebf8"],["tags/create/index.html","8dff52600e223c7f4870dd14185e35b3"],["tags/database/index.html","c64b40462d31d998f58deb15b5685bc1"],["tags/df/index.html","f24bf80007afd096464d5c0bacbc38be"],["tags/diff/index.html","44096778efd664a8478a777285b5c499"],["tags/driver/index.html","188cfd975d5751fd6e19db67f4abc6c5"],["tags/du/index.html","50330453269df30ce31ab2a2a5292726"],["tags/fast-forward/index.html","eb251033b6dcdb615c6d3baa2e5ff458"],["tags/ff/index.html","512e52ad08d49413b3e43485618665e3"],["tags/font-size/index.html","9e25a06531248d6615fe4d803b5d518d"],["tags/font/index.html","cefa4d8e0dd3ebce1b8b14ac1a7eb706"],["tags/git-branch/index.html","7f341673d9705b2f056fdcdce1552093"],["tags/git-index/index.html","06b8441244b872ac3bba35a983829e56"],["tags/git-merge/index.html","4e178da88169cf1ee126121ccc8fa66f"],["tags/git-pull/index.html","557dd8243c6200ee31b4773d48678a7f"],["tags/git-reflog/index.html","d12697dcd38ebaaf126789cef95fdc3b"],["tags/git-reset/index.html","62808a7cfa03410379e524d45ef537a5"],["tags/git-revert/index.html","b98b0ff3ac2efdab07dbea8cb434a5a3"],["tags/git-tag/index.html","9dda70380c2a26e2cb79b4dc1ed85c5d"],["tags/index.html","c3bdfc126f3c278fa83c04410dbbb835"],["tags/jps/index.html","8626b49450a49349f38119627eb16496"],["tags/kwargs/index.html","54824f03d5f231b130214f7ad24eb1f9"],["tags/mac/index.html","58cbcedb47bb5b00b3848935d1c83db0"],["tags/modify/index.html","675075f527890ff02a289d42d60600e9"],["tags/no-ff/index.html","b11e796c5b7805d49db6b3f1e6e15c61"],["tags/rewrite/index.html","13f1b800b1e3197848ce457ff3739f06"],["tags/schema/index.html","83d90c45b4fbf8fc4af0b9ee2291a1f5"],["tags/shell/index.html","21653ec0c206b81c7d15e0055977bb01"],["tags/shiro/index.html","526d34b8b2022fa10058ccb9d35302e9"],["tags/synchronized/index.html","59788689ec51c5c6911474bb8027d12c"],["tags/this/index.html","41f07952c2060acaf29e3e28712b5d49"],["tags/tomcat/index.html","7346971b0d6e02a983404f9739a06a23"],["tags/true-merge/index.html","8661b19eb13fe50b9f985c0be3c6d84f"],["tags/url/index.html","fb5b3d82e42b7f1e49bd4de503b0b0cd"],["tags/windows/index.html","8f107551399e95a4ee1b82e90189c9a2"],["tags/一棵开花的树/index.html","b529d242bf5a3c881536a950694e4700"],["tags/介绍/index.html","86712eed88df2e7408b7892303649a21"],["tags/代理/index.html","81e479551a78ab8d39b1c133af4037c6"],["tags/以太坊/index.html","75d458e562690d332e04d6d550f968f9"],["tags/依赖包/index.html","218f9538d6dfa61cfc786530f27067db"],["tags/修改/index.html","1122cef47b7b10d421f12e48e4356a75"],["tags/值传递/index.html","9a0df84821353725d963be8de5f2cfda"],["tags/冲突/index.html","71c00021df40de08bfe1244d64a800a7"],["tags/分支/index.html","57f3d8079ff278993f880c98d4cdacd4"],["tags/创建/index.html","7ef66ac40805a21bd2116c85dac60845"],["tags/创建数据库/index.html","17b74de9cc525fff94127874b88f2afc"],["tags/区块链/index.html","9c2bdf1e1a81873c159a03480fe3a8f0"],["tags/升级/index.html","55538c1aeb2a482d57117fa7a5c59ea6"],["tags/参数/index.html","a723b8e5c519afcf348d5dfa85e757f7"],["tags/委托/index.html","6aa996e261ca20b025948ce4082312c7"],["tags/存储/index.html","56795c8fc4acdd4e2950e32aa484ea82"],["tags/存在/index.html","05372b704e29ba9e88c566bbb7f68776"],["tags/学习笔记/index.html","9d4e9e2a7ae0aba1f1cdab8a34709677"],["tags/实例/index.html","e49994ab739b06c86c0475a3e1a2e020"],["tags/容器/index.html","338677209772f8ca9ee41a75ce7807c5"],["tags/工作流/index.html","449c1b4a3213577e2e9d2622267103f1"],["tags/工具/index.html","c8b2905f31b50cbed32779bb818cf283"],["tags/席慕蓉/index.html","5e9f63196c4eeefef7a9ccf958894e84"],["tags/微信/index.html","d80e2a9a6c4b50945c3f9cd4c24d5196"],["tags/插入/index.html","620604dbe62ff0f67ded123754515bc8"],["tags/数据存储/index.html","a30329beef88f20c09f24141adda8959"],["tags/数据库/index.html","89c4ce74cd32ed62b0a013d589fe6fc5"],["tags/数据集合/index.html","2c13e5327962a460807680f896b24d4c"],["tags/数组/index.html","04214ef5b94eeb2e4dfd9a16aef06afe"],["tags/文档/index.html","664d511e9ac9d05415ddb7394d43b93a"],["tags/文档流/index.html","6fbcaa704bd97f5e628df228ca736834"],["tags/智能合约/index.html","3f8f7e2d6d34d1cce976b0bd8207d2a2"],["tags/标签/index.html","1544197b68d196ec1aba89cf45acbaab"],["tags/模板语法/index.html","694bb347b54be7ba206442defa934e58"],["tags/比特币/index.html","39fb17d60aa55d826bb6f21502027a1c"],["tags/波浪字符/index.html","a277ccdeb5f828ffc799b18ca7271c7e"],["tags/注解/index.html","514e54331eccc575bc29ff279300e933"],["tags/用法/index.html","9fd964c6cbcf1358265a2f4052de9fc6"],["tags/穿透/index.html","1bfb32872b47aff2a2b7673890388231"],["tags/端口占用/index.html","47d2084489378f5036f562d012b59baa"],["tags/笔记/index.html","4c5268dd397e6dd4e65405eca907bc86"],["tags/符号/index.html","c1b80c4cd3a0f0ab51f02078ec94cf69"],["tags/组件基础/index.html","623efdeef7f4e37b00d5d366358be606"],["tags/绑定/index.html","37e74ee5477c8a66c192774ce3a9a7b8"],["tags/编程/index.html","06c3e7f0036a80fa49a3532a5c83eabb"],["tags/职责链模式/index.html","88b35ea6e509bb4b3315b2c30e349da3"],["tags/聚合/index.html","8cb34313aa683ab12f9df57916941898"],["tags/自定义指令/index.html","15750780b28be0d06f9a683bcc6d33b7"],["tags/计算属性/index.html","bad64d44a645b8a22e1ed19b231f0822"],["tags/设计模式/index.html","ca7560510009c9b7ddb74042f7cfb6dc"],["tags/进程/index.html","a45d768cd2dab60442978a4b5337df19"],["tags/远程仓库地址/index.html","5f7e40b164b523f02cf6210b25b952bd"],["tags/逻辑操作符/index.html","97685996c047452953aad024d56f0887"],["tags/部署/index.html","686d1def4a493958a9d851c32bce1f13"],["tags/难度/index.html","ff58826d685bfc5e1ab368c515ed91b5"],["tags/集合/index.html","5582e0525df6cf4d16fe232a437ec7cc"],["thinking_in_programmer_life/full-stack-programmer.html","d26f6aefc3d93febd4419b658e609a6a"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","f710f98e53c23f1ddde36950773771cc"]];
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







