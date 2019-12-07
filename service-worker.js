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

var precacheConfig = [["Kafka/kafka-introduction-note.html","4ba2dd4199c08bc1843feab78dc27775"],["Kafka/kafka-storage-principle.html","0375ff599a85fb43c27bc07aff4c2bd6"],["about/index.html","22d870d73aaad06c33a952c18fd9717f"],["archives/2018/06/index.html","fc35cdf02a140f4396040cc5fce704e3"],["archives/2018/07/index.html","00ccb96aa5b89911b8983c69b6058229"],["archives/2018/08/index.html","46e346cf9a0102d4a48e04951af702b3"],["archives/2018/09/index.html","b86cd8ac4d239d9a60d3aa9a991779ad"],["archives/2018/10/index.html","eb675df942da14297589c49a3b602fd5"],["archives/2018/11/index.html","314e715fc38626be2e6402862bc92b0e"],["archives/2018/12/index.html","bc829f6c56fbd2bc71b1c488558a54ff"],["archives/2018/index.html","f4dc845cf7efeecaef58b9a808f81f58"],["archives/2018/page/2/index.html","4893ff2bda6fc099b74652eb7251cf26"],["archives/2019/01/index.html","b991d03423d74957e3480c17d0abd9a2"],["archives/2019/02/index.html","d562f0755bcfa452d3b3cc6b7a426221"],["archives/2019/04/index.html","3c9d5097925fdeffe0222a49eaa356bb"],["archives/2019/05/index.html","ee4c0c07871885636ffd2edd5bbd3c2b"],["archives/2019/06/index.html","242effccff0b96b6330a69feadc37167"],["archives/2019/07/index.html","b38e5636e099f7043083511318c68c24"],["archives/2019/08/index.html","00d4adc5585f073f528c3f2f39ab143c"],["archives/2019/09/index.html","62958019b2e4f417a5ef1d90d71454b7"],["archives/2019/10/index.html","5d6ad564fc057fcb9a9fa5abddcca626"],["archives/2019/11/index.html","e49a1e0773233c18d8f1d38819b94be3"],["archives/2019/12/index.html","c36552f14f1e456c3400b5e40a8c64a2"],["archives/2019/index.html","539f1ec64c8e894e21e6a8ff57e8fff8"],["archives/index.html","e62abb8d4ec9e0b131e6c6a21a17739e"],["archives/page/2/index.html","5b57355aef8c9a682d0005f93395ec9b"],["archives/page/3/index.html","d5174dc6c3c12d00ac1316f17a64a45e"],["atom/index.html","3a0e63d351dd2808f711cd0beb3a0f4d"],["blockchain/base64-base58.html","cf1e2f1d505a9dc0d3b9df29e3754979"],["blockchain/bitcoin-data-storage.html","f679fa498f3267372bd7ce245423af11"],["blockchain/bitcoin-difficulty.html","341f9ab77c7936774835e5ff7e8b882b"],["blockchain/block-chain-ethereum-contract-program.html","37155b90606ac49c2880c8cf13618206"],["blockchain/ethereum-programming-introduction.html","adb8dcf33b6d21ebad92a91142b77a20"],["blockchain/ethereum-rationale-introduction.html","577dc6dd4f8671691e85fc73baff007b"],["books/index.html","b40bf31e8b08b693d45fd2be62dbb6f7"],["categories/Blockchain/index.html","10a7ed3169b61d4d6afbcb2644104ad6"],["categories/Blockchain/以太坊/index.html","7788fb5553d7ffeeb0fc21cf0931a1f0"],["categories/Blockchain/以太坊/智能合约/index.html","fa2a95cac323f9e59f6a5ca7a0f01eb1"],["categories/CSS/index.html","c5853de62294e00c30276041e8bbe8a2"],["categories/Design-Pattern/index.html","105c5506488e7d657325103f3489760a"],["categories/Git/index.html","eea4ba7eea5285e325d2b6e17740105c"],["categories/Java/index.html","b2f954337feb6d74249d055908b5eaa5"],["categories/JavaScript/NPM/index.html","867cf697c72497aee228d836c0a91bfd"],["categories/JavaScript/Vue/index.html","3e70bc7ca7cb855d177900dadfdfcd61"],["categories/JavaScript/index.html","9cc104e3e7af856bbe2204bb245b9f59"],["categories/Kafka/index.html","b667fa4a0d5c7ed3f7d0febb5f8ab2e0"],["categories/Linux/Shell/index.html","5750b47ad10e0e059ece0c4d5b8de66d"],["categories/Linux/Ubuntu/index.html","895fa6a0f9d6d3fe5e88c6b5a93aff2b"],["categories/Linux/index.html","9ebe5630b44b19c1c47590dcecc10aa3"],["categories/MongoDB/index.html","2b9c206c71dfefecd1b86b694058221d"],["categories/MySQL/index.html","d2b0b3bb0021ad7e4f8365a1c81bdbf8"],["categories/Python/index.html","14ed168a6954d4a8fb674d66434adea4"],["categories/iOS/index.html","488d398ef3a813f1575e90f893c85a2d"],["categories/index.html","d2ae8c609716f9c46746f16652dd1597"],["categories/微信/index.html","cb8bdf67098eafece3d659ff2f8b6350"],["categories/数据结构/index.html","70ade389c170ea80d3ad4dd6189a92b4"],["categories/杂记/index.html","6c7d51b3e0b79ab32d339abf995f0199"],["categories/程序人生/index.html","39f522b5ad010ade0e3855ac2e33e0f9"],["categories/计划/index.html","38b147c38e470a9db4fbbe4705bfafb3"],["css/css-font-note.html","4da7b0c61a1fb075aff8357f8aa092b5"],["css/css-normal-flow.html","0ce037c527830b0285bc25e22023d7d1"],["css/css-sass-introduction.html","d32041e698a5e0cec475664b02ed0b08"],["css/main.css","89ddafd8943454e418439661d4644c00"],["data-structure/B-tree-note-1.html","9c201f474d2e32e592d2e51a699e2379"],["data-structure/Binary-tree-note.html","2981e0173615d50bf818563aa3864809"],["design-pattern/chain-of-responsibility.html","02a80725dbc75e3743422ff69a71e931"],["design-pattern/delegate-and-proxy.html","b23f570fae41f3c9563db581f4251765"],["drafts/configure-multiple-vue-project-with-nginx.html","f2a4d4beefe4e74b312d7bfcfc515b13"],["drafts/iframe.html","283409940a2bf3a930098394fc514ba2"],["drafts/record-re-install-mac-os-10-12-6.html","9acc820926aee0ed4c2a0c589db7dc7d"],["essay/note-ximurong-tree.html","0c6aa557e78ad008fcb834b05b9639c3"],["git/git-DETACHED-HEAD.html","9c9a465617773c17bfd79d2454b4afa1"],["git/git-branch.html","14c9efc96a5596fcadbbce60dd4fe19f"],["git/git-change-server-password.html","538c8a38fab2674376ddceaaff3fb516"],["git/git-checkout-1.html","2db3c13ba8c140bdd8be318d1b49a1a8"],["git/git-checkout-2.html","a484f5a1706442639fbac61fe50a4e9f"],["git/git-diff-m-symbol.html","146910284720fdd7e34213cac01a0f80"],["git/git-git-flow.html","e9f481679494eb5d321a5f423152056f"],["git/git-git-merge-ff-no-ff.html","208efef69628b9e1a84b03590390a6f9"],["git/git-git-merge-true-merge.html","4d7661d3685c2df88724010049708605"],["git/git-gitlab-flow.html","654aa5c31c68cab8574e9de709435120"],["git/git-index.html","d308d8d08d66a435f64ca144dacd7c3a"],["git/git-merge-choose-one-side-code.html","0276275ad2230fcbf19539c261712a00"],["git/git-merge-exist-conflict.html","b94921b563729c1aa1a48f7f66f1affc"],["git/git-pull-1.html","51e37a1e1992dad018bc872b4862af7d"],["git/git-reflog.html","d56aa0b44a68e98dcf6266e279510608"],["git/git-remote-set-url.html","30087d226f0374ffbed3e60b34d3e03e"],["git/git-reset.html","0c6c409611c5dc3e69602560b4215731"],["git/git-rev-parse.html","ab3488a63b28eb3e8d0ed69c2d99e568"],["git/git-revert.html","353067be98b81b4cbb24714676c5fa05"],["git/git-tag.html","fa0c3e408168730ebb6d554d50d8f45d"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","d013de13ba2ae150421697e4eff3d92c"],["ios/ios-oc-kvc-1.html","89ec88fdecae6ad75b3208e724bcd2ab"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","efcab3b7e7f4b464e9c8cf945ce1f394"],["ios/ios-themes.html","d7714ce1ac0869daf124313b77c6e343"],["java/java-annotation-note.html","3141bb7dd181b2f0b5e0995e4feda275"],["java/java-annotation-request-response.html","56efd790dac70e0c1502833f94955c6a"],["java/java-array-and-container-note.html","3ce74be439884345f342d28af017349e"],["java/java-deploy-resource-folder.html","a0eccc61e3c0d7b4524e38cd8a422441"],["java/java-jps-note.html","954cf99a14c5a98258bb35f040899f51"],["java/java-maven-nexus-note.html","15f1ea99bf0dc257ffc0d8a7c7e4fa74"],["java/java-pojo-bean-note.html","277b4fa18d2e099acd5c11f5f799b789"],["java/java-shiro-note.html","f6cba945e80eb70c769d76437b88f8ad"],["java/java-shiro-springmvc-integration.html","175fb79c0477b346f9cde5543c43e78e"],["java/java-spring-autowired.html","04db7306b4967579df596e2a32522d29"],["java/java-spring-configuration-bean.html","73e419d7fbd689948a81c94dc121a444"],["java/java-spring-restcontroller-note.html","0231bad6d8420395e0b15cae96bf2a69"],["java/java-springmvc-X-Frame-Options.html","11e2eaef86ad109c467c1e324d342dae"],["java/java-synchronized-note.html","9f1dbc07183c0bc69a57fd4357385ff2"],["java/java-value-pass.html","93af687b9ce85f22310bcfab1d678ac0"],["java/java-vo-dto-pojo.html","e6e6e31b732cf5e680edbcf41f259ce1"],["java/url-rewrite.html","f933cc68469d8221a26d7a9ee1b1aecc"],["js/js-logical-operator.html","27838e717b4948ce8b108b5830cab244"],["js/js-npm-symbol-caret.html","15a589a42ebe8f1c863cf1b70ab74bf9"],["js/js-npm-symbol-tilde.html","15b949dfda8a4f6864a082b96811f954"],["js/js-this.html","8022a4db414939f87f9da67e954b3a07"],["js/js-vue-note-components.html","63ca03d9083f4e3a7f186ce50e9df4b6"],["js/js-vue-note-computed.html","6c39eed179c035c2f0dd7942a613b25b"],["js/js-vue-note-css-style-binding.html","9de913021c99757adfcb774d142207eb"],["js/js-vue-note-directive.html","f865cd00736b072f5516861962a7c057"],["js/js-vue-note-instance.html","0ee33941ec476eff26cf6b5b7649618e"],["js/js-vue-note-introduction.html","621b8260991c1555dd115e784ac45b7b"],["js/js-vue-note-syntax.html","0de5b47ce45a5a3fc03b22cd0e8abef7"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-top-buffer-cache.html","a94bf07f356753566b84754db7dbd7dd"],["linux/mac-find-port-occupy-process.html","d8f88b90c03476dc055f4805be3b4148"],["linux/make-vs-cmake.html","f72a5a88f1b0c6e5895e3b55e06c548d"],["linux/shell-command-awk.html","e847ece00dda819e507ffd5ed2a6a016"],["linux/shell-command-df.html","22e46fdf730e8ee48e16414d61afd360"],["linux/shell-command-du.html","1cb61b8fc06faa2d22075e8fd87f1b51"],["linux/shell-command-netstat.html","39c1f05c1e25c460645a36162d2ab8f3"],["linux/shell-command-sed.html","33cb5e42c41387e6b9cd59172b7d6cb6"],["linux/shell-command-tar.html","75c101990e1244c758f4b7e5dfa52c4f"],["linux/shell-command-top.html","ac64fae6d254d4009db1428ed9b8c6f4"],["linux/shell-command-touch.html","4f2080183165a654dd511c20ca4efea4"],["linux/shell-command-which.html","35f73596c8011a284692e5fab48b32a4"],["linux/ubuntu-user-add-delete.html","81b7c00b50021e46decd1415ab42f563"],["linux/vim-copy-note.html","a4663b67bd801a31981a54e8770d3c87"],["mongodb/mongodb-collection-aggregation-introduction.html","087662f7d8e15261e80c432921410f20"],["mongodb/mongodb-collection-aggregation-stage-operator.html","20398c4ea8acbe8a7da52fc235cb5ad7"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","86b265dddb6f0570f2094aef8b27bbda"],["mongodb/mongodb-collection-create.html","5fd4ad92b8e65273ca65cc0a06d36a17"],["mongodb/mongodb-collection-delete.html","777fc018c23dc4148b093c699668b25a"],["mongodb/mongodb-collection-find-1.html","71828fb7a68f03ff8147d04ee219dd79"],["mongodb/mongodb-collection-find-projection-operator.html","132640b4cd8e343bcf280777829e4703"],["mongodb/mongodb-collection-insert-1.html","b277b9c24602a5e0ee4ee8831a195d8c"],["mongodb/mongodb-database-create.html","9e4d26207e0f42668ccb6bce147bcb48"],["mongodb/mongodb-java-driver.html","8549c5ae74711eabdfa720d06ddac3af"],["mongodb/mongodb-schema-design-note.html","31df9d3429182eea8825c594c3679e32"],["mongodb/mongodb-study-note-1.html","7ebea69bb450aad8f8e6e88a897cf747"],["mongodb/mongodb-study-note-2.html","77c71aafbe5f322911db1c54fba04f80"],["mongodb/mongodb-study-note-3.html","b3d95ca45f8b0526c3f95e2bbf2e222f"],["mysql/B-tree-note-1.html","43307905681ad41677e4b75d7ec48a20"],["mysql/clustered-index-mysql.html","c6d2bb864c8b5c06104ab033d6642aa5"],["mysql/mysql-ddl-handy-book.html","252b7a798a5d51499ecc8243078e8577"],["page/2/index.html","6fe8bb962b7ca87299024cfe7290c0d1"],["page/3/index.html","6b2fa3e22f59aab6115c9924d6972fd2"],["page/4/index.html","0f47ae3a6698e94f14c2e1b31db35f18"],["page/5/index.html","81ede73d12fbf86a7c42a35d2add00f4"],["page/6/index.html","914f48d8ec60425b0443e4e9fe294398"],["photos/index.html","0f33c702b70c95b35115f58cf3935732"],["python/python-args-kwargs.html","e5c85d77b5f1289e1ae1a67c6823ede5"],["python/python-async-program.html","7da2394cec8db3b1a92b00505c6f1561"],["python/python-package-module-note.html","e08c7f5d12bffea75f21d9ec478ce150"],["python/upgrade-python-under-ubuntu1604.html","832efb8422271b86b9e6aaca705cebd3"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","99764a8ef3d8994585c0c7f87dce894f"],["slides/index.html","fcbba51574fe35e6e7b2f0c84fdd3d07"],["tags/Autowired/index.html","eed0990ab39165f6ff2d1bce7b668091"],["tags/B-树/index.html","c4ed4def332739ca3ecaf680921efb69"],["tags/Base48/index.html","e55552863f8fe127710077fe275273e0"],["tags/Beans/index.html","7f42d9d76511dfc40df8d67f8496348d"],["tags/CSS/index.html","fe0215b6719c7647bf1bfa556862c372"],["tags/DETACHED-HEAD/index.html","4c36a481dfdc9ae3979b5ad106487341"],["tags/DTO/index.html","39334649788d6f14a03a273c65c32f86"],["tags/Git-Flow/index.html","a5c1925645cff7a0cc23a3ded63868a8"],["tags/Git/index.html","61ec8a292fbe991e30833c0409cde564"],["tags/JS/index.html","66c7b91d2c373ac9cdcfd9dcec9fd6c3"],["tags/Java/index.html","1eca9cd7921c649d579bd931e0ba7246"],["tags/JavaScript/index.html","08b1ff0c20a66d5dbb8a795bd56e052e"],["tags/KVC/index.html","477052ad151c370f596f514fccbc12d3"],["tags/Kafka/index.html","7b8171bcf0897c9bb021bc2da8a75a7f"],["tags/Linux/index.html","b96b99eeeee4fe9c64f4499740fa59b6"],["tags/M/index.html","b5cfdcb5fac42f630b65ad09fc6e9b06"],["tags/MongoDB/index.html","a847dbcccbd5975adb7b51f969531702"],["tags/MySQL/index.html","60dc055b5bd8902b3fc6335aab126e2f"],["tags/NAT/index.html","6050ca56e80c8e6fdc6e4c9b165ad340"],["tags/NPM/index.html","584be491736ec6494890394c50d6b601"],["tags/OC/index.html","f617e90823de6ff33cea3fcca6799ae4"],["tags/POJO/index.html","129cb68506589338f247f40e5b0d9382"],["tags/Python/index.html","fd30216d2de898794fec25a78e3dd8ba"],["tags/ReactiveCocoa/index.html","c642b38176ca3a36224c44c8849e98d7"],["tags/ReactiveObjC/index.html","6d0239c357a86b714025d2eed7090486"],["tags/Repository-not-found/index.html","abc93494d626877486057011ae773963"],["tags/RequestBody/index.html","9166e814a06c43ec4f1ac98b913602b6"],["tags/ResponseBody/index.html","3261b393ebe2912ffbb421470cf00edc"],["tags/RestControlle/index.html","39cb5c3eddaabe5fc8dc862af184c2d8"],["tags/SASS/index.html","1d19934cc4bd5c1f987465dd3770db44"],["tags/Shiro/index.html","5ca68c76152a07b701e05b02866ec3bf"],["tags/Spring/index.html","487233d8423f136dd3290dba2f765f36"],["tags/SpringMVC/index.html","c0f80815a1253d23eceeffdcfc917b16"],["tags/SprintMVC/index.html","aefe30b15b7b7d27f7bb83984f7572d6"],["tags/Style/index.html","71db2be4c34124d7c574a0f7c38c5c0f"],["tags/Ubuntu16-04/index.html","1d891ae58a706ce1f569cf4ddc75adb6"],["tags/VO/index.html","ac9c7d4aeb40e86934f9e66c024f0604"],["tags/Vue/index.html","81108013d24bf9e4eff4d60becd8ca29"],["tags/Workflow/index.html","5eb935e80cd17bd868264e20b739dd3d"],["tags/X-Frame-Options/index.html","152c29e2ca50d504faa18a29fe095a5e"],["tags/aggregate/index.html","b3ca0f0aaac2bd6bd44c6f4e3830db6d"],["tags/alter/index.html","0be3315dfc4f3fbfd8fdebc03b9f571e"],["tags/annotation/index.html","9a56d8960d597b442ec1e6f9da48d488"],["tags/args/index.html","7fe8cc2e7c5a1a739f87f975a3096023"],["tags/buffer/index.html","ee863b6146a7ac129a23341717eb1e54"],["tags/cache/index.html","823fc4dcd8f7df4c29a9e953b87211af"],["tags/change/index.html","6bcb3fcd58c11458a11e345db623e9b1"],["tags/checkout/index.html","67d527dd64e7a8bf38d392532f416645"],["tags/cmake/index.html","8b952bb1c2425e64ef00e7800a3b7e3b"],["tags/collection/index.html","1a566f998897e43e09354da5d0df1d08"],["tags/component/index.html","ed8dfbf115e6c960ffc2f14e994b488b"],["tags/computed/index.html","fbd02bfefca0e6ff88eda226070bc510"],["tags/create/index.html","81ea3abf489ebbd1e1449e45fb01fed7"],["tags/database/index.html","b17d048d86ba6ec2ce1b96ef11d3c834"],["tags/df/index.html","acd19d036277eff1c5f42520411c0d91"],["tags/diff/index.html","31dfcc6868b53ccda4db457a0f2df063"],["tags/driver/index.html","65ad916a352eb2135418af2f3d2e4b34"],["tags/du/index.html","6b95fff22115913482c3c14be012ad93"],["tags/fast-forward/index.html","f76cbd8ed843e85e6b67d968be1fc281"],["tags/ff/index.html","b41ca029f9feee1dc335d31db33e4dac"],["tags/font-size/index.html","002c726694035a9a1172ba50b012a9b0"],["tags/font/index.html","7cda0058f35dd1483f1edc7f0ee956e7"],["tags/free/index.html","caa2eb041195da9390a8fe7b035e7323"],["tags/git-branch/index.html","564f754553fd3b7de4d208b376a66a25"],["tags/git-index/index.html","e57630fbdfeb9c4bd123ac7ae0bd20de"],["tags/git-merge/index.html","9103b4b41dc1cf9d4971ce97f9408e84"],["tags/git-pull/index.html","5f66db2988fb775049b644b9e4094711"],["tags/git-reflog/index.html","7cb3c4c6bcb35a29eb1d829ed3eade20"],["tags/git-reset/index.html","e0bddda26b9277ff332fca9317e62e22"],["tags/git-rev-parse/index.html","397800a4c9b3c462f75cf80c4d7f6d8b"],["tags/git-revert/index.html","a8f7c87a8f7c86b7aac63bb216eb601d"],["tags/git-tag/index.html","ac8cc0a7cd64befea1df8976928c5f86"],["tags/iOS/index.html","0701c795da02799552fdedc632328645"],["tags/index.html","8e7780d8be6213e4356d891958d0eeb8"],["tags/jps/index.html","2c84fc2e83bac815f832b83c621199e9"],["tags/kwargs/index.html","3f99a5af97c8932667150226435921dc"],["tags/mac/index.html","bc36a4497744730607aa0a101de6dee7"],["tags/make/index.html","bc6d71d27fcaf818d7dfee8af22ddea7"],["tags/maven/index.html","3c519aceb5843aabd49486412c73a95f"],["tags/modify/index.html","7f56e53959447a7b73b75a93c1759b89"],["tags/module/index.html","e75ec42377e9a34762633e22754c6aab"],["tags/nexus/index.html","dfa2902c7b8639abc90ef761bffe0e68"],["tags/no-ff/index.html","f8faf7d4af7aac90df0030ee72f14d02"],["tags/package/index.html","7f80c7afff65ab9ee7dfc8c6384be5ca"],["tags/rewrite/index.html","23fe827989b596c67c27b161c4384795"],["tags/schema/index.html","07798e30b1baad3230e2aa97fabbef3d"],["tags/shell/index.html","900a75e59381918e9bc5469469d5e1d6"],["tags/synchronized/index.html","888ccd63372d2a631852397bae298eed"],["tags/this/index.html","56235c445c8ce97b0bab2b2e6761e5e1"],["tags/tomcat/index.html","e6859896f2d37281cde87f34c40aa0fc"],["tags/top/index.html","9f0925449990991172a3aadf29908446"],["tags/true-merge/index.html","19f24c1a9c342ba87de677d700d4cf35"],["tags/url/index.html","e4f3983486ef1ab9a2d3ebd7a9c99bb5"],["tags/vim/index.html","8da4b9cbae869777c9692bf0647da1fa"],["tags/windows/index.html","1c043717319e22f038eac81c90cf1957"],["tags/一棵开花的树/index.html","ce6abe123c6edadb9296deef4a340d28"],["tags/主题/index.html","7f7762f4883bccdb8c739bba2595e209"],["tags/二叉树/index.html","1a134c3411cc7f95dda0b19d50b27ba0"],["tags/介绍/index.html","5da7db0f35aaa8c9902b31d99aed0252"],["tags/代理/index.html","7d5732703c348465459c518bd1c3ce56"],["tags/以太坊/index.html","3d5fb7012f0da7458867078b35164e64"],["tags/依赖包/index.html","e51f2637fb943648168138f3a7c4a626"],["tags/修改/index.html","b6d1e448881e0ccd6fb9591bf94040a5"],["tags/值传递/index.html","a87c1602be6070004f1cbf2f8ad8ac11"],["tags/冲突/index.html","0e3a81c5f7139e35dc225c50f449c545"],["tags/分支/index.html","4e5329524cad37607c081c6820bc15e0"],["tags/创建/index.html","9eda0fe70fb2384116b4789a845663fe"],["tags/创建数据库/index.html","8c4474b1afeac48b6337ff9414e14646"],["tags/区块链/index.html","1ba921b9aeacbb5b460079730652459f"],["tags/升级/index.html","a22d9944121082b4a585e01b03eb59ac"],["tags/参数/index.html","66502e828bc335d5e61d4233bd6d2ca7"],["tags/委托/index.html","9092da43f39e0652f6205d7316777a0f"],["tags/存储/index.html","9987a40c7da7a51c2b4f3dc74238c3ac"],["tags/存在/index.html","c018674249010cadbd6a0c9dfc567c9e"],["tags/学习笔记/index.html","ce33b41ff738b401039f1624ec9aa04f"],["tags/实例/index.html","fc47aae0f7591d8ab4f7db08b262d2ce"],["tags/容器/index.html","fa0437d6d8d61829f452d5df4d947a11"],["tags/工作流/index.html","d96b60ac77e084d5eb6f44f57f5237c4"],["tags/工具/index.html","f084b62c718e89366abd5cadd110caf4"],["tags/席慕蓉/index.html","d1de88874347d9cee33e2888f7dbd9e1"],["tags/异步编程/index.html","1da87d16c6ad01ce4544aa6020ace05e"],["tags/微信/index.html","144004ad5d7454f8b6951431f534a288"],["tags/插入/index.html","1424e6bb6e13da3b09d7db68384a0c0d"],["tags/数据存储/index.html","422f2aed76be37a9954b1eeaf995bb6a"],["tags/数据库/index.html","3cb5360b2bd168118545cf2d7a101ed7"],["tags/数据集合/index.html","23537842e720b11915f71aeeba8dd3f8"],["tags/数组/index.html","8836e040acf0fe674c8fb4c8730135a9"],["tags/文档/index.html","a50daede1d605dd6874c3c10a214ac33"],["tags/文档流/index.html","d99dd71cad32ba9ac889490681b53c91"],["tags/智能合约/index.html","7e80fc88ed0ae5b720dcff0585207637"],["tags/标签/index.html","c1f77bd0e2bedf1988b825e79e178f48"],["tags/模板语法/index.html","1d3cfffc8e31e2585b778d0651829e00"],["tags/比特币/index.html","d666ed68aa6d32c16f6b5dc4ab0a0a19"],["tags/波浪字符/index.html","9f116a2df7fee43f9749ac1faf79cb90"],["tags/注解/index.html","02ccb41f24e51320f579723e4698c51f"],["tags/用法/index.html","557e14123e9dfe7977c36825dde8ca34"],["tags/穿透/index.html","08a6a83d55eb96fce2de1d0736df09db"],["tags/端口占用/index.html","ab8755f1e843395fff90caaabef9a02b"],["tags/笔记/index.html","df736fc37964b94bd224b543904491b2"],["tags/符号/index.html","74b7ef5b9792bf5be448fd14abae4514"],["tags/红黑树/index.html","d3048fd25565ece50b088f1e4963359c"],["tags/组件基础/index.html","38a90a31fa35e5ef9bf03b0f3b685744"],["tags/绑定/index.html","f5efb47306d4cb3290ad856c56bf3678"],["tags/编程/index.html","fb2f72e35b9448957722fd3526cca609"],["tags/职责链模式/index.html","f812109df3066431b23867838cd0057e"],["tags/聚合/index.html","2e17a65dff6c5f56f9f0b37eff28dd7b"],["tags/聚集索引/index.html","e61a109d99f69d094efe1ea56dece647"],["tags/自定义指令/index.html","669f4d0fe1cb4bebcff73ad63956e594"],["tags/计算属性/index.html","586f4ca0c847cd536e82eccac7530d87"],["tags/设计模式/index.html","56a129736deaa1daacf2e51ad79bc869"],["tags/进程/index.html","560b41dd3e55f72a8ad42c017a93c36c"],["tags/远程仓库地址/index.html","54a0d9b49e6048e502adc262bf015241"],["tags/逻辑操作符/index.html","4d097bb80fa078d29781ede7821d9c18"],["tags/部署/index.html","e2c4e65a0622fb569cc379424c7fc6f1"],["tags/难度/index.html","34d49710d289ecf8c0ecbb73bd4e37e5"],["tags/集合/index.html","b7be9321a86cfe224af0de59d9729246"],["thinking_in_programmer_life/full-stack-programmer.html","e3985244067b2a21a6175415979dce35"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","7479f0985a4f0995a3ff52f2f4fd21a6"]];
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







