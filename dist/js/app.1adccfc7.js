(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],h=0,f=[];h<o.length;h++)r=o[h],s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0519":function(e,t,a){"use strict";var n=a("e987"),s=a.n(n);s.a},"0596":function(e,t,a){},"0dbe":function(e,t,a){},"0eb0":function(e,t,a){"use strict";var n=a("7c14"),s=a.n(n);s.a},"0fbc":function(e,t,a){"use strict";var n=a("2593"),s=a.n(n);s.a},"202a":function(e,t,a){},"21bb":function(e,t,a){"use strict";var n=a("bcc9"),s=a.n(n);s.a},"222f":function(e,t,a){"use strict";var n=a("640c"),s=a.n(n);s.a},2342:function(e,t,a){"use strict";var n=a("83b9"),s=a.n(n);s.a},2593:function(e,t,a){},"33f3":function(e,t,a){"use strict";var n=a("afa2"),s=a.n(n);s.a},"34c6":function(e,t,a){"use strict";var n=a("581f"),s=a.n(n);s.a},"42cd":function(e,t,a){"use strict";var n=a("fb74"),s=a.n(n);s.a},"44b9":function(e,t,a){"use strict";var n=a("f416"),s=a.n(n);s.a},"53c0":function(e,t,a){"use strict";var n=a("b96d"),s=a.n(n);s.a},"53d7":function(e,t,a){"use strict";var n=a("730d"),s=a.n(n);s.a},5452:function(e,t,a){"use strict";var n=a("0596"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={beforeMount:function(){this.$store.dispatch("getMe")}},o=r,l=(a("5c0b"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,h=(a("6762"),a("2fdb"),a("75fc")),f=(a("7f7f"),a("55dd"),a("2f62")),d=a("bc3a"),v=a.n(d);n["a"].use(f["a"]);var m={isLoggedIn:!1,user:null,followed:[],followedLive:[],searchResults:[],popularGameStreams:{},games:{},appData:null},p={popularGameStreams:function(e){return e.popularGameStreams},popularGames:function(e){return e.games.popular},isLoggedIn:function(e){return e.isLoggedIn},user:function(e){return e.user||!1},userID:function(e){return!(!e.user||!e.user._id)&&e.user._id},twitchID:function(e){return!(!e.user||!e.user.id)&&e.user.id},followed:function(e){return e.followed},followedLive:function(e){return e.followedLive},favorites:function(e){return!(!e.user||!e.user.favorites)&&e.user.favorites},searchResults:function(e){return e.searchResults},appData:function(e){return e.appData}},g={setPopularGameStreams:function(e,t){var a=t.game,s=t.streams;n["a"].set(e.popularGameStreams,a,s)},setUserHost:function(e,t){var a=t.channelId,s=t.hostedChannelData,i=e.user.favorites.map(function(e){return e.channelId===a&&(e.hosted=s),e});n["a"].set(e.user,"favorites",i)},setPopularGames:function(e,t){var a=t.games;n["a"].set(e.games,"popular",a)},setFollowedLive:function(e,t){var a=t.streams,s=a.sort(function(e,t){return e.channel.name>=t.channel.name?1:-1});n["a"].set(e,"followedLive",s)},favorite:function(e,t){var a=e.user.favorites;a.push(t),n["a"].set(e.user,"favorites",a)},unfavorite:function(e,t){var a=e.user.favorites.filter(function(e){return e.channelId!==t.channelId});n["a"].set(e.user,"favorites",a)},setLoggedIn:function(e,t){var a=t.isLoggedIn;n["a"].set(e,"isLoggedIn",a)},setUser:function(e,t){n["a"].set(e,"user",t)},setFollowed:function(e,t){n["a"].set(e,"followed",t)},setSearchResults:function(e,t){var a=t.streams;a&&a.length?n["a"].set(e,"searchResults",Object(h["a"])(a)):n["a"].set(e,"searchResults",[])},toggleStream:function(e,t){var a=t.name,s=Object(h["a"])(e.favorites);s.includes(a)?s.splice(s.indexOf(a),1):s.push(a),n["a"].set(e,"favorites",s)},setAppData:function(e,t){var a=t.data;n["a"].set(e,"appData",a)}},_={getPopularGameStreams:function(e,t){var a=e.commit,n=t.game;return v.a.get("/data/getStreamsByGame?game=".concat(n)).then(function(e){var t=e.data;a("setPopularGameStreams",{game:n,streams:t})})},getPopularGames:function(e){var t=e.commit;return v.a.get("/data/getPopularGames").then(function(e){t("setPopularGames",{games:e.data.top})})},getFollowedStatus:function(e,t){var a=e.commit,n=t.channel;return a("setFollowedLive",{streams:[]}),v.a.get("/data/getChannelLiveStatus?channel=".concat(n)).then(function(e){a("setFollowedLive",{streams:e.data.streams})})},toggleFavorite:function(e,t){var a=e.commit,n=t.channelData,s=t.toggle,i=s?"favorite":"unfavorite";return v.a.post("/api/".concat(i),{channelData:n}).then(function(){a(i,n)})},favorite:function(e,t){var a=e.commit,n=t.channelData;return v.a.post("/api/favorite",{channelData:n}).then(function(){a("favorite",n)})},unfavorite:function(e,t){var a=e.commit,n=t.channelData;return v.a.post("/api/unfavorite",{channelData:n}).then(function(){a("unfavorite",n)})},getMe:function(e){var t=e.commit;return v.a.get("/api/me").then(function(e){!e||e.data.code&&401===e.data.code?(t("setUser",null),t("setLoggedIn",{isLoggedIn:!1})):(t("setUser",e.data.user),t("setLoggedIn",{isLoggedIn:!0}))})},getApp:function(e){var t=e.commit;return v.a.get("/api/app").then(function(e){var a=e.data;t("setAppData",{data:a})})},getUserChannels:function(e,t){var a=e.commit,n=t.userID;return v.a.get("/data/getUserChannels?userID=".concat(n),{userID:n}).then(function(e){var t=e.data.follows;a("setFollowed",t)})},search:function(e,t){var a=e.commit,n=t.query;return v.a.get("/data/searchStreams?query=".concat(n,"&limit=10")).then(function(e){var t=e.data.streams;a("setSearchResults",{streams:t})})},getUserIdByUserName:function(e,t){var a=e.commit,n=t.userName;return v.a.get("/data/getUserIdByUserName?userName=".concat(n),{userName:n}).then(function(e){var t=e.data;a("setUser",{name:n,id:t})})}},b=new f["a"].Store({state:m,getters:p,mutations:g,actions:_}),C=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home flex-center"},[a("div",{staticClass:"home__header"},[a("h1",[e._v("HydraStreamer")]),e.isLoggedIn?a("h2",[e._v("Welcome back!")]):e._e()]),a("div",{staticClass:"home__button"},[e.isLoggedIn?e._e():a("div",[e.isLoggedIn?e._e():a("a",{attrs:{href:"/auth/twitch"}},[a("button",{staticClass:"button"},[e._v("Login with Twitch")])])]),e.isLoggedIn?a("div",[e.isLoggedIn?a("router-link",{attrs:{to:{path:"watch"}}},[a("button",{staticClass:"button"},[e._v("Watch")])]):e._e(),a("br"),e.isLoggedIn?a("a",{attrs:{href:"/logout"}},[a("button",{staticClass:"button"},[e._v("Logout")])]):e._e()],1):e._e()])])},w=[],O=a("cebc"),L={computed:Object(O["a"])({},Object(f["b"])(["isLoggedIn"]))},I=L,S=(a("21bb"),Object(l["a"])(I,y,w,!1,null,null,null));S.options.__file="Home.vue";var j=S.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"watch"},[a("Header",{on:{onToggleSettings:function(t){e.settingsVisible=!e.settingsVisible},onToggleChat:function(t){e.chatVisible=!e.chatVisible}}}),a("div",{staticClass:"watch__view",class:{"chat-open":e.chatVisible}},[e.favorites.length?e._e():a("div",{staticClass:"watch__welcome"},[e._m(0)]),e.favorites.length?a("div",{staticClass:"watch__videos"},[a("Grid",{attrs:{channels:e.favorites}})],1):e._e(),e.chatVisible&&e.favorites.length?a("div",{staticClass:"watch__chat"},[a("ChatPanel",{attrs:{channels:e.favorites}})],1):e._e()]),a("Footer"),a("WarningScreen"),e.settingsVisible?a("AddStreamOverlay",{on:{closeOverlay:function(t){e.settingsVisible=!1}}}):e._e()],1)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("To start watching your favorite "),a("br"),e._v("streamers, click "),a("b",[e._v("Add a Stream")]),e._v(".")])}],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header__icon header__settings-icon",on:{click:function(t){e.$emit("onToggleSettings")}}},[a("eva-icon",{attrs:{name:"plus-square"}}),a("span",[e._v("Add a Stream")])],1),a("div",{staticClass:"spacer"}),a("div",{staticClass:"header__icon header__chat-icon",on:{click:function(t){e.$emit("onToggleChat")}}},[a("span",[e._v("Toggle Chat")]),a("eva-icon",{attrs:{name:"message-square"}})],1)])},F=[],k=(a("5452"),{}),E=Object(l["a"])(k,D,F,!1,null,null,null);E.options.__file="Header.vue";var $=E.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[e._m(0),a("div",{staticClass:"footer__icon"},[a("a",{attrs:{href:"https://github.com/gedrick/HydraStreamer",target:"_blank"}},[a("eva-icon",{attrs:{name:"github",fill:"white"}})],1)]),a("div",{staticClass:"footer__icon"},[a("a",{attrs:{href:"https://twitter.com/nostalgiatriggr",target:"_blank"}},[a("eva-icon",{attrs:{name:"twitter",fill:"white"}})],1)]),a("div",{staticClass:"footer__icon"},[a("a",{attrs:{href:"/logout"}},[a("eva-icon",{attrs:{name:"log-out",fill:"white"}})],1)])])},V=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer__icon"},[a("span",{staticClass:"footer__version"},[e._v("v1.0.0")])])}],M=(a("53d7"),{}),T=Object(l["a"])(M,G,V,!1,null,null,null);T.options.__file="Footer.vue";var R=T.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"warning-screen expand-to-fit"},[a("div",[a("eva-icon",{attrs:{name:"arrow-circle-left",fill:"white"}}),a("br"),e._m(0)],1)])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e._v("Rotate"),a("br"),e._v("your device!")])}],U=(a("efa9"),{}),A=Object(l["a"])(U,N,B,!1,null,null,null);A.options.__file="WarningScreen.vue";var H=A.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-stream-overlay expand-to-fit"},[a("div",{staticClass:"add-stream-overlay__container"},[a("span",{staticClass:"add-stream-overlay__close icon fa fa-close",on:{click:function(t){e.$emit("closeOverlay")}}}),a("div",{staticClass:"add-stream-overlay__section"},[a("h2",{on:{click:function(t){e.followsVisible=!e.followsVisible}}},[a("span",{staticClass:"icon fa fa-list"}),e._v(" Online Streamers You Follow")]),e.followsVisible&&e.followed.length?a("Follows"):e._e()],1),a("div",{staticClass:"add-stream-overlay__section"},[a("h2",{on:{click:function(t){e.popularGamesVisible=!e.popularGamesVisible}}},[a("span",{staticClass:"icon fa fa-list"}),e._v(" Most Popular Games "),a("span",{staticClass:"online-only"},[e._v("(click to search by game)")])]),e.popularGamesVisible?a("PopularGames"):e._e()],1),a("div",{staticClass:"add-stream-overlay__section"},[a("h2",{on:{click:function(t){e.searchVisible=!e.searchVisible}}},[a("span",{staticClass:"icon fa fa-search"}),e._v(" Search")]),e.searchVisible?a("Search"):e._e()],1)])])},W=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"follows"},[e.isLoading?a("p",[e._v("Checking if any of your follows are online...")]):e._e(),e.isLoading||e.followedLive.length?e._e():a("p",[e._v("Doesn't look like anyone you follow is online. Maybe try searching for a new streamer?")]),e._l(e.followedLive,function(e){return a("ChannelBadge",{key:e.channel._id,attrs:{channel:e}})})],2)},z=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"channel-badge",class:{favorite:e.isFavorite},on:{click:e.toggleFavorite}},[a("div",{staticClass:"channel-badge__image"},[a("img",{attrs:{src:e.channel.preview.small}})]),a("div",{staticClass:"channel-badge__name"},[a("span",{staticClass:"player-name"},[e._v(e._s(e.channel.channel.name))]),a("br"),a("span",{staticClass:"game-name"},[e._v(e._s(e.channel.game))])])])},Q=[],K=(a("f386"),a("7514"),{props:{channel:Object},computed:Object(O["a"])({},Object(f["b"])(["favorites"]),{isFavorite:function(){var e=this.channel.channel._id;return void 0!==this.favorites.find(function(t){return t.channelId===e})},channelData:function(){return{name:this.channel.channel.name,icon:this.channel.preview.small,game:this.channel.channel.game,channelId:this.channel.channel._id}}}),methods:{toggleFavorite:function(){this.$store.dispatch("toggleFavorite",{channelData:this.channelData,toggle:!this.isFavorite})}}}),X=K,Z=(a("f8f3"),Object(l["a"])(X,J,Q,!1,null,null,null));Z.options.__file="ChannelBadge.vue";var ee=Z.exports,te={components:{ChannelBadge:ee},data:function(){return{isLoading:!1}},computed:Object(O["a"])({},Object(f["b"])(["followed","followedLive"])),beforeMount:function(){var e=this;this.isLoading=!0;var t=[];this.followed.map(function(e){return t.push(e.channel._id)}),this.$store.dispatch("getFollowedStatus",{channel:t.join(",")}).then(function(t){e.isLoading=!1})}},ae=te,ne=(a("33f3"),Object(l["a"])(ae,Y,z,!1,null,null,null));ne.options.__file="Follows.vue";var se=ne.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("div",{staticClass:"search__container"},[a("div",{staticClass:"search__terms"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],ref:"terms",staticClass:"text-input",attrs:{placeholder:"search by stream or game",type:"text"},domProps:{value:e.terms},on:{keypress:e.doSearch,input:function(t){t.target.composing||(e.terms=t.target.value)}}})]),a("div",{staticClass:"search__results"},e._l(e.searchResults,function(e){return a("ChannelResult",{key:e._id,attrs:{result:e}})}),1)])])},re=[],oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.result?a("div",{staticClass:"search-result",on:{click:function(t){e.toggleFavorite(e.result.channel.name)}}},[a("div",{staticClass:"search-result__image"},[a("div",{staticClass:"search-result__image-preview"},[a("img",{attrs:{src:e.previewImage}}),a("div",{staticClass:"search-result__viewers"},[e._v(e._s(e.result.viewers)+" viewers")])])]),a("div",{staticClass:"search-result__title"},[a("div",{staticClass:"search-result__streamer-name"},[e._v(e._s(e.result.channel.display_name))]),a("div",{staticClass:"search-result__streamer-game"},[e._v("playing "+e._s(e.result.channel.game))])]),a("div",{staticClass:"search-result__favorite"},[a("span",{class:{"far fa-heart":!e.resultIsFavorited,"fas fa-heart":e.resultIsFavorited}})])]):e._e()},le=[],ce={props:{result:Object},computed:Object(O["a"])({},Object(f["b"])(["favorites"]),{previewImage:function(){return this.result.preview&&this.result.preview.small?this.result.preview.small:""},resultIsFavorited:function(){var e=this;return this.favorites.filter(function(t){return t.name===e.result.channel.name}).length>0},channelData:function(){return{name:this.result.channel.name,icon:this.result.preview.small,game:this.result.game,channelId:this.result.channel._id}}}),methods:{toggleFavorite:function(){this.$store.dispatch("toggleFavorite",{channelData:this.channelData,toggle:!this.resultIsFavorited})}}},ue=ce,he=(a("d2cb"),Object(l["a"])(ue,oe,le,!1,null,null,null));he.options.__file="ChannelResult.vue";var fe=he.exports,de={name:"Search",components:{ChannelResult:fe},data:function(){return{terms:"",working:!1}},computed:Object(O["a"])({},Object(f["b"])(["searchResults"])),methods:{doSearch:function(){var e=this;this.terms.length>=3&&!this.working&&(this.working=!0,this.$store.dispatch("search",{query:this.terms}).then(function(){e.working=!1}))}}},ve=de,me=(a("53c0"),Object(l["a"])(ve,ie,re,!1,null,"4831a6fd",null));me.options.__file="Search.vue";var pe=me.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popular-games"},[e.isLoading?a("p",[e._v("Querying for the most popular games...")]):e._e(),a("div",{staticClass:"popular-games__games"},e._l(e.popularGames,function(t){return a("GameBadge",{key:t.game.name,attrs:{game:t.game},on:{select:function(a){e.setSearchTerm(t.game.name)}}})}),1),a("div",{staticClass:"popular-games__channels"},e._l(e.channels,function(e){return a("ChannelBadge",{key:e.channel._id,attrs:{channel:e}})}),1)])},_e=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-badge",on:{click:function(t){e.$emit("select")}}},[a("div",{staticClass:"game-badge__image"},[a("img",{staticClass:"mobile-only",attrs:{src:e.game.box.small}}),a("img",{staticClass:"desktop-only",attrs:{src:e.game.box.medium}})])])},Ce=[],ye={props:{game:Object}},we=ye,Oe=(a("6637"),Object(l["a"])(we,be,Ce,!1,null,null,null));Oe.options.__file="GameBadge.vue";var Le=Oe.exports,Ie={components:{GameBadge:Le,ChannelBadge:ee},data:function(){return{isLoading:!1,currentSearchTerm:null}},computed:Object(O["a"])({},Object(f["b"])(["popularGames","popularGameStreams"]),{channels:function(){return this.currentSearchTerm?this.popularGameStreams[this.currentSearchTerm]:[]}}),beforeMount:function(){var e=this;this.isLoading=!0,this.$store.dispatch("getPopularGames").then(function(){e.isLoading=!1})},methods:{setSearchTerm:function(e){this.currentSearchTerm=e,this.channels||this.$store.dispatch("getPopularGameStreams",{game:this.currentSearchTerm})}}},Se=Ie,je=(a("0519"),Object(l["a"])(Se,ge,_e,!1,null,null,null));je.options.__file="PopularGames.vue";var xe=je.exports,Pe={components:{Follows:se,Search:pe,PopularGames:xe},data:function(){return{followsVisible:!0,popularGamesVisible:!0,searchVisible:!0}},computed:Object(O["a"])({},Object(f["b"])(["followed","favorites","twitchID"])),beforeMount:function(){this.$store.dispatch("getUserChannels",{userID:this.twitchID})}},De=Pe,Fe=(a("9663"),Object(l["a"])(De,q,W,!1,null,null,null));Fe.options.__file="AddStreamOverlay.vue";var ke=Fe.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid",style:{"grid-template-rows":e.templateRows,"grid-template-columns":e.templateColumns}},e._l(e.channels,function(e){return a("ChannelBox",{key:e.name,attrs:{channel:e}})}),1)},$e=[],Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.channel?a("div",{staticClass:"channel-box flex-center"},[e.isLoading?a("LoadingBox"):e._e(),e.isOffline&&!e.hostedChannel?a("div",{staticClass:"channel-box__offline flex-center"},[a("button",{staticClass:"button",on:{click:e.launchPlayer}},[a("span",{staticClass:"orange"},[e._v(e._s(e.channelData.name))]),a("br"),e._v("is offline. Reload?\n    ")]),a("div",{staticClass:"horizontal"},[a("button",{staticClass:"button--small",on:{click:e.hideChannel}},[e._v("Hide for Now")]),a("button",{staticClass:"button--small",on:{click:e.playerRemoveChannel}},[e._v("Unfavorite")])])]):e._e(),e.isOffline&&e.hostedChannel?a("div",{staticClass:"channel-box__offline flex-center"},[a("button",{staticClass:"button",on:{click:e.watchHostedStreamer}},[a("span",{staticClass:"orange"},[e._v(e._s(e.channelData.name))]),a("br"),e._v("is hosting "),a("span",{staticClass:"orange"},[e._v(e._s(e.hostedChannel.name))]),e._v(". Tune in?\n    ")]),a("div",{staticClass:"horizontal"},[a("button",{staticClass:"button--small",on:{click:e.hideChannel}},[e._v("Hide for Now")]),a("button",{staticClass:"button--small",on:{click:e.playerRemoveChannel}},[e._v("Unfavorite")])])]):e._e(),!e.isLoading&&e.isLoaded?a("div",[a("ChannelOverlay",{attrs:{onPlay:e.playerPlay,onPause:e.playerPause,onMute:e.playerToggleMuted,onRemoveChannel:e.playerRemoveChannel,player:e.player}})],1):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&!e.isOffline,expression:"!isLoading && !isOffline"}],ref:"playerContainer",staticClass:"channel-box__container",attrs:{id:"container--"+e.channelData.name}})],1):e._e()},Ve=[],Me=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading-box"},[a("div",{staticClass:"loading-box__loader"},[a("div",{staticClass:"loading-box__loader--large"}),a("div",{staticClass:"loading-box__loader--small"})])])}],Re=(a("0eb0"),{}),Ne=Object(l["a"])(Re,Me,Te,!1,null,null,null);Ne.options.__file="LoadingBox.vue";var Be=Ne.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"channel-overlay expand-to-fit",class:{visible:e.overlayIsVisible},on:{mouseenter:e.showOverlay,mouseleave:e.hideOverlay}},[a("div",{staticClass:"channel-overlay__controls"},[e.playerIsPaused?a("span",{staticClass:"fa fa-play",on:{click:e.onPlay}}):e._e(),e.playerIsPaused?e._e():a("span",{staticClass:"fa fa-pause",on:{click:e.onPause}}),a("span",{staticClass:"fas",class:{"fa-volume-mute":e.playerIsMuted,"fa-volume-up":!e.playerIsMuted},on:{click:e.onToggleMute}}),a("span",{staticClass:"fa fa-close",on:{click:e.onRemoveChannel}})]),a("div",{staticClass:"channel-overlay__info"},[a("span",[e._v(e._s(e.getChannelName))])])])},Ae=[],He={props:{onPlay:Function,onPause:Function,onMute:Function,onVolumeUp:Function,onVolumeDown:Function,onRemoveChannel:Function,player:Object},data:function(){return{overlayIsVisible:!1}},computed:{playerIsPaused:function(){return this.player.isPaused()},playerIsMuted:function(){return this.player.getMuted()},getChannelName:function(){return this.player.getChannel()}},methods:{toggleOverlay:function(e){this.overlayIsVisible=!this.overlayIsVisible},showOverlay:function(){this.overlayIsVisible=!0},hideOverlay:function(){this.overlayIsVisible=!1},onToggleMute:function(){this.player.getMuted()?this.onMute(!1):this.onMute(!0)}}},qe=He,We=(a("0fbc"),Object(l["a"])(qe,Ue,Ae,!1,null,null,null));We.options.__file="ChannelOverlay.vue";var Ye=We.exports,ze=window.Twitch,Je={components:{LoadingBox:Be,ChannelOverlay:Ye},props:{channel:Object},data:function(){return{hostedChannel:!1,isLoading:!0,isLoaded:!1,isOffline:!1,player:null,qualities:null,volume:0,bPlaying:null,bEnded:null,bOffline:null,playerLoadTimeout:5e3}},computed:{channelData:function(){return this.channel}},mounted:function(){this.launchPlayer()},beforeDestroy:function(){this.player&&this.player.removeEventListener&&(this.player.pause(),this.player.removeEventListener(ze.Player.PLAYING,this.bPlaying),this.player.removeEventListener(ze.Player.ENDED,this.bEnded),this.player.removeEventListener(ze.Player.OFFLINE,this.bOffline))},methods:Object(O["a"])({},Object(f["c"])(["setUserHost"]),{watchHostedStreamer:function(){this.hostedChannel&&(this.player=null,this.setUserHost({channelId:this.channelData.channelId,hostedChannelData:this.hostedChannel}),this.launchPlayer())},hideChannel:function(){this.$store.commit("unfavorite",this.channelData)},playerRemoveChannel:function(){this.channelData.id;this.$store.dispatch("unfavorite",{channelData:this.channelData})},launchPlayer:function(){this.isLoading=!0,this.isLoaded=!1,this.isOffline=!1;var e=this.channelData.hosted?this.channelData.hosted.name:this.channelData.name,t={width:"100%",height:"100%",channel:e,muted:!0,autoplay:!0,controls:!1};this.bindFunctions();var a="container--".concat(this.channelData.name);this.player=new ze.Player(a,t),this.player.setVolume(1),this.playerToggleMuted(!0),this.player.addEventListener(ze.Player.PLAYING,this.bPlaying),this.player.addEventListener(ze.Player.ENDED,this.bEnded),this.player.addEventListener(ze.Player.OFFLINE,this.bOffline)},bindFunctions:function(){this.bPlaying=this.playing.bind(this),this.bEnded=this.ended.bind(this),this.bOffline=this.offline.bind(this)},playing:function(){this.isLoading=!1,this.isLoaded=!0,this.qualities=this.player.getQualities()},ended:function(){console.log("player ".concat(this.channelData.name," has ended"))},offline:function(){var e=this;this.isLoading=!1,this.isLoaded=!1,this.isOffline=!0,this.player=null;var t=this.$refs["playerContainer"];while(t.firstChild)t.removeChild(t.firstChild);v.a.get("/data/userIsHosting?channelId=".concat(this.channelData.channelId)).then(function(t){var a=t.data;a.isHosting&&(e.hostedChannel=a)})},playerPlay:function(){this.player.play()},playerPause:function(){this.player.pause()},playerToggleMuted:function(e){this.player.setMuted(e)}})},Qe=Je,Ke=(a("34c6"),Object(l["a"])(Qe,Ge,Ve,!1,null,null,null));Ke.options.__file="ChannelBox.vue";var Xe=Ke.exports,Ze={components:{ChannelBox:Xe},props:{channels:Array},computed:{channelCount:function(){return this.channels.length},templateRows:function(){switch(this.channelCount){case 1:return"100%";case 2:return"50% 50%";case 3:case 4:case 5:case 6:return"50% 50%";default:return"33.3% 33.3% 33.3%"}},templateColumns:function(){switch(this.channelCount){case 1:case 2:return"100%";case 3:case 4:return"50% 50%";default:return"33.3% 33.3% 33.3%"}}}},et=Ze,tt=(a("2342"),Object(l["a"])(et,Ee,$e,!1,null,null,null));tt.options.__file="Grid.vue";var at=tt.exports,nt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chat-panel"},[a("div",{staticClass:"chat-panel__tabs"},e._l(e.channels,function(t){return a("div",{key:t.channelId,staticClass:"chat-panel__tab",class:{selected:e.activeChannel===t.channelId},on:{click:function(a){e.selectChat(t.channelId)}}},[e._v("\n      "+e._s(t.hosted?t.hosted.name:t.name)+"\n    ")])}),0),a("div",{staticClass:"chat-panel__container"},[a("Chat",{attrs:{channel:e.getActiveChannel}})],1)])},st=[],it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.channel?a("div",{staticClass:"chat"},[a("iframe",{attrs:{frameborder:"0",scrolling:"yes",id:"chat_embed",src:"https://www.twitch.tv/embed/"+e.channelName+"/chat"}})]):e._e()},rt=[],ot={props:{channel:Object},computed:{channelName:function(){return this.channel.hosted?this.channel.hosted.name:this.channel.name}}},lt=ot,ct=(a("44b9"),Object(l["a"])(lt,it,rt,!1,null,null,null));ct.options.__file="Chat.vue";var ut=ct.exports,ht={components:{Chat:ut},props:{channels:Array},data:function(){return{activeChannel:!1}},computed:{getActiveChannel:function(){var e=this;return this.channels.find(function(t){return t.channelId===e.activeChannel})}},methods:{selectChat:function(e){this.activeChannel=e}},mounted:function(){this.selectChat(this.channels[0].channelId)}},ft=ht,dt=(a("42cd"),Object(l["a"])(ft,nt,st,!1,null,null,null));dt.options.__file="ChatPanel.vue";var vt=dt.exports,mt={name:"Watch",components:{Header:$,Footer:R,WarningScreen:H,AddStreamOverlay:ke,Grid:at,ChatPanel:vt},data:function(){return{settingsVisible:!1,chatVisible:!1,showSearch:!1,showFavorites:!1}},methods:{toggleSearch:function(){this.showFavorites=!1,this.showSearch=!this.showSearch},toggleFavorites:function(){this.showSearch=!1,this.showFavorites=!this.showFavorites},hideSearch:function(){this.showFavorites=!1,this.showSearch=!1}},computed:Object(O["a"])({},Object(f["b"])(["user","favorites"]))},pt=mt,gt=(a("222f"),Object(l["a"])(pt,x,P,!1,null,null,null));gt.options.__file="Watch.vue";var _t=gt.exports,bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin"},[e._v("\n  hello and welcome to the admin view. it consists solely of you.\n")])},Ct=[],yt={},wt=Object(l["a"])(yt,bt,Ct,!1,null,null,null);wt.options.__file="Admin.vue";var Ot=wt.exports,Lt=function(e,t,a){b.dispatch("getMe").then(function(){b.getters.isLoggedIn?a():a({path:"/"})})},It=function(e,t,a){b.dispatch("getMe").then(function(){b.getters.user&&b.getters.user.roles&&b.getters.user.roles.includes("administrator")?a():a({path:"/"})})};n["a"].use(C["a"]);var St=new C["a"]({routes:[{path:"/",name:"home",component:j},{path:"/watch",name:"watch",component:_t,beforeEnter:Lt},{path:"/admin",name:"/admin",component:Ot,beforeEnter:It}]}),jt=a("00e7"),xt=a.n(jt),Pt=a("0665"),Dt=a.n(Pt);v.a.interceptors.response.use(function(e){return e},function(e){401!==e.response.status||"#/"===window.location.hash||(window.location.href="/")}),n["a"].config.productionTip=!1,n["a"].use(xt.a),n["a"].use(Dt.a),new n["a"]({router:St,store:b,render:function(e){return e(u)}}).$mount("#app")},"581f":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(e,t,a){},"640c":function(e,t,a){},6637:function(e,t,a){"use strict";var n=a("202a"),s=a.n(n);s.a},"730d":function(e,t,a){},"7c14":function(e,t,a){},"83b9":function(e,t,a){},9663:function(e,t,a){"use strict";var n=a("e677"),s=a.n(n);s.a},afa2:function(e,t,a){},b96d:function(e,t,a){},bb86:function(e,t,a){},bcc9:function(e,t,a){},d2cb:function(e,t,a){"use strict";var n=a("bb86"),s=a.n(n);s.a},dc5d:function(e,t,a){},e677:function(e,t,a){},e987:function(e,t,a){},efa9:function(e,t,a){"use strict";var n=a("0dbe"),s=a.n(n);s.a},f416:function(e,t,a){},f8f3:function(e,t,a){"use strict";var n=a("dc5d"),s=a.n(n);s.a},fb74:function(e,t,a){}});
//# sourceMappingURL=app.1adccfc7.js.map