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

var precacheConfig = [["Kafka/kafka-introduction-note.html","37a6259cc0c1dae299a7866489dff0bd"],["Kafka/kafka-storage-principle.html","37a6259cc0c1dae299a7866489dff0bd"],["about/index.html","0113eab45ffe3de40d61c57b4ffb1ddb"],["archives/2018/06/index.html","7e92f5acecfcb8cb0a68ebff31ef9208"],["archives/2018/07/index.html","b37cc63107442ade914bd089143484fa"],["archives/2018/08/index.html","3bce2d1ae345948c7f3ef4be3f7570df"],["archives/2018/09/index.html","4308683aec9566f6fb3a78510282aa5a"],["archives/2018/10/index.html","65d9743bb6ac343a5bf2432422e1933f"],["archives/2018/11/index.html","3c89e3000ae0405a129c5d5a6ecf9c9c"],["archives/2018/12/index.html","351d6044785f3d105335afe110916e1c"],["archives/2018/index.html","2056e2a23ba1d0750348dc8ce8a7a35b"],["archives/2018/page/2/index.html","a404b02965275786ec1b48eb252c7cbb"],["archives/2019/01/index.html","9e6b5defa9bbf01d3247be6552e79241"],["archives/2019/02/index.html","3206064447ae38994610c0a8f38490b7"],["archives/2019/04/index.html","c5ecde32dcd06ae9f4913fe4c3c9bcbd"],["archives/2019/05/index.html","c9326ec5ce1900525f1122e2876d7f04"],["archives/2019/06/index.html","ad026a72639cce8924238b87be8fa70e"],["archives/2019/07/index.html","919935d91717ca6d65660e31f7236482"],["archives/2019/08/index.html","6d1573208f631cdab193975b685802c7"],["archives/2019/09/index.html","cda9e9a10cc366836fe43f91faf6b86a"],["archives/2019/10/index.html","1f1af122a071e0eacd4b86467d0558ad"],["archives/2019/11/index.html","17fee2dccf8014d7edb1be199f4ab02e"],["archives/2019/12/index.html","9c697d2b01a8ae7dbe65fde0f82c0669"],["archives/2019/index.html","69d279f29ffa67942de87ad76ec9440a"],["archives/index.html","78746f40e6020b9ea901a3686ac990c5"],["archives/page/2/index.html","51ac287dc1b9a58de850d3cab3d208a3"],["archives/page/3/index.html","878ca0ff21151057459c60593a45f45d"],["atom/index.html","65db290c0d24da607ef5918094d3e4c7"],["blockchain/base64-base58.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-data-storage.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/bitcoin-difficulty.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/block-chain-ethereum-contract-program.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-programming-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["blockchain/ethereum-rationale-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["books/index.html","a1cea6f2d692dd42e82bbbbeac9447fa"],["categories/Blockchain/index.html","a83480c6099b62968d7704829ed983a6"],["categories/Blockchain/以太坊/index.html","93c1f5b2ed96804a96a74cc78b0960f1"],["categories/Blockchain/以太坊/智能合约/index.html","b60aa45799b4cded9ea1a7f5e614a27d"],["categories/CSS/index.html","b51d8e39d34b2d3775d8768049168b8a"],["categories/Design-Pattern/index.html","926b1dfc20d51da053d7e95595ea13e5"],["categories/ES/index.html","6c2505e14d9c9bc6a4631e9ca836196e"],["categories/Git/index.html","d00d751c7d63d380495566e18609311e"],["categories/Java/index.html","dd037468e9d6a29442a4a359af375c61"],["categories/JavaScript/NPM/index.html","3a70443a6332c6adade06a6fca300815"],["categories/JavaScript/Vue/index.html","302622b48d6a6469b0ac32db28f72e70"],["categories/JavaScript/index.html","6daf6f6751aef4b86942667ab0f84589"],["categories/Kafka/index.html","56262e2c20e4d88a6568cd50722b9799"],["categories/Linux/Shell/index.html","e6b3642669ccfdb8405fbe8408f208a9"],["categories/Linux/Ubuntu/index.html","644f84870c65f0d0a39f9abec9e5527c"],["categories/Linux/index.html","29e0eb9e8db0d29042f8606e5123348e"],["categories/MongoDB/index.html","50f154ea36b90cd7a55e69bbe55efa82"],["categories/MySQL/index.html","99caad36a7a0ba5970b44580790b946b"],["categories/Python/index.html","00b488627b100856d1093a2ecb1a220d"],["categories/iOS/index.html","2ce327e83293a6bf0107989ee688cf99"],["categories/index.html","cb072b2d1d4d3f01f7d6149eb11c6045"],["categories/微信/index.html","2dd4b7a9a068ae08897d323d1a18247c"],["categories/数据结构/index.html","dad49402d23203f40e37e31e01a8cce2"],["categories/杂记/index.html","930b1dbfbd7839cc0e7d75091e3f2c10"],["categories/程序人生/index.html","c3d991f09b7d37a078368144241e102d"],["categories/计划/index.html","0207183772894865c10bdb629568cbe5"],["css/css-font-note.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-normal-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["css/css-sass-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["css/main.css","3d5fbac8305ba4655c8dd07ee0265d93"],["data-structure/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["data-structure/Binary-tree-note.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/chain-of-responsibility.html","37a6259cc0c1dae299a7866489dff0bd"],["design-pattern/delegate-and-proxy.html","37a6259cc0c1dae299a7866489dff0bd"],["drafts/configure-multiple-vue-project-with-nginx.html","6f32527e02e6564af693b37b183ae033"],["drafts/iframe.html","c3a28a5c8b34e75b730a7434a04e787c"],["drafts/record-re-install-mac-os-10-12-6.html","0da4929a3d3e4a3cf7fed455990b4a46"],["es/restudy-es-note.html","37a6259cc0c1dae299a7866489dff0bd"],["essay/note-ximurong-tree.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-DETACHED-HEAD.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-branch.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-change-server-password.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-checkout-2.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-diff-m-symbol.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-ff-no-ff.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-git-merge-true-merge.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-gitlab-flow.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-index.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-choose-one-side-code.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-exist-conflict.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-merge-note.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-pull-1.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reflog.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-remote-set-url.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-reset.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-rev-parse.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-revert.html","37a6259cc0c1dae299a7866489dff0bd"],["git/git-tag.html","37a6259cc0c1dae299a7866489dff0bd"],["googlead2609582eed0638.html","12cedda440c04dd34fb19bdc8075290c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/avatar/2scribble.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355612034.png","fee12c0bd2b2eda943f57a5fd9188e96"],["images/avatar/FaceQ1500355720977.png","5f13ba734b4fad42f08039d4643df43c"],["images/avatar/FaceQ1500378393950.png","0f289bf8475050cc0c2b669196c32cc8"],["images/avatar/FaceQ1500378683692.png","f4c9eafbdd795e116f59a3c3eba05e7b"],["images/avatar/FaceQ1500378691493.png","3c68743d9a51421bb3208b446f6f1552"],["images/avatar/FaceQ1500378720784.png","5f80639dc44364c87d708f22d213b43e"],["images/avatar/FaceQ1500378863705.png","1fbe486f016de41205aa1b6260460fdf"],["images/avatar/FaceQ1500378867481.png","9ebca68076068e3819af10957ab2d70c"],["images/avatar/scribble.png","1c2ac11d8866f2fdb7fa94d95baba18d"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","b50f11a11cf03561c2f70ae76bdc0322"],["images/icons/icon-144x144.png","4ba014295f8a81e6b55af2c50b8b56a8"],["images/icons/icon-152x152.png","07d8db97f20a90ee19485e2302f8aaf0"],["images/icons/icon-192x192.png","17001cadb99f64b40a125429d771a855"],["images/icons/icon-384x384.png","f50cf43e4446d2caa5ac812eddfee998"],["images/icons/icon-512x512.png","93c9c76a489c5121d6d8b6cd7804ce69"],["images/icons/icon-72x72.png","25119636dbe854290b95ecec978fb0c6"],["images/icons/icon-96x96.png","bce1e7f524666a2f211b13b6efa76763"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["index.html","fb2fb227cf58f562b64aecac1c8e545b"],["ios/ios-oc-kvc-1.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-reactivecocoa-tutorial-the-definitive-introduction-part-1-2-note.html","37a6259cc0c1dae299a7866489dff0bd"],["ios/ios-themes.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-annotation-request-response.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-array-and-container-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-deploy-resource-folder.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-jps-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-maven-nexus-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-pojo-bean-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-shiro-springmvc-integration.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-autowired.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-configuration-bean.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-spring-restcontroller-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-springmvc-X-Frame-Options.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-synchronized-note.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-value-pass.html","37a6259cc0c1dae299a7866489dff0bd"],["java/java-vo-dto-pojo.html","37a6259cc0c1dae299a7866489dff0bd"],["java/url-rewrite.html","37a6259cc0c1dae299a7866489dff0bd"],["js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["js/js-logical-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-caret.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-npm-symbol-tilde.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-this.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-components.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-computed.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-css-style-binding.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-directive.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-instance.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["js/js-vue-note-syntax.html","37a6259cc0c1dae299a7866489dff0bd"],["js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["js/utils.js","432db0ab3928890383447c0566927d39"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["linux/linux-delete-by-inode-note.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/linux-top-buffer-cache.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/mac-find-port-occupy-process.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/make-vs-cmake.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-awk.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-df.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-du.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-netstat.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-sed.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-tar.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-top.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-touch.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-command-which.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/shell-difference-semicolon-double ampersand.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/ubuntu-user-add-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["linux/vim-copy-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-introduction.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregation-stage-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-aggregator-accumulate-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-delete.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-find-projection-operator.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-collection-insert-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-database-create.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-java-driver.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-schema-design-note.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-2.html","37a6259cc0c1dae299a7866489dff0bd"],["mongodb/mongodb-study-note-3.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/B-tree-note-1.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/clustered-index-mysql.html","37a6259cc0c1dae299a7866489dff0bd"],["mysql/mysql-ddl-handy-book.html","37a6259cc0c1dae299a7866489dff0bd"],["page/2/index.html","68dfdaf1c8f9762b3b66520c0bcc37da"],["page/3/index.html","7cbbcdf91bf9bad7d7c634fc20aefb54"],["page/4/index.html","c36a435f740d45603dbd639a9a9be441"],["page/5/index.html","328b1d3b094a130a1d6b7eac0da18403"],["page/6/index.html","8bbd27bbedd3262dce2ffd5c4f7d3a9d"],["photos/index.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-args-kwargs.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-async-program.html","37a6259cc0c1dae299a7866489dff0bd"],["python/python-package-module-note.html","37a6259cc0c1dae299a7866489dff0bd"],["python/upgrade-python-under-ubuntu1604.html","37a6259cc0c1dae299a7866489dff0bd"],["resume/css/app.8c816fcf8aef253edb4e8ff26f3427f9.css","8c816fcf8aef253edb4e8ff26f3427f9"],["resume/index.html","36f436f9d3a2d02ce5b841ce99a44e25"],["resume/js/app.acbddb68268cee48be2a.js","94ff473f27927e2692f1d3e92d18ed01"],["resume/js/manifest.5d56937d88b403e2a1a6.js","4f1f4fd58d7ee2a53ceca29107a1b3cb"],["resume/js/vendor.9942f0b07587c7901880.js","b5c5131112d730ec79080164e06253bb"],["scheme/2018-10.html","37a6259cc0c1dae299a7866489dff0bd"],["slides/index.html","ddb14e9c3a28b5ff0b7d4f2cf919aa01"],["tags/Autowired/index.html","893ac7ab898de6f04beb5e24e9f0d489"],["tags/B-树/index.html","72ae7a031ccfff0376b1a4ab831940e9"],["tags/Base48/index.html","3a83e4f7f2ecdbc095d46e3572210a5f"],["tags/Beans/index.html","96c1791ff9d3bb12d468bc3611e68fb2"],["tags/CSS/index.html","4f6e14dda232aac4321f77938f73ad4f"],["tags/DETACHED-HEAD/index.html","93d54c24677fff4f6f4feb578f10650e"],["tags/DTO/index.html","7e7620e344bb2562e2fd2d8a5ec8c557"],["tags/ES/index.html","af0b224e53a08bdbae45e8d06694ae75"],["tags/Git-Flow/index.html","c01cde4abbeeaeb563aa84584bcd5e4a"],["tags/Git/index.html","a8df5e8bb6126c4cfb2f016ce24089b3"],["tags/JS/index.html","c1c02aee68b503cfe32ace09a8207127"],["tags/Java/index.html","5fb6b2850a1514cc4f5a2a8d8c6e3cd4"],["tags/JavaScript/index.html","16ed4be6935a64c2981a84888bef754b"],["tags/KVC/index.html","f7b685f8be38c6f4fcdeff50c2d5128a"],["tags/Kafka/index.html","604d7fafb5c20277d9da6f24f7dd29fb"],["tags/M/index.html","fd8fe72933a495bd4d3c98e489089bc4"],["tags/MongoDB/index.html","4005f04721a1ea156a5091425ecb9b93"],["tags/MySQL/index.html","ab8c05555fb3689b3ee6a2892ce98a52"],["tags/NAT/index.html","7bd5238ba72d9ea9d2d44763fa0ff22a"],["tags/NPM/index.html","d9230dbb3553a8650669d06fe13fddc2"],["tags/OC/index.html","69d2fe1ec43de3e59e093c19352031d7"],["tags/POJO/index.html","638e596202957fcf24eeee703e030ae7"],["tags/Python/index.html","06cc93080295af0f0e29b93797d03225"],["tags/ReactiveCocoa/index.html","f77bff8188823e7e3bfb6c1a4fb29c4d"],["tags/ReactiveObjC/index.html","92ba1a15cd05539ebd8a6cea527851e6"],["tags/Repository-not-found/index.html","84efe81621d9192f5f88e6ef3c28a6bf"],["tags/RequestBody/index.html","806fa20c60e5cdc65ee81f1232fcb5fa"],["tags/ResponseBody/index.html","409bb0c766b82ec05a2b9fdfa4fe10f2"],["tags/RestControlle/index.html","cc6615966a8713af8b2834c073a45d96"],["tags/SASS/index.html","6feda939ff3a3ceb32d03ea37c58b736"],["tags/Shiro/index.html","eedd438f17677c59a9f5d8b539c44a4d"],["tags/Spring/index.html","267958296f97722292e16d8d7fc4639e"],["tags/SpringMVC/index.html","f171b9ba2878e01727a7a87a5fd39861"],["tags/SprintMVC/index.html","49da36a7f7a87093eb72064b6644f93d"],["tags/Style/index.html","ae4ea2f812ea18e4a2f0cb43e3323677"],["tags/Ubuntu16-04/index.html","f806fb5a362e6385240ca5ceb7afeb48"],["tags/VO/index.html","7541c2a65f77fdc744493f4c388f9ff8"],["tags/Vue/index.html","4aaa729483229e004ec62c07d86b250e"],["tags/Workflow/index.html","a37ad9231790dadcf8fdcaf825a3f0a3"],["tags/X-Frame-Options/index.html","7d01aac2bf6af76612d543d2d5f42a05"],["tags/aggregate/index.html","1f32d7bcf4638059d3c2ba14b183cee2"],["tags/alter/index.html","2f1fddaf527c3aab70d4df8bcfb7b250"],["tags/annotation/index.html","8450ea64edb1a23d9e09da5ba232897f"],["tags/args/index.html","972d7c01f7ea67b4438bbe165bf485c3"],["tags/buffer/index.html","47e66fe7dcc50235a47b3c23dbb5ff71"],["tags/cache/index.html","c2f5f4969e4ce955dfcd6680216fecf5"],["tags/change/index.html","8feb68fd068a63c0d5beae8f1537f2b7"],["tags/checkout/index.html","a0fb30b26f770fee9b0fecbb0f0d569b"],["tags/cmake/index.html","8c49acd95a2a2d8dd54b4c577607f734"],["tags/collection/index.html","6f3e266385095b3b2fc7e0fbb110ea13"],["tags/component/index.html","cda044ea55f7dd81d5d7c9a953e8b7e0"],["tags/computed/index.html","1d596e9efacd614879ec74e688bc1566"],["tags/create/index.html","f97624d867921a6988f3c862bf378197"],["tags/database/index.html","669a06f68c1528fff1e4de8f5837525e"],["tags/df/index.html","8a1f39ab2a78ed5cfa1d22a0c3606f7a"],["tags/diff/index.html","16ea2b9f714f6ef77265efc2cd626228"],["tags/double-ampersand/index.html","9e52bf5066f4f9140298c1b7c00e9dc0"],["tags/double-vertical-bar/index.html","ea207dfbea8c1c439ba871ff4a35eb6c"],["tags/driver/index.html","13bd3a1e6673764bb7e0d3883fa36aaa"],["tags/du/index.html","1421af4c806910bb0313c2405459d81d"],["tags/fast-forward/index.html","abb404505d30c2293da1333569269777"],["tags/ff/index.html","431eafda7817c3fb1cc444eef2bc61f6"],["tags/font-size/index.html","f3fd478b0c1aeca79f5ff6c1981d3029"],["tags/font/index.html","8dff0197717e439e2d77cc8c75813abd"],["tags/free/index.html","abf4c25210f4809e43debf98297e25fd"],["tags/git-branch/index.html","fedce5f4086881a3b4055bb1d1f58acb"],["tags/git-index/index.html","60ab4dde076ffdc6f3cd2042f079adee"],["tags/git-merge/index.html","094f194603577e67eeb948a8a53bff8a"],["tags/git-pull/index.html","0bb8bb6050aa554ad538b5007206dcab"],["tags/git-reflog/index.html","82b6e3df8256747a3f5c4bf0dad8faf6"],["tags/git-reset/index.html","c9aba62061b71364f1d9e7271b2bdf50"],["tags/git-rev-parse/index.html","d50feb1a46e77ec4510cd917c8400be2"],["tags/git-revert/index.html","5ef7b1f3cbe453944ffe7051e90d4de2"],["tags/git-tag/index.html","459d59f1be4216ba1a8a72e26c8dc2e7"],["tags/iOS/index.html","d3d6979045feca98167f780d908e2d1a"],["tags/index.html","f50a5987f81a475857be1e9c2bdbe595"],["tags/inode/index.html","92969e8fb70b4d1b66b5d19c32a72712"],["tags/jps/index.html","3d4135aded4f308f64383fdf723dd38f"],["tags/kwargs/index.html","8e0fb1fdf5e16305727b0202f4afbb0c"],["tags/linux/index.html","afe6522f7909ffebd47e3e47b89f14f8"],["tags/mac/index.html","38e0f122319dd1be5bac10417989c6a6"],["tags/make/index.html","0083953deaf4b4211510d3f4e5721e24"],["tags/maven/index.html","0226c6f7638149687103eec662550be6"],["tags/modify/index.html","23e76b44b3c9d4d7cea917e45b2e7555"],["tags/module/index.html","b8e01997cc0387412f707d5611ebd645"],["tags/nexus/index.html","01985bbc83369db513f7f40dfdb8fb79"],["tags/no-ff/index.html","de722ed81e8137a9b4737e3adb68bde3"],["tags/package/index.html","b7ae222a81b712832847b0dcd9643128"],["tags/rewrite/index.html","fedc2de05b4eb44498836df4a10681cb"],["tags/rm/index.html","254671ac17c3a4d6e366930bfb5b14c8"],["tags/schema/index.html","6630af40f94e6bd1af7bb3c414516ba0"],["tags/semicolon/index.html","cc2995384428d9751ae176850bf53ad1"],["tags/shell/index.html","b936a85e26e78e0ff2e4baf17cb8fe16"],["tags/synchronized/index.html","0b3a35756e08733a4eb5bc9b5d425865"],["tags/this/index.html","af36dfb3361cff7ed56b97ce8201e263"],["tags/tomcat/index.html","640288b7dd905a548c655e725f3b7655"],["tags/top/index.html","5cfdd188ce6cc521fb30e71fae162c2b"],["tags/true-merge/index.html","2271227ab60281e89eaecd9c99db1c2f"],["tags/url/index.html","d3ed269f1b6d29a98d740dac8b78c760"],["tags/vim/index.html","ec3c411203f4e59c4bb80d9bd2258b43"],["tags/windows/index.html","d1c23277ced7d23e237813db318ef81d"],["tags/一棵开花的树/index.html","ca939fa50c00b221322989f6a3f7998c"],["tags/主题/index.html","a549d5948b9ba9f8f226662e1cf4ebf9"],["tags/二叉树/index.html","794bbb3a64e7057d21eadf0375f47f16"],["tags/介绍/index.html","aed30f94488b5c5aa1a61c7c584b63a0"],["tags/代理/index.html","d4f28403fe0e825fa4149cdc530e1c7f"],["tags/以太坊/index.html","dc803fa11f1155e75d273b6721bafe5d"],["tags/依赖包/index.html","3d8d180499f8cfc6867a2b8993f3fea5"],["tags/修改/index.html","84d5c87ac38ace306f76f4ac762f6aa2"],["tags/值传递/index.html","0f3ac859f41790ff190f05baee87dfa2"],["tags/冲突/index.html","17b2ed69418ff72a9832000f21d00be0"],["tags/分支/index.html","1a929ec5d8d1955daedb0003d51b7bfb"],["tags/创建/index.html","d8a748a7bd0d31af740af3439d33f5d5"],["tags/创建数据库/index.html","dc2fd19735211fa8bb6e53e742194e67"],["tags/区块链/index.html","487411c6dc879800ce73ba97540ac994"],["tags/升级/index.html","9e10ccd994b8b51d26232a038c8c61d5"],["tags/参数/index.html","7657d4769e7b2fb0d09b839b125691ac"],["tags/委托/index.html","02f0a3a495595a4ad73935c3ff8a384b"],["tags/存储/index.html","eebf2f1d0655e063746af7ad09ee4953"],["tags/存在/index.html","e1ee7e9658cfccc192388cb203dbdb23"],["tags/学习笔记/index.html","f63c4d4ca914461ed8bf8cd8c819403b"],["tags/实例/index.html","d08a67c71f72c5a362129ec5d0797d61"],["tags/容器/index.html","99297393a797819e35c960ed8f7a1274"],["tags/工作流/index.html","ace1a129bfeefcbeefac50efeb226139"],["tags/工具/index.html","88f59fa48c8c74c93cdc7d0f4d1a9260"],["tags/席慕蓉/index.html","0b3b7a4de65508dffee029f0c84dddf8"],["tags/异步编程/index.html","f368ddb6f4d2be0d72d5dfc9aa0790e8"],["tags/微信/index.html","d11708529564325ffe3fd5663e061648"],["tags/插入/index.html","d0699fc7fa67ee1fa3b449c4238ccaa3"],["tags/数据存储/index.html","768bc16506087aca28b551889f7b0517"],["tags/数据库/index.html","2e5bfda0fec6a2ca9004f38c9e04d455"],["tags/数据集合/index.html","3b346d6c38053aecc36fa6c863d69ca2"],["tags/数组/index.html","a310ba97e944c4b2e1fc9fff2813b0e7"],["tags/文档/index.html","89284c4860ee4d9a48b5e64745e030a0"],["tags/文档流/index.html","f25a3e5665ca9ccc5bd3034f1a4959c7"],["tags/智能合约/index.html","d33a429a991d983a68c88bd345810cd5"],["tags/标签/index.html","6e0184d3e11f958e7aab6aee64e23075"],["tags/模板语法/index.html","12073d56638ce0d3c042ef45ccd35055"],["tags/比特币/index.html","067dff3d252fbc7f2c39c91a6598f371"],["tags/波浪字符/index.html","f86f1859fa504c29a0427738af774519"],["tags/注解/index.html","34054af9682d555a39d5e40384f4278a"],["tags/用法/index.html","57d5cf15bafb1fc2ce97a9990f71184b"],["tags/穿透/index.html","4e4b2a05d5ea8e25e9d942fac301a8a1"],["tags/端口占用/index.html","de9202a584c3eafc684fd16e65dbd194"],["tags/笔记/index.html","91329789ab931aba72bc757fa75e4ea7"],["tags/符号/index.html","f4331082b0624ee2d2abe0bd7a33b587"],["tags/红黑树/index.html","c8f2fa497cb2d09ae729bbe078606a5e"],["tags/组件基础/index.html","39466b2093bc3d94e6f13155593df5ed"],["tags/绑定/index.html","5f20c2c73515a7611a8fdd78621db96b"],["tags/编程/index.html","df6efdc6e33bf6d14b579913d83868b0"],["tags/职责链模式/index.html","6848d6e843bfe8b62de42e3905421a7f"],["tags/聚合/index.html","603f251be465eced5b80a9c8aab5564d"],["tags/聚集索引/index.html","9da63005ba7a7eb32de8bea867a25215"],["tags/自定义指令/index.html","19e662616edc2808edbc476c9bfb00ec"],["tags/计算属性/index.html","1c56af458f4601cfdf9b4650c9a8734d"],["tags/设计模式/index.html","67a44420e0dfd0ccc460457e500cbaf9"],["tags/进程/index.html","445e9ac664d619cb4fd10df71717e1a5"],["tags/远程仓库地址/index.html","2bea19492d3c60aabe396f4ec76d0776"],["tags/逻辑操作符/index.html","05ae4fc2f1f24b6cbaf1830b879a7b24"],["tags/部署/index.html","1ff8dbd78477ef51f89b6b2a39cdbc3d"],["tags/难度/index.html","97e2034ac272ce5e5c11921c154acd55"],["tags/集合/index.html","317d06a62a9eabc813555facd898b91d"],["thinking_in_programmer_life/full-stack-programmer.html","37a6259cc0c1dae299a7866489dff0bd"],["uploads/avatar.jpg","dca53ec5967afa5e06330aac12ed7b5a"],["uploads/lovely.gif","640e73696f325b3e44dd56b05ef29c1c"],["wechat/nat-penetration-ngrok.html","37a6259cc0c1dae299a7866489dff0bd"]];
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







