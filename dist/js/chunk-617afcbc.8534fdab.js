(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-617afcbc"],{"0130":function(t,e,a){"use strict";var r=a("4c12"),s=a.n(r);s.a},"44d6":function(t,e,a){},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var r=a("5530"),s=a("58df"),i=a("7e2b"),n=a("3206");e["a"]=Object(s["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4c12":function(t,e,a){},"9b9d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Nav"),a("Register")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.$store.state.color},model:{value:t.$store.state.snackbar,callback:function(e){t.$set(t.$store.state,"snackbar",e)},expression:"$store.state.snackbar"}},[a("span",[t._v(t._s(t.$store.state.texto))]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.$store.state.snackbar=!1}}},[t._v("Close")])],1),a("v-toolbar",{attrs:{flat:""}},[a("v-spacer"),a("v-toolbar-title",{staticClass:"mx-4 blue--text"},[t._v("Register")]),a("v-spacer")],1),a("v-form",[a("v-text-field",{attrs:{id:"nome",label:"Nome",name:"nome",type:"nome",required:""},model:{value:t.fields.nome,callback:function(e){t.$set(t.fields,"nome",e)},expression:"fields.nome"}}),a("v-text-field",{attrs:{type:"email",id:"email",label:"Email",name:"email",required:""},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password",required:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enviar()}},model:{value:t.fields.password,callback:function(e){t.$set(t.fields,"password",e)},expression:"fields.password"}})],1),a("v-card-actions",{staticClass:"d-flex justify-start blue--text"},[a("v-btn",{staticClass:"white--text",attrs:{color:"primary"},on:{click:function(e){return t.enviar()}}},[t._v("Cadastrar")])],1),a("v-card-actions",{staticClass:"d-flex justify-center blue--text"},[a("a",{staticClass:"body-1 blue--text",attrs:{href:"/login"}},[t._v("Tenho uma conta")])])],1)],1)],1)},n=[],o=a("bcb3"),l={name:"Register",data:function(){return{fields:{},drawer:null}},methods:{enviar:function(){var t=this;o["a"].registrar(this.fields).then((function(e){t.$store.getters.snackbarRes,t.$store.state.texto="Usuario cadastrado com sucesso!",t.fields={}})).catch((function(e){t.$store.getters.snackbarErr,t.$store.state.texto=e,t.fields={}}))}}},c=l,u=(a("f9ba"),a("2877")),d=a("6544"),f=a.n(d),h=a("8336"),v=a("99d9"),p=a("a523"),m=a("0e8f"),b=a("4bd4"),x=a("a722"),g=a("2db4"),w=a("2fa4"),_=a("8654"),V=a("71d9"),k=a("2a7f"),$=Object(u["a"])(c,i,n,!1,null,null,null),y=$.exports;f()($,{VBtn:h["a"],VCardActions:v["a"],VContainer:p["a"],VFlex:m["a"],VForm:b["a"],VLayout:x["a"],VSnackbar:g["a"],VSpacer:w["a"],VTextField:_["a"],VToolbar:V["a"],VToolbarTitle:k["a"]});var C=a("f86a"),B={name:"View-Register",components:{Register:y,Nav:C["a"]}},j=B,E=a("7496"),O=Object(u["a"])(j,r,s,!1,null,null,null);e["default"]=O.exports;f()(O,{VApp:E["a"]})},a722:function(t,e,a){"use strict";a("20f6");var r=a("e8f2");e["a"]=Object(r["a"])("layout")},f86a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:"",height:"80"}},[r("a",{attrs:{href:"/"}},[r("v-icon",{attrs:{xLarge:"",color:"white",left:""}},[t._v("mdi-school")])],1),r("v-toolbar-title",{staticClass:"headline white--text hidden-md-and-down"},[r("img",{staticStyle:{width:"50%",height:"80px"},attrs:{src:a("9c6c"),alt:"logoTutoria"}})]),r("v-spacer"),r("v-row",{staticClass:"d-flex justify-end"},[r("div",{staticClass:"mx-4"},[r("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/login"}},[t._v("Login")])],1),r("div",{staticClass:"mx-4"},[r("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/register"}},[t._v("Register")])],1)])],1)},s=[],i={name:"Nav",data:function(){return{hrefLogo:"/"}}},n=i,o=(a("0130"),a("2877")),l=a("6544"),c=a.n(l),u=a("40dc"),d=a("8336"),f=a("132d"),h=a("0fd9"),v=a("2fa4"),p=a("2a7f"),m=Object(o["a"])(n,r,s,!1,null,null,null);e["a"]=m.exports;c()(m,{VAppBar:u["a"],VBtn:d["a"],VIcon:f["a"],VRow:h["a"],VSpacer:v["a"],VToolbarTitle:p["a"]})},f9ba:function(t,e,a){"use strict";var r=a("44d6"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-617afcbc.8534fdab.js.map