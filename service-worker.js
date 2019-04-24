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

var precacheConfig = [["Kafka/kafka-introduction-note.html","46896998d0ca2f56ad4ad12586fe3b3a"],["Kafka/kafka-storage-principle.html","13d6f4513884d29efcf6cf1a558e71e2"],["about/index.html","392289e4e43aec4a0653bfaaa5fe4ea9"],["archives/2018/06/index.html","dd113ef918e4d4278a414a31222bbf86"],["archives/2018/07/index.html","209f33d4e281c71a9ec957eba0f142da"],["archives/2018/08/index.html","b515b2b14b901eaa271fdd3bfd30b183"],["archives/2018/09/index.html","46720b9e7fc5a3a77ee6da600201947f"],["archives/2018/10/index.html","7a538c749f9a1b4430c7b0dd17f76d8a"],["archives/2018/11/index.html","f80cb08f705e81700cd8334e2ed59f18"],["archives/2018/12/index.html","1f9a1f9fdf9564884bed63a7b776cdf0"],["archives/2018/index.html","f74cf1467cb9c60ca9f8b9926c4f3074"],["archives/2018/page/2/index.html","02d10c6458ffa31e235a28464e1d4283"],["archives/2019/01/index.html","7f7100c15cf04e64d53f923f636aba2c"],["archives/2019/02/index.html","4bc6bceefc29d9d6322ae0df5da9d839"],["archives/2019/04/index.html","44ad8e9668298c6c5498c712f4d894a6"],["archives/2019/index.html","46a3645f288eb7be268a32744f608d5b"],["archives/index.html","1208b7f0ef08fc0baa3d8c0dfc3e1be6"],["archives/page/2/index.html","5687bc020618ad2f29e10b00bc718796"],["atom/index.html","92a9c91fe3222297826b2ad2ec0d75e8"],["blockchain/base64-base58.html","db4d3ce8a90f041bdb2f31cb753c7333"],["blockchain/bitcoin-data-storage.html","64d73b31a2dbf69c894933ee74aa06a6"],["blockchain/bitcoin-difficulty.html","5feef47b379b60acdeaac3433e55a72f"],["blockchain/block-chain-ethereum-contract-program.html","1b5c7bf07ca99501429b223e9be6f1e0"],["blockchain/ethereum-programming-introduction.html","74abc9e3ebac63b343ad46eaea0b848e"],["blockchain/ethereum-rationale-introduction.html","9689e7d4a1322bbf442046eadd04ca49"],["books/index.html","d1e9a7a0189f7a22505b232da3d7835d"],["categories/Blockchain/index.html","a6e13ec5485d72cb40c6def8dcd067d6"],["categories/Blockchain/以太坊/index.html","ce7c8082a25007030055855159be5c6a"],["categories/Blockchain/以太坊/智能合约/index.html","3ff7a0b6a660a8714f676cfcf070d5b9"],["categories/CSS/index.html","0aacfa7a01024a5702cb80d25e80810c"],["categories/Git/index.html","99773e3cb856dbb553a4764028d1cb86"],["categories/Java/index.html","c237555a5043125325cca6c56221a8b6"],["categories/JavaScript/NPM/index.html","b5bfaa0e0763513553a28f02a9794800"],["categories/JavaScript/Vue/index.html","c6e56e7701614cc233d3fbc010221017"],["categories/JavaScript/index.html","5dab767bdc0c0e8274887573b0b6dac7"],["categories/Kafka/index.html","659fcad2343e37dede8c594391d34ece"],["categories/Linux/Shell/index.html","4602acfa317e1ae251d5c7c8eacb4d59"],["categories/Linux/Ubuntu/index.html","2bc65899b91e7ba0f78b19f10ed795ff"],["categories/Linux/index.html","f0a61017efa0679e0795329c97ea3437"],["categories/MongoDB/index.html","8097f749fd0f1d62461d96c86259328c"],["categories/MySQL/index.html","a5186e0989d7faf7d36fcff621d804d4"],["categories/Python/index.html","66e5b0755a53028d8e8d477a10b1b756"],["categories/iOS/index.html","3d63afa9d87edbbfa07bce2d90d3a6dd"],["categories/index.html","8a06f06a7ae1571f472b059a0eea398b"],["categories/微信/index.html","6adea3bb7ef539fdb6ef4489a1bd0b27"],["categories/杂记/index.html","09e53fe66d550a697875e64b64b14646"],["categories/程序人生/index.html","a7c89b4b8d0635693dcbcde3e5f3c9a1"],["categories/计划/index.html","17179407ff57555daa9a55a504124335"],["css/css-font-note.html","e5af449d70519dfd637200d1235e0d66"],["css/css-normal-flow.html","39a5bfab92cd092321dae7b90c380563"],["css/css-sass-introduction.html","7a4f8325c2d21a03c3ff4c549c27851f"],["css/main.css","c13cac28ef6aec83970e3b034646f765"],["drafts/configure-multiple-vue-project-with-nginx.html","eef27a4188ab7c230681fa98f3426a1f"],["drafts/iframe.html","1d0258d714051fe8b1184b21e5ba98f3"],["drafts/record-re-install-mac-os-10-12-6.html","907995515fe82c8602f0d67f9010d2af"],["essay/note-ximurong-tree.html","2f889d6eb0c1704d60217a41c3aab485"],["git/git-DETACHED-HEAD.html","200a10c7133b7efb306dd0588f6eae1f"],["git/git-branch.html","f7ab9bf16a0cd45d2d3225ebc4535322"],["git/git-change-server-password.html","be520a2fceb10e09511f7d722b0dda5c"],["git/git-checkout-1.html","5ed29864aa3e33d3cb4be8995d0d1e95"],["git/git-checkout-2.html","0721b8bc0879c52ca6090fca0dc984b8"],["git/git-diff-m-symbol.html","fe891d4ada779472ea80bcbcc2e12381"],["git/git-git-flow.html","2b16f03623b150da3a723d79a7a95968"],["git/git-git-merge-ff-no-ff.html","df68e5c9333724796fcc05b2ec0b34e0"],["git/git-git-merge-true-merge.html","0545a3ed6764603e60405a700394a46f"],["git/git-gitlab-flow.html","7e2383e3a66e21ebf840610f2e188c2c"],["git/git-index.html","2b85f81c28e865b425856a19ee34c0f2"],["git/git-merge-choose-one-side-code.html","b05f40a03cf9277c60a59dff59cf408e"],["git/git-merge-exist-conflict.html","46cdec071a65532f88e4235382ebe44f"],["git/git-pull-1.html","2bb781dcbf70b5aa499aed7d167dd3b2"],["git/git-reflog.html","47e6fb1d2c43f46e1a3d4e20829ffa11"],["git/git-remote-set-url.html","68611db5f4e4742bac16be0955418d19"],["git/git-reset.html","91e232d40e947ca48462f6a210431b44"],["git/git-revert.html","d1e6caf40302cfe517d57c33efbe0231"],["git/git-tag.html","cf07d90b2a9277e307edc13dda3f36ef"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3c18d00a9df2f53dec11cdf0a2ac429a"],["ios/ios-oc-kvc-1.html","ab193fc18007fe59d157dd9fff5983dc"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","35511a0cf84dc5144cfb40a9d78cca03"],["java/java-annotation-request-response.html","0d7759cd4f9671dfcfd4f68cb157411b"],["java/java-deploy-resource-folder.html","449bc44ab20f437d78a5e171a80ac976"],["java/java-jps-note.html","723cfbec69e0c608862fd2c92e60f012"],["java/java-pojo-bean-note.html","d5ca2e2647dd424a7a0fe65c46bbbef2"],["java/java-shiro-note.html","f69081a34da0c21358e02785aa3d3c8e"],["java/java-spring-autowired.html","2480e5aaf639cffd127b74c0dd958228"],["java/java-spring-configuration-bean.html","f5553b081689d77cf8654b09bff2093d"],["java/java-spring-restcontroller-note.html","9c390e4afb35259bb59aaf342f405279"],["java/java-springmvc-X-Frame-Options.html","c5342f5b74aa68ece92220da4e73bc9f"],["java/java-synchronized-note.html","67c29282e4563d0a20ee279963b5d069"],["java/url-rewrite.html","a5b4d2fe15cf393f95102c09f1c1840d"],["java/url-value-pass.html","9a76de6a5fd0f520e5f21675ecc5cfc4"],["js/js-logical-operator.html","e8772abea835e7434faf3a6f55402963"],["js/js-npm-symbol-caret.html","22cfc7dff7f50d4647f213b2f6161be8"],["js/js-npm-symbol-tilde.html","44949f384da37a3439a69194e95a9621"],["js/js-this.html","0499f4bfacdc86b966f9fb5b907e35c1"],["js/js-vue-note-components.html","dee049f7c7ac30d7f1d6a2d63b373dbf"],["js/js-vue-note-computed.html","bc7d1e19ac14671235537c0ae947d50e"],["js/js-vue-note-css-style-binding.html","af4b6923e08355d7a9d129596ce0da52"],["js/js-vue-note-directive.html","222d608e8dbdea83dac2c90252b9c736"],["js/js-vue-note-instance.html","833c101e15726eeed9d382a54ece3568"],["js/js-vue-note-introduction.html","1543a523f0ad0c2aad2e9429a729198c"],["js/js-vue-note-syntax.html","6a420095ebc5e81439badc2c5243635a"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","1afa15fff667ffe4005183a836d23eb0"],["linux/shell-command-df.html","c03159011c6fda7b1cfb4f6734652c7d"],["linux/shell-command-du.html","b10f13a7f3d0172bf16b7279c176ecdb"],["linux/shell-command-netstat.html","745d21fa999c66def5efdb4a376ffa68"],["linux/shell-command-sed.html","4e2b6a80be20804f074e695d3697b769"],["linux/shell-command-tar.html","e5b471d92ac0a40ba523b745f2bee5a5"],["linux/shell-command-top.html","a8faf7cb09d8f57c5a75de003ad8ad3f"],["linux/shell-command-touch.html","6da144d43b9f6ab0c63d0f59bdc07bc5"],["linux/shell-command-which.html","d60a90c0ea3d823d583b5164ab051da7"],["linux/ubuntu-user-add-delete.html","6704365b087e730663cc37e65649a956"],["mongodb/mongodb-collection-aggregation-introduction.html","13df142254bdbf7374cb6e95d87dce20"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","576532afb609efe0db8b80fe49d8d738"],["mongodb/mongodb-collection-create.html","ec8c61ae50b8a6adc720c823952fc055"],["mongodb/mongodb-collection-delete.html","832d120b4f5d4d2de4a0fbca133c3448"],["mongodb/mongodb-collection-find-1.html","1759def20da3d2296e2303e3fd39fb79"],["mongodb/mongodb-collection-find-projection-operator.html","a25d483e221bce899f6c480a37ad9324"],["mongodb/mongodb-collection-insert-1.html","8d06181dabbcca53991698e2374848d5"],["mongodb/mongodb-database-create.html","0ad9cf119076dcbb90f3888f2b0bf049"],["mongodb/mongodb-java-driver.html","58193016a9427ae4be0f12b71710a04e"],["mongodb/mongodb-schema-design-note.html","b1f65b868d1e4415414a8a0b664efb1b"],["mongodb/mongodb-study-note-1.html","dd3830c970a5c7d6a37b35510d8f1472"],["mongodb/mongodb-study-note-2.html","5e54376de4e96d371e3a0c13f3956436"],["mongodb/mongodb-study-note-3.html","c03714e671a0e77de3a08d4f29b52a3f"],["mysql/mysql-ddl-handy-book.html","b404f9fbbb509e9c384afc0a44288025"],["page/2/index.html","ce2f24ce3ad90f1fbab071c50d05f71a"],["page/3/index.html","d1c5cc26e5293b9f0b0f6d3942cc34a9"],["page/4/index.html","9189704ae8efd5d02e67fc492531fdb9"],["page/5/index.html","28e414d60d57af279b05dd84aafe06bb"],["photos/index.html","455b064ba5d1799b551d735f8c260af3"],["python/python-args-kwargs.html","9364ab8d2da9c44dde82aa0d02ffb0ca"],["python/upgrade-python-under-ubuntu1604.html","599fb931ceef768fb9db4601e0092760"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","ea3789e68c3c8a8ad088a259dea91a87"],["slides/index.html","1b349f34f5586cba304f236a8b39e225"],["tags/Autowired/index.html","88ecfdd90ffe5c16563ad8a236a8864f"],["tags/Base48/index.html","085c2bc03f5f9a04c95720de2bf9f3d1"],["tags/Beans/index.html","26aaab5d6c910b0b72c265d8232d3ce8"],["tags/CSS/index.html","a951de1fd748f683f0d6b8fe5943d22d"],["tags/DETACHED-HEAD/index.html","42c9d2ba9246eb633650703134be2994"],["tags/Git-Flow/index.html","4dcc2b0ab2f1805a2dbf53d589388556"],["tags/Git/index.html","56d0419012020a034e2913e87fe743b6"],["tags/GitLab-Workflow/index.html","2d94c580b6855ea250a9cda0732b46e3"],["tags/JS/index.html","6f5d2e607fa4c4b0b0805862aa23d45d"],["tags/Java/index.html","32e17c85761129d937905196ca35532b"],["tags/JavaScript/index.html","e0bbb4f570686a731da59581ea3c04c2"],["tags/KVC/index.html","a8b13ef0406e4217cc6e58d25904e7b1"],["tags/Kafka/index.html","8fcac0c4a05498c5668e901090073465"],["tags/Linux/index.html","213aa5e02254c975ac7017082d160039"],["tags/M/index.html","80e21853f314427794a14202a43fb12f"],["tags/MongoDB/index.html","9af5688f415ef256b4d47ad2270df776"],["tags/MySQL/index.html","6b82681a116d3ab3927019d44a4d499b"],["tags/NAT/index.html","c3c7f71f465208baa6e373cd0791e692"],["tags/NPM/index.html","e575e07a00df92f33e86093078f8665d"],["tags/OC/index.html","23484bd258d52fa97939e4df25c5b594"],["tags/POJO/index.html","45b7d67a145c1a3cedd90846bd476736"],["tags/Python/index.html","0b64c85359f543f0019d827fbc449cc8"],["tags/ReactiveCocoa/index.html","a105e5655843c56547af67fcb1f198d4"],["tags/ReactiveObjC/index.html","3c67b758c174b33ac841f0e3aecc35bd"],["tags/Repository-not-found/index.html","6ec334ceca270d2a51ae4a385790020b"],["tags/RequestBody/index.html","203746fba87f324497cb1f9e9da2210f"],["tags/ResponseBody/index.html","75cdb53bd5dd37acdd67dc9804fffecf"],["tags/RestControlle/index.html","2dcf0b22480acc29fa2db94327609a53"],["tags/SASS/index.html","a6a353edef5c4f0b4c910926c0d13e6c"],["tags/Spring/index.html","d6948a0712f5948b6283a30dbe54833b"],["tags/SprintMVC/index.html","15e0065d7ae000820c60428370c63add"],["tags/Style/index.html","5685b8a1796c58281261001e63c98ec7"],["tags/Ubuntu16-04/index.html","882652ed6610dff351220ceee817b870"],["tags/Vue/index.html","c0c265f1945d3ac7124012c2565ae4fb"],["tags/X-Frame-Options/index.html","9a2a0557b1debf1c226c432cc6c3e15d"],["tags/aggregate/index.html","b5722b522c0531a6cdcc0a94f5293deb"],["tags/alter/index.html","3a43a267faf810a6e82575596783cc2c"],["tags/annotation/index.html","11bd2ade2bbc065f806eeb9d13979afa"],["tags/args/index.html","dfc75c8a750d8d06eebea17a074d78d2"],["tags/change/index.html","b2948972fd3198461cf6091e3f139b12"],["tags/checkout/index.html","7e4837418fe92235c66c07bac9fae97a"],["tags/collection/index.html","35d590b238a8c574e2ff66fd45c1d356"],["tags/component/index.html","995dfa6a973dd7e580116e6f855f4b28"],["tags/computed/index.html","56223d1d1b035d118f1763a9fb7d8e64"],["tags/create/index.html","d30670a92813a6b087a5548089927600"],["tags/database/index.html","2f35c923fad441fd69d28c1f269f7422"],["tags/df/index.html","fd7296291a60a02ab7190c2192977216"],["tags/diff/index.html","1e2f06db232f65e1fddfd2e68fd9ea6b"],["tags/driver/index.html","141fa21fbe79e140ced7467bd0a6fbe8"],["tags/du/index.html","d70b3a035ba2b20aaef73a9ab7ac3cbb"],["tags/fast-forward/index.html","72cf507f14d6616728437f560bcc3f1b"],["tags/ff/index.html","896fdf259171e3287c70ca908b7c04e0"],["tags/font-size/index.html","77533aa6e559d765a3be223e1bebc2b6"],["tags/font/index.html","c195ef51f8b759ae2586ce2c0e27805b"],["tags/git-branch/index.html","3fe63126c3878751c91e092fb93f1add"],["tags/git-index/index.html","0063c5831bdf95317349a59cf5e3d09d"],["tags/git-merge/index.html","b62a5dc6a2b268f8e2b7add7bf0697d6"],["tags/git-pull/index.html","549105512a156ad7e73ed16c19498d12"],["tags/git-reflog/index.html","8f73d501de220a6a9858db94690b0b2b"],["tags/git-reset/index.html","478f0a1fed00eb4d39d417ade114b40a"],["tags/git-revert/index.html","7c2917439d7221143eadfc12dbb4ce07"],["tags/git-tag/index.html","2177a44f83401d1e6e369ccd87a82c87"],["tags/index.html","9a4c33f6f5a7f636c19e25b41ae285ce"],["tags/jps/index.html","27240c0e1ecec1fd16ced4d42f05fcc3"],["tags/kwargs/index.html","36582416aa702bd041b77e9b0321f938"],["tags/modify/index.html","eac514544548fecc32d22ec73da316ee"],["tags/no-ff/index.html","9bf831a63c024492719a56adb8023537"],["tags/rewrite/index.html","c786312dd81a5fa2d81fa421918123d6"],["tags/schema/index.html","f3a00e314507ea844ea4d8e4cce1792e"],["tags/shell/index.html","9827681f6c90c27fb5caa8bf4ab4d30f"],["tags/shiro/index.html","397c11ba34ef77d62aaabf23a1e9cfb3"],["tags/synchronized/index.html","ccaa92b7d1d8c9a2e08325a4fdbf1a75"],["tags/this/index.html","cdcd9114ea2a650d3f1a10ab8ac71896"],["tags/tomcat/index.html","1487d65ae85e8cbfd66e8b2180499128"],["tags/true-merge/index.html","9e197dee15e181bf4c6c7a7e3d54c336"],["tags/url/index.html","4a7eff40e5e34172c10f13b91bc971f9"],["tags/windows/index.html","4eb410a6a48c621e34d2b87cc4fe5b9d"],["tags/一棵开花的树/index.html","229c8e2afd3fb5198080f58dbc2571a9"],["tags/介绍/index.html","e31b16b6b80735ff3a675bdf3b02e899"],["tags/以太坊/index.html","feb659a04f122c244a75c05e44f4fdb5"],["tags/依赖包/index.html","2a78b765b1a6e6be766f9b6b272f1e76"],["tags/修改/index.html","956331b15cbd1b6f78ea85b7d4b23e36"],["tags/值传递/index.html","a6d4fc86f389351beaf7104fd77c3aec"],["tags/冲突/index.html","329191f5ac850148c26abf6c6267aaf3"],["tags/分支/index.html","54a48fbc85fcd2b636fed96db48182bf"],["tags/创建/index.html","7e32518ca797c3af0201a95460c33019"],["tags/创建数据库/index.html","f8a34c8e4fad6c96e3abde63ae699d11"],["tags/区块链/index.html","971e37a904f86964186cfbfff1671315"],["tags/升级/index.html","8cb2b11341614d36e3f369b5e39e02fe"],["tags/参数/index.html","edc20f55a4c4652ca5c627d834230afd"],["tags/存储/index.html","dfe9421c423be2b3b156059dfde88d43"],["tags/存在/index.html","8795b3fcad4114eabcb51667ecf91216"],["tags/学习笔记/index.html","e5864263ae7c826954b609806f671f05"],["tags/实例/index.html","d3d955301597a79f13dc3a2123957970"],["tags/工作流/index.html","94a1ea2e403b6b535bad0756ad998aba"],["tags/工具/index.html","07e2e4c98730b48bb3cd7a91efdfe516"],["tags/席慕蓉/index.html","fb1120eb14eec4560917d3e7f9a5f646"],["tags/微信/index.html","bd2bad69f69489a1010dbb24853653da"],["tags/插入/index.html","47f9910209b0059a98df5b8138e521fa"],["tags/数据存储/index.html","c32b9a6fe6a53d0548335a9eb2c0fdf9"],["tags/数据库/index.html","2c4fc90865f58c8014fc55033db43bea"],["tags/数据集合/index.html","fe3503ebb681b3e71c4da0ce5056c063"],["tags/文档/index.html","1c49a72339e7ab6cd206c3bd31778420"],["tags/文档流/index.html","2e127fb085f7e7598a6ea9b49804b912"],["tags/智能合约/index.html","e3af952bc596ef10ecd7a307f4f843cf"],["tags/标签/index.html","b5e35d2eb60e7ce5b3674cbd259b921a"],["tags/模板语法/index.html","5142dd8c53d4c73109bf4e04cea41465"],["tags/比特币/index.html","d8568c7757e86cb9a286029203a445cf"],["tags/波浪字符/index.html","91399746a3c76b519800bd2d9990bf9d"],["tags/注解/index.html","1bea6237b9b6df00f391e5eaca3efe71"],["tags/用法/index.html","2b98ba586d9e6b4396baf86b8b89d427"],["tags/穿透/index.html","9d8a11099e2cc880b87072fd1a6b1778"],["tags/笔记/index.html","7ff0f60ca253348eb9c6de421198f3ef"],["tags/符号/index.html","7ab0fd3239263f07fd183a05d163fd6a"],["tags/组件基础/index.html","b5889a37bd620317af2fff93fc1ecefc"],["tags/绑定/index.html","9845eeaf0301bdfbcebd58b4ff24f98e"],["tags/编程/index.html","8570ac033277713c24267f0fca736292"],["tags/聚合/index.html","78fc060e8ee5c9f57efafcd870d32937"],["tags/自定义指令/index.html","77c2ef398fd4e01764c3ac66ec2d848e"],["tags/计算属性/index.html","947c2a4820cfe586ee303f78bb727240"],["tags/进程/index.html","3c5e7706b934d3cd4d4072a3ab6dcd7a"],["tags/远程仓库地址/index.html","a365b32ab99abb5704e4b7a618062ee1"],["tags/逻辑操作符/index.html","2bf602f9f45f69ce76c1daa0b12c5307"],["tags/部署/index.html","85bf5abd964036fa6e9beb375bd1db96"],["tags/难度/index.html","3854549336ed6bec0de23f6f8cc88b88"],["tags/集合/index.html","eaf2344e5f0426c3769a9bcdecd7d5ed"],["thinking_in_programmer_life/full-stack-programmer.html","fbc9865b0290152182d3ae747d9243e8"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","7953d7cc4bb147646d90f7b4cc63a5d5"]];
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







