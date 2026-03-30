import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./iframe-D3FrVVbO.js";function m(e){g=e}function h(){g=null,_=0}function ee(){return _++}var g,_,v=e((()=>{_=0})),y,b,te,ne,x,S,C,w=e((()=>{y=Symbol(`haunted.phase`),b=Symbol(`haunted.hook`),te=Symbol(`haunted.update`),ne=Symbol(`haunted.commit`),x=Symbol(`haunted.effects`),S=Symbol(`haunted.layoutEffects`),C=`haunted.context`})),re,ie=e((()=>{v(),w(),re=class{update;host;virtual;[b];[x];[S];constructor(e,t){this.update=e,this.host=t,this[b]=new Map,this[x]=[],this[S]=[]}run(e){m(this);let t=e();return h(),t}_runEffects(e){let t=this[e];m(this);for(let e of t)e.call(this);h()}runEffects(){this._runEffects(x)}runLayoutEffects(){this._runEffects(S)}teardown(){this[b].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}}));function ae(){let e=[];function t(){let t=e;e=[];for(var n=0,r=t.length;n<r;n++)t[n]()}return function(n){e.push(n),oe(t)}}var oe,se,ce,le,ue=e((()=>{ie(),w(),oe=Promise.resolve().then.bind(Promise.resolve()),se=ae(),ce=ae(),le=class{renderer;host;state;[y];_updateQueued;_active;constructor(e,t){this.renderer=e,this.host=t,this.state=new re(this.update.bind(this),t),this[y]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||=(se(()=>{let e=this.handlePhase(te);ce(()=>{this.handlePhase(ne,e),ce(()=>{this.handlePhase(x)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[y]=e,e){case ne:this.commit(t),this.runEffects(S);return;case te:return this.render();case x:return this.runEffects(x)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}})),de,fe,pe=e((()=>{de=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},fe=e=>e?.map(e=>typeof e==`string`?de(e):e)}));function me(e){class t extends le{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=fe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he,ge=e((()=>{ue(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function _e(e,...t){let n=ee(),r=g[b],i=r.get(n);return i||(i=new e(n,g,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E,D=e((()=>{v(),w(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ye=e((()=>{D()}));function be(e,t){e[x].push(t)}var O,xe=e((()=>{w(),ye(),O=ve(be)})),Se,Ce,we=e((()=>{D(),w(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(C,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(C,this)}disconnectedCallback(){this.removeEventListener(C,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ee=e((()=>{w(),we()})),k,De=e((()=>{D(),k=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),A,Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)}));function ke(e,t){e[S].push(t)}var Ae,je=e((()=>{w(),ye(),Ae=ve(ke)})),Me,Ne=e((()=>{D(),Me=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Pe=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Fe,Ie=e((()=>{D(),Fe=/([A-Z])/gu,T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Fe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updateProp(r))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){let t=this.state.host[this.property];typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){let t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}})}));function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Re(e){return k(()=>Le(e),[])}var ze=e((()=>{De()})),Be=e((()=>{D(),T(class extends E{update(){return this.state.host}})}));function Ve({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}var He=e((()=>{ge(),Ee(),Oe(),xe(),je(),Ne(),Pe(),De(),we(),Ie(),ze(),Be(),ue()})),j,M,N,P=e((()=>{j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},M=e=>(...t)=>({_$litDirective$:e,values:t}),N=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Ue(e){this._$AN===void 0?this._$AM=e:(I(this),this._$AM=e,Ge(this))}function We(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)F(r[e],!1),I(r[e]);else r!=null&&(F(r,!1),I(r));else F(this,e)}var F,I,Ge,Ke,qe,Je=e((()=>{u(),P(),F=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),F(e,t);return!0},I=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ge=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ke(t)}},Ke=e=>{e.type==j.CHILD&&(e._$AP??=We,e._$AQ??=Ue)},qe=class extends N{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ge(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(F(this,e),I(this))}setValue(e){if(c(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function Ye(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(Xe.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Ye(e,t):e.teardown();break}else if(Xe.call(a.addedNodes,n.nextSibling)){i.disconnect(),Ye(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var Xe,Ze=e((()=>{P(),l(),Je(),ue(),Xe=Array.prototype.includes})),L,Qe,$e=e((()=>{l(),He(),Ze(),{component:L,createContext:Qe}=Ve({render:p})})),R=e((()=>{$e(),He(),pe(),He()})),et=e((()=>{R()})),tt,nt=e((()=>{tt=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),rt=e((()=>{})),it=e((()=>{et(),nt(),rt()})),at,ot=e((()=>{it(),at=tt`
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
`})),st,ct,lt,ut=e((()=>{l(),st=()=>i`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
`,ct=()=>i`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
`,lt=()=>i`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
`})),dt,ft,pt=e((()=>{dt=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},ft=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),mt,z,ht,B,V=e((()=>{l(),u(),Je(),pt(),P(),mt=e=>!a(e)&&typeof e.then==`function`,z=1073741823,ht=class extends qe{constructor(){super(...arguments),this._$Cwt=z,this._$Cbt=[],this._$CK=new dt(this),this._$CX=new ft}render(...e){return e.find(e=>!mt(e))??r}update(e,t){let n=this._$Cbt,i=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let r=t[e];if(!mt(r))return this._$Cwt=e,r;e<i&&r===n[e]||(this._$Cwt=z,i=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(r);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return r}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},B=M(ht)})),gt,_t=e((()=>{gt=(e,...t)=>typeof e==`function`?e(...t):e})),vt,H,U,W=e((()=>{V(),_t(),vt=e=>fetch(e).then(e=>e.blob()).then(e=>new File([e],`preview.pdf`,{type:`application/pdf`})).then(e=>{let t=URL.createObjectURL(e);return setTimeout(()=>{URL.revokeObjectURL(t)},1e3),t}),H=e=>Promise.resolve(gt(e)),U=e=>B(Promise.resolve(e).then(()=>!0,()=>!0),!1)})),yt,bt=e((()=>{l(),V(),W(),yt=e=>{let t=H(e.uri);return i`
		<img
			class="viewable image"
			src=${B(t)}
			alt=${e.alt||e.title||e.filename||`Image`}
			?data-loaded=${U(t)}
		/>
	`}})),xt,St,Ct=e((()=>{l(),V(),W(),xt=e=>fetch(e).then(e=>e.text()),St=e=>{let t=H(e.uri).then(xt);return i`
    <div class="viewable code" ?data-loaded=${U(t)}>
      <pre class="code-content" data-language=${e.language||`text`}>
