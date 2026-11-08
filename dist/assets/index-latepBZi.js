(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function tg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dc={exports:{}},za={},Nc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function R_(){if(Vp)return _t;Vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=M&&D[M]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function v(D,ne,Le){this.props=D,this.context=ne,this.refs=R,this.updater=Le||S}v.prototype.isReactComponent={},v.prototype.setState=function(D,ne){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ne,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(D,ne,Le){this.props=D,this.context=ne,this.refs=R,this.updater=Le||S}var B=b.prototype=new _;B.constructor=b,w(B,v.prototype),B.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},y={key:!0,ref:!0,__self:!0,__source:!0};function C(D,ne,Le){var ae,me={},Me=null,Fe=null;if(ne!=null)for(ae in ne.ref!==void 0&&(Fe=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)F.call(ne,ae)&&!y.hasOwnProperty(ae)&&(me[ae]=ne[ae]);var ge=arguments.length-2;if(ge===1)me.children=Le;else if(1<ge){for(var Be=Array(ge),xt=0;xt<ge;xt++)Be[xt]=arguments[xt+2];me.children=Be}if(D&&D.defaultProps)for(ae in ge=D.defaultProps,ge)me[ae]===void 0&&(me[ae]=ge[ae]);return{$$typeof:s,type:D,key:Me,ref:Fe,props:me,_owner:N.current}}function K(D,ne){return{$$typeof:s,type:D.type,key:ne,ref:D.ref,props:D.props,_owner:D._owner}}function z(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function V(D){var ne={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Le){return ne[Le]})}var Y=/\/+/g;function te(D,ne){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):ne.toString(36)}function I(D,ne,Le,ae,me){var Me=typeof D;(Me==="undefined"||Me==="boolean")&&(D=null);var Fe=!1;if(D===null)Fe=!0;else switch(Me){case"string":case"number":Fe=!0;break;case"object":switch(D.$$typeof){case s:case e:Fe=!0}}if(Fe)return Fe=D,me=me(Fe),D=ae===""?"."+te(Fe,0):ae,P(me)?(Le="",D!=null&&(Le=D.replace(Y,"$&/")+"/"),I(me,ne,Le,"",function(xt){return xt})):me!=null&&(z(me)&&(me=K(me,Le+(!me.key||Fe&&Fe.key===me.key?"":(""+me.key).replace(Y,"$&/")+"/")+D)),ne.push(me)),1;if(Fe=0,ae=ae===""?".":ae+":",P(D))for(var ge=0;ge<D.length;ge++){Me=D[ge];var Be=ae+te(Me,ge);Fe+=I(Me,ne,Le,Be,me)}else if(Be=g(D),typeof Be=="function")for(D=Be.call(D),ge=0;!(Me=D.next()).done;)Me=Me.value,Be=ae+te(Me,ge++),Fe+=I(Me,ne,Le,Be,me);else if(Me==="object")throw ne=String(D),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Fe}function se(D,ne,Le){if(D==null)return D;var ae=[],me=0;return I(D,ae,"","",function(Me){return ne.call(Le,Me,me++)}),ae}function ce(D){if(D._status===-1){var ne=D._result;ne=ne(),ne.then(function(Le){(D._status===0||D._status===-1)&&(D._status=1,D._result=Le)},function(Le){(D._status===0||D._status===-1)&&(D._status=2,D._result=Le)}),D._status===-1&&(D._status=0,D._result=ne)}if(D._status===1)return D._result.default;throw D._result}var Z={current:null},ee={transition:null},$={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:ee,ReactCurrentOwner:N};function J(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:se,forEach:function(D,ne,Le){se(D,function(){ne.apply(this,arguments)},Le)},count:function(D){var ne=0;return se(D,function(){ne++}),ne},toArray:function(D){return se(D,function(ne){return ne})||[]},only:function(D){if(!z(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},_t.Component=v,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,_t.act=J,_t.cloneElement=function(D,ne,Le){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ae=w({},D.props),me=D.key,Me=D.ref,Fe=D._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,Fe=N.current),ne.key!==void 0&&(me=""+ne.key),D.type&&D.type.defaultProps)var ge=D.type.defaultProps;for(Be in ne)F.call(ne,Be)&&!y.hasOwnProperty(Be)&&(ae[Be]=ne[Be]===void 0&&ge!==void 0?ge[Be]:ne[Be])}var Be=arguments.length-2;if(Be===1)ae.children=Le;else if(1<Be){ge=Array(Be);for(var xt=0;xt<Be;xt++)ge[xt]=arguments[xt+2];ae.children=ge}return{$$typeof:s,type:D.type,key:me,ref:Me,props:ae,_owner:Fe}},_t.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},_t.createElement=C,_t.createFactory=function(D){var ne=C.bind(null,D);return ne.type=D,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(D){return{$$typeof:d,render:D}},_t.isValidElement=z,_t.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:ce}},_t.memo=function(D,ne){return{$$typeof:p,type:D,compare:ne===void 0?null:ne}},_t.startTransition=function(D){var ne=ee.transition;ee.transition={};try{D()}finally{ee.transition=ne}},_t.unstable_act=J,_t.useCallback=function(D,ne){return Z.current.useCallback(D,ne)},_t.useContext=function(D){return Z.current.useContext(D)},_t.useDebugValue=function(){},_t.useDeferredValue=function(D){return Z.current.useDeferredValue(D)},_t.useEffect=function(D,ne){return Z.current.useEffect(D,ne)},_t.useId=function(){return Z.current.useId()},_t.useImperativeHandle=function(D,ne,Le){return Z.current.useImperativeHandle(D,ne,Le)},_t.useInsertionEffect=function(D,ne){return Z.current.useInsertionEffect(D,ne)},_t.useLayoutEffect=function(D,ne){return Z.current.useLayoutEffect(D,ne)},_t.useMemo=function(D,ne){return Z.current.useMemo(D,ne)},_t.useReducer=function(D,ne,Le){return Z.current.useReducer(D,ne,Le)},_t.useRef=function(D){return Z.current.useRef(D)},_t.useState=function(D){return Z.current.useState(D)},_t.useSyncExternalStore=function(D,ne,Le){return Z.current.useSyncExternalStore(D,ne,Le)},_t.useTransition=function(){return Z.current.useTransition()},_t.version="18.3.1",_t}var Wp;function rd(){return Wp||(Wp=1,Nc.exports=R_()),Nc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function C_(){if(Xp)return za;Xp=1;var s=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,m,p){var x,M={},g=null,S=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(S=m.ref);for(x in m)r.call(m,x)&&!u.hasOwnProperty(x)&&(M[x]=m[x]);if(d&&d.defaultProps)for(x in m=d.defaultProps,m)M[x]===void 0&&(M[x]=m[x]);return{$$typeof:e,type:d,key:g,ref:S,props:M,_owner:o.current}}return za.Fragment=t,za.jsx=c,za.jsxs=c,za}var qp;function b_(){return qp||(qp=1,Dc.exports=C_()),Dc.exports}var mt=b_(),Gi=rd();const P_=tg(Gi);var al={},Ic={exports:{}},qn={},Uc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function L_(){return Yp||(Yp=1,(function(s){function e(ee,$){var J=ee.length;ee.push($);e:for(;0<J;){var D=J-1>>>1,ne=ee[D];if(0<o(ne,$))ee[D]=$,ee[J]=ne,J=D;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var $=ee[0],J=ee.pop();if(J!==$){ee[0]=J;e:for(var D=0,ne=ee.length,Le=ne>>>1;D<Le;){var ae=2*(D+1)-1,me=ee[ae],Me=ae+1,Fe=ee[Me];if(0>o(me,J))Me<ne&&0>o(Fe,me)?(ee[D]=Fe,ee[Me]=J,D=Me):(ee[D]=me,ee[ae]=J,D=ae);else if(Me<ne&&0>o(Fe,J))ee[D]=Fe,ee[Me]=J,D=Me;else break e}}return $}function o(ee,$){var J=ee.sortIndex-$.sortIndex;return J!==0?J:ee.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var m=[],p=[],x=1,M=null,g=3,S=!1,w=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(ee){for(var $=t(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=ee)r(p),$.sortIndex=$.expirationTime,e(m,$);else break;$=t(p)}}function P(ee){if(R=!1,B(ee),!w)if(t(m)!==null)w=!0,ce(F);else{var $=t(p);$!==null&&Z(P,$.startTime-ee)}}function F(ee,$){w=!1,R&&(R=!1,_(C),C=-1),S=!0;var J=g;try{for(B($),M=t(m);M!==null&&(!(M.expirationTime>$)||ee&&!V());){var D=M.callback;if(typeof D=="function"){M.callback=null,g=M.priorityLevel;var ne=D(M.expirationTime<=$);$=s.unstable_now(),typeof ne=="function"?M.callback=ne:M===t(m)&&r(m),B($)}else r(m);M=t(m)}if(M!==null)var Le=!0;else{var ae=t(p);ae!==null&&Z(P,ae.startTime-$),Le=!1}return Le}finally{M=null,g=J,S=!1}}var N=!1,y=null,C=-1,K=5,z=-1;function V(){return!(s.unstable_now()-z<K)}function Y(){if(y!==null){var ee=s.unstable_now();z=ee;var $=!0;try{$=y(!0,ee)}finally{$?te():(N=!1,y=null)}}else N=!1}var te;if(typeof b=="function")te=function(){b(Y)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,se=I.port2;I.port1.onmessage=Y,te=function(){se.postMessage(null)}}else te=function(){v(Y,0)};function ce(ee){y=ee,N||(N=!0,te())}function Z(ee,$){C=v(function(){ee(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ce(F))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(ee){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var J=g;g=$;try{return ee()}finally{g=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,$){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var J=g;g=ee;try{return $()}finally{g=J}},s.unstable_scheduleCallback=function(ee,$,J){var D=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?D+J:D):J=D,ee){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,ee={id:x++,callback:$,priorityLevel:ee,startTime:J,expirationTime:ne,sortIndex:-1},J>D?(ee.sortIndex=J,e(p,ee),t(m)===null&&ee===t(p)&&(R?(_(C),C=-1):R=!0,Z(P,J-D))):(ee.sortIndex=ne,e(m,ee),w||S||(w=!0,ce(F))),ee},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(ee){var $=g;return function(){var J=g;g=$;try{return ee.apply(this,arguments)}finally{g=J}}}})(Fc)),Fc}var $p;function D_(){return $p||($p=1,Uc.exports=L_()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function N_(){if(Kp)return qn;Kp=1;var s=rd(),e=D_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},M={};function g(n){return m.call(M,n)?!0:m.call(x,n)?!1:p.test(n)?M[n]=!0:(x[n]=!0,!1)}function S(n,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,l){if(i===null||typeof i>"u"||S(n,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,l,f,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,i,a,l){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?n.setAttributeNS(l,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),ee=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,D;function ne(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Le=!1;function ae(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){l=le}n.call(i.prototype)}else{try{throw Error()}catch(le){l=le}n()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),h=l.stack.split(`
`),T=f.length-1,O=h.length-1;1<=T&&0<=O&&f[T]!==h[O];)O--;for(;1<=T&&0<=O;T--,O--)if(f[T]!==h[O]){if(T!==1||O!==1)do if(T--,O--,0>O||f[T]!==h[O]){var H=`
`+f[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=O);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function me(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=ae(n.type,!1),n;case 11:return n=ae(n.type.render,!1),n;case 1:return n=ae(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case y:return"Fragment";case N:return"Portal";case K:return"Profiler";case C:return"StrictMode";case te:return"Suspense";case I:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,h.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function je(n){n._valueTracker||(n._valueTracker=xt(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=Be(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ut(n,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function zt(n,i){i=i.checked,i!=null&&B(n,"checked",i,!1)}function sn(n,i){zt(n,i);var a=ge(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?bn(n,i.type,a):i.hasOwnProperty("defaultValue")&&bn(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function bn(n,i,a){(i!=="number"||wt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Bt=Array.isArray;function en(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function dn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ht(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function X(n,i){var a=ge(i.value),l=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),l!=null&&(n.defaultValue=""+l)}function wn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Yt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,l,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Je(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(et).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),et[i]=et[n]})});function A(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||et.hasOwnProperty(n)&&et[n]?(""+i).trim():i+"px"}function ie(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=A(a,i[a],l);a==="float"&&(a="cssFloat"),l?n.setProperty(a,f):n[a]=f}}var Se=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(n,i){if(i){if(Se[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function ue(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var de=null,Ee=null,k=null;function he(n){if(n=Ta(n)){if(typeof de!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Mo(i),de(n.stateNode,n.type,i))}}function fe(n){Ee?k?k.push(n):k=[n]:Ee=n}function Pe(){if(Ee){var n=Ee,i=k;if(k=Ee=null,he(n),i)for(n=0;n<i.length;n++)he(i[n])}}function we(n,i){return n(i)}function Ce(){}var $e=!1;function ot(n,i,a){if($e)return n(i,a);$e=!0;try{return we(n,i,a)}finally{$e=!1,(Ee!==null||k!==null)&&(Ce(),Pe())}}function xe(n,i){var a=n.stateNode;if(a===null)return null;var l=Mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qe=!1;if(d)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){qe=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{qe=!1}function Oe(n,i,a,l,f,h,T,O,H){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(ve){this.onError(ve)}}var vt=!1,Ht=null,tn=!1,fr=null,Ai={onError:function(n){vt=!0,Ht=n}};function xs(n,i,a,l,f,h,T,O,H){vt=!1,Ht=null,Oe.apply(Ai,arguments)}function qr(n,i,a,l,f,h,T,O,H){if(xs.apply(this,arguments),vt){if(vt){var le=Ht;vt=!1,Ht=null}else throw Error(t(198));tn||(tn=!0,fr=le)}}function ii(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ri(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ri(n){if(ii(n)!==n)throw Error(t(188))}function Xi(n){var i=n.alternate;if(!i){if(i=ii(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return Ri(f),n;if(h===l)return Ri(f),i;h=h.sibling}throw Error(t(188))}if(a.return!==l.return)a=f,l=h;else{for(var T=!1,O=f.child;O;){if(O===a){T=!0,a=f,l=h;break}if(O===l){T=!0,l=f,a=h;break}O=O.sibling}if(!T){for(O=h.child;O;){if(O===a){T=!0,a=h,l=f;break}if(O===l){T=!0,l=h,a=f;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==l)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ci(n){return n=Xi(n),n!==null?qi(n):null}function qi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qi(n);if(i!==null)return i;n=n.sibling}return null}var Yr=e.unstable_scheduleCallback,dr=e.unstable_cancelCallback,bi=e.unstable_shouldYield,$r=e.unstable_requestPaint,Ut=e.unstable_now,Kr=e.unstable_getCurrentPriorityLevel,hr=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,pr=e.unstable_NormalPriority,Jr=e.unstable_LowPriority,E=e.unstable_IdlePriority,U=null,q=null;function j(n){if(q&&typeof q.onCommitFiberRoot=="function")try{q.onCommitFiberRoot(U,n,void 0,(n.current.flags&128)===128)}catch{}}var Q=Math.clz32?Math.clz32:Te,De=Math.log,ze=Math.LN2;function Te(n){return n>>>=0,n===0?32:31-(De(n)/ze|0)|0}var Ue=64,Ie=4194304;function Ge(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tt(n,i){var a=n.pendingLanes;if(a===0)return 0;var l=0,f=n.suspendedLanes,h=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~f;O!==0?l=Ge(O):(h&=T,h!==0&&(l=Ge(h)))}else T=a&~f,T!==0?l=Ge(T):h!==0&&(l=Ge(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)a=31-Q(i),f=1<<a,l|=n[a],i&=~f;return l}function Ve(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes;0<h;){var T=31-Q(h),O=1<<T,H=f[T];H===-1?((O&a)===0||(O&l)!==0)&&(f[T]=Ve(O,i)):H<=i&&(n.expiredLanes|=O),h&=~O}}function Dt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tt(){var n=Ue;return Ue<<=1,(Ue&4194240)===0&&(Ue=64),n}function At(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Vt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Q(i),n[i]=a}function We(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Q(a),h=1<<f;i[f]=0,l[f]=-1,n[f]=-1,a&=~h}}function nn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-Q(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}var Ze=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hn,mr,pi,Li,St,an=!1,Pn=[],Ct=null,kt=null,vn=null,gr=new Map,ca=new Map,_r=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":gr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(i.pointerId)}}function fa(n,i,a,l,f,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&mr(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Zg(n,i,a,l,f){switch(i){case"focusin":return Ct=fa(Ct,n,i,a,l,f),!0;case"dragenter":return kt=fa(kt,n,i,a,l,f),!0;case"mouseover":return vn=fa(vn,n,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return gr.set(h,fa(gr.get(h)||null,n,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ca.set(h,fa(ca.get(h)||null,n,i,a,l,f)),!0}return!1}function Rd(n){var i=Qr(n.target);if(i!==null){var a=ii(i);if(a!==null){if(i=a.tag,i===13){if(i=ri(a),i!==null){n.blockedOn=i,St(n.priority,function(){pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ao(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=su(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Re=l,a.target.dispatchEvent(l),Re=null}else return i=Ta(a),i!==null&&mr(i),n.blockedOn=a,!1;i.shift()}return!0}function Cd(n,i,a){ao(n)&&a.delete(i)}function Jg(){an=!1,Ct!==null&&ao(Ct)&&(Ct=null),kt!==null&&ao(kt)&&(kt=null),vn!==null&&ao(vn)&&(vn=null),gr.forEach(Cd),ca.forEach(Cd)}function da(n,i){n.blockedOn===i&&(n.blockedOn=null,an||(an=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function ha(n){function i(f){return da(f,n)}if(0<Pn.length){da(Pn[0],n);for(var a=1;a<Pn.length;a++){var l=Pn[a];l.blockedOn===n&&(l.blockedOn=null)}}for(Ct!==null&&da(Ct,n),kt!==null&&da(kt,n),vn!==null&&da(vn,n),gr.forEach(i),ca.forEach(i),a=0;a<_r.length;a++)l=_r[a],l.blockedOn===n&&(l.blockedOn=null);for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)Rd(a),a.blockedOn===null&&_r.shift()}var Ss=P.ReactCurrentBatchConfig,oo=!0;function Qg(n,i,a,l){var f=Ze,h=Ss.transition;Ss.transition=null;try{Ze=1,ru(n,i,a,l)}finally{Ze=f,Ss.transition=h}}function jg(n,i,a,l){var f=Ze,h=Ss.transition;Ss.transition=null;try{Ze=4,ru(n,i,a,l)}finally{Ze=f,Ss.transition=h}}function ru(n,i,a,l){if(oo){var f=su(n,i,a,l);if(f===null)yu(n,i,l,lo,a),Ad(n,l);else if(Zg(f,n,i,a,l))l.stopPropagation();else if(Ad(n,l),i&4&&-1<Kg.indexOf(n)){for(;f!==null;){var h=Ta(f);if(h!==null&&hn(h),h=su(n,i,a,l),h===null&&yu(n,i,l,lo,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else yu(n,i,l,null,a)}}var lo=null;function su(n,i,a,l){if(lo=null,n=ue(l),n=Qr(n),n!==null)if(i=ii(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ri(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return lo=n,null}function bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kr()){case hr:return 1;case Zr:return 4;case pr:case Jr:return 16;case E:return 536870912;default:return 16}default:return 16}}var vr=null,au=null,uo=null;function Pd(){if(uo)return uo;var n,i=au,a=i.length,l,f="value"in vr?vr.value:vr.textContent,h=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(l=1;l<=T&&i[a-l]===f[h-l];l++);return uo=f.slice(n,1<l?1-l:void 0)}function co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function fo(){return!0}function Ld(){return!1}function Kn(n){function i(a,l,f,h,T){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(h):h[O]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fo:Ld,this.isPropagationStopped=Ld,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Kn(Ms),pa=J({},Ms,{view:0,detail:0}),e0=Kn(pa),lu,uu,ma,ho=J({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(lu=n.screenX-ma.screenX,uu=n.screenY-ma.screenY):uu=lu=0,ma=n),lu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),Dd=Kn(ho),t0=J({},ho,{dataTransfer:0}),n0=Kn(t0),i0=J({},pa,{relatedTarget:0}),cu=Kn(i0),r0=J({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=Kn(r0),a0=J({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),o0=Kn(a0),l0=J({},Ms,{data:0}),Nd=Kn(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=f0[n])?!!i[n]:!1}function fu(){return d0}var h0=J({},pa,{key:function(n){if(n.key){var i=u0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?c0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(n){return n.type==="keypress"?co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p0=Kn(h0),m0=J({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Kn(m0),g0=J({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),_0=Kn(g0),v0=J({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=Kn(v0),S0=J({},ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=Kn(S0),y0=[9,13,27,32],du=d&&"CompositionEvent"in window,ga=null;d&&"documentMode"in document&&(ga=document.documentMode);var E0=d&&"TextEvent"in window&&!ga,Ud=d&&(!du||ga&&8<ga&&11>=ga),Fd=" ",Od=!1;function Bd(n,i){switch(n){case"keyup":return y0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function w0(n,i){switch(n){case"compositionend":return kd(i);case"keypress":return i.which!==32?null:(Od=!0,Fd);case"textInput":return n=i.data,n===Fd&&Od?null:n;default:return null}}function T0(n,i){if(ys)return n==="compositionend"||!du&&Bd(n,i)?(n=Pd(),uo=au=vr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ud&&i.locale!=="ko"?null:i.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!A0[n.type]:i==="textarea"}function Gd(n,i,a,l){fe(l),i=vo(i,"onChange"),0<i.length&&(a=new ou("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var _a=null,va=null;function R0(n){sh(n,0)}function po(n){var i=Rs(n);if(dt(i))return n}function C0(n,i){if(n==="change")return i}var Hd=!1;if(d){var hu;if(d){var pu="oninput"in document;if(!pu){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),pu=typeof Vd.oninput=="function"}hu=pu}else hu=!1;Hd=hu&&(!document.documentMode||9<document.documentMode)}function Wd(){_a&&(_a.detachEvent("onpropertychange",Xd),va=_a=null)}function Xd(n){if(n.propertyName==="value"&&po(va)){var i=[];Gd(i,va,n,ue(n)),ot(R0,i)}}function b0(n,i,a){n==="focusin"?(Wd(),_a=i,va=a,_a.attachEvent("onpropertychange",Xd)):n==="focusout"&&Wd()}function P0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return po(va)}function L0(n,i){if(n==="click")return po(i)}function D0(n,i){if(n==="input"||n==="change")return po(i)}function N0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:N0;function xa(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!m.call(i,f)||!mi(n[f],i[f]))return!1}return!0}function qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yd(n,i){var a=qd(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qd(a)}}function $d(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?$d(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Kd(){for(var n=window,i=wt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=wt(n.document)}return i}function mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function I0(n){var i=Kd(),a=n.focusedElem,l=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&$d(a.ownerDocument.documentElement,a)){if(l!==null&&mu(a)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!n.extend&&h>l&&(f=l,l=h,h=f),f=Yd(a,h);var T=Yd(a,l);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),h>l?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var U0=d&&"documentMode"in document&&11>=document.documentMode,Es=null,gu=null,Sa=null,_u=!1;function Zd(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||Es==null||Es!==wt(l)||(l=Es,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sa&&xa(Sa,l)||(Sa=l,l=vo(gu,"onSelect"),0<l.length&&(i=new ou("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Es)))}function mo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ws={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},vu={},Jd={};d&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function go(n){if(vu[n])return vu[n];if(!ws[n])return n;var i=ws[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jd)return vu[n]=i[a];return n}var Qd=go("animationend"),jd=go("animationiteration"),eh=go("animationstart"),th=go("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,i){nh.set(n,i),u(i,[n])}for(var xu=0;xu<ih.length;xu++){var Su=ih[xu],F0=Su.toLowerCase(),O0=Su[0].toUpperCase()+Su.slice(1);xr(F0,"on"+O0)}xr(Qd,"onAnimationEnd"),xr(jd,"onAnimationIteration"),xr(eh,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function rh(n,i,a){var l=n.type||"unknown-event";n.currentTarget=a,qr(l,i,void 0,n),n.currentTarget=null}function sh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var T=l.length-1;0<=T;T--){var O=l[T],H=O.instance,le=O.currentTarget;if(O=O.listener,H!==h&&f.isPropagationStopped())break e;rh(f,O,le),h=H}else for(T=0;T<l.length;T++){if(O=l[T],H=O.instance,le=O.currentTarget,O=O.listener,H!==h&&f.isPropagationStopped())break e;rh(f,O,le),h=H}}}if(tn)throw n=fr,tn=!1,fr=null,n}function Wt(n,i){var a=i[Cu];a===void 0&&(a=i[Cu]=new Set);var l=n+"__bubble";a.has(l)||(ah(i,n,2,!1),a.add(l))}function Mu(n,i,a){var l=0;i&&(l|=4),ah(a,n,l,i)}var _o="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[_o]){n[_o]=!0,r.forEach(function(a){a!=="selectionchange"&&(B0.has(a)||Mu(a,!1,n),Mu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_o]||(i[_o]=!0,Mu("selectionchange",!1,i))}}function ah(n,i,a,l){switch(bd(i)){case 1:var f=Qg;break;case 4:f=jg;break;default:f=ru}a=f.bind(null,i,a,n),f=void 0,!qe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function yu(n,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var O=l.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(T===4)for(T=l.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;T=T.return}for(;O!==null;){if(T=Qr(O),T===null)return;if(H=T.tag,H===5||H===6){l=h=T;continue e}O=O.parentNode}}l=l.return}ot(function(){var le=h,ve=ue(a),ye=[];e:{var _e=nh.get(n);if(_e!==void 0){var He=ou,Ye=n;switch(n){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":He=p0;break;case"focusin":Ye="focus",He=cu;break;case"focusout":Ye="blur",He=cu;break;case"beforeblur":case"afterblur":He=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=_0;break;case Qd:case jd:case eh:He=s0;break;case th:He=x0;break;case"scroll":He=e0;break;case"wheel":He=M0;break;case"copy":case"cut":case"paste":He=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Id}var Ke=(i&4)!==0,on=!Ke&&n==="scroll",re=Ke?_e!==null?_e+"Capture":null:_e;Ke=[];for(var W=le,oe;W!==null;){oe=W;var be=oe.stateNode;if(oe.tag===5&&be!==null&&(oe=be,re!==null&&(be=xe(W,re),be!=null&&Ke.push(Ea(W,be,oe)))),on)break;W=W.return}0<Ke.length&&(_e=new He(_e,Ye,null,a,ve),ye.push({event:_e,listeners:Ke}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",_e&&a!==Re&&(Ye=a.relatedTarget||a.fromElement)&&(Qr(Ye)||Ye[Yi]))break e;if((He||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=le,Ye=Ye?Qr(Ye):null,Ye!==null&&(on=ii(Ye),Ye!==on||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=le),He!==Ye)){if(Ke=Dd,be="onMouseLeave",re="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=Id,be="onPointerLeave",re="onPointerEnter",W="pointer"),on=He==null?_e:Rs(He),oe=Ye==null?_e:Rs(Ye),_e=new Ke(be,W+"leave",He,a,ve),_e.target=on,_e.relatedTarget=oe,be=null,Qr(ve)===le&&(Ke=new Ke(re,W+"enter",Ye,a,ve),Ke.target=oe,Ke.relatedTarget=on,be=Ke),on=be,He&&Ye)t:{for(Ke=He,re=Ye,W=0,oe=Ke;oe;oe=Ts(oe))W++;for(oe=0,be=re;be;be=Ts(be))oe++;for(;0<W-oe;)Ke=Ts(Ke),W--;for(;0<oe-W;)re=Ts(re),oe--;for(;W--;){if(Ke===re||re!==null&&Ke===re.alternate)break t;Ke=Ts(Ke),re=Ts(re)}Ke=null}else Ke=null;He!==null&&oh(ye,_e,He,Ke,!1),Ye!==null&&on!==null&&oh(ye,on,Ye,Ke,!0)}}e:{if(_e=le?Rs(le):window,He=_e.nodeName&&_e.nodeName.toLowerCase(),He==="select"||He==="input"&&_e.type==="file")var Qe=C0;else if(zd(_e))if(Hd)Qe=D0;else{Qe=P0;var nt=b0}else(He=_e.nodeName)&&He.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=L0);if(Qe&&(Qe=Qe(n,le))){Gd(ye,Qe,a,ve);break e}nt&&nt(n,_e,le),n==="focusout"&&(nt=_e._wrapperState)&&nt.controlled&&_e.type==="number"&&bn(_e,"number",_e.value)}switch(nt=le?Rs(le):window,n){case"focusin":(zd(nt)||nt.contentEditable==="true")&&(Es=nt,gu=le,Sa=null);break;case"focusout":Sa=gu=Es=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Zd(ye,a,ve);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":Zd(ye,a,ve)}var it;if(du)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ys?Bd(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Ud&&a.locale!=="ko"&&(ys||at!=="onCompositionStart"?at==="onCompositionEnd"&&ys&&(it=Pd()):(vr=ve,au="value"in vr?vr.value:vr.textContent,ys=!0)),nt=vo(le,at),0<nt.length&&(at=new Nd(at,n,null,a,ve),ye.push({event:at,listeners:nt}),it?at.data=it:(it=kd(a),it!==null&&(at.data=it)))),(it=E0?w0(n,a):T0(n,a))&&(le=vo(le,"onBeforeInput"),0<le.length&&(ve=new Nd("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:le}),ve.data=it))}sh(ye,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function vo(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=xe(n,a),h!=null&&l.unshift(Ea(n,h,f)),h=xe(n,i),h!=null&&l.push(Ea(n,h,f))),n=n.return}return l}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function oh(n,i,a,l,f){for(var h=i._reactName,T=[];a!==null&&a!==l;){var O=a,H=O.alternate,le=O.stateNode;if(H!==null&&H===l)break;O.tag===5&&le!==null&&(O=le,f?(H=xe(a,h),H!=null&&T.unshift(Ea(a,H,O))):f||(H=xe(a,h),H!=null&&T.push(Ea(a,H,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var k0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(k0,`
`).replace(z0,"")}function xo(n,i,a){if(i=lh(i),lh(n)!==i&&a)throw Error(t(425))}function So(){}var Eu=null,wu=null;function Tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Au=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(n){return uh.resolve(null).then(n).catch(V0)}:Au;function V0(n){setTimeout(function(){throw n})}function Ru(n,i){var a=i,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){n.removeChild(f),ha(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ha(i)}function Sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ch(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),Di="__reactFiber$"+As,wa="__reactProps$"+As,Yi="__reactContainer$"+As,Cu="__reactEvents$"+As,W0="__reactListeners$"+As,X0="__reactHandles$"+As;function Qr(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Yi]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ch(n);n!==null;){if(a=n[Di])return a;n=ch(n)}return i}n=a,a=n.parentNode}return null}function Ta(n){return n=n[Di]||n[Yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Mo(n){return n[wa]||null}var bu=[],Cs=-1;function Mr(n){return{current:n}}function Xt(n){0>Cs||(n.current=bu[Cs],bu[Cs]=null,Cs--)}function Gt(n,i){Cs++,bu[Cs]=n.current,n.current=i}var yr={},Ln=Mr(yr),Gn=Mr(!1),jr=yr;function bs(n,i){var a=n.type.contextTypes;if(!a)return yr;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Hn(n){return n=n.childContextTypes,n!=null}function yo(){Xt(Gn),Xt(Ln)}function fh(n,i,a){if(Ln.current!==yr)throw Error(t(168));Gt(Ln,i),Gt(Gn,a)}function dh(n,i,a){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(t(108,Fe(n)||"Unknown",f));return J({},a,l)}function Eo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,jr=Ln.current,Gt(Ln,n),Gt(Gn,Gn.current),!0}function hh(n,i,a){var l=n.stateNode;if(!l)throw Error(t(169));a?(n=dh(n,i,jr),l.__reactInternalMemoizedMergedChildContext=n,Xt(Gn),Xt(Ln),Gt(Ln,n)):Xt(Gn),Gt(Gn,a)}var $i=null,wo=!1,Pu=!1;function ph(n){$i===null?$i=[n]:$i.push(n)}function q0(n){wo=!0,ph(n)}function Er(){if(!Pu&&$i!==null){Pu=!0;var n=0,i=Ze;try{var a=$i;for(Ze=1;n<a.length;n++){var l=a[n];do l=l(!0);while(l!==null)}$i=null,wo=!1}catch(f){throw $i!==null&&($i=$i.slice(n+1)),Yr(hr,Er),f}finally{Ze=i,Pu=!1}}return null}var Ps=[],Ls=0,To=null,Ao=0,si=[],ai=0,es=null,Ki=1,Zi="";function ts(n,i){Ps[Ls++]=Ao,Ps[Ls++]=To,To=n,Ao=i}function mh(n,i,a){si[ai++]=Ki,si[ai++]=Zi,si[ai++]=es,es=n;var l=Ki;n=Zi;var f=32-Q(l)-1;l&=~(1<<f),a+=1;var h=32-Q(i)+f;if(30<h){var T=f-f%5;h=(l&(1<<T)-1).toString(32),l>>=T,f-=T,Ki=1<<32-Q(i)+f|a<<f|l,Zi=h+n}else Ki=1<<h|a<<f|l,Zi=n}function Lu(n){n.return!==null&&(ts(n,1),mh(n,1,0))}function Du(n){for(;n===To;)To=Ps[--Ls],Ps[Ls]=null,Ao=Ps[--Ls],Ps[Ls]=null;for(;n===es;)es=si[--ai],si[ai]=null,Zi=si[--ai],si[ai]=null,Ki=si[--ai],si[ai]=null}var Zn=null,Jn=null,$t=!1,gi=null;function gh(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _h(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=Sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=es!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Zn=n,Jn=null,!0):!1;default:return!1}}function Nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Iu(n){if($t){var i=Jn;if(i){var a=i;if(!_h(n,i)){if(Nu(n))throw Error(t(418));i=Sr(a.nextSibling);var l=Zn;i&&_h(n,i)?gh(l,a):(n.flags=n.flags&-4097|2,$t=!1,Zn=n)}}else{if(Nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Zn=n}}}function vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function Ro(n){if(n!==Zn)return!1;if(!$t)return vh(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tu(n.type,n.memoizedProps)),i&&(i=Jn)){if(Nu(n))throw xh(),Error(t(418));for(;i;)gh(n,i),i=Sr(i.nextSibling)}if(vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=Sr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Zn?Sr(n.stateNode.nextSibling):null;return!0}function xh(){for(var n=Jn;n;)n=Sr(n.nextSibling)}function Ds(){Jn=Zn=null,$t=!1}function Uu(n){gi===null?gi=[n]:gi.push(n)}var Y0=P.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var l=a.stateNode}if(!l)throw Error(t(147,n));var f=l,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var O=f.refs;T===null?delete O[h]:O[h]=T},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Co(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Sh(n){var i=n._init;return i(n._payload)}function Mh(n){function i(re,W){if(n){var oe=re.deletions;oe===null?(re.deletions=[W],re.flags|=16):oe.push(W)}}function a(re,W){if(!n)return null;for(;W!==null;)i(re,W),W=W.sibling;return null}function l(re,W){for(re=new Map;W!==null;)W.key!==null?re.set(W.key,W):re.set(W.index,W),W=W.sibling;return re}function f(re,W){return re=Lr(re,W),re.index=0,re.sibling=null,re}function h(re,W,oe){return re.index=oe,n?(oe=re.alternate,oe!==null?(oe=oe.index,oe<W?(re.flags|=2,W):oe):(re.flags|=2,W)):(re.flags|=1048576,W)}function T(re){return n&&re.alternate===null&&(re.flags|=2),re}function O(re,W,oe,be){return W===null||W.tag!==6?(W=Ac(oe,re.mode,be),W.return=re,W):(W=f(W,oe),W.return=re,W)}function H(re,W,oe,be){var Qe=oe.type;return Qe===y?ve(re,W,oe.props.children,be,oe.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ce&&Sh(Qe)===W.type)?(be=f(W,oe.props),be.ref=Aa(re,W,oe),be.return=re,be):(be=Qo(oe.type,oe.key,oe.props,null,re.mode,be),be.ref=Aa(re,W,oe),be.return=re,be)}function le(re,W,oe,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==oe.containerInfo||W.stateNode.implementation!==oe.implementation?(W=Rc(oe,re.mode,be),W.return=re,W):(W=f(W,oe.children||[]),W.return=re,W)}function ve(re,W,oe,be,Qe){return W===null||W.tag!==7?(W=us(oe,re.mode,be,Qe),W.return=re,W):(W=f(W,oe),W.return=re,W)}function ye(re,W,oe){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ac(""+W,re.mode,oe),W.return=re,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return oe=Qo(W.type,W.key,W.props,null,re.mode,oe),oe.ref=Aa(re,null,W),oe.return=re,oe;case N:return W=Rc(W,re.mode,oe),W.return=re,W;case ce:var be=W._init;return ye(re,be(W._payload),oe)}if(Bt(W)||$(W))return W=us(W,re.mode,oe,null),W.return=re,W;Co(re,W)}return null}function _e(re,W,oe,be){var Qe=W!==null?W.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Qe!==null?null:O(re,W,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:return oe.key===Qe?H(re,W,oe,be):null;case N:return oe.key===Qe?le(re,W,oe,be):null;case ce:return Qe=oe._init,_e(re,W,Qe(oe._payload),be)}if(Bt(oe)||$(oe))return Qe!==null?null:ve(re,W,oe,be,null);Co(re,oe)}return null}function He(re,W,oe,be,Qe){if(typeof be=="string"&&be!==""||typeof be=="number")return re=re.get(oe)||null,O(W,re,""+be,Qe);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case F:return re=re.get(be.key===null?oe:be.key)||null,H(W,re,be,Qe);case N:return re=re.get(be.key===null?oe:be.key)||null,le(W,re,be,Qe);case ce:var nt=be._init;return He(re,W,oe,nt(be._payload),Qe)}if(Bt(be)||$(be))return re=re.get(oe)||null,ve(W,re,be,Qe,null);Co(W,be)}return null}function Ye(re,W,oe,be){for(var Qe=null,nt=null,it=W,at=W=0,Mn=null;it!==null&&at<oe.length;at++){it.index>at?(Mn=it,it=null):Mn=it.sibling;var bt=_e(re,it,oe[at],be);if(bt===null){it===null&&(it=Mn);break}n&&it&&bt.alternate===null&&i(re,it),W=h(bt,W,at),nt===null?Qe=bt:nt.sibling=bt,nt=bt,it=Mn}if(at===oe.length)return a(re,it),$t&&ts(re,at),Qe;if(it===null){for(;at<oe.length;at++)it=ye(re,oe[at],be),it!==null&&(W=h(it,W,at),nt===null?Qe=it:nt.sibling=it,nt=it);return $t&&ts(re,at),Qe}for(it=l(re,it);at<oe.length;at++)Mn=He(it,re,at,oe[at],be),Mn!==null&&(n&&Mn.alternate!==null&&it.delete(Mn.key===null?at:Mn.key),W=h(Mn,W,at),nt===null?Qe=Mn:nt.sibling=Mn,nt=Mn);return n&&it.forEach(function(Dr){return i(re,Dr)}),$t&&ts(re,at),Qe}function Ke(re,W,oe,be){var Qe=$(oe);if(typeof Qe!="function")throw Error(t(150));if(oe=Qe.call(oe),oe==null)throw Error(t(151));for(var nt=Qe=null,it=W,at=W=0,Mn=null,bt=oe.next();it!==null&&!bt.done;at++,bt=oe.next()){it.index>at?(Mn=it,it=null):Mn=it.sibling;var Dr=_e(re,it,bt.value,be);if(Dr===null){it===null&&(it=Mn);break}n&&it&&Dr.alternate===null&&i(re,it),W=h(Dr,W,at),nt===null?Qe=Dr:nt.sibling=Dr,nt=Dr,it=Mn}if(bt.done)return a(re,it),$t&&ts(re,at),Qe;if(it===null){for(;!bt.done;at++,bt=oe.next())bt=ye(re,bt.value,be),bt!==null&&(W=h(bt,W,at),nt===null?Qe=bt:nt.sibling=bt,nt=bt);return $t&&ts(re,at),Qe}for(it=l(re,it);!bt.done;at++,bt=oe.next())bt=He(it,re,at,bt.value,be),bt!==null&&(n&&bt.alternate!==null&&it.delete(bt.key===null?at:bt.key),W=h(bt,W,at),nt===null?Qe=bt:nt.sibling=bt,nt=bt);return n&&it.forEach(function(A_){return i(re,A_)}),$t&&ts(re,at),Qe}function on(re,W,oe,be){if(typeof oe=="object"&&oe!==null&&oe.type===y&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:e:{for(var Qe=oe.key,nt=W;nt!==null;){if(nt.key===Qe){if(Qe=oe.type,Qe===y){if(nt.tag===7){a(re,nt.sibling),W=f(nt,oe.props.children),W.return=re,re=W;break e}}else if(nt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ce&&Sh(Qe)===nt.type){a(re,nt.sibling),W=f(nt,oe.props),W.ref=Aa(re,nt,oe),W.return=re,re=W;break e}a(re,nt);break}else i(re,nt);nt=nt.sibling}oe.type===y?(W=us(oe.props.children,re.mode,be,oe.key),W.return=re,re=W):(be=Qo(oe.type,oe.key,oe.props,null,re.mode,be),be.ref=Aa(re,W,oe),be.return=re,re=be)}return T(re);case N:e:{for(nt=oe.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===oe.containerInfo&&W.stateNode.implementation===oe.implementation){a(re,W.sibling),W=f(W,oe.children||[]),W.return=re,re=W;break e}else{a(re,W);break}else i(re,W);W=W.sibling}W=Rc(oe,re.mode,be),W.return=re,re=W}return T(re);case ce:return nt=oe._init,on(re,W,nt(oe._payload),be)}if(Bt(oe))return Ye(re,W,oe,be);if($(oe))return Ke(re,W,oe,be);Co(re,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,W!==null&&W.tag===6?(a(re,W.sibling),W=f(W,oe),W.return=re,re=W):(a(re,W),W=Ac(oe,re.mode,be),W.return=re,re=W),T(re)):a(re,W)}return on}var Ns=Mh(!0),yh=Mh(!1),bo=Mr(null),Po=null,Is=null,Fu=null;function Ou(){Fu=Is=Po=null}function Bu(n){var i=bo.current;Xt(bo),n._currentValue=i}function ku(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){Po=n,Fu=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function oi(n){var i=n._currentValue;if(Fu!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(Po===null)throw Error(t(308));Is=n,Po.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var ns=null;function zu(n){ns===null?ns=[n]:ns.push(n)}function Eh(n,i,a,l){var f=i.interleaved;return f===null?(a.next=a,zu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ji(n,l)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var wr=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Tr(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Rt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ji(n,a)}return f=l.interleaved,f===null?(i.next=i,zu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ji(n,a)}function Lo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,nn(n,a)}}function Th(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Do(n,i,a,l){var f=n.updateQueue;wr=!1;var h=f.firstBaseUpdate,T=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var H=O,le=H.next;H.next=null,T===null?h=le:T.next=le,T=H;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,O=ve.lastBaseUpdate,O!==T&&(O===null?ve.firstBaseUpdate=le:O.next=le,ve.lastBaseUpdate=H))}if(h!==null){var ye=f.baseState;T=0,ve=le=H=null,O=h;do{var _e=O.lane,He=O.eventTime;if((l&_e)===_e){ve!==null&&(ve=ve.next={eventTime:He,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ye=n,Ke=O;switch(_e=i,He=a,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){ye=Ye.call(He,ye,_e);break e}ye=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,_e=typeof Ye=="function"?Ye.call(He,ye,_e):Ye,_e==null)break e;ye=J({},ye,_e);break e;case 2:wr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[O]:_e.push(O))}else He={eventTime:He,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ve===null?(le=ve=He,H=ye):ve=ve.next=He,T|=_e;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ve===null&&(H=ye),f.baseState=H,f.firstBaseUpdate=le,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);ss|=T,n.lanes=T,n.memoizedState=ye}}function Ah(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(t(191,f));f.call(l)}}}var Ra={},Ni=Mr(Ra),Ca=Mr(Ra),ba=Mr(Ra);function is(n){if(n===Ra)throw Error(t(174));return n}function Hu(n,i){switch(Gt(ba,i),Gt(Ca,n),Gt(Ni,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}Xt(Ni),Gt(Ni,i)}function Fs(){Xt(Ni),Xt(Ca),Xt(ba)}function Rh(n){is(ba.current);var i=is(Ni.current),a=ct(i,n.type);i!==a&&(Gt(Ca,n),Gt(Ni,a))}function Vu(n){Ca.current===n&&(Xt(Ni),Xt(Ca))}var Zt=Mr(0);function No(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wu=[];function Xu(){for(var n=0;n<Wu.length;n++)Wu[n]._workInProgressVersionPrimary=null;Wu.length=0}var Io=P.ReactCurrentDispatcher,qu=P.ReactCurrentBatchConfig,rs=0,Jt=null,pn=null,xn=null,Uo=!1,Pa=!1,La=0,$0=0;function Dn(){throw Error(t(321))}function Yu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function $u(n,i,a,l,f,h){if(rs=h,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=n===null||n.memoizedState===null?Q0:j0,n=a(l,f),Pa){h=0;do{if(Pa=!1,La=0,25<=h)throw Error(t(301));h+=1,xn=pn=null,i.updateQueue=null,Io.current=e_,n=a(l,f)}while(Pa)}if(Io.current=Bo,i=pn!==null&&pn.next!==null,rs=0,xn=pn=Jt=null,Uo=!1,i)throw Error(t(300));return n}function Ku(){var n=La!==0;return La=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Jt.memoizedState=xn=n:xn=xn.next=n,xn}function li(){if(pn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=xn===null?Jt.memoizedState:xn.next;if(i!==null)xn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},xn===null?Jt.memoizedState=xn=n:xn=xn.next=n}return xn}function Da(n,i){return typeof i=="function"?i(n):i}function Zu(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=pn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var T=f.next;f.next=h.next,h.next=T}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var O=T=null,H=null,le=h;do{var ve=le.lane;if((rs&ve)===ve)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:n(l,le.action);else{var ye={lane:ve,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(O=H=ye,T=l):H=H.next=ye,Jt.lanes|=ve,ss|=ve}le=le.next}while(le!==null&&le!==h);H===null?T=l:H.next=O,mi(l,i.memoizedState)||(Vn=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=H,a.lastRenderedState=l}if(n=a.interleaved,n!==null){f=n;do h=f.lane,Jt.lanes|=h,ss|=h,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ju(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do h=n(h,T.action),T=T.next;while(T!==f);mi(h,i.memoizedState)||(Vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Ch(){}function bh(n,i){var a=Jt,l=li(),f=i(),h=!mi(l.memoizedState,f);if(h&&(l.memoizedState=f,Vn=!0),l=l.queue,Qu(Dh.bind(null,a,l,n),[n]),l.getSnapshot!==i||h||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,Na(9,Lh.bind(null,a,l,f,i),void 0,null),Sn===null)throw Error(t(349));(rs&30)!==0||Ph(a,i,f)}return f}function Ph(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Lh(n,i,a,l){i.value=a,i.getSnapshot=l,Nh(i)&&Ih(n)}function Dh(n,i,a){return a(function(){Nh(i)&&Ih(n)})}function Nh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function Ih(n){var i=Ji(n,1);i!==null&&Si(i,n,1,-1)}function Uh(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=J0.bind(null,Jt,n),[i.memoizedState,n]}function Na(n,i,a,l){return n={tag:n,create:i,destroy:a,deps:l,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n)),n}function Fh(){return li().memoizedState}function Fo(n,i,a,l){var f=Ii();Jt.flags|=n,f.memoizedState=Na(1|i,a,void 0,l===void 0?null:l)}function Oo(n,i,a,l){var f=li();l=l===void 0?null:l;var h=void 0;if(pn!==null){var T=pn.memoizedState;if(h=T.destroy,l!==null&&Yu(l,T.deps)){f.memoizedState=Na(i,a,h,l);return}}Jt.flags|=n,f.memoizedState=Na(1|i,a,h,l)}function Oh(n,i){return Fo(8390656,8,n,i)}function Qu(n,i){return Oo(2048,8,n,i)}function Bh(n,i){return Oo(4,2,n,i)}function kh(n,i){return Oo(4,4,n,i)}function zh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Gh(n,i,a){return a=a!=null?a.concat([n]):null,Oo(4,4,zh.bind(null,i,n),a)}function ju(){}function Hh(n,i){var a=li();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Yu(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Vh(n,i){var a=li();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Yu(i,l[1])?l[0]:(n=n(),a.memoizedState=[n,i],n)}function Wh(n,i,a){return(rs&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(mi(a,i)||(a=Tt(),Jt.lanes|=a,ss|=a,n.baseState=!0),i)}function K0(n,i){var a=Ze;Ze=a!==0&&4>a?a:4,n(!0);var l=qu.transition;qu.transition={};try{n(!1),i()}finally{Ze=a,qu.transition=l}}function Xh(){return li().memoizedState}function Z0(n,i,a){var l=br(n);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},qh(n))Yh(i,a);else if(a=Eh(n,i,a,l),a!==null){var f=Bn();Si(a,n,l,f),$h(a,i,l)}}function J0(n,i,a){var l=br(n),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(qh(n))Yh(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,O=h(T,a);if(f.hasEagerState=!0,f.eagerState=O,mi(O,T)){var H=i.interleaved;H===null?(f.next=f,zu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=Eh(n,i,f,l),a!==null&&(f=Bn(),Si(a,n,l,f),$h(a,i,l))}}function qh(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function Yh(n,i){Pa=Uo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function $h(n,i,a){if((a&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,nn(n,a)}}var Bo={readContext:oi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Q0={readContext:oi,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:oi,useEffect:Oh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Fo(4194308,4,zh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Fo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fo(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var l=Ii();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=Z0.bind(null,Jt,n),[l.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:Uh,useDebugValue:ju,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=Uh(!1),i=n[0];return n=K0.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var l=Jt,f=Ii();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Sn===null)throw Error(t(349));(rs&30)!==0||Ph(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Oh(Dh.bind(null,l,h,n),[n]),l.flags|=2048,Na(9,Lh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var n=Ii(),i=Sn.identifierPrefix;if($t){var a=Zi,l=Ki;a=(l&~(1<<32-Q(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},j0={readContext:oi,useCallback:Hh,useContext:oi,useEffect:Qu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:kh,useMemo:Vh,useReducer:Zu,useRef:Fh,useState:function(){return Zu(Da)},useDebugValue:ju,useDeferredValue:function(n){var i=li();return Wh(i,pn.memoizedState,n)},useTransition:function(){var n=Zu(Da)[0],i=li().memoizedState;return[n,i]},useMutableSource:Ch,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1},e_={readContext:oi,useCallback:Hh,useContext:oi,useEffect:Qu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:kh,useMemo:Vh,useReducer:Ju,useRef:Fh,useState:function(){return Ju(Da)},useDebugValue:ju,useDeferredValue:function(n){var i=li();return pn===null?i.memoizedState=n:Wh(i,pn.memoizedState,n)},useTransition:function(){var n=Ju(Da)[0],i=li().memoizedState;return[n,i]},useMutableSource:Ch,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ec(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:J({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ko={isMounted:function(n){return(n=n._reactInternals)?ii(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Bn(),f=br(n),h=Qi(l,f);h.payload=i,a!=null&&(h.callback=a),i=Tr(n,h,f),i!==null&&(Si(i,n,f,l),Lo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Bn(),f=br(n),h=Qi(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Tr(n,h,f),i!==null&&(Si(i,n,f,l),Lo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Bn(),l=br(n),f=Qi(a,l);f.tag=2,i!=null&&(f.callback=i),i=Tr(n,f,l),i!==null&&(Si(i,n,l,a),Lo(i,n,l))}};function Kh(n,i,a,l,f,h,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,h,T):i.prototype&&i.prototype.isPureReactComponent?!xa(a,l)||!xa(f,h):!0}function Zh(n,i,a){var l=!1,f=yr,h=i.contextType;return typeof h=="object"&&h!==null?h=oi(h):(f=Hn(i)?jr:Ln.current,l=i.contextTypes,h=(l=l!=null)?bs(n,f):yr),i=new i(a,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ko,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=h),i}function Jh(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&ko.enqueueReplaceState(i,i.state,null)}function tc(n,i,a,l){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Gu(n);var h=i.contextType;typeof h=="object"&&h!==null?f.context=oi(h):(h=Hn(i)?jr:Ln.current,f.context=bs(n,h)),f.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ec(n,i,h,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ko.enqueueReplaceState(f,f.state,null),Do(n,a,f,l),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,i){try{var a="",l=i;do a+=me(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:f,digest:null}}function nc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ic(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var t_=typeof WeakMap=="function"?WeakMap:Map;function Qh(n,i,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){qo||(qo=!0,vc=l),ic(n,i)},a}function jh(n,i,a){a=Qi(-1,a),a.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){ic(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){ic(n,i),typeof l!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function ep(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new t_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),n=m_.bind(null,n,i,a),i.then(n,n))}function tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function np(n,i,a,l,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Qi(-1,1),i.tag=2,Tr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var n_=P.ReactCurrentOwner,Vn=!1;function On(n,i,a,l){i.child=n===null?yh(i,null,a,l):Ns(i,n.child,a,l)}function ip(n,i,a,l,f){a=a.render;var h=i.ref;return Us(i,f),l=$u(n,i,a,l,h,f),a=Ku(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):($t&&a&&Lu(i),i.flags|=1,On(n,i,l,f),i.child)}function rp(n,i,a,l,f){if(n===null){var h=a.type;return typeof h=="function"&&!Tc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,sp(n,i,h,l,f)):(n=Qo(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&f)===0){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(T,l)&&n.ref===i.ref)return ji(n,i,f)}return i.flags|=1,n=Lr(h,l),n.ref=i.ref,n.return=i,i.child=n}function sp(n,i,a,l,f){if(n!==null){var h=n.memoizedProps;if(xa(h,l)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=l=h,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,ji(n,i,f)}return rc(n,i,a,l,f)}function ap(n,i,a){var l=i.pendingProps,f=l.children,h=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(ks,Qn),Qn|=a;else{if((a&1073741824)===0)return n=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(ks,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Gt(ks,Qn),Qn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Gt(ks,Qn),Qn|=l;return On(n,i,f,a),i.child}function op(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function rc(n,i,a,l,f){var h=Hn(a)?jr:Ln.current;return h=bs(i,h),Us(i,f),a=$u(n,i,a,l,h,f),l=Ku(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):($t&&l&&Lu(i),i.flags|=1,On(n,i,a,f),i.child)}function lp(n,i,a,l,f){if(Hn(a)){var h=!0;Eo(i)}else h=!1;if(Us(i,f),i.stateNode===null)Go(n,i),Zh(i,a,l),tc(i,a,l,f),l=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var H=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=oi(le):(le=Hn(a)?jr:Ln.current,le=bs(i,le));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==l||H!==le)&&Jh(i,T,l,le),wr=!1;var _e=i.memoizedState;T.state=_e,Do(i,l,T,f),H=i.memoizedState,O!==l||_e!==H||Gn.current||wr?(typeof ve=="function"&&(ec(i,a,ve,l),H=i.memoizedState),(O=wr||Kh(i,a,O,l,_e,H,le))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),T.props=l,T.state=H,T.context=le,l=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,wh(n,i),O=i.memoizedProps,le=i.type===i.elementType?O:_i(i.type,O),T.props=le,ye=i.pendingProps,_e=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=oi(H):(H=Hn(a)?jr:Ln.current,H=bs(i,H));var He=a.getDerivedStateFromProps;(ve=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==ye||_e!==H)&&Jh(i,T,l,H),wr=!1,_e=i.memoizedState,T.state=_e,Do(i,l,T,f);var Ye=i.memoizedState;O!==ye||_e!==Ye||Gn.current||wr?(typeof He=="function"&&(ec(i,a,He,l),Ye=i.memoizedState),(le=wr||Kh(i,a,le,l,_e,Ye,H)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Ye,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Ye,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),T.props=l,T.state=Ye,T.context=H,l=le):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),l=!1)}return sc(n,i,a,l,h,f)}function sc(n,i,a,l,f,h){op(n,i);var T=(i.flags&128)!==0;if(!l&&!T)return f&&hh(i,a,!1),ji(n,i,h);l=i.stateNode,n_.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&T?(i.child=Ns(i,n.child,null,h),i.child=Ns(i,null,O,h)):On(n,i,O,h),i.memoizedState=l.state,f&&hh(i,a,!0),i.child}function up(n){var i=n.stateNode;i.pendingContext?fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(n,i.context,!1),Hu(n,i.containerInfo)}function cp(n,i,a,l,f){return Ds(),Uu(f),i.flags|=256,On(n,i,a,l),i.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function fp(n,i,a){var l=i.pendingProps,f=Zt.current,h=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Gt(Zt,f&1),n===null)return Iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,n=l.fallback,h?(l=i.mode,h=i.child,T={mode:"hidden",children:T},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=jo(T,l,0,null),n=us(n,l,a,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=oc(a),i.memoizedState=ac,n):lc(i,T));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return i_(n,i,T,l,O,f,a);if(h){h=l.fallback,T=i.mode,f=n.child,O=f.sibling;var H={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=Lr(f,H),l.subtreeFlags=f.subtreeFlags&14680064),O!==null?h=Lr(O,h):(h=us(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=n.child.memoizedState,T=T===null?oc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=n.childLanes&~a,i.memoizedState=ac,l}return h=n.child,n=h.sibling,l=Lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=l,i.memoizedState=null,l}function lc(n,i){return i=jo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function zo(n,i,a,l){return l!==null&&Uu(l),Ns(i,n.child,null,a),n=lc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function i_(n,i,a,l,f,h,T){if(a)return i.flags&256?(i.flags&=-257,l=nc(Error(t(422))),zo(n,i,T,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=jo({mode:"visible",children:l.children},f,0,null),h=us(h,f,T,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Ns(i,n.child,null,T),i.child.memoizedState=oc(T),i.memoizedState=ac,h);if((i.mode&1)===0)return zo(n,i,T,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var O=l.dgst;return l=O,h=Error(t(419)),l=nc(h,l,void 0),zo(n,i,T,l)}if(O=(T&n.childLanes)!==0,Vn||O){if(l=Sn,l!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|T))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Ji(n,f),Si(l,n,f,-1))}return wc(),l=nc(Error(t(421))),zo(n,i,T,l)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=g_.bind(null,n),f._reactRetry=i,null):(n=h.treeContext,Jn=Sr(f.nextSibling),Zn=i,$t=!0,gi=null,n!==null&&(si[ai++]=Ki,si[ai++]=Zi,si[ai++]=es,Ki=n.id,Zi=n.overflow,es=i),i=lc(i,l.children),i.flags|=4096,i)}function dp(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),ku(n.return,i,a)}function uc(n,i,a,l,f){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function hp(n,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(On(n,i,l.children,a),l=Zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dp(n,a,i);else if(n.tag===19)dp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Gt(Zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&No(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),uc(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&No(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}uc(i,!0,a,null,h);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Go(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ss|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Lr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Lr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function r_(n,i,a){switch(i.tag){case 3:up(i),Ds();break;case 5:Rh(i);break;case 1:Hn(i.type)&&Eo(i);break;case 4:Hu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Gt(bo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Gt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?fp(n,i,a):(Gt(Zt,Zt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(n.flags&128)!==0){if(l)return hp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(Zt,Zt.current),l)break;return null;case 22:case 23:return i.lanes=0,ap(n,i,a)}return ji(n,i,a)}var pp,cc,mp,gp;pp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cc=function(){},mp=function(n,i,a,l){var f=n.memoizedProps;if(f!==l){n=i.stateNode,is(Ni.current);var h=null;switch(a){case"input":f=ut(n,f),l=ut(n,l),h=[];break;case"select":f=J({},f,{value:void 0}),l=J({},l,{value:void 0}),h=[];break;case"textarea":f=dn(n,f),l=dn(n,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=So)}pe(a,l);var T;a=null;for(le in f)if(!l.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var O=f[le];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?h||(h=[]):(h=h||[]).push(le,null));for(le in l){var H=l[le];if(O=f!=null?f[le]:void 0,l.hasOwnProperty(le)&&H!==O&&(H!=null||O!=null))if(le==="style")if(O){for(T in O)!O.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&O[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(h||(h=[]),h.push(le,a)),a=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(h=h||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Wt("scroll",n),h||O===H||(h=[])):(h=h||[]).push(le,H))}a&&(h=h||[]).push("style",a);var le=h;(i.updateQueue=le)&&(i.flags|=4)}},gp=function(n,i,a,l){a!==l&&(i.flags|=4)};function Ia(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function s_(n,i,a){var l=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Hn(i.type)&&yo(),Nn(i),null;case 3:return l=i.stateNode,Fs(),Xt(Gn),Xt(Ln),Xu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Ro(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Mc(gi),gi=null))),cc(n,i),Nn(i),null;case 5:Vu(i);var f=is(ba.current);if(a=i.type,n!==null&&i.stateNode!=null)mp(n,i,a,l,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=is(Ni.current),Ro(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[Di]=i,l[wa]=h,n=(i.mode&1)!==0,a){case"dialog":Wt("cancel",l),Wt("close",l);break;case"iframe":case"object":case"embed":Wt("load",l);break;case"video":case"audio":for(f=0;f<Ma.length;f++)Wt(Ma[f],l);break;case"source":Wt("error",l);break;case"img":case"image":case"link":Wt("error",l),Wt("load",l);break;case"details":Wt("toggle",l);break;case"input":Ot(l,h),Wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Wt("invalid",l);break;case"textarea":ht(l,h),Wt("invalid",l)}pe(a,h),f=null;for(var T in h)if(h.hasOwnProperty(T)){var O=h[T];T==="children"?typeof O=="string"?l.textContent!==O&&(h.suppressHydrationWarning!==!0&&xo(l.textContent,O,n),f=["children",O]):typeof O=="number"&&l.textContent!==""+O&&(h.suppressHydrationWarning!==!0&&xo(l.textContent,O,n),f=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Wt("scroll",l)}switch(a){case"input":je(l),It(l,h,!0);break;case"textarea":je(l),wn(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=So)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=T.createElement(a,{is:l.is}):(n=T.createElement(a),a==="select"&&(T=n,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):n=T.createElementNS(n,a),n[Di]=i,n[wa]=l,pp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ae(a,l),a){case"dialog":Wt("cancel",n),Wt("close",n),f=l;break;case"iframe":case"object":case"embed":Wt("load",n),f=l;break;case"video":case"audio":for(f=0;f<Ma.length;f++)Wt(Ma[f],n);f=l;break;case"source":Wt("error",n),f=l;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),f=l;break;case"details":Wt("toggle",n),f=l;break;case"input":Ot(n,l),f=ut(n,l),Wt("invalid",n);break;case"option":f=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},f=J({},l,{value:void 0}),Wt("invalid",n);break;case"textarea":ht(n,l),f=dn(n,l),Wt("invalid",n);break;default:f=l}pe(a,f),O=f;for(h in O)if(O.hasOwnProperty(h)){var H=O[h];h==="style"?ie(n,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Yt(n,H)):h==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Je(n,H):typeof H=="number"&&Je(n,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?H!=null&&h==="onScroll"&&Wt("scroll",n):H!=null&&B(n,h,H,T))}switch(a){case"input":je(n),It(n,l,!1);break;case"textarea":je(n),wn(n);break;case"option":l.value!=null&&n.setAttribute("value",""+ge(l.value));break;case"select":n.multiple=!!l.multiple,h=l.value,h!=null?en(n,!!l.multiple,h,!1):l.defaultValue!=null&&en(n,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=So)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)gp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(a=is(ba.current),is(Ni.current),Ro(i)){if(l=i.stateNode,a=i.memoizedProps,l[Di]=i,(h=l.nodeValue!==a)&&(n=Zn,n!==null))switch(n.tag){case 3:xo(l.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xo(l.nodeValue,a,(n.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Di]=i,i.stateNode=l}return Nn(i),null;case 13:if(Xt(Zt),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xh(),Ds(),i.flags|=98560,h=!1;else if(h=Ro(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[Di]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),h=!1}else gi!==null&&(Mc(gi),gi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?mn===0&&(mn=3):wc())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Fs(),cc(n,i),n===null&&ya(i.stateNode.containerInfo),Nn(i),null;case 10:return Bu(i.type._context),Nn(i),null;case 17:return Hn(i.type)&&yo(),Nn(i),null;case 19:if(Xt(Zt),h=i.memoizedState,h===null)return Nn(i),null;if(l=(i.flags&128)!==0,T=h.rendering,T===null)if(l)Ia(h,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=No(n),T!==null){for(i.flags|=128,Ia(h,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,n=l,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,n=T.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(Zt,Zt.current&1|2),i.child}n=n.sibling}h.tail!==null&&Ut()>zs&&(i.flags|=128,l=!0,Ia(h,!1),i.lanes=4194304)}else{if(!l)if(n=No(T),n!==null){if(i.flags|=128,l=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!$t)return Nn(i),null}else 2*Ut()-h.renderingStartTime>zs&&a!==1073741824&&(i.flags|=128,l=!0,Ia(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(a=h.last,a!==null?a.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ut(),i.sibling=null,a=Zt.current,Gt(Zt,l?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return Ec(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function a_(n,i){switch(Du(i),i.tag){case 1:return Hn(i.type)&&yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Fs(),Xt(Gn),Xt(Ln),Xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Xt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Zt),null;case 4:return Fs(),null;case 10:return Bu(i.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var Ho=!1,In=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Bs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){rn(n,i,l)}else a.current=null}function fc(n,i,a){try{a()}catch(l){rn(n,i,l)}}var _p=!1;function l_(n,i){if(Eu=oo,n=Kd(),mu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var T=0,O=-1,H=-1,le=0,ve=0,ye=n,_e=null;t:for(;;){for(var He;ye!==a||f!==0&&ye.nodeType!==3||(O=T+f),ye!==h||l!==0&&ye.nodeType!==3||(H=T+l),ye.nodeType===3&&(T+=ye.nodeValue.length),(He=ye.firstChild)!==null;)_e=ye,ye=He;for(;;){if(ye===n)break t;if(_e===a&&++le===f&&(O=T),_e===h&&++ve===l&&(H=T),(He=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=He}a=O===-1||H===-1?null:{start:O,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:n,selectionRange:a},oo=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,on=Ye.memoizedState,re=i.stateNode,W=re.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:_i(i.type,Ke),on);re.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var oe=i.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){rn(i,i.return,be)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return Ye=_p,_p=!1,Ye}function Ua(n,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&n)===n){var h=f.destroy;f.destroy=void 0,h!==void 0&&fc(i,a,h)}f=f.next}while(f!==l)}}function Vo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function dc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function vp(n){var i=n.alternate;i!==null&&(n.alternate=null,vp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[wa],delete i[Cu],delete i[W0],delete i[X0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function Sp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=So));else if(l!==4&&(n=n.child,n!==null))for(hc(n,i,a),n=n.sibling;n!==null;)hc(n,i,a),n=n.sibling}function pc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(pc(n,i,a),n=n.sibling;n!==null;)pc(n,i,a),n=n.sibling}var Tn=null,vi=!1;function Ar(n,i,a){for(a=a.child;a!==null;)Mp(n,i,a),a=a.sibling}function Mp(n,i,a){if(q&&typeof q.onCommitFiberUnmount=="function")try{q.onCommitFiberUnmount(U,a)}catch{}switch(a.tag){case 5:In||Bs(a,i);case 6:var l=Tn,f=vi;Tn=null,Ar(n,i,a),Tn=l,vi=f,Tn!==null&&(vi?(n=Tn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tn.removeChild(a.stateNode));break;case 18:Tn!==null&&(vi?(n=Tn,a=a.stateNode,n.nodeType===8?Ru(n.parentNode,a):n.nodeType===1&&Ru(n,a),ha(n)):Ru(Tn,a.stateNode));break;case 4:l=Tn,f=vi,Tn=a.stateNode.containerInfo,vi=!0,Ar(n,i,a),Tn=l,vi=f;break;case 0:case 11:case 14:case 15:if(!In&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&fc(a,i,T),f=f.next}while(f!==l)}Ar(n,i,a);break;case 1:if(!In&&(Bs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(O){rn(a,i,O)}Ar(n,i,a);break;case 21:Ar(n,i,a);break;case 22:a.mode&1?(In=(l=In)||a.memoizedState!==null,Ar(n,i,a),In=l):Ar(n,i,a);break;default:Ar(n,i,a)}}function yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new o_),i.forEach(function(l){var f=__.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}}function xi(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:Tn=O.stateNode,vi=!1;break e;case 3:Tn=O.stateNode.containerInfo,vi=!0;break e;case 4:Tn=O.stateNode.containerInfo,vi=!0;break e}O=O.return}if(Tn===null)throw Error(t(160));Mp(h,T,f),Tn=null,vi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(le){rn(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,n),i=i.sibling}function Ep(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(i,n),Ui(n),l&4){try{Ua(3,n,n.return),Vo(3,n)}catch(Ke){rn(n,n.return,Ke)}try{Ua(5,n,n.return)}catch(Ke){rn(n,n.return,Ke)}}break;case 1:xi(i,n),Ui(n),l&512&&a!==null&&Bs(a,a.return);break;case 5:if(xi(i,n),Ui(n),l&512&&a!==null&&Bs(a,a.return),n.flags&32){var f=n.stateNode;try{Je(f,"")}catch(Ke){rn(n,n.return,Ke)}}if(l&4&&(f=n.stateNode,f!=null)){var h=n.memoizedProps,T=a!==null?a.memoizedProps:h,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&h.type==="radio"&&h.name!=null&&zt(f,h),Ae(O,T);var le=Ae(O,h);for(T=0;T<H.length;T+=2){var ve=H[T],ye=H[T+1];ve==="style"?ie(f,ye):ve==="dangerouslySetInnerHTML"?Yt(f,ye):ve==="children"?Je(f,ye):B(f,ve,ye,le)}switch(O){case"input":sn(f,h);break;case"textarea":X(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var He=h.value;He!=null?en(f,!!h.multiple,He,!1):_e!==!!h.multiple&&(h.defaultValue!=null?en(f,!!h.multiple,h.defaultValue,!0):en(f,!!h.multiple,h.multiple?[]:"",!1))}f[wa]=h}catch(Ke){rn(n,n.return,Ke)}}break;case 6:if(xi(i,n),Ui(n),l&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,h=n.memoizedProps;try{f.nodeValue=h}catch(Ke){rn(n,n.return,Ke)}}break;case 3:if(xi(i,n),Ui(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ha(i.containerInfo)}catch(Ke){rn(n,n.return,Ke)}break;case 4:xi(i,n),Ui(n);break;case 13:xi(i,n),Ui(n),f=n.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(_c=Ut())),l&4&&yp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(In=(le=In)||ve,xi(i,n),In=le):xi(i,n),Ui(n),l&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ve&&(n.mode&1)!==0)for(Xe=n,ve=n.child;ve!==null;){for(ye=Xe=ve;Xe!==null;){switch(_e=Xe,He=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ua(4,_e,_e.return);break;case 1:Bs(_e,_e.return);var Ye=_e.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ke){rn(l,a,Ke)}}break;case 5:Bs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Ap(ye);continue}}He!==null?(He.return=_e,Xe=He):Ap(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{f=ye.stateNode,le?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(O=ye.stateNode,H=ye.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=A("display",T))}catch(Ke){rn(n,n.return,Ke)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=le?"":ye.memoizedProps}catch(Ke){rn(n,n.return,Ke)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:xi(i,n),Ui(n),l&4&&yp(n);break;case 21:break;default:xi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(xp(a)){var l=a;break e}a=a.return}throw Error(t(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Je(f,""),l.flags&=-33);var h=Sp(n);pc(n,h,f);break;case 3:case 4:var T=l.stateNode.containerInfo,O=Sp(n);hc(n,O,T);break;default:throw Error(t(161))}}catch(H){rn(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function u_(n,i,a){Xe=n,wp(n)}function wp(n,i,a){for(var l=(n.mode&1)!==0;Xe!==null;){var f=Xe,h=f.child;if(f.tag===22&&l){var T=f.memoizedState!==null||Ho;if(!T){var O=f.alternate,H=O!==null&&O.memoizedState!==null||In;O=Ho;var le=In;if(Ho=T,(In=H)&&!le)for(Xe=f;Xe!==null;)T=Xe,H=T.child,T.tag===22&&T.memoizedState!==null?Rp(f):H!==null?(H.return=T,Xe=H):Rp(f);for(;h!==null;)Xe=h,wp(h),h=h.sibling;Xe=f,Ho=O,In=le}Tp(n)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Xe=h):Tp(n)}}function Tp(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||Vo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!In)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Ah(i,h,l);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ah(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ve=le.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ha(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&dc(i)}catch(_e){rn(i,i.return,_e)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Ap(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Rp(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Vo(4,i)}catch(H){rn(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){rn(i,f,H)}}var h=i.return;try{dc(i)}catch(H){rn(i,h,H)}break;case 5:var T=i.return;try{dc(i)}catch(H){rn(i,T,H)}}}catch(H){rn(i,i.return,H)}if(i===n){Xe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Xe=O;break}Xe=i.return}}var c_=Math.ceil,Wo=P.ReactCurrentDispatcher,mc=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,Rt=0,Sn=null,ln=null,An=0,Qn=0,ks=Mr(0),mn=0,Fa=null,ss=0,Xo=0,gc=0,Oa=null,Wn=null,_c=0,zs=1/0,er=null,qo=!1,vc=null,Rr=null,Yo=!1,Cr=null,$o=0,Ba=0,xc=null,Ko=-1,Zo=0;function Bn(){return(Rt&6)!==0?Ut():Ko!==-1?Ko:Ko=Ut()}function br(n){return(n.mode&1)===0?1:(Rt&2)!==0&&An!==0?An&-An:Y0.transition!==null?(Zo===0&&(Zo=Tt()),Zo):(n=Ze,n!==0||(n=window.event,n=n===void 0?16:bd(n.type)),n)}function Si(n,i,a,l){if(50<Ba)throw Ba=0,xc=null,Error(t(185));Vt(n,a,l),((Rt&2)===0||n!==Sn)&&(n===Sn&&((Rt&2)===0&&(Xo|=a),mn===4&&Pr(n,An)),Xn(n,l),a===1&&Rt===0&&(i.mode&1)===0&&(zs=Ut()+500,wo&&Er()))}function Xn(n,i){var a=n.callbackNode;ft(n,i);var l=tt(n,n===Sn?An:0);if(l===0)a!==null&&dr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(a!=null&&dr(a),i===1)n.tag===0?q0(bp.bind(null,n)):ph(bp.bind(null,n)),H0(function(){(Rt&6)===0&&Er()}),a=null;else{switch(Pi(l)){case 1:a=hr;break;case 4:a=Zr;break;case 16:a=pr;break;case 536870912:a=E;break;default:a=pr}a=Op(a,Cp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Cp(n,i){if(Ko=-1,Zo=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Gs()&&n.callbackNode!==a)return null;var l=tt(n,n===Sn?An:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Jo(n,l);else{i=l;var f=Rt;Rt|=2;var h=Lp();(Sn!==n||An!==i)&&(er=null,zs=Ut()+500,os(n,i));do try{h_();break}catch(O){Pp(n,O)}while(!0);Ou(),Wo.current=h,Rt=f,ln!==null?i=0:(Sn=null,An=0,i=mn)}if(i!==0){if(i===2&&(f=Dt(n),f!==0&&(l=f,i=Sc(n,f))),i===1)throw a=Fa,os(n,0),Pr(n,l),Xn(n,Ut()),a;if(i===6)Pr(n,l);else{if(f=n.current.alternate,(l&30)===0&&!f_(f)&&(i=Jo(n,l),i===2&&(h=Dt(n),h!==0&&(l=h,i=Sc(n,h))),i===1))throw a=Fa,os(n,0),Pr(n,l),Xn(n,Ut()),a;switch(n.finishedWork=f,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:ls(n,Wn,er);break;case 3:if(Pr(n,l),(l&130023424)===l&&(i=_c+500-Ut(),10<i)){if(tt(n,0)!==0)break;if(f=n.suspendedLanes,(f&l)!==l){Bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Au(ls.bind(null,n,Wn,er),i);break}ls(n,Wn,er);break;case 4:if(Pr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,f=-1;0<l;){var T=31-Q(l);h=1<<T,T=i[T],T>f&&(f=T),l&=~h}if(l=f,l=Ut()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*c_(l/1960))-l,10<l){n.timeoutHandle=Au(ls.bind(null,n,Wn,er),l);break}ls(n,Wn,er);break;case 5:ls(n,Wn,er);break;default:throw Error(t(329))}}}return Xn(n,Ut()),n.callbackNode===a?Cp.bind(null,n):null}function Sc(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=Jo(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&Mc(i)),n}function Mc(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function f_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!mi(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(n,i){for(i&=~gc,i&=~Xo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Q(i),l=1<<a;n[a]=-1,i&=~l}}function bp(n){if((Rt&6)!==0)throw Error(t(327));Gs();var i=tt(n,0);if((i&1)===0)return Xn(n,Ut()),null;var a=Jo(n,i);if(n.tag!==0&&a===2){var l=Dt(n);l!==0&&(i=l,a=Sc(n,l))}if(a===1)throw a=Fa,os(n,0),Pr(n,i),Xn(n,Ut()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ls(n,Wn,er),Xn(n,Ut()),null}function yc(n,i){var a=Rt;Rt|=1;try{return n(i)}finally{Rt=a,Rt===0&&(zs=Ut()+500,wo&&Er())}}function as(n){Cr!==null&&Cr.tag===0&&(Rt&6)===0&&Gs();var i=Rt;Rt|=1;var a=ui.transition,l=Ze;try{if(ui.transition=null,Ze=1,n)return n()}finally{Ze=l,ui.transition=a,Rt=i,(Rt&6)===0&&Er()}}function Ec(){Qn=ks.current,Xt(ks)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,G0(a)),ln!==null)for(a=ln.return;a!==null;){var l=a;switch(Du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&yo();break;case 3:Fs(),Xt(Gn),Xt(Ln),Xu();break;case 5:Vu(l);break;case 4:Fs();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:Bu(l.type._context);break;case 22:case 23:Ec()}a=a.return}if(Sn=n,ln=n=Lr(n.current,null),An=Qn=i,mn=0,Fa=null,gc=Xo=ss=0,Wn=Oa=null,ns!==null){for(i=0;i<ns.length;i++)if(a=ns[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var T=h.next;h.next=f,l.next=T}a.pending=l}ns=null}return n}function Pp(n,i){do{var a=ln;try{if(Ou(),Io.current=Bo,Uo){for(var l=Jt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Uo=!1}if(rs=0,xn=pn=Jt=null,Pa=!1,La=0,mc.current=null,a===null||a.return===null){mn=1,Fa=i,ln=null;break}e:{var h=n,T=a.return,O=a,H=i;if(i=An,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,ve=O,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var He=tp(T);if(He!==null){He.flags&=-257,np(He,T,O,h,i),He.mode&1&&ep(h,le,i),i=He,H=le;var Ye=i.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(H),i.updateQueue=Ke}else Ye.add(H);break e}else{if((i&1)===0){ep(h,le,i),wc();break e}H=Error(t(426))}}else if($t&&O.mode&1){var on=tp(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),np(on,T,O,h,i),Uu(Os(H,O));break e}}h=H=Os(H,O),mn!==4&&(mn=2),Oa===null?Oa=[h]:Oa.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var re=Qh(h,H,i);Th(h,re);break e;case 1:O=H;var W=h.type,oe=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Rr===null||!Rr.has(oe)))){h.flags|=65536,i&=-i,h.lanes|=i;var be=jh(h,O,i);Th(h,be);break e}}h=h.return}while(h!==null)}Np(a)}catch(Qe){i=Qe,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function Lp(){var n=Wo.current;return Wo.current=Bo,n===null?Bo:n}function wc(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(ss&268435455)===0&&(Xo&268435455)===0||Pr(Sn,An)}function Jo(n,i){var a=Rt;Rt|=2;var l=Lp();(Sn!==n||An!==i)&&(er=null,os(n,i));do try{d_();break}catch(f){Pp(n,f)}while(!0);if(Ou(),Rt=a,Wo.current=l,ln!==null)throw Error(t(261));return Sn=null,An=0,mn}function d_(){for(;ln!==null;)Dp(ln)}function h_(){for(;ln!==null&&!bi();)Dp(ln)}function Dp(n){var i=Fp(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Np(n):ln=i,mc.current=null}function Np(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=s_(a,i,Qn),a!==null){ln=a;return}}else{if(a=a_(a,i),a!==null){a.flags&=32767,ln=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);mn===0&&(mn=5)}function ls(n,i,a){var l=Ze,f=ui.transition;try{ui.transition=null,Ze=1,p_(n,i,a,l)}finally{ui.transition=f,Ze=l}return null}function p_(n,i,a,l){do Gs();while(Cr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=a.lanes|a.childLanes;if(We(n,h),n===Sn&&(ln=Sn=null,An=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Yo||(Yo=!0,Op(pr,function(){return Gs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=ui.transition,ui.transition=null;var T=Ze;Ze=1;var O=Rt;Rt|=4,mc.current=null,l_(n,a),Ep(a,n),I0(wu),oo=!!Eu,wu=Eu=null,n.current=a,u_(a),$r(),Rt=O,Ze=T,ui.transition=h}else n.current=a;if(Yo&&(Yo=!1,Cr=n,$o=f),h=n.pendingLanes,h===0&&(Rr=null),j(a.stateNode),Xn(n,Ut()),i!==null)for(l=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(qo)throw qo=!1,n=vc,vc=null,n;return($o&1)!==0&&n.tag!==0&&Gs(),h=n.pendingLanes,(h&1)!==0?n===xc?Ba++:(Ba=0,xc=n):Ba=0,Er(),null}function Gs(){if(Cr!==null){var n=Pi($o),i=ui.transition,a=Ze;try{if(ui.transition=null,Ze=16>n?16:n,Cr===null)var l=!1;else{if(n=Cr,Cr=null,$o=0,(Rt&6)!==0)throw Error(t(331));var f=Rt;for(Rt|=4,Xe=n.current;Xe!==null;){var h=Xe,T=h.child;if((Xe.flags&16)!==0){var O=h.deletions;if(O!==null){for(var H=0;H<O.length;H++){var le=O[H];for(Xe=le;Xe!==null;){var ve=Xe;switch(ve.tag){case 0:case 11:case 15:Ua(8,ve,h)}var ye=ve.child;if(ye!==null)ye.return=ve,Xe=ye;else for(;Xe!==null;){ve=Xe;var _e=ve.sibling,He=ve.return;if(vp(ve),ve===le){Xe=null;break}if(_e!==null){_e.return=He,Xe=_e;break}Xe=He}}}var Ye=h.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var on=Ke.sibling;Ke.sibling=null,Ke=on}while(Ke!==null)}}Xe=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,Xe=T;else e:for(;Xe!==null;){if(h=Xe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ua(9,h,h.return)}var re=h.sibling;if(re!==null){re.return=h.return,Xe=re;break e}Xe=h.return}}var W=n.current;for(Xe=W;Xe!==null;){T=Xe;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,Xe=oe;else e:for(T=W;Xe!==null;){if(O=Xe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Vo(9,O)}}catch(Qe){rn(O,O.return,Qe)}if(O===T){Xe=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,Xe=be;break e}Xe=O.return}}if(Rt=f,Er(),q&&typeof q.onPostCommitFiberRoot=="function")try{q.onPostCommitFiberRoot(U,n)}catch{}l=!0}return l}finally{Ze=a,ui.transition=i}}return!1}function Ip(n,i,a){i=Os(a,i),i=Qh(n,i,1),n=Tr(n,i,1),i=Bn(),n!==null&&(Vt(n,1,i),Xn(n,i))}function rn(n,i,a){if(n.tag===3)Ip(n,n,a);else for(;i!==null;){if(i.tag===3){Ip(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){n=Os(a,n),n=jh(i,n,1),i=Tr(i,n,1),n=Bn(),i!==null&&(Vt(i,1,n),Xn(i,n));break}}i=i.return}}function m_(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),i=Bn(),n.pingedLanes|=n.suspendedLanes&a,Sn===n&&(An&a)===a&&(mn===4||mn===3&&(An&130023424)===An&&500>Ut()-_c?os(n,0):gc|=a),Xn(n,i)}function Up(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ie,Ie<<=1,(Ie&130023424)===0&&(Ie=4194304)));var a=Bn();n=Ji(n,i),n!==null&&(Vt(n,i,a),Xn(n,a))}function g_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Up(n,a)}function __(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Up(n,a)}var Fp;Fp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,r_(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,$t&&(i.flags&1048576)!==0&&mh(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Go(n,i),n=i.pendingProps;var f=bs(i,Ln.current);Us(i,a),f=$u(null,i,l,n,f,a);var h=Ku();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(l)?(h=!0,Eo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gu(i),f.updater=ko,i.stateNode=f,f._reactInternals=i,tc(i,l,n,a),i=sc(null,i,l,!0,h,a)):(i.tag=0,$t&&h&&Lu(i),On(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Go(n,i),n=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=x_(l),n=_i(l,n),f){case 0:i=rc(null,i,l,n,a);break e;case 1:i=lp(null,i,l,n,a);break e;case 11:i=ip(null,i,l,n,a);break e;case 14:i=rp(null,i,l,_i(l.type,n),a);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:_i(l,f),rc(n,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:_i(l,f),lp(n,i,l,f,a);case 3:e:{if(up(i),n===null)throw Error(t(387));l=i.pendingProps,h=i.memoizedState,f=h.element,wh(n,i),Do(i,l,null,a);var T=i.memoizedState;if(l=T.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Os(Error(t(423)),i),i=cp(n,i,l,a,f);break e}else if(l!==f){f=Os(Error(t(424)),i),i=cp(n,i,l,a,f);break e}else for(Jn=Sr(i.stateNode.containerInfo.firstChild),Zn=i,$t=!0,gi=null,a=yh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),l===f){i=ji(n,i,a);break e}On(n,i,l,a)}i=i.child}return i;case 5:return Rh(i),n===null&&Iu(i),l=i.type,f=i.pendingProps,h=n!==null?n.memoizedProps:null,T=f.children,Tu(l,f)?T=null:h!==null&&Tu(l,h)&&(i.flags|=32),op(n,i),On(n,i,T,a),i.child;case 6:return n===null&&Iu(i),null;case 13:return fp(n,i,a);case 4:return Hu(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=Ns(i,null,l,a):On(n,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:_i(l,f),ip(n,i,l,f,a);case 7:return On(n,i,i.pendingProps,a),i.child;case 8:return On(n,i,i.pendingProps.children,a),i.child;case 12:return On(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,T=f.value,Gt(bo,l._currentValue),l._currentValue=T,h!==null)if(mi(h.value,T)){if(h.children===f.children&&!Gn.current){i=ji(n,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var O=h.dependencies;if(O!==null){T=h.child;for(var H=O.firstContext;H!==null;){if(H.context===l){if(h.tag===1){H=Qi(-1,a&-a),H.tag=2;var le=h.updateQueue;if(le!==null){le=le.shared;var ve=le.pending;ve===null?H.next=H:(H.next=ve.next,ve.next=H),le.pending=H}}h.lanes|=a,H=h.alternate,H!==null&&(H.lanes|=a),ku(h.return,a,i),O.lanes|=a;break}H=H.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),ku(T,a,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}On(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Us(i,a),f=oi(f),l=l(f),i.flags|=1,On(n,i,l,a),i.child;case 14:return l=i.type,f=_i(l,i.pendingProps),f=_i(l.type,f),rp(n,i,l,f,a);case 15:return sp(n,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:_i(l,f),Go(n,i),i.tag=1,Hn(l)?(n=!0,Eo(i)):n=!1,Us(i,a),Zh(i,l,f),tc(i,l,f,a),sc(null,i,l,!0,n,a);case 19:return hp(n,i,a);case 22:return ap(n,i,a)}throw Error(t(156,i.tag))};function Op(n,i){return Yr(n,i)}function v_(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,l){return new v_(n,i,a,l)}function Tc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x_(n){if(typeof n=="function")return Tc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===se)return 14}return 2}function Lr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Qo(n,i,a,l,f,h){var T=2;if(l=n,typeof n=="function")Tc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case y:return us(a.children,f,h,i);case C:T=8,f|=8;break;case K:return n=ci(12,a,i,f|2),n.elementType=K,n.lanes=h,n;case te:return n=ci(13,a,i,f),n.elementType=te,n.lanes=h,n;case I:return n=ci(19,a,i,f),n.elementType=I,n.lanes=h,n;case Z:return jo(a,f,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case V:T=9;break e;case Y:T=11;break e;case se:T=14;break e;case ce:T=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(T,a,i,f),i.elementType=n,i.type=l,i.lanes=h,i}function us(n,i,a,l){return n=ci(7,n,l,i),n.lanes=a,n}function jo(n,i,a,l){return n=ci(22,n,l,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Ac(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function Rc(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function S_(n,i,a,l,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=At(0),this.expirationTimes=At(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Cc(n,i,a,l,f,h,T,O,H){return n=new S_(n,i,a,O,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ci(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(h),n}function M_(n,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:n,containerInfo:i,implementation:a}}function Bp(n){if(!n)return yr;n=n._reactInternals;e:{if(ii(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Hn(a))return dh(n,a,i)}return i}function kp(n,i,a,l,f,h,T,O,H){return n=Cc(a,l,!0,n,f,h,T,O,H),n.context=Bp(null),a=n.current,l=Bn(),f=br(a),h=Qi(l,f),h.callback=i??null,Tr(a,h,f),n.current.lanes=f,Vt(n,f,l),Xn(n,l),n}function el(n,i,a,l){var f=i.current,h=Bn(),T=br(f);return a=Bp(a),i.context===null?i.context=a:i.pendingContext=a,i=Qi(h,T),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Tr(f,i,T),n!==null&&(Si(n,f,T,h),Lo(n,f,T)),T}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function bc(n,i){zp(n,i),(n=n.alternate)&&zp(n,i)}function y_(){return null}var Gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pc(n){this._internalRoot=n}nl.prototype.render=Pc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=Pc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;as(function(){el(null,n,null,null)}),i[Yi]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Li();n={blockedOn:null,target:n,priority:i};for(var a=0;a<_r.length&&i!==0&&i<_r[a].priority;a++);_r.splice(a,0,n),a===0&&Rd(n)}};function Lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function E_(n,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var le=tl(T);h.call(le)}}var T=kp(i,l,n,0,null,!1,!1,"",Hp);return n._reactRootContainer=T,n[Yi]=T.current,ya(n.nodeType===8?n.parentNode:n),as(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof l=="function"){var O=l;l=function(){var le=tl(H);O.call(le)}}var H=Cc(n,0,!1,null,null,!1,!1,"",Hp);return n._reactRootContainer=H,n[Yi]=H.current,ya(n.nodeType===8?n.parentNode:n),as(function(){el(i,H,a,l)}),H}function rl(n,i,a,l,f){var h=a._reactRootContainer;if(h){var T=h;if(typeof f=="function"){var O=f;f=function(){var H=tl(T);O.call(H)}}el(i,T,n,f)}else T=E_(a,i,n,f,l);return tl(T)}hn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ge(i.pendingLanes);a!==0&&(nn(i,a|1),Xn(i,Ut()),(Rt&6)===0&&(zs=Ut()+500,Er()))}break;case 13:as(function(){var l=Ji(n,1);if(l!==null){var f=Bn();Si(l,n,1,f)}}),bc(n,1)}},mr=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=Bn();Si(i,n,134217728,a)}bc(n,134217728)}},pi=function(n){if(n.tag===13){var i=br(n),a=Ji(n,i);if(a!==null){var l=Bn();Si(a,n,i,l)}bc(n,i)}},Li=function(){return Ze},St=function(n,i){var a=Ze;try{return Ze=n,i()}finally{Ze=a}},de=function(n,i,a){switch(i){case"input":if(sn(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=Mo(l);if(!f)throw Error(t(90));dt(l),sn(l,f)}}}break;case"textarea":X(n,a);break;case"select":i=a.value,i!=null&&en(n,!!a.multiple,i,!1)}},we=yc,Ce=as;var w_={usingClientEntryPoint:!1,Events:[Ta,Rs,Mo,fe,Pe,yc]},ka={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T_={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ci(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{U=sl.inject(T_),q=sl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w_,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(i))throw Error(t(200));return M_(n,i,null,a)},qn.createRoot=function(n,i){if(!Lc(n))throw Error(t(299));var a=!1,l="",f=Gp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Cc(n,1,!1,null,null,a,!1,l,f),n[Yi]=i.current,ya(n.nodeType===8?n.parentNode:n),new Pc(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ci(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return as(n)},qn.hydrate=function(n,i,a){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!Lc(n))throw Error(t(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",T=Gp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=kp(i,null,n,1,a??null,f,!1,h,T),n[Yi]=i.current,ya(n),l)for(n=0;n<l.length;n++)a=l[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new nl(i)},qn.render=function(n,i,a){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(as(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Yi]=null})}),!0):!1},qn.unstable_batchedUpdates=yc,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,l){if(!il(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,a,!1,l)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Zp;function I_(){if(Zp)return Ic.exports;Zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ic.exports=N_(),Ic.exports}var Jp;function U_(){if(Jp)return al;Jp=1;var s=I_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var F_=U_();const O_=tg(F_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="187",B_=0,Qp=1,k_=2,Fl=1,z_=2,Ya=3,ps=0,$n=1,wi=2,na=0,Ka=1,pf=2,jp=3,em=4,G_=5,ea=100,H_=101,V_=102,W_=103,X_=104,q_=200,Y_=201,$_=202,K_=203,ng=204,ig=205,Z_=206,J_=207,Q_=208,j_=209,ev=210,tv=211,nv=212,iv=213,rv=214,mf=0,gf=1,_f=2,Za=3,vf=4,xf=5,Sf=6,Mf=7,rg=0,sv=1,av=2,ur=0,sg=1,ag=2,og=3,ad=4,lg=5,ug=6,cg=7,fg=300,ra=301,Ja=302,Oc=303,Bc=304,yf=1e3,lr=1001,Ef=1002,Cn=1003,ov=1004,ol=1005,Yn=1006,kc=1007,Gr=1008,ni=1009,dg=1010,hg=1011,Qa=1012,od=1013,Vi=1014,ki=1015,Wi=1016,ld=1017,ud=1018,sa=1020,pg=35902,mg=35899,gg=1021,_g=1022,zi=1023,Wr=1026,Hr=1027,vg=1028,cd=1029,ms=1030,fd=1031,dd=1033,Ol=33776,Bl=33777,kl=33778,zl=33779,wf=35840,Tf=35841,Af=35842,Rf=35843,Cf=36196,bf=37492,Pf=37496,Lf=37488,Df=37489,Xl=37490,Nf=37491,If=37808,Uf=37809,Ff=37810,Of=37811,Bf=37812,kf=37813,zf=37814,Gf=37815,Hf=37816,Vf=37817,Wf=37818,Xf=37819,qf=37820,Yf=37821,$f=36492,Kf=36494,Zf=36495,Jf=36283,Qf=36284,ql=36285,jf=36286,lv=3200,ed=0,uv=1,zr="",di="srgb",Yl="srgb-linear",$l="linear",Nt="srgb",zc=7680,cv=519,fv=512,dv=513,hv=514,xg=515,pv=516,mv=517,Sg=518,Mg=519,gv=35044,tm="300 es",Ti=2e3,ja=2001;function _v(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vv(){const s=Kl("canvas");return s.style.display="block",s}const nm={};function im(...s){const e="THREE."+s.shift();console.log(e,...s)}function yg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pt(...s){s=yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Gl(...s){const e=s.join(" ");e in nm||(nm[e]=!0,st(...s))}function xv(s,e,t){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}const Sv={[mf]:mf,[_f]:Sf,[vf]:vf,[Za]:xf,[gf]:gf,[Sf]:_f,[Mf]:Mf,[xf]:Za};class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(t);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=Math.PI/180,Zl=180/Math.PI;function to(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Mv(s,e){return(s%e+e)%e}function Gc(s,e,t){return(1-t)*s+t*e}function yv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ev(s,e){if(e.constructor===Float32Array)return s;const t=hd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function wv(s,e){if(e.constructor===Float32Array)return s;const t=hd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const yd=class yd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yd.prototype.isVector2=!0;let Mt=yd;class la{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,u,c,d){let m=r[o+0],p=r[o+1],x=r[o+2],M=r[o+3],g=u[c+0],S=u[c+1],w=u[c+2],R=u[c+3];if(M!==R||m!==g||p!==S||x!==w){let v=m*g+p*S+x*w+M*R;v<0&&(g=-g,S=-S,w=-w,R=-R,v=-v);let _=1-d;if(v<.9995){const b=Math.acos(v),B=Math.sin(b);_=Math.sin(_*b)/B,d=Math.sin(d*b)/B,m=m*_+g*d,p=p*_+S*d,x=x*_+w*d,M=M*_+R*d}else{m=m*_+g*d,p=p*_+S*d,x=x*_+w*d,M=M*_+R*d;const b=1/Math.sqrt(m*m+p*p+x*x+M*M);m*=b,p*=b,x*=b,M*=b}}e[t]=m,e[t+1]=p,e[t+2]=x,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,u,c){const d=r[o],m=r[o+1],p=r[o+2],x=r[o+3],M=u[c],g=u[c+1],S=u[c+2],w=u[c+3];return e[t]=d*w+x*M+m*S-p*g,e[t+1]=m*w+x*g+p*M-d*S,e[t+2]=p*w+x*S+d*g-m*M,e[t+3]=x*w-d*M-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(o/2),M=d(u/2),g=m(r/2),S=m(o/2),w=m(u/2);switch(c){case"XYZ":this._x=g*x*M+p*S*w,this._y=p*S*M-g*x*w,this._z=p*x*w+g*S*M,this._w=p*x*M-g*S*w;break;case"YXZ":this._x=g*x*M+p*S*w,this._y=p*S*M-g*x*w,this._z=p*x*w-g*S*M,this._w=p*x*M+g*S*w;break;case"ZXY":this._x=g*x*M-p*S*w,this._y=p*S*M+g*x*w,this._z=p*x*w+g*S*M,this._w=p*x*M-g*S*w;break;case"ZYX":this._x=g*x*M-p*S*w,this._y=p*S*M+g*x*w,this._z=p*x*w-g*S*M,this._w=p*x*M+g*S*w;break;case"YZX":this._x=g*x*M+p*S*w,this._y=p*S*M+g*x*w,this._z=p*x*w-g*S*M,this._w=p*x*M-g*S*w;break;case"XZY":this._x=g*x*M-p*S*w,this._y=p*S*M-g*x*w,this._z=p*x*w+g*S*M,this._w=p*x*M+g*S*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],u=t[8],c=t[1],d=t[5],m=t[9],p=t[2],x=t[6],M=t[10],g=r+d+M;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-m)*S,this._y=(u-p)*S,this._z=(c-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(x-m)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+p)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(u-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(c-o)/S,this._x=(u+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,u=e._z,c=e._w,d=t._x,m=t._y,p=t._z,x=t._w;return this._x=r*x+c*d+o*p-u*m,this._y=o*x+c*m+u*d-r*p,this._z=u*x+c*p+r*m-o*d,this._w=c*x-r*d-o*m-u*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,t=Math.sin(t*p)/x,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+u*t,this._w=this._w*m+c*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+u*t,this._w=this._w*m+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ed=class Ed{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*o,this.y=u[1]*t+u[4]*r+u[7]*o,this.z=u[2]*t+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,m=e.w,p=2*(c*o-d*r),x=2*(d*t-u*o),M=2*(u*r-c*t);return this.x=t+m*p+c*M-d*x,this.y=r+m*x+d*p-u*M,this.z=o+m*M+u*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o,this.y=u[1]*t+u[5]*r+u[9]*o,this.z=u[2]*t+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,u=e.z,c=t.x,d=t.y,m=t.z;return this.x=o*m-u*d,this.y=u*c-r*m,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ed.prototype.isVector3=!0;let G=Ed;const Hc=new G,rm=new la,wd=class wd{constructor(e,t,r,o,u,c,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,d,m,p)}set(e,t,r,o,u,c,d,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=u,x[5]=m,x[6]=r,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],d=r[3],m=r[6],p=r[1],x=r[4],M=r[7],g=r[2],S=r[5],w=r[8],R=o[0],v=o[3],_=o[6],b=o[1],B=o[4],P=o[7],F=o[2],N=o[5],y=o[8];return u[0]=c*R+d*b+m*F,u[3]=c*v+d*B+m*N,u[6]=c*_+d*P+m*y,u[1]=p*R+x*b+M*F,u[4]=p*v+x*B+M*N,u[7]=p*_+x*P+M*y,u[2]=g*R+S*b+w*F,u[5]=g*v+S*B+w*N,u[8]=g*_+S*P+w*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return t*c*x-t*d*p-r*u*x+r*d*m+o*u*p-o*c*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8],M=x*c-d*p,g=d*m-x*u,S=p*u-c*m,w=t*M+r*g+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(o*p-x*r)*R,e[2]=(d*r-o*c)*R,e[3]=g*R,e[4]=(x*t-o*m)*R,e[5]=(o*u-d*t)*R,e[6]=S*R,e[7]=(r*m-p*t)*R,e[8]=(c*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,u,c,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*c+p*d)+c+e,-o*p,o*m,-o*(-p*c+m*d)+d+t,0,0,1),this}scale(e,t){return Gl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return Gl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return Gl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wd.prototype.isMatrix3=!0;let lt=wd;const Vc=new lt,sm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tv(){const s={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Nt&&(o.r=cr(o.r),o.g=cr(o.g),o.b=cr(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=ia(o.r),o.g=ia(o.g),o.b=ia(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zr?$l:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Yl]:{primaries:e,whitePoint:r,transfer:$l,toXYZ:sm,fromXYZ:am,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:sm,fromXYZ:am,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const yt=Tv();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hs;class Av{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Hs===void 0&&(Hs=Kl("canvas")),Hs.width=e.width,Hs.height=e.height;const o=Hs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Hs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=cr(u[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(cr(t[r]/255)*255):t[r]=cr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class pd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Wc(o[c].image)):u.push(Wc(o[c]))}else u=Wc(o);r.url=u}return t||(e.images[this.uuid]=r),r}}function Wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Av.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Cv=0;const Xc=new G;class zn extends _s{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=lr,o=lr,u=Yn,c=Gr,d=zi,m=ni,p=zn.DEFAULT_ANISOTROPY,x=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=to(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=fg;zn.DEFAULT_ANISOTROPY=1;const Td=class Td{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,u;const m=e.elements,p=m[0],x=m[4],M=m[8],g=m[1],S=m[5],w=m[9],R=m[2],v=m[6],_=m[10];if(Math.abs(x-g)<.01&&Math.abs(M-R)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(M+R)<.1&&Math.abs(w+v)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(p+1)/2,P=(S+1)/2,F=(_+1)/2,N=(x+g)/4,y=(M+R)/4,C=(w+v)/4;return B>P&&B>F?B<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(B),o=N/r,u=y/r):P>F?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=N/o,u=C/o):F<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(F),r=y/u,o=C/u),this.set(r,o,u,t),this}let b=Math.sqrt((v-w)*(v-w)+(M-R)*(M-R)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(v-w)/b,this.y=(M-R)/b,this.z=(g-x)/b,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Td.prototype.isVector4=!0;let Qt=Td;class bv extends _s{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const o=r.count;for(let u=0;u<o;u++)this.textures[u]=new zn({width:e,height:t,depth:r.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new pd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends bv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Eg extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const eu=class eu{constructor(e,t,r,o,u,c,d,m,p,x,M,g,S,w,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,d,m,p,x,M,g,S,w,R,v)}set(e,t,r,o,u,c,d,m,p,x,M,g,S,w,R,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=u,_[5]=c,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=M,_[14]=g,_[3]=S,_[7]=w,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),u=1/Vs.setFromMatrixColumn(e,1).length(),c=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(u),M=Math.sin(u);if(e.order==="XYZ"){const g=c*x,S=c*M,w=d*x,R=d*M;t[0]=m*x,t[4]=-m*M,t[8]=p,t[1]=S+w*p,t[5]=g-R*p,t[9]=-d*m,t[2]=R-g*p,t[6]=w+S*p,t[10]=c*m}else if(e.order==="YXZ"){const g=m*x,S=m*M,w=p*x,R=p*M;t[0]=g+R*d,t[4]=w*d-S,t[8]=c*p,t[1]=c*M,t[5]=c*x,t[9]=-d,t[2]=S*d-w,t[6]=R+g*d,t[10]=c*m}else if(e.order==="ZXY"){const g=m*x,S=m*M,w=p*x,R=p*M;t[0]=g-R*d,t[4]=-c*M,t[8]=w+S*d,t[1]=S+w*d,t[5]=c*x,t[9]=R-g*d,t[2]=-c*p,t[6]=d,t[10]=c*m}else if(e.order==="ZYX"){const g=c*x,S=c*M,w=d*x,R=d*M;t[0]=m*x,t[4]=w*p-S,t[8]=g*p+R,t[1]=m*M,t[5]=R*p+g,t[9]=S*p-w,t[2]=-p,t[6]=d*m,t[10]=c*m}else if(e.order==="YZX"){const g=c*m,S=c*p,w=d*m,R=d*p;t[0]=m*x,t[4]=R-g*M,t[8]=w*M+S,t[1]=M,t[5]=c*x,t[9]=-d*x,t[2]=-p*x,t[6]=S*M+w,t[10]=g-R*M}else if(e.order==="XZY"){const g=c*m,S=c*p,w=d*m,R=d*p;t[0]=m*x,t[4]=-M,t[8]=p*x,t[1]=g*M+R,t[5]=c*x,t[9]=S*M-w,t[2]=w*M-S,t[6]=d*x,t[10]=R*M+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lv,e,Dv)}lookAt(e,t,r){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Nr.crossVectors(r,jn),Nr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Nr.crossVectors(r,jn)),Nr.normalize(),ll.crossVectors(jn,Nr),o[0]=Nr.x,o[4]=ll.x,o[8]=jn.x,o[1]=Nr.y,o[5]=ll.y,o[9]=jn.y,o[2]=Nr.z,o[6]=ll.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],d=r[4],m=r[8],p=r[12],x=r[1],M=r[5],g=r[9],S=r[13],w=r[2],R=r[6],v=r[10],_=r[14],b=r[3],B=r[7],P=r[11],F=r[15],N=o[0],y=o[4],C=o[8],K=o[12],z=o[1],V=o[5],Y=o[9],te=o[13],I=o[2],se=o[6],ce=o[10],Z=o[14],ee=o[3],$=o[7],J=o[11],D=o[15];return u[0]=c*N+d*z+m*I+p*ee,u[4]=c*y+d*V+m*se+p*$,u[8]=c*C+d*Y+m*ce+p*J,u[12]=c*K+d*te+m*Z+p*D,u[1]=x*N+M*z+g*I+S*ee,u[5]=x*y+M*V+g*se+S*$,u[9]=x*C+M*Y+g*ce+S*J,u[13]=x*K+M*te+g*Z+S*D,u[2]=w*N+R*z+v*I+_*ee,u[6]=w*y+R*V+v*se+_*$,u[10]=w*C+R*Y+v*ce+_*J,u[14]=w*K+R*te+v*Z+_*D,u[3]=b*N+B*z+P*I+F*ee,u[7]=b*y+B*V+P*se+F*$,u[11]=b*C+B*Y+P*ce+F*J,u[15]=b*K+B*te+P*Z+F*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],m=e[9],p=e[13],x=e[2],M=e[6],g=e[10],S=e[14],w=e[3],R=e[7],v=e[11],_=e[15],b=m*S-p*g,B=d*S-p*M,P=d*g-m*M,F=c*S-p*x,N=c*g-m*x,y=c*M-d*x;return t*(R*b-v*B+_*P)-r*(w*b-v*F+_*N)+o*(w*B-R*F+_*y)-u*(w*P-R*N+v*y)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],m=e[2],p=e[6],x=e[10];return t*(c*x-d*p)-r*(u*x-d*m)+o*(u*p-c*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],p=e[7],x=e[8],M=e[9],g=e[10],S=e[11],w=e[12],R=e[13],v=e[14],_=e[15],b=t*d-r*c,B=t*m-o*c,P=t*p-u*c,F=r*m-o*d,N=r*p-u*d,y=o*p-u*m,C=x*R-M*w,K=x*v-g*w,z=x*_-S*w,V=M*v-g*R,Y=M*_-S*R,te=g*_-S*v,I=b*te-B*Y+P*V+F*z-N*K+y*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/I;return e[0]=(d*te-m*Y+p*V)*se,e[1]=(o*Y-r*te-u*V)*se,e[2]=(R*y-v*N+_*F)*se,e[3]=(g*N-M*y-S*F)*se,e[4]=(m*z-c*te-p*K)*se,e[5]=(t*te-o*z+u*K)*se,e[6]=(v*P-w*y-_*B)*se,e[7]=(x*y-g*P+S*B)*se,e[8]=(c*Y-d*z+p*C)*se,e[9]=(r*z-t*Y-u*C)*se,e[10]=(w*N-R*P+_*b)*se,e[11]=(M*P-x*N-S*b)*se,e[12]=(d*K-c*V-m*C)*se,e[13]=(t*V-r*K+o*C)*se,e[14]=(R*B-w*F-v*b)*se,e[15]=(x*F-M*B+g*b)*se,this}scale(e){const t=this.elements,r=e.x,o=e.y,u=e.z;return t[0]*=r,t[4]*=o,t[8]*=u,t[1]*=r,t[5]*=o,t[9]*=u,t[2]*=r,t[6]*=o,t[10]*=u,t[3]*=r,t[7]*=o,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),u=1-r,c=e.x,d=e.y,m=e.z,p=u*c,x=u*d;return this.set(p*c+r,p*d-o*m,p*m+o*d,0,p*d+o*m,x*d+r,x*m-o*c,0,p*m-o*d,x*m+o*c,u*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,u=t._x,c=t._y,d=t._z,m=t._w,p=u+u,x=c+c,M=d+d,g=u*p,S=u*x,w=u*M,R=c*x,v=c*M,_=d*M,b=m*p,B=m*x,P=m*M,F=r.x,N=r.y,y=r.z;return o[0]=(1-(R+_))*F,o[1]=(S+P)*F,o[2]=(w-B)*F,o[3]=0,o[4]=(S-P)*N,o[5]=(1-(g+_))*N,o[6]=(v+b)*N,o[7]=0,o[8]=(w+B)*y,o[9]=(v-b)*y,o[10]=(1-(g+R))*y,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),t.identity(),this;let c=Vs.set(o[0],o[1],o[2]).length();const d=Vs.set(o[4],o[5],o[6]).length(),m=Vs.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Mi.copy(this);const p=1/c,x=1/d,M=1/m;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=M,Mi.elements[9]*=M,Mi.elements[10]*=M,t.setFromRotationMatrix(Mi),r.x=c,r.y=d,r.z=m,this}makePerspective(e,t,r,o,u,c,d=Ti,m=!1){const p=this.elements,x=2*u/(t-e),M=2*u/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let w,R;if(m)w=u/(c-u),R=c*u/(c-u);else if(d===Ti)w=-(c+u)/(c-u),R=-2*c*u/(c-u);else if(d===ja)w=-c/(c-u),R=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=M,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,u,c,d=Ti,m=!1){const p=this.elements,x=2/(t-e),M=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,R;if(m)w=1/(c-u),R=c/(c-u);else if(d===Ti)w=-2/(c-u),R=-(c+u)/(c-u);else if(d===ja)w=-1/(c-u),R=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=M,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};eu.prototype.isMatrix4=!0;let qt=eu;const Vs=new G,Mi=new qt,Lv=new G(0,0,0),Dv=new G(1,1,1),Nr=new G,ll=new G,jn=new G,om=new qt,lm=new la;class Xr{constructor(e=0,t=0,r=0,o=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],m=o[1],p=o[5],x=o[9],M=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-M,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-M,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const um=new G,Ws=new la,tr=new qt,ul=new G,Ga=new G,Iv=new G,Uv=new la,cm=new G(1,0,0),fm=new G(0,1,0),dm=new G(0,0,1),hm={type:"added"},Fv={type:"removed"},Xs={type:"childadded",child:null},qc={type:"childremoved",child:null};class fn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new G,t=new Xr,r=new la,o=new G(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,t){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ul.copy(e):ul.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ga,ul,this.up):tr.lookAt(ul,Ga,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),Ws.setFromRotationMatrix(tr),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fv),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=t-u[0]*t-u[4]*r-u[8]*o,u[13]+=r-u[1]*t-u[5]*r-u[9]*o,u[14]+=o-u[2]*t-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const M=m[p];u(e.shapes,M)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(t){const d=c(e.geometries),m=c(e.materials),p=c(e.textures),x=c(e.images),M=c(e.shapes),g=c(e.skeletons),S=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),M.length>0&&(r.shapes=M),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function c(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}fn.DEFAULT_UP=new G(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class or extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ov={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,u=null,c=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),_=this._getHandJoint(p,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],g=x.position.distanceTo(M.position),S=.02,w=.005;p.inputState.pinching&&g>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ov)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new or;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},cl={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=Mv(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=$c(c,u,e+1/3),this.g=$c(c,u,e),this.b=$c(c,u,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=di){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,t);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return yt.workingToColorSpace(Fn.copy(this),e),Math.round(Et(Fn.r*255,0,255))*65536+Math.round(Et(Fn.g*255,0,255))*256+Math.round(Et(Fn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,o=Fn.g,u=Fn.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let m,p;const x=(d+c)/2;if(d===c)m=0,p=0;else{const M=c-d;switch(p=x<=.5?M/(c+d):M/(2-c-d),c){case r:m=(o-u)/M+(o<u?6:0);break;case o:m=(u-r)/M+2;break;case u:m=(r-o)/M+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=di){yt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,o=Fn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(cl);const r=Gc(Ir.h,cl.h,t),o=Gc(Ir.s,cl.s,t),u=Gc(Ir.l,cl.l,t);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*o,this.g=u[1]*t+u[4]*r+u[7]*o,this.b=u[2]*t+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new gt;gt.NAMES=Tg;class md{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=t}clone(){return new md(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bv extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new G,nr=new G,Kc=new G,ir=new G,qs=new G,Ys=new G,pm=new G,Zc=new G,Jc=new G,Qc=new G,jc=new Qt,ef=new Qt,tf=new Qt;class hi{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,t,r,o,u){yi.subVectors(o,t),nr.subVectors(r,t),Kc.subVectors(e,t);const c=yi.dot(yi),d=yi.dot(nr),m=yi.dot(Kc),p=nr.dot(nr),x=nr.dot(Kc),M=c*p-d*d;if(M===0)return u.set(0,0,0),null;const g=1/M,S=(p*m-d*x)*g,w=(c*x-d*m)*g;return u.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,u,c,d,m){return this.getBarycoord(e,t,r,o,ir)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ir.x),m.addScaledVector(c,ir.y),m.addScaledVector(d,ir.z),m)}static getInterpolatedAttribute(e,t,r,o,u,c){return jc.setScalar(0),ef.setScalar(0),tf.setScalar(0),jc.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jc,u.x),c.addScaledVector(ef,u.y),c.addScaledVector(tf,u.z),c}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),nr.subVectors(e,t),yi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),yi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,u){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,u)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,u=this.c;let c,d;qs.subVectors(o,r),Ys.subVectors(u,r),Zc.subVectors(e,r);const m=qs.dot(Zc),p=Ys.dot(Zc);if(m<=0&&p<=0)return t.copy(r);Jc.subVectors(e,o);const x=qs.dot(Jc),M=Ys.dot(Jc);if(x>=0&&M<=x)return t.copy(o);const g=m*M-x*p;if(g<=0&&m>=0&&x<=0&&m-x>0)return c=m/(m-x),t.copy(r).addScaledVector(qs,c);Qc.subVectors(e,u);const S=qs.dot(Qc),w=Ys.dot(Qc);if(w>=0&&S<=w)return t.copy(u);const R=S*p-m*w;if(R<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(Ys,d);const v=x*w-S*M;if(v<=0&&M-x>=0&&S-w>=0)return pm.subVectors(u,o),d=(M-x)/(M-x+(S-w)),t.copy(o).addScaledVector(pm,d);const _=1/(v+R+g);return c=R*_,d=g*_,t.copy(r).addScaledVector(qs,c).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ei):Ei.fromBufferAttribute(u,c),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),dl.subVectors(this.max,Ha),$s.subVectors(e.a,Ha),Ks.subVectors(e.b,Ha),Zs.subVectors(e.c,Ha),Ur.subVectors(Ks,$s),Fr.subVectors(Zs,Ks),cs.subVectors($s,Zs);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-cs.z,cs.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,cs.z,0,-cs.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-cs.y,cs.x,0];return!nf(t,$s,Ks,Zs,dl)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,$s,Ks,Zs,dl))?!1:(hl.crossVectors(Ur,Fr),t=[hl.x,hl.y,hl.z],nf(t,$s,Ks,Zs,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new G,new G,new G,new G,new G,new G,new G,new G],Ei=new G,fl=new no,$s=new G,Ks=new G,Zs=new G,Ur=new G,Fr=new G,cs=new G,Ha=new G,dl=new G,hl=new G,fs=new G;function nf(s,e,t,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){fs.fromArray(s,u);const d=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),m=e.dot(fs),p=t.dot(fs),x=r.dot(fs);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const un=new G,pl=new Mt;let kv=0;class Vr extends _s{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=gv,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=e!==void 0?hd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,u){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),u=this._normalize(u)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ev(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):wv(e,this.array)}}class Ag extends Vr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rg extends Vr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jt extends Vr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const zv=new no,Va=new G,rf=new G;class io{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):zv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Va,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(rf)),this.expandByPoint(Va.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gv=0;const fi=new qt,sf=new fn,Js=new G,ei=new no,Wa=new no,yn=new G;class Kt extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_v(e)?Rg:Ag)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const u=e[o];t.setXYZ(o,u.x,u.y,u.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const u=t[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const d=t[u];Wa.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ei.min,Wa.min),ei.expandByPoint(yn),yn.addVectors(ei.max,Wa.max),ei.expandByPoint(yn)):(ei.expandByPoint(Wa.min),ei.expandByPoint(Wa.max))}ei.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)yn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let u=0,c=t.length;u<c;u++){const d=t[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)yn.fromBufferAttribute(d,p),m&&(Js.fromBufferAttribute(e,p),yn.add(Js)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,u=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Vr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],m=[],p=new Uint8Array(r.count);for(let K=0;K<r.count;K++)d[K]=new G,m[K]=new G;const x=new G,M=new G,g=new G,S=new Mt,w=new Mt,R=new Mt,v=new G,_=new G;function b(K,z,V){p[K]=p[z]=p[V]=1,x.fromBufferAttribute(r,K),M.fromBufferAttribute(r,z),g.fromBufferAttribute(r,V),S.fromBufferAttribute(u,K),w.fromBufferAttribute(u,z),R.fromBufferAttribute(u,V),M.sub(x),g.sub(x),w.sub(S),R.sub(S);const Y=1/(w.x*R.y-R.x*w.y);isFinite(Y)&&(v.copy(M).multiplyScalar(R.y).addScaledVector(g,-w.y).multiplyScalar(Y),_.copy(g).multiplyScalar(w.x).addScaledVector(M,-R.x).multiplyScalar(Y),d[K].add(v),d[z].add(v),d[V].add(v),m[K].add(_),m[z].add(_),m[V].add(_))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let K=0,z=B.length;K<z;++K){const V=B[K],Y=V.start,te=V.count;for(let I=Y,se=Y+te;I<se;I+=3)b(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const P=new G,F=new G,N=new G,y=new G;function C(K){N.fromBufferAttribute(o,K),y.copy(N);const z=d[K];P.copy(z),P.sub(N.multiplyScalar(N.dot(z))).normalize(),F.crossVectors(y,z);const Y=F.dot(m[K])<0?-1:1;c.setXYZW(K,P.x,P.y,P.z,Y)}for(let K=0,z=r.count;K<z;++K)p[K]&&C(K);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Vr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new G,u=new G,c=new G,d=new G,m=new G,p=new G,x=new G,M=new G;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,R),c.fromBufferAttribute(t,v),x.subVectors(c,u),M.subVectors(o,u),x.cross(M),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),d.add(x),m.add(x),p.add(x),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),u.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),x.subVectors(c,u),M.subVectors(o,u),x.cross(M),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,M=d.normalized,g=new p.constructor(m.length*x);let S=0,w=0;for(let R=0,v=m.length;R<v;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*x;for(let _=0;_<x;_++)g[w++]=p[S++]}return new Vr(g,x,M)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);t.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,M=p.length;x<M;x++){const g=p[x],S=e(g,r);m.push(S)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let M=0,g=p.length;M<g;M++){const S=p[M];x.push(S.toJSON(e.data))}x.length>0&&(o[m]=x,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const u=e.morphAttributes;for(const p in u){const x=[],M=u[p];for(let g=0,S=M.length;g<S;g++)x.push(M[g].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const M=c[p];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new G,Hv=new G,Vv=new lt;class kr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=af.subVectors(r,t).cross(Hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(af),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Vv.getNormalMatrix(e),o=this.coplanarPoint(af).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wv=0;class vs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ka,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const m=u[d];delete m.metadata,c.push(m)}return c}if(t){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new kr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new G,of=new G,ml=new G,gl=new G;class gd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){of.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),gl.copy(this.origin).sub(of);const u=e.distanceTo(t)*.5,c=-this.direction.dot(ml),d=gl.dot(this.direction),m=-gl.dot(ml),p=gl.lengthSq(),x=Math.abs(1-c*c);let M,g,S,w;if(x>0)if(M=c*m-d,g=c*d-m,w=u*x,M>=0)if(g>=-w)if(g<=w){const R=1/x;M*=R,g*=R,S=M*(M+c*g+2*d)+g*(c*M+g+2*m)+p}else g=u,M=Math.max(0,-(c*g+d)),S=-M*M+g*(g+2*m)+p;else g=-u,M=Math.max(0,-(c*g+d)),S=-M*M+g*(g+2*m)+p;else g<=-w?(M=Math.max(0,-(-c*u+d)),g=M>0?-u:Math.min(Math.max(-u,-m),u),S=-M*M+g*(g+2*m)+p):g<=w?(M=0,g=Math.min(Math.max(-u,-m),u),S=g*(g+2*m)+p):(M=Math.max(0,-(c*u+d)),g=M>0?u:Math.min(Math.max(-u,-m),u),S=-M*M+g*(g+2*m)+p);else g=c>0?-u:u,M=Math.max(0,-(c*g+d)),S=-M*M+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(of).addScaledVector(ml,g),S}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,m=r+c;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,u,c,d,m;const p=1/this.direction.x,x=1/this.direction.y,M=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(u=(e.min.y-g.y)*x,c=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,c=(e.min.y-g.y)*x),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),M>=0?(d=(e.min.z-g.z)*M,m=(e.max.z-g.z)*M):(d=(e.max.z-g.z)*M,m=(e.min.z-g.z)*M),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,o,u){const c=this.origin,d=this.direction,m=d.x,p=d.y,x=d.z,M=e.x-c.x,g=e.y-c.y,S=e.z-c.z,w=t.x-c.x,R=t.y-c.y,v=t.z-c.z,_=r.x-c.x,b=r.y-c.y,B=r.z-c.z,P=Math.abs(m),F=Math.abs(p),N=Math.abs(x);let y,C,K,z,V,Y,te,I,se,ce,Z,ee;if(P>=F&&P>=N?(K=m,Y=M,se=w,ee=_,m>=0?(y=p,C=x,z=g,V=S,te=R,I=v,ce=b,Z=B):(y=x,C=p,z=S,V=g,te=v,I=R,ce=B,Z=b)):F>=N?(K=p,Y=g,se=R,ee=b,p>=0?(y=x,C=m,z=S,V=M,te=v,I=w,ce=B,Z=_):(y=m,C=x,z=M,V=S,te=w,I=v,ce=_,Z=B)):(K=x,Y=S,se=v,ee=B,x>=0?(y=m,C=p,z=M,V=g,te=w,I=R,ce=_,Z=b):(y=p,C=m,z=g,V=M,te=R,I=w,ce=b,Z=_)),K===0)return null;const $=y/K,J=C/K,D=1/K,ne=z-$*Y,Le=V-J*Y,ae=te-$*se,me=I-J*se,Me=ce-$*ee,Fe=Z-J*ee,ge=Me*me-Fe*ae,Be=ne*Fe-Le*Me,xt=ae*Le-me*ne;if(o){if(ge<0||Be<0||xt<0)return null}else if((ge<0||Be<0||xt<0)&&(ge>0||Be>0||xt>0))return null;const je=ge+Be+xt;if(je===0)return null;const dt=D*(ge*Y+Be*se+xt*ee);return(je>0?dt<0:dt>0)?null:this.at(dt/je,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vl extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mm=new qt,ds=new gd,_l=new io,gm=new G,vl=new G,xl=new G,Sl=new G,lf=new G,Ml=new G,_m=new G,yl=new G;class Ft extends fn{constructor(e=new Kt,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){Ml.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],M=u[m];x!==0&&(lf.fromBufferAttribute(M,e),c?Ml.addScaledVector(lf,x):Ml.addScaledVector(lf.sub(t),x))}t.add(Ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(u),ds.copy(e.ray).recast(e.near),!(_l.containsPoint(ds.origin)===!1&&(ds.intersectSphere(_l,gm)===null||ds.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(u).invert(),ds.copy(e.ray).applyMatrix4(mm),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,r){let o;const u=this.geometry,c=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,M=u.attributes.normal,g=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=c[v.materialIndex],b=Math.max(v.start,S.start),B=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let P=b,F=B;P<F;P+=3){const N=d.getX(P),y=d.getX(P+1),C=d.getX(P+2);o=El(this,_,e,r,p,x,M,N,y,C),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let v=w,_=R;v<_;v+=3){const b=d.getX(v),B=d.getX(v+1),P=d.getX(v+2);o=El(this,c,e,r,p,x,M,b,B,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=c[v.materialIndex],b=Math.max(v.start,S.start),B=Math.min(m.count,Math.min(v.start+v.count,S.start+S.count));for(let P=b,F=B;P<F;P+=3){const N=P,y=P+1,C=P+2;o=El(this,_,e,r,p,x,M,N,y,C),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let v=w,_=R;v<_;v+=3){const b=v,B=v+1,P=v+2;o=El(this,c,e,r,p,x,M,b,B,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Xv(s,e,t,r,o,u,c,d){let m;if(e.side===$n?m=r.intersectTriangle(c,u,o,!0,d):m=r.intersectTriangle(o,u,c,e.side===ps,d),m===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(yl);return p<t.near||p>t.far?null:{distance:p,point:yl.clone(),object:s}}function El(s,e,t,r,o,u,c,d,m,p){s.getVertexPosition(d,vl),s.getVertexPosition(m,xl),s.getVertexPosition(p,Sl);const x=Xv(s,e,t,r,vl,xl,Sl,_m);if(x){const M=new G;hi.getBarycoord(_m,vl,xl,Sl,M),o&&(x.uv=hi.getInterpolatedAttribute(o,d,m,p,M,new Mt)),u&&(x.uv1=hi.getInterpolatedAttribute(u,d,m,p,M,new Mt)),c&&(x.normal=hi.getInterpolatedAttribute(c,d,m,p,M,new G),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new G,materialIndex:0};hi.getNormal(vl,xl,Sl,g.normal),x.face=g,x.barycoord=M}return x}class qv extends zn{constructor(e=null,t=1,r=1,o,u,c,d,m,p=Cn,x=Cn,M,g){super(null,c,d,m,p,x,o,u,M,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hs=new io,Yv=new Mt(.5,.5),wl=new G;class eo{constructor(e=new kr,t=new kr,r=new kr,o=new kr,u=new kr,c=new kr){this.planes=[e,t,r,o,u,c]}set(e,t,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ti,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],m=u[2],p=u[3],x=u[4],M=u[5],g=u[6],S=u[7],w=u[8],R=u[9],v=u[10],_=u[11],b=u[12],B=u[13],P=u[14],F=u[15];if(o[0].setComponents(p-c,S-x,_-w,F-b).normalize(),o[1].setComponents(p+c,S+x,_+w,F+b).normalize(),o[2].setComponents(p+d,S+M,_+R,F+B).normalize(),o[3].setComponents(p-d,S-M,_-R,F-B).normalize(),r)o[4].setComponents(m,g,v,P).normalize(),o[5].setComponents(p-m,S-g,_-v,F-P).normalize();else if(o[4].setComponents(p-m,S-g,_-v,F-P).normalize(),t===Ti)o[5].setComponents(p+m,S+g,_+v,F+P).normalize();else if(t===ja)o[5].setComponents(m,g,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=Yv.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(wl.x=o.normal.x>0?e.max.x:e.min.x,wl.y=o.normal.y>0?e.max.y:e.min.y,wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vm=new qt;class _d{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const u=t[o];vm.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),r[o]===void 0&&(r[o]=new eo),r[o].setFromProjectionMatrix(vm,u.coordinateSystem,u.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new eo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new _d().copy(this)}}class Rn extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new G,Ql=new G,xm=new qt,Xa=new gd,Tl=new io,uf=new G,Sm=new G;class Cg extends fn{constructor(e=new Kt,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,u=t.count;o<u;o++)Jl.fromBufferAttribute(t,o-1),Ql.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Jl.distanceTo(Ql);e.setAttribute("lineDistance",new jt(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=u,e.ray.intersectsSphere(Tl)===!1)return;xm.copy(o).invert(),Xa.copy(e.ray).applyMatrix4(xm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const S=Math.max(0,c.start),w=Math.min(x.count,c.start+c.count);for(let R=S,v=w-1;R<v;R+=p){const _=x.getX(R),b=x.getX(R+1),B=Al(this,e,Xa,m,_,b,R);B&&t.push(B)}if(this.isLineLoop){const R=x.getX(w-1),v=x.getX(S),_=Al(this,e,Xa,m,R,v,w-1);_&&t.push(_)}}else{const S=Math.max(0,c.start),w=Math.min(g.count,c.start+c.count);for(let R=S,v=w-1;R<v;R+=p){const _=Al(this,e,Xa,m,R,R+1,R);_&&t.push(_)}if(this.isLineLoop){const R=Al(this,e,Xa,m,w-1,S,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Al(s,e,t,r,o,u,c){const d=s.geometry.attributes.position;if(Jl.fromBufferAttribute(d,o),Ql.fromBufferAttribute(d,u),t.distanceSqToSegment(Jl,Ql,uf,Sm)>r)return;uf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(uf);if(!(p<e.near||p>e.far))return{distance:p,point:Sm.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const Mm=new G,ym=new G;class En extends Cg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,u=t.count;o<u;o+=2)Mm.fromBufferAttribute(t,o),ym.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Mm.distanceTo(ym);e.setAttribute("lineDistance",new jt(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bg extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new qt,td=new gd,Rl=new io,Cl=new G;class $v extends fn{constructor(e=new Kt,t=new bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(o),Rl.radius+=u,e.ray.intersectsSphere(Rl)===!1)return;Em.copy(o).invert(),td.copy(e.ray).applyMatrix4(Em);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,M=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let w=g,R=S;w<R;w++){const v=p.getX(w);Cl.fromBufferAttribute(M,v),wm(Cl,v,m,o,e,t,this)}}else{const g=Math.max(0,c.start),S=Math.min(M.count,c.start+c.count);for(let w=g,R=S;w<R;w++)Cl.fromBufferAttribute(M,w),wm(Cl,w,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function wm(s,e,t,r,o,u,c){const d=td.distanceSqToPoint(s);if(d<t){const m=new G;td.closestPointToPoint(s,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Pg extends zn{constructor(e=[],t=ra,r,o,u,c,d,m,p,x){super(e,t,r,o,u,c,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends zn{constructor(e,t,r=Vi,o,u,c,d=Cn,m=Cn,p,x=Wr,M=1){if(x!==Wr&&x!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:M};super(g,o,u,c,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Lg extends aa{constructor(e,t=Vi,r=ra,o,u,c=Cn,d=Cn,m,p=Wr){const x={width:e,height:e,depth:1},M=[x,x,x,x,x,x];super(e,e,t,r,o,u,c,d,m,p),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dg extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cn extends Kt{constructor(e=1,t=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],p=[],x=[],M=[];let g=0,S=0;w("z","y","x",-1,-1,r,t,e,c,u,0),w("z","y","x",1,-1,r,t,-e,c,u,1),w("x","z","y",1,1,e,r,t,o,c,2),w("x","z","y",1,-1,e,r,-t,o,c,3),w("x","y","z",1,-1,e,t,r,o,u,4),w("x","y","z",-1,-1,e,t,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(M,2));function w(R,v,_,b,B,P,F,N,y,C,K){const z=P/y,V=F/C,Y=P/2,te=F/2,I=N/2,se=y+1,ce=C+1;let Z=0,ee=0;const $=new G;for(let J=0;J<ce;J++){const D=J*V-te;for(let ne=0;ne<se;ne++){const Le=ne*z-Y;$[R]=Le*b,$[v]=D*B,$[_]=I,p.push($.x,$.y,$.z),$[R]=0,$[v]=0,$[_]=N>0?1:-1,x.push($.x,$.y,$.z),M.push(ne/y),M.push(1-J/C),Z+=1}}for(let J=0;J<C;J++)for(let D=0;D<y;D++){const ne=g+D+se*J,Le=g+D+se*(J+1),ae=g+(D+1)+se*(J+1),me=g+(D+1)+se*J;m.push(ne,Le,me),m.push(Le,ae,me),ee+=6}d.addGroup(S,ee,K),S+=ee,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ta extends Kt{constructor(e=1,t=1,r=1,o=32,u=1,c=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:m};const p=this;o=Math.floor(o),u=Math.floor(u);const x=[],M=[],g=[],S=[];let w=0;const R=[],v=r/2;let _=0;b(),c===!1&&(e>0&&B(!0),t>0&&B(!1)),this.setIndex(x),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(S,2));function b(){const P=new G,F=new G;let N=0;const y=(t-e)/r;for(let C=0;C<=u;C++){const K=[],z=C/u,V=z*(t-e)+e;for(let Y=0;Y<=o;Y++){const te=Y/o,I=te*m+d,se=Math.sin(I),ce=Math.cos(I);F.x=V*se,F.y=-z*r+v,F.z=V*ce,M.push(F.x,F.y,F.z),P.set(se,y,ce).normalize(),g.push(P.x,P.y,P.z),S.push(te,1-z),K.push(w++)}R.push(K)}for(let C=0;C<o;C++)for(let K=0;K<u;K++){const z=R[K][C],V=R[K+1][C],Y=R[K+1][C+1],te=R[K][C+1];(e>0||K!==0)&&(x.push(z,V,te),N+=3),(t>0||K!==u-1)&&(x.push(V,Y,te),N+=3)}p.addGroup(_,N,0),_+=N}function B(P){const F=w,N=new Mt,y=new G;let C=0;const K=P===!0?e:t,z=P===!0?1:-1;for(let Y=1;Y<=o;Y++)M.push(0,v*z,0),g.push(0,z,0),S.push(.5,.5),w++;const V=w;for(let Y=0;Y<=o;Y++){const I=Y/o*m+d,se=Math.cos(I),ce=Math.sin(I);y.x=K*ce,y.y=v*z,y.z=K*se,M.push(y.x,y.y,y.z),g.push(0,z,0),N.x=se*.5+.5,N.y=ce*.5*z+.5,S.push(N.x,N.y),w++}for(let Y=0;Y<o;Y++){const te=F+Y,I=V+Y;P===!0?x.push(I,I+1,te):x.push(I+1,I,te),C+=3}p.addGroup(_,C,P===!0?1:2),_+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const bl=new G,Pl=new G,cf=new G,Ll=new hi;class ar extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),u=Math.cos(Hl*t),c=e.getIndex(),d=e.getAttribute("position"),m=c?c.count:d.count,p=[0,0,0],x=["a","b","c"],M=new Array(3),g=new Map,S=[];for(let w=0;w<m;w+=3){c?(p[0]=c.getX(w),p[1]=c.getX(w+1),p[2]=c.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:R,b:v,c:_}=Ll;if(R.fromBufferAttribute(d,p[0]),v.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Ll.getNormal(cf),M[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,M[1]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,M[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let b=0;b<3;b++){const B=(b+1)%3,P=M[b],F=M[B],N=Ll[x[b]],y=Ll[x[B]],C=`${P}_${F}`,K=`${F}_${P}`,z=g.get(K);z?(cf.dot(z.normal)<=u&&(S.push(N.x,N.y,N.z),S.push(y.x,y.y,y.z)),g.set(K,null)):g.has(C)||g.set(C,{index0:p[b],index1:p[B],normal:cf.clone()})}}for(const w of g.values())if(w){const{index0:R,index1:v}=w;bl.fromBufferAttribute(d,R),Pl.fromBufferAttribute(d,v),S.push(bl.x,bl.y,bl.z),S.push(Pl.x,Pl.y,Pl.z)}this.setAttribute("position",new jt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ro extends Kt{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const u=e/2,c=t/2,d=Math.floor(r),m=Math.floor(o),p=d+1,x=m+1,M=e/d,g=t/m,S=[],w=[],R=[],v=[];for(let _=0;_<x;_++){const b=_*g-c;for(let B=0;B<p;B++){const P=B*M-u;w.push(P,-b,0),R.push(0,0,1),v.push(B/d),v.push(1-_/m)}}for(let _=0;_<m;_++)for(let b=0;b<d;b++){const B=b+p*_,P=b+p*(_+1),F=b+1+p*(_+1),N=b+1+p*_;S.push(B,P,N),S.push(P,F,N)}this.setIndex(S),this.setAttribute("position",new jt(w,3)),this.setAttribute("normal",new jt(R,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class vd extends Kt{constructor(e=.5,t=1,r=32,o=1,u=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:u,thetaLength:c},r=Math.max(3,r),o=Math.max(1,o);const d=[],m=[],p=[],x=[];let M=e;const g=(t-e)/o,S=new G,w=new Mt;for(let R=0;R<=o;R++){for(let v=0;v<=r;v++){const _=u+v/r*c;S.x=M*Math.cos(_),S.y=M*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,x.push(w.x,w.y)}M+=g}for(let R=0;R<o;R++){const v=R*(r+1);for(let _=0;_<r;_++){const b=_+v,B=b,P=b+r+1,F=b+r+2,N=b+1;d.push(B,P,N),d.push(P,F,N)}}this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xd extends Kt{constructor(e=1,t=32,r=16,o=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(c+d,Math.PI);let p=0;const x=[],M=new G,g=new G,S=[],w=[],R=[],v=[];for(let _=0;_<=r;_++){const b=[],B=_/r,P=c+B*d,F=e*Math.cos(P),N=Math.sqrt(e*e-F*F);let y=0;_===0&&c===0?y=.5/t:_===r&&m===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const K=C/t,z=o+K*u;M.x=-N*Math.cos(z),M.y=F,M.z=N*Math.sin(z),w.push(M.x,M.y,M.z),g.copy(M).normalize(),R.push(g.x,g.y,g.z),v.push(K+y,1-B),b.push(p++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const B=x[_][b+1],P=x[_][b],F=x[_+1][b],N=x[_+1][b+1];(_!==0||c>0)&&S.push(B,P,N),(_!==r-1||m<Math.PI)&&S.push(P,F,N)}this.setIndex(S),this.setAttribute("position",new jt(w,3)),this.setAttribute("normal",new jt(R,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Tm(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Tm(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[t][r]=u}else e[t][r]=o.slice();else e[t][r]=o}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const r=oa(s[t]);for(const o in r)e[o]=r[o]}return e}function Tm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Zv={clone:oa,merge:kn};var Jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Mt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new G().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new qt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jv extends gs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Or extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ex extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tx extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tu extends fn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ff=new qt,Am=new G,Rm=new G;class Sd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Am.setFromMatrixPosition(e.matrixWorld),t.position.copy(Am),Rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ff,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,c=o?o.z/u.x:1,d=o?o.w/u.y:1,m=o?o.x/u.x:0,p=o?o.y/u.y:0;e.coordinateSystem===ja||e.reversedDepth?t.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dl=new G,Nl=new la,Fi=new G;class Ig extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dl,Nl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Nl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Dl,Nl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Nl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new G,Cm=new Mt,bm=new Mt;class ti extends Ig{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,bm),t.subVectors(bm,Cm)}setViewOffset(e,t,r,o,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;u+=c.offsetX*o/m,t-=c.offsetY*r/p,o*=c.width/m,r*=c.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nx extends Sd{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Zl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,u=e.distance||t.far;(r!==t.fov||o!==t.aspect||u!==t.far)&&(t.fov=r,t.aspect=o,t.far=u,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ix extends tu{constructor(e,t,r=0,o=Math.PI/3,u=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=r,this.angle=o,this.penumbra=u,this.decay=c,this.map=null,this.shadow=new nx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class rx extends Sd{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}}class Pm extends tu{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ug extends Ig{constructor(e=-1,t=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sx extends Sd{constructor(){super(new Ug(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new sx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ax extends tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qs=-90,js=1;class nd extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Qs,js,e,t);o.layers=this.layers,this.add(o);const u=new ti(Qs,js,e,t);u.layers=this.layers,this.add(u);const c=new ti(Qs,js,e,t);c.layers=this.layers,this.add(c);const d=new ti(Qs,js,e,t);d.layers=this.layers,this.add(d);const m=new ti(Qs,js,e,t);m.layers=this.layers,this.add(m);const p=new ti(Qs,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,u,c,d,m]=t;for(const p of t)this.remove(p);if(e===Ti)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ja)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,m,p,x]=this.children,M=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(M,g,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class ox extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class lx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class ux extends En{constructor(e=10,t=10,r=4473924,o=8947848){r=new gt(r),o=new gt(o);const u=t/2,c=e/t,d=e/2,m=[],p=[];for(let g=0,S=0,w=-d;g<=t;g++,w+=c){m.push(-d,0,w,d,0,w),m.push(w,0,-d,w,0,d);const R=g===u?r:o;R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3}const x=new Kt;x.setAttribute("position",new jt(m,3)),x.setAttribute("color",new jt(p,3));const M=new Rn({vertexColors:!0,toneMapped:!1});super(x,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Dm(s,e,t,r){const o=cx(r);switch(t){case gg:return s*e;case vg:return s*e/o.components*o.byteLength;case cd:return s*e/o.components*o.byteLength;case ms:return s*e*2/o.components*o.byteLength;case fd:return s*e*2/o.components*o.byteLength;case _g:return s*e*3/o.components*o.byteLength;case zi:return s*e*4/o.components*o.byteLength;case dd:return s*e*4/o.components*o.byteLength;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Rf:return Math.max(s,16)*Math.max(e,8)/4;case wf:case Af:return Math.max(s,8)*Math.max(e,8)/2;case Cf:case bf:case Lf:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pf:case Xl:case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $f:case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jf:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ql:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cx(s){switch(s){case ni:case dg:return{byteLength:1,components:1};case Qa:case hg:case Wi:return{byteLength:2,components:1};case ld:case ud:return{byteLength:2,components:4};case Vi:case od:case ki:return{byteLength:4,components:1};case pg:case mg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let s=null,e=!1,t=null,r=null;function o(u,c){r=s.requestAnimationFrame(o),t(u,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function fx(s){const e=new WeakMap;function t(d,m){const p=d.array,x=d.usage,M=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,m,p){const x=m.array,M=m.updateRanges;if(s.bindBuffer(p,d),M.length===0)s.bufferSubData(p,0,x);else{M.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<M.length;S++){const w=M[g],R=M[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,M[g]=R)}M.length=g+1;for(let S=0,w=M.length;S<w;S++){const R=M[S];s.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:u,update:c}}var dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,Mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ax=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ux=`#define PI 3.141592653589793
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
} // validated`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,uS=`uniform sampler2D dfgLUT;
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
}`,cS=`
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MS=`#if defined( USE_POINTS_UV )
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
#endif`,yS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ES=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TS=`#if defined( USE_MORPHCOLORS )
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
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IS=`#ifdef USE_NORMALMAP
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
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZS=`float getShadowMask() {
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
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform float backgroundBlurriness;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,xM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,CM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,PM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,IM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,OM=`#define TOON
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
}`,BM=`#define TOON
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
}`,kM=`uniform float size;
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
}`,zM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,HM=`uniform vec3 color;
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
}`,VM=`uniform float rotation;
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
}`,WM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:dx,alphahash_pars_fragment:hx,alphamap_fragment:px,alphamap_pars_fragment:mx,alphatest_fragment:gx,alphatest_pars_fragment:_x,aomap_fragment:vx,aomap_pars_fragment:xx,batching_pars_vertex:Sx,batching_vertex:Mx,begin_vertex:yx,beginnormal_vertex:Ex,bsdfs:wx,iridescence_fragment:Tx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Px,color_fragment:Lx,color_pars_fragment:Dx,color_pars_vertex:Nx,color_vertex:Ix,common:Ux,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Ox,displacementmap_vertex:Bx,emissivemap_fragment:kx,emissivemap_pars_fragment:zx,colorspace_fragment:Gx,colorspace_pars_fragment:Hx,envmap_fragment:Vx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:iS,envmap_vertex:Yx,fog_vertex:$x,fog_pars_vertex:Kx,fog_fragment:Zx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:jx,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:aS,lights_phong_pars_fragment:oS,lights_physical_fragment:lS,lights_physical_pars_fragment:uS,lights_fragment_begin:cS,lights_fragment_maps:fS,lights_fragment_end:dS,lightprobes_pars_fragment:hS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:_S,map_fragment:vS,map_pars_fragment:xS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:yS,metalnessmap_pars_fragment:ES,morphinstance_vertex:wS,morphcolor_vertex:TS,morphnormal_vertex:AS,morphtarget_pars_vertex:RS,morphtarget_vertex:CS,normal_fragment_begin:bS,normal_fragment_maps:PS,normal_pars_fragment:LS,normal_pars_vertex:DS,normal_vertex:NS,normalmap_pars_fragment:IS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:OS,iridescence_pars_fragment:BS,opaque_fragment:kS,packing:zS,premultiplied_alpha_fragment:GS,project_vertex:HS,dithering_fragment:VS,dithering_pars_fragment:WS,roughnessmap_fragment:XS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:$S,shadowmap_vertex:KS,shadowmask_pars_fragment:ZS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:jS,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmission_fragment:sM,transmission_pars_fragment:aM,uv_pars_fragment:oM,uv_pars_vertex:lM,uv_vertex:uM,worldpos_vertex:cM,background_vert:fM,background_frag:dM,backgroundCube_vert:hM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:_M,depth_frag:vM,distance_vert:xM,distance_frag:SM,equirect_vert:MM,equirect_frag:yM,linedashed_vert:EM,linedashed_frag:wM,meshbasic_vert:TM,meshbasic_frag:AM,meshlambert_vert:RM,meshlambert_frag:CM,meshmatcap_vert:bM,meshmatcap_frag:PM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:NM,meshphong_frag:IM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:OM,meshtoon_frag:BM,points_vert:kM,points_frag:zM,shadow_vert:GM,shadow_frag:HM,sprite_vert:VM,sprite_frag:WM},ke={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Bi={basic:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:kn([ke.points,ke.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:kn([ke.common,ke.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:kn([ke.sprite,ke.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:kn([ke.common,ke.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:kn([ke.lights,ke.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Bi.physical={uniforms:kn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Il={r:0,b:0,g:0},XM=new qt,Og=new lt;Og.set(-1,0,0,0,1,0,0,0,1);function qM(s,e,t,r,o,u){const c=new gt(0);let d=o===!0?0:1,m,p,x=null,M=0,g=null;function S(b){let B=b.isScene===!0?b.background:null;if(B&&B.isTexture){const P=b.backgroundBlurriness>0;B=e.get(B,P)}return B}function w(b){let B=!1;const P=S(b);P===null?v(c,d):P&&P.isColor&&(v(P,1),B=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,u),(s.autoClear||B)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,B){const P=S(B);P&&P.isCubeTexture?(p===void 0&&(p=new Ft(new cn(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:oa(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(B.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Og),p.material.toneMapped=yt.getTransfer(P.colorSpace)!==Nt,(x!==P||M!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,M=P.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Ft(new ro(2,2),new gs({name:"BackgroundMaterial",uniforms:oa(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=yt.getTransfer(P.colorSpace)!==Nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||M!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,M=P.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function v(b,B){b.getRGB(Il,Ng(s)),t.buffers.color.setClear(Il.r,Il.g,Il.b,B,u)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,B=1){c.set(b),d=B,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(c,d)},render:w,addToRenderList:R,dispose:_}}function YM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(V,Y,te,I,se){let ce=!1;const Z=M(V,I,te,Y);u!==Z&&(u=Z,p(u.object)),ce=S(V,I,te,se),ce&&w(V,I,te,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,P(V,Y,te,I),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function m(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function x(V){return s.deleteVertexArray(V)}function M(V,Y,te,I){const se=I.wireframe===!0;let ce=r[Y.id];ce===void 0&&(ce={},r[Y.id]=ce);const Z=V.isInstancedMesh===!0?V.id:0;let ee=ce[Z];ee===void 0&&(ee={},ce[Z]=ee);let $=ee[te.id];$===void 0&&($={},ee[te.id]=$);let J=$[se];return J===void 0&&(J=g(m()),$[se]=J),J}function g(V){const Y=[],te=[],I=[];for(let se=0;se<t;se++)Y[se]=0,te[se]=0,I[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:I,object:V,attributes:{},index:null}}function S(V,Y,te,I){const se=u.attributes,ce=Y.attributes;let Z=0;const ee=te.getAttributes();for(const $ in ee)if(ee[$].location>=0){const D=se[$];let ne=ce[$];if(ne===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(ne=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(ne=V.instanceColor)),D===void 0||D.attribute!==ne||ne&&D.data!==ne.data)return!0;Z++}return u.attributesNum!==Z||u.index!==I}function w(V,Y,te,I){const se={},ce=Y.attributes;let Z=0;const ee=te.getAttributes();for(const $ in ee)if(ee[$].location>=0){let D=ce[$];D===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const ne={};ne.attribute=D,D&&D.data&&(ne.data=D.data),se[$]=ne,Z++}u.attributes=se,u.attributesNum=Z,u.index=I}function R(){const V=u.newAttributes;for(let Y=0,te=V.length;Y<te;Y++)V[Y]=0}function v(V){_(V,0)}function _(V,Y){const te=u.newAttributes,I=u.enabledAttributes,se=u.attributeDivisors;te[V]=1,I[V]===0&&(s.enableVertexAttribArray(V),I[V]=1),se[V]!==Y&&(s.vertexAttribDivisor(V,Y),se[V]=Y)}function b(){const V=u.newAttributes,Y=u.enabledAttributes;for(let te=0,I=Y.length;te<I;te++)Y[te]!==V[te]&&(s.disableVertexAttribArray(te),Y[te]=0)}function B(V,Y,te,I,se,ce,Z){Z===!0?s.vertexAttribIPointer(V,Y,te,se,ce):s.vertexAttribPointer(V,Y,te,I,se,ce)}function P(V,Y,te,I){R();const se=I.attributes,ce=te.getAttributes(),Z=Y.defaultAttributeValues;for(const ee in ce){const $=ce[ee];if($.location>=0){let J=se[ee];if(J===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),J!==void 0){const D=J.normalized,ne=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const ae=Le.buffer,me=Le.type,Me=Le.bytesPerElement,Fe=me===s.INT||me===s.UNSIGNED_INT||J.gpuType===od;if(J.isInterleavedBufferAttribute){const ge=J.data,Be=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,xt=J.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let je=0;je<$.locationSize;je++)_($.location+je,ge.meshPerAttribute);V.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let je=0;je<$.locationSize;je++)v($.location+je);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let je=0;je<$.locationSize;je++)B($.location+je,ne/$.locationSize,me,D,Be*Me,(xt+ne/$.locationSize*je)*Me,Fe)}else{if(J.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)_($.location+ge,J.meshPerAttribute);V.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<$.locationSize;ge++)v($.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ge=0;ge<$.locationSize;ge++)B($.location+ge,ne/$.locationSize,me,D,ne*Me,ne/$.locationSize*ge*Me,Fe)}}else if(Z!==void 0){const D=Z[ee];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv($.location,D);break;case 3:s.vertexAttrib3fv($.location,D);break;case 4:s.vertexAttrib4fv($.location,D);break;default:s.vertexAttrib1fv($.location,D)}}}}b()}function F(){K();for(const V in r){const Y=r[V];for(const te in Y){const I=Y[te];for(const se in I){const ce=I[se];for(const Z in ce)x(ce[Z].object),delete ce[Z];delete I[se]}}delete r[V]}}function N(V){if(r[V.id]===void 0)return;const Y=r[V.id];for(const te in Y){const I=Y[te];for(const se in I){const ce=I[se];for(const Z in ce)x(ce[Z].object),delete ce[Z];delete I[se]}}delete r[V.id]}function y(V){for(const Y in r){const te=r[Y];for(const I in te){const se=te[I];if(se[V.id]===void 0)continue;const ce=se[V.id];for(const Z in ce)x(ce[Z].object),delete ce[Z];delete se[V.id]}}}function C(V){for(const Y in r){const te=r[Y],I=V.isInstancedMesh===!0?V.id:0,se=te[I];if(se!==void 0){for(const ce in se){const Z=se[ce];for(const ee in Z)x(Z[ee].object),delete Z[ee];delete se[ce]}delete te[I],Object.keys(te).length===0&&delete r[Y]}}}function K(){z(),c=!0,u!==o&&(u=o,p(u.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:K,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:C,releaseStatesOfProgram:y,initAttributes:R,enableAttribute:v,disableUnusedAttributes:b}}function $M(s,e,t){let r;function o(m){r=m}function u(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function c(m,p,x){x!==0&&(s.drawArraysInstanced(r,m,p,x),t.update(p,r,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,x);let g=0;for(let S=0;S<x;S++)g+=p[S];t.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function KM(s,e,t,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(y){return!(y!==zi&&r.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(y){const C=y===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==ni&&y!==ki&&!C&&r.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=m(p);x!==p&&(st("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:B,maxFragmentUniforms:P,maxSamples:F,samples:N}}function ZM(s){const e=this;let t=null,r=0,o=!1,u=!1;const c=new kr,d=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const S=M.length!==0||g||r!==0||o;return o=g,r=M.length,S},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(M,g){t=x(M,g,0)},this.setState=function(M,g,S){const w=M.clippingPlanes,R=M.clipIntersection,v=M.clipShadows,_=s.get(M);if(!o||w===null||w.length===0||u&&!v)u?x(null):p();else{const b=u?0:r,B=b*4;let P=_.clippingState||null;m.value=P,P=x(w,g,B,S);for(let F=0;F!==B;++F)P[F]=t[F];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(M,g,S,w){const R=M!==null?M.length:0;let v=null;if(R!==0){if(v=m.value,w!==!0||v===null){const _=S+R*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let B=0,P=S;B!==R;++B,P+=4)c.copy(M[B]).applyMatrix4(b,d),c.normal.toArray(v,P),v[P+3]=c.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}class Md extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Pg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cn(5,5,5),u=new gs({name:"CubemapFromEquirect",uniforms:oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:na});u.uniforms.tEquirect.value=t;const c=new Ft(o,u),d=t.minFilter;return t.minFilter===Gr&&(t.minFilter=Yn),new nd(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(u)}}const Nm=256,JM=3,QM=20,Bg=256,kg=16,jM=3,ey=new G,ty=new gt;class jl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nd(1,10,null),this._boxMesh=new Ft(new cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,u={}){const{size:c=256,position:d=ey}=u,m=this._renderer;this._setSize(c);const p=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const M=m.autoClear,g=m.autoClearColor,S=m.autoClearDepth,w=m.autoClearStencil,R=e.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,R===null&&(e.background=m.getClearColor(ty));const v=new nd(r,o,x);return v.position.copy(d),v.update(m,e),m.autoClear=M,m.autoClearColor=g,m.autoClearDepth=S,m.autoClearStencil=w,e.background=R,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nm,yv(e))}_fromTexture(e,t){e.mapping===ra||e.mapping===Ja?this._setSize(e.image.length===0?Nm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Im(e,!1,!1),r=Math.log2(e)-JM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Im(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,u=this._cubeCamera;o.material=r,u.renderTarget=e,u.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),u.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ra||e.mapping===Ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Um()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ny(),this._integrationMaterial=iy());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(t/kg);for(let c=0;c<=r;c++){const d=jl.lodToRoughness(c,r);if(c>r-jM)u.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{const m=d>0?Math.log2(t)+.5*Math.log2(6/(Bg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=m,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ry());const r=this._blurMaterial,o=r.uniforms,u=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=u.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(u,0,r)}}function Im(s,e,t){return new Md(s,{minFilter:Gr,generateMipmaps:e,type:Wi,colorSpace:Yl,depthBuffer:t})}function so(s,e,t){return new gs({name:s,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:$n,blending:na,depthTest:!1,depthWrite:!1})}function ny(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bg}u

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
	`)}function iy(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kg}},`

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
	`)}function ry(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QM}
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
	`)}function Um(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fm(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sy(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?c(g):u(g)}function u(g){if(g&&g.isTexture){const S=g.mapping;if(S===Oc||S===Bc)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new Md(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),d(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const S=g.mapping,w=S===Oc||S===Bc,R=S===ra||S===Ja;if(w||R){let v=t.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new jl(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return w&&b&&b.height>0||R&&b&&m(b)?(r===null&&(r=new jl(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,S){return S===Oc?g.mapping=ra:S===Bc&&(g.mapping=Ja),g}function m(g){let S=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&S++;return S===w}function p(g){const S=g.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function ay(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Gl("WebGLRenderer: "+r+" extension not supported."),o}}}function oy(s,e,t,r){const o={},u=new WeakMap,c=new FinalizationRegistry(w=>delete o[w]);function d(w){m(w.target)}function m(w){w.index!==null&&e.remove(w.index);for(const v in w.attributes)e.remove(w.attributes[v]);w.removeEventListener("dispose",d),delete o[w.id],c.unregister(w);const R=u.get(w);R&&(e.remove(R),u.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,R){return o[R.id]!==void 0||(R.addEventListener("dispose",d),o[R.id]=new WeakRef(R),c.register(R,R.id,R),t.memory.geometries++),R}function x(w){const R=w.attributes;for(const v in R)e.update(R[v],s.ARRAY_BUFFER)}function M(w){const R=w.index,v=w.attributes.position;let _=0;if(v===void 0)return;const b=R!==null?R.array.length:v.array.length/3-1,B=v.count>=65535?Rg:Ag,P=new B(Math.ceil(b/3)*6,1),F=P.array;if(R!==null){const y=R.array;_=R.version;for(let C=0,K=0;C<b;C+=3){const z=y[C+0],V=y[C+1],Y=y[C+2];F[K++]=z,F[K++]=V,F[K++]=V,F[K++]=Y,F[K++]=Y,F[K++]=z}}else{_=v.version;for(let y=0,C=0;y<b;y+=3){const K=y+0,z=y+1,V=y+2;F[C++]=K,F[C++]=z,F[C++]=z,F[C++]=V,F[C++]=V,F[C++]=K}}P.version=_;const N=u.get(w);N&&e.remove(N),u.set(w,P)}function g(w){const R=u.get(w);if(R){const v=w.index;v!==null&&R.version<v.version&&M(w)}else M(w);return u.get(w)}function S(){for(const w in o){const R=o[w].deref();R!==void 0&&m(R)}}return{get:p,update:x,getWireframeAttribute:g,dispose:S}}function ly(s,e,t){let r;function o(M){r=M}let u,c;function d(M){u=M.type,c=M.bytesPerElement}function m(M,g){s.drawElements(r,g,u,M*c),t.update(g,r,1)}function p(M,g,S){S!==0&&(s.drawElementsInstanced(r,g,u,M*c,S),t.update(g,r,S))}function x(M,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,M,0,S);let R=0;for(let v=0;v<S;v++)R+=g[v];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function uy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cy(s,e,t){const r=new WeakMap,o=new Qt;function u(c,d,m){const p=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==M){let z=function(){C.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var S=z;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),v===!0&&(P=3);let F=d.attributes.position.count*P,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const y=new Float32Array(F*N*4*M),C=new Eg(y,F,N,M);C.type=ki,C.needsUpdate=!0;const K=P*4;for(let V=0;V<M;V++){const Y=_[V],te=b[V],I=B[V],se=F*N*4*V;for(let ce=0;ce<Y.count;ce++){const Z=ce*K;w===!0&&(o.fromBufferAttribute(Y,ce),y[se+Z+0]=o.x,y[se+Z+1]=o.y,y[se+Z+2]=o.z,y[se+Z+3]=0),R===!0&&(o.fromBufferAttribute(te,ce),y[se+Z+4]=o.x,y[se+Z+5]=o.y,y[se+Z+6]=o.z,y[se+Z+7]=0),v===!0&&(o.fromBufferAttribute(I,ce),y[se+Z+8]=o.x,y[se+Z+9]=o.y,y[se+Z+10]=o.z,y[se+Z+11]=I.itemSize===4?o.w:1)}}g={count:M,texture:C,size:new Mt(F,N)},r.set(d,g),d.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let v=0;v<p.length;v++)w+=p[v];const R=d.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function fy(s,e,t,r,o){let u=new WeakMap;function c(p){const x=o.render.frame,M=p.geometry,g=e.get(p,M);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const S=p.skeleton;u.get(S)!==x&&(S.update(),u.set(S,x))}return g}function d(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:c,dispose:d}}const dy={[sg]:"LINEAR_TONE_MAPPING",[ag]:"REINHARD_TONE_MAPPING",[og]:"CINEON_TONE_MAPPING",[ad]:"ACES_FILMIC_TONE_MAPPING",[ug]:"AGX_TONE_MAPPING",[cg]:"NEUTRAL_TONE_MAPPING",[lg]:"CUSTOM_TONE_MAPPING"};function hy(s,e,t,r,o,u){const c=new Hi(e,t,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null,p=null;const x=new Kt;x.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new jt([0,2,0,0,2,0],2));const M=new jv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ft(x,M),S=new Ug(-1,1,1,-1,0,1);let w=null,R=null,v=!1,_,b=null,B=[],P=!1;this.setSize=function(F,N){c.setSize(F,N),d!==null&&d.setSize(F,N),m!==null&&m.setSize(F,N);for(let y=0;y<B.length;y++){const C=B[y];C.setSize&&C.setSize(F,N)}},this.setEffects=function(F){B=F,P=B.length>0&&B[0].isRenderPass===!0;const N=c.width,y=c.height;B.length>0&&d===null&&(d=new Hi(N,y,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),m=new Hi(N,y,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));const C=o===!0&&B.some(K=>K.needsDepthTexture===!0);C!==(c.depthTexture!==null)&&(C===!0&&p===null&&(p=new aa(N,y),u===!0&&(p.format=Hr,p.type=sa)),c.dispose(),c.depthTexture=C?p:null,c.resolveDepthBuffer=C,c.storeMultisampledDepthBuffer=C);for(let K=0;K<B.length;K++){const z=B[K];z.setSize&&z.setSize(N,y),C&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(p)}},this.begin=function(F,N){if(v||F.toneMapping===ur&&B.length===0)return!1;if(b=N,N!==null){const y=N.width,C=N.height;(c.width!==y||c.height!==C)&&this.setSize(y,C)}return P===!1&&F.setRenderTarget(c),_=F.toneMapping,F.toneMapping=ur,!0},this.hasRenderPass=function(){return P},this.end=function(F,N){F.toneMapping=_,v=!0;let y=c,C=d;for(let K=0;K<B.length;K++){const z=B[K];z.enabled!==!1&&(z.render(F,C,y,N),z.needsSwap!==!1&&(y=C,C=C===d?m:d))}if(w!==F.outputColorSpace||R!==F.toneMapping){w=F.outputColorSpace,R=F.toneMapping,M.defines={},yt.getTransfer(w)===Nt&&(M.defines.SRGB_TRANSFER="");const K=dy[R];K&&(M.defines[K]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=y.texture,F.setRenderTarget(b),F.render(g,S),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),x.dispose(),M.dispose()}}const zg=new zn,Gg=new aa(1,1),Hg=new Lg(1),Vg=new Eg,Wg=new Pv,Xg=new Pg,Om=[],Bm=[],km=new Float32Array(16),zm=new Float32Array(9),Gm=new Float32Array(4);function ua(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let u=Om[o];if(u===void 0&&(u=new Float32Array(o),Om[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(u,d)}return u}function gn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nu(s,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function py(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function my(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function gy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function _y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function vy(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,r))return;Gm.set(r),s.uniformMatrix2fv(this.addr,!1,Gm),_n(t,r)}}function xy(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,r))return;zm.set(r),s.uniformMatrix3fv(this.addr,!1,zm),_n(t,r)}}function Sy(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,r))return;km.set(r),s.uniformMatrix4fv(this.addr,!1,km),_n(t,r)}}function My(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function Ty(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function iu(s){return s.version===0&&(s.compareFunction=Mg,s.needsUpdate=!0),s}function by(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?u=iu(Gg):u=zg,t.setTexture2D(e||u,o)}function Py(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Wg,o)}function Ly(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_CUBE_SHADOW?u=iu(Hg):u=Xg,t.setTextureCube(e||u,o)}function Dy(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Vg,o)}function Ny(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return Sy;case 5124:case 35670:return My;case 35667:case 35671:return yy;case 35668:case 35672:return Ey;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Iy(s,e){s.uniform1fv(this.addr,e)}function Uy(s,e){const t=ua(e,this.size,2);s.uniform2fv(this.addr,t)}function Fy(s,e){const t=ua(e,this.size,3);s.uniform3fv(this.addr,t)}function Oy(s,e){const t=ua(e,this.size,4);s.uniform4fv(this.addr,t)}function By(s,e){const t=ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ky(s,e){const t=ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zy(s,e){const t=ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gy(s,e){s.uniform1iv(this.addr,e)}function Hy(s,e){s.uniform2iv(this.addr,e)}function Vy(s,e){s.uniform3iv(this.addr,e)}function Wy(s,e){s.uniform4iv(this.addr,e)}function Xy(s,e){s.uniform1uiv(this.addr,e)}function qy(s,e){s.uniform2uiv(this.addr,e)}function Yy(s,e){s.uniform3uiv(this.addr,e)}function $y(s,e){s.uniform4uiv(this.addr,e)}function Ky(s,e,t){const r=this.cache,o=e.length,u=nu(t,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=iu(Gg):c=zg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,u[d])}function Zy(s,e,t){const r=this.cache,o=e.length,u=nu(t,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Wg,u[c])}function Jy(s,e,t){const r=this.cache,o=e.length,u=nu(t,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=iu(Hg):c=Xg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,u[d])}function Qy(s,e,t){const r=this.cache,o=e.length,u=nu(t,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Vg,u[c])}function jy(s){switch(s){case 5126:return Iy;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return ky;case 35676:return zy;case 5124:case 35670:return Gy;case 35667:case 35671:return Hy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class eE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Ny(t.type)}}class tE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jy(t.type)}}class nE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,t[d.id],r)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Hm(s,e){s.seq.push(e),s.map[e.id]=e}function iE(s,e,t){const r=s.name,o=r.length;for(df.lastIndex=0;;){const u=df.exec(r),c=df.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&c+2===o){Hm(t,p===void 0?new eE(d,s,e):new tE(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new nE(d),Hm(t,M)),t=M}}}class Wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),m=e.getUniformLocation(t,d.name);iE(d,m,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,t,r,o){const u=this.map[t];u!==void 0&&u.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let u=0,c=t.length;u!==c;++u){const d=t[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Vm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const rE=37297;let sE=0;function aE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Wm=new lt;function oE(s){yt._getMatrix(Wm,yt.workingColorSpace,s);const e=`mat3( ${Wm.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+u+`

`+aE(s.getShaderSource(e),d)}else return u}function lE(s,e){const t=oE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const uE={[sg]:"Linear",[ag]:"Reinhard",[og]:"Cineon",[ad]:"ACESFilmic",[ug]:"AgX",[cg]:"Neutral",[lg]:"Custom"};function cE(s,e){const t=uE[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new G;function fE(){yt.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function hE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function $a(s){return s!==""}function qm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(s){return s.replace(mE,gE)}function gE(s,e){const t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return id(t)}const _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(_E,vE)}function vE(s,e,t,r){let o="";for(let u=parseInt(e);u<parseInt(t);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const xE={[Fl]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function SE(s){return xE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ME={[Ja]:"ENVMAP_MODE_REFRACTION"};function yE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ME[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EE={[rg]:"ENVMAP_BLENDING_MULTIPLY",[sv]:"ENVMAP_BLENDING_MIX",[av]:"ENVMAP_BLENDING_ADD"};function wE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":EE[s.combine]||"ENVMAP_BLENDING_NONE"}function TE(s,e,t,r){const o=s.getContext(),u=t.defines;let c=t.vertexShader,d=t.fragmentShader;const m=SE(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=yE(t),M=wE(t),g=dE(t),S=hE(u),w=o.createProgram();let R,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter($a).join(`
`),R.length>0&&(R+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter($a).join(`
`),v.length>0&&(v+=`
`)):(R=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),v=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?pt.tonemapping_pars_fragment:"",t.toneMapping!==ur?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,lE("linearToOutputTexel",t.outputColorSpace),fE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),c=id(c),c=qm(c,t),c=Ym(c,t),d=id(d),d=qm(d,t),d=Ym(d,t),c=$m(c),d=$m(d),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,R=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,v=["#define varying in",t.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=_+R+c,B=_+v+d,P=Vm(o,o.VERTEX_SHADER,b),F=Vm(o,o.FRAGMENT_SHADER,B);o.attachShader(w,P),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(z){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(w)||"",Y=o.getShaderInfoLog(P)||"",te=o.getShaderInfoLog(F)||"",I=V.trim(),se=Y.trim(),ce=te.trim();let Z=!0,ee=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,F);else{const $=Xm(o,P,"vertex"),J=Xm(o,F,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+I+`
`+$+`
`+J)}else I!==""?st("WebGLProgram: Program Info Log:",I):(se===""||ce==="")&&(ee=!1);ee&&(z.diagnostics={runnable:Z,programLog:I,vertexShader:{log:se,prefix:R},fragmentShader:{log:ce,prefix:v}})}o.deleteShader(P),o.deleteShader(F),y=new Wl(o,w),C=pE(o,w)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(w,rE)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=F,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function bE(s){return s===ms||s===Xl||s===ql}function PE(s,e,t,r,o,u){const c=new wg,d=new RE,m=new Set,p=[],x=new Map,M=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return m.add(y),y===0?"uv":`uv${y}`}function w(y,C,K,z,V,Y){const te=z.fog,I=V.geometry,se=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,ce=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Z=e.get(y.envMap||se,ce),ee=g[y.type];let $=r.precision;y.precision!==null&&($=r.getMaxPrecision(y.precision),$!==y.precision&&st("WebGLProgram.getParameters:",y.precision,"not supported, using",$,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,D=J!==void 0?J.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let Le,ae,me,Me;if(ee){const Oe=Bi[ee];Le=Oe.vertexShader,ae=Oe.fragmentShader}else{Le=y.vertexShader,ae=y.fragmentShader;const Oe=d.getVertexShaderStage(y),vt=d.getFragmentShaderStage(y);d.update(y,Oe,vt),me=Oe.id,Me=vt.id}const Fe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Be=V.isInstancedMesh===!0,xt=V.isBatchedMesh===!0,je=!!y.map,dt=!!y.matcap,wt=!!Z,ut=wt&&Z.isPMREMTexture===!0,Ot=!!y.aoMap,zt=!!y.lightMap,sn=!!y.bumpMap&&y.wireframe===!1,It=!!y.normalMap,bn=!!y.displacementMap,Bt=!!y.emissiveMap,en=!!y.metalnessMap,dn=!!y.roughnessMap,ht=y.anisotropy>0,X=y.clearcoat>0,wn=y.diffuseRoughness>0,Lt=y.dispersion>0,ct=y.retroreflectivity>0,Ne=y.iridescence>0,Yt=y.sheen>0,Je=y.transmission>0,et=ht&&!!y.anisotropyMap,L=X&&!!y.clearcoatMap,A=X&&!!y.clearcoatNormalMap,ie=X&&!!y.clearcoatRoughnessMap,Se=wn&&!!y.diffuseRoughnessMap,pe=Ne&&!!y.iridescenceMap,Ae=Ne&&!!y.iridescenceThicknessMap,Re=Yt&&!!y.sheenColorMap,ue=Yt&&!!y.sheenRoughnessMap,de=!!y.specularMap,Ee=!!y.specularColorMap,k=!!y.specularIntensityMap,he=Je&&!!y.transmissionMap,fe=Je&&!!y.thicknessMap,Pe=!!y.gradientMap,we=!!y.alphaMap,Ce=y.alphaTest>0,$e=!!y.alphaHash,ot=!!y.extensions;let xe=ur;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(xe=s.toneMapping);const qe=ut?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,rt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:ae,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:$,batching:xt,batchingColor:xt&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,outputColorSpace:Fe===null?s.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:dt,envMap:wt,envMapMode:wt&&Z.mapping,envMapPMREM:ut,envMapMaxLod:ut?qe.length-1:null,envMapSize:ut?qe[0].width:null,aoMap:Ot,lightMap:zt,bumpMap:sn,normalMap:It,displacementMap:bn,emissiveMap:Bt,normalMapObjectSpace:It&&y.normalMapType===uv,normalMapTangentSpace:It&&y.normalMapType===ed,packedNormalMap:It&&y.normalMapType===ed&&bE(y.normalMap.format),metalnessMap:en,roughnessMap:dn,anisotropy:ht,anisotropyMap:et,clearcoat:X,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:ie,diffuseRoughness:wn,diffuseRoughnessMap:Se,dispersion:Lt,retroreflection:ct,iridescence:Ne,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:Yt,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:de,specularColorMap:Ee,specularIntensityMap:k,transmission:Je,transmissionMap:he,thicknessMap:fe,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===Ka&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:$e,combine:y.combine,mapUv:je&&S(y.map.channel),aoMapUv:Ot&&S(y.aoMap.channel),lightMapUv:zt&&S(y.lightMap.channel),bumpMapUv:sn&&S(y.bumpMap.channel),normalMapUv:It&&S(y.normalMap.channel),displacementMapUv:bn&&S(y.displacementMap.channel),emissiveMapUv:Bt&&S(y.emissiveMap.channel),metalnessMapUv:en&&S(y.metalnessMap.channel),roughnessMapUv:dn&&S(y.roughnessMap.channel),anisotropyMapUv:et&&S(y.anisotropyMap.channel),clearcoatMapUv:L&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:A&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&S(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&S(y.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&S(y.sheenRoughnessMap.channel),specularMapUv:de&&S(y.specularMap.channel),specularColorMapUv:Ee&&S(y.specularColorMap.channel),specularIntensityMapUv:k&&S(y.specularIntensityMap.channel),transmissionMapUv:he&&S(y.transmissionMap.channel),thicknessMapUv:fe&&S(y.thicknessMap.channel),alphaMapUv:we&&S(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(It||ht),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!I.attributes.uv&&(je||we),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&It===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ne,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Y.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===Nt,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&yt.getTransfer(y.emissiveMap.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===$n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=m.has(1),rt.vertexUv2s=m.has(2),rt.vertexUv3s=m.has(3),m.clear(),rt}function R(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)C.push(K),C.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(v(C,y),_(C,y),C.push(s.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapPMREM),y.push(C.envMapMaxLod),y.push(C.envMapSize),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.diffuseRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.numLightProbeGrids),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function _(y,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.retroreflection&&c.enable(24),C.diffuseRoughness&&c.enable(25),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),C.packedNormalMap&&c.enable(22),C.vertexNormals&&c.enable(23),y.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),C.numLightProbeGrids>0&&c.enable(22),C.hasPositionAttribute&&c.enable(23),y.push(c.mask)}function b(y){const C=g[y.type];let K;if(C){const z=Bi[C];K=Zv.clone(z.uniforms)}else K=y.uniforms;return K}function B(y,C){let K=x.get(C);return K!==void 0?++K.usedTimes:(K=new TE(s,C,y,o),p.push(K),x.set(C,K)),K}function P(y){if(--y.usedTimes===0){const C=p.indexOf(y);p[C]=p[p.length-1],p.pop(),x.delete(y.cacheKey),y.destroy()}}function F(y){d.remove(y)}function N(){d.dispose()}return{getParameters:w,getProgramCacheKey:R,getUniforms:b,acquireProgram:B,releaseProgram:P,releaseShaderCache:F,programs:p,dispose:N}}function LE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,m){s.get(c)[d]=m}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:u}}function DE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],o=[];function u(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,w,R,v,_){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:w,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:_},s[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=w,b.materialVariant=c(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=v,b.group=_),e++,b}function m(g,S,w,R,v,_,b){b.reversedDepth===!0&&(v=-v);const B=d(g,S,w,R,v,_);w.transmission>0?r.push(B):w.transparent===!0?o.push(B):t.push(B)}function p(g,S,w,R,v,_){const b=d(g,S,w,R,v,_);w.transmission>0?r.unshift(b):w.transparent===!0?o.unshift(b):t.unshift(b)}function x(g,S){t.length>1&&t.sort(g||DE),r.length>1&&r.sort(S||Zm),o.length>1&&o.sort(S||Zm)}function M(){for(let g=e,S=s.length;g<S;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:u,push:m,unshift:p,finish:M,sort:x}}function NE(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Jm,s.set(r,[c])):o>=u.length?(c=new Jm,u.push(c)):c=u[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new gt};break;case"SpotLight":t={position:new G,direction:new G,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function UE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let FE=0;function OE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BE(s){const e=new IE,t=UE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new G);const o=new G,u=new qt,c=new qt;function d(p){let x=0,M=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let S=0,w=0,R=0,v=0,_=0,b=0,B=0,P=0,F=0,N=0,y=0,C=0,K=0,z=0;p.sort(OE);for(let Y=0,te=p.length;Y<te;Y++){const I=p[Y],se=I.color,ce=I.intensity,Z=I.distance;let ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ms?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)x+=se.r*ce,M+=se.g*ce,g+=se.b*ce;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],ce);z++}else if(I.isSunLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,D=t.get(I);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[w]=D,r.sunShadowMap[w]=ee;const ne=J.getViewportCount();for(let Le=0;Le<ne;Le++)r.sunShadowMatrix[R+Le]=J.getMatrix(Le),r.sunShadowCascade[R+Le]=J._cascadeData[Le];R+=ne,w++}r.sun[S]=$,S++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,D=t.get(I);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=ee,r.directionalShadowMatrix[v]=I.shadow.matrix,F++}r.directional[v]=$,v++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(se).multiplyScalar(ce),$.distance=Z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[b]=$;const J=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&K++),r.spotLightMatrix[b]=J.matrix,I.castShadow){const D=t.get(I);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,r.spotShadow[b]=D,r.spotShadowMap[b]=ee,y++}b++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(se).multiplyScalar(ce),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[B]=$,B++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const J=I.shadow,D=t.get(I);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=ee,r.pointShadowMatrix[_]=I.shadow.matrix,N++}r.point[_]=$,_++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(ce),$.groundColor.copy(I.groundColor).multiplyScalar(ce),r.hemi[P]=$,P++}}B>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=M,r.ambient[2]=g;const V=r.hash;(V.sunLength!==S||V.directionalLength!==v||V.pointLength!==_||V.spotLength!==b||V.rectAreaLength!==B||V.hemiLength!==P||V.numSunShadows!==w||V.numDirectionalShadows!==F||V.numPointShadows!==N||V.numSpotShadows!==y||V.numSpotMaps!==C||V.numLightProbes!==z)&&(r.sun.length=S,r.directional.length=v,r.spot.length=b,r.rectArea.length=B,r.point.length=_,r.hemi.length=P,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.pointShadowMatrix.length=N,r.spotShadow.length=y,r.spotShadowMap.length=y,r.spotLightMatrix.length=y+C-K,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=z,V.sunLength=S,V.directionalLength=v,V.pointLength=_,V.spotLength=b,V.rectAreaLength=B,V.hemiLength=P,V.numSunShadows=w,V.numDirectionalShadows=F,V.numPointShadows=N,V.numSpotShadows=y,V.numSpotMaps=C,V.numLightProbes=z,r.version=FE++)}function m(p,x){let M=0,g=0,S=0,w=0,R=0,v=0;const _=x.matrixWorldInverse;for(let b=0,B=p.length;b<B;b++){const P=p[b];if(P.isSunLight){const F=r.sun[M];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(_),M++}else if(P.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(_),g++}else if(P.isSpotLight){const F=r.spot[w];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),F.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(_),w++}else if(P.isRectAreaLight){const F=r.rectArea[R];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),c.identity(),u.copy(P.matrixWorld),u.premultiply(_),c.extractRotation(u),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),R++}else if(P.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(_),S++}else if(P.isHemisphereLight){const F=r.hemi[v];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(_),v++}}}return{setup:d,setupView:m,state:r}}function Qm(s){const e=new BE(s),t=[],r=[],o=[];function u(M){x.camera=M,t.length=0,r.length=0,o.length=0}function c(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function m(){e.setup(t),o.sort((M,g)=>M.priority-g.priority||M.id-g.id)}function p(M){e.setupView(t,M)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:m,setupLightsView:p,pushLight:c,pushShadow:d}}function kE(s){let e=new WeakMap;function t(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new Qm(s),e.set(o,[d])):u>=c.length?(d=new Qm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const zE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`,HE=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],VE=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jm=new qt,qa=new G,hf=new G;function WE(s,e,t){let r=new eo;const o=new Mt,u=new Mt,c=new Qt,d=new ex,m=new tx,p={},x=t.maxTextureSize,M={[ps]:$n,[$n]:ps,[wi]:wi},g=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:zE,fragmentShader:GE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new Kt;w.setAttribute("position",new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ft(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let _=this.type;this.render=function(N,y,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;this.type===z_&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fl);const K=s.getRenderTarget(),z=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(na),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=_!==this.type;te&&y.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(se=>se.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,se=N.length;I<se;I++){const ce=N[I],Z=ce.shadow;if(Z===void 0){st("WebGLShadowMap:",ce,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const ee=Z.getFrameExtents();o.multiply(ee),u.copy(Z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(u.x=Math.floor(x/ee.x),o.x=u.x*ee.x,Z.mapSize.x=u.x),o.y>x&&(u.y=Math.floor(x/ee.y),o.y=u.y*ee.y,Z.mapSize.y=u.y));const $=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||te===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ya){if(ce.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Hi(o.x,o.y,{format:ms,type:Wi,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),Z.map.texture.name=ce.name+".shadowMap",Z.map.depthTexture=new aa(o.x,o.y,ki),Z.map.depthTexture.name=ce.name+".shadowMapDepth",Z.map.depthTexture.format=Wr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Cn,Z.map.depthTexture.magFilter=Cn}else ce.isPointLight?(Z.map=new Md(o.x),Z.map.depthTexture=new Lg(o.x,Vi)):(Z.map=new Hi(o.x,o.y),Z.map.depthTexture=new aa(o.x,o.y,Vi)),Z.map.depthTexture.name=ce.name+".shadowMap",Z.map.depthTexture.format=Wr,this.type===Fl?(Z.map.depthTexture.compareFunction=$?Sg:xg,Z.map.depthTexture.minFilter=Yn,Z.map.depthTexture.magFilter=Yn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Cn,Z.map.depthTexture.magFilter=Cn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==o.x||Z.map.height!==o.y)&&Z.map.setSize(o.x,o.y);const J=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();ce.isPointLight!==!0&&Z.updateMatrices(ce,C);const D=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:C.layers;for(let ne=0;ne<J;ne++){const Le=Z.getCamera(ne);if(ce.isPointLight){const ae=Z.camera,me=Z.matrix,Me=ce.distance||ae.far;Me!==ae.far&&(ae.far=Me,ae.updateProjectionMatrix()),qa.setFromMatrixPosition(ce.matrixWorld),ae.position.copy(qa),hf.copy(ae.position),hf.add(HE[ne]),ae.up.copy(VE[ne]),ae.lookAt(hf),ae.updateMatrixWorld(),me.makeTranslation(-qa.x,-qa.y,-qa.z),jm.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(jm,ae.coordinateSystem,ae.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(Z.map),s.clear());const ae=Z.getViewport(ne);c.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),Y.viewport(c)}r=Z.getFrustum(ne),P(y,C,Le,ce,D,this.type)}Z.isPointLightShadow!==!0&&this.type===Ya&&b(Z,C),Z.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(K,z,V)};function b(N,y){const C=e.update(R);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null?N.mapPass=new Hi(o.x,o.y,{format:ms,type:Wi}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value.set(N.map.width,N.map.height),g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(y,null,C,g,R,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value.set(N.map.width,N.map.height),S.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(y,null,C,S,R,null)}function B(N,y,C,K){let z=null;const V=C.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)z=V;else if(z=C.isPointLight===!0?m:d,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const Y=z.uuid,te=y.uuid;let I=p[Y];I===void 0&&(I={},p[Y]=I);let se=I[te];se===void 0&&(se=z.clone(),I[te]=se,y.addEventListener("dispose",F)),z=se}if(z.visible=y.visible,z.wireframe=y.wireframe,K===Ya?z.side=y.shadowSide!==null?y.shadowSide:y.side:z.side=y.shadowSide!==null?y.shadowSide:M[y.side],z.alphaMap=y.alphaMap,z.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,z.map=y.map,z.clipShadows=y.clipShadows,z.clippingPlanes=y.clippingPlanes,z.clipIntersection=y.clipIntersection,z.displacementMap=y.displacementMap,z.displacementScale=y.displacementScale,z.displacementBias=y.displacementBias,z.wireframeLinewidth=y.wireframeLinewidth,z.linewidth=y.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Y=s.properties.get(z);Y.light=C}return z}function P(N,y,C,K,z,V){if(N.visible===!1)return;if(N.layers.test(z)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===Ya)&&(!N.frustumCulled||N.intersectsFrustum(r))){N.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,N.matrixWorld);const I=e.update(N),se=N.material;if(Array.isArray(se)){const ce=I.groups;for(let Z=0,ee=ce.length;Z<ee;Z++){const $=ce[Z],J=se[$.materialIndex];if(J&&J.visible){const D=B(N,J,K,V);N.onBeforeShadow(s,N,y,C,I,D,$),s.renderBufferDirect(C,null,I,D,N,$),N.onAfterShadow(s,N,y,C,I,D,$)}}}else if(se.visible){const ce=B(N,se,K,V);N.onBeforeShadow(s,N,y,C,I,ce,null),s.renderBufferDirect(C,null,I,ce,N,null),N.onAfterShadow(s,N,y,C,I,ce,null)}}const te=N.children;for(let I=0,se=te.length;I<se;I++)P(te[I],y,C,K,z,V)}function F(N){N.target.removeEventListener("dispose",F);for(const C in p){const K=p[C],z=N.target.uuid;z in K&&(K[z].dispose(),delete K[z])}}}function XE(s,e){function t(){let k=!1;const he=new Qt;let fe=null;const Pe=new Qt(0,0,0,0);return{setMask:function(we){fe!==we&&!k&&(s.colorMask(we,we,we,we),fe=we)},setLocked:function(we){k=we},setClear:function(we,Ce,$e,ot,xe){xe===!0&&(we*=ot,Ce*=ot,$e*=ot),he.set(we,Ce,$e,ot),Pe.equals(he)===!1&&(s.clearColor(we,Ce,$e,ot),Pe.copy(he))},reset:function(){k=!1,fe=null,Pe.set(-1,0,0,0)}}}function r(){let k=!1,he=!1,fe=null,Pe=null,we=null;return{setReversed:function(Ce){if(he!==Ce){const $e=e.get("EXT_clip_control");Ce?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),he=Ce;const ot=we;we=null,this.setClear(ot)}},getReversed:function(){return he},setTest:function(Ce){Ce?ge(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ce){fe!==Ce&&!k&&(s.depthMask(Ce),fe=Ce)},setFunc:function(Ce){if(he&&(Ce=Sv[Ce]),Pe!==Ce){switch(Ce){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case Za:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case Sf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ce}},setLocked:function(Ce){k=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,he&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){k=!1,fe=null,Pe=null,we=null,he=!1}}}function o(){let k=!1,he=null,fe=null,Pe=null,we=null,Ce=null,$e=null,ot=null,xe=null;return{setTest:function(qe){k||(qe?ge(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(qe){he!==qe&&!k&&(s.stencilMask(qe),he=qe)},setFunc:function(qe,rt,Oe){(fe!==qe||Pe!==rt||we!==Oe)&&(s.stencilFunc(qe,rt,Oe),fe=qe,Pe=rt,we=Oe)},setOp:function(qe,rt,Oe){(Ce!==qe||$e!==rt||ot!==Oe)&&(s.stencilOp(qe,rt,Oe),Ce=qe,$e=rt,ot=Oe)},setLocked:function(qe){k=qe},setClear:function(qe){xe!==qe&&(s.clearStencil(qe),xe=qe)},reset:function(){k=!1,he=null,fe=null,Pe=null,we=null,Ce=null,$e=null,ot=null,xe=null}}}const u=new t,c=new r,d=new o;let m={};const p=new WeakMap;let x={},M={},g={},S=new WeakMap,w=[],R=null,v=!1,_=null,b=null,B=null,P=null,F=null,N=null,y=null,C=new gt(0,0,0),K=0,z=!1,V=null,Y=null,te=null,I=null,se=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=ee>=1):$.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=ee>=2);let J=null,D={};const ne=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),ae=new Qt().fromArray(ne),me=new Qt().fromArray(Le);function Me(k,he,fe,Pe){const we=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(k,Ce),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<fe;$e++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(he+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Ce}const Fe={};Fe[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Fe[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Fe[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(s.DEPTH_TEST),c.setFunc(Za),sn(!1),It(Qp),ge(s.CULL_FACE),Ot(na);function ge(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function Be(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function xt(k,he){return g[k]!==he?(s.bindFramebuffer(k,he),g[k]=he,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=he),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=he),!0):!1}function je(k,he){let fe=w,Pe=!1;if(k){fe=S.get(he),fe===void 0&&(fe=[],S.set(he,fe));const we=k.textures;if(fe.length!==we.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,$e=we.length;Ce<$e;Ce++)fe[Ce]=s.COLOR_ATTACHMENT0+Ce;fe.length=we.length,Pe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(fe)}function dt(k){return R!==k?(s.useProgram(k),R=k,!0):!1}const wt={[ea]:s.FUNC_ADD,[H_]:s.FUNC_SUBTRACT,[V_]:s.FUNC_REVERSE_SUBTRACT};wt[W_]=s.MIN,wt[X_]=s.MAX;const ut={[q_]:s.ZERO,[Y_]:s.ONE,[$_]:s.SRC_COLOR,[ng]:s.SRC_ALPHA,[ev]:s.SRC_ALPHA_SATURATE,[Q_]:s.DST_COLOR,[Z_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[ig]:s.ONE_MINUS_SRC_ALPHA,[j_]:s.ONE_MINUS_DST_COLOR,[J_]:s.ONE_MINUS_DST_ALPHA,[tv]:s.CONSTANT_COLOR,[nv]:s.ONE_MINUS_CONSTANT_COLOR,[iv]:s.CONSTANT_ALPHA,[rv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(k,he,fe,Pe,we,Ce,$e,ot,xe,qe){if(k===na){v===!0&&(Be(s.BLEND),v=!1);return}if(v===!1&&(ge(s.BLEND),v=!0),k!==G_){if(k!==_||qe!==z){if((b!==ea||F!==ea)&&(s.blendEquation(s.FUNC_ADD),b=ea,F=ea),qe)switch(k){case Ka:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pf:s.blendFunc(s.ONE,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ka:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jp:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",k);break}B=null,P=null,N=null,y=null,C.set(0,0,0),K=0,_=k,z=qe}return}we=we||he,Ce=Ce||fe,$e=$e||Pe,(he!==b||we!==F)&&(s.blendEquationSeparate(wt[he],wt[we]),b=he,F=we),(fe!==B||Pe!==P||Ce!==N||$e!==y)&&(s.blendFuncSeparate(ut[fe],ut[Pe],ut[Ce],ut[$e]),B=fe,P=Pe,N=Ce,y=$e),(ot.equals(C)===!1||xe!==K)&&(s.blendColor(ot.r,ot.g,ot.b,xe),C.copy(ot),K=xe),_=k,z=!1}function zt(k,he){k.side===wi?Be(s.CULL_FACE):ge(s.CULL_FACE);let fe=k.side===$n;he&&(fe=!fe),sn(fe),k.blending===Ka&&k.transparent===!1?Ot(na):Ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),u.setMask(k.colorWrite);const Pe=k.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function sn(k){V!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),V=k)}function It(k){k!==B_?(ge(s.CULL_FACE),k!==Y&&(k===Qp?s.cullFace(s.BACK):k===k_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),Y=k}function bn(k){k!==te&&(Z&&s.lineWidth(k),te=k)}function Bt(k,he,fe){k?(ge(s.POLYGON_OFFSET_FILL),(I!==he||se!==fe)&&(I=he,se=fe,c.getReversed()&&(he=-he,fe=-fe),s.polygonOffset(he,fe))):Be(s.POLYGON_OFFSET_FILL)}function en(k){k?ge(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function dn(k){k===void 0&&(k=s.TEXTURE0+ce-1),J!==k&&(s.activeTexture(k),J=k)}function ht(k,he,fe){fe===void 0&&(J===null?fe=s.TEXTURE0+ce-1:fe=J);let Pe=D[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},D[fe]=Pe),(Pe.type!==k||Pe.texture!==he)&&(J!==fe&&(s.activeTexture(fe),J=fe),s.bindTexture(k,he||Fe[k]),Pe.type=k,Pe.texture=he)}function X(){const k=D[J];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wn(){try{s.compressedTexImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function ct(){try{s.texSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Ne(){try{s.texSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function et(){try{s.texStorage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function L(){try{s.texStorage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function A(){try{s.texImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function ie(){try{s.texImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Se(k){return M[k]!==void 0?M[k]:s.getParameter(k)}function pe(k,he){M[k]!==he&&(s.pixelStorei(k,he),M[k]=he)}function Ae(k){ae.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function Re(k){me.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),me.copy(k))}function ue(k,he){let fe=p.get(he);fe===void 0&&(fe=new WeakMap,p.set(he,fe));let Pe=fe.get(k);Pe===void 0&&(Pe=s.getUniformBlockIndex(he,k.name),s.uniformBlockBinding(he,Pe,Pe),fe.set(k,Pe))}function de(k,he,fe){const we=p.get(he).get(k);m[we]!==fe&&(s.bindBufferBase(s.UNIFORM_BUFFER,we,fe),m[we]=fe)}function Ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},M={},J=null,D={},g={},m={},S=new WeakMap,w=[],R=null,v=!1,_=null,b=null,B=null,P=null,F=null,N=null,y=null,C=new gt(0,0,0),K=0,z=!1,V=null,Y=null,te=null,I=null,se=null,ae.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ge,disable:Be,bindFramebuffer:xt,drawBuffers:je,useProgram:dt,setBlending:Ot,setMaterial:zt,setFlipSided:sn,setCullFace:It,setLineWidth:bn,setPolygonOffset:Bt,setScissorTest:en,activeTexture:dn,bindTexture:ht,unbindTexture:X,compressedTexImage2D:wn,compressedTexImage3D:Lt,texImage2D:A,texImage3D:ie,pixelStorei:pe,getParameter:Se,updateUBOMapping:ue,uniformBlockBinding:de,texStorage2D:et,texStorage3D:L,texSubImage2D:ct,texSubImage3D:Ne,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Je,scissor:Ae,viewport:Re,reset:Ee}}function qE(s,e,t,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,x=new WeakMap,M=new Set;let g;const S=new WeakMap,w=new Set,R=new FinalizationRegistry(L=>w.delete(L));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,A){return v?new OffscreenCanvas(L,A):Kl("canvas")}function b(L,A,ie){let Se=1;const pe=et(L);if((pe.width>ie||pe.height>ie)&&(Se=ie/Math.max(pe.width,pe.height)),Se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(Se*pe.width),Re=Math.floor(Se*pe.height);g===void 0&&(g=_(Ae,Re));const ue=A?_(Ae,Re):g;return ue.width=Ae,ue.height=Re,ue.getContext("2d").drawImage(L,0,0,Ae,Re),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Re+")."),ue}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function B(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,A,ie,Se,pe,Ae=!1){if(L!==null){if(s[L]!==void 0)return s[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Re;Se&&(Re=e.get("EXT_texture_norm16"),Re||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=A;if(A===s.RED&&(ie===s.FLOAT&&(ue=s.R32F),ie===s.HALF_FLOAT&&(ue=s.R16F),ie===s.UNSIGNED_BYTE&&(ue=s.R8),ie===s.UNSIGNED_SHORT&&Re&&(ue=Re.R16_EXT),ie===s.SHORT&&Re&&(ue=Re.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ue=s.R8UI),ie===s.UNSIGNED_SHORT&&(ue=s.R16UI),ie===s.UNSIGNED_INT&&(ue=s.R32UI),ie===s.BYTE&&(ue=s.R8I),ie===s.SHORT&&(ue=s.R16I),ie===s.INT&&(ue=s.R32I)),A===s.RG&&(ie===s.FLOAT&&(ue=s.RG32F),ie===s.HALF_FLOAT&&(ue=s.RG16F),ie===s.UNSIGNED_BYTE&&(ue=s.RG8),ie===s.UNSIGNED_SHORT&&Re&&(ue=Re.RG16_EXT),ie===s.SHORT&&Re&&(ue=Re.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ue=s.RG8UI),ie===s.UNSIGNED_SHORT&&(ue=s.RG16UI),ie===s.UNSIGNED_INT&&(ue=s.RG32UI),ie===s.BYTE&&(ue=s.RG8I),ie===s.SHORT&&(ue=s.RG16I),ie===s.INT&&(ue=s.RG32I)),A===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),ie===s.UNSIGNED_INT&&(ue=s.RGB32UI),ie===s.BYTE&&(ue=s.RGB8I),ie===s.SHORT&&(ue=s.RGB16I),ie===s.INT&&(ue=s.RGB32I)),A===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),ie===s.UNSIGNED_INT&&(ue=s.RGBA32UI),ie===s.BYTE&&(ue=s.RGBA8I),ie===s.SHORT&&(ue=s.RGBA16I),ie===s.INT&&(ue=s.RGBA32I)),A===s.RGB&&(ie===s.UNSIGNED_SHORT&&Re&&(ue=Re.RGB16_EXT),ie===s.SHORT&&Re&&(ue=Re.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),A===s.RGBA){const de=Ae?$l:yt.getTransfer(pe);ie===s.FLOAT&&(ue=s.RGBA32F),ie===s.HALF_FLOAT&&(ue=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(ue=de===Nt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&Re&&(ue=Re.RGBA16_EXT),ie===s.SHORT&&Re&&(ue=Re.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function y(L,A){let ie;return L?A===null||A===Vi||A===sa?ie=s.DEPTH24_STENCIL8:A===ki?ie=s.DEPTH32F_STENCIL8:A===Qa&&(ie=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Vi||A===sa?ie=s.DEPTH_COMPONENT24:A===ki?ie=s.DEPTH_COMPONENT32F:A===Qa&&(ie=s.DEPTH_COMPONENT16),ie}function C(L,A){return B(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function K(L){const A=new WeakRef(L);r.get(L).__ref=A,w.add(A),R.register(L,A,A)}function z(L){const A=r.get(L).__ref;A!==void 0&&(w.delete(A),R.unregister(A))}function V(L){te(L.target)}function Y(L){I(L.target)}function te(L){L.removeEventListener("dispose",V),z(L),ce(L),L.isVideoTexture&&x.delete(L),L.isHTMLTexture&&M.delete(L)}function I(L){L.removeEventListener("dispose",Y),z(L),ee(L)}function se(){for(const L of w){const A=L.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):te(A))}w.clear(),M.clear()}function ce(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ie=L.source,Se=S.get(ie);if(Se){const pe=Se[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&Z(L),Object.keys(Se).length===0&&S.delete(ie)}r.remove(L)}function Z(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ie=L.source,Se=S.get(ie);delete Se[A.__cacheKey],c.memory.textures--}function ee(L){const A=r.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ie=L.depthTexture;if(ie&&ie.renderTarget===L&&te(ie),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let Ae=0;Ae<A.__webglFramebuffer[pe].length;Ae++)s.deleteFramebuffer(A.__webglFramebuffer[pe][Ae]);else s.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)s.deleteFramebuffer(A.__webglFramebuffer[pe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Se=L.textures;for(let pe=0,Ae=Se.length;pe<Ae;pe++){const Re=r.get(Se[pe]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),c.memory.textures--),r.remove(Se[pe])}r.remove(L)}let $=0;function J(){$=0}function D(){return $}function ne(L){$=L}function Le(){const L=$;return L>=o.maxTextures&&st("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,L}function ae(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function me(L,A){const ie=r.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ie.__version!==L.version){const Se=L.image;if(Se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(ie,L,A);return}}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+A)}function Me(L,A){const ie=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){zt(ie,L,A);return}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+A)}function Fe(L,A){const ie=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){zt(ie,L,A);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+A)}function ge(L,A){const ie=r.get(L);if(L.version>0&&ie.__version!==L.version){sn(ie,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+A)}const Be={[yf]:s.REPEAT,[lr]:s.CLAMP_TO_EDGE,[Ef]:s.MIRRORED_REPEAT},xt={[Cn]:s.NEAREST,[ov]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[Gr]:s.LINEAR_MIPMAP_LINEAR},je={[fv]:s.NEVER,[Mg]:s.ALWAYS,[dv]:s.LESS,[xg]:s.LEQUAL,[hv]:s.EQUAL,[Sg]:s.GEQUAL,[pv]:s.GREATER,[mv]:s.NOTEQUAL};function dt(L,A){if(A.type===ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===kc||A.magFilter===ol||A.magFilter===Gr||A.minFilter===Yn||A.minFilter===kc||A.minFilter===ol||A.minFilter===Gr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Be[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Be[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Be[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xt[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,je[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Cn||A.minFilter!==ol&&A.minFilter!==Gr||A.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function wt(L,A){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",V),K(A));const Se=A.source;let pe=S.get(Se);pe===void 0&&(pe={},S.set(Se,pe));const Ae=ae(A);if(Ae!==L.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),pe[Ae].usedTimes++;const Re=pe[L.__cacheKey];Re!==void 0&&(pe[L.__cacheKey].usedTimes--,Re.usedTimes===0&&Z(A)),L.__cacheKey=Ae,L.__webglTexture=pe[Ae].texture}return ie}function ut(L,A,ie){return Math.floor(Math.floor(L/ie)/A)}function Ot(L,A,ie,Se){const Ae=L.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ie,Se,A.data);else{Ae.sort((k,he)=>k.start-he.start);let Re=0;for(let k=1;k<Ae.length;k++){const he=Ae[Re],fe=Ae[k],Pe=he.start+he.count,we=ut(fe.start,A.width,4),Ce=ut(he.start,A.width,4);fe.start<=Pe+1&&we===Ce&&ut(fe.start+fe.count-1,A.width,4)===we?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++Re,Ae[Re]=fe)}Ae.length=Re+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ee=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let k=0,he=Ae.length;k<he;k++){const fe=Ae[k],Pe=Math.floor(fe.start/4),we=Math.ceil(fe.count/4),Ce=Pe%A.width,$e=Math.floor(Pe/A.width),ot=we,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,Ce,$e,ot,xe,ie,Se,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function zt(L,A,ie){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const pe=wt(L,A),Ae=A.source;t.bindTexture(Se,L.__webglTexture,s.TEXTURE0+ie);const Re=r.get(Ae);if(Ae.version!==Re.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=yt.getPrimaries(yt.workingColorSpace),qe=A.colorSpace===zr?null:yt.getPrimaries(A.colorSpace),rt=A.colorSpace===zr||xe===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let de=b(A.image,!1,o.maxTextureSize);de=Je(A,de);const Ee=u.convert(A.format,A.colorSpace),k=u.convert(A.type);let he=N(A.internalFormat,Ee,k,A.normalized,A.colorSpace,A.isVideoTexture);dt(Se,A);let fe;const Pe=A.mipmaps,we=A.isVideoTexture!==!0,Ce=Re.__version===void 0||pe===!0,$e=Ae.dataReady,ot=C(A,de);if(A.isDepthTexture)he=y(A.format===Hr,A.type),Ce&&(we?t.texStorage2D(s.TEXTURE_2D,1,he,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,Ee,k,null));else if(A.isDataTexture)if(Pe.length>0){we&&Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,Pe[0].width,Pe[0].height);for(let xe=0,qe=Pe.length;xe<qe;xe++)fe=Pe[xe],we?$e&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,Ee,k,fe.data):t.texImage2D(s.TEXTURE_2D,xe,he,fe.width,fe.height,0,Ee,k,fe.data);A.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,de.width,de.height),$e&&Ot(A,de,Ee,k)):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,Ee,k,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,he,Pe[0].width,Pe[0].height,de.depth);for(let xe=0,qe=Pe.length;xe<qe;xe++)if(fe=Pe[xe],A.format!==zi)if(Ee!==null)if(we){if($e)if(A.layerUpdates.size>0){const rt=Dm(fe.width,fe.height,A.format,A.type);for(const Oe of A.layerUpdates){const vt=fe.data.subarray(Oe*rt/fe.data.BYTES_PER_ELEMENT,(Oe+1)*rt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Oe,fe.width,fe.height,1,Ee,vt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,de.depth,Ee,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,he,fe.width,fe.height,de.depth,0,fe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,de.depth,Ee,k,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,he,fe.width,fe.height,de.depth,0,Ee,k,fe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,Pe[0].width,Pe[0].height);for(let xe=0,qe=Pe.length;xe<qe;xe++)fe=Pe[xe],A.format!==zi?Ee!==null?we?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,Ee,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,he,fe.width,fe.height,0,fe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?$e&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,Ee,k,fe.data):t.texImage2D(s.TEXTURE_2D,xe,he,fe.width,fe.height,0,Ee,k,fe.data)}else if(A.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,he,de.width,de.height,de.depth),$e)if(A.layerUpdates.size>0){const xe=Dm(de.width,de.height,A.format,A.type);for(const qe of A.layerUpdates){const rt=de.data.subarray(qe*xe/de.data.BYTES_PER_ELEMENT,(qe+1)*xe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,de.width,de.height,1,Ee,k,rt)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,k,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,de.width,de.height,de.depth,0,Ee,k,de.data);else if(A.isData3DTexture)we?(Ce&&t.texStorage3D(s.TEXTURE_3D,ot,he,de.width,de.height,de.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,k,de.data)):t.texImage3D(s.TEXTURE_3D,0,he,de.width,de.height,de.depth,0,Ee,k,de.data);else if(A.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(s.TEXTURE_2D,ot,he,de.width,de.height);else{let xe=de.width,qe=de.height;for(let rt=0;rt<ot;rt++)t.texImage2D(s.TEXTURE_2D,rt,he,xe,qe,0,Ee,k,null),xe>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),de.parentNode!==xe){xe.appendChild(de),M.add(A),xe.onpaint=qe=>{const rt=qe.changedElements;for(const Oe of M)rt.includes(Oe.image)&&(Oe.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const rt=s.RGBA,Oe=s.RGBA,vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,Oe,vt,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(we&&Ce){const xe=et(Pe[0]);t.texStorage2D(s.TEXTURE_2D,ot,he,xe.width,xe.height)}for(let xe=0,qe=Pe.length;xe<qe;xe++)fe=Pe[xe],we?$e&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee,k,fe):t.texImage2D(s.TEXTURE_2D,xe,he,Ee,k,fe);A.generateMipmaps=!1}else if(we){if(Ce){const xe=et(de);t.texStorage2D(s.TEXTURE_2D,ot,he,xe.width,xe.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,k,de)}else t.texImage2D(s.TEXTURE_2D,0,he,Ee,k,de);B(A)&&A.mipmapsAutoUpdate===!0&&P(Se),Re.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function sn(L,A,ie){if(A.image.length!==6)return;const Se=wt(L,A),pe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ie);const Ae=r.get(pe);if(pe.version!==Ae.__version||Se===!0){t.activeTexture(s.TEXTURE0+ie);const Re=yt.getPrimaries(yt.workingColorSpace),ue=A.colorSpace===zr?null:yt.getPrimaries(A.colorSpace),de=A.colorSpace===zr||Re===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,he=[];for(let Oe=0;Oe<6;Oe++)!Ee&&!k?he[Oe]=b(A.image[Oe],!0,o.maxCubemapSize):he[Oe]=k?A.image[Oe].image:A.image[Oe],he[Oe]=Je(A,he[Oe]);const fe=he[0],Pe=u.convert(A.format,A.colorSpace),we=u.convert(A.type);let Ce=N(A.internalFormat,Pe,we,A.normalized,A.colorSpace);const $e=A.isVideoTexture!==!0,ot=Ae.__version===void 0||Se===!0,xe=pe.dataReady;let qe=C(A,fe);dt(s.TEXTURE_CUBE_MAP,A);let rt;if(A.isDepthTexture){if(Ce=y(A.format===Hr,A.type),ot)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ce,fe.width,fe.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,fe.width,fe.height,0,Pe,we,null)}else if(Ee){$e&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Ce,fe.width,fe.height);for(let Oe=0;Oe<6;Oe++){rt=he[Oe].mipmaps;for(let vt=0;vt<rt.length;vt++){const Ht=rt[vt];A.format!==zi?Pe!==null?$e?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,0,0,Ht.width,Ht.height,Pe,Ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,Ce,Ht.width,Ht.height,0,Ht.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,0,0,Ht.width,Ht.height,Pe,we,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt,Ce,Ht.width,Ht.height,0,Pe,we,Ht.data)}}}else{if(rt=A.mipmaps,$e&&ot){rt.length>0&&qe++;const Oe=et(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(k){$e?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,he[Oe].width,he[Oe].height,Pe,we,he[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,he[Oe].width,he[Oe].height,0,Pe,we,he[Oe].data);for(let vt=0;vt<rt.length;vt++){const tn=rt[vt].image[Oe].image;$e?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,0,0,tn.width,tn.height,Pe,we,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,Ce,tn.width,tn.height,0,Pe,we,tn.data)}}else{$e?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Pe,we,he[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Pe,we,he[Oe]);for(let vt=0;vt<rt.length;vt++){const Ht=rt[vt];$e?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,0,0,Pe,we,Ht.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,vt+1,Ce,Pe,we,Ht.image[Oe])}}}B(A)&&A.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Ae.__version=pe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function It(L,A,ie,Se,pe,Ae){const Re=u.convert(ie.format,ie.colorSpace),ue=u.convert(ie.type),de=N(ie.internalFormat,Re,ue,ie.normalized,ie.colorSpace),Ee=r.get(A),k=r.get(ie);if(k.__renderTarget=A,!Ee.__hasExternalTextures){const he=Math.max(1,A.width>>Ae),fe=Math.max(1,A.height>>Ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ae,de,he,fe,A.depth,0,Re,ue,null):t.texImage2D(pe,Ae,de,he,fe,0,Re,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ne(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,pe,k.__webglTexture,0,ct(A)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,pe,k.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function bn(L,A,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const Se=A.depthTexture,pe=Se&&Se.isDepthTexture?Se.type:null,Ae=y(A.stencilBuffer,pe),Re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ne(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(A),Ae,A.width,A.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(A),Ae,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,L)}else{const Se=A.textures;for(let pe=0;pe<Se.length;pe++){const Ae=Se[pe],Re=u.convert(Ae.format,Ae.colorSpace),ue=u.convert(Ae.type),de=N(Ae.internalFormat,Re,ue,Ae.normalized,Ae.colorSpace);Ne(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(A),de,A.width,A.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(A),de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(L,A,ie){const Se=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(A.depthTexture);pe.__renderTarget=A;const Ae=Se?A.depthTexture.image[0]:A.depthTexture.image;(!pe.__webglTexture||Ae.width!==A.width||Ae.height!==A.height)&&(Ae.width=A.width,Ae.height=A.height,A.depthTexture.needsUpdate=!0),Se?ge(A.depthTexture,0):me(A.depthTexture,0);const Re=pe.__webglTexture,ue=ct(A),de=Se?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,Ee=A.depthTexture.format===Hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Wr)Ne(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,de,Re,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,de,Re,0);else if(A.depthTexture.format===Hr)Ne(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,de,Re,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,de,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(L){const A=r.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const Se=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",pe)};Se.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=Se}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let Se=0;Se<6;Se++)Bt(A.__webglFramebuffer[Se],L,Se);else L.texture.mipmaps.length>0?Bt(A.__webglFramebuffer[0],L,0):Bt(A.__webglFramebuffer,L,0);else if(ie){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=s.createRenderbuffer(),bn(A.__webglDepthbuffer[Se],L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),bn(A.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dn(L,A,ie){const Se=r.get(L);A!==void 0&&It(Se.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&en(L)}function ht(L){const A=L.texture,ie=r.get(L),Se=r.get(A);L.addEventListener("dispose",Y),K(L);const pe=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,Re=pe.length>1;if(Re||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,c.memory.textures++),Ae){ie.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps.length>0){ie.__webglFramebuffer[ue]=[];for(let de=0;de<A.mipmaps.length;de++)ie.__webglFramebuffer[ue][de]=s.createFramebuffer()}else ie.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)ie.__webglFramebuffer[ue]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Re)for(let ue=0,de=pe.length;ue<de;ue++){const Ee=r.get(pe[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Ne(L)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ue=0;ue<pe.length;ue++){const de=pe[ue];ie.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[ue]);const Ee=u.convert(de.format,de.colorSpace),k=u.convert(de.type),he=N(de.internalFormat,Ee,k,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),fe=ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,he,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ie.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),bn(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),dt(s.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)It(ie.__webglFramebuffer[ue][de],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else It(ie.__webglFramebuffer[ue],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);B(A)?P(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Re){for(let ue=0,de=pe.length;ue<de;ue++){const Ee=pe[ue],k=r.get(Ee);let he=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,k.__webglTexture),dt(he,Ee),It(ie.__webglFramebuffer,L,Ee,s.COLOR_ATTACHMENT0+ue,he,0),B(Ee)&&P(he)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Se.__webglTexture),dt(ue,A),A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)It(ie.__webglFramebuffer[de],L,A,s.COLOR_ATTACHMENT0,ue,de);else It(ie.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,ue,0);B(A)?P(ue):A.mipmaps.length>0&&s.texParameteri(ue,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&en(L)}function X(L){const A=L.textures;for(let ie=0,Se=A.length;ie<Se;ie++){const pe=A[ie];if(B(pe)&&pe.mipmapsAutoUpdate===!0){const Ae=F(L),Re=r.get(pe).__webglTexture;t.bindTexture(Ae,Re),P(Ae),t.unbindTexture()}}}const wn=[];function Lt(L){if(L.samples>0){if(Ne(L)===!1){const A=L.textures,ie=L.width,Se=L.height;let pe=s.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=r.get(L),ue=A.length>1;if(ue)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const k=r.get(A[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,ie,Se,0,0,ie,Se,pe,s.NEAREST),m===!0&&(wn.length=0,wn.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&wn.push(Ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const k=r.get(A[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ct(L){return Math.min(o.maxSamples,L.samples)}function Ne(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Yt(L){const A=c.render.frame;x.get(L)!==A&&(x.set(L,A),L.update())}function Je(L,A){const ie=L.colorSpace,Se=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Yl&&ie!==zr&&(yt.getTransfer(ie)===Nt?(Se!==zi||pe!==ni)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ie)),A}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Le,this.resetTextureUnits=J,this.getTextureUnits=D,this.setTextureUnits=ne,this.setTexture2D=me,this.setTexture2DArray=Me,this.setTexture3D=Fe,this.setTextureCube=ge,this.rebindTextures=dn,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ne,this.dispose=se}function YE(s,e){function t(r,o=zr){let u;const c=yt.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===dg)return s.BYTE;if(r===hg)return s.SHORT;if(r===Qa)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Wi)return s.HALF_FLOAT;if(r===gg)return s.ALPHA;if(r===_g)return s.RGB;if(r===zi)return s.RGBA;if(r===Wr)return s.DEPTH_COMPONENT;if(r===Hr)return s.DEPTH_STENCIL;if(r===vg)return s.RED;if(r===cd)return s.RED_INTEGER;if(r===ms)return s.RG;if(r===fd)return s.RG_INTEGER;if(r===dd)return s.RGBA_INTEGER;if(r===Ol||r===Bl||r===kl||r===zl)if(c===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ol)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ol)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wf||r===Tf||r===Af||r===Rf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===wf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Af)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cf||r===bf||r===Pf||r===Lf||r===Df||r===Xl||r===Nf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Cf||r===bf)return c===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Pf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lf)return u.COMPRESSED_R11_EAC;if(r===Df)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Xl)return u.COMPRESSED_RG11_EAC;if(r===Nf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf||r===zf||r===Gf||r===Hf||r===Vf||r===Wf||r===Xf||r===qf||r===Yf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===If)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ff)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Of)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$f||r===Kf||r===Zf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===$f)return c===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jf||r===Qf||r===ql||r===jf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Jf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Qf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ql)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const $E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
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

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Dg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gs({vertexShader:$E,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ro(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JE extends _s{constructor(e,t){super();const r=this;let o=null,u=1,c=null,d="local-floor",m=1,p=null,x=null,M=null,g=null,S=null,w=null;const R=typeof XRWebGLBinding<"u",v=new ZE,_={},b=t.getContextAttributes();let B=null,P=null;const F=[],N=[],y=new Mt;let C=null,K=null;const z=new ti;z.viewport=new Qt;const V=new ti;V.viewport=new Qt;const Y=[z,V],te=new ox;let I=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let me=F[ae];return me===void 0&&(me=new Yc,F[ae]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ae){let me=F[ae];return me===void 0&&(me=new Yc,F[ae]=me),me.getGripSpace()},this.getHand=function(ae){let me=F[ae];return me===void 0&&(me=new Yc,F[ae]=me),me.getHandSpace()};function ce(ae){const me=N.indexOf(ae.inputSource);if(me===-1)return;const Me=F[me];Me!==void 0&&(Me.update(ae.inputSource,ae.frame,p||c),Me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",ee);for(let ae=0;ae<F.length;ae++){const me=N[ae];me!==null&&(N[ae]=null,F[ae].disconnect(me))}I=null,se=null,v.reset();for(const ae in _)delete _[ae];if(e.setRenderTarget(B),S=null,g=null,M=null,o=null,P=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),K!==null){const ae=K.camera;ae.fov=K.fov,ae.zoom=K.zoom,ae.updateProjectionMatrix(),K=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){u=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return M===null&&R&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?Hr:Wr,Fe=b.stencil?sa:Vi);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:u};M=this.getBinding(),g=M.createProjectionLayer(Be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Hi(g.textureWidth,g.textureHeight,{format:zi,type:ni,depthTexture:new aa(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Hi(S.framebufferWidth,S.framebufferHeight,{format:zi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(ae){for(let me=0;me<ae.removed.length;me++){const Me=ae.removed[me],Fe=N.indexOf(Me);Fe>=0&&(N[Fe]=null,F[Fe].disconnect(Me))}for(let me=0;me<ae.added.length;me++){const Me=ae.added[me];let Fe=N.indexOf(Me);if(Fe===-1){for(let Be=0;Be<F.length;Be++)if(Be>=N.length){N.push(Me),Fe=Be;break}else if(N[Be]===null){N[Be]=Me,Fe=Be;break}if(Fe===-1)break}const ge=F[Fe];ge&&ge.connect(Me)}}function $(ae,me){me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let me=ae.near,Me=ae.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),te.near=V.near=z.near=me,te.far=V.far=z.far=Me,(I!==te.near||se!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),I=te.near,se=te.far),te.layers.mask=ae.layers.mask|6,z.layers.mask=te.layers.mask&-5,V.layers.mask=te.layers.mask&-3;const Fe=ae.parent,ge=te.cameras;$(te,Fe);for(let Be=0;Be<ge.length;Be++)$(ge[Be],Fe);te.projectionMatrix.copy(z.projectionMatrix),te.projectionMatrixInverse.copy(z.projectionMatrixInverse),K===null&&ae.isPerspectiveCamera&&(K={camera:ae,fov:ae.fov,zoom:ae.zoom}),J(ae,te,Fe)};function J(ae,me,Me){Me===null?ae.matrix.copy(me.matrixWorld):(ae.matrix.copy(Me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Zl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(te)},this.getCameraTexture=function(ae){return _[ae]};let D=null;function ne(ae,me){if(x=me.getViewerPose(p||c),w=me,x!==null){const Me=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Fe=!1;Me.length!==te.cameras.length&&(te.cameras.length=0,Fe=!0);for(let je=0;je<Me.length;je++){const dt=Me[je];let wt=null;if(S!==null)wt=S.getViewport(dt);else{const Ot=M.getViewSubImage(g,dt);wt=Ot.viewport,je===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let ut=Y[je];ut===void 0&&(ut=new ti,ut.layers.enable(je),ut.viewport=new Qt,Y[je]=ut),ut.matrix.fromArray(dt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(dt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(wt.x,wt.y,wt.width,wt.height),je===0&&(te.matrix.copy(ut.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Fe===!0&&te.cameras.push(ut)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){M=r.getBinding();const je=M.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&v.init(je,o.renderState)}if(ge&&ge.includes("camera-access")&&R){e.state.unbindTexture(),M=r.getBinding();for(let je=0;je<Me.length;je++){const dt=Me[je].camera;if(dt){let wt=_[dt];wt||(wt=new Dg,_[dt]=wt);const ut=M.getCameraImage(dt);wt.sourceTexture=ut}}}}for(let Me=0;Me<F.length;Me++){const Fe=N[Me],ge=F[Me];Fe!==null&&ge!==void 0&&ge.update(Fe,me,p||c)}D&&D(ae,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const Le=new Fg;Le.setAnimationLoop(ne),this.setAnimationLoop=function(ae){D=ae},this.dispose=function(){}}}const QE=new qt,qg=new lt;qg.set(-1,0,0,0,1,0,0,0,1);function jE(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Ng(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,B,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(v,_):_.isMeshLambertMaterial?(u(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(v,_),M(v,_)):_.isMeshPhongMaterial?(u(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(v,_),g(v,_),_.isMeshPhysicalMaterial&&S(v,_,P)):_.isMeshMatcapMaterial?(u(v,_),w(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(c(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?m(v,_,b,B):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===$n&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===$n&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),B=b.envMap,P=b.envMapRotation;B&&(v.envMap.value=B,v.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(P)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(qg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function m(v,_,b,B){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=B*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function M(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,b){v.ior.value=_.ior,_.diffuseRoughness>0&&(v.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ew(s,e,t,r){let o={},u={};function c(b,B){const P=B.program;r.uniformBlockBinding(b,P,o[b.id])}function d(b,B){let P=o[b.id];P===void 0&&(w(b),P=m(b),o[b.id]=P,b.addEventListener("dispose",v));const F=B.program;r.updateUBOMapping(b,F);const N=e.render.frame;u[b.id]!==N&&(p(b),u[b.id]=N)}function m(b){const B=s.createBuffer(),P=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,P,F),s.bindBuffer(s.UNIFORM_BUFFER,null),B}function p(b){const B=o[b.id],P=b.uniforms,F=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let N=0,y=P.length;N<y;N++){const C=P[N];if(Array.isArray(C))for(let K=0,z=C.length;K<z;K++)x(C[K],N,K,F);else x(C,N,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(b,B,P,F){if(g(b,B,P,F)===!0){const N=b.__offset,y=b.value;if(Array.isArray(y)){let C=0;for(let K=0;K<y.length;K++){const z=y[K],V=R(z,!0);M(z,b.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else M(y,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,N,b.__data)}}function M(b,B,P){typeof b=="number"||typeof b=="boolean"?B[P]=b:b.isMatrix3?(B[P]=b.elements[0],B[P+1]=b.elements[1],B[P+2]=b.elements[2],B[P+3]=0,B[P+4]=b.elements[3],B[P+5]=b.elements[4],B[P+6]=b.elements[5],B[P+7]=0,B[P+8]=b.elements[6],B[P+9]=b.elements[7],B[P+10]=b.elements[8],B[P+11]=0):ArrayBuffer.isView(b)?B.set(b.subarray(0,B.length-P),P):b.toArray(B,P)}function g(b,B,P,F){const N=b.value,y=B+"_"+P;if(Array.isArray(N)){F[y]===void 0&&(F[y]=[]);const C=F[y];let K=!1;for(let z=0;z<N.length;z++)S(N[z],C,z)===!0&&(K=!0);return K}return S(N,F,y)}function S(b,B,P){if(B[P]===void 0)return typeof b=="number"||typeof b=="boolean"?B[P]=b:ArrayBuffer.isView(b)?B[P]=b.slice():B[P]=b.clone(),!0;{const F=B[P];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return B[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function w(b){const B=b.uniforms;let P=0;const F=16;for(let y=0,C=B.length;y<C;y++){const K=Array.isArray(B[y])?B[y]:[B[y]];for(let z=0,V=K.length;z<V;z++){const Y=K[z],te=Array.isArray(Y.value)?Y.value:[Y.value],I=Array.isArray(B[y])||Array.isArray(Y.value);let se=P;for(let Z=0,ee=te.length;Z<ee;Z++){const $=te[Z],J=R($,I),D=P%F,ne=D%J.boundary,Le=D+ne;P+=ne,Le!==0&&F-Le<J.storage&&(P+=F-Le),Z===0&&(se=P),P+=J.storage}const ce=Y.type==="int"?Int32Array:Y.type==="uint"?Uint32Array:Float32Array;Y.__data=new ce((P-se)/Float32Array.BYTES_PER_ELEMENT),Y.__offset=se}}const N=P%F;return N>0&&(P+=F-N),b.__size=P,b.__cache={},this}function R(b,B){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=16,P.storage=48):b.isMatrix4?(P.boundary=16,P.storage=64):b.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(P.boundary=16,P.storage=b.byteLength):st("WebGLRenderer: Unsupported uniform value type.",b),B===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(b){const B=b.target;B.removeEventListener("dispose",v),s.deleteBuffer(o[B.id]),delete o[B.id],delete u[B.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);o={},u={}}return{bind:c,update:d,dispose:_}}const tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function nw(){return Oi===null&&(Oi=new qv(tw,16,16,ms,Wi),Oi.name="DFG_LUT",Oi.minFilter=Yn,Oi.magFilter=Yn,Oi.wrapS=lr,Oi.wrapT=lr,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class iw{constructor(e={}){const{canvas:t=vv(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ni}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const R=S,v=new Set([dd,fd,cd]),_=new Set([ni,Vi,Qa,sa,ld,ud]),b=new Uint32Array(4),B=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let F=null,N=null;const y=[],C=[];let K=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,Y=null,te=null,I=null,se=null;this._outputColorSpace=di;let ce=0,Z=0,ee=null,$=-1,J=null;const D=new Qt,ne=new Qt;let Le=null;const ae=new gt(0);let me=0,Me=t.width,Fe=t.height,ge=1,Be=null,xt=null;const je=new Qt(0,0,Me,Fe),dt=new Qt(0,0,Me,Fe);let wt=!1;const ut=new eo,Ot=new _d;let zt=!1,sn=!1;const It=new qt,bn=new G,Bt=new Qt,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function ht(){return ee===null?ge:1}let X=r;function wn(E,U){return t.getContext(E,U)}let Lt,ct,Ne,Yt,Je,et,L,A,ie,Se,pe,Ae,Re,ue,de,Ee,k,he,fe,Pe,we,Ce,$e;try{const E={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),X===null){const U="webgl2";if(X=wn(U,E),X===null)throw wn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(E){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Pt("WebGLRenderer: "+E.message),E}function ot(){Lt=new ay(X),Lt.init(),we=new YE(X,Lt),ct=new KM(X,Lt,e,we),Ne=new XE(X,Lt),ct.reversedDepthBuffer&&g&&Ne.buffers.depth.setReversed(!0),te=X.createFramebuffer(),I=X.createFramebuffer(),se=X.createFramebuffer(),Yt=new uy(X),Je=new LE,et=new qE(X,Lt,Ne,Je,ct,we,Yt),L=new sy(z),A=new fx(X),Ce=new YM(X,A),ie=new oy(X,A,Yt,Ce),Se=new fy(X,ie,A,Ce,Yt),he=new cy(X,ct,et),de=new ZM(Je),pe=new PE(z,L,Lt,ct,Ce,de),Ae=new jE(z,Je),Re=new NE,ue=new kE(Lt),k=new qM(z,L,Ne,Se,w,m),Ee=new WE(z,Se,ct),$e=new ew(X,Yt,ct,Ne),fe=new $M(X,Lt,Yt),Pe=new ly(X,Lt,Yt),Yt.programs=pe.programs,z.capabilities=ct,z.extensions=Lt,z.properties=Je,z.renderLists=Re,z.shadowMap=Ee,z.state=Ne,z.info=Yt}R!==ni&&(K=new hy(R,t.width,t.height,d,o,u));const xe=new JE(z,X);this.xr=xe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(E){E!==void 0&&(ge=E,this.setSize(Me,Fe,!1))},this.getSize=function(E){return E.set(Me,Fe)},this.setSize=function(E,U,q=!0){if(xe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=E,Fe=U,t.width=Math.floor(E*ge),t.height=Math.floor(U*ge),q===!0&&(t.style.width=E+"px",t.style.height=U+"px"),K!==null&&K.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Me*ge,Fe*ge).floor()},this.setDrawingBufferSize=function(E,U,q){Me=E,Fe=U,ge=q,t.width=Math.floor(E*q),t.height=Math.floor(U*q),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(R===ni){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(je)},this.setViewport=function(E,U,q,j){E.isVector4?je.set(E.x,E.y,E.z,E.w):je.set(E,U,q,j),Ne.viewport(D.copy(je).multiplyScalar(ht()).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,U,q,j){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,q,j),Ne.scissor(ne.copy(dt).multiplyScalar(ht()).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(E){Ne.setScissorTest(wt=E)},this.setOpaqueSort=function(E){Be=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,q=!0){let j=0;if(E){let Q=!1;if(ee!==null){const De=ee.texture.format;Q=v.has(De)}if(Q){const De=ee.texture.type,ze=_.has(De),Te=k.getClearColor(),Ue=k.getClearAlpha(),Ie=Te.r,Ge=Te.g,tt=Te.b;ze?(b[0]=Ie,b[1]=Ge,b[2]=tt,b[3]=Ue,X.clearBufferuiv(X.COLOR,0,b)):(B[0]=Ie,B[1]=Ge,B[2]=tt,B[3]=Ue,X.clearBufferiv(X.COLOR,0,B))}else j|=X.COLOR_BUFFER_BIT}U&&(j|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),Y=E},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),k.dispose(),Re.dispose(),ue.dispose(),et.dispose(),Je.dispose(),L.dispose(),Se.dispose(),ie.dispose(),Ce.dispose(),$e.dispose(),pe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",qr),xe.removeEventListener("sessionend",ii),ri.stop()};function qe(E){E.preventDefault(),im("WebGLRenderer: Context Lost."),V=!0}function rt(){im("WebGLRenderer: Context Restored."),V=!1;const E=Yt.autoReset,U=Ee.enabled,q=Ee.autoUpdate,j=Ee.needsUpdate,Q=Ee.type;ot(),Yt.autoReset=E,Ee.enabled=U,Ee.autoUpdate=q,Ee.needsUpdate=j,Ee.type=Q}function Oe(E){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function vt(E){const U=E.target;U.removeEventListener("dispose",vt),Ht(U)}function Ht(E){tn(E),Je.remove(E)}function tn(E){const U=Je.get(E).programs;U!==void 0&&(U.forEach(function(q){pe.releaseProgram(q)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,q,j,Q,De){U===null&&(U=en);const ze=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Te=hr(E,U,q,j,Q);Ne.setMaterial(j,ze);let Ue=q.index,Ie=1;if(j.wireframe===!0){if(Ue=ie.getWireframeAttribute(q),Ue===void 0)return;Ie=2}const Ge=q.drawRange,tt=q.attributes.position;let Ve=Ge.start*Ie,ft=(Ge.start+Ge.count)*Ie;De!==null&&(Ve=Math.max(Ve,De.start*Ie),ft=Math.min(ft,(De.start+De.count)*Ie)),Ue!==null?(Ve=Math.max(Ve,0),ft=Math.min(ft,Ue.count)):tt!=null&&(Ve=Math.max(Ve,0),ft=Math.min(ft,tt.count));const Dt=ft-Ve;if(Dt<0||Dt===1/0)return;Ce.setup(Q,j,Te,q,Ue);let Tt,At=fe;if(Ue!==null&&(Tt=A.get(Ue),At=Pe,At.setIndex(Tt)),Q.isMesh)j.wireframe===!0?(Ne.setLineWidth(j.wireframeLinewidth*ht()),At.setMode(X.LINES)):At.setMode(X.TRIANGLES);else if(Q.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),Ne.setLineWidth(Vt*ht()),Q.isLineSegments?At.setMode(X.LINES):Q.isLineLoop?At.setMode(X.LINE_LOOP):At.setMode(X.LINE_STRIP)}else Q.isPoints?At.setMode(X.POINTS):Q.isSprite&&At.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))At.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Vt=Q._multiDrawStarts,We=Q._multiDrawCounts,nn=Q._multiDrawCount,Ze=Ue?A.get(Ue).bytesPerElement:1,Pi=Je.get(j).currentProgram.getUniforms();for(let hn=0;hn<nn;hn++)Pi.setValue(X,"_gl_DrawID",hn),At.render(Vt[hn]/Ze,We[hn])}else if(Q.isInstancedMesh)At.renderInstances(Ve,Dt,Q.count);else if(q.isInstancedBufferGeometry){const Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,We=Math.min(q.instanceCount,Vt);At.renderInstances(Ve,Dt,We)}else At.render(Ve,Dt)};function fr(E,U,q,j){Y!==null&&E.isNodeMaterial&&Y.setObject(j,E),zt===!0&&de.setState(E,q,!1),E.transparent===!0&&E.side===wi&&E.forceSinglePass===!1?(E.side=$n,E.needsUpdate=!0,bi(E,U,j),E.side=ps,E.needsUpdate=!0,bi(E,U,j),E.side=wi):bi(E,U,j)}this.compile=function(E,U,q=null){q===null&&(q=E),Y!==null&&Y.renderStart(E,U,q),N=ue.get(q),N.init(U),C.push(N),q.traverseVisible(function(Q){Q.isLight&&Q.layers.test(U.layers)&&(N.pushLight(Q),Q.castShadow&&N.pushShadow(Q))}),E!==q&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(U.layers)&&(N.pushLight(Q),Q.castShadow&&N.pushShadow(Q))}),N.setupLights(),Y!==null&&Y.updateLights(N.state.lightsArray),sn=this.localClippingEnabled,zt=de.init(this.clippingPlanes,sn),zt===!0&&de.setGlobalState(this.clippingPlanes,U),Y!==null&&Ee.render(N.state.shadowsArray,q,U);const j=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Te=De[ze];fr(Te,q,U,Q),j.add(Te)}else fr(De,q,U,Q),j.add(De)}),N=C.pop(),Y!==null&&Y.renderEnd(),j},this.compileAsync=function(E,U,q=null){const j=this.compile(E,U,q);return new Promise(Q=>{function De(){if(j.forEach(function(ze){const Ue=Je.get(ze).currentProgram;(Ue===void 0||Ue.isReady())&&j.delete(ze)}),j.size===0){Q(E);return}setTimeout(De,10)}Lt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ai=null;function xs(E){Ai&&Ai(E)}function qr(){ri.stop()}function ii(){ri.start()}const ri=new Fg;ri.setAnimationLoop(xs),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){Ai=E,xe.setAnimationLoop(E),E===null?ri.stop():ri.start()},xe.addEventListener("sessionstart",qr),xe.addEventListener("sessionend",ii),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(E,U);const q=xe.enabled===!0&&xe.isPresenting===!0,j=K!==null&&(ee===null||q)&&K.begin(z,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(U),U=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(z,E,U,ee),N=ue.get(E,C.length),N.init(U),N.state.textureUnits=et.getTextureUnits(),C.push(N),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ot.setFromArrayCamera(U):ut.setFromProjectionMatrix(It,Ti,U.reversedDepth),sn=this.localClippingEnabled,zt=de.init(this.clippingPlanes,sn),F=Re.get(E,y.length),F.init(),y.push(F),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){const ze=z.xr.getDepthSensingMesh();ze!==null&&Ri(ze,U,-1/0,z.sortObjects)}Ri(E,U,0,z.sortObjects),F.finish(),Y!==null&&Y.updateLights(N.state.lightsArray),z.sortObjects===!0&&F.sort(Be,xt),dn=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,dn&&k.addToRenderList(F,E),this.info.autoReset===!0&&this.info.reset(),zt===!0&&de.beginShadows();const Q=N.state.shadowsArray;if(Ee.render(Q,E,U),zt===!0&&de.endShadows(),(j&&K.hasRenderPass())===!1){const ze=F.opaque,Te=F.transmissive;if(N.setupLights(),U.isArrayCamera){const Ue=U.cameras;if(Te.length>0)for(let Ie=0,Ge=Ue.length;Ie<Ge;Ie++){const tt=Ue[Ie];Ci(ze,Te,E,tt)}dn&&k.render(E);for(let Ie=0,Ge=Ue.length;Ie<Ge;Ie++){const tt=Ue[Ie];Xi(F,E,tt,tt.viewport)}}else Te.length>0&&Ci(ze,Te,E,U),dn&&k.render(E),Xi(F,E,U)}ee!==null&&Z===0&&(et.updateMultisampleRenderTarget(ee),et.updateRenderTargetMipmap(ee)),j&&K.end(z),E.isScene===!0&&E.onAfterRender(z,E,U),Ce.resetDefaultState(),$=-1,J=null,C.pop(),C.length>0?(N=C[C.length-1],et.setTextureUnits(N.state.textureUnits),zt===!0&&de.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,y.pop(),y.length>0?F=y[y.length-1]:F=null,Y!==null&&Y.renderEnd()};function Ri(E,U,q,j){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)N.pushLight(E),E.castShadow&&N.pushShadow(E);else if(E.isSprite){const ze=U.isArrayCamera?Ot:ut;if(!E.frustumCulled||E.intersectsFrustum(ze)){j&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const Te=Se.update(E),Ue=E.material;Ue.visible&&F.push(E,Te,Ue,q,Bt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const ze=U.isArrayCamera?Ot:ut;if(!E.frustumCulled||E.intersectsFrustum(ze)){const Te=Se.update(E),Ue=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Bt.copy(Te.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(Ue)){const Ie=Te.groups;for(let Ge=0,tt=Ie.length;Ge<tt;Ge++){const Ve=Ie[Ge],ft=Ue[Ve.materialIndex];ft&&ft.visible&&F.push(E,Te,ft,q,Bt.z,Ve,U)}}else Ue.visible&&F.push(E,Te,Ue,q,Bt.z,null,U)}}}const De=E.children;for(let ze=0,Te=De.length;ze<Te;ze++)Ri(De[ze],U,q,j)}function Xi(E,U,q,j){const{opaque:Q,transmissive:De,transparent:ze}=E;N.setupLightsView(q),zt===!0&&de.setGlobalState(z.clippingPlanes,q),j&&Ne.viewport(D.copy(j)),Q.length>0&&qi(Q,U,q),De.length>0&&qi(De,U,q),ze.length>0&&qi(ze,U,q),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ci(E,U,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[j.id]===void 0){const Ve=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[j.id]=new Hi(1,1,{generateMipmaps:!0,type:Ve?Wi:ni,minFilter:Gr,samples:Math.max(4,ct.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const De=N.state.transmissionRenderTarget[j.id],ze=j.viewport||D;De.setSize(ze.z*z.transmissionResolutionScale,ze.w*z.transmissionResolutionScale);const Te=z.getRenderTarget(),Ue=z.getActiveCubeFace(),Ie=z.getActiveMipmapLevel();z.setRenderTarget(De),z.getClearColor(ae),me=z.getClearAlpha(),me<1&&z.setClearColor(16777215,.5),z.clear(),dn&&k.render(q);const Ge=z.toneMapping;z.toneMapping=ur;const tt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),N.setupLightsView(j),zt===!0&&de.setGlobalState(z.clippingPlanes,j),qi(E,q,j),et.updateMultisampleRenderTarget(De),et.updateRenderTargetMipmap(De),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ft=0,Dt=U.length;ft<Dt;ft++){const Tt=U[ft],{object:At,geometry:Vt,material:We,group:nn}=Tt;if(We.side===wi&&At.layers.test(j.layers)){const Ze=We.side;We.side=$n,We.needsUpdate=!0,Yr(At,q,j,Vt,We,nn),We.side=Ze,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(et.updateMultisampleRenderTarget(De),et.updateRenderTargetMipmap(De))}z.setRenderTarget(Te,Ue,Ie),z.setClearColor(ae,me),tt!==void 0&&(j.viewport=tt),z.toneMapping=Ge}function qi(E,U,q){const j=U.isScene===!0?U.overrideMaterial:null;for(let Q=0,De=E.length;Q<De;Q++){const ze=E[Q],{object:Te,geometry:Ue,group:Ie}=ze;let Ge=ze.material;Ge.allowOverride===!0&&j!==null&&(Ge=j),Te.layers.test(q.layers)&&Yr(Te,U,q,Ue,Ge,Ie)}}function Yr(E,U,q,j,Q,De){Y!==null&&Q.isNodeMaterial&&Y.setObject(E,Q),E.onBeforeRender(z,U,q,j,Q,De),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(z,U,q,j,E,De),Q.transparent===!0&&Q.side===wi&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,z.renderBufferDirect(q,U,j,Q,E,De),Q.side=ps,Q.needsUpdate=!0,z.renderBufferDirect(q,U,j,Q,E,De),Q.side=wi):z.renderBufferDirect(q,U,j,Q,E,De),E.onAfterRender(z,U,q,j,Q,De)}function dr(E){let U=0;for(const q of E)q.texture!==null&&U++;return U}function bi(E,U,q){U.isScene!==!0&&(U=en);const j=Je.get(E),Q=N.state.lights,De=N.state.shadowsArray,ze=Q.state.version,Te=pe.getParameters(E,Q.state,De,U,q,N.state.lightProbeGridArray),Ue=pe.getProgramCacheKey(Te);let Ie=j.programs;j.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,j.fog=U.fog;const Ge=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;j.envMap=L.get(E.envMap||j.environment,Ge),j.envMapRotation=j.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",vt),Ie=new Map,j.programs=Ie,j.programVariants=new Map);let tt=Ie.get(Ue);if(tt!==void 0){if(j.currentProgram===tt&&j.lightsStateVersion===ze)return Kr(E,Te),tt}else Te.uniforms=pe.getUniforms(E),Y!==null&&E.isNodeMaterial&&Y.build(E,q,Te),E.onBeforeCompile(Te,z),tt=pe.acquireProgram(Te,Ue),Ie.set(Ue,tt),j.uniforms=Te.uniforms;const Ve=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Kr(E,Te),j.needsLights=pr(E),j.lightsStateVersion=ze,j.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.sunLights.value=Q.state.sun,Ve.sunLightShadows.value=Q.state.sunShadow,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ve.sunShadowCascade.value=Q.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.numLightProbeGrids=dr(N.state.lightProbeGridArray),j.currentProgram=tt,j.uniformsList=null,tt}function $r(E,U,q,j,Q){const De=Je.get(E),ze=De.currentProgram.id+","+j+","+Q;let Te=De.programVariants.get(ze);return Te===void 0?(Te=bi(E,U,q),De.programVariants.set(ze,Te)):(De.currentProgram=Te,De.uniformsList=null,De.outputColorSpace=j,De.toneMapping=Q),Te}function Ut(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Wl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Kr(E,U){const q=Je.get(E);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function hr(E,U,q,j,Q){U.isScene!==!0&&(U=en),et.resetTextureUnits();const De=U.fog,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?U.environment:null,Te=ee===null?z.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,Ue=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ie=L.get(j.envMap||ze,Ue),Ge=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ve=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let Tt=ur;j.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Tt=z.toneMapping);const At=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=At!==void 0?At.length:0,We=Je.get(j),nn=N.state.lights;if(zt===!0&&(sn===!0||E!==J)){const Ct=E===J&&j.id===$;de.setState(j,E,Ct)}let Ze=!1,Pi=!1;j.version===We.__version?We.needsLights&&We.lightsStateVersion!==nn.state.version||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Ie||j.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==tt||We.morphTargets!==Ve||We.morphNormals!==ft||We.morphColors!==Dt||We.morphTargetsCount!==Vt||We.numLightProbeGrids!==dr(N.state.lightProbeGridArray)?Ze=!0:(We.outputColorSpace!==Te||We.toneMapping!==Tt)&&(Pi=!0):(Ze=!0,We.__version=j.version);let hn=We.currentProgram;(Ze===!0||Pi===!0)&&(hn=Pi===!0?$r(j,U,Q,Te,Tt):bi(j,U,Q),Y&&j.isNodeMaterial&&Y.onUpdateProgram(j,hn,We));let mr=!1,pi=!1,Li=!1;const St=hn.getUniforms(),an=We.uniforms;if(Ne.useProgram(hn.program)&&(mr=!0,pi=!0,Li=!0),j.id!==$&&($=j.id,pi=!0),mr||J!==E){Ne.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(X,"projectionMatrix",E.projectionMatrix),St.setValue(X,"viewMatrix",E.matrixWorldInverse);const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(X,bn.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&St.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,pi=!0,Li=!0)}if(We.needsLights&&(nn.state.sunShadowMap.length>0&&St.setValue(X,"sunShadowMap",nn.state.sunShadowMap,et),nn.state.directionalShadowMap.length>0&&St.setValue(X,"directionalShadowMap",nn.state.directionalShadowMap,et),nn.state.spotShadowMap.length>0&&St.setValue(X,"spotShadowMap",nn.state.spotShadowMap,et),nn.state.pointShadowMap.length>0&&St.setValue(X,"pointShadowMap",nn.state.pointShadowMap,et)),Q.isSkinnedMesh){St.setOptional(X,Q,"bindMatrix"),St.setOptional(X,Q,"bindMatrixInverse");const Ct=Q.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),St.setValue(X,"boneTexture",Ct.boneTexture,et))}Q.isBatchedMesh&&(St.setOptional(X,Q,"batchingTexture"),St.setValue(X,"batchingTexture",Q._matricesTexture,et),St.setOptional(X,Q,"batchingIdTexture"),St.setValue(X,"batchingIdTexture",Q._indirectTexture,et),St.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&St.setValue(X,"batchingColorTexture",Q._colorsTexture,et));const Pn=q.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&he.update(Q,q,hn),(pi||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,St.setValue(X,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=nw()),pi){if(St.setValue(X,"toneMappingExposure",z.toneMappingExposure),We.needsLights&&Zr(an,Li),De&&j.fog===!0&&Ae.refreshFogUniforms(an,De),Ae.refreshMaterialUniforms(an,j,ge,Fe,N.state.transmissionRenderTarget[E.id]),We.needsLights&&We.numLightProbeGrids>0){const Ct=P;let kt=0;for(const vn of N.state.lightProbeGridArray)vn.texture!==null&&(Ct.textures[kt]=vn.texture,Ct.min[kt]=vn.boundingBox.min,Ct.max[kt]=vn.boundingBox.max,Ct.resolution[kt]=vn.resolution,kt++);for(const vn in Ct)Ct[vn].length=kt;an.probesSH.value=Ct.textures,an.probesMin.value=Ct.min,an.probesMax.value=Ct.max,an.probesResolution.value=Ct.resolution}Wl.upload(X,Ut(We),an,et)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wl.upload(X,Ut(We),an,et),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(X,"center",Q.center),St.setValue(X,"modelViewMatrix",Q.modelViewMatrix),St.setValue(X,"normalMatrix",Q.normalMatrix),St.setValue(X,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){const Ct=j.uniformsGroups;for(let kt=0,vn=Ct.length;kt<vn;kt++){const gr=Ct[kt];$e.update(gr,hn),$e.bind(gr,hn)}}return hn}function Zr(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function pr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,U,q){const j=Je.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Je.get(E.texture).__webglTexture=U,Je.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const q=Je.get(E);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,q=0){ee=E,ce=U,Z=q;let j=null,Q=!1,De=!1;if(E){const Te=Je.get(E);if(Te.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(X.FRAMEBUFFER,Te.__webglFramebuffer),D.copy(E.viewport),ne.copy(E.scissor),Le=E.scissorTest,Ne.viewport(D),Ne.scissor(ne),Ne.setScissorTest(Le),$=-1;return}else if(Te.__webglFramebuffer===void 0)et.setupRenderTarget(E);else if(Te.__hasExternalTextures)et.rebindTextures(E,Je.get(E.texture).__webglTexture,Je.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ge=E.depthTexture;if(Te.__boundDepthTexture!==Ge){if(Ge!==null&&Je.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(De=!0);const Ie=Je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?j=Ie[U][q]:j=Ie[U],Q=!0):E.samples>0&&et.useMultisampledRTT(E)===!1?j=Je.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?j=Ie[q]:j=Ie,D.copy(E.viewport),ne.copy(E.scissor),Le=E.scissorTest}else D.copy(je).multiplyScalar(ge).floor(),ne.copy(dt).multiplyScalar(ge).floor(),Le=wt;if(q!==0&&(j=te),Ne.bindFramebuffer(X.FRAMEBUFFER,j)&&Ne.drawBuffers(E,j),Ne.viewport(D),Ne.scissor(ne),Ne.setScissorTest(Le),Q){const Te=Je.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,q)}else if(De){const Te=U;for(let Ue=0;Ue<E.textures.length;Ue++){const Ie=Je.get(E.textures[Ue]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ue,Ie.__webglTexture,q,Te)}}else if(E!==null&&q!==0){const Te=Je.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Te.__webglTexture,q)}$=-1};function Jr(E){const U=Je.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ct.textureFormatReadable(E.format),U.__typeReadable=ct.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,q,j,Q,De,ze,Te=0){if(!(E&&E.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ue=Ue[ze],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){Ne.bindFramebuffer(X.FRAMEBUFFER,Ue);try{const Ie=E.textures[Te],Ge=Ie.format,tt=Ie.type;E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);const Ve=Jr(Ie);if(Ve.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-j&&q>=0&&q<=E.height-Q&&X.readPixels(U,q,j,Q,we.convert(Ge),we.convert(tt),De)}finally{const Ie=ee!==null?Je.get(ee).__webglFramebuffer:null;Ne.bindFramebuffer(X.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,q,j,Q,De,ze,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ue=Ue[ze],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(U>=0&&U<=E.width-j&&q>=0&&q<=E.height-Q){Ne.bindFramebuffer(X.FRAMEBUFFER,Ue);const Ie=E.textures[Te],Ge=Ie.format,tt=Ie.type;E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);const Ve=Jr(Ie);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.bufferData(X.PIXEL_PACK_BUFFER,De.byteLength,X.STREAM_READ),X.readPixels(U,q,j,Q,we.convert(Ge),we.convert(tt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Dt=ee!==null?Je.get(ee).__webglFramebuffer:null;Ne.bindFramebuffer(X.FRAMEBUFFER,Dt);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await xv(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,De),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ft),X.deleteSync(Tt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,q=0){const j=Math.pow(2,-q),Q=Math.floor(E.image.width*j),De=Math.floor(E.image.height*j),ze=U!==null?U.x:0,Te=U!==null?U.y:0;et.setTexture2D(E,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,ze,Te,Q,De),Ne.unbindTexture()},this.copyTextureToTexture=function(E,U,q=null,j=null,Q=0,De=0){let ze,Te,Ue,Ie,Ge,tt,Ve,ft,Dt;const Tt=E.isCompressedTexture?E.mipmaps[De]:E.image;if(q!==null)ze=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Ge=q.min.y,tt=q.isBox3?q.min.z:0;else{const St=Math.pow(2,-Q);ze=Math.floor(Tt.width*St),Te=Math.floor(Tt.height*St),E.isDataArrayTexture?Ue=Tt.depth:E.isData3DTexture?Ue=Math.floor(Tt.depth*St):Ue=1,Ie=0,Ge=0,tt=0}j!==null?(Ve=j.x,ft=j.y,Dt=j.z):(Ve=0,ft=0,Dt=0);const At=we.convert(U.format),Vt=we.convert(U.type);let We;U.isData3DTexture?(et.setTexture3D(U,0),We=X.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(et.setTexture2DArray(U,0),We=X.TEXTURE_2D_ARRAY):(et.setTexture2D(U,0),We=X.TEXTURE_2D),Ne.activeTexture(X.TEXTURE0),Ne.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,U.flipY),Ne.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Ne.pixelStorei(X.UNPACK_ALIGNMENT,U.unpackAlignment);const nn=Ne.getParameter(X.UNPACK_ROW_LENGTH),Ze=Ne.getParameter(X.UNPACK_IMAGE_HEIGHT),Pi=Ne.getParameter(X.UNPACK_SKIP_PIXELS),hn=Ne.getParameter(X.UNPACK_SKIP_ROWS),mr=Ne.getParameter(X.UNPACK_SKIP_IMAGES);Ne.pixelStorei(X.UNPACK_ROW_LENGTH,Tt.width),Ne.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt.height),Ne.pixelStorei(X.UNPACK_SKIP_PIXELS,Ie),Ne.pixelStorei(X.UNPACK_SKIP_ROWS,Ge),Ne.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const pi=E.isDataArrayTexture||E.isData3DTexture,Li=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const St=Je.get(E),an=Je.get(U),Pn=Je.get(St.__renderTarget),Ct=Je.get(an.__renderTarget);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let kt=0;kt<Ue;kt++)pi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Je.get(E).__webglTexture,Q,tt+kt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Je.get(U).__webglTexture,De,Dt+kt)),X.blitFramebuffer(Ie,Ge,Ie+ze,Ge+Te,Ve,ft,Ve+ze,ft+Te,X.DEPTH_BUFFER_BIT,X.NEAREST);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||Je.has(E)){const St=Je.get(E),an=Je.get(U);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,I),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,se);for(let Pn=0;Pn<Ue;Pn++)pi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,St.__webglTexture,Q,tt+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,St.__webglTexture,Q),Li?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,an.__webglTexture,De,Dt+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,an.__webglTexture,De),Q!==0?X.blitFramebuffer(Ie,Ge,Ie+ze,Ge+Te,Ve,ft,Ve+ze,ft+Te,X.COLOR_BUFFER_BIT,X.NEAREST):Li?X.copyTexSubImage3D(We,De,Ve,ft,Dt+Pn,Ie,Ge,ze,Te):X.copyTexSubImage2D(We,De,Ve,ft,Ie,Ge,ze,Te);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Li?E.isDataTexture||E.isData3DTexture?X.texSubImage3D(We,De,Ve,ft,Dt,ze,Te,Ue,At,Vt,Tt.data):U.isCompressedArrayTexture?X.compressedTexSubImage3D(We,De,Ve,ft,Dt,ze,Te,Ue,At,Tt.data):X.texSubImage3D(We,De,Ve,ft,Dt,ze,Te,Ue,At,Vt,Tt):E.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,De,Ve,ft,ze,Te,At,Vt,Tt.data):E.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,De,Ve,ft,Tt.width,Tt.height,At,Tt.data):X.texSubImage2D(X.TEXTURE_2D,De,Ve,ft,ze,Te,At,Vt,Tt);Ne.pixelStorei(X.UNPACK_ROW_LENGTH,nn),Ne.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ze),Ne.pixelStorei(X.UNPACK_SKIP_PIXELS,Pi),Ne.pixelStorei(X.UNPACK_SKIP_ROWS,hn),Ne.pixelStorei(X.UNPACK_SKIP_IMAGES,mr),De===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&X.generateMipmap(We),Ne.unbindTexture()},this.initRenderTarget=function(E){Je.get(E).__webglFramebuffer===void 0&&et.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?et.setTextureCube(E,0):E.isData3DTexture?et.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?et.setTexture2DArray(E,0):et.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){ce=0,Z=0,ee=null,Ne.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function rw(){const s=Gi.useRef(null);return Gi.useEffect(()=>{const e=s.current;if(!e)return;const t=new Bv;t.background=new gt("#070b14"),t.fog=new md("#070b14",.018);const r=new ti(45,e.clientWidth/e.clientHeight,.1,200);r.position.set(20,15,26),r.lookAt(0,9,0);const o=new iw({antialias:!0,alpha:!1});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(e.clientWidth,e.clientHeight),o.toneMapping=ad,o.toneMappingExposure=1.1,e.appendChild(o.domElement);const u=new ax("#1e293b",1.8);t.add(u);const c=new Lm("#60a5fa",2.2);c.position.set(30,40,20),t.add(c);const d=new Pm("#f59e0b",3,35);d.position.set(-6,16,4),t.add(d);const m=new Pm("#06b6d4",2.5,45);m.position.set(12,10,-6),t.add(m);const p=new Lm("#ffffff",3.8);p.position.set(-14,28,16),t.add(p);const x=new ix("#e0f2fe",5.5,60,Math.PI/2.8,.35);x.position.set(-3,1,9),x.target.position.set(-11,10,-6),t.add(x),t.add(x.target);const M=new Or({color:"#f1f5f9",roughness:.2,metalness:.9,emissive:"#475569",emissiveIntensity:.35}),g=new Or({color:"#cbd5e1",roughness:.28,metalness:.92,emissive:"#334155",emissiveIntensity:.28}),S=new Or({color:"#ffffff",roughness:.12,metalness:.98,emissive:"#94a3b8",emissiveIntensity:.45}),w=new Or({color:"#cbd5e1",roughness:.35,metalness:.78,emissive:"#334155",emissiveIntensity:.25}),R=new Rn({color:"#ffffff",transparent:!0,opacity:.9}),v=new Or({color:"#64748b",roughness:.65,metalness:.25,emissive:"#1e293b",emissiveIntensity:.2}),_=new Or({color:"#f59e0b",roughness:.4,metalness:.6,emissive:"#d97706",emissiveIntensity:.15}),b=new Rn({color:"#38bdf8",transparent:!0,opacity:.7}),B=new Rn({color:"#22d3ee",transparent:!0,opacity:.85}),P=new Vl({color:"#ef4444"}),F=new ux(70,70,"#0284c7","#1e293b");F.position.y=0,F.material.opacity=.25,F.material.transparent=!0,t.add(F);const N=new vd(10,10.2,64);N.rotateX(-Math.PI/2);const y=new Vl({color:"#0284c7",side:wi,transparent:!0,opacity:.3}),C=new Ft(N,y);C.position.y=.05,t.add(C);const K=C.clone();K.scale.set(1.8,1.8,1.8),t.add(K);const z=new or;z.position.set(-11,0,-6),t.add(z);const V=6,Y=4,te=4,I=3.6,se=3,ce=new cn(Y*I+2,.8,te*I+2),Z=new Ft(ce,v);Z.position.set((Y-1)*I*.5,.4,(te-1)*I*.5),z.add(Z);const ee=new En(new ar(ce),new Rn({color:"#94a3b8",transparent:!0,opacity:.7}));ee.position.copy(Z.position),z.add(ee);const $=new cn(.56,.56,.56),J=new ar($),D=new ta(.065,.065,.08,8);D.rotateX(Math.PI/2);const ne=new ta(.065,.065,.08,8);ne.rotateZ(Math.PI/2);const Le=new cn(.32,V*se,.32),ae=new ar(Le);for(let E=0;E<Y;E++)for(let U=0;U<te;U++){const q=new Ft(Le,M);q.position.set(E*I,V*se/2,U*I),z.add(q);const j=new En(ae,R);j.position.copy(q.position),z.add(j)}for(let E=1;E<=V;E++){const U=E*se,q=new cn(Y*I,.28,.24),j=new cn(.24,.28,te*I),Q=new ar(q),De=new ar(j);for(let Ie=0;Ie<te;Ie++){const Ge=new Ft(q,M);Ge.position.set((Y-1)*I/2,U,Ie*I),z.add(Ge);const tt=new En(Q,R);tt.position.copy(Ge.position),z.add(tt)}for(let Ie=0;Ie<Y;Ie++){const Ge=new Ft(j,M);Ge.position.set(Ie*I,U,(te-1)*I/2),z.add(Ge);const tt=new En(De,R);tt.position.copy(Ge.position),z.add(tt)}for(let Ie=0;Ie<Y;Ie++)for(let Ge=0;Ge<te;Ge++){const tt=new Ft($,g);tt.position.set(Ie*I,U,Ge*I),z.add(tt);const Ve=new En(J,R);Ve.position.copy(tt.position),z.add(Ve);const ft=[-.16,.16];for(let Dt of ft)for(let Tt of ft){const At=new Ft(D,S);At.position.set(Ie*I+Dt,U+Tt,Ge*I+.3),z.add(At);const Vt=new Ft(D,S);Vt.position.set(Ie*I+Dt,U+Tt,Ge*I-.3),z.add(Vt);const We=new Ft(ne,S);We.position.set(Ie*I+.3,U+Tt,Ge*I+Dt),z.add(We);const nn=new Ft(ne,S);nn.position.set(Ie*I-.3,U+Tt,Ge*I+Dt),z.add(nn)}}if(E<=4){const Ie=new cn((Y-1)*I+.3,.15,(te-1)*I+.3),Ge=new Ft(Ie,w);Ge.position.set((Y-1)*I/2,U-.08,(te-1)*I/2),z.add(Ge);const tt=new En(new ar(Ie),new Rn({color:"#cbd5e1",transparent:!0,opacity:.8}));tt.position.copy(Ge.position),z.add(tt)}const ze=new cn((Y-1)*I,.1,(te-1)*I),Te=new ar(ze),Ue=new En(Te,b);Ue.position.set((Y-1)*I/2,U,(te-1)*I/2),z.add(Ue)}const me=[];for(let E=0;E<V-1;E++){const U=(E+1)*se,q=(E+2)*se;me.push(new G(0,U,(te-1)*I),new G(I,q,(te-1)*I),new G(I,U,(te-1)*I),new G(0,q,(te-1)*I),new G((Y-1)*I,U,0),new G((Y-1)*I,q,I),new G((Y-1)*I,U,I),new G((Y-1)*I,q,0))}const Me=new Kt().setFromPoints(me),Fe=new En(Me,new Rn({color:"#f1f5f9",transparent:!0,opacity:.85}));z.add(Fe);const ge=[],Be=-1.2;for(let E=0;E<5;E++){const U=E*se,q=(E+1)*se;ge.push(new G(Be,U,0),new G(Be,q,0),new G(Be,U,(te-1)*I),new G(Be,q,(te-1)*I),new G(Be,U,0),new G(Be,q,(te-1)*I),new G(Be,U,(te-1)*I),new G(Be,q,0))}const xt=new Kt().setFromPoints(ge),je=new En(xt,B);z.add(je);const dt=new or;dt.position.set(0,0,0),t.add(dt);const wt=new cn(4,1.2,4),ut=new Ft(wt,concreteMat);ut.position.y=.6,dt.add(ut);const Ot=24,zt=1.4,sn=16,It=new cn(zt,Ot,zt),bn=new ar(It),Bt=new En(bn,new Rn({color:"#f59e0b"}));Bt.position.y=Ot/2,dt.add(Bt);const en=[],dn=Ot/sn,ht=zt/2;for(let E=0;E<sn;E++){const U=E*dn,q=(E+1)*dn;en.push(new G(-ht,U,ht),new G(ht,q,ht),new G(ht,U,ht),new G(-ht,q,ht),new G(-ht,U,-ht),new G(ht,q,-ht),new G(ht,U,-ht),new G(-ht,q,-ht))}const X=new Kt().setFromPoints(en),wn=new En(X,new Rn({color:"#d97706",opacity:.7,transparent:!0}));dt.add(wn);const Lt=new Ft(new cn(.5,Ot,.5),_);Lt.position.y=Ot/2,dt.add(Lt);const ct=new or;ct.position.set(0,Ot,0),dt.add(ct);const Ne=new Ft(new ta(1.2,1.2,.8,16),steelMat);ct.add(Ne);const Yt=new cn(1.5,1.8,2),Je=new Ft(Yt,new Or({color:"#0f172a",roughness:.2,metalness:.9}));Je.position.set(1.5,.8,.8),ct.add(Je);const et=new Ft(new ro(1.4,1),new Vl({color:"#38bdf8",side:wi,transparent:!0,opacity:.85}));et.position.set(1.5,1,1.81),ct.add(et);const L=5,A=[new G(-ht,0,-ht),new G(0,L,0),new G(ht,0,-ht),new G(0,L,0),new G(-ht,0,ht),new G(0,L,0),new G(ht,0,ht),new G(0,L,0)],ie=new Kt().setFromPoints(A),Se=new En(ie,new Rn({color:"#f59e0b"}));ct.add(Se);const pe=new Ft(new xd(.25,12,12),P);pe.position.set(0,L+.2,0),ct.add(pe);const Ae=22,Re=1.2,ue=1.2,de=[],Ee=16,k=Ae/Ee;for(let E=0;E<Ee;E++){const U=E*k,q=(E+1)*k;de.push(new G(U,0,-ue/2),new G(q,0,-ue/2),new G(U,0,ue/2),new G(q,0,ue/2),new G(U,Re,0),new G(q,Re,0),new G(U,0,-ue/2),new G(q,Re,0),new G(U,0,ue/2),new G(q,Re,0),new G(U,0,-ue/2),new G(q,0,ue/2))}const he=new Kt().setFromPoints(de),fe=new En(he,new Rn({color:"#f59e0b"}));ct.add(fe);const Pe=[new G(0,0,0),new G(-8,0,0),new G(0,0,-.6),new G(-8,0,-.6),new G(0,0,.6),new G(-8,0,.6)],we=new Kt().setFromPoints(Pe),Ce=new En(we,new Rn({color:"#f59e0b"}));ct.add(Ce);for(let E=0;E<3;E++){const U=new Ft(new cn(1.6,1.4,1.8),concreteMat);U.position.set(-8+1.2+E*1.8,-.2,0),ct.add(U)}const $e=[new G(0,L,0),new G(Ae*.65,Re,0),new G(0,L,0),new G(-8+.5,0,0)],ot=new Kt().setFromPoints($e),xe=new En(ot,new Rn({color:"#94a3b8"}));ct.add(xe);const qe=new or;qe.position.set(13,0,0),ct.add(qe);const rt=new Ft(new cn(1,.4,.8),_);rt.position.y=-.2,qe.add(rt);const Oe=[new G(0,-.3,0),new G(0,-11,0)],vt=new Kt().setFromPoints(Oe),Ht=new Cg(vt,new Rn({color:"#cbd5e1"}));qe.add(Ht);const tn=new or;tn.position.set(0,-11,0),qe.add(tn);const fr=new Ft(new ta(.3,.3,.6,12),_);tn.add(fr);const Ai=7,xs=new Ft(new cn(Ai,.5,.35),new Or({color:"#0284c7",roughness:.3,metalness:.9,emissive:"#0369a1",emissiveIntensity:.4}));xs.position.y=-.6,tn.add(xs);const qr=new En(new ar(new cn(Ai,.5,.35)),new Rn({color:"#38bdf8"}));qr.position.y=-.6,tn.add(qr);const ii=[new G(0,0,0),new G(-Ai*.4,-.4,0),new G(0,0,0),new G(Ai*.4,-.4,0)],ri=new En(new Kt().setFromPoints(ii),new Rn({color:"#e2e8f0"}));tn.add(ri);const Ri=180,Xi=new Float32Array(Ri*3);for(let E=0;E<Ri;E++)Xi[E*3]=(Math.random()-.5)*60,Xi[E*3+1]=Math.random()*30+.5,Xi[E*3+2]=(Math.random()-.5)*60;const Ci=new Kt;Ci.setAttribute("position",new Vr(Xi,3));const qi=new bg({color:"#38bdf8",size:.18,transparent:!0,opacity:.65,blending:pf}),Yr=new $v(Ci,qi);t.add(Yr);let dr=0,bi=0,$r=0,Ut=0;const Kr=E=>{const{innerWidth:U,innerHeight:q}=window;dr=(E.clientX/U-.5)*2,bi=(E.clientY/q-.5)*2};window.addEventListener("mousemove",Kr,{passive:!0});const hr=()=>{if(!e)return;const E=e.clientWidth,U=e.clientHeight;r.aspect=E/U,r.updateProjectionMatrix(),o.setSize(E,U)};window.addEventListener("resize",hr);let Zr;const pr=new lx,Jr=()=>{Zr=requestAnimationFrame(Jr);const E=pr.getElapsedTime();$r+=(dr-$r)*.04,Ut+=(bi-Ut)*.04;const U=E*.04,q=34;r.position.x=Math.sin(U)*q*.35+16+$r*4,r.position.y=13-Ut*3,r.position.z=Math.cos(U)*q*.35+23,r.lookAt(0,9,0);const j=Math.sin(E*.35)*.55-.25;ct.rotation.y=j;const Q=11+Math.sin(E*.5)*4.5;qe.position.x=Q,tn.rotation.z=Math.sin(E*1.2)*.06,tn.rotation.y=Math.sin(E*.8)*.15;const De=Math.sin(E*5)>.1?1:.15;P.color.setRGB(De,.1,.1),C.scale.setScalar(1+E*.25%2.5),y.opacity=Math.max(0,.35-E*.25%2.5*.14);const ze=Ci.attributes.position.array;for(let Te=1;Te<Ri*3;Te+=3)ze[Te]+=.025,ze[Te]>32&&(ze[Te]=.5);Ci.attributes.position.needsUpdate=!0,o.render(t,r)};return Jr(),()=>{cancelAnimationFrame(Zr),window.removeEventListener("mousemove",Kr),window.removeEventListener("resize",hr),e&&o.domElement&&e.removeChild(o.domElement),t.traverse(E=>{(E.isMesh||E.isLine||E.isPoints)&&(E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material.forEach(U=>U.dispose()):E.material.dispose()))}),o.dispose()}},[]),mt.jsx("div",{ref:s,className:"fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})}const eg="wsm_launch_target_timestamp";function sw(){const s=typeof window<"u"?localStorage.getItem(eg):null;if(s){const t=parseInt(s,10);if(!isNaN(t)&&t>Date.now())return t}const e=Date.now()+1440*60*60*1e3;return typeof window<"u"&&localStorage.setItem(eg,e.toString()),e}const aw=({layout:s="2x2"})=>{const[e,t]=Gi.useState({days:60,hours:0,minutes:0,seconds:0});Gi.useEffect(()=>{const u=sw(),c=()=>{const m=u-Date.now();return m>0?{days:Math.floor(m/(1e3*60*60*24)),hours:Math.floor(m/(1e3*60*60)%24),minutes:Math.floor(m/1e3/60%60),seconds:Math.floor(m/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0}};t(c());const d=setInterval(()=>{t(c())},1e3);return()=>clearInterval(d)},[]);const r=[{label:"HARI",value:String(e.days).padStart(2,"0"),color:"text-white"},{label:"JAM",value:String(e.hours).padStart(2,"0"),color:"text-white"},{label:"MENIT",value:String(e.minutes).padStart(2,"0"),color:"text-cyan-400"},{label:"DETIK",value:String(e.seconds).padStart(2,"0"),isAccent:!0,color:"text-emerald-400"}],o=s==="2x2"?"grid grid-cols-2 gap-3.5 sm:gap-4.5 w-full max-w-[340px] sm:max-w-[380px]":"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full";return mt.jsx("div",{className:s==="2x2"?"w-full flex justify-center lg:justify-end":"w-full",children:mt.jsx("div",{className:o,children:r.map((u,c)=>mt.jsxs("div",{className:`relative group flex flex-col items-center justify-center py-5 sm:py-7 px-3.5 sm:px-5 rounded-[24px] bg-slate-950/35 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-slate-900/45 hover:border-cyan-400/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1 ${u.isAccent?"border-emerald-400/30 shadow-[0_12px_36px_rgba(16,185,129,0.18)] hover:border-emerald-400/60":""}`,children:[mt.jsx("div",{className:"absolute top-3.5 right-4 flex items-center",children:mt.jsx("span",{className:`w-2 h-2 rounded-full ${u.isAccent?"bg-emerald-400 animate-ping opacity-90":"bg-cyan-400/70"}`})}),mt.jsx("div",{className:"relative",children:mt.jsx("span",{className:`block text-[44px] sm:text-[54px] md:text-[58px] font-black font-mono leading-none tracking-tight ${u.color} drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] select-none`,children:u.value})}),mt.jsx("span",{className:"mt-2.5 px-3 py-0.5 rounded-full bg-slate-900/70 backdrop-blur-sm border border-white/10 text-slate-200 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase shadow-sm",children:u.label})]},c))})})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Gi.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:u,iconNode:c,...d},m)=>Gi.createElement("svg",{ref:m,...lw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Yg("lucide",o),...d},[...c.map(([p,x])=>Gi.createElement(p,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=(s,e)=>{const t=Gi.forwardRef(({className:r,...o},u)=>Gi.createElement(uw,{ref:u,iconNode:e,className:Yg(`lucide-${ow(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],fw=$g("Mail",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],hw=$g("PhoneCall",dw);function pw(){return mt.jsxs("div",{className:"relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200",children:[mt.jsx(rw,{}),mt.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#070b14]/50 via-transparent to-[#070b14]/30"}),mt.jsxs("header",{className:"relative z-20 w-full px-5 sm:px-8 lg:px-12 py-6 max-w-7xl mx-auto flex items-center justify-between",children:[mt.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg",children:[mt.jsx("div",{className:"w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5",children:mt.jsx("img",{src:"/images/logo-wsm.jpg",alt:"Logo CV. Wahana Sinergi Mitra",className:"w-full h-full object-contain"})}),mt.jsx("span",{className:"text-[13px] font-bold text-slate-100 tracking-wider drop-shadow-sm",children:"CV. WAHANA SINERGI MITRA"})]}),mt.jsxs("div",{className:"flex items-center gap-2.5",children:[mt.jsx("a",{href:"mailto:info@wahanasinergimitra.com",title:"Hubungi Email",className:"w-9 h-9 rounded-full bg-slate-900/60 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-all shadow-md backdrop-blur-sm",children:mt.jsx(fw,{className:"w-4 h-4 stroke-[2]"})}),mt.jsx("a",{href:"https://wa.me/6281234567890",target:"_blank",rel:"noreferrer",title:"WhatsApp Kami",className:"w-9 h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 flex items-center justify-center transition-all shadow-md backdrop-blur-sm",children:mt.jsx(hw,{className:"w-4 h-4 stroke-[2]"})})]})]}),mt.jsx("main",{className:"relative z-10 flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center py-6 sm:py-10",children:mt.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14 my-auto",children:[mt.jsxs("div",{className:"w-full lg:w-auto flex flex-col items-start max-w-xl",children:[mt.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 mb-4 sm:mb-6 shadow-lg",children:[mt.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),mt.jsx("span",{className:"text-[11px] font-bold tracking-widest uppercase",children:"Project Development Phase"})]}),mt.jsxs("h1",{className:"flex flex-col font-black tracking-tight leading-[0.92] select-none",children:[mt.jsx("span",{className:"text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]",children:"WEBSITE"}),mt.jsx("span",{className:"text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-slate-100 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]",children:"SEDANG"}),mt.jsx("span",{className:"text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-slate-200 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]",children:"DALAM"}),mt.jsx("span",{className:"text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_4px_24px_rgba(6,182,212,0.5)]",children:"PERENCANAAN"})]})]}),mt.jsx("div",{className:"w-full lg:w-auto flex justify-center lg:justify-end",children:mt.jsx(aw,{layout:"2x2"})})]})}),mt.jsxs("footer",{className:"relative z-20 w-full px-5 sm:px-8 lg:px-12 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[12px]",children:[mt.jsxs("span",{children:["© ",new Date().getFullYear()," CV. Wahana Sinergi Mitra. All Rights Reserved."]}),mt.jsx("span",{className:"text-slate-400 font-medium tracking-wider uppercase text-[11px]",children:"General Contractor & Engineering"})]})]})}O_.createRoot(document.getElementById("root")).render(mt.jsx(P_.StrictMode,{children:mt.jsx(pw,{})}));
