(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PerspectiveClient"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define("Components", ["PerspectiveClient", "React"], factory);
	else if(typeof exports === 'object')
		exports["Components"] = factory(require("PerspectiveClient"), require("React"));
	else
		root["Components"] = factory(root["PerspectiveClient"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typescript/client-components.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/apexcharts/dist/apexcharts.min.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/apexcharts/dist/apexcharts.min.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ApexCharts v3.54.1
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=Array(e);i<e;i++)a[i]=t[i];return a}function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,x(a.key),a)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=v(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,n=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return o=t.done,t},e:function(t){n=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(n)throw r}}}}function o(t){var i=c();return function(){var a,s=l(t);if(i){var r=l(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return function(t,i){if(i&&("object"==typeof i||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return e(t)}(this,a)}}function n(t,e,i){return(e=x(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var a,s,r,o,n=[],l=!0,h=!1;try{if(r=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(a=r.call(i)).done)&&(n.push(a.value),n.length!==e);l=!0);}catch(t){h=!0,s=t}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(h)throw s}}return n}}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(e,i){if(e){if("string"==typeof e)return t(e,i);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,i):void 0}}var m=function(){function t(){i(this,t)}return s(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),n=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-o)*s)+o)+","+(Math.round((a-n)*s)+n)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,o=i>>8&255,n=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-o)*s)+o)+(Math.round((a-n)*s)+n)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,i){return t.isColorHex(i)?this.shadeHexColor(e,i):this.shadeRGBColor(e,i)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===b(t)&&!Array.isArray(t)&&null!=t}},{key:"is",value:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){i.isObject(e[s])&&s in t?a[s]=i.extend(t[s],e[s]):Object.assign(a,n({},s,e[s]))})),a}},{key:"extendArray",value:function(e,i){var a=[];return e.map((function(e){a.push(t.extend(i,e))})),e=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if(t.is("Array",e)){for(var i=[],a=0;a<e.length;a++)i[a]=this.clone(e[a]);return i}if(t.is("Null",e))return null;if(t.is("Date",e))return e;if("object"===b(e)){var s={};for(var r in e)e.hasOwnProperty(r)&&(s[r]=this.clone(e[r]));return s}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"stripNumber",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.isInteger(t)?t:parseFloat(t.toPrecision(e))}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=t.clientHeight,a=t.clientWidth;return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),[a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"getPolygonPos",value:function(t,e){for(var i=[],a=2*Math.PI/e,s=0;s<e;s++){var r={};r.x=t*Math.sin(s*a),r.y=-t*Math.cos(s*a),i.push(r)}return i}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"preciseAddition",value:function(t,e){var i=(String(t).split(".")[1]||"").length,a=(String(e).split(".")[1]||"").length,s=Math.pow(10,Math.max(i,a));return(Math.round(t*s)+Math.round(e*s))/s}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isMsEdge",value:function(){var t=window.navigator.userAgent,e=t.indexOf("Edge/");return e>0&&parseInt(t.substring(e+5,t.indexOf(".",e)),10)}},{key:"getGCD",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,a=Math.pow(10,i-Math.floor(Math.log10(Math.max(t,e))));for(t=Math.round(Math.abs(t)*a),e=Math.round(Math.abs(e)*a);e;){var s=e;e=t%e,t=s}return t/a}},{key:"getPrimeFactors",value:function(t){for(var e=[],i=2;t>=2;)t%i==0?(e.push(i),t/=i):i++;return e}},{key:"mod",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,a=Math.pow(10,i-Math.floor(Math.log10(Math.max(t,e))));return(t=Math.round(Math.abs(t)*a))%(e=Math.round(Math.abs(e)*a))/a}}]),t}(),y=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return s(t,[{key:"setEasingFunctions",value:function(){var t;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":default:t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}}this.w.globals.easing=t}}},{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateMarker",value:function(t,e,i,a){t.attr({opacity:0}).animate(e,i).attr({opacity:1}).afterAll((function(){a()}))}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).afterAll((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,o=t.pathTo,n=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,o,n,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){var e=t.el;e.classList.remove("apexcharts-element-hidden"),e.classList.add("apexcharts-hidden-element-shown")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,o,n){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(o=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(o=1),t.plot(s).animate(1,h.globals.easing,n).plot(s).animate(o,h.globals.easing,n).plot(r).afterAll((function(){m.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}(),w=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"addDarkenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"applyFilter",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:a});break;case"darken":this.addDarkenFilter(t,e,{intensity:a})}}},{key:"addShadow",value:function(t,e,i){var a,s=this.w,r=i.blur,o=i.top,n=i.left,l=i.color,h=i.opacity;if((null===(a=s.config.chart.dropShadow.enabledOnSeries)||void 0===a?void 0:a.length)>0&&-1===s.config.chart.dropShadow.enabledOnSeries.indexOf(e))return t;var c=t.flood(Array.isArray(l)?l[e]:l,h).composite(t.sourceAlpha,"in").offset(n,o).gaussianBlur(r).merge(t.source);return t.blend(t.source,c)}},{key:"dropShadow",value:function(t,e){var i,a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.top,o=e.left,n=e.blur,l=e.color,h=e.opacity,c=e.noUserSpaceOnUse,d=this.w;if(t.unfilter(!0),m.isMsEdge()&&"radialBar"===d.config.chart.type)return t;if((null===(i=d.config.chart.dropShadow.enabledOnSeries)||void 0===i?void 0:i.length)>0&&-1===(null===(a=d.config.chart.dropShadow.enabledOnSeries)||void 0===a?void 0:a.indexOf(s)))return t;return l=Array.isArray(l)?l[s]:l,t.filter((function(t){var e=null;e=m.isSafari()||m.isFirefox()||m.isMsEdge()?t.flood(l,h).composite(t.sourceAlpha,"in").offset(o,r).gaussianBlur(n):t.flood(l,h).composite(t.sourceAlpha,"in").offset(o,r).gaussianBlur(n).merge(t.source),t.blend(t.source,e)})),c||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type,s.value)}}},{key:"_scaleFilterSize",value:function(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),t}(),k=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"roundPathCorners",value:function(t,e){function i(t,e,i){var s=e.x-t.x,r=e.y-t.y,o=Math.sqrt(s*s+r*r);return a(t,e,Math.min(1,i/o))}function a(t,e,i){return{x:t.x+(e.x-t.x)*i,y:t.y+(e.y-t.y)*i}}function s(t,e){t.length>2&&(t[t.length-2]=e.x,t[t.length-1]=e.y)}function r(t){return{x:parseFloat(t[t.length-2]),y:parseFloat(t[t.length-1])}}t.indexOf("NaN")>-1&&(t="");var o=t.split(/[,\s]/).reduce((function(t,e){var i=e.match("([a-zA-Z])(.+)");return i?(t.push(i[1]),t.push(i[2])):t.push(e),t}),[]).reduce((function(t,e){return parseFloat(e)==e&&t.length?t[t.length-1].push(e):t.push([e]),t}),[]),n=[];if(o.length>1){var l=r(o[0]),h=null;"Z"==o[o.length-1][0]&&o[0].length>2&&(h=["L",l.x,l.y],o[o.length-1]=h),n.push(o[0]);for(var c=1;c<o.length;c++){var d=n[n.length-1],g=o[c],u=g==h?o[1]:o[c+1];if(u&&d&&d.length>2&&"L"==g[0]&&u.length>2&&"L"==u[0]){var f,p,x=r(d),b=r(g),v=r(u);f=i(b,x,e),p=i(b,v,e),s(g,f),g.origPoint=b,n.push(g);var m=a(f,b,.5),y=a(b,p,.5),w=["C",m.x,m.y,y.x,y.y,p.x,p.y];w.origPoint=b,n.push(w)}else n.push(g)}if(h){var k=r(n[n.length-1]);n.push(["Z"]),s(n[0],k)}}else n=o;return n.reduce((function(t,e){return t+e.join(" ")+" "}),"")}},{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt";return this.w.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":o,"stroke-linecap":n})}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w.globals.dom.Paper.rect();return c.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:o,"stroke-width":null!==n?n:0,stroke:null!==l?l:"none","stroke-dasharray":h}),c.node.setAttribute("fill",r),c}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";return this.w.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i})}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t<0&&(t=0);var i=this.w.globals.dom.Paper.circle(2*t);return null!==e&&i.attr(e),i}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,o=void 0===r?1:r,n=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,g=t.classes,u=t.strokeLinecap,f=void 0===u?null:u,p=t.strokeDashArray,x=void 0===p?0:p,b=this.w;return null===f&&(f=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:n,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":o,"stroke-dasharray":x,class:g})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w.globals.dom.Paper.group();return null!==t&&e.attr(t),e}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=[" L",t,e].join(" "):"H"===i?a=[" H",t].join(" "):"V"===i&&(a=[" V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var o=["C",t,e,i,a,s,r].join(" ");return o}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,o){var n="A";arguments.length>7&&void 0!==arguments[7]&&arguments[7]&&(n="a");var l=[n,t,e,i,a,s,r,o].join(" ");return l}},{key:"renderPaths",value:function(t){var e,i=t.j,a=t.realIndex,s=t.pathFrom,r=t.pathTo,o=t.stroke,n=t.strokeWidth,l=t.strokeLinecap,h=t.fill,c=t.animationDelay,d=t.initialSpeed,u=t.dataChangeSpeed,f=t.className,p=t.chartType,x=t.shouldClipToGrid,b=void 0===x||x,v=t.bindEventsOnPaths,m=void 0===v||v,k=t.drawShadow,A=void 0===k||k,S=this.w,C=new w(this.ctx),L=new y(this.ctx),P=this.w.config.chart.animations.enabled,M=P&&this.w.config.chart.animations.dynamicAnimation.enabled,I=!!(P&&!S.globals.resized||M&&S.globals.dataChanged&&S.globals.shouldAnimate);I?e=s:(e=r,S.globals.animationEnded=!0);var T=S.config.stroke.dashArray,z=0;z=Array.isArray(T)?T[a]:S.config.stroke.dashArray;var X=this.drawPath({d:e,stroke:o,strokeWidth:n,fill:h,fillOpacity:1,classes:f,strokeLinecap:l,strokeDashArray:z});if(X.attr("index",a),b&&("bar"===p&&!S.globals.isHorizontal||S.globals.comboCharts?X.attr({"clip-path":"url(#gridRectBarMask".concat(S.globals.cuid,")")}):X.attr({"clip-path":"url(#gridRectMask".concat(S.globals.cuid,")")})),"none"!==S.config.states.normal.filter.type)C.getDefaultFilter(X,a);else if(S.config.chart.dropShadow.enabled&&A){var E=S.config.chart.dropShadow;C.dropShadow(X,E,a)}m&&(X.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,X)),X.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,X)),X.node.addEventListener("mousedown",this.pathMouseDown.bind(this,X))),X.attr({pathTo:r,pathFrom:s});var Y={el:X,j:i,realIndex:a,pathFrom:s,pathTo:r,fill:h,strokeWidth:n,delay:c};return!P||S.globals.resized||S.globals.dataChanged?!S.globals.resized&&S.globals.dataChanged||L.showDelayedElements():L.animatePathsGradually(g(g({},Y),{},{speed:d})),S.globals.dataChanged&&M&&I&&L.animatePathsGradually(g(g({},Y),{},{speed:u})),X}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return this.w.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}))}},{key:"drawGradient",value:function(t,e,i,a,s){var r,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=m.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=m.hexToRgba(i,s));var d=0,g=1,u=1,f=null;null!==n&&(d=void 0!==n[0]?n[0]/100:0,g=void 0!==n[1]?n[1]/100:1,u=void 0!==n[2]?n[2]/100:1,f=void 0!==n[3]?n[3]/100:null);var p=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){t.at(d,e,a),t.at(g,i,s),t.at(u,i,s),null!==f&&t.at(f,e,a)})):c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.at(e.offset/100,e.color,e.opacity)}))})),p){var x=c.globals.gridWidth/2,b=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:x,cy:b,r:o}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"getTextBasedOnMaxWidth",value:function(t){var e=t.text,i=t.maxWidth,a=t.fontSize,s=t.fontFamily,r=this.getTextRects(e,a,s),o=r.width/e.length,n=Math.floor(i/o);return i<r.width?e.slice(0,n-3)+"...":e}},{key:"drawText",value:function(t){var e=this,i=t.x,a=t.y,s=t.text,r=t.textAnchor,o=t.fontSize,n=t.fontFamily,l=t.fontWeight,h=t.foreColor,c=t.opacity,d=t.maxWidth,u=t.cssClass,f=void 0===u?"":u,p=t.isPlainText,x=void 0===p||p,b=t.dominantBaseline,v=void 0===b?"auto":b,m=this.w;void 0===s&&(s="");var y=s;r||(r="start"),h&&h.length||(h=m.config.chart.foreColor),n=n||m.config.chart.fontFamily,l=l||"regular";var w,k={maxWidth:d,fontSize:o=o||"11px",fontFamily:n};return Array.isArray(s)?w=m.globals.dom.Paper.text((function(t){for(var i=0;i<s.length;i++)y=s[i],d&&(y=e.getTextBasedOnMaxWidth(g({text:s[i]},k))),0===i?t.tspan(y):t.tspan(y).newLine()})):(d&&(y=this.getTextBasedOnMaxWidth(g({text:s},k))),w=x?m.globals.dom.Paper.plain(s):m.globals.dom.Paper.text((function(t){return t.tspan(y)}))),w.attr({x:i,y:a,"text-anchor":r,"dominant-baseline":v,"font-size":o,"font-family":n,"font-weight":l,fill:h,class:"apexcharts-text "+f}),w.node.style.fontFamily=n,w.node.style.opacity=c,w}},{key:"getMarkerPath",value:function(t,e,i,a){var s="";switch(i){case"cross":s="M ".concat(t-(a/=1.4)," ").concat(e-a," L ").concat(t+a," ").concat(e+a,"  M ").concat(t-a," ").concat(e+a," L ").concat(t+a," ").concat(e-a);break;case"plus":s="M ".concat(t-(a/=1.12)," ").concat(e," L ").concat(t+a," ").concat(e,"  M ").concat(t," ").concat(e-a," L ").concat(t," ").concat(e+a);break;case"star":case"sparkle":var r=5;a*=1.15,"sparkle"===i&&(a/=1.1,r=4);for(var o=Math.PI/r,n=0;n<=2*r;n++){var l=n*o,h=n%2==0?a:a/2;s+=(0===n?"M":"L")+(t+h*Math.sin(l))+","+(e-h*Math.cos(l))}s+="Z";break;case"triangle":s="M ".concat(t," ").concat(e-a," \n             L ").concat(t+a," ").concat(e+a," \n             L ").concat(t-a," ").concat(e+a," \n             Z");break;case"square":case"rect":s="M ".concat(t-(a/=1.125)," ").concat(e-a," \n           L ").concat(t+a," ").concat(e-a," \n           L ").concat(t+a," ").concat(e+a," \n           L ").concat(t-a," ").concat(e+a," \n           Z");break;case"diamond":a*=1.05,s="M ".concat(t," ").concat(e-a," \n             L ").concat(t+a," ").concat(e," \n             L ").concat(t," ").concat(e+a," \n             L ").concat(t-a," ").concat(e," \n            Z");break;case"line":s="M ".concat(t-(a/=1.1)," ").concat(e," \n           L ").concat(t+a," ").concat(e);break;default:a*=2,s="M ".concat(t,", ").concat(e," \n           m -").concat(a/2,", 0 \n           a ").concat(a/2,",").concat(a/2," 0 1,0 ").concat(a,",0 \n           a ").concat(a/2,",").concat(a/2," 0 1,0 -").concat(a,",0")}return s}},{key:"drawMarkerShape",value:function(t,e,i,a,s){var r=this.drawPath({d:this.getMarkerPath(t,e,i,a,s),stroke:s.pointStrokeColor,strokeDashArray:s.pointStrokeDashArray,strokeWidth:s.pointStrokeWidth,fill:s.pointFillColor,fillOpacity:s.pointFillOpacity,strokeOpacity:s.pointStrokeOpacity});return r.attr({cx:t,cy:e,shape:s.shape,class:s.class?s.class:""}),r}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0;return m.isNumber(e)||(a=0,e=0),this.drawMarkerShape(t,e,null==i?void 0:i.shape,a,g(g({},i),"line"===i.shape||"plus"===i.shape||"cross"===i.shape?{pointStrokeColor:i.pointFillColor,pointStrokeOpacity:i.pointFillOpacity}:{}))}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new w(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(t,s,o.type,o.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new w(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new w(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),o="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var n=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(n,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),o="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===o){var d=i.config.states.active.filter;if("none"!==d)a.applyFilter(t,s,d.type,d.value);else if("none"!==i.config.states.hover.filter&&!i.globals.isTouchDevice){var g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}}else if("none"!==i.config.states.active.filter.type)if("none"===i.config.states.hover.filter.type||i.globals.isTouchDevice)a.getDefaultFilter(t,s);else{g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e={};return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,o=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),r.globals.dom.Paper.add(o);var n=o.bbox();return s||(n=o.node.getBoundingClientRect()),o.remove(),{width:n.width,height:n.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/1.1)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/1.1)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),A=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getStackedSeriesTotals",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.w,i=[];if(0===e.globals.series.length)return i;for(var a=0;a<e.globals.series[e.globals.maxValsInArrayIndex].length;a++){for(var s=0,r=0;r<e.globals.series.length;r++)void 0!==e.globals.series[r][a]&&-1===t.indexOf(r)&&(s+=e.globals.series[r][a]);i.push(s)}return i}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"getStackedSeriesTotalsByGroups",value:function(){var t=this,e=this.w,i=[];return e.globals.seriesGroups.forEach((function(a){var s=[];e.config.series.forEach((function(t,i){a.indexOf(e.globals.seriesNames[i])>-1&&s.push(i)}));var r=e.globals.series.map((function(t,e){return-1===s.indexOf(e)?e:-1})).filter((function(t){return-1!==t}));i.push(t.getStackedSeriesTotals(r))})),i}},{key:"setSeriesYAxisMappings",value:function(){var t=this.w.globals,e=this.w.config,i=[],a=[],s=[],r=t.series.length>e.yaxis.length||e.yaxis.some((function(t){return Array.isArray(t.seriesName)}));e.series.forEach((function(t,e){s.push(e),a.push(null)})),e.yaxis.forEach((function(t,e){i[e]=[]}));var o=[];e.yaxis.forEach((function(t,a){var n=!1;if(t.seriesName){var l=[];Array.isArray(t.seriesName)?l=t.seriesName:l.push(t.seriesName),l.forEach((function(t){e.series.forEach((function(e,o){if(e.name===t){var l=o;a===o||r?!r||s.indexOf(o)>-1?i[a].push([a,o]):console.warn("Series '"+e.name+"' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes."):(i[o].push([o,a]),l=a),n=!0,-1!==(l=s.indexOf(l))&&s.splice(l,1)}}))}))}n||o.push(a)})),i=i.map((function(t,e){var i=[];return t.forEach((function(t){a[t[1]]=t[0],i.push(t[1])})),i}));for(var n=e.yaxis.length-1,l=0;l<o.length&&(n=o[l],i[n]=[],s);l++){var h=s[0];s.shift(),i[n].push(h),a[h]=n}s.forEach((function(t){i[n].push(t),a[t]=n})),t.seriesYAxisMap=i.map((function(t){return t})),t.seriesYAxisReverseMap=a.map((function(t){return t})),t.seriesYAxisMap.forEach((function(t,i){t.forEach((function(t){e.series[t]&&void 0===e.series[t].group&&(e.series[t].group="apexcharts-axis-".concat(i.toString()))}))}))}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.config.markers.discrete&&t.config.markers.discrete.length&&t.config.markers.discrete.forEach((function(t){e=Math.max(e,t.size)})),e>0&&(t.config.markers.hover.size>0?e=t.config.markers.hover.size:e+=t.config.markers.hover.sizeOffset),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,o=0;o<a.length;o++)i.globals.seriesX[s][o]>t&&i.globals.seriesX[s][o]<e&&(r+=a[o]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],o=0;r&&(o=100*e[s]/r),a.push(o)}else{var n=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(n)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a=this,s=this.w,r=s.globals,o=[],n=0,l=[],h=.1,c=0;if(r.yRange=[],r.isMultipleYAxis)for(var d=0;d<r.minYArr.length;d++)r.yRange.push(Math.abs(r.minYArr[d]-r.maxYArr[d])),l.push(0);else r.yRange.push(Math.abs(r.minY-r.maxY));r.xRange=Math.abs(r.maxX-r.minX),r.zRange=Math.abs(r.maxZ-r.minZ);for(var g=0;g<r.yRange.length;g++)o.push(r.yRange[g]/r.gridHeight);if(e=r.xRange/r.gridWidth,t=r.yRange/r.gridWidth,i=r.xRange/r.gridHeight,(n=r.zRange/r.gridHeight*16)||(n=1),r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(r.hasNegs=!0),s.globals.seriesYAxisReverseMap.length>0){var u=function(t,e){var i=s.config.yaxis[s.globals.seriesYAxisReverseMap[e]],r=t<0?-1:1;return t=Math.abs(t),i.logarithmic&&(t=a.getBaseLog(i.logBase,t)),-r*t/o[e]};if(r.isMultipleYAxis){l=[];for(var f=0;f<o.length;f++)l.push(u(r.minYArr[f],f))}else(l=[]).push(u(r.minY,0)),r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(h=-r.minY/t,c=r.minX/e)}else(l=[]).push(0),h=0,c=0;return{yRatio:o,invertedYRatio:t,zRatio:n,xRatio:e,invertedXRatio:i,baseLineInvertedY:h,baseLineY:l,baseLineX:c}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){var s=i.globals.seriesYAxisReverseMap[a];return i.config.yaxis[s]&&i.config.yaxis[s].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(i.config.yaxis[s].logBase,t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getBaseLog",value:function(t,e){return Math.log(e)/Math.log(t)}},{key:"getLogVal",value:function(t,e,i){if(e<=0)return 0;var a=this.w,s=0===a.globals.minYArr[i]?-1:this.getBaseLog(t,a.globals.minYArr[i]),r=(0===a.globals.maxYArr[i]?0:this.getBaseLog(t,a.globals.maxYArr[i]))-s;return e<1?e/r:(this.getBaseLog(t,e)-s)/r}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){var r=i.globals.seriesYAxisReverseMap[s];if(i.config.yaxis[r]&&e.w.config.yaxis[r].logarithmic){var o,n=-Number.MAX_VALUE,l=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(n=Math.max(t,n),l=Math.min(t,l))}))})),o=Math.pow(a.yRange[s],Math.abs(l-n)/a.yRange[s]),a.yLogRatio[s]=o/a.gridHeight,o}})),a.invalidLogScale?t.slice():a.yLogRatio}},{key:"drawSeriesByGroup",value:function(t,e,i,a){var s=this.w,r=[];return t.series.length>0&&e.forEach((function(e){var o=[],n=[];t.i.forEach((function(i,a){s.config.series[i].group===e&&(o.push(t.series[a]),n.push(i))})),o.length>0&&r.push(a.draw(o,i,n))})),r}}],[{key:"checkComboSeries",value:function(t,e){var i=!1,a=0,s=0;return void 0===e&&(e="line"),t.length&&void 0!==t[0].type&&t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||a++,void 0!==t.type&&t.type!==e&&s++})),s>0&&(i=!0),{comboBarCount:a,comboCharts:i}}},{key:"extendArrayProps",value:function(t,e,i){var a,s,r,o,n,l;(null!==(a=e)&&void 0!==a&&a.yaxis&&(e=t.extendYAxis(e,i)),null!==(s=e)&&void 0!==s&&s.annotations)&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),null!==(r=e)&&void 0!==r&&null!==(o=r.annotations)&&void 0!==o&&o.xaxis&&(e=t.extendXAxisAnnotations(e)),null!==(n=e)&&void 0!==n&&null!==(l=n.annotations)&&void 0!==l&&l.points&&(e=t.extendPointAnnotations(e)));return e}}]),t}(),S=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e}return s(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4);var o="top"===t.label.position?r.width:-r.width;s.setAttribute("y",parseFloat(s.getAttribute("y"))+o);var n=this.annoCtx.graphics.rotateAroundCenter(s),l=n.x,h=n.y;s.setAttribute("transform","rotate(-90 ".concat(l," ").concat(h,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||!e.label.text||!String(e.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding,o=r.left,n=r.right,l=r.top,h=r.bottom;if("vertical"===e.label.orientation){var c=[o,n,l,h];l=c[0],h=c[1],o=c[2],n=c[3]}var d=s.left-a.left-o,g=s.top-a.top-l,u=this.annoCtx.graphics.drawRect(d-i.globals.barPadForNumericAxis,g,s.width+o+n,s.height+l+h,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&u.node.classList.add(e.id),u}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var o=r.parentNode,n=t.addBackgroundToAnno(r,i);n&&(o.insertBefore(n.node,r),i.label.mouseEnter&&n.node.addEventListener("mouseenter",i.label.mouseEnter.bind(t,i)),i.label.mouseLeave&&n.node.addEventListener("mouseleave",i.label.mouseLeave.bind(t,i)),i.label.click&&n.node.addEventListener("click",i.label.click.bind(t,i)))}};e.config.annotations.xaxis.forEach((function(t,e){return i(t,e,"xaxis")})),e.config.annotations.yaxis.forEach((function(t,e){return i(t,e,"yaxis")})),e.config.annotations.points.forEach((function(t,e){return i(t,e,"point")}))}},{key:"getY1Y2",value:function(t,e){var i,a=this.w,s="y1"===t?e.y:e.y2,r=!1;if(this.annoCtx.invertAxis){var o=a.config.xaxis.convertedCatToNumeric?a.globals.categoryLabels:a.globals.labels,n=o.indexOf(s),l=a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(n+1,")"));i=l?parseFloat(l.getAttribute("y")):(a.globals.gridHeight/o.length-1)*(n+1)-a.globals.barHeight,void 0!==e.seriesIndex&&a.globals.barHeight&&(i-=a.globals.barHeight/2*(a.globals.series.length-1)-a.globals.barHeight*e.seriesIndex)}else{var h,c=a.globals.seriesYAxisMap[e.yAxisIndex][0],d=a.config.yaxis[e.yAxisIndex].logarithmic?new A(this.annoCtx.ctx).getLogVal(a.config.yaxis[e.yAxisIndex].logBase,s,c)/a.globals.yLogRatio[c]:(s-a.globals.minYArr[c])/(a.globals.yRange[c]/a.globals.gridHeight);i=a.globals.gridHeight-Math.min(Math.max(d,0),a.globals.gridHeight),r=d>a.globals.gridHeight||d<0,!e.marker||void 0!==e.y&&null!==e.y||(i=0),null!==(h=a.config.yaxis[e.yAxisIndex])&&void 0!==h&&h.reversed&&(i=d)}return"string"==typeof s&&s.includes("px")&&(i=parseFloat(s)),{yP:i,clipped:r}}},{key:"getX1X2",value:function(t,e){var i=this.w,a="x1"===t?e.x:e.x2,s=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,r=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,o=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,n=!1,l=this.annoCtx.inversedReversedAxis?(r-a)/(o/i.globals.gridWidth):(a-s)/(o/i.globals.gridWidth);return"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||i.config.chart.sparkline.enabled||(l=this.getStringX(a)),"string"==typeof a&&a.includes("px")&&(l=parseFloat(a)),null==a&&e.marker&&(l=i.globals.gridWidth),void 0!==e.seriesIndex&&i.globals.barWidth&&!this.annoCtx.invertAxis&&(l-=i.globals.barWidth/2*(i.globals.series.length-1)-i.globals.barWidth*e.seriesIndex),l>i.globals.gridWidth?(l=i.globals.gridWidth,n=!0):l<0&&(l=0,n=!0),{x:l,clipped:n}}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.map((function(t){return Array.isArray(t)?t.join(" "):t})).indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a+1,")"));return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),C=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new S(this.annoCtx)}return s(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=this.helpers.getX1X2("x1",t),o=r.x,n=r.clipped,l=!0,h=t.label.text,c=t.strokeDashArray;if(m.isNumber(o)){if(null===t.x2||void 0===t.x2){if(!n){var d=this.annoCtx.graphics.drawLine(o+t.offsetX,0+t.offsetY,o+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,c,t.borderWidth);e.appendChild(d.node),t.id&&d.node.classList.add(t.id)}}else{var g=this.helpers.getX1X2("x2",t);if(a=g.x,l=g.clipped,!n||!l){if(a<o){var u=o;o=a,a=u}var f=this.annoCtx.graphics.drawRect(o+t.offsetX,0+t.offsetY,a-o,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,c);f.node.classList.add("apexcharts-annotation-rect"),f.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(f.node),t.id&&f.node.classList.add(t.id)}}if(!n||!l){var p=this.annoCtx.graphics.getTextRects(h,parseFloat(t.label.style.fontSize)),x="top"===t.label.position?4:"center"===t.label.position?s.globals.gridHeight/2+("vertical"===t.label.orientation?p.width/2:0):s.globals.gridHeight,b=this.annoCtx.graphics.drawText({x:o+t.label.offsetX,y:x+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?p.width/2-12:-p.width/2:0),text:h,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});b.attr({rel:i}),e.appendChild(b.node),this.annoCtx.helpers.setOrientations(t,i)}}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),L=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return s(t,[{key:"isValidDate",value:function(t){return"number"!=typeof t&&!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(p(i.months)),r=["\x01"].concat(p(i.shortMonths)),o=["\x02"].concat(p(i.days)),n=["\x03"].concat(p(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+n[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var g=a?t.getUTCHours():t.getHours(),u=g>12?g-12:0===g?12:g;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(g))).replace(/(^|[^\\])H/g,"$1"+g)).replace(/(^|[^\\])hh+/g,"$1"+l(u))).replace(/(^|[^\\])h/g,"$1"+u);var f=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(f))).replace(/(^|[^\\])m/g,"$1"+f);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var v=g<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+v)).replace(/(^|[^\\])T/g,"$1"+v.charAt(0));var m=v.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+m)).replace(/(^|[^\\])t/g,"$1"+m.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),o=this.formatDate(s,"yyyy MM dd HH mm ss fff").split(" "),n=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(n[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(n[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(n[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(n[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(n[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(n[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(n[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=m.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),P=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return s(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new L(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;if(m.isNumber(t))if(0!==a.globals.yValueDecimal)t=t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal);else{var s=t.toFixed(0);t=t==s?s:t.toFixed(1)}return t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(m.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type){if(m.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);var i=e.globals.maxX-e.globals.minX;return i>0&&i<100?t.toFixed(1):t.toFixed(0)}if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),M=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],n=this.w,l=void 0===t[a]?"":t[a],h=l,c=n.globals.xLabelFormatter,d=n.config.xaxis.labels.formatter,g=!1,u=new P(this.ctx),f=l;o&&(h=u.xLabelFormat(c,l,f,{i:a,dateFormatter:new L(this.ctx).formatDate,w:n}),void 0!==d&&(h=d(l,t[a],{i:a,dateFormatter:new L(this.ctx).formatDate,w:n})));var p,x;e.length>0?(p=e[a].unit,x=null,e.forEach((function(t){"month"===t.unit?x="year":"day"===t.unit?x="month":"hour"===t.unit?x="day":"minute"===t.unit&&(x="hour")})),g=x===p,i=e[a].position,h=e[a].value):"datetime"===n.config.xaxis.type&&void 0===d&&(h=""),void 0===h&&(h=""),h=Array.isArray(h)?h:h.toString();var b=new k(this.ctx),v={};v=n.globals.rotateXLabels&&o?b.getTextRects(h,parseInt(r,10),null,"rotate(".concat(n.config.xaxis.labels.rotate," 0 0)"),!1):b.getTextRects(h,parseInt(r,10));var m=!n.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(h)&&("NaN"===String(h)||s.indexOf(h)>=0&&m)&&(h=""),{x:i,text:h,textRect:v,isBold:g}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=s[s.length-1];e.x<o.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+o.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"yAxisAllSeriesCollapsed",value:function(t){var e=this.w.globals;return!e.seriesYAxisMap[t].some((function(t){return-1===e.collapsedSeriesIndices.indexOf(t)}))}},{key:"translateYAxisIndex",value:function(t){var e=this.w,i=e.globals,a=e.config.yaxis;return i.series.length>a.length||a.some((function(t){return Array.isArray(t.seriesName)}))?t:i.seriesYAxisReverseMap[t]}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=e.config.yaxis[t];if(!i.show||this.yAxisAllSeriesCollapsed(t))return!0;if(!i.showForNullSeries){var a=e.globals.seriesYAxisMap[t],s=new A(this.ctx);return a.every((function(t){return s.isSeriesNull(t)}))}return!1}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,o){var n=this.w,l=new k(this.ctx),h=n.globals.translateY+n.config.yaxis[s].labels.offsetY;if(n.globals.isBarHorizontal?h=0:"heatmap"===n.config.chart.type&&(h+=r/2),a.show&&e>0){!0===n.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=l.drawLine(t+i.offsetX-a.width+a.offsetX,h+a.offsetY,t+i.offsetX+a.offsetX,h+a.offsetY,a.color);o.add(d),h+=r}}}}]),t}(),I=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new S(this.annoCtx),this.axesUtils=new M(this.annoCtx)}return s(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,o=this.helpers.getY1Y2("y1",t),n=o.yP,l=o.clipped,h=!0,c=!1,d=t.label.text;if(null===t.y2||void 0===t.y2){if(!l){c=!0;var g=this.annoCtx.graphics.drawLine(0+t.offsetX,n+t.offsetY,this._getYAxisAnnotationWidth(t),n+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(g.node),t.id&&g.node.classList.add(t.id)}}else{if(a=(o=this.helpers.getY1Y2("y2",t)).yP,h=o.clipped,a>n){var u=n;n=a,a=u}if(!l||!h){c=!0;var f=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),n-a,0,t.fillColor,t.opacity,1,t.borderColor,r);f.node.classList.add("apexcharts-annotation-rect"),f.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(f.node),t.id&&f.node.classList.add(t.id)}}if(c){var p="right"===t.label.position?s.globals.gridWidth:"center"===t.label.position?s.globals.gridWidth/2:0,x=this.annoCtx.graphics.drawText({x:p+t.label.offsetX,y:(null!=a?a:n)+t.label.offsetY-3,text:d,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});x.attr({rel:i}),e.appendChild(x.node)}}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.forEach((function(e,a){e.yAxisIndex=t.axesUtils.translateYAxisIndex(e.yAxisIndex),t.axesUtils.isYAxisHidden(e.yAxisIndex)&&t.axesUtils.yAxisAllSeriesCollapsed(e.yAxisIndex)||t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),T=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new S(this.annoCtx)}return s(t,[{key:"addPointAnnotation",value:function(t,e,i){if(!(this.w.globals.collapsedSeriesIndices.indexOf(t.seriesIndex)>-1)){var a=this.helpers.getX1X2("x1",t),s=a.x,r=a.clipped,o=(a=this.helpers.getY1Y2("y1",t)).yP,n=a.clipped;if(m.isNumber(s)&&!n&&!r){var l={pSize:t.marker.size,pointStrokeWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},h=this.annoCtx.graphics.drawMarker(s+t.marker.offsetX,o+t.marker.offsetY,l);e.appendChild(h.node);var c=t.label.text?t.label.text:"",d=this.annoCtx.graphics.drawText({x:s+t.label.offsetX,y:o+t.label.offsetY-t.marker.size-parseFloat(t.label.style.fontSize)/1.6,text:c,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(d.attr({rel:i}),e.appendChild(d.node),t.customSVG.SVG){var g=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});g.attr({transform:"translate(".concat(s+t.customSVG.offsetX,", ").concat(o+t.customSVG.offsetY,")")}),g.node.innerHTML=t.customSVG.SVG,e.appendChild(g.node)}if(t.image.path){var u=t.image.width?t.image.width:20,f=t.image.height?t.image.height:20;h=this.annoCtx.addImage({x:s+t.image.offsetX-u/2,y:o+t.image.offsetY-f/2,width:u,height:f,path:t.image.path,appendTo:".apexcharts-point-annotations"})}t.mouseEnter&&h.node.addEventListener("mouseenter",t.mouseEnter.bind(this,t)),t.mouseLeave&&h.node.addEventListener("mouseleave",t.mouseLeave.bind(this,t)),t.click&&h.node.addEventListener("click",t.click.bind(this,t))}}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var z={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},X=function(){function t(){i(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,stepSize:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,showDuplicates:!1,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:void 0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return s(t,[{key:"init",value:function(){return{annotations:{yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"",locales:[z],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,xAxisLabelClick:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,nonce:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0,targets:void 0},stacked:!1,stackOnlyBar:!0,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",categoryFormatter:void 0,valueFormatter:void 0},png:{filename:void 0},svg:{filename:void 0},scale:void 0,width:void 0},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,allowMouseWheelZoom:!0,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{line:{isSlopeChart:!1},area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,borderRadiusApplication:"around",borderRadiusWhenStacked:"last",rangeBarOverlap:!0,rangeBarGroupRows:!1,hideZeroBarsWhenGrouped:!1,isDumbbell:!1,dumbbellColors:void 0,isFunnel:!1,isFunnel3d:!0,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal",total:{enabled:!1,formatter:void 0,offsetX:0,offsetY:0,style:{color:"#373d3f",fontSize:"12px",fontFamily:void 0,fontWeight:600}}}},bubble:{zScaling:!0,minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,borderRadius:4,dataLabels:{format:"scale"},colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}},barLabels:{enabled:!1,offsetX:0,offsetY:0,useSeriesColors:!0,fontFamily:void 0,fontWeight:600,fontSize:"16px",formatter:function(t){return t},onClick:void 0}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{size:7,fillColors:void 0,strokeWidth:1,shape:void 0,offsetX:0,offsetY:0,customHTML:void 0,onClick:void 0},itemMargin:{horizontal:5,vertical:4},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",offsetX:0,offsetY:0,showNullDataPoints:!0,onClick:void 0,onDblClick:void 0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,hideEmptySeries:!1,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},stepSize:void 0,tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),E=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.graphics=new k(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new S(this),this.xAxisAnnotations=new C(this),this.yAxisAnnotations=new I(this),this.pointsAnnotations=new T(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return s(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts&&t.globals.dataPoints){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],o=[i.node,e.node,a.node],n=0;n<3;n++)t.globals.dom.elGraphical.add(r[n]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&o[n].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:o[n],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,o=t.foreColor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,g=t.borderWidth,u=t.strokeDashArray,f=t.borderRadius,p=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-svg":x,v=t.paddingLeft,m=void 0===v?4:v,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=this.w,P=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:n||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:o||L.config.chart.foreColor,cssClass:c}),M=L.globals.dom.baseEl.querySelector(b);M&&M.appendChild(P.node);var I=P.bbox();if(s){var T=this.graphics.drawRect(I.x-m,I.y-C,I.width+m+w,I.height+A+C,f,d||"transparent",1,g,p,u);M.insertBefore(T.node,P.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,o=t.y,n=void 0===o?0:o,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,g=t.appendTo,u=void 0===g?".apexcharts-svg":g,f=i.globals.dom.Paper.image(a);f.size(h,d).move(r,n);var p=i.globals.dom.baseEl.querySelector(u);return p&&p.appendChild(f.node),f}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,o=a,n=o.w,l=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new X,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),g=m.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var u=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),f=this.helpers.addBackgroundToAnno(u,g);return f&&l.insertBefore(f.node,u),i&&n.globals.memory.methodsToExec.push({context:o,id:g.id?g.id:m.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){for(var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"),a=e.globals.memory.methodsToExec.length-1;a>=0;a--)"addText"!==e.globals.memory.methodsToExec[a].label&&"addAnnotation"!==e.globals.memory.methodsToExec[a].label||e.globals.memory.methodsToExec.splice(a,1);i=m.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),Y=function(t){var e,i=t.isTimeline,a=t.ctx,s=t.seriesIndex,r=t.dataPointIndex,o=t.y1,n=t.y2,l=t.w,h=l.globals.seriesRangeStart[s][r],c=l.globals.seriesRangeEnd[s][r],d=l.globals.labels[r],g=l.config.series[s].name?l.config.series[s].name:"",u=l.globals.ttKeyFormatter,f=l.config.tooltip.y.title.formatter,p={w:l,seriesIndex:s,dataPointIndex:r,start:h,end:c};("function"==typeof f&&(g=f(g,p)),null!==(e=l.config.series[s].data[r])&&void 0!==e&&e.x&&(d=l.config.series[s].data[r].x),i)||"datetime"===l.config.xaxis.type&&(d=new P(a).xLabelFormat(l.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new L(a).formatDate,w:l}));"function"==typeof u&&(d=u(d,p)),Number.isFinite(o)&&Number.isFinite(n)&&(h=o,c=n);var x="",b="",v=l.globals.colors[s];if(void 0===l.config.tooltip.x.formatter)if("datetime"===l.config.xaxis.type){var m=new L(a);x=m.formatDate(m.getDate(h),l.config.tooltip.x.format),b=m.formatDate(m.getDate(c),l.config.tooltip.x.format)}else x=h,b=c;else x=l.config.tooltip.x.formatter(h),b=l.config.tooltip.x.formatter(c);return{start:h,end:c,startVal:x,endVal:b,ylabel:d,color:v,seriesName:g}},R=function(t){var e=t.color,i=t.seriesName,a=t.ylabel,s=t.start,r=t.end,o=t.seriesIndex,n=t.dataPointIndex,l=t.ctx.tooltip.tooltipLabels.getFormatters(o);s=l.yLbFormatter(s),r=l.yLbFormatter(r);var h=l.yLbFormatter(t.w.globals.series[o][n]),c='<span class="value start-value">\n  '.concat(s,'\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r,"\n  </span>");return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+a+": </span> "+(t.w.globals.comboCharts?"rangeArea"===t.w.config.series[o].type||"rangeBar"===t.w.config.series[o].type?c:"<span>".concat(h,"</span>"):c)+" </div></div>"},F=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"hideYAxis",value:function(){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0}},{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.hideYAxis();return m.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"slope",value:function(){return this.hideYAxis(),{chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!0,formatter:function(t,e){var i=e.w.config.series[e.seriesIndex].name;return null!==t?i+": "+t:""},background:{enabled:!1},offsetX:-5},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},xaxis:{position:"top",labels:{style:{fontSize:14,fontWeight:900}},tooltip:{enabled:!1},crosshairs:{show:!1}},markers:{size:8,hover:{sizeOffset:1}},legend:{show:!1},tooltip:{shared:!1,intersect:!0,followCursor:!0},stroke:{width:5,curve:"straight"}}}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square"}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"funnel",value:function(){return this.hideYAxis(),g(g({},this.bar()),{},{chart:{animations:{easing:"linear",speed:800,animateGradually:{enabled:!1}}},plotOptions:{bar:{horizontal:!0,borderRadiusApplication:"around",borderRadius:0,dataLabels:{position:"center"}}},grid:{show:!1,padding:{left:0,right:0}},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}}})}},{key:"candlestick",value:function(){var t=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var t=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:7,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{chart:{animations:{animateGradually:!1}},stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=function(){var t=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-t};return s.globals.comboCharts?"rangeBar"===s.config.series[i].type||"rangeArea"===s.config.series[i].type?r():t:r()},background:{enabled:!1},style:{colors:["#fff"]}},markers:{size:10},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var e=Y(g(g({},t),{},{isTimeline:!0})),i=e.color,a=e.seriesName,s=e.ylabel,r=e.startVal,o=e.endVal;return R(g(g({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:o}))}(t):function(t){var e=Y(t),i=e.color,a=e.seriesName,s=e.ylabel,r=e.start,o=e.end;return R(g(g({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:o}))}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"dumbbell",value:function(t){var e,i;return null!==(e=t.plotOptions.bar)&&void 0!==e&&e.barHeight||(t.plotOptions.bar.barHeight=2),null!==(i=t.plotOptions.bar)&&void 0!==i&&i.columnWidth||(t.plotOptions.bar.columnWidth=2),t}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"rangeArea",value:function(){return{stroke:{curve:"straight",width:0},fill:{type:"solid",opacity:.6},markers:{size:0},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{intersect:!1,shared:!0,followCursor:!0,custom:function(t){return function(t){var e=Y(t),i=e.color,a=e.seriesName,s=e.ylabel,r=e.start,o=e.end;return R(g(g({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:o}))}(t)}}}}},{key:"brush",value:function(t){return m.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"stackedBars",value:function(){var t=this.bar();return g(g({},t),{},{plotOptions:g(g({},t.plotOptions),{},{bar:g(g({},t.plotOptions.bar),{},{borderRadiusApplication:"end",borderRadiusWhenStacked:"last"})})})}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return m.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return m.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square"}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{opacity:1,gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"polarArea",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:5,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"_getBoxTooltip",value:function(t,e,i,a,s){var r=t.globals.seriesCandleO[e][i],o=t.globals.seriesCandleH[e][i],n=t.globals.seriesCandleM[e][i],l=t.globals.seriesCandleL[e][i],h=t.globals.seriesCandleC[e][i];return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name:"series-"+(e+1),": <strong>").concat(t.globals.series[e][i],"</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+r+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(n?"<div>".concat(a[2],': <span class="value">')+n+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+h+"</span></div></div>"}}]),t}(),D=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"init",value:function(t){var e=t.responsiveOverride,i=this.opts,a=new X,s=new F(i);this.chartType=i.chart.type,i=this.extendYAxis(i),i=this.extendAnnotations(i);var r=a.init(),o={};if(i&&"object"===b(i)){var n,l,h,c,d,g,u,f,p,x,v={};v=-1!==["line","area","bar","candlestick","boxPlot","rangeBar","rangeArea","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(i.chart.type)?s[i.chart.type]():s.line(),null!==(n=i.plotOptions)&&void 0!==n&&null!==(l=n.bar)&&void 0!==l&&l.isFunnel&&(v=s.funnel()),i.chart.stacked&&"bar"===i.chart.type&&(v=s.stackedBars()),null!==(h=i.chart.brush)&&void 0!==h&&h.enabled&&(v=s.brush(v)),null!==(c=i.plotOptions)&&void 0!==c&&null!==(d=c.line)&&void 0!==d&&d.isSlopeChart&&(v=s.slope()),i.chart.stacked&&"100%"===i.chart.stackType&&(i=s.stacked100(i)),null!==(g=i.plotOptions)&&void 0!==g&&null!==(u=g.bar)&&void 0!==u&&u.isDumbbell&&(i=s.dumbbell(i)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(i),i.xaxis=i.xaxis||window.Apex.xaxis||{},e||(i.xaxis.convertedCatToNumeric=!1),(null!==(f=(i=this.checkForCatToNumericXAxis(this.chartType,v,i)).chart.sparkline)&&void 0!==f&&f.enabled||null!==(p=window.Apex.chart)&&void 0!==p&&null!==(x=p.sparkline)&&void 0!==x&&x.enabled)&&(v=s.sparkline(v)),o=m.extend(r,v)}var y=m.extend(o,window.Apex);return r=m.extend(y,i),r=this.handleUserInputErrors(r)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a,s,r=new F(i),o=("bar"===t||"boxPlot"===t)&&(null===(a=i.plotOptions)||void 0===a||null===(s=a.bar)||void 0===s?void 0:s.horizontal),n="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,l="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,h=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return o||n||!l||"between"===h||(i=r.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new X;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=m.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[m.extend(i.yAxis,t.yaxis)]:t.yaxis=m.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=m.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new X;return t.annotations.yaxis=m.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new X;return t.annotations.xaxis=m.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new X;return t.annotations.points=m.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"),"candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type," chart is not supported.")),e.yaxis[0].reversed=!1),e}}]),t}(),H=function(){function t(){i(this,t)}return s(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleM=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRange=[],t.seriesPercent=[],t.seriesGoals=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.hasXaxisGroups=!1,t.groups=[],t.barGroups=[],t.lineGroups=[],t.areaGroups=[],t.hasSeriesGroups=!1,t.seriesGroups=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.lastWheelExecution=0,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0,t.multiAxisTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],invalidLogScale:!1,ignoreYAxisIndexes:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,isSlopeChart:t.plotOptions.line.isSlopeChart,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null,niceScaleAllowedMagMsd:[[1,1,2,5,5,5,10,10,10,10,10],[1,1,2,5,5,5,10,10,10,10,10]],niceScaleDefaultTicks:[1,2,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,12,12,12,12,12,12,12,12,12,24],seriesYAxisMap:[],seriesYAxisReverseMap:[]}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=m.extend({},t),e.initialSeries=m.clone(t.series),e.lastXAxis=m.clone(e.initialConfig.xaxis),e.lastYAxis=m.clone(e.initialConfig.yaxis),e}}]),t}(),O=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"init",value:function(){var t=new D(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new H).init(t)}}}]),t}(),N=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0,this.patternIDs=[]}return s(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,o=t.image,n=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(n=i.fill.image.width+1,l=i.fill.image.height):(n=r+1,l=r):(n=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");k.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:n+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",o),k.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:n+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w,i=e.config.chart.type;return("bar"===i||"rangeBar"===i)&&e.config.plotOptions.bar.distributed||"heatmap"===i||"treemap"===i?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,a,s,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var o=this.getFillColors()[this.seriesIndex];void 0!==e.globals.seriesColors[this.seriesIndex]&&(o=e.globals.seriesColors[this.seriesIndex]),"function"==typeof o&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:e}));var n=t.fillType?t.fillType:this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity;t.color&&(o=t.color),o||(o="#fff",console.warn("undefined color - ApexCharts"));var h=o;if(-1===o.indexOf("rgb")?o.length<9&&(h=m.hexToRgba(o,l)):o.indexOf("rgba")>-1&&(l=m.getOpacityFromRGBA(o)),t.opacity&&(l=t.opacity),"pattern"===n&&(a=this.handlePatternFill({fillConfig:t.fillConfig,patternFill:a,fillColor:o,fillOpacity:l,defaultColor:h})),"gradient"===n&&(s=this.handleGradientFill({fillConfig:t.fillConfig,fillColor:o,fillOpacity:l,i:this.seriesIndex})),"image"===n){var c=r.fill.image.src,d=t.patternID?t.patternID:"",g="pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d);-1===this.patternIDs.indexOf(g)&&(this.clippedImgArea({opacity:l,image:Array.isArray(c)?t.seriesNumber<c.length?c[t.seriesNumber]:c[0]:c,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:g}),this.patternIDs.push(g)),i="url(#".concat(g,")")}else i="gradient"===n?s:"pattern"===n?a:h;return t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t){var e=t.fillConfig,i=t.patternFill,a=t.fillColor,s=t.fillOpacity,r=t.defaultColor,o=this.w.config.fill;e&&(o=e);var n=this.opts,l=new k(this.ctx),h=Array.isArray(o.pattern.strokeWidth)?o.pattern.strokeWidth[this.seriesIndex]:o.pattern.strokeWidth,c=a;Array.isArray(o.pattern.style)?i=void 0!==o.pattern.style[n.seriesNumber]?l.drawPattern(o.pattern.style[n.seriesNumber],o.pattern.width,o.pattern.height,c,h,s):r:i=l.drawPattern(o.pattern.style,o.pattern.width,o.pattern.height,c,h,s);return i}},{key:"handleGradientFill",value:function(t){var e=t.fillColor,i=t.fillOpacity,a=t.fillConfig,s=t.i,r=this.w.config.fill;a&&(r=g(g({},r),a));var o,n=this.opts,l=new k(this.ctx),h=new m,c=r.gradient.type,d=e,u=void 0===r.gradient.opacityFrom?i:Array.isArray(r.gradient.opacityFrom)?r.gradient.opacityFrom[s]:r.gradient.opacityFrom;d.indexOf("rgba")>-1&&(u=m.getOpacityFromRGBA(d));var f=void 0===r.gradient.opacityTo?i:Array.isArray(r.gradient.opacityTo)?r.gradient.opacityTo[s]:r.gradient.opacityTo;if(void 0===r.gradient.gradientToColors||0===r.gradient.gradientToColors.length)o="dark"===r.gradient.shade?h.shadeColor(-1*parseFloat(r.gradient.shadeIntensity),e.indexOf("rgb")>-1?m.rgb2hex(e):e):h.shadeColor(parseFloat(r.gradient.shadeIntensity),e.indexOf("rgb")>-1?m.rgb2hex(e):e);else if(r.gradient.gradientToColors[n.seriesNumber]){var p=r.gradient.gradientToColors[n.seriesNumber];o=p,p.indexOf("rgba")>-1&&(f=m.getOpacityFromRGBA(p))}else o=e;if(r.gradient.gradientFrom&&(d=r.gradient.gradientFrom),r.gradient.gradientTo&&(o=r.gradient.gradientTo),r.gradient.inverseColors){var x=d;d=o,o=x}return d.indexOf("rgb")>-1&&(d=m.rgb2hex(d)),o.indexOf("rgb")>-1&&(o=m.rgb2hex(o)),l.drawGradient(c,d,o,u,f,n.size,r.gradient.stops,r.gradient.colorStops,s)}}]),t}(),W=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=this.w,n=e,l=t,h=null,c=new k(this.ctx),d=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[e]>0||r||d)&&(h=c.group({class:r||d?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(l.x))for(var g=0;g<l.x.length;g++){var u=i;1===i&&0===g&&(u=0),1===i&&1===g&&(u=1);var f="apexcharts-marker";if("line"!==o.config.chart.type&&"area"!==o.config.chart.type||o.globals.comboCharts||o.config.tooltip.intersect||(f+=" no-pointer-events"),(Array.isArray(o.config.markers.size)?o.globals.markers.size[e]>0:o.config.markers.size>0)||r||d){m.isNumber(l.y[g])?f+=" w".concat(m.randomId()):f="apexcharts-nullpoint";var p=this.getMarkerConfig({cssClass:f,seriesIndex:e,dataPointIndex:u});o.config.series[n].data[u]&&(o.config.series[n].data[u].fillColor&&(p.pointFillColor=o.config.series[n].data[u].fillColor),o.config.series[n].data[u].strokeColor&&(p.pointStrokeColor=o.config.series[n].data[u].strokeColor)),void 0!==a&&(p.pSize=a),(l.x[g]<-o.globals.markers.largestSize||l.x[g]>o.globals.gridWidth+o.globals.markers.largestSize||l.y[g]<-o.globals.markers.largestSize||l.y[g]>o.globals.gridHeight+o.globals.markers.largestSize)&&(p.pSize=0),(s=c.drawMarker(l.x[g],l.y[g],p)).attr("rel",u),s.attr("j",u),s.attr("index",e),s.node.setAttribute("default-marker-size",p.pSize),new w(this.ctx).setSelectionFilter(s,e,u),this.addEvents(s),h&&h.add(s)}else void 0===o.globals.pointsArray[e]&&(o.globals.pointsArray[e]=[]),o.globals.pointsArray[e].push([l.x[g],l.y[g]])}return h}},{key:"getMarkerConfig",value:function(t){var e=t.cssClass,i=t.seriesIndex,a=t.dataPointIndex,s=void 0===a?null:a,r=t.radius,o=void 0===r?null:r,n=t.size,l=void 0===n?null:n,h=t.strokeWidth,c=void 0===h?null:h,d=this.w,g=this.getMarkerStyle(i),u=null===l?d.globals.markers.size[i]:l,f=d.config.markers;return null!==s&&f.discrete.length&&f.discrete.map((function(t){t.seriesIndex===i&&t.dataPointIndex===s&&(g.pointStrokeColor=t.strokeColor,g.pointFillColor=t.fillColor,u=t.size,g.pointShape=t.shape)})),{pSize:null===o?u:o,pRadius:null!==o?o:f.radius,pointStrokeWidth:null!==c?c:Array.isArray(f.strokeWidth)?f.strokeWidth[i]:f.strokeWidth,pointStrokeColor:g.pointStrokeColor,pointFillColor:g.pointFillColor,shape:g.pointShape||(Array.isArray(f.shape)?f.shape[i]:f.shape),class:e,pointStrokeOpacity:Array.isArray(f.strokeOpacity)?f.strokeOpacity[i]:f.strokeOpacity,pointStrokeDashArray:Array.isArray(f.strokeDashArray)?f.strokeDashArray[i]:f.strokeDashArray,pointFillOpacity:Array.isArray(f.fillOpacity)?f.fillOpacity[i]:f.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(t){var e=this.w,i=new k(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),B=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled}return s(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new k(this.ctx),r=i.realIndex,o=i.pointsPos,n=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var c=0;c<o.x.length;c++){var d=e+1,g=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var u=a.globals.markers.size[r];if(n!==1/0){var f=a.config.plotOptions.bubble;u=a.globals.seriesZ[r][d],f.zScaling&&(u/=n),f.minBubbleRadius&&u<f.minBubbleRadius&&(u=f.minBubbleRadius),f.maxBubbleRadius&&u>f.maxBubbleRadius&&(u=f.maxBubbleRadius)}var p=o.x[c],x=o.y[c];if(u=u||0,null!==x&&void 0!==a.globals.series[r][d]||(g=!1),g){var b=this.drawPoint(p,x,u,r,d,e);h.add(b)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r){var o=this.w,n=a,l=new y(this.ctx),h=new w(this.ctx),c=new N(this.ctx),d=new W(this.ctx),g=new k(this.ctx),u=d.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:n,dataPointIndex:s,radius:"bubble"===o.config.chart.type||o.globals.comboCharts&&o.config.series[a]&&"bubble"===o.config.series[a].type?i:null}),f=c.fillPath({seriesNumber:a,dataPointIndex:s,color:u.pointFillColor,patternUnits:"objectBoundingBox",value:o.globals.series[a][r]}),p=g.drawMarker(t,e,u);if(o.config.series[n].data[s]&&o.config.series[n].data[s].fillColor&&(f=o.config.series[n].data[s].fillColor),p.attr({fill:f}),o.config.chart.dropShadow.enabled){var x=o.config.chart.dropShadow;h.dropShadow(p,x,a)}if(!this.initialAnim||o.globals.dataChanged||o.globals.resized)o.globals.animationEnded=!0;else{var b=o.config.chart.animations.speed;l.animateMarker(p,b,o.globals.easing,(function(){window.setTimeout((function(){l.animationCompleted(p)}),100)}))}return p.attr({rel:s,j:s,index:a,"default-marker-size":u.pSize}),h.setSelectionFilter(p,a,s),d.addEvents(p),p.node.classList.add("apexcharts-marker"),p}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),G=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,o){var n=this.w,l=!1,h=new k(this.ctx).getTextRects(i,o),c=h.width,d=h.height;e<0&&(e=0),e>n.globals.gridHeight+d&&(e=n.globals.gridHeight+d/2),void 0===n.globals.dataLabelsRects[a]&&(n.globals.dataLabelsRects[a]=[]),n.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var g=n.globals.dataLabelsRects[a].length-2,u=void 0!==n.globals.lastDrawnDataLabelsIndexes[a]?n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==n.globals.dataLabelsRects[a][g]){var f=n.globals.dataLabelsRects[a][u];(t>f.x+f.width||e>f.y+f.height||e+d<f.y||t+c<f.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t){var e=this,i=t.type,a=t.pos,s=t.i,r=t.j,o=t.isRangeStart,n=t.strokeWidth,l=void 0===n?2:n,h=this.w,c=new k(this.ctx),d=h.config.dataLabels,g=0,u=0,f=r,p=null;if(-1!==h.globals.collapsedSeriesIndices.indexOf(s)||!d.enabled||!Array.isArray(a.x))return p;p=c.group({class:"apexcharts-data-labels"});for(var x=0;x<a.x.length;x++)if(g=a.x[x]+d.offsetX,u=a.y[x]+d.offsetY+l,!isNaN(g)){1===r&&0===x&&(f=0),1===r&&1===x&&(f=1);var b=h.globals.series[s][f];"rangeArea"===i&&(b=o?h.globals.seriesRangeStart[s][f]:h.globals.seriesRangeEnd[s][f]);var v="",m=function(t){return h.config.dataLabels.formatter(t,{ctx:e.ctx,seriesIndex:s,dataPointIndex:f,w:h})};if("bubble"===h.config.chart.type)v=m(b=h.globals.seriesZ[s][f]),u=a.y[x],u=new B(this.ctx).centerTextInBubble(u,s,f).y;else void 0!==b&&(v=m(b));var y=h.config.dataLabels.textAnchor;h.globals.isSlopeChart&&(y=0===f?"end":f===h.config.series[s].data.length-1?"start":"middle"),this.plotDataLabelsText({x:g,y:u,text:v,i:s,j:f,parent:p,offsetCorrection:!0,dataLabelsConfig:h.config.dataLabels,textAnchor:y})}return p}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new k(this.ctx),a=t.x,s=t.y,r=t.i,o=t.j,n=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,g=t.color,u=t.alwaysDrawDataLabel,f=t.offsetCorrection,p=t.className,x=null;if(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)return x;var b={x:a,y:s,drawnextLabel:!0,textRects:null};f&&(b=this.dataLabelsCorrection(a,s,n,r,o,u,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=b.x,s=b.y),b.textRects&&(a<-20-b.textRects.width||a>e.globals.gridWidth+b.textRects.width+30)&&(n="");var v=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(v=e.globals.dataLabels.style.colors[o]),"function"==typeof v&&(v=v({series:e.globals.series,seriesIndex:r,dataPointIndex:o,w:e})),g&&(v=g);var m=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(m=0,y=0),e.globals.isSlopeChart&&(0!==o&&(m=-2*d.offsetX+5),0!==o&&o!==e.config.series[r].data.length-1&&(m=0)),b.drawnextLabel){if((x=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+m,y:s+y,foreColor:v,textAnchor:l||d.textAnchor,text:n,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"})).attr({class:p||"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var A=d.dropShadow;new w(this.ctx).dropShadow(x,A)}c.add(x),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(o)}return x}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,o=e.width,n=e.height,l=new k(this.ctx).drawRect(e.x-s,e.y-r/2,o+2*s,n+r,a.borderRadius,"transparent"!==i.config.chart.background&&i.config.chart.background?i.config.chart.background:"#fff",a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new w(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var o=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:o}):r.attr({fill:o}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),V=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return s(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(m.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=m.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"highlightSeries",value:function(t){var e=this.w,i=this.getSeriesByName(t),a=parseInt(null==i?void 0:i.getAttribute("data:realIndex"),10),s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"),r=null,o=null,n=null;if(e.globals.axisCharts||"radialBar"===e.config.chart.type)if(e.globals.axisCharts){r=e.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a,"']")),o=e.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a,"']"));var l=e.globals.seriesYAxisReverseMap[a];n=e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l,"']"))}else r=e.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"']"));else r=e.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"'] path"));for(var h=0;h<s.length;h++)s[h].classList.add(this.legendInactiveClass);if(r)e.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==o&&o.classList.remove(this.legendInactiveClass),null!==n&&n.classList.remove(this.legendInactiveClass);else for(var c=0;c<s.length;c++)s[c].classList.remove(this.legendInactiveClass)}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w;e||(e=t.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1;this.highlightSeries(i.globals.seriesNames[s])}else if("mouseout"===t.type)for(var r=0;r<a.length;r++)a[r].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var o=parseInt(e.getAttribute("rel"),10)-1;r("add");var n=a.config.plotOptions.heatmap.colorScale.ranges;!function(t,e){for(var a=0;a<s.length;a++){var r=Number(s[a].getAttribute("val"));r>=t.from&&(r<t.to||t.to===e&&r===e)&&s[a].classList.remove(i.legendInactiveClass)}}(n[o],n.reduce((function(t,e){return Math.max(t,e.to)}),0))}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=this.w,a=0;if(i.config.series.length>1)for(var s=i.config.series.map((function(t,a){return t.data&&t.data.length>0&&-1===i.globals.collapsedSeriesIndices.indexOf(a)&&(!i.globals.comboCharts||0===e.length||e.length&&e.indexOf(i.config.series[a].type)>-1)?a:-1})),r="asc"===t?0:s.length-1;"asc"===t?r<s.length:r>=0;"asc"===t?r++:r--)if(-1!==s[r]){a=s[r];break}return a}},{key:"getBarSeriesIndices",value:function(){return this.w.globals.comboCharts?this.w.config.series.map((function(t,e){return"bar"===t.type||"column"===t.type?e:-1})).filter((function(t){return-1!==t})):this.w.config.series.map((function(t,e){return e}))}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},o=0;o<s.length;o++)if(s[o].hasAttribute("pathTo")){var n=s[o].getAttribute("pathTo");r.paths.push({d:n})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","rangeArea","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)})),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(t){var e=this.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),r=[],o=0;o<s.length;o++)r.push({x:s[o].getAttribute("cx"),y:s[o].getAttribute("cy"),r:s[o].getAttribute("r")});e.globals.previousPaths.push(r)}}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new k(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var o=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),_=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new A(this.ctx)}return s(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new V(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new V(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,a=this.w.globals,s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type,r=0;r<t[e].data.length;r++)if(void 0!==t[e].data[r][1]&&(Array.isArray(t[e].data[r][1])&&4===t[e].data[r][1].length&&!s?this.twoDSeries.push(m.parseNumber(t[e].data[r][1][3])):t[e].data[r].length>=5?this.twoDSeries.push(m.parseNumber(t[e].data[r][4])):this.twoDSeries.push(m.parseNumber(t[e].data[r][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var o=new Date(t[e].data[r][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(t[e].data[r][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new L(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var o=0;o<t[e].data.length;o++)void 0!==t[e].data[o].y&&(Array.isArray(t[e].data[o].y)?this.twoDSeries.push(m.parseNumber(t[e].data[o].y[t[e].data[o].y.length-1])):this.twoDSeries.push(m.parseNumber(t[e].data[o].y))),void 0!==t[e].data[o].goals&&Array.isArray(t[e].data[o].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(t[e].data[o].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(null));for(var n=0;n<t[r].data.length;n++){var l="string"==typeof t[r].data[n].x,h=Array.isArray(t[r].data[n].x),c=!h&&!!s.isValidDate(t[r].data[n].x);if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x),isNaN(t[r].data[n].x)||"category"===this.w.config.xaxis.type||"string"==typeof t[r].data[n].x||(a.isXNumeric=!0)):this.twoDSeriesX.push(s.parseDate(t[r].data[n].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[n].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var g=0;g<t[e].data.length;g++)this.threeDSeries.push(t[e].data[g].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(void 0===a.start?[]:a.start),i.seriesRangeEnd.push(void 0===a.end?[]:a.end),i.seriesRange.push(a.rangeUniques),i.seriesRange.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,o=t.y[a].y1;s<=t.y[a].y2&&o<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),a}},{key:"handleCandleStickBoxData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleM[e]=a.m,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}}));if("array"===t)for(var o=0;o<e[i].data.length;o++)Array.isArray(e[i].data[o])?(a.push(e[i].data[o][1][0]),s.push(e[i].data[o][1][1])):(a.push(e[i].data[o]),s.push(e[i].data[o]));else if("xy"===t)for(var n=function(t){var o=Array.isArray(e[i].data[t].y),n=m.randomId(),l=e[i].data[t].x,h={y1:o?e[i].data[t].y[0]:e[i].data[t].y,y2:o?e[i].data[t].y[1]:e[i].data[t].y,rangeName:n};e[i].data[t].rangeName=n;var c=r.findIndex((function(t){return t.x===l}));r[c].y.push(h),a.push(h.y1),s.push(h.y2)},l=0;l<e[i].data.length;l++)n(l);return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickBoxDataFormat",value:function(t,e,i){var a=this.w,s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type,r=[],o=[],n=[],l=[],h=[];if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var c=0;c<e[i].data.length;c++)r.push(e[i].data[c][1]),o.push(e[i].data[c][2]),s?(n.push(e[i].data[c][3]),l.push(e[i].data[c][4]),h.push(e[i].data[c][5])):(l.push(e[i].data[c][3]),h.push(e[i].data[c][4]));else for(var d=0;d<e[i].data.length;d++)Array.isArray(e[i].data[d][1])&&(r.push(e[i].data[d][1][0]),o.push(e[i].data[d][1][1]),s?(n.push(e[i].data[d][1][2]),l.push(e[i].data[d][1][3]),h.push(e[i].data[d][1][4])):(l.push(e[i].data[d][1][2]),h.push(e[i].data[d][1][3])));else if("xy"===t)for(var g=0;g<e[i].data.length;g++)Array.isArray(e[i].data[g].y)&&(r.push(e[i].data[g].y[0]),o.push(e[i].data[g].y[1]),s?(n.push(e[i].data[g].y[2]),l.push(e[i].data[g].y[3]),h.push(e[i].data[g].y[4])):(l.push(e[i].data[g].y[2]),h.push(e[i].data[g].y[3])));return{o:r,h:o,m:n,l:l,c:h}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new L(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal,s.hasXaxisGroups="category"===a.xaxis.type&&a.xaxis.group.groups.length>0,s.hasXaxisGroups&&(s.groups=a.xaxis.group.groups),t.forEach((function(t,e){void 0!==t.name?s.seriesNames.push(t.name):s.seriesNames.push("series-"+parseInt(e+1,10))})),this.coreUtils.setSeriesYAxisMappings();var n=[],l=p(new Set(a.series.map((function(t){return t.group}))));a.series.forEach((function(t,e){var i=l.indexOf(t.group);n[i]||(n[i]=[]),n[i].push(s.seriesNames[e])})),s.seriesGroups=n;for(var h=function(){for(var t=0;t<o.length;t++)if("string"==typeof o[t]){if(!r.isValidDate(o[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(o[t]))}else e.twoDSeriesX.push(o[t])},c=0;c<t.length;c++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[c].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[c].type&&"rangeArea"!==t[c].type||(s.isRangeData=!0,"rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type||this.handleRangeData(t,c)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,c):this.isFormatXY()&&this.handleFormatXY(t,c),"candlestick"!==a.chart.type&&"candlestick"!==t[c].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[c].type||this.handleCandleStickBoxData(t,c),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),s.seriesGoals=this.seriesGoals,c!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,h(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var d=t[c].data.map((function(t){return m.parseNumber(t)}));s.series.push(d)}s.seriesZ.push(this.threeDSeries),void 0!==t[c].color?s.seriesColors.push(t[c].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRange.length&&(i.seriesRange.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=Array.from(new Set(i.labels.map(JSON.stringify)),JSON.parse)),e.xaxis.convertedCatToNumeric)new F(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t,e){return t.data.filter((function(t,e,i){return i.findIndex((function(e){return e.x===t.x}))===e}))})),r=s.reduce((function(t,e,i,a){return a[t].length>e.length?t:i}),0),o=0;o<s[r].length;o++)a.push(o+1);else for(var n=0;n<e.series[e.maxValsInArrayIndex].length;n++)a.push(n+1);e.seriesX=[];for(var l=0;l<t.length;l++)e.seriesX.push(a);this.w.globals.isBarHorizontal||(e.isXNumeric=!0)}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var h=0;h<t.length;h++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?(this.parseDataAxisCharts(t),this.coreUtils.getLargestSeries()):this.parseDataNonAxisCharts(t),i.chart.stacked){var s=new V(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&(a.stackedSeriesTotals=this.coreUtils.getStackedSeriesTotals(),a.stackedSeriesTotalsByGroups=this.coreUtils.getStackedSeriesTotalsByGroups()),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),o=0;o<r.length;o++)if(Array.isArray(r[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this.w,e=[];t.globals.seriesYAxisMap.forEach((function(i,a){var s=0;i.forEach((function(e){-1!==t.globals.collapsedSeriesIndices.indexOf(e)&&s++})),s>0&&s==i.length&&e.push(a)})),t.globals.ignoreYAxisIndexes=e.map((function(t){return t}))}}]),t}(),U=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"scaleSvgNode",value:function(t,e){var i=parseFloat(t.getAttributeNS(null,"width")),a=parseFloat(t.getAttributeNS(null,"height"));t.setAttributeNS(null,"width",i*e),t.setAttributeNS(null,"height",a*e),t.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"getSvgString",value:function(){var t=this;return new Promise((function(e){var i=t.w,a=i.config.chart.toolbar.export.width,s=i.config.chart.toolbar.export.scale||a/i.globals.svgWidth;s||(s=1);var r=t.w.globals.dom.Paper.svg(),o=t.w.globals.dom.Paper.node.cloneNode(!0);1!==s&&t.scaleSvgNode(o,s),t.convertImagesToBase64(o).then((function(){r=(new XMLSerializer).serializeToString(o),e(r.replace(/&nbsp;/g,"&#160;"))}))}))}},{key:"convertImagesToBase64",value:function(t){var e=this,i=t.getElementsByTagName("image"),a=Array.from(i).map((function(t){var i=t.getAttributeNS("http://www.w3.org/1999/xlink","href");return i&&!i.startsWith("data:")?e.getBase64FromUrl(i).then((function(e){t.setAttributeNS("http://www.w3.org/1999/xlink","href",e)})).catch((function(t){console.error("Error converting image to base64:",t)})):Promise.resolve()}));return Promise.all(a)}},{key:"getBase64FromUrl",value:function(t){return new Promise((function(e,i){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height,t.getContext("2d").drawImage(a,0,0),e(t.toDataURL())},a.onerror=i,a.src=t}))}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){var t=this;return new Promise((function(e){t.cleanup(),t.getSvgString().then((function(t){var i=new Blob([t],{type:"image/svg+xml;charset=utf-8"});e(URL.createObjectURL(i))}))}))}},{key:"dataURI",value:function(t){var e=this;return new Promise((function(i){var a=e.w,s=t?t.scale||t.width/a.globals.svgWidth:1;e.cleanup();var r=document.createElement("canvas");r.width=a.globals.svgWidth*s,r.height=parseInt(a.globals.dom.elWrap.style.height,10)*s;var o="transparent"!==a.config.chart.background&&a.config.chart.background?a.config.chart.background:"#fff",n=r.getContext("2d");n.fillStyle=o,n.fillRect(0,0,r.width*s,r.height*s),e.getSvgString().then((function(t){var e="data:image/svg+xml,"+encodeURIComponent(t),a=new Image;a.crossOrigin="anonymous",a.onload=function(){if(n.drawImage(a,0,0),r.msToBlob){var t=r.msToBlob();i({blob:t})}else{var e=r.toDataURL("image/png");i({imgURI:e})}},a.src=e}))}))}},{key:"exportToSVG",value:function(){var t=this;this.svgUrl().then((function(e){t.triggerDownload(e,t.w.config.chart.toolbar.export.svg.filename,".svg")}))}},{key:"exportToPng",value:function(){var t=this,e=this.w.config.chart.toolbar.export.scale,i=this.w.config.chart.toolbar.export.width,a=e?{scale:e}:i?{width:i}:void 0;this.dataURI(a).then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.fileName,s=t.columnDelimiter,r=void 0===s?",":s,o=t.lineDelimiter,n=void 0===o?"\n":o,l=this.w;i||(i=l.config.series);var h,c,d=[],g=[],u="",f=l.globals.series.map((function(t,e){return-1===l.globals.collapsedSeriesIndices.indexOf(e)?t:[]})),x=function(t){return"function"==typeof l.config.chart.toolbar.export.csv.categoryFormatter?l.config.chart.toolbar.export.csv.categoryFormatter(t):"datetime"===l.config.xaxis.type&&String(t).length>=10?new Date(t).toDateString():m.isNumber(t)?t:t.split(r).join("")},b=function(t){return"function"==typeof l.config.chart.toolbar.export.csv.valueFormatter?l.config.chart.toolbar.export.csv.valueFormatter(t):t},v=Math.max.apply(Math,p(i.map((function(t){return t.data?t.data.length:0})))),y=new _(this.ctx),w=new M(this.ctx),k=function(t){var i="";if(l.globals.axisCharts){if("category"===l.config.xaxis.type||l.config.xaxis.convertedCatToNumeric)if(l.globals.isBarHorizontal){var a=l.globals.yLabelFormatters[0],s=new V(e.ctx).getActiveConfigSeriesIndex();i=a(l.globals.labels[t],{seriesIndex:s,dataPointIndex:t,w:l})}else i=w.getLabel(l.globals.labels,l.globals.timescaleLabels,0,t).text;"datetime"===l.config.xaxis.type&&(l.config.xaxis.categories.length?i=l.config.xaxis.categories[t]:l.config.labels.length&&(i=l.config.labels[t]))}else i=l.config.labels[t];return null===i?"nullvalue":(Array.isArray(i)&&(i=i.join(" ")),m.isNumber(i)?i:i.split(r).join(""))},A=function(t,e){if(d.length&&0===e&&g.push(d.join(r)),t.data){t.data=t.data.length&&t.data||p(Array(v)).map((function(){return""}));for(var a=0;a<t.data.length;a++){d=[];var s=k(a);if("nullvalue"!==s){if(s||(y.isFormatXY()?s=i[e].data[a].x:y.isFormat2DArray()&&(s=i[e].data[a]?i[e].data[a][0]:"")),0===e){d.push(x(s));for(var o=0;o<l.globals.series.length;o++){var n,h=y.isFormatXY()?null===(n=i[o].data[a])||void 0===n?void 0:n.y:f[o][a];d.push(b(h))}}("candlestick"===l.config.chart.type||t.type&&"candlestick"===t.type)&&(d.pop(),d.push(l.globals.seriesCandleO[e][a]),d.push(l.globals.seriesCandleH[e][a]),d.push(l.globals.seriesCandleL[e][a]),d.push(l.globals.seriesCandleC[e][a])),("boxPlot"===l.config.chart.type||t.type&&"boxPlot"===t.type)&&(d.pop(),d.push(l.globals.seriesCandleO[e][a]),d.push(l.globals.seriesCandleH[e][a]),d.push(l.globals.seriesCandleM[e][a]),d.push(l.globals.seriesCandleL[e][a]),d.push(l.globals.seriesCandleC[e][a])),"rangeBar"===l.config.chart.type&&(d.pop(),d.push(l.globals.seriesRangeStart[e][a]),d.push(l.globals.seriesRangeEnd[e][a])),d.length&&g.push(d.join(r))}}}};d.push(l.config.chart.toolbar.export.csv.headerCategory),"boxPlot"===l.config.chart.type?(d.push("minimum"),d.push("q1"),d.push("median"),d.push("q3"),d.push("maximum")):"candlestick"===l.config.chart.type?(d.push("open"),d.push("high"),d.push("low"),d.push("close")):"rangeBar"===l.config.chart.type?(d.push("minimum"),d.push("maximum")):i.map((function(t,e){var i=(t.name?t.name:"series-".concat(e))+"";l.globals.axisCharts&&d.push(i.split(r).join("")?i.split(r).join(""):"series-".concat(e))})),l.globals.axisCharts||(d.push(l.config.chart.toolbar.export.csv.headerValue),g.push(d.join(r))),l.globals.allSeriesHasEqualX||!l.globals.axisCharts||l.config.xaxis.categories.length||l.config.labels.length?i.map((function(t,e){l.globals.axisCharts?A(t,e):((d=[]).push(x(l.globals.labels[e])),d.push(b(f[e])),g.push(d.join(r)))})):(h=new Set,c={},i.forEach((function(t,e){null==t||t.data.forEach((function(t){var a,s;if(y.isFormatXY())a=t.x,s=t.y;else{if(!y.isFormat2DArray())return;a=t[0],s=t[1]}c[a]||(c[a]=Array(i.length).fill("")),c[a][e]=b(s),h.add(a)}))})),d.length&&g.push(d.join(r)),Array.from(h).sort().forEach((function(t){g.push([x(t),c[t].join(r)])}))),u+=g.join(n),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+u),a||l.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),q=function(){function t(e,a){i(this,t),this.ctx=e,this.elgrid=a,this.w=e.w;var s=this.w;this.axesUtils=new M(e),this.xaxisLabels=s.globals.labels.slice(),s.globals.timescaleLabels.length>0&&!s.globals.isBarHorizontal&&(this.xaxisLabels=s.globals.timescaleLabels.slice()),s.config.xaxis.overwriteCategories&&(this.xaxisLabels=s.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===s.config.xaxis.position?this.offY=0:this.offY=s.globals.gridHeight,this.offY=this.offY+s.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.xaxisBorderWidth=s.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=s.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=s.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=s.config.xaxis.axisBorder.height,this.yaxis=s.config.yaxis[0]}return s(t,[{key:"drawXaxis",value:function(){var t=this.w,e=new k(this.ctx),i=e.group({class:"apexcharts-xaxis",transform:"translate(".concat(t.config.xaxis.offsetX,", ").concat(t.config.xaxis.offsetY,")")}),a=e.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});i.add(a);for(var s=[],r=0;r<this.xaxisLabels.length;r++)s.push(this.xaxisLabels[r]);if(this.drawXAxisLabelAndGroup(!0,e,a,s,t.globals.isXNumeric,(function(t,e){return e})),t.globals.hasXaxisGroups){var o=t.globals.groups;s=[];for(var n=0;n<o.length;n++)s.push(o[n].title);var l={};t.config.xaxis.group.style&&(l.xaxisFontSize=t.config.xaxis.group.style.fontSize,l.xaxisFontFamily=t.config.xaxis.group.style.fontFamily,l.xaxisForeColors=t.config.xaxis.group.style.colors,l.fontWeight=t.config.xaxis.group.style.fontWeight,l.cssClass=t.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,e,a,s,!1,(function(t,e){return o[t].cols*e}),l)}if(void 0!==t.config.xaxis.title.text){var h=e.group({class:"apexcharts-xaxis-title"}),c=e.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+("bottom"===t.config.xaxis.position?t.globals.xAxisLabelsHeight:-t.globals.xAxisLabelsHeight-10)+t.config.xaxis.title.offsetY,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});h.add(c),i.add(h)}if(t.config.xaxis.axisBorder.show){var d=t.globals.barPadForNumericAxis,g=e.drawLine(t.globals.padHorizontal+t.config.xaxis.axisBorder.offsetX-d,this.offY,this.xaxisBorderWidth+d,this.offY,t.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);this.elgrid&&this.elgrid.elGridBorders&&t.config.grid.show?this.elgrid.elGridBorders.add(g):i.add(g)}return i}},{key:"drawXAxisLabelAndGroup",value:function(t,e,i,a,s,r){var o,n=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},h=[],c=[],d=this.w,g=l.xaxisFontSize||this.xaxisFontSize,u=l.xaxisFontFamily||this.xaxisFontFamily,f=l.xaxisForeColors||this.xaxisForeColors,p=l.fontWeight||d.config.xaxis.labels.style.fontWeight,x=l.cssClass||d.config.xaxis.labels.style.cssClass,b=d.globals.padHorizontal,v=a.length,m="category"===d.config.xaxis.type?d.globals.dataPoints:v;if(0===m&&v>m&&(m=v),s){var y=m>1?m-1:m;o=d.globals.gridWidth/Math.min(y,v-1),b=b+r(0,o)/2+d.config.xaxis.labels.offsetX}else o=d.globals.gridWidth/m,b=b+r(0,o)+d.config.xaxis.labels.offsetX;for(var w=function(s){var l=b-r(s,o)/2+d.config.xaxis.labels.offsetX;0===s&&1===v&&o/2===b&&1===m&&(l=d.globals.gridWidth/2);var y=n.axesUtils.getLabel(a,d.globals.timescaleLabels,l,s,h,g,t),w=28;d.globals.rotateXLabels&&t&&(w=22),d.config.xaxis.title.text&&"top"===d.config.xaxis.position&&(w+=parseFloat(d.config.xaxis.title.style.fontSize)+2),t||(w=w+parseFloat(g)+(d.globals.xAxisLabelsHeight-d.globals.xAxisGroupLabelsHeight)+(d.globals.rotateXLabels?10:0)),y=void 0!==d.config.xaxis.tickAmount&&"dataPoints"!==d.config.xaxis.tickAmount&&"datetime"!==d.config.xaxis.type?n.axesUtils.checkLabelBasedOnTickamount(s,y,v):n.axesUtils.checkForOverflowingLabels(s,y,v,h,c);if(d.config.xaxis.labels.show){var k=e.drawText({x:y.x,y:n.offY+d.config.xaxis.labels.offsetY+w-("top"===d.config.xaxis.position?d.globals.xAxisHeight+d.config.xaxis.axisTicks.height-2:0),text:y.text,textAnchor:"middle",fontWeight:y.isBold?600:p,fontSize:g,fontFamily:u,foreColor:Array.isArray(f)?t&&d.config.xaxis.convertedCatToNumeric?f[d.globals.minX+s-1]:f[s]:f,isPlainText:!1,cssClass:(t?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+x});if(i.add(k),k.on("click",(function(t){if("function"==typeof d.config.chart.events.xAxisLabelClick){var e=Object.assign({},d,{labelIndex:s});d.config.chart.events.xAxisLabelClick(t,n.ctx,e)}})),t){var A=document.createElementNS(d.globals.SVGNS,"title");A.textContent=Array.isArray(y.text)?y.text.join(" "):y.text,k.node.appendChild(A),""!==y.text&&(h.push(y.text),c.push(y))}}s<v-1&&(b+=r(s+1,o))},k=0;k<=v-1;k++)w(k)}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new k(this.ctx),o=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,n=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});n.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],g=s.config.yaxis[0].labels;if(g.show)for(var u=function(o){var n=void 0===h[o]?"":h[o];n=d(n,{seriesIndex:t,dataPointIndex:o,w:s});var c=a.axesUtils.getYAxisForeColor(g.style.colors,t),u=0;Array.isArray(n)&&(u=n.length/2*parseInt(g.style.fontSize,10));var f=g.offsetX-15,p="end";a.yaxis.opposite&&(p="start"),"left"===s.config.yaxis[0].labels.align?(f=g.offsetX,p="start"):"center"===s.config.yaxis[0].labels.align?(f=g.offsetX,p="middle"):"right"===s.config.yaxis[0].labels.align&&(p="end");var x=r.drawText({x:f,y:i+e+g.offsetY-u,text:n,textAnchor:p,foreColor:Array.isArray(c)?c[o]:c,fontSize:g.style.fontSize,fontFamily:g.style.fontFamily,fontWeight:g.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+g.style.cssClass,maxWidth:g.maxWidth});l.add(x),x.on("click",(function(t){if("function"==typeof s.config.chart.events.xAxisLabelClick){var e=Object.assign({},s,{labelIndex:o});s.config.chart.events.xAxisLabelClick(t,a.ctx,e)}}));var b=document.createElementNS(s.globals.SVGNS,"title");if(b.textContent=Array.isArray(n)?n.join(" "):n,x.node.appendChild(b),0!==s.config.yaxis[t].labels.rotate){var v=r.rotateAroundCenter(x.node);x.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(v.y,")"))}i+=e},f=0;f<=h.length-1;f++)u(f);if(void 0!==s.config.yaxis[0].title.text){var p=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),x=r.drawText({x:s.config.yaxis[0].title.offsetX,y:s.globals.gridHeight/2+s.config.yaxis[0].title.offsetY,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});p.add(x),n.add(p)}var b=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(b=s.globals.gridWidth);var v=s.config.xaxis.axisBorder;if(v.show){var m=r.drawLine(s.globals.padHorizontal+v.offsetX+b,1+v.offsetY,s.globals.padHorizontal+v.offsetX+b,s.globals.gridHeight+v.offsetY,v.color,0);this.elgrid&&this.elgrid.elGridBorders&&s.config.grid.show?this.elgrid.elGridBorders.add(m):n.add(m)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(b,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,n),n}},{key:"drawXaxisTicks",value:function(t,e,i){var a=this.w,s=t;if(!(t<0||t-2>a.globals.gridWidth)){var r=this.offY+a.config.xaxis.axisTicks.offsetY;if(e=e+r+a.config.xaxis.axisTicks.height,"top"===a.config.xaxis.position&&(e=r-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new k(this.ctx).drawLine(t+a.config.xaxis.axisTicks.offsetX,r+a.config.xaxis.offsetY,s+a.config.xaxis.axisTicks.offsetX,e+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,o=0;o<r;o++){var n=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(n-=1),a+=t.globals.gridWidth/n,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new k(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var n=e.rotateAroundCenter(a[o]);n.y=n.y-1,n.x=n.x+1,a[o].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(n.x," ").concat(n.y,")")),a[o].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[o].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-(t.config.yaxis[0].title.text?2*parseFloat(t.config.yaxis[0].title.style.fontSize):0)-15)}}}]),t}(),Z=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.xaxisLabels=a.globals.labels.slice(),this.axesUtils=new M(e),this.isRangeBar=a.globals.seriesRange.length&&a.globals.isBarHorizontal,a.globals.timescaleLabels.length>0&&(this.xaxisLabels=a.globals.timescaleLabels.slice())}return s(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new k(this.ctx);t||(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){if(this.w.globals.axisCharts){var t=this.renderGrid();return this.drawGridArea(t.el),t}return null}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new k(this.ctx),a=Array.isArray(t.config.stroke.width)?Math.max.apply(Math,p(t.config.stroke.width)):t.config.stroke.width,s=function(t){var i=document.createElementNS(e.SVGNS,"clipPath");return i.setAttribute("id",t),i};e.dom.elGridRectMask=s("gridRectMask".concat(e.cuid)),e.dom.elGridRectBarMask=s("gridRectBarMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=s("gridRectMarkerMask".concat(e.cuid)),e.dom.elForecastMask=s("forecastMask".concat(e.cuid)),e.dom.elNonForecastMask=s("nonForecastMask".concat(e.cuid));var r=0,o=0;(["bar","rangeBar","candlestick","boxPlot"].includes(t.config.chart.type)||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(r=Math.max(t.config.grid.padding.left,e.barPadForNumericAxis),o=Math.max(t.config.grid.padding.right,e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(0,0,e.gridWidth,e.gridHeight,0,"#fff"),e.dom.elGridRectBar=i.drawRect(-a/2-r-2,-a/2-2,e.gridWidth+a+o+r+4,e.gridHeight+a+4,0,"#fff");var n=t.globals.markers.largestSize;e.dom.elGridRectMarker=i.drawRect(-n,-n,e.gridWidth+2*n,e.gridHeight+2*n,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectBarMask.appendChild(e.dom.elGridRectBar.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var l=e.dom.baseEl.querySelector("defs");l.appendChild(e.dom.elGridRectMask),l.appendChild(e.dom.elGridRectBarMask),l.appendChild(e.dom.elGridRectMarkerMask),l.appendChild(e.dom.elForecastMask),l.appendChild(e.dom.elNonForecastMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w;if(!(0===e&&l.globals.skipFirstTimelinelabel||e===o-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type)){l.config.grid.xaxis.lines.show&&this._drawGridLine({i:e,x1:i,y1:a,x2:s,y2:r,xCount:o,parent:n});var h=0;if(l.globals.hasXaxisGroups&&"between"===l.config.xaxis.tickPlacement){var c=l.globals.groups;if(c){for(var d=0,g=0;d<e&&g<c.length;g++)d+=c[g].cols;d===e&&(h=.6*l.globals.xAxisLabelsHeight)}}new q(this.ctx).drawXaxisTicks(i,h,l.globals.dom.elGraphical)}}},{key:"_drawGridLine",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w,h=n.node.classList.contains("apexcharts-gridlines-horizontal"),c=l.globals.barPadForNumericAxis,d=0===a&&0===r||0===i&&0===s||a===l.globals.gridHeight&&r===l.globals.gridHeight||l.globals.isBarHorizontal&&(0===e||e===o-1),g=new k(this).drawLine(i-(h?c:0),a,s+(h?c:0),r,l.config.grid.borderColor,l.config.grid.strokeDashArray);g.node.classList.add("apexcharts-gridline"),d&&l.config.grid.show?this.elGridBorders.add(g):n.add(g)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.type,n=this.w,l=new k(this.ctx),h=n.globals.barPadForNumericAxis,c=n.config.grid[o].colors[e],d=l.drawRect(i-("row"===o?h:0),a,s+("row"===o?2*h:0),r,0,c,n.config.grid[o].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(o))}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,o=s.globals.padHorizontal,n=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,o=t.x2,n=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,o=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:o,y2:n,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:o,y1:0,x2:r,y2:n}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),function(t){for(var a=t.xC,r=t.x1,o=t.y1,n=t.x2,l=t.y2,h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(n=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:o,x2:n,y2:l,xCount:i,parent:e.elgridLinesV}),n=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:o,y1:0,x2:r,y2:n}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isRangeBar&&(d=s.globals.labels.length);for(var g=0;g<d+(this.isRangeBar?1:0);g++)this._drawGridLine({i:g,xCount:d+(this.isRangeBar?1:0),x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isRangeBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,o=0;o<e+1;o++){i.config.grid.xaxis.lines.show&&this._drawGridLine({i:o,xCount:e+1,x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new q(this.ctx).drawXaxisTicks(s,0,i.globals.dom.elGraphical),a=s+=i.globals.gridWidth/e}if(i.config.grid.yaxis.lines.show)for(var n=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({i:c,xCount:i.globals.dataPoints+1,x1:0,y1:n,x2:h,y2:l,parent:this.elgridLinesH}),l=n+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=t.globals,i=new k(this.ctx);this.elg=i.group({class:"apexcharts-grid"}),this.elgridLinesH=i.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=i.group({class:"apexcharts-gridlines-vertical"}),this.elGridBorders=i.group({class:"apexcharts-grid-borders"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide(),this.elGridBorders.hide());for(var a=0;a<e.seriesYAxisMap.length&&e.ignoreYAxisIndexes.includes(a);)a++;a===e.seriesYAxisMap.length&&(a=0);var s,r=e.yAxisScale[a].result.length-1;if(!e.isBarHorizontal||this.isRangeBar){var o,n,l;if(s=this.xaxisLabels.length,this.isRangeBar)r=e.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(s=t.config.xaxis.tickAmount),(null===(o=e.yAxisScale)||void 0===o||null===(n=o[a])||void 0===n||null===(l=n.result)||void 0===l?void 0:l.length)>0&&"datetime"!==t.config.xaxis.type&&(s=e.yAxisScale[a].result.length-1);this._drawXYLines({xCount:s,tickAmount:r})}else s=r,r=e.xTickAmount,this._drawInvertedXYLines({xCount:s,tickAmount:r});return this.drawGridBands(s,r),{el:this.elg,elGridBorders:this.elGridBorders,xAxisTickWidth:e.gridWidth/s}}},{key:"drawGridBands",value:function(t,e){var i,a,s=this,r=this.w;if((null===(i=r.config.grid.row.colors)||void 0===i?void 0:i.length)>0&&function(t,i,a,o,n,l){for(var h=0,c=0;h<i;h++,c++)c>=r.config.grid[t].colors.length&&(c=0),s._drawGridBandRect({c:c,x1:a,y1:o,x2:n,y2:l,type:t}),o+=r.globals.gridHeight/e}("row",e,0,0,r.globals.gridWidth,r.globals.gridHeight/e),(null===(a=r.config.grid.column.colors)||void 0===a?void 0:a.length)>0){var o=r.globals.isBarHorizontal||"on"!==r.config.xaxis.tickPlacement||"category"!==r.config.xaxis.type&&!r.config.xaxis.convertedCatToNumeric?t:t-1;r.globals.isXNumeric&&(o=r.globals.xAxisScale.result.length-1);for(var n=r.globals.padHorizontal,l=r.globals.padHorizontal+r.globals.gridWidth/o,h=r.globals.gridHeight,c=0,d=0;c<t;c++,d++){var g;if(d>=r.config.grid.column.colors.length&&(d=0),"datetime"===r.config.xaxis.type)n=this.xaxisLabels[c].position,l=((null===(g=this.xaxisLabels[c+1])||void 0===g?void 0:g.position)||r.globals.gridWidth)-this.xaxisLabels[c].position;this._drawGridBandRect({c:d,x1:n,y1:0,x2:l,y2:h,type:"column"}),n+=r.globals.gridWidth/o}}}}]),t}(),$=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.coreUtils=new A(this.ctx)}return s(t,[{key:"niceScale",value:function(t,e){var i,a,s,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=1e-11,l=this.w,h=l.globals;h.isBarHorizontal?(i=l.config.xaxis,a=Math.max((h.svgWidth-100)/25,2)):(i=l.config.yaxis[o],a=Math.max((h.svgHeight-100)/15,2)),m.isNumber(a)||(a=10),s=void 0!==i.min&&null!==i.min,r=void 0!==i.max&&null!==i.min;var c=void 0!==i.stepSize&&null!==i.stepSize,d=void 0!==i.tickAmount&&null!==i.tickAmount,g=d?i.tickAmount:h.niceScaleDefaultTicks[Math.min(Math.round(a/2),h.niceScaleDefaultTicks.length-1)];if(h.isMultipleYAxis&&!d&&h.multiAxisTickAmount>0&&(g=h.multiAxisTickAmount,d=!0),g="dataPoints"===g?h.dataPoints-1:Math.abs(Math.round(g)),(t===Number.MIN_VALUE&&0===e||!m.isNumber(t)&&!m.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE)&&(t=m.isNumber(i.min)?i.min:0,e=m.isNumber(i.max)?i.max:t+g,h.allSeriesCollapsed=!1),t>e){console.warn("axis.min cannot be greater than axis.max: swapping min and max");var u=e;e=t,t=u}else t===e&&(t=0===t?0:t-1,e=0===e?2:e+1);var f=[];g<1&&(g=1);var p=g,x=Math.abs(e-t);!s&&t>0&&t/x<.15&&(t=0,s=!0),!r&&e<0&&-e/x<.15&&(e=0,r=!0);var b=(x=Math.abs(e-t))/p,v=b,y=Math.floor(Math.log10(v)),w=Math.pow(10,y),k=Math.ceil(v/w);if(b=v=(k=h.niceScaleAllowedMagMsd[0===h.yValueDecimal?0:1][k])*w,h.isBarHorizontal&&i.stepSize&&"datetime"!==i.type?(b=i.stepSize,c=!0):c&&(b=i.stepSize),c&&i.forceNiceScale){var A=Math.floor(Math.log10(b));b*=Math.pow(10,y-A)}if(s&&r){var S=x/p;if(d)if(c)if(0!=m.mod(x,b)){var C=m.getGCD(b,S);b=S/C<10?C:S}else 0==m.mod(b,S)?b=S:(S=b,d=!1);else b=S;else if(c)0==m.mod(x,b)?S=b:b=S;else if(0==m.mod(x,b))S=b;else{S=x/(p=Math.ceil(x/b));var L=m.getGCD(x,b);x/L<a&&(S=L),b=S}p=Math.round(x/b)}else{if(s||r){if(r)if(d)t=e-b*p;else{var P=t;t=b*Math.floor(t/b),Math.abs(e-t)/m.getGCD(x,b)>a&&(t=e-b*g,t+=b*Math.floor((P-t)/b))}else if(s)if(d)e=t+b*p;else{var M=e;e=b*Math.ceil(e/b),Math.abs(e-t)/m.getGCD(x,b)>a&&(e=t+b*g,e+=b*Math.ceil((M-e)/b))}}else if(h.isMultipleYAxis&&d){var I=b*Math.floor(t/b),T=I+b*p;T<e&&(b*=2),T=e,e=(t=I)+b*p,x=Math.abs(e-t),t>0&&t<Math.abs(T-e)&&(t=0,e=b*p),e<0&&-e<Math.abs(I-t)&&(e=0,t=-b*p)}else t=b*Math.floor(t/b),e=b*Math.ceil(e/b);x=Math.abs(e-t),b=m.getGCD(x,b),p=Math.round(x/b)}if(d||s||r||(p=Math.ceil((x-n)/(b+n)))>16&&m.getPrimeFactors(p).length<2&&p++,!d&&i.forceNiceScale&&0===h.yValueDecimal&&p>x&&(p=x,b=Math.round(x/p)),p>a&&(!d&&!c||i.forceNiceScale)){var z=m.getPrimeFactors(p),X=z.length-1,E=p;t:for(var Y=0;Y<X;Y++)for(var R=0;R<=X-Y;R++){for(var F=Math.min(R+Y,X),D=E,H=1,O=R;O<=F;O++)H*=z[O];if((D/=H)<a){E=D;break t}}b=E===p?x:x/E,p=Math.round(x/b)}h.isMultipleYAxis&&0==h.multiAxisTickAmount&&h.ignoreYAxisIndexes.indexOf(o)<0&&(h.multiAxisTickAmount=p);var N=t-b,W=b*n;do{N+=b,f.push(m.stripNumber(N,7))}while(e-N>W);return{result:f,niceMin:f[0],niceMax:f[f.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,r=Math.abs(e-t),o=[];if(t===e)return{result:o=[t],niceMin:o[0],niceMax:o[o.length-1]};"dataPoints"===(i=this._adjustTicksForSmallRange(i,a,r))&&(i=this.w.globals.dataPoints-1),s||(s=r/i),s=Math.round(10*(s+Number.EPSILON))/10,i===Number.MAX_VALUE&&(i=5,s=1);for(var n=t;i>=0;)o.push(n),n=m.preciseAddition(n,s),i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.ceil(Math.log(e)/Math.log(i)+1),r=Math.floor(Math.log(t)/Math.log(i));r<s;r++)a.push(Math.pow(i,r));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.log(e)/Math.log(i),r=Math.log(t)/Math.log(i),o=s-r,n=Math.round(o),l=o/n,h=0,c=r;h<n;h++,c+=l)a.push(Math.pow(i,c));return a.push(Math.pow(i,s)),{result:a,niceMin:t,niceMax:e}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=Number(this.w.config.yaxis[e].labels.formatter(1));m.isNumber(s)&&0===this.w.globals.yValueDecimal&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var o=Math.abs(i-e);r.logarithmic&&o<=5&&(a.invalidLogScale=!0),r.logarithmic&&o>5?(a.allSeriesCollapsed=!1,a.yAxisScale[t]=r.forceNiceScale?this.logarithmicScaleNice(e,i,r.logBase):this.logarithmicScale(e,i,r.logBase)):i!==-Number.MAX_VALUE&&m.isNumber(i)&&e!==Number.MAX_VALUE&&m.isNumber(e)?(a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.niceScale(e,i,t)):a.yAxisScale[t]=this.niceScale(Number.MIN_VALUE,0,t)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=Math.abs(e-t);if(e!==-Number.MAX_VALUE&&m.isNumber(e)){var r=a.xTickAmount+1;s<10&&s>1&&(r=s),a.xAxisScale=this.linearScale(t,e,r,0,i.config.xaxis.stepSize)}else a.xAxisScale=this.linearScale(0,10,10);return a.xAxisScale}},{key:"scaleMultipleYAxes",value:function(){var t=this,e=this.w.config,i=this.w.globals;this.coreUtils.setSeriesYAxisMappings();var a=i.seriesYAxisMap,s=i.minYArr,r=i.maxYArr;i.allSeriesCollapsed=!0,i.barGroups=[],a.forEach((function(a,o){var n=[];a.forEach((function(t){var i=e.series[t].group;n.indexOf(i)<0&&n.push(i)})),a.length>0?function(){var l,h,c=Number.MAX_VALUE,d=-Number.MAX_VALUE,g=c,u=d;if(e.chart.stacked)!function(){var t=new Array(i.dataPoints).fill(0),s=[],r=[],f=[];n.forEach((function(){s.push(t.map((function(){return Number.MIN_VALUE}))),r.push(t.map((function(){return Number.MIN_VALUE}))),f.push(t.map((function(){return Number.MIN_VALUE})))}));for(var p=function(t){!l&&e.series[a[t]].type&&(l=e.series[a[t]].type);var c=a[t];h=e.series[c].group?e.series[c].group:"axis-".concat(o),!(i.collapsedSeriesIndices.indexOf(c)<0&&i.ancillaryCollapsedSeriesIndices.indexOf(c)<0)||(i.allSeriesCollapsed=!1,n.forEach((function(t,a){if(e.series[c].group===t)for(var o=0;o<i.series[c].length;o++){var n=i.series[c][o];n>=0?r[a][o]+=n:f[a][o]+=n,s[a][o]+=n,g=Math.min(g,n),u=Math.max(u,n)}}))),"bar"!==l&&"column"!==l||i.barGroups.push(h)},x=0;x<a.length;x++)p(x);l||(l=e.chart.type),"bar"===l||"column"===l?n.forEach((function(t,e){c=Math.min(c,Math.min.apply(null,f[e])),d=Math.max(d,Math.max.apply(null,r[e]))})):(n.forEach((function(t,e){g=Math.min(g,Math.min.apply(null,s[e])),u=Math.max(u,Math.max.apply(null,s[e]))})),c=g,d=u),c===Number.MIN_VALUE&&d===Number.MIN_VALUE&&(d=-Number.MAX_VALUE)}();else for(var f=0;f<a.length;f++){var p=a[f];c=Math.min(c,s[p]),d=Math.max(d,r[p]),!(i.collapsedSeriesIndices.indexOf(p)<0&&i.ancillaryCollapsedSeriesIndices.indexOf(p)<0)||(i.allSeriesCollapsed=!1)}void 0!==e.yaxis[o].min&&(c="function"==typeof e.yaxis[o].min?e.yaxis[o].min(c):e.yaxis[o].min),void 0!==e.yaxis[o].max&&(d="function"==typeof e.yaxis[o].max?e.yaxis[o].max(d):e.yaxis[o].max),i.barGroups=i.barGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.setYScaleForIndex(o,c,d),a.forEach((function(t){s[t]=i.yAxisScale[o].niceMin,r[t]=i.yAxisScale[o].niceMax}))}():t.setYScaleForIndex(o,0,-Number.MAX_VALUE)}))}}]),t}(),J=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.scales=new $(e)}return s(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):"boxPlot"===s.chart.type?(h=r.seriesCandleO,c=r.seriesCandleC):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);var d=!1;if(r.seriesX.length>=a){var g,u=null===(g=r.brushSource)||void 0===g?void 0:g.w.config.chart.brush;(s.chart.zoom.enabled&&s.chart.zoom.autoScaleYaxis||null!=u&&u.enabled&&null!=u&&u.autoScaleYaxis)&&(d=!0)}for(var f=t;f<a;f++){r.dataPoints=Math.max(r.dataPoints,l[f].length);var p=s.series[f].type;r.categoryLabels.length&&(r.dataPoints=r.categoryLabels.filter((function(t){return void 0!==t})).length),r.labels.length&&"datetime"!==s.xaxis.type&&0!==r.series.reduce((function(t,e){return t+e.length}),0)&&(r.dataPoints=Math.max(r.dataPoints,r.labels.length));var x=0,b=l[f].length-1;if(d){if(s.xaxis.min)for(;x<b&&r.seriesX[f][x]<s.xaxis.min;x++);if(s.xaxis.max)for(;b>x&&r.seriesX[f][b]>s.xaxis.max;b--);}for(var v=x;v<=b&&v<r.series[f].length;v++){var y=l[f][v];if(null!==y&&m.isNumber(y)){switch(void 0!==c[f][v]&&(o=Math.max(o,c[f][v]),e=Math.min(e,c[f][v])),void 0!==h[f][v]&&(e=Math.min(e,h[f][v]),i=Math.max(i,h[f][v])),p){case"candlestick":void 0!==r.seriesCandleC[f][v]&&(o=Math.max(o,r.seriesCandleH[f][v]),e=Math.min(e,r.seriesCandleL[f][v]));break;case"boxPlot":void 0!==r.seriesCandleC[f][v]&&(o=Math.max(o,r.seriesCandleC[f][v]),e=Math.min(e,r.seriesCandleO[f][v]))}p&&"candlestick"!==p&&"boxPlot"!==p&&"rangeArea"!==p&&"rangeBar"!==p&&(o=Math.max(o,r.series[f][v]),e=Math.min(e,r.series[f][v])),i=o,r.seriesGoals[f]&&r.seriesGoals[f][v]&&Array.isArray(r.seriesGoals[f][v])&&r.seriesGoals[f][v].forEach((function(t){n!==Number.MIN_VALUE&&(n=Math.min(n,t.value),e=n),o=Math.max(o,t.value),i=o})),m.isFloat(y)&&(y=m.noExponents(y),r.yValueDecimal=Math.max(r.yValueDecimal,y.toString().split(".")[1].length)),n>h[f][v]&&h[f][v]<0&&(n=h[f][v])}else r.hasNullValues=!0}"bar"!==p&&"column"!==p||(n<0&&o<0&&(o=0,i=Math.max(i,0)),n===Number.MIN_VALUE&&(n=0,e=Math.min(e,0)))}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&(n=e),"bar"===s.chart.type&&(n<0&&o<0&&(o=0),n===Number.MIN_VALUE&&(n=0)),{minY:n,maxY:o,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i,a=Number.MAX_VALUE;if(t.isMultipleYAxis){a=Number.MAX_VALUE;for(var s=0;s<t.series.length;s++)i=this.getMinYMaxY(s),t.minYArr[s]=i.lowestY,t.maxYArr[s]=i.highestY,a=Math.min(a,i.lowestY)}if(i=this.getMinYMaxY(0,a,null,t.series.length),"bar"===e.chart.type?(t.minY=i.minY,t.maxY=i.maxY):(t.minY=i.lowestY,t.maxY=i.highestY),a=i.lowestY,e.chart.stacked&&this._setStackedMinMax(),"line"===e.chart.type||"area"===e.chart.type||"scatter"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal?t.minY===Number.MIN_VALUE&&a!==-Number.MAX_VALUE&&a!==t.maxY&&(t.minY=a):t.minY=t.minY!==Number.MIN_VALUE?Math.min(i.minY,t.minY):i.minY,e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.scaleMultipleYAxes(),t.minY=a):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.minY,t.maxYArr[0]=t.maxY),t.barGroups=[],t.lineGroups=[],t.areaGroups=[],e.series.forEach((function(i){switch(i.type||e.chart.type){case"bar":case"column":t.barGroups.push(i.group);break;case"line":t.lineGroups.push(i.group);break;case"area":t.areaGroups.push(i.group)}})),t.barGroups=t.barGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.lineGroups=t.lineGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.areaGroups=t.areaGroups.filter((function(t,e,i){return i.indexOf(t)===e})),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&m.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a=10;if(void 0===e.xaxis.tickAmount)a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1);else if("dataPoints"===e.xaxis.tickAmount){if(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric){var s=t.maxX-t.minX;s<30&&(a=s-1)}}else a=e.xaxis.tickAmount;if(t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var r=[],o=t.minX-1;o<t.maxX;o++)r.push(o+1);t.xAxisScale={result:r,niceMin:r[0],niceMax:r[r.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(0,a,a,0,e.xaxis.stepSize),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1,0,e.xaxis.stepSize),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&m.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new L(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2):s.setDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,i){if(i>0){var s=e-a[i-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this,e=this.w.globals;if(e.series.length){var i=e.seriesGroups;i.length||(i=[this.w.globals.seriesNames.map((function(t){return t}))]);var a={},s={};i.forEach((function(i){a[i]=[],s[i]=[],t.w.config.series.map((function(t,a){return i.indexOf(e.seriesNames[a])>-1?a:null})).filter((function(t){return null!==t})).forEach((function(r){for(var o=0;o<e.series[e.maxValsInArrayIndex].length;o++){var n,l,h,c;void 0===a[i][o]&&(a[i][o]=0,s[i][o]=0),(t.w.config.chart.stacked&&!e.comboCharts||t.w.config.chart.stacked&&e.comboCharts&&(!t.w.config.chart.stackOnlyBar||"bar"===(null===(n=t.w.config.series)||void 0===n||null===(l=n[r])||void 0===l?void 0:l.type)||"column"===(null===(h=t.w.config.series)||void 0===h||null===(c=h[r])||void 0===c?void 0:c.type)))&&null!==e.series[r][o]&&m.isNumber(e.series[r][o])&&(e.series[r][o]>0?a[i][o]+=parseFloat(e.series[r][o])+1e-4:s[i][o]+=parseFloat(e.series[r][o]))}}))})),Object.entries(a).forEach((function(t){var i=f(t,1)[0];a[i].forEach((function(t,r){e.maxY=Math.max(e.maxY,a[i][r]),e.minY=Math.min(e.minY,s[i][r])}))}))}}}]),t}(),Q=function(){function t(e,a){i(this,t),this.ctx=e,this.elgrid=a,this.w=e.w;var s=this.w;this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.axisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xAxisoffX="bottom"===s.config.xaxis.position?s.globals.gridHeight:0,this.drawnLabels=[],this.axesUtils=new M(e)}return s(t,[{key:"drawYaxis",value:function(t){var e=this.w,i=new k(this.ctx),a=e.config.yaxis[t].labels.style,s=a.fontSize,r=a.fontFamily,o=a.fontWeight,n=i.group({class:"apexcharts-yaxis",rel:t,transform:"translate(".concat(e.globals.translateYAxisX[t],", 0)")});if(this.axesUtils.isYAxisHidden(t))return n;var l=i.group({class:"apexcharts-yaxis-texts-g"});n.add(l);var h=e.globals.yAxisScale[t].result.length-1,c=e.globals.gridHeight/h,d=e.globals.yLabelFormatters[t],g=this.axesUtils.checkForReversedLabels(t,e.globals.yAxisScale[t].result.slice());if(e.config.yaxis[t].labels.show){var u=e.globals.translateY+e.config.yaxis[t].labels.offsetY;e.globals.isBarHorizontal?u=0:"heatmap"===e.config.chart.type&&(u-=c/2),u+=parseInt(s,10)/3;for(var f=h;f>=0;f--){var p=d(g[f],f,e),x=e.config.yaxis[t].labels.padding;e.config.yaxis[t].opposite&&0!==e.config.yaxis.length&&(x*=-1);var b=this.getTextAnchor(e.config.yaxis[t].labels.align,e.config.yaxis[t].opposite),v=this.axesUtils.getYAxisForeColor(a.colors,t),y=Array.isArray(v)?v[f]:v,w=m.listToArray(e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-label tspan"))).map((function(t){return t.textContent})),A=i.drawText({x:x,y:u,text:w.includes(p)&&!e.config.yaxis[t].labels.showDuplicates?"":p,textAnchor:b,fontSize:s,fontFamily:r,fontWeight:o,maxWidth:e.config.yaxis[t].labels.maxWidth,foreColor:y,isPlainText:!1,cssClass:"apexcharts-yaxis-label ".concat(a.cssClass)});l.add(A),this.addTooltip(A,p),0!==e.config.yaxis[t].labels.rotate&&this.rotateLabel(i,A,firstLabel,e.config.yaxis[t].labels.rotate),u+=c}}return this.addYAxisTitle(i,n,t),this.addAxisBorder(i,n,t,h,c),n}},{key:"getTextAnchor",value:function(t,e){return"left"===t?"start":"center"===t?"middle":"right"===t?"end":e?"start":"end"}},{key:"addTooltip",value:function(t,e){var i=document.createElementNS(this.w.globals.SVGNS,"title");i.textContent=Array.isArray(e)?e.join(" "):e,t.node.appendChild(i)}},{key:"rotateLabel",value:function(t,e,i,a){var s=t.rotateAroundCenter(i.node),r=t.rotateAroundCenter(e.node);e.node.setAttribute("transform","rotate(".concat(a," ").concat(s.x," ").concat(r.y,")"))}},{key:"addYAxisTitle",value:function(t,e,i){var a=this.w;if(void 0!==a.config.yaxis[i].title.text){var s=t.group({class:"apexcharts-yaxis-title"}),r=a.config.yaxis[i].opposite?a.globals.translateYAxisX[i]:0,o=t.drawText({x:r,y:a.globals.gridHeight/2+a.globals.translateY+a.config.yaxis[i].title.offsetY,text:a.config.yaxis[i].title.text,textAnchor:"end",foreColor:a.config.yaxis[i].title.style.color,fontSize:a.config.yaxis[i].title.style.fontSize,fontWeight:a.config.yaxis[i].title.style.fontWeight,fontFamily:a.config.yaxis[i].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text ".concat(a.config.yaxis[i].title.style.cssClass)});s.add(o),e.add(s)}}},{key:"addAxisBorder",value:function(t,e,i,a,s){var r=this.w,o=r.config.yaxis[i].axisBorder,n=31+o.offsetX;if(r.config.yaxis[i].opposite&&(n=-31-o.offsetX),o.show){var l=t.drawLine(n,r.globals.translateY+o.offsetY-2,n,r.globals.gridHeight+r.globals.translateY+o.offsetY+2,o.color,0,o.width);e.add(l)}r.config.yaxis[i].axisTicks.show&&this.axesUtils.drawYAxisTicks(n,a,o,r.config.yaxis[i].axisTicks,i,s,e)}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new k(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,o=e.globals.gridWidth/r+.1,n=o+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=this.axesUtils.checkForReversedLabels(t,e.globals.yAxisScale[t].result.slice()),c=e.globals.timescaleLabels;if(c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),e.config.xaxis.labels.show)for(var d=c.length?0:r;c.length?d<c.length:d>=0;c.length?d++:d--){var g=l(h[d],d,e),u=e.globals.gridWidth+e.globals.padHorizontal-(n-o+e.config.xaxis.labels.offsetX);if(c.length){var f=this.axesUtils.getLabel(h,c,u,d,this.drawnLabels,this.xaxisFontSize);u=f.x,g=f.text,this.drawnLabels.push(f.text),0===d&&e.globals.skipFirstTimelinelabel&&(g=""),d===h.length-1&&e.globals.skipLastTimelinelabel&&(g="")}var p=i.drawText({x:u,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:g,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label ".concat(e.config.xaxis.labels.style.cssClass)});s.add(p),p.tspan(g),this.addTooltip(p,g),n+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new k(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);this.elgrid&&this.elgrid.elGridBorders&&e.config.grid.show?this.elgrid.elGridBorders.add(r):t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new k(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text ".concat(e.config.xaxis.title.style.cssClass)});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new k(this.ctx),s=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g")),r=s?s.getBoundingClientRect():{width:0,height:0},o=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text")),n=o?o.getBoundingClientRect():{width:0,height:0};if(o){var l=this.xPaddingForYAxisTitle(t,r,n,e);o.setAttribute("x",l.xPos-(e?10:0));var h=a.rotateAroundCenter(o);o.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,o=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:r,padd:0}:(a?r=e.width+s.config.yaxis[t].title.offsetX+i.width/2+o/2:(r=-1*e.width+s.config.yaxis[t].title.offsetX+o/2+i.width/2,s.globals.isBarHorizontal&&(o=25,r=-1*e.width-s.config.yaxis[t].title.offsetX-o)),{xPos:r,padd:o})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.forEach((function(n,l){var h=i.globals.ignoreYAxisIndexes.includes(l)||!n.show||n.floating||0===t[l].width,c=t[l].width+e[l].width;n.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-n.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+o,h||(o+=c+20),i.globals.translateYAxisX[l]=s-n.labels.offsetX+20):(a=i.globals.translateX-r,h||(r+=c+20),i.globals.translateYAxisX[l]=a+n.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w;m.listToArray(t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&!a.floating&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=m.listToArray(t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"))),o=s.getBoundingClientRect();r.forEach((function(t){t.setAttribute("text-anchor",a.labels.align)})),"left"!==a.labels.align||a.opposite?"center"===a.labels.align?s.setAttribute("transform","translate(".concat(o.width/2*(a.opposite?1:-1),", 0)")):"right"===a.labels.align&&a.opposite&&s.setAttribute("transform","translate(".concat(o.width,", 0)")):s.setAttribute("transform","translate(-".concat(o.width,", 0)"))}}))}}]),t}(),K=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.documentEvent=m.bind(this.documentEvent,this)}return s(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.axisCharts?e.globals.capturedSeriesIndex:0,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):"mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),tt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=m.extend(z,i);this.w.globals.locale=a.options}}]),t}(),et=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this,r=this.w.globals,o=this.w.config,n=new q(this.ctx,e),l=new Q(this.ctx,e);r.axisCharts&&"radar"!==t&&(r.isBarHorizontal?(a=l.drawYaxisInversed(0),i=n.drawXaxisInversed(0),r.dom.elGraphical.add(i),r.dom.elGraphical.add(a)):(i=n.drawXaxis(),r.dom.elGraphical.add(i),o.yaxis.map((function(t,e){if(-1===r.ignoreYAxisIndexes.indexOf(e)&&(a=l.drawYaxis(e),r.dom.Paper.add(a),"back"===s.w.config.grid.position)){var i=r.dom.Paper.children()[1];i.remove(),r.dom.Paper.add(i)}}))))}}]),t}(),it=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new k(this.ctx),i=new w(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,o=a.colorFrom,n=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,g=s.left,u=s.top,f=s.blur,p=s.color,x=s.opacity,b=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(b=e.drawGradient("vertical",o,n,l,h,null,c,null));var v=e.drawRect();1===t.config.xaxis.crosshairs.width&&(v=e.drawLine());var y=t.globals.gridHeight;(!m.isNumber(y)||y<0)&&(y=0);var A=t.config.xaxis.crosshairs.width;(!m.isNumber(A)||A<0)&&(A=0),v.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:y,width:A,height:y,fill:b,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(v=i.dropShadow(v,{left:g,top:u,blur:f,color:p,opacity:x})),t.globals.dom.elGraphical.add(v)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new k(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),at=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new D({}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,o=window.innerWidth>0?window.innerWidth:screen.width;if(o>a){var n=m.clone(i.globals.initialConfig);n.series=m.clone(i.config.series);var l=A.extendArrayProps(r,n,i);t=m.extend(l,t),t=m.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var h=0;h<s.length;h++)o<s[h].breakpoint&&(t=A.extendArrayProps(r,s[h].options,i),t=m.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var n=A.extendArrayProps(r,t,i);n=m.extend(i.config,n),o(n=m.extend(n,t))}else o({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new D(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),st=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.colors=[],this.isColorFn=!1,this.isHeatmapDistributed=this.checkHeatmapDistributed(),this.isBarDistributed=this.checkBarDistributed()}return s(t,[{key:"checkHeatmapDistributed",value:function(){var t=this.w.config,e=t.chart,i=t.plotOptions;return"treemap"===e.type&&i.treemap&&i.treemap.distributed||"heatmap"===e.type&&i.heatmap&&i.heatmap.distributed}},{key:"checkBarDistributed",value:function(){var t=this.w.config,e=t.chart,i=t.plotOptions;return i.bar&&i.bar.distributed&&("bar"===e.type||"rangeBar"===e.type)}},{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this.w,e=new m;t.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t.config.theme.mode));var i=p(t.config.colors||t.config.fill.colors||[]);t.globals.colors=this.getColors(i),this.applySeriesColors(t.globals.seriesColors,t.globals.colors),t.config.theme.monochrome.enabled&&(t.globals.colors=this.getMonochromeColors(t.config.theme.monochrome,t.globals.series,e));var a=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),this.applyColorTypes(["fill","stroke"],a),this.applyDataLabelsColors(a),this.applyRadarPolygonsColors(),this.applyMarkersColors(a)}},{key:"getColors",value:function(t){var e=this,i=this.w;return t&&0!==t.length?Array.isArray(t)&&t.length>0&&"function"==typeof t[0]?(this.isColorFn=!0,i.config.series.map((function(a,s){var r=t[s]||t[0];return"function"==typeof r?r({value:i.globals.axisCharts?i.globals.series[s][0]||0:i.globals.series[s],seriesIndex:s,dataPointIndex:s,w:e.w}):r}))):t:this.predefined()}},{key:"applySeriesColors",value:function(t,e){t.forEach((function(t,i){t&&(e[i]=t)}))}},{key:"getMonochromeColors",value:function(t,e,i){var a=t.color,s=t.shadeIntensity,r=t.shadeTo,o=this.isBarDistributed||this.isHeatmapDistributed?e[0].length*e.length:e.length,n=1/(o/s),l=0;return Array.from({length:o},(function(){var t="dark"===r?i.shadeColor(-1*l,a):i.shadeColor(l,a);return l+=n,t}))}},{key:"applyColorTypes",value:function(t,e){var i=this,a=this.w;t.forEach((function(t){a.globals[t].colors=void 0===a.config[t].colors?i.isColorFn?a.config.colors:e:a.config[t].colors.slice(),i.pushExtraColors(a.globals[t].colors)}))}},{key:"applyDataLabelsColors",value:function(t){var e=this.w;e.globals.dataLabels.style.colors=void 0===e.config.dataLabels.style.colors?t:e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50)}},{key:"applyRadarPolygonsColors",value:function(){var t=this.w;t.globals.radarPolygons.fill.colors=void 0===t.config.plotOptions.radar.polygons.fill.colors?["dark"===t.config.theme.mode?"#424242":"none"]:t.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(t.globals.radarPolygons.fill.colors,20)}},{key:"applyMarkersColors",value:function(t){var e=this.w;e.globals.markers.colors=void 0===e.config.markers.colors?t:e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,o=0;o<r;o++)t.push(t[o])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode,i="dark"===e?"palette4":"light"===e?"palette1":t.theme.palette||"palette1",a="dark"===e?"#f6f7f8":"light"===e?"#373d3f":t.chart.foreColor||"#373d3f";return t.tooltip.theme=e||"light",t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){var t={palette1:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"],palette2:["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"],palette3:["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"],palette4:["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"],palette5:["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"],palette6:["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"],palette7:["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"],palette8:["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"],palette9:["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"],palette10:["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"],default:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]};return t[this.w.config.theme.palette]||t.default}}]),t}(),rt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var o=new k(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(o)}}}]),t}(),ot=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var o=r.getBoundingClientRect();i=o.width,a=e.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.elLegendWrap;t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},m.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getDatalabelsRect",value:function(){var t=this,e=this.w,i=[];e.config.series.forEach((function(s,r){s.data.forEach((function(s,o){var n;n=e.globals.series[r][o],a=e.config.dataLabels.formatter(n,{ctx:t.dCtx.ctx,seriesIndex:r,dataPointIndex:o,w:e}),i.push(a)}))}));var a=m.getLargestStringFromArr(i),s=new k(this.dCtx.ctx),r=e.config.dataLabels.style,o=s.getTextRects(a,parseInt(r.fontSize),r.fontFamily);return{width:1.05*o.width,height:o.height}}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,p(a));i=e[a.indexOf(s)]}return i}}]),t}(),nt=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=m.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(o=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var n=new P(this.dCtx.ctx),l=r;r=n.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new L(this.dCtx.ctx).formatDate,w:e}),o=n.xLabelFormat(s,o,l,{i:void 0,dateFormatter:new L(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(o=r="1");var h=new k(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==o&&(d=h.getTextRects(o,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var g=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=g(r),r!==o&&(d=g(o)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var t,e=this.w;if(!e.globals.hasXaxisGroups)return{width:0,height:0};var i,a=(null===(t=e.config.xaxis.group.style)||void 0===t?void 0:t.fontSize)||e.config.xaxis.labels.style.fontSize,s=e.globals.groups.map((function(t){return t.title})),r=m.getLargestStringFromArr(s),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,s),n=new k(this.dCtx.ctx),l=n.getTextRects(r,a),h=l;return r!==o&&(h=n.getTextRects(o,a)),i={width:l.width>=h.width?l.width:h.width,height:l.height>=h.height?l.height:h.height},e.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new k(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new k(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,o=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var n=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,n){s.yaxis.length>1&&function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)}(n)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var n=e.dCtx.timescaleLabels[0],l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+o/1.75-e.dCtx.yAxisWidthRight,h=n.position-o/1.75+e.dCtx.yAxisWidthLeft,c="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width:0;l>a.svgWidth-a.translateX-c&&(a.skipLastTimelinelabel=!0),h<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<o/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&(e.dCtx.xPadRight=o/2+1)}(t)};s.yaxis.forEach((function(t,i){n?(e.dCtx.gridPad.left<o&&(e.dCtx.xPadLeft=o/2+1),e.dCtx.xPadRight=o/2+1):l(t,i)}))}}]),t}(),lt=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new M(this.dCtx.ctx);return e.config.yaxis.map((function(r,o){var n={seriesIndex:o,dataPointIndex:-1,w:e},l=e.globals.yAxisScale[o],h=0;if(!s.isYAxisHidden(o)&&r.labels.show&&void 0!==r.labels.minWidth&&(h=r.labels.minWidth),!s.isYAxisHidden(o)&&r.labels.show&&l.result.length){var c=e.globals.yLabelFormatters[o],d=l.niceMin===Number.MIN_VALUE?0:l.niceMin,g=l.result.reduce((function(t,e){var i,a;return(null===(i=String(c(t,n)))||void 0===i?void 0:i.length)>(null===(a=String(c(e,n)))||void 0===a?void 0:a.length)?t:e}),d),u=g=c(g,n);if(void 0!==g&&0!==g.length||(g=l.niceMax),e.globals.isBarHorizontal){a=0;var f=e.globals.labels.slice();g=m.getLargestStringFromArr(f),g=c(g,{seriesIndex:o,dataPointIndex:-1,w:e}),u=t.dCtx.dimHelpers.getLargestStringFromMultiArr(g,f)}var p=new k(t.dCtx.ctx),x="rotate(".concat(r.labels.rotate," 0 0)"),b=p.getTextRects(g,r.labels.style.fontSize,r.labels.style.fontFamily,x,!1),v=b;g!==u&&(v=p.getTextRects(u,r.labels.style.fontSize,r.labels.style.fontFamily,x,!1)),i.push({width:(h>v.width||h>b.width?h:v.width>b.width?v.width:b.width)+a,height:v.height>b.height?v.height:b.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new k(t.dCtx.ctx),r="rotate(".concat(e.title.rotate," 0 0)"),o=s.getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,r,!1);i.push({width:o.width,height:o.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new M(this.dCtx.ctx),o=function(o,n){var l=t.config.yaxis[n].floating,h=0;o.width>0&&!l?(h=o.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(n)&&(h=h-o.width-s)):h=l||r.isYAxisHidden(n)?0:5,t.config.yaxis[n].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){o(t,e)})),t.globals.yTitleCoords.map((function(t,e){o(t,e)})),t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),ht=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w,i=e.config,a=e.globals;if(a.noData||a.collapsedSeries.length+a.ancillaryCollapsedSeries.length===i.series.length)return 0;var s=function(t){return["bar","rangeBar","candlestick","boxPlot"].includes(t)},r=i.chart.type,o=0,n=s(r)?i.series.length:1;a.comboBarCount>0&&(n=a.comboBarCount),a.collapsedSeries.forEach((function(t){s(t.type)&&(n-=1)})),i.chart.stacked&&(n=1);var l=s(r)||a.comboBarCount>0,h=Math.abs(a.initialMaxX-a.initialMinX);if(l&&a.isXNumeric&&!a.isBarHorizontal&&n>0&&0!==h){h<=3&&(h=a.dataPoints);var c=h/t,d=a.minXDiff&&a.minXDiff/c>0?a.minXDiff/c:0;d>t/2&&(d/=2),(o=d*parseInt(i.plotOptions.bar.columnWidth,10)/100)<1&&(o=1),a.barPadForNumericAxis=o}return o}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!i.axisCharts?0:10;["title","subtitle"].forEach((function(s){void 0!==e.config[s].text?a+=e.config[s].margin:a+=t.dCtx.isSparkline||!i.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||i.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight-=s.height+r.height+a,i.translateY+=s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new M(this.dCtx.ctx);i.config.yaxis.forEach((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX-=e[r].width+t[r].width+parseInt(s.labels.style.fontSize,10)/1.2+12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),ct=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new ot(this),this.dimYAxis=new lt(this),this.dimXAxis=new nt(this),this.dimGrid=new ht(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return s(t,[{key:"plotCoords",value:function(){var t=this,e=this.w,i=e.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.datalabelsCoords={width:0,height:0};var a=Array.isArray(e.config.stroke.width)?Math.max.apply(Math,p(e.config.stroke.width)):e.config.stroke.width;this.isSparkline&&((e.config.markers.discrete.length>0||e.config.markers.size>0)&&Object.entries(this.gridPad).forEach((function(e){var i=f(e,2),a=i[0],s=i[1];t.gridPad[a]=Math.max(s,t.w.globals.markers.largestSize/1.5)})),this.gridPad.top=Math.max(a/2,this.gridPad.top),this.gridPad.bottom=Math.max(a/2,this.gridPad.bottom)),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var s=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*s,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(s>0?s:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();i.isSlopeChart&&(this.datalabelsCoords=this.dimHelpers.getDatalabelsRect()),e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),n=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,n,o),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var l=this.yAxisWidth,h=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-n.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-r.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var c=10;("radar"===e.config.chart.type||this.isSparkline)&&(l=0,h=0),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(l=0,h=0,c=0),this.isSparkline||"treemap"===e.config.chart.type||this.dimXAxis.additionalPaddingXLabels(r);var d=function(){i.translateX=l+t.datalabelsCoords.width,i.gridHeight=i.svgHeight-t.lgRect.height-h-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-l-2*t.datalabelsCoords.width};switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=c,d();break;case"top":i.translateY=this.lgRect.height+c,d();break;case"left":i.translateY=c,i.translateX=this.lgRect.width+l+this.datalabelsCoords.width,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-2*this.datalabelsCoords.width;break;case"right":i.translateY=c,i.translateX=l+this.datalabelsCoords.width,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-2*this.datalabelsCoords.width-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new Q(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,o=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating){e.gridHeight=e.svgHeight;var n=e.dom.elWrap.getBoundingClientRect().width;return e.gridWidth=Math.min(n,e.gridHeight),e.translateY=r,void(e.translateX=o+(e.svgWidth-e.gridWidth)/2)}switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e,i){var a=this.w,s=a.globals.hasXaxisGroups?2:1,r=i.height+t.height+e.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,n=a.globals.rotateXLabels?22:10,l=a.globals.rotateXLabels&&"bottom"===a.config.legend.position?10:0;this.xAxisHeight=r*o+s*n+l,this.xAxisWidth=t.width,this.xAxisHeight-e.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var h=0,c=0;a.config.yaxis.forEach((function(t){h+=t.labels.minWidth,c+=t.labels.maxWidth})),this.yAxisWidth<h&&(this.yAxisWidth=h),this.yAxisWidth>c&&(this.yAxisWidth=c)}}]),t}(),dt=function(){function t(e){i(this,t),this.w=e.w,this.lgCtx=e}return s(t,[{key:"getLegendStyles",value:function(){var t,e,i,a=document.createElement("style");a.setAttribute("type","text/css");var s=(null===(t=this.lgCtx.ctx)||void 0===t||null===(e=t.opts)||void 0===e||null===(i=e.chart)||void 0===i?void 0:i.nonce)||this.w.config.chart.nonce;s&&a.setAttribute("nonce",s);var r=document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }");return a.appendChild(r),a}},{key:"getLegendDimensions",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles())}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),n=a.config.chart.type;if("pie"===n||"polarArea"===n||"donut"===n){var l=a.config.plotOptions.pie.donut.labels;new k(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,l)}o.fire("click")}}},{key:"getSeriesAfterCollapsing",value:function(t){var e=t.realIndex,i=this.w,a=i.globals,s=m.clone(i.config.series);if(a.axisCharts){var r=i.config.yaxis[a.seriesYAxisReverseMap[e]],o={index:e,data:s[e].data.slice(),type:s[e].type||i.config.chart.type};if(r&&r.show&&r.showAlways)a.ancillaryCollapsedSeriesIndices.indexOf(e)<0&&(a.ancillaryCollapsedSeries.push(o),a.ancillaryCollapsedSeriesIndices.push(e));else if(a.collapsedSeriesIndices.indexOf(e)<0){a.collapsedSeries.push(o),a.collapsedSeriesIndices.push(e);var n=a.risingSeries.indexOf(e);a.risingSeries.splice(n,1)}}else a.collapsedSeries.push({index:e,data:s[e]}),a.collapsedSeriesIndices.push(e);return a.allSeriesCollapsed=a.collapsedSeries.length+a.ancillaryCollapsedSeries.length===i.config.series.length,this._getSeriesBasedOnCollapsedState(s)}},{key:"hideSeries",value:function(t){for(var e=t.seriesEl,i=t.realIndex,a=this.w,s=this.getSeriesAfterCollapsing({realIndex:i}),r=e.childNodes,o=0;o<r.length;o++)r[o].classList.contains("apexcharts-series-markers-wrap")&&(r[o].classList.contains("apexcharts-hide")?r[o].classList.remove("apexcharts-hide"):r[o].classList.add("apexcharts-hide"));this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=m.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?s[i].data=t[r].data.slice():s[i]=t[r].data,s[i].hidden=!1,t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w,i=0;return e.globals.axisCharts?t.forEach((function(a,s){e.globals.collapsedSeriesIndices.indexOf(s)<0&&e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)<0||(t[s].data=[],i++)})):t.forEach((function(a,s){!e.globals.collapsedSeriesIndices.indexOf(s)<0&&(t[s]=0,i++)})),e.globals.allSeriesCollapsed=i===t.length,t}}]),t}(),gt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new dt(this)}return s(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config,a=i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1;if(this.legendHelpers.appendToForeignObject(),(a||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"createLegendMarker",value:function(t){var e=t.i,i=t.fillcolor,a=this.w,s=document.createElement("span");s.classList.add("apexcharts-legend-marker");var r=a.config.legend.markers.shape||a.config.markers.shape,o=r;Array.isArray(r)&&(o=r[e]);var n=Array.isArray(a.config.legend.markers.size)?parseFloat(a.config.legend.markers.size[e]):parseFloat(a.config.legend.markers.size),l=Array.isArray(a.config.legend.markers.offsetX)?parseFloat(a.config.legend.markers.offsetX[e]):parseFloat(a.config.legend.markers.offsetX),h=Array.isArray(a.config.legend.markers.offsetY)?parseFloat(a.config.legend.markers.offsetY[e]):parseFloat(a.config.legend.markers.offsetY),c=Array.isArray(a.config.legend.markers.strokeWidth)?parseFloat(a.config.legend.markers.strokeWidth[e]):parseFloat(a.config.legend.markers.strokeWidth),d=s.style;if(d.height=2*(n+c)+"px",d.width=2*(n+c)+"px",d.left=l+"px",d.top=h+"px",a.config.legend.markers.customHTML)d.background="transparent",d.color=i[e],Array.isArray(a.config.legend.markers.customHTML)?a.config.legend.markers.customHTML[e]&&(s.innerHTML=a.config.legend.markers.customHTML[e]()):s.innerHTML=a.config.legend.markers.customHTML();else{var u=new W(this.ctx).getMarkerConfig({cssClass:"apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o),seriesIndex:e,strokeWidth:c,size:n}),f=SVG(s).size("100%","100%"),p=new k(this.ctx).drawMarker(0,0,g(g({},u),{},{pointFillColor:Array.isArray(i)?i[e]:u.pointFillColor,shape:o}));SVG.select(".apexcharts-legend-marker.apexcharts-marker").members.forEach((function(t){t.node.classList.contains("apexcharts-marker-triangle")?t.node.style.transform="translate(50%, 45%)":t.node.style.transform="translate(50%, 50%)"})),f.add(p)}return s}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.config.legend.markers.fillColors?e.config.legend.markers.fillColors.slice():e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);for(var o=e.globals.legendFormatter,n=e.config.legend.inverseOrder,l=n?a.length-1:0;n?l>=0:l<=a.length-1;n?l--:l++){var h,c=o(a[l],{seriesIndex:l,w:e}),d=!1,g=!1;if(e.globals.collapsedSeries.length>0)for(var u=0;u<e.globals.collapsedSeries.length;u++)e.globals.collapsedSeries[u].index===l&&(d=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var f=0;f<e.globals.ancillaryCollapsedSeriesIndices.length;f++)e.globals.ancillaryCollapsedSeriesIndices[f]===l&&(g=!0);var p=this.createLegendMarker({i:l,fillcolor:s});k.setAttrs(p,{rel:l+1,"data:collapsed":d||g}),(d||g)&&p.classList.add("apexcharts-inactive-legend");var x=document.createElement("div"),b=document.createElement("span");b.classList.add("apexcharts-legend-text"),b.innerHTML=Array.isArray(c)?c.join(" "):c;var v=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:Array.isArray(e.config.legend.labels.colors)?null===(h=e.config.legend.labels.colors)||void 0===h?void 0:h[l]:e.config.legend.labels.colors;v||(v=e.config.chart.foreColor),b.style.color=v,b.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",b.style.fontWeight=e.config.legend.fontWeight,b.style.fontFamily=i||e.config.chart.fontFamily,k.setAttrs(b,{rel:l+1,i:l,"data:default-text":encodeURIComponent(c),"data:collapsed":d||g}),x.appendChild(p),x.appendChild(b);var y=new A(this.ctx);if(!e.config.legend.showForZeroSeries)0===y.getSeriesTotalByIndex(l)&&y.seriesHaveSameValues(l)&&!y.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&x.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||y.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&x.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(x),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position),x.classList.add("apexcharts-legend-series"),x.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",k.setAttrs(x,{rel:l+1,seriesName:m.escapeString(a[l]),"data:collapsed":d||g}),(d||g)&&x.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||x.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.elLegendWrap,s=a.clientHeight,r=0,o=0;if("bottom"===i.config.legend.position)o=i.globals.svgHeight-Math.min(s,i.globals.svgHeight/2)-5;else if("top"===i.config.legend.position){var n=new ct(this.ctx),l=n.dimHelpers.getTitleSubtitleCoords("title").height,h=n.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,o=o+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=o+"px","right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.elLegendWrap.style.right=0;var e=new ct(this.ctx),i=e.dimHelpers.getTitleSubtitleCoords("title"),a=e.dimHelpers.getTitleSubtitleCoords("subtitle"),s=0;"top"===t.config.legend.position&&(s=i.height+a.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,s)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendDimensions(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-series")||t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new V(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new V(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-series")||t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),ut=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=a.globals.minX,this.maxX=a.globals.maxX}return s(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],o=function(i,a,s){var o=i.toLowerCase();t.t[o]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[o]?t.t[o]:s,title:t.localeValues[i],class:"apexcharts-".concat(o,"-icon")})};o("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),o("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var n=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};n("zoom"),n("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),o("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&m.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)k.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),k.setAttrs(this.elMenu,{class:"apexcharts-menu"});for(var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}],i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,k.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},o=m.clone(i.globals.initialConfig.yaxis);i.config.chart.group||(r.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new U(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=e.globals.initialConfig.xaxis.min,e.globals.lastXAxis.max=e.globals.initialConfig.xaxis.max,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(m.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),ft=function(t){h(a,t);var e=o(a);function a(t){var s;return i(this,a),(s=e.call(this,t)).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new k(s.ctx),s.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend","wheel"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s.moveDirection="none",s.debounceTimer=null,s.debounceDelay=100,s.wheelDelay=400,s}return s(a,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.elGraphical.add(this.zoomRect),a.globals.dom.elGraphical.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})})),a.config.chart.zoom.allowMouseWheelZoom&&this.hoverArea.addEventListener("wheel",s.mouseWheelEvent.bind(s),{capture:!1,passive:!1})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,o=i.config.chart.toolbar.autoSelected;if(e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===o?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(o),this.shiftWasPressed=!1),e.target){var n,l=e.target.classList;if(e.target.parentNode&&null!==e.target.parentNode&&(n=e.target.parentNode.classList),!(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||n&&n.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var h=a.gridRect.getBoundingClientRect();a.startX=a.clientX-h.left,a.startY=a.clientY-h.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var c,d=null===(c=a.gridRect)||void 0===c?void 0:c.getBoundingClientRect();d&&a.w.globals.mousedown&&(a.endX=a.clientX-d.left,a.endY=a.clientY-d.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"mouseWheelEvent",value:function(t){var e=this,i=this.w;t.preventDefault();var a=Date.now();a-i.globals.lastWheelExecution>this.wheelDelay&&(this.executeMouseWheelZoom(t),i.globals.lastWheelExecution=a),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){a-i.globals.lastWheelExecution>e.wheelDelay&&(e.executeMouseWheelZoom(t),i.globals.lastWheelExecution=a)}),this.debounceDelay)}},{key:"executeMouseWheelZoom",value:function(t){var e,i=this.w;this.minX=i.globals.isRangeBar?i.globals.minY:i.globals.minX,this.maxX=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;var a=null===(e=this.gridRect)||void 0===e?void 0:e.getBoundingClientRect();if(a){var s,r,o,n=(t.clientX-a.left)/a.width,l=this.minX,h=this.maxX,c=h-l;if(t.deltaY<0){var d=l+n*c;r=d-(s=.5*c)/2,o=d+s/2}else r=l-(s=1.5*c)/2,o=h+s/2;if(!i.globals.isRangeBar){r=Math.max(r,i.globals.initialMinX),o=Math.min(o,i.globals.initialMaxX);var g=.01*(i.globals.initialMaxX-i.globals.initialMinX);if(o-r<g){var u=(r+o)/2;r=u-g/2,o=u+g/2}}var f=this._getNewMinXMaxX(r,o);isNaN(f.minX)||isNaN(f.maxX)||this.zoomUpdateOptions(f.minX,f.maxX)}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a=t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i;t.globals.isRangeBar&&(i=(t.config.chart.selection.xaxis.min-t.globals.yAxisScale[0].niceMin)/e.invertedYRatio,a=(t.config.chart.selection.xaxis.max-t.config.chart.selection.xaxis.min)/e.invertedYRatio);var s={x:i,y:0,width:a,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(s),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,o=void 0===r?0:r,n=t.translateY,l=void 0===n?0:n,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var g={transform:"translate("+o+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),k.setAttrs(c.node,g)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),k.setAttrs(d.node,g))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),o=s.startX-1,n=s.startY,l=!1,h=!1,c=s.clientX-r.left-o,d=s.clientY-r.top-n,g={};return Math.abs(c+o)>a.globals.gridWidth?c=a.globals.gridWidth-o:s.clientX-r.left<0&&(c=o),o>s.clientX-r.left&&(l=!0,c=Math.abs(c)),n>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g="x"===i?{x:l?o-c:o,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?n-d:n,width:a.globals.gridWidth,height:d}:{x:l?o-c:o,y:h?n-d:n,width:c,height:d},s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w,s=this.xyRatios,r=this.selectionRect,o=0;"resizing"===t&&(o=30);var n=function(t){return parseFloat(r.node.getAttribute(t))},l={x:n("x"),y:n("y"),width:n("width"),height:n("height")};a.globals.selection=l,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t,e,o,n,l=i.gridRect.getBoundingClientRect(),h=r.node.getBoundingClientRect();a.globals.isRangeBar?(t=a.globals.yAxisScale[0].niceMin+(h.left-l.left)*s.invertedYRatio,e=a.globals.yAxisScale[0].niceMin+(h.right-l.left)*s.invertedYRatio,o=0,n=1):(t=a.globals.xAxisScale.niceMin+(h.left-l.left)*s.xRatio,e=a.globals.xAxisScale.niceMin+(h.right-l.left)*s.xRatio,o=a.globals.yAxisScale[0].niceMin+(l.bottom-h.bottom)*s.yRatio[0],n=a.globals.yAxisScale[0].niceMax-(h.top-l.top)*s.yRatio[0]);var c={xaxis:{min:t,max:e},yaxis:{min:o,max:n}};a.config.chart.events.selection(i.ctx,c),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,c)}),o))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,o=this.ctx.toolbar;if(s.startX>s.endX){var n=s.startX;s.startX=s.endX,s.endX=n}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isRangeBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],g=[];if(a.config.yaxis.forEach((function(t,e){var i=a.globals.seriesYAxisMap[e][0];d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[i]*s.startY),g.push(a.globals.yAxisScale[e].niceMax-r.yRatio[i]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var u=m.clone(a.globals.initialConfig.yaxis),f=m.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(f={min:h,max:c}),"xy"!==i&&"y"!==i||u.forEach((function(t,e){u[e].min=g[e],u[e].max=d[e]})),o){var p=o.getBeforeZoomRange(f,u);p&&(f=p.xaxis?p.xaxis:f,u=p.yaxis?p.yaxis:u)}var x={xaxis:f};a.config.chart.group||(x.yaxis=u),s.ctx.updateHelpers._updateOptions(x,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&o.zoomCallback(f,u)}else if(a.globals.selectionEnabled){var b,v=null;b={min:h,max:c},"xy"!==i&&"y"!==i||(v=m.clone(a.config.yaxis)).forEach((function(t,e){v[e].min=g[e],v[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:b,yaxis:v})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=i.globals.isRangeBar?i.globals.minY:i.globals.minX,n=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(o,n)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=m.clone(i.globals.initialConfig.yaxis),r=a.xRatio,o=i.globals.minX,n=i.globals.maxX;i.globals.isRangeBar&&(r=a.invertedYRatio,o=i.globals.minY,n=i.globals.maxY),"left"===this.moveDirection?(t=o+i.globals.gridWidth/15*r,e=n+i.globals.gridWidth/15*r):"right"===this.moveDirection&&(t=o-i.globals.gridWidth/15*r,e=n-i.globals.gridWidth/15*r),i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=o,e=n);var l={xaxis:{min:t,max:e}};i.config.chart.group||(l.yaxis=s),this.updateScrolledChart(l,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),a}(ut),pt=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return s(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,o=i.getBoundingClientRect(),n=o.width,l=o.height,h=n/(r.globals.dataPoints-1),c=l/r.globals.dataPoints,d=this.hasBars();!r.globals.comboCharts&&!d||r.config.xaxis.convertedCatToNumeric||(h=n/r.globals.dataPoints);var g=a-o.left-r.globals.barPadForNumericAxis,u=s-o.top;g<0||u<0||g>n||u>l?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var f=Math.round(g/h),p=Math.floor(u/c);d&&!r.config.xaxis.convertedCatToNumeric&&(f=Math.ceil(g/h),f-=1);var x=null,b=null,v=r.globals.seriesXvalues.map((function(t){return t.filter((function(t){return m.isNumber(t)}))})),y=r.globals.seriesYvalues.map((function(t){return t.filter((function(t){return m.isNumber(t)}))}));if(r.globals.isXNumeric){var w=this.ttCtx.getElGrid().getBoundingClientRect(),k=g*(w.width/n),A=u*(w.height/l);x=(b=this.closestInMultiArray(k,A,v,y)).index,f=b.j,null!==x&&(v=r.globals.seriesXvalues[x],f=(b=this.closestInArray(k,v)).index)}return r.globals.capturedSeriesIndex=null===x?-1:x,(!f||f<1)&&(f=0),r.globals.isBarHorizontal?r.globals.capturedDataPointIndex=p:r.globals.capturedDataPointIndex=f,{capturedSeries:x,j:r.globals.isBarHorizontal?p:f,hoverX:g,hoverY:u}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,o=null,n=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):o=0;var l=i[r][0],h=Math.abs(t-l);if(i.forEach((function(e){e.forEach((function(e,i){var a=Math.abs(t-e);a<=h&&(h=a,n=i)}))})),-1!==n){var c=a[r][n],d=Math.abs(e-c);o=r,a.forEach((function(t,i){var a=Math.abs(e-t[n]);a<=d&&(d=a,o=i)}))}return{index:o,j:n}}},{key:"getFirstActiveXArray",value:function(t){for(var e=this.w,i=0,a=t.map((function(t,e){return t.length>0?e:-1})),s=0;s<a.length;s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)){i=a[s];break}return i}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var o=Math.abs(t-e[r]);o<s&&(s=o,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return p(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(t){return"number"==typeof t?this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-series-markers-wrap > *")):this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=p(t)).sort((function(t,e){var i=Number(t.getAttribute("data:realIndex")),a=Number(e.getAttribute("data:realIndex"));return a<i?1:a>i?-1:0}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(t){return this.getElMarkers(t).length>0}},{key:"getPathFromPoint",value:function(t,e){var i=Number(t.getAttribute("cx")),a=Number(t.getAttribute("cy")),s=t.getAttribute("shape");return new k(this.ctx).getMarkerPath(i,a,s,e)}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),xt=function(){function t(e){i(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new pt(e)}return s(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,o=t.j,n=void 0===o?null:o,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:n,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i,r);var g=this.getValuesToPrint({i:r,j:n});this.printLabels({i:r,j:n,values:g,ttItems:a,shared:i,e:c});var u=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=u.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=u.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var e,i=this,a=t.i,s=t.j,r=t.values,o=t.ttItems,n=t.shared,l=t.e,h=this.w,c=[],d=function(t){return h.globals.seriesGoals[t]&&h.globals.seriesGoals[t][s]&&Array.isArray(h.globals.seriesGoals[t][s])},u=r.xVal,f=r.zVal,p=r.xAxisTTVal,x="",b=h.globals.colors[a];null!==s&&h.config.plotOptions.bar.distributed&&(b=h.globals.colors[s]);for(var v=function(t,r){var v=i.getFormatters(a);x=i.getSeriesName({fn:v.yLbTitleFormatter,index:a,seriesIndex:a,j:s}),"treemap"===h.config.chart.type&&(x=v.yLbTitleFormatter(String(h.config.series[a].data[s].x),{series:h.globals.series,seriesIndex:a,dataPointIndex:s,w:h}));var m=h.config.tooltip.inverseOrder?r:t;if(h.globals.axisCharts){var y=function(t){var e,i,a,r;return h.globals.isRangeData?v.yLbFormatter(null===(e=h.globals.seriesRangeStart)||void 0===e||null===(i=e[t])||void 0===i?void 0:i[s],{series:h.globals.seriesRangeStart,seriesIndex:t,dataPointIndex:s,w:h})+" - "+v.yLbFormatter(null===(a=h.globals.seriesRangeEnd)||void 0===a||null===(r=a[t])||void 0===r?void 0:r[s],{series:h.globals.seriesRangeEnd,seriesIndex:t,dataPointIndex:s,w:h}):v.yLbFormatter(h.globals.series[t][s],{series:h.globals.series,seriesIndex:t,dataPointIndex:s,w:h})};if(n)v=i.getFormatters(m),x=i.getSeriesName({fn:v.yLbTitleFormatter,index:m,seriesIndex:a,j:s}),b=h.globals.colors[m],e=y(m),d(m)&&(c=h.globals.seriesGoals[m][s].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:m,dataPointIndex:s,w:h})}})));else{var w,k=null==l||null===(w=l.target)||void 0===w?void 0:w.getAttribute("fill");k&&(-1!==k.indexOf("url")?-1!==k.indexOf("Pattern")&&(b=h.globals.dom.baseEl.querySelector(k.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke")):b=k),e=y(a),d(a)&&Array.isArray(h.globals.seriesGoals[a][s])&&(c=h.globals.seriesGoals[a][s].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:a,dataPointIndex:s,w:h})}})))}}null===s&&(e=v.yLbFormatter(h.globals.series[a],g(g({},h),{},{seriesIndex:a,dataPointIndex:a}))),i.DOMHandling({i:a,t:m,j:s,ttItems:o,values:{val:e,goalVals:c,xVal:u,xAxisTTVal:p,zVal:f},seriesName:x,shared:n,pColor:b})},m=0,y=h.globals.series.length-1;m<h.globals.series.length;m++,y--)v(m,y)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=t.j,a=t.ttItems,s=t.values,r=t.seriesName,o=t.shared,n=t.pColor,l=this.w,h=this.ttCtx,c=s.val,d=s.goalVals,g=s.xVal,u=s.xAxisTTVal,f=s.zVal,p=null;p=a[e].children,l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=n,p[0].style.display="none"),h.showTooltipTitle&&(null===h.tooltipTitle&&(h.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),h.tooltipTitle.innerHTML=g),h.isXAxisTooltipEnabled&&(h.xaxisTooltipText.innerHTML=""!==u?u:g);var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");x&&(x.innerHTML=r||"");var b=a[e].querySelector(".apexcharts-tooltip-text-y-value");b&&(b.innerHTML=void 0!==c?c:""),p[0]&&p[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(n=l.config.tooltip.marker.fillColors[e]),p[0].style.backgroundColor=n),l.config.tooltip.marker.show||(p[0].style.display="none");var v=a[e].querySelector(".apexcharts-tooltip-text-goals-label"),m=a[e].querySelector(".apexcharts-tooltip-text-goals-value");if(d.length&&l.globals.seriesGoals[e]){var y=function(){var t="<div >",e="<div>";d.forEach((function(i,a){t+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name,"</div>"),e+="<div>".concat(i.val,"</div>")})),v.innerHTML=t+"</div>",m.innerHTML=e+"</div>"};o?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y():(v.innerHTML="",m.innerHTML=""):y()}else v.innerHTML="",m.innerHTML="";null!==f&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title,a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==f?f:"");if(o&&p[0]){if(l.config.tooltip.hideEmptySeries){var w=a[e].querySelector(".apexcharts-tooltip-marker"),k=a[e].querySelector(".apexcharts-tooltip-text");0==parseFloat(c)?(w.style.display="none",k.style.display="none"):(w.style.display="block",k.style.display="block")}null==c||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1||Array.isArray(h.tConfig.enabledOnSeries)&&-1===h.tConfig.enabledOnSeries.indexOf(e)?p[0].parentNode.style.display="none":p[0].parentNode.style.display=l.config.tooltip.items.display}else Array.isArray(h.tConfig.enabledOnSeries)&&-1===h.tConfig.enabledOnSeries.indexOf(e)&&(p[0].parentNode.style.display="none")}},{key:"toggleActiveInactiveSeries",value:function(t,e){var i=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var a=i.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e));a&&(a.classList.add("apexcharts-active"),a.style.display=i.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",o="",n=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=new _(this.ctx).isFormatXY()?void 0!==a.config.series[e].data[i]?a.config.series[e].data[i].x:"":void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new P(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new L(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(n=c(a.globals.seriesZ[e][i],a)),o="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:n}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,o=this.ttCtx.getElTooltip(),n=r.config.tooltip.custom;Array.isArray(n)&&n[e]&&(n=n[e]),o.innerHTML=n({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),bt=function(){function t(e){i(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return s(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/o*e),null===s||a.globals.isBarHorizontal||(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.isXAxisTooltipEnabled){var n=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(n=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(n)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&k.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&k.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new k(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,o=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(o-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=o+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),o=s.tooltipRect,n=null!==i?parseFloat(i):1,l=parseFloat(t)+n+5,h=parseFloat(e)+n/2;if(l>a.globals.gridWidth/2&&(l=l-o.ttWidth-n-10),l>a.globals.gridWidth-o.ttWidth-10&&(l=a.globals.gridWidth-o.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid().getBoundingClientRect();(l=s.e.clientX-c.left)>a.globals.gridWidth/2&&(l-=s.tooltipRect.ttWidth),(h=s.e.clientY+a.globals.translateY-c.top)>a.globals.gridHeight/2&&(h-=s.tooltipRect.ttHeight)}else a.globals.isBarHorizontal||o.ttHeight/2+h>a.globals.gridHeight&&(h=a.globals.gridHeight-o.ttHeight+a.globals.translateY);isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s,r,o=this.w,n=this.ttCtx,l=new k(this.ctx),h=o.globals.pointsArray,c=n.tooltipUtil.getHoverMarkerSize(e),d=o.config.series[e].type;if(!d||"column"!==d&&"candlestick"!==d&&"boxPlot"!==d){s=null===(i=h[e][t])||void 0===i?void 0:i[0],r=(null===(a=h[e][t])||void 0===a?void 0:a[1])||0;var g=o.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers path"));if(g&&r<o.globals.gridHeight&&r>0){var u=g.getAttribute("shape"),f=l.getMarkerPath(s,r,u,1.5*c);g.setAttribute("d",f)}this.moveXCrosshairs(s),n.fixedTooltip||this.moveTooltip(s,r,c)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,o=a.globals.pointsArray,n=new V(this.ctx),l=new k(this.ctx);e=n.getActiveConfigSeriesIndex("asc",["line","area","scatter","bubble"]);var h=i.tooltipUtil.getHoverMarkerSize(e);o[e]&&(s=o[e][t][0],r=o[e][t][1]);var c=i.tooltipUtil.getAllMarkers();if(null!==c)for(var d=0;d<a.globals.series.length;d++){var g=o[d];if(a.globals.comboCharts&&void 0===g&&c.splice(d,0,null),g&&g.length){var u=o[d][t][1],f=void 0;c[d].setAttribute("cx",s);var p=c[d].getAttribute("shape");if("rangeArea"===a.config.chart.type&&!a.globals.comboCharts){var x=t+a.globals.series[d].length;f=o[d][x][1],u-=Math.abs(u-f)/2}if(null!==u&&!isNaN(u)&&u<a.globals.gridHeight+h&&u+h>0){var b=l.getMarkerPath(s,u,p,h);c[d].setAttribute("d",b)}else c[d].setAttribute("d","")}}this.moveXCrosshairs(s),i.fixedTooltip||this.moveTooltip(s,r||a.globals.gridHeight,h)}},{key:"moveStickyTooltipOverBars",value:function(t,e){var i=this.w,a=this.ttCtx,s=i.globals.columnSeries?i.globals.columnSeries.length:i.globals.series.length,r=s>=2&&s%2==0?Math.floor(s/2):Math.floor(s/2)+1;i.globals.isBarHorizontal&&(r=new V(this.ctx).getActiveConfigSeriesIndex("desc")+1);var o=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"']"));o||"number"!=typeof e||(o=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"']")));var n=o?parseFloat(o.getAttribute("cx")):0,l=o?parseFloat(o.getAttribute("cy")):0,h=o?parseFloat(o.getAttribute("barWidth")):0,c=a.getElGrid().getBoundingClientRect(),d=o&&(o.classList.contains("apexcharts-candlestick-area")||o.classList.contains("apexcharts-boxPlot-area"));i.globals.isXNumeric?(o&&!d&&(n-=s%2!=0?h/2:0),o&&d&&i.globals.comboCharts&&(n-=h/2)):i.globals.isBarHorizontal||(n=a.xAxisTicksPositions[t-1]+a.dataPointsDividedWidth/2,isNaN(n)&&(n=a.xAxisTicksPositions[t]-a.dataPointsDividedWidth/2)),i.globals.isBarHorizontal?l-=a.tooltipRect.ttHeight:i.config.tooltip.followCursor?l=a.e.clientY-c.top-a.tooltipRect.ttHeight/2:l+a.tooltipRect.ttHeight+15>i.globals.gridHeight&&(l=i.globals.gridHeight),i.globals.isBarHorizontal||this.moveXCrosshairs(n),a.fixedTooltip||this.moveTooltip(n,l||i.globals.gridHeight)}}]),t}(),vt=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new bt(e)}return s(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new k(this.ctx),i=new W(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=p(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var o=void 0,n="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(n+=" no-pointer-events");var l=i.getMarkerConfig({cssClass:n,seriesIndex:Number(r.getAttribute("data:realIndex"))});(o=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(o.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),o=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,o=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var n=this.ttCtx.getElGrid().getBoundingClientRect();r=this.ttCtx.e.clientX-n.left}this.tooltipPosition.moveTooltip(r,o,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=e.config.markers.hover.size,n=0;n<r.length;n++){var l=r[n].getAttribute("rel"),h=r[n].getAttribute("index");if(void 0===o&&(o=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[n]);var c=r[n].getAttribute("cx"),d=r[n].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,o)}else i.oldPointSize(r[n])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a<0&&(a=0);var o=this.ttCtx.tooltipUtil.getPathFromPoint(e,a);e.setAttribute("d",o)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size")),i=this.ttCtx.tooltipUtil.getPathFromPoint(t,e);t.setAttribute("d",i)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));if(m.isNumber(i)&&i>=0){var a=this.ttCtx.tooltipUtil.getPathFromPoint(t[e],i);t[e].setAttribute("d",a)}else t[e].setAttribute("d","M0,0")}}}]),t}(),mt=function(){function t(e){i(this,t),this.w=e.w;var a=this.w;this.ttCtx=e,this.isVerticalGroupedRangeBar=!a.globals.isBarHorizontal&&"rangeBar"===a.config.chart.type&&a.config.plotOptions.bar.rangeBarGroupRows}return s(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,o=this.ttCtx,n=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),g=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),n.globals.capturedSeriesIndex=l,n.globals.capturedDataPointIndex=h,a=c+o.tooltipRect.ttWidth/2+g,s=d+o.tooltipRect.ttHeight/2-u/2,o.tooltipPosition.moveXCrosshairs(c+g/2),a>n.globals.gridWidth/2&&(a=c-o.tooltipRect.ttWidth/2+g),o.w.config.tooltip.followCursor){var f=n.globals.dom.elWrap.getBoundingClientRect();a=n.globals.clientX-f.left-(a>n.globals.gridWidth/2?o.tooltipRect.ttWidth:0),s=n.globals.clientY-f.top-(s>n.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,o=t.y,n=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var g=m.findAncestor(s.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&n.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),n.globals.capturedSeriesIndex=e,n.globals.capturedDataPointIndex=i,r=h,o=c+n.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var u=l.getElGrid().getBoundingClientRect();o=l.e.clientY+n.globals.translateY-u.top}d<0&&(o=c),l.marker.enlargeCurrentPoint(i,s.paths,r,o)}return{x:r,y:o}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=this.ttCtx,n=o.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});e=d.i;var g=d.j;r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=g,r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)&&(c=r.globals.svgHeight-o.tooltipRect.ttHeight);var u=parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10);if(r.globals.isMultipleYAxis?r.config.yaxis[u]&&r.config.yaxis[u].reversed:r.config.yaxis[0].reversed,h+o.tooltipRect.ttWidth>r.globals.gridWidth?h-=o.tooltipRect.ttWidth:h<0&&(h=0),o.w.config.tooltip.followCursor){var f=o.getElGrid().getBoundingClientRect();c=o.e.clientY-f.top}null===o.tooltip&&(o.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(l+i/2):o.tooltipPosition.moveXCrosshairs(l)),!o.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(c=c+r.globals.translateY-o.tooltipRect.ttHeight/2,n.style.left=h+r.globals.translateX+"px",n.style.top=c+"px")}},{key:"getBarTooltipXY",value:function(t){var e=this,i=t.e,a=t.opt,s=this.w,r=null,o=this.ttCtx,n=0,l=0,h=0,c=0,d=0,g=i.target.classList;if(g.contains("apexcharts-bar-area")||g.contains("apexcharts-candlestick-area")||g.contains("apexcharts-boxPlot-area")||g.contains("apexcharts-rangebar-area")){var u=i.target,f=u.getBoundingClientRect(),p=a.elGrid.getBoundingClientRect(),x=f.height;d=f.height;var b=f.width,v=parseInt(u.getAttribute("cx"),10),m=parseInt(u.getAttribute("cy"),10);c=parseFloat(u.getAttribute("barWidth"));var y="touchmove"===i.type?i.touches[0].clientX:i.clientX;r=parseInt(u.getAttribute("j"),10),n=parseInt(u.parentNode.getAttribute("rel"),10)-1;var w=u.getAttribute("data-range-y1"),k=u.getAttribute("data-range-y2");s.globals.comboCharts&&(n=parseInt(u.parentNode.getAttribute("data:realIndex"),10));var A=function(t){return s.globals.isXNumeric?v-b/2:e.isVerticalGroupedRangeBar?v+b/2:v-o.dataPointsDividedWidth+b/2},S=function(){return m-o.dataPointsDividedHeight+x/2-o.tooltipRect.ttHeight/2};o.tooltipLabels.drawSeriesTexts({ttItems:a.ttItems,i:n,j:r,y1:w?parseInt(w,10):null,y2:k?parseInt(k,10):null,shared:!o.showOnIntersect&&s.config.tooltip.shared,e:i}),s.config.tooltip.followCursor?s.globals.isBarHorizontal?(l=y-p.left+15,h=S()):(l=A(),h=i.clientY-p.top-o.tooltipRect.ttHeight/2-15):s.globals.isBarHorizontal?((l=v)<o.xyRatios.baseLineInvertedY&&(l=v-o.tooltipRect.ttWidth),h=S()):(l=A(),h=m)}return{x:l,y:h,barHeight:d,barWidth:c,i:n,j:r}}}]),t}(),yt=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e}return s(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.isXAxisTooltipEnabled&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=0;i<t.config.yaxis.length;i++){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left"),r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))}}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/o}else if("barWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==n){var l=parseFloat(n.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals,o=r.seriesYAxisMap[t];if(a.yaxisTooltips[t]&&o.length>0){var n=r.yLabelFormatters[t],l=a.getElGrid().getBoundingClientRect(),h=o[0],c=0;i.yRatio.length>1&&(c=h);var d=(e-l.top)*i.yRatio[c],g=r.maxYArr[h]-r.minYArr[h],u=r.minYArr[h]+(g-d);s.config.yaxis[t].reversed&&(u=r.maxYArr[h]-(g-d)),a.tooltipPosition.moveYCrosshairs(e-l.top),a.yaxisTooltipText[t].innerHTML=n(u),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),wt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.tConfig=a.config.tooltip,this.tooltipUtil=new pt(this),this.tooltipLabels=new xt(this),this.tooltipPosition=new bt(this),this.marker=new vt(this),this.intersect=new mt(this),this.axesTooltip=new yt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!a.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return s(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),e.config.tooltip.cssClass&&i.classList.add(e.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new q(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this,i=this.w,a=[],s=this.getElTooltip(),r=function(r){var o=document.createElement("div");o.classList.add("apexcharts-tooltip-series-group","apexcharts-tooltip-series-group-".concat(r)),o.style.order=i.config.tooltip.inverseOrder?t-r:r+1;var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=i.globals.colors[r],o.appendChild(n);var l=document.createElement("div");l.classList.add("apexcharts-tooltip-text"),l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily,l.style.fontSize=e.tConfig.style.fontSize,["y","goals","z"].forEach((function(t){var e=document.createElement("div");e.classList.add("apexcharts-tooltip-".concat(t,"-group"));var i=document.createElement("span");i.classList.add("apexcharts-tooltip-text-".concat(t,"-label")),e.appendChild(i);var a=document.createElement("span");a.classList.add("apexcharts-tooltip-text-".concat(t,"-value")),e.appendChild(a),l.appendChild(e)})),o.appendChild(l),s.appendChild(o),a.push(o)},o=0;o<t;o++)r(o);return a}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var n,l=[],h=[],c={hoverArea:r,elGrid:o,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),n&&n.length))for(var d=0;d<n.length;d++)l.push(n[d].getAttribute("cy")),h.push(n[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(g,c)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,n=this.tConfig.fixed.position.toLowerCase();return n.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),n.indexOf("bottom")>-1&&(o=o+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=o+"px",{x:r,y:o,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.onSeriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"onSeriesHover",value:function(t,e){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(t,e):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout((function(){i.seriesHover(t,e)}),100-a))}},{key:"seriesHover",value:function(t,e){var i=this;this.lastHoverTime=Date.now();var a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,o=this.getElTooltip(e);if(o){if(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=s,i.tooltipUtil.hasBars()&&!r.globals.comboCharts&&!i.isBarShared)if(this.tConfig.onDatasetHover.highlightDataSeries)new V(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=s.elGrid.getBoundingClientRect(),n="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=n,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<o.top||l>o.top+o.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),g=[];r.config.chart.group&&(g=this.ctx.getSyncedCharts());var u=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(r.globals.collapsedSeries.length+r.globals.ancillaryCollapsedSeries.length===r.globals.series.length)return;null!==d&&d.classList.add("apexcharts-active");var f=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&f.length&&this.ycrosshairs.classList.add("apexcharts-active"),u&&!this.showOnIntersect||g.length>1)this.handleStickyTooltip(a,n,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var p=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=p.x,i=p.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var x=0;x<r.config.yaxis.length;x++)this.axesTooltip.drawYaxisTooltipText(x,l,this.xyRatios);r.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"),s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),o=this.getElTooltip(),n=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){s.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"),o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-n.left-a.ttWidth/2,h=s.globals.clientY-n.top-a.ttHeight-10;if(o.style.left=l+"px",o.style.top=h+"px",s.config.legend.tooltipHoverFormatter){var c=r-1,d=(0,s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"),{seriesIndex:c,dataPointIndex:c,w:s});this.legendLabels[c].innerHTML=d}}else"mouseout"!==e.type&&"touchend"!==e.type||(o.classList.remove("apexcharts-active"),s.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"),s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)})))}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),o=r.j,n=r.capturedSeries;s.globals.collapsedSeriesIndices.includes(n)&&(n=null);var l=a.elGrid.getBoundingClientRect();if(r.hoverX<0||r.hoverX>l.width)this.handleMouseOut(a);else if(null!==n)this.handleStickyCapturedSeries(t,n,a,o);else if(this.tooltipUtil.isXoverlap(o)||s.globals.isBarHorizontal){var h=s.globals.series.findIndex((function(t,e){return!s.globals.collapsedSeriesIndices.includes(e)}));this.create(t,this,h,o,a.ttItems)}}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;if(!this.tConfig.shared&&null===s.globals.series[e][a])return void this.handleMouseOut(i);if(void 0!==s.globals.series[e][a])this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1);else if(this.tooltipUtil.isXoverlap(a)){var r=s.globals.series.findIndex((function(t,e){return!s.globals.collapsedSeriesIndices.includes(e)}));this.create(t,this,r,a,i.ttItems)}}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new k(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(e.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"),t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r,o,n,l,h,c,d,u,f,p,x,b,v,m,y,w,A=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,S=this.w,C=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===A&&(A=this.tConfig.shared);var L=this.tooltipUtil.hasMarkers(i),P=this.tooltipUtil.getElBars();if(S.config.legend.tooltipHoverFormatter){var M=S.config.legend.tooltipHoverFormatter,I=Array.from(this.legendLabels);I.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var T=0;T<I.length;T++){var z=I[T],X=parseInt(z.getAttribute("i"),10),E=decodeURIComponent(z.getAttribute("data:default-text")),Y=M(E,{seriesIndex:A?X:i,dataPointIndex:a,w:S});if(A)z.innerHTML=S.globals.collapsedSeriesIndices.indexOf(X)<0?Y:E;else if(z.innerHTML=X===i?Y:E,i===X)break}}var R=g(g({ttItems:s,i:i,j:a},void 0!==(null===(r=S.globals.seriesRange)||void 0===r||null===(o=r[i])||void 0===o||null===(n=o[a])||void 0===n||null===(l=n.y[0])||void 0===l?void 0:l.y1)&&{y1:null===(h=S.globals.seriesRange)||void 0===h||null===(c=h[i])||void 0===c||null===(d=c[a])||void 0===d||null===(u=d.y[0])||void 0===u?void 0:u.y1}),void 0!==(null===(f=S.globals.seriesRange)||void 0===f||null===(p=f[i])||void 0===p||null===(x=p[a])||void 0===x||null===(b=x.y[0])||void 0===b?void 0:b.y2)&&{y2:null===(v=S.globals.seriesRange)||void 0===v||null===(m=v[i])||void 0===m||null===(y=m[a])||void 0===y||null===(w=y.y[0])||void 0===w?void 0:w.y2});if(A){if(C.tooltipLabels.drawSeriesTexts(g(g({},R),{},{shared:!this.showOnIntersect&&this.tConfig.shared})),L)S.globals.markers.largestSize>0?C.marker.enlargePoints(a):C.tooltipPosition.moveDynamicPointsOnHover(a);else if(this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(P),this.barSeriesHeight>0)){var F=new k(this.ctx),D=S.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a,i);for(var H=0;H<D.length;H++)F.pathMouseEnter(D[H])}}else C.tooltipLabels.drawSeriesTexts(g({shared:!1},R)),this.tooltipUtil.hasBars()&&C.tooltipPosition.moveStickyTooltipOverBars(a,i),L&&C.tooltipPosition.moveMarkers(i,a)}}]),t}(),kt=function(){function t(e){i(this,t),this.w=e.w,this.barCtx=e,this.totalFormatter=this.w.config.plotOptions.bar.dataLabels.total.formatter,this.totalFormatter||(this.totalFormatter=this.w.config.dataLabels.formatter)}return s(t,[{key:"handleBarDataLabels",value:function(t){var e,i,a=t.x,s=t.y,r=t.y1,o=t.y2,n=t.i,l=t.j,h=t.realIndex,c=t.columnGroupIndex,d=t.series,u=t.barHeight,f=t.barWidth,p=t.barXPosition,x=t.barYPosition,b=t.visibleSeries,v=t.renderedPath,m=this.w,y=new k(this.barCtx.ctx),w=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[h]:this.barCtx.strokeWidth;m.globals.isXNumeric&&!m.globals.isBarHorizontal?(e=a+parseFloat(f*(b+1)),i=s+parseFloat(u*(b+1))-w):(e=a+parseFloat(f*b),i=s+parseFloat(u*b));var A,S=null,C=a,L=s,P={},M=m.config.dataLabels,I=this.barCtx.barOptions.dataLabels,T=this.barCtx.barOptions.dataLabels.total;void 0!==x&&this.barCtx.isRangeBar&&(i=x,L=x),void 0!==p&&this.barCtx.isVerticalGroupedRangeBar&&(e=p,C=p);var z=M.offsetX,X=M.offsetY,E={width:0,height:0};if(m.config.dataLabels.enabled){var Y=m.globals.series[n][l];E=y.getTextRects(m.config.dataLabels.formatter?m.config.dataLabels.formatter(Y,g(g({},m),{},{seriesIndex:n,dataPointIndex:l,w:m})):m.globals.yLabelFormatters[0](Y),parseFloat(M.style.fontSize))}var R={x:a,y:s,i:n,j:l,realIndex:h,columnGroupIndex:c,renderedPath:v,bcx:e,bcy:i,barHeight:u,barWidth:f,textRects:E,strokeWidth:w,dataLabelsX:C,dataLabelsY:L,dataLabelsConfig:M,barDataLabelsConfig:I,barTotalDataLabelsConfig:T,offX:z,offY:X};return P=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(R):this.calculateColumnsDataLabelsPosition(R),v.attr({cy:P.bcy,cx:P.bcx,j:l,val:m.globals.series[n][l],barHeight:u,barWidth:f}),A=this.drawCalculatedDataLabels({x:P.dataLabelsX,y:P.dataLabelsY,val:this.barCtx.isRangeBar?[r,o]:"100%"===m.config.chart.stackType?d[h][l]:m.globals.series[h][l],i:h,j:l,barWidth:f,barHeight:u,textRects:E,dataLabelsConfig:M}),m.config.chart.stacked&&T.enabled&&(S=this.drawTotalDataLabels({x:P.totalDataLabelsX,y:P.totalDataLabelsY,barWidth:f,barHeight:u,realIndex:h,textAnchor:P.totalDataLabelsAnchor,val:this.getStackedTotalDataLabel({realIndex:h,j:l}),dataLabelsConfig:M,barTotalDataLabelsConfig:T})),{dataLabels:A,totalDataLabels:S}}},{key:"getStackedTotalDataLabel",value:function(t){var e=t.realIndex,i=t.j,a=this.w,s=this.barCtx.stackedSeriesTotals[i];return this.totalFormatter&&(s=this.totalFormatter(s,g(g({},a),{},{seriesIndex:e,dataPointIndex:i,w:a}))),s}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e=this.w,i=t.i,a=t.j,s=t.realIndex;t.columnGroupIndex;var r,o,n=t.y,l=t.bcx,h=t.barWidth,c=t.barHeight,d=t.textRects,g=t.dataLabelsX,u=t.dataLabelsY,f=t.dataLabelsConfig,p=t.barDataLabelsConfig,x=t.barTotalDataLabelsConfig,b=t.strokeWidth,v=t.offX,m=t.offY,y=l;c=Math.abs(c);var w="vertical"===e.config.plotOptions.bar.dataLabels.orientation,A=this.barCtx.barHelpers.getZeroValueEncounters({i:i,j:a}).zeroEncounters;l-=b/2;var S=e.globals.gridWidth/e.globals.dataPoints;if(this.barCtx.isVerticalGroupedRangeBar?g+=h/2:(g=e.globals.isXNumeric?l-h/2+v:l-S+h/2+v,A>0&&e.config.plotOptions.bar.hideZeroBarsWhenGrouped&&(g-=h*A)),w){g=g+d.height/2-b/2-2}var C=e.globals.series[i][a]<0,L=n;switch(this.barCtx.isReversed&&(L=n+(C?c:-c)),p.position){case"center":u=w?C?L-c/2+m:L+c/2-m:C?L-c/2+d.height/2+m:L+c/2+d.height/2-m;break;case"bottom":u=w?C?L-c+m:L+c-m:C?L-c+d.height+b+m:L+c-d.height/2+b-m;break;case"top":u=w?C?L+m:L-m:C?L-d.height/2-m:L+d.height+m}if(this.barCtx.lastActiveBarSerieIndex===s&&x.enabled){var P=new k(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:s,j:a}),f.fontSize);r=C?L-P.height/2-m-x.offsetY+18:L+P.height+m+x.offsetY-18;var M=S;o=y+(e.globals.isXNumeric?-h*e.globals.barGroups.length/2:e.globals.barGroups.length*h/2-(e.globals.barGroups.length-1)*h-M)+x.offsetX}return e.config.chart.stacked||(u<0?u=0+b:u+d.height/3>e.globals.gridHeight&&(u=e.globals.gridHeight-b)),{bcx:l,bcy:n,dataLabelsX:g,dataLabelsY:u,totalDataLabelsX:o,totalDataLabelsY:r,totalDataLabelsAnchor:"middle"}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.realIndex,o=t.bcy,n=t.barHeight,l=t.barWidth,h=t.textRects,c=t.dataLabelsX,d=t.strokeWidth,g=t.dataLabelsConfig,u=t.barDataLabelsConfig,f=t.barTotalDataLabelsConfig,p=t.offX,x=t.offY,b=e.globals.gridHeight/e.globals.dataPoints;l=Math.abs(l);var v,m,y=o-(this.barCtx.isRangeBar?0:b)+n/2+h.height/2+x-3,w="start",A=e.globals.series[a][s]<0,S=i;switch(this.barCtx.isReversed&&(S=i+(A?-l:l),w=A?"start":"end"),u.position){case"center":c=A?S+l/2-p:Math.max(h.width/2,S-l/2)+p;break;case"bottom":c=A?S+l-d-p:S-l+d+p;break;case"top":c=A?S-d-p:S-d+p}if(this.barCtx.lastActiveBarSerieIndex===r&&f.enabled){var C=new k(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:r,j:s}),g.fontSize);A?(v=S-d-p-f.offsetX,w="end"):v=S+p+f.offsetX+(this.barCtx.isReversed?-(l+d):d),m=y-h.height/2+C.height/2+f.offsetY+d}return e.config.chart.stacked||("start"===g.textAnchor?c-h.width<0?c=A?h.width+d:d:c+h.width>e.globals.gridWidth&&(c=A?e.globals.gridWidth-d:e.globals.gridWidth-h.width-d):"middle"===g.textAnchor?c-h.width/2<0?c=h.width/2+d:c+h.width/2>e.globals.gridWidth&&(c=e.globals.gridWidth-h.width/2-d):"end"===g.textAnchor&&(c<1?c=h.width+d:c+1>e.globals.gridWidth&&(c=e.globals.gridWidth-h.width-d))),{bcx:i,bcy:o,dataLabelsX:c,dataLabelsY:y,totalDataLabelsX:v,totalDataLabelsY:m,totalDataLabelsAnchor:w}}},{key:"drawCalculatedDataLabels",value:function(t){var e=t.x,i=t.y,a=t.val,s=t.i,r=t.j,o=t.textRects,n=t.barHeight,l=t.barWidth,h=t.dataLabelsConfig,c=this.w,d="rotate(0)";"vertical"===c.config.plotOptions.bar.dataLabels.orientation&&(d="rotate(-90, ".concat(e,", ").concat(i,")"));var u=new G(this.barCtx.ctx),f=new k(this.barCtx.ctx),p=h.formatter,x=null,b=c.globals.collapsedSeriesIndices.indexOf(s)>-1;if(h.enabled&&!b){x=f.group({class:"apexcharts-data-labels",transform:d});var v="";void 0!==a&&(v=p(a,g(g({},c),{},{seriesIndex:s,dataPointIndex:r,w:c}))),!a&&c.config.plotOptions.bar.hideZeroBarsWhenGrouped&&(v="");var m=c.globals.series[s][r]<0,y=c.config.plotOptions.bar.dataLabels.position;if("vertical"===c.config.plotOptions.bar.dataLabels.orientation&&("top"===y&&(h.textAnchor=m?"end":"start"),"center"===y&&(h.textAnchor="middle"),"bottom"===y&&(h.textAnchor=m?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)l<f.getTextRects(v,parseFloat(h.style.fontSize)).width&&(v="");c.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?o.width/1.6>Math.abs(l)&&(v=""):o.height/1.6>Math.abs(n)&&(v=""));var w=g({},h);this.barCtx.isHorizontal&&a<0&&("start"===h.textAnchor?w.textAnchor="end":"end"===h.textAnchor&&(w.textAnchor="start")),u.plotDataLabelsText({x:e,y:i,text:v,i:s,j:r,parent:x,dataLabelsConfig:w,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}},{key:"drawTotalDataLabels",value:function(t){var e=t.x,i=t.y,a=t.val,s=t.realIndex,r=t.textAnchor,o=t.barTotalDataLabelsConfig;this.w;var n,l=new k(this.barCtx.ctx);return o.enabled&&void 0!==e&&void 0!==i&&this.barCtx.lastActiveBarSerieIndex===s&&(n=l.drawText({x:e,y:i,foreColor:o.style.color,text:a,textAnchor:r,fontFamily:o.style.fontFamily,fontSize:o.style.fontSize,fontWeight:o.style.fontWeight})),n}}]),t}(),At=function(){function t(e){i(this,t),this.w=e.w,this.barCtx=e}return s(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;this.arrBorderRadius=this.createBorderRadiusArr(e.globals.series),0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],e.globals.comboCharts||this.checkZeroSeries({series:t})}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,o,n,l=this.w,h=l.globals.dataPoints;this.barCtx.isRangeBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,-1===String(this.barCtx.barOptions.barHeight).indexOf("%")&&(s=parseInt(this.barCtx.barOptions.barHeight,10)),n=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),this.barCtx.isFunnel&&(n=l.globals.gridWidth/2),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/c*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/c*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}-1===String(this.barCtx.barOptions.columnWidth).indexOf("%")&&(r=parseInt(this.barCtx.barOptions.columnWidth,10)),o=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.translationsIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.translationsIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return l.globals.barHeight=s,l.globals.barWidth=r,{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:o,zeroW:n}}},{key:"initializeStackedPrevVars",value:function(t){t.w.globals.seriesGroups.forEach((function(e){t[e]||(t[e]={}),t[e].prevY=[],t[e].prevX=[],t[e].prevYF=[],t[e].prevXF=[],t[e].prevYVal=[],t[e].prevXVal=[]}))}},{key:"initializeStackedXYVars",value:function(t){t.w.globals.seriesGroups.forEach((function(e){t[e]||(t[e]={}),t[e].xArrj=[],t[e].xArrjF=[],t[e].xArrjVal=[],t[e].yArrj=[],t[e].yArrjF=[],t[e].yArrjVal=[]}))}},{key:"getPathFillColor",value:function(t,e,i,a){var s,r,o,n,l,h=this.w,c=this.barCtx.ctx.fill,d=null,g=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(d=a.color)}));return null!==(s=h.config.series[e].data[i])&&void 0!==s&&s.fillColor&&(d=h.config.series[e].data[i].fillColor),c.fillPath({seriesNumber:this.barCtx.barOptions.distributed?g:a,dataPointIndex:i,color:d,value:t[e][i],fillConfig:null===(r=h.config.series[e].data[i])||void 0===r?void 0:r.fill,fillType:null!==(o=h.config.series[e].data[i])&&void 0!==o&&null!==(n=o.fill)&&void 0!==n&&n.type?null===(l=h.config.series[e].data[i])||void 0===l?void 0:l.fill.type:Array.isArray(h.config.fill.type)?h.config.fill.type[a]:h.config.fill.type})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return this.barCtx.series[t][e]?this.barCtx.isNullValue=!1:this.barCtx.isNullValue=!0,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"createBorderRadiusArr",value:function(t){var e=this.w,i=!this.w.config.chart.stacked||"last"!==e.config.plotOptions.bar.borderRadiusWhenStacked||e.config.plotOptions.bar.borderRadius<=0,a=t.length,s=t[0].length,o=Array.from({length:a},(function(){return Array(s).fill(i?"top":"none")}));if(i)return o;for(var n=0;n<s;n++){for(var l=[],h=[],c=0,d=0;d<a;d++){var g=t[d][n];g>0?(l.push(d),c++):g<0&&(h.push(d),c++)}if(l.length>0&&0===h.length)if(1===l.length)o[l[0]][n]="both";else{var u,f=l[0],p=l[l.length-1],x=r(l);try{for(x.s();!(u=x.n()).done;){var b=u.value;o[b][n]=b===f?"bottom":b===p?"top":"none"}}catch(t){x.e(t)}finally{x.f()}}else if(h.length>0&&0===l.length)if(1===h.length)o[h[0]][n]="both";else{var v,m=h[0],y=h[h.length-1],w=r(h);try{for(w.s();!(v=w.n()).done;){var k=v.value;o[k][n]=k===m?"bottom":k===y?"top":"none"}}catch(t){w.e(t)}finally{w.f()}}else if(l.length>0&&h.length>0){var A,S=l[l.length-1],C=r(l);try{for(C.s();!(A=C.n()).done;){var L=A.value;o[L][n]=L===S?"top":"none"}}catch(t){C.e(t)}finally{C.f()}var P,M=h[h.length-1],I=r(h);try{for(I.s();!(P=I.n()).done;){var T=P.value;o[T][n]=T===M?"bottom":"none"}}catch(t){I.e(t)}finally{I.f()}}else if(1===c){o[l[0]||h[0]][n]="both"}}return o}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,o=t.y2,n=t.elSeries,l=this.w,h=new k(this.barCtx.ctx),c=new V(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e%=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],g=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==o?o:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);n.add(g),g.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e,i=t.barWidth,a=t.barXPosition,s=t.y1,r=t.y2,o=t.strokeWidth,n=t.isReversed,l=t.series,h=t.seriesGroup,c=t.realIndex,d=t.i,g=t.j,u=t.w,f=new k(this.barCtx.ctx);(o=Array.isArray(o)?o[c]:o)||(o=0);var p=i,x=a;null!==(e=u.config.series[c].data[g])&&void 0!==e&&e.columnWidthOffset&&(x=a-u.config.series[c].data[g].columnWidthOffset/2,p=i+u.config.series[c].data[g].columnWidthOffset);var b=o/2,v=x+b,m=x+p-b,y=(l[d][g]>=0?1:-1)*(n?-1:1);s+=.001-b*y,r+=.001+b*y;var w=f.move(v,s),A=f.move(v,s),S=f.line(m,s);if(u.globals.previousPaths.length>0&&(A=this.barCtx.getPreviousPath(c,g,!1)),w=w+f.line(v,r)+f.line(m,r)+S+("around"===u.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][g]?" Z":" z"),A=A+f.line(v,s)+S+S+S+S+S+f.line(v,s)+("around"===u.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][g]?" Z":" z"),"none"!==this.arrBorderRadius[c][g]&&(w=f.roundPathCorners(w,u.config.plotOptions.bar.borderRadius)),u.config.chart.stacked){var C=this.barCtx;(C=this.barCtx[h]).yArrj.push(r-b*y),C.yArrjF.push(Math.abs(s-r+o*y)),C.yArrjVal.push(this.barCtx.series[d][g])}return{pathTo:w,pathFrom:A}}},{key:"getBarpaths",value:function(t){var e,i=t.barYPosition,a=t.barHeight,s=t.x1,r=t.x2,o=t.strokeWidth,n=t.isReversed,l=t.series,h=t.seriesGroup,c=t.realIndex,d=t.i,g=t.j,u=t.w,f=new k(this.barCtx.ctx);(o=Array.isArray(o)?o[c]:o)||(o=0);var p=i,x=a;null!==(e=u.config.series[c].data[g])&&void 0!==e&&e.barHeightOffset&&(p=i-u.config.series[c].data[g].barHeightOffset/2,x=a+u.config.series[c].data[g].barHeightOffset);var b=o/2,v=p+b,m=p+x-b,y=(l[d][g]>=0?1:-1)*(n?-1:1);s+=.001+b*y,r+=.001-b*y;var w=f.move(s,v),A=f.move(s,v);u.globals.previousPaths.length>0&&(A=this.barCtx.getPreviousPath(c,g,!1));var S=f.line(s,m);if(w=w+f.line(r,v)+f.line(r,m)+S+("around"===u.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][g]?" Z":" z"),A=A+f.line(s,v)+S+S+S+S+S+f.line(s,v)+("around"===u.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][g]?" Z":" z"),"none"!==this.arrBorderRadius[c][g]&&(w=f.roundPathCorners(w,u.config.plotOptions.bar.borderRadius)),u.config.chart.stacked){var C=this.barCtx;(C=this.barCtx[h]).xArrj.push(r+b*y),C.xArrjF.push(Math.abs(s-r-o*y)),C.xArrjVal.push(this.barCtx.series[d][g])}return{pathTo:w,pathFrom:A}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,a=0;a<e.length;a++){for(var s=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)s+=e[a][r];0===s&&this.barCtx.zeroSerieses.push(a)}}},{key:"getXForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?e:null;return null!=t&&(i=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio:0)),i}},{key:"getYForValue",value:function(t,e,i){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]?e:null;return null!=t&&(a=e-t/this.barCtx.yRatio[i]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[i]:0)),a}},{key:"getGoalValues",value:function(t,e,i,a,s,r){var o=this,l=this.w,h=[],c=function(a,s){var l;h.push((n(l={},t,"x"===t?o.getXForValue(a,e,!1):o.getYForValue(a,i,r,!1)),n(l,"attrs",s),l))};if(l.globals.seriesGoals[a]&&l.globals.seriesGoals[a][s]&&Array.isArray(l.globals.seriesGoals[a][s])&&l.globals.seriesGoals[a][s].forEach((function(t){c(t.value,t)})),this.barCtx.barOptions.isDumbbell&&l.globals.seriesRange.length){var d=this.barCtx.barOptions.dumbbellColors?this.barCtx.barOptions.dumbbellColors:l.globals.colors,u={strokeHeight:"x"===t?0:l.globals.markers.size[a],strokeWidth:"x"===t?l.globals.markers.size[a]:0,strokeDashArray:0,strokeLineCap:"round",strokeColor:Array.isArray(d[a])?d[a][0]:d[a]};c(l.globals.seriesRangeStart[a][s],u),c(l.globals.seriesRangeEnd[a][s],g(g({},u),{},{strokeColor:Array.isArray(d[a])?d[a][1]:d[a]}))}return h}},{key:"drawGoalLine",value:function(t){var e=t.barXPosition,i=t.barYPosition,a=t.goalX,s=t.goalY,r=t.barWidth,o=t.barHeight,n=new k(this.barCtx.ctx),l=n.group({className:"apexcharts-bar-goals-groups"});l.node.classList.add("apexcharts-element-hidden"),this.barCtx.w.globals.delayedElements.push({el:l.node}),l.attr("clip-path","url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid,")"));var h=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t){if(t.x>=-1&&t.x<=n.w.globals.gridWidth+1){var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight:o/2,a=i+e+o/2;h=n.drawLine(t.x,a-2*e,t.x,a,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeWidth?t.attrs.strokeWidth:2,t.attrs.strokeLineCap),l.add(h)}})):Array.isArray(s)&&s.forEach((function(t){if(t.y>=-1&&t.y<=n.w.globals.gridHeight+1){var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth:r/2,a=e+i+r/2;h=n.drawLine(a-2*i,t.y,a,t.y,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeHeight?t.attrs.strokeHeight:2,t.attrs.strokeLineCap),l.add(h)}})),l}},{key:"drawBarShadow",value:function(t){var e=t.prevPaths,i=t.currPaths,a=t.color,s=this.w,r=e.x,o=e.x1,n=e.barYPosition,l=i.x,h=i.x1,c=i.barYPosition,d=n+i.barHeight,g=new k(this.barCtx.ctx),u=new m,f=g.move(o,d)+g.line(r,d)+g.line(l,c)+g.line(h,c)+g.line(o,d)+("around"===s.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[realIndex][j]?" Z":" z");return g.drawPath({d:f,fill:u.shadeColor(.5,m.rgb2hex(a)),stroke:"none",strokeWidth:0,fillOpacity:1,classes:"apexcharts-bar-shadows"})}},{key:"getZeroValueEncounters",value:function(t){var e,i=t.i,a=t.j,s=this.w,r=0,o=0;return(s.config.plotOptions.bar.horizontal?s.globals.series.map((function(t,e){return e})):(null===(e=s.globals.columnSeries)||void 0===e?void 0:e.i.map((function(t){return t})))||[]).forEach((function(t){var e=s.globals.seriesPercent[t][a];e&&r++,t<i&&0===e&&o++})),{nonZeroColumns:r,zeroEncounters:o}}},{key:"getGroupIndex",value:function(t){var e=this.w,i=e.globals.seriesGroups.findIndex((function(i){return i.indexOf(e.globals.seriesNames[t])>-1})),a=this.barCtx.columnGroupIndices,s=a.indexOf(i);return s<0&&(a.push(i),s=a.length-1),{groupIndex:i,columnGroupIndex:s}}}]),t}(),St=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isRangeBar=s.globals.seriesRange.length&&this.isHorizontal,this.isVerticalGroupedRangeBar=!s.globals.isBarHorizontal&&s.globals.seriesRange.length&&s.config.plotOptions.bar.rangeBarGroupRows,this.isFunnel=this.barOptions.isFunnel,this.xyRatios=a,null!==this.xyRatios&&(this.xRatio=a.xRatio,this.yRatio=a.yRatio,this.invertedXRatio=a.invertedXRatio,this.invertedYRatio=a.invertedYRatio,this.baseLineY=a.baseLineY,this.baseLineInvertedY=a.baseLineInvertedY),this.yaxisIndex=0,this.translationsIndex=0,this.seriesLen=0,this.pathArr=[];var r=new V(this.ctx);this.lastActiveBarSerieIndex=r.getActiveConfigSeriesIndex("desc",["bar","column"]),this.columnGroupIndices=[];var o=r.getBarSeriesIndices(),n=new A(this.ctx);this.stackedSeriesTotals=n.getStackedSeriesTotals(this.w.config.series.map((function(t,e){return-1===o.indexOf(e)?e:-1})).filter((function(t){return-1!==t}))),this.barHelpers=new At(this)}return s(t,[{key:"draw",value:function(t,e){var i=this.w,a=new k(this.ctx),s=new A(this.ctx,i);t=s.getLogSeries(t),this.series=t,this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var r=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");for(var o=0,n=0;o<t.length;o++,n++){var l,h,c,d,u=void 0,f=void 0,p=[],x=[],b=i.globals.comboCharts?e[o]:o,v=this.barHelpers.getGroupIndex(b).columnGroupIndex,y=a.group({class:"apexcharts-series",rel:o+1,seriesName:m.escapeString(i.globals.seriesNames[b]),"data:realIndex":b});this.ctx.series.addCollapsedClassToSeries(y,b),t[o].length>0&&(this.visibleI=this.visibleI+1);var w=0,S=0;this.yRatio.length>1&&(this.yaxisIndex=i.globals.seriesYAxisReverseMap[b],this.translationsIndex=b);var C=this.translationsIndex;this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var L=this.barHelpers.initialPositions();f=L.y,w=L.barHeight,h=L.yDivision,d=L.zeroW,u=L.x,S=L.barWidth,l=L.xDivision,c=L.zeroH,this.horizontal||x.push(u+S/2);var P=a.group({class:"apexcharts-datalabels","data:realIndex":b});i.globals.delayedElements.push({el:P.node}),P.node.classList.add("apexcharts-element-hidden");var M=a.group({class:"apexcharts-bar-goals-markers"}),I=a.group({class:"apexcharts-bar-shadows"});i.globals.delayedElements.push({el:I.node}),I.node.classList.add("apexcharts-element-hidden");for(var T=0;T<t[o].length;T++){var z=this.barHelpers.getStrokeWidth(o,T,b),X=null,E={indexes:{i:o,j:T,realIndex:b,translationsIndex:C,bc:n},x:u,y:f,strokeWidth:z,elSeries:y};this.isHorizontal?(X=this.drawBarPaths(g(g({},E),{},{barHeight:w,zeroW:d,yDivision:h})),S=this.series[o][T]/this.invertedYRatio):(X=this.drawColumnPaths(g(g({},E),{},{xDivision:l,barWidth:S,zeroH:c})),w=this.series[o][T]/this.yRatio[C]);var Y=this.barHelpers.getPathFillColor(t,o,T,b);if(this.isFunnel&&this.barOptions.isFunnel3d&&this.pathArr.length&&T>0){var R=this.barHelpers.drawBarShadow({color:"string"==typeof Y&&-1===(null==Y?void 0:Y.indexOf("url"))?Y:m.hexToRgba(i.globals.colors[o]),prevPaths:this.pathArr[this.pathArr.length-1],currPaths:X});R&&I.add(R)}this.pathArr.push(X);var F=this.barHelpers.drawGoalLine({barXPosition:X.barXPosition,barYPosition:X.barYPosition,goalX:X.goalX,goalY:X.goalY,barHeight:w,barWidth:S});F&&M.add(F),f=X.y,u=X.x,T>0&&x.push(u+S/2),p.push(f),this.renderSeries({realIndex:b,pathFill:Y,j:T,i:o,columnGroupIndex:v,pathFrom:X.pathFrom,pathTo:X.pathTo,strokeWidth:z,elSeries:y,x:u,y:f,series:t,barHeight:Math.abs(X.barHeight?X.barHeight:w),barWidth:Math.abs(X.barWidth?X.barWidth:S),elDataLabelsWrap:P,elGoalsMarkers:M,elBarShadows:I,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[b]=x,i.globals.seriesYvalues[b]=p,r.add(y)}return r}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,o=t.columnGroupIndex,n=t.pathFrom,l=t.pathTo,h=t.strokeWidth,c=t.elSeries,d=t.x,g=t.y,u=t.y1,f=t.y2,p=t.series,x=t.barHeight,b=t.barWidth,v=t.barXPosition,m=t.barYPosition,y=t.elDataLabelsWrap,A=t.elGoalsMarkers,S=t.elBarShadows,C=t.visibleSeries,L=t.type,P=t.classes,M=this.w,I=new k(this.ctx);if(!a){var T="function"==typeof M.globals.stroke.colors[e]?function(t){var e,i=M.config.stroke.colors;return Array.isArray(i)&&i.length>0&&((e=i[t])||(e=""),"function"==typeof e)?e({value:M.globals.series[t][s],dataPointIndex:s,w:M}):e}(e):M.globals.stroke.colors[e];a=this.barOptions.distributed?M.globals.stroke.colors[s]:T}M.config.series[r].data[s]&&M.config.series[r].data[s].strokeColor&&(a=M.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var z=s/M.config.chart.animations.animateGradually.delay*(M.config.chart.animations.speed/M.globals.dataPoints)/2.4,X=I.renderPaths({i:r,j:s,realIndex:e,pathFrom:n,pathTo:l,stroke:a,strokeWidth:h,strokeLineCap:M.config.stroke.lineCap,fill:i,animationDelay:z,initialSpeed:M.config.chart.animations.speed,dataChangeSpeed:M.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(L,"-area ").concat(P),chartType:L});X.attr("clip-path","url(#gridRectBarMask".concat(M.globals.cuid,")"));var E=M.config.forecastDataPoints;E.count>0&&s>=M.globals.dataPoints-E.count&&(X.node.setAttribute("stroke-dasharray",E.dashArray),X.node.setAttribute("stroke-width",E.strokeWidth),X.node.setAttribute("fill-opacity",E.fillOpacity)),void 0!==u&&void 0!==f&&(X.attr("data-range-y1",u),X.attr("data-range-y2",f)),new w(this.ctx).setSelectionFilter(X,e,s),c.add(X);var Y=new kt(this).handleBarDataLabels({x:d,y:g,y1:u,y2:f,i:r,j:s,series:p,realIndex:e,columnGroupIndex:o,barHeight:x,barWidth:b,barXPosition:v,barYPosition:m,renderedPath:X,visibleSeries:C});return null!==Y.dataLabels&&y.add(Y.dataLabels),Y.totalDataLabels&&y.add(Y.totalDataLabels),c.add(y),A&&c.add(A),S&&c.add(S),c}},{key:"drawBarPaths",value:function(t){var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,o=t.x,n=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=i.i,g=i.j;if(c.globals.isXNumeric)e=(n=(c.globals.seriesX[d][g]-c.globals.minX)/this.invertedXRatio-a)+a*this.visibleI;else if(c.config.plotOptions.bar.hideZeroBarsWhenGrouped){var u=0,f=0;c.globals.seriesPercent.forEach((function(t,e){t[g]&&u++,e<d&&0===t[g]&&f++})),u>0&&(a=this.seriesLen*a/u),e=n+a*this.visibleI,e-=a*f}else e=n+a*this.visibleI;this.isFunnel&&(r-=(this.barHelpers.getXForValue(this.series[d][g],r)-r)/2),o=this.barHelpers.getXForValue(this.series[d][g],r);var p=this.barHelpers.getBarpaths({barYPosition:e,barHeight:a,x1:r,x2:o,strokeWidth:s,isReversed:this.isReversed,series:this.series,realIndex:i.realIndex,i:d,j:g,w:c});return c.globals.isXNumeric||(n+=l),this.barHelpers.barBackground({j:g,i:d,y1:e-a*this.visibleI,y2:a*this.seriesLen,elSeries:h}),{pathTo:p.pathTo,pathFrom:p.pathFrom,x1:r,x:o,y:n,goalX:this.barHelpers.getGoalValues("x",r,null,d,g),barYPosition:e,barHeight:a}}},{key:"drawColumnPaths",value:function(t){var e,i=t.indexes,a=t.x,s=t.y,r=t.xDivision,o=t.barWidth,n=t.zeroH,l=t.strokeWidth,h=t.elSeries,c=this.w,d=i.realIndex,g=i.translationsIndex,u=i.i,f=i.j,p=i.bc;if(c.globals.isXNumeric){var x=this.getBarXForNumericXAxis({x:a,j:f,realIndex:d,barWidth:o});a=x.x,e=x.barXPosition}else if(c.config.plotOptions.bar.hideZeroBarsWhenGrouped){var b=this.barHelpers.getZeroValueEncounters({i:u,j:f}),v=b.nonZeroColumns,m=b.zeroEncounters;v>0&&(o=this.seriesLen*o/v),e=a+o*this.visibleI,e-=o*m}else e=a+o*this.visibleI;s=this.barHelpers.getYForValue(this.series[u][f],n,g);var y=this.barHelpers.getColumnPaths({barXPosition:e,barWidth:o,y1:n,y2:s,strokeWidth:l,isReversed:this.isReversed,series:this.series,realIndex:d,i:u,j:f,w:c});return c.globals.isXNumeric||(a+=r),this.barHelpers.barBackground({bc:p,j:f,i:u,x1:e-l/2-o*this.visibleI,x2:o*this.seriesLen+l/2,elSeries:h}),{pathTo:y.pathTo,pathFrom:y.pathFrom,x:a,y:s,goalY:this.barHelpers.getGoalValues("y",null,n,u,f,g),barXPosition:e,barWidth:o}}},{key:"getBarXForNumericXAxis",value:function(t){var e=t.x,i=t.barWidth,a=t.realIndex,s=t.j,r=this.w,o=a;return r.globals.seriesX[a].length||(o=r.globals.maxValsInArrayIndex),r.globals.seriesX[o][s]&&(e=(r.globals.seriesX[o][s]-r.globals.minX)/this.xRatio-i*this.seriesLen/2),{barXPosition:e+i*this.visibleI,x:e}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),Ct=function(t){h(a,t);var e=o(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e){var i=this,a=this.w;this.graphics=new k(this.ctx),this.bar=new St(this.ctx,this.xyRatios);var s=new A(this.ctx,a);t=s.getLogSeries(t),this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===a.config.chart.stackType&&(t=a.globals.comboCharts?e.map((function(t){return a.globals.seriesPercent[t]})):a.globals.seriesPercent.slice()),this.series=t,this.barHelpers.initializeStackedPrevVars(this);for(var r=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),o=0,n=0,l=function(s,l){var h=void 0,c=void 0,d=void 0,u=void 0,f=a.globals.comboCharts?e[s]:s,p=i.barHelpers.getGroupIndex(f),x=p.groupIndex,b=p.columnGroupIndex;i.groupCtx=i[a.globals.seriesGroups[x]];var v=[],y=[],w=0;i.yRatio.length>1&&(i.yaxisIndex=a.globals.seriesYAxisReverseMap[f][0],w=f),i.isReversed=a.config.yaxis[i.yaxisIndex]&&a.config.yaxis[i.yaxisIndex].reversed;var k=i.graphics.group({class:"apexcharts-series",seriesName:m.escapeString(a.globals.seriesNames[f]),rel:s+1,"data:realIndex":f});i.ctx.series.addCollapsedClassToSeries(k,f);var A=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":f}),S=i.graphics.group({class:"apexcharts-bar-goals-markers"}),C=0,L=0,P=i.initialPositions(o,n,h,c,d,u,w);n=P.y,C=P.barHeight,c=P.yDivision,u=P.zeroW,o=P.x,L=P.barWidth,h=P.xDivision,d=P.zeroH,a.globals.barHeight=C,a.globals.barWidth=L,i.barHelpers.initializeStackedXYVars(i),1===i.groupCtx.prevY.length&&i.groupCtx.prevY[0].every((function(t){return isNaN(t)}))&&(i.groupCtx.prevY[0]=i.groupCtx.prevY[0].map((function(){return d})),i.groupCtx.prevYF[0]=i.groupCtx.prevYF[0].map((function(){return 0})));for(var M=0;M<a.globals.dataPoints;M++){var I=i.barHelpers.getStrokeWidth(s,M,f),T={indexes:{i:s,j:M,realIndex:f,translationsIndex:w,bc:l},strokeWidth:I,x:o,y:n,elSeries:k,columnGroupIndex:b,seriesGroup:a.globals.seriesGroups[x]},z=null;i.isHorizontal?(z=i.drawStackedBarPaths(g(g({},T),{},{zeroW:u,barHeight:C,yDivision:c})),L=i.series[s][M]/i.invertedYRatio):(z=i.drawStackedColumnPaths(g(g({},T),{},{xDivision:h,barWidth:L,zeroH:d})),C=i.series[s][M]/i.yRatio[w]);var X=i.barHelpers.drawGoalLine({barXPosition:z.barXPosition,barYPosition:z.barYPosition,goalX:z.goalX,goalY:z.goalY,barHeight:C,barWidth:L});X&&S.add(X),n=z.y,o=z.x,v.push(o),y.push(n);var E=i.barHelpers.getPathFillColor(t,s,M,f),Y="";a.globals.isBarHorizontal?"bottom"===i.barHelpers.arrBorderRadius[f][M]&&a.globals.series[f][M]>0&&(Y="apexcharts-flip-x"):"bottom"===i.barHelpers.arrBorderRadius[f][M]&&a.globals.series[f][M]>0&&(Y="apexcharts-flip-y"),k=i.renderSeries({realIndex:f,pathFill:E,j:M,i:s,columnGroupIndex:b,pathFrom:z.pathFrom,pathTo:z.pathTo,strokeWidth:I,elSeries:k,x:o,y:n,series:t,barHeight:C,barWidth:L,elDataLabelsWrap:A,elGoalsMarkers:S,type:"bar",visibleSeries:b,classes:Y})}a.globals.seriesXvalues[f]=v,a.globals.seriesYvalues[f]=y,i.groupCtx.prevY.push(i.groupCtx.yArrj),i.groupCtx.prevYF.push(i.groupCtx.yArrjF),i.groupCtx.prevYVal.push(i.groupCtx.yArrjVal),i.groupCtx.prevX.push(i.groupCtx.xArrj),i.groupCtx.prevXF.push(i.groupCtx.xArrjF),i.groupCtx.prevXVal.push(i.groupCtx.xArrjVal),r.add(k)},h=0,c=0;h<t.length;h++,c++)l(h,c);return r}},{key:"initialPositions",value:function(t,e,i,a,s,r,o){var n,l,h=this.w;if(this.isHorizontal){a=h.globals.gridHeight/h.globals.dataPoints;var c=h.config.plotOptions.bar.barHeight;n=-1===String(c).indexOf("%")?parseInt(c,10):a*parseInt(c,10)/100,r=h.globals.padHorizontal+(this.isReversed?h.globals.gridWidth-this.baseLineInvertedY:this.baseLineInvertedY),e=(a-n)/2}else{l=i=h.globals.gridWidth/h.globals.dataPoints;var d=h.config.plotOptions.bar.columnWidth;h.globals.isXNumeric&&h.globals.dataPoints>1?l=(i=h.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:-1===String(d).indexOf("%")?l=parseInt(d,10):l*=parseInt(d,10)/100,s=this.isReversed?this.baseLineY[o]:h.globals.gridHeight-this.baseLineY[o],t=h.globals.padHorizontal+(i-l)/2}var g=h.globals.barGroups.length||1;return{x:t,y:e,yDivision:a,xDivision:i,barHeight:n/g,barWidth:l/g,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,o=t.x,n=t.y,l=t.columnGroupIndex,h=t.seriesGroup,c=t.yDivision,d=t.elSeries,g=this.w,u=n+l*a,f=i.i,p=i.j,x=i.realIndex,b=i.translationsIndex,v=0,m=0;m<this.groupCtx.prevXF.length;m++)v+=this.groupCtx.prevXF[m][p];var y;if((y=h.indexOf(g.config.series[x].name))>0){var w=r;this.groupCtx.prevXVal[y-1][p]<0?w=this.series[f][p]>=0?this.groupCtx.prevX[y-1][p]+v-2*(this.isReversed?v:0):this.groupCtx.prevX[y-1][p]:this.groupCtx.prevXVal[y-1][p]>=0&&(w=this.series[f][p]>=0?this.groupCtx.prevX[y-1][p]:this.groupCtx.prevX[y-1][p]-v+2*(this.isReversed?v:0)),e=w}else e=r;o=null===this.series[f][p]?e:e+this.series[f][p]/this.invertedYRatio-2*(this.isReversed?this.series[f][p]/this.invertedYRatio:0);var k=this.barHelpers.getBarpaths({barYPosition:u,barHeight:a,x1:e,x2:o,strokeWidth:s,isReversed:this.isReversed,series:this.series,realIndex:i.realIndex,seriesGroup:h,i:f,j:p,w:g});return this.barHelpers.barBackground({j:p,i:f,y1:u,y2:a,elSeries:d}),n+=c,{pathTo:k.pathTo,pathFrom:k.pathFrom,goalX:this.barHelpers.getGoalValues("x",r,null,f,p,b),barXPosition:e,barYPosition:u,x:o,y:n}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH,n=t.columnGroupIndex,l=t.seriesGroup,h=t.elSeries,c=this.w,d=e.i,g=e.j,u=e.bc,f=e.realIndex,p=e.translationsIndex;if(c.globals.isXNumeric){var x=c.globals.seriesX[f][g];x||(x=0),i=(x-c.globals.minX)/this.xRatio-r/2*c.globals.barGroups.length}for(var b,v=i+n*r,m=0,y=0;y<this.groupCtx.prevYF.length;y++)m+=isNaN(this.groupCtx.prevYF[y][g])?0:this.groupCtx.prevYF[y][g];var w=d;if(l&&(w=l.indexOf(c.globals.seriesNames[f])),w>0&&!c.globals.isXNumeric||w>0&&c.globals.isXNumeric&&c.globals.seriesX[f-1][g]===c.globals.seriesX[f][g]){var k,A,S,C=Math.min(this.yRatio.length+1,f+1);if(void 0!==this.groupCtx.prevY[w-1]&&this.groupCtx.prevY[w-1].length)for(var L=1;L<C;L++){var P;if(!isNaN(null===(P=this.groupCtx.prevY[w-L])||void 0===P?void 0:P[g])){S=this.groupCtx.prevY[w-L][g];break}}for(var M=1;M<C;M++){var I,T;if((null===(I=this.groupCtx.prevYVal[w-M])||void 0===I?void 0:I[g])<0){A=this.series[d][g]>=0?S-m+2*(this.isReversed?m:0):S;break}if((null===(T=this.groupCtx.prevYVal[w-M])||void 0===T?void 0:T[g])>=0){A=this.series[d][g]>=0?S:S+m-2*(this.isReversed?m:0);break}}void 0===A&&(A=c.globals.gridHeight),b=null!==(k=this.groupCtx.prevYF[0])&&void 0!==k&&k.every((function(t){return 0===t}))&&this.groupCtx.prevYF.slice(1,w).every((function(t){return t.every((function(t){return isNaN(t)}))}))?o:A}else b=o;a=this.series[d][g]?b-this.series[d][g]/this.yRatio[p]+2*(this.isReversed?this.series[d][g]/this.yRatio[p]:0):b;var z=this.barHelpers.getColumnPaths({barXPosition:v,barWidth:r,y1:b,y2:a,yRatio:this.yRatio[p],strokeWidth:this.strokeWidth,isReversed:this.isReversed,series:this.series,seriesGroup:l,realIndex:e.realIndex,i:d,j:g,w:c});return this.barHelpers.barBackground({bc:u,j:g,i:d,x1:v,x2:r,elSeries:h}),{pathTo:z.pathTo,pathFrom:z.pathFrom,goalY:this.barHelpers.getGoalValues("y",null,o,d,g),barXPosition:v,x:c.globals.isXNumeric?i:i+s,y:a}}}]),a}(St),Lt=function(t){h(a,t);var e=o(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e,i){var a=this,s=this.w,r=new k(this.ctx),o=s.globals.comboCharts?e:s.config.chart.type,n=new N(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=s.config.plotOptions.bar.horizontal;var l=new A(this.ctx,s);t=l.getLogSeries(t),this.series=t,this.yRatio=l.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var h=r.group({class:"apexcharts-".concat(o,"-series apexcharts-plot-series")}),c=function(e){a.isBoxPlot="boxPlot"===s.config.chart.type||"boxPlot"===s.config.series[e].type;var o,l,c,d,u=void 0,f=void 0,p=[],x=[],b=s.globals.comboCharts?i[e]:e,v=a.barHelpers.getGroupIndex(b).columnGroupIndex,y=r.group({class:"apexcharts-series",seriesName:m.escapeString(s.globals.seriesNames[b]),rel:e+1,"data:realIndex":b});a.ctx.series.addCollapsedClassToSeries(y,b),t[e].length>0&&(a.visibleI=a.visibleI+1);var w,k,A=0;a.yRatio.length>1&&(a.yaxisIndex=s.globals.seriesYAxisReverseMap[b][0],A=b);var S=a.barHelpers.initialPositions();f=S.y,w=S.barHeight,l=S.yDivision,d=S.zeroW,u=S.x,k=S.barWidth,o=S.xDivision,c=S.zeroH,x.push(u+k/2);for(var C=r.group({class:"apexcharts-datalabels","data:realIndex":b}),L=function(i){var r=a.barHelpers.getStrokeWidth(e,i,b),h=null,m={indexes:{i:e,j:i,realIndex:b,translationsIndex:A},x:u,y:f,strokeWidth:r,elSeries:y};h=a.isHorizontal?a.drawHorizontalBoxPaths(g(g({},m),{},{yDivision:l,barHeight:w,zeroW:d})):a.drawVerticalBoxPaths(g(g({},m),{},{xDivision:o,barWidth:k,zeroH:c})),f=h.y,u=h.x,i>0&&x.push(u+k/2),p.push(f),h.pathTo.forEach((function(o,l){var c=!a.isBoxPlot&&a.candlestickOptions.wick.useFillColor?h.color[l]:s.globals.stroke.colors[e],d=n.fillPath({seriesNumber:b,dataPointIndex:i,color:h.color[l],value:t[e][i]});a.renderSeries({realIndex:b,pathFill:d,lineFill:c,j:i,i:e,pathFrom:h.pathFrom,pathTo:o,strokeWidth:r,elSeries:y,x:u,y:f,series:t,columnGroupIndex:v,barHeight:w,barWidth:k,elDataLabelsWrap:C,visibleSeries:a.visibleI,type:s.config.chart.type})}))},P=0;P<s.globals.dataPoints;P++)L(P);s.globals.seriesXvalues[b]=x,s.globals.seriesYvalues[b]=p,h.add(y)},d=0;d<t.length;d++)c(d);return h}},{key:"drawVerticalBoxPaths",value:function(t){var e=t.indexes,i=t.x;t.y;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=t.strokeWidth,n=this.w,l=new k(this.ctx),h=e.i,c=e.j,d=!0,g=n.config.plotOptions.candlestick.colors.upward,u=n.config.plotOptions.candlestick.colors.downward,f="";this.isBoxPlot&&(f=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var p=this.yRatio[e.translationsIndex],x=e.realIndex,b=this.getOHLCValue(x,c),v=r,m=r;b.o>b.c&&(d=!1);var y=Math.min(b.o,b.c),w=Math.max(b.o,b.c),A=b.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[x][c]-n.globals.minX)/this.xRatio-s/2);var S=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(y=r,w=r):(y=r-y/p,w=r-w/p,v=r-b.h/p,m=r-b.l/p,A=r-b.m/p);var C=l.move(S,r),L=l.move(S+s/2,y);return n.globals.previousPaths.length>0&&(L=this.getPreviousPath(x,c,!0)),C=this.isBoxPlot?[l.move(S,y)+l.line(S+s/2,y)+l.line(S+s/2,v)+l.line(S+s/4,v)+l.line(S+s-s/4,v)+l.line(S+s/2,v)+l.line(S+s/2,y)+l.line(S+s,y)+l.line(S+s,A)+l.line(S,A)+l.line(S,y+o/2),l.move(S,A)+l.line(S+s,A)+l.line(S+s,w)+l.line(S+s/2,w)+l.line(S+s/2,m)+l.line(S+s-s/4,m)+l.line(S+s/4,m)+l.line(S+s/2,m)+l.line(S+s/2,w)+l.line(S,w)+l.line(S,A)+"z"]:[l.move(S,w)+l.line(S+s/2,w)+l.line(S+s/2,v)+l.line(S+s/2,w)+l.line(S+s,w)+l.line(S+s,y)+l.line(S+s/2,y)+l.line(S+s/2,m)+l.line(S+s/2,y)+l.line(S,y)+l.line(S,w-o/2)],L+=l.move(S,y),n.globals.isXNumeric||(i+=a),{pathTo:C,pathFrom:L,x:i,y:w,barXPosition:S,color:this.isBoxPlot?f:d?[g]:[u]}}},{key:"drawHorizontalBoxPaths",value:function(t){var e=t.indexes;t.x;var i=t.y,a=t.yDivision,s=t.barHeight,r=t.zeroW,o=t.strokeWidth,n=this.w,l=new k(this.ctx),h=e.i,c=e.j,d=this.boxOptions.colors.lower;this.isBoxPlot&&(d=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var g=this.invertedYRatio,u=e.realIndex,f=this.getOHLCValue(u,c),p=r,x=r,b=Math.min(f.o,f.c),v=Math.max(f.o,f.c),m=f.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[u][c]-n.globals.minX)/this.invertedXRatio-s/2);var y=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(b=r,v=r):(b=r+b/g,v=r+v/g,p=r+f.h/g,x=r+f.l/g,m=r+f.m/g);var w=l.move(r,y),A=l.move(b,y+s/2);return n.globals.previousPaths.length>0&&(A=this.getPreviousPath(u,c,!0)),w=[l.move(b,y)+l.line(b,y+s/2)+l.line(p,y+s/2)+l.line(p,y+s/2-s/4)+l.line(p,y+s/2+s/4)+l.line(p,y+s/2)+l.line(b,y+s/2)+l.line(b,y+s)+l.line(m,y+s)+l.line(m,y)+l.line(b+o/2,y),l.move(m,y)+l.line(m,y+s)+l.line(v,y+s)+l.line(v,y+s/2)+l.line(x,y+s/2)+l.line(x,y+s-s/4)+l.line(x,y+s/4)+l.line(x,y+s/2)+l.line(v,y+s/2)+l.line(v,y)+l.line(m,y)+"z"],A+=l.move(b,y),n.globals.isXNumeric||(i+=a),{pathTo:w,pathFrom:A,x:v,y:i,barYPosition:y,color:d}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e],h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e],m:i.globals.seriesCandleM[t][e],l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e],c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e]}}}]),a}(St),Pt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,o=s.config.plotOptions[t].shadeIntensity,n=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?n.percent<0?n.percent/100*(1.25*o):(1-n.percent/100)*(1.25*o):n.percent<=0?1-(1+n.percent/100)*o:(1-n.percent/100)*o:(r=1-n.percent/100,"treemap"===t&&(r=(1-n.percent/100)*(1.25*o)));var l=n.color,h=new m;if(s.config.plotOptions[t].enableShades)if("dark"===this.w.config.theme.mode){var c=h.shadeColor(-1*r,n.color);l=m.hexToRgba(m.isColorHex(c)?c:m.rgb2hex(c),s.config.fill.opacity)}else{var d=h.shadeColor(r,n.color);l=m.hexToRgba(m.isColorHex(d)?d:m.rgb2hex(d),s.config.fill.opacity)}return{color:l,colorProps:n}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],o=r.colorScale.inverse?i:e;r.distributed&&"treemap"===a.config.chart.type&&(o=i);var n=a.globals.colors[o],l=null,h=Math.min.apply(Math,p(a.globals.series[e])),c=Math.max.apply(Math,p(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),g=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){n=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);g=100*s/(0===i?i-1e-6:i)}}));return{color:n,foreColor:l,percent:g}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,o=t.colorProps,n=t.fontSize,l=this.w.config.dataLabels,h=new k(this.ctx),c=new G(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,u=l.offsetY,f=i+g,p=a+parseFloat(l.style.fontSize)/3+u;c.plotDataLabelsText({x:f,y:p,text:e,i:s,j:r,color:o.foreColor,parent:d,fontSize:n,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new k(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),Mt=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w,this.xRatio=a.xRatio,this.yRatio=a.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new Pt(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return s(t,[{key:"draw",value:function(t){var e=this.w,i=new k(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,o=0,n=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(n=!0,l.reverse());for(var h=n?0:l.length-1;n?h<l.length:h>=0;n?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:m.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new w(this.ctx).dropShadow(c,d,h)}for(var g=0,u=e.config.plotOptions.heatmap.shadeIntensity,f=0;f<l[h].length;f++){var p=this.helpers.getShadeColor(e.config.chart.type,h,f,this.negRange),x=p.color,b=p.colorProps;if("image"===e.config.fill.type)x=new N(this.ctx).fillPath({seriesNumber:h,dataPointIndex:f,opacity:e.globals.hasNegs?b.percent<0?1-(1+b.percent/100):u+b.percent/100:b.percent/100,patternID:m.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var v=this.rectRadius,y=i.drawRect(g,o,s,r,v);if(y.attr({cx:g,cy:o}),y.node.classList.add("apexcharts-heatmap-rect"),c.add(y),y.attr({fill:x,i:h,index:h,j:f,val:t[h][f],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?x:e.globals.stroke.colors[0],color:x}),this.helpers.addListeners(y),e.config.chart.animations.enabled&&!e.globals.dataChanged){var A=1;e.globals.resized||(A=e.config.chart.animations.speed),this.animateHeatMap(y,g,o,s,r,A)}if(e.globals.dataChanged){var S=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){S=this.dynamicAnim.speed;var C=e.globals.previousPaths[h]&&e.globals.previousPaths[h][f]&&e.globals.previousPaths[h][f].color;C||(C="rgba(255, 255, 255, 0)"),this.animateHeatColor(y,m.isColorHex(C)?C:m.rgb2hex(C),m.isColorHex(x)?x:m.rgb2hex(x),S)}}var L=(0,e.config.dataLabels.formatter)(e.globals.series[h][f],{value:e.globals.series[h][f],seriesIndex:h,dataPointIndex:f,w:e}),P=this.helpers.calculateDataLabels({text:L,x:g+s/2,y:o+r/2,i:h,j:f,colorProps:b,series:l});null!==P&&c.add(P),g+=s}o+=r,a.add(c)}var M=e.globals.yAxisScale[0].result.slice();return e.config.yaxis[0].reversed?M.unshift(""):M.push(""),e.globals.yAxisScale[0].result=M,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var o=new y(this.ctx);o.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){o.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),It=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],o=s.globals.yLabelFormatters[0];return new k(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),Tt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=Math.min(a.globals.gridWidth,a.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=a.globals.gridWidth/2,"radialBar"===a.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(a.config.plotOptions.pie.endAngle-a.config.plotOptions.pie.startAngle),this.initialAngle=a.config.plotOptions.pie.startAngle%this.fullAngle,a.globals.radialSize=this.defaultSize/2.05-a.config.stroke.width-(a.config.chart.sparkline.enabled?0:a.config.chart.dropShadow.blur),this.donutSize=a.globals.radialSize*parseInt(a.config.plotOptions.pie.donut.size,10)/100;var s=a.config.plotOptions.pie.customScale,r=a.globals.gridWidth/2,o=a.globals.gridHeight/2;this.translateX=r-r*s,this.translateY=o-o*s,this.dataLabelsGroup=new k(this.ctx).group({class:"apexcharts-datalabels-group",transform:"translate(".concat(this.translateX,", ").concat(this.translateY,") scale(").concat(s,")")}),this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new k(this.ctx),s=a.group({class:"apexcharts-pie"});if(i.globals.noData)return s;for(var r=0,o=0;o<t.length;o++)r+=m.negToZero(t[o]);var n=[],l=a.group();0===r&&(r=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(s);for(var h=0;h<t.length;h++){var c=this.fullAngle*m.negToZero(t[h])/r;n.push(c),"polarArea"===this.chartType?(n[h]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[h]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var d,g=0,u=0;u<i.globals.previousPaths.length;u++)g+=m.negToZero(i.globals.previousPaths[u]);for(var f=0;f<i.globals.previousPaths.length;f++)d=this.fullAngle*m.negToZero(i.globals.previousPaths[f])/g,this.prevSectorAngleArr.push(d)}if(this.donutSize<0&&(this.donutSize=0),"donut"===this.chartType){var p=a.drawCircle(this.donutSize);p.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),l.add(p)}var x=this.drawArcs(n,t);if(this.sliceLabels.forEach((function(t){x.add(t)})),l.attr({transform:"translate(".concat(this.translateX,", ").concat(this.translateY,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),l.add(x),s.add(l),this.donutDataLabels.show){var b=this.renderInnerDataLabels(this.dataLabelsGroup,this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show});s.add(b)}return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(s),s}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new w(this.ctx),s=new k(this.ctx),r=new N(this.ctx),o=s.group({class:"apexcharts-slices"}),n=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var g=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:m.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});o.add(g),l=c,h=(n=h)+t[d],c=l+this.prevSectorAngleArr[d];var u=h<n?this.fullAngle+h-n:h-n,f=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),p=this.getChangedPath(l,c),x=s.drawPath({d:p,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:f,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(x.attr({index:0,j:d}),a.setSelectionFilter(x,0,d),i.config.chart.dropShadow.enabled){var b=i.config.chart.dropShadow;a.dropShadow(x,b,d)}this.addListeners(x,this.donutDataLabels),k.setAttrs(x.node,{"data:angle":u,"data:startAngle":n,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var v={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?v=m.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle):"donut"===this.chartType&&(v=m.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle)),g.add(x);var y=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(y=u/this.fullAngle*i.config.chart.animations.speed)&&(y=1),this.animDur=y+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(x,{size:this.sliceSizes[d],endAngle:h,startAngle:n,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(x,{size:this.sliceSizes[d],endAngle:h,startAngle:n,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:y}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&x.node.addEventListener("mouseup",this.pieClicked.bind(this,d)),void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d),i.config.dataLabels.enabled){var A=v.x,S=v.y,C=100*u/this.fullAngle+"%";if(0!==u&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var L=i.config.dataLabels.formatter;void 0!==L&&(C=L(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var P=i.globals.dataLabels.style.colors[d],M=s.group({class:"apexcharts-datalabels"}),I=s.drawText({x:A,y:S,text:C,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:P});if(M.add(I),i.config.dataLabels.dropShadow.enabled){var T=i.config.dataLabels.dropShadow;a.dropShadow(I,T)}I.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(I.node.classList.add("apexcharts-pie-label-delay"),I.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(M)}}}return o}},{key:"addListeners",value:function(t,e){var i=new k(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,o=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+o>this.fullAngle?e.endAngle=e.endAngle-(a+o):a+o<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,o,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var o,n=this,l=this.w,h=new y(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,g=i,u=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(o=n.getPiePath({me:n,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:o})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll((function(){"pie"!==n.chartType&&"donut"!==n.chartType&&"polarArea"!==n.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":n.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=u+(a-u)*l,r.animateStartingPos&&(d=s+(a-s)*l,g=e-s+(i-(e-s))*l),o=n.getPiePath({me:n,startAngle:g,angle:d,size:c}),t.node.setAttribute("data:pathOrig",o),t.attr({d:o})})):(o=n.getPiePath({me:n,startAngle:g,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",o),t.attr({d:o,"stroke-width":n.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t)).members[0];if("true"!==r.attr("data:pieClicked")){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");e&&t.setAttribute("d",e)})),i.globals.capturedDataPointIndex=t,r.attr("data:pieClicked","true");var n=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:n,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e,i=t.me,a=t.startAngle,s=t.angle,r=t.size,o=new k(this.ctx),n=a,l=Math.PI*(n-90)/180,h=s+a;Math.ceil(h)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(h=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(h)>this.fullAngle&&(h-=this.fullAngle);var c=Math.PI*(h-90)/180,d=i.centerX+r*Math.cos(l),g=i.centerY+r*Math.sin(l),u=i.centerX+r*Math.cos(c),f=i.centerY+r*Math.sin(c),p=m.polarToCartesian(i.centerX,i.centerY,i.donutSize,h),x=m.polarToCartesian(i.centerX,i.centerY,i.donutSize,n),b=s>180?1:0,v=["M",d,g,"A",r,r,0,b,1,u,f];return e="donut"===i.chartType?[].concat(v,["L",p.x,p.y,"A",i.donutSize,i.donutSize,0,b,0,x.x,x.y,"L",d,g,"z"]).join(" "):"pie"===i.chartType||"polarArea"===i.chartType?[].concat(v,["L",i.centerX,i.centerY,"L",d,g]).join(" "):[].concat(v).join(" "),o.roundPathCorners(e,2*this.strokeWidth)}},{key:"drawPolarElements",value:function(t){var e=this.w,i=new $(this.ctx),a=new k(this.ctx),s=new It(this.ctx),r=a.group(),o=a.group(),n=i.niceScale(0,Math.ceil(this.maxY),0),l=n.result.reverse(),h=n.result.length;this.maxY=n.niceMax;for(var c=e.globals.radialSize,d=c/(h-1),g=0;g<h-1;g++){var u=a.drawCircle(c);if(u.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth,stroke:e.config.plotOptions.polarArea.rings.strokeColor}),e.config.yaxis[0].show){var f=s.drawYAxisTexts(this.centerX,this.centerY-c+parseInt(e.config.yaxis[0].labels.style.fontSize,10)/2,g,l[g]);o.add(f)}r.add(u),c-=d}this.drawSpokes(t),t.add(r),t.add(o)}},{key:"renderInnerDataLabels",value:function(t,e,i){var a=this.w,s=new k(this.ctx),r=e.total.show;t.node.innerHTML="",t.node.style.opacity=i.opacity;var o,n,l=i.centerX,h=this.donutDataLabels.total.label?i.centerY:i.centerY-i.centerY/6;o=void 0===e.name.color?a.globals.colors[0]:e.name.color;var c=e.name.fontSize,d=e.name.fontFamily,g=e.name.fontWeight;n=void 0===e.value.color?a.config.chart.foreColor:e.value.color;var u=e.value.formatter,f="",p="";if(r?(o=e.total.color,c=e.total.fontSize,d=e.total.fontFamily,g=e.total.fontWeight,p=this.donutDataLabels.total.label?e.total.label:"",f=e.total.formatter(a)):1===a.globals.series.length&&(f=u(a.globals.series[0],a),p=a.globals.seriesNames[0]),p&&(p=e.name.formatter(p,e.total.show,a)),e.name.show){var x=s.drawText({x:l,y:h+parseFloat(e.name.offsetY),text:p,textAnchor:"middle",foreColor:o,fontSize:c,fontWeight:g,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),t.add(x)}if(e.value.show){var b=e.name.show?parseFloat(e.value.offsetY)+16:e.value.offsetY,v=s.drawText({x:l,y:h+b,text:f,textAnchor:"middle",foreColor:n,fontWeight:e.value.fontWeight,fontSize:e.value.fontSize,fontFamily:e.value.fontFamily});v.node.classList.add("apexcharts-datalabel-value"),t.add(v)}return t}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=this.donutDataLabels.total.label?t.name.formatter(e,l,r):"",null!==o&&(o.textContent=e),null!==n&&(n.textContent=i),null!==o&&(o.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"drawSpokes",value:function(t){var e=this,i=this.w,a=new k(this.ctx),s=i.config.plotOptions.polarArea.spokes;if(0!==s.strokeWidth){for(var r=[],o=360/i.globals.series.length,n=0;n<i.globals.series.length;n++)r.push(m.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*n));r.forEach((function(i,r){var o=a.drawLine(i.x,i.y,e.centerX,e.centerY,Array.isArray(s.connectorColors)?s.connectorColors[r]:s.connectorColors);t.add(o)}))}}},{key:"revertDataLabelsInner",value:function(){var t=this.w;if(this.donutDataLabels.show){var e=t.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0],i=this.renderInnerDataLabels(e,this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show});t.globals.dom.Paper.select(".apexcharts-radialbar, .apexcharts-pie").members[0].add(i)}}}]),t}(),zt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var a=this.w;this.graphics=new k(this.ctx),this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=a.globals.svgHeight<a.globals.svgWidth?a.globals.gridHeight:a.globals.gridWidth,this.isLog=a.config.yaxis[0].logarithmic,this.logBase=a.config.yaxis[0].logBase,this.coreUtils=new A(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(this.logBase,a.globals.maxY,0):a.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.logBase,this.w.globals.minY,0):a.globals.minY,this.polygons=a.config.plotOptions.radar.polygons,this.strokeWidth=a.config.stroke.show?a.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-a.config.chart.dropShadow.blur,a.config.xaxis.labels.show&&(this.size=this.size-a.globals.xAxisLabelsWidth/1.75),void 0!==a.config.plotOptions.radar.size&&(this.size=a.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new N(this.ctx),s=[],r=new G(this.ctx);t.length&&(this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var o=i.globals.gridWidth/2,n=i.globals.gridHeight/2,l=o+i.config.plotOptions.radar.offsetX,h=n+i.config.plotOptions.radar.offsetY,c=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(l||0,", ").concat(h||0,")")}),d=[],u=null,f=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,o){var n=t.length===i.globals.dataPoints,l=e.graphics.group().attr({class:"apexcharts-series","data:longestSeries":n,seriesName:m.escapeString(i.globals.seriesNames[o]),rel:o+1,"data:realIndex":o});e.dataRadiusOfPercent[o]=[],e.dataRadius[o]=[],e.angleArr[o]=[],t.forEach((function(t,i){var a=Math.abs(e.maxValue-e.minValue);t-=e.minValue,e.isLog&&(t=e.coreUtils.getLogVal(e.logBase,t,0)),e.dataRadiusOfPercent[o][i]=t/a,e.dataRadius[o][i]=e.dataRadiusOfPercent[o][i]*e.size,e.angleArr[o][i]=i*e.disAngle})),d=e.getDataPointsPos(e.dataRadius[o],e.angleArr[o]);var h=e.createPaths(d,{x:0,y:0});u=e.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),f=e.graphics.group({class:"apexcharts-datalabels","data:realIndex":o}),i.globals.delayedElements.push({el:u.node,index:o});var c={i:o,realIndex:o,animationDelay:o,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[o],strokeLineCap:i.config.stroke.lineCap},p=null;i.globals.previousPaths.length>0&&(p=e.getPreviousPath(o));for(var x=0;x<h.linePathsTo.length;x++){var b=e.graphics.renderPaths(g(g({},c),{},{pathFrom:null===p?h.linePathsFrom[x]:p,pathTo:h.linePathsTo[x],strokeWidth:Array.isArray(e.strokeWidth)?e.strokeWidth[o]:e.strokeWidth,fill:"none",drawShadow:!1}));l.add(b);var v=a.fillPath({seriesNumber:o}),y=e.graphics.renderPaths(g(g({},c),{},{pathFrom:null===p?h.areaPathsFrom[x]:p,pathTo:h.areaPathsTo[x],strokeWidth:0,fill:v,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var k=new w(e.ctx),A=i.config.chart.dropShadow;k.dropShadow(y,Object.assign({},A,{noUserSpaceOnUse:!0}),o)}l.add(y)}t.forEach((function(t,a){var s=new W(e.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:o,dataPointIndex:a}),n=e.graphics.drawMarker(d[a].x,d[a].y,s);n.attr("rel",a),n.attr("j",a),n.attr("index",o),n.node.setAttribute("default-marker-size",s.pSize);var h=e.graphics.group({class:"apexcharts-series-markers"});h&&h.add(n),u.add(h),l.add(u);var c=i.config.dataLabels;if(c.enabled){var p=c.formatter(i.globals.series[o][a],{seriesIndex:o,dataPointIndex:a,w:i});r.plotDataLabelsText({x:d[a].x,y:d[a].y,text:p,textAnchor:"middle",i:o,j:o,parent:f,offsetCorrection:!1,dataLabelsConfig:g({},c)})}l.add(f)})),s.push(l)})),this.drawPolygons({parent:c}),i.config.xaxis.labels.show){var p=this.drawXAxisTexts();c.add(p)}return s.forEach((function(t){c.add(t)})),c.add(this.yaxisLabels),c}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new It(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),o=r.length,n=[],l=this.size/(o-1),h=0;h<o;h++)n[h]=l*h;n.reverse();var c=[],d=[];n.forEach((function(t,i){var a=m.getPolygonPos(t,e.dataPointsLen),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,o=e.polygons.strokeWidth,n=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(o)?o[s]:o,i.globals.radarPolygons.fill.colors[s]);a.add(n)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,e=this.w,i=e.config.xaxis.labels,a=this.graphics.group({class:"apexcharts-xaxis"}),s=m.getPolygonPos(this.size,this.dataPointsLen);return e.globals.labels.forEach((function(r,o){var n=e.config.xaxis.labels.formatter,l=new G(t.ctx);if(s[o]){var h=t.getTextPos(s[o],t.size),c=n(r,{seriesIndex:-1,dataPointIndex:o,w:e});l.plotDataLabelsText({x:h.newX,y:h.newY,text:c,textAnchor:h.textAnchor,i:o,j:o,parent:a,className:"apexcharts-xaxis-label",color:Array.isArray(i.style.colors)&&i.style.colors[o]?i.style.colors[o]:"#a8a8a8",dataLabelsConfig:g({textAnchor:h.textAnchor,dropShadow:{enabled:!1}},i),offsetCorrection:!1}).on("click",(function(i){if("function"==typeof e.config.chart.events.xAxisLabelClick){var a=Object.assign({},e,{labelIndex:o});e.config.chart.events.xAxisLabelClick(i,t.ctx,a)}}))}})),a}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],o=[];if(t.length){s=[this.graphics.move(e.x,e.y)],o=[this.graphics.move(e.x,e.y)];var n=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){n+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(n+="Z",l+="Z")})),a.push(n),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:o,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}}]),t}(),Xt=function(t){h(r,t);var a=o(r);function r(t){var s;i(this,r),(s=a.call(this,t)).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var o=s.w;return s.startAngle=o.config.plotOptions.radialBar.startAngle,s.endAngle=o.config.plotOptions.radialBar.endAngle,s.totalAngle=Math.abs(o.config.plotOptions.radialBar.endAngle-o.config.plotOptions.radialBar.startAngle),s.trackStartAngle=o.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=o.config.plotOptions.radialBar.track.endAngle,s.barLabels=s.w.config.plotOptions.radialBar.barLabels,s.donutDataLabels=s.w.config.plotOptions.radialBar.dataLabels,s.radialDataLabels=s.donutDataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.margin=parseInt(o.config.plotOptions.radialBar.track.margin,10),s.onBarLabelClick=s.onBarLabelClick.bind(e(s)),s}return s(r,[{key:"draw",value:function(t){var e=this.w,i=new k(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,o=e.globals.gridWidth/2,n=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(n=n-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:n,centerX:o,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:n,centerX:o,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var g=(360-d)/360;if(e.globals.radialSize=n-n*g,this.radialDataLabels.value.show){var u=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=u*g}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new k(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new w(this.ctx),r=new N(this.ctx),o=this.getStrokeWidth(t);t.size=t.size-o/2;for(var n=0;n<t.series.length;n++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:n+1}),t.size=t.size-o-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[n]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var u=i.drawPath({d:"",stroke:c,strokeWidth:o*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var f=h.dropShadow;s.dropShadow(u,f)}l.add(u),u.attr("id","apexcharts-radialbarTrack-"+n),this.animatePaths(u,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:n,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new k(this.ctx),a=new N(this.ctx),s=new w(this.ctx),r=i.group(),o=this.getStrokeWidth(t);t.size=t.size-o/2;var n=e.config.plotOptions.radialBar.hollow.background,l=t.size-o*t.series.length-this.margin*t.series.length-o*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(n=this.drawHollowImage(t,r,l,n));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:n||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var g=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(g=0);var u=null;if(this.radialDataLabels.show){var f=e.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0];u=this.renderInnerDataLabels(f,this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:g})}"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),u&&r.add(u));var p=!1;e.config.plotOptions.radialBar.inverseOrder&&(p=!0);for(var x=p?t.series.length-1:0;p?x>=0:x<t.series.length;p?x--:x++){var b=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:m.escapeString(e.globals.seriesNames[x])});r.add(b),b.attr({rel:x+1,"data:realIndex":x}),this.ctx.series.addCollapsedClassToSeries(b,x),t.size=t.size-o-this.margin;var v=a.fillPath({seriesNumber:x,size:t.size,value:t.series[x]}),y=this.startAngle,A=void 0,S=m.negToZero(t.series[x]>100?100:t.series[x])/100,C=Math.round(this.totalAngle*S)+this.startAngle,L=void 0;e.globals.dataChanged&&(A=this.startAngle,L=Math.round(this.totalAngle*m.negToZero(e.globals.previousPaths[x])/100)+A),Math.abs(C)+Math.abs(y)>360&&(C-=.01),Math.abs(L)+Math.abs(A)>360&&(L-=.01);var P=C-y,M=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[x]:e.config.stroke.dashArray,I=i.drawPath({d:"",stroke:v,strokeWidth:o,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+x,strokeDashArray:M});if(k.setAttrs(I.node,{"data:angle":P,"data:value":t.series[x]}),e.config.chart.dropShadow.enabled){var T=e.config.chart.dropShadow;s.dropShadow(I,T,x)}if(s.setSelectionFilter(I,0,x),this.addListeners(I,this.radialDataLabels),b.add(I),I.attr({index:0,j:x}),this.barLabels.enabled){var z=m.polarToCartesian(t.centerX,t.centerY,t.size,y),X=this.barLabels.formatter(e.globals.seriesNames[x],{seriesIndex:x,w:e}),E=["apexcharts-radialbar-label"];this.barLabels.onClick||E.push("apexcharts-no-click");var Y=this.barLabels.useSeriesColors?e.globals.colors[x]:e.config.chart.foreColor;Y||(Y=e.config.chart.foreColor);var R=z.x+this.barLabels.offsetX,F=z.y+this.barLabels.offsetY,D=i.drawText({x:R,y:F,text:X,textAnchor:"end",dominantBaseline:"middle",fontFamily:this.barLabels.fontFamily,fontWeight:this.barLabels.fontWeight,fontSize:this.barLabels.fontSize,foreColor:Y,cssClass:E.join(" ")});D.on("click",this.onBarLabelClick),D.attr({rel:x+1}),0!==y&&D.attr({"transform-origin":"".concat(R," ").concat(F),transform:"rotate(".concat(y," 0 0)")}),b.add(D)}var H=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(H=e.config.chart.animations.speed),e.globals.dataChanged&&(H=e.config.chart.animations.dynamicAnimation.speed),this.animDur=H/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(I,{centerX:t.centerX,centerY:t.centerY,endAngle:C,startAngle:y,prevEndAngle:L,prevStartAngle:A,size:t.size,i:x,totalItems:2,animBeginArr:this.animBeginArr,dur:H,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:u}}},{key:"drawHollow",value:function(t){var e=new k(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new N(this.ctx),o=m.randomId(),n=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:n,patternID:"pattern".concat(s.globals.cuid).concat(o)}),a="url(#pattern".concat(s.globals.cuid).concat(o,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}},{key:"onBarLabelClick",value:function(t){var e=parseInt(t.target.getAttribute("rel"),10)-1,i=this.barLabels.onClick,a=this.w;i&&i(a.globals.seriesNames[e],{w:a,seriesIndex:e})}}]),r}(Tt),Et=function(t){h(a,t);var e=o(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e){var i=this.w,a=new k(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=i.globals.seriesRangeStart,this.seriesRangeEnd=i.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var s=a.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),r=0;r<t.length;r++){var o,n,l,h,c=void 0,d=void 0,u=i.globals.comboCharts?e[r]:r,f=this.barHelpers.getGroupIndex(u).columnGroupIndex,p=a.group({class:"apexcharts-series",seriesName:m.escapeString(i.globals.seriesNames[u]),rel:r+1,"data:realIndex":u});this.ctx.series.addCollapsedClassToSeries(p,u),t[r].length>0&&(this.visibleI=this.visibleI+1);var x=0,b=0,v=0;this.yRatio.length>1&&(this.yaxisIndex=i.globals.seriesYAxisReverseMap[u][0],v=u);var y=this.barHelpers.initialPositions();d=y.y,h=y.zeroW,c=y.x,b=y.barWidth,x=y.barHeight,o=y.xDivision,n=y.yDivision,l=y.zeroH;for(var w=a.group({class:"apexcharts-datalabels","data:realIndex":u}),A=a.group({class:"apexcharts-rangebar-goals-markers"}),S=0;S<i.globals.dataPoints;S++){var C=this.barHelpers.getStrokeWidth(r,S,u),L=this.seriesRangeStart[r][S],P=this.seriesRangeEnd[r][S],M=null,I=null,T=null,z={x:c,y:d,strokeWidth:C,elSeries:p},X=this.seriesLen;if(i.config.plotOptions.bar.rangeBarGroupRows&&(X=1),void 0===i.config.series[r].data[S])break;if(this.isHorizontal){T=d+x*this.visibleI;var E=(n-x*X)/2;if(i.config.series[r].data[S].x){var Y=this.detectOverlappingBars({i:r,j:S,barYPosition:T,srty:E,barHeight:x,yDivision:n,initPositions:y});x=Y.barHeight,T=Y.barYPosition}b=(M=this.drawRangeBarPaths(g({indexes:{i:r,j:S,realIndex:u},barHeight:x,barYPosition:T,zeroW:h,yDivision:n,y1:L,y2:P},z))).barWidth}else{i.globals.isXNumeric&&(c=(i.globals.seriesX[r][S]-i.globals.minX)/this.xRatio-b/2),I=c+b*this.visibleI;var R=(o-b*X)/2;if(i.config.series[r].data[S].x){var F=this.detectOverlappingBars({i:r,j:S,barXPosition:I,srtx:R,barWidth:b,xDivision:o,initPositions:y});b=F.barWidth,I=F.barXPosition}x=(M=this.drawRangeColumnPaths(g({indexes:{i:r,j:S,realIndex:u,translationsIndex:v},barWidth:b,barXPosition:I,zeroH:l,xDivision:o},z))).barHeight}var D=this.barHelpers.drawGoalLine({barXPosition:M.barXPosition,barYPosition:T,goalX:M.goalX,goalY:M.goalY,barHeight:x,barWidth:b});D&&A.add(D),d=M.y,c=M.x;var H=this.barHelpers.getPathFillColor(t,r,S,u),O=i.globals.stroke.colors[u];this.renderSeries({realIndex:u,pathFill:H,lineFill:O,j:S,i:r,x:c,y:d,y1:L,y2:P,pathFrom:M.pathFrom,pathTo:M.pathTo,strokeWidth:C,elSeries:p,series:t,barHeight:x,barWidth:b,barXPosition:I,barYPosition:T,columnGroupIndex:f,elDataLabelsWrap:w,elGoalsMarkers:A,visibleSeries:this.visibleI,type:"rangebar"})}s.add(p)}return s}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.barXPosition,r=t.srty,o=t.srtx,n=t.barHeight,l=t.barWidth,h=t.yDivision,c=t.xDivision,d=t.initPositions,g=this.w,u=[],f=g.config.series[e].data[i].rangeName,p=g.config.series[e].data[i].x,x=Array.isArray(p)?p.join(" "):p,b=g.globals.labels.map((function(t){return Array.isArray(t)?t.join(" "):t})).indexOf(x),v=g.globals.seriesRange[e].findIndex((function(t){return t.x===x&&t.overlaps.length>0}));return this.isHorizontal?(a=g.config.plotOptions.bar.rangeBarGroupRows?r+h*b:r+n*this.visibleI+h*b,v>-1&&!g.config.plotOptions.bar.rangeBarOverlap&&(u=g.globals.seriesRange[e][v].overlaps).indexOf(f)>-1&&(a=(n=d.barHeight/u.length)*this.visibleI+h*(100-parseInt(this.barOptions.barHeight,10))/100/2+n*(this.visibleI+u.indexOf(f))+h*b)):(b>-1&&!g.globals.timescaleLabels.length&&(s=g.config.plotOptions.bar.rangeBarGroupRows?o+c*b:o+l*this.visibleI+c*b),v>-1&&!g.config.plotOptions.bar.rangeBarOverlap&&(u=g.globals.seriesRange[e][v].overlaps).indexOf(f)>-1&&(s=(l=d.barWidth/u.length)*this.visibleI+c*(100-parseInt(this.barOptions.barWidth,10))/100/2+l*(this.visibleI+u.indexOf(f))+c*b)),{barYPosition:a,barXPosition:s,barHeight:n,barWidth:l}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.xDivision,s=t.barWidth,r=t.barXPosition,o=t.zeroH,n=this.w,l=e.i,h=e.j,c=e.realIndex,d=e.translationsIndex,g=this.yRatio[d],u=this.getRangeValue(c,h),f=Math.min(u.start,u.end),p=Math.max(u.start,u.end);void 0===this.series[l][h]||null===this.series[l][h]?f=o:(f=o-f/g,p=o-p/g);var x=Math.abs(p-f),b=this.barHelpers.getColumnPaths({barXPosition:r,barWidth:s,y1:f,y2:p,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:c,i:c,j:h,w:n});if(n.globals.isXNumeric){var v=this.getBarXForNumericXAxis({x:i,j:h,realIndex:c,barWidth:s});i=v.x,r=v.barXPosition}else i+=a;return{pathTo:b.pathTo,pathFrom:b.pathFrom,barHeight:x,x:i,y:u.start<0&&u.end<0?f:p,goalY:this.barHelpers.getGoalValues("y",null,o,l,h,d),barXPosition:r}}},{key:"preventBarOverflow",value:function(t){var e=this.w;return t<0&&(t=0),t>e.globals.gridWidth&&(t=e.globals.gridWidth),t}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,o=t.barHeight,n=t.barYPosition,l=t.zeroW,h=this.w,c=e.realIndex,d=e.j,g=this.preventBarOverflow(l+a/this.invertedYRatio),u=this.preventBarOverflow(l+s/this.invertedYRatio),f=this.getRangeValue(c,d),p=Math.abs(u-g),x=this.barHelpers.getBarpaths({barYPosition:n,barHeight:o,x1:g,x2:u,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:c,realIndex:c,j:d,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:x.pathTo,pathFrom:x.pathFrom,barWidth:p,x:f.start<0&&f.end<0?g:u,goalX:this.barHelpers.getGoalValues("x",l,null,c,d),y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}}]),a}(St),Yt=function(){function t(e){i(this,t),this.w=e.w,this.lineCtx=e}return s(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if(("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new A(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,o=t.j,n=t.prevY,l=this.w,h=[],c=[];if(0===o){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(m.isNumber(e[r][0])?n+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(m.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(m.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var o=s.globals.previousPaths[r];("line"===o.type||"area"===o.type)&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&("line"===o.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===o.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e,i,a,s=t.i,r=t.realIndex,o=t.series,n=t.prevY,l=t.lineYPosition,h=t.translationsIndex,c=this.w,d=c.config.chart.stacked&&!c.globals.comboCharts||c.config.chart.stacked&&c.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||"bar"===(null===(e=this.w.config.series[r])||void 0===e?void 0:e.type)||"column"===(null===(i=this.w.config.series[r])||void 0===i?void 0:i.type));if(void 0!==(null===(a=o[s])||void 0===a?void 0:a[0]))n=(l=d&&s>0?this.lineCtx.prevSeriesY[s-1][0]:this.lineCtx.zeroY)-o[s][0]/this.lineCtx.yRatio[h]+2*(this.lineCtx.isReversed?o[s][0]/this.lineCtx.yRatio[h]:0);else if(d&&s>0&&void 0===o[s][0])for(var g=s-1;g>=0;g--)if(null!==o[g][0]&&void 0!==o[g][0]){n=l=this.lineCtx.prevSeriesY[g][0];break}return{prevY:n,lineYPosition:l}}}]),t}(),Rt=function(t){for(var e,i,a,s,r=function(t){for(var e=[],i=t[0],a=t[1],s=e[0]=Ht(i,a),r=1,o=t.length-1;r<o;r++)i=a,a=t[r+1],e[r]=.5*(s+(s=Ht(i,a)));return e[r]=s,e}(t),o=t.length-1,n=[],l=0;l<o;l++)a=Ht(t[l],t[l+1]),Math.abs(a)<1e-6?r[l]=r[l+1]=0:(s=(e=r[l]/a)*e+(i=r[l+1]/a)*i)>9&&(s=3*a/Math.sqrt(s),r[l]=s*e,r[l+1]=s*i);for(var h=0;h<=o;h++)s=(t[Math.min(o,h+1)][0]-t[Math.max(0,h-1)][0])/(6*(1+r[h]*r[h])),n.push([s||0,r[h]*s||0]);return n},Ft=function(t){var e=Rt(t),i=t[1],a=t[0],s=[],r=e[1],o=e[0];s.push(a,[a[0]+o[0],a[1]+o[1],i[0]-r[0],i[1]-r[1],i[0],i[1]]);for(var n=2,l=e.length;n<l;n++){var h=t[n],c=e[n];s.push([h[0]-c[0],h[1]-c[1],h[0],h[1]])}return s},Dt=function(t,e,i){var a=t.slice(e,i);if(e){if(i-e>1&&a[1].length<6){var s=a[0].length;a[1]=[2*a[0][s-2]-a[0][s-4],2*a[0][s-1]-a[0][s-3]].concat(a[1])}a[0]=a[0].slice(-2)}return a};function Ht(t,e){return(e[1]-t[1])/(e[0]-t[0])}var Ot=function(){function t(e,a,s){i(this,t),this.ctx=e,this.w=e.w,this.xyRatios=a,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new B(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Yt(this),this.markers=new W(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return s(t,[{key:"draw",value:function(t,e,i,a){var s,r=this.w,o=new k(this.ctx),n=r.globals.comboCharts?e:r.config.chart.type,l=o.group({class:"apexcharts-".concat(n,"-series apexcharts-plot-series")}),h=new A(this.ctx,r);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=h.getLogSeries(t),this.yRatio=h.getLogYRatios(this.yRatio),this.prevSeriesY=[];for(var c=[],d=0;d<t.length;d++){t=this.lineHelpers.sameValueSeriesFix(d,t);var u=r.globals.comboCharts?i[d]:d,f=this.yRatio.length>1?u:0;this._initSerieVariables(t,d,u);var p=[],x=[],b=[],v=r.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,u),r.globals.isXNumeric&&r.globals.seriesX.length>0&&(v=(r.globals.seriesX[u][0]-r.globals.minX)/this.xRatio),b.push(v);var m,y=v,w=void 0,S=y,C=this.zeroY,L=this.zeroY;C=this.lineHelpers.determineFirstPrevY({i:d,realIndex:u,series:t,prevY:C,lineYPosition:0,translationsIndex:f}).prevY,"monotoneCubic"===r.config.stroke.curve&&null===t[d][0]?p.push(null):p.push(C),m=C;"rangeArea"===n&&(w=L=this.lineHelpers.determineFirstPrevY({i:d,realIndex:u,series:a,prevY:L,lineYPosition:0,translationsIndex:f}).prevY,x.push(null!==p[0]?L:null));var P=this._calculatePathsFrom({type:n,series:t,i:d,realIndex:u,translationsIndex:f,prevX:S,prevY:C,prevY2:L}),M=[p[0]],I=[x[0]],T={type:n,series:t,realIndex:u,translationsIndex:f,i:d,x:v,y:1,pX:y,pY:m,pathsFrom:P,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:b,yArrj:p,y2Arrj:x,seriesRangeEnd:a},z=this._iterateOverDataPoints(g(g({},T),{},{iterations:"rangeArea"===n?t[d].length-1:void 0,isRangeStart:!0}));if("rangeArea"===n){for(var X=this._calculatePathsFrom({series:a,i:d,realIndex:u,prevX:S,prevY:L}),E=this._iterateOverDataPoints(g(g({},T),{},{series:a,xArrj:[v],yArrj:M,y2Arrj:I,pY:w,areaPaths:z.areaPaths,pathsFrom:X,iterations:a[d].length-1,isRangeStart:!1})),Y=z.linePaths.length/2,R=0;R<Y;R++)z.linePaths[R]=E.linePaths[R+Y]+z.linePaths[R];z.linePaths.splice(Y),z.pathFromLine=E.pathFromLine+z.pathFromLine}else z.pathFromArea+="z";this._handlePaths({type:n,realIndex:u,i:d,paths:z}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),c.push(this.elSeries)}if(void 0!==(null===(s=r.config.series[0])||void 0===s?void 0:s.zIndex)&&c.sort((function(t,e){return Number(t.node.getAttribute("zIndex"))-Number(e.node.getAttribute("zIndex"))})),r.config.chart.stacked)for(var F=c.length-1;F>=0;F--)l.add(c[F]);else for(var D=0;D<c.length;D++)l.add(c[D]);return l}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new k(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width;var r=0;this.yRatio.length>1&&(this.yaxisIndex=a.globals.seriesYAxisReverseMap[i],r=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[r]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[r]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",zIndex:void 0!==a.config.series[i].zIndex?a.config.series[i].zIndex:i,seriesName:m.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var o=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":o,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.type,o=t.series,n=t.i,l=t.realIndex,h=t.translationsIndex,c=t.prevX,d=t.prevY,g=t.prevY2,u=this.w,f=new k(this.ctx);if(null===o[n][0]){for(var p=0;p<o[n].length;p++)if(null!==o[n][p]){c=this.xDivision*p,d=this.zeroY-o[n][p]/this.yRatio[h],e=f.move(c,d),i=f.move(c,this.areaBottomY);break}}else e=f.move(c,d),"rangeArea"===r&&(e=f.move(c,g)+f.line(c,d)),i=f.move(c,this.areaBottomY)+f.line(c,d);if(a=f.move(0,this.zeroY)+f.line(0,this.zeroY),s=f.move(0,this.zeroY)+f.line(0,this.zeroY),u.globals.previousPaths.length>0){var x=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:l});a=x.pathFromLine,s=x.pathFromArea}return{prevX:c,prevY:d,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var e=t.type,i=t.realIndex,a=t.i,s=t.paths,r=this.w,o=new k(this.ctx),n=new N(this.ctx);this.prevSeriesY.push(s.yArrj),r.globals.seriesXvalues[i]=s.xArrj,r.globals.seriesYvalues[i]=s.yArrj;var l=r.config.forecastDataPoints;if(l.count>0&&"rangeArea"!==e){var h=r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length-l.count-1],c=o.drawRect(h,0,r.globals.gridWidth,r.globals.gridHeight,0);r.globals.dom.elForecastMask.appendChild(c.node);var d=o.drawRect(0,0,h,r.globals.gridHeight,0);r.globals.dom.elNonForecastMask.appendChild(d.node)}this.pointsChart||r.globals.delayedElements.push({el:this.elPointsMain.node,index:i});var u={i:a,realIndex:i,animationDelay:a,initialSpeed:r.config.chart.animations.speed,dataChangeSpeed:r.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(e)};if("area"===e)for(var f=n.fillPath({seriesNumber:i}),p=0;p<s.areaPaths.length;p++){var x=o.renderPaths(g(g({},u),{},{pathFrom:s.pathFromArea,pathTo:s.areaPaths[p],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:f}));this.elSeries.add(x)}if(r.config.stroke.show&&!this.pointsChart){var b=null;if("line"===e)b=n.fillPath({seriesNumber:i,i:a});else if("solid"===r.config.stroke.fill.type)b=r.globals.stroke.colors[i];else{var v=r.config.fill;r.config.fill=r.config.stroke.fill,b=n.fillPath({seriesNumber:i,i:a}),r.config.fill=v}for(var m=0;m<s.linePaths.length;m++){var y=b;"rangeArea"===e&&(y=n.fillPath({seriesNumber:i}));var w=g(g({},u),{},{pathFrom:s.pathFromLine,pathTo:s.linePaths[m],stroke:b,strokeWidth:this.strokeWidth,strokeLineCap:r.config.stroke.lineCap,fill:"rangeArea"===e?y:"none"}),A=o.renderPaths(w);if(this.elSeries.add(A),A.attr("fill-rule","evenodd"),l.count>0&&"rangeArea"!==e){var S=o.renderPaths(w);S.node.setAttribute("stroke-dasharray",l.dashArray),l.strokeWidth&&S.node.setAttribute("stroke-width",l.strokeWidth),this.elSeries.add(S),S.attr("clip-path","url(#forecastMask".concat(r.globals.cuid,")")),A.attr("clip-path","url(#nonForecastMask".concat(r.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(t){var e,i,a=this,s=t.type,r=t.series,o=t.iterations,n=t.realIndex,l=t.translationsIndex,h=t.i,c=t.x,d=t.y,g=t.pX,u=t.pY,f=t.pathsFrom,p=t.linePaths,x=t.areaPaths,b=t.seriesIndex,v=t.lineYPosition,y=t.xArrj,w=t.yArrj,A=t.y2Arrj,S=t.isRangeStart,C=t.seriesRangeEnd,L=this.w,P=new k(this.ctx),M=this.yRatio,I=f.prevY,T=f.linePath,z=f.areaPath,X=f.pathFromLine,E=f.pathFromArea,Y=m.isNumber(L.globals.minYArr[n])?L.globals.minYArr[n]:L.globals.minY;o||(o=L.globals.dataPoints>1?L.globals.dataPoints-1:L.globals.dataPoints);var R=function(t,e){return e-t/M[l]+2*(a.isReversed?t/M[l]:0)},F=d,D=L.config.chart.stacked&&!L.globals.comboCharts||L.config.chart.stacked&&L.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||"bar"===(null===(e=this.w.config.series[n])||void 0===e?void 0:e.type)||"column"===(null===(i=this.w.config.series[n])||void 0===i?void 0:i.type)),H=L.config.stroke.curve;Array.isArray(H)&&(H=Array.isArray(b)?H[b[h]]:H[h]);for(var O,N=0,W=0;W<o;W++){var B=void 0===r[h][W+1]||null===r[h][W+1];if(L.globals.isXNumeric){var G=L.globals.seriesX[n][W+1];void 0===L.globals.seriesX[n][W+1]&&(G=L.globals.seriesX[n][o-1]),c=(G-L.globals.minX)/this.xRatio}else c+=this.xDivision;if(D)if(h>0&&L.globals.collapsedSeries.length<L.config.series.length-1){v=this.prevSeriesY[function(t){for(var e=t;e>0;e--){if(!(L.globals.collapsedSeriesIndices.indexOf((null==b?void 0:b[e])||e)>-1))return e;e--}return 0}(h-1)][W+1]}else v=this.zeroY;else v=this.zeroY;B?d=R(Y,v):(d=R(r[h][W+1],v),"rangeArea"===s&&(F=R(C[h][W+1],v))),y.push(c),!B||"smooth"!==L.config.stroke.curve&&"monotoneCubic"!==L.config.stroke.curve?(w.push(d),A.push(F)):(w.push(null),A.push(null));var V=this.lineHelpers.calculatePoints({series:r,x:c,y:d,realIndex:n,i:h,j:W,prevY:I}),j=this._createPaths({type:s,series:r,i:h,realIndex:n,j:W,x:c,y:d,y2:F,xArrj:y,yArrj:w,y2Arrj:A,pX:g,pY:u,pathState:N,segmentStartX:O,linePath:T,areaPath:z,linePaths:p,areaPaths:x,curve:H,isRangeStart:S});x=j.areaPaths,p=j.linePaths,g=j.pX,u=j.pY,N=j.pathState,O=j.segmentStartX,z=j.areaPath,T=j.linePath,!this.appendPathFrom||"monotoneCubic"===H&&"rangeArea"===s||(X+=P.line(c,this.zeroY),E+=P.line(c,this.zeroY)),this.handleNullDataPoints(r,V,h,W,n),this._handleMarkersAndLabels({type:s,pointsPos:V,i:h,j:W,realIndex:n,isRangeStart:S})}return{yArrj:w,xArrj:y,pathFromArea:E,areaPaths:x,pathFromLine:X,linePaths:p,linePath:T,areaPath:z}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.type,i=t.pointsPos,a=t.isRangeStart,s=t.i,r=t.j,o=t.realIndex,n=this.w,l=new G(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,r,{realIndex:o,pointsPos:i,zRatio:this.zRatio,elParent:this.elPointsMain});else{n.globals.series[s].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var h=this.markers.plotChartMarkers(i,o,r+1);null!==h&&this.elPointsMain.add(h)}var c=l.drawDataLabel({type:e,isRangeStart:a,pos:i,i:o,j:r+1});null!==c&&this.elDataLabelsWrap.add(c)}},{key:"_createPaths",value:function(t){var e=t.type,i=t.series,a=t.i;t.realIndex;var s,r=t.j,o=t.x,n=t.y,l=t.xArrj,h=t.yArrj,c=t.y2,d=t.y2Arrj,g=t.pX,u=t.pY,f=t.pathState,p=t.segmentStartX,x=t.linePath,b=t.areaPath,v=t.linePaths,m=t.areaPaths,y=t.curve,w=t.isRangeStart,A=new k(this.ctx),S=this.areaBottomY,C="rangeArea"===e,L="rangeArea"===e&&w;switch(y){case"monotoneCubic":var P=w?h:d;switch(f){case 0:if(null===P[r+1])break;f=1;case 1:if(!(C?l.length===i[a].length:r===i[a].length-2))break;case 2:var M=w?l:l.slice().reverse(),I=w?P:P.slice().reverse(),T=(s=I,M.map((function(t,e){return[t,s[e]]})).filter((function(t){return null!==t[1]}))),z=T.length>1?Ft(T):T,X=[];C&&(L?m=T:X=m.reverse());var E=0,Y=0;if(function(t,e){for(var i=function(t){var e=[],i=0;return t.forEach((function(t){null!==t?i++:i>0&&(e.push(i),i=0)})),i>0&&e.push(i),e}(t),a=[],s=0,r=0;s<i.length;r+=i[s++])a[s]=Dt(e,r,r+i[s]);return a}(I,z).forEach((function(t){E++;var e=function(t){for(var e="",i=0;i<t.length;i++){var a=t[i],s=a.length;s>4?(e+="C".concat(a[0],", ").concat(a[1]),e+=", ".concat(a[2],", ").concat(a[3]),e+=", ".concat(a[4],", ").concat(a[5])):s>2&&(e+="S".concat(a[0],", ").concat(a[1]),e+=", ".concat(a[2],", ").concat(a[3]))}return e}(t),i=Y,a=(Y+=t.length)-1;L?x=A.move(T[i][0],T[i][1])+e:C?x=A.move(X[i][0],X[i][1])+A.line(T[i][0],T[i][1])+e+A.line(X[a][0],X[a][1]):(x=A.move(T[i][0],T[i][1])+e,b=x+A.line(T[a][0],S)+A.line(T[i][0],S)+"z",m.push(b)),v.push(x)})),C&&E>1&&!L){var R=v.slice(E).reverse();v.splice(E),R.forEach((function(t){return v.push(t)}))}f=0}break;case"smooth":var F=.35*(o-g);if(null===i[a][r])f=0;else switch(f){case 0:if(p=g,x=L?A.move(g,d[r])+A.line(g,u):A.move(g,u),b=A.move(g,u),null===i[a][r+1]){v.push(x),m.push(b);break}if(f=1,r<i[a].length-2){var D=A.curve(g+F,u,o-F,n,o,n);x+=D,b+=D;break}case 1:if(null===i[a][r+1])x+=L?A.line(g,c):A.move(g,u),b+=A.line(g,S)+A.line(p,S)+"z",v.push(x),m.push(b),f=-1;else{var H=A.curve(g+F,u,o-F,n,o,n);x+=H,b+=H,r>=i[a].length-2&&(L&&(x+=A.curve(o,n,o,n,o,c)+A.move(o,c)),b+=A.curve(o,n,o,n,o,S)+A.line(p,S)+"z",v.push(x),m.push(b),f=-1)}}g=o,u=n;break;default:var O=function(t,e,i){var a=[];switch(t){case"stepline":a=A.line(e,null,"H")+A.line(null,i,"V");break;case"linestep":a=A.line(null,i,"V")+A.line(e,null,"H");break;case"straight":a=A.line(e,i)}return a};if(null===i[a][r])f=0;else switch(f){case 0:if(p=g,x=L?A.move(g,d[r])+A.line(g,u):A.move(g,u),b=A.move(g,u),null===i[a][r+1]){v.push(x),m.push(b);break}if(f=1,r<i[a].length-2){var N=O(y,o,n);x+=N,b+=N;break}case 1:if(null===i[a][r+1])x+=L?A.line(g,c):A.move(g,u),b+=A.line(g,S)+A.line(p,S)+"z",v.push(x),m.push(b),f=-1;else{var W=O(y,o,n);x+=W,b+=W,r>=i[a].length-2&&(L&&(x+=A.line(o,c)),b+=A.line(o,S)+A.line(p,S)+"z",v.push(x),m.push(b),f=-1)}}g=o,u=n}return{linePaths:v,areaPaths:m,pX:g,pY:u,pathState:f,segmentStartX:p,linePath:x,areaPath:b}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var o=this.strokeWidth-r.config.markers.strokeWidth/2;o>0||(o=0);var n=this.markers.plotChartMarkers(e,s,a+1,o,!0);null!==n&&this.elPointsMain.add(n)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,o=r(t)/this.height,n=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+o,s+t[e]/o]),s+=t[e]/o;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/n,s+n]),a+=t[e]/n;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,o=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,o)}return i}}function e(e,a,s,o,n){o=void 0===o?0:o,n=void 0===n?0:n;var l=i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(o,n,a,s),[]);return function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(l)}function i(t,e,s,o){var n,l,h;if(0!==t.length)return n=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),o=a(s,i);return r>=o}(e,l=t[0],n)?(e.push(l),i(t.slice(1),e,s,o)):(h=s.cutArea(r(e),o),o.push(s.getCoordinates(e)),i(t,[],h,o)),o;o.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function o(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=o(t[e]);else i=r(t);return i}return function t(i,a,r,n,l){n=void 0===n?0:n,l=void 0===l?0:l;var h,c,d=[],g=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=o(i[c]);for(h=e(d,a,r,n,l),c=0;c<i.length;c++)g.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else g=e(i,a,r,n,l);return g}}();var Nt,Wt,Bt=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new Pt(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new k(this.ctx),s=new N(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var o=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));o.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach((function(o,n){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:m.escapeString(i.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new w(e.ctx).dropShadow(r,h,n)}var c=a.group({class:"apexcharts-data-labels"});o.forEach((function(r,o){var h=r[0],c=r[1],d=r[2],g=r[3],u=a.drawRect(h,c,d-h,g-c,i.config.plotOptions.treemap.borderRadius,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?p:i.globals.stroke.colors[n]);u.attr({cx:h,cy:c,index:n,i:n,j:o,width:d-h,height:g-c});var f=e.helpers.getShadeColor(i.config.chart.type,n,o,e.negRange),p=f.color;void 0!==i.config.series[n].data[o]&&i.config.series[n].data[o].fillColor&&(p=i.config.series[n].data[o].fillColor);var x=s.fillPath({color:p,seriesNumber:n,dataPointIndex:o});u.node.classList.add("apexcharts-treemap-rect"),u.attr({fill:x}),e.helpers.addListeners(u);var b={x:h+(d-h)/2,y:c+(g-c)/2,width:0,height:0},v={x:h,y:c,width:d-h,height:g-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var m=1;i.globals.resized||(m=i.config.chart.animations.speed),e.animateTreemap(u,b,v,m)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[n]&&i.globals.previousPaths[n][o]&&i.globals.previousPaths[n][o].rect&&(b=i.globals.previousPaths[n][o].rect),e.animateTreemap(u,b,v,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[n][o],{value:i.globals.series[n][o],seriesIndex:n,dataPointIndex:o,w:i});"truncate"===i.config.plotOptions.treemap.dataLabels.format&&(w=parseInt(i.config.dataLabels.style.fontSize,10),k=e.truncateLabels(k,w,h,c,d,g));var A=null;i.globals.series[n][o]&&(A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+g)/2+e.strokeWidth/2+w/3,i:n,j:o,colorProps:f,fontSize:w,series:t})),i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,w,k,h,c,d,g),l.add(u),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i,a,s,r,o=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return i=t[2]-t[0],a=t[3]-t[1],s=i*a,r=Math.pow(s,.5),Math.min(r/o,parseInt(e.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r,o){var n=new k(this.ctx),l=n.getTextRects(i,e);if(l.width+this.w.config.stroke.width+5>r-a&&l.width<=o-s){var h=n.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(h.x," ").concat(h.y,") translate(").concat(l.height/3,")"))}}},{key:"truncateLabels",value:function(t,e,i,a,s,r){var o=new k(this.ctx),n=o.getTextRects(t,e).width+this.w.config.stroke.width+5>s-i&&r-a>s-i?r-a:s-i,l=o.getTextBasedOnMaxWidth({text:t,maxWidth:n,fontSize:e});return t.length!==l.length&&n/e<5?"":l}},{key:"animateTreemap",value:function(t,e,i,a){var s=new y(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),Gt=86400,Vt=10/Gt,jt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return s(t,[{key:"calculateTimeScaleTicks",value:function(t,e){var i=this,a=this.w;if(a.globals.allSeriesCollapsed)return a.globals.labels=[],a.globals.timescaleLabels=[],[];var s=new L(this.ctx),r=(e-t)/864e5;this.determineInterval(r),a.globals.disableZoomIn=!1,a.globals.disableZoomOut=!1,r<Vt?a.globals.disableZoomIn=!0:r>5e4&&(a.globals.disableZoomOut=!0);var o=s.getTimeUnitsfromTimestamp(t,e,this.utc),n=a.globals.gridWidth/r,l=n/24,h=l/60,c=h/60,d=Math.floor(24*r),u=Math.floor(1440*r),f=Math.floor(r*Gt),p=Math.floor(r),x=Math.floor(r/30),b=Math.floor(r/365),v={minMillisecond:o.minMillisecond,minSecond:o.minSecond,minMinute:o.minMinute,minHour:o.minHour,minDate:o.minDate,minMonth:o.minMonth,minYear:o.minYear},m={firstVal:v,currentMillisecond:v.minMillisecond,currentSecond:v.minSecond,currentMinute:v.minMinute,currentHour:v.minHour,currentMonthDate:v.minDate,currentDate:v.minDate,currentMonth:v.minMonth,currentYear:v.minYear,daysWidthOnXAxis:n,hoursWidthOnXAxis:l,minutesWidthOnXAxis:h,secondsWidthOnXAxis:c,numberOfSeconds:f,numberOfMinutes:u,numberOfHours:d,numberOfDays:p,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(m);break;case"months":case"half_year":this.generateMonthScale(m);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(m);break;case"hours":this.generateHourScale(m);break;case"minutes_fives":case"minutes":this.generateMinuteScale(m);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(m)}var y=this.timeScaleArray.map((function(t){var e={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?g(g({},e),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?g(g({},e),{},{value:t.value}):"minute"===t.unit?g(g({},e),{},{value:t.value,minute:t.value}):"second"===t.unit?g(g({},e),{},{value:t.value,minute:t.minute,second:t.second}):t}));return y.filter((function(t){var e=1,s=Math.ceil(a.globals.gridWidth/120),r=t.value;void 0!==a.config.xaxis.tickAmount&&(s=a.config.xaxis.tickAmount),y.length>s&&(e=Math.floor(y.length/s));var o=!1,n=!1;switch(i.tickInterval){case"years":"year"===t.unit&&(o=!0);break;case"half_year":e=7,"year"===t.unit&&(o=!0);break;case"months":e=1,"year"===t.unit&&(o=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(o=!0),30===r&&(n=!0);break;case"months_days":e=10,"month"===t.unit&&(o=!0),30===r&&(n=!0);break;case"week_days":e=8,"month"===t.unit&&(o=!0);break;case"days":e=1,"month"===t.unit&&(o=!0);break;case"hours":"day"===t.unit&&(o=!0);break;case"minutes_fives":case"seconds_fives":r%5!=0&&(n=!0);break;case"seconds_tens":r%10!=0&&(n=!0)}if("hours"===i.tickInterval||"minutes_fives"===i.tickInterval||"seconds_tens"===i.tickInterval||"seconds_fives"===i.tickInterval){if(!n)return!0}else if((r%e==0||o)&&!n)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new ct(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){var e=24*t,i=60*e;switch(!0){case t/365>5:this.tickInterval="years";break;case t>800:this.tickInterval="half_year";break;case t>180:this.tickInterval="months";break;case t>90:this.tickInterval="months_fortnight";break;case t>60:this.tickInterval="months_days";break;case t>30:this.tickInterval="week_days";break;case t>2:this.tickInterval="days";break;case e>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,o=e.minYear,n=0,l=new L(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);n=(l.determineDaysOfYear(e.minYear)-c+1)*s,o=e.minYear+1,this.timeScaleArray.push({position:n,value:o,unit:h,year:o,month:m.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:n,value:o,unit:h,year:a,month:m.monthMod(i+1)});for(var d=o,g=n,u=0;u<r;u++)d++,g=l.determineDaysOfYear(d-1)*s+g,this.timeScaleArray.push({position:g,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,o=t.numberOfMonths,n=a,l=0,h=new L(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,n=m.monthMod(a+1);var g=s+d,u=m.monthMod(n),f=n;0===n&&(c="year",f=g,u=1,g+=d+=1),this.timeScaleArray.push({position:l,value:f,unit:c,year:g,month:u})}else this.timeScaleArray.push({position:l,value:n,unit:c,year:s,month:m.monthMod(a)});for(var p=n+1,x=l,b=0,v=1;b<o;b++,v++){0===(p=m.monthMod(p))?(c="year",d+=1):c="month";var y=this._getYear(s,p,d);x=h.determineDaysOfMonths(p,y)*r+x;var w=0===p?y:p;this.timeScaleArray.push({position:x,value:w,unit:c,year:y,month:0===p?1:p}),p++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,o=new L(this.ctx),n="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>o.determineDaysOfMonths(e+1,i)?(h=1,n="month",g=e+=1,e):e},d=(24-e.minHour)*s,g=l,u=c(h,i,a);0===e.minHour&&1===e.minDate?(d=0,g=m.monthMod(e.minMonth),n="month",h=e.minDate):1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0,l=e.minDate,g=l,u=c(h=l,i,a)),this.timeScaleArray.push({position:d,value:g,unit:n,year:this._getYear(a,u,0),month:m.monthMod(u),day:h});for(var f=d,p=0;p<r;p++){n="day",u=c(h+=1,u,this._getYear(a,u,0));var x=this._getYear(a,u,0);f=24*s+f;var b=1===h?m.monthMod(u):h;this.timeScaleArray.push({position:f,value:b,unit:n,year:x,month:m.monthMod(u),day:b})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,o=t.numberOfHours,n=new L(this.ctx),l="hour",h=function(t,e){return t>n.determineDaysOfMonths(e+1,s)&&(p=1,e+=1),{month:e,date:p}},c=function(t,e){return t>n.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),g=d*r,u=e.minHour+1,f=u;60===d&&(g=0,f=u=e.minHour);var p=i;f>=24&&(f=0,p+=1,l="day");var x=h(p,a).month;x=c(p,x),this.timeScaleArray.push({position:g,value:u,unit:l,day:p,hour:f,year:s,month:m.monthMod(x)}),f++;for(var b=g,v=0;v<o;v++){if(l="hour",f>=24)f=0,l="day",x=h(p+=1,x).month,x=c(p,x);var y=this._getYear(s,x,0);b=60*r+b;var w=0===f?p:f;this.timeScaleArray.push({position:b,value:w,unit:l,hour:f,day:p,year:y,month:m.monthMod(x)}),f++}}},{key:"generateMinuteScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.minutesWidthOnXAxis,h=t.secondsWidthOnXAxis,c=t.numberOfMinutes,d=a+1,g=r,u=o,f=n,p=s,x=(60-i-e/1e3)*h,b=0;b<c;b++)d>=60&&(d=0,24===(p+=1)&&(p=0)),this.timeScaleArray.push({position:x,value:d,unit:"minute",hour:p,minute:d,day:g,year:this._getYear(f,u,0),month:m.monthMod(u)}),x+=l,d++}},{key:"generateSecondScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.secondsWidthOnXAxis,h=t.numberOfSeconds,c=i+1,d=a,g=r,u=o,f=n,p=s,x=(1e3-e)/1e3*l,b=0;b<h;b++)c>=60&&(c=0,++d>=60&&(d=0,24===++p&&(p=0))),this.timeScaleArray.push({position:x,value:c,unit:"second",hour:p,minute:d,second:c,day:g,year:this._getYear(f,u,0),month:m.monthMod(u)}),x+=l,c++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return 0===t.month&&(t.month=1),i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),"minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"),"second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new L(e.ctx),r=e.createRawDateString(t,a),o=s.getDate(s.parseDate(r));if(e.utc||(o=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var n="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(n=l.year),"month"===t.unit&&(n=l.month),"day"===t.unit&&(n=l.day),"hour"===t.unit&&(n=l.hour),"minute"===t.unit&&(n=l.minute),"second"===t.unit&&(n=l.second),a=s.formatDate(o,n)}else a=s.formatDate(o,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new k(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,o=t.map((function(o,n){if(n>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return o.position>h+l+10?(r=n,o):null}return o}));return o=o.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),_t=function(){function t(e,a){i(this,t),this.ctx=a,this.w=a.w,this.el=e}return s(t,[{key:"setupElements",value:function(){var t=this.w,e=t.globals,i=t.config,a=i.chart.type;e.axisCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].includes(a),e.xyCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble"].includes(a),e.isBarHorizontal=["bar","rangeBar","boxPlot"].includes(a)&&i.plotOptions.bar.horizontal,e.chartClass=".apexcharts".concat(e.chartID),e.dom.baseEl=this.el,e.dom.elWrap=document.createElement("div"),k.setAttrs(e.dom.elWrap,{id:e.chartClass.substring(1),class:"apexcharts-canvas ".concat(e.chartClass.substring(1))}),this.el.appendChild(e.dom.elWrap),e.dom.Paper=new window.SVG.Doc(e.dom.elWrap),e.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(i.chart.offsetX,", ").concat(i.chart.offsetY,")")}),e.dom.Paper.node.style.background="dark"!==i.theme.mode||i.chart.background?"light"!==i.theme.mode||i.chart.background?i.chart.background:"#fff":"#424242",this.setSVGDimensions(),e.dom.elLegendForeign=document.createElementNS(e.SVGNS,"foreignObject"),k.setAttrs(e.dom.elLegendForeign,{x:0,y:0,width:e.svgWidth,height:e.svgHeight}),e.dom.elLegendWrap=document.createElement("div"),e.dom.elLegendWrap.classList.add("apexcharts-legend"),e.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.dom.elLegendForeign.appendChild(e.dom.elLegendWrap),e.dom.Paper.node.appendChild(e.dom.elLegendForeign),e.dom.elGraphical=e.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),e.dom.elDefs=e.dom.Paper.defs(),e.dom.Paper.add(e.dom.elGraphical),e.dom.elGraphical.add(e.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=this.ctx,s=i.config,r=i.globals,o={line:{series:[],i:[]},area:{series:[],i:[]},scatter:{series:[],i:[]},bubble:{series:[],i:[]},column:{series:[],i:[]},candlestick:{series:[],i:[]},boxPlot:{series:[],i:[]},rangeBar:{series:[],i:[]},rangeArea:{series:[],seriesRangeEnd:[],i:[]}},n=s.chart.type||"line",l=null,h=0;r.series.forEach((function(e,a){var s=t[a].type||n;o[s]?("rangeArea"===s?(o[s].series.push(r.seriesRangeStart[a]),o[s].seriesRangeEnd.push(r.seriesRangeEnd[a])):o[s].series.push(e),o[s].i.push(a),"column"!==s&&"bar"!==s||(i.globals.columnSeries=o.column)):["heatmap","treemap","pie","donut","polarArea","radialBar","radar"].includes(s)?l=s:"bar"===s?(o.column.series.push(e),o.column.i.push(a)):console.warn("You have specified an unrecognized series type (".concat(s,").")),n!==s&&"scatter"!==s&&h++})),h>0&&(l&&console.warn("Chart or series type ".concat(l," cannot appear with other chart or series types.")),o.column.series.length>0&&s.plotOptions.bar.horizontal&&(h-=o.column.series.length,o.column={series:[],i:[]},i.globals.columnSeries={series:[],i:[]},console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))),r.comboCharts||(r.comboCharts=h>0);var c=new Ot(a,e),d=new Lt(a,e);a.pie=new Tt(a);var g=new Xt(a);a.rangeBar=new Et(a,e);var u=new zt(a),f=[];if(r.comboCharts){var x,b,v=new A(a);if(o.area.series.length>0)(x=f).push.apply(x,p(v.drawSeriesByGroup(o.area,r.areaGroups,"area",c)));if(o.column.series.length>0)if(s.chart.stacked){var m=new Ct(a,e);f.push(m.draw(o.column.series,o.column.i))}else a.bar=new St(a,e),f.push(a.bar.draw(o.column.series,o.column.i));if(o.rangeArea.series.length>0&&f.push(c.draw(o.rangeArea.series,"rangeArea",o.rangeArea.i,o.rangeArea.seriesRangeEnd)),o.line.series.length>0)(b=f).push.apply(b,p(v.drawSeriesByGroup(o.line,r.lineGroups,"line",c)));if(o.candlestick.series.length>0&&f.push(d.draw(o.candlestick.series,"candlestick",o.candlestick.i)),o.boxPlot.series.length>0&&f.push(d.draw(o.boxPlot.series,"boxPlot",o.boxPlot.i)),o.rangeBar.series.length>0&&f.push(a.rangeBar.draw(o.rangeBar.series,o.rangeBar.i)),o.scatter.series.length>0){var y=new Ot(a,e,!0);f.push(y.draw(o.scatter.series,"scatter",o.scatter.i))}if(o.bubble.series.length>0){var w=new Ot(a,e,!0);f.push(w.draw(o.bubble.series,"bubble",o.bubble.i))}}else switch(s.chart.type){case"line":f=c.draw(r.series,"line");break;case"area":f=c.draw(r.series,"area");break;case"bar":if(s.chart.stacked)f=new Ct(a,e).draw(r.series);else a.bar=new St(a,e),f=a.bar.draw(r.series);break;case"candlestick":f=new Lt(a,e).draw(r.series,"candlestick");break;case"boxPlot":f=new Lt(a,e).draw(r.series,s.chart.type);break;case"rangeBar":f=a.rangeBar.draw(r.series);break;case"rangeArea":f=c.draw(r.seriesRangeStart,"rangeArea",void 0,r.seriesRangeEnd);break;case"heatmap":f=new Mt(a,e).draw(r.series);break;case"treemap":f=new Bt(a,e).draw(r.series);break;case"pie":case"donut":case"polarArea":f=a.pie.draw(r.series);break;case"radialBar":f=g.draw(r.series);break;case"radar":f=u.draw(r.series);break;default:f=c.draw(r.series)}return f}},{key:"setSVGDimensions",value:function(){var t=this.w,e=t.globals,i=t.config;i.chart.width=i.chart.width||"100%",i.chart.height=i.chart.height||"auto",e.svgWidth=i.chart.width,e.svgHeight=i.chart.height;var a=m.getDimensions(this.el),s=i.chart.width.toString().split(/[0-9]+/g).pop();"%"===s?m.isNumber(a[0])&&(0===a[0].width&&(a=m.getDimensions(this.el.parentNode)),e.svgWidth=a[0]*parseInt(i.chart.width,10)/100):"px"!==s&&""!==s||(e.svgWidth=parseInt(i.chart.width,10));var r=String(i.chart.height).toString().split(/[0-9]+/g).pop();if("auto"!==e.svgHeight&&""!==e.svgHeight)if("%"===r){var o=m.getDimensions(this.el.parentNode);e.svgHeight=o[1]*parseInt(i.chart.height,10)/100}else e.svgHeight=parseInt(i.chart.height,10);else e.svgHeight=e.axisCharts?e.svgWidth/1.61:e.svgWidth/1.2;if(e.svgWidth=Math.max(e.svgWidth,0),e.svgHeight=Math.max(e.svgHeight,0),k.setAttrs(e.dom.Paper.node,{width:e.svgWidth,height:e.svgHeight}),"%"!==r){var n=i.chart.sparkline.enabled?0:e.axisCharts?i.chart.parentHeightOffset:0;e.dom.Paper.node.parentNode.parentNode.style.minHeight="".concat(e.svgHeight+n,"px")}e.dom.elWrap.style.width="".concat(e.svgWidth,"px"),e.dom.elWrap.style.height="".concat(e.svgHeight,"px")}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i=t.translateX;k.setAttrs(t.dom.elGraphical.node,{transform:"translate(".concat(i,", ").concat(e,")")})}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,["top","bottom"].includes(t.config.legend.position)&&t.config.legend.show&&!t.config.legend.floating&&(i=new gt(this.ctx).legendHelpers.getLegendDimensions().clwh+7);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle){var o=m.getBoundingClientRect(s);r=o.bottom;var n=o.bottom-o.top;r=Math.max(2.05*t.globals.radialSize,n)}var l=Math.ceil(r+e.translateY+i+a);e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),t.config.chart.height&&String(t.config.chart.height).includes("%")||(e.dom.elWrap.style.height="".concat(l,"px"),k.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight="".concat(l,"px"))}},{key:"coreCalculations",value:function(){new J(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(){return[]}))},i=new H,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){return!!(Array.isArray(this.w.config.yaxis)&&this.w.config.yaxis.length>1)&&(this.w.globals.isMultipleYAxis=!0,!0)}},{key:"xySettings",value:function(){var t=this.w,e=null;if(t.globals.axisCharts){if("back"===t.config.xaxis.crosshairs.position&&new it(this.ctx).drawXCrosshairs(),"back"===t.config.yaxis[0].crosshairs.position&&new it(this.ctx).drawYCrosshairs(),"datetime"===t.config.xaxis.type&&void 0===t.config.xaxis.labels.formatter){this.ctx.timeScale=new jt(this.ctx);var i=[];isFinite(t.globals.minX)&&isFinite(t.globals.maxX)&&!t.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minX,t.globals.maxX):t.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minY,t.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}e=new A(this.ctx).getCalculatedRatios()}return e}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,e=this.w;if(e.config.chart.brush.enabled&&"function"!=typeof e.config.chart.events.selection){var i=Array.isArray(e.config.chart.brush.targets)?e.config.chart.brush.targets:[e.config.chart.brush.target];i.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){return t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){return t.updateSourceChart(i)})})),e.config.chart.events.selection=function(t,e){i.forEach((function(t){ApexCharts.getChartByID(t).ctx.updateHelpers._updateOptions({xaxis:{min:e.xaxis.min,max:e.xaxis.max}},!1,!1,!1,!1)}))}}}}]),t}(),Ut=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"_updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new Promise((function(o){var n=[e.ctx];s&&(n=e.ctx.getSyncedCharts()),e.ctx.w.globals.isExecCalled&&(n=[e.ctx],e.ctx.w.globals.isExecCalled=!1),n.forEach((function(s,l){var h=s.w;if(h.globals.shouldAnimate=a,i||(h.globals.resized=!0,h.globals.dataChanged=!0,a&&s.series.getPreviousPaths()),t&&"object"===b(t)&&(s.config=new D(t),t=A.extendArrayProps(s.config,t,h),s.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series,h.config=m.extend(h.config,t),r&&(h.globals.lastXAxis=t.xaxis?m.clone(t.xaxis):[],h.globals.lastYAxis=t.yaxis?m.clone(t.yaxis):[],h.globals.initialConfig=m.extend({},h.config),h.globals.initialSeries=m.clone(h.config.series),t.series))){for(var c=0;c<h.globals.collapsedSeriesIndices.length;c++){var d=h.config.series[h.globals.collapsedSeriesIndices[c]];h.globals.collapsedSeries[c].data=h.globals.axisCharts?d.data.slice():d}for(var g=0;g<h.globals.ancillaryCollapsedSeriesIndices.length;g++){var u=h.config.series[h.globals.ancillaryCollapsedSeriesIndices[g]];h.globals.ancillaryCollapsedSeries[g].data=h.globals.axisCharts?u.data.slice():u}s.series.emptyCollapsedSeries(h.config.series)}return s.update(t).then((function(){l===n.length-1&&o(s)}))}))}))}},{key:"_updateSeries",value:function(t,e){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s){var r,o=i.w;return o.globals.shouldAnimate=e,o.globals.dataChanged=!0,e&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?(0===(r=t.map((function(t,e){return i._extendSeries(t,e)}))).length&&(r=[{data:[]}]),o.config.series=r):o.config.series=t.slice(),a&&(o.globals.initialConfig.series=m.clone(o.config.series),o.globals.initialSeries=m.clone(o.config.series)),i.ctx.update().then((function(){s(i.ctx)}))}))}},{key:"_extendSeries",value:function(t,e){var i=this.w,a=i.config.series[e];return g(g({},i.config.series[e]),{},{name:t.name?t.name:null==a?void 0:a.name,color:t.color?t.color:null==a?void 0:a.color,type:t.type?t.type:null==a?void 0:a.type,group:t.group?t.group:null==a?void 0:a.group,hidden:void 0!==t.hidden?t.hidden:null==a?void 0:a.hidden,data:t.data?t.data:null==a?void 0:a.data,zIndex:void 0!==t.zIndex?t.zIndex:e})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")).members[0]:void 0===e&&(a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(t,"']")).members[0],"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new k(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new F(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){return t.chart&&t.chart.stacked&&"100%"===t.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),t}();Nt="undefined"!=typeof window?window:void 0,Wt=function(t,e){var i=(void 0!==this?this:t).SVG=function(t){if(i.supported)return t=new i.Doc(t),i.parser.draw||i.prepare(),t};if(i.ns="http://www.w3.org/2000/svg",i.xmlns="http://www.w3.org/2000/xmlns/",i.xlink="http://www.w3.org/1999/xlink",i.svgjs="http://svgjs.dev",i.supported=!0,!i.supported)return!1;i.did=1e3,i.eid=function(t){return"Svgjs"+c(t)+i.did++},i.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},i.extend=function(){var t,e;e=(t=[].slice.call(arguments)).pop();for(var a=t.length-1;a>=0;a--)if(t[a])for(var s in e)t[a].prototype[s]=e[s];i.Set&&i.Set.inherit&&i.Set.inherit()},i.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,i.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&i.extend(e,t.extend),t.construct&&i.extend(t.parent||i.Container,t.construct),e},i.adopt=function(e){return e?e.instance?e.instance:((a="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new i.Nested:new i.Doc:"linearGradient"==e.nodeName?new i.Gradient("linear"):"radialGradient"==e.nodeName?new i.Gradient("radial"):i[c(e.nodeName)]?new(i[c(e.nodeName)]):new i.Element(e)).type=e.nodeName,a.node=e,e.instance=a,a instanceof i.Doc&&a.namespace().defs(),a.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),a):null;var a},i.prepare=function(){var t=e.getElementsByTagName("body")[0],a=(t?new i.Doc(t):i.adopt(e.documentElement).nested()).size(2,0);i.parser={body:t||e.documentElement,draw:a.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:a.polyline().node,path:a.path().node,native:i.create("svg")}},i.parser={native:i.create("svg")},e.addEventListener("DOMContentLoaded",(function(){i.parser.draw||i.prepare()}),!1),i.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},i.utils={map:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)a.push(e(t[s]));return a},filter:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)e(t[s])&&a.push(t[s]);return a},filterSVGElements:function(e){return this.filter(e,(function(e){return e instanceof t.SVGElement}))}},i.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},i.Color=function(t){var e,a;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?i.regex.isRgb.test(t)?(e=i.regex.rgb.exec(t.replace(i.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):i.regex.isHex.test(t)&&(e=i.regex.hex.exec(4==(a=t).length?["#",a.substring(1,2),a.substring(1,2),a.substring(2,3),a.substring(2,3),a.substring(3,4),a.substring(3,4)].join(""):a),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"===b(t)&&(this.r=t.r,this.g=t.g,this.b=t.b))},i.extend(i.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+d(this.r)+d(this.g)+d(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new i.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new i.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),i.Color.test=function(t){return t+="",i.regex.isHex.test(t)||i.regex.isRgb.test(t)},i.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},i.Color.isColor=function(t){return i.Color.isRgb(t)||i.Color.test(t)},i.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},i.extend(i.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)}}),i.PointArray=function(t,e){i.Array.call(this,t,e||[[0,0]])},i.PointArray.prototype=new i.Array,i.PointArray.prototype.constructor=i.PointArray;for(var a={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]}},s="mlhvqtcsaz".split(""),r=0,o=s.length;r<o;++r)a[s[r]]=function(t){return function(e,i,s){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,o=e.length;r<o;++r)e[r]=e[r]+(r%2?i.y:i.x);if(a&&"function"==typeof a[t])return a[t](e,i,s)}}(s[r].toUpperCase());i.PathArray=function(t,e){i.Array.call(this,t,e||[["M",0,0]])},i.PathArray.prototype=new i.Array,i.PathArray.prototype.constructor=i.PathArray,i.extend(i.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,a="";e<i;e++)a+=t[e][0],null!=t[e][1]&&(a+=t[e][1],null!=t[e][2]&&(a+=" ",a+=t[e][2],null!=t[e][3]&&(a+=" ",a+=t[e][3],a+=" ",a+=t[e][4],null!=t[e][5]&&(a+=" ",a+=t[e][5],a+=" ",a+=t[e][6],null!=t[e][7]&&(a+=" ",a+=t[e][7])))));return a+" "}(this.value)},move:function(t,e){var i=this.bbox();return i.x,i.y,this},at:function(t){if(!this.destination)return this;for(var e=this.value,a=this.destination.value,s=[],r=new i.PathArray,o=0,n=e.length;o<n;o++){s[o]=[e[o][0]];for(var l=1,h=e[o].length;l<h;l++)s[o][l]=e[o][l]+(a[o][l]-e[o][l])*t;"A"===s[o][0]&&(s[o][4]=+(0!=s[o][4]),s[o][5]=+(0!=s[o][5]))}return r.value=s,r},parse:function(t){if(t instanceof i.PathArray)return t.valueOf();var e,s={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(i.regex.numbersWithDots,l).replace(i.regex.pathLetters," $& ").replace(i.regex.hyphen,"$1 -").trim().split(i.regex.delimiter):t.reduce((function(t,e){return[].concat.call(t,e)}),[]);var r=[],o=new i.Point,n=new i.Point,h=0,c=t.length;do{i.regex.isPathLetter.test(t[h])?(e=t[h],++h):"M"==e?e="L":"m"==e&&(e="l"),r.push(a[e].call(null,t.slice(h,h+=s[e.toUpperCase()]).map(parseFloat),o,n))}while(c>h);return r},bbox:function(){return i.parser.draw||i.prepare(),i.parser.path.setAttribute("d",this.toString()),i.parser.path.getBBox()}}),i.Number=i.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(i.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof i.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new i.Number(t),new i.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new i.Number(t),new i.Number(this-t,this.unit||t.unit)},times:function(t){return t=new i.Number(t),new i.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new i.Number(t),new i.Number(this/t,this.unit||t.unit)},to:function(t){var e=new i.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new i.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new i.Number(this.destination).minus(this).times(t).plus(this):this}}}),i.Element=i.invent({create:function(t){this._stroke=i.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var a=g(this,t,e);return this.width(new i.Number(a.width)).height(new i.Number(a.height))},clone:function(t){this.writeDataToDom();var e=p(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(i.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!=t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return i.get(this.attr(t))},parent:function(e){var a=this;if(!a.node.parentNode)return null;if(a=i.adopt(a.node.parentNode),!e)return a;for(;a&&a.node instanceof t.SVGElement;){if("string"==typeof e?a.matches(e):a instanceof e)return a;if(!a.node.parentNode||"#document"==a.node.parentNode.nodeName)return null;a=i.adopt(a.node.parentNode)}},doc:function(){return this instanceof i.Doc?this:this.parent(i.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var a=e.createElementNS("http://www.w3.org/2000/svg","svg");if(!(t&&this instanceof i.Parent))return a.appendChild(t=e.createElementNS("http://www.w3.org/2000/svg","svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),a.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");a.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var s=0,r=a.firstChild.childNodes.length;s<r;s++)this.node.appendChild(a.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each((function(){this.writeDataToDom()})),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),i.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},i.morph=function(t){return function(e,a){return new i.MorphObj(e,a).at(t)}},i.Situation=i.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new i.Number(t.duration).valueOf(),this.delay=new i.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),i.FX=i.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,a){"object"===b(t)&&(e=t.ease,a=t.delay,t=t.duration);var s=new i.Situation({duration:t||1e3,delay:a||0,ease:i.easing[e||"-"]||e});return this.queue(s),this},target:function(t){return t&&t instanceof i.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof i.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof i.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(var a in e.animations){t=this.target()[a](),Array.isArray(t)||(t=[t]),Array.isArray(e.animations[a])||(e.animations[a]=[e.animations[a]]);for(var s=t.length;s--;)e.animations[a][s]instanceof i.Number&&(t[s]=new i.Number(t[s])),e.animations[a][s]=t[s].morph(e.animations[a][s])}for(var a in e.attrs)e.attrs[a]=new i.MorphObj(this.target().attr(a),e.attrs[a]);for(var a in e.styles)e.styles[a]=new i.MorphObj(this.target().style(a),e.styles[a]);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(t){var e=this.last();return this.target().on("finished.fx",(function i(a){a.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))})),this._callStart()},during:function(t){var e=this.last(),a=function(a){a.detail.situation==e&&t.call(this,a.detail.pos,i.morph(a.detail.pos),a.detail.eased,e)};return this.target().off("during.fx",a).on("during.fx",a),this.after((function(){this.off("during.fx",a)})),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,a;t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,a=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,a=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var s=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=s&&(this.situation.once[r].call(this.target(),this.pos,s),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:s,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=s,this):this},eachAt:function(){var t,e=this,a=this.target(),s=this.situation;for(var r in s.animations)t=[].concat(s.animations[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),a[r].apply(a,t);for(var r in s.attrs)t=[r].concat(s.attrs[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),a.attr.apply(a,t);for(var r in s.styles)t=[r].concat(s.styles[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),a.style.apply(a,t);if(s.transforms.length){t=s.initialTransformation,r=0;for(var o=s.transforms.length;r<o;r++){var n=s.transforms[r];n instanceof i.Matrix?t=n.relative?t.multiply((new i.Matrix).morph(n).at(s.ease(this.pos))):t.morph(n).at(s.ease(this.pos)):(n.relative||n.undo(t.extract()),t=t.multiply(n.at(s.ease(this.pos))))}a.matrix(t)}return this},once:function(t,e,i){var a=this.last();return i||(t=a.ease(t)),a.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:i.Element,construct:{animate:function(t,e,a){return(this.fx||(this.fx=new i.FX(this))).animate(t,e,a)},delay:function(t){return(this.fx||(this.fx=new i.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),i.MorphObj=i.invent({create:function(t,e){return i.Color.isColor(e)?new i.Color(t).morph(e):i.regex.delimiter.test(t)?i.regex.pathLetters.test(t)?new i.PathArray(t).morph(e):new i.Array(t).morph(e):i.regex.numberAndUnit.test(e)?new i.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),i.extend(i.FX,{attr:function(t,e,i){if("object"===b(t))for(var a in t)this.attr(a,t[a]);else this.add(t,e,"attrs");return this},plot:function(t,e,i,a){return 4==arguments.length?this.plot([t,e,i,a]):this.add("plot",new(this.target().morphArray)(t))}}),i.Box=i.invent({create:function(t,e,a,s){if(!("object"!==b(t)||t instanceof i.Element))return i.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);var r;4==arguments.length&&(this.x=t,this.y=e,this.width=a,this.height=s),null==(r=this).x&&(r.x=0,r.y=0,r.width=0,r.height=0),r.w=r.width,r.h=r.height,r.x2=r.x+r.width,r.y2=r.y+r.height,r.cx=r.x+r.width/2,r.cy=r.y+r.height/2}}),i.BBox=i.invent({create:function(t){if(i.Box.apply(this,[].slice.call(arguments)),t instanceof i.Element){var a;try{if(!e.documentElement.contains){for(var s=t.node;s.parentNode;)s=s.parentNode;if(s!=e)throw new Error("Element not in the dom")}a=t.node.getBBox()}catch(e){if(t instanceof i.Shape){i.parser.draw||i.prepare();var r=t.clone(i.parser.draw.instance).show();r&&r.node&&"function"==typeof r.node.getBBox&&(a=r.node.getBBox()),r&&"function"==typeof r.remove&&r.remove()}else a={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}i.Box.call(this,a)}},inherit:i.Box,parent:i.Element,construct:{bbox:function(){return new i.BBox(this)}}}),i.BBox.prototype.constructor=i.BBox,i.Matrix=i.invent({create:function(t){var e=f([1,0,0,1,0,0]);t=null===t?e:t instanceof i.Element?t.matrixify():"string"==typeof t?f(t.split(i.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):t&&"object"===b(t)?t:e;for(var a=v.length-1;a>=0;--a)this[v[a]]=null!=t[v[a]]?t[v[a]]:e[v[a]]},extend:{extract:function(){var t=u(this,0,1);u(this,1,0);var e=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new i.Matrix(this)}},clone:function(){return new i.Matrix(this)},morph:function(t){return this.destination=new i.Matrix(t),this},multiply:function(t){return new i.Matrix(this.native().multiply(function(t){return t instanceof i.Matrix||(t=new i.Matrix(t)),t}(t).native()))},inverse:function(){return new i.Matrix(this.native().inverse())},translate:function(t,e){return new i.Matrix(this.native().translate(t||0,e||0))},native:function(){for(var t=i.parser.native.createSVGMatrix(),e=v.length-1;e>=0;e--)t[v[e]]=this[v[e]];return t},toString:function(){return"matrix("+x(this.a)+","+x(this.b)+","+x(this.c)+","+x(this.d)+","+x(this.e)+","+x(this.f)+")"}},parent:i.Element,construct:{ctm:function(){return new i.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof i.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new i.Matrix(e)}return new i.Matrix(this.node.getScreenCTM())}}}),i.Point=i.invent({create:function(t,e){var i;i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"===b(t)?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=i.x,this.y=i.y},extend:{clone:function(){return new i.Point(this)},morph:function(t,e){return this.destination=new i.Point(t,e),this}}}),i.extend(i.Element,{point:function(t,e){return new i.Point(t,e).transform(this.screenCTM().inverse())}}),i.extend(i.Element,{attr:function(t,e,a){if(null==t){for(t={},a=(e=this.node.attributes).length-1;a>=0;a--)t[e[a].nodeName]=i.regex.isNumber.test(e[a].nodeValue)?parseFloat(e[a].nodeValue):e[a].nodeValue;return t}if("object"===b(t))for(var s in t)this.attr(s,t[s]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?i.defaults.attrs[t]:i.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(i.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof i.Image&&(e=this.doc().defs().pattern(0,0,(function(){this.add(e)})))),"number"==typeof e?e=new i.Number(e):i.Color.isColor(e)?e=new i.Color(e):Array.isArray(e)&&(e=new i.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof a?this.node.setAttributeNS(a,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),i.extend(i.Element,{transform:function(t,e){var a;return"object"!==b(t)?(a=new i.Matrix(this).extract(),"string"==typeof t?a[t]:a):(a=new i.Matrix(this),e=!!e||!!t.relative,null!=t.a&&(a=e?a.multiply(new i.Matrix(t)):new i.Matrix(t)),this.attr("transform",a))}}),i.extend(i.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(i.regex.transforms).slice(0,-1).map((function(t){var e=t.trim().split("(");return[e[0],e[1].split(i.regex.delimiter).map((function(t){return parseFloat(t)}))]})).reduce((function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])}),new i.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),i.Transformation=i.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var i=0,a=this.arguments.length;i<a;++i)this[this.arguments[i]]=t[i];else if(t&&"object"===b(t))for(i=0,a=this.arguments.length;i<a;++i)this[this.arguments[i]]=t[this.arguments[i]];this.inversed=!1,!0===e&&(this.inversed=!0)}}),i.Translate=i.invent({parent:i.Matrix,inherit:i.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),i.extend(i.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===b(t))for(var a in t)this.style(a,t[a]);else{if(!i.regex.isCss.test(t))return this.node.style[h(t)];for(t=t.split(/\s*;\s*/).filter((function(t){return!!t})).map((function(t){return t.split(/\s*:\s*/)}));e=t.pop();)this.style(e[0],e[1])}else this.node.style[h(t)]=null===e||i.regex.isBlank.test(e)?"":e;return this}}),i.Parent=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Element,extend:{children:function(){return i.utils.map(i.utils.filterSVGElements(this.node.childNodes),(function(t){return i.adopt(t)}))},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return i.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){for(var a=this.children(),s=0,r=a.length;s<r;s++)a[s]instanceof i.Element&&t.apply(a[s],[s,a]),e&&a[s]instanceof i.Container&&a[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),i.extend(i.Parent,{ungroup:function(t,e){return 0===e||this instanceof i.Defs||this.node==i.parser.draw||(t=t||(this instanceof i.Doc?this:this.parent(i.Parent)),e=e||1/0,this.each((function(){return this instanceof i.Defs?this:this instanceof i.Parent?this.ungroup(t,e-1):this.toParent(t)})),this.node.firstChild||this.remove()),this},flatten:function(t,e){return this.ungroup(t,e)}}),i.Container=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Parent}),i.ViewBox=i.invent({parent:i.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach((function(t){i.Element.prototype[t]=function(e){return i.on(this.node,t,e),this}})),i.listeners=[],i.handlerMap=[],i.listenerId=0,i.on=function(t,e,a,s,r){var o=a.bind(s||t.instance||t),n=(i.handlerMap.indexOf(t)+1||i.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";i.listeners[n]=i.listeners[n]||{},i.listeners[n][l]=i.listeners[n][l]||{},i.listeners[n][l][h]=i.listeners[n][l][h]||{},a._svgjsListenerId||(a._svgjsListenerId=++i.listenerId),i.listeners[n][l][h][a._svgjsListenerId]=o,t.addEventListener(l,o,r||{passive:!1})},i.off=function(t,e,a){var s=i.handlerMap.indexOf(t),r=e&&e.split(".")[0],o=e&&e.split(".")[1],n="";if(-1!=s)if(a){if("function"==typeof a&&(a=a._svgjsListenerId),!a)return;i.listeners[s][r]&&i.listeners[s][r][o||"*"]&&(t.removeEventListener(r,i.listeners[s][r][o||"*"][a],!1),delete i.listeners[s][r][o||"*"][a])}else if(o&&r){if(i.listeners[s][r]&&i.listeners[s][r][o]){for(var l in i.listeners[s][r][o])i.off(t,[r,o].join("."),l);delete i.listeners[s][r][o]}}else if(o)for(var h in i.listeners[s])for(var n in i.listeners[s][h])o===n&&i.off(t,[h,o].join("."));else if(r){if(i.listeners[s][r]){for(var n in i.listeners[s][r])i.off(t,[r,n].join("."));delete i.listeners[s][r]}}else{for(var h in i.listeners[s])i.off(t,h);delete i.listeners[s],delete i.handlerMap[s]}},i.extend(i.Element,{on:function(t,e,a,s){return i.on(this.node,t,e,a,s),this},off:function(t,e){return i.off(this.node,t,e),this},fire:function(e,a){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new i.CustomEvent(e,{detail:a,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),i.Defs=i.invent({create:"defs",inherit:i.Container}),i.G=i.invent({create:"g",inherit:i.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)}},construct:{group:function(){return this.put(new i.G)}}}),i.Doc=i.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,i.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:i.Container,extend:{namespace:function(){return this.attr({xmlns:i.ns,version:"1.1"}).attr("xmlns:xlink",i.xlink,i.xmlns).attr("xmlns:svgjs",i.svgjs,i.xmlns)},defs:function(){var t;return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=i.adopt(t):this._defs=new i.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,i.parser.draw&&!i.parser.draw.parentNode&&this.node.appendChild(i.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=p(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),i.extend(i.Element,{}),i.Gradient=i.invent({create:function(t){this.constructor.call(this,i.create(t+"Gradient")),this.type=t},inherit:i.Container,extend:{at:function(t,e,a){return this.put(new i.Stop).update(t,e,a)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,a){return"transform"==t&&(t="gradientTransform"),i.Container.prototype.attr.call(this,t,e,a)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),i.extend(i.Gradient,i.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new i.Number(t),fy:new i.Number(e)}):this.attr({x1:new i.Number(t),y1:new i.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new i.Number(t),cy:new i.Number(e)}):this.attr({x2:new i.Number(t),y2:new i.Number(e)})}}),i.extend(i.Defs,{gradient:function(t,e){return this.put(new i.Gradient(t)).update(e)}}),i.Stop=i.invent({create:"stop",inherit:i.Element,extend:{update:function(t){return("number"==typeof t||t instanceof i.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new i.Number(t.offset)),this}}}),i.Pattern=i.invent({create:"pattern",inherit:i.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,a){return"transform"==t&&(t="patternTransform"),i.Container.prototype.attr.call(this,t,e,a)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),i.extend(i.Defs,{pattern:function(t,e,a){return this.put(new i.Pattern).update(a).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),i.Shape=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Element}),i.Symbol=i.invent({create:"symbol",inherit:i.Container,construct:{symbol:function(){return this.put(new i.Symbol)}}}),i.Use=i.invent({create:"use",inherit:i.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,i.xlink)}},construct:{use:function(t,e){return this.put(new i.Use).element(t,e)}}}),i.Rect=i.invent({create:"rect",inherit:i.Shape,construct:{rect:function(t,e){return this.put(new i.Rect).size(t,e)}}}),i.Circle=i.invent({create:"circle",inherit:i.Shape,construct:{circle:function(t){return this.put(new i.Circle).rx(new i.Number(t).divide(2)).move(0,0)}}}),i.extend(i.Circle,i.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),i.Ellipse=i.invent({create:"ellipse",inherit:i.Shape,construct:{ellipse:function(t,e){return this.put(new i.Ellipse).size(t,e).move(0,0)}}}),i.extend(i.Ellipse,i.Rect,i.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),i.extend(i.Circle,i.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new i.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new i.Number(t).divide(2))},size:function(t,e){var a=g(this,t,e);return this.rx(new i.Number(a.width).divide(2)).ry(new i.Number(a.height).divide(2))}}),i.Line=i.invent({create:"line",inherit:i.Shape,extend:{array:function(){return new i.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,a,s){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:a,y2:s}:new i.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=g(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,a,s){return i.Line.prototype.plot.apply(this.put(new i.Line),null!=t?[t,e,a,s]:[0,0,0,0])}}}),i.Polyline=i.invent({create:"polyline",inherit:i.Shape,construct:{polyline:function(t){return this.put(new i.Polyline).plot(t||new i.PointArray)}}}),i.Polygon=i.invent({create:"polygon",inherit:i.Shape,construct:{polygon:function(t){return this.put(new i.Polygon).plot(t||new i.PointArray)}}}),i.extend(i.Polyline,i.Polygon,{array:function(){return this._array||(this._array=new i.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new i.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=g(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),i.extend(i.Line,i.Polyline,i.Polygon,{morphArray:i.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),i.Path=i.invent({create:"path",inherit:i.Shape,extend:{morphArray:i.PathArray,array:function(){return this._array||(this._array=new i.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new i.PathArray(t))},clear:function(){return delete this._array,this}},construct:{path:function(t){return this.put(new i.Path).plot(t||new i.PathArray)}}}),i.Image=i.invent({create:"image",inherit:i.Shape,extend:{load:function(e){if(!e)return this;var a=this,s=new t.Image;return i.on(s,"load",(function(){i.off(s);var t=a.parent(i.Pattern);null!==t&&(0==a.width()&&0==a.height()&&a.size(s.width,s.height),t&&0==t.width()&&0==t.height()&&t.size(a.width(),a.height()),"function"==typeof a._loaded&&a._loaded.call(a,{width:s.width,height:s.height,ratio:s.width/s.height,url:e}))})),i.on(s,"error",(function(t){i.off(s),"function"==typeof a._error&&a._error.call(a,t)})),this.attr("href",s.src=this.src=e,i.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,a){return this.put(new i.Image).load(t).size(e||0,a||e||0)}}}),i.Text=i.invent({create:function(){this.constructor.call(this,i.create("text")),this.dom.leading=new i.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",i.defaults.attrs["font-family"])},inherit:i.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,a=0,s=e.length;a<s;++a)0!=a&&3!=e[a].nodeType&&1==i.adopt(e[a]).dom.newLined&&(t+="\n"),t+=e[a].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{a=0;for(var r=(t=t.split("\n")).length;a<r;a++)this.tspan(t[a]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new i.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=i.utils.map(i.utils.filterSVGElements(t.childNodes),(function(t){return i.adopt(t)}));return new i.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,a=0,s=this.dom.leading*new i.Number(this.attr("font-size"));this.lines().each((function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?a+=s:(this.attr("dy",s+a),a=0))})),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new i.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new i.Text).text(t)},plain:function(t){return this.put(new i.Text).plain(t)}}}),i.Tspan=i.invent({create:"tspan",inherit:i.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(i.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),i.extend(i.Text,i.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,a=new i.Tspan;return!1===this._build&&this.clear(),e.appendChild(a.node),a.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),i.TextPath=i.invent({create:"textPath",inherit:i.Parent,parent:i.Text,construct:{morphArray:i.PathArray,array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return i.adopt(this.node.firstChild)}}}),i.Nested=i.invent({create:function(){this.constructor.call(this,i.create("svg")),this.style("overflow","visible")},inherit:i.Container,construct:{nested:function(){return this.put(new i.Nested)}}});var n={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function l(t,e,a,s){return a+s.replace(i.regex.dots," .")}function h(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function g(t,e,i){if(null==e||null==i){var a=t.bbox();null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)}return{width:e,height:i}}function u(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function p(e){for(var a=e.childNodes.length-1;a>=0;a--)e.childNodes[a]instanceof t.SVGElement&&p(e.childNodes[a]);return i.adopt(e).id(i.eid(e.nodeName))}function x(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach((function(t){var e={};e[t]=function(e){if(void 0===e)return this;if("string"==typeof e||i.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t,e);else for(var a=n[t].length-1;a>=0;a--)null!=e[n[t][a]]&&this.attr(n.prefix(t,n[t][a]),e[n[t][a]]);return this},i.extend(i.Element,i.FX,e)})),i.extend(i.Element,i.FX,{translate:function(t,e){return this.transform({x:t,y:e})},matrix:function(t){return this.attr("transform",new i.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new i.Number(t).plus(this instanceof i.FX?0:this.x()),!0)},dy:function(t){return this.y(new i.Number(t).plus(this instanceof i.FX?0:this.y()),!0)}}),i.extend(i.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),i.Set=i.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){for(var t=[].slice.call(arguments),e=0,i=t.length;e<i;e++)this.members.push(t[e]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(t){return new i.Set(t)}}}),i.FX.Set=i.invent({create:function(t){this.set=t}}),i.Set.inherit=function(){var t=[];for(var e in i.Shape.prototype)"function"==typeof i.Shape.prototype[e]&&"function"!=typeof i.Set.prototype[e]&&t.push(e);for(var e in t.forEach((function(t){i.Set.prototype[t]=function(){for(var e=0,a=this.members.length;e<a;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new i.FX.Set(this)):this}})),t=[],i.FX.prototype)"function"==typeof i.FX.prototype[e]&&"function"!=typeof i.FX.Set.prototype[e]&&t.push(e);t.forEach((function(t){i.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}}))},i.extend(i.Element,{}),i.extend(i.Element,{remember:function(t,e){if("object"===b(arguments[0]))for(var i in t)this.remember(i,t[i]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),i.get=function(t){var a=e.getElementById(function(t){var e=(t||"").toString().match(i.regex.reference);if(e)return e[1]}(t)||t);return i.adopt(a)},i.select=function(t,a){return new i.Set(i.utils.map((a||e).querySelectorAll(t),(function(t){return i.adopt(t)})))},i.extend(i.Parent,{select:function(t){return i.select(t,this.node)}});var v="abcdef".split("");if("function"!=typeof t.CustomEvent){var m=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),a};m.prototype=t.Event.prototype,i.CustomEvent=m}else i.CustomEvent=t.CustomEvent;return i}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Wt(Nt,Nt.document)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined,
/*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",function(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a})}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),r(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),r(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),r(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,s,r,o,n,l,h){for(var c=t.slice(s,r||h),d=o.slice(n,l||h),g=0,u={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(f,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(f,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(f,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":e=function(t,e){var i,a,s,r,o,n,l,h,c,d,g,u,f,p,x,b,v,m,y,w,k,A,S,C,L,P,M=Math.abs(e[1]),I=Math.abs(e[2]),T=e[3]%360,z=e[4],X=e[5],E=e[6],Y=e[7],R=new SVG.Point(t),F=new SVG.Point(E,Y),D=[];if(0===M||0===I||R.x===F.x&&R.y===F.y)return[["C",R.x,R.y,F.x,F.y,F.x,F.y]];i=new SVG.Point((R.x-F.x)/2,(R.y-F.y)/2).transform((new SVG.Matrix).rotate(T)),(a=i.x*i.x/(M*M)+i.y*i.y/(I*I))>1&&(M*=a=Math.sqrt(a),I*=a);s=(new SVG.Matrix).rotate(T).scale(1/M,1/I).rotate(-T),R=R.transform(s),F=F.transform(s),r=[F.x-R.x,F.y-R.y],n=r[0]*r[0]+r[1]*r[1],o=Math.sqrt(n),r[0]/=o,r[1]/=o,l=n<4?Math.sqrt(1-n/4):0,z===X&&(l*=-1);h=new SVG.Point((F.x+R.x)/2+l*-r[1],(F.y+R.y)/2+l*r[0]),c=new SVG.Point(R.x-h.x,R.y-h.y),d=new SVG.Point(F.x-h.x,F.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);X&&g>u&&(u+=2*Math.PI);!X&&g<u&&(u-=2*Math.PI);for(p=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],v=g,f=(u-g)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(v),m=Math.sin(v),w=new SVG.Point(h.x+y,h.y+m),b[k]=[new SVG.Point(w.x+x*m,w.y-x*y),w,new SVG.Point(w.x-x*m,w.y+x*y)],v+=f;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(T).scale(M,I).rotate(-T),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,E=(w=b[k][1]).x,Y=w.y,D.push(["C",S,C,L,P,E,Y]);return D}(this.pos,t),t=e[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,o=0,n=!1,l=!1;!1!==r||!1!==o;){var h;n=s(i,!1!==r&&r+1),l=s(a,!1!==o&&o+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===o&&(o=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,n,a,o,l);i=i.slice(0,r).concat(c.start,!1===n?[]:i.slice(n)),a=a.slice(0,o).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==n&&r+c.start.length,o=!1!==l&&o+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t)})),this.el.on("touchstart.drag",(function(t){i.start(t)}))},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t)})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t)})),SVG.on(window,"mouseup.drag",(function(t){e.end(t)})),SVG.on(window,"touchend.drag",(function(t){e.end(t)})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,o=i.x-this.startPoints.point.x,n=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&a<r.minX?o=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(o=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?n=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(n=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,o-=o%r.snapToGrid,n-=n%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:n},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return{x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}}}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var o=this.options[r[s]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===r[s]&&(o=o?a:[]),this.options[r[s]]=o}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return[e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i})}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r)}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])}))},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y)})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20)}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),o=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(o)})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints)}))}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t})},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r)}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler()}))},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rb.resize",(function(t){e.resize(t||window.event)})),this.el.on("lb.resize",(function(t){e.resize(t||window.event)})),this.el.on("t.resize",(function(t){e.resize(t||window.event)})),this.el.on("r.resize",(function(t){e.resize(t||window.event)})),this.el.on("b.resize",(function(t){e.resize(t||window.event)})),this.el.on("l.resize",(function(t){e.resize(t||window.event)})),this.el.on("rot.resize",(function(t){e.resize(t||window.event)})),this.el.on("point.resize",(function(t){e.resize(t||window.event)})),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"touchend.resize",(function(){e.done()})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"mouseup.resize",(function(){e.done()}))},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,o=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s),void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s),void 0!==o.minY&&r+e<o.minY&&(e=o.minY-r),void 0!==o.maxY&&r+e>o.maxY&&(e=o.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],o=s/r;return o<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),void 0===window.Apex&&(window.Apex={});var qt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","isSeriesHidden","highlightSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new y(this.ctx),this.ctx.axes=new et(this.ctx),this.ctx.core=new _t(this.ctx.el,this.ctx),this.ctx.config=new D({}),this.ctx.data=new _(this.ctx),this.ctx.grid=new Z(this.ctx),this.ctx.graphics=new k(this.ctx),this.ctx.coreUtils=new A(this.ctx),this.ctx.crosshairs=new it(this.ctx),this.ctx.events=new K(this.ctx),this.ctx.exports=new U(this.ctx),this.ctx.fill=new N(this.ctx),this.ctx.localization=new tt(this.ctx),this.ctx.options=new X,this.ctx.responsive=new at(this.ctx),this.ctx.series=new V(this.ctx),this.ctx.theme=new st(this.ctx),this.ctx.formatters=new P(this.ctx),this.ctx.titleSubtitle=new rt(this.ctx),this.ctx.legend=new gt(this.ctx),this.ctx.toolbar=new ut(this.ctx),this.ctx.tooltip=new wt(this.ctx),this.ctx.dimensions=new ct(this.ctx),this.ctx.updateHelpers=new Ut(this.ctx),this.ctx.zoomPanSelection=new ft(this.ctx),this.ctx.w.globals.tooltip=new wt(this.ctx)}}]),t}(),Zt=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(){this.removeClass("*"),this.off(),this.stop()}),!0),t.ungroup(),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elLegendWrap=null,r.elLegendForeign=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectBarMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null}}]),t}(),$t=new WeakMap;var Jt=function(){function t(e,a){i(this,t),this.opts=a,this.ctx=this,this.w=new O(a).init(),this.el=e,this.w.globals.cuid=m.randomId(),this.w.globals.chartID=this.w.config.chart.id?m.escapeString(this.w.config.chart.id):this.w.globals.cuid,new qt(this).initModules(),this.create=m.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return s(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;"function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0)}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),$t.set(e,s)}(t.el.parentNode,t.parentResizeHandler);var s=t.el.getRootNode&&t.el.getRootNode(),r=m.is("ShadowRoot",s),o=t.el.ownerDocument,n=r?s.getElementById("apexcharts-css"):o.getElementById("apexcharts-css");if(!n){var l;(n=document.createElement("style")).id="apexcharts-css",n.textContent='@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,\n.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,\n.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,\n.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n';var h=(null===(l=t.opts.chart)||void 0===l?void 0:l.nonce)||t.w.config.chart.nonce;h&&n.setAttribute("nonce",h),r?s.prepend(n):o.head.appendChild(n)}var c=t.create(t.w.config.series,{});if(!c)return e(t);t.mount(c).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(c)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this,a=this.w;new qt(this).initModules();var s=this.w.globals;(s.noData=!1,s.animationEnded=!1,this.responsive.checkResponsiveConfig(e),a.config.xaxis.convertedCatToNumeric)&&new F(a.config).convertCatToNumericXaxis(a.config,this.ctx);if(null===this.el)return s.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===a.config.chart.type&&(a.config.grid.show=!1,a.config.yaxis[0].show=!1),0===s.svgWidth)return s.animationEnded=!0,null;var r=t;t.forEach((function(t,e){t.hidden&&(r=i.legend.legendHelpers.getSeriesAfterCollapsing({realIndex:e}))}));var o=A.checkComboSeries(r,a.config.chart.type);s.comboCharts=o.comboCharts,s.comboBarCount=o.comboBarCount;var n=r.every((function(t){return t.data&&0===t.data.length}));(0===r.length||n&&s.collapsedSeries.length<1)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(r),this.theme.init(),new W(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),s.noData&&s.collapsedSeries.length!==s.series.length&&!a.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),s.axisCharts&&(this.core.coreCalculations(),"category"!==a.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=a.globals.minX,this.ctx.toolbar.maxX=a.globals.maxX),this.formatters.heatmapLabelFormatters(),new A(this).getLargestMarkerSize(),this.dimensions.plotCoords();var l=this.core.xySettings();this.grid.createGridMask();var h=this.core.plotChartType(r,l),c=new G(this);return c.bringForward(),a.config.dataLabels.background.enabled&&c.dataLabelsBackground(),this.core.shiftGraphPosition(),{elGraph:h,xyRatios:l,dimensions:{plot:{left:a.globals.translateX,top:a.globals.translateY,width:a.globals.gridWidth,height:a.globals.gridHeight}}}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),i.grid=new Z(i);var o,n,l=i.grid.drawGrid();(i.annotations=new E(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position)&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(o=l.elGridBorders)&&void 0!==o&&o.node&&a.globals.dom.elGraphical.add(l.elGridBorders));if(Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);"front"===a.config.grid.position&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(n=l.elGridBorders)&&void 0!==n&&n.node&&a.globals.dom.elGraphical.add(l.elGridBorders));"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,l);var c=new q(t.ctx,l),d=new Q(t.ctx,l);if(null!==l&&(c.xAxisLabelCorrections(l.xAxisTickWidth),d.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&d.yAxisTitleRotate(e,t.opposite)}))),i.annotations.drawAxesAnnotations(),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var g=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){g[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){var t,e;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,t=this.parentResizeHandler,(e=$t.get(t))&&(e.disconnect(),$t.delete(t));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach((function(t,e){t.id===m.escapeString(i)&&Apex._chartInstances.splice(e,1)})),new Zt(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=m.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Zt(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"highlightSeries",value:function(t){this.series.highlightSeries(t)}},{key:"isSeriesHidden",value:function(t){this.series.isSeriesHidden(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new J(this.ctx).getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new J(this.ctx).getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(t){return new U(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new U(this.ctx).exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=m.escapeString(t);if(Apex._chartInstances){var i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),o=2;o<s;o++)r[o-2]=arguments[o];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return m.extend(t,e)}}]),t}();return Jt}));


/***/ }),

/***/ "../../node_modules/assert/assert.js":
/*!******************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/assert/assert.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "../../node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/bind-decorator/index.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/bind-decorator/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),

/***/ "../../node_modules/clean-deep/src/index.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/clean-deep/src/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

const isEmpty = __webpack_require__(/*! lodash.isempty */ "../../node_modules/lodash.isempty/index.js");
const isPlainObject = __webpack_require__(/*! lodash.isplainobject */ "../../node_modules/lodash.isplainobject/index.js");
const transform = __webpack_require__(/*! lodash.transform */ "../../node_modules/lodash.transform/index.js");

/**
 * Export `cleanDeep` function.
 */

module.exports = function cleanDeep(object, {
  cleanKeys = [],
  cleanValues = [],
  emptyArrays = true,
  emptyObjects = true,
  emptyStrings = true,
  NaNValues = false,
  nullValues = true,
  undefinedValues = true
} = {}) {
  return transform(object, (result, value, key) => {
    // Exclude specific keys.
    if (cleanKeys.includes(key)) {
      return;
    }

    // Recurse into arrays and objects.
    if (Array.isArray(value) || isPlainObject(value)) {
      value = cleanDeep(value, { NaNValues, cleanKeys, cleanValues, emptyArrays, emptyObjects, emptyStrings, nullValues, undefinedValues });
    }

    // Exclude specific values.
    if (cleanValues.includes(value)) {
      return;
    }

    // Exclude empty objects.
    if (emptyObjects && isPlainObject(value) && isEmpty(value)) {
      return;
    }

    // Exclude empty arrays.
    if (emptyArrays && Array.isArray(value) && !value.length) {
      return;
    }

    // Exclude empty strings.
    if (emptyStrings && value === '') {
      return;
    }

    // Exclude NaN values.
    if (NaNValues && Number.isNaN(value)) {
      return;
    }

    // Exclude null values.
    if (nullValues && value === null) {
      return;
    }

    // Exclude undefined values.
    if (undefinedValues && value === undefined) {
      return;
    }

    // Append when recursing arrays.
    if (Array.isArray(result)) {
      return result.push(value);
    }

    result[key] = value;
  });
};


/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/inherits/inherits_browser.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "../../node_modules/lodash.isempty/index.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/lodash.isempty/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/lodash.isplainobject/index.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/lodash.isplainobject/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


/***/ }),

/***/ "../../node_modules/lodash.transform/index.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/lodash.transform/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object) || isTypedArray(object);
  iteratee = baseIteratee(iteratee, 4);

  if (accumulator == null) {
    if (isArr || isObject(object)) {
      var Ctor = object.constructor;
      if (isArr) {
        accumulator = isArray(object) ? new Ctor : [];
      } else {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      }
    } else {
      accumulator = {};
    }
  }
  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = transform;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-assign/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/object-scan/lib/core/compiler.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/compiler.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* compile needles to hierarchical map object */
const parser = __webpack_require__(/*! ./parser */ "../../node_modules/object-scan/lib/core/parser.js");

const iterator = __webpack_require__(/*! ../generic/iterator */ "../../node_modules/object-scan/lib/generic/iterator.js");

const traverser = __webpack_require__(/*! ../generic/traverser */ "../../node_modules/object-scan/lib/generic/traverser.js");

const {
  defineProperty
} = __webpack_require__(/*! ../generic/helper */ "../../node_modules/object-scan/lib/generic/helper.js");

const {
  Wildcard
} = __webpack_require__(/*! ./wildcard */ "../../node_modules/object-scan/lib/core/wildcard.js");

const LEAF = Symbol('leaf');

const markLeaf = (input, match, readonly) => defineProperty(input, LEAF, match, readonly);

const isLeaf = input => LEAF in input;

const isMatch = input => input !== undefined && input[LEAF] === true;

module.exports.isLeaf = isLeaf;
module.exports.isMatch = isMatch;
const HAS_MATCHES = Symbol('has-matches');

const setHasMatches = input => defineProperty(input, HAS_MATCHES, true);

const hasMatches = input => input[HAS_MATCHES] === true;

module.exports.hasMatches = hasMatches;

const merge = (input, symbol, value) => {
  if (input[symbol] === undefined) {
    defineProperty(input, symbol, []);
  }

  if (!input[symbol].includes(value)) {
    input[symbol].push(value);
  }
};

const LEAF_NEEDLES = Symbol('leaf-needles');

const addLeafNeedle = (input, needle) => merge(input, LEAF_NEEDLES, needle);

const getLeafNeedles = input => input[LEAF_NEEDLES] || [];

module.exports.getLeafNeedles = getLeafNeedles;
const LEAF_NEEDLES_EXCLUDE = Symbol('leaf-needles-exclude');

const addLeafNeedleExclude = (input, needle) => merge(input, LEAF_NEEDLES_EXCLUDE, needle);

const getLeafNeedlesExclude = input => input[LEAF_NEEDLES_EXCLUDE] || [];

module.exports.getLeafNeedlesExclude = getLeafNeedlesExclude;
const LEAF_NEEDLES_MATCH = Symbol('leaf-needles-match');

const addLeafNeedleMatch = (input, needle) => merge(input, LEAF_NEEDLES_MATCH, needle);

const getLeafNeedlesMatch = input => input[LEAF_NEEDLES_MATCH] || [];

module.exports.getLeafNeedlesMatch = getLeafNeedlesMatch;
const NEEDLES = Symbol('needles');

const addNeedle = (input, needle) => merge(input, NEEDLES, needle);

const getNeedles = input => input[NEEDLES];

module.exports.getNeedles = getNeedles;
const INDEX = Symbol('index');

const setIndex = (input, index, readonly) => defineProperty(input, INDEX, index, readonly);

const getIndex = input => input[INDEX];

module.exports.getIndex = getIndex;
const WILDCARD = Symbol('wildcard');

const setWildcard = (input, wildcard) => defineProperty(input, WILDCARD, wildcard);

const getWildcard = input => input[WILDCARD];

module.exports.getWildcard = getWildcard;
const VALUES = Symbol('values');

const setValues = (input, entries) => defineProperty(input, VALUES, entries);

const getValues = input => input[VALUES];

module.exports.getValues = getValues;

module.exports.excludedBy = searches => Array.from(new Set([].concat(...searches.map(e => getLeafNeedlesExclude(e)))));

module.exports.matchedBy = searches => Array.from(new Set([].concat(...searches.map(e => getLeafNeedlesMatch(e)))));

module.exports.traversedBy = searches => Array.from(new Set([].concat(...searches.map(e => getNeedles(e)))));

module.exports.isLastLeafMatch = searches => {
  let maxLeafIndex = Number.MIN_SAFE_INTEGER;
  let maxLeaf = null;

  for (let idx = 0, len = searches.length; idx < len; idx += 1) {
    const s = searches[idx];
    const index = getIndex(s);

    if (index !== undefined && index > maxLeafIndex) {
      maxLeafIndex = index;
      maxLeaf = s;
    }
  }

  return maxLeaf !== null && isMatch(maxLeaf);
};

const iterate = (tower, needle, tree, {
  onAdd,
  onFin
}) => {
  const stack = [[[tower, null]]];
  const wildcards = [];
  let excluded = false;
  iterator.iterate(tree, (type, wc) => {
    if (type === 'RM') {
      if (wc.excluded === true) {
        excluded = false;
      }

      stack.pop();
      wildcards.pop();
    } else if (type === 'ADD') {
      if (wc.excluded === true) {
        if (excluded) {
          throw new Error(`Redundant Exclusion: "${needle}"`);
        }

        excluded = true;
      }

      const toAdd = [];
      const wcParent = wildcards[wildcards.length - 1];
      stack[stack.length - 1].forEach(([cur]) => onAdd(cur, wc, wcParent, e => toAdd.push([e, cur])));
      stack.push(toAdd);
      wildcards.push(wc);
    } else {
      stack[stack.length - 1].filter(([cur]) => cur !== tower).forEach(([cur, parent]) => onFin(cur, wc[wc.length - 1], parent, excluded));
    }
  });
};

const applyNeedle = (tower, needle, tree, strict, ctx) => {
  iterate(tower, needle, tree, {
    onAdd: (cur, wc, wcParent, next) => {
      addNeedle(cur, needle);
      const redundantRecursion = wcParent !== undefined && wc.isStarRec && wc.value === wcParent.value;

      if (redundantRecursion && strict) {
        throw new Error(`Redundant Recursion: "${needle}"`);
      }

      if (!redundantRecursion) {
        if (cur[wc] === undefined) {
          const child = {}; // eslint-disable-next-line no-param-reassign

          cur[wc] = child;
          setWildcard(child, wc);
        }

        next(cur[wc]);
      }

      if (wc.isStarRec) {
        next(cur);
      }
    },
    onFin: (cur, wc, parent, excluded) => {
      if (strict) {
        if (wc.isSimpleStarRec) {
          const unnecessary = Object.keys(parent).filter(k => !['**', ''].includes(k));

          if (unnecessary.length !== 0) {
            throw new Error(`Needle Target Invalidated: "${parent[unnecessary[0]][NEEDLES][0]}" by "${needle}"`);
          }
        }
      }

      addNeedle(cur, needle);

      if (strict && LEAF_NEEDLES in cur) {
        throw new Error(`Redundant Needle Target: "${cur[LEAF_NEEDLES][0]}" vs "${needle}"`);
      }

      addLeafNeedle(cur, needle, strict);

      if (excluded) {
        addLeafNeedleExclude(cur, needle);
      } else {
        addLeafNeedleMatch(cur, needle);
      }

      markLeaf(cur, !excluded, strict);
      setIndex(cur, ctx.index, strict);
      ctx.index += 1;
    }
  });
};

const finalizeTower = tower => {
  const matches = [];
  let lastDepth = -1;
  traverser.traverse(tower, (type, obj, depth) => {
    if (type === 'EXIT') {
      const isUp = lastDepth === depth + 1;

      if (isUp && matches[lastDepth] === true || isMatch(obj)) {
        matches[depth] = true;
        setHasMatches(obj);
      }

      if (isUp) {
        matches[lastDepth] = false;
      }

      setValues(obj, Object.entries(obj).filter(([k]) => k !== '').map(e => e[1]).reverse());
      lastDepth = depth;
    }
  });
};

module.exports.compile = (needles, strict = true, useArraySelector = true) => {
  const tower = {};
  const ctx = {
    index: 0
  };

  for (let idx = 0; idx < needles.length; idx += 1) {
    const needle = needles[idx];
    const tree = [parser.parse(needle, useArraySelector)];
    applyNeedle(tower, needle, tree, strict, ctx);
  }

  setWildcard(tower, new Wildcard('*', false));
  finalizeTower(tower);
  return tower;
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/core/find-result.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/find-result.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (kwargs, ctx) => {
  if (ctx.rtn === 'context') {
    return {
      onMatch: () => {},
      finish: () => ctx.context
    };
  }

  if (ctx.rtn === 'bool') {
    let result = false;
    return {
      onMatch: () => {
        result = true;
      },
      finish: () => result
    };
  }

  if (ctx.rtn === 'count') {
    let result = 0;
    return {
      onMatch: () => {
        result += 1;
      },
      finish: () => result
    };
  }

  const result = [];
  return {
    onMatch: () => result.push(kwargs[ctx.rtn]),
    finish: () => ctx.abort ? result[0] : result
  };
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/core/find.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/find.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(/*! assert */ "../../node_modules/assert/assert.js");

const compiler = __webpack_require__(/*! ./compiler */ "../../node_modules/object-scan/lib/core/compiler.js");

const Result = __webpack_require__(/*! ./find-result */ "../../node_modules/object-scan/lib/core/find-result.js");

const {
  toPath
} = __webpack_require__(/*! ../generic/helper */ "../../node_modules/object-scan/lib/generic/helper.js");

const formatPath = (input, ctx) => ctx.joined ? toPath(input) : [...input];

module.exports = (haystack_, searches_, ctx) => {
  const stack = [false, searches_, null, 0];
  const path = [];
  const parents = [];
  let depth;
  let segment;
  let searches;
  let isMatch;
  let haystack = haystack_;
  const kwargs = {
    getKey: () => formatPath(path, ctx),

    get key() {
      return kwargs.getKey();
    },

    getValue: () => haystack,

    get value() {
      return kwargs.getValue();
    },

    getEntry: () => [formatPath(path, ctx), haystack],

    get entry() {
      return kwargs.getEntry();
    },

    getIsMatch: () => isMatch,

    get isMatch() {
      return kwargs.getIsMatch();
    },

    getMatchedBy: () => compiler.matchedBy(searches),

    get matchedBy() {
      return kwargs.getMatchedBy();
    },

    getExcludedBy: () => compiler.excludedBy(searches),

    get excludedBy() {
      return kwargs.getExcludedBy();
    },

    getTraversedBy: () => compiler.traversedBy(searches),

    get traversedBy() {
      return kwargs.getTraversedBy();
    },

    getProperty: () => path[path.length - 1],

    get property() {
      return kwargs.getProperty();
    },

    getParent: () => parents[parents.length - 1],

    get parent() {
      return kwargs.getParent();
    },

    getParents: () => [...parents].reverse(),

    get parents() {
      return kwargs.getParents();
    },

    getIsCircular: () => parents.includes(haystack),

    get isCircular() {
      return kwargs.getIsCircular();
    },

    getIsLeaf: () => !(haystack instanceof Object),

    get isLeaf() {
      return kwargs.getIsLeaf();
    },

    context: ctx.context
  };
  const result = Result(kwargs, ctx);

  do {
    depth = stack.pop();
    segment = stack.pop();
    searches = stack.pop();
    isMatch = stack.pop();
    const diff = path.length - depth;

    for (let idx = 0; idx < diff; idx += 1) {
      parents.pop();
      path.pop();
    }

    if (diff === -1) {
      parents.push(haystack);
      path.push(segment);
      haystack = haystack[segment];
    } else if (segment !== null) {
      path[path.length - 1] = segment;
      haystack = parents[parents.length - 1][segment];
    } else {
      haystack = haystack_;
    }

    if (isMatch) {
      if (ctx.filterFn === undefined || ctx.filterFn(kwargs) !== false) {
        result.onMatch();

        if (ctx.abort) {
          return result.finish();
        }
      } // eslint-disable-next-line no-continue


      continue;
    }

    if (!searches.some(s => compiler.hasMatches(s))) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (ctx.useArraySelector === false && Array.isArray(haystack)) {
      if (ctx.breakFn === undefined || ctx.breakFn(kwargs) !== true) {
        for (let idx = 0, len = haystack.length; idx < len; idx += 1) {
          stack.push(false, searches, idx, depth + 1);
        }
      } // eslint-disable-next-line no-continue


      continue;
    }

    const searchesIn = searches;

    if (compiler.isLastLeafMatch(searches)) {
      stack.push(true, searches, segment, depth);
      isMatch = true;
    }

    if ('' in searches[0] && path.every(p => Number.isInteger(p))) {
      assert(searches.length === 1);
      stack.push(true, [searches[0]['']], segment, depth);
      isMatch = true;
      searches = [searches[0]['']];
    }

    if ((ctx.breakFn === undefined || ctx.breakFn(kwargs) !== true) && haystack instanceof Object) {
      const isArray = Array.isArray(haystack);
      const keys = Object.keys(haystack);

      if (!isArray && ctx.compareFn) {
        keys.sort(ctx.compareFn);
      }

      if (!ctx.reverse) {
        keys.reverse();
      }

      for (let kIdx = 0, kLen = keys.length; kIdx < kLen; kIdx += 1) {
        const key = keys[kIdx];
        const searchesOut = [];

        for (let sIdx = 0, sLen = searchesIn.length; sIdx !== sLen; sIdx += 1) {
          const search = searchesIn[sIdx];
          const wildcard = compiler.getWildcard(search);

          if (wildcard.isRec && wildcard.anyMatch(key)) {
            searchesOut.push(search);
          }

          const values = compiler.getValues(search);
          let eIdx = values.length; // eslint-disable-next-line no-plusplus

          while (eIdx--) {
            const value = values[eIdx];

            if (compiler.getWildcard(value).typeMatch(key, isArray)) {
              searchesOut.push(value);
            }
          }
        }

        stack.push(false, searchesOut, isArray ? Number(key) : key, depth + 1);
      }
    }
  } while (stack.length !== 0);

  return result.finish();
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/core/parser-result.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/parser-result.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(/*! assert */ "../../node_modules/assert/assert.js");

const {
  defineProperty
} = __webpack_require__(/*! ../generic/helper */ "../../node_modules/object-scan/lib/generic/helper.js");

const {
  Wildcard
} = __webpack_require__(/*! ./wildcard */ "../../node_modules/object-scan/lib/core/wildcard.js");

const IS_EXCLUDED = Symbol('is-excluded');

const markExcluded = input => defineProperty(input, IS_EXCLUDED, true);

const isExcluded = input => input[IS_EXCLUDED] === true;

const throwError = (msg, input, context = {}) => {
  throw new Error(Object.entries(context).reduce((p, [k, v]) => `${p}, ${k} ${v}`, `${msg}: ${input}`));
};

const getSimple = arrOrSet => {
  if (Array.isArray(arrOrSet)) {
    return arrOrSet.length === 1 ? arrOrSet[0] : arrOrSet;
  }

  return arrOrSet.size === 1 ? arrOrSet.values().next().value : arrOrSet;
};

module.exports = input => {
  let cResult = new Set();
  let inArray = false;
  let excludeNext = false;
  let cursor = 0; // group related

  const parentStack = [];

  const newChild = asOr => {
    if (isExcluded(cResult)) {
      assert(excludeNext === false);
      excludeNext = true;
    }

    parentStack.push(cResult);
    cResult = asOr ? new Set() : [];
  };

  const finishChild = () => {
    const parent = parentStack.pop();
    const parentIsArray = Array.isArray(parent);
    const child = getSimple(cResult);

    if (!parentIsArray && child instanceof Set) {
      child.forEach(e => parent.add(e));
    } else {
      parent[parentIsArray ? 'push' : 'add'](child);
    }

    cResult = parent;
  };

  newChild(false);
  return {
    setInArray: (flag, idx) => {
      if (inArray === flag) {
        throwError(inArray ? 'Bad Array Start' : 'Bad Array Terminator', input, {
          char: idx
        });
      }

      inArray = flag;
    },
    finishElement: (idx, {
      err,
      fins,
      finReq = false
    }) => {
      const isFinished = cursor === idx;

      if (isFinished && !fins.includes(input[idx - 1] || null)) {
        throwError(err, input, {
          char: idx
        });
      }

      if (!isFinished) {
        if (finReq) {
          throwError(err, input, {
            char: idx
          });
        }

        const ele = input.slice(cursor, idx);

        if (inArray && !(/^[?*+\d]+$/.test(ele) || ele.startsWith('(') && ele.endsWith(')'))) {
          throwError('Bad Array Selector', input, {
            selector: ele
          });
        }

        cResult.push(new Wildcard(inArray ? `[${ele}]` : ele, excludeNext));
        excludeNext = false;
      }

      cursor = idx + 1;
    },
    startExclusion: idx => {
      if (excludeNext !== false) {
        throwError('Redundant Exclusion', input, {
          char: idx
        });
      }

      excludeNext = true;
    },
    startGroup: () => {
      newChild(true);

      if (excludeNext) {
        markExcluded(cResult);
        excludeNext = false;
      }

      newChild(false);
    },
    newGroupElement: () => {
      finishChild();
      newChild(false);
    },
    finishGroup: idx => {
      if (parentStack.length < 2) {
        throwError('Unexpected Group Terminator', input, {
          char: idx
        });
      }

      finishChild();
      finishChild();
    },
    finalizeResult: () => {
      finishChild();
      assert(excludeNext === false);

      if (parentStack.length !== 0) {
        throwError('Non Terminated Group', input);
      }

      if (inArray) {
        throwError('Non Terminated Array', input);
      }

      return getSimple(cResult);
    }
  };
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/core/parser.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/parser.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Wildcard
} = __webpack_require__(/*! ./wildcard */ "../../node_modules/object-scan/lib/core/wildcard.js");

const Result = __webpack_require__(/*! ./parser-result */ "../../node_modules/object-scan/lib/core/parser-result.js");

const throwError = (msg, input, context = {}) => {
  throw new Error(Object.entries(context).reduce((p, [k, v]) => `${p}, ${k} ${v}`, `${msg}: ${input}`));
};

module.exports.parse = (input, useArraySelector = true) => {
  if (input === '') {
    return new Wildcard('', false);
  }

  const result = Result(input);
  const inputLength = input.length;
  let escaped = false;
  let bracketDepth = 0;

  for (let idx = 0; idx < inputLength; idx += 1) {
    const char = input[idx];

    if (escaped === false && bracketDepth === 0) {
      switch (char) {
        case '.':
          result.finishElement(idx, {
            err: 'Bad Path Separator',
            fins: [']', '}']
          });
          break;

        case '[':
          if (useArraySelector === false) {
            throwError('Forbidden Array Selector', input, {
              char: idx
            });
          }

          result.finishElement(idx, {
            err: 'Bad Array Start',
            fins: [null, '!', '{', ',', '}', ']']
          });
          result.setInArray(true, idx);
          break;

        case ']':
          result.finishElement(idx, {
            err: 'Bad Array Terminator',
            fins: ['}']
          });
          result.setInArray(false, idx);
          break;

        case '{':
          result.finishElement(idx, {
            err: 'Bad Group Start',
            fins: [null, '!', '.', '[', '{', ','],
            finReq: true
          });
          result.startGroup();
          break;

        case ',':
          result.finishElement(idx, {
            err: 'Bad Group Separator',
            fins: [']', '}']
          });
          result.newGroupElement();
          break;

        case '}':
          result.finishElement(idx, {
            err: 'Bad Group Terminator',
            fins: [']', '}']
          });
          result.finishGroup(idx);
          break;

        case '!':
          result.finishElement(idx, {
            err: 'Bad Exclusion',
            fins: [null, '.', ',', '{', '['],
            finReq: true
          });
          result.startExclusion(idx);
          break;

        default:
          break;
      }
    }

    if (escaped === false) {
      switch (char) {
        case '(':
          bracketDepth += 1;
          break;

        case ')':
          if (bracketDepth === 0) {
            throwError('Unexpected Parentheses', input, {
              char: idx
            });
          }

          bracketDepth -= 1;
          break;

        default:
          break;
      }
    }

    escaped = char === '\\' ? !escaped : false;
  }

  if (escaped !== false) {
    throwError('Dangling Escape', input, {
      char: inputLength - 1
    });
  }

  if (bracketDepth !== 0) {
    throwError('Unterminated Parentheses', input);
  }

  result.finishElement(inputLength, {
    err: 'Bad Terminator',
    fins: [']', '}']
  });
  return result.finalizeResult();
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/core/wildcard.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/core/wildcard.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  escapeRegex,
  asRegex
} = __webpack_require__(/*! ../generic/helper */ "../../node_modules/object-scan/lib/generic/helper.js");

const parseWildcard = str => {
  let regex = '';
  let escaped = false;

  for (let idx = 0; idx < str.length; idx += 1) {
    const char = str[idx];

    if (!escaped && char === '\\') {
      escaped = true;
    } else if (!escaped && char === '*') {
      regex += '.*';
    } else if (!escaped && char === '+') {
      regex += '.+';
    } else if (!escaped && char === '?') {
      regex += '.';
    } else {
      regex += escapeRegex(char);
      escaped = false;
    }
  }

  return new RegExp(`^${regex}$`);
};

module.exports.parseWildcard = parseWildcard;

const compileWildcard = str => {
  if (['**', '++'].includes(str)) {
    return asRegex('.*');
  }

  if ((str.startsWith('**(') || str.startsWith('++(')) && str.endsWith(')')) {
    return asRegex(str.slice(3, -1));
  }

  if (str.startsWith('[(') && str.endsWith(')]')) {
    return asRegex(str.slice(2, -2));
  }

  if (str.startsWith('(') && str.endsWith(')')) {
    return asRegex(str.slice(1, -1));
  }

  if (str.startsWith('[') && str.endsWith(']')) {
    return parseWildcard(str.slice(1, -1));
  }

  return parseWildcard(str);
};

class Wildcard extends String {
  constructor(value, excluded) {
    super(value);
    this.value = value;
    this.excluded = excluded;
    this.regex = compileWildcard(value);
    this.isArrayTarget = value.startsWith('[') && value.endsWith(']');
    this.isSimpleStarRec = value === '**';
    this.isSimplePlusRec = value === '++';
    this.isSimpleRec = this.isSimpleStarRec || this.isSimplePlusRec;
    this.isRegexStarRec = value.startsWith('**(') && value.endsWith(')');
    this.isRegexPlusRec = value.startsWith('++(') && value.endsWith(')');
    this.isRegexRec = this.isRegexStarRec || this.isRegexPlusRec;
    this.isStarRec = this.isSimpleStarRec || this.isRegexStarRec;
    this.isPlusRec = this.isSimplePlusRec || this.isRegexPlusRec;
    this.isRec = this.isStarRec || this.isPlusRec;
    this.isAnyArrayTarget = value === '[*]';
    this.isAnyObjTarget = value === '*';
  }

  anyMatch(key) {
    if (this.isSimpleRec) {
      return true;
    }

    return this.regex.test(key);
  }

  typeMatch(key, isArray) {
    if (this.isSimpleRec) {
      return true;
    }

    if (isArray && this.isAnyArrayTarget) {
      return true;
    }

    if (!isArray && this.isAnyObjTarget) {
      return true;
    }

    if (isArray !== this.isArrayTarget && !this.isRec) {
      return false;
    }

    return this.regex.test(key);
  }

}

module.exports.Wildcard = Wildcard;

/***/ }),

/***/ "../../node_modules/object-scan/lib/generic/helper.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/generic/helper.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.defineProperty = (target, k, v, readonly = true) => Object.defineProperty(target, k, {
  value: v,
  writable: !readonly
});

const specialChars = /[?!,.*+[\](){}\\]/g;

const escape = input => input.replace(specialChars, '\\$&');

module.exports.escape = escape;

module.exports.escapeRegex = char => char.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

module.exports.asRegex = regexStr => {
  try {
    return new RegExp(regexStr);
  } catch (e) {
    throw new Error(`Invalid Regex: "${regexStr}"`);
  }
};

module.exports.toPath = input => input.reduce((p, c) => `${p}${typeof c === 'number' ? `[${c}]` : `${p ? '.' : ''}${escape(c)}`}`, '');

/***/ }),

/***/ "../../node_modules/object-scan/lib/generic/iterator.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/generic/iterator.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const iterate = (tree, cb) => {
  const stack = [tree];
  const parent = [null];
  const count = [];
  const depth = [];
  const path = [];
  let idx = 0;
  let inc = true;

  while (idx !== -1) {
    const e = stack[idx];

    if (e instanceof Set) {
      stack[idx] = [...e];
      stack[idx].or = true;
    } else if (Array.isArray(e)) {
      if (e.or !== true) {
        stack.splice(idx, 1, ...e);
        parent.splice(idx, 1, ...new Array(e.length).fill(parent[idx]));

        if (parent[idx] !== null) {
          depth[parent[idx]] += e.length - 1;
        }
      } else {
        if (count[idx] === undefined) {
          count[idx] = 0;
          depth[idx] = 0;
        } else if (depth[idx] !== 0) {
          stack.splice(idx + 1, depth[idx]);
          parent.splice(idx + 1, depth[idx]);
          depth[idx] = 0;
        }

        if (count[idx] < e.length) {
          stack.splice(idx + 1, 0, e[count[idx]]);
          parent.splice(idx + 1, 0, idx);
          count[idx] = (count[idx] || 0) + 1;
          depth[idx] += 1;
          inc = true;
          idx += 1;
        } else {
          count[idx] = 0;
          idx -= 1;
        }
      }
    } else if (inc === true) {
      path.push(e);
      cb('ADD', e);

      if (idx === stack.length - 1) {
        cb('FIN', path);
        inc = false;
      } else {
        idx += 1;
      }
    } else {
      cb('RM', path.pop());
      idx -= 1;
    }
  }
};

module.exports.iterate = iterate;

/***/ }),

/***/ "../../node_modules/object-scan/lib/generic/traverser.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/generic/traverser.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.traverse = (obj, cb) => {
  const stack = [obj];
  const counts = [1];
  let depth = 0;
  let inc = true;

  while (stack.length !== 0) {
    if (inc === true) {
      const cur = stack[stack.length - 1];
      cb('ENTER', cur, depth);
      const values = Object.values(cur);

      if (values.length !== 0) {
        stack.push(...values);
        depth += 1;
        counts[depth] = values.length;
      } else {
        inc = false;
      }
    } else {
      const cur = stack.pop();
      cb('EXIT', cur, depth);
      counts[depth] -= 1;

      if (counts[depth] === 0) {
        counts.pop();
        depth -= 1;
      } else {
        inc = true;
      }
    }
  }
};

/***/ }),

/***/ "../../node_modules/object-scan/lib/index.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/object-scan/lib/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(/*! assert */ "../../node_modules/assert/assert.js");

const compiler = __webpack_require__(/*! ./core/compiler */ "../../node_modules/object-scan/lib/core/compiler.js");

const find = __webpack_require__(/*! ./core/find */ "../../node_modules/object-scan/lib/core/find.js");

module.exports = (needles, opts = {}) => {
  assert(Array.isArray(needles));
  assert(opts instanceof Object && !Array.isArray(opts));

  if (needles.length === 0) {
    return (_, ctx) => ctx === undefined ? [] : ctx;
  }

  const ctx = {
    filterFn: undefined,
    breakFn: undefined,
    compareFn: undefined,
    reverse: true,
    abort: false,
    rtn: undefined,
    joined: false,
    useArraySelector: true,
    strict: true,
    ...opts
  };
  assert(Object.keys(ctx).length === 9, 'Unexpected Option provided!');
  assert(['function', 'undefined'].includes(typeof ctx.filterFn));
  assert(['function', 'undefined'].includes(typeof ctx.breakFn));
  assert(['function', 'undefined'].includes(typeof ctx.compareFn));
  assert(typeof ctx.reverse === 'boolean');
  assert(typeof ctx.abort === 'boolean');
  assert([undefined, 'context', 'key', 'value', 'entry', 'property', 'parent', 'parents', 'bool', 'count'].includes(opts.rtn));
  assert(typeof ctx.joined === 'boolean');
  assert(typeof ctx.useArraySelector === 'boolean');
  assert(typeof ctx.strict === 'boolean');
  const search = compiler.compile(needles, ctx.strict, ctx.useArraySelector); // keep separate for performance

  return (haystack, context) => find(haystack, [search], {
    context,
    ...ctx,
    rtn: ctx.rtn || (context === undefined ? 'key' : 'context')
  });
};

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!********************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/process/browser.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/util/support/isBufferBrowser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!**************************************************************************************!*\
  !*** C:/Users/travis.cox/Documents/GitHub/apex-charts/web/node_modules/util/util.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./typescript/client-components.ts":
/*!*****************************************!*\
  !*** ./typescript/client-components.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const ApexChart_1 = __webpack_require__(/*! ./components/ApexChart */ "./typescript/components/ApexChart.tsx");
exports.ApexChart = ApexChart_1.ApexChart;
__webpack_require__(/*! ../scss/main */ "./scss/main.scss");
// as new components are implemented, import them, and add their meta to this array
const components = [
    new ApexChart_1.ApexChartMeta()
];
// iterate through our components, registering each one with the registry.  Don't forget to register on the Java side too!
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));


/***/ }),

/***/ "./typescript/components/ApexChart.tsx":
/*!*********************************************!*\
  !*** ./typescript/components/ApexChart.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const bind_decorator_1 = __webpack_require__(/*! bind-decorator */ "../../node_modules/bind-decorator/index.js");
const objectScan = __webpack_require__(/*! object-scan */ "../../node_modules/object-scan/lib/index.js");
const cleanDeep = __webpack_require__(/*! clean-deep */ "../../node_modules/clean-deep/src/index.js");
const apexcharts_min_1 = __importDefault(__webpack_require__(/*! apexcharts/dist/apexcharts.min */ "../../node_modules/apexcharts/dist/apexcharts.min.js"));
exports.COMPONENT_TYPE = "kyvislabs.display.apexchart";
window["ApexCharts"] = apexcharts_min_1.default;
const logger = perspective_client_1.makeLogger(exports.COMPONENT_TYPE);
// These match events in the Gateway side component delegate.
var MessageEvents;
(function (MessageEvents) {
    MessageEvents["MESSAGE_RESPONSE_EVENT"] = "apexchart-response-event";
    MessageEvents["MESSAGE_REQUEST_EVENT"] = "apexchart-request-event";
})(MessageEvents || (MessageEvents = {}));
class ApexChartGatewayDelegate extends perspective_client_1.ComponentStoreDelegate {
    constructor(componentStore) {
        super(componentStore);
        this.chart = null;
    }
    init(chart) {
        if (chart) {
            this.chart = chart;
        }
    }
    handleEvent(eventName, eventObject) {
        if (this.chart) {
            const eventObjectStr = JSON.stringify(eventObject);
            logger.debug(() => `Received '${eventName}' event: ${eventObjectStr}`);
            const { MESSAGE_RESPONSE_EVENT, MESSAGE_REQUEST_EVENT } = MessageEvents;
            const functionToCall = eventObject.functionToCall;
            switch (eventName) {
                case MESSAGE_RESPONSE_EVENT:
                    if (functionToCall == "toggleSeries") {
                        this.fireEvent(MESSAGE_REQUEST_EVENT, { result: this.chart.chart.toggleSeries(eventObject.seriesName) });
                    }
                    else if (functionToCall == "showSeries") {
                        this.chart.chart.showSeries(eventObject.seriesName);
                    }
                    else if (functionToCall == "hideSeries") {
                        this.chart.chart.hideSeries(eventObject.seriesName);
                    }
                    else if (functionToCall == "resetSeries") {
                        this.chart.chart.resetSeries(eventObject.shouldUpdateChart, eventObject.shouldResetZoom);
                    }
                    else if (functionToCall == "zoomX") {
                        this.chart.chart.zoomX(eventObject.start, eventObject.end);
                    }
                    else if (functionToCall == "addPointAnnotation") {
                        this.chart.chart.addPointAnnotation(eventObject.options, eventObject.pushToMemory);
                    }
                    else if (functionToCall == "clearAnnotations") {
                        this.chart.chart.clearAnnotations();
                    }
                    else if (functionToCall == "updateSeries") {
                        this.chart.clearZoom();
                        this.chart.props.store.props.write('series', eventObject.newSeries);
                    }
                    else if (functionToCall == "updateOptions") {
                        this.chart.clearZoom();
                        const optionsStr = JSON.stringify(this.chart.props.props.options);
                        const options = JSON.parse(optionsStr);
                        const combinedOptions = Object.assign(Object.assign({}, options), eventObject.newOptions);
                        this.chart.props.store.props.write('options', combinedOptions);
                    }
                    break;
                default:
                    logger.warn(() => `No delegate event handler found for event: ${eventName} in ApexChartGatewayDelegate`);
            }
        }
    }
}
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ApexChartGatewayDelegate.prototype, "handleEvent", null);
exports.ApexChartGatewayDelegate = ApexChartGatewayDelegate;
class ApexChart extends perspective_client_1.Component {
    constructor() {
        super(...arguments);
        this.chartRef = React.createRef();
        this.chart = null;
        this.lastZoom = [];
    }
    createChart() {
        if (this.chart) {
            logger.debug("Destroying chart");
            this.chart.destroy();
        }
        logger.debug("Creating new chart");
        this.chart = new apexcharts_min_1.default(this.chartRef.current, this.getConfig());
        this.initDelegate();
        this.chart.render();
    }
    updateData() {
        if (this.props.props.type == "boxPlot") {
            this.createChart();
        }
        else {
            logger.debug("Updating series data");
            this.chart.updateSeries(this.prepareSeries(this.props.props.type, this.props.props.series));
        }
    }
    componentDidMount() {
        logger.debug("Component mounted");
    }
    initDelegate() {
        if (this.props.store.delegate) {
            this.props.store.delegate.init(this);
        }
    }
    componentDidUpdate(prevProps) {
        if (!this.chart) {
            return null;
        }
        const prevOptions = JSON.stringify(prevProps.props.options);
        const prevSeries = JSON.stringify(prevProps.props.series);
        const currentOptions = JSON.stringify(this.props.props.options);
        const currentSeries = JSON.stringify(this.props.props.series);
        const prevType = prevProps.props.type;
        const currentType = this.props.props.type;
        if (prevOptions === currentOptions && prevSeries !== currentSeries) {
            // options are not changed, just the series is changed
            logger.debug("Series changed, updating");
            this.updateData();
        }
        else if (prevOptions !== currentOptions || prevType !== currentType) {
            // both might be changed
            logger.debug("Options or type changed, creating new chart");
            this.createChart();
        }
    }
    componentWillUnmount() {
        if (this.chart && typeof this.chart.destroy === 'function') {
            this.chart.destroy();
        }
    }
    getConfig() {
        const newOptions = this.prepareOptions(this.props.props.options);
        newOptions.series = this.prepareSeries(this.props.props.type, this.props.props.series);
        return newOptions;
    }
    handleResize(width, height) {
        logger.debug("Size changed (" + width + ":" + height + ")");
        if (this.chart == null) {
            this.createChart();
        }
        else {
            this.updateData();
        }
    }
    prepareOptions(inOptions) {
        const optionsStr = JSON.stringify(inOptions);
        const options = cleanDeep(JSON.parse(optionsStr));
        objectScan(['**'], {
            filterFn: ({ parent, property, value }) => {
                if (typeof value === 'string' && value && (value.startsWith("function (") || value.startsWith("function("))) {
                    let fn = null;
                    eval("fn = " + value);
                    parent[property] = fn;
                }
            }
        })(options);
        if (options.chart && options.chart.events) {
            if (options.chart.events.animationEnd) {
                options.chart.events.animationEnd = this.animationEndHandler;
            }
            else {
                options.chart.events.animationEnd = undefined;
            }
            if (options.chart.events.beforeMount) {
                options.chart.events.beforeMount = this.beforeMountHandler;
            }
            else {
                options.chart.events.beforeMount = undefined;
            }
            if (options.chart.events.mounted) {
                options.chart.events.mounted = this.mountedHandler;
            }
            else {
                options.chart.events.mounted = undefined;
            }
            if (options.chart.events.updated) {
                options.chart.events.updated = this.updatedHandler;
            }
            else {
                options.chart.events.updated = undefined;
            }
            if (options.chart.events.mouseMove) {
                options.chart.events.mouseMove = this.mouseMoveHandler;
            }
            else {
                options.chart.events.mouseMove = undefined;
            }
            if (options.chart.events.mouseLeave) {
                options.chart.events.mouseLeave = this.mouseLeaveHandler;
            }
            else {
                options.chart.events.mouseLeave = undefined;
            }
            if (options.chart.events.click) {
                options.chart.events.click = this.clickHandler;
            }
            else {
                options.chart.events.click = undefined;
            }
            if (options.chart.events.legendClick) {
                options.chart.events.legendClick = this.legendClickHandler;
            }
            else {
                options.chart.events.legendClick = undefined;
            }
            if (options.chart.events.markerClick) {
                options.chart.events.markerClick = this.markerClickHandler;
            }
            else {
                options.chart.events.markerClick = undefined;
            }
            if (options.chart.events.xAxisLabelClick) {
                options.chart.events.xAxisLabelClick = this.xAxisLabelClickHandler;
            }
            else {
                options.chart.events.xAxisLabelClick = undefined;
            }
            if (options.chart.events.selection) {
                options.chart.events.selection = this.selectionHandler;
            }
            else {
                options.chart.events.selection = undefined;
            }
            if (options.chart.events.dataPointSelection) {
                options.chart.events.dataPointSelection = this.dataPointSelectionHandler;
            }
            else {
                options.chart.events.dataPointSelection = undefined;
            }
            if (options.chart.events.dataPointMouseEnter) {
                options.chart.events.dataPointMouseEnter = this.dataPointMouseEnterHandler;
            }
            else {
                options.chart.events.dataPointMouseEnter = undefined;
            }
            if (options.chart.events.dataPointMouseLeave) {
                options.chart.events.dataPointMouseLeave = this.dataPointMouseLeaveHandler;
            }
            else {
                options.chart.events.dataPointMouseLeave = undefined;
            }
            options.chart.events.zoomed = this.zoomedHandler;
            options.chart.events.beforeResetZoom = this.beforeResetZoomHandler;
            if (options.chart.events.beforeZoom) {
                options.chart.events.beforeZoom = this.beforeZoomHandler;
            }
            else {
                options.chart.events.beforeZoom = undefined;
            }
            if (options.chart.events.scrolled) {
                options.chart.events.scrolled = this.scrolledHandler;
            }
            else {
                options.chart.events.scrolled = undefined;
            }
            if (options.chart.events.brushScrolled) {
                options.chart.events.brushScrolled = this.brushedScrolledHandler;
            }
            else {
                options.chart.events.brushScrolled = undefined;
            }
        }
        if (options.chart) {
            options.chart.type = this.props.props.type;
            options.chart.height = "100%";
            options.chart.width = "100%";
            options.chart.redrawOnParentResize = false;
            options.chart.redrawOnWindowResize = false;
        }
        else {
            options.chart = {
                type: this.props.props.type,
                height: "100%",
                width: "100%",
                redrawOnParentResize: false,
                redrawOnWindowResize: false
            };
        }
        return options;
    }
    prepareSeries(type, inSeries) {
        const seriesStr = JSON.stringify(inSeries);
        const series = JSON.parse(seriesStr);
        const seriesLength = series.length;
        for (let i = 0; i < seriesLength; i++) {
            const s = series[i];
            if (perspective_client_1.isPlainObject(s)) {
                if (typeof s.data === 'undefined' || s.data === null || typeof s.data === 'string' || typeof s.data === 'number' || typeof s.data === 'bigint' || typeof s.data === 'boolean' || typeof s.data === 'symbol' || typeof s.data === 'function') {
                    s.data = [];
                }
                const newData = new Array();
                for (let index = 0; index < s.data.length; index++) {
                    const rowData = s.data[index];
                    if (perspective_client_1.isPlainObject(rowData)) {
                        const rowDataArray = Object.values(rowData);
                        if (rowDataArray.length == 1) {
                            newData.push(rowDataArray);
                        }
                        else if (rowDataArray.length == 2) {
                            if (rowData.x && rowData.y) {
                                newData.push({
                                    x: rowData.x,
                                    y: rowData.y
                                });
                            }
                            else {
                                newData.push({
                                    x: rowDataArray[0],
                                    y: rowDataArray[1]
                                });
                            }
                        }
                        else {
                            newData.push(rowData);
                        }
                    }
                    else {
                        if (!Array.isArray(rowData) || rowData.length == 1) {
                            newData.push(rowData);
                        }
                        else if (rowData.length == 2) {
                            newData.push({
                                x: rowData[0],
                                y: rowData[1]
                            });
                        }
                        else {
                            newData.push(rowData);
                        }
                    }
                }
                s.data = newData;
            }
        }
        return series;
    }
    animationEndHandler(chartContext, options) {
        const e = {};
        this.props.componentEvents.fireComponentEvent("animationEndHandler", e);
    }
    beforeMountHandler(chartContext, config) {
        const e = {};
        this.props.componentEvents.fireComponentEvent("beforeMountHandler", e);
    }
    mountedHandler(chartContext, config) {
        const e = {};
        this.props.componentEvents.fireComponentEvent("mountedHandler", e);
    }
    updatedHandler(chartContext, config) {
        const e = {};
        this.props.componentEvents.fireComponentEvent("updatedHandler", e);
    }
    clickHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("clickHandler", e);
    }
    mouseMoveHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("mouseMoveHandler", e);
    }
    mouseLeaveHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("mouseLeaveHandler", e);
    }
    legendClickHandler(chartContext, seriesIndex, config) {
        const e = {
            seriesIndex: seriesIndex
        };
        this.props.componentEvents.fireComponentEvent("legendClickHandler", e);
    }
    markerClickHandler(event, chartContext, { seriesIndex, dataPointIndex, config }) {
        const e = {
            dataPointIndex: dataPointIndex,
            seriesIndex: seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("markerClickHandler", e);
    }
    xAxisLabelClickHandler(event, chartContext, config) {
        const e = {
            labelIndex: config.labelIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("xAxisLabelClickHandler", e);
    }
    selectionHandler(chartContext, { xaxis, yaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("selectionHandler", e);
    }
    dataPointSelectionHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointSelectionHandler", e);
    }
    dataPointMouseEnterHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointMouseEnterHandler", e);
    }
    dataPointMouseLeaveHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointMouseLeaveHandler", e);
    }
    clearZoom() {
        logger.debug("Clearing zoom");
        this.lastZoom = [];
        this.props.store.props.write('zoom.start', "");
        this.props.store.props.write('zoom.end', "");
    }
    beforeResetZoomHandler(chartContext, opts) {
        this.clearZoom();
    }
    zoomedHandler(chartContext, { xaxis, yaxis }) {
        this.lastZoom = [xaxis.min, xaxis.max];
        this.props.store.props.write('zoom.start', xaxis.min ? xaxis.min.toString() : "");
        this.props.store.props.write('zoom.end', xaxis.max ? xaxis.max.toString() : "");
        if (this.props.props.options.chart.events.zoomed) {
            const e = {
                xaxis: {
                    min: xaxis.min,
                    max: xaxis.max
                }
            };
            this.props.componentEvents.fireComponentEvent("zoomedHandler", e);
        }
    }
    beforeZoomHandler(chartContext, { xaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("beforeZoomHandler", e);
    }
    scrolledHandler(chartContext, { xaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("scrolledHandler", e);
    }
    brushedScrolledHandler(chartContext, { xaxis, yaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("brushedScrolledHandler", e);
    }
    render() {
        if (this.props.props.options && Object.keys(this.props.props.options).length === 0 && Object.getPrototypeOf(this.props.props.options) === Object.prototype) {
            return (React.createElement("div", Object.assign({}, this.props.emit())));
        }
        else {
            return (React.createElement("div", Object.assign({}, this.props.emit()),
                React.createElement("div", { ref: this.chartRef }),
                React.createElement(perspective_client_1.ReactResizeDetector, { handleHeight: true, handleWidth: true, onResize: this.handleResize, refreshMode: "debounce" })));
        }
    }
}
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "handleResize", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "prepareOptions", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "prepareSeries", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "animationEndHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "beforeMountHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "mountedHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "updatedHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "clickHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "mouseMoveHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "mouseLeaveHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "legendClickHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "markerClickHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "xAxisLabelClickHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "selectionHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "dataPointSelectionHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "dataPointMouseEnterHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "dataPointMouseLeaveHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "clearZoom", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "beforeResetZoomHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "zoomedHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "beforeZoomHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "scrolledHandler", null);
__decorate([
    bind_decorator_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApexChart.prototype, "brushedScrolledHandler", null);
exports.ApexChart = ApexChart;
class ApexChartMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    getViewComponent() {
        return ApexChart;
    }
    getDefaultSize() {
        return ({
            width: 475,
            height: 200
        });
    }
    createDelegate(component) {
        return new ApexChartGatewayDelegate(component);
    }
    getPropsReducer(tree) {
        return {
            type: tree.readString("type"),
            options: tree.read("options"),
            series: tree.readArray("series"),
            zoom: tree.read("zoom")
        };
    }
}
exports.ApexChartMeta = ApexChartMeta;


/***/ }),

/***/ "@inductiveautomation/perspective-client":
/*!************************************!*\
  !*** external "PerspectiveClient" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=Components.js.map