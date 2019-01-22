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

var precacheConfig = [["Kafka/kafka-introduction-note.html","a989529886163b539740a1462e962189"],["about/index.html","f4c0fa6f7c2a27afe671ef28faae0455"],["archives/2018/06/index.html","7f8b15cb2b65e3303ab34a49005bf014"],["archives/2018/07/index.html","4a9758cdfa4445cc3f5872e4ef98f879"],["archives/2018/08/index.html","8f3084558817ae2ace9b017a7cd142e6"],["archives/2018/09/index.html","5d56e25a44fbd0ed699455bb95662296"],["archives/2018/10/index.html","ae11d749485c61e3ba896ae61c4e931b"],["archives/2018/11/index.html","6d6dfedaa8cff437d53a77efdef40c5d"],["archives/2018/12/index.html","fc2307dff65d0dab1c7b549517c2785a"],["archives/2018/index.html","28c44306598ea5a3f0a8e7294134f417"],["archives/2018/page/2/index.html","8df7f581bf96b416d6328b16581086f0"],["archives/2019/01/index.html","0cd346fc7a788546f6618b96a9290385"],["archives/2019/index.html","dc54c7c13411281b83beb2b6adaaaf52"],["archives/index.html","fefbbc9aa21cc3a2ec12bbd6d9cf8f16"],["archives/page/2/index.html","6421206d83bc7946cf4e946e6471308c"],["atom/index.html","5bc3cca1defcbe530bbda4a7de65adff"],["blockchain/base64-base58.html","d97545f60da88a3b199d2c42eebb3a9b"],["blockchain/bitcoin-data-storage.html","385dfd23d00948afa430783b2c748adf"],["blockchain/bitcoin-difficulty.html","21ee7b2b75ee98ded845d3a2e8265b6c"],["blockchain/block-chain-ethereum-contract-program.html","01f0d987fe5938845c19f2b31b525f02"],["blockchain/ethereum-programming-introduction.html","cb1ed775e04e8d1eecc8869c852fb682"],["blockchain/ethereum-rationale-introduction.html","9880331cc71001e68ab4096416ddbc7e"],["books/index.html","0f89740889a7ad2248064acf5bfa8cc5"],["categories/Blockchain/index.html","af6e9469bd16a68a8bdd5fd11762ad2b"],["categories/Blockchain/以太坊/index.html","09a4668595a3e326ef29c81b709b82c7"],["categories/Blockchain/以太坊/智能合约/index.html","3574d977ca30302977cf3ff706d28e83"],["categories/CSS/index.html","cd3023379fec09d9b39404b0b9fa60a0"],["categories/Git/index.html","1986b4a9f81617212393d89549a73f08"],["categories/Java/index.html","afafe1c4f7e15318e49c040888097981"],["categories/JavaScript/NPM/index.html","658281b91bd6f5e96b20daadf11ea067"],["categories/JavaScript/Vue/index.html","3f97d647d4fd2aaa170550f7ae4c99e2"],["categories/JavaScript/index.html","085d90783dcc06078c6e5ea010f3430e"],["categories/Kafka/index.html","1b48c9396480511d661a42d33f157b5d"],["categories/Linux/Shell/index.html","8acddb4c1a5a5b3264aee74674d6051e"],["categories/Linux/Ubuntu/index.html","69b1800a5f83383be02cf6b92bc7b025"],["categories/Linux/index.html","d645076165a5aa011a163eb5370220b9"],["categories/MongoDB/index.html","c1e61917ca48edae31cc51b12e4e0201"],["categories/MySQL/index.html","2230072c73c17c60376b707ef4c10ff1"],["categories/Python/index.html","5e93ebcd1f5cce9b8f8a58efb04543f0"],["categories/iOS/index.html","ad59f0f1348e81bcab9e9ac59d3c8914"],["categories/index.html","aee25d51b16a081b54e5c3635f4860f8"],["categories/微信/index.html","d163f13aa3f7d97f0f36e9bb19fc4133"],["categories/杂记/index.html","8ffaf27e5a6e4f16afe74d482f0b4f9b"],["categories/程序人生/index.html","02ee1d83ff693246d2384ec97ad0629f"],["categories/计划/index.html","6f2544b8eeff17fbe311ebd3f4a58a95"],["css/css-font-note.html","1a279ec3c1227d9fe117eb2a716e5af1"],["css/css-normal-flow.html","c10ccde1056bacbc821e75b2630c8706"],["css/css-sass-introduction.html","31d657d9baa4e4f82de3baf8d8f067a0"],["css/main.css","c340c4ed14603695d39de346330b9263"],["drafts/configure-multiple-vue-project-with-nginx.html","562ea3544990f7fd6b5ac842c3352384"],["drafts/iframe.html","b6d8acb45a01210ac8914537195afddc"],["drafts/record-re-install-mac-os-10-12-6.html","2780b3792e334508f1103b69db6c00de"],["essay/note-ximurong-tree.html","4102c72513f78e6d402d5d589880f0f0"],["git/git-DETACHED-HEAD.html","c37c2bc81b6c391688657cc956322f6c"],["git/git-branch.html","7718400df468732b7c40cee3195fa2b1"],["git/git-change-server-password.html","f78d80f8fb44faddc5040894853e3842"],["git/git-checkout-1.html","022731842467ef126e9983f376a4ab8b"],["git/git-checkout-2.html","f5791998b9df55ca7549356cd94f432e"],["git/git-diff-m-symbol.html","ccce060c6784e1c337aaea883404c718"],["git/git-git-flow.html","87c4dd3e758ceac7727d24c40f757022"],["git/git-git-merge-ff-no-ff.html","2986e2f77469766c4fe8bea10449ea80"],["git/git-git-merge-true-merge.html","1f3e115a272d37ed049825e5678574f8"],["git/git-merge-choose-one-side-code.html","039bf7d9081b32f3ba3a8ad87ab3f53b"],["git/git-merge-exist-conflict.html","238f13979266b6dc81dee4b726a6c8b2"],["git/git-pull-1.html","312b9f5da053f6c00ce578025492e527"],["git/git-reflog.html","609fe795aa76ad275a027b6399bbc855"],["git/git-remote-set-url.html","39f0033c0933c2d042c9fdbecd0c6ce7"],["git/git-reset.html","9f5daa5310a62dcd262731bba88b6cd4"],["git/git-revert.html","e8a155967aebe33c60f6cddb45b59d09"],["git/git-tag.html","3cc836281f50f2de99deee01d718f29d"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ebb270eaf959881aab13d4b405208c91"],["ios/ios-oc-kvc-1.html","f8f0ebe8d1fa478999d0f41b636c77fa"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","6ba59871d411bbd916afa2478693268c"],["java/java-deploy-resource-folder.html","820ef368521987547589b4001ee5d383"],["java/java-pojo-bean-note.html","dd082daab1cbbec8311a93dad1a3be9a"],["java/java-shiro-note-2.html","437d01f17ec8aaefe5b5e156725de8a3"],["java/java-shiro-note.html","4b42aadfcd34bb68ebc9e862ee3b8f88"],["java/java-spring-autowired.html","4a615b195f8f53b0cdcd42b5bb04767e"],["java/java-springmvc-X-Frame-Options.html","181cad483f1da8ba0fde6d87ba8b1bbc"],["java/java-synchronized-note.html","2b740f31ddd3c10d9c722b66049b66ee"],["java/url-rewrite.html","78817ea3657f711807e3ab22cc680536"],["js/js-logical-operator.html","057976fb29b50264f714de417e87d6c7"],["js/js-npm-symbol-caret.html","aa166fc367e283884fad5e6616b2dec4"],["js/js-npm-symbol-tilde.html","d3326900faef49313d933773cdc36e01"],["js/js-this.html","df28b067f31a962befc7c3f15ed0fc98"],["js/js-vue-note-components.html","c97fd70ce7d70830981ca7a7d21aafaa"],["js/js-vue-note-computed.html","fae9f19e393c1fcc689314bc178b70e2"],["js/js-vue-note-css-style-binding.html","da68b98845e02a4ede7ecdd8786adf69"],["js/js-vue-note-directive.html","10a97bbb0d91010e201b0249fbf1560a"],["js/js-vue-note-instance.html","c8affb9f29ab900bb7f0022a2f7299ac"],["js/js-vue-note-introduction.html","1d0399bce58ac887b09ec86d0636fb8a"],["js/js-vue-note-syntax.html","d909d0fa42c5d578ed8b6e209be06f06"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","e3fe624a4bf49c52e63801fe142c85a9"],["linux/shell-command-df.html","8c4991e7f4dc684107d0bf32eb6d7400"],["linux/shell-command-du.html","e824f9e15db13118302db040932852c8"],["linux/shell-command-netstat.html","812f97b3b86e0e76dd3bae62a5af0306"],["linux/shell-command-sed.html","49ebcc10a7f57fa6ec26b8c72cf4bc9d"],["linux/shell-command-tar.html","53cabdcf6fd1916b61f0d4d40c257f4d"],["linux/shell-command-top.html","3719b2528d609dceb694d04ce551015e"],["linux/shell-command-touch.html","d52be4ab30b437fa1bde926ee9a26b1b"],["linux/shell-command-which.html","438d19c0f159dc340cd864d114e9d1f9"],["linux/ubuntu-user-add-delete.html","a41b2b816288f86fa1e2ee179520c340"],["mongodb/mongodb-collection-aggregation-introduction.html","956b53d08364b77beb90c14d7af833de"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","fc9f82b99faaf857f5b3744eebe5147a"],["mongodb/mongodb-collection-create.html","2befa597b51f083f216936325a6cfe4c"],["mongodb/mongodb-collection-delete.html","edd71c7fd7f23b79484545e71ae48a44"],["mongodb/mongodb-collection-find-1.html","af7dcf33e5f1daa98e5739eb134100fb"],["mongodb/mongodb-collection-find-projection-operator.html","84b73d80377a67be3c8416dfce45f730"],["mongodb/mongodb-collection-insert-1.html","d362de829e783117a104a0fdf2ad005e"],["mongodb/mongodb-database-create.html","af19e17702ab1a87cbd9abfede9e3098"],["mongodb/mongodb-java-driver.html","99ffd85eecc93d5b2f2a2e84fc7be0bd"],["mongodb/mongodb-schema-design-note.html","a3add08b8ba7a900d05538c3f78b3229"],["mongodb/mongodb-study-note-1.html","b8667d1791dae0e6b36ed5867806d367"],["mongodb/mongodb-study-note-2.html","ffede03177fb1cb49516cb4a41aa9b8f"],["mongodb/mongodb-study-note-3.html","231ee3b5a5cc79b6f1092d3c72a9d556"],["mysql/mysql-ddl-handy-book.html","1ebfe48607d978a75a0c8ddd1315c8d0"],["page/2/index.html","00cf8d67bdf61976773fbbdd07fe7e23"],["page/3/index.html","01341446b1370a2cc4ba486b16581c22"],["page/4/index.html","bbb29d6010ea35d88785af9b27c03598"],["photos/index.html","046945f5f37d853bb6b0c65018d80478"],["python/upgrade-python-under-ubuntu1604.html","dcdfdb2d8f4c799e4043f7d0304e33dc"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","8534ab378325d4c4bab990a160e20b6b"],["slides/index.html","1304a2a41999a13203062c7e5aaf1564"],["tags/Autowired/index.html","4edcb738650b2e90d385d422bbaf422c"],["tags/Base48/index.html","32c0da2e71463111f9b907dded2b9779"],["tags/Beans/index.html","f38f164f113eeffca7baa115bb6a8645"],["tags/CSS/index.html","c9fc2f7698f1e51f23ae1feb854bdbce"],["tags/DETACHED-HEAD/index.html","27b2c50906703d03ba1536ef070a78a0"],["tags/Git-Flow/index.html","560e871aee9b0646782d3b7481dfa079"],["tags/Git/index.html","fba151361e0c9dc7f46dd06a21a108cd"],["tags/JS/index.html","4c95534988930171728ae18d81732601"],["tags/Java/index.html","acece3e8ce64ad4c7e8b9218a34f4e18"],["tags/JavaScript/index.html","9ecf8ea3f22a415c5f219f7cc2c648f6"],["tags/KVC/index.html","e5cd15e3eb2d1cbbd8482a9b9f88450b"],["tags/Kafka/index.html","ea2e2a1c6f165af5d34b2986b901587c"],["tags/Linux/index.html","4d24c25affdad715ab16004892858bfa"],["tags/M/index.html","6203a2597877d1528022bda1d98479c8"],["tags/MongoDB/index.html","88e4f5b89d47a19a6ddcd7a0d7dd509d"],["tags/MySQL/index.html","ce39586bc9896c086e73c518df3320a1"],["tags/NAT/index.html","02b25247863559f77440f512067d86bd"],["tags/NPM/index.html","9d8a9fdf478979288e894a84ea0b9831"],["tags/OC/index.html","478acdf03ee69caf29a71a46e55b57b6"],["tags/POJO/index.html","f46f6db7dd9ac0709bccfe91f8f1c7af"],["tags/Python/index.html","e8fb23f0b2b4a06e301a0e81d08eb0aa"],["tags/ReactiveCocoa/index.html","a37caf33f7878d38bfd9bdf555e4bb82"],["tags/ReactiveObjC/index.html","785763c1e9ba10e59a9b21b60a9c0a6f"],["tags/Repository-not-found/index.html","3dcb11601687f87e1056335981999e3d"],["tags/SASS/index.html","db00c324a0797b4c8ea13ec12ddf5025"],["tags/SprintMVC/index.html","fec62a1d7b97f65c7d1a721aa5a84cdf"],["tags/Style/index.html","3e1b32cec36342d7f876f5fe3793ad6d"],["tags/Ubuntu16-04/index.html","36bf595ea7d9db00def107834d4017d3"],["tags/Vue/index.html","33151dac18c4dd07c5eb5df7db94408b"],["tags/X-Frame-Options/index.html","9de6a35565676ac9cef087a82d00c2b9"],["tags/aggregate/index.html","2655a735017bc02052bd652b62947480"],["tags/alter/index.html","6718c605372c6ec27f41eb657ce0c8e9"],["tags/change/index.html","dfabf5cc7e88faf52d863dc3239a66d0"],["tags/checkout/index.html","a83ce227d4b62622eb2d3934fb4fd304"],["tags/collection/index.html","fa616baceaced2a39f9af1b5f16c3f3c"],["tags/component/index.html","84c333bb7a7249d69e50a191e23c7ba0"],["tags/computed/index.html","0ef46fcc8544000283ccdc63db07f7ce"],["tags/create/index.html","a5918d030c0e42f821521ef54c75b678"],["tags/database/index.html","9913d91d0e1b35142ddbc30ceb5354f1"],["tags/df/index.html","c05fdf0d5f838a3e6807fac6f15ac2a3"],["tags/diff/index.html","372de48106b5529d83b04fe2052244fe"],["tags/driver/index.html","274b43a6db318207bd1a6b06be702c38"],["tags/du/index.html","7a7033bf09581109643c109bd8137fef"],["tags/fast-forward/index.html","69742316d4385a9f34598f1beda996af"],["tags/ff/index.html","5c479ca04fe87f3b6e8f2e59b60e4810"],["tags/font-size/index.html","33ee11974298ac467c8b9bd255c6eb8e"],["tags/font/index.html","51ecb856633619e158b4d4bcb874eb38"],["tags/git-branch/index.html","164d24adff7161b390bfb2780713f5ac"],["tags/git-merge/index.html","30efc8c09803dde67438c2201fe39222"],["tags/git-pull/index.html","51780379ec7821ca2332e30b7f66ba55"],["tags/git-reflog/index.html","a1688788442a6039114875d348ab4644"],["tags/git-reset/index.html","1de2df46bab22402a0394cea97438e05"],["tags/git-revert/index.html","dfb281cd5665fecaa45a85792515fd83"],["tags/git-tag/index.html","24cf26fee90d199ebf8fee8cdc918f52"],["tags/index.html","1667c3fe38a981481557102279e6cb71"],["tags/modify/index.html","c97c2979d4da01c76f846d7e93d07095"],["tags/no-ff/index.html","88c7678734bfc591198e6efbc9948c54"],["tags/rewrite/index.html","fd7e1b864ecbf6e28eb7fab4c0487577"],["tags/schema/index.html","0cbcb12c956c31d76226e47abba9e2fb"],["tags/shell/index.html","d47eb8c3e8d4ffd4e46b740a8934a76b"],["tags/shiro/index.html","408bd6b4b94c30de1b44f83324415ef7"],["tags/synchronized/index.html","d5a1068571617d359d0a9d8062b8b418"],["tags/this/index.html","ccb0aff9e0596f0de6983c5ab5650780"],["tags/tomcat/index.html","6411fde82b41e675afcd53a072f77aa8"],["tags/true-merge/index.html","773d758b33e7bf83c086ae0e6a86aef7"],["tags/url/index.html","2df857a9915102322a9d5675bce3551c"],["tags/windows/index.html","44482ac4cac2bfc50cd829f965dc4860"],["tags/一棵开花的树/index.html","28e7595069fb1d3521831c6fe1c0cbab"],["tags/介绍/index.html","19692be685b03a01bf4ae288c4027da1"],["tags/以太坊/index.html","6fa3439cf6e7c3ce708b3faa5adf4b7f"],["tags/依赖包/index.html","d30355b6822f6745f22655fd5062bd50"],["tags/修改/index.html","a81c9d2b9dcb8c4dc8a5be7a3a518357"],["tags/冲突/index.html","099b3a6e4fb2445261e67b8ca84435f5"],["tags/分支/index.html","9d9bcac71f41a50ab58295486ba3ebff"],["tags/创建/index.html","6c5329049a607d21d44f25ff70817bb9"],["tags/创建数据库/index.html","9602402c7611e72e4bff44085c4f4cb2"],["tags/区块链/index.html","a702f994538ad38e264ebff6b978de45"],["tags/升级/index.html","c7ef6424e205bb5ef0d6eac2c5edbb08"],["tags/存在/index.html","f88258f40db504ba5cf1bec8dacf71c8"],["tags/学习笔记/index.html","838a81d3e2e2b217f08e2dc06cb3088e"],["tags/实例/index.html","036e7d2cde089b9beb5604d536e21e9f"],["tags/工作流/index.html","ecee9e5828c78ca87efc5c1fe08aff0d"],["tags/席慕蓉/index.html","0ed8ee93c8e312a55fa66f9f8567d680"],["tags/微信/index.html","bca9532ca4640b4421d706ef74c51c15"],["tags/插入/index.html","986190744b649c252884ded38a40ceaf"],["tags/数据存储/index.html","c11e45af54e0722a6c9abd3d073eb0d7"],["tags/数据库/index.html","ec84016443a79fc2ff9c318e3e6418df"],["tags/数据集合/index.html","6e9910052108ec5046bce340ade7c385"],["tags/文档/index.html","bcbf3da188265def153290c166213543"],["tags/文档流/index.html","2a6007a01f1393f469ab268fcbf23f17"],["tags/智能合约/index.html","de62f1350712c3eff35acf366149f4df"],["tags/标签/index.html","86397c056e1b5dd535f027bf01003be7"],["tags/模板语法/index.html","f9ca3317a86f92643023bb1ca29bb4ca"],["tags/比特币/index.html","579496b0047868b028537f4db99be83a"],["tags/波浪字符/index.html","5f8e3064fde5f0cb26990c7201938aaa"],["tags/用法/index.html","75b3a5f52723cb4dea0728520ba5c496"],["tags/穿透/index.html","3dd30b3dc048469867d8977a5f26aeb0"],["tags/笔记/index.html","fe434b57e2ab72718f412a4a5af970a5"],["tags/符号/index.html","68580052dd2e0b984ad6578e8175b004"],["tags/组件基础/index.html","1d142b02e93699b5c9e970d5b4d3d962"],["tags/绑定/index.html","8ff9f00c4bc7132a6f9bde6e709874eb"],["tags/编程/index.html","8c78aa1fb7a4b5f0ca83b00f55cea4fb"],["tags/聚合/index.html","2d2a7ef2d687a599d1baeeebf58eba67"],["tags/自定义指令/index.html","3f562ccbffc47afc98ec536dfa831ed7"],["tags/计算属性/index.html","04df0a54c324d966b86068896ffd3bb7"],["tags/远程仓库地址/index.html","e0e885b83cff9fc612fe409023ab1b0b"],["tags/逻辑操作符/index.html","86cd816d9ad519d8300d36220dd0295e"],["tags/部署/index.html","35335a2bff63594928fb8f1198ed45d7"],["tags/难度/index.html","2f4a77b6cb19aedbe3902fd061c851f3"],["tags/集合/index.html","68d1e9b555ab033a706420b31c06688a"],["tags/集成/index.html","996c9a29a75a8194e4f103feea45a75f"],["thinking_in_programmer_life/full-stack-programmer.html","e1be54d466b956789eb6833a61d64bf2"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","2442493d50d117ee75ccd413abdc8d33"]];
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







