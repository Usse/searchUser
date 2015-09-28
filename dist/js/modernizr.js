/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.13/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Array;var t=e.prototype;var r=Object;var n=r.prototype;var i=Function.prototype;var a=String;var o=a.prototype;var l=Number;var u=l.prototype;var f=t.slice;var s=t.splice;var c=t.push;var v=t.unshift;var p=t.concat;var h=i.call;var g=Math.max;var y=Math.min;var d=n.toString;var w=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var m;var b=Function.prototype.toString,T=function tryFunctionObject(e){try{b.call(e);return true}catch(t){return false}},x="[object Function]",O="[object GeneratorFunction]";m=function isCallable(e){if(typeof e!=="function"){return false}if(w){return T(e)}var t=d.call(e);return t===x||t===O};var S;var j=RegExp.prototype.exec,E=function tryRegexExec(e){try{j.call(e);return true}catch(t){return false}},I="[object RegExp]";S=function isRegex(e){if(typeof e!=="object"){return false}return w?E(e):d.call(e)===I};var D;var k=String.prototype.valueOf,N=function tryStringObject(e){try{k.call(e);return true}catch(t){return false}},F="[object String]";D=function isString(e){if(typeof e==="string"){return true}if(typeof e!=="object"){return false}return w?N(e):d.call(e)===F};var M=function(e){var t=r.defineProperty&&function(){try{var e={};r.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e){return false}return e.x===e}catch(n){return false}}();var n;if(t){n=function(e,t,n,i){if(!i&&t in e){return}r.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:n})}}else{n=function(e,t,r,n){if(!n&&t in e){return}e[t]=r}}return function defineProperties(t,r,i){for(var a in r){if(e.call(r,a)){n(t,a,r[a],i)}}}}(n.hasOwnProperty);var R=function isPrimitive(e){var t=typeof e;return e===null||t!=="object"&&t!=="function"};var A={ToInteger:function ToInteger(e){var t=+e;if(t!==t){t=0}else if(t!==0&&t!==1/0&&t!==-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}return t},ToPrimitive:function ToPrimitive(e){var t,r,n;if(R(e)){return e}r=e.valueOf;if(m(r)){t=r.call(e);if(R(t)){return t}}n=e.toString;if(m(n)){t=n.call(e);if(R(t)){return t}}throw new TypeError},ToObject:function(e){if(e==null){throw new TypeError("can't convert "+e+" to object")}return r(e)},ToUint32:function ToUint32(e){return e>>>0}};var U=function Empty(){};M(i,{bind:function bind(e){var t=this;if(!m(t)){throw new TypeError("Function.prototype.bind called on incompatible "+t)}var n=f.call(arguments,1);var i;var a=function(){if(this instanceof i){var a=t.apply(this,p.call(n,f.call(arguments)));if(r(a)===a){return a}return this}else{return t.apply(e,p.call(n,f.call(arguments)))}};var o=g(0,t.length-n.length);var l=[];for(var u=0;u<o;u++){c.call(l,"$"+u)}i=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this, arguments); }")(a);if(t.prototype){U.prototype=t.prototype;i.prototype=new U;U.prototype=null}return i}});var $=h.bind(n.hasOwnProperty);var C=h.bind(n.toString);var P=h.bind(o.slice);var Z=h.bind(o.split);var J=e.isArray||function isArray(e){return C(e)==="[object Array]"};var z=[].unshift(0)!==1;M(t,{unshift:function(){v.apply(this,arguments);return this.length}},z);M(e,{isArray:J});var B=r("a");var G=B[0]!=="a"||!(0 in B);var H=function properlyBoxed(e){var t=true;var r=true;if(e){e.call("foo",function(e,r,n){if(typeof n!=="object"){t=false}});e.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!e&&t&&r};M(t,{forEach:function forEach(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=-1;var i=r.length>>>0;var a;if(arguments.length>1){a=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in r){if(typeof a!=="undefined"){e.call(a,r[n],n,t)}else{e(r[n],n,t)}}}}},!H(t.forEach));M(t,{map:function map(t){var r=A.ToObject(this);var n=G&&D(this)?Z(this,""):r;var i=n.length>>>0;var a=e(i);var o;if(arguments.length>1){o=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.map callback must be a function")}for(var l=0;l<i;l++){if(l in n){if(typeof o!=="undefined"){a[l]=t.call(o,n[l],l,r)}else{a[l]=t(n[l],l,r)}}}return a}},!H(t.map));M(t,{filter:function filter(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=r.length>>>0;var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var l=0;l<n;l++){if(l in r){a=r[l];if(typeof o==="undefined"?e(a,l,t):e.call(o,a,l,t)){c.call(i,a)}}}return i}},!H(t.filter));M(t,{every:function every(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=r.length>>>0;var i;if(arguments.length>1){i=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in r&&!(typeof i==="undefined"?e(r[a],a,t):e.call(i,r[a],a,t))){return false}}return true}},!H(t.every));M(t,{some:function some(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=r.length>>>0;var i;if(arguments.length>1){i=arguments[1]}if(!m(e)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in r&&(typeof i==="undefined"?e(r[a],a,t):e.call(i,r[a],a,t))){return true}}return false}},!H(t.some));var L=false;if(t.reduce){L=typeof t.reduce.call("es5",function(e,t,r,n){return n})==="object"}M(t,{reduce:function reduce(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=r.length>>>0;if(!m(e)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=e(a,r[i],i,t)}}return a}},!L);var X=false;if(t.reduceRight){X=typeof t.reduceRight.call("es5",function(e,t,r,n){return n})==="object"}M(t,{reduceRight:function reduceRight(e){var t=A.ToObject(this);var r=G&&D(this)?Z(this,""):t;var n=r.length>>>0;if(!m(e)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=e(i,r[a],a,t)}}while(a--);return i}},!X);var Y=t.indexOf&&[0,1].indexOf(1,2)!==-1;M(t,{indexOf:function indexOf(e){var t=G&&D(this)?Z(this,""):A.ToObject(this);var r=t.length>>>0;if(r===0){return-1}var n=0;if(arguments.length>1){n=A.ToInteger(arguments[1])}n=n>=0?n:g(0,r+n);for(;n<r;n++){if(n in t&&t[n]===e){return n}}return-1}},Y);var q=t.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;M(t,{lastIndexOf:function lastIndexOf(e){var t=G&&D(this)?Z(this,""):A.ToObject(this);var r=t.length>>>0;if(r===0){return-1}var n=r-1;if(arguments.length>1){n=y(n,A.ToInteger(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in t&&e===t[n]){return n}}return-1}},q);var K=function(){var e=[1,2];var t=e.splice();return e.length===2&&J(t)&&t.length===0}();M(t,{splice:function splice(e,t){if(arguments.length===0){return[]}else{return s.apply(this,arguments)}}},!K);var Q=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();M(t,{splice:function splice(e,t){if(arguments.length===0){return[]}var r=arguments;this.length=g(A.ToInteger(this.length),0);if(arguments.length>0&&typeof t!=="number"){r=f.call(arguments);if(r.length<2){c.call(r,this.length-e)}else{r[1]=A.ToInteger(t)}}return s.apply(this,r)}},!Q);var V=function(){var t=new e(1e5);t[8]="x";t.splice(1,1);return t.indexOf("x")===7}();var W=function(){var e=256;var t=[];t[e]="a";t.splice(e+1,0,"b");return t[e]==="a"}();M(t,{splice:function splice(e,t){var r=A.ToObject(this);var n=[];var i=A.ToUint32(r.length);var o=A.ToInteger(e);var l=o<0?g(i+o,0):y(o,i);var u=y(g(A.ToInteger(t),0),i-l);var s=0;var c;while(s<u){c=a(l+s);if($(r,c)){n[s]=r[c]}s+=1}var v=f.call(arguments,2);var p=v.length;var h;if(p<u){s=l;while(s<i-u){c=a(s+u);h=a(s+p);if($(r,c)){r[h]=r[c]}else{delete r[h]}s+=1}s=i;while(s>i-u+p){delete r[s-1];s-=1}}else if(p>u){s=i-u;while(s>l){c=a(s+u-1);h=a(s+p-1);if($(r,c)){r[h]=r[c]}else{delete r[h]}s-=1}}s=l;for(var d=0;d<v.length;++d){r[s]=v[d];s+=1}r.length=i-u+p;return n}},!V||!W);var _=!{toString:null}.propertyIsEnumerable("toString");var ee=function(){}.propertyIsEnumerable("prototype");var te=!$("x","0");var re=function(e){var t=e.constructor;return t&&t.prototype===e};var ne={$window:true,$console:true,$parent:true,$self:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true};var ie=function(){if(typeof window==="undefined"){return false}for(var e in window){if(!ne["$"+e]&&$(window,e)&&window[e]!==null&&typeof window[e]==="object"){try{re(window[e])}catch(t){return true}}}return false}();var ae=function(e){if(typeof window==="undefined"||!ie){return re(e)}try{return re(e)}catch(t){return false}};var oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var le=oe.length;var ue=function isArguments(e){return C(e)==="[object Arguments]"};var fe=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&!J(e)&&m(e.callee)};var se=ue(arguments)?ue:fe;M(r,{keys:function keys(e){var t=m(e);var r=se(e);var n=e!==null&&typeof e==="object";var i=n&&D(e);if(!n&&!t&&!r){throw new TypeError("Object.keys called on a non-object")}var o=[];var l=ee&&t;if(i&&te||r){for(var u=0;u<e.length;++u){c.call(o,a(u))}}if(!r){for(var f in e){if(!(l&&f==="prototype")&&$(e,f)){c.call(o,a(f))}}}if(_){var s=ae(e);for(var v=0;v<le;v++){var p=oe[v];if(!(s&&p==="constructor")&&$(e,p)){c.call(o,p)}}}return o}});var ce=r.keys&&function(){return r.keys(arguments).length===2}(1,2);var ve=r.keys&&function(){var e=r.keys(arguments);return arguments.length!==1||e.length!==1||e[0]!==1}(1);var pe=r.keys;M(r,{keys:function keys(e){if(se(e)){return pe(f.call(e))}else{return pe(e)}}},!ce||ve);var he=-621987552e5;var ge="-000001";var ye=Date.prototype.toISOString&&new Date(he).toISOString().indexOf(ge)===-1;var de=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";M(Date.prototype,{toISOString:function toISOString(){var e,t,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;e=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+P("00000"+Math.abs(n),0<=n&&n<=9999?-4:-6);t=e.length;while(t--){r=e[t];if(r<10){e[t]="0"+r}}return n+"-"+f.call(e,0,2).join("-")+"T"+f.call(e,2).join(":")+"."+P("000"+this.getUTCMilliseconds(),-3)+"Z"}},ye||de);var we=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(he).toJSON().indexOf(ge)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(e){return false}}();if(!we){Date.prototype.toJSON=function toJSON(e){var t=r(this);var n=A.ToPrimitive(t);if(typeof n==="number"&&!isFinite(n)){return null}var i=t.toISOString;if(!m(i)){throw new TypeError("toISOString property is not callable")}return i.call(t)}}var me=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var be=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var Te=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(Te||be||!me){Date=function(e){var t=function Date(r,n,i,o,l,u,f){var s=arguments.length;var c;if(this instanceof e){c=s===1&&a(r)===r?new e(t.parse(r)):s>=7?new e(r,n,i,o,l,u,f):s>=6?new e(r,n,i,o,l,u):s>=5?new e(r,n,i,o,l):s>=4?new e(r,n,i,o):s>=3?new e(r,n,i):s>=2?new e(r,n):s>=1?new e(r):new e}else{c=e.apply(this,arguments)}if(!R(c)){M(c,{constructor:t},true)}return c};var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(e,t){var r=t>1?1:0;return n[t]+Math.floor((e-1969+r)/4)-Math.floor((e-1901+r)/100)+Math.floor((e-1601+r)/400)+365*(e-1970)};var o=function toUTC(t){return l(new e(1970,0,1,0,0,0,t))};for(var u in e){if($(e,u)){t[u]=e[u]}}M(t,{now:e.now,UTC:e.UTC},true);t.prototype=e.prototype;M(t.prototype,{constructor:t},true);var f=function parse(t){var n=r.exec(t);if(n){var a=l(n[1]),u=l(n[2]||1)-1,f=l(n[3]||1)-1,s=l(n[4]||0),c=l(n[5]||0),v=l(n[6]||0),p=Math.floor(l(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),g=n[9]==="-"?1:-1,y=l(n[10]||0),d=l(n[11]||0),w;if(s<(c>0||v>0||p>0?24:25)&&c<60&&v<60&&p<1e3&&u>-1&&u<12&&y<24&&d<60&&f>-1&&f<i(a,u+1)-i(a,u)){w=((i(a,u)+f)*24+s+y*g)*60;w=((w+c+d*g)*60+v)*1e3+p;if(h){w=o(w)}if(-864e13<=w&&w<=864e13){return w}}return NaN}return e.parse.apply(this,arguments)};M(t,{parse:f});return t}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var xe=u.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var Oe={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(e,t){var r=-1;var n=t;while(++r<Oe.size){n+=e*Oe.data[r];Oe.data[r]=n%Oe.base;n=Math.floor(n/Oe.base)}},divide:function divide(e){var t=Oe.size,r=0;while(--t>=0){r+=Oe.data[t];Oe.data[t]=Math.floor(r/e);r=r%e*Oe.base}},numToString:function numToString(){var e=Oe.size;var t="";while(--e>=0){if(t!==""||e===0||Oe.data[e]!==0){var r=a(Oe.data[e]);if(t===""){t=r}else{t+=P("0000000",0,7-r.length)+r}}}return t},pow:function pow(e,t,r){return t===0?r:t%2===1?pow(e,t-1,r*e):pow(e*e,t/2,r)},log:function log(e){var t=0;var r=e;while(r>=4096){t+=12;r/=4096}while(r>=2){t+=1;r/=2}return t}};M(u,{toFixed:function toFixed(e){var t,r,n,i,o,u,f,s;t=l(e);t=t!==t?0:Math.floor(t);if(t<0||t>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=l(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return a(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){o=Oe.log(r*Oe.pow(2,69,1))-69;u=o<0?r*Oe.pow(2,-o,1):r/Oe.pow(2,o,1);u*=4503599627370496;o=52-o;if(o>0){Oe.multiply(0,u);f=t;while(f>=7){Oe.multiply(1e7,0);f-=7}Oe.multiply(Oe.pow(10,f,1),0);f=o-1;while(f>=23){Oe.divide(1<<23);f-=23}Oe.divide(1<<f);Oe.multiply(1,1);Oe.divide(2);i=Oe.numToString()}else{Oe.multiply(0,u);Oe.multiply(1<<-o,0);i=Oe.numToString()+P("0.00000000000000000000",2,2+t)}}if(t>0){s=i.length;if(s<=t){i=n+P("0.0000000000000000000",0,t-s+2)+i}else{i=n+P(i,0,s-t)+"."+P(i,s-t)}}else{i=n+i}return i}},xe);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var e=typeof/()??/.exec("")[1]==="undefined";o.split=function(t,r){var n=this;if(typeof t==="undefined"&&r===0){return[]}if(!S(t)){return Z(this,t,r)}var i=[];var a=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),o=0,l,u,s,v;var p=new RegExp(t.source,a+"g");n+="";if(!e){l=new RegExp("^"+p.source+"$(?!\\s)",a)}var h=typeof r==="undefined"?-1>>>0:A.ToUint32(r);u=p.exec(n);while(u){s=u.index+u[0].length;if(s>o){c.call(i,P(n,o,u.index));if(!e&&u.length>1){u[0].replace(l,function(){for(var e=1;e<arguments.length-2;e++){if(typeof arguments[e]==="undefined"){u[e]=void 0}}})}if(u.length>1&&u.index<n.length){c.apply(i,f.call(u,1))}v=u[0].length;o=s;if(i.length>=h){break}}if(p.lastIndex===u.index){p.lastIndex++}u=p.exec(n)}if(o===n.length){if(v||!p.test("")){c.call(i,"")}}else{c.call(i,P(n,o))}return i.length>h?P(i,0,h):i}})()}else if("0".split(void 0,0).length){o.split=function split(e,t){if(typeof e==="undefined"&&t===0){return[]}return Z(this,e,t)}}var Se=o.replace;var je=function(){var e=[];"x".replace(/x(.)?/g,function(t,r){c.call(e,r)});return e.length===1&&typeof e[0]==="undefined"}();if(!je){o.replace=function replace(e,t){var r=m(t);var n=S(e)&&/\)[*?]/.test(e.source);if(!r||!n){return Se.call(this,e,t)}else{var i=function(r){var n=arguments.length;var i=e.lastIndex;e.lastIndex=0;var a=e.exec(r)||[];e.lastIndex=i;c.call(a,arguments[n-2],arguments[n-1]);return t.apply(this,a)};return Se.call(this,e,i)}}}var Ee=o.substr;var Ie="".substr&&"0b".substr(-1)!=="b";M(o,{substr:function substr(e,t){var r=e;if(e<0){r=g(this.length+e,0)}return Ee.call(this,r,t)}},Ie);var De="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var ke="\u200b";var Ne="["+De+"]";var Fe=new RegExp("^"+Ne+Ne+"*");var Me=new RegExp(Ne+Ne+"*$");var Re=o.trim&&(De.trim()||!ke.trim());M(o,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return a(this).replace(Fe,"").replace(Me,"")}},Re);if(parseInt(De+"08")!==8||parseInt(De+"0x16")!==22){parseInt=function(e){var t=/^0[xX]/;return function parseInt(r,n){var i=a(r).trim();var o=l(n)||(t.test(i)?16:10);return e(i,o)}}(parseInt)}});
//# sourceMappingURL=es5-shim.map




