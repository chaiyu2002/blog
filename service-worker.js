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

var precacheConfig = [["about/index.html","2c63a8bef6434ef2bf7a8880b86293d5"],["archives/2018/06/index.html","7835862eeb3da9db9d2c2b616cbffd41"],["archives/2018/07/index.html","2376f075b6db7bac21f5afa8c847ef26"],["archives/2018/08/index.html","12fc81acedc981b15a5fb1dc2be86103"],["archives/2018/09/index.html","0bd58a1b2928960e57febba16293eaf8"],["archives/2018/10/index.html","2b9e17b5a3197eb159b3a5fc938f7e2c"],["archives/2018/11/index.html","2f12d82251e3c035c2adaed50ac08636"],["archives/2018/12/index.html","c07d15fcbdf274488e8cd964fdc56fd1"],["archives/2018/index.html","e4e07be7a7d85ac34dfa5eaf9e78ec9b"],["archives/2018/page/2/index.html","f85bb42379a178767278c46ec0457357"],["archives/2019/01/index.html","2ac19f32b977b7a3a03f21ccd7634571"],["archives/2019/index.html","cea15d81a9b5784a31534180286ede2e"],["archives/index.html","e8ec02d2ec6de392711e5eb569cb8e21"],["archives/page/2/index.html","adb2eeb0c5ba6c86963415e06bb2e4b5"],["atom/index.html","1e119e7f64a2c095cc22d0f683f7492a"],["blockchain/base64-base58.html","8749471cec0d648d7bf1451003d6c7f4"],["blockchain/bitcoin-data-storage.html","efe1d63d5ddfb6d3b25273acc863dfb5"],["blockchain/bitcoin-difficulty.html","56b71d95b52d400853c99d9a7206eeab"],["blockchain/block-chain-ethereum-contract-program.html","b1422a12f8a8c6aa38bf7f93adad9114"],["blockchain/ethereum-programming-introduction.html","bdbbcf215de1d4ddb2800e18d0f4aa16"],["blockchain/ethereum-rationale-introduction.html","296ce366e82546458c5fe8ed29d7d139"],["books/index.html","b1669b33747bd866f91a47953e8a920e"],["categories/Blockchain/index.html","6bd5be6ecc7500d1594145d855dc36ba"],["categories/Blockchain/以太坊/index.html","e55a0de723ddcf14fa9b2e58bb3b8091"],["categories/Blockchain/以太坊/智能合约/index.html","ae17c09f693b60de5ea22fbe39251edb"],["categories/CSS/index.html","8e56a30954326d1b7b2c1c07028c43ab"],["categories/Git/index.html","25ec9cb45f540b3cbf98f64e463a37c2"],["categories/Java/index.html","89e52fd6b629f78dd175e8fcfacbfcd7"],["categories/JavaScript/NPM/index.html","9dffa201a1dc84c5602da83736a6b7e0"],["categories/JavaScript/Vue/index.html","2a54f25873ae01fc20a07e5daab00e60"],["categories/JavaScript/index.html","12e57a7f6f7aa3af59dc52382f0ebefc"],["categories/Linux/Shell/index.html","12e03d5120523d41dfec28e3cc0c2709"],["categories/Linux/Ubuntu/index.html","f31bc61d87496d8cf352e850ecff8975"],["categories/Linux/index.html","b4c8051572624ce8c7dd1cf326909ca6"],["categories/MongoDB/index.html","690fbaa24d171e89c6c0d17d65c94c00"],["categories/MySQL/index.html","8f6bc8d8b3d5bc6174496f6969d16412"],["categories/Python/index.html","de3cb72badbbcde21da728c41271f617"],["categories/iOS/index.html","e758c8b9f3e13753c5dcbe7574424800"],["categories/index.html","4d52d372ff55463dab6965dd66a5dfd9"],["categories/微信/index.html","fe47aba87ddc86004132e025f3df65ab"],["categories/杂记/index.html","2b4cd9ea076cb321f3729218fce65721"],["categories/程序人生/index.html","cc08bf0b2770669b1164becc1e937073"],["categories/计划/index.html","ea94f4c3931de5c12d625e19b32622d0"],["css/css-font-note.html","301533ae268fb335d648515373397bfc"],["css/css-normal-flow.html","7410c46f9a4f4e68bb57238d46292991"],["css/css-sass-introduction.html","6b881802e7bdb975a03d5c0fba32b101"],["css/main.css","2b9c60b9ee95ab7a4a2e0d98ef2d9dfd"],["drafts/configure-multiple-vue-project-with-nginx.html","210ffb36e19160449a72663d90bfbb9e"],["drafts/iframe.html","e112f942cf128e5aba0dbb348735148d"],["drafts/record-re-install-mac-os-10-12-6.html","4765d4fa16550768f11f18c71dd1b8c1"],["essay/note-ximurong-tree.html","f64fe581a848e7a9d455cd5d1b04d735"],["git/git-DETACHED-HEAD.html","71ab3d09de5d71b55a2543802344c1ee"],["git/git-branch.html","dbda5bc5c1f8043871706ff42c1df55a"],["git/git-change-server-password.html","59e0c70f20ac68ee843770b3dda04df2"],["git/git-checkout-1.html","e8e09d8f365374dcf6eff2b5a1ca1c16"],["git/git-checkout-2.html","cb815dfda877c85a97f97f007ca5d02a"],["git/git-diff-m-symbol.html","915c55ca21ad54abd40b4f1c7c370e29"],["git/git-git-flow.html","690b68777710979a4497e2427ee8afcf"],["git/git-git-merge-ff-no-ff.html","2c2ebf2e5b096f33b814f6f53bbef914"],["git/git-git-merge-true-merge.html","508c55fd9d28703d1cb0d4e03fce9762"],["git/git-merge-choose-one-side-code.html","7c228aa762024db15da9bb9a46958c8d"],["git/git-merge-exist-conflict.html","fb733d9e66790ef7eef570675b55eb66"],["git/git-pull-1.html","bb481874c6dd7d614ad1d4929109ffee"],["git/git-reflog.html","155dcd5a9cb5d54475a3096d7e6a7bf6"],["git/git-remote-set-url.html","10c3d4c89d97b13323c4bfbb2c334be2"],["git/git-reset.html","9ef67f23ba6ead181eecd1533ebab9a6"],["git/git-revert.html","87a723859d558e6eb84a61c70f4b558f"],["git/git-tag.html","f8ec0c2aebf61a0d9878557ea3b829d0"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","491d11422af695d2acbeeb3921e104b5"],["ios/ios-oc-kvc-1.html","0490900ef8a277393c403215e05e15f7"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","60455213629d4cbf9dbdd56570deae6e"],["java/java-deploy-resource-folder.html","a77c4228dfbe7827fbf9541791a8411d"],["java/java-shiro-note-2.html","b7995819db44297d26386d9c6166a7ef"],["java/java-shiro-note.html","9090c05c257b2174d7b9494e239f4f68"],["java/java-spring-autowired.html","9d56bc1a9a92728febecefa0fd41983b"],["java/java-springmvc-X-Frame-Options.html","31aafda14cc3ae3e5fe1c1d8d078585a"],["java/java-synchronized-note.html","9a6de55aafeee1ccd1ce1d0608290c7f"],["java/url-rewrite.html","fb1de664ef9c31150e02ac9cfde98fd1"],["js/js-logical-operator.html","dee88e0952016880e1c00fbd7a874d6c"],["js/js-npm-symbol-caret.html","1ace9bbba42101d47c60c0d73d53200c"],["js/js-npm-symbol-tilde.html","19415e0b2e638aabbdc2a2f8d1ff41cd"],["js/js-this.html","35b490349951c4a3ed3fe40b6bf314b9"],["js/js-vue-note-components.html","d515ea583bcae66f04893b1a3fee73a1"],["js/js-vue-note-computed.html","c02b5d1e820ad5699779ae270b2b4cdd"],["js/js-vue-note-css-style-binding.html","9d25ced10516083f9426da34213444bb"],["js/js-vue-note-directive.html","86ffc762d2e6d89148223c36ad4f343c"],["js/js-vue-note-instance.html","419f63b763e71630392ac9e461a4e91f"],["js/js-vue-note-introduction.html","e9b091bdb3a3dca7b9e30895859e07d8"],["js/js-vue-note-syntax.html","9068d47ecf409fb508b1b8d79ac00346"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","99e12f526d8932c077c1fc8202913b9a"],["linux/shell-command-df.html","540cf65c312db3eba6dc89009580b0a1"],["linux/shell-command-du.html","9cdabb6db9c7457c14184fd8945aa6dc"],["linux/shell-command-netstat.html","7f2a62856c6e75b1adb894d2826c6cd7"],["linux/shell-command-sed.html","9ea59a6c0eb9e43245d74ebab2360d04"],["linux/shell-command-tar.html","4192747229b5badad896cd2973026b82"],["linux/shell-command-top.html","3d3cd413d90d589bd231fe23b5098815"],["linux/shell-command-touch.html","b0028dd5824baf683096a8aac1a8bd34"],["linux/shell-command-which.html","35d55d4c2c601233cb2fb1e848c46184"],["linux/ubuntu-user-add-delete.html","1d5b12a6c7ac00244c3ff911e7f0c0dd"],["mongodb/mongodb-collection-aggregation-introduction.html","f337bc15d566dfeb31c2c7ea57d97d26"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","26b55abea4e4cb2a6e9a7e8e4aea7986"],["mongodb/mongodb-collection-create.html","f938105e5c6a11e6320a3221a50f3a64"],["mongodb/mongodb-collection-delete.html","77405d14423c2ebf65fec34de04aadeb"],["mongodb/mongodb-collection-find-1.html","3ef43435b9462940823e64915175bcc7"],["mongodb/mongodb-collection-find-projection-operator.html","58f943ddeac2b3e31076b0e9058fa20f"],["mongodb/mongodb-collection-insert-1.html","33e00f9f126ee1fd584572f4db7ded3a"],["mongodb/mongodb-database-create.html","342849693c97a81f44816267de0cf1e8"],["mongodb/mongodb-schema-design-note.html","009f0a087106fed5c2fcce7b1fe34b44"],["mongodb/mongodb-study-note-1.html","337fcca2d525d9e8c476734ab655905a"],["mongodb/mongodb-study-note-2.html","4aa55dba643494a5923e16614f79596a"],["mongodb/mongodb-study-note-3.html","b5101c981a3f20553feb918b42d587bf"],["mysql/mysql-ddl-handy-book.html","e1f4252496c8835f415ade3aea82179f"],["page/2/index.html","098b9c0d0bd8d8f6c67f8d40338b6d58"],["page/3/index.html","7019505b1d74a73de3306bb148bb3ef4"],["page/4/index.html","eedc158a4be88456c4aa163d978ca513"],["photos/index.html","262554c7bb1b5a04b6fe79a4bcdb0c60"],["python/upgrade-python-under-ubuntu1604.html","d19a219ebacf52afce4a7ef0384769d1"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","78226baaadbe024f548974fb1e437e69"],["slides/index.html","079fd6460861007808eb5e079c89d27b"],["tags/Autowired/index.html","13310343077d4396017815047a857b3d"],["tags/Base48/index.html","abd45da63349e3320928bac9cd922fd3"],["tags/CSS/index.html","9a2bcfabf6da5ce9e782f1e95ccd1cdc"],["tags/DETACHED-HEAD/index.html","2bd153dc77e287724290e401f3bdea09"],["tags/Git-Flow/index.html","414274cfc89d950a7ef520406819b0d9"],["tags/Git/index.html","61c47bb858aee62f53645a077542498a"],["tags/JS/index.html","e91b81fc9b5cf9737be882b7f140800b"],["tags/Java/index.html","a4ca935b34f01a07bebb80f30d6eff72"],["tags/JavaScript/index.html","20d68413679b0a527e75301d5d9f4d9d"],["tags/KVC/index.html","d3f6c111a73a30567ce3016a480524cc"],["tags/Linux/index.html","06f1c87b4a0bf5171080dc43bf433dfb"],["tags/M/index.html","fdd87e26221d99e4ec55f1909d445aa9"],["tags/MongoDB/index.html","0f6099842f48cb779106ce8ddf026219"],["tags/MySQL/index.html","c63b86fb043a28b48d8d71474cd906a5"],["tags/NAT/index.html","d335e01372edbc84b0c548da655757b9"],["tags/NPM/index.html","ae348a4e7266eee276ea12cc657ec08f"],["tags/OC/index.html","72f958ac161157790d416ccd6bbe7670"],["tags/Python/index.html","f701ce40a66386a37b76f52565f0e1f9"],["tags/ReactiveCocoa/index.html","01f87d882e41b2d952f5d544c5bd4080"],["tags/ReactiveObjC/index.html","c5e0a37edc5281edb71746007d7beee3"],["tags/Repository-not-found/index.html","623a799638d3a9564bd14d0c9556f07f"],["tags/SASS/index.html","d43e3158dfd78590ec62cee7c646eb9b"],["tags/SprintMVC/index.html","44321842b6786a7216a4ba67f9b19390"],["tags/Style/index.html","3027624555f7cbffd2c2ef162f89d4cf"],["tags/Ubuntu16-04/index.html","67d60e6e1d86001ad72e3c71d383cf4d"],["tags/Vue/index.html","73cf5fbae2de50f5a0178cf38f3f7d84"],["tags/X-Frame-Options/index.html","f258783cc7d6239bc9b238a22aa56367"],["tags/aggregate/index.html","a0f3ad61b602d64e5e438377e9b50d1a"],["tags/alter/index.html","99218c7b922fb066f9e335cb5645f931"],["tags/change/index.html","92bf0971968dee7d9b2d184935e397fd"],["tags/checkout/index.html","cb9af2b21d700161fc57eeccc3623644"],["tags/collection/index.html","41332eb456842d67d54a99ff694017a1"],["tags/component/index.html","98e5f665aa57e162d821152f91f9c00a"],["tags/computed/index.html","91b53e9f5affdc099dcafa512460df25"],["tags/create/index.html","93f53aba39696299d49e70fddfb1f419"],["tags/database/index.html","63515e496343442a3ce17d55c3cd0b1f"],["tags/df/index.html","60eef419f7dc79462c7caf487ae46c21"],["tags/diff/index.html","c7426ad8f6fbb8f05c312b476213ab25"],["tags/du/index.html","edd0afbea6aae34b38635303788c7614"],["tags/fast-forward/index.html","1056be7f10e042791ad7d03757ae6930"],["tags/ff/index.html","265305b18fa6f4ec7f183ded9956f45b"],["tags/font-size/index.html","06fcc89ca5a53f72a18d4389423732be"],["tags/font/index.html","3ea3bb8cd1f5699f1f4593df70b72846"],["tags/git-branch/index.html","14a95470db4f08f14b6cc23d30735f5e"],["tags/git-merge/index.html","c25139e3ad3cfbc53e13a5171a26be88"],["tags/git-pull/index.html","f28965cb1d6a2f7a8bc1fa12b5700c94"],["tags/git-reflog/index.html","d45e9b35bcf685f27ead53d38ea1b142"],["tags/git-reset/index.html","913c40fce83917d5e652e5fd828e3f1a"],["tags/git-revert/index.html","bd05226accbf3e2cf2880d7791f7eaa6"],["tags/git-tag/index.html","7cb5ea5aca937b1b00b3efbd89bda7da"],["tags/index.html","c616fc052a8b1f5287e54df4660b3cdb"],["tags/modify/index.html","8216cd3664f1fa9c6f6187a58245ce89"],["tags/no-ff/index.html","5270d46e6012693b3584e2f511b839ec"],["tags/rewrite/index.html","e8a620bbe8fe18a0c174290caa2cc405"],["tags/schema/index.html","48d8bc4a08d3509a7c963882be8adfa2"],["tags/shell/index.html","adc5b21e5575bfaf3dad704faeb2bbcb"],["tags/shiro/index.html","4b7d496027014fcdd61fde7c34d802a0"],["tags/synchronized/index.html","cdf56ee00f7b71ec398ad27073ca3123"],["tags/this/index.html","69bc2086d664dece32c05e87ae1190e8"],["tags/tomcat/index.html","1425030a3df3b1e90b4d66fef8a549e6"],["tags/true-merge/index.html","797fecd10d9414c79e4a15683753b1f7"],["tags/url/index.html","9e0bea85e50f2738f6aee931b77daea3"],["tags/windows/index.html","096a166f01ccd98d2a86fbc0c84f521a"],["tags/一棵开花的树/index.html","52e7ae1b29ff9ccad2d879d837cbbeac"],["tags/介绍/index.html","b64ea962e8038ec3a737a6d3957841fd"],["tags/以太坊/index.html","14be7455d662943d9208ab5cfbefc971"],["tags/依赖包/index.html","aa4e95f81ac8b1b05cc6045bca60ff49"],["tags/修改/index.html","3dbbcb22e5d9bcff2a9364c9fad7797c"],["tags/冲突/index.html","fc9754cdace30025eebca4baa6cda279"],["tags/分支/index.html","d832288482ef0743c5382b3ec6816e35"],["tags/创建/index.html","808848d4fd8ae7decc8176bb311e0a71"],["tags/创建数据库/index.html","aabaa302097f02d645623d89fd3afb45"],["tags/区块链/index.html","88a50f1d007477f11c853f658c4f864e"],["tags/升级/index.html","f806b33f65081652623585c0e63e7f60"],["tags/存在/index.html","04270a82b2586bb737ab4337397802ca"],["tags/学习笔记/index.html","b55addb6b85c4acad22ee461cfe00666"],["tags/实例/index.html","062c84217b409893fcdfee5731ea9a9d"],["tags/工作流/index.html","cdad588afeca0f3a940df6725968965b"],["tags/席慕蓉/index.html","74c97996c74c587506677b95c8359f5a"],["tags/微信/index.html","3a2503bbbe6ebacd7633bc671f9f7daf"],["tags/插入/index.html","d01bc9b57321a4d7fda28541f30c332c"],["tags/数据存储/index.html","152cac0ae9454daf451b6142214f95d3"],["tags/数据库/index.html","1122e7f2593641e430cfea3962915522"],["tags/数据集合/index.html","4fbf71b5d4f200fc10df06ada76d467c"],["tags/文档/index.html","ec00645704ffb301b7f045390c7ca2aa"],["tags/文档流/index.html","e7b3eabd0b1dcee469e0a44dfc7f5805"],["tags/智能合约/index.html","2a01e09f95a25f0416bb99de4b871bbb"],["tags/标签/index.html","f9b70a41b48b4d8adc4eb62cfb10a674"],["tags/模板语法/index.html","94a719ecea59342f37c9db516d7e7504"],["tags/比特币/index.html","a8520a5e4ce82a16fbbbd525643e25c1"],["tags/波浪字符/index.html","3c5f01a0d1a0e6ec85f28f96bf48f898"],["tags/用法/index.html","004af76a9a703b7cce6d07c2b4e91e33"],["tags/穿透/index.html","85db42899b6250756d52609e5c58eb44"],["tags/笔记/index.html","eda2303dcf1bdf7fc019842fa31aa1a6"],["tags/符号/index.html","8557b6ca7c0c7c1add96e3aad2e94263"],["tags/组件基础/index.html","3571b3a67f6fce236a58084c8fdd75a6"],["tags/绑定/index.html","ebfc4261f9d5a569671e14c715f5ad89"],["tags/编程/index.html","7b1a30776d574cbf20b2d4e167ed42ba"],["tags/聚合/index.html","60ff4bdae53e0119001cd916190309cb"],["tags/自定义指令/index.html","1d54c07be91da18c0879f72a8da52f10"],["tags/计算属性/index.html","6c9cda4c3cc4079768a3405d57c2df41"],["tags/远程仓库地址/index.html","1df816a1624cfa3cc5545180131714de"],["tags/逻辑操作符/index.html","8b849758ca9b114a48230ebc2f956c86"],["tags/部署/index.html","d61d6e0c416743a95fa85c1b43b9a98f"],["tags/难度/index.html","29844bc2484955ea1db009b11da4e1ba"],["tags/集合/index.html","ed8f2d8a07086cadb7aad242cdfa8a17"],["tags/集成/index.html","0714254a9c6b62b2da9f23c22d8f9a05"],["thinking_in_programmer_life/full-stack-programmer.html","32ee2c788f59ffc1ae8ca8d4026a643f"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","0f6f764e4424c3543d95754333faedb1"]];
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







