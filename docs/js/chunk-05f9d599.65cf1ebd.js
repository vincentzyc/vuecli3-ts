(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05f9d599"],{"00b6":function(t,e,n){},"3f3a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("basePage",{attrs:{title:"helloWorld"}},[n("cube-button",{on:{click:function(e){t.sandglass()}}},[t._v("sandglass-loading")]),n("cube-button",{attrs:{type:"submit"},on:{click:function(e){t.snake()}}},[t._v("snake-loading")]),n("cube-button",{attrs:{active:!0},on:{click:function(e){t.tripleBounce()}}},[t._v("triple-bounce-loading")]),n("cube-button",{attrs:{icon:"cubeic-right"},on:{click:function(e){t.goAbouot()}}},[t._v("goAbouot")]),n("cube-button",{attrs:{light:!0},on:{click:function(e){t.showBlandList()}}},[t._v("showBlandList")]),n("cube-button",{attrs:{inline:!0},on:{click:function(e){t.showCarType()}}},[t._v("showCarType")]),n("cube-button",{attrs:{outline:!0},on:{click:function(e){t.showBuyTime()}}},[t._v("showBuyTime")]),n("cube-button",{attrs:{primary:!0},on:{click:function(e){t.axiosPost()}}},[t._v("axiosPost")]),n("cube-checkbox-group",{attrs:{horizontal:!0},model:{value:t.buttonStyle,callback:function(e){t.buttonStyle=e},expression:"buttonStyle"}},[n("cube-checkbox",{attrs:{label:"inline"}},[t._v("Inline")]),n("cube-checkbox",{attrs:{label:"outline"}},[t._v("Outline")]),n("cube-checkbox",{attrs:{label:"primary"}},[t._v("Primary")])],1),n("cube-button",{attrs:{inline:t.inlineStyle,outline:t.outlineStyle,primary:t.primaryStyle}},[t._v("Demo Button")]),n("cube-button",{attrs:{disabled:!0}},[t._v("Disabled Button")])],1)},o=[],i=(n("96cf"),n("795b")),a=n.n(i);function u(t,e,n,r,o,i,u){try{var c=t[i](u),l=c.value}catch(s){return void n(s)}c.done?e(l):a.a.resolve(l).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new a.a(function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)})}}var l=n("9eb8"),s={name:"HelloWorld",data:function(){return{buttonStyle:["inline","outline","primary"],blandList:l.blandList,carType:l.carType,buyTime:l.buyTime}},computed:{inlineStyle:function(){return this.buttonStyle.indexOf("inline")>=0},outlineStyle:function(){return this.buttonStyle.indexOf("outline")>=0},primaryStyle:function(){return this.buttonStyle.indexOf("primary")>=0}},methods:{sandglass:function(){var t=this;this.$loading.open({text:"加载中...",type:"sandglass"}),setTimeout(function(){t.$loading.close()},3e3)},snake:function(){var t=this;this.$loading.open(),setTimeout(function(){t.$loading.close()},2e3)},tripleBounce:function(){var t=this;this.$loading.open({text:"正在提交...",type:"triple-bounce"}),setTimeout(function(){t.$loading.close()},3e3)},goAbouot:function(){this.$router.push("/about")},showBlandList:function(){this.blandPicker||(this.blandPicker=this.$createPicker({title:"请选择品牌",data:[this.blandList],onSelect:function(t){console.log(t)}})),this.blandPicker.show()},showCarType:function(){this.carPicker||(this.carPicker=this.$createPicker({title:"请选择车型",data:[this.carType],onSelect:function(t){console.log(t)}})),this.carPicker.show()},showBuyTime:function(){this.buyTimePicker||(this.buyTimePicker=this.$createPicker({title:"请选择购车时间",data:[this.buyTime],onSelect:function(t){console.log(t)}})),this.buyTimePicker.show()},axiosPost:function(){var t=c(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.ApiModule1.loginCheck({UserName:"123",PassWord:"456"});case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},h=s,f=(n("b2a0"),n("2877")),p=Object(f["a"])(h,r,o,!1,null,"da85d322",null);p.options.__file="hello-world.vue";e["default"]=p.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"===typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{s=e.regeneratorRuntime=l?t.exports:{},s.wrap=w;var h="suspendedStart",f="suspendedYield",p="executing",y="completed",v={},d={};d[a]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==r&&o.call(g,a)&&(d=g);var m=S.prototype=k.prototype=Object.create(d);L.prototype=m.constructor=S,S.constructor=L,S[c]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},s.awrap=function(t){return{__await:t}},_(T.prototype),T.prototype[u]=function(){return this},s.AsyncIterator=T,s.async=function(t,e,n,r){var o=new T(w(t,e,n,r));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=j,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new B(r||[]);return i._invoke=P(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function L(){}function S(){}function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,r,i,a){var u=x(t[n],t,r);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function P(t,e,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return $()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?y:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9eb8":function(t){t.exports={blandList:[{text:"X雪佛兰",value:"X雪佛兰"},{text:"B别克",value:"B别克"},{text:"K凯迪拉克",value:"K凯迪拉克"},{text:"T通用五菱商用车",value:"T通用五菱商用车"},{text:"B宝骏",value:"B宝骏"},{text:"C长安轿车",value:"C长安轿车"},{text:"C长安欧尚",value:"C长安欧尚"}],carType:[{text:"CS15",value:"CS15"},{text:"CS35",value:"CS35"},{text:"CS55",value:"CS55"},{text:"CS75",value:"CS75"},{text:"CS95",value:"CS95"},{text:"凌轩",value:"凌轩"},{text:"新奔奔",value:"新奔奔"},{text:"逸动",value:"逸动"},{text:"逸动XT",value:"逸动XT"},{text:"悦翔V7",value:"悦翔V7"},{text:"睿骋",value:"睿骋"},{text:"睿骋CC",value:"睿骋CC"}],buyTime:[{text:"三个月以内",value:"三个月以内"},{text:"三个月以上",value:"三个月以上"}]}},b2a0:function(t,e,n){"use strict";var r=n("00b6"),o=n.n(r);o.a}}]);