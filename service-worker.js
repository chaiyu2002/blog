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

var precacheConfig = [["English/ie-note.html","0db0fffa1e1b91066542f11af37b004f"],["Kafka/kafka-introduction-note.html","4e44a220d6ad7efc96484eb453ac482b"],["Kafka/kafka-storage-principle.html","58c957b7d7aef6f71748f68a89e3024f"],["about/index.html","afe4cfaaaa06680a16560d47c60cd10d"],["archives/2018/06/index.html","148e8317493e1042834ad05056a7f762"],["archives/2018/07/index.html","b71c42b9c713057a498743ad756f5b74"],["archives/2018/08/index.html","e741697fe8aa2e80b68046936cfcb909"],["archives/2018/09/index.html","3bc9c54ad31e465a69be918caa8934f3"],["archives/2018/10/index.html","f6c56a1a8f2d5376f9afde2367471af5"],["archives/2018/11/index.html","b6b054e58f9354c550cb1b31a97582ab"],["archives/2018/12/index.html","b6207bca4b401ae57f11aa9fa9def73f"],["archives/2018/index.html","d820b316b918e5b505d77ffe73681c93"],["archives/2018/page/2/index.html","71b97122c71788c5dd4c6b513d908522"],["archives/2019/01/index.html","decf6695ca5801fb16f0025a32df256f"],["archives/2019/02/index.html","3c67a0e89f4d40bdab8a1957e49ceadd"],["archives/2019/04/index.html","489d96976a5dd2e22a3d1aa214dad6c9"],["archives/2019/05/index.html","93b38329a27646a2d1f5fd756f7413d8"],["archives/2019/06/index.html","ec77f18cca2b0ce981324a8a6806e168"],["archives/2019/07/index.html","a0a89f841b3dbd8f69c64853de46a805"],["archives/2019/08/index.html","469d72765a7df4c20d3c918da0bdd09c"],["archives/2019/09/index.html","e1b0e13871d0dfde9b7c2b4164e0fb8c"],["archives/2019/10/index.html","15e7d588a63551ae198685615b5e2d33"],["archives/2019/11/index.html","8b588d3628ec29c2e53ffeee242e9899"],["archives/2019/12/index.html","c8ee68e1ed3f2aef4bb192b8197bb8c4"],["archives/2019/index.html","50b8a0502bca75b4146d98d3ca66e0c9"],["archives/2020/01/index.html","46de8e8e0741062e63056d44fcb6e145"],["archives/2020/02/index.html","f936a8a377d22f08ef2ecf477a6347c0"],["archives/2020/03/index.html","7c9fbb4ecca64becdacd7c4de2e544e4"],["archives/2020/04/index.html","50c1e64369c489da7b148e3726629939"],["archives/2020/index.html","3358fd060903bfec5d13f3e1762d1908"],["archives/index.html","c8fe8f95efe524f8ff4e7b8a5997d68d"],["archives/page/2/index.html","9fae3d6fa4dea56b3f52b82bd0b56fa0"],["archives/page/3/index.html","7f7d4d6ec45d66c41ec770b7a92caa37"],["atom/index.html","02c7820c911cd10ddb26e033c79aeeb4"],["blockchain/base64-base58.html","53453c8139a7c84ec25ed446e549da34"],["blockchain/bitcoin-data-storage.html","71bd54fc76d7399f3b857812007dfcac"],["blockchain/bitcoin-difficulty.html","fbf171dc012b20afa3a42c9cc85f509a"],["blockchain/block-chain-ethereum-contract-program.html","e65c0b2aabcce10b37adf1d86fbaddf0"],["blockchain/ethereum-programming-introduction.html","fe18093a9d49ef9be1d3488b849853d2"],["blockchain/ethereum-rationale-introduction.html","542720321cb048904c90e087fff6a726"],["books/index.html","a09e09cc5ca6b096a8fdb54f03f3ba8a"],["categories/Blockchain/index.html","93a1f7f344380f0ca0ceced923bc3bac"],["categories/Blockchain/以太坊/index.html","6f6f111b718ce20e1f9ec89f21abb7ba"],["categories/Blockchain/以太坊/智能合约/index.html","53bfb04100ca054ef5ace56e8261ddd3"],["categories/CSS/index.html","8b7e21464f10f4e5824edbdef9015f14"],["categories/Design-Pattern/index.html","81980f9c8dc29fd125d3d4b3b4c5ac9a"],["categories/ES/index.html","c2ba48e3717a6a5c3194aa4f9f703cbe"],["categories/English/index.html","210bffab5715c81857db01243cfe5d18"],["categories/Git/index.html","d18e513537b151ea419d71f6affe0e97"],["categories/Java/index.html","864e7193cfbc574060d45768e73b4b51"],["categories/JavaScript/NPM/index.html","7ec9c8958de074fad36b5cf234c21d8a"],["categories/JavaScript/Vue/index.html","c59173bb07e3f378291c9179381f8041"],["categories/JavaScript/index.html","6a86ae0137db9b283d6c9303dc40efc9"],["categories/Kafka/index.html","41fba49f552956227ae00829146f6f06"],["categories/Linux/Shell/index.html","a264f06852662a316a5c3002a2ce01e3"],["categories/Linux/Ubuntu/index.html","e29ce804b4629ecf1f4cecfcdd639921"],["categories/Linux/index.html","0b05abbd06fc61fe223e446e973e4639"],["categories/MongoDB/index.html","d681c55b445c913996c085c28547bb26"],["categories/MySQL/index.html","c2506505711c51070ddd2c540f212157"],["categories/Python/index.html","461bf0e8fb186fbd6be06334c76a60cd"],["categories/SOA/index.html","4c588d1a67dbcb35d01d10e73361054b"],["categories/iOS/index.html","1b757a054b72b8bea12db59e620c0fa6"],["categories/index.html","0435a2d8e7913d4965de29fa4f662ee3"],["categories/微信/index.html","d3aab230d7dcccdd36fcc01e3f77eb0a"],["categories/数据结构/index.html","4879580cb9adda9ec98b4d1149bc542e"],["categories/杂记/index.html","8302a38bfa19b490c9b06405fa2cc700"],["categories/程序人生/index.html","3ef65872a488bafd6350355944fe2506"],["categories/计划/index.html","74b31e1b118416d26621567db486200d"],["css/css-font-note.html","337188e0131749b410fc8237f4344784"],["css/css-normal-flow.html","837a7f8f454b1b04296146d5389d8950"],["css/css-sass-introduction.html","62f743f44e6cb56a2ad6a05c7045b138"],["css/main.css","b9a54646f2ca74f1c1f7c419a35e35df"],["data-structure/B-tree-note-1.html","e79d2f9e3e03c51bd91aab20724cf000"],["data-structure/Binary-tree-note.html","002afae83876d8eaeb92382a827ece65"],["design-pattern/chain-of-responsibility.html","baf0e15e773267b47503c3e903975ca5"],["design-pattern/delegate-and-proxy.html","fd44a5ac92b5ddbf6a778069b11e490e"],["drafts/configure-multiple-vue-project-with-nginx.html","19e14cea1ece352874f25dd21616a911"],["drafts/iframe.html","fcc6fb1d96c056c174d1bfcb8a3dcabc"],["drafts/record-re-install-mac-os-10-12-6.html","f2b5407ae9f948eed83b54774d4ea3ef"],["es/restudy-es-note.html","af470ab3aceca8f298fb41c5f50a94bc"],["essay/note-ximurong-tree.html","6254e1e7f05075ff4a123b3bf75b65ce"],["git/git-DETACHED-HEAD.html","0ee558701f2bdf56320bae22e3cb4472"],["git/git-branch.html","a2e562605ca508c67687cd2562435bb4"],["git/git-change-server-password.html","09305ff625ac34f14daefb8077a22929"],["git/git-checkout-1.html","e045de57dc540ee5462ea5c9168824c7"],["git/git-checkout-2.html","d589055256dfc4aeba69bceb7a21ee55"],["git/git-diff-m-symbol.html","e6baa46fc1d72d689f46166272a1d123"],["git/git-git-flow.html","715104d2ddef77afd1ee217a1a9942d4"],["git/git-git-merge-ff-no-ff.html","f695b7fac3295070089157e91f56be66"],["git/git-git-merge-true-merge.html","5df87c0438cf061938f9640aad320e1b"],["git/git-gitlab-flow.html","f33dcfae00db3a1051634a48bb3c752f"],["git/git-index.html","895da7eeb4681dafe1e029d78090664a"],["git/git-merge-choose-one-side-code.html","db42c45c5c48780db483a66d3c52b7f3"],["git/git-merge-exist-conflict.html","97f95d968aeee48f588825beedd762b4"],["git/git-merge-note.html","10dcd3b807ccf08b7fac23768409caa8"],["git/git-pull-1.html","085067960870f46423f423c3b0e9d3d5"],["git/git-reflog.html","01319700ebd31c7f1e5b5ac477d4fab0"],["git/git-remote-set-url.html","5fc1f8e600f6cfe4026d33c5e116ddef"],["git/git-reset.html","4f23b6a0d5ca3033d4174ff6367c79ce"],["git/git-rev-parse.html","da00585ce15629046516abdd5660508f"],["git/git-revert.html","4be295105dd026558e6ac90039b018d3"],["git/git-tag.html","ee2fbdf3b6c16eec0e261cdd5d22a6f7"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","2677b04a7d87faea9f8e9f686eb12977"],["ios/ios-oc-kvc-1.html","b5fc17b02ef703ad17a4e8d53ea26c3a"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","d48430e339bfefa62eee45a464e839cb"],["ios/ios-themes.html","9371e228908e94d0fb2f946307e8de98"],["java/java-annotation-note.html","7b388a9f9d26a8e8baef6be2b195fd38"],["java/java-annotation-request-response.html","8a45ae28dad16327f38628c6de26dee3"],["java/java-array-and-container-note.html","47fb5ec3adef3f37970e31da2d3e6e81"],["java/java-deploy-resource-folder.html","f263cc797c6c83fe07dadf52841ad26b"],["java/java-jps-note.html","0c536f3cd835a9720388922d467b2ed2"],["java/java-maven-nexus-note.html","7fbc8b3c950ac048086ca0b41a2ab822"],["java/java-maven-pom-note.html","51d377453a428ec96b23b8dabdd791fe"],["java/java-pojo-bean-note.html","b26f5d8fa9c8ff469d07ec8c35aa88ff"],["java/java-shiro-note.html","b8f4711e80aaa728c0e67d0f978774b6"],["java/java-shiro-springmvc-integration.html","f17a8d60f6ab4612b3e60c3cade35b1f"],["java/java-spring-autowired.html","ac3f21d76b16d4861cd38bb1f180f1f8"],["java/java-spring-configuration-bean.html","816c78c27b23ecbc52b75ce683fad8ad"],["java/java-spring-restcontroller-note.html","45b9f6c3f5cd29d426605ca79b266362"],["java/java-springmvc-X-Frame-Options.html","2a0dfc9f2b39981217662752ed79bfec"],["java/java-synchronized-note.html","b4719418b130bde09c27c54253704569"],["java/java-value-pass.html","45897e90a75aac57bec54df313eb1164"],["java/java-vo-dto-pojo.html","e1e5f6c438c23eb609311c505a7afd19"],["java/mybatis-mapper-locations.html","b278c2ff2a48893ac0177b0e0bc355c6"],["java/url-rewrite.html","fec9da972ad198269a682f84e7129c2e"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","3764ff23dcf79788e667d18c9feac398"],["js/js-npm-symbol-caret.html","082414f097b0c3c837dd658cfe555b71"],["js/js-npm-symbol-tilde.html","6aeebc36c54cd720a36223f6dff6a02d"],["js/js-this.html","2e89d4cff89f684c8e91faf52ccf3037"],["js/js-vue-note-components.html","fe99e134dedff374e1bc1fa5e50df432"],["js/js-vue-note-computed.html","d5774d43da4bba922d1a0cf8a69c314d"],["js/js-vue-note-css-style-binding.html","23c6c655d6c5a080eb43f510c6d6c76c"],["js/js-vue-note-directive.html","6547a18932f49106239dbae368965cdb"],["js/js-vue-note-instance.html","e40b6afdacdbbad5af7291fa8b2b75b1"],["js/js-vue-note-introduction.html","e1795313a11d55719aa1086f5163f1b1"],["js/js-vue-note-syntax.html","948eb3608544fa87db9452913c245df1"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","eccfcd98115979851d7025dcbb051bb7"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","6ebcd496b28829d66cf919b6159deeef"],["linux/linux-top-buffer-cache.html","7d53b1a6db4fed3272268b893c2174ad"],["linux/mac-find-port-occupy-process.html","7d5540a6386551ca10b5067525e3ebf8"],["linux/make-vs-cmake.html","74da1e8965725adb0a6162d904e8d6a1"],["linux/shell-command-awk.html","1165200f27dc1bd01cb65099cac3b3c7"],["linux/shell-command-df.html","6692189946d54bc86b47827a96f5e902"],["linux/shell-command-du.html","b3a95facfc55f2325878f591a753457d"],["linux/shell-command-netstat.html","b31060651ff2e197eccc80667bbfdc73"],["linux/shell-command-sed.html","2ac68829fb8cc6d3ab353bb30f757135"],["linux/shell-command-tar.html","29488e0e222e311837e2089dc10b4c00"],["linux/shell-command-top.html","3c9449a0d3057170fe0fc6edcbe2b6b0"],["linux/shell-command-touch.html","dffc0ab0c461f30186148c2f8c05e9f6"],["linux/shell-command-which.html","5974763570d816c88bc3dda80a27d5e5"],["linux/shell-difference-semicolon-double ampersand.html","282b38023e46f55c1a0bf3bd03bd2f70"],["linux/ubuntu-user-add-delete.html","e7265fc56ee740713e308470dde762fd"],["linux/vim-copy-note.html","74d433c1582757b762e4256ecb56c64c"],["mongodb/mongodb-collection-aggregation-introduction.html","214e0015c7306ee47cf6902c52971a76"],["mongodb/mongodb-collection-aggregation-note.html","d64d69e6468d87d6c5ae19c9f1529914"],["mongodb/mongodb-collection-aggregation-stage-operator.html","b3c1d56ef5fccc5ef54f2a4508ee0444"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","b897e8b5467f2352ca100c27863974f6"],["mongodb/mongodb-collection-create.html","736d2f281f3702a46efd0cab2d157e1b"],["mongodb/mongodb-collection-delete.html","89548a624ddf706d51f32d9807d12645"],["mongodb/mongodb-collection-find-1.html","5e22471afebc7b84e91a128b60f36c23"],["mongodb/mongodb-collection-find-projection-operator.html","25f1135a8d2c4200edf2af64b4b07caa"],["mongodb/mongodb-collection-insert-1.html","7b69c1c40d07e901d7086391120e6e18"],["mongodb/mongodb-database-create.html","967675e5c9c2dd53ba8b37013e1c1633"],["mongodb/mongodb-java-driver.html","556e5b411a393630605e227cdf81b442"],["mongodb/mongodb-schema-design-note.html","7491a39ae6778cd9cb723f304ea7d263"],["mongodb/mongodb-study-note-1.html","27c4fa4f87b5ec22579b3d780f928040"],["mongodb/mongodb-study-note-2.html","bb46da488813df6df1eb9442bb8f893f"],["mongodb/mongodb-study-note-3.html","17ed775a49d975058d5d444a23c0d4f4"],["mysql/B-tree-note-1.html","0a33f15795dcd19b26ad4c0fa853c09c"],["mysql/clustered-index-mysql.html","ce81d3d6bf3001b8075e0e465d45347d"],["mysql/mysql-ddl-handy-book.html","ba62e18cc00c3ceca82b7570324e634d"],["mysql/mysql-ddl-note.html","c611cbe78cd882edf9ac56f2cb70cb4f"],["page/2/index.html","e0a57a7e39abfd49b947965f49bab685"],["page/3/index.html","47102dfc6f16a96bcdec3cb9a9812019"],["page/4/index.html","ceed9c206e5d23662495d703c10d15d9"],["page/5/index.html","d761c691bf44dabfa1ef49a501d1a5a2"],["page/6/index.html","476c3da9ea8197f9c1aee1929bfdf5ff"],["photos/index.html","a9a1647a3e4aabed3eb1a6f306de3091"],["python/python-args-kwargs.html","0290a16a9d02775d80ef00fce40f118b"],["python/python-async-program.html","9def5e5c4b9e311ef1b719e5beb8d3f9"],["python/python-package-module-note.html","b0528fc9c2d4491a7d7889cfb5d28232"],["python/python-package-module.html","0f68b0b997cd4384cff490e8c1ae69d1"],["python/upgrade-python-under-ubuntu1604.html","687402ba3e43106b0b4d06b29bcbdfdf"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","43bf820ec4fb8f64ab06379426a3ab11"],["slides/index.html","4123b326f3d93b046fb832bd3f92ffcb"],["soa/microservice-article-note.html","cc15fb55d7fbff84f6d4527ea0400ddd"],["tags/Autowired/index.html","03cbe587c1ea034782d8c8e49f9d6cc3"],["tags/B-树/index.html","55dd943c17a60d807f4df477fa52c759"],["tags/Base48/index.html","21eb1fe614e4144348d8971507d68b1a"],["tags/Beans/index.html","46873d4319c74afbcc892904315155c9"],["tags/CSS/index.html","b737f6d8c82cc0075e0392b6b298c418"],["tags/DDL/index.html","0b4c503af2d1b3bdc20a3ded2962ae6f"],["tags/DETACHED-HEAD/index.html","3e361e5ec8611aa1be0157f08021e2da"],["tags/DTO/index.html","533f7fd0d6a723af1867da72a487a9d5"],["tags/ES/index.html","d6711d775ba29f112ee29a9a4ad4a610"],["tags/English/index.html","24a57ced2283d4e2d3c56b7c0a03853e"],["tags/Git-Flow/index.html","a59a1f5d361933d3bb68498c5e09fbb8"],["tags/Git/index.html","2c29a8fbe784ed80dcfc85990a72f1fc"],["tags/JS/index.html","3a764074ed8997c2727ea7e7013f5a7e"],["tags/Java/index.html","26bb5df54835bc0d26339285163c23ab"],["tags/Javascript/index.html","182debda449025a35e8d53e4431ceb1e"],["tags/KVC/index.html","5d4dfb2de3e1e7ca725ebfcea0bf3ab4"],["tags/Kafka/index.html","37999969d672398b767a65e53262a16c"],["tags/M/index.html","153cb88d5be9eaafb40dac06dbf61b41"],["tags/MongoDB/index.html","4a90caa44b86a850ba1dc7c86c61af62"],["tags/MySQL/index.html","7a0476a480c3c1f3c06d34eba405ec74"],["tags/NAT/index.html","c0b759d923095033f19e6e26d7d9578f"],["tags/NPM/index.html","fc159d29bb41f69c2fd911f44c850b96"],["tags/OC/index.html","c5b9ca8d4d6cc9758f9ca6d7b22795e8"],["tags/POJO/index.html","6611e9ea33601a0e7be2a759df37a997"],["tags/Python/index.html","716f62be025b7afce37248d195af7ad4"],["tags/ReactiveCocoa/index.html","6142f4db8edd0f2154484b900c5d7258"],["tags/ReactiveObjC/index.html","c401a5fb0e949985bee702bbd0f366f3"],["tags/Repository-not-found/index.html","d888a9107c1a03bff467f64a3f4d5379"],["tags/RequestBody/index.html","491a9c911d053b867a0887e58ac3b9a9"],["tags/ResponseBody/index.html","6416b34ca85f3847977807bbdb71c5ef"],["tags/RestControlle/index.html","e06ebb026bbc1bc50e29cd4dadfc84d1"],["tags/SASS/index.html","f638039524d07bd19866132104e137a9"],["tags/Shiro/index.html","1287ae5106b4fa0de1cc826b95ee64af"],["tags/Spring/index.html","9bf2b49f520828f9142969692381b53b"],["tags/SpringMVC/index.html","50800823b622a4d52278084382ab9128"],["tags/SprintMVC/index.html","2e0a5f668d4aace75b8657a8a0a22118"],["tags/Style/index.html","ebfc05f4588fe7d18bb02715403c4bb2"],["tags/Ubuntu16-04/index.html","85cc0c2dc036e5d0acd82591bef841bd"],["tags/VO/index.html","10408073254b82a322893f91608cc4d9"],["tags/Vue/index.html","93e50213034c5f281c8c90d7eda77f87"],["tags/Workflow/index.html","5baa795cf81df240363899c26ab4bcbe"],["tags/X-Frame-Options/index.html","39a449f799a7e303e723a0ebcd2ae07e"],["tags/aggregate/index.html","d35b976d6853e83918669b677b140504"],["tags/alter/index.html","a4c7570bbf5dabab9b18cc3707680204"],["tags/annotation/index.html","e5abe629f25c1c5695cc8b02f583b694"],["tags/args/index.html","8644e137c0991f7818e4ee14ca0fa47c"],["tags/buffer/index.html","62b33e4bc122cf3b2fc0552623d4375a"],["tags/cache/index.html","4e12a446ddaf7d74cbc27a5f59d23128"],["tags/change/index.html","7f6f3fe81cb067f39d0e2a213d5de4f8"],["tags/checkout/index.html","9fcf75175333ec733839e9d5ca3765f6"],["tags/cmake/index.html","819940fcb04699d566db6b678f3dee80"],["tags/collection/index.html","656931759eeb0783277fecd1a1722044"],["tags/component/index.html","416783a1387e07d8435fa737c0d64d1e"],["tags/computed/index.html","47ef444e00d79e8127e9f11d108dbfb7"],["tags/create/index.html","e17055a17f38a54a32b6e438f10f6226"],["tags/database/index.html","d7fb29fd4f7f7f5cdb55ef2fa7eb855d"],["tags/df/index.html","4ec8deaca7128dc1e52d43d8d90e7a94"],["tags/diff/index.html","04023687c0365a31deab5533452ceb3e"],["tags/double-ampersand/index.html","21272da45474a5d62a5c9cf4c002eac8"],["tags/double-vertical-bar/index.html","2dc4e6da3b4f83ac6673ec4c2187eccd"],["tags/driver/index.html","4152bcc00efb7fc912fbbc45067337f5"],["tags/du/index.html","fa32a215439b190d2b589d9e1143f9a9"],["tags/fast-forward/index.html","95a2a076c7f108ca58319ff8e9a2c179"],["tags/ff/index.html","159421b176e5cd1778f05dae16b674ca"],["tags/font-size/index.html","0570f9defccfd47a4139384528f0e758"],["tags/font/index.html","f0ce98d6eea8443efb4f1c470ce5f75a"],["tags/free/index.html","2e2e2ee14ba94b6a3ed80c1644207cb5"],["tags/git-branch/index.html","6275db547f45c65732ebd9f2a1726a13"],["tags/git-index/index.html","2b9631437efadb046b50c903c4eb37a0"],["tags/git-merge/index.html","3a62e79d9e8d9582a42fe4019b08943a"],["tags/git-pull/index.html","8b327b3e8b21fb03cca4b106829c1349"],["tags/git-reflog/index.html","d9467b8e688d5c2f065d0439f5897746"],["tags/git-reset/index.html","6ced89e7348251048b7638de74880c61"],["tags/git-rev-parse/index.html","7ec232d3552963f55ca0fe9564be2855"],["tags/git-revert/index.html","d77c7c2593248a7e025122f1ea944ab5"],["tags/git-tag/index.html","54364cb1018c68a005b5b834e14d76db"],["tags/i-e/index.html","e2de25b19e9d1a90cc1edf6ddb829e3f"],["tags/iOS/index.html","c6a8ce23520792199fdf423b58e14336"],["tags/index.html","ddef0fc45b5391b1040e2282cc83f6b8"],["tags/inode/index.html","edd351af758252fe328955dcaaceb6b6"],["tags/jps/index.html","5d6c1205b534c077afa3be3b743f088e"],["tags/kwargs/index.html","754ec6550390fe8b33be4621560ab1b9"],["tags/linux/index.html","9e1394c5e749927b983a0b70d9648ad7"],["tags/mac/index.html","682b99aa16fc4d69335745a001704d44"],["tags/make/index.html","9cd1c2be047f17218aee94db50ff3c02"],["tags/mapper-locations/index.html","42d9f1927a6a588f4cccd4c5422a6341"],["tags/maven/index.html","535d4269a2d2275bb94a780700918ac9"],["tags/microservice/index.html","a088b4ba1d5ba6039f6a2d3dd01b0285"],["tags/modify/index.html","0494d14a6e25e9aae9ad2e9bea3d71fe"],["tags/module/index.html","17d55deb0f7f73173fc93fffc9e99b1b"],["tags/nexus/index.html","c1aae69ca249b8aa627ca71da0b6f562"],["tags/no-ff/index.html","eb9c30ad0266b9bb7ba0dab6b6bde8b2"],["tags/package/index.html","9a2154d158b33a40b2d47cd5720c5ccf"],["tags/pom/index.html","d703a5430a40e10db395917bae9c8de1"],["tags/rewrite/index.html","b17149984918019051825f5af90d9dd3"],["tags/rm/index.html","78e358317361581f5a2a1ae28c904522"],["tags/schema/index.html","50dfe7b08007fad487aad3d6d052379d"],["tags/semicolon/index.html","671c6da20ca7fe6d6aba4e754fc950f0"],["tags/shell/index.html","3a58bbc9c316be2e776a890020d76d56"],["tags/soa/index.html","d2e5851d104292188d76f55b82f53e81"],["tags/synchronized/index.html","7335db7367d65fcc7fc0a2a6da2473a5"],["tags/this/index.html","37853641e816aad7864003e4a499aeef"],["tags/tomcat/index.html","c023fb8937822221bde37a6b17873b5c"],["tags/top/index.html","17f49b74d11abc68720625816732b641"],["tags/true-merge/index.html","b841603311cdf3be81c1a64d1ebaed1a"],["tags/url/index.html","85bfac17e5afc02f124c3738b55a9c17"],["tags/vim/index.html","21b941a95ea63345123d46a1d2bf1ea1"],["tags/windows/index.html","e676f2cc2e7e63398ff8c9208bec38ed"],["tags/一棵开花的树/index.html","abda9c161c92f275dccaa1de31603420"],["tags/主题/index.html","21c8c309cb7f6cfa62a27415cb20dc66"],["tags/二叉树/index.html","ed7b7f8a9d0cc8380b73767c700f3c44"],["tags/介绍/index.html","25b70949e73dc21c0f0314c0ca7f552d"],["tags/代理/index.html","4385337a44ff92947f78fd83ad2be8d4"],["tags/以太坊/index.html","6b75b1b96837591052fe51efccf1a151"],["tags/依赖包/index.html","a3ab61373918f93330826c8ce791c9ee"],["tags/修改/index.html","3dd615f239b080a808e6130b8c015e70"],["tags/值传递/index.html","4fa8d1a5b6565b4638a7d59690470360"],["tags/冲突/index.html","9fc7394bd801a735423e1cf87747a771"],["tags/分支/index.html","a702a062ae1d824ccb6bfb2975828599"],["tags/创建/index.html","0a62ca142188c2b25d5cb08c617d4999"],["tags/创建数据库/index.html","6de16480228c0b5ef6913ef1c4363c88"],["tags/区块链/index.html","3e504def805788b9542ea14bf9301c15"],["tags/升级/index.html","2ee244a799bcdd6e3211565a4d8f84f1"],["tags/参数/index.html","2cf6b78c5c600d494b346d82f1ed4750"],["tags/委托/index.html","a54a6ca472eff60a0a894970c425d3ea"],["tags/存储/index.html","15694fa9fc7456a04b2430f9409b3bf3"],["tags/存在/index.html","c5540eac1b11faef93bbd070459e2a24"],["tags/学习笔记/index.html","dd451402e32c009c1128d66b4cdbdd9f"],["tags/实例/index.html","97f56a193d4f8c9af35c36f5e604b870"],["tags/容器/index.html","0655a13597b5b1dfb50105db1edca035"],["tags/工作流/index.html","037ca57f8d44aa79de1d3f9fe0da5cd0"],["tags/工具/index.html","75605c0364ab483f759376df89465711"],["tags/席慕蓉/index.html","f5484554f902c386e5c09358ffca4d50"],["tags/异步编程/index.html","0f7fddc650745145708c5e96968f09d5"],["tags/微信/index.html","ca589230e14da0883b75fc7d89ad2615"],["tags/插入/index.html","193c94d6d75e696a8da867ad4a49baf1"],["tags/数据存储/index.html","317a5dd557cf2b12ba427c8804ae9b0d"],["tags/数据库/index.html","d363c0a6c77d07761a3270ba14f01cd9"],["tags/数据集合/index.html","46881a5325e404b8aaf5f101eb3f4d54"],["tags/数组/index.html","51131e2b7b29ae442df2d0b37b742d0d"],["tags/文档/index.html","a36062a80b86f036b3aef91d7cc789b2"],["tags/文档流/index.html","9ed8e242d6a9ea20e8c13b403e7adb3f"],["tags/智能合约/index.html","a5af0314e217b86196371f45977aabf6"],["tags/标签/index.html","7902d49018dc21e561e753999258f11f"],["tags/模板语法/index.html","68604100caae4ec23d914c45e97ea00b"],["tags/比特币/index.html","9371ae2215a03e557795443f5ca53e35"],["tags/波浪字符/index.html","692aff7acd958681b53eddefd50d9597"],["tags/注解/index.html","ef4cf17a6a29dc896c3975bc9070f40b"],["tags/用法/index.html","5018d782cb8f2b0e35b91aa44ec2256d"],["tags/穿透/index.html","f089e27fff5c6222f2184369e0150a57"],["tags/端口占用/index.html","78185af4fd43f089be098e7ebec269b5"],["tags/笔记/index.html","000b395155a0646d3cfb496479337824"],["tags/符号/index.html","50a9129fe36016ff10544ec8e9f7e22b"],["tags/红黑树/index.html","e364eae552536b8b134ac89809240d14"],["tags/组件基础/index.html","08a8ec60a6bfce7a52071bc2c2019b9e"],["tags/绑定/index.html","47829e4aba745e507e2c6dbf824997d6"],["tags/编程/index.html","6c0a4be0df8a174275079347e7a9cc27"],["tags/职责链模式/index.html","173abe076be94d4a3773787e39d57ffe"],["tags/聚合/index.html","c2eb493da0e107173745ede077d36ac8"],["tags/聚集索引/index.html","faa53ac2bb1c01ac3fde0ee0658d314e"],["tags/自定义指令/index.html","fcc403d10dd02a433536c07c154cac58"],["tags/计算属性/index.html","d04a4b5d9ed4c5ecb818054db4461dfe"],["tags/设计模式/index.html","e5a64b9c0dd1fa933e860aa7e25d573a"],["tags/进程/index.html","b1536b56a0df818b7aa881a2b7c7aacc"],["tags/远程仓库地址/index.html","8204a674a7e7bcb9338106b098fac6d9"],["tags/逻辑操作符/index.html","861c7f2419c7c37a6f512cba785b5a36"],["tags/部署/index.html","df28f426973bb1ee149fda2879c06353"],["tags/难度/index.html","0629b7f5f4865797fc0cc24e90a4e2ab"],["tags/集合/index.html","a17773d74ce52d77029e37c255cb9eca"],["thinking_in_programmer_life/full-stack-programmer.html","0ea2b301af7a07e24f0a3266cbcf4735"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","977a049fd610b80675813c228ea9baf0"]];
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







