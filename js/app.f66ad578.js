(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)i=o[f],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("551c"),n("8a81");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:{pdf:t.isPdf()}},[a("v-toolbar",{attrs:{app:""}},[a("img",{staticClass:"me",attrs:{src:n("9f2c")},on:{click:function(e){return t.switchLang()}}}),a("v-toolbar-title",{staticClass:"headline"},[a("div",{staticClass:"flex"},[a("div",[a("div",[a("b",[t._v(t._s(t.root.name))])]),a("span",[a("i",[t._v(t._s(t.root.title))])])])]),a("div",{staticClass:"downloadBtn"},[a("a",{attrs:{href:t.exportUrl,download:""}},[a("i",{staticClass:"material-icons icon-image",attrs:{title:t.root.download}},[t._v("cloud_download")])])])]),a("v-spacer")],1),a("v-content",[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"col-left-container",attrs:{"xs-4":""}},[a("v-card",{staticClass:"col-left"},[a("div",{staticClass:"separator"},[t._v("\n                        "+t._s(t.root.aboutMe)+"\n                    ")]),a("div",{staticClass:"aboutMe"},[a("div",[t._v(t._s(t.root.aboutMe1))]),a("div",[t._v(t._s(t.root.aboutMe2)),a("b",[t._v(t._s(t.root.aboutMe3))])])]),a("div",{staticClass:"separator",staticStyle:{"margin-bottom":"0"}},[t._v("\n                        "+t._s(t.root.technicalSkills)+"\n                    ")]),t._l(t.skills,function(e,n){return a("div",{key:n+1e3,staticClass:"mySkills"},[a("v-layout",[a("v-flex",{staticStyle:{"max-width":"90px",height:"25px",display:"flex"},attrs:{"align-center":""}},[a("LinkComponent",{attrs:{theKey:e.key}})],1),a("v-flex",{staticStyle:{height:"25px","margin-right":"0px"}},[a("v-progress-linear",{attrs:{color:"secondary",height:"5",value:e.note.mark}}),a("div",{staticClass:"xp"},[t._v(t._s(e.note.xp))])],1)],1)],1)}),a("div",{staticClass:"separator",staticStyle:{margin:"0"}},[t._v("\n                        "+t._s(t.root.persoLabel)+"\n                    ")]),t._l(t.personnalStuff,function(e,n){return a("div",{key:n+3e3,staticClass:"nopadding"},[a("div",{staticClass:"personnalTitle"},[t._v(t._s(e.title))]),e.url?a("span",{staticClass:"url"},[t._v(t._s(e.url))]):t._e(),t._l(e.lines,function(e,n){return a("div",{key:n+4e3,staticClass:"alternate"},[a("div",{staticClass:"personnal"},[a("div",{staticStyle:{display:"inline-block"}},[a("b",[t._v("\n                                    "+t._s(e.link?e.link.label:""))])]),a("i",{staticStyle:{color:"grey"}},[t._v("  - "+t._s(e.date))]),a("div",{staticClass:"skills"},t._l(t.formatKeySkills(e.skills),function(t,e){return a("span",{key:e+4e3},[a("LinkComponent",{attrs:{theKey:t,displayName:!1}})],1)}),0)]),e.link?a("div",{staticClass:"url"},[a("a",{attrs:{href:e.link.url,target:"_blank"}},[t._v(t._s(e.link.url))])]):t._e(),a("span",{staticStyle:{color:"#989898"}},[t._v(t._s(e.label))])])})],2)}),a("div",{staticClass:"separator"},[t._v("\n                        "+t._s(t.root.miscLabel)+"\n                    ")]),t._l(t.miscs,function(e,n){return a("div",{key:n},[a("div",{staticStyle:{width:"70px",display:"inline-block"}},[a("b",[t._v(t._s(e.label))])]),t._v("\n                        "+t._s(e.content)+"\n                    ")])}),a("div",{staticClass:"separator"},[t._v("\n                        "+t._s(t.root.trainingLabel)+"\n                    ")]),t._l(t.trainings,function(e,n){return a("div",{key:n+2e3},[a("div",{staticStyle:{width:"70px",display:"inline-block"}},[a("b",[t._v(t._s(e.date))])]),t._v("\n                        "+t._s(e.title)+"\n                        "),a("div",[a("i",[t._v(t._s(e.content))])])])}),a("div",{staticClass:"separator"},[t._v("\n                        "+t._s(t.root.contactLabel)+"\n                    ")]),a("div"),t._l(t.root.contacts,function(e,n){return a("div",{key:n+4e3},[a("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(e))])])})],2)],1),a("v-flex",{attrs:{"xs-8":""}},[a("TimelineComponent")],1)],1)],1)],1)},i=[],o=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",{attrs:{dense:""}},t._l(t.employers,function(e,a){return n("v-timeline-item",{key:a,attrs:{color:e.color||"black",small:""}},[n("div",{staticClass:"py-3"},[n("h2",{class:"headline font-weight-light mb-3 "+e.color+"--text"},[n("v-layout",{attrs:{row:""}},[e.companyKey?n("LinkComponent",{staticClass:"headline font-weight-bold",attrs:{theKey:e.companyKey}}):t._e(),n("span",{class:"duration "+e.color+"--text"},[t._v("  - "+t._s(e.duration)+"\n                        "),0===a?n("span",[t._v(" (en cours)")]):t._e()]),n("v-flex",[n("div",{class:{"employer-skills":!0,first:0===a}},t._l(t.getSkills(e.missions).skills,function(t,e){return n("span",{key:e},[n("LinkComponent",{attrs:{theKey:t,displayName:!1}})],1)}),0)])],1),n("div",{staticClass:"capacity"},[t._v(t._s(e.capacity)+"\n\n                ")])],1),t._l(e.missions,function(e,a){return n("div",{key:a},[n("b",[n("LinkComponent",{attrs:{theKey:e.companyKey}}),t._v("\n                    "+t._s(e.companyKey?"-":""))],1),t._v("\n                "+t._s(e.capacity)+"\n                "),n("span",{staticClass:"duration2"},[t._v("("+t._s(e.duration)+")")]),t._l(e.practices,function(e,a){return n("div",{key:a,staticClass:"practice"},[n("span",{staticClass:"dot"}),t._v(t._s(e)+"\n                ")])}),e.keywords.length>0?n("span",{staticClass:"keyword"},[n("span",[t._v(t._s(t.root.keywordsLabel))]),t._v(" "+t._s(t.formatKeyWords(e.keywords)))]):t._e()],2)})],2),n("div",{staticClass:"date",class:e.color+"--text"},[t._v(t._s(e.startDate))])])}),1)}),l=[],c=(n("cadf"),n("5df3"),n("4f7f"),n("75fc")),u=(n("ac6a"),n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{class:"sprite sprite-"+t.theKey}),n("span",[t._v(t._s(t.displayName?t.getInfoLink(t.theKey).name:""))])])}),f=[],d={props:{theKey:{type:String,required:!0},displayName:{type:Boolean,default:!0}},data:function(){return{}},methods:{getInfoLink:function(t){return this.$dataService.getLinkInfo(t)}}},p=d,v=n("2877"),y=Object(v["a"])(p,u,f,!1,null,null,null),_=y.exports,h=["js","typescript","angular2","react","vuejs","nodejs","git","cs","windows","linux"],g=function(t){return function(e,n){var a=t.indexOf(e),r=t.indexOf(n);return a<0&&r<0?-1:a<0?1:r<0?-1:a-r}},m={name:"linkComponent",props:["data"],components:{LinkComponent:_},methods:{formatKeyWords:function(t){var e=this,n=this.$dataService.getAll().orderedKeywords;return t.filter(function(t){return n.includes(t)}).sort(g(n)).map(function(t){return e.$dataService.getAll().keywords[t]}).join(", ")},getSkills:function(t){var e=[];return t.forEach(function(t){e=t.skillsKeys.concat(e)}),e=Object(c["a"])(new Set(e)),e=e.filter(function(t){return h.includes(t)}).sort(g(h)),{skills:Object(c["a"])(new Set(e))}}},data:function(){return{employers:this.$dataService.getEmployers(),root:this.$dataService.getAll()}}},k=m,b=(n("e49f"),n("6544")),w=n.n(b),S=n("0e8f"),C=n("a722"),x=n("8414"),L=n("1e06"),j=Object(v["a"])(k,o,l,!1,null,null,null),O=j.exports;w()(j,{VFlex:S["a"],VLayout:C["a"],VTimeline:x["a"],VTimelineItem:L["a"]});var K=n("7618"),$=(n("7f7f"),n("7514"),n("d225")),T=n("b0b4"),V=function(){return JSON.parse(JSON.stringify(window.myCV))},A=V(),M="fr",P=function(){var t="1985-12-10",e=new Date(t),n=Date.now()-e.getTime(),a=new Date(n);return Math.abs(a.getFullYear()-1970)},E=function(){A.age=P()+" ans",A.age_en=P()+" years old";var t=Math.round((Date.now()-new Date("2019-02-01"))/1e3/86400/30),e=t>12?parseInt(t/12+"",10):0;t-=12*e,A.employers[0].duration=e>=1?e+" an"+(e>=2?"s":"")+(t>0?" et "+t+" mois":""):t+" mois",A.employers[0].duration_en=e>=1?e+" year"+(e>=2?"s":"")+(t>0?" and "+t+" month":""):t+" month"};E();var D=function(){function t(){Object($["a"])(this,t)}return Object(T["a"])(t,[{key:"getAll",value:function(){return A}},{key:"getEmployers",value:function(){return A.employers}},{key:"getLinkInfo",value:function(t){return A.links[t]||{}}},{key:"getSkill",value:function(t){return A.skills.find(function(e){return e.name===t})||{}}},{key:"getMiscs",value:function(){return A.miscs}},{key:"getTrainings",value:function(){return A.trainings}},{key:"getPersonalStuffs",value:function(){return A.personalStuff}},{key:"_changeLang",value:function(t,e){var n=this;for(var a in t)if(t.hasOwnProperty(a)){var r=t[a];Array.isArray(r)&&0===r.filter(function(t){return"string"===typeof t}).length?r.forEach(function(t){return n._changeLang(t,e)}):"object"!==Object(K["a"])(r)||Array.isArray(r)?t[a+"_"+e]&&(t[a+"_fr"]||(t[a+"_fr"]=t[a]),t[a]=t[a+"_"+e]):this._changeLang(r,e)}}},{key:"changeLang",value:function(t){t||(t="fr"===M?"en":"fr"),M=t,this._changeLang(A,t)}}]),t}(),I=!1;a["a"].prototype.$dataService=new D,window.location.href.includes("en")&&a["a"].prototype.$dataService.changeLang("en");var N={name:"App",components:{LinkComponent:_,TimelineComponent:O},created:function(){window.location.href.includes("pdf")&&(I=!0)},data:function(){var t=this,e=["js","typescript","angular2","react","vuejs","nodejs","git","css3","html5","windows","linux"].map(function(e){return{key:e,note:t.$dataService.getSkill(e)}}),n="https://us-central1-shareyourbooks-254022.cloudfunctions.net/urltopdf/urltopdf/https:@s@@s@alban44.github.io@q@pdf/CV_Alban_Alnot";return window.location.href.includes("localhost")&&(n="http://localhost:4000/urlToPdf/http:@s@@s@localhost:8080@q@pdf/cv-local"),{skills:e,miscs:this.$dataService.getMiscs(),trainings:this.$dataService.getTrainings(),personnalStuff:this.$dataService.getPersonalStuffs(),root:this.$dataService.getAll(),componentKey:0,exportUrl:n}},methods:{switchLang:function(){this.$dataService.changeLang()},isPdf:function(){return I},formatKeySkills:function(t){return t.filter(function(t){return["js","nodejs","react","vuejs","git"].includes(t)})}}},J=N,q=(n("5c0b"),n("7496")),F=n("b0af"),B=n("549c"),U=n("8e36"),W=n("9910"),Y=n("71d9"),z=n("2a7f"),G=Object(v["a"])(J,s,i,!1,null,null,null),H=G.exports;w()(G,{VApp:q["a"],VCard:F["a"],VContent:B["a"],VFlex:S["a"],VLayout:C["a"],VProgressLinear:U["a"],VSpacer:W["a"],VToolbar:Y["a"],VToolbarTitle:z["a"]});n("845f");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("6879"),r=n.n(a);r.a},6879:function(t,e,n){},"845f":function(t,e,n){},"9f2c":function(t,e,n){t.exports=n.p+"img/me.f876f6e6.png"},e49f:function(t,e,n){"use strict";var a=n("fa10"),r=n.n(a);r.a},fa10:function(t,e,n){}});
//# sourceMappingURL=app.f66ad578.js.map