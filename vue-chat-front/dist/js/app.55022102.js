(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({"chat~login":"chat~login",chat:"chat",login:"login"}[e]||e)+"."+{"chat~login":"60dcf509",chat:"f72ee05a",login:"a38fc160"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"chat~login":"chat~login",chat:"chat",login:"login"}[e]||e)+"."+{"chat~login":"31d6cfe0",chat:"31d6cfe0",login:"3563982f"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";n("7db0"),n("c975"),n("a434"),n("b0c0");var r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]);var a={state:{login:!1,user:null},mutations:{SET_LOGIN_USER:function(e,t){e.user=t,localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(t))},SET_LOGIN_USER_SOCKET:function(e,t){e.user.socket=t},SET_LOGIN:function(e,t){e.login=t}},getters:{getLoginUser:function(e){return e.user},getLogin:function(e){return e.login}}},i={state:{users:[]},mutations:{SET_USER:function(e,t){var n=e.users.find((function(e){return e.socket===t.socket})),r=e.users.find((function(e){return e.name===t.name}));if("undefined"===typeof n&&"undefined"===typeof r)e.users.push(t);else if("undefined"!==typeof r){var o=e.users.indexOf(r);e.users[o].socket=t.socket}},REMOVE_USER:function(e,t){var n=e.users.find((function(e){return e.socket===t})),r=e.users.indexOf(n);e.users.splice(r,1)}},getters:{getUsers:function(e){return e.users},getUser:function(e){return function(t){var n=e.users.find((function(e){return e.name===t.name}));if("undefined"!==typeof n)return n}},getUserBySocket:function(e){return function(t){var n=e.users.find((function(e){return e.socket===t}));if("undefined"!==typeof n)return n}}}},s={state:{messages:[]},mutations:{SET_MESSAGE:function(e,t){e.messages.push(t)}},getters:{getMessages:function(e){return e.messages}}},c={state:{who:[]},mutations:{SET_WHO_USER:function(e,t){e.who.unshift(t)},REMOVE_WHO_USER:function(e,t){var n=e.who.find((function(e){return e.socket===t})),r=e.who.indexOf(n);e.who.splice(r,1)}},getters:{getWhoIsTyping:function(e){return e.who}}},l=new o["a"].Store({modules:{login:a,users:i,messages:s,typing:c}});t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"app",attrs:{id:"app"}},[n("ChatHeader"),n("router-view"),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styx-chat__footer"},[n("p",[e._v("Anno Domini 2020")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styx-chat__header"},[n("div",{staticClass:"styx-chat__header__logo"},[n("Logo")],1),e.login?n("ChatLogged"):e._e()],1)},s=[],c=n("5530"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styx-chat__logged"},[n("div",{staticClass:"styx-chat__logged__avatar"},[n("img",{attrs:{src:e.user.avatar}})])])},u=[],f=n("2f62"),h={computed:Object(c["a"])({},Object(f["b"])({user:"getLoginUser"}))},d=h,v=n("2877"),g=Object(v["a"])(d,l,u,!1,null,"965af6d8",null),p=g.exports,m=n("a5f7"),y=n.n(m),b={components:{Logo:y.a,ChatLogged:p},computed:Object(c["a"])({},Object(f["b"])({login:"getLogin"}))},_=b,w=Object(v["a"])(_,i,s,!1,null,"f485ecec",null),E=w.exports,O={components:{ChatHeader:E}},S=O,x=(n("5c0b"),Object(v["a"])(S,o,a,!1,null,null,null)),k=x.exports,L=n("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc"),n("d3b7");var j=n("8c4f"),z=n("4360");r["a"].use(j["a"]);var C=[{path:"/",name:"Login",component:function(){return Promise.all([n.e("chat~login"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/chat",name:"Chat",component:function(){return Promise.all([n.e("chat~login"),n.e("chat")]).then(n.bind(null,"293a"))},meta:{requiresAuth:!0}}],V=new j["a"]({mode:"history",base:"/",routes:C});V.beforeEach((function(e,t,n){var r=z["a"].getters.getLogin;e.matched.some((function(e){return e.meta.requiresAuth}))&&!r&&n("/"),n()}));var M=V;r["a"].config.productionTip=!1,new r["a"]({router:M,store:z["a"],render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},a5f7:function(e,t,n){n("99af");var r=n("ded3"),o=n("4082");e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),i=t.children,s=void 0===i?[]:i,c=a.class,l=a.staticClass,u=a.style,f=a.staticStyle,h=a.attrs,d=void 0===h?{}:h,v=o(a,["class","staticClass","style","staticStyle","attrs"]);return n("svg",r({class:[c,l],style:[u,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 260.204 115.756",height:"437.504",width:"983.446"},d)},v),s.concat([n("path",{staticStyle:{"line-height":"normal","font-variant-ligatures":"normal","font-variant-position":"normal","font-variant-caps":"normal","font-variant-numeric":"normal","font-variant-alternates":"normal","font-feature-settings":"normal","text-indent":"0","text-align":"start","text-decoration-line":"none","text-decoration-style":"solid","text-decoration-color":"#000","text-transform":"none","text-orientation":"mixed","white-space":"normal","shape-padding":"0",isolation:"auto","mix-blend-mode":"normal","solid-color":"#000","solid-opacity":"1"},attrs:{d:"M89.296.032L69.651 31.776H42.794l-1.654.715-1.724.746-1.692.73h30.571L36.751 84.942 14.362 97.867l-1.632.943-1.182 1.47-8.385 10.445-2.9 3.612-.263 1.42 2.899-3.612L13.18 99.338l22.81-13.17L40 83.854l.76-1.227 30.112-48.658h14.261v6.23l-1.38 1.522-15.662 45.1-18.004 11.43-2.655 3.955-2.126 3.166-.45 1.324-.093.273 2.669-3.975 2.97-4.423 18.2-11.558.187-.118.23-.663-.678.431.678-.431 14.07-40.512 2.044-2.257v13.732h.684V33.968h1.267v23.23h2.209v-23.23h.002v-2.192h-.002V5.633l.002-.007v-1.43zM87.085 7.77v24.006h-1.267V9.818zm-1.951 3.153v4.734l-1.39 1.534-.58 1.705-.605 1.779-.593 1.744 3.168-3.497v12.854H72.229z",color:"#000","font-weight":"400","font-family":"sans-serif",overflow:"visible"}}),n("path",{attrs:{d:"M96.505 31.714l-.458.51-3.25 3.626-2.208 2.465V57.19h2.209V39.16l4.739-5.287 2.495 2.757v8.706l-1.389 1.534-.58 1.704-.606 1.78-.593 1.744 3.168-3.498v8.592h.684V37.385l1.27 1.402v18.404h2.208V39.16l4.545-5.071 2.303 2.545v8.672l-1.387 1.532-.58 1.704-.606 1.78-.593 1.744 3.166-3.496v8.622h.683V37.388l1.054 1.164.213.235v18.404h2.209V40.212l-1.964-2.171-.245-.27-3.795-4.194-1.49-1.647-.457.51-3.056 3.41-1.964 2.191zM176.522 0l-.483.483-10.433 10.434-2.209 2.208v30.941l2.209 2.209 10.433 10.433.483.483 1.562-1.562 3.983-3.983 12.024 34.624.678.431-.678-.43.23.662.187.119 18.201 11.557 2.97 4.424 2.669 3.974-.093-.273-.45-1.323-2.126-3.167-2.656-3.955-18.004-11.43-12.415-35.75 5.356-5.357.683-.683 1.052-1.052 2.209-2.209V33.96v4.153l27.538 44.498.76 1.228 4.01 2.315 22.81 13.17 10.283 12.807 2.899 3.61-.264-1.419-2.9-3.611-8.385-10.445-1.181-1.47-1.632-.943-22.39-12.926-31.54-50.967h24.54l-1.692-.731-1.724-.746-1.653-.714h-19.479V15.383l-2.209-2.209-1.052-1.052-.683-.683-9.876-9.877zm1.452 2.418l9.986 9.986V31.77h-9.986V18.962l3.125 3.45-.593-1.745-.606-1.779-.58-1.704-1.346-1.486zm-.767.02v29.33h-11.601V14.04zm11.436 10.65l1.052 1.052v17.629h-1.052zM165.606 33.96h11.601v20.792l-11.601-11.601zm12.368 0h9.986v10.827l-5.605 5.605-2.998-8.632-1.383-1.527zm10.67 0h1.051v9.092l-1.052 1.052zm-10.67 9.538l2.048 2.26 1.796 5.171-3.844 3.844zM122.855 31.878l-.483.484-1.717 1.716-.684.684-1.266 1.266-2.209 2.209v18.954h2.21V45.87l1.265 1.392v9.93h.684v-9.178l2.703 2.972.46.505.484-.483 4.327-4.328 2.21-2.208v-3.816l-2.21-2.428-4.287-4.714zm1.004 2.12l4.77 5.246v6.469l-4.788 4.789-3.186-3.504v-9.797zm-3.888 3.887v8.36l-1.266-1.391V39.15zM154.121 31.878l-.483.484-3.667 3.666-2.209 2.209v18.954h2.21V45.87l4.652 5.116.46.505.484-.483.731-.731 2.913 3.115v3.8h.684V50.89l-.684-.732-1.35-1.445 2.033-2.034 2.21-2.208v-3.816l-2.21-2.428-4.287-4.714zm1.004 2.12l4.77 5.246v6.469l-2.5 2.501-7.424-7.939v-1.124zm-5.154 9.51l5.86 6.269-.723.725-5.137-5.648zM138.49 31.878l-.485.484-3.666 3.666-2.209 2.209v18.954h2.209v-8.044h7.97v8.044h.682v-8.044h1.266v8.047h2.209V41.666l.007.006v-1.016l-.007-.007-2.203-2.42-1.272-1.4-.683-.751-2.332-2.564zm1.002 2.12l2.816 3.095v9.862h-7.97v-7.804zm3.5 3.847l1.265 1.392v7.718h-1.266z"}})]))}}}});
//# sourceMappingURL=app.55022102.js.map