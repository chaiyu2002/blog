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

var precacheConfig = [["Kafka/kafka-introduction-note.html","5146bbe52e88df724447723d84cce341"],["about/index.html","487b1db9c9d9068df4a6ab17a2223944"],["archives/2018/06/index.html","85117e7739347b687abba30c844f1c62"],["archives/2018/07/index.html","34abaa8252032ad652d49c217bab5707"],["archives/2018/08/index.html","7e5e0325a74788f16b3b692e4aba395d"],["archives/2018/09/index.html","84a25d5f2e999211abf1fe114dd27c98"],["archives/2018/10/index.html","51da9a4e057024f28b1194f15a606126"],["archives/2018/11/index.html","7134f76a29ff1402ecb9a75b28323d5f"],["archives/2018/12/index.html","c311948e118ac2db0467945e76168fd5"],["archives/2018/index.html","6f553f52e15d823650e77ddf4bcdb0c4"],["archives/2018/page/2/index.html","a11f69a563292d174ca42632cb7d1ef6"],["archives/2019/01/index.html","350456c3dd43a46cd589bc54809bfa47"],["archives/2019/02/index.html","5c527800df6656db70c9ccaaae03b7a9"],["archives/2019/04/index.html","ec1a783e0a825ce750a317cdeafe4c8c"],["archives/2019/index.html","4e4ba2d0a3126093fc18e70dbb125691"],["archives/index.html","da98981b2e4e10e90cb3b9a335a1f41f"],["archives/page/2/index.html","3d14eba4478bc3982d4181a427e5e8b1"],["atom/index.html","5e6676b7c2c9bc3810763f5902f8aa34"],["blockchain/base64-base58.html","d4889fbab2d775917f14fc6beea8d9c6"],["blockchain/bitcoin-data-storage.html","700da0d78b16c4234ee114aca06e653b"],["blockchain/bitcoin-difficulty.html","ddcd7906249a08fde397e6d3ee718761"],["blockchain/block-chain-ethereum-contract-program.html","d50e0ee3e56a580f742d46775cb10d95"],["blockchain/ethereum-programming-introduction.html","ffc843a233f3cf3fd772160a67e5ef97"],["blockchain/ethereum-rationale-introduction.html","47a4b2487f17da2457ba869f3c34eda2"],["books/index.html","d40c3f727718d7ff3ccb415a3f67baa5"],["categories/Blockchain/index.html","ccd741cb20f25a1f4e76eeb02b9e06dc"],["categories/Blockchain/以太坊/index.html","03671e737f7d610057b7bfa18b0a70fe"],["categories/Blockchain/以太坊/智能合约/index.html","e69dbf4699dc3bfe99706fd30344b344"],["categories/CSS/index.html","18ee98588ebadcbde96ebba19e6ad812"],["categories/Git/index.html","7a8048a5f7519a41c791d65e5a650b9a"],["categories/Java/index.html","99deef4468c0212e9be973ed2405d125"],["categories/JavaScript/NPM/index.html","8d402ef24f56a7385dd55743ea3639d5"],["categories/JavaScript/Vue/index.html","22b5f09e124131c7c48f12b9b052029d"],["categories/JavaScript/index.html","a7da3962846af9018c4dce554051a061"],["categories/Kafka/index.html","a58d1cdcbaa2af155c0be570e13f49eb"],["categories/Linux/Shell/index.html","5315b863876821d82bedfab2a5b9dbbe"],["categories/Linux/Ubuntu/index.html","c2a14efb837958e86655995eb248ca8c"],["categories/Linux/index.html","21fc42cdefc6acf34dacd144633013c4"],["categories/MongoDB/index.html","47a71fc8443bb7fd4d254b7da37e9828"],["categories/MySQL/index.html","0e4137ae48e7d4830ada7cab41291cc1"],["categories/Python/index.html","1f8adb23dc9477cea1aaa062aec4963b"],["categories/iOS/index.html","654c74e592cb9dbb388a03467a2e49e9"],["categories/index.html","3107372c90714ec82ba9f6907e643775"],["categories/微信/index.html","cd446f6c2e08dd052fdd3c1be936f247"],["categories/杂记/index.html","5a9a10ec790deba18794630d6e80f0c5"],["categories/程序人生/index.html","cb1481924eb7b4f1534d1066abfa2cc4"],["categories/计划/index.html","51b28b78697e20ea7c75a5f1b896ccc6"],["css/css-font-note.html","5e82ed0e2448cf19e161c583daa76f15"],["css/css-normal-flow.html","020494d58087e2582b1ac57b1416eae8"],["css/css-sass-introduction.html","62d8f618e3886d9d7a6d2dac00d7664a"],["css/main.css","2cf1b355a33b8d38ec339d633ca38c1c"],["drafts/configure-multiple-vue-project-with-nginx.html","d81e17b77ff8cef8181f43610ad15ff7"],["drafts/iframe.html","5d2f30a0bfd218b9350cf358a49ac732"],["drafts/record-re-install-mac-os-10-12-6.html","5fe0e7f18f406be023a59d6637283e5a"],["essay/note-ximurong-tree.html","557a2ebe5157ea8a192c56a3adea1f3f"],["git/git-DETACHED-HEAD.html","bd35ca15a23cdb4d8a05d7c9ecd5f881"],["git/git-branch.html","5fe9f627fb52699be26891d1e9914001"],["git/git-change-server-password.html","74f27281394c1e104f8699814479fb08"],["git/git-checkout-1.html","ff8edcb1156490fc22a05e196ff7f7d1"],["git/git-checkout-2.html","e51a046d8b669a7e8adf2ffbb2374bfe"],["git/git-diff-m-symbol.html","72dc4b68a0eb136596bd85371f90582e"],["git/git-git-flow.html","6737608048312d7e71d6f507af2a81a9"],["git/git-git-merge-ff-no-ff.html","25986cf804ca89e19a1afa8eec5ee762"],["git/git-git-merge-true-merge.html","2df354c26b5b02413ab85885df2c567b"],["git/git-gitlab-flow.html","377ea476f00441f5941b1daecb4bbf63"],["git/git-index.html","9941e205b5c6d1f8228785bc92f1c6ee"],["git/git-merge-choose-one-side-code.html","701c72881f4f7e01341a57e118c870f7"],["git/git-merge-exist-conflict.html","3981d03702c6c181234ae23f68426ae4"],["git/git-pull-1.html","18e5727f3d87d96a9089758b808008a0"],["git/git-reflog.html","6e3a27c6b2f30be6f0dd42b1407b4386"],["git/git-remote-set-url.html","a52d67485c44fab0828697b4b748c1ec"],["git/git-reset.html","04fc3e9bd5510ab2362e6216404518d6"],["git/git-revert.html","b8bd846689e9e5c4ce1ac627481b71f9"],["git/git-tag.html","3ae2e2b4cad26b706b0f085aa98adc9a"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","084f6247202381d35c02678df0a714e4"],["ios/ios-oc-kvc-1.html","b71fa2d43994e6ba524aafa89c610fbe"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","2ea60c8663d1b2c2b175e121685f9711"],["java/java-annotation-request-response.html","54f1e52f9d579622087d9c6e772ada15"],["java/java-deploy-resource-folder.html","796ef3c8bd79807166705745b77fad62"],["java/java-jps-note.html","7dedfa6ee69a7bedfd1080e6d0b1988a"],["java/java-pojo-bean-note.html","51b97a6c41d9375fed7ec789be5d29eb"],["java/java-shiro-note.html","3f95da80e36906890a2d820876162945"],["java/java-spring-autowired.html","a0815ff6dc2abc52c9418812ffec32e7"],["java/java-spring-configuration-bean.html","d6fffafefde7075d78599bc81a430c0d"],["java/java-spring-restcontroller-note.html","5c2bb63d57abfbb0dd1fcb3a50dd1ec2"],["java/java-springmvc-X-Frame-Options.html","d88bfa3c9a9bd93f7c4ed25e7509713b"],["java/java-synchronized-note.html","7102bc2c32f5d41c8fc7626b2b15b6f7"],["java/url-rewrite.html","432590c53eee941acaf4f0bfc8954d3b"],["java/url-value-pass.html","8c698e562c5e27ba8f7c2a5086902844"],["js/js-logical-operator.html","b392037c7679db7fbd1fb9e9b20ab96a"],["js/js-npm-symbol-caret.html","dc19b770f97d67c9135a6497952cacb2"],["js/js-npm-symbol-tilde.html","c9f21278515501209990b977fba6fb85"],["js/js-this.html","a6e00d29aeff673630911eacffb4e4e0"],["js/js-vue-note-components.html","9ae3b4aaf64be4e264c4b5f883b810ff"],["js/js-vue-note-computed.html","986211e00506d60dd84ce8ec92a3cec8"],["js/js-vue-note-css-style-binding.html","2360b515c5079aa10903730d0304c1b9"],["js/js-vue-note-directive.html","4991548bad5ecc4d77e6aa29f45fe1a6"],["js/js-vue-note-instance.html","cc4adb363ba993d4f45ce44793ffb7a8"],["js/js-vue-note-introduction.html","ce6736b43d4584930259e762a5141735"],["js/js-vue-note-syntax.html","f50741e8243fb57dd651658fdeadbe81"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","e3f3c17379286ae0e1a4fdab45bd5b5f"],["linux/shell-command-df.html","16890111404e340e147640a078ed9830"],["linux/shell-command-du.html","bed863e7dbf0f232bf35c4f19e2dac2d"],["linux/shell-command-netstat.html","edfec6de7b18e1bb1512f57403dc84c7"],["linux/shell-command-sed.html","2b73fab02953ddcbd6094213a972ba7f"],["linux/shell-command-tar.html","f0f4cb6d88e2162cb3605f0434a9317a"],["linux/shell-command-top.html","5d553d61deb522ba948a4e954c78330a"],["linux/shell-command-touch.html","1464d590d2665a13373eec7289889257"],["linux/shell-command-which.html","91ca10b159d92fc88aecf44f9acc9a46"],["linux/ubuntu-user-add-delete.html","70454827f0748096b1e7ad8d78854019"],["mongodb/mongodb-collection-aggregation-introduction.html","b42c059f56d8d9c41f5f58a588eabdbc"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","9a314981e7589226b74cd0e1f1550feb"],["mongodb/mongodb-collection-create.html","298a3bedaebfda1cfeb99a0facf37b19"],["mongodb/mongodb-collection-delete.html","4f8d4791b17d63474fd910d857c13485"],["mongodb/mongodb-collection-find-1.html","eef4af141f6cb0627a724c52702e1c79"],["mongodb/mongodb-collection-find-projection-operator.html","82fd342929112bc7bcb3070ff79d611c"],["mongodb/mongodb-collection-insert-1.html","c115bc751135a74b5b59ad9ed7f2bcce"],["mongodb/mongodb-database-create.html","e205c8f8468496ddf69a601b5c60e52e"],["mongodb/mongodb-java-driver.html","111ced5bae9701566304fc1c02d5acda"],["mongodb/mongodb-schema-design-note.html","f41f04078e3e9e3eb4095fc45454a2c4"],["mongodb/mongodb-study-note-1.html","e2fcc46fe690eb5ab528f47d6cbe0c5f"],["mongodb/mongodb-study-note-2.html","095a596b46440a4f39b974792fea2462"],["mongodb/mongodb-study-note-3.html","2cce9cf77457601779933a2c38ab3af3"],["mysql/mysql-ddl-handy-book.html","f1eb44e2572e53a9c156408f795254d0"],["page/2/index.html","9d852a4b5c5b3563c07975ebbd9aa8bf"],["page/3/index.html","54deabbd82e018d1497b4215fa67edb5"],["page/4/index.html","5d7baa948229b9b6acf5cbaeebbcc741"],["page/5/index.html","8461fdc7141b24db471f57e70dadb6bf"],["photos/index.html","26897c392d3b873d73a379ea90426e9d"],["python/python-args-kwargs.html","32b8b46ee63d01d6d752c67d3dae752e"],["python/upgrade-python-under-ubuntu1604.html","fdf9ca07b936a64ea3120412e6fe7fb2"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","aa7b926c955f0ebda2f9dcbda1234634"],["slides/index.html","46287816d3c6ba91d677ef804feed83c"],["tags/Autowired/index.html","2c0cf4f4b90b20d826d6f158312e32c6"],["tags/Base48/index.html","ebdbd11947b9de7a98067bf6a49fce1c"],["tags/Beans/index.html","91c36cdb451a98c959a5b4e78255210b"],["tags/CSS/index.html","3877be83298e9d1d6b1d48dcda755be2"],["tags/DETACHED-HEAD/index.html","2037fce69793405e036a431e2c903b82"],["tags/Git-Flow/index.html","bc5f03cd3f5521ed36a4f3e2cf9298ea"],["tags/Git/index.html","f558a950ace3e4ce79495126c8a32800"],["tags/GitLab-Workflow/index.html","3be57184af7525767d16d2eda700dfb4"],["tags/JS/index.html","b4500025363eadc4fe38f749af186c74"],["tags/Java/index.html","44dced6dfbd6a22c6754b3773d5c0719"],["tags/JavaScript/index.html","e2af2076b3439f82bff192197c9e9c21"],["tags/KVC/index.html","db9afa5efb71e7ed88ef549f82ed7bf4"],["tags/Kafka/index.html","7ef302ebce77e9ef77d6eb8882bb2e8b"],["tags/Linux/index.html","2dfd8c69bdc68350f2589736cb06bfab"],["tags/M/index.html","b76216b6a532dc8117b6b0c293e0f0f2"],["tags/MongoDB/index.html","6757babd91356ab4cbe8c81873123e33"],["tags/MySQL/index.html","41b40b17ea4ac152e16b50435477faf9"],["tags/NAT/index.html","dcdae7aec94eb69825bc08fa23a90931"],["tags/NPM/index.html","24df1335d88779afd8d30298cfc1923f"],["tags/OC/index.html","4c50a63e37ffe4b806d3998e69225dd7"],["tags/POJO/index.html","55e618ccff3fde10d0ddbba9c0fc1336"],["tags/Python/index.html","b535a05742f72348b45608927b2256be"],["tags/ReactiveCocoa/index.html","6fe5a6992cda694917a809fd2af1864e"],["tags/ReactiveObjC/index.html","73b65a8eaea775949dc24adabe1e52c7"],["tags/Repository-not-found/index.html","49d0e41341ab6ff5b27f7c66bccd0777"],["tags/RequestBody/index.html","360a3574d933c14894789d28cbaddc1a"],["tags/ResponseBody/index.html","60a1377fb7e6f6f978ace92c9aff948a"],["tags/RestControlle/index.html","d1285eb69af0a2aa7725a2c15336f837"],["tags/SASS/index.html","fb787f7d03791782d9c55fb7bb29379c"],["tags/Spring/index.html","e0c9133fe9e1ed9e0a9e538f14ae0535"],["tags/SprintMVC/index.html","b013fb955c8e786918838ca2b58b87a7"],["tags/Style/index.html","3bc2eba065baf0411009e366c77bd48a"],["tags/Ubuntu16-04/index.html","0795b3f6cb04d802a6f79f8ef68cfa89"],["tags/Vue/index.html","9ac35e7a265a5dd219605921eec5e7b1"],["tags/X-Frame-Options/index.html","1dde19b88d94705ae46e1c26b95f9435"],["tags/aggregate/index.html","42953013fa8cae05bc08658c738a4ec7"],["tags/alter/index.html","fd5d2eea7bb54297752b60c73812752e"],["tags/annotation/index.html","e015c883d74201d38fe7dbe521c4769a"],["tags/args/index.html","953423c42b802eb1f1be6fe32b477404"],["tags/change/index.html","8abb076989d4eaffd5a17e83d2e30461"],["tags/checkout/index.html","1a513dce9b692f846fe23a63c1569a75"],["tags/collection/index.html","9a3f90cc8e65381c64a3d781b9836dff"],["tags/component/index.html","aee0d167d2378bda5b339d092531cc2f"],["tags/computed/index.html","2931581c2ac098043fc94a0eb59bce81"],["tags/create/index.html","b1be0f37909b118ce2f535ead52d30f4"],["tags/database/index.html","fb924a748a4e96c8cb9b30506a823bf5"],["tags/df/index.html","5bad7a6ac582bbb3f3bafa49df5d510b"],["tags/diff/index.html","1f6b0d30c8d9f3d11a354c996958faa5"],["tags/driver/index.html","2dba19a69857275ce01c236ecab1c4d8"],["tags/du/index.html","20dd36dc3345859d0554bafa5a7ae41a"],["tags/fast-forward/index.html","3cb347c896f806c29fb5fce0dff41d74"],["tags/ff/index.html","281b69c214f4d0d0921616d8a866065b"],["tags/font-size/index.html","100475b175280ace5176021972413214"],["tags/font/index.html","b84195e08463042a7dc6958ab772701c"],["tags/git-branch/index.html","4cbdf182230fcabbb1f5aed70b5309b3"],["tags/git-index/index.html","34457e2fb13cbd0ef7e3a9c3203447b4"],["tags/git-merge/index.html","7a263740865509895bac23d00b7f52ba"],["tags/git-pull/index.html","1ccb7782d18a39ee0e5698c1064530e6"],["tags/git-reflog/index.html","769d458ee4ce382226f112b400fbf29e"],["tags/git-reset/index.html","9f9e893fcd68c2cd999c8c57aab0f6d5"],["tags/git-revert/index.html","b21d4f6c6cd269dfd8e5094dfc053960"],["tags/git-tag/index.html","fc15e8d9ebe4530a66765c94eb847ffe"],["tags/index.html","5c91334d1c3b6a603a7d93ddefa88bee"],["tags/jps/index.html","d1628cf88db6338f9948f514ea3656da"],["tags/kwargs/index.html","a2254017286ca538b85ef3d20eac35cc"],["tags/modify/index.html","9e1a93ad7d65569a482a9bef3456e64f"],["tags/no-ff/index.html","223b01394b7ca594ec8663a658af9e50"],["tags/rewrite/index.html","1fc0dc6b34bc3d341dc7eb46c8f666b0"],["tags/schema/index.html","ad94e9a00626ddf4ca5cee8297766552"],["tags/shell/index.html","2f5432bf3dd2461deb3eea208997623b"],["tags/shiro/index.html","9349ff78cfb799e03c367e405ceb8814"],["tags/synchronized/index.html","5fc366f21172321a4d0365162a39ec4f"],["tags/this/index.html","509d913d9c9eec68109f901a61441bb5"],["tags/tomcat/index.html","ed89e10a7bf6bdd651176808beee3ece"],["tags/true-merge/index.html","8b7ce9c3eb9c6373076f7d7a97542764"],["tags/url/index.html","f52a0f68fb0754e2e34b2ca1915bf6e1"],["tags/windows/index.html","dff75f2ce012f790b35f18392b2f035b"],["tags/一棵开花的树/index.html","7d9cfa4e24838ed71a4a2c9fce9e9c41"],["tags/介绍/index.html","751815f6360d91a124bd64c1cbb1e470"],["tags/以太坊/index.html","929223a2b903caeded5bf1f5651e945d"],["tags/依赖包/index.html","4a8f6ed5e455bb6ad9f916823fc7099a"],["tags/修改/index.html","cdc06c4adf5cc8559ab5ff58a6ab2c7b"],["tags/值传递/index.html","9403cf3780c53c822660110ca819ce31"],["tags/冲突/index.html","735eb2a07ff8f2f31a4c471b6d2cc18b"],["tags/分支/index.html","0228099540e2442356b4850a34305021"],["tags/创建/index.html","5e6a085b3c96b4c664e34abad60e9cc6"],["tags/创建数据库/index.html","5a3ed692202b732ab91d692936b151ee"],["tags/区块链/index.html","866f0c79ffb0aa4c8a00abd0c56af684"],["tags/升级/index.html","f48b943ea1fdf6ffa434aa5ce86d9ac1"],["tags/参数/index.html","1db4e079edb443fe4a27540c22fb9a10"],["tags/存在/index.html","e495b2257e076b9580c5211b6609b2bc"],["tags/学习笔记/index.html","36a117f23afea8e00fc663f41e74537a"],["tags/实例/index.html","014ffbae1dca44aa94a5f8e0f2ac7a6c"],["tags/工作流/index.html","d27385cd23544f6d71ae511ff9461a9f"],["tags/工具/index.html","bf345e059d20f38c0172d0f1c866e5c5"],["tags/席慕蓉/index.html","4dd349370ec8d945c593eacd695e9dab"],["tags/微信/index.html","0298be2cb6d26fcb9b056cf5aab0e15f"],["tags/插入/index.html","b5faf5954090694f862fc3c3453e2230"],["tags/数据存储/index.html","b00b2a2f6d38cdf03e38a567398d0293"],["tags/数据库/index.html","a0119a66700b808af0e28b4904169a78"],["tags/数据集合/index.html","e28b28e1d36f94af866430c394b6bac2"],["tags/文档/index.html","31afdc00474d882014b2a798098504fd"],["tags/文档流/index.html","8496630b0f07b8690300cd9cbef6003b"],["tags/智能合约/index.html","860e06589a694d2c2ffd6c020d3891b5"],["tags/标签/index.html","e20fbd447789b59ea2e6f2166c937115"],["tags/模板语法/index.html","d24425d98fe1e6601ac2210a2a2244ed"],["tags/比特币/index.html","402f69330ea9fb53b6d1c2cc4469c089"],["tags/波浪字符/index.html","c64b86f327a8834521e194ddc163d199"],["tags/注解/index.html","8bd4498d416b1361c3afbd1adfca8374"],["tags/用法/index.html","055b2225ee30ff090dde205aa4c2f01e"],["tags/穿透/index.html","970581cfbadff68f98da467bb7ee638e"],["tags/笔记/index.html","e14155b35a8677cabc92df7708ebfc3f"],["tags/符号/index.html","cde97d269e4bc7a38ff2b0fd1ec2d694"],["tags/组件基础/index.html","96054fc2072d6725fe3abff64004a63f"],["tags/绑定/index.html","465c1d04a56247dbb90fdd7b6272a00a"],["tags/编程/index.html","ddac42ed6784b3829cccc10acd13b34c"],["tags/聚合/index.html","5b34e3d4bb4c25f45e15be1a855a2edf"],["tags/自定义指令/index.html","188d1b024c7da490750f2fce22f5e996"],["tags/计算属性/index.html","ef37ed3b1632ca164eeee51243ac911a"],["tags/进程/index.html","0a107b8a4927a6b1859e48878703fcf5"],["tags/远程仓库地址/index.html","3a1146867b5c259fbdd8e9217289a65d"],["tags/逻辑操作符/index.html","caf5947019b66f5e59d7be418ee82898"],["tags/部署/index.html","9c022a5e41e72b2b5ecb7a488577c391"],["tags/难度/index.html","b2984e77dc26391b9313611c0611548e"],["tags/集合/index.html","804dfff505debaa837addd2fffe30f65"],["thinking_in_programmer_life/full-stack-programmer.html","302b86993f13d44eb4000e979270861f"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","2f2784478f40a4682aa97c3df041aff1"]];
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







