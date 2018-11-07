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

var precacheConfig = [["about/index.html","84af9f48c7ae85c2e8348c43638533ab"],["archives/2018/06/index.html","4e7d34817fcd32e1cebee7dec7ce4253"],["archives/2018/07/index.html","e8803dca31b8e134eeb4b375942e95d1"],["archives/2018/08/index.html","8ff855996af4fb90d88d9cdeb82cd121"],["archives/2018/09/index.html","58105d97a9e6f295a70cc39647f75998"],["archives/2018/10/index.html","a6ac6a8f0b46a70055ccbed7f13a2196"],["archives/2018/11/index.html","fc64abc9ce771d3cd51db323ea35c168"],["archives/2018/index.html","7b7cc44b5e58a4c38be9c56d405ebe24"],["archives/2018/page/2/index.html","35732e3c3689fc5330aa976d6a957bba"],["archives/index.html","9d87a7c35a366cf4f04866d4b6b3fac9"],["archives/page/2/index.html","51087cac4f938f34d0eea38c52914822"],["atom/index.html","3419d02cfea8420b3ca567813e3d1efd"],["blockchain/base64-base58.html","57a6de9f7d9b9fd211ed7685274bed1b"],["blockchain/bitcoin-data-storage.html","45f70945858ba7fe761a002f0ab2225a"],["blockchain/bitcoin-difficulty.html","c977696d1373b3ccac3528b925405993"],["blockchain/block-chain-ethereum-contract-program.html","10e54fd97baeb0d804373481b391d3f4"],["blockchain/ethereum-programming-introduction.html","7f9d73b51ba67da7b13b5d054c1ae31e"],["blockchain/ethereum-rationale-introduction.html","f90af92449fa33b81c5a83472c9d161f"],["books/index.html","e51218921ef2c71bcf1c77387c86f085"],["categories/Blockchain/index.html","31c51516ccfa3c603cc0fd2e8400009f"],["categories/Blockchain/以太坊/index.html","440266b4d84ee7d249e6e5b697cffed3"],["categories/Blockchain/以太坊/智能合约/index.html","e028823287a19347abb10b4a21472441"],["categories/CSS/index.html","dd446ea52f61e2736ffb7b0d6a3925ac"],["categories/Git/index.html","8ddc1de8770251d06304944a597a2aec"],["categories/Java/index.html","916ffa7b76ff1ee018735fceeac789d7"],["categories/JavaScript/NPM/index.html","323c802094682096608691c566f557be"],["categories/JavaScript/Vue/index.html","4614a6a9cf8eb3d60450db44f88431a6"],["categories/JavaScript/index.html","973220181d8acbd813bdcfd1b8efadf7"],["categories/Linux/Shell/index.html","a7cba2d5c682ebac17f583f0ae15c96e"],["categories/Linux/Ubuntu/index.html","ec9c1d07b99033d5e8515d03b8fac2f8"],["categories/Linux/index.html","04955481996720217b475daa0fd25b68"],["categories/MongoDB/index.html","140ec26485b55dd825e4eb7651ce7368"],["categories/Python/index.html","e69ded2e2f53a111e02b2a2372bd61c8"],["categories/index.html","42a03dc14f65c37071af0cd00f77fb2d"],["categories/程序人生/index.html","5bddb20f41ce8b33dd1bfe592a7c7b8e"],["categories/计划/index.html","1692655666e4ca021e369d37957fbffa"],["css/css-normal-flow.html","5a7ae2f6421af693f6c9a47407d1ab67"],["css/main.css","cd95a43376877039ac31d130fe994051"],["drafts/configure-multiple-vue-project-with-nginx.html","4404f419e53b31a8e4eaf6e9057bb415"],["drafts/iframe.html","8296d61621f98ad15087fd0c64da0365"],["drafts/record-re-install-mac-os-10-12-6.html","1f61cf67712bd7903368877df6f9ece0"],["git/git-DETACHED-HEAD.html","306ffec486cb2cf1a43ae61d11db49a4"],["git/git-branch.html","bea3b162a1b18d785445530de8f988e6"],["git/git-change-server-password.html","1f997eb552d7ad0e3e8d0075aac33cc5"],["git/git-checkout-1.html","77e1e20693745c5a368161cfaf6e154c"],["git/git-checkout-2.html","38bd63e944480b428ed21303eae163ae"],["git/git-diff-m-symbol.html","9392413a20e18b1037f0ae7c53e53267"],["git/git-git-flow.html","01b9bbb7172bbf34c3e18b1cae5f2c74"],["git/git-git-merge-ff-no-ff.html","336ff72cbc3c14f84c390f885292492e"],["git/git-merge-exist-conflict.html","34ae5bb497a7da58e9480312e3e6c09b"],["git/git-pull-1.html","2cde43c8a0a515efd9973fb77ad0b043"],["git/git-reflog.html","3aefaf86560f360b151cd40d58856467"],["git/git-remote-set-url.html","6177707ddbd27227fdaabcf86c346ef0"],["git/git-reset.html","58413e9f0a56d2e2bd3f40a62ed94c81"],["git/git-revert.html","baf0e07261109733f6831e320f31d9ee"],["git/git-tag.html","85c1b7021f8b82e2116c53ba9e1ffaf8"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","9c86f35627c0ac1a573d0bc286739817"],["java/java-deploy-resource-folder.html","42fa0262fcb18d7b22491e12c39ba688"],["java/java-shiro-note.html","7968f91726def4c883c4419a16627557"],["java/java-springmvc-X-Frame-Options.html","b42e59a4091b6b6f655ced06bf296189"],["js/js-logical-operator.html","b4779ed48fc7f16e127bfc6d8ce42b89"],["js/js-npm-symbol-caret.html","251cc49d4101fe7a32d054d46d9a18e4"],["js/js-npm-symbol-tilde.html","7a392b6b7fe49b486ec301a811569309"],["js/js-this.html","087ac3d2e570581d14a31ece45f7c6c7"],["js/js-vue-note-components.html","845c7f8e861a8311bd9b559f3bdec371"],["js/js-vue-note-computed.html","fd0c5db88a11122b58eb8b4cf6218fe2"],["js/js-vue-note-css-style-binding.html","66bba6d4599e76c6c30a29f69eb028a9"],["js/js-vue-note-instance.html","c286a4dc07f8c3a6bc5cd7836f21907f"],["js/js-vue-note-introduction.html","578e0d20698d75a59267b64323a30cb5"],["js/js-vue-note-syntax.html","3ffba37aa05ba0e474587059464a4a22"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/shell-command-awk.html","3ec87e48ba817beba429064f89ca7572"],["linux/shell-command-df.html","cc47b0c90c78ae2f289ad20e569ad5f6"],["linux/shell-command-netstat.html","fc520fb688d76d078b1f93ee4a9c7efa"],["linux/shell-command-sed.html","2573854c5b45356e6596795c11129fb1"],["linux/shell-command-tar.html","a1219ba2b0b38c96299c077cc4456234"],["linux/shell-command-top.html","03801e9a29d1c53a681fd63a58d833bc"],["linux/shell-command-touch.html","d5228b9da2dcdeca175657354c5583d5"],["linux/shell-command-which.html","2cec5201d1a84808a95b8183a89fb6c2"],["linux/ubuntu-user-add-delete.html","bf170ee64f3a06a081ec08fca5f47d95"],["mongodb/mongodb-collection-aggregation-introduction.html","e1b0ec07dcb4ce2c04f049d8e5514124"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","73b1ecd3f1de787939bda4e560bddbbf"],["mongodb/mongodb-collection-create.html","1210fbce3bb2a02739fc588b2fe80051"],["mongodb/mongodb-collection-delete.html","648d9fb5145703c15b5a632d7af54f60"],["mongodb/mongodb-collection-find-1.html","e8e38daa9848d5942319307b10d93823"],["mongodb/mongodb-collection-find-projection-operator.html","75c54a4c015415798ba4f72c80cfcb12"],["mongodb/mongodb-collection-insert-1.html","98e347bc9566a2af6adf2f756485ac76"],["mongodb/mongodb-database-create.html","7b2a544abe4c764f393b9902efe93a2c"],["mongodb/mongodb-schema-design-note.html","0bf2d0d310d8835a3b72107337eaebff"],["mongodb/mongodb-study-note-1.html","4e32ee48303208dcee136999c85d6371"],["mongodb/mongodb-study-note-2.html","1ab8cebd2ad4058f36d19471f313f88a"],["mongodb/mongodb-study-note-3.html","244ea87c0bad539aa57a002a6d999f00"],["page/2/index.html","3d1ec4134467c330d141a4bc6348651a"],["page/3/index.html","05877e1a242b8d38f28c8a1470cea088"],["photos/index.html","f10b12b19679d47ef56d2ff61853ab07"],["python/upgrade-python-under-ubuntu1604.html","bfeb46c2f86ac137aced12a0c20a78ad"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","113e15b972842a39026e31189f97827c"],["slides/index.html","8f7bf66837bfa3885053bc6638b80ce5"],["tags/Base48/index.html","554c5ca17285aca1c277759b26ded19b"],["tags/CSS/index.html","122e1c996df6c546133538e5d2cff096"],["tags/DETACHED-HEAD/index.html","a34546ca4201a885002d386fa8c2b0f7"],["tags/Git-Flow/index.html","fe172997d8ec5c89815c5ea9ea7bdbf2"],["tags/Git/index.html","1c6a72b158cdb18408685fa8122bf49d"],["tags/JS/index.html","60512fc1d9bc9fbad328e9af13575975"],["tags/Java/index.html","e5f132753dd6bd80ac23bb501523ca08"],["tags/JavaScript/index.html","88c79f0fc2beb4555c815dfb11b4c98e"],["tags/Linux/index.html","f8a8d34cb14ebad1fe000aa73f495dae"],["tags/M/index.html","a6ab73c9a8326a784bbdfb4a6c2d1a69"],["tags/MongoDB/index.html","9f21c822747ce87e9a53794969c40a6a"],["tags/NPM/index.html","1b372bb74800812650b683d8d0fbd120"],["tags/Python/index.html","8df1c9dd5f0957726e886a90b9f6b0c8"],["tags/Repository-not-found/index.html","293c55e0f9f883d3a8ce136bc5070e67"],["tags/Style/index.html","c70e178f9cf1d6fb98c3f4cd89743e8c"],["tags/Ubuntu16-04/index.html","8462fcd764751e4f08f0d460af378d35"],["tags/Vue/index.html","5aa7e9b7bbfae43d63e6df1f7c8c59f4"],["tags/X-Frame-Options/index.html","273a246eabcd711fe98b74acf295d97a"],["tags/aggregate/index.html","1db8c12d00cf8dc3548ad0e3b1de99db"],["tags/checkout/index.html","fd92b71e018ff849cae89a6bea2314af"],["tags/collection/index.html","e42f8798e479effdbac72e568a40d757"],["tags/component/index.html","9159e02ff90af2b751a684bf5f51bb2a"],["tags/computed/index.html","1167f27e48a9cdc7f29b17f0830b936a"],["tags/create/index.html","c09c25ec84a0a8f572bf69a656465144"],["tags/database/index.html","4b4da326d76d14479f2f0bf3d6a387a6"],["tags/df/index.html","1a98829fb517c493e697a05a7d997d53"],["tags/diff/index.html","cf2f6233f889a22d19ab6f9d593ed272"],["tags/fast-forward/index.html","53c28d4a2f76ee1022f3517944cbcba1"],["tags/ff/index.html","52e9606bf119fc1739ef26c16fcd9da9"],["tags/git-branch/index.html","d29b8d1df790ab5bd130711d8eadee2f"],["tags/git-merge/index.html","89b869f22d2039cc0dd8fdce15c044e9"],["tags/git-pull/index.html","6e765cd3d7d70bb3e90acb2d77e88c87"],["tags/git-reflog/index.html","3444c1cf4993344fbb61e92ac0704bb7"],["tags/git-reset/index.html","59a8b4cb156f29d5963a534e068f1695"],["tags/git-revert/index.html","3ef4995b1d80d6ca2742f82023c272b2"],["tags/git-tag/index.html","7f76ff16f652fd2e1f7c8f4e711aba23"],["tags/index.html","cb8804092e5946481cf1468a83d2437a"],["tags/no-ff/index.html","e355f6fb4557e72913f5368b00cdd6ec"],["tags/schema/index.html","c50431c453d31a5cc2feca150848d23a"],["tags/shell/index.html","d0c4e0dea79f2722729affaf0a665896"],["tags/shiro/index.html","2ea226ef5787122cee48f6d90ebf52ad"],["tags/this/index.html","2d137a12b018128dd23557cfb4ad3901"],["tags/tomcat/index.html","ca7cb81271c2ce98a2df5a0fa5f31b77"],["tags/windows/index.html","437fcd3849844fec174038d9a92d3d95"],["tags/介绍/index.html","2eb3884babd8828b2c9be18c870a9c36"],["tags/以太坊/index.html","f1a8042abcde948db1e373ea16a678b3"],["tags/依赖包/index.html","1bee25a66ccf37c71db52fed88531ef3"],["tags/修改/index.html","105cc0c7ad9d6665ec03cdd25ecac62f"],["tags/冲突/index.html","c9f8e50a01c3cf0767c5b5e729d4afd4"],["tags/分支/index.html","187fbc89b780c95fda93ac212d4e4994"],["tags/创建/index.html","6323548ec00318205cc0ca03bce6001d"],["tags/创建数据库/index.html","3ae1340fc29a7c8b007db1145e5b17e9"],["tags/区块链/index.html","0006acf22c9292cb7a5c60fc95033fb2"],["tags/升级/index.html","e70980409df49cf421221a7b7069a145"],["tags/存在/index.html","32e6d3a9615fa6573956eac9343cbcb0"],["tags/学习笔记/index.html","b578a8e0536b4667384d0d360221115c"],["tags/实例/index.html","5a7a1ec35948f2b2c50012c2d2e7d583"],["tags/工作流/index.html","2acc51c63c567d548caf56a32ac64363"],["tags/插入/index.html","53246b82c358bb3f2048fe60e76ccc2c"],["tags/数据存储/index.html","ae397f4123da8bd15209ae1fcfe92a58"],["tags/数据库/index.html","99f083eb19face94daa83010f6d65d9f"],["tags/数据集合/index.html","8d97898db2bbb2d1be92d22daf36d010"],["tags/文档/index.html","4a292de349965d80b89ee09d3cd0b956"],["tags/智能合约/index.html","98354cc9bfe75fe3c2f6ef121d45b702"],["tags/标签/index.html","fe15fd9fd6fc3e48f081efe46f717917"],["tags/模板语法/index.html","0493b53231cf80b6577b37ace2b8a27e"],["tags/比特币/index.html","e2bcc66dd9e2cec7e081ebb50823aa98"],["tags/波浪字符/index.html","c5d3fad941d45fe95513d86603bc5f24"],["tags/用法/index.html","29fcbdf0f17a7a71a2f415be3ec3cc7f"],["tags/笔记/index.html","94a3c405397f6ac7c60aa07c6c30e772"],["tags/符号/index.html","705b82e25ef7e69c431717a0604491b0"],["tags/组件基础/index.html","673b34f57acaaaa6594c6dc58a89c881"],["tags/绑定/index.html","e1b46635e13ebff70211bfeab08aec86"],["tags/编程/index.html","e5781f47aacc8b4daf66fc3f995dd295"],["tags/聚合/index.html","934a2bd30f7468efb0a83edca24575c2"],["tags/计算属性/index.html","58926a36cd19e1ffdc9583e8c6ee998a"],["tags/远程仓库地址/index.html","0e7236f2f10787ab5be09f8ff9415d68"],["tags/逻辑操作符/index.html","bc593f87e2041cc3595a84bd8812b858"],["tags/部署/index.html","8c95d59f5d708abbc70723bac5564eb8"],["tags/难度/index.html","0b8c38eca19c7a55ff8151be9be25677"],["tags/集合/index.html","4866c92baf5293c8594ad999fef21691"],["thinking_in_programmer_life/full-stack-programmer.html","7b9fffb8797ca530f4c990da032b0290"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"]];
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