/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.13/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.prototype.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n=e.bind(t.propertyIsEnumerable);var o=e.bind(t.toString);var i;var c;var f;var a;var l=r(t,"__defineGetter__");if(l){i=e.bind(t.__defineGetter__);c=e.bind(t.__defineSetter__);f=e.bind(t.__lookupGetter__);a=e.bind(t.__lookupSetter__)}if(!Object.getPrototypeOf){Object.getPrototypeOf=function getPrototypeOf(e){var r=e.__proto__;if(r||r===null){return r}else if(o(e.constructor)==="[object Function]"){return e.constructor.prototype}else if(!(e instanceof Object)){return null}else{return t}}}var u=function doesGetOwnPropertyDescriptorWork(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){return false}};if(Object.defineProperty){var p=u({});var s=typeof document==="undefined"||u(document.createElement("div"));if(!s||!p){var b=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||b){var O="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(e,o){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(O+e)}if(b){try{return b.call(Object,e,o)}catch(i){}}var c;if(!r(e,o)){return c}c={enumerable:n(e,o),configurable:true};if(l){var u=e.__proto__;var p=e!==t;if(p){e.__proto__=t}var s=f(e,o);var y=a(e,o);if(p){e.__proto__=u}if(s||y){if(s){c.get=s}if(y){c.set=y}return c}}c.value=e[o];c.writable=true;return c}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function getOwnPropertyNames(e){return Object.keys(e)}}if(!Object.create){var y;var d=!({__proto__:null}instanceof Object);var j=function shouldUseActiveX(){if(!document.domain){return false}try{return!!new ActiveXObject("htmlfile")}catch(e){return false}};var v=function getEmptyViaActiveX(){var e;var t;t=new ActiveXObject("htmlfile");t.write("<script></script>");t.close();e=t.parentWindow.Object.prototype;t=null;return e};var _=function getEmptyViaIFrame(){var e=document.createElement("iframe");var t=document.body||document.documentElement;var r;e.style.display="none";t.appendChild(e);e.src="javascript:";r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;return r};if(d||typeof document==="undefined"){y=function(){return{__proto__:null}}}else{y=function(){var e=j()?v():_();delete e.constructor;delete e.hasOwnProperty;delete e.propertyIsEnumerable;delete e.isPrototypeOf;delete e.toLocaleString;delete e.toString;delete e.valueOf;var t=function Empty(){};t.prototype=e;y=function(){return new t};return new t}}Object.create=function create(e,t){var r;var n=function Type(){};if(e===null){r=y()}else{if(typeof e!=="object"&&typeof e!=="function"){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}var w=function doesDefinePropertyWork(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){return false}};if(Object.defineProperty){var m=w({});var P=typeof document==="undefined"||w(document.createElement("div"));if(!m||!P){var E=Object.defineProperty,h=Object.defineProperties}}if(!Object.defineProperty||E){var g="Property description must be an object: ";var z="Object.defineProperty called on non-object: ";var T="getters & setters can not be defined on this javascript engine";Object.defineProperty=function defineProperty(e,r,n){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(z+e)}if(typeof n!=="object"&&typeof n!=="function"||n===null){throw new TypeError(g+n)}if(E){try{return E.call(Object,e,r,n)}catch(o){}}if("value"in n){if(l&&(f(e,r)||a(e,r))){var u=e.__proto__;e.__proto__=t;delete e[r];e[r]=n.value;e.__proto__=u}else{e[r]=n.value}}else{if(!l&&("get"in n||"set"in n)){throw new TypeError(T)}if("get"in n){i(e,r,n.get)}if("set"in n){c(e,r,n.set)}}return e}}if(!Object.defineProperties||h){Object.defineProperties=function defineProperties(e,t){if(h){try{return h.call(Object,e,t)}catch(r){}}Object.keys(t).forEach(function(r){if(r!=="__proto__"){Object.defineProperty(e,r,t[r])}});return e}}if(!Object.seal){Object.seal=function seal(e){if(Object(e)!==e){throw new TypeError("Object.seal can only be called on Objects.")}return e}}if(!Object.freeze){Object.freeze=function freeze(e){if(Object(e)!==e){throw new TypeError("Object.freeze can only be called on Objects.")}return e}}try{Object.freeze(function(){})}catch(x){Object.freeze=function(e){return function freeze(t){if(typeof t==="function"){return t}else{return e(t)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function preventExtensions(e){if(Object(e)!==e){throw new TypeError("Object.preventExtensions can only be called on Objects.")}return e}}if(!Object.isSealed){Object.isSealed=function isSealed(e){if(Object(e)!==e){throw new TypeError("Object.isSealed can only be called on Objects.")}return false}}if(!Object.isFrozen){Object.isFrozen=function isFrozen(e){if(Object(e)!==e){throw new TypeError("Object.isFrozen can only be called on Objects.")}return false}}if(!Object.isExtensible){Object.isExtensible=function isExtensible(e){if(Object(e)!==e){throw new TypeError("Object.isExtensible can only be called on Objects.")}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});
//# sourceMappingURL=es5-sham.map
