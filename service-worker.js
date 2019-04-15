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

var precacheConfig = [["Kafka/kafka-introduction-note.html","e7b7cbe3f4a66d061b17b71b1061b2e6"],["about/index.html","fd07e8de19a28e8d958fbeb18ff4cf34"],["archives/2018/06/index.html","0d34e6f09d50a822a3e5f7623b15f946"],["archives/2018/07/index.html","d7695fd9003e456fbde2753852069693"],["archives/2018/08/index.html","b495f0465f8e68b73930cfaa26735a56"],["archives/2018/09/index.html","848b6fa08771d58e045c5a30a80ae79a"],["archives/2018/10/index.html","a2b0c2acdc29c50fc62034eafc4a8aa0"],["archives/2018/11/index.html","04f2847904e0156cc2244d52b9dff8a7"],["archives/2018/12/index.html","e30d823fde9ad346e5397e4bebd94ac1"],["archives/2018/index.html","166f991f02598a496e298482d58eae25"],["archives/2018/page/2/index.html","d864951e7c2df20178f29a1deea56f7e"],["archives/2019/01/index.html","84659d8f46686c3348e3f64ccc8c1773"],["archives/2019/02/index.html","5f30d0fd672052e84fc737df75a44715"],["archives/2019/04/index.html","7e98e83bd4fe48692fc003466cfd661b"],["archives/2019/index.html","0401f084b3863dce52f6a581a6bdefbe"],["archives/index.html","621b32bb2b1c6588d04f6c92b973dedd"],["archives/page/2/index.html","0df2f1a1730f461375c7fc685dd21e4b"],["atom/index.html","cc96b9c113ad520479ca5da785255ab1"],["blockchain/base64-base58.html","42c213cae5b5ae4556e67472226a68e4"],["blockchain/bitcoin-data-storage.html","731bc3533bf18cb98f0ccbb5a2bbb68e"],["blockchain/bitcoin-difficulty.html","ade67c115e7e934ca124e73cd2585e7d"],["blockchain/block-chain-ethereum-contract-program.html","15da60be0187a00e4c09d3755bb8a87a"],["blockchain/ethereum-programming-introduction.html","72e4deea04fa0f8456e2d958d688bdbc"],["blockchain/ethereum-rationale-introduction.html","dc12afea3e903553ba3ab710618ec686"],["books/index.html","5080b2571d44631f2908a921bab6a961"],["categories/Blockchain/index.html","ec4866b1ef9ddefd8e61e0adf0e693a0"],["categories/Blockchain/以太坊/index.html","4df6095918fdcd6b9560bb0cb9c86b39"],["categories/Blockchain/以太坊/智能合约/index.html","1ec17a21b68174d656e38659ea52f8dc"],["categories/CSS/index.html","a91e3eff48a58496a0dfe3d38d0009f3"],["categories/Git/index.html","befb31e9ba9a72e31de76e9911b02bb8"],["categories/Java/index.html","9143a0290f0fec334db7b798027a27fd"],["categories/JavaScript/NPM/index.html","092b9a6f9bfb501935e3dcf31381f75f"],["categories/JavaScript/Vue/index.html","fde4bce66e99005579243cce326d50d7"],["categories/JavaScript/index.html","2b986a2231ca642881930f12501c6b23"],["categories/Kafka/index.html","21bc118399a56b1fa7c21bf8c6fc8177"],["categories/Linux/Shell/index.html","1f5478f052d62d0676edda206c8e3ea4"],["categories/Linux/Ubuntu/index.html","fe570ce00dd29c1e8cbd57b03abf39fc"],["categories/Linux/index.html","41d842a316bf7d10883eaa5e3c63004d"],["categories/MongoDB/index.html","0a7963cfed5da1453f65b8ea6030792a"],["categories/MySQL/index.html","cd06a43b56ee0465d214a6d6d1ea6701"],["categories/Python/index.html","cbaeff21fb25ebe009f6ae09f10d9a0b"],["categories/iOS/index.html","d34bd70d75a644481b9a57f2d24840f8"],["categories/index.html","880330eecd2099891f4e7c6b755d4d48"],["categories/微信/index.html","a81bdd8c6da0389d6aa2cf94efb80e6b"],["categories/杂记/index.html","4d0a4eae7b67139b86ca605ca132ce77"],["categories/程序人生/index.html","7d2804506616e7ae0fbe501398626514"],["categories/计划/index.html","7158fd79affc2a230bbada4c997d83fc"],["css/css-font-note.html","1a378f8a727ac39a6fa5df71fa8c9284"],["css/css-normal-flow.html","8303591a482daaf39230577d42d37001"],["css/css-sass-introduction.html","3ea85407396a64adc67a6fd0f24d7023"],["css/main.css","011926b4bf2269ab9bff5001e93b04ed"],["drafts/configure-multiple-vue-project-with-nginx.html","84cc8ceb10bb5cb5fe273e95849fb1a9"],["drafts/iframe.html","46862717422754be94f98492fe0b429c"],["drafts/record-re-install-mac-os-10-12-6.html","d4fdd6c47bb4f5adbc92597358a5e086"],["essay/note-ximurong-tree.html","ae1bb85c4763ba0fc2edf94831b9a938"],["git/git-DETACHED-HEAD.html","55439b63a9f60de5d1fdf5dc4171a810"],["git/git-branch.html","11cd1400f04c120eae70dfc7cc54e487"],["git/git-change-server-password.html","4cee09f98935d44adf8492cf38960867"],["git/git-checkout-1.html","7dd630ff0201890c474b2333831df677"],["git/git-checkout-2.html","3c45dd34b0f6d6d55799df0dccada001"],["git/git-diff-m-symbol.html","cc28f0738879188e6e8d61c15932cc79"],["git/git-git-flow.html","29efa30cab2251d351a8f36538ad641e"],["git/git-git-merge-ff-no-ff.html","263e7be97e7ba5497b9298a2f7461487"],["git/git-git-merge-true-merge.html","498a39bfd98909fcab577c684650c5ca"],["git/git-index.html","5a8dbe2c4c9c21aebd2cb8417b2f1751"],["git/git-merge-choose-one-side-code.html","db4c099c51a0d371eeff132e7f204086"],["git/git-merge-exist-conflict.html","dce155b251b376a5d83623290e9bb817"],["git/git-pull-1.html","cb9665392c05e0f7a7f6ef0874c2a8d5"],["git/git-reflog.html","7dfedc73d2a077fb74de965fd0fb60ec"],["git/git-remote-set-url.html","2b7969c5cf2c6ebc32b07ed2fca66b28"],["git/git-reset.html","b755662e76eb2ace184cbbaf22d84b82"],["git/git-revert.html","a78e927e9574bf2825f015b1ac151c56"],["git/git-tag.html","e451b2c737f705f22b6090f4c9980fc0"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","1386621a985cad7b82a43eb7b004ca57"],["ios/ios-oc-kvc-1.html","e232675ea7f64915a4d1a04daa14e6b7"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","dd693b3ff0c4de0ef5cad6f14e7e4387"],["java/java-deploy-resource-folder.html","acd5c4a94dd10be69a38159f0ff42788"],["java/java-jps-note.html","43b7836563780a1e81d8507d01b4d7a8"],["java/java-pojo-bean-note.html","d02a11cd231ab475624e2ca869bb7c95"],["java/java-shiro-note.html","1046ae0d6e21dc9d50b3060763f2183a"],["java/java-spring-autowired.html","3ac51483764016834ab38d9781ef3066"],["java/java-spring-configuration-bean.html","f8137aa4f6b039de8cf28c9005d1055c"],["java/java-spring-restcontroller-note.html","03cc5b682555f8a09831c245e2920aa3"],["java/java-springmvc-X-Frame-Options.html","5b00141b2a36659e4c6e2608714f9e70"],["java/java-synchronized-note.html","16a7358b90281c12efb51b24949c2c1c"],["java/url-rewrite.html","2176f91d9cf62ae8c717bedcc819a312"],["java/url-value-pass.html","6e7de971d3ac34e7dfea7ece19265b03"],["js/js-logical-operator.html","e01b9ad19a9d7fb2410f4cb564142389"],["js/js-npm-symbol-caret.html","e619787f87ee087253b91b57045e5951"],["js/js-npm-symbol-tilde.html","e373452427723112b8457fcaa71cfc75"],["js/js-this.html","13e7c1f2899196cc8abec772223566f6"],["js/js-vue-note-components.html","65e9cad918e6a750b9b1ebdfa79c6a52"],["js/js-vue-note-computed.html","f4254cfb1733668f96e3c7a388d0a59b"],["js/js-vue-note-css-style-binding.html","f4adbe3ab5d36c2bfad391f0b5f4ff10"],["js/js-vue-note-directive.html","12f950df68a543a7f3bd8186c43ab670"],["js/js-vue-note-instance.html","465c5b886b5bfd0ce2025c92760c8356"],["js/js-vue-note-introduction.html","da817178b465c1e9a8a7e0535cdec85c"],["js/js-vue-note-syntax.html","de1d37aeb06aa27d6e1b7fce645c53e0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","1a55282db2fbd4e8b1838746b1a940ea"],["linux/shell-command-df.html","f90b8d83017641ece1b94a445bd49592"],["linux/shell-command-du.html","a3f5419ee611674731e8c6531a171f1f"],["linux/shell-command-netstat.html","e2485a366aa8a0e5d36d8d60179f83fd"],["linux/shell-command-sed.html","1dbf009d510329c4f52452647772e33d"],["linux/shell-command-tar.html","0bb46f915897ae62ab86fd1de4fe1d5d"],["linux/shell-command-top.html","e733e87e5713296829cdf54623105da2"],["linux/shell-command-touch.html","43e0f391e0f1e4913e1e875f58c3dedf"],["linux/shell-command-which.html","acd25573b2e17317e8ab1fcd8e36d240"],["linux/ubuntu-user-add-delete.html","1bd4edaa50db9c3d0055261de72948ef"],["mongodb/mongodb-collection-aggregation-introduction.html","e682cfafce6dfdc729f13f7a081e2443"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","e9f9ed2267852767b2075dc37f848a7d"],["mongodb/mongodb-collection-create.html","d99b1d5e31cbb68b2fdf0fc78ba58ef1"],["mongodb/mongodb-collection-delete.html","9747f57be798a52133ddab10ced19faa"],["mongodb/mongodb-collection-find-1.html","9a8d64cd068481cecc2d00e3c5ac7c51"],["mongodb/mongodb-collection-find-projection-operator.html","0eea17e119803f9a43dc063a519d465a"],["mongodb/mongodb-collection-insert-1.html","e2e1a61732eb2ead5d7cbc7b184e1a96"],["mongodb/mongodb-database-create.html","cea2d28c1baaba79c93248ecbd80b478"],["mongodb/mongodb-java-driver.html","b67409c7cf0e2ad24dd8914fa4dccfcb"],["mongodb/mongodb-schema-design-note.html","a4c66fd7e59f6b79736a1b2b9c72550c"],["mongodb/mongodb-study-note-1.html","9c8d622e7b91052f54c4f309c3318503"],["mongodb/mongodb-study-note-2.html","802a51968c2233d558c56e6c93d34c2d"],["mongodb/mongodb-study-note-3.html","6fea4239ce5da7ce13f630c0494bf557"],["mysql/mysql-ddl-handy-book.html","13284d9bf60604439afce6e3816c612b"],["page/2/index.html","bf66bc5c2dde0145b9f53d31951c361e"],["page/3/index.html","c3100b083ac2ce320e82ad4028ed830f"],["page/4/index.html","27c72d5116e059f410ceb542f1ddc98d"],["page/5/index.html","e865ecd917872e80500a1891615ef941"],["photos/index.html","14653758425be1840ca2aa5e488c2b2a"],["python/upgrade-python-under-ubuntu1604.html","1582257a94354f245e36aabb9df0e9b9"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","a60999d65bca3fbef2fe2128aa73613b"],["slides/index.html","e6aa4e7439820bfa75c51f40254e9fe9"],["tags/Autowired/index.html","cf6b5e26402caa78a837be422cad239b"],["tags/Base48/index.html","8ea4e32c37899045a9cdb27934efd35b"],["tags/Beans/index.html","1ad00cfa25054688b3b61babd326da41"],["tags/CSS/index.html","c7ea44c6072f3e0e01b1d8b49bc02c9b"],["tags/DETACHED-HEAD/index.html","f7b5f4f4819869a6a6fb32f1c338884c"],["tags/Git-Flow/index.html","8817ab36e1bc32271683ff7f6b0ca7cb"],["tags/Git/index.html","9b95efa97ceb1577a7b2f3a1739eaae8"],["tags/JS/index.html","ea85bf7fd2226df1fa7a8e4fd52880eb"],["tags/Java/index.html","2bbff583e6c7aeaef4c6d7d8ce0c0eb4"],["tags/JavaScript/index.html","d831d0470e51d3d934ff9244cf4aa311"],["tags/KVC/index.html","8a7ab43c67d1ff63f5cc035144459f59"],["tags/Kafka/index.html","d84d8f6f68aad4dcef932a3976533f20"],["tags/Linux/index.html","1176a20ce7e0decba470ba5d02dd92be"],["tags/M/index.html","0217cde615771b857a76267963ab8af7"],["tags/MongoDB/index.html","99be285f9a8072651a70304794e159fc"],["tags/MySQL/index.html","020e6fa954b1dcab07790300700bea60"],["tags/NAT/index.html","e36461658253dc320711e123dbce8656"],["tags/NPM/index.html","6f2ee09db0c3b6df96db64690ac4f207"],["tags/OC/index.html","8ae5278e62522abb47aa85b957f6040a"],["tags/POJO/index.html","33b0fe09c93940190772b6634c1afe0b"],["tags/Python/index.html","df100dabbcfdaa3a0207eb7803f3f16e"],["tags/ReactiveCocoa/index.html","bfdc2dc596f6c031c5ba92383a6da470"],["tags/ReactiveObjC/index.html","da3f599e3c720d5151662ceafbdc0570"],["tags/Repository-not-found/index.html","6e8ac2992084c2f9bc91ce26f535f46c"],["tags/RestControlle/index.html","d48e5c3210f38aa28cbbd4916d1ec95b"],["tags/SASS/index.html","14ed315e664222c3524dc010e51345ba"],["tags/Spring/index.html","1c93bb6957a19ae4b8844b69ac815bd7"],["tags/SprintMVC/index.html","f4b34e5cbec000ed21c7ce559e63ab10"],["tags/Style/index.html","0529950d032a2a3657817d1c38a5e92f"],["tags/Ubuntu16-04/index.html","191b9832d5fcd1775c03a438206bafae"],["tags/Vue/index.html","1bd9e0214954b526e6911258a07b0ae2"],["tags/X-Frame-Options/index.html","1646436c8f72cdcee8b9a2bd1946214a"],["tags/aggregate/index.html","d695acb6388af7131ee22adfbceb3be8"],["tags/alter/index.html","79420a2e1b75c2ff77580095bcae33b1"],["tags/annotation/index.html","d70f59ae300ef209372b51ae88064a28"],["tags/change/index.html","6686ccce619ad4f0a0253b054609bb0f"],["tags/checkout/index.html","727c1b864b4d14609c4303b4bce4554a"],["tags/collection/index.html","ef9f3c8dfbccdd08e2a191d87e34aba3"],["tags/component/index.html","1898b3b1ff4bb74f31af6cab77caa3b5"],["tags/computed/index.html","4b6252dcfbbe2e27f98a79b4c1f8e75b"],["tags/create/index.html","96a1383c18a8ab6ace73810a117e13e0"],["tags/database/index.html","67d6059873cd0008263f3cc2ca0ef787"],["tags/df/index.html","f3a8d85cf1de4c8f15d960b1b3bb18bc"],["tags/diff/index.html","1981a79e404bb7c58adf0ed13165fd2c"],["tags/driver/index.html","456b97216cd5ef05c20406c6ef382eaf"],["tags/du/index.html","b33d971daa7961f508d31a6126493baa"],["tags/fast-forward/index.html","26a2018d1367482257ee330e91292f4b"],["tags/ff/index.html","0f3168cb3f7650a87058b9328234e03c"],["tags/font-size/index.html","574cc659c0db9349bc019744fe1ad04b"],["tags/font/index.html","2227e30d01ebd5f65b2eea7352decb6f"],["tags/git-branch/index.html","7d6373f3f1d32d59dbf93caa2b4d8bef"],["tags/git-index/index.html","2ad3ce83d6725d363e85ceaa63ce4ab4"],["tags/git-merge/index.html","c2324f3cb52b3c6d69142f9e8274849d"],["tags/git-pull/index.html","3a082dfec47995884a6a341faf643723"],["tags/git-reflog/index.html","c29a991c7550cd8950257a954039b7c2"],["tags/git-reset/index.html","979e27d80eb4982777fbf45a7b3f76c0"],["tags/git-revert/index.html","300fdd7fd32093ebb66bedb4f0fbef09"],["tags/git-tag/index.html","a8997d781792e2a0dea1901f30159708"],["tags/index.html","987b46a8b2e9702421d1e59627bf79ee"],["tags/jps/index.html","4e282b2a80947fafa9228f999a583d0c"],["tags/modify/index.html","280cc28f995ec3fc766ec3ec98517132"],["tags/no-ff/index.html","3d730d0c57da4a1ea1b6f04fcbb7aca6"],["tags/rewrite/index.html","c97d0375aa4211dfcef542b0730954e1"],["tags/schema/index.html","42dae6c4e0616e6777751c7e0ef1ccbb"],["tags/shell/index.html","ce8e5a6e4c11f3ddbe2b1fe746725f71"],["tags/shiro/index.html","677b442d99527dfd9249cfbe54d41022"],["tags/synchronized/index.html","bb8358e89e7b9b8cde4ca24ca5bfebc9"],["tags/this/index.html","0eb44e646920f3421ecfad750970d712"],["tags/tomcat/index.html","a45410369832a5e9fd725a5d2b0ab868"],["tags/true-merge/index.html","b1eeaf7ec224a652e8fe202ec6c3279e"],["tags/url/index.html","f67f1e39dc71e3d36de609631c96bedc"],["tags/windows/index.html","5d1a97039814f6480c758bae4577ec7d"],["tags/一棵开花的树/index.html","4f3f85fbed4f9920891a94f9f1284189"],["tags/介绍/index.html","2ebda4604ce976ee0f478d7ff0582d46"],["tags/以太坊/index.html","045d766d1efe3efd079e367974b00d1b"],["tags/依赖包/index.html","384f3877d3254df0db9632faf2320967"],["tags/修改/index.html","2c606400703aacec8a0f7a2d0e2d6104"],["tags/值传递/index.html","f66fa159764d8bb8bf93a3d138f215b1"],["tags/冲突/index.html","3d453a077deffb8b34c69d596b717464"],["tags/分支/index.html","15caf83792419492307bc1232828d60c"],["tags/创建/index.html","631b614f73fe893b7e383c57c7683967"],["tags/创建数据库/index.html","1caca847e7b2c4ee2fb4d80697d4918d"],["tags/区块链/index.html","0ff2fbbf95fd7f5fca5445f76ba56ae2"],["tags/升级/index.html","c056eae8442d03a4e05d14271f7c7dbf"],["tags/存在/index.html","2adbf6ab36e7d4e90ed0567f9fc2bad6"],["tags/学习笔记/index.html","ebd7bd0a3dadbc434eb8c4ff05dffd73"],["tags/实例/index.html","5add1488876bf0f92c56e75531e9a43a"],["tags/工作流/index.html","b1a76f1f58c87cce9bceb30ebf2d692e"],["tags/工具/index.html","ea9b1516f290c5f0d734de95b09156d6"],["tags/席慕蓉/index.html","17508ca781c0022ec63c917a3d262437"],["tags/微信/index.html","143850bb1afc9004b7e1fef266f2644f"],["tags/插入/index.html","53d2b042848d465e631e11687b60c116"],["tags/数据存储/index.html","4af7400a7bfc95a7c247324356449a5c"],["tags/数据库/index.html","6ea2c4675e536f4bffc3879c7675ad6e"],["tags/数据集合/index.html","24b333aba1586367acbf75cb544bfa1d"],["tags/文档/index.html","c25f35242997af1a05ce6db64166cd4c"],["tags/文档流/index.html","fd0dcdc3333470924ebe35c90b212719"],["tags/智能合约/index.html","e7c8821b0045206984e1001d3c741646"],["tags/标签/index.html","f6a65b1c7e212af404bb8a9726b731a3"],["tags/模板语法/index.html","c6b100c6153c1e0679c42296ee4ecea9"],["tags/比特币/index.html","75090ef142a664f893ee0c341a076ab2"],["tags/波浪字符/index.html","0b26a1dd92bda6350b632320428ee869"],["tags/用法/index.html","5b06d0c3e8e36fa192e265aa6f973cb9"],["tags/穿透/index.html","aa843adeed76ed814fad58862b670709"],["tags/笔记/index.html","b5de7cdf606cfcc7c2c84f3c484e0242"],["tags/符号/index.html","08dc5a5427d49b3202376ebd803186d7"],["tags/组件基础/index.html","409199b53adac903e38e04470b1512b4"],["tags/绑定/index.html","f302b7cf6383204b6237e1a6d82f7306"],["tags/编程/index.html","5be5b5bc223bf93a8d3d59c9bbafda86"],["tags/聚合/index.html","371fd606ca4d1b0a736a10fd522d1c4b"],["tags/自定义指令/index.html","cdf037d810929bf9f9d46836a456ec7d"],["tags/计算属性/index.html","659f2c8d5380e2811e15af89324cc834"],["tags/进程/index.html","6ce917afff9e9afabe42c1ac57fa884b"],["tags/远程仓库地址/index.html","91cbb63c40d0d710f2c22a57f1385d58"],["tags/逻辑操作符/index.html","406cb0d1473cb9e33b8e475f1652c0af"],["tags/部署/index.html","92cfc3c101468a4b3e163a05b12ccf3e"],["tags/难度/index.html","87b1bae7899ba40b12a4b8f89a24f20c"],["tags/集合/index.html","0404de8f7c2b247a87dae9a5f6ed8c7d"],["thinking_in_programmer_life/full-stack-programmer.html","f18b047b489229c418beed6fe07c1ded"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","1d425d6f047da335e99a3235e5a9e9d6"]];
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







