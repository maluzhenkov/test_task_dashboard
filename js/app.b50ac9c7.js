(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1ddbc884":"8c691ff8"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-1ddbc884":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-1ddbc884":"a11a7b86"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/test_task_dashboard/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},2866:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},o=[],i=(a("034f"),a("2877")),s=a("6544"),c=a.n(s),l=a("7496"),u={},d=Object(i["a"])(u,n,o,!1,null,null,null),f=d.exports;c()(d,{VApp:l["a"]});a("d3b7");var g=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",{staticClass:"dashboard brown lighten-5"},[a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{label:"Click & Drop","hide-details":""},model:{value:t.isDraggable,callback:function(e){t.isDraggable=e},expression:"isDraggable"}})],1),a("v-col",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mr-4",attrs:{text:""},on:{click:t.clearData}},[t._v("Очистить")]),a("v-btn",{attrs:{color:"success",to:{name:"NewCard"}}},[t._v("Добавить")])],1)],1)],1),a("card-grid",{attrs:{isDraggable:t.isDraggable},on:{change:t.saveCardList},model:{value:t.cards,callback:function(e){t.cards=e},expression:"cards"}})],1)},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.value&&t.value.length>0?a("draggable",{staticClass:"row",attrs:{list:t.value,disabled:!t.isDraggable,"ghost-class":"dragging"},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}}},t._l(t.value,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"3"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[a("v-card",{staticClass:"d-flex flex-column fill-height",attrs:{"max-height":"300",elevation:n?"4":"2"}},[a("v-card-title",{staticClass:"d-flex flex-nowrap justify-space-between"},[a("span",[t._v(t._s(e.title))]),t.isDraggable?t._e():a("v-btn",{attrs:{icon:"",small:""},on:{click:function(a){return t.openModal(e)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-open-in-new")])],1)],1),a("v-divider"),a("v-card-text",{staticClass:"card__description flex-grow-1 pb-0 mb-4"},[t._v(t._s(e.description))]),a("v-card-actions",[a("v-spacer"),a("span",{staticClass:"text--disabled"},[t._v(t._s(t._f("date")(e.createAt,"datetime")))])],1)],1)]}}],null,!0)})],1)})),1):a("v-row",[a("v-col",[a("v-alert",{staticClass:"text-center",attrs:{type:"info",text:""}},[t._v("Нет данных")])],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",{domProps:{textContent:t._s(t.modalItem.title)}}),a("v-divider"),a("v-card-text",{domProps:{textContent:t._s(t.modalItem.description)}}),a("v-card-actions",[a("v-spacer"),a("span",{staticClass:"text--disabled"},[t._v(t._s(t._f("date")(t.modalItem.createAt,"datetime")))])],1)],1)],1)],1)},h=[],b=a("310e"),_=a.n(b),w={name:"CardGrid",components:{draggable:_.a},props:{value:{type:Array,default:function(){return[]}},isDraggable:{type:Boolean,default:!1}},data:function(){return{dragging:!1,modal:!1,modalItem:{}}},methods:{openModal:function(t){this.modalItem=t,this.modal=!0}}},C=w,S=(a("bcd2"),a("0798")),y=a("8336"),D=a("b0af"),x=a("99d9"),A=a("62ad"),O=a("a523"),k=a("169a"),E=a("ce7e"),V=a("ce87"),j=a("132d"),T=a("0fd9"),I=a("2fa4"),N=Object(i["a"])(C,v,h,!1,null,"4c45bc32",null),R=N.exports;c()(N,{VAlert:S["a"],VBtn:y["a"],VCard:D["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:A["a"],VContainer:O["a"],VDialog:k["a"],VDivider:E["a"],VHover:V["a"],VIcon:j["a"],VRow:T["a"],VSpacer:I["a"]});var L={name:"Dashboard",components:{CardGrid:R},watch:{cards:{handler:function(t){this.saveCardList(t)}}},computed:{isDraggable:{set:function(t){this.$store.commit("SET_DRAGGABLE",t)},get:function(){return this.$store.getters.getStatusDraggable}},cards:{set:function(t){this.$store.commit("SET_CARDS",t)},get:function(){return this.$store.getters.getCards}}},created:function(){this.getCardList()},methods:{getCardList:function(){this.$store.dispatch("getCardList")},saveCardList:function(t){this.$store.dispatch("saveInStorage",t)},clearData:function(){this.$store.dispatch("clearStorage")}}},P=L,$=a("f6c4"),B=a("b73d"),J=Object(i["a"])(P,p,m,!1,null,null,null),M=J.exports;c()(J,{VBtn:y["a"],VCol:A["a"],VContainer:O["a"],VMain:$["a"],VRow:T["a"],VSwitch:B["a"]}),r["a"].use(g["a"]);var G=new g["a"]({mode:"history",base:"/test_task_dashboard/",routes:[{path:"/dashboard",alias:"/",name:"Dashboard",component:M},{path:"/new_card",name:"NewCard",component:function(){return a.e("chunk-1ddbc884").then(a.bind(null,"1054"))}},{path:"*",redirect:"/"}]}),q=(a("99af"),a("96cf"),a("1da1")),F=a("2909"),H=a("2f62");r["a"].use(H["a"]);var U="cards",W=new H["a"].Store({state:{isDraggable:!1,cards:[]},getters:{getStatusDraggable:function(t){return t.isDraggable},getCards:function(t){return t.cards}},mutations:{SET_DRAGGABLE:function(t,e){t.isDraggable=e},SET_CARDS:function(t,e){t.cards=e},ADD_NEW_CARD:function(t,e){t.cards=[e].concat(Object(F["a"])(t.cards))}},actions:{getCardList:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.abrupt("return",new Promise((function(t,e){try{var r=JSON.parse(localStorage.getItem(U));if(r)a("SET_CARDS",r);else{var n=[{id:1,title:"Title 1",createAt:(new Date).toISOString(),description:"Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо."},{id:2,title:"Title 2",createAt:(new Date).toISOString(),description:"Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо. Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо."}];localStorage.setItem(U,JSON.stringify(n)),a("SET_CARDS",n)}t()}catch(o){e(o)}})));case 2:case"end":return e.stop()}}),e)})))()},addNewCard:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.commit,a.abrupt("return",new Promise((function(t,a){try{var n=JSON.parse(localStorage.getItem(U));n?(n=[e].concat(Object(F["a"])(n)),localStorage.setItem(U,JSON.stringify(n))):localStorage.setItem(U,JSON.stringify([e])),r("ADD_NEW_CARD",e),t()}catch(o){a(o)}})));case 2:case"end":return a.stop()}}),a)})))()},saveInStorage:function(t,e){e&&e.length>0&&localStorage.setItem(U,JSON.stringify(e))},clearStorage:function(t){var e=t.commit;localStorage.removeItem(U),e("SET_CARDS",[])}}}),K=a("f309"),z=a("2992"),Q=a.n(z);r["a"].use(K["a"]);var X=new K["a"]({lang:{locales:{ru:Q.a},current:"ru"}}),Y=(a("caad"),a("2532"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date";if(t){"string"===typeof t&&(t=new Date(t));var a={};return e.includes("date")&&(a.day="2-digit",a.month="2-digit",a.year="numeric"),e.includes("time")&&(a.hour="2-digit",a.minute="2-digit",a.second="2-digit"),new Intl.DateTimeFormat("ru-RU",a).format(t)}});r["a"].filter("date",Y),r["a"].config.productionTip=!1,new r["a"]({router:G,store:W,vuetify:X,render:function(t){return t(f)}}).$mount("#app")},"8a23":function(t,e,a){},bcd2:function(t,e,a){"use strict";var r=a("2866"),n=a.n(r);n.a}});
//# sourceMappingURL=app.b50ac9c7.js.map