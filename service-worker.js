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

var precacheConfig = [["English/ie-note.html","59b7085ed56967a27c5fdc9e5d9abe31"],["Kafka/kafka-introduction-note.html","b5d6721eb6c310dbd876b535d4864414"],["Kafka/kafka-storage-principle.html","448b9f22233922604a7f0ac4ae51a098"],["about/index.html","57bb34acfb6c6f814212144dbe14df6e"],["archives/2018/06/index.html","9d5b4be06248e17d46efb006df657123"],["archives/2018/07/index.html","6e7edaae8dedba889d6c15a389896793"],["archives/2018/08/index.html","a244ffb2a208e49d9df93a90798462fa"],["archives/2018/09/index.html","a2f740b3ed5ff26a3170857487b8b456"],["archives/2018/10/index.html","fbf70a3dbc00ac50adae6c7a993e5d74"],["archives/2018/11/index.html","44c27fc12758e186be0d8aacdc31da6d"],["archives/2018/12/index.html","54120210ba8723844b09c0c64f51c8e1"],["archives/2018/index.html","d56847b47d4f8637d88f18970f5beeda"],["archives/2018/page/2/index.html","de0aba6c05b8289f9f5b1a7bbeb76c64"],["archives/2019/01/index.html","396b4ae151f9168c70e4e1dff13a398f"],["archives/2019/02/index.html","e3fdd793d03686d90ead390dc609ef6e"],["archives/2019/04/index.html","2b482360a0a319e2ee804693daf61964"],["archives/2019/05/index.html","0b8c27c3fc1df3b88627d262c11c965d"],["archives/2019/06/index.html","fe1c8b48758bb90e561cdbc25d870663"],["archives/2019/07/index.html","5a100c456267a9e98d0355f72d6bf1a2"],["archives/2019/08/index.html","848294b368f580cb1c3fc548e79b6460"],["archives/2019/09/index.html","3baa79cd8324a32b1221e1e406dc7973"],["archives/2019/10/index.html","e32980ceff4fb7e0008d4d99510d14f5"],["archives/2019/11/index.html","b7e9ff846f2b2ac3114877babf4a3c98"],["archives/2019/12/index.html","029065ebc5276ae0c9bc482715ea7534"],["archives/2019/index.html","761c7a57695e80792eba2e3241e4117d"],["archives/2020/01/index.html","a662ba5d6e347f4ab4b9ef07682fe297"],["archives/2020/index.html","6c82a0f71af801410223185c932943a7"],["archives/index.html","6b6622745a09f7fe5269e54a08abd53b"],["archives/page/2/index.html","f4cef08793e95e58a68628e1972f84f3"],["archives/page/3/index.html","e9ecefecf3c46a1a04c639fdd6456002"],["atom/index.html","e07bbac84be137cb5ea15ec8975f2a50"],["blockchain/base64-base58.html","5ecb7c6874da99d6f8436ca5c9dda2d9"],["blockchain/bitcoin-data-storage.html","a005356afaf2a540708a5c069ec5f9a9"],["blockchain/bitcoin-difficulty.html","b87da28f855a66e006348cc4cf4bf5d2"],["blockchain/block-chain-ethereum-contract-program.html","2c74a8ae6ca61c3d602eea06ae4a05ae"],["blockchain/ethereum-programming-introduction.html","b518706905a9b5629cf8637afd5e1ea4"],["blockchain/ethereum-rationale-introduction.html","be9c6d90eb6366b6ecf82d358ffee404"],["books/index.html","44c2e8b2bea36fa6145521036816a622"],["categories/Blockchain/index.html","c416541f6f21a739401cca76564e6589"],["categories/Blockchain/以太坊/index.html","d1b4614ef17d2150ed66b0b16edfcfe9"],["categories/Blockchain/以太坊/智能合约/index.html","d4d43bfcc69b978cda9c360c2ebff40e"],["categories/CSS/index.html","44dac72630bce48a4c5147f1d98acbff"],["categories/Design-Pattern/index.html","32f46b0ab92ff9ddd631aad72c36221d"],["categories/ES/index.html","c31a23d418c9f9db2159c8f955db783f"],["categories/English/index.html","350daf2e079d1fc184ac8e36c1f782ad"],["categories/Git/index.html","ad13e50c161a0bda5ca364549c45c166"],["categories/Java/index.html","04af4c3a8eec727713d01a84beecaf77"],["categories/JavaScript/NPM/index.html","4c72a3b96245cc08e508f146c8989822"],["categories/JavaScript/Vue/index.html","9d7bbed2b0a7358734b4950e64b8982a"],["categories/JavaScript/index.html","a5bfe973ba49cfa5a3388897174f2a2b"],["categories/Kafka/index.html","e390f9e67f3908e9eba640c0bfb8dd63"],["categories/Linux/Shell/index.html","d28035fdc886d14c87564656acb2a1c6"],["categories/Linux/Ubuntu/index.html","4736e59cd5094b9e41e46452ea9689a6"],["categories/Linux/index.html","c6477b3bea887c702896d510161ebcce"],["categories/MongoDB/index.html","b867d90090a9f084c008402d5de42e60"],["categories/MySQL/index.html","4273f2fabe1c3d0d9ce085bcbd01ee6e"],["categories/Python/index.html","bd6eeaaf5b8c898768aaad4693382e45"],["categories/SOA/index.html","6fe156e136e5cbd807205049343f4e6e"],["categories/iOS/index.html","7bc90ca71daf317e0cb1b14b2d142173"],["categories/index.html","8c9dd836cd6a172ce8cf49bcbe82cbd1"],["categories/微信/index.html","a3152a76de03c2081bdf1e804d73f920"],["categories/数据结构/index.html","0f3c24970c6dcbe1078c7192dc9527a4"],["categories/杂记/index.html","be20552723b2714ac6d95837a2f1b219"],["categories/程序人生/index.html","fc9fe3908d468ac5c2f198c2f41c549a"],["categories/计划/index.html","83f2d36de063baaa8d3c71751a97df77"],["css/css-font-note.html","eae599482b27b28243b9b69c93ed015c"],["css/css-normal-flow.html","b796d9009190a098e8b6bcb70f6265d6"],["css/css-sass-introduction.html","1ea45dbfe8b70b68232ea9dcee520783"],["css/main.css","84b784f29808c8153f276b8b194e8cea"],["data-structure/B-tree-note-1.html","b5d6db8b230ed86a6f990ddc765b9162"],["data-structure/Binary-tree-note.html","d9c38edc04895557f6e7b6ad10fd6355"],["design-pattern/chain-of-responsibility.html","ebbe5e456293a49ee9dab9cefa8754e8"],["design-pattern/delegate-and-proxy.html","74943be556558feaeb293b1b763993f7"],["drafts/configure-multiple-vue-project-with-nginx.html","62db215880bfff23f4434c8809f624ac"],["drafts/iframe.html","c9ecba472548c96a669678e83a792443"],["drafts/record-re-install-mac-os-10-12-6.html","eecdd4eaf456dca4be98bcdc501e53d6"],["es/restudy-es-note.html","28dc40c72b966d950309b46777f91627"],["essay/note-ximurong-tree.html","04b5c8a4cf35f46abefc1c635397aa82"],["git/git-DETACHED-HEAD.html","65e1d6a339812c7aa4b4dd1e1c706b27"],["git/git-branch.html","4ee3d3eb10f14985400838624cfeac15"],["git/git-change-server-password.html","43df0157ab46f06f63646547c2bab6ba"],["git/git-checkout-1.html","a6273baa05de5ca4b3261a733380c296"],["git/git-checkout-2.html","193c3e73f272b5a5a8b7972aa7c7198a"],["git/git-diff-m-symbol.html","6028871c2a7d0e2dd6cdf75fb79b5dbe"],["git/git-git-flow.html","ca699f6ee828ccb1ca74b5226f4404d0"],["git/git-git-merge-ff-no-ff.html","3ebc55d3c6b552d717ebfff6a548fdbe"],["git/git-git-merge-true-merge.html","202bba987688f2cf53e285fb41aebeb4"],["git/git-gitlab-flow.html","2c8bb4ac1fb81d209ce737ef8d75784a"],["git/git-index.html","fa0c6ebdd1be4f94031634a29930d592"],["git/git-merge-choose-one-side-code.html","98a288cec6f892191798e10eaa443b6c"],["git/git-merge-exist-conflict.html","660f18384946836e4276c6bf55724dfe"],["git/git-merge-note.html","92ce250566507f438364127aec6abb48"],["git/git-pull-1.html","26b794af504bc188d0a314af8b88e901"],["git/git-reflog.html","06a075dfae5fff0c058222d861ed1499"],["git/git-remote-set-url.html","591f975e51366f6af7fc7ba453ee06bb"],["git/git-reset.html","c6b011ec2901e27bca98a17f64c081fb"],["git/git-rev-parse.html","d6e29388ac025ac7a08ec03801f5feaf"],["git/git-revert.html","447f45aa80cf5cbb0f2ea9f84c5d8d9a"],["git/git-tag.html","d6ea145e04e7b0cecf981619edbbb994"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","89a821e93e4b5e1e23c925e6624da4d0"],["ios/ios-oc-kvc-1.html","ea3db79e751804b06319545c7eac78ad"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","5a4eeb7d8ca2883cf8e3c3ea397aaa40"],["ios/ios-themes.html","aa3b665b8cc3615275b6c98bcabb237b"],["java/java-annotation-note.html","7dafb1189ad1293caf953a40f61bbeea"],["java/java-annotation-request-response.html","b2d8178aa26181a4a741585ada4e94ce"],["java/java-array-and-container-note.html","3d2f26d2568094f0192e4b9db35077f9"],["java/java-deploy-resource-folder.html","8a82f98d23fdad22910de4dc8590e422"],["java/java-jps-note.html","2ca1966e6ddcdb57905215af7844be07"],["java/java-maven-nexus-note.html","a47ec1533abfb81df65156515ada916e"],["java/java-maven-pom-note.html","0d245c52602f24a1ffe16e10303821a2"],["java/java-pojo-bean-note.html","a44e92c01e3751830029331365f5f76b"],["java/java-shiro-note.html","c9bc4df0aab98e32eeb826e26f011584"],["java/java-shiro-springmvc-integration.html","8a4d69bd4d96e9f58bca7e05ba361519"],["java/java-spring-autowired.html","7974ab210920e4be719ad61816427eb6"],["java/java-spring-configuration-bean.html","b00f60ab72819d30220e39dcf3bf0d33"],["java/java-spring-restcontroller-note.html","e4d4d2e06e7662a686d85a53a0ccab84"],["java/java-springmvc-X-Frame-Options.html","700c7b8171c075de2f5af7f5df4d7c7a"],["java/java-synchronized-note.html","219fec7bb8fcd735d55236c4ad4144d8"],["java/java-value-pass.html","6885d1ea2bd89dc72cda87b451391355"],["java/java-vo-dto-pojo.html","f7570552ca736ec63fcd54eef9c8f71e"],["java/url-rewrite.html","83d4437fefbafaac4f1bba565bd98711"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","14092e2049a1e19f45847ba4a56800b2"],["js/js-npm-symbol-caret.html","c72b19d28d65f3d3c23457373c7c54de"],["js/js-npm-symbol-tilde.html","b61440620cf003e8d062fc382b8077ca"],["js/js-this.html","f0358ca323c0dcb203ef0727c8b03bed"],["js/js-vue-note-components.html","24ceeedd5249738277b4fc6100849adb"],["js/js-vue-note-computed.html","06e9ad605eae971f4bc59689c5a1af34"],["js/js-vue-note-css-style-binding.html","4176e097a109f310495ecfbb3e11314c"],["js/js-vue-note-directive.html","559009e1e4ab488e889555cdcf99fe3a"],["js/js-vue-note-instance.html","fee7fe8c00cab904b8275ca09e8c07f6"],["js/js-vue-note-introduction.html","305efef46ac9025c0e070de017e605df"],["js/js-vue-note-syntax.html","29bbbf99ccc6d51378394d78d556789f"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","7cd5bd9c6c3ae84fe134e763c69e75a3"],["linux/linux-top-buffer-cache.html","bc6af5013bfd516e09de945a6a51daf8"],["linux/mac-find-port-occupy-process.html","f8d4f8f7edf4d9066379b6f98c273c1b"],["linux/make-vs-cmake.html","b94d0e2baae371351cecb8e2a0a736f5"],["linux/shell-command-awk.html","55c1c38a7d4114073a0240b47992e763"],["linux/shell-command-df.html","8b77efbde7a7c4a12fb5dd7157223ea7"],["linux/shell-command-du.html","c190a13bd5283989886fe2e7cd753e20"],["linux/shell-command-netstat.html","1334baa04b2df671741b32d1f309af2c"],["linux/shell-command-sed.html","7c87a8ce58e96fa6a50f721db4947f36"],["linux/shell-command-tar.html","557444e9e59cc4ead0dd056d0dbee676"],["linux/shell-command-top.html","c79b2ef886b319ad317b3ac881222e25"],["linux/shell-command-touch.html","ddaa10169df4f113f57a8ebf43229d42"],["linux/shell-command-which.html","9a44c6260c10915d66e34e19faf3997b"],["linux/shell-difference-semicolon-double ampersand.html","ea0d7ec64f950d1e1343f67aa0ed4744"],["linux/ubuntu-user-add-delete.html","a6992d975b55285b322c0d328a7c6b08"],["linux/vim-copy-note.html","e0abd0928d4c4da9dff6f58ee750eb4c"],["mongodb/mongodb-collection-aggregation-introduction.html","28dba3ef168dbc1aeee861176892d354"],["mongodb/mongodb-collection-aggregation-stage-operator.html","a03057ee5da5360722dd3898ef2c5163"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","f068276565fe04d36c010f0f25fc9cbe"],["mongodb/mongodb-collection-create.html","0ce5ec60b6e182fa2bbc648afeab119f"],["mongodb/mongodb-collection-delete.html","0c987d0611afd49d05a0bdd12e26775a"],["mongodb/mongodb-collection-find-1.html","89541313b28d586f79bf15b51fd650f9"],["mongodb/mongodb-collection-find-projection-operator.html","391e53115caf463a3db6cf54383d7354"],["mongodb/mongodb-collection-insert-1.html","38b27ac4da7c0b2dc5184c4f6855f473"],["mongodb/mongodb-database-create.html","4551025dd91e974ef1773e51fc83c5db"],["mongodb/mongodb-java-driver.html","ac8746195b8926aa856bb6af610c25d6"],["mongodb/mongodb-schema-design-note.html","80682798292dfb8a5f111431ab9b777d"],["mongodb/mongodb-study-note-1.html","54ee2f7f8bd52164efa8a763299fc4d6"],["mongodb/mongodb-study-note-2.html","737c073bf397c0cc8637e711214a3aa9"],["mongodb/mongodb-study-note-3.html","6c96a1fd5551e7d452cba3ea6c7873d9"],["mysql/B-tree-note-1.html","8be7b50100bd74c770ecd0459e1d7aa5"],["mysql/clustered-index-mysql.html","0349d8a437fcbf7c1232ef224ed71f2f"],["mysql/mysql-ddl-handy-book.html","7e5d6eadf32ca1c85620af054d6688a6"],["page/2/index.html","dde69f746f2460ae59d9bc6de93a8910"],["page/3/index.html","6356772b83e46b4f05ab38d8c1903c5f"],["page/4/index.html","b3b3acf1017b57059c00d6fce3554817"],["page/5/index.html","54a6f0651054c1324ffa78582dd024ea"],["page/6/index.html","e56b5aa50a21df72cb656f2c1f786376"],["photos/index.html","f88965a8bbf7ca91feb95834459e4324"],["python/python-args-kwargs.html","c66914701f70d600ff3ed313b7cf4413"],["python/python-async-program.html","48dcf7b074d3ecc4fa25e2470ea87bdb"],["python/python-package-module-note.html","cced76bbe1415958a1197fae63222ab7"],["python/upgrade-python-under-ubuntu1604.html","2403a0089a3cfe2e1dfca36542029f7e"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","d2c2bcea1c55f75074219be279f814ee"],["slides/index.html","f19e3d3dd62cfd402c70457c4fe3e86c"],["soa/microservice-article-note.html","9bc2278126fa06bc244d062e57bfafcb"],["tags/Autowired/index.html","bfda258e24b419401a7cb15758b7a690"],["tags/B-树/index.html","07418542f7f1f61050387fce8b9c5482"],["tags/Base48/index.html","fa0fe795d959c5a19341a412e6638def"],["tags/Beans/index.html","9cc2bc08e11ccaa92f05e9e44e93bf15"],["tags/CSS/index.html","673cd7c26c16c3a019a2209fc12b667c"],["tags/DETACHED-HEAD/index.html","741da50d9af6c60dd12264e05cef0c3e"],["tags/DTO/index.html","6f4bc0247a66195ffc29c38c9c3f0edb"],["tags/ES/index.html","8efee900b4315e654d0c6bf3186ddda6"],["tags/English/index.html","c32ddb4bebb35d39097be85e0400dbf3"],["tags/Git-Flow/index.html","8911d7d9e9c86075cd12cc55c19d90a9"],["tags/Git/index.html","55f39a9f4810a828c87f97cc50fd4b89"],["tags/JS/index.html","7273a0f22c32905bf89521e8731ca520"],["tags/Java/index.html","f3255fffc83232fac9ced6d2b2bf11cc"],["tags/Javascript/index.html","2e7dc5c7d71928e17a306f06827d8ec8"],["tags/KVC/index.html","c7715248c3e2d51aa39f5636a7900f9f"],["tags/Kafka/index.html","3a86022c562dbef6a94c1e9c56df3c24"],["tags/M/index.html","17d45ba9701b4f5d1f3c30cdde8143e2"],["tags/MongoDB/index.html","4e2191dd34c3422c4c18e3d72193a769"],["tags/MySQL/index.html","064587a9bdbb89e1b9504d879c4ead57"],["tags/NAT/index.html","d214b1f0107ad6a4e490dfb26b1e0f0a"],["tags/NPM/index.html","bc72532e43ce83e577da712fda549405"],["tags/OC/index.html","114115f9783fff56ef9fa4457f6e70f6"],["tags/POJO/index.html","6aeecb405268a46eb2cf3a734a1fd5ab"],["tags/Python/index.html","c1b54a3aa866e1c7fb91074427ff3f27"],["tags/ReactiveCocoa/index.html","4885207bad450a3534f5e0e5b519b406"],["tags/ReactiveObjC/index.html","a2d014b7615d8f85d9bb6a7ffbcd3883"],["tags/Repository-not-found/index.html","d245a537b9d21461a669baec65fb09e1"],["tags/RequestBody/index.html","2fea284df4bf34995c8de9b68dcb56d8"],["tags/ResponseBody/index.html","7693c2091a5f1503106afc7650cdf2c5"],["tags/RestControlle/index.html","7b515e815931f2c492e5c8dd0156f9ae"],["tags/SASS/index.html","9ede69ef1051a57a44982a6b4b1ba719"],["tags/Shiro/index.html","a4ab2949de22ce28f5ffbec2cfe3d739"],["tags/Spring/index.html","11a2ea2e8485ad32a20d8b6fb6ac75d2"],["tags/SpringMVC/index.html","ead49583351dc6db8abb77637b7ab602"],["tags/SprintMVC/index.html","402af02fd3514ee33a5400d43b107c4c"],["tags/Style/index.html","1f48f19fedc07f69577a639e3c2b4cf1"],["tags/Ubuntu16-04/index.html","3c66411d4f134dfcb11abb5abbce4a2a"],["tags/VO/index.html","b0463bc8cabe31b757c2d370cd3a6712"],["tags/Vue/index.html","d3b25932f1ee5c6b3185150b053ac906"],["tags/Workflow/index.html","78342b319d8d3bc52ea9d9440b599a75"],["tags/X-Frame-Options/index.html","c169f29a9354144d2fe9717b184bcb22"],["tags/aggregate/index.html","5144998d19ab60fbd1d811146cb8ab0d"],["tags/alter/index.html","43ff8a86986d85c1658cc934ec4b692f"],["tags/annotation/index.html","a14c0caaef453567de5161ce7f830bfe"],["tags/args/index.html","c6264cff09123f4781735f771d874e84"],["tags/buffer/index.html","9a24a51bf533397db135d41b2fd481de"],["tags/cache/index.html","b7436dce55bf7ac04c119e6eef466fb2"],["tags/change/index.html","daa3fa71a20bad7a082bdf4e9da55d94"],["tags/checkout/index.html","a3985f350d8107c550d53168992dcba2"],["tags/cmake/index.html","7bce57d49803286ac0d3919a28859cf2"],["tags/collection/index.html","9e1f8096624c5190c7ce82ed477a61d4"],["tags/component/index.html","1c4cd6be5979a89f1dadfa05cc78f3ad"],["tags/computed/index.html","fdb3086ce49d4194308e5dbd9efba5b0"],["tags/create/index.html","84bae5f96330ef9045c2bc93e0711739"],["tags/database/index.html","c8741ec95879e1718228a38c13ae915e"],["tags/df/index.html","99399aacd2252c50e4ed09462aac9142"],["tags/diff/index.html","fd409f56ad35aaca8ced25c3824bb5f9"],["tags/double-ampersand/index.html","8080a8fd3fe1311ee6a41dd3e3e5e0d8"],["tags/double-vertical-bar/index.html","ac86bc97ec2a8e8136a481b9e8c3d253"],["tags/driver/index.html","f017ab705abd05f53caf6b3cb6861684"],["tags/du/index.html","579223ed2e7c17e3673b179c6ad754c7"],["tags/fast-forward/index.html","e2fb66377d3a9c9ce84200678b052fc8"],["tags/ff/index.html","81b10cec0aa6e9086cdc64f0e219f7f3"],["tags/font-size/index.html","4067d4a7197e7ca859aa1513209db9ee"],["tags/font/index.html","8e2e2498f5542d0b5ef476dd1e6dac73"],["tags/free/index.html","d8fb8dbf819a2425bb97d1dfa97732a7"],["tags/git-branch/index.html","14d49f53082e9c507ce5d263d3c6724e"],["tags/git-index/index.html","6f5e766e942d7d73cbecaa85c5c61c9e"],["tags/git-merge/index.html","93e810fc483e673fbb95361f26d8cba0"],["tags/git-pull/index.html","b733525cccd2cc64cdcc6bfffcf07ffb"],["tags/git-reflog/index.html","c4884bca8137a74ef59d07cd67414b29"],["tags/git-reset/index.html","d9e5be91b71657f7134136e3169e022a"],["tags/git-rev-parse/index.html","cb9a533f1ef83cc4e7415c49cc8b6a73"],["tags/git-revert/index.html","9767f5022a85eeaa16e585fe03860ebf"],["tags/git-tag/index.html","8d185bd0506af684d9da67d1b065a4f3"],["tags/i-e/index.html","93f2e70d897ff1cc2e4237d90b050c3c"],["tags/iOS/index.html","44301a8963ebf0e855f86b20459b5f01"],["tags/index.html","9dabf0e4907fe525fadd874fd93516a1"],["tags/inode/index.html","67c99423203a7fc1d1e645e05a5cecb4"],["tags/jps/index.html","28799999e56b3d0f99fbc8bf0c3f3920"],["tags/kwargs/index.html","901d4b3f2a62b01ecf6ec361b6bc25e5"],["tags/linux/index.html","8664c32f6abe0d4e0ea731e8b9156052"],["tags/mac/index.html","d48904193aef8e087e245ffe24925d14"],["tags/make/index.html","04bb8604a40d99edf3aed2c58d1e8833"],["tags/maven/index.html","30ec5538332f880eda7051d059b5c16e"],["tags/microservice/index.html","abfa3a67591cca7043d34e63e4c4c609"],["tags/modify/index.html","4cb744664e4122d03a13a0bceee0da72"],["tags/module/index.html","bfba186af0b673b0cbaa18c57e39c70a"],["tags/nexus/index.html","bbf75a8ae085108b3229ebd36fdda2f2"],["tags/no-ff/index.html","5b29581698ea3b1515bd89dc8d3feb11"],["tags/package/index.html","f7b5a7d56c880f0e17f88a2e5943cc16"],["tags/pom/index.html","f4f7a8a1b70648b4445cc5c25f25f27a"],["tags/rewrite/index.html","160ea7467cd59b850d444575699dcbd1"],["tags/rm/index.html","2b07dabf17fa9e8ea32bc23f957b979c"],["tags/schema/index.html","5a5cdeaa27d692018259348b728abe98"],["tags/semicolon/index.html","bc4d212e5507e76e49859d097d995572"],["tags/shell/index.html","49ff82cc53b9f05d07f5eedb70651734"],["tags/soa/index.html","44a3ba1469d25ea7b1ae94674c5a1d2f"],["tags/synchronized/index.html","af2ec58fe571e416890e426273066264"],["tags/this/index.html","9080ed00131c0e6646f9a64f154f78af"],["tags/tomcat/index.html","9fb7bc801c24bd6ffedac211ef610d75"],["tags/top/index.html","dcb23fca64390f45d25298de261c973c"],["tags/true-merge/index.html","b67dc6a76b00648f3425347ecc3f0de1"],["tags/url/index.html","cb8206e1c69ff81a7c278974d3a1206e"],["tags/vim/index.html","172ede9d86c0746595b70c8349a1377e"],["tags/windows/index.html","389a6411ca57ad677585399e18b560fb"],["tags/一棵开花的树/index.html","838f657c8be4220773fe55dac5574137"],["tags/主题/index.html","9ec14720cd3382f19891250d87f0a03f"],["tags/二叉树/index.html","5b5267e00bc46b1e385a1ed0e5a33979"],["tags/介绍/index.html","a64bbf4a4b29f9eaece8886ab8ad425a"],["tags/代理/index.html","9b5f54d0964e93fc81edab2ca8b6f3a5"],["tags/以太坊/index.html","aefdf7b4ba95f8cfb800acb88fe38bc0"],["tags/依赖包/index.html","41d9f9fa23e2a92344ee3dbf8bbfe3b1"],["tags/修改/index.html","22908de74e21b301551a96dbda247554"],["tags/值传递/index.html","036e8aef5202fd36f6caa64d67c194b7"],["tags/冲突/index.html","ec279af4efe69d4ba61ac09cf21195a6"],["tags/分支/index.html","09c2d2effcc17a1464fd88bcf50cd46b"],["tags/创建/index.html","1e3dcca1c615fe7fe2d22d1b6a447d65"],["tags/创建数据库/index.html","f423e895c12a8dc05e8929e62831cab4"],["tags/区块链/index.html","6ede1faf75f811fc74c31fd29cba2c6b"],["tags/升级/index.html","d4d6535824efdca9d7966d3441e4e4f8"],["tags/参数/index.html","c9661444a099d8791e930ea67d2fc173"],["tags/委托/index.html","cccfde1e3625d7f47d6db3c59cb847fe"],["tags/存储/index.html","afb5d849eb4681a67d0c0e003e1c4b1f"],["tags/存在/index.html","5a1a82d36bef6e55c2be0a83ddd8299c"],["tags/学习笔记/index.html","ba7116ea33acec28341b468be2fca9aa"],["tags/实例/index.html","3858a1cbbe7d6495ca5f13d898ed6b3f"],["tags/容器/index.html","99c27e6b6abcf1cb7493acc8dec43dd1"],["tags/工作流/index.html","63d42a9a1e224a91d93b66abd178750c"],["tags/工具/index.html","6fd04217958740e75fb56f76b1ac8f00"],["tags/席慕蓉/index.html","323be0bc0d0b8e056bf432584c685b69"],["tags/异步编程/index.html","3f9b40bde583d0a486e1c98e93d38c12"],["tags/微信/index.html","5300fded9093a7fc75d438ac1370dbcf"],["tags/插入/index.html","13b5284e0c94b7d4bdb21e235418de2b"],["tags/数据存储/index.html","516bc10e6947ca2a597699a4a7ce6805"],["tags/数据库/index.html","bb435e0ed8f8c408cd38c44380477d3f"],["tags/数据集合/index.html","53096ad764a892e1617b03b351926557"],["tags/数组/index.html","47303e4d4512706a4e1e4dfc1e8ace19"],["tags/文档/index.html","a1139654b61d51411e77153a262587ab"],["tags/文档流/index.html","382ae820b89cefc5bbbecf38e1b74541"],["tags/智能合约/index.html","5697b82782b827ad2088afc3393910f9"],["tags/标签/index.html","ae0ca17ba7eedcd88789c4ddb5856b15"],["tags/模板语法/index.html","55b168b4093279c923cdfd9e65b1b489"],["tags/比特币/index.html","e41bdbeccb9e7c8780a505dbdd7ee533"],["tags/波浪字符/index.html","067ac8b1cef151dd825a2c6e3f57e6ac"],["tags/注解/index.html","356f4bd3bc2770cc5b1fe077f69db205"],["tags/用法/index.html","bba5519cf63d19e0b0e23e0ad556a474"],["tags/穿透/index.html","11fb00b555174360266d306e8016f7d5"],["tags/端口占用/index.html","d458b18120d18480697d171cfd769437"],["tags/笔记/index.html","edbc94c2512b45a448672e5f162919bd"],["tags/符号/index.html","cc06deb88f2b890ed7bfd5c76a8cd76a"],["tags/红黑树/index.html","7c006ea95fa6a04adfd08ce73139701f"],["tags/组件基础/index.html","c9064fe92d159e96f9d73e73d179caf1"],["tags/绑定/index.html","fc5138fa006d3c024402d750a6cc1c00"],["tags/编程/index.html","8a6051c67fe5aaad423714f579ce282a"],["tags/职责链模式/index.html","7bce6374c9e4793d094d03d02f7304e3"],["tags/聚合/index.html","a1371d910429523e2518e020068c5a45"],["tags/聚集索引/index.html","98890c3e11a8237bc7ef3a051d2a2244"],["tags/自定义指令/index.html","c833b4b9d944343a4b86efcd25e2f7e6"],["tags/计算属性/index.html","72b413f831e0f79abea64193b98303c7"],["tags/设计模式/index.html","7855fe4071cb219de6d4720730e6c720"],["tags/进程/index.html","3bb1083011c212ace60ad96f29dccbb6"],["tags/远程仓库地址/index.html","c69daab08d9995a77e98bd86e851de86"],["tags/逻辑操作符/index.html","e6ed2f8fc30bfa3b8d0509f0e3529d08"],["tags/部署/index.html","87aa3d5bd808e0000c694ca3b83a703a"],["tags/难度/index.html","23e4bba16b0f51d53410f9f3d830d21c"],["tags/集合/index.html","840f31031545a702a220a4089fa3cd29"],["thinking_in_programmer_life/full-stack-programmer.html","6e386d19e13e3428d503e0bdf3c5c805"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","13f48af261ead806da14a5c89653c6da"]];
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







