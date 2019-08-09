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

var precacheConfig = [["Kafka/kafka-introduction-note.html","dc0177432d9b47d70cd87bbe77d12a43"],["Kafka/kafka-storage-principle.html","bf8ff08712a9c489e17467696246a884"],["about/index.html","05f9da058307126b00d0ed61f9ef8f58"],["archives/2018/06/index.html","c7bb7b0bcb348cc939b4c09eac333f6f"],["archives/2018/07/index.html","eec9a6b31817b9f0bd51d464ae6a8e2b"],["archives/2018/08/index.html","5957247b796791140818d0a2505de11a"],["archives/2018/09/index.html","6961cf37d8da35f95f416c30c244dac9"],["archives/2018/10/index.html","108d7b7485f3eb2bc3daf75f95c4e618"],["archives/2018/11/index.html","55e56c57d0104a9f35934cd578eca9b9"],["archives/2018/12/index.html","b5d531a41d50ffedf754ba96040f3bab"],["archives/2018/index.html","480a1b69aec429e750e4b90eae24e4c2"],["archives/2018/page/2/index.html","ed835e82f8e50c1712a7c301fa6bd70c"],["archives/2019/01/index.html","9712c39c360979d7b6c8e0a598e6f90f"],["archives/2019/02/index.html","785c1737ac6985b08b0ad5d33c83d130"],["archives/2019/04/index.html","c85a929ed5fc95aa28a45dfa559c574b"],["archives/2019/05/index.html","702e5d71930b3ec77261c8e87b955097"],["archives/2019/06/index.html","17efc68a8b1af99d076c434292fb1421"],["archives/2019/07/index.html","142ddec5d83e48931847aea9471c08c4"],["archives/2019/08/index.html","fd73150bf8d02ddfae9ad21ef7d629be"],["archives/2019/index.html","9e332a0e1fd6c4f5bc0197abe06f5db0"],["archives/index.html","b69ed7e2e8acb8d59ccf3fb0cf915156"],["archives/page/2/index.html","3c8aed7f4d1f0cb9ce83d38a0368baa8"],["atom/index.html","bade6dc7a6c0aee3561e24a8995c551c"],["blockchain/base64-base58.html","d3f94d8d3cec3f958fc978c650a2a4cf"],["blockchain/bitcoin-data-storage.html","9da6ae4b9b1dfcd58b26e45674230549"],["blockchain/bitcoin-difficulty.html","77e48f4fb59b9508d512104df4a9dcd9"],["blockchain/block-chain-ethereum-contract-program.html","f169580238260b39ffadaafe19aa4747"],["blockchain/ethereum-programming-introduction.html","37223b4ffcd3d5536feb77aba21b4708"],["blockchain/ethereum-rationale-introduction.html","9c9d90636d4f0cbe18d040851553e7e0"],["books/index.html","30a68aa35ff1262f763adb69ce3eeece"],["categories/Blockchain/index.html","1084814884ea2ae8b3092bcf15ff3a01"],["categories/Blockchain/以太坊/index.html","4430522dee5f4fbb2d97d20b14ae6136"],["categories/Blockchain/以太坊/智能合约/index.html","702c94a246f80569ef57bdb5d3f752d5"],["categories/CSS/index.html","82c326b27142196a214aeda159a18e0f"],["categories/Design-Pattern/index.html","22c7562fcb332fc9db9402fb55acf41e"],["categories/Git/index.html","b3d0644b7fcc0d45d84053435b1c857b"],["categories/Java/index.html","ed8c5d11bb98f754c286c566d8df7710"],["categories/JavaScript/NPM/index.html","180636d2bab988ba37869c69108f72d5"],["categories/JavaScript/Vue/index.html","c024459f3b034fd4aa622eca0e195950"],["categories/JavaScript/index.html","fa0e3ee710102bbcaeb3939c147c0d2b"],["categories/Kafka/index.html","31e4f56d551e60a6c1d9a7b04bf5ea4f"],["categories/Linux/Shell/index.html","6f548fff2081e6b2fed20a0bf3a3e473"],["categories/Linux/Ubuntu/index.html","4c1c033bd6e8ed0874c5e551412e981a"],["categories/Linux/index.html","c7d3a933bed6287618284bcf3342efb8"],["categories/MongoDB/index.html","763fe644ace151dae6e233ac6038b21f"],["categories/MySQL/index.html","6fb02811995d7ef33de450fa80e9df60"],["categories/Python/index.html","b40360b6cea6afa7f7bd625e099c2208"],["categories/iOS/index.html","6051a7eed69bf460433624e20029a6c2"],["categories/index.html","e843a8de70e28b100d1550f2f9ca47c5"],["categories/微信/index.html","54133bba5997a5d660d9f0338e4ef097"],["categories/杂记/index.html","b8cf9c304b968c6c967fa872c6a43628"],["categories/程序人生/index.html","1def92d4c6a55ecad0f43e32efece265"],["categories/计划/index.html","d48789d1491364b8488a5a85c55ca4a4"],["css/css-font-note.html","8d33d70e78ee47e1629caeff4432249d"],["css/css-normal-flow.html","f8342bebfec0f8b399cb6a1abbbcbc66"],["css/css-sass-introduction.html","648e62e53a6050a931d24cc0212e1268"],["css/main.css","2e6644bb028fc74bfa7dbe8ac9469143"],["design-pattern/chain-of-responsibility.html","87c94b40bd718821820292cd4486811f"],["design-pattern/delegate-and-proxy.html","dea9a4a4f79b8fef87e5b5bc8900312d"],["drafts/configure-multiple-vue-project-with-nginx.html","51a9a36cbfde8e7c223d7a418c8fa4f3"],["drafts/iframe.html","8baeca5a197559b7fd0c4d0260e0a1c8"],["drafts/record-re-install-mac-os-10-12-6.html","02f1ec5022b52bb28870523c15f4a8aa"],["essay/note-ximurong-tree.html","619f9e889cf2cdb3435b72c22aac664f"],["git/git-DETACHED-HEAD.html","c1fbdf0cf898d8218a1aefbca2834328"],["git/git-branch.html","8adc6e6de01fad3ce1bee8afb45a0e83"],["git/git-change-server-password.html","1f399f565792f5b771b96ef54583a174"],["git/git-checkout-1.html","2dea1e0552c4383e9c8092e4372f41f5"],["git/git-checkout-2.html","80ceaabb64693c9ade5a90965f0cc0b8"],["git/git-diff-m-symbol.html","240e0d532360d7f5944a93d2ac3c87e0"],["git/git-git-flow.html","63be9b1117150ebe21cb5a94609cce3c"],["git/git-git-merge-ff-no-ff.html","e6d2cc9b7963f39fc575954b4e5209e2"],["git/git-git-merge-true-merge.html","dec64f3a0757071b2b97fdcf621444fa"],["git/git-gitlab-flow.html","03e13b3e17b893b85cf0abe35b808868"],["git/git-index.html","ba9dcd4ac3e14560ee5bf5d4119df8b8"],["git/git-merge-choose-one-side-code.html","168368fe5e4eb6ebb04dbfd0f577297a"],["git/git-merge-exist-conflict.html","7578db84a524cb7458533e4840c5d8cf"],["git/git-pull-1.html","fe287be0fdb51c16cd5c6c6154cb5246"],["git/git-reflog.html","852ddd12e33010c9e99caec65a8b00f8"],["git/git-remote-set-url.html","fec5c8a61376f8bccc5d16a3484148ee"],["git/git-reset.html","c4cfbb46d5810e284c4453ca93e3d905"],["git/git-rev-parse.html","5a7f9a47ea7ada278cf75492e4dd787f"],["git/git-revert.html","3b6f51d0c60ce2a6862cdf21b8ac11bb"],["git/git-tag.html","cab397251fba4911aa41cadd02f5dafe"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","03363d7fa67e76a9de4963a17066beec"],["ios/ios-oc-kvc-1.html","6ceaaf4a9e8c6513e45d099446a86aa1"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","f2304ae344c15062489773e50b99a857"],["ios/ios-themes.html","fb7117335f32ccc1c3b52401f3f08ab6"],["java/java-annotation-request-response.html","0a15715d2d294e96757e61c05b810649"],["java/java-array-and-container-note.html","8aab5ca4c3e1557b164b71a266477281"],["java/java-deploy-resource-folder.html","788407b19b108d6f0dd0b61a04d2dc9f"],["java/java-jps-note.html","8bdb9c0aee72198cfeaa17e932516bc5"],["java/java-pojo-bean-note.html","b1597f9fd0fea9943b892975b42906e7"],["java/java-shiro-note.html","264accb84a487ad91b5c5a85d6d82dfb"],["java/java-shiro-springmvc-integration.html","590ddbcba2c2fb426ed6fef1ee5ead90"],["java/java-spring-autowired.html","9b25531690070373258e7039b4f67c35"],["java/java-spring-configuration-bean.html","1933b4448804391e9f0078374c2f08ac"],["java/java-spring-restcontroller-note.html","4a80c731014b902acfb3034e2b4dabc3"],["java/java-springmvc-X-Frame-Options.html","7db8294b70d20ae24fcb8b09cc16abfc"],["java/java-synchronized-note.html","f5fc8e56fa8a822e6b3149590068098e"],["java/url-rewrite.html","199559108b05d2cf9dc632f6103b0d22"],["java/url-value-pass.html","a602b2f3126bb53d4aaea3d8ebb569a0"],["js/js-logical-operator.html","77c5c8f63d9fe5c8210166c0b06b87c4"],["js/js-npm-symbol-caret.html","5c8fc664e501d1b26015343072f8fd03"],["js/js-npm-symbol-tilde.html","7a7a83b85052febc164e8cd136cdab37"],["js/js-this.html","b81c4536a7cad8696a518da6c5d35657"],["js/js-vue-note-components.html","b8c83dc10316fb298066755897f5b188"],["js/js-vue-note-computed.html","9645020731682f5bdf96d5009e32927c"],["js/js-vue-note-css-style-binding.html","8e825f9646d004e178b3fa82751a2069"],["js/js-vue-note-directive.html","89c32f555af3e1194b2cc8dced4ce0d2"],["js/js-vue-note-instance.html","8942c0d5bb4069c174d72581d793cde8"],["js/js-vue-note-introduction.html","c8ef73753210bf59d2577aefd1489453"],["js/js-vue-note-syntax.html","119c223a43dd894b625a3fd20bb277e0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/mac-find-port-occupy-process.html","01de3d08c310563fea5c6097647ad5cb"],["linux/shell-command-awk.html","e59addfc6331904a095fb3ef177aa347"],["linux/shell-command-df.html","f9ee35077b0b193f2a718da5d3d34ccf"],["linux/shell-command-du.html","0a0a46b228c44bda53b3b7e131bb0b13"],["linux/shell-command-netstat.html","1676b5e6db3de035609fc00bbf65aa15"],["linux/shell-command-sed.html","7d9943ab170586b68eb0e759cbf09821"],["linux/shell-command-tar.html","a9a8ad6835712cd1c78326e05d144d66"],["linux/shell-command-top.html","2f4cd442f7c43f298ccae0254644b992"],["linux/shell-command-touch.html","96a4966ef618802ac5d95e9f889e97b9"],["linux/shell-command-which.html","3275a7f628d01e30180ae72d8ea257e2"],["linux/ubuntu-user-add-delete.html","b705782c2c1c79ce5209f036fa2e9e32"],["mongodb/mongodb-collection-aggregation-introduction.html","6970caedbb8b4cf73aeb31d54b597c89"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","6c088c94c86fb19d937dc3927d8fd16e"],["mongodb/mongodb-collection-create.html","7a22adb593370307451cffb378bd8680"],["mongodb/mongodb-collection-delete.html","8de848d7b0380fc5d9735aeef0448519"],["mongodb/mongodb-collection-find-1.html","0e9f53a3069ab046ef3cb7851079a248"],["mongodb/mongodb-collection-find-projection-operator.html","b9b429d52b4da331f789c22c8822c4ba"],["mongodb/mongodb-collection-insert-1.html","152491c0f9b6d6a4992613390cf50ee8"],["mongodb/mongodb-database-create.html","bc18566f1f3fee8ed57a4b1beb54d34a"],["mongodb/mongodb-java-driver.html","648b17b81682ce96b648feff22b510e4"],["mongodb/mongodb-schema-design-note.html","95aeffe1771ddfd582fa1206dbcb4ac8"],["mongodb/mongodb-study-note-1.html","47d301056c5d520b977bfb1821769730"],["mongodb/mongodb-study-note-2.html","815edbda5ba3a35eace62de0d33a8eb1"],["mongodb/mongodb-study-note-3.html","182685a5c80249660f2fb0fb8254945f"],["mysql/mysql-ddl-handy-book.html","bd68142b7fa93a5015df2cb8fc231d67"],["page/2/index.html","9bec0943a0e03db81fda3182b3766238"],["page/3/index.html","59480c6ddb49cfdd4de12ee8e1c3dad4"],["page/4/index.html","10d70337a10d4444c030b7a62fddf460"],["page/5/index.html","25034eff8f70e11f8532d05a04b92385"],["photos/index.html","e4433b02a6a15436faf56ac8608b6956"],["python/python-args-kwargs.html","ffbb90285a934ae0850079989e5d2b35"],["python/upgrade-python-under-ubuntu1604.html","f0ac5c4379eeca37ef4a24f28d423175"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","23fe5c1b5b8f06939b2665486a528ea0"],["slides/index.html","851cfe024593b3a03088501690d68291"],["tags/Autowired/index.html","8b389b887deaf9e5486d0d08885b17c2"],["tags/Base48/index.html","08bc06f30a9831e9573682f07c083da3"],["tags/Beans/index.html","a5c1554f4185719f3b593ecd72e3c2db"],["tags/CSS/index.html","70b4c5eae33f4d1466e49e7b7c252570"],["tags/DETACHED-HEAD/index.html","0f3f7ed14cb08ed5e7f012370d59f5cd"],["tags/Git-Flow/index.html","ccdae589eab3b36d4cb7d30b9a86d51d"],["tags/Git/index.html","29353716e807de08eaedd92ccf0d0a3f"],["tags/JS/index.html","6bf529e96b0b09e6f6e33fd828766e37"],["tags/Java/index.html","2ae367073f12b57458df47765b11db55"],["tags/Javascript/index.html","568e3b8eeb6172b9ceac60d53342931a"],["tags/KVC/index.html","ad62d1da2ae38275189795a4f09f5ffe"],["tags/Kafka/index.html","3876a378c63bbcfcecdc8e5b375dd873"],["tags/Linux/index.html","84f4b4407bf21f4c055134c5fce89f3a"],["tags/M/index.html","44476884e35dbee74ef89d243b1dd281"],["tags/MongoDB/index.html","e59db7cc8cc575af0f1ff178886c5c6a"],["tags/MySQL/index.html","a011b78e44ddf50244082a89353d6a99"],["tags/NAT/index.html","dbf1298f5380928182c313e5ed64f379"],["tags/NPM/index.html","c764bf3540b6ebc75c6a3e484c0c1e77"],["tags/OC/index.html","4bfc158c625d88703910c6580d752303"],["tags/POJO/index.html","7cdad230fe21019b26a6d6b6d2d37205"],["tags/Python/index.html","199eddfe51363b21135aee29f13e09f9"],["tags/ReactiveCocoa/index.html","84a0e585456376fc0aef4482dd287119"],["tags/ReactiveObjC/index.html","f0925022616928bbe0cb366517b6bc40"],["tags/Repository-not-found/index.html","9285b49d41ea2ad830f665e8a4911471"],["tags/RequestBody/index.html","b01e1835337b71b41a0778d7972ed317"],["tags/ResponseBody/index.html","2e33151736b49367d45b5a9959b05ac6"],["tags/RestControlle/index.html","227b324129e852ed373252be4b36e246"],["tags/SASS/index.html","5edb8c883f62e48c0ac1e61244c5a95d"],["tags/Shiro/index.html","4952a4d32ee47d7b5456285c075ab773"],["tags/Spring/index.html","59faa4ecc79318d741038221cabbfae9"],["tags/SpringMVC/index.html","58a5836676e8e623ad52d00f9c4aa28d"],["tags/SprintMVC/index.html","67015b754ef5a8339914f9e5db0c0743"],["tags/Style/index.html","1cbbbc64ab7c5e2c4af6e2f4687841a9"],["tags/Ubuntu16-04/index.html","fd82f6b93d413aceb3078fc559e25500"],["tags/Vue/index.html","f1f001415c0317d022528637550e6a8b"],["tags/Workflow/index.html","af3b30b4731ed9a51389cc1c32ff619d"],["tags/X-Frame-Options/index.html","3032567c041e2427d15c6fe801692629"],["tags/aggregate/index.html","afe0cb0ce9973469addc4f33e8eb0d71"],["tags/alter/index.html","5ddfa011ca31222f56ce1664826075cf"],["tags/annotation/index.html","0a162dfbb1ff6b171d184b8e589f4aee"],["tags/args/index.html","65381a1e13ed198c2d1da9b4ea38863f"],["tags/change/index.html","f4ba135afa6c10c6c9fd629e4882d50f"],["tags/checkout/index.html","2b4962749fd8162ef8920c0f919cfc1f"],["tags/collection/index.html","17cd6de370692f469b21756341f6f076"],["tags/component/index.html","3f932a8a82b5ea57ac9e1820e6915656"],["tags/computed/index.html","a4a73c19cb62f8071ebf7ec7118e772e"],["tags/create/index.html","a589dd8ab08699c092e2d0b143ebbb32"],["tags/database/index.html","a5fe1d42496175a12b87e5816d49e118"],["tags/df/index.html","02d4953349c74b6df77a84b50993dcee"],["tags/diff/index.html","67227a9340c38e276bb02af9fd2a801c"],["tags/driver/index.html","0a56dcef0bfd86d6d52caa573839a2ac"],["tags/du/index.html","48c28bf332e01643ffb8f72e14276a56"],["tags/fast-forward/index.html","f1ed2e384e5cac01486a892f635838fc"],["tags/ff/index.html","da05fb8dc0cea3690e82ea0374471691"],["tags/font-size/index.html","4813c43e045f46f5cc8bdcfb0eb55ff2"],["tags/font/index.html","07a6577a17c03890386d068ab1b7b4c0"],["tags/git-branch/index.html","24d4e231f0f51b727517c5056334f191"],["tags/git-index/index.html","4e2f359a04220a2c690fd27e5b8f245d"],["tags/git-merge/index.html","0939ff13458da8d109b82322663527d1"],["tags/git-pull/index.html","935dac6fb615a479662562da0800022e"],["tags/git-reflog/index.html","93a5dd8213071c951284d90f4ab52e1b"],["tags/git-reset/index.html","c723e3ec6ce98101d3069d65c9863d27"],["tags/git-rev-parse/index.html","49a280a79ee1577aaaeb55b971553a5c"],["tags/git-revert/index.html","160144933261958eed645a8803fe772e"],["tags/git-tag/index.html","0231649619579c75cf7f31e838b50de0"],["tags/iOS/index.html","b03ddfd87af0aae11ebeb10b874e2ec9"],["tags/index.html","d3fca78cfc41af77d8b1d386e8e46e98"],["tags/jps/index.html","eb76286b6c0e4ee65e5fba5ced7d3e5f"],["tags/kwargs/index.html","4ef41ffded95477f5ee8a87311df13f4"],["tags/mac/index.html","756456503f273d4cb10fd0f496b44d96"],["tags/modify/index.html","8c24c9bb3160af34480b88999bb68a8b"],["tags/no-ff/index.html","ac5db306f20540903ff95f8f423b63b1"],["tags/rewrite/index.html","02d7e25517d62d97eccb673296f4764c"],["tags/schema/index.html","c3ec13f156e252bd84c4c5a36fe7ac55"],["tags/shell/index.html","391726eda96e6826a4f011f0858fa718"],["tags/synchronized/index.html","5436d303a2c9a4f2ddc7b5d7f9290ce0"],["tags/this/index.html","78af62f07783a19e8c3683c416d2134e"],["tags/tomcat/index.html","c10be608c4a25a718f4c6ee14affd5bc"],["tags/true-merge/index.html","246fb1390248bc9b3c8d382014219b0b"],["tags/url/index.html","a118800f299c72ed0412b047be94e8be"],["tags/windows/index.html","0a9aad99fa1f2e125de40b8263aac2ad"],["tags/一棵开花的树/index.html","1ba52416e15e69f75d4e4db9098ddb16"],["tags/主题/index.html","586b9d1286a8cbf12a34b18a27e74962"],["tags/介绍/index.html","30cc6a299ae12ff8f92658802c66929a"],["tags/代理/index.html","95c04956c2ee7dde3c0e3bdadb03efea"],["tags/以太坊/index.html","03f0e5c5ccf7fcd859a0c3eb6b92d692"],["tags/依赖包/index.html","af70943fe9d8deb3f64ae662f60cd6c6"],["tags/修改/index.html","725e4afbb3537c087c75fa65e2cd8dff"],["tags/值传递/index.html","bc515cfacb2689155dd3dee0f86a5886"],["tags/冲突/index.html","c52c804bd96d90fc2466af7c10985f3b"],["tags/分支/index.html","c9694f12453a463b32acae8914bb000c"],["tags/创建/index.html","1d12af205328df539a278e2b1d86191c"],["tags/创建数据库/index.html","dc4b4be1677a698d1b63bf0902d27aad"],["tags/区块链/index.html","fc70c4c8c2e1630df2cac08766a8590c"],["tags/升级/index.html","a23d7de7be62a46571a352ef070f9caa"],["tags/参数/index.html","7ab73e7de9140e9360a1652a536fcd4f"],["tags/委托/index.html","fc70d5f352f590ca92c00fb1435a1ec5"],["tags/存储/index.html","e346a19a555d0203a189cab6dfa7546c"],["tags/存在/index.html","8680cc6882ea888295ef343f7619bd33"],["tags/学习笔记/index.html","80b7dc514d408dc65ad7a30c7836c7dd"],["tags/实例/index.html","3767cf06a4bf832d6096df743fe928f4"],["tags/容器/index.html","2d7ad09e25bca81ac9dbb6973aaef39c"],["tags/工作流/index.html","4a6752f0c6ce13099e84a772c5fc1589"],["tags/工具/index.html","60c5f46640043114c281c6e62ff17966"],["tags/席慕蓉/index.html","ece9fcecde8905bf8103e37ce60b35ef"],["tags/微信/index.html","4885706bcad068694e70975670c64f0f"],["tags/插入/index.html","2ef1915157f8b73dbaeb1747afb76b1b"],["tags/数据存储/index.html","89bf78da4638818ac46fcc5ea4f663ca"],["tags/数据库/index.html","ceb2b52d295a2900ae71498a0bf58199"],["tags/数据集合/index.html","0ce1a61ea5f9bcc9f036709d5f6fd094"],["tags/数组/index.html","c8d67af5b86f3567619485a4243066ea"],["tags/文档/index.html","620e5fbb8e643c306e80b418370285f0"],["tags/文档流/index.html","fb706f7f8da4337d482768c42c46d599"],["tags/智能合约/index.html","a794c274e1015ece793468376da75d11"],["tags/标签/index.html","5fb9a5a970f06d3cf8c99249782bc98b"],["tags/模板语法/index.html","af4e2f13c6e22718d94a6276393884d0"],["tags/比特币/index.html","796d62d2ec6507dec9f87a024b0da68d"],["tags/波浪字符/index.html","f92ffd851577f0c03f4173c436fbcea6"],["tags/注解/index.html","c3581725eef554c128a3582e255ba573"],["tags/用法/index.html","a6f8031715ab4a5c169526adefbf1add"],["tags/穿透/index.html","e03349020e9e59f966ffef7929ddef60"],["tags/端口占用/index.html","69d295cf425df5bfc4c29720754cf669"],["tags/笔记/index.html","94aff76b79500a8637640c660e9bae23"],["tags/符号/index.html","a0721cf1b7c105626212ae81880e5b98"],["tags/组件基础/index.html","29a84f82a7a367857db1eaf09b538588"],["tags/绑定/index.html","b27d2057c0aaede7aa82ddf93767c796"],["tags/编程/index.html","f852fc5dd9b3619be7f891b864403bdb"],["tags/职责链模式/index.html","881f1682dc583a07120a713c64991855"],["tags/聚合/index.html","a71946d52691c4097c12b6de336bcd34"],["tags/自定义指令/index.html","219db53a86f88000b2e2934047fca442"],["tags/计算属性/index.html","b71aff7469b8032635be7606897a9c6d"],["tags/设计模式/index.html","523466936c70980f13c55513e859d2b3"],["tags/进程/index.html","789a13905f82449b6e3f931cde08ede2"],["tags/远程仓库地址/index.html","2dd78a6e72e41713819bfaa81a858dae"],["tags/逻辑操作符/index.html","d42e3aff502b7b7e7061b79b5736972d"],["tags/部署/index.html","4806e9a4ab8f4e0bbeab4d378b981be4"],["tags/难度/index.html","4e008ca3822eae2c410343c3c83d749f"],["tags/集合/index.html","b546d620ce82c244f4e12934d0640da8"],["thinking_in_programmer_life/full-stack-programmer.html","c11ce43e1fa537326d8b393d2d60c13d"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","dc7c62c83e47dfde7bfd4342d85ce1ba"]];
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







