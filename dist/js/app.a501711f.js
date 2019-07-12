(function(t){function e(e){for(var r,a,o=e[0],p=e[1],c=e[2],l=0,h=[];l<o.length;l++)a=o[l],s[a]&&h.push(s[a][0]),s[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var p=n[o];0!==s[p]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"031f":function(t,e,n){"use strict";var r=n("ffae"),s=n.n(r);s.a},"034f":function(t,e,n){"use strict";var r=n("27fb"),s=n.n(r);s.a},"27fb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("npm download size")]),n("p",{staticClass:"lead"},[t._v("Analyse download size and dependencies of npm packages.")]),n("p",[t._v("Enter a package name below and press enter!")]),n("v-autocomplete",{attrs:{wait:300,"min-len":2,"keep-open":!0,items:t.suggestions,"get-label":t.getLabel,"component-item":t.template,"input-attrs":{autofocus:"true"}},on:{"update-items":t.updateItems,"item-selected":t.go,enter:t.go}}),n("div",[t.alert?n("p",{staticClass:"alert"},[t._v(t._s(t.alert))]):t._e()]),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popular"}},[n("h2",[t._v("Popular packages")]),n("a",{attrs:{href:"#request"}},[t._v("request")]),t._v(",\n    "),n("a",{attrs:{href:"#chalk"}},[t._v("chalk")]),t._v(",\n    "),n("a",{attrs:{href:"#express"}},[t._v("express")]),t._v(",\n    "),n("a",{attrs:{href:"#browserify"}},[t._v("browserify")]),t._v(",\n    "),n("a",{attrs:{href:"#parcel"}},[t._v("parcel")]),t._v(",\n    "),n("a",{attrs:{href:"#webpack"}},[t._v("webpack")]),t._v(",\n    "),n("a",{attrs:{href:"#react"}},[t._v("react")]),t._v(",\n    "),n("a",{attrs:{href:"#moment"}},[t._v("moment")]),t._v(",\n    "),n("a",{attrs:{href:"#express"}},[t._v("express")]),t._v(",\n    "),n("a",{attrs:{href:"#lodash"}},[t._v("lodash")]),t._v(",\n    "),n("a",{attrs:{href:"#async"}},[t._v("async")]),t._v(",\n    "),n("a",{attrs:{href:"#forever"}},[t._v("forever")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.item.package.name+this.version))])},o=[],p={props:{item:{required:!0},searchText:{required:!0}},computed:{version:function(){let t=this.searchText.lastIndexOf("@");return t>0?this.searchText.substring(t):""}}},c=p,u=n("2877"),l=Object(u["a"])(c,a,o,!1,null,null,null);l.options.__file="Suggestion.vue";var h=l.exports,f={name:"app",props:["error"],data(){return{input:"",prevName:"",notFound:!1,errMsg:this.error,suggestions:[],template:h}},computed:{alert:function(){return this.notFound?`${this.input} is not found in npm registry`:this.errMsg},name:function(){let t=this.input.indexOf("@"),e=this.input.lastIndexOf("@");return t!==e||e>0?this.input.substring(0,e):this.input},version:function(){let t=this.input.lastIndexOf("@");return t>0?this.input.substring(t):""}},methods:{updateItems:function(t){this.input=t,this.name!==this.prevName&&(this.notFound=!1,this.errMsg=!1,""!==t&&(this.getSuggestions(this.name).then(()=>{this.notFound=0===this.suggestions.length,1===this.suggestions.length&&this.go()}),this.prevName=this.name))},getLabel:function(t){return t&&t.package&&t.package.name+this.version||""},go:function(t){this.alert||("object"===typeof t?this.$emit("path",this.getPath(t.package.name)):this.$emit("path",this.getPath(this.name)))},getSuggestions:async function(t){let e=`https://api.npms.io/v2/search/suggestions?q=${t}`;await fetch(e).then(t=>t.json()).then(t=>this.suggestions=t||[]).then(t=>t.sort(d)).catch(t=>this.$emit("error",t))},getPath:function(t){return this.uriEncodePkgName(t+this.version)},uriEncodePkgName:t=>t.replace("/","%2f")}};function d(t,e){return g(t)&&!g(e)?1:!g(t)&&g(e)?-1:e.searchScore-t.searchScore}function g(t){return t.flags&&t.flags.deprecated}var v=f,_=(n("034f"),Object(u["a"])(v,s,i,!1,null,null,null));_.options.__file="App.vue";var m=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},[t.pkg?t._e():n("div",{staticClass:"loading"},[t._v("\n    "+t._s(t.spinner)+" Loading, please wait.\n  ")]),t.pkg?n("div",[n("pkg",{attrs:{pkg:t.pkg}}),t.pkg.dependencies.length?n("div",[n("h1",[t._v("Dependencies")]),n("div",{staticClass:"deps"},t._l(t.deps,function(e){return n("dep",{key:e.name,attrs:{pkg:e,parent:t.pkg},on:{goto:t.goTo}})}))]):t._e()],1):t._e()])},b=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dep"},[n("bar",{attrs:{ratio:t.ratio}}),n("a",{staticClass:"description",attrs:{title:t.title},on:{click:t.click}},[t._v(t._s(t.pkg.name)+" @ "+t._s(t.pkg.version)+" -- "+t._s(t.pretty(t.pkg.size))+" ("+t._s(t.pkg.totalDependencies)+" deps)")])],1)},y=[],x=n("8a61"),P=n.n(x),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar"},[n("div",{staticClass:"fill",style:t.style})])},E=[],$={props:["ratio"],computed:{style:function(){return"width: "+10*this.ratio+"em;"}}},O=$,z=(n("031f"),Object(u["a"])(O,j,E,!1,null,"7ea654bc",null));z.options.__file="Bar.vue";var S=z.exports,N={props:["pkg","parent"],components:{bar:S},computed:{isParent:function(){return this.pkg===this.parent},title:function(){return this.isParent?"view on npmjs":"show pkg size"},size:function(){return this.isParent?this.pkg.tarballSize:this.pkg.size},ratio:function(){return this.size/this.parent.size}},methods:{click:function(){this.$emit("goto",this.pkg.name)},pretty:function(t){let e=0===t?[0,"B"]:P.a.byte.convert(t),n=e[0].toFixed(1)+" "+e[1];return n}}},T=N,C=(n("a4d5"),Object(u["a"])(T,w,y,!1,null,"6a852b0e",null));C.options.__file="Dep.vue";var I=C.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"package"},[n("h1",{attrs:{title:"goto npmjs"},on:{click:t.click}},[t._v(t._s(t.pkg.name)+" @ "+t._s(t.pkg.version))]),n("table",[n("tr",[n("th",[t._v("Version")]),n("td",[t._v(t._s(t.pkg.version))])]),n("tr",[n("th",[t._v("Total size")]),n("td",[t._v(t._s(t.pkg.prettySize))])]),n("tr",[n("th",[t._v("Total dependencies")]),n("td",[t._v(t._s(t.pkg.totalDependencies))])]),n("tr",[n("th",[t._v("Tarball size")]),n("td",[t._v(t._s(t.tarballSize))])]),n("tr",[n("th",[t._v("Direct dependencies")]),n("td",[t._v(t._s(t.pkg.dependencies.length))])])])])},F=[],q={props:["pkg"],computed:{tarballSize:function(){return D(this.pkg.tarballSize)}},methods:{click:function(){window.location.href=`https://npmjs.com/package/${this.pkg.name}`}}};function D(t){let e=0===t?[0,"B"]:P.a.byte.convert(t),n=e[0].toFixed(1)+" "+e[1];return n}var L=q,B=(n("6fad"),Object(u["a"])(L,M,F,!1,null,"0a3d6ba5",null));B.options.__file="Pkg.vue";var H=B.exports,A={props:["pkgName"],components:{dep:I,pkg:H},data:function(){return{pkg:null,spinner:"⠋",spinners:["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]}},computed:{deps:function(){return this.pkg&&this.pkg.dependencies.sort((t,e)=>e.size-t.size)}},methods:{getPkg:function(){this.spin(),this._interval=setInterval(this.spin,100);let t=`https://npm-download-size.seljebu.no/${this.pkgName}`;fetch(t).then(t=>{if(404!==t.status){if(500!==t.status)return t.json();t.text().then(t=>{this.$emit("error",new Error(t))})}else{let t=this.pkgName.replace("%2f","/");this.$emit("error",new Error(`"${t}" not found.`))}}).then(t=>{clearInterval(this._interval),this.pkg=t}).catch(t=>this.$emit("error",t))},goTo:function(t){this.pkg=null,this.$emit("path",this.uriEncodePkgName(t))},spin:function(){this.spinner=this.spinners.shift(),this.spinners.push(this.spinner)},uriEncodePkgName:t=>t.replace("/","%2f")},created:function(){this.getPkg()},watch:{pkgName:function(){this.getPkg()}}},J=A,V=(n("76f7"),Object(u["a"])(J,k,b,!1,null,"eac02bc2",null));V.options.__file="View.vue";var G=V.exports,K=n("d051"),Q=n.n(K);r["a"].use(Q.a);const R=new r["a"]({el:"#app",data:function(){return{path:window.location.hash.slice(1),error:""}},methods:{changePath:function(t){window.location.hash=t},handleError:function(t){console.error(t),this.error=t.message,this.changePath("")},getEmitHandlers:function(){return{error:this.handleError,path:this.changePath}}},render:function(t){switch(this.path){case"":return t(m,{props:{error:this.error},on:this.getEmitHandlers()});default:return t(G,{props:{pkgName:this.path},on:this.getEmitHandlers()})}}});window.addEventListener("hashchange",t=>{R.path=window.location.hash.slice(1)})},"6fad":function(t,e,n){"use strict";var r=n("bb3b"),s=n.n(r);s.a},"76f7":function(t,e,n){"use strict";var r=n("a6f6"),s=n.n(r);s.a},a4d5:function(t,e,n){"use strict";var r=n("c5e6"),s=n.n(r);s.a},a6f6:function(t,e,n){},bb3b:function(t,e,n){},c5e6:function(t,e,n){},ffae:function(t,e,n){}});
//# sourceMappingURL=app.a501711f.js.map