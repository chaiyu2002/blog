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

var precacheConfig = [["Kafka/kafka-introduction-note.html","3cea794823986536d3d0e764b5067267"],["Kafka/kafka-storage-principle.html","798ec1873d2bbc240352f72a018e9c74"],["about/index.html","14ed2b90bab9d8a4e32e662772766127"],["archives/2018/06/index.html","b066b07a5c64ed3d8398a4331cd23394"],["archives/2018/07/index.html","220c528711b1d9a6bb43519920f1f1d0"],["archives/2018/08/index.html","a39874e67f4ec776d6508258deaed43f"],["archives/2018/09/index.html","19d6f0b78c2cfb377bc8b233f2823d3f"],["archives/2018/10/index.html","76bc540ba939af994a68ea78769278e4"],["archives/2018/11/index.html","688775726f49fb03052db84b08946a5e"],["archives/2018/12/index.html","845e61aa20479b9cf1d5b20e0d87f614"],["archives/2018/index.html","56eb6e32ee6fdd12901eac6f359a7416"],["archives/2018/page/2/index.html","a16083602b399149a37760de0928948b"],["archives/2019/01/index.html","ea484be3a250629a21c3204734b58eaa"],["archives/2019/02/index.html","8389914b839511e18bd955a999c891d1"],["archives/2019/04/index.html","19143eedf9edddfbe78ebdfbb5518448"],["archives/2019/05/index.html","2885c1a38c711caa16220a51c66fd664"],["archives/2019/index.html","c9f6fdd771d215247e7c1b11c1dcca27"],["archives/index.html","44c38d59779c1e2f234721a242ab6f4d"],["archives/page/2/index.html","2bced3c3dc99d4c2848ee6d4dcf35ec1"],["atom/index.html","eac53dcfe32f2a796d77ac7b137a30dc"],["blockchain/base64-base58.html","633756a94f5c827a1e0391a11fe24196"],["blockchain/bitcoin-data-storage.html","21428858b3126332212d07efe17e1342"],["blockchain/bitcoin-difficulty.html","33f9bab5bb1a35d7b8b4a02d68016fc1"],["blockchain/block-chain-ethereum-contract-program.html","15bb2b27729f1a422c0a1ed199309a48"],["blockchain/ethereum-programming-introduction.html","388cda0f0499631928b8d8b7919fca6a"],["blockchain/ethereum-rationale-introduction.html","0ad8b810b9fa71a98e72bd5943b9245d"],["books/index.html","a91822ff4c31add7c8d75f13e7803568"],["categories/Blockchain/index.html","852332e30a29b0561864fdc020378814"],["categories/Blockchain/以太坊/index.html","30860719200780b381168ce1bd2b2839"],["categories/Blockchain/以太坊/智能合约/index.html","16e8a71199b5ebe5ef313e6c675c3970"],["categories/CSS/index.html","9e63f80b16f6eb2e98df64917522b0db"],["categories/Design-Pattern/index.html","cfac106b4106fa83132ff843afc98c93"],["categories/Git/index.html","74ec88cb678bc5da443cd65504f77299"],["categories/Java/index.html","9766c20513be1f0f02446d614a06a8b6"],["categories/JavaScript/NPM/index.html","bafab1e849a89b11ef7a7843b10799d8"],["categories/JavaScript/Vue/index.html","e320a62ea9346cce310d64f71041e1ad"],["categories/JavaScript/index.html","67868086fc0a95575bbd72c6baebb691"],["categories/Kafka/index.html","311ad323283ed9875edfb72a488d4d0f"],["categories/Linux/Shell/index.html","ebf54887292987f74576239b204b4e0a"],["categories/Linux/Ubuntu/index.html","6884017ed1a25081e3428b804bd87c81"],["categories/Linux/index.html","f40a5eeb4c280ba4a49edd01d7ba29c7"],["categories/MongoDB/index.html","6741b5e9396fadeaa647e9e8c5a6380d"],["categories/MySQL/index.html","e555a3ff1685c0eff4728306cfadbccf"],["categories/Python/index.html","dfdf5847d4d7cdb0fa3ca0902fac310d"],["categories/iOS/index.html","25b4ae518761d52a5a6298d97652883f"],["categories/index.html","54cd2e07be1953d25c4587737aa5aa1b"],["categories/微信/index.html","2bc44b4dbf9f9e7705a654550d27f36f"],["categories/杂记/index.html","c482c8ee79ba6fbd691cd5b0ccdbfdfa"],["categories/程序人生/index.html","19bea50feae77e4e560304b81f809f7d"],["categories/计划/index.html","671838ac7a263e099da62aca6bf69b3d"],["css/css-font-note.html","e55e3b975db97a81b224b5da4d07a947"],["css/css-normal-flow.html","6ee757fd94182337cc9801cf478781e3"],["css/css-sass-introduction.html","b5838bab35521de0650a7aba50019369"],["css/main.css","05ac5f5abac6cb92836c9a2d6625d7cd"],["design-pattern/delegate-and-proxy.html","973c85ae9cdc210c23b786b917f1a541"],["drafts/configure-multiple-vue-project-with-nginx.html","ede356b92c88021ab50deb39e27693fc"],["drafts/iframe.html","4c05a4ba36dd4b2a5cf2f5b48e61cdd0"],["drafts/record-re-install-mac-os-10-12-6.html","976a43ccca72125a4277a0afac4b6a71"],["essay/note-ximurong-tree.html","0f950d9da9cf37598557e1df25ff6231"],["git/git-DETACHED-HEAD.html","963f690881ce9fa3feb29786c95794fc"],["git/git-branch.html","7951b1e9b254a7a297a517792cee4f0c"],["git/git-change-server-password.html","b70f12d462d695308880516918284a67"],["git/git-checkout-1.html","7c9ec2cf0f7b74b00096edad91dd5c6c"],["git/git-checkout-2.html","f73226aef20e35f732e8af7300cec4ba"],["git/git-diff-m-symbol.html","12925bd53ad1b49c41d68da9de879fd4"],["git/git-git-flow.html","40d98641f8989a8afe27e81207c1c7a2"],["git/git-git-merge-ff-no-ff.html","c8f52de6e719708b417b30fe0ba038d5"],["git/git-git-merge-true-merge.html","b90f9a18d3d79d6853814d8d9d54d640"],["git/git-gitlab-flow.html","877c92f57642cf68996ed547ce47d05c"],["git/git-index.html","9befa22c5e5ee23a504aa4cbb3183503"],["git/git-merge-choose-one-side-code.html","fce96d2a9d132faa48a693e2c1207a90"],["git/git-merge-exist-conflict.html","a78e96cac9c428e2f3a198bf8d53a9ba"],["git/git-pull-1.html","5651c08f17da6a2a05875bcbe212c446"],["git/git-reflog.html","87a0505e2bfdc8c1997f235009ead4f1"],["git/git-remote-set-url.html","f9e864e5276e1b95c2a5e5273ff0f73e"],["git/git-reset.html","b51af331694d22456eb8d8d1d8f1acec"],["git/git-revert.html","15fbc04d8a6208b08fcefb3c12fc9ace"],["git/git-tag.html","d0ccd4a01b737456bf9da7296c3747f7"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","f428646600efbdc766015ca665e3a519"],["ios/ios-oc-kvc-1.html","9e9a1a74bbcbacdaa6b1724dc85fd4b4"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","a44eca7ae8235ad0cfdb6fab9427eb62"],["java/java-annotation-request-response.html","f54a3481a79c846c891b0bfcb4132891"],["java/java-deploy-resource-folder.html","6133d7c45ae444245486dd77358a8ffb"],["java/java-jps-note.html","b3bababe65ad243b20540ce192b71fc4"],["java/java-pojo-bean-note.html","13dbe4355025a6b39f1a0aa5ef110990"],["java/java-shiro-note.html","11ce04c04e9bf87c1ae97ba22948a337"],["java/java-spring-autowired.html","3a517a93e18253e55a1124d6671daa6f"],["java/java-spring-configuration-bean.html","ea92ea8e8abbbdfdcffb6a5617a710ee"],["java/java-spring-restcontroller-note.html","889cce8535b46b817ddae33ea7a8d7f9"],["java/java-springmvc-X-Frame-Options.html","daad973c81ec26e0cb4e838b881f5b5c"],["java/java-synchronized-note.html","92a10adee2c4103f6550d04e8c57f871"],["java/url-rewrite.html","8412da39185eb05d51e3970debc9da39"],["java/url-value-pass.html","946ee4bc7410775109813430122cb2fb"],["js/js-logical-operator.html","e6636c1060a7b51994cda8c2120c654a"],["js/js-npm-symbol-caret.html","4f9a71e7bb93561cbfa11c579254f095"],["js/js-npm-symbol-tilde.html","16f7d57c618dad4973b053a337c34166"],["js/js-this.html","c4ca18ebf84abdc38f99cea4b53f7b04"],["js/js-vue-note-components.html","a9afbc235c3a45737ca8b90f426e28e5"],["js/js-vue-note-computed.html","8630f36284614a95fe8901f69b576a41"],["js/js-vue-note-css-style-binding.html","d3aaa676fe641aeee12c615d37d5e974"],["js/js-vue-note-directive.html","87056f159d716ac6c49518264f572eeb"],["js/js-vue-note-instance.html","a2da4454e3684a7c6821b485ae6dbe5d"],["js/js-vue-note-introduction.html","e9b1abbfcbf33cf484494819491eb05d"],["js/js-vue-note-syntax.html","65843af7a4fbd06d884c11f4df2c3754"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","1c94bf7fdb4b41f2563ae97ec6f3d450"],["linux/shell-command-df.html","64c3fbf5765481deeaad8ad0c4adb5f7"],["linux/shell-command-du.html","8732daf5dadb26f401e7e6e4c3709b63"],["linux/shell-command-netstat.html","68fa843e2b4bd4ba1feb90bd4240ba98"],["linux/shell-command-sed.html","8bde983afe6b4cc687b67a2e669fcd5c"],["linux/shell-command-tar.html","cabfb5ddac57870dd17e6f84121e4ef3"],["linux/shell-command-top.html","0059034b2118018fd0c13a6c06abf24f"],["linux/shell-command-touch.html","e6a1e61ae93427f58efee63ae6397742"],["linux/shell-command-which.html","a143316ffc60ffec1f7d16e5bf314ce7"],["linux/ubuntu-user-add-delete.html","7c6edcbc82e649f28881f578215acfa0"],["mongodb/mongodb-collection-aggregation-introduction.html","d0c727c56b751cc923f21bca1ae6f7aa"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","0957fab5ad9600bd7dbff36418cbd041"],["mongodb/mongodb-collection-create.html","d2eac6a048875c565ef7af567fbdb1f7"],["mongodb/mongodb-collection-delete.html","b3c9e9a457b7012f8317c5c37725dc1b"],["mongodb/mongodb-collection-find-1.html","94d965f6e78c727e0eec05ff4687d525"],["mongodb/mongodb-collection-find-projection-operator.html","c9ccc9cda4d8ca308c18fe9d3eb850ae"],["mongodb/mongodb-collection-insert-1.html","f0ab3703141780a700e274f55bb6a988"],["mongodb/mongodb-database-create.html","a8f3c9e38cb1eb63ac5911dcaa99dc0d"],["mongodb/mongodb-java-driver.html","5895f430d7af4838d4c8c01002cc4256"],["mongodb/mongodb-schema-design-note.html","50442991a4dbaaed291a57edfe4691ba"],["mongodb/mongodb-study-note-1.html","57637ee8612520ab22c7eb38b8ef37dc"],["mongodb/mongodb-study-note-2.html","c12f2761db8ff2bb2b41e60e718160f3"],["mongodb/mongodb-study-note-3.html","2079c48331d4b48cdab5c6dd279a8ddb"],["mysql/mysql-ddl-handy-book.html","46137a4d5b76d2f82fce3579ccc549cc"],["page/2/index.html","ab394243d583fb09e0f1a59961ca0632"],["page/3/index.html","819adb4400498e4ee1aea3f2a6ad8511"],["page/4/index.html","8ba4f11f6c854fb3c3ae6982e6c3f7e2"],["page/5/index.html","df0bdefa7e2b182951b4dfe8b83f206c"],["photos/index.html","a858c440a66bc05f55f1ca7f8cd15076"],["python/python-args-kwargs.html","37f40823aed5df33004c834d405b0adb"],["python/upgrade-python-under-ubuntu1604.html","9c0da4f2c7d9f04c1ac3bfcd7b29030d"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a5243ffd592aa1e8fd7d5bbfc796aa6e"],["slides/index.html","b026106140df9093cc4370d98b10ad0b"],["tags/Autowired/index.html","3c1c4e5455e6f3e9eb6b193a06708b97"],["tags/Base48/index.html","b8b75b216124353b38840aa07c80e19b"],["tags/Beans/index.html","64842bfce69a599f6db10cdce357cd83"],["tags/CSS/index.html","2af07b603bbb046facb86219a32b2170"],["tags/DETACHED-HEAD/index.html","f7a1a3c2c62d25cd6e4caaa0d400f2d3"],["tags/Git-Flow/index.html","e29e0af54d62aa8cc2dda74f69e66d31"],["tags/Git/index.html","ca15de428ff7dbd64158c7c21a8d886d"],["tags/GitLab-Workflow/index.html","f5bfe34505ee3367d550c708a548d0d6"],["tags/JS/index.html","b6e61a8e551c80c6cea1d8e003566316"],["tags/Java/index.html","1df376bf24b0333dead2c1dd1cdb3dcc"],["tags/JavaScript/index.html","03e268372e6cea39796974c5c30176af"],["tags/KVC/index.html","dae308194d2dbb2e78306439bff17d1e"],["tags/Kafka/index.html","cc866e73d9b1fe715e66d3e2b4e0baf2"],["tags/Linux/index.html","2c2a300484c5aecb484b932cb9527db6"],["tags/M/index.html","0d7af75fc60deae96dbd21c9fd7e554f"],["tags/MongoDB/index.html","54755405890eac5521d7e7f158e7d7e4"],["tags/MySQL/index.html","cde8442ba6505380dbaa799e02f0276e"],["tags/NAT/index.html","d6b87fb69335fe9059af9ae2e2b38757"],["tags/NPM/index.html","1aa19ed3ce4f6f5c51d319a706887bba"],["tags/OC/index.html","b4f76ffead45498a897894e4305c0f16"],["tags/POJO/index.html","deec3ee773a9a9ae533e29fd24c2c331"],["tags/Python/index.html","0605b8976d40c9e739b1c207706174eb"],["tags/ReactiveCocoa/index.html","3f2ed30d917c00d438806d22582eb673"],["tags/ReactiveObjC/index.html","59e91374408124e835221e7a5a987e2d"],["tags/Repository-not-found/index.html","ce5cfc9553a662f03e098eb3d4ac6acc"],["tags/RequestBody/index.html","b195c9e15d230ae892fd21f0d4e70e3d"],["tags/ResponseBody/index.html","2be700a12787a617df3494b7daeef837"],["tags/RestControlle/index.html","87952e1a236056d876d81f5a7fa4fb0c"],["tags/SASS/index.html","1e585ffb9e85303a1121286b9a94b321"],["tags/Spring/index.html","c5cfaf18d1cd565fa53d75180081768b"],["tags/SprintMVC/index.html","9361e7739d61aece25a35f33009d3337"],["tags/Style/index.html","a0eb802a9819813c2bc5e31854727943"],["tags/Ubuntu16-04/index.html","6d1bc424a66d4d75d482a67f1e50112d"],["tags/Vue/index.html","32d554f00444237de3b2f9883516bda9"],["tags/X-Frame-Options/index.html","7d88eb7438a48d35fb80364967d2b1d7"],["tags/aggregate/index.html","f1053983c4d00849bd356aa81d71380f"],["tags/alter/index.html","2e9619d0f3227cfaed516954ae008bbc"],["tags/annotation/index.html","21ca0f29f5af06823455e6508f842201"],["tags/args/index.html","dff2130f599100aaa13a00b710dd06b5"],["tags/change/index.html","179ac2b3cff6b2061f2d7bab6e883f91"],["tags/checkout/index.html","bc9c499aada351882f7f4fbc48c41824"],["tags/collection/index.html","3e23cd95e6f7de77d1b7cfe552a7f40a"],["tags/component/index.html","7815498b987680793dbcb72bcbf80d42"],["tags/computed/index.html","30540e6b5375e070889e7fbf4db060af"],["tags/create/index.html","886064eb7152b8d820f36e89983b94f0"],["tags/database/index.html","61f5b6e2ccb93da7984d9504d29464ff"],["tags/df/index.html","db3f694166612fe9c8660e9fe6e2e067"],["tags/diff/index.html","0249097bd2cb686ca4b7eb6c970b3e10"],["tags/driver/index.html","e3efe9300e6603ec5c7d227c94b4315c"],["tags/du/index.html","8cbfafd046f5e82b3de6a2951a3e2ebc"],["tags/fast-forward/index.html","b6c2cd7ed548b7db1401b4ad6a7f0fe6"],["tags/ff/index.html","c606a30d2ce7b13c138ab386f1ea68d8"],["tags/font-size/index.html","8bb3ab2ddf5b80bae497afe6803310e7"],["tags/font/index.html","6fceb6315b6650a94f7d1ed5bf45a151"],["tags/git-branch/index.html","c9a7ee62e825c29b0444bc5f06d1f590"],["tags/git-index/index.html","ae653de850f9c5967c73225e72da196e"],["tags/git-merge/index.html","e38f6005472262c3861809447c09afe2"],["tags/git-pull/index.html","7f0219ecda0ecf4da701a61ec9f445cc"],["tags/git-reflog/index.html","27828589ddad6cfc95e373637bbc7735"],["tags/git-reset/index.html","aabfa415ebb629294126288b6ea83f14"],["tags/git-revert/index.html","4b03b7eb4c8c35eee14da8cecc791a06"],["tags/git-tag/index.html","d007a58bffc70ce54fcada79a8471345"],["tags/index.html","ca32a07869e9ff6440ca979aacd797d4"],["tags/jps/index.html","1c242cd4ffc4f7fd449f4b851b0da9a1"],["tags/kwargs/index.html","6837adcec55436d529028c8eb720af27"],["tags/modify/index.html","902ea61b7bd740390c67c353235b374b"],["tags/no-ff/index.html","8fa3653c38764418ef4e2493dcadad9f"],["tags/rewrite/index.html","39d0b6d4dc4dd1cc625c33de2940fa3e"],["tags/schema/index.html","775e12180433e8a81b5aae3f30468398"],["tags/shell/index.html","54ea96146512f5a1225b30abd3f1278d"],["tags/shiro/index.html","4d237cb5ae4c94fb016ab21bda6efe97"],["tags/synchronized/index.html","e78ebd7240161428707abef98e3bdaa1"],["tags/this/index.html","eeaff04de19021ad558ca1003c5ac9de"],["tags/tomcat/index.html","c9b2b49072329d8176615f5ad10ba75e"],["tags/true-merge/index.html","0d22f56eedeb665a002aa691dbd17df9"],["tags/url/index.html","0fa14de18ca200effdf655d360dc5652"],["tags/windows/index.html","34b9cc959d1cfe6b773c817b4a106d66"],["tags/一棵开花的树/index.html","15db9b98b7aa86e40aa522d13b1e1af7"],["tags/介绍/index.html","59ff03bb66bf490d95d98b35bebfa2c9"],["tags/代理/index.html","d7c4e15fffa2afa0563ecc9b27197aa8"],["tags/以太坊/index.html","2cc4d9d2837fd18dad758f9047beec66"],["tags/依赖包/index.html","deb08d92af54da152d12666e25d3d38e"],["tags/修改/index.html","4bc6fe0321f7796234ddf8c39f7e51fb"],["tags/值传递/index.html","70352ae30b1cdfb93c08bf06826fd526"],["tags/冲突/index.html","be816ba0074ab0e729dbea7a464f2e6a"],["tags/分支/index.html","c1fbeb72471728614157a730a81cefae"],["tags/创建/index.html","910d6089af71e8426e2473807e3b3476"],["tags/创建数据库/index.html","eaea3e5c9979af5b10a3d178c278ac97"],["tags/区块链/index.html","7758b976fdbcf6106d614ef0843047b8"],["tags/升级/index.html","bf82dadfa768391daf492b93442fb9cb"],["tags/参数/index.html","8f7e4c61f5c5c47a4cb504a839f762e8"],["tags/委托/index.html","8cafc385715c8971ba8003b6d8dbaf92"],["tags/存储/index.html","dc9796f75fa3229d57e5392e80dc5ea8"],["tags/存在/index.html","c4923f706852c395171411bf1d556c1a"],["tags/学习笔记/index.html","c3fa19e11d3976720decabfe5dc6e78d"],["tags/实例/index.html","4a8ee222ef89cd7b0b0bb47ac9e9df12"],["tags/工作流/index.html","ebb13af2da22e5ebe07a70322ff08163"],["tags/工具/index.html","62b79c585a28b1c8f9501a5c2d84ef0a"],["tags/席慕蓉/index.html","ec381b408222a03c4174ca87efb0826b"],["tags/微信/index.html","430ebe36de82fb44140a7acd2fd5bb35"],["tags/插入/index.html","923c35c1aea32b0c51e58dd189f13abe"],["tags/数据存储/index.html","f3869af6085e425847931a2780811bc9"],["tags/数据库/index.html","78ae776e462d12d75c68f348a04f071e"],["tags/数据集合/index.html","10dc81fb28300e6236b522dc14e537ff"],["tags/文档/index.html","f3faae6e7d74f86c80559a24cef3c193"],["tags/文档流/index.html","77b212474f8159fa4c70b8377f49966d"],["tags/智能合约/index.html","a2e1f7ab6357cd3648071ff5941a262e"],["tags/标签/index.html","0939f078dac8c7fe58593f3ffbe0d4f3"],["tags/模板语法/index.html","3bda15b707db72fa118f3aac0ed162d2"],["tags/比特币/index.html","242a863ca0923aa1fa43bc5219f51fb5"],["tags/波浪字符/index.html","32c1b3f24e4279c1a3a4441beb353fd0"],["tags/注解/index.html","3d8ef9fe35bdd05ab2b3600ccf8e0373"],["tags/用法/index.html","6054051f7c3884031addd11643584306"],["tags/穿透/index.html","70564f5242028d374a302de715081384"],["tags/笔记/index.html","db690d7945937b87524861079c3ce05c"],["tags/符号/index.html","83ce88b573a88221c5e7dd84eeb70856"],["tags/组件基础/index.html","748fca41e4aecf7258f69a8d391a756b"],["tags/绑定/index.html","3af5f2c0d29acb236e1a77f8de61f3e8"],["tags/编程/index.html","880140ee47bfaf9336841d760d79a5dd"],["tags/聚合/index.html","9447d1537afeef4c2cb6113312efb23e"],["tags/自定义指令/index.html","231d398c639a784d72971b708bba8c24"],["tags/计算属性/index.html","d03a69129abab7450508001a5686a874"],["tags/设计模式/index.html","fbedf6488961aa03f8e3dce173165292"],["tags/进程/index.html","f6f2879952215576b710420d474dbc0b"],["tags/远程仓库地址/index.html","56ed7ee71392467165431adad5f389ab"],["tags/逻辑操作符/index.html","80f650cc22311fdefd491832e6f0d4a8"],["tags/部署/index.html","f0c06683a2eb88c923aebfa502ebbd69"],["tags/难度/index.html","e76564afe86021cf135771f28bf08300"],["tags/集合/index.html","cdaac1de182383b03c43adafd905868b"],["thinking_in_programmer_life/full-stack-programmer.html","c12837ee348aa851048643bc87a4563e"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","2d06c343d16d7b98044033a3ab84ba5f"]];
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







