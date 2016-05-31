(function(){this.metal=this.metal||{},this.metalNamed=this.metalNamed||{};var t={};t["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},t.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},t.possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.abstractMethod=function(){throw Error("Unimplemented abstract method")},e.collectSuperClassesProperty=function(t,e){for(var n=[t[e]];t.__proto__&&!t.__proto__.isPrototypeOf(Function);)t=t.__proto__,n.push(t[e]);return n},e.getFunctionName=function(t){if(!t.name){var e=t.toString();t.name=e.substring(9,e.indexOf("("))}return t.name},e.getUid=function(t){return t?t[e.UID_PROPERTY]||(t[e.UID_PROPERTY]=e.uniqueIdCounter_++):e.uniqueIdCounter_++},e.identityFunction=function(t){return t},e.isBoolean=function(t){return"boolean"==typeof t},e.isDef=function(t){return void 0!==t},e.isDefAndNotNull=function(t){return e.isDef(t)&&!e.isNull(t)},e.isDocument=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&9===e.nodeType},e.isElement=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&1===e.nodeType},e.isFunction=function(t){return"function"==typeof t},e.isNull=function(t){return null===t},e.isNumber=function(t){return"number"==typeof t},e.isWindow=function(t){return null!==t&&t===t.window},e.isObject=function(e){var n="undefined"==typeof e?"undefined":t["typeof"](e);return"object"===n&&null!==e||"function"===n},e.isPromise=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&"function"==typeof e.then},e.isString=function(t){return"string"==typeof t},e.mergeSuperClassesProperty=function(t,n,i){var o=n+"_MERGED";if(t.hasOwnProperty(o))return!1;var r=e.collectSuperClassesProperty(t,n);return i&&(r=i(r)),t[o]=r,!0},e.nullFunction=function(){},e}();e.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),e.uniqueIdCounter_=1,this.metal.core=e}.call(this),function(){var e=this.metal.core,n=function(){function n(){t.classCallCheck(this,n)}return n.equal=function(t,e){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return t.length===e.length},n.firstDefinedValue=function(t){for(var e=0;e<t.length;e++)if(void 0!==t[e])return t[e]},n.flatten=function(t,e){for(var i=e||[],o=0;o<t.length;o++)Array.isArray(t[o])?n.flatten(t[o],i):i.push(t[o]);return i},n.remove=function(t,e){var i,o=t.indexOf(e);return(i=o>=0)&&n.removeAt(t,o),i},n.removeAt=function(t,e){return 1===Array.prototype.splice.call(t,e,1).length},n.slice=function(t,n,i){for(var o=[],r=e.isDef(i)?i:t.length,s=n;r>s;s++)o.push(t[s]);return o},n}();this.metal.array=n}.call(this),function(){var t={};t.throwException=function(e){t.nextTick(function(){throw e})},t.run=function(e,n){t.run.workQueueScheduled_||(t.nextTick(t.run.processWorkQueue),t.run.workQueueScheduled_=!0),t.run.workQueue_.push(new t.run.WorkItem_(e,n))},t.run.workQueueScheduled_=!1,t.run.workQueue_=[],t.run.processWorkQueue=function(){for(;t.run.workQueue_.length;){var e=t.run.workQueue_;t.run.workQueue_=[];for(var n=0;n<e.length;n++){var i=e[n];try{i.fn.call(i.scope)}catch(o){t.throwException(o)}}}t.run.workQueueScheduled_=!1},t.run.WorkItem_=function(t,e){this.fn=t,this.scope=e},t.nextTick=function(e,n){var i=e;return n&&(i=e.bind(n)),i=t.nextTick.wrapCallback_(i),"function"==typeof setImmediate?void setImmediate(i):(t.nextTick.setImmediate_||(t.nextTick.setImmediate_=t.nextTick.getSetImmediateEmulator_()),void t.nextTick.setImmediate_(i))},t.nextTick.setImmediate_=null,t.nextTick.getSetImmediateEmulator_=function(){var t;if("function"==typeof MessageChannel&&(t=MessageChannel),"undefined"==typeof t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&(t=function(){var t=document.createElement("iframe");t.style.display="none",t.src="",document.documentElement.appendChild(t);var e=t.contentWindow,n=e.document;n.open(),n.write(""),n.close();var i="callImmediate"+Math.random(),o=e.location.protocol+"//"+e.location.host,r=function(t){t.origin!==o&&t.data!==i||this.port1.onmessage()}.bind(this);e.addEventListener("message",r,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(i,o)}}}),"undefined"!=typeof t){var e=new t,n={},i=n;return e.port1.onmessage=function(){n=n.next;var t=n.cb;n.cb=null,t()},function(t){i.next={cb:t},i=i.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("script")?function(t){var e=document.createElement("script");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){setTimeout(t,0)}},t.nextTick.wrapCallback_=function(t){return t},this.metal.async=t}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e),this.disposed_=!1}return e.prototype.dispose=function(){this.disposed_||(this.disposeInternal(),this.disposed_=!0)},e.prototype.disposeInternal=function(){},e.prototype.isDisposed=function(){return this.disposed_},e}();this.metal.Disposable=e}.call(this),function(){var e=this.metal.core,n=function(){function n(){t.classCallCheck(this,n)}return n.mixin=function(t){for(var e,n,i=1;i<arguments.length;i++){n=arguments[i];for(e in n)t[e]=n[e]}return t},n.getObjectByName=function(t,n){for(var i,o=t.split("."),r=n||window;i=o.shift();){if(!e.isDefAndNotNull(r[i]))return null;r=r[i]}return r},n.map=function(t,e){for(var n={},i=Object.keys(t),o=0;o<i.length;o++)n[i[o]]=e(i[o],t[i[o]]);return n},n}();this.metal.object=n}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.collapseBreakingSpaces=function(t){return t.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")},e.getRandomString=function(){var t=2147483648;return Math.floor(Math.random()*t).toString(36)+Math.abs(Math.floor(Math.random()*t)^Date.now()).toString(36)},e.hashCode=function(t){for(var e=0,n=0,i=t.length;i>n;n++)e=31*e+t.charCodeAt(n),e%=4294967296;return e},e.replaceInterval=function(t,e,n,i){return t.substring(0,e)+i+t.substring(n)},e}();this.metal.string=e}.call(this),function(){var t=this.metal.core,e=this.metal.array,n=this.metal.async,i=this.metal.Disposable,o=this.metal.object,r=this.metal.string;this.metal.metal=t,this.metalNamed.metal={},this.metalNamed.metal.core=t,this.metalNamed.metal.array=e,this.metalNamed.metal.async=n,this.metalNamed.metal.Disposable=i,this.metalNamed.metal.object=o,this.metalNamed.metal.string=r}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=function(e){function n(i,o,r){t.classCallCheck(this,n);var s=t.possibleConstructorReturn(this,e.call(this));return s.emitter_=i,s.event_=o,s.listener_=r,s}return t.inherits(n,e),n.prototype.disposeInternal=function(){this.removeListener(),this.emitter_=null,this.listener_=null},n.prototype.removeListener=function(){this.emitter_.isDisposed()||this.emitter_.removeListener(this.event_,this.listener_)},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"EventHandle"),this.metal.EventHandle=n}.call(this),function(){var e=this.metalNamed.metal.core,n=this.metalNamed.metal.array,i=this.metalNamed.metal.Disposable,o=this.metal.EventHandle,r=function(i){function r(){t.classCallCheck(this,r);var e=t.possibleConstructorReturn(this,i.call(this));return e.events_=[],e.maxListeners_=10,e.shouldUseFacade_=!1,e}return t.inherits(r,i),r.prototype.addListener=function(t,e,n){this.validateListener_(e),t=this.normalizeEvents_(t);for(var i=0;i<t.length;i++)this.addSingleListener_(t[i],e,n);return new o(this,t,e)},r.prototype.addSingleListener_=function(t,e,n,i){this.emit("newListener",t,e),this.events_[t]||(this.events_[t]=[]),this.events_[t].push({"default":n,fn:e,origin:i});var o=this.events_[t];o.length>this.maxListeners_&&!o.warned&&(o.warned=!0)},r.prototype.disposeInternal=function(){this.events_=[]},r.prototype.emit=function(t){var e,i=n.slice(arguments,1),o=(this.events_[t]||[]).concat();this.getShouldUseFacade()&&(e={preventDefault:function(){e.preventedDefault=!0},target:this,type:t},i.push(e));for(var r=[],s=0;s<o.length;s++)o[s]["default"]?r.push(o[s]):o[s].fn.apply(this,i);if(!e||!e.preventedDefault)for(var a=0;a<r.length;a++)r[a].fn.apply(this,i);return"*"!==t&&this.emit.apply(this,["*",t].concat(i)),o.length>0},r.prototype.getShouldUseFacade=function(){return this.shouldUseFacade_},r.prototype.listeners=function(t){return(this.events_[t]||[]).map(function(t){return t.fn})},r.prototype.many=function(t,e,n){t=this.normalizeEvents_(t);for(var i=0;i<t.length;i++)this.many_(t[i],e,n);return new o(this,t,n)},r.prototype.many_=function(t,e,n){function i(){0===--e&&o.removeListener(t,i),n.apply(o,arguments)}var o=this;0>=e||o.addSingleListener_(t,i,!1,n)},r.prototype.matchesListener_=function(t,e){return t.fn===e||t.origin&&t.origin===e},r.prototype.normalizeEvents_=function(t){return e.isString(t)?[t]:t},r.prototype.off=function(t,e){this.validateListener_(e),t=this.normalizeEvents_(t);for(var n=0;n<t.length;n++){var i=this.events_[t[n]]||[];this.removeMatchingListenerObjs_(i,e)}return this},r.prototype.on=function(){return this.addListener.apply(this,arguments)},r.prototype.once=function(t,e){return this.many(t,1,e)},r.prototype.removeAllListeners=function(t){if(t)for(var e=this.normalizeEvents_(t),n=0;n<e.length;n++)this.events_[e[n]]=null;else this.events_={};return this},r.prototype.removeMatchingListenerObjs_=function(t,e){for(var n=t.length-1;n>=0;n--)this.matchesListener_(t[n],e)&&t.splice(n,1)},r.prototype.removeListener=function(){return this.off.apply(this,arguments)},r.prototype.setMaxListeners=function(t){return this.maxListeners_=t,this},r.prototype.setShouldUseFacade=function(t){return this.shouldUseFacade_=t,this},r.prototype.validateListener_=function(t){if(!e.isFunction(t))throw new TypeError("Listener must be a function")},r}(i);r.prototype.registerMetalComponent&&r.prototype.registerMetalComponent(r,"EventEmitter"),this.metal.EventEmitter=r}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=this.metalNamed.metal.object,i=function(e){function i(n,o,r,s){t.classCallCheck(this,i);var a=t.possibleConstructorReturn(this,e.call(this));return a.blacklist_=r||{},a.originEmitter_=n,a.proxiedEvents_={},a.targetEmitter_=o,a.whitelist_=s,a.startProxy_(),a}return t.inherits(i,e),i.prototype.addListener_=function(t){this.originEmitter_.on(t,this.proxiedEvents_[t])},i.prototype.disposeInternal=function(){n.map(this.proxiedEvents_,this.removeListener_.bind(this)),this.proxiedEvents_=null,this.originEmitter_=null,this.targetEmitter_=null},i.prototype.proxyEvent_=function(t){if(this.shouldProxyEvent_(t)){var e=this;this.proxiedEvents_[t]=function(){var n=[t].concat(Array.prototype.slice.call(arguments,0));e.targetEmitter_.emit.apply(e.targetEmitter_,n)},this.addListener_(t)}},i.prototype.removeListener_=function(t){this.originEmitter_.removeListener(t,this.proxiedEvents_[t])},i.prototype.shouldProxyEvent_=function(t){return this.whitelist_&&!this.whitelist_[t]?!1:this.blacklist_[t]?!1:!this.proxiedEvents_[t]},i.prototype.startProxy_=function(){this.targetEmitter_.on("newListener",this.proxyEvent_.bind(this))},i}(e);i.prototype.registerMetalComponent&&i.prototype.registerMetalComponent(i,"EventEmitterProxy"),this.metal.EventEmitterProxy=i}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=function(e){function n(){t.classCallCheck(this,n);var i=t.possibleConstructorReturn(this,e.call(this));return i.eventHandles_=[],i}return t.inherits(n,e),n.prototype.add=function(){for(var t=0;t<arguments.length;t++)this.eventHandles_.push(arguments[t])},n.prototype.disposeInternal=function(){this.eventHandles_=null},n.prototype.removeAllListeners=function(){for(var t=0;t<this.eventHandles_.length;t++)this.eventHandles_[t].removeListener();this.eventHandles_=[]},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"EventHandler"),this.metal.EventHandler=n}.call(this),function(){var t=this.metal.EventEmitter,e=this.metal.EventEmitterProxy,n=this.metal.EventHandle,i=this.metal.EventHandler;this.metal.events=t,this.metalNamed.events={},this.metalNamed.events.EventEmitter=t,this.metalNamed.events.EventEmitterProxy=e,this.metalNamed.events.EventHandle=n,this.metalNamed.events.EventHandler=i}.call(this),function(){var e=this.metalNamed.events.EventHandle,n=function(e){function n(i,o,r,s){t.classCallCheck(this,n);var a=t.possibleConstructorReturn(this,e.call(this,i,o,r));return a.capture_=s,a}return t.inherits(n,e),n.prototype.removeListener=function(){this.emitter_.removeEventListener(this.event_,this.listener_,this.capture_)},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"DomEventHandle"),this.metal.DomEventHandle=n}.call(this),function(){var e=this.metalNamed.metal.core,n=this.metalNamed.metal.object,i=this.metal.DomEventHandle,o=function(){function o(){t.classCallCheck(this,o)}return o.addClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?o.addClassesWithNative_(t,n):o.addClassesWithoutNative_(t,n))},o.addClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.add(e)})},o.addClassesWithoutNative_=function(t,e){var n=" "+t.className+" ",i="";e=e.split(" ");for(var o=0;o<e.length;o++){var r=e[o];-1===n.indexOf(" "+r+" ")&&(i+=" "+r)}i&&(t.className=t.className+i)},o.append=function(t,n){if(e.isString(n)&&(n=o.buildFragment(n)),n instanceof NodeList)for(var i=Array.prototype.slice.call(n),r=0;r<i.length;r++)t.appendChild(i[r]);else t.appendChild(n);return n},o.buildFragment=function(t){var e=document.createElement("div");e.innerHTML="<br>"+t,e.removeChild(e.firstChild);for(var n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);return n},o.contains=function(t,n){return e.isDocument(t)?t.documentElement.contains(n):t.contains(n)},o.delegate=function(t,e,n,i){var r=o.customEvents[e];return r&&r.delegate&&(e=r.originalEvent,i=r.handler.bind(r,i)),o.on(t,e,o.handleDelegateEvent_.bind(null,n,i))},o.enterDocument=function(t){o.append(document.body,t)},o.exitDocument=function(t){t.parentNode&&t.parentNode.removeChild(t)},o.handleDelegateEvent_=function(t,n,i){o.normalizeDelegateEvent_(i);for(var r=i.target,s=!0;r&&!i.stopped&&(e.isString(t)&&o.match(r,t)&&(i.delegateTarget=r,s&=n(i)),r!==i.currentTarget);)r=r.parentNode;return i.delegateTarget=null,s},o.hasClass=function(t,e){return"classList"in t?o.hasClassWithNative_(t,e):o.hasClassWithoutNative_(t,e)},o.hasClassWithNative_=function(t,e){return t.classList.contains(e)},o.hasClassWithoutNative_=function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>=0},o.isEmpty=function(t){return 0===t.childNodes.length},o.match=function(t,e){if(!t||1!==t.nodeType)return!1;var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return i?i.call(t,e):o.matchFallback_(t,e)},o.matchFallback_=function(t,e){for(var n=document.querySelectorAll(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1},o.next=function(t,e){do if(t=t.nextSibling,t&&o.match(t,e))return t;while(t);return null},o.normalizeDelegateEvent_=function(t){t.stopPropagation=o.stopPropagation_,t.stopImmediatePropagation=o.stopImmediatePropagation_},o.on=function(t,n,r,s){if(e.isString(t))return o.delegate(document,n,t,r);var a=o.customEvents[n];return a&&a.event&&(n=a.originalEvent,r=a.handler.bind(a,r)),t.addEventListener(n,r,s),new i(t,n,r,s)},o.once=function(t,e,n){var i=this.on(t,e,function(){return i.removeListener(),n.apply(this,arguments)});return i},o.registerCustomEvent=function(t,e){o.customEvents[t]=e},o.removeChildren=function(t){for(var e;e=t.firstChild;)t.removeChild(e)},o.removeClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?o.removeClassesWithNative_(t,n):o.removeClassesWithoutNative_(t,n))},o.removeClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.remove(e)})},o.removeClassesWithoutNative_=function(t,e){var n=" "+t.className+" ";e=e.split(" ");for(var i=0;i<e.length;i++)n=n.replace(" "+e[i]+" "," ");t.className=n.trim()},o.replace=function(t,e){t&&e&&t!==e&&t.parentNode&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},o.stopImmediatePropagation_=function(){this.stopped=!0,Event.prototype.stopImmediatePropagation.call(this)},o.stopPropagation_=function(){this.stopped=!0,Event.prototype.stopPropagation.call(this)},o.supportsEvent=function(t,n){return o.customEvents[n]?!0:(e.isString(t)&&(r[t]||(r[t]=document.createElement(t)),t=r[t]),"on"+n in t)},o.toElement=function(t){return e.isElement(t)||e.isDocument(t)?t:e.isString(t)?"#"===t[0]&&-1===t.indexOf(" ")?document.getElementById(t.substr(1)):document.querySelector(t):null},o.toggleClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?o.toggleClassesWithNative_(t,n):o.toggleClassesWithoutNative_(t,n))},o.toggleClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.toggle(e)})},o.toggleClassesWithoutNative_=function(t,e){var n=" "+t.className+" ";e=e.split(" ");for(var i=0;i<e.length;i++){var o=" "+e[i]+" ",r=n.indexOf(o);n=-1===r?n+e[i]+" ":n.substring(0,r)+" "+n.substring(r+o.length)}t.className=n.trim()},o.triggerEvent=function(t,e,i){var o=document.createEvent("HTMLEvents");o.initEvent(e,!0,!0),n.mixin(o,i),t.dispatchEvent(o)},o}(),r={};o.customEvents={},this.metal.dom=o}.call(this),function(){var e=this.metal.dom,n=this.metalNamed.events.EventEmitterProxy,i=function(n){function i(){return t.classCallCheck(this,i),t.possibleConstructorReturn(this,n.apply(this,arguments))}return t.inherits(i,n),i.prototype.addListener_=function(t){this.originEmitter_.addEventListener?e.on(this.originEmitter_,t,this.proxiedEvents_[t]):n.prototype.addListener_.call(this,t)},i.prototype.removeListener_=function(t){this.originEmitter_.removeEventListener?this.originEmitter_.removeEventListener(t,this.proxiedEvents_[t]):n.prototype.removeListener_.call(this,t)},i.prototype.shouldProxyEvent_=function(t){return n.prototype.shouldProxyEvent_.call(this,t)&&(!this.originEmitter_.addEventListener||e.supportsEvent(this.originEmitter_,t))},i}(n);i.prototype.registerMetalComponent&&i.prototype.registerMetalComponent(i,"DomEventEmitterProxy"),this.metal.DomEventEmitterProxy=i}.call(this),function(){var e=this.metal.dom,n=this.metalNamed.metal.string,i=function(){function i(){t.classCallCheck(this,i)}return i.checkAnimationEventName=function(){return void 0===i.animationEventName_&&(i.animationEventName_={animation:i.checkAnimationEventName_("animation"),transition:i.checkAnimationEventName_("transition")}),i.animationEventName_},i.checkAnimationEventName_=function(t){for(var e=["Webkit","MS","O",""],o=n.replaceInterval(t,0,1,t.substring(0,1).toUpperCase()),r=[o+"End",o+"End",o+"End",t+"end"],s=0;s<e.length;s++)if(void 0!==i.animationElement_.style[e[s]+o])return e[s].toLowerCase()+r[s];return t+"end"},i.checkAttrOrderChange=function(){if(void 0===i.attrOrderChange_){var t='<div data-component="" data-ref=""></div>',n=document.createElement("div");e.append(n,t),i.attrOrderChange_=t!==n.innerHTML}return i.attrOrderChange_},i}();i.animationElement_=document.createElement("div"),i.animationEventName_=void 0,i.attrOrderChange_=void 0,this.metal.features=i}.call(this),function(){var e=this.metalNamed.metal.async,n=this.metal.dom,i=function(){function i(){t.classCallCheck(this,i)}return i.run=function(t,e){var i=document.createElement("script");return i.text=t,e?e(i):document.head.appendChild(i),n.exitDocument(i),i},i.runFile=function(t,e,i){var o=document.createElement("script");o.src=t;var r=function(){n.exitDocument(o),e&&e()};return n.on(o,"load",r),n.on(o,"error",r),i?i(o):document.head.appendChild(o),o},i.runScript=function(t,o,r){var s=function(){o&&o()};return t.type&&"text/javascript"!==t.type?void e.nextTick(s):(n.exitDocument(t),t.src?i.runFile(t.src,o,r):(e.nextTick(s),i.run(t.text,r)))},i.runScriptsInElement=function(t,n,o){var r=t.querySelectorAll("script");r.length?i.runScriptsInOrder(r,0,n,o):n&&e.nextTick(n)},i.runScriptsInOrder=function(t,n,o,r){i.runScript(t.item(n),function(){n<t.length-1?i.runScriptsInOrder(t,n+1,o,r):o&&e.nextTick(o)},r)},i}();this.metal.globalEval=i}.call(this),function(){var e=this.metalNamed.metal.async,n=this.metal.dom,i=function(){function i(){t.classCallCheck(this,i)}return i.run=function(t,e){var n=document.createElement("style");return n.innerHTML=t,e?e(n):document.head.appendChild(n),n},i.runFile=function(t,e,n){var o=document.createElement("link");return o.rel="stylesheet",o.href=t,i.runStyle(o,e,n),o},i.runStyle=function(t,i,o){var r=function(){i&&i()};return t.rel&&"stylesheet"!==t.rel?void e.nextTick(r):("STYLE"===t.tagName?e.nextTick(r):(n.on(t,"load",r),n.on(t,"error",r)),o?o(t):document.head.appendChild(t),t)},i.runStylesInElement=function(t,n,o){var r=t.querySelectorAll("style,link");if(0===r.length&&n)return void e.nextTick(n);for(var s=0,a=function(){n&&++s===r.length&&e.nextTick(n)},l=0;l<r.length;l++)i.runStyle(r[l],a,o)},i}();this.metal.globalEvalStyles=i}.call(this),function(){var t=this.metal.dom,e=this.metal.features,n={mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"};Object.keys(n).forEach(function(e){t.registerCustomEvent(e,{delegate:!0,handler:function(t,n){var i=n.relatedTarget,o=n.delegateTarget;return!i||i!==o&&!o.contains(i)?(n.customType=e,t(n)):void 0},originalEvent:n[e]})});var i={animation:"animationend",transition:"transitionend"};Object.keys(i).forEach(function(n){var o=i[n];t.registerCustomEvent(o,{event:!0,delegate:!0,handler:function(t,e){return e.customType=o,t(e)},originalEvent:e.checkAnimationEventName()[n]})})}.call(this),function(){var t=this.metal.dom,e=this.metal.DomEventEmitterProxy,n=this.metal.DomEventHandle,i=this.metal.features,o=this.metal.globalEval,r=this.metal.globalEvalStyles;this.metal.dom=t,this.metalNamed.dom={},this.metalNamed.dom.dom=t,this.metalNamed.dom.DomEventEmitterProxy=e,this.metalNamed.dom.DomEventHandle=n,this.metalNamed.dom.features=i,this.metalNamed.dom.globalEval=o,this.metalNamed.dom.globalEvalStyles=r}.call(this),function(){var e=this.metalNamed.metal.array,n=this.metalNamed.metal.async,i=this.metalNamed.metal.core,o=this.metalNamed.metal.object,r=this.metalNamed.events.EventEmitter,s=function(r){function s(e){t.classCallCheck(this,s);var n=t.possibleConstructorReturn(this,r.call(this));return n.scheduledBatchData_=null,n.attrsInfo_={},n.setShouldUseFacade(!0),n.mergeInvalidAttrs_(),n.addAttrsFromStaticHint_(e),n}return t.inherits(s,r),s.prototype.addAttr=function(t,e,n){this.buildAttrInfo_(t,e,n),Object.defineProperty(this,t,this.buildAttrPropertyDef_(t))},s.prototype.addAttrs=function(t,e,n){e=e||{};for(var i=Object.keys(t),o={},r=0;r<i.length;r++){var s=i[r];this.buildAttrInfo_(s,t[s],e[s]),o[s]=this.buildAttrPropertyDef_(s)}n!==!1&&Object.defineProperties(n||this,o)},s.prototype.addAttrsFromStaticHint_=function(t){var e=this.constructor,n=!1;s.mergeAttrsStatic(e)&&(n=e.prototype),this.addAttrs(e.ATTRS_MERGED,t,n)},s.prototype.assertValidAttrName_=function(t){if(this.constructor.INVALID_ATTRS_MERGED[t])throw new Error("It's not allowed to create an attribute with the name \""+t+'".')},s.prototype.buildAttrInfo_=function(t,e,n){this.assertValidAttrName_(t),this.attrsInfo_[t]={config:e||{},initialValue:n,state:s.States.UNINITIALIZED}},s.prototype.buildAttrPropertyDef_=function(t){return{configurable:!0,enumerable:!0,get:function(){return this.getAttrValue_(t)},set:function(e){this.setAttrValue_(t,e)}}},s.prototype.callFunction_=function(t,e){return i.isString(t)?this[t].apply(this,e):i.isFunction(t)?t.apply(this,e):void 0},s.prototype.callSetter_=function(t,e){var n=this.attrsInfo_[t],i=n.config;return i.setter&&(e=this.callFunction_(i.setter,[e])),e},s.prototype.callValidator_=function(t,e){var n=this.attrsInfo_[t],i=n.config;return i.validator?this.callFunction_(i.validator,[e]):!0},s.prototype.canSetAttribute=function(t){var e=this.attrsInfo_[t];return!e.config.writeOnce||!e.written},s.prototype.disposeInternal=function(){r.prototype.disposeInternal.call(this),this.attrsInfo_=null,this.scheduledBatchData_=null},s.prototype.emitBatchEvent_=function(){if(!this.isDisposed()){var t=this.scheduledBatchData_;this.scheduledBatchData_=null,this.emit("attrsChanged",t)}},s.prototype.get=function(t){return this[t]},s.prototype.getAttrConfig=function(t){return(this.attrsInfo_[t]||{}).config},s.prototype.getAttrs=function(t){for(var e={},n=t||this.getAttrNames(),i=0;i<n.length;i++)e[n[i]]=this[n[i]];return e},s.prototype.getAttrNames=function(){return Object.keys(this.attrsInfo_)},s.prototype.getAttrValue_=function(t){return this.initAttr_(t),this.attrsInfo_[t].value},s.prototype.hasBeenSet=function(t){var e=this.attrsInfo_[t];return e.state===s.States.INITIALIZED||e.initialValue},s.prototype.informChange_=function(t,e){if(this.shouldInformChange_(t,e)){var n={attrName:t,newVal:this[t],prevVal:e};this.emit(t+"Changed",n),this.scheduleBatchEvent_(n)}},s.prototype.initAttr_=function(t){var e=this.attrsInfo_[t];e.state===s.States.UNINITIALIZED&&(e.state=s.States.INITIALIZING,this.setInitialValue_(t),e.written||(e.state=s.States.INITIALIZING_DEFAULT,this.setDefaultValue_(t)),e.state=s.States.INITIALIZED)},s.mergeAttrs_=function(t){return o.mixin.apply(null,[{}].concat(t.reverse()))},s.mergeAttrsStatic=function(t){return i.mergeSuperClassesProperty(t,"ATTRS",s.mergeAttrs_)},s.prototype.mergeInvalidAttrs_=function(){i.mergeSuperClassesProperty(this.constructor,"INVALID_ATTRS",function(t){return e.flatten(t).reduce(function(t,e){return e&&(t[e]=!0),t},{})})},s.prototype.removeAttr=function(t){this.attrsInfo_[t]=null,delete this[t]},s.prototype.scheduleBatchEvent_=function(t){this.scheduledBatchData_||(n.nextTick(this.emitBatchEvent_,this),this.scheduledBatchData_={changes:{}});var e=t.attrName,i=this.scheduledBatchData_.changes;i[e]?i[e].newVal=t.newVal:i[e]=t},s.prototype.set=function(t,e){this[t]=e},s.prototype.setAttrs=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)this[e[n]]=t[e[n]]},s.prototype.setAttrValue_=function(t,e){if(this.canSetAttribute(t)&&this.validateAttrValue_(t,e)){var n=this.attrsInfo_[t];void 0===n.initialValue&&n.state===s.States.UNINITIALIZED&&(n.state=s.States.INITIALIZED);var i=this[t];n.value=this.callSetter_(t,e),n.written=!0,this.informChange_(t,i)}},s.prototype.setDefaultValue_=function(t){var e=this.attrsInfo_[t].config;void 0!==e.value?this[t]=e.value:this[t]=this.callFunction_(e.valueFn)},s.prototype.setInitialValue_=function(t){var e=this.attrsInfo_[t];void 0!==e.initialValue&&(this[t]=e.initialValue,e.initialValue=void 0)},s.prototype.shouldInformChange_=function(t,e){var n=this.attrsInfo_[t];return n.state===s.States.INITIALIZED&&(i.isObject(e)||e!==this[t])},s.prototype.validateAttrValue_=function(t,e){var n=this.attrsInfo_[t];return n.state===s.States.INITIALIZING_DEFAULT||this.callValidator_(t,e)},s}(r);s.prototype.registerMetalComponent&&s.prototype.registerMetalComponent(s,"Attribute"),s.INVALID_ATTRS=["attrs"],s.States={UNINITIALIZED:0,INITIALIZING:1,INITIALIZING_DEFAULT:2,INITIALIZED:3},this.metal.Attribute=s}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.intersectRect=function(t,e,n,i,o,r,s,a){return!(o>n||t>s||r>i||e>a)},e}();this.metal.Geometry=e}.call(this),function(){var e=this.metal.metal,n=this.metal.Geometry,i=function(){function i(){t.classCallCheck(this,i)}return i.getClientHeight=function(t){return this.getClientSize_(t,"Height")},i.getClientSize_=function(t,n){var i=t;return e.isWindow(t)&&(i=t.document.documentElement),e.isDocument(t)&&(i=t.documentElement),i["client"+n]},i.getClientWidth=function(t){return this.getClientSize_(t,"Width")},i.getDocumentRegion_=function(t){var e=this.getHeight(t),n=this.getWidth(t);return this.makeRegion(e,e,0,n,0,n)},i.getHeight=function(t){return this.getSize_(t,"Height")},i.getOffsetLeft=function(t,e){return t.offsetLeft+(e?0:i.getTranslation(t).left)},i.getOffsetTop=function(t,e){return t.offsetTop+(e?0:i.getTranslation(t).top)},i.getRegion=function(t,n){return e.isDocument(t)||e.isWindow(t)?this.getDocumentRegion_(t):this.makeRegionFromBoundingRect_(t.getBoundingClientRect(),n)},i.getScrollLeft=function(t){return e.isWindow(t)?t.pageXOffset:e.isDocument(t)?t.defaultView.pageXOffset:t.scrollLeft},i.getScrollTop=function(t){return e.isWindow(t)?t.pageYOffset:e.isDocument(t)?t.defaultView.pageYOffset:t.scrollTop},i.getSize_=function(t,n){if(e.isWindow(t))return this.getClientSize_(t,n);if(e.isDocument(t)){var i=t.documentElement;return Math.max(t.body["scroll"+n],i["scroll"+n],t.body["offset"+n],i["offset"+n],i["client"+n])}return Math.max(t["client"+n],t["scroll"+n],t["offset"+n])},i.getTransformMatrixValues=function(t){var e=getComputedStyle(t),n=e.msTransform||e.transform||e.webkitTransform||e.mozTransform;if("none"!==n){for(var i=[],o=/([\d-\.\s]+)/g,r=o.exec(n);r;)i.push(r[1]),r=o.exec(n);return i}},i.getTranslation=function(t){var e=i.getTransformMatrixValues(t),n={left:0,top:0};return e&&(n.left=parseFloat(6===e.length?e[4]:e[13]),n.top=parseFloat(6===e.length?e[5]:e[14])),n},i.getWidth=function(t){return this.getSize_(t,"Width")},i.intersectRegion=function(t,e){return n.intersectRect(t.top,t.left,t.bottom,t.right,e.top,e.left,e.bottom,e.right)},i.insideRegion=function(t,e){return e.top>=t.top&&e.bottom<=t.bottom&&e.right<=t.right&&e.left>=t.left},i.insideViewport=function(t){return this.insideRegion(this.getRegion(window),t)},i.intersection=function(t,e){if(!this.intersectRegion(t,e))return null;var n=Math.min(t.bottom,e.bottom),i=Math.min(t.right,e.right),o=Math.max(t.left,e.left),r=Math.max(t.top,e.top);return this.makeRegion(n,n-r,o,i,r,i-o)},i.makeRegion=function(t,e,n,i,o,r){return{bottom:t,height:e,left:n,right:i,top:o,width:r}},i.makeRegionFromBoundingRect_=function(t,e){var n=e?i.getScrollLeft(document):0,o=e?i.getScrollTop(document):0;return this.makeRegion(t.bottom+o,t.height,t.left+n,t.right+n,t.top+o,t.width)},i.pointInsideRegion=function(t,e,n){return i.insideRegion(n,i.makeRegion(e,0,t,t,e,0))},i}();this.metal.Position=i}.call(this),function(){var e=this.metal.Position,n=function(){function n(){t.classCallCheck(this,n)}return n.align=function(t,n,i){var o=this.suggestAlignBestRegion(t,n,i),r=o.region,s=window.getComputedStyle(t,null);if("fixed"!==s.getPropertyValue("position")){r.top+=window.pageYOffset,r.left+=window.pageXOffset;for(var a=t;a=a.offsetParent;)r.top-=e.getOffsetTop(a),r.left-=e.getOffsetLeft(a)}return t.style.top=r.top+"px",t.style.left=r.left+"px",o.position},n.getAlignBestRegion=function(t,e,i){return n.suggestAlignBestRegion(t,e,i).region},n.getAlignRegion=function(t,i,o){var r=e.getRegion(i),s=e.getRegion(t),a=0,l=0;switch(o){case n.TopCenter:a=r.top-s.height,l=r.left+r.width/2-s.width/2;break;case n.RightCenter:a=r.top+r.height/2-s.height/2,l=r.left+r.width;break;case n.BottomCenter:a=r.bottom,l=r.left+r.width/2-s.width/2;break;case n.LeftCenter:a=r.top+r.height/2-s.height/2,l=r.left-s.width;break;case n.TopRight:a=r.top-s.height,l=r.right-s.width;break;case n.BottomRight:a=r.bottom,l=r.right-s.width;break;case n.BottomLeft:a=r.bottom,l=r.left;break;case n.TopLeft:a=r.top-s.height,l=r.left}return{bottom:a+s.height,height:s.height,left:l,right:l+s.width,
top:a,width:s.width}},n.isValidPosition=function(t){return t>=0&&8>=t},n.suggestAlignBestRegion=function(t,n,i){for(var o=0,r=i,s=this.getAlignRegion(t,n,r),a=r,l=s,u=e.getRegion(window),c=0;8>c;){if(e.intersectRegion(u,l)){var h=e.intersection(u,l),m=h.width*h.height;if(m>o&&(o=m,s=l,r=a),e.insideViewport(l))break}a=(i+ ++c)%8,l=this.getAlignRegion(t,n,a)}return{position:r,region:s}},n}();n.TopCenter=0,n.TopRight=1,n.RightCenter=2,n.BottomRight=3,n.BottomCenter=4,n.BottomLeft=5,n.LeftCenter=6,n.TopLeft=7,n.Top=n.TopCenter,n.Right=n.RightCenter,n.Bottom=n.BottomCenter,n.Left=n.LeftCenter,this.metal.Align=n}.call(this),function(){var t=this.metal.Align,e=this.metal.Geometry,n=this.metal.Position;this.metal.position=n,this.metalNamed.position={},this.metalNamed.position.Align=t,this.metalNamed.position.Geometry=e,this.metalNamed.position.Position=n}.call(this),function(){var e=this.metal.metal,n=this.metalNamed.dom.dom,i=this.metalNamed.dom.DomEventEmitterProxy,o=this.metal.Attribute,r=this.metal.events,s=this.metal.position,a=function(o){function a(e){t.classCallCheck(this,a);var n=t.possibleConstructorReturn(this,o.call(this,e));return a.emitter_||(a.emitter_=new r,a.proxy_=new i(document,a.emitter_,null,{scroll:!0})),n.lastPosition_=null,n.scrollHandle_=a.emitter_.on("scroll",n.checkPosition.bind(n)),n.on("elementChanged",n.checkPosition),n.on("offsetTopChanged",n.checkPosition),n.on("offsetBottomChanged",n.checkPosition),n.checkPosition(),n}return t.inherits(a,o),a.prototype.disposeInternal=function(){n.removeClasses(this.element,a.Position.Bottom+" "+a.Position.Default+" "+a.Position.Top),this.scrollHandle_.dispose(),o.prototype.disposeInternal.call(this)},a.prototype.checkPosition=function(){this.intersectTopRegion()?this.syncPosition(a.Position.Top):this.intersectBottomRegion()?this.syncPosition(a.Position.Bottom):this.syncPosition(a.Position.Default)},a.prototype.intersectBottomRegion=function(){if(!e.isDef(this.offsetBottom))return!1;var t=s.getHeight(this.scrollElement),n=s.getClientHeight(this.scrollElement);return s.getScrollTop(this.scrollElement)+n>=t-this.offsetBottom},a.prototype.intersectTopRegion=function(){return e.isDef(this.offsetTop)?s.getScrollTop(this.scrollElement)<=this.offsetTop:!1},a.prototype.syncPosition=function(t){this.lastPosition_!==t&&(n.addClasses(this.element,t),n.removeClasses(this.element,this.lastPosition_),this.lastPosition_=t)},a}(o);a.prototype.registerMetalComponent&&a.prototype.registerMetalComponent(a,"Affix"),a.Position={Top:"affix-top",Bottom:"affix-bottom",Default:"affix"},a.ATTRS={scrollElement:{setter:n.toElement,value:document},offsetTop:{validator:e.isNumber},offsetBottom:{validator:e.isNumber},element:{setter:n.toElement}},this.metal.Affix=a}.call(this)}).call(this);