/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=window,He=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),Pe=new WeakMap;let Fe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(He&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Pe.set(t,e))}return e}toString(){return this.cssText}};const _t=i=>new Fe(typeof i=="string"?i:i+"",void 0,Ce),oe=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new Fe(t,i,Ce)},$t=(i,e)=>{He?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=ee.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},Te=He?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return _t(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;const te=window,Re=te.trustedTypes,bt=Re?Re.emptyScript:"",Ue=te.reactiveElementPolyfillSupport,ke={toAttribute(i,e){switch(e){case Boolean:i=i?bt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Qe=(i,e)=>e!==i&&(e==e||i==i),he={attribute:!0,type:String,converter:ke,reflect:!1,hasChanged:Qe},xe="finalized";let N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Ep(n,t);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||he}static finalize(){if(this.hasOwnProperty(xe))return!1;this[xe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Te(s))}else e!==void 0&&t.push(Te(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=he){var s;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const r=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:ke).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var n;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:ke;this._$El=o,this[o]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Qe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};N[xe]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Ue?.({ReactiveElement:N}),((de=te.reactiveElementVersions)!==null&&de!==void 0?de:te.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const ie=window,I=ie.trustedTypes,Be=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,ne="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Oe="?"+S,wt=`<${Oe}>`,T=document,G=()=>T.createComment(""),J=i=>i===null||typeof i!="object"&&typeof i!="function",Ye=Array.isArray,Xe=i=>Ye(i)||typeof i?.[Symbol.iterator]=="function",pe=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Ie=/>/g,O=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Le=/"/g,et=/^(?:script|style|textarea|title)$/i,At=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),k=At(1),x=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ke=new WeakMap,P=T.createTreeWalker(T,129,null,!1);function tt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}const it=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=K;for(let a=0;a<t;a++){const l=i[a];let c,d,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===K?d[1]==="!--"?r=Ne:d[1]!==void 0?r=Ie:d[2]!==void 0?(et.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=O):d[3]!==void 0&&(r=O):r===O?d[0]===">"?(r=s??K,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?O:d[3]==='"'?Le:ze):r===Le||r===ze?r=O:r===Ne||r===Ie?r=K:(r=O,s=void 0);const p=r===O&&i[a+1].startsWith("/>")?" ":"";o+=r===K?l+wt:u>=0?(n.push(c),l.slice(0,u)+ne+l.slice(u)+S+p):l+S+(u===-2?(n.push(void 0),a):p)}return[tt(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class W{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,d]=it(e,t);if(this.el=W.createElement(c,n),P.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(s=P.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const h of s.getAttributeNames())if(h.endsWith(ne)||h.startsWith(S)){const p=d[r++];if(u.push(h),p!==void 0){const f=s.getAttribute(p.toLowerCase()+ne).split(S),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:$[2],strings:f,ctor:$[1]==="."?st:$[1]==="?"?ot:$[1]==="@"?rt:q})}else l.push({type:6,index:o})}for(const h of u)s.removeAttribute(h)}if(et.test(s.tagName)){const u=s.textContent.split(S),h=u.length-1;if(h>0){s.textContent=I?I.emptyScript:"";for(let p=0;p<h;p++)s.append(u[p],G()),P.nextNode(),l.push({type:2,index:++o});s.append(u[h],G())}}}else if(s.nodeType===8)if(s.data===Oe)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:o}),u+=S.length-1}o++}}static createElement(e,t){const n=T.createElement("template");return n.innerHTML=e,n}}function R(i,e,t=i,n){var s,o,r,a;if(e===x)return e;let l=n!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[n]:t._$Cl;const c=J(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=R(i,l._$AS(i,e.values),l,n)),e}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:T).importNode(n,!0);P.currentNode=o;let r=P.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new L(r,r.nextSibling,this,e):c.type===1?d=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(d=new at(r,this,e)),this._$AV.push(d),c=s[++l]}a!==c?.index&&(r=P.nextNode(),a++)}return P.currentNode=T,o}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class L{constructor(e,t,n,s){var o;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),J(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xe(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&J(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=W.createElement(tt(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(n);else{const r=new nt(o,this),a=r.u(this.options);r.v(n),this.$(a),this._$AH=r}}_$AC(e){let t=Ke.get(e.strings);return t===void 0&&Ke.set(e.strings,t=new W(e)),t}T(e){Ye(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new L(this.k(G()),this.k(G()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let q=class{constructor(e,t,n,s,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=R(this,e,t,0),r=!J(e)||e!==this._$AH&&e!==x,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=R(this,a[n+l],t,l),c===x&&(c=this._$AH[l]),r||(r=!J(c)||c!==this._$AH[l]),c===y?e=y:e!==y&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!s&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class st extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const kt=I?I.emptyScript:"";class ot extends q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class rt extends q{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=R(this,e,t,0))!==null&&n!==void 0?n:y)===x)return;const s=this._$AH,o=e===y&&s!==y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==y&&(s===y||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const xt={O:ne,P:S,A:Oe,C:1,M:it,L:nt,R:Xe,D:R,I:L,V:q,H:ot,N:rt,U:st,F:at},De=ie.litHtmlPolyfillSupport;De?.(W,L),((ue=ie.litHtmlVersions)!==null&&ue!==void 0?ue:ie.litHtmlVersions=[]).push("2.8.0");const jt=(i,e,t)=>{var n,s;const o=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const a=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new L(e.insertBefore(G(),a),a,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe,ve;let H=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}};H.finalized=!0,H._$litElement$=!0,(fe=globalThis.litElementHydrateSupport)===null||fe===void 0||fe.call(globalThis,{LitElement:H});const Ve=globalThis.litElementPolyfillSupport;Ve?.({LitElement:H});((ve=globalThis.litElementVersions)!==null&&ve!==void 0?ve:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},St=(i,e,t)=>{e.constructor.createProperty(t,i)};function b(i){return(e,t)=>t!==void 0?St(i,e,t):Et(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye;((ye=window.HTMLSlotElement)===null||ye===void 0?void 0:ye.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F=i=>(...e)=>({_$litDirective$:i,values:e});class Q{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ht}=xt,lt=i=>i.strings===void 0,Ge=()=>document.createComment(""),D=(i,e,t)=>{var n;const s=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=s.insertBefore(Ge(),o),a=s.insertBefore(Ge(),o);t=new Ht(r,a,i,i.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==i;if(l){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(r!==o||l){let c=t._$AA;for(;c!==r;){const d=c.nextSibling;s.insertBefore(c,o),c=d}}}return t},M=(i,e,t=i)=>(i._$AI(e,t),i),Ct={},ct=(i,e=Ct)=>i._$AH=e,Ot=i=>i._$AH,me=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=(i,e,t)=>{const n=new Map;for(let s=e;s<=t;s++)n.set(i[s],s);return n},Mt=F(class extends Q{constructor(i){if(super(i),i.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const s=[],o=[];let r=0;for(const a of i)s[r]=n?n(a,r):r,o[r]=t(a,r),r++;return{values:o,keys:s}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,n]){var s;const o=Ot(i),{values:r,keys:a}=this.ct(e,t,n);if(!Array.isArray(o))return this.ut=a,r;const l=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],c=[];let d,u,h=0,p=o.length-1,f=0,$=r.length-1;for(;h<=p&&f<=$;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===a[f])c[f]=M(o[h],r[f]),h++,f++;else if(l[p]===a[$])c[$]=M(o[p],r[$]),p--,$--;else if(l[h]===a[$])c[$]=M(o[h],r[$]),D(i,c[$+1],o[h]),h++,$--;else if(l[p]===a[f])c[f]=M(o[p],r[f]),D(i,o[h],o[p]),p--,f++;else if(d===void 0&&(d=Je(a,f,$),u=Je(l,h,p)),d.has(l[h]))if(d.has(l[p])){const E=u.get(a[f]),ce=E!==void 0?o[E]:null;if(ce===null){const Me=D(i,o[h]);M(Me,r[f]),c[f]=Me}else c[f]=M(ce,r[f]),D(i,o[h],ce),o[E]=null;f++}else me(o[p]),p--;else me(o[h]),h++;for(;f<=$;){const E=D(i,c[$+1]);M(E,r[f]),c[f++]=E}for(;h<=p;){const E=o[h++];E!==null&&me(E)}return this.ut=a,ct(i,c),x}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=F(class extends Q{constructor(i){if(super(i),i.type!==j.PROPERTY&&i.type!==j.ATTRIBUTE&&i.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!lt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===x||e===y)return e;const t=i.element,n=i.name;if(i.type===j.PROPERTY){if(e===t[n])return x}else if(i.type===j.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return x}else if(i.type===j.ATTRIBUTE&&t.getAttribute(n)===e+"")return x;return ct(i),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=(i,e)=>{var t,n;const s=i._$AN;if(s===void 0)return!1;for(const o of s)(n=(t=o)._$AO)===null||n===void 0||n.call(t,e,!1),V(o,e);return!0},se=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},dt=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Ut(e)}};function Tt(i){this._$AN!==void 0?(se(this),this._$AM=i,dt(this)):this._$AM=i}function Rt(i,e=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)V(n[o],!1),se(n[o]);else n!=null&&(V(n,!1),se(n));else V(this,i)}const Ut=i=>{var e,t,n,s;i.type==j.CHILD&&((e=(n=i)._$AP)!==null&&e!==void 0||(n._$AP=Rt),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=Tt))};class Bt extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),dt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(V(this,e),se(this))}setValue(e){if(lt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=()=>new Nt;let Nt=class{};const ge=new WeakMap,ut=F(class extends Bt{render(i){return y}update(i,[e]){var t;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),y}ot(i){var e;if(typeof this.G=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let n=ge.get(t);n===void 0&&(n=new WeakMap,ge.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=ge.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=F(class extends Q{constructor(i){var e;if(super(i),i.type!==j.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.nt)===null||t===void 0)&&t.has(o))&&this.it.add(o);return this.render(e)}const s=i.element.classList;this.it.forEach(o=>{o in e||(s.remove(o),this.it.delete(o))});for(const o in e){const r=!!e[o];r===this.it.has(o)||!((n=this.nt)===null||n===void 0)&&n.has(o)||(r?(s.add(o),this.it.add(o)):(s.remove(o),this.it.delete(o)))}return x}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var _e=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function $e(i,e,t){i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent("on".concat(e),function(){t(window.event)})}function pt(i,e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=i[t[n].toLowerCase()];return t}function ft(i){typeof i!="string"&&(i=""),i=i.replace(/\s/g,"");for(var e=i.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function It(i,e){for(var t=i.length>=e.length?i:e,n=i.length>=e.length?e:i,s=!0,o=0;o<t.length;o++)n.indexOf(t[o])===-1&&(s=!1);return s}var vt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":_e?173:189,"=":_e?61:187,";":_e?59:186,"'":222,"[":219,"]":221,"\\":220},U={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},We={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},w={};for(var X=1;X<20;X++)vt["f".concat(X)]=111+X;var v=[],yt="all",mt=[],ae=function(e){return vt[e.toLowerCase()]||U[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function gt(i){yt=i||"all"}function Z(){return yt||"all"}function zt(){return v.slice(0)}function Lt(i){var e=i.target||i.srcElement,t=e.tagName,n=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function Kt(i){return typeof i=="string"&&(i=ae(i)),v.indexOf(i)!==-1}function Dt(i,e){var t,n;i||(i=Z());for(var s in w)if(Object.prototype.hasOwnProperty.call(w,s))for(t=w[s],n=0;n<t.length;)t[n].scope===i?t.splice(n,1):n++;Z()===i&&gt(e||"all")}function Vt(i){var e=i.keyCode||i.which||i.charCode,t=v.indexOf(e);if(t>=0&&v.splice(t,1),i.key&&i.key.toLowerCase()==="meta"&&v.splice(0,v.length),(e===93||e===224)&&(e=91),e in A){A[e]=!1;for(var n in U)U[n]===e&&(g[n]=!1)}}function Gt(i){if(!i)Object.keys(w).forEach(function(r){return delete w[r]});else if(Array.isArray(i))i.forEach(function(r){r.key&&be(r)});else if(typeof i=="object")i.key&&be(i);else if(typeof i=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=t[0],o=t[1];typeof s=="function"&&(o=s,s=""),be({key:i,scope:s,method:o,splitKey:"+"})}}var be=function(e){var t=e.key,n=e.scope,s=e.method,o=e.splitKey,r=o===void 0?"+":o,a=ft(t);a.forEach(function(l){var c=l.split(r),d=c.length,u=c[d-1],h=u==="*"?"*":ae(u);if(w[h]){n||(n=Z());var p=d>1?pt(U,c):[];w[h]=w[h].map(function(f){var $=s?f.method===s:!0;return $&&f.scope===n&&It(f.mods,p)?{}:f})}})};function Ze(i,e,t){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var s in A)Object.prototype.hasOwnProperty.call(A,s)&&(!A[s]&&e.mods.indexOf(+s)>-1||A[s]&&e.mods.indexOf(+s)===-1)&&(n=!1);(e.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||n||e.shortcut==="*")&&e.method(i,e)===!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation&&i.stopPropagation(),i.cancelBubble&&(i.cancelBubble=!0))}}function qe(i){var e=w["*"],t=i.keyCode||i.which||i.charCode;if(g.filter.call(this,i)){if((t===93||t===224)&&(t=91),v.indexOf(t)===-1&&t!==229&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var f=We[p];i[p]&&v.indexOf(f)===-1?v.push(f):!i[p]&&v.indexOf(f)>-1?v.splice(v.indexOf(f),1):p==="metaKey"&&i[p]&&v.length===3&&(i.ctrlKey||i.shiftKey||i.altKey||(v=v.slice(v.indexOf(f))))}),t in A){A[t]=!0;for(var n in U)U[n]===t&&(g[n]=!0);if(!e)return}for(var s in A)Object.prototype.hasOwnProperty.call(A,s)&&(A[s]=i[We[s]]);i.getModifierState&&!(i.altKey&&!i.ctrlKey)&&i.getModifierState("AltGraph")&&(v.indexOf(17)===-1&&v.push(17),v.indexOf(18)===-1&&v.push(18),A[17]=!0,A[18]=!0);var o=Z();if(e)for(var r=0;r<e.length;r++)e[r].scope===o&&(i.type==="keydown"&&e[r].keydown||i.type==="keyup"&&e[r].keyup)&&Ze(i,e[r],o);if(t in w){for(var a=0;a<w[t].length;a++)if((i.type==="keydown"&&w[t][a].keydown||i.type==="keyup"&&w[t][a].keyup)&&w[t][a].key){for(var l=w[t][a],c=l.splitKey,d=l.key.split(c),u=[],h=0;h<d.length;h++)u.push(ae(d[h]));u.sort().join("")===v.sort().join("")&&Ze(i,l,o)}}}}function Jt(i){return mt.indexOf(i)>-1}function g(i,e,t){v=[];var n=ft(i),s=[],o="all",r=document,a=0,l=!1,c=!0,d="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(o=e.scope),e.element&&(r=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(d=e.splitKey)),typeof e=="string"&&(o=e);a<n.length;a++)i=n[a].split(d),s=[],i.length>1&&(s=pt(U,i)),i=i[i.length-1],i=i==="*"?"*":ae(i),i in w||(w[i]=[]),w[i].push({keyup:l,keydown:c,scope:o,mods:s,shortcut:n[a],method:t,key:n[a],splitKey:d});typeof r<"u"&&!Jt(r)&&window&&(mt.push(r),$e(r,"keydown",function(u){qe(u)}),$e(window,"focus",function(){v=[]}),$e(r,"keyup",function(u){qe(u),Vt(u)}))}var we={setScope:gt,getScope:Z,deleteScope:Dt,getPressedKeyCodes:zt,isPressed:Kt,filter:Lt,unbind:Gt};for(var Ae in we)Object.prototype.hasOwnProperty.call(we,Ae)&&(g[Ae]=we[Ae]);if(typeof window<"u"){var Wt=window.hotkeys;g.noConflict=function(i){return i&&window.hotkeys===g&&(window.hotkeys=Wt),g},window.hotkeys=g}var Y=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let B=class extends H{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=ht()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const n of this.breadcrumbs)t.push(k`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=k`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return k`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${ut(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};B.styles=oe`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;Y([b()],B.prototype,"placeholder",void 0);Y([b({type:Boolean})],B.prototype,"hideBreadcrumbs",void 0);Y([b()],B.prototype,"breadcrumbHome",void 0);Y([b({type:Array})],B.prototype,"breadcrumbs",void 0);B=Y([re("ninja-header")],B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ee extends Q{constructor(e){if(super(e),this.et=y,e.type!==j.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this.ft=void 0,this.et=e;if(e===x)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ee.directiveName="unsafeHTML",Ee.resultType=1;const Zt=F(Ee);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qt(i,e){const t=typeof e=="function";if(i!==void 0){let n=-1;for(const s of i)n>-1&&(yield t?e(n):e),n++,yield s}}function Ft(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Qt=oe`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Se=class extends H{render(){return k`<span><slot></slot></span>`}};Se.styles=[Qt];Se=Ft([re("mwc-icon")],Se);var le=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let z=class extends H{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=k`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Zt(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(s=>{const o=s.split("+"),r=k`${qt(o.map(a=>k`<kbd>${a}</kbd>`),"+")}`;return k`<div class="ninja-hotkey ninja-hotkeys">
            ${r}
          </div>`}):t=this.action.hotkey.split(",").map(s=>{const r=s.split("+").map(a=>k`<kbd class="ninja-hotkey">${a}</kbd>`);return k`<kbd class="ninja-hotkeys">${r}</kbd>`}));const n={selected:this.selected,"ninja-action":!0};return k`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${je(n)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};z.styles=oe`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;le([b({type:Object})],z.prototype,"action",void 0);le([b({type:Boolean})],z.prototype,"selected",void 0);le([b({type:Boolean})],z.prototype,"hotKeysJoinedView",void 0);z=le([re("ninja-action")],z);const Yt=k` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,Xt=oe`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var _=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let m=class extends H{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=ht()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(t.push(n);n;){const s=this._flatData.find(o=>o.id===n);s?.parent&&t.push(s.parent),n=s?s.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let n=[];return e||(e=[]),e.map(s=>{const o=s.children&&s.children.some(a=>typeof a=="string"),r={...s,parent:s.parent||t};return o||(r.children&&r.children.length&&(t=s.id,n=[...n,...r.children]),r.children=r.children?r.children.map(a=>a.id):[]),r}).concat(n.length?this._flattern(n,t):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{g(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&g(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&g(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&g(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&g(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&g(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&g(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&g.unbind(this.openHotkey),this.selectHotkey&&g.unbind(this.selectHotkey),this.goBackHotkey&&g.unbind(this.goBackHotkey),this.navigationDownHotkey&&g.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&g.unbind(this.navigationUpHotkey),this.closeHotkey&&g.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},s=this._flatData.filter(a=>{var l;const c=new RegExp(this._search,"gi"),d=a.title.match(c)||((l=a.keywords)===null||l===void 0?void 0:l.match(c));return(!this._currentRoot&&this._search||a.parent===this._currentRoot)&&d}).reduce((a,l)=>a.set(l.section,[...a.get(l.section)||[],l]),new Map);this._actionMatches=[...s.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const o=a=>k` ${Mt(a,l=>l.id,l=>{var c;return k`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${Pt(l.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${d=>this._actionFocused(l,d)}
            @actionsSelected=${d=>this._actionSelected(d.detail)}
            .action=${l}
          ></ninja-action>`})}`,r=[];return s.forEach((a,l)=>{const c=l?k`<div class="group-header">${l}</div>`:void 0;r.push(k`${c}${o(a)}`)}),k`
      <div @click=${this._overlayClick} class=${je(t)}>
        <div class=${je(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${ut(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${r}</div>
          </div>
          <slot name="footer"> ${Yt} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);n?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};m.styles=[Xt];_([b({type:String})],m.prototype,"placeholder",void 0);_([b({type:Boolean})],m.prototype,"disableHotkeys",void 0);_([b({type:Boolean})],m.prototype,"hideBreadcrumbs",void 0);_([b()],m.prototype,"openHotkey",void 0);_([b()],m.prototype,"navigationUpHotkey",void 0);_([b()],m.prototype,"navigationDownHotkey",void 0);_([b()],m.prototype,"closeHotkey",void 0);_([b()],m.prototype,"goBackHotkey",void 0);_([b()],m.prototype,"selectHotkey",void 0);_([b({type:Boolean})],m.prototype,"hotKeysJoinedView",void 0);_([b({type:Boolean})],m.prototype,"noAutoLoadMdIcons",void 0);_([b({type:Array,hasChanged(){return!0}})],m.prototype,"data",void 0);_([C()],m.prototype,"visible",void 0);_([C()],m.prototype,"_bump",void 0);_([C()],m.prototype,"_actionMatches",void 0);_([C()],m.prototype,"_search",void 0);_([C()],m.prototype,"_currentRoot",void 0);_([C()],m.prototype,"_flatData",void 0);_([C()],m.prototype,"breadcrumbs",null);_([C()],m.prototype,"_selected",void 0);m=_([re("ninja-keys")],m);const ei=document.querySelector("ninja-keys");ei.data=[{id:"print",title:"Imprimir",hotkey:"ctrl+P",icon:'<svg style="margin-right: 4px" width="18" height="18" fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-f</title><path d="M408,112H106a58,58,0,0,0-58,58V328a56,56,0,0,0,56,56h8v39.68A40.32,40.32,0,0,0,152.32,464H359.68A40.32,40.32,0,0,0,400,423.68V384h8a56,56,0,0,0,56-56V168A56,56,0,0,0,408,112ZM368,423.68a8.35,8.35,0,0,1-8.32,8.32H152.32a8.35,8.35,0,0,1-8.32-8.32V264.32a8.35,8.35,0,0,1,8.32-8.32H359.68a8.35,8.35,0,0,1,8.32,8.32ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z"></path><path d="M344,48H168a56.09,56.09,0,0,0-55.42,48H399.42A56.09,56.09,0,0,0,344,48Z"></path></g></svg>',section:"Acciones",handler:()=>{window.print()}}];
