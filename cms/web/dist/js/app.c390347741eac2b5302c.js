/*!
 * @project        Example Project
 * @name           app.c390347741eac2b5302c.js
 * @author         Andrew Welch
 * @build          Mon, Feb 17, 2020 7:38 PM ET
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);f.length;)f.shift()()}var n={},r={3:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"js/"+({1:"vendors~vue~vueclickaway",7:"lazysizes",10:"vueclickaway",16:"vuetyper"}[e]||e)+"."+{1:"576029b952f27fbb14d8",7:"cfd6a15c7cc3474f5c77",10:"a826e15c69f4aa0f57d2",16:"3dc29247b5473c84d172"}[e]+".js"}(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;o(o.s=7)}([,,,,,,function(e,t){
/*!
 * vue-snowf v0.0.2
 * 2017 (c) - Fuxy526
 * Released under the MIT License.
 */
e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach((function(e){var t=r[e];u[e]=function(){return t}}))}return{esModule:o,exports:i,options:s}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("canvas",{staticClass:"snowf-canvas"})},staticRenderFns:[]}},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),n(5)("e19b521a",r,!0)},function(e,t,n){"use strict";function r(e,t){var n=t-e;return t===e?e:Math.random()*n+e}function o(e){return 0===e.indexOf("#")?4===e.length?e.substr(1).split("").map((function(e){return parseInt(e.concat(e),16)})).join(","):7===e.length?[e.substr(1,2),e.substr(3,2),e.substr(5,2)].map((function(e){return parseInt(e,16)})).join(","):"255,255,255":0===e.indexOf("rgb(")?e.substring(4,e.length-1):"255,255,255"}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{amount:{type:Number,default:50},size:{type:Number,default:5},speed:{type:Number,default:1.5},wind:{type:Number,default:0},color:{type:String,default:"#fff"},opacity:{type:Number,default:.8},swing:{type:Number,default:1},image:{type:String,default:null},zIndex:{type:Number,default:null},resize:{type:Boolean,default:!0}},mounted:function(){function e(){var r;a.clearRect(0,0,u,s);for(var i=0;i<n.amount;i++){var c=f[i];n.image?(r||((r=new Image).src=n.image),a.drawImage(r,c.x-c.r,c.y-c.r,2*c.r,2*c.r)):(a.beginPath(),a.fillStyle="rgba("+o(n.color)+","+c.opacity+")",a.arc(c.x,c.y,c.r,2*Math.PI,!1),a.fill(),a.closePath()),c.velX=Math.abs(c.velX)<Math.abs(n.wind)?c.velX+n.wind/20:n.wind,c.y=c.y+.5*c.velY,c.x=c.x+(n.swing?.4*Math.cos(c.swing+=.03)*c.opacity*n.swing:0)+.5*c.velX,(c.x>u+c.r||c.x<-c.r||c.y>s+c.r||c.y<-c.r)&&t(c)}requestAnimationFrame(e)}function t(e){var t=e.r;e.r=r(n.size,2*n.size)/2,e.x>u+t?(e.x=-e.r,e.y=r(0,s)):e.x<-t?(e.x=u+e.r,e.y=r(0,s)):(e.x=r(0,u),e.y=-e.r),e.velX=0,e.velY=r(n.speed,2*n.speed),e.swing=r(0,2*Math.PI),e.opacity=r(0,n.opacity)}var n=this,i=n.$el,a=i.getContext("2d"),s=i.offsetHeight,u=i.offsetWidth,f=[];i.height=s,i.width=u,i.style.zIndex=n.zIndex?n.zIndex:"auto",function(){for(var t=0;t<n.amount;t++)f.push({x:r(0,u),y:r(0,s),r:r(n.size,2*n.size)/2,velX:0,velY:r(n.speed,2*n.speed),swing:r(0,2*Math.PI),opacity:r(0,n.opacity)});e()}(),n.resize&&window.addEventListener("resize",(function(){var e=i.height,t=i.width,r=i.offsetHeight,o=i.offsetWidth;i.height=s=r,i.width=u=o;for(var a=0;a<n.amount;a++){var c=f[a];c.x=c.x/t*o,c.y=c.y/e*r}}))}}},function(e,t,n){(e.exports=n(6)()).push([e.i,".snowf-canvas[data-v-107894b6]{position:absolute;left:0;top:0;width:100%;height:100%}",""])},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?(s.id=e+":"+r[a].parts.length,r[a].parts.push(s)):(s.id=e+":0",n.push(r[a]={id:a,parts:[s]}))}return n}function i(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),o=null!=r;if(o&&h)return v;if(m){var a=d++;r=p||(p=i()),t=s.bind(null,r,a,!1),n=s.bind(null,r,a,!0)}else r=r||i(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return o||t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!f)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),c={},l=f&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=o(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a];(u=c[s.id]).refs--,n.push(u)}t?r(i=o(e,t)):i=[];for(a=0;a<n.length;a++){var u;if(0===(u=n[a]).refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete c[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},function(e,t,n){n(2);var r=n(0)(n(3),n(1),"data-v-107894b6",null);e.exports=r.exports}])},function(e,t,n){"use strict";n.r(t);n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20);var r=n(6),o=n.n(r);(async()=>{const{default:e}=await n.e(1).then(n.bind(null,5)),{mixin:t}=await Promise.all([n.e(1),n.e(10)]).then(n.t.bind(null,23,7)),{default:r}=await n.e(16).then(n.t.bind(null,24,7)),i=await n.e(7).then(n.t.bind(null,25,7));await n.e(7).then(n.t.bind(null,26,7));i.init(),e.use(r);new e({el:"#page-header",mixins:[t],components:{Snowf:o()},delimiters:["${","}"],data:{menuOpen:!1},methods:{prerenderLink:function(e){const t=document.getElementsByTagName("head")[0],n=t.childNodes,r=n[n.length-1],o=t.getElementsByTagName("link");Array.prototype.forEach.call(o,(function(e,t){"rel"in e&&"prerender"===e.rel&&e.parentNode.removeChild(e)}));const i=document.createElement("link");i.rel="prerender",i.href=e.currentTarget.href,r.parentNode.insertBefore(i,r)},away:function(){this.menuOpen=!1},toggle:function(){this.menuOpen=!this.menuOpen}}})})().then(e=>{})},function(e,t){},function(e,t,n){e.exports=n.p+"fonts/fontello.eot"},function(e,t,n){e.exports=n.p+"fonts/fontello.ttf"},function(e,t,n){e.exports=n.p+"fonts/fontello.woff"},function(e,t,n){e.exports=n.p+"fonts/fontello.woff2"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-Book.eot"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-Book.ttf"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-Book.woff"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-Book.woff2"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-BookItalic.eot"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-BookItalic.ttf"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-BookItalic.woff"},function(e,t,n){e.exports=n.p+"fonts/OperatorMonoSSm-BookItalic.woff2"}]);
//# sourceMappingURL=app.c390347741eac2b5302c.js.map