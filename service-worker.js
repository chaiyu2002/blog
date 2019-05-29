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

var precacheConfig = [["Kafka/kafka-introduction-note.html","7f7a2bf21c971b01a5c106137a832075"],["Kafka/kafka-storage-principle.html","f168a132a3bb0673a14ecd267c4c4348"],["about/index.html","2cda4e013bc971a976ef8f78c0c5c4b1"],["archives/2018/06/index.html","30184e0df765115a5d71149352dbdc71"],["archives/2018/07/index.html","5b8664b8e9969a3c8a1e165831500ace"],["archives/2018/08/index.html","3399b521ad92d5c5e0e5e2fc6e0acecb"],["archives/2018/09/index.html","ae97c04d76855515e6265623aefb320e"],["archives/2018/10/index.html","224011a3b88092c4a0bab7920bbac3fc"],["archives/2018/11/index.html","9792899433803b8f2f1829378d118398"],["archives/2018/12/index.html","ef4073dc915153a8c6afe3b1b0e64bad"],["archives/2018/index.html","6fc18888546e56bd18fbf1983ac0fd7f"],["archives/2018/page/2/index.html","468683c91fd69ea57cd51742b6c85ba8"],["archives/2019/01/index.html","fbe45e240daa8267672bf738b08db324"],["archives/2019/02/index.html","b561641c6124c535647ba49e772ee3fb"],["archives/2019/04/index.html","032e43eb81602a113ebd92efa4303f19"],["archives/2019/05/index.html","f527f92d18ba52a9d814ef2fceaca3b5"],["archives/2019/index.html","4f12db14e377717f4ac10e0d3ae6376b"],["archives/index.html","096ef0e666c30ce2940d1b860f56afdf"],["archives/page/2/index.html","a202aefb7925648471387cdd4535f5fb"],["atom/index.html","c4515399323c0adc9696b305f3fc5dd1"],["blockchain/base64-base58.html","55900a962d58df6bd0e6ecb90bb8b68e"],["blockchain/bitcoin-data-storage.html","4dfc8190a3edffa63789a6cc17e2b5ca"],["blockchain/bitcoin-difficulty.html","72e520ede1daef41a24f315e935970e9"],["blockchain/block-chain-ethereum-contract-program.html","ed06313cbc011e6777e9694f041030b4"],["blockchain/ethereum-programming-introduction.html","5a09af8e1afea09713d4b4497db2b6cf"],["blockchain/ethereum-rationale-introduction.html","f155cd944cc6f4999c85109486b7864c"],["books/index.html","6ddd7fec71157857fdd04a63fc70b9b4"],["categories/Blockchain/index.html","888423febbd4fa87033bfd051a1f8175"],["categories/Blockchain/以太坊/index.html","7c11ed824d4cc2a7694241607d2d768a"],["categories/Blockchain/以太坊/智能合约/index.html","cb59b268d5d5dccb8d2279f1293fc9cf"],["categories/CSS/index.html","fd5a29ae5132d528f1b6161209373f1d"],["categories/Design-Pattern/index.html","712cf4e33c6f5520b14bac1d7f284073"],["categories/Git/index.html","fdc08cfdd5f8f4ad301dcdf0101b82e9"],["categories/Java/index.html","fc3ed1990ca5edb71458c8e3a9c87520"],["categories/JavaScript/NPM/index.html","2c56707e32eaf450e32c95f5e188047c"],["categories/JavaScript/Vue/index.html","0b8374c38097f66a5cca1fa0f2fcf241"],["categories/JavaScript/index.html","d16e568a03e304e20e8c490daca6b9ed"],["categories/Kafka/index.html","5064974387f1ac1a5c5e4b8c6570d0ce"],["categories/Linux/Shell/index.html","c6f087a311909d40359c001f67c08686"],["categories/Linux/Ubuntu/index.html","31ac157f093295143c2fcc2e047f2c29"],["categories/Linux/index.html","cc2ccc06886cd9f4e9592b6f2a16a5b6"],["categories/MongoDB/index.html","342eae02df7db9299fdd09f80686d774"],["categories/MySQL/index.html","07f9117efafdf3df1dc38d2a5c54bfe6"],["categories/Python/index.html","eca27c771d4ee57a59ece57b5a63f1e7"],["categories/iOS/index.html","8d5b30836df6c19c7db2358970ddd5d2"],["categories/index.html","5b4e9694fca7d25d05d4a3e7a4dc4d30"],["categories/微信/index.html","e22db2fc7d8ac7af15e44782d458dc9b"],["categories/杂记/index.html","70e2703d97a647d331382c619ab41ab1"],["categories/程序人生/index.html","8d1199eda732c7c0675004e69e3161b3"],["categories/计划/index.html","7242e044f6e69f24570a53c33501fbce"],["css/css-font-note.html","18162fa1db00e4a1caf1e08b7ba48840"],["css/css-normal-flow.html","27d9ea60cce98dead98868fbc0628ec7"],["css/css-sass-introduction.html","a4e153be7b17c9f3c6fc0a589a7d1f5d"],["css/main.css","e69b596c886d41d53db0880765da7005"],["design-pattern/delegate-and-proxy.html","0295e070145a5e95750c4f7340cd27c4"],["drafts/configure-multiple-vue-project-with-nginx.html","78e09030a2e52b2a11aee799ab1a8b0a"],["drafts/iframe.html","675f4db2e9b2c44a2275561346daf68b"],["drafts/record-re-install-mac-os-10-12-6.html","3e76bf477bf8b408213b21c3e5bc418a"],["essay/note-ximurong-tree.html","6f189f8af21c87d60ac99f3df5c3f22f"],["git/git-DETACHED-HEAD.html","6e110af78fdb76b161d523ecbb3b5080"],["git/git-branch.html","39732b54e8526771710fc26224cbb464"],["git/git-change-server-password.html","6ec6aee37c4f91b2bf488370e27c5119"],["git/git-checkout-1.html","0e89a38516b998873cf431b5db393f7e"],["git/git-checkout-2.html","808df0cd7b926edfaeae431b987b38a2"],["git/git-diff-m-symbol.html","987377dd9935ff982984854d4e479cd0"],["git/git-git-flow.html","38cc776e8362981e26bc28e5d235b471"],["git/git-git-merge-ff-no-ff.html","f5d2a1f56e66fccd451ec663ba63d472"],["git/git-git-merge-true-merge.html","285e6820ddc6748728048516ea2d7617"],["git/git-gitlab-flow.html","c88cc676a0f8eb5f973dd0d9e2b66d04"],["git/git-index.html","794266ee2d0d1ee7775ddcbd64ed10ca"],["git/git-merge-choose-one-side-code.html","9f186af46669e5b5a8c04157dbd4138c"],["git/git-merge-exist-conflict.html","18116e22d6daee35e8296950443de1fc"],["git/git-pull-1.html","c195cc5f78bbc16136e79392a48e3412"],["git/git-reflog.html","1def444a8aa33c9666a1661b5311935a"],["git/git-remote-set-url.html","d3bf9445c0b74d73272e72bea851ee73"],["git/git-reset.html","9d5bd097245ea9fa43ff452cfe585dc0"],["git/git-revert.html","135545d4ad7cba1de889e5c883eef0b9"],["git/git-tag.html","368694855af4f31d958729cab7a8c2ea"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","bb94809ba9eb9d019b148d3059b87e08"],["ios/ios-oc-kvc-1.html","5a161204f6a01df2401b431a41a6b20a"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","fc178207f58aa3b87d9abb7c0e9f4345"],["java/java-annotation-request-response.html","fea7db650a8dde22c28de068fa2d9d55"],["java/java-array-and-container-note.html","678fe2cb44b05d58cc8a13fbe74fbd90"],["java/java-deploy-resource-folder.html","8d703b0ee228ba4549868d332c5064dd"],["java/java-jps-note.html","a01b3df15ff066cfc6c79f92aa0466b3"],["java/java-pojo-bean-note.html","9bdb4c7af5b4cab37a7c9b7dc3ab56a0"],["java/java-shiro-note.html","7228b0e648dd3f43196f53040946087a"],["java/java-spring-autowired.html","429397499ecc49b7acfcb8a405b744c0"],["java/java-spring-configuration-bean.html","fac2a30bb324918f28096e5068f1cf49"],["java/java-spring-restcontroller-note.html","6304e1af8e9e84f0a8565a2846761590"],["java/java-springmvc-X-Frame-Options.html","1cf09e757f70fc314f238dbf708a184b"],["java/java-synchronized-note.html","3524002610a331adfdf5eeb23d503a57"],["java/url-rewrite.html","07d00a891294750945055acd46f17b19"],["java/url-value-pass.html","2b76f20cc43e6d12f6a2483f404e971a"],["js/js-logical-operator.html","b6995fbe95723ce7f137a0ec88912195"],["js/js-npm-symbol-caret.html","d7148714643b1baca897765ecc7353db"],["js/js-npm-symbol-tilde.html","21c9259746a42159cca5e6b3d0c428dc"],["js/js-this.html","815bee219ab780c0365dee8ad684f237"],["js/js-vue-note-components.html","7887dd076b339e69e828c43b703e5ba6"],["js/js-vue-note-computed.html","e1728d70674d6c369753df260f3beb4e"],["js/js-vue-note-css-style-binding.html","3cfaa49f422d46d2a329e36bf01b2b72"],["js/js-vue-note-directive.html","835967cb3b4ed3245713288c7e3907bb"],["js/js-vue-note-instance.html","4bab1268952ebe712b767a510b282096"],["js/js-vue-note-introduction.html","4482341ba902978adf40bac1f144f7f1"],["js/js-vue-note-syntax.html","d498ed33aeee30f7dcbbd62751b43f5e"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","6b0e88674e592229ba169a38e16d4159"],["linux/shell-command-df.html","0259cdbed05c90ce8e69767cb561746e"],["linux/shell-command-du.html","bd2755a3376ec5780d7fa216f7ef4391"],["linux/shell-command-netstat.html","93032606c9675228a44791e993cf5d03"],["linux/shell-command-sed.html","5fb6f44e29e2623d34f32ff769c0fa65"],["linux/shell-command-tar.html","688eda50daf38f5146576a47cfa312d5"],["linux/shell-command-top.html","3ae7d71f26a38761ef66b29fe1d75ef5"],["linux/shell-command-touch.html","32c686493bdb844b62de2b6a86ec6248"],["linux/shell-command-which.html","971ec4eb5933d88cac6624a69fa843b0"],["linux/ubuntu-user-add-delete.html","88dbb3bf245faf6303195181a84511db"],["mongodb/mongodb-collection-aggregation-introduction.html","30b7512bb42a6f1f10d49c769be33f0f"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","2bd405dc7c25e4e7612dbcdd41f641e3"],["mongodb/mongodb-collection-create.html","f9d086eea99bf9909a9e1d685b55bfbe"],["mongodb/mongodb-collection-delete.html","b71069eead7111a329e4273c113f4030"],["mongodb/mongodb-collection-find-1.html","06f99760e63a97749edd89adf9d1683d"],["mongodb/mongodb-collection-find-projection-operator.html","d5e1a058a802eeb5ab028d84730fca04"],["mongodb/mongodb-collection-insert-1.html","6b3b8550c56b8569a3a92c0941490722"],["mongodb/mongodb-database-create.html","4dd7aa8da0435d1b802e1612e2389257"],["mongodb/mongodb-java-driver.html","31c0e10f7d44a187896bb54665ee567f"],["mongodb/mongodb-schema-design-note.html","db6b941eabe27b4aeefcb14f4c7bd2ee"],["mongodb/mongodb-study-note-1.html","89bffee66580ba78cd23ea4a6e1f88d9"],["mongodb/mongodb-study-note-2.html","1766f3ef6cacd481dd8c4f501bab3e4d"],["mongodb/mongodb-study-note-3.html","d73d11eab0b7e8ea9f9da06fca41a125"],["mysql/mysql-ddl-handy-book.html","1644d68403ff435d944b7f45953dae01"],["page/2/index.html","3eebdee94b15f931fc2517110a1933c6"],["page/3/index.html","57ab729324037fa988e10761ae664571"],["page/4/index.html","a371fe8cdcb5d88eee42926a58e371ee"],["page/5/index.html","dad90d7e914edbe751b0d8a5c6f60407"],["photos/index.html","cd5456486b501b41ddcbff023f38a7e0"],["python/python-args-kwargs.html","dccc890783b29728a759c16e31e22c5c"],["python/upgrade-python-under-ubuntu1604.html","2e79690e03525926766435ffeeac212e"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","75d288c9cb1005f978a4597110f84dcd"],["slides/index.html","2e0618af74352988ea2857ed37fb4d12"],["tags/Autowired/index.html","feb937620028f04fadcbb859882423a1"],["tags/Base48/index.html","577c005e5e0795e72fd9d71c2391443f"],["tags/Beans/index.html","9827cc4000b117f4c94edfa1188d80e8"],["tags/CSS/index.html","985fcad81bc45ab97f475efba022a295"],["tags/DETACHED-HEAD/index.html","2a401af3047e646bb7ea73fb63098c6d"],["tags/Git-Flow/index.html","6bf6a86b0b01d8dc059b43caa1383b56"],["tags/Git/index.html","1d6e46fc16f5466d9ae4a34b633da273"],["tags/GitLab-Workflow/index.html","0b5334d7a9e9b5d858efa6ec09336768"],["tags/JS/index.html","816009a25928926e9a109124d73f3dda"],["tags/Java/index.html","c7a1ef669dfb49cd798a221726b95614"],["tags/JavaScript/index.html","fb007cfa1aab916eaca313f1b93b27ef"],["tags/KVC/index.html","ae90d2f0c7cd2c20b6675743701e8392"],["tags/Kafka/index.html","f0285618fa07ea976925e2b192b1ec6d"],["tags/Linux/index.html","7a1b1b22f76154974a7f52cd93cb0523"],["tags/M/index.html","f95d8cdff48a5377e377a605e855a720"],["tags/MongoDB/index.html","50b44aef174362ed4dd993d516b384fd"],["tags/MySQL/index.html","8d957e5513d953bef4994c447707f6c5"],["tags/NAT/index.html","4f1af2919672e20e28558f242614f52c"],["tags/NPM/index.html","5e75fcb8021a0742ef7c5e4f44ad7411"],["tags/OC/index.html","3d8260e72e24cfc5e048a83c2fcb0200"],["tags/POJO/index.html","1ccdbe955258774017ed7b02dcbef961"],["tags/Python/index.html","65ed0573fad26de75365330194475ac3"],["tags/ReactiveCocoa/index.html","5c589371ef3e31f882c54454fa4183ee"],["tags/ReactiveObjC/index.html","ce9076599d033d5025f4193e1c9b7c1e"],["tags/Repository-not-found/index.html","8c776d0643ae35cafb28bf92dd40445e"],["tags/RequestBody/index.html","f42c7a1ed4f996e9ff0048e5b86a673f"],["tags/ResponseBody/index.html","baaeba82423e17a71b0ae6c3e4865944"],["tags/RestControlle/index.html","a87bf5eef10abd1b7ae082d6b6676d0d"],["tags/SASS/index.html","fe9649ab3b1b54c745d8f1aa7d71d43d"],["tags/Spring/index.html","0dc7287c5e968b8e3b517bd4b1babe2c"],["tags/SprintMVC/index.html","0cbf6cfe48d4f0cfe96d4bcbc86a0354"],["tags/Style/index.html","f763df374e7d8be3cad9bd913a695e39"],["tags/Ubuntu16-04/index.html","b59dfad924a1bbb53c8f4ceda957ef05"],["tags/Vue/index.html","a0fef078cdf9b3c08edb16cf536bfdc5"],["tags/X-Frame-Options/index.html","65a7cb9d6a136b27072424841c99d2e4"],["tags/aggregate/index.html","df26f2f0764cd8bf8b1f8c165c0bb12a"],["tags/alter/index.html","4233363e946d036113c2d467e156323b"],["tags/annotation/index.html","a228361bfba04aaca143fc8fd8f302b3"],["tags/args/index.html","986678e9aa73a103a2cb9e13298e4282"],["tags/change/index.html","b50fa067b5b533f846744e05cc2d3246"],["tags/checkout/index.html","dfb2b41e1d49d5f77d090c737694dd2b"],["tags/collection/index.html","7c53f933ab771dfb9e574c9151a587c2"],["tags/component/index.html","40a9fbfab4867dcee8e4340723e28d20"],["tags/computed/index.html","0254bf9b7a874dbc129795293740b2d0"],["tags/create/index.html","c2f297652b3ab0e755285ffe741f05da"],["tags/database/index.html","f55acc9ba09ff04368faded7d2519dbc"],["tags/df/index.html","2f29410e5acd156fd0fbd1495493a9cf"],["tags/diff/index.html","c07177a4fd66a875ff66d1d0e975848c"],["tags/driver/index.html","9a9aa3fc020e0f6351924c73d035b974"],["tags/du/index.html","360aca59d6b9b03d924dfcfe6e5a249e"],["tags/fast-forward/index.html","09dfd80b81d6d3900cd93e968224ebdc"],["tags/ff/index.html","ef133391d85db38c64de071169b55d75"],["tags/font-size/index.html","ccc298525a480589cf2ce20145ab7a9e"],["tags/font/index.html","504730068c3e19038f5c84439c3d2dfb"],["tags/git-branch/index.html","27eb9d95ed808cc6f8dc3116291ff8b5"],["tags/git-index/index.html","a21c96a72e4c29dab9e81140414d59c2"],["tags/git-merge/index.html","b42c315f069f4ab14cd83c33556cb4ae"],["tags/git-pull/index.html","ffb42da5b1b9ab4d58d7d2c8e71222f0"],["tags/git-reflog/index.html","0f179d30924d11b0331e66c83002f367"],["tags/git-reset/index.html","424af1957c417751dcda1b6c363800aa"],["tags/git-revert/index.html","fbaea4ca42f8d15b430545a0e4a0a989"],["tags/git-tag/index.html","1dfe88e4db7eb7f108b6afe184bd1fef"],["tags/index.html","781e0e5092d10e1982c51c7031078fda"],["tags/jps/index.html","0852038fe8af43e7a131784f0fdec612"],["tags/kwargs/index.html","caa9fb2f6203f61626a439d359019288"],["tags/modify/index.html","c08b2b8fb83fcc492beef93547f7a4b3"],["tags/no-ff/index.html","af4e00671e4d8de50b32049b57efa642"],["tags/rewrite/index.html","36a60e2cda6e7e9619e0d3e5bf100fe7"],["tags/schema/index.html","97548314b0938c11c81ccba9f4e95a08"],["tags/shell/index.html","5bdc04664c1213370b914db2564689c9"],["tags/shiro/index.html","b21dfea03805960802cb89b3017a3fca"],["tags/synchronized/index.html","9a5f8d021bb96a40666874f4f3a4342c"],["tags/this/index.html","0904bdaf5941215117bccfb0220ccfa1"],["tags/tomcat/index.html","8106ffdf1bec85b2b7518b52f6998db6"],["tags/true-merge/index.html","5456146da8b91f93e14657d268499fe0"],["tags/url/index.html","9d0bb10ff3d7af0d5262892de6483ed5"],["tags/windows/index.html","1c47f14e8fb0fcd1a2603fa1b4776252"],["tags/一棵开花的树/index.html","f8a68502678e51217d334d3ca682faef"],["tags/介绍/index.html","beefdcbe68168d65031e3c77b7c1a2c0"],["tags/代理/index.html","cb8ffd24a5b0197e89fbad50d383b49f"],["tags/以太坊/index.html","bbbbaaab5de43921951b700fe66e46e6"],["tags/依赖包/index.html","bbc5926a8d74b33014cda8b39236ce02"],["tags/修改/index.html","aa46427194e821c1f9df94a055a85cbe"],["tags/值传递/index.html","20a1fd7957584b35f0d6c5e331dfe5dd"],["tags/冲突/index.html","f0233c24436edcec4b0088815f46180e"],["tags/分支/index.html","27b5dfbcfe1fc5f262eaeded85035b44"],["tags/创建/index.html","9b6e38455abd655f46fa19521006a19a"],["tags/创建数据库/index.html","41bcd7ef1539abea61c008f246826328"],["tags/区块链/index.html","e0470f6c4a19c4354816d3181ddc2888"],["tags/升级/index.html","cb7deaa4d214d916e0dce15a83293589"],["tags/参数/index.html","88db81f3f4d07610b1bf744a244870eb"],["tags/委托/index.html","19e38031eb9b5eb97d99a5ba0cce6322"],["tags/存储/index.html","3a9aa0bdca949319e0adff15ed7141bc"],["tags/存在/index.html","a62b63cf3a03c7bb6bc3b6e9fa6d0dc9"],["tags/学习笔记/index.html","bd07063d7c1c7d8664ecc3734d2929c1"],["tags/实例/index.html","be76b015e0c5f530bade556e85ca62b0"],["tags/容器/index.html","8c70bf004e7c38b8a26e596fdb6bb994"],["tags/工作流/index.html","fdeb2c384b626b5101d00a952481d0ef"],["tags/工具/index.html","972c7adc2b80bb31494b7182fa3ac05c"],["tags/席慕蓉/index.html","7423ba88b35ebee60578a831392d24f6"],["tags/微信/index.html","ed145166747c91f367f97407a109f763"],["tags/插入/index.html","b339bcdb11670a7998ac2aaba9b66ce4"],["tags/数据存储/index.html","8692022e926b12edf110b87e2bd9b4dc"],["tags/数据库/index.html","8b4d7d085fe2604d9f1e8d6c18aeaed9"],["tags/数据集合/index.html","ab0663f8988c37b276dcd0a5474a96ed"],["tags/数组/index.html","c421b04806972b9c0341258dfbfd7827"],["tags/文档/index.html","020c1aa178fddb2838af75da434921da"],["tags/文档流/index.html","422d7420daa6e56e56553df5923259de"],["tags/智能合约/index.html","9d6124b84b45917e7e333e78b13d612a"],["tags/标签/index.html","a50c26e9dfceea9b31a6f51c03e7b925"],["tags/模板语法/index.html","42683b3ef7b8452cb02ae34bd2a44b5a"],["tags/比特币/index.html","fde23810338acb6281349cacb4f9f4c3"],["tags/波浪字符/index.html","b8d666ec2822aad791b013f559fc8b2f"],["tags/注解/index.html","9913c0f8276df89cd2e06ac621e766be"],["tags/用法/index.html","fabe614f474e800f15544a00a55d04a4"],["tags/穿透/index.html","dc075ddd01a4f345210a69fec2176207"],["tags/笔记/index.html","7be562208ea583b82384ad9d7dea6ff0"],["tags/符号/index.html","a76c12fb3072f302bac947f00231dc42"],["tags/组件基础/index.html","02cf1308c2db55ca13b47e0f0a2531a2"],["tags/绑定/index.html","10e87fbfd76fbff0b8f60555d0229dce"],["tags/编程/index.html","44a547f64cc1393499c2b2117356b300"],["tags/聚合/index.html","1f1bed2feab3e778d5294efad9a2fc19"],["tags/自定义指令/index.html","4aeb323a66241cf3e27a9b09c9c97c12"],["tags/计算属性/index.html","9487a9dfc3be31e681528121a73ec9c8"],["tags/设计模式/index.html","a4bd2b275efa0bfa47e763e9b33713d6"],["tags/进程/index.html","20ab13ea1c5c8cac2fd69efebf4f1391"],["tags/远程仓库地址/index.html","e4c107ae5cd1f97e0bcae24c207414b2"],["tags/逻辑操作符/index.html","6b82dad7f14a38fbce84baece7a99138"],["tags/部署/index.html","7a042c66a187e972026a0115c7868add"],["tags/难度/index.html","dec40d6684a341c52dab9471e82cfe1a"],["tags/集合/index.html","754a7e643169e9160653b9cbbcce9e5b"],["thinking_in_programmer_life/full-stack-programmer.html","a74f12759001ca857f351b6e39c17df1"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","fac61de54ff040e4753ad7a543413798"]];
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







