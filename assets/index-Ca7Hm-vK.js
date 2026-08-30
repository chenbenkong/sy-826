var b_=Object.defineProperty;var C_=(t,e,n)=>e in t?b_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dh=(t,e,n)=>C_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function R_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},lc={},v0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),P_=Symbol.for("react.portal"),L_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),N_=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),F_=Symbol.for("react.forward_ref"),O_=Symbol.for("react.suspense"),k_=Symbol.for("react.memo"),B_=Symbol.for("react.lazy"),hh=Symbol.iterator;function z_(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,y0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=qs.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}var Zf=Kf.prototype=new S0;Zf.constructor=Kf;x0(Zf,qs.prototype);Zf.isPureReactComponent=!0;var ph=Array.isArray,M0=Object.prototype.hasOwnProperty,Qf={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:lo,type:t,key:s,ref:a,props:r,_owner:Qf.current}}function H_(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function G_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mh=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G_(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case lo:case P_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Oc(a,0):i,ph(r)?(n="",t!=null&&(n=t.replace(mh,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(Jf(r)&&(r=H_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(mh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ph(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Oc(s,o);a+=pl(s,e,n,l,r)}else if(l=z_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Oc(s,o++),a+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function xo(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function V_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},ml={transition:null},W_={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Qf};function T0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:xo,forEach:function(t,e,n){xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xo(t,function(){e++}),e},toArray:function(t){return xo(t,function(e){return e})||[]},only:function(t){if(!Jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=qs;Ke.Fragment=L_;Ke.Profiler=N_;Ke.PureComponent=Kf;Ke.StrictMode=D_;Ke.Suspense=O_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_;Ke.act=T0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)M0.call(e,l)&&!E0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:lo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:I_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U_,_context:t},t.Consumer=t};Ke.createElement=w0;Ke.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:F_,render:t}};Ke.isValidElement=Jf;Ke.lazy=function(t){return{$$typeof:B_,_payload:{_status:-1,_result:t},_init:V_}};Ke.memo=function(t,e){return{$$typeof:k_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Ke.unstable_act=T0;Ke.useCallback=function(t,e){return un.current.useCallback(t,e)};Ke.useContext=function(t){return un.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return un.current.useEffect(t,e)};Ke.useId=function(){return un.current.useId()};Ke.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return un.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Ke.useRef=function(t){return un.current.useRef(t)};Ke.useState=function(t){return un.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return un.current.useTransition()};Ke.version="18.3.1";v0.exports=Ke;var be=v0.exports;const j_=R_(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=be,Y_=Symbol.for("react.element"),q_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,K_=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$_.call(e,i)&&!Z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Y_,type:t,key:s,ref:a,props:r,_owner:K_.current}}lc.Fragment=q_;lc.jsx=A0;lc.jsxs=A0;g0.exports=lc;var J=g0.exports,Xu={},b0={exports:{}},bn={},C0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var B=N.length;N.push(F);e:for(;0<B;){var K=B-1>>>1,Q=N[K];if(0<r(Q,F))N[K]=F,N[B]=Q,B=K;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],B=N.pop();if(B!==F){N[0]=B;e:for(var K=0,Q=N.length,j=Q>>>1;K<j;){var Z=2*(K+1)-1,de=N[Z],_e=Z+1,Se=N[_e];if(0>r(de,B))_e<Q&&0>r(Se,de)?(N[K]=Se,N[_e]=B,K=_e):(N[K]=de,N[Z]=B,K=Z);else if(_e<Q&&0>r(Se,B))N[K]=Se,N[_e]=B,K=_e;else break e}}return F}function r(N,F){var B=N.sortIndex-F.sortIndex;return B!==0?B:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(N){if(x=!1,_(N),!v)if(n(l)!==null)v=!0,X(b);else{var F=n(c);F!==null&&$(y,F.startTime-N)}}function b(N,F){v=!1,x&&(x=!1,f(U),U=-1),p=!0;var B=h;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||N&&!z());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Q=K(d.expirationTime<=F);F=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&i(l),_(F)}else i(l);d=n(l)}if(d!==null)var j=!0;else{var Z=n(c);Z!==null&&$(y,Z.startTime-F),j=!1}return j}finally{d=null,h=B,p=!1}}var A=!1,T=null,U=-1,M=5,E=-1;function z(){return!(t.unstable_now()-E<M)}function Y(){if(T!==null){var N=t.unstable_now();E=N;var F=!0;try{F=T(!0,N)}finally{F?re():(A=!1,T=null)}}else A=!1}var re;if(typeof g=="function")re=function(){g(Y)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,G=D.port2;D.port1.onmessage=Y,re=function(){G.postMessage(null)}}else re=function(){m(Y,0)};function X(N){T=N,A||(A=!0,re())}function $(N,F){U=m(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,X(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var B=h;h=F;try{return N()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return F()}finally{h=B}},t.unstable_scheduleCallback=function(N,F,B){var K=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,N={id:u++,callback:F,priorityLevel:N,startTime:B,expirationTime:Q,sortIndex:-1},B>K?(N.sortIndex=B,e(c,N),n(l)===null&&N===n(c)&&(x?(f(U),U=-1):x=!0,$(y,B-K))):(N.sortIndex=Q,e(l,N),v||p||(v=!0,X(b))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var F=h;return function(){var B=h;h=F;try{return N.apply(this,arguments)}finally{h=B}}}})(R0);C0.exports=R0;var Q_=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=be,An=Q_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P0=new Set,Ha={};function Br(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ha[t]=e,t=0;t<e.length;t++)P0.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},vh={};function tx(t){return Yu.call(vh,t)?!0:Yu.call(gh,t)?!1:ex.test(t)?vh[t]=!0:(gh[t]=!0,!1)}function nx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ix(t,e,n,i){if(e===null||typeof e>"u"||nx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);Xt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ix(e,n,r,i)&&(n=null),i||r===null?tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),_h=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,kc;function wa(t){if(kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kc=e&&e[1]||""}return`
`+kc+t}var Bc=!1;function zc(t,e){if(!t||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function rx(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case qu:return"Profiler";case id:return"StrictMode";case $u:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ax(t){var e=U0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function So(t){t._valueTracker||(t._valueTracker=ax(t))}function I0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=U0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Ju(t,e){F0(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ta(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function O0(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mo,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ox=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=z0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,Ps=null,Ls=null;function Eh(t){if(t=fo(t)){if(typeof of!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=hc(e),of(t.stateNode,t.type,e))}}function G0(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function V0(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,Eh(t),e)for(t=0;t<e.length;t++)Eh(e[t])}}function W0(t,e){return t(e)}function j0(){}var Hc=!1;function X0(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return W0(t,e,n)}finally{Hc=!1,(Ps!==null||Ls!==null)&&(j0(),V0())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var lf=!1;if(Ci)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){lf=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{lf=!1}function cx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ra=!1,Cl=null,Rl=!1,cf=null,ux={onError:function(t){Ra=!0,Cl=t}};function fx(t,e,n,i,r,s,a,o,l){Ra=!1,Cl=null,cx.apply(ux,arguments)}function dx(t,e,n,i,r,s,a,o,l){if(fx.apply(this,arguments),Ra){if(Ra){var c=Cl;Ra=!1,Cl=null}else throw Error(ie(198));Rl||(Rl=!0,cf=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wh(t){if(zr(t)!==t)throw Error(ie(188))}function hx(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wh(r),t;if(s===i)return wh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function q0(t){return t=hx(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var K0=An.unstable_scheduleCallback,Th=An.unstable_cancelCallback,px=An.unstable_shouldYield,mx=An.unstable_requestPaint,wt=An.unstable_now,gx=An.unstable_getCurrentPriorityLevel,od=An.unstable_ImmediatePriority,Z0=An.unstable_UserBlockingPriority,Pl=An.unstable_NormalPriority,vx=An.unstable_LowPriority,Q0=An.unstable_IdlePriority,cc=null,ai=null;function _x(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Sx,xx=Math.log,yx=Math.LN2;function Sx(t){return t>>>=0,t===0?32:31-(xx(t)/yx|0)|0}var Eo=64,wo=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Aa(o):(s&=a,s!==0&&(i=Aa(s)))}else a=n&~r,a!==0?i=Aa(a):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ex(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Mx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J0(){var t=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tg,cd,ng,ig,rg,ff=!1,To=[],$i=null,Ki=null,Zi=null,Wa=new Map,ja=new Map,Vi=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fo(e),e!==null&&cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ax(t,e,n,i,r){switch(e){case"focusin":return $i=oa($i,t,e,n,i,r),!0;case"dragenter":return Ki=oa(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=oa(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,oa(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,oa(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function sg(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,rg(t.priority,function(){ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);af=i,n.target.dispatchEvent(i),af=null}else return e=fo(n),e!==null&&cd(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){gl(t)&&n.delete(e)}function bx(){ff=!1,$i!==null&&gl($i)&&($i=null),Ki!==null&&gl(Ki)&&(Ki=null),Zi!==null&&gl(Zi)&&(Zi=null),Wa.forEach(bh),ja.forEach(bh)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,bx)))}function Xa(t){function e(r){return la(r,t)}if(0<To.length){la(To[0],t);for(var n=1;n<To.length;n++){var i=To[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&la($i,t),Ki!==null&&la(Ki,t),Zi!==null&&la(Zi,t),Wa.forEach(e),ja.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&Vi.shift()}var Ds=Ni.ReactCurrentBatchConfig,Dl=!0;function Cx(t,e,n,i){var r=rt,s=Ds.transition;Ds.transition=null;try{rt=1,ud(t,e,n,i)}finally{rt=r,Ds.transition=s}}function Rx(t,e,n,i){var r=rt,s=Ds.transition;Ds.transition=null;try{rt=4,ud(t,e,n,i)}finally{rt=r,Ds.transition=s}}function ud(t,e,n,i){if(Dl){var r=df(t,e,n,i);if(r===null)Qc(t,e,i,Nl,n),Ah(t,i);else if(Ax(r,t,e,n,i))i.stopPropagation();else if(Ah(t,i),e&4&&-1<Tx.indexOf(t)){for(;r!==null;){var s=fo(r);if(s!==null&&tg(s),s=df(t,e,n,i),s===null&&Qc(t,e,i,Nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(t,e,i,null,n)}}var Nl=null;function df(t,e,n,i){if(Nl=null,t=ad(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case od:return 1;case Z0:return 4;case Pl:case vx:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var ji=null,fd=null,vl=null;function og(){if(vl)return vl;var t,e=fd,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return vl=r.slice(t,1<i?1-i:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function Ch(){return!1}function Cn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ao:Ch,this.isPropagationStopped=Ch,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=Cn($s),uo=_t({},$s,{view:0,detail:0}),Px=Cn(uo),Vc,Wc,ca,uc=_t({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Vc=t.screenX-ca.screenX,Wc=t.screenY-ca.screenY):Wc=Vc=0,ca=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Rh=Cn(uc),Lx=_t({},uc,{dataTransfer:0}),Dx=Cn(Lx),Nx=_t({},uo,{relatedTarget:0}),jc=Cn(Nx),Ux=_t({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=Cn(Ux),Fx=_t({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Cn(Fx),kx=_t({},$s,{data:0}),Ph=Cn(kx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hx[t])?!!e[t]:!1}function hd(){return Gx}var Vx=_t({},uo,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=Cn(Vx),jx=_t({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Cn(jx),Xx=_t({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),Yx=Cn(Xx),qx=_t({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=Cn(qx),Kx=_t({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=Cn(Kx),Qx=[9,13,27,32],pd=Ci&&"CompositionEvent"in window,Pa=null;Ci&&"documentMode"in document&&(Pa=document.documentMode);var Jx=Ci&&"TextEvent"in window&&!Pa,lg=Ci&&(!pd||Pa&&8<Pa&&11>=Pa),Dh=" ",Nh=!1;function cg(t,e){switch(t){case"keyup":return Qx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function ey(t,e){switch(t){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(Nh=!0,Dh);case"textInput":return t=e.data,t===Dh&&Nh?null:t;default:return null}}function ty(t,e){if(vs)return t==="compositionend"||!pd&&cg(t,e)?(t=og(),vl=fd=ji=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lg&&e.locale!=="ko"?null:e.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ny[t.type]:e==="textarea"}function fg(t,e,n,i){G0(i),e=Ul(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Ya=null;function iy(t){Mg(t,0)}function fc(t){var e=ys(t);if(I0(e))return t}function ry(t,e){if(t==="change")return e}var dg=!1;if(Ci){var Xc;if(Ci){var Yc="oninput"in document;if(!Yc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Yc=typeof Ih.oninput=="function"}Xc=Yc}else Xc=!1;dg=Xc&&(!document.documentMode||9<document.documentMode)}function Fh(){La&&(La.detachEvent("onpropertychange",hg),Ya=La=null)}function hg(t){if(t.propertyName==="value"&&fc(Ya)){var e=[];fg(e,Ya,t,ad(t)),X0(iy,e)}}function sy(t,e,n){t==="focusin"?(Fh(),La=e,Ya=n,La.attachEvent("onpropertychange",hg)):t==="focusout"&&Fh()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Ya)}function oy(t,e){if(t==="click")return fc(e)}function ly(t,e){if(t==="input"||t==="change")return fc(e)}function cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:cy;function qa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mg(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uy(t){var e=mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pg(n.ownerDocument.documentElement,n)){if(i!==null&&md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kh(n,s);var a=kh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fy=Ci&&"documentMode"in document&&11>=document.documentMode,_s=null,hf=null,Da=null,pf=!1;function Bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||_s==null||_s!==bl(i)||(i=_s,"selectionStart"in i&&md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&qa(Da,i)||(Da=i,i=Ul(hf,"onSelect"),0<i.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},qc={},gg={};Ci&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function dc(t){if(qc[t])return qc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gg)return qc[t]=e[n];return t}var vg=dc("animationend"),_g=dc("animationiteration"),xg=dc("animationstart"),yg=dc("transitionend"),Sg=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Sg.set(t,e),Br(e,[t])}for(var $c=0;$c<zh.length;$c++){var Kc=zh[$c],dy=Kc.toLowerCase(),hy=Kc[0].toUpperCase()+Kc.slice(1);or(dy,"on"+hy)}or(vg,"onAnimationEnd");or(_g,"onAnimationIteration");or(xg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(yg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Hh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dx(i,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Hh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Hh(r,o,c),s=l}}}if(Rl)throw t=cf,Rl=!1,cf=null,t}function lt(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var i=t+"__bubble";n.has(i)||(Eg(e,t,2,!1),n.add(i))}function Zc(t,e,n){var i=0;e&&(i|=4),Eg(n,t,i,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Co]){t[Co]=!0,P0.forEach(function(n){n!=="selectionchange"&&(py.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,Zc("selectionchange",!1,e))}}function Eg(t,e,n,i){switch(ag(e)){case 1:var r=Cx;break;case 4:r=Rx;break;default:r=ud}n=r.bind(null,e,n,t),r=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}X0(function(){var c=s,u=ad(n),d=[];e:{var h=Sg.get(t);if(h!==void 0){var p=dd,v=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":p=Wx;break;case"focusin":v="focus",p=jc;break;case"focusout":v="blur",p=jc;break;case"beforeblur":case"afterblur":p=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yx;break;case vg:case _g:case xg:p=Ix;break;case yg:p=$x;break;case"scroll":p=Px;break;case"wheel":p=Zx;break;case"copy":case"cut":case"paste":p=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lh}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Va(g,f),y!=null&&x.push(Ka(g,y,_)))),m)break;g=g.return}0<x.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==af&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[Ri]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Er(v):null,v!==null&&(m=zr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Rh,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Lh,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:ys(p),_=v==null?h:ys(v),h=new x(y,g+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,Er(u)===c&&(x=new x(f,g+"enter",v,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,g=0,_=x;_;_=Vr(_))g++;for(_=0,y=f;y;y=Vr(y))_++;for(;0<g-_;)x=Vr(x),g--;for(;0<_-g;)f=Vr(f),_--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Vr(x),f=Vr(f)}x=null}else x=null;p!==null&&Gh(d,h,p,x,!1),v!==null&&m!==null&&Gh(d,m,v,x,!0)}}e:{if(h=c?ys(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=ry;else if(Uh(h))if(dg)b=ly;else{b=ay;var A=sy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=oy);if(b&&(b=b(t,c))){fg(d,b,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ef(h,"number",h.value)}switch(A=c?ys(c):window,t){case"focusin":(Uh(A)||A.contentEditable==="true")&&(_s=A,hf=c,Da=null);break;case"focusout":Da=hf=_s=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Bh(d,n,u);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":Bh(d,n,u)}var T;if(pd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else vs?cg(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(lg&&n.locale!=="ko"&&(vs||U!=="onCompositionStart"?U==="onCompositionEnd"&&vs&&(T=og()):(ji=u,fd="value"in ji?ji.value:ji.textContent,vs=!0)),A=Ul(c,U),0<A.length&&(U=new Ph(U,t,null,n,u),d.push({event:U,listeners:A}),T?U.data=T:(T=ug(n),T!==null&&(U.data=T)))),(T=Jx?ey(t,n):ty(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(u=new Ph("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}Mg(d,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Va(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Va(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Va(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function Vh(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function Ro(t,e,n){if(e=Vh(e),Vh(t)!==e&&n)throw Error(ie(425))}function Il(){}var mf=null,gf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(xy)}:_f;function xy(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ii="__reactFiber$"+Ks,Za="__reactProps$"+Ks,Ri="__reactContainer$"+Ks,xf="__reactEvents$"+Ks,yy="__reactListeners$"+Ks,Sy="__reactHandles$"+Ks;function Er(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[ii])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[ii]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function hc(t){return t[Za]||null}var yf=[],Ss=-1;function lr(t){return{current:t}}function ct(t){0>Ss||(t.current=yf[Ss],yf[Ss]=null,Ss--)}function ot(t,e){Ss++,yf[Ss]=t.current,t.current=e}var rr={},nn=lr(rr),gn=lr(!1),Lr=rr;function ks(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Fl(){ct(gn),ct(nn)}function Xh(t,e,n){if(nn.current!==rr)throw Error(ie(168));ot(nn,e),ot(gn,n)}function wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,sx(t)||"Unknown",r));return _t({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Lr=nn.current,ot(nn,t),ot(gn,gn.current),!0}function Yh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=wg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ct(gn),ct(nn),ot(nn,t)):ct(gn),ot(gn,n)}var xi=null,pc=!1,eu=!1;function Tg(t){xi===null?xi=[t]:xi.push(t)}function My(t){pc=!0,Tg(t)}function cr(){if(!eu&&xi!==null){eu=!0;var t=0,e=rt;try{var n=xi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,pc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),K0(od,cr),r}finally{rt=e,eu=!1}}return null}var Ms=[],Es=0,kl=null,Bl=0,Dn=[],Nn=0,Dr=null,yi=1,Si="";function vr(t,e){Ms[Es++]=Bl,Ms[Es++]=kl,kl=t,Bl=e}function Ag(t,e,n){Dn[Nn++]=yi,Dn[Nn++]=Si,Dn[Nn++]=Dr,Dr=t;var i=yi;t=Si;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,yi=1<<32-Kn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function gd(t){t.return!==null&&(vr(t,1),Ag(t,1,0))}function vd(t){for(;t===kl;)kl=Ms[--Es],Ms[Es]=null,Bl=Ms[--Es],Ms[Es]=null;for(;t===Dr;)Dr=Dn[--Nn],Dn[Nn]=null,Si=Dn[--Nn],Dn[Nn]=null,yi=Dn[--Nn],Dn[Nn]=null}var Tn=null,wn=null,ft=!1,Yn=null;function bg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(ft){var e=wn;if(e){var n=e;if(!qh(t,e)){if(Sf(t))throw Error(ie(418));e=Qi(n.nextSibling);var i=Tn;e&&qh(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,ft=!1,Tn=t)}}else{if(Sf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ft=!1,Tn=t}}}function $h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Po(t){if(t!==Tn)return!1;if(!ft)return $h(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=wn)){if(Sf(t))throw Cg(),Error(ie(418));for(;e;)bg(t,e),e=Qi(e.nextSibling)}if($h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?Qi(t.stateNode.nextSibling):null;return!0}function Cg(){for(var t=wn;t;)t=Qi(t.nextSibling)}function Bs(){wn=Tn=null,ft=!1}function _d(t){Yn===null?Yn=[t]:Yn.push(t)}var Ey=Ni.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kh(t){var e=t._init;return e(t._payload)}function Rg(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=nr(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,_,y){return g===null||g.tag!==6?(g=ou(_,f.mode,y),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,y){var b=_.type;return b===gs?u(f,g,_.props.children,y,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zi&&Kh(b)===g.type)?(y=r(g,_.props),y.ref=ua(f,g,_),y.return=f,y):(y=Tl(_.type,_.key,_.props,null,f.mode,y),y.ref=ua(f,g,_),y.return=f,y)}function c(f,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=lu(_,f.mode,y),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,y,b){return g===null||g.tag!==7?(g=br(_,f.mode,y,b),g.return=f,g):(g=r(g,_),g.return=f,g)}function d(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ou(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yo:return _=Tl(g.type,g.key,g.props,null,f.mode,_),_.ref=ua(f,null,g),_.return=f,_;case ms:return g=lu(g,f.mode,_),g.return=f,g;case zi:var y=g._init;return d(f,y(g._payload),_)}if(Ta(g)||sa(g))return g=br(g,f.mode,_,null),g.return=f,g;Lo(f,g)}return null}function h(f,g,_,y){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:o(f,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yo:return _.key===b?l(f,g,_,y):null;case ms:return _.key===b?c(f,g,_,y):null;case zi:return b=_._init,h(f,g,b(_._payload),y)}if(Ta(_)||sa(_))return b!==null?null:u(f,g,_,y,null);Lo(f,_)}return null}function p(f,g,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,o(g,f,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yo:return f=f.get(y.key===null?_:y.key)||null,l(g,f,y,b);case ms:return f=f.get(y.key===null?_:y.key)||null,c(g,f,y,b);case zi:var A=y._init;return p(f,g,_,A(y._payload),b)}if(Ta(y)||sa(y))return f=f.get(_)||null,u(g,f,y,b,null);Lo(g,y)}return null}function v(f,g,_,y){for(var b=null,A=null,T=g,U=g=0,M=null;T!==null&&U<_.length;U++){T.index>U?(M=T,T=null):M=T.sibling;var E=h(f,T,_[U],y);if(E===null){T===null&&(T=M);break}t&&T&&E.alternate===null&&e(f,T),g=s(E,g,U),A===null?b=E:A.sibling=E,A=E,T=M}if(U===_.length)return n(f,T),ft&&vr(f,U),b;if(T===null){for(;U<_.length;U++)T=d(f,_[U],y),T!==null&&(g=s(T,g,U),A===null?b=T:A.sibling=T,A=T);return ft&&vr(f,U),b}for(T=i(f,T);U<_.length;U++)M=p(T,f,U,_[U],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?U:M.key),g=s(M,g,U),A===null?b=M:A.sibling=M,A=M);return t&&T.forEach(function(z){return e(f,z)}),ft&&vr(f,U),b}function x(f,g,_,y){var b=sa(_);if(typeof b!="function")throw Error(ie(150));if(_=b.call(_),_==null)throw Error(ie(151));for(var A=b=null,T=g,U=g=0,M=null,E=_.next();T!==null&&!E.done;U++,E=_.next()){T.index>U?(M=T,T=null):M=T.sibling;var z=h(f,T,E.value,y);if(z===null){T===null&&(T=M);break}t&&T&&z.alternate===null&&e(f,T),g=s(z,g,U),A===null?b=z:A.sibling=z,A=z,T=M}if(E.done)return n(f,T),ft&&vr(f,U),b;if(T===null){for(;!E.done;U++,E=_.next())E=d(f,E.value,y),E!==null&&(g=s(E,g,U),A===null?b=E:A.sibling=E,A=E);return ft&&vr(f,U),b}for(T=i(f,T);!E.done;U++,E=_.next())E=p(T,f,U,E.value,y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?U:E.key),g=s(E,g,U),A===null?b=E:A.sibling=E,A=E);return t&&T.forEach(function(Y){return e(f,Y)}),ft&&vr(f,U),b}function m(f,g,_,y){if(typeof _=="object"&&_!==null&&_.type===gs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case yo:e:{for(var b=_.key,A=g;A!==null;){if(A.key===b){if(b=_.type,b===gs){if(A.tag===7){n(f,A.sibling),g=r(A,_.props.children),g.return=f,f=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zi&&Kh(b)===A.type){n(f,A.sibling),g=r(A,_.props),g.ref=ua(f,A,_),g.return=f,f=g;break e}n(f,A);break}else e(f,A);A=A.sibling}_.type===gs?(g=br(_.props.children,f.mode,y,_.key),g.return=f,f=g):(y=Tl(_.type,_.key,_.props,null,f.mode,y),y.ref=ua(f,g,_),y.return=f,f=y)}return a(f);case ms:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=lu(_,f.mode,y),g.return=f,f=g}return a(f);case zi:return A=_._init,m(f,g,A(_._payload),y)}if(Ta(_))return v(f,g,_,y);if(sa(_))return x(f,g,_,y);Lo(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=ou(_,f.mode,y),g.return=f,f=g),a(f)):n(f,g)}return m}var zs=Rg(!0),Pg=Rg(!1),zl=lr(null),Hl=null,ws=null,xd=null;function yd(){xd=ws=Hl=null}function Sd(t){var e=zl.current;ct(zl),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Hl=t,xd=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Hl===null)throw Error(ie(308));ws=t,Hl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var wr=null;function Md(t){wr===null?wr=[t]:wr.push(t)}function Lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ld(t,n)}}function Zh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=_t({},d,h);break e;case 2:Hi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=d}}function Qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ho={},oi=lr(ho),Qa=lr(ho),Ja=lr(ho);function Tr(t){if(t===ho)throw Error(ie(174));return t}function wd(t,e){switch(ot(Ja,e),ot(Qa,t),ot(oi,ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}ct(oi),ot(oi,e)}function Hs(){ct(oi),ct(Qa),ct(Ja)}function Ng(t){Tr(Ja.current);var e=Tr(oi.current),n=nf(e,t.type);e!==n&&(ot(Qa,t),ot(oi,n))}function Td(t){Qa.current===t&&(ct(oi),ct(Qa))}var gt=lr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function Ad(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var yl=Ni.ReactCurrentDispatcher,nu=Ni.ReactCurrentBatchConfig,Nr=0,vt=null,Pt=null,kt=null,Wl=!1,Na=!1,eo=0,wy=0;function $t(){throw Error(ie(321))}function bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Cd(t,e,n,i,r,s){if(Nr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?Cy:Ry,t=n(i,r),Na){s=0;do{if(Na=!1,eo=0,25<=s)throw Error(ie(301));s+=1,kt=Pt=null,e.updateQueue=null,yl.current=Py,t=n(i,r)}while(Na)}if(yl.current=jl,e=Pt!==null&&Pt.next!==null,Nr=0,kt=Pt=vt=null,Wl=!1,e)throw Error(ie(300));return t}function Rd(){var t=eo!==0;return eo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function zn(){if(Pt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,Pt=t;else{if(t===null)throw Error(ie(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function to(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,vt.lanes|=u,Ur|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Qn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ug(){}function Ig(t,e){var n=vt,i=zn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Pd(kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,no(9,Og.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ie(349));Nr&30||Fg(n,e,r)}return r}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&zg(t)}function kg(t,e,n){return n(function(){Bg(e)&&zg(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function zg(t){var e=Pi(t,1);e!==null&&Zn(e,t,1,-1)}function Jh(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=by.bind(null,vt,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hg(){return zn().memoizedState}function Sl(t,e,n,i){var r=ti();vt.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function mc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var a=Pt.memoizedState;if(s=a.destroy,i!==null&&bd(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}vt.flags|=t,r.memoizedState=no(1|e,n,s,i)}function ep(t,e){return Sl(8390656,8,t,e)}function Pd(t,e){return mc(2048,8,t,e)}function Gg(t,e){return mc(4,2,t,e)}function Vg(t,e){return mc(4,4,t,e)}function Wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jg(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,Wg.bind(null,e,t),n)}function Ld(){}function Xg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qg(t,e,n){return Nr&21?(Qn(n,e)||(n=J0(),vt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Ty(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=nu.transition;nu.transition={};try{t(!1),e()}finally{rt=n,nu.transition=i}}function $g(){return zn().memoizedState}function Ay(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))Zg(e,n);else if(n=Lg(t,e,n,i),n!==null){var r=ln();Zn(n,t,i,r),Qg(n,e,i)}}function by(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var l=e.interleaved;l===null?(r.next=r,Md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lg(t,e,r,i),n!==null&&(r=ln(),Zn(n,t,i,r),Qg(n,e,i))}}function Kg(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Zg(t,e){Na=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ld(t,n)}}var jl={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Cy={readContext:Bn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ay.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Ld,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=Ty.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ti();if(ft){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Bt===null)throw Error(ie(349));Nr&30||Fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ep(kg.bind(null,i,s,t),[t]),i.flags|=2048,no(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=Bt.identifierPrefix;if(ft){var n=Si,i=yi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ry={readContext:Bn,useCallback:Xg,useContext:Bn,useEffect:Pd,useImperativeHandle:jg,useInsertionEffect:Gg,useLayoutEffect:Vg,useMemo:Yg,useReducer:iu,useRef:Hg,useState:function(){return iu(to)},useDebugValue:Ld,useDeferredValue:function(t){var e=zn();return qg(e,Pt.memoizedState,t)},useTransition:function(){var t=iu(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1},Py={readContext:Bn,useCallback:Xg,useContext:Bn,useEffect:Pd,useImperativeHandle:jg,useInsertionEffect:Gg,useLayoutEffect:Vg,useMemo:Yg,useReducer:ru,useRef:Hg,useState:function(){return ru(to)},useDebugValue:Ld,useDeferredValue:function(t){var e=zn();return Pt===null?e.memoizedState=t:qg(e,Pt.memoizedState,t)},useTransition:function(){var t=ru(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=tr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Zn(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=tr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Zn(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=tr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Zn(e,t,i,n),xl(e,t,i))}};function tp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,s):!0}function Jg(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?Lr:nn.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function np(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ed(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?Lr:nn.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=rx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ly=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,Ff=i),Af(t,e)},n}function tv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ly;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jy.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var Dy=Ni.ReactCurrentOwner,mn=!1;function an(t,e,n,i){e.child=t===null?Pg(e,null,n,i):zs(e,t.child,n,i)}function ap(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=Cd(t,e,n,i,s,r),n=Rd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ft&&n&&gd(e),e.flags|=1,an(t,e,i,r),e.child)}function op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qa(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return bf(t,e,n,i,r)}function iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(As,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(As,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(As,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(As,Mn),Mn|=i;return an(t,e,r,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,i,r){var s=vn(n)?Lr:nn.current;return s=ks(e,s),Ns(e,r),n=Cd(t,e,n,i,s,r),i=Rd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ft&&i&&gd(e),e.flags|=1,an(t,e,n,r),e.child)}function lp(t,e,n,i,r){if(vn(n)){var s=!0;Ol(e)}else s=!1;if(Ns(e,r),e.stateNode===null)Ml(t,e),Jg(e,n,i),Tf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?Lr:nn.current,c=ks(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&np(e,a,i,c),Hi=!1;var h=e.memoizedState;a.state=h,Gl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||gn.current||Hi?(typeof u=="function"&&(wf(e,n,u,i),l=e.memoizedState),(o=Hi||tp(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Dg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?Lr:nn.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&np(e,a,i,l),Hi=!1,h=e.memoizedState,a.state=h,Gl(e,i,a,r);var v=e.memoizedState;o!==d||h!==v||gn.current||Hi?(typeof p=="function"&&(wf(e,n,p,i),v=e.memoizedState),(c=Hi||tp(e,n,c,i,h,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Cf(t,e,n,i,s,r)}function Cf(t,e,n,i,r,s){rv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Yh(e,n,!1),Li(t,e,s);i=e.stateNode,Dy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,o,s)):an(t,e,o,s),e.memoizedState=i.state,r&&Yh(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?Xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xh(t,e.context,!1),wd(t,e.containerInfo)}function cp(t,e,n,i,r){return Bs(),_d(r),e.flags|=256,an(t,e,n,i),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(gt,r&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=xc(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=Rf,t):Dd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ny(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=nr(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Pf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dd(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,i){return i!==null&&_d(i),zs(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ny(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=su(Error(ie(422))),Do(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=Pf(a),e.memoizedState=Rf,s);if(!(e.mode&1))return Do(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=su(s,i,void 0),Do(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Zn(i,t,r,-1))}return kd(),i=su(Error(ie(421))),Do(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=Qi(r.nextSibling),Tn=e,ft=!0,Yn=null,t!==null&&(Dn[Nn++]=yi,Dn[Nn++]=Si,Dn[Nn++]=Dr,yi=t.id,Si=t.overflow,Dr=e),e=Dd(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}au(e,!0,n,null,s);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uy(t,e,n){switch(e.tag){case 3:sv(e),Bs();break;case 5:Ng(e);break;case 1:vn(e.type)&&Ol(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(ot(gt,gt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ot(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return Li(t,e,n)}var lv,Lf,cv,uv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(oi.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=tf(t,r),i=tf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}rf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fa(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Iy(t,e,n){var i=e.pendingProps;switch(vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return vn(e.type)&&Fl(),Kt(e),null;case 3:return i=e.stateNode,Hs(),ct(gn),ct(nn),Ad(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Bf(Yn),Yn=null))),Lf(t,e),Kt(e),null;case 5:Td(e);var r=Tr(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Kt(e),null}if(t=Tr(oi.current),Po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<ba.length;r++)lt(ba[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":xh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Sh(i,s),lt("invalid",i)}rf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",""+o]):Ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":So(i),yh(i,s,!0);break;case"textarea":So(i),Mh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ii]=e,t[Za]=i,lv(t,e,!1,!1),e.stateNode=t;e:{switch(a=sf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ba.length;r++)lt(ba[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":xh(t,i),r=Qu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Sh(t,i),r=tf(t,i),lt("invalid",t);break;default:r=i}rf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ga(t,l):typeof l=="number"&&Ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&nd(t,s,l,a))}switch(n){case"input":So(t),yh(t,i,!1);break;case"textarea":So(t),Mh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Tr(Ja.current),Tr(oi.current),Po(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Kt(e),null;case 13:if(ct(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&wn!==null&&e.mode&1&&!(e.flags&128))Cg(),Bs(),e.flags|=98560,s=!1;else if(s=Po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ii]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Yn!==null&&(Bf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):kd())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Hs(),Lf(t,e),t===null&&$a(e.stateNode.containerInfo),Kt(e),null;case 10:return Sd(e.type._context),Kt(e),null;case 17:return vn(e.type)&&Fl(),Kt(e),null;case 19:if(ct(gt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)fa(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Vl(t),a!==null){for(e.flags|=128,fa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Vs&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Kt(e),null}else 2*wt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=gt.current,ot(gt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Od(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Fy(t,e){switch(vd(e),e.tag){case 1:return vn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ct(gn),ct(nn),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(ct(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(gt),null;case 4:return Hs(),null;case 10:return Sd(e.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var No=!1,Jt=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Df(t,e,n){try{n()}catch(i){St(t,e,i)}}var fp=!1;function ky(t,e){if(mf=Dl,t=mg(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},Dl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=fp,fp=!1,v}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Df(e,n,s)}r=r.next}while(r!==i)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Za],delete e[xf],delete e[yy],delete e[Sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var Gt=null,Xn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)hv(t,e,n),n=n.sibling}function hv(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:Jt||Ts(n,e);case 6:var i=Gt,r=Xn;Gt=null,Ui(t,e,n),Gt=i,Xn=r,Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),Xa(t)):Jc(Gt,n.stateNode));break;case 4:i=Gt,r=Xn,Gt=n.stateNode.containerInfo,Xn=!0,Ui(t,e,n),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Df(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Jt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Ui(t,e,n),Jt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Oy),e.forEach(function(i){var r=Yy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Xn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Gt===null)throw Error(ie(160));hv(s,a,r),Gt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ei(t),i&4){try{Ua(3,t,t.return),vc(3,t)}catch(x){St(t,t.return,x)}try{Ua(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Hn(e,t),ei(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Hn(e,t),ei(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&F0(r,s),sf(o,a);var c=sf(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?H0(r,d):u==="dangerouslySetInnerHTML"?B0(r,d):u==="children"?Ga(r,d):nd(r,u,d,c)}switch(o){case"input":Ju(r,s);break;case"textarea":O0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(x){St(t,t.return,x)}}break;case 6:if(Hn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(Hn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Hn(e,t),ei(t);break;case 13:Hn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Id=wt())),i&4&&hp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,Hn(e,t),Jt=c):Hn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ua(4,h,h.return);break;case 1:Ts(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){mp(d);continue}}p!==null?(p.return=h,ve=p):mp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=z0("display",a))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ei(t),i&4&&hp(t);break;case 21:break;default:Hn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=dp(t);If(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=dp(t);Uf(t,o,a);break;default:throw Error(ie(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){ve=t,mv(t)}function mv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||No;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=No;var c=Jt;if(No=a,(Jt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?gp(r):l!==null?(l.return=a,ve=l):gp(r);for(;s!==null;)ve=s,mv(s),s=s.sibling;ve=r,No=o,Jt=c}pp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):pp(t)}}function pp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Jt||e.flags&512&&Nf(e)}catch(h){St(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function mp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function gp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Nf(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{Nf(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var zy=Math.ceil,Xl=Ni.ReactCurrentDispatcher,Nd=Ni.ReactCurrentOwner,On=Ni.ReactCurrentBatchConfig,Je=0,Bt=null,Ct=null,Wt=0,Mn=0,As=lr(0),Dt=0,io=null,Ur=0,_c=0,Ud=0,Ia=null,hn=null,Id=0,Vs=1/0,_i=null,Yl=!1,Ff=null,er=null,Uo=!1,Xi=null,ql=0,Fa=0,Of=null,El=-1,wl=0;function ln(){return Je&6?wt():El!==-1?El:El=wt()}function tr(t){return t.mode&1?Je&2&&Wt!==0?Wt&-Wt:Ey.transition!==null?(wl===0&&(wl=J0()),wl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function Zn(t,e,n,i){if(50<Fa)throw Fa=0,Of=null,Error(ie(185));co(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(_c|=n),Dt===4&&Wi(t,Wt)),_n(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=wt()+500,pc&&cr()))}function _n(t,e){var n=t.callbackNode;Ex(t,e);var i=Ll(t,t===Bt?Wt:0);if(i===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?My(vp.bind(null,t)):Tg(vp.bind(null,t)),_y(function(){!(Je&6)&&cr()}),n=null;else{switch(eg(i)){case 1:n=od;break;case 4:n=Z0;break;case 16:n=Pl;break;case 536870912:n=Q0;break;default:n=Pl}n=Ev(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(El=-1,wl=0,Je&6)throw Error(ie(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Ll(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$l(t,i);else{e=i;var r=Je;Je|=2;var s=_v();(Bt!==t||Wt!==e)&&(_i=null,Vs=wt()+500,Ar(t,e));do try{Vy();break}catch(o){vv(t,o)}while(!0);yd(),Xl.current=s,Je=r,Ct!==null?e=0:(Bt=null,Wt=0,e=Dt)}if(e!==0){if(e===2&&(r=uf(t),r!==0&&(i=r,e=kf(t,r))),e===1)throw n=io,Ar(t,0),Wi(t,i),_n(t,wt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Hy(r)&&(e=$l(t,i),e===2&&(s=uf(t),s!==0&&(i=s,e=kf(t,s))),e===1))throw n=io,Ar(t,0),Wi(t,i),_n(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:_r(t,hn,_i);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Id+500-wt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_f(_r.bind(null,t,hn,_i),e);break}_r(t,hn,_i);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=_f(_r.bind(null,t,hn,_i),i);break}_r(t,hn,_i);break;case 5:_r(t,hn,_i);break;default:throw Error(ie(329))}}}return _n(t,wt()),t.callbackNode===n?gv.bind(null,t):null}function kf(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=$l(t,e),t!==2&&(e=hn,hn=n,e!==null&&Bf(e)),t}function Bf(t){hn===null?hn=t:hn.push.apply(hn,t)}function Hy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Ud,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function vp(t){if(Je&6)throw Error(ie(327));Us();var e=Ll(t,0);if(!(e&1))return _n(t,wt()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var i=uf(t);i!==0&&(e=i,n=kf(t,i))}if(n===1)throw n=io,Ar(t,0),Wi(t,e),_n(t,wt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,hn,_i),_n(t,wt()),null}function Fd(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=wt()+500,pc&&cr())}}function Ir(t){Xi!==null&&Xi.tag===0&&!(Je&6)&&Us();var e=Je;Je|=1;var n=On.transition,i=rt;try{if(On.transition=null,rt=1,t)return t()}finally{rt=i,On.transition=n,Je=e,!(Je&6)&&cr()}}function Od(){Mn=As.current,ct(As)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vy(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(vd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Hs(),ct(gn),ct(nn),Ad();break;case 5:Td(i);break;case 4:Hs();break;case 13:ct(gt);break;case 19:ct(gt);break;case 10:Sd(i.type._context);break;case 22:case 23:Od()}n=n.return}if(Bt=t,Ct=t=nr(t.current,null),Wt=Mn=e,Dt=0,io=null,Ud=_c=Ur=0,hn=Ia=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function vv(t,e){do{var n=Ct;try{if(yd(),yl.current=jl,Wl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(Nr=0,kt=Pt=vt=null,Na=!1,eo=0,Nd.current=null,n===null||n.return===null){Dt=1,io=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=rp(a);if(p!==null){p.flags&=-257,sp(p,a,o,s,e),p.mode&1&&ip(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){ip(s,c,e),kd();break e}l=Error(ie(426))}}else if(ft&&o.mode&1){var m=rp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),sp(m,a,o,s,e),_d(Gs(l,o));break e}}s=l=Gs(l,o),Dt!==4&&(Dt=2),Ia===null?Ia=[s]:Ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ev(s,l,e);Zh(s,f);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(er===null||!er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=tv(s,o,e);Zh(s,y);break e}}s=s.return}while(s!==null)}yv(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function _v(){var t=Xl.current;return Xl.current=jl,t===null?jl:t}function kd(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(Ur&268435455)&&!(_c&268435455)||Wi(Bt,Wt)}function $l(t,e){var n=Je;Je|=2;var i=_v();(Bt!==t||Wt!==e)&&(_i=null,Ar(t,e));do try{Gy();break}catch(r){vv(t,r)}while(!0);if(yd(),Je=n,Xl.current=i,Ct!==null)throw Error(ie(261));return Bt=null,Wt=0,Dt}function Gy(){for(;Ct!==null;)xv(Ct)}function Vy(){for(;Ct!==null&&!px();)xv(Ct)}function xv(t){var e=Mv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?yv(t):Ct=e,Nd.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fy(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=Iy(n,e,Mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function _r(t,e,n){var i=rt,r=On.transition;try{On.transition=null,rt=1,Wy(t,e,n,i)}finally{On.transition=r,rt=i}return null}function Wy(t,e,n,i){do Us();while(Xi!==null);if(Je&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wx(t,s),t===Bt&&(Ct=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,Ev(Pl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=rt;rt=1;var o=Je;Je|=4,Nd.current=null,ky(t,n),pv(n,t),uy(gf),Dl=!!mf,gf=mf=null,t.current=n,By(n),mx(),Je=o,rt=a,On.transition=s}else t.current=n;if(Uo&&(Uo=!1,Xi=t,ql=r),s=t.pendingLanes,s===0&&(er=null),_x(n.stateNode),_n(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=Ff,Ff=null,t;return ql&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Of?Fa++:(Fa=0,Of=t):Fa=0,cr(),null}function Us(){if(Xi!==null){var t=eg(ql),e=On.transition,n=rt;try{if(On.transition=null,rt=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,ql=0,Je&6)throw Error(ie(331));var r=Je;for(Je|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Ua(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var h=u.sibling,p=u.return;if(fv(u),u===c){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ve=_;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:vc(9,o)}}catch(b){St(o,o.return,b)}if(o===a){ve=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ve=y;break e}ve=o.return}}if(Je=r,cr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(cc,t)}catch{}i=!0}return i}finally{rt=n,On.transition=e}}return!1}function _p(t,e,n){e=Gs(n,e),e=ev(t,e,1),t=Ji(t,e,1),e=ln(),t!==null&&(co(t,1,e),_n(t,e))}function St(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Gs(n,t),t=tv(e,t,1),e=Ji(e,t,1),t=ln(),e!==null&&(co(e,1,t),_n(e,t));break}}e=e.return}}function jy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Dt===4||Dt===3&&(Wt&130023424)===Wt&&500>wt()-Id?Ar(t,0):Ud|=n),_n(t,e)}function Sv(t,e){e===0&&(t.mode&1?(e=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):e=1);var n=ln();t=Pi(t,e),t!==null&&(co(t,e,n),_n(t,n))}function Xy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sv(t,n)}function Yy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Sv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Uy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,ft&&e.flags&1048576&&Ag(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=ks(e,nn.current);Ns(e,n),r=Cd(null,e,i,t,r,n);var s=Rd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ed(e),r.updater=gc,e.stateNode=r,r._reactInternals=e,Tf(e,i,t,n),e=Cf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&gd(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$y(i),t=jn(i,t),r){case 0:e=bf(null,e,i,t,n);break e;case 1:e=lp(null,e,i,t,n);break e;case 11:e=ap(null,e,i,t,n);break e;case 14:e=op(null,e,i,jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),lp(t,e,i,r,n);case 3:e:{if(sv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dg(t,e),Gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(ie(423)),e),e=cp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(ie(424)),e),e=cp(t,e,i,n,r);break e}else for(wn=Qi(e.stateNode.containerInfo.firstChild),Tn=e,ft=!0,Yn=null,n=Pg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Li(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return Ng(e),t===null&&Mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,vf(i,r)?a=null:s!==null&&vf(i,s)&&(e.flags|=32),rv(t,e),an(t,e,a,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return av(t,e,n);case 4:return wd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ap(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(zl,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!gn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ef(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=Bn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),op(t,e,i,r,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ml(t,e),e.tag=1,vn(i)?(t=!0,Ol(e)):t=!1,Ns(e,n),Jg(e,i,r),Tf(e,i,r,n),Cf(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return iv(t,e,n)}throw Error(ie(156,e.tag))};function Ev(t,e){return K0(t,e)}function qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new qy(t,e,n,i)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $y(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===sd)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Bd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return br(n.children,r,s,e);case id:a=8,r|=8;break;case qu:return t=Fn(12,n,e,r|2),t.elementType=qu,t.lanes=s,t;case $u:return t=Fn(13,n,e,r),t.elementType=$u,t.lanes=s,t;case Ku:return t=Fn(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case N0:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:a=10;break e;case D0:a=9;break e;case rd:a=11;break e;case sd:a=14;break e;case zi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function ou(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ky(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zd(t,e,n,i,r,s,a,o,l){return t=new Ky(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),t}function Zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return rr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(vn(n))return wg(t,n,e)}return e}function Tv(t,e,n,i,r,s,a,o,l){return t=zd(n,i,!0,t,r,s,a,o,l),t.context=wv(null),n=t.current,i=ln(),r=tr(n),s=Ei(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,co(t,r,i),_n(t,i),t}function yc(t,e,n,i){var r=e.current,s=ln(),a=tr(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,a),t!==null&&(Zn(t,r,a,s),xl(t,r,a)),a}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hd(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function Qy(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}Sc.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));yc(t,e,null,null)};Sc.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){yc(null,t,null,null)}),e[Ri]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&sg(t)}};function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function Jy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kl(a);s.call(c)}}var a=Tv(e,i,t,0,null,!1,!1,"",yp);return t._reactRootContainer=a,t[Ri]=a.current,$a(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Kl(l);o.call(c)}}var l=zd(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=l,t[Ri]=l.current,$a(t.nodeType===8?t.parentNode:t),Ir(function(){yc(e,l,n,i)}),l}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Kl(a);o.call(l)}}yc(e,a,t,r)}else a=Jy(n,e,t,r,i);return Kl(a)}tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(ld(e,n|1),_n(e,wt()),!(Je&6)&&(Vs=wt()+500,cr()))}break;case 13:Ir(function(){var i=Pi(t,1);if(i!==null){var r=ln();Zn(i,t,1,r)}}),Hd(t,1)}};cd=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=ln();Zn(e,t,134217728,n)}Hd(t,134217728)}};ng=function(t){if(t.tag===13){var e=tr(t),n=Pi(t,e);if(n!==null){var i=ln();Zn(n,t,e,i)}Hd(t,e)}};ig=function(){return rt};rg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};of=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(ie(90));I0(i),Ju(i,r)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};W0=Fd;j0=Ir;var eS={usingClientEntryPoint:!1,Events:[fo,ys,hc,G0,V0,Fd]},da={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tS={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q0(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||Qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{cc=Io.inject(tS),ai=Io}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(e))throw Error(ie(200));return Zy(t,e,null,n)};bn.createRoot=function(t,e){if(!Vd(t))throw Error(ie(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zd(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,$a(t.nodeType===8?t.parentNode:t),new Gd(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=q0(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Ir(t)};bn.hydrate=function(t,e,n){if(!Mc(e))throw Error(ie(200));return Ec(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Vd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,$a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};bn.render=function(t,e,n){if(!Mc(e))throw Error(ie(200));return Ec(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(ie(40));return t._reactRootContainer?(Ir(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};bn.unstable_batchedUpdates=Fd;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Ec(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),b0.exports=bn;var nS=b0.exports,Sp=nS;Xu.createRoot=Sp.createRoot,Xu.hydrateRoot=Sp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="160",Wr={ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iS=0,Mp=1,rS=2,Cv=1,Rv=2,vi=3,sr=0,jt=1,En=2,wi=0,Is=1,ci=2,Ep=3,wp=4,sS=5,yr=100,aS=101,oS=102,Tp=103,Ap=104,lS=200,cS=201,uS=202,fS=203,zf=204,Hf=205,dS=206,hS=207,pS=208,mS=209,gS=210,vS=211,_S=212,xS=213,yS=214,SS=0,MS=1,ES=2,Zl=3,wS=4,TS=5,AS=6,bS=7,jd=0,CS=1,RS=2,Ti=0,Pv=1,Lv=2,Dv=3,Xd=4,PS=5,Nv=6,Uv=300,Ws=301,js=302,Ql=303,Gf=304,wc=306,Fr=1e3,qn=1001,Vf=1002,on=1003,bp=1004,cu=1005,Un=1006,LS=1007,ro=1008,Ai=1009,DS=1010,NS=1011,Yd=1012,Iv=1013,Yi=1014,qi=1015,li=1016,Fv=1017,Ov=1018,Cr=1020,US=1021,$n=1023,IS=1024,FS=1025,Rr=1026,Xs=1027,OS=1028,kv=1029,kS=1030,Bv=1031,zv=1033,uu=33776,fu=33777,du=33778,hu=33779,Cp=35840,Rp=35841,Pp=35842,Lp=35843,Hv=36196,Dp=37492,Np=37496,Up=37808,Ip=37809,Fp=37810,Op=37811,kp=37812,Bp=37813,zp=37814,Hp=37815,Gp=37816,Vp=37817,Wp=37818,jp=37819,Xp=37820,Yp=37821,pu=36492,qp=36494,$p=36495,BS=36283,Kp=36284,Zp=36285,Qp=36286,Gv=3e3,Pr=3001,zS=3200,HS=3201,qd=0,GS=1,Lt="",tt="srgb",ui="srgb-linear",$d="display-p3",Tc="display-p3-linear",Jl="linear",at="srgb",ec="rec709",tc="p3",Xr=7680,Jp=519,VS=512,WS=513,jS=514,Vv=515,XS=516,YS=517,qS=518,$S=519,Wf=35044,em="300 es",jf=1035,Mi=2e3,nc=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tm=1234567;const Oa=Math.PI/180,so=180/Math.PI;function bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function Kd(t,e){return(t%e+e)%e}function KS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ZS(t,e,n){return t!==e?(n-t)/(e-t):0}function ka(t,e,n){return(1-n)*t+n*e}function QS(t,e,n,i){return ka(t,e,1-Math.exp(-n*i))}function JS(t,e=1){return e-Math.abs(Kd(t,e*2)-e)}function eM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function iM(t,e){return t+Math.random()*(e-t)}function rM(t){return t*(.5-Math.random())}function sM(t){t!==void 0&&(tm=t);let e=tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aM(t){return t*Oa}function oM(t){return t*so}function Xf(t){return(t&t-1)===0&&t!==0}function lM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ic(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function cM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*v,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*v,o*c);break;case"ZYZ":t.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const po={DEG2RAD:Oa,RAD2DEG:so,generateUUID:bi,clamp:en,euclideanModulo:Kd,mapLinear:KS,inverseLerp:ZS,lerp:ka,damp:QS,pingpong:JS,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:rM,seededRandom:sM,degToRad:aM,radToDeg:oM,isPowerOfTwo:Xf,ceilPowerOfTwo:lM,floorPowerOfTwo:ic,setQuaternionFromProperEuler:cM,normalize:st,denormalize:ri};class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],g=r[1],_=r[4],y=r[7],b=r[2],A=r[5],T=r[8];return s[0]=a*x+o*g+l*b,s[3]=a*m+o*_+l*A,s[6]=a*f+o*y+l*T,s[1]=c*x+u*g+d*b,s[4]=c*m+u*_+d*A,s[7]=c*f+u*y+d*T,s[2]=h*x+p*g+v*b,s[5]=h*m+p*_+v*A,s[8]=h*f+p*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new $e;function Wv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ao(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uM(){const t=ao("canvas");return t.style.display="block",t}const nm={};function Ba(t){t in nm||(nm[t]=!0,console.warn(t))}const im=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rm=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fo={[ui]:{transfer:Jl,primaries:ec,toReference:t=>t,fromReference:t=>t},[tt]:{transfer:at,primaries:ec,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tc]:{transfer:Jl,primaries:tc,toReference:t=>t.applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im)},[$d]:{transfer:at,primaries:tc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im).convertLinearToSRGB()}},fM=new Set([ui,Tc]),it={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Fo[e].toReference,r=Fo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Fo[t].primaries},getTransfer:function(t){return t===Lt?Jl:Fo[t].transfer}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=ao("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ao("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class Xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vu(r[a].image)):s.push(vu(r[a]))}else s=vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;class cn extends Hr{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=qn,r=qn,s=Un,a=ro,o=$n,l=Ai,c=cn.DEFAULT_ANISOTROPY,u=Lt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=bi(),this.name="",this.source=new Xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pr?tt:Lt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Pr:Gv}set encoding(e){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?tt:Lt}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uv;cn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,b=(f+1)/2,A=(u+h)/4,T=(d+x)/4,U=(v+m)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?tt:Lt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends pM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==v){let m=1-o;const f=l*h+c*p+u*v+d*x,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,f*g);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const y=o*g;if(l=l*m+h*y,c=c*m+p*y,u=u*m+v*y,d=d*m+x*y,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-o*p,e[n+2]=c*v+u*p+o*h-l*d,e[n+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new P,sm=new Or;class Gr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),ko.subVectors(this.max,ha),qr.subVectors(e.a,ha),$r.subVectors(e.b,ha),Kr.subVectors(e.c,ha),Ii.subVectors($r,qr),Fi.subVectors(Kr,$r),hr.subVectors(qr,Kr);let n=[0,-Ii.z,Ii.y,0,-Fi.z,Fi.y,0,-hr.z,hr.y,Ii.z,0,-Ii.x,Fi.z,0,-Fi.x,hr.z,0,-hr.x,-Ii.y,Ii.x,0,-Fi.y,Fi.x,0,-hr.y,hr.x,0];return!xu(n,qr,$r,Kr,ko)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,qr,$r,Kr,ko))?!1:(Bo.crossVectors(Ii,Fi),n=[Bo.x,Bo.y,Bo.z],xu(n,qr,$r,Kr,ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new P,new P,new P,new P,new P,new P,new P,new P],Gn=new P,Oo=new Gr,qr=new P,$r=new P,Kr=new P,Ii=new P,Fi=new P,hr=new P,ha=new P,ko=new P,Bo=new P,pr=new P;function xu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gM=new Gr,pa=new P,yu=new P;class Zs{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(yu)),this.expandByPoint(pa.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new P,Su=new P,zo=new P,Oi=new P,Mu=new P,Ho=new P,Eu=new P;class Ac{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Su.copy(e).add(n).multiplyScalar(.5),zo.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Su);const s=e.distanceTo(n)*.5,a=-this.direction.dot(zo),o=Oi.dot(this.direction),l=-Oi.dot(zo),c=Oi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const x=1/u;d*=x,h*=x,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Su).addScaledVector(zo,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Mu.subVectors(n,e),Ho.subVectors(i,e),Eu.crossVectors(Mu,Ho);let a=this.direction.dot(Eu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Ho.crossVectors(Oi,Ho));if(l<0)return null;const c=o*this.direction.dot(Mu.cross(Oi));if(c<0||l+c>a)return null;const u=-o*Oi.dot(Eu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,v,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,x,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h+x*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h-x*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,x=o*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*u,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=a*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,_M)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ki.crossVectors(i,yn),ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ki.crossVectors(i,yn)),ki.normalize(),Go.crossVectors(yn,ki),r[0]=ki.x,r[4]=Go.x,r[8]=yn.x,r[1]=ki.y,r[5]=Go.y,r[9]=yn.y,r[2]=ki.z,r[6]=Go.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],g=i[3],_=i[7],y=i[11],b=i[15],A=r[0],T=r[4],U=r[8],M=r[12],E=r[1],z=r[5],Y=r[9],re=r[13],D=r[2],G=r[6],X=r[10],$=r[14],N=r[3],F=r[7],B=r[11],K=r[15];return s[0]=a*A+o*E+l*D+c*N,s[4]=a*T+o*z+l*G+c*F,s[8]=a*U+o*Y+l*X+c*B,s[12]=a*M+o*re+l*$+c*K,s[1]=u*A+d*E+h*D+p*N,s[5]=u*T+d*z+h*G+p*F,s[9]=u*U+d*Y+h*X+p*B,s[13]=u*M+d*re+h*$+p*K,s[2]=v*A+x*E+m*D+f*N,s[6]=v*T+x*z+m*G+f*F,s[10]=v*U+x*Y+m*X+f*B,s[14]=v*M+x*re+m*$+f*K,s[3]=g*A+_*E+y*D+b*N,s[7]=g*T+_*z+y*G+b*F,s[11]=g*U+_*Y+y*X+b*B,s[15]=g*M+_*re+y*$+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+x*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-n*l*d+n*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],g=d*m*c-x*h*c+x*l*p-o*m*p-d*l*f+o*h*f,_=v*h*c-u*m*c-v*l*p+a*m*p+u*l*f-a*h*f,y=u*x*c-v*d*c+v*o*p-a*x*p-u*o*f+a*d*f,b=v*d*l-u*x*l-v*o*h+a*x*h+u*o*m-a*d*m,A=n*g+i*_+r*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*T,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*f+i*l*f)*T,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*f+n*h*f)*T,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*f-n*l*f)*T,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*T,e[8]=y*T,e[9]=(v*d*s-u*x*s-v*i*p+n*x*p+u*i*f-n*d*f)*T,e[10]=(a*x*s-v*o*s+v*i*c-n*x*c-a*i*f+n*o*f)*T,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*T,e[12]=b*T,e[13]=(u*x*r-v*d*r+v*i*h-n*x*h-u*i*m+n*d*m)*T,e[14]=(v*o*r-a*x*r-v*i*l+n*x*l+a*i*m-n*o*m)*T,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,v=s*d,x=a*u,m=a*d,f=o*d,g=l*c,_=l*u,y=l*d,b=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+y)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*T,r[9]=(m-g)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const a=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(o===Mi)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===nc)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Mi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),h=(n+e)*c,p=(i+r)*u;let v,x;if(o===Mi)v=(a+s)*d,x=-2*d;else if(o===nc)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new P,Vn=new ut,vM=new P(0,0,0),_M=new P(1,1,1),ki=new P,Go=new P,yn=new P,am=new ut,om=new Or;class bc{constructor(e=0,n=0,i=0,r=bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bc.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xM=0;const lm=new P,Qr=new Or,pi=new ut,Vo=new P,ma=new P,yM=new P,SM=new Or,cm=new P(1,0,0),um=new P(0,1,0),fm=new P(0,0,1),MM={type:"added"},EM={type:"removed"};class Tt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,n=new bc,i=new Or,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new $e}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vo.copy(e):Vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ma,Vo,this.up):pi.lookAt(Vo,ma,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(pi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new P,mi=new P,wu=new P,gi=new P,Jr=new P,es=new P,dm=new P,Tu=new P,Au=new P,bu=new P;let Wo=!1;class In{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),mi.subVectors(i,n),wu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(mi),l=Wn.dot(wu),c=mi.dot(mi),u=mi.dot(wu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),mi.subVectors(e,n),Wn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),Tu.subVectors(e,i);const l=Jr.dot(Tu),c=es.dot(Tu);if(l<=0&&c<=0)return n.copy(i);Au.subVectors(e,r);const u=Jr.dot(Au),d=es.dot(Au);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Jr,a);bu.subVectors(e,s);const p=Jr.dot(bu),v=es.dot(bu);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return dm.subVectors(s,r),o=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(dm,o);const f=1/(m+x+h);return a=x*f,o=h*f,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Re{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Kd(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Cu(a,s,e+1/3),this.g=Cu(a,s,e),this.b=Cu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tt){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return it.fromWorkingColorSpace(Qt.copy(this),e),Math.round(en(Qt.r*255,0,255))*65536+Math.round(en(Qt.g*255,0,255))*256+Math.round(en(Qt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=tt){it.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(jo);const i=ka(Bi.h,jo.h,n),r=ka(Bi.s,jo.s,n),s=ka(Bi.l,jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Re;Re.NAMES=qv;let wM=0;class ur extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Is,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cc extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,Xo=new ue;class zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xo.fromBufferAttribute(this,n),Xo.applyMatrix3(e),this.setXY(n,Xo.x,Xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class $v extends zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kv extends zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ht extends zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TM=0;const Pn=new ut,Ru=new Tt,ts=new P,Sn=new Gr,ga=new Gr,Ot=new P;class dn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wv(e)?Kv:$v)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ht(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(Sn.min,ga.min),Sn.expandByPoint(Ot),Ot.addVectors(Sn.max,ga.max),Sn.expandByPoint(Ot)):(Sn.expandByPoint(ga.min),Sn.expandByPoint(ga.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Ot.add(ts)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new P,u[E]=new P;const d=new P,h=new P,p=new P,v=new ue,x=new ue,m=new ue,f=new P,g=new P;function _(E,z,Y){d.fromArray(r,E*3),h.fromArray(r,z*3),p.fromArray(r,Y*3),v.fromArray(a,E*2),x.fromArray(a,z*2),m.fromArray(a,Y*2),h.sub(d),p.sub(d),x.sub(v),m.sub(v);const re=1/(x.x*m.y-m.x*x.y);isFinite(re)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(re),g.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(re),c[E].add(f),c[z].add(f),c[Y].add(f),u[E].add(g),u[z].add(g),u[Y].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,z=y.length;E<z;++E){const Y=y[E],re=Y.start,D=Y.count;for(let G=re,X=re+D;G<X;G+=3)_(i[G+0],i[G+1],i[G+2])}const b=new P,A=new P,T=new P,U=new P;function M(E){T.fromArray(s,E*3),U.copy(T);const z=c[E];b.copy(z),b.sub(T.multiplyScalar(T.dot(z))).normalize(),A.crossVectors(U,z);const re=A.dot(u[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=re}for(let E=0,z=y.length;E<z;++E){const Y=y[E],re=Y.start,D=Y.count;for(let G=re,X=re+D;G<X;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new zt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new ut,mr=new Ac,Yo=new Zs,pm=new P,ns=new P,is=new P,rs=new P,Pu=new P,qo=new P,$o=new ue,Ko=new ue,Zo=new ue,mm=new P,gm=new P,vm=new P,Qo=new P,Jo=new P;class ht extends Tt{constructor(e=new dn,n=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Pu.fromBufferAttribute(d,e),a?qo.addScaledVector(Pu,u):qo.addScaledVector(Pu.sub(n),u))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Yo.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Yo,pm)===null||mr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=_;y<b;y+=3){const A=o.getX(y),T=o.getX(y+1),U=o.getX(y+2);r=el(this,f,e,i,c,u,d,A,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);r=el(this,a,e,i,c,u,d,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=_;y<b;y+=3){const A=y,T=y+1,U=y+2;r=el(this,f,e,i,c,u,d,A,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=m,_=m+1,y=m+2;r=el(this,a,e,i,c,u,d,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AM(t,e,n,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Jo);return c<n.near||c>n.far?null:{distance:c,point:Jo.clone(),object:t}}function el(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const u=AM(t,e,n,i,ns,is,rs,Qo);if(u){r&&($o.fromBufferAttribute(r,o),Ko.fromBufferAttribute(r,l),Zo.fromBufferAttribute(r,c),u.uv=In.getInterpolation(Qo,ns,is,rs,$o,Ko,Zo,new ue)),s&&($o.fromBufferAttribute(s,o),Ko.fromBufferAttribute(s,l),Zo.fromBufferAttribute(s,c),u.uv1=In.getInterpolation(Qo,ns,is,rs,$o,Ko,Zo,new ue),u.uv2=u.uv1),a&&(mm.fromBufferAttribute(a,o),gm.fromBufferAttribute(a,l),vm.fromBufferAttribute(a,c),u.normal=In.getInterpolation(Qo,ns,is,rs,mm,gm,vm,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};In.getNormal(ns,is,rs,d.normal),u.face=d}return u}class mo extends dn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(d,2));function v(x,m,f,g,_,y,b,A,T,U,M){const E=y/T,z=b/U,Y=y/2,re=b/2,D=A/2,G=T+1,X=U+1;let $=0,N=0;const F=new P;for(let B=0;B<X;B++){const K=B*z-re;for(let Q=0;Q<G;Q++){const j=Q*E-Y;F[x]=j*g,F[m]=K*_,F[f]=D,c.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[f]=A>0?1:-1,u.push(F.x,F.y,F.z),d.push(Q/T),d.push(1-B/U),$+=1}}for(let B=0;B<U;B++)for(let K=0;K<T;K++){const Q=h+K+G*B,j=h+K+G*(B+1),Z=h+(K+1)+G*(B+1),de=h+(K+1)+G*B;l.push(Q,j,de),l.push(j,Z,de),N+=6}o.addGroup(p,N,M),p+=N,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function bM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const oo={clone:Ys,merge:sn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=bM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qv extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class PM extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new pn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new pn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new pn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new pn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new pn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Jv extends cn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LM extends kn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?tt:Lt),this.texture=new Jv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mo(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:wi});s.uniforms.tEquirect.value=n;const a=new ht(r,s),o=n.minFilter;return n.minFilter===ro&&(n.minFilter=Un),new PM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Lu=new P,DM=new P,NM=new $e;class Gi{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lu.subVectors(i,n).cross(DM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NM.getNormalMatrix(e),r=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Zs,tl=new P;class Qd{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+a,h+u,m+v,y+g).normalize(),i[3].setComponents(l-a,h-u,m-v,y-g).normalize(),i[4].setComponents(l-o,h-d,m-x,y-_).normalize(),n===Mi)i[5].setComponents(l+o,h+d,m+x,y+_).normalize();else if(n===nc)i[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,m=v.length;x<m;x++){const f=v[x];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class Rc extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const g=f*h-a;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const _=g+c*f,y=g+c*(f+1),b=g+1+c*(f+1),A=g+1+c*f;p.push(_,y,A),p.push(y,b,A)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var IM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:IM,alphahash_pars_fragment:FM,alphamap_fragment:OM,alphamap_pars_fragment:kM,alphatest_fragment:BM,alphatest_pars_fragment:zM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:VM,batching_vertex:WM,begin_vertex:jM,beginnormal_vertex:XM,bsdfs:YM,iridescence_fragment:qM,bumpmap_pars_fragment:$M,clipping_planes_fragment:KM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:JM,color_fragment:e1,color_pars_fragment:t1,color_pars_vertex:n1,color_vertex:i1,common:r1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:a1,displacementmap_pars_vertex:o1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:u1,colorspace_fragment:f1,colorspace_pars_fragment:d1,envmap_fragment:h1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:x1,fog_fragment:y1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_fragment:E1,lightmap_pars_fragment:w1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:A1,lights_pars_begin:b1,lights_toon_fragment:R1,lights_toon_pars_fragment:P1,lights_phong_fragment:L1,lights_phong_pars_fragment:D1,lights_physical_fragment:N1,lights_physical_pars_fragment:U1,lights_fragment_begin:I1,lights_fragment_maps:F1,lights_fragment_end:O1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:W1,map_particle_pars_fragment:j1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphcolor_vertex:q1,morphnormal_vertex:$1,morphtarget_pars_vertex:K1,morphtarget_vertex:Z1,normal_fragment_begin:Q1,normal_fragment_maps:J1,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:fE,dithering_fragment:dE,dithering_pars_fragment:hE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:vE,shadowmap_vertex:_E,shadowmask_pars_fragment:xE,skinbase_vertex:yE,skinning_pars_vertex:SE,skinning_vertex:ME,skinnormal_vertex:EE,specularmap_fragment:wE,specularmap_pars_fragment:TE,tonemapping_fragment:AE,tonemapping_pars_fragment:bE,transmission_fragment:CE,transmission_pars_fragment:RE,uv_pars_fragment:PE,uv_pars_vertex:LE,uv_vertex:DE,worldpos_vertex:NE,background_vert:UE,background_frag:IE,backgroundCube_vert:FE,backgroundCube_frag:OE,cube_vert:kE,cube_frag:BE,depth_vert:zE,depth_frag:HE,distanceRGBA_vert:GE,distanceRGBA_frag:VE,equirect_vert:WE,equirect_frag:jE,linedashed_vert:XE,linedashed_frag:YE,meshbasic_vert:qE,meshbasic_frag:$E,meshlambert_vert:KE,meshlambert_frag:ZE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:ew,meshnormal_frag:tw,meshphong_vert:nw,meshphong_frag:iw,meshphysical_vert:rw,meshphysical_frag:sw,meshtoon_vert:aw,meshtoon_frag:ow,points_vert:lw,points_frag:cw,shadow_vert:uw,shadow_frag:fw,sprite_vert:dw,sprite_frag:hw},fe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ni={basic:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:sn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:sn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:sn([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:sn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:sn([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:sn([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:sn([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:sn([fe.lights,fe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const nl={r:0,b:0,g:0};function pw(t,e,n,i,r,s,a){const o=new Re(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(m,f){let g=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?n:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===wc)?(u===void 0&&(u=new ht(new mo(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Ys(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=it.getTransfer(_.colorSpace)!==at,(d!==_||h!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new Rc(2,2),new pt({name:"BackgroundMaterial",uniforms:Ys(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(nl,Zv(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function mw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(D,G,X,$,N){let F=!1;if(a){const B=x($,X,G);c!==B&&(c=B,p(c.object)),F=f(D,$,X,N),F&&g(D,$,X,N)}else{const B=G.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==B)&&(c.geometry=$.id,c.program=X.id,c.wireframe=B,F=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,U(D,G,X,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,G,X){const $=X.wireframe===!0;let N=o[D.id];N===void 0&&(N={},o[D.id]=N);let F=N[G.id];F===void 0&&(F={},N[G.id]=F);let B=F[$];return B===void 0&&(B=m(h()),F[$]=B),B}function m(D){const G=[],X=[],$=[];for(let N=0;N<r;N++)G[N]=0,X[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,G,X,$){const N=c.attributes,F=G.attributes;let B=0;const K=X.getAttributes();for(const Q in K)if(K[Q].location>=0){const Z=N[Q];let de=F[Q];if(de===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function g(D,G,X,$){const N={},F=G.attributes;let B=0;const K=X.getAttributes();for(const Q in K)if(K[Q].location>=0){let Z=F[Q];Z===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),N[Q]=de,B++}c.attributes=N,c.attributesNum=B,c.index=$}function _(){const D=c.newAttributes;for(let G=0,X=D.length;G<X;G++)D[G]=0}function y(D){b(D,0)}function b(D,G){const X=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;X[D]=1,$[D]===0&&(t.enableVertexAttribArray(D),$[D]=1),N[D]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),N[D]=G)}function A(){const D=c.newAttributes,G=c.enabledAttributes;for(let X=0,$=G.length;X<$;X++)G[X]!==D[X]&&(t.disableVertexAttribArray(X),G[X]=0)}function T(D,G,X,$,N,F,B){B===!0?t.vertexAttribIPointer(D,G,X,N,F):t.vertexAttribPointer(D,G,X,$,N,F)}function U(D,G,X,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=$.attributes,F=X.getAttributes(),B=G.defaultAttributeValues;for(const K in F){const Q=F[K];if(Q.location>=0){let j=N[K];if(j===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Z=j.normalized,de=j.itemSize,_e=n.get(j);if(_e===void 0)continue;const Se=_e.buffer,Ue=_e.type,Ie=_e.bytesPerElement,Pe=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||j.gpuType===Iv);if(j.isInterleavedBufferAttribute){const Ye=j.data,k=Ye.stride,Rt=j.offset;if(Ye.isInstancedInterleavedBuffer){for(let Te=0;Te<Q.locationSize;Te++)b(Q.location+Te,Ye.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Te=0;Te<Q.locationSize;Te++)y(Q.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Te=0;Te<Q.locationSize;Te++)T(Q.location+Te,de/Q.locationSize,Ue,Z,k*Ie,(Rt+de/Q.locationSize*Te)*Ie,Pe)}else{if(j.isInstancedBufferAttribute){for(let Ye=0;Ye<Q.locationSize;Ye++)b(Q.location+Ye,j.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ye=0;Ye<Q.locationSize;Ye++)y(Q.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ye=0;Ye<Q.locationSize;Ye++)T(Q.location+Ye,de/Q.locationSize,Ue,Z,de*Ie,de/Q.locationSize*Ye*Ie,Pe)}}else if(B!==void 0){const Z=B[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(Q.location,Z);break;case 3:t.vertexAttrib3fv(Q.location,Z);break;case 4:t.vertexAttrib4fv(Q.location,Z);break;default:t.vertexAttrib1fv(Q.location,Z)}}}}A()}function M(){Y();for(const D in o){const G=o[D];for(const X in G){const $=G[X];for(const N in $)v($[N].object),delete $[N];delete G[X]}delete o[D]}}function E(D){if(o[D.id]===void 0)return;const G=o[D.id];for(const X in G){const $=G[X];for(const N in $)v($[N].object),delete $[N];delete G[X]}delete o[D.id]}function z(D){for(const G in o){const X=o[G];if(X[D.id]===void 0)continue;const $=X[D.id];for(const N in $)v($[N].object),delete $[N];delete X[D.id]}}function Y(){re(),u=!0,c!==l&&(c=l,p(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:re,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:A}}function gw(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,d,h),n.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],d[v]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function vw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=a||e.has("OES_texture_float"),b=_&&y,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function _w(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Gi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let y=f.clippingState||null;l.value=y,y=u(v,h,_,p);for(let b=0;b!==_;++b)y[b]=n[b];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)a.copy(d[_]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xw(t){let e=new WeakMap;function n(a,o){return o===Ql?a.mapping=Ws:o===Gf&&(a.mapping=js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ql||o===Gf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new LM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pc extends Qv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=4,_m=[.125,.215,.35,.446,.526,.582],Sr=20,Du=new Pc,xm=new Re;let Nu=null,Uu=0,Iu=0;const xr=(1+Math.sqrt(5))/2,os=1/xr,ym=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,xr,os),new P(0,xr,-os),new P(os,0,xr),new P(-os,0,xr),new P(xr,os,0),new P(-xr,os,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Uu,Iu),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:li,format:$n,colorSpace:ui,depthBuffer:!1},r=Mm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yw(s)),this._blurMaterial=Sw(s,e,n)}return r}_compileMaterial(e){const n=new ht(this._lodPlanes[0],e);this._renderer.compile(n,Du)}_sceneToCubeUV(e,n,i,r){const o=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(xm),u.toneMapping=Ti,u.autoClear=!1;const p=new Cc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new ht(new mo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(xm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):g===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;il(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ht(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const f=[];let g=0;for(let T=0;T<Sr;++T){const U=T/x,M=Math.exp(-U*U/2);f.push(M),T===0?g+=M:T<m&&(g+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-bs?r-_+bs:0),A=4*(this._cubeSize-y);il(n,b,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Du)}}function yw(t){const e=[],n=[],i=[];let r=t;const s=t-bs+1+_m.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-bs?l=_m[a-t+bs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,f=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,U=A>2?0:-1,M=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];g.set(M,x*v*A),_.set(h,m*v*A);const E=[A,A,A,A,A,A];y.set(E,f*v*A)}const b=new dn;b.setAttribute("position",new zt(g,x)),b.setAttribute("uv",new zt(_,m)),b.setAttribute("faceIndex",new zt(y,f)),e.push(b),r>bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mm(t,e,n){const i=new kn(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Sw(t,e,n){const i=new Float32Array(Sr),r=new P(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Em(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wm(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ql||l===Gf,u=l===Ws||l===js;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Sm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Sm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const b=g[_+0],A=g[_+1],T=g[_+2];h.push(b,A,A,T,T,b)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const b=_+0,A=_+1,T=_+2;h.push(b,A,A,T,T,b)}}else return;const m=new(Wv(h)?Kv:$v)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Tw(t,e,n,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,o,p*l),n.update(v,s,1)}function d(p,v,x){if(x===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,o,p*l,x),n.update(v,s,x)}function h(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,o,p,0,x);let f=0;for(let g=0;g<x;g++)f+=v[g];n.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Aw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bw(t,e){return t[0]-e[0]}function Cw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Rw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==x){let G=function(){re.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),b===!0&&(M=3);let E=u.attributes.position.count*M,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Y=new Float32Array(E*z*4*x),re=new Yv(Y,E,z,x);re.type=qi,re.needsUpdate=!0;const D=M*4;for(let X=0;X<x;X++){const $=A[X],N=T[X],F=U[X],B=E*z*4*X;for(let K=0;K<$.count;K++){const Q=K*D;_===!0&&(a.fromBufferAttribute($,K),Y[B+Q+0]=a.x,Y[B+Q+1]=a.y,Y[B+Q+2]=a.z,Y[B+Q+3]=0),y===!0&&(a.fromBufferAttribute(N,K),Y[B+Q+4]=a.x,Y[B+Q+5]=a.y,Y[B+Q+6]=a.z,Y[B+Q+7]=0),b===!0&&(a.fromBufferAttribute(F,K),Y[B+Q+8]=a.x,Y[B+Q+9]=a.y,Y[B+Q+10]=a.z,Y[B+Q+11]=F.itemSize===4?a.w:1)}}m={count:x,texture:re,size:new ue(E,z)},s.set(u,m),u.addEventListener("dispose",G)}let f=0;for(let _=0;_<h.length;_++)f+=h[_];const g=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<v;y++){const b=x[y];b[0]=y,b[1]=h[y]}x.sort(Cw);for(let y=0;y<8;y++)y<v&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(bw);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const b=o[y],A=b[0],T=b[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),f&&u.getAttribute("morphNormal"+y)!==f[A]&&u.setAttribute("morphNormal"+y,f[A]),r[y]=T,g+=T):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Pw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class t_ extends cn{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rr&&(i=Yi),i===void 0&&u===Xs&&(i=Cr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const n_=new cn,i_=new t_(1,1);i_.compareFunction=Vv;const r_=new Yv,s_=new mM,a_=new Jv,Tm=[],Am=[],bm=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),It(n,i)}}function Fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),It(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;bm.set(i),t.uniformMatrix4fv(this.addr,!1,bm),It(n,i)}}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?i_:n_;n.setTexture2D(e||s,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||s_,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||a_,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||r_,r)}function Kw(t){switch(t){case 5126:return Lw;case 35664:return Dw;case 35665:return Nw;case 35666:return Uw;case 35674:return Iw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return kw;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return Vw;case 36295:return Ww;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}function Zw(t,e){t.uniform1fv(this.addr,e)}function Qw(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function Jw(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function eT(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function tT(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nT(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iT(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rT(t,e){t.uniform1iv(this.addr,e)}function sT(t,e){t.uniform2iv(this.addr,e)}function aT(t,e){t.uniform3iv(this.addr,e)}function oT(t,e){t.uniform4iv(this.addr,e)}function lT(t,e){t.uniform1uiv(this.addr,e)}function cT(t,e){t.uniform2uiv(this.addr,e)}function uT(t,e){t.uniform3uiv(this.addr,e)}function fT(t,e){t.uniform4uiv(this.addr,e)}function dT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||n_,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||s_,s[a])}function pT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||a_,s[a])}function mT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||r_,s[a])}function gT(t){switch(t){case 5126:return Zw;case 35664:return Qw;case 35665:return Jw;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return aT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Kw(n.type)}}class _T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gT(n.type)}}class xT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function yT(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),a=Fu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pm(n,c===void 0?new vT(o,t,e):new _T(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new xT(o),Pm(n,d)),n=d}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);yT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ST=37297;let MT=0;function ET(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function wT(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===tc&&n===ec?i="LinearDisplayP3ToLinearSRGB":e===ec&&n===tc&&(i="LinearSRGBToLinearDisplayP3"),t){case ui:case Tc:return[i,"LinearTransferOETF"];case tt:case $d:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ET(t.getShaderSource(e),a)}else return r}function TT(t,e){const n=wT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AT(t,e){let n;switch(e){case Pv:n="Linear";break;case Lv:n="Reinhard";break;case Dv:n="OptimizedCineon";break;case Xd:n="ACESFilmic";break;case Nv:n="AgX";break;case PS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function bT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function CT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Cs(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(t){return t.replace(LT,NT)}const DT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NT(t,e){let n=Ve[e];if(n===void 0){const i=DT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yf(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(UT,IT)}function IT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function OT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jd:e="ENVMAP_BLENDING_MULTIPLY";break;case CS:e="ENVMAP_BLENDING_MIX";break;case RS:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=FT(n),c=OT(n),u=kT(n),d=BT(n),h=zT(n),p=n.isWebGL2?"":bT(n),v=CT(n),x=RT(s),m=r.createProgram();let f,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Cs).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(f=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[p,Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ti?AT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Yf(a),a=Nm(a,n),a=Um(a,n),o=Yf(o),o=Nm(o,n),o=Um(o,n),a=Im(a),o=Im(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+f+a,b=_+g+o,A=Lm(r,r.VERTEX_SHADER,y),T=Lm(r,r.FRAGMENT_SHADER,b);r.attachShader(m,A),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(Y){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(T).trim();let X=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,T);else{const N=Dm(r,A,"vertex"),F=Dm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+N+`
`+F)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(D===""||G==="")&&($=!1);$&&(Y.diagnostics={runnable:X,programLog:re,vertexShader:{log:D,prefix:f},fragmentShader:{log:G,prefix:g}})}r.deleteShader(A),r.deleteShader(T),M=new Al(r,m),E=PT(r,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,ST)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let GT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WT(e),n.set(e,i)),i}}class WT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function jT(t,e,n,i,r,s,a){const o=new Zd,l=new VT,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,z,Y,re){const D=Y.fog,G=re.geometry,X=M.isMeshStandardMaterial?Y.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),N=$&&$.mapping===wc?$.image.height:null,F=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,K=B!==void 0?B.length:0;let Q=0;G.morphAttributes.position!==void 0&&(Q=1),G.morphAttributes.normal!==void 0&&(Q=2),G.morphAttributes.color!==void 0&&(Q=3);let j,Z,de,_e;if(F){const Mt=ni[F];j=Mt.vertexShader,Z=Mt.fragmentShader}else j=M.vertexShader,Z=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const Se=t.getRenderTarget(),Ue=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,Pe=!!M.map,Ye=!!M.matcap,k=!!$,Rt=!!M.aoMap,Te=!!M.lightMap,se=!!M.bumpMap,q=!!M.normalMap,We=!!M.displacementMap,Fe=!!M.emissiveMap,C=!!M.metalnessMap,S=!!M.roughnessMap,O=M.anisotropy>0,ae=M.clearcoat>0,te=M.iridescence>0,oe=M.sheen>0,Me=M.transmission>0,pe=O&&!!M.anisotropyMap,ye=ae&&!!M.clearcoatMap,Le=ae&&!!M.clearcoatNormalMap,He=ae&&!!M.clearcoatRoughnessMap,ee=te&&!!M.iridescenceMap,nt=te&&!!M.iridescenceThicknessMap,je=oe&&!!M.sheenColorMap,Oe=oe&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,me=!!M.specularColorMap,R=!!M.specularIntensityMap,le=Me&&!!M.transmissionMap,Ee=Me&&!!M.thicknessMap,xe=!!M.gradientMap,ne=!!M.alphaMap,L=M.alphaTest>0,ce=!!M.alphaHash,he=!!M.extensions,De=!!G.attributes.uv1,Ce=!!G.attributes.uv2,Ze=!!G.attributes.uv3;let Qe=Ti;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Qe=t.toneMapping),{isWebGL2:u,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:Z,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,instancing:Ue,instancingColor:Ue&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ui,map:Pe,matcap:Ye,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:N,aoMap:Rt,lightMap:Te,bumpMap:se,normalMap:q,displacementMap:h&&We,emissiveMap:Fe,normalMapObjectSpace:q&&M.normalMapType===GS,normalMapTangentSpace:q&&M.normalMapType===qd,metalnessMap:C,roughnessMap:S,anisotropy:O,anisotropyMap:pe,clearcoat:ae,clearcoatMap:ye,clearcoatNormalMap:Le,clearcoatRoughnessMap:He,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:nt,sheen:oe,sheenColorMap:je,sheenRoughnessMap:Oe,specularMap:Ae,specularColorMap:me,specularIntensityMap:R,transmission:Me,transmissionMap:le,thicknessMap:Ee,gradientMap:xe,opaque:M.transparent===!1&&M.blending===Is,alphaMap:ne,alphaTest:L,alphaHash:ce,combine:M.combine,mapUv:Pe&&x(M.map.channel),aoMapUv:Rt&&x(M.aoMap.channel),lightMapUv:Te&&x(M.lightMap.channel),bumpMapUv:se&&x(M.bumpMap.channel),normalMapUv:q&&x(M.normalMap.channel),displacementMapUv:We&&x(M.displacementMap.channel),emissiveMapUv:Fe&&x(M.emissiveMap.channel),metalnessMapUv:C&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:pe&&x(M.anisotropyMap.channel),clearcoatMapUv:ye&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:me&&x(M.specularColorMap.channel),specularIntensityMapUv:R&&x(M.specularIntensityMap.channel),transmissionMapUv:le&&x(M.transmissionMap.channel),thicknessMapUv:Ee&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(q||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ce,vertexUv3s:Ze,pointsUvs:re.isPoints===!0&&!!G.attributes.uv&&(Pe||ne),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)E.push(z),E.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(g(E,M),_(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function g(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const E=v[M.type];let z;if(E){const Y=ni[E];z=oo.clone(Y.uniforms)}else z=M.uniforms;return z}function b(M,E){let z;for(let Y=0,re=c.length;Y<re;Y++){const D=c[Y];if(D.cacheKey===E){z=D,++z.usedTimes;break}}return z===void 0&&(z=new HT(t,E,M,s),c.push(z)),z}function A(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:U}}function XT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function YT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,v,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,h,p,v,x,m){const f=a(d,h,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,x,m){const f=a(d,h,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||YT),i.length>1&&i.sort(h||Om),r.length>1&&r.sort(h||Om)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function qT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new km,t.set(i,[a])):r>=s.length?(a=new km,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Re};break;case"SpotLight":n={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function KT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZT=0;function QT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JT(t,e){const n=new $T,i=KT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,a=new ut,o=new ut;function l(u,d){let h=0,p=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,f=0,g=0,_=0,y=0,b=0,A=0,T=0,U=0,M=0;u.sort(QT);const E=d===!0?Math.PI:1;for(let Y=0,re=u.length;Y<re;Y++){const D=u[Y],G=D.color,X=D.intensity,$=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*X*E,p+=G.g*X*E,v+=G.b*X*E;else if(D.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(D.sh.coefficients[F],X);M++}else if(D.isDirectionalLight){const F=n.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const B=D.shadow,K=i.get(D);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=F,x++}else if(D.isSpotLight){const F=n.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(G).multiplyScalar(X*E),F.distance=$,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,r.spot[f]=F;const B=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,B.updateMatrices(D),D.castShadow&&U++),r.spotLightMatrix[f]=B.matrix,D.castShadow){const K=i.get(D);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=N,A++}f++}else if(D.isRectAreaLight){const F=n.get(D);F.color.copy(G).multiplyScalar(X),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=F,g++}else if(D.isPointLight){const F=n.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*E),F.distance=D.distance,F.decay=D.decay,D.castShadow){const B=D.shadow,K=i.get(D);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=D.shadow.matrix,b++}r.point[m]=F,m++}else if(D.isHemisphereLight){const F=n.get(D);F.skyColor.copy(D.color).multiplyScalar(X*E),F.groundColor.copy(D.groundColor).multiplyScalar(X*E),r.hemi[_]=F,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==g||z.hemiLength!==_||z.numDirectionalShadows!==y||z.numPointShadows!==b||z.numSpotShadows!==A||z.numSpotMaps!==T||z.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+T-U,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,z.directionalLength=x,z.pointLength=m,z.spotLength=f,z.rectAreaLength=g,z.hemiLength=_,z.numDirectionalShadows=y,z.numPointShadows=b,z.numSpotShadows=A,z.numSpotMaps=T,z.numLightProbes=M,r.version=ZT++)}function c(u,d){let h=0,p=0,v=0,x=0,m=0;const f=d.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const y=u[g];if(y.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(y.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Bm(t,e){const n=new JT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function e2(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Bm(t,e),n.set(s,[l])):a>=o.length?(l=new Bm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class t2 extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n2 extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s2(t,e,n){let i=new Qd;const r=new ue,s=new ue,a=new dt,o=new t2({depthPacking:HS}),l=new n2,c={},u=n.maxTextureSize,d={[sr]:jt,[jt]:sr,[En]:En},h=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:i2,fragmentShader:r2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new dn;v.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let f=this.type;this.render=function(A,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(wi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=f!==vi&&this.type===vi,D=f===vi&&this.type!==vi;for(let G=0,X=A.length;G<X;G++){const $=A[G],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||re===!0||D===!0){const K=this.type!==vi?{minFilter:on,magFilter:on}:{};N.map!==null&&N.map.dispose(),N.map=new kn(r.x,r.y,K),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const B=N.getViewportCount();for(let K=0;K<B;K++){const Q=N.getViewport(K);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),Y.viewport(a),N.updateMatrices($,K),i=N.getFrustum(),y(T,U,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===vi&&g(N,U),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,z)};function g(A,T){const U=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,U,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,U,p,x,null)}function _(A,T,U,M){let E=null;const z=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)E=z;else if(E=U.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=E.uuid,re=T.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let G=D[re];G===void 0&&(G=E.clone(),D[re]=G,T.addEventListener("dispose",b)),E=G}if(E.visible=T.visible,E.wireframe=T.wireframe,M===vi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=U}return E}function y(A,T,U,M,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const re=e.update(A),D=A.material;if(Array.isArray(D)){const G=re.groups;for(let X=0,$=G.length;X<$;X++){const N=G[X],F=D[N.materialIndex];if(F&&F.visible){const B=_(A,F,M,E);A.onBeforeShadow(t,A,T,U,re,B,N),t.renderBufferDirect(U,null,re,B,A,N),A.onAfterShadow(t,A,T,U,re,B,N)}}}else if(D.visible){const G=_(A,D,M,E);A.onBeforeShadow(t,A,T,U,re,G,null),t.renderBufferDirect(U,null,re,G,A,null),A.onAfterShadow(t,A,T,U,re,G,null)}}const Y=A.children;for(let re=0,D=Y.length;re<D;re++)y(Y[re],T,U,M,E)}function b(A){A.target.removeEventListener("dispose",b);for(const U in c){const M=c[U],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function a2(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ce=new dt;let he=null;const De=new dt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!L&&(t.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,Ze,Qe,xt,Mt){Mt===!0&&(Ce*=xt,Ze*=xt,Qe*=xt),ce.set(Ce,Ze,Qe,xt),De.equals(ce)===!1&&(t.clearColor(Ce,Ze,Qe,xt),De.copy(ce))},reset:function(){L=!1,he=null,De.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,he=null,De=null;return{setTest:function(Ce){Ce?Ie(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!L&&(t.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case SS:t.depthFunc(t.NEVER);break;case MS:t.depthFunc(t.ALWAYS);break;case ES:t.depthFunc(t.LESS);break;case Zl:t.depthFunc(t.LEQUAL);break;case wS:t.depthFunc(t.EQUAL);break;case TS:t.depthFunc(t.GEQUAL);break;case AS:t.depthFunc(t.GREATER);break;case bS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){De!==Ce&&(t.clearDepth(Ce),De=Ce)},reset:function(){L=!1,ce=null,he=null,De=null}}}function a(){let L=!1,ce=null,he=null,De=null,Ce=null,Ze=null,Qe=null,xt=null,Mt=null;return{setTest:function(et){L||(et?Ie(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!L&&(t.stencilMask(et),ce=et)},setFunc:function(et,At,Jn){(he!==et||De!==At||Ce!==Jn)&&(t.stencilFunc(et,At,Jn),he=et,De=At,Ce=Jn)},setOp:function(et,At,Jn){(Ze!==et||Qe!==At||xt!==Jn)&&(t.stencilOp(et,At,Jn),Ze=et,Qe=At,xt=Jn)},setLocked:function(et){L=et},setClear:function(et){Mt!==et&&(t.clearStencil(et),Mt=et)},reset:function(){L=!1,ce=null,he=null,De=null,Ce=null,Ze=null,Qe=null,xt=null,Mt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,f=!1,g=null,_=null,y=null,b=null,A=null,T=null,U=null,M=new Re(0,0,0),E=0,z=!1,Y=null,re=null,D=null,G=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=F>=2);let K=null,Q={};const j=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),de=new dt().fromArray(j),_e=new dt().fromArray(Z);function Se(L,ce,he,De){const Ce=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(L,Ze),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<he;Qe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(ce+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return Ze}const Ue={};Ue[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),l.setFunc(Zl),Fe(!1),C(Mp),Ie(t.CULL_FACE),q(wi);function Ie(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Pe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ye(L,ce){return p[L]!==ce?(t.bindFramebuffer(L,ce),p[L]=ce,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(L,ce){let he=x,De=!1;if(L)if(he=v.get(ce),he===void 0&&(he=[],v.set(ce,he)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(he.length!==Ce.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Ce.length;Ze<Qe;Ze++)he[Ze]=t.COLOR_ATTACHMENT0+Ze;he.length=Ce.length,De=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,De=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Rt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Te={[yr]:t.FUNC_ADD,[aS]:t.FUNC_SUBTRACT,[oS]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[Tp]=t.MIN,Te[Ap]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Te[Tp]=L.MIN_EXT,Te[Ap]=L.MAX_EXT)}const se={[lS]:t.ZERO,[cS]:t.ONE,[uS]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[gS]:t.SRC_ALPHA_SATURATE,[pS]:t.DST_COLOR,[dS]:t.DST_ALPHA,[fS]:t.ONE_MINUS_SRC_COLOR,[Hf]:t.ONE_MINUS_SRC_ALPHA,[mS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA,[vS]:t.CONSTANT_COLOR,[_S]:t.ONE_MINUS_CONSTANT_COLOR,[xS]:t.CONSTANT_ALPHA,[yS]:t.ONE_MINUS_CONSTANT_ALPHA};function q(L,ce,he,De,Ce,Ze,Qe,xt,Mt,et){if(L===wi){f===!0&&(Pe(t.BLEND),f=!1);return}if(f===!1&&(Ie(t.BLEND),f=!0),L!==sS){if(L!==g||et!==z){if((_!==yr||A!==yr)&&(t.blendEquation(t.FUNC_ADD),_=yr,A=yr),et)switch(L){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ci:t.blendFunc(t.ONE,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ci:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,U=null,M.set(0,0,0),E=0,g=L,z=et}return}Ce=Ce||ce,Ze=Ze||he,Qe=Qe||De,(ce!==_||Ce!==A)&&(t.blendEquationSeparate(Te[ce],Te[Ce]),_=ce,A=Ce),(he!==y||De!==b||Ze!==T||Qe!==U)&&(t.blendFuncSeparate(se[he],se[De],se[Ze],se[Qe]),y=he,b=De,T=Ze,U=Qe),(xt.equals(M)===!1||Mt!==E)&&(t.blendColor(xt.r,xt.g,xt.b,Mt),M.copy(xt),E=Mt),g=L,z=!1}function We(L,ce){L.side===En?Pe(t.CULL_FACE):Ie(t.CULL_FACE);let he=L.side===jt;ce&&(he=!he),Fe(he),L.blending===Is&&L.transparent===!1?q(wi):q(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const De=L.stencilWrite;c.setTest(De),De&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function C(L){L!==iS?(Ie(t.CULL_FACE),L!==re&&(L===Mp?t.cullFace(t.BACK):L===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),re=L}function S(L){L!==D&&(N&&t.lineWidth(L),D=L)}function O(L,ce,he){L?(Ie(t.POLYGON_OFFSET_FILL),(G!==ce||X!==he)&&(t.polygonOffset(ce,he),G=ce,X=he)):Pe(t.POLYGON_OFFSET_FILL)}function ae(L){L?Ie(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+$-1),K!==L&&(t.activeTexture(L),K=L)}function oe(L,ce,he){he===void 0&&(K===null?he=t.TEXTURE0+$-1:he=K);let De=Q[he];De===void 0&&(De={type:void 0,texture:void 0},Q[he]=De),(De.type!==L||De.texture!==ce)&&(K!==he&&(t.activeTexture(he),K=he),t.bindTexture(L,ce||Ue[L]),De.type=L,De.texture=ce)}function Me(){const L=Q[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(L){de.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function le(L){_e.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Ee(L,ce){let he=d.get(ce);he===void 0&&(he=new WeakMap,d.set(ce,he));let De=he.get(L);De===void 0&&(De=t.getUniformBlockIndex(ce,L.name),he.set(L,De))}function xe(L,ce){const De=d.get(ce).get(L);u.get(ce)!==De&&(t.uniformBlockBinding(ce,De,L.__bindingPointIndex),u.set(ce,De))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,Q={},p={},v=new WeakMap,x=[],m=null,f=!1,g=null,_=null,y=null,b=null,A=null,T=null,U=null,M=new Re(0,0,0),E=0,z=!1,Y=null,re=null,D=null,G=null,X=null,de.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Pe,bindFramebuffer:Ye,drawBuffers:k,useProgram:Rt,setBlending:q,setMaterial:We,setFlipSided:Fe,setCullFace:C,setLineWidth:S,setPolygonOffset:O,setScissorTest:ae,activeTexture:te,bindTexture:oe,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:Ae,texImage3D:me,updateUBOMapping:Ee,uniformBlockBinding:xe,texStorage2D:je,texStorage3D:Oe,texSubImage2D:Le,texSubImage3D:He,compressedTexSubImage2D:ee,compressedTexSubImage3D:nt,scissor:R,viewport:le,reset:ne}}function o2(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return p?new OffscreenCanvas(C,S):ao("canvas")}function x(C,S,O,ae){let te=1;if((C.width>ae||C.height>ae)&&(te=ae/Math.max(C.width,C.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=S?ic:Math.floor,Me=oe(te*C.width),pe=oe(te*C.height);d===void 0&&(d=v(Me,pe));const ye=O?v(Me,pe):d;return ye.width=Me,ye.height=pe,ye.getContext("2d").drawImage(C,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+pe+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Xf(C.width)&&Xf(C.height)}function f(C){return o?!1:C.wrapS!==qn||C.wrapT!==qn||C.minFilter!==on&&C.minFilter!==Un}function g(C,S){return C.generateMipmaps&&S&&C.minFilter!==on&&C.minFilter!==Un}function _(C){t.generateMipmap(C)}function y(C,S,O,ae,te=!1){if(o===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=S;if(S===t.RED&&(O===t.FLOAT&&(oe=t.R32F),O===t.HALF_FLOAT&&(oe=t.R16F),O===t.UNSIGNED_BYTE&&(oe=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(oe=t.R8UI),O===t.UNSIGNED_SHORT&&(oe=t.R16UI),O===t.UNSIGNED_INT&&(oe=t.R32UI),O===t.BYTE&&(oe=t.R8I),O===t.SHORT&&(oe=t.R16I),O===t.INT&&(oe=t.R32I)),S===t.RG&&(O===t.FLOAT&&(oe=t.RG32F),O===t.HALF_FLOAT&&(oe=t.RG16F),O===t.UNSIGNED_BYTE&&(oe=t.RG8)),S===t.RGBA){const Me=te?Jl:it.getTransfer(ae);O===t.FLOAT&&(oe=t.RGBA32F),O===t.HALF_FLOAT&&(oe=t.RGBA16F),O===t.UNSIGNED_BYTE&&(oe=Me===at?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(C,S,O){return g(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===on||C===bp||C===cu?t.NEAREST:t.LINEAR}function T(C){const S=C.target;S.removeEventListener("dispose",T),M(S),S.isVideoTexture&&u.delete(S)}function U(C){const S=C.target;S.removeEventListener("dispose",U),z(S)}function M(C){const S=i.get(C);if(S.__webglInit===void 0)return;const O=C.source,ae=h.get(O);if(ae){const te=ae[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(C),Object.keys(ae).length===0&&h.delete(O)}i.remove(C)}function E(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const O=C.source,ae=h.get(O);delete ae[S.__cacheKey],a.memory.textures--}function z(C){const S=C.texture,O=i.get(C),ae=i.get(S);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(O.__webglFramebuffer[te]))for(let oe=0;oe<O.__webglFramebuffer[te].length;oe++)t.deleteFramebuffer(O.__webglFramebuffer[te][oe]);else t.deleteFramebuffer(O.__webglFramebuffer[te]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[te])}else{if(Array.isArray(O.__webglFramebuffer))for(let te=0;te<O.__webglFramebuffer.length;te++)t.deleteFramebuffer(O.__webglFramebuffer[te]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let te=0;te<O.__webglColorRenderbuffer.length;te++)O.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,oe=S.length;te<oe;te++){const Me=i.get(S[te]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(C)}let Y=0;function re(){Y=0}function D(){const C=Y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Y+=1,C}function G(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const O=i.get(C);if(C.isVideoTexture&&We(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,C,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function $(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){de(O,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function N(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){de(O,C,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function F(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){_e(O,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const B={[Fr]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[Vf]:t.MIRRORED_REPEAT},K={[on]:t.NEAREST,[bp]:t.NEAREST_MIPMAP_NEAREST,[cu]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[LS]:t.LINEAR_MIPMAP_NEAREST,[ro]:t.LINEAR_MIPMAP_LINEAR},Q={[VS]:t.NEVER,[$S]:t.ALWAYS,[WS]:t.LESS,[Vv]:t.LEQUAL,[jS]:t.EQUAL,[qS]:t.GEQUAL,[XS]:t.GREATER,[YS]:t.NOTEQUAL};function j(C,S,O){if(O?(t.texParameteri(C,t.TEXTURE_WRAP_S,B[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==qn||S.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==on&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===on||S.minFilter!==cu&&S.minFilter!==ro||S.type===qi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===li&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Z(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const ae=S.source;let te=h.get(ae);te===void 0&&(te={},h.set(ae,te));const oe=G(S);if(oe!==C.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[oe].usedTimes++;const Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&E(S)),C.__cacheKey=oe,C.__webglTexture=te[oe].texture}return O}function de(C,S,O){let ae=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=t.TEXTURE_3D);const te=Z(C,S),oe=S.source;n.bindTexture(ae,C.__webglTexture,t.TEXTURE0+O);const Me=i.get(oe);if(oe.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const pe=it.getPrimaries(it.workingColorSpace),ye=S.colorSpace===Lt?null:it.getPrimaries(S.colorSpace),Le=S.colorSpace===Lt||pe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const He=f(S)&&m(S.image)===!1;let ee=x(S.image,He,!1,r.maxTextureSize);ee=Fe(S,ee);const nt=m(ee)||o,je=s.convert(S.format,S.colorSpace);let Oe=s.convert(S.type),Ae=y(S.internalFormat,je,Oe,S.colorSpace,S.isVideoTexture);j(ae,S,nt);let me;const R=S.mipmaps,le=o&&S.isVideoTexture!==!0&&Ae!==Hv,Ee=Me.__version===void 0||te===!0,xe=b(S,ee,nt);if(S.isDepthTexture)Ae=t.DEPTH_COMPONENT,o?S.type===qi?Ae=t.DEPTH_COMPONENT32F:S.type===Yi?Ae=t.DEPTH_COMPONENT24:S.type===Cr?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:S.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Rr&&Ae===t.DEPTH_COMPONENT&&S.type!==Yd&&S.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Yi,Oe=s.convert(S.type)),S.format===Xs&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,S.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Cr,Oe=s.convert(S.type))),Ee&&(le?n.texStorage2D(t.TEXTURE_2D,1,Ae,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ee.width,ee.height,0,je,Oe,null));else if(S.isDataTexture)if(R.length>0&&nt){le&&Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Ae,R[0].width,R[0].height);for(let ne=0,L=R.length;ne<L;ne++)me=R[ne],le?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,je,Oe,me.data):n.texImage2D(t.TEXTURE_2D,ne,Ae,me.width,me.height,0,je,Oe,me.data);S.generateMipmaps=!1}else le?(Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Ae,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,je,Oe,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ee.width,ee.height,0,je,Oe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ae,R[0].width,R[0].height,ee.depth);for(let ne=0,L=R.length;ne<L;ne++)me=R[ne],S.format!==$n?je!==null?le?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ee.depth,je,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ae,me.width,me.height,ee.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ee.depth,je,Oe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ae,me.width,me.height,ee.depth,0,je,Oe,me.data)}else{le&&Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Ae,R[0].width,R[0].height);for(let ne=0,L=R.length;ne<L;ne++)me=R[ne],S.format!==$n?je!==null?le?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,je,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,je,Oe,me.data):n.texImage2D(t.TEXTURE_2D,ne,Ae,me.width,me.height,0,je,Oe,me.data)}else if(S.isDataArrayTexture)le?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ae,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,je,Oe,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,je,Oe,ee.data);else if(S.isData3DTexture)le?(Ee&&n.texStorage3D(t.TEXTURE_3D,xe,Ae,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,je,Oe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,je,Oe,ee.data);else if(S.isFramebufferTexture){if(Ee)if(le)n.texStorage2D(t.TEXTURE_2D,xe,Ae,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let ce=0;ce<xe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ae,ne,L,0,je,Oe,null),ne>>=1,L>>=1}}else if(R.length>0&&nt){le&&Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Ae,R[0].width,R[0].height);for(let ne=0,L=R.length;ne<L;ne++)me=R[ne],le?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,je,Oe,me):n.texImage2D(t.TEXTURE_2D,ne,Ae,je,Oe,me);S.generateMipmaps=!1}else le?(Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Ae,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Oe,ee)):n.texImage2D(t.TEXTURE_2D,0,Ae,je,Oe,ee);g(S,nt)&&_(ae),Me.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function _e(C,S,O){if(S.image.length!==6)return;const ae=Z(C,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const oe=i.get(te);if(te.version!==oe.__version||ae===!0){n.activeTexture(t.TEXTURE0+O);const Me=it.getPrimaries(it.workingColorSpace),pe=S.colorSpace===Lt?null:it.getPrimaries(S.colorSpace),ye=S.colorSpace===Lt||Me===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Le&&!He?ee[ne]=x(S.image[ne],!1,!0,r.maxCubemapSize):ee[ne]=He?S.image[ne].image:S.image[ne],ee[ne]=Fe(S,ee[ne]);const nt=ee[0],je=m(nt)||o,Oe=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),me=y(S.internalFormat,Oe,Ae,S.colorSpace),R=o&&S.isVideoTexture!==!0,le=oe.__version===void 0||ae===!0;let Ee=b(S,nt,je);j(t.TEXTURE_CUBE_MAP,S,je);let xe;if(Le){R&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,me,nt.width,nt.height);for(let ne=0;ne<6;ne++){xe=ee[ne].mipmaps;for(let L=0;L<xe.length;L++){const ce=xe[L];S.format!==$n?Oe!==null?R?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ce.width,ce.height,Oe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ce.width,ce.height,Oe,Ae,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,me,ce.width,ce.height,0,Oe,Ae,ce.data)}}}else{xe=S.mipmaps,R&&le&&(xe.length>0&&Ee++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,me,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(He){R?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Oe,Ae,ee[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,me,ee[ne].width,ee[ne].height,0,Oe,Ae,ee[ne].data);for(let L=0;L<xe.length;L++){const he=xe[L].image[ne].image;R?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,he.width,he.height,Oe,Ae,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,me,he.width,he.height,0,Oe,Ae,he.data)}}else{R?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,Ae,ee[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,me,Oe,Ae,ee[ne]);for(let L=0;L<xe.length;L++){const ce=xe[L];R?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Oe,Ae,ce.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,me,Oe,Ae,ce.image[ne])}}}g(S,je)&&_(t.TEXTURE_CUBE_MAP),oe.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Se(C,S,O,ae,te,oe){const Me=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),ye=y(O.internalFormat,Me,pe,O.colorSpace);if(!i.get(S).__hasExternalTextures){const He=Math.max(1,S.width>>oe),ee=Math.max(1,S.height>>oe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,oe,ye,He,ee,S.depth,0,Me,pe,null):n.texImage2D(te,oe,ye,He,ee,0,Me,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),q(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,te,i.get(O).__webglTexture,0,se(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,te,i.get(O).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(C,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let ae=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||q(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===qi?ae=t.DEPTH_COMPONENT32F:te.type===Yi&&(ae=t.DEPTH_COMPONENT24));const oe=se(S);q(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,ae,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ae,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const ae=se(S);O&&q(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,S.width,S.height):q(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ae=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ae.length;te++){const oe=ae[te],Me=s.convert(oe.format,oe.colorSpace),pe=s.convert(oe.type),ye=y(oe.internalFormat,Me,pe,oe.colorSpace),Le=se(S);O&&q(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ye,S.width,S.height):q(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ae=i.get(S.depthTexture).__webglTexture,te=se(S);if(S.depthTexture.format===Rr)q(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Xs)q(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[ae],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(C,S,O){const ae=i.get(C);S!==void 0&&Se(ae.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Pe(C)}function k(C){const S=C.texture,O=i.get(C),ae=i.get(S);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=S.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Me=m(C)||o;if(te){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)O.__webglFramebuffer[pe][ye]=t.createFramebuffer()}else O.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)O.__webglFramebuffer[pe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const pe=C.texture;for(let ye=0,Le=pe.length;ye<Le;ye++){const He=i.get(pe[ye]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&q(C)===!1){const pe=oe?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Le=pe[ye];O.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);const He=s.convert(Le.format,Le.colorSpace),ee=s.convert(Le.type),nt=y(Le.internalFormat,He,ee,Le.colorSpace,C.isXRRenderTarget===!0),je=se(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,nt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),j(t.TEXTURE_CUBE_MAP,S,Me);for(let pe=0;pe<6;pe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Se(O.__webglFramebuffer[pe][ye],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Se(O.__webglFramebuffer[pe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(S,Me)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const pe=C.texture;for(let ye=0,Le=pe.length;ye<Le;ye++){const He=pe[ye],ee=i.get(He);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),j(t.TEXTURE_2D,He,Me),Se(O.__webglFramebuffer,C,He,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),g(He,Me)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ae.__webglTexture),j(pe,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Se(O.__webglFramebuffer[ye],C,S,t.COLOR_ATTACHMENT0,pe,ye);else Se(O.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,pe,0);g(S,Me)&&_(pe),n.unbindTexture()}C.depthBuffer&&Pe(C)}function Rt(C){const S=m(C)||o,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,te=O.length;ae<te;ae++){const oe=O[ae];if(g(oe,S)){const Me=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(oe).__webglTexture;n.bindTexture(Me,pe),_(Me),n.unbindTexture()}}}function Te(C){if(o&&C.samples>0&&q(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,ae=C.height;let te=t.COLOR_BUFFER_BIT;const oe=[],Me=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),ye=C.isWebGLMultipleRenderTargets===!0;if(ye)for(let Le=0;Le<S.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){oe.push(t.COLOR_ATTACHMENT0+Le),C.depthBuffer&&oe.push(Me);const He=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(He===!1&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]),He===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),ye){const ee=i.get(S[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,O,ae,0,0,O,ae,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<S.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]);const He=i.get(S[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function se(C){return Math.min(r.maxSamples,C.samples)}function q(C){const S=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Fe(C,S){const O=C.colorSpace,ae=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jf||O!==ui&&O!==Lt&&(it.getTransfer(O)===at?o===!1?e.has("EXT_sRGB")===!0&&ae===$n?(C.format=jf,C.minFilter=Un,C.generateMipmaps=!1):S=jv.sRGBToLinear(S):(ae!==$n||te!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=D,this.resetTextureUnits=re,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=q}function l2(t,e,n){const i=n.isWebGL2;function r(s,a=Lt){let o;const l=it.getTransfer(a);if(s===Ai)return t.UNSIGNED_BYTE;if(s===Fv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ov)return t.UNSIGNED_SHORT_5_5_5_1;if(s===DS)return t.BYTE;if(s===NS)return t.SHORT;if(s===Yd)return t.UNSIGNED_SHORT;if(s===Iv)return t.INT;if(s===Yi)return t.UNSIGNED_INT;if(s===qi)return t.FLOAT;if(s===li)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===US)return t.ALPHA;if(s===$n)return t.RGBA;if(s===IS)return t.LUMINANCE;if(s===FS)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Xs)return t.DEPTH_STENCIL;if(s===jf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===OS)return t.RED;if(s===kv)return t.RED_INTEGER;if(s===kS)return t.RG;if(s===Bv)return t.RG_INTEGER;if(s===zv)return t.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===uu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===uu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cp||s===Rp||s===Pp||s===Lp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dp||s===Np)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Dp)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Np)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Up||s===Ip||s===Fp||s===Op||s===kp||s===Bp||s===zp||s===Hp||s===Gp||s===Vp||s===Wp||s===jp||s===Xp||s===Yp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Up)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ip)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Op)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yp)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===qp||s===$p)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===pu)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$p)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===BS||s===Kp||s===Zp||s===Qp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===pu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Kp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class c2 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u2={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class f2 extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const x=n.getContextAttributes();let m=null,f=null;const g=[],_=[],y=new ue;let b=null;const A=new pn;A.layers.enable(1),A.viewport=new dt;const T=new pn;T.layers.enable(2),T.viewport=new dt;const U=[A,T],M=new c2;M.layers.enable(1),M.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=g[j];return Z===void 0&&(Z=new Ou,g[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=g[j];return Z===void 0&&(Z=new Ou,g[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=g[j];return Z===void 0&&(Z=new Ou,g[j]=Z),Z.getHandSpace()};function Y(j){const Z=_.indexOf(j.inputSource);if(Z===-1)return;const de=g[Z];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",D);for(let j=0;j<g.length;j++){const Z=_[j];Z!==null&&(_[j]=null,g[j].disconnect(Z))}E=null,z=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new kn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,de=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?Xs:Rr,de=x.stencil?Cr:Yi);const Se={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new kn(h.textureWidth,h.textureHeight,{format:$n,type:Ai,depthTexture:new t_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ue=e.properties.get(f);Ue.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(j){for(let Z=0;Z<j.removed.length;Z++){const de=j.removed[Z],_e=_.indexOf(de);_e>=0&&(_[_e]=null,g[_e].disconnect(de))}for(let Z=0;Z<j.added.length;Z++){const de=j.added[Z];let _e=_.indexOf(de);if(_e===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=_.length){_.push(de),_e=Ue;break}else if(_[Ue]===null){_[Ue]=de,_e=Ue;break}if(_e===-1)break}const Se=g[_e];Se&&Se.connect(de)}}const G=new P,X=new P;function $(j,Z,de){G.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const _e=G.distanceTo(X),Se=Z.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Ie=Se[14]/(Se[10]-1),Pe=Se[14]/(Se[10]+1),Ye=(Se[9]+1)/Se[5],k=(Se[9]-1)/Se[5],Rt=(Se[8]-1)/Se[0],Te=(Ue[8]+1)/Ue[0],se=Ie*Rt,q=Ie*Te,We=_e/(-Rt+Te),Fe=We*-Rt;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(We),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const C=Ie+We,S=Pe+We,O=se-Fe,ae=q+(_e-Fe),te=Ye*Pe/S*C,oe=k*Pe/S*C;j.projectionMatrix.makePerspective(O,ae,te,oe,C,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function N(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;M.near=T.near=A.near=j.near,M.far=T.far=A.far=j.far,(E!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,z=M.far);const Z=j.parent,de=M.cameras;N(M,Z);for(let _e=0;_e<de.length;_e++)N(de[_e],Z);de.length===2?$(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),F(j,M,Z)};function F(j,Z,de){de===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=so*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let B=null;function K(j,Z){if(u=Z.getViewerPose(c||a),v=Z,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let _e=!1;de.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let Se=0;Se<de.length;Se++){const Ue=de[Se];let Ie=null;if(p!==null)Ie=p.getViewport(Ue);else{const Ye=d.getViewSubImage(h,Ue);Ie=Ye.viewport,Se===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Pe=U[Se];Pe===void 0&&(Pe=new pn,Pe.layers.enable(Se),Pe.viewport=new dt,U[Se]=Pe),Pe.matrix.fromArray(Ue.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ue.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Se===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(Pe)}}for(let de=0;de<g.length;de++){const _e=_[de],Se=g[de];_e!==null&&Se!==void 0&&Se.update(_e,Z,c||a)}B&&B(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Q=new e_;Q.setAnimationLoop(K),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function d2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h2(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const _=d();g.__bindingPointIndex=_;const y=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=y.length;A<T;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,E=U.length;M<E;M++){const z=U[M];if(p(z,A,M,b)===!0){const Y=z.__offset,re=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let G=0;G<re.length;G++){const X=re[G],$=x(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,Y+D,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,b){const A=g.value,T=_+"_"+y;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const U=b[T];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return b[T]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function v(g){const _=g.uniforms;let y=0;const b=16;for(let T=0,U=_.length;T<U;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,z=M.length;E<z;E++){const Y=M[E],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,G=re.length;D<G;D++){const X=re[D],$=x(X),N=y%b;N!==0&&b-N<$.boundary&&(y+=b-N),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=$.storage}}}const A=y%b;return A>0&&(y+=b-A),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class eh{constructor(e={}){const{canvas:n=uM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const _=this;let y=!1,b=0,A=0,T=null,U=-1,M=null;const E=new dt,z=new dt;let Y=null;const re=new Re(0);let D=0,G=n.width,X=n.height,$=1,N=null,F=null;const B=new dt(0,0,G,X),K=new dt(0,0,G,X);let Q=!1;const j=new Qd;let Z=!1,de=!1,_e=null;const Se=new ut,Ue=new ue,Ie=new P,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return T===null?$:1}let k=i;function Rt(w,I){for(let V=0;V<w.length;V++){const W=w[V],H=n.getContext(W,I);if(H!==null)return H}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ce,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),k=Rt(I,w),k===null)throw Rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,se,q,We,Fe,C,S,O,ae,te,oe,Me,pe,ye,Le,He,ee,nt,je,Oe,Ae,me,R,le;function Ee(){Te=new Ew(k),se=new vw(k,Te,e),Te.init(se),me=new l2(k,Te,se),q=new a2(k,Te,se),We=new Aw(k),Fe=new XT,C=new o2(k,Te,q,Fe,se,me,We),S=new xw(_),O=new Mw(_),ae=new UM(k,se),R=new mw(k,Te,ae,se),te=new ww(k,ae,We,R),oe=new Pw(k,te,ae,We),je=new Rw(k,se,C),He=new _w(Fe),Me=new jT(_,S,O,Te,se,R,He),pe=new d2(_,Fe),ye=new qT,Le=new e2(Te,se),nt=new pw(_,S,O,q,oe,h,l),ee=new s2(_,oe,se),le=new h2(k,We,se,q),Oe=new gw(k,Te,We,se),Ae=new Tw(k,Te,We,se),We.programs=Me.programs,_.capabilities=se,_.extensions=Te,_.properties=Fe,_.renderLists=ye,_.shadowMap=ee,_.state=q,_.info=We}Ee();const xe=new f2(_,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(G,X,!1))},this.getSize=function(w){return w.set(G,X)},this.setSize=function(w,I,V=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,X=I,n.width=Math.floor(w*$),n.height=Math.floor(I*$),V===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(G*$,X*$).floor()},this.setDrawingBufferSize=function(w,I,V){G=w,X=I,$=V,n.width=Math.floor(w*V),n.height=Math.floor(I*V),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,I,V,W){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,I,V,W),q.viewport(E.copy(B).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,I,V,W){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,V,W),q.scissor(z.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){q.setScissorTest(Q=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(w=!0,I=!0,V=!0){let W=0;if(w){let H=!1;if(T!==null){const ge=T.texture.format;H=ge===zv||ge===Bv||ge===kv}if(H){const ge=T.texture.type,we=ge===Ai||ge===Yi||ge===Yd||ge===Cr||ge===Fv||ge===Ov,Ne=nt.getClearColor(),ke=nt.getClearAlpha(),Xe=Ne.r,ze=Ne.g,Ge=Ne.b;we?(p[0]=Xe,p[1]=ze,p[2]=Ge,p[3]=ke,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=Xe,v[1]=ze,v[2]=Ge,v[3]=ke,k.clearBufferiv(k.COLOR,0,v))}else W|=k.COLOR_BUFFER_BIT}I&&(W|=k.DEPTH_BUFFER_BIT),V&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ye.dispose(),Le.dispose(),Fe.dispose(),S.dispose(),O.dispose(),oe.dispose(),R.dispose(),le.dispose(),Me.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Mt),xe.removeEventListener("sessionend",et),_e&&(_e.dispose(),_e=null),At.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=We.autoReset,I=ee.enabled,V=ee.autoUpdate,W=ee.needsUpdate,H=ee.type;Ee(),We.autoReset=w,ee.enabled=I,ee.autoUpdate=V,ee.needsUpdate=W,ee.type=H}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const I=w.target;I.removeEventListener("dispose",he),De(I)}function De(w){Ce(w),Fe.remove(w)}function Ce(w){const I=Fe.get(w).programs;I!==void 0&&(I.forEach(function(V){Me.releaseProgram(V)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,V,W,H,ge){I===null&&(I=Pe);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ne=E_(w,I,V,W,H);q.setMaterial(W,we);let ke=V.index,Xe=1;if(W.wireframe===!0){if(ke=te.getWireframeAttribute(V),ke===void 0)return;Xe=2}const ze=V.drawRange,Ge=V.attributes.position;let Et=ze.start*Xe,xn=(ze.start+ze.count)*Xe;ge!==null&&(Et=Math.max(Et,ge.start*Xe),xn=Math.min(xn,(ge.start+ge.count)*Xe)),ke!==null?(Et=Math.max(Et,0),xn=Math.min(xn,ke.count)):Ge!=null&&(Et=Math.max(Et,0),xn=Math.min(xn,Ge.count));const Ft=xn-Et;if(Ft<0||Ft===1/0)return;R.setup(H,W,Ne,V,ke);let fi,mt=Oe;if(ke!==null&&(fi=ae.get(ke),mt=Ae,mt.setIndex(fi)),H.isMesh)W.wireframe===!0?(q.setLineWidth(W.wireframeLinewidth*Ye()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(H.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),q.setLineWidth(qe*Ye()),H.isLineSegments?mt.setMode(k.LINES):H.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else H.isPoints?mt.setMode(k.POINTS):H.isSprite&&mt.setMode(k.TRIANGLES);if(H.isBatchedMesh)mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)mt.renderInstances(Et,Ft,H.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nc=Math.min(V.instanceCount,qe);mt.renderInstances(Et,Ft,Nc)}else mt.render(Et,Ft)};function Ze(w,I,V){w.transparent===!0&&w.side===En&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,_o(w,I,V),w.side=sr,w.needsUpdate=!0,_o(w,I,V),w.side=En):_o(w,I,V)}this.compile=function(w,I,V=null){V===null&&(V=w),m=Le.get(V),m.init(),g.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==V&&w.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return w.traverse(function(H){const ge=H.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Ne=ge[we];Ze(Ne,V,H),W.add(Ne)}else Ze(ge,V,H),W.add(ge)}),g.pop(),m=null,W},this.compileAsync=function(w,I,V=null){const W=this.compile(w,I,V);return new Promise(H=>{function ge(){if(W.forEach(function(we){Fe.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){H(w);return}setTimeout(ge,10)}Te.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Qe=null;function xt(w){Qe&&Qe(w)}function Mt(){At.stop()}function et(){At.start()}const At=new e_;At.setAnimationLoop(xt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(w){Qe=w,xe.setAnimationLoop(w),w===null?At.stop():At.start()},xe.addEventListener("sessionstart",Mt),xe.addEventListener("sessionend",et),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(I),I=xe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,I,T),m=Le.get(w,g.length),m.init(),g.push(m),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(Se),de=this.localClippingEnabled,Z=He.init(this.clippingPlanes,de),x=ye.get(w,f.length),x.init(),f.push(x),Jn(w,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,F),this.info.render.frame++,Z===!0&&He.beginShadows();const V=m.state.shadowsArray;if(ee.render(V,w,I),Z===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(x,w),m.setupLights(_._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let H=0,ge=W.length;H<ge;H++){const we=W[H];ah(x,w,we,we.viewport)}}else ah(x,w,I);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,I),R.resetDefaultState(),U=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Jn(w,I,V,W){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){W&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const we=oe.update(w),Ne=w.material;Ne.visible&&x.push(w,we,Ne,V,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const we=oe.update(w),Ne=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Ne)){const ke=we.groups;for(let Xe=0,ze=ke.length;Xe<ze;Xe++){const Ge=ke[Xe],Et=Ne[Ge.materialIndex];Et&&Et.visible&&x.push(w,we,Et,V,Ie.z,Ge)}}else Ne.visible&&x.push(w,we,Ne,V,Ie.z,null)}}const ge=w.children;for(let we=0,Ne=ge.length;we<Ne;we++)Jn(ge[we],I,V,W)}function ah(w,I,V,W){const H=w.opaque,ge=w.transmissive,we=w.transparent;m.setupLightsView(V),Z===!0&&He.setGlobalState(_.clippingPlanes,V),ge.length>0&&M_(H,ge,I,V),W&&q.viewport(E.copy(W)),H.length>0&&vo(H,I,V),ge.length>0&&vo(ge,I,V),we.length>0&&vo(we,I,V),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function M_(w,I,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ge=se.isWebGL2;_e===null&&(_e=new kn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?li:Ai,minFilter:ro,samples:ge?4:0})),_.getDrawingBufferSize(Ue),ge?_e.setSize(Ue.x,Ue.y):_e.setSize(ic(Ue.x),ic(Ue.y));const we=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(re),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=Ti,vo(w,V,W),C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e);let ke=!1;for(let Xe=0,ze=I.length;Xe<ze;Xe++){const Ge=I[Xe],Et=Ge.object,xn=Ge.geometry,Ft=Ge.material,fi=Ge.group;if(Ft.side===En&&Et.layers.test(W.layers)){const mt=Ft.side;Ft.side=jt,Ft.needsUpdate=!0,oh(Et,V,W,xn,Ft,fi),Ft.side=mt,Ft.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e)),_.setRenderTarget(we),_.setClearColor(re,D),_.toneMapping=Ne}function vo(w,I,V){const W=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ge=w.length;H<ge;H++){const we=w[H],Ne=we.object,ke=we.geometry,Xe=W===null?we.material:W,ze=we.group;Ne.layers.test(V.layers)&&oh(Ne,I,V,ke,Xe,ze)}}function oh(w,I,V,W,H,ge){w.onBeforeRender(_,I,V,W,H,ge),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(_,I,V,W,w,ge),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,_.renderBufferDirect(V,I,W,H,w,ge),H.side=sr,H.needsUpdate=!0,_.renderBufferDirect(V,I,W,H,w,ge),H.side=En):_.renderBufferDirect(V,I,W,H,w,ge),w.onAfterRender(_,I,V,W,H,ge)}function _o(w,I,V){I.isScene!==!0&&(I=Pe);const W=Fe.get(w),H=m.state.lights,ge=m.state.shadowsArray,we=H.state.version,Ne=Me.getParameters(w,H.state,ge,I,V),ke=Me.getProgramCacheKey(Ne);let Xe=W.programs;W.environment=w.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||W.environment),Xe===void 0&&(w.addEventListener("dispose",he),Xe=new Map,W.programs=Xe);let ze=Xe.get(ke);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===we)return ch(w,Ne),ze}else Ne.uniforms=Me.getUniforms(w),w.onBuild(V,Ne,_),w.onBeforeCompile(Ne,_),ze=Me.acquireProgram(Ne,ke),Xe.set(ke,ze),W.uniforms=Ne.uniforms;const Ge=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=He.uniform),ch(w,Ne),W.needsLights=T_(w),W.lightsStateVersion=we,W.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function lh(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Al.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function ch(w,I){const V=Fe.get(w);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function E_(w,I,V,W,H){I.isScene!==!0&&(I=Pe),C.resetTextureUnits();const ge=I.fog,we=W.isMeshStandardMaterial?I.environment:null,Ne=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ui,ke=(W.isMeshStandardMaterial?O:S).get(W.envMap||we),Xe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,xn=!!V.morphAttributes.color;let Ft=Ti;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ft=_.toneMapping);const fi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=fi!==void 0?fi.length:0,qe=Fe.get(W),Nc=m.state.lights;if(Z===!0&&(de===!0||w!==M)){const Rn=w===M&&W.id===U;He.setState(W,w,Rn)}let yt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Nc.state.version||qe.outputColorSpace!==Ne||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==ke||W.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==He.numPlanes||qe.numIntersection!==He.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==ze||qe.morphTargets!==Ge||qe.morphNormals!==Et||qe.morphColors!==xn||qe.toneMapping!==Ft||se.isWebGL2===!0&&qe.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,qe.__version=W.version);let fr=qe.currentProgram;yt===!0&&(fr=_o(W,I,H));let uh=!1,ra=!1,Uc=!1;const qt=fr.getUniforms(),dr=qe.uniforms;if(q.useProgram(fr.program)&&(uh=!0,ra=!0,Uc=!0),W.id!==U&&(U=W.id,ra=!0),uh||M!==w){qt.setValue(k,"projectionMatrix",w.projectionMatrix),qt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Rn=qt.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,Ie.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&qt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&qt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ra=!0,Uc=!0)}if(H.isSkinnedMesh){qt.setOptional(k,H,"bindMatrix"),qt.setOptional(k,H,"bindMatrixInverse");const Rn=H.skeleton;Rn&&(se.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),qt.setValue(k,"boneTexture",Rn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(qt.setOptional(k,H,"batchingTexture"),qt.setValue(k,"batchingTexture",H._matricesTexture,C));const Ic=V.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0&&se.isWebGL2===!0)&&je.update(H,V,fr),(ra||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,qt.setValue(k,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(dr.envMap.value=ke,dr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ra&&(qt.setValue(k,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&w_(dr,Uc),ge&&W.fog===!0&&pe.refreshFogUniforms(dr,ge),pe.refreshMaterialUniforms(dr,W,$,X,_e),Al.upload(k,lh(qe),dr,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Al.upload(k,lh(qe),dr,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&qt.setValue(k,"center",H.center),qt.setValue(k,"modelViewMatrix",H.modelViewMatrix),qt.setValue(k,"normalMatrix",H.normalMatrix),qt.setValue(k,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rn=W.uniformsGroups;for(let Fc=0,A_=Rn.length;Fc<A_;Fc++)if(se.isWebGL2){const fh=Rn[Fc];le.update(fh,fr),le.bind(fh,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function w_(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function T_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,V){Fe.get(w.texture).__webglTexture=I,Fe.get(w.depthTexture).__webglTexture=V;const W=Fe.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const V=Fe.get(w);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,V=0){T=w,b=I,A=V;let W=!0,H=null,ge=!1,we=!1;if(w){const ke=Fe.get(w);ke.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?C.setupRenderTarget(w):ke.__hasExternalTextures&&C.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const ze=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?H=ze[I][V]:H=ze[I],ge=!0):se.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?H=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[V]:H=ze,E.copy(w.viewport),z.copy(w.scissor),Y=w.scissorTest}else E.copy(B).multiplyScalar($).floor(),z.copy(K).multiplyScalar($).floor(),Y=Q;if(q.bindFramebuffer(k.FRAMEBUFFER,H)&&se.drawBuffers&&W&&q.drawBuffers(w,H),q.viewport(E),q.scissor(z),q.setScissorTest(Y),ge){const ke=Fe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,ke.__webglTexture,V)}else if(we){const ke=Fe.get(w.texture),Xe=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,V||0,Xe)}U=-1},this.readRenderTargetPixels=function(w,I,V,W,H,ge,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){q.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const ke=w.texture,Xe=ke.format,ze=ke.type;if(Xe!==$n&&me.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===li&&(Te.has("EXT_color_buffer_half_float")||se.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ze!==Ai&&me.convert(ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===qi&&(se.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-W&&V>=0&&V<=w.height-H&&k.readPixels(I,V,W,H,me.convert(Xe),me.convert(ze),ge)}finally{const ke=T!==null?Fe.get(T).__webglFramebuffer:null;q.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,I,V=0){const W=Math.pow(2,-V),H=Math.floor(I.image.width*W),ge=Math.floor(I.image.height*W);C.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,w.x,w.y,H,ge),q.unbindTexture()},this.copyTextureToTexture=function(w,I,V,W=0){const H=I.image.width,ge=I.image.height,we=me.convert(V.format),Ne=me.convert(V.type);C.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,H,ge,we,Ne,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,we,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,we,Ne,I.image),W===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(w,I,V,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,ke=me.convert(W.format),Xe=me.convert(W.type);let ze;if(W.isData3DTexture)C.setTexture3D(W,0),ze=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)C.setTexture2DArray(W,0),ze=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=k.getParameter(k.UNPACK_ROW_LENGTH),Et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ft=k.getParameter(k.UNPACK_SKIP_ROWS),fi=k.getParameter(k.UNPACK_SKIP_IMAGES),mt=V.isCompressedTexture?V.mipmaps[H]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(ze,H,I.x,I.y,I.z,ge,we,Ne,ke,Xe,mt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ze,H,I.x,I.y,I.z,ge,we,Ne,ke,mt.data)):k.texSubImage3D(ze,H,I.x,I.y,I.z,ge,we,Ne,ke,Xe,mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ge),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ft),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),H===0&&W.generateMipmaps&&k.generateMipmap(ze),q.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,q.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$d?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Pr:Gv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?tt:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class p2 extends eh{}p2.prototype.isWebGL1Renderer=!0;class o_ extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class m2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Wf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new P;class rc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ri(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ri(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ri(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ri(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new zt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class th extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const va=new P,cs=new P,us=new P,fs=new ue,_a=new ue,l_=new ut,rl=new P,xa=new P,sl=new P,zm=new ue,ku=new ue,Hm=new ue;class c_ extends Tt{constructor(e=new th){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new dn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new m2(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new rc(i,3,0,!1)),ls.setAttribute("uv",new rc(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new ue(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),l_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;al(rl.set(-.5,-.5,0),us,a,cs,r,s),al(xa.set(.5,-.5,0),us,a,cs,r,s),al(sl.set(.5,.5,0),us,a,cs,r,s),zm.set(0,0),ku.set(1,0),Hm.set(1,1);let o=e.ray.intersectTriangle(rl,xa,sl,!1,va);if(o===null&&(al(xa.set(-.5,.5,0),us,a,cs,r,s),ku.set(0,1),o=e.ray.intersectTriangle(rl,sl,xa,!1,va),o===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||n.push({distance:l,point:va.clone(),uv:In.getInterpolation(va,rl,xa,sl,zm,ku,Hm,new ue),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function al(t,e,n,i,r,s){fs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_a.x=s*fs.x-r*fs.y,_a.y=r*fs.x+s*fs.y):_a.copy(fs),t.copy(e),t.x+=_a.x,t.y+=_a.y,t.applyMatrix4(l_)}class Gm extends zt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new ut,Vm=new ut,ol=[],Wm=new Gr,g2=new ut,ya=new ht,Sa=new Zs;class u_ extends ht{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Gm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,g2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ds),Wm.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Wm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ds),Sa.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Sa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),Vm.multiplyMatrices(i,ds),ya.matrixWorld=Vm,ya.raycast(e,ol);for(let a=0,o=ol.length;a<o;a++){const l=ol[a];l.instanceId=s,l.object=this,n.push(l)}ol.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Gm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class v2 extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new ut,qf=new Ac,ll=new Zs,cl=new P;class f_ extends Tt{constructor(e=new dn,n=new v2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;jm.copy(r).invert(),qf.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,x=p;v<x;v++){const m=c.getX(v);cl.fromBufferAttribute(d,m),Xm(cl,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=h,x=p;v<x;v++)cl.fromBufferAttribute(d,v),Xm(cl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xm(t,e,n,i,r,s,a){const o=qf.distanceSqToPoint(t);if(o<n){const l=new P;qf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Yt extends cn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nh extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new P,y=new P,b=new P;for(let A=0;A<n.length;A+=3)p(n[A+0],_),p(n[A+1],y),p(n[A+2],b),l(_,y,b,g)}function l(g,_,y,b){const A=b+1,T=[];for(let U=0;U<=A;U++){T[U]=[];const M=g.clone().lerp(y,U/A),E=_.clone().lerp(y,U/A),z=A-U;for(let Y=0;Y<=z;Y++)Y===0&&U===A?T[U][Y]=M:T[U][Y]=M.clone().lerp(E,Y/z)}for(let U=0;U<A;U++)for(let M=0;M<2*(A-U)-1;M++){const E=Math.floor(M/2);M%2===0?(h(T[U][E+1]),h(T[U+1][E]),h(T[U][E])):(h(T[U][E+1]),h(T[U+1][E+1]),h(T[U+1][E]))}}function c(g){const _=new P;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const g=new P;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,b=f(g)/Math.PI+.5;a.push(y,1-b)}v(),d()}function d(){for(let g=0;g<a.length;g+=6){const _=a[g+0],y=a[g+2],b=a[g+4],A=Math.max(_,y,b),T=Math.min(_,y,b);A>.9&&T<.1&&(_<.2&&(a[g+0]+=1),y<.2&&(a[g+2]+=1),b<.2&&(a[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new P,_=new P,y=new P,b=new P,A=new ue,T=new ue,U=new ue;for(let M=0,E=0;M<s.length;M+=9,E+=6){g.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),A.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),b.copy(g).add(_).add(y).divideScalar(3);const z=m(b);x(A,E+0,g,z),x(T,E+2,_,z),x(U,E+4,y,z)}}function x(g,_,y,b){b<0&&g.x===1&&(a[_]=g.x-1),y.x===0&&y.z===0&&(a[_]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.vertices,e.indices,e.radius,e.details)}}class go extends nh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new go(e.radius,e.detail)}}class Js extends dn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,p=new P,v=new ue;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,u.push(v.x,v.y)}d+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const g=f+m,_=g,y=g+i+1,b=g+i+2,A=g+1;o.push(_,y,A),o.push(y,b,A)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Di extends dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let y=0;f===0&&a===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const A=b/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+y,1-_),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const _=u[f][g+1],y=u[f][g],b=u[f+1][g],A=u[f+1][g+1];(f!==0||a>0)&&p.push(_,y,A),(f!==i-1||l<Math.PI)&&p.push(y,b,A)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _2 extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ea extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sc extends ur{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ym={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class d_{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const x2=new d_;class ih{constructor(e){this.manager=e!==void 0?e:x2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ih.DEFAULT_MATERIAL_NAME="__DEFAULT";class y2 extends ih{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ym.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ao("img");function l(){u(),Ym.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ar extends ih{constructor(e){super(e)}load(e,n,i,r){const s=new cn,a=new y2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Dc extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class S2 extends Dc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Bu=new ut,qm=new P,$m=new P;class h_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Km=new ut,Ma=new P,zu=new P;class M2 extends h_{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ma),zu.copy(i.position),zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(zu),i.updateMatrixWorld(),r.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Km.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class E2 extends Dc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new M2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class w2 extends h_{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends Dc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new w2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T2 extends Dc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class p_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return(typeof performance>"u"?Date:performance).now()}class A2{constructor(e,n,i=0,r=1/0){this.ray=new Ac(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return $f(e,this,i,n),i.sort(Jm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)$f(e[r],this,i,n);return i.sort(Jm),i}}function Jm(t,e){return t.distance-e.distance}function $f(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)$f(r[s],e,n,!0)}}class e0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const t0={type:"change"},Hu={type:"start"},n0={type:"end"},ul=new Ac,i0=new Gi,b2=Math.cos(70*po.DEG2RAD);class m_ extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Le),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(t0),i.update(),s=r.NONE},this.update=function(){const R=new P,le=new Or().setFromUnitVectors(e.up,new P(0,1,0)),Ee=le.clone().invert(),xe=new P,ne=new Or,L=new P,ce=2*Math.PI;return function(De=null){const Ce=i.object.position;R.copy(Ce).sub(i.target),R.applyQuaternion(le),o.setFromVector3(R),i.autoRotate&&s===r.NONE&&Y(E(De)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ze=i.minAzimuthAngle,Qe=i.maxAzimuthAngle;isFinite(Ze)&&isFinite(Qe)&&(Ze<-Math.PI?Ze+=ce:Ze>Math.PI&&(Ze-=ce),Qe<-Math.PI?Qe+=ce:Qe>Math.PI&&(Qe-=ce),Ze<=Qe?o.theta=Math.max(Ze,Math.min(Qe,o.theta)):o.theta=o.theta>(Ze+Qe)/2?Math.max(Ze,o.theta):Math.min(Qe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?o.radius=B(o.radius):o.radius=B(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(Ee),Ce.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let xt=!1;if(i.zoomToCursor&&A){let Mt=null;if(i.object.isPerspectiveCamera){const et=R.length();Mt=B(et*c);const At=et-Mt;i.object.position.addScaledVector(y,At),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new P(b.x,b.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),xt=!0;const At=new P(b.x,b.y,0);At.unproject(i.object),i.object.position.sub(At).add(et),i.object.updateMatrixWorld(),Mt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Mt).add(i.object.position):(ul.origin.copy(i.object.position),ul.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ul.direction))<b2?e.lookAt(i.target):(i0.setFromNormalAndCoplanarPoint(i.object.up,i.target),ul.intersectPlane(i0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),xt=!0);return c=1,A=!1,xt||xe.distanceToSquared(i.object.position)>a||8*(1-ne.dot(i.object.quaternion))>a||L.distanceToSquared(i.target)>0?(i.dispatchEvent(t0),xe.copy(i.object.position),ne.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",nt),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",O),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new e0,l=new e0;let c=1;const u=new P,d=new ue,h=new ue,p=new ue,v=new ue,x=new ue,m=new ue,f=new ue,g=new ue,_=new ue,y=new P,b=new ue;let A=!1;const T=[],U={};let M=!1;function E(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function z(R){const le=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*le)}function Y(R){l.theta-=R}function re(R){l.phi-=R}const D=function(){const R=new P;return function(Ee,xe){R.setFromMatrixColumn(xe,0),R.multiplyScalar(-Ee),u.add(R)}}(),G=function(){const R=new P;return function(Ee,xe){i.screenSpacePanning===!0?R.setFromMatrixColumn(xe,1):(R.setFromMatrixColumn(xe,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Ee),u.add(R)}}(),X=function(){const R=new P;return function(Ee,xe){const ne=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;R.copy(L).sub(i.target);let ce=R.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),D(2*Ee*ce/ne.clientHeight,i.object.matrix),G(2*xe*ce/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(Ee*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),G(xe*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(R,le){if(!i.zoomToCursor)return;A=!0;const Ee=i.domElement.getBoundingClientRect(),xe=R-Ee.left,ne=le-Ee.top,L=Ee.width,ce=Ee.height;b.x=xe/L*2-1,b.y=-(ne/ce)*2+1,y.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function K(R){d.set(R.clientX,R.clientY)}function Q(R){F(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function j(R){v.set(R.clientX,R.clientY)}function Z(R){h.set(R.clientX,R.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;Y(2*Math.PI*p.x/le.clientHeight),re(2*Math.PI*p.y/le.clientHeight),d.copy(h),i.update()}function de(R){g.set(R.clientX,R.clientY),_.subVectors(g,f),_.y>0?$(z(_.y)):_.y<0&&N(z(_.y)),f.copy(g),i.update()}function _e(R){x.set(R.clientX,R.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),X(m.x,m.y),v.copy(x),i.update()}function Se(R){F(R.clientX,R.clientY),R.deltaY<0?N(z(R.deltaY)):R.deltaY>0&&$(z(R.deltaY)),i.update()}function Ue(R){let le=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),le=!0;break}le&&(R.preventDefault(),i.update())}function Ie(R){if(T.length===1)d.set(R.pageX,R.pageY);else{const le=me(R),Ee=.5*(R.pageX+le.x),xe=.5*(R.pageY+le.y);d.set(Ee,xe)}}function Pe(R){if(T.length===1)v.set(R.pageX,R.pageY);else{const le=me(R),Ee=.5*(R.pageX+le.x),xe=.5*(R.pageY+le.y);v.set(Ee,xe)}}function Ye(R){const le=me(R),Ee=R.pageX-le.x,xe=R.pageY-le.y,ne=Math.sqrt(Ee*Ee+xe*xe);f.set(0,ne)}function k(R){i.enableZoom&&Ye(R),i.enablePan&&Pe(R)}function Rt(R){i.enableZoom&&Ye(R),i.enableRotate&&Ie(R)}function Te(R){if(T.length==1)h.set(R.pageX,R.pageY);else{const Ee=me(R),xe=.5*(R.pageX+Ee.x),ne=.5*(R.pageY+Ee.y);h.set(xe,ne)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;Y(2*Math.PI*p.x/le.clientHeight),re(2*Math.PI*p.y/le.clientHeight),d.copy(h)}function se(R){if(T.length===1)x.set(R.pageX,R.pageY);else{const le=me(R),Ee=.5*(R.pageX+le.x),xe=.5*(R.pageY+le.y);x.set(Ee,xe)}m.subVectors(x,v).multiplyScalar(i.panSpeed),X(m.x,m.y),v.copy(x)}function q(R){const le=me(R),Ee=R.pageX-le.x,xe=R.pageY-le.y,ne=Math.sqrt(Ee*Ee+xe*xe);g.set(0,ne),_.set(0,Math.pow(g.y/f.y,i.zoomSpeed)),$(_.y),f.copy(g);const L=(R.pageX+le.x)*.5,ce=(R.pageY+le.y)*.5;F(L,ce)}function We(R){i.enableZoom&&q(R),i.enablePan&&se(R)}function Fe(R){i.enableZoom&&q(R),i.enableRotate&&Te(R)}function C(R){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",O)),je(R),R.pointerType==="touch"?He(R):ae(R))}function S(R){i.enabled!==!1&&(R.pointerType==="touch"?ee(R):te(R))}function O(R){Oe(R),T.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",O)),i.dispatchEvent(n0),s=r.NONE}function ae(R){let le;switch(R.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Wr.DOLLY:if(i.enableZoom===!1)return;Q(R),s=r.DOLLY;break;case Wr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;j(R),s=r.PAN}else{if(i.enableRotate===!1)return;K(R),s=r.ROTATE}break;case Wr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;K(R),s=r.ROTATE}else{if(i.enablePan===!1)return;j(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hu)}function te(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(R);break;case r.DOLLY:if(i.enableZoom===!1)return;de(R);break;case r.PAN:if(i.enablePan===!1)return;_e(R);break}}function oe(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(Hu),Se(Me(R)),i.dispatchEvent(n0))}function Me(R){const le=R.deltaMode,Ee={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(le){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return R.ctrlKey&&!M&&(Ee.deltaY*=10),Ee}function pe(R){R.key==="Control"&&(M=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(R){R.key==="Control"&&(M=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Le(R){i.enabled===!1||i.enablePan===!1||Ue(R)}function He(R){switch(Ae(R),T.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;Ie(R),s=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;Pe(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(R),s=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Rt(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hu)}function ee(R){switch(Ae(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;se(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(R),i.update();break;default:s=r.NONE}}function nt(R){i.enabled!==!1&&R.preventDefault()}function je(R){T.push(R.pointerId)}function Oe(R){delete U[R.pointerId];for(let le=0;le<T.length;le++)if(T[le]==R.pointerId){T.splice(le,1);return}}function Ae(R){let le=U[R.pointerId];le===void 0&&(le=new ue,U[R.pointerId]=le),le.set(R.pageX,R.pageY)}function me(R){const le=R.pointerId===T[0]?T[1]:T[0];return U[le]}i.domElement.addEventListener("contextmenu",nt),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",O),i.domElement.addEventListener("wheel",oe,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}function C2(t){return new pt({uniforms:{map:{value:t},time:{value:0},brightness:{value:1}},vertexShader:`
      uniform float time;
      varying vec2 vUv;
      varying vec3 vNormal;

      float vhash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = vhash(i);
        float b = vhash(i + vec2(1.0, 0.0));
        float c = vhash(i + vec2(0.0, 1.0));
        float d = vhash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      float vfbm(vec2 p) {
        float v = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 4; i++) {
          v += amp * vnoise(p);
          p *= 2.0;
          amp *= 0.5;
        }
        return v;
      }

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        // 动态表面变形：fbm 驱动轻微顶点位移（模拟等离子翻滚）
        float n1 = vfbm(uv * 5.0 + time * 0.04);
        float n2 = vfbm(uv * 8.0 - time * 0.03 + 3.14);
        float displacement = (n1 * 0.6 + n2 * 0.4) * 0.5;

        vec3 newPosition = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D map;
      uniform float time;
      uniform float brightness;
      varying vec2 vUv;
      varying vec3 vNormal;

      // 基于哈希的值噪声 + fbm
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 5; i++) {
          v += amp * noise(p);
          p *= 2.0;
          amp *= 0.5;
        }
        return v;
      }

       void main() {
         // 沿表面缓慢流动的扰动
         vec2 flow = vec2(
           fbm(vUv * 6.0 + vec2(time * 0.03, 0.0)),
           fbm(vUv * 6.0 + vec2(0.0, time * 0.025) + 7.3)
         );

         vec2 uv2 = vUv + (flow - 0.5) * 0.012;

         vec3 base = texture2D(map, uv2).rgb;

         // 翻滚的明亮颗粒
         float n = fbm(vUv * 10.0 + flow * 2.0 + time * 0.06);
         float granule = pow(n, 2.0);

          // 米粒间较暗区域 + 颗粒高光
           vec3 darkCol = base * 0.75;
           vec3 brightCol = base * 1.2 + vec3(0.16, 0.08, 0.0) * granule;
          vec3 col = mix(darkCol, brightCol, smoothstep(0.3, 0.75, n));

          // 低频黑子：成片略暗的活动区，缓慢漂移（模拟太阳黑子随表面流动）
          float spotN = fbm(vUv * 4.0 + vec2(11.0, 5.0) + time * 0.008);
          float spot = smoothstep(0.58, 0.7, spotN);
          col *= mix(1.0, 0.7, spot);

         // 临边昏暗：球面边缘自然变暗（而非亮环），增强立体感
         float ndv = clamp(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
         float limb = mix(0.5, 1.0, pow(ndv, 0.55));
         col *= limb;

          // 整体轻微闪动
          float flicker = 0.96 + 0.04 * sin(time * 2.0 + n * 10.0);

          // 耀斑亮斑：随机位置的高亮脉动区域
          float flare1 = fbm(vUv * 3.0 + vec2(time * 0.02, time * 0.015));
          float flare2 = fbm(vUv * 2.5 + vec2(-time * 0.018, time * 0.012) + 5.0);
          float flareMask1 = smoothstep(0.62, 0.72, flare1);
          float flareMask2 = smoothstep(0.65, 0.75, flare2);
          float flarePulse1 = 0.7 + 0.3 * sin(time * 1.5 + flare1 * 6.0);
          float flarePulse2 = 0.6 + 0.4 * sin(time * 1.2 + flare2 * 5.0 + 2.0);
          col += vec3(0.25, 0.12, 0.0) * flareMask1 * flarePulse1;
          col += vec3(0.18, 0.08, 0.0) * flareMask2 * flarePulse2;

          col *= brightness * flicker;

         gl_FragColor = vec4(col, 1.0);
       }
    `})}function R2(t){const n=new Di(300,128,128),r=new ar(t).load("./textures/sun.jpg");r.colorSpace=tt,r.anisotropy=8;const s=C2(r),a=new ht(n,s);a.position.set(0,0,0),a.rotation.z=.126,a.userData.surfaceMaterial=s;const o=new Di(300*1.1,64,64),l=new pt({vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      void main() {
        float fres = pow(clamp(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 3.0);
        vec3 col = mix(vec3(1.0, 0.86, 0.55), vec3(1.0, 0.55, 0.2), fres);
        gl_FragColor = vec4(col, fres * 0.55);
      }
    `,side:jt,blending:ci,transparent:!0,depthWrite:!1}),c=new ht(o,l);a.add(c);const u=P2(300);a.add(u);const d=L2(300);return a.add(d),a.userData.particles=d,a.userData.radius=300,a}function P2(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){const c=(l-128)/128,u=(o-128)/128,d=Math.sqrt(c*c+u*u),h=Math.exp(-d*5.2)*(1-Math.min(1,d)),p=(o*256+l)*4;i.data[p]=255,i.data[p+1]=205,i.data[p+2]=140,i.data[p+3]=Math.max(0,Math.min(255,h*255*.55))}n.putImageData(i,0,0);const r=new Yt(e);r.colorSpace=tt;const s=new th({map:r,blending:ci,transparent:!0,depthWrite:!1}),a=new c_(s);return a.scale.setScalar(t*2.6),a}function L2(t){const n=new dn,i=new Float32Array(600*3),r=new Float32Array(600*3),s=new Float32Array(600*3);for(let l=0;l<600;l++){const c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),d=Math.random()*Math.PI*2;r[l*3]=c,r[l*3+1]=u,r[l*3+2]=d;const h=t*(1.01+Math.random()*.05);i[l*3]=h*Math.sin(u)*Math.cos(c),i[l*3+1]=h*Math.sin(u)*Math.sin(c),i[l*3+2]=h*Math.cos(u),s[l*3]=1,s[l*3+1]=.6+Math.random()*.3,s[l*3+2]=.2+Math.random()*.2}n.setAttribute("position",new zt(i,3)),n.setAttribute("aSeed",new zt(r,3)),n.setAttribute("color",new zt(s,3));const a=new pt({uniforms:{time:{value:0},radius:{value:t}},vertexShader:`
      attribute vec3 aSeed;
      uniform float time;
      uniform float radius;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = color;
        float life = fract(time * 0.15 + aSeed.z / 6.2831);
        // 向外喷射：距离随生命周期增大，接近末尾淡出
        float dist = radius * (1.02 + life * 0.55);
        vec3 dir = vec3(
          sin(aSeed.y) * cos(aSeed.x),
          sin(aSeed.y) * sin(aSeed.x),
          cos(aSeed.y)
        );
        vec3 pos = dir * dist;
        vAlpha = sin(life * 3.1415) * 0.8;
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = (18.0 / -mv.z) * (1.0 + life);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float a = (1.0 - d * 2.0) * vAlpha;
        gl_FragColor = vec4(vColor, a);
      }
    `,transparent:!0,blending:ci,depthWrite:!1,vertexColors:!0}),o=new f_(n,a);return o.userData.material=a,o}const D2=[{name:"水星",radius:3.8,distance:230,color:11184810,colorHex:"#b8b0a8",type:"类地行星",orbitSpeed:4.1,rotationSpeed:.004,realDiameter:"4,879公里",realDistance:"5,790万公里",orbitPeriod:"88天",rotationPeriod:"58.6天",temperature:"430°C / -170°C",moons:"0",atmosphere:"几乎没有",tilt:.01,fact:"离太阳最近，昼夜温差超过 600°C，表面布满陨石坑，几乎没有大气保温。"},{name:"金星",radius:9.5,distance:450,color:14917204,colorHex:"#e6a85c",type:"类地行星",atmoColor:16764006,orbitSpeed:1.6,rotationSpeed:.002,realDiameter:"12,104公里",realDistance:"10,820万公里",orbitPeriod:"225天",rotationPeriod:"243天（逆向）",temperature:"462°C",moons:"0",atmosphere:"二氧化碳, 氮气",tilt:177.3,fact:"浓厚二氧化碳大气造成失控温室效应，是太阳系最热的行星，比水星还热。"},{name:"地球",radius:10,distance:600,color:2241535,colorHex:"#3a86ff",type:"类地行星",atmoColor:5217279,orbitSpeed:1,rotationSpeed:.01,realDiameter:"12,756公里",realDistance:"14,960万公里",orbitPeriod:"365天",rotationPeriod:"24小时",temperature:"15°C",moons:"1",atmosphere:"氮气, 氧气",tilt:23.5,hasMoon:!0,fact:"目前已知唯一孕育生命的星球，71% 表面被液态水覆盖，拥有保护性的磁场与大气层。"},{name:"火星",radius:5.3,distance:900,color:16724736,colorHex:"#e2562f",type:"类地行星",atmoColor:16738893,orbitSpeed:.53,rotationSpeed:.009,realDiameter:"6,792公里",realDistance:"22,790万公里",orbitPeriod:"687天",rotationPeriod:"24.6小时",temperature:"-63°C",moons:"2",atmosphere:"二氧化碳, 氮气",tilt:25.2,fact:"红色源于表面氧化铁（铁锈）。拥有太阳系最高的火山奥林匹斯山，约 22 公里高。"},{name:"木星",radius:112,distance:1500,color:16755336,colorHex:"#e0a878",type:"气态巨行星",atmoColor:16765600,orbitSpeed:.084,rotationSpeed:.04,realDiameter:"142,984公里",realDistance:"77,850万公里",orbitPeriod:"11.9年",rotationPeriod:"9.9小时",temperature:"-145°C",moons:"79",atmosphere:"氢气, 氦气",tilt:3.1,hasRings:!0,ringOpacity:.1,fact:"太阳系最大行星，质量超其他行星总和的两倍。大红斑是已持续数百年的巨型风暴。",moonsList:[{name:"木卫一（伊奥）",radiusRatio:.0286,distanceRatio:1.5,orbitSpeed:4.5,rotationSpeed:.002},{name:"木卫二（欧罗巴）",radiusRatio:.0245,distanceRatio:1.9,orbitSpeed:3.2,rotationSpeed:.0015},{name:"木卫三（盖尼米德）",radiusRatio:.0413,distanceRatio:2.4,orbitSpeed:2.1,rotationSpeed:.001},{name:"木卫四（卡里斯托）",radiusRatio:.0382,distanceRatio:3,orbitSpeed:1.5,rotationSpeed:8e-4}]},{name:"土星",radius:94.5,distance:2200,color:16766720,colorHex:"#e8c969",type:"气态巨行星",atmoColor:16770736,orbitSpeed:.033,rotationSpeed:.038,realDiameter:"120,536公里",realDistance:"143,350万公里",orbitPeriod:"29.5年",rotationPeriod:"10.7小时",temperature:"-178°C",moons:"82",atmosphere:"氢气, 氦气",tilt:26.7,hasRings:!0,ringOpacity:.7,ringColors:[13421772,14540253,15658734,16777215],fact:"以壮观的行星环闻名，环主要由冰粒与岩石碎块组成，宽度可达数十万公里却极薄。",moonsList:[{name:"土卫六（泰坦）",radiusRatio:.0404,distanceRatio:2,orbitSpeed:1.8,rotationSpeed:.001},{name:"土卫二（恩克拉多斯）",radiusRatio:.0039,distanceRatio:1.5,orbitSpeed:3.5,rotationSpeed:.003}]},{name:"天王星",radius:40,distance:3500,color:10079487,colorHex:"#9fd8ff",type:"冰巨星",atmoColor:8380671,orbitSpeed:.012,rotationSpeed:.03,realDiameter:"51,118公里",realDistance:"287,250万公里",orbitPeriod:"84年",rotationPeriod:"17.2小时",temperature:"-224°C",moons:"27",atmosphere:"氢气, 氦气, 甲烷",tilt:97.8,hasRings:!0,fact:'几乎"躺着"自转，自转轴倾斜近 98°。大气中的甲烷吸收红光，使其呈现青蓝色。'},{name:"海王星",radius:38.8,distance:4800,color:3368703,colorHex:"#3f6bff",type:"冰巨星",atmoColor:5209087,orbitSpeed:.006,rotationSpeed:.032,realDiameter:"49,528公里",realDistance:"449,510万公里",orbitPeriod:"165年",rotationPeriod:"16.1小时",temperature:"-218°C",moons:"14",atmosphere:"氢气, 氦气, 甲烷",tilt:28.3,fact:"太阳系最远的行星，风速可超 2000 km/h，是已知风暴最猛烈的世界。"},{name:"冥王星",radius:1.9,distance:6e3,color:11171686,colorHex:"#b07d68",type:"矮行星",orbitSpeed:.004,rotationSpeed:.005,realDiameter:"2,376公里",realDistance:"590,638万公里",orbitPeriod:"248年",rotationPeriod:"6.4天",temperature:"-232°C",moons:"5",atmosphere:"氮, 甲烷",tilt:122.5,fact:'2006 年被重新归类为矮行星。表面有氮冰，心形区域"汤博区"最为著名。'}],N2={name:"太阳",colorHex:"#ffb347",type:"恒星 · G型主序星",realDiameter:"1,392,700公里",realDistance:"0 (太阳系中心)",orbitPeriod:"2.5亿年 (绕银河系中心)",rotationPeriod:"25.4天",temperature:"表面: 5,500°C, 核心: 15,000,000°C",moons:"8 (行星)",atmosphere:"氢气, 氦气",fact:"占太阳系总质量约 99.86%，核心通过核聚变每秒将约 6 亿吨氢转化为氦。"},r0={name:"月球",colorHex:"#cfcfcf",type:"卫星 · 地球的天然卫星",realDiameter:"3,474公里",realDistance:"38.4万公里 (与地球)",orbitPeriod:"27.3天",rotationPeriod:"27.3天 (潮汐锁定)",temperature:"100°C / -173°C",moons:"0",atmosphere:"几乎没有",fact:"始终以同一面朝向地球（潮汐锁定）。潮汐力主要由它引起，并缓慢拉长地球的一天。"},s0={"木卫一（伊奥）":{name:"木卫一（伊奥）",colorHex:"#d4a030",type:"卫星 · 伽利略卫星",realDiameter:"3,643公里",realDistance:"421,700公里 (与木星)",orbitPeriod:"1.77天",rotationPeriod:"1.77天 (潮汐锁定)",temperature:"-130°C / 1,730°C",moons:"0",atmosphere:"二氧化硫",fact:"太阳系中火山活动最剧烈的天体，拥有数百座活火山，表面被硫磺覆盖呈现黄橙色。"},"木卫二（欧罗巴）":{name:"木卫二（欧罗巴）",colorHex:"#c8d8e8",type:"卫星 · 伽利略卫星",realDiameter:"3,122公里",realDistance:"671,034公里 (与木星)",orbitPeriod:"3.55天",rotationPeriod:"3.55天 (潮汐锁定)",temperature:"-160°C",moons:"0",atmosphere:"几乎没有",fact:"冰壳下可能存在全球性液态海洋，是太阳系中最可能存在地外生命的天体之一。"},"木卫三（盖尼米德）":{name:"木卫三（盖尼米德）",colorHex:"#a09880",type:"卫星 · 伽利略卫星",realDiameter:"5,268公里",realDistance:"1,070,412公里 (与木星)",orbitPeriod:"7.15天",rotationPeriod:"7.15天 (潮汐锁定)",temperature:"-163°C",moons:"0",atmosphere:"几乎没有",fact:"太阳系最大的卫星，比水星还大。拥有自己的磁场，表面有明亮的冰原和暗色陨石坑。"},"木卫四（卡里斯托）":{name:"木卫四（卡里斯托）",colorHex:"#605848",type:"卫星 · 伽利略卫星",realDiameter:"4,821公里",realDistance:"1,882,709公里 (与木星)",orbitPeriod:"16.69天",rotationPeriod:"16.69天 (潮汐锁定)",temperature:"-139°C",moons:"0",atmosphere:"几乎没有",fact:"表面布满陨石坑，是太阳系中陨石坑密度最高的天体之一。远离木星辐射带，相对安全。"}},a0={"土卫六（泰坦）":{name:"土卫六（泰坦）",colorHex:"#c89040",type:"卫星 · 土星最大卫星",realDiameter:"5,150公里",realDistance:"1,221,870公里 (与土星)",orbitPeriod:"15.95天",rotationPeriod:"15.95天 (潮汐锁定)",temperature:"-179°C",moons:"0",atmosphere:"氮气, 甲烷",fact:"太阳系中唯一拥有浓厚大气层的卫星，表面有甲烷湖泊和河流，是地球外最像地球的天体。"},"土卫二（恩克拉多斯）":{name:"土卫二（恩克拉多斯）",colorHex:"#d8e0e8",type:"卫星 · 土星卫星",realDiameter:"504公里",realDistance:"237,948公里 (与土星)",orbitPeriod:"1.37天",rotationPeriod:"1.37天 (潮汐锁定)",temperature:"-200°C",moons:"0",atmosphere:"水蒸气, 二氧化氮",fact:"南极地区喷射出冰羽流，地下海洋可能孕育生命。表面覆盖着几乎纯净的冰，反射率极高。"}};function ta(t,e){const n=document.createElement("canvas");return n.width=t,n.height=e,n}function na(t){return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function U2(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=t-i,a=e-r,o=s*s*(3-2*s),l=a*a*(3-2*a),c=(m,f)=>{const g=m*374761393+f*668265263|0;return n(((g^g>>13)&2147483647)%1e4)*2-1},u=c(i,r),d=c(i+1,r),h=c(i,r+1),p=c(i+1,r+1),v=u+(d-u)*o,x=h+(p-h)*o;return v+(x-v)*l}function Vt(t,e,n,i){let r=0,s=.5,a=1;for(let o=0;o<n;o++)r+=s*U2(t*a,e*a,i),s*=.5,a*=2;return r}function Be(t,e,n){return t+(e-t)*n}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function I2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(42);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*8,l*8,6,r),u=Vt(o*12+10,l*12+10,4,r),d=Vt(o*20+20,l*20+20,3,r);let h=210+c*40,p=170+c*30-u*25,v=60+d*30;const x=tn(-.1,.1,u);h=Be(80,h,x),p=Be(50,p,x),v=Be(30,v,x);const m=tn(.35,.55,d);h=Be(h,240,m*.6),p=Be(p,235,m*.6),v=Be(v,220,m*.5);const f=tn(.2,.35,Vt(o*30+50,l*30+50,2,r));h=Be(h,180,f*.7),p=Be(p,40,f*.7),v=Be(v,20,f*.7);const g=(s*t+a)*4;i.data[g]=Nt(h,0,255),i.data[g+1]=Nt(p,0,255),i.data[g+2]=Nt(v,0,255),i.data[g+3]=255}return n.putImageData(i,0,0),new Yt(e)}function F2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(77);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*6,l*6,5,r),u=Vt(o*15+5,l*15+5,4,r),d=Math.abs(Math.sin((o*25+c*3)*Math.PI)),h=Math.abs(Math.sin((l*20+u*2.5)*Math.PI)),p=1-Math.min(d,h),v=tn(.85,.95,p);let x=215+c*20,m=220+c*15,f=235+c*10;const g=tn(-.2,.3,u);x=Be(195,x,g),m=Be(200,m,g),f=Be(215,f,g),x=Be(x,160,v*.8),m=Be(m,70,v*.8),f=Be(f,40,v*.7);const _=(s*t+a)*4;i.data[_]=Nt(x,0,255),i.data[_+1]=Nt(m,0,255),i.data[_+2]=Nt(f,0,255),i.data[_+3]=255}return n.putImageData(i,0,0),new Yt(e)}function O2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(123);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*7,l*7,6,r),u=Vt(o*14+20,l*14+20,5,r),d=Vt(o*25+40,l*25+40,3,r);let h=145+c*30,p=135+c*25,v=120+c*20;const x=tn(.15,.4,u);h=Be(h,185,x*.5),p=Be(p,175,x*.5),v=Be(v,160,x*.4);const m=tn(0,.2,-u);h=Be(h,95,m*.5),p=Be(p,85,m*.5),v=Be(v,75,m*.4);const f=tn(.4,.6,d);h=Be(h,200,f*.3),p=Be(p,195,f*.3),v=Be(v,185,f*.3);const g=(s*t+a)*4;i.data[g]=Nt(h,0,255),i.data[g+1]=Nt(p,0,255),i.data[g+2]=Nt(v,0,255),i.data[g+3]=255}return n.putImageData(i,0,0),new Yt(e)}function k2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(256);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*8,l*8,6,r),u=Vt(o*20+30,l*20+30,5,r),d=Vt(o*40+60,l*40+60,3,r);let h=65+c*25,p=58+c*20,v=50+c*18;const x=tn(-.15,.15,u);h=Be(h,50,x*.3),p=Be(p,44,x*.3),v=Be(v,38,x*.3);const m=tn(.3,.5,d);h=Be(h,200,m*.5),p=Be(p,195,m*.5),v=Be(v,185,m*.4);const f=tn(.5,.7,Vt(o*10+80,l*10+80,2,r));h=Be(h,180,f*.3),p=Be(p,185,f*.3),v=Be(v,195,f*.3);const g=(s*t+a)*4;i.data[g]=Nt(h,0,255),i.data[g+1]=Nt(p,0,255),i.data[g+2]=Nt(v,0,255),i.data[g+3]=255}return n.putImageData(i,0,0),new Yt(e)}function B2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(333);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*5,l*5,5,r),u=Vt(o*8+15,l*8+15,4,r);let d=210+c*30,h=150+c*25+u*15,p=50+u*30;const v=Math.abs(l-.5)*2,x=tn(.3,.6,v);d=Be(d,180,x*.3),h=Be(h,120,x*.3),p=Be(p,40,x*.3);const m=tn(0,.5,c);d=Be(d,230,m*.2),h=Be(h,175,m*.2),p=Be(p,70,m*.15);const f=(s*t+a)*4;i.data[f]=Nt(d,0,255),i.data[f+1]=Nt(h,0,255),i.data[f+2]=Nt(p,0,255),i.data[f+3]=255}return n.putImageData(i,0,0),new Yt(e)}function z2(t=512){const e=ta(t,t),n=e.getContext("2d"),i=n.createImageData(t,t),r=na(512);for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=a/t,l=s/t,c=Vt(o*6,l*6,5,r),u=Vt(o*12+10,l*12+10,4,r);let d=235+c*15,h=238+c*12,p=242+c*10;const v=tn(-.2,.2,u);d=Be(215,d,v),h=Be(218,h,v),p=Be(225,p,v);const x=Math.abs(Math.sin((o*15+c*2)*Math.PI)),m=tn(.9,.98,x)*tn(.7,1,l);d=Be(d,140,m*.5),h=Be(h,170,m*.5),p=Be(p,220,m*.6);const f=(s*t+a)*4;i.data[f]=Nt(d,0,255),i.data[f+1]=Nt(h,0,255),i.data[f+2]=Nt(p,0,255),i.data[f+3]=255}return n.putImageData(i,0,0),new Yt(e)}function tn(t,e,n){const i=Nt((n-t)/(e-t),0,1);return i*i*(3-2*i)}const H2={"木卫一（伊奥）":I2,"木卫二（欧罗巴）":F2,"木卫三（盖尼米德）":O2,"木卫四（卡里斯托）":k2,"土卫六（泰坦）":B2,"土卫二（恩克拉多斯）":z2,月球:null},o0="./";function l0(t,e,n={}){const{name:i="月球",radiusRatio:r=.27,distanceRatio:s=2,orbitSpeed:a=2,rotationSpeed:o=3e-4,emissive:l=2236962,emissiveIntensity:c=.12}=n,u=t*r,d=t*s,h=new Di(u,64,32),p=H2[i];let v;if(p){const _=p(512);_.colorSpace=tt,_.anisotropy=8,v=new sc({map:_,shininess:6,emissive:new Re(l),emissiveIntensity:c,specular:3355443});const y=G2(_,512);y&&(v.normalMap=y,v.normalScale=new ue(1.2,1.2))}else{const y=new ar(e).load(o0+"textures/moon.jpg");y.colorSpace=tt,y.anisotropy=8,v=new sc({map:y,shininess:6,emissive:new Re(l),emissiveIntensity:c,specular:3355443});const b=new Image;b.onload=()=>{const A=g_(b,1024);A.colorSpace=Lt,A.anisotropy=8,v.normalMap=A,v.normalScale=new ue(1.4,1.4),v.needsUpdate=!0},b.src=o0+"textures/moon.jpg"}const x=new ht(h,v);x.position.x=d;const m=new Js(d,d+.3,64),f=new Cc({color:4473924,side:En,transparent:!0,opacity:.2}),g=new ht(m,f);return g.rotation.x=Math.PI/2,{moon:x,moonOrbit:g,moonConfig:{name:i,orbitSpeed:a,rotationSpeed:o,orbitDistance:d}}}function G2(t,e){if(!t.image)return null;const n=t.image;return g_(n,e)}function g_(t,e){const n=e,i=Math.round(t.height/t.width*e),r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0,n,i);const a=s.getImageData(0,0,n,i).data,o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d"),c=l.createImageData(n,i),u=(p,v)=>{const x=(p+n)%n,f=((v+i)%i*n+x)*4;return(a[f]+a[f+1]+a[f+2])/3},d=2.2;for(let p=0;p<i;p++)for(let v=0;v<n;v++){const x=u(v+1,p)-u(v-1,p),m=u(v,p+1)-u(v,p-1);let f=-x*d,g=-m*d,_=255;const y=Math.hypot(f,g,_);f/=y,g/=y,_/=y;const b=(p*n+v)*4;c.data[b]=(f*.5+.5)*255,c.data[b+1]=(g*.5+.5)*255,c.data[b+2]=(_*.5+.5)*255,c.data[b+3]=255}l.putImageData(c,0,0);const h=new Yt(o);return h.colorSpace=Lt,h.anisotropy=8,h}const ac="./";function V2(t,e){const n=[];return D2.forEach(i=>{const r=new Di(i.radius,96,96);let s;i.name==="木星"?s=c0(e,"textures/jupiter.jpg",3811866,.1):i.name==="土星"?s=c0(e,"textures/saturn.jpg",4864544,.1):i.name==="地球"?s=q2(e):i.name==="火星"?s=hs(e,"textures/mars.jpg",3149829,.05,!0):i.name==="金星"?s=hs(e,"textures/venus_atmosphere.jpg",2759176,.12,!1):i.name==="水星"?s=hs(e,"textures/mercury.jpg",2236440,.06,!0):i.name==="天王星"?s=hs(e,"textures/uranus.jpg",666170,.08,!1):i.name==="海王星"?s=hs(e,"textures/neptune.jpg",530480,.08,!1):i.name==="冥王星"?s=hs(e,"textures/pluto.jpg",1708554,.06,!1):s=new sc({color:i.color,shininess:30,specular:2236962});const a=new ht(r,s);a.position.x=i.distance,a.rotation.x=po.degToRad(i.tilt),a.castShadow=!0,a.receiveShadow=!0,t.add(a);const o=Y2(i.distance);t.add(o);const l={mesh:a,orbit:o,material:s,moonCount:i.moons,...i};if(i.atmoColor)if(i.name==="地球"){const c=X2(i.radius);a.add(c),l.atmosphere=c}else a.add(j2(i.radius,i.atmoColor));if(l.moons=[],i.moonsList&&i.moonsList.length>0)i.moonsList.forEach((c,u)=>{const{moon:d,moonOrbit:h,moonConfig:p}=l0(i.radius,e,c);d.castShadow=!0,d.receiveShadow=!0,d.position.x=p.orbitDistance*Math.cos(u*Math.PI*.5),d.position.z=p.orbitDistance*Math.sin(u*Math.PI*.5),a.add(d),a.add(h),l.moons.push({mesh:d,moonOrbit:h,config:p})});else if(i.hasMoon){const{moon:c,moonOrbit:u,moonConfig:d}=l0(i.radius,e);c.castShadow=!0,c.receiveShadow=!0,a.add(c),a.add(u),l.moons.push({mesh:c,moonOrbit:u,config:d}),l.moon=c}if(i.name==="地球"){const c=$2(i.radius,e);a.add(c),l.clouds=c}if(i.hasRings){const c=K2(i);a.add(c),l.ring=c}n.push(l)}),n}function oc(t,e){const n=new ar(t).load(ac+e);return n.colorSpace=tt,n.anisotropy=8,n}function W2(t,e){const n=e,i=Math.round(t.height/t.width*e),r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0,n,i);const a=s.getImageData(0,0,n,i).data,o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d"),c=l.createImageData(n,i),u=(p,v)=>{const x=(p+n)%n,f=((v+i)%i*n+x)*4;return(a[f]+a[f+1]+a[f+2])/3},d=2;for(let p=0;p<i;p++)for(let v=0;v<n;v++){const x=u(v+1,p)-u(v-1,p),m=u(v,p+1)-u(v,p-1);let f=-x*d,g=-m*d,_=255;const y=Math.hypot(f,g,_);f/=y,g/=y,_/=y;const b=(p*n+v)*4;c.data[b]=(f*.5+.5)*255,c.data[b+1]=(g*.5+.5)*255,c.data[b+2]=(_*.5+.5)*255,c.data[b+3]=255}l.putImageData(c,0,0);const h=new Yt(o);return h.colorSpace=Lt,h.anisotropy=8,h}function j2(t,e){const n=new Di(t*1.04,64,64),i=new pt({uniforms:{glowColor:{value:new Re(e)},coeff:{value:.62},power:{value:3.4}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 glowColor;
      uniform float coeff;
      uniform float power;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(clamp(coeff - dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), power);
        gl_FragColor = vec4(glowColor, intensity);
      }
    `,side:jt,blending:ci,transparent:!0,depthWrite:!1});return new ht(n,i)}function X2(t){const e=new Di(t*1.06,64,64),n=new pt({uniforms:{sunDirection:{value:new P(1,0,0)}},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 sunDirection;
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewDir);
        vec3 sunDir = normalize(sunDirection);

        // 太阳入射角：正值=白天，负值=夜晚
        float sunDot = dot(normal, sunDir);

        // Rayleigh 散射：短波蓝光散射更强（白天天空蓝色）
        float scatter = max(sunDot, 0.0);
        vec3 rayleigh = vec3(0.15, 0.35, 0.9) * pow(scatter, 0.8);

        // 晨昏线红化：光线穿过更厚大气层，蓝光被散射掉，只剩红/橙
        float terminator = smoothstep(-0.15, 0.25, sunDot);
        vec3 sunset = vec3(1.0, 0.35, 0.08) * pow(1.0 - terminator, 2.5) * 0.7;

        // Beer-Lambert 消光：背阳面光被吸收
        float extinction = exp(-max(-sunDot, 0.0) * 3.0);

        // 菲涅尔边缘增亮：视线穿过更厚大气层
        float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
        float limb = pow(fresnel, 2.5) * 0.5;

        // 合成
        vec3 scatterLight = (rayleigh + sunset) * extinction;
        vec3 limbColor = mix(vec3(0.3, 0.5, 1.0), vec3(1.0, 0.5, 0.2), 1.0 - terminator);
        vec3 finalColor = scatterLight + limbColor * limb;

        float alpha = clamp(scatter * 0.7 + sunset * 0.5 + limb * 0.35, 0.0, 0.85);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,side:jt,blending:ci,transparent:!0,depthWrite:!1}),i=new ht(e,n);return i.userData.material=n,i}function Y2(t){const e=new Js(t-.3,t+.3,256),n=new pt({uniforms:{uColor:{value:new Re(4877992)},uOpacity:{value:.32},uMaxDist:{value:t}},transparent:!0,side:En,depthWrite:!1,vertexShader:`
      varying float vViewZ;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewZ = mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uMaxDist;
      varying float vViewZ;
      void main() {
        float f = clamp(-vViewZ / uMaxDist, 0.0, 1.0);
        float a = uOpacity * mix(1.0, 0.12, f);
        gl_FragColor = vec4(uColor, a);
      }
    `}),i=new ht(e,n);return i.rotation.x=Math.PI/2,i}function q2(t){const e=oc(t,"textures/earth.jpg"),n=oc(t,"textures/earth_night.jpg"),i=new ar(t).load(ac+"textures/earth_specular.jpg");i.colorSpace=Lt,i.anisotropy=8;const r=new ar(t).load(ac+"textures/earth_normal.jpg");return r.colorSpace=Lt,r.anisotropy=8,new pt({extensions:{derivatives:!0},uniforms:{dayMap:{value:e},nightMap:{value:n},specMap:{value:i},normalMap:{value:r},sunDirection:{value:new P(1,0,0)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vWorldNormal = mat3(modelMatrix) * normal;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D dayMap;
      uniform sampler2D nightMap;
      uniform sampler2D specMap;
      uniform sampler2D normalMap;
      uniform vec3 sunDirection;
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;

      vec3 perturbNormal(vec3 N, vec3 worldPos, vec2 uv, vec3 mapN) {
        vec3 dp1 = dFdx(worldPos);
        vec3 dp2 = dFdy(worldPos);
        vec2 duv1 = dFdx(uv);
        vec2 duv2 = dFdy(uv);
        vec3 dp2perp = cross(dp2, N);
        vec3 dp1perp = cross(N, dp1);
        vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
        vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
        float invmax = inversesqrt(max(dot(T, T), dot(B, B)));
        mat3 TBN = mat3(T * invmax, B * invmax, N);
        return normalize(TBN * mapN);
      }

      void main() {
        vec3 geometricN = normalize(vWorldNormal);
        vec3 mapN = texture2D(normalMap, vUv).xyz * 2.0 - 1.0;
        vec3 N = perturbNormal(geometricN, vWorldPos, vUv, mapN);

        vec3 L = normalize(sunDirection);
        float NdotL = dot(N, L);
        float dayAmount = smoothstep(-0.08, 0.22, NdotL);

        vec3 day = texture2D(dayMap, vUv).rgb;
        vec3 night = texture2D(nightMap, vUv).rgb;
        night = pow(night, vec3(0.9)) * 2.2;

        float terminator = smoothstep(0.0, 0.25, NdotL) * (1.0 - smoothstep(0.25, 0.5, NdotL));
        vec3 twilight = vec3(0.9, 0.45, 0.15) * terminator * 0.5;

        vec3 color = mix(night, day, dayAmount) + twilight;
        // 夜面微光：淡淡的蓝色地球反照，避免背阳面死黑
        color += day * vec3(0.05, 0.07, 0.12) * (1.0 - dayAmount);

        float ocean = texture2D(specMap, vUv).r;
        vec3 V = normalize(cameraPosition - vWorldPos);
        vec3 H = normalize(L + V);
        float spec = pow(max(dot(N, H), 0.0), 50.0) * ocean * dayAmount;
        color += vec3(0.7, 0.85, 1.0) * spec * 0.7;

        gl_FragColor = vec4(color, 1.0);
      }
    `})}function $2(t,e){const n=oc(e,"textures/earth_clouds.png"),i=new Di(t*1.012,64,64),r=new sc({map:n,alphaMap:n,transparent:!0,depthWrite:!1,opacity:.9,shininess:5});return new ht(i,r)}function c0(t,e,n,i){const r=oc(t,e);return new ea({map:r,roughness:1,metalness:0,emissive:new Re(n),emissiveIntensity:i})}function hs(t,e,n,i,r){const s=new ea({roughness:.95,metalness:0,emissive:new Re(n),emissiveIntensity:i});return new ar(t).load(ac+e,o=>{if(o.colorSpace=tt,o.anisotropy=8,s.map=o,r&&o.image){const l=W2(o.image,512);s.normalMap=l,s.normalScale=new ue(.8,.8)}s.needsUpdate=!0}),s}function K2(t,e){if(t.name==="土星")return Z2(t.radius);const n=t.radius*1.4,i=t.radius*2.2,r=t.ringOpacity||.5,s=new Js(n,i,128);v_(s,n,i);const a=new ea({color:8952234,side:En,transparent:!0,opacity:r,roughness:1,emissive:new Re(2241348),emissiveIntensity:.2}),o=new ht(s,a);return o.rotation.x=Math.PI/2,o}function Z2(t){const e=t,n=e*1.2,i=e*3.4,r=new Js(n,i,256);v_(r,n,i);const s=Q2(),a=new pt({uniforms:{map:{value:s},sunDirection:{value:new P(1,0,0)},planetRadius:{value:e}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vUv = uv;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D map;
      uniform vec3 sunDirection;
      uniform float planetRadius;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec4 texColor = texture2D(map, vUv);
        float ringAlpha = texColor.a;

        vec3 sunDir = normalize(sunDirection);
        float sunDot = dot(vWorldNormal, sunDir);
        float backscatter = pow(max(-sunDot, 0.0), 3.0) * 0.2;
        float forwardscatter = pow(max(sunDot, 0.0), 2.0) * 0.1;
        float scatter = backscatter + forwardscatter;

        vec3 toRing = vWorldPos;
        float shadow = 1.0;
        float ringDist = length(toRing.xz);
        if (ringDist < planetRadius * 1.5) {
          float projOnSunAxis = dot(toRing, sunDir);
          float perpDist = length(toRing - sunDir * projOnSunAxis);
          if (projOnSunAxis < 0.0 && perpDist < planetRadius) {
            shadow = mix(0.15, 1.0, smoothstep(planetRadius * 0.3, planetRadius, perpDist));
          }
        }

        float edgeFade = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x);

        vec3 ringColor = texColor.rgb * (0.9 + scatter * 0.5) * shadow;
        float alpha = ringAlpha * edgeFade * (0.7 + scatter * 0.3);

        gl_FragColor = vec4(ringColor, alpha);
      }
    `,side:En,transparent:!0,depthWrite:!1}),o=new ht(r,a);o.rotation.x=Math.PI/2,o.rotation.z=po.degToRad(26.7);const l=new si;return l.add(o),l.userData.ringMaterial=a,l}function Q2(){const n=document.createElement("canvas");n.width=2048,n.height=16;const i=n.getContext("2d"),r=i.createImageData(2048,16),s=[{r0:1.2,r1:1.46,a:.18},{r0:1.46,r1:1.98,a:.95},{r0:1.98,r1:2.04,a:.02},{r0:2.04,r1:2.3,a:.82},{r0:2.3,r1:2.34,a:.7},{r0:2.34,r1:2.4,a:.05},{r0:2.4,r1:3.4,a:.16}];for(let o=0;o<2048;o++){const l=1.2+2.2*(o/2048);let c=s[s.length-1];for(const m of s)if(l>=m.r0&&l<m.r1){c=m;break}const u=(l-1.2)/(3.4-1.2),d=200-u*30+(Math.random()*18-9),h=178-u*26+(Math.random()*16-8),p=150-u*24+(Math.random()*14-7),v=.85+.15*Math.sin(o*.7)+(Math.random()*.1-.05),x=Math.max(0,Math.min(1,c.a*v));for(let m=0;m<16;m++){const f=(m*2048+o)*4;r.data[f]=d*v,r.data[f+1]=h*v,r.data[f+2]=p*v,r.data[f+3]=x*255}}i.putImageData(r,0,0);const a=new Yt(n);return a.colorSpace=tt,a.anisotropy=8,a}function v_(t,e,n){const i=t.attributes.position,r=t.attributes.uv;for(let s=0;s<i.count;s++){const a=i.getX(s),o=i.getY(s),c=(Math.sqrt(a*a+o*o)-e)/(n-e);r.setXY(s,c,.5)}r.needsUpdate=!0}function J2(){const t=new si,e=[{count:8e3,radiusMin:2e3,radiusMax:3500,speed:8e-5,sizeScale:1.3},{count:15e3,radiusMin:4e3,radiusMax:6500,speed:3e-5,sizeScale:1},{count:1e4,radiusMin:7e3,radiusMax:1e4,speed:1e-5,sizeScale:.7}];return e.forEach(n=>{const i=eA(n.count,n.radiusMin,n.radiusMax,n.sizeScale);i.userData.rotSpeed=n.speed,t.add(i)}),t.userData.rotSpeed=e[1].speed,t}function eA(t,e,n,i){const r=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t),o=new Re;for(let d=0;d<t;d++){const h=d*3,p=e+Math.random()*(n-e);let v,x;if(Math.random()<.35){v=Math.random()*Math.PI*2;const f=(Math.random()+Math.random()+Math.random()-1.5)*.35;x=Math.acos(po.clamp(f,-1,1))}else v=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1);r[h]=p*Math.sin(x)*Math.cos(v),r[h+1]=p*Math.sin(x)*Math.sin(v),r[h+2]=p*Math.cos(x);const m=Math.random();if(m<.12)o.setRGB(1,.82,.55);else if(m<.24)o.setRGB(.75,.85,1);else if(m<.3)o.setRGB(1,.6,.5);else{const f=.75+Math.random()*.25;o.setRGB(f,f,f*.98)}s[h]=o.r,s[h+1]=o.g,s[h+2]=o.b,a[d]=(.6+Math.random()*3)*i}const l=new dn;l.setAttribute("position",new zt(r,3)),l.setAttribute("color",new zt(s,3)),l.setAttribute("size",new zt(a,1));const c=new pt({uniforms:{time:{value:0}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float time;

      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float twinkle = 0.75 + 0.25 * sin(time * 1.5 + position.x * 0.01 + position.y * 0.013);
        gl_PointSize = size * twinkle * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float d2 = dist * dist * 4.0;
        float core = exp(-d2 * 9.0);
        float halo = exp(-d2 * 2.2) * 0.28;
        float alpha = clamp(core + halo, 0.0, 1.0);
        vec3 finalColor = vColor * (1.0 + core * 0.8);
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,transparent:!0,blending:ci,depthWrite:!1}),u=new f_(l,c);return u.userData.material=c,u}const __={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tA=new Pc(-1,1,1,-1,0,1);class nA extends dn{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const iA=new nA;class rh{constructor(e){this._mesh=new ht(iA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mr extends ia{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oo.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rh(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class u0 extends ia{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class rA extends ia{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class x_{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ue);this._width=i.width,this._height=i.height,n=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mr(__),this.copyPass.material.blending=wi,this.clock=new p_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}u0!==void 0&&(a instanceof u0?i=!0:a instanceof rA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class y_ extends ia{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const sA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class kr extends ia{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(s,a,{type:li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new kn(s,a,{type:li});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new kn(s,a,{type:li});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=sA;this.highPassUniforms=oo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=__;this.copyUniforms=oo.clone(u.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Cc,this.fsQuad=new rh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=kr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=kr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}kr.BlurDirectionX=new ue(1,0);kr.BlurDirectionY=new ue(0,1);const aA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class oA extends ia{constructor(){super();const e=aA;this.uniforms=oo.clone(e.uniforms),this.material=new _2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pv?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dv?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nv&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const lA={uniforms:{tDiffuse:{value:null},sunPosition:{value:new ue(.5,.5)},intensity:{value:.55},decay:{value:.96},exposure:{value:.14},numSamples:{value:64},rayColor:{value:new Re(1,.7,.3)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 sunPosition;
    uniform float intensity;
    uniform float decay;
    uniform float exposure;
    uniform int numSamples;
    uniform vec3 rayColor;
    varying vec2 vUv;

    void main() {
      vec2 texCoord = vUv;
      vec2 deltaTextCoord = texCoord - sunPosition;
      deltaTextCoord *= 1.0 / float(numSamples) * intensity;

      vec4 color = texture2D(tDiffuse, texCoord);
      float illuminationDecay = 1.0;
      vec4 accumulated = vec4(0.0);

      vec2 sampleCoord = texCoord;
      for (int i = 0; i < 128; i++) {
        if (i >= numSamples) break;
        sampleCoord -= deltaTextCoord;
        vec4 sampleColor = texture2D(tDiffuse, sampleCoord);
        // 只累积高亮区域（阈值过滤暗部）
        sampleColor.rgb *= max(sampleColor.rgb - vec3(0.6), vec3(0.0));
        sampleColor.rgb *= illuminationDecay * rayColor;
        accumulated.rgb += sampleColor.rgb;
        illuminationDecay *= decay;
      }

      accumulated.rgb *= exposure / float(numSamples);
      gl_FragColor = vec4(color.rgb + accumulated.rgb, color.a);
    }
  `},cA={uniforms:{tDiffuse:{value:null},amount:{value:.003},angle:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float angle;
    varying vec2 vUv;

    void main() {
      // 从中心向外的径向偏移（越靠近边缘偏移越大）
      vec2 dir = vUv - vec2(0.5);
      float dist = length(dir);
      float offset = amount * dist * dist; // 二次方衰减，中心几乎无偏移

      // 安全归一化：中心像素 dir=(0,0) 时跳过偏移，避免 NaN
      vec2 rOffset = vec2(0.0);
      vec2 bOffset = vec2(0.0);
      if (dist > 0.0001) {
        vec2 dirNorm = normalize(dir);
        rOffset = dirNorm * offset;
        bOffset = -dirNorm * offset;
      }

      float r = texture2D(tDiffuse, vUv + rOffset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv + bOffset).b;
      float a = texture2D(tDiffuse, vUv).a;

      gl_FragColor = vec4(r, g, b, a);
    }
  `},uA={uniforms:{tDiffuse:{value:null},lift:{value:new P(.01,.005,.03)},gamma:{value:new P(1,.97,.92)},gain:{value:new P(1,1.02,.98)},saturation:{value:1.15},contrast:{value:1.08}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 lift;
    uniform vec3 gamma;
    uniform vec3 gain;
    uniform float saturation;
    uniform float contrast;
    varying vec2 vUv;

    // RGB 转亮度
    float luminance(vec3 c) {
      return dot(c, vec3(0.2126, 0.7152, 0.0722));
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      vec3 c = color.rgb;

      // Lift: 暗部提亮 + 着色
      c = c * (1.0 - lift) + lift;

      // Gamma: 中间调校正
      c = pow(max(c, vec3(0.0)), 1.0 / gamma);

      // Gain: 亮部调整
      c *= gain;

      // 对比度（围绕中灰 0.18）
      c = (c - 0.18) * contrast + 0.18;

      // 饱和度
      float lum = luminance(c);
      c = mix(vec3(lum), c, saturation);

      gl_FragColor = vec4(clamp(c, 0.0, 1.0), color.a);
    }
  `},fA={uniforms:{tDiffuse:{value:null},vignetteIntensity:{value:.4},vignetteFalloff:{value:.8},grainIntensity:{value:.035},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float vignetteIntensity;
    uniform float vignetteFalloff;
    uniform float grainIntensity;
    uniform float time;
    varying vec2 vUv;

    // 高质量伪随机（避免条带）
    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);

      // --- 暗角 ---
      vec2 center = vUv - 0.5;
      float dist = length(center);
      // smoothstep 实现柔和过渡：从中心到边缘逐渐变暗
      float vignette = smoothstep(0.5, 0.5 - vignetteFalloff * 0.5, dist);
      color.rgb *= mix(1.0 - vignetteIntensity, 1.0, vignette);

      // --- 胶片颗粒 ---
      // 每帧使用不同随机种子，产生动态噪点
      float grain = rand(vUv * 1000.0 + fract(time * 137.0)) * 2.0 - 1.0;
      color.rgb += grain * grainIntensity;

      gl_FragColor = color;
    }
  `},dA={uniforms:{tDiffuse:{value:null},sunScreenPos:{value:new ue(.5,.5)},sunVisible:{value:1},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 sunScreenPos;
    uniform float sunVisible;
    uniform float time;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      if (sunVisible < 0.01) {
        gl_FragColor = color;
        return;
      }

      float dy = vUv.y - sunScreenPos.y;
      float dx = vUv.x - sunScreenPos.x;
      float streak = exp(-abs(dy) * 50.0) * exp(-abs(dx) * 3.0) * 0.08;

      float dist = sqrt(dx * dx + dy * dy);
      float glow = exp(-dist * 12.0) * 0.12;

      float ghost = 0.0;
      vec2 dir = vec2(0.5) - sunScreenPos;
      float dirLen = length(dir);
      if (dirLen > 0.001) {
        vec2 nDir = dir / dirLen;
        for (int i = 0; i < 4; i++) {
          float fi = float(i);
          float off = 0.5 + fi * 0.4;
          vec2 gp = sunScreenPos + nDir * off;
          float gd = length(vUv - gp);
          float spot = exp(-gd * 20.0);
          float pulse = 0.6 + 0.4 * sin(time * 0.8 + fi * 1.5);
          ghost += spot * pulse * 0.04;
        }
      }

      vec3 flare = vec3(0.5, 0.6, 1.0) * streak
                 + vec3(1.0, 0.85, 0.6) * glow
                 + vec3(0.6, 0.7, 1.0) * ghost;
      color.rgb += flare * sunVisible;

      gl_FragColor = color;
    }
  `};function hA(t,e,n){const i=new ue;t.getSize(i);const r=new x_(t);r.addPass(new y_(e,n));const s=new kr(new ue(i.x,i.y),.22,.5,.82);r.addPass(s);const a=new Mr(lA);r.addPass(a);const o=new Mr(cA);r.addPass(o);const l=new Mr(uA);r.addPass(l);const c=new Mr(fA);r.addPass(c);const u=new Mr(dA);return r.addPass(u),r.addPass(new oA),{composer:r,bloomPass:s,godRaysPass:a,chromaticPass:o,colorGradingPass:l,vignetteGrainPass:c,lensFlarePass:u}}function pA(t=1e3,e=1400,n=8e3){const i=new si,{albedo:r,normal:s}=mA(1024),a=new go(1,2),o=new ea({map:r,normalMap:s,normalScale:new ue(1.1,1.1),roughness:.95,metalness:.04,flatShading:!0});new ar().load("./textures/rock.jpg",d=>{d.image&&(d.colorSpace=tt,d.anisotropy=8,d.wrapS=d.wrapT=Fr,o.map=d,o.normalMap=sh(d.image,1024),o.needsUpdate=!0)},void 0,()=>{});const l=new u_(a,o,n),c=new Tt,u=new Re;for(let d=0;d<n;d++){const h=t+Math.random()*(e-t),p=Math.random()*Math.PI*2,v=(Math.random()-.5)*20;c.position.set(h*Math.cos(p),v,h*Math.sin(p)),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const x=.02+Math.pow(Math.random(),3)*.15;c.scale.set(x,x*(.6+Math.random()*.8),x),c.updateMatrix(),l.setMatrixAt(d,c.matrix);const m=.7+Math.random()*.35,f=Math.random()*.12;u.setRGB(m*(.95+f),m*.9,m*.82),l.setColorAt(d,u)}return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.castShadow=!1,l.receiveShadow=!1,i.add(l),i}function mA(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=S_();n.fillStyle="#8a8078",n.fillRect(0,0,t,t);const r=n.getImageData(0,0,t,t),s=r.data;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=0,d=.6,h=4;for(let m=0;m<4;m++)u+=d*i(c/t*h,l/t*h),d*=.5,h*=2;const p=60+u*110,v=(l*t+c)*4,x=(p-120)*.5;s[v]=Math.max(20,Math.min(235,138+x)),s[v+1]=Math.max(18,Math.min(230,128+x)),s[v+2]=Math.max(16,Math.min(220,120+x))}n.putImageData(r,0,0);for(let l=0;l<90;l++){const c=Math.random()*t,u=Math.random()*t,d=3+Math.random()*16;n.strokeStyle="rgba(35,30,26,0.55)",n.lineWidth=1.4,n.beginPath(),n.arc(c,u,d,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(205,200,192,0.22)",n.beginPath(),n.arc(c,u,d*.82,0,Math.PI*2),n.fill()}for(let l=0;l<40;l++){let c=Math.random()*t,u=Math.random()*t;n.strokeStyle="rgba(30,26,22,0.35)",n.lineWidth=1+Math.random(),n.beginPath(),n.moveTo(c,u);const d=6+Math.floor(Math.random()*10);for(let h=0;h<d;h++)c+=(Math.random()-.5)*40,u+=(Math.random()-.5)*40,n.lineTo(c,u);n.stroke()}const a=new Yt(e);a.colorSpace=tt,a.wrapS=a.wrapT=Fr;const o=sh(e,t);return{albedo:a,normal:o}}function sh(t,e){const n=e,i=e,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0,n,i);const a=s.getImageData(0,0,n,i).data,o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d"),c=l.createImageData(n,i),u=(p,v)=>{const x=(p+n)%n,f=((v+i)%i*n+x)*4;return(a[f]+a[f+1]+a[f+2])/3},d=1.8;for(let p=0;p<i;p++)for(let v=0;v<n;v++){const x=u(v+1,p)-u(v-1,p),m=u(v,p+1)-u(v,p-1);let f=-x*d,g=-m*d,_=255;const y=Math.hypot(f,g,_);f/=y,g/=y,_/=y;const b=(p*n+v)*4;c.data[b]=(f*.5+.5)*255,c.data[b+1]=(g*.5+.5)*255,c.data[b+2]=(_*.5+.5)*255,c.data[b+3]=255}l.putImageData(c,0,0);const h=new Yt(o);return h.colorSpace=Lt,h.wrapS=h.wrapT=Fr,h}function S_(t){const n=[];for(let r=0;r<65*65;r++)n.push(Math.random());const i=(r,s)=>n[(s%64+64)%64*65+(r%64+64)%64];return(r,s)=>{const a=r*64,o=s*64,l=Math.floor(a),c=Math.floor(o),u=a-l,d=o-c,h=u*u*(3-2*u),p=d*d*(3-2*d),v=i(l,c),x=i(l+1,c),m=i(l,c+1),f=i(l+1,c+1);return(v*(1-h)+x*h)*(1-p)+(m*(1-h)+f*h)*p}}function gA(t=6500,e=7500,n=3e3){const i=new si,{albedo:r,normal:s}=vA(1024),a=new go(1,2),o=new ea({map:r,normalMap:s,normalScale:new ue(1,1),roughness:.92,metalness:.02,flatShading:!0}),l=new u_(a,o,n),c=new Tt,u=new Re;for(let d=0;d<n;d++){const h=t+Math.random()*(e-t),p=Math.random()*Math.PI*2,v=(Math.random()-.5)*30;c.position.set(h*Math.cos(p),v,h*Math.sin(p)),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const x=.02+Math.pow(Math.random(),3)*.18;c.scale.set(x,x*(.5+Math.random()*1),x),c.updateMatrix(),l.setMatrixAt(d,c.matrix);const m=.65+Math.random()*.3,f=Math.random()*.15,g=Math.random()*.08;u.setRGB(m*(.88+g),m*(.9+f*.3),m*(.95+f)),l.setColorAt(d,u)}return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.castShadow=!1,l.receiveShadow=!1,i.add(l),i}function vA(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=S_();n.fillStyle="#7a8090",n.fillRect(0,0,t,t);const r=n.getImageData(0,0,t,t),s=r.data;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=0,d=.6,h=4;for(let x=0;x<4;x++)u+=d*i(c/t*h,l/t*h),d*=.5,h*=2;const p=55+u*120,v=(l*t+c)*4;s[v]=Math.max(20,Math.min(220,110+p*.3)),s[v+1]=Math.max(18,Math.min(225,118+p*.35)),s[v+2]=Math.max(22,Math.min(235,130+p*.4))}n.putImageData(r,0,0);for(let l=0;l<60;l++){const c=Math.random()*t,u=Math.random()*t,d=2+Math.random()*10,h=n.createRadialGradient(c,u,0,c,u,d);h.addColorStop(0,"rgba(200,210,230,0.35)"),h.addColorStop(1,"rgba(200,210,230,0)"),n.fillStyle=h,n.beginPath(),n.arc(c,u,d,0,Math.PI*2),n.fill()}for(let l=0;l<50;l++){const c=Math.random()*t,u=Math.random()*t,d=3+Math.random()*14;n.strokeStyle="rgba(40,45,55,0.5)",n.lineWidth=1.2,n.beginPath(),n.arc(c,u,d,0,Math.PI*2),n.stroke()}const a=new Yt(e);a.colorSpace=tt,a.wrapS=a.wrapT=Fr;const o=sh(e,t);return{albedo:a,normal:o}}function _A(t=1024,e=0){const n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d");let r=e+1;const s=()=>(r=(r*16807+0)%2147483647,r/2147483647),a=100+s()*40,o=90+s()*35,l=75+s()*30;i.fillStyle=`rgb(${a},${o},${l})`,i.fillRect(0,0,t,t);const c=i.getImageData(0,0,t,t),u=c.data;for(let v=0;v<t;v++)for(let x=0;x<t;x++){let m=0,f=.5,g=3;for(let b=0;b<5;b++){const A=Math.sin(x*g*.013+e)*Math.cos(v*g*.017+e*.7);m+=f*A,f*=.5,g*=2.1}const _=m*50,y=(v*t+x)*4;u[y]=Math.max(30,Math.min(220,a+_)),u[y+1]=Math.max(25,Math.min(210,o+_*.9)),u[y+2]=Math.max(20,Math.min(200,l+_*.8))}i.putImageData(c,0,0);const d=30+Math.floor(s()*40);for(let v=0;v<d;v++){const x=s()*t,m=s()*t,f=2+s()*(t*.08);i.fillStyle=`rgba(30,25,20,${.3+s()*.3})`,i.beginPath(),i.arc(x,m,f,0,Math.PI*2),i.fill(),i.strokeStyle=`rgba(180,170,155,${.2+s()*.25})`,i.lineWidth=.8+s(),i.beginPath(),i.arc(x,m,f*1.15,0,Math.PI*2),i.stroke()}i.strokeStyle="rgba(40,35,28,0.3)",i.lineWidth=.6;for(let v=0;v<15;v++){let x=s()*t,m=s()*t;i.beginPath(),i.moveTo(x,m);const f=4+Math.floor(s()*8);for(let g=0;g<f;g++)x+=(s()-.5)*t*.12,m+=(s()-.5)*t*.12,i.lineTo(x,m);i.stroke()}const h=new Yt(n);h.colorSpace=tt,h.anisotropy=4;const p=xA(n,t);return{albedo:h,normal:p}}function xA(t,e){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");i.drawImage(t,0,0,e,e);const r=i.getImageData(0,0,e,e).data,s=document.createElement("canvas");s.width=e,s.height=e;const a=s.getContext("2d"),o=a.createImageData(e,e),l=(d,h)=>{const p=(d+e)%e,x=((h+e)%e*e+p)*4;return(r[x]+r[x+1]+r[x+2])/3},c=3;for(let d=0;d<e;d++)for(let h=0;h<e;h++){const p=l(h+1,d)-l(h-1,d),v=l(h,d+1)-l(h,d-1);let x=-p*c,m=-v*c,f=255;const g=Math.hypot(x,m,f);x/=g,m/=g,f/=g;const _=(d*e+h)*4;o.data[_]=(x*.5+.5)*255,o.data[_+1]=(m*.5+.5)*255,o.data[_+2]=(f*.5+.5)*255,o.data[_+3]=255}a.putImageData(o,0,0);const u=new Yt(s);return u.colorSpace=Lt,u.anisotropy=4,u}class yA{constructor(e){this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.sun=null,this.solarSystem=null,this.starField=null,this.planetMeshes=[],this.sunLight=null,this.isPaused=!1,this.timeSpeed=1,this.showOrbits=!0,this.showStars=!0,this.showNames=!1,this.globalScale=1,this.currentTargetPlanet=null,this.targetDistance=300,this.cameraMoveSpeed=.05,this.animationId=null,this.onPlanetClick=null,this.onSunClick=null,this.onMoonClick=null,this.onAsteroidClick=null,this.onCharonClick=null,this.raycaster=null,this.mouse=null,this.composer=null,this.bloomPass=null,this.godRaysPass=null,this.chromaticPass=null,this.colorGradingPass=null,this.vignetteGrainPass=null,this.composerBroken=!1,this.bloomEnabled=!0,this.godRaysEnabled=!0,this.chromaticEnabled=!0,this.lensFlareEnabled=!0,this.lensFlareLevel=1,this.asteroidBelt=null,this.kuiperBelt=null,this.namedAsteroids=[],this.loadingManager=null,this.onLoaded=null,this.suspended=!1}init(){this.scene=new o_,this.camera=new pn(60,window.innerWidth/window.innerHeight,.1,2e4),this.camera.position.set(0,600,1800),this.renderer=new eh({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rv,this.renderer.toneMapping=Xd,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=tt,this.container.appendChild(this.renderer.domElement),this.controls=new m_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!0,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.minDistance=.1,this.controls.maxDistance=25e3;let e=!1;this.renderer.domElement.addEventListener("wheel",()=>{e=!0,setTimeout(()=>{e=!1},100)},{passive:!0}),this.controls.addEventListener("start",()=>{this.currentTargetPlanet&&!e&&(this.currentTargetPlanet=null)}),this.setupLighting(),this.starField=J2(),this.scene.add(this.starField),this.solarSystem=new si,this.scene.add(this.solarSystem),this.loadingManager=new d_,this.loadingManager.onLoad=()=>{this.onLoaded&&this.onLoaded()},this.sun=R2(this.loadingManager),this.sun.castShadow=!1,this.solarSystem.add(this.sun),this.scene.background=this.createSpaceBackground(this.loadingManager),this._spaceBackground=this.scene.background,this.planetMeshes=V2(this.solarSystem,this.loadingManager),this.asteroidBelt=pA(1e3,1400),this.solarSystem.add(this.asteroidBelt),this.kuiperBelt=gA(6500,7500),this.solarSystem.add(this.kuiperBelt),this.namedAsteroids=this.createNamedAsteroids(),this.raycaster=new A2,this.mouse=new ue,this.setupResize(),this.setupClick();try{const n=hA(this.renderer,this.scene,this.camera);this.composer=n.composer,this.bloomPass=n.bloomPass,this.godRaysPass=n.godRaysPass,this.chromaticPass=n.chromaticPass,this.colorGradingPass=n.colorGradingPass,this.vignetteGrainPass=n.vignetteGrainPass,this.lensFlarePass=n.lensFlarePass}catch(n){console.error("[solar] 后期管线初始化失败，退回普通渲染：",n),this.composer=null,this.bloomPass=null,this.godRaysPass=null,this.chromaticPass=null,this.colorGradingPass=null,this.vignetteGrainPass=null,this.lensFlarePass=null}this.animate()}createSpaceBackground(e){if(e){const a=new ar(e).load("./textures/milkyway.jpg");return a.mapping=Ql,a.colorSpace=tt,a.anisotropy=4,a}const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d"),r=i.createRadialGradient(32,32,0,32,32,46);r.addColorStop(0,"#0b0b1c"),r.addColorStop(.55,"#05060f"),r.addColorStop(1,"#000007"),i.fillStyle=r,i.fillRect(0,0,64,64);const s=new Yt(n);return s.colorSpace=tt,s}setupLighting(){const e=new T2(8952251,1.15);this.scene.add(e);const n=new S2(10137816,2366484,.85);this.scene.add(n),this.sunLight=new E2(16773856,3,0,0),this.sunLight.position.set(0,0,0),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=15e3,this.sunLight.shadow.bias=-1e-4,this.scene.add(this.sunLight);const i=new Zm(8956671,.6);i.position.set(-300,120,-300),this.scene.add(i);const r=new Zm(10079487,.35);r.position.set(0,200,-400),this.scene.add(r)}setupClick(){this.renderer.domElement.addEventListener("click",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=[];this.planetMeshes.forEach(a=>{a.moons&&a.moons.length>0&&a.moons.forEach(o=>n.push(o.mesh))});const i=this.raycaster.intersectObjects(n);if(i.length>0&&this.onMoonClick){const a=i[0].object,o=this.planetMeshes.find(l=>l.moons&&l.moons.some(c=>c.mesh===a));if(o){const l=o.moons.find(d=>d.mesh===a),c=l?l.config:{},u={name:c.name||"月球",mesh:a,radius:a.geometry.parameters.radius,isMoon:!0,parentPlanet:o};this.currentTargetPlanet=u,this.moveCameraToPlanet(u),this.onMoonClick(c.name||"月球")}return}const r=this.raycaster.intersectObjects(this.planetMeshes.map(a=>a.mesh),!0);if(r.length>0){let a=r[0].object,o=null;for(;a&&(o=this.planetMeshes.find(l=>l.mesh===a),!o);)a=a.parent;o&&this.onPlanetClick&&(this.currentTargetPlanet=o,this.moveCameraToPlanet(o),this.onPlanetClick(o));return}if(this.namedAsteroids&&this.namedAsteroids.length>0){const a=this.namedAsteroids.map(l=>l.mesh),o=this.raycaster.intersectObjects(a);if(o.length>0&&this.onAsteroidClick){const l=this.namedAsteroids.find(c=>c.mesh===o[0].object);if(l){const c={name:l.name,mesh:l.mesh,radius:l.radius,isAsteroid:!0};this.currentTargetPlanet=c,this.moveCameraToPlanet(c),this.onAsteroidClick(l)}return}}if(this.raycaster.intersectObject(this.sun).length>0&&this.onSunClick){const a={name:"太阳",mesh:this.sun,radius:120};this.currentTargetPlanet=a,this.moveCameraToPlanet(a),this.onSunClick();return}})}moveCameraToPlanet(e){const n=new P;e.mesh.getWorldPosition(n);let i;e.isMoon?i=Math.max(e.radius*5,15):e.isAsteroid?i=Math.max(e.radius*8,10):e.name==="太阳"?i=e.radius*1.5:e.name==="土星"?i=e.radius*3:i=e.radius*2.5;const r=new P(n.x+i,n.y+i*.3,n.z+i);this.animateCameraToPosition(r,n)}animateCameraToPosition(e,n){const i=this.camera.position.clone(),r=this.controls.target.clone(),s=1e3,a=Date.now();this.currentTargetPlanet;const o=()=>{const l=Date.now()-a,c=Math.min(l/s,1),u=1-Math.pow(1-c,3);this.camera.position.lerpVectors(i,e,u),this.controls.target.lerpVectors(r,n,u),this.controls.update(),c<1&&requestAnimationFrame(o)};o()}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)})}animate(){if(this.animationId=requestAnimationFrame(()=>this.animate()),this.suspended)return;const e=Date.now()*.001;if(this.isPaused||(this.updatePlanets(),this.updateSun()),this.starField&&this.starField.children&&this.starField.children.forEach(n=>{n.userData.material&&(n.userData.material.uniforms.time.value=e),n.userData.rotSpeed&&(n.rotation.y+=n.userData.rotSpeed*this.timeSpeed)}),this.currentTargetPlanet?this.updateCameraTracking():this.controls.update(),this.preventCameraInsidePlanets(),this.updatePostProcessing(e),this.composerBroken||!this.composer||!this.bloomEnabled){this.renderer.render(this.scene,this.camera);return}try{this.composer.render()}catch(n){console.error("[solar] composer.render 失败，退回普通渲染：",n),this.composerBroken=!0;try{this.renderer.render(this.scene,this.camera)}catch{}}}updatePlanets(){const e=Date.now();this.planetMeshes.forEach(n=>{if(n.name==="土星"){if(n.mesh.rotation.y+=8e-4*this.timeSpeed,n.ring&&n.ring.userData.ringMaterial){const a=new P;n.mesh.getWorldPosition(a),n.ring.userData.ringMaterial.uniforms.sunDirection.value.copy(a).multiplyScalar(-1).normalize()}}else n.name==="火星"?n.mesh.rotation.y+=2e-4*this.timeSpeed:n.name==="金星"?n.mesh.rotation.y-=1e-4*this.timeSpeed:n.mesh.rotation.y+=n.rotationSpeed*this.timeSpeed;const i=e*1e-4*n.orbitSpeed*this.timeSpeed,r=Math.cos(i)*n.distance,s=Math.sin(i)*n.distance;if(n.mesh.position.set(r,0,s),n.moons&&n.moons.length>0&&n.moons.forEach(a=>{const o=a.config,l=e*1e-4*o.orbitSpeed*this.timeSpeed,c=o.orbitDistance;a.mesh.position.x=c*Math.cos(l),a.mesh.position.z=c*Math.sin(l),a.mesh.rotation.y+=o.rotationSpeed*this.timeSpeed}),n.name==="地球"){if(n.clouds&&(n.clouds.rotation.y+=12e-5*this.timeSpeed),n.material&&n.material.uniforms&&n.material.uniforms.sunDirection){const a=new P;n.mesh.getWorldPosition(a),n.material.uniforms.sunDirection.value.copy(a).multiplyScalar(-1).normalize()}if(n.atmosphere&&n.atmosphere.userData.material){const a=new P;n.mesh.getWorldPosition(a),n.atmosphere.userData.material.uniforms.sunDirection.value.copy(a).multiplyScalar(-1).normalize()}}}),this.asteroidBelt&&(this.asteroidBelt.rotation.y+=3e-4*this.timeSpeed),this.kuiperBelt&&(this.kuiperBelt.rotation.y+=1e-4*this.timeSpeed),this.namedAsteroids&&this.namedAsteroids.forEach(n=>{const i=e*1e-4*n.orbitSpeed*this.timeSpeed;n.mesh.position.x=Math.cos(i)*n.distance,n.mesh.position.z=Math.sin(i)*n.distance,n.mesh.rotation.y+=.005*this.timeSpeed})}updateSun(){if(this.sun){this.sun.rotation.y+=.005*this.timeSpeed;const e=Math.sin(Date.now()*.001)*.02+1;this.sun.scale.set(e,e,e),this.sunLight&&(this.sunLight.intensity=4.2+Math.sin(Date.now()*.002)*.25);const n=Date.now()*.001;this.sun.userData&&(this.sun.userData.surfaceMaterial&&this.sun.userData.surfaceMaterial.uniforms&&(this.sun.userData.surfaceMaterial.uniforms.time.value=n),this.sun.userData.particles&&this.sun.userData.particles.userData.material&&(this.sun.userData.particles.userData.material.uniforms.time.value=n))}}updateCameraTracking(){const e=new P;this.currentTargetPlanet.mesh.getWorldPosition(e);const n=Math.min(.08*Math.max(this.timeSpeed,1),.3),i=new P().subVectors(this.camera.position,this.controls.target);this.controls.target.lerp(e,n);const r=new P().addVectors(e,i);this.camera.position.lerp(r,n),this.controls.update()}setPaused(e){this.isPaused=e}setBloom(e){this.bloomEnabled=e}setGodRays(e){this.godRaysEnabled=e,this.godRaysPass&&(this.godRaysPass.uniforms.intensity.value=e?.55:0)}setChromatic(e){this.chromaticEnabled=e,this.chromaticPass&&(this.chromaticPass.uniforms.amount.value=e?.003:0)}setLensFlare(e){this.lensFlareEnabled=e}updatePostProcessing(e){if(!(!this.composer||this.composerBroken)){if(this.godRaysPass&&this.sun){const n=this.sun.position.clone().project(this.camera),i=n.z>1;this.godRaysPass.uniforms.sunPosition.value.set((n.x+1)*.5,(n.y+1)*.5),this.godRaysEnabled&&!i?this.godRaysPass.uniforms.intensity.value=.55:this.godRaysPass.uniforms.intensity.value=0}if(this.vignetteGrainPass&&(this.vignetteGrainPass.uniforms.time.value=e),this.lensFlarePass&&this.sun){const n=this.sun.position.clone().project(this.camera),i=n.z>1;this.lensFlarePass.uniforms.sunScreenPos.value.set((n.x+1)*.5,(n.y+1)*.5),this.lensFlarePass.uniforms.sunVisible.value=this.lensFlareEnabled&&!i?1:0,this.lensFlarePass.uniforms.time.value=e*.001}}}setSuspended(e){this.suspended=!!e}focusByName(e){if(e==="太阳"){const i={name:"太阳",mesh:this.sun,radius:120};this.currentTargetPlanet=i,this.moveCameraToPlanet(i),this.onSunClick&&this.onSunClick();return}for(const i of this.planetMeshes)if(i.moons&&i.moons.length>0){for(const r of i.moons)if(r.config.name===e){const s={name:e,mesh:r.mesh,radius:r.mesh.geometry.parameters.radius,isMoon:!0,parentPlanet:i};this.currentTargetPlanet=s,this.moveCameraToPlanet(s),this.onMoonClick&&this.onMoonClick(e);return}}if(this.namedAsteroids){const i=this.namedAsteroids.find(r=>r.name===e);if(i){const r={name:i.name,mesh:i.mesh,radius:i.radius,isAsteroid:!0};this.currentTargetPlanet=r,this.moveCameraToPlanet(r),this.onAsteroidClick&&this.onAsteroidClick(i);return}}const n=this.planetMeshes.find(i=>i.name===e);n&&(this.currentTargetPlanet=n,this.moveCameraToPlanet(n),this.onPlanetClick&&this.onPlanetClick(n))}setTimeSpeed(e){this.timeSpeed=e}safeDir(e,n){const i=new P().subVectors(e,n);return i.lengthSq()<1e-6&&i.set(0,1,0),i.normalize()}preventCameraInsidePlanets(){const e=this.camera.position.clone(),n=e.distanceTo(this.sun.position),i=310;if(n<i){const r=this.safeDir(e,this.sun.position);this.camera.position.copy(this.sun.position.clone().add(r.multiplyScalar(i)))}this.planetMeshes.forEach(r=>{const s=new P;r.mesh.getWorldPosition(s);const a=e.distanceTo(s),o=r.radius*1.2;if(a<o){const l=this.safeDir(e,s);this.camera.position.copy(s.clone().add(l.multiplyScalar(o)))}if(r.moon){const l=new P;r.moon.getWorldPosition(l);const c=e.distanceTo(l),u=r.radius*.27*1.2;if(c<u){const d=this.safeDir(e,l);this.camera.position.copy(l.clone().add(d.multiplyScalar(u)))}}})}createLensFlare(){const e=new si,n=200,i=this.makeFlareSprite(150,"rgba(255,240,205,0.55)");e.add(i);const s=[{t:-.18,size:70,mul:.45,color:"rgba(255,170,110,0.5)"},{t:.3,size:46,mul:.35,color:"rgba(170,200,255,0.4)"},{t:.58,size:28,mul:.3,color:"rgba(255,220,160,0.35)"},{t:1,size:130,mul:.22,color:"rgba(120,160,255,0.25)"},{t:1.42,size:56,mul:.18,color:"rgba(255,150,120,0.2)"}].map(a=>{const o=this.makeFlareSprite(a.size,a.color);return e.add(o),{sprite:o,t:a.t,mul:a.mul}});this.camera.add(e),this.lensFlare=e,this.lensFlareGlow=i,this.lensFlareGhosts=s,this.lensFlareDist=n}makeFlareSprite(e,n){const i=document.createElement("canvas");i.width=i.height=128;const r=i.getContext("2d"),s=r.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,n),s.addColorStop(.5,n.replace(/[\d.]+\)$/g,"0.25)")),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);const a=new Yt(i);a.colorSpace=tt;const o=new th({map:a,transparent:!0,blending:ci,depthTest:!1,depthWrite:!1,opacity:0}),l=new c_(o);return l.scale.set(e,e,1),l.renderOrder=999,l}updateLensFlare(){if(!this.lensFlare)return;const e=new P(0,0,0).project(this.camera),i=!(e.z>1)&&Math.abs(e.x)<1.3&&Math.abs(e.y)<1.3,r=this.camera.aspect,s=Math.tan(po.degToRad(this.camera.fov/2)),a=this.lensFlareDist,o=i?.2+.8*Math.max(0,1-Math.hypot(e.x,e.y)*.9):0,l=e.x*r*s*a,c=e.y*s*a;this.lensFlareGlow.position.set(l,c,-a),this.lensFlareGlow.material.opacity=o*.9,this.lensFlareGhosts.forEach(u=>{const d=e.x+(0-e.x)*u.t,h=e.y+(0-e.y)*u.t;u.sprite.position.set(d*r*s*a,h*s*a,-a),u.sprite.material.opacity=i?o*u.mul:0})}setShowOrbits(e){this.showOrbits=e,this.planetMeshes.forEach(n=>{n.orbit&&(n.orbit.visible=e)})}setShowStars(e){this.showStars=e,this.starField&&(this.starField.visible=e),this.scene&&(this.scene.background=e?this._spaceBackground:null)}setShowNames(e){this.showNames=e}setGlobalScale(e){this.globalScale=e,this.solarSystem&&this.solarSystem.scale.set(e,e,e)}resetView(){this.camera.position.set(0,600,1800),this.controls.target.set(0,0,0),this.controls.update(),this.currentTargetPlanet=null}cancelTracking(){this.currentTargetPlanet=null}getPlanetScreenPositions(){const e={};if(this.planetMeshes.forEach(n=>{const i=new P;i.setFromMatrixPosition(n.mesh.matrixWorld),i.project(this.camera);const r=(i.x*.5+.5)*window.innerWidth,s=(-i.y*.5+.5)*window.innerHeight;e[n.name]={x:r,y:s,visible:this.showNames}}),this.sun){const n=new P;n.setFromMatrixPosition(this.sun.matrixWorld),n.project(this.camera);const i=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight;e.太阳={x:i,y:r,visible:this.showNames}}return this.namedAsteroids&&this.namedAsteroids.forEach(n=>{const i=new P;i.setFromMatrixPosition(n.mesh.matrixWorld),i.project(this.camera);const r=(i.x*.5+.5)*window.innerWidth,s=(-i.y*.5+.5)*window.innerHeight;e[n.name]={x:r,y:s,visible:this.showNames}}),e}createNamedAsteroids(){const e=[{name:"谷神星",distance:1150,radius:.74,orbitSpeed:.07,seed:1,fact:"小行星带最大天体，矮行星，直径940公里，表面有盐类沉积。"},{name:"灶神星",distance:1050,radius:.41,orbitSpeed:.09,seed:2,fact:"小行星带第二大战体，直径525公里，南极有巨大撞击坑。"},{name:"智神星",distance:1250,radius:.4,orbitSpeed:.06,seed:3,fact:"小行星带第三大战体，直径512公里，轨道倾角高达34°。"},{name:"婚神星",distance:1350,radius:.2,orbitSpeed:.055,seed:4,fact:"小行星带第四大战体，直径250公里，以罗马婚姻女神命名。"}],n=[];return e.forEach(i=>{const r=new go(i.radius,4),s=r.attributes.position;for(let u=0;u<s.count;u++){const d=s.getX(u),h=s.getY(u),p=s.getZ(u);if(Math.sqrt(d*d+h*h+p*p)<.001)continue;const x=.85+Math.sin(d*5.3+i.seed)*.15,m=.9+Math.cos(h*4.7+i.seed*2)*.1,f=.88+Math.sin(p*6.1+i.seed*3)*.12,g=x*m*f;s.setXYZ(u,d*g,h*g*(.75+Math.sin(i.seed)*.15),p*g)}r.computeVertexNormals();const{albedo:a,normal:o}=_A(256,i.seed),l=new ea({map:a,normalMap:o,normalScale:new ue(1.5,1.5),roughness:.92,metalness:.04,flatShading:!1}),c=new ht(r,l);c.position.x=i.distance,c.castShadow=!0,c.receiveShadow=!0,this.solarSystem.add(c),n.push({mesh:c,name:i.name,distance:i.distance,orbitSpeed:i.orbitSpeed,radius:i.radius,fact:i.fact})}),n}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&(this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}function SA({isPaused:t,timeSpeed:e,showOrbits:n,showStars:i,showNames:r,showBloom:s,showLensFlare:a,globalScale:o,isMusicPlaying:l,onTogglePause:c,onSpeedChange:u,onZoomChange:d,onToggleOrbits:h,onToggleStars:p,onToggleNames:v,onToggleBloom:x,onToggleLensFlare:m,onResetView:f,onToggleMusic:g,onBlackHole:_}){return J.jsxs("div",{className:"controls",children:[J.jsxs("div",{className:"control-group",children:[J.jsxs("div",{className:"slider-row",children:[J.jsx("label",{htmlFor:"speedControl",children:"速度"}),J.jsx("input",{type:"range",id:"speedControl",min:"0",max:"10",step:"0.1",value:e,onChange:y=>u(parseFloat(y.target.value))}),J.jsxs("span",{className:"slider-value",children:[e.toFixed(1),"×"]})]}),J.jsxs("div",{className:"slider-row",children:[J.jsx("label",{htmlFor:"zoomControl",children:"缩放"}),J.jsx("input",{type:"range",id:"zoomControl",min:"0.5",max:"3.0",step:"0.1",value:o,onChange:y=>d(parseFloat(y.target.value))}),J.jsxs("span",{className:"slider-value",children:[o.toFixed(1),"×"]})]})]}),J.jsxs("div",{className:"control-group control-buttons",children:[J.jsx("button",{className:t?"ctrl-btn active":"ctrl-btn",onClick:c,children:t?"▶ 播放":"⏸ 暂停"}),J.jsx("button",{className:"ctrl-btn",onClick:f,children:"⟲ 重置"}),J.jsx("button",{className:"ctrl-btn bh-btn",onClick:_,title:"进入 GARGANTUA 黑洞",children:"◉ 探索黑洞"})]}),J.jsxs("div",{className:"control-group control-toggles",children:[J.jsx("button",{className:n?"toggle-btn active":"toggle-btn",onClick:h,children:"轨道"}),J.jsx("button",{className:i?"toggle-btn active":"toggle-btn",onClick:p,children:"星空"}),J.jsx("button",{className:r?"toggle-btn active":"toggle-btn",onClick:v,children:"名称"}),J.jsx("button",{className:s?"toggle-btn active":"toggle-btn",onClick:x,children:"辉光"}),J.jsx("button",{className:a?"toggle-btn active":"toggle-btn",onClick:m,children:"光晕"}),J.jsx("button",{className:l?"toggle-btn active":"toggle-btn",onClick:g,children:l?"♪ 静音":"♪ 音乐"})]})]})}const f0={太阳:"textures/sun.jpg",月球:"textures/moon.jpg",水星:"textures/mercury.jpg",金星:"textures/venus_atmosphere.jpg",地球:"textures/earth.jpg",火星:"textures/mars.jpg",木星:"textures/jupiter.jpg",土星:"textures/saturn.jpg",天王星:"textures/uranus.jpg",海王星:"textures/neptune.jpg",冥王星:"textures/pluto.jpg"},MA=[["直径","realDiameter"],["距太阳","realDistance"],["公转","orbitPeriod"],["自转","rotationPeriod"],["温度","temperature"],["卫星","moons"],["大气","atmosphere"]];function EA({celestial:t,onClose:e,onCancelTracking:n}){if(!t)return null;const i=f0[t.name]?"./"+f0[t.name]:null;return J.jsxs("div",{className:"planet-info visible",children:[J.jsxs("div",{className:"planet-info-header",style:{background:`linear-gradient(135deg, ${t.color||"#444"} 0%, rgba(20,22,40,0.9) 75%)`},children:[i&&J.jsx("img",{className:"planet-info-thumb",src:i,alt:t.name}),J.jsxs("div",{className:"planet-info-title",children:[J.jsx("span",{className:"planet-info-name",children:t.name}),t.type&&J.jsx("span",{className:"planet-info-type",children:t.type})]})]}),t.fact&&J.jsx("p",{className:"planet-info-fact",children:t.fact}),J.jsx("div",{className:"info-grid",children:MA.map(([r,s])=>t[s]?J.jsxs("div",{className:"info-item",children:[J.jsx("span",{className:"ii-k",children:r}),J.jsx("span",{className:"ii-v",children:t[s]})]},s):null)}),J.jsxs("div",{className:"button-container",children:[J.jsx("button",{className:"close-info-btn",onClick:e,children:"关闭信息"}),J.jsx("button",{className:"cancel-tracking-btn",onClick:n,children:"取消追踪"})]})]})}const wA=[{name:"太阳",emoji:"☀️"}],TA=[{name:"水星",emoji:"☿️"},{name:"金星",emoji:"♀️"},{name:"地球",emoji:"🌍"},{name:"火星",emoji:"♂️"},{name:"木星",emoji:"♃"},{name:"土星",emoji:"🪐"},{name:"天王星",emoji:"⛢"},{name:"海王星",emoji:"♆"},{name:"冥王星",emoji:"⯓"}],AA=[{name:"月球",emoji:"🌙"},{name:"木卫一（伊奥）",emoji:"🌋"},{name:"木卫二（欧罗巴）",emoji:"🧊"},{name:"木卫三（盖尼米德）",emoji:"🪨"},{name:"木卫四（卡里斯托）",emoji:"🌑"},{name:"土卫六（泰坦）",emoji:"🌫️"},{name:"土卫二（恩克拉多斯）",emoji:"❄️"}],bA=[{name:"谷神星",emoji:"🪨"},{name:"灶神星",emoji:"☄️"},{name:"智神星",emoji:"💫"},{name:"婚神星",emoji:"✨"}],CA=[{key:"stars",title:"恒星",items:wA},{key:"planets",title:"行星",items:TA},{key:"moons",title:"卫星",items:AA},{key:"asteroids",title:"小行星",items:bA}];function RA({onSelect:t}){const[e,n]=be.useState(!1),[i,r]=be.useState(null),[s,a]=be.useState({}),o=u=>a(d=>({...d,[u]:!d[u]})),l=u=>{r(u),t(u),n(!1)},c=u=>J.jsxs("div",{className:"nav-item"+(i===u.name?" active":""),"data-name":u.name,onClick:()=>l(u.name),children:[u.emoji," ",u.name]},u.name);return J.jsxs(J.Fragment,{children:[J.jsx("button",{className:"navigation-btn",onClick:()=>n(u=>!u),title:"天体导航",children:"☰ 导航"}),e&&J.jsxs("div",{className:"navigation-panel",children:[J.jsxs("div",{className:"navigation-panel-header",children:[J.jsx("span",{children:"选择天体进行追踪"}),J.jsx("button",{className:"close-nav-btn",onClick:()=>n(!1),children:"✕"})]}),J.jsx("div",{className:"navigation-panel-content",children:CA.map(u=>J.jsxs("div",{className:"nav-category",children:[J.jsxs("div",{className:"nav-category-title",onClick:()=>o(u.key),style:{cursor:"user-select: none"},children:[J.jsx("span",{className:"nav-collapse-icon",children:s[u.key]?"▸":"▾"}),u.title]}),!s[u.key]&&J.jsx("div",{className:"nav-items",children:u.items.map(c)})]},u.key))})]})]})}function PA({zoomLevel:t,speedLevel:e}){return J.jsxs(J.Fragment,{children:[J.jsxs("div",{className:"zoom-level",children:["缩放: ",typeof t=="number"?t.toFixed(2):"1.00","x"]}),J.jsxs("div",{className:"speed-level",children:["速度: ",typeof e=="number"?e.toFixed(1):"1.0","x"]})]})}function LA({positions:t}){return t?J.jsx(J.Fragment,{children:Object.entries(t).map(([e,n])=>n.visible&&J.jsx("div",{className:"planet-label",style:{left:`${n.x}px`,top:`${n.y-20}px`,display:"block"},children:e},e))}):null}function DA({zoomLevel:t,speedLevel:e,isPaused:n}){return J.jsxs("header",{className:"app-header",children:[J.jsxs("div",{className:"app-title",children:[J.jsx("span",{className:"app-title-main",children:"太阳系"}),J.jsx("span",{className:"app-title-sub",children:"3D · SOLAR SYSTEM"})]}),J.jsxs("div",{className:"app-stats",children:[J.jsxs("div",{className:"stat-chip",children:[J.jsx("span",{className:"stat-dot"}),n?"已暂停":"运行中"]}),J.jsxs("div",{className:"stat-chip",children:["速度 ",typeof e=="number"?e.toFixed(1):"1.0","×"]}),J.jsxs("div",{className:"stat-chip",children:["缩放 ",typeof t=="number"?t.toFixed(2):"1.00","×"]})]})]})}function NA({visible:t,progress:e=0}){return t?J.jsxs("div",{className:"loading-screen",children:[J.jsx("div",{className:"loading-orbit",children:J.jsx("span",{className:"loading-planet"})}),J.jsx("div",{className:"loading-title",children:"太阳系 3D 模拟"}),J.jsx("div",{className:"loading-sub",children:"正在点亮星辰…"}),J.jsx("div",{className:"loading-bar",children:J.jsx("div",{className:"loading-bar-fill",style:{width:`${Math.min(e,100)}%`}})})]}):null}const UA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,IA=`
precision highp float;

varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform vec3  uCamPos;
uniform vec3  uCamTarget;
uniform float uFov;
uniform float uSteps;
uniform float uRotSign;
uniform float uDebug;
uniform float uDin;
uniform float uDout;
uniform float uDopMax;
uniform float uOpNear;
uniform float uOpFar;
uniform float uDiskBright;
uniform float uStarBright;
uniform float uSkyFloor;
uniform float uRotSpeed;

#define RS 1.0

// ---------------------------------------------------------------- hashes
float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}

// ------------------------------------------------------- value noise / fbm
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z);
}

// 5 层 FBM
float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int k = 0; k < 5; k++) {
    s += a * vnoise(p);
    p = p * 2.03 + 11.3;
    a *= 0.5;
  }
  return s;
}

// ----------------------------------------------------------- 颜色
// 电影化黑体色 ramp：暗红 → 橙 → 暖白 → 蓝白
vec3 blackbody(float t) {
  vec3 c = mix(vec3(0.55, 0.06, 0.01), vec3(1.0, 0.42, 0.10), smoothstep(0.0, 0.55, t));
  c = mix(c, vec3(1.0, 0.86, 0.55), smoothstep(0.50, 1.05, t));
  c = mix(c, vec3(0.85, 0.92, 1.25), smoothstep(1.05, 1.90, t));
  return c;
}

mat3 rotAxis(vec3 a, float t) {
  a = normalize(a);
  float c = cos(t), s = sin(t), ic = 1.0 - c;
  return mat3(
    ic*a.x*a.x + c,     ic*a.x*a.y + s*a.z, ic*a.x*a.z - s*a.y,
    ic*a.x*a.y - s*a.z, ic*a.y*a.y + c,     ic*a.y*a.z + s*a.x,
    ic*a.x*a.z + s*a.y, ic*a.y*a.z - s*a.x, ic*a.z*a.z + c);
}

// ----------------------------------------------------------- 星系与星场
vec3 galaxy(vec3 dir) {
  vec3 n  = normalize(vec3(0.25, 1.0, 0.15));
  vec3 t1 = normalize(cross(n, vec3(0.0, 0.0, 1.0)));
  vec3 t2 = cross(n, t1);
  float w = dot(dir, n);
  float band = exp(-w * w * 7.0);
  vec2 uv = vec2(dot(dir, t1), dot(dir, t2));
  float cloud  = fbm(vec3(uv * 2.6, 7.0));
  float cloud2 = fbm(vec3(uv * 5.4 + cloud * 1.8, 13.0));
  float dust   = fbm(vec3(uv * 4.2 + 4.7, 21.0));
  float dustMask = smoothstep(0.42, 0.78, dust);
  vec3 col = mix(vec3(0.04, 0.07, 0.20), vec3(0.42, 0.24, 0.52),
                 smoothstep(0.30, 0.92, cloud2));
  float inten = band * (0.30 + 0.90 * cloud) * (1.0 - 0.62 * dustMask) * 1.15;
  return col * inten;
}

vec3 starLayer(vec3 dir, mat3 rot, float scale, float thresh, float soft) {
  vec3 p = rot * dir * scale;
  vec3 id = floor(p);
  vec3 f = fract(p);
  float h = hash13(id + 17.17);
  if (h < thresh) return vec3(0.0);
  vec3 sp = vec3(0.5) + 0.62 * (hash33(id + 3.71) - 0.5);
  float d2 = dot(f - sp, f - sp);
  float core = exp(-d2 * soft);
  float halo = exp(-d2 * soft * 0.10) * 0.22;
  float bright = 0.30 + 1.6 * pow(hash13(id + 9.3), 6.0);
  vec3 tint = mix(vec3(0.72, 0.84, 1.25), vec3(1.20, 0.95, 0.72), hash13(id + 5.5));
  return tint * (core + halo) * bright * smoothstep(thresh, thresh + 0.015, h);
}

vec3 starField(vec3 dir) {
  vec3 s = vec3(0.0);
  s += starLayer(dir, rotAxis(vec3(0.2, 1.0, 0.1), 0.0),  9.0, 0.952, 230.0);
  s += starLayer(dir, rotAxis(vec3(0.5, 0.8, 0.3), 1.9),  13.0, 0.952, 270.0);
  s += starLayer(dir, rotAxis(vec3(0.9, 0.3, 0.6), 3.7),  17.0, 0.953, 310.0);
  s += starLayer(dir, rotAxis(vec3(0.1, 0.6, 0.9), 5.1),  23.0, 0.968, 350.0) * 0.8;
  // 稀有亮星：更大更柔的暖/蓝白光晕
  vec3 p = rotAxis(vec3(0.4, 1.0, 0.2), 0.7) * dir * 4.0;
  vec3 id = floor(p);
  vec3 f = fract(p);
  float h = hash13(id + 41.3);
  if (h > 0.9975) {
    vec3 sp = vec3(0.5) + 0.5 * (hash33(id + 11.1) - 0.5);
    float d2 = dot(f - sp, f - sp);
    vec3 tint = mix(vec3(0.80, 0.90, 1.30), vec3(1.25, 1.00, 0.80), hash13(id + 2.2));
    s += tint * (exp(-d2 * 150.0) * 3.2 + exp(-d2 * 20.0) * 0.85);
  }
  return s;
}

vec3 background(vec3 dir) {
  vec3 col = uSkyFloor * vec3(0.10, 0.13, 0.28);
  col += galaxy(dir);
  col += starField(dir);
  return col * uStarBright;
}

// -------------------------------------------------------------- 吸积盘
// Novikov-Thorne 风格辐射通量（ISCO = 3 RS）
float ntFlux(float r) {
  float x = max(r, 3.001);
  return pow(x / 3.0, -3.0) * (1.0 - sqrt(3.0 / x));
}

// 湍流图案：翘曲 FBM 云 + 切向条纹 + 暗 lane（归一化旋转坐标，无接缝）
float diskPattern(vec3 q, float qr, out float turbOut) {
  vec2 n2 = q.xz / qr;
  float omega = uRotSign * 1.1 * uRotSpeed * pow(3.0 / qr, 1.5);
  float ph = omega * uTime;
  float cs = cos(ph), sn = sin(ph);
  vec2 rn = vec2(n2.x * cs - n2.y * sn, n2.x * sn + n2.y * cs);
  float det = 1.0 - smoothstep(4.0, 18.0, qr);
  float warp = fbm(vec3(rn * 1.5, 3.0));
  float rad = qr * 0.55;
  float turb = fbm(vec3(rn * 2.3 + (warp - 0.5) * 1.4 * det, rad * 0.4));
  turbOut = turb;
  turb = 0.55 + 0.45 * smoothstep(0.22, 0.88, turb);
  float arcA = fbm(vec3(rn * 3.1 + (warp - 0.5) * 2.2 * det, rad * 3.4 + 5.0));
  float arcB = fbm(vec3(rn * 22.0 + (warp - 0.5) * 3.0 * det, rad * 6.0 + 9.0));
  float streak = mix(arcA, arcA * 0.55 + arcB * 0.80, det);
  streak = 0.42 + 0.58 * smoothstep(0.20, 0.86, streak);
  float lane = fbm(vec3(rn * 5.2 + 7.3, rad * 1.15 + 2.0));
  float laneMask = 0.58 + 0.42 * smoothstep(0.30, 0.82, lane);
  return turb * streak * laneMask;
}

vec3 diskEmission(vec3 q, float qr, vec3 rayDir, out float patOut) {
  float flux = ntFlux(qr);
  float temp = pow(flux * 10.0, 0.25);
  float pat = diskPattern(q, qr, patOut);
  float fade = 1.0 - smoothstep(uDout - 14.0, uDout, qr);
  float I = flux * 11.0 * pat;
  I += exp(-pow((qr - 3.1) * 3.0, 2.0)) * 2.8;
  I *= fade;
  // 相对论效应
  float ang = atan(q.z, q.x);
  vec3 tdir = normalize(vec3(-sin(ang), 0.0, cos(ang))) * uRotSign;
  float beta = sqrt(0.5 / qr);
  float gamma = 1.0 / sqrt(max(1.0 - beta * beta, 1e-4));
  float D = 1.0 / (gamma * (1.0 - dot(tdir * beta, rayDir)));
  D = clamp(D, 0.50, uDopMax);
  float g = sqrt(max(1.0 - RS / qr, 0.0));
  return blackbody(temp * D * g) * I * (D * D * D * g);
}

// 无湍流的热雾（体积晕）
vec3 diskGlow(float r) {
  float flux = ntFlux(r);
  float temp = pow(flux * 10.0, 0.25);
  float g = sqrt(max(1.0 - RS / r, 0.0));
  float fade = 1.0 - smoothstep(uDout - 14.0, uDout, r);
  float I = flux * 7.0 + exp(-pow((r - 3.1) * 3.0, 2.0)) * 1.4;
  return blackbody(temp * g) * I * g * fade;
}

// ------------------------------------------------------------------- main
void main() {
  vec2 p = (vUv * uRes - 0.5 * uRes) / uRes.y;
  vec3 ro = uCamPos;
  vec3 ww = normalize(uCamTarget - ro);
  vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
  vec3 vv = cross(uu, ww);
  vec3 rd = normalize(p.x * uu + p.y * vv + uFov * ww);

  vec3 pos = ro;
  vec3 vel = rd;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  float minR = 1e5;
  float lastR = length(ro);
  float stepsUsed = 0.0;
  float crossCount = 0.0;
  float validCount = 0.0;
  float firstAng = 0.0;
  float firstRad = 0.0;
  float firstPat = 0.0;
  int dbg = int(uDebug + 0.5);

  for (int i = 0; i < 600; i++) {
    if (float(i) >= uSteps) break;
    stepsUsed += 1.0;
    float r = length(pos);
    if (r < 1.03 * RS) { trans = 0.0; lastR = r; break; }
    if (r > 45.0 && dot(pos, vel) > 0.0) { lastR = r; break; }
    minR = min(minR, r);

    vec3 h = cross(pos, vel);
    float h2 = dot(h, h);
    float r2 = r * r;
    vec3 acc = -1.5 * RS * h2 / (r2 * r2 * r) * pos;
    float dt = max(0.012, r * mix(0.02, 0.06, smoothstep(6.0, 20.0, r)));

    // 薄体积盘雾
    if (dbg != 2) {
      float absY = abs(pos.y);
      if (absY < 0.45 && r > uDin && r < uDout) {
        float density = exp(-absY * 30.0) * 0.03 *
                        (1.0 - smoothstep(10.0, max(uDout - 1.0, 11.0), r));
        col += trans * diskGlow(r) * density * dt * uDiskBright;
      }
    }

    vel = normalize(vel + acc * dt);
    vec3 npos = pos + vel * dt;

    // 吸积盘赤道面穿越（y = 0）
    if (pos.y * npos.y <= 0.0) {
      crossCount += 1.0;
      float t = abs(pos.y) / (abs(pos.y) + abs(npos.y) + 1e-5);
      vec3 q = mix(pos, npos, t);
      float qr = length(q.xz);
      if (qr > uDin && qr < uDout) {
        validCount += 1.0;
        float ang = atan(q.z, q.x);
        float pat = 0.0;
        vec3 em = vec3(0.0);
        if (dbg != 2) em = diskEmission(q, qr, vel, pat);
        if (validCount < 1.5) { firstAng = ang; firstRad = qr; firstPat = pat; }
        if (dbg != 2) {
          float op = mix(uOpFar, uOpNear, 1.0 - smoothstep(4.0, 13.0, qr));
          op *= 1.0 - smoothstep(uDout - 14.0, uDout, qr);
          col += trans * op * em * uDiskBright;
          trans *= 1.0 - op;
        }
      }
    }

    pos = npos;
    lastR = r;
    if (trans < 0.02) break;
  }

  // 1.55 RS 附近的细光子环（临界曲线）
  if (dbg == 0 || dbg == 1) {
    float ring = exp(-pow((minR - 1.55) * 4.0, 2.0));
    col += trans * ring * vec3(1.0, 0.92, 0.80) * 0.05;
  }

  // 沿最终逃逸方向采样透镜化背景
  if (dbg == 0 || dbg == 2) {
    if (trans > 0.0) {
      float dim = clamp((lastR - 1.03) * 0.45, 0.45, 1.0);
      col += trans * background(normalize(vel)) * dim;
    }
  }

  // ------------------------------------------------------- 调试输出
  if (dbg == 3) {
    float t = clamp(stepsUsed / uSteps, 0.0, 1.0);
    vec3 hc = mix(vec3(0.02, 0.04, 0.18), vec3(0.0, 0.75, 0.9), smoothstep(0.0, 0.55, t));
    col = mix(hc, vec3(1.0, 0.35, 0.05), smoothstep(0.55, 1.0, t));
  } else if (dbg == 4) {
    float g = clamp((firstRad - uDin) / (uDout - uDin), 0.0, 1.0);
    col = validCount > 0.5 ? vec3(g) : vec3(0.0);
  } else if (dbg == 5) {
    col = validCount > 0.5 ? vec3(firstPat) : vec3(0.0);
  } else if (dbg == 6) {
    col = vec3(clamp(minR / 12.0, 0.0, 1.0), clamp(crossCount / 4.0, 0.0, 1.0), 0.0);
  } else if (dbg == 7) {
    if (validCount < 0.5) col = vec3(0.0);
    else if (validCount < 1.5) col = vec3(0.10, 0.30, 1.0);
    else if (validCount < 2.5) col = vec3(0.10, 0.90, 0.30);
    else col = vec3(1.0, 0.15, 0.10);
  } else if (dbg == 8) {
    col = validCount > 0.5
      ? 0.5 + 0.5 * sin(firstAng + vec3(0.0, 2.094, 4.188))
      : vec3(0.0);
  } else if (dbg == 9) {
    col = validCount > 0.5 ? vec3(0.5 + 0.5 * sin(firstRad * 2.2)) : vec3(0.0);
  }

  gl_FragColor = vec4(col, 1.0);
}
`,FA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,OA=`
precision highp float;

varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2  uRes;
uniform float uTime;
uniform float uVignette;
uniform float uGrain;
uniform float uCA;

vec3 aces(vec3 x) {
  x *= 0.95;
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 uv = vUv;
  vec2 dir = uv - 0.5;
  float ca = uCA * dot(dir, dir);
  vec3 col;
  col.r = texture2D(tDiffuse, uv + dir * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - dir * ca).b;

  col = aces(col);

  float aspect = uRes.x / uRes.y;
  float vig = 1.0 - smoothstep(0.30, 1.30, length(dir * vec2(aspect, 1.0)) * 1.15);
  col *= mix(1.0, vig, uVignette);

  float gr = fract(sin(dot(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0,
                           vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  col += gr * uGrain * (1.0 - 0.5 * col);

  gl_FragColor = vec4(col, 1.0);
}
`,za=Math.PI/180,Gu="gargantua.embedded.v1",ps={standard:{name:"标准",short:"标准",steps:200,dpr:1},high:{name:"高",short:"高",steps:320,dpr:1.5},cinematic:{name:"电影级",short:"电影",steps:460,dpr:2}},Ea=["standard","high","cinematic"],d0={poster:{name:"海报 38°",r:24,inc:38,az:30},edge:{name:"盘面",r:26,inc:6,az:10},polar:{name:"极向",r:28,inc:82,az:0},close:{name:"近距掠过",r:9,inc:14,az:55}},h0=["poster","edge","polar","close"],fl=[58,36,26,14,20,34,46,36],dl=[12,6,24,14,52,80,35,8],hl=[-30,10,55,100,150,200,270,330],Vu=(t,e,n)=>Math.min(n,Math.max(e,t)),p0=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function m0(t,e,n,i){const r=e*za,s=n*za;return i.set(t*Math.cos(r)*Math.sin(s),t*Math.sin(r),t*Math.cos(r)*Math.cos(s)),i}function Wu(t,e,n,i,r){const s=r*r,a=s*r;return .5*(2*e+(-t+n)*r+(2*t-5*e+4*n-i)*s+(-t+3*e-3*n+i)*a)}const Ln=(t,e)=>t[(e%t.length+t.length)%t.length];function ju(t,e){for(;t-e>180;)t-=360;for(;t-e<-180;)t+=360;return t}class kA{constructor(e){dh(this,"animate",()=>{this.rafId=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.1);this.tShader+=e,this.flight.active?this.updateFlight(e):this.cineMode&&(this.cineTime+=e,this.updateCine(e)),this.controls.update(),this.rayUni.uTime.value=this.tShader,this.rayUni.uCamPos.value.copy(this.camera.position),this.rayUni.uCamTarget.value.copy(this.controls.target),this.compUni.uTime.value=this.tShader;try{this.composer.render()}catch(n){cancelAnimationFrame(this.rafId),this.rafId=0,this.renderFaulted||(this.renderFaulted=!0,this.showFatal("渲染故障","渲染器报告不可恢复错误："+String(n&&n.message||n).slice(0,400)+" — 请重新初始化或降低画质。"));return}if(this.trackFps(e),!this.readyFired){this.readyFired=!0;const n=this.$("[data-intro]");n&&(n.classList.add("done"),setTimeout(()=>n.remove(),1400));const i=this.$("[data-hintbar]");i&&setTimeout(()=>{i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),1e4)},2500)}});this.container=e,this.rafId=0,this.clock=new p_,this.tShader=0,this.cineTime=0,this.cineBlend=null,this.cineMode=!1,this.tierName="high",this.fpsSmooth=0,this._fpsFrames=0,this._fpsTime=0,this._lowFpsSec=0,this._lowFpsToasted=!1,this.readyFired=!1,this.contextLost=!1,this.contextRestored=!1,this.renderFaulted=!1,this.flight={active:!1,t:0,dur:2.6,from:new P,to:new P},this.bootTime=performance.now(),this.P={},this._timers=[],this._listeners=[],this.bufSize=new ue,this.tmpVec=new P}buildDOM(){const e=this.container;e.innerHTML=`
      <div class="bh2-hud">
        <div class="bh2-title">
          <h1>GARGANTUA</h1>
          <div class="bh2-sub">超大质量黑洞 · 1.0 × 10⁸ M☉</div>
          <div class="bh2-sub2">史瓦西度规 // 零测地线光线追踪</div>
        </div>
        <div class="bh2-clock">
          <div class="bh2-label">探索时长</div>
          <div class="bh2-clockval">00:00:00</div>
        </div>
        <div class="bh2-telemetry">
          <div class="bh2-row"><span class="k">观测距离</span><span class="v" data-t="dist">—</span></div>
          <div class="bh2-row"><span class="k">盘面倾角</span><span class="v" data-t="inc">—</span></div>
          <div class="bh2-row"><span class="k">测地线步数</span><span class="v" data-t="steps">—</span></div>
          <div class="bh2-row"><span class="k">渲染档位</span><span class="v" data-t="prof">—</span></div>
          <div class="bh2-row"><span class="k">帧率</span><span class="v" data-t="fps">—</span></div>
        </div>
      </div>

      <div class="bh2-deck">
        <div class="bh2-deck-title"><span data-deckmode>电影镜头序列</span><span class="bh2-dot"></span></div>
        <button class="bh2-btn wide" data-act="cine">▶ 电影镜头序列</button>
        <div class="bh2-grid2">
          ${h0.map(n=>`<button class="bh2-btn" data-preset="${n}">${d0[n].name}</button>`).join("")}
        </div>
        <div class="bh2-grid4">
          <button class="bh2-btn" data-act="orbit">自动环绕</button>
          <button class="bh2-btn" data-act="quality">高</button>
          <button class="bh2-btn" data-act="params">参数</button>
          <button class="bh2-btn" data-act="hud">界面</button>
        </div>
        <button class="bh2-btn wide" data-act="sound">🔇 声音：关</button>
        <div class="bh2-deck-hint" data-deckhint>拖拽即可接管镜头</div>
      </div>

      <div class="bh2-params hidden">
        <div class="bh2-p-head"><span>参数</span><button class="bh2-btn" data-act="reset">重置</button></div>
        <div class="bh2-p-rows" data-prows></div>
      </div>

      <div class="bh2-hintbar" data-hintbar>拖拽环绕 · 滚轮缩放 · 1-4 视角 · C 电影 · R 环绕 · P 参数 · M 声音 · H 界面</div>
      <div class="bh2-toast" data-toast></div>

      <div class="bh2-intro" data-intro>
        <div class="bh2-intro-card">
          <div class="bh2-intro-tag">实时相对论光线追踪</div>
          <div class="bh2-intro-title">GARGANTUA</div>
          <div class="bh2-intro-quote">“不要温和地走进那个良夜。”</div>
        </div>
      </div>

      <div class="bh2-fatal" data-fatal>
        <div class="bh2-fatal-card">
          <div class="bh2-fatal-title" data-fataltitle>信号丢失</div>
          <div class="bh2-fatal-msg" data-fatalmsg></div>
          <div class="bh2-fatal-btns">
            <button class="bh2-btn" data-act="lower">▼ 降低画质</button>
            <button class="bh2-btn" data-act="retry">↻ 重新初始化</button>
          </div>
        </div>
      </div>
    `,this.$=n=>e.querySelector(n),this.$$=n=>Array.from(e.querySelectorAll(n))}initThree(){const e=document.createElement("canvas");e.className="bh2-canvas",this.container.insertBefore(e,this.container.firstChild),this.canvas=e,this.renderer=new eh({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=ui,this.renderer.toneMapping=Ti,this.renderer.debug.onShaderError=(a,o,l,c)=>{const u=(a.getShaderInfoLog(c)||"")+`
`+(a.getShaderInfoLog(l)||"");this.showFatal("着色器编译失败",(u.trim()||"未知着色器错误").slice(0,900))},this._onCtxLost=a=>{a.preventDefault(),this.contextLost=!0,this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0),this.showFatal("WEBGL 上下文丢失","GPU 上下文已丢失，渲染停止。请重新初始化，或先降低画质减轻负载。")},this._onCtxRestored=()=>{this.contextRestored||(this.contextRestored=!0,location.reload())},e.addEventListener("webglcontextlost",this._onCtxLost),e.addEventListener("webglcontextrestored",this._onCtxRestored),this.fsCam=new Pc(-1,1,1,-1,0,1),this.fsScene=new o_,this.rayUni={uRes:{value:new ue(1,1)},uTime:{value:0},uCamPos:{value:new P(4.49,2.72,25.46)},uCamTarget:{value:new P(0,0,0)},uFov:{value:1/Math.tan(44*za/2)},uSteps:{value:320},uRotSign:{value:1},uDebug:{value:0},uDin:{value:2.75},uDout:{value:40},uDopMax:{value:1.85},uOpNear:{value:.9},uOpFar:{value:.8},uDiskBright:{value:1},uStarBright:{value:1},uSkyFloor:{value:.04},uRotSpeed:{value:1}},this.fsScene.add(new ht(new Rc(2,2),new pt({vertexShader:UA,fragmentShader:IA,uniforms:this.rayUni,depthTest:!1,depthWrite:!1}))),this.camera=new pn(44,1,.01,200),this.camera.position.set(4.49,2.72,25.46),this.controls=new m_(this.camera,e),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=1.62,this.controls.maxDistance=150,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.7,this.controls.enablePan=!1,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.12,this.renderer.getDrawingBufferSize(this.bufSize);const n=this.renderer.getContext(),i=this.renderer.capabilities.isWebGL2&&!!(n.getExtension("EXT_color_buffer_float")||n.getExtension("EXT_color_buffer_half_float")),r=new kn(this.bufSize.x||2,this.bufSize.y||2,{type:i?li:Ai});this._halfOK=i,this.composer=new x_(this.renderer,r),this.composer.addPass(new y_(this.fsScene,this.fsCam)),this.bloomPass=new kr(new ue(this.bufSize.x||2,this.bufSize.y||2),.55,.35,.55),this.composer.addPass(this.bloomPass);const s=new Mr({uniforms:{tDiffuse:{value:null},uRes:{value:new ue(1,1)},uTime:{value:0},uVignette:{value:1},uGrain:{value:.045},uCA:{value:.0028}},vertexShader:FA,fragmentShader:OA});this.composer.addPass(s),this.compUni=s.uniforms}buildParamDefs(){return[{key:"steps",label:"测地线步数",min:60,max:600,step:10,def:null,fmt:e=>e.toFixed(0),apply:e=>{this.rayUni.uSteps.value=e}},{key:"din",label:"吸积盘内缘",min:2,max:4,step:.05,def:2.75,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uDin.value=e}},{key:"dout",label:"吸积盘外缘",min:10,max:80,step:1,def:40,fmt:e=>e.toFixed(0),apply:e=>{this.rayUni.uDout.value=e}},{key:"dopMax",label:"多普勒增亮上限",min:1,max:3,step:.05,def:1.85,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uDopMax.value=e}},{key:"opNear",label:"盘不透明度·内",min:.5,max:1,step:.01,def:.9,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uOpNear.value=e}},{key:"opFar",label:"盘不透明度·外",min:.3,max:1,step:.01,def:.8,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uOpFar.value=e}},{key:"diskBright",label:"盘面亮度",min:.2,max:3,step:.05,def:1,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uDiskBright.value=e}},{key:"starBright",label:"星场亮度",min:.2,max:3,step:.05,def:1,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uStarBright.value=e}},{key:"skyFloor",label:"天空底光",min:0,max:.15,step:.005,def:.04,fmt:e=>e.toFixed(3),apply:e=>{this.rayUni.uSkyFloor.value=e}},{key:"rotSpeed",label:"盘面转速",min:0,max:3,step:.05,def:1,fmt:e=>e.toFixed(2),apply:e=>{this.rayUni.uRotSpeed.value=e}},{key:"bloomStrength",label:"泛光强度",min:0,max:1.5,step:.05,def:.55,fmt:e=>e.toFixed(2),apply:e=>{this.bloomPass.strength=e}},{key:"bloomRadius",label:"泛光半径",min:0,max:1,step:.05,def:.35,fmt:e=>e.toFixed(2),apply:e=>{this.bloomPass.radius=e}},{key:"bloomThreshold",label:"泛光阈值",min:0,max:1,step:.05,def:.55,fmt:e=>e.toFixed(2),apply:e=>{this.bloomPass.threshold=e}},{key:"vignette",label:"暗角",min:0,max:1.5,step:.05,def:1,fmt:e=>e.toFixed(2),apply:e=>{this.compUni.uVignette.value=e}},{key:"grain",label:"胶片颗粒",min:0,max:.15,step:.005,def:.045,fmt:e=>e.toFixed(3),apply:e=>{this.compUni.uGrain.value=e}},{key:"ca",label:"色差",min:0,max:.01,step:5e-4,def:.0028,fmt:e=>e.toFixed(4),apply:e=>{this.compUni.uCA.value=e}},{key:"fov",label:"镜头视场角",min:25,max:80,step:1,def:44,fmt:e=>e.toFixed(0)+"°",apply:e=>{this.camera.fov=e,this.camera.updateProjectionMatrix(),this.rayUni.uFov.value=1/Math.tan(e*za/2)}},{key:"maxDist",label:"最大距离",min:40,max:300,step:5,def:150,fmt:e=>e.toFixed(0)+" rs",apply:e=>{this.controls.maxDistance=e}},{key:"orbitSpeed",label:"自动环绕速度",min:0,max:1,step:.02,def:.12,fmt:e=>e.toFixed(2),apply:e=>{this.controls.autoRotateSpeed=e}},{key:"cineSeg",label:"电影段时长",min:4,max:30,step:1,def:11,fmt:e=>e.toFixed(0)+"s",apply:()=>{}},{key:"debug",label:"调试视图",min:0,max:9,step:1,def:0,fmt:e=>e.toFixed(0),apply:e=>{this.rayUni.uDebug.value=e,this.bloomPass.enabled=Math.round(e)<=2}}]}paramDefault(e){return e.key==="steps"?ps[this.tierName].steps:e.def}loadStorage(){let e=null;try{e=JSON.parse(localStorage.getItem(Gu)||"null")}catch{e=null}e&&ps[e.tier]&&(this.tierName=e.tier);for(const n of this.paramDefs){let i=this.paramDefault(n);e&&Number.isFinite(e[n.key])&&(i=Vu(e[n.key],n.min,n.max)),this.P[n.key]=i}}saveStorage(){try{const e={tier:this.tierName};for(const n of this.paramDefs)e[n.key]=this.P[n.key];localStorage.setItem(Gu,JSON.stringify(e))}catch{}}applyParam(e,n=!0){e.apply(this.P[e.key]);const i=this.rowEls[e.key];n&&i&&(i.input.value=this.P[e.key],i.valEl.textContent=e.fmt(this.P[e.key]))}buildParamsPanel(){const e=this.$("[data-prows]");this.rowEls={};for(const n of this.paramDefs){const i=document.createElement("div");i.className="bh2-p-row";const r=document.createElement("div");r.className="bh2-p-meta";const s=document.createElement("label");s.textContent=n.label;const a=document.createElement("span");a.className="bh2-p-val",r.append(s,a);const o=document.createElement("input");o.type="range",o.min=n.min,o.max=n.max,o.step=n.step,o.addEventListener("input",()=>{this.P[n.key]=Vu(parseFloat(o.value),n.min,n.max),this.applyParam(n,!1),a.textContent=n.fmt(this.P[n.key]),this.updateTelemetry(),this.saveStorage()}),i.append(r,o),e.appendChild(i),this.rowEls[n.key]={input:o,valEl:a}}}setTier(e,n=!0){this.tierName=e;const i=ps[e];this.P.steps=i.steps,this.applyParam(this.paramDefs[0]);const r=this.$('[data-act="quality"]');r&&(r.textContent=i.short),this.resize(),this.updateTelemetry(),this.saveStorage(),n&&this.toast(`渲染档位 — ${i.name} · ${i.steps} 步`)}updateTelemetry(){if(!this.camera)return;const e=this.camera.position.length();this.setT("dist",e.toFixed(2)+" rs"),this.setT("inc",(Math.asin(Vu(this.camera.position.y/e,-1,1))/za).toFixed(1)+"°"),this.setT("steps",String(Math.round(this.P.steps))),this.setT("prof",ps[this.tierName].name),this.setT("fps",this.fpsSmooth>0?Math.round(this.fpsSmooth)+" FPS":"—")}setT(e,n){const i=this.container.querySelector(`[data-t="${e}"]`);i&&(i.textContent=n)}trackFps(e){if(this._fpsFrames++,this._fpsTime+=e,this._fpsTime>=1){const n=this._fpsFrames/this._fpsTime;this.fpsSmooth=this.fpsSmooth>0?this.fpsSmooth*.6+n*.4:n,this.fpsSmooth<24?(this._lowFpsSec++,this._lowFpsSec>=5&&!this._lowFpsToasted&&(this._lowFpsToasted=!0,this.toast("帧率偏低 — 建议降低画质"))):this._lowFpsSec=0,this._fpsFrames=0,this._fpsTime=0}}cinePosAt(e,n){const i=Math.max(1,this.P.cineSeg),r=(e/i%8+8)%8,s=Math.floor(r),a=r-s,o=Wu(Ln(fl,s-1),Ln(fl,s),Ln(fl,s+1),Ln(fl,s+2),a),l=Wu(Ln(dl,s-1),Ln(dl,s),Ln(dl,s+1),Ln(dl,s+2),a),c=Ln(hl,s),u=ju(Ln(hl,s-1),c),d=ju(Ln(hl,s+1),c),h=ju(Ln(hl,s+2),d),p=Wu(u,c,d,h,a);return m0(o,l,p,n)}updateCine(e){const n=this.cinePosAt(this.cineTime,this.tmpVec);if(this.cineBlend){this.cineBlend.t+=e;const i=p0(Math.min(this.cineBlend.t/2,1));n.lerpVectors(this.cineBlend.from,n,i),this.cineBlend.t>=2&&(this.cineBlend=null)}this.camera.position.copy(n),this.camera.lookAt(0,0,0)}flyToPreset(e){const n=d0[e];n&&(this.cineMode&&this.breakCine(),this.flight.active=!0,this.flight.t=0,this.flight.from.copy(this.camera.position),m0(n.r,n.inc,n.az,this.flight.to),this.controls.enabled=!1)}updateFlight(e){this.flight.t+=e;const n=p0(Math.min(this.flight.t/this.flight.dur,1));this.camera.position.lerpVectors(this.flight.from,this.flight.to,n),this.camera.lookAt(0,0,0),this.flight.t>=this.flight.dur&&(this.flight.active=!1,this.controls.enabled=!0)}syncDeck(){const e=this.$("[data-deckmode]");e&&(e.textContent=this.cineMode?"电影镜头序列":"自由导航");const n=this.$('[data-act="cine"]');n&&(n.classList.toggle("active",this.cineMode),n.textContent=this.cineMode?"⏸ 电影镜头序列":"▶ 电影镜头序列");const i=this.$('[data-act="orbit"]');i&&i.classList.toggle("active",this.controls.autoRotate&&!this.cineMode)}breakCine(){if(!this.cineMode)return;this.cineMode=!1,this.cineBlend=null,this.controls.enabled=!0,this.syncDeck();const e=this.$("[data-deckhint]");e&&!this._deckHintShown&&(this._deckHintShown=!0,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),6e3))}toggleCine(){if(this.cineMode){this.breakCine();return}this.flight.active=!1,this.cineMode=!0,this.controls.enabled=!1,this.controls.autoRotate=!1,this.cineBlend={t:0,from:this.camera.position.clone()},this.syncDeck()}toggleOrbit(){this.cineMode?(this.breakCine(),this.controls.autoRotate=!0):this.controls.autoRotate=!this.controls.autoRotate,this.syncDeck()}toggleParams(){const n=this.$(".bh2-params").classList.toggle("hidden"),i=this.$('[data-act="params"]');i&&i.classList.toggle("active",!n)}toggleHud(){const e=this.$(".bh2-hud").classList.toggle("off"),n=this.$('[data-act="hud"]');n&&n.classList.toggle("active",!e)}toggleSound(){if(this.soundOn)this.audioCtx&&this.masterGain.gain.setTargetAtTime(0,this.audioCtx.currentTime,.4),this.soundOn=!1;else try{this.audioCtx||this.buildAudio();const n=this.audioCtx;n.state==="suspended"&&n.resume(),this.masterGain.gain.setTargetAtTime(.5,n.currentTime,1),this.soundOn=!0}catch{this.soundOn=!1}const e=this.$('[data-act="sound"]');e&&(e.textContent=this.soundOn?"🔊 声音：开":"🔇 声音：关",e.classList.toggle("active",this.soundOn))}buildAudio(){const e=window.AudioContext||window.webkitAudioContext,n=new e;this.audioCtx=n,this.masterGain=n.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(n.destination);const i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=300,i.Q.value=.6,i.connect(this.masterGain),[[55,"sine",.5],[55.6,"sine",.5],[110.3,"triangle",.14],[164.6,"triangle",.1]].forEach(([h,p,v])=>{const x=n.createOscillator();x.type=p,x.frequency.value=h;const m=n.createGain();m.gain.value=v,x.connect(m),m.connect(i),x.start()});const r=n.createOscillator();r.frequency.value=.05;const s=n.createGain();s.gain.value=130,r.connect(s),s.connect(i.frequency),r.start();const a=n.sampleRate*2,o=n.createBuffer(1,a,n.sampleRate),l=o.getChannelData(0);for(let h=0;h<a;h++)l[h]=Math.random()*2-1;const c=n.createBufferSource();c.buffer=o,c.loop=!0;const u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8;const d=n.createGain();d.gain.value=.014,c.connect(u),u.connect(d),d.connect(this.masterGain),c.start()}toast(e,n=4200){const i=this.$("[data-toast]");i&&(i.textContent=e,i.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>i.classList.remove("show"),n))}showFatal(e,n){this.$("[data-fataltitle]").textContent=e,this.$("[data-fatalmsg]").textContent=n,this.$("[data-fatal]").classList.add("show")}resize(){const e=Math.max(1,this.container.clientWidth||window.innerWidth),n=Math.max(1,this.container.clientHeight||window.innerHeight),i=Math.min(window.devicePixelRatio||1,ps[this.tierName].dpr);this.renderer.setPixelRatio(i),this.renderer.setSize(e,n),this.composer.setPixelRatio(i),this.composer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.getDrawingBufferSize(this.bufSize),this.rayUni.uRes.value.copy(this.bufSize),this.compUni.uRes.value.copy(this.bufSize)}bindEvents(){this.$$(".bh2-btn").forEach(e=>{const n=e.dataset.act,i=e.dataset.preset;i?e.addEventListener("click",()=>this.flyToPreset(i)):n==="cine"?e.addEventListener("click",()=>this.toggleCine()):n==="orbit"?e.addEventListener("click",()=>this.toggleOrbit()):n==="quality"?e.addEventListener("click",()=>{const r=Ea.indexOf(this.tierName);this.setTier(Ea[(r+1)%Ea.length])}):n==="params"?e.addEventListener("click",()=>this.toggleParams()):n==="hud"?e.addEventListener("click",()=>this.toggleHud()):n==="sound"?e.addEventListener("click",()=>this.toggleSound()):n==="reset"?e.addEventListener("click",()=>{try{localStorage.removeItem(Gu)}catch{}for(const r of this.paramDefs)this.P[r.key]=this.paramDefault(r);this.paramDefs.forEach(r=>this.applyParam(r)),this.updateTelemetry(),this.toast("参数已重置")}):n==="retry"?e.addEventListener("click",()=>location.reload()):n==="lower"&&e.addEventListener("click",()=>{const r=Ea.indexOf(this.tierName);this.tierName=Ea[Math.max(0,r-1)],this.saveStorage(),location.reload()})}),this._onManual=()=>{this.flight.active&&(this.flight.active=!1,this.controls.enabled=!0),this.breakCine()},this.canvas.addEventListener("pointerdown",this._onManual,{capture:!0}),this.canvas.addEventListener("wheel",this._onManual,{capture:!0,passive:!0}),this.controls.addEventListener("start",this._onManual),this._onKey=e=>{const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT")||e.metaKey||e.ctrlKey||e.altKey)return;const i=e.key.toLowerCase();i>="1"&&i<="4"?this.flyToPreset(h0[+i-1]):i==="c"?this.toggleCine():i==="r"?this.toggleOrbit():i==="p"?this.toggleParams():i==="m"?this.toggleSound():i==="h"&&this.toggleHud()},window.addEventListener("keydown",this._onKey),this._onVis=()=>{document.hidden?this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0):!this.rafId&&!this.contextLost&&!this.renderFaulted&&(this.clock.getDelta(),this.rafId=requestAnimationFrame(this.animate))},document.addEventListener("visibilitychange",this._onVis),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),window.addEventListener("orientationchange",this._onResize),this._timers.push(setInterval(()=>this.updateTelemetry(),250)),this._timers.push(setInterval(()=>{const e=Math.floor((performance.now()-this.bootTime)/1e3)%86400,n=this.$(".bh2-clockval");n&&(n.textContent=[3600,60,1].map(i=>String(Math.floor(e/i)%(i===3600?100:60)).padStart(2,"0")).join(":"))},1e3))}init(){this.buildDOM(),this.initThree(),this.paramDefs=this.buildParamDefs(),this.buildParamsPanel(),this.loadStorage(),this.paramDefs.forEach(e=>this.applyParam(e)),this.$('[data-act="quality"]').textContent=ps[this.tierName].short,this.cineMode=!0,this.controls.enabled=!1,this.controls.autoRotate=!1,this.updateCine(0),this.syncDeck(),this.resize(),this.bindEvents(),this.updateTelemetry(),this._halfOK||this.toast("HDR 缓冲不可用 — 已回退 LDR 渲染",6e3),this.rafId=requestAnimationFrame(this.animate),setTimeout(()=>{if(!this.readyFired){this.readyFired=!0;const e=this.$("[data-intro]");e&&(e.classList.add("done"),setTimeout(()=>e.remove(),1400))}},9e3)}dispose(){if(cancelAnimationFrame(this.rafId),this.rafId=0,this._timers.forEach(clearInterval),window.removeEventListener("keydown",this._onKey),window.removeEventListener("resize",this._onResize),window.removeEventListener("orientationchange",this._onResize),document.removeEventListener("visibilitychange",this._onVis),this.canvas&&(this.canvas.removeEventListener("webglcontextlost",this._onCtxLost),this.canvas.removeEventListener("webglcontextrestored",this._onCtxRestored)),this.audioCtx)try{this.audioCtx.close()}catch{}try{this.controls.dispose(),this.composer.dispose&&this.composer.dispose(),this.renderer.dispose()}catch{}this.container.innerHTML=""}}function BA({onExit:t}){const e=be.useRef(null),[n,i]=be.useState(!1),[r,s]=be.useState(null);return be.useEffect(()=>{if(!e.current)return;let a=null;try{a=new kA(e.current),a.init(),i(!0)}catch(l){s(String(l&&l.message||l))}const o=l=>{l.code==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o),a&&a.dispose()}},[]),J.jsxs("div",{className:"bh-overlay",children:[J.jsx("div",{ref:e,className:"bh-canvas-container"}),J.jsx("button",{className:"bh-back-btn",onClick:t,children:"← 返回太阳系 (ESC)"}),!n&&!r&&J.jsx("div",{className:"bh-loading",children:"正在进入黑洞视界…"}),r&&J.jsxs("div",{className:"bh-error",children:["初始化失败：",r]})]})}class zA extends be.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("[solar] 组件渲染异常：",e,n)}render(){return this.state.error?J.jsxs("div",{className:"fatal-error",children:[J.jsx("h2",{children:"页面出错了"}),J.jsx("pre",{children:String(this.state.error&&this.state.error.stack||this.state.error)}),J.jsx("p",{children:"请把上面这段报错发给我，我来修。"})]}):this.props.children}}function HA(){const t=be.useRef(null),e=be.useRef(null),n=be.useRef(null),[i,r]=be.useState(!1),[s,a]=be.useState(1),[o,l]=be.useState(!0),[c,u]=be.useState(!0),[d,h]=be.useState(!0),[p,v]=be.useState(!0),[x,m]=be.useState(!0),[f,g]=be.useState(!0),[_,y]=be.useState(!0),[b,A]=be.useState(!1),[T,U]=be.useState(1),[M,E]=be.useState(null),[z,Y]=be.useState(null),[re,D]=be.useState(!1),[G,X]=be.useState(!1),[$,N]=be.useState(null),[F,B]=be.useState(!1);be.useEffect(()=>{const se=We=>N(Fe=>Fe||(We.error?We.error.stack||We.error.message:We.message)),q=We=>N(Fe=>Fe||(We.reason?We.reason.stack||We.reason.message||String(We.reason):"未知异步错误"));return window.addEventListener("error",se),window.addEventListener("unhandledrejection",q),()=>{window.removeEventListener("error",se),window.removeEventListener("unhandledrejection",q)}},[]),be.useEffect(()=>{if(!t.current)return;const se=new yA(t.current);return se.init(),e.current=se,se.onLoaded=()=>X(!0),se.onPlanetClick=q=>{E({name:q.name,color:q.colorHex,type:q.type,fact:q.fact,realDiameter:q.realDiameter,realDistance:q.realDistance,orbitPeriod:q.orbitPeriod,rotationPeriod:q.rotationPeriod,temperature:q.temperature,moons:q.moonCount,atmosphere:typeof q.atmosphere=="string"?q.atmosphere:void 0})},se.onSunClick=()=>{E(N2)},se.onMoonClick=q=>{q==="月球"?E(r0):s0[q]?E(s0[q]):a0[q]?E(a0[q]):E(r0)},se.onAsteroidClick=q=>{E({name:q.name,colorHex:"#8a8578",type:"小行星",fact:q.fact,realDiameter:Math.round(q.radius*80)+"公里（估算）",realDistance:"小行星带"})},()=>{e.current&&e.current.dispose()}},[]),be.useEffect(()=>{if(!e.current)return;const se=setInterval(()=>{if(e.current){const q=e.current.getPlanetScreenPositions();Y(q)}},100);return()=>clearInterval(se)},[]),be.useEffect(()=>{const se=setTimeout(()=>X(!0),6e3);return()=>clearTimeout(se)},[]),be.useEffect(()=>{const se=q=>{q.key==="Escape"&&b&&A(!1)};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[b]);const K=be.useCallback(()=>{r(se=>{const q=!se;return e.current&&e.current.setPaused(q),q})},[]),Q=be.useCallback(se=>{a(se),e.current&&e.current.setTimeSpeed(se)},[]),j=be.useCallback(se=>{U(se),e.current&&e.current.setGlobalScale(se)},[]),Z=be.useCallback(()=>{l(se=>{const q=!se;return e.current&&e.current.setShowOrbits(q),q})},[]),de=be.useCallback(()=>{u(se=>{const q=!se;return e.current&&e.current.setShowStars(q),q})},[]),_e=be.useCallback(()=>{h(se=>{const q=!se;return e.current&&e.current.setShowNames(q),q})},[]),Se=be.useCallback(()=>{v(se=>{const q=!se;return e.current&&e.current.setBloom(q),q})},[]);be.useCallback(()=>{m(se=>{const q=!se;return e.current&&e.current.setGodRays(q),q})},[]),be.useCallback(()=>{g(se=>{const q=!se;return e.current&&e.current.setChromatic(q),q})},[]);const Ue=be.useCallback(()=>{y(se=>{const q=!se;return e.current&&e.current.setLensFlare(q),q})},[]),Ie=be.useCallback(()=>{e.current&&e.current.resetView(),E(null)},[]),Pe=be.useCallback(()=>{E(null)},[]),Ye=be.useCallback(()=>{E(null),e.current&&e.current.cancelTracking()},[]),k=be.useCallback(()=>{B(!0),e.current&&e.current.setSuspended(!0)},[]),Rt=be.useCallback(()=>{B(!1),e.current&&e.current.setSuspended(!1)},[]),Te=be.useCallback(()=>{n.current||(n.current=new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"),n.current.loop=!0),re?(n.current.pause(),D(!1)):(n.current.play().catch(console.error),D(!0))},[re]);return be.useEffect(()=>{const se=q=>{if(q.code==="Space")q.preventDefault(),K();else if(q.code==="ArrowUp"){q.preventDefault();const We=Math.min(s+.5,10);Q(We)}else if(q.code==="ArrowDown"){q.preventDefault();const We=Math.max(s-.5,.1);Q(We)}};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[K,Q,s]),J.jsxs(zA,{children:[$&&J.jsxs("div",{className:"fatal-error",children:[J.jsx("h2",{children:"页面运行时出错"}),J.jsx("pre",{children:String($)}),J.jsx("p",{children:"请把上面这段报错发给我，我来定位修复。"})]}),J.jsxs("div",{className:"app",children:[J.jsx("div",{className:"vignette"}),J.jsx("div",{className:"grain"}),J.jsx(NA,{visible:!G,progress:G?100:35}),J.jsx("div",{ref:t,className:"canvas-container"}),!b&&J.jsxs(J.Fragment,{children:[J.jsx(DA,{zoomLevel:T,speedLevel:s,isPaused:i}),J.jsx(PA,{zoomLevel:T,speedLevel:s}),J.jsx(LA,{positions:z}),J.jsx(RA,{onSelect:se=>{var q;return(q=e.current)==null?void 0:q.focusByName(se)}}),J.jsx(EA,{celestial:M,onClose:Pe,onCancelTracking:Ye}),J.jsx(SA,{isPaused:i,timeSpeed:s,showOrbits:o,showStars:c,showNames:d,showBloom:p,showLensFlare:_,globalScale:T,isMusicPlaying:re,onTogglePause:K,onSpeedChange:Q,onZoomChange:j,onToggleOrbits:Z,onToggleStars:de,onToggleNames:_e,onToggleBloom:Se,onToggleLensFlare:Ue,onResetView:Ie,onToggleMusic:Te,onBlackHole:k})]}),J.jsx("button",{className:"cinema-btn",onClick:()=>A(se=>!se),title:b?"退出影院模式 (Esc)":"影院模式：隐藏所有 UI",children:b?"✕":"◎"}),F&&J.jsx(BA,{onExit:Rt})]})]})}Xu.createRoot(document.getElementById("root")).render(J.jsx(j_.StrictMode,{children:J.jsx(HA,{})}));
