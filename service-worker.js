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

var precacheConfig = [["Kafka/kafka-introduction-note.html","b3edd0431bfebe737443b80ebc1a6364"],["Kafka/kafka-storage-principle.html","34bd2d68d20d1394fb11510fb78ba87e"],["about/index.html","29465df973b9657df755f8268e43a87b"],["archives/2018/06/index.html","0a8c039c2eb1c3388ad738df4f5fb1e2"],["archives/2018/07/index.html","a9f35289669c6d4ce057a39592ea0aac"],["archives/2018/08/index.html","fd5eaa2f7bfe7d0b08d17a0dbcd31c45"],["archives/2018/09/index.html","2bd469ca8fcd45e42dc275194bebedf4"],["archives/2018/10/index.html","e11599b13f22e71745ed33e6613722ac"],["archives/2018/11/index.html","32394acc0cafd1a2761138a912f82ec4"],["archives/2018/12/index.html","ff78dd98b53a8e8f7c0b35703e9d2842"],["archives/2018/index.html","7c848ca71e68d4595619c5ed1148bdb3"],["archives/2018/page/2/index.html","8cadefa04830b8a6730381318c72fa7f"],["archives/2019/01/index.html","9f4c5ec8f00d1104fbff914ffab94cf1"],["archives/2019/02/index.html","57c9067b4162c2a45fb8acce0355a525"],["archives/2019/04/index.html","a4d2663e43c143943c610cea3a10de0f"],["archives/2019/05/index.html","0c72265868580f117dc19d61948c0ec7"],["archives/2019/06/index.html","90f7ecf2a0f9de451e4bf9dd837efda8"],["archives/2019/07/index.html","4bef31a4d4bf03cce1c72b7bd4e5b54a"],["archives/2019/index.html","3a7168286efcfefe32704fbfebd518bb"],["archives/index.html","3361b26b9211497980f7292114f60834"],["archives/page/2/index.html","5599d9b65e8a0d9605dc7ebda1b34d85"],["atom/index.html","e96430f3d8d78dabb8b8329fb142b087"],["blockchain/base64-base58.html","f21d734eea316261df498bb265d9e0dd"],["blockchain/bitcoin-data-storage.html","07c23751f5aaf90d4441c1b8319c32d7"],["blockchain/bitcoin-difficulty.html","3ae2419ed7e90b38b4b96d48198bcbb1"],["blockchain/block-chain-ethereum-contract-program.html","2786dd6bf8f63110ad054eaaf9983999"],["blockchain/ethereum-programming-introduction.html","04ccb0779e44fb7bc05e4668b5f1a271"],["blockchain/ethereum-rationale-introduction.html","5ca7208ddcde09fd2c87cd657cb1bae2"],["books/index.html","7b0fa1a8948cddd07d595a47c35e6dd0"],["categories/Blockchain/index.html","e08e6ac4c65a7957d5f46d09aaa45451"],["categories/Blockchain/以太坊/index.html","e02061787ab5594651b70694321888e2"],["categories/Blockchain/以太坊/智能合约/index.html","203078d36042d81e8b4321ce162f3ab8"],["categories/CSS/index.html","679865df699fde7cc513a117adf76e2d"],["categories/Design-Pattern/index.html","484be7ad33f3a82f24efde0bda4ca3c1"],["categories/Git/index.html","01708dfbe396552684f6b1cd153b87ba"],["categories/Java/index.html","b17aad87ac5ca14e6a5ff68f630d5ec0"],["categories/JavaScript/NPM/index.html","7c77f4474e070df0113c18f103829a99"],["categories/JavaScript/Vue/index.html","fa2f363cebf4ac4ead02c5f0ffb96170"],["categories/JavaScript/index.html","d68d680e5716a650a955162be691f8e3"],["categories/Kafka/index.html","f46982c2a971031bc74fd910cddc3c16"],["categories/Linux/Shell/index.html","cb4cdff15d9fac970ab517aee55d0502"],["categories/Linux/Ubuntu/index.html","20ca8292b64008e4b3816dfaaa537e82"],["categories/Linux/index.html","017c234162f778d520dcd7c6f0389b87"],["categories/MongoDB/index.html","762092da23745976c09f09a138af9399"],["categories/MySQL/index.html","30a559ca864c5401839429641def1810"],["categories/Python/index.html","8833a39a93f7d0c648b0f4a34a6d8c40"],["categories/iOS/index.html","360e2375056f69781111e004688a73ef"],["categories/index.html","c8ead5b2ec670b38539167d3aeb119b4"],["categories/微信/index.html","ad5e822f65730d1cee9b9e5441bd9632"],["categories/杂记/index.html","c53572c815f4c6881f68e656af91723d"],["categories/程序人生/index.html","9368269967ac88c52f8bbcfe6ac336d3"],["categories/计划/index.html","843146bd72c5c0ed1dab30dc39e65316"],["css/css-font-note.html","9c9dffbc6ffa40789117a15f2f0f98dd"],["css/css-normal-flow.html","ca149d949d68d008526642a3ad6d54d7"],["css/css-sass-introduction.html","7a4d4bea5345c93a075a48c9c6a5f531"],["css/main.css","986017a06bc6644f775e021cb6c13330"],["design-pattern/chain-of-responsibility.html","4ea6050cc0832933f5a254bea31938a6"],["design-pattern/delegate-and-proxy.html","846583bb324446a72588e0d3adfdf6da"],["drafts/configure-multiple-vue-project-with-nginx.html","8a62eef6b42b0ddedcbfe0cd198b5aec"],["drafts/iframe.html","4117eb82917185716966a49bb3ba05d3"],["drafts/record-re-install-mac-os-10-12-6.html","77578b9681f59d922299f8396836550c"],["essay/note-ximurong-tree.html","95b4ffc851cc122ffc4b0720256e3a4f"],["git/git-DETACHED-HEAD.html","3b86a418d448b64edac13a6bb05a39f6"],["git/git-branch.html","287808acfb4a23593fdbd2f0063cbae4"],["git/git-change-server-password.html","8ed25d534991c1116f1139214f639a01"],["git/git-checkout-1.html","428d760b3100623138a3b21f1ac98a35"],["git/git-checkout-2.html","a74055bcea94373c225e311f48c70b43"],["git/git-diff-m-symbol.html","2d751aa9faf5953edd7cb79364f4dbee"],["git/git-git-flow.html","7301ec6a1152e585a91149d3dc06b539"],["git/git-git-merge-ff-no-ff.html","a6d099cd984807f56df4893abed3eabe"],["git/git-git-merge-true-merge.html","ba4197f744c3fa5989066b061ae1ca37"],["git/git-gitlab-flow.html","1e48d3455c67e736665f939507204dc8"],["git/git-index.html","5f0f8d321fd3466278be8d4fc747c3f1"],["git/git-merge-choose-one-side-code.html","be298ba04f0b9de9b87b784ec9c6629a"],["git/git-merge-exist-conflict.html","4a8f68d8a062c6aad20e84b244c599a2"],["git/git-pull-1.html","07af01f18b7c10d9fb62716cb13f211f"],["git/git-reflog.html","f1b9b651b84fb769ccbc033153925d82"],["git/git-remote-set-url.html","92b6b2b25723f56b2e0d1dca1feeab64"],["git/git-reset.html","fbfd1af54634bddba1466958c4e21ebf"],["git/git-revert.html","520f2632c4e17186351262626bc56bb7"],["git/git-tag.html","b14533e9c619bea1e68ed20b4d53f079"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3d1a3ab5fac9d1e90ccc61845c80465f"],["ios/ios-oc-kvc-1.html","90d944a34d12e7be9d2c6bde0b06e53a"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","a54a3d1dd34da94ea891a1cbd559a8ab"],["ios/ios-themes.html","de9e4c67702b7df0b4e6d12b25dfc84e"],["java/java-annotation-request-response.html","eae0da13a1282d1dd46553751664caa8"],["java/java-array-and-container-note.html","921c11e7e9c6c1c97b0ab70c8fb7fa44"],["java/java-deploy-resource-folder.html","0513afffb40e4e97454758a7593eeec7"],["java/java-jps-note.html","4e2bf933881f4dec571ee7c9bf9ce9bf"],["java/java-pojo-bean-note.html","f688749d1e7d1d76b6b22d58ca63d991"],["java/java-shiro-note.html","129dcd248641681faea3eb4dd962f350"],["java/java-spring-autowired.html","783df9f3f55e2d8db95ccf15483b67b0"],["java/java-spring-configuration-bean.html","5967534324885ec9c587f91cc810c86f"],["java/java-spring-restcontroller-note.html","54de953a1398c1ad7a637bb02f29e8ea"],["java/java-springmvc-X-Frame-Options.html","506c1ba923f92de62558706539986951"],["java/java-synchronized-note.html","c47fa541189cf4f8a098bf18f3d28b9b"],["java/url-rewrite.html","14dc76825ce5241fa865933a30d70a54"],["java/url-value-pass.html","88097aba4511b9ded0f81cc183580f7b"],["js/js-logical-operator.html","3f07fb11254487c28e943a9c7c94a1f9"],["js/js-npm-symbol-caret.html","0fee73a0000644ae83e768e645ccde71"],["js/js-npm-symbol-tilde.html","57349b2e8695d8f660179b6bafa54057"],["js/js-this.html","82979c9a982d8f0605c3ebdeee2dd689"],["js/js-vue-note-components.html","d89abf125567734852f3d281db5f8fb5"],["js/js-vue-note-computed.html","3e426bebd0024ffe0809fb483853f29f"],["js/js-vue-note-css-style-binding.html","7a2a747f8f2ee6371f0d6a8f091c4ea1"],["js/js-vue-note-directive.html","b68194583645e332ad7d74d4ec790f2a"],["js/js-vue-note-instance.html","ad1445505b0cbd127ca33707c2114f1d"],["js/js-vue-note-introduction.html","974898f90bdbef0f03c66e2100c92986"],["js/js-vue-note-syntax.html","8b8d0c7a9fbe047e326904675a6c2822"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","7f69345d6d1605b93316f53c2ea6fd88"],["linux/shell-command-awk.html","9f4bf53bb475d902c19a47d02977eca7"],["linux/shell-command-df.html","18ec6ed9265f324719df9470053440db"],["linux/shell-command-du.html","f7b972ac1d78ac92a50ba535e6e8bd8e"],["linux/shell-command-netstat.html","09098fe1e3040499a57e1496b16af2a5"],["linux/shell-command-sed.html","e0b95ad8e7cfa4db2b5ee292096f15e2"],["linux/shell-command-tar.html","4778ddb26df98f9602b0091ddbb58969"],["linux/shell-command-top.html","fc5000fe838b2ae963522ad1e1423fa2"],["linux/shell-command-touch.html","ba2a3a8b11b23f50e806bc7f9ed1b21d"],["linux/shell-command-which.html","1045d1e5669f29a538a401cb9bef04fa"],["linux/ubuntu-user-add-delete.html","acbe4c22696778008e9d102fbb50e3d7"],["mongodb/mongodb-collection-aggregation-introduction.html","15e95d92e8d8121614a781893ba6ee8e"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","9e9f1c871bac4bcf6aa089ab9d21439f"],["mongodb/mongodb-collection-create.html","c7ffd3f7f2466ac2929743d7f9170c86"],["mongodb/mongodb-collection-delete.html","4606387adf34c23bf76f508a5213afdf"],["mongodb/mongodb-collection-find-1.html","f11c8950461c26a84ce487228749dc1d"],["mongodb/mongodb-collection-find-projection-operator.html","18b28e4c1226c6d6c5c4dfe2bc8ebf30"],["mongodb/mongodb-collection-insert-1.html","80e53a03ea553fffb4d1db967c9a7c92"],["mongodb/mongodb-database-create.html","d1932cd672324e36b7152bd6f734c41a"],["mongodb/mongodb-java-driver.html","1ac5265233e78ec4a4c4f8e15b1022a7"],["mongodb/mongodb-schema-design-note.html","963ad7cacd3aa3ff8866de248f1ca47c"],["mongodb/mongodb-study-note-1.html","c9c980aa07d47688ab4f07de9629ae05"],["mongodb/mongodb-study-note-2.html","4c432c92ec94dadbdc572406357bab0d"],["mongodb/mongodb-study-note-3.html","73c9441738814ad2758ce3f1d2851818"],["mysql/mysql-ddl-handy-book.html","b49e8aec453fe2b9eeccb70d172b07e6"],["page/2/index.html","3f6acb4424581469337bbc76b0f68fdb"],["page/3/index.html","62e3cb722d9177b261565a82383e29c9"],["page/4/index.html","fdbcbb6e1778165cc499ade1382bc78b"],["page/5/index.html","cdd5c7c47b4ac324099fa2ed303c2549"],["photos/index.html","66a7f9c57bc41302384a7bfcc34ddce8"],["python/python-args-kwargs.html","53cb94c952025bc8c9a69d7a60c30672"],["python/upgrade-python-under-ubuntu1604.html","c766911f91bf57b4b01de378fdf975b5"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","2bf7d577d122c7781b05c0dda887d6c1"],["slides/index.html","fa40cb39240b6d950355222bcac1c48b"],["tags/Autowired/index.html","932a84dbdb616e7ddaf435b8d15ecc8e"],["tags/Base48/index.html","5e377f9b95e3a705121b9087c9c1fb47"],["tags/Beans/index.html","608b61b9aeaa7f2882453e1b70d1facf"],["tags/CSS/index.html","5f611dcf1203fa8420f860dfd59137a0"],["tags/DETACHED-HEAD/index.html","b8a4b4c20e8e14e574d6eb5552c7e39e"],["tags/Git-Flow/index.html","1a3edd408c65322ffcd41ee025688b7a"],["tags/Git/index.html","6b768decda9df5adfbce43070e0de3b7"],["tags/JS/index.html","742a43d150fed68e584b23ea39ecc8e7"],["tags/Java/index.html","5621ecdf4339965c70445d4285d6751e"],["tags/Javascript/index.html","7956e95784481671c5d69e7a605abc20"],["tags/KVC/index.html","501142534aa0137ff0c5cf00cba08ad5"],["tags/Kafka/index.html","d45bfead9dc859139d80f2eff1c43c1d"],["tags/Linux/index.html","7fc2715faff491793e97eb9029ae80a8"],["tags/M/index.html","e3f47c9cf3a522f8ed107fae006d0cb6"],["tags/MongoDB/index.html","1a2e08f1bdf6d03e4118d2e654ab99c1"],["tags/MySQL/index.html","e26d1c39cc640bb05ffed6ee6b8d3d9b"],["tags/NAT/index.html","b8edafed72e88d85bbec6d03d517d15b"],["tags/NPM/index.html","d5ced6f008279c4ee2f4e68b82195798"],["tags/OC/index.html","1d2a065272a707ce365b4ef9ca39bf40"],["tags/POJO/index.html","5074722956324fb1913c9c6977b27157"],["tags/Python/index.html","e6e57d16ed6995cf140074a9994d176b"],["tags/ReactiveCocoa/index.html","e3e711bf84cb6e17676e1ee7fa049dc1"],["tags/ReactiveObjC/index.html","45b754a814fc599037080d4a1650edcc"],["tags/Repository-not-found/index.html","1b5859c1e75b65186a511261ff6914e8"],["tags/RequestBody/index.html","324ca74b3f5abf5b6e910d485db984e4"],["tags/ResponseBody/index.html","b0d9859dde2d0515496389dfbf4fcb98"],["tags/RestControlle/index.html","45d4e32d88a0b0ef78d63b86a0bdee58"],["tags/SASS/index.html","deac922b2fe41472cefae9ae62eba8e8"],["tags/Spring/index.html","5ef0dfe5775f3c5fd686d972a387e391"],["tags/SprintMVC/index.html","9331346bfbdb6d00d46d2401cc3f28e3"],["tags/Style/index.html","0ffa2e305a11539b6b6b7da383ba4699"],["tags/Ubuntu16-04/index.html","92c0456418a6be48d5615f7aa5587e55"],["tags/Vue/index.html","9b9f4024be58a442c11d9d9d8506cdaf"],["tags/Workflow/index.html","34ddfb0a172f9882ce5073988d1c3868"],["tags/X-Frame-Options/index.html","594d605f33576201cff346f402b85d51"],["tags/aggregate/index.html","935011eee24741654646731384e03bb8"],["tags/alter/index.html","1b7b2f02462d2c91f3cf762575d8b1fc"],["tags/annotation/index.html","511fdf12f08e0bc3078def7675352ed1"],["tags/args/index.html","4e21284a9374d0e202f98baaa82271b0"],["tags/change/index.html","ff4c879971352fed821d25141a885011"],["tags/checkout/index.html","e48fb841e32d738342a53f72237fe3b4"],["tags/collection/index.html","4cc48dec941cbe37d7dcdd1aa0ee9977"],["tags/component/index.html","31329ff225f28a3ec8f4917eb62beda1"],["tags/computed/index.html","0a3e9140ae91d0daefa7d9ebe20519d9"],["tags/create/index.html","fd4ed3eb6f3c80cdf1ea91bac4e2030e"],["tags/database/index.html","dbc3f7660ab22b7c1adcbfbed2014888"],["tags/df/index.html","b8ec0020940c4f40b0e7bc9ed77a387b"],["tags/diff/index.html","9c0ae5eecce49c623f99c182594007b5"],["tags/driver/index.html","3fa0bf92f9340836a20ac96e87ab1ef7"],["tags/du/index.html","5e3b888736da8c55ff46e07622d52822"],["tags/fast-forward/index.html","2c52bedc568ac7ec2f8171a4d7382afd"],["tags/ff/index.html","e798055726db1b12f6653a870b23ae31"],["tags/font-size/index.html","0c1c5f467f4b1d1647b4886c157775ce"],["tags/font/index.html","a765ff7eb9d42419afb0aabbf7d1c116"],["tags/git-branch/index.html","d76fe603673a1a0fc1fd69fa0393e3b9"],["tags/git-index/index.html","b0df6e0ce53cd6ffef4a5719b5ee28e8"],["tags/git-merge/index.html","e12bbce32c040e1da7615077b6bcd2e1"],["tags/git-pull/index.html","bce69f0502c93aa7bff058a6768e5968"],["tags/git-reflog/index.html","f24ce56989bad4a40943c439df3a8b24"],["tags/git-reset/index.html","b13b6d8f06814d4e93936bacc8ab02a2"],["tags/git-revert/index.html","4c29e2ac10a128c01378acb436dc5923"],["tags/git-tag/index.html","f7c719ddfb7fbe18e274d0c00d3944cf"],["tags/iOS/index.html","5e95874cd1d2c0df28854efa0d5ec080"],["tags/index.html","f79e555d8647c35dea0727765813ff9b"],["tags/jps/index.html","b06bdfcdaa758f844a8c3279666f4cab"],["tags/kwargs/index.html","6746d5218f8129593c06976dd338ff5b"],["tags/mac/index.html","be5c14e9d7a89e10405fd8987842bbcc"],["tags/modify/index.html","d334e3eeabf264b14b8881f47b39b7b3"],["tags/no-ff/index.html","0003aaf36c8daf607c245fdf654a0baf"],["tags/rewrite/index.html","088427cdcc1a4e059ae6c419618e2e2f"],["tags/schema/index.html","f831d265e76b1213446bc6d6a20f1adf"],["tags/shell/index.html","1f67d6009b2394f2f60b0c7c7d9f6ac5"],["tags/shiro/index.html","23f8df7d670ff0c5777a061f8efcf513"],["tags/synchronized/index.html","27b8085c56321f482159a2fb7bf93592"],["tags/this/index.html","ff58b9943a87dd0200b9e8cbd8dd55f5"],["tags/tomcat/index.html","9a0aae2d7be49a5e09414410a3340897"],["tags/true-merge/index.html","01dc61c4d5dfbce8c27c493dd1f83ded"],["tags/url/index.html","3e0668e028a14a19f94c66c1666cbfde"],["tags/windows/index.html","3996c905ee8eb32d309a9395d1766de5"],["tags/一棵开花的树/index.html","0ee71dcfa7c3b3e41282bfe512d00089"],["tags/主题/index.html","b81bb14b5aaa81c5fa375eef032b1673"],["tags/介绍/index.html","83433e61f22a19d451e9744cdcd1b0dc"],["tags/代理/index.html","dbbf155dd1030867635db2f5a0f69ca3"],["tags/以太坊/index.html","c0eb596f5b4621af1356c3e2fcf3e065"],["tags/依赖包/index.html","e9323fed37c18ec4f2d4d40009808a4c"],["tags/修改/index.html","f4fa7284afa9b02fb9c610ddbdfb94f2"],["tags/值传递/index.html","6b6bb59c395d2377b821819337e1d1c4"],["tags/冲突/index.html","b806f62f8ce7cbf4a20bb4382a0700ce"],["tags/分支/index.html","e6d20e02117fb519e98c7f1a802ca496"],["tags/创建/index.html","637fd413dc33de9559fe00728870a58c"],["tags/创建数据库/index.html","d1f1701b739db4cfb54a934409b56f4a"],["tags/区块链/index.html","ac29fe8e3800276379fc689108d4e67e"],["tags/升级/index.html","32c293f137306e17f13c8ad019618cb5"],["tags/参数/index.html","e4fb66525e168288b3177a8f259b392a"],["tags/委托/index.html","5524f3d618ad4e9b2f398a18a6fb565a"],["tags/存储/index.html","868fe5ce409df6813adecac47ae44a7b"],["tags/存在/index.html","24babfd0387aa67e75108f281a8ca251"],["tags/学习笔记/index.html","2fb9c0399585a66a4e6286b2540505d5"],["tags/实例/index.html","0edea279879d6989b951c6a3e04ca00a"],["tags/容器/index.html","4522868a46313d422994cc1969a4dc86"],["tags/工作流/index.html","e0a7d61cb93a8167d111f10846b1c4f3"],["tags/工具/index.html","2416332745f6b14926ddd160ac17ef5b"],["tags/席慕蓉/index.html","7f388aaef9bc0ff866f6cee2c4a34add"],["tags/微信/index.html","b9455728da191b0960e06cc2922e5317"],["tags/插入/index.html","3db3654414297fc2f9b5cc3ba18727fc"],["tags/数据存储/index.html","1d98bfc54cc2dc606dd3cca07f5ac3fd"],["tags/数据库/index.html","2d9d26c4dfd1c5ed14594b3ac405544f"],["tags/数据集合/index.html","ec2594a4b0e9d758854726b42bfd48aa"],["tags/数组/index.html","a5593e12feaaa092d780b9b1e786724e"],["tags/文档/index.html","24eca8f93d5a182321bc5efa2a31a5ec"],["tags/文档流/index.html","acd3b6e29a8d76e03238a4709acb4bb8"],["tags/智能合约/index.html","7daadb65bfe5d568dfb3c818ee00ce2d"],["tags/标签/index.html","3ebd00ca63056027fd79f0fdd8e410de"],["tags/模板语法/index.html","b4ecd9d7f2c3283147f37fe9a189e92e"],["tags/比特币/index.html","2bb007c5f993687e30a427fa3afe9019"],["tags/波浪字符/index.html","ee02a88035ec8412674c320009c4fdf7"],["tags/注解/index.html","cd19f13e9944a13925720b684879f110"],["tags/用法/index.html","5d468b74bddf086b090489ffa6ee6331"],["tags/穿透/index.html","1f9741f27fc8ffdac80c820647f87f94"],["tags/端口占用/index.html","5a90889b4472fc68d1791a4a3316ca3f"],["tags/笔记/index.html","8fe96b094b245830171f732d8c81ccf7"],["tags/符号/index.html","9ee97f9d5a1e32b2241711b609759e08"],["tags/组件基础/index.html","f3e50327b05c87bdc462857e1e6bd38b"],["tags/绑定/index.html","eebe9d7a673e874a5e516427915c3793"],["tags/编程/index.html","22908784bd49e5e91d7627f85952b55b"],["tags/职责链模式/index.html","da905e82e8eb14ae65d4316881043cbd"],["tags/聚合/index.html","8280babc29cab922fd84b0010f10a952"],["tags/自定义指令/index.html","2f1ca4ca19248642ac139ad22028172a"],["tags/计算属性/index.html","42652329c2140634b9bd1afc544a1c16"],["tags/设计模式/index.html","24952d4e21c18bebd5ca1e1cb5ca1cdf"],["tags/进程/index.html","4adb710a3af8f36d04b5502e6c6c8704"],["tags/远程仓库地址/index.html","fd56513ffd43b0ae1eb3b18d87bc2796"],["tags/逻辑操作符/index.html","b1c5912df5d67d932ab927eeb2614eb9"],["tags/部署/index.html","e0d3b9264a64e289e230c9de341d755e"],["tags/难度/index.html","073a17faa8bc6cd92d028328ac592f76"],["tags/集合/index.html","58a4fb492e01096f45b63379e97a76ba"],["thinking_in_programmer_life/full-stack-programmer.html","afccb57d828f7e6136d2d9bce484d948"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","ac151cc7f42028d8a458be9d77217141"]];
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







