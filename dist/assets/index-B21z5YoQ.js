(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bc={exports:{}},Ia={},Pc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function A_(){if(Gp)return _t;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function v(N,ee,Pe){this.props=N,this.context=ee,this.refs=C,this.updater=Pe||M}v.prototype.isReactComponent={},v.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(N,ee,Pe){this.props=N,this.context=ee,this.refs=C,this.updater=Pe||M}var F=b.prototype=new _;F.constructor=b,E(F,v.prototype),F.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,D={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(N,ee,Pe){var ie,ge={},Se=null,Ie=null;if(ee!=null)for(ie in ee.ref!==void 0&&(Ie=ee.ref),ee.key!==void 0&&(Se=""+ee.key),ee)I.call(ee,ie)&&!S.hasOwnProperty(ie)&&(ge[ie]=ee[ie]);var pe=arguments.length-2;if(pe===1)ge.children=Pe;else if(1<pe){for(var Be=Array(pe),xt=0;xt<pe;xt++)Be[xt]=arguments[xt+2];ge.children=Be}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)ge[ie]===void 0&&(ge[ie]=pe[ie]);return{$$typeof:s,type:N,key:Se,ref:Ie,props:ge,_owner:D.current}}function q(N,ee){return{$$typeof:s,type:N.type,key:ee,ref:N.ref,props:N.props,_owner:N._owner}}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function W(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Pe){return ee[Pe]})}var Z=/\/+/g;function oe(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?W(""+N.key):ee.toString(36)}function B(N,ee,Pe,ie,ge){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Ie=!1;if(N===null)Ie=!0;else switch(Se){case"string":case"number":Ie=!0;break;case"object":switch(N.$$typeof){case s:case e:Ie=!0}}if(Ie)return Ie=N,ge=ge(Ie),N=ie===""?"."+oe(Ie,0):ie,P(ge)?(Pe="",N!=null&&(Pe=N.replace(Z,"$&/")+"/"),B(ge,ee,Pe,"",function(xt){return xt})):ge!=null&&(k(ge)&&(ge=q(ge,Pe+(!ge.key||Ie&&Ie.key===ge.key?"":(""+ge.key).replace(Z,"$&/")+"/")+N)),ee.push(ge)),1;if(Ie=0,ie=ie===""?".":ie+":",P(N))for(var pe=0;pe<N.length;pe++){Se=N[pe];var Be=ie+oe(Se,pe);Ie+=B(Se,ee,Pe,Be,ge)}else if(Be=g(N),typeof Be=="function")for(N=Be.call(N),pe=0;!(Se=N.next()).done;)Se=Se.value,Be=ie+oe(Se,pe++),Ie+=B(Se,ee,Pe,Be,ge);else if(Se==="object")throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Ie}function re(N,ee,Pe){if(N==null)return N;var ie=[],ge=0;return B(N,ie,"","",function(Se){return ee.call(Pe,Se,ge++)}),ie}function ce(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(Pe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Pe)},function(Pe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Pe)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var $={current:null},Q={transition:null},Y={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:Q,ReactCurrentOwner:D};function K(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:re,forEach:function(N,ee,Pe){re(N,function(){ee.apply(this,arguments)},Pe)},count:function(N){var ee=0;return re(N,function(){ee++}),ee},toArray:function(N){return re(N,function(ee){return ee})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_t.Component=v,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,_t.act=K,_t.cloneElement=function(N,ee,Pe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ie=E({},N.props),ge=N.key,Se=N.ref,Ie=N._owner;if(ee!=null){if(ee.ref!==void 0&&(Se=ee.ref,Ie=D.current),ee.key!==void 0&&(ge=""+ee.key),N.type&&N.type.defaultProps)var pe=N.type.defaultProps;for(Be in ee)I.call(ee,Be)&&!S.hasOwnProperty(Be)&&(ie[Be]=ee[Be]===void 0&&pe!==void 0?pe[Be]:ee[Be])}var Be=arguments.length-2;if(Be===1)ie.children=Pe;else if(1<Be){pe=Array(Be);for(var xt=0;xt<Be;xt++)pe[xt]=arguments[xt+2];ie.children=pe}return{$$typeof:s,type:N.type,key:ge,ref:Se,props:ie,_owner:Ie}},_t.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},_t.createElement=R,_t.createFactory=function(N){var ee=R.bind(null,N);return ee.type=N,ee},_t.createRef=function(){return{current:null}},_t.forwardRef=function(N){return{$$typeof:d,render:N}},_t.isValidElement=k,_t.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:ce}},_t.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},_t.startTransition=function(N){var ee=Q.transition;Q.transition={};try{N()}finally{Q.transition=ee}},_t.unstable_act=K,_t.useCallback=function(N,ee){return $.current.useCallback(N,ee)},_t.useContext=function(N){return $.current.useContext(N)},_t.useDebugValue=function(){},_t.useDeferredValue=function(N){return $.current.useDeferredValue(N)},_t.useEffect=function(N,ee){return $.current.useEffect(N,ee)},_t.useId=function(){return $.current.useId()},_t.useImperativeHandle=function(N,ee,Pe){return $.current.useImperativeHandle(N,ee,Pe)},_t.useInsertionEffect=function(N,ee){return $.current.useInsertionEffect(N,ee)},_t.useLayoutEffect=function(N,ee){return $.current.useLayoutEffect(N,ee)},_t.useMemo=function(N,ee){return $.current.useMemo(N,ee)},_t.useReducer=function(N,ee,Pe){return $.current.useReducer(N,ee,Pe)},_t.useRef=function(N){return $.current.useRef(N)},_t.useState=function(N){return $.current.useState(N)},_t.useSyncExternalStore=function(N,ee,Pe){return $.current.useSyncExternalStore(N,ee,Pe)},_t.useTransition=function(){return $.current.useTransition()},_t.version="18.3.1",_t}var Vp;function id(){return Vp||(Vp=1,Pc.exports=A_()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function R_(){if(Wp)return Ia;Wp=1;var s=id(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,m,p){var x,y={},g=null,M=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(M=m.ref);for(x in m)r.call(m,x)&&!u.hasOwnProperty(x)&&(y[x]=m[x]);if(d&&d.defaultProps)for(x in m=d.defaultProps,m)y[x]===void 0&&(y[x]=m[x]);return{$$typeof:e,type:d,key:g,ref:M,props:y,_owner:o.current}}return Ia.Fragment=n,Ia.jsx=c,Ia.jsxs=c,Ia}var Xp;function C_(){return Xp||(Xp=1,bc.exports=R_()),bc.exports}var vt=C_(),Vi=id();const b_=jm(Vi);var rl={},Lc={exports:{}},$n={},Dc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function P_(){return qp||(qp=1,(function(s){function e(Q,Y){var K=Q.length;Q.push(Y);e:for(;0<K;){var N=K-1>>>1,ee=Q[N];if(0<o(ee,Y))Q[N]=Y,Q[K]=ee,K=N;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var Y=Q[0],K=Q.pop();if(K!==Y){Q[0]=K;e:for(var N=0,ee=Q.length,Pe=ee>>>1;N<Pe;){var ie=2*(N+1)-1,ge=Q[ie],Se=ie+1,Ie=Q[Se];if(0>o(ge,K))Se<ee&&0>o(Ie,ge)?(Q[N]=Ie,Q[Se]=K,N=Se):(Q[N]=ge,Q[ie]=K,N=ie);else if(Se<ee&&0>o(Ie,K))Q[N]=Ie,Q[Se]=K,N=Se;else break e}}return Y}function o(Q,Y){var K=Q.sortIndex-Y.sortIndex;return K!==0?K:Q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var m=[],p=[],x=1,y=null,g=3,M=!1,E=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Q){for(var Y=n(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=Q)r(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(p)}}function P(Q){if(C=!1,F(Q),!E)if(n(m)!==null)E=!0,ce(I);else{var Y=n(p);Y!==null&&$(P,Y.startTime-Q)}}function I(Q,Y){E=!1,C&&(C=!1,_(R),R=-1),M=!0;var K=g;try{for(F(Y),y=n(m);y!==null&&(!(y.expirationTime>Y)||Q&&!W());){var N=y.callback;if(typeof N=="function"){y.callback=null,g=y.priorityLevel;var ee=N(y.expirationTime<=Y);Y=s.unstable_now(),typeof ee=="function"?y.callback=ee:y===n(m)&&r(m),F(Y)}else r(m);y=n(m)}if(y!==null)var Pe=!0;else{var ie=n(p);ie!==null&&$(P,ie.startTime-Y),Pe=!1}return Pe}finally{y=null,g=K,M=!1}}var D=!1,S=null,R=-1,q=5,k=-1;function W(){return!(s.unstable_now()-k<q)}function Z(){if(S!==null){var Q=s.unstable_now();k=Q;var Y=!0;try{Y=S(!0,Q)}finally{Y?oe():(D=!1,S=null)}}else D=!1}var oe;if(typeof b=="function")oe=function(){b(Z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,re=B.port2;B.port1.onmessage=Z,oe=function(){re.postMessage(null)}}else oe=function(){v(Z,0)};function ce(Q){S=Q,D||(D=!0,oe())}function $(Q,Y){R=v(function(){Q(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce(I))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var K=g;g=Y;try{return Q()}finally{g=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,Y){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var K=g;g=Q;try{return Y()}finally{g=K}},s.unstable_scheduleCallback=function(Q,Y,K){var N=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,Q){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=K+ee,Q={id:x++,callback:Y,priorityLevel:Q,startTime:K,expirationTime:ee,sortIndex:-1},K>N?(Q.sortIndex=K,e(p,Q),n(m)===null&&Q===n(p)&&(C?(_(R),R=-1):C=!0,$(P,K-N))):(Q.sortIndex=ee,e(m,Q),E||M||(E=!0,ce(I))),Q},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(Q){var Y=g;return function(){var K=g;g=Y;try{return Q.apply(this,arguments)}finally{g=K}}}})(Nc)),Nc}var Yp;function L_(){return Yp||(Yp=1,Dc.exports=P_()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function D_(){if($p)return $n;$p=1;var s=id(),e=L_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function g(t){return m.call(y,t)?!0:m.call(x,t)?!1:p.test(t)?y[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,a,l){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),D=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),W=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Q=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,N;function ee(t){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Pe=!1;function ie(t,i){if(!t||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){l=le}t.call(i.prototype)}else{try{throw Error()}catch(le){l=le}t()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),h=l.stack.split(`
`),w=f.length-1,U=h.length-1;1<=w&&0<=U&&f[w]!==h[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==h[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==h[U]){var G=`
`+f[w].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=w&&0<=U);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ee(t):""}function ge(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=ie(t.type,!1),t;case 11:return t=ie(t.type.render,!1),t;case 1:return t=ie(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case D:return"Portal";case q:return"Profiler";case R:return"StrictMode";case oe:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case re:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function Ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xt(t){var i=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){l=""+w,h.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function je(t){t._valueTracker||(t._valueTracker=xt(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Be(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ft(t,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Kt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ht(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function Bt(t,i){Ht(t,i);var a=pe(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ln(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ln(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ln(t,i,a){(i!=="number"||wt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var kt=Array.isArray;function rn(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function dn(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function on(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(kt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function V(t,i){var a=pe(i.value),l=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Sn(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Dt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Dt(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Le,Xt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Qe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(et).forEach(function(t){L.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),et[i]=et[t]})});function T(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||et.hasOwnProperty(t)&&et[t]?(""+i).trim():i+"px"}function j(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=T(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Me=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(t,i){if(i){if(Me[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Te(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function fe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var de=null,ye=null,O=null;function he(t){if(t=xa(t)){if(typeof de!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xo(i),de(t.stateNode,t.type,i))}}function ue(t){ye?O?O.push(t):O=[t]:ye=t}function Ae(){if(ye){var t=ye,i=O;if(O=ye=null,he(t),i)for(t=0;t<i.length;t++)he(i[t])}}function we(t,i){return t(i)}function Re(){}var Ve=!1;function at(t,i,a){if(Ve)return t(i,a);Ve=!0;try{return we(t,i,a)}finally{Ve=!1,(ye!==null||O!==null)&&(Re(),Ae())}}function _e(t,i){var a=t.stateNode;if(a===null)return null;var l=xo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Ze=!1;if(d)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{Ze=!1}function Ue(t,i,a,l,f,h,w,U,G){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(xe){this.onError(xe)}}var mt=!1,Ft=null,Rn=!1,Yi=null,hr={onError:function(t){mt=!0,Ft=t}};function fs(t,i,a,l,f,h,w,U,G){mt=!1,Ft=null,Ue.apply(hr,arguments)}function ds(t,i,a,l,f,h,w,U,G){if(fs.apply(this,arguments),mt){if(mt){var le=Ft;mt=!1,Ft=null}else throw Error(n(198));Rn||(Rn=!0,Yi=le)}}function Jn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ze(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ut(t){if(Jn(t)!==t)throw Error(n(188))}function bt(t){var i=t.alternate;if(!i){if(i=Jn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return ut(f),t;if(h===l)return ut(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,l=h;break}if(U===l){w=!0,l=f,a=h;break}U=U.sibling}if(!w){for(U=h.child;U;){if(U===a){w=!0,a=h,l=f;break}if(U===l){w=!0,l=h,a=f;break}U=U.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function $i(t){return t=bt(t),t!==null?vi(t):null}function vi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=vi(t);if(i!==null)return i;t=t.sibling}return null}var Ki=e.unstable_scheduleCallback,ai=e.unstable_cancelCallback,Zt=e.unstable_shouldYield,oi=e.unstable_requestPaint,qt=e.unstable_now,to=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,no=e.unstable_UserBlockingPriority,hs=e.unstable_NormalPriority,io=e.unstable_LowPriority,A=e.unstable_IdlePriority,z=null,se=null;function te(t){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(z,t,void 0,(t.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:De,Ne=Math.log,He=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(Ne(t)/He|0)|0}var Fe=64,We=4194304;function it(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?l=it(U):(h&=w,h!==0&&(l=it(h)))}else w=a&~f,w!==0?l=it(w):h!==0&&(l=it(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-J(i),f=1<<a,l|=t[a],i&=~f;return l}function Xe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-J(h),U=1<<w,G=f[w];G===-1?((U&a)===0||(U&l)!==0)&&(f[w]=Xe(U,i)):G<=i&&(t.expiredLanes|=U),h&=~U}}function Yt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nt(){var t=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),t}function Pt(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function sn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-J(i),t[i]=a}function qe(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-J(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function hn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-J(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var Ke=0;function Di(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var pn,pr,xi,Ni,St,ln=!1,Dn=[],At=null,Ot=null,Mn=null,mr=new Map,ra=new Map,gr=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(t,i){switch(t){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":mr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=xa(i),i!==null&&pr(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Kg(t,i,a,l,f){switch(i){case"focusin":return At=sa(At,t,i,a,l,f),!0;case"dragenter":return Ot=sa(Ot,t,i,a,l,f),!0;case"mouseover":return Mn=sa(Mn,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return mr.set(h,sa(mr.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ra.set(h,sa(ra.get(h)||null,t,i,a,l,f)),!0}return!1}function Ad(t){var i=Wr(t.target);if(i!==null){var a=Jn(i);if(a!==null){if(i=a.tag,i===13){if(i=ze(a),i!==null){t.blockedOn=i,St(t.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);be=l,a.target.dispatchEvent(l),be=null}else return i=xa(a),i!==null&&pr(i),t.blockedOn=a,!1;i.shift()}return!0}function Rd(t,i,a){ro(t)&&a.delete(i)}function Zg(){ln=!1,At!==null&&ro(At)&&(At=null),Ot!==null&&ro(Ot)&&(Ot=null),Mn!==null&&ro(Mn)&&(Mn=null),mr.forEach(Rd),ra.forEach(Rd)}function aa(t,i){t.blockedOn===i&&(t.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function oa(t){function i(f){return aa(f,t)}if(0<Dn.length){aa(Dn[0],t);for(var a=1;a<Dn.length;a++){var l=Dn[a];l.blockedOn===t&&(l.blockedOn=null)}}for(At!==null&&aa(At,t),Ot!==null&&aa(Ot,t),Mn!==null&&aa(Mn,t),mr.forEach(i),ra.forEach(i),a=0;a<gr.length;a++)l=gr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)Ad(a),a.blockedOn===null&&gr.shift()}var ps=P.ReactCurrentBatchConfig,so=!0;function Jg(t,i,a,l){var f=Ke,h=ps.transition;ps.transition=null;try{Ke=1,tu(t,i,a,l)}finally{Ke=f,ps.transition=h}}function Qg(t,i,a,l){var f=Ke,h=ps.transition;ps.transition=null;try{Ke=4,tu(t,i,a,l)}finally{Ke=f,ps.transition=h}}function tu(t,i,a,l){if(so){var f=nu(t,i,a,l);if(f===null)xu(t,i,l,ao,a),Td(t,l);else if(Kg(f,t,i,a,l))l.stopPropagation();else if(Td(t,l),i&4&&-1<$g.indexOf(t)){for(;f!==null;){var h=xa(f);if(h!==null&&pn(h),h=nu(t,i,a,l),h===null&&xu(t,i,l,ao,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else xu(t,i,l,null,a)}}var ao=null;function nu(t,i,a,l){if(ao=null,t=fe(l),t=Wr(t),t!==null)if(i=Jn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ze(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ao=t,null}function Cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(to()){case ia:return 1;case no:return 4;case hs:case io:return 16;case A:return 536870912;default:return 16}default:return 16}}var _r=null,iu=null,oo=null;function bd(){if(oo)return oo;var t,i=iu,a=i.length,l,f="value"in _r?_r.value:_r.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===f[h-l];l++);return oo=f.slice(t,1<l?1-l:void 0)}function lo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Pd(){return!1}function Qn(t){function i(a,l,f,h,w){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?uo:Pd,this.isPropagationStopped=Pd,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Qn(ms),la=K({},ms,{view:0,detail:0}),jg=Qn(la),su,au,ua,co=K({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(su=t.screenX-ua.screenX,au=t.screenY-ua.screenY):au=su=0,ua=t),su)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Ld=Qn(co),e0=K({},co,{dataTransfer:0}),t0=Qn(e0),n0=K({},la,{relatedTarget:0}),ou=Qn(n0),i0=K({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Qn(i0),s0=K({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=Qn(s0),o0=K({},ms,{data:0}),Dd=Qn(o0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=c0[t])?!!i[t]:!1}function lu(){return f0}var d0=K({},la,{key:function(t){if(t.key){var i=l0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=Qn(d0),p0=K({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Qn(p0),m0=K({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),g0=Qn(m0),_0=K({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=Qn(_0),x0=K({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=Qn(x0),M0=[9,13,27,32],uu=d&&"CompositionEvent"in window,ca=null;d&&"documentMode"in document&&(ca=document.documentMode);var y0=d&&"TextEvent"in window&&!ca,Id=d&&(!uu||ca&&8<ca&&11>=ca),Ud=" ",Fd=!1;function Od(t,i){switch(t){case"keyup":return M0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function E0(t,i){switch(t){case"compositionend":return Bd(i);case"keypress":return i.which!==32?null:(Fd=!0,Ud);case"textInput":return t=i.data,t===Ud&&Fd?null:t;default:return null}}function w0(t,i){if(gs)return t==="compositionend"||!uu&&Od(t,i)?(t=bd(),oo=iu=_r=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Id&&i.locale!=="ko"?null:i.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T0[t.type]:i==="textarea"}function zd(t,i,a,l){ue(l),i=go(i,"onChange"),0<i.length&&(a=new ru("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var fa=null,da=null;function A0(t){rh(t,0)}function fo(t){var i=Ms(t);if(lt(i))return t}function R0(t,i){if(t==="change")return i}var Hd=!1;if(d){var cu;if(d){var fu="oninput"in document;if(!fu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),fu=typeof Gd.oninput=="function"}cu=fu}else cu=!1;Hd=cu&&(!document.documentMode||9<document.documentMode)}function Vd(){fa&&(fa.detachEvent("onpropertychange",Wd),da=fa=null)}function Wd(t){if(t.propertyName==="value"&&fo(da)){var i=[];zd(i,da,t,fe(t)),at(A0,i)}}function C0(t,i,a){t==="focusin"?(Vd(),fa=i,da=a,fa.attachEvent("onpropertychange",Wd)):t==="focusout"&&Vd()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fo(da)}function P0(t,i){if(t==="click")return fo(i)}function L0(t,i){if(t==="input"||t==="change")return fo(i)}function D0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Si=typeof Object.is=="function"?Object.is:D0;function ha(t,i){if(Si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!m.call(i,f)||!Si(t[f],i[f]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,i){var a=Xd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xd(a)}}function Yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $d(){for(var t=window,i=wt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=wt(t.document)}return i}function du(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function N0(t){var i=$d(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yd(a.ownerDocument.documentElement,a)){if(l!==null&&du(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=qd(a,h);var w=qd(a,l);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I0=d&&"documentMode"in document&&11>=document.documentMode,_s=null,hu=null,pa=null,pu=!1;function Kd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||_s==null||_s!==wt(l)||(l=_s,"selectionStart"in l&&du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pa&&ha(pa,l)||(pa=l,l=go(hu,"onSelect"),0<l.length&&(i=new ru("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=_s)))}function ho(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var vs={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},mu={},Zd={};d&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function po(t){if(mu[t])return mu[t];if(!vs[t])return t;var i=vs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zd)return mu[t]=i[a];return t}var Jd=po("animationend"),Qd=po("animationiteration"),jd=po("animationstart"),eh=po("transitionend"),th=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,i){th.set(t,i),u(i,[t])}for(var gu=0;gu<nh.length;gu++){var _u=nh[gu],U0=_u.toLowerCase(),F0=_u[0].toUpperCase()+_u.slice(1);vr(U0,"on"+F0)}vr(Jd,"onAnimationEnd"),vr(Qd,"onAnimationIteration"),vr(jd,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(eh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function ih(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,ds(l,i,void 0,t),t.currentTarget=null}function rh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var w=l.length-1;0<=w;w--){var U=l[w],G=U.instance,le=U.currentTarget;if(U=U.listener,G!==h&&f.isPropagationStopped())break e;ih(f,U,le),h=G}else for(w=0;w<l.length;w++){if(U=l[w],G=U.instance,le=U.currentTarget,U=U.listener,G!==h&&f.isPropagationStopped())break e;ih(f,U,le),h=G}}}if(Rn)throw t=Yi,Rn=!1,Yi=null,t}function Gt(t,i){var a=i[Tu];a===void 0&&(a=i[Tu]=new Set);var l=t+"__bubble";a.has(l)||(sh(i,t,2,!1),a.add(l))}function vu(t,i,a){var l=0;i&&(l|=4),sh(a,t,l,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[mo]){t[mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(O0.has(a)||vu(a,!1,t),vu(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[mo]||(i[mo]=!0,vu("selectionchange",!1,i))}}function sh(t,i,a,l){switch(Cd(i)){case 1:var f=Jg;break;case 4:f=Qg;break;default:f=tu}a=f.bind(null,i,a,t),f=void 0,!Ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function xu(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=l.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===f||G.nodeType===8&&G.parentNode===f))return;w=w.return}for(;U!==null;){if(w=Wr(U),w===null)return;if(G=w.tag,G===5||G===6){l=h=w;continue e}U=U.parentNode}}l=l.return}at(function(){var le=h,xe=fe(a),Ee=[];e:{var ve=th.get(t);if(ve!==void 0){var ke=ru,Ye=t;switch(t){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":ke=h0;break;case"focusin":Ye="focus",ke=ou;break;case"focusout":Ye="blur",ke=ou;break;case"beforeblur":case"afterblur":ke=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=g0;break;case Jd:case Qd:case jd:ke=r0;break;case eh:ke=v0;break;case"scroll":ke=jg;break;case"wheel":ke=S0;break;case"copy":case"cut":case"paste":ke=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Nd}var $e=(i&4)!==0,un=!$e&&t==="scroll",ne=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var X=le,ae;X!==null;){ae=X;var Ce=ae.stateNode;if(ae.tag===5&&Ce!==null&&(ae=Ce,ne!==null&&(Ce=_e(X,ne),Ce!=null&&$e.push(_a(X,Ce,ae)))),un)break;X=X.return}0<$e.length&&(ve=new ke(ve,Ye,null,a,xe),Ee.push({event:ve,listeners:$e}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",ve&&a!==be&&(Ye=a.relatedTarget||a.fromElement)&&(Wr(Ye)||Ye[Zi]))break e;if((ke||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(Ye=a.relatedTarget||a.toElement,ke=le,Ye=Ye?Wr(Ye):null,Ye!==null&&(un=Jn(Ye),Ye!==un||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ke=null,Ye=le),ke!==Ye)){if($e=Ld,Ce="onMouseLeave",ne="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=Nd,Ce="onPointerLeave",ne="onPointerEnter",X="pointer"),un=ke==null?ve:Ms(ke),ae=Ye==null?ve:Ms(Ye),ve=new $e(Ce,X+"leave",ke,a,xe),ve.target=un,ve.relatedTarget=ae,Ce=null,Wr(xe)===le&&($e=new $e(ne,X+"enter",Ye,a,xe),$e.target=ae,$e.relatedTarget=un,Ce=$e),un=Ce,ke&&Ye)t:{for($e=ke,ne=Ye,X=0,ae=$e;ae;ae=xs(ae))X++;for(ae=0,Ce=ne;Ce;Ce=xs(Ce))ae++;for(;0<X-ae;)$e=xs($e),X--;for(;0<ae-X;)ne=xs(ne),ae--;for(;X--;){if($e===ne||ne!==null&&$e===ne.alternate)break t;$e=xs($e),ne=xs(ne)}$e=null}else $e=null;ke!==null&&ah(Ee,ve,ke,$e,!1),Ye!==null&&un!==null&&ah(Ee,un,Ye,$e,!0)}}e:{if(ve=le?Ms(le):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Je=R0;else if(kd(ve))if(Hd)Je=L0;else{Je=b0;var tt=C0}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=P0);if(Je&&(Je=Je(t,le))){zd(Ee,Je,a,xe);break e}tt&&tt(t,ve,le),t==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Ln(ve,"number",ve.value)}switch(tt=le?Ms(le):window,t){case"focusin":(kd(tt)||tt.contentEditable==="true")&&(_s=tt,hu=le,pa=null);break;case"focusout":pa=hu=_s=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Kd(Ee,a,xe);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Kd(Ee,a,xe)}var nt;if(uu)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else gs?Od(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Id&&a.locale!=="ko"&&(gs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&gs&&(nt=bd()):(_r=xe,iu="value"in _r?_r.value:_r.textContent,gs=!0)),tt=go(le,ot),0<tt.length&&(ot=new Dd(ot,t,null,a,xe),Ee.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Bd(a),nt!==null&&(ot.data=nt)))),(nt=y0?E0(t,a):w0(t,a))&&(le=go(le,"onBeforeInput"),0<le.length&&(xe=new Dd("onBeforeInput","beforeinput",null,a,xe),Ee.push({event:xe,listeners:le}),xe.data=nt))}rh(Ee,i)})}function _a(t,i,a){return{instance:t,listener:i,currentTarget:a}}function go(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=_e(t,a),h!=null&&l.unshift(_a(t,h,f)),h=_e(t,i),h!=null&&l.push(_a(t,h,f))),t=t.return}return l}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,a,l,f){for(var h=i._reactName,w=[];a!==null&&a!==l;){var U=a,G=U.alternate,le=U.stateNode;if(G!==null&&G===l)break;U.tag===5&&le!==null&&(U=le,f?(G=_e(a,h),G!=null&&w.unshift(_a(a,G,U))):f||(G=_e(a,h),G!=null&&w.push(_a(a,G,U)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var B0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(B0,`
`).replace(k0,"")}function _o(t,i,a){if(i=oh(i),oh(t)!==i&&a)throw Error(n(425))}function vo(){}var Su=null,Mu=null;function yu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(G0)}:Eu;function G0(t){setTimeout(function(){throw t})}function wu(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),oa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);oa(i)}function xr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ss,va="__reactProps$"+Ss,Zi="__reactContainer$"+Ss,Tu="__reactEvents$"+Ss,V0="__reactListeners$"+Ss,W0="__reactHandles$"+Ss;function Wr(t){var i=t[Ii];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Zi]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=uh(t);t!==null;){if(a=t[Ii])return a;t=uh(t)}return i}t=a,a=t.parentNode}return null}function xa(t){return t=t[Ii]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xo(t){return t[va]||null}var Au=[],ys=-1;function Sr(t){return{current:t}}function Vt(t){0>ys||(t.current=Au[ys],Au[ys]=null,ys--)}function zt(t,i){ys++,Au[ys]=t.current,t.current=i}var Mr={},Nn=Sr(Mr),Vn=Sr(!1),Xr=Mr;function Es(t,i){var a=t.type.contextTypes;if(!a)return Mr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(t){return t=t.childContextTypes,t!=null}function So(){Vt(Vn),Vt(Nn)}function ch(t,i,a){if(Nn.current!==Mr)throw Error(n(168));zt(Nn,i),zt(Vn,a)}function fh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Ie(t)||"Unknown",f));return K({},a,l)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Xr=Nn.current,zt(Nn,t),zt(Vn,Vn.current),!0}function dh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=fh(t,i,Xr),l.__reactInternalMemoizedMergedChildContext=t,Vt(Vn),Vt(Nn),zt(Nn,t)):Vt(Vn),zt(Vn,a)}var Ji=null,yo=!1,Ru=!1;function hh(t){Ji===null?Ji=[t]:Ji.push(t)}function X0(t){yo=!0,hh(t)}function yr(){if(!Ru&&Ji!==null){Ru=!0;var t=0,i=Ke;try{var a=Ji;for(Ke=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ji=null,yo=!1}catch(f){throw Ji!==null&&(Ji=Ji.slice(t+1)),Ki(ia,yr),f}finally{Ke=i,Ru=!1}}return null}var ws=[],Ts=0,Eo=null,wo=0,li=[],ui=0,qr=null,Qi=1,ji="";function Yr(t,i){ws[Ts++]=wo,ws[Ts++]=Eo,Eo=t,wo=i}function ph(t,i,a){li[ui++]=Qi,li[ui++]=ji,li[ui++]=qr,qr=t;var l=Qi;t=ji;var f=32-J(l)-1;l&=~(1<<f),a+=1;var h=32-J(i)+f;if(30<h){var w=f-f%5;h=(l&(1<<w)-1).toString(32),l>>=w,f-=w,Qi=1<<32-J(i)+f|a<<f|l,ji=h+t}else Qi=1<<h|a<<f|l,ji=t}function Cu(t){t.return!==null&&(Yr(t,1),ph(t,1,0))}function bu(t){for(;t===Eo;)Eo=ws[--Ts],ws[Ts]=null,wo=ws[--Ts],ws[Ts]=null;for(;t===qr;)qr=li[--ui],li[ui]=null,ji=li[--ui],li[ui]=null,Qi=li[--ui],li[ui]=null}var jn=null,ei=null,$t=!1,Mi=null;function mh(t,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function gh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,jn=t,ei=xr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,jn=t,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qr!==null?{id:Qi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,jn=t,ei=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if($t){var i=ei;if(i){var a=i;if(!gh(t,i)){if(Pu(t))throw Error(n(418));i=xr(a.nextSibling);var l=jn;i&&gh(t,i)?mh(l,a):(t.flags=t.flags&-4097|2,$t=!1,jn=t)}}else{if(Pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,$t=!1,jn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function To(t){if(t!==jn)return!1;if(!$t)return _h(t),$t=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!yu(t.type,t.memoizedProps)),i&&(i=ei)){if(Pu(t))throw vh(),Error(n(418));for(;i;)mh(t,i),i=xr(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){ei=xr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}ei=null}}else ei=jn?xr(t.stateNode.nextSibling):null;return!0}function vh(){for(var t=ei;t;)t=xr(t.nextSibling)}function As(){ei=jn=null,$t=!1}function Du(t){Mi===null?Mi=[t]:Mi.push(t)}var q0=P.ReactCurrentBatchConfig;function Sa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var U=f.refs;w===null?delete U[h]:U[h]=w},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ao(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function xh(t){var i=t._init;return i(t._payload)}function Sh(t){function i(ne,X){if(t){var ae=ne.deletions;ae===null?(ne.deletions=[X],ne.flags|=16):ae.push(X)}}function a(ne,X){if(!t)return null;for(;X!==null;)i(ne,X),X=X.sibling;return null}function l(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function f(ne,X){return ne=Pr(ne,X),ne.index=0,ne.sibling=null,ne}function h(ne,X,ae){return ne.index=ae,t?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<X?(ne.flags|=2,X):ae):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function w(ne){return t&&ne.alternate===null&&(ne.flags|=2),ne}function U(ne,X,ae,Ce){return X===null||X.tag!==6?(X=Ec(ae,ne.mode,Ce),X.return=ne,X):(X=f(X,ae),X.return=ne,X)}function G(ne,X,ae,Ce){var Je=ae.type;return Je===S?xe(ne,X,ae.props.children,Ce,ae.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&xh(Je)===X.type)?(Ce=f(X,ae.props),Ce.ref=Sa(ne,X,ae),Ce.return=ne,Ce):(Ce=Zo(ae.type,ae.key,ae.props,null,ne.mode,Ce),Ce.ref=Sa(ne,X,ae),Ce.return=ne,Ce)}function le(ne,X,ae,Ce){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=wc(ae,ne.mode,Ce),X.return=ne,X):(X=f(X,ae.children||[]),X.return=ne,X)}function xe(ne,X,ae,Ce,Je){return X===null||X.tag!==7?(X=ts(ae,ne.mode,Ce,Je),X.return=ne,X):(X=f(X,ae),X.return=ne,X)}function Ee(ne,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ec(""+X,ne.mode,ae),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return ae=Zo(X.type,X.key,X.props,null,ne.mode,ae),ae.ref=Sa(ne,null,X),ae.return=ne,ae;case D:return X=wc(X,ne.mode,ae),X.return=ne,X;case ce:var Ce=X._init;return Ee(ne,Ce(X._payload),ae)}if(kt(X)||Y(X))return X=ts(X,ne.mode,ae,null),X.return=ne,X;Ao(ne,X)}return null}function ve(ne,X,ae,Ce){var Je=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:U(ne,X,""+ae,Ce);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return ae.key===Je?G(ne,X,ae,Ce):null;case D:return ae.key===Je?le(ne,X,ae,Ce):null;case ce:return Je=ae._init,ve(ne,X,Je(ae._payload),Ce)}if(kt(ae)||Y(ae))return Je!==null?null:xe(ne,X,ae,Ce,null);Ao(ne,ae)}return null}function ke(ne,X,ae,Ce,Je){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ne=ne.get(ae)||null,U(X,ne,""+Ce,Je);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case I:return ne=ne.get(Ce.key===null?ae:Ce.key)||null,G(X,ne,Ce,Je);case D:return ne=ne.get(Ce.key===null?ae:Ce.key)||null,le(X,ne,Ce,Je);case ce:var tt=Ce._init;return ke(ne,X,ae,tt(Ce._payload),Je)}if(kt(Ce)||Y(Ce))return ne=ne.get(ae)||null,xe(X,ne,Ce,Je,null);Ao(X,Ce)}return null}function Ye(ne,X,ae,Ce){for(var Je=null,tt=null,nt=X,ot=X=0,wn=null;nt!==null&&ot<ae.length;ot++){nt.index>ot?(wn=nt,nt=null):wn=nt.sibling;var Rt=ve(ne,nt,ae[ot],Ce);if(Rt===null){nt===null&&(nt=wn);break}t&&nt&&Rt.alternate===null&&i(ne,nt),X=h(Rt,X,ot),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt,nt=wn}if(ot===ae.length)return a(ne,nt),$t&&Yr(ne,ot),Je;if(nt===null){for(;ot<ae.length;ot++)nt=Ee(ne,ae[ot],Ce),nt!==null&&(X=h(nt,X,ot),tt===null?Je=nt:tt.sibling=nt,tt=nt);return $t&&Yr(ne,ot),Je}for(nt=l(ne,nt);ot<ae.length;ot++)wn=ke(nt,ne,ot,ae[ot],Ce),wn!==null&&(t&&wn.alternate!==null&&nt.delete(wn.key===null?ot:wn.key),X=h(wn,X,ot),tt===null?Je=wn:tt.sibling=wn,tt=wn);return t&&nt.forEach(function(Lr){return i(ne,Lr)}),$t&&Yr(ne,ot),Je}function $e(ne,X,ae,Ce){var Je=Y(ae);if(typeof Je!="function")throw Error(n(150));if(ae=Je.call(ae),ae==null)throw Error(n(151));for(var tt=Je=null,nt=X,ot=X=0,wn=null,Rt=ae.next();nt!==null&&!Rt.done;ot++,Rt=ae.next()){nt.index>ot?(wn=nt,nt=null):wn=nt.sibling;var Lr=ve(ne,nt,Rt.value,Ce);if(Lr===null){nt===null&&(nt=wn);break}t&&nt&&Lr.alternate===null&&i(ne,nt),X=h(Lr,X,ot),tt===null?Je=Lr:tt.sibling=Lr,tt=Lr,nt=wn}if(Rt.done)return a(ne,nt),$t&&Yr(ne,ot),Je;if(nt===null){for(;!Rt.done;ot++,Rt=ae.next())Rt=Ee(ne,Rt.value,Ce),Rt!==null&&(X=h(Rt,X,ot),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return $t&&Yr(ne,ot),Je}for(nt=l(ne,nt);!Rt.done;ot++,Rt=ae.next())Rt=ke(nt,ne,ot,Rt.value,Ce),Rt!==null&&(t&&Rt.alternate!==null&&nt.delete(Rt.key===null?ot:Rt.key),X=h(Rt,X,ot),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return t&&nt.forEach(function(T_){return i(ne,T_)}),$t&&Yr(ne,ot),Je}function un(ne,X,ae,Ce){if(typeof ae=="object"&&ae!==null&&ae.type===S&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:e:{for(var Je=ae.key,tt=X;tt!==null;){if(tt.key===Je){if(Je=ae.type,Je===S){if(tt.tag===7){a(ne,tt.sibling),X=f(tt,ae.props.children),X.return=ne,ne=X;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&xh(Je)===tt.type){a(ne,tt.sibling),X=f(tt,ae.props),X.ref=Sa(ne,tt,ae),X.return=ne,ne=X;break e}a(ne,tt);break}else i(ne,tt);tt=tt.sibling}ae.type===S?(X=ts(ae.props.children,ne.mode,Ce,ae.key),X.return=ne,ne=X):(Ce=Zo(ae.type,ae.key,ae.props,null,ne.mode,Ce),Ce.ref=Sa(ne,X,ae),Ce.return=ne,ne=Ce)}return w(ne);case D:e:{for(tt=ae.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){a(ne,X.sibling),X=f(X,ae.children||[]),X.return=ne,ne=X;break e}else{a(ne,X);break}else i(ne,X);X=X.sibling}X=wc(ae,ne.mode,Ce),X.return=ne,ne=X}return w(ne);case ce:return tt=ae._init,un(ne,X,tt(ae._payload),Ce)}if(kt(ae))return Ye(ne,X,ae,Ce);if(Y(ae))return $e(ne,X,ae,Ce);Ao(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(a(ne,X.sibling),X=f(X,ae),X.return=ne,ne=X):(a(ne,X),X=Ec(ae,ne.mode,Ce),X.return=ne,ne=X),w(ne)):a(ne,X)}return un}var Rs=Sh(!0),Mh=Sh(!1),Ro=Sr(null),Co=null,Cs=null,Nu=null;function Iu(){Nu=Cs=Co=null}function Uu(t){var i=Ro.current;Vt(Ro),t._currentValue=i}function Fu(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function bs(t,i){Co=t,Nu=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Xn=!0),t.firstContext=null)}function ci(t){var i=t._currentValue;if(Nu!==t)if(t={context:t,memoizedValue:i,next:null},Cs===null){if(Co===null)throw Error(n(308));Cs=t,Co.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return i}var $r=null;function Ou(t){$r===null?$r=[t]:$r.push(t)}function yh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Ou(i)):(a.next=f.next,f.next=a),i.interleaved=a,er(t,l)}function er(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Er=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function wr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Tt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,er(t,a)}return f=l.interleaved,f===null?(i.next=i,Ou(l)):(i.next=f.next,f.next=i),l.interleaved=i,er(t,a)}function bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,hn(t,a)}}function wh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Po(t,i,a,l){var f=t.updateQueue;Er=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var G=U,le=G.next;G.next=null,w===null?h=le:w.next=le,w=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=le:U.next=le,xe.lastBaseUpdate=G))}if(h!==null){var Ee=f.baseState;w=0,xe=le=G=null,U=h;do{var ve=U.lane,ke=U.eventTime;if((l&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=t,$e=U;switch(ve=i,ke=a,$e.tag){case 1:if(Ye=$e.payload,typeof Ye=="function"){Ee=Ye.call(ke,Ee,ve);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=$e.payload,ve=typeof Ye=="function"?Ye.call(ke,Ee,ve):Ye,ve==null)break e;Ee=K({},Ee,ve);break e;case 2:Er=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[U]:ve.push(U))}else ke={eventTime:ke,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(le=xe=ke,G=Ee):xe=xe.next=ke,w|=ve;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(G=Ee),f.baseState=G,f.firstBaseUpdate=le,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Jr|=w,t.lanes=w,t.memoizedState=Ee}}function Th(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ma={},Ui=Sr(Ma),ya=Sr(Ma),Ea=Sr(Ma);function Kr(t){if(t===Ma)throw Error(n(174));return t}function ku(t,i){switch(zt(Ea,i),zt(ya,t),zt(Ui,Ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ct(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ct(i,t)}Vt(Ui),zt(Ui,i)}function Ps(){Vt(Ui),Vt(ya),Vt(Ea)}function Ah(t){Kr(Ea.current);var i=Kr(Ui.current),a=Ct(i,t.type);i!==a&&(zt(ya,t),zt(Ui,a))}function zu(t){ya.current===t&&(Vt(Ui),Vt(ya))}var Jt=Sr(0);function Lo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function Gu(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Do=P.ReactCurrentDispatcher,Vu=P.ReactCurrentBatchConfig,Zr=0,Qt=null,mn=null,yn=null,No=!1,wa=!1,Ta=0,Y0=0;function In(){throw Error(n(321))}function Wu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Si(t[a],i[a]))return!1;return!0}function Xu(t,i,a,l,f,h){if(Zr=h,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?J0:Q0,t=a(l,f),wa){h=0;do{if(wa=!1,Ta=0,25<=h)throw Error(n(301));h+=1,yn=mn=null,i.updateQueue=null,Do.current=j0,t=a(l,f)}while(wa)}if(Do.current=Fo,i=mn!==null&&mn.next!==null,Zr=0,yn=mn=Qt=null,No=!1,i)throw Error(n(300));return t}function qu(){var t=Ta!==0;return Ta=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Qt.memoizedState=yn=t:yn=yn.next=t,yn}function fi(){if(mn===null){var t=Qt.alternate;t=t!==null?t.memoizedState:null}else t=mn.next;var i=yn===null?Qt.memoizedState:yn.next;if(i!==null)yn=i,mn=t;else{if(t===null)throw Error(n(310));mn=t,t={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?Qt.memoizedState=yn=t:yn=yn.next=t}return yn}function Aa(t,i){return typeof i=="function"?i(t):i}function Yu(t){var i=fi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=mn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=w=null,G=null,le=h;do{var xe=le.lane;if((Zr&xe)===xe)G!==null&&(G=G.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:t(l,le.action);else{var Ee={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};G===null?(U=G=Ee,w=l):G=G.next=Ee,Qt.lanes|=xe,Jr|=xe}le=le.next}while(le!==null&&le!==h);G===null?w=l:G.next=U,Si(l,i.memoizedState)||(Xn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=G,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,Qt.lanes|=h,Jr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $u(t){var i=fi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=t(h,w.action),w=w.next;while(w!==f);Si(h,i.memoizedState)||(Xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Rh(){}function Ch(t,i){var a=Qt,l=fi(),f=i(),h=!Si(l.memoizedState,f);if(h&&(l.memoizedState=f,Xn=!0),l=l.queue,Ku(Lh.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||yn!==null&&yn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Ph.bind(null,a,l,f,i),void 0,null),En===null)throw Error(n(349));(Zr&30)!==0||bh(a,i,f)}return f}function bh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ph(t,i,a,l){i.value=a,i.getSnapshot=l,Dh(i)&&Nh(t)}function Lh(t,i,a){return a(function(){Dh(i)&&Nh(t)})}function Dh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Si(t,a)}catch{return!0}}function Nh(t){var i=er(t,1);i!==null&&Ti(i,t,1,-1)}function Ih(t){var i=Fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},i.queue=t,t=t.dispatch=Z0.bind(null,Qt,t),[i.memoizedState,t]}function Ra(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Uh(){return fi().memoizedState}function Io(t,i,a,l){var f=Fi();Qt.flags|=t,f.memoizedState=Ra(1|i,a,void 0,l===void 0?null:l)}function Uo(t,i,a,l){var f=fi();l=l===void 0?null:l;var h=void 0;if(mn!==null){var w=mn.memoizedState;if(h=w.destroy,l!==null&&Wu(l,w.deps)){f.memoizedState=Ra(i,a,h,l);return}}Qt.flags|=t,f.memoizedState=Ra(1|i,a,h,l)}function Fh(t,i){return Io(8390656,8,t,i)}function Ku(t,i){return Uo(2048,8,t,i)}function Oh(t,i){return Uo(4,2,t,i)}function Bh(t,i){return Uo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function zh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,kh.bind(null,i,t),a)}function Zu(){}function Hh(t,i){var a=fi();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Wu(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Gh(t,i){var a=fi();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Wu(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,Xn=!0),t.memoizedState=a):(Si(a,i)||(a=Nt(),Qt.lanes|=a,Jr|=a,t.baseState=!0),i)}function $0(t,i){var a=Ke;Ke=a!==0&&4>a?a:4,t(!0);var l=Vu.transition;Vu.transition={};try{t(!1),i()}finally{Ke=a,Vu.transition=l}}function Wh(){return fi().memoizedState}function K0(t,i,a){var l=Cr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Xh(t))qh(i,a);else if(a=yh(t,i,a,l),a!==null){var f=zn();Ti(a,t,l,f),Yh(a,i,l)}}function Z0(t,i,a){var l=Cr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))qh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,U=h(w,a);if(f.hasEagerState=!0,f.eagerState=U,Si(U,w)){var G=i.interleaved;G===null?(f.next=f,Ou(i)):(f.next=G.next,G.next=f),i.interleaved=f;return}}catch{}finally{}a=yh(t,i,f,l),a!==null&&(f=zn(),Ti(a,t,l,f),Yh(a,i,l))}}function Xh(t){var i=t.alternate;return t===Qt||i!==null&&i===Qt}function qh(t,i){wa=No=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Yh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,hn(t,a)}}var Fo={readContext:ci,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},J0={readContext:ci,useCallback:function(t,i){return Fi().memoizedState=[t,i===void 0?null:i],t},useContext:ci,useEffect:Fh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Io(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Io(4194308,4,t,i)},useInsertionEffect:function(t,i){return Io(4,2,t,i)},useMemo:function(t,i){var a=Fi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Fi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=K0.bind(null,Qt,t),[l.memoizedState,t]},useRef:function(t){var i=Fi();return t={current:t},i.memoizedState=t},useState:Ih,useDebugValue:Zu,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Ih(!1),i=t[0];return t=$0.bind(null,t[1]),Fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Qt,f=Fi();if($t){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),En===null)throw Error(n(349));(Zr&30)!==0||bh(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Fh(Lh.bind(null,l,h,t),[t]),l.flags|=2048,Ra(9,Ph.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=Fi(),i=En.identifierPrefix;if($t){var a=ji,l=Qi;a=(l&~(1<<32-J(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Y0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Q0={readContext:ci,useCallback:Hh,useContext:ci,useEffect:Ku,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:Bh,useMemo:Gh,useReducer:Yu,useRef:Uh,useState:function(){return Yu(Aa)},useDebugValue:Zu,useDeferredValue:function(t){var i=fi();return Vh(i,mn.memoizedState,t)},useTransition:function(){var t=Yu(Aa)[0],i=fi().memoizedState;return[t,i]},useMutableSource:Rh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1},j0={readContext:ci,useCallback:Hh,useContext:ci,useEffect:Ku,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:Bh,useMemo:Gh,useReducer:$u,useRef:Uh,useState:function(){return $u(Aa)},useDebugValue:Zu,useDeferredValue:function(t){var i=fi();return mn===null?i.memoizedState=t:Vh(i,mn.memoizedState,t)},useTransition:function(){var t=$u(Aa)[0],i=fi().memoizedState;return[t,i]},useMutableSource:Rh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1};function yi(t,i){if(t&&t.defaultProps){i=K({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Ju(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:K({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Oo={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=zn(),f=Cr(t),h=tr(l,f);h.payload=i,a!=null&&(h.callback=a),i=wr(t,h,f),i!==null&&(Ti(i,t,f,l),bo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=zn(),f=Cr(t),h=tr(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=wr(t,h,f),i!==null&&(Ti(i,t,f,l),bo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=zn(),l=Cr(t),f=tr(a,l);f.tag=2,i!=null&&(f.callback=i),i=wr(t,f,l),i!==null&&(Ti(i,t,l,a),bo(i,t,l))}};function $h(t,i,a,l,f,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,w):i.prototype&&i.prototype.isPureReactComponent?!ha(a,l)||!ha(f,h):!0}function Kh(t,i,a){var l=!1,f=Mr,h=i.contextType;return typeof h=="object"&&h!==null?h=ci(h):(f=Wn(i)?Xr:Nn.current,l=i.contextTypes,h=(l=l!=null)?Es(t,f):Mr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Zh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Oo.enqueueReplaceState(i,i.state,null)}function Qu(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Bu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=ci(h):(h=Wn(i)?Xr:Nn.current,f.context=Es(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ju(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oo.enqueueReplaceState(f,f.state,null),Po(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,i){try{var a="",l=i;do a+=ge(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function ju(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function ec(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function Jh(t,i,a){a=tr(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Wo||(Wo=!0,mc=l),ec(t,i)},a}function Qh(t,i,a){a=tr(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){ec(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){ec(t,i),typeof l!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function jh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new e_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=p_.bind(null,t,i,a),i.then(t,t))}function ep(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function tp(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=tr(-1,1),i.tag=2,wr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var t_=P.ReactCurrentOwner,Xn=!1;function kn(t,i,a,l){i.child=t===null?Mh(i,null,a,l):Rs(i,t.child,a,l)}function np(t,i,a,l,f){a=a.render;var h=i.ref;return bs(i,f),l=Xu(t,i,a,l,h,f),a=qu(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,nr(t,i,f)):($t&&a&&Cu(i),i.flags|=1,kn(t,i,l,f),i.child)}function ip(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!yc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,rp(t,i,h,l,f)):(t=Zo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(w,l)&&t.ref===i.ref)return nr(t,i,f)}return i.flags|=1,t=Pr(h,l),t.ref=i.ref,t.return=i,i.child=t}function rp(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(ha(h,l)&&t.ref===i.ref)if(Xn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Xn=!0);else return i.lanes=t.lanes,nr(t,i,f)}return tc(t,i,a,l,f)}function sp(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ns,ti),ti|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(Ns,ti),ti|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,zt(Ns,ti),ti|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,zt(Ns,ti),ti|=l;return kn(t,i,f,a),i.child}function ap(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tc(t,i,a,l,f){var h=Wn(a)?Xr:Nn.current;return h=Es(i,h),bs(i,f),a=Xu(t,i,a,l,h,f),l=qu(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,nr(t,i,f)):($t&&l&&Cu(i),i.flags|=1,kn(t,i,a,f),i.child)}function op(t,i,a,l,f){if(Wn(a)){var h=!0;Mo(i)}else h=!1;if(bs(i,f),i.stateNode===null)ko(t,i),Kh(i,a,l),Qu(i,a,l,f),l=!0;else if(t===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var G=w.context,le=a.contextType;typeof le=="object"&&le!==null?le=ci(le):(le=Wn(a)?Xr:Nn.current,le=Es(i,le));var xe=a.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==l||G!==le)&&Zh(i,w,l,le),Er=!1;var ve=i.memoizedState;w.state=ve,Po(i,l,w,f),G=i.memoizedState,U!==l||ve!==G||Vn.current||Er?(typeof xe=="function"&&(Ju(i,a,xe,l),G=i.memoizedState),(U=Er||$h(i,a,U,l,ve,G,le))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=G),w.props=l,w.state=G,w.context=le,l=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Eh(t,i),U=i.memoizedProps,le=i.type===i.elementType?U:yi(i.type,U),w.props=le,Ee=i.pendingProps,ve=w.context,G=a.contextType,typeof G=="object"&&G!==null?G=ci(G):(G=Wn(a)?Xr:Nn.current,G=Es(i,G));var ke=a.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Ee||ve!==G)&&Zh(i,w,l,G),Er=!1,ve=i.memoizedState,w.state=ve,Po(i,l,w,f);var Ye=i.memoizedState;U!==Ee||ve!==Ye||Vn.current||Er?(typeof ke=="function"&&(Ju(i,a,ke,l),Ye=i.memoizedState),(le=Er||$h(i,a,le,l,ve,Ye,G)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Ye,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Ye,G)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),w.props=l,w.state=Ye,w.context=G,l=le):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),l=!1)}return nc(t,i,a,l,h,f)}function nc(t,i,a,l,f,h){ap(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return f&&dh(i,a,!1),nr(t,i,h);l=i.stateNode,t_.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=Rs(i,t.child,null,h),i.child=Rs(i,null,U,h)):kn(t,i,U,h),i.memoizedState=l.state,f&&dh(i,a,!0),i.child}function lp(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),ku(t,i.containerInfo)}function up(t,i,a,l,f){return As(),Du(f),i.flags|=256,kn(t,i,a,l),i.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,a){var l=i.pendingProps,f=Jt.current,h=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),zt(Jt,f&1),t===null)return Lu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,h?(l=i.mode,h=i.child,w={mode:"hidden",children:w},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=Jo(w,l,0,null),t=ts(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=rc(a),i.memoizedState=ic,t):sc(i,w));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return n_(t,i,w,l,U,f,a);if(h){h=l.fallback,w=i.mode,f=t.child,U=f.sibling;var G={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=G,i.deletions=null):(l=Pr(f,G),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=Pr(U,h):(h=ts(h,w,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,w=t.child.memoizedState,w=w===null?rc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~a,i.memoizedState=ic,l}return h=t.child,t=h.sibling,l=Pr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function sc(t,i){return i=Jo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Bo(t,i,a,l){return l!==null&&Du(l),Rs(i,t.child,null,a),t=sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n_(t,i,a,l,f,h,w){if(a)return i.flags&256?(i.flags&=-257,l=ju(Error(n(422))),Bo(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Jo({mode:"visible",children:l.children},f,0,null),h=ts(h,f,w,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Rs(i,t.child,null,w),i.child.memoizedState=rc(w),i.memoizedState=ic,h);if((i.mode&1)===0)return Bo(t,i,w,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=ju(h,l,void 0),Bo(t,i,w,l)}if(U=(w&t.childLanes)!==0,Xn||U){if(l=En,l!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|w))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,er(t,f),Ti(l,t,f,-1))}return Mc(),l=ju(Error(n(421))),Bo(t,i,w,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=m_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ei=xr(f.nextSibling),jn=i,$t=!0,Mi=null,t!==null&&(li[ui++]=Qi,li[ui++]=ji,li[ui++]=qr,Qi=t.id,ji=t.overflow,qr=i),i=sc(i,l.children),i.flags|=4096,i)}function fp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Fu(t.return,i,a)}function ac(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function dp(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(kn(t,i,l.children,a),l=Jt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,a,i);else if(t.tag===19)fp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(zt(Jt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Lo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ac(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Lo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ac(i,!0,a,null,h);break;case"together":ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function nr(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Jr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Pr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Pr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function i_(t,i,a){switch(i.tag){case 3:lp(i),As();break;case 5:Ah(i);break;case 1:Wn(i.type)&&Mo(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;zt(Ro,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(zt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cp(t,i,a):(zt(Jt,Jt.current&1),t=nr(t,i,a),t!==null?t.sibling:null);zt(Jt,Jt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return dp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Jt,Jt.current),l)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,a)}return nr(t,i,a)}var hp,oc,pp,mp;hp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},oc=function(){},pp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Kr(Ui.current);var h=null;switch(a){case"input":f=ft(t,f),l=ft(t,l),h=[];break;case"select":f=K({},f,{value:void 0}),l=K({},l,{value:void 0}),h=[];break;case"textarea":f=dn(t,f),l=dn(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=vo)}me(a,l);var w;a=null;for(le in f)if(!l.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var U=f[le];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?h||(h=[]):(h=h||[]).push(le,null));for(le in l){var G=l[le];if(U=f!=null?f[le]:void 0,l.hasOwnProperty(le)&&G!==U&&(G!=null||U!=null))if(le==="style")if(U){for(w in U)!U.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in G)G.hasOwnProperty(w)&&U[w]!==G[w]&&(a||(a={}),a[w]=G[w])}else a||(h||(h=[]),h.push(le,a)),a=G;else le==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(h=h||[]).push(le,G)):le==="children"?typeof G!="string"&&typeof G!="number"||(h=h||[]).push(le,""+G):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(G!=null&&le==="onScroll"&&Gt("scroll",t),h||U===G||(h=[])):(h=h||[]).push(le,G))}a&&(h=h||[]).push("style",a);var le=h;(i.updateQueue=le)&&(i.flags|=4)}},mp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ca(t,i){if(!$t)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function r_(t,i,a){var l=i.pendingProps;switch(bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(i),null;case 1:return Wn(i.type)&&So(),Un(i),null;case 3:return l=i.stateNode,Ps(),Vt(Vn),Vt(Nn),Gu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mi!==null&&(vc(Mi),Mi=null))),oc(t,i),Un(i),null;case 5:zu(i);var f=Kr(Ea.current);if(a=i.type,t!==null&&i.stateNode!=null)pp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return Un(i),null}if(t=Kr(Ui.current),To(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[Ii]=i,l[va]=h,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",l),Gt("close",l);break;case"iframe":case"object":case"embed":Gt("load",l);break;case"video":case"audio":for(f=0;f<ma.length;f++)Gt(ma[f],l);break;case"source":Gt("error",l);break;case"img":case"image":case"link":Gt("error",l),Gt("load",l);break;case"details":Gt("toggle",l);break;case"input":Kt(l,h),Gt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Gt("invalid",l);break;case"textarea":on(l,h),Gt("invalid",l)}me(a,h),f=null;for(var w in h)if(h.hasOwnProperty(w)){var U=h[w];w==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&_o(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&_o(l.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Gt("scroll",l)}switch(a){case"input":je(l),Ut(l,h,!0);break;case"textarea":je(l),Sn(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=vo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dt(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[Ii]=i,t[va]=l,hp(t,i,!1,!1),i.stateNode=t;e:{switch(w=Te(a,l),a){case"dialog":Gt("cancel",t),Gt("close",t),f=l;break;case"iframe":case"object":case"embed":Gt("load",t),f=l;break;case"video":case"audio":for(f=0;f<ma.length;f++)Gt(ma[f],t);f=l;break;case"source":Gt("error",t),f=l;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=l;break;case"details":Gt("toggle",t),f=l;break;case"input":Kt(t,l),f=ft(t,l),Gt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=K({},l,{value:void 0}),Gt("invalid",t);break;case"textarea":on(t,l),f=dn(t,l),Gt("invalid",t);break;default:f=l}me(a,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var G=U[h];h==="style"?j(t,G):h==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Xt(t,G)):h==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&Qe(t,G):typeof G=="number"&&Qe(t,""+G):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?G!=null&&h==="onScroll"&&Gt("scroll",t):G!=null&&F(t,h,G,w))}switch(a){case"input":je(t),Ut(t,l,!1);break;case"textarea":je(t),Sn(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?rn(t,!!l.multiple,h,!1):l.defaultValue!=null&&rn(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Un(i),null;case 6:if(t&&i.stateNode!=null)mp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Kr(Ea.current),Kr(Ui.current),To(i)){if(l=i.stateNode,a=i.memoizedProps,l[Ii]=i,(h=l.nodeValue!==a)&&(t=jn,t!==null))switch(t.tag){case 3:_o(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ii]=i,i.stateNode=l}return Un(i),null;case 13:if(Vt(Jt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($t&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vh(),As(),i.flags|=98560,h=!1;else if(h=To(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ii]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Un(i),h=!1}else Mi!==null&&(vc(Mi),Mi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Jt.current&1)!==0?gn===0&&(gn=3):Mc())),i.updateQueue!==null&&(i.flags|=4),Un(i),null);case 4:return Ps(),oc(t,i),t===null&&ga(i.stateNode.containerInfo),Un(i),null;case 10:return Uu(i.type._context),Un(i),null;case 17:return Wn(i.type)&&So(),Un(i),null;case 19:if(Vt(Jt),h=i.memoizedState,h===null)return Un(i),null;if(l=(i.flags&128)!==0,w=h.rendering,w===null)if(l)Ca(h,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Lo(t),w!==null){for(i.flags|=128,Ca(h,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return zt(Jt,Jt.current&1|2),i.child}t=t.sibling}h.tail!==null&&qt()>Is&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304)}else{if(!l)if(t=Lo(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!$t)return Un(i),null}else 2*qt()-h.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(a=h.last,a!==null?a.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=qt(),i.sibling=null,a=Jt.current,zt(Jt,l?a&1|2:a&1),i):(Un(i),null);case 22:case 23:return Sc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Un(i),i.subtreeFlags&6&&(i.flags|=8192)):Un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function s_(t,i){switch(bu(i),i.tag){case 1:return Wn(i.type)&&So(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ps(),Vt(Vn),Vt(Nn),Gu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zu(i),null;case 13:if(Vt(Jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));As()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Vt(Jt),null;case 4:return Ps(),null;case 10:return Uu(i.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var zo=!1,Fn=!1,a_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ds(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){an(t,i,l)}else a.current=null}function lc(t,i,a){try{a()}catch(l){an(t,i,l)}}var gp=!1;function o_(t,i){if(Su=so,t=$d(),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,U=-1,G=-1,le=0,xe=0,Ee=t,ve=null;t:for(;;){for(var ke;Ee!==a||f!==0&&Ee.nodeType!==3||(U=w+f),Ee!==h||l!==0&&Ee.nodeType!==3||(G=w+l),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)ve=Ee,Ee=ke;for(;;){if(Ee===t)break t;if(ve===a&&++le===f&&(U=w),ve===h&&++xe===l&&(G=w),(ke=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=ke}a=U===-1||G===-1?null:{start:U,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mu={focusedElem:t,selectionRange:a},so=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var $e=Ye.memoizedProps,un=Ye.memoizedState,ne=i.stateNode,X=ne.getSnapshotBeforeUpdate(i.elementType===i.type?$e:yi(i.type,$e),un);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){an(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return Ye=gp,gp=!1,Ye}function ba(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&lc(i,a,h)}f=f.next}while(f!==l)}}function Ho(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function uc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ii],delete i[va],delete i[Tu],delete i[V0],delete i[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vo));else if(l!==4&&(t=t.child,t!==null))for(cc(t,i,a),t=t.sibling;t!==null;)cc(t,i,a),t=t.sibling}function fc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(fc(t,i,a),t=t.sibling;t!==null;)fc(t,i,a),t=t.sibling}var Cn=null,Ei=!1;function Tr(t,i,a){for(a=a.child;a!==null;)Sp(t,i,a),a=a.sibling}function Sp(t,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(z,a)}catch{}switch(a.tag){case 5:Fn||Ds(a,i);case 6:var l=Cn,f=Ei;Cn=null,Tr(t,i,a),Cn=l,Ei=f,Cn!==null&&(Ei?(t=Cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Cn.removeChild(a.stateNode));break;case 18:Cn!==null&&(Ei?(t=Cn,a=a.stateNode,t.nodeType===8?wu(t.parentNode,a):t.nodeType===1&&wu(t,a),oa(t)):wu(Cn,a.stateNode));break;case 4:l=Cn,f=Ei,Cn=a.stateNode.containerInfo,Ei=!0,Tr(t,i,a),Cn=l,Ei=f;break;case 0:case 11:case 14:case 15:if(!Fn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&lc(a,i,w),f=f.next}while(f!==l)}Tr(t,i,a);break;case 1:if(!Fn&&(Ds(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(U){an(a,i,U)}Tr(t,i,a);break;case 21:Tr(t,i,a);break;case 22:a.mode&1?(Fn=(l=Fn)||a.memoizedState!==null,Tr(t,i,a),Fn=l):Tr(t,i,a);break;default:Tr(t,i,a)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new a_),i.forEach(function(l){var f=g_.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function wi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:Cn=U.stateNode,Ei=!1;break e;case 3:Cn=U.stateNode.containerInfo,Ei=!0;break e;case 4:Cn=U.stateNode.containerInfo,Ei=!0;break e}U=U.return}if(Cn===null)throw Error(n(160));Sp(h,w,f),Cn=null,Ei=!1;var G=f.alternate;G!==null&&(G.return=null),f.return=null}catch(le){an(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wi(i,t),Oi(t),l&4){try{ba(3,t,t.return),Ho(3,t)}catch($e){an(t,t.return,$e)}try{ba(5,t,t.return)}catch($e){an(t,t.return,$e)}}break;case 1:wi(i,t),Oi(t),l&512&&a!==null&&Ds(a,a.return);break;case 5:if(wi(i,t),Oi(t),l&512&&a!==null&&Ds(a,a.return),t.flags&32){var f=t.stateNode;try{Qe(f,"")}catch($e){an(t,t.return,$e)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,w=a!==null?a.memoizedProps:h,U=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Ht(f,h),Te(U,w);var le=Te(U,h);for(w=0;w<G.length;w+=2){var xe=G[w],Ee=G[w+1];xe==="style"?j(f,Ee):xe==="dangerouslySetInnerHTML"?Xt(f,Ee):xe==="children"?Qe(f,Ee):F(f,xe,Ee,le)}switch(U){case"input":Bt(f,h);break;case"textarea":V(f,h);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var ke=h.value;ke!=null?rn(f,!!h.multiple,ke,!1):ve!==!!h.multiple&&(h.defaultValue!=null?rn(f,!!h.multiple,h.defaultValue,!0):rn(f,!!h.multiple,h.multiple?[]:"",!1))}f[va]=h}catch($e){an(t,t.return,$e)}}break;case 6:if(wi(i,t),Oi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch($e){an(t,t.return,$e)}}break;case 3:if(wi(i,t),Oi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch($e){an(t,t.return,$e)}break;case 4:wi(i,t),Oi(t);break;case 13:wi(i,t),Oi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(pc=qt())),l&4&&Mp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(Fn=(le=Fn)||xe,wi(i,t),Fn=le):wi(i,t),Oi(t),l&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!xe&&(t.mode&1)!==0)for(Ge=t,xe=t.child;xe!==null;){for(Ee=Ge=xe;Ge!==null;){switch(ve=Ge,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:ba(4,ve,ve.return);break;case 1:Ds(ve,ve.return);var Ye=ve.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=ve,a=ve.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch($e){an(l,a,$e)}}break;case 5:Ds(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Tp(Ee);continue}}ke!==null?(ke.return=ve,Ge=ke):Tp(Ee)}xe=xe.sibling}e:for(xe=null,Ee=t;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{f=Ee.stateNode,le?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Ee.stateNode,G=Ee.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=T("display",w))}catch($e){an(t,t.return,$e)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch($e){an(t,t.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:wi(i,t),Oi(t),l&4&&Mp(t);break;case 21:break;default:wi(i,t),Oi(t)}}function Oi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(vp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Qe(f,""),l.flags&=-33);var h=xp(t);fc(t,h,f);break;case 3:case 4:var w=l.stateNode.containerInfo,U=xp(t);cc(t,U,w);break;default:throw Error(n(161))}}catch(G){an(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function l_(t,i,a){Ge=t,Ep(t)}function Ep(t,i,a){for(var l=(t.mode&1)!==0;Ge!==null;){var f=Ge,h=f.child;if(f.tag===22&&l){var w=f.memoizedState!==null||zo;if(!w){var U=f.alternate,G=U!==null&&U.memoizedState!==null||Fn;U=zo;var le=Fn;if(zo=w,(Fn=G)&&!le)for(Ge=f;Ge!==null;)w=Ge,G=w.child,w.tag===22&&w.memoizedState!==null?Ap(f):G!==null?(G.return=w,Ge=G):Ap(f);for(;h!==null;)Ge=h,Ep(h),h=h.sibling;Ge=f,zo=U,Fn=le}wp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ge=h):wp(t)}}function wp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Fn||Ho(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Fn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Th(i,h,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Th(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&oa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Fn||i.flags&512&&uc(i)}catch(ve){an(i,i.return,ve)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Tp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Ap(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(G){an(i,a,G)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(G){an(i,f,G)}}var h=i.return;try{uc(i)}catch(G){an(i,h,G)}break;case 5:var w=i.return;try{uc(i)}catch(G){an(i,w,G)}}}catch(G){an(i,i.return,G)}if(i===t){Ge=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ge=U;break}Ge=i.return}}var u_=Math.ceil,Go=P.ReactCurrentDispatcher,dc=P.ReactCurrentOwner,di=P.ReactCurrentBatchConfig,Tt=0,En=null,cn=null,bn=0,ti=0,Ns=Sr(0),gn=0,Pa=null,Jr=0,Vo=0,hc=0,La=null,qn=null,pc=0,Is=1/0,ir=null,Wo=!1,mc=null,Ar=null,Xo=!1,Rr=null,qo=0,Da=0,gc=null,Yo=-1,$o=0;function zn(){return(Tt&6)!==0?qt():Yo!==-1?Yo:Yo=qt()}function Cr(t){return(t.mode&1)===0?1:(Tt&2)!==0&&bn!==0?bn&-bn:q0.transition!==null?($o===0&&($o=Nt()),$o):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Cd(t.type)),t)}function Ti(t,i,a,l){if(50<Da)throw Da=0,gc=null,Error(n(185));sn(t,a,l),((Tt&2)===0||t!==En)&&(t===En&&((Tt&2)===0&&(Vo|=a),gn===4&&br(t,bn)),Yn(t,l),a===1&&Tt===0&&(i.mode&1)===0&&(Is=qt()+500,yo&&yr()))}function Yn(t,i){var a=t.callbackNode;gt(t,i);var l=dt(t,t===En?bn:0);if(l===0)a!==null&&ai(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ai(a),i===1)t.tag===0?X0(Cp.bind(null,t)):hh(Cp.bind(null,t)),H0(function(){(Tt&6)===0&&yr()}),a=null;else{switch(Di(l)){case 1:a=ia;break;case 4:a=no;break;case 16:a=hs;break;case 536870912:a=A;break;default:a=hs}a=Fp(a,Rp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Rp(t,i){if(Yo=-1,$o=0,(Tt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Us()&&t.callbackNode!==a)return null;var l=dt(t,t===En?bn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ko(t,l);else{i=l;var f=Tt;Tt|=2;var h=Pp();(En!==t||bn!==i)&&(ir=null,Is=qt()+500,jr(t,i));do try{d_();break}catch(U){bp(t,U)}while(!0);Iu(),Go.current=h,Tt=f,cn!==null?i=0:(En=null,bn=0,i=gn)}if(i!==0){if(i===2&&(f=Yt(t),f!==0&&(l=f,i=_c(t,f))),i===1)throw a=Pa,jr(t,0),br(t,l),Yn(t,qt()),a;if(i===6)br(t,l);else{if(f=t.current.alternate,(l&30)===0&&!c_(f)&&(i=Ko(t,l),i===2&&(h=Yt(t),h!==0&&(l=h,i=_c(t,h))),i===1))throw a=Pa,jr(t,0),br(t,l),Yn(t,qt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:es(t,qn,ir);break;case 3:if(br(t,l),(l&130023424)===l&&(i=pc+500-qt(),10<i)){if(dt(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){zn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Eu(es.bind(null,t,qn,ir),i);break}es(t,qn,ir);break;case 4:if(br(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var w=31-J(l);h=1<<w,w=i[w],w>f&&(f=w),l&=~h}if(l=f,l=qt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*u_(l/1960))-l,10<l){t.timeoutHandle=Eu(es.bind(null,t,qn,ir),l);break}es(t,qn,ir);break;case 5:es(t,qn,ir);break;default:throw Error(n(329))}}}return Yn(t,qt()),t.callbackNode===a?Rp.bind(null,t):null}function _c(t,i){var a=La;return t.current.memoizedState.isDehydrated&&(jr(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=qn,qn=a,i!==null&&vc(i)),t}function vc(t){qn===null?qn=t:qn.push.apply(qn,t)}function c_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!Si(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(t,i){for(i&=~hc,i&=~Vo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-J(i),l=1<<a;t[a]=-1,i&=~l}}function Cp(t){if((Tt&6)!==0)throw Error(n(327));Us();var i=dt(t,0);if((i&1)===0)return Yn(t,qt()),null;var a=Ko(t,i);if(t.tag!==0&&a===2){var l=Yt(t);l!==0&&(i=l,a=_c(t,l))}if(a===1)throw a=Pa,jr(t,0),br(t,i),Yn(t,qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,es(t,qn,ir),Yn(t,qt()),null}function xc(t,i){var a=Tt;Tt|=1;try{return t(i)}finally{Tt=a,Tt===0&&(Is=qt()+500,yo&&yr())}}function Qr(t){Rr!==null&&Rr.tag===0&&(Tt&6)===0&&Us();var i=Tt;Tt|=1;var a=di.transition,l=Ke;try{if(di.transition=null,Ke=1,t)return t()}finally{Ke=l,di.transition=a,Tt=i,(Tt&6)===0&&yr()}}function Sc(){ti=Ns.current,Vt(Ns)}function jr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,z0(a)),cn!==null)for(a=cn.return;a!==null;){var l=a;switch(bu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&So();break;case 3:Ps(),Vt(Vn),Vt(Nn),Gu();break;case 5:zu(l);break;case 4:Ps();break;case 13:Vt(Jt);break;case 19:Vt(Jt);break;case 10:Uu(l.type._context);break;case 22:case 23:Sc()}a=a.return}if(En=t,cn=t=Pr(t.current,null),bn=ti=i,gn=0,Pa=null,hc=Vo=Jr=0,qn=La=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var w=h.next;h.next=f,l.next=w}a.pending=l}$r=null}return t}function bp(t,i){do{var a=cn;try{if(Iu(),Do.current=Fo,No){for(var l=Qt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}No=!1}if(Zr=0,yn=mn=Qt=null,wa=!1,Ta=0,dc.current=null,a===null||a.return===null){gn=1,Pa=i,cn=null;break}e:{var h=t,w=a.return,U=a,G=i;if(i=bn,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var le=G,xe=U,Ee=xe.tag;if((xe.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=ep(w);if(ke!==null){ke.flags&=-257,tp(ke,w,U,h,i),ke.mode&1&&jh(h,le,i),i=ke,G=le;var Ye=i.updateQueue;if(Ye===null){var $e=new Set;$e.add(G),i.updateQueue=$e}else Ye.add(G);break e}else{if((i&1)===0){jh(h,le,i),Mc();break e}G=Error(n(426))}}else if($t&&U.mode&1){var un=ep(w);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),tp(un,w,U,h,i),Du(Ls(G,U));break e}}h=G=Ls(G,U),gn!==4&&(gn=2),La===null?La=[h]:La.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ne=Jh(h,G,i);wh(h,ne);break e;case 1:U=G;var X=h.type,ae=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Ar===null||!Ar.has(ae)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ce=Qh(h,U,i);wh(h,Ce);break e}}h=h.return}while(h!==null)}Dp(a)}catch(Je){i=Je,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function Pp(){var t=Go.current;return Go.current=Fo,t===null?Fo:t}function Mc(){(gn===0||gn===3||gn===2)&&(gn=4),En===null||(Jr&268435455)===0&&(Vo&268435455)===0||br(En,bn)}function Ko(t,i){var a=Tt;Tt|=2;var l=Pp();(En!==t||bn!==i)&&(ir=null,jr(t,i));do try{f_();break}catch(f){bp(t,f)}while(!0);if(Iu(),Tt=a,Go.current=l,cn!==null)throw Error(n(261));return En=null,bn=0,gn}function f_(){for(;cn!==null;)Lp(cn)}function d_(){for(;cn!==null&&!Zt();)Lp(cn)}function Lp(t){var i=Up(t.alternate,t,ti);t.memoizedProps=t.pendingProps,i===null?Dp(t):cn=i,dc.current=null}function Dp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=r_(a,i,ti),a!==null){cn=a;return}}else{if(a=s_(a,i),a!==null){a.flags&=32767,cn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=t}while(i!==null);gn===0&&(gn=5)}function es(t,i,a){var l=Ke,f=di.transition;try{di.transition=null,Ke=1,h_(t,i,a,l)}finally{di.transition=f,Ke=l}return null}function h_(t,i,a,l){do Us();while(Rr!==null);if((Tt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(qe(t,h),t===En&&(cn=En=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,Fp(hs,function(){return Us(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=di.transition,di.transition=null;var w=Ke;Ke=1;var U=Tt;Tt|=4,dc.current=null,o_(t,a),yp(a,t),N0(Mu),so=!!Su,Mu=Su=null,t.current=a,l_(a),oi(),Tt=U,Ke=w,di.transition=h}else t.current=a;if(Xo&&(Xo=!1,Rr=t,qo=f),h=t.pendingLanes,h===0&&(Ar=null),te(a.stateNode),Yn(t,qt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Wo)throw Wo=!1,t=mc,mc=null,t;return(qo&1)!==0&&t.tag!==0&&Us(),h=t.pendingLanes,(h&1)!==0?t===gc?Da++:(Da=0,gc=t):Da=0,yr(),null}function Us(){if(Rr!==null){var t=Di(qo),i=di.transition,a=Ke;try{if(di.transition=null,Ke=16>t?16:t,Rr===null)var l=!1;else{if(t=Rr,Rr=null,qo=0,(Tt&6)!==0)throw Error(n(331));var f=Tt;for(Tt|=4,Ge=t.current;Ge!==null;){var h=Ge,w=h.child;if((Ge.flags&16)!==0){var U=h.deletions;if(U!==null){for(var G=0;G<U.length;G++){var le=U[G];for(Ge=le;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:ba(8,xe,h)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Ge=Ee;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ke=xe.return;if(_p(xe),xe===le){Ge=null;break}if(ve!==null){ve.return=ke,Ge=ve;break}Ge=ke}}}var Ye=h.alternate;if(Ye!==null){var $e=Ye.child;if($e!==null){Ye.child=null;do{var un=$e.sibling;$e.sibling=null,$e=un}while($e!==null)}}Ge=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,Ge=w;else e:for(;Ge!==null;){if(h=Ge,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ba(9,h,h.return)}var ne=h.sibling;if(ne!==null){ne.return=h.return,Ge=ne;break e}Ge=h.return}}var X=t.current;for(Ge=X;Ge!==null;){w=Ge;var ae=w.child;if((w.subtreeFlags&2064)!==0&&ae!==null)ae.return=w,Ge=ae;else e:for(w=X;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ho(9,U)}}catch(Je){an(U,U.return,Je)}if(U===w){Ge=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Ge=Ce;break e}Ge=U.return}}if(Tt=f,yr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(z,t)}catch{}l=!0}return l}finally{Ke=a,di.transition=i}}return!1}function Np(t,i,a){i=Ls(a,i),i=Jh(t,i,1),t=wr(t,i,1),i=zn(),t!==null&&(sn(t,1,i),Yn(t,i))}function an(t,i,a){if(t.tag===3)Np(t,t,a);else for(;i!==null;){if(i.tag===3){Np(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ar===null||!Ar.has(l))){t=Ls(a,t),t=Qh(i,t,1),i=wr(i,t,1),t=zn(),i!==null&&(sn(i,1,t),Yn(i,t));break}}i=i.return}}function p_(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=zn(),t.pingedLanes|=t.suspendedLanes&a,En===t&&(bn&a)===a&&(gn===4||gn===3&&(bn&130023424)===bn&&500>qt()-pc?jr(t,0):hc|=a),Yn(t,i)}function Ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=We,We<<=1,(We&130023424)===0&&(We=4194304)));var a=zn();t=er(t,i),t!==null&&(sn(t,i,a),Yn(t,a))}function m_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Ip(t,a)}function g_(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ip(t,a)}var Up;Up=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Vn.current)Xn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Xn=!1,i_(t,i,a);Xn=(t.flags&131072)!==0}else Xn=!1,$t&&(i.flags&1048576)!==0&&ph(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var f=Es(i,Nn.current);bs(i,a),f=Xu(null,i,l,t,f,a);var h=qu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(l)?(h=!0,Mo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Bu(i),f.updater=Oo,i.stateNode=f,f._reactInternals=i,Qu(i,l,t,a),i=nc(null,i,l,!0,h,a)):(i.tag=0,$t&&h&&Cu(i),kn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=v_(l),t=yi(l,t),f){case 0:i=tc(null,i,l,t,a);break e;case 1:i=op(null,i,l,t,a);break e;case 11:i=np(null,i,l,t,a);break e;case 14:i=ip(null,i,l,yi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:yi(l,f),tc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:yi(l,f),op(t,i,l,f,a);case 3:e:{if(lp(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,Eh(t,i),Po(i,l,null,a);var w=i.memoizedState;if(l=w.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ls(Error(n(423)),i),i=up(t,i,l,a,f);break e}else if(l!==f){f=Ls(Error(n(424)),i),i=up(t,i,l,a,f);break e}else for(ei=xr(i.stateNode.containerInfo.firstChild),jn=i,$t=!0,Mi=null,a=Mh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),l===f){i=nr(t,i,a);break e}kn(t,i,l,a)}i=i.child}return i;case 5:return Ah(i),t===null&&Lu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,w=f.children,yu(l,f)?w=null:h!==null&&yu(l,h)&&(i.flags|=32),ap(t,i),kn(t,i,w,a),i.child;case 6:return t===null&&Lu(i),null;case 13:return cp(t,i,a);case 4:return ku(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Rs(i,null,l,a):kn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:yi(l,f),np(t,i,l,f,a);case 7:return kn(t,i,i.pendingProps,a),i.child;case 8:return kn(t,i,i.pendingProps.children,a),i.child;case 12:return kn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,w=f.value,zt(Ro,l._currentValue),l._currentValue=w,h!==null)if(Si(h.value,w)){if(h.children===f.children&&!Vn.current){i=nr(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){w=h.child;for(var G=U.firstContext;G!==null;){if(G.context===l){if(h.tag===1){G=tr(-1,a&-a),G.tag=2;var le=h.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?G.next=G:(G.next=xe.next,xe.next=G),le.pending=G}}h.lanes|=a,G=h.alternate,G!==null&&(G.lanes|=a),Fu(h.return,a,i),U.lanes|=a;break}G=G.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(n(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Fu(w,a,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}kn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,bs(i,a),f=ci(f),l=l(f),i.flags|=1,kn(t,i,l,a),i.child;case 14:return l=i.type,f=yi(l,i.pendingProps),f=yi(l.type,f),ip(t,i,l,f,a);case 15:return rp(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:yi(l,f),ko(t,i),i.tag=1,Wn(l)?(t=!0,Mo(i)):t=!1,bs(i,a),Kh(i,l,f),Qu(i,l,f,a),nc(null,i,l,!0,t,a);case 19:return dp(t,i,a);case 22:return sp(t,i,a)}throw Error(n(156,i.tag))};function Fp(t,i){return Ki(t,i)}function __(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,i,a,l){return new __(t,i,a,l)}function yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return yc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===re)return 14}return 2}function Pr(t,i){var a=t.alternate;return a===null?(a=hi(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Zo(t,i,a,l,f,h){var w=2;if(l=t,typeof t=="function")yc(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case S:return ts(a.children,f,h,i);case R:w=8,f|=8;break;case q:return t=hi(12,a,i,f|2),t.elementType=q,t.lanes=h,t;case oe:return t=hi(13,a,i,f),t.elementType=oe,t.lanes=h,t;case B:return t=hi(19,a,i,f),t.elementType=B,t.lanes=h,t;case $:return Jo(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:w=10;break e;case W:w=9;break e;case Z:w=11;break e;case re:w=14;break e;case ce:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=hi(w,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function ts(t,i,a,l){return t=hi(7,t,l,i),t.lanes=a,t}function Jo(t,i,a,l){return t=hi(22,t,l,i),t.elementType=$,t.lanes=a,t.stateNode={isHidden:!1},t}function Ec(t,i,a){return t=hi(6,t,null,i),t.lanes=a,t}function wc(t,i,a){return i=hi(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function x_(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pt(0),this.expirationTimes=Pt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tc(t,i,a,l,f,h,w,U,G){return t=new x_(t,i,a,U,G),i===1?(i=1,h===!0&&(i|=8)):i=0,h=hi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(h),t}function S_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Op(t){if(!t)return Mr;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Wn(a))return fh(t,a,i)}return i}function Bp(t,i,a,l,f,h,w,U,G){return t=Tc(a,l,!0,t,f,h,w,U,G),t.context=Op(null),a=t.current,l=zn(),f=Cr(a),h=tr(l,f),h.callback=i??null,wr(a,h,f),t.current.lanes=f,sn(t,f,l),Yn(t,l),t}function Qo(t,i,a,l){var f=i.current,h=zn(),w=Cr(f);return a=Op(a),i.context===null?i.context=a:i.pendingContext=a,i=tr(h,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=wr(f,i,w),t!==null&&(Ti(t,f,w,h),bo(t,f,w)),w}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Ac(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function M_(){return null}var zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}el.prototype.render=Rc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qo(t,i,null,null)},el.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Qr(function(){Qo(null,t,null,null)}),i[Zi]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ni();t={blockedOn:null,target:t,priority:i};for(var a=0;a<gr.length&&i!==0&&i<gr[a].priority;a++);gr.splice(a,0,t),a===0&&Ad(t)}};function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function y_(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var le=jo(w);h.call(le)}}var w=Bp(i,l,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=w,t[Zi]=w.current,ga(t.nodeType===8?t.parentNode:t),Qr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var le=jo(G);U.call(le)}}var G=Tc(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=G,t[Zi]=G.current,ga(t.nodeType===8?t.parentNode:t),Qr(function(){Qo(i,G,a,l)}),G}function nl(t,i,a,l,f){var h=a._reactRootContainer;if(h){var w=h;if(typeof f=="function"){var U=f;f=function(){var G=jo(w);U.call(G)}}Qo(i,w,t,f)}else w=y_(a,i,t,f,l);return jo(w)}pn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=it(i.pendingLanes);a!==0&&(hn(i,a|1),Yn(i,qt()),(Tt&6)===0&&(Is=qt()+500,yr()))}break;case 13:Qr(function(){var l=er(t,1);if(l!==null){var f=zn();Ti(l,t,1,f)}}),Ac(t,1)}},pr=function(t){if(t.tag===13){var i=er(t,134217728);if(i!==null){var a=zn();Ti(i,t,134217728,a)}Ac(t,134217728)}},xi=function(t){if(t.tag===13){var i=Cr(t),a=er(t,i);if(a!==null){var l=zn();Ti(a,t,i,l)}Ac(t,i)}},Ni=function(){return Ke},St=function(t,i){var a=Ke;try{return Ke=t,i()}finally{Ke=a}},de=function(t,i,a){switch(i){case"input":if(Bt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=xo(l);if(!f)throw Error(n(90));lt(l),Bt(l,f)}}}break;case"textarea":V(t,a);break;case"select":i=a.value,i!=null&&rn(t,!!a.multiple,i,!1)}},we=xc,Re=Qr;var E_={usingClientEntryPoint:!1,Events:[xa,Ms,xo,ue,Ae,xc]},Na={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$i(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||M_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{z=il.inject(w_),se=il}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_,$n.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(i))throw Error(n(200));return S_(t,i,null,a)},$n.createRoot=function(t,i){if(!Cc(t))throw Error(n(299));var a=!1,l="",f=zp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Tc(t,1,!1,null,null,a,!1,l,f),t[Zi]=i.current,ga(t.nodeType===8?t.parentNode:t),new Rc(i)},$n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=$i(i),t=t===null?null:t.stateNode,t},$n.flushSync=function(t){return Qr(t)},$n.hydrate=function(t,i,a){if(!tl(i))throw Error(n(200));return nl(null,t,i,!0,a)},$n.hydrateRoot=function(t,i,a){if(!Cc(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",w=zp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Bp(i,null,t,1,a??null,f,!1,h,w),t[Zi]=i.current,ga(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new el(i)},$n.render=function(t,i,a){if(!tl(i))throw Error(n(200));return nl(null,t,i,!1,a)},$n.unmountComponentAtNode=function(t){if(!tl(t))throw Error(n(40));return t._reactRootContainer?(Qr(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1},$n.unstable_batchedUpdates=xc,$n.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!tl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return nl(t,i,a,!1,l)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Kp;function N_(){if(Kp)return Lc.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lc.exports=D_(),Lc.exports}var Zp;function I_(){if(Zp)return rl;Zp=1;var s=N_();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var U_=I_();const F_=jm(U_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="187",O_=0,Jp=1,B_=2,Il=1,k_=2,Ga=3,as=0,Zn=1,Pi=2,Ks=0,Wa=1,df=2,Qp=3,jp=4,z_=5,$s=100,H_=101,G_=102,V_=103,W_=104,X_=200,q_=201,Y_=202,$_=203,eg=204,tg=205,K_=206,Z_=207,J_=208,Q_=209,j_=210,ev=211,tv=212,nv=213,iv=214,hf=0,pf=1,mf=2,Xa=3,gf=4,_f=5,vf=6,xf=7,ng=0,rv=1,sv=2,fr=0,ig=1,rg=2,sg=3,sd=4,ag=5,og=6,lg=7,ug=300,Js=301,qa=302,Ic=303,Uc=304,Sf=1e3,cr=1001,Mf=1002,Pn=1003,av=1004,sl=1005,Kn=1006,Fc=1007,kr=1008,si=1009,cg=1010,fg=1011,Ya=1012,ad=1013,Xi=1014,Hi=1015,qi=1016,od=1017,ld=1018,Qs=1020,dg=35902,hg=35899,pg=1021,mg=1022,Gi=1023,Gr=1026,zr=1027,gg=1028,ud=1029,os=1030,cd=1031,fd=1033,Ul=33776,Fl=33777,Ol=33778,Bl=33779,yf=35840,Ef=35841,wf=35842,Tf=35843,Af=36196,Rf=37492,Cf=37496,bf=37488,Pf=37489,Vl=37490,Lf=37491,Df=37808,Nf=37809,If=37810,Uf=37811,Ff=37812,Of=37813,Bf=37814,kf=37815,zf=37816,Hf=37817,Gf=37818,Vf=37819,Wf=37820,Xf=37821,qf=36492,Yf=36494,$f=36495,Kf=36283,Zf=36284,Wl=36285,Jf=36286,ov=3200,Qf=0,lv=1,Br="",mi="srgb",Xl="srgb-linear",ql="linear",It="srgb",Oc=7680,uv=519,cv=512,fv=513,dv=514,_g=515,hv=516,pv=517,vg=518,xg=519,mv=35044,em="300 es",Li=2e3,$a=2001;function gv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _v(){const s=Yl("canvas");return s.style.display="block",s}const tm={};function nm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Sg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=Sg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Lt(...s){s=Sg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function kl(...s){const e=s.join(" ");e in tm||(tm[e]=!0,st(...s))}function vv(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const xv={[hf]:hf,[mf]:vf,[gf]:gf,[Xa]:_f,[pf]:pf,[vf]:mf,[xf]:xf,[_f]:Xa};class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,jf=180/Math.PI;function Za(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Et(s,e,n){return Math.max(e,Math.min(n,s))}function Sv(s,e){return(s%e+e)%e}function Bc(s,e,n){return(1-n)*s+n*e}function Mv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yv(s,e){if(e.constructor===Float32Array)return s;const n=dd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/n,-1)}function Ev(s,e){if(e.constructor===Float32Array)return s;const n=dd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*n)}const Md=class Md{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Md.prototype.isVector2=!0;let Mt=Md;class ta{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,d){let m=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3],g=u[c+0],M=u[c+1],E=u[c+2],C=u[c+3];if(y!==C||m!==g||p!==M||x!==E){let v=m*g+p*M+x*E+y*C;v<0&&(g=-g,M=-M,E=-E,C=-C,v=-v);let _=1-d;if(v<.9995){const b=Math.acos(v),F=Math.sin(b);_=Math.sin(_*b)/F,d=Math.sin(d*b)/F,m=m*_+g*d,p=p*_+M*d,x=x*_+E*d,y=y*_+C*d}else{m=m*_+g*d,p=p*_+M*d,x=x*_+E*d,y=y*_+C*d;const b=1/Math.sqrt(m*m+p*p+x*x+y*y);m*=b,p*=b,x*=b,y*=b}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,u,c){const d=r[o],m=r[o+1],p=r[o+2],x=r[o+3],y=u[c],g=u[c+1],M=u[c+2],E=u[c+3];return e[n]=d*E+x*y+m*M-p*g,e[n+1]=m*E+x*g+p*y-d*M,e[n+2]=p*E+x*M+d*g-m*y,e[n+3]=x*E-d*y-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(o/2),y=d(u/2),g=m(r/2),M=m(o/2),E=m(u/2);switch(c){case"XYZ":this._x=g*x*y+p*M*E,this._y=p*M*y-g*x*E,this._z=p*x*E+g*M*y,this._w=p*x*y-g*M*E;break;case"YXZ":this._x=g*x*y+p*M*E,this._y=p*M*y-g*x*E,this._z=p*x*E-g*M*y,this._w=p*x*y+g*M*E;break;case"ZXY":this._x=g*x*y-p*M*E,this._y=p*M*y+g*x*E,this._z=p*x*E+g*M*y,this._w=p*x*y-g*M*E;break;case"ZYX":this._x=g*x*y-p*M*E,this._y=p*M*y+g*x*E,this._z=p*x*E-g*M*y,this._w=p*x*y+g*M*E;break;case"YZX":this._x=g*x*y+p*M*E,this._y=p*M*y+g*x*E,this._z=p*x*E-g*M*y,this._w=p*x*y-g*M*E;break;case"XZY":this._x=g*x*y-p*M*E,this._y=p*M*y-g*x*E,this._z=p*x*E+g*M*y,this._w=p*x*y+g*M*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],d=n[5],m=n[9],p=n[2],x=n[6],y=n[10],g=r+d+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(c-o)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(x-m)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+p)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-p)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(c-o)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,d=n._x,m=n._y,p=n._z,x=n._w;return this._x=r*x+c*d+o*p-u*m,this._y=o*x+c*m+u*d-r*p,this._z=u*x+c*p+r*m-o*d,this._w=c*x-r*d-o*m-u*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yd=class yd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,m=e.w,p=2*(c*o-d*r),x=2*(d*n-u*o),y=2*(u*r-c*n);return this.x=n+m*p+c*y-d*x,this.y=r+m*x+d*p-u*y,this.z=o+m*y+u*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*c-r*m,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yd.prototype.isVector3=!0;let H=yd;const kc=new H,im=new ta,Ed=class Ed{constructor(e,n,r,o,u,c,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,m,p)}set(e,n,r,o,u,c,d,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=u,x[5]=m,x[6]=r,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[3],m=r[6],p=r[1],x=r[4],y=r[7],g=r[2],M=r[5],E=r[8],C=o[0],v=o[3],_=o[6],b=o[1],F=o[4],P=o[7],I=o[2],D=o[5],S=o[8];return u[0]=c*C+d*b+m*I,u[3]=c*v+d*F+m*D,u[6]=c*_+d*P+m*S,u[1]=p*C+x*b+y*I,u[4]=p*v+x*F+y*D,u[7]=p*_+x*P+y*S,u[2]=g*C+M*b+E*I,u[5]=g*v+M*F+E*D,u[8]=g*_+M*P+E*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return n*c*x-n*d*p-r*u*x+r*d*m+o*u*p-o*c*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8],y=x*c-d*p,g=d*m-x*u,M=p*u-c*m,E=n*y+r*g+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(o*p-x*r)*C,e[2]=(d*r-o*c)*C,e[3]=g*C,e[4]=(x*n-o*m)*C,e[5]=(o*u-d*n)*C,e[6]=M*C,e[7]=(r*m-p*n)*C,e[8]=(c*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*c+p*d)+c+e,-o*p,o*m,-o*(-p*c+m*d)+d+n,0,0,1),this}scale(e,n){return kl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,n)),this}rotate(e){return kl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return kl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ed.prototype.isMatrix3=!0;let ct=Ed;const zc=new ct,rm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wv(){const s={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===It&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Br?ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xl]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const yt=wv();function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class Tv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=Yl("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=dr(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(dr(n[r]/255)*255):n[r]=dr(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Av=0;class hd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Hc(o[c].image)):u.push(Hc(o[c]))}else u=Hc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Rv=0;const Gc=new H;class Gn extends us{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=cr,o=cr,u=Kn,c=kr,d=Gi,m=si,p=Gn.DEFAULT_ANISOTROPY,x=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Za(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ug;Gn.DEFAULT_ANISOTROPY=1;const wd=class wd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const m=e.elements,p=m[0],x=m[4],y=m[8],g=m[1],M=m[5],E=m[9],C=m[2],v=m[6],_=m[10];if(Math.abs(x-g)<.01&&Math.abs(y-C)<.01&&Math.abs(E-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+C)<.1&&Math.abs(E+v)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,P=(M+1)/2,I=(_+1)/2,D=(x+g)/4,S=(y+C)/4,R=(E+v)/4;return F>P&&F>I?F<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(F),o=D/r,u=S/r):P>I?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=D/o,u=R/o):I<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),r=S/u,o=R/u),this.set(r,o,u,n),this}let b=Math.sqrt((v-E)*(v-E)+(y-C)*(y-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(v-E)/b,this.y=(y-C)/b,this.z=(g-x)/b,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wd.prototype.isVector4=!0;let tn=wd;class Cv extends us{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new tn(0,0,e,n),this.scissorTest=!1,this.viewport=new tn(0,0,e,n),this.textures=[];const o=r.count;for(let u=0;u<o;u++)this.textures[u]=new Gn({width:e,height:n,depth:r.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new hd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Cv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Mg extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,n,r,o,u,c,d,m,p,x,y,g,M,E,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,m,p,x,y,g,M,E,C,v)}set(e,n,r,o,u,c,d,m,p,x,y,g,M,E,C,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=u,_[5]=c,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=y,_[14]=g,_[3]=M,_[7]=E,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),u=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const g=c*x,M=c*y,E=d*x,C=d*y;n[0]=m*x,n[4]=-m*y,n[8]=p,n[1]=M+E*p,n[5]=g-C*p,n[9]=-d*m,n[2]=C-g*p,n[6]=E+M*p,n[10]=c*m}else if(e.order==="YXZ"){const g=m*x,M=m*y,E=p*x,C=p*y;n[0]=g+C*d,n[4]=E*d-M,n[8]=c*p,n[1]=c*y,n[5]=c*x,n[9]=-d,n[2]=M*d-E,n[6]=C+g*d,n[10]=c*m}else if(e.order==="ZXY"){const g=m*x,M=m*y,E=p*x,C=p*y;n[0]=g-C*d,n[4]=-c*y,n[8]=E+M*d,n[1]=M+E*d,n[5]=c*x,n[9]=C-g*d,n[2]=-c*p,n[6]=d,n[10]=c*m}else if(e.order==="ZYX"){const g=c*x,M=c*y,E=d*x,C=d*y;n[0]=m*x,n[4]=E*p-M,n[8]=g*p+C,n[1]=m*y,n[5]=C*p+g,n[9]=M*p-E,n[2]=-p,n[6]=d*m,n[10]=c*m}else if(e.order==="YZX"){const g=c*m,M=c*p,E=d*m,C=d*p;n[0]=m*x,n[4]=C-g*y,n[8]=E*y+M,n[1]=y,n[5]=c*x,n[9]=-d*x,n[2]=-p*x,n[6]=M*y+E,n[10]=g-C*y}else if(e.order==="XZY"){const g=c*m,M=c*p,E=d*m,C=d*p;n[0]=m*x,n[4]=-y,n[8]=p*x,n[1]=g*y+C,n[5]=c*x,n[9]=M*y-E,n[2]=E*y-M,n[6]=d*x,n[10]=C*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pv,e,Lv)}lookAt(e,n,r){const o=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Dr.crossVectors(r,ni),Dr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Dr.crossVectors(r,ni)),Dr.normalize(),al.crossVectors(ni,Dr),o[0]=Dr.x,o[4]=al.x,o[8]=ni.x,o[1]=Dr.y,o[5]=al.y,o[9]=ni.y,o[2]=Dr.z,o[6]=al.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[4],m=r[8],p=r[12],x=r[1],y=r[5],g=r[9],M=r[13],E=r[2],C=r[6],v=r[10],_=r[14],b=r[3],F=r[7],P=r[11],I=r[15],D=o[0],S=o[4],R=o[8],q=o[12],k=o[1],W=o[5],Z=o[9],oe=o[13],B=o[2],re=o[6],ce=o[10],$=o[14],Q=o[3],Y=o[7],K=o[11],N=o[15];return u[0]=c*D+d*k+m*B+p*Q,u[4]=c*S+d*W+m*re+p*Y,u[8]=c*R+d*Z+m*ce+p*K,u[12]=c*q+d*oe+m*$+p*N,u[1]=x*D+y*k+g*B+M*Q,u[5]=x*S+y*W+g*re+M*Y,u[9]=x*R+y*Z+g*ce+M*K,u[13]=x*q+y*oe+g*$+M*N,u[2]=E*D+C*k+v*B+_*Q,u[6]=E*S+C*W+v*re+_*Y,u[10]=E*R+C*Z+v*ce+_*K,u[14]=E*q+C*oe+v*$+_*N,u[3]=b*D+F*k+P*B+I*Q,u[7]=b*S+F*W+P*re+I*Y,u[11]=b*R+F*Z+P*ce+I*K,u[15]=b*q+F*oe+P*$+I*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],m=e[9],p=e[13],x=e[2],y=e[6],g=e[10],M=e[14],E=e[3],C=e[7],v=e[11],_=e[15],b=m*M-p*g,F=d*M-p*y,P=d*g-m*y,I=c*M-p*x,D=c*g-m*x,S=c*y-d*x;return n*(C*b-v*F+_*P)-r*(E*b-v*I+_*D)+o*(E*F-C*I+_*S)-u*(E*P-C*D+v*S)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],m=e[2],p=e[6],x=e[10];return n*(c*x-d*p)-r*(u*x-d*m)+o*(u*p-c*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8],y=e[9],g=e[10],M=e[11],E=e[12],C=e[13],v=e[14],_=e[15],b=n*d-r*c,F=n*m-o*c,P=n*p-u*c,I=r*m-o*d,D=r*p-u*d,S=o*p-u*m,R=x*C-y*E,q=x*v-g*E,k=x*_-M*E,W=y*v-g*C,Z=y*_-M*C,oe=g*_-M*v,B=b*oe-F*Z+P*W+I*k-D*q+S*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/B;return e[0]=(d*oe-m*Z+p*W)*re,e[1]=(o*Z-r*oe-u*W)*re,e[2]=(C*S-v*D+_*I)*re,e[3]=(g*D-y*S-M*I)*re,e[4]=(m*k-c*oe-p*q)*re,e[5]=(n*oe-o*k+u*q)*re,e[6]=(v*P-E*S-_*F)*re,e[7]=(x*S-g*P+M*F)*re,e[8]=(c*Z-d*k+p*R)*re,e[9]=(r*k-n*Z-u*R)*re,e[10]=(E*D-C*P+_*b)*re,e[11]=(y*P-x*D-M*b)*re,e[12]=(d*q-c*W-m*R)*re,e[13]=(n*W-r*q+o*R)*re,e[14]=(C*F-E*I-v*b)*re,e[15]=(x*I-y*F+g*b)*re,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,d=e.y,m=e.z,p=u*c,x=u*d;return this.set(p*c+r,p*d-o*m,p*m+o*d,0,p*d+o*m,x*d+r,x*m-o*c,0,p*m-o*d,x*m+o*c,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,d=n._z,m=n._w,p=u+u,x=c+c,y=d+d,g=u*p,M=u*x,E=u*y,C=c*x,v=c*y,_=d*y,b=m*p,F=m*x,P=m*y,I=r.x,D=r.y,S=r.z;return o[0]=(1-(C+_))*I,o[1]=(M+P)*I,o[2]=(E-F)*I,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(g+_))*D,o[6]=(v+b)*D,o[7]=0,o[8]=(E+F)*S,o[9]=(v-b)*S,o[10]=(1-(g+C))*S,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Os.set(o[0],o[1],o[2]).length();const d=Os.set(o[4],o[5],o[6]).length(),m=Os.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Ai.copy(this);const p=1/c,x=1/d,y=1/m;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,n.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=m,this}makePerspective(e,n,r,o,u,c,d=Li,m=!1){const p=this.elements,x=2*u/(n-e),y=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let E,C;if(m)E=u/(c-u),C=c*u/(c-u);else if(d===Li)E=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(d===$a)E=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,u,c,d=Li,m=!1){const p=this.elements,x=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let E,C;if(m)E=1/(c-u),C=c/(c-u);else if(d===Li)E=-2/(c-u),C=-(c+u)/(c-u);else if(d===$a)E=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Ql.prototype.isMatrix4=!0;let Wt=Ql;const Os=new H,Ai=new Wt,Pv=new H(0,0,0),Lv=new H(1,1,1),Dr=new H,al=new H,ni=new H,am=new Wt,om=new ta;class Vr{constructor(e=0,n=0,r=0,o=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],m=o[1],p=o[5],x=o[9],y=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dv=0;const lm=new H,Bs=new ta,rr=new Wt,ol=new H,Ua=new H,Nv=new H,Iv=new ta,um=new H(1,0,0),cm=new H(0,1,0),fm=new H(0,0,1),dm={type:"added"},Uv={type:"removed"},ks={type:"childadded",child:null},Vc={type:"childremoved",child:null};class An extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new H,n=new Vr,r=new ta,o=new H(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ct}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ua,ol,this.up):rr.lookAt(ol,Ua,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(rr),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),ks.child=e,this.dispatchEvent(ks),ks.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uv),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,Nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const y=m[p];u(e.shapes,y)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(n){const d=c(e.geometries),m=c(e.materials),p=c(e.textures),x=c(e.images),y=c(e.shapes),g=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}An.DEFAULT_UP=new H(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ur extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),_=this._getHandJoint(p,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=x.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ur;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Xc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=yt.workingColorSpace){if(e=Sv(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Xc(c,u,e+1/3),this.g=Xc(c,u,e),this.b=Xc(c,u,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,n=mi){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,n);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return yt.workingToColorSpace(Bn.copy(this),e),Math.round(Et(Bn.r*255,0,255))*65536+Math.round(Et(Bn.g*255,0,255))*256+Math.round(Et(Bn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.workingToColorSpace(Bn.copy(this),n);const r=Bn.r,o=Bn.g,u=Bn.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let m,p;const x=(d+c)/2;if(d===c)m=0,p=0;else{const y=c-d;switch(p=x<=.5?y/(c+d):y/(2-c-d),c){case r:m=(o-u)/y+(o<u?6:0);break;case o:m=(u-r)/y+2;break;case u:m=(r-o)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=yt.workingColorSpace){return yt.workingToColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=mi){yt.workingToColorSpace(Bn.copy(this),e);const n=Bn.r,r=Bn.g,o=Bn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+n,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Nr),e.getHSL(ll);const r=Bc(Nr.h,ll.h,n),o=Bc(Nr.s,ll.s,n),u=Bc(Nr.l,ll.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new pt;pt.NAMES=Eg;class pd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new pd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ov extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ri=new H,sr=new H,qc=new H,ar=new H,zs=new H,Hs=new H,hm=new H,Yc=new H,$c=new H,Kc=new H,Zc=new tn,Jc=new tn,Qc=new tn;class _i{constructor(e=new H,n=new H,r=new H){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ri.subVectors(e,n),o.cross(Ri);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ri.subVectors(o,n),sr.subVectors(r,n),qc.subVectors(e,n);const c=Ri.dot(Ri),d=Ri.dot(sr),m=Ri.dot(qc),p=sr.dot(sr),x=sr.dot(qc),y=c*p-d*d;if(y===0)return u.set(0,0,0),null;const g=1/y,M=(p*m-d*x)*g,E=(c*x-d*m)*g;return u.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,n,r,o,u,c,d,m){return this.getBarycoord(e,n,r,o,ar)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ar.x),m.addScaledVector(c,ar.y),m.addScaledVector(d,ar.z),m)}static getInterpolatedAttribute(e,n,r,o,u,c){return Zc.setScalar(0),Jc.setScalar(0),Qc.setScalar(0),Zc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,r),Qc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zc,u.x),c.addScaledVector(Jc,u.y),c.addScaledVector(Qc,u.z),c}static isFrontFacing(e,n,r,o){return Ri.subVectors(r,n),sr.subVectors(e,n),Ri.cross(sr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ri.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,d;zs.subVectors(o,r),Hs.subVectors(u,r),Yc.subVectors(e,r);const m=zs.dot(Yc),p=Hs.dot(Yc);if(m<=0&&p<=0)return n.copy(r);$c.subVectors(e,o);const x=zs.dot($c),y=Hs.dot($c);if(x>=0&&y<=x)return n.copy(o);const g=m*y-x*p;if(g<=0&&m>=0&&x<=0&&m-x>0)return c=m/(m-x),n.copy(r).addScaledVector(zs,c);Kc.subVectors(e,u);const M=zs.dot(Kc),E=Hs.dot(Kc);if(E>=0&&M<=E)return n.copy(u);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(r).addScaledVector(Hs,d);const v=x*E-M*y;if(v<=0&&y-x>=0&&M-E>=0)return hm.subVectors(u,o),d=(y-x)/(y-x+(M-E)),n.copy(o).addScaledVector(hm,d);const _=1/(v+C+g);return c=C*_,d=g*_,n.copy(r).addScaledVector(zs,c).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(u,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),cl.subVectors(this.max,Fa),Gs.subVectors(e.a,Fa),Vs.subVectors(e.b,Fa),Ws.subVectors(e.c,Fa),Ir.subVectors(Vs,Gs),Ur.subVectors(Ws,Vs),ns.subVectors(Gs,Ws);let n=[0,-Ir.z,Ir.y,0,-Ur.z,Ur.y,0,-ns.z,ns.y,Ir.z,0,-Ir.x,Ur.z,0,-Ur.x,ns.z,0,-ns.x,-Ir.y,Ir.x,0,-Ur.y,Ur.x,0,-ns.y,ns.x,0];return!jc(n,Gs,Vs,Ws,cl)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,Gs,Vs,Ws,cl))?!1:(fl.crossVectors(Ir,Ur),n=[fl.x,fl.y,fl.z],jc(n,Gs,Vs,Ws,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new H,new H,new H,new H,new H,new H,new H,new H],Ci=new H,ul=new Ja,Gs=new H,Vs=new H,Ws=new H,Ir=new H,Ur=new H,ns=new H,Fa=new H,cl=new H,fl=new H,is=new H;function jc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){is.fromArray(s,u);const d=o.x*Math.abs(is.x)+o.y*Math.abs(is.y)+o.z*Math.abs(is.z),m=e.dot(is),p=n.dot(is),x=r.dot(is);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const fn=new H,dl=new Mt;let Bv=0;class Hr extends us{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=mv,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=e!==void 0?dd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,n,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r),o=this._normalize(o),u=this._normalize(u)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):yv(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Ev(e,this.array)}}class wg extends Hr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Tg extends Hr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class nn extends Hr{constructor(e,n,r){super(new Float32Array(e),n,r)}}const kv=new Ja,Oa=new H,ef=new H;class Qa{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const n=Oa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(ef)),this.expandByPoint(Oa.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zv=0;const pi=new Wt,tf=new An,Xs=new H,ii=new Ja,Ba=new Ja,Tn=new H;class en extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Tg:wg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ct().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,r){return pi.makeTranslation(e,n,r),this.applyMatrix4(pi),this}scale(e,n,r){return pi.makeScale(e,n,r),this.applyMatrix4(pi),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new nn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Ba.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ii.min,Ba.min),ii.expandByPoint(Tn),Tn.addVectors(ii.max,Ba.max),ii.expandByPoint(Tn)):(ii.expandByPoint(Ba.min),ii.expandByPoint(Ba.max))}ii.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)Tn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(Tn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Tn.fromBufferAttribute(d,p),m&&(Xs.fromBufferAttribute(e,p),Tn.add(Xs)),o=Math.max(o,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Hr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],m=[],p=new Uint8Array(r.count);for(let q=0;q<r.count;q++)d[q]=new H,m[q]=new H;const x=new H,y=new H,g=new H,M=new Mt,E=new Mt,C=new Mt,v=new H,_=new H;function b(q,k,W){p[q]=p[k]=p[W]=1,x.fromBufferAttribute(r,q),y.fromBufferAttribute(r,k),g.fromBufferAttribute(r,W),M.fromBufferAttribute(u,q),E.fromBufferAttribute(u,k),C.fromBufferAttribute(u,W),y.sub(x),g.sub(x),E.sub(M),C.sub(M);const Z=1/(E.x*C.y-C.x*E.y);isFinite(Z)&&(v.copy(y).multiplyScalar(C.y).addScaledVector(g,-E.y).multiplyScalar(Z),_.copy(g).multiplyScalar(E.x).addScaledVector(y,-C.x).multiplyScalar(Z),d[q].add(v),d[k].add(v),d[W].add(v),m[q].add(_),m[k].add(_),m[W].add(_))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let q=0,k=F.length;q<k;++q){const W=F[q],Z=W.start,oe=W.count;for(let B=Z,re=Z+oe;B<re;B+=3)b(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const P=new H,I=new H,D=new H,S=new H;function R(q){D.fromBufferAttribute(o,q),S.copy(D);const k=d[q];P.copy(k),P.sub(D.multiplyScalar(D.dot(k))).normalize(),I.crossVectors(S,k);const Z=I.dot(m[q])<0?-1:1;c.setXYZW(q,P.x,P.y,P.z,Z)}for(let q=0,k=r.count;q<k;++q)p[q]&&R(q);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Hr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new H,u=new H,c=new H,d=new H,m=new H,p=new H,x=new H,y=new H;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,v),x.subVectors(c,u),y.subVectors(o,u),x.cross(y),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,v),d.add(x),m.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),x.subVectors(c,u),y.subVectors(o,u),x.cross(y),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,y=d.normalized,g=new p.constructor(m.length*x);let M=0,E=0;for(let C=0,v=m.length;C<v;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*x;for(let _=0;_<x;_++)g[E++]=p[M++]}return new Hr(g,x,y)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new en,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,y=p.length;x<y;x++){const g=p[x],M=e(g,r);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let y=0,g=p.length;y<g;y++){const M=p[y];x.push(M.toJSON(e.data))}x.length>0&&(o[m]=x,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const u=e.morphAttributes;for(const p in u){const x=[],y=u[p];for(let g=0,M=y.length;g<M;g++)x.push(y[g].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const y=c[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new H,Hv=new H,Gv=new ct;class Or{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=nf.subVectors(r,n).cross(Hv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(nf),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Gv.getNormalMatrix(e),o=this.coplanarPoint(nf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vv=0;class cs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Wa,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eg,this.blendDst=tg,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oc,this.stencilZFail=Oc,this.stencilZPass=Oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const m=u[d];delete m.metadata,c.push(m)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Or().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new H,rf=new H,hl=new H,pl=new H;class md{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=lr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,n),lr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){rf.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),pl.copy(this.origin).sub(rf);const u=e.distanceTo(n)*.5,c=-this.direction.dot(hl),d=pl.dot(this.direction),m=-pl.dot(hl),p=pl.lengthSq(),x=Math.abs(1-c*c);let y,g,M,E;if(x>0)if(y=c*m-d,g=c*d-m,E=u*x,y>=0)if(g>=-E)if(g<=E){const C=1/x;y*=C,g*=C,M=y*(y+c*g+2*d)+g*(c*y+g+2*m)+p}else g=u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*m)+p;else g=-u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*m)+p;else g<=-E?(y=Math.max(0,-(-c*u+d)),g=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+g*(g+2*m)+p):g<=E?(y=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+p):(y=Math.max(0,-(c*u+d)),g=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+g*(g+2*m)+p);else g=c>0?-u:u,y=Math.max(0,-(c*g+d)),M=-y*y+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(rf).addScaledVector(hl,g),M}intersectSphere(e,n){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,m=r+c;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,d,m;const p=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(u=(e.min.y-g.y)*x,c=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,c=(e.min.y-g.y)*x),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),y>=0?(d=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,n,r,o,u){const c=this.origin,d=this.direction,m=d.x,p=d.y,x=d.z,y=e.x-c.x,g=e.y-c.y,M=e.z-c.z,E=n.x-c.x,C=n.y-c.y,v=n.z-c.z,_=r.x-c.x,b=r.y-c.y,F=r.z-c.z,P=Math.abs(m),I=Math.abs(p),D=Math.abs(x);let S,R,q,k,W,Z,oe,B,re,ce,$,Q;if(P>=I&&P>=D?(q=m,Z=y,re=E,Q=_,m>=0?(S=p,R=x,k=g,W=M,oe=C,B=v,ce=b,$=F):(S=x,R=p,k=M,W=g,oe=v,B=C,ce=F,$=b)):I>=D?(q=p,Z=g,re=C,Q=b,p>=0?(S=x,R=m,k=M,W=y,oe=v,B=E,ce=F,$=_):(S=m,R=x,k=y,W=M,oe=E,B=v,ce=_,$=F)):(q=x,Z=M,re=v,Q=F,x>=0?(S=m,R=p,k=y,W=g,oe=E,B=C,ce=_,$=b):(S=p,R=m,k=g,W=y,oe=C,B=E,ce=b,$=_)),q===0)return null;const Y=S/q,K=R/q,N=1/q,ee=k-Y*Z,Pe=W-K*Z,ie=oe-Y*re,ge=B-K*re,Se=ce-Y*Q,Ie=$-K*Q,pe=Se*ge-Ie*ie,Be=ee*Ie-Pe*Se,xt=ie*Pe-ge*ee;if(o){if(pe<0||Be<0||xt<0)return null}else if((pe<0||Be<0||xt<0)&&(pe>0||Be>0||xt>0))return null;const je=pe+Be+xt;if(je===0)return null;const lt=N*(pe*Z+Be*re+xt*Q);return(je>0?lt<0:lt>0)?null:this.at(lt/je,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hl extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pm=new Wt,rs=new md,ml=new Qa,mm=new H,gl=new H,_l=new H,vl=new H,sf=new H,xl=new H,gm=new H,Sl=new H;class jt extends An{constructor(e=new en,n=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){xl.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],y=u[m];x!==0&&(sf.fromBufferAttribute(y,e),c?xl.addScaledVector(sf,x):xl.addScaledVector(sf.sub(n),x))}n.add(xl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(u),rs.copy(e.ray).recast(e.near),!(ml.containsPoint(rs.origin)===!1&&(rs.intersectSphere(ml,mm)===null||rs.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(u).invert(),rs.copy(e.ray).applyMatrix4(pm),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,rs)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,y=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){const v=g[E],_=c[v.materialIndex],b=Math.max(v.start,M.start),F=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let P=b,I=F;P<I;P+=3){const D=d.getX(P),S=d.getX(P+1),R=d.getX(P+2);o=Ml(this,_,e,r,p,x,y,D,S,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let v=E,_=C;v<_;v+=3){const b=d.getX(v),F=d.getX(v+1),P=d.getX(v+2);o=Ml(this,c,e,r,p,x,y,b,F,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){const v=g[E],_=c[v.materialIndex],b=Math.max(v.start,M.start),F=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let P=b,I=F;P<I;P+=3){const D=P,S=P+1,R=P+2;o=Ml(this,_,e,r,p,x,y,D,S,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let v=E,_=C;v<_;v+=3){const b=v,F=v+1,P=v+2;o=Ml(this,c,e,r,p,x,y,b,F,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function Wv(s,e,n,r,o,u,c,d){let m;if(e.side===Zn?m=r.intersectTriangle(c,u,o,!0,d):m=r.intersectTriangle(o,u,c,e.side===as,d),m===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Sl);return p<n.near||p>n.far?null:{distance:p,point:Sl.clone(),object:s}}function Ml(s,e,n,r,o,u,c,d,m,p){s.getVertexPosition(d,gl),s.getVertexPosition(m,_l),s.getVertexPosition(p,vl);const x=Wv(s,e,n,r,gl,_l,vl,gm);if(x){const y=new H;_i.getBarycoord(gm,gl,_l,vl,y),o&&(x.uv=_i.getInterpolatedAttribute(o,d,m,p,y,new Mt)),u&&(x.uv1=_i.getInterpolatedAttribute(u,d,m,p,y,new Mt)),c&&(x.normal=_i.getInterpolatedAttribute(c,d,m,p,y,new H),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new H,materialIndex:0};_i.getNormal(gl,_l,vl,g.normal),x.face=g,x.barycoord=y}return x}class Xv extends Gn{constructor(e=null,n=1,r=1,o,u,c,d,m,p=Pn,x=Pn,y,g){super(null,c,d,m,p,x,o,u,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ss=new Qa,qv=new Mt(.5,.5),yl=new H;class Ka{constructor(e=new Or,n=new Or,r=new Or,o=new Or,u=new Or,c=new Or){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],m=u[2],p=u[3],x=u[4],y=u[5],g=u[6],M=u[7],E=u[8],C=u[9],v=u[10],_=u[11],b=u[12],F=u[13],P=u[14],I=u[15];if(o[0].setComponents(p-c,M-x,_-E,I-b).normalize(),o[1].setComponents(p+c,M+x,_+E,I+b).normalize(),o[2].setComponents(p+d,M+y,_+C,I+F).normalize(),o[3].setComponents(p-d,M-y,_-C,I-F).normalize(),r)o[4].setComponents(m,g,v,P).normalize(),o[5].setComponents(p-m,M-g,_-v,I-P).normalize();else if(o[4].setComponents(p-m,M-g,_-v,I-P).normalize(),n===Li)o[5].setComponents(p+m,M+g,_+v,I+P).normalize();else if(n===$a)o[5].setComponents(m,g,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const n=qv.distanceTo(e.center);return ss.radius=.7071067811865476+n,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yl.x=o.normal.x>0?e.max.x:e.min.x,yl.y=o.normal.y>0?e.max.y:e.min.y,yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const _m=new Wt;class gd{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,r=this._frustums;for(let o=0;o<n.length;o++){const u=n[o];_m.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),r[o]===void 0&&(r[o]=new Ka),r[o].setFromProjectionMatrix(_m,u.coordinateSystem,u.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)n[o]===void 0&&(n[o]=new Ka),n[o].copy(r[o]);return this._count=e._count,this}clone(){return new gd().copy(this)}}class ri extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new H,Kl=new H,vm=new Wt,ka=new md,El=new Qa,af=new H,xm=new H;class Ag extends An{constructor(e=new en,n=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)$l.fromBufferAttribute(n,o-1),Kl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=$l.distanceTo(Kl);e.setAttribute("lineDistance",new nn(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=u,e.ray.intersectsSphere(El)===!1)return;vm.copy(o).invert(),ka.copy(e.ray).applyMatrix4(vm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const M=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let C=M,v=E-1;C<v;C+=p){const _=x.getX(C),b=x.getX(C+1),F=wl(this,e,ka,m,_,b,C);F&&n.push(F)}if(this.isLineLoop){const C=x.getX(E-1),v=x.getX(M),_=wl(this,e,ka,m,C,v,E-1);_&&n.push(_)}}else{const M=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let C=M,v=E-1;C<v;C+=p){const _=wl(this,e,ka,m,C,C+1,C);_&&n.push(_)}if(this.isLineLoop){const C=wl(this,e,ka,m,E-1,M,E-1);C&&n.push(C)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function wl(s,e,n,r,o,u,c){const d=s.geometry.attributes.position;if($l.fromBufferAttribute(d,o),Kl.fromBufferAttribute(d,u),n.distanceSqToSegment($l,Kl,af,xm)>r)return;af.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(af);if(!(p<e.near||p>e.far))return{distance:p,point:xm.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const Sm=new H,Mm=new H;class bi extends Ag{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,u=n.count;o<u;o+=2)Sm.fromBufferAttribute(n,o),Mm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Sm.distanceTo(Mm);e.setAttribute("lineDistance",new nn(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rg extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ym=new Wt,ed=new md,Tl=new Qa,Al=new H;class Yv extends An{constructor(e=new en,n=new Rg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=u,e.ray.intersectsSphere(Tl)===!1)return;ym.copy(o).invert(),ed.copy(e.ray).applyMatrix4(ym);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,y=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=g,C=M;E<C;E++){const v=p.getX(E);Al.fromBufferAttribute(y,v),Em(Al,v,m,o,e,n,this)}}else{const g=Math.max(0,c.start),M=Math.min(y.count,c.start+c.count);for(let E=g,C=M;E<C;E++)Al.fromBufferAttribute(y,E),Em(Al,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Em(s,e,n,r,o,u,c){const d=ed.distanceSqToPoint(s);if(d<n){const m=new H;ed.closestPointToPoint(s,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Cg extends Gn{constructor(e=[],n=Js,r,o,u,c,d,m,p,x){super(e,n,r,o,u,c,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends Gn{constructor(e,n,r=Xi,o,u,c,d=Pn,m=Pn,p,x=Gr,y=1){if(x!==Gr&&x!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,u,c,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class bg extends js{constructor(e,n=Xi,r=Js,o,u,c=Pn,d=Pn,m,p=Gr){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,n,r,o,u,c,d,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pg extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _n extends en{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],p=[],x=[],y=[];let g=0,M=0;E("z","y","x",-1,-1,r,n,e,c,u,0),E("z","y","x",1,-1,r,n,-e,c,u,1),E("x","z","y",1,1,e,r,n,o,c,2),E("x","z","y",1,-1,e,r,-n,o,c,3),E("x","y","z",1,-1,e,n,r,o,u,4),E("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(y,2));function E(C,v,_,b,F,P,I,D,S,R,q){const k=P/S,W=I/R,Z=P/2,oe=I/2,B=D/2,re=S+1,ce=R+1;let $=0,Q=0;const Y=new H;for(let K=0;K<ce;K++){const N=K*W-oe;for(let ee=0;ee<re;ee++){const Pe=ee*k-Z;Y[C]=Pe*b,Y[v]=N*F,Y[_]=B,p.push(Y.x,Y.y,Y.z),Y[C]=0,Y[v]=0,Y[_]=D>0?1:-1,x.push(Y.x,Y.y,Y.z),y.push(ee/S),y.push(1-K/R),$+=1}}for(let K=0;K<R;K++)for(let N=0;N<S;N++){const ee=g+N+re*K,Pe=g+N+re*(K+1),ie=g+(N+1)+re*(K+1),ge=g+(N+1)+re*K;m.push(ee,Pe,ge),m.push(Pe,ie,ge),Q+=6}d.addGroup(M,Q,q),M+=Q,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zl extends en{constructor(e=1,n=1,r=1,o=32,u=1,c=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:m};const p=this;o=Math.floor(o),u=Math.floor(u);const x=[],y=[],g=[],M=[];let E=0;const C=[],v=r/2;let _=0;b(),c===!1&&(e>0&&F(!0),n>0&&F(!1)),this.setIndex(x),this.setAttribute("position",new nn(y,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(M,2));function b(){const P=new H,I=new H;let D=0;const S=(n-e)/r;for(let R=0;R<=u;R++){const q=[],k=R/u,W=k*(n-e)+e;for(let Z=0;Z<=o;Z++){const oe=Z/o,B=oe*m+d,re=Math.sin(B),ce=Math.cos(B);I.x=W*re,I.y=-k*r+v,I.z=W*ce,y.push(I.x,I.y,I.z),P.set(re,S,ce).normalize(),g.push(P.x,P.y,P.z),M.push(oe,1-k),q.push(E++)}C.push(q)}for(let R=0;R<o;R++)for(let q=0;q<u;q++){const k=C[q][R],W=C[q+1][R],Z=C[q+1][R+1],oe=C[q][R+1];(e>0||q!==0)&&(x.push(k,W,oe),D+=3),(n>0||q!==u-1)&&(x.push(W,Z,oe),D+=3)}p.addGroup(_,D,0),_+=D}function F(P){const I=E,D=new Mt,S=new H;let R=0;const q=P===!0?e:n,k=P===!0?1:-1;for(let Z=1;Z<=o;Z++)y.push(0,v*k,0),g.push(0,k,0),M.push(.5,.5),E++;const W=E;for(let Z=0;Z<=o;Z++){const B=Z/o*m+d,re=Math.cos(B),ce=Math.sin(B);S.x=q*ce,S.y=v*k,S.z=q*re,y.push(S.x,S.y,S.z),g.push(0,k,0),D.x=re*.5+.5,D.y=ce*.5*k+.5,M.push(D.x,D.y),E++}for(let Z=0;Z<o;Z++){const oe=I+Z,B=W+Z;P===!0?x.push(B,B+1,oe):x.push(B+1,B,oe),R+=3}p.addGroup(_,R,P===!0?1:2),_+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Rl=new H,Cl=new H,of=new H,bl=new _i;class lf extends en{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),u=Math.cos(zl*n),c=e.getIndex(),d=e.getAttribute("position"),m=c?c.count:d.count,p=[0,0,0],x=["a","b","c"],y=new Array(3),g=new Map,M=[];for(let E=0;E<m;E+=3){c?(p[0]=c.getX(E),p[1]=c.getX(E+1),p[2]=c.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:C,b:v,c:_}=bl;if(C.fromBufferAttribute(d,p[0]),v.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),bl.getNormal(of),y[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,y[1]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,y[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let b=0;b<3;b++){const F=(b+1)%3,P=y[b],I=y[F],D=bl[x[b]],S=bl[x[F]],R=`${P}_${I}`,q=`${I}_${P}`,k=g.get(q);k?(of.dot(k.normal)<=u&&(M.push(D.x,D.y,D.z),M.push(S.x,S.y,S.z)),g.set(q,null)):g.has(R)||g.set(R,{index0:p[b],index1:p[F],normal:of.clone()})}}for(const E of g.values())if(E){const{index0:C,index1:v}=E;Rl.fromBufferAttribute(d,C),Cl.fromBufferAttribute(d,v),M.push(Rl.x,Rl.y,Rl.z),M.push(Cl.x,Cl.y,Cl.z)}this.setAttribute("position",new nn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ja extends en{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,x=m+1,y=e/d,g=n/m,M=[],E=[],C=[],v=[];for(let _=0;_<x;_++){const b=_*g-c;for(let F=0;F<p;F++){const P=F*y-u;E.push(P,-b,0),C.push(0,0,1),v.push(F/d),v.push(1-_/m)}}for(let _=0;_<m;_++)for(let b=0;b<d;b++){const F=b+p*_,P=b+p*(_+1),I=b+1+p*(_+1),D=b+1+p*_;M.push(F,P,D),M.push(P,I,D)}this.setIndex(M),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(C,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class _d extends en{constructor(e=.5,n=1,r=32,o=1,u=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:u,thetaLength:c},r=Math.max(3,r),o=Math.max(1,o);const d=[],m=[],p=[],x=[];let y=e;const g=(n-e)/o,M=new H,E=new Mt;for(let C=0;C<=o;C++){for(let v=0;v<=r;v++){const _=u+v/r*c;M.x=y*Math.cos(_),M.y=y*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/n+1)/2,E.y=(M.y/n+1)/2,x.push(E.x,E.y)}y+=g}for(let C=0;C<o;C++){const v=C*(r+1);for(let _=0;_<r;_++){const b=_+v,F=b,P=b+r+1,I=b+r+2,D=b+1;d.push(F,P,D),d.push(P,I,D)}}this.setIndex(d),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vd extends en{constructor(e=1,n=32,r=16,o=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(c+d,Math.PI);let p=0;const x=[],y=new H,g=new H,M=[],E=[],C=[],v=[];for(let _=0;_<=r;_++){const b=[],F=_/r,P=c+F*d,I=e*Math.cos(P),D=Math.sqrt(e*e-I*I);let S=0;_===0&&c===0?S=.5/n:_===r&&m===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const q=R/n,k=o+q*u;y.x=-D*Math.cos(k),y.y=I,y.z=D*Math.sin(k),E.push(y.x,y.y,y.z),g.copy(y).normalize(),C.push(g.x,g.y,g.z),v.push(q+S,1-F),b.push(p++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<n;b++){const F=x[_][b+1],P=x[_][b],I=x[_+1][b],D=x[_+1][b+1];(_!==0||c>0)&&M.push(F,P,D),(_!==r-1||m<Math.PI)&&M.push(P,I,D)}this.setIndex(M),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(C,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ea(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(wm(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(wm(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Hn(s){const e={};for(let n=0;n<s.length;n++){const r=ea(s[n]);for(const o in r)e[o]=r[o]}return e}function wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function $v(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Lg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Kv={clone:ea,merge:Hn};var Zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Mt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new H().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qv extends ls{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class za extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ex extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xd extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const uf=new Wt,Tm=new H,Am=new H;class Dg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){uf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(uf,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,c=o?o.z/u.x:1,d=o?o.w/u.y:1,m=o?o.x/u.x:0,p=o?o.y/u.y:0;e.coordinateSystem===$a||e.reversedDepth?n.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):n.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),n.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pl=new H,Ll=new ta,Bi=new H;class Ng extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Ll,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Pl,Ll,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new H,Rm=new Mt,Cm=new Mt;class gi extends Ng{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Cm),n.subVectors(Cm,Rm)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;u+=c.offsetX*o/m,n-=c.offsetY*r/p,o*=c.width/m,r*=c.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class tx extends Dg{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class bm extends xd{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ig extends Ng{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nx extends Dg{constructor(){super(new Ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ix extends xd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new nx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class rx extends xd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,Ys=1;class td extends An{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(qs,Ys,e,n);o.layers=this.layers,this.add(o);const u=new gi(qs,Ys,e,n);u.layers=this.layers,this.add(u);const c=new gi(qs,Ys,e,n);c.layers=this.layers,this.add(c);const d=new gi(qs,Ys,e,n);d.layers=this.layers,this.add(d);const m=new gi(qs,Ys,e,n);m.layers=this.layers,this.add(m);const p=new gi(qs,Ys,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,d,m]=n;for(const p of n)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$a)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,m,p,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(y,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class sx extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class ox extends bi{constructor(e=10,n=10,r=4473924,o=8947848){r=new pt(r),o=new pt(o);const u=n/2,c=e/n,d=e/2,m=[],p=[];for(let g=0,M=0,E=-d;g<=n;g++,E+=c){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const C=g===u?r:o;C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3}const x=new en;x.setAttribute("position",new nn(m,3)),x.setAttribute("color",new nn(p,3));const y=new ri({vertexColors:!0,toneMapped:!1});super(x,y),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Pm(s,e,n,r){const o=lx(r);switch(n){case pg:return s*e;case gg:return s*e/o.components*o.byteLength;case ud:return s*e/o.components*o.byteLength;case os:return s*e*2/o.components*o.byteLength;case cd:return s*e*2/o.components*o.byteLength;case mg:return s*e*3/o.components*o.byteLength;case Gi:return s*e*4/o.components*o.byteLength;case fd:return s*e*4/o.components*o.byteLength;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Tf:return Math.max(s,16)*Math.max(e,8)/4;case yf:case wf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:case bf:case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Vl:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qf:case Yf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wl:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lx(s){switch(s){case si:case cg:return{byteLength:1,components:1};case Ya:case fg:case qi:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case Xi:case ad:case Hi:return{byteLength:4,components:1};case dg:case hg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ug(){let s=null,e=!1,n=null,r=null;function o(u,c){r=s.requestAnimationFrame(o),n(u,c)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function ux(s){const e=new WeakMap;function n(d,m){const p=d.array,x=d.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,m,p){const x=m.array,y=m.updateRanges;if(s.bindBuffer(p,d),y.length===0)s.bufferSubData(p,0,x);else{y.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<y.length;M++){const E=y[g],C=y[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,y[g]=C)}y.length=g+1;for(let M=0,E=y.length;M<E;M++){const C=y[M];s.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:u,update:c}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eS=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,tS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,oS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lS=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,SS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,DS=`#ifdef USE_NORMALMAP
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
#endif`,NS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,$S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,JS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iM=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,lM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cM=`uniform sampler2D t2D;
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,gM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_M=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,vM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,wM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,TM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,AM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,RM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,CM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,PM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,DM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,NM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,IM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,UM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,FM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,OM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,BM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,HM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,GM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ht={alphahash_fragment:cx,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:Sx,beginnormal_vertex:Mx,bsdfs:yx,iridescence_fragment:Ex,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:bx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Bx,colorspace_fragment:kx,colorspace_pars_fragment:zx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Vx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:tS,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:Jx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:jx,lights_pars_begin:eS,lights_toon_fragment:nS,lights_toon_pars_fragment:iS,lights_phong_fragment:rS,lights_phong_pars_fragment:sS,lights_physical_fragment:aS,lights_physical_pars_fragment:oS,lights_fragment_begin:lS,lights_fragment_maps:uS,lights_fragment_end:cS,lightprobes_pars_fragment:fS,logdepthbuf_fragment:dS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:pS,logdepthbuf_vertex:mS,map_fragment:gS,map_pars_fragment:_S,map_particle_fragment:vS,map_particle_pars_fragment:xS,metalnessmap_fragment:SS,metalnessmap_pars_fragment:MS,morphinstance_vertex:yS,morphcolor_vertex:ES,morphnormal_vertex:wS,morphtarget_pars_vertex:TS,morphtarget_vertex:AS,normal_fragment_begin:RS,normal_fragment_maps:CS,normal_pars_fragment:bS,normal_pars_vertex:PS,normal_vertex:LS,normalmap_pars_fragment:DS,clearcoat_normal_fragment_begin:NS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:US,iridescence_pars_fragment:FS,opaque_fragment:OS,packing:BS,premultiplied_alpha_fragment:kS,project_vertex:zS,dithering_fragment:HS,dithering_pars_fragment:GS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:WS,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:qS,shadowmap_vertex:YS,shadowmask_pars_fragment:$S,skinbase_vertex:KS,skinning_pars_vertex:ZS,skinning_vertex:JS,skinnormal_vertex:QS,specularmap_fragment:jS,specularmap_pars_fragment:eM,tonemapping_fragment:tM,tonemapping_pars_fragment:nM,transmission_fragment:iM,transmission_pars_fragment:rM,uv_pars_fragment:sM,uv_pars_vertex:aM,uv_vertex:oM,worldpos_vertex:lM,background_vert:uM,background_frag:cM,backgroundCube_vert:fM,backgroundCube_frag:dM,cube_vert:hM,cube_frag:pM,depth_vert:mM,depth_frag:gM,distance_vert:_M,distance_frag:vM,equirect_vert:xM,equirect_frag:SM,linedashed_vert:MM,linedashed_frag:yM,meshbasic_vert:EM,meshbasic_frag:wM,meshlambert_vert:TM,meshlambert_frag:AM,meshmatcap_vert:RM,meshmatcap_frag:CM,meshnormal_vert:bM,meshnormal_frag:PM,meshphong_vert:LM,meshphong_frag:DM,meshphysical_vert:NM,meshphysical_frag:IM,meshtoon_vert:UM,meshtoon_frag:FM,points_vert:OM,points_frag:BM,shadow_vert:kM,shadow_frag:zM,sprite_vert:HM,sprite_frag:GM},Oe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Hn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Hn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Hn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Hn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Hn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Hn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Hn([Oe.common,Oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Hn([Oe.lights,Oe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Dl={r:0,b:0,g:0},VM=new Wt,Fg=new ct;Fg.set(-1,0,0,0,1,0,0,0,1);function WM(s,e,n,r,o,u){const c=new pt(0);let d=o===!0?0:1,m,p,x=null,y=0,g=null;function M(b){let F=b.isScene===!0?b.background:null;if(F&&F.isTexture){const P=b.backgroundBlurriness>0;F=e.get(F,P)}return F}function E(b){let F=!1;const P=M(b);P===null?v(c,d):P&&P.isColor&&(v(P,1),F=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,F){const P=M(F);P&&P.isCubeTexture?(p===void 0&&(p=new jt(new _n(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:ea(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Fg),p.material.toneMapped=yt.getTransfer(P.colorSpace)!==It,(x!==P||y!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,y=P.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new jt(new ja(2,2),new ls({name:"BackgroundMaterial",uniforms:ea(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=yt.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||y!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,y=P.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function v(b,F){b.getRGB(Dl,Lg(s)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,F,u)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,F=1){c.set(b),d=F,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(c,d)},render:E,addToRenderList:C,dispose:_}}function XM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(W,Z,oe,B,re){let ce=!1;const $=y(W,B,oe,Z);u!==$&&(u=$,p(u.object)),ce=M(W,B,oe,re),ce&&E(W,B,oe,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,P(W,Z,oe,B),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return s.createVertexArray()}function p(W){return s.bindVertexArray(W)}function x(W){return s.deleteVertexArray(W)}function y(W,Z,oe,B){const re=B.wireframe===!0;let ce=r[Z.id];ce===void 0&&(ce={},r[Z.id]=ce);const $=W.isInstancedMesh===!0?W.id:0;let Q=ce[$];Q===void 0&&(Q={},ce[$]=Q);let Y=Q[oe.id];Y===void 0&&(Y={},Q[oe.id]=Y);let K=Y[re];return K===void 0&&(K=g(m()),Y[re]=K),K}function g(W){const Z=[],oe=[],B=[];for(let re=0;re<n;re++)Z[re]=0,oe[re]=0,B[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:oe,attributeDivisors:B,object:W,attributes:{},index:null}}function M(W,Z,oe,B){const re=u.attributes,ce=Z.attributes;let $=0;const Q=oe.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const N=re[Y];let ee=ce[Y];if(ee===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(ee=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(ee=W.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;$++}return u.attributesNum!==$||u.index!==B}function E(W,Z,oe,B){const re={},ce=Z.attributes;let $=0;const Q=oe.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let N=ce[Y];N===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(N=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(N=W.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),re[Y]=ee,$++}u.attributes=re,u.attributesNum=$,u.index=B}function C(){const W=u.newAttributes;for(let Z=0,oe=W.length;Z<oe;Z++)W[Z]=0}function v(W){_(W,0)}function _(W,Z){const oe=u.newAttributes,B=u.enabledAttributes,re=u.attributeDivisors;oe[W]=1,B[W]===0&&(s.enableVertexAttribArray(W),B[W]=1),re[W]!==Z&&(s.vertexAttribDivisor(W,Z),re[W]=Z)}function b(){const W=u.newAttributes,Z=u.enabledAttributes;for(let oe=0,B=Z.length;oe<B;oe++)Z[oe]!==W[oe]&&(s.disableVertexAttribArray(oe),Z[oe]=0)}function F(W,Z,oe,B,re,ce,$){$===!0?s.vertexAttribIPointer(W,Z,oe,re,ce):s.vertexAttribPointer(W,Z,oe,B,re,ce)}function P(W,Z,oe,B){C();const re=B.attributes,ce=oe.getAttributes(),$=Z.defaultAttributeValues;for(const Q in ce){const Y=ce[Q];if(Y.location>=0){let K=re[Q];if(K===void 0&&(Q==="instanceMatrix"&&W.instanceMatrix&&(K=W.instanceMatrix),Q==="instanceColor"&&W.instanceColor&&(K=W.instanceColor)),K!==void 0){const N=K.normalized,ee=K.itemSize,Pe=e.get(K);if(Pe===void 0)continue;const ie=Pe.buffer,ge=Pe.type,Se=Pe.bytesPerElement,Ie=ge===s.INT||ge===s.UNSIGNED_INT||K.gpuType===ad;if(K.isInterleavedBufferAttribute){const pe=K.data,Be=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,xt=K.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let je=0;je<Y.locationSize;je++)_(Y.location+je,pe.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<Y.locationSize;je++)v(Y.location+je);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let je=0;je<Y.locationSize;je++)F(Y.location+je,ee/Y.locationSize,ge,N,Be*Se,(xt+ee/Y.locationSize*je)*Se,Ie)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)_(Y.location+pe,K.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let pe=0;pe<Y.locationSize;pe++)F(Y.location+pe,ee/Y.locationSize,ge,N,ee*Se,ee/Y.locationSize*pe*Se,Ie)}}else if($!==void 0){const N=$[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}b()}function I(){q();for(const W in r){const Z=r[W];for(const oe in Z){const B=Z[oe];for(const re in B){const ce=B[re];for(const $ in ce)x(ce[$].object),delete ce[$];delete B[re]}}delete r[W]}}function D(W){if(r[W.id]===void 0)return;const Z=r[W.id];for(const oe in Z){const B=Z[oe];for(const re in B){const ce=B[re];for(const $ in ce)x(ce[$].object),delete ce[$];delete B[re]}}delete r[W.id]}function S(W){for(const Z in r){const oe=r[Z];for(const B in oe){const re=oe[B];if(re[W.id]===void 0)continue;const ce=re[W.id];for(const $ in ce)x(ce[$].object),delete ce[$];delete re[W.id]}}}function R(W){for(const Z in r){const oe=r[Z],B=W.isInstancedMesh===!0?W.id:0,re=oe[B];if(re!==void 0){for(const ce in re){const $=re[ce];for(const Q in $)x($[Q].object),delete $[Q];delete re[ce]}delete oe[B],Object.keys(oe).length===0&&delete r[Z]}}}function q(){k(),c=!0,u!==o&&(u=o,p(u.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:q,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:R,releaseStatesOfProgram:S,initAttributes:C,enableAttribute:v,disableUnusedAttributes:b}}function qM(s,e,n){let r;function o(m){r=m}function u(m,p){s.drawArrays(r,m,p),n.update(p,r,1)}function c(m,p,x){x!==0&&(s.drawArraysInstanced(r,m,p,x),n.update(p,r,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,x);let g=0;for(let M=0;M<x;M++)g+=p[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function YM(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(S){return!(S!==Gi&&r.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(S){const R=S===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==si&&S!==Hi&&!R&&r.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(st("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.logarithmicDepthBuffer===!0&&y===!1;n.reversedDepthBuffer===!0&&y===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&y===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:F,maxFragmentUniforms:P,maxSamples:I,samples:D}}function $M(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Or,d=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||o;return o=g,r=y.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,g){n=x(y,g,0)},this.setState=function(y,g,M){const E=y.clippingPlanes,C=y.clipIntersection,v=y.clipShadows,_=s.get(y);if(!o||E===null||E.length===0||u&&!v)u?x(null):p();else{const b=u?0:r,F=b*4;let P=_.clippingState||null;m.value=P,P=x(E,g,F,M);for(let I=0;I!==F;++I)P[I]=n[I];_.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,g,M,E){const C=y!==null?y.length:0;let v=null;if(C!==0){if(v=m.value,E!==!0||v===null){const _=M+C*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let F=0,P=M;F!==C;++F,P+=4)c.copy(y[F]).applyMatrix4(b,d),c.normal.toArray(v,P),v[P+3]=c.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}class Sd extends Wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Cg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _n(5,5,5),u=new ls({name:"CubemapFromEquirect",uniforms:ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Ks});u.uniforms.tEquirect.value=n;const c=new jt(o,u),d=n.minFilter;return n.minFilter===kr&&(n.minFilter=Kn),new td(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}const Lm=256,KM=3,ZM=20,Og=256,Bg=16,JM=3,QM=new H,jM=new pt;class Jl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new td(1,10,null),this._boxMesh=new jt(new _n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:d=QM}=u,m=this._renderer;this._setSize(c);const p=this._allocateTarget(),x=this._getSourceTarget(!0);n>0&&(x.texture.mipmapsAutoUpdate=!1);const y=m.autoClear,g=m.autoClearColor,M=m.autoClearDepth,E=m.autoClearStencil,C=e.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,C===null&&(e.background=m.getClearColor(jM));const v=new td(r,o,x);return v.position.copy(d),v.update(m,e),m.autoClear=y,m.autoClearColor=g,m.autoClearDepth=M,m.autoClearStencil=E,e.background=C,n>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(p,n)),this._applyPMREM(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Lm,Mv(e))}_fromTexture(e,n){e.mapping===Js||e.mapping===qa?this._setSize(e.image.length===0?Lm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,n=Dm(e,!1,!1),r=Math.log2(e)-KM;for(let o=0;o<=r;o++)n.texture.mipmaps.push({width:e>>o,height:e>>o});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==n||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Dm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,r){const o=this._boxMesh,u=this._cubeCamera;o.material=r,u.renderTarget=e,u.activeMipmapLevel=n;const c=e.width>>n;e.viewport.set(0,0,c,c),u.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Js||e.mapping===qa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ey(),this._integrationMaterial=ty());const n=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(n/Bg);for(let c=0;c<=r;c++){const d=Jl.lodToRoughness(c,r);if(c>r-JM)u.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{const m=d>0?Math.log2(n)+.5*Math.log2(6/(Og*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=m,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=ny());const r=this._blurMaterial,o=r.uniforms,u=this._sourceTarget;o.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,o.envMap.value=u.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(u,0,r)}}function Dm(s,e,n){return new Sd(s,{minFilter:kr,generateMipmaps:e,type:qi,colorSpace:Xl,depthBuffer:n})}function eo(s,e,n){return new ls({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:n,side:Zn,blending:Ks,depthTest:!1,depthWrite:!1})}function ey(){return eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Og}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ty(){return eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ny(){return eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ZM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nm(){return eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Im(){return eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function iy(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ic||M===Uc)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Sd(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),d(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const M=g.mapping,E=M===Ic||M===Uc,C=M===Js||M===qa;if(E||C){let v=n.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Jl(s)),v=E?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return E&&b&&b.height>0||C&&b&&m(b)?(r===null&&(r=new Jl(s)),v=E?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,M){return M===Ic?g.mapping=Js:M===Uc&&(g.mapping=qa),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const E=n.get(M);E!==void 0&&(n.delete(M),E.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function ry(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&kl("WebGLRenderer: "+r+" extension not supported."),o}}}function sy(s,e,n,r){const o={},u=new WeakMap,c=new FinalizationRegistry(E=>delete o[E]);function d(E){m(E.target)}function m(E){E.index!==null&&e.remove(E.index);for(const v in E.attributes)e.remove(E.attributes[v]);E.removeEventListener("dispose",d),delete o[E.id],c.unregister(E);const C=u.get(E);C&&(e.remove(C),u.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,n.memory.geometries--}function p(E,C){return o[C.id]!==void 0||(C.addEventListener("dispose",d),o[C.id]=new WeakRef(C),c.register(C,C.id,C),n.memory.geometries++),C}function x(E){const C=E.attributes;for(const v in C)e.update(C[v],s.ARRAY_BUFFER)}function y(E){const C=E.index,v=E.attributes.position;let _=0;if(v===void 0)return;const b=C!==null?C.array.length:v.array.length/3-1,F=v.count>=65535?Tg:wg,P=new F(Math.ceil(b/3)*6,1),I=P.array;if(C!==null){const S=C.array;_=C.version;for(let R=0,q=0;R<b;R+=3){const k=S[R+0],W=S[R+1],Z=S[R+2];I[q++]=k,I[q++]=W,I[q++]=W,I[q++]=Z,I[q++]=Z,I[q++]=k}}else{_=v.version;for(let S=0,R=0;S<b;S+=3){const q=S+0,k=S+1,W=S+2;I[R++]=q,I[R++]=k,I[R++]=k,I[R++]=W,I[R++]=W,I[R++]=q}}P.version=_;const D=u.get(E);D&&e.remove(D),u.set(E,P)}function g(E){const C=u.get(E);if(C){const v=E.index;v!==null&&C.version<v.version&&y(E)}else y(E);return u.get(E)}function M(){for(const E in o){const C=o[E].deref();C!==void 0&&m(C)}}return{get:p,update:x,getWireframeAttribute:g,dispose:M}}function ay(s,e,n){let r;function o(y){r=y}let u,c;function d(y){u=y.type,c=y.bytesPerElement}function m(y,g){s.drawElements(r,g,u,y*c),n.update(g,r,1)}function p(y,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,y*c,M),n.update(g,r,M))}function x(y,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,y,0,M);let C=0;for(let v=0;v<M;v++)C+=g[v];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function oy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function ly(s,e,n){const r=new WeakMap,o=new tn;function u(c,d,m){const p=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let k=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var M=k;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),C===!0&&(P=2),v===!0&&(P=3);let I=d.attributes.position.count*P,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const S=new Float32Array(I*D*4*y),R=new Mg(S,I,D,y);R.type=Hi,R.needsUpdate=!0;const q=P*4;for(let W=0;W<y;W++){const Z=_[W],oe=b[W],B=F[W],re=I*D*4*W;for(let ce=0;ce<Z.count;ce++){const $=ce*q;E===!0&&(o.fromBufferAttribute(Z,ce),S[re+$+0]=o.x,S[re+$+1]=o.y,S[re+$+2]=o.z,S[re+$+3]=0),C===!0&&(o.fromBufferAttribute(oe,ce),S[re+$+4]=o.x,S[re+$+5]=o.y,S[re+$+6]=o.z,S[re+$+7]=0),v===!0&&(o.fromBufferAttribute(B,ce),S[re+$+8]=o.x,S[re+$+9]=o.y,S[re+$+10]=o.z,S[re+$+11]=B.itemSize===4?o.w:1)}}g={count:y,texture:R,size:new Mt(I,D)},r.set(d,g),d.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function uy(s,e,n,r,o){let u=new WeakMap;function c(p){const x=o.render.frame,y=p.geometry,g=e.get(p,y);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==x&&(M.update(),u.set(M,x))}return g}function d(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:c,dispose:d}}const cy={[ig]:"LINEAR_TONE_MAPPING",[rg]:"REINHARD_TONE_MAPPING",[sg]:"CINEON_TONE_MAPPING",[sd]:"ACES_FILMIC_TONE_MAPPING",[og]:"AGX_TONE_MAPPING",[lg]:"NEUTRAL_TONE_MAPPING",[ag]:"CUSTOM_TONE_MAPPING"};function fy(s,e,n,r,o,u){const c=new Wi(e,n,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null,p=null;const x=new en;x.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new nn([0,2,0,0,2,0],2));const y=new Qv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new jt(x,y),M=new Ig(-1,1,1,-1,0,1);let E=null,C=null,v=!1,_,b=null,F=[],P=!1;this.setSize=function(I,D){c.setSize(I,D),d!==null&&d.setSize(I,D),m!==null&&m.setSize(I,D);for(let S=0;S<F.length;S++){const R=F[S];R.setSize&&R.setSize(I,D)}},this.setEffects=function(I){F=I,P=F.length>0&&F[0].isRenderPass===!0;const D=c.width,S=c.height;F.length>0&&d===null&&(d=new Wi(D,S,{type:qi,depthBuffer:!1,stencilBuffer:!1}),m=new Wi(D,S,{type:qi,depthBuffer:!1,stencilBuffer:!1}));const R=o===!0&&F.some(q=>q.needsDepthTexture===!0);R!==(c.depthTexture!==null)&&(R===!0&&p===null&&(p=new js(D,S),u===!0&&(p.format=zr,p.type=Qs)),c.dispose(),c.depthTexture=R?p:null,c.resolveDepthBuffer=R,c.storeMultisampledDepthBuffer=R);for(let q=0;q<F.length;q++){const k=F[q];k.setSize&&k.setSize(D,S),R&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(p)}},this.begin=function(I,D){if(v||I.toneMapping===fr&&F.length===0)return!1;if(b=D,D!==null){const S=D.width,R=D.height;(c.width!==S||c.height!==R)&&this.setSize(S,R)}return P===!1&&I.setRenderTarget(c),_=I.toneMapping,I.toneMapping=fr,!0},this.hasRenderPass=function(){return P},this.end=function(I,D){I.toneMapping=_,v=!0;let S=c,R=d;for(let q=0;q<F.length;q++){const k=F[q];k.enabled!==!1&&(k.render(I,R,S,D),k.needsSwap!==!1&&(S=R,R=R===d?m:d))}if(E!==I.outputColorSpace||C!==I.toneMapping){E=I.outputColorSpace,C=I.toneMapping,y.defines={},yt.getTransfer(E)===It&&(y.defines.SRGB_TRANSFER="");const q=cy[C];q&&(y.defines[q]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=S.texture,I.setRenderTarget(b),I.render(g,M),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),x.dispose(),y.dispose()}}const kg=new Gn,zg=new js(1,1),Hg=new bg(1),Gg=new Mg,Vg=new bv,Wg=new Cg,Um=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function na(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=Um[o];if(u===void 0&&(u=new Float32Array(o),Um[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function vn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function xn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function dy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;s.uniform2fv(this.addr,e),xn(n,e)}}function py(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;s.uniform3fv(this.addr,e),xn(n,e)}}function my(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;s.uniform4fv(this.addr,e),xn(n,e)}}function gy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(vn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),xn(n,r)}}function _y(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(vn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,r))return;Bm.set(r),s.uniformMatrix3fv(this.addr,!1,Bm),xn(n,r)}}function vy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(vn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,r))return;Om.set(r),s.uniformMatrix4fv(this.addr,!1,Om),xn(n,r)}}function xy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Sy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;s.uniform2iv(this.addr,e),xn(n,e)}}function My(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;s.uniform3iv(this.addr,e),xn(n,e)}}function yy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;s.uniform4iv(this.addr,e),xn(n,e)}}function Ey(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;s.uniform2uiv(this.addr,e),xn(n,e)}}function Ty(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;s.uniform3uiv(this.addr,e),xn(n,e)}}function Ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;s.uniform4uiv(this.addr,e),xn(n,e)}}function eu(s){return s.version===0&&(s.compareFunction=xg,s.needsUpdate=!0),s}function Ry(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?u=eu(zg):u=kg,n.setTexture2D(e||u,o)}function Cy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Vg,o)}function by(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_CUBE_SHADOW?u=eu(Hg):u=Wg,n.setTextureCube(e||u,o)}function Py(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Gg,o)}function Ly(s){switch(s){case 5126:return dy;case 35664:return hy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return Sy;case 35668:case 35672:return My;case 35669:case 35673:return yy;case 5125:return Ey;case 36294:return wy;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Py}}function Dy(s,e){s.uniform1fv(this.addr,e)}function Ny(s,e){const n=na(e,this.size,2);s.uniform2fv(this.addr,n)}function Iy(s,e){const n=na(e,this.size,3);s.uniform3fv(this.addr,n)}function Uy(s,e){const n=na(e,this.size,4);s.uniform4fv(this.addr,n)}function Fy(s,e){const n=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Oy(s,e){const n=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function By(s,e){const n=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function ky(s,e){s.uniform1iv(this.addr,e)}function zy(s,e){s.uniform2iv(this.addr,e)}function Hy(s,e){s.uniform3iv(this.addr,e)}function Gy(s,e){s.uniform4iv(this.addr,e)}function Vy(s,e){s.uniform1uiv(this.addr,e)}function Wy(s,e){s.uniform2uiv(this.addr,e)}function Xy(s,e){s.uniform3uiv(this.addr,e)}function qy(s,e){s.uniform4uiv(this.addr,e)}function Yy(s,e,n){const r=this.cache,o=e.length,u=jl(n,o);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=eu(zg):c=kg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,u[d])}function $y(s,e,n){const r=this.cache,o=e.length,u=jl(n,o);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||Vg,u[c])}function Ky(s,e,n){const r=this.cache,o=e.length,u=jl(n,o);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=eu(Hg):c=Wg;for(let d=0;d!==o;++d)n.setTextureCube(e[d]||c,u[d])}function Zy(s,e,n){const r=this.cache,o=e.length,u=jl(n,o);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||Gg,u[c])}function Jy(s){switch(s){case 5126:return Dy;case 35664:return Ny;case 35665:return Iy;case 35666:return Uy;case 35674:return Fy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Vy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Zy}}class Qy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ly(n.type)}}class jy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jy(n.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function tE(s,e,n){const r=s.name,o=r.length;for(cf.lastIndex=0;;){const u=cf.exec(r),c=cf.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&c+2===o){zm(n,p===void 0?new Qy(d,s,e):new jy(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new eE(d),zm(n,y)),n=y}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),m=e.getUniformLocation(n,d.name);tE(d,m,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Hm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const nE=37297;let iE=0;function rE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Gm=new ct;function sE(s){yt._getMatrix(Gm,yt.workingColorSpace,s);const e=`mat3( ${Gm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+rE(s.getShaderSource(e),d)}else return u}function aE(s,e){const n=sE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const oE={[ig]:"Linear",[rg]:"Reinhard",[sg]:"Cineon",[sd]:"ACESFilmic",[og]:"AgX",[lg]:"Neutral",[ag]:"Custom"};function lE(s,e){const n=oE[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new H;function uE(){yt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function fE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function dE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Va(s){return s!==""}function Wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(s){return s.replace(hE,pE)}function pE(s,e){const n=ht[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nd(n)}const mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(mE,gE)}function gE(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _E={[Il]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function vE(s){return _E[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xE={[qa]:"ENVMAP_MODE_REFRACTION"};function SE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[ng]:"ENVMAP_BLENDING_MULTIPLY",[rv]:"ENVMAP_BLENDING_MIX",[sv]:"ENVMAP_BLENDING_ADD"};function yE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ME[s.combine]||"ENVMAP_BLENDING_NONE"}function EE(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const m=vE(n),p=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=SE(n),y=yE(n),g=cE(n),M=fE(u),E=o.createProgram();let C,v,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Va).join(`
`),C.length>0&&(C+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Va).join(`
`),v.length>0&&(v+=`
`)):(C=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),v=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?ht.tonemapping_pars_fragment:"",n.toneMapping!==fr?lE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,aE("linearToOutputTexel",n.outputColorSpace),uE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),c=nd(c),c=Wm(c,n),c=Xm(c,n),d=nd(d),d=Wm(d,n),d=Xm(d,n),c=qm(c),d=qm(d),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,C=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,v=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=_+C+c,F=_+v+d,P=Hm(o,o.VERTEX_SHADER,b),I=Hm(o,o.FRAGMENT_SHADER,F);o.attachShader(E,P),o.attachShader(E,I),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function D(k){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(E)||"",Z=o.getShaderInfoLog(P)||"",oe=o.getShaderInfoLog(I)||"",B=W.trim(),re=Z.trim(),ce=oe.trim();let $=!0,Q=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,P,I);else{const Y=Vm(o,P,"vertex"),K=Vm(o,I,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+Y+`
`+K)}else B!==""?st("WebGLProgram: Program Info Log:",B):(re===""||ce==="")&&(Q=!1);Q&&(k.diagnostics={runnable:$,programLog:B,vertexShader:{log:re,prefix:C},fragmentShader:{log:ce,prefix:v}})}o.deleteShader(P),o.deleteShader(I),S=new Gl(o,E),R=dE(o,E)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(E,nE)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=I,this}let wE=0;class TE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new AE(e),n.set(e,r)),r}}class AE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function RE(s){return s===os||s===Vl||s===Wl}function CE(s,e,n,r,o,u){const c=new yg,d=new TE,m=new Set,p=[],x=new Map,y=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return m.add(S),S===0?"uv":`uv${S}`}function E(S,R,q,k,W,Z){const oe=k.fog,B=W.geometry,re=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,ce=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,$=e.get(S.envMap||re,ce),Q=g[S.type];let Y=r.precision;S.precision!==null&&(Y=r.getMaxPrecision(S.precision),Y!==S.precision&&st("WebGLProgram.getParameters:",S.precision,"not supported, using",Y,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,N=K!==void 0?K.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let Pe,ie,ge,Se;if(Q){const Ue=zi[Q];Pe=Ue.vertexShader,ie=Ue.fragmentShader}else{Pe=S.vertexShader,ie=S.fragmentShader;const Ue=d.getVertexShaderStage(S),mt=d.getFragmentShaderStage(S);d.update(S,Ue,mt),ge=Ue.id,Se=mt.id}const Ie=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,xt=W.isBatchedMesh===!0,je=!!S.map,lt=!!S.matcap,wt=!!$,ft=wt&&$.isPMREMTexture===!0,Kt=!!S.aoMap,Ht=!!S.lightMap,Bt=!!S.bumpMap&&S.wireframe===!1,Ut=!!S.normalMap,Ln=!!S.displacementMap,kt=!!S.emissiveMap,rn=!!S.metalnessMap,dn=!!S.roughnessMap,on=S.anisotropy>0,V=S.clearcoat>0,Sn=S.diffuseRoughness>0,Dt=S.dispersion>0,Ct=S.retroreflectivity>0,Le=S.iridescence>0,Xt=S.sheen>0,Qe=S.transmission>0,et=on&&!!S.anisotropyMap,L=V&&!!S.clearcoatMap,T=V&&!!S.clearcoatNormalMap,j=V&&!!S.clearcoatRoughnessMap,Me=Sn&&!!S.diffuseRoughnessMap,me=Le&&!!S.iridescenceMap,Te=Le&&!!S.iridescenceThicknessMap,be=Xt&&!!S.sheenColorMap,fe=Xt&&!!S.sheenRoughnessMap,de=!!S.specularMap,ye=!!S.specularColorMap,O=!!S.specularIntensityMap,he=Qe&&!!S.transmissionMap,ue=Qe&&!!S.thicknessMap,Ae=!!S.gradientMap,we=!!S.alphaMap,Re=S.alphaTest>0,Ve=!!S.alphaHash,at=!!S.extensions;let _e=fr;S.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Ze=ft?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,rt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:ie,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:Y,batching:xt,batchingColor:xt&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:lt,envMap:wt,envMapMode:wt&&$.mapping,envMapPMREM:ft,envMapMaxLod:ft?Ze.length-1:null,envMapSize:ft?Ze[0].width:null,aoMap:Kt,lightMap:Ht,bumpMap:Bt,normalMap:Ut,displacementMap:Ln,emissiveMap:kt,normalMapObjectSpace:Ut&&S.normalMapType===lv,normalMapTangentSpace:Ut&&S.normalMapType===Qf,packedNormalMap:Ut&&S.normalMapType===Qf&&RE(S.normalMap.format),metalnessMap:rn,roughnessMap:dn,anisotropy:on,anisotropyMap:et,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:j,diffuseRoughness:Sn,diffuseRoughnessMap:Me,dispersion:Dt,retroreflection:Ct,iridescence:Le,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:Xt,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:de,specularColorMap:ye,specularIntensityMap:O,transmission:Qe,transmissionMap:he,thicknessMap:ue,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===Wa&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:Re,alphaHash:Ve,combine:S.combine,mapUv:je&&M(S.map.channel),aoMapUv:Kt&&M(S.aoMap.channel),lightMapUv:Ht&&M(S.lightMap.channel),bumpMapUv:Bt&&M(S.bumpMap.channel),normalMapUv:Ut&&M(S.normalMap.channel),displacementMapUv:Ln&&M(S.displacementMap.channel),emissiveMapUv:kt&&M(S.emissiveMap.channel),metalnessMapUv:rn&&M(S.metalnessMap.channel),roughnessMapUv:dn&&M(S.roughnessMap.channel),anisotropyMapUv:et&&M(S.anisotropyMap.channel),clearcoatMapUv:L&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:T&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&M(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&M(S.diffuseRoughnessMap.channel),iridescenceMapUv:me&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&M(S.sheenRoughnessMap.channel),specularMapUv:de&&M(S.specularMap.channel),specularColorMapUv:ye&&M(S.specularColorMap.channel),specularIntensityMapUv:O&&M(S.specularIntensityMap.channel),transmissionMapUv:he&&M(S.transmissionMap.channel),thicknessMapUv:ue&&M(S.thicknessMap.channel),alphaMapUv:we&&M(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ut||on),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(je||we),fog:!!oe,useFog:S.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&Ut===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:pe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===It,decodeVideoTextureEmissive:kt&&S.emissiveMap.isVideoTexture===!0&&yt.getTransfer(S.emissiveMap.colorSpace)===It,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pi,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:at&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&S.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=m.has(1),rt.vertexUv2s=m.has(2),rt.vertexUv3s=m.has(3),m.clear(),rt}function C(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)R.push(q),R.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(v(R,S),_(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function v(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapPMREM),S.push(R.envMapMaxLod),S.push(R.envMapSize),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.diffuseRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.numLightProbeGrids),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.retroreflection&&c.enable(24),R.diffuseRoughness&&c.enable(25),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),S.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),S.push(c.mask)}function b(S){const R=g[S.type];let q;if(R){const k=zi[R];q=Kv.clone(k.uniforms)}else q=S.uniforms;return q}function F(S,R){let q=x.get(R);return q!==void 0?++q.usedTimes:(q=new EE(s,R,S,o),p.push(q),x.set(R,q)),q}function P(S){if(--S.usedTimes===0){const R=p.indexOf(S);p[R]=p[p.length-1],p.pop(),x.delete(S.cacheKey),S.destroy()}}function I(S){d.remove(S)}function D(){d.dispose()}return{getParameters:E,getProgramCacheKey:C,getUniforms:b,acquireProgram:F,releaseProgram:P,releaseShaderCache:I,programs:p,dispose:D}}function bE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,m){s.get(c)[d]=m}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function PE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Km(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,E,C,v,_){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:E,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:v,group:_},s[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=E,b.materialVariant=c(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=v,b.group=_),e++,b}function m(g,M,E,C,v,_,b){b.reversedDepth===!0&&(v=-v);const F=d(g,M,E,C,v,_);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):n.push(F)}function p(g,M,E,C,v,_){const b=d(g,M,E,C,v,_);E.transmission>0?r.unshift(b):E.transparent===!0?o.unshift(b):n.unshift(b)}function x(g,M){n.length>1&&n.sort(g||PE),r.length>1&&r.sort(M||$m),o.length>1&&o.sort(M||$m)}function y(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:m,unshift:p,finish:y,sort:x}}function LE(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Km,s.set(r,[c])):o>=u.length?(c=new Km,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new pt};break;case"SpotLight":n={position:new H,direction:new H,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=n,n}}}function NE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let IE=0;function UE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FE(s){const e=new DE,n=NE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new H);const o=new H,u=new Wt,c=new Wt;function d(p){let x=0,y=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let M=0,E=0,C=0,v=0,_=0,b=0,F=0,P=0,I=0,D=0,S=0,R=0,q=0,k=0;p.sort(UE);for(let Z=0,oe=p.length;Z<oe;Z++){const B=p[Z],re=B.color,ce=B.intensity,$=B.distance;let Q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===os?Q=B.shadow.map.texture:Q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=re.r*ce,y+=re.g*ce,g+=re.b*ce;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(B.sh.coefficients[Y],ce);k++}else if(B.isSunLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,N=n.get(B);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[E]=N,r.sunShadowMap[E]=Q;const ee=K.getViewportCount();for(let Pe=0;Pe<ee;Pe++)r.sunShadowMatrix[C+Pe]=K.getMatrix(Pe),r.sunShadowCascade[C+Pe]=K._cascadeData[Pe];C+=ee,E++}r.sun[M]=Y,M++}else if(B.isDirectionalLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,N=n.get(B);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.directionalShadow[v]=N,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=B.shadow.matrix,I++}r.directional[v]=Y,v++}else if(B.isSpotLight){const Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(re).multiplyScalar(ce),Y.distance=$,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,r.spot[b]=Y;const K=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,K.updateMatrices(B),B.castShadow&&q++),r.spotLightMatrix[b]=K.matrix,B.castShadow){const N=n.get(B);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.spotShadow[b]=N,r.spotShadowMap[b]=Q,S++}b++}else if(B.isRectAreaLight){const Y=e.get(B);Y.color.copy(re).multiplyScalar(ce),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),r.rectArea[F]=Y,F++}else if(B.isPointLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const K=B.shadow,N=n.get(B);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,r.pointShadow[_]=N,r.pointShadowMap[_]=Q,r.pointShadowMatrix[_]=B.shadow.matrix,D++}r.point[_]=Y,_++}else if(B.isHemisphereLight){const Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(ce),Y.groundColor.copy(B.groundColor).multiplyScalar(ce),r.hemi[P]=Y,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=g;const W=r.hash;(W.sunLength!==M||W.directionalLength!==v||W.pointLength!==_||W.spotLength!==b||W.rectAreaLength!==F||W.hemiLength!==P||W.numSunShadows!==E||W.numDirectionalShadows!==I||W.numPointShadows!==D||W.numSpotShadows!==S||W.numSpotMaps!==R||W.numLightProbes!==k)&&(r.sun.length=M,r.directional.length=v,r.spot.length=b,r.rectArea.length=F,r.point.length=_,r.hemi.length=P,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=S,r.spotShadowMap.length=S,r.spotLightMatrix.length=S+R-q,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=k,W.sunLength=M,W.directionalLength=v,W.pointLength=_,W.spotLength=b,W.rectAreaLength=F,W.hemiLength=P,W.numSunShadows=E,W.numDirectionalShadows=I,W.numPointShadows=D,W.numSpotShadows=S,W.numSpotMaps=R,W.numLightProbes=k,r.version=IE++)}function m(p,x){let y=0,g=0,M=0,E=0,C=0,v=0;const _=x.matrixWorldInverse;for(let b=0,F=p.length;b<F;b++){const P=p[b];if(P.isSunLight){const I=r.sun[y];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(_),y++}else if(P.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),g++}else if(P.isSpotLight){const I=r.spot[E];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),E++}else if(P.isRectAreaLight){const I=r.rectArea[C];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),c.identity(),u.copy(P.matrixWorld),u.premultiply(_),c.extractRotation(u),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),C++}else if(P.isPointLight){const I=r.point[M];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),M++}else if(P.isHemisphereLight){const I=r.hemi[v];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(_),v++}}}return{setup:d,setupView:m,state:r}}function Zm(s){const e=new FE(s),n=[],r=[],o=[];function u(y){x.camera=y,n.length=0,r.length=0,o.length=0}function c(y){y.isLightProbeGrid?o.push(y):n.push(y)}function d(y){r.push(y)}function m(){e.setup(n),o.sort((y,g)=>y.priority-g.priority||y.id-g.id)}function p(y){e.setupView(n,y)}const x={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:m,setupLightsView:p,pushLight:c,pushShadow:d}}function OE(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new Zm(s),e.set(o,[d])):u>=c.length?(d=new Zm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],HE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Jm=new Wt,Ha=new H,ff=new H;function GE(s,e,n){let r=new Ka;const o=new Mt,u=new Mt,c=new tn,d=new jv,m=new ex,p={},x=n.maxTextureSize,y={[as]:Zn,[Zn]:as,[Pi]:Pi},g=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:BE,fragmentShader:kE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new en;E.setAttribute("position",new Hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new jt(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let _=this.type;this.render=function(D,S,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;this.type===k_&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Il);const q=s.getRenderTarget(),k=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ks),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=_!==this.type;oe&&S.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(re=>re.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,re=D.length;B<re;B++){const ce=D[B],$=ce.shadow;if($===void 0){st("WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const Q=$.getFrameExtents();o.multiply(Q),u.copy($.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(u.x=Math.floor(x/Q.x),o.x=u.x*Q.x,$.mapSize.x=u.x),o.y>x&&(u.y=Math.floor(x/Q.y),o.y=u.y*Q.y,$.mapSize.y=u.y));const Y=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||oe===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ga){if(ce.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Wi(o.x,o.y,{format:os,type:qi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),$.map.texture.name=ce.name+".shadowMap",$.map.depthTexture=new js(o.x,o.y,Hi),$.map.depthTexture.name=ce.name+".shadowMapDepth",$.map.depthTexture.format=Gr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Pn,$.map.depthTexture.magFilter=Pn}else ce.isPointLight?($.map=new Sd(o.x),$.map.depthTexture=new bg(o.x,Xi)):($.map=new Wi(o.x,o.y),$.map.depthTexture=new js(o.x,o.y,Xi)),$.map.depthTexture.name=ce.name+".shadowMap",$.map.depthTexture.format=Gr,this.type===Il?($.map.depthTexture.compareFunction=Y?vg:_g,$.map.depthTexture.minFilter=Kn,$.map.depthTexture.magFilter=Kn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Pn,$.map.depthTexture.magFilter=Pn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const K=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ce.isPointLight!==!0&&$.updateMatrices(ce,R);const N=($.camera.layers.mask&4294967294)!==0?$.camera.layers:R.layers;for(let ee=0;ee<K;ee++){const Pe=$.getCamera(ee);if(ce.isPointLight){const ie=$.camera,ge=$.matrix,Se=ce.distance||ie.far;Se!==ie.far&&(ie.far=Se,ie.updateProjectionMatrix()),Ha.setFromMatrixPosition(ce.matrixWorld),ie.position.copy(Ha),ff.copy(ie.position),ff.add(zE[ee]),ie.up.copy(HE[ee]),ie.lookAt(ff),ie.updateMatrixWorld(),ge.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Jm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Jm,ie.coordinateSystem,ie.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,ee),s.clear();else{ee===0&&(s.setRenderTarget($.map),s.clear());const ie=$.getViewport(ee);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),Z.viewport(c)}r=$.getFrustum(ee),P(S,R,Pe,ce,N,this.type)}$.isPointLightShadow!==!0&&this.type===Ga&&b($,R),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(q,k,W)};function b(D,S){const R=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Wi(o.x,o.y,{format:os,type:qi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(S,null,R,g,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(S,null,R,M,C,null)}function F(D,S,R,q){let k=null;const W=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)k=W;else if(k=R.isPointLight===!0?m:d,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const Z=k.uuid,oe=S.uuid;let B=p[Z];B===void 0&&(B={},p[Z]=B);let re=B[oe];re===void 0&&(re=k.clone(),B[oe]=re,S.addEventListener("dispose",I)),k=re}if(k.visible=S.visible,k.wireframe=S.wireframe,q===Ga?k.side=S.shadowSide!==null?S.shadowSide:S.side:k.side=S.shadowSide!==null?S.shadowSide:y[S.side],k.alphaMap=S.alphaMap,k.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,k.map=S.map,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,R.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=s.properties.get(k);Z.light=R}return k}function P(D,S,R,q,k,W){if(D.visible===!1)return;if(D.layers.test(k)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&W===Ga)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const B=e.update(D),re=D.material;if(Array.isArray(re)){const ce=B.groups;for(let $=0,Q=ce.length;$<Q;$++){const Y=ce[$],K=re[Y.materialIndex];if(K&&K.visible){const N=F(D,K,q,W);D.onBeforeShadow(s,D,S,R,B,N,Y),s.renderBufferDirect(R,null,B,N,D,Y),D.onAfterShadow(s,D,S,R,B,N,Y)}}}else if(re.visible){const ce=F(D,re,q,W);D.onBeforeShadow(s,D,S,R,B,ce,null),s.renderBufferDirect(R,null,B,ce,D,null),D.onAfterShadow(s,D,S,R,B,ce,null)}}const oe=D.children;for(let B=0,re=oe.length;B<re;B++)P(oe[B],S,R,q,k,W)}function I(D){D.target.removeEventListener("dispose",I);for(const R in p){const q=p[R],k=D.target.uuid;k in q&&(q[k].dispose(),delete q[k])}}}function VE(s,e){function n(){let O=!1;const he=new tn;let ue=null;const Ae=new tn(0,0,0,0);return{setMask:function(we){ue!==we&&!O&&(s.colorMask(we,we,we,we),ue=we)},setLocked:function(we){O=we},setClear:function(we,Re,Ve,at,_e){_e===!0&&(we*=at,Re*=at,Ve*=at),he.set(we,Re,Ve,at),Ae.equals(he)===!1&&(s.clearColor(we,Re,Ve,at),Ae.copy(he))},reset:function(){O=!1,ue=null,Ae.set(-1,0,0,0)}}}function r(){let O=!1,he=!1,ue=null,Ae=null,we=null;return{setReversed:function(Re){if(he!==Re){const Ve=e.get("EXT_clip_control");Re?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),he=Re;const at=we;we=null,this.setClear(at)}},getReversed:function(){return he},setTest:function(Re){Re?pe(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!O&&(s.depthMask(Re),ue=Re)},setFunc:function(Re){if(he&&(Re=xv[Re]),Ae!==Re){switch(Re){case hf:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case Xa:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case _f:s.depthFunc(s.GEQUAL);break;case vf:s.depthFunc(s.GREATER);break;case xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=Re}},setLocked:function(Re){O=Re},setClear:function(Re){we!==Re&&(we=Re,he&&(Re=1-Re),s.clearDepth(Re))},reset:function(){O=!1,ue=null,Ae=null,we=null,he=!1}}}function o(){let O=!1,he=null,ue=null,Ae=null,we=null,Re=null,Ve=null,at=null,_e=null;return{setTest:function(Ze){O||(Ze?pe(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Ze){he!==Ze&&!O&&(s.stencilMask(Ze),he=Ze)},setFunc:function(Ze,rt,Ue){(ue!==Ze||Ae!==rt||we!==Ue)&&(s.stencilFunc(Ze,rt,Ue),ue=Ze,Ae=rt,we=Ue)},setOp:function(Ze,rt,Ue){(Re!==Ze||Ve!==rt||at!==Ue)&&(s.stencilOp(Ze,rt,Ue),Re=Ze,Ve=rt,at=Ue)},setLocked:function(Ze){O=Ze},setClear:function(Ze){_e!==Ze&&(s.clearStencil(Ze),_e=Ze)},reset:function(){O=!1,he=null,ue=null,Ae=null,we=null,Re=null,Ve=null,at=null,_e=null}}}const u=new n,c=new r,d=new o;let m={};const p=new WeakMap;let x={},y={},g={},M=new WeakMap,E=[],C=null,v=!1,_=null,b=null,F=null,P=null,I=null,D=null,S=null,R=new pt(0,0,0),q=0,k=!1,W=null,Z=null,oe=null,B=null,re=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=Q>=2);let K=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),ie=new tn().fromArray(ee),ge=new tn().fromArray(Pe);function Se(O,he,ue,Ae){const we=new Uint8Array(4),Re=s.createTexture();s.bindTexture(O,Re),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ue;Ve++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(he+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Re}const Ie={};Ie[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Xa),Bt(!1),Ut(Jp),pe(s.CULL_FACE),Kt(Ks);function pe(O){x[O]!==!0&&(s.enable(O),x[O]=!0)}function Be(O){x[O]!==!1&&(s.disable(O),x[O]=!1)}function xt(O,he){return g[O]!==he?(s.bindFramebuffer(O,he),g[O]=he,O===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=he),O===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=he),!0):!1}function je(O,he){let ue=E,Ae=!1;if(O){ue=M.get(he),ue===void 0&&(ue=[],M.set(he,ue));const we=O.textures;if(ue.length!==we.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,Ve=we.length;Re<Ve;Re++)ue[Re]=s.COLOR_ATTACHMENT0+Re;ue.length=we.length,Ae=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(ue)}function lt(O){return C!==O?(s.useProgram(O),C=O,!0):!1}const wt={[$s]:s.FUNC_ADD,[H_]:s.FUNC_SUBTRACT,[G_]:s.FUNC_REVERSE_SUBTRACT};wt[V_]=s.MIN,wt[W_]=s.MAX;const ft={[X_]:s.ZERO,[q_]:s.ONE,[Y_]:s.SRC_COLOR,[eg]:s.SRC_ALPHA,[j_]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[K_]:s.DST_ALPHA,[$_]:s.ONE_MINUS_SRC_COLOR,[tg]:s.ONE_MINUS_SRC_ALPHA,[Q_]:s.ONE_MINUS_DST_COLOR,[Z_]:s.ONE_MINUS_DST_ALPHA,[ev]:s.CONSTANT_COLOR,[tv]:s.ONE_MINUS_CONSTANT_COLOR,[nv]:s.CONSTANT_ALPHA,[iv]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(O,he,ue,Ae,we,Re,Ve,at,_e,Ze){if(O===Ks){v===!0&&(Be(s.BLEND),v=!1);return}if(v===!1&&(pe(s.BLEND),v=!0),O!==z_){if(O!==_||Ze!==k){if((b!==$s||I!==$s)&&(s.blendEquation(s.FUNC_ADD),b=$s,I=$s),Ze)switch(O){case Wa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case df:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",O);break}else switch(O){case Wa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case df:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qp:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jp:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",O);break}F=null,P=null,D=null,S=null,R.set(0,0,0),q=0,_=O,k=Ze}return}we=we||he,Re=Re||ue,Ve=Ve||Ae,(he!==b||we!==I)&&(s.blendEquationSeparate(wt[he],wt[we]),b=he,I=we),(ue!==F||Ae!==P||Re!==D||Ve!==S)&&(s.blendFuncSeparate(ft[ue],ft[Ae],ft[Re],ft[Ve]),F=ue,P=Ae,D=Re,S=Ve),(at.equals(R)===!1||_e!==q)&&(s.blendColor(at.r,at.g,at.b,_e),R.copy(at),q=_e),_=O,k=!1}function Ht(O,he){O.side===Pi?Be(s.CULL_FACE):pe(s.CULL_FACE);let ue=O.side===Zn;he&&(ue=!ue),Bt(ue),O.blending===Wa&&O.transparent===!1?Kt(Ks):Kt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),u.setMask(O.colorWrite);const Ae=O.stencilWrite;d.setTest(Ae),Ae&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){W!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),W=O)}function Ut(O){O!==O_?(pe(s.CULL_FACE),O!==Z&&(O===Jp?s.cullFace(s.BACK):O===B_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),Z=O}function Ln(O){O!==oe&&($&&s.lineWidth(O),oe=O)}function kt(O,he,ue){O?(pe(s.POLYGON_OFFSET_FILL),(B!==he||re!==ue)&&(B=he,re=ue,c.getReversed()&&(he=-he,ue=-ue),s.polygonOffset(he,ue))):Be(s.POLYGON_OFFSET_FILL)}function rn(O){O?pe(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function dn(O){O===void 0&&(O=s.TEXTURE0+ce-1),K!==O&&(s.activeTexture(O),K=O)}function on(O,he,ue){ue===void 0&&(K===null?ue=s.TEXTURE0+ce-1:ue=K);let Ae=N[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},N[ue]=Ae),(Ae.type!==O||Ae.texture!==he)&&(K!==ue&&(s.activeTexture(ue),K=ue),s.bindTexture(O,he||Ie[O]),Ae.type=O,Ae.texture=he)}function V(){const O=N[K];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Sn(){try{s.compressedTexImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Dt(){try{s.compressedTexImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Ct(){try{s.texSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Le(){try{s.texSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function et(){try{s.texStorage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function L(){try{s.texStorage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){Lt("WebGLState:",O)}}function j(){try{s.texImage3D(...arguments)}catch(O){Lt("WebGLState:",O)}}function Me(O){return y[O]!==void 0?y[O]:s.getParameter(O)}function me(O,he){y[O]!==he&&(s.pixelStorei(O,he),y[O]=he)}function Te(O){ie.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ie.copy(O))}function be(O){ge.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function fe(O,he){let ue=p.get(he);ue===void 0&&(ue=new WeakMap,p.set(he,ue));let Ae=ue.get(O);Ae===void 0&&(Ae=s.getUniformBlockIndex(he,O.name),s.uniformBlockBinding(he,Ae,Ae),ue.set(O,Ae))}function de(O,he,ue){const we=p.get(he).get(O);m[we]!==ue&&(s.bindBufferBase(s.UNIFORM_BUFFER,we,ue),m[we]=ue)}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},y={},K=null,N={},g={},m={},M=new WeakMap,E=[],C=null,v=!1,_=null,b=null,F=null,P=null,I=null,D=null,S=null,R=new pt(0,0,0),q=0,k=!1,W=null,Z=null,oe=null,B=null,re=null,ie.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:pe,disable:Be,bindFramebuffer:xt,drawBuffers:je,useProgram:lt,setBlending:Kt,setMaterial:Ht,setFlipSided:Bt,setCullFace:Ut,setLineWidth:Ln,setPolygonOffset:kt,setScissorTest:rn,activeTexture:dn,bindTexture:on,unbindTexture:V,compressedTexImage2D:Sn,compressedTexImage3D:Dt,texImage2D:T,texImage3D:j,pixelStorei:me,getParameter:Me,updateUBOMapping:fe,uniformBlockBinding:de,texStorage2D:et,texStorage3D:L,texSubImage2D:Ct,texSubImage3D:Le,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Qe,scissor:Te,viewport:be,reset:ye}}function WE(s,e,n,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,x=new WeakMap,y=new Set;let g;const M=new WeakMap,E=new Set,C=new FinalizationRegistry(L=>E.delete(L));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return v?new OffscreenCanvas(L,T):Yl("canvas")}function b(L,T,j){let Me=1;const me=et(L);if((me.width>j||me.height>j)&&(Me=j/Math.max(me.width,me.height)),Me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Te=Math.floor(Me*me.width),be=Math.floor(Me*me.height);g===void 0&&(g=_(Te,be));const fe=T?_(Te,be):g;return fe.width=Te,fe.height=be,fe.getContext("2d").drawImage(L,0,0,Te,be),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Te+"x"+be+")."),fe}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function F(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,j,Me,me,Te=!1){if(L!==null){if(s[L]!==void 0)return s[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;Me&&(be=e.get("EXT_texture_norm16"),be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===s.RED&&(j===s.FLOAT&&(fe=s.R32F),j===s.HALF_FLOAT&&(fe=s.R16F),j===s.UNSIGNED_BYTE&&(fe=s.R8),j===s.UNSIGNED_SHORT&&be&&(fe=be.R16_EXT),j===s.SHORT&&be&&(fe=be.R16_SNORM_EXT)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.R8UI),j===s.UNSIGNED_SHORT&&(fe=s.R16UI),j===s.UNSIGNED_INT&&(fe=s.R32UI),j===s.BYTE&&(fe=s.R8I),j===s.SHORT&&(fe=s.R16I),j===s.INT&&(fe=s.R32I)),T===s.RG&&(j===s.FLOAT&&(fe=s.RG32F),j===s.HALF_FLOAT&&(fe=s.RG16F),j===s.UNSIGNED_BYTE&&(fe=s.RG8),j===s.UNSIGNED_SHORT&&be&&(fe=be.RG16_EXT),j===s.SHORT&&be&&(fe=be.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RG8UI),j===s.UNSIGNED_SHORT&&(fe=s.RG16UI),j===s.UNSIGNED_INT&&(fe=s.RG32UI),j===s.BYTE&&(fe=s.RG8I),j===s.SHORT&&(fe=s.RG16I),j===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),j===s.UNSIGNED_INT&&(fe=s.RGB32UI),j===s.BYTE&&(fe=s.RGB8I),j===s.SHORT&&(fe=s.RGB16I),j===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),j===s.UNSIGNED_INT&&(fe=s.RGBA32UI),j===s.BYTE&&(fe=s.RGBA8I),j===s.SHORT&&(fe=s.RGBA16I),j===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&(j===s.UNSIGNED_SHORT&&be&&(fe=be.RGB16_EXT),j===s.SHORT&&be&&(fe=be.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),T===s.RGBA){const de=Te?ql:yt.getTransfer(me);j===s.FLOAT&&(fe=s.RGBA32F),j===s.HALF_FLOAT&&(fe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(fe=de===It?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&be&&(fe=be.RGBA16_EXT),j===s.SHORT&&be&&(fe=be.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(L,T){let j;return L?T===null||T===Xi||T===Qs?j=s.DEPTH24_STENCIL8:T===Hi?j=s.DEPTH32F_STENCIL8:T===Ya&&(j=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xi||T===Qs?j=s.DEPTH_COMPONENT24:T===Hi?j=s.DEPTH_COMPONENT32F:T===Ya&&(j=s.DEPTH_COMPONENT16),j}function R(L,T){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function q(L){const T=new WeakRef(L);r.get(L).__ref=T,E.add(T),C.register(L,T,T)}function k(L){const T=r.get(L).__ref;T!==void 0&&(E.delete(T),C.unregister(T))}function W(L){oe(L.target)}function Z(L){B(L.target)}function oe(L){L.removeEventListener("dispose",W),k(L),ce(L),L.isVideoTexture&&x.delete(L),L.isHTMLTexture&&y.delete(L)}function B(L){L.removeEventListener("dispose",Z),k(L),Q(L)}function re(){for(const L of E){const T=L.deref();T!==void 0&&(T.isRenderTarget===!0?B(T):oe(T))}E.clear(),y.clear()}function ce(L){const T=r.get(L);if(T.__webglInit===void 0)return;const j=L.source,Me=M.get(j);if(Me){const me=Me[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&$(L),Object.keys(Me).length===0&&M.delete(j)}r.remove(L)}function $(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const j=L.source,Me=M.get(j);delete Me[T.__cacheKey],c.memory.textures--}function Q(L){const T=r.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();const j=L.depthTexture;if(j&&j.renderTarget===L&&oe(j),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let Te=0;Te<T.__webglFramebuffer[me].length;Te++)s.deleteFramebuffer(T.__webglFramebuffer[me][Te]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Me=L.textures;for(let me=0,Te=Me.length;me<Te;me++){const be=r.get(Me[me]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),c.memory.textures--),r.remove(Me[me])}r.remove(L)}let Y=0;function K(){Y=0}function N(){return Y}function ee(L){Y=L}function Pe(){const L=Y;return L>=o.maxTextures&&st("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,L}function ie(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ge(L,T){const j=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const Me=L.image;if(Me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(j,L,T);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function Se(L,T){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Ht(j,L,T);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function Ie(L,T){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Ht(j,L,T);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function pe(L,T){const j=r.get(L);if(L.version>0&&j.__version!==L.version){Bt(j,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const Be={[Sf]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[Mf]:s.MIRRORED_REPEAT},xt={[Pn]:s.NEAREST,[av]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[Fc]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},je={[cv]:s.NEVER,[xg]:s.ALWAYS,[fv]:s.LESS,[_g]:s.LEQUAL,[dv]:s.EQUAL,[vg]:s.GEQUAL,[hv]:s.GREATER,[pv]:s.NOTEQUAL};function lt(L,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===Fc||T.magFilter===sl||T.magFilter===kr||T.minFilter===Kn||T.minFilter===Fc||T.minFilter===sl||T.minFilter===kr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Be[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Be[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Be[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,je[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==sl&&T.minFilter!==kr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function wt(L,T){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",W),q(T));const Me=T.source;let me=M.get(Me);me===void 0&&(me={},M.set(Me,me));const Te=ie(T);if(Te!==L.__cacheKey){me[Te]===void 0&&(me[Te]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,j=!0),me[Te].usedTimes++;const be=me[L.__cacheKey];be!==void 0&&(me[L.__cacheKey].usedTimes--,be.usedTimes===0&&$(T)),L.__cacheKey=Te,L.__webglTexture=me[Te].texture}return j}function ft(L,T,j){return Math.floor(Math.floor(L/j)/T)}function Kt(L,T,j,Me){const Te=L.updateRanges;if(Te.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,j,Me,T.data);else{Te.sort((O,he)=>O.start-he.start);let be=0;for(let O=1;O<Te.length;O++){const he=Te[be],ue=Te[O],Ae=he.start+he.count,we=ft(ue.start,T.width,4),Re=ft(he.start,T.width,4);ue.start<=Ae+1&&we===Re&&ft(ue.start+ue.count-1,T.width,4)===we?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++be,Te[be]=ue)}Te.length=be+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),de=n.getParameter(s.UNPACK_SKIP_PIXELS),ye=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,he=Te.length;O<he;O++){const ue=Te[O],Ae=Math.floor(ue.start/4),we=Math.ceil(ue.count/4),Re=Ae%T.width,Ve=Math.floor(Ae/T.width),at=we,_e=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(s.UNPACK_SKIP_ROWS,Ve),n.texSubImage2D(s.TEXTURE_2D,0,Re,Ve,at,_e,j,Me,T.data)}L.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,de),n.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function Ht(L,T,j){let Me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Me=s.TEXTURE_3D);const me=wt(L,T),Te=T.source;n.bindTexture(Me,L.__webglTexture,s.TEXTURE0+j);const be=r.get(Te);if(Te.version!==be.__version||me===!0){if(n.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const _e=yt.getPrimaries(yt.workingColorSpace),Ze=T.colorSpace===Br?null:yt.getPrimaries(T.colorSpace),rt=T.colorSpace===Br||_e===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let de=b(T.image,!1,o.maxTextureSize);de=Qe(T,de);const ye=u.convert(T.format,T.colorSpace),O=u.convert(T.type);let he=D(T.internalFormat,ye,O,T.normalized,T.colorSpace,T.isVideoTexture);lt(Me,T);let ue;const Ae=T.mipmaps,we=T.isVideoTexture!==!0,Re=be.__version===void 0||me===!0,Ve=Te.dataReady,at=R(T,de);if(T.isDepthTexture)he=S(T.format===zr,T.type),Re&&(we?n.texStorage2D(s.TEXTURE_2D,1,he,de.width,de.height):n.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,ye,O,null));else if(T.isDataTexture)if(Ae.length>0){we&&Re&&n.texStorage2D(s.TEXTURE_2D,at,he,Ae[0].width,Ae[0].height);for(let _e=0,Ze=Ae.length;_e<Ze;_e++)ue=Ae[_e],we?Ve&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,ue.width,ue.height,ye,O,ue.data):n.texImage2D(s.TEXTURE_2D,_e,he,ue.width,ue.height,0,ye,O,ue.data);T.generateMipmaps=!1}else we?(Re&&n.texStorage2D(s.TEXTURE_2D,at,he,de.width,de.height),Ve&&Kt(T,de,ye,O)):n.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,ye,O,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){we&&Re&&n.texStorage3D(s.TEXTURE_2D_ARRAY,at,he,Ae[0].width,Ae[0].height,de.depth);for(let _e=0,Ze=Ae.length;_e<Ze;_e++)if(ue=Ae[_e],T.format!==Gi)if(ye!==null)if(we){if(Ve)if(T.layerUpdates.size>0){const rt=Pm(ue.width,ue.height,T.format,T.type);for(const Ue of T.layerUpdates){const mt=ue.data.subarray(Ue*rt/ue.data.BYTES_PER_ELEMENT,(Ue+1)*rt/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ue,ue.width,ue.height,1,ye,mt)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,ue.width,ue.height,de.depth,ye,ue.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,he,ue.width,ue.height,de.depth,0,ue.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Ve&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,ue.width,ue.height,de.depth,ye,O,ue.data):n.texImage3D(s.TEXTURE_2D_ARRAY,_e,he,ue.width,ue.height,de.depth,0,ye,O,ue.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{we&&Re&&n.texStorage2D(s.TEXTURE_2D,at,he,Ae[0].width,Ae[0].height);for(let _e=0,Ze=Ae.length;_e<Ze;_e++)ue=Ae[_e],T.format!==Gi?ye!==null?we?Ve&&n.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,ue.width,ue.height,ye,ue.data):n.compressedTexImage2D(s.TEXTURE_2D,_e,he,ue.width,ue.height,0,ue.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ve&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,ue.width,ue.height,ye,O,ue.data):n.texImage2D(s.TEXTURE_2D,_e,he,ue.width,ue.height,0,ye,O,ue.data)}else if(T.isDataArrayTexture)if(we){if(Re&&n.texStorage3D(s.TEXTURE_2D_ARRAY,at,he,de.width,de.height,de.depth),Ve)if(T.layerUpdates.size>0){const _e=Pm(de.width,de.height,T.format,T.type);for(const Ze of T.layerUpdates){const rt=de.data.subarray(Ze*_e/de.data.BYTES_PER_ELEMENT,(Ze+1)*_e/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,de.width,de.height,1,ye,O,rt)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ye,O,de.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,he,de.width,de.height,de.depth,0,ye,O,de.data);else if(T.isData3DTexture)we?(Re&&n.texStorage3D(s.TEXTURE_3D,at,he,de.width,de.height,de.depth),Ve&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ye,O,de.data)):n.texImage3D(s.TEXTURE_3D,0,he,de.width,de.height,de.depth,0,ye,O,de.data);else if(T.isFramebufferTexture){if(Re)if(we)n.texStorage2D(s.TEXTURE_2D,at,he,de.width,de.height);else{let _e=de.width,Ze=de.height;for(let rt=0;rt<at;rt++)n.texImage2D(s.TEXTURE_2D,rt,he,_e,Ze,0,ye,O,null),_e>>=1,Ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),y.add(T),_e.onpaint=Ze=>{const rt=Ze.changedElements;for(const Ue of y)rt.includes(Ue.image)&&(Ue.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const rt=s.RGBA,Ue=s.RGBA,mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,Ue,mt,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(we&&Re){const _e=et(Ae[0]);n.texStorage2D(s.TEXTURE_2D,at,he,_e.width,_e.height)}for(let _e=0,Ze=Ae.length;_e<Ze;_e++)ue=Ae[_e],we?Ve&&n.texSubImage2D(s.TEXTURE_2D,_e,0,0,ye,O,ue):n.texImage2D(s.TEXTURE_2D,_e,he,ye,O,ue);T.generateMipmaps=!1}else if(we){if(Re){const _e=et(de);n.texStorage2D(s.TEXTURE_2D,at,he,_e.width,_e.height)}Ve&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,O,de)}else n.texImage2D(s.TEXTURE_2D,0,he,ye,O,de);F(T)&&T.mipmapsAutoUpdate===!0&&P(Me),be.__version=Te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Bt(L,T,j){if(T.image.length!==6)return;const Me=wt(L,T),me=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const Te=r.get(me);if(me.version!==Te.__version||Me===!0){n.activeTexture(s.TEXTURE0+j);const be=yt.getPrimaries(yt.workingColorSpace),fe=T.colorSpace===Br?null:yt.getPrimaries(T.colorSpace),de=T.colorSpace===Br||be===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,he=[];for(let Ue=0;Ue<6;Ue++)!ye&&!O?he[Ue]=b(T.image[Ue],!0,o.maxCubemapSize):he[Ue]=O?T.image[Ue].image:T.image[Ue],he[Ue]=Qe(T,he[Ue]);const ue=he[0],Ae=u.convert(T.format,T.colorSpace),we=u.convert(T.type);let Re=D(T.internalFormat,Ae,we,T.normalized,T.colorSpace);const Ve=T.isVideoTexture!==!0,at=Te.__version===void 0||Me===!0,_e=me.dataReady;let Ze=R(T,ue);lt(s.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Re=S(T.format===zr,T.type),at)if(Ve)n.texStorage2D(s.TEXTURE_CUBE_MAP,1,Re,ue.width,ue.height);else for(let Ue=0;Ue<6;Ue++)n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,ue.width,ue.height,0,Ae,we,null)}else if(ye){Ve&&at&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Re,ue.width,ue.height);for(let Ue=0;Ue<6;Ue++){rt=he[Ue].mipmaps;for(let mt=0;mt<rt.length;mt++){const Ft=rt[mt];T.format!==Gi?Ae!==null?Ve?_e&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt,0,0,Ft.width,Ft.height,Ae,Ft.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt,Re,Ft.width,Ft.height,0,Ft.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?_e&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt,0,0,Ft.width,Ft.height,Ae,we,Ft.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt,Re,Ft.width,Ft.height,0,Ae,we,Ft.data)}}}else{if(rt=T.mipmaps,Ve&&at){rt.length>0&&Ze++;const Ue=et(he[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Re,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(O){Ve?_e&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,he[Ue].width,he[Ue].height,Ae,we,he[Ue].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,he[Ue].width,he[Ue].height,0,Ae,we,he[Ue].data);for(let mt=0;mt<rt.length;mt++){const Rn=rt[mt].image[Ue].image;Ve?_e&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt+1,0,0,Rn.width,Rn.height,Ae,we,Rn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt+1,Re,Rn.width,Rn.height,0,Ae,we,Rn.data)}}else{Ve?_e&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ae,we,he[Ue]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,Ae,we,he[Ue]);for(let mt=0;mt<rt.length;mt++){const Ft=rt[mt];Ve?_e&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt+1,0,0,Ae,we,Ft.image[Ue]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,mt+1,Re,Ae,we,Ft.image[Ue])}}}F(T)&&T.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Te.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ut(L,T,j,Me,me,Te){const be=u.convert(j.format,j.colorSpace),fe=u.convert(j.type),de=D(j.internalFormat,be,fe,j.normalized,j.colorSpace),ye=r.get(T),O=r.get(j);if(O.__renderTarget=T,!ye.__hasExternalTextures){const he=Math.max(1,T.width>>Te),ue=Math.max(1,T.height>>Te);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,Te,de,he,ue,T.depth,0,be,fe,null):n.texImage2D(me,Te,de,he,ue,0,be,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Le(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,me,O.__webglTexture,0,Ct(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,me,O.__webglTexture,Te),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ln(L,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const Me=T.depthTexture,me=Me&&Me.isDepthTexture?Me.type:null,Te=S(T.stencilBuffer,me),be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(T),Te,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(T),Te,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Te,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const Me=T.textures;for(let me=0;me<Me.length;me++){const Te=Me[me],be=u.convert(Te.format,Te.colorSpace),fe=u.convert(Te.type),de=D(Te.internalFormat,be,fe,Te.normalized,Te.colorSpace);Le(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(T),de,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(T),de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,T,j){const Me=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);me.__renderTarget=T;const Te=Me?T.depthTexture.image[0]:T.depthTexture.image;(!me.__webglTexture||Te.width!==T.width||Te.height!==T.height)&&(Te.width=T.width,Te.height=T.height,T.depthTexture.needsUpdate=!0),Me?pe(T.depthTexture,0):ge(T.depthTexture,0);const be=me.__webglTexture,fe=Ct(T),de=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ye=T.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Gr)Le(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,de,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,de,be,0);else if(T.depthTexture.format===zr)Le(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,de,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,de,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rn(L){const T=r.get(L),j=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Me){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Me.removeEventListener("dispose",me)};Me.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=Me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let Me=0;Me<6;Me++)kt(T.__webglFramebuffer[Me],L,Me);else L.texture.mipmaps.length>0?kt(T.__webglFramebuffer[0],L,0):kt(T.__webglFramebuffer,L,0);else if(j){T.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Me]),T.__webglDepthbuffer[Me]===void 0)T.__webglDepthbuffer[Me]=s.createRenderbuffer(),Ln(T.__webglDepthbuffer[Me],L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=T.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Te)}}else if(L.texture.mipmaps.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ln(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Te)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function dn(L,T,j){const Me=r.get(L);T!==void 0&&Ut(Me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&rn(L)}function on(L){const T=L.texture,j=r.get(L),Me=r.get(T);L.addEventListener("dispose",Z),q(L);const me=L.textures,Te=L.isWebGLCubeRenderTarget===!0,be=me.length>1;if(be||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=T.version,c.memory.textures++),Te){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let de=0;de<T.mipmaps.length;de++)j.__webglFramebuffer[fe][de]=s.createFramebuffer()}else j.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(T.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)j.__webglFramebuffer[fe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(be)for(let fe=0,de=me.length;fe<de;fe++){const ye=r.get(me[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Le(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<me.length;fe++){const de=me[fe];j.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const ye=u.convert(de.format,de.colorSpace),O=u.convert(de.type),he=D(de.internalFormat,ye,O,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),ue=Ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,he,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ln(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){n.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),lt(s.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ut(j.__webglFramebuffer[fe][de],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ut(j.__webglFramebuffer[fe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);F(T)?P(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}else if(be){for(let fe=0,de=me.length;fe<de;fe++){const ye=me[fe],O=r.get(ye);let he=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(he,O.__webglTexture),lt(he,ye),Ut(j.__webglFramebuffer,L,ye,s.COLOR_ATTACHMENT0+fe,he,0),F(ye)&&P(he)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,Me.__webglTexture),lt(fe,T),T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ut(j.__webglFramebuffer[de],L,T,s.COLOR_ATTACHMENT0,fe,de);else Ut(j.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,fe,0);F(T)?P(fe):T.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}L.depthBuffer&&rn(L)}function V(L){const T=L.textures;for(let j=0,Me=T.length;j<Me;j++){const me=T[j];if(F(me)&&me.mipmapsAutoUpdate===!0){const Te=I(L),be=r.get(me).__webglTexture;n.bindTexture(Te,be),P(Te),n.unbindTexture()}}}const Sn=[];function Dt(L){if(L.samples>0){if(Le(L)===!1){const T=L.textures,j=L.width,Me=L.height;let me=s.COLOR_BUFFER_BIT;const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(L),fe=T.length>1;if(fe)for(let ye=0;ye<T.length;ye++)n.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const O=r.get(T[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,j,Me,0,0,j,Me,me,s.NEAREST),m===!0&&(Sn.length=0,Sn.push(s.COLOR_ATTACHMENT0+ye),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Sn.push(Te),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Sn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<T.length;ye++){n.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const O=r.get(T[ye]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,O,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ct(L){return Math.min(o.maxSamples,L.samples)}function Le(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=c.render.frame;x.get(L)!==T&&(x.set(L,T),L.update())}function Qe(L,T){const j=L.colorSpace,Me=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Xl&&j!==Br&&(yt.getTransfer(j)===It?(Me!==Gi||me!==si)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",j)),T}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Pe,this.resetTextureUnits=K,this.getTextureUnits=N,this.setTextureUnits=ee,this.setTexture2D=ge,this.setTexture2DArray=Se,this.setTexture3D=Ie,this.setTextureCube=pe,this.rebindTextures=dn,this.setupRenderTarget=on,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=rn,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Le,this.dispose=re}function XE(s,e){function n(r,o=Br){let u;const c=yt.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===cg)return s.BYTE;if(r===fg)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===ad)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===qi)return s.HALF_FLOAT;if(r===pg)return s.ALPHA;if(r===mg)return s.RGB;if(r===Gi)return s.RGBA;if(r===Gr)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===gg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===os)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Ul||r===Fl||r===Ol||r===Bl)if(c===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ul)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ul)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Ef||r===wf||r===Tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===yf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af||r===Rf||r===Cf||r===bf||r===Pf||r===Vl||r===Lf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Af||r===Rf)return c===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===bf)return u.COMPRESSED_R11_EAC;if(r===Pf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Vl)return u.COMPRESSED_RG11_EAC;if(r===Lf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf||r===zf||r===Hf||r===Gf||r===Vf||r===Wf||r===Xf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Df)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ff)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qf||r===Yf||r===$f)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===qf)return c===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kf||r===Zf||r===Wl||r===Jf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Kf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Zf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Pg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ls({vertexShader:qE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new ja(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KE extends us{constructor(e,n){super();const r=this;let o=null,u=1,c=null,d="local-floor",m=1,p=null,x=null,y=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",v=new $E,_={},b=n.getContextAttributes();let F=null,P=null;const I=[],D=[],S=new Mt;let R=null,q=null;const k=new gi;k.viewport=new tn;const W=new gi;W.viewport=new tn;const Z=[k,W],oe=new sx;let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=I[ie];return ge===void 0&&(ge=new Wc,I[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=I[ie];return ge===void 0&&(ge=new Wc,I[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=I[ie];return ge===void 0&&(ge=new Wc,I[ie]=ge),ge.getHandSpace()};function ce(ie){const ge=D.indexOf(ie.inputSource);if(ge===-1)return;const Se=I[ge];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,p||c),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<I.length;ie++){const ge=D[ie];ge!==null&&(D[ie]=null,I[ie].disconnect(ge))}B=null,re=null,v.reset();for(const ie in _)delete _[ie];if(e.setRenderTarget(F),M=null,g=null,y=null,o=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),q!==null){const ie=q.camera;ie.fov=q.fov,ie.zoom=q.zoom,ie.updateProjectionMatrix(),q=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",$),o.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,pe=null;b.depth&&(pe=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=b.stencil?zr:Gr,Ie=b.stencil?Qs:Xi);const Be={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:u};y=this.getBinding(),g=y.createProjectionLayer(Be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Wi(g.textureWidth,g.textureHeight,{format:Gi,type:si,depthTexture:new js(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await o.requestReferenceSpace(d),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(ie){for(let ge=0;ge<ie.removed.length;ge++){const Se=ie.removed[ge],Ie=D.indexOf(Se);Ie>=0&&(D[Ie]=null,I[Ie].disconnect(Se))}for(let ge=0;ge<ie.added.length;ge++){const Se=ie.added[ge];let Ie=D.indexOf(Se);if(Ie===-1){for(let Be=0;Be<I.length;Be++)if(Be>=D.length){D.push(Se),Ie=Be;break}else if(D[Be]===null){D[Be]=Se,Ie=Be;break}if(Ie===-1)break}const pe=I[Ie];pe&&pe.connect(Se)}}function Y(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ge=ie.near,Se=ie.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),oe.near=W.near=k.near=ge,oe.far=W.far=k.far=Se,(B!==oe.near||re!==oe.far)&&(o.updateRenderState({depthNear:oe.near,depthFar:oe.far}),B=oe.near,re=oe.far),oe.layers.mask=ie.layers.mask|6,k.layers.mask=oe.layers.mask&-5,W.layers.mask=oe.layers.mask&-3;const Ie=ie.parent,pe=oe.cameras;Y(oe,Ie);for(let Be=0;Be<pe.length;Be++)Y(pe[Be],Ie);oe.projectionMatrix.copy(k.projectionMatrix),oe.projectionMatrixInverse.copy(k.projectionMatrixInverse),q===null&&ie.isPerspectiveCamera&&(q={camera:ie,fov:ie.fov,zoom:ie.zoom}),K(ie,oe,Ie)};function K(ie,ge,Se){Se===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=jf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(oe)},this.getCameraTexture=function(ie){return _[ie]};let N=null;function ee(ie,ge){if(x=ge.getViewerPose(p||c),E=ge,x!==null){const Se=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ie=!1;Se.length!==oe.cameras.length&&(oe.cameras.length=0,Ie=!0);for(let je=0;je<Se.length;je++){const lt=Se[je];let wt=null;if(M!==null)wt=M.getViewport(lt);else{const Kt=y.getViewSubImage(g,lt);wt=Kt.viewport,je===0&&(e.setRenderTargetTextures(P,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(P))}let ft=Z[je];ft===void 0&&(ft=new gi,ft.layers.enable(je),ft.viewport=new tn,Z[je]=ft),ft.matrix.fromArray(lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(wt.x,wt.y,wt.width,wt.height),je===0&&(oe.matrix.copy(ft.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),Ie===!0&&oe.cameras.push(ft)}const pe=o.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){y=r.getBinding();const je=y.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&v.init(je,o.renderState)}if(pe&&pe.includes("camera-access")&&C){e.state.unbindTexture(),y=r.getBinding();for(let je=0;je<Se.length;je++){const lt=Se[je].camera;if(lt){let wt=_[lt];wt||(wt=new Pg,_[lt]=wt);const ft=y.getCameraImage(lt);wt.sourceTexture=ft}}}}for(let Se=0;Se<I.length;Se++){const Ie=D[Se],pe=I[Se];Ie!==null&&pe!==void 0&&pe.update(Ie,ge,p||c)}N&&N(ie,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Pe=new Ug;Pe.setAnimationLoop(ee),this.setAnimationLoop=function(ie){N=ie},this.dispose=function(){}}}const ZE=new Wt,Xg=new ct;Xg.set(-1,0,0,0,1,0,0,0,1);function JE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Lg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,F,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(v,_):_.isMeshLambertMaterial?(u(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(v,_),g(v,_),_.isMeshPhysicalMaterial&&M(v,_,P)):_.isMeshMatcapMaterial?(u(v,_),E(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),C(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(c(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?m(v,_,b,F):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Zn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Zn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),F=b.envMap,P=b.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Xg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function m(v,_,b,F){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=F*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,b){v.ior.value=_.ior,_.diffuseRoughness>0&&(v.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=_.diffuseRoughnessMap,n(_.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Zn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function QE(s,e,n,r){let o={},u={};function c(b,F){const P=F.program;r.uniformBlockBinding(b,P,o[b.id])}function d(b,F){let P=o[b.id];P===void 0&&(E(b),P=m(b),o[b.id]=P,b.addEventListener("dispose",v));const I=F.program;r.updateUBOMapping(b,I);const D=e.render.frame;u[b.id]!==D&&(p(b),u[b.id]=D)}function m(b){const F=s.createBuffer(),P=b.__size,I=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,I),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(b){const F=o[b.id],P=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let D=0,S=P.length;D<S;D++){const R=P[D];if(Array.isArray(R))for(let q=0,k=R.length;q<k;q++)x(R[q],D,q,I);else x(R,D,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(b,F,P,I){if(g(b,F,P,I)===!0){const D=b.__offset,S=b.value;if(Array.isArray(S)){let R=0;for(let q=0;q<S.length;q++){const k=S[q],W=C(k,!0);y(k,b.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else y(S,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,b.__data)}}function y(b,F,P){typeof b=="number"||typeof b=="boolean"?F[P]=b:b.isMatrix3?(F[P]=b.elements[0],F[P+1]=b.elements[1],F[P+2]=b.elements[2],F[P+3]=0,F[P+4]=b.elements[3],F[P+5]=b.elements[4],F[P+6]=b.elements[5],F[P+7]=0,F[P+8]=b.elements[6],F[P+9]=b.elements[7],F[P+10]=b.elements[8],F[P+11]=0):ArrayBuffer.isView(b)?F.set(b.subarray(0,F.length-P),P):b.toArray(F,P)}function g(b,F,P,I){const D=b.value,S=F+"_"+P;if(Array.isArray(D)){I[S]===void 0&&(I[S]=[]);const R=I[S];let q=!1;for(let k=0;k<D.length;k++)M(D[k],R,k)===!0&&(q=!0);return q}return M(D,I,S)}function M(b,F,P){if(F[P]===void 0)return typeof b=="number"||typeof b=="boolean"?F[P]=b:ArrayBuffer.isView(b)?F[P]=b.slice():F[P]=b.clone(),!0;{const I=F[P];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return F[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function E(b){const F=b.uniforms;let P=0;const I=16;for(let S=0,R=F.length;S<R;S++){const q=Array.isArray(F[S])?F[S]:[F[S]];for(let k=0,W=q.length;k<W;k++){const Z=q[k],oe=Array.isArray(Z.value)?Z.value:[Z.value],B=Array.isArray(F[S])||Array.isArray(Z.value);let re=P;for(let $=0,Q=oe.length;$<Q;$++){const Y=oe[$],K=C(Y,B),N=P%I,ee=N%K.boundary,Pe=N+ee;P+=ee,Pe!==0&&I-Pe<K.storage&&(P+=I-Pe),$===0&&(re=P),P+=K.storage}const ce=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new ce((P-re)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=re}}const D=P%I;return D>0&&(P+=I-D),b.__size=P,b.__cache={},this}function C(b,F){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=16,P.storage=48):b.isMatrix4?(P.boundary=16,P.storage=64):b.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(P.boundary=16,P.storage=b.byteLength):st("WebGLRenderer: Unsupported uniform value type.",b),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(b){const F=b.target;F.removeEventListener("dispose",v),s.deleteBuffer(o[F.id]),delete o[F.id],delete u[F.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);o={},u={}}return{bind:c,update:d,dispose:_}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function ew(){return ki===null&&(ki=new Xv(jE,16,16,os,qi),ki.name="DFG_LUT",ki.minFilter=Kn,ki.magFilter=Kn,ki.wrapS=cr,ki.wrapT=cr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class tw{constructor(e={}){const{canvas:n=_v(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const C=M,v=new Set([fd,cd,ud]),_=new Set([si,Xi,Ya,Qs,od,ld]),b=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let I=null,D=null;const S=[],R=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let W=!1,Z=null,oe=null,B=null,re=null;this._outputColorSpace=mi;let ce=0,$=0,Q=null,Y=-1,K=null;const N=new tn,ee=new tn;let Pe=null;const ie=new pt(0);let ge=0,Se=n.width,Ie=n.height,pe=1,Be=null,xt=null;const je=new tn(0,0,Se,Ie),lt=new tn(0,0,Se,Ie);let wt=!1;const ft=new Ka,Kt=new gd;let Ht=!1,Bt=!1;const Ut=new Wt,Ln=new H,kt=new tn,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function on(){return Q===null?pe:1}let V=r;function Sn(A,z){return n.getContext(A,z)}let Dt,Ct,Le,Xt,Qe,et,L,T,j,Me,me,Te,be,fe,de,ye,O,he,ue,Ae,we,Re,Ve;try{const A={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rd}`),n.addEventListener("webglcontextlost",Ze,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),V===null){const z="webgl2";if(V=Sn(z,A),V===null)throw Sn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(A){throw n.removeEventListener("webglcontextlost",Ze,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Lt("WebGLRenderer: "+A.message),A}function at(){Dt=new ry(V),Dt.init(),we=new XE(V,Dt),Ct=new YM(V,Dt,e,we),Le=new VE(V,Dt),Ct.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),oe=V.createFramebuffer(),B=V.createFramebuffer(),re=V.createFramebuffer(),Xt=new oy(V),Qe=new bE,et=new WE(V,Dt,Le,Qe,Ct,we,Xt),L=new iy(k),T=new ux(V),Re=new XM(V,T),j=new sy(V,T,Xt,Re),Me=new uy(V,j,T,Re,Xt),he=new ly(V,Ct,et),de=new $M(Qe),me=new CE(k,L,Dt,Ct,Re,de),Te=new JE(k,Qe),be=new LE,fe=new OE(Dt),O=new WM(k,L,Le,Me,E,m),ye=new GE(k,Me,Ct),Ve=new QE(V,Xt,Ct,Le),ue=new qM(V,Dt,Xt),Ae=new ay(V,Dt,Xt),Xt.programs=me.programs,k.capabilities=Ct,k.extensions=Dt,k.properties=Qe,k.renderLists=be,k.shadowMap=ye,k.state=Le,k.info=Xt}C!==si&&(q=new fy(C,n.width,n.height,d,o,u));const _e=new KE(k,V);this.xr=_e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(A){A!==void 0&&(pe=A,this.setSize(Se,Ie,!1))},this.getSize=function(A){return A.set(Se,Ie)},this.setSize=function(A,z,se=!0){if(_e.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Ie=z,n.width=Math.floor(A*pe),n.height=Math.floor(z*pe),se===!0&&(n.style.width=A+"px",n.style.height=z+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Se*pe,Ie*pe).floor()},this.setDrawingBufferSize=function(A,z,se){Se=A,Ie=z,pe=se,n.width=Math.floor(A*se),n.height=Math.floor(z*se),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(C===si){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,z,se,te){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,z,se,te),Le.viewport(N.copy(je).multiplyScalar(on()).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,z,se,te){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,z,se,te),Le.scissor(ee.copy(lt).multiplyScalar(on()).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Le.setScissorTest(wt=A)},this.setOpaqueSort=function(A){Be=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,se=!0){let te=0;if(A){let J=!1;if(Q!==null){const Ne=Q.texture.format;J=v.has(Ne)}if(J){const Ne=Q.texture.type,He=_.has(Ne),De=O.getClearColor(),Fe=O.getClearAlpha(),We=De.r,it=De.g,dt=De.b;He?(b[0]=We,b[1]=it,b[2]=dt,b[3]=Fe,V.clearBufferuiv(V.COLOR,0,b)):(F[0]=We,F[1]=it,F[2]=dt,F[3]=Fe,V.clearBufferiv(V.COLOR,0,F))}else te|=V.COLOR_BUFFER_BIT}z&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Ze,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),O.dispose(),be.dispose(),fe.dispose(),et.dispose(),Qe.dispose(),L.dispose(),Me.dispose(),j.dispose(),Re.dispose(),Ve.dispose(),me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ds),_e.removeEventListener("sessionend",Jn),ze.stop()};function Ze(A){A.preventDefault(),nm("WebGLRenderer: Context Lost."),W=!0}function rt(){nm("WebGLRenderer: Context Restored."),W=!1;const A=Xt.autoReset,z=ye.enabled,se=ye.autoUpdate,te=ye.needsUpdate,J=ye.type;at(),Xt.autoReset=A,ye.enabled=z,ye.autoUpdate=se,ye.needsUpdate=te,ye.type=J}function Ue(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const z=A.target;z.removeEventListener("dispose",mt),Ft(z)}function Ft(A){Rn(A),Qe.remove(A)}function Rn(A){const z=Qe.get(A).programs;z!==void 0&&(z.forEach(function(se){me.releaseProgram(se)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,se,te,J,Ne){z===null&&(z=rn);const He=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=ia(A,z,se,te,J);Le.setMaterial(te,He);let Fe=se.index,We=1;if(te.wireframe===!0){if(Fe=j.getWireframeAttribute(se),Fe===void 0)return;We=2}const it=se.drawRange,dt=se.attributes.position;let Xe=it.start*We,gt=(it.start+it.count)*We;Ne!==null&&(Xe=Math.max(Xe,Ne.start*We),gt=Math.min(gt,(Ne.start+Ne.count)*We)),Fe!==null?(Xe=Math.max(Xe,0),gt=Math.min(gt,Fe.count)):dt!=null&&(Xe=Math.max(Xe,0),gt=Math.min(gt,dt.count));const Yt=gt-Xe;if(Yt<0||Yt===1/0)return;Re.setup(J,te,De,se,Fe);let Nt,Pt=ue;if(Fe!==null&&(Nt=T.get(Fe),Pt=Ae,Pt.setIndex(Nt)),J.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*on()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(J.isLine){let sn=te.linewidth;sn===void 0&&(sn=1),Le.setLineWidth(sn*on()),J.isLineSegments?Pt.setMode(V.LINES):J.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else J.isPoints?Pt.setMode(V.POINTS):J.isSprite&&Pt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const sn=J._multiDrawStarts,qe=J._multiDrawCounts,hn=J._multiDrawCount,Ke=Fe?T.get(Fe).bytesPerElement:1,Di=Qe.get(te).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Di.setValue(V,"_gl_DrawID",pn),Pt.render(sn[pn]/Ke,qe[pn])}else if(J.isInstancedMesh)Pt.renderInstances(Xe,Yt,J.count);else if(se.isInstancedBufferGeometry){const sn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,qe=Math.min(se.instanceCount,sn);Pt.renderInstances(Xe,Yt,qe)}else Pt.render(Xe,Yt)};function Yi(A,z,se,te){Z!==null&&A.isNodeMaterial&&Z.setObject(te,A),Ht===!0&&de.setState(A,se,!1),A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Zt(A,z,te),A.side=as,A.needsUpdate=!0,Zt(A,z,te),A.side=Pi):Zt(A,z,te)}this.compile=function(A,z,se=null){se===null&&(se=A),Z!==null&&Z.renderStart(A,z,se),D=fe.get(se),D.init(z),R.push(D),se.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),A!==se&&A.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Bt=this.localClippingEnabled,Ht=de.init(this.clippingPlanes,Bt),Ht===!0&&de.setGlobalState(this.clippingPlanes,z),Z!==null&&ye.render(D.state.shadowsArray,se,z);const te=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const De=Ne[He];Yi(De,se,z,J),te.add(De)}else Yi(Ne,se,z,J),te.add(Ne)}),D=R.pop(),Z!==null&&Z.renderEnd(),te},this.compileAsync=function(A,z,se=null){const te=this.compile(A,z,se);return new Promise(J=>{function Ne(){if(te.forEach(function(He){const Fe=Qe.get(He).currentProgram;(Fe===void 0||Fe.isReady())&&te.delete(He)}),te.size===0){J(A);return}setTimeout(Ne,10)}Dt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let hr=null;function fs(A){hr&&hr(A)}function ds(){ze.stop()}function Jn(){ze.start()}const ze=new Ug;ze.setAnimationLoop(fs),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(A){hr=A,_e.setAnimationLoop(A),A===null?ze.stop():ze.start()},_e.addEventListener("sessionstart",ds),_e.addEventListener("sessionend",Jn),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Z!==null&&Z.renderStart(A,z);const se=_e.enabled===!0&&_e.isPresenting===!0,te=q!==null&&(Q===null||se)&&q.begin(k,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(z),z=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,z,Q),D=fe.get(A,R.length),D.init(z),D.state.textureUnits=et.getTextureUnits(),R.push(D),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Kt.setFromArrayCamera(z):ft.setFromProjectionMatrix(Ut,Li,z.reversedDepth),Bt=this.localClippingEnabled,Ht=de.init(this.clippingPlanes,Bt),I=be.get(A,S.length),I.init(),S.push(I),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){const He=k.xr.getDepthSensingMesh();He!==null&&ut(He,z,-1/0,k.sortObjects)}ut(A,z,0,k.sortObjects),I.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),k.sortObjects===!0&&I.sort(Be,xt),dn=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,dn&&O.addToRenderList(I,A),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&de.beginShadows();const J=D.state.shadowsArray;if(ye.render(J,A,z),Ht===!0&&de.endShadows(),(te&&q.hasRenderPass())===!1){const He=I.opaque,De=I.transmissive;if(D.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(De.length>0)for(let We=0,it=Fe.length;We<it;We++){const dt=Fe[We];$i(He,De,A,dt)}dn&&O.render(A);for(let We=0,it=Fe.length;We<it;We++){const dt=Fe[We];bt(I,A,dt,dt.viewport)}}else De.length>0&&$i(He,De,A,z),dn&&O.render(A),bt(I,A,z)}Q!==null&&$===0&&(et.updateMultisampleRenderTarget(Q),et.updateRenderTargetMipmap(Q)),te&&q.end(k),A.isScene===!0&&A.onAfterRender(k,A,z),Re.resetDefaultState(),Y=-1,K=null,R.pop(),R.length>0?(D=R[R.length-1],et.setTextureUnits(D.state.textureUnits),Ht===!0&&de.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,S.pop(),S.length>0?I=S[S.length-1]:I=null,Z!==null&&Z.renderEnd()};function ut(A,z,se,te){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const He=z.isArrayCamera?Kt:ft;if(!A.frustumCulled||A.intersectsFrustum(He)){te&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const De=Me.update(A),Fe=A.material;Fe.visible&&I.push(A,De,Fe,se,kt.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){const He=z.isArrayCamera?Kt:ft;if(!A.frustumCulled||A.intersectsFrustum(He)){const De=Me.update(A),Fe=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),kt.copy(De.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Fe)){const We=De.groups;for(let it=0,dt=We.length;it<dt;it++){const Xe=We[it],gt=Fe[Xe.materialIndex];gt&&gt.visible&&I.push(A,De,gt,se,kt.z,Xe,z)}}else Fe.visible&&I.push(A,De,Fe,se,kt.z,null,z)}}}const Ne=A.children;for(let He=0,De=Ne.length;He<De;He++)ut(Ne[He],z,se,te)}function bt(A,z,se,te){const{opaque:J,transmissive:Ne,transparent:He}=A;D.setupLightsView(se),Ht===!0&&de.setGlobalState(k.clippingPlanes,se),te&&Le.viewport(N.copy(te)),J.length>0&&vi(J,z,se),Ne.length>0&&vi(Ne,z,se),He.length>0&&vi(He,z,se),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function $i(A,z,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const Xe=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new Wi(1,1,{generateMipmaps:!0,type:Xe?qi:si,minFilter:kr,samples:Math.max(4,Ct.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[te.id],He=te.viewport||N;Ne.setSize(He.z*k.transmissionResolutionScale,He.w*k.transmissionResolutionScale);const De=k.getRenderTarget(),Fe=k.getActiveCubeFace(),We=k.getActiveMipmapLevel();k.setRenderTarget(Ne),k.getClearColor(ie),ge=k.getClearAlpha(),ge<1&&k.setClearColor(16777215,.5),k.clear(),dn&&O.render(se);const it=k.toneMapping;k.toneMapping=fr;const dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),Ht===!0&&de.setGlobalState(k.clippingPlanes,te),vi(A,se,te),et.updateMultisampleRenderTarget(Ne),et.updateRenderTargetMipmap(Ne),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let gt=0,Yt=z.length;gt<Yt;gt++){const Nt=z[gt],{object:Pt,geometry:sn,material:qe,group:hn}=Nt;if(qe.side===Pi&&Pt.layers.test(te.layers)){const Ke=qe.side;qe.side=Zn,qe.needsUpdate=!0,Ki(Pt,se,te,sn,qe,hn),qe.side=Ke,qe.needsUpdate=!0,Xe=!0}}Xe===!0&&(et.updateMultisampleRenderTarget(Ne),et.updateRenderTargetMipmap(Ne))}k.setRenderTarget(De,Fe,We),k.setClearColor(ie,ge),dt!==void 0&&(te.viewport=dt),k.toneMapping=it}function vi(A,z,se){const te=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Ne=A.length;J<Ne;J++){const He=A[J],{object:De,geometry:Fe,group:We}=He;let it=He.material;it.allowOverride===!0&&te!==null&&(it=te),De.layers.test(se.layers)&&Ki(De,z,se,Fe,it,We)}}function Ki(A,z,se,te,J,Ne){Z!==null&&J.isNodeMaterial&&Z.setObject(A,J),A.onBeforeRender(k,z,se,te,J,Ne),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(k,z,se,te,A,Ne),J.transparent===!0&&J.side===Pi&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,k.renderBufferDirect(se,z,te,J,A,Ne),J.side=as,J.needsUpdate=!0,k.renderBufferDirect(se,z,te,J,A,Ne),J.side=Pi):k.renderBufferDirect(se,z,te,J,A,Ne),A.onAfterRender(k,z,se,te,J,Ne)}function ai(A){let z=0;for(const se of A)se.texture!==null&&z++;return z}function Zt(A,z,se){z.isScene!==!0&&(z=rn);const te=Qe.get(A),J=D.state.lights,Ne=D.state.shadowsArray,He=J.state.version,De=me.getParameters(A,J.state,Ne,z,se,D.state.lightProbeGridArray),Fe=me.getProgramCacheKey(De);let We=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,te.fog=z.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=L.get(A.envMap||te.environment,it),te.envMapRotation=te.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",mt),We=new Map,te.programs=We,te.programVariants=new Map);let dt=We.get(Fe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===He)return to(A,De),dt}else De.uniforms=me.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,se,De),A.onBeforeCompile(De,k),dt=me.acquireProgram(De,Fe),We.set(Fe,dt),te.uniforms=De.uniforms;const Xe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=de.uniform),to(A,De),te.needsLights=hs(A),te.lightsStateVersion=He,te.needsLights&&(Xe.ambientLightColor.value=J.state.ambient,Xe.lightProbe.value=J.state.probe,Xe.sunLights.value=J.state.sun,Xe.sunLightShadows.value=J.state.sunShadow,Xe.directionalLights.value=J.state.directional,Xe.directionalLightShadows.value=J.state.directionalShadow,Xe.spotLights.value=J.state.spot,Xe.spotLightShadows.value=J.state.spotShadow,Xe.rectAreaLights.value=J.state.rectArea,Xe.ltc_1.value=J.state.rectAreaLTC1,Xe.ltc_2.value=J.state.rectAreaLTC2,Xe.pointLights.value=J.state.point,Xe.pointLightShadows.value=J.state.pointShadow,Xe.hemisphereLights.value=J.state.hemi,Xe.sunShadowMatrix.value=J.state.sunShadowMatrix,Xe.sunShadowCascade.value=J.state.sunShadowCascade,Xe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Xe.spotLightMatrix.value=J.state.spotLightMatrix,Xe.spotLightMap.value=J.state.spotLightMap,Xe.pointShadowMatrix.value=J.state.pointShadowMatrix),te.numLightProbeGrids=ai(D.state.lightProbeGridArray),te.currentProgram=dt,te.uniformsList=null,dt}function oi(A,z,se,te,J){const Ne=Qe.get(A),He=Ne.currentProgram.id+","+te+","+J;let De=Ne.programVariants.get(He);return De===void 0?(De=Zt(A,z,se),Ne.programVariants.set(He,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=te,Ne.toneMapping=J),De}function qt(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Gl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function to(A,z){const se=Qe.get(A);se.outputColorSpace=z.outputColorSpace,se.batching=z.batching,se.batchingColor=z.batchingColor,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.instancingMorph=z.instancingMorph,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function ia(A,z,se,te,J){z.isScene!==!0&&(z=rn),et.resetTextureUnits();const Ne=z.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?z.environment:null,De=Q===null?k.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yt.workingColorSpace,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=L.get(te.envMap||He,Fe),it=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,dt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!se.morphAttributes.position,gt=!!se.morphAttributes.normal,Yt=!!se.morphAttributes.color;let Nt=fr;te.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=k.toneMapping);const Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,sn=Pt!==void 0?Pt.length:0,qe=Qe.get(te),hn=D.state.lights;if(Ht===!0&&(Bt===!0||A!==K)){const At=A===K&&te.id===Y;de.setState(te,A,At)}let Ke=!1,Di=!1;te.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==hn.state.version||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==We||te.fog===!0&&qe.fog!==Ne||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==de.numPlanes||qe.numIntersection!==de.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==dt||qe.morphTargets!==Xe||qe.morphNormals!==gt||qe.morphColors!==Yt||qe.morphTargetsCount!==sn||qe.numLightProbeGrids!==ai(D.state.lightProbeGridArray)?Ke=!0:(qe.outputColorSpace!==De||qe.toneMapping!==Nt)&&(Di=!0):(Ke=!0,qe.__version=te.version);let pn=qe.currentProgram;(Ke===!0||Di===!0)&&(pn=Di===!0?oi(te,z,J,De,Nt):Zt(te,z,J),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,pn,qe));let pr=!1,xi=!1,Ni=!1;const St=pn.getUniforms(),ln=qe.uniforms;if(Le.useProgram(pn.program)&&(pr=!0,xi=!0,Ni=!0),te.id!==Y&&(Y=te.id,xi=!0),pr||K!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(V,"projectionMatrix",A.projectionMatrix),St.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ot=St.map.cameraPosition;Ot!==void 0&&Ot.setValue(V,Ln.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&St.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,xi=!0,Ni=!0)}if(qe.needsLights&&(hn.state.sunShadowMap.length>0&&St.setValue(V,"sunShadowMap",hn.state.sunShadowMap,et),hn.state.directionalShadowMap.length>0&&St.setValue(V,"directionalShadowMap",hn.state.directionalShadowMap,et),hn.state.spotShadowMap.length>0&&St.setValue(V,"spotShadowMap",hn.state.spotShadowMap,et),hn.state.pointShadowMap.length>0&&St.setValue(V,"pointShadowMap",hn.state.pointShadowMap,et)),J.isSkinnedMesh){St.setOptional(V,J,"bindMatrix"),St.setOptional(V,J,"bindMatrixInverse");const At=J.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),St.setValue(V,"boneTexture",At.boneTexture,et))}J.isBatchedMesh&&(St.setOptional(V,J,"batchingTexture"),St.setValue(V,"batchingTexture",J._matricesTexture,et),St.setOptional(V,J,"batchingIdTexture"),St.setValue(V,"batchingIdTexture",J._indirectTexture,et),St.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&St.setValue(V,"batchingColorTexture",J._colorsTexture,et));const Dn=se.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&he.update(J,se,pn),(xi||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,St.setValue(V,"receiveShadow",J.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=ew()),xi){if(St.setValue(V,"toneMappingExposure",k.toneMappingExposure),qe.needsLights&&no(ln,Ni),Ne&&te.fog===!0&&Te.refreshFogUniforms(ln,Ne),Te.refreshMaterialUniforms(ln,te,pe,Ie,D.state.transmissionRenderTarget[A.id]),qe.needsLights&&qe.numLightProbeGrids>0){const At=P;let Ot=0;for(const Mn of D.state.lightProbeGridArray)Mn.texture!==null&&(At.textures[Ot]=Mn.texture,At.min[Ot]=Mn.boundingBox.min,At.max[Ot]=Mn.boundingBox.max,At.resolution[Ot]=Mn.resolution,Ot++);for(const Mn in At)At[Mn].length=Ot;ln.probesSH.value=At.textures,ln.probesMin.value=At.min,ln.probesMax.value=At.max,ln.probesResolution.value=At.resolution}Gl.upload(V,qt(qe),ln,et)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Gl.upload(V,qt(qe),ln,et),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(V,"center",J.center),St.setValue(V,"modelViewMatrix",J.modelViewMatrix),St.setValue(V,"normalMatrix",J.normalMatrix),St.setValue(V,"modelMatrix",J.matrixWorld),te.uniformsGroups!==void 0){const At=te.uniformsGroups;for(let Ot=0,Mn=At.length;Ot<Mn;Ot++){const mr=At[Ot];Ve.update(mr,pn),Ve.bind(mr,pn)}}return pn}function no(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function hs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,z,se){const te=Qe.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Qe.get(A.texture).__webglTexture=z,Qe.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const se=Qe.get(A);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,se=0){Q=A,ce=z,$=se;let te=null,J=!1,Ne=!1;if(A){const De=Qe.get(A);if(De.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),N.copy(A.viewport),ee.copy(A.scissor),Pe=A.scissorTest,Le.viewport(N),Le.scissor(ee),Le.setScissorTest(Pe),Y=-1;return}else if(De.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(De.__hasExternalTextures)et.rebindTextures(A,Qe.get(A.texture).__webglTexture,Qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(De.__boundDepthTexture!==it){if(it!==null&&Qe.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ne=!0);const We=Qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[z])?te=We[z][se]:te=We[z],J=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?te=Qe.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[se]:te=We,N.copy(A.viewport),ee.copy(A.scissor),Pe=A.scissorTest}else N.copy(je).multiplyScalar(pe).floor(),ee.copy(lt).multiplyScalar(pe).floor(),Pe=wt;if(se!==0&&(te=oe),Le.bindFramebuffer(V.FRAMEBUFFER,te)&&Le.drawBuffers(A,te),Le.viewport(N),Le.scissor(ee),Le.setScissorTest(Pe),J){const De=Qe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,se)}else if(Ne){const De=z;for(let Fe=0;Fe<A.textures.length;Fe++){const We=Qe.get(A.textures[Fe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Fe,We.__webglTexture,se,De)}}else if(A!==null&&se!==0){const De=Qe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,se)}Y=-1};function io(A){const z=Qe.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Ct.textureFormatReadable(A.format),z.__typeReadable=Ct.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,se,te,J,Ne,He,De=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){Le.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const We=A.textures[De],it=We.format,dt=We.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const Xe=io(We);if(Xe.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-te&&se>=0&&se<=A.height-J&&V.readPixels(z,se,te,J,we.convert(it),we.convert(dt),Ne)}finally{const We=Q!==null?Qe.get(Q).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,z,se,te,J,Ne,He,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(z>=0&&z<=A.width-te&&se>=0&&se<=A.height-J){Le.bindFramebuffer(V.FRAMEBUFFER,Fe);const We=A.textures[De],it=We.format,dt=We.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const Xe=io(We);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),V.readPixels(z,se,te,J,we.convert(it),we.convert(dt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Yt=Q!==null?Qe.get(Q).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Yt);const Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vv(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(gt),V.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,se=0){const te=Math.pow(2,-se),J=Math.floor(A.image.width*te),Ne=Math.floor(A.image.height*te),He=z!==null?z.x:0,De=z!==null?z.y:0;et.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,He,De,J,Ne),Le.unbindTexture()},this.copyTextureToTexture=function(A,z,se=null,te=null,J=0,Ne=0){let He,De,Fe,We,it,dt,Xe,gt,Yt;const Nt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(se!==null)He=se.max.x-se.min.x,De=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,it=se.min.y,dt=se.isBox3?se.min.z:0;else{const St=Math.pow(2,-J);He=Math.floor(Nt.width*St),De=Math.floor(Nt.height*St),A.isDataArrayTexture?Fe=Nt.depth:A.isData3DTexture?Fe=Math.floor(Nt.depth*St):Fe=1,We=0,it=0,dt=0}te!==null?(Xe=te.x,gt=te.y,Yt=te.z):(Xe=0,gt=0,Yt=0);const Pt=we.convert(z.format),sn=we.convert(z.type);let qe;z.isData3DTexture?(et.setTexture3D(z,0),qe=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(et.setTexture2DArray(z,0),qe=V.TEXTURE_2D_ARRAY):(et.setTexture2D(z,0),qe=V.TEXTURE_2D),Le.activeTexture(V.TEXTURE0),Le.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),Le.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Le.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const hn=Le.getParameter(V.UNPACK_ROW_LENGTH),Ke=Le.getParameter(V.UNPACK_IMAGE_HEIGHT),Di=Le.getParameter(V.UNPACK_SKIP_PIXELS),pn=Le.getParameter(V.UNPACK_SKIP_ROWS),pr=Le.getParameter(V.UNPACK_SKIP_IMAGES);Le.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,We),Le.pixelStorei(V.UNPACK_SKIP_ROWS,it),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const xi=A.isDataArrayTexture||A.isData3DTexture,Ni=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const St=Qe.get(A),ln=Qe.get(z),Dn=Qe.get(St.__renderTarget),At=Qe.get(ln.__renderTarget);Le.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ot=0;Ot<Fe;Ot++)xi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.get(A).__webglTexture,J,dt+Ot),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.get(z).__webglTexture,Ne,Yt+Ot)),V.blitFramebuffer(We,it,We+He,it+De,Xe,gt,Xe+He,gt+De,V.DEPTH_BUFFER_BIT,V.NEAREST);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Qe.has(A)){const St=Qe.get(A),ln=Qe.get(z);Le.bindFramebuffer(V.READ_FRAMEBUFFER,B),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,re);for(let Dn=0;Dn<Fe;Dn++)xi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,St.__webglTexture,J,dt+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,St.__webglTexture,J),Ni?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ln.__webglTexture,Ne,Yt+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ln.__webglTexture,Ne),J!==0?V.blitFramebuffer(We,it,We+He,it+De,Xe,gt,Xe+He,gt+De,V.COLOR_BUFFER_BIT,V.NEAREST):Ni?V.copyTexSubImage3D(qe,Ne,Xe,gt,Yt+Dn,We,it,He,De):V.copyTexSubImage2D(qe,Ne,Xe,gt,We,it,He,De);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ni?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(qe,Ne,Xe,gt,Yt,He,De,Fe,Pt,sn,Nt.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,Ne,Xe,gt,Yt,He,De,Fe,Pt,Nt.data):V.texSubImage3D(qe,Ne,Xe,gt,Yt,He,De,Fe,Pt,sn,Nt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,Xe,gt,He,De,Pt,sn,Nt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,Xe,gt,Nt.width,Nt.height,Pt,Nt.data):V.texSubImage2D(V.TEXTURE_2D,Ne,Xe,gt,He,De,Pt,sn,Nt);Le.pixelStorei(V.UNPACK_ROW_LENGTH,hn),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,Di),Le.pixelStorei(V.UNPACK_SKIP_ROWS,pn),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,pr),Ne===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(qe),Le.unbindTexture()},this.initRenderTarget=function(A){Qe.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){ce=0,$=0,Q=null,Le.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}function nw(){const s=Vi.useRef(null);return Vi.useEffect(()=>{const e=s.current;if(!e)return;const n=new Ov;n.background=new pt("#070b14"),n.fog=new pd("#070b14",.018);const r=new gi(45,e.clientWidth/e.clientHeight,.1,200);r.position.set(20,15,26),r.lookAt(0,9,0);const o=new tw({antialias:!0,alpha:!1});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(e.clientWidth,e.clientHeight),o.toneMapping=sd,o.toneMappingExposure=1.1,e.appendChild(o.domElement);const u=new rx("#1e293b",1.8);n.add(u);const c=new ix("#60a5fa",2.2);c.position.set(30,40,20),n.add(c);const d=new bm("#f59e0b",3,35);d.position.set(-6,16,4),n.add(d);const m=new bm("#06b6d4",2.5,45);m.position.set(12,10,-6),n.add(m);const p=new za({color:"#334155",roughness:.35,metalness:.85}),x=new za({color:"#f59e0b",roughness:.4,metalness:.6,emissive:"#d97706",emissiveIntensity:.15}),y=new ri({color:"#38bdf8",transparent:!0,opacity:.6}),g=new ri({color:"#22d3ee",transparent:!0,opacity:.8}),M=new za({color:"#1e293b",roughness:.9,metalness:.1}),E=new Hl({color:"#ef4444"}),C=new ox(70,70,"#0284c7","#1e293b");C.position.y=0,C.material.opacity=.25,C.material.transparent=!0,n.add(C);const v=new _d(10,10.2,64);v.rotateX(-Math.PI/2);const _=new Hl({color:"#0284c7",side:Pi,transparent:!0,opacity:.3}),b=new jt(v,_);b.position.y=.05,n.add(b);const F=b.clone();F.scale.set(1.8,1.8,1.8),n.add(F);const P=new ur;P.position.set(-11,0,-6),n.add(P);const I=6,D=4,S=4,R=3.6,q=3,k=new _n(D*R+2,.8,S*R+2),W=new jt(k,M);W.position.set((D-1)*R*.5,.4,(S-1)*R*.5),P.add(W);const Z=new _n(.3,I*q,.3);for(let ze=0;ze<D;ze++)for(let ut=0;ut<S;ut++){const bt=new jt(Z,p);bt.position.set(ze*R,I*q/2,ut*R),P.add(bt)}for(let ze=1;ze<=I;ze++){const ut=ze*q,bt=new _n(D*R,.25,.25),$i=new _n(.25,.25,S*R);for(let Zt=0;Zt<S;Zt++){const oi=new jt(bt,p);oi.position.set((D-1)*R/2,ut,Zt*R),P.add(oi)}for(let Zt=0;Zt<D;Zt++){const oi=new jt($i,p);oi.position.set(Zt*R,ut,(S-1)*R/2),P.add(oi)}if(ze<=4){const Zt=new _n((D-1)*R+.3,.15,(S-1)*R+.3),oi=new jt(Zt,M);oi.position.set((D-1)*R/2,ut-.05,(S-1)*R/2),P.add(oi)}const vi=new _n((D-1)*R,.1,(S-1)*R),Ki=new lf(vi),ai=new bi(Ki,y);ai.position.set((D-1)*R/2,ut,(S-1)*R/2),P.add(ai)}const oe=[],B=-1.2;for(let ze=0;ze<5;ze++){const ut=ze*q,bt=(ze+1)*q;oe.push(new H(B,ut,0),new H(B,bt,0),new H(B,ut,(S-1)*R),new H(B,bt,(S-1)*R),new H(B,ut,0),new H(B,bt,(S-1)*R),new H(B,ut,(S-1)*R),new H(B,bt,0))}const re=new en().setFromPoints(oe),ce=new bi(re,g);P.add(ce);const $=new ur;$.position.set(2,0,1),n.add($);const Q=new _n(4,1.2,4),Y=new jt(Q,M);Y.position.y=.6,$.add(Y);const K=24,N=1.4,ee=16,Pe=new _n(N,K,N),ie=new lf(Pe),ge=new bi(ie,new ri({color:"#f59e0b"}));ge.position.y=K/2,$.add(ge);const Se=[],Ie=K/ee,pe=N/2;for(let ze=0;ze<ee;ze++){const ut=ze*Ie,bt=(ze+1)*Ie;Se.push(new H(-pe,ut,pe),new H(pe,bt,pe),new H(pe,ut,pe),new H(-pe,bt,pe),new H(-pe,ut,-pe),new H(pe,bt,-pe),new H(pe,ut,-pe),new H(-pe,bt,-pe))}const Be=new en().setFromPoints(Se),xt=new bi(Be,new ri({color:"#d97706",opacity:.7,transparent:!0}));$.add(xt);const je=new jt(new _n(.5,K,.5),x);je.position.y=K/2,$.add(je);const lt=new ur;lt.position.set(0,K,0),$.add(lt);const wt=new jt(new Zl(1.2,1.2,.8,16),p);lt.add(wt);const ft=new _n(1.5,1.8,2),Kt=new jt(ft,new za({color:"#0f172a",roughness:.2,metalness:.9}));Kt.position.set(1.5,.8,.8),lt.add(Kt);const Ht=new jt(new ja(1.4,1),new Hl({color:"#38bdf8",side:Pi,transparent:!0,opacity:.85}));Ht.position.set(1.5,1,1.81),lt.add(Ht);const Bt=5,Ut=[new H(-pe,0,-pe),new H(0,Bt,0),new H(pe,0,-pe),new H(0,Bt,0),new H(-pe,0,pe),new H(0,Bt,0),new H(pe,0,pe),new H(0,Bt,0)],Ln=new en().setFromPoints(Ut),kt=new bi(Ln,new ri({color:"#f59e0b"}));lt.add(kt);const rn=new jt(new vd(.25,12,12),E);rn.position.set(0,Bt+.2,0),lt.add(rn);const dn=22,on=1.2,V=1.2,Sn=[],Dt=16,Ct=dn/Dt;for(let ze=0;ze<Dt;ze++){const ut=ze*Ct,bt=(ze+1)*Ct;Sn.push(new H(ut,0,-V/2),new H(bt,0,-V/2),new H(ut,0,V/2),new H(bt,0,V/2),new H(ut,on,0),new H(bt,on,0),new H(ut,0,-V/2),new H(bt,on,0),new H(ut,0,V/2),new H(bt,on,0),new H(ut,0,-V/2),new H(bt,0,V/2))}const Le=new en().setFromPoints(Sn),Xt=new bi(Le,new ri({color:"#f59e0b"}));lt.add(Xt);const Qe=[new H(0,0,0),new H(-8,0,0),new H(0,0,-.6),new H(-8,0,-.6),new H(0,0,.6),new H(-8,0,.6)],et=new en().setFromPoints(Qe),L=new bi(et,new ri({color:"#f59e0b"}));lt.add(L);for(let ze=0;ze<3;ze++){const ut=new jt(new _n(1.6,1.4,1.8),M);ut.position.set(-8+1.2+ze*1.8,-.2,0),lt.add(ut)}const T=[new H(0,Bt,0),new H(dn*.65,on,0),new H(0,Bt,0),new H(-8+.5,0,0)],j=new en().setFromPoints(T),Me=new bi(j,new ri({color:"#94a3b8"}));lt.add(Me);const me=new ur;me.position.set(13,0,0),lt.add(me);const Te=new jt(new _n(1,.4,.8),x);Te.position.y=-.2,me.add(Te);const be=[new H(0,-.3,0),new H(0,-11,0)],fe=new en().setFromPoints(be),de=new Ag(fe,new ri({color:"#cbd5e1"}));me.add(de);const ye=new ur;ye.position.set(0,-11,0),me.add(ye);const O=new jt(new Zl(.3,.3,.6,12),x);ye.add(O);const he=7,ue=new jt(new _n(he,.5,.35),new za({color:"#0284c7",roughness:.3,metalness:.9,emissive:"#0369a1",emissiveIntensity:.4}));ue.position.y=-.6,ye.add(ue);const Ae=new bi(new lf(new _n(he,.5,.35)),new ri({color:"#38bdf8"}));Ae.position.y=-.6,ye.add(Ae);const we=[new H(0,0,0),new H(-he*.4,-.4,0),new H(0,0,0),new H(he*.4,-.4,0)],Re=new bi(new en().setFromPoints(we),new ri({color:"#e2e8f0"}));ye.add(Re);const Ve=180,at=new Float32Array(Ve*3);for(let ze=0;ze<Ve;ze++)at[ze*3]=(Math.random()-.5)*60,at[ze*3+1]=Math.random()*30+.5,at[ze*3+2]=(Math.random()-.5)*60;const _e=new en;_e.setAttribute("position",new Hr(at,3));const Ze=new Rg({color:"#38bdf8",size:.18,transparent:!0,opacity:.65,blending:df}),rt=new Yv(_e,Ze);n.add(rt);let Ue=0,mt=0,Ft=0,Rn=0;const Yi=ze=>{const{innerWidth:ut,innerHeight:bt}=window;Ue=(ze.clientX/ut-.5)*2,mt=(ze.clientY/bt-.5)*2};window.addEventListener("mousemove",Yi,{passive:!0});const hr=()=>{if(!e)return;const ze=e.clientWidth,ut=e.clientHeight;r.aspect=ze/ut,r.updateProjectionMatrix(),o.setSize(ze,ut)};window.addEventListener("resize",hr);let fs;const ds=new ax,Jn=()=>{fs=requestAnimationFrame(Jn);const ze=ds.getElapsedTime();Ft+=(Ue-Ft)*.04,Rn+=(mt-Rn)*.04;const ut=ze*.04,bt=34;r.position.x=Math.sin(ut)*bt*.4+18+Ft*4,r.position.y=14-Rn*3,r.position.z=Math.cos(ut)*bt*.4+22,r.lookAt(0,9,0);const $i=Math.sin(ze*.35)*.55-.25;lt.rotation.y=$i;const vi=11+Math.sin(ze*.5)*4.5;me.position.x=vi,ye.rotation.z=Math.sin(ze*1.2)*.06,ye.rotation.y=Math.sin(ze*.8)*.15;const Ki=Math.sin(ze*5)>.1?1:.15;E.color.setRGB(Ki,.1,.1),b.scale.setScalar(1+ze*.25%2.5),_.opacity=Math.max(0,.35-ze*.25%2.5*.14);const ai=_e.attributes.position.array;for(let Zt=1;Zt<Ve*3;Zt+=3)ai[Zt]+=.025,ai[Zt]>32&&(ai[Zt]=.5);_e.attributes.position.needsUpdate=!0,o.render(n,r)};return Jn(),()=>{cancelAnimationFrame(fs),window.removeEventListener("mousemove",Yi),window.removeEventListener("resize",hr),e&&o.domElement&&e.removeChild(o.domElement),n.traverse(ze=>{(ze.isMesh||ze.isLine||ze.isPoints)&&(ze.geometry&&ze.geometry.dispose(),ze.material&&(Array.isArray(ze.material)?ze.material.forEach(ut=>ut.dispose()):ze.material.dispose()))}),o.dispose()}},[]),vt.jsx("div",{ref:s,className:"fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})}const Qm="wsm_launch_target_timestamp";function iw(){const s=typeof window<"u"?localStorage.getItem(Qm):null;if(s){const n=parseInt(s,10);if(!isNaN(n)&&n>Date.now())return n}const e=Date.now()+1440*60*60*1e3;return typeof window<"u"&&localStorage.setItem(Qm,e.toString()),e}const rw=()=>{const[s,e]=Vi.useState({days:60,hours:0,minutes:0,seconds:0});Vi.useEffect(()=>{const r=iw(),o=()=>{const c=r-Date.now();return c>0?{days:Math.floor(c/(1e3*60*60*24)),hours:Math.floor(c/(1e3*60*60)%24),minutes:Math.floor(c/1e3/60%60),seconds:Math.floor(c/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0}};e(o());const u=setInterval(()=>{e(o())},1e3);return()=>clearInterval(u)},[]);const n=[{label:"HARI",value:String(s.days).padStart(2,"0"),color:"text-white"},{label:"JAM",value:String(s.hours).padStart(2,"0"),color:"text-white"},{label:"MENIT",value:String(s.minutes).padStart(2,"0"),color:"text-cyan-400"},{label:"DETIK",value:String(s.seconds).padStart(2,"0"),isAccent:!0,color:"text-emerald-400"}];return vt.jsx("div",{className:"w-full",children:vt.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5",children:n.map((r,o)=>vt.jsxs("div",{className:`relative group flex flex-col items-center justify-center py-6 sm:py-9 px-4 rounded-[24px] bg-slate-950/30 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-slate-900/40 hover:border-cyan-400/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1 ${r.isAccent?"border-emerald-400/30 shadow-[0_12px_36px_rgba(16,185,129,0.18)] hover:border-emerald-400/60":""}`,children:[vt.jsx("div",{className:"absolute top-3.5 right-4 flex items-center",children:vt.jsx("span",{className:`w-2 h-2 rounded-full ${r.isAccent?"bg-emerald-400 animate-ping opacity-90":"bg-cyan-400/70"}`})}),vt.jsx("div",{className:"relative",children:vt.jsx("span",{className:`block text-[48px] sm:text-[64px] md:text-[76px] font-black font-mono leading-none tracking-tight ${r.color} drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] select-none`,children:r.value})}),vt.jsx("span",{className:"mt-3 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 text-slate-200 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase shadow-sm",children:r.label})]},o))})})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Vi.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:c,...d},m)=>Vi.createElement("svg",{ref:m,...aw,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:qg("lucide",o),...d},[...c.map(([p,x])=>Vi.createElement(p,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=(s,e)=>{const n=Vi.forwardRef(({className:r,...o},u)=>Vi.createElement(ow,{ref:u,iconNode:e,className:qg(`lucide-${sw(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],uw=Yg("Mail",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],fw=Yg("PhoneCall",cw);function dw(){return vt.jsxs("div",{className:"relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200",children:[vt.jsx(nw,{}),vt.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#070b14]/60 via-transparent to-[#070b14]/40"}),vt.jsxs("header",{className:"relative z-10 w-full px-5 py-6 flex items-center justify-between max-w-6xl mx-auto",children:[vt.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg",children:[vt.jsx("div",{className:"w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5",children:vt.jsx("img",{src:"/images/logo-wsm.jpg",alt:"Logo CV. Wahana Sinergi Mitra",className:"w-full h-full object-contain"})}),vt.jsx("span",{className:"text-[13px] font-bold text-slate-100 tracking-wider drop-shadow-sm",children:"CV. WAHANA SINERGI MITRA"})]}),vt.jsxs("div",{className:"flex items-center gap-2",children:[vt.jsx("a",{href:"mailto:info@wahanasinergimitra.com",title:"Hubungi Email",className:"w-9 h-9 rounded-full bg-slate-900/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-all shadow-md backdrop-blur-sm",children:vt.jsx(uw,{className:"w-4 h-4 stroke-[2]"})}),vt.jsx("a",{href:"https://wa.me/6281234567890",target:"_blank",rel:"noreferrer",title:"WhatsApp Kami",className:"w-9 h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 flex items-center justify-center transition-all shadow-md backdrop-blur-sm",children:vt.jsx(fw,{className:"w-4 h-4 stroke-[2]"})})]})]}),vt.jsx("main",{className:"relative z-10 flex-1 w-full max-w-4xl px-5 py-6 flex items-center justify-center",children:vt.jsxs("div",{className:"w-full relative overflow-hidden rounded-[24px] bg-slate-950/25 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 p-6 sm:p-12 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 text-center flex flex-col items-center",children:[vt.jsx("div",{className:"absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),vt.jsx("div",{className:"absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"}),vt.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 mb-6 shadow-sm",children:[vt.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),vt.jsx("span",{className:"text-[11px] font-bold tracking-widest uppercase",children:"Project Development Phase"})]}),vt.jsxs("h1",{className:"text-[32px] sm:text-[46px] md:text-[54px] font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 mb-10 sm:mb-12 max-w-2xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] select-none",children:["Website Sedang Dalam ",vt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400",children:"Perencanaan"})]}),vt.jsx("div",{className:"w-full max-w-3xl",children:vt.jsx(rw,{})})]})}),vt.jsx("footer",{className:"relative z-10 w-full px-5 py-5 text-center text-slate-500 text-[12px]",children:vt.jsxs("span",{children:["© ",new Date().getFullYear()," CV. Wahana Sinergi Mitra. All Rights Reserved."]})})]})}F_.createRoot(document.getElementById("root")).render(vt.jsx(b_.StrictMode,{children:vt.jsx(dw,{})}));
