(function(e){function t(t){for(var r,u,s=t[0],i=t[1],c=t[2],d=0,f=[];d<s.length;d++)u=s[d],o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/frmw_003/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h4",{attrs:{id:"author",title:"GossJS",hidden:""}},[e._v("Valentin Kiselev")]),n("h2",[e._v("FRMW-003")]),n("ul",{attrs:{id:"tasks"}},e._l(e.tasks,function(t){return n("li",[e._v("\n        "+e._s(t)+"\n        "),n("input",{attrs:{type:"checkbox"},on:{change:e.taskChanged}})])})),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"пустое"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("button",{on:{click:e.addTask}},[e._v("Добавить")]),n("br"),n("button",{on:{click:e.removeChecked}},[e._v("Удалить выполненные")])])},a=[],u=(n("1c4c"),n("ac6a"),{name:"app",data:function(){var e=this;return fetch("https://kodaktor.ru/j/tasklist",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.tasks=t.list}).catch(function(){return e.tasks=["первое","второе"]}),{tasks:[],value:""}},components:{},methods:{addTask:function(){0!=this.value.length?(this.tasks.push(this.value),this.value=""):alert("Пустая задача? Такую не добавлю :)")},taskChanged:function(e){e.target.checked?e.target.parentNode.classList.add("crossed"):e.target.parentNode.classList.remove("crossed")},removeChecked:function(){var e=document.querySelector("#tasks");Array.from(document.querySelectorAll("li.crossed")).forEach(function(t){e.removeChild(t)})}}}),s=u,i=(n("034f"),n("2877")),c=Object(i["a"])(s,o,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")},c21b:function(e,t,n){}});
//# sourceMappingURL=app.eada0f78.js.map