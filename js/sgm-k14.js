/* jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement){cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close()}d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1){for(h in a.converters){typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h])}}l=k,k=d[g];if(k==="*"){k=l}else{if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g){i in d&&(c[g[i]]=d[i])}while(f[0]==="*"){f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"))}if(h){for(i in e){if(e[i]&&e[i].test(h)){f.unshift(i);break}}}if(f[0] in d){j=f[0]}else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b)){f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)})}else{if(!c&&f.type(b)==="object"){for(var e in b){b_(a+"["+e+"]",b[e],c,d)}}else{d(a,b)}}}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c){c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d])}e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++){l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)))}(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++){h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border"){for(;e<g;e+=2){c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0}}return d+"px"}d=by(a,b);if(d<0||d==null){d=a.style[b]}if(bt.test(d)){return d}d=parseFloat(d)||0;if(c){for(;e<g;e+=2){d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0)}}return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio"){a.defaultChecked=a.checked}}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i){for(d=0,e=i[c].length;d<e;d++){f.event.add(b,c,i[c][d])}}}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement){while(b.length){c.createElement(b.pop())}}return c}function T(a,b,c){b=b||0;if(f.isFunction(b)){return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c})}if(b.nodeType){return f.grep(a,function(a,d){return a===b===c})}if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b)){return f.filter(b,d,!c)}b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return !a||!a.parentNode||a.parentNode.nodeType===11}function K(){return !0}function J(){return !1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b])){continue}if(b!=="toJSON"){return !1}}return !0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else{d=b}}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++){b[a[c]]=!0}return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a){return this}if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2]){return f.find(a)}this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return !d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a)){return f.ready(a)}a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++){if((a=arguments[j])!=null){for(c in a){d=i[c],f=a[c];if(i===f){continue}l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}}}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body){return setTimeout(e.ready,1)}e.isReady=!0;if(a!==!0&&--e.readyWait>0){return}A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete"){return setTimeout(e.ready,1)}if(c.addEventListener){c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1)}else{if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a)){return !1}try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf")){return !1}}catch(c){return !1}var d;for(d in a){}return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a){return !1}return !0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b){return null}b=e.trim(b);if(a.JSON&&a.JSON.parse){return a.JSON.parse(b)}if(n.test(b.replace(o,"@").replace(p,"]").replace(q,""))){return(new Function("return "+b))()}e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c){return null}var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a){if(c.apply(a[f],d)===!1){break}}}else{for(;g<h;){if(c.apply(a[g++],d)===!1){break}}}}else{if(i){for(f in a){if(c.call(a[f],f,a[f])===!1){break}}}else{for(;g<h;){if(c.call(a[g],g,a[g++])===!1){break}}}}return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H){return H.call(b,a,c)}d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++){if(c in b&&b[c]===a){return c}}}return -1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number"){for(var f=c.length;e<f;e++){a[d++]=c[e]}}else{while(c[e]!==b){a[d++]=c[e++]}}a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++){e=!!b(a[f],f),c!==e&&d.push(a[f])}return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k){for(;i<j;i++){f=c(a[i],i,d),f!=null&&(h[h.length]=f)}}else{for(g in a){f=c(a[g],g,d),f!=null&&(h[h.length]=f)}}return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a)){return b}var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d){e.access(a,c,l,d[l],1,h,f)}g=1}else{if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c){for(;l<m;l++){c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i)}}g=1}}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++){g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)}},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++){if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++){for(var f=0;f<c.length;f++){if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique){break}}}}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++){if(a===c[b]){return !0}}}return !1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return !c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return !d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return !!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null){a=h}else{for(var b in h){a[b]=h[b]}}return a}},i=h.promise({}),j;for(j in g){i[j]=g[j].fire,i[j+"With"]=g[j].fireWith}i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++){b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g}g||j.resolveWith(j,b)}else{j!==a&&j.resolveWith(j,d?[a]:[])}return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e){return{}}g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent){for(n in {submit:1,change:1,focusin:1}){m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o}}j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div><table "+n+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return !!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b){return}n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function"){e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c)}g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c]){return g.events}k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k]){return}if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++){delete d[b[e]]}if(!(c?m:f.isEmptyObject)(d)){return}}}if(!c){delete j[k].data;if(!m(j[k])){return}}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b){return b!==!0&&a.getAttribute("classid")===b}}return !0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++){h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]))}f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object"){return this.each(function(){f.data(this,a)})}d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d){return f.queue(this[0],a)}return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--){if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0)){h++,l.add(m)}}m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a)){return this.each(function(b){f(this).addClass(a.call(this,b,this.className))})}if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1){if(!e.className&&b.length===1){e.className=a}else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++){~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ")}e.className=f.trim(g)}}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a)){return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))})}if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className){if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++){h=h.replace(" "+c[i]+" "," ")}g.className=f.trim(h)}else{g.className=""}}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a)){return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)})}return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++]){i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}}else{if(c==="undefined"||c==="boolean"){this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""}}})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1){return !0}}return !1},val:function(a){var c,d,e,g=this[0];if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set" in c)||c.set(this,h,"value")===b){this.value=h}}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get" in c&&(d=c.get(g,"value"))!==b){return d}d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return !b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0){return null}c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j){return b}h.push(b)}}if(j&&!h.length&&i.length){return f(i[g]).val()}return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn){return f(a)[c](d)}if(typeof a.getAttribute=="undefined"){return f.prop(a,c,d)}i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set" in h&&i&&(g=h.set(a,d,c))!==b){return g}a.setAttribute(c,""+d);return d}if(h&&"get" in h&&i&&(g=h.get(a,c))!==null){return g}g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++){e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode){f.error("type property can't be changed")}else{if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button")){return w.get(a,b)}return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button")){return w.set(a,b,c)}a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set" in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get" in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b)){return a.checked=f.inArray(f(a).val(),b)>=0}}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1){a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o){f.event.remove(a,j+b[h],c,d,!0)}continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++){s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s))}r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered)){return}h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h]){return}c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j){j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0)}return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1){return}r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode){r.push([m,s]),n=m}n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault()}c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this){if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++){s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s)}r.length&&j.push({elem:m,matches:r})}}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace)){c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando]){return a}var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;){e=i[--d],a[e]=g[e]}a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event)){return new f.Event(a,b)}a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d)){a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b}return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form")){return !1}f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form")){return !1}f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))})}return !1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox"){return a.handleObj.handler.apply(this,arguments)}},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a){this.on(i,c,d,a[i],g)}return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1){e=J}else{if(!e){return this}}g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a){this.off(g,c,a[g])}return this}if(c===!1||typeof c=="function"){d=c,c=b}d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){return f.event.trigger(a,b,this[0],!0)}},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length){b[d++].guid=c}return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else{if(m.filter(b,[j]).length>0){k=j;break}}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9){return[]}if(!b||typeof b!="string"){return e}var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b)){if(w.length===2&&o.relative[w[0]]){j=y(w[0]+w[1],d,f)}else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length){b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}}}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length){q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}}else{k=w=[]}}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]"){if(!u){e.push.apply(e,k)}else{if(d&&d.nodeType===1){for(t=0;k[t]!=null;t++){k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t])}}else{for(t=0;k[t]!=null;t++){k[t]&&k[t].nodeType===1&&e.push(j[t])}}}}else{s(k,e)}l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h){for(var b=1;b<a.length;b++){a[b]===a[b-1]&&a.splice(b--,1)}}}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a){return[]}for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter){if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\"){continue}s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f){g=i=!0}else{if(f===!0){continue}}}if(f){for(n=0;(j=s[n])!=null;n++){j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0))}}if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g){return[]}break}}}if(a===q){if(g==null){m.error(a)}else{break}}q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string"){return a.textContent}if(typeof a.innerText=="string"){return a.innerText.replace(k,"")}for(a=a.firstChild;a;a=a.nextSibling){e+=n(a)}}else{if(d===3||d===4){return a.nodeValue}}}else{for(b=0;c=a[b];b++){c.nodeType!==8&&(e+=n(c))}}return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++){if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++){c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b)}d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++){d[e].getAttribute("name")===a[1]&&c.push(d[e])}return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"){return b.getElementsByTagName(a[1])}}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f){return a}for(var g=0,h;(h=b[g])!=null;g++){h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1))}return !1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else{a[2]&&m.error(a[0])}a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not"){if((a.exec(b[3])||"").length>1||/^\w/.test(b[3])){b[3]=m(b[3],null,null,c)}else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return !1}}else{if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0])){return !0}}return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return !!a.firstChild},empty:function(a){return !a.firstChild},has:function(a,b,c){return !!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f){return f(a,c,b,d)}if(e==="contains"){return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0}if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++){if(g[h]===a){return !1}}return !0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling){if(l.nodeType===1){return !1}}if(k==="first"){return !0}l=a;case"last":while(l=l.nextSibling){if(l.nodeType===1){return !1}}return !0;case"nth":c=b[2],e=b[3];if(c===1&&e===0){return !0}f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling){l.nodeType===1&&(l.nodeIndex=++i)}g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f){return f(a,c,b,d)}}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match){o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q))}o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]"){Array.prototype.push.apply(d,a)}else{if(typeof a.length=="number"){for(var e=a.length;c<e;c++){d.push(a[c])}}else{for(;a[c];c++){d.push(a[c])}}}return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1}return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex}var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i){return v(a,b)}if(!g){return -1}if(!i){return 1}while(j){e.unshift(j),j=j.parentNode}j=i;while(j){f.unshift(j),j=j.parentNode}c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++){if(e[k]!==f[k]){return v(e[k],f[k])}}return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b){return c}var d=a.nextSibling;while(d){if(d===b){return -1}d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++){c[e].nodeType===1&&d.push(c[e])}c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1]){return s(e.getElementsByTagName(b),f)}if(h[2]&&o.find.CLASS&&e.getElementsByClassName){return s(e.getElementsByClassName(h[2]),f)}}if(e.nodeType===9){if(b==="body"&&e.body){return s([e.body],f)}if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode){return s([],f)}if(i.id===h[3]){return s([i],f)}}try{return s(e.querySelectorAll(b),f)}catch(j){}}else{if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p){return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}}catch(r){}finally{l||k.removeAttribute("id")}}}}return a(b,e,f,g)};for(var e in a){m[e]=a[e]}b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a)){try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11){return f}}}catch(g){}}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1){return}o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c){return b.getElementsByClassName(a[1])}},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return !1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a)){f+=d[0],a=a.replace(o.match.PSEUDO,"")}a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++){m(a,g[h],e,c)}return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string"){return f(a).filter(function(){for(c=0,d=b.length;c<d;c++){if(f.contains(b[c],this)){return !0}}})}var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0){for(h=g;h<e.length;h++){for(i=0;i<g;i++){if(e[i]===e[h]){e.splice(h--,1);break}}}}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++){if(f.contains(this,b[a])){return !0}}})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return !!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++){f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h})}g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11){break}}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a){return this[0]&&this[0].parentNode?this.prevAll().length:-1}if(typeof a=="string"){return f.inArray(this[0],f(a))}return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d))){g.nodeType===1&&e.push(g),g=g[c]}return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c]){if(a.nodeType===1&&++e===b){break}}return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling){a.nodeType===1&&a!==b&&c.push(a)}return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapAll(a.call(this,b))})}if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1){a=a.firstChild}return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapInner(a.call(this,b))})}return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)})}if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)})}if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++){if(!a||f.filter(a,[d]).length){!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d)}}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild){b.removeChild(b.firstChild)}}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b){return c.nodeType===1?c.innerHTML.replace(W,""):null}if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++){c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a)}c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a)){return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))})}typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j)){return this.each(function(){f(this).domManip(a,c,d,!0)})}if(f.isFunction(j)){return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)})}if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++){d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g){e[g]&&bk(d[g],e[g])}}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g){bj(d[g],e[g])}}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l){continue}if(typeof l=="string"){if(!_.test(l)){l=b.createTextNode(l)}else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--){p=p.lastChild}if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i){f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}}var u;if(!f.support.appendChecked){if(l[0]&&typeof(u=l.length)=="number"){for(i=0;i<u;i++){bn(l[i])}}else{bn(l)}}l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return !a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type))){e.push(h.parentNode?h.parentNode.removeChild(h):h)}else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()]){continue}c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events){e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle)}b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get" in k&&(g=k.get(a,!1,e))!==b){return g}return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d)){return}h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set" in k)||(d=k.set(a,d))!==b){try{j[c]=d}catch(l){}}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get" in g&&(e=g.get(a,!0,d))!==b){return e}if(by){return by(a,c)}},swap:function(a,b,c){var d={},e,f;for(f in b){d[f]=a.style[f],a.style[f]=b[f]}e=c.call(a);for(f in b){a.style[f]=d[f]}return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c){return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})}},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter){return}}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return !f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++){f[a+bx[d]+b]=e[d]||e[d-2]||e[0]}return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR){return bR.apply(this,arguments)}if(!this.length){return this}var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified")){f.lastModified[k]=y}if(z=v.getResponseHeader("Etag")){f.etag[k]=z}}if(a===304){w="notmodified",o=!0}else{try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}}else{u=w;if(!w||a){w="error",a<0&&(a=0)}}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n)){o[c[1].toLowerCase()]=c[2]}}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2){for(b in a){j[b]=[j[b],a[b]]}}else{b=a[v.status],v.then(b,b)}}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2){return !1}t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers){v.setRequestHeader(u,d.headers[u])}if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return !1}for(u in {success:1,error:1,complete:1}){v[u](d[u])}p=bZ(bT,d,c,v);if(!p){w(-1,"No Transport")}else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2){w(-1,z)}else{throw z}}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a)){f.each(a,function(){e(this.name,this.value)})}else{for(var g in a){b_(g,a[g],c,e)}}return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState)){d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")}},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg){cg[a](0,1)}}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return !this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials" in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields){for(j in c.xhrFields){h[j]=c.xhrFields[j]}}c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e){h.setRequestHeader(j,e[j])}}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e){h.readyState!==4&&h.abort()}else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0){return this.animate(ct("show",3),a,b,c)}for(var g=0,h=this.length;g<h;g++){d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)))}for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none"){d.style.display=f._data(d,"olddisplay")||""}}}return this},hide:function(a,b,c){if(a||a===0){return this.animate(ct("hide",3),a,b,c)}var d,e,g=0,h=this.length;for(;g<h;g++){d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e))}for(g=0;g<h;g++){this[g].style&&(this[g].style.display="none")}return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand" in k){l=k.expand(a[g]),delete a[g];for(i in l){i in a||(a[i]=l[i])}}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d){return b.complete.call(this)}c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a){j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""))}return !0}var e=f.speed(b,c,d);if(f.isEmptyObject(a)){return this.each(e.complete,[!1])}a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null){for(b in g){g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b)}}else{g[b=a+".run"]&&g[b].stop&&h(this,g,b)}for(b=e.length;b--;){e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1))}(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0){d.queue="fx"}d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return -Math.cos(a*Math.PI)/2+0.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties){i.animatedProperties[b]!==!0&&(g=!1)}if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show){for(b in i.animatedProperties){f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0)}}d=i.complete,d&&(i.complete=!1,d.call(h))}return !1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return !0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++){a=b[c],!a()&&b[c]===a&&b.splice(c--,1)}b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect" in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a)){return d?{top:d.top,left:d.left}:{top:0,left:0}}var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed"){break}d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static"){k+=h.offsetTop,l+=h.offsetLeft}f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length){return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)})}var c=this[0],d=c&&c.ownerDocument;if(!d){return null}if(c===d.body){return f.offset.bodyOffset(c)}return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using" in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0]){return null}var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static"){a=a.offsetParent}return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b){return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e]}h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e]){return i[d]}return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(d,a){d.ui=d.ui||{};if(d.ui.version){return}d.extend(d.ui,{version:"1.8.16",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});d.fn.extend({propAttr:d.fn.prop||d.fn.attr,_focus:d.fn.focus,focus:function(f,e){return typeof f==="number"?this.each(function(){var g=this;setTimeout(function(){d(g).focus();if(e){e.call(g)}},f)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;if((d.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){e=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(d.curCSS(this,"position",1))&&(/(auto|scroll)/).test(d.curCSS(this,"overflow",1)+d.curCSS(this,"overflow-y",1)+d.curCSS(this,"overflow-x",1))}).eq(0)}else{e=this.parents().filter(function(){return(/(auto|scroll)/).test(d.curCSS(this,"overflow",1)+d.curCSS(this,"overflow-y",1)+d.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!e.length?d(document):e},zIndex:function(g){if(g!==a){return this.css("zIndex",g)}if(this.length){var h=d(this[0]),e,f;while(h.length&&h[0]!==document){e=h.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(h.css("zIndex"),10);if(!isNaN(f)&&f!==0){return f}}h=h.parent()}}return 0},disableSelection:function(){return this.bind((d.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});d.each(["Width","Height"],function(f,j){var k=j==="Width"?["Left","Right"]:["Top","Bottom"],h=j.toLowerCase(),g={innerWidth:d.fn.innerWidth,innerHeight:d.fn.innerHeight,outerWidth:d.fn.outerWidth,outerHeight:d.fn.outerHeight};function e(n,l,i,m){d.each(k,function(){l-=parseFloat(d.curCSS(n,"padding"+this,true))||0;if(i){l-=parseFloat(d.curCSS(n,"border"+this+"Width",true))||0}if(m){l-=parseFloat(d.curCSS(n,"margin"+this,true))||0}});return l}d.fn["inner"+j]=function(i){if(i===a){return g["inner"+j].call(this)}return this.each(function(){d(this).css(h,e(this,i)+"px")})};d.fn["outer"+j]=function(l,i){if(typeof l!=="number"){return g["outer"+j].call(this,l)}return this.each(function(){d(this).css(h,e(this,l,true,i)+"px")})}});function c(f,j){var i=f.nodeName.toLowerCase();if("area"===i){var g=f.parentNode,e=g.name,h;if(!f.href||!e||g.nodeName.toLowerCase()!=="map"){return false}h=d("img[usemap=#"+e+"]")[0];return !!h&&b(h)}return(/input|select|textarea|button|object/.test(i)?!f.disabled:"a"==i?f.href||j:j)&&b(f)}function b(e){return !d(e).parents().andSelf().filter(function(){return d.curCSS(this,"visibility")==="hidden"||d.expr.filters.hidden(this)}).length}d.extend(d.expr[":"],{data:function(f,e,g){return !!d.data(f,g[3])},focusable:function(e){return c(e,!isNaN(d.attr(e,"tabindex")))},tabbable:function(g){var e=d.attr(g,"tabindex"),f=isNaN(e);return(f||e>=0)&&c(g,!f)}});d(function(){var e=document.body,f=e.appendChild(f=document.createElement("div"));d.extend(f.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});d.support.minHeight=f.offsetHeight===100;d.support.selectstart="onselectstart" in f;e.removeChild(f).style.display="none"});d.extend(d.ui,{plugin:{add:function(g,f,h){var j=d.ui[g].prototype;for(var e in h){j.plugins[e]=j.plugins[e]||[];j.plugins[e].push([f,h[e]])}},call:function(h,j,f){var g=h.plugins[j];if(!g||!h.element[0].parentNode){return}for(var e=0;e<g.length;e++){if(h.options[g[e][0]]){g[e][1].apply(h.element,f)}}}},contains:function(e,f){return document.compareDocumentPosition?e.compareDocumentPosition(f)&16:e!==f&&e.contains(f)},hasScroll:function(g,f){if(d(g).css("overflow")==="hidden"){return false}var e=(f&&f==="left")?"scrollLeft":"scrollTop",h=false;if(g[e]>0){return true}g[e]=1;h=(g[e]>0);g[e]=0;return h},isOverAxis:function(g,e,f){return(g>e)&&(g<(e+f))},isOver:function(g,f,j,i,h,e){return d.ui.isOverAxis(g,j,h)&&d.ui.isOverAxis(f,i,e)}})})(jQuery);
/*
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(d,a){if(d.cleanData){var b=d.cleanData;d.cleanData=function(h){for(var f=0,g;(g=h[f])!=null;f++){try{d(g).triggerHandler("remove")}catch(j){}}b(h)}}else{var c=d.fn.remove;d.fn.remove=function(e,f){return this.each(function(){if(!f){if(!e||d.filter(e,[this]).length){d("*",this).add([this]).each(function(){try{d(this).triggerHandler("remove")}catch(g){}})}}return c.call(d(this),e,f)})}}d.widget=function(i,e,j){var h=i.split(".")[0],f;i=i.split(".")[1];f=h+"-"+i;if(!j){j=e;e=d.Widget}d.expr[":"][f]=function(k){return !!d.data(k,i)};d[h]=d[h]||{};d[h][i]=function(l,k){if(arguments.length){this._createWidget(l,k)}};var g=new e();g.options=d.extend(true,{},g.options);d[h][i].prototype=d.extend(true,g,{namespace:h,widgetName:i,widgetEventPrefix:d[h][i].prototype.widgetEventPrefix||i,widgetBaseClass:f},j);d.widget.bridge(i,d[h][i])};d.widget.bridge=function(f,e){d.fn[f]=function(j){var i=typeof j==="string",g=Array.prototype.slice.call(arguments,1),h=this;j=!i&&g.length?d.extend.apply(null,[true,j].concat(g)):j;if(i&&j.charAt(0)==="_"){return h}if(i){this.each(function(){var l=d.data(this,f),k=l&&d.isFunction(l[j])?l[j].apply(l,g):l;if(k!==l&&k!==a){h=k;return false}})}else{this.each(function(){var k=d.data(this,f);if(k){k.option(j||{})._init()}else{d.data(this,f,new e(j,this))}})}return h}};d.Widget=function(f,e){if(arguments.length){this._createWidget(f,e)}};d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(g,f){d.data(f,this.widgetName,this);this.element=d(f);this.options=d.extend(true,{},this.options,this._getCreateOptions(),g);var e=this;this.element.bind("remove."+this.widgetName,function(){e.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return d.metadata&&d.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(g,e){var f=g;if(arguments.length===0){return d.extend({},this.options)}if(typeof g==="string"){if(e===a){return this.options[g]}f={};f[g]=e}this._setOptions(f);return this},_setOptions:function(f){var e=this;d.each(f,function(g,h){e._setOption(g,h)});return this},_setOption:function(e,f){this.options[e]=f;if(e==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(j,k,h){var f=this.options[j];k=d.Event(k);k.type=(j===this.widgetEventPrefix?j:this.widgetEventPrefix+j).toLowerCase();h=h||{};if(k.originalEvent){for(var e=d.event.props.length,g;e;){g=d.event.props[--e];k[g]=k.originalEvent[g]}}this.element.trigger(k,h);return !(d.isFunction(f)&&f.call(this.element[0],k,h)===false||k.isDefaultPrevented())}}})(jQuery);
/*
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(c,b){var a=false;c(document).mouseup(function(d){a=false});c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===c.data(e.target,d.widgetName+".preventClickEvent")){c.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(e){if(a){return}(this._mouseStarted&&this._mouseUp(e));this._mouseDownEvent=e;var f=this,d=(e.which==1),g=(typeof this.options.cancel=="string"&&e.target.nodeName?c(e.target).closest(this.options.cancel).length:false);if(!d||g||!this._mouseCapture(e)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=(this._mouseStart(e)!==false);if(!this._mouseStarted){e.preventDefault();return true}}if(true===c.data(e.target,this.widgetName+".preventClickEvent")){c.removeData(e.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(h){return f._mouseMove(h)};this._mouseUpDelegate=function(h){return f._mouseUp(h)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);e.preventDefault();a=true;return true},_mouseMove:function(d){if(c.browser.msie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted},_mouseUp:function(d){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(d.target==this._mouseDownEvent.target){c.data(d.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)},_mouseDelayMet:function(d){return this.mouseDelayMet},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true}})})(jQuery);(function(b,a){b.widget("ui.draggable",b.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(c){var d=this.options;if(this.helper||d.disabled||b(c.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(c);if(!this.handle){return false}if(d.iframeFix){b(d.iframeFix===true?"iframe":d.iframeFix).each(function(){b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(b(this).offset()).appendTo("body")})}return true},_mouseStart:function(c){var d=this.options;this.helper=this._createHelper(c);this._cacheHelperProportions();if(b.ui.ddmanager){b.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};b.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));if(d.containment){this._setContainment()}if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();if(b.ui.ddmanager&&!d.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,c)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(c,true);if(b.ui.ddmanager){b.ui.ddmanager.dragStart(this,c)}return true},_mouseDrag:function(d,e){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!e){var c=this._uiHash();if(this._trigger("drag",d,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(b.ui.ddmanager){b.ui.ddmanager.drag(this,d)}return false},_mouseStop:function(d){var e=false;if(b.ui.ddmanager&&!this.options.dropBehaviour){e=b.ui.ddmanager.drop(this,d)}if(this.dropped){e=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false}if((this.options.revert=="invalid"&&!e)||(this.options.revert=="valid"&&e)||this.options.revert===true||(b.isFunction(this.options.revert)&&this.options.revert.call(this.element,e))){var c=this;b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",d)!==false){c._clear()}})}else{if(this._trigger("stop",d)!==false){this._clear()}}return false},_mouseUp:function(c){if(this.options.iframeFix===true){b("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}if(b.ui.ddmanager){b.ui.ddmanager.dragStop(this,c)}return b.ui.mouse.prototype._mouseUp.call(this,c)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(d){var c=!this.options.handle||!b(this.options.handle,this.element).length?true:false;b(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==d.target){c=true}});return c},_createHelper:function(d){var c=this.options;var e=b.isFunction(c.helper)?b(c.helper.apply(this.element[0],[d])):(c.helper=="clone"?this.element.clone().removeAttr("id"):this.element);if(!e.parents("body").length){e.appendTo((c.appendTo=="parent"?this.element[0].parentNode:c.appendTo))}if(e[0]!=this.element[0]&&!(/(fixed|absolute)/).test(e.css("position"))){e.css("position","absolute")}return e},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(b.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent"){d.containment=this.helper[0].parentNode}if(d.containment=="document"||d.containment=="window"){this.containment=[d.containment=="document"?0:b(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d.containment=="document"?0:b(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:b(window).scrollLeft())+b(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:b(window).scrollTop())+(b(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(d.containment)&&d.containment.constructor!=Array){var f=b(d.containment);var h=f[0];if(!h){return}var e=f.offset();var g=(b(h).css("overflow")!="hidden");this.containment=[(parseInt(b(h).css("borderLeftWidth"),10)||0)+(parseInt(b(h).css("paddingLeft"),10)||0),(parseInt(b(h).css("borderTopWidth"),10)||0)+(parseInt(b(h).css("paddingTop"),10)||0),(g?Math.max(h.scrollWidth,h.offsetWidth):h.offsetWidth)-(parseInt(b(h).css("borderLeftWidth"),10)||0)-(parseInt(b(h).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(g?Math.max(h.scrollHeight,h.offsetHeight):h.offsetHeight)-(parseInt(b(h).css("borderTopWidth"),10)||0)-(parseInt(b(h).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=f}else{if(d.containment.constructor==Array){this.containment=d.containment}}},_convertPositionTo:function(h,c){if(!c){c=this.position}var g=h=="absolute"?1:-1;var f=this.options,e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(e[0].tagName);return{top:(c.top+this.offset.relative.top*g+this.offset.parent.top*g-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:e.scrollTop()))*g)),left:(c.left+this.offset.relative.left*g+this.offset.parent.left*g-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:e.scrollLeft())*g))}},_generatePosition:function(i){var g=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(f[0].tagName);var e=i.pageX;var c=i.pageY;if(this.originalPosition){var d;if(this.containment){if(this.relative_container){var j=this.relative_container.offset();d=[this.containment[0]+j.left,this.containment[1]+j.top,this.containment[2]+j.left,this.containment[3]+j.top]}else{d=this.containment}if(i.pageX-this.offset.click.left<d[0]){e=d[0]+this.offset.click.left}if(i.pageY-this.offset.click.top<d[1]){c=d[1]+this.offset.click.top}if(i.pageX-this.offset.click.left>d[2]){e=d[2]+this.offset.click.left}if(i.pageY-this.offset.click.top>d[3]){c=d[3]+this.offset.click.top}}if(g.grid){var k=g.grid[1]?this.originalPageY+Math.round((c-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY;c=d?(!(k-this.offset.click.top<d[1]||k-this.offset.click.top>d[3])?k:(!(k-this.offset.click.top<d[1])?k-g.grid[1]:k+g.grid[1])):k;var h=g.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX;e=d?(!(h-this.offset.click.left<d[0]||h-this.offset.click.left>d[2])?h:(!(h-this.offset.click.left<d[0])?h-g.grid[0]:h+g.grid[0])):h}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(l?0:f.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:f.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,e,c){c=c||this._uiHash();b.ui.plugin.call(this,d,[e,c]);if(d=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return b.Widget.prototype._trigger.call(this,d,e,c)},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});b.extend(b.ui.draggable,{version:"1.8.16"});b.ui.plugin.add("draggable","connectToSortable",{start:function(f,d){var g=b(this).data("draggable"),c=g.options,e=b.extend({},d,{item:g.element});g.sortables=[];b(c.connectToSortable).each(function(){var h=b.data(this,"sortable");if(h&&!h.options.disabled){g.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",f,e)}})},stop:function(e,c){var f=b(this).data("draggable"),d=b.extend({},c,{item:f.element});b.each(f.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;f.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(e);this.instance.options.helper=this.instance.options._helper;if(f.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",e,d)}})},drag:function(e,c){var g=b(this).data("draggable"),f=this;var d=function(i){var l=this.offset.click.top,k=this.offset.click.left;var m=this.positionAbs.top,q=this.positionAbs.left;var n=i.height,h=i.width;var p=i.top,j=i.left;return b.ui.isOver(m+l,q+k,p,j,n,h)};b.each(g.sortables,function(h){this.instance.positionAbs=g.positionAbs;this.instance.helperProportions=g.helperProportions;this.instance.offset.click=g.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=b(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return c.helper[0]};e.target=this.instance.currentItem[0];this.instance._mouseCapture(e,true);this.instance._mouseStart(e,true,true);this.instance.offset.click.top=g.offset.click.top;this.instance.offset.click.left=g.offset.click.left;this.instance.offset.parent.left-=g.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=g.offset.parent.top-this.instance.offset.parent.top;g._trigger("toSortable",e);g.dropped=this.instance.element;g.currentItem=g.element;this.instance.fromOutside=g}if(this.instance.currentItem){this.instance._mouseDrag(e)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",e,this.instance._uiHash(this.instance));this.instance._mouseStop(e,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}g._trigger("fromSortable",e);g.dropped=false}}})}});b.ui.plugin.add("draggable","cursor",{start:function(f,d){var e=b("body"),c=b(this).data("draggable").options;if(e.css("cursor")){c._cursor=e.css("cursor")}e.css("cursor",c.cursor)},stop:function(e,d){var c=b(this).data("draggable").options;if(c._cursor){b("body").css("cursor",c._cursor)}}});b.ui.plugin.add("draggable","opacity",{start:function(f,d){var e=b(d.helper),c=b(this).data("draggable").options;if(e.css("opacity")){c._opacity=e.css("opacity")}e.css("opacity",c.opacity)},stop:function(e,d){var c=b(this).data("draggable").options;if(c._opacity){b(d.helper).css("opacity",c._opacity)}}});b.ui.plugin.add("draggable","scroll",{start:function(e,c){var d=b(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){d.overflowOffset=d.scrollParent.offset()}},drag:function(f,d){var e=b(this).data("draggable"),c=e.options,g=false;if(e.scrollParent[0]!=document&&e.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x"){if((e.overflowOffset.top+e.scrollParent[0].offsetHeight)-f.pageY<c.scrollSensitivity){e.scrollParent[0].scrollTop=g=e.scrollParent[0].scrollTop+c.scrollSpeed}else{if(f.pageY-e.overflowOffset.top<c.scrollSensitivity){e.scrollParent[0].scrollTop=g=e.scrollParent[0].scrollTop-c.scrollSpeed}}}if(!c.axis||c.axis!="y"){if((e.overflowOffset.left+e.scrollParent[0].offsetWidth)-f.pageX<c.scrollSensitivity){e.scrollParent[0].scrollLeft=g=e.scrollParent[0].scrollLeft+c.scrollSpeed}else{if(f.pageX-e.overflowOffset.left<c.scrollSensitivity){e.scrollParent[0].scrollLeft=g=e.scrollParent[0].scrollLeft-c.scrollSpeed}}}}else{if(!c.axis||c.axis!="x"){if(f.pageY-b(document).scrollTop()<c.scrollSensitivity){g=b(document).scrollTop(b(document).scrollTop()-c.scrollSpeed)}else{if(b(window).height()-(f.pageY-b(document).scrollTop())<c.scrollSensitivity){g=b(document).scrollTop(b(document).scrollTop()+c.scrollSpeed)}}}if(!c.axis||c.axis!="y"){if(f.pageX-b(document).scrollLeft()<c.scrollSensitivity){g=b(document).scrollLeft(b(document).scrollLeft()-c.scrollSpeed)}else{if(b(window).width()-(f.pageX-b(document).scrollLeft())<c.scrollSensitivity){g=b(document).scrollLeft(b(document).scrollLeft()+c.scrollSpeed)}}}}if(g!==false&&b.ui.ddmanager&&!c.dropBehaviour){b.ui.ddmanager.prepareOffsets(e,f)}}});b.ui.plugin.add("draggable","snap",{start:function(f,d){var e=b(this).data("draggable"),c=e.options;e.snapElements=[];b(c.snap.constructor!=String?(c.snap.items||":data(draggable)"):c.snap).each(function(){var h=b(this);var g=h.offset();if(this!=e.element[0]){e.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})}})},drag:function(p,A){var z=b(this).data("draggable"),v=z.options;var y=v.snapTolerance;var f=A.offset.left,m=f+z.helperProportions.width,g=A.offset.top,n=g+z.helperProportions.height;for(var q=z.snapElements.length-1;q>=0;q--){var s=z.snapElements[q].left,h=s+z.snapElements[q].width,j=z.snapElements[q].top,w=j+z.snapElements[q].height;if(!((s-y<f&&f<h+y&&j-y<g&&g<w+y)||(s-y<f&&f<h+y&&j-y<n&&n<w+y)||(s-y<m&&m<h+y&&j-y<g&&g<w+y)||(s-y<m&&m<h+y&&j-y<n&&n<w+y))){if(z.snapElements[q].snapping){(z.options.snap.release&&z.options.snap.release.call(z.element,p,b.extend(z._uiHash(),{snapItem:z.snapElements[q].item})))}z.snapElements[q].snapping=false;continue}if(v.snapMode!="inner"){var k=Math.abs(j-n)<=y;var c=Math.abs(w-g)<=y;var u=Math.abs(s-m)<=y;var e=Math.abs(h-f)<=y;if(k){A.position.top=z._convertPositionTo("relative",{top:j-z.helperProportions.height,left:0}).top-z.margins.top}if(c){A.position.top=z._convertPositionTo("relative",{top:w,left:0}).top-z.margins.top}if(u){A.position.left=z._convertPositionTo("relative",{top:0,left:s-z.helperProportions.width}).left-z.margins.left}if(e){A.position.left=z._convertPositionTo("relative",{top:0,left:h}).left-z.margins.left}}var x=(k||c||u||e);if(v.snapMode!="outer"){var k=Math.abs(j-g)<=y;var c=Math.abs(w-n)<=y;var u=Math.abs(s-f)<=y;var e=Math.abs(h-m)<=y;if(k){A.position.top=z._convertPositionTo("relative",{top:j,left:0}).top-z.margins.top}if(c){A.position.top=z._convertPositionTo("relative",{top:w-z.helperProportions.height,left:0}).top-z.margins.top}if(u){A.position.left=z._convertPositionTo("relative",{top:0,left:s}).left-z.margins.left}if(e){A.position.left=z._convertPositionTo("relative",{top:0,left:h-z.helperProportions.width}).left-z.margins.left}}if(!z.snapElements[q].snapping&&(k||c||u||e||x)){(z.options.snap.snap&&z.options.snap.snap.call(z.element,p,b.extend(z._uiHash(),{snapItem:z.snapElements[q].item})))}z.snapElements[q].snapping=(k||c||u||e||x)}}});b.ui.plugin.add("draggable","stack",{start:function(f,d){var c=b(this).data("draggable").options;var e=b.makeArray(b(c.stack)).sort(function(h,i){return(parseInt(b(h).css("zIndex"),10)||0)-(parseInt(b(i).css("zIndex"),10)||0)});if(!e.length){return}var g=parseInt(e[0].style.zIndex)||0;b(e).each(function(h){this.style.zIndex=g+h});this[0].style.zIndex=g+e.length}});b.ui.plugin.add("draggable","zIndex",{start:function(f,d){var e=b(d.helper),c=b(this).data("draggable").options;if(e.css("zIndex")){c._zIndex=e.css("zIndex")}e.css("zIndex",c.zIndex)},stop:function(e,d){var c=b(this).data("draggable").options;if(c._zIndex){b(d.helper).css("zIndex",c._zIndex)}}})})(jQuery);(function(b,a){b.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var c=this.options,d=c.accept;this.isover=0;this.isout=1;this.accept=b.isFunction(d)?d:function(e){return e.is(d)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};b.ui.ddmanager.droppables[c.scope]=b.ui.ddmanager.droppables[c.scope]||[];b.ui.ddmanager.droppables[c.scope].push(this);(c.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var c=b.ui.ddmanager.droppables[this.options.scope];for(var d=0;d<c.length;d++){if(c[d]==this){c.splice(d,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(c,d){if(c=="accept"){this.accept=b.isFunction(d)?d:function(e){return e.is(d)}}b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(c){var d=b.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(d&&this._trigger("activate",c,this.ui(d)))},_deactivate:function(c){var d=b.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(d&&this._trigger("deactivate",c,this.ui(d)))},_over:function(c){var d=b.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(d))}},_out:function(c){var d=b.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(d))}},_drop:function(e,d){var c=d||b.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false}var f=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=b.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&b.ui.intersect(c,b.extend(g,{offset:g.element.offset()}),g.options.tolerance)){f=true;return false}});if(f){return false}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",e,this.ui(c));return this.element}return false},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}}});b.extend(b.ui.droppable,{version:"1.8.16"});b.ui.intersect=function(f,q,m){if(!q.offset){return false}var o=(f.positionAbs||f.position.absolute).left,i=o+f.helperProportions.width,e=(f.positionAbs||f.position.absolute).top,j=e+f.helperProportions.height;var n=q.offset.left,g=n+q.proportions.width,h=q.offset.top,p=h+q.proportions.height;switch(m){case"fit":return(n<=o&&i<=g&&h<=e&&j<=p);break;case"intersect":return(n<o+(f.helperProportions.width/2)&&i-(f.helperProportions.width/2)<g&&h<e+(f.helperProportions.height/2)&&j-(f.helperProportions.height/2)<p);break;case"pointer":var d=((f.positionAbs||f.position.absolute).left+(f.clickOffset||f.offset.click).left),c=((f.positionAbs||f.position.absolute).top+(f.clickOffset||f.offset.click).top),k=b.ui.isOver(c,d,h,n,q.proportions.height,q.proportions.width);return k;break;case"touch":return((e>=h&&e<=p)||(j>=h&&j<=p)||(e<h&&j>p))&&((o>=n&&o<=g)||(i>=n&&i<=g)||(o<n&&i>g));break;default:return false;break}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(c,h){var f=b.ui.ddmanager.droppables[c.options.scope]||[];var g=h?h.type:null;var k=(c.currentItem||c.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<f.length;d++){if(f[d].options.disabled||(c&&!f[d].accept.call(f[d].element[0],(c.currentItem||c.element)))){continue}for(var e=0;e<k.length;e++){if(k[e]==f[d].element[0]){f[d].proportions.height=0;continue droppablesLoop}}f[d].visible=f[d].element.css("display")!="none";if(!f[d].visible){continue}if(g=="mousedown"){f[d]._activate.call(f[d],h)}f[d].offset=f[d].element.offset();f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight}}},drop:function(c,d){var e=false;b.each(b.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&b.ui.intersect(c,this,this.options.tolerance)){e=e||this._drop.call(this,d)}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;this.isover=0;this._deactivate.call(this,d)}});return e},dragStart:function(d,c){d.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,c)}})},drag:function(d,c){if(d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,c)}b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var h=b.ui.intersect(d,this,this.options.tolerance);var g=!h&&this.isover==1?"isout":(h&&this.isover==0?"isover":null);if(!g){return}var e;if(this.options.greedy){var f=this.element.parents(":data(droppable):eq(0)");if(f.length){e=b.data(f[0],"droppable");e.greedyChild=(g=="isover"?1:0)}}if(e&&g=="isover"){e.isover=0;e.isout=1;e._out.call(e,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(e&&g=="isout"){e.isout=0;e.isover=1;e._over.call(e,c)}})},dragStop:function(d,c){d.element.parents(":not(body,html)").unbind("scroll.droppable");if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,c)}}}})(jQuery);(function(d,b){d.widget("ui.resizable",d.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var f=this,j=this.options;this.element.addClass("ui-resizable");d.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&d.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(d('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!d(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var h=this.handles.split(",");this.handles={};for(var e=0;e<h.length;e++){var g=d.trim(h[e]),l="ui-resizable-"+g;var k=d('<div class="ui-resizable-handle '+l+'"></div>');if(/sw|se|ne|nw/.test(g)){k.css({zIndex:++j.zIndex})}if("se"==g){k.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[g]=".ui-resizable-"+g;this.element.append(k)}}this._renderAxis=function(m){m=m||this.element;for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=d(this.handles[n],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var p=d(this.handles[n],this.element),q=0;q=/sw|ne|nw|se|n|s/.test(n)?p.outerHeight():p.outerWidth();var o=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");m.css(o,q);this._proportionallyResize()}if(!d(this.handles[n]).length){continue}}};this._renderAxis(this.element);this._handles=d(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!f.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}f.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();d(this.element).addClass("ui-resizable-autohide").hover(function(){if(j.disabled){return}d(this).removeClass("ui-resizable-autohide");f._handles.show()},function(){if(j.disabled){return}if(!f.resizing){d(this).addClass("ui-resizable-autohide");f._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var f=function(g){d(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){f(this.element);var e=this.element;e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);f(this.originalElement);return this},_mouseCapture:function(g){var e=false;for(var f in this.handles){if(d(this.handles[f])[0]==g.target){e=true}}return !this.options.disabled&&e},_mouseStart:function(j){var e=this.options,f=this.element.position(),i=this.element;this.resizing=true;this.documentScroll={top:d(document).scrollTop(),left:d(document).scrollLeft()};if(i.is(".ui-draggable")||(/absolute/).test(i.css("position"))){i.css({position:"absolute",top:f.top,left:f.left})}if(d.browser.opera&&(/relative/).test(i.css("position"))){i.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var g=a(this.helper.css("left")),h=a(this.helper.css("top"));if(e.containment){g+=d(e.containment).scrollLeft()||0;h+=d(e.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:g,top:h};this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalPosition={left:g,top:h};this.sizeDiff={width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()};this.originalMousePosition={left:j.pageX,top:j.pageY};this.aspectRatio=(typeof e.aspectRatio=="number")?e.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var k=d(".ui-resizable-"+this.axis).css("cursor");d("body").css("cursor",k=="auto"?this.axis+"-resize":k);i.addClass("ui-resizable-resizing");this._propagate("start",j);return true},_mouseDrag:function(j){var e=this.helper,m=this.options,q={},g=this,l=this.originalMousePosition,p=this.axis;var f=(j.pageX-l.left)||0,h=(j.pageY-l.top)||0;var r=this._change[p];if(!r){return false}var k=r.apply(this,[j,f,h]),i=d.browser.msie&&d.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(j.shiftKey);if(this._aspectRatio||j.shiftKey){k=this._updateRatio(k,j)}k=this._respectSize(k,j);this._propagate("resize",j);e.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",j,this.ui());return false},_mouseStop:function(k){this.resizing=false;var g=this.options,e=this;if(this._helper){var m=this._proportionallyResizeElements,j=m.length&&(/textarea/i).test(m[0].nodeName),l=j&&d.ui.hasScroll(m[0],"left")?0:e.sizeDiff.height,f=j?0:e.sizeDiff.width;var h={width:(e.helper.width()-f),height:(e.helper.height()-l)},i=(parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left))||null,n=(parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top))||null;if(!g.animate){this.element.css(d.extend(h,{top:n,left:i}))}e.helper.height(e.size.height);e.helper.width(e.size.width);if(this._helper&&!g.animate){this._proportionallyResize()}}d("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",k);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(g){var h=this.options,i,e,k,f,j;j={minWidth:c(h.minWidth)?h.minWidth:0,maxWidth:c(h.maxWidth)?h.maxWidth:Infinity,minHeight:c(h.minHeight)?h.minHeight:0,maxHeight:c(h.maxHeight)?h.maxHeight:Infinity};if(this._aspectRatio||g){i=j.minHeight*this.aspectRatio;k=j.minWidth/this.aspectRatio;e=j.maxHeight*this.aspectRatio;f=j.maxWidth/this.aspectRatio;if(i>j.minWidth){j.minWidth=i}if(k>j.minHeight){j.minHeight=k}if(e<j.maxWidth){j.maxWidth=e}if(f<j.maxHeight){j.maxHeight=f}}this._vBoundaries=j},_updateCache:function(e){var f=this.options;this.offset=this.helper.offset();if(c(e.left)){this.position.left=e.left}if(c(e.top)){this.position.top=e.top}if(c(e.height)){this.size.height=e.height}if(c(e.width)){this.size.width=e.width}},_updateRatio:function(f,i){var g=this.options,e=this.position,j=this.size,h=this.axis;if(c(f.height)){f.width=(f.height*this.aspectRatio)}else{if(c(f.width)){f.height=(f.width/this.aspectRatio)}}if(h=="sw"){f.left=e.left+(j.width-f.width);f.top=null}if(h=="nw"){f.top=e.top+(j.height-f.height);f.left=e.left+(j.width-f.width)}return f},_respectSize:function(n,l){var f=this.helper,p=this._vBoundaries,m=this._aspectRatio||l.shiftKey,q=this.axis,i=c(n.width)&&p.maxWidth&&(p.maxWidth<n.width),k=c(n.height)&&p.maxHeight&&(p.maxHeight<n.height),g=c(n.width)&&p.minWidth&&(p.minWidth>n.width),h=c(n.height)&&p.minHeight&&(p.minHeight>n.height);if(g){n.width=p.minWidth}if(h){n.height=p.minHeight}if(i){n.width=p.maxWidth}if(k){n.height=p.maxHeight}var s=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height;var r=/sw|nw|w/.test(q),e=/nw|ne|n/.test(q);if(g&&r){n.left=s-p.minWidth}if(i&&r){n.left=s-p.maxWidth}if(h&&e){n.top=j-p.minHeight}if(k&&e){n.top=j-p.maxHeight}var u=!n.width&&!n.height;if(u&&!n.left&&n.top){n.top=null}else{if(u&&!n.top&&n.left){n.left=null}}return n},_proportionallyResize:function(){var f=this.options;if(!this._proportionallyResizeElements.length){return}var e=this.helper||this.element;for(var k=0;k<this._proportionallyResizeElements.length;k++){var j=this._proportionallyResizeElements[k];if(!this.borderDif){var h=[j.css("borderTopWidth"),j.css("borderRightWidth"),j.css("borderBottomWidth"),j.css("borderLeftWidth")],g=[j.css("paddingTop"),j.css("paddingRight"),j.css("paddingBottom"),j.css("paddingLeft")];this.borderDif=d.map(h,function(o,m){var l=parseInt(o,10)||0,n=parseInt(g[m],10)||0;return l+n})}if(d.browser.msie&&!(!(d(e).is(":hidden")||d(e).parents(":hidden").length))){continue}j.css({height:(e.height()-this.borderDif[0]-this.borderDif[2])||0,width:(e.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var g=this.element,e=this.options;this.elementOffset=g.offset();if(this._helper){this.helper=this.helper||d('<div style="overflow:hidden;"></div>');var f=d.browser.msie&&d.browser.version<7,h=(f?1:0),i=(f?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-h+"px",top:this.elementOffset.top-h+"px",zIndex:++e.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,g,e){return{width:this.originalSize.width+g}},w:function(i,g,h){var f=this.options,e=this.originalSize,j=this.originalPosition;return{left:j.left+g,width:e.width-g}},n:function(i,g,h){var f=this.options,e=this.originalSize,j=this.originalPosition;return{top:j.top+h,height:e.height-h}},s:function(f,g,e){return{height:this.originalSize.height+e}},se:function(f,g,e){return d.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,g,e]))},sw:function(f,g,e){return d.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,g,e]))},ne:function(f,g,e){return d.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,g,e]))},nw:function(f,g,e){return d.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,g,e]))}},_propagate:function(e,f){d.ui.plugin.call(this,e,[f,this.ui()]);(e!="resize"&&this._trigger(e,f,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});d.extend(d.ui.resizable,{version:"1.8.16"});d.ui.plugin.add("resizable","alsoResize",{start:function(g,f){var h=d(this).data("resizable"),e=h.options;var i=function(j){d(j).each(function(){var k=d(this);k.data("resizable-alsoresize",{width:parseInt(k.width(),10),height:parseInt(k.height(),10),left:parseInt(k.css("left"),10),top:parseInt(k.css("top"),10),position:k.css("position")})})};if(typeof(e.alsoResize)=="object"&&!e.alsoResize.parentNode){if(e.alsoResize.length){e.alsoResize=e.alsoResize[0];i(e.alsoResize)}else{d.each(e.alsoResize,function(j){i(j)})}}else{i(e.alsoResize)}},resize:function(j,h){var e=d(this).data("resizable"),g=e.options,k=e.originalSize,i=e.originalPosition;var l={height:(e.size.height-k.height)||0,width:(e.size.width-k.width)||0,top:(e.position.top-i.top)||0,left:(e.position.left-i.left)||0},f=function(n,m){d(n).each(function(){var q=d(this),r=d(this).data("resizable-alsoresize"),o={},p=m&&m.length?m:q.parents(h.originalElement[0]).length?["width","height"]:["width","height","top","left"];d.each(p,function(u,s){var v=(r[s]||0)+(l[s]||0);if(v&&v>=0){o[s]=v||null}});if(d.browser.opera&&/relative/.test(q.css("position"))){e._revertToRelativePosition=true;q.css({position:"absolute",top:"auto",left:"auto"})}q.css(o)})};if(typeof(g.alsoResize)=="object"&&!g.alsoResize.nodeType){d.each(g.alsoResize,function(n,m){f(n,m)})}else{f(g.alsoResize)}},stop:function(h,f){var i=d(this).data("resizable"),e=i.options;var g=function(j){d(j).each(function(){var k=d(this);k.css({position:k.data("resizable-alsoresize").position})})};if(i._revertToRelativePosition){i._revertToRelativePosition=false;if(typeof(e.alsoResize)=="object"&&!e.alsoResize.nodeType){d.each(e.alsoResize,function(j){g(j)})}else{g(e.alsoResize)}}d(this).removeData("resizable-alsoresize")}});d.ui.plugin.add("resizable","animate",{stop:function(l,j){var f=d(this).data("resizable"),h=f.options;var n=f._proportionallyResizeElements,k=n.length&&(/textarea/i).test(n[0].nodeName),m=k&&d.ui.hasScroll(n[0],"left")?0:f.sizeDiff.height,g=k?0:f.sizeDiff.width;var e={width:(f.size.width-g),height:(f.size.height-m)},i=(parseInt(f.element.css("left"),10)+(f.position.left-f.originalPosition.left))||null,p=(parseInt(f.element.css("top"),10)+(f.position.top-f.originalPosition.top))||null;f.element.animate(d.extend(e,p&&i?{top:p,left:i}:{}),{duration:h.animateDuration,easing:h.animateEasing,step:function(){var o={width:parseInt(f.element.css("width"),10),height:parseInt(f.element.css("height"),10),top:parseInt(f.element.css("top"),10),left:parseInt(f.element.css("left"),10)};if(n&&n.length){d(n[0]).css({width:o.width,height:o.height})}f._updateCache(o);f._propagate("resize",l)}})}});d.ui.plugin.add("resizable","containment",{start:function(k,r){var j=d(this).data("resizable"),m=j.options,f=j.element;var l=m.containment,i=(l instanceof d)?l.get(0):(/parent/.test(l))?f.parent().get(0):l;if(!i){return}j.containerElement=d(i);if(/document/.test(l)||l==document){j.containerOffset={left:0,top:0};j.containerPosition={left:0,top:0};j.parentData={element:d(document),left:0,top:0,width:d(document).width(),height:d(document).height()||document.body.parentNode.scrollHeight}}else{var g=d(i),h=[];d(["Top","Right","Left","Bottom"]).each(function(o,p){h[o]=a(g.css("padding"+p))});j.containerOffset=g.offset();j.containerPosition=g.position();j.containerSize={height:(g.innerHeight()-h[3]),width:(g.innerWidth()-h[1])};var n=j.containerOffset,e=j.containerSize.height,q=j.containerSize.width,u=(d.ui.hasScroll(i,"left")?i.scrollWidth:q),s=(d.ui.hasScroll(i)?i.scrollHeight:e);j.parentData={element:i,left:n.left,top:n.top,width:u,height:s}}},resize:function(j,s){var i=d(this).data("resizable"),n=i.options,h=i.containerSize,p=i.containerOffset,r=i.size,e=i.position,m=i._aspectRatio||j.shiftKey,l={top:0,left:0},f=i.containerElement;if(f[0]!=document&&(/static/).test(f.css("position"))){l=p}if(e.left<(i._helper?p.left:0)){i.size.width=i.size.width+(i._helper?(i.position.left-p.left):(i.position.left-l.left));if(m){i.size.height=i.size.width/n.aspectRatio}i.position.left=n.helper?p.left:0}if(e.top<(i._helper?p.top:0)){i.size.height=i.size.height+(i._helper?(i.position.top-p.top):i.position.top);if(m){i.size.width=i.size.height*n.aspectRatio}i.position.top=i._helper?p.top:0}i.offset.left=i.parentData.left+i.position.left;i.offset.top=i.parentData.top+i.position.top;var q=Math.abs((i._helper?i.offset.left-l.left:(i.offset.left-l.left))+i.sizeDiff.width),u=Math.abs((i._helper?i.offset.top-l.top:(i.offset.top-p.top))+i.sizeDiff.height);var k=i.containerElement.get(0)==i.element.parent().get(0),g=/relative|absolute/.test(i.containerElement.css("position"));if(k&&g){q-=i.parentData.left}if(q+i.size.width>=i.parentData.width){i.size.width=i.parentData.width-q;if(m){i.size.height=i.size.width/i.aspectRatio}}if(u+i.size.height>=i.parentData.height){i.size.height=i.parentData.height-u;if(m){i.size.width=i.size.height*i.aspectRatio}}},stop:function(m,k){var g=d(this).data("resizable"),i=g.options,p=g.position,n=g.containerOffset,l=g.containerPosition,f=g.containerElement;var q=d(g.helper),e=q.offset(),r=q.outerWidth()-g.sizeDiff.width,j=q.outerHeight()-g.sizeDiff.height;if(g._helper&&!i.animate&&(/relative/).test(f.css("position"))){d(this).css({left:e.left-l.left-n.left,width:r,height:j})}if(g._helper&&!i.animate&&(/static/).test(f.css("position"))){d(this).css({left:e.left-l.left-n.left,width:r,height:j})}}});d.ui.plugin.add("resizable","ghost",{start:function(g,f){var h=d(this).data("resizable"),e=h.options,i=h.size;h.ghost=h.originalElement.clone();h.ghost.css({opacity:0.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:"");h.ghost.appendTo(h.helper)},resize:function(g,f){var h=d(this).data("resizable"),e=h.options;if(h.ghost){h.ghost.css({position:"relative",height:h.size.height,width:h.size.width})}},stop:function(g,f){var h=d(this).data("resizable"),e=h.options;if(h.ghost&&h.helper){h.helper.get(0).removeChild(h.ghost.get(0))}}});d.ui.plugin.add("resizable","grid",{resize:function(l,j){var g=d(this).data("resizable"),h=g.options,e=g.size,m=g.originalSize,k=g.originalPosition,n=g.axis,p=h._aspectRatio||l.shiftKey;h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;var f=Math.round((e.width-m.width)/(h.grid[0]||1))*(h.grid[0]||1),i=Math.round((e.height-m.height)/(h.grid[1]||1))*(h.grid[1]||1);if(/^(se|s|e)$/.test(n)){g.size.width=m.width+f;g.size.height=m.height+i}else{if(/^(ne)$/.test(n)){g.size.width=m.width+f;g.size.height=m.height+i;g.position.top=k.top-i}else{if(/^(sw)$/.test(n)){g.size.width=m.width+f;g.size.height=m.height+i;g.position.left=k.left-f}else{g.size.width=m.width+f;g.size.height=m.height+i;g.position.top=k.top-i;g.position.left=k.left-f}}}}});var a=function(e){return parseInt(e,10)||0};var c=function(e){return !isNaN(parseInt(e,10))}})(jQuery);(function(b,a){b.widget("ui.selectable",b.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var d;this.refresh=function(){d=b(c.options.filter,c.element[0]);d.each(function(){var f=b(this);var e=f.offset();b.data(this,"selectable-item",{element:this,$element:f,left:e.left,top:e.top,right:e.left+f.outerWidth(),bottom:e.top+f.outerHeight(),startselected:false,selected:f.hasClass("ui-selected"),selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})})};this.refresh();this.selectees=d.addClass("ui-selectee");this._mouseInit();this.helper=b("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var d=this;this.opos=[c.pageX,c.pageY];if(this.options.disabled){return}var e=this.options;this.selectees=b(e.filter,this.element[0]);this._trigger("start",c);b(e.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});if(e.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var f=b.data(this,"selectable-item");f.startselected=true;if(!c.metaKey){f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;d._trigger("unselecting",c,{unselecting:f.element})}});b(c.target).parents().andSelf().each(function(){var f=b.data(this,"selectable-item");if(f){var g=!c.metaKey||!f.$element.hasClass("ui-selected");f.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");f.unselecting=!g;f.selecting=g;f.selected=g;if(g){d._trigger("selecting",c,{selecting:f.element})}else{d._trigger("unselecting",c,{unselecting:f.element})}return false}})},_mouseDrag:function(g){var e=this;this.dragged=true;if(this.options.disabled){return}var d=this.options;var c=this.opos[0],i=this.opos[1],f=g.pageX,j=g.pageY;if(c>f){var h=f;f=c;c=h}if(i>j){var h=j;j=i;i=h}this.helper.css({left:c,top:i,width:f-c,height:j-i});this.selectees.each(function(){var l=b.data(this,"selectable-item");if(!l||l.element==e.element[0]){return}var k=false;if(d.tolerance=="touch"){k=(!(l.left>f||l.right<c||l.top>j||l.bottom<i))}else{if(d.tolerance=="fit"){k=(l.left>c&&l.right<f&&l.top>i&&l.bottom<j)}}if(k){if(l.selected){l.$element.removeClass("ui-selected");l.selected=false}if(l.unselecting){l.$element.removeClass("ui-unselecting");l.unselecting=false}if(!l.selecting){l.$element.addClass("ui-selecting");l.selecting=true;e._trigger("selecting",g,{selecting:l.element})}}else{if(l.selecting){if(g.metaKey&&l.startselected){l.$element.removeClass("ui-selecting");l.selecting=false;l.$element.addClass("ui-selected");l.selected=true}else{l.$element.removeClass("ui-selecting");l.selecting=false;if(l.startselected){l.$element.addClass("ui-unselecting");l.unselecting=true}e._trigger("unselecting",g,{unselecting:l.element})}}if(l.selected){if(!g.metaKey&&!l.startselected){l.$element.removeClass("ui-selected");l.selected=false;l.$element.addClass("ui-unselecting");l.unselecting=true;e._trigger("unselecting",g,{unselecting:l.element})}}}});return false},_mouseStop:function(c){var d=this;this.dragged=false;var e=this.options;b(".ui-unselecting",this.element[0]).each(function(){var f=b.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;d._trigger("unselected",c,{unselected:f.element})});b(".ui-selecting",this.element[0]).each(function(){var f=b.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;d._trigger("selected",c,{selected:f.element})});this._trigger("stop",c);this.helper.remove();return false}});b.extend(b.ui.selectable,{version:"1.8.16"})})(jQuery);(function(b,a){b.widget("ui.sortable",b.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--){this.items[c].item.removeData("sortable-item")}return this},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;this.widget()[d?"addClass":"removeClass"]("ui-sortable-disabled")}else{b.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(g,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(g);var h=null,c=this,e=b(g.target).parents().each(function(){if(b.data(this,"sortable-item")==c){h=b(this);return false}});if(b.data(g.target,"sortable-item")==c){h=b(g.target)}if(!h){return false}if(this.options.handle&&!f){var d=false;b(this.options.handle,h).find("*").andSelf().each(function(){if(this==g.target){d=true}});if(!d){return false}}this.currentItem=h;this._removeCurrentsFromItems();return true},_mouseStart:function(g,f,h){var e=this.options,d=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(g);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");b.extend(this.offset,{click:{left:g.pageX-this.offset.left,top:g.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(g);this.originalPageX=g.pageX;this.originalPageY=g.pageY;(e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(e.containment){this._setContainment()}if(e.cursor){if(b("body").css("cursor")){this._storedCursor=b("body").css("cursor")}b("body").css("cursor",e.cursor)}if(e.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",e.opacity)}if(e.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",e.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",g,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!h){for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("activate",g,d._uiHash(this))}}if(b.ui.ddmanager){b.ui.ddmanager.current=this}if(b.ui.ddmanager&&!e.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,g)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(g);return true},_mouseDrag:function(g){this.position=this._generatePosition(g);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var e=this.options,d=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<e.scrollSensitivity){this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+e.scrollSpeed}else{if(g.pageY-this.overflowOffset.top<e.scrollSensitivity){this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-e.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<e.scrollSensitivity){this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+e.scrollSpeed}else{if(g.pageX-this.overflowOffset.left<e.scrollSensitivity){this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-e.scrollSpeed}}}else{if(g.pageY-b(document).scrollTop()<e.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()-e.scrollSpeed)}else{if(b(window).height()-(g.pageY-b(document).scrollTop())<e.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()+e.scrollSpeed)}}if(g.pageX-b(document).scrollLeft()<e.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()-e.scrollSpeed)}else{if(b(window).width()-(g.pageX-b(document).scrollLeft())<e.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()+e.scrollSpeed)}}}if(d!==false&&b.ui.ddmanager&&!e.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,g)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var c=this.items.length-1;c>=0;c--){var j=this.items[c],h=j.item[0],f=this._intersectsWithPointer(j);if(!f){continue}if(h!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=h&&!b.ui.contains(this.placeholder[0],h)&&(this.options.type=="semi-dynamic"?!b.ui.contains(this.element[0],h):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(j)){this._rearrange(g,j)}else{break}this._trigger("change",g,this._uiHash());break}}this._contactContainers(g);if(b.ui.ddmanager){b.ui.ddmanager.drag(this,g)}this._trigger("sort",g,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,f){if(!d){return}if(b.ui.ddmanager&&!this.options.dropBehaviour){b.ui.ddmanager.drop(this,d)}if(this.options.revert){var e=this;var c=e.placeholder.offset();e.reverting=true;b(this.helper).animate({left:c.left-this.offset.parent.left-e.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:c.top-this.offset.parent.top-e.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){e._clear(d)})}else{this._clear(d,f)}return false},cancel:function(){var c=this;if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("deactivate",null,c._uiHash(this));if(this.containers[d].containerCache.over){this.containers[d]._trigger("out",null,c._uiHash(this));this.containers[d].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){b(this.domPosition.prev).after(this.currentItem)}else{b(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(c){var e=this._getItemsAsjQuery(c&&c.connected);var d=[];c=c||{};b(e).each(function(){var f=(b(c.item||this).attr(c.attribute||"id")||"").match(c.expression||(/(.+)[-=_](.+)/));if(f){d.push((c.key||f[1]+"[]")+"="+(c.key&&c.expression?f[1]:f[2]))}});if(!d.length&&c.key){d.push(c.key+"=")}return d.join("&")},toArray:function(c){var e=this._getItemsAsjQuery(c&&c.connected);var d=[];c=c||{};e.each(function(){d.push(b(c.item||this).attr(c.attribute||"id")||"")});return d},_intersectsWith:function(o){var c=this.positionAbs.left,d=c+this.helperProportions.width,n=this.positionAbs.top,e=n+this.helperProportions.height;var f=o.left,k=f+o.width,m=o.top,j=m+o.height;var i=this.offset.click.top,h=this.offset.click.left;var g=(n+i)>m&&(n+i)<j&&(c+h)>f&&(c+h)<k;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>o[this.floating?"width":"height"])){return g}else{return(f<c+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<k&&m<n+(this.helperProportions.height/2)&&e-(this.helperProportions.height/2)<j)}},_intersectsWithPointer:function(d){var g=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),e=g&&c,h=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!e){return false}return this.floating?(((f&&f=="right")||h=="down")?2:1):(h&&(h=="down"?2:1))},_intersectsWithSides:function(f){var c=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),e=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(this.floating&&g){return((g=="right"&&d)||(g=="left"&&!d))}else{return e&&((e=="down"&&c)||(e=="up"&&!c))}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(m){var e=this;var k=[];var l=[];var h=this._connectWith();if(h&&m){for(var c=h.length-1;c>=0;c--){var g=b(h[c]);for(var d=g.length-1;d>=0;d--){var f=b.data(g[d],"sortable");if(f&&f!=this&&!f.options.disabled){l.push([b.isFunction(f.options.items)?f.options.items.call(f.element):b(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f])}}}}l.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var c=l.length-1;c>=0;c--){l[c][0].each(function(){k.push(this)})}return b(k)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var d=0;d<e.length;d++){if(e[d]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(h){this.items=[];this.containers=[this];var d=this.items;var g=this;var f=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],h,{item:this.currentItem}):b(this.options.items,this.element),this]];var m=this._connectWith();if(m){for(var k=m.length-1;k>=0;k--){var o=b(m[k]);for(var l=o.length-1;l>=0;l--){var e=b.data(o[l],"sortable");if(e&&e!=this&&!e.options.disabled){f.push([b.isFunction(e.options.items)?e.options.items.call(e.element[0],h,{item:this.currentItem}):b(e.options.items,e.element),e]);this.containers.push(e)}}}}for(var k=f.length-1;k>=0;k--){var c=f[k][1];var n=f[k][0];for(var l=0,p=n.length;l<p;l++){var q=b(n[l]);q.data("sortable-item",c);d.push({item:q,instance:c,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var c=this.items.length-1;c>=0;c--){var f=this.items[c];if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue}var e=this.options.toleranceElement?b(this.options.toleranceElement,f.item):f.item;if(!d){f.width=e.outerWidth();f.height=e.outerHeight()}var g=e.offset();f.left=g.left;f.top=g.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var c=this.containers.length-1;c>=0;c--){var g=this.containers[c].element.offset();this.containers[c].containerCache.left=g.left;this.containers[c].containerCache.top=g.top;this.containers[c].containerCache.width=this.containers[c].element.outerWidth();this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}}return this},_createPlaceholder:function(d){var e=d||this,c=e.options;if(!c.placeholder||c.placeholder.constructor==String){var f=c.placeholder;c.placeholder={element:function(){var g=b(document.createElement(e.currentItem[0].nodeName)).addClass(f||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!f){g.style.visibility="hidden"}return g},update:function(h,g){if(f&&!c.forcePlaceholderSize){return}if(!g.height()){g.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}}e.placeholder=b(c.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);c.placeholder.update(e,e.placeholder)},_contactContainers:function(m){var c=null,e=null;for(var d=this.containers.length-1;d>=0;d--){if(b.ui.contains(this.currentItem[0],this.containers[d].element[0])){continue}if(this._intersectsWith(this.containers[d].containerCache)){if(c&&b.ui.contains(this.containers[d].element[0],c.element[0])){continue}c=this.containers[d];e=d}else{if(this.containers[d].containerCache.over){this.containers[d]._trigger("out",m,this._uiHash(this));this.containers[d].containerCache.over=0}}}if(!c){return}if(this.containers.length===1){this.containers[e]._trigger("over",m,this._uiHash(this));this.containers[e].containerCache.over=1}else{if(this.currentContainer!=this.containers[e]){var g=10000;var f=null;var k=this.positionAbs[this.containers[e].floating?"left":"top"];for(var h=this.items.length-1;h>=0;h--){if(!b.ui.contains(this.containers[e].element[0],this.items[h].item[0])){continue}var l=this.items[h][this.containers[e].floating?"left":"top"];if(Math.abs(l-k)<g){g=Math.abs(l-k);f=this.items[h]}}if(!f&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[e];f?this._rearrange(m,f,null,true):this._rearrange(m,null,this.containers[e].element,true);this._trigger("change",m,this._uiHash());this.containers[e]._trigger("change",m,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[e]._trigger("over",m,this._uiHash(this));this.containers[e].containerCache.over=1}}},_createHelper:function(d){var c=this.options;var e=b.isFunction(c.helper)?b(c.helper.apply(this.element[0],[d,this.currentItem])):(c.helper=="clone"?this.currentItem.clone():this.currentItem);if(!e.parents("body").length){b(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0])}if(e[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(e[0].style.width==""||c.forceHelperSize){e.width(this.currentItem.width())}if(e[0].style.height==""||c.forceHelperSize){e.height(this.currentItem.height())}return e},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(b.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var c=this.options;if(c.containment=="parent"){c.containment=this.helper[0].parentNode}if(c.containment=="document"||c.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(c.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(c.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(c.containment)){var f=b(c.containment)[0];var d=b(c.containment).offset();var e=(b(f).css("overflow")!="hidden");this.containment=[d.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(f).css("borderTopWidth"),10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(h,c){if(!c){c=this.position}var g=h=="absolute"?1:-1;var f=this.options,e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(e[0].tagName);return{top:(c.top+this.offset.relative.top*g+this.offset.parent.top*g-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:e.scrollTop()))*g)),left:(c.left+this.offset.relative.left*g+this.offset.parent.left*g-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:e.scrollLeft())*g))}},_generatePosition:function(h){var f=this.options,e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(e[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=h.pageX;var c=h.pageY;if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(h.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(h.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(h.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(f.grid){var i=this.originalPageY+Math.round((c-this.originalPageY)/f.grid[1])*f.grid[1];c=this.containment?(!(i-this.offset.click.top<this.containment[1]||i-this.offset.click.top>this.containment[3])?i:(!(i-this.offset.click.top<this.containment[1])?i-f.grid[1]:i+f.grid[1])):i;var g=this.originalPageX+Math.round((d-this.originalPageX)/f.grid[0])*f.grid[0];d=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-f.grid[0]:g+f.grid[0])):g}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:e.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:e.scrollLeft())))}},_rearrange:function(g,c,h,f){h?h[0].appendChild(this.placeholder[0]):c.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?c.item[0]:c.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,e=this.counter;window.setTimeout(function(){if(e==d.counter){d.refreshPositions(!f)}},0)},_clear:function(e,g){this.reverting=false;var c=[],f=this;if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var d in this._storedCSS){if(this._storedCSS[d]=="auto"||this._storedCSS[d]=="static"){this._storedCSS[d]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!g){c.push(function(h){this._trigger("receive",h,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!g){c.push(function(h){this._trigger("update",h,this._uiHash())})}if(!b.ui.contains(this.element[0],this.currentItem[0])){if(!g){c.push(function(h){this._trigger("remove",h,this._uiHash())})}for(var d=this.containers.length-1;d>=0;d--){if(b.ui.contains(this.containers[d].element[0],this.currentItem[0])&&!g){c.push((function(h){return function(i){h._trigger("receive",i,this._uiHash(this))}}).call(this,this.containers[d]));c.push((function(h){return function(i){h._trigger("update",i,this._uiHash(this))}}).call(this,this.containers[d]))}}}for(var d=this.containers.length-1;d>=0;d--){if(!g){c.push((function(h){return function(i){h._trigger("deactivate",i,this._uiHash(this))}}).call(this,this.containers[d]))}if(this.containers[d].containerCache.over){c.push((function(h){return function(i){h._trigger("out",i,this._uiHash(this))}}).call(this,this.containers[d]));this.containers[d].containerCache.over=0}}if(this._storedCursor){b("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!g){this._trigger("beforeStop",e,this._uiHash());for(var d=0;d<c.length;d++){c[d].call(this,e)}this._trigger("stop",e,this._uiHash())}return false}if(!g){this._trigger("beforeStop",e,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!g){for(var d=0;d<c.length;d++){c[d].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(b.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var d=c||this;return{helper:d.helper,placeholder:d.placeholder||b([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}}});b.extend(b.ui.sortable,{version:"1.8.16"})})(jQuery);jQuery.effects||(function(f,a){f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(n,m){f.fx.step[m]=function(o){if(!o.colorInit){o.start=k(o.elem,m);o.end=g(o.end);o.colorInit=true}o.elem.style[m]="rgb("+Math.max(Math.min(parseInt((o.pos*(o.end[0]-o.start[0]))+o.start[0],10),255),0)+","+Math.max(Math.min(parseInt((o.pos*(o.end[1]-o.start[1]))+o.start[1],10),255),0)+","+Math.max(Math.min(parseInt((o.pos*(o.end[2]-o.start[2]))+o.start[2],10),255),0)+")"}});function g(m){var n;if(m&&m.constructor==Array&&m.length==3){return m}if(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(m)){return[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]}if(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(m)){return[parseFloat(n[1])*2.55,parseFloat(n[2])*2.55,parseFloat(n[3])*2.55]}if(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(m)){return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}if(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(m)){return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]}if(n=/rgba\(0, 0, 0, 0\)/.exec(m)){return l.transparent}return l[f.trim(m).toLowerCase()]}function k(o,n){var m;do{m=f.curCSS(o,n);if(m!=""&&m!="transparent"||f.nodeName(o,"body")){break}n="backgroundColor"}while(o=o.parentNode);return g(m)}var l={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var j=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function e(){var m=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,q={},p,n;if(m&&m.length&&m[0]&&m[m[0]]){var o=m.length;while(o--){p=m[o];if(typeof m[p]=="string"){n=p.replace(/\-(\w)/g,function(r,s){return s.toUpperCase()});q[n]=m[p]}}}else{for(p in m){if(typeof m[p]==="string"){q[p]=m[p]}}}return q}function i(n){var o,m;for(o in n){m=n[o];if(m==null||f.isFunction(m)||o in b||(/scrollbar/).test(o)||(!(/color/i).test(o)&&isNaN(parseFloat(m)))){delete n[o]}}return n}function c(o,p){var n={_:0},m;for(m in p){if(o[m]!=p[m]){n[m]=p[m]}}return n}f.effects.animateClass=function(m,p,o,n){if(f.isFunction(o)){n=o;o=null}return this.queue(function(){var q=f(this),v=q.attr("style")||" ",u=i(e.call(this)),r,s=q.attr("class");f.each(j,function(x,w){if(m[w]){q[w+"Class"](m[w])}});r=i(e.call(this));q.attr("class",s);q.animate(c(u,r),{queue:false,duration:p,easing:o,complete:function(){f.each(j,function(x,w){if(m[w]){q[w+"Class"](m[w])}});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=v}else{q.attr("style",v)}if(n){n.apply(this,arguments)}f.dequeue(this)}})})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(m,n,o,p){return n?f.effects.animateClass.apply(this,[{add:m},n,o,p]):this._addClass(m)},_removeClass:f.fn.removeClass,removeClass:function(m,n,o,p){return n?f.effects.animateClass.apply(this,[{remove:m},n,o,p]):this._removeClass(m)},_toggleClass:f.fn.toggleClass,toggleClass:function(m,n,q,o,p){if(typeof n=="boolean"||n===a){if(!q){return this._toggleClass(m,n)}else{return f.effects.animateClass.apply(this,[(n?{add:m}:{remove:m}),q,o,p])}}else{return f.effects.animateClass.apply(this,[{toggle:m},n,q,o])}},switchClass:function(o,n,m,q,p){return f.effects.animateClass.apply(this,[{add:n,remove:o},m,q,p])}});f.extend(f.effects,{version:"1.8.16",save:function(o,n){for(var m=0;m<n.length;m++){if(n[m]!==null){o.data("ec.storage."+n[m],o[0].style[n[m]])}}},restore:function(o,n){for(var m=0;m<n.length;m++){if(n[m]!==null){o.css(n[m],o.data("ec.storage."+n[m]))}}},setMode:function(m,n){if(n=="toggle"){n=m.is(":hidden")?"show":"hide"}return n},getBaseline:function(n,m){var p,o;switch(n[0]){case"top":p=0;break;case"middle":p=0.5;break;case"bottom":p=1;break;default:p=n[0]/m.height}switch(n[1]){case"left":o=0;break;case"center":o=0.5;break;case"right":o=1;break;default:o=n[1]/m.width}return{x:o,y:p}},createWrapper:function(o){if(o.parent().is(".ui-effects-wrapper")){return o.parent()}var m={width:o.outerWidth(true),height:o.outerHeight(true),"float":o.css("float")},p=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n=document.activeElement;o.wrap(p);if(o[0]===n||f.contains(o[0],n)){f(n).focus()}p=o.parent();if(o.css("position")=="static"){p.css({position:"relative"});o.css({position:"relative"})}else{f.extend(m,{position:o.css("position"),zIndex:o.css("z-index")});f.each(["top","left","bottom","right"],function(q,r){m[r]=o.css(r);if(isNaN(parseInt(m[r],10))){m[r]="auto"}});o.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return p.css(m).show()},removeWrapper:function(o){var n,m=document.activeElement;if(o.parent().is(".ui-effects-wrapper")){n=o.parent().replaceWith(o);if(o[0]===m||f.contains(o[0],m)){f(m).focus()}return n}return o},setTransition:function(p,o,n,m){m=m||{};f.each(o,function(q,r){unit=p.cssUnit(r);if(unit[0]>0){m[r]=unit[0]*n+unit[1]}});return m}});function d(p,o,n,m){if(typeof p=="object"){m=o;n=null;o=p;p=o.effect}if(f.isFunction(o)){m=o;n=null;o={}}if(typeof o=="number"||f.fx.speeds[o]){m=n;n=o;o={}}if(f.isFunction(n)){m=n;n=null}o=o||{};n=n||o.duration;n=f.fx.off?0:typeof n=="number"?n:n in f.fx.speeds?f.fx.speeds[n]:f.fx.speeds._default;m=m||o.complete;return[p,o,n,m]}function h(m){if(!m||typeof m==="number"||f.fx.speeds[m]){return true}if(typeof m==="string"&&!f.effects[m]){return true}return false}f.fn.extend({effect:function(m,n,p,o){var u=d.apply(this,arguments),q={options:u[1],duration:u[2],callback:u[3]},s=q.options.mode,r=f.effects[m];if(f.fx.off||!r){if(s){return this[s](q.duration,q.callback)}else{return this.each(function(){if(q.callback){q.callback.call(this)}})}}return r.call(this,q)},_show:f.fn.show,show:function(m){if(h(m)){return this._show.apply(this,arguments)}else{var n=d.apply(this,arguments);n[1].mode="show";return this.effect.apply(this,n)}},_hide:f.fn.hide,hide:function(m){if(h(m)){return this._hide.apply(this,arguments)}else{var n=d.apply(this,arguments);n[1].mode="hide";return this.effect.apply(this,n)}},__toggle:f.fn.toggle,toggle:function(m){if(h(m)||typeof m==="boolean"||f.isFunction(m)){return this.__toggle.apply(this,arguments)}else{var n=d.apply(this,arguments);n[1].mode="toggle";return this.effect.apply(this,n)}},cssUnit:function(o){var m=this.css(o),n=[];f.each(["em","px","%","pt"],function(q,p){if(m.indexOf(p)>0){n=[parseFloat(m),p]}});return n}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(q,o,m,p,n){return f.easing[f.easing.def](q,o,m,p,n)},easeInQuad:function(q,o,m,p,n){return p*(o/=n)*o+m},easeOutQuad:function(q,o,m,p,n){return -p*(o/=n)*(o-2)+m},easeInOutQuad:function(q,o,m,p,n){if((o/=n/2)<1){return p/2*o*o+m}return -p/2*((--o)*(o-2)-1)+m},easeInCubic:function(q,o,m,p,n){return p*(o/=n)*o*o+m},easeOutCubic:function(q,o,m,p,n){return p*((o=o/n-1)*o*o+1)+m},easeInOutCubic:function(q,o,m,p,n){if((o/=n/2)<1){return p/2*o*o*o+m}return p/2*((o-=2)*o*o+2)+m},easeInQuart:function(q,o,m,p,n){return p*(o/=n)*o*o*o+m},easeOutQuart:function(q,o,m,p,n){return -p*((o=o/n-1)*o*o*o-1)+m},easeInOutQuart:function(q,o,m,p,n){if((o/=n/2)<1){return p/2*o*o*o*o+m}return -p/2*((o-=2)*o*o*o-2)+m},easeInQuint:function(q,o,m,p,n){return p*(o/=n)*o*o*o*o+m},easeOutQuint:function(q,o,m,p,n){return p*((o=o/n-1)*o*o*o*o+1)+m},easeInOutQuint:function(q,o,m,p,n){if((o/=n/2)<1){return p/2*o*o*o*o*o+m}return p/2*((o-=2)*o*o*o*o+2)+m},easeInSine:function(q,o,m,p,n){return -p*Math.cos(o/n*(Math.PI/2))+p+m},easeOutSine:function(q,o,m,p,n){return p*Math.sin(o/n*(Math.PI/2))+m},easeInOutSine:function(q,o,m,p,n){return -p/2*(Math.cos(Math.PI*o/n)-1)+m},easeInExpo:function(q,o,m,p,n){return(o==0)?m:p*Math.pow(2,10*(o/n-1))+m},easeOutExpo:function(q,o,m,p,n){return(o==n)?m+p:p*(-Math.pow(2,-10*o/n)+1)+m},easeInOutExpo:function(q,o,m,p,n){if(o==0){return m}if(o==n){return m+p}if((o/=n/2)<1){return p/2*Math.pow(2,10*(o-1))+m}return p/2*(-Math.pow(2,-10*--o)+2)+m},easeInCirc:function(q,o,m,p,n){return -p*(Math.sqrt(1-(o/=n)*o)-1)+m},easeOutCirc:function(q,o,m,p,n){return p*Math.sqrt(1-(o=o/n-1)*o)+m},easeInOutCirc:function(q,o,m,p,n){if((o/=n/2)<1){return -p/2*(Math.sqrt(1-o*o)-1)+m}return p/2*(Math.sqrt(1-(o-=2)*o)+1)+m},easeInElastic:function(m,v,q,r,u){var n=1.70158;var o=0;var w=r;if(v==0){return q}if((v/=u)==1){return q+r}if(!o){o=u*0.3}if(w<Math.abs(r)){w=r;var n=o/4}else{var n=o/(2*Math.PI)*Math.asin(r/w)}return -(w*Math.pow(2,10*(v-=1))*Math.sin((v*u-n)*(2*Math.PI)/o))+q},easeOutElastic:function(m,v,q,r,u){var n=1.70158;var o=0;var w=r;if(v==0){return q}if((v/=u)==1){return q+r}if(!o){o=u*0.3}if(w<Math.abs(r)){w=r;var n=o/4}else{var n=o/(2*Math.PI)*Math.asin(r/w)}return w*Math.pow(2,-10*v)*Math.sin((v*u-n)*(2*Math.PI)/o)+r+q},easeInOutElastic:function(m,v,q,r,u){var n=1.70158;var o=0;var w=r;if(v==0){return q}if((v/=u/2)==2){return q+r}if(!o){o=u*(0.3*1.5)}if(w<Math.abs(r)){w=r;var n=o/4}else{var n=o/(2*Math.PI)*Math.asin(r/w)}if(v<1){return -0.5*(w*Math.pow(2,10*(v-=1))*Math.sin((v*u-n)*(2*Math.PI)/o))+q}return w*Math.pow(2,-10*(v-=1))*Math.sin((v*u-n)*(2*Math.PI)/o)*0.5+r+q},easeInBack:function(m,r,o,p,q,n){if(n==a){n=1.70158}return p*(r/=q)*r*((n+1)*r-n)+o},easeOutBack:function(m,r,o,p,q,n){if(n==a){n=1.70158}return p*((r=r/q-1)*r*((n+1)*r+n)+1)+o},easeInOutBack:function(m,r,o,p,q,n){if(n==a){n=1.70158}if((r/=q/2)<1){return p/2*(r*r*(((n*=(1.525))+1)*r-n))+o}return p/2*((r-=2)*r*(((n*=(1.525))+1)*r+n)+2)+o},easeInBounce:function(q,o,m,p,n){return p-f.easing.easeOutBounce(q,n-o,0,p,n)+m},easeOutBounce:function(q,o,m,p,n){if((o/=n)<(1/2.75)){return p*(7.5625*o*o)+m}else{if(o<(2/2.75)){return p*(7.5625*(o-=(1.5/2.75))*o+0.75)+m}else{if(o<(2.5/2.75)){return p*(7.5625*(o-=(2.25/2.75))*o+0.9375)+m}else{return p*(7.5625*(o-=(2.625/2.75))*o+0.984375)+m}}}},easeInOutBounce:function(q,o,m,p,n){if(o<n/2){return f.easing.easeInBounce(q,o*2,0,p,n)*0.5+m}return f.easing.easeOutBounce(q,o*2-n,0,p,n)*0.5+p*0.5+m}})})(jQuery);(function(b,a){b.effects.blind=function(c){return this.queue(function(){var h=b(this),i=["position","top","bottom","left","right"];var j=b.effects.setMode(h,c.options.mode||"hide");var g=c.options.direction||"vertical";b.effects.save(h,i);h.show();var k=b.effects.createWrapper(h).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var f=(g=="vertical")?k.height():k.width();if(j=="show"){k.css(e,0)}var d={};d[e]=j=="show"?f:0;k.animate(d,c.duration,c.options.easing,function(){if(j=="hide"){h.hide()}b.effects.restore(h,i);b.effects.removeWrapper(h);if(c.callback){c.callback.apply(h[0],arguments)}h.dequeue()})})}})(jQuery);(function(b,a){b.effects.bounce=function(c){return this.queue(function(){var m=b(this),n=["position","top","bottom","left","right"];var f=b.effects.setMode(m,c.options.mode||"effect");var j=c.options.direction||"up";var g=c.options.distance||20;var q=c.options.times||5;var h=c.duration||250;if(/show|hide/.test(f)){n.push("opacity")}b.effects.save(m,n);m.show();b.effects.createWrapper(m);var e=(j=="up"||j=="down")?"top":"left";var p=(j=="up"||j=="left")?"pos":"neg";var g=c.options.distance||(e=="top"?m.outerHeight({margin:true})/3:m.outerWidth({margin:true})/3);if(f=="show"){m.css("opacity",0).css(e,p=="pos"?-g:g)}if(f=="hide"){g=g/(q*2)}if(f!="hide"){q--}if(f=="show"){var d={opacity:1};d[e]=(p=="pos"?"+=":"-=")+g;m.animate(d,h/2,c.options.easing);g=g/2;q--}for(var l=0;l<q;l++){var k={},o={};k[e]=(p=="pos"?"-=":"+=")+g;o[e]=(p=="pos"?"+=":"-=")+g;m.animate(k,h/2,c.options.easing).animate(o,h/2,c.options.easing);g=(f=="hide")?g*2:g/2}if(f=="hide"){var d={opacity:0};d[e]=(p=="pos"?"-=":"+=")+g;m.animate(d,h/2,c.options.easing,function(){m.hide();b.effects.restore(m,n);b.effects.removeWrapper(m);if(c.callback){c.callback.apply(this,arguments)}})}else{var k={},o={};k[e]=(p=="pos"?"-=":"+=")+g;o[e]=(p=="pos"?"+=":"-=")+g;m.animate(k,h/2,c.options.easing).animate(o,h/2,c.options.easing,function(){b.effects.restore(m,n);b.effects.removeWrapper(m);if(c.callback){c.callback.apply(this,arguments)}})}m.queue("fx",function(){m.dequeue()});m.dequeue()})}})(jQuery);(function(b,a){b.effects.clip=function(c){return this.queue(function(){var i=b(this),j=["position","top","bottom","left","right","height","width"];var k=b.effects.setMode(i,c.options.mode||"hide");var g=c.options.direction||"vertical";b.effects.save(i,j);i.show();var l=b.effects.createWrapper(i).css({overflow:"hidden"});var h=i[0].tagName=="IMG"?l:i;var e={size:(g=="vertical")?"height":"width",position:(g=="vertical")?"top":"left"};var f=(g=="vertical")?h.height():h.width();if(k=="show"){h.css(e.size,0);h.css(e.position,f/2)}var d={};d[e.size]=k=="show"?f:0;d[e.position]=k=="show"?0:f/2;h.animate(d,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(k=="hide"){i.hide()}b.effects.restore(i,j);b.effects.removeWrapper(i);if(c.callback){c.callback.apply(i[0],arguments)}i.dequeue()}})})}})(jQuery);(function(b,a){b.effects.drop=function(c){return this.queue(function(){var i=b(this),j=["position","top","bottom","left","right","opacity"];var k=b.effects.setMode(i,c.options.mode||"hide");var h=c.options.direction||"left";b.effects.save(i,j);i.show();b.effects.createWrapper(i);var e=(h=="up"||h=="down")?"top":"left";var f=(h=="up"||h=="left")?"pos":"neg";var g=c.options.distance||(e=="top"?i.outerHeight({margin:true})/2:i.outerWidth({margin:true})/2);if(k=="show"){i.css("opacity",0).css(e,f=="pos"?-g:g)}var d={opacity:k=="show"?1:0};d[e]=(k=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+g;i.animate(d,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(k=="hide"){i.hide()}b.effects.restore(i,j);b.effects.removeWrapper(i);if(c.callback){c.callback.apply(this,arguments)}i.dequeue()}})})}})(jQuery);(function(b,a){b.effects.explode=function(c){return this.queue(function(){var m=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;var l=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;c.options.mode=c.options.mode=="toggle"?(b(this).is(":visible")?"hide":"show"):c.options.mode;var k=b(this).show().css("visibility","hidden");var h=k.offset();h.top-=parseInt(k.css("marginTop"),10)||0;h.left-=parseInt(k.css("marginLeft"),10)||0;var f=k.outerWidth(true);var g=k.outerHeight(true);for(var d=0;d<m;d++){for(var e=0;e<l;e++){k.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-e*(f/l),top:-d*(g/m)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f/l,height:g/m,left:h.left+e*(f/l)+(c.options.mode=="show"?(e-Math.floor(l/2))*(f/l):0),top:h.top+d*(g/m)+(c.options.mode=="show"?(d-Math.floor(m/2))*(g/m):0),opacity:c.options.mode=="show"?0:1}).animate({left:h.left+e*(f/l)+(c.options.mode=="show"?0:(e-Math.floor(l/2))*(f/l)),top:h.top+d*(g/m)+(c.options.mode=="show"?0:(d-Math.floor(m/2))*(g/m)),opacity:c.options.mode=="show"?1:0},c.duration||500)}}setTimeout(function(){c.options.mode=="show"?k.css({visibility:"visible"}):k.css({visibility:"visible"}).hide();if(c.callback){c.callback.apply(k[0])}k.dequeue();b("div.ui-effects-explode").remove()},c.duration||500)})}})(jQuery);(function(b,a){b.effects.fade=function(c){return this.queue(function(){var d=b(this),e=b.effects.setMode(d,c.options.mode||"hide");d.animate({opacity:e},{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(c.callback&&c.callback.apply(this,arguments));d.dequeue()}})})}})(jQuery);(function(b,a){b.effects.fold=function(c){return this.queue(function(){var k=b(this),m=["position","top","bottom","left","right"];var e=b.effects.setMode(k,c.options.mode||"hide");var n=c.options.size||15;var h=!(!c.options.horizFirst);var g=c.duration?c.duration/2:b.fx.speeds._default/2;b.effects.save(k,m);k.show();var j=b.effects.createWrapper(k).css({overflow:"hidden"});var o=((e=="show")!=h);var d=o?["width","height"]:["height","width"];var p=o?[j.width(),j.height()]:[j.height(),j.width()];var f=/([0-9]+)%/.exec(n);if(f){n=parseInt(f[1],10)/100*p[e=="hide"?0:1]}if(e=="show"){j.css(h?{height:0,width:n}:{height:n,width:0})}var i={},l={};i[d[0]]=e=="show"?p[0]:n;l[d[1]]=e=="show"?p[1]:0;j.animate(i,g,c.options.easing).animate(l,g,c.options.easing,function(){if(e=="hide"){k.hide()}b.effects.restore(k,m);b.effects.removeWrapper(k);if(c.callback){c.callback.apply(k[0],arguments)}k.dequeue()})})}})(jQuery);(function(b,a){b.effects.highlight=function(c){return this.queue(function(){var g=b(this),d=["backgroundImage","backgroundColor","opacity"],f=b.effects.setMode(g,c.options.mode||"show"),e={backgroundColor:g.css("backgroundColor")};if(f=="hide"){e.opacity=0}b.effects.save(g,d);g.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(e,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(f=="hide"&&g.hide());b.effects.restore(g,d);(f=="show"&&!b.support.opacity&&this.style.removeAttribute("filter"));(c.callback&&c.callback.apply(this,arguments));g.dequeue()}})})}})(jQuery);(function(b,a){b.effects.pulsate=function(c){return this.queue(function(){var f=b(this),e=b.effects.setMode(f,c.options.mode||"show");times=((c.options.times||5)*2)-1;duration=c.duration?c.duration/2:b.fx.speeds._default/2,isVisible=f.is(":visible"),animateTo=0;if(!isVisible){f.css("opacity",0).show();animateTo=1}if((e=="hide"&&isVisible)||(e=="show"&&!isVisible)){times--}for(var d=0;d<times;d++){f.animate({opacity:animateTo},duration,c.options.easing);animateTo=(animateTo+1)%2}f.animate({opacity:animateTo},duration,c.options.easing,function(){if(animateTo==0){f.hide()}(c.callback&&c.callback.apply(this,arguments))});f.queue("fx",function(){f.dequeue()}).dequeue()})}})(jQuery);(function(b,a){b.effects.puff=function(c){return this.queue(function(){var g=b(this),f=b.effects.setMode(g,c.options.mode||"hide"),e=parseInt(c.options.percent,10)||150,d=e/100,h={height:g.height(),width:g.width()};b.extend(c.options,{fade:true,mode:f,percent:f=="hide"?e:100,from:f=="hide"?h:{height:h.height*d,width:h.width*d}});g.effect("scale",c.options,c.duration,c.callback);g.dequeue()})};b.effects.scale=function(c){return this.queue(function(){var i=b(this);var d=b.extend(true,{},c.options);var k=b.effects.setMode(i,c.options.mode||"effect");var j=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:(k=="hide"?0:100));var g=c.options.direction||"both";var h=c.options.origin;if(k!="effect"){d.origin=h||["middle","center"];d.restore=true}var f={height:i.height(),width:i.width()};i.from=c.options.from||(k=="show"?{height:0,width:0}:f);var e={y:g!="horizontal"?(j/100):1,x:g!="vertical"?(j/100):1};i.to={height:f.height*e.y,width:f.width*e.x};if(c.options.fade){if(k=="show"){i.from.opacity=0;i.to.opacity=1}if(k=="hide"){i.from.opacity=1;i.to.opacity=0}}d.from=i.from;d.to=i.to;d.mode=k;i.effect("size",d,c.duration,c.callback);i.dequeue()})};b.effects.size=function(c){return this.queue(function(){var d=b(this),o=["position","top","bottom","left","right","width","height","overflow","opacity"];var f=["position","top","bottom","left","right","overflow","opacity"];var m=["width","height","overflow"];var p=["fontSize"];var j=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var g=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var q=b.effects.setMode(d,c.options.mode||"effect");var l=c.options.restore||false;var h=c.options.scale||"both";var e=c.options.origin;var n={height:d.height(),width:d.width()};d.from=c.options.from||n;d.to=c.options.to||n;if(e){var i=b.effects.getBaseline(e,n);d.from.top=(n.height-d.from.height)*i.y;d.from.left=(n.width-d.from.width)*i.x;d.to.top=(n.height-d.to.height)*i.y;d.to.left=(n.width-d.to.width)*i.x}var k={from:{y:d.from.height/n.height,x:d.from.width/n.width},to:{y:d.to.height/n.height,x:d.to.width/n.width}};if(h=="box"||h=="both"){if(k.from.y!=k.to.y){o=o.concat(j);d.from=b.effects.setTransition(d,j,k.from.y,d.from);d.to=b.effects.setTransition(d,j,k.to.y,d.to)}if(k.from.x!=k.to.x){o=o.concat(g);d.from=b.effects.setTransition(d,g,k.from.x,d.from);d.to=b.effects.setTransition(d,g,k.to.x,d.to)}}if(h=="content"||h=="both"){if(k.from.y!=k.to.y){o=o.concat(p);d.from=b.effects.setTransition(d,p,k.from.y,d.from);d.to=b.effects.setTransition(d,p,k.to.y,d.to)}}b.effects.save(d,l?o:f);d.show();b.effects.createWrapper(d);d.css("overflow","hidden").css(d.from);if(h=="content"||h=="both"){j=j.concat(["marginTop","marginBottom"]).concat(p);g=g.concat(["marginLeft","marginRight"]);m=o.concat(j).concat(g);d.find("*[width]").each(function(){child=b(this);if(l){b.effects.save(child,m)}var r={height:child.height(),width:child.width()};child.from={height:r.height*k.from.y,width:r.width*k.from.x};child.to={height:r.height*k.to.y,width:r.width*k.to.x};if(k.from.y!=k.to.y){child.from=b.effects.setTransition(child,j,k.from.y,child.from);child.to=b.effects.setTransition(child,j,k.to.y,child.to)}if(k.from.x!=k.to.x){child.from=b.effects.setTransition(child,g,k.from.x,child.from);child.to=b.effects.setTransition(child,g,k.to.x,child.to)}child.css(child.from);child.animate(child.to,c.duration,c.options.easing,function(){if(l){b.effects.restore(child,m)}})})}d.animate(d.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(d.to.opacity===0){d.css("opacity",d.from.opacity)}if(q=="hide"){d.hide()}b.effects.restore(d,l?o:f);b.effects.removeWrapper(d);if(c.callback){c.callback.apply(this,arguments)}d.dequeue()}})})}})(jQuery);(function(b,a){b.effects.shake=function(c){return this.queue(function(){var m=b(this),n=["position","top","bottom","left","right"];var f=b.effects.setMode(m,c.options.mode||"effect");var j=c.options.direction||"left";var g=c.options.distance||20;var q=c.options.times||3;var h=c.duration||c.options.duration||140;b.effects.save(m,n);m.show();b.effects.createWrapper(m);var e=(j=="up"||j=="down")?"top":"left";var p=(j=="up"||j=="left")?"pos":"neg";var d={},k={},o={};d[e]=(p=="pos"?"-=":"+=")+g;k[e]=(p=="pos"?"+=":"-=")+g*2;o[e]=(p=="pos"?"-=":"+=")+g*2;m.animate(d,h,c.options.easing);for(var l=1;l<q;l++){m.animate(k,h,c.options.easing).animate(o,h,c.options.easing)}m.animate(k,h,c.options.easing).animate(d,h/2,c.options.easing,function(){b.effects.restore(m,n);b.effects.removeWrapper(m);if(c.callback){c.callback.apply(this,arguments)}});m.queue("fx",function(){m.dequeue()});m.dequeue()})}})(jQuery);(function(b,a){b.effects.slide=function(c){return this.queue(function(){var i=b(this),j=["position","top","bottom","left","right"];var k=b.effects.setMode(i,c.options.mode||"show");var h=c.options.direction||"left";b.effects.save(i,j);i.show();b.effects.createWrapper(i).css({overflow:"hidden"});var e=(h=="up"||h=="down")?"top":"left";var f=(h=="up"||h=="left")?"pos":"neg";var g=c.options.distance||(e=="top"?i.outerHeight({margin:true}):i.outerWidth({margin:true}));if(k=="show"){i.css(e,f=="pos"?(isNaN(g)?"-"+g:-g):g)}var d={};d[e]=(k=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+g;i.animate(d,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(k=="hide"){i.hide()}b.effects.restore(i,j);b.effects.removeWrapper(i);if(c.callback){c.callback.apply(this,arguments)}i.dequeue()}})})}})(jQuery);(function(b,a){b.effects.transfer=function(c){return this.queue(function(){var d=b(this),e=b(c.options.to),h=e.offset(),g={top:h.top,left:h.left,height:e.innerHeight(),width:e.innerWidth()},i=d.offset(),f=b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({top:i.top,left:i.left,height:d.innerHeight(),width:d.innerWidth(),position:"absolute"}).animate(g,c.duration,c.options.easing,function(){f.remove();(c.callback&&c.callback.apply(d[0],arguments));d.dequeue()})})}})(jQuery);(function(b,a){b.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,e=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=d.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(e.disabled){return}b(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(e.disabled){return}b(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(e.disabled){return}b(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(e.disabled){return}b(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(e.navigation){var c=d.element.find("a").filter(e.navigationFilter).eq(0);if(c.length){var f=c.closest(".ui-accordion-header");if(f.length){d.active=f}else{d.active=c.closest(".ui-accordion-content").prev()}}}d.active=d._findActive(d.active||e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",function(g){return d._keydown(g)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!d.active.length){d.headers.eq(0).attr("tabIndex",0)}else{d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})}if(!b.browser.safari){d.headers.find("a").attr("tabIndex",-1)}if(e.event){d.headers.bind(e.event.split(" ").join(".accordion ")+".accordion",function(g){d._clickHandler.call(d,g,this);g.preventDefault()})}},_createIcons:function(){var c=this.options;if(c.icons){b("<span></span>").addClass("ui-icon "+c.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight){c.css("height","")}return b.Widget.prototype.destroy.call(this)},_setOption:function(c,d){b.Widget.prototype._setOption.apply(this,arguments);if(c=="active"){this.activate(d)}if(c=="icons"){this._destroyIcons();if(d){this._createIcons()}}if(c=="disabled"){this.headers.add(this.headers.next())[d?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")}},_keydown:function(e){if(this.options.disabled||e.altKey||e.ctrlKey){return}var f=b.ui.keyCode,d=this.headers.length,c=this.headers.index(e.target),g=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:g=this.headers[(c+1)%d];break;case f.LEFT:case f.UP:g=this.headers[(c-1+d)%d];break;case f.SPACE:case f.ENTER:this._clickHandler({target:e.target},e.target);e.preventDefault()}if(g){b(e.target).attr("tabIndex",-1);b(g).attr("tabIndex",0);g.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(b.browser.msie){var c=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(b.browser.msie){this.element.parent().css("overflow",c)}this.headers.each(function(){d-=b(this).outerHeight(true)});this.headers.next().each(function(){b(this).height(Math.max(0,d-b(this).innerHeight()+b(this).height()))}).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,b(this).height("").height())}).height(d)}}return this},activate:function(c){this.options.active=c;var d=this._findActive(c)[0];this._clickHandler({target:d},d);return this},_findActive:function(c){return c?typeof c==="number"?this.headers.filter(":eq("+c+")"):this.headers.not(this.headers.not(c)):c===false?b([]):this.headers.filter(":eq(0)")},_clickHandler:function(j,k){var e=this.options;if(e.disabled){return}if(!j.target){if(!e.collapsible){return}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);this.active.next().addClass("ui-accordion-content-active");var l=this.active.next(),d={options:e,newHeader:b([]),oldHeader:e.active,newContent:b([]),oldContent:l},i=(this.active=b([]));this._toggle(i,l,d);return}var f=b(j.currentTarget||k),g=f[0]===this.active[0];e.active=e.collapsible&&g?false:this.headers.index(f);if(this.running||(!e.collapsible&&g)){return}var h=this.active,i=f.next(),l=this.active.next(),d={options:e,newHeader:g&&e.collapsible?b([]):f,oldHeader:this.active,newContent:g&&e.collapsible?b([]):i,oldContent:l},c=this.headers.index(this.active[0])>this.headers.index(f[0]);this.active=g?b([]):f;this._toggle(i,l,d,g,c);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);if(!g){f.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(e.icons.header).addClass(e.icons.headerSelected);f.next().addClass("ui-accordion-content-active")}return},_toggle:function(d,h,c,f,n){var e=this,g=e.options;e.toShow=d;e.toHide=h;e.data=c;var l=function(){if(!e){return}return e._completed.apply(e,arguments)};e._trigger("changestart",null,e.data);e.running=h.size()===0?d.size():h.size();if(g.animated){var j={};if(g.collapsible&&f){j={toShow:b([]),toHide:h,complete:l,down:n,autoHeight:g.autoHeight||g.fillSpace}}else{j={toShow:d,toHide:h,complete:l,down:n,autoHeight:g.autoHeight||g.fillSpace}}if(!g.proxied){g.proxied=g.animated}if(!g.proxiedDuration){g.proxiedDuration=g.duration}g.animated=b.isFunction(g.proxied)?g.proxied(j):g.proxied;g.duration=b.isFunction(g.proxiedDuration)?g.proxiedDuration(j):g.proxiedDuration;var i=b.ui.accordion.animations,m=g.duration,k=g.animated;if(k&&!i[k]&&!b.easing[k]){k="slide"}if(!i[k]){i[k]=function(o){this.slide(o,{easing:k,duration:m||700})}}i[k](j)}else{if(g.collapsible&&f){d.toggle()}else{h.hide();d.show()}l(true)}h.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(c){this.running=c?0:--this.running;if(this.running){return}if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className}this._trigger("change",null,this.data)}});b.extend(b.ui.accordion,{version:"1.8.16",animations:{slide:function(d,k){d=b.extend({easing:"swing",duration:300},d,k);if(!d.toHide.size()){d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d);return}if(!d.toShow.size()){d.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},d);return}var g=d.toShow.css("overflow"),j=0,f={},h={},e=["height","paddingTop","paddingBottom"],c;var i=d.toShow;c=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));b.each(e,function(m,l){h[l]="hide";var n=(""+b.css(d.toShow[0],l)).match(/^([\d+-.]+)(.*)$/);f[l]={value:n[1],unit:n[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(h,{step:function(l,m){if(m.prop=="height"){j=(m.end-m.start===0)?0:(m.now-m.start)/(m.end-m.start)}d.toShow[0].style[m.prop]=(j*f[m.prop].value)+f[m.prop].unit},duration:d.duration,easing:d.easing,complete:function(){if(!d.autoHeight){d.toShow.css("height","")}d.toShow.css({width:c,overflow:g});d.complete()}})},bounceslide:function(c){this.slide(c,{easing:c.down?"easeOutBounce":"swing",duration:c.down?1000:200})}}})})(jQuery);(function(c,b){var a=0;c.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var e=this,d=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(h){if(e.options.disabled||e.element.propAttr("readOnly")){return}f=false;var g=c.ui.keyCode;switch(h.keyCode){case g.PAGE_UP:e._move("previousPage",h);break;case g.PAGE_DOWN:e._move("nextPage",h);break;case g.UP:e._move("previous",h);h.preventDefault();break;case g.DOWN:e._move("next",h);h.preventDefault();break;case g.ENTER:case g.NUMPAD_ENTER:if(e.menu.active){f=true;h.preventDefault()}case g.TAB:if(!e.menu.active){return}e.menu.select(h);break;case g.ESCAPE:e.element.val(e.term);e.close(h);break;default:clearTimeout(e.searching);e.searching=setTimeout(function(){if(e.term!=e.element.val()){e.selectedItem=null;e.search(null,h)}},e.options.delay);break}}).bind("keypress.autocomplete",function(g){if(f){f=false;g.preventDefault()}}).bind("focus.autocomplete",function(){if(e.options.disabled){return}e.selectedItem=null;e.previous=e.element.val()}).bind("blur.autocomplete",function(g){if(e.options.disabled){return}clearTimeout(e.searching);e.closing=setTimeout(function(){e.close(g);e._change(g)},150)});this._initSource();this.response=function(){return e._response.apply(e,arguments)};this.menu=c("<ul></ul>").addClass("ui-autocomplete").appendTo(c(this.options.appendTo||"body",d)[0]).mousedown(function(g){var h=e.menu.element[0];if(!c(g.target).closest(".ui-menu-item").length){setTimeout(function(){c(document).one("mousedown",function(i){if(i.target!==e.element[0]&&i.target!==h&&!c.ui.contains(h,i.target)){e.close()}})},1)}setTimeout(function(){clearTimeout(e.closing)},13)}).menu({focus:function(h,g){var i=g.item.data("item.autocomplete");if(false!==e._trigger("focus",h,{item:i})){if(/^key/.test(h.originalEvent.type)){e.element.val(i.value)}}},selected:function(h,g){var i=g.item.data("item.autocomplete"),j=e.previous;if(e.element[0]!==d.activeElement){e.element.focus();e.previous=j;setTimeout(function(){e.previous=j;e.selectedItem=i},1)}if(false!==e._trigger("select",h,{item:i})){e.element.val(i.value)}e.term=e.element.val();e.close(h);e.selectedItem=i},blur:function(h,g){if(e.menu.element.is(":visible")&&(e.element.val()!==e.term)){e.element.val(e.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(c.fn.bgiframe){this.menu.element.bgiframe()}},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();c.Widget.prototype.destroy.call(this)},_setOption:function(d,e){c.Widget.prototype._setOption.apply(this,arguments);if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(c(e||"body",this.element[0].ownerDocument)[0])}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_initSource:function(){var e=this,d,f;if(c.isArray(this.options.source)){d=this.options.source;this.source=function(g,h){h(c.ui.autocomplete.filter(d,g.term))}}else{if(typeof this.options.source==="string"){f=this.options.source;this.source=function(g,h){if(e.xhr){e.xhr.abort()}e.xhr=c.ajax({url:f,data:g,dataType:"json",autocompleteRequest:++a,success:function(i,j){if(this.autocompleteRequest===a){h(i)}},error:function(){if(this.autocompleteRequest===a){h([])}}})}}else{this.source=this.options.source}}},search:function(e,d){e=e!=null?e:this.element.val();this.term=this.element.val();if(e.length<this.options.minLength){return this.close(d)}clearTimeout(this.closing);if(this._trigger("search",d)===false){return}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:d},this.response)},_response:function(d){if(!this.options.disabled&&d&&d.length){d=this._normalize(d);this._suggest(d);this._trigger("open")}else{this.close()}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},close:function(d){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",d)}},_change:function(d){if(this.previous!==this.element.val()){this._trigger("change",d,{item:this.selectedItem})}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return c.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}}return c.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var d=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(d,e);this.menu.deactivate();this.menu.refresh();d.show();this._resizeMenu();d.position(c.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new c.Event("mouseover"))}},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(d,f){var e=this;c.each(f,function(h,g){e._renderItem(d,g)})},_renderItem:function(d,e){return c("<li></li>").data("item.autocomplete",e).append(c("<a></a>").text(e.label)).appendTo(d)},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);return}if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term);this.menu.deactivate();return}this.menu[e](d)},widget:function(){return this.menu.element}});c.extend(c.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(d,f){var e=new RegExp(c.ui.autocomplete.escapeRegex(f),"i");return c.grep(d,function(g){return e.test(g.label||g.value||g)})}})}(jQuery));(function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length){return}c.preventDefault();b.select(c)});this.refresh()},refresh:function(){var b=this;var c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(d){b.activate(d,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(d,e){this.deactivate();if(this.hasScroll()){var f=e.offset().top-this.element.offset().top,b=this.element.scrollTop(),c=this.element.height();if(f<0){this.element.scrollTop(b+f)}else{if(f>=c){this.element.scrollTop(b+f-c+e.height())}}}this.active=e.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:e})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(b){this.move("next",".ui-menu-item:first",b)},previous:function(b){this.move("prev",".ui-menu-item:last",b)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(c,b,d){if(!this.active){this.activate(d,this.element.children(b));return}var e=this.active[c+"All"](".ui-menu-item").eq(0);if(e.length){this.activate(d,e)}else{this.activate(d,this.element.children(b))}},nextPage:function(c){if(this.hasScroll()){if(!this.active||this.last()){this.activate(c,this.element.children(".ui-menu-item:first"));return}var d=this.active.offset().top,b=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var f=a(this).offset().top-d-b+a(this).height();return f<10&&f>-10});if(!e.length){e=this.element.children(".ui-menu-item:last")}this.activate(c,e)}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(c){if(this.hasScroll()){if(!this.active||this.first()){this.activate(c,this.element.children(".ui-menu-item:last"));return}var d=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var e=a(this).offset().top-d+b-a(this).height();return e<10&&e>-10});if(!result.length){result=this.element.children(".ui-menu-item:first")}this.activate(c,result)}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(b){this._trigger("selected",b,{item:this.active})}})}(jQuery));(function(g,e){var f,a,b,i,c="ui-button ui-widget ui-state-default ui-corner-all",k="ui-state-hover ui-state-active ",j="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",d=function(){var l=g(this).find(":ui-button");setTimeout(function(){l.button("refresh")},1)},h=function(n){var o=n.name,l=n.form,m=g([]);if(o){if(l){m=g(l).find("[name='"+o+"']")}else{m=g("[name='"+o+"']",n.ownerDocument).filter(function(){return !this.form})}}return m};g.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",d);if(typeof this.options.disabled!=="boolean"){this.options.disabled=this.element.propAttr("disabled")}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var n=this,o=this.options,l=this.type==="checkbox"||this.type==="radio",p="ui-state-hover"+(!l?" ui-state-active":""),m="ui-state-focus";if(o.label===null){o.label=this.buttonElement.html()}if(this.element.is(":disabled")){o.disabled=true}this.buttonElement.addClass(c).attr("role","button").bind("mouseenter.button",function(){if(o.disabled){return}g(this).addClass("ui-state-hover");if(this===f){g(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){if(o.disabled){return}g(this).removeClass(p)}).bind("click.button",function(q){if(o.disabled){q.preventDefault();q.stopImmediatePropagation()}});this.element.bind("focus.button",function(){n.buttonElement.addClass(m)}).bind("blur.button",function(){n.buttonElement.removeClass(m)});if(l){this.element.bind("change.button",function(){if(i){return}n.refresh()});this.buttonElement.bind("mousedown.button",function(q){if(o.disabled){return}i=false;a=q.pageX;b=q.pageY}).bind("mouseup.button",function(q){if(o.disabled){return}if(a!==q.pageX||b!==q.pageY){i=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(o.disabled||i){return false}g(this).toggleClass("ui-state-active");n.buttonElement.attr("aria-pressed",n.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(o.disabled||i){return false}g(this).addClass("ui-state-active");n.buttonElement.attr("aria-pressed","true");var q=n.element[0];h(q).not(q).map(function(){return g(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown.button",function(){if(o.disabled){return false}g(this).addClass("ui-state-active");f=this;g(document).one("mouseup",function(){f=null})}).bind("mouseup.button",function(){if(o.disabled){return false}g(this).removeClass("ui-state-active")}).bind("keydown.button",function(q){if(o.disabled){return false}if(q.keyCode==g.ui.keyCode.SPACE||q.keyCode==g.ui.keyCode.ENTER){g(this).addClass("ui-state-active")}}).bind("keyup.button",function(){g(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===g.ui.keyCode.SPACE){g(this).click()}})}}}this._setOption("disabled",o.disabled);this._resetButton()},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"}else{if(this.element.is(":radio")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){var n=this.element.parents().filter(":last"),m="label[for='"+this.element.attr("id")+"']";this.buttonElement=n.find(m);if(!this.buttonElement.length){n=n.length?n.siblings():this.element.siblings();this.buttonElement=n.filter(m);if(!this.buttonElement.length){this.buttonElement=n.find(m)}}this.element.addClass("ui-helper-hidden-accessible");var l=this.element.is(":checked");if(l){this.buttonElement.addClass("ui-state-active")}this.buttonElement.attr("aria-pressed",l)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(c+" "+k+" "+j).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}g.Widget.prototype.destroy.call(this)},_setOption:function(l,m){g.Widget.prototype._setOption.apply(this,arguments);if(l==="disabled"){if(m){this.element.propAttr("disabled",true)}else{this.element.propAttr("disabled",false)}return}this._resetButton()},refresh:function(){var l=this.element.is(":disabled");if(l!==this.options.disabled){this._setOption("disabled",l)}if(this.type==="radio"){h(this.element[0]).each(function(){if(g(this).is(":checked")){g(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var m=this.buttonElement.removeClass(j),o=g("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(m.empty()).text(),l=this.options.icons,n=l.primary&&l.secondary,p=[];if(l.primary||l.secondary){if(this.options.text){p.push("ui-button-text-icon"+(n?"s":(l.primary?"-primary":"-secondary")))}if(l.primary){m.prepend("<span class='ui-button-icon-primary ui-icon "+l.primary+"'></span>")}if(l.secondary){m.append("<span class='ui-button-icon-secondary ui-icon "+l.secondary+"'></span>")}if(!this.options.text){p.push(n?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){m.attr("title",o)}}}else{p.push("ui-button-text-only")}m.addClass(p.join(" "))}});g.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)}g.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var l=this.element.css("direction")==="ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return g(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(l?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return g(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");g.Widget.prototype.destroy.call(this)}})}(jQuery));(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.16"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(input[0])}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(event){$.datepicker.log(event)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){if($.datepicker._datepickerShowing){$.datepicker._triggerOnClose($.datepicker._curInst)}$.datepicker._curInst.dpDiv.stop(true,true)}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return}extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_triggerOnClose:function(inst){var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst);this._curInst=null};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}$.datepicker._triggerOnClose(inst);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+inst.id+"',"+printDate.getMonth()+","+printDate.getFullYear()+', this);return false;"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" >";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" >";for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);if(!elem.length){return}elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return}elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");elem.addClass("ui-state-hover");if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.16";window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(c,a){var d="ui-dialog ui-widget ui-widget-content ui-corner-all ",b={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},e=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(h){var g=c(this).css(h).offset().top;if(g<0){c(this).css("top",h.top-g)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.options.title=this.options.title||this.originalTitle;var j=this,i=j.options,k=i.title||"&#160;",m=c.ui.dialog.getTitleId(j.element),n=(j.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass(d+i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(q){if(i.closeOnEscape&&!q.isDefaultPrevented()&&q.keyCode&&q.keyCode===c.ui.keyCode.ESCAPE){j.close(q);q.preventDefault()}}).attr({role:"dialog","aria-labelledby":m}).mousedown(function(q){j.moveToTop(false,q)}),h=j.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(n),l=(j.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(n),g=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){g.addClass("ui-state-hover")},function(){g.removeClass("ui-state-hover")}).focus(function(){g.addClass("ui-state-focus")}).blur(function(){g.removeClass("ui-state-focus")}).click(function(q){j.close(q);return false}).appendTo(l),o=(j.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(g),p=c("<span></span>").addClass("ui-dialog-title").attr("id",m).html(k).prependTo(l);if(c.isFunction(i.beforeclose)&&!c.isFunction(i.beforeClose)){i.beforeClose=i.beforeclose}l.find("*").add(l).disableSelection();if(i.draggable&&c.fn.draggable){j._makeDraggable()}if(i.resizable&&c.fn.resizable){j._makeResizable()}j._createButtons(i.buttons);j._isOpen=false;if(c.fn.bgiframe){n.bgiframe()}},_init:function(){if(this.options.autoOpen){this.open()}},destroy:function(){var g=this;if(g.overlay){g.overlay.destroy()}g.uiDialog.hide();g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");g.uiDialog.remove();if(g.originalTitle){g.element.attr("title",g.originalTitle)}return g},widget:function(){return this.uiDialog},close:function(h){var i=this,g,j;if(false===i._trigger("beforeClose",h)){return}if(i.overlay){i.overlay.destroy()}i.uiDialog.unbind("keypress.ui-dialog");i._isOpen=false;if(i.options.hide){i.uiDialog.hide(i.options.hide,function(){i._trigger("close",h)})}else{i.uiDialog.hide();i._trigger("close",h)}c.ui.dialog.overlay.resize();if(i.options.modal){g=0;c(".ui-dialog").each(function(){if(this!==i.uiDialog[0]){j=c(this).css("z-index");if(!isNaN(j)){g=Math.max(g,j)}}});c.ui.dialog.maxZ=g}return i},isOpen:function(){return this._isOpen},moveToTop:function(g,h){var i=this,j=i.options,k;if((j.modal&&!g)||(!j.stack&&!j.modal)){return i._trigger("focus",h)}if(j.zIndex>c.ui.dialog.maxZ){c.ui.dialog.maxZ=j.zIndex}if(i.overlay){c.ui.dialog.maxZ+=1;i.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}k={scrollTop:i.element.scrollTop(),scrollLeft:i.element.scrollLeft()};c.ui.dialog.maxZ+=1;i.uiDialog.css("z-index",c.ui.dialog.maxZ);i.element.attr(k);i._trigger("focus",h);return i},open:function(){if(this._isOpen){return}var g=this,h=g.options,i=g.uiDialog;g.overlay=h.modal?new c.ui.dialog.overlay(g):null;g._size();g._position(h.position);i.show(h.show);g.moveToTop(true);if(h.modal){i.bind("keypress.ui-dialog",function(m){if(m.keyCode!==c.ui.keyCode.TAB){return}var k=c(":tabbable",this),l=k.filter(":first"),j=k.filter(":last");if(m.target===j[0]&&!m.shiftKey){l.focus(1);return false}else{if(m.target===l[0]&&m.shiftKey){j.focus(1);return false}}})}c(g.element.find(":tabbable").get().concat(i.find(".ui-dialog-buttonpane :tabbable").get().concat(i.get()))).eq(0).focus();g._isOpen=true;g._trigger("open");return g},_createButtons:function(k){var i=this,g=false,j=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),h=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(j);i.uiDialog.find(".ui-dialog-buttonpane").remove();if(typeof k==="object"&&k!==null){c.each(k,function(){return !(g=true)})}if(g){c.each(k,function(n,l){l=c.isFunction(l)?{click:l,text:n}:l;var m=c('<button type="button"></button>').click(function(){l.click.apply(i.element[0],arguments)}).appendTo(h);c.each(l,function(o,p){if(o==="click"){return}if(o in e){m[o](p)}else{m.attr(o,p)}});if(c.fn.button){m.button()}});j.appendTo(i.uiDialog)}},_makeDraggable:function(){var j=this,k=j.options,i=c(document),g;function h(l){return{position:l.position,offset:l.offset}}j.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(m,l){g=k.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");j._trigger("dragStart",m,h(l))},drag:function(m,l){j._trigger("drag",m,h(l))},stop:function(m,l){k.position=[l.position.left-i.scrollLeft(),l.position.top-i.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);j._trigger("dragStop",m,h(l));c.ui.dialog.overlay.resize()}})},_makeResizable:function(k){k=(k===a?this.options.resizable:k);var l=this,g=l.options,j=l.uiDialog.css("position"),h=(typeof k==="string"?k:"n,e,s,w,se,sw,ne,nw");function i(m){return{originalPosition:m.originalPosition,originalSize:m.originalSize,position:m.position,size:m.size}}l.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:l.element,maxWidth:g.maxWidth,maxHeight:g.maxHeight,minWidth:g.minWidth,minHeight:l._minHeight(),handles:h,start:function(n,m){c(this).addClass("ui-dialog-resizing");l._trigger("resizeStart",n,i(m))},resize:function(n,m){l._trigger("resize",n,i(m))},stop:function(n,m){c(this).removeClass("ui-dialog-resizing");g.height=c(this).height();g.width=c(this).width();l._trigger("resizeStop",n,i(m));c.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var g=this.options;if(g.height==="auto"){return g.minHeight}else{return Math.min(g.minHeight,g.height)}},_position:function(g){var h=[],j=[0,0],i;if(g){if(typeof g==="string"||(typeof g==="object"&&"0" in g)){h=g.split?g.split(" "):[g[0],g[1]];if(h.length===1){h[1]=h[0]}c.each(["left","top"],function(k,l){if(+h[k]===h[k]){j[k]=h[k];h[k]=l}});g={my:h.join(" "),at:h.join(" "),offset:j.join(" ")}}g=c.extend({},c.ui.dialog.prototype.options.position,g)}else{g=c.ui.dialog.prototype.options.position}i=this.uiDialog.is(":visible");if(!i){this.uiDialog.show()}this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},g));if(!i){this.uiDialog.hide()}},_setOptions:function(i){var h=this,g={},j=false;c.each(i,function(k,l){h._setOption(k,l);if(k in b){j=true}if(k in f){g[k]=l}});if(j){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",g)}},_setOption:function(l,g){var h=this,k=h.uiDialog;switch(l){case"beforeclose":l="beforeClose";break;case"buttons":h._createButtons(g);break;case"closeText":h.uiDialogTitlebarCloseText.text(""+g);break;case"dialogClass":k.removeClass(h.options.dialogClass).addClass(d+g);break;case"disabled":if(g){k.addClass("ui-dialog-disabled")}else{k.removeClass("ui-dialog-disabled")}break;case"draggable":var j=k.is(":data(draggable)");if(j&&!g){k.draggable("destroy")}if(!j&&g){h._makeDraggable()}break;case"position":h._position(g);break;case"resizable":var i=k.is(":data(resizable)");if(i&&!g){k.resizable("destroy")}if(i&&typeof g==="string"){k.resizable("option","handles",g)}if(!i&&g!==false){h._makeResizable(g)}break;case"title":c(".ui-dialog-title",h.uiDialogTitlebar).html(""+(g||"&#160;"));break}c.Widget.prototype._setOption.apply(h,arguments)},_size:function(){var j=this.options,g,i,k=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(j.minWidth>j.width){j.width=j.minWidth}g=this.uiDialog.css({height:"auto",width:j.width}).height();i=Math.max(0,j.minHeight-g);if(j.height==="auto"){if(c.support.minHeight){this.element.css({minHeight:i,height:"auto"})}else{this.uiDialog.show();var h=this.element.css("height","auto").height();if(!k){this.uiDialog.hide()}this.element.height(Math.max(h,i))}}else{this.element.height(Math.max(j.height-g,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});c.extend(c.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(h){var g=h.attr("id");if(!g){this.uuid+=1;g=this.uuid}return"ui-dialog-title-"+g},overlay:function(g){this.$el=c.ui.dialog.overlay.create(g)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(g){return g+".dialog-overlay"}).join(" "),create:function(h){if(this.instances.length===0){setTimeout(function(){if(c.ui.dialog.overlay.instances.length){c(document).bind(c.ui.dialog.overlay.events,function(i){if(c(i.target).zIndex()<c.ui.dialog.overlay.maxZ){return false}})}},1);c(document).bind("keydown.dialog-overlay",function(i){if(h.options.closeOnEscape&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){h.close(i);i.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var g=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});if(c.fn.bgiframe){g.bgiframe()}this.instances.push(g);return g},destroy:function(i){var h=c.inArray(i,this.instances);if(h!=-1){this.oldInstances.push(this.instances.splice(h,1)[0])}if(this.instances.length===0){c([document,window]).unbind(".dialog-overlay")}i.remove();var g=0;c.each(this.instances,function(){g=Math.max(g,this.css("z-index"))});this.maxZ=g},height:function(){var h,g;if(c.browser.msie&&c.browser.version<7){h=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);g=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(h<g){return c(window).height()+"px"}else{return h+"px"}}else{return c(document).height()+"px"}},width:function(){var g,h;if(c.browser.msie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);h=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(g<h){return c(window).width()+"px"}else{return g+"px"}}else{return c(document).width()+"px"}},resize:function(){var g=c([]);c.each(c.ui.dialog.overlay.instances,function(){g=g.add(this)});g.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));(function(e,a){e.ui=e.ui||{};var f=/left|center|right/,c=/top|center|bottom/,g="center",b=e.fn.position,d=e.fn.offset;e.fn.position=function(j){if(!j||!j.of){return b.apply(this,arguments)}j=e.extend({},j);var n=e(j.of),m=n[0],k=(j.collision||"flip").split(" "),l=j.offset?j.offset.split(" "):[0,0],i,o,h;if(m.nodeType===9){i=n.width();o=n.height();h={top:0,left:0}}else{if(m.setTimeout){i=n.width();o=n.height();h={top:n.scrollTop(),left:n.scrollLeft()}}else{if(m.preventDefault){j.at="left top";i=o=0;h={top:j.of.pageY,left:j.of.pageX}}else{i=n.outerWidth();o=n.outerHeight();h=n.offset()}}}e.each(["my","at"],function(){var p=(j[this]||"").split(" ");if(p.length===1){p=f.test(p[0])?p.concat([g]):c.test(p[0])?[g].concat(p):[g,g]}p[0]=f.test(p[0])?p[0]:g;p[1]=c.test(p[1])?p[1]:g;j[this]=p});if(k.length===1){k[1]=k[0]}l[0]=parseInt(l[0],10)||0;if(l.length===1){l[1]=l[0]}l[1]=parseInt(l[1],10)||0;if(j.at[0]==="right"){h.left+=i}else{if(j.at[0]===g){h.left+=i/2}}if(j.at[1]==="bottom"){h.top+=o}else{if(j.at[1]===g){h.top+=o/2}}h.left+=l[0];h.top+=l[1];return this.each(function(){var u=e(this),r=u.outerWidth(),w=u.outerHeight(),x=parseInt(e.curCSS(this,"marginLeft",true))||0,v=parseInt(e.curCSS(this,"marginTop",true))||0,q=r+x+(parseInt(e.curCSS(this,"marginRight",true))||0),y=w+v+(parseInt(e.curCSS(this,"marginBottom",true))||0),s=e.extend({},h),p;if(j.my[0]==="right"){s.left-=r}else{if(j.my[0]===g){s.left-=r/2}}if(j.my[1]==="bottom"){s.top-=w}else{if(j.my[1]===g){s.top-=w/2}}s.left=Math.round(s.left);s.top=Math.round(s.top);p={left:s.left-x,top:s.top-v};e.each(["left","top"],function(A,z){if(e.ui.position[k[A]]){e.ui.position[k[A]][z](s,{targetWidth:i,targetHeight:o,elemWidth:r,elemHeight:w,collisionPosition:p,collisionWidth:q,collisionHeight:y,offset:l,my:j.my,at:j.at})}});if(e.fn.bgiframe){u.bgiframe()}u.offset(e.extend(s,{using:j.using}))})};e.ui.position={fit:{left:function(h,i){var j=e(window),k=i.collisionPosition.left+i.collisionWidth-j.width()-j.scrollLeft();h.left=k>0?h.left-k:Math.max(h.left-i.collisionPosition.left,h.left)},top:function(h,i){var j=e(window),k=i.collisionPosition.top+i.collisionHeight-j.height()-j.scrollTop();h.top=k>0?h.top-k:Math.max(h.top-i.collisionPosition.top,h.top)}},flip:{left:function(m,h){if(h.at[0]===g){return}var i=e(window),j=h.collisionPosition.left+h.collisionWidth-i.width()-i.scrollLeft(),n=h.my[0]==="left"?-h.elemWidth:h.my[0]==="right"?h.elemWidth:0,l=h.at[0]==="left"?h.targetWidth:-h.targetWidth,k=-2*h.offset[0];m.left+=h.collisionPosition.left<0?n+l+k:j>0?n+l+k:0},top:function(m,h){if(h.at[1]===g){return}var i=e(window),j=h.collisionPosition.top+h.collisionHeight-i.height()-i.scrollTop(),n=h.my[1]==="top"?-h.elemHeight:h.my[1]==="bottom"?h.elemHeight:0,l=h.at[1]==="top"?h.targetHeight:-h.targetHeight,k=-2*h.offset[1];m.top+=h.collisionPosition.top<0?n+l+k:j>0?n+l+k:0}}};if(!e.offset.setOffset){e.offset.setOffset=function(k,j){if(/static/.test(e.curCSS(k,"position"))){k.style.position="relative"}var l=e(k),n=l.offset(),m=parseInt(e.curCSS(k,"top",true),10)||0,h=parseInt(e.curCSS(k,"left",true),10)||0,i={top:(j.top-n.top)+m,left:(j.left-n.left)+h};if("using" in j){j.using.call(k,i)}else{l.css(i)}};e.fn.offset=function(i){var h=this[0];if(!h||!h.ownerDocument){return null}if(i){return this.each(function(){e.offset.setOffset(this,i)})}return d.call(this)}}}(jQuery));(function(b,a){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(c){if(c===a){return this._value()}this._setOption("value",c);return this},_setOption:function(c,d){if(c==="value"){this.options.value=d;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var c=this.options.value;if(typeof c!=="number"){c=0}return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var d=this.value();var c=this._percentage();if(this.oldValue!==d){this.oldValue=d;this._trigger("change")}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",d)}});b.extend(b.ui.progressbar,{version:"1.8.16"})})(jQuery);(function(c,a){var b=5;c.widget("ui.slider",c.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var e=this,g=this.options,h=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",j=(g.values&&g.values.length)||1,d=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(g.disabled?" ui-slider-disabled ui-disabled":""));this.range=c([]);if(g.range){if(g.range===true){if(!g.values){g.values=[this._valueMin(),this._valueMin()]}if(g.values.length&&g.values.length!==2){g.values=[g.values[0],g.values[0]]}}this.range=c("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((g.range==="min"||g.range==="max")?" ui-slider-range-"+g.range:""))}for(var k=h.length;k<j;k+=1){d.push(f)}this.handles=h.add(c(d.join("")).appendTo(e.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(i){i.preventDefault()}).hover(function(){if(!g.disabled){c(this).addClass("ui-state-hover")}},function(){c(this).removeClass("ui-state-hover")}).focus(function(){if(!g.disabled){c(".ui-slider .ui-state-focus").removeClass("ui-state-focus");c(this).addClass("ui-state-focus")}else{c(this).blur()}}).blur(function(){c(this).removeClass("ui-state-focus")});this.handles.each(function(l){c(this).data("index.ui-slider-handle",l)});this.handles.keydown(function(o){var m=true,l=c(this).data("index.ui-slider-handle"),p,q,n,i;if(e.options.disabled){return}switch(o.keyCode){case c.ui.keyCode.HOME:case c.ui.keyCode.END:case c.ui.keyCode.PAGE_UP:case c.ui.keyCode.PAGE_DOWN:case c.ui.keyCode.UP:case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:case c.ui.keyCode.LEFT:m=false;if(!e._keySliding){e._keySliding=true;c(this).addClass("ui-state-active");p=e._start(o,l);if(p===false){return}}break}i=e.options.step;if(e.options.values&&e.options.values.length){q=n=e.values(l)}else{q=n=e.value()}switch(o.keyCode){case c.ui.keyCode.HOME:n=e._valueMin();break;case c.ui.keyCode.END:n=e._valueMax();break;case c.ui.keyCode.PAGE_UP:n=e._trimAlignValue(q+((e._valueMax()-e._valueMin())/b));break;case c.ui.keyCode.PAGE_DOWN:n=e._trimAlignValue(q-((e._valueMax()-e._valueMin())/b));break;case c.ui.keyCode.UP:case c.ui.keyCode.RIGHT:if(q===e._valueMax()){return}n=e._trimAlignValue(q+i);break;case c.ui.keyCode.DOWN:case c.ui.keyCode.LEFT:if(q===e._valueMin()){return}n=e._trimAlignValue(q-i);break}e._slide(o,l,n);return m}).keyup(function(i){var l=c(this).data("index.ui-slider-handle");if(e._keySliding){e._keySliding=false;e._stop(i,l);e._change(i,l);c(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(k){var g=this.options,m,i,h,j,d,f,l,e,n;if(g.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();m={x:k.pageX,y:k.pageY};i=this._normValueFromMouse(m);h=this._valueMax()-this._valueMin()+1;d=this;this.handles.each(function(p){var o=Math.abs(i-d.values(p));if(h>o){h=o;j=c(this);f=p}});if(g.range===true&&this.values(1)===g.min){f+=1;j=c(this.handles[f])}l=this._start(k,f);if(l===false){return false}this._mouseSliding=true;d._handleIndex=f;j.addClass("ui-state-active").focus();e=j.offset();n=!c(k.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=n?{left:0,top:0}:{left:k.pageX-e.left-(j.width()/2),top:k.pageY-e.top-(j.height()/2)-(parseInt(j.css("borderTopWidth"),10)||0)-(parseInt(j.css("borderBottomWidth"),10)||0)+(parseInt(j.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(k,f,i)}this._animateOff=true;return true},_mouseStart:function(d){return true},_mouseDrag:function(e){var d={x:e.pageX,y:e.pageY},f=this._normValueFromMouse(d);this._slide(e,this._handleIndex,f);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(f){var g,i,h,e,d;if(this.orientation==="horizontal"){g=this.elementSize.width;i=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{g=this.elementSize.height;i=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}h=(i/g);if(h>1){h=1}if(h<0){h=0}if(this.orientation==="vertical"){h=1-h}e=this._valueMax()-this._valueMin();d=this._valueMin()+h*e;return this._trimAlignValue(d)},_start:function(f,d){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);e.values=this.values()}return this._trigger("start",f,e)},_slide:function(g,i,e){var d,f,h;if(this.options.values&&this.options.values.length){d=this.values(i?0:1);if((this.options.values.length===2&&this.options.range===true)&&((i===0&&e>d)||(i===1&&e<d))){e=d}if(e!==this.values(i)){f=this.values();f[i]=e;h=this._trigger("slide",g,{handle:this.handles[i],value:e,values:f});d=this.values(i?0:1);if(h!==false){this.values(i,e,true)}}}else{if(e!==this.value()){h=this._trigger("slide",g,{handle:this.handles[i],value:e});if(h!==false){this.value(e)}}}},_stop:function(f,d){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);e.values=this.values()}this._trigger("stop",f,e)},_change:function(f,d){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(d);e.values=this.values()}this._trigger("change",f,e)}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);this._refreshValue();this._change(null,0);return}return this._value()},values:function(g,f){var e,d,h;if(arguments.length>1){this.options.values[g]=this._trimAlignValue(f);this._refreshValue();this._change(null,g);return}if(arguments.length){if(c.isArray(arguments[0])){e=this.options.values;d=arguments[0];for(h=0;h<e.length;h+=1){e[h]=this._trimAlignValue(d[h]);this._change(null,h)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(g)}else{return this.value()}}}else{return this._values()}},_setOption:function(g,d){var e,f=0;if(c.isArray(this.options.values)){f=this.options.values.length}c.Widget.prototype._setOption.apply(this,arguments);switch(g){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(e=0;e<f;e+=1){this._change(null,e)}this._animateOff=false;break}},_value:function(){var d=this.options.value;d=this._trimAlignValue(d);return d},_values:function(g){var d,f,e;if(arguments.length){d=this.options.values[g];d=this._trimAlignValue(d);return d}else{f=this.options.values.slice();for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(f[e])}return f}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()}if(e>=this._valueMax()){return this._valueMax()}var f=(this.options.step>0)?this.options.step:1,d=(e-this._valueMin())%f,g=e-d;if(Math.abs(d)*2>=f){g+=(d>0)?f:(-f)}return parseFloat(g.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var d=this.options.range,h=this.options,f=this,j=(!this._animateOff)?h.animate:false,k,g={},l,i,m,e;if(this.options.values&&this.options.values.length){this.handles.each(function(n,o){k=(f.values(n)-f._valueMin())/(f._valueMax()-f._valueMin())*100;g[f.orientation==="horizontal"?"left":"bottom"]=k+"%";c(this).stop(1,1)[j?"animate":"css"](g,h.animate);if(f.options.range===true){if(f.orientation==="horizontal"){if(n===0){f.range.stop(1,1)[j?"animate":"css"]({left:k+"%"},h.animate)}if(n===1){f.range[j?"animate":"css"]({width:(k-l)+"%"},{queue:false,duration:h.animate})}}else{if(n===0){f.range.stop(1,1)[j?"animate":"css"]({bottom:(k)+"%"},h.animate)}if(n===1){f.range[j?"animate":"css"]({height:(k-l)+"%"},{queue:false,duration:h.animate})}}}l=k})}else{i=this.value();m=this._valueMin();e=this._valueMax();k=(e!==m)?(i-m)/(e-m)*100:0;g[f.orientation==="horizontal"?"left":"bottom"]=k+"%";this.handle.stop(1,1)[j?"animate":"css"](g,h.animate);if(d==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[j?"animate":"css"]({width:k+"%"},h.animate)}if(d==="max"&&this.orientation==="horizontal"){this.range[j?"animate":"css"]({width:(100-k)+"%"},{queue:false,duration:h.animate})}if(d==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[j?"animate":"css"]({height:k+"%"},h.animate)}if(d==="max"&&this.orientation==="vertical"){this.range[j?"animate":"css"]({height:(100-k)+"%"},{queue:false,duration:h.animate})}}}});c.extend(c.ui.slider,{version:"1.8.16"})}(jQuery));(function(d,a){var b=0,f=0;function e(){return ++b}function c(){return ++f}d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(g,h){if(g=="selected"){if(this.options.collapsible&&h==this.options.selected){return}this.select(h)}else{this.options[g]=h;this._tabify()}},_tabId:function(g){return g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(g){return g.replace(/:/g,"\\:")},_cookie:function(){var g=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+c());return d.cookie.apply(null,[g].concat(d.makeArray(arguments)))},_ui:function(g,h){return{tab:g,panel:h,index:this.anchors.index(g)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var g=d(this);g.html(g.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){var m=this,s=this.options,u=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(B,y){var o=d(y).attr("href");var z=o.split("#")[0],w;if(z&&(z===location.toString().split("#")[0]||(w=d("base")[0])&&z===w.href)){o=y.hash;y.href=o}if(u.test(o)){m.panels=m.panels.add(m.element.find(m._sanitizeSelector(o)))}else{if(o&&o!=="#"){d.data(y,"href.tabs",o);d.data(y,"load.tabs",o.replace(/#.*$/,""));var x=m._tabId(y);y.href="#"+x;var A=m.element.find("#"+x);if(!A.length){A=d(s.panelTemplate).attr("id",x).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(m.panels[B-1]||m.list);A.data("destroy.tabs",true)}m.panels=m.panels.add(A)}else{s.disabled.push(B)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(s.selected===a){if(location.hash){this.anchors.each(function(w,o){if(o.hash==location.hash){s.selected=w;return false}})}if(typeof s.selected!=="number"&&s.cookie){s.selected=parseInt(m._cookie(),10)}if(typeof s.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){s.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}s.selected=s.selected||(this.lis.length?0:-1)}else{if(s.selected===null){s.selected=-1}}s.selected=((s.selected>=0&&this.anchors[s.selected])||s.selected<0)?s.selected:0;s.disabled=d.unique(s.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(o,w){return m.lis.index(o)}))).sort();if(d.inArray(s.selected,s.disabled)!=-1){s.disabled.splice(d.inArray(s.selected,s.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(s.selected>=0&&this.anchors.length){m.element.find(m._sanitizeSelector(m.anchors[s.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(s.selected).addClass("ui-tabs-selected ui-state-active");m.element.queue("tabs",function(){m._trigger("show",null,m._ui(m.anchors[s.selected],m.element.find(m._sanitizeSelector(m.anchors[s.selected].hash))[0]))});this.load(s.selected)}d(window).bind("unload",function(){m.lis.add(m.anchors).unbind(".tabs");m.lis=m.anchors=m.panels=null})}else{s.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[s.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(s.cookie){this._cookie(s.selected,s.cookie)}for(var p=0,j;(j=this.lis[p]);p++){d(j)[d.inArray(p,s.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(s.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(s.event!=="mouseover"){var h=function(i,o){if(o.is(":not(.ui-state-disabled)")){o.addClass("ui-state-"+i)}};var v=function(i,o){o.removeClass("ui-state-"+i)};this.lis.bind("mouseover.tabs",function(){h("hover",d(this))});this.lis.bind("mouseout.tabs",function(){v("hover",d(this))});this.anchors.bind("focus.tabs",function(){h("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){v("focus",d(this).closest("li"))})}var q,k;if(s.fx){if(d.isArray(s.fx)){q=s.fx[0];k=s.fx[1]}else{q=k=s.fx}}function g(o,i){o.css("display","");if(!d.support.opacity&&i.opacity){o[0].style.removeAttribute("filter")}}var l=k?function(i,o){d(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(k,k.duration||"normal",function(){g(o,k);m._trigger("show",null,m._ui(i,o[0]))})}:function(i,o){d(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");m._trigger("show",null,m._ui(i,o[0]))};var r=q?function(i,o){o.animate(q,q.duration||"normal",function(){m.lis.removeClass("ui-tabs-selected ui-state-active");o.addClass("ui-tabs-hide");g(o,q);m.element.dequeue("tabs")})}:function(i,w,o){m.lis.removeClass("ui-tabs-selected ui-state-active");w.addClass("ui-tabs-hide");m.element.dequeue("tabs")};this.anchors.bind(s.event+".tabs",function(){var w=this,x=d(w).closest("li"),o=m.panels.filter(":not(.ui-tabs-hide)"),i=m.element.find(m._sanitizeSelector(w.hash));if((x.hasClass("ui-tabs-selected")&&!s.collapsible)||x.hasClass("ui-state-disabled")||x.hasClass("ui-state-processing")||m.panels.filter(":animated").length||m._trigger("select",null,m._ui(this,i[0]))===false){this.blur();return false}s.selected=m.anchors.index(this);m.abort();if(s.collapsible){if(x.hasClass("ui-tabs-selected")){s.selected=-1;if(s.cookie){m._cookie(s.selected,s.cookie)}m.element.queue("tabs",function(){r(w,o)}).dequeue("tabs");this.blur();return false}else{if(!o.length){if(s.cookie){m._cookie(s.selected,s.cookie)}m.element.queue("tabs",function(){l(w,i)});m.load(m.anchors.index(this));this.blur();return false}}}if(s.cookie){m._cookie(s.selected,s.cookie)}if(i.length){if(o.length){m.element.queue("tabs",function(){r(w,o)})}m.element.queue("tabs",function(){l(w,i)});m.load(m.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(d.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(g){if(typeof g=="string"){g=this.anchors.index(this.anchors.filter("[href$="+g+"]"))}return g},destroy:function(){var g=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var h=d.data(this,"href.tabs");if(h){this.href=h}var i=d(this).unbind(".tabs");d.each(["href","load","cache"],function(k,j){i.removeData(j+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(d.data(this,"destroy.tabs")){d(this).remove()}else{d(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(g.cookie){this._cookie(null,g.cookie)}return this},add:function(j,n,m){if(m===a){m=this.anchors.length}var g=this,i=this.options,l=d(i.tabTemplate.replace(/#\{href\}/g,j).replace(/#\{label\}/g,n)),k=!j.indexOf("#")?j.replace("#",""):this._tabId(d("a",l)[0]);l.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var h=g.element.find("#"+k);if(!h.length){h=d(i.panelTemplate).attr("id",k).data("destroy.tabs",true)}h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(m>=this.lis.length){l.appendTo(this.list);h.appendTo(this.list[0].parentNode)}else{l.insertBefore(this.lis[m]);h.insertBefore(this.panels[m])}i.disabled=d.map(i.disabled,function(o,p){return o>=m?++o:o});this._tabify();if(this.anchors.length==1){i.selected=0;l.addClass("ui-tabs-selected ui-state-active");h.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){g._trigger("show",null,g._ui(g.anchors[0],g.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[m],this.panels[m]));return this},remove:function(h){h=this._getIndex(h);var g=this.options,j=this.lis.eq(h).remove(),i=this.panels.eq(h).remove();if(j.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(h+(h+1<this.anchors.length?1:-1))}g.disabled=d.map(d.grep(g.disabled,function(k,l){return k!=h}),function(k,l){return k>=h?--k:k});this._tabify();this._trigger("remove",null,this._ui(j.find("a")[0],i[0]));return this},enable:function(g){g=this._getIndex(g);var h=this.options;if(d.inArray(g,h.disabled)==-1){return}this.lis.eq(g).removeClass("ui-state-disabled");h.disabled=d.grep(h.disabled,function(j,k){return j!=g});this._trigger("enable",null,this._ui(this.anchors[g],this.panels[g]));return this},disable:function(h){h=this._getIndex(h);var i=this,g=this.options;if(h!=g.selected){this.lis.eq(h).addClass("ui-state-disabled");g.disabled.push(h);g.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[h],this.panels[h]))}return this},select:function(g){g=this._getIndex(g);if(g==-1){if(this.options.collapsible&&this.options.selected!=-1){g=this.options.selected}else{return this}}this.anchors.eq(g).trigger(this.options.event+".tabs");return this},load:function(l){l=this._getIndex(l);var h=this,g=this.options,k=this.anchors.eq(l)[0],i=d.data(k,"load.tabs");this.abort();if(!i||this.element.queue("tabs").length!==0&&d.data(k,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(l).addClass("ui-state-processing");if(g.spinner){var j=d("span",k);j.data("label.tabs",j.html()).html(g.spinner)}this.xhr=d.ajax(d.extend({},g.ajaxOptions,{url:i,success:function(m,n){h.element.find(h._sanitizeSelector(k.hash)).html(m);h._cleanup();if(g.cache){d.data(k,"cache.tabs",true)}h._trigger("load",null,h._ui(h.anchors[l],h.panels[l]));try{g.ajaxOptions.success(m,n)}catch(o){}},error:function(m,n,o){h._cleanup();h._trigger("load",null,h._ui(h.anchors[l],h.panels[l]));try{g.ajaxOptions.error(m,n,l,k)}catch(o){}}}));h.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(g,h){this.anchors.eq(g).removeData("cache.tabs").data("load.tabs",h);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.16"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(k,l){var g=this,i=this.options;var h=g._rotate||(g._rotate=function(m){clearTimeout(g.rotation);g.rotation=setTimeout(function(){var n=i.selected;g.select(++n<g.anchors.length?n:0)},k);if(m){m.stopPropagation()}});var j=g._unrotate||(g._unrotate=!l?function(m){if(m.clientX){g.rotate(null)}}:function(m){t=i.selected;h()});if(k){this.element.bind("tabsshow",h);this.anchors.bind(i.event+".tabs",j);h()}else{clearTimeout(g.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(i.event+".tabs",j);delete this._rotate;delete this._unrotate}return this}})})(jQuery);/*
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(e,d,a){var c=/\+/g;function f(h){return h}function g(h){return decodeURIComponent(h.replace(c," "))}var b=e.cookie=function(r,m,k){if(m!==a){k=e.extend({},b.defaults,k);if(m===null){k.expires=-1}if(typeof k.expires==="number"){var q=k.expires,h=k.expires=new Date();h.setDate(h.getDate()+q)}m=b.json?JSON.stringify(m):String(m);return(d.cookie=[encodeURIComponent(r),"=",b.raw?m:encodeURIComponent(m),k.expires?"; expires="+k.expires.toUTCString():"",k.path?"; path="+k.path:"",k.domain?"; domain="+k.domain:"",k.secure?"; secure":""].join(""))}var o=b.raw?f:g;var s=d.cookie.split("; ");for(var j=0,n=s.length;j<n;j++){var p=s[j].split("=");if(o(p.shift())===r){var u=o(p.join("="));return b.json?JSON.parse(u):u}}return null};b.defaults={};e.removeCookie=function(h,i){if(e.cookie(h)!==null){e.cookie(h,null,i);return true}return false}})(jQuery,document);equalheight=function(d){var f=0,e=0,a=new Array(),b,c=0;$(d).each(function(){b=$(this);$(b).height("auto");topPostion=b.position().top;if(e!=topPostion){for(currentDiv=0;currentDiv<a.length;currentDiv++){a[currentDiv].height(f)}a.length=0;e=topPostion;f=b.height();a.push(b)}else{a.push(b);f=(f<b.height())?(b.height()):(f)}for(currentDiv=0;currentDiv<a.length;currentDiv++){a[currentDiv].height(f)}})};$(window).resize(function(){equalheight(".trkw-featured-news-container .fn-col")});$(window).load(function(){equalheight(".trkw-video-container .trkw-video-col")});$(window).resize(function(){equalheight(".trkw-video-container .trkw-video-col")});equalHeightBox=function(c,b){$(c).find(b).css("height","auto");var a=0;$(c).find(b).each(function(){if(a<$(this).height()){a=parseInt($(this).height())}});$(c).find(b).css("height",a)};(function(c){var a={};var b={mode:"horizontal",slideSelector:"",infiniteLoop:true,hideControlOnEnd:false,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:false,captions:false,ticker:false,tickerHover:false,adaptiveHeight:false,adaptiveHeightSpeed:500,video:false,useCSS:true,preloadImages:"visible",responsive:true,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:true,swipeThreshold:50,oneToOneTouch:true,preventDefaultSwipeX:true,preventDefaultSwipeY:false,pager:true,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:true,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:false,startText:"Start",stopText:"Stop",autoControlsCombine:false,autoControlsSelector:null,auto:false,pause:4000,autoStart:true,autoDirection:"next",autoHover:false,autoDelay:0,autoSlideForOnePage:false,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};c.fn.bxSlider=function(q){if(this.length==0){return this}if(this.length>1){this.each(function(){c(this).bxSlider(q)});return this}var L={};var n=this;a.el=this;var M=c(window).width();var f=c(window).height();var d=function(){L.settings=c.extend({},b,q);L.settings.slideWidth=parseInt(L.settings.slideWidth);L.children=n.children(L.settings.slideSelector);if(L.children.length<L.settings.minSlides){L.settings.minSlides=L.children.length}if(L.children.length<L.settings.maxSlides){L.settings.maxSlides=L.children.length}if(L.settings.randomStart){L.settings.startSlide=Math.floor(Math.random()*L.children.length)}L.active={index:L.settings.startSlide};L.carousel=L.settings.minSlides>1||L.settings.maxSlides>1;if(L.carousel){L.settings.preloadImages="all"}L.minThreshold=(L.settings.minSlides*L.settings.slideWidth)+((L.settings.minSlides-1)*L.settings.slideMargin);L.maxThreshold=(L.settings.maxSlides*L.settings.slideWidth)+((L.settings.maxSlides-1)*L.settings.slideMargin);L.working=false;L.controls={};L.interval=null;L.animProp=L.settings.mode=="vertical"?"top":"left";L.usingCSS=L.settings.useCSS&&L.settings.mode!="fade"&&(function(){var T=document.createElement("div");var R=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var S in R){if(T.style[R[S]]!==undefined){L.cssPrefix=R[S].replace("Perspective","").toLowerCase();L.animProp="-"+L.cssPrefix+"-transform";return true}}return false}());if(L.settings.mode=="vertical"){L.settings.maxSlides=L.settings.minSlides}n.data("origStyle",n.attr("style"));n.children(L.settings.slideSelector).each(function(){c(this).data("origStyle",c(this).attr("style"))});J()};var J=function(){n.wrap('<div class="'+L.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');L.viewport=n.parent();L.loader=c('<div class="bx-loading" />');L.viewport.prepend(L.loader);n.css({width:L.settings.mode=="horizontal"?(L.children.length*100+215)+"%":"auto",position:"relative"});if(L.usingCSS&&L.settings.easing){n.css("-"+L.cssPrefix+"-transition-timing-function",L.settings.easing)}else{if(!L.settings.easing){L.settings.easing="swing"}}var S=k();L.viewport.css({width:"100%",overflow:"hidden",position:"relative"});L.viewport.parent().css({maxWidth:D()});if(!L.settings.pager){L.viewport.parent().css({margin:"0 auto 0px"})}L.children.css({"float":L.settings.mode=="horizontal"?"left":"none",listStyle:"none",position:"relative"});L.children.css("width",v());if(L.settings.mode=="horizontal"&&L.settings.slideMargin>0){L.children.css("marginRight",L.settings.slideMargin)}if(L.settings.mode=="vertical"&&L.settings.slideMargin>0){L.children.css("marginBottom",L.settings.slideMargin)}if(L.settings.mode=="fade"){L.children.css({position:"absolute",zIndex:0,display:"none"});L.children.eq(L.settings.startSlide).css({zIndex:L.settings.slideZIndex,display:"block"})}L.controls.el=c('<div class="bx-controls" />');if(L.settings.captions){t()}L.active.last=L.settings.startSlide==C()-1;if(L.settings.video){n.fitVids()}var R=L.children.eq(L.settings.startSlide);if(L.settings.preloadImages=="all"){R=L.children}if(!L.settings.ticker){if(L.settings.pager){o()}if(L.settings.controls){A()}if(L.settings.auto&&L.settings.autoControls){r()}if(L.settings.controls||L.settings.autoControls||L.settings.pager){L.viewport.after(L.controls.el)}}else{L.settings.pager=false}l(R,O)};var l=function(S,T){var U=S.find("img, iframe").length;if(U==0){T();return}var R=0;S.find("img, iframe").each(function(){c(this).one("load",function(){if(++R==U){T()}}).each(function(){if(this.complete){c(this).load()}})})};var O=function(){if(L.settings.infiniteLoop&&L.settings.mode!="fade"&&!L.settings.ticker){var T=L.settings.mode=="vertical"?L.settings.minSlides:L.settings.maxSlides;var R=L.children.slice(0,T).clone().addClass("bx-clone");var S=L.children.slice(-T).clone().addClass("bx-clone");n.append(R).prepend(S)}L.loader.remove();u();if(L.settings.mode=="vertical"){L.settings.adaptiveHeight=true}L.viewport.height(g());n.redrawSlider();L.settings.onSliderLoad(L.active.index);L.initialized=true;if(L.settings.responsive){c(window).bind("resize",m)}if(L.settings.auto&&L.settings.autoStart&&(C()>1||L.settings.autoSlideForOnePage)){K()}if(L.settings.ticker){e()}if(L.settings.pager){y(L.settings.startSlide)}if(L.settings.controls){x()}if(L.settings.touchEnabled&&!L.settings.ticker){H()}};var g=function(){var R=0;var T=c();if(L.settings.mode!="vertical"&&!L.settings.adaptiveHeight){T=L.children}else{if(!L.carousel){T=L.children.eq(L.active.index)}else{var S=L.settings.moveSlides==1?L.active.index:L.active.index*h();T=L.children.eq(S);for(i=1;i<=L.settings.maxSlides-1;i++){if(S+i>=L.children.length){T=T.add(L.children.eq(i-1))}else{T=T.add(L.children.eq(S+i))}}}}if(L.settings.mode=="vertical"){T.each(function(U){R+=c(this).outerHeight()});if(L.settings.slideMargin>0){R+=L.settings.slideMargin*(L.settings.minSlides-1)}}else{R=Math.max.apply(Math,T.map(function(){return c(this).outerHeight(false)}).get())}if(L.viewport.css("box-sizing")=="border-box"){R+=parseFloat(L.viewport.css("padding-top"))+parseFloat(L.viewport.css("padding-bottom"))+parseFloat(L.viewport.css("border-top-width"))+parseFloat(L.viewport.css("border-bottom-width"))}else{if(L.viewport.css("box-sizing")=="padding-box"){R+=parseFloat(L.viewport.css("padding-top"))+parseFloat(L.viewport.css("padding-bottom"))}}return R};var D=function(){var R="100%";if(L.settings.slideWidth>0){if(L.settings.mode=="horizontal"){R=(L.settings.maxSlides*L.settings.slideWidth)+((L.settings.maxSlides-1)*L.settings.slideMargin)}else{R=L.settings.slideWidth}}return R};var v=function(){var R=L.settings.slideWidth;var S=L.viewport.width();if(L.settings.slideWidth==0||(L.settings.slideWidth>S&&!L.carousel)||L.settings.mode=="vertical"){R=S}else{if(L.settings.maxSlides>1&&L.settings.mode=="horizontal"){if(S>L.maxThreshold){}else{if(S<L.minThreshold){R=(S-(L.settings.slideMargin*(L.settings.minSlides-1)))/L.settings.minSlides}}}}return R};var k=function(){var S=1;if(L.settings.mode=="horizontal"&&L.settings.slideWidth>0){if(L.viewport.width()<L.minThreshold){S=L.settings.minSlides}else{if(L.viewport.width()>L.maxThreshold){S=L.settings.maxSlides}else{var R=L.children.first().width()+L.settings.slideMargin;S=Math.floor((L.viewport.width()+L.settings.slideMargin)/R)}}}else{if(L.settings.mode=="vertical"){S=L.settings.minSlides}}return S};var C=function(){var T=0;if(L.settings.moveSlides>0){if(L.settings.infiniteLoop){T=Math.ceil(L.children.length/h())}else{var S=0;var R=0;while(S<L.children.length){++T;S=R+k();R+=L.settings.moveSlides<=k()?L.settings.moveSlides:k()}}}else{T=Math.ceil(L.children.length/k())}return T};var h=function(){if(L.settings.moveSlides>0&&L.settings.moveSlides<=k()){return L.settings.moveSlides}return k()};var u=function(){if(L.children.length>L.settings.maxSlides&&L.active.last&&!L.settings.infiniteLoop){if(L.settings.mode=="horizontal"){var T=L.children.last();var R=T.position();F(-(R.left-(L.viewport.width()-T.outerWidth())),"reset",0)}else{if(L.settings.mode=="vertical"){var S=L.children.length-L.settings.minSlides;var R=L.children.eq(S).position();F(-R.top,"reset",0)}}}else{var R=L.children.eq(L.active.index*h()).position();if(L.active.index==C()-1){L.active.last=true}if(R!=undefined){if(L.settings.mode=="horizontal"){F(-R.left,"reset",0)}else{if(L.settings.mode=="vertical"){F(-R.top,"reset",0)}}}}};var F=function(R,V,W,S){if(L.usingCSS){var T=L.settings.mode=="vertical"?"translate3d(0, "+R+"px, 0)":"translate3d("+R+"px, 0, 0)";n.css("-"+L.cssPrefix+"-transition-duration",W/1000+"s");if(V=="slide"){n.css(L.animProp,T);n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");B()})}else{if(V=="reset"){n.css(L.animProp,T)}else{if(V=="ticker"){n.css("-"+L.cssPrefix+"-transition-timing-function","linear");n.css(L.animProp,T);n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");F(S.resetValue,"reset",0);z()})}}}}else{var U={};U[L.animProp]=R;if(V=="slide"){n.animate(U,W,L.settings.easing,function(){B()})}else{if(V=="reset"){n.css(L.animProp,R)}else{if(V=="ticker"){n.animate(U,speed,"linear",function(){F(S.resetValue,"reset",0);z()})}}}}};var w=function(){var S="";var T=C();for(var R=0;R<T;R++){var U="";if(L.settings.buildPager&&c.isFunction(L.settings.buildPager)){U=L.settings.buildPager(R);L.pagerEl.addClass("bx-custom-pager")}else{U=R+1;L.pagerEl.addClass("bx-default-pager")}S+='<div class="bx-pager-item"><a href="" data-slide-index="'+R+'" class="bx-pager-link">'+U+"</a></div>"}L.pagerEl.html(S)};var o=function(){if(!L.settings.pagerCustom){L.pagerEl=c('<div class="bx-pager" />');if(L.settings.pagerSelector){c(L.settings.pagerSelector).html(L.pagerEl)}else{L.controls.el.addClass("bx-has-pager").append(L.pagerEl)}w()}else{L.pagerEl=c(L.settings.pagerCustom)}L.pagerEl.on("click","a",p)};var A=function(){L.controls.next=c('<a class="bx-next next sprite-video" href="">'+L.settings.nextText+"</a>");L.controls.prev=c('<a class="bx-prev prev sprite-video" href="">'+L.settings.prevText+"</a>");L.controls.next.bind("click",s);L.controls.prev.bind("click",I);if(L.settings.nextSelector){c(L.settings.nextSelector).append(L.controls.next)}if(L.settings.prevSelector){c(L.settings.prevSelector).append(L.controls.prev)}if(!L.settings.nextSelector&&!L.settings.prevSelector){L.controls.directionEl=c('<div class="bx-controls-direction" />');L.controls.directionEl.append(L.controls.prev).append(L.controls.next);L.controls.el.addClass("bx-has-controls-direction").append(L.controls.directionEl)}};var r=function(){L.controls.start=c('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+L.settings.startText+"</a></div>");L.controls.stop=c('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+L.settings.stopText+"</a></div>");L.controls.autoEl=c('<div class="bx-controls-auto" />');L.controls.autoEl.on("click",".bx-start",E);L.controls.autoEl.on("click",".bx-stop",P);if(L.settings.autoControlsCombine){L.controls.autoEl.append(L.controls.start)}else{L.controls.autoEl.append(L.controls.start).append(L.controls.stop)}if(L.settings.autoControlsSelector){c(L.settings.autoControlsSelector).html(L.controls.autoEl)}else{L.controls.el.addClass("bx-has-controls-auto").append(L.controls.autoEl)}j(L.settings.autoStart?"stop":"start")};var t=function(){L.children.each(function(R){var S=c(this).find("img:first").attr("title");if(S!=undefined&&(""+S).length){c(this).append('<div class="bx-caption"><span>'+S+"</span></div>")}})};var s=function(R){if(L.settings.auto){n.stopAuto()}n.goToNextSlide();R.preventDefault()};var I=function(R){if(L.settings.auto){n.stopAuto()}n.goToPrevSlide();R.preventDefault()};var E=function(R){n.startAuto();R.preventDefault()};var P=function(R){n.stopAuto();R.preventDefault()};var p=function(T){if(L.settings.auto){n.stopAuto()}var S=c(T.currentTarget);if(S.attr("data-slide-index")!==undefined){var R=parseInt(S.attr("data-slide-index"));if(R!=L.active.index){n.goToSlide(R)}T.preventDefault()}};var y=function(R){var S=L.children.length;if(L.settings.pagerType=="short"){if(L.settings.maxSlides>1){S=Math.ceil(L.children.length/L.settings.maxSlides)}L.pagerEl.html((R+1)+L.settings.pagerShortSeparator+S);return}L.pagerEl.find("a").removeClass("active");L.pagerEl.each(function(T,U){c(U).find("a").eq(R).addClass("active")})};var B=function(){if(L.settings.infiniteLoop){var R="";if(L.active.index==0){R=L.children.eq(0).position()}else{if(L.active.index==C()-1&&L.carousel){R=L.children.eq((C()-1)*h()).position()}else{if(L.active.index==L.children.length-1){R=L.children.eq(L.children.length-1).position()}}}if(R){if(L.settings.mode=="horizontal"){F(-R.left,"reset",0)}else{if(L.settings.mode=="vertical"){F(-R.top,"reset",0)}}}}L.working=false;L.settings.onSlideAfter(L.children.eq(L.active.index),L.oldIndex,L.active.index)};var j=function(R){if(L.settings.autoControlsCombine){L.controls.autoEl.html(L.controls[R])}else{L.controls.autoEl.find("a").removeClass("active");L.controls.autoEl.find("a:not(.bx-"+R+")").addClass("active")}};var x=function(){if(C()==1){L.controls.prev.addClass("disabled");L.controls.next.addClass("disabled")}else{if(!L.settings.infiniteLoop&&L.settings.hideControlOnEnd){if(L.active.index==0){L.controls.prev.addClass("disabled");L.controls.next.removeClass("disabled")}else{if(L.active.index==C()-1){L.controls.next.addClass("disabled");L.controls.prev.removeClass("disabled")}else{L.controls.prev.removeClass("disabled");L.controls.next.removeClass("disabled")}}}}};var K=function(){if(L.settings.autoDelay>0){var R=setTimeout(n.startAuto,L.settings.autoDelay)}else{n.startAuto()}if(L.settings.autoHover){n.hover(function(){if(L.interval){n.stopAuto(true);L.autoPaused=true}},function(){if(L.autoPaused){n.startAuto(true);L.autoPaused=null}})}};var e=function(){var R=0;if(L.settings.autoDirection=="next"){n.append(L.children.clone().addClass("bx-clone"))}else{n.prepend(L.children.clone().addClass("bx-clone"));var S=L.children.first().position();R=L.settings.mode=="horizontal"?-S.left:-S.top}F(R,"reset",0);L.settings.pager=false;L.settings.controls=false;L.settings.autoControls=false;if(L.settings.tickerHover&&!L.usingCSS){L.viewport.hover(function(){n.stop()},function(){var T=0;L.children.each(function(X){T+=L.settings.mode=="horizontal"?c(this).outerWidth(true):c(this).outerHeight(true)});var W=L.settings.speed/T;var U=L.settings.mode=="horizontal"?"left":"top";var V=W*(T-(Math.abs(parseInt(n.css(U)))));z(V)})}z()};var z=function(R){speed=R?R:L.settings.speed;var U={left:0,top:0};var V={left:0,top:0};if(L.settings.autoDirection=="next"){U=n.find(".bx-clone").first().position()}else{V=L.children.first().position()}var W=L.settings.mode=="horizontal"?-U.left:-U.top;var T=L.settings.mode=="horizontal"?-V.left:-V.top;var S={resetValue:T};F(W,"ticker",speed,S)};var H=function(){L.touch={start:{x:0,y:0},end:{x:0,y:0}};L.viewport.bind("touchstart",Q)};var Q=function(S){if(L.working){S.preventDefault()}else{L.touch.originalPos=n.position();var R=S.originalEvent;L.touch.start.x=R.changedTouches[0].pageX;L.touch.start.y=R.changedTouches[0].pageY;L.viewport.bind("touchmove",G);L.viewport.bind("touchend",N)}};var G=function(V){var S=V.originalEvent;var W=Math.abs(S.changedTouches[0].pageX-L.touch.start.x);var T=Math.abs(S.changedTouches[0].pageY-L.touch.start.y);if((W*3)>T&&L.settings.preventDefaultSwipeX){V.preventDefault()}else{if((T*3)>W&&L.settings.preventDefaultSwipeY){V.preventDefault()}}if(L.settings.mode!="fade"&&L.settings.oneToOneTouch){var R=0;if(L.settings.mode=="horizontal"){var U=S.changedTouches[0].pageX-L.touch.start.x;R=L.touch.originalPos.left+U}else{var U=S.changedTouches[0].pageY-L.touch.start.y;R=L.touch.originalPos.top+U}F(R,"reset",0)}};var N=function(U){L.viewport.unbind("touchmove",G);var R=U.originalEvent;var S=0;L.touch.end.x=R.changedTouches[0].pageX;L.touch.end.y=R.changedTouches[0].pageY;if(L.settings.mode=="fade"){var T=Math.abs(L.touch.start.x-L.touch.end.x);if(T>=L.settings.swipeThreshold){L.touch.start.x>L.touch.end.x?n.goToNextSlide():n.goToPrevSlide();n.stopAuto()}}else{var T=0;if(L.settings.mode=="horizontal"){T=L.touch.end.x-L.touch.start.x;S=L.touch.originalPos.left}else{T=L.touch.end.y-L.touch.start.y;S=L.touch.originalPos.top}if(!L.settings.infiniteLoop&&((L.active.index==0&&T>0)||(L.active.last&&T<0))){F(S,"reset",200)}else{if(Math.abs(T)>=L.settings.swipeThreshold){T<0?n.goToNextSlide():n.goToPrevSlide();n.stopAuto()}else{F(S,"reset",200)}}}L.viewport.unbind("touchend",N)};var m=function(T){if(!L.initialized){return}var S=c(window).width();var R=c(window).height();if(M!=S||f!=R){M=S;f=R;n.redrawSlider();L.settings.onSliderResize.call(n,L.active.index)}};n.goToSlide=function(Z,W){if(L.working||L.active.index==Z){return}L.working=true;L.oldIndex=L.active.index;if(Z<0){L.active.index=C()-1}else{if(Z>=C()){L.active.index=0}else{L.active.index=Z}}L.settings.onSlideBefore(L.children.eq(L.active.index),L.oldIndex,L.active.index);if(W=="next"){L.settings.onSlideNext(L.children.eq(L.active.index),L.oldIndex,L.active.index)}else{if(W=="prev"){L.settings.onSlidePrev(L.children.eq(L.active.index),L.oldIndex,L.active.index)}}L.active.last=L.active.index>=C()-1;if(L.settings.pager){y(L.active.index)}if(L.settings.controls){x()}if(L.settings.mode=="fade"){if(L.settings.adaptiveHeight&&L.viewport.height()!=g()){L.viewport.animate({height:g()},L.settings.adaptiveHeightSpeed)}L.children.filter(":visible").fadeOut(L.settings.speed).css({zIndex:0});L.children.eq(L.active.index).css("zIndex",L.settings.slideZIndex+1).fadeIn(L.settings.speed,function(){c(this).css("zIndex",L.settings.slideZIndex);B()})}else{if(L.settings.adaptiveHeight&&L.viewport.height()!=g()){L.viewport.animate({height:g()},L.settings.adaptiveHeightSpeed)}var X=0;var V={left:0,top:0};if(!L.settings.infiniteLoop&&L.carousel&&L.active.last){if(L.settings.mode=="horizontal"){var T=L.children.eq(L.children.length-1);V=T.position();X=L.viewport.width()-T.outerWidth()}else{var Y=L.children.length-L.settings.minSlides;V=L.children.eq(Y).position()}}else{if(L.carousel&&L.active.last&&W=="prev"){var R=L.settings.moveSlides==1?L.settings.maxSlides-h():((C()-1)*h())-(L.children.length-L.settings.maxSlides);var T=n.children(".bx-clone").eq(R);V=T.position()}else{if(W=="next"&&L.active.index==0){V=n.find("> .bx-clone").eq(L.settings.maxSlides).position();L.active.last=false}else{if(Z>=0){var S=Z*h();V=L.children.eq(S).position()}}}}if("undefined"!==typeof(V)){var U=L.settings.mode=="horizontal"?-(V.left-X):-V.top;F(U,"slide",L.settings.speed)}}};n.goToNextSlide=function(){if(!L.settings.infiniteLoop&&L.active.last){return}var R=parseInt(L.active.index)+1;n.goToSlide(R,"next")};n.goToPrevSlide=function(){if(!L.settings.infiniteLoop&&L.active.index==0){return}var R=parseInt(L.active.index)-1;n.goToSlide(R,"prev")};n.startAuto=function(R){if(L.interval){return}L.interval=setInterval(function(){L.settings.autoDirection=="next"?n.goToNextSlide():n.goToPrevSlide()},L.settings.pause);if(L.settings.autoControls&&R!=true){j("stop")}};n.stopAuto=function(R){if(!L.interval){return}clearInterval(L.interval);L.interval=null;if(L.settings.autoControls&&R!=true){j("start")}};n.getCurrentSlide=function(){return L.active.index};n.getCurrentSlideElement=function(){return L.children.eq(L.active.index)};n.getSlideCount=function(){return L.children.length};n.redrawSlider=function(){L.children.add(n.find(".bx-clone")).width(v());L.viewport.css("height",g());if(!L.settings.ticker){u()}if(L.active.last){L.active.index=C()-1}if(L.active.index>=C()){L.active.last=true}if(L.settings.pager&&!L.settings.pagerCustom){w();y(L.active.index)}};n.destroySlider=function(){if(!L.initialized){return}L.initialized=false;c(".bx-clone",this).remove();L.children.each(function(){c(this).data("origStyle")!=undefined?c(this).attr("style",c(this).data("origStyle")):c(this).removeAttr("style")});c(this).data("origStyle")!=undefined?this.attr("style",c(this).data("origStyle")):c(this).removeAttr("style");c(this).unwrap().unwrap();if(L.controls.el){L.controls.el.remove()}if(L.controls.next){L.controls.next.remove()}if(L.controls.prev){L.controls.prev.remove()}if(L.pagerEl&&L.settings.controls){L.pagerEl.remove()}c(".bx-caption",this).remove();if(L.controls.autoEl){L.controls.autoEl.remove()}clearInterval(L.interval);if(L.settings.responsive){c(window).unbind("resize",m)}};n.reloadSlider=function(R){if(R!=undefined){q=R}n.destroySlider();d()};d();return this}})(jQuery);!function(){function j(a){a.fn.swiper=function(e){var i;return a(this).each(function(){var k=new b(this,e);i||(i=k)}),i}}var f,b=function(al,ac){function X(i){return Math.floor(i)}function ag(){ai.autoplayTimeoutId=setTimeout(function(){ai.params.loop?(ai.fixLoop(),ai._slideNext(),ai.emit("onAutoplay",ai)):ai.isEnd?ac.autoplayStopOnLast?ai.stopAutoplay():(ai._slideTo(0),ai.emit("onAutoplay",ai)):(ai._slideNext(),ai.emit("onAutoplay",ai))},ai.params.autoplay)}function ah(n,m){var k=f(n.target);if(!k.is(m)){if("string"==typeof m){k=k.parents(m)}else{if(m.nodeType){var l;return k.parents().each(function(o,i){i===m&&(l=m)}),l?m:void 0}}}if(0!==k.length){return k[0]}}function ae(m,k){k=k||{};var l=window.MutationObserver||window.WebkitMutationObserver,i=new l(function(n){n.forEach(function(o){ai.onResize(!0),ai.emit("onObserverUpdate",ai,o)})});i.observe(m,{attributes:"undefined"==typeof k.attributes?!0:k.attributes,childList:"undefined"==typeof k.childList?!0:k.childList,characterData:"undefined"==typeof k.characterData?!0:k.characterData}),ai.observers.push(i)}function V(B){B.originalEvent&&(B=B.originalEvent);var y=B.keyCode||B.charCode;if(!ai.params.allowSwipeToNext&&(ai.isHorizontal()&&39===y||!ai.isHorizontal()&&40===y)){return !1}if(!ai.params.allowSwipeToPrev&&(ai.isHorizontal()&&37===y||!ai.isHorizontal()&&38===y)){return !1}if(!(B.shiftKey||B.altKey||B.ctrlKey||B.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===y||39===y||38===y||40===y){var k=!1;if(ai.container.parents(".swiper-slide").length>0&&0===ai.container.parents(".swiper-slide-active").length){return}var z={left:window.pageXOffset,top:window.pageYOffset},m=window.innerWidth,A=window.innerHeight,v=ai.container.offset();ai.rtl&&(v.left=v.left-ai.container[0].scrollLeft);for(var w=[[v.left,v.top],[v.left+ai.width,v.top],[v.left,v.top+ai.height],[v.left+ai.width,v.top+ai.height]],u=0;u<w.length;u++){var x=w[u];x[0]>=z.left&&x[0]<=z.left+m&&x[1]>=z.top&&x[1]<=z.top+A&&(k=!0)}if(!k){return}}ai.isHorizontal()?((37===y||39===y)&&(B.preventDefault?B.preventDefault():B.returnValue=!1),(39===y&&!ai.rtl||37===y&&ai.rtl)&&ai.slideNext(),(37===y&&!ai.rtl||39===y&&ai.rtl)&&ai.slidePrev()):((38===y||40===y)&&(B.preventDefault?B.preventDefault():B.returnValue=!1),40===y&&ai.slideNext(),38===y&&ai.slidePrev())}}function ak(v){v.originalEvent&&(v=v.originalEvent);var o=ai.mousewheel.event,k=0,p=ai.rtl?-1:1;if("mousewheel"===o){if(ai.params.mousewheelForceToAxis){if(ai.isHorizontal()){if(!(Math.abs(v.wheelDeltaX)>Math.abs(v.wheelDeltaY))){return}k=v.wheelDeltaX*p}else{if(!(Math.abs(v.wheelDeltaY)>Math.abs(v.wheelDeltaX))){return}k=v.wheelDeltaY}}else{k=Math.abs(v.wheelDeltaX)>Math.abs(v.wheelDeltaY)?-v.wheelDeltaX*p:-v.wheelDeltaY}}else{if("DOMMouseScroll"===o){k=-v.detail}else{if("wheel"===o){if(ai.params.mousewheelForceToAxis){if(ai.isHorizontal()){if(!(Math.abs(v.deltaX)>Math.abs(v.deltaY))){return}k=-v.deltaX*p}else{if(!(Math.abs(v.deltaY)>Math.abs(v.deltaX))){return}k=-v.deltaY}}else{k=Math.abs(v.deltaX)>Math.abs(v.deltaY)?-v.deltaX*p:-v.deltaY}}}}if(0!==k){if(ai.params.mousewheelInvert&&(k=-k),ai.params.freeMode){var l=ai.getWrapperTranslate()+k*ai.params.mousewheelSensitivity,u=ai.isBeginning,m=ai.isEnd;if(l>=ai.minTranslate()&&(l=ai.minTranslate()),l<=ai.maxTranslate()&&(l=ai.maxTranslate()),ai.setWrapperTransition(0),ai.setWrapperTranslate(l),ai.updateProgress(),ai.updateActiveIndex(),(!u&&ai.isBeginning||!m&&ai.isEnd)&&ai.updateClasses(),ai.params.freeModeSticky?(clearTimeout(ai.mousewheel.timeout),ai.mousewheel.timeout=setTimeout(function(){ai.slideReset()},300)):ai.params.lazyLoading&&ai.lazy&&ai.lazy.load(),0===l||l===ai.maxTranslate()){return}}else{if((new window.Date).getTime()-ai.mousewheel.lastScrollTime>60){if(0>k){if(ai.isEnd&&!ai.params.loop||ai.animating){if(ai.params.mousewheelReleaseOnEdges){return !0}}else{ai.slideNext()}}else{if(ai.isBeginning&&!ai.params.loop||ai.animating){if(ai.params.mousewheelReleaseOnEdges){return !0}}else{ai.slidePrev()}}}ai.mousewheel.lastScrollTime=(new window.Date).getTime()}return ai.params.autoplay&&ai.stopAutoplay(),v.preventDefault?v.preventDefault():v.returnValue=!1,!1}}function Y(u,k){u=f(u);var o,l,p,m=ai.rtl?-1:1;o=u.attr("data-swiper-parallax")||"0",l=u.attr("data-swiper-parallax-x"),p=u.attr("data-swiper-parallax-y"),l||p?(l=l||"0",p=p||"0"):ai.isHorizontal()?(l=o,p="0"):(p=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*k*m+"%":l*k*m+"px",p=p.indexOf("%")>=0?parseInt(p,10)*k+"%":p*k+"px",u.transform("translate3d("+l+", "+p+",0px)")}function aj(i){return 0!==i.indexOf("on")&&(i=i[0]!==i[0].toUpperCase()?"on"+i[0].toUpperCase()+i.substring(1):"on"+i),i}if(!(this instanceof b)){return new b(al,ac)}var af={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:0.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:0.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:0.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:0.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},ab=ac&&ac.virtualTranslate;ac=ac||{};var am={};for(var an in ac){if("object"!=typeof ac[an]||null===ac[an]||(ac[an].nodeType||ac[an]===window||ac[an]===document||"undefined"!=typeof g&&ac[an] instanceof g||"undefined"!=typeof jQuery&&ac[an] instanceof jQuery)){am[an]=ac[an]}else{am[an]={};for(var Z in ac[an]){am[an][Z]=ac[an][Z]}}}for(var aa in af){if("undefined"==typeof ac[aa]){ac[aa]=af[aa]}else{if("object"==typeof ac[aa]){for(var Q in af[aa]){"undefined"==typeof ac[aa][Q]&&(ac[aa][Q]=af[aa][Q])}}}}var ai=this;if(ai.params=ac,ai.originalParams=am,ai.classNames=[],"undefined"!=typeof f&&"undefined"!=typeof g&&(f=g),("undefined"!=typeof f||(f="undefined"==typeof g?window.Dom7||window.Zepto||window.jQuery:g))&&(ai.$=f,ai.currentBreakpoint=void 0,ai.getActiveBreakpoint=function(){if(!ai.params.breakpoints){return !1}var m,k=!1,l=[];for(m in ai.params.breakpoints){ai.params.breakpoints.hasOwnProperty(m)&&l.push(m)}l.sort(function(o,n){return parseInt(o,10)>parseInt(n,10)});for(var i=0;i<l.length;i++){m=l[i],m>=window.innerWidth&&!k&&(k=m)}return k||"max"},ai.setBreakpoint=function(){var m=ai.getActiveBreakpoint();if(m&&ai.currentBreakpoint!==m){var k=m in ai.params.breakpoints?ai.params.breakpoints[m]:ai.originalParams,l=ai.params.loop&&k.slidesPerView!==ai.params.slidesPerView;for(var i in k){ai.params[i]=k[i]}ai.currentBreakpoint=m,l&&ai.destroyLoop&&ai.reLoop(!0)}},ai.params.breakpoints&&ai.setBreakpoint(),ai.container=f(al),0!==ai.container.length)){if(ai.container.length>1){var K=[];return ai.container.each(function(){K.push(new b(this,ac))}),K}ai.container[0].swiper=ai,ai.container.data("swiper",ai),ai.classNames.push("swiper-container-"+ai.params.direction),ai.params.freeMode&&ai.classNames.push("swiper-container-free-mode"),ai.support.flexbox||(ai.classNames.push("swiper-container-no-flexbox"),ai.params.slidesPerColumn=1),ai.params.autoHeight&&ai.classNames.push("swiper-container-autoheight"),(ai.params.parallax||ai.params.watchSlidesVisibility)&&(ai.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(ai.params.effect)>=0&&(ai.support.transforms3d?(ai.params.watchSlidesProgress=!0,ai.classNames.push("swiper-container-3d")):ai.params.effect="slide"),"slide"!==ai.params.effect&&ai.classNames.push("swiper-container-"+ai.params.effect),"cube"===ai.params.effect&&(ai.params.resistanceRatio=0,ai.params.slidesPerView=1,ai.params.slidesPerColumn=1,ai.params.slidesPerGroup=1,ai.params.centeredSlides=!1,ai.params.spaceBetween=0,ai.params.virtualTranslate=!0,ai.params.setWrapperSize=!1),("fade"===ai.params.effect||"flip"===ai.params.effect)&&(ai.params.slidesPerView=1,ai.params.slidesPerColumn=1,ai.params.slidesPerGroup=1,ai.params.watchSlidesProgress=!0,ai.params.spaceBetween=0,ai.params.setWrapperSize=!1,"undefined"==typeof ab&&(ai.params.virtualTranslate=!0)),ai.params.grabCursor&&ai.support.touch&&(ai.params.grabCursor=!1),ai.wrapper=ai.container.children("."+ai.params.wrapperClass),ai.params.pagination&&(ai.paginationContainer=f(ai.params.pagination),ai.params.uniqueNavElements&&"string"==typeof ai.params.pagination&&ai.paginationContainer.length>1&&1===ai.container.find(ai.params.pagination).length&&(ai.paginationContainer=ai.container.find(ai.params.pagination)),"bullets"===ai.params.paginationType&&ai.params.paginationClickable?ai.paginationContainer.addClass("swiper-pagination-clickable"):ai.params.paginationClickable=!1,ai.paginationContainer.addClass("swiper-pagination-"+ai.params.paginationType)),(ai.params.nextButton||ai.params.prevButton)&&(ai.params.nextButton&&(ai.nextButton=f(ai.params.nextButton),ai.params.uniqueNavElements&&"string"==typeof ai.params.nextButton&&ai.nextButton.length>1&&1===ai.container.find(ai.params.nextButton).length&&(ai.nextButton=ai.container.find(ai.params.nextButton))),ai.params.prevButton&&(ai.prevButton=f(ai.params.prevButton),ai.params.uniqueNavElements&&"string"==typeof ai.params.prevButton&&ai.prevButton.length>1&&1===ai.container.find(ai.params.prevButton).length&&(ai.prevButton=ai.container.find(ai.params.prevButton)))),ai.isHorizontal=function(){return"horizontal"===ai.params.direction},ai.rtl=ai.isHorizontal()&&("rtl"===ai.container[0].dir.toLowerCase()||"rtl"===ai.container.css("direction")),ai.rtl&&ai.classNames.push("swiper-container-rtl"),ai.rtl&&(ai.wrongRTL="-webkit-box"===ai.wrapper.css("display")),ai.params.slidesPerColumn>1&&ai.classNames.push("swiper-container-multirow"),ai.device.android&&ai.classNames.push("swiper-container-android"),ai.container.addClass(ai.classNames.join(" ")),ai.translate=0,ai.progress=0,ai.velocity=0,ai.lockSwipeToNext=function(){ai.params.allowSwipeToNext=!1},ai.lockSwipeToPrev=function(){ai.params.allowSwipeToPrev=!1},ai.lockSwipes=function(){ai.params.allowSwipeToNext=ai.params.allowSwipeToPrev=!1},ai.unlockSwipeToNext=function(){ai.params.allowSwipeToNext=!0},ai.unlockSwipeToPrev=function(){ai.params.allowSwipeToPrev=!0},ai.unlockSwipes=function(){ai.params.allowSwipeToNext=ai.params.allowSwipeToPrev=!0},ai.params.grabCursor&&(ai.container[0].style.cursor="move",ai.container[0].style.cursor="-webkit-grab",ai.container[0].style.cursor="-moz-grab",ai.container[0].style.cursor="grab"),ai.imagesToLoad=[],ai.imagesLoaded=0,ai.loadImage=function(v,o,k,p,l){function u(){l&&l()}var m;v.complete&&p?u():o?(m=new window.Image,m.onload=u,m.onerror=u,k&&(m.srcset=k),o&&(m.src=o)):u()},ai.preloadImages=function(){function k(){"undefined"!=typeof ai&&null!==ai&&(void 0!==ai.imagesLoaded&&ai.imagesLoaded++,ai.imagesLoaded===ai.imagesToLoad.length&&(ai.params.updateOnImagesReady&&ai.update(),ai.emit("onImagesReady",ai)))}ai.imagesToLoad=ai.container.find("img");for(var i=0;i<ai.imagesToLoad.length;i++){ai.loadImage(ai.imagesToLoad[i],ai.imagesToLoad[i].currentSrc||ai.imagesToLoad[i].getAttribute("src"),ai.imagesToLoad[i].srcset||ai.imagesToLoad[i].getAttribute("srcset"),!0,k)}},ai.autoplayTimeoutId=void 0,ai.autoplaying=!1,ai.autoplayPaused=!1,ai.startAutoplay=function(){return"undefined"!=typeof ai.autoplayTimeoutId?!1:ai.params.autoplay?ai.autoplaying?!1:(ai.autoplaying=!0,ai.emit("onAutoplayStart",ai),void ag()):!1},ai.stopAutoplay=function(i){ai.autoplayTimeoutId&&(ai.autoplayTimeoutId&&clearTimeout(ai.autoplayTimeoutId),ai.autoplaying=!1,ai.autoplayTimeoutId=void 0,ai.emit("onAutoplayStop",ai))},ai.pauseAutoplay=function(i){ai.autoplayPaused||(ai.autoplayTimeoutId&&clearTimeout(ai.autoplayTimeoutId),ai.autoplayPaused=!0,0===i?(ai.autoplayPaused=!1,ag()):ai.wrapper.transitionEnd(function(){ai&&(ai.autoplayPaused=!1,ai.autoplaying?ag():ai.stopAutoplay())}))},ai.minTranslate=function(){return -ai.snapGrid[0]},ai.maxTranslate=function(){return -ai.snapGrid[ai.snapGrid.length-1]},ai.updateAutoHeight=function(){var k=ai.slides.eq(ai.activeIndex)[0];if("undefined"!=typeof k){var i=k.offsetHeight;i&&ai.wrapper.css("height",i+"px")}},ai.updateContainerSize=function(){var k,i;k="undefined"!=typeof ai.params.width?ai.params.width:ai.container[0].clientWidth,i="undefined"!=typeof ai.params.height?ai.params.height:ai.container[0].clientHeight,0===k&&ai.isHorizontal()||0===i&&!ai.isHorizontal()||(k=k-parseInt(ai.container.css("padding-left"),10)-parseInt(ai.container.css("padding-right"),10),i=i-parseInt(ai.container.css("padding-top"),10)-parseInt(ai.container.css("padding-bottom"),10),ai.width=k,ai.height=i,ai.size=ai.isHorizontal()?ai.width:ai.height)},ai.updateSlidesSize=function(){ai.slides=ai.wrapper.children("."+ai.params.slideClass),ai.snapGrid=[],ai.slidesGrid=[],ai.slidesSizesGrid=[];var H,D=ai.params.spaceBetween,v=-ai.params.slidesOffsetBefore,s=0,y=0;if("undefined"!=typeof ai.size){"string"==typeof D&&D.indexOf("%")>=0&&(D=parseFloat(D.replace("%",""))/100*ai.size),ai.virtualSize=-D,ai.rtl?ai.slides.css({marginLeft:"",marginTop:""}):ai.slides.css({marginRight:"",marginBottom:""});var B;ai.params.slidesPerColumn>1&&(B=Math.floor(ai.slides.length/ai.params.slidesPerColumn)===ai.slides.length/ai.params.slidesPerColumn?ai.slides.length:Math.ceil(ai.slides.length/ai.params.slidesPerColumn)*ai.params.slidesPerColumn,"auto"!==ai.params.slidesPerView&&"row"===ai.params.slidesPerColumnFill&&(B=Math.max(B,ai.params.slidesPerView*ai.params.slidesPerColumn)));var C,z=ai.params.slidesPerColumn,k=B/z,G=k-(ai.params.slidesPerColumn*k-ai.slides.length);for(H=0;H<ai.slides.length;H++){C=0;var w=ai.slides.eq(H);if(ai.params.slidesPerColumn>1){var E,A,x;"column"===ai.params.slidesPerColumnFill?(A=Math.floor(H/z),x=H-A*z,(A>G||A===G&&x===z-1)&&++x>=z&&(x=0,A++),E=A+x*B/z,w.css({"-webkit-box-ordinal-group":E,"-moz-box-ordinal-group":E,"-ms-flex-order":E,"-webkit-order":E,order:E})):(x=Math.floor(H/k),A=H-x*k),w.css({"margin-top":0!==x&&ai.params.spaceBetween&&ai.params.spaceBetween+"px"}).attr("data-swiper-column",A).attr("data-swiper-row",x)}"none"!==w.css("display")&&("auto"===ai.params.slidesPerView?(C=ai.isHorizontal()?w.outerWidth(!0):w.outerHeight(!0),ai.params.roundLengths&&(C=X(C))):(C=(ai.size-(ai.params.slidesPerView-1)*D)/ai.params.slidesPerView,ai.params.roundLengths&&(C=X(C)),ai.isHorizontal()?ai.slides[H].style.width=C+"px":ai.slides[H].style.height=C+"px"),ai.slides[H].swiperSlideSize=C,ai.slidesSizesGrid.push(C),ai.params.centeredSlides?(v=v+C/2+s/2+D,0===H&&(v=v-ai.size/2-D),Math.abs(v)<0.001&&(v=0),y%ai.params.slidesPerGroup===0&&ai.snapGrid.push(v),ai.slidesGrid.push(v)):(y%ai.params.slidesPerGroup===0&&ai.snapGrid.push(v),ai.slidesGrid.push(v),v=v+C+D),ai.virtualSize+=C+D,s=C,y++)}ai.virtualSize=Math.max(ai.virtualSize,ai.size)+ai.params.slidesOffsetAfter;var I;if(ai.rtl&&ai.wrongRTL&&("slide"===ai.params.effect||"coverflow"===ai.params.effect)&&ai.wrapper.css({width:ai.virtualSize+ai.params.spaceBetween+"px"}),(!ai.support.flexbox||ai.params.setWrapperSize)&&(ai.isHorizontal()?ai.wrapper.css({width:ai.virtualSize+ai.params.spaceBetween+"px"}):ai.wrapper.css({height:ai.virtualSize+ai.params.spaceBetween+"px"})),ai.params.slidesPerColumn>1&&(ai.virtualSize=(C+ai.params.spaceBetween)*B,ai.virtualSize=Math.ceil(ai.virtualSize/ai.params.slidesPerColumn)-ai.params.spaceBetween,ai.wrapper.css({width:ai.virtualSize+ai.params.spaceBetween+"px"}),ai.params.centeredSlides)){for(I=[],H=0;H<ai.snapGrid.length;H++){ai.snapGrid[H]<ai.virtualSize+ai.snapGrid[0]&&I.push(ai.snapGrid[H])}ai.snapGrid=I}if(!ai.params.centeredSlides){for(I=[],H=0;H<ai.snapGrid.length;H++){ai.snapGrid[H]<=ai.virtualSize-ai.size&&I.push(ai.snapGrid[H])}ai.snapGrid=I,Math.floor(ai.virtualSize-ai.size)-Math.floor(ai.snapGrid[ai.snapGrid.length-1])>1&&ai.snapGrid.push(ai.virtualSize-ai.size)}0===ai.snapGrid.length&&(ai.snapGrid=[0]),0!==ai.params.spaceBetween&&(ai.isHorizontal()?ai.rtl?ai.slides.css({marginLeft:D+"px"}):ai.slides.css({marginRight:D+"px"}):ai.slides.css({marginBottom:D+"px"})),ai.params.watchSlidesProgress&&ai.updateSlidesOffset()}},ai.updateSlidesOffset=function(){for(var i=0;i<ai.slides.length;i++){ai.slides[i].swiperSlideOffset=ai.isHorizontal()?ai.slides[i].offsetLeft:ai.slides[i].offsetTop}},ai.updateSlidesProgress=function(x){if("undefined"==typeof x&&(x=ai.translate||0),0!==ai.slides.length){"undefined"==typeof ai.slides[0].swiperSlideOffset&&ai.updateSlidesOffset();var u=-x;ai.rtl&&(u=x),ai.slides.removeClass(ai.params.slideVisibleClass);for(var k=0;k<ai.slides.length;k++){var v=ai.slides[k],l=(u-v.swiperSlideOffset)/(v.swiperSlideSize+ai.params.spaceBetween);if(ai.params.watchSlidesVisibility){var w=-(u-v.swiperSlideOffset),m=w+ai.slidesSizesGrid[k],p=w>=0&&w<ai.size||m>0&&m<=ai.size||0>=w&&m>=ai.size;p&&ai.slides.eq(k).addClass(ai.params.slideVisibleClass)}v.progress=ai.rtl?-l:l}}},ai.updateProgress=function(m){"undefined"==typeof m&&(m=ai.translate||0);var k=ai.maxTranslate()-ai.minTranslate(),l=ai.isBeginning,i=ai.isEnd;0===k?(ai.progress=0,ai.isBeginning=ai.isEnd=!0):(ai.progress=(m-ai.minTranslate())/k,ai.isBeginning=ai.progress<=0,ai.isEnd=ai.progress>=1),ai.isBeginning&&!l&&ai.emit("onReachBeginning",ai),ai.isEnd&&!i&&ai.emit("onReachEnd",ai),ai.params.watchSlidesProgress&&ai.updateSlidesProgress(m),ai.emit("onProgress",ai,ai.progress)},ai.updateActiveIndex=function(){var m,k,l,i=ai.rtl?ai.translate:-ai.translate;for(k=0;k<ai.slidesGrid.length;k++){"undefined"!=typeof ai.slidesGrid[k+1]?i>=ai.slidesGrid[k]&&i<ai.slidesGrid[k+1]-(ai.slidesGrid[k+1]-ai.slidesGrid[k])/2?m=k:i>=ai.slidesGrid[k]&&i<ai.slidesGrid[k+1]&&(m=k+1):i>=ai.slidesGrid[k]&&(m=k)}(0>m||"undefined"==typeof m)&&(m=0),l=Math.floor(m/ai.params.slidesPerGroup),l>=ai.snapGrid.length&&(l=ai.snapGrid.length-1),m!==ai.activeIndex&&(ai.snapIndex=l,ai.previousIndex=ai.activeIndex,ai.activeIndex=m,ai.updateClasses())},ai.updateClasses=function(){ai.slides.removeClass(ai.params.slideActiveClass+" "+ai.params.slideNextClass+" "+ai.params.slidePrevClass);var y=ai.slides.eq(ai.activeIndex);y.addClass(ai.params.slideActiveClass);var k=y.next("."+ai.params.slideClass).addClass(ai.params.slideNextClass);ai.params.loop&&0===k.length&&ai.slides.eq(0).addClass(ai.params.slideNextClass);var w=y.prev("."+ai.params.slideClass).addClass(ai.params.slidePrevClass);if(ai.params.loop&&0===w.length&&ai.slides.eq(-1).addClass(ai.params.slidePrevClass),ai.paginationContainer&&ai.paginationContainer.length>0){var m,x=ai.params.loop?Math.ceil((ai.slides.length-2*ai.loopedSlides)/ai.params.slidesPerGroup):ai.snapGrid.length;if(ai.params.loop?(m=Math.ceil((ai.activeIndex-ai.loopedSlides)/ai.params.slidesPerGroup),m>ai.slides.length-1-2*ai.loopedSlides&&(m-=ai.slides.length-2*ai.loopedSlides),m>x-1&&(m-=x),0>m&&"bullets"!==ai.params.paginationType&&(m=x+m)):m="undefined"!=typeof ai.snapIndex?ai.snapIndex:ai.activeIndex||0,"bullets"===ai.params.paginationType&&ai.bullets&&ai.bullets.length>0&&(ai.bullets.removeClass(ai.params.bulletActiveClass),ai.paginationContainer.length>1?ai.bullets.each(function(){f(this).index()===m&&f(this).addClass(ai.params.bulletActiveClass)}):ai.bullets.eq(m).addClass(ai.params.bulletActiveClass)),"fraction"===ai.params.paginationType&&(ai.paginationContainer.find("."+ai.params.paginationCurrentClass).text(m+1),ai.paginationContainer.find("."+ai.params.paginationTotalClass).text(x)),"progress"===ai.params.paginationType){var u=(m+1)/x,v=u,p=1;ai.isHorizontal()||(p=u,v=1),ai.paginationContainer.find("."+ai.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+v+") scaleY("+p+")").transition(ai.params.speed)}"custom"===ai.params.paginationType&&ai.params.paginationCustomRender&&(ai.paginationContainer.html(ai.params.paginationCustomRender(ai,m+1,x)),ai.emit("onPaginationRendered",ai,ai.paginationContainer[0]))}ai.params.loop||(ai.params.prevButton&&ai.prevButton&&ai.prevButton.length>0&&(ai.isBeginning?(ai.prevButton.addClass(ai.params.buttonDisabledClass),ai.params.a11y&&ai.a11y&&ai.a11y.disable(ai.prevButton)):(ai.prevButton.removeClass(ai.params.buttonDisabledClass),ai.params.a11y&&ai.a11y&&ai.a11y.enable(ai.prevButton))),ai.params.nextButton&&ai.nextButton&&ai.nextButton.length>0&&(ai.isEnd?(ai.nextButton.addClass(ai.params.buttonDisabledClass),ai.params.a11y&&ai.a11y&&ai.a11y.disable(ai.nextButton)):(ai.nextButton.removeClass(ai.params.buttonDisabledClass),ai.params.a11y&&ai.a11y&&ai.a11y.enable(ai.nextButton))))},ai.updatePagination=function(){if(ai.params.pagination&&ai.paginationContainer&&ai.paginationContainer.length>0){var l="";if("bullets"===ai.params.paginationType){for(var i=ai.params.loop?Math.ceil((ai.slides.length-2*ai.loopedSlides)/ai.params.slidesPerGroup):ai.snapGrid.length,k=0;i>k;k++){l+=ai.params.paginationBulletRender?ai.params.paginationBulletRender(k,ai.params.bulletClass):"<"+ai.params.paginationElement+' class="'+ai.params.bulletClass+'"></'+ai.params.paginationElement+">"}ai.paginationContainer.html(l),ai.bullets=ai.paginationContainer.find("."+ai.params.bulletClass),ai.params.paginationClickable&&ai.params.a11y&&ai.a11y&&ai.a11y.initPagination()}"fraction"===ai.params.paginationType&&(l=ai.params.paginationFractionRender?ai.params.paginationFractionRender(ai,ai.params.paginationCurrentClass,ai.params.paginationTotalClass):'<span class="'+ai.params.paginationCurrentClass+'"></span> / <span class="'+ai.params.paginationTotalClass+'"></span>',ai.paginationContainer.html(l)),"progress"===ai.params.paginationType&&(l=ai.params.paginationProgressRender?ai.params.paginationProgressRender(ai,ai.params.paginationProgressbarClass):'<span class="'+ai.params.paginationProgressbarClass+'"></span>',ai.paginationContainer.html(l)),"custom"!==ai.params.paginationType&&ai.emit("onPaginationRendered",ai,ai.paginationContainer[0])}},ai.update=function(m){function k(){i=Math.min(Math.max(ai.translate,ai.maxTranslate()),ai.minTranslate()),ai.setWrapperTranslate(i),ai.updateActiveIndex(),ai.updateClasses()}if(ai.updateContainerSize(),ai.updateSlidesSize(),ai.updateProgress(),ai.updatePagination(),ai.updateClasses(),ai.params.scrollbar&&ai.scrollbar&&ai.scrollbar.set(),m){var l,i;ai.controller&&ai.controller.spline&&(ai.controller.spline=void 0),ai.params.freeMode?(k(),ai.params.autoHeight&&ai.updateAutoHeight()):(l=("auto"===ai.params.slidesPerView||ai.params.slidesPerView>1)&&ai.isEnd&&!ai.params.centeredSlides?ai.slideTo(ai.slides.length-1,0,!1,!0):ai.slideTo(ai.activeIndex,0,!1,!0),l||k())}else{ai.params.autoHeight&&ai.updateAutoHeight()}},ai.onResize=function(o){ai.params.breakpoints&&ai.setBreakpoint();var l=ai.params.allowSwipeToPrev,m=ai.params.allowSwipeToNext;ai.params.allowSwipeToPrev=ai.params.allowSwipeToNext=!0,ai.updateContainerSize(),ai.updateSlidesSize(),("auto"===ai.params.slidesPerView||ai.params.freeMode||o)&&ai.updatePagination(),ai.params.scrollbar&&ai.scrollbar&&ai.scrollbar.set(),ai.controller&&ai.controller.spline&&(ai.controller.spline=void 0);var k=!1;if(ai.params.freeMode){var n=Math.min(Math.max(ai.translate,ai.maxTranslate()),ai.minTranslate());ai.setWrapperTranslate(n),ai.updateActiveIndex(),ai.updateClasses(),ai.params.autoHeight&&ai.updateAutoHeight()}else{ai.updateClasses(),k=("auto"===ai.params.slidesPerView||ai.params.slidesPerView>1)&&ai.isEnd&&!ai.params.centeredSlides?ai.slideTo(ai.slides.length-1,0,!1,!0):ai.slideTo(ai.activeIndex,0,!1,!0)}ai.params.lazyLoading&&!k&&ai.lazy&&ai.lazy.load(),ai.params.allowSwipeToPrev=l,ai.params.allowSwipeToNext=m};var ar=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?ar=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(ar=["MSPointerDown","MSPointerMove","MSPointerUp"]),ai.touchEvents={start:ai.support.touch||!ai.params.simulateTouch?"touchstart":ar[0],move:ai.support.touch||!ai.params.simulateTouch?"touchmove":ar[1],end:ai.support.touch||!ai.params.simulateTouch?"touchend":ar[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===ai.params.touchEventsTarget?ai.container:ai.wrapper).addClass("swiper-wp8-"+ai.params.direction),ai.initEvents=function(p){var l=p?"off":"on",i=p?"removeEventListener":"addEventListener",m="container"===ai.params.touchEventsTarget?ai.container[0]:ai.wrapper[0],o=ai.support.touch?m:document,k=ai.params.nested?!0:!1;ai.browser.ie?(m[i](ai.touchEvents.start,ai.onTouchStart,!1),o[i](ai.touchEvents.move,ai.onTouchMove,k),o[i](ai.touchEvents.end,ai.onTouchEnd,!1)):(ai.support.touch&&(m[i](ai.touchEvents.start,ai.onTouchStart,!1),m[i](ai.touchEvents.move,ai.onTouchMove,k),m[i](ai.touchEvents.end,ai.onTouchEnd,!1)),!ac.simulateTouch||ai.device.ios||ai.device.android||(m[i]("mousedown",ai.onTouchStart,!1),document[i]("mousemove",ai.onTouchMove,k),document[i]("mouseup",ai.onTouchEnd,!1))),window[i]("resize",ai.onResize),ai.params.nextButton&&ai.nextButton&&ai.nextButton.length>0&&(ai.nextButton[l]("click",ai.onClickNext),ai.params.a11y&&ai.a11y&&ai.nextButton[l]("keydown",ai.a11y.onEnterKey)),ai.params.prevButton&&ai.prevButton&&ai.prevButton.length>0&&(ai.prevButton[l]("click",ai.onClickPrev),ai.params.a11y&&ai.a11y&&ai.prevButton[l]("keydown",ai.a11y.onEnterKey)),ai.params.pagination&&ai.params.paginationClickable&&(ai.paginationContainer[l]("click","."+ai.params.bulletClass,ai.onClickIndex),ai.params.a11y&&ai.a11y&&ai.paginationContainer[l]("keydown","."+ai.params.bulletClass,ai.a11y.onEnterKey)),(ai.params.preventClicks||ai.params.preventClicksPropagation)&&m[i]("click",ai.preventClicks,!0)},ai.attachEvents=function(){ai.initEvents()},ai.detachEvents=function(){ai.initEvents(!0)},ai.allowClick=!0,ai.preventClicks=function(i){ai.allowClick||(ai.params.preventClicks&&i.preventDefault(),ai.params.preventClicksPropagation&&ai.animating&&(i.stopPropagation(),i.stopImmediatePropagation()))},ai.onClickNext=function(i){i.preventDefault(),(!ai.isEnd||ai.params.loop)&&ai.slideNext()},ai.onClickPrev=function(i){i.preventDefault(),(!ai.isBeginning||ai.params.loop)&&ai.slidePrev()},ai.onClickIndex=function(i){i.preventDefault();var k=f(this).index()*ai.params.slidesPerGroup;ai.params.loop&&(k+=ai.loopedSlides),ai.slideTo(k)},ai.updateClickedSlide=function(u){var k=ah(u,"."+ai.params.slideClass),o=!1;if(k){for(var l=0;l<ai.slides.length;l++){ai.slides[l]===k&&(o=!0)}}if(!k||!o){return ai.clickedSlide=void 0,void (ai.clickedIndex=void 0)}if(ai.clickedSlide=k,ai.clickedIndex=f(k).index(),ai.params.slideToClickedSlide&&void 0!==ai.clickedIndex&&ai.clickedIndex!==ai.activeIndex){var p,m=ai.clickedIndex;if(ai.params.loop){if(ai.animating){return}p=f(ai.clickedSlide).attr("data-swiper-slide-index"),ai.params.centeredSlides?m<ai.loopedSlides-ai.params.slidesPerView/2||m>ai.slides.length-ai.loopedSlides+ai.params.slidesPerView/2?(ai.fixLoop(),m=ai.wrapper.children("."+ai.params.slideClass+'[data-swiper-slide-index="'+p+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){ai.slideTo(m)},0)):ai.slideTo(m):m>ai.slides.length-ai.params.slidesPerView?(ai.fixLoop(),m=ai.wrapper.children("."+ai.params.slideClass+'[data-swiper-slide-index="'+p+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){ai.slideTo(m)},0)):ai.slideTo(m)}else{ai.slideTo(m)}}};var aq,r,U,ax,F,ao,ad,av,aw,q,t="input, select, textarea, button",au=Date.now(),a=[];ai.animating=!1,ai.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var J,az;if(ai.onTouchStart=function(n){if(n.originalEvent&&(n=n.originalEvent),J="touchstart"===n.type,J||!("which" in n)||3!==n.which){if(ai.params.noSwiping&&ah(n,"."+ai.params.noSwipingClass)){return void (ai.allowClick=!0)}if(!ai.params.swipeHandler||ah(n,ai.params.swipeHandler)){var m=ai.touches.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,k=ai.touches.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;if(!(ai.device.ios&&ai.params.iOSEdgeSwipeDetection&&m<=ai.params.iOSEdgeSwipeThreshold)){if(aq=!0,r=!1,U=!0,F=void 0,az=void 0,ai.touches.startX=m,ai.touches.startY=k,ax=Date.now(),ai.allowClick=!0,ai.updateContainerSize(),ai.swipeDirection=void 0,ai.params.threshold>0&&(av=!1),"touchstart"!==n.type){var l=!0;f(n.target).is(t)&&(l=!1),document.activeElement&&f(document.activeElement).is(t)&&document.activeElement.blur(),l&&n.preventDefault()}ai.emit("onTouchStart",ai,n)}}}},ai.onTouchMove=function(m){if(m.originalEvent&&(m=m.originalEvent),!J||"mousemove"!==m.type){if(m.preventedByNestedSwiper){return ai.touches.startX="touchmove"===m.type?m.targetTouches[0].pageX:m.pageX,void (ai.touches.startY="touchmove"===m.type?m.targetTouches[0].pageY:m.pageY)}if(ai.params.onlyExternal){return ai.allowClick=!1,void (aq&&(ai.touches.startX=ai.touches.currentX="touchmove"===m.type?m.targetTouches[0].pageX:m.pageX,ai.touches.startY=ai.touches.currentY="touchmove"===m.type?m.targetTouches[0].pageY:m.pageY,ax=Date.now()))}if(J&&document.activeElement&&m.target===document.activeElement&&f(m.target).is(t)){return r=!0,void (ai.allowClick=!1)}if(U&&ai.emit("onTouchMove",ai,m),!(m.targetTouches&&m.targetTouches.length>1)){if(ai.touches.currentX="touchmove"===m.type?m.targetTouches[0].pageX:m.pageX,ai.touches.currentY="touchmove"===m.type?m.targetTouches[0].pageY:m.pageY,"undefined"==typeof F){var l=180*Math.atan2(Math.abs(ai.touches.currentY-ai.touches.startY),Math.abs(ai.touches.currentX-ai.touches.startX))/Math.PI;F=ai.isHorizontal()?l>ai.params.touchAngle:90-l>ai.params.touchAngle}if(F&&ai.emit("onTouchMoveOpposite",ai,m),"undefined"==typeof az&&ai.browser.ieTouch&&(ai.touches.currentX!==ai.touches.startX||ai.touches.currentY!==ai.touches.startY)&&(az=!0),aq){if(F){return void (aq=!1)}if(az||!ai.browser.ieTouch){ai.allowClick=!1,ai.emit("onSliderMove",ai,m),m.preventDefault(),ai.params.touchMoveStopPropagation&&!ai.params.nested&&m.stopPropagation(),r||(ac.loop&&ai.fixLoop(),ad=ai.getWrapperTranslate(),ai.setWrapperTransition(0),ai.animating&&ai.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),ai.params.autoplay&&ai.autoplaying&&(ai.params.autoplayDisableOnInteraction?ai.stopAutoplay():ai.pauseAutoplay()),q=!1,ai.params.grabCursor&&(ai.container[0].style.cursor="move",ai.container[0].style.cursor="-webkit-grabbing",ai.container[0].style.cursor="-moz-grabbin",ai.container[0].style.cursor="grabbing")),r=!0;var i=ai.touches.diff=ai.isHorizontal()?ai.touches.currentX-ai.touches.startX:ai.touches.currentY-ai.touches.startY;i*=ai.params.touchRatio,ai.rtl&&(i=-i),ai.swipeDirection=i>0?"prev":"next",ao=i+ad;var k=!0;if(i>0&&ao>ai.minTranslate()?(k=!1,ai.params.resistance&&(ao=ai.minTranslate()-1+Math.pow(-ai.minTranslate()+ad+i,ai.params.resistanceRatio))):0>i&&ao<ai.maxTranslate()&&(k=!1,ai.params.resistance&&(ao=ai.maxTranslate()+1-Math.pow(ai.maxTranslate()-ad-i,ai.params.resistanceRatio))),k&&(m.preventedByNestedSwiper=!0),!ai.params.allowSwipeToNext&&"next"===ai.swipeDirection&&ad>ao&&(ao=ad),!ai.params.allowSwipeToPrev&&"prev"===ai.swipeDirection&&ao>ad&&(ao=ad),ai.params.followFinger){if(ai.params.threshold>0){if(!(Math.abs(i)>ai.params.threshold||av)){return void (ao=ad)}if(!av){return av=!0,ai.touches.startX=ai.touches.currentX,ai.touches.startY=ai.touches.currentY,ao=ad,void (ai.touches.diff=ai.isHorizontal()?ai.touches.currentX-ai.touches.startX:ai.touches.currentY-ai.touches.startY)}}(ai.params.freeMode||ai.params.watchSlidesProgress)&&ai.updateActiveIndex(),ai.params.freeMode&&(0===a.length&&a.push({position:ai.touches[ai.isHorizontal()?"startX":"startY"],time:ax}),a.push({position:ai.touches[ai.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),ai.updateProgress(ao),ai.setWrapperTranslate(ao)}}}}}},ai.onTouchEnd=function(T){if(T.originalEvent&&(T=T.originalEvent),U&&ai.emit("onTouchEnd",ai,T),U=!1,aq){ai.params.grabCursor&&r&&aq&&(ai.container[0].style.cursor="move",ai.container[0].style.cursor="-webkit-grab",ai.container[0].style.cursor="-moz-grab",ai.container[0].style.cursor="grab");var D=Date.now(),B=D-ax;if(ai.allowClick&&(ai.updateClickedSlide(T),ai.emit("onTap",ai,T),300>B&&D-au>300&&(aw&&clearTimeout(aw),aw=setTimeout(function(){ai&&(ai.params.paginationHide&&ai.paginationContainer.length>0&&!f(T.target).hasClass(ai.params.bulletClass)&&ai.paginationContainer.toggleClass(ai.params.paginationHiddenClass),ai.emit("onClick",ai,T))},300)),300>B&&300>D-au&&(aw&&clearTimeout(aw),ai.emit("onDoubleTap",ai,T))),au=Date.now(),setTimeout(function(){ai&&(ai.allowClick=!0)},0),!aq||!r||!ai.swipeDirection||0===ai.touches.diff||ao===ad){return void (aq=r=!1)}aq=r=!1;var L;if(L=ai.params.followFinger?ai.rtl?ai.translate:-ai.translate:-ao,ai.params.freeMode){if(L<-ai.minTranslate()){return void ai.slideTo(ai.activeIndex)}if(L>-ai.maxTranslate()){return void (ai.slides.length<ai.snapGrid.length?ai.slideTo(ai.snapGrid.length-1):ai.slideTo(ai.slides.length-1))}if(ai.params.freeModeMomentum){if(a.length>1){var C=a.pop(),O=a.pop(),P=C.position-O.position,M=C.time-O.time;ai.velocity=P/M,ai.velocity=ai.velocity/2,Math.abs(ai.velocity)<ai.params.freeModeMinimumVelocity&&(ai.velocity=0),(M>150||(new window.Date).getTime()-C.time>300)&&(ai.velocity=0)}else{ai.velocity=0}a.length=0;var A=1000*ai.params.freeModeMomentumRatio,S=ai.velocity*A,E=ai.translate+S;ai.rtl&&(E=-E);var R,N=!1,I=20*Math.abs(ai.velocity)*ai.params.freeModeMomentumBounceRatio;if(E<ai.maxTranslate()){ai.params.freeModeMomentumBounce?(E+ai.maxTranslate()<-I&&(E=ai.maxTranslate()-I),R=ai.maxTranslate(),N=!0,q=!0):E=ai.maxTranslate()}else{if(E>ai.minTranslate()){ai.params.freeModeMomentumBounce?(E-ai.minTranslate()>I&&(E=ai.minTranslate()+I),R=ai.minTranslate(),N=!0,q=!0):E=ai.minTranslate()}else{if(ai.params.freeModeSticky){var W,aA=0;for(aA=0;aA<ai.snapGrid.length;aA+=1){if(ai.snapGrid[aA]>-E){W=aA;break}}E=Math.abs(ai.snapGrid[W]-E)<Math.abs(ai.snapGrid[W-1]-E)||"next"===ai.swipeDirection?ai.snapGrid[W]:ai.snapGrid[W-1],ai.rtl||(E=-E)}}}if(0!==ai.velocity){A=ai.rtl?Math.abs((-E-ai.translate)/ai.velocity):Math.abs((E-ai.translate)/ai.velocity)}else{if(ai.params.freeModeSticky){return void ai.slideReset()}}ai.params.freeModeMomentumBounce&&N?(ai.updateProgress(R),ai.setWrapperTransition(A),ai.setWrapperTranslate(E),ai.onTransitionStart(),ai.animating=!0,ai.wrapper.transitionEnd(function(){ai&&q&&(ai.emit("onMomentumBounce",ai),ai.setWrapperTransition(ai.params.speed),ai.setWrapperTranslate(R),ai.wrapper.transitionEnd(function(){ai&&ai.onTransitionEnd()}))})):ai.velocity?(ai.updateProgress(E),ai.setWrapperTransition(A),ai.setWrapperTranslate(E),ai.onTransitionStart(),ai.animating||(ai.animating=!0,ai.wrapper.transitionEnd(function(){ai&&ai.onTransitionEnd()}))):ai.updateProgress(E),ai.updateActiveIndex()}return void ((!ai.params.freeModeMomentum||B>=ai.params.longSwipesMs)&&(ai.updateProgress(),ai.updateActiveIndex()))}var G,H=0,z=ai.slidesSizesGrid[0];for(G=0;G<ai.slidesGrid.length;G+=ai.params.slidesPerGroup){"undefined"!=typeof ai.slidesGrid[G+ai.params.slidesPerGroup]?L>=ai.slidesGrid[G]&&L<ai.slidesGrid[G+ai.params.slidesPerGroup]&&(H=G,z=ai.slidesGrid[G+ai.params.slidesPerGroup]-ai.slidesGrid[G]):L>=ai.slidesGrid[G]&&(H=G,z=ai.slidesGrid[ai.slidesGrid.length-1]-ai.slidesGrid[ai.slidesGrid.length-2])}var k=(L-ai.slidesGrid[H])/z;if(B>ai.params.longSwipesMs){if(!ai.params.longSwipes){return void ai.slideTo(ai.activeIndex)}"next"===ai.swipeDirection&&(k>=ai.params.longSwipesRatio?ai.slideTo(H+ai.params.slidesPerGroup):ai.slideTo(H)),"prev"===ai.swipeDirection&&(k>1-ai.params.longSwipesRatio?ai.slideTo(H+ai.params.slidesPerGroup):ai.slideTo(H))}else{if(!ai.params.shortSwipes){return void ai.slideTo(ai.activeIndex)}"next"===ai.swipeDirection&&ai.slideTo(H+ai.params.slidesPerGroup),"prev"===ai.swipeDirection&&ai.slideTo(H)}}},ai._slideTo=function(k,i){return ai.slideTo(k,i,!0,!0)},ai.slideTo=function(p,m,k,n){"undefined"==typeof k&&(k=!0),"undefined"==typeof p&&(p=0),0>p&&(p=0),ai.snapIndex=Math.floor(p/ai.params.slidesPerGroup),ai.snapIndex>=ai.snapGrid.length&&(ai.snapIndex=ai.snapGrid.length-1);var l=-ai.snapGrid[ai.snapIndex];ai.params.autoplay&&ai.autoplaying&&(n||!ai.params.autoplayDisableOnInteraction?ai.pauseAutoplay(m):ai.stopAutoplay()),ai.updateProgress(l);for(var o=0;o<ai.slidesGrid.length;o++){-Math.floor(100*l)>=Math.floor(100*ai.slidesGrid[o])&&(p=o)}return !ai.params.allowSwipeToNext&&l<ai.translate&&l<ai.minTranslate()?!1:!ai.params.allowSwipeToPrev&&l>ai.translate&&l>ai.maxTranslate()&&(ai.activeIndex||0)!==p?!1:("undefined"==typeof m&&(m=ai.params.speed),ai.previousIndex=ai.activeIndex||0,ai.activeIndex=p,ai.rtl&&-l===ai.translate||!ai.rtl&&l===ai.translate?(ai.params.autoHeight&&ai.updateAutoHeight(),ai.updateClasses(),"slide"!==ai.params.effect&&ai.setWrapperTranslate(l),!1):(ai.updateClasses(),ai.onTransitionStart(k),0===m?(ai.setWrapperTranslate(l),ai.setWrapperTransition(0),ai.onTransitionEnd(k)):(ai.setWrapperTranslate(l),ai.setWrapperTransition(m),ai.animating||(ai.animating=!0,ai.wrapper.transitionEnd(function(){ai&&ai.onTransitionEnd(k)}))),!0))},ai.onTransitionStart=function(i){"undefined"==typeof i&&(i=!0),ai.params.autoHeight&&ai.updateAutoHeight(),ai.lazy&&ai.lazy.onTransitionStart(),i&&(ai.emit("onTransitionStart",ai),ai.activeIndex!==ai.previousIndex&&(ai.emit("onSlideChangeStart",ai),ai.activeIndex>ai.previousIndex?ai.emit("onSlideNextStart",ai):ai.emit("onSlidePrevStart",ai)))},ai.onTransitionEnd=function(i){ai.animating=!1,ai.setWrapperTransition(0),"undefined"==typeof i&&(i=!0),ai.lazy&&ai.lazy.onTransitionEnd(),i&&(ai.emit("onTransitionEnd",ai),ai.activeIndex!==ai.previousIndex&&(ai.emit("onSlideChangeEnd",ai),ai.activeIndex>ai.previousIndex?ai.emit("onSlideNextEnd",ai):ai.emit("onSlidePrevEnd",ai))),ai.params.hashnav&&ai.hashnav&&ai.hashnav.setHash()},ai.slideNext=function(l,i,k){if(ai.params.loop){if(ai.animating){return !1}ai.fixLoop();ai.container[0].clientLeft;return ai.slideTo(ai.activeIndex+ai.params.slidesPerGroup,i,l,k)}return ai.slideTo(ai.activeIndex+ai.params.slidesPerGroup,i,l,k)},ai._slideNext=function(i){return ai.slideNext(!0,i,!0)},ai.slidePrev=function(l,i,k){if(ai.params.loop){if(ai.animating){return !1}ai.fixLoop();ai.container[0].clientLeft;return ai.slideTo(ai.activeIndex-1,i,l,k)}return ai.slideTo(ai.activeIndex-1,i,l,k)},ai._slidePrev=function(i){return ai.slidePrev(!0,i,!0)},ai.slideReset=function(l,i,k){return ai.slideTo(ai.activeIndex,i,l)},ai.setWrapperTransition=function(k,i){ai.wrapper.transition(k),"slide"!==ai.params.effect&&ai.effects[ai.params.effect]&&ai.effects[ai.params.effect].setTransition(k),ai.params.parallax&&ai.parallax&&ai.parallax.setTransition(k),ai.params.scrollbar&&ai.scrollbar&&ai.scrollbar.setTransition(k),ai.params.control&&ai.controller&&ai.controller.setTransition(k,i),ai.emit("onSetTransition",ai,k)},ai.setWrapperTranslate=function(x,v,k){var w=0,m=0,s=0;ai.isHorizontal()?w=ai.rtl?-x:x:m=x,ai.params.roundLengths&&(w=X(w),m=X(m)),ai.params.virtualTranslate||(ai.support.transforms3d?ai.wrapper.transform("translate3d("+w+"px, "+m+"px, "+s+"px)"):ai.wrapper.transform("translate("+w+"px, "+m+"px)")),ai.translate=ai.isHorizontal()?w:m;var u,p=ai.maxTranslate()-ai.minTranslate();u=0===p?0:(x-ai.minTranslate())/p,u!==ai.progress&&ai.updateProgress(x),v&&ai.updateActiveIndex(),"slide"!==ai.params.effect&&ai.effects[ai.params.effect]&&ai.effects[ai.params.effect].setTranslate(ai.translate),ai.params.parallax&&ai.parallax&&ai.parallax.setTranslate(ai.translate),ai.params.scrollbar&&ai.scrollbar&&ai.scrollbar.setTranslate(ai.translate),ai.params.control&&ai.controller&&ai.controller.setTranslate(ai.translate,k),ai.emit("onSetTranslate",ai,ai.translate)},ai.getTranslate=function(p,m){var k,n,l,o;return"undefined"==typeof m&&(m="x"),ai.params.virtualTranslate?ai.rtl?-ai.translate:ai.translate:(l=window.getComputedStyle(p,null),window.WebKitCSSMatrix?(n=l.transform||l.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(function(i){return i.replace(",",".")}).join(", ")),o=new window.WebKitCSSMatrix("none"===n?"":n)):(o=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),k=o.toString().split(",")),"x"===m&&(n=window.WebKitCSSMatrix?o.m41:16===k.length?parseFloat(k[12]):parseFloat(k[4])),"y"===m&&(n=window.WebKitCSSMatrix?o.m42:16===k.length?parseFloat(k[13]):parseFloat(k[5])),ai.rtl&&n&&(n=-n),n||0)},ai.getWrapperTranslate=function(i){return"undefined"==typeof i&&(i=ai.isHorizontal()?"x":"y"),ai.getTranslate(ai.wrapper[0],i)},ai.observers=[],ai.initObservers=function(){if(ai.params.observeParents){for(var k=ai.container.parents(),i=0;i<k.length;i++){ae(k[i])}}ae(ai.container[0],{childList:!1}),ae(ai.wrapper[0],{attributes:!1})},ai.disconnectObservers=function(){for(var i=0;i<ai.observers.length;i++){ai.observers[i].disconnect()}ai.observers=[]},ai.createLoop=function(){ai.wrapper.children("."+ai.params.slideClass+"."+ai.params.slideDuplicateClass).remove();var n=ai.wrapper.children("."+ai.params.slideClass);"auto"!==ai.params.slidesPerView||ai.params.loopedSlides||(ai.params.loopedSlides=n.length),ai.loopedSlides=parseInt(ai.params.loopedSlides||ai.params.slidesPerView,10),ai.loopedSlides=ai.loopedSlides+ai.params.loopAdditionalSlides,ai.loopedSlides>n.length&&(ai.loopedSlides=n.length);var m,k=[],l=[];for(n.each(function(i,e){var o=f(this);i<ai.loopedSlides&&l.push(e),i<n.length&&i>=n.length-ai.loopedSlides&&k.push(e),o.attr("data-swiper-slide-index",i)}),m=0;m<l.length;m++){ai.wrapper.append(f(l[m].cloneNode(!0)).addClass(ai.params.slideDuplicateClass))}for(m=k.length-1;m>=0;m--){ai.wrapper.prepend(f(k[m].cloneNode(!0)).addClass(ai.params.slideDuplicateClass))}},ai.destroyLoop=function(){ai.wrapper.children("."+ai.params.slideClass+"."+ai.params.slideDuplicateClass).remove(),ai.slides.removeAttr("data-swiper-slide-index")},ai.reLoop=function(k){var i=ai.activeIndex-ai.loopedSlides;ai.destroyLoop(),ai.createLoop(),ai.updateSlidesSize(),k&&ai.slideTo(i+ai.loopedSlides,0,!1)},ai.fixLoop=function(){var i;ai.activeIndex<ai.loopedSlides?(i=ai.slides.length-3*ai.loopedSlides+ai.activeIndex,i+=ai.loopedSlides,ai.slideTo(i,0,!1,!0)):("auto"===ai.params.slidesPerView&&ai.activeIndex>=2*ai.loopedSlides||ai.activeIndex>ai.slides.length-2*ai.params.slidesPerView)&&(i=-ai.slides.length+ai.activeIndex+ai.loopedSlides,i+=ai.loopedSlides,ai.slideTo(i,0,!1,!0))},ai.appendSlide=function(k){if(ai.params.loop&&ai.destroyLoop(),"object"==typeof k&&k.length){for(var i=0;i<k.length;i++){k[i]&&ai.wrapper.append(k[i])}}else{ai.wrapper.append(k)}ai.params.loop&&ai.createLoop(),ai.params.observer&&ai.support.observer||ai.update(!0)},ai.prependSlide=function(l){ai.params.loop&&ai.destroyLoop();var i=ai.activeIndex+1;if("object"==typeof l&&l.length){for(var k=0;k<l.length;k++){l[k]&&ai.wrapper.prepend(l[k])}i=ai.activeIndex+l.length}else{ai.wrapper.prepend(l)}ai.params.loop&&ai.createLoop(),ai.params.observer&&ai.support.observer||ai.update(!0),ai.slideTo(i,0,!1)},ai.removeSlide=function(m){ai.params.loop&&(ai.destroyLoop(),ai.slides=ai.wrapper.children("."+ai.params.slideClass));var k,l=ai.activeIndex;if("object"==typeof m&&m.length){for(var i=0;i<m.length;i++){k=m[i],ai.slides[k]&&ai.slides.eq(k).remove(),l>k&&l--}l=Math.max(l,0)}else{k=m,ai.slides[k]&&ai.slides.eq(k).remove(),l>k&&l--,l=Math.max(l,0)}ai.params.loop&&ai.createLoop(),ai.params.observer&&ai.support.observer||ai.update(!0),ai.params.loop?ai.slideTo(l+ai.loopedSlides,0,!1):ai.slideTo(l,0,!1)},ai.removeAllSlides=function(){for(var k=[],i=0;i<ai.slides.length;i++){k.push(i)}ai.removeSlide(k)},ai.effects={fade:{setTranslate:function(){for(var p=0;p<ai.slides.length;p++){var m=ai.slides.eq(p),k=m[0].swiperSlideOffset,n=-k;ai.params.virtualTranslate||(n-=ai.translate);var l=0;ai.isHorizontal()||(l=n,n=0);var o=ai.params.fade.crossFade?Math.max(1-Math.abs(m[0].progress),0):1+Math.min(Math.max(m[0].progress,-1),0);m.css({opacity:o}).transform("translate3d("+n+"px, "+l+"px, 0px)")}},setTransition:function(k){if(ai.slides.transition(k),ai.params.virtualTranslate&&0!==k){var i=!1;ai.slides.transitionEnd(function(){if(!i&&ai){i=!0,ai.animating=!1;for(var l=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],m=0;m<l.length;m++){ai.wrapper.trigger(l[m])}}})}}},flip:{setTranslate:function(){for(var B=0;B<ai.slides.length;B++){var k=ai.slides.eq(B),z=k[0].progress;ai.params.flip.limitRotation&&(z=Math.max(Math.min(k[0].progress,1),-1));var m=k[0].swiperSlideOffset,A=-180*z,w=A,x=0,v=-m,y=0;if(ai.isHorizontal()?ai.rtl&&(w=-w):(y=v,v=0,x=-w,w=0),k[0].style.zIndex=-Math.abs(Math.round(z))+ai.slides.length,ai.params.flip.slideShadows){var D=ai.isHorizontal()?k.find(".swiper-slide-shadow-left"):k.find(".swiper-slide-shadow-top"),C=ai.isHorizontal()?k.find(".swiper-slide-shadow-right"):k.find(".swiper-slide-shadow-bottom");0===D.length&&(D=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"left":"top")+'"></div>'),k.append(D)),0===C.length&&(C=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"right":"bottom")+'"></div>'),k.append(C)),D.length&&(D[0].style.opacity=Math.max(-z,0)),C.length&&(C[0].style.opacity=Math.max(z,0))}k.transform("translate3d("+v+"px, "+y+"px, 0px) rotateX("+x+"deg) rotateY("+w+"deg)")}},setTransition:function(i){if(ai.slides.transition(i).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(i),ai.params.virtualTranslate&&0!==i){var k=!1;ai.slides.eq(ai.activeIndex).transitionEnd(function(){if(!k&&ai&&f(this).hasClass(ai.params.slideActiveClass)){k=!0,ai.animating=!1;for(var m=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],l=0;l<m.length;l++){ai.wrapper.trigger(m[l])}}})}}},cube:{setTranslate:function(){var R,B=0;ai.params.cube.shadow&&(ai.isHorizontal()?(R=ai.wrapper.find(".swiper-cube-shadow"),0===R.length&&(R=f('<div class="swiper-cube-shadow"></div>'),ai.wrapper.append(R)),R.css({height:ai.width+"px"})):(R=ai.container.find(".swiper-cube-shadow"),0===R.length&&(R=f('<div class="swiper-cube-shadow"></div>'),ai.container.append(R))));for(var z=0;z<ai.slides.length;z++){var H=ai.slides.eq(z),A=90*z,M=Math.floor(A/360);ai.rtl&&(A=-A,M=Math.floor(-A/360));var N=Math.max(Math.min(H[0].progress,1),-1),I=0,x=0,P=0;z%4===0?(I=4*-M*ai.size,P=0):(z-1)%4===0?(I=0,P=4*-M*ai.size):(z-2)%4===0?(I=ai.size+4*M*ai.size,P=ai.size):(z-3)%4===0&&(I=-ai.size,P=3*ai.size+4*ai.size*M),ai.rtl&&(I=-I),ai.isHorizontal()||(x=I,I=0);var C="rotateX("+(ai.isHorizontal()?0:-A)+"deg) rotateY("+(ai.isHorizontal()?A:0)+"deg) translate3d("+I+"px, "+x+"px, "+P+"px)";if(1>=N&&N>-1&&(B=90*z+90*N,ai.rtl&&(B=90*-z-90*N)),H.transform(C),ai.params.cube.slideShadows){var O=ai.isHorizontal()?H.find(".swiper-slide-shadow-left"):H.find(".swiper-slide-shadow-top"),L=ai.isHorizontal()?H.find(".swiper-slide-shadow-right"):H.find(".swiper-slide-shadow-bottom");0===O.length&&(O=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"left":"top")+'"></div>'),H.append(O)),0===L.length&&(L=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"right":"bottom")+'"></div>'),H.append(L)),O.length&&(O[0].style.opacity=Math.max(-N,0)),L.length&&(L[0].style.opacity=Math.max(N,0))}}if(ai.wrapper.css({"-webkit-transform-origin":"50% 50% -"+ai.size/2+"px","-moz-transform-origin":"50% 50% -"+ai.size/2+"px","-ms-transform-origin":"50% 50% -"+ai.size/2+"px","transform-origin":"50% 50% -"+ai.size/2+"px"}),ai.params.cube.shadow){if(ai.isHorizontal()){R.transform("translate3d(0px, "+(ai.width/2+ai.params.cube.shadowOffset)+"px, "+-ai.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+ai.params.cube.shadowScale+")")}else{var G=Math.abs(B)-90*Math.floor(Math.abs(B)/90),S=1.5-(Math.sin(2*G*Math.PI/360)/2+Math.cos(2*G*Math.PI/360)/2),T=ai.params.cube.shadowScale,D=ai.params.cube.shadowScale/S,E=ai.params.cube.shadowOffset;R.transform("scale3d("+T+", 1, "+D+") translate3d(0px, "+(ai.height/2+E)+"px, "+-ai.height/2/D+"px) rotateX(-90deg)")}}var k=ai.isSafari||ai.isUiWebView?-ai.size/2:0;ai.wrapper.transform("translate3d(0px,0,"+k+"px) rotateX("+(ai.isHorizontal()?0:B)+"deg) rotateY("+(ai.isHorizontal()?-B:0)+"deg)")},setTransition:function(i){ai.slides.transition(i).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(i),ai.params.cube.shadow&&!ai.isHorizontal()&&ai.container.find(".swiper-cube-shadow").transition(i)}},coverflow:{setTranslate:function(){for(var R=ai.translate,B=ai.isHorizontal()?-R+ai.width/2:-R+ai.height/2,z=ai.isHorizontal()?ai.params.coverflow.rotate:-ai.params.coverflow.rotate,H=ai.params.coverflow.depth,A=0,M=ai.slides.length;M>A;A++){var N=ai.slides.eq(A),I=ai.slidesSizesGrid[A],x=N[0].swiperSlideOffset,P=(B-x-I/2)/I*ai.params.coverflow.modifier,C=ai.isHorizontal()?z*P:0,O=ai.isHorizontal()?0:z*P,L=-H*Math.abs(P),G=ai.isHorizontal()?0:ai.params.coverflow.stretch*P,S=ai.isHorizontal()?ai.params.coverflow.stretch*P:0;Math.abs(S)<0.001&&(S=0),Math.abs(G)<0.001&&(G=0),Math.abs(L)<0.001&&(L=0),Math.abs(C)<0.001&&(C=0),Math.abs(O)<0.001&&(O=0);var T="translate3d("+S+"px,"+G+"px,"+L+"px)  rotateX("+O+"deg) rotateY("+C+"deg)";if(N.transform(T),N[0].style.zIndex=-Math.abs(Math.round(P))+1,ai.params.coverflow.slideShadows){var D=ai.isHorizontal()?N.find(".swiper-slide-shadow-left"):N.find(".swiper-slide-shadow-top"),E=ai.isHorizontal()?N.find(".swiper-slide-shadow-right"):N.find(".swiper-slide-shadow-bottom");0===D.length&&(D=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"left":"top")+'"></div>'),N.append(D)),0===E.length&&(E=f('<div class="swiper-slide-shadow-'+(ai.isHorizontal()?"right":"bottom")+'"></div>'),N.append(E)),D.length&&(D[0].style.opacity=P>0?P:0),E.length&&(E[0].style.opacity=-P>0?-P:0)}}if(ai.browser.ie){var k=ai.wrapper[0].style;k.perspectiveOrigin=B+"px 50%"}},setTransition:function(i){ai.slides.transition(i).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(i)}}},ai.lazy={initialImageLoaded:!1,loadImageInSlide:function(n,m){if("undefined"!=typeof n&&("undefined"==typeof m&&(m=!0),0!==ai.slides.length)){var k=ai.slides.eq(n),l=k.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!k.hasClass("swiper-lazy")||k.hasClass("swiper-lazy-loaded")||k.hasClass("swiper-lazy-loading")||(l=l.add(k[0])),0!==l.length&&l.each(function(){var v=f(this);v.addClass("swiper-lazy-loading");var o=v.attr("data-background"),p=v.attr("data-src"),u=v.attr("data-srcset");ai.loadImage(v[0],p||o,u,!1,function(){if(o?(v.css("background-image",'url("'+o+'")'),v.removeAttr("data-background")):(u&&(v.attr("srcset",u),v.removeAttr("data-srcset")),p&&(v.attr("src",p),v.removeAttr("data-src"))),v.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),k.find(".swiper-lazy-preloader, .preloader").remove(),ai.params.loop&&m){var i=k.attr("data-swiper-slide-index");if(k.hasClass(ai.params.slideDuplicateClass)){var e=ai.wrapper.children('[data-swiper-slide-index="'+i+'"]:not(.'+ai.params.slideDuplicateClass+")");ai.lazy.loadImageInSlide(e.index(),!1)}else{var s=ai.wrapper.children("."+ai.params.slideDuplicateClass+'[data-swiper-slide-index="'+i+'"]');ai.lazy.loadImageInSlide(s.index(),!1)}}ai.emit("onLazyImageReady",ai,k[0],v[0])}),ai.emit("onLazyImageLoad",ai,k[0],v[0])})}},load:function(){var w;if(ai.params.watchSlidesVisibility){ai.wrapper.children("."+ai.params.slideVisibleClass).each(function(){ai.lazy.loadImageInSlide(f(this).index())})}else{if(ai.params.slidesPerView>1){for(w=ai.activeIndex;w<ai.activeIndex+ai.params.slidesPerView;w++){ai.slides[w]&&ai.lazy.loadImageInSlide(w)}}else{ai.lazy.loadImageInSlide(ai.activeIndex)}}if(ai.params.lazyLoadingInPrevNext){if(ai.params.slidesPerView>1||ai.params.lazyLoadingInPrevNextAmount&&ai.params.lazyLoadingInPrevNextAmount>1){var k=ai.params.lazyLoadingInPrevNextAmount,u=ai.params.slidesPerView,l=Math.min(ai.activeIndex+u+Math.max(k,u),ai.slides.length),v=Math.max(ai.activeIndex-Math.max(u,k),0);for(w=ai.activeIndex+ai.params.slidesPerView;l>w;w++){ai.slides[w]&&ai.lazy.loadImageInSlide(w)}for(w=v;w<ai.activeIndex;w++){ai.slides[w]&&ai.lazy.loadImageInSlide(w)}}else{var m=ai.wrapper.children("."+ai.params.slideNextClass);m.length>0&&ai.lazy.loadImageInSlide(m.index());var p=ai.wrapper.children("."+ai.params.slidePrevClass);p.length>0&&ai.lazy.loadImageInSlide(p.index())}}},onTransitionStart:function(){ai.params.lazyLoading&&(ai.params.lazyLoadingOnTransitionStart||!ai.params.lazyLoadingOnTransitionStart&&!ai.lazy.initialImageLoaded)&&ai.lazy.load()},onTransitionEnd:function(){ai.params.lazyLoading&&!ai.params.lazyLoadingOnTransitionStart&&ai.lazy.load()}},ai.scrollbar={isTouched:!1,setDragPosition:function(p){var m=ai.scrollbar,k=ai.isHorizontal()?"touchstart"===p.type||"touchmove"===p.type?p.targetTouches[0].pageX:p.pageX||p.clientX:"touchstart"===p.type||"touchmove"===p.type?p.targetTouches[0].pageY:p.pageY||p.clientY,n=k-m.track.offset()[ai.isHorizontal()?"left":"top"]-m.dragSize/2,l=-ai.minTranslate()*m.moveDivider,o=-ai.maxTranslate()*m.moveDivider;l>n?n=l:n>o&&(n=o),n=-n/m.moveDivider,ai.updateProgress(n),ai.setWrapperTranslate(n,!0)},dragStart:function(k){var i=ai.scrollbar;i.isTouched=!0,k.preventDefault(),k.stopPropagation(),i.setDragPosition(k),clearTimeout(i.dragTimeout),i.track.transition(0),ai.params.scrollbarHide&&i.track.css("opacity",1),ai.wrapper.transition(100),i.drag.transition(100),ai.emit("onScrollbarDragStart",ai)},dragMove:function(k){var i=ai.scrollbar;i.isTouched&&(k.preventDefault?k.preventDefault():k.returnValue=!1,i.setDragPosition(k),ai.wrapper.transition(0),i.track.transition(0),i.drag.transition(0),ai.emit("onScrollbarDragMove",ai))},dragEnd:function(k){var i=ai.scrollbar;i.isTouched&&(i.isTouched=!1,ai.params.scrollbarHide&&(clearTimeout(i.dragTimeout),i.dragTimeout=setTimeout(function(){i.track.css("opacity",0),i.track.transition(400)},1000)),ai.emit("onScrollbarDragEnd",ai),ai.params.scrollbarSnapOnRelease&&ai.slideReset())},enableDraggable:function(){var i=ai.scrollbar,k=ai.support.touch?i.track:document;f(i.track).on(ai.touchEvents.start,i.dragStart),f(k).on(ai.touchEvents.move,i.dragMove),f(k).on(ai.touchEvents.end,i.dragEnd)},disableDraggable:function(){var i=ai.scrollbar,k=ai.support.touch?i.track:document;f(i.track).off(ai.touchEvents.start,i.dragStart),f(k).off(ai.touchEvents.move,i.dragMove),f(k).off(ai.touchEvents.end,i.dragEnd)},set:function(){if(ai.params.scrollbar){var i=ai.scrollbar;i.track=f(ai.params.scrollbar),ai.params.uniqueNavElements&&"string"==typeof ai.params.scrollbar&&i.track.length>1&&1===ai.container.find(ai.params.scrollbar).length&&(i.track=ai.container.find(ai.params.scrollbar)),i.drag=i.track.find(".swiper-scrollbar-drag"),0===i.drag.length&&(i.drag=f('<div class="swiper-scrollbar-drag"></div>'),i.track.append(i.drag)),i.drag[0].style.width="",i.drag[0].style.height="",i.trackSize=ai.isHorizontal()?i.track[0].offsetWidth:i.track[0].offsetHeight,i.divider=ai.size/ai.virtualSize,i.moveDivider=i.divider*(i.trackSize/ai.size),i.dragSize=i.trackSize*i.divider,ai.isHorizontal()?i.drag[0].style.width=i.dragSize+"px":i.drag[0].style.height=i.dragSize+"px",i.divider>=1?i.track[0].style.display="none":i.track[0].style.display="",ai.params.scrollbarHide&&(i.track[0].style.opacity=0)}},setTranslate:function(){if(ai.params.scrollbar){var l,i=ai.scrollbar,k=(ai.translate||0,i.dragSize);l=(i.trackSize-i.dragSize)*ai.progress,ai.rtl&&ai.isHorizontal()?(l=-l,l>0?(k=i.dragSize-l,l=0):-l+i.dragSize>i.trackSize&&(k=i.trackSize+l)):0>l?(k=i.dragSize+l,l=0):l+i.dragSize>i.trackSize&&(k=i.trackSize-l),ai.isHorizontal()?(ai.support.transforms3d?i.drag.transform("translate3d("+l+"px, 0, 0)"):i.drag.transform("translateX("+l+"px)"),i.drag[0].style.width=k+"px"):(ai.support.transforms3d?i.drag.transform("translate3d(0px, "+l+"px, 0)"):i.drag.transform("translateY("+l+"px)"),i.drag[0].style.height=k+"px"),ai.params.scrollbarHide&&(clearTimeout(i.timeout),i.track[0].style.opacity=1,i.timeout=setTimeout(function(){i.track[0].style.opacity=0,i.track.transition(400)},1000))}},setTransition:function(i){ai.params.scrollbar&&ai.scrollbar.drag.transition(i)}},ai.controller={LinearSpline:function(o,l){this.x=o,this.y=l,this.lastIndex=o.length-1;var m,k;this.x.length;this.interpolate=function(i){return i?(k=n(this.x,i),m=k-1,(i-this.x[m])*(this.y[k]-this.y[m])/(this.x[k]-this.x[m])+this.y[m]):0};var n=function(){var s,i,p;return function(e,u){for(i=-1,s=e.length;s-i>1;){e[p=s+i>>1]<=u?i=p:s=p}return s}}()},getInterpolateFunction:function(i){ai.controller.spline||(ai.controller.spline=ai.params.loop?new ai.controller.LinearSpline(ai.slidesGrid,i.slidesGrid):new ai.controller.LinearSpline(ai.snapGrid,i.snapGrid))},setTranslate:function(w,p){function u(e){w=e.rtl&&"horizontal"===e.params.direction?-ai.translate:ai.translate,"slide"===ai.params.controlBy&&(ai.controller.getInterpolateFunction(e),v=-ai.controller.spline.interpolate(-w)),v&&"container"!==ai.params.controlBy||(k=(e.maxTranslate()-e.minTranslate())/(ai.maxTranslate()-ai.minTranslate()),v=(w-ai.minTranslate())*k+e.minTranslate()),ai.params.controlInverse&&(v=e.maxTranslate()-v),e.updateProgress(v),e.setWrapperTranslate(v,!1,ai),e.updateActiveIndex()}var k,v,l=ai.params.control;if(ai.isArray(l)){for(var m=0;m<l.length;m++){l[m]!==p&&l[m] instanceof b&&u(l[m])}}else{l instanceof b&&p!==l&&u(l)}},setTransition:function(o,l){function k(e){e.setWrapperTransition(o,ai),0!==o&&(e.onTransitionStart(),e.wrapper.transitionEnd(function(){n&&(e.params.loop&&"slide"===ai.params.controlBy&&e.fixLoop(),e.onTransitionEnd())}))}var m,n=ai.params.control;if(ai.isArray(n)){for(m=0;m<n.length;m++){n[m]!==l&&n[m] instanceof b&&k(n[m])}}else{n instanceof b&&l!==n&&k(n)}}},ai.hashnav={init:function(){if(ai.params.hashnav){ai.hashnav.initialized=!0;var v=document.location.hash.replace("#","");if(v){for(var o=0,k=0,p=ai.slides.length;p>k;k++){var l=ai.slides.eq(k),u=l.attr("data-hash");if(u===v&&!l.hasClass(ai.params.slideDuplicateClass)){var m=l.index();ai.slideTo(m,o,ai.params.runCallbacksOnInit,!0)}}}}},setHash:function(){ai.hashnav.initialized&&ai.params.hashnav&&(document.location.hash=ai.slides.eq(ai.activeIndex).attr("data-hash")||"")}},ai.disableKeyboardControl=function(){ai.params.keyboardControl=!1,f(document).off("keydown",V)},ai.enableKeyboardControl=function(){ai.params.keyboardControl=!0,f(document).on("keydown",V)},ai.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},ai.params.mousewheelControl){try{new window.WheelEvent("wheel"),ai.mousewheel.event="wheel"}catch(ay){(window.WheelEvent||ai.container[0]&&"wheel" in ai.container[0])&&(ai.mousewheel.event="wheel")}!ai.mousewheel.event&&window.WheelEvent,ai.mousewheel.event||void 0===document.onmousewheel||(ai.mousewheel.event="mousewheel"),ai.mousewheel.event||(ai.mousewheel.event="DOMMouseScroll")}ai.disableMousewheelControl=function(){return ai.mousewheel.event?(ai.container.off(ai.mousewheel.event,ak),!0):!1},ai.enableMousewheelControl=function(){return ai.mousewheel.event?(ai.container.on(ai.mousewheel.event,ak),!0):!1},ai.parallax={setTranslate:function(){ai.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){Y(this,ai.progress)}),ai.slides.each(function(){var i=f(this);i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var e=Math.min(Math.max(i[0].progress,-1),1);Y(this,e)})})},setTransition:function(i){"undefined"==typeof i&&(i=ai.params.speed),ai.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var k=f(this),e=parseInt(k.attr("data-swiper-parallax-duration"),10)||i;0===i&&(e=0),k.transition(e)})}},ai._plugins=[];for(var ap in ai.plugins){var at=ai.plugins[ap](ai,ai.params[ap]);at&&ai._plugins.push(at)}return ai.callPlugins=function(k){for(var i=0;i<ai._plugins.length;i++){k in ai._plugins[i]&&ai._plugins[i][k](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}},ai.emitterEventListeners={},ai.emit=function(k){ai.params[k]&&ai.params[k](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var i;if(ai.emitterEventListeners[k]){for(i=0;i<ai.emitterEventListeners[k].length;i++){ai.emitterEventListeners[k][i](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}ai.callPlugins&&ai.callPlugins(k,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},ai.on=function(k,i){return k=aj(k),ai.emitterEventListeners[k]||(ai.emitterEventListeners[k]=[]),ai.emitterEventListeners[k].push(i),ai},ai.off=function(l,i){var k;if(l=aj(l),"undefined"==typeof i){return ai.emitterEventListeners[l]=[],ai}if(ai.emitterEventListeners[l]&&0!==ai.emitterEventListeners[l].length){for(k=0;k<ai.emitterEventListeners[l].length;k++){ai.emitterEventListeners[l][k]===i&&ai.emitterEventListeners[l].splice(k,1)}return ai}},ai.once=function(l,i){l=aj(l);var k=function(){i(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),ai.off(l,k)};return ai.on(l,k),ai},ai.a11y={makeFocusable:function(i){return i.attr("tabIndex","0"),i},addRole:function(k,i){return k.attr("role",i),k},addLabel:function(k,i){return k.attr("aria-label",i),k},disable:function(i){return i.attr("aria-disabled",!0),i},enable:function(i){return i.attr("aria-disabled",!1),i},onEnterKey:function(i){13===i.keyCode&&(f(i.target).is(ai.params.nextButton)?(ai.onClickNext(i),ai.isEnd?ai.a11y.notify(ai.params.lastSlideMessage):ai.a11y.notify(ai.params.nextSlideMessage)):f(i.target).is(ai.params.prevButton)&&(ai.onClickPrev(i),ai.isBeginning?ai.a11y.notify(ai.params.firstSlideMessage):ai.a11y.notify(ai.params.prevSlideMessage)),f(i.target).is("."+ai.params.bulletClass)&&f(i.target)[0].click())},liveRegion:f('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(k){var i=ai.a11y.liveRegion;0!==i.length&&(i.html(""),i.html(k))},init:function(){ai.params.nextButton&&ai.nextButton&&ai.nextButton.length>0&&(ai.a11y.makeFocusable(ai.nextButton),ai.a11y.addRole(ai.nextButton,"button"),ai.a11y.addLabel(ai.nextButton,ai.params.nextSlideMessage)),ai.params.prevButton&&ai.prevButton&&ai.prevButton.length>0&&(ai.a11y.makeFocusable(ai.prevButton),ai.a11y.addRole(ai.prevButton,"button"),ai.a11y.addLabel(ai.prevButton,ai.params.prevSlideMessage)),f(ai.container).append(ai.a11y.liveRegion)},initPagination:function(){ai.params.pagination&&ai.params.paginationClickable&&ai.bullets&&ai.bullets.length&&ai.bullets.each(function(){var i=f(this);ai.a11y.makeFocusable(i),ai.a11y.addRole(i,"button"),ai.a11y.addLabel(i,ai.params.paginationBulletMessage.replace(/{{index}}/,i.index()+1))})},destroy:function(){ai.a11y.liveRegion&&ai.a11y.liveRegion.length>0&&ai.a11y.liveRegion.remove()}},ai.init=function(){ai.params.loop&&ai.createLoop(),ai.updateContainerSize(),ai.updateSlidesSize(),ai.updatePagination(),ai.params.scrollbar&&ai.scrollbar&&(ai.scrollbar.set(),ai.params.scrollbarDraggable&&ai.scrollbar.enableDraggable()),"slide"!==ai.params.effect&&ai.effects[ai.params.effect]&&(ai.params.loop||ai.updateProgress(),ai.effects[ai.params.effect].setTranslate()),ai.params.loop?ai.slideTo(ai.params.initialSlide+ai.loopedSlides,0,ai.params.runCallbacksOnInit):(ai.slideTo(ai.params.initialSlide,0,ai.params.runCallbacksOnInit),0===ai.params.initialSlide&&(ai.parallax&&ai.params.parallax&&ai.parallax.setTranslate(),ai.lazy&&ai.params.lazyLoading&&(ai.lazy.load(),ai.lazy.initialImageLoaded=!0))),ai.attachEvents(),ai.params.observer&&ai.support.observer&&ai.initObservers(),ai.params.preloadImages&&!ai.params.lazyLoading&&ai.preloadImages(),ai.params.autoplay&&ai.startAutoplay(),ai.params.keyboardControl&&ai.enableKeyboardControl&&ai.enableKeyboardControl(),ai.params.mousewheelControl&&ai.enableMousewheelControl&&ai.enableMousewheelControl(),ai.params.hashnav&&ai.hashnav&&ai.hashnav.init(),ai.params.a11y&&ai.a11y&&ai.a11y.init(),ai.emit("onInit",ai)},ai.cleanupStyles=function(){ai.container.removeClass(ai.classNames.join(" ")).removeAttr("style"),ai.wrapper.removeAttr("style"),ai.slides&&ai.slides.length&&ai.slides.removeClass([ai.params.slideVisibleClass,ai.params.slideActiveClass,ai.params.slideNextClass,ai.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),ai.paginationContainer&&ai.paginationContainer.length&&ai.paginationContainer.removeClass(ai.params.paginationHiddenClass),ai.bullets&&ai.bullets.length&&ai.bullets.removeClass(ai.params.bulletActiveClass),ai.params.prevButton&&f(ai.params.prevButton).removeClass(ai.params.buttonDisabledClass),ai.params.nextButton&&f(ai.params.nextButton).removeClass(ai.params.buttonDisabledClass),ai.params.scrollbar&&ai.scrollbar&&(ai.scrollbar.track&&ai.scrollbar.track.length&&ai.scrollbar.track.removeAttr("style"),ai.scrollbar.drag&&ai.scrollbar.drag.length&&ai.scrollbar.drag.removeAttr("style"))},ai.destroy=function(k,i){ai.detachEvents(),ai.stopAutoplay(),ai.params.scrollbar&&ai.scrollbar&&ai.params.scrollbarDraggable&&ai.scrollbar.disableDraggable(),ai.params.loop&&ai.destroyLoop(),i&&ai.cleanupStyles(),ai.disconnectObservers(),ai.params.keyboardControl&&ai.disableKeyboardControl&&ai.disableKeyboardControl(),ai.params.mousewheelControl&&ai.disableMousewheelControl&&ai.disableMousewheelControl(),ai.params.a11y&&ai.a11y&&ai.a11y.destroy(),ai.emit("onDestroy"),k!==!1&&(ai=null)},ai.init(),ai}};b.prototype={isSafari:function(){var a=navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(a){return"[object Array]"===Object.prototype.toString.apply(a)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var o=navigator.userAgent,l=o.match(/(Android);?[\s\/]+([\d.]+)?/),m=o.match(/(iPad).*OS\s([\d_]+)/),k=o.match(/(iPod)(.*OS\s([\d_]+))?/),n=!m&&o.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:m||n||k,android:l}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return !!("ontouchstart" in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var a=document.createElement("div").style;return"webkitPerspective" in a||"MozPerspective" in a||"OPerspective" in a||"MsPerspective" in a||"perspective" in a}(),flexbox:function(){for(var l=document.createElement("div").style,i="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),k=0;k<i.length;k++){if(i[k] in l){return !0}}}(),observer:function(){return"MutationObserver" in window||"WebkitMutationObserver" in window}()},plugins:{}};for(var g=(function(){var k=function(n){var l=this,m=0;for(m=0;m<n.length;m++){l[m]=n[m]}return l.length=n.length,this},i=function(u,x){var v=[],e=0;if(u&&!x&&u instanceof k){return u}if(u){if("string"==typeof u){var w,p,q=u.trim();if(q.indexOf("<")>=0&&q.indexOf(">")>=0){var m="div";for(0===q.indexOf("<li")&&(m="ul"),0===q.indexOf("<tr")&&(m="tbody"),(0===q.indexOf("<td")||0===q.indexOf("<th"))&&(m="tr"),0===q.indexOf("<tbody")&&(m="table"),0===q.indexOf("<option")&&(m="select"),p=document.createElement(m),p.innerHTML=u,e=0;e<p.childNodes.length;e++){v.push(p.childNodes[e])}}else{for(w=x||"#"!==u[0]||u.match(/[ .<>:~]/)?(x||document).querySelectorAll(u):[document.getElementById(u.split("#")[1])],e=0;e<w.length;e++){w[e]&&v.push(w[e])}}}else{if(u.nodeType||u===window||u===document){v.push(u)}else{if(u.length>0&&u[0].nodeType){for(e=0;e<u.length;e++){v.push(u[e])}}}}}return new k(v)};return k.prototype={addClass:function(o){if("undefined"==typeof o){return this}for(var m=o.split(" "),n=0;n<m.length;n++){for(var l=0;l<this.length;l++){this[l].classList.add(m[n])}}return this},removeClass:function(o){for(var m=o.split(" "),n=0;n<m.length;n++){for(var l=0;l<this.length;l++){this[l].classList.remove(m[n])}}return this},hasClass:function(a){return this[0]?this[0].classList.contains(a):!1},toggleClass:function(o){for(var m=o.split(" "),n=0;n<m.length;n++){for(var l=0;l<this.length;l++){this[l].classList.toggle(m[n])}}return this},attr:function(o,m){if(1===arguments.length&&"string"==typeof o){return this[0]?this[0].getAttribute(o):void 0}for(var n=0;n<this.length;n++){if(2===arguments.length){this[n].setAttribute(o,m)}else{for(var l in o){this[n][l]=o[l],this[n].setAttribute(l,o[l])}}}return this},removeAttr:function(m){for(var l=0;l<this.length;l++){this[l].removeAttribute(m)}return this},data:function(p,m){if("undefined"!=typeof m){for(var n=0;n<this.length;n++){var l=this[n];l.dom7ElementDataStorage||(l.dom7ElementDataStorage={}),l.dom7ElementDataStorage[p]=m}return this}if(this[0]){var o=this[0].getAttribute("data-"+p);return o?o:this[0].dom7ElementDataStorage&&p in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[p]:void 0}},transform:function(n){for(var l=0;l<this.length;l++){var m=this[l].style;m.webkitTransform=m.MsTransform=m.msTransform=m.MozTransform=m.OTransform=m.transform=n}return this},transition:function(n){"string"!=typeof n&&(n+="ms");for(var l=0;l<this.length;l++){var m=this[l].style;m.webkitTransitionDuration=m.MsTransitionDuration=m.msTransitionDuration=m.MozTransitionDuration=m.OTransitionDuration=m.transitionDuration=n}return this},on:function(x,a,v,m){function w(t){var l=t.target;if(i(l).is(a)){v.call(l,t)}else{for(var o=i(l).parents(),r=0;r<o.length;r++){i(o[r]).is(a)&&v.call(o[r],t)}}}var q,u,p=x.split(" ");for(q=0;q<this.length;q++){if("function"==typeof a||a===!1){for("function"==typeof a&&(v=arguments[1],m=arguments[2]||!1),u=0;u<p.length;u++){this[q].addEventListener(p[u],v,m)}}else{for(u=0;u<p.length;u++){this[q].dom7LiveListeners||(this[q].dom7LiveListeners=[]),this[q].dom7LiveListeners.push({listener:v,liveListener:w}),this[q].addEventListener(p[u],w,m)}}}return this},off:function(x,u,l,v){for(var m=x.split(" "),w=0;w<m.length;w++){for(var p=0;p<this.length;p++){if("function"==typeof u||u===!1){"function"==typeof u&&(l=arguments[1],v=arguments[2]||!1),this[p].removeEventListener(m[w],l,v)}else{if(this[p].dom7LiveListeners){for(var q=0;q<this[p].dom7LiveListeners.length;q++){this[p].dom7LiveListeners[q].listener===l&&this[p].removeEventListener(m[w],this[p].dom7LiveListeners[q].liveListener,v)}}}}}return this},once:function(q,n,l,o){function m(a){l(a),p.off(q,n,m,o)}var p=this;"function"==typeof n&&(n=!1,l=arguments[1],o=arguments[2]),p.on(q,n,m,o)},trigger:function(p,m){for(var n=0;n<this.length;n++){var l;try{l=new window.CustomEvent(p,{detail:m,bubbles:!0,cancelable:!0})}catch(o){l=document.createEvent("Event"),l.initEvent(p,!0,!0),l.detail=m}this[n].dispatchEvent(l)}return this},transitionEnd:function(p){function m(a){if(a.target===this){for(p.call(this,a),n=0;n<l.length;n++){o.off(l[n],m)}}}var n,l=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],o=this;if(p){for(n=0;n<l.length;n++){o.on(l[n],m)}}return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(a){return this.length>0?a?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(a){return this.length>0?a?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var v=this[0],p=v.getBoundingClientRect(),l=document.body,q=v.clientTop||l.clientTop||0,m=v.clientLeft||l.clientLeft||0,u=window.pageYOffset||v.scrollTop,o=window.pageXOffset||v.scrollLeft;return{top:p.top+u-q,left:p.left+o-m}}return null},css:function(o,m){var n;if(1===arguments.length){if("string"!=typeof o){for(n=0;n<this.length;n++){for(var l in o){this[n].style[l]=o[l]}}return this}if(this[0]){return window.getComputedStyle(this[0],null).getPropertyValue(o)}}if(2===arguments.length&&"string"==typeof o){for(n=0;n<this.length;n++){this[n].style[o]=m}return this}return this},each:function(m){for(var l=0;l<this.length;l++){m.call(this[l],l,this[l])}return this},html:function(m){if("undefined"==typeof m){return this[0]?this[0].innerHTML:void 0}for(var l=0;l<this.length;l++){this[l].innerHTML=m}return this},text:function(m){if("undefined"==typeof m){return this[0]?this[0].textContent.trim():null}for(var l=0;l<this.length;l++){this[l].textContent=m}return this},is:function(l){if(!this[0]){return !1}var a,e;if("string"==typeof l){var m=this[0];if(m===document){return l===document}if(m===window){return l===window}if(m.matches){return m.matches(l)}if(m.webkitMatchesSelector){return m.webkitMatchesSelector(l)}if(m.mozMatchesSelector){return m.mozMatchesSelector(l)}if(m.msMatchesSelector){return m.msMatchesSelector(l)}for(a=i(l),e=0;e<a.length;e++){if(a[e]===this[0]){return !0}}return !1}if(l===document){return this[0]===document}if(l===window){return this[0]===window}if(l.nodeType||l instanceof k){for(a=l.nodeType?[l]:l,e=0;e<a.length;e++){if(a[e]===this[0]){return !0}}return !1}return !1},index:function(){if(this[0]){for(var m=this[0],l=0;null!==(m=m.previousSibling);){1===m.nodeType&&l++}return l}},eq:function(l){if("undefined"==typeof l){return this}var m,e=this.length;return l>e-1?new k([]):0>l?(m=e+l,new k(0>m?[]:[this[m]])):new k([this[l]])},append:function(l){var m,e;for(m=0;m<this.length;m++){if("string"==typeof l){var n=document.createElement("div");for(n.innerHTML=l;n.firstChild;){this[m].appendChild(n.firstChild)}}else{if(l instanceof k){for(e=0;e<l.length;e++){this[m].appendChild(l[e])}}else{this[m].appendChild(l)}}}return this},prepend:function(l){var m,e;for(m=0;m<this.length;m++){if("string"==typeof l){var n=document.createElement("div");for(n.innerHTML=l,e=n.childNodes.length-1;e>=0;e--){this[m].insertBefore(n.childNodes[e],this[m].childNodes[0])}}else{if(l instanceof k){for(e=0;e<l.length;e++){this[m].insertBefore(l[e],this[m].childNodes[0])}}else{this[m].insertBefore(l,this[m].childNodes[0])}}}return this},insertBefore:function(n){for(var m=i(n),a=0;a<this.length;a++){if(1===m.length){m[0].parentNode.insertBefore(this[a],m[0])}else{if(m.length>1){for(var l=0;l<m.length;l++){m[l].parentNode.insertBefore(this[a].cloneNode(!0),m[l])}}}}},insertAfter:function(n){for(var m=i(n),a=0;a<this.length;a++){if(1===m.length){m[0].parentNode.insertBefore(this[a],m[0].nextSibling)}else{if(m.length>1){for(var l=0;l<m.length;l++){m[l].parentNode.insertBefore(this[a].cloneNode(!0),m[l].nextSibling)}}}}},next:function(a){return new k(this.length>0?a?this[0].nextElementSibling&&i(this[0].nextElementSibling).is(a)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(l){var a=[],e=this[0];if(!e){return new k([])}for(;e.nextElementSibling;){var m=e.nextElementSibling;l?i(m).is(l)&&a.push(m):a.push(m),e=m}return new k(a)},prev:function(a){return new k(this.length>0?a?this[0].previousElementSibling&&i(this[0].previousElementSibling).is(a)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(l){var a=[],e=this[0];if(!e){return new k([])}for(;e.previousElementSibling;){var m=e.previousElementSibling;l?i(m).is(l)&&a.push(m):a.push(m),e=m}return new k(a)},parent:function(m){for(var l=[],a=0;a<this.length;a++){m?i(this[a].parentNode).is(m)&&l.push(this[a].parentNode):l.push(this[a].parentNode)}return i(i.unique(l))},parents:function(n){for(var m=[],a=0;a<this.length;a++){for(var l=this[a].parentNode;l;){n?i(l).is(n)&&m.push(l):m.push(l),l=l.parentNode}}return i(i.unique(m))},find:function(l){for(var m=[],e=0;e<this.length;e++){for(var n=this[e].querySelectorAll(l),o=0;o<n.length;o++){m.push(n[o])}}return new k(m)},children:function(l){for(var a=[],e=0;e<this.length;e++){for(var m=this[e].childNodes,o=0;o<m.length;o++){l?1===m[o].nodeType&&i(m[o]).is(l)&&a.push(m[o]):1===m[o].nodeType&&a.push(m[o])}}return new k(i.unique(a))},remove:function(){for(var a=0;a<this.length;a++){this[a].parentNode&&this[a].parentNode.removeChild(this[a])}return this},add:function(){var n,m,a=this;for(n=0;n<arguments.length;n++){var l=i(arguments[n]);for(m=0;m<l.length;m++){a[a.length]=l[m],a.length++}}return a}},i.fn=k.prototype,i.unique=function(n){for(var l=[],m=0;m<n.length;m++){-1===l.indexOf(n[m])&&l.push(n[m])}return l},i}()),c=["jQuery","Zepto","Dom7"],h=0;h<c.length;h++){window[c[h]]&&j(window[c[h]])}var d;d="undefined"==typeof g?window.Dom7||window.Zepto||window.jQuery:g,d&&("transitionEnd" in d.fn||(d.fn.transitionEnd=function(o){function l(a){if(a.target===this){for(o.call(this,a),m=0;m<k.length;m++){n.off(k[m],l)}}}var m,k=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=this;if(o){for(m=0;m<k.length;m++){n.on(k[m],l)}}return this}),"transform" in d.fn||(d.fn.transform=function(l){for(var i=0;i<this.length;i++){var k=this[i].style;k.webkitTransform=k.MsTransform=k.msTransform=k.MozTransform=k.OTransform=k.transform=l}return this}),"transition" in d.fn||(d.fn.transition=function(l){"string"!=typeof l&&(l+="ms");for(var i=0;i<this.length;i++){var k=this[i].style;k.webkitTransitionDuration=k.MsTransitionDuration=k.msTransitionDuration=k.MozTransitionDuration=k.OTransitionDuration=k.transitionDuration=l}return this})),window.Swiper=b}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){return window.Swiper});(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(d){d.timeago=function(h){if(h instanceof Date){return e(h)}else{if(typeof h==="string"){return e(d.timeago.parse(h))}else{if(typeof h==="number"){return e(new Date(h))}else{return e(d.timeago.datetime(h))}}}};var g=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:60000,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"trước",suffixFromNow:"from now",inPast:"any moment now",seconds:"chưa đến 1 phút",minute:"1 phút",minutes:"%d phút",hour:"1 giờ",hours:"%d giờ",day:"1 ngày",days:"%d ngày",month:"1 tháng",months:"%d tháng",year:"1 năm",years:"%d năm",wordSeparator:" ",numbers:[]}},inWords:function(m){if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var o=n.prefixAgo;var r=n.suffixAgo;if(this.settings.allowFuture){if(m<0){o=n.prefixFromNow;r=n.suffixFromNow}}if(!this.settings.allowPast&&m>=0){return this.settings.strings.inPast}var j=Math.abs(m)/1000;var h=j/60;var l=h/60;var q=l/24;var k=q/365;function s(w,u){var v=d.isFunction(w)?w(u,m):w;var t=(n.numbers&&n.numbers[u])||u;return v.replace(/%d/i,t)}var i=j<45&&s(n.seconds,Math.round(j))||j<90&&s(n.minute,1)||h<45&&s(n.minutes,Math.round(h))||h<90&&s(n.hour,1)||l<24&&s(n.hours,Math.round(l))||l<42&&s(n.day,1)||q<30&&s(n.days,Math.round(q))||q<45&&s(n.month,1)||q<365&&s(n.months,Math.round(q/30))||k<1.5&&s(n.year,1)||s(n.years,Math.round(k));var p=n.wordSeparator||"";if(n.wordSeparator===undefined){p=" "}return d.trim([o,i,r].join(p))},parse:function(h){var i=d.trim(h);i=i.replace(/\.\d+/,"");i=i.replace(/-/,"/").replace(/-/,"/");i=i.replace(/T/," ").replace(/Z/," UTC");i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");i=i.replace(/([\+\-]\d\d)$/," $100");return new Date(i)},datetime:function(h){var i=g.isTime(h)?d(h).attr("datetime"):d(h).attr("title");return g.parse(i)},isTime:function(h){return d(h).get(0).tagName.toLowerCase()==="time"}});var f={init:function(){var h=d.proxy(a,this);h();var i=g.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(h,i.refreshMillis)}},update:function(h){var i=g.parse(h);d(this).data("timeago",{datetime:i});if(g.settings.localeTitle){d(this).attr("title",i.toLocaleString())}a.apply(this)},updateFromDOM:function(){d(this).data("timeago",{datetime:g.parse(g.isTime(this)?d(this).attr("datetime"):d(this).attr("title"))});a.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};d.fn.timeago=function(h,i){var j=h?f[h]:f.init;if(!j){throw new Error("Unknown function name '"+h+"' for timeago")}this.each(function(){j.call(this,i)});return this};function a(){if(!d.contains(document.documentElement,this)){d(this).timeago("dispose");return this}var h=c(this);var i=g.settings;if(!isNaN(h.datetime)){if(i.cutoff==0||Math.abs(b(h.datetime))<i.cutoff){d(this).text(e(h.datetime))}}return this}function c(h){h=d(h);if(!h.data("timeago")){h.data("timeago",{datetime:g.datetime(h)});var i=d.trim(h.text());if(g.settings.localeTitle){h.attr("title",h.data("timeago").datetime.toLocaleString())}else{if(i.length>0&&!(g.isTime(h)&&h.attr("title"))){h.attr("title",i)}}}return h.data("timeago")}function e(h){return g.inWords(b(h))}function b(h){return(new Date().getTime()-h.getTime())}document.createElement("abbr");document.createElement("time")}));/* Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(a){a.fn.extend({slimScroll:function(b){var c=a.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"0px",start:"top",opacity:0.1,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"100px",railBorderRadius:"100px"},b);this.each(function(){function s(h){if(j){h=h||window.event;var k=0;h.wheelDelta&&(k=-h.wheelDelta/120);h.detail&&(k=h.detail/3);a(h.target||h.srcTarget||h.srcElement).closest("."+c.wrapperClass).is(J.parent())&&H(k,!0);h.preventDefault&&!F&&h.preventDefault();F||(h.returnValue=!1)}}function H(n,p,l){F=!1;var k=n,m=J.outerHeight()-K.outerHeight();p&&(k=parseInt(K.css("top"))+n*parseInt(c.wheelStep)/100*K.outerHeight(),k=Math.min(Math.max(k,0),m),k=0<n?Math.ceil(k):Math.floor(k),K.css({top:k+"px"}));G=parseInt(K.css("top"))/(J.outerHeight()-K.outerHeight());k=G*(J[0].scrollHeight-J.outerHeight());l&&(k=n,n=k/J[0].scrollHeight*J.outerHeight(),n=Math.min(Math.max(n,0),m),K.css({top:n+"px"}));J.scrollTop(k);J.trigger("slimscrolling",~~k);D();g()}function d(){o=Math.max(J.outerHeight()/J[0].scrollHeight*J.outerHeight(),30);K.css({height:o+"px"});var h=o==J.outerHeight()?"none":"block";K.css({display:h})}function D(){d();clearTimeout(M);G==~~G?(F=c.allowPageScroll,N!=G&&J.trigger("slimscroll",0==~~G?"top":"bottom")):F=!1;N=G;o>=J.outerHeight()?F=!0:(K.stop(!0,!0).fadeIn("fast"),c.railVisible&&E.stop(!0,!0).fadeIn("fast"))}function g(){c.alwaysVisible||(M=setTimeout(function(){c.disableFadeOut&&j||e||f||(K.fadeOut("slow"),E.fadeOut("slow"))},1000))}var j,e,f,M,L,o,G,N,F=!1,J=a(this);if(J.parent().hasClass(c.wrapperClass)){var I=J.scrollTop(),K=J.closest("."+c.barClass),E=J.closest("."+c.railClass);d();if(a.isPlainObject(b)){if("height" in b&&"auto"==b.height){J.parent().css("height","auto");J.css("height","auto");var i=J.parent().parent().height();J.parent().css("height",i);J.css("height",i)}if("scrollTo" in b){I=parseInt(c.scrollTo)}else{if("scrollBy" in b){I+=parseInt(c.scrollBy)}else{if("destroy" in b){K.remove();E.remove();J.unwrap();return}}}H(I,!1,!0)}}else{if(!(a.isPlainObject(b)&&"destroy" in b)){c.height="auto"==c.height?J.parent().height():c.height;I=a("<div></div>").addClass(c.wrapperClass).css({position:"relative",overflow:"hidden",width:c.width,height:c.height});J.css({overflow:"hidden",width:c.width,height:c.height});var E=a("<div></div>").addClass(c.railClass).css({width:c.size,height:"100%",position:"absolute",top:0,display:c.alwaysVisible&&c.railVisible?"block":"none","border-radius":c.railBorderRadius,background:c.railColor,opacity:c.railOpacity,zIndex:90}),K=a("<div></div>").addClass(c.barClass).css({background:c.color,width:c.size,position:"absolute",top:0,opacity:c.opacity,display:c.alwaysVisible?"block":"none","border-radius":c.borderRadius,BorderRadius:c.borderRadius,MozBorderRadius:c.borderRadius,WebkitBorderRadius:c.borderRadius,zIndex:99}),i="right"==c.position?{right:c.distance}:{left:c.distance};E.css(i);K.css(i);J.wrap(I);J.parent().append(K);J.parent().append(E);c.railDraggable&&K.bind("mousedown",function(h){var k=a(document);f=!0;t=parseFloat(K.css("top"));pageY=h.pageY;k.bind("mousemove.slimscroll",function(l){currTop=t+l.pageY-pageY;K.css("top",currTop);H(0,K.position().top,!1)});k.bind("mouseup.slimscroll",function(l){f=!1;g();k.unbind(".slimscroll")});return !1}).bind("selectstart.slimscroll",function(h){h.stopPropagation();h.preventDefault();return !1});E.hover(function(){D()},function(){g()});K.hover(function(){e=!0},function(){e=!1});J.hover(function(){j=!0;D();g()},function(){j=!1;g()});J.bind("touchstart",function(h,k){h.originalEvent.touches.length&&(L=h.originalEvent.touches[0].pageY)});J.bind("touchmove",function(h){F||h.originalEvent.preventDefault();h.originalEvent.touches.length&&(H((L-h.originalEvent.touches[0].pageY)/c.touchScrollStep,!0),L=h.originalEvent.touches[0].pageY)});d();"bottom"===c.start?(K.css({top:J.outerHeight()-K.outerHeight()}),H(0,!0)):"top"!==c.start&&(H(a(c.start).position().top,null,!0),c.alwaysVisible||K.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}}});return this}});a.fn.extend({slimscroll:a.fn.slimScroll})})(jQuery);/* fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(g,a,y,j){var u=y("html"),o=y(g),d=y(a),x=y.fancybox=function(){x.open.apply(this,arguments)},c=navigator.userAgent.match(/msie/i),z=null,h=a.createTouch!==j,i=function(b){return b&&b.hasOwnProperty&&b instanceof y},e=function(b){return b&&"string"===y.type(b)},A=function(b){return e(b)&&0<b.indexOf("%")},m=function(b,f){var l=parseInt(b,10)||0;f&&A(b)&&(l*=x.getViewport()[f]/100);return Math.ceil(l)},k=function(f,l){return m(f,l)+"px"};y.extend(x,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!h,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3000,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(c?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:y.noop,beforeLoad:y.noop,afterLoad:y.noop,beforeShow:y.noop,afterShow:y.noop,beforeChange:y.noop,beforeClose:y.noop,afterClose:y.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,f){if(b&&(y.isPlainObject(f)||(f={}),!1!==x.close(!0))){return y.isArray(b)||(b=i(b)?y(b).get():[b]),y.each(b,function(v,t){var q={},w,n,p,s,r;"object"===y.type(t)&&(t.nodeType&&(t=y(t)),i(t)?(q={href:t.data("fancybox-href")||t.attr("href"),title:t.data("fancybox-title")||t.attr("title"),isDom:!0,element:t},y.metadata&&y.extend(!0,q,t.metadata())):q=t);w=f.href||q.href||(e(t)?t:null);n=f.title!==j?f.title:q.title||"";s=(p=f.content||q.content)?"html":f.type||q.type;!s&&q.isDom&&(s=t.data("fancybox-type"),s||(s=(s=t.prop("class").match(/fancybox\.(\w+)/))?s[1]:null));e(w)&&(s||(x.isImage(w)?s="image":x.isSWF(w)?s="swf":"#"===w.charAt(0)?s="inline":e(t)&&(s="html",p=t)),"ajax"===s&&(r=w.split(/\s+/,2),w=r.shift(),r=r.shift()));p||("inline"===s?w?p=y(e(w)?w.replace(/.*(?=#[^\s]+$)/,""):w):q.isDom&&(p=t):"html"===s?p=w:!s&&(!w&&q.isDom)&&(s="inline",p=t));y.extend(q,{href:w,type:s,content:p,title:n,selector:r});b[v]=q}),x.opts=y.extend(!0,{},x.defaults,f),f.keys!==j&&(x.opts.keys=f.keys?y.extend({},x.defaults.keys,f.keys):!1),x.group=b,x._start(x.opts.index)}},cancel:function(){var b=x.coming;b&&!1!==x.trigger("onCancel")&&(x.hideLoading(),x.ajaxLoad&&x.ajaxLoad.abort(),x.ajaxLoad=null,x.imgPreload&&(x.imgPreload.onload=x.imgPreload.onerror=null),b.wrap&&b.wrap.stop(!0,!0).trigger("onReset").remove(),x.coming=null,x.current||x._afterZoomOut(b))},close:function(b){x.cancel();!1!==x.trigger("beforeClose")&&(x.unbindEvents(),x.isActive&&(!x.isOpen||!0===b?(y(".fancybox-wrap").stop(!0).trigger("onReset").remove(),x._afterZoomOut()):(x.isOpen=x.isOpened=!1,x.isClosing=!0,y(".fancybox-item, .fancybox-nav").remove(),x.wrap.stop(!0,!0).removeClass("fancybox-opened"),x.transitions[x.current.closeMethod]())))},play:function(b){var l=function(){clearTimeout(x.player.timer)},n=function(){l();x.current&&x.player.isActive&&(x.player.timer=setTimeout(x.next,x.current.playSpeed))},f=function(){l();d.unbind(".player");x.player.isActive=!1;x.trigger("onPlayEnd")};if(!0===b||!x.player.isActive&&!1!==b){if(x.current&&(x.current.loop||x.current.index<x.group.length-1)){x.player.isActive=!0,d.bind({"onCancel.player beforeClose.player":f,"onUpdate.player":n,"beforeLoad.player":l}),n(),x.trigger("onPlayStart")}}else{f()}},next:function(b){var f=x.current;f&&(e(b)||(b=f.direction.next),x.jumpto(f.index+1,b,"next"))},prev:function(b){var f=x.current;f&&(e(b)||(b=f.direction.prev),x.jumpto(f.index-1,b,"prev"))},jumpto:function(b,l,n){var f=x.current;f&&(b=m(b),x.direction=l||f.direction[b>=f.index?"next":"prev"],x.router=n||"jumpto",f.loop&&(0>b&&(b=f.group.length+b%f.group.length),b%=f.group.length),f.group[b]!==j&&(x.cancel(),x._start(b)))},reposition:function(b,n){var p=x.current,l=p?p.wrap:null,f;l&&(f=x._getPosition(n),b&&"scroll"===b.type?(delete f.position,l.stop(!0,!0).animate(f,200)):(l.css(f),p.pos=y.extend({},p.dim,f)))},update:function(b){var f=b&&b.type,l=!f||"orientationchange"===f;l&&(clearTimeout(z),z=null);x.isOpen&&!z&&(z=setTimeout(function(){var n=x.current;n&&!x.isClosing&&(x.wrap.removeClass("fancybox-tmp"),(l||"load"===f||"resize"===f&&n.autoResize)&&x._setDimension(),"scroll"===f&&n.canShrink||x.reposition(b),x.trigger("onUpdate"),z=null)},l&&!h?0:300))},toggle:function(b){x.isOpen&&(x.current.fitToView="boolean"===y.type(b)?b:!x.current.fitToView,h&&(x.wrap.removeAttr("style").addClass("fancybox-tmp"),x.trigger("onUpdate")),x.update())},hideLoading:function(){d.unbind(".loading");y("#fancybox-loading").remove()},showLoading:function(){var b,f;x.hideLoading();b=y('<div id="fancybox-loading"><div></div></div>').click(x.cancel).appendTo("body");d.bind("keydown.loading",function(l){if(27===(l.which||l.keyCode)){l.preventDefault(),x.cancel()}});x.defaults.fixed||(f=x.getViewport(),b.css({position:"absolute",top:0.5*f.h+f.y,left:0.5*f.w+f.x}))},getViewport:function(){var b=x.current&&x.current.locked||!1,f={x:o.scrollLeft(),y:o.scrollTop()};b?(f.w=b[0].clientWidth,f.h=b[0].clientHeight):(f.w=h&&g.innerWidth?g.innerWidth:o.width(),f.h=h&&g.innerHeight?g.innerHeight:o.height());return f},unbindEvents:function(){x.wrap&&i(x.wrap)&&x.wrap.unbind(".fb");d.unbind(".fb");o.unbind(".fb")},bindEvents:function(){var b=x.current,f;b&&(o.bind("orientationchange.fb"+(h?"":" resize.fb")+(b.autoCenter&&!b.locked?" scroll.fb":""),x.update),(f=b.keys)&&d.bind("keydown.fb",function(p){var n=p.which||p.keyCode,l=p.target||p.srcElement;if(27===n&&x.coming){return !1}!p.ctrlKey&&(!p.altKey&&!p.shiftKey&&!p.metaKey&&(!l||!l.type&&!y(l).is("[contenteditable]")))&&y.each(f,function(q,r){if(1<b.group.length&&r[n]!==j){return x[q](r[n]),p.preventDefault(),!1}if(-1<y.inArray(n,r)){return x[q](),p.preventDefault(),!1}})}),y.fn.mousewheel&&b.mouseWheel&&x.wrap.bind("mousewheel.fb",function(r,q,p,s){for(var l=y(r.target||null),n=!1;l.length&&!n&&!l.is(".fancybox-skin")&&!l.is(".fancybox-wrap");){n=l[0]&&!(l[0].style.overflow&&"hidden"===l[0].style.overflow)&&(l[0].clientWidth&&l[0].scrollWidth>l[0].clientWidth||l[0].clientHeight&&l[0].scrollHeight>l[0].clientHeight),l=y(l).parent()}if(0!==q&&!n&&1<x.group.length&&!b.canShrink){if(0<s||0<p){x.prev(0<s?"down":"left")}else{if(0>s||0>p){x.next(0>s?"up":"right")}}r.preventDefault()}}))},trigger:function(b,l){var n,f=l||x.coming||x.current;if(f){y.isFunction(f[b])&&(n=f[b].apply(f,Array.prototype.slice.call(arguments,1)));if(!1===n){return !1}f.helpers&&y.each(f.helpers,function(p,q){if(q&&x.helpers[p]&&y.isFunction(x.helpers[p][b])){x.helpers[p][b](y.extend(!0,{},x.helpers[p].defaults,q),f)}});d.trigger(b)}},isImage:function(b){return e(b)&&b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(b){return e(b)&&b.match(/\.(swf)((\?|#).*)?$/i)},_start:function(b){var l={},n,f;b=m(b);n=x.group[b]||null;if(!n){return !1}l=y.extend(!0,{},x.opts,n);n=l.margin;f=l.padding;"number"===y.type(n)&&(l.margin=[n,n,n,n]);"number"===y.type(f)&&(l.padding=[f,f,f,f]);l.modal&&y.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});l.autoSize&&(l.autoWidth=l.autoHeight=!0);"auto"===l.width&&(l.autoWidth=!0);"auto"===l.height&&(l.autoHeight=!0);l.group=x.group;l.index=b;x.coming=l;if(!1===x.trigger("beforeLoad")){x.coming=null}else{f=l.type;n=l.href;if(!f){return x.coming=null,x.current&&x.router&&"jumpto"!==x.router?(x.current.index=b,x[x.router](x.direction)):!1}x.isActive=!0;if("image"===f||"swf"===f){l.autoHeight=l.autoWidth=!1,l.scrolling="visible"}"image"===f&&(l.aspectRatio=!0);"iframe"===f&&h&&(l.scrolling="scroll");l.wrap=y(l.tpl.wrap).addClass("fancybox-"+(h?"mobile":"desktop")+" fancybox-type-"+f+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body");y.extend(l,{skin:y(".fancybox-skin",l.wrap),outer:y(".fancybox-outer",l.wrap),inner:y(".fancybox-inner",l.wrap)});y.each(["Top","Right","Bottom","Left"],function(p,q){l.skin.css("padding"+q,k(l.padding[p]))});x.trigger("onReady");if("inline"===f||"html"===f){if(!l.content||!l.content.length){return x._error("content")}}else{if(!n){return x._error("href")}}"image"===f?x._loadImage():"ajax"===f?x._loadAjax():"iframe"===f?x._loadIframe():x._afterLoad()}},_error:function(b){y.extend(x.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:b,content:x.coming.tpl.error});x._afterLoad()},_loadImage:function(){var b=x.imgPreload=new Image;b.onload=function(){this.onload=this.onerror=null;x.coming.width=this.width/x.opts.pixelRatio;x.coming.height=this.height/x.opts.pixelRatio;x._afterLoad()};b.onerror=function(){this.onload=this.onerror=null;x._error("image")};b.src=x.coming.href;!0!==b.complete&&x.showLoading()},_loadAjax:function(){var b=x.coming;x.showLoading();x.ajaxLoad=y.ajax(y.extend({},b.ajax,{url:b.href,error:function(f,l){x.coming&&"abort"!==l?x._error("ajax",f):x.hideLoading()},success:function(f,l){"success"===l&&(b.content=f,x._afterLoad())}}))},_loadIframe:function(){var b=x.coming,f=y(b.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",h?"auto":b.iframe.scrolling).attr("src",b.href);y(b.wrap).bind("onReset",function(){try{y(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(l){}});b.iframe.preload&&(x.showLoading(),f.one("load",function(){y(this).data("ready",1);h||y(this).bind("load.fb",x.update);y(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();x._afterLoad()}));b.content=f.appendTo(b.inner);b.iframe.preload||x._afterLoad()},_preloadImages:function(){var b=x.group,n=x.current,p=b.length,l=n.preload?Math.min(n.preload,p-1):0,q,r;for(r=1;r<=l;r+=1){q=b[(n.index+r)%p],"image"===q.type&&q.href&&((new Image).src=q.href)}},_afterLoad:function(){var l=x.coming,p=x.current,q,n,f,r,b;x.hideLoading();if(l&&!1!==x.isActive){if(!1===x.trigger("afterLoad",l,p)){l.wrap.stop(!0).trigger("onReset").remove(),x.coming=null}else{p&&(x.trigger("beforeChange",p),p.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());x.unbindEvents();q=l.content;n=l.type;f=l.scrolling;y.extend(x,{wrap:l.wrap,skin:l.skin,outer:l.outer,inner:l.inner,current:l,previous:p});r=l.href;switch(n){case"inline":case"ajax":case"html":l.selector?q=y("<div>").html(q).find(l.selector):i(q)&&(q.data("fancybox-placeholder")||q.data("fancybox-placeholder",y('<div class="fancybox-placeholder"></div>').insertAfter(q).hide()),q=q.show().detach(),l.wrap.bind("onReset",function(){y(this).find(q).length&&q.hide().replaceAll(q.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":q=l.tpl.image.replace("{href}",r);break;case"swf":q='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',b="",y.each(l.swf,function(s,t){q+='<param name="'+s+'" value="'+t+'"></param>';b+=" "+s+'="'+t+'"'}),q+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+b+"></embed></object>"}(!i(q)||!q.parent().is(l.inner))&&l.inner.append(q);x.trigger("beforeShow");l.inner.css("overflow","yes"===f?"scroll":"no"===f?"hidden":f);x._setDimension();x.reposition();x.isOpen=!1;x.coming=null;x.bindEvents();if(x.isOpened){if(p.prevMethod){x.transitions[p.prevMethod]()}}else{y(".fancybox-wrap").not(l.wrap).stop(!0).trigger("onReset").remove()}x.transitions[x.isOpened?l.nextMethod:l.openMethod]();x._preloadImages()}}},_setDimension:function(){var Y=x.getViewport(),aa=0,ab=!1,Z=!1,ab=x.wrap,V=x.skin,ac=x.inner,T=x.current,Z=T.width,U=T.height,W=T.minWidth,R=T.minHeight,X=T.maxWidth,M=T.maxHeight,P=T.scrolling,N=T.scrollOutside?T.scrollbarWidth:0,J=T.margin,K=m(J[1]+J[3]),O=m(J[0]+J[2]),S,L,Q,l,b,E,f,w,ad;ab.add(V).add(ac).width("auto").height("auto").removeClass("fancybox-tmp");J=m(V.outerWidth(!0)-V.width());S=m(V.outerHeight(!0)-V.height());L=K+J;Q=O+S;l=A(Z)?(Y.w-L)*m(Z)/100:Z;b=A(U)?(Y.h-Q)*m(U)/100:U;if("iframe"===T.type){if(ad=T.content,T.autoHeight&&1===ad.data("ready")){try{ad[0].contentWindow.document.location&&(ac.width(l).height(9999),E=ad.contents().find("body"),N&&E.css("overflow-x","hidden"),b=E.outerHeight(!0))}catch(I){}}}else{if(T.autoWidth||T.autoHeight){ac.addClass("fancybox-tmp"),T.autoWidth||ac.width(l),T.autoHeight||ac.height(b),T.autoWidth&&(l=ac.width()),T.autoHeight&&(b=ac.height()),ac.removeClass("fancybox-tmp")}}Z=m(l);U=m(b);w=l/b;W=m(A(W)?m(W,"w")-L:W);X=m(A(X)?m(X,"w")-L:X);R=m(A(R)?m(R,"h")-Q:R);M=m(A(M)?m(M,"h")-Q:M);E=X;f=M;T.fitToView&&(X=Math.min(Y.w-L,X),M=Math.min(Y.h-Q,M));L=Y.w-K;O=Y.h-O;T.aspectRatio?(Z>X&&(Z=X,U=m(Z/w)),U>M&&(U=M,Z=m(U*w)),Z<W&&(Z=W,U=m(Z/w)),U<R&&(U=R,Z=m(U*w))):(Z=Math.max(W,Math.min(Z,X)),T.autoHeight&&"iframe"!==T.type&&(ac.width(Z),U=ac.height()),U=Math.max(R,Math.min(U,M)));if(T.fitToView){if(ac.width(Z).height(U),ab.width(Z+J),Y=ab.width(),K=ab.height(),T.aspectRatio){for(;(Y>L||K>O)&&(Z>W&&U>R)&&!(19<aa++);){U=Math.max(R,Math.min(M,U-10)),Z=m(U*w),Z<W&&(Z=W,U=m(Z/w)),Z>X&&(Z=X,U=m(Z/w)),ac.width(Z).height(U),ab.width(Z+J),Y=ab.width(),K=ab.height()}}else{Z=Math.max(W,Math.min(Z,Z-(Y-L))),U=Math.max(R,Math.min(U,U-(K-O)))}}N&&("auto"===P&&U<b&&Z+J+N<L)&&(Z+=N);ac.width(Z).height(U);ab.width(Z+J);Y=ab.width();K=ab.height();ab=(Y>L||K>O)&&Z>W&&U>R;Z=T.aspectRatio?Z<E&&U<f&&Z<l&&U<b:(Z<E||U<f)&&(Z<l||U<b);y.extend(T,{dim:{width:k(Y),height:k(K)},origWidth:l,origHeight:b,canShrink:ab,canExpand:Z,wPadding:J,hPadding:S,wrapSpace:K-V.outerHeight(!0),skinSpace:V.height()-U});!ad&&(T.autoHeight&&U>R&&U<M&&!Z)&&ac.height("auto")},_getPosition:function(b){var n=x.current,p=x.getViewport(),l=n.margin,q=x.wrap.width()+l[1]+l[3],r=x.wrap.height()+l[0]+l[2],l={position:"absolute",top:l[0],left:l[3]};n.autoCenter&&n.fixed&&!b&&r<=p.h&&q<=p.w?l.position="fixed":n.locked||(l.top+=p.y,l.left+=p.x);l.top=k(Math.max(l.top,l.top+(p.h-r)*n.topRatio));l.left=k(Math.max(l.left,l.left+(p.w-q)*n.leftRatio));return l},_afterZoomIn:function(){var b=x.current;b&&(x.isOpen=x.isOpened=!0,x.wrap.css("overflow","visible").addClass("fancybox-opened"),x.update(),(b.closeClick||b.nextClick&&1<x.group.length)&&x.inner.css("cursor","pointer").bind("click.fb",function(f){!y(f.target).is("a")&&!y(f.target).parent().is("a")&&(f.preventDefault(),x[b.closeClick?"close":"next"]())}),b.closeBtn&&y(b.tpl.closeBtn).appendTo(x.skin).bind("click.fb",function(f){f.preventDefault();x.close()}),b.arrows&&1<x.group.length&&((b.loop||0<b.index)&&y(b.tpl.prev).appendTo(x.outer).bind("click.fb",x.prev),(b.loop||b.index<x.group.length-1)&&y(b.tpl.next).appendTo(x.outer).bind("click.fb",x.next)),x.trigger("afterShow"),!b.loop&&b.index===b.group.length-1?x.play(!1):x.opts.autoPlay&&!x.player.isActive&&(x.opts.autoPlay=!1,x.play()))},_afterZoomOut:function(b){b=b||x.current;y(".fancybox-wrap").trigger("onReset").remove();y.extend(x,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});x.trigger("afterClose",b)}});x.transitions={getOrigPosition:function(){var p=x.current,r=p.element,s=p.orig,q={},t=50,v=50,b=p.hPadding,l=p.wPadding,n=x.getViewport();!s&&(p.isDom&&r.is(":visible"))&&(s=r.find("img:first"),s.length||(s=r));i(s)?(q=s.offset(),s.is("img")&&(t=s.outerWidth(),v=s.outerHeight())):(q.top=n.y+(n.h-v)*p.topRatio,q.left=n.x+(n.w-t)*p.leftRatio);if("fixed"===x.wrap.css("position")||p.locked){q.top-=n.y,q.left-=n.x}return q={top:k(q.top-b*p.topRatio),left:k(q.left-l*p.leftRatio),width:k(t+l),height:k(v+b)}},step:function(l,p){var q,n,r=p.prop;n=x.current;var s=n.wrapSpace,b=n.skinSpace;if("width"===r||"height"===r){q=p.end===p.start?1:(l-p.start)/(p.end-p.start),x.isClosing&&(q=1-q),n="width"===r?n.wPadding:n.hPadding,n=l-n,x.skin[r](m("width"===r?n:n-s*q)),x.inner[r](m("width"===r?n:n-s*q-b*q))}},zoomIn:function(){var b=x.current,n=b.pos,p=b.openEffect,l="elastic"===p,f=y.extend({opacity:1},n);delete f.position;l?(n=this.getOrigPosition(),b.openOpacity&&(n.opacity=0.1)):"fade"===p&&(n.opacity=0.1);x.wrap.css(n).animate(f,{duration:"none"===p?0:b.openSpeed,easing:b.openEasing,step:l?this.step:null,complete:x._afterZoomIn})},zoomOut:function(){var b=x.current,l=b.closeEffect,n="elastic"===l,f={opacity:0.1};n&&(f=this.getOrigPosition(),b.closeOpacity&&(f.opacity=0.1));x.wrap.animate(f,{duration:"none"===l?0:b.closeSpeed,easing:b.closeEasing,step:n?this.step:null,complete:x._afterZoomOut})},changeIn:function(){var b=x.current,n=b.nextEffect,p=b.pos,l={opacity:1},q=x.direction,r;p.opacity=0.1;"elastic"===n&&(r="down"===q||"up"===q?"top":"left","down"===q||"right"===q?(p[r]=k(m(p[r])-200),l[r]="+=200px"):(p[r]=k(m(p[r])+200),l[r]="-=200px"));"none"===n?x._afterZoomIn():x.wrap.css(p).animate(l,{duration:b.nextSpeed,easing:b.nextEasing,complete:x._afterZoomIn})},changeOut:function(){var b=x.previous,l=b.prevEffect,n={opacity:0.1},f=x.direction;"elastic"===l&&(n["down"===f||"up"===f?"top":"left"]=("up"===f||"left"===f?"-":"+")+"=200px");b.wrap.animate(n,{duration:"none"===l?0:b.prevSpeed,easing:b.prevEasing,complete:function(){y(this).trigger("onReset").remove()}})}};x.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!h,fixed:!0},overlay:null,fixed:!1,el:y("html"),create:function(b){b=y.extend({},this.defaults,b);this.overlay&&this.close();this.overlay=y('<div class="fancybox-overlay"></div>').appendTo(x.coming?x.coming.parent:b.parent);this.fixed=!1;b.fixed&&x.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(b){var f=this;b=y.extend({},this.defaults,b);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(b);this.fixed||(o.bind("resize.overlay",y.proxy(this.update,this)),this.update());b.closeClick&&this.overlay.bind("click.overlay",function(l){if(y(l.target).hasClass("fancybox-overlay")){return x.isActive?x.close():f.close(),!1}});this.overlay.css(b.css).show()},close:function(){var f,l;o.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(y(".fancybox-margin").removeClass("fancybox-margin"),f=o.scrollTop(),l=o.scrollLeft(),this.el.removeClass("fancybox-lock"),o.scrollTop(f).scrollLeft(l));y(".fancybox-overlay").remove().hide();y.extend(this,{overlay:null,fixed:!1})},update:function(){var f="100%",l;this.overlay.width(f).height("100%");c?(l=Math.max(a.documentElement.offsetWidth,a.body.offsetWidth),d.width()>l&&(f=d.width())):d.width()>o.width()&&(f=d.width());this.overlay.width(f).height(d.height())},onReady:function(f,l){var n=this.overlay;y(".fancybox-overlay").stop(!0,!0);n||this.create(f);f.locked&&(this.fixed&&l.fixed)&&(n||(this.margin=d.height()>o.height()?y("html").css("margin-right").replace("px",""):!1),l.locked=this.overlay.append(l.wrap),l.fixed=!1);!0===f.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(f,l){var p,n;l.locked&&(!1!==this.margin&&(y("*").filter(function(){return"fixed"===y(this).css("position")&&!y(this).hasClass("fancybox-overlay")&&!y(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),p=o.scrollTop(),n=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(p).scrollLeft(n));this.open(f)},onUpdate:function(){this.fixed||this.update()},afterClose:function(b){this.overlay&&!x.coming&&this.overlay.fadeOut(b.speedOut,y.proxy(this.close,this))}};x.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(b){var l=x.current,n=l.title,f=b.type;y.isFunction(n)&&(n=n.call(l.element,l));if(e(n)&&""!==y.trim(n)){l=y('<div class="fancybox-title fancybox-title-'+f+'-wrap">'+n+"</div>");switch(f){case"inside":f=x.skin;break;case"outside":f=x.wrap;break;case"over":f=x.inner;break;default:f=x.skin,l.appendTo("body"),c&&l.width(l.width()),l.wrapInner('<span class="child"></span>'),x.current.margin[2]+=Math.abs(m(l.css("margin-bottom")))}l["top"===b.position?"prependTo":"appendTo"](f)}}};y.fn.fancybox=function(b){var n,p=y(this),l=this.selector||"",f=function(r){var q=y(this).blur(),s=n,t,v;!r.ctrlKey&&(!r.altKey&&!r.shiftKey&&!r.metaKey)&&!q.is(".fancybox-wrap")&&(t=b.groupAttr||"data-fancybox-group",v=q.attr(t),v||(t="rel",v=q.get(0)[t]),v&&(""!==v&&"nofollow"!==v)&&(q=l.length?y(l):p,q=q.filter("["+t+'="'+v+'"]'),s=q.index(this)),b.index=s,!1!==x.open(q,b)&&r.preventDefault())};b=b||{};n=b.index||0;!l||!1===b.live?p.unbind("click.fb-start").bind("click.fb-start",f):d.undelegate(l,"click.fb-start").delegate(l+":not('.fancybox-item, .fancybox-nav')","click.fb-start",f);this.filter("[data-fancybox-start=1]").trigger("click");return this};d.ready(function(){var b,f;y.scrollbarWidth===j&&(y.scrollbarWidth=function(){var n=y('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),p=n.children(),p=p.innerWidth()-p.height(99).innerWidth();n.remove();return p});if(y.support.fixedPosition===j){b=y.support;f=y('<div style="position:fixed;top:20px;"></div>').appendTo("body");var l=20===f[0].offsetTop||15===f[0].offsetTop;f.remove();b.fixedPosition=l}y.extend(x.defaults,{scrollbarWidth:y.scrollbarWidth(),fixed:y.support.fixedPosition,parent:y("body")});b=y(g).width();u.addClass("fancybox-lock-test");f=y(g).width();u.removeClass("fancybox-lock-test");y("<style type='text/css'>.fancybox-margin{margin-right:"+(f-b)+"px;}</style>").appendTo("head")})})(window,document,jQuery);$.fn.trimLine=function(a,b){return this.each(function(){var f=$(this).text().length;var d=parseFloat($(this).css("line-height"))*a;if(isNaN(d)){d=parseFloat($(this).css("font-size").replace("px",""))*a}var e=($(this).height()>d&&f>0);while($(this).height()>d&&f>0){f--;var g=$(this).html().toSubString(f);$(this).html(g)}if(e){$(this).html($(this).html().substring(0,$(this).html().lastIndexOf(" "))+" ...")}if(true===b){$(this).css({"min-height":d+"px"})}})};String.prototype.toSubString=function(b){var c=this;if(c==""||c.Length<=b){return c}var a=$.trim(c).lastIndexOf(" ");c=c.substring(0,Math.min(c.length,b));if(c.length>a){c=c.substring(0,a)}return c};!function(){if(!window.CustomEvent&&document.createEventObject){return void (window.CustomEvent=function(h,f){if(!arguments.length){throw new Error("Not enough arguments")}var d={type:h,bubbles:!1,cancelable:!1,detail:null},c=document.createEventObject();for(var g in d){c[g]=d[g]}for(var g in f){c[g]=f[g]}return c})}try{new CustomEvent("test")}catch(a){var b=function(h,f){if(!arguments.length){throw new Error("Not enough arguments")}var d={bubbles:!1,cancelable:!1,detail:null};for(var c in f){d[c]=f[c]}var g=document.createEvent("CustomEvent");return g.initCustomEvent(h,d.bubbles,d.cancelable,d.detail),g};b.prototype=(window.CustomEvent||window.Event).prototype,window.CustomEvent=b}}(),function(){if(!document.addEventListener&&window.Element&&window.Event){var w="__events",b="__immediateStopped";Event.prototype.NONE=Event.NONE=0,Event.prototype.CAPTURING_PHASE=Event.CAPTURING_PHASE=1,Event.prototype.AT_TARGET=Event.AT_TARGET=2,Event.prototype.BUBBLING_PHASE=Event.BUBBLING_PHASE=3,Event.prototype.preventDefault=function(){this.cancelable!==!1&&(this.returnValue=!1)},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},Event.prototype.stopImmediatePropagation=function(){this[b]=this.cancelBubble=!0};for(var v=function(a,c){return a.timeStamp=+new Date,a.target||(a.target=a.srcElement||c),a.pageX=a.clientX+document.documentElement.scrollLeft,a.pageY=a.clientY+document.documentElement.scrollTop,"mouseover"==a.type?a.relatedTarget=a.fromElement:"mouseout"==a.type?a.relatedTarget=a.toElement:a.relatedTarget=null,a},f=function(l,d,c){for(var a=0;a<l.length;a++){var h=l[a];if(h.useCapture==c&&h.listener==d){return a}}return -1},k=function(d,c,a){d.currentTarget=a,"function"==typeof c?c.call(a,d):c.handleEvent(d)},q=function(a){for(var c=[];a.parentNode;){c.unshift(a.parentNode),a=a.parentNode}return c},m=function(D,n,B){D.eventPhase=B;for(var z=0;z<n.length;z++){for(var C=n[z],t=[],F=(C[w]||{})[D.type]||[],e=0;e<F.length;e++){var y=F[e];y.useCapture&&B==Event.BUBBLING_PHASE||(y.useCapture||B!=Event.CAPTURING_PHASE)&&t.push(y.listener)}for(e=0;e<t.length;){try{for(;e<t.length;){var E=t[e++];if(k(D,E,C),D[b]){return !0}}}catch(A){setTimeout(function(){throw A},0)}}if(D.cancelBubble){return !0}}return !1},u=function(a){v(a,this);var c=q(a.target);return c.length&&m(a,c,Event.CAPTURING_PHASE)?a.returnValue:m(a,[a.target],Event.AT_TARGET)?a.returnValue:c.length&&a.bubbles!==!1&&(c.reverse(),m(a,c,Event.BUBBLING_PHASE))?a.returnValue:(a.stopPropagation(),a.returnValue)},g=({addEventListener:function(y,r,e){var i=this,h=(this[w]||{})[y]||[],c=h.length;if(!(f(h,r,e)>-1)){if(w in this){var z=this[w]}else{var z={_handler:function(){u.apply(i,arguments)}};this[w]=z}y in z||(z[y]=[]),z[y].push({listener:r,useCapture:e}),c||this.attachEvent("on"+y,z._handler)}},removeEventListener:function(h,e,i){var c=(this[w]||{})[h]||[],d=f(c,e,i);-1!=d&&(c.splice(d,1),c.length||this.detachEvent("on"+h,this[w]._handler))},dispatchEvent:function(a){return a.returnValue=!0,u.call(this,a)}}),x=[Element,window.constructor,document.constructor];x.length;){var p=x.pop();for(var j in g){p.prototype[j]=g[j]}}}}(),Array.prototype.forEach||(Array.prototype.forEach=function(j,b){var h,c;if(null==this){throw new TypeError(" this is null or not defined")}var d=Object(this),g=d.length>>>0;if("function"!=typeof j){throw new TypeError(j+" is not a function")}for(arguments.length>1&&(h=b),c=0;g>c;){var f;c in d&&(f=d[c],j.call(h,f,c,d)),c++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(h,b){var g;if(null==this){throw new TypeError('"this" is null or not defined')}var c=Object(this),d=c.length>>>0;if(0===d){return -1}var f=+b||0;if(Math.abs(f)===1/0&&(f=0),f>=d){return -1}for(g=Math.max(f>=0?f:d-Math.abs(f),0);d>g;){if(g in c&&c[g]===h){return g}g++}return -1}),function(c){var b;if("object"==typeof exports){try{b=require("jquery")}catch(a){}module.exports=c(window,document,b)}else{"function"==typeof define&&define.amd?define([],function(){return c(window,document,window.jQuery)}):window.Dropkick=c(window,document,window.jQuery)}}(function(w,b,v,f){var k,q=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),m=w.parent!==w.self,u=-1!==navigator.appVersion.indexOf("MSIE"),g=function(e,d){var h,c;if(this===w){return new g(e,d)}for("string"==typeof e&&"#"===e[0]&&(e=b.getElementById(e.substr(1))),h=0;h<g.uid;h++){if(c=g.cache[h],c instanceof g&&c.data.select===e){return j.extend(c.data.settings,d),c}}return e?e.length<1?(console.error("You must have options inside your <select>: ",e),!1):"SELECT"===e.nodeName?this.init(e,d):void 0:(console.error("You must pass a select to DropKick"),!1)},x=function(){},p={initialize:x,mobile:!1,change:x,open:x,close:x,search:"strict",bubble:!0},j={hasClass:function(d,c){var a=new RegExp("(^|\\s+)"+c+"(\\s+|$)");return d&&a.test(d.className)},addClass:function(a,c){a&&!j.hasClass(a,c)&&(a.className+=" "+c)},removeClass:function(d,c){var a=new RegExp("(^|\\s+)"+c+"(\\s+|$)");d&&(d.className=d.className.replace(a," "))},toggleClass:function(d,c){var a=j.hasClass(d,c)?"remove":"add";j[a+"Class"](d,c)},extend:function(a){return Array.prototype.slice.call(arguments,1).forEach(function(d){if(d){for(var c in d){a[c]=d[c]}}}),a},offset:function(e){var d=e.getBoundingClientRect()||{top:0,left:0},l=b.documentElement,c=u?l.scrollTop:w.pageYOffset,h=u?l.scrollLeft:w.pageXOffset;return{top:d.top+c-l.clientTop,left:d.left+h-l.clientLeft}},position:function(d,c){for(var a={top:0,left:0};d&&d!==c;){a.top+=d.offsetTop,a.left+=d.offsetLeft,d=d.parentNode}return a},closest:function(a,c){for(;a;){if(a===c){return a}a=a.parentNode}return !1},create:function(h,c){var a,d=b.createElement(h);c||(c={});for(a in c){c.hasOwnProperty(a)&&("innerHTML"===a?d.innerHTML=c[a]:d.setAttribute(a,c[a]))}return d},deferred:function(a){return function(){var c=arguments,d=this;w.setTimeout(function(){a.apply(d,c)},1)}}};return g.cache={},g.uid=0,g.prototype={add:function(o,h){var d,l,c;"string"==typeof o&&(d=o,o=b.createElement("option"),o.text=d),"OPTION"===o.nodeName&&(l=j.create("li",{"class":"dk-option","data-value":o.value,innerHTML:o.text,role:"option","aria-selected":"false",id:"dk"+this.data.cacheID+"-"+(o.id||o.value.replace(" ","-"))}),j.addClass(l,o.className),this.length+=1,o.disabled&&(j.addClass(l,"dk-option-disabled"),l.setAttribute("aria-disabled","true")),o.hidden&&(j.addClass(l,"dk-option-hidden"),l.setAttribute("aria-hidden","true")),this.data.select.add(o,h),"number"==typeof h&&(h=this.item(h)),c=this.options.indexOf(h),c>-1?(h.parentNode.insertBefore(l,h),this.options.splice(c,0,l)):(this.data.elem.lastChild.appendChild(l),this.options.push(l)),l.addEventListener("mouseover",this),o.selected&&this.select(c))},item:function(a){return a=0>a?this.options.length+a:a,this.options[a]||null},remove:function(a){var c=this.item(a);c.parentNode.removeChild(c),this.options.splice(a,1),this.data.select.remove(a),this.select(this.data.select.selectedIndex),this.length-=1},init:function(h,c){var a,d=g.build(h,"dk"+g.uid);if(this.data={},this.data.select=h,this.data.elem=d.elem,this.data.settings=j.extend({},p,c),this.disabled=h.disabled,this.form=h.form,this.length=h.length,this.multiple=h.multiple,this.options=d.options.slice(0),this.selectedIndex=h.selectedIndex,this.selectedOptions=d.selected.slice(0),this.value=h.value,this.data.cacheID=g.uid,g.cache[this.data.cacheID]=this,this.data.settings.initialize.call(this),g.uid+=1,this._changeListener||(h.addEventListener("change",this),this._changeListener=!0),!q||this.data.settings.mobile){if(h.parentNode.insertBefore(this.data.elem,h),h.setAttribute("data-dkCacheId",this.data.cacheID),this.data.elem.addEventListener("click",this),this.data.elem.addEventListener("keydown",this),this.data.elem.addEventListener("keypress",this),this.form&&this.form.addEventListener("reset",this),!this.multiple){for(a=0;a<this.options.length;a++){this.options[a].addEventListener("mouseover",this)}}k||(b.addEventListener("click",g.onDocClick),m&&parent.document.addEventListener("click",g.onDocClick),k=!0)}return this},close:function(){var a,c=this.data.elem;if(!this.isOpen||this.multiple){return !1}for(a=0;a<this.options.length;a++){j.removeClass(this.options[a],"dk-option-highlight")}c.lastChild.setAttribute("aria-expanded","false"),j.removeClass(c.lastChild,"dk-select-options-highlight"),j.removeClass(c,"dk-select-open-(up|down)"),this.isOpen=!1,this.data.settings.close.call(this)},open:j.deferred(function(){var C,t,A,y,B,e,E=this.data.elem,c=E.lastChild,D=w.pageXOffset!==f,z="CSS1Compat"===(b.compatMode||""),i=D?w.pageYOffset:z?b.documentElement.scrollTop:b.body.scrollTop;return B=j.offset(E).top-i,e=w.innerHeight-(B+E.offsetHeight),this.isOpen||this.multiple?!1:(c.style.display="block",C=c.offsetHeight,c.style.display="",t=B>C,A=e>C,y=t&&!A?"-up":"-down",this.isOpen=!0,j.addClass(E,"dk-select-open"+y),c.setAttribute("aria-expanded","true"),this._scrollTo(this.options.length-1),this._scrollTo(this.selectedIndex),void this.data.settings.open.call(this))}),disable:function(d,c){var a="dk-option-disabled";0!==arguments.length&&"boolean"!=typeof d||(c=d===f,d=this.data.elem,a="dk-select-disabled",this.disabled=c),c===f&&(c=!0),"number"==typeof d&&(d=this.item(d)),c?(d.setAttribute("aria-disabled",!0),j.addClass(d,a)):(d.setAttribute("aria-disabled",!1),j.removeClass(d,a))},hide:function(d,c){var a="dk-option-hidden";c===f&&(c=!0),d=this.item(d),c?(d.setAttribute("aria-hidden",!0),j.addClass(d,a)):(d.setAttribute("aria-hidden",!1),j.removeClass(d,a))},select:function(z,c){var y,d,h,r,l=this.data.select;if("number"==typeof z&&(z=this.item(z)),"string"==typeof z){for(y=0;y<this.length;y++){this.options[y].getAttribute("data-value")===z&&(z=this.options[y])}}return !z||"string"==typeof z||!c&&j.hasClass(z,"dk-option-disabled")?!1:j.hasClass(z,"dk-option")?(d=this.options.indexOf(z),h=l.options[d],this.multiple?(j.toggleClass(z,"dk-option-selected"),h.selected=!h.selected,j.hasClass(z,"dk-option-selected")?(z.setAttribute("aria-selected","true"),this.selectedOptions.push(z)):(z.setAttribute("aria-selected","false"),d=this.selectedOptions.indexOf(z),this.selectedOptions.splice(d,1))):(r=this.data.elem.firstChild,this.selectedOptions.length&&(j.removeClass(this.selectedOptions[0],"dk-option-selected"),this.selectedOptions[0].setAttribute("aria-selected","false")),j.addClass(z,"dk-option-selected"),z.setAttribute("aria-selected","true"),r.setAttribute("aria-activedescendant",z.id),r.className="dk-selected "+h.className,r.innerHTML=h.text,this.selectedOptions[0]=z,h.selected=!0),this.selectedIndex=l.selectedIndex,this.value=l.value,c||this.data.select.dispatchEvent(new CustomEvent("change",{bubbles:this.data.settings.bubble})),z):void 0},selectOne:function(a,c){return this.reset(!0),this._scrollTo(a),this.select(a,c)},search:function(I,y){var H,z,C,F,D,G,A,J,E=this.data.select.options,B=[];if(!I){return this.options}for(y=y?y.toLowerCase():"strict",y="fuzzy"===y?2:"partial"===y?1:0,J=new RegExp((y?"":"^")+I,"i"),H=0;H<E.length;H++){if(C=E[H].text.toLowerCase(),2==y){for(z=I.toLowerCase().split(""),F=D=G=A=0;D<C.length;){C[D]===z[F]?(G+=1+G,F++):G=0,A+=G,D++}F===z.length&&B.push({e:this.options[H],s:A,i:H})}else{J.test(C)&&B.push(this.options[H])}}return 2===y&&(B=B.sort(function(a,c){return c.s-a.s||a.i-c.i}).reduce(function(a,c){return a[a.length]=c.e,a},[])),B},focus:function(){this.disabled||(this.multiple?this.data.elem:this.data.elem.children[0]).focus()},reset:function(d){var c,a=this.data.select;for(this.selectedOptions.length=0,c=0;c<a.options.length;c++){a.options[c].selected=!1,j.removeClass(this.options[c],"dk-option-selected"),this.options[c].setAttribute("aria-selected","false"),!d&&a.options[c].defaultSelected&&this.select(c,!0)}this.selectedOptions.length||this.multiple||this.select(0,!0)},refresh:function(){Object.keys(this).length>0&&(!q||this.data.settings.mobile)&&this.dispose().init(this.data.select,this.data.settings)},dispose:function(){return Object.keys(this).length>0&&(!q||this.data.settings.mobile)&&(delete g.cache[this.data.cacheID],this.data.elem.parentNode.removeChild(this.data.elem),this.data.select.removeAttribute("data-dkCacheId")),this},handleEvent:function(a){if(!this.disabled){switch(a.type){case"click":this._delegate(a);break;case"keydown":this._keyHandler(a);break;case"keypress":this._searchOptions(a);break;case"mouseover":this._highlight(a);break;case"reset":this.reset();break;case"change":this.data.settings.change.call(this)}}},_delegate:function(r){var l,c,d,h,e=r.target;if(j.hasClass(e,"dk-option-disabled")){return !1}if(this.multiple){if(j.hasClass(e,"dk-option")){if(l=w.getSelection(),"Range"===l.type&&l.collapseToStart(),r.shiftKey){if(d=this.options.indexOf(this.selectedOptions[0]),h=this.options.indexOf(this.selectedOptions[this.selectedOptions.length-1]),c=this.options.indexOf(e),c>d&&h>c&&(c=d),c>h&&h>d&&(h=d),this.reset(!0),h>c){for(;h+1>c;){this.select(c++)}}else{for(;c>h-1;){this.select(c--)}}}else{r.ctrlKey||r.metaKey?this.select(e):(this.reset(!0),this.select(e))}}}else{this[this.isOpen?"close":"open"](),j.hasClass(e,"dk-option")&&this.select(e)}},_highlight:function(d){var c,a=d.target;if(!this.multiple){for(c=0;c<this.options.length;c++){j.removeClass(this.options[c],"dk-option-highlight")}j.addClass(this.data.elem.lastChild,"dk-select-options-highlight"),j.addClass(a,"dk-option-highlight")}},_keyHandler:function(z){var c,y,d=this.selectedOptions,h=this.options,r=1,l={tab:9,enter:13,esc:27,space:32,up:38,down:40};switch(z.keyCode){case l.up:r=-1;case l.down:if(z.preventDefault(),c=d[d.length-1],j.hasClass(this.data.elem.lastChild,"dk-select-options-highlight")){for(j.removeClass(this.data.elem.lastChild,"dk-select-options-highlight"),y=0;y<h.length;y++){j.hasClass(h[y],"dk-option-highlight")&&(j.removeClass(h[y],"dk-option-highlight"),c=h[y])}}r=h.indexOf(c)+r,r>h.length-1?r=h.length-1:0>r&&(r=0),this.data.select.options[r].disabled||(this.reset(!0),this.select(r),this._scrollTo(r));break;case l.space:if(!this.isOpen){z.preventDefault(),this.open();break}case l.tab:case l.enter:for(r=0;r<h.length;r++){j.hasClass(h[r],"dk-option-highlight")&&this.select(r)}case l.esc:this.isOpen&&(z.preventDefault(),this.close())}},_searchOptions:function(l){var i,h=this,d=String.fromCharCode(l.keyCode||l.which),c=function(){h.data.searchTimeout&&clearTimeout(h.data.searchTimeout),h.data.searchTimeout=setTimeout(function(){h.data.searchString=""},1000)};this.data.searchString===f&&(this.data.searchString=""),c(),this.data.searchString+=d,i=this.search(this.data.searchString,this.data.settings.search),i.length&&(j.hasClass(i[0],"dk-option-disabled")||this.selectOne(i[0]))},_scrollTo:function(l){var d,c,a,h=this.data.elem.lastChild;return -1===l||"number"!=typeof l&&!l||!this.isOpen&&!this.multiple?!1:("number"==typeof l&&(l=this.item(l)),d=j.position(l,h).top,c=d-h.scrollTop,a=c+l.offsetHeight,void (a>h.offsetHeight?(d+=l.offsetHeight,h.scrollTop=d-h.offsetHeight):0>c&&(h.scrollTop=d)))}},g.build=function(B,c){var A,d,h,y=[],l={elem:null,options:[],selected:[]},z=function(E){var D,o,t,C,r=[];switch(E.nodeName){case"OPTION":D=j.create("li",{"class":"dk-option ","data-value":E.value,innerHTML:E.text,role:"option","aria-selected":"false",id:c+"-"+(E.id||E.value.replace(" ","-"))}),j.addClass(D,E.className),E.disabled&&(j.addClass(D,"dk-option-disabled"),D.setAttribute("aria-disabled","true")),E.hidden&&(j.addClass(D,"dk-option-hidden"),D.setAttribute("aria-hidden","true")),E.selected&&(j.addClass(D,"dk-option-selected"),D.setAttribute("aria-selected","true"),l.selected.push(D)),l.options.push(this.appendChild(D));break;case"OPTGROUP":for(o=j.create("li",{"class":"dk-optgroup"}),E.label&&o.appendChild(j.create("div",{"class":"dk-optgroup-label",innerHTML:E.label})),t=j.create("ul",{"class":"dk-optgroup-options"}),C=E.children.length;C--;r.unshift(E.children[C])){}r.forEach(z,t),this.appendChild(o).appendChild(t)}};for(l.elem=j.create("div",{"class":"dk-select"+(B.multiple?"-multi":"")}),d=j.create("ul",{"class":"dk-select-options",id:c+"-listbox",role:"listbox"}),B.disabled&&(j.addClass(l.elem,"dk-select-disabled"),l.elem.setAttribute("aria-disabled",!0)),l.elem.id=c+(B.id?"-"+B.id:""),j.addClass(l.elem,B.className),B.multiple?(l.elem.setAttribute("tabindex",B.getAttribute("tabindex")||"0"),d.setAttribute("aria-multiselectable","true")):(A=B.options[B.selectedIndex],l.elem.appendChild(j.create("div",{"class":"dk-selected "+A.className,tabindex:B.tabindex||0,innerHTML:A?A.text:"&nbsp;",id:c+"-combobox","aria-live":"assertive","aria-owns":d.id,role:"combobox"})),d.setAttribute("aria-expanded","false")),h=B.children.length;h--;y.unshift(B.children[h])){}return y.forEach(z,l.elem.appendChild(d)),l},g.onDocClick=function(d){var c,a;if(1!==d.target.nodeType){return !1}null!==(c=d.target.getAttribute("data-dkcacheid"))&&g.cache[c].focus();for(a in g.cache){j.closest(d.target,g.cache[a].data.elem)||a===c||g.cache[a].disabled||g.cache[a].close()}},v!==f&&(v.fn.dropkick=function(){var a=Array.prototype.slice.call(arguments);return v(this).each(function(){a[0]&&"object"!=typeof a[0]?"string"==typeof a[0]&&g.prototype[a[0]].apply(new g(this),a.slice(1)):new g(this,a[0]||{})})}),g});(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))}else{a(jQuery)}}}(function(f){var h=Array.prototype.slice;var g=Array.prototype.splice;var k={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:false,getWidthFrom:"",widthFromWrapper:true,responsiveWidth:false,zIndex:"auto"},j=f(window),a=f(document),e=[],b=j.height(),d=function(){var x=j.scrollTop(),o=a.height(),n=o-b,z=(x>n)?n-x:0;for(var u=0,r=e.length;u<r;u++){var q=e[u],m=q.stickyWrapper.offset().top,w=m-q.topSpacing-z;q.stickyWrapper.css("height",q.stickyElement.outerHeight());if(x<=w){if(q.currentTop!==null){q.stickyElement.css({width:"",position:"",top:"","z-index":""});q.stickyElement.parent().removeClass(q.className);q.stickyElement.trigger("sticky-end",[q]);q.currentTop=null}}else{var p=o-q.stickyElement.outerHeight()-q.topSpacing-q.bottomSpacing-x-z;if(p<0){p=p+q.topSpacing}else{p=q.topSpacing}if(q.currentTop!==p){var t;if(q.getWidthFrom){t=f(q.getWidthFrom).width()||null}else{if(q.widthFromWrapper){t=q.stickyWrapper.width()}}if(t==null){t=q.stickyElement.width()}q.stickyElement.css("width",t).css("position","fixed").css("top",p).css("z-index",q.zIndex);q.stickyElement.parent().addClass(q.className);if(q.currentTop===null){q.stickyElement.trigger("sticky-start",[q])}else{q.stickyElement.trigger("sticky-update",[q])}if(q.currentTop===q.topSpacing&&q.currentTop>p||q.currentTop===null&&p<q.topSpacing){q.stickyElement.trigger("sticky-bottom-reached",[q])}else{if(q.currentTop!==null&&p===q.topSpacing&&q.currentTop<p){q.stickyElement.trigger("sticky-bottom-unreached",[q])}}q.currentTop=p}var v=q.stickyWrapper.parent();var y=(q.stickyElement.offset().top+q.stickyElement.outerHeight()>=v.offset().top+v.outerHeight())&&(q.stickyElement.offset().top<=q.topSpacing);if(y){q.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index","")}else{q.stickyElement.css("position","fixed").css("top",p).css("bottom","").css("z-index",q.zIndex)}}}},i=function(){b=j.height();for(var m=0,p=e.length;m<p;m++){var n=e[m];var o=null;if(n.getWidthFrom){if(n.responsiveWidth){o=f(n.getWidthFrom).width()}}else{if(n.widthFromWrapper){o=n.stickyWrapper.width()}}if(o!=null){n.stickyElement.css("width",o)}}},c={init:function(l){var m=f.extend({},k,l);return this.each(function(){var o=f(this);var n=o.attr("id");var r=n?n+"-"+k.wrapperClassName:k.wrapperClassName;var q=f("<div></div>").attr("id",r).addClass(m.wrapperClassName);o.wrapAll(q);var p=o.parent();if(m.center){p.css({width:o.outerWidth(),marginLeft:"auto",marginRight:"auto"})}if(o.css("float")==="right"){o.css({"float":"none"}).parent().css({"float":"right"})}m.stickyElement=o;m.stickyWrapper=p;m.currentTop=null;e.push(m);c.setWrapperHeight(this);c.setupChangeListeners(this)})},setWrapperHeight:function(l){var m=f(l);var n=m.parent();if(n){n.css("height",m.outerHeight())}},setupChangeListeners:function(m){if(window.MutationObserver){var l=new window.MutationObserver(function(n){if(n[0].addedNodes.length||n[0].removedNodes.length){c.setWrapperHeight(m)}});l.observe(m,{subtree:true,childList:true})}else{m.addEventListener("DOMNodeInserted",function(){c.setWrapperHeight(m)},false);m.addEventListener("DOMNodeRemoved",function(){c.setWrapperHeight(m)},false)}},update:d,unstick:function(l){return this.each(function(){var m=this;var o=f(m);var p=-1;var n=e.length;while(n-->0){if(e[n].stickyElement.get(0)===m){g.call(e,n,1);p=n}}if(p!==-1){o.unwrap();o.css({width:"",position:"",top:"","float":"","z-index":""})}})}};if(window.addEventListener){window.addEventListener("scroll",d,false);window.addEventListener("resize",i,false)}else{if(window.attachEvent){window.attachEvent("onscroll",d);window.attachEvent("onresize",i)}}f.fn.sticky=function(l){if(c[l]){return c[l].apply(this,h.call(arguments,1))}else{if(typeof l==="object"||!l){return c.init.apply(this,arguments)}else{f.error("Method "+l+" does not exist on jQuery.sticky")}}};f.fn.unstick=function(l){if(c[l]){return c[l].apply(this,h.call(arguments,1))}else{if(typeof l==="object"||!l){return c.unstick.apply(this,arguments)}else{f.error("Method "+l+" does not exist on jQuery.sticky")}}};f(function(){setTimeout(d,0)})}));/*
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){function F(b){this._value=b}function G(h,i,j,k){var l,m,n=Math.pow(10,i);return m=(j(h*n)/n).toFixed(i),k&&(l=new RegExp("0{1,"+k+"}$"),m=m.replace(l,"")),m}function H(e,f,g){var h;return h=f.indexOf("$")>-1?J(e,f,g):f.indexOf("%")>-1?K(e,f,g):f.indexOf(":")>-1?L(e,f):y(e._value,f,g)}function I(n,o){var p,q,r,s,M,h=o,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],m=!1;if(o.indexOf(":")>-1){n._value=x(o)}else{if(o===u){n._value=0}else{for("."!==E[t].delimiters.decimal&&(o=o.replace(/\./g,"").replace(E[t].delimiters.decimal,".")),p=new RegExp("[^a-zA-Z]"+E[t].abbreviations.thousand+"(?:\\)|(\\"+E[t].currency.symbol+")?(?:\\))?)?$"),q=new RegExp("[^a-zA-Z]"+E[t].abbreviations.million+"(?:\\)|(\\"+E[t].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+E[t].abbreviations.billion+"(?:\\)|(\\"+E[t].currency.symbol+")?(?:\\))?)?$"),s=new RegExp("[^a-zA-Z]"+E[t].abbreviations.trillion+"(?:\\)|(\\"+E[t].currency.symbol+")?(?:\\))?)?$"),M=0;M<=l.length&&!(m=o.indexOf(l[M])>-1?Math.pow(1024,M+1):!1);M++){}n._value=(m?m:1)*(h.match(p)?Math.pow(10,3):1)*(h.match(q)?Math.pow(10,6):1)*(h.match(r)?Math.pow(10,9):1)*(h.match(s)?Math.pow(10,12):1)*(o.indexOf("%")>-1?0.01:1)*((o.split("-").length+Math.min(o.split("(").length-1,o.split(")").length-1))%2?1:-1)*Number(o.replace(/[^0-9\.]+/g,"")),n._value=m?Math.ceil(n._value):n._value}}return n._value}function J(l,m,n){var o,p,q=m.indexOf("$"),r=m.indexOf("("),i=m.indexOf("-"),k="";return m.indexOf(" $")>-1?(k=" ",m=m.replace(" $","")):m.indexOf("$ ")>-1?(k=" ",m=m.replace("$ ","")):m=m.replace("$",""),p=y(l._value,m,n),1>=q?p.indexOf("(")>-1||p.indexOf("-")>-1?(p=p.split(""),o=1,(r>q||i>q)&&(o=0),p.splice(o,0,E[t].currency.symbol+k),p=p.join("")):p=E[t].currency.symbol+k+p:p.indexOf(")")>-1?(p=p.split(""),p.splice(-1,0,k+E[t].currency.symbol),p=p.join("")):p=p+k+E[t].currency.symbol,p}function K(g,h,i){var j,k="",l=100*g._value;return h.indexOf(" %")>-1?(k=" ",h=h.replace(" %","")):h=h.replace("%",""),j=y(l,h,i),j.indexOf(")")>-1?(j=j.split(""),j.splice(-1,0,k+"%"),j=j.join("")):j=j+k+"%",j}function L(e){var f=Math.floor(e._value/60/60),g=Math.floor((e._value-60*f*60)/60),h=Math.round(e._value-60*f*60-60*g);return f+":"+(10>g?"0"+g:g)+":"+(10>h?"0"+h:h)}function x(d){var e=d.split(":"),f=0;return 3===e.length?(f+=60*Number(e[0])*60,f+=60*Number(e[1]),f+=Number(e[2])):2===e.length&&(f+=60*Number(e[0]),f+=Number(e[1])),Number(f)}function y(aa,ab,ac){var ad,ae,af,T,U,V,W=!1,X=!1,Y=!1,Z="",N=!1,O=!1,P=!1,Q=!1,R=!1,S="",b="",o=Math.abs(aa),p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],q="",M=!1;if(0===aa&&null!==u){return u}if(ab.indexOf("(")>-1?(W=!0,ab=ab.slice(1,-1)):ab.indexOf("+")>-1&&(X=!0,ab=ab.replace(/\+/g,"")),ab.indexOf("a")>-1&&(N=ab.indexOf("aK")>=0,O=ab.indexOf("aM")>=0,P=ab.indexOf("aB")>=0,Q=ab.indexOf("aT")>=0,R=N||O||P||Q,ab.indexOf(" a")>-1?(Z=" ",ab=ab.replace(" a","")):ab=ab.replace("a",""),o>=Math.pow(10,12)&&!R||Q?(Z+=E[t].abbreviations.trillion,aa/=Math.pow(10,12)):o<Math.pow(10,12)&&o>=Math.pow(10,9)&&!R||P?(Z+=E[t].abbreviations.billion,aa/=Math.pow(10,9)):o<Math.pow(10,9)&&o>=Math.pow(10,6)&&!R||O?(Z+=E[t].abbreviations.million,aa/=Math.pow(10,6)):(o<Math.pow(10,6)&&o>=Math.pow(10,3)&&!R||N)&&(Z+=E[t].abbreviations.thousand,aa/=Math.pow(10,3))),ab.indexOf("b")>-1){for(ab.indexOf(" b")>-1?(S=" ",ab=ab.replace(" b","")):ab=ab.replace("b",""),af=0;af<=p.length;af++){if(ad=Math.pow(1024,af),ae=Math.pow(1024,af+1),aa>=ad&&ae>aa){S+=p[af],ad>0&&(aa/=ad);break}}}return ab.indexOf("o")>-1&&(ab.indexOf(" o")>-1?(b=" ",ab=ab.replace(" o","")):ab=ab.replace("o",""),b+=E[t].ordinal(aa)),ab.indexOf("[.]")>-1&&(Y=!0,ab=ab.replace("[.]",".")),T=aa.toString().split(".")[0],U=ab.split(".")[1],V=ab.indexOf(","),U?(U.indexOf("[")>-1?(U=U.replace("]",""),U=U.split("["),q=G(aa,U[0].length+U[1].length,ac,U[1].length)):q=G(aa,U.length,ac),T=q.split(".")[0],q=q.split(".")[1].length?E[t].delimiters.decimal+q.split(".")[1]:"",Y&&0===Number(q.slice(1))&&(q="")):T=G(aa,null,ac),T.indexOf("-")>-1&&(T=T.slice(1),M=!0),V>-1&&(T=T.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+E[t].delimiters.thousands)),0===ab.indexOf(".")&&(T=""),(W&&M?"(":"")+(!W&&M?"-":"")+(!M&&X?"+":"")+T+q+(b?b:"")+(Z?Z:"")+(S?S:"")+(W&&M?")":"")}function z(c,d){E[c]=d}function A(c){var d=c.toString().split(".");return d.length<2?1:Math.pow(10,d[1].length)}function B(){var b=Array.prototype.slice.call(arguments);return b.reduce(function(e,f){var g=A(e),h=A(f);return g>h?g:h},-1/0)}var C,D="1.5.3",E={},t="en",u=null,v="0,0",w="undefined"!=typeof module&&module.exports;C=function(a){return C.isNumeral(a)?a=a.value():0===a||"undefined"==typeof a?a=0:Number(a)||(a=C.fn.unformat(a)),new F(Number(a))},C.version=D,C.isNumeral=function(a){return a instanceof F},C.language=function(c,d){if(!c){return t}if(c&&!d){if(!E[c]){throw new Error("Unknown language : "+c)}t=c}return(d||!E[c])&&z(c,d),C},C.languageData=function(b){if(!b){return E[t]}if(!E[b]){throw new Error("Unknown language : "+b)}return E[b]},C.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(c){var d=c%10;return 1===~~(c%100/10)?"th":1===d?"st":2===d?"nd":3===d?"rd":"th"},currency:{symbol:"$"}}),C.zeroFormat=function(b){u="string"==typeof b?b:null},C.defaultFormat=function(b){v="string"==typeof b?b:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(g,h){if(null===this||"undefined"==typeof this){throw new TypeError("Array.prototype.reduce called on null or undefined")}if("function"!=typeof g){throw new TypeError(g+" is not a function")}var i,j,k=this.length>>>0,l=!1;for(1<arguments.length&&(j=h,l=!0),i=0;k>i;++i){this.hasOwnProperty(i)&&(l?j=g(j,this[i],i,this):(j=this[i],l=!0))}if(!l){throw new TypeError("Reduce of empty array with no initial value")}return j}),C.fn=F.prototype={clone:function(){return C(this)},format:function(c,d){return H(this,c?c:v,void 0!==d?d:Math.round).toUpperCase()},unformat:function(b){return"[object Number]"===Object.prototype.toString.call(b)?b:I(this,b?b:v)},value:function(){return this._value},valueOf:function(){return this._value},set:function(b){return this._value=Number(b),this},add:function(d){function e(c,g){return c+f*g}var f=B.call(null,this._value,d);return this._value=[this._value,d].reduce(e,0)/f,this},subtract:function(d){function e(c,g){return c-f*g}var f=B.call(null,this._value,d);return this._value=[d].reduce(e,this._value*f)/f,this},multiply:function(c){function d(e,f){var g=B(e,f);return e*g*f*g/(g*g)}return this._value=[this._value,c].reduce(d,1),this},divide:function(c){function d(e,f){var g=B(e,f);return e*g/(f*g)}return this._value=[this._value,c].reduce(d),this},difference:function(b){return Math.abs(C(this._value).subtract(b).value())}},w&&(module.exports=C),"undefined"==typeof ender&&(this.numeral=C),"function"==typeof define&&define.amd&&define([],function(){return C})}).call(this);/* Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(f,g,h,i){var j=f(g);f.fn.lazyload=function(a){function b(){var k=0;d.each(function(){var l=f(this);if(!e.skip_invisible||l.is(":visible")){if(f.abovethetop(this,e)||f.leftofbegin(this,e)){}else{if(f.belowthefold(this,e)||f.rightoffold(this,e)){if(++k>e.failure_limit){return !1}}else{l.trigger("appear"),k=0}}}})}var c,d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:g,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return a&&(i!==a.failurelimit&&(a.failure_limit=a.failurelimit,delete a.failurelimit),i!==a.effectspeed&&(a.effect_speed=a.effectspeed,delete a.effectspeed),f.extend(e,a)),c=e.container===i||e.container===g?j:f(e.container),0===e.event.indexOf("scroll")&&c.bind(e.event,function(){return b()}),this.each(function(){var k=this,l=f(k);k.loaded=!1,(l.attr("src")===i||l.attr("src")===!1)&&l.is("img")&&l.attr("src",e.placeholder),l.one("appear",function(){if(!this.loaded){if(e.appear){var m=d.length;e.appear.call(k,m,e)}f("<img />").bind("load",function(){var o=l.attr("data-"+e.data_attribute);l.hide(),l.is("img")?l.attr("src",o):l.css("background-image","url('"+o+"')"),l[e.effect](e.effect_speed),k.loaded=!0;var p=f.grep(d,function(q){return !q.loaded});if(d=f(p),e.load){var n=d.length;e.load.call(k,n,e)}}).attr("src",l.attr("data-"+e.data_attribute))}}),0!==e.event.indexOf("scroll")&&l.bind(e.event,function(){k.loaded||l.trigger("appear")})}),j.bind("resize",function(){b()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&j.bind("pageshow",function(k){k.originalEvent&&k.originalEvent.persisted&&d.each(function(){f(this).trigger("appear")})}),f(h).ready(function(){b()}),this},f.belowthefold=function(d,a){var b;return b=a.container===i||a.container===g?(g.innerHeight?g.innerHeight:j.height())+j.scrollTop():f(a.container).offset().top+f(a.container).height(),b<=f(d).offset().top-a.threshold},f.rightoffold=function(d,a){var b;return b=a.container===i||a.container===g?j.width()+j.scrollLeft():f(a.container).offset().left+f(a.container).width(),b<=f(d).offset().left-a.threshold},f.abovethetop=function(d,a){var b;return b=a.container===i||a.container===g?j.scrollTop():f(a.container).offset().top,b>=f(d).offset().top+a.threshold+f(d).height()},f.leftofbegin=function(d,a){var b;return b=a.container===i||a.container===g?j.scrollLeft():f(a.container).offset().left,b>=f(d).offset().left+a.threshold+f(d).width()},f.inviewport=function(a,d){return !(f.rightoffold(a,d)||f.leftofbegin(a,d)||f.belowthefold(a,d)||f.abovethetop(a,d))},f.extend(f.expr[":"],{"below-the-fold":function(a){return f.belowthefold(a,{threshold:0})},"above-the-top":function(a){return !f.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return f.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return !f.rightoffold(a,{threshold:0})},"in-viewport":function(a){return f.inviewport(a,{threshold:0})},"above-the-fold":function(a){return !f.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return f.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return !f.rightoffold(a,{threshold:0})}})}(jQuery,window,document);(function(){function k(p,q,t){return p.call.apply(p.bind,arguments)}function l(p,q,t){if(!p){throw Error()}if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(v,u);return p.apply(q,v)}}return function(){return p.apply(q,arguments)}}function aC(p,q,t){aC=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?k:l;return aC.apply(null,arguments)}var aD=Date.now||function(){return +new Date};function m(p,q){this.a=p;this.m=q||p;this.c=this.m.document}var n=!!window.FontFace;function aE(p,q,t,u){q=p.c.createElement(q);if(t){for(var v in t){t.hasOwnProperty(v)&&("style"==v?q.style.cssText=t[v]:q.setAttribute(v,t[v]))}}u&&q.appendChild(p.c.createTextNode(u));return q}function aF(p,q,t){p=p.c.getElementsByTagName(q)[0];p||(p=document.documentElement);p.insertBefore(t,p.lastChild)}function aG(p){p.parentNode&&p.parentNode.removeChild(p)}function aH(p,q,t){q=q||[];t=t||[];for(var u=p.className.split(/\s+/),v=0;v<q.length;v+=1){for(var w=!1,y=0;y<u.length;y+=1){if(q[v]===u[y]){w=!0;break}}w||u.push(q[v])}q=[];for(v=0;v<u.length;v+=1){w=!1;for(y=0;y<t.length;y+=1){if(u[v]===t[y]){w=!0;break}}w||q.push(u[v])}p.className=q.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function aA(p,q){for(var t=p.className.split(/\s+/),u=0,v=t.length;u<v;u++){if(t[u]==q){return !0}}return !1}function aB(p){if("string"===typeof p.f){return p.f}var q=p.m.location.protocol;"about:"==q&&(q=p.a.location.protocol);return"https:"==q?"https:":"http:"}function o(p){return p.m.location.hostname||p.a.location.hostname}function at(q,t,u){function v(){p&&w&&y&&(p(z),p=null)}t=aE(q,"link",{rel:"stylesheet",href:t,media:"all"});var w=!1,y=!0,z=null,p=u||null;n?(t.onload=function(){w=!0;v()},t.onerror=function(){w=!0;z=Error("Stylesheet failed to load");v()}):setTimeout(function(){w=!0;v()},0);aF(q,"head",t)}function au(p,q,t,u){var v=p.c.getElementsByTagName("head")[0];if(v){var w=aE(p,"script",{src:q}),y=!1;w.onload=w.onreadystatechange=function(){y||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(y=!0,t&&t(null),w.onload=w.onreadystatechange=null,"HEAD"==w.parentNode.tagName&&v.removeChild(w))};v.appendChild(w);setTimeout(function(){y||(y=!0,t&&t(Error("Script load timeout")))},u||5000);return w}return null}function av(){this.a=0;this.c=null}function aw(p){p.a++;return function(){p.a--;ax(p)}}function ay(p,q){p.c=q;ax(p)}function ax(p){0==p.a&&p.c&&(p.c(),p.c=null)}function az(p){this.a=p||"-"}az.prototype.c=function(p){for(var q=[],t=0;t<arguments.length;t++){q.push(arguments[t].replace(/[\W_]+/g,"").toLowerCase())}return q.join(this.a)};function ak(p,q){this.c=p;this.f=4;this.a="n";var t=(q||"n4").match(/^([nio])([1-9])$/i);t&&(this.a=t[1],this.f=parseInt(t[2],10))}function r(p){return al(p)+" "+(p.f+"00")+" 300px "+am(p.c)}function am(p){var q=[];p=p.split(/,\s*/);for(var t=0;t<p.length;t++){var u=p[t].replace(/['"]/g,"");-1!=u.indexOf(" ")||/^\d/.test(u)?q.push("'"+u+"'"):q.push(u)}return q.join(",")}function an(p){return p.a+p.f}function al(p){var q="normal";"o"===p.a?q="oblique":"i"===p.a&&(q="italic");return q}function s(p){var q=4,t="n",u=null;p&&((u=p.match(/(normal|oblique|italic)/i))&&u[1]&&(t=u[1].substr(0,1).toLowerCase()),(u=p.match(/([1-9]00|normal|bold)/i))&&u[1]&&(/bold/i.test(u[1])?q=7:/[1-9]00/.test(u[1])&&(q=parseInt(u[1].substr(0,1),10))));return t+q}function c(p,q){this.c=p;this.f=p.m.document.documentElement;this.h=q;this.a=new az("-");this.j=!1!==q.events;this.g=!1!==q.classes}function d(p){p.g&&aH(p.f,[p.a.c("wf","loading")]);ao(p,"loading")}function ap(p){if(p.g){var q=aA(p.f,p.a.c("wf","active")),t=[],u=[p.a.c("wf","loading")];q||t.push(p.a.c("wf","inactive"));aH(p.f,t,u)}ao(p,"inactive")}function ao(p,q,t){if(p.j&&p.h[q]){if(t){p.h[q](t.c,an(t))}else{p.h[q]()}}}function e(){this.c={}}function f(p,q,t){var u=[],v;for(v in q){if(q.hasOwnProperty(v)){var w=p.c[v];w&&u.push(w(q[v],t))}}return u}function aq(p,q){this.c=p;this.f=q;this.a=aE(this.c,"span",{"aria-hidden":"true"},this.f)}function ar(p){aF(p.c,"body",p.a)}function ac(p){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+am(p.c)+";"+("font-style:"+al(p)+";font-weight:"+(p.f+"00")+";")}function ad(p,q,t,u,v,w){this.g=p;this.j=q;this.a=u;this.c=t;this.f=v||3000;this.h=w||void 0}ad.prototype.start=function(){var p=this.c.m.document,q=this,t=aD(),u=new Promise(function(y,z){function w(){aD()-t>=q.f?z():p.fonts.load(r(q.a),q.h).then(function(A){1<=A.length?y():setTimeout(w,25)},function(){z()})}w()}),v=new Promise(function(w,y){setTimeout(y,q.f)});Promise.race([v,u]).then(function(){q.g(q.a)},function(){q.j(q.a)})};function ae(p,q,t,u,v,w,y){this.v=p;this.B=q;this.c=t;this.a=u;this.s=y||"BESbswy";this.f={};this.w=v||3000;this.u=w||null;this.o=this.j=this.h=this.g=null;this.g=new aq(this.c,this.s);this.h=new aq(this.c,this.s);this.j=new aq(this.c,this.s);this.o=new aq(this.c,this.s);p=new ak(this.a.c+",serif",an(this.a));p=ac(p);this.g.a.style.cssText=p;p=new ak(this.a.c+",sans-serif",an(this.a));p=ac(p);this.h.a.style.cssText=p;p=new ak("serif",an(this.a));p=ac(p);this.j.a.style.cssText=p;p=new ak("sans-serif",an(this.a));p=ac(p);this.o.a.style.cssText=p;ar(this.g);ar(this.h);ar(this.j);ar(this.o)}var af={D:"serif",C:"sans-serif"},ag=null;function ah(){if(null===ag){var p=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ag=!!p&&(536>parseInt(p[1],10)||536===parseInt(p[1],10)&&11>=parseInt(p[2],10))}return ag}ae.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=aD();g(this)};function h(p,q,t){for(var u in af){if(af.hasOwnProperty(u)&&q===p.f[af[u]]&&t===p.f[af[u]]){return !0}}return !1}function g(p){var q=p.g.a.offsetWidth,t=p.h.a.offsetWidth,u;(u=q===p.f.serif&&t===p.f["sans-serif"])||(u=ah()&&h(p,q,t));u?aD()-p.A>=p.w?ah()&&h(p,q,t)&&(null===p.u||p.u.hasOwnProperty(p.a.c))?ai(p,p.v):ai(p,p.B):i(p):ai(p,p.v)}function i(p){setTimeout(aC(function(){g(this)},p),50)}function ai(p,q){setTimeout(aC(function(){aG(this.g.a);aG(this.h.a);aG(this.j.a);aG(this.o.a);q(this.a)},p),0)}function aj(p,q,t){this.c=p;this.a=q;this.f=0;this.o=this.j=!1;this.s=t}var x=null;aj.prototype.g=function(p){var q=this.a;q.g&&aH(q.f,[q.a.c("wf",p.c,an(p).toString(),"active")],[q.a.c("wf",p.c,an(p).toString(),"loading"),q.a.c("wf",p.c,an(p).toString(),"inactive")]);ao(q,"fontactive",p);this.o=!0;j(this)};aj.prototype.h=function(p){var q=this.a;if(q.g){var t=aA(q.f,q.a.c("wf",p.c,an(p).toString(),"active")),u=[],v=[q.a.c("wf",p.c,an(p).toString(),"loading")];t||u.push(q.a.c("wf",p.c,an(p).toString(),"inactive"));aH(q.f,u,v)}ao(q,"fontinactive",p);j(this)};function j(p){0==--p.f&&p.j&&(p.o?(p=p.a,p.g&&aH(p.f,[p.a.c("wf","active")],[p.a.c("wf","loading"),p.a.c("wf","inactive")]),ao(p,"active")):ap(p.a))}function aU(p){this.j=p;this.a=new e;this.h=0;this.f=this.g=!0}aU.prototype.load=function(p){this.c=new m(this.j,p.context||this.j);this.g=!1!==p.events;this.f=!1!==p.classes;aV(this,new c(this.c,p),p)};function aW(p,q,t,u,v){var w=0==--p.h;(p.f||p.g)&&setTimeout(function(){var E=v||null,A=u||null||{};if(0===t.length&&w){ap(q.a)}else{q.f+=t.length;w&&(q.j=w);var y,C=[];for(y=0;y<t.length;y++){var B=t[y],D=A[B.c],F=q.a,z=B;F.g&&aH(F.f,[F.a.c("wf",z.c,an(z).toString(),"loading")]);ao(F,"fontloading",z);F=null;null===x&&(x=window.FontFace?(z=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(z[1],10):!0:!1);x?F=new ad(aC(q.g,q),aC(q.h,q),q.c,B,q.s,D):F=new ae(aC(q.g,q),aC(q.h,q),q.c,B,q.s,E,D);C.push(F)}for(y=0;y<C.length;y++){C[y].start()}}},0)}function aV(p,q,t){var u=[],v=t.timeout;d(q);var u=f(p.a,t,p.c),w=new aj(p.c,q,v);p.h=u.length;q=0;for(t=u.length;q<t;q++){u[q].load(function(y,A,z){aW(p,w,y,A,z)})}}function aX(p,q){this.c=p;this.a=q}function aY(p,q,t){var u=aB(p.c);p=(p.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return u+"//"+p+"/"+q+".js"+(t?"?v="+t:"")}aX.prototype.load=function(p){function q(){if(w["__mti_fntLst"+u]){var A=w["__mti_fntLst"+u](),C=[],y;if(A){for(var B=0;B<A.length;B++){var z=A[B].fontfamily;void 0!=A[B].fontStyle&&void 0!=A[B].fontWeight?(y=A[B].fontStyle+A[B].fontWeight,C.push(new ak(z,y))):C.push(new ak(z))}}p(C)}else{setTimeout(function(){q()},50)}}var t=this,u=t.a.projectId,v=t.a.version;if(u){var w=t.c.m;au(this.c,aY(t,u,v),function(y){y?p([]):(w["__MonotypeConfiguration__"+u]=function(){return t.a},q())}).id="__MonotypeAPIScript__"+u}else{p([])}};function aZ(p,q){this.c=p;this.a=q}aZ.prototype.load=function(u){var v,w,y=this.a.urls||[],z=this.a.families||[],A=this.a.testStrings||{},B=new av;v=0;for(w=y.length;v<w;v++){at(this.c,y[v],aw(B))}var q=[];v=0;for(w=z.length;v<w;v++){if(y=z[v].split(":"),y[1]){for(var p=y[1].split(","),t=0;t<p.length;t+=1){q.push(new ak(y[0],p[t]))}}else{q.push(new ak(y[0]))}}ay(B,function(){u(q,A)})};function a(p,q,t){p?this.c=p:this.c=q+b;this.a=[];this.f=[];this.g=t||""}var b="//fonts.googleapis.com/css";function aR(p,q){for(var t=q.length,u=0;u<t;u++){var v=q[u].split(":");3==v.length&&p.f.push(v.pop());var w="";2==v.length&&""!=v[1]&&(w=":");p.a.push(v.join(w))}}function aS(p){if(0==p.a.length){throw Error("No fonts to load!")}if(-1!=p.c.indexOf("kit=")){return p.c}for(var q=p.a.length,t=[],u=0;u<q;u++){t.push(p.a[u].replace(/ /g,"+"))}q=p.c+"?family="+t.join("%7C");0<p.f.length&&(q+="&subset="+p.f.join(","));0<p.g.length&&(q+="&text="+encodeURIComponent(p.g));return q}function aT(p){this.f=p;this.a=[];this.c={}}var aK={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},aL={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},aM={i:"i",italic:"i",n:"n",normal:"n"},aN=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function aO(y){for(var z=y.f.length,A=0;A<z;A++){var B=y.f[A].split(":"),C=B[0].replace(/\+/g," "),D=["n4"];if(2<=B.length){var E;var t=B[1];E=[];if(t){for(var t=t.split(","),q=t.length,v=0;v<q;v++){var u;u=t[v];if(u.match(/^[\w-]+$/)){var w=aN.exec(u.toLowerCase());if(null==w){u=""}else{u=w[2];u=null==u||""==u?"n":aM[u];w=w[1];if(null==w||""==w){w="4"}else{var p=aL[w],w=p?p:isNaN(w)?"4":w.substr(0,1)}u=[u,w].join("")}}else{u=""}u&&E.push(u)}}0<E.length&&(D=E);3==B.length&&(B=B[2],E=[],B=B?B.split(","):E,0<B.length&&(B=aK[B[0]])&&(y.c[C]=B))}y.c[C]||(B=aK[C])&&(y.c[C]=B);for(B=0;B<D.length;B+=1){y.a.push(new ak(C,D[B]))}}}function aP(p,q){this.c=p;this.a=q}var aQ={Arimo:!0,Cousine:!0,Tinos:!0};aP.prototype.load=function(p){var q=new av,t=this.c,u=new a(this.a.api,aB(t),this.a.text),v=this.a.families;aR(u,v);var w=new aT(v);aO(w);at(t,aS(u),aw(q));ay(q,function(){p(w.a,w.c,aQ)})};function aI(p,q){this.c=p;this.a=q}aI.prototype.load=function(p){var q=this.a.id,t=this.c.m;q?au(this.c,(this.a.api||"https://use.typekit.net")+"/"+q+".js",function(y){if(y){p([])}else{if(t.Typekit&&t.Typekit.config&&t.Typekit.config.fn){y=t.Typekit.config.fn;for(var z=[],A=0;A<y.length;A+=2){for(var B=y[A],v=y[A+1],u=0;u<v.length;u++){z.push(new ak(B,v[u]))}}try{t.Typekit.load({events:!1,classes:!1,async:!0})}catch(w){}p(z)}}},2000):p([])};function aJ(p,q){this.c=p;this.f=q;this.a=[]}aJ.prototype.load=function(p){var q=this.f.id,t=this.c.m,u=this;q?(t.__webfontfontdeckmodule__||(t.__webfontfontdeckmodule__={}),t.__webfontfontdeckmodule__[q]=function(y,z){for(var w=0,A=z.fonts.length;w<A;++w){var v=z.fonts[w];u.a.push(new ak(v.name,s("font-weight:"+v.weight+";font-style:"+v.style)))}p(u.a)},au(this.c,aB(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+o(this.c)+"/"+q+".js",function(v){v&&p([])})):p([])};var aa=new aU(window);aa.a.c.custom=function(p,q){return new aZ(q,p)};aa.a.c.fontdeck=function(p,q){return new aJ(q,p)};aa.a.c.monotype=function(p,q){return new aX(q,p)};aa.a.c.typekit=function(p,q){return new aI(q,p)};aa.a.c.google=function(p,q){return new aP(q,p)};var ab={load:aC(aa.load,aa)};"function"===typeof define&&define.amd?define(function(){return ab}):"undefined"!==typeof module&&module.exports?module.exports=ab:(window.WebFont=ab,window.WebFontConfig&&aa.load(window.WebFontConfig))}());



var strHost = "http://profile.kenh14.vn";
var strMingAuthenUrl = "http://id.ming.vn/big4/request";
var Constants = {
    mingCheckSessionUrl: "http://vietid.net/login/Checksession",
    mingCommentHost: "http://comment.vietid.net",
    mingAppKey: "d9c694bd04eb35d96f1d71a84141d075",
    apiLiveDomain: "http://live.news.kenh14.vn",
    apiHandlerUrl: "http://s.kenh14.vn",
    host: "http://kenh14.vn",
    searchHost: "http://search.kenh14.vn",
    apiSignalRDomain: "http://sig.channelvn.net",
    videoHdDomain: "http://vcplayer.mediacdn.vn",
    videoStorage: "http://video-thumbs.mediacdn.vn"
};
var LC = readCookie("__RC") == 4 ? 1 : 2;

function readCookie(f) {
    var b = f + "=";
    var d, e = document.cookie.split(";");
    for (var a = 0; a < e.length; a++) {
        d = e[a];
        while (d.charAt(0) == " ") {
            d = d.substring(1, d.length)
        }
        if (d.indexOf(b) == 0) {
            return d.substring(b.length, d.length)
        }
    }
    return null
}

function createCookie(e, a, c) {
    if (c) {
        var d = new Date();
        d.setTime(d.getTime() + (c * 24 * 60 * 60 * 1000));
        var b = "; expires=" + d.toGMTString()
    } else {
        var b = ""
    }
    document.cookie = e + "=" + a + b + "; path=/"
}

function eraseCookie(a) {
    createCookie(a, "", -1)
}

function MingToolbarCallback(a) {
    if (typeof(Funny_LoginCallback) == "function") {
        Funny_LoginCallback(a)
    }
    if (typeof(getVoteStyle_LoginCallback) == "function") {
        getVoteStyle_LoginCallback()
    }
    if (typeof(Profile_LoginCallback) == "function") {
        Profile_LoginCallback()
    }
}
var mobileRedirect = {
    isDebug: false,
    init: function() {
        try {
            if (typeof(Storage) !== "undefined") {
                var a = sessionStorage.getItem("VisitSession");
                if (a == null) {
                    sessionStorage.setItem("VisitSession", "1");
                    var c = window.location.hash;
                    if (c === "#first") {
                        this.removeHash()
                    } else {
                        eraseCookie("browser");
                        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i) != null) {
                            window.location = window.location.href
                        }
                    }
                } else {}
            }
        } catch (b) {
            if (this.isDebug) {
                console.log(b)
            }
        }
    },
    removeHash: function() {
        window.history.replaceState("", "", window.location.href.split("#")[0])
    }
};

function isSmartPhone() {
    return (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i) != null)
}
var detectmob = function() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true
    } else {
        return false
    }
};

function getParameterByName(d, a) {
    if (!a) {
        a = window.location.href
    }
    d = d.replace(/[\[\]]/g, "\\$&");
    var b = new RegExp("[?&]" + d + "(=([^&#]*)|&|#|$)"),
        c = b.exec(a);
    if (!c) {
        return null
    }
    if (!c[2]) {
        return ""
    }
    return decodeURIComponent(c[2].replace(/\+/g, " "))
}
var fbClient = {
    version: "v2.3",
    appId: "1506977592847257",
    xfbml: true,
    status: true,
    likeCB: null,
    loaded: null,
    init: function() {
        var a = this;
        $(document).ready(function() {
            if ($("#fb-root").length === 0) {
                $("body").prepend('<div id="fb-root"></div>')
            }
            a.fbLoad("//connect.facebook.net/vi_VN/sdk.js", function() {
                FB.init({
                    appId: a.appId,
                    status: a.status,
                    xfbml: a.xfbml,
                    version: a.version
                });
                FB.Event.subscribe("xfbml.render", a.renderButton)
            })
        })
    },
    fbParse: function(b) {
        try {
            FB.XFBML.parse(b)
        } catch (a) {}
    },
    fbLoad: function(b, a) {
        a = (typeof a != "undefined") ? a : {};
        $.ajax({
            type: "GET",
            url: b,
            success: a,
            dataType: "script",
            cache: true
        })
    },
    getLikeShareCount: function(a, d, b, c) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://sharefb.cnnd.vn/?urls=" + a,
            success: function(e) {
                if ($(d) != null) {
                    $(d).html(e[0].share_count)
                }
                if ($(b) != null) {
                    $(b).html(e[0].like_count)
                }
                if ($(c) != null) {
                    $(c).html(e[0].total_count)
                }
            }
        })
    },
    shareClick: function(e) {
        var c = screen.width / 2 - 700 / 2;
        var d = screen.height / 2 - 450 / 2;
        var b = e != null ? e : document.location.href;
        var a = window.open("http://www.facebook.com/sharer.php?u=" + b, "chia sẻ", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=485, top=" + d + ", left=" + c);
        a.focus();
        return false
    },
    sendClick: function(b) {
        var a = b != null ? b : document.location.href;
        FB.ui({
            method: "send",
            link: a,
        });
        return false
    },
    fanpage: function() {
        setTimeout(function() {
            if (!$(".social-share .fb-like iframe").is(":visible")) {
                $(".social-share").remove()
            }
        }, 10000)
    },
    renderButton: function() {
        $(".k14-fb-like").remove();
        $(".btn-fb-send").remove();
        $(".fb-send").removeClass("hidden").show().parent(".fbSendWrap").children(':not(".fb-send")').remove();
        $(".fb-like").removeClass("hidden").show().parent(".fbLikeWrap").children(':not(".fb-like")').remove()
    },
    likeOnload: function(c, b, a) {
        $(c).css({
            display: "block",
            width: b,
            height: a
        })
    }
};
if (document.location.hostname.indexOf(".tk") > 0) {
    document.location = Constants.host
}
$(function() {
    $(".btn-faq-popup").fancybox({
        width: 1000,
        padding: 0
    });
    $(".btn-view-map").fancybox({
        width: 800,
        padding: 0
    })
});

function isElementVisible(f) {
    if (f == null) {
        return
    }
    var c = f.getBoundingClientRect(),
        d = window.innerHeight || doc.documentElement.clientHeight;
    var b = (c.top >= 0 && c.top <= d);
    var e = (c.bottom >= 0 && c.bottom <= d);
    var a = (c.bottom - (f.clientHeight - (f.clientHeight / 2)) >= 0 && c.bottom <= d);
    if (b && a) {
        return "play"
    } else {
        if (!b && !a) {
            return "pause"
        }
    }
    return ""
}
var videoHD = {
    typeAppend: 1,
    isMute: false,
    isSuggest: true,
    isAd: true,
    isHideControlbar: false,
    originDomain: "*",
    suggsetDomain: Constants.apiHandlerUrl + "/Handler/Video/ListVideoXML.ashx?watch=",
    divVideoFormat: '<div class="VCSortableInPreviewMode" type="VideoStream"></div>',
    divIfrWrapperFormat: '<div class="iframe-wraper"></div>',
    videoFormat: '<div class="iframe-wraper">{4}<iframe width="{0}" height="{1}" src="{2}" id="ifVideo-{3}" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" oallowfullscreen="" scrolling="no"></iframe></div>',
    bgFormat: '<div class="bg-wraper" style="background-image: url({0});"><div class="loading-vid-icon"><div class="lvc-label">{1}</div><div class="lvc-play-icon"></div></div><div class="loading-vid-countdown" style="display: none"><div class="lvc-label">{1}</div><div class="lvc-circle"></div><div class="lvc-line-mask"><div class="lvc-line"></div></div><span style="display: none;"class="lvc-number">3</span></div></div>',
    bgText: "Video tự động phát",
    bgPauseNotify: '<div class="pause-vd-notify" style="display: none;"><span class="clearfix"><svg width="9" height="12"><path d="M0,0V12H3V0ZM6,0V12H9V0Z"></path></svg>Video tạm dừng</span></div>',
    host: Constants.videoHdDomain + "/1.1/?_site=kenh14&vid=kenh14/",
    useBg: true,
    init: function(b, d) {
        var a = this;
        if (typeof(d) == "undefined") {
            d = {}
        }
        if (typeof(d.useBg) != "undefined") {
            a.useBg = d.useBg
        }
        var e;
        if (d.type) {
            e = a.getVideoType(d.type);
            if (e.playType == a.playType.clickToPlay || e.playType == a.playType.autoplay) {
                a.useBg = false
            }
        }
        if (d.isAd) {
            a.isAd = d.isAd
        }
        if (d.isHideControlbar) {
            a.isHideControlbar = d.isHideControlbar
        }
        if (detectmob() || !a.useBg) {
            a.bgPauseNotify = ""
        }
        var c = $(b).find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]');
        c.each(function(m, f) {
            var h = $(this);
            if (h.is(":visible")) {
                if (typeof(h.attr("id")) == "undefined") {
                    var n = m;
                    var g = "ifVideo-" + n;
                    while ($('iframe[id="' + g + '"]').length > 0) {
                        n = Math.floor((Math.random() * 1000) + 1);
                        g = "ifVideo-" + n
                    }
                    h.attr("id", g);
                    var j = h.attr("src");
                    j = a.genVideoSource(j, n, e);
                    if (j != "") {
                        h.attr("src", j.replace("https://", "http://"));
                        h.attr("playType", getParameterByName("playType", j));
                        if (a.useBg && !detectmob()) {
                            var o = h.parent();
                            if (!h.parent().hasClass("VCSortableInPreviewMode")) {
                                o = $(a.divVideoFormat);
                                h.after(o)
                            } else {
                                if (o.hasClass("VCSortableInPreviewMode") && o.attr("type") == "insertembedcode") {
                                    o.attr("type", "VideoStream")
                                }
                            }
                            var i = $(a.divIfrWrapperFormat);
                            o.append(i);
                            o.addClass("pos-rlt");
                            o.find(".iframe-wraper").append(a.bgPauseNotify);
                            o.find(".iframe-wraper").append(h);
                            var k = Constants.videoStorage + "/thumb_w/650/" + getParameterByName("vid", j).toLowerCase().replace(".mp4", ".jpg").replace(".flv", ".jpg");
                            var l = String.format(a.bgFormat, k, a.bgText);
                            o.append(l);
                            o.find(".bg-wraper").height(o.find("iframe").height())
                        }
                    }
                }
            }
        });
        $(b).find(".VCSortableInPreviewMode[type=VideoStream]").each(function() {
            var n = $(this);
            if (n.find("iframe").length == 0) {
                var h = n.attr("data-width");
                var i = n.attr("data-height");
                var f = n.attr("data-src");
                var g = n.attr("videoid");
                var m = "ifVideo-" + g;
                while ($('iframe[id="' + m + '"]').length > 0) {
                    g = Math.floor((Math.random() * 1000) + 1);
                    m = "ifVideo-" + g
                }
                n.attr("videoid", g);
                f = a.genVideoSource(f, g, e);
                if (f != "") {
                    var k = String.format(a.videoFormat, h, i, f, g, a.bgPauseNotify);
                    n.find('>div[videoid="' + g + '"]').remove();
                    n.css("text-align", "center");
                    var j = Constants.videoStorage + "/thumb_w/650/" + getParameterByName("vid", f).toLowerCase().replace(".mp4", ".jpg").replace(".flv", ".jpg");
                    var l = String.format(a.bgFormat, j, a.bgText);
                    n.addClass("pos-rlt");
                    if (a.typeAppend === 0) {
                        n.append(k);
                        if (a.useBg && !detectmob()) {
                            n.append(l)
                        }
                    } else {
                        n.prepend(k);
                        if (a.useBg && !detectmob()) {
                            n.prepend(l)
                        }
                    }
                    n.find("iframe").attr("playType", getParameterByName("playType", f))
                }
            }
        });
        $(b).find(".VCSortableInPreviewMode[type=VideoStream] .bg-wraper").each(function() {
            var f = $(this);
            f.click(function() {
                var g = f.parents(".VCSortableInPreviewMode");
                admPlayNow(g)
            })
        })
    },
    buildEmbedVideo: function(c, d, i, a, h, f) {
        var g = this;
        var e = g.host + a;
        e += "&_info=" + h;
        var b = "0;0;0;0";
        if (typeof admParamTvc === "function") {
            b = admParamTvc(0)
        }
        e += "&_admParamTvc=" + b;
        if (f) {
            e += "&autoplay=" + f
        }
        if (g.isSuggest) {
            e += "&_listsuggest=" + g.suggsetDomain + i
        }
        return String.format(g.videoFormat, c, d, e, i, g.bgPauseNotify)
    },
    videoFunction: function(c, d) {
        var a = this;
        var b;
        switch (d) {
            case "play":
                b = {
                    action: "play"
                };
                $(c).get(0).contentWindow.postMessage(b, a.originDomain);
                break;
            case "pause":
                b = {
                    action: "pause"
                };
                $(c).get(0).contentWindow.postMessage(b, a.originDomain);
                break
        }
    },
    listFocus: function(b, j, a, c) {
        var f = this;
        if ($(b).hasClass("playing")) {
            return
        }
        $(b).parent().find("li").removeClass("playing");
        $(b).addClass("playing");
        var i = $(b).attr("data-id");
        var d = $(b).attr("data-filename");
        var g = $(b).attr("data-key");
        var e = f.buildEmbedVideo(j, a, i, d, g, true);
        if (c != null) {
            $(c).html(e)
        } else {
            $("#video-player-wrapt").html(e)
        }
    },
    genVideoSource: function(b, c, e) {
        if (b == "undefined" || b == null) {
            return ""
        }
        var a = this;
        if (e) {
            if (b.indexOf("mute") < 0) {
                b += "&mute=" + e.isMute
            }
            if (b.indexOf("vtype") < 0) {
                b += "&vtype=" + e.vtype
            }
            if (b.indexOf("playType") < 0) {
                b += "&playType=" + e.playType
            }
            if (e.playType == a.playType.autoplay) {
                b += "&autoplay=true"
            }
        }
        b = b.replace("&amp;", "&").replace("_tag=http://vscc.hosting.vcmedia.vn/tag/", "_info=");
        var d = "0;0;0;0";
        if (typeof admParamTvc === "function") {
            d = admParamTvc(0)
        }
        b += "&_admParamTvc=" + d;
        if (a.isSuggest) {
            b += "&_listsuggest=" + a.suggsetDomain + c
        }
        if (a.isHideControlbar) {
            b += "&_controlbar=hide"
        }
        if (b.indexOf("postroll") < 0) {
            b += "&postroll=true"
        }
        if (b.indexOf("replay") < 0) {
            b += "&replay=true"
        }
        if (b.indexOf("nonVol") < 0) {
            b += "&nonVol=true"
        }
        if (b.indexOf("volume") < 0) {
            b += "&volume=0.6"
        }
        b += "&boxVideoID=ifVideo-" + c;
        if (detectmob()) {
            b = b.replace("&nopre=true", "");
            b = b.replace("&midroll=0.8;20s", "")
        } else {
            if (b.indexOf("nopre") < 0) {
                b += "&nopre=true"
            }
            if (!a.isAd) {
                b += "&tag=0";
                b = b.replace("&midroll=0.8;20s", "")
            } else {
                if (b.indexOf("midroll") < 0) {
                    b += "&midroll=0.8;20s"
                }
            }
        }
        return b
    },
    playType: {
        viewable: 0,
        autoplay: 1,
        clickToPlay: 2
    },
    videoType: {
        newsDetail: 1,
        stream: 2,
        videoDetail: 3,
        boxVideo: 4,
        newsBottom: 5,
        boxMutex: 6,
        clickToPlay: 7,
        zoneVideo: 8
    },
    getVideoType: function(b) {
        var a = this;
        switch (b) {
            case 1:
                return {
                    vtype: "1",
                    position: "bài chi tiết",
                    playType: a.playType.viewable,
                    isMute: false,
                    note: ""
                };
                break;
            case 2:
                return {
                    vtype: "2",
                    position: "stream",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: ""
                };
                break;
            case 3:
                return {
                    vtype: "3",
                    position: "video chi tiết",
                    playType: a.playType.autoplay,
                    isMute: false,
                    note: ""
                };
                break;
            case 4:
                return {
                    vtype: "4",
                    position: "box cắt ngang",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: "unmute khi mở popup"
                };
                break;
            case 5:
                return {
                    vtype: "5",
                    position: "video chân bài",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: "unmute khi mở popup"
                };
                break;
            case 6:
                return {
                    vtype: "6",
                    position: "box mutex",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: ""
                };
                break;
            case 7:
                return {
                    vtype: "7",
                    position: "video ấn mới chạy",
                    playType: a.playType.clickToPlay,
                    isMute: false,
                    note: ""
                };
                break;
            case 8:
                return {
                    vtype: "8",
                    position: "chuyên mục video",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: ""
                };
                break;
            default:
                return {
                    vtype: "2",
                    position: "stream",
                    playType: a.playType.viewable,
                    isMute: true,
                    note: ""
                };
                break
        }
    }
};

function admPlayNow(b) {
    var c = $(b);
    var a = c.find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]');
    if ($.inArray("#" + a.attr("id"), readyVideoIds) >= 0) {
        videoInContent.playVideo(a)
    } else {
        waitingVideoIdForReady.push("#" + a.attr("id"))
    }
    c.find(".bg-wraper").hide()
}
var videoIframe = {
    arrIframe: [],
    originDomain: "*",
    rangerPixel: 40,
    fraction: 0.6,
    videoDomain: "https://vscc-kenh14-hosting.vcmedia.vn",
    timeOut: null,
    init: function(b) {
        var a = this;
        a.pushArrIframe(b);
        $(window).scroll(function() {
            var l = $(this).scrollTop();
            for (var n = 0; n < a.arrIframe.length; n++) {
                var o = $(a.arrIframe[n]);
                var d = o.offset().left,
                    e = o.offset().top,
                    p = o.width(),
                    c = o.height(),
                    k = d + p,
                    j = e + c,
                    g, f, m;
                g = Math.max(0, Math.min(p, window.pageXOffset + window.innerWidth - d, k - window.pageXOffset));
                f = Math.max(0, Math.min(c, l + window.innerHeight - e, j - l));
                m = f / c;
                if (m > a.fraction) {
                    if (!o.hasClass("play")) {
                        o.addClass("play");
                        a.videoFunction(o, "showSpin")
                    }
                } else {
                    if (o.attr("data-layout") != "first-scroll") {
                        o.removeClass("play");
                        a.videoFunction(o, "showNote")
                    }
                }
            }
        })
    },
    pushArrIframe: function(b) {
        var a = this;
        a.arrIframe = [];
        $(b).find('iframe[src*="vcmedia.vn"][data-layout="scroll"],[src*="vcmedia.vn"][data-layout="trailer"],[src*="vcmedia.vn"][data-layout="first-scroll"]').each(function() {
            a.arrIframe.push($(this))
        })
    },
    videoFunction: function(b, c) {
        var a = this;
        switch (c) {
            case "showSpin":
                $(b).get(0).contentWindow.postMessage("showSpin()", a.originDomain);
                break;
            case "showNote":
                $(b).get(0).contentWindow.postMessage("showNote()", a.originDomain);
                break;
            case "playVideo":
                $(b).get(0).contentWindow.postMessage("playVideo()", a.originDomain);
                break;
            case "pauseVideo":
                $(b).get(0).contentWindow.postMessage("pauseVideo()", a.originDomain);
                break
        }
    },
    openPopup: function(o, m, n) {
        var b = this;
        if ($(".video-zoom-wrap").length > 0) {
            $(".video-zoom-wrap").remove()
        }
        b.videoFunction($("#" + o), "pauseVideo");
        var h = 720;
        var c = window.innerWidth;
        var s = window.innerHeight;
        var j = 150;
        var d = $(document).scrollTop();
        var l = c < h ? c - j : h;
        var g = Math.round(l * 9 / 16);
        var q = (c - l) / 2;
        var k = (s - g) / 2;
        var a = String.format('<iframe style="opacity:0" width="{0}" height="{1}" src="{3}/embed/{2}?autostart=true" frameborder="0" scrolling="no" allowfullscreen=""></iframe>', l, g, n, b.videoDomain);
        m = String.format('<img style="width:200px;height:100px;margin-top:{0}px;margin-left:{1}px" src="' + m + '" alt="" />', (g - 100) / 2, (l - 200) / 2);
        var f = l / 200;
        var r = '<div class="video-zoom-wrap">' + m + '<div class="video-zoom-overlay"></div></div>';
        var e = $("#" + o).parent("div");
        e.css("position", "relative").append(r);
        $("body").css("overflow-x", "hidden");
        var p = (0 - e.offset().left) + (c - l) / 2;
        var i = (d - e.offset().top) + (s - g) / 2;
        $(".video-zoom-overlay").css("opacity", "1");
        $(".video-zoom-overlay").css({
            width: c,
            height: s,
            left: "-" + (e.offset().left + p) + "px",
            top: "-" + k + "px"
        });
        $(".video-zoom-wrap").find("img").css("transform", "scale(" + f + ")");
        $(".video-zoom-wrap").append(a);
        setTimeout(function() {
            $(".video-zoom-wrap img").hide();
            $(".video-zoom-wrap iframe").css("opacity", "1")
        }, 300);
        $(".video-zoom-wrap").css("transform", "translate(" + p + "px, " + i + "px) translateZ(0px)");
        $(".video-zoom-overlay").click(function() {
            b.closePopup(o);
            return false
        });
        $(window).scroll(function() {
            b.closePopup(o)
        })
    },
    closePopup: function(b) {
        var a = this;
        if ($(".video-zoom-wrap").length > 0) {
            $("body").css("overflow-x", "auto");
            var c = $(".video-zoom-wrap");
            $(".video-zoom-overlay").css("opacity", "0");
            $(".video-zoom-wrap iframe").hide();
            $(".video-zoom-wrap img").show();
            setTimeout(function() {
                $(".video-zoom-wrap img").css("transform", "scale(1)");
                c.css("transform", "translate(0px, 0px) translateZ(0px)")
            }, 100);
            setTimeout(function() {
                c.remove();
                a.videoFunction($("#" + b), "showSpin")
            }, 300)
        }
    },
    supportTransition: function() {
        var a = document.body || document.documentElement,
            c = a.style,
            b = c.transition !== undefined || c.WebkitTransition !== undefined || c.MozTransition !== undefined || c.MsTransition !== undefined || c.OTransition !== undefined;
        return b
    },
    tabActive: function() {
        var a = this;
        var c = $('iframe[src*="vcmedia.vn"][src*="autoSpin=true"][data-layout="first-scroll"], [src*="vcmedia.vn"][src*="autoSpin=true"][data-layout="scroll"]');
        if (c.length > 0) {
            var b = (function() {
                var e, f, d = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange"
                };
                for (e in d) {
                    if (e in document) {
                        f = d[e];
                        break
                    }
                }
                return function(g) {
                    if (g) {
                        document.addEventListener(f, g)
                    }
                    return !document[e]
                }
            })();
            b(function() {
                if (b()) {
                    c.get(0).contentWindow.postMessage("FocusTab(true)", a.originDomain)
                } else {
                    c.get(0).contentWindow.postMessage("FocusTab(false)", a.originDomain)
                }
            });
            if (b()) {
                a.timeOut = setInterval(function() {
                    c.get(0).contentWindow.postMessage("FocusTab(true)", a.originDomain)
                }, 500)
            } else {
                c.get(0).contentWindow.postMessage("FocusTab(false)", a.originDomain)
            }
        }
    },
    clearFocus: function() {
        clearInterval(this.timeOut)
    }
};
window.addEventListener ? window.addEventListener("message", function(a) {
    listenPlayer(a)
}, !1) : window.attachEvent && window.attachEvent("onmessage", function(a) {
    listenPlayer(a)
});
var waitingVideoIdForReady = [];
var readyVideoIds = [];

function listenPlayer(a) {
    if (-1 != a.origin.indexOf("vcplayer.vcmedia.vn") || -1 != a.origin.indexOf("123.31.11.105") || -1 != a.origin.indexOf("vcplayer.mediacdn.vn")) {
        if ("object" == typeof a.data) {
            if (typeof(a.data.method) != "undefined") {
                switch (a.data.method) {
                    case "currentTime":
                        if (typeof(a.data.rid) === "object") {
                            videoInContent.seekCurrentTime(a.data.rid.id, a.data.data)
                        } else {
                            videoInContent.setCurrentTime(a.data.rid, a.data.data)
                        }
                        break
                }
            } else {
                if (typeof(a.data.event) != "undefined") {
                    switch (a.data.event) {
                        case "canplaythrough":
                            $("#" + a.data.boxVideoID).parent().show();
                            break
                    }
                } else {
                    if (typeof(a.data.action) != "undefined") {
                        switch (a.data.action) {
                            case "ready":
                                var c = "#" + a.data.boxVideoID;
                                readyVideoIds.push(c);
                                if (waitingVideoIdForReady.length > 0) {
                                    if ($.inArray(c, waitingVideoIdForReady) >= 0) {
                                        videoInContent.playVideo(c);
                                        waitingVideoIdForReady.splice($.inArray(c, waitingVideoIdForReady), 1)
                                    }
                                }
                                break
                        }
                    }
                }
            }
        }
    }
}
if (!windowPrototype) {
    var windowPrototype = {
            wdHeight: function() {
                var b;
                "number" == typeof window.innerWidth ? b = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? b = document.documentElement.clientHeight : document.body && document.body.clientHeight && (b = document.body.clientHeight);
                return b
            },
            wdWidth: function() {
                var b;
                "number" == typeof window.innerWidth ? b = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? b = document.documentElement.clientWidth : document.body && document.body.clientWidth && (b = document.body.clientWidth);
                return b
            }
        },
        Browser = {
            Version: function() {
                var b = 999; - 1 != navigator.appVersion.indexOf("MSIE") && (b = parseFloat(navigator.appVersion.split("MSIE")[1]));
                return b
            }
        },
        browserVersion = Browser.Version(),
        admwdHeight = parseInt(windowPrototype.wdHeight())
}
if (typeof(getElementTop) == "undefined") {
    var getElementTop = function(b) {
        if (document.getElementById) {
            var a = document.getElementById(b)
        } else {
            if (document.all) {
                var a = document.all[b]
            }
        }
        if (a != null) {
            yPos = a.offsetTop;
            tempEl = a.offsetParent;
            while (tempEl != null) {
                yPos += tempEl.offsetTop;
                tempEl = tempEl.offsetParent
            }
            return yPos
        } else {
            return 0
        }
    }
}

function getScrollTop() {
    var a = document.body.scrollTop;
    if (a == 0) {
        if (window.pageYOffset) {
            a = window.pageYOffset
        } else {
            a = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0
        }
    }
    return a
}
var currentTimingVideo = null;

function admPlayProgress(a) {
    var b = 3;
    var e = $(a);
    if (currentTimingVideo != e && currentTimingVideo != null) {
        currentTimingVideo.find(".bg-wraper").hide()
    }
    currentTimingVideo = e;
    var c = e.find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]');
    if (e.find(".bg-wraper").length > 0) {
        e.find(".loading-vid-countdown").fadeIn(1500);
        e.find(".loading-vid-countdown").addClass("quickspin");
        e.find(".bg-wraper").addClass("bgPoster");
        if (detectmob()) {
            setTimeout(function() {
                if ($.inArray("#" + c.attr("id"), readyVideoIds) >= 0) {
                    videoInContent.playVideo(c)
                } else {
                    waitingVideoIdForReady.push("#" + c.attr("id"))
                }
                e.find(".bg-wraper").hide()
            }, 1000)
        } else {
            e.find(".lvc-label").show();
            e.find(".lvc-number").show();
            var d = setInterval(function() {
                if (b == 2) {
                    if ($.inArray("#" + c.attr("id"), readyVideoIds) >= 0) {
                        videoInContent.playVideo(c)
                    } else {
                        waitingVideoIdForReady.push("#" + c.attr("id"))
                    }
                }
                if (b > 0) {
                    e.find(".lvc-number").html(b)
                } else {
                    clearInterval(d);
                    e.find(".bg-wraper").hide()
                }
                b = b - 1
            }, 500)
        }
    } else {
        if ($.inArray("#" + c.attr("id"), readyVideoIds) >= 0) {
            videoInContent.playVideo(c)
        } else {
            waitingVideoIdForReady.push("#" + c.attr("id"))
        }
    }
}
var videoInContent = {
    isFullscreen: false,
    init: function(b) {
        if (detectmob()) {
            return
        }
        var a = this;
        var c = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";
        $(document).on(c, function() {
            a.changeIsFullscreen()
        });
        var d = $(b).find('iframe[src*="vcplayer.vcmedia.vn"][playType=0], iframe[src*="123.31.11.105"][playType=0], iframe[src*="vcplayer.mediacdn.vn"][playType=0]');
        d.each(function(i, e) {
            var j = $(this);
            var g = false,
                h = true;
            var f;
            $(window).scroll(function(k) {
                if (f) {
                    window.clearTimeout(f);
                    f = null
                }
                var m = j.parents(".VCSortableInPreviewMode");
                var l = isElementVisible(document.getElementById(j.attr("id")));
                if (l == "play") {
                    if (!g && !a.isFullscreen) {
                        if (h) {
                            h = false;
                            setTimeout(function() {
                                m.find(".loading-vid-icon").hide();
                                admPlayProgress(m)
                            }, 300)
                        } else {
                            if ($.inArray("#" + j.attr("id"), readyVideoIds) >= 0) {
                                a.playVideo(j)
                            } else {
                                waitingVideoIdForReady.push("#" + j.attr("id"))
                            }
                        }
                        g = true
                    }
                } else {
                    if (l == "pause") {
                        clearTimeout(f);
                        setTimeout(function() {
                            if (g && !a.isFullscreen) {
                                a.stopVideo(j);
                                g = false;
                                h = false
                            }
                        }, 0)
                    }
                }
            })
        })
    },
    playVideo: function(g) {
        var f = this;
        var e = $(g);
        f.stopAllVideo();
        var a = isElementVisible(document.getElementById(e.attr("id")));
        if (a == "play") {
            var c = e.attr("id");
            e.parents(".VCSortableInPreviewMode").find(".pause-vd-notify").hide();
            var b = document.getElementById(c);
            if (b) {
                var d = {
                    action: "request",
                    method: "play"
                };
                if (b.contentWindow) {
                    b.contentWindow.postMessage(d, "*")
                }
            }
        }
    },
    stopVideo: function(a) {
        var c = $(a);
        c.parents(".VCSortableInPreviewMode").find(".pause-vd-notify").show();
        var d = c.attr("id");
        var e = document.getElementById(d);
        if (e) {
            var b = {
                action: "request",
                method: "pause"
            };
            if (e.contentWindow) {
                e.contentWindow.postMessage(b, "*")
            }
        }
    },
    hideControlBar: function(a) {
        var c = $(a);
        var d = c.attr("id");
        var e = document.getElementById(d);
        if (e) {
            var b = 'admReviceMessageToPlayer("hidecontrolbar")';
            if (e.contentWindow) {
                e.contentWindow.postMessage(b, "*")
            }
        }
    },
    getCurrentTime: function(f, d) {
        var e = $(f);
        var c = e.attr("id");
        var b = document.getElementById(c);
        if (b) {
            var a = {
                action: "request",
                method: "currentTime",
                cid: d
            };
            if (b.contentWindow) {
                b.contentWindow.postMessage(a, "*")
            }
        }
    },
    setCurrentTime: function(a, b) {
        var c = $(a);
        c.attr("src", c.attr("src") + "&currentTime=" + b);
        waitingVideoIdForReady.push("#" + c.attr("id"))
    },
    seekCurrentTime: function(g, d) {
        var f = this;
        var e = $(g);
        var c = e.attr("id");
        var b = document.getElementById(c);
        if (b) {
            var a = {
                action: "request",
                method: "currentTime",
                args: [d]
            };
            if (b.contentWindow) {
                b.contentWindow.postMessage(a, "*")
            }
        }
        setTimeout(function() {
            f.playVideo(g)
        }, 100)
    },
    stopAllVideo: function() {
        var a = this;
        $('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]').each(function() {
            var b = $(this);
            a.stopVideo("#" + b.attr("id"))
        })
    },
    changeIsFullscreen: function() {
        var a = this;
        a.isFullscreen = !a.isFullscreen
    }
};
var videoInStream = {
    isFullscreen: false,
    init: function(b) {
        var a = this;
        var c = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";
        $(document).on(c, function() {
            a.changeIsFullscreen()
        });
        var d = $(b).find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]');
        d.each(function(i, e) {
            var j = $(this);
            var g = false,
                h = true;
            var f;
            $(window).scroll(function(n) {
                if (f) {
                    window.clearTimeout(f);
                    f = null
                }
                var l = $(window).scrollTop();
                var m = j.offset().top;
                var k = j.outerHeight();
                if (l >= m - k && l < m) {
                    f = setTimeout(function() {
                        if (!g && !a.isFullscreen) {
                            videoInContent.playVideo(j);
                            g = true
                        }
                    }, 0)
                } else {
                    clearTimeout(f);
                    setTimeout(function() {
                        if ((g || h) && !a.isFullscreen) {
                            videoInContent.stopVideo(j);
                            g = false;
                            h = false
                        }
                    }, 0)
                }
            })
        })
    },
    changeIsFullscreen: function() {
        var a = this;
        a.isFullscreen = !a.isFullscreen
    }
};
WebFont.load({
    custom: {
        families: ["SFD-Bold"]
    }
});

function formatNewsType() {
    var a = $("a[rel*='type']");
    $.each(a, function(d, b) {
        var e = $(b).attr("type");
        var c = $(b).attr("newsid");
        if (e == 92) {
            $(b).css("position", "relative");
            $(b).append('<span class="iconwesend"></span>')
        } else {
            if (e == 10) {
                fotmatLiveType(b, c)
            } else {
                if (e == 11) {
                    fotmatLiveSportType(b, c)
                } else {
                    if (e == 95) {
                        fotmatBigMagazine(b, c)
                    }
                }
            }
        }
    })
}

function builtLinkMagazine(a) {
    return "/magazine/" + a + ".chn"
}

function returnFC(e) {
    eval(e.data)
}
var CssUpdate = {
    fancyActive: function(a) {
        $.fancybox.close()
    }
};

function fotmatBigMagazine(a, b) {
    if (window.addEventListener) {
        window.addEventListener("message", function(c) {
            returnFC(c)
        }, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onmessage", function(c) {
                returnFC(c)
            })
        }
    }
    $(a).addClass("fancybox.iframe");
    $(a).attr("href", "javascript:;");
    $(a).attr("onclick", "openMagazine(this,'" + b + "')")
}

function openMagazine(a, b) {
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/BigMagazine/GetData.ashx",
        data: ({
            newsid: b,
            c: "getmagazineid"
        }),
        dataType: "json",
        type: "GET",
        success: function(c) {
            if (c.Success) {
                $(a).attr("href", builtLinkMagazine(c.Data.Value));
                $.fancybox.open($(a), {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    fitToView: true,
                    width: "100%",
                    height: "100%",
                    autoSize: true,
                    padding: 0,
                    margin: 0,
                    beforeShow: function() {
                        $(".fancybox-wrap").addClass("popup-mag")
                    },
                    beforeClose: function() {
                        $(".fancybox-wrap").addClass("popup-mag-close");
                        $(a).fancybox({
                            maxWidth: "100%",
                            maxHeight: "100%",
                            fitToView: true,
                            width: "100%",
                            height: "100%",
                            autoSize: true,
                            padding: 0,
                            margin: 0,
                            beforeShow: function() {
                                $(".fancybox-wrap").addClass("popup-mag")
                            },
                            beforeClose: function() {
                                $(".fancybox-wrap").addClass("popup-mag-close")
                            },
                            helpers: {
                                overlay: {
                                    showEarly: false
                                }
                            },
                            iframe: {
                                scrolling: "auto",
                                preload: false
                            }
                        })
                    },
                    helpers: {
                        title: null,
                        overlay: {
                            showEarly: false
                        }
                    },
                    iframe: {
                        scrolling: "auto",
                        preload: false
                    }
                })
            }
        }
    })
}

function fotmatLiveSportType(a, b) {
    $.ajax({
        url: Constants.apiLiveDomain + "/Handler/Detail/LiveSport.ashx",
        data: ({
            newsid: b
        }),
        dataType: "json",
        type: "GET",
        success: function(c) {
            if (c != null && c.Success) {
                if (!c.Data.MatchFinished) {
                    $(a).addClass("livenews-type")
                }
            }
        }
    })
}

function fotmatLiveType(a, b) {
    $.ajax({
        url: Constants.apiLiveDomain + "/Handler/Detail/Live.ashx",
        data: ({
            c: "getall",
            newsid: b
        }),
        dataType: "json",
        type: "GET",
        success: function(c) {
            if (c != null && c.Success) {
                if (c.Data.Status == 1) {
                    $(a).addClass("livenews-type")
                }
            }
        }
    })
}

function GetValue() {
    var e = $("#fDay").val();
    var c = $("#fMonth").val();
    if (e == "00" || c == "00") {
        alert("Bạn chưa chọn ngày tháng.");
        return false
    }
    var b = $("#fYear").val();
    var f = $("#CurrenTab").val();
    if (f != null || f != "") {
        var d;
        window.location.href = "/" + f + "/" + e + "-" + c + "-" + b + ".chn"
    }
    return false
}

function UnicodeToKoDauAndGach(c) {
    var a = "abcdefghijklmnopqrstxyzuvxw0123456789 ";
    c = UnicodeToKoDau(c.toLowerCase());
    var d = "";
    for (var b = 0; b < c.length; b++) {
        if (a.indexOf(c.charAt(b)) > -1) {
            if (c.charAt(b) != " ") {
                d += c.charAt(b)
            } else {
                if (b > 0 && c.charAt(b - 1) != " " && c.charAt(b - 1) != "-") {
                    d += "-"
                }
            }
        }
    }
    return d
}

function UnicodeToKoDau(d) {
    var c = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ";
    var f = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU";
    var e = "",
        b = 0;
    for (var a = 0; a < d.length; a++) {
        b = c.indexOf(d.charAt(a));
        if (b >= 0) {
            e += f.charAt(b)
        } else {
            e += d.charAt(a)
        }
    }
    return e
}

function SearchOnFocusHome(a) {
    if (a.value == "Nhập nội dung tìm kiếm ...") {
        a.value = ""
    }
}

function SearchOnBlurHome(a) {
    if (a.value == "") {
        a.value = "Nhập nội dung tìm kiếm ..."
    }
}

function CheckValue() {
    var a;
    a = $("#searchinput").val();
    if (a == "" || a == "Nhập nội dung tìm kiếm ...") {
        alert("Bạn chưa nhập từ khóa");
        return false
    } else {
        window.location = Constants.searchHost + "?query=" + htmlEncode(a)
    }
}

function BBEnterPressSearch(b) {
    var a;
    if (b && b.which) {
        b = b;
        a = b.which
    } else {
        b = window.event;
        a = b.keyCode
    }
    if (a == 13) {
        CheckValue();
        return false
    }
    return true
}

function getViewVideo(c) {
    var d = Constants.apiHandlerUrl + "/Handler/Video/DataHandler.ashx";
    var e = "";
    var a = 0;
    var f = $(c).find(".need-get-view");
    f.each(function(g, h) {
        if (a == 0) {
            e += $(this).attr("data-key")
        } else {
            e += "," + $(this).attr("data-key")
        }
        a++
    });
    var b = "Video_Tracking";
    $.ajax({
        type: "GET",
        url: d,
        data: ({
            videoKeys: e,
            method: b
        }),
        dataType: "json",
        success: function(g) {
            try {
                $.each(g.Data, function(l, i) {
                    var j = $(c).find(".need-get-view[data-key='" + i.MediaKey + "']");
                    if (i.play > 0) {
                        var m = (i.play >= 1000000) ? "0.0a" : "0,0a";
                        var k = numeral(i.play).format(m).replace(",", ".");
                        j.html(k);
                        j.show();
                        j.removeClass("need-get-view")
                    }
                    j.removeClass("need-get-view")
                })
            } catch (h) {}
        }
    })
}

function getCountComment(a) {
    var b = "";
    var c = 0;
    $("span.item-comment").each(function() {
        var e = $(this);
        var d = e.attr("rel");
        if (c == 0) {
            b += d
        } else {
            b += "," + d
        }
        c++;
        e.removeClass("item-comment");
        e.addClass("item-comment-loaded")
    });
    if (c < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "mingcommentcountgetlist",
            from: a,
            lstsorturl: b
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(d) {
            if (d != null && d.Success) {
                var e = JSON.parse(d.Data);
                $.each(e, function(h, f) {
                    var g = $(".item-comment-loaded[rel*='" + f.SortUrl + "']");
                    if (f.CntCm > 0) {
                        g.html(f.CntCm);
                        g.show()
                    }
                })
            }
        }
    })
}

function getCountCommentNotAsync(c) {
    var a = $(c);
    var d = a.attr("rel");
    var b = 0;
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "mingcommentcountgetlist",
            from: c,
            lstsorturl: d
        }),
        dataType: "json",
        type: "GET",
        async: false,
        beforeSend: function() {},
        success: function(e) {
            if (e != null && e.Success) {
                var f = JSON.parse(e.Data);
                $.each(f, function(g, h) {
                    b = h.CntCm
                })
            }
        }
    });
    return b
}

function getFbDataByListUrl() {
    return;
    var a = "";
    var b = 0;
    $(".item-fb").each(function() {
        var c = ($(this).attr("rel"));
        if (b == 0) {
            a += Constants.host + c
        } else {
            a += "," + Constants.host + c
        }
        b++
    });
    if (b < 1) {
        return
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://sharefb.cnnd.vn/?urls=" + a,
        success: function(c) {
            $.each(c, function(g, d) {
                var f = d.url.replace(Constants.host, "");
                var e = $(".item-fb[rel*='" + f + "']");
                if (d.total_count > 0) {
                    e.html(d.total_count);
                    e.show()
                } else {
                    e.html("0 like");
                    e.hide()
                }
                e.removeClass("item-fb");
                e.addClass("item-fb-loaded")
            })
        }
    })
}

function getFbDataByObj(f, d, e, c) {
    var b = "";
    var a = 0;
    $(f).each(function() {
        var g = ($(this).attr("rel"));
        if (a == 0) {
            b += Constants.host + g
        } else {
            b += "," + Constants.host + g
        }
        a++
    });
    if (a < 1) {
        return
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://sharefb.cnnd.vn/?urls=" + b,
        success: function(g) {
            $.each(g, function(m, h) {
                var l = h.url.replace(Constants.host, "");
                var k = $(f + "[rel*='" + l + "']");
                var j = 0;
                switch (d) {
                    case "like":
                        j = h.like_count;
                        break;
                    case "share":
                        j = h.share_count;
                        break;
                    case "total":
                        j = h.total_count;
                        break
                }
                if (j > 0) {
                    var n = (j >= 1000000) ? "0.0a" : "0,0a";
                    var i = (c) ? numeral(j).format(n).replace(",", ".") : numeral(j).format("0,0").replace(",", ".");
                    k.html(i);
                    k.show()
                } else {
                    if (e) {
                        k.hide()
                    }
                }
                k.addClass("item-fb-loaded")
            })
        }
    })
}

function getCountCommentLink(b, a) {
    return;
    var c = "";
    var d = 0;
    $(".item-comment").each(function() {
        var e = ($(this).attr("rel"));
        if (d == 0) {
            c += e
        } else {
            c += "," + e
        }
        d++
    });
    if (d < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "mingcommentcountgetlist",
            from: b,
            lstsorturl: c
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(e) {
            if (b == ".same-category-stream") {}
            if (e.Success) {
                var f = JSON.parse(e.Data);
                $.each(f, function(i, g) {
                    var h = $(".item-comment[rel*='" + g.SortUrl + "']");
                    if (g.CntCm > 10) {
                        h.html(g.CntCm);
                        h.show()
                    } else {
                        if (a) {
                            h.hide()
                        }
                    }
                    h.removeClass("item-comment")
                })
            }
        }
    })
}

function getCountCommentLinkNotReturn(b, a) {
    var c = "";
    var d = 0;
    $(".item-comment").each(function() {
        var e = ($(this).attr("rel"));
        if (d == 0) {
            c += e
        } else {
            c += "," + e
        }
        d++
    });
    if (d < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "mingcommentcountgetlist",
            from: b,
            lstsorturl: c
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(e) {
            if (e.Success) {
                var f = JSON.parse(e.Data);
                $.each(f, function(i, g) {
                    var h = $(".item-comment[rel*='" + g.SortUrl + "']");
                    if (g.CntCm > 10) {
                        h.html(g.CntCm);
                        h.show()
                    } else {
                        if (a) {
                            h.hide()
                        }
                    }
                    h.removeClass("item-comment")
                })
            }
        }
    })
}

function getCountCommentMinValueToShow(c, a, b) {
    var d = "";
    var e = 0;
    $("span.item-comment").each(function() {
        var f = ($(this).attr("rel"));
        if (e == 0) {
            d += f
        } else {
            d += "," + f
        }
        e++
    });
    if (e < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "mingcommentcountgetlist",
            from: c,
            lstsorturl: d
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(f) {
            if (f.Success) {
                var g = JSON.parse(f.Data);
                $.each(g, function(j, h) {
                    var i = $(".item-comment[rel*='" + h.SortUrl + "']");
                    if (h.CntCm >= a) {
                        i.html(h.CntCm);
                        i.show()
                    } else {
                        i.parents(b).hide()
                    }
                })
            }
        }
    })
}

function getCountFbLike() {
    return;
    var a = "";
    var b = 0;
    $('label[rel="fblikecount"]').each(function() {
        var c = ($(this).attr("sorturl"));
        if (b == 0) {
            a += c
        } else {
            a += "," + c
        }
        b++
    });
    if (b < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "getlikebylinks",
            lsturl: a
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(c) {
            if (c.Success) {
                var d = JSON.parse(c.Data);
                $.each(d, function(e, f) {
                    $("label[sorturl*='" + f.SortUrl + "']").html(f.CntFb)
                })
            }
        }
    })
}

function getCountView(b) {
    var a = "";
    var c = 0;
    $(".item-view").each(function() {
        var d = ($(this).attr("rel"));
        if (c == 0) {
            a += d
        } else {
            a += ";" + d
        }
        c++
    });
    if (c < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "adtechviewcountgetlist",
            from: b,
            lstNewsIds: a
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(d) {
            if (d.Success) {
                var e = JSON.parse(d.Data);
                $.each(e, function(j, f) {
                    var h = $(".item-view[rel*='" + f.newsId + "']");
                    var i = f.total_view.view_pc + f.total_view.view_mob;
                    var k = (i >= 1000000) ? "0.0a" : "0,0a";
                    var g = numeral(i).format(k).replace(",", ".");
                    if (i > 0) {
                        h.html(g);
                        h.removeClass("item-view")
                    }
                })
            }
        }
    })
}

function getCountViewNotFormat(b) {
    var a = "";
    var c = 0;
    $(".item-view").each(function() {
        var d = ($(this).attr("rel"));
        if (c == 0) {
            a += d
        } else {
            a += ";" + d
        }
        c++
    });
    if (c < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "adtechviewcountgetlist",
            from: b,
            lstNewsIds: a
        }),
        dataType: "json",
        type: "GET",
        async: false,
        beforeSend: function() {},
        success: function(d) {
            if (d.Success) {
                var e = JSON.parse(d.Data);
                $.each(e, function(h, f) {
                    var g = $(".item-view[rel*='" + f.newsId + "']");
                    var j = f.total_view.view_pc + f.total_view.view_mob;
                    var i = numeral(j).format("0,0").replace(",", ".");
                    if (j > 0) {
                        g.html(i);
                        g.removeClass("item-view")
                    }
                })
            }
        }
    })
}

function getCountView(c, b) {
    if (typeof(b) == "undefined") {
        b = ""
    } else {
        b = " " + b
    }
    var a = "";
    var d = 0;
    $(".item-view").each(function() {
        var e = ($(this).attr("rel"));
        if (d == 0) {
            a += e
        } else {
            a += ";" + e
        }
        d++
    });
    if (d < 1) {
        return
    }
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: ({
            c: "adtechviewcountgetlist",
            from: c,
            lstNewsIds: a
        }),
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(e) {
            if (e.Success) {
                var f = JSON.parse(e.Data);
                $.each(f, function(k, g) {
                    var i = $(".item-view[rel*='" + g.newsId + "']");
                    var j = g.total_view.view_pc + g.total_view.view_mob;
                    var l = (j >= 1000000) ? "0.0a" : "0,0a";
                    var h = numeral(j).format(l).replace(",", ".");
                    if (j > 0) {
                        i.html(h + b);
                        i.removeClass("item-view");
                        i.show()
                    }
                })
            }
        }
    })
}

function getViewVideo(c, g) {
    if (typeof(g) == "undefined") {
        g = ""
    } else {
        g = " " + g
    }
    var d = Constants.apiHandlerUrl + "/Handler/Video/DataHandler.ashx";
    var f = "";
    var a = 0;
    var e = $(c).find(".need-get-view");
    e.each(function(h, i) {
        if (a == 0) {
            f += $(this).attr("data-key")
        } else {
            f += "," + $(this).attr("data-key")
        }
        a++
    });
    var b = "Video_Tracking";
    $.ajax({
        type: "GET",
        url: d,
        data: ({
            videoKeys: f,
            method: b
        }),
        dataType: "json",
        success: function(h) {
            try {
                $.each(h.Data, function(m, j) {
                    var k = $(c).find(".need-get-view[data-key='" + j.MediaKey + "']");
                    if (j.play > 0) {
                        var n = (j.play >= 1000000) ? "0.0a" : "0,0a";
                        var l = numeral(j.play).format(n).replace(",", ".");
                        k.html(l + g);
                        k.show();
                        k.removeClass("need-get-view")
                    }
                    k.removeClass("need-get-view")
                })
            } catch (i) {}
        }
    })
}
String.format = function(c) {
    if (typeof(c) == "undefined") {
        return c
    }
    if (arguments.length <= 1) {
        return c
    }
    var a = arguments.length - 2;
    for (var b = 0; b <= a; b++) {
        c = c.replace(new RegExp("\\{" + b + "\\}", "gi"), arguments[b + 1])
    }
    return c
};
(function(a) {
    a.fn.listSorter = function(f) {
        var c = this;
        var e = {
            order: "asc"
        };
        f = a.extend(e, f);
        var b = a("li", c).get();
        var d = "";
        switch (f.order) {
            case "asc":
            case "desc":
                break;
            default:
                return new Error("Invalid option")
        }
        return c.each(function() {
            if (f.order == "asc") {
                var k = b.sort(function(j, m) {
                    var n = a(j).text();
                    var i = a(m).text();
                    return n[0].toLowerCase() > i[0].toLowerCase()
                });
                for (var g = 0; g < k.length; g++) {
                    d += "<li>" + a(k[g]).text() + "</li>"
                }
                a(c).html(d)
            } else {
                var l = b.sort(function(j, m) {
                    var n = a(j).text();
                    var i = a(m).text();
                    return n[0].toLowerCase() < i[0].toLowerCase()
                });
                for (var h = 0; h < l.length; h++) {
                    d += "<li>" + a(l[h]).text() + "</li>"
                }
                a(c).html(d)
            }
        })
    }
})(jQuery);

function HomeSohaEmbed() {
    var sohaEmbed_K14_PlaceID = "sohaembed",
        sohaEmbed_SourceDomain = "http://s.soha.vn",
        sohaEmbed_Kenh14_utmSource = "?utm_source=Kenh14&utm_medium=Kenh14Embed&utm_campaign=Kenh14BoxEmbed",
        sohaEmbed_Kenh14_headUtmSource = "?utm_source=Kenh14&utm_medium=Head_Kenh14Embed&utm_campaign=Head_Kenh14BoxEmbed",
        sohaEmbed_K14 = new function() {
            this.imageWidth = 144, this.imageHeight = 90, this.top = 4, this.type = 4, sohaEmbed_K14_bindData = function(data) {
                if (data = eval("(" + data + ")"), null != data && data.length > 0) {
                    var topItemFormat = '<a href="{0}" target="_blank" class="klcbfn-thumb" title="{2}"><img src="{4}" /></a><div class="klcbfn-info"><h3 class="klcbfn-title"><a href="{0}" target="_blank" title="{2}">{1}</a></h3><p class="klcbfn-sapo">{3}</p></div>',
                        otherFormat = '<li class="klcb-news"><a title="{2}" target="_blank" href="{0}">{1}</a></li>',
                        embedHtml = "";
                    embedHtml += '<h2 class="klcb-cat-name">', embedHtml += '<a href="http://soha.vn' + sohaEmbed_Kenh14_headUtmSource + '" target="_blank" title="tin tức">Tin hot từ Soha.vn</a>', embedHtml += "</h2>", embedHtml += '<div class="klcb-featured-news clearfix">';
                    var item = data[0];
                    embedHtml += String.format(topItemFormat, item.AbsoluteURL + sohaEmbed_Kenh14_utmSource, item.Title, item.EncodedTitle, item.Sapo, item.EmbedImage), embedHtml += "</div>", embedHtml += '<ul class="list-klcb-news">';
                    for (var i = 1; i < data.length; i++) {
                        item = data[i], embedHtml += String.format(otherFormat, item.AbsoluteURL + sohaEmbed_Kenh14_utmSource, item.Title, item.EncodedTitle)
                    }
                    embedHtml += "</ul>";
                    $("#" + sohaEmbed_K14_PlaceID).html(embedHtml)
                }
            }, this.sohaEmbed_K14_getData = function() {
                var e = "/Services/GetEmbedData.ashx?Top={0}&ImageWidth={1}&ImageHeight={2}&Type={3}",
                    t = sohaEmbed_SourceDomain + String.format(e, this.top, this.imageWidth, this.imageHeight, this.type);
                $.ajax({
                    type: "GET",
                    url: t,
                    dataType: "jsonp",
                    success: function(e) {
                        JSON.stringify(e.Success) && sohaEmbed_K14_bindData(JSON.stringify(e.Data))
                    }
                })
            }
        };
    sohaEmbed_K14.sohaEmbed_K14_getData()
}

function struncateString(a, b) {
    $(a).each(function() {
        var c = $(this).html();
        if (c.length > b) {
            c = (c.substr(0, b - 3));
            $(this).html(c).append("...")
        }
    })
}
var brandContentStream = {
    content: "",
    attr: "newsid",
    init: function(b) {
        var a = this;
        a.content = $(b);
        var c = "";
        var d = 0;
        a.content.find(".knswli:not(.done-get-brand-content)").each(function() {
            var e = ($(this).find(".knswli-title a").attr(a.attr));
            if (typeof(e) != "undefined") {
                if (d == 0) {
                    c += e
                } else {
                    c += "," + e
                }
                d++;
                $(this).addClass("done-get-brand-content")
            }
        });
        if (d < 1) {
            return
        }
        $.ajax({
            url: Constants.apiHandlerUrl + "/Handler/RequestHandlers.ashx",
            data: {
                c: "brandcontentbynewsids",
                newsIds: "'" + c + "'"
            },
            dataType: "json",
            type: "GET",
            crossDomain: true,
            beforeSend: function() {},
            success: function(e) {
                if (e != null) {
                    a.genToolTip(e)
                }
            }
        })
    },
    genToolTip: function(a) {
        var b = this;
        $.each(a, function(e, d) {
            var c = b.content.find(".knswli .knswli-title a[" + b.attr + "*='" + d.NewsId + "']").parents(".knswli");
            var f = '<div class="brand-content stream k14topic-sapo">';
            f += String.format('<a href="{0}" title="{1}" class="k14topic-logo">', d.BrandContentUrl, d.BrandContentName);
            f += String.format('<img src="{0}" />', d.BrandContentLogoStream);
            f += "</a>";
            f += "</div>";
            c.find(".knswli-right").prepend(f);
            c.find(".klcbfn-subtitle").remove();
            c.find(".knswli-right .brand-content .k14topic-news-title a").trimLine(4);
            c.find(".knswli-right").find(".k14topic-sapo").hide().fadeIn(600);
            c.find(".knswli-right").find(".k14topic-sapo").css("display", "inline-block")
        })
    }
};

function getTypeNews(a) {
    var b = "";
    switch (a.find(".knswli-title a").attr("type")) {
        case "3":
            b = "lb-image";
            addLabelType(a, b);
            break;
        case "2":
            b = "lb-video";
            addLabelType(a, b);
            break;
        case "7":
            b = "lb-image";
            addLabelType(a, b);
            b = "lb-video";
            addLabelType(a, b);
            break
    }
    a.addClass("done-get-type")
}

function addLabelType(c, a) {
    if (a != "") {
        var b = '<span class="sprite ' + a + '"></span>';
        c.find(".knswli-title a").append(b)
    }
}

function getStickerInNews(a) {
    var b = "";
    switch (a.find(".knswli-title a").attr("newstype")) {
        case "1":
            b = "sticker-hot";
            addSticker(a, b);
            break;
        case "2":
            b = "sticker-musttry";
            addSticker(a, b);
            break;
        case "5":
            b = "sticker-nong";
            addSticker(a, b);
            break;
        case "6":
            b = "sticker-quy";
            addSticker(a, b);
            break;
        case "7":
            b = "sticker-sock";
            addSticker(a, b);
            break;
        case "8":
            b = "sticker-hong";
            addSticker(a, b);
            break;
        case "9":
            b = "sticker-cute";
            addSticker(a, b);
            break
    }
    a.addClass("done-get-sticker")
}

function addSticker(c, b) {
    if (b != "") {
        var a = "<span class='sticker " + b + "'>";
        c.find(".knswli-left").append(a);
        c.find(".knswli-left").addClass("pos-rlt")
    }
}

function getLabelNews() {
    var a = $("a[rel*='init-sapo']");
    $.each(a, function(d, b) {
        var e = $(b).attr("init-sapo-type");
        switch (e) {
            case "1":
                addLabelLiveSportType(b);
                break;
            case "2":
                addLabelLiveType(b);
                break;
            case "3":
                addLabelEditorChoiceType(b);
                break;
            case "4":
                addLabelMonopolyType(b);
                break
        }
        $(b).addClass("pos-rlt");
        var c = $(b).attr("rel");
        $(b).attr("rel", c.replace("init-sapo", ""))
    })
}

function addLabelLiveSportType(a) {
    $(a).append('<div class="label-news label-live-sport"><span>TRỰC TIẾP</span></div>')
}

function addLabelLiveType(b) {
    var a = $(b).attr("init-sapo-value");
    $(b).append('<div class="label-news label-live"><span>' + a + "</span></div>")
}

function addLabelEditorChoiceType(a) {
    $(a).append('<div class="label-news label-editor-choice"><span>EDITOR</span><span>CHOICE</span></div>')
}

function addLabelMonopolyType(a) {
    $(a).append('<div class="label-news label-monopoly"><span>ĐỘC QUYỀN</span></div>')
}
/* var trendingTag = {
    init: function() {
        var b = this;
        var a = 0;
        if (typeof(zoneid) != "undefined") {
            a = zoneid
        }
        $.ajax({
            url: Constants.apiHandlerUrl + "/Handler/RequestHandlers.ashx",
            data: {
                c: "trendingtag",
                zoneId: a
            },
            dataType: "json",
            type: "GET",
            crossDomain: true,
            beforeSend: function() {},
            success: function(c) {
                if (c != null) {
                    var d = "";
                    $.each(c, function(f, e) {
                        d += "<li class='khwtht'>";
                        d += "        <a href='" + ((e.Id + "") == "" ? e.Url : "/" + e.Url + ".html") + "' title='" + e.Name + "'>#" + e.Name + "</a>";
                        d += "</li>"
                    });
                    if (d != "") {
                        $(".list-khwtht").html(d)
                    } else {
                        $(".list-khwtht").hide()
                    }
                } else {
                    $(".list-khwtht").hide()
                }
            }
        })
    },
    error: function() {
        $(".list-khwtht").hide()
    }
}; */

function loadJsAsync(b, d) {
    var a = document.getElementsByTagName("head")[0];
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.async = true;
    if (typeof d == "function") {
        c.onreadystatechange = c.onload = function() {
            d()
        }
    }
    c.src = b;
    if ($('head script[scr="' + b + '"]').length == 0) {
        a.appendChild(c)
    }
}

function checkRunInit() {
    if (typeof runinit != "undefined" && runinit.length >= 1) {
        runinit[0]();
        var b = runinit.length;
        var c = [];
        for (var a = 1; a < b; a++) {
            c.push(runinit[a])
        }
        runinit = c
    }
    window.setTimeout(function() {
        checkRunInit()
    }, 100)
}
checkRunInit();
var timerScroll;

function checkLazyImages(d) {
    if (timerScroll) {
        clearTimeout(timerScroll)
    }
    if ($("img.customlazy:not(.loaded)").length > 0) {
        var c = 0,
            a = (d + screen.height),
            b = screen.height / 2,
            e = null;
        $("img.customlazy:not(.loaded)").each(function() {
            e = $(this);
            if (e.attr("data-src") != undefined) {
                c = e.offset().top;
                if ((c + this.clientHeight) >= d && c <= a) {
                    e.attr("src", e.attr("data-src")).addClass("loaded")
                } else {
                    if (!e.hasClass("preload") && c >= (d - b) && c <= (a + b)) {
                        var f = new Image();
                        f.onload = function() {
                            $("img[data-src='" + this.src + "']:not(.loaded)").attr("src", this.src).addClass("loaded")
                        };
                        f.src = e.attr("data-src");
                        e.addClass("preload")
                    }
                }
            } else {
                e.removeClass("lazy")
            }
        })
    }
}

function processScroll() {
    var c = $(window).scrollTop();
    if (typeof runOnScroll != "undefined" && runOnScroll.length >= 1) {
        var b = runOnScroll.length;
        for (var a = 0; a < b; a++) {
            if (typeof runOnScroll[a] == "function") {
                runOnScroll[a](c)
            }
        }
    }
    checkLazyImages(c)
}
$(function() {
    setTimeout(function() {
        processScroll()
    }, 100);
    document.addEventListener("touchmove", processScroll, false);
    document.addEventListener("scroll", processScroll, false)
});
var tag = {
    pageSize: 5,
    tagUrl: "",
    xhrTagRequest: null,
    init: function() {
        var a = this
    },
    doSelectCat: function(a) {
        if ($(a).hasClass("active")) {
            $(a).removeClass("active").parent().removeClass("active")
        } else {
            $(a).addClass("active").parent().addClass("active")
        }
        var b = "";
        $('.kbwcblwtntf-filter > li > a[class*="active"]').each(function() {
            b += '<li class="kbwcblwtntfs"><a href="javascript:void(0)" onclick="tag.unselectCat(this, \'' + $(this).attr("rel") + "')\">" + $(this).html() + "</a></li>"
        });
        $(".list-kbwcblwtntfs").html(b);
        if (b === "") {
            $(".kbwcblwtnt-filter-selected").addClass("hidden")
        } else {
            $(".kbwcblwtnt-filter-selected").removeClass("hidden")
        }
        this.doBindTagData(true, 1)
    },
    unselectCat: function(a, b) {
        $(a).parent().remove();
        $(".kbwcblwtntf-filter > li > a[rel=" + b + "]").removeClass("active").parent().removeClass("active");
        if ($(".list-kbwcblwtntfs").html() == "") {
            $(".kbwcblwtnt-filter-selected").addClass("hidden")
        }
        this.doBindTagData(true, 1)
    },
    unselectAllCat: function() {
        $(".list-kbwcblwtntfs").html("");
        $(".kbwcblwtnt-filter-selected").addClass("hidden");
        $('.kbwcblwtntf-filter > li > a[class*="active"]').each(function() {
            $(this).removeClass("active").parent().removeClass("active")
        });
        this.doBindTagData(true, 1)
    },
    doBindTagData: function(b, d) {
        var e = this;
        checkLoad = 1;
        var c = $(".knsw-list li").last().prev();
        c.attr("style", "border-bottom: none;");
        if (e.xhrTagRequest) {
            e.xhrTagRequest.abort()
        }
        var a = "";
        $('.kbwcblwtntf-filter > li > a[class*="active"]').each(function() {
            if (a == "") {
                a = $(this).attr("rel")
            } else {
                a += "|" + $(this).attr("rel")
            }
        });
        if (b) {
            $(".knsw-list").hide();
            $("#pnlLoading").show()
        }
        var f = true;
        e.xhrTagRequest = $.ajax({
            url: Constants.apiHandlerUrl + "/tag-news.chn",
            async: false,
            data: ({
                tag_url: e.tagUrl,
                page: d,
                catids: a
            }),
            success: function(h) {
                if (b) {
                    var i = $('.knsw-list .knswli[data-boxtype="NewsPublish"]');
                    i.remove();
                    var g = $("#lastPage").before(h);
                    i = $('.knsw-list .knswli[data-boxtype="NewsPublish"]');
                    var j = i.length > 5 ? 5 : i.length - 1;
                    var l = $('.knsw-list .knswli[data-boxtype="NewsPublish"]')[j];
                    $(l).after($("#ulTinNoiBat").parent());
                    setTimeout(function() {
                        $("#pnlLoading").hide();
                        $(".knsw-list").show(200)
                    }, 1000)
                } else {
                    var g = $("#lastPage").before(h)
                }
                getSocial();
                $(".sapo-need-trim").each(function() {
                    $(this).trimLine(3);
                    $(this).removeClass("sapo-need-trim")
                });
                $(g).find("li").removeClass("fade-out");
                checkLoad = 0;
                $("#IconLoadListDetail").hide();
                c.attr("style", "border-bottom: 1px solid #ebebeb;");
                try {
                    FB.XFBML.parse()
                } catch (k) {}
                $(".bfthi").remove();
                try {
                    $(h);
                    f = true
                } catch (k) {
                    f = false
                }
            },
            error: function() {
                checkLoad = 0;
                $("#IconLoadListDetail").hide();
                f = true
            }
        });
        return f
    }
};
var LightBoxType = {
    Default: 0,
    LiveSport: 1,
    Cool: 2,
    TransferMarket: 3
};
var photoLightBox = {
    arr: new Array(),
    arrFull: [],
    divElement: ".content",
    imgSr: "http://kenh14cdn.com/",
    imgSr1: "http://channel.mediacdn.vn/",
    imgSr2: "http://kenh14cdn.com/",
    app_key: "d9c694bd04eb35d96f1d71a84141d075",
    width: 0,
    height: 0,
    photoWidth: 0,
    flag: true,
    _admZone: 1421,
    allowFullScreen: true,
    isLive: true,
    type: LightBoxType.Default,
    startItem: "",
    init: function() {
        var a = this;
        var b = "";
        a.arrFull = [];
        a.arr = new Array();
        var c;
        var e;
        var d;
        if (a.type == LightBoxType.Cool) {
            c = $(a.divElement).find('img[class*="photo-box1-img"]');
            d = $(a.divElement).find('a[class*="img-title"]')
        } else {
            c = $(a.divElement).find('img[src*="' + a.imgSr + '"], img[src*="' + a.imgSr1 + '"], img[src*="' + a.imgSr2 + '"]')
        }
        c.each(function(g) {
            b += String.format('<li><a href="javascript:void(0)"><img src="{0}" alt="" /></a></li>', $(this).attr("src"));
            var f = {};
            f.title = $(this).attr("alt");
            f.sapo = $(this).attr("sapo");
            f.src = $(this).attr("src");
            f.link = $(this).attr("link");
            if ($(this).attr("id")) {
                f.id = $(this).attr("id")
            } else {
                f.id = 0
            }
            f.isYoN = $(this).attr("isYoN");
            a.arrFull.push(f);
            a.arr.push($(this).attr("src"))
        });
        c.hover(function() {
            if (!$(this).parent().is('a[target="_blank"]')) {
                $(this).css("cursor", "pointer")
            }
        }, function() {
            if (!$(this).parent().is('a[target="_blank"]')) {
                $(this).css("cursor", "none")
            }
        });
        c.on("click", function() {
            if (!$(this).parent().is("a")) {
                a.openPopup();
                a.bindData($(this).attr("src"))
            }
        });
        if (a.type == LightBoxType.Cool) {
            d.on("click", function() {
                var f = $(this).parent().parent().parent().find("img").attr("src");
                a.openPopup();
                a.bindData(f)
            })
        }
        if (a.arr.length > 5) {
            $(".popup-slide ul").html(b);
            $(".popup-slide").show()
        }
        if (window.location.hash != "") {
            if (window.location.hash.split("#")[1].indexOf("lb") != -1) {
                lb = window.location.hash.split("#")[1].replace("lb", "");
                if ($(a.divElement).find('img[lb="' + lb + '"]') != null) {
                    a.openPopup();
                    a.bindData($(a.divElement).find('img[lb="' + lb + '"]').attr("src"))
                }
            }
        }
        $(".popup-detail-content > img").hover(function() {
            $(this).css("cursor", "pointer")
        });
        $(".popup-slide ul li").hover(function() {
            $(this).css("opacity", "1")
        }, function() {
            $(this).css("opacity", "0.3")
        });
        $("#popup-detail-left").hover(function() {
            if (a.isZoom() || !a.flag) {
                $(".popup-detail-content .zoom").fadeIn()
            } else {
                $(".popup-detail-content .zoom").hide()
            }
            if ($.inArray($(".popup-slide li.active img").attr("src"), a.arr) == 0) {
                if (a.arr.length == 1) {
                    return
                }
                $(".popup-detail-content .next").show()
            } else {
                if ($.inArray($(".popup-slide li.active img").attr("src"), a.arr) == a.arr.length - 1) {
                    $(".popup-detail-content .prev").show()
                } else {
                    $(".popup-detail-content .prev, .popup-detail-content .next").fadeIn()
                }
            }
        }, function() {
            $("#popup-detail-left .zoom").hide();
            $(".popup-detail-content .prev, .popup-detail-content .next").hide()
        });
        if (a.startItem != "") {
            a.openPopup();
            a.bindData(a.startItem);
            a.startItem = ""
        }
    },
    bindData: function(g) {
        var f = this;
        f.reset();
        $(window).resize(function() {
            f.resize(f.width, f.height)
        });
        $(".popup-detail-content .prev, .popup-detail-content .next").hide();
        $("#popup-detail-bg").scrollTop(0);
        $(".popup-detail-content li").removeClass("active");
        if ($.inArray(g, f.arr) == 0) {
            $(".popup-detail-content .next").show()
        } else {
            if ($.inArray(g, f.arr) == f.arr.length - 1) {
                $(".popup-detail-content .prev").show()
            } else {
                $(".popup-detail-content .prev, .popup-detail-content .next").fadeIn()
            }
        }
        next = "";
        prev = "";
        var b = 0;
        var c = 0;
        var e = "";
        var a = {};
        for (i = 0; i < f.arr.length; i++) {
            if (f.arr[i] == g) {
                next = f.arr[i + 1];
                prev = f.arr[i - 1];
                a = f.arrFull[i];
                break
            }
        }
        var d = g.replace(/thumb_w\/([0-9]+)\//, "").replace(/thumb_in\/[0-9]+_[0-9]+\//, "").replace(/zoom\/[0-9]+_[0-9]+\//, "");
        if (f.isLive) {
            var h = new Image();
            h.onload = function() {
                f.width = b = h.width;
                f.height = c = h.height;
                f.resize(b, c);
                f.callBack(next, prev)
            };
            h.src = d
        } else {
            if ($(f.divElement).find('img[src="' + g + '"]').attr("w") != null) {
                b = $(f.divElement).find('img[src="' + g + '"]').attr("w")
            } else {
                b = $(f.divElement).find('img[src="' + g + '"]').width()
            }
            if ($(f.divElement).find('img[src="' + g + '"]').attr("h") != null) {
                c = $(f.divElement).find('img[src="' + g + '"]').attr("h")
            } else {
                c = $(f.divElement).find('img[src="' + g + '"]').height()
            }
            f.width = b;
            f.height = c;
            f.resize(b, c);
            f.callBack(next, prev)
        }
        if ($(f.divElement).find('img[src="' + g + '"]').attr("lb") != null) {
            e = encodeURIComponent("#lb" + $(f.divElement).find('img[src="' + g + '"]').attr("lb"))
        }
        $(".popup-detail-content > img").hide().attr("src", d).delay(800).fadeIn();
        if (a.title != null) {
            photoDetail.title = a.title;
            photoDetail.sapo = "";
            $(".popup-detail-right-top h5").html(a.title)
        }
        if (a.sapo != null) {}
        if (a.isYoN == 1) {
            $(".popup-detail-right-top h5").css("color", "#000");
            $.ajax({
                url: Constants.apiHandlerUrl + "/Handler/Fashion/YoN/Vote.ashx?m=getlikeanddislike&id=" + a.id,
                xhrFields: {
                    withCredentials: true
                },
                dataType: "json",
                success: function(k) {
                    if (k != null) {
                        var m = JSON.parse(k.Data);
                        var n = $(".popup-detail-right-top #lightbox_like");
                        var j = $(".popup-detail-right-top #lightbox_dislike");
                        $(".popup-detail-right-top .likeCnt").html(m[0].Like);
                        $(".popup-detail-right-top .dislikeCnt").html(m[0].Dislike);
                        $(n).attr("rel", m[0].IdNews);
                        $(j).attr("rel", m[0].IdNews);
                        if (m[0].IsLike == 1) {
                            f.activeLike(n, j)
                        } else {
                            if (m[0].IsDislike == 1) {
                                f.activeDislike(n, j)
                            } else {
                                f.deactiveAll(n, j)
                            }
                        }
                        var l = $(".popup-detail-right-top .LightboxYoN_total").width();
                        if ((m[0].Like + m[0].Dislike) == 0) {
                            $(".popup-detail-right-top .LightboxYoN_likeW").css("width", l / 2)
                        } else {
                            $(".popup-detail-right-top .LightboxYoN_likeW").css("width", (l * m[0].Like) / (m[0].Like + m[0].Dislike))
                        }
                    }
                }
            })
        }
        if (f.allowFullScreen && f.isZoom()) {
            f.resizeFullScreen(b, c);
            $(".popup-detail-content .zoom").fadeIn();
            f.flag = false
        }
        if (f.isZoom() || !this.flag) {
            $(".popup-detail-content .zoom").fadeIn()
        } else {
            $(".popup-detail-content .zoom").hide()
        }
    },
    activeLike: function(b, a) {
        b.removeClass("likeLightboxYoN");
        b.addClass("likedLightboxYoN");
        b.attr("onclick", "");
        a.removeClass("dislikedLightboxYoN");
        a.addClass("dislikeLightboxYoN");
        a.attr("onclick", "doLikeOrDislike(this, 0, 2)")
    },
    activeDislike: function(b, a) {
        a.removeClass("dislikeLightboxYoN");
        a.addClass("dislikedLightboxYoN");
        a.attr("onclick", "");
        b.removeClass("likedLightboxYoN");
        b.addClass("likeLightboxYoN");
        b.attr("onclick", "doLikeOrDislike(this, 1, 2)")
    },
    deactiveAll: function(b, a) {
        b.removeClass("likedLightboxYoN");
        b.addClass("likeLightboxYoN");
        b.attr("onclick", "doLikeOrDislike(this, 1, 2)");
        a.removeClass("dislikedLightboxYoN");
        a.addClass("dislikeLightboxYoN");
        a.attr("onclick", "doLikeOrDislike(this, 0, 2)")
    },
    openPopup: function() {
        if (typeof(admDrawIframe) === "function") {
            admDrawIframe()
        }
        $("#popup-detail-bg").fadeIn("slow");
        $("body").addClass("no-scroll");
        $("#scroll_top").hide();
        $(document).keyup(this.keyUp)
    },
    closePopup: function() {
        $("#popup-detail-bg").fadeOut("slow");
        $("body").removeClass("no-scroll");
        $(document).off("keyup")
    },
    resize: function(v, t) {
        var g = 320;
        var e = 320;
        var a = 700;
        var r = 400;
        var l = 90;
        var q = 70;
        var d = window.innerWidth - 100;
        var u = window.innerHeight - 75;
        d = (d < a) ? a : d;
        u = (u < r) ? r : u;
        var m = 320;
        var o = 15;
        var b = 30;
        var s = d - $("#popup-detail-right").innerWidth();
        s = (s < e) ? e : s;
        var k = s;
        if (v <= s) {
            k = v
        } else {
            k = s
        }
        var f = parseInt(k * t / v);
        if (f > u) {
            f = u - l;
            k = parseInt(v * f / t)
        }
        if (k < g) {
            k = g;
            f = parseInt(k * t / v)
        }
        while (f > u) {
            k = k - 10;
            f = parseInt(k * t / v)
        }
        $("#popup-detail-wrap").css({
            width: d
        });
        $("#popup-detail-left .move").hide();
        $("#popup-detail-left, .popup-detail-content").css("width", s);
        if ($("#popup-detail-left ul").html() != "") {
            $("#popup-detail-left, .popup-detail-content").css("height", u - q)
        } else {
            $("#popup-detail-left, .popup-detail-content").css("height", u)
        }
        $("#popup-detail-left .move").hide();
        $("#popup-detail-right").css("height", u);
        var j = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var n = $("#popup-detail-wrap").width();
        var c = $("#popup-detail-wrap").height();
        _left = (j / 2 - n / 2 - 10) > 0 ? j / 2 - n / 2 - 10 : 0;
        $("#popup-detail-wrap").css({
            left: _left
        });
        this.flag = true;
        $(".popup-detail-content > img").attr("width", k).attr("height", f)
    },
    callBack: function(b, a) {
        var c = this;
        $("#popup-detail-left .next, .popup-detail-content > img").off("click").on("click", function() {
            if (b != null) {
                c.bindData(b)
            } else {
                return false
            }
        });
        $("#popup-detail-left .prev").off("click").on("click", function() {
            if (a != null) {
                c.bindData(a)
            } else {
                return false
            }
        });
        $("#popup-detail-left .zoom").off("click").on("click", function() {
            if (c.isZoom() && c.flag) {
                c.flag = false;
                c.resizeFullScreen(c.width, c.height)
            } else {
                $("#popup-detail-left .move").hide();
                $(".popup-detail-right-box").css({
                    position: "relative",
                    left: "0",
                    top: "0"
                });
                $("#popup-detail-bg").off("scroll");
                $(".popup-detail-content .next").css({
                    position: "absolute",
                    right: "30px"
                });
                $(".popup-detail-content .prev").css({
                    position: "absolute",
                    left: "30px"
                });
                c.flag = true;
                c.resize(c.width, c.height)
            }
            $(".popup-detail-content .zoom").css({
                position: "absolute",
                right: "20px"
            })
        });
        $(".move").off("click").on("click", function() {
            var d = $("#popup-detail-bg").scrollTop();
            $("#popup-detail-bg").animate({
                scrollTop: d + 150
            }, "slow")
        });
        $(".popup-slide  ul li a img").off("click").on("click", function() {
            if ($(this).parent().parent("li").hasClass("active")) {
                return
            }
            c.bindData($(this).attr("src"))
        });
        $("#popup-detail-wrap").click(function() {
            return false
        });
        $("#popup-detail-bg").click(function() {
            c.closePopup()
        })
    },
    keyUp: function(a) {
        a.preventDefault();
        if (a.keyCode == 27) {
            photoDetail.closePopup()
        }
        if (a.keyCode == 37) {
            $("#popup-detail-left .prev").click()
        }
        if (a.keyCode == 39) {
            $("#popup-detail-left .next").click()
        }
    },
    resizeFullScreen: function(c, e) {
        var g = 70;
        var k = $("#popup-detail-right").innerWidth() + $("#popup-detail-wrap").position().left + 45 + "px";
        var d = $("#popup-detail-wrap").position().left + 30 + "px";
        $("#popup-detail-bg").scrollTop(0);
        if (c > $("#popup-detail-left").width()) {
            $(".popup-detail-content > img").attr({
                width: $("#popup-detail-left").width(),
                height: Math.round($("#popup-detail-left").width() * e / c)
            })
        } else {
            $(".popup-detail-content > img").attr({
                width: c,
                height: e
            })
        }
        $("#popup-detail-left").css("height", "auto");
        $(".popup-detail-content .next").css({
            position: "fixed",
            right: k
        });
        $(".popup-detail-content .prev").css({
            position: "fixed",
            left: d
        });
        if ($("#popup-detail-left ul").html() != "") {
            if (this.allowFullScreen) {
                $("#popup-detail-right").css("height", $(".popup-detail-content > img").height() + g)
            } else {
                $("#popup-detail-right").css("height", $("#popup-detail-left").height() + g)
            }
        } else {
            $("#popup-detail-left, .popup-detail-content").css("height", h);
            if (this.allowFullScreen) {
                $("#popup-detail-right").css("height", $(".popup-detail-content > img").height())
            } else {
                $("#popup-detail-right").css("height", $(".popup-detail-content").height())
            }
        }
        var j = window.innerWidth - 100;
        var h = window.innerHeight - 75;
        var a = 15;
        var b = document.documentElement.clientWidth;
        var l = $("#popup-detail-wrap").width();
        var f = $("#popup-detail-left").width() + (b / 2 - l / 2 - 10) + a;
        $("#popup-detail-left .move").show();
        $("#popup-detail-bg").scroll(function() {
            var m = $(this).scrollTop();
            if (m > 35) {
                $(".popup-detail-right-box").css({
                    position: "fixed",
                    left: f,
                    top: "0",
                    height: h + 40
                });
                $("#popup-detail-left .move").hide();
                $(".popup-detail-content .zoom").css({
                    position: "fixed",
                    right: $("#popup-detail-right").innerWidth() + $("#popup-detail-wrap").position().left + 40 + "px"
                })
            } else {
                $(".popup-detail-right-box").css({
                    position: "relative",
                    left: "0",
                    top: "0"
                });
                $(".popup-detail-content .zoom").css({
                    position: "absolute",
                    right: "20px"
                })
            }
        })
    },
    isZoom: function() {
        zoom = false;
        if ((parseInt($(".popup-detail-content > img").attr("width"), 10) < parseInt(this.width, 10) && parseInt($(".popup-detail-content > img").attr("width"), 10) < parseInt($("#popup-detail-left").width(), 10)) || !this.flag) {
            zoom = true
        }
        return zoom
    },
    album_load: function(l) {
        var j = this;
        var c = 0;
        var m = 50;
        var h = [];
        var a = 8;
        var b = 0;
        var k = $.inArray(l, j.arr);
        var g = 0;
        var d = k + 1;
        j.photoWidth = $("#popup-detail-left").width();
        $('.popup-slide li img[src="' + l + '"]').parent().parent().addClass("active");
        if (j.arr.length > 5) {
            if ($(".popup-slide ul").html() != "") {
                for (f = 0; f < j.arr.length; f++) {
                    h = j.getImgSize(j.arr[f]).split("|");
                    if (f > 0) {
                        c = c + a
                    }
                    c += parseInt(h[0] * m / h[1]);
                    if (c > j.photoWidth) {
                        continue
                    }
                    g = f + 1
                }
                if (j.photoWidth < c + (g * a)) {
                    $(".popup-slide li").css("float", "left").parent().css("width", "5000px");
                    if (d <= 5) {
                        $(".popup-slide ul").animate({
                            left: "0"
                        }, 500)
                    } else {
                        if (j.arr.length - k <= 5 && j.arr.length > 10) {
                            return
                        }
                        for (var f = 0; f < d - 5; f++) {
                            b += $('.popup-slide li img[src="' + j.arr[f] + '"]').parent().parent().outerWidth()
                        }
                        var e = b + ($(".popup-slide ul").position().left - 10);
                        $(".popup-slide ul").animate({
                            left: "-=" + e
                        }, 500)
                    }
                }
            }
        }
    },
    getImgSize: function(a) {
        var b = new Image();
        b.src = a;
        p = $(b).ready(function() {
            return {
                width: b.width,
                height: b.height
            }
        });
        return p[0]["width"] + "|" + p[0]["height"]
    },
    adBoxHeight: function() {
        var a = 0;
        box = 160;
        if (parseInt($("#popup-detail-right").height()) > 768) {
            a = $("#popup-detail-right").height() - $(".popup-detail-right-top").innerHeight() - box * 2
        } else {
            a = $("#popup-detail-right").height() - $(".popup-detail-right-top").innerHeight() - box
        }
        return a
    },
    showRightPanelScroll: function() {
        try {
            if ($(".popup-detail-right-box").children(":first").css("top").indexOf("-") != -1) {
                $(".popup-detail-right-box").children(":first").css({
                    top: 0
                })
            }
            $(".popup-detail-right-box").slimScroll({
                railVisible: true,
                railOpacity: 0.4,
                largeSize: "11px",
                height: 1553
            })
        } catch (a) {}
    },
    reset: function() {
        $("#popup-detail-left .move").hide();
        $(".popup-detail-content .popup-slide").hide();
        $(".popup-slide li").removeClass("active");
        $(".popup-detail-right-box").css({
            position: "relative",
            left: "0",
            top: "0"
        });
        $("#popup-detail-bg").off("scroll");
        $(".popup-detail-content .next").css({
            position: "absolute",
            right: "30px"
        });
        $(".popup-detail-content .prev").css({
            position: "absolute",
            left: "30px"
        });
        this.flag = true
    }
};
var prNews = {
    divhomeFocus: "ul.list-klwfnswn",
    divListFocus: ".klw-top-news",
    divList: "ul.knsw-list",
    divListTieuDiemTuan: "ul.knswli-object-list",
    divDuLichFocus: "ul.tsn-list-top-news",
    divDuLichList: "ul.tsn-list-news",
    divDuLichKenh14Choice: "#kenh14Choice-all",
    divDuLichAnCaTheGioi: "#quanxa-all",
    homeFocus: function() {
        var b = this;
        var a = $(b.divhomeFocus).find("li.prM13").attr("lc");
        if (a == 0 || a == LC) {
            $(b.divhomeFocus).find(">li.prM13").removeAttr("style");
            $("ul.list-klwfnswn li:eq(2)").after($("ul.list-klwfnswn li:eq(0)"))
        } else {
            $(b.divhomeFocus).find(">li.prM13").remove()
        }
    },
    homeCategory: function() {
        $(".klw-category-news .klwcn-grid").not(".type6").each(function() {
            var k = $(this);
            if (k.find(".klwcng-left").length > 1) {
                var j = k.find(".klwcng-left.prM1").attr("lc");
                if (j == 0 || j == LC) {
                    k.find(".klwcng-left:first").attr("style", "display:none !important");
                    k.find(".klwcng-left.prM1").removeAttr("style");
                    var b = k.find(".klwcng-left:first h3 > a").attr("href");
                    var e = k.find(".klwcng-left:first h3 > a").text();
                    var i = k.find(".klwcng-left:first h3 > a").attr("title");
                    k.find('ul.list-klwcngrn li a[href="' + b + '"]').parents("li").remove();
                    if (b != k.find(".klwcng-left.prM1 h3 > a").attr("href")) {
                        var f = '<li class="klwcngrn clearfix"><h4 class="klwcngrn-title"><a href="{0}" title="{1}">{2}</a></h4></li>';
                        k.find("ul.list-klwcngrn li:eq(0)").before(String.format(f, b, i, e))
                    }
                    if (k.find("ul.list-klwcngrn li").length > 2) {
                        k.find("ul.list-klwcngrn li:last").remove()
                    }
                    k.find("ul.list-klwcngrn li h4 a").trimLine(2)
                } else {
                    k.find(".klwcng-left.prM1").remove()
                }
            }
            if (k.find(".klwcng-left").length > 1) {
                var g = k.find(".klwcng-left.prM104").attr("lc");
                if (g == 0 || g == LC) {
                    k.find(".klwcng-left:first").attr("style", "display:none !important");
                    k.find(".klwcng-left.prM104").removeAttr("style");
                    var b = k.find(".klwcng-left:first h3 > a").attr("href");
                    var e = k.find(".klwcng-left:first h3 > a").text();
                    var i = k.find(".klwcng-left:first h3 > a").attr("title");
                    k.find('ul.list-klwcngrn li a[href="' + b + '"]').parents("li").remove();
                    if (b != k.find(".klwcng-left.prM104 h3 > a").attr("href")) {
                        var f = '<li class="klwcngrn clearfix"><h4 class="klwcngrn-title"><a href="{0}" title="{1}">{2}</a></h4></li>';
                        k.find("ul.list-klwcngrn li:eq(0)").before(String.format(f, b, i, e))
                    }
                    if (k.find("ul.list-klwcngrn li").length > 2) {
                        k.find("ul.list-klwcngrn li:last").remove()
                    }
                    k.find("ul.list-klwcngrn li h4 a").trimLine(2)
                } else {
                    k.find(".klwcng-left.prM104").remove()
                }
            }
            if (k.find(".klwcng-left").length > 1 && k.hasClass("type1c")) {
                var d = k.find(".klwcng-left.prM400").attr("lc");
                if (d == 0 || d == LC) {
                    k.find(".klwcng-left:first").attr("style", "display:none !important");
                    k.find(".klwcng-left.prM400").removeAttr("style");
                    var b = k.find(".klwcng-left:first h3 > a").attr("href");
                    var e = k.find(".klwcng-left:first h3 > a").text();
                    var i = k.find(".klwcng-left:first h3 > a").attr("title");
                    k.find('ul.list-klwcngrn li a[href="' + b + '"]').parents("li").remove();
                    if (b != k.find(".klwcng-left.prM400 h3 > a").attr("href")) {
                        var f = '<li class="klwcngrn clearfix"><h4 class="klwcngrn-title"><a href="{0}" title="{1}">{2}</a></h4></li>';
                        k.find("ul.list-klwcngrn li:eq(0)").before(String.format(f, b, i, e))
                    }
                    if (k.find("ul.list-klwcngrn li").length > 2) {
                        k.find("ul.list-klwcngrn li:last").remove()
                    }
                    k.find("ul.list-klwcngrn li h4 a").trimLine(2)
                } else {
                    k.find(".klwcng-left.prM400").remove()
                }
            }
            if (k.find("ul.list-klwcngrn li").length >= 2) {
                var c = k.find("ul.list-klwcngrn li.prM2");
                var h = c.attr("lc");
                if (h == 0 || h == LC) {
                    var a = k.find("ul.list-klwcngrn li.prM2 a").attr("href");
                    k.find('ul.list-klwcngrn li:not(".prM2") a[href="' + a + '"]').parents("li").remove();
                    c.removeAttr("style");
                    if (k.find("ul.list-klwcngrn li").length > 2) {
                        k.find("ul.list-klwcngrn li:last").remove()
                    }
                } else {
                    c.remove()
                }
            }
        });
        $(".klw-category-news .klwcn-grid.type6").each(function() {
            var j = $(this);
            if (j.find("ul.list-klwcngrn .klwcngrn-thumb").length > 1) {
                var i = j.find("ul.list-klwcngrn li.prM1").attr("lc");
                if (i == 0 || i == LC) {
                    j.find("ul.list-klwcngrn li.prM1").removeAttr("style");
                    var a = j.find("ul.list-klwcngrn li:first h4 > a").attr("href");
                    var d = j.find("ul.list-klwcngrn li:first h4 > a").text();
                    var h = j.find("ul.list-klwcngrn li:first h4 > a").attr("title");
                    j.find("ul.list-klwcngrn li:first").remove();
                    if (a != j.find(".ul.list-klwcngrn li.prM1 h4 > a").attr("href")) {
                        var e = '<li class="klwcngrn clearfix"><h4 class="klwcngrn-title"><a href="{0}" title="{1}">{2}</a></h4></li>';
                        j.find("ul.list-klwcngrn li:eq(0)").after(String.format(e, a, h, d))
                    }
                    if (j.find("ul.list-klwcngrn li").length > 3) {
                        j.find("ul.list-klwcngrn li:last").remove()
                    }
                    j.find("ul.list-klwcngrn li h4 a").trimLine(3)
                } else {
                    j.find("ul.list-klwcngrn li.prM1").remove()
                }
            }
            if (j.find("ul.list-klwcngrn .klwcngrn-thumb").length > 1) {
                var f = j.find("ul.list-klwcngrn li.prM104").attr("lc");
                if (f == 0 || f == LC) {
                    j.find("ul.list-klwcngrn li.prM104").removeAttr("style");
                    var a = j.find("ul.list-klwcngrn li:first h4 > a").attr("href");
                    var d = j.find("ul.list-klwcngrn li:first h4 > a").text();
                    var h = j.find("ul.list-klwcngrn li:first h4 > a").attr("title");
                    j.find("ul.list-klwcngrn li:first").remove();
                    if (a != j.find(".ul.list-klwcngrn li.prM104 h4 > a").attr("href")) {
                        var e = '<li class="klwcngrn clearfix"><h4 class="klwcngrn-title"><a href="{0}" title="{1}">{2}</a></h4></li>';
                        j.find("ul.list-klwcngrn li:eq(0)").after(String.format(e, a, h, d))
                    }
                    if (j.find("ul.list-klwcngrn li").length > 3) {
                        j.find("ul.list-klwcngrn li:last").remove()
                    }
                    j.find("ul.list-klwcngrn li h4 a").trimLine(3)
                } else {
                    j.find("ul.list-klwcngrn li.prM104").remove()
                }
            }
            if (j.find("ul.list-klwcngrn li").length >= 3) {
                var b = j.find("ul.list-klwcngrn li.prM2");
                var g = b.attr("lc");
                if (g == 0 || g == LC) {
                    var c = j.find("ul.list-klwcngrn li.prM2 a").attr("href");
                    j.find('ul.list-klwcngrn li:not(".prM2") a[href="' + c + '"]').parents("li").remove();
                    b.removeAttr("style");
                    if (j.find("ul.list-klwcngrn li").length > 3) {
                        j.find("ul.list-klwcngrn li:last").remove()
                    }
                } else {
                    b.remove()
                }
            }
        })
    },
    listFocus: function() {
        var a = this;
        if ($(a.divListFocus).find(".ktncli.prM13").length > 0) {
            var e = $(a.divListFocus).find(".ktncli.prM13").attr("lc");
            if (e == 0 || e == LC) {
                $(a.divListFocus).find(".ktncli.prM13").removeAttr("style");
                if ($(a.divListFocus).find(".ktncli").length > 3) {
                    var c = $(a.divListFocus).find(".ktncli:visible:last");
                    c.hide()
                }
            } else {
                $(a.divListFocus).find(".ktncli.prM13").remove()
            }
        }
        if ($(a.divListFocus).find(".ktncli.prM400").length > 0) {
            var d = $(a.divListFocus).find(".ktncli.prM400").attr("lc");
            if (d == 0 || d == LC) {
                $(a.divListFocus).find(".ktncli.prM400").removeAttr("style");
                if ($(a.divListFocus).find(".ktncli").length > 3) {
                    var c = $(a.divListFocus).find(".ktncli:visible:last");
                    c.hide()
                }
            } else {
                $(a.divListFocus).find(".ktncli.prM400").remove()
            }
        }
        if ($(a.divListFocus).find(".ktncli.prM1").length > 0) {
            var b = $(a.divListFocus).find(".ktncli.prM1").attr("lc");
            if (b == 0 || b == LC) {
                $(a.divListFocus).find(".ktncli:not([class*=prM]):first").after($(a.divListFocus).find(".ktncli.prM1"));
                $(a.divListFocus).find(".ktncli.prM1").removeAttr("style");
                if ($(a.divListFocus).find(".ktncli").length > 3) {
                    var c = $(a.divListFocus).find(".ktncli:visible:last");
                    c.hide()
                }
            } else {
                $(a.divListFocus).find(".ktncli.prM1").remove()
            }
        }
    },
    list: function() {
        var a = this;
        $(a.divList).find(">li[class*=prM]").each(function() {
            var q = $(this).attr("lc");
            if (q == 0 || q == LC) {
                var r = $(this).find(".knswli-title > a").attr("href");
                $(a.divList).find('>li:not([class*=prM]) .knswli-title > a[href="' + r + '"]').parents("li").remove();
                $(this).removeAttr("style")
            } else {
                $(this).remove()
            }
        });
        if ($(a.divListFocus).find(".ktncli.prM13").length > 0) {
            var j = $(a.divListFocus).find(".ktncli.prM13").attr("lc");
            if (j == 0 || j == LC) {
                var e = $(".ktncli:not(:visible):last");
                var d = e.find(" h3 > a").attr("href");
                var p = e.find(" h3 > a").attr("title");
                var i = e.find(" .ktncli-ava > img").attr("src");
                var b = e.find(" h3 > a").attr("rel");
                var o = e.find(" h3 > a").attr("data-id");
                var h = e.find(" h3 > a").text();
                var g = e.find(" .ktncli-sapo").text();
                var n = e.find(" .kscndsl-meta .kscliw-time").attr("title");
                var f = $(a.divList).find("li:first .knswli-category").attr("href");
                var m = $(a.divList).find("li:first .knswli-category").text();
                a.listAppend(0, d, i, h, m, n, g, o, b, p);
                e.remove()
            }
            var c = $(a.divListFocus).find(".ktncli.prM13 a").attr("href");
            a.removeList(c)
        }
        if ($(a.divListFocus).find(".ktncli.prM1").length > 0) {
            var l = $(a.divListFocus).find(".ktncli.prM1").attr("lc");
            if (l == 0 || l == LC) {
                var e = $(".ktncli:not(:visible):last");
                var d = e.find(" h3 > a").attr("href");
                var p = e.find(" h3 > a").attr("title");
                var i = e.find(" .ktncli-ava > img").attr("src");
                var b = e.find(" h3 > a").attr("rel");
                var o = e.find(" h3 > a").attr("data-id");
                var h = e.find(" h3 > a").text();
                var g = e.find(" .ktncli-sapo").text();
                var n = e.find(" .kscndsl-meta .kscliw-time").attr("title");
                var f = $(a.divList).find("li:first .knswli-category").attr("href");
                var m = $(a.divList).find("li:first .knswli-category").text();
                a.listAppend(0, d, i, h, m, n, g, o, b, p);
                e.remove()
            }
            var k = $(a.divListFocus).find(".ktncli.prM1 a").attr("href");
            a.removeList(k)
        }
        if ($(".klw-fashion-topnews").find(".klwft-left.prM13").length > 0) {
            var j = $(".klw-fashion-topnews").find(".klwft-left.prM13").attr("lc");
            if (j == 0 || j == LC) {
                var e = $(".klwftrn:not(:visible):last");
                if (e.length > 0) {
                    var d = e.find(" h2 > a").attr("href");
                    var p = e.find(" h2 > a").attr("title");
                    var i = e.find(".klwftrn-thumb").text();
                    var b = e.find(" h2 > a").attr("rel");
                    var o = e.find(" h2 > a").attr("data-id");
                    var h = e.find(" h2 > a").text();
                    var g = e.find(" .klwftrn-sapo").text();
                    var n = e.find(" .kscliw-time").attr("title");
                    var f = $(a.divList).find("li:first .knswli-category").attr("href");
                    var m = $(a.divList).find("li:first .knswli-category").text();
                    a.listAppend(0, d, i, h, m, n, g, o, b, p);
                    e.remove()
                }
            }
            var c = $(".klw-fashion-topnews").find(".klwft-left.prM13 a").attr("href");
            a.removeList(c)
        }
        if ($(".klw-fashion-topnews").find(".klwftr-topnews.prM1").length > 0) {
            var l = $(".klw-fashion-topnews").find(".klwftr-topnews.prM1").attr("lc");
            if (l == 0 || l == LC) {
                var e = $(".klwftrn:not(:visible):last");
                if (e.length > 0) {
                    var d = e.find(" h2 > a").attr("href");
                    var p = e.find(" h2 > a").attr("title");
                    var i = e.find(".klwftrn-thumb").text();
                    var b = e.find(" h2 > a").attr("rel");
                    var o = e.find(" h2 > a").attr("data-id");
                    var h = e.find(" h2 > a").text();
                    var g = e.find(" .klwftrn-sapo").text();
                    var n = e.find(" .kscliw-time").attr("title");
                    var f = $(a.divList).find("li:first .knswli-category").attr("href");
                    var m = $(a.divList).find("li:first .knswli-category").text();
                    a.listAppend(0, d, i, h, m, n, g, o, b, p);
                    e.remove()
                }
            }
            var k = $(".klw-fashion-topnews").find(".klwftr-topnews.prM1 a").attr("href");
            a.removeList(k)
        }
    },
    listTieuDiemTuan: function() {
        var b = this;
        var a = $(b.divListTieuDiemTuan).find("li.prM500").attr("lc");
        if (a == 0 || a == LC) {
            $(b.divListTieuDiemTuan).find(">li.prM500").removeAttr("style");
            $(b.divListTieuDiemTuan).find("li:eq(1)").after($(b.divListTieuDiemTuan).find("li:eq(0)"))
        } else {
            $(b.divListTieuDiemTuan).find(">li.prM500").remove()
        }
    },
    focusFashion: function() {
        var h = this;
        var j = $(".klw-fashion-topnews");
        if (j.find(".prM13").length > 0) {
            var a = j.find(".prM13").attr("lc");
            if (a == 0 || a == LC) {
                j.find(".klwft-left:first").attr("style", "display:none !important");
                j.find(".klwft-left.prM13").removeAttr("style");
                var b = j.find(".klwft-left:first > a").attr("href").trim();
                var c = j.find(".klwft-left:first .klwftlf-title").text().trim();
                var i = j.find(".klwft-left:first > a").attr("title").trim();
                var g = j.find(".klwft-left:first .klwftlf-thumb").text().trim();
                var k = j.find(".klwft-left:first .klwftlf-sapo").text().trim();
                if (b != j.find(".klwft-left.prM13 h2 > a").attr("href")) {
                    var d = "<div class='klwftr-topnews'><a href='{0}' title='{1}' class='klwftrt-thumb'><img src='{2}' alt='{1}'> </a> <h2 class='klwftrt-title'> <a href='{0}' title='{1}'>{3}</a> <p class='klwftrt-sapo'>{4}</p> </h2> </div>";
                    j.find(".klwft-right .klwftr-topnews").after(String.format(d, b, i, g, c, k));
                    if (j.find("ul.klwftr-news li").length > 2) {
                        j.find("ul.klwftr-news li:last").remove()
                    }
                    b = j.find(".klwftr-topnews:first > a").attr("href").trim();
                    c = j.find(".klwftr-topnews:first .klwftrt-title a").text().trim();
                    i = j.find(".klwftr-topnews:first > a").attr("title").trim();
                    j.find(".klwftr-topnews:first").hide();
                    var f = "<li class='klwftrn'><h2><a href='{0}' title='{1}'>{2}</a></h2></li>";
                    j.find(".klwftr-news").prepend(String.format(f, b, i, c));
                    if (j.find("ul.klwftr-news li").length > 2) {
                        j.find("ul.klwftr-news li:last").hide()
                    }
                }
            } else {
                j.find(".prM13").remove()
            }
        }
        if (j.find(".prM1").length > 0) {
            var e = j.find(".prM1").attr("lc");
            if (e == 0 || e == LC) {
                j.find(".prM1").removeAttr("style");
                b = j.find(".klwftr-topnews:first > a").attr("href").trim();
                c = j.find(".klwftr-topnews:first .klwftrt-title a").text().trim();
                i = j.find(".klwftr-topnews:first > a").attr("title").trim();
                j.find(".klwftr-topnews:first").hide();
                var f = "<li class='klwftrn'><h2><a href='{0}' title='{1}'>{2}</a></h2></li>";
                j.find(".klwftr-news").prepend(String.format(f, b, i, c));
                if (j.find("ul.klwftr-news li").length > 2) {
                    j.find("ul.klwftr-news li:last").hide()
                }
            } else {
                j.find(".prM1").remove()
            }
        }
    },
    removeList: function(b) {
        var a = this;
        $(a.divList).find('>li .knswli-title > a[href="' + b + '"]').parents("li").remove()
    },
    listAppend: function(h, d, j, g, m, k, f, l, c, b) {
        var a = this;
        var e = "<li class='knswli need-get-value-facebook clearfix' data-boxtype='NewsPublish'><div class='knswli-left fl'><a href='{0}' class='kscliw-ava' newsid='{7}' newstype='{9}' type='{12}' rel='newstype' title='{10}'><img src='{1}' alt='{10}' {11}></a></div><div class='knswli-right'><h3 class='knswli-title'><a href='{0}' data-id='{7}' newstype='{9}' type='{12}' rel='{8}' title='{10}'>{2}</a></h3><div class='knswli-meta'><a href='{3}' class='knswli-category'>{4}</a> - <span class='knswli-time' title='{5}'></span><span class='item-comment knswli-comment' href='{0}#mingid_comments_content' rel='{8}' style='display:none;'></span><span class='knswli-facebook item-fb' rel='{8}' style='display:none;'></span></div><span class='knswli-sapo sapo-need-trim'>{6}</span></div></li>";
        var i = $((String.format(e, d, j, g, "#", m, k, f, l, c, 0, b, "", "")));
        $(a.divList).find(">li:eq(" + h + ")").before(i)
    },
    duLichFocus: function() {
        var a = this;
        if ($(a.divDuLichFocus).find(".ttn.prM800").length > 0) {
            var k = $(a.divDuLichFocus).find(".ttn.prM800").attr("lc");
            if (k == 0 || k == LC) {
                $(a.divDuLichFocus).find(".ttn.prM800").removeAttr("style");
                if ($(a.divDuLichFocus).find(".ttn").length > 3) {
                    var e = $(a.divDuLichFocus).find(".ttn:visible:last");
                    var c = e.find(" h3 > a").attr("href");
                    var o = e.find(" h3 > a").attr("title");
                    var j = e.find(".ttn-thumb>img").attr("src");
                    var n = e.find(" h3 > a").attr("data-id");
                    var i = e.find(" h3 > a").text();
                    var h = e.find(" .ttn-sapo").text();
                    var m = e.find(" .tn-time").attr("title");
                    var l = 0;
                    a.listDuLichAppend(l, c, j, i, m, h, n, o);
                    $(a.divDuLichList).find(">li:eq(" + l + ") .tn-sapo").trimLine(2);
                    e.remove()
                }
                var g = $(a.divDuLichFocus).find(".ttn.prM800 a").attr("href");
                a.removeDuLichList(g)
            } else {
                $(a.divDuLichFocus).find(".ttn.prM800").remove()
            }
        }
        if ($(a.divDuLichKenh14Choice).find(".tfv-video.prM801").length > 0) {
            var d = $(a.divDuLichKenh14Choice).find(".tfv-video.prM801").attr("lc");
            if (d == 0 || d == LC) {
                var b = $(a.divDuLichKenh14Choice).find(".tfv-video:visible:last");
                b.remove();
                $(a.divDuLichKenh14Choice).find(".tfv-video.prM801").removeAttr("style")
            } else {
                $(a.divDuLichKenh14Choice).find(".tfv-video.prM801").remove()
            }
        }
        if ($(a.divDuLichAnCaTheGioi).find(".tfv-video.prM802").length > 0) {
            var f = $(a.divDuLichAnCaTheGioi).find(".tfv-video.prM802").attr("lc");
            if (f == 0 || f == LC) {
                console.log("mode802");
                var b = $(a.divDuLichAnCaTheGioi).find(".tfv-video:visible:last");
                b.remove();
                $(a.divDuLichAnCaTheGioi).find(".tfv-video.prM802").removeAttr("style")
            } else {
                $(a.divDuLichAnCaTheGioi).find(".tfv-video.prM802").remove()
            }
        }
    },
    listDuLichAppend: function(e, b, a, c, g, k, j, h) {
        var i = this;
        var f = "<li class='tsn-news normal clearfix'><a href='{1}' class='tn-thumb' title='{7}' newsid='{6}'><img src='{2}' alt='{7}'></a><div class='tn-info'><div class='tn-meta'><span class='tn-time date-time' title='{4}'></span></div><h3 class='tn-title'><a href='{1}' title='{7}'>{3}</a></h3><p class='tn-sapo'>{5}</p></div></li>";
        var d = $((String.format(f, "", b, a, c, g, k, j, h)));
        $(i.divDuLichList).find(">li:eq(" + e + ")").before(d)
    },
    removeDuLichList: function(b) {
        var a = this;
        $(a.divDuLichList).find('>li .tn-title > a[href="' + b + '"]').parents("li").remove()
    },
};
var regionNews = {
    isSouth: readCookie("__RC") == 5,
    divHomeFocus: ".klw-featured-news",
    divHomeTop1: ".klwfn-left",
    divHomeTop2: ".klwfn-right",
    divHomeTop7: ".klwfn-slide-wrapper .list-klwfnswn",
    homeFocus: function() {
        var f = this;
        if (f.isSouth) {
            var h = $.parseJSON($("#hidSouthHomeFocusNews").val());
            var d = "";
            var a = h[0];
            var e = "";
            e += "<div class='klwfn-left fl' newstype='" + a.Type + "' rel='wrapt-newstype'>";
            e += "   <a href='" + a.Url + "' title='" + a.Alt + "' class='klwfnl-thumb'>";
            e += "       <img src='" + a.Avatar460x289 + "' alt='" + a.Alt + "'>";
            e += "   </a>";
            e += "   <h2 class='klwfnl-title'>";
            e += "       <a href='" + a.Url + "' title='" + a.Alt + "'>" + a.Title + "</a>";
            e += "   </h2>";
            e += "   <p class='klwfnl-sapo'>" + a.Sapo + "</p>";
            e += "</div>";
            d += e;
            if (h.length > 1) {
                var g = h[1];
                var b = "";
                b += "<div class='klwfn-right fr' newstype='" + g.Type + "' rel='wrapt-newstype'>";
                b += "    <a href='" + g.Url + "' title='" + g.Alt + "' class='klwfnr-thumb'>";
                b += "        <img src='" + g.Avatar460x289 + "' alt='" + g.Alt + "'>";
                b += "    </a>";
                b += "    <h2 class='klwfnr-title'>";
                b += "        <a href='" + g.Url + "' title='" + g.Alt + "'>" + g.Title + "</a>";
                b += "    </h2>";
                b += "</div>";
                h.push(h[1])
            }
            h.push(h[0]);
            d += b;
            $(f.divHomeFocus).find(f.divHomeTop2).remove();
            $(f.divHomeFocus).find(f.divHomeTop1).remove();
            $(f.divHomeFocus).prepend(d);
            var c = "";
            $.each(h, function(k, j) {
                if (k == 0 || k == 1) {
                    return true
                }
                c += "<li class='klwfnswn swiper-slide' newstype='" + j.Type + "' rel='wrapt-newstype'>";
                c += " <a href='" + j.Url + "' title='" + j.Alt + "' class='klwfnswn-thumb'>";
                c += "      <img src='" + j.Avatar280x175 + "' alt='" + j.Alt + "'>";
                c += " </a>";
                c += " <h4 class='klwfnswn-title'>";
                c += "<a href='" + j.Url + "' title='" + j.Alt + "'>";
                c += "" + j.Title + "";
                c += "</a>";
                c += "</h4>";
                c += "</li>"
            });
            $(f.divHomeTop7).find("li").not(".prM13").remove();
            $(f.divHomeTop7).append(c)
        }
    }
};
var IMSInteractiveBasePath = ("https:" == document.location.protocol ? "https://" : "http://") + "interactive.channelvn.net";

function InitDetail() {
    InitBoxQuizz();
    getCountComment(".kbwc-socials");
    spnBeforeAfter.init();
    removeEmptyImage();
    formatLinkInDetail();
    formatShortVideoInDetail();
    equalWidthCaption()
}
var popupNews = function() {
    var k = document.title;
    var j = window.location.pathname;
    var c = 0;
    var i = false;
    var d = 0;
    var g = "news";
    if (typeof(topicId) != "undefined") {
        d = topicId
    }
    if (typeof(topicname) != "undefined") {
        g = topicname
    }

    function h(m, p, n, o) {
        $.ajax({
            url: m,
            dataType: "html",
            success: function(q) {
                if (q + "" == "") {
                    b();
                    return
                }
                setTimeout(function() {
                    $(".light-box").html("").append('<div class="ct-main"></div>');
                    $(".light-box .ct-main").html(q);
                    f();
                    $(".light-box .link-content-footer").remove();
                    $(".light-box .facebook-button-share").each(function() {
                        var t = $(this).attr("data-url");
                        var s = $(this);
                        s.next().hide()
                    });
                    $(".light-box .facebook-button iframe").css("width", "200px");
                    $(".light-box .lb-news-content header img").css("max-width", "100%");
                    if ($(".light-box-content").length > 0) {
                        $(".light-box-content").scrollTop(0)
                    } else {
                        $(".light-box-bounder").scrollTop(0)
                    }
                    $("body").css({
                        overflow: "hidden"
                    });
                    if (o) {
                        o()
                    }
                    document.title = p.title;
                    if (!n) {
                        history.pushState(p, p.title, p.url)
                    }
                    var r = $(".light-box").offset().left + $(".light-box").width() - 18;
                    $(".close-wrap").css({
                        position: "absolute",
                        left: r
                    }).show();
                    if ($("#ContentFirstShort").is(":visible")) {
                        videoHD.isHideControlbar = false;
                        videoHD.init("#ContentFirstShort", {
                            type: videoHD.videoType.newsDetail
                        })
                    } else {
                        videoHD.isHideControlbar = false;
                        videoHD.init("#ContentFirstFull", {
                            type: videoHD.videoType.newsDetail
                        })
                    }
                    setTimeout(function() {
                        if ($(".light-box .threads").length > 0) {
                            var t = 0;
                            var s = 0;
                            $(".light-box .threads li").each(function() {
                                var u = $(this);
                                s = u.outerHeight();
                                if (s > t) {
                                    t = s
                                }
                            })
                        }
                        $(".light-box  .VCSortableInPreviewMode .PhotoCMS_Caption").each(function() {
                            if ($(this).html() === "") {
                                $(this).remove()
                            } else {
                                var u = $(this).prev("div").find(">img").width();
                                if (parseInt(u) > 0) {
                                    $(this).css({
                                        width: u,
                                        margin: "0 auto"
                                    })
                                }
                            }
                        })
                    }, 1500)
                }, 0)
            },
            error: function() {
                console.log("lỗi không lấy được dữ liệu");
                $(".light-box-bounder").fadeOut(50)
            }
        })
    }

    function l(m) {
        var o = $("#first-krw-list .lb-news-content").height();
        var n = $("#first-krw-list .lb-banner").height();
        if (o == n) {
            clearInterval(m);
            return
        }
        if (o > n) {
            $("#first-krw-list .lb-banner").height($("#first-krw-list .lb-news-content").height())
        } else {
            $("#first-krw-list .lb-news-content").height($("#first-krw-list .lb-banner").height())
        }
    }

    function b() {
        document.title = refTitle;
        history.pushState({
            title: refTitle,
            url: refUrl,
            requestUrl: ""
        }, refTitle, refUrl);
        a();
        $(".close-wrap").hide();
        $(".light-box").addClass("loading");
        $(".light-box-bounder").fadeOut(50, function() {
            $("body").css({
                overflow: ""
            })
        });
        var m = $('.lb-news-content .kbwc-video-cover .VCSortableInPreviewMode[type="VideoStream"]');
        if (m.length > 0) {
            m.each(function(p, n) {
                var r = $(n);
                var o = r.attr("data-key");
                var q = $('.VCSortableInPreviewMode[data-key="' + o + '"] iframe');
                videoInContent.getCurrentTime("#" + r.find("iframe").attr("id"), {
                    id: "#" + q.attr("id"),
                    isSeek: true
                })
            })
        }
        setTimeout(function() {
            videoInContent.stopAllVideo()
        }, 500)
    }

    function e() {
        if (!i) {
            $(window).on("load", function() {
                setTimeout(function() {
                    window.onpopstate = function(n) {
                        if (n.state) {
                            if (!n.state.url || n.state.url == popupNews.mainPageData().mainPageUrl) {
                                var o = $(".light-box-bounder").is(":hidden");
                                if (!o) {
                                    b();
                                    history.pushState(null, document.title, j)
                                } else {
                                    window.history.back()
                                }
                            } else {
                                var o = $(".light-box-bounder").is(":hidden");
                                h(n.state.requestUrl, n.state, 1, function() {
                                    $(".light-box").removeClass("loading").show();
                                    $(".light-box-content").scrollTop(0);
                                    setTimeout(function() {
                                        InitDetail();
                                        getFbData("total", false);
                                        getCountCommentLinkNotReturn(".light-box-content .kbwc-socials .item-comment", false);
                                        $(".knswli-time").timeago();
                                        fbClient.init();
                                        getCountView("light-box", "lượt xem")
                                    }, 1500)
                                });
                                if (o) {
                                    $(".light-box-bounder").hide().fadeIn(50)
                                }
                            }
                        } else {
                            var o = $(".light-box-bounder").is(":hidden");
                            if (!o) {
                                b()
                            } else {
                                window.history.back()
                            }
                        }
                    }
                }, 500)
            });
            var m;
            $(".light-box-content").on("click", function(n) {
                n.stopPropagation();
                b()
            }).scroll(function() {
                if (m) {
                    clearTimeout(m);
                    m = null
                }
                var n = $(this);
                m = setTimeout(function() {
                    var p = n.scrollTop();
                    var o = $(".lb-news-content.news-detail.expanded");
                    $.each(o, function() {
                        if (p >= $(this).position().top && p <= $(this).position().top + $(this).outerHeight()) {
                            if (location.href.indexOf($(this).attr("data-url")) >= 0) {
                                return
                            }
                            var r = $(this).attr("data-url");
                            var q = $(this).find(".news-title").html();
                            history.replaceState({
                                title: q,
                                url: r,
                                requestUrl: $(this).attr("data-share")
                            }, q, r);
                            document.title = q
                        }
                    })
                }, 0)
            });
            $(".light-box-bounder").on("click", ".close", function(n) {
                n.stopPropagation();
                b()
            });
            $(".light-box").on("click", ".threads a", function(r) {
                r.stopPropagation();
                var s = $(this);
                if (s.hasClass("no-popup")) {
                    return
                }
                r.preventDefault();
                var q = s.attr("href");
                var n = s.attr("title");
                var o = q.match(/[0-9]+\.chn/g)[0].replace(".chn", "");
                var p = String.format(Constants.apiHandlerUrl + "/popup_news/{0}/{1}/{2}.chn", d, g, o);
                a();
                h(p, {
                    title: n,
                    url: q,
                    requestUrl: p
                }, 0, function() {
                    setTimeout(function() {
                        InitDetail();
                        getFbData("share", false);
                        getCountCommentLinkNotReturn(".light-box-content .kbwc-socials .item-comment", false);
                        $(".knswli-time").timeago();
                        fbClient.init();
                        getCountView("light-box", "lượt xem")
                    }, 1500)
                })
            }).on("click", ".viewmore a", function(u) {
                u.preventDefault();
                u.stopPropagation();
                var v = $(this);
                if (v.parent().parent().parent().attr("id") != "first-krw-list") {
                    var q;
                    var s = popupNews.mainPageData().mainPageUrl;
                    q = v.attr("href").match(/[0-9]+\.chn/g)[0].replace(".chn", "");
                    var o = String.format(Constants.apiHandlerUrl + "/popup_news/{0}/{1}/{2}.chn", d, g, q);
                    var n = v.attr("href");
                    var t = v.attr("data-title");
                    history.replaceState({
                        title: t,
                        url: n,
                        requestUrl: o
                    }, t, n);
                    document.title = t;
                    var r = $(this).parent();
                    r.prev().show();
                    r.prev().prev().hide();
                    r.hide().parent().addClass("expanded");
                    r.prev().find(".VCSortableInPreviewMode .PhotoCMS_Caption").each(function() {
                        if ($(this).html() === "") {
                            $(this).remove()
                        } else {
                            var p = $(this).prev("div").find(">img").width();
                            if (parseInt(p) > 0) {
                                $(this).css({
                                    width: p,
                                    margin: "0 auto"
                                })
                            }
                        }
                    })
                } else {
                    v.parent().parent().removeClass("max-height-3000");
                    $("#ContentFirstShort").remove();
                    videoHD.isHideControlbar = false;
                    videoHD.init("#ContentFirstFull", {
                        type: videoHD.videoType.newsDetail,
                        useBg: false
                    });
                    setTimeout(function() {
                        videoInPopup.init("#ContentFirstFull")
                    }, 500)
                }
                equalWidthCaption()
            }).on("click", ".facebook-button-share", function(n) {
                n.preventDefault();
                var o = window.open($(this).attr("href"), "_blank", "width=100px;height=100px")
            }).on("click", ".kbwcs-comment-link", function(n) {
                n.preventDefault();
                n.stopPropagation();
                history.pushState({
                    title: refTitle,
                    url: refUrl,
                    requestUrl: ""
                }, refTitle, refUrl);
                window.location.href = $(this).attr("href");
                return false
            });
            $(".light-box").click(function(n) {
                n.stopPropagation()
            });
            $(window).resize(function() {
                var n = $(".light-box").offset().left + $(".light-box").width() - 18;
                $(".close-wrap").css({
                    position: "absolute",
                    left: n
                })
            });
            i = true
        }
    }

    function a() {
        $("#popup_ads_placeholder").append($("#popup_ads"));
        $("#popup-highlight-placeholder").append($("#popup-highlight"));
        try {
            $("#admzone1426").html("");
            admicroAD.loaded = ADS_CHECKER.array_diff(admicroAD.loaded, [1426])
        } catch (m) {}
    }

    function f() {
        if ($(".ct-main .lb-banner #popup_ads").length == 0) {
            $(".ct-main .lb-banner").append($("#popup_ads"));
            if (admicroAD.loaded != undefined) {
                var m = admicroAD.loaded.indexOf("1426");
                if (m <= 0) {
                    admicroAD.unit.push(function() {
                        admicroAD.show("admzone1426")
                    })
                }
            } else {
                admicroAD.unit.push(function() {
                    admicroAD.show("admzone1426")
                })
            }
        }
    }
    return {
        mainPageData: function() {
            return {
                mainPageTitle: k,
                mainPageUrl: j
            }
        },
        init: function() {
            e();
            popupNews.addNewsEventClick(".k14-topic-fancy");
            popupNews.addNewsEventClick(".avatar-video .kscliw-ava")
        },
        addNewsEventClick: function(m) {
            $(m + ":not(.done-click)").on("click", function(n) {
                n.preventDefault();
                var q = $(this);
                var o = q.attr("href");
                var p = q.attr("title");
                $(".light-box-bounder").hide().fadeIn(50, function() {
                    if ($(".light-box .loading-image").length == 0) {
                        $(".light-box").append('<div class="loading-image"><img src="http://sohanews.sohacdn.com/web_images/loading.gif" /> Loading...</div>').addClass("loading").show()
                    }
                    var t = q.attr("href").match(/[0-9]+\.chn/g)[0].replace(".chn", "");
                    var s = popupNews.mainPageData().mainPageUrl;
                    var r = String.format(Constants.apiHandlerUrl + "/popup_news/{0}/{1}/{2}.chn", d, g, t);
                    h(r, {
                        title: p,
                        url: o,
                        requestUrl: r
                    }, 0, function() {
                        $(".light-box").removeClass("loading").find(".loading-image").remove();
                        $(".light-box-content").scrollTop(0);
                        setTimeout(function() {
                            InitDetail();
                            getFbData("share", false);
                            $(".knswli-time").timeago();
                            getCountCommentLinkNotReturn(".light-box-content .kbwc-socials .item-comment", false);
                            fbClient.init();
                            getCountView("light-box", "lượt xem")
                        }, 0)
                    })
                })
            });
            $(m + ":not[.done-click]").addClass("done-click")
        }
    }
}();
var poll = function() {
    var d = {
        url: Constants.apiHandlerUrl + "/Handler/Detail/Vote.ashx"
    };
    var c = {
        isVoting: false,
        isViewing: false
    };

    function b(f, g, h) {
        if (c.isVoting) {
            return
        }
        c.isVoting = true;
        $.ajax({
            url: d.url,
            data: {
                action: "vote",
                voteId: f,
                voteItemIds: g
            },
            error: function() {
                c.isVoting = false
            },
            success: function(i) {
                vcCore.exec(h);
                c.isVoting = false
            }
        })
    }

    function a(f, h, g) {
        if (c.isViewing) {
            return
        }
        c.isViewing = true;
        ajax.vote.getResult(f, {
            dataType: "json",
            error: function() {
                c.isViewing = false
            },
            success: function(m) {
                for (var k = 0; k < h.length; k++) {
                    for (var l = 0; l < m.length; l++) {
                        if (h[k].Id == m[l].Value) {
                            h[k].VoteRate = m[l].VoteRate;
                            continue
                        }
                    }
                }
                e(h, g);
                c.isViewing = false
            }
        })
    }

    function e(m, h) {
        if (m && m.length > 0) {
            var k = '<div id="VCPollView">';
            k += '<div id="popup-poll-left">';
            k += '    <div class="popup-poll-content">';
            k += '        <span class="p-text">Kết quả khảo sát:</span>';
            if ($(".VoteObjectBoxTitle a").length > 0) {
                k += '        <h2 class="p-title">' + h + "</h2>"
            } else {
                k += '        <h2 class="p-title">' + $(".k14_poll_embed_p1 span").html() + "</h2>"
            }
            k += '        <span class="p-sapo">Bạn có thể chọn nhiều mục. Bình chọn của bạn sẽ được công khai</span>';
            k += "        <ul>";
            var f = 0;
            for (var g = 0, j = m.length; g < j; g++) {
                var n = m[g];
                f += n.VoteRate;
                k += "            <li>";
                k += '                <span class="p-vote-title">' + n.Value + "</span>";
                k += '                <span class="p-vote-percent" vote="' + n.VoteRate + '"><span style="width:0%;text-align:center;white-space:nowrap">' + n.VoteRate + " bình chọn</span></span>";
                k += "            </li>"
            }
            k += "        </ul>";
            k += "    </div>";
            k += "</div>";
            k += "</div>";
            $.fancybox.open({
                padding: 0,
                content: k,
                beforeShow: function() {
                    $("#VCPollView").parent(".fancybox-inner").parent(".fancybox-wrap").parent("#fancybox-lock").css({
                        "background-color": "black"
                    });
                    $("#VCPollView").parent(".fancybox-inner").css({
                        "border-width": "0",
                        "margin-left": "0",
                        "max-height": "none"
                    });
                    $("#VCPollView").parent(".fancybox-inner").parent(".fancybox-wrap").css({
                        height: "auto!important",
                        width: "800px",
                        padding: "15px 0"
                    })
                },
                onUpdate: function() {
                    $(window).scroll(function() {
                        try {
                            $.fancybox.close().transitions()
                        } catch (i) {}
                    })
                },
                nextEffect: "none",
                prevEffect: "none",
                openEffect: "none",
                closeEffect: "none",
                hideOnContentClick: true
            });
            $(".popup-poll-content ul li .p-vote-percent").each(function() {
                var i = parseInt($(this).attr("vote"));
                var l = f == 0 ? 0 : (i / f * 100);
                l = Math.round(l * 100) / 100;
                $(this).find("span").css("width", l + "%")
            })
        }
    }
    return {
        vote: function(m) {
            if (m) {
                m = $(m);
                var n = m.attr("voteid");
                var i = "vote" + n;
                var g = vcCore.getCookie(i);
                var l = 60000;
                var f = new Date();
                if (g) {
                    var q = parseInt((l - (f.getTime() - (new Date(g)).getTime())) / (1000));
                    alert(String.format("Vui lòng bình chọn sau {0} phút {1} giây nữa.", parseInt(q / 60), q % 60));
                    return
                }
                var p = m.closest('.VCSortableInPreviewMode[type="Vote"]');
                if (p && p.length > 0) {
                    var k = p.find("input:checked");
                    if (k && k.length > 0) {
                        var r = [];
                        k.each(function() {
                            r.push($(this).val())
                        });
                        b(n, r.join(","), function() {
                            vcCore.setCookie(i, f, new Date(f.getTime() + l));
                            p.find(".VCPollViewResult:first").click()
                        })
                    } else {
                        alert("Bạn chưa có lựa chọn nào.")
                    }
                } else {
                    var h = m.closest(".k14_poll_embed");
                    var o = h.find('input[type="radio"]:checked');
                    if (o && o.length > 0) {
                        var j = [];
                        o.each(function() {
                            j.push($(this).val())
                        });
                        b(n, j.join(","), function() {
                            vcCore.setCookie(i, f, new Date(f.getTime() + l));
                            h.find(".k14_poll_embed_b3:first").click()
                        })
                    } else {
                        alert("Bạn chưa có lựa chọn nào.")
                    }
                }
            }
        },
        view: function(k) {
            if (k) {
                k = $(k);
                var q = k.closest('.VCSortableInPreviewMode[type="Vote"]');
                var u = q.find(".VoteObjectBoxTitle > a").html();
                var o = k.attr("voteid");
                var h = [];
                var t = q.find("input");
                if (t && t.length > 0) {
                    for (var j = 0, m = t.length; j < m; j++) {
                        var s = $(t[j]);
                        var r = s.attr("id");
                        var g = $(String.format('[for="{0}"]', r)).text();
                        var p = {
                            Id: s.val(),
                            VoteId: o,
                            Value: g,
                            VoteRate: 0
                        };
                        h.push(p)
                    }
                    a(o, h, u)
                } else {
                    var f = k.closest(".k14_poll_embed");
                    var n = f.find('input[type="radio"]');
                    for (var j = 0, m = n.length; j < m; j++) {
                        var s = $(n[j]);
                        var r = s.attr("id");
                        var g = s.parent().find(".k14_poll_embed_s1").html();
                        var p = {
                            Id: s.val(),
                            VoteId: o,
                            Value: g,
                            VoteRate: 0
                        };
                        h.push(p)
                    }
                    a(o, h, "")
                }
            }
        },
        init: function() {
            var f = $('.VCSortableInPreviewMode[type="Vote"]');
            f.each(function(j, g) {
                var h = $(g);
                var i = h.attr("voteid");
                h.find(".VCPollFooter").html('<a href="javascript:;" onclick="poll.vote(this);" voteid="' + i + '" class="VCPollSubmit">Bình chọn</a><a href="javascript:;" onclick="poll.view(this);" voteid="' + i + '"  class="VCPollViewResult">Xem kết quả</a>')
            })
        }
    }
}(jQuery);

function checkVote(c) {
    if (!$(c).is("input")) {
        var a = $(c).find("input");
        var d = "";
        if (a.attr("type") == "radio") {
            var b = $(c).parent("div").find("div");
            $(b).each(function(e) {
                if ($(this).hasClass("even")) {
                    $(this).css("background", "#ececec")
                } else {
                    if ($(this).hasClass("odd")) {
                        $(this).css("background", "")
                    }
                }
            })
        }
        if ($(c).hasClass("even")) {
            d = "#ececec"
        } else {
            d = ""
        }
        if ($(a).is(":checked")) {
            $(a).attr("checked", false);
            $(c).css("background", d)
        } else {
            $(a).attr("checked", true);
            $(c).css("background", background_hover)
        }
    } else {
        var a = $(c);
        if ($(a).is(":checked")) {
            $(a).attr("checked", false)
        } else {
            $(a).attr("checked", true)
        }
    }
}
var ajax = function() {
    return {
        vote: {
            getResult: function(a, b) {
                $.ajax($.extend(b, {
                    url: Constants.apiHandlerUrl + "/vote-result.chn?voteId=" + a + "&amp;action=view"
                }))
            }
        }
    }
}(jQuery);
var vcCore = function() {
    return {
        isAbsoluteUrl: function(a) {
            return !vcCore.isEmpty(a) && (a.indexOf("http://") == 0 || a.indexOf("https://") == 0)
        },
        isSmartPhone: function() {
            return (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i) != null)
        },
        isEmpty: function(a) {
            return a == undefined || a == "" || vcCore.isEmptyObject(a)
        },
        isEmptyObject: function(b) {
            for (var a in b) {
                return false
            }
            return true
        },
        isIE: function() {
            return $("html").hasClass("ie")
        },
        isIE7: function() {
            return $("html").hasClass("ie7")
        },
        isIE8: function() {
            return $("html").hasClass("ie8")
        },
        isIE9: function() {
            return $("html").hasClass("ie9")
        },
        addToCache: function(a, b) {
            if (!b) {
                b = a;
                a = "js" + Math.floor(Math.random() * 1000000)
            }
            vcCore[a] = b;
            return a
        },
        getFromCache: function(a) {
            return vcCore[a]
        },
        exec: function(a) {
            if (typeof a == "function") {
                a()
            }
        },
        getUrlParameter: function(a, b) {
            return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(b) || [, ""])[1].replace(/\+/g, "%20")) || null
        },
        getCookie: function(d) {
            var a = document.cookie;
            var c = a.indexOf(" " + d + "=");
            if (c == -1) {
                c = a.indexOf(d + "=")
            }
            if (c == -1) {
                a = null
            } else {
                c = a.indexOf("=", c) + 1;
                var b = a.indexOf(";", c);
                if (b == -1) {
                    b = a.length
                }
                a = unescape(a.substring(c, b))
            }
            return a
        },
        setCookie: function(d, a, c) {
            var b = escape(a) + ((c == null) ? "" : "; expires=" + c.toUTCString());
            document.cookie = d + "=" + b
        },
        createObject: function() {
            return {}
        }
    }
}(jQuery);