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

var precacheConfig = [["about/index.html","7831c7369cc4cc7fd98083074df56f99"],["archives/2018/06/index.html","925abd960314a8ced1ca12dc87b1d594"],["archives/2018/07/index.html","3bb3b45bafd4460164c0b60ebd29f953"],["archives/2018/08/index.html","ba9bce565ee9033c0b502cb6d246b2ab"],["archives/2018/09/index.html","300bdb69d5236799dba318478c506b2b"],["archives/2018/10/index.html","8f777952a0a023cc99c91ee35e443d5a"],["archives/2018/11/index.html","90dab834b0181caef5ba41044a9cc92e"],["archives/2018/12/index.html","d880924bd9d8377aa69092d5f960503e"],["archives/2018/index.html","b8809dea842f6b8119085630d6133d4e"],["archives/2018/page/2/index.html","182c56abf0d1eb3d99f3f10605f3fec1"],["archives/index.html","76fa8c0b397bfcc2c9e1714e81848aa2"],["archives/page/2/index.html","aa97e6e94985ff04a32c98dd960b3184"],["atom/index.html","e09b3ddbb450e75e3e983268a179c8b0"],["blockchain/base64-base58.html","d357926fc3036be2ff086df521a2e518"],["blockchain/bitcoin-data-storage.html","d844e0b38be35ed62fb77317611686ef"],["blockchain/bitcoin-difficulty.html","98dd053381503df2468e737cce752a83"],["blockchain/block-chain-ethereum-contract-program.html","5c23a8a41071dd810062f9e863d57ebd"],["blockchain/ethereum-programming-introduction.html","ed48981bfad9ffc09ad9b4481f8f4e19"],["blockchain/ethereum-rationale-introduction.html","5543846e12b28cd2d79835e7663557c4"],["books/index.html","99efb9e8ef1ea9928791e7ecbdb6625d"],["categories/Blockchain/index.html","33f76d862c4591182ebe72da7480f11c"],["categories/Blockchain/以太坊/index.html","4f30b18d657ec18f969e026d8c943088"],["categories/Blockchain/以太坊/智能合约/index.html","37d6c21ae52b33acbf63cd91bfec380e"],["categories/CSS/index.html","88828b6d35650149bc2484947f3c3e25"],["categories/Git/index.html","898e1aabb98a47c5cef5403a602c288b"],["categories/Java/index.html","64ae558e4861dd9fe82a0723835011ad"],["categories/JavaScript/NPM/index.html","2448144aea3e2915f15390a670d23879"],["categories/JavaScript/Vue/index.html","5cc05c8204ae5cb84032ce9bac99634c"],["categories/JavaScript/index.html","6c33240412a993593c55a592b950c840"],["categories/Linux/Shell/index.html","0df71398e50b0fd7d816b2634878200d"],["categories/Linux/Ubuntu/index.html","ad13568005cdec4176a1cc435a6ef2a3"],["categories/Linux/index.html","5c4a73baa020d73ed32f1fcfa836ecdd"],["categories/MongoDB/index.html","80b1f7af9f17ab1f2e00bc09c520aabc"],["categories/MySQL/index.html","b305df7fbcf899229ee5a3e2489a759f"],["categories/Python/index.html","7ac4f705f0ed5016122ebc632ceb8d8c"],["categories/iOS/index.html","17c39b315ce9a0ccdc4722d5581ebaf8"],["categories/index.html","3df12a6a889f719b3aa32a58b36ed6f8"],["categories/微信/index.html","f9870365df16181a48cfabc6afe9c11c"],["categories/杂记/index.html","833a09c5e86168c510ab5197d5bd0c31"],["categories/程序人生/index.html","0f1726bf3a9ad7dcd4261a3ea1b68a8b"],["categories/计划/index.html","f395f74a1c78c169091c559bb7f7f5fd"],["css/css-normal-flow.html","09b3065977c1b0ff8f3793dd05a2e608"],["css/css-sass-introduction.html","22da9125b9558a4870d3fc28f26f62f8"],["css/main.css","546de4cc4366c2bab388c5b0347acb1f"],["drafts/configure-multiple-vue-project-with-nginx.html","e0c884388d71a3c8e64ec7861fb30c4c"],["drafts/iframe.html","a21c84343613fa8e1fe1f87b841dae07"],["drafts/record-re-install-mac-os-10-12-6.html","1c0ebe85e23433146b224bdf14788609"],["essay/note-ximurong-tree.html","56461da8650bfc8b00c556ba99411b61"],["git/git-DETACHED-HEAD.html","cfc9ed77a7d89909ce60f3a32347da37"],["git/git-branch.html","c52bd4175b403d8f2ec9876b379b6ebe"],["git/git-change-server-password.html","a31e5b01d9d76a7408b1946ef8ae5b7f"],["git/git-checkout-1.html","996b5fa25e7b97379349b3a314422551"],["git/git-checkout-2.html","ebea36710bd996cc34f92764a6e5dafd"],["git/git-diff-m-symbol.html","d720993ca9f34c2e1ad8d8dde91de92f"],["git/git-git-flow.html","4be576645e6512aa16c2bf4bff5ebc52"],["git/git-git-merge-ff-no-ff.html","0786321f70f7533eee67372d15cd2038"],["git/git-git-merge-true-merge.html","4a1f7a343c8f13a393d3a09507508ed5"],["git/git-merge-choose-one-side-code.html","544f395781bdf24a27e831ca23e9ca93"],["git/git-merge-exist-conflict.html","742dab400b723cf396dec5a020ad0f66"],["git/git-pull-1.html","35d2a9545eef545e9c3cbdf677b78b67"],["git/git-reflog.html","02046526971f4bdd1462fd8d8322d0e6"],["git/git-remote-set-url.html","0938ffd89df082ed05296f9709e79584"],["git/git-reset.html","7829a60b6ff6a3be8fdc9fc1b6421cb7"],["git/git-revert.html","b180d7ce6c01dd6426c0c69b44891d34"],["git/git-tag.html","6da6efae7d94870ed80fc89de3feee07"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","57f816afb1312449ca910f59ff020fa0"],["ios/ios-oc-kvc-1.html","0daccd6351fcb5ceb280f38df3db7f39"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","9e3c4ae69b3a6576851b9b425c6a10dd"],["java/java-deploy-resource-folder.html","cc0d195109ce9f6e81ca0d3c3ab7942b"],["java/java-shiro-note-2.html","5a647fec736b1df70bf48a854d20d244"],["java/java-shiro-note.html","353c633bcc66c5f0941e14b7092ffaf9"],["java/java-spring-autowired.html","661801fdfa453f2fc37b0ca6bea1baf0"],["java/java-springmvc-X-Frame-Options.html","fb3063c6b1cc010924d1f3730a287ce5"],["java/java-synchronized-note.html","d2c421f19e6989f9d3459a6a3281f36b"],["java/url-rewrite.html","2d5d9208dae61502ab006a2df3b03a0e"],["js/js-logical-operator.html","acec377264ccf4c1e153d8b4e8b3b669"],["js/js-npm-symbol-caret.html","1c8b6b62351aea095f2bded33c300a51"],["js/js-npm-symbol-tilde.html","a2b8a7f318c884ec26af69b754f93716"],["js/js-this.html","2a51f8f7ad97672fbbfe08ed60dd1d39"],["js/js-vue-note-components.html","d5865bbf218391d1960aab4184951849"],["js/js-vue-note-computed.html","33e092478bb7c9338e9108e46cf1e4de"],["js/js-vue-note-css-style-binding.html","81a0f2a93d1ea6be931e879fd1855afb"],["js/js-vue-note-directive.html","ad955faf42a9ed8a39fb3dd9c1a223c9"],["js/js-vue-note-instance.html","d50bed28b26b911e9cea583d108481fe"],["js/js-vue-note-introduction.html","5477a94ba0b0ce789b5aaa830cc00b44"],["js/js-vue-note-syntax.html","fb2c5caef10fccae8e0e93a8f3c3cf2c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","9b8072cef37b71b9e299611ed29b1a32"],["linux/shell-command-df.html","a705c600f8d3be64722e99f0d4430ed0"],["linux/shell-command-du.html","aee7bc9b2590e22e8c24b38e07768f5e"],["linux/shell-command-netstat.html","c94b5b8bd2678c5c6826f8746b55271f"],["linux/shell-command-sed.html","02b39a85c7813be50f81c68eb59e1e4f"],["linux/shell-command-tar.html","0a5c487b039f410b248cc133588f5898"],["linux/shell-command-top.html","d5d6ce0c2a9074057986b1550d87c243"],["linux/shell-command-touch.html","553962c40bb9df8199a1449156a9281e"],["linux/shell-command-which.html","56935def67ad598031423fc4004d3327"],["linux/ubuntu-user-add-delete.html","a43bb88c28e09d9a024fa5bb8eb89c3a"],["mongodb/mongodb-collection-aggregation-introduction.html","d1324c50cf05d050c4854c5ec14b80f7"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","52527cddb81a34f3c0a04b294a978b10"],["mongodb/mongodb-collection-create.html","8e3308d77694f4d9a335ee9795866c85"],["mongodb/mongodb-collection-delete.html","96bafc6233dd6ddd4c8122e49959922c"],["mongodb/mongodb-collection-find-1.html","eaf7f695c9059f118ea8cd6c908552c9"],["mongodb/mongodb-collection-find-projection-operator.html","bd7b4bba3f839330ca77f5e9848195c1"],["mongodb/mongodb-collection-insert-1.html","965fc55633ed56abce53c1ce976b18ef"],["mongodb/mongodb-database-create.html","f00f3b8e63fa9a385d731d606ec8490b"],["mongodb/mongodb-schema-design-note.html","6f9afd7a573979f69a9f807c86e8270d"],["mongodb/mongodb-study-note-1.html","f396dd7610e857f79079b8d033734899"],["mongodb/mongodb-study-note-2.html","63522f38f335236ebd91e003469bc714"],["mongodb/mongodb-study-note-3.html","c89e6668f6dcc74336d33e273a54181e"],["mysql/mysql-ddl-handy-book.html","0103b1ae148ff7580a30122408f7ed1d"],["page/2/index.html","7c53966ad8d24bd7b3b72ca285c4a5c0"],["page/3/index.html","58add75336e032c6273255b145895537"],["page/4/index.html","61a175e5cb8c4ba72cc3a01fbb612949"],["photos/index.html","77bde6a94e7bce9ddd9fab6329394ea5"],["python/upgrade-python-under-ubuntu1604.html","77f78ba07c4df7975455f088f2f74004"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","35b27920ebc6aa7ce6622dc0dd9d9f43"],["slides/index.html","3c5b66b6e1b7326e118d00e2150a1465"],["tags/Autowired/index.html","55a2454442e92a3747cf8a9f1c6fed20"],["tags/Base48/index.html","15a3f09791970cdbbc54d768f026af3a"],["tags/CSS/index.html","455a8f29bd79803741bf2807e373b977"],["tags/DETACHED-HEAD/index.html","f4491d3785d04bc216b403c7ddf6e6cf"],["tags/Git-Flow/index.html","4e74591444e620d1d096678aef5950df"],["tags/Git/index.html","baf1eca54fa0aa1bd6298f2d65790c78"],["tags/JS/index.html","49b8d1c845289c0838fb8c91a36a68c3"],["tags/Java/index.html","6075ef18b5b8fe2d275e62c9a9af8e46"],["tags/JavaScript/index.html","d320bb8011537dfea623ebd56512c65d"],["tags/KVC/index.html","fbf89e51ebca0c4b7b6869e3070c11df"],["tags/Linux/index.html","c280a55bbcaa3828d7c36a2ff7cfffc6"],["tags/M/index.html","cf55de8a908d50da409eafabab9ce056"],["tags/MongoDB/index.html","851ddf0a6c6105d00032685c00fa848e"],["tags/MySQL/index.html","f3faef771d73cbdf2761a0a87ead5224"],["tags/NAT/index.html","c32463a19cdd834b4c4aaf97f817e934"],["tags/NPM/index.html","dcd01d261cd96b5a86460d3b19fa5811"],["tags/OC/index.html","827c201a726e3fe00888a0fc4830e8bd"],["tags/Python/index.html","a97c42bb1abeae6f468fe6f1fbffcf10"],["tags/ReactiveCocoa/index.html","9d4f9391be73b07e001005da7249a685"],["tags/ReactiveObjC/index.html","332bcd4998a10713c4a7b98d2982e117"],["tags/Repository-not-found/index.html","9f5296efe3f74130d0f9666bddd56264"],["tags/SASS/index.html","eb78024febe8142084ece14531418cd9"],["tags/SprintMVC/index.html","0535a863273c4d1170b57a202df5adc1"],["tags/Style/index.html","5f4c96e308adf0fa076f829314eb1426"],["tags/Ubuntu16-04/index.html","ef6636199794571147701112d4ffe3a2"],["tags/Vue/index.html","7390ec13784af3e0610f0b1ddc861534"],["tags/X-Frame-Options/index.html","be4a7b92255a428a84677f20ce07b9b7"],["tags/aggregate/index.html","470b66ee69f98f2739ba7fc98da8145d"],["tags/alter/index.html","c0741ea5171d24c92281dc53e95a4614"],["tags/change/index.html","e230e12a15ea746b641b2399317cf32d"],["tags/checkout/index.html","ef1a5cc77ab5c0c8705f85109549c8cd"],["tags/collection/index.html","708d58eb259b7aaa2435c522eaa0913d"],["tags/component/index.html","15e09be0a568eef84de6be844efa931c"],["tags/computed/index.html","ad2e764a81645895b6dbb1f69a8fe136"],["tags/create/index.html","67b32bf3b6e7492e197c8255a22730bb"],["tags/database/index.html","7d433acea94cc25070ce5e0c238851f9"],["tags/df/index.html","b3298f548297441d7448638334c7eca2"],["tags/diff/index.html","6eb8d6b8fb056b713d370a24c95e5357"],["tags/du/index.html","8a1878955f07ba7285f24527827f7a2c"],["tags/fast-forward/index.html","77b99812f3670a28001ae8a4496ec77d"],["tags/ff/index.html","3f528f4ac7c81b0c24627fd2632e584d"],["tags/git-branch/index.html","5150f9ac207080921b9b1aa7768c949d"],["tags/git-merge/index.html","854a188b4ed9c9dc1cb0c4cb2c447ac6"],["tags/git-pull/index.html","9cbeab00b1c137d1e9c9b8b4b17d617e"],["tags/git-reflog/index.html","bbfad821a532e31b444fdadffb5d3dc0"],["tags/git-reset/index.html","c9610946f3cde426b2ba60450660a34f"],["tags/git-revert/index.html","1fba3669edd07520d6491d47cada6497"],["tags/git-tag/index.html","2fef2d2e420d8318aac12b871758a95c"],["tags/index.html","960329c9586aab90844baf440172860a"],["tags/modify/index.html","23a5c3c372bd244024e7c56220b77845"],["tags/no-ff/index.html","da0cdb61ca6387f1d87ab247898dcbb0"],["tags/rewrite/index.html","b654d7269a97b0efbd99266df333baeb"],["tags/schema/index.html","57371a6b20fd77498eb2d0d478db7cad"],["tags/shell/index.html","ee31258c643afacf9b971a76061e33b7"],["tags/shiro/index.html","5772b7f3964400f04ea07511e97f8051"],["tags/synchronized/index.html","d5d04bee9684ac460f87730512660806"],["tags/this/index.html","db180f1e89b0e878ed1529fa896968c4"],["tags/tomcat/index.html","4670f0998ad24b95883f387ff3c6b71f"],["tags/true-merge/index.html","c5869d2f31fb95537fad7225139bb748"],["tags/url/index.html","b974c2dca4d62a6913dae9d34ff3c651"],["tags/windows/index.html","221d21c5c497b2c448e0864d186d2898"],["tags/一棵开花的树/index.html","0435d5ab5db102abdef294ce85e94785"],["tags/介绍/index.html","0db4d0834a814993465d13be3f8db2b0"],["tags/以太坊/index.html","c12af8988e63fcb661f683ea57e5c367"],["tags/依赖包/index.html","f4a71e5e76e21716db16153a7be68986"],["tags/修改/index.html","430f4a3ecf8b5185a1e7547b9c6a2a46"],["tags/冲突/index.html","b1d12cca63bac5aa1571693c68cc7e54"],["tags/分支/index.html","e9b14a9864fc212b850b1de93f0b95ed"],["tags/创建/index.html","e6cf491314394262745a10c292a51fa9"],["tags/创建数据库/index.html","8f6c93dc911861479450970da8ef20e1"],["tags/区块链/index.html","7f75b008ccee0e796318b08088c847b1"],["tags/升级/index.html","3c9dc6e298cc61b0dd8a35c93d07e407"],["tags/存在/index.html","82ed971abe3c6bd14301de004e8ad6ee"],["tags/学习笔记/index.html","5cfd626d69aa98368a39835b4cedec78"],["tags/实例/index.html","4928fa7c7ac95711c37e62d5be9841ce"],["tags/工作流/index.html","f3275b0bb441c2b89e76081ec944a8d8"],["tags/席慕蓉/index.html","25e0710cfb471ae8e9f05a2d9c8c8059"],["tags/微信/index.html","73ae6d7284ac12523c021805f8c90711"],["tags/插入/index.html","e06575ede3bd7d31a8510c1790381f2f"],["tags/数据存储/index.html","154d7690540cc012a6e30093d06ac6bc"],["tags/数据库/index.html","ac3dd1fdb840c8d1839ed4798fe92421"],["tags/数据集合/index.html","bb7fb21553f06d773479ab87890c7756"],["tags/文档/index.html","6950a5df2e7515d536f6614681d88bbd"],["tags/文档流/index.html","ee0c079c8a44447121764f58aadf249b"],["tags/智能合约/index.html","64b2c4f1266ab263da10f8ada4903a8a"],["tags/标签/index.html","13a67b64494ab03cab1404d5509fac08"],["tags/模板语法/index.html","7c8352dd8c24b63107fdd381b4e7a2b0"],["tags/比特币/index.html","c61173738fcd997bd3b3f57d4789eae0"],["tags/波浪字符/index.html","07e5e9698c20c317598891f2309f5a5b"],["tags/用法/index.html","b0d631788a4a69f1efe0babc580ddb35"],["tags/穿透/index.html","790666dc500bd237464bb8fb9820f815"],["tags/笔记/index.html","ee8be16a60bf5082b62896efb10fd057"],["tags/符号/index.html","271afd8d7d31a14d8e28f76fb5a7af88"],["tags/组件基础/index.html","fdd45851f1c51bc74425e94946847fd6"],["tags/绑定/index.html","ae5400e68e827a5000f967eafea0a129"],["tags/编程/index.html","a031b5733949f7f93705f33f0ceaedef"],["tags/聚合/index.html","40a7b567689aafd1423e51ea68d49e72"],["tags/自定义指令/index.html","40de91851f43d567117f54bcd7e57b66"],["tags/计算属性/index.html","ac622432ef1972649d776d54e8e35618"],["tags/远程仓库地址/index.html","51a41d800087cc48d5f2541bc33404b5"],["tags/逻辑操作符/index.html","8960e2627a8d21deac85c05177a3ccbd"],["tags/部署/index.html","246a013f714da55628946eb8c60d02be"],["tags/难度/index.html","a010e36b2609b98aa7326eb19abeef0a"],["tags/集合/index.html","4723355537e4b827e74b467fd43573fe"],["tags/集成/index.html","9628cd2bf3f1f904e3c69f16e8d1a286"],["thinking_in_programmer_life/full-stack-programmer.html","36d94b39939ec0b964b887a2f365ad40"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","a7e65fc8fa80e1ccc7270211e427c9c5"]];
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







