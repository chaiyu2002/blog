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

var precacheConfig = [["about/index.html","4bb304c85e84a2b017bbe43b878d38e0"],["archives/2018/06/index.html","9de54a2dd7f7dbdf10e3125568d86457"],["archives/2018/07/index.html","977b855f5610cdf1f6ff25ad03fb624c"],["archives/2018/08/index.html","fe8de8a731bea74f32223ff804bfcca5"],["archives/2018/09/index.html","caa792f3c1a6e5d4e3f076756c02c9b5"],["archives/2018/10/index.html","16b14e4ae38c29c9cd358d99267b2917"],["archives/2018/11/index.html","55239836141a3f0e4b951e744823b133"],["archives/2018/index.html","a80aead8b1923805b97dfb75b8514209"],["archives/2018/page/2/index.html","a102760e6bc4a3f191d447772067abe1"],["archives/index.html","7ab4466a78796309d1d9228d29ee9fdc"],["archives/page/2/index.html","13201bf0da59f5919d18600e73a29d06"],["atom/index.html","f77e3cb69e0be87d759777f17c8a2ca1"],["blockchain/base64-base58.html","3dd67d7e7f20fbfe930fc4606cb67431"],["blockchain/bitcoin-data-storage.html","d456a74dc9ffa94b65f35979108672f2"],["blockchain/bitcoin-difficulty.html","da65e4b0cb96154cd191f3bc27814a62"],["blockchain/block-chain-ethereum-contract-program.html","6a2bed0656bb1d3fd5f4a3fc45490446"],["blockchain/ethereum-programming-introduction.html","6fc28dd7f948ffacaf31c9ae808ce78b"],["blockchain/ethereum-rationale-introduction.html","15b97373913edbb9a7a4f4c98f105e5e"],["books/index.html","4708a801a71d6c18df174eb13123a43a"],["categories/Blockchain/index.html","93c379fa0b3be8f923099fe078306473"],["categories/Blockchain/以太坊/index.html","9975ccc7b8307e1d3a7deeb30074298a"],["categories/Blockchain/以太坊/智能合约/index.html","0777889f278bde12a938c2839e5d94b1"],["categories/CSS/index.html","ab6cf001028e71adb48fd5d00626f021"],["categories/Git/index.html","c17160b9e91374dcdb13eb367774ddc5"],["categories/Java/index.html","7f594d8998f97b9500cc202273f30bcb"],["categories/JavaScript/NPM/index.html","bea5825d6c9bdff7f56392f8b1663d5e"],["categories/JavaScript/Vue/index.html","197363641531f2ec07be80445992fe76"],["categories/JavaScript/index.html","b0519b2d82b475b760deb0bf04dac643"],["categories/Linux/Shell/index.html","43946797fd50b5b103a4be7a089aaf3a"],["categories/Linux/Ubuntu/index.html","d8570dcaa18f68ce7548e50e2682b452"],["categories/Linux/index.html","fc80f48e6ee2a514e2d2b3a2d1927afa"],["categories/MongoDB/index.html","802583fcfc60557651a1a64d7c177a10"],["categories/MySQL/index.html","4f502f291a2897e7346eb5b9973f36ff"],["categories/Python/index.html","1f73bde08491b2dbd71cf7f442ee1234"],["categories/index.html","0fff302257726e8a84e179883e3ad6c7"],["categories/程序人生/index.html","eee0206021454d149ac001b5f8fd1691"],["categories/计划/index.html","f86e1ece068e593d7b8c06c7b84fdde4"],["css/css-normal-flow.html","3e7e312b24168cd68e7ecf5b8b35fa00"],["css/main.css","2465a62868735ec603a6462288c9e84b"],["drafts/configure-multiple-vue-project-with-nginx.html","681ae1e84212bd67a0b11d9a42b00393"],["drafts/iframe.html","46197e6571b1c3980fe3fcf5034fef47"],["drafts/record-re-install-mac-os-10-12-6.html","24d3913fbb53e3df2222d9f80e2e50cb"],["git/git-DETACHED-HEAD.html","9e23a4d783759db27279d239ab8dcc5e"],["git/git-branch.html","8c21bbcd2021ab37cfc7cd28dbd11e4f"],["git/git-change-server-password.html","f8663b2e7315108ce2e568273c9813a5"],["git/git-checkout-1.html","5caf11e81eee869df48d3c6193d0fcfd"],["git/git-checkout-2.html","c805adbb161ac2854fc438244e668898"],["git/git-diff-m-symbol.html","e7e7b1b82051ddca3828b63a4a0e9137"],["git/git-git-flow.html","7bdecf699ca18adde061e486f85422e2"],["git/git-git-merge-ff-no-ff.html","9719c5008f0fe394677c56285e37d2e7"],["git/git-git-merge-true-merge.html","862a8592a352a913778c1a892436b214"],["git/git-merge-choose-one-side-code.html","08871497ccaf2d6aa5c81c8159005d6c"],["git/git-merge-exist-conflict.html","8d2073f32ba514d251e82e95b9e860a9"],["git/git-pull-1.html","a3fb5cf8e9d917b436bfe870cd45d92b"],["git/git-reflog.html","442465c584a2edaa3849d351ccb10f1d"],["git/git-remote-set-url.html","48c33a129191b79b92dadbef6f438258"],["git/git-reset.html","8664e4d827f1ac89f9f6dd847f524fce"],["git/git-revert.html","123f5edbf0c654bede3cff30be4ad72a"],["git/git-tag.html","bdb0497f7c035f3ffbd7f311e7a7bb01"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","bf3dafb0c341e447f05b66a60fdef9cb"],["java/java-deploy-resource-folder.html","92d5aba1a93155ab17c62af5c7130a67"],["java/java-shiro-note-2.html","5e08cb530ece107a7b62b58b5f389612"],["java/java-shiro-note.html","22f81664f4440d54e2b2091e0e88144a"],["java/java-springmvc-X-Frame-Options.html","7f5357836d2d8eb123b041cae2c5500c"],["js/js-logical-operator.html","51197326518552a9b24bbb3e09bc05ed"],["js/js-npm-symbol-caret.html","d5573a27ba6d2c54f65071bca9f85b4f"],["js/js-npm-symbol-tilde.html","cdbf9093368c056db9e0090ca60c779f"],["js/js-this.html","44d0f9cd204f25bd0ac8b5524cd62deb"],["js/js-vue-note-components.html","744f2db4939dd93c28a571bc59eba0ff"],["js/js-vue-note-computed.html","0105c48ab91e13ce077c187cd9dc0674"],["js/js-vue-note-css-style-binding.html","e3e81bf7ba43859aca69575f86353094"],["js/js-vue-note-instance.html","10ef27471ae105aea75999c228d0d17c"],["js/js-vue-note-introduction.html","51e31e4a29a89e03ad2ee2293d9c2425"],["js/js-vue-note-syntax.html","9a30072909fe5d4efa12b078b2633e94"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","47f4417e121b0786de92ac781e72c6d8"],["linux/shell-command-df.html","ce97e2aca0390c4498dce43a587f5ed8"],["linux/shell-command-du.html","b1b26d053fad37ec800f8eb11e2730c3"],["linux/shell-command-netstat.html","8a01ce9a27dd6375ad899c76c253b778"],["linux/shell-command-sed.html","2665c6809868d0e73b7f0757e8f2247d"],["linux/shell-command-tar.html","62690ea12640d740b7122edd4e2b7ee4"],["linux/shell-command-top.html","5cf96d67b2b0dc43ea5a9681a23c6866"],["linux/shell-command-touch.html","75039a115cae112c0fc84382c2ac93b7"],["linux/shell-command-which.html","0a73f7450390f2815ff3356a938ab03d"],["linux/ubuntu-user-add-delete.html","066e38f5f677b3ce638d42095872dd45"],["mongodb/mongodb-collection-aggregation-introduction.html","4a4bb91a13cc09b725d816788b80086e"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","1b5ea00ff734d622ad1073cb95d0b2aa"],["mongodb/mongodb-collection-create.html","8d11060ec79ff5cc1aa07bb95eb456a9"],["mongodb/mongodb-collection-delete.html","4fd07304c2ffebb4abe21d4a6fe64524"],["mongodb/mongodb-collection-find-1.html","decb7070017365df06a8b478773a5fc7"],["mongodb/mongodb-collection-find-projection-operator.html","71e4d440a7b53ad71f70cce0b709bf1f"],["mongodb/mongodb-collection-insert-1.html","ce04ffd5bc437868ad0f0a6c09069347"],["mongodb/mongodb-database-create.html","72fea7a7cbaca2613173ce0c68ea09be"],["mongodb/mongodb-schema-design-note.html","2656d74856d5d5e22588d167b07d0402"],["mongodb/mongodb-study-note-1.html","68f186f250014693ec34747dc538c341"],["mongodb/mongodb-study-note-2.html","790f422820c4243c37dc6b7d43131064"],["mongodb/mongodb-study-note-3.html","8da6a0524c00399aacde66c2a93810fa"],["mysql/mysql-ddl-handy-book.html","4550a4c4d448a21c7f89261531b9f190"],["page/2/index.html","796a34afe1e70490307c6090b12bd763"],["page/3/index.html","66e8afbe322e85c362110a468cb98cfd"],["page/4/index.html","182c597bfd04c7bc9b33dabf77af5665"],["photos/index.html","2441d8ee88dc1cf39784d01bc4b0d176"],["python/upgrade-python-under-ubuntu1604.html","e85386be702669ba9722d1284298cff8"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","42a82962a23b9531ca4cfae810a5941a"],["slides/index.html","2abe087c944c735a6f9d51891a849333"],["tags/Base48/index.html","634f389fb9b424aac810690ac6624e06"],["tags/CSS/index.html","ec04d29cf165d0e16d2833505dae53ab"],["tags/DETACHED-HEAD/index.html","99f64ba5036ace33a808c1cb04ec1394"],["tags/Git-Flow/index.html","f6298f7d4942450170d6cad5888f4270"],["tags/Git/index.html","f9503fa01658f5c5bce172a4b83a341b"],["tags/JS/index.html","1773453c32d23c65cfdaa34031ac6c62"],["tags/Java/index.html","57fd54c95bca050308e4a5f393196162"],["tags/JavaScript/index.html","074910a3daa07e69488aeb872a347171"],["tags/Linux/index.html","88d627b764805a11fdd6ca981f9f9222"],["tags/M/index.html","548adb5502182ccedd8d894059b18ea6"],["tags/MongoDB/index.html","3f84c95a3fdbffb919f997687a4054b2"],["tags/MySQL/index.html","6313f2f8f3c9a923abcc0d4a8831f4ff"],["tags/NPM/index.html","f2978e4dd4c0e2ba3aa12d15a3b23111"],["tags/Python/index.html","89406a4e0eb44637e34cf08c33b64c2e"],["tags/Repository-not-found/index.html","9ad93099abcefb22e3c46a622a4bd767"],["tags/SprintMVC/index.html","fea590c3d2b99f3a42e0fb5fd0ea923f"],["tags/Style/index.html","d0e99100695bea5b6632fc5706b5b94c"],["tags/Ubuntu16-04/index.html","6b70c14865b5dff7d502d2cb32c87406"],["tags/Vue/index.html","1b88cf1b11bf5243d3089b4b25f5c4aa"],["tags/X-Frame-Options/index.html","f493836e71079f66c02e44268392f8cd"],["tags/aggregate/index.html","397fa72a01853a8be34db7f575faa5ee"],["tags/alter/index.html","7f57a193117638e4bf03cfa8189ac860"],["tags/change/index.html","0ef0fbffe9dfe997fa8bb78d944e07f0"],["tags/checkout/index.html","52c45ba4ce84d62342ea629faa31bcf7"],["tags/collection/index.html","d55cd1beb6a4bba6a6abcc8c8f5695c6"],["tags/component/index.html","a512bfe5fa8374c52aba4fffc650db9a"],["tags/computed/index.html","6caf5e31d58cb0eeddbfb340dea5386c"],["tags/create/index.html","25edb0a2855841b51bfb4baa039b86a9"],["tags/database/index.html","f3c4aea95e97db78f75a741a9364c755"],["tags/df/index.html","fb03a76a6e3916fb0348f0f846bdff51"],["tags/diff/index.html","fe93330516aadb50f335d24a40af01a0"],["tags/du/index.html","521cfa826c76fff2f265d290fcf926c6"],["tags/fast-forward/index.html","2c586a621527a3010ec89a9d6fb3b676"],["tags/ff/index.html","52e158c27cc5a6ca70bec3a6105c8810"],["tags/git-branch/index.html","66695300bffb3cc7a1936491ba92a127"],["tags/git-merge/index.html","558762e86b339af775da231db23e3df0"],["tags/git-pull/index.html","e8909f0b150329493b3eb52ff18dc348"],["tags/git-reflog/index.html","a68948c185de7a5a52f4f4c65dbdc528"],["tags/git-reset/index.html","30234e80cc81a4d6bf4dbfe259042184"],["tags/git-revert/index.html","888509bef1b9a454ebc1750ec5ccb207"],["tags/git-tag/index.html","6df8785281daaf6ca018058555f96bf4"],["tags/index.html","f266be9bbdb6d739420249d3ce8d9397"],["tags/modify/index.html","988afa24839351dd2e22cbd762c1e62b"],["tags/no-ff/index.html","4fecca4066b0035b6d5fa6421842b8b9"],["tags/schema/index.html","84d48dff691c2c79d286243a42520782"],["tags/shell/index.html","b47fff8019b4bd041353433eb5c8ef9d"],["tags/shiro/index.html","79b45a09ed4f91b218d5cb66fe1fad08"],["tags/this/index.html","68c7c154adc5a82e97aee3c1abdf9e0e"],["tags/tomcat/index.html","0dd2fdb48c5b8ce5fe88542ca4d9e493"],["tags/true-merge/index.html","3540084a04546015d1d9710d46d510bf"],["tags/windows/index.html","bc78ac24f12b601c8efeaa7a96d3da70"],["tags/介绍/index.html","674fb7c5c9a226a8cd353d900f0bbdb9"],["tags/以太坊/index.html","12d25449f9cdeed3a4386091a7b61544"],["tags/依赖包/index.html","e5988422c792575ebc8195fdf8c552f3"],["tags/修改/index.html","432c6e8db59cc67be6385cb14340f72f"],["tags/冲突/index.html","586eacfe284ad4f67543c4678514b8e1"],["tags/分支/index.html","e14c145a79a4f21d2042054f4c9a4f2f"],["tags/创建/index.html","993e012345479d70483c4bb6ebc87a9b"],["tags/创建数据库/index.html","95f85f54877520f1008d04cb3b951735"],["tags/区块链/index.html","0076aafed9598dd1d4217ebf1efbc00d"],["tags/升级/index.html","9c1b3c2dec6a4b8623d673bf74e1a150"],["tags/存在/index.html","3b4cceb42bbf210b2cbf4fb21bd16a00"],["tags/学习笔记/index.html","466ed37469295657445450b5b5f0e2ad"],["tags/实例/index.html","7d139f6f16f97cad277f06885cc1bd29"],["tags/工作流/index.html","79f9ef0f4c866f7ad7802428ce0e63b3"],["tags/插入/index.html","afa4ed092c0cdce55b20f6eada491ac3"],["tags/数据存储/index.html","5214a86535fae935ce21425b0289ae53"],["tags/数据库/index.html","4f310b0e33c9da01ab010c656b6367d9"],["tags/数据集合/index.html","f21a618cbdc22e0fb51181cebf47230c"],["tags/文档/index.html","bcd0a25e532d7070dfa7dc17562afb21"],["tags/智能合约/index.html","42e564361046fa34820b9172ca3abaa3"],["tags/标签/index.html","c4dfdb8f9a845bee5dc4c0b312605aab"],["tags/模板语法/index.html","8a2f989030434717bf55b7dff26b4c1b"],["tags/比特币/index.html","67e222441021694afbe37d7ecdab37c7"],["tags/波浪字符/index.html","9c235cfce805342615376c9829628795"],["tags/用法/index.html","a15c27f374ccc2da364c6ef817bfea32"],["tags/笔记/index.html","f68f2c49adbdae57bb4483a57226fa03"],["tags/符号/index.html","0b5d149b8b6cc3c73e0519cb42b339cd"],["tags/组件基础/index.html","9f470c635249aefb0854431f5c6f2eb5"],["tags/绑定/index.html","255c5f19d64da007b5af742f614c0775"],["tags/编程/index.html","932b1fcd1f02f94c1e3e67b74dac1977"],["tags/聚合/index.html","146a9dc152160a42a298dda07c19fea9"],["tags/计算属性/index.html","ffc8f58ec40acf378e19ef9888ed3587"],["tags/远程仓库地址/index.html","b40108330297b21dae528c8e86c45d4c"],["tags/逻辑操作符/index.html","fd59158c09ee9a02e798649b5c19d753"],["tags/部署/index.html","76d008189fd8775406d67d0e65660e82"],["tags/难度/index.html","2187f3a185f983f50bf3f1d6900df6c5"],["tags/集合/index.html","3b0b0ef8e79996efd7038f5425e5b8f4"],["tags/集成/index.html","f7bbc2238254db7af1ca06c740dbd769"],["thinking_in_programmer_life/full-stack-programmer.html","05f0db4d1dd97da1a335b4693bc10932"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







