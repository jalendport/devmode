/*!
 * @project        Example Project
 * @name           vueclickaway.22fdbf1d5979efa8c882.js
 * @author         Andrew Welch
 * @build          Tue, Mar 5, 2019 4:38 AM ET
 * @release        e52fda97bd893ab612b55c031b95b11ea0e4de89 [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{17:function(e,n,t){"use strict";var i=t(0);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler";function a(e,n,t){c(e);var i=t.context,a=n.value;if("function"==typeof a){var u=!1;setTimeout(function(){u=!0},0),e[o]=function(n){var t=n.path||(n.composedPath?n.composedPath():void 0);if(u&&(t?t.indexOf(e)<0:!e.contains(n.target)))return a.call(i,n)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:c},d={directives:{onClickaway:u}};n.version="2.2.2",n.directive=u,n.mixin=d}}]);
//# sourceMappingURL=vueclickaway.22fdbf1d5979efa8c882.js.map