${B(t)}</pre
      >
    </div>
  `}})),wt,Tt=e((()=>{l(),V(),W(),wt=e=>{let t=H(e.uri).then(vt);return i`
		<embed
			class="viewable pdf"
			data-pdf
			type="application/pdf"
			src="${B(t)}"
			?data-loaded=${U(t)}
		/>
	`}})),Et,Dt=e((()=>{l(),V(),W(),Et=e=>{let t=H(e.uri),{autoplay:n=!1,controls:r=!0,muted:a=!1,poster:o}=e;return i`
		<video
			class="viewable video"
			src=${B(t)}
			?autoplay=${n}
			?controls=${r}
			?muted=${a}
			poster=${o||``}
			?data-loaded=${U(t)}
		>
			Your browser does not support the video element.
		</video>
	`}})),Ot,kt=e((()=>{l(),Ot=e=>e??o})),At,jt=e((()=>{l(),V(),kt(),W(),At=e=>{let t=H(e.uri),{width:n=`100%`,height:r=`100%`,sandbox:a,allowfullscreen:o=!0}=e;return i`
		<iframe
			class="viewable iframe"
			src=${B(t)}
			width=${n}
			height=${r}
			sandbox=${Ot(a)}
			?allowfullscreen=${o}
			?data-loaded=${U(t)}
		>
			Your browser does not support iframes.
		</iframe>
	`}})),Mt,Nt,Pt=e((()=>{R(),Mt=()=>i`
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
`,customElements.define(`lightbox-spinner`,L(Mt)),Nt=()=>i`<lightbox-spinner></lightbox-spinner>`})),Ft,It,Lt=e((()=>{l(),P(),u(),Ft=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},It=M(class extends N{constructor(e){if(super(e),e.type!==j.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[i,a,o]){let c=f(e),{values:l,keys:u}=this.dt(i,a,o);if(!Array.isArray(c))return this.ut=u,l;let p=this.ut??=[],m=[],h,ee,g=0,_=c.length-1,v=0,y=l.length-1;for(;g<=_&&v<=y;)if(c[g]===null)g++;else if(c[_]===null)_--;else if(p[g]===u[v])m[v]=d(c[g],l[v]),g++,v++;else if(p[_]===u[y])m[y]=d(c[_],l[y]),_--,y--;else if(p[g]===u[y])m[y]=d(c[g],l[y]),n(e,m[y+1],c[g]),g++,y--;else if(p[_]===u[v])m[v]=d(c[_],l[v]),n(e,c[g],c[_]),_--,v++;else if(h===void 0&&(h=Ft(u,v,y),ee=Ft(p,g,_)),h.has(p[g]))if(h.has(p[_])){let t=ee.get(u[v]),r=t===void 0?null:c[t];if(r===null){let t=n(e,c[g]);d(t,l[v]),m[v]=t}else m[v]=d(r,l[v]),n(e,c[g],r),c[t]=null;v++}else s(c[_]),_--;else s(c[g]),g++;for(;v<=y;){let t=n(e,m[y+1]);d(t,l[v]),m[v++]=t}for(;g<=_;){let e=c[g++];e!==null&&s(e)}return this.ut=u,t(e,m),r}})})),G,Rt,zt=e((()=>{l(),Je(),P(),G=new WeakMap,Rt=M(class extends qe{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=G.get(t);n===void 0&&(n=new WeakMap,G.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?G.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),Bt,Vt,Ht,Ut=e((()=>{l(),P(),Bt=`important`,Vt=` !`+Bt,Ht=M(class extends N{constructor(e){if(super(e),e.type!==j.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Vt);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Bt:``):n[e]=r}}return r}})})),Wt,Gt,Kt=e((()=>{l(),P(),Wt={},Gt=M(class extends N{constructor(){super(...arguments),this.ot=Wt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return r}else if(this.ot===t)return r;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),qt,Jt=e((()=>{qt=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),Yt,Xt,Zt,Qt,$t=e((()=>{R(),Lt(),zt(),Ut(),Kt(),Jt(),Yt={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},Xt=e=>{let{slide:t}=e,[n,r]=Me([]);return Ae(()=>void Object.assign(e.style,Yt.host),[]),O(()=>{if(t==null)return;let e={animationEnd$:new qt,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),Ae(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},Zt=e=>i`<div
		${Rt(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${Ht(Yt.slide)}
	>
		${Gt([e],()=>e.content??e.render?.(e))}
	</div>`,Qt=({slides:e})=>Gt([e],()=>It(e,({id:e})=>e,Zt))})),en,tn=e((()=>{R(),$t(),en=e=>Qt(Xt(e)),customElements.define(`cosmoz-slider`,L(en,{useShadowDOM:!1}))})),K,q,nn=e((()=>{K=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},q=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),rn,an,on,sn,cn,ln=e((()=>{R(),l(),nn(),rn=e=>{let t=Re(void 0);return O(()=>void(t.current=e),[e]),t.current},an=e=>e,on=(e,t,n)=>e.find(e=>n(e)===n(t))??e[0],sn=()=>({id:Math.random(),content:o,animation:K}),cn=(e,{initial:t,render:n,id:r=an,loop:i})=>{let[a,o]=Me(()=>t??e[0]),s=k(()=>e.indexOf(a),[e,a]),c=rn(s),l=A(()=>o(()=>i?e[(s-1+e.length)%e.length]:e[Math.max(0,Math.min(e.length-1,s-1))]),[e,s,i]),u=A(()=>o(()=>i?e[(s+1)%e.length]:e[Math.max(0,Math.min(e.length-1,s+1))]),[e,s,i]),d=A(t=>o(()=>e[t]),[e]),f=i?!1:s<=0,p=i?!1:s===e.length-1,m=s>(c??-1)?i&&s===e.length-1&&c===0?q:K:i&&s===0&&c===e.length-1?K:q;return O(()=>o(t=>t?e.indexOf(t)>=0?t:on(e,t,r):e[0]),[e]),{index:s,item:a,slide:k(()=>a==null?sn():{id:r(a),render:e=>n(a,{next:u,prev:l,goto:d,first:f,last:p,...e}),animation:m},[a,n]),prev:l,next:u,goto:d,first:f,last:p}}})),un=e((()=>{tn(),ln(),nn(),$t()})),dn,fn=e((()=>{R(),dn=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})),pn,mn,hn=e((()=>{R(),ut(),bt(),Ct(),Tt(),Dt(),jt(),Pt(),un(),fn(),pn=(e,{next:t,prev:n,first:r,last:a})=>i`<div class="canvas">
		${(e=>{switch(e.type){case`image`:return yt(e);case`pdf`:return wt(e);case`code`:return St(e);case`video`:return Et(e);case`iframe`:return At(e);default:return i`<div class="error">Unsupported file type</div>`}})(e)}
		<button
			class="prev"
			?disabled=${r}
			@click=${n}
			aria-label="Previous item"
		>
			${ct()}
		</button>
		<button
			class="next"
			?disabled=${a}
			@click=${t}
			aria-label="Next item"
		>
			${st()}
		</button>
		${Nt()}
	</div>`,mn=(e,t)=>{let{items:n,selected:r}=e,{slide:i,...a}=cn(n,{render:pn,initial:n[r??0],id:e=>e.id}),o=dn({...a}),s=()=>{t.dispatchEvent(new CustomEvent(`close`))};return O(()=>{let e=e=>{if(e.defaultPrevented)return;let{key:t}=e;switch(t){case`Escape`:s(),e.preventDefault();break;case`Left`:case`ArrowLeft`:if(o.first)return;o.prev?.(),e.preventDefault();break;case`Right`:case`ArrowRight`:if(o.last)return;o.next?.(),e.preventDefault();break}};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{slide:i,close:s}}})),gn,_n=e((()=>{R(),ot(),hn(),ut(),gn=function(e){let{slide:t,close:n}=mn(e,this);return i`
		<cosmoz-slider .slide=${t}></cosmoz-slider>

		<button class="close" @click=${n} aria-label="Close lightbox">
			${lt()}
		</button>
	`},customElements.define(`pion-lightbox`,L(gn,{styleSheets:[at]}))})),vn=e((()=>{})),J=e((()=>{_n(),vn()})),yn,bn=e((()=>{R(),J(),yn=()=>i` <style>
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
			@close=${()=>{console.log(`Lightbox closed from event listener`)}}
			.items=${[{id:`1`,type:`image`,uri:`https://picsum.photos/800/600?random=1`,filename:`landscape.jpg`,title:`Beautiful landscape`},{id:`2`,type:`image`,uri:`https://picsum.photos/600/800?random=2`,filename:`portrait.jpg`,title:`Portrait shot`},{id:`3`,type:`image`,uri:`https://picsum.photos/600/800?random=3`,filename:`city.jpg`,title:`City skyline`}]}
			.selected=${0}
		></pion-lightbox>`,customElements.define(`demo-image-gallery`,L(yn))})),xn,Sn=e((()=>{R(),J(),xn=()=>i`<style>
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
		<pion-lightbox .items=${[{id:`single`,type:`image`,uri:`https://picsum.photos/1200/800?random=10`,filename:`single.jpg`,title:`Single image view`}]} .selected=${0}></pion-lightbox>`,customElements.define(`demo-single-image`,L(xn))})),Cn,wn=e((()=>{R(),J(),Cn=()=>i` <style>
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
		<pion-lightbox .items=${[{id:`1`,type:`image`,uri:`https://picsum.photos/800/600?random=3`,filename:`photo.jpg`,title:`Sample Photo`},{id:`2`,type:`code`,uri:`https://icanhazdadjoke.com/`,filename:`file.html`,title:`Html Page`,language:`html`},{id:`3`,type:`pdf`,uri:`https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf`,filename:`tracemonkey-pldi-09.pdf`,title:`TraceMonkey Research Paper`}]} .selected=${0}></pion-lightbox>`,customElements.define(`demo-mixed-lightbox`,L(Cn))})),Tn,En=e((()=>{R(),J(),Tn=()=>i`<style>
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
		<pion-lightbox .items=${[{id:`video1`,type:`video`,uri:`https://www.w3schools.com/html/mov_bbb.mp4`,filename:`big-buck-bunny.mp4`,title:`Big Buck Bunny`,poster:`https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217`,controls:!0},{id:`video2`,type:`video`,uri:`https://www.w3schools.com/html/movie.mp4`,filename:`bear.mp4`,title:`Bear Video`,controls:!0}]} .selected=${0}></pion-lightbox>`,customElements.define(`demo-video-lightbox`,L(Tn))})),Dn,On=e((()=>{R(),J(),Dn=()=>i`<style>
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
		<pion-lightbox .items=${[{id:`1`,type:`iframe`,uri:`https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-0.05,51.52`,filename:`map.html`,title:`Interactive Map`,width:`80vw`,height:`70vh`},{id:`2`,type:`iframe`,uri:`https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-1.05,51.52`,filename:`map.html`,title:`Interactive Map`,width:`80vw`,height:`70vh`}]} .selected=${0}></pion-lightbox>`,customElements.define(`demo-iframe-lightbox`,L(Dn))})),kn,Y,X,Z,Q,$,An;e((()=>{R(),bn(),Sn(),wn(),En(),On(),kn={title:`Lightbox`,tags:[`autodocs`]},Y=()=>i`<demo-image-gallery></demo-image-gallery>`,Y.parameters={docs:{description:{story:`A lightbox showing multiple images that can be navigated using arrow keys or navigation buttons.`}}},X=()=>i`<demo-single-image></demo-single-image>`,X.parameters={docs:{description:{story:`A lightbox displaying a single image with no navigation arrows.`}}},Z=()=>i`<demo-mixed-lightbox></demo-mixed-lightbox>`,Z.parameters={docs:{description:{story:`A lightbox showcasing different content types: images, pdf and code.`}}},Q=()=>i`<demo-video-lightbox></demo-video-lightbox>`,Q.parameters={docs:{description:{story:`A lightbox specifically designed for video content, with autoplay and controls.`}}},$=()=>i`<demo-iframe-lightbox></demo-iframe-lightbox>`,$.parameters={docs:{description:{story:`A lightbox specifically designed for displaying iframe content, with support for various iframe sources.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return html\`<demo-image-gallery></demo-image-gallery>\`;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return html\`<demo-single-image></demo-single-image>\`;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return html\`<demo-mixed-lightbox></demo-mixed-lightbox>\`;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return html\`<demo-video-lightbox></demo-video-lightbox>\`;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return html\`<demo-iframe-lightbox></demo-iframe-lightbox>\`;
}`,...$.parameters?.docs?.source}}},An=[`ImageGallery`,`SingleImage`,`MixedContent`,`VideoLightbox`,`IframeLightbox`]}))();export{$ as IframeLightbox,Y as ImageGallery,Z as MixedContent,X as SingleImage,Q as VideoLightbox,An as __namedExportsOrder,kn as default};