(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-515a8379"],{"0095":function(t,n,e){"use strict";e("95c5")},"13aa":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},a=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=o,i=(e("0095"),e("2877")),s=Object(i["a"])(c,r,a,!1,null,null,null);n["default"]=s.exports},"159b":function(t,n,e){var r=e("da84"),a=e("fdbc"),o=e("17c2"),c=e("9112");for(var i in a){var s=r[i],l=s&&s.prototype;if(l&&l.forEach!==o)try{c(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,a=e("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"44b8":function(t,n,e){"use strict";e("e29a")},5530:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4");function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}},"857a":function(t,n,e){var r=e("1d80"),a=/"/g;t.exports=function(t,n,e,o){var c=String(r(t)),i="<"+n;return""!==e&&(i+=" "+e+'="'+String(o).replace(a,"&quot;")+'"'),i+">"+c+"</"+n+">"}},"95c5":function(t,n,e){},9911:function(t,n,e){"use strict";var r=e("23e7"),a=e("857a"),o=e("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return a(this,"a","href",t)}})},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},af03:function(t,n,e){var r=e("d039");t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},b64b:function(t,n,e){var r=e("23e7"),a=e("7b0b"),o=e("df75"),c=e("d039"),i=c((function(){o(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return o(a(t))}})},d81d:function(t,n,e){"use strict";var r=e("23e7"),a=e("b727").map,o=e("1dde"),c=o("map");r({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,n,e){var r=e("23e7"),a=e("83ab"),o=e("56ef"),c=e("fc6a"),i=e("06cf"),s=e("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var n,e,r=c(t),a=i.f,l=o(r),u={},f=0;while(l.length>f)e=a(r,n=l[f++]),void 0!==e&&s(u,n,e);return u}})},dd8c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container complementario"},[e("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e("div",{staticClass:"table-responsive"},[e("table",[t._m(0),e("tbody",t._l(t.computedData,(function(n,r){return e("tr",{key:"complementario-"+r},[e("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(n.tema)}}),e("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(n.referencia)}}),e("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(n.tipo)}}),e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"complementario__enlaces"},t._l(n.link,(function(t){return e("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[e("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),e("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),e("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),e("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],o=e("5530"),c=(e("d81d"),e("9911"),e("159b"),e("13aa")),i={name:"MaterialComplementario",components:{BannerInterno:c["default"]},computed:{complementarioData:function(){return this.$config.complementario},computedData:function(){var t=this,n=this.$config.complementario;return n.map((function(n){var e=[];return n.link?"string"===typeof n.link?e.push(n.link):e=n.link:n.descarga&&("string"===typeof n.descarga?e.push(t.obtenerLink(n.descarga)):n.descarga.forEach((function(n){e.push(t.obtenerLink(n))}))),Object(o["a"])(Object(o["a"])({},n),{},{link:e})}))}}},s=i,l=(e("44b8"),e("2877")),u=Object(l["a"])(s,r,a,!1,null,null,null);n["default"]=u.exports},e29a:function(t,n,e){},e439:function(t,n,e){var r=e("23e7"),a=e("d039"),o=e("fc6a"),c=e("06cf").f,i=e("83ab"),s=a((function(){c(1)})),l=!i||s;r({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,n){return c(o(t),n)}})}}]);
//# sourceMappingURL=comple.f69ca4e5.js.map