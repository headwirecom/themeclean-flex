/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).VueCompositionAPI={},n.Vue)}(this,(function(n,e){"use strict";function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var r=t(e);function o(n){return"function"==typeof n&&/native code/.test(n.toString())}var i="undefined"!=typeof Symbol&&o(Symbol)&&"undefined"!=typeof Reflect&&o(Reflect.ownKeys),u=function(n){return n},a={enumerable:!0,configurable:!0,get:u,set:u};function f(n,e,t){var r=t.get,o=t.set;a.get=r||u,a.set=o||u,Object.defineProperty(n,e,a)}function c(n,e,t,r){Object.defineProperty(n,e,{value:t,enumerable:!!r,writable:!0,configurable:!0})}function l(n,e){return Object.hasOwnProperty.call(n,e)}function s(n){return Array.isArray(n)}function v(n){var e=parseFloat(String(n));return e>=0&&Math.floor(e)===e&&isFinite(n)}function d(n){return"[object Object]"===function(n){return Object.prototype.toString.call(n)}(n)}function p(n){return"function"==typeof n}function y(n,e){r.default.util.warn(n,e)}var _=void 0;try{var b=require("vue");b&&w(b)?_=b:b&&"default"in b&&w(b.default)&&(_=b.default)}catch(n){}var g=null,h=null,m="__composition_api_installed__";function w(n){return n&&"function"==typeof n&&"Vue"===n.name}function $(){return g}function j(n){h=n}function O(){return h?k(h):null}var x,S=new WeakMap;function k(n){if(S.has(n))return S.get(n);var e={proxy:n,update:n.$forceUpdate,uid:n._uid,emit:n.$emit.bind(n),parent:null,root:null};return["data","props","attrs","refs","vnode","slots"].forEach((function(t){f(e,t,{get:function(){return n["$"+t]}})})),f(e,"isMounted",{get:function(){return n._isMounted}}),f(e,"isUnmounted",{get:function(){return n._isDestroyed}}),f(e,"isDeactivated",{get:function(){return n._inactive}}),f(e,"emitted",{get:function(){return n._events}}),S.set(n,e),n.$parent&&(e.parent=k(n.$parent)),n.$root&&(e.root=k(n.$root)),e}function E(n){var e=O();return null==e?void 0:e.proxy}function R(n,e){void 0===e&&(e={});var t=n.config.silent;n.config.silent=!0;var r=new n(e);return n.config.silent=t,r}function M(n,e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return n.$scopedSlots[e]?n.$scopedSlots[e].apply(n,t):y("slots."+e+'() got called outside of the "render()" scope',n)}}var C=function(){return(C=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function P(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function A(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function D(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(A(arguments[e]));return n}function U(n){return i?Symbol.for(n):n}var V=U("composition-api.preFlushQueue"),B=U("composition-api.postFlushQueue"),T="composition-api.refKey",W=new WeakMap,z=new WeakMap,F=new WeakMap,I=function(n){f(this,"value",{get:n.get,set:n.set})};function K(n,e){var t=new I(n),r=Object.seal(t);return F.set(r,!0),r}function q(n){var e;if(Q(n))return n;var t=tn(((e={})[T]=n,e));return K({get:function(){return t[T]},set:function(n){return t[T]=n}})}function Q(n){return n instanceof I}function J(n){return Q(n)?n.value:n}function N(n){if(!d(n))return n;var e={};for(var t in n)e[t]=G(n,t);return e}function G(n,e){var t=n[e];return Q(t)?t:K({get:function(){return n[e]},set:function(t){return n[e]=t}})}function H(n){var e;return Boolean((null==n?void 0:n.__ob__)&&(null===(e=n.__ob__)||void 0===e?void 0:e.__raw__))}function L(n){var e;return Boolean((null==n?void 0:n.__ob__)&&!(null===(e=n.__ob__)||void 0===e?void 0:e.__raw__))}function X(n){if(!(!d(n)||H(n)||Array.isArray(n)||Q(n)||function(n){var e=$();return e&&n instanceof e}(n)||W.has(n))){W.set(n,!0);for(var e=Object.keys(n),t=0;t<e.length;t++)Y(n,e[t])}}function Y(n,e,t){if("__ob__"!==e&&!H(n[e])){var r,o,i=Object.getOwnPropertyDescriptor(n,e);if(i){if(!1===i.configurable)return;r=i.get,o=i.set,r&&!o||2!==arguments.length||(t=n[e])}X(t),Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var o=r?r.call(n):t;return e!==T&&Q(o)?o.value:o},set:function(i){if(!r||o){var u=r?r.call(n):t;e!==T&&Q(u)&&!Q(i)?u.value=i:o?o.call(n,i):t=i,X(i)}}})}}function Z(n){var e,t=g||_;t.observable?e=t.observable(n):e=R(t,{data:{$$state:n}})._data.$$state;return l(e,"__ob__")||c(e,"__ob__",function(n){void 0===n&&(n={});return{value:n,dep:{notify:u,depend:u,addSub:u,removeSub:u}}}(e)),e}function nn(){return Z({}).__ob__}function en(n){var e,t;if(!d(n)&&!s(n)||H(n)||!Object.isExtensible(n))return n;var r=Z({});X(r);var o=r.__ob__,i=function(e){var t,i,u=n[e],a=Object.getOwnPropertyDescriptor(n,e);if(a){if(!1===a.configurable)return"continue";t=a.get,i=a.set}Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:function(){var e,r=t?t.call(n):u;return null===(e=o.dep)||void 0===e||e.depend(),r},set:function(e){var r;t&&!i||(i?i.call(n,e):u=e,null===(r=o.dep)||void 0===r||r.notify())}})};try{for(var u=P(Object.keys(n)),a=u.next();!a.done;a=u.next()){i(a.value)}}catch(n){e={error:n}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}return r}function tn(n){if(!d(n)&&!s(n)||H(n)||!Object.isExtensible(n))return n;var e=Z(n);return X(e),e}function rn(n){return function(e){var t,r=E(((t=n)[0].toUpperCase(),t.slice(1)));r&&function(n,e,t,r){var o=e.$options,i=n.config.optionMergeStrategies[t];o[t]=i(o[t],function(n,e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=null===(t=O())||void 0===t?void 0:t.proxy;j(n);try{return e.apply(void 0,D(r))}finally{j(i)}}}(e,r))}($(),r,n,e)}}var on,un=rn("beforeMount"),an=rn("mounted"),fn=rn("beforeUpdate"),cn=rn("updated"),ln=rn("beforeDestroy"),sn=rn("destroyed"),vn=rn("errorCaptured"),dn=rn("activated"),pn=rn("deactivated"),yn=rn("serverPrefetch");function _n(){hn(this,V)}function bn(){hn(this,B)}function gn(){var n,e=null===(n=O())||void 0===n?void 0:n.proxy;return e?function(n){return void 0!==n[V]}(e)||function(n){n[V]=[],n[B]=[],n.$on("hook:beforeUpdate",_n),n.$on("hook:updated",bn)}(e):(on||(on=R($())),e=on),e}function hn(n,e){for(var t=n[e],r=0;r<t.length;r++)t[r]();t.length=0}function mn(n,e,t){var r=function(){n.$nextTick((function(){n[V].length&&hn(n,V),n[B].length&&hn(n,B)}))};switch(t){case"pre":r(),n[V].push(e);break;case"post":r(),n[B].push(e);break;default:!function(n,e){if(!n)throw new Error("[vue-composition-api] "+e)}(!1,'flush must be one of ["post", "pre", "sync"], but got '+t)}}function wn(n,e){var t=n.teardown;n.teardown=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t.apply(n,r),e()}}function $n(n,e,t,r){var o,i,a=r.flush,f="sync"===a,c=function(n){i=function(){try{n()}catch(n){!function(n,e,t){if("undefined"==typeof window||"undefined"==typeof console)throw n;console.error(n)}(n)}}},l=function(){i&&(i(),i=null)},s=function(e){return f||n===on?e:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return mn(n,(function(){e.apply(void 0,D(t))}),a)}};if(null===t){var v=!1,d=function(n,e,t,r){var o=n._watchers.length;return n.$watch(e,t,{immediate:r.immediateInvokeCallback,deep:r.deep,lazy:r.noRun,sync:r.sync,before:r.before}),n._watchers[o]}(n,(function(){if(!v)try{v=!0,e(c)}finally{v=!1}}),u,{deep:r.deep||!1,sync:f,before:l});wn(d,l),d.lazy=!1;var _=d.get.bind(d);return d.get=s(_),function(){d.teardown()}}var b,g=r.deep;Array.isArray(e)?b=function(){return e.map((function(n){return Q(n)?n.value:n()}))}:Q(e)?b=function(){return e.value}:L(e)?(b=function(){return e},g=!0):p(e)?b=e:(b=u,y("Invalid watch source: "+JSON.stringify(e)+".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.",n));var h=function(n,e){l(),t(n,e,c)},m=s(h);if(r.immediate){var w=m,$=function(n,e){$=w,h(n,e)};m=function(n,e){$(n,e)}}var j=n.$watch(b,m,{immediate:r.immediate,deep:g,sync:f}),O=n._watchers[n._watchers.length-1];return L(O.value)&&(null===(o=O.value.__ob__)||void 0===o?void 0:o.dep)&&g&&O.value.__ob__.dep.addSub({update:function(){O.run()}}),wn(O,l),function(){j()}}var jn={};var On={},xn=function(n){var e;void 0===n&&(n="$style");var t=O();if(!t)return On;var r=null===(e=t.proxy)||void 0===e?void 0:e[n];return r||On},Sn=xn;var kn;var En={set:function(n,e,t){(n.__composition_api_state__=n.__composition_api_state__||{})[e]=t},get:function(n,e){return(n.__composition_api_state__||{})[e]}};function Rn(n){var e=En.get(n,"rawBindings")||{};if(e&&Object.keys(e).length){for(var t=n.$refs,r=En.get(n,"refs")||[],o=0;o<r.length;o++){var i=e[f=r[o]];!t[f]&&i&&Q(i)&&(i.value=null)}var u=Object.keys(t),a=[];for(o=0;o<u.length;o++){var f;i=e[f=u[o]];t[f]&&i&&Q(i)&&(i.value=t[f],a.push(f))}En.set(n,"refs",a)}}function Mn(n,e){var t=n.$options._parentVnode;if(t){for(var r=En.get(n,"slots")||[],o=function(n,e){var t;if(n){if(n._normalized)return n._normalized;for(var r in t={},n)n[r]&&"$"!==r[0]&&(t[r]=!0)}else t={};for(var r in e)r in t||(t[r]=!0);return t}(t.data.scopedSlots,n.$slots),i=0;i<r.length;i++){o[a=r[i]]||delete e[a]}var u=Object.keys(o);for(i=0;i<u.length;i++){var a;e[a=u[i]]||(e[a]=M(n,a))}En.set(n,"slots",u)}}function Cn(n,e,t){var r=h;j(n);try{return e(n)}catch(n){if(!t)throw n;t(n)}finally{j(r)}}function Pn(n){function e(n){if(d(n)&&!Q(n)&&!L(n)&&!H(n)){var t=$().util.defineReactive;Object.keys(n).forEach((function(r){var o=n[r];t(n,r,o),o&&e(o)}))}}function t(n,e){return void 0===e&&(e=new Map),e.has(n)?e.get(n):(e.set(n,!1),Array.isArray(n)&&L(n)?(e.set(n,!0),!0):!(!d(n)||H(n))&&Object.keys(n).some((function(r){return t(n[r],e)})))}n.mixin({beforeCreate:function(){var n=this,r=n.$options,o=r.setup,i=r.render;i&&(r.render=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Cn(n,(function(){return i.apply(e,t)}))});if(!o)return;if("function"!=typeof o)return;var u=r.data;r.data=function(){return function(n,r){void 0===r&&(r={});var o,i=n.$options.setup,u=function(n){var e={slots:{}},t=["attrs"],r=["emit"];return["root","parent","refs","listeners","isServer","ssrContext"].forEach((function(t){var r="$"+t;f(e,t,{get:function(){return n[r]},set:function(){y("Cannot assign to '"+t+"' because it is a read-only property",n)}})})),t.forEach((function(t){var r="$"+t;f(e,t,{get:function(){var e,t,o=tn({}),i=n[r],u=function(e){f(o,e,{get:function(){return n[r][e]}})};try{for(var a=P(Object.keys(i)),c=a.next();!c.done;c=a.next()){u(c.value)}}catch(n){e={error:n}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return o},set:function(){y("Cannot assign to '"+t+"' because it is a read-only property",n)}})})),r.forEach((function(t){var r="$"+t;f(e,t,{get:function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n[r].apply(n,e)}}})})),e}(n);if(c(r,"__ob__",nn()),Mn(n,u.slots),Cn(n,(function(){o=i(r,u)})),!o)return;if(p(o)){var a=o;return void(n.$options.render=function(){return Mn(n,u.slots),Cn(n,(function(){return a()}))})}if(d(o)){L(o)&&(o=N(o)),En.set(n,"rawBindings",o);var v=o;Object.keys(v).forEach((function(r){var o,i=v[r];Q(i)||(L(i)?s(i)&&(i=q(i)):p(i)?i=i.bind(n):null===(o=i)||"object"!=typeof o?i=q(i):t(i)&&e(i)),function(n,e,t){var r=n.$options.props;e in n||r&&l(r,e)||(Q(t)?f(n,e,{get:function(){return t.value},set:function(n){t.value=n}}):n[e]=t)}(n,r,i)}))}}(n,n.$props),"function"==typeof u?u.call(n,n):u||{}}},mounted:function(){Rn(this)},updated:function(){Rn(this)}})}function An(n,e){if(!n)return e;if(!e)return n;for(var t,r,o,u=i?Reflect.ownKeys(n):Object.keys(n),a=0;a<u.length;a++)"__ob__"!==(t=u[a])&&(r=e[t],o=n[t],l(e,t)?r!==o&&d(r)&&!Q(r)&&d(o)&&!Q(o)&&An(o,r):e[t]=o);return e}function Dn(n){(function(n){return l(n,m)})(n)||(n.config.optionMergeStrategies.setup=function(n,e){return function(t,r){return An("function"==typeof n?n(t,r)||{}:void 0,"function"==typeof e?e(t,r)||{}:void 0)}},function(n){g=n,Object.defineProperty(n,m,{configurable:!0,writable:!0,value:!0})}(n),Pn(n))}var Un={install:function(n){return Dn(n)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(Un),n.computed=function(n){var e,t,r,o,i,a=null===(e=O())||void 0===e?void 0:e.proxy;if("function"==typeof n?t=n:(t=n.get,r=n.set),a&&!a.$isServer){var f,c=function(){if(!x){var n=R($(),{computed:{value:function(){return 0}}}),e=n._computedWatchers.value.constructor,t=n._data.__ob__.dep.constructor;x={Watcher:e,Dep:t},n.$destroy()}return x}(),l=c.Watcher,s=c.Dep;i=function(){return f||(f=new l(a,t,u,{lazy:!0})),f.dirty&&f.evaluate(),s.target&&f.depend(),f.value},o=function(n){r&&r(n)}}else{var v=R($(),{computed:{$$state:{get:t,set:r}}});a&&a.$on("hook:destroyed",(function(){return v.$destroy()})),i=function(){return v.$$state},o=function(n){v.$$state=n}}return K({get:i,set:o})},n.createApp=function(n,e){void 0===e&&(e=void 0);var t=$(),r=void 0;return{config:t.config,use:t.use.bind(t),mixin:t.mixin.bind(t),component:t.component.bind(t),directive:t.directive.bind(t),mount:function(o,i){return r||((r=new t(C({propsData:e},n))).$mount(o,i),r)},unmount:function(){r&&(r.$destroy(),r=void 0)}}},n.createRef=K,n.customRef=function(n){var e=q(0);return K(n((function(){e.value}),(function(){++e.value})))},n.default=Un,n.defineAsyncComponent=function(n){p(n)&&(n={loader:n});var e=n.loader,t=n.loadingComponent,r=n.errorComponent,o=n.delay,i=void 0===o?200:o,u=n.timeout;n.suspensible;var a=n.onError,f=null,c=0,l=function(){var n;return f||(n=f=e().catch((function(n){if(n=n instanceof Error?n:new Error(String(n)),a)return new Promise((function(e,t){a(n,(function(){return e((c++,f=null,l()))}),(function(){return t(n)}),c+1)}));throw n})).then((function(e){return n!==f&&f?f:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e)})))};return function(){return{component:l(),delay:i,timeout:u,error:r,loading:t}}},n.defineComponent=function(n){return n},n.del=function(n,e){if($().util.warn,Array.isArray(n)&&v(e))n.splice(e,1);else{var t=n.__ob__;n._isVue||t&&t.vmCount||l(n,e)&&(delete n[e],t&&t.dep.notify())}},n.getCurrentInstance=O,n.h=function(){for(var n,e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=null===(n=O())||void 0===n?void 0:n.proxy;return r?r.$createElement.apply(r,e):(y("`createElement()` has been called outside of render function."),kn||(kn=R($()).$createElement),kn.apply(kn,e))},n.inject=function(n,e,t){var r;if(void 0===t&&(t=!1),!n)return e;var o=null===(r=O())||void 0===r?void 0:r.proxy;if(o){var i=function(n,e){for(var t=e;t;){if(t._provided&&l(t._provided,n))return t._provided[n];t=t.$parent}return jn}(n,o);return i!==jn?i:t&&p(e)?e():e}y("inject() can only be used inside setup() or functional components.")},n.isRaw=H,n.isReactive=L,n.isReadonly=function(n){return F.has(n)},n.isRef=Q,n.markRaw=function(n){if(!d(n)&&!s(n)||!Object.isExtensible(n))return n;var e=nn();return e.__raw__=!0,c(n,"__ob__",e),z.set(n,!0),n},n.nextTick=function(){for(var n,e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null===(n=$())||void 0===n?void 0:n.nextTick.apply(this,e)},n.onActivated=dn,n.onBeforeMount=un,n.onBeforeUnmount=ln,n.onBeforeUpdate=fn,n.onDeactivated=pn,n.onErrorCaptured=vn,n.onMounted=an,n.onServerPrefetch=yn,n.onUnmounted=sn,n.onUpdated=cn,n.provide=function(n,e){var t=E();if(t){if(!t._provided){var r={};Object.defineProperty(t,"_provided",{get:function(){return r},set:function(n){return Object.assign(r,n)}})}t._provided[n]=e}},n.proxyRefs=function(n){var e,t,r;if(L(n))return n;var o=tn(((e={})[T]=n,e)),i=function(n){f(o,n,{get:function(){return Q(o[n])?o[n].value:o[n]},set:function(e){if(Q(o[n]))return o[n].value=J(e);o[n]=J(e)}})};try{for(var u=P(Object.keys(n)),a=u.next();!a.done;a=u.next()){i(a.value)}}catch(n){t={error:n}}finally{try{a&&!a.done&&(r=u.return)&&r.call(u)}finally{if(t)throw t.error}}return o},n.reactive=tn,n.readonly=function(n){return n},n.ref=q,n.set=function(n,e,t){var r=$().util;r.warn;var o=r.defineReactive;if(s(n)&&v(e))return n.length=Math.max(n.length,e),n.splice(e,1,t),t;if(e in n&&!(e in Object.prototype))return n[e]=t,t;var i=n.__ob__;return n._isVue||i&&i.vmCount?t:i?(o(i.value,e,t),Y(n,e,t),i.dep.notify(),t):(n[e]=t,t)},n.shallowReactive=en,n.shallowReadonly=function(n){var e,t;if(!d(n)&&!s(n)||!Object.isExtensible(n))return n;var r={},o=tn({}).__ob__,i=function(e){var t,i=n[e],u=Object.getOwnPropertyDescriptor(n,e);if(u){if(!1===u.configurable)return"continue";t=u.get}Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:function(){var e=t?t.call(n):i;return o.dep.depend(),e},set:function(n){}})};try{for(var u=P(Object.keys(n)),a=u.next();!a.done;a=u.next()){i(a.value)}}catch(n){e={error:n}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}return F.set(r,!0),r},n.shallowRef=function(n){var e;if(Q(n))return n;var t=en(((e={})[T]=n,e));return K({get:function(){return t[T]},set:function(n){return t[T]=n}})},n.toRaw=function(n){var e,t;return H(n)||!Object.isExtensible(n)?n:(null===(t=null===(e=n)||void 0===e?void 0:e.__ob__)||void 0===t?void 0:t.value)||n},n.toRef=G,n.toRefs=N,n.triggerRef=function(n){Q(n)&&(n.value=n.value)},n.unref=J,n.useCSSModule=Sn,n.useCssModule=xn,n.version="1.0.0-rc.5",n.warn=function(n){var e;y(n,null===(e=O())||void 0===e?void 0:e.proxy)},n.watch=function(n,e,t){var r=null;"function"==typeof e?r=e:(t=e,r=null);var o=function(n){return C({immediate:!1,deep:!1,flush:"pre"},n)}(t);return $n(gn(),n,r,o)},n.watchEffect=function(n,e){var t=function(n){return C({immediate:!0,deep:!1,flush:"pre"},n)}(e);return $n(gn(),n,null,t)},Object.defineProperty(n,"__esModule",{value:!0})}));