(function(e){function a(a){for(var n,r,s=a[0],c=a[1],i=a[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&d.push(u[r][0]),u[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(a);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,r=1;r<t.length;r++){var s=t[r];0!==u[s]&&(n=!1)}n&&(o.splice(a--,1),e=c(c.s=t[0]))}return e}var n={},r={app:0},u={app:0},o=[];function s(e){return c.p+"js/"+({cart:"cart",home:"home",news:"news",profile:"profile"}[e]||e)+"."+{cart:"f61bd4e6","chunk-2d225787":"49cf1edc",home:"9aa072df",news:"7ad4aaf4",profile:"cae66d3f"}[e]+".js"}function c(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var a=[],t={home:1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var n="css/"+({cart:"cart",home:"home",news:"news",profile:"profile"}[e]||e)+"."+{cart:"31d6cfe0","chunk-2d225787":"31d6cfe0",home:"332763ba",news:"31d6cfe0",profile:"31d6cfe0"}[e]+".css",u=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===n||f===u))return a()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],f=i.getAttribute("data-href");if(f===n||f===u)return a()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=a,l.onerror=function(a){var n=a&&a.target&&a.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var n=u[e];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(a,t){n=u[e]=[a,t]}));a.push(n[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e);var d=new Error;i=function(a){f.onerror=f.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,t[1](d)}u[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(a)},c.m=e,c.c=n,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(t,n,function(a){return e[a]}.bind(null,n));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view"),t("van-tabbar",{model:{value:e.active,callback:function(a){e.active=a},expression:"active"}},e._l(e.navData,(function(a,n){return t("van-tabbar-item",{key:n,attrs:{icon:a.icon,badge:a.badge,replace:"",to:a.path}},[e._v(e._s(a.title))])})),1)],1)},u=[],o={data:function(){return{active:"home",navData:[{title:"首页",name:"home",icon:"home-o",badge:"",path:"/home"},{title:"消息",name:"news",icon:"chat-o",badge:"10",path:"/news"},{title:"购物车",name:"cart",icon:"apps-o",badge:"20",path:"/cart"},{title:"我的",name:"profile",icon:"manager-o",badge:"",path:"/profile"}]}}},s=o,c=t("2877"),i=Object(c["a"])(s,r,u,!1,null,null,null),f=i.exports,d=(t("d3b7"),t("8c4f"));n["a"].use(d["a"]);var l=[{path:"/",redirect:"/home"},{path:"/home",component:function(){return t.e("home").then(t.bind(null,"9553"))}},{path:"/news",component:function(){return t.e("news").then(t.bind(null,"2536"))}},{path:"/cart",component:function(){return t.e("cart").then(t.bind(null,"6930"))}},{path:"/profile",component:function(){return t.e("profile").then(t.bind(null,"385a"))}},{path:"/detail/:id",component:function(){return t.e("chunk-2d225787").then(t.bind(null,"e512"))}}],p=new d["a"]({mode:"history",base:"/",routes:l}),b=p,h=t("2f62");n["a"].use(h["a"]);var m=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=(t("e930"),t("8f80")),g=(t("afd4"),t("ca19")),y=(t("e7e5"),t("d399")),w=(t("5f1a"),t("a3e2")),_=(t("bda7"),t("5e46")),k=(t("a52c"),t("2ed4")),O=(t("537a"),t("ac28")),j=(t("da3c"),t("0b33")),E=(t("0500"),t("4feb")),P=(t("b000"),t("1a23")),S=(t("4b0a"),t("2bb1")),x=(t("4467"),t("c36e")),C=(t("7844"),t("5596")),T=(t("be39"),t("efa0")),A=(t("0cc8"),t("3104")),L=(t("1f87"),t("510b")),N=(t("f06a"),t("20fb")),D=(t("77f8"),t("dc0f")),M=(t("5fe4"),t("8ad4")),B=(t("0209"),t("7d5e")),q=(t("e415"),t("2b5e")),J=(t("5852"),t("d961")),$=(t("4d48"),t("d1e1")),z=(t("4142"),t("39d1")),F=(t("a44c"),t("e27c")),H=(t("4ddd"),t("9f14")),I=(t("ab71"),t("58e6")),K=(t("1075"),t("f600")),U=(t("8a58"),t("e41f")),G=(t("5f5f"),t("f253")),Q=(t("9e6b"),t("c41f")),R=(t("3647"),t("ea47")),V=(t("6a39"),t("f240")),W=(t("f1dc"),t("6e47")),X=(t("8fec"),t("7bd9")),Y=(t("9a83"),t("f564")),Z=(t("480b"),t("a37c")),ee=(t("5246"),t("6b41")),ae=(t("b0d0"),t("3c69")),te=(t("ac1e"),t("543e")),ne=(t("2994"),t("2bdd")),re=(t("66cf"),t("343b")),ue=(t("d97a"),t("6f2f")),oe=(t("4662"),t("28a2")),se=(t("4056"),t("44bf")),ce=(t("c3a6"),t("ad06")),ie=(t("93ac"),t("bb33")),fe=(t("0ec5"),t("21ab")),de=(t("3df5"),t("2830")),le=(t("38d5"),t("772a")),pe=(t("be7f"),t("565f")),be=(t("e17f"),t("2241")),he=(t("2b28"),t("9ed2")),me=(t("d1cf"),t("ee83")),ve=(t("e324"),t("453b")),ge=(t("b76c"),t("ac3c")),ye=(t("05ac"),t("26dd")),we=(t("73f3"),t("64b2")),_e=(t("0252"),t("3b16")),ke=(t("29ea"),t("df1a")),Oe=(t("342a"),t("1437")),je=(t("5d17"),t("f9bd")),Ee=(t("81e6"),t("9ffb")),Pe=(t("e566"),t("5d26")),Se=(t("a909"),t("3acc")),xe=(t("3c32"),t("417e")),Ce=(t("0653"),t("34e9")),Te=(t("c194"),t("7744")),Ae=(t("9cb7"),t("66fd")),Le=(t("66b9"),t("b650")),Ne=(t("db2c"),t("1125")),De=(t("acb7"),t("67bb")),Me=(t("869a"),t("6869")),Be=(t("2cbd"),t("ab2c"));t("157a");n["a"].use(Be["a"]),n["a"].use(Me["a"]),n["a"].use(De["a"]),n["a"].use(Ne["a"]),n["a"].use(Le["a"]),n["a"].use(Ae["a"]),n["a"].use(Te["a"]),n["a"].use(Ce["a"]),n["a"].use(xe["a"]),n["a"].use(Se["a"]),n["a"].use(Pe["a"]),n["a"].use(Ee["a"]),n["a"].use(je["a"]),n["a"].use(Oe["a"]),n["a"].use(ke["a"]),n["a"].use(_e["a"]),n["a"].use(we["a"]),n["a"].use(ye["a"]),n["a"].use(ge["a"]),n["a"].use(ve["a"]),n["a"].use(me["a"]),n["a"].use(he["a"]),n["a"].use(be["a"]),n["a"].use(pe["a"]),n["a"].use(le["a"]),n["a"].use(de["a"]),n["a"].use(fe["a"]),n["a"].use(ie["a"]),n["a"].use(ce["a"]),n["a"].use(se["a"]),n["a"].use(oe["a"]),n["a"].use(ue["a"]),n["a"].use(re["a"],{lazyComponent:!0}),n["a"].use(ne["a"]),n["a"].use(te["a"]),n["a"].use(ae["a"]),n["a"].use(ee["a"]),n["a"].use(Z["a"]),n["a"].use(Y["a"]),n["a"].use(X["a"]),n["a"].use(W["a"]),n["a"].use(V["a"]),n["a"].use(R["a"]),n["a"].use(Q["a"]),n["a"].use(G["a"]),n["a"].use(U["a"]),n["a"].use(K["a"]),n["a"].use(I["a"]),n["a"].use(H["a"]),n["a"].use(F["a"]),n["a"].use(z["a"]),n["a"].use($["a"]),n["a"].use(J["a"]),n["a"].use(q["a"]),n["a"].use(B["a"]),n["a"].use(M["a"]),n["a"].use(D["a"]),n["a"].use(N["a"]),n["a"].use(L["a"]),n["a"].use(A["a"]),n["a"].use(T["a"]),n["a"].use(C["a"]),n["a"].use(x["a"]),n["a"].use(S["a"]),n["a"].use(P["a"]),n["a"].use(E["a"]),n["a"].use(j["a"]),n["a"].use(O["a"]),n["a"].use(k["a"]),n["a"].use(_["a"]),n["a"].use(w["a"]),n["a"].use(y["a"]),n["a"].use(g["a"]),n["a"].use(v["a"]),n["a"].config.productionTip=!1,new n["a"]({router:b,store:m,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.18e0eb87.js.map