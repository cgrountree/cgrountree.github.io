(function(a){function e(e){for(var n,s,r=e[0],o=e[1],d=e[2],l=0,u=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);v&&v(e);while(u.length)u.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var a,e=0;e<c.length;e++){for(var t=c[e],n=!0,r=1;r<t.length;r++){var o=t[r];0!==i[o]&&(n=!1)}n&&(c.splice(e--,1),a=s(s.s=t[0]))}return a}var n={},i={app:0},c=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=a,s.c=n,s.d=function(a,e,t){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)s.d(t,n,function(e){return a[e]}.bind(null,n));return t},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var v=o;c.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"1bba":function(a,e,t){"use strict";t("64cc")},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),i={class:"mt-2 mx-3"},c={class:"mx-3"};function s(a,e,t,s,r,o){var d=Object(n["u"])("Navbar"),v=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",i,[Object(n["f"])(d),Object(n["f"])("div",c,[Object(n["f"])(v)])])}var r={class:"navbar",role:"navigation","aria-label":"main navigation"},o={class:"navbar-brand"},d=Object(n["f"])("h1",{class:"navbar-item has-text-primary"},"Cody Rountree",-1),v=Object(n["f"])("span",{class:"container"},null,-1),l=Object(n["f"])("span",{class:"container"},null,-1),u=Object(n["f"])("span",{class:"container"},null,-1),p={class:"navbar-start"},b=Object(n["e"])("about"),f=Object(n["e"])("projects"),m=Object(n["e"])("cv"),j={class:"navbar-end"},O=Object(n["e"])("contact");function h(a,e,t,i,c,s){var h=Object(n["u"])("router-link");return Object(n["o"])(),Object(n["c"])("nav",r,[Object(n["f"])("div",o,[d,Object(n["f"])("div",{class:["navbar-burger",{"is-active":c.showNav}],onClick:e[1]||(e[1]=function(a){return c.showNav=!c.showNav})},[v,l,u],2)]),Object(n["f"])("div",{id:"navbarMenu",class:["navbar-menu",{"is-active":c.showNav}]},[Object(n["f"])("div",p,[Object(n["f"])(h,{class:"navbar-item has-text-centered",to:"/"},{default:Object(n["y"])((function(){return[b]})),_:1}),Object(n["f"])(h,{class:"navbar-item has-text-centered",to:"/projects"},{default:Object(n["y"])((function(){return[f]})),_:1}),Object(n["f"])(h,{class:"navbar-item has-text-centered",to:"/cv"},{default:Object(n["y"])((function(){return[m]})),_:1})]),Object(n["f"])("div",j,[Object(n["f"])(h,{class:"navbar-item has-text-centered",to:"/contact"},{default:Object(n["y"])((function(){return[O]})),_:1})])],2)])}var g=t("3ebd"),y={name:"navbar",components:{},mixins:[g["a"]],data:function(){return{showNav:!1}},methods:{}};t("d5ea");y.render=h;var w=y,x={name:"App",components:{Navbar:w}};t("d632");x.render=s;var S=x,_=t("6c02"),P=Object(n["z"])("data-v-4e210036");Object(n["r"])("data-v-4e210036");var M={class:"content-container"},k=Object(n["f"])("p",null," this is about ",-1);Object(n["p"])();var C=P((function(a,e,t,i,c,s){return Object(n["o"])(),Object(n["c"])("div",M,[k])})),I={name:"about",props:{}};I.render=C,I.__scopeId="data-v-4e210036";var N=I,A=Object(n["z"])("data-v-3c247b3e");Object(n["r"])("data-v-3c247b3e");var E={class:"base-container"};Object(n["p"])();var J=A((function(a,e,t,i,c,s){return Object(n["o"])(),Object(n["c"])("div",E," this is projects ")})),B={name:"projects",props:{}};t("b6c2");B.render=J,B.__scopeId="data-v-3c247b3e";var D=B,T=Object(n["z"])("data-v-9e330a2a");Object(n["r"])("data-v-9e330a2a");var L=Object(n["d"])('<div class="block" data-v-9e330a2a></div><div class="columns" data-v-9e330a2a><div class="box column container is-three-fourths" data-v-9e330a2a><div class="section has-text-centered" data-v-9e330a2a><p class="title is-1" data-v-9e330a2a>Cody Rountree</p><p class="subtitle is-4" data-v-9e330a2a>Software Engineer</p></div><div class="section has-text-centered" data-v-9e330a2a><p class="title is-2 has-text-primary" data-v-9e330a2a>Experience</p><div class="columns" data-v-9e330a2a><div class="column" data-v-9e330a2a><p class="mt-4 title is-5" data-v-9e330a2a>Software Engineer</p><p class="subtitle is-6" data-v-9e330a2a> nCino, Inc. <br data-v-9e330a2a>Wilmington, North Carolina, USA </p></div></div><div class="subtitle is-6" data-v-9e330a2a><span data-v-9e330a2a>Salesforce |</span><span data-v-9e330a2a> Apex |</span><span data-v-9e330a2a> xQuery |</span><span data-v-9e330a2a> SOQL</span></div><div data-v-9e330a2a><ul data-v-9e330a2a><div data-v-9e330a2a><li data-v-9e330a2a> Maintaining and adding features to integrations for the nCino software </li></div><div data-v-9e330a2a><li data-v-9e330a2a> Develop methods to query and structure data required for API calls </li></div><div data-v-9e330a2a><li data-v-9e330a2a>Mapping data to required endpoints using xQuery and XSLT</li></div></ul></div><div class="columns" data-v-9e330a2a><div class="column" data-v-9e330a2a><p class="mt-6 title is-5" data-v-9e330a2a>Software Engineer</p><p class="subtitle is-6" data-v-9e330a2a> Toshiba Global Commerce Solutions <br data-v-9e330a2a>Durham, North Carolina, USA </p></div></div><div class="subtitle is-6" data-v-9e330a2a><span data-v-9e330a2a>Java (Spring framework) |</span><span data-v-9e330a2a> JavaScript (VueJs) |</span><span data-v-9e330a2a> OpenAPI |</span><span data-v-9e330a2a> MongoDB |</span><span data-v-9e330a2a> Docker</span></div><div data-v-9e330a2a><ul data-v-9e330a2a><div data-v-9e330a2a><li data-v-9e330a2a> Implemented internationalization with i18n on a VueJS frontend </li></div><div data-v-9e330a2a><li data-v-9e330a2a> Built RESTful API endpoints to specification with openAPI and Spring </li></div><div data-v-9e330a2a><li data-v-9e330a2a>Built complex queries using MongoDB to retrieve data</li></div></ul></div><div class="columns" data-v-9e330a2a><div class="column" data-v-9e330a2a><p class="mt-6 title is-5" data-v-9e330a2a>Software Engineer Intern</p><p class="subtitle is-6" data-v-9e330a2a> SunL <br data-v-9e330a2a>Matsusaka, Mie Prefecture, Japan </p></div></div><div class="subtitle is-6" data-v-9e330a2a><span data-v-9e330a2a>PHP (Laravel framework) |</span><span data-v-9e330a2a> HTML |</span><span data-v-9e330a2a> CSS |</span><span data-v-9e330a2a> MongoDB |</span><span data-v-9e330a2a> Docker</span></div><div data-v-9e330a2a><ul data-v-9e330a2a><div data-v-9e330a2a><li data-v-9e330a2a>Fixed bugs in PHP methods in the Laravel Framework</li></div><div data-v-9e330a2a><li data-v-9e330a2a>Implemented visual redesigns on webapp components</li></div><div data-v-9e330a2a><li data-v-9e330a2a>Built webpages for local government</li></div></ul></div></div><div class="section has-text-centered" data-v-9e330a2a><p class="title is-2 has-text-primary" data-v-9e330a2a>Education</p><p class="mt-6 title is-5" data-v-9e330a2a>University of North Carolina Wilmington</p><p class="subtitle is-6" data-v-9e330a2a> B.S. Computer Science <br data-v-9e330a2a>Wilmington, North Carolina, USA </p><p class="mt-6 title is-5" data-v-9e330a2a>Mie University</p><p class="subtitle is-6" data-v-9e330a2a> Exchange Student <br data-v-9e330a2a>Tsu, Mie Prefecture, Japan </p></div></div></div>',2);Object(n["p"])();var q=T((function(a,e,t,n,i,c){return L})),z={name:"cv",props:{}};t("1bba");z.render=q,z.__scopeId="data-v-9e330a2a";var U=z,H=Object(n["z"])("data-v-9cc5c81a");Object(n["r"])("data-v-9cc5c81a");var Q={class:"base-container"};Object(n["p"])();var R=H((function(a,e,t,i,c,s){return Object(n["o"])(),Object(n["c"])("div",Q," this is contact ")})),W={name:"contact",props:{}};t("c89f");W.render=R,W.__scopeId="data-v-9cc5c81a";var F=W,V=[{path:"/",name:"about",component:N,beforeEnter:function(a,e,t){var n=a.query.p;n?G.push(n):t()}},{path:"/projects",name:"projects",component:D},{path:"/cv",name:"cv",component:U},{path:"/contact",name:"contact",component:F}],G=Object(_["a"])({history:Object(_["b"])(),routes:V}),X=G;t("c1c3"),Object(n["b"])(S).use(X).mount("#app")},"5c9d":function(a,e,t){},"5ed2":function(a,e,t){},"64cc":function(a,e,t){},"93b3":function(a,e,t){},b6c2:function(a,e,t){"use strict";t("5c9d")},c1c3:function(a,e,t){},c89f:function(a,e,t){"use strict";t("f959")},d5ea:function(a,e,t){"use strict";t("5ed2")},d632:function(a,e,t){"use strict";t("93b3")},f959:function(a,e,t){}});
//# sourceMappingURL=app.d04e0710.js.map