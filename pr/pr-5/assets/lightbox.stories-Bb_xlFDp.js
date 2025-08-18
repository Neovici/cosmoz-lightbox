var Fe=Object.defineProperty;var Ne=(t,e,s)=>e in t?Fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>Ne(t,typeof e!="symbol"?e+"":e,s);import{f as Ue,B as Be,x as m,T as k,i as He,E as U,p as Ve,v as _,s as P,M as Y,m as Xe}from"./directive-helpers-CfnEppJJ.js";let B,Ie=0;function ee(t){B=t}function te(){B=null,Ie=0}function Ye(){return Ie++}const Q=Symbol("haunted.phase"),N=Symbol("haunted.hook"),se=Symbol("haunted.update"),ie=Symbol("haunted.commit"),C=Symbol("haunted.effects"),R=Symbol("haunted.layoutEffects"),W="haunted.context";var de,he,ue;ue=N,he=C,de=R;class Qe{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,ue);l(this,he);l(this,de);this.update=e,this.host=s,this[N]=new Map,this[C]=[],this[R]=[]}run(e){ee(this);let s=e();return te(),s}_runEffects(e){let s=this[e];ee(this);for(let i of s)i.call(this);te()}runEffects(){this._runEffects(C)}runLayoutEffects(){this._runEffects(R)}teardown(){this[N].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Ze=Promise.resolve().then.bind(Promise.resolve());function Pe(){let t=[],e;function s(){e=null;let i=t;t=[];for(var n=0,o=i.length;n<o;n++)i[n]()}return function(i){t.push(i),e==null&&(e=Ze(s))}}const Ke=Pe(),ne=Pe();var pe;pe=Q;class We{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,pe);l(this,"_updateQueued");l(this,"_active");this.renderer=e,this.host=s,this.state=new Qe(this.update.bind(this),s),this[Q]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Ke(()=>{let e=this.handlePhase(se);ne(()=>{this.handlePhase(ie,e),ne(()=>{this.handlePhase(C)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Q]=e,e){case ie:this.commit(s),this.runEffects(R);return;case se:return this.render();case C:return this.runEffects(C)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const qe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Je=t=>t==null?void 0:t.map(e=>typeof e=="string"?qe(e):e),et=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function tt(t){class e extends We{constructor(o,r,a){super(o,a||r);l(this,"frag");l(this,"renderResult");this.frag=r}commit(o){this.renderResult=t(o,this.frag)}}function s(i,n,o){const r=(o||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:c=!0,shadowRootInit:u={},styleSheets:b}=o||n||{},d=Je(i.styleSheets||b);class p extends r{constructor(){super();l(this,"_scheduler");if(c===!1)this._scheduler=new e(i,this);else{const g=this.attachShadow({mode:"open",...u});d&&(g.adoptedStyleSheets=d),this._scheduler=new e(i,g,this)}}static get observedAttributes(){return i.observedAttributes||a||[]}connectedCallback(){var g;this._scheduler.resume(),this._scheduler.update(),(g=this._scheduler.renderResult)==null||g.setConnected(!0)}disconnectedCallback(){var g;this._scheduler.pause(),this._scheduler.teardown(),(g=this._scheduler.renderResult)==null||g.setConnected(!1)}attributeChangedCallback(g,w,y){if(w===y)return;let De=y===""?!0:y;Reflect.set(this,et(g),De)}}function f(h){let x=h,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return x},set(w){g&&x===w||(g=!0,x=w,this._scheduler&&this._scheduler.update())}})}const v=new Proxy(r.prototype,{getPrototypeOf(h){return h},set(h,x,g,w){let y;return x in h?(y=Object.getOwnPropertyDescriptor(h,x),y&&y.set?(y.set.call(w,g),!0):(Reflect.set(h,x,g,w),!0)):(typeof x=="symbol"||x[0]==="_"?y={enumerable:!0,configurable:!0,writable:!0,value:g}:y=f(g),Object.defineProperty(w,x,y),y.set&&y.set.call(w,g),!0)}});return Object.setPrototypeOf(p.prototype,v),p}return s}class E{constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function st(t,...e){let s=Ye(),i=B[N],n=i.get(s);return n||(n=new t(s,B,...e),i.set(s,n)),n.update(...e)}function S(t){return st.bind(null,t)}function Me(t){return S(class extends E{constructor(s,i,n,o){super(s,i);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(i,this)}update(s,i){this.callback=s,this.values=i}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,i)=>this.lastValues[i]!==s)}})}function Le(t,e){t[C].push(e)}const V=Me(Le),it=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,nt=S(class extends E{constructor(e,s,i){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Le(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};it(this.state.host).dispatchEvent(new CustomEvent(W,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:o}=s;this.value=n?o:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function ot(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(W,this)}disconnectedCallback(){this.removeEventListener(W,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:i}){const n=nt(s);return i(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const A=S(class extends E{constructor(e,s,i,n){super(e,s);l(this,"value");l(this,"values");this.value=i(),this.values=n}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,i)=>this.values[i]!==s)}}),Z=(t,e)=>A(()=>t,e);function rt(t,e){t[R].push(e)}const oe=Me(rt),je=S(class extends E{constructor(e,s,i){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});S(class extends E{constructor(e,s,i,n,o){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const at=/([A-Z])/gu;S(class extends E{constructor(e,s,i,n){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(at,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,s){return[this.state.host[this.property],this.updater]}updater(e){const s=this.state.host[this.property];typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const s=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(s),s}});function lt(t){return A(()=>({current:t}),[])}function ct({render:t}){const e=tt(t),s=ot(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J={ATTRIBUTE:1,CHILD:2},T=t=>(...e)=>({_$litDirective$:t,values:e});let X=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=(t,e)=>{var i;const s=t._$AN;if(s===void 0)return!1;for(const n of s)(i=n._$AO)==null||i.call(n,e,!1),G(n,e);return!0},H=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Oe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),ut(e)}};function dt(t){this._$AN!==void 0?(H(this),this._$AM=t,Oe(this)):this._$AM=t}function ht(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)G(i[o],!1),H(i[o]);else i!=null&&(G(i,!1),H(i));else G(this,t)}const ut=t=>{t.type==J.CHILD&&(t._$AP??(t._$AP=ht),t._$AQ??(t._$AQ=dt))};class ze extends X{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Oe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),s&&(G(this,e),H(this))}setValue(e){if(Ue(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:$}=ct({render:Be}),pt=(t,...e)=>t.flatMap((s,i)=>[s,e[i]??""]).join(""),ft=pt`
  :host {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  cosmoz-slider {
    height: 100%;
    width: 100%;
    cursor: default;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    padding: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    transition: background-color 0.2s ease;
  }

  .close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .close:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .next,
  .prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 12px 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 4px;
    z-index: 1000;
    transition: background-color 0.2s ease;
  }

  .next:hover,
  .prev:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .next:disabled,
  .prev:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    background: rgba(255, 255, 255, 0.05);
  }

  .next:focus,
  .prev:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .next {
    right: 20px;
  }

  .prev {
    left: 20px;
  }

  .canvas {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .viewable {
    max-width: 90vw;
    max-height: 90vh;
    transition: opacity 0.3s ease;
  }

  .viewable:not([data-loaded]) {
    opacity: 0;
  }

  .viewable[data-loaded] {
    opacity: 1;
  }

  /* Image specific styles */
  .viewable.image {
    object-fit: contain;
    border-radius: 4px;
  }

  .viewable.image::before {
    place-content: center;
    display: grid;
    height: 100%;
    width: 100%;
  }

  /* PDF specific styles */
  .viewable.pdf {
    border: none;
    border-radius: 4px;
    max-width: 80vw;
    max-height: 80vh;
    height: 100%;
    width: 100%;
  }

  /* Code specific styles */
  .viewable.code {
    background: rgba(40, 44, 52, 0.95);
    color: #abb2bf;
    border-radius: 8px;
    padding: 20px;
    overflow: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.5;
    max-width: 80vw;
    max-height: 80vh;
  }

  .code-content {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* Video specific styles */
  .viewable.video {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }

  /* Iframe specific styles */
  .viewable.iframe {
    border: none;
    border-radius: 4px;
    background: white;
    height: 100%;
    width: 100%;
  }

  /* Loading spinner positioning */
  lightbox-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  /* Hide spinner when content is loaded */
  .viewable[data-loaded] ~ lightbox-spinner {
    display: none;
  }
`,mt=()=>m`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
`,gt=()=>m`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
`,bt=()=>m`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let xt=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=t=>!He(t)&&typeof t.then=="function",ae=1073741823;let yt=class extends ze{constructor(){super(...arguments),this._$Cwt=ae,this._$Cbt=[],this._$CK=new vt(this),this._$CX=new xt}render(...e){return e.find(s=>!re(s))??k}update(e,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const c=s[a];if(!re(c))return this._$Cwt=a,c;a<n&&c===i[a]||(this._$Cwt=ae,n=0,Promise.resolve(c).then(async u=>{for(;r.get();)await r.get();const b=o.deref();if(b!==void 0){const d=b._$Cbt.indexOf(c);d>-1&&d<b._$Cwt&&(b._$Cwt=d,b.setValue(u))}}))}return k}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const I=T(yt);function wt(t,...e){return typeof t=="function"?t(...e):t}const $t=t=>fetch(t).then(e=>e.blob()).then(e=>new File([e],"preview.pdf",{type:"application/pdf"})).then(e=>{const s=URL.createObjectURL(e);return setTimeout(()=>{URL.revokeObjectURL(s)},1e3),s}),D=t=>Promise.resolve(wt(t)),F=t=>I(Promise.resolve(t).then(()=>!0,()=>!0),!1),_t=t=>{const e=D(t.uri);return m`
    <img
      class="viewable image"
      src=${I(e)}
      alt=${t.alt||t.title||t.filename||"Image"}
      ?data-loaded=${F(e)}
      @load=${()=>console.log("Image loaded:",t.id)}
      @error=${()=>console.error("Image failed to load:",t.id)}
    />
  `},Ct=t=>fetch(t).then(e=>e.text()),kt=t=>{const e=D(t.uri).then(Ct);return m`
    <div class="viewable code" ?data-loaded=${F(e)}>
      <pre class="code-content" data-language=${t.language||"text"}>
${I(e)}</pre
      >
    </div>
  `},At=t=>{const e=D(t.uri).then($t);return m`
    <embed
      class="viewable pdf"
      data-pdf
      type="application/pdf"
      src="${I(e)}"
      ?data-loaded=${F(e)}
      @load=${()=>console.log("PDF loaded:",t.id)}
      @error=${()=>console.error("PDF failed to load:",t.id)}
    />
  `},Et=t=>{const e=D(t.uri),{autoplay:s=!1,controls:i=!0,muted:n=!1,poster:o}=t;return m`
    <video
      class="viewable video"
      src=${I(e)}
      ?autoplay=${s}
      ?controls=${i}
      ?muted=${n}
      poster=${o||""}
      ?data-loaded=${F(e)}
      @loadeddata=${()=>console.log("Video loaded:",t.id)}
      @error=${()=>console.error("Video failed to load:",t.id)}
    >
      Your browser does not support the video element.
    </video>
  `};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=t=>t??U,It=t=>{const e=D(t.uri),{width:s="100%",height:i="100%",sandbox:n,allowfullscreen:o=!0}=t;return m`
    <iframe
      class="viewable iframe"
      src=${I(e)}
      width=${s}
      height=${i}
      sandbox=${St(n)}
      ?allowfullscreen=${o}
      ?data-loaded=${F(e)}
      @load=${()=>console.log("Iframe loaded:",t.id)}
      @error=${()=>console.error("Iframe failed to load:",t.id)}
    >
      Your browser does not support iframes.
    </iframe>
  `},Pt=()=>m`
  <style>
    :host {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      pointer-events: none;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top: 4px solid #ffffff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    :host([hidden]) {
      display: none;
    }
  </style>
  <div class="spinner"></div>
`;customElements.define("lightbox-spinner",$(Pt));const Mt=()=>m`<lightbox-spinner></lightbox-spinner>`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},Lt=T(class extends X{constructor(t){if(super(t),t.type!==J.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const n=[],o=[];let r=0;for(const a of t)n[r]=i?i(a,r):r,o[r]=s(a,r),r++;return{values:o,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=Ve(t),{values:o,keys:r}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=r,o;const a=this.ut??(this.ut=[]),c=[];let u,b,d=0,p=n.length-1,f=0,v=o.length-1;for(;d<=p&&f<=v;)if(n[d]===null)d++;else if(n[p]===null)p--;else if(a[d]===r[f])c[f]=_(n[d],o[f]),d++,f++;else if(a[p]===r[v])c[v]=_(n[p],o[v]),p--,v--;else if(a[d]===r[v])c[v]=_(n[d],o[v]),P(t,c[v+1],n[d]),d++,v--;else if(a[p]===r[f])c[f]=_(n[p],o[f]),P(t,n[d],n[p]),p--,f++;else if(u===void 0&&(u=le(r,f,v),b=le(a,d,p)),u.has(a[d]))if(u.has(a[p])){const h=b.get(r[f]),x=h!==void 0?n[h]:null;if(x===null){const g=P(t,n[d]);_(g,o[f]),c[f]=g}else c[f]=_(x,o[f]),P(t,n[d],x),n[h]=null;f++}else Y(n[p]),p--;else Y(n[d]),d++;for(;f<=v;){const h=P(t,c[v+1]);_(h,o[f]),c[f++]=h}for(;d<=p;){const h=n[d++];h!==null&&Y(h)}return this.ut=r,Xe(t,c),k}}),K=new WeakMap,jt=T(class extends ze{render(t){return U}update(t,[e]){var i;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),U}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=K.get(e);s===void 0&&(s=new WeakMap,K.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=K.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re="important",Ot=" !"+Re,zt=T(class extends X{constructor(t){var e;if(super(t),t.type!==J.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const o=typeof n=="string"&&n.endsWith(Ot);i.includes("-")||o?s.setProperty(i,o?n.slice(0,-11):n,o?Re:""):s[i]=n}}return k}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={},Ge=T(class extends X{constructor(){super(...arguments),this.ot=Rt}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((i,n)=>i===this.ot[n]))return k}else if(this.ot===e)return k;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,s)}});class Gt extends Promise{constructor(s){const i={};super((n,o)=>Object.assign(i,{resolve:n,reject:o}));l(this,"resolve",()=>{});Object.assign(this,i),s==null||s(i.resolve,i.reject)}}const Te={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Tt=t=>{const{slide:e}=t,[s,i]=je([]);return oe(()=>void Object.assign(t.style,Te.host),[]),V(()=>{if(e==null)return;const n={animationEnd$:new Gt,...e};i((o=[])=>{const r=o.findIndex(({id:a,out:c})=>a===n.id&&c!==!0);return r!==-1?[...o.slice(0,r),n,...o.slice(r+1,o.length)]:[...o,n]})},[e]),oe(async()=>{var c;if(s.filter(u=>!u.out).length<2){const u=s[0];u&&requestAnimationFrame(()=>requestAnimationFrame(()=>u.animationEnd$.resolve()));return}const n=s[s.length-1],o=s[s.length-2],r=n.el,a=o.el;o.out=!0,r&&a&&await((c=n.animation)==null?void 0:c.call(n,r,a)),i((u=[])=>u.filter(b=>b!==o))},[s]),{slides:s}},Dt=t=>m`<div
		${jt(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${zt(Te.slide)}
	>
		${Ge([t],()=>{var e;return t.content??((e=t.render)==null?void 0:e.call(t,t))})}
	</div>`,Ft=({slides:t})=>Ge([t],()=>Lt(t,({id:e})=>e,Dt)),Nt=t=>Ft(Tt(t));customElements.define("cosmoz-slider",$(Nt,{useShadowDOM:!1}));const q=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},ce=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},Ut=t=>{const e=lt(void 0);return V(()=>void(e.current=t),[t]),e.current},Bt=t=>t,Ht=(t,e,s)=>t.find(i=>s(i)===s(e))??t[0],Vt=()=>({id:Math.random(),content:U,animation:q}),Xt=(t,{initial:e,render:s,id:i=Bt,loop:n})=>{const[o,r]=je(()=>e??t[0]),a=A(()=>t.indexOf(o),[t,o]),c=Ut(a),u=Z(()=>r(()=>n?t[(a-1+t.length)%t.length]:t[Math.max(0,Math.min(t.length-1,a-1))]),[t,a,n]),b=Z(()=>r(()=>n?t[(a+1)%t.length]:t[Math.max(0,Math.min(t.length-1,a+1))]),[t,a,n]),d=Z(h=>r(()=>t[h]),[t]),p=n?!1:a<=0,f=n?!1:a===t.length-1,v=a>(c??-1)?n&&a===t.length-1&&c===0?ce:q:n&&a===0&&c===t.length-1?q:ce;return V(()=>r(h=>h?t.indexOf(h)>=0?h:Ht(t,h,i):t[0]),[t]),{index:a,item:o,slide:A(()=>o==null?Vt():{id:i(o),render:h=>s(o,{next:b,prev:u,goto:d,first:p,last:f,...h}),animation:v},[o,s]),prev:u,next:b,goto:d,first:p,last:f}},Yt=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},Qt=(t,{next:e,prev:s,first:i,last:n})=>m`<div class="canvas">
    ${(r=>{switch(r.type){case"image":return _t(r);case"pdf":return At(r);case"code":return kt(r);case"video":return Et(r);case"iframe":return It(r);default:return console.error("Unrecognized viewable type:",r.type),m`<div class="error">Unsupported file type</div>`}})(t)}
    <button
      class="prev"
      ?disabled=${i}
      @click=${s}
      aria-label="Previous item"
    >
      ${gt()}
    </button>
    <button
      class="next"
      ?disabled=${n}
      @click=${e}
      aria-label="Next item"
    >
      ${mt()}
    </button>
    ${Mt()}
  </div>`,Zt=(t,e)=>{const{items:s,selected:i}=t,{slide:n,...o}=Xt(s,{render:Qt,initial:s[i??0],id:c=>c.id}),r=Yt({...o}),a=()=>{e.dispatchEvent(new CustomEvent("close"))};return V(()=>{const c=u=>{var d,p;if(u.defaultPrevented)return;const{key:b}=u;switch(b){case"Escape":a(),u.preventDefault();break;case"Left":case"ArrowLeft":if(r.first)return;(d=r.prev)==null||d.call(r),u.preventDefault();break;case"Right":case"ArrowRight":if(r.last)return;(p=r.next)==null||p.call(r),u.preventDefault();break}};return document.addEventListener("keydown",c,!0),()=>document.removeEventListener("keydown",c,!0)},[r]),{slide:n,close:a}},Kt=function(t){const{slide:e,close:s}=Zt(t,this);return m`
    <cosmoz-slider .slide=${e}></cosmoz-slider>

    <button class="close" @click=${s} aria-label="Close lightbox">
      ${bt()}
    </button>
  `};customElements.define("pion-lightbox",$(Kt,{styleSheets:[ft]}));const Wt=()=>m` <style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
        min-height: 500px;
      }
    </style>
    <pion-lightbox
      @close=${()=>{console.log("Lightbox closed from event listener"),console.log("here")}}
      .items=${[{id:"1",type:"image",uri:"https://picsum.photos/800/600?random=1",filename:"landscape.jpg",title:"Beautiful landscape"},{id:"2",type:"image",uri:"https://picsum.photos/600/800?random=2",filename:"portrait.jpg",title:"Portrait shot"},{id:"3",type:"image",uri:"https://picsum.photos/600/800?random=3",filename:"city.jpg",title:"City skyline"}]}
      .selected=${0}
    ></pion-lightbox>`;customElements.define("demo-image-gallery",$(Wt));const qt=()=>m`<style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
      }
    </style>
    <pion-lightbox
      .items=${[{id:"single",type:"image",uri:"https://picsum.photos/1200/800?random=10",filename:"single.jpg",title:"Single image view"}]}
      .selected=${0}
      @close=${()=>console.log("Single image lightbox closed")}
    ></pion-lightbox>`;customElements.define("demo-single-image",$(qt));const Jt=()=>m` <style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
        min-height: 500px;
      }
    </style>
    <pion-lightbox
      .items=${[{id:"1",type:"image",uri:"https://picsum.photos/800/600?random=3",filename:"photo.jpg",title:"Sample Photo"},{id:"2",type:"code",uri:"https://icanhazdadjoke.com/",filename:"file.html",title:"Html Page",language:"html"},{id:"3",type:"pdf",uri:"https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",filename:"tracemonkey-pldi-09.pdf",title:"TraceMonkey Research Paper"}]}
      .selected=${0}
      @close=${()=>console.log("Mixed content lightbox closed")}
    ></pion-lightbox>`;customElements.define("demo-mixed-lightbox",$(Jt));const es=()=>m`<style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
      }
    </style>
    <pion-lightbox
      .items=${[{id:"video1",type:"video",uri:"https://www.w3schools.com/html/mov_bbb.mp4",filename:"big-buck-bunny.mp4",title:"Big Buck Bunny",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0},{id:"video2",type:"video",uri:"https://www.w3schools.com/html/movie.mp4",filename:"bear.mp4",title:"Bear Video",controls:!0}]}
      .selected=${0}
      @close=${()=>console.log("Video lightbox closed")}
    ></pion-lightbox>`;customElements.define("demo-video-lightbox",$(es));const ts=()=>m`<style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
      }
    </style>
    <pion-lightbox
      .items=${[{id:"1",type:"iframe",uri:"https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-0.05,51.52",filename:"map.html",title:"Interactive Map",width:"80vw",height:"70vh"},{id:"2",type:"iframe",uri:"https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-1.05,51.52",filename:"map.html",title:"Interactive Map",width:"80vw",height:"70vh"}]}
      .selected=${0}
      @close=${()=>console.log("Iframe lightbox closed")}
    ></pion-lightbox>`;customElements.define("demo-iframe-lightbox",$(ts));const as={title:"Lightbox",tags:["autodocs"]},M=()=>m`<demo-image-gallery></demo-image-gallery>`;M.parameters={docs:{description:{story:"A lightbox showing multiple images that can be navigated using arrow keys or navigation buttons."}}};const L=()=>m`<demo-single-image></demo-single-image>`;L.parameters={docs:{description:{story:"A lightbox displaying a single image with no navigation arrows."}}};const j=()=>m`<demo-mixed-lightbox></demo-mixed-lightbox>`;j.parameters={docs:{description:{story:"A lightbox showcasing different content types: images, pdf and code."}}};const O=()=>m`<demo-video-lightbox></demo-video-lightbox>`;O.parameters={docs:{description:{story:"A lightbox specifically designed for video content, with autoplay and controls."}}};const z=()=>m`<demo-iframe-lightbox></demo-iframe-lightbox>`;z.parameters={docs:{description:{story:"A lightbox specifically designed for displaying iframe content, with support for various iframe sources."}}};var fe,me,ge;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:"() => {\n  return html`<demo-image-gallery></demo-image-gallery>`;\n}",...(ge=(me=M.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var be,ve,xe;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:"() => {\n  return html`<demo-single-image></demo-single-image>`;\n}",...(xe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ye,we,$e;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:"() => {\n  return html`<demo-mixed-lightbox></demo-mixed-lightbox>`;\n}",...($e=(we=j.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var _e,Ce,ke;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:"() => {\n  return html`<demo-video-lightbox></demo-video-lightbox>`;\n}",...(ke=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Ae,Ee,Se;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:"() => {\n  return html`<demo-iframe-lightbox></demo-iframe-lightbox>`;\n}",...(Se=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};const ls=["ImageGallery","SingleImage","MixedContent","VideoLightbox","IframeLightbox"];export{z as IframeLightbox,M as ImageGallery,j as MixedContent,L as SingleImage,O as VideoLightbox,ls as __namedExportsOrder,as as default};
