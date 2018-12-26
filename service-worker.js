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

var precacheConfig = [["about/index.html","87a7622b64bf0bca0a53226869db8ef1"],["archives/2018/06/index.html","ac19e499b565f10ab1e76057df8518be"],["archives/2018/07/index.html","b405cb0f0283f5ec88268614d0af940d"],["archives/2018/08/index.html","0273bab98c698f13a81261f2c482e107"],["archives/2018/09/index.html","af4962b76d775de246b7e480201aaacb"],["archives/2018/10/index.html","1711f7826eeba7d82432f6efab754767"],["archives/2018/11/index.html","d00353a5022a88a036c62a6f9adfc373"],["archives/2018/12/index.html","0d2b3f59f1e0df6ffbb48235c1126ac8"],["archives/2018/index.html","68b2606be755f64cd46959ef84fcfac5"],["archives/2018/page/2/index.html","43a7952097030eb99a71faed9cd4b81c"],["archives/index.html","1a1d9da310ac4ac88f60f03ea58cd426"],["archives/page/2/index.html","818c3a07a95cd81df45bf557b8afe5f1"],["atom/index.html","9eae8b37f49cfc85a5ebe6befa801825"],["blockchain/base64-base58.html","923479ed52029f2a721335c08d540075"],["blockchain/bitcoin-data-storage.html","9c60d91cabaf676872e10c77408e9162"],["blockchain/bitcoin-difficulty.html","497b01ba3e60271186a8443f62f35e2e"],["blockchain/block-chain-ethereum-contract-program.html","96a3959df4886ee521d17d02fc487dc4"],["blockchain/ethereum-programming-introduction.html","872e4df2685ebebdcebbe92dc52e406b"],["blockchain/ethereum-rationale-introduction.html","539a351e4ff2fb1f418bd8d133553918"],["books/index.html","2ba0f5ab901d22bb9154262ea225ad54"],["categories/Blockchain/index.html","3f566863d4684fad940dfdb5ebdde1df"],["categories/Blockchain/以太坊/index.html","082e61ca72f2e36e7e3676f7c08b476e"],["categories/Blockchain/以太坊/智能合约/index.html","35f5a808adef97eba786bd722ebbe09b"],["categories/CSS/index.html","413472a7e2248e898bffec328cb86e34"],["categories/Git/index.html","5a71d839e4e3ca183a95a9985843bc49"],["categories/Java/index.html","572f827eae1ede6430595052e061f76b"],["categories/JavaScript/NPM/index.html","ff4e33eac3f524f2de52501ebf371529"],["categories/JavaScript/Vue/index.html","9367461ff5956864aa1ca295e846758c"],["categories/JavaScript/index.html","015637ad3ec50ea2939d3125ba1d12ff"],["categories/Linux/Shell/index.html","aa565c7b9d3b71f7bbe984d5a28c9c0a"],["categories/Linux/Ubuntu/index.html","c7a084523916058de1d56b61eda305d1"],["categories/Linux/index.html","8ce71a4d940c91fe6b70d8598ec79883"],["categories/MongoDB/index.html","69a0cf339a923724bb1fa2af5cb6c604"],["categories/MySQL/index.html","4e0b4f39af5e2e5d86d6f886a7d95cc0"],["categories/Python/index.html","92002870fc1c1fc969d8fb36c8262b63"],["categories/iOS/index.html","92f0573da19d8e5d7cf095b1eaa5072b"],["categories/index.html","12e8e40e6477f7168bf0d97537582de9"],["categories/微信/index.html","0711b4fdd38be3de11c69425322b8f63"],["categories/杂记/index.html","2d4dfd831d8b957af0ec38520b85996e"],["categories/程序人生/index.html","4aff982921c017a8067eb700a0a7bbb9"],["categories/计划/index.html","8ecb0b8ebaff5040bc73acee94a02bc4"],["css/css-normal-flow.html","d85274c08e4301f9db84afeb9cac89ee"],["css/css-sass-introduction.html","ac5baf33646ef68f5d4162f3e01dac11"],["css/main.css","1c286740f650482c6d0512290213e04b"],["drafts/configure-multiple-vue-project-with-nginx.html","889dfdb7da8d05a333ecf2690be64845"],["drafts/iframe.html","6b6a1bf4f4250607b3f19fb3e95e8d7f"],["drafts/record-re-install-mac-os-10-12-6.html","16da37c4e950cd2600b9b628a897c209"],["essay/note-ximurong-tree.html","2b3d445e5f22aef17b97fffb619340f6"],["git/git-DETACHED-HEAD.html","071069952e0c3894251f8c6777ecd1f2"],["git/git-branch.html","5669e5d4679510a69ccd493fdecda33b"],["git/git-change-server-password.html","b7507f953056140db49cb8c23791af82"],["git/git-checkout-1.html","e395f49ec113fef03f08ddaa414ce4ad"],["git/git-checkout-2.html","87233a82d79a8ed3e7d35d47bfb671e1"],["git/git-diff-m-symbol.html","f992cb77c0abe5dc136020157ced83e5"],["git/git-git-flow.html","27fbe4e46eba19ea2ed3e30c10ebd757"],["git/git-git-merge-ff-no-ff.html","a0b933cc93593e34d840a60010bf9d9a"],["git/git-git-merge-true-merge.html","eeec2511003eb45c3a2d68758e7ed8a7"],["git/git-merge-choose-one-side-code.html","59db0911653354f52e06a2ba4ce3dc89"],["git/git-merge-exist-conflict.html","97671d3f7dc379a0dc4632b48ed9b6c5"],["git/git-pull-1.html","f027c1cd77833e3a33c160826d6cf9cc"],["git/git-reflog.html","8c7c4006aae990d5350189383a99a06d"],["git/git-remote-set-url.html","c479dccbc6801e97e1d78293c59f076d"],["git/git-reset.html","80796d13f6643c4e9c8abf9a417edead"],["git/git-revert.html","ee8f5e68bbaa82b11c01674d6b7e7a3b"],["git/git-tag.html","2d67fd33ea565152cde0f6eb6e781eea"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","82ada38b132fbe31521a56e6a5c5cc7b"],["ios/ios-oc-kvc-1.html","3a25377e90c8f59a31cc93b061afabc3"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","2e3eccea82833fd6f19f27f7c68061f4"],["java/java-deploy-resource-folder.html","3bbbd692149838995665eda733dcf956"],["java/java-shiro-note-2.html","33b12e6b8ceb4d6557867be162d4c50b"],["java/java-shiro-note.html","2aba3069f977d2449404f78236374ea5"],["java/java-spring-autowired.html","2859f8174ee2acb0648e60a228062c5a"],["java/java-springmvc-X-Frame-Options.html","280b0e47e1a4175f5fad4de0908b536a"],["java/java-synchronized-note.html","1c0c9dc12ad74fab9892d07724b43d22"],["java/url-rewrite.html","73c43a7f0c6b2d2bfae769484c885e7c"],["js/js-logical-operator.html","c679d724e7d8e7cdc6ccc26d2fa8e113"],["js/js-npm-symbol-caret.html","1e2d4bb2e1d4ea0594ffa847b062d47d"],["js/js-npm-symbol-tilde.html","65db9f7383b11c66de7cfe38bb4a818f"],["js/js-this.html","0968806a7b08d1300bbe3ef830888a9b"],["js/js-vue-note-components.html","b84354a4296f999494bd774505a7c829"],["js/js-vue-note-computed.html","40eccc579f057ff3eb4e43de5aa95b7b"],["js/js-vue-note-css-style-binding.html","b44f7ee34f94966501b7c1a620bcea4b"],["js/js-vue-note-directive.html","39453d1c3fa0679309a6a39a9e9884b3"],["js/js-vue-note-instance.html","d4db7e1d2ef0df691a942486693b641c"],["js/js-vue-note-introduction.html","3a8bf1d9941162d3ccd6e784f8763486"],["js/js-vue-note-syntax.html","2301b72b1b9a71622dc7c3b5eac40996"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","d6e4079603a5dcdd854f997a16f53d58"],["linux/shell-command-df.html","06f03b64048597d72d0a247b6cc584c5"],["linux/shell-command-du.html","cb944fbcdad502225cd92befd829a353"],["linux/shell-command-netstat.html","c7771096fd54f32337dd35b0bf319df3"],["linux/shell-command-sed.html","5b58a9c07da745d4d31190cd4c7a8854"],["linux/shell-command-tar.html","9355891858776f699ee96227fd9a8486"],["linux/shell-command-top.html","847c91f4f3d6466a14e80c1216832d76"],["linux/shell-command-touch.html","ca3ebd14d7390aa9b262b86fc9150200"],["linux/shell-command-which.html","7184bdc2780587f5b1b4dc0b77f2de3d"],["linux/ubuntu-user-add-delete.html","c434b3b918523f0e0ac581b8ffd45045"],["mongodb/mongodb-collection-aggregation-introduction.html","91de5dd0d73f53ca1bc195f48dd99515"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","d5fb7feb43cf990402ce27d1524cdbb1"],["mongodb/mongodb-collection-create.html","d13268a40482ab79cac01820fe6e9ba1"],["mongodb/mongodb-collection-delete.html","b3a01d0e698f4c6541ad2382c49d884f"],["mongodb/mongodb-collection-find-1.html","d294c27d2f4d853a2eaa2e0db88a681e"],["mongodb/mongodb-collection-find-projection-operator.html","8f190e26985f20104e6445b5a24e585e"],["mongodb/mongodb-collection-insert-1.html","94b6887a3bbd8832a82ea212f3fd0c36"],["mongodb/mongodb-database-create.html","b321537cc4b0ed39edd63412aee19985"],["mongodb/mongodb-schema-design-note.html","555fbe13e51e40d8c7115f72a7e6ed89"],["mongodb/mongodb-study-note-1.html","614c79249adfd59411f7f8c5de85f94b"],["mongodb/mongodb-study-note-2.html","2deb17aeaac215632d8e81889fdec246"],["mongodb/mongodb-study-note-3.html","84c21bdd99fb7f7e4083ec92ff79dd57"],["mysql/mysql-ddl-handy-book.html","2494acdd806e9f327a8fa95bd3d826b6"],["page/2/index.html","3cb84987d44d7cf210d8b1fab75730ea"],["page/3/index.html","9cf2e49452e2ec7d48e4d77594395e93"],["page/4/index.html","cd86303bffbe9e684c4baf3446fd98e0"],["photos/index.html","1bce9d67d5ec4dd0b983b0acf3237230"],["python/upgrade-python-under-ubuntu1604.html","be576bae09937ebf0e2a5cb2b68f3f80"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","abfd782fb85ef4838a5874aa5c21c2c7"],["slides/index.html","1e1710aafef47fa19cce352279d76f1b"],["tags/Autowired/index.html","12eb0b12c11459b88e79b2036470ad2c"],["tags/Base48/index.html","2bb56d7768cec0b23354af1a91ba1ce9"],["tags/CSS/index.html","1412ba1dd5bec18c53d1a886d8de81de"],["tags/DETACHED-HEAD/index.html","392a68d7cac7689a6788bd8fb0aa8501"],["tags/Git-Flow/index.html","a97783cdea24aa1dcf979739ed5e552d"],["tags/Git/index.html","c7cae6fc658f29cd6132612c319f2345"],["tags/JS/index.html","14d925c0927eddfaece39c0e7da7f492"],["tags/Java/index.html","ee586b3c20bdb83d4ddcf5fa55dcd003"],["tags/JavaScript/index.html","21b9ed6309a44d26c72e60cc5908d8ce"],["tags/KVC/index.html","7727d2fd7ac58beae6bc14e77f677207"],["tags/Linux/index.html","3e1a35082a5e15d2153a6b6a531336b7"],["tags/M/index.html","ab9f32f938c1b1003c314a2ea72dc64a"],["tags/MongoDB/index.html","0af509dbf04dcf6794dec0729e0bf5e6"],["tags/MySQL/index.html","998ad81959c42c4eabb56463396286af"],["tags/NAT/index.html","096c0e84bcfe1af6084ca837f8f85e94"],["tags/NPM/index.html","05f9a9c2643eab50f18c818b22f95140"],["tags/OC/index.html","9d4e44f300de145fc6008e3917ffb876"],["tags/Python/index.html","934782875aafde29660a3990ab863235"],["tags/ReactiveCocoa/index.html","5046328a0c3b140f46baf93720b06714"],["tags/ReactiveObjC/index.html","adef937d604165441afa9c5417073572"],["tags/Repository-not-found/index.html","cad0b0e62058f2783fdcf0e5fd7ddd67"],["tags/SASS/index.html","ee0a7b88a803891912570c975d62606d"],["tags/SprintMVC/index.html","7345a8ff29bf55c81bae4cee197a1457"],["tags/Style/index.html","4352670f0c18fecfd47ff78802529c92"],["tags/Ubuntu16-04/index.html","a1f2326100840e0903a9c13719b35661"],["tags/Vue/index.html","5dd59ff77abbcf0a9aad085921d20508"],["tags/X-Frame-Options/index.html","4fd2da54783235a133abc90c65bc7fa9"],["tags/aggregate/index.html","d34a2ed6521090c524efb2f1803a4f12"],["tags/alter/index.html","970124f491137dc98e651309038f11af"],["tags/change/index.html","990dab33b4d90e28f5024e18e5157e69"],["tags/checkout/index.html","4cb543b46d851f0f176522d3b7f2451e"],["tags/collection/index.html","737cbf32d928380bad4aefaf1b646dff"],["tags/component/index.html","2ffc7505edadc895764af0c8e6dea6ff"],["tags/computed/index.html","66339c140e31c6ef7f3e19308135cacb"],["tags/create/index.html","f40a716c1156d644b4706c9da0fe6f5d"],["tags/database/index.html","ed93db76d8530b89bf90fcb269ba1d49"],["tags/df/index.html","f53bf829b2145da7141dc38e33ee9c9d"],["tags/diff/index.html","b9027e628d24a5516debcd60ef06bd68"],["tags/du/index.html","0c78608833abb92e407fc281e7183f4a"],["tags/fast-forward/index.html","46a3ab47db6e7fb1ebd1ebcf55550f7a"],["tags/ff/index.html","01427d8679c399ac1e0ffdf960674fd5"],["tags/git-branch/index.html","cca3f8fd6e8f9ced3336ac26a58a8de4"],["tags/git-merge/index.html","8c0e16cd2115ff6c61e37bbbb50e75df"],["tags/git-pull/index.html","2b6e66e2433b8dad7f91d66630d6eed0"],["tags/git-reflog/index.html","ac264981c2d1f277e288eeab2f7f112d"],["tags/git-reset/index.html","9012ec9402e82c51a355354e38a56215"],["tags/git-revert/index.html","ae2bf14d856a5a0482c769219bd7d104"],["tags/git-tag/index.html","b970d990fccb1e261d49d7921fd4aab4"],["tags/index.html","465431488d4487e59240028fe222e1de"],["tags/modify/index.html","3f36ab9e72b6c65ddf8a1401cb7180e5"],["tags/no-ff/index.html","6d6a2a28bba9aa23577a7c123e8ed4a9"],["tags/rewrite/index.html","dfc2f924bc15f78f097bb4d5d4e67225"],["tags/schema/index.html","089b51bb8749dfd8b46452983e97c52d"],["tags/shell/index.html","54aee369b5a5fd956b32c78a6ae8bb63"],["tags/shiro/index.html","37badff04e061ccc664a28a2755b4f39"],["tags/synchronized/index.html","3a8333627d326df92fd88c1784da5ed4"],["tags/this/index.html","96a3d91b305eaf91e44b07ad074ac6c5"],["tags/tomcat/index.html","57e3ec5c163e8ad10853c5b12c79736e"],["tags/true-merge/index.html","cc7a24562de155b0b581698760dc678d"],["tags/url/index.html","9130784ca110633179bb6735b4d7dee6"],["tags/windows/index.html","93013739f896ee20a9058d1abe06581b"],["tags/一棵开花的树/index.html","066d85411f7327d145da4200f71e550f"],["tags/介绍/index.html","230fdc1fa7499dacfc68237d3f8a4ccc"],["tags/以太坊/index.html","0e087c4e652c2bd2a72d30267ead7f0d"],["tags/依赖包/index.html","8cadd6f0b2d4fc4c4ec1a7f6d44539da"],["tags/修改/index.html","76c14bdb4b1bc3b02c1210289e352201"],["tags/冲突/index.html","cd81549d9291dcbb8c353a2f9e4eb1f9"],["tags/分支/index.html","ef6fa187e514829e4342991c105561af"],["tags/创建/index.html","582fc54edd54639eb52f59d6a4fa9fdc"],["tags/创建数据库/index.html","b23b722f390c4d60c0b0b5227b3397c8"],["tags/区块链/index.html","8b2ab99d1fe2d90ab5f94a30c9d93c18"],["tags/升级/index.html","a903c083aec3332c11a50d73147219d1"],["tags/存在/index.html","1814dff9a1cab4175ff20c814babafda"],["tags/学习笔记/index.html","d48f3d46be7aa2d9d6ec335a4f5970a3"],["tags/实例/index.html","31af988bd7b7a22404493187e2b7a4ea"],["tags/工作流/index.html","e97dcb900dcb9b1ee70edee40e3ee0e2"],["tags/席慕蓉/index.html","998fc1eb28d25d09121efac468f4f398"],["tags/微信/index.html","7d6d81492ebc4677d4cd2ebf63c3bc16"],["tags/插入/index.html","2dcf16e84781456734ea4bff74cdd97a"],["tags/数据存储/index.html","4b061dd1ffe08ea7072ace58e410a78b"],["tags/数据库/index.html","19e8a8a8a2b27482db619d780c00ebb1"],["tags/数据集合/index.html","d3ead66399e00e2e3dc46e67b75e67e4"],["tags/文档/index.html","aec36a35ea3f4dd102c694a17e898389"],["tags/文档流/index.html","1e0ba8edab851fb484f7733a4b1d54d7"],["tags/智能合约/index.html","beb8286bbe8e3f9c6357f2d52b9adf20"],["tags/标签/index.html","2d993679932b6359a32ad5a5c2a221c9"],["tags/模板语法/index.html","609ce4787fd62a79e6f77877dde5c9ba"],["tags/比特币/index.html","0bf1b6da03072389018100f2aa71f606"],["tags/波浪字符/index.html","ccb3a21d3c75c97c7627d91780848ff3"],["tags/用法/index.html","65384712b87e6244c60f4a56f63813f1"],["tags/穿透/index.html","f908b9b425473685283e26c83ec9b4e6"],["tags/笔记/index.html","c58a6e5791636e81d1da9bde8fdfad7b"],["tags/符号/index.html","874cd89b52775a22677c32751dd664a2"],["tags/组件基础/index.html","b2459b18f4a669ba82f3f98c46810d2a"],["tags/绑定/index.html","a0a0b054f7671717d0df7ba0e26dc095"],["tags/编程/index.html","fea0cd6e9efee16d3b04242a8d72b210"],["tags/聚合/index.html","8b642ccf9f3c825343d8fa759f0abbd0"],["tags/自定义指令/index.html","5b8d01fb2385642eeb46a0837e76d290"],["tags/计算属性/index.html","e563219424c26603c0618b3cb123ab4c"],["tags/远程仓库地址/index.html","cad1c452b2aee9d59ea6c908c5c9e656"],["tags/逻辑操作符/index.html","a636a3cfc4fcb5ad0f2e88fd65878441"],["tags/部署/index.html","9f13f7bd99ac8de20280c6c94c14c621"],["tags/难度/index.html","d173f00ec4d5c53adc22ceaa8f94017f"],["tags/集合/index.html","d2c10c9597d709a68826ca1233aea538"],["tags/集成/index.html","82dfbde7fc11c9999731918b7591db57"],["thinking_in_programmer_life/full-stack-programmer.html","504507e9a165c1083a4d7b1d1339f5b0"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","ffc7c61adf27cc86ed2cdf601d1421c1"]];
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







