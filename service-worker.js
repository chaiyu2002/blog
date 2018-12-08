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

var precacheConfig = [["about/index.html","8c9c20ab372c1d17e42ab747883fe8d9"],["archives/2018/06/index.html","183ee2c99276a10862a2bbb301679c99"],["archives/2018/07/index.html","08cf060a9fc5f83fe2f9c0850e133d56"],["archives/2018/08/index.html","ad01b90c04fb181e79530388952c3ae0"],["archives/2018/09/index.html","c34afca72172d4fff11170e0ec296392"],["archives/2018/10/index.html","81ff6fd1c06a3374721fe791fec63fd6"],["archives/2018/11/index.html","74df0e1763e1f5bf8a830efeb95537e5"],["archives/2018/12/index.html","fcacfbd9d76d90d75ac1b596f49ce596"],["archives/2018/index.html","f49968b3eea2f75fe4602321ebb8ce2a"],["archives/2018/page/2/index.html","da9ab2c2c9a9e17d923802973ebf2f14"],["archives/index.html","d44b80388a99cc88f93df66f838509f9"],["archives/page/2/index.html","f76b8d407969b40b9500915e7eb10cc3"],["atom/index.html","b48504c712cae3a58f1435dd8238f018"],["blockchain/base64-base58.html","bf868b07d86380df8c47008d97c47609"],["blockchain/bitcoin-data-storage.html","2b876540ada94acb312dda571c86cd27"],["blockchain/bitcoin-difficulty.html","686f77f9f4e9083071b72659d6e05438"],["blockchain/block-chain-ethereum-contract-program.html","83a69965a25825af20a9a1be86678821"],["blockchain/ethereum-programming-introduction.html","c1bcf93668001987d58eeac4c293b60f"],["blockchain/ethereum-rationale-introduction.html","9726e205dbcf0605ff4a45fefbc47ed4"],["books/index.html","6bdb0a3d051ea4ffba19689db453fce0"],["categories/Blockchain/index.html","e0fa3647903493bb2c9daac5b114138b"],["categories/Blockchain/以太坊/index.html","df798b20b8173480d49195eb2679b840"],["categories/Blockchain/以太坊/智能合约/index.html","37a2e246afb5042e3398127205098d71"],["categories/CSS/index.html","d45a63e3e14d2f710d3b307526f18dda"],["categories/Git/index.html","9333cbe0bd3281186966ce99927361f4"],["categories/Java/index.html","a2b833b671b1ef50189ceafada468643"],["categories/JavaScript/NPM/index.html","f4b993119fa700a2e29119eedb52f517"],["categories/JavaScript/Vue/index.html","33f003fc8191ab4850e937719bfe4d21"],["categories/JavaScript/index.html","f49c2c6da3b49d3c949c48adb282b371"],["categories/Linux/Shell/index.html","e8db5855afe3f1a43fc95df07e31edde"],["categories/Linux/Ubuntu/index.html","7e6a917bad14db2d6d5ef7ac729d2a64"],["categories/Linux/index.html","461fba21bcee67ef653ebed88aae064d"],["categories/MongoDB/index.html","1bafc908ad54c492e0d84bc1d3b1075c"],["categories/MySQL/index.html","991c8ce2cf06915da4e68868fc460bdd"],["categories/Python/index.html","14b2ef694f58768b9a77afb48be7f973"],["categories/iOS/index.html","7ea38d102ebc3c39e09419633636fa30"],["categories/index.html","7f452f0843ea6d8b2bcb9f7f278a6570"],["categories/杂记/index.html","38a72a4c0e54db7302114b9d50da53c1"],["categories/程序人生/index.html","be787b34b513f459c085e36a6a2d1c84"],["categories/计划/index.html","39da0f9e23523ba07ddc031fc7fa9d33"],["css/css-normal-flow.html","184bd4561a309b43687c16dd62171b33"],["css/css-sass-introduction.html","cbbceb8a5e97958215a509c1cda24ef9"],["css/main.css","9ce99302a444b0b6d4589a191408e9e8"],["drafts/configure-multiple-vue-project-with-nginx.html","6228522d1036a47a73ae1391d11cfcc5"],["drafts/iframe.html","816ec26cbdb1814921de5ee98d530987"],["drafts/record-re-install-mac-os-10-12-6.html","92e273c66e72d1f2e69697f341d8f04e"],["essay/note-ximurong-tree.html","d4e02b42f41c73b19fcb8fc9f240d7ee"],["git/git-DETACHED-HEAD.html","c36e770846dec1150ec9c73506fb63c8"],["git/git-branch.html","f50f33918324fc62ae3a80e405d7b57c"],["git/git-change-server-password.html","1f2ba78f2a49e4aebe6ec85810c3d32d"],["git/git-checkout-1.html","f84ae6578727fa79337d5a0b4e1caf5d"],["git/git-checkout-2.html","01ea87e09e0137e1fa0457a858c8a71d"],["git/git-diff-m-symbol.html","ae78e454298ceb36fa476c3c12ea1e9b"],["git/git-git-flow.html","51aeb1f50dc16fdb4944946c7dda5dd4"],["git/git-git-merge-ff-no-ff.html","922766401e3602e6decfdb87c1db7f8a"],["git/git-git-merge-true-merge.html","86371475aa65032a8edb4ecdd0a5108f"],["git/git-merge-choose-one-side-code.html","b7ce18d4d8f5fa041b5bf59ce78a43ad"],["git/git-merge-exist-conflict.html","7c8fd9076226fa42f540f6ff667f2f20"],["git/git-pull-1.html","edcbdddb5cd9942a31d1e2828cdda39f"],["git/git-reflog.html","a8e7e72f6529aaffe0627db490f09ad8"],["git/git-remote-set-url.html","b0cb6ccedba57d5332e668f91ed8b3c0"],["git/git-reset.html","fbab48f91e764f91f5555bc2df1a5953"],["git/git-revert.html","118aff513675b59b67018fec7c67c88e"],["git/git-tag.html","5da82f929de85668ca4565f0b97a7a13"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","a2fd0b9766b5fc78275ce795bcee3358"],["ios/ios-oc-kvc-1.html","4465fb7a3087221c0ad831927aca7b65"],["java/java-deploy-resource-folder.html","344095afa3fcabe45aae878d1c464e5f"],["java/java-shiro-note-2.html","42add5072f4f39dfa1f23d2bd8be338f"],["java/java-shiro-note.html","35ac6e3bf713fbc6b1ef6b14220e5211"],["java/java-springmvc-X-Frame-Options.html","bd101a4d42f8dd8ccee0ae836c366ff3"],["java/url-rewrite.html","7dd651f6d42fc2434978bc1937f3af7d"],["js/js-logical-operator.html","3e2e44dd90cfc0ef6aaa6ef92cc23940"],["js/js-npm-symbol-caret.html","ac44cfd0ff461c60ffea35a16f085025"],["js/js-npm-symbol-tilde.html","702ea700e79ba3217a8b1eb9e1d93b4e"],["js/js-this.html","96fb4b865205e19b7d0441c02675a0e6"],["js/js-vue-note-components.html","beb286ec3c19152104498ec54c72e183"],["js/js-vue-note-computed.html","5f41186f0157d7811bf4c6e126a5dfd6"],["js/js-vue-note-css-style-binding.html","4ed535ce5cf33a5f7188879b4de1ac42"],["js/js-vue-note-directive.html","d462770ea7d68ce861221f71baab9d12"],["js/js-vue-note-instance.html","2319d3606d6e7a8b520a506cd5d80250"],["js/js-vue-note-introduction.html","ea035243eb2cf9964cf46bbe2fd89bbe"],["js/js-vue-note-syntax.html","5bcc86dfd7327b693ff018c1b81cdcd1"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","fce4b9ff46d7c44756bda284c854aafe"],["linux/shell-command-df.html","852e7034b48dbe6e3a79764b4f6a637b"],["linux/shell-command-du.html","f78e163f07539194bc8ce0b10dab65f3"],["linux/shell-command-netstat.html","ebe0bd396c3ac8fadf3cc66fb5bda165"],["linux/shell-command-sed.html","762dec2365ba8225ecc6c1b3c97f9cf6"],["linux/shell-command-tar.html","39d535bd64191ecf8e8a20c45ac89e5d"],["linux/shell-command-top.html","e2fbd29b70c48d8f0716b9805b38f5e2"],["linux/shell-command-touch.html","ff8c01fef9fa315970b3e6db2c12785a"],["linux/shell-command-which.html","9826a477a9ff4544c5477216237802ab"],["linux/ubuntu-user-add-delete.html","2024438e0596f918203a1178f24fc209"],["mongodb/mongodb-collection-aggregation-introduction.html","ec2fafa8914d7047b94be1bf9c7dd4eb"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","e9702684bdca17c072341199e5f4427e"],["mongodb/mongodb-collection-create.html","291429268b61e6eebb762e59e78c751c"],["mongodb/mongodb-collection-delete.html","981c002895758973dd6ea75afc0a9e84"],["mongodb/mongodb-collection-find-1.html","8acf1a60526d23785d1598cd67c3d111"],["mongodb/mongodb-collection-find-projection-operator.html","5a25bfe00e7b15e1246df77435ddc4b4"],["mongodb/mongodb-collection-insert-1.html","94d5b08ce48028c0fa73ecd436de7077"],["mongodb/mongodb-database-create.html","3271b0563ab9ee6a65ee714e5ba51c2f"],["mongodb/mongodb-schema-design-note.html","59e6318fd1568de5f65a86c918971cad"],["mongodb/mongodb-study-note-1.html","c39c5db05be96c6d007f41202ca50bfd"],["mongodb/mongodb-study-note-2.html","e23a21c5f9b2621c64a8b8733cec98f9"],["mongodb/mongodb-study-note-3.html","cda00d7ec4d1ef6ce2e482be8ff36c7b"],["mysql/mysql-ddl-handy-book.html","21f5afdc3be6149e034bd5d113cb6814"],["page/2/index.html","2c7969786c314d982e833d197ac76054"],["page/3/index.html","e3bcb1a934bdb7c278361fe7dd19a0f8"],["page/4/index.html","62d167733bf98342971db78493073bad"],["photos/index.html","0f80093f971d7159ef4948946a2bad20"],["python/upgrade-python-under-ubuntu1604.html","0f863c891f5e59351a3c71d767b0eaa8"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","b31818c325073c478023f3caab09a768"],["slides/index.html","a76eede36774bc422cd4d9a6b35c90c0"],["tags/Base48/index.html","329118fbfecb7344fb19111cbdb02d72"],["tags/CSS/index.html","e60439dbd9aa6710e9bc1c0aec0eeb0e"],["tags/DETACHED-HEAD/index.html","bc12c6f2298fc5b64248638d97b115f2"],["tags/Git-Flow/index.html","d7fb5bdd0dbebc7e6eb93c75471494b7"],["tags/Git/index.html","8a3c184a0649ed7deee9f310d97a7ce4"],["tags/JS/index.html","307c88d345acb748e4b00d7bbd929e78"],["tags/Java/index.html","200887d1561b4f4c093a0c86a016da86"],["tags/Javascript/index.html","df8ac597909468a851ee6f461e107b69"],["tags/KVC/index.html","c7754c05920f5a7f202da646b2743593"],["tags/Linux/index.html","49dd5df67beabceee3990908501cb2f1"],["tags/M/index.html","3d3f03b1915c26dbf24e2e5c69885456"],["tags/MongoDB/index.html","1925e6ff20e30ccc2493971524758433"],["tags/MySQL/index.html","a13e92fd5be843d9561f14e3dd2936ba"],["tags/NPM/index.html","c240d10d586b03454c871dfead4f3ad0"],["tags/OC/index.html","2cddc4d3e12faaaef9201aa670fc60df"],["tags/Python/index.html","caf740eb9a661e5a64fb99be3565b3c4"],["tags/ReactiveCocoa/index.html","ba44c9f1d2e4e49734d99abd536c15a0"],["tags/ReactiveObjC/index.html","bcb8112c6c5142a6e7b47b7e1cafca0d"],["tags/Repository-not-found/index.html","2b7bae160a38c43ebfc43a25fd0ad27b"],["tags/SASS/index.html","a35f8c1fa3ee929a87a348cd67d23c85"],["tags/SprintMVC/index.html","61d7aa632aadddcc9855a7ed7b0657e5"],["tags/Style/index.html","02f79452bbe880025d96903e2a655f0d"],["tags/Ubuntu16-04/index.html","9e602abaa0c6792bca0a21acb1d8598e"],["tags/Vue/index.html","0eff1a1ef69db130ef939da989c7e8b3"],["tags/X-Frame-Options/index.html","6810a1641358f23e12a88921a12b1e74"],["tags/aggregate/index.html","59133db48bd981f31669008ee36e3c46"],["tags/alter/index.html","f977ed7ccf36ce4175d35b9ed5227d44"],["tags/change/index.html","566df34673a79269db7b154c157e4a67"],["tags/checkout/index.html","079e9d091394084b87792b03ce1985c5"],["tags/collection/index.html","a1a9f0812245993d2eb0f59db17960d2"],["tags/component/index.html","46a9d2551d102d0a4aaf4837ceba1ee9"],["tags/computed/index.html","7efb05f27b84ebd82e1ee3c514782576"],["tags/create/index.html","30d083dd6296848b29789b49c4fda17e"],["tags/database/index.html","3635893271505776512efb9bd82cb33d"],["tags/df/index.html","fce940a95ac4ab066d968427fedb0c97"],["tags/diff/index.html","d345113f7b0d2344d6c7f9077d39c029"],["tags/du/index.html","c0e50a1366b0cff703667741d3cb97ab"],["tags/fast-forward/index.html","3c99ee35886abc6ddadc6f4c070d76fc"],["tags/ff/index.html","e12a9ef01c348c2dbf510a4bc371d93a"],["tags/git-branch/index.html","682dd876c8ae014ba4776579ec24aee5"],["tags/git-merge/index.html","42d47daa0bbfef319514b864d79902c7"],["tags/git-pull/index.html","c726d328195ef16715ef799d30760fb6"],["tags/git-reflog/index.html","433022ba5e9f7bca40b568fa490d6628"],["tags/git-reset/index.html","31a23cbccc97858a208c11466ffb5f52"],["tags/git-revert/index.html","014037522b8877881e819b4365da1f80"],["tags/git-tag/index.html","29c8577c36a5683c7fb7a386f8fa51e6"],["tags/index.html","092b7277f736c250546bda8bce015fef"],["tags/modify/index.html","ea4c59d4e9fa03d1d53eb8e55ec49e60"],["tags/no-ff/index.html","abdc211828b204d12fb80365b2f4f440"],["tags/rewrite/index.html","28dbdc014d335fa1167b8fa9b5c5c386"],["tags/schema/index.html","9d66cb1c3da2a82d54312a7925dc1deb"],["tags/shell/index.html","fc27eda05bc0fada0104c8bdf6291699"],["tags/shiro/index.html","c4115bd9ac3ef40860f170a88b6b273e"],["tags/this/index.html","9512c8938fbab417852201506b4964bd"],["tags/tomcat/index.html","12fd53e6ec1020d91619a18791c2a117"],["tags/true-merge/index.html","064e804bbd37abdd68bc235be649434d"],["tags/url/index.html","cba7856282781cfc1198270ecbb26f63"],["tags/windows/index.html","9e29b1e75d86e5a824ceea5442860a41"],["tags/一棵开花的树/index.html","57bff895918a31393749434e56048160"],["tags/介绍/index.html","1768f50a709075d34944505c026e6c21"],["tags/以太坊/index.html","1960bc8af22452237d5fb3ac5e6b6637"],["tags/依赖包/index.html","fca496f934befd04b30a6175f49acf3f"],["tags/修改/index.html","12b79f249dd8d70f44fc2e91f3c1023c"],["tags/冲突/index.html","88f52190d3f381c7874f6676027844fb"],["tags/分支/index.html","1e6c97891f46347756a64e620b9693ea"],["tags/创建/index.html","69df6eeeaedb93c52193a7a353da57b9"],["tags/创建数据库/index.html","a6c69bf4633ecaddc5efe66311ad9111"],["tags/区块链/index.html","a6ff9018335153e0abb00bf1d9c9400a"],["tags/升级/index.html","b1160e45b0ad1ae4ca6963d1c22c7fb1"],["tags/存在/index.html","fe8178c0f818a2418c980911f65ddfec"],["tags/学习笔记/index.html","54e8078c6fcda08d8039d8c7694e78cb"],["tags/实例/index.html","94aa9be2bc634490fe6789f01338155e"],["tags/工作流/index.html","be330979bb83e21f8143394323a48276"],["tags/席慕蓉/index.html","7bae4c97de1c037fb0c8344877146604"],["tags/插入/index.html","a3705de08549197a170d2f91570ab93e"],["tags/数据存储/index.html","9ffc6851a1a8d62aca8ece43ad436978"],["tags/数据库/index.html","d3dba18f36755b811503f4aad942cbdb"],["tags/数据集合/index.html","743d36e420c3f82ed0c03fa3514847db"],["tags/文档/index.html","04d8b6e699686ee8b00da9a21ca59f49"],["tags/文档流/index.html","350db2c8b3f0461e5b623d858ecda73e"],["tags/智能合约/index.html","2dd531054f449a4c2ac5df68a9498f55"],["tags/标签/index.html","0527bc0c2854b7985e94735a604bec82"],["tags/模板语法/index.html","19909d45ba934f266bd534e434ef86df"],["tags/比特币/index.html","bd002ed0462a0ee1204145097433fdef"],["tags/波浪字符/index.html","f64770a25ce781bb1a4781d3bf179af6"],["tags/用法/index.html","cb39a18adc1c9ca64e07805e20045965"],["tags/笔记/index.html","f5fac122388b2642cd4779f21a78a594"],["tags/符号/index.html","6dbde94ed2a07871ff2d48f52ac75aa0"],["tags/组件基础/index.html","04a36dfea32f7ae055bf1b80228bd57c"],["tags/绑定/index.html","627a4a9dd88e5150a58f95b07c414f3f"],["tags/编程/index.html","eea6636dbeac283e6db4fbfee41abb3f"],["tags/聚合/index.html","78c679bd5543392eac5cb5e2d219b53b"],["tags/自定义指令/index.html","2b0afe03350b82e0e6572028df5a881e"],["tags/计算属性/index.html","1c0b97df806467e8df0b54cdd653cfb6"],["tags/远程仓库地址/index.html","0968343a68116f50642052c6e31976e2"],["tags/逻辑操作符/index.html","18165f245fdb65598ee29e3be2afec86"],["tags/部署/index.html","be6843f05d3e54b776e3b66697409e50"],["tags/难度/index.html","fbba6df49af0389cca61459a3a6a18fc"],["tags/集合/index.html","2115c99e308e66fbcc234ee551dab1d6"],["tags/集成/index.html","ad4a8228b1581ccf5b880006663d94a2"],["thinking_in_programmer_life/full-stack-programmer.html","12dcecacef91f513844970438c769a01"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







