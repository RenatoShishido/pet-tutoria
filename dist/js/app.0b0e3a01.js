(function(e){function n(n){for(var a,c,o=n[0],s=n[1],i=n[2],h=0,l=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(a=!1)}a&&(u.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},c={app:0},r={app:0},u=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0bc3f82c":"5b1a7cf6","chunk-2100cd24":"72a05153","chunk-95cb9224":"8b9b1a55","chunk-b03b2a1a":"58b5492b","chunk-652a568d":"618719c7","chunk-7eb3d551":"5dc40b38","chunk-9495e16c":"02efcfea","chunk-b57b2c6e":"61fce795","chunk-32bfe8b6":"cc7d426d","chunk-0176c690":"6d445a47","chunk-2efaafa3":"9c0758ca","chunk-514de3e3":"74f24b27","chunk-51a95986":"3ffc5d6c","chunk-5235d2ee":"95b2cf07","chunk-2e6b3103":"ad6c79b7","chunk-4057819c":"942834d4","chunk-412fb50e":"cc9b3b6e","chunk-426aa21d":"756a5e85","chunk-43a15f8a":"e7c2e433","chunk-704f12ef":"b59d6d21","chunk-ef731b94":"3bb005f2"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-0bc3f82c":1,"chunk-2100cd24":1,"chunk-95cb9224":1,"chunk-b03b2a1a":1,"chunk-652a568d":1,"chunk-7eb3d551":1,"chunk-b57b2c6e":1,"chunk-32bfe8b6":1,"chunk-0176c690":1,"chunk-2efaafa3":1,"chunk-514de3e3":1,"chunk-51a95986":1,"chunk-5235d2ee":1,"chunk-2e6b3103":1,"chunk-4057819c":1,"chunk-412fb50e":1,"chunk-426aa21d":1,"chunk-43a15f8a":1,"chunk-704f12ef":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0bc3f82c":"eafc9b27","chunk-2100cd24":"23ae554a","chunk-95cb9224":"75f409e4","chunk-b03b2a1a":"103a78fa","chunk-652a568d":"c22812e1","chunk-7eb3d551":"77599756","chunk-9495e16c":"31d6cfe0","chunk-b57b2c6e":"ff9f0883","chunk-32bfe8b6":"53d7c3bd","chunk-0176c690":"cbd6c4dc","chunk-2efaafa3":"0f8fb28d","chunk-514de3e3":"90287736","chunk-51a95986":"15c1d902","chunk-5235d2ee":"8e5cc5a9","chunk-2e6b3103":"78d40c40","chunk-4057819c":"2b84293c","chunk-412fb50e":"285b1d8c","chunk-426aa21d":"88235662","chunk-43a15f8a":"e4f0571a","chunk-704f12ef":"ad988026","chunk-ef731b94":"31d6cfe0"}[e]+".css",r=s.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===a||h===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],h=i.getAttribute("data-href");if(h===a||h===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete c[e],f.parentNode.removeChild(f),t(u)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,s.nc&&h.setAttribute("nonce",s.nc),h.src=o(e);var l=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("8a23"),c=t.n(a);c.a},3269:function(e,n,t){e.exports=t.p+"img/logoctei-1024x700.a05a9a9d.jpg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view"),t("Footer")],1)},r=[],u=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-footer",{attrs:{color:"#313233",dark:"",padless:""}},[a("v-card-text",{staticClass:"d-flex flex-wrap flex-row justify-space-between"},[a("v-flex",{attrs:{xs12:"",sm4:"",md1:""}}),a("v-flex",{staticClass:"d-flex justify-left",attrs:{xs12:"",sm4:"",md3:""}},[a("Card")],1),a("v-flex",{attrs:{xs12:"",sm2:"",md2:""}},[a("div",[a("h2",{staticClass:"d-flex justify-left py-3 grey--text"},[e._v("SOBRE")]),a("a",{staticClass:"d-flex justify-left white--text body-1 mb-3",attrs:{href:"#HOME",text:"",large:""}},[e._v("O que e Tutoria em Pares?")]),a("v-divider",{attrs:{color:"blue-grey darken-3"}}),a("a",{staticClass:"d-flex justify-left white--text body-1 mb-3",attrs:{href:"#HOME",text:"",large:""}},[e._v("O que e o PET Sistemas")]),a("v-divider",{attrs:{color:"blue-grey darken-3"}}),a("a",{staticClass:"d-flex justify-left white--text body-1 mb-3",attrs:{href:"#HOME",text:"",large:""}},[e._v("Blog")]),a("v-divider",{attrs:{color:"blue-grey darken-3"}}),a("a",{staticClass:"d-flex justify-left white--text body-1 mb-3",attrs:{href:"#HOME",text:"",large:""}},[e._v("Pessoas que colaboraram!")]),a("v-divider",{attrs:{color:"blue-grey darken-3"}})],1)]),a("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[a("h2",{staticClass:"d-flex justify-left py-3 grey--text"},[e._v("UFMS")]),a("p",{staticClass:"d-flex justify-left text-justify subtitle-1"},[e._v(" Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS | Telefone: +55 (67) 3345-7000 ")])]),a("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[a("h2",{staticClass:"d-flex justify-left py-3 grey--text"},[e._v("LOCALIZACAO CTEI")]),a("a",{attrs:{href:"http://capivara.ctei.ufms.br/"}},[a("img",{attrs:{src:t("3269"),alt:"logoctei",width:"100%",height:"50%"}})])]),a("v-flex",{attrs:{xs12:"",sm4:"",md1:""}})],1)],1)},o=[],s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-card",{staticClass:"mx-auto",attrs:{color:"white"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t("9c6c")}},[a("v-card-actions",[a("a",{staticClass:"white--text d-flex justify-start headline",attrs:{href:"https://www.facebook.com/petsistemas/"}},[a("v-btn",{staticClass:"black--text",attrs:{color:"white",xSmall:""}},[e._v(" Curtir Pagina ")])],1)])],1),a("div",{staticClass:"black--text py-5 px-5"},[a("p",[e._v("Seja a primeira pessoa entre seus amigos a curtir isso.")])])],1)},i=[],h={},l=h,f=t("2877"),d=t("6544"),b=t.n(d),m=t("8336"),k=t("b0af"),p=t("99d9"),v=t("adda"),g=Object(f["a"])(l,s,i,!1,null,null,null),x=g.exports;b()(g,{VBtn:m["a"],VCard:k["a"],VCardActions:p["a"],VImg:v["a"]});var y={name:"Footer",components:{Card:x},data:function(){return{}}},w=y,C=t("ce7e"),_=t("0e8f"),P=t("553a"),j=Object(f["a"])(w,u,o,!1,null,null,null),A=j.exports;b()(j,{VCardText:p["c"],VDivider:C["a"],VFlex:_["a"],VFooter:P["a"]});var O={name:"App",components:{Footer:A}},V=O,S=(t("034f"),t("7496")),E=Object(f["a"])(V,c,r,!1,null,null,null),q=E.exports;b()(E,{VApp:S["a"]});t("45fc"),t("d3b7");var T=t("8c4f");a["a"].use(T["a"]);var M=new T["a"]({mode:"history",routes:[{path:"/",name:"View-Home",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-2100cd24")]).then(t.bind(null,"0441"))}},{path:"/forgot_password",name:"View-FrorgotPassword",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b03b2a1a"),t.e("chunk-652a568d")]).then(t.bind(null,"dafb"))}},{path:"/login",name:"View-Login",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b03b2a1a"),t.e("chunk-7eb3d551")]).then(t.bind(null,"68d8"))}},{path:"/register",name:"View-Register",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b03b2a1a"),t.e("chunk-9495e16c")]).then(t.bind(null,"d222"))}},{path:"/dashboard/pagina/:page",name:"View-Dashboard",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-426aa21d")]).then(t.bind(null,"1c70"))},meta:{requiresAuth:!0}},{path:"/dashboard/tutores",name:"View-DashTutores",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-4057819c")]).then(t.bind(null,"3fec"))},meta:{requiresAuth:!0}},{path:"/dashboard/perfil/:id",name:"View-Perfil",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-704f12ef")]).then(t.bind(null,"d43d"))},meta:{requiresAuth:!0}},{path:"/dashboard/tutorias/pagina/:page",name:"View-Tutoria",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-2e6b3103")]).then(t.bind(null,"a38f"))},meta:{requiresAuth:!0}},{path:"/dashboard/tutorias/search/:id",name:"View-Search",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-412fb50e")]).then(t.bind(null,"bcb0"))},meta:{requiresAuth:!0}},{path:"/dashboard/sugestao",name:"View-Sugestao",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-b03b2a1a"),t.e("chunk-43a15f8a")]).then(t.bind(null,"ee14"))},meta:{requiresAuth:!0}},{path:"/admin",name:"View-Admin",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-32bfe8b6"),t.e("chunk-0176c690")]).then(t.bind(null,"f750"))},meta:{requiresAuth:!0,is_admin:!0}},{path:"/admin/administrativa",name:"View-Administrativa",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-32bfe8b6"),t.e("chunk-2efaafa3")]).then(t.bind(null,"347f"))},meta:{requiresAuth:!0,is_admin:!0}},{path:"/admin/agendados",name:"View-agendados",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-32bfe8b6"),t.e("chunk-51a95986")]).then(t.bind(null,"58a1"))},meta:{requiresAuth:!0,is_admin:!0}},{path:"/admin/tutores",name:"View-tutores",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-32bfe8b6"),t.e("chunk-5235d2ee")]).then(t.bind(null,"6c56"))},meta:{requiresAuth:!0,is_admin:!0}},{path:"/admin/completo",name:"View-completo",component:function(){return Promise.all([t.e("chunk-0bc3f82c"),t.e("chunk-95cb9224"),t.e("chunk-b57b2c6e"),t.e("chunk-32bfe8b6"),t.e("chunk-514de3e3")]).then(t.bind(null,"3e9d"))},meta:{requiresAuth:!0,is_admin:!0}},{path:"/reset_password",name:"View-ResetPassword",component:function(){return t.e("chunk-ef731b94").then(t.bind(null,"d90f"))}}]});M.beforeEach((function(e,n,t){var a=JSON.parse(sessionStorage.getItem("vue-session-key"));if(e.matched.some((function(e){return e.meta.requiresAuth})))if(null===a.jwt)t({path:"/login"});else{var c=a.user;e.matched.some((function(e){return e.meta.is_admin}))?c.admin?t():t({name:"userboard"}):t()}else t()}));var F=M,L=t("2f62");a["a"].use(L["a"]);var B=new L["a"].Store({state:{snackbar:!1,color:"",texto:""},getters:{snackbarRes:function(e){e.snackbar=!0,e.color="green"},snackbarErr:function(e){e.snackbar=!0,e.color="red"}},mutations:{},actions:{},modules:{}}),H=(t("15f5"),t("f309"));a["a"].use(H["a"]);var N=new H["a"]({icons:{iconfont:"fa"}}),D=t("dc96"),I=t.n(D),R=t("0628"),U=t.n(R);a["a"].use(U.a),a["a"].use(I.a),a["a"].config.productionTip=!1,new a["a"]({router:F,store:B,vuetify:N,render:function(e){return e(q)}}).$mount("#app"),a["a"].use(t("2ead"))},"8a23":function(e,n,t){},"9c6c":function(e,n,t){e.exports=t.p+"img/logosos.0aa4e623.png"}});
//# sourceMappingURL=app.0b0e3a01.js.map