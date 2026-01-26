import{r as ye,D as xe,b as u,E as C,n as we,A as U,M as $e,u as $,v as I,h as V,p as _e}from"./iframe-DzypMCck.js";import"./preload-helper-PPVm8Dsz.js";let B,ce=0;function J(e){B=e}function ee(){B=null,ce=0}function Ce(){return ce++}const Y=Symbol("haunted.phase"),N=Symbol("haunted.hook"),te=Symbol("haunted.update"),se=Symbol("haunted.commit"),_=Symbol("haunted.effects"),z=Symbol("haunted.layoutEffects"),K="haunted.context";class ke{update;host;virtual;[N];[_];[z];constructor(t,s){this.update=t,this.host=s,this[N]=new Map,this[_]=[],this[z]=[]}run(t){J(this);let s=t();return ee(),s}_runEffects(t){let s=this[t];J(this);for(let i of s)i.call(this);ee()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(z)}teardown(){this[N].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Ae=Promise.resolve().then.bind(Promise.resolve());function he(){let e=[],t;function s(){t=null;let i=e;e=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){e.push(i),t==null&&(t=Ae(s))}}const Se=he(),ie=he();class Ee{renderer;host;state;[Y];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new ke(this.update.bind(this),s),this[Y]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Se(()=>{let t=this.handlePhase(te);ie(()=>{this.handlePhase(se,t),ie(()=>{this.handlePhase(_)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[Y]=t,t){case se:this.commit(s),this.runEffects(z);return;case te:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ie=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Me=e=>e?.map(t=>typeof t=="string"?Ie(t):t),Pe=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Le(e){class t extends Ee{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=e(n,this.frag)}}function s(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:f={},styleSheets:b}=r||n||{},c=Me(i.styleSheets||b);class p extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(i,this);else{const m=this.attachShadow({mode:"open",...f});c&&(m.adoptedStyleSheets=c),this._scheduler=new t(i,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,v,y){if(v===y)return;let x=y===""?!0:y;Reflect.set(this,Pe(m),x)}}function d(h){let m=h,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){v&&m===y||(v=!0,m=y,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(o.prototype,{getPrototypeOf(h){return h},set(h,m,v,y){let x;return m in h?(x=Object.getOwnPropertyDescriptor(h,m),x&&x.set?(x.set.call(y,v),!0):(Reflect.set(h,m,v,y),!0)):(typeof m=="symbol"||m[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:v}:x=d(v),Object.defineProperty(y,m,x),x.set&&x.set.call(y,v),!0)}});return Object.setPrototypeOf(p.prototype,g),p}return s}class A{id;state;constructor(t,s){this.id=t,this.state=s}}function je(e,...t){let s=Ce(),i=B[N],n=i.get(s);return n||(n=new e(s,B,...t),i.set(s,n)),n.update(...t)}function S(e){return je.bind(null,e)}function de(e){return S(class extends A{callback;lastValues;values;_teardown;constructor(t,s,i,n){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function ue(e,t){e[_].push(t)}const H=de(ue),Oe=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ze=S(class extends A{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ue(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Oe(this.state.host).dispatchEvent(new CustomEvent(K,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=t;this.value=i?n:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Re(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(K,this)}disconnectedCallback(){this.removeEventListener(K,this)}handleEvent(i){const{detail:n}=i;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:e(function({render:i}){const n=ze(s);return i(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const k=S(class extends A{value;values;constructor(e,t,s,i){super(e,t),this.value=s(),this.values=i}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),Q=(e,t)=>k(()=>e,t);function Ge(e,t){e[z].push(t)}const ne=de(Ge),pe=S(class extends A{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});S(class extends A{reducer;currentState;constructor(e,t,s,i,n){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Te=/([A-Z])/gu;S(class extends A{property;eventName;constructor(e,t,s,i){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(Te,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function De(e){return k(()=>({current:e}),[])}function Ne({render:e}){const t=Le(e),s=Re(t);return{component:t,createContext:s}}const q={ATTRIBUTE:1,CHILD:2},G=e=>(...t)=>({_$litDirective$:e,values:t});let X=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const R=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),R(i,t);return!0},F=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},fe=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Fe(t)}};function Ue(e){this._$AN!==void 0?(F(this),this._$AM=e,fe(this)):this._$AM=e}function Be(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)R(i[r],!1),F(i[r]);else i!=null&&(R(i,!1),F(i));else R(this,e)}const Fe=e=>{e.type==q.CHILD&&(e._$AP??=Be,e._$AQ??=Ue)};class me extends X{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),fe(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(R(this,t),F(this))}setValue(t){if(ye(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:w}=Ne({render:xe}),He=(e,...t)=>e.flatMap((s,i)=>[s,t[i]??""]).join(""),Xe=He`
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
`,Ve=()=>u`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
`,Ye=()=>u`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
`,Qe=()=>u`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
`;class Ze{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let Ke=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const re=e=>!we(e)&&typeof e.then=="function",oe=1073741823;let We=class extends me{constructor(){super(...arguments),this._$Cwt=oe,this._$Cbt=[],this._$CK=new Ze(this),this._$CX=new Ke}render(...t){return t.find(s=>!re(s))??C}update(t,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!re(l))return this._$Cwt=a,l;a<n&&l===i[a]||(this._$Cwt=oe,n=0,Promise.resolve(l).then(async f=>{for(;o.get();)await o.get();const b=r.deref();if(b!==void 0){const c=b._$Cbt.indexOf(l);c>-1&&c<b._$Cwt&&(b._$Cwt=c,b.setValue(f))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const E=G(We),qe=(e,...t)=>typeof e=="function"?e(...t):e,Je=e=>fetch(e).then(t=>t.blob()).then(t=>new File([t],"preview.pdf",{type:"application/pdf"})).then(t=>{const s=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(s)},1e3),s}),T=e=>Promise.resolve(qe(e)),D=e=>E(Promise.resolve(e).then(()=>!0,()=>!0),!1),et=e=>{const t=T(e.uri);return u`
		<img
			class="viewable image"
			src=${E(t)}
			alt=${e.alt||e.title||e.filename||"Image"}
			?data-loaded=${D(t)}
		/>
	`},tt=e=>fetch(e).then(t=>t.text()),st=e=>{const t=T(e.uri).then(tt);return u`
    <div class="viewable code" ?data-loaded=${D(t)}>
      <pre class="code-content" data-language=${e.language||"text"}>
${E(t)}</pre
      >
    </div>
  `},it=e=>{const t=T(e.uri).then(Je);return u`
		<embed
			class="viewable pdf"
			data-pdf
			type="application/pdf"
			src="${E(t)}"
			?data-loaded=${D(t)}
		/>
	`},nt=e=>{const t=T(e.uri),{autoplay:s=!1,controls:i=!0,muted:n=!1,poster:r}=e;return u`
		<video
			class="viewable video"
			src=${E(t)}
			?autoplay=${s}
			?controls=${i}
			?muted=${n}
			poster=${r||""}
			?data-loaded=${D(t)}
		>
			Your browser does not support the video element.
		</video>
	`};const rt=e=>e??U,ot=e=>{const t=T(e.uri),{width:s="100%",height:i="100%",sandbox:n,allowfullscreen:r=!0}=e;return u`
		<iframe
			class="viewable iframe"
			src=${E(t)}
			width=${s}
			height=${i}
			sandbox=${rt(n)}
			?allowfullscreen=${r}
			?data-loaded=${D(t)}
		>
			Your browser does not support iframes.
		</iframe>
	`},at=()=>u`
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
`;customElements.define("lightbox-spinner",w(at));const lt=()=>u`<lightbox-spinner></lightbox-spinner>`;const ae=(e,t,s)=>{const i=new Map;for(let n=t;n<=s;n++)i.set(e[n],n);return i},ct=G(class extends X{constructor(e){if(super(e),e.type!==q.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const n=[],r=[];let o=0;for(const a of e)n[o]=i?i(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){const n=$e(e),{values:r,keys:o}=this.dt(t,s,i);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let f,b,c=0,p=n.length-1,d=0,g=r.length-1;for(;c<=p&&d<=g;)if(n[c]===null)c++;else if(n[p]===null)p--;else if(a[c]===o[d])l[d]=$(n[c],r[d]),c++,d++;else if(a[p]===o[g])l[g]=$(n[p],r[g]),p--,g--;else if(a[c]===o[g])l[g]=$(n[c],r[g]),I(e,l[g+1],n[c]),c++,g--;else if(a[p]===o[d])l[d]=$(n[p],r[d]),I(e,n[c],n[p]),p--,d++;else if(f===void 0&&(f=ae(o,d,g),b=ae(a,c,p)),f.has(a[c]))if(f.has(a[p])){const h=b.get(o[d]),m=h!==void 0?n[h]:null;if(m===null){const v=I(e,n[c]);$(v,r[d]),l[d]=v}else l[d]=$(m,r[d]),I(e,n[c],m),n[h]=null;d++}else V(n[p]),p--;else V(n[c]),c++;for(;d<=g;){const h=I(e,l[g+1]);$(h,r[d]),l[d++]=h}for(;c<=p;){const h=n[c++];h!==null&&V(h)}return this.ut=o,_e(e,l),C}}),Z=new WeakMap,ht=G(class extends me{render(e){return U}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),U}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Z.get(t);s===void 0&&(s=new WeakMap,Z.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Z.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const ge="important",dt=" !"+ge,ut=G(class extends X{constructor(e){if(super(e),e.type!==q.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(dt);i.includes("-")||r?s.setProperty(i,r?n.slice(0,-11):n,r?ge:""):s[i]=n}}return C}});const pt={},be=G(class extends X{constructor(){super(...arguments),this.ot=pt}render(e,t){return t()}update(e,[t,s]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,n)=>i===this.ot[n]))return C}else if(this.ot===t)return C;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,s)}});class ft extends Promise{constructor(t){const s={};super((i,n)=>Object.assign(s,{resolve:i,reject:n})),Object.assign(this,s),t?.(s.resolve,s.reject)}resolve=()=>{}}const ve={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},mt=e=>{const{slide:t}=e,[s,i]=pe([]);return ne(()=>{Object.assign(e.style,ve.host)},[]),H(()=>{if(t==null)return;const n={animationEnd$:new ft,...t};i((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===n.id&&l!==!0);return o!==-1?[...r.slice(0,o),n,...r.slice(o+1,r.length)]:[...r,n]})},[t]),ne(async()=>{if(s.filter(l=>!l.out).length<2){const l=s[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const n=s[s.length-1],r=s[s.length-2],o=n.el,a=r.el;r.out=!0,o&&a&&await n.animation?.(o,a),i((l=[])=>l.filter(f=>f!==r))},[s]),{slides:s}},gt=e=>u`<div
		${ht(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${ut(ve.slide)}
	>
		${be([e],()=>e.content??e.render?.(e))}
	</div>`,bt=({slides:e})=>be([e],()=>ct(e,({id:t})=>t,gt)),vt=e=>bt(mt(e));customElements.define("cosmoz-slider",w(vt,{useShadowDOM:!1}));const W=(e,t)=>{const s=e.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=t.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},le=(e,t)=>{const s=e.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=t.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},yt=e=>{const t=De(void 0);return H(()=>{t.current=e},[e]),t.current},xt=e=>e,wt=(e,t,s)=>e.find(i=>s(i)===s(t))??e[0],$t=()=>({id:Math.random(),content:U,animation:W}),_t=(e,{initial:t,render:s,id:i=xt,loop:n})=>{const[r,o]=pe(()=>t??e[0]),a=k(()=>e.indexOf(r),[e,r]),l=yt(a),f=Q(()=>o(()=>n?e[(a-1+e.length)%e.length]:e[Math.max(0,Math.min(e.length-1,a-1))]),[e,a,n]),b=Q(()=>o(()=>n?e[(a+1)%e.length]:e[Math.max(0,Math.min(e.length-1,a+1))]),[e,a,n]),c=Q(h=>o(()=>e[h]),[e]),p=n?!1:a<=0,d=n?!1:a===e.length-1,g=a>(l??-1)?n&&a===e.length-1&&l===0?le:W:n&&a===0&&l===e.length-1?W:le;return H(()=>o(h=>h?e.indexOf(h)>=0?h:wt(e,h,i):e[0]),[e]),{index:a,item:r,slide:k(()=>r==null?$t():{id:i(r),render:h=>s(r,{next:b,prev:f,goto:c,first:p,last:d,...h}),animation:g},[r,s]),prev:f,next:b,goto:c,first:p,last:d}},Ct=e=>{const t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])},kt=(e,{next:t,prev:s,first:i,last:n})=>u`<div class="canvas">
		${(o=>{switch(o.type){case"image":return et(o);case"pdf":return it(o);case"code":return st(o);case"video":return nt(o);case"iframe":return ot(o);default:return u`<div class="error">Unsupported file type</div>`}})(e)}
		<button
			class="prev"
			?disabled=${i}
			@click=${s}
			aria-label="Previous item"
		>
			${Ye()}
		</button>
		<button
			class="next"
			?disabled=${n}
			@click=${t}
			aria-label="Next item"
		>
			${Ve()}
		</button>
		${lt()}
	</div>`,At=(e,t)=>{const{items:s,selected:i}=e,{slide:n,...r}=_t(s,{render:kt,initial:s[i??0],id:l=>l.id}),o=Ct({...r}),a=()=>{t.dispatchEvent(new CustomEvent("close"))};return H(()=>{const l=f=>{if(f.defaultPrevented)return;const{key:b}=f;switch(b){case"Escape":a(),f.preventDefault();break;case"Left":case"ArrowLeft":if(o.first)return;o.prev?.(),f.preventDefault();break;case"Right":case"ArrowRight":if(o.last)return;o.next?.(),f.preventDefault();break}};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[o]),{slide:n,close:a}},St=function(e){const{slide:t,close:s}=At(e,this);return u`
		<cosmoz-slider .slide=${t}></cosmoz-slider>

		<button class="close" @click=${s} aria-label="Close lightbox">
			${Qe()}
		</button>
	`};customElements.define("pion-lightbox",w(St,{styleSheets:[Xe]}));const Et=()=>u` <style>
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
			@close=${()=>{console.log("Lightbox closed from event listener")}}
			.items=${[{id:"1",type:"image",uri:"https://picsum.photos/800/600?random=1",filename:"landscape.jpg",title:"Beautiful landscape"},{id:"2",type:"image",uri:"https://picsum.photos/600/800?random=2",filename:"portrait.jpg",title:"Portrait shot"},{id:"3",type:"image",uri:"https://picsum.photos/600/800?random=3",filename:"city.jpg",title:"City skyline"}]}
			.selected=${0}
		></pion-lightbox>`;customElements.define("demo-image-gallery",w(Et));const It=()=>u`<style>
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
		<pion-lightbox .items=${[{id:"single",type:"image",uri:"https://picsum.photos/1200/800?random=10",filename:"single.jpg",title:"Single image view"}]} .selected=${0}></pion-lightbox>`;customElements.define("demo-single-image",w(It));const Mt=()=>u` <style>
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
		<pion-lightbox .items=${[{id:"1",type:"image",uri:"https://picsum.photos/800/600?random=3",filename:"photo.jpg",title:"Sample Photo"},{id:"2",type:"code",uri:"https://icanhazdadjoke.com/",filename:"file.html",title:"Html Page",language:"html"},{id:"3",type:"pdf",uri:"https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",filename:"tracemonkey-pldi-09.pdf",title:"TraceMonkey Research Paper"}]} .selected=${0}></pion-lightbox>`;customElements.define("demo-mixed-lightbox",w(Mt));const Pt=()=>u`<style>
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
		<pion-lightbox .items=${[{id:"video1",type:"video",uri:"https://www.w3schools.com/html/mov_bbb.mp4",filename:"big-buck-bunny.mp4",title:"Big Buck Bunny",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0},{id:"video2",type:"video",uri:"https://www.w3schools.com/html/movie.mp4",filename:"bear.mp4",title:"Bear Video",controls:!0}]} .selected=${0}></pion-lightbox>`;customElements.define("demo-video-lightbox",w(Pt));const Lt=()=>u`<style>
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
		<pion-lightbox .items=${[{id:"1",type:"iframe",uri:"https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-0.05,51.52",filename:"map.html",title:"Interactive Map",width:"80vw",height:"70vh"},{id:"2",type:"iframe",uri:"https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-1.05,51.52",filename:"map.html",title:"Interactive Map",width:"80vw",height:"70vh"}]} .selected=${0}></pion-lightbox>`;customElements.define("demo-iframe-lightbox",w(Lt));const Tt={title:"Lightbox",tags:["autodocs"]},M=()=>u`<demo-image-gallery></demo-image-gallery>`;M.parameters={docs:{description:{story:"A lightbox showing multiple images that can be navigated using arrow keys or navigation buttons."}}};const P=()=>u`<demo-single-image></demo-single-image>`;P.parameters={docs:{description:{story:"A lightbox displaying a single image with no navigation arrows."}}};const L=()=>u`<demo-mixed-lightbox></demo-mixed-lightbox>`;L.parameters={docs:{description:{story:"A lightbox showcasing different content types: images, pdf and code."}}};const j=()=>u`<demo-video-lightbox></demo-video-lightbox>`;j.parameters={docs:{description:{story:"A lightbox specifically designed for video content, with autoplay and controls."}}};const O=()=>u`<demo-iframe-lightbox></demo-iframe-lightbox>`;O.parameters={docs:{description:{story:"A lightbox specifically designed for displaying iframe content, with support for various iframe sources."}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"() => {\n  return html`<demo-image-gallery></demo-image-gallery>`;\n}",...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"() => {\n  return html`<demo-single-image></demo-single-image>`;\n}",...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"() => {\n  return html`<demo-mixed-lightbox></demo-mixed-lightbox>`;\n}",...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => {\n  return html`<demo-video-lightbox></demo-video-lightbox>`;\n}",...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"() => {\n  return html`<demo-iframe-lightbox></demo-iframe-lightbox>`;\n}",...O.parameters?.docs?.source}}};const Dt=["ImageGallery","SingleImage","MixedContent","VideoLightbox","IframeLightbox"];export{O as IframeLightbox,M as ImageGallery,L as MixedContent,P as SingleImage,j as VideoLightbox,Dt as __namedExportsOrder,Tt as default};
