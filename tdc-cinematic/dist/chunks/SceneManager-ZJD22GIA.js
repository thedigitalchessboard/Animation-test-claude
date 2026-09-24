import{a as ct,b as m,c as _,d as N,e as Gt,f as Ct}from"./chunk-H244NO72.js";var se={logoMark:"assets/brand/tdc-logo-mark-dark.webp",logoHorizontal:"assets/brand/tdc-logo-horizontal-light.webp",logoTransparent:null,landMask:"assets/earth/land-mask.webp"},ft=class n{constructor({baseUrl:t,assets:e={},THREE:o=null,gsap:s=null}={}){this.baseUrl=t,this.paths={...se,...e},this.injected={THREE:o,gsap:s},this.images={},this.textures=new Set}url(t){if(!t)return null;try{return new URL(t,this.baseUrl).href}catch{return t}}async loadLibraries(){let[t,e]=await Promise.all([this.injected.THREE||import("./three-JS7XIUQM.js"),this.injected.gsap||(window.gsap??import("./gsap-FC6IJHY2.js").then(o=>o.gsap))]);return this.THREE=t,this.gsap=e,{THREE:t,gsap:e}}loadImage(t,e){return new Promise((o,s)=>{let a=new Image;a.decoding="async",a.crossOrigin="anonymous",a.onload=()=>{this.images[t]=a,o(a)},a.onerror=()=>s(new Error(`[tdc-cinematic] could not load ${t}: ${e}`)),a.src=e})}async loadImages(){let t=this.paths,e=[this.loadImage("logoHorizontal",this.url(t.logoHorizontal)),this.loadImage("landMask",this.url(t.landMask))];if(t.logoTransparent?e.push(this.loadImage("logoTransparent",this.url(t.logoTransparent))):e.push(this.loadImage("logoMark",this.url(t.logoMark))),await Promise.all(e),this.logoHorizontalUrl=this.url(t.logoHorizontal),t.logoTransparent){let o=this.images.logoTransparent;this.brandLogo={url:this.url(t.logoTransparent),width:o.naturalWidth||1e3,height:o.naturalHeight||1e3}}else this.brandLogo=n.removeFlatBackground(this.images.logoMark);return this}static removeFlatBackground(t){let e=t.naturalWidth,o=t.naturalHeight,s=document.createElement("canvas");s.width=e,s.height=o;let a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0);let i=a.getImageData(0,0,e,o),r=i.data,l=Math.max(4,Math.round(Math.min(e,o)*.04)),p=[],c=[],h=[],f=[];for(let A=0;A<o;A+=2)for(let S=0;S<e;S+=2){if(S>=l&&S<e-l&&A>=l&&A<o-l)continue;let R=(A*e+S)*4;p.push(r[R]),c.push(r[R+1]),h.push(r[R+2]),f.push(.299*r[R]+.587*r[R+1]+.114*r[R+2])}let d=(A,S)=>A.slice().sort((R,lt)=>R-lt)[Math.min(A.length-1,Math.floor(A.length*S))],y=[d(p,.5),d(c,.5),d(h,.5)],k=d(f,.995)+4,g=Math.max(1,255-k),$=e,x=o,M=0,u=0;for(let A=0;A<o;A++)for(let S=0;S<e;S++){let R=(A*e+S)*4,G=(.299*r[R]+.587*r[R+1]+.114*r[R+2]-k)/g;if(G=G<=0?0:G>=1?1:G,G>0){for(let I=0;I<3;I++)r[R+I]=Math.min(255,Math.max(0,(r[R+I]-y[I]*(1-G))/G));G>.2&&(S<$&&($=S),S>M&&(M=S),A<x&&(x=A),A>u&&(u=A))}r[R+3]=Math.round(G*255)}a.putImageData(i,0,0);let b=Math.round(Math.max(e,o)*.015);$=Math.max(0,$-b),x=Math.max(0,x-b),M=Math.min(e-1,M+b),u=Math.min(o-1,u+b);let C=M-$+1,E=u-x+1,Q=document.createElement("canvas");return Q.width=C,Q.height=E,Q.getContext("2d").drawImage(s,$,x,C,E,0,0,C,E),{url:Q.toDataURL("image/png"),width:C,height:E}}dispose(){this.textures.forEach(t=>t.dispose?.()),this.textures.clear(),this.images={}}};var ut=class{constructor(t,{onComplete:e}={}){this.gsap=t,this.clock={t:0},this.tl=t.timeline({paused:!0,onComplete:e}),this.tl.fromTo(this.clock,{t:0},{t:14,duration:14,ease:"none"},0)}finalize(){let t=this.tl.duration();if(t>14.9){let e=t/14;this.tl.timeScale(e),console.warn(`[tdc-cinematic] timeline was ${t.toFixed(2)}s \u2014 time-scaled \xD7${e.toFixed(3)} to stay under ${14.9}s`)}return this.duration=this.tl.duration()/this.tl.timeScale(),this.duration}get time(){return this.clock.t}get playing(){return!this.tl.paused()&&this.tl.progress()<1}get ended(){return this.tl.progress()>=1}play(){this.tl.play()}pause(){this.tl.pause()}restart(){this.tl.restart()}seek(t){this.tl.seek(Math.max(0,Math.min(t,this.tl.duration())))}dispose(){this.tl.kill()}};var mt=class n{constructor(t,{forceProfile:e}={}){this.container=t,this.forceProfile=e,this.listeners=new Set,this.W=1,this.H=1,this.measure(),this.ro=new ResizeObserver(()=>{let o=this.profile.name,{W:s,H:a}=this;this.measure(),(s!==this.W||a!==this.H)&&this.listeners.forEach(i=>i(this,o!==this.profile.name))}),this.ro.observe(t)}measure(){let t=this.container.getBoundingClientRect();this.W=Math.max(1,Math.round(t.width)),this.H=Math.max(1,Math.round(t.height)),this.aspect=this.W/this.H,this.profile=Ct[this.forceProfile]||Ct[n.pick(this.W)],this.portrait=this.aspect<1.05,this.unit=Math.min(this.H,this.W*1.05)/900}static pick(t){return t<640?"mobile":t<1024?"tablet":"desktop"}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){this.ro.disconnect(),this.listeners.clear()}};var q=class{constructor(t,{onVisibleChange:e,threshold:o=.35}={}){this.container=t,this.onVisibleChange=e,this.inView=!1,this.pageVisible=!document.hidden,this.samples=[],this.level=0,this.degradeListeners=new Set,this.io=new IntersectionObserver(s=>{for(let a of s)this.inView=a.isIntersecting&&a.intersectionRatio>=o;this.emit()},{threshold:[0,o,.6,1]}),this.io.observe(t),this.onDocVis=()=>{this.pageVisible=!document.hidden,this.emit()},document.addEventListener("visibilitychange",this.onDocVis)}get visible(){return this.inView&&this.pageVisible}emit(){let t=this.visible;t!==this.lastVisible&&(this.lastVisible=t,this.onVisibleChange?.(t))}static cappedDpr(t){return Math.min(window.devicePixelRatio||1,t)}sample(t){if(t<=0||t>.5||(this.samples.push(t),this.samples.length<45))return;let e=this.samples.reduce((o,s)=>o+s,0)/this.samples.length;this.samples.length=0,e>1/38&&this.level<2&&(this.level+=1,this.degradeListeners.forEach(o=>o(this.level)))}onDegrade(t){this.degradeListeners.add(t)}dispose(){this.io.disconnect(),document.removeEventListener("visibilitychange",this.onDocVis),this.degradeListeners.clear()}};var yt=class{constructor(t,e,o){this.THREE=t,this.profile=o,this.renderer=new t.WebGLRenderer({canvas:e,antialias:o.antialias,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.setClearColor(0,0),this.scene=new t.Scene,this.camera=new t.PerspectiveCamera(35,16/9,.01,400),this.dprScale=1}setSize(t,e,o=this.profile){this.profile=o;let s=q.cappedDpr(o.dprCap)*this.dprScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.W=t,this.H=e}degrade(t){this.dprScale=t>=2?.6:.8,this.W&&this.setSize(this.W,this.H)}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(o=>{for(let s in o.uniforms||{})o.uniforms[s].value?.dispose?.();o.map?.dispose?.(),o.dispose()})}),this.renderer.dispose(),this.renderer.forceContextLoss?.()}};var ie="http://www.w3.org/2000/svg",Ht=0;function D(n="tdc"){return Ht+=1,`${n}-${Ht.toString(36)}`}function V(n,t={},e=null){let o=document.createElementNS(ie,n);for(let s in t)o.setAttribute(s,t[s]);return e&&e.appendChild(o),o}function X(n,t){let e=V("svg",{class:n,"aria-hidden":"true",focusable:"false",preserveAspectRatio:"xMidYMid slice"});return t&&e.setAttribute("viewBox",t),e}function P(n,t={}){let e=V("g",t);return e.innerHTML=n,e}function H(n){let t={};return n.querySelectorAll("[data-part]").forEach(e=>{t[e.getAttribute("data-part")]=e}),t}var w=n=>(Math.round(n*100)/100).toString();function F(n,t,e){if(!n)return;let o=`__${t}`;n[o]!==e&&(n[o]=e,n.setAttribute(t,e))}function L(n,t){F(n,"opacity",w(Math.max(0,Math.min(1,t))))}var U=class{constructor({root:t,parts:e,joints:o,face:s,state:a}){this.root=t,this.parts=e,this.joints=o,this.face=s,this.state={x:0,y:0,rot:0,scale:1,flipX:1,opacity:1,lookX:0,lookY:0,lid:0,browY:0,browTilt:0,turn:0,...Object.fromEntries(Object.keys(o).map(i=>[i,0])),...a},this.hooks=[]}onApply(t){return this.hooks.push(t),this}apply(t,e=0){let o=this.state,s=t?t(o.x,o.y,o.scale):{x:o.x,y:o.y,s:o.scale};if(F(this.root,"transform",`translate(${w(s.x)} ${w(s.y)}) rotate(${w(o.rot)}) scale(${w(s.s*o.flipX)} ${w(s.s)})`),L(this.root,o.opacity),F(this.root,"visibility",o.opacity<=.001?"hidden":"visible"),o.opacity<=.001)return;for(let i in this.joints){let r=this.parts[i];if(!r)continue;let[l,p]=this.joints[i];F(r,"transform",`rotate(${w(o[i])} ${l} ${p})`)}let a=this.face;if(a){let[i,r]=a.maxLook;for(let l of a.eyes){F(l.iris,"transform",`translate(${w(o.lookX*i)} ${w(o.lookY*r)})`);let p=Math.max(0,Math.min(1,o.lid));F(l.lid,"transform",`translate(0 ${w(-l.ry)}) scale(1 ${w(p+1e-4)}) translate(0 ${w(l.ry)})`),F(l.lash,"transform",`translate(0 ${w(p*l.ry*.35)}) scale(1 ${w(1-1.5*p)})`)}a.brows.forEach((l,p)=>{let c=p===0?1:-1;F(l.node,"transform",`translate(0 ${w(o.browY)}) rotate(${w(o.browTilt*c)} ${l.cx} ${l.cy})`)});for(let l in a.mouths)L(a.mouths[l],o[l]??0);a.features&&F(a.features,"transform",`translate(${w(o.turn*a.turnShift)} 0)`)}for(let i of this.hooks)i(o,e)}};function K(n){return n.match(/-?\d*\.?\d+/g).map(Number)}function gt(n){return n.replace(/-?\d*\.?\d+/g,"#")}function xt(n,t){let e=0;return n.replace(/#/g,()=>w(t[e++]))}var Z=class{constructor(t,e={}){this.root=t,this.state={x:0,y:0,rot:0,scale:1,sx:1,sy:1,opacity:1,...e}}apply(t){let e=this.state,o=t?t(e.x,e.y,e.scale):{x:e.x,y:e.y,s:e.scale};F(this.root,"transform",`translate(${w(o.x)} ${w(o.y)}) rotate(${w(e.rot)}) scale(${w(o.s*e.sx)} ${w(o.s*e.sy)})`),L(this.root,e.opacity),F(this.root,"visibility",e.opacity<=.001?"hidden":"visible")}};var W="M22 121 H78 V114 Q78 106 69 104 H31 Q22 106 22 114 Z",O={pawn:W+" M36 104 Q40 90 43 74 L37 72 Q33 68 38 65 L44 63 Q32 56 32 43 Q32 26 50 26 Q68 26 68 43 Q68 56 56 63 L62 65 Q67 68 63 72 L57 74 Q60 90 64 104 Z",rook:W+" M33 104 L37 62 L31 57 L31 34 L40 34 L40 42 L46 42 L46 34 L54 34 L54 42 L60 42 L60 34 L69 34 L69 57 L63 62 L67 104 Z",knight:W+" M31 104 Q30 88 40 77 Q48 68 47 60 Q41 62 35 66 Q28 69 24 63 Q20 57 26 50 Q34 40 38 33 Q42 25 49 21 L47 12 Q53 14 57 19 Q71 22 77 38 Q83 57 77 81 Q75 93 73 104 Z",bishop:W+" M36 104 Q40 86 44 73 L38 71 Q34 67 40 64 L44 62 Q31 52 34 38 Q38 26 50 17 Q62 26 66 38 Q69 52 56 62 L60 64 Q66 67 62 71 L56 73 Q60 86 64 104 Z M50 3 A6 6 0 1 1 49.9 3 Z",queen:W+" M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L41 57 L28 30 L40 44 L42 22 L50 40 L58 22 L60 44 L72 30 L59 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z",king:W+" M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L42 57 Q29 47 31 37 Q34 28 50 31 Q66 28 69 37 Q71 47 58 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z M47 6 H53 V13 H60 V19 H53 V29 H47 V19 H40 V13 H47 Z"},re={knight:'<circle cx="44" cy="35" r="2.6" fill="#0B1E3D"/><path d="M58 24 Q66 34 66 52" stroke="#0B1E3D" stroke-opacity=".35" stroke-width="2" fill="none"/>',bishop:'<path d="M55 34 L45 46" stroke="#0B1E3D" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round"/>',queen:'<circle cx="28" cy="29" r="4"/><circle cx="42" cy="21" r="4"/><circle cx="58" cy="21" r="4"/><circle cx="72" cy="29" r="4"/>',pawn:"",rook:"",king:""};function B(n,t,{shadow:e=!0,tone:o="gold"}={}){let s=`url(#${t})`,a=o==="navy"?"#050d1f":o==="ivory"?"#9aa6bb":"#7a5a22",i=re[n].replace(/<circle /g,`<circle fill="${s}" stroke="${a}" stroke-width="1.4" `);return`
    <g transform="translate(-50 -120)">
      ${e?'<ellipse data-part="shadow" cx="50" cy="121" rx="30" ry="5" fill="#000" opacity=".28"/>':""}
      <path d="${O[n]}" fill="${s}" stroke="${a}" stroke-width="1.6" stroke-linejoin="round" fill-rule="nonzero"/>
      ${i}
      <path d="${O[n]}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1" transform="translate(-1.2 -1)"/>
    </g>`}function Y(n){return`
    <linearGradient id="${n}-gold" x1="0" y1="0" x2="1" y2="0.25">
      <stop offset="0" stop-color="#F6E3A8"/><stop offset=".38" stop-color="#E0BC69"/>
      <stop offset=".7" stop-color="#B98D3C"/><stop offset="1" stop-color="#8A6424"/>
    </linearGradient>
    <linearGradient id="${n}-ivory" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#EDE9E0"/><stop offset="1" stop-color="#BFC5D2"/>
    </linearGradient>
    <linearGradient id="${n}-navy" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#3F5F9E"/><stop offset=".5" stop-color="#1A2F5C"/><stop offset="1" stop-color="#0A1631"/>
    </linearGradient>`}function _t(n,t=256){let e=document.createElement("canvas");e.width=t,e.height=t;let o=e.getContext("2d"),s=t/150;o.translate(t/2-50*s,t*.06),o.scale(s,s);let a=new Path2D(O[n]);o.save(),o.shadowColor="rgba(242, 216, 146, 0.85)",o.shadowBlur=18*s,o.fillStyle="#E0BC69",o.fill(a),o.restore();let i=o.createLinearGradient(20,0,80,20);return i.addColorStop(0,"#FFF1C6"),i.addColorStop(.4,"#E6C475"),i.addColorStop(.75,"#B98D3C"),i.addColorStop(1,"#8A6424"),o.fillStyle=i,o.fill(a),o.lineWidth=1.6,o.strokeStyle="#7a5a22",o.stroke(a),n==="knight"&&(o.fillStyle="#0B1E3D",o.beginPath(),o.arc(44,35,2.6,0,Math.PI*2),o.fill()),n==="queen"&&(o.fillStyle=i,[[28,29],[42,21],[58,21],[72,29]].forEach(([r,l])=>{o.beginPath(),o.arc(r,l,4,0,Math.PI*2),o.fill(),o.stroke()})),e}var Zt="#8C5A3C",Yt="#3E1512";function zt({logoUrl:n}){let t=D("astro"),e=`
  <defs>
    <linearGradient id="${t}-suit" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#E4E8F0"/><stop offset="1" stop-color="#A9B3C6"/>
    </linearGradient>
    <radialGradient id="${t}-visor" cx=".35" cy=".3" r=".9">
      <stop offset="0" stop-color="#2A4F9E"/><stop offset=".6" stop-color="#10275A"/><stop offset="1" stop-color="#060F26"/>
    </radialGradient>
    <radialGradient id="${t}-glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#EAF3FF" stop-opacity=".9"/><stop offset="1" stop-color="#EAF3FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="${t}-visorClip"><ellipse cx="0" cy="-148" rx="35" ry="31"/></clipPath>
    <clipPath id="${t}-eye"><ellipse rx="3.4" ry="4"/></clipPath>
    <clipPath id="${t}-screen"><rect x="-36" y="-66" width="72" height="44" rx="3"/></clipPath>
  </defs>
  <g data-part="body">
    <rect x="-50" y="-118" width="100" height="112" rx="22" fill="#B9C2D2"/>
    <path d="M-44 -10 Q-78 6 -66 34 Q-30 48 6 36 Q14 22 2 8 Z" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M44 -10 Q78 6 66 34 Q30 48 -6 36 Q-14 22 -2 8 Z" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <ellipse cx="-68" cy="28" rx="13" ry="10" fill="#9AA6BB"/><ellipse cx="68" cy="28" rx="13" ry="10" fill="#9AA6BB"/>
    <path d="M-40 10 Q-47 -50 -40 -96 Q-30 -113 0 -115 Q30 -113 40 -96 Q47 -50 40 10 Z" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <g transform="translate(-29 -86)">
      <circle r="8" fill="#0B1E3D" stroke="#D8B15E" stroke-width="1.5"/>
      <path d="${O.knight}" transform="scale(.11) translate(-50 -66)" fill="#D8B15E"/>
    </g>
    <path d="M-46 -92 Q-64 -60 -44 -40 L-14 -40 L-16 -52 L-34 -54 Q-36 -72 -30 -86 Z" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M46 -92 Q64 -60 44 -40 L14 -40 L16 -52 L34 -54 Q36 -72 30 -86 Z" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <g data-part="tablet">
      <ellipse cx="0" cy="-44" rx="70" ry="44" fill="url(#${t}-glow)" opacity=".35"/>
      <rect x="-40" y="-70" width="80" height="52" rx="6" fill="#0B1E3D"/>
      <rect x="-36" y="-66" width="72" height="44" rx="3" fill="#FFFFFF"/>
      <g clip-path="url(#${t}-screen)">
        <image href="${n}" x="-33" y="-63" width="66" height="38" preserveAspectRatio="xMidYMid meet"/>
      </g>
      <circle cx="-15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
      <circle cx="15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
    </g>
    <g data-part="head">
      <rect x="-24" y="-112" width="48" height="12" rx="4" fill="#C7CEDA"/>
      <circle cx="0" cy="-150" r="47" fill="url(#${t}-suit)" stroke="#9AA6BB" stroke-width="2"/>
      <ellipse cx="0" cy="-148" rx="37" ry="33" fill="#C7CEDA"/>
      <ellipse cx="0" cy="-148" rx="35" ry="31" fill="url(#${t}-visor)"/>
      <g clip-path="url(#${t}-visorClip)">
        <path d="M-21 -150 Q-22 -126 0 -122 Q22 -126 21 -150 Q20 -172 0 -173 Q-20 -172 -21 -150 Z" fill="${Zt}"/>
        <path d="M-22 -150 Q-24 -176 0 -178 Q24 -176 22 -150 Q16 -166 0 -166 Q-16 -166 -22 -150 Z" fill="#2A1C16"/>
        <g data-part="features">
          ${[-8,8].map((a,i)=>`
          <g transform="translate(${a} -150)">
            <g clip-path="url(#${t}-eye)">
              <ellipse rx="3.4" ry="4" fill="#FFFDF8"/>
              <g data-part="iris${i}"><circle r="2.4" fill="#2A170E"/><circle cx=".8" cy="-1" r=".8" fill="#fff"/></g>
              <rect data-part="lid${i}" x="-4" y="-4" width="8" height="8" fill="${Zt}"/>
            </g>
            <path data-part="lash${i}" d="M-3.6 0 Q0 -8 3.6 0" stroke="#1A0E0A" stroke-width="1.3" fill="none"/>
          </g>`).join("")}
          <path data-part="browL" d="M-12 -157 Q-8 -160 -4 -158" stroke="#2A1C16" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="browR" d="M4 -158 Q8 -160 12 -157" stroke="#2A1C16" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="mSoft" d="M-5 -134 Q0 -130 5 -134" stroke="${Yt}" stroke-width="1.7" fill="none" stroke-linecap="round"/>
          <path data-part="mGrin" d="M-7 -135 Q0 -126 7 -135 Z" fill="${Yt}" opacity="0"/>
        </g>
        <ellipse cx="0" cy="-118" rx="40" ry="16" fill="#D8E8FF" opacity=".16"/>
      </g>
      <path d="M-26 -166 Q-12 -178 8 -176" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45" fill="none"/>
      <path d="M18 -126 Q28 -134 31 -146" stroke="#D8B15E" stroke-width="2" stroke-linecap="round" opacity=".5" fill="none"/>
    </g>
  </g>`,o=P(e,{class:"tdc-astronaut"}),s=H(o);return new U({root:o,parts:s,joints:{head:[0,-108],body:[0,-40],tablet:[0,-44]},face:{eyes:[0,1].map(a=>({lid:s[`lid${a}`],lash:s[`lash${a}`],iris:s[`iris${a}`],ry:4})),brows:[{node:s.browL,cx:-8,cy:-158},{node:s.browR,cx:8,cy:-158}],mouths:{mSoft:s.mSoft,mGrin:s.mGrin},features:s.features,turnShift:3,maxLook:[1,1.2]},state:{lookY:.8,lid:.25,mSoft:1,mGrin:0}})}var ne=`
attribute float aSize; attribute float aPhase; attribute vec3 aColor;
uniform float uTime; uniform float uPixel; uniform float uAlpha;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.65 + 0.35 * sin(uTime * (1.3 + aPhase) + aPhase * 17.0);
  vAlpha = tw * uAlpha;
  vColor = aColor;
  gl_PointSize = aSize * uPixel;
}`,le=`
varying vec3 vColor; varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float a = pow(core, 2.2) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`,ce=`
attribute float aSize; attribute float aPhase;
uniform float uTime; uniform float uPixel; uniform float uAlpha;
varying float vAlpha;
void main(){
  vec3 p = position;
  p.x += sin(uTime * 0.3 + aPhase * 6.0) * 0.25;
  p.y += cos(uTime * 0.25 + aPhase * 4.0) * 0.2;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixel * (6.0 / -mv.z);
  vAlpha = uAlpha * (0.35 + 0.65 * fract(aPhase * 7.0)) * smoothstep(0.4, 2.5, -mv.z);
}`,he=`
varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(0.95, 0.85, 0.6, a);
}`;function de(n){let t=n;return()=>((t=t*16807%2147483647)-1)/2147483646}var wt=class{constructor(t){this.ctx=t;let{THREE:e}=t,o=de(11),s=t.responsive.profile,a=s.stars,i=new Float32Array(a*3),r=new Float32Array(a),l=new Float32Array(a),p=new Float32Array(a*3);for(let x=0;x<a;x++){let M=o()*2-1,u=o()*Math.PI*2,b=60+o()*60,C=Math.sqrt(1-M*M);i.set([b*C*Math.cos(u),b*M,b*C*Math.sin(u)-20],x*3);let E=o()<.06;r[x]=E?2.6+o()*2.2:.8+o()*1.4,l[x]=o();let Q=o(),A=Q<.08?[.95,.85,.57]:Q<.3?[.72,.8,1]:[1,.98,.94];p.set(A,x*3)}let c=new e.BufferGeometry;c.setAttribute("position",new e.BufferAttribute(i,3)),c.setAttribute("aSize",new e.BufferAttribute(r,1)),c.setAttribute("aPhase",new e.BufferAttribute(l,1)),c.setAttribute("aColor",new e.BufferAttribute(p,3)),this.starUniforms={uTime:{value:0},uPixel:{value:1},uAlpha:{value:1}},this.stars=new e.Points(c,new e.ShaderMaterial({vertexShader:ne,fragmentShader:le,uniforms:this.starUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.stars.frustumCulled=!1,t.three.scene.add(this.stars);let h=s.dust,f=new Float32Array(h*3),d=new Float32Array(h),y=new Float32Array(h);for(let x=0;x<h;x++)f.set([(o()-.5)*16,(o()-.5)*9,2+o()*14],x*3),d[x]=.6+o()*1.6,y[x]=o();let k=new e.BufferGeometry;k.setAttribute("position",new e.BufferAttribute(f,3)),k.setAttribute("aSize",new e.BufferAttribute(d,1)),k.setAttribute("aPhase",new e.BufferAttribute(y,1)),this.dustUniforms={uTime:{value:0},uPixel:{value:1},uAlpha:{value:.8}},this.dust=new e.Points(k,new e.ShaderMaterial({vertexShader:ce,fragmentShader:he,uniforms:this.dustUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.dust.frustumCulled=!1,t.three.scene.add(this.dust);let g=D("space");this.overlayGroup=P(`<defs>${Y(g)}</defs>`,{class:"tdc-space"}),t.layers.overlay.appendChild(this.overlayGroup),this.astronaut=zt({logoUrl:t.assets.logoHorizontalUrl}),this.overlayGroup.appendChild(this.astronaut.root);let $=(x,M)=>{let u=P(B(x,`${g}-${M}`,{shadow:!1,tone:M}));return this.overlayGroup.appendChild(u),new Z(u)};this.pawn=$("pawn","ivory"),this.rook=$("rook","gold"),this.knight=$("knight","gold"),this.pan={x:.6,fade:1},this.zoom={z:1,fx:.7,fy:.46},t.spacePlace=()=>this.makePlace(0),Object.assign(this.astronaut.state,{x:.8,y:.56,scale:1.25})}build(t){let[e,o]=m.coachFly,[s]=m.comedy,[a]=m.dive,i=this.astronaut.state,r=s+.07;t.fromTo(this.pan,{x:.62},{x:0,duration:o-e+.1,ease:"power2.out"},e+.05),t.to(this.pan,{x:-.06,duration:.8,ease:"sine.inOut"},s+.1),t.to(this.pan,{fade:0,duration:.35,ease:"power1.in"},a+.05),t.to(i,{lookX:-1,lookY:-.5,lid:0,browY:-1.5,duration:.12},r+.05),t.to(i,{head:-6,duration:.2,ease:"power2.out"},r+.05),t.to(i,{mSoft:0,mGrin:1,duration:.1},r+.42),t.to(i,{head:6,duration:.12,yoyo:!0,repeat:1,ease:"sine.inOut"},r+.46),t.to(i,{lookX:0,lookY:.8,lid:.25,browY:0,head:0,duration:.18},r+.72);let l=this.knight.state;t.set(l,{x:.585,y:.4,rot:-10,scale:.5,opacity:1},0),t.to(l,{x:.93,y:.12,rot:560,scale:.42,duration:1.3,ease:"power2.out"},r),t.set(this.pawn.state,{x:.9,y:.27,rot:14,scale:.4},0),t.set(this.rook.state,{x:.94,y:.78,rot:-22,scale:.36},0),t.fromTo(this.zoom,{z:1},{z:1.4,duration:.3,ease:"power2.out"},r+.02),t.to(this.zoom,{z:1,duration:.35,ease:"power2.inOut"},a-.05),this.bumpTime=r}update(t,e){this.starUniforms.uTime.value=e,this.dustUniforms.uTime.value=e;let o=this.ctx.three.renderer.getPixelRatio();if(this.starUniforms.uPixel.value=o,this.dustUniforms.uPixel.value=o,this.dustUniforms.uAlpha.value=t<4.4?.8:.35,t>4.5&&t<10)return;let s=this.pan.x*(this.ctx.responsive.portrait?1.4:1),a=this.place=this.makePlace(s),i=Math.sin(e*1.6)*.008;this.overlayGroup.setAttribute("opacity",this.pan.fade.toFixed(3));let r=this.astronaut.state,l=r.y;r.y=l+i,r.rot=Math.sin(e*.9)*3,this.astronaut.apply(a,e),r.y=l;let p=(c,h,f)=>{let d=c.state,y=d.y,k=d.rot;(t<this.bumpTime||c!==this.knight)&&(d.y=y+Math.sin(e*f)*h,d.rot=k+Math.sin(e*f*.7)*6),c.apply(a),d.y=y,d.rot=k};p(this.pawn,.01,1.3),p(this.rook,.012,1.1),p(this.knight,.008,1.7)}makePlace(t=0){let{W:e,H:o,unit:s,profile:a}=this.ctx.responsive,{z:i,fx:r,fy:l}=this.zoom,p=a.charScale;return(c,h,f)=>({x:((c+t-r)*i+r)*e,y:((h-l)*i+l)*o,s:f*s*p*i})}dispose(){this.overlayGroup.remove()}};var J=class{constructor(t,{parseEase:e,logKeys:o=[],zoomPath:s=!1}={}){this.keys=t,this.logKeys=new Set(o),this.zoomPath=s,this.eases=t.map(a=>e(a.ease||"power2.inOut")),this.out={...t[0]}}at(t){let e=this.keys,o=this.out;if(t<=e[0].t)return Object.assign(o,e[0]);if(t>=e[e.length-1].t)return Object.assign(o,e[e.length-1]);let s=0;for(;s<e.length-2&&t>e[s+1].t;)s++;let a=e[s],i=e[s+1],r=this.eases[s+1]((t-a.t)/(i.t-a.t||1));for(let l in a){if(l==="t"||l==="ease"||typeof a[l]!="number")continue;let p=i[l]??a[l];o[l]=this.logKeys.has(l)?Math.exp(Math.log(a[l])+(Math.log(p)-Math.log(a[l]))*r):a[l]+(p-a[l])*r}if(this.zoomPath&&a.z!==i.z){let l=i.z>a.z,p=l?i.x:a.x,c=l?i.y:a.y,h=o.z,f=(p-a.x)*a.z,d=(c-a.y)*a.z,y=(p-i.x)*i.z,k=(c-i.y)*i.z;o.x=p-(f+(y-f)*r)/h,o.y=c-(d+(k-d)*r)/h}return o}};var It=`
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  vUv = uv;
  vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,pe=`
uniform sampler2D uMap; uniform vec3 uSun; uniform float uDim; uniform float uDots;
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  vec4 tex = texture2D(uMap, vUv);
  float land = smoothstep(0.3, 0.7, tex.r);
  vec3 N = normalize(vN); vec3 V = normalize(-vPos);
  float ndl = dot(N, uSun);
  float day = smoothstep(-0.18, 0.4, ndl);
  vec3 ocean = mix(vec3(0.028, 0.075, 0.18), vec3(0.07, 0.19, 0.42), clamp(ndl, 0.0, 1.0));
  vec3 landC = mix(vec3(0.10, 0.2, 0.42), vec3(0.2, 0.36, 0.68), clamp(ndl, 0.0, 1.0));
  vec3 col = mix(ocean, landC, land);
  col += tex.g * uDots * vec3(0.97, 0.94, 0.86) * (0.1 + 0.26 * day);
  col *= 0.32 + 0.85 * day;
  float term = exp(-pow((ndl - 0.12) / 0.09, 2.0));
  col += vec3(1.0, 0.82, 0.5) * term * 0.09;
  col += vec3(1.0, 0.8, 0.42) * tex.b * (1.0 - day) * 1.4;
  vec3 H = normalize(uSun + V);
  col += vec3(1.0, 0.9, 0.72) * pow(max(dot(N, H), 0.0), 70.0) * (1.0 - land) * 0.55 * day;
  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  col += vec3(0.28, 0.5, 1.0) * fres * (0.25 + 0.75 * day);
  gl_FragColor = vec4(col * uDim, 1.0);
}`,fe=`
uniform sampler2D uMap; uniform vec3 uSun; uniform float uAlpha;
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  float c = texture2D(uMap, vUv).r;
  vec3 N = normalize(vN);
  float ndl = dot(N, uSun);
  float day = smoothstep(-0.2, 0.45, ndl);
  vec3 col = mix(vec3(0.22, 0.3, 0.5), vec3(1.0, 0.97, 0.92), day);
  col += vec3(1.0, 0.7, 0.4) * exp(-pow(ndl / 0.16, 2.0)) * 0.25;
  float a = c * uAlpha * (0.35 + 0.65 * day);
  gl_FragColor = vec4(col, a);
}`,ue=`
attribute float aDelay; attribute float aHome; attribute float aPhase;
uniform float uReveal; uniform float uTime; uniform float uPixel; uniform float uBoost;
varying float vA; varying float vHome; varying float vRing;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float on = smoothstep(aDelay, aDelay + 0.08, uReveal);
  vRing = fract(uTime * 0.7 + aPhase);
  vHome = aHome;
  vA = on;
  gl_PointSize = min((18.0 + 14.0 * aHome + 8.0 * uBoost) * (5.0 / -mv.z), 34.0) * on * uPixel;
}`,me=`
varying float vA; varying float vHome; varying float vRing;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float core = smoothstep(0.32, 0.0, d);
  float halo = smoothstep(1.0, 0.0, d) * 0.35;
  float ring = smoothstep(0.08, 0.0, abs(d - vRing)) * (1.0 - vRing) * 0.8;
  vec3 col = mix(vec3(0.95, 0.8, 0.45), vec3(1.0, 0.97, 0.85), core);
  float a = (core + halo + ring) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(col, a);
}`;function vt(n,t,e,o=1){let s=(e+180)/360*Math.PI*2,a=(90-t)/180*Math.PI;return new n.Vector3(-o*Math.cos(s)*Math.sin(a),o*Math.cos(a),o*Math.sin(s)*Math.sin(a))}function ye(n,t,e){let o=n*374761393+t*668265263+e*2147483647;return o=(o^o>>>13)*1274126177,((o^o>>>16)>>>0)/4294967295}function ge(n,t,e){let o=Math.floor(n),s=Math.floor(t),a=Math.floor(e),i=n-o,r=t-s,l=e-a,p=i*i*(3-2*i),c=r*r*(3-2*r),h=l*l*(3-2*l),f=(y,k,g)=>y+(k-y)*g,d=(y,k,g)=>ye(o+y,s+k,a+g);return f(f(f(d(0,0,0),d(1,0,0),p),f(d(0,1,0),d(1,1,0),p),c),f(f(d(0,0,1),d(1,0,1),p),f(d(0,1,1),d(1,1,1),p),c),h)}var $t=class{constructor(t){this.ctx=t;let{THREE:e}=t,o=t.responsive.profile;this.sun=new e.Vector3(.82,.32,.48).normalize(),this.group=new e.Group,this.spin=new e.Group,this.group.add(this.spin),t.three.scene.add(this.group),this.halo=new e.Sprite(new e.SpriteMaterial({map:this.haloTexture(),transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,opacity:.85})),this.halo.scale.set(3.3,3.3,1),this.halo.renderOrder=-1,this.group.add(this.halo);let s=new e.CanvasTexture(this.earthCanvas(t.assets.images.landMask,o.earthTex));s.anisotropy=4,s.wrapS=e.RepeatWrapping,this.earthUniforms={uMap:{value:s},uSun:{value:this.sun.clone()},uDim:{value:1},uDots:{value:1}},this.earth=new e.Mesh(new e.SphereGeometry(1,o.name==="mobile"?64:96,o.name==="mobile"?48:72),new e.ShaderMaterial({vertexShader:It,fragmentShader:pe,uniforms:this.earthUniforms})),this.spin.add(this.earth);let a=new e.CanvasTexture(this.cloudCanvas(o.cloudTex));a.wrapS=e.RepeatWrapping,this.cloudUniforms={uMap:{value:a},uSun:{value:this.sun.clone()},uAlpha:{value:.55}},this.clouds=new e.Mesh(new e.SphereGeometry(1.014,64,48),new e.ShaderMaterial({vertexShader:It,fragmentShader:fe,uniforms:this.cloudUniforms,transparent:!0,depthWrite:!1})),this.spin.add(this.clouds);let i=N.length,r=new Float32Array(i*3),l=new Float32Array(i),p=new Float32Array(i),c=new Float32Array(i);N.forEach((f,d)=>{vt(e,f.lat,f.lon,1.012).toArray(r,d*3),l[d]=f.home?.02:.05+d*37%23/23*.8,p[d]=f.home?1:0,c[d]=d*.137%1});let h=new e.BufferGeometry;h.setAttribute("position",new e.BufferAttribute(r,3)),h.setAttribute("aDelay",new e.BufferAttribute(l,1)),h.setAttribute("aHome",new e.BufferAttribute(p,1)),h.setAttribute("aPhase",new e.BufferAttribute(c,1)),this.nodeUniforms={uReveal:{value:0},uTime:{value:0},uPixel:{value:1},uBoost:{value:0}},this.nodes=new e.Points(h,new e.ShaderMaterial({vertexShader:ue,fragmentShader:me,uniforms:this.nodeUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.spin.add(this.nodes),this.buildCameraTrack(),this.buildCloudLayer()}haloTexture(){let e=document.createElement("canvas");e.width=e.height=256;let o=e.getContext("2d"),s=o.createRadialGradient(256/2,256/2,256*.29,256/2,256/2,256/2);return s.addColorStop(0,"rgba(120,170,255,0.55)"),s.addColorStop(.18,"rgba(70,120,230,0.28)"),s.addColorStop(.5,"rgba(40,80,190,0.08)"),s.addColorStop(1,"rgba(20,40,120,0)"),o.fillStyle=s,o.fillRect(0,0,256,256),new this.ctx.THREE.CanvasTexture(e)}earthCanvas(t,e){let o=e/2,s=document.createElement("canvas");s.width=e,s.height=o;let a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0,e,o);let r=a.getImageData(0,0,e,o).data,l=a.createImageData(e,o),p=l.data,c=(g,$)=>r[(($|0)*e+((g|0)%e+e)%e)*4]/255,h=e/256,f=h*.3,d=3,y=()=>((d=d*16807%2147483647)-1)/2147483646;for(let g=0;g<o;g++){let $=(.5-(g+.5)/o)*Math.PI,x=Math.max(Math.cos($),.12),M=h/x,u=Math.floor(g/h),b=(u+.5)*h,C=g-b,E=u%2*M*.5;for(let Q=0;Q<e;Q++){let A=(g*e+Q)*4,S=r[A]/255,lt=(Math.floor((Q-E)/M)+.5)*M+E,G=(Q-lt)*x,I=Math.sqrt(G*G+C*C),Tt=0;I<f+1&&c(lt,b)>.5&&(Tt=Math.max(0,Math.min(1,f+.6-I))),p[A]=S*255,p[A+1]=Tt*255,p[A+2]=0,p[A+3]=255}}let k=(g,$,x,M)=>{for(let u=Math.max(0,$-x);u<Math.min(o,$+x);u++)for(let b=g-x;b<g+x;b++){let C=(b%e+e)%e,E=Math.hypot(b-g,u-$)/x;if(E>1)continue;let Q=(u*e+C)*4;p[Q+2]=Math.min(255,p[Q+2]+M*(1-E)*(1-E)*(r[Q]>100?1:.15))}};for(let g=0;g<e*1.2;g++){let $=y()*e,x=o*(.18+y()*.6);c($,x)>.5&&k($|0,x|0,Math.max(1,e/1024),110+y()*120)}return N.forEach(g=>{k(Math.round((g.lon+180)/360*e),Math.round((90-g.lat)/180*o),Math.round(e/220),220)}),a.putImageData(l,0,0),s}cloudCanvas(t){let e=t/2,o=document.createElement("canvas");o.width=t,o.height=e;let s=o.getContext("2d"),a=s.createImageData(t,e),i=a.data;for(let r=0;r<e;r++){let l=r/e,p=(.5-l)*Math.PI,c=.55+.45*Math.abs(Math.sin(p*3));for(let h=0;h<t;h++){let f=h/t*Math.PI*2,d=Math.cos(f)*2.2,y=Math.sin(f)*2.2,k=l*4.4,g=0,$=.55,x=1;for(let b=0;b<4;b++)g+=ge(d*x+11,k*x,y*x)*$,$*=.5,x*=2.1;let M=Math.max(0,Math.min(1,(g-.5)*2.6))*c,u=(r*t+h)*4;i[u]=i[u+1]=i[u+2]=M*255,i[u+3]=255}}return s.putImageData(a,0,0),o}buildCameraTrack(){let t=this.ctx.gsap.parseEase,[e]=m.space,[o]=m.network,[s,a]=m.coachFly,[,i]=m.comedy,[r]=m.dive,[l,p]=m.reveal,[c,h]=m.brand;this.track=new J([{t:e,dist:20,camX:0,camY:.1,lat:14,lon:-28,earthY:0},{t:o,dist:7.4,camX:0,camY:0,lat:16,lon:-2,earthY:0,ease:"power2.out"},{t:s,dist:6.8,camX:.1,camY:0,lat:17,lon:8,earthY:0,ease:"sine.inOut"},{t:a,dist:6.4,camX:1.9,camY:-.1,lat:17,lon:20,earthY:0,ease:"power1.inOut"},{t:i,dist:6.1,camX:2.25,camY:-.15,lat:16,lon:30,earthY:0,ease:"sine.inOut"},{t:r+.55,dist:1.7,camX:0,camY:0,lat:_.lat,lon:_.lon,earthY:0,ease:"power3.in"},{t:r+.9,dist:1.1,camX:0,camY:0,lat:_.lat,lon:_.lon,earthY:0,ease:"power1.in"},{t:l+.3,dist:1.1,camX:0,camY:0,lat:_.lat,lon:_.lon,earthY:0},{t:l+.9,dist:2.6,camX:0,camY:0,lat:_.lat,lon:_.lon-4,earthY:0,ease:"power2.out"},{t:p-.1,dist:5,camX:0,camY:0,lat:28,lon:44,earthY:0,ease:"power2.inOut"},{t:h-.2,dist:4.9,camX:0,camY:0,lat:-8,lon:42,earthY:-1.78,ease:"power2.inOut"},{t:14,dist:4.8,camX:0,camY:0,lat:-9,lon:46,earthY:-1.8,ease:"sine.out"}],{parseEase:t,logKeys:["dist"]}),this.b0=c}buildCloudLayer(){let t=this.ctx.layers.clouds,e=this.ctx.responsive.profile.name==="mobile"?10:18,o=5,s=()=>((o=o*16807%2147483647)-1)/2147483646;this.puffs=[];for(let a=0;a<e;a++){let i=document.createElement("div");i.className="tdc-cloud";let r=s()*Math.PI*2,l=.08+s()*.55;this.puffs.push({el:i,x:Math.cos(r)*l,y:Math.sin(r)*l*.7,depth:.12+a/e*1,w:.5+s()*.6,tint:s()}),i.style.setProperty("--tint",s()<.5?"0":"1"),t.appendChild(i)}this.haze=document.createElement("div"),this.haze.className="tdc-haze",t.appendChild(this.haze),this.cloud={c:0}}build(t){let[e,o]=m.dive,[s]=m.reveal,[a,i]=m.network,[r]=m.brand;t.fromTo(this.nodeUniforms.uReveal,{value:0},{value:1,duration:i-.35,ease:"power1.inOut"},.35),t.to(this.nodeUniforms.uBoost,{value:1,duration:.3},a),t.fromTo(this.cloud,{c:0},{c:1.25,duration:.62,ease:"none"},e+.42),t.to(this.cloud,{c:0,duration:.5,ease:"none"},s+.18),t.to(this.earthUniforms.uDim,{value:.55,duration:.8,ease:"power2.inOut"},r),t.to(this.halo.material,{opacity:.45,duration:.8},r),this.diveEnd=o}update(t,e){let{camera:o}=this.ctx.three,{aspect:s,portrait:a}=this.ctx.responsive,i=this.track.at(t),r=s>=1.3?1:1+(1.3-s)*.8,l=Math.min(1,s/1.78),p=i.earthY*(a?1.22:1);o.position.set(i.camX*l,i.camY,i.dist*(i.dist>2.2?r:1)),o.lookAt(i.camX*l,i.camY,0),this.group.position.y=p,this.earthUniforms.uDots.value=Math.min(1,Math.max(0,(i.dist-1.4)/1.4));let c=i.lat*Math.PI/180,f=(i.lon+180)/360*Math.PI*2,d=Math.atan2(-Math.cos(f),Math.sin(f));this.spin.rotation.set(c,-d,0,"XYZ"),this.clouds.rotation.y=t*.012,this.nodeUniforms.uTime.value=e,this.nodeUniforms.uPixel.value=this.ctx.three.renderer.getPixelRatio()*(this.ctx.three.H/900),this.earthUniforms.uSun.value.copy(this.sun),this.cloudUniforms.uSun.value.copy(this.sun),this.updateClouds()}updateClouds(){let t=this.cloud.c,e=this.ctx.layers.clouds,o=t>.001&&t<1.249;if(e.style.visibility=o?"visible":"hidden",!o)return;let{W:s,H:a}=this.ctx.responsive,i=Math.max(s,a);for(let l of this.puffs){let p=l.depth-t+.25;if(p<=.03){l.el.style.opacity="0";continue}let c=.22/p,h=s/2+l.x*c*i,f=a/2+l.y*c*i,d=l.w*c*i,y=Math.min(1,(p-.03)/.12),k=Math.min(1,Math.max(0,(1.1-p)/.4));l.el.style.opacity=(y*k).toFixed(3),l.el.style.transform=`translate3d(${(h-d/2).toFixed(1)}px, ${(f-d*.3).toFixed(1)}px, 0) scale(${(d/100).toFixed(3)}, ${(d*.6/100).toFixed(3)})`}let r=Math.max(0,1-Math.abs(t-.62)/.3);this.haze.style.opacity=(r*.9).toFixed(3)}dispose(){this.puffs.forEach(t=>t.el.remove()),this.haze.remove()}};var xe=`
varying float vT;
void main(){
  vT = uv.x;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,we=`
uniform float uProgress; uniform float uAlpha; uniform float uTime; uniform vec3 uColor;
varying float vT;
void main(){
  if (vT > uProgress) discard;
  float head = smoothstep(uProgress - 0.12, uProgress, vT) * step(uProgress, 0.999);
  float pulse = pow(0.5 + 0.5 * sin((vT * 3.0 - uTime * 1.4) * 6.2831), 8.0) * 0.6;
  vec3 col = mix(uColor, vec3(1.0, 0.98, 0.9), head + pulse * 0.5);
  float a = uAlpha * (0.5 + 0.5 * head + pulse);
  gl_FragColor = vec4(col, a);
}`,$e=`
attribute vec3 aStart; attribute float aDelay; attribute float aSeed;
uniform mat4 uEarth; uniform vec3 uTarget; uniform float uP; uniform float uPixel; uniform float uTime;
varying float vA;
void main(){
  vec3 s = (uEarth * vec4(aStart, 1.0)).xyz;
  float q = clamp((uP - aDelay * 0.45) / 0.55, 0.0, 1.0);
  float e = q * q * q;
  vec3 side = normalize(cross(uTarget - s + vec3(0.0001), vec3(0.0, 0.0, 1.0)));
  vec3 p = mix(s, uTarget, e) + side * sin(q * 3.14159) * (0.25 + aSeed * 0.35);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.0, 0.08, q) * (1.0 - smoothstep(0.9, 1.0, q)) * step(0.0001, uP);
  gl_PointSize = (2.0 + aSeed * 3.0) * uPixel * (1.0 + (1.0 - q));
}`,ve=`
varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(1.0, 0.88, 0.58, a);
}`,kt=class{constructor(t,e){this.ctx=t,this.earth=e;let{THREE:o}=t,s=N.map(u=>vt(o,u.lat,u.lon,1.01)),a=N.findIndex(u=>u.home),i=new o.ShaderMaterial({vertexShader:xe,fragmentShader:we,uniforms:{uProgress:{value:0},uAlpha:{value:.9},uTime:{value:0},uColor:{value:new o.Color(.95,.8,.45)}},transparent:!0,depthWrite:!1,blending:o.AdditiveBlending}),r=(u,b,C)=>{let E=u.clone().add(b).multiplyScalar(.5),Q=u.angleTo(b);E.normalize().multiplyScalar(1.01+Q*.28);let A=new o.QuadraticBezierCurve3(u,E,b),S=new o.Mesh(new o.TubeGeometry(A,48,C,5,!1),i.clone());return S.userData.curve=A,S.userData.len=Q,this.earth.spin.add(S),S};this.early=Gt.map(([u,b])=>r(s[u],s[b],.0038)),this.global=s.map((u,b)=>({p:u,i:b})).filter(({i:u})=>u!==a).map(({p:u})=>r(s[a],u,.0042)),i.dispose(),this.pieces=[],N.forEach((u,b)=>{if(!u.piece)return;let C=new o.CanvasTexture(_t(u.piece,256)),E=new o.Sprite(new o.SpriteMaterial({map:C,transparent:!0,depthWrite:!1}));E.center.set(.5,.05),E.position.copy(vt(o,u.lat,u.lon,1.03)),E.scale.set(1e-4,1e-4,1),E.userData.pop={s:0},this.earth.spin.add(E),this.pieces.push(E)});let l=t.responsive.profile.converge,p=[...this.global,...this.early],c=new Float32Array(l*3),h=new Float32Array(l),f=new Float32Array(l),d=9,y=()=>((d=d*16807%2147483647)-1)/2147483646,k=new o.Vector3;for(let u=0;u<l;u++)p[u%p.length].userData.curve.getPoint(y(),k),k.toArray(c,u*3),h[u]=y(),f[u]=y();let g=new o.BufferGeometry;g.setAttribute("position",new o.BufferAttribute(new Float32Array(l*3),3)),g.setAttribute("aStart",new o.BufferAttribute(c,3)),g.setAttribute("aDelay",new o.BufferAttribute(h,1)),g.setAttribute("aSeed",new o.BufferAttribute(f,1)),this.convUniforms={uEarth:{value:new o.Matrix4},uTarget:{value:new o.Vector3},uP:{value:0},uPixel:{value:1},uTime:{value:0}},this.converge=new o.Points(g,new o.ShaderMaterial({vertexShader:$e,fragmentShader:ve,uniforms:this.convUniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:o.AdditiveBlending})),this.converge.frustumCulled=!1,this.converge.renderOrder=10,t.three.scene.add(this.converge);let $=document.createElement("canvas");$.width=$.height=128;let x=$.getContext("2d"),M=x.createRadialGradient(64,64,0,64,64,64);M.addColorStop(0,"rgba(255,250,235,1)"),M.addColorStop(.2,"rgba(242,216,146,0.65)"),M.addColorStop(1,"rgba(242,216,146,0)"),x.fillStyle=M,x.fillRect(0,0,128,128),this.flash=new o.Sprite(new o.SpriteMaterial({map:new o.CanvasTexture($),transparent:!0,depthWrite:!1,depthTest:!1,blending:o.AdditiveBlending,opacity:0})),this.flash.renderOrder=11,this.flash.userData.s={size:.01},t.three.scene.add(this.flash),this.tmp=new o.Vector3}build(t){let[e,o]=m.network,[s,a]=m.reveal,[i,r]=m.brand;this.early.forEach((c,h)=>{t.fromTo(c.material.uniforms.uProgress,{value:0},{value:1,duration:.42,ease:"power2.out"},e-.05+h*.035)}),t.to(this.early.map(c=>c.material.uniforms.uAlpha),{value:.35,duration:.6},o+.4),[...this.global].sort((c,h)=>c.userData.len-h.userData.len).forEach((c,h)=>{t.fromTo(c.material.uniforms.uProgress,{value:0},{value:1,duration:.5+c.userData.len*.2,ease:"power2.out"},s+.5+h*.03)}),t.to(this.early.map(c=>c.material.uniforms.uAlpha),{value:.8,duration:.4},s+.8),this.pieces.forEach((c,h)=>{t.fromTo(c.userData.pop,{s:0},{s:1,duration:.42,ease:"back.out(2.2)"},s+.85+h*.12)}),t.fromTo(this.convUniforms.uP,{value:0},{value:1,duration:r-i+.05,ease:"power1.in"},i-.05);let p=[...this.global,...this.early].map(c=>c.material.uniforms.uAlpha);t.to(p,{value:.28,duration:.6,ease:"power2.inOut"},i+.1),t.to(this.flash.material,{opacity:1,duration:.45,ease:"power2.in"},i+.05),t.to(this.flash.userData.s,{size:1.1,duration:.5,ease:"power3.in"},i+.05),t.to(this.flash.material,{opacity:0,duration:.45,ease:"power2.out"},i+.52),t.to(this.flash.userData.s,{size:1.9,duration:.45,ease:"power2.out"},i+.52),t.to(this.pieces.map(c=>c.userData.pop),{s:.8,duration:.6},i+.2),this.r1=a}update(t,e){let{three:o}=this.ctx;for(let p of[...this.early,...this.global])p.material.uniforms.uTime.value=e;let s=this.ctx.responsive.portrait?.3:.24;this.pieces.forEach(p=>{let c=p.userData.pop.s;p.scale.set(s*c+1e-4,s*c+1e-4,1)});let a=o.camera,i=this.ctx.logoNdcY??.18;this.tmp.set(0,i,.5).unproject(a).sub(a.position).normalize();let r=this.convUniforms.uTarget.value.copy(a.position).addScaledVector(this.tmp,2.4);this.earth.spin.updateMatrixWorld(),this.convUniforms.uEarth.value.copy(this.earth.spin.matrixWorld),this.convUniforms.uPixel.value=o.renderer.getPixelRatio()*(o.H/900),this.flash.position.copy(r);let l=this.flash.userData.s.size;this.flash.scale.set(l,l,1)}};var v={x:770,y:452,w:76,h:47.5},et=v.w/1600;function Vt(n,t){return{x:v.x+n*et,y:v.y+t*et}}function ke(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ut(n,t,e,o,s,a,i,r,l,p,c="#F2D892"){let h="";for(let f=0;f<o;f++)for(let d=0;d<s;d++)if(n()<p){let y=(.45+n()*.5).toFixed(2);h+=`<rect x="${(t+f*r).toFixed(1)}" y="${(e+d*l).toFixed(1)}" width="${a}" height="${i}" fill="${c}" opacity="${y}"/>`}return h}function Nt(n,{y:t,minH:e,maxH:o,color:s,count:a,x0:i=-300,x1:r=1900,lit:l=.25}){let p="",c=i;for(let h=0;h<a&&c<r;h++){let f=40+n()*90,d=e+n()*(o-e);p+=`<rect x="${c.toFixed(1)}" y="${(t-d).toFixed(1)}" width="${f.toFixed(1)}" height="${(d+400).toFixed(1)}" fill="${s}"/>`,n()<.25&&(p+=`<rect x="${(c+f*.4).toFixed(1)}" y="${(t-d-18).toFixed(1)}" width="3" height="18" fill="${s}"/>`),p+=Ut(n,c+6,t-d+10,Math.floor((f-8)/12),Math.floor(d/16),5,7,12,16,l),c+=f+n()*14}return p}function tt(n,t,e,o,s,a,i){return`
    <path d="M${n-12} ${t} L${n+e/2} ${t-o*.38} L${n+e+12} ${t} Z" fill="${a}"/>
    <rect x="${n}" y="${t}" width="${e}" height="${o}" fill="${s}"/>
    ${Ut(i,n+14,t+18,Math.floor((e-20)/34),Math.floor((o-30)/50),20,26,34,50,.55)}`}function bt(n,t,e,o="#10345A"){return`<g transform="translate(${n} ${t}) scale(${e})">
    <rect x="-4" y="-10" width="8" height="40" fill="#0A1C38"/>
    <circle cx="0" cy="-40" r="34" fill="${o}"/><circle cx="-22" cy="-22" r="24" fill="${o}"/><circle cx="22" cy="-24" r="26" fill="${o}"/>
    <circle cx="-8" cy="-52" r="16" fill="#1B4C7A" opacity=".55"/></g>`}function be(n,t){let e=(()=>{let a="";for(let h=0;h<8;h++)for(let f=0;f<8;f++){let d=f/8,y=(f+1)/8,k=C=>(1-C)*18,g=150+k(d)+(200-2*k(d))*(h/8),$=150+k(d)+(200-2*k(d))*((h+1)/8),x=150+k(y)+(200-2*k(y))*((h+1)/8),M=150+k(y)+(200-2*k(y))*(h/8),u=598+36*d,b=598+36*y;a+=`<path d="M${g.toFixed(1)} ${u.toFixed(1)} L${$.toFixed(1)} ${u.toFixed(1)} L${x.toFixed(1)} ${b.toFixed(1)} L${M.toFixed(1)} ${b.toFixed(1)} Z" fill="${(h+f)%2?"#1D3F84":"#EDE7DA"}"/>`}return a})(),o=Array.from({length:17},(a,i)=>{let r=i/16,l=90+r*1420,p=110+Math.sin(r*Math.PI)*70+Math.sin(r*Math.PI*4)*6;return`<circle cx="${l.toFixed(1)}" cy="${(p+8).toFixed(1)}" r="16" fill="#F2D892" opacity=".16"/><circle cx="${l.toFixed(1)}" cy="${(p+8).toFixed(1)}" r="5.5" fill="#F7E2A6"/>`}).join(""),s=Array.from({length:34},(a,i)=>`<rect x="${404+i*20.3}" y="${i%2?699:707}" width="20.3" height="8" fill="${i%2?"#F7F5F0":"#0B1E3D"}"/>`).join("");return`
  <g data-part="bedroom" transform="translate(${v.x} ${v.y}) scale(${et})">
    <rect x="-40" y="-40" width="1680" height="1080" fill="url(#${n}-wall)"/>
    <path d="M300 170 L760 150 L840 620 L240 640 Z" fill="#F2D892" opacity=".07"/>
    <path d="M40 520 H1560" stroke="#0E2552" stroke-width="6" opacity=".6"/>
    <path d="M90 110 Q800 250 1510 110" stroke="#0A1A38" stroke-width="2.5" fill="none"/>
    ${o}
    <!-- poster -->
    <g transform="translate(640 160)">
      <rect width="220" height="170" rx="4" fill="#F7F5F0"/>
      <rect x="10" y="10" width="200" height="150" fill="#0B1E3D"/>
      ${Array.from({length:16},(a,i)=>`<rect x="${30+i%4*22}" y="${36+Math.floor(i/4)*22}" width="22" height="22" fill="${(i+Math.floor(i/4))%2?"#2C5BC4":"#EDE7DA"}" opacity=".85"/>`).join("")}
      <g transform="translate(160 128) scale(.72)">${B("knight",`${n}-gold`,{shadow:!1})}</g>
    </g>
    <!-- shelf with trophy and books -->
    <rect x="140" y="330" width="340" height="14" rx="3" fill="#0A1A38"/>
    <g transform="translate(212 330)">
      <path d="M-30 -86 H30 Q30 -46 8 -38 L6 -22 H16 V0 H-16 V-22 H-6 L-8 -38 Q-30 -46 -30 -86 Z" fill="url(#${n}-gold)" stroke="#7a5a22" stroke-width="2"/>
      <path d="M-30 -80 Q-48 -80 -44 -62 Q-40 -52 -26 -52 M30 -80 Q48 -80 44 -62 Q40 -52 26 -52" stroke="#C9A24B" stroke-width="5" fill="none"/>
      <path d="${O.knight}" transform="translate(-9 -110) scale(.18)" fill="#E6C475"/>
    </g>
    <rect x="290" y="252" width="22" height="78" fill="#F7F5F0"/><rect x="314" y="262" width="18" height="68" fill="#2C5BC4"/>
    <rect x="334" y="248" width="24" height="82" fill="#D8B15E"/><rect x="360" y="266" width="20" height="64" fill="#13306A" transform="rotate(12 370 330)"/>
    <g transform="translate(430 330)"><rect x="-26" y="-34" width="52" height="34" rx="6" fill="#13306A"/><circle cx="-11" cy="-17" r="9" fill="#F7F5F0"/><circle cx="11" cy="-17" r="9" fill="#F7F5F0"/><rect x="-14" y="-42" width="6" height="8" fill="#D8B15E"/><rect x="8" y="-42" width="6" height="8" fill="#D8B15E"/></g>
    <!-- desk with chessboard and notebook -->
    <rect x="80" y="636" width="330" height="22" rx="4" fill="#0E2148"/>
    <rect x="96" y="658" width="16" height="200" fill="#0A1936"/><rect x="378" y="658" width="16" height="200" fill="#0A1936"/>
    <path d="M150 634 L350 634 L350 640 L150 640 Z" fill="#0A1936"/>
    ${e}
    <g transform="translate(206 616) scale(.2)">${B("king",`${n}-ivory`)}</g>
    <g transform="translate(236 626) scale(.17)">${B("pawn",`${n}-ivory`)}</g>
    <g transform="translate(290 612) scale(.19)">${B("queen",`${n}-navy`,{tone:"navy"})}</g>
    <g transform="translate(318 626) scale(.18)">${B("knight",`${n}-navy`,{tone:"navy"})}</g>
    <g transform="translate(262 606) scale(.17)">${B("rook",`${n}-navy`,{tone:"navy"})}</g>
    <g transform="translate(96 606) rotate(-6)"><rect width="46" height="30" rx="2" fill="#F7F5F0"/><rect width="7" height="30" fill="#2C5BC4"/><path d="M14 10 H40 M14 17 H36 M14 24 H38" stroke="#9AA6BB" stroke-width="2"/></g>
    <!-- rug + floor -->
    <rect x="-40" y="840" width="1680" height="200" fill="#0A1834"/>
    <path d="M-40 900 H1640 M-40 960 H1640" stroke="#0F2146" stroke-width="3"/>
    <ellipse cx="760" cy="905" rx="430" ry="58" fill="#1F4390"/><ellipse cx="760" cy="905" rx="400" ry="46" fill="none" stroke="#F7F5F0" stroke-width="4" stroke-dasharray="14 10" opacity=".7"/>
    <!-- bed -->
    <path d="M1086 760 V470 Q1086 430 1116 430 Q1146 430 1146 470 V760 Z" fill="#0E2148"/>
    <path d="M1096 480 Q1096 446 1116 446 Q1136 446 1136 480" stroke="#D8B15E" stroke-width="3" fill="none"/>
    <path d="M360 760 V580 Q360 560 380 560 Q400 560 400 580 V760 Z" fill="#0E2148"/>
    <rect x="392" y="648" width="702" height="92" fill="#112655"/>
    <rect x="400" y="598" width="690" height="56" rx="14" fill="#EDE7DA"/>
    <ellipse cx="1004" cy="585" rx="80" ry="31" fill="#F7F5F0"/><path d="M936 598 Q1004 614 1072 596" stroke="#C9CBD4" stroke-width="3" fill="none"/>
    <g data-part="girlSlot"></g>
    <path data-part="blanket" d="" fill="url(#${n}-blanket)"/>
    ${s}
    <!-- nightstand with tablet, headphones and books -->
    <rect x="1150" y="624" width="170" height="216" rx="8" fill="#0E2148"/>
    <rect x="1142" y="612" width="186" height="18" rx="5" fill="#15306A"/>
    <path d="M1162 700 H1308 M1162 770 H1308" stroke="#0A1834" stroke-width="3"/>
    <circle cx="1235" cy="736" r="5" fill="#D8B15E"/><circle cx="1235" cy="806" r="5" fill="#D8B15E"/>
    <rect x="1256" y="590" width="62" height="11" rx="2" fill="#2C5BC4"/><rect x="1260" y="601" width="56" height="11" rx="2" fill="#F7F5F0"/>
    ${t?'<path d="M1270 588 Q1290 556 1310 588" stroke="#13306A" stroke-width="6" fill="none"/><ellipse cx="1270" cy="588" rx="8" ry="5" fill="#2C5BC4"/><ellipse cx="1310" cy="588" rx="8" ry="5" fill="#2C5BC4"/>':""}
    <g data-part="tabletNS" transform="translate(1196 612)">
      <ellipse data-part="nsGlow" cx="-4" cy="-44" rx="70" ry="60" fill="url(#${n}-notif)" opacity=".6"/>
      <path d="M-34 -2 L-40 -82 L22 -92 L28 -6 Z" fill="#0B1E3D"/>
      <path d="M-30 -7 L-35.5 -78 L18 -87 L23.5 -10 Z" fill="#132B57"/>
      <g data-part="nsIcon" transform="translate(-6 -46) skewY(-8)">
        <circle r="16" fill="#0B1E3D" stroke="#D8B15E" stroke-width="2.5"/>
        <path d="${O.knight}" transform="scale(.2) translate(-50 -66)" fill="#F2D892"/>
      </g>
      <path d="M-20 0 L20 -4 L8 -18 Z" fill="#0A1834"/>
    </g>
    <path data-part="roomGlow" d="M500 1000 C500 600 700 300 960 300 C1220 300 1420 600 1420 1000 Z" fill="url(#${n}-roomGlow)" opacity="0"/>
  </g>`}function jt({detail:n=!0}={}){let t=D("world"),e=ke(7),o=`
  <defs>
    ${Y(t)}
    <linearGradient id="${t}-sky" gradientUnits="userSpaceOnUse" x1="0" y1="-500" x2="0" y2="760">
      <stop offset="0" stop-color="#040B1D"/><stop offset=".38" stop-color="#0B1E3D"/><stop offset=".68" stop-color="#1A3A78"/>
      <stop offset=".86" stop-color="#6E7DB2"/><stop offset=".96" stop-color="#E9B777"/><stop offset="1" stop-color="#F4CE8C"/>
    </linearGradient>
    <radialGradient id="${t}-sun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1180 740) scale(520 260)">
      <stop offset="0" stop-color="#FFE7B0" stop-opacity=".95"/><stop offset=".35" stop-color="#F2C67E" stop-opacity=".45"/><stop offset="1" stop-color="#F2C67E" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${t}-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1D3B74"/><stop offset=".85" stop-color="#132C5B"/><stop offset="1" stop-color="#0E2249"/>
    </linearGradient>
    <linearGradient id="${t}-blanket" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3D6BD0"/><stop offset=".6" stop-color="#2C5BC4"/><stop offset="1" stop-color="#1D3F8A"/>
    </linearGradient>
    <linearGradient id="${t}-facade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#EDE7DA"/><stop offset=".7" stop-color="#C9CAD4"/><stop offset="1" stop-color="#9FA8BE"/>
    </linearGradient>
    <linearGradient id="${t}-glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity=".35"/><stop offset=".4" stop-color="#BFD4FF" stop-opacity=".08"/><stop offset=".55" stop-color="#FFFFFF" stop-opacity=".22"/><stop offset="1" stop-color="#BFD4FF" stop-opacity=".05"/>
    </linearGradient>
    <radialGradient id="${t}-notif" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F2D892" stop-opacity=".85"/><stop offset="1" stop-color="#F2D892" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${t}-roomGlow" cx=".5" cy=".62" r=".6">
      <stop offset="0" stop-color="#DDEBFF" stop-opacity=".22"/><stop offset="1" stop-color="#DDEBFF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${t}-lamp" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F7E2A6" stop-opacity=".7"/><stop offset="1" stop-color="#F7E2A6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g data-part="far">
    <rect x="-2000" y="-1200" width="5600" height="2400" fill="url(#${t}-sky)"/>
    <g fill="#fff">${Array.from({length:60},()=>`<circle cx="${(e()*2400-400).toFixed(0)}" cy="${(e()*700-500).toFixed(0)}" r="${(.6+e()*1.4).toFixed(1)}" opacity="${(.3+e()*.6).toFixed(2)}"/>`).join("")}</g>
    <rect x="-2000" y="300" width="5600" height="800" fill="url(#${t}-sun)"/>
    <g opacity=".9">${Nt(e,{y:720,minH:60,maxH:210,color:"#34508C",count:40,lit:.12})}</g>
  </g>
  <g data-part="mid">
    ${Nt(e,{y:740,minH:90,maxH:300,color:"#1C3466",count:36,lit:.22})}
  </g>
  <g data-part="near">
    <rect x="-2000" y="752" width="5600" height="600" fill="#0A1934"/>
    ${tt(330,520,170,240,"#1A2F5E","#0F2146",e)}
    ${tt(520,560,150,200,"#22396E","#132B57",e)}
    ${tt(960,540,160,220,"#1C3366","#0F2146",e)}
    ${tt(1140,500,190,260,"#172C5A","#0C1D40",e)}
    ${n?tt(110,560,180,200,"#20386B","#11264F",e)+tt(1360,550,170,210,"#1E3569","#10244C",e):""}
    ${be(t,n)}
    <!-- the girl's house: facade with a real hole where the window is -->
    <path d="M700 420 H916 V760 H700 Z M${v.x} ${v.y} V${v.y+v.h} H${v.x+v.w} V${v.y} Z" fill="url(#${t}-facade)" fill-rule="evenodd"/>
    <g opacity=".18" stroke="#8C98B4" stroke-width="1">${Array.from({length:16},(a,i)=>`<path d="M700 ${440+i*20} H916"/>`).join("")}</g>
    <!-- warm glow around (never over) the window, so the interior stays clean -->
    <path d="M${v.x-v.w*.9} ${v.y-v.h} h${v.w*2.8} v${v.h*3} h${-v.w*2.8} Z M${v.x} ${v.y} v${v.h} h${v.w} v${-v.h} Z" fill-rule="evenodd" fill="url(#${t}-lamp)" opacity=".55"/>
    <rect x="${v.x-2}" y="${v.y+v.h+7}" width="${v.w+4}" height="7" rx="2" fill="#13306A"/>
    <g fill="#D8B15E">${Array.from({length:7},(a,i)=>`<circle cx="${v.x+6+i*10.5}" cy="${v.y+v.h+6}" r="2.6"/>`).join("")}</g>
    <path d="M684 426 L808 326 L932 426 Z" fill="#13306A"/>
    <path d="M684 426 L808 326 L932 426" stroke="#D8B15E" stroke-width="2.5" fill="none"/>
    <rect x="860" y="346" width="22" height="52" fill="#13306A"/>
    <rect data-part="glass" x="${v.x}" y="${v.y}" width="${v.w}" height="${v.h}" fill="url(#${t}-glass)"/>
    <rect x="${v.x-3}" y="${v.y-3}" width="${v.w+6}" height="${v.h+6}" fill="none" stroke="#F7F5F0" stroke-width="4"/>
    <rect x="${v.x-7}" y="${v.y+v.h+2}" width="${v.w+14}" height="5" rx="1.5" fill="#F7F5F0"/>
    <rect x="720" y="600" width="46" height="52" fill="#F2D892" opacity=".85"/><rect x="850" y="600" width="46" height="52" fill="#F2D892" opacity=".7"/>
    <path d="M743 600 V652 M720 626 H766 M873 600 V652 M850 626 H896" stroke="#EDE7DA" stroke-width="3"/>
    <rect x="792" y="690" width="34" height="70" rx="3" fill="#13306A"/><circle cx="819" cy="727" r="2.5" fill="#D8B15E"/>
    <rect x="770" y="757" width="80" height="6" fill="#9FA8BE"/>
    <g data-part="exteriorSlot"></g>
    ${bt(660,740,1.05)}${bt(960,748,.9,"#0E2E52")}${bt(250,752,1.2)}${bt(1330,752,1.1,"#0E2E52")}
    <g transform="translate(1040 752)"><rect x="-3" y="-120" width="6" height="120" fill="#0A1834"/><circle cx="0" cy="-124" r="36" fill="url(#${t}-lamp)"/><circle cx="0" cy="-124" r="7" fill="#F7E2A6"/></g>
  </g>`,s=P(o,{class:"tdc-world"});return{root:s,parts:H(s),id:t}}var Qt="M404 612 C500 552 760 536 950 566 C1010 576 1060 594 1090 606 L1090 712 C900 724 600 724 404 712 Z",qt="M404 640 C560 632 780 600 905 588 C985 582 1050 606 1090 624 L1090 712 C900 724 600 724 404 712 Z";var dt="#E0A67E",st="#C4865F",ot="#2B1911",Me="#3C62B8",it="#F7F5F0",Xt="#D8B15E",ht="#5A2020";function Kt(n){return`
    <path d="M-44 -136 Q-56 -118 -56 -96 L-54 -72 L-38 -72 L-36 -100 Q-34 -122 -28 -134 Z" fill="url(#PJ)"/>
    <g data-part="fore${n}">
      <path d="M-54 -77 L-38 -77 L-41 -26 L-53 -26 Z" fill="url(#PJ)"/>
      <path d="M-54.5 -31 L-39.5 -31 L-40 -22 L-54 -22 Z" fill="${it}"/>
      <g data-part="hand${n}">
        <g data-part="relax${n}">
          <path d="M-54 -23 Q-56 -8 -50 -4 Q-44 -2 -41 -8 Q-39 -16 -40 -23 Z" fill="${dt}"/>
          <path d="M-41 -18 Q-35 -16 -36 -11 Q-38 -9 -41 -12 Z" fill="${st}"/>
        </g>
        <g data-part="point${n}" opacity="0">
          <path d="M-54 -23 Q-55 -11 -49 -9 Q-42 -9 -40 -23 Z" fill="${dt}"/>
          <path d="M-50 -11 L-49.5 3 Q-47.5 6 -45.5 3 L-45.5 -11 Z" fill="${dt}"/>
        </g>
      </g>
    </g>`}var at=(n,t,e=1)=>`<path d="M${n} ${t-4*e} L${n+1.2*e} ${t-1.2*e} L${n+4*e} ${t} L${n+1.2*e} ${t+1.2*e} L${n} ${t+4*e} L${n-1.2*e} ${t+1.2*e} L${n-4*e} ${t} L${n-1.2*e} ${t-1.2*e} Z"/>`,Wt="M-19 4 a9 9 0 0 1 -2 -14 a10 10 0 0 1 12 -10 a10 10 0 0 1 16 2 a10 10 0 0 1 8 14 a10 10 0 0 1 -6 13 a10 10 0 0 1 -14 3 a10 10 0 0 1 -14 -8 Z";function Mt(){let n=D("girl"),t=`
  <defs>
    <linearGradient id="${n}-pj" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5379CC"/><stop offset=".6" stop-color="${Me}"/><stop offset="1" stop-color="#27468F"/>
    </linearGradient>
    <radialGradient id="${n}-skin" cx=".4" cy=".35" r=".78">
      <stop offset="0" stop-color="#EDB891"/><stop offset=".72" stop-color="${dt}"/><stop offset="1" stop-color="${st}"/>
    </radialGradient>
    <radialGradient id="${n}-iris" cx=".45" cy=".35" r=".7">
      <stop offset="0" stop-color="#8A5530"/><stop offset="1" stop-color="#3A2112"/>
    </radialGradient>
    <radialGradient id="${n}-screen" cx=".5" cy="1.05" r=".95">
      <stop offset="0" stop-color="#FFF6E0" stop-opacity=".7"/><stop offset=".5" stop-color="#DCE9FF" stop-opacity=".28"/><stop offset="1" stop-color="#9DBCF5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${n}-spill" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F4F9FF" stop-opacity=".95"/><stop offset="1" stop-color="#CFE2FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${n}-beam" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#E6F0FF" stop-opacity=".5"/><stop offset="1" stop-color="#E6F0FF" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${n}-eye"><ellipse cx="0" cy="0" rx="8.6" ry="10"/></clipPath>
    <clipPath id="${n}-face"><path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z"/></clipPath>
  </defs>
  <g data-part="body">
    <path d="M-38 0 Q-44 -64 -41 -116 Q-38 -136 -16 -142 L16 -142 Q38 -136 41 -116 Q44 -64 38 0 Z" fill="url(#${n}-pj)"/>
    <g fill="${it}" opacity=".8">${at(-22,-100)}${at(18,-72)}${at(-12,-40,.8)}${at(24,-26,.9)}${at(-28,-14,.7)}${at(8,-118,.7)}</g>
    <circle cx="0" cy="-104" r="2.6" fill="${it}"/><circle cx="0" cy="-80" r="2.6" fill="${it}"/><circle cx="0" cy="-56" r="2.6" fill="${it}"/>
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -133 -10 -138 Z" fill="${st}"/>
    <path d="M-17 -142 Q-24 -124 -5 -123 Q1 -130 0 -139 Z M17 -142 Q24 -124 5 -123 Q-1 -130 0 -139 Z" fill="${it}"/>
    <g data-part="held" opacity="0">
      <rect x="-60" y="-126" width="120" height="80" rx="9" fill="#13244A" stroke="#2C4A86" stroke-width="2.5"/>
      <circle cx="0" cy="-118" r="2.2" fill="#0A1430"/>
      <g transform="translate(0 -86)">
        <circle r="12" fill="none" stroke="#D8B15E" stroke-width="1.8" opacity=".85"/>
        <path d="${O.knight}" transform="scale(.15) translate(-50 -66)" fill="#D8B15E"/>
      </g>
    </g>
    <g data-part="armL">${Kt("L")}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${Kt("R")}</g></g>
    <g data-part="head">
      <path d="M-50 -152 Q-62 -170 -56 -196 Q-64 -226 -44 -246 Q-36 -268 -8 -266 Q18 -274 36 -256 Q60 -246 58 -218 Q66 -194 56 -172 Q60 -156 48 -148 Q40 -140 30 -150 L-30 -150 Q-40 -140 -50 -152 Z" fill="${ot}"/>
      <g transform="translate(-44 -262) rotate(-18)"><path d="${Wt}" fill="${ot}"/></g>
      <g transform="translate(44 -262) rotate(18) scale(-1 1)"><path d="${Wt}" fill="${ot}"/></g>
      <ellipse cx="-33" cy="-246" rx="7" ry="4.5" transform="rotate(-38 -33 -246)" fill="${Xt}"/>
      <ellipse cx="33" cy="-246" rx="7" ry="4.5" transform="rotate(38 33 -246)" fill="${Xt}"/>
      <ellipse cx="-41" cy="-200" rx="6" ry="9" fill="${st}"/><ellipse cx="41" cy="-200" rx="6" ry="9" fill="${st}"/>
      <path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z" fill="url(#${n}-skin)"/>
      <g data-part="features">
        ${[-16,16].map((a,i)=>`
        <g transform="translate(${a} -200)">
          <g clip-path="url(#${n}-eye)">
            <ellipse rx="8.6" ry="10" fill="#FFFDF8"/>
            <g data-part="iris${i}">
              <circle r="6.8" fill="url(#${n}-iris)"/><circle data-part="pupil${i}" r="3.4" fill="#120906"/>
              <circle cx="2.3" cy="-3" r="2.5" fill="#fff"/><circle cx="-2.6" cy="2.6" r="1.1" fill="#fff"/>
              <rect data-part="reflect${i}" x="-4.6" y="1" width="3.6" height="2.4" rx=".6" fill="#E4F1FF" opacity="0"/>
            </g>
            <rect data-part="lid${i}" x="-10" y="-10" width="20" height="20" fill="${dt}"/>
          </g>
          <path data-part="lash${i}" d="M-9.4 0 Q0 -20 9.4 0 ${i?"M8.6 -2.4 L11.6 -5":"M-8.6 -2.4 L-11.6 -5"}" stroke="#1C120D" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path data-part="sparkle${i}" transform="scale(0)" d="M0 -5 L1.1 -1.1 L5 0 L1.1 1.1 L0 5 L-1.1 1.1 L-5 0 L-1.1 -1.1 Z" fill="#FFF6D6"/>
        </g>`).join("")}
        <path data-part="browL" d="M-24 -217 Q-17 -222.5 -9 -219" stroke="${ot}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M9 -219 Q17 -222.5 24 -217" stroke="${ot}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path d="M-1 -192 Q-3.6 -184 0.6 -183" stroke="${st}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="-26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/><circle cx="26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/>
        <path data-part="mSleepy" d="M-5 -172 Q0 -170.5 5 -172" stroke="${ht}" stroke-width="1.9" fill="none" stroke-linecap="round"/>
        <g data-part="mYawn" opacity="0"><ellipse cx="0" cy="-171" rx="5.2" ry="7.2" fill="${ht}"/><ellipse cx="0" cy="-167" rx="3.2" ry="2" fill="#D0676A"/></g>
        <ellipse data-part="mO" cx="0" cy="-172" rx="3.2" ry="3.8" fill="${ht}" opacity="0"/>
        <path data-part="mSoft" d="M-8 -175 Q0 -167.5 8 -175" stroke="${ht}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0"/>
        <g data-part="mSmile" opacity="0">
          <path d="M-13 -176 Q0 -157 13 -176 Q0 -172 -13 -176 Z" fill="${ht}"/>
          <path d="M-11.5 -175.4 Q0 -172.2 11.5 -175.4 Q10 -172.8 8.5 -172 Q0 -170.5 -8.5 -172 Q-10 -172.8 -11.5 -175.4 Z" fill="#fff"/>
          <path d="M-5 -164.5 Q0 -168 5 -164.5 Q0 -162.8 -5 -164.5 Z" fill="#D0676A"/>
        </g>
      </g>
      <path d="M-42 -206 Q-46 -244 -12 -252 Q24 -258 42 -232 Q46 -220 42 -206 Q38 -222 28 -228 Q22 -218 12 -226 Q4 -216 -6 -226 Q-14 -216 -24 -226 Q-32 -218 -42 -206 Z" fill="${ot}"/>
      <path d="M-20 -244 Q-4 -250 12 -246" stroke="#4E3428" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path data-part="faceLight" clip-path="url(#${n}-face)" d="M-60 -270 H60 V-140 H-60 Z" fill="url(#${n}-screen)" opacity="0" style="mix-blend-mode:screen"/>
    </g>
    <g data-part="spill" opacity="0" style="mix-blend-mode:screen">
      <ellipse cx="0" cy="-138" rx="96" ry="30" fill="url(#${n}-spill)"/>
      <path d="M-56 -128 L-70 -210 L70 -210 L56 -128 Z" fill="url(#${n}-beam)" opacity=".55"/>
    </g>
  </g>`.replace(/url\(#PJ\)/g,`url(#${n}-pj)`),e=P(t,{class:"tdc-girl"}),o=H(e),s=new U({root:e,parts:o,joints:{armL:[-38,-128],foreL:[-46,-74],handL:[-47,-23],armR:[-38,-128],foreR:[-46,-74],handR:[-47,-23],head:[0,-150],body:[0,0]},face:{eyes:[0,1].map(a=>({lid:o[`lid${a}`],lash:o[`lash${a}`],iris:o[`iris${a}`],ry:10})),brows:[{node:o.browL,cx:-16,cy:-219},{node:o.browR,cx:16,cy:-219}],mouths:{mSleepy:o.mSleepy,mYawn:o.mYawn,mO:o.mO,mSoft:o.mSoft,mSmile:o.mSmile},features:o.features,turnShift:7,maxLook:[2.4,2]},state:{armL:8,armR:8,lid:1,mSleepy:1,mYawn:0,mO:0,mSoft:0,mSmile:0,handPointL:0,handPointR:0,sparkle:0,faceLight:0,reflect:0,pupil:1,breathe:0,held:0,heldX:0,heldY:0,heldRot:0,spill:0}});return s.onApply((a,i)=>{for(let c of["L","R"])L(o[`point${c}`],a[`handPoint${c}`]),L(o[`relax${c}`],1-a[`handPoint${c}`]);L(o.faceLight,a.faceLight),L(o.held,a.held),F(o.held,"transform",`translate(${w(a.heldX)} ${w(a.heldY)}) rotate(${w(a.heldRot)} 0 -86)`),L(o.spill,a.spill);let r=a.sparkle*(.85+.15*Math.sin(i*22)),l=a.lookX*2.4,p=a.lookY*2;F(o.sparkle0,"transform",`translate(${w(2.3+l)} ${w(-3+p)}) rotate(${w(i*90)}) scale(${w(r)})`),F(o.sparkle1,"transform",`translate(${w(2.3+l)} ${w(-3+p)}) rotate(${w(-i*90)}) scale(${w(r)})`),L(o.reflect0,a.reflect),L(o.reflect1,a.reflect),F(o.pupil0,"r",w(3.4*a.pupil)),F(o.pupil1,"r",w(3.4*a.pupil)),a.breathe&&F(o.body,"transform",`rotate(${w(a.body)} 0 0) scale(1 ${w(1+Math.sin(i*3.2)*.012*a.breathe)})`)}),s}var j=(n,t,e,o,s,a=0)=>{let i=Vt(t,e);return{t:n,x:i.x,y:i.y,z:o/et,ease:s,px:a*et}},At=class{constructor(t){this.ctx=t;let e=t.responsive.profile.extraDetail;this.world=jt({detail:e}),this.cam=V("g",{class:"tdc-world-cam"}),this.cam.appendChild(this.world.root),t.layers.world.appendChild(this.cam);let o=this.world.parts;this.p=o,this.girl=Mt(),o.girlSlot.appendChild(this.girl.root),Object.assign(this.girl.state,{x:742,y:598,rot:80,head:-12,armL:-2,armR:-2,foreL:-6,foreR:-6,lid:1,mSleepy:1,breathe:1}),this.blanketTpl=gt(Qt),this.blanketA=K(Qt),this.blanketB=K(qt),this.blanketNums=this.blanketA.slice(),this.fx={blanket:0,nsGlow:.35,nsTablet:1,roomGlow:0,glass:1,sparkles:0},this.sparkleGroup=V("g",{opacity:"0"},o.bedroom),this.sparkles=Array.from({length:9},(s,a)=>({el:V("path",{d:"M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z",fill:a%3?"#F2D892":"#FFFFFF"},this.sparkleGroup),x:900+a*37%120,phase:a*.37,speed:.6+a%4*.15})),this.buildCamera()}buildCamera(){let t=this.ctx.gsap.parseEase,[e]=m.dive,[o]=m.bedroom,[s]=m.tablet,[a]=m.board,[i,r]=m.eyes,[l,p]=m.outside,[c]=m.reveal,h=[{t:e+.7,x:808,y:470,z:.62,ease:"none",px:0},j(o-.04,800,500,1,"power2.in",150),j(o+.5,830,515,1.1,"power2.out",170),j(s-.05,905,530,1.28,"sine.inOut",120),j(s+.6,990,500,1.45,"power2.inOut",60),j(a-.3,960,470,2.05,"power2.inOut",0),j(a-.02,960,526,4.6,"power2.in",0),j(i-.02,962,392,3.3,"none",0),j(r-.02,962,398,3.9,"sine.inOut",0),{t:l+.55,x:834,y:476,z:5.7,ease:"power2.inOut",px:8},{t:p-.05,x:838,y:476,z:5.2,ease:"sine.inOut",px:8},{t:c+.42,x:808,y:520,z:.62,ease:"power2.in",px:0}];this.track=new J(h,{parseEase:t,logKeys:["z"],zoomPath:!0})}build(t){let e=this.girl.state,o=this.fx,[s]=m.dive,[a,i]=m.bedroom,[r,l]=m.tablet,[p]=m.board,[c,h]=m.eyes,[f]=m.outside,[d]=m.reveal,y=this.ctx.layers.world;t.set(y,{autoAlpha:0},0),t.to(y,{autoAlpha:1,duration:.14},s+.62),t.to(y,{autoAlpha:0,duration:.16},d+.4),t.to(o,{glass:0,duration:.14},a-.16),t.to(o,{glass:1,duration:.2},f+.25),t.to(o,{nsGlow:1,duration:.18,yoyo:!0,repeat:5,ease:"sine.inOut"},a+.1),t.to(e,{rot:76,head:-18,duration:.14,yoyo:!0,repeat:1,ease:"sine.inOut"},a+.42),t.to(e,{lid:.55,duration:.16},a+.55),t.to(e,{lid:1,duration:.07,yoyo:!0,repeat:1},a+.74),t.to(e,{mSleepy:0,mYawn:1,browY:2.5,duration:.14},a+.62),t.to(e,{mYawn:0,mSleepy:1,duration:.12},a+.92),t.to(e,{lookY:-1,lookX:.3,duration:.12},a+1),t.to(e,{lid:.05,browY:-3.5,mSleepy:0,mO:1,head:-4,duration:.14,ease:"back.out(3)"},i-.26),t.to(e,{rot:0,x:960,y:612,head:8,breathe:0,duration:.3,ease:"back.out(1.3)"},r),t.to(e,{lookX:1,lookY:.2,duration:.1},r+.12),t.to(o,{blanket:1,duration:.3,ease:"power2.out"},r),t.to(e,{body:26,armR:76,foreR:22,armL:20,duration:.22,ease:"power2.out"},r+.28),t.set(o,{nsTablet:0},r+.5),t.set(e,{held:1,heldX:180,heldY:-60,heldRot:12},r+.5),t.to(e,{body:0,heldX:0,heldY:30,heldRot:0,armL:5,foreL:-16,armR:5,foreR:-16,head:2,lookX:0,lookY:.9,duration:.28,ease:"power2.inOut"},r+.5),t.to(e,{mO:0,mSoft:1,duration:.1},r+.62),t.to(e,{handPointR:1,armR:14,foreR:-150,duration:.1},r+.8),t.to(e,{foreR:-138,duration:.06,yoyo:!0,repeat:1},r+.9),t.to(e,{spill:.75,faceLight:.5,duration:.12,ease:"power2.out"},r+.96),t.to(o,{roomGlow:.7,duration:.2},r+.96),t.to(e,{handPointR:0,armR:5,foreR:-16,browY:-4,lid:0,duration:.12},r+1.04),t.set(e,{mSoft:0,mSmile:0,reflect:1,faceLight:.7,lookY:.75},p),t.to(e,{mSmile:1,mSoft:0,duration:.12},c+.12),t.to(e,{sparkle:1,pupil:1.22,duration:.3,ease:"back.out(3)"},c+.2),t.to(e,{browY:-5,duration:.2},c+.18),t.to(e,{head:-4,duration:.16,yoyo:!0,repeat:1,ease:"sine.inOut"},c+.34),t.to(o,{sparkles:1,duration:.25},c+.15),t.set(o,{roomGlow:.25},p),t.to(o,{sparkles:0,duration:.3},h+.1),t.to(e,{sparkle:.6,duration:.3},h),this.e0=c}update(t,e){if(this.ctx.layers.world.style.visibility==="hidden")return;let{W:s,H:a,portrait:i}=this.ctx.responsive,r=this.track.at(t),p=Math.max(s/1600,a/900)*r.z,c=r.x+(i?r.px:0);F(this.cam,"transform",`translate(${w(s/2-c*p)} ${w(a/2-r.y*p)}) scale(${w(p)})`);let h=this.fx,f=this.blanketNums;for(let d=0;d<f.length;d++)f[d]=this.blanketA[d]+(this.blanketB[d]-this.blanketA[d])*h.blanket;if(F(this.p.blanket,"d",xt(this.blanketTpl,f)),L(this.p.nsGlow,h.nsGlow*h.nsTablet),L(this.p.tabletNS,h.nsTablet),L(this.p.roomGlow,h.roomGlow),L(this.p.glass,h.glass),this.girl.apply(null,e),L(this.sparkleGroup,h.sparkles),h.sparkles>0)for(let d of this.sparkles){let y=((t-this.e0)*d.speed+d.phase)%1,k=540-y*260,g=d.x+Math.sin((t+d.phase)*5)*12;F(d.el,"transform",`translate(${w(g)} ${w(k)}) scale(${w(Math.sin(y*Math.PI)*1.2)})`)}}dispose(){this.cam.remove()}};var z="#B87752",Rt="#955A3B",rt="#1A1311",Jt="#0B1E3D",te="#0F2550",pt="#F7F5F0",Dt="#D8B15E",Ft="#4A1A18",Pt="M-40 -132 C-58 -90 -66 -20 -70 34 C-40 44 -20 40 0 42 C20 40 40 44 70 34 C66 -20 58 -90 40 -132 Z",Ae="M-40 -132 C-66 -80 -84 0 -64 96 C-40 84 -24 116 0 104 C24 118 44 88 70 110 C78 10 62 -80 40 -132 Z";function ee(){return`
    <path d="M-31 -6 L-3 -6 L-7 88 Q-16 92 -27 88 Z" fill="${te}"/>
    <path d="M-29 -2 L-26 86" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
    <g data-part="SHIN">
      <path d="M-27 84 L-7 84 L-9 166 L-25 166 Z" fill="${te}"/>
      <path d="M-25.5 90 L-24 163" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
      <path d="M-31 164 Q-33 185 -18 186 L0 186 Q7 185 5 175 Q1 163 -10 162 Z" fill="${pt}"/>
      <path d="M-32 181 L5.5 181" stroke="#B8C1D1" stroke-width="2.4"/>
      <path d="M-25 172 Q-15 177 -4 170" stroke="${Dt}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>`}function oe(n){let t=n;return`
    <path d="M-46 -134 Q-58 -118 -60 -94 L-58 -66 L-42 -64 L-38 -96 Q-36 -118 -30 -128 Z" fill="url(#JACKET)"/>
    <path d="M-46 -134 Q-58 -118 -58 -101 Q-47 -106 -37 -104 Q-36 -120 -30 -128 Z" fill="#24479A"/>
    <path d="M-58 -101 Q-47 -106 -37 -104" stroke="${Dt}" stroke-width="1.6" fill="none"/>
    <g data-part="fore${t}">
      <path d="M-58 -70 L-42 -68 L-45 -14 L-59 -14 Z" fill="url(#JACKET)"/>
      <path d="M-60.5 -19 L-43.5 -19 L-44 -8 L-60 -8 Z" fill="${pt}"/>
      <g data-part="hand${t}">
        <g data-part="relax${t}">
          <path d="M-59 -9 Q-61 7 -56 13 Q-52 16 -48 13 Q-43 7 -45 -9 Z" fill="${z}"/>
          <path d="M-46 -4 Q-40 -2 -40.5 4 Q-42.5 7 -46 4 Z" fill="${Rt}"/>
        </g>
        <g data-part="open${t}" opacity="0">
          <path d="M-60 -8 Q-61.5 5 -52.5 7.5 Q-44 6 -45 -8 Z" fill="${z}"/>
          <g stroke="${z}" stroke-width="3.6" stroke-linecap="round">
            <path d="M-58.6 4 L-61 13.5"/><path d="M-55.2 6 L-55.8 17"/><path d="M-51.6 6.2 L-51.2 17"/><path d="M-48.2 5 L-46.2 13.5"/><path d="M-45.3 -2 L-40 3.5"/>
          </g>
        </g>
        <g data-part="point${t}" opacity="0">
          <path d="M-59 -9 Q-60 4 -54 6 Q-46 6 -45 -9 Z" fill="${z}"/>
          <path d="M-55.5 3 L-54.5 20 Q-52.5 23 -50.5 20 L-50.5 3 Z" fill="${z}"/>
        </g>
      </g>
    </g>`}function nt({gold:n=Dt}={}){let t=D("coach"),e=`
  <defs>
    <linearGradient id="${t}-jacket" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#23478F"/><stop offset=".55" stop-color="#132D5E"/><stop offset="1" stop-color="${Jt}"/>
    </linearGradient>
    <linearGradient id="${t}-cape" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1B3A78"/><stop offset="1" stop-color="#0A1A38"/>
    </linearGradient>
    <radialGradient id="${t}-skin" cx=".38" cy=".35" r=".75">
      <stop offset="0" stop-color="#CB8C66"/><stop offset=".7" stop-color="${z}"/><stop offset="1" stop-color="${Rt}"/>
    </radialGradient>
    <linearGradient id="${t}-trail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F2D892" stop-opacity=".9"/><stop offset=".25" stop-color="#F7F5F0" stop-opacity=".45"/><stop offset="1" stop-color="#F7F5F0" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${t}-eyeL"><ellipse cx="0" cy="0" rx="4.9" ry="5.7"/></clipPath>
  </defs>
  <g data-part="body">
    <g data-part="trail" opacity="0">
      <path d="M-24 150 Q-14 170 -17 820 L-13 820 Q-8 170 -12 150 Z" fill="url(#${t}-trail)"/>
      <path d="M2 120 Q9 170 8 1000 L13 1000 Q16 170 16 120 Z" fill="url(#${t}-trail)" opacity=".75"/>
      <path d="M28 150 Q36 170 35 700 L38 700 Q41 170 38 150 Z" fill="url(#${t}-trail)" opacity=".55"/>
    </g>
    <g data-part="cape">
      <path data-part="capePath" d="${Pt}" fill="url(#${t}-cape)" stroke="${n}" stroke-width="2.2" stroke-linejoin="round"/>
    </g>
    <g data-part="legL">${ee().replace("SHIN","shinL")}</g>
    <g transform="scale(-1 1)"><g data-part="legR">${ee().replace("SHIN","shinR")}</g></g>
    <path d="M-32 -14 H32 V4 Q0 10 -32 4 Z" fill="#081733"/>
    <rect x="-5.5" y="-11" width="11" height="9" rx="1.5" fill="none" stroke="${n}" stroke-width="2"/>
    <path d="M-31 -4 Q-35 -62 -44 -118 Q-42 -134 -22 -140 L22 -140 Q42 -134 44 -118 Q35 -62 31 -4 Z" fill="url(#${t}-jacket)"/>
    <path d="M-44 -118 Q-38 -70 -31 -4 L-25 -4 Q-31 -66 -37 -117 Z" fill="#2C5BC4" opacity=".55"/>
    <path d="M44 -118 Q38 -70 31 -4 L25 -4 Q31 -66 37 -117 Z" fill="#2C5BC4" opacity=".35"/>
    <path d="M-41 -113 L0 -90 L41 -113" stroke="${pt}" stroke-width="3.2" fill="none" stroke-linejoin="round"/>
    <path d="M0 -72 L0 -8" stroke="${pt}" stroke-width="1.4" opacity=".35"/>
    <g data-part="emblem" transform="translate(0 -84)">
      <circle r="13.5" fill="${Jt}" stroke="${n}" stroke-width="2.2"/>
      <path d="${O.knight}" transform="scale(.19) translate(-50 -66)" fill="${n}"/>
    </g>
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -132 -10 -138 Z" fill="${Rt}"/>
    <path d="M-20 -141 Q0 -127 20 -141 L16 -151 Q0 -139 -16 -151 Z" fill="${pt}"/>
    <g data-part="armL">${oe("L")}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${oe("R")}</g></g>
    <g data-part="head">
      <ellipse cx="-24" cy="-186" rx="5" ry="8" fill="${z}"/><ellipse cx="24" cy="-186" rx="5" ry="8" fill="${z}"/>
      <path d="M-24 -196 Q-25 -170 -16 -158 Q-8 -148 0 -148 Q8 -148 16 -158 Q25 -170 24 -196 Q23 -222 0 -224 Q-23 -222 -24 -196 Z" fill="url(#${t}-skin)"/>
      <path d="M-25 -190 Q-28 -222 -6 -230 Q18 -236 27 -212 Q29 -200 25 -188 Q23 -204 16 -210 Q2 -214 -10 -210 Q-20 -204 -25 -190 Z" fill="${rt}"/>
      <path d="M-24.5 -196 L-22.5 -181 L-20.5 -196 Z M24.5 -196 L22.5 -181 L20.5 -196 Z" fill="${rt}"/>
      <g data-part="features">
        ${[-9,9].map((c,h)=>`
        <g transform="translate(${c} -187)">
          <g clip-path="url(#${t}-eyeL)">
            <ellipse rx="4.9" ry="5.7" fill="#FFFDF8"/>
            <g data-part="iris${h}">
              <circle r="3.6" fill="#3A2415"/><circle r="1.8" fill="#0A0706"/>
              <circle cx="1.1" cy="-1.4" r="1.15" fill="#fff"/>
              <circle data-part="glint${h}" cx="-1.2" cy="1.3" r=".7" fill="${n}" opacity="0"/>
            </g>
            <rect data-part="lid${h}" x="-6" y="-5.7" width="12" height="11.4" fill="${z}"/>
          </g>
          <path data-part="lash${h}" d="M-5.4 0 Q0 -11.6 5.4 0" stroke="#170F0C" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        </g>`).join("")}
        <path data-part="browL" d="M-14.5 -196 Q-9 -200.5 -3.5 -197.5" stroke="${rt}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M3.5 -197.5 Q9 -200.5 14.5 -196" stroke="${rt}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path d="M-1 -188 Q-3.6 -177 -0.6 -175.6 Q2.4 -175 4 -176.6" stroke="#80472D" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <circle cx="-14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/><circle cx="14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/>
        <g data-part="mSmile">
          <path d="M-10.5 -168.5 Q0 -154 10.5 -168.5 Q0 -165.5 -10.5 -168.5 Z" fill="${Ft}"/>
          <path d="M-9 -168 Q0 -165.6 9 -168 Q8.4 -165.6 7.2 -164.8 Q0 -163.2 -7.2 -164.8 Q-8.4 -165.6 -9 -168 Z" fill="#fff"/>
          <path d="M-4.2 -159.4 Q0 -162.2 4.2 -159.4 Q0 -157.6 -4.2 -159.4 Z" fill="#C9605A"/>
        </g>
        <ellipse data-part="mO" cx="0" cy="-164" rx="3.7" ry="4.8" fill="${Ft}" opacity="0"/>
        <g data-part="mEek" opacity="0">
          <path d="M-10.5 -167.5 Q0 -169.5 10.5 -167.5 Q9.5 -160 0 -160.5 Q-9.5 -160 -10.5 -167.5 Z" fill="#fff" stroke="${Ft}" stroke-width="1.4"/>
          <path d="M-9.4 -164 Q0 -165.2 9.4 -164" stroke="#C9C2B8" stroke-width="1"/>
        </g>
        <path data-part="mProud" d="M-8.5 -168.5 Q0 -161.5 8.5 -168.5" stroke="${Ft}" stroke-width="2.3" fill="none" stroke-linecap="round" opacity="0"/>
      </g>
      <path d="M-10 -226 Q2 -251 29 -236 Q22 -232 18 -222 Q8 -231 -10 -226 Z" fill="${rt}"/>
      <path d="M-1 -235 Q9 -243 21 -237" stroke="#4A3A33" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M-3 -212 q-7 6 -2 12 q4 3 5 -2" stroke="${rt}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
  </g>`.replace(/url\(#JACKET\)/g,`url(#${t}-jacket)`),o=P(e,{class:"tdc-coach"}),s=H(o),a=new U({root:o,parts:s,joints:{armL:[-40,-126],foreL:[-50,-66],handL:[-52,-9],armR:[-40,-126],foreR:[-50,-66],handR:[-52,-9],legL:[-17,0],shinL:[-17,86],legR:[-17,0],shinR:[-17,86],head:[0,-150],body:[0,0]},face:{eyes:[0,1].map(c=>({lid:s[`lid${c}`],lash:s[`lash${c}`],iris:s[`iris${c}`],ry:5.7})),brows:[{node:s.browL,cx:-9,cy:-198},{node:s.browR,cx:9,cy:-198}],mouths:{mSmile:s.mSmile,mO:s.mO,mEek:s.mEek,mProud:s.mProud},features:s.features,turnShift:5,maxLook:[1.6,1.4]},state:{armL:12,armR:12,foreL:0,foreR:0,legL:3,legR:3,mSmile:1,mO:0,mEek:0,mProud:0,handOpenL:0,handOpenR:0,handPointL:0,handPointR:0,capeStream:0,capeFlutter:1,bob:0,glint:0,trail:0}}),i=gt(Pt),r=K(Pt),l=K(Ae),p=r.slice();return a.onApply((c,h)=>{let f=c.capeStream;for(let d=0;d<r.length;d++){let y=d>2&&d<r.length-4?Math.sin(h*13+d*.9)*(1.5+4*f)*c.capeFlutter:0;p[d]=r[d]+(l[d]-r[d])*f+y}F(s.capePath,"d",xt(i,p));for(let d of["L","R"]){let y=c[`handOpen${d}`],k=c[`handPoint${d}`];L(s[`open${d}`],y),L(s[`point${d}`],k),L(s[`relax${d}`],1-Math.max(y,k))}L(s.glint0,c.glint),L(s.glint1,c.glint),L(s.trail,c.trail)}),a}var T={stand:{armL:12,armR:12,foreL:0,foreR:0,legL:3,legR:3,shinL:0,shinR:0,head:0,body:0},fly:{armL:170,foreL:5,armR:25,foreR:-20,legL:4,shinL:8,legR:-2,shinR:18,head:-62,body:0},brake:{armL:70,foreL:60,armR:80,foreR:50,legL:30,shinL:-60,legR:22,shinR:-55,head:0,body:0},sorry:{armL:55,foreL:95,armR:140,foreR:115,legL:6,shinL:-10,legR:2,shinR:-6,head:-6,body:0},dive:{armL:176,foreL:0,armR:176,foreR:0,legL:2,shinL:6,legR:2,shinR:6,head:0,body:0},proud:{armL:34,foreL:-78,armR:34,foreR:-78,legL:5,shinL:0,legR:5,shinR:0,head:4,body:0},poke:{armL:34,foreL:-78,armR:88,foreR:18,legL:5,shinL:0,legR:5,shinR:0,head:8,body:0},wave:{armL:14,foreL:-8,armR:150,foreR:30,legL:3,shinL:0,legR:3,shinR:0,head:-4,body:0},run:{armL:120,foreL:10,armR:40,foreR:-70,legL:40,shinL:-70,legR:-20,shinR:30,head:-50,body:0}};var Bt=(n,t={})=>({...T[n],...t}),Lt=class{constructor(t){this.ctx=t;let e=D("coachfx"),o=P(`<defs>${Y(e)}</defs>`);this.space=nt(),t.layers.overlay.appendChild(this.space.root),Object.assign(this.space.state,Bt("fly"),{x:-.25,y:.62,rot:70,scale:.62,capeStream:1,trail:1,opacity:0});let s=t.bedroom.p.exteriorSlot;s.appendChild(o),this.window=nt(),s.appendChild(this.window.root),Object.assign(this.window.state,Bt("proud"),{x:872,y:486,scale:.16,mSmile:0,mProud:1,lookX:-1,turn:-.5,capeStream:.25}),this.windowKnight=new Z(P(B("knight",`${e}-gold`,{shadow:!1})),{x:900,y:470,scale:0,rot:-6}),s.appendChild(this.windowKnight.root),this.ring=V("circle",{r:"10",fill:"none",stroke:"#F2D892","stroke-width":"1.2",opacity:"0"},s),this.ringState={r:2,o:0};let a=t.layers.front;a.appendChild(P(`<defs>${Y(e+"f")}</defs>`)),this.chaseKnight=new Z(P(B("knight",`${e}f-gold`)),{x:1.1,y:.94,scale:0,opacity:0}),a.appendChild(this.chaseKnight.root),this.finale=nt(),a.appendChild(this.finale.root),Object.assign(this.finale.state,Bt("wave"),{x:1.25,y:1.03,rot:-14,scale:1.45,opacity:0,capeStream:.2})}build(t){this.buildSpace(t),this.buildWindow(t),this.buildFinale(t)}buildSpace(t){let e=this.space.state,[o]=m.coachFly,[s]=m.comedy,[a]=m.dive,i=s+.07;t.set(e,{opacity:1},o-.02),t.to(e,{x:.3,y:.5,duration:.55,ease:"power2.out"},o),t.to(e,{x:.52,y:.47,rot:74,duration:i-o-.55,ease:"none"},o+.55),t.to(e,{glint:1,lookX:-.3,duration:.15,yoyo:!0,repeat:1},o+.3),t.to(e,{lid:.9,duration:.07,yoyo:!0,repeat:1},o+.38),t.to(e,{x:.63,y:.49,rot:12,capeStream:.35,trail:0,...T.brake,duration:.2,ease:"power3.out"},i),t.to(e,{mSmile:0,mO:1,browY:-4,lookX:1,lookY:-1,turn:.5,head:-10,duration:.08},i+.02),t.to(e,{head:8,duration:.05,yoyo:!0,repeat:3},i+.12),t.to(e,{...T.sorry,rot:-4,mO:0,mEek:1,browY:-2,browTilt:14,lookX:.9,lookY:.2,turn:.4,handOpenL:1,duration:.14,ease:"power2.out"},i+.3),t.to(e,{rot:-10,duration:.1,yoyo:!0,repeat:1,ease:"sine.inOut"},i+.44),t.to(e,{mEek:0,mSmile:1,browTilt:0,browY:0,handOpenL:0,duration:.1},i+.62),t.to(e,{...T.dive,rot:232,lookX:0,lookY:0,turn:0,capeStream:1,trail:1,duration:.2,ease:"power2.inOut"},a-.04),t.to(e,{x:.36,y:.56,scale:.02,duration:.55,ease:"power2.in"},a+.08),t.to(e,{opacity:0,duration:.1},a+.55)}buildWindow(t){let e=this.window.state,o=this.windowKnight.state,[s,a]=m.outside,[i]=m.dive;t.set(e,{...T.dive,x:930,y:150,rot:200,scale:.12,trail:1,capeStream:1,opacity:1},0),t.to(e,{x:872,y:486,scale:.16,duration:.3,ease:"power2.out"},i+.68),t.to(e,{...T.proud,rot:0,trail:0,capeStream:.25,duration:.16,ease:"back.out(2)"},i+.86),t.to(e,{head:8,duration:.12,yoyo:!0,repeat:1,ease:"sine.inOut"},s+.42),t.to(e,{lid:.35,duration:.1},s+.4),t.to(o,{scale:.15,rot:0,duration:.2,ease:"back.out(3)"},s+.46),t.to(e,{lookX:1,turn:.5,lid:0,browY:-2,duration:.08},s+.56),t.to(e,{...T.poke,handPointR:1,duration:.12,ease:"power2.out"},s+.62),t.to(o,{y:462,rot:14,duration:.08,ease:"power2.out"},s+.72),t.to(o,{x:906,y:468,rot:0,duration:.1,ease:"power2.in"},s+.8),t.fromTo(this.ringState,{r:2,o:.9},{r:60,o:0,duration:.5,ease:"power2.out"},s+.74),t.to(e,{...T.proud,handPointR:0,mProud:0,mSmile:1,duration:.14},a-.12)}buildFinale(t){let e=this.finale.state,o=this.chaseKnight.state,[s]=m.wave,[a,i]=m.chase;t.set(e,{opacity:1},s),t.fromTo(e,{x:1.25,rot:-24},{x:.84,rot:-6,duration:.2,ease:"back.out(1.6)"},s),t.set(e,{handOpenR:1,mSmile:1,browY:-3,lookX:0,lookY:0},s),t.fromTo(e,{foreR:36},{foreR:-14,duration:.075,yoyo:!0,repeat:3,ease:"sine.inOut"},s+.12),t.set(o,{opacity:1,scale:.85,x:1.08,y:.93},a),[.94,.8,.66,.52,.38,.22,.06,-.12].forEach((l,p)=>{let c=a+.02+p*.066;t.to(o,{x:l,duration:.066,ease:"none"},c),t.to(o,{y:.86,rot:-12,sy:1.06,sx:.95,duration:.033,ease:"power2.out"},c),t.to(o,{y:.93,rot:0,sy:1,sx:1,duration:.033,ease:"power2.in"},c+.033)}),t.to(e,{lookX:-1,turn:-.6,head:-8,foreR:30,duration:.05},a+.04),t.to(e,{lookX:0,turn:.1,head:2,browY:-5,mSmile:0,mO:1,duration:.05},a+.13),t.to(e,{lookX:-1,turn:-.7,head:-10,duration:.05},a+.21),t.to(e,{lookX:0,turn:0,head:0,mO:0,mSmile:1,browY:-2,duration:.05},a+.28),t.set(e,{flipX:-1,handOpenR:0},a+.34),t.to(e,{...T.fly,rot:-72,lookX:0,capeStream:1,trail:1,duration:.08},a+.34),t.to(e,{x:-.45,y:.95,duration:i-a-.38,ease:"power2.in"},a+.37),t.set(e,{opacity:0},i-.001)}update(t,e){let{W:o,H:s,unit:a,profile:i}=this.ctx.responsive,r=i.charScale,l=(c,h,f)=>({x:c*o,y:h*s,s:f*a*r});if(t<4.5){let c=this.space.state,h=c.y;c.y=h+Math.sin(e*3)*.004,this.space.apply(this.ctx.spacePlace?.()||l,e),c.y=h}else this.space.state.opacity!==0&&(this.space.state.opacity=0,this.space.apply(l,e));if(this.ctx.layers.world.style.visibility!=="hidden"){let c=this.window.state,h=c.y;c.y=h+Math.sin(e*2.4)*1.2,this.window.apply(null,e),c.y=h,this.windowKnight.apply(null),this.ring.setAttribute("r",this.ringState.r.toFixed(2)),this.ring.setAttribute("opacity",this.ringState.o.toFixed(3)),this.ring.setAttribute("cx",this.windowKnight.state.x.toFixed(1)),this.ring.setAttribute("cy",(this.windowKnight.state.y-9).toFixed(1))}let p=this.ctx.responsive.portrait;this.finale.apply((c,h,f)=>({x:c*o,y:(h+(p?.09:0))*s,s:f*a*r*(p?.8:1)}),e),this.chaseKnight.apply(l)}};var Fe=["rnbqkbnr","pppp.ppp","........","....p...","....P...","........","PPPP.PPP","RNBQKBNR"],Le={p:"pawn",n:"knight",b:"bishop",r:"rook",q:"queen",k:"king"};function Ee(n,t,e){let o=t?660:1e3,s=t?1e3:660,a={x:40,y:40,w:o-80,h:s-80},i=t?{x:60,y:116,w:540,h:330}:{x:60,y:116,w:404,h:474},r=t?60:56,l=t?{x:90,y:466}:{x:484,y:122},p="",c="";for(let g=0;g<8;g++)for(let $=0;$<8;$++){let x=l.x+$*r,M=l.y+g*r;p+=`<rect x="${x}" y="${M}" width="${r}" height="${r}" fill="${(g+$)%2?"#2C5BC4":"#EDE7DA"}"/>`;let u=Fe[g][$];if(u!=="."){let b=u===u.toUpperCase(),C=Le[u.toLowerCase()];c+=`<g ${g===7&&$===6?'data-part="mover"':""} transform="translate(${x+r/2} ${M+r-5}) scale(${(r/132).toFixed(3)})">${B(C,`${n}-${b?"ivory":"navy"}`,{tone:b?"ivory":"navy"})}</g>`}}let h={x:l.x+6*r,y:l.y+7*r},f={x:l.x+5*r,y:l.y+5*r},d=`
    <defs>
      ${Y(n)}
      <linearGradient id="${n}-vid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D3B74"/><stop offset="1" stop-color="#0B1E3D"/></linearGradient>
      <clipPath id="${n}-vclip"><rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" rx="14"/></clipPath>
      <clipPath id="${n}-pip"><rect x="${i.x+14}" y="${i.y+i.h-104}" width="118" height="90" rx="10"/></clipPath>
      <clipPath id="${n}-screen"><rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" rx="16"/></clipPath>
    </defs>
    <rect width="${o}" height="${s}" rx="46" fill="#0A142E"/>
    <rect x="6" y="6" width="${o-12}" height="${s-12}" rx="41" fill="none" stroke="#2A3F72" stroke-width="3"/>
    <circle cx="${t?o/2:20}" cy="${t?20:s/2}" r="4" fill="#1C2C55"/>
    <g clip-path="url(#${n}-screen)">
      <rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" fill="#F7F5F0"/>
      <g data-part="ui" opacity="0">
        <rect x="${a.x}" y="${a.y}" width="${a.w}" height="62" fill="#FFFFFF"/>
        <path d="M${a.x} ${a.y+62} H${a.x+a.w}" stroke="#DCD8CE" stroke-width="2"/>
        <image href="${e}" x="${a.x+16}" y="${a.y+9}" width="${t?150:170}" height="44" preserveAspectRatio="xMinYMid meet"/>
        <circle data-part="live" cx="${a.x+a.w-30}" cy="${a.y+31}" r="8" fill="#E5484D"/>
        <g opacity=".9">${[0,1,2].map(g=>`<circle cx="${a.x+a.w-72-g*30}" cy="${a.y+31}" r="11" fill="${["#2C5BC4","#D8B15E","#8FA6D8"][g]}" stroke="#fff" stroke-width="2.5"/>`).join("")}</g>
        <rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" rx="14" fill="url(#${n}-vid)"/>
        <g clip-path="url(#${n}-vclip)">
          <path d="M${i.x} ${i.y+i.h*.34} H${i.x+i.w} M${i.x} ${i.y+i.h*.62} H${i.x+i.w}" stroke="#2A4A8A" stroke-width="6"/>
          ${Array.from({length:10},(g,$)=>`<rect x="${i.x+20+$*26}" y="${i.y+i.h*.34-34-$%3*6}" width="18" height="${34+$%3*6}" fill="${["#D8B15E","#F7F5F0","#4A76D6"][$%3]}" opacity=".55"/>`).join("")}
          <g data-part="coachSlot"></g>
          <rect x="${i.x+14}" y="${i.y+i.h-104}" width="118" height="90" rx="10" fill="#EAF0FA" stroke="#fff" stroke-width="3"/>
          <g clip-path="url(#${n}-pip)"><g data-part="girlSlot"></g></g>
        </g>
        <rect x="${l.x-6}" y="${l.y-6}" width="${r*8+12}" height="${r*8+12}" rx="8" fill="#0B1E3D"/>
        ${p}
        <rect data-part="fromSq" x="${h.x}" y="${h.y}" width="${r}" height="${r}" fill="#D8B15E" opacity="0"/>
        <rect data-part="toSq" x="${f.x}" y="${f.y}" width="${r}" height="${r}" fill="#D8B15E" opacity="0"/>
        <path data-part="arc" d="M${h.x+r/2} ${h.y+r/2} Q${h.x+r/2} ${f.y+r/2} ${f.x+r/2} ${f.y+r/2}" stroke="#D8B15E" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round" fill="none" opacity="0"/>
        ${c}
      </g>
      <g data-part="splash">
        <rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" fill="#FFFFFF"/>
        <g data-part="splashLogo">
          <image href="${e}" x="${o/2-(t?250:330)}" y="${s/2-150}" width="${t?500:660}" height="300" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>
      <rect data-part="flash" x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" fill="#FFFFFF" opacity="0"/>
    </g>
    <ellipse cx="${t?12:16}" cy="${s*.62}" rx="30" ry="46" fill="#E0A67E"/>
    <ellipse cx="${o-(t?12:16)}" cy="${s*.6}" rx="30" ry="46" fill="#E0A67E"/>`,y=X(`tdc-tablet-device ${t?"is-portrait":"is-landscape"}`,`0 0 ${o} ${s}`);y.setAttribute("preserveAspectRatio","xMidYMid meet"),y.appendChild(P(d));let k=H(y);return{svg:y,p:k,video:i,sq:r,from:h,to:f,portrait:t}}var Et=class{constructor(t){this.ctx=t;let e=t.assets.logoHorizontalUrl;this.layouts=[!1,!0].map(o=>{let s=Ee(D("tab"),o,e);t.layers.tablet.appendChild(s.svg);let a=nt();s.p.coachSlot.appendChild(a.root);let i=o?1:1.5;Object.assign(a.state,T.stand,{x:s.video.x+s.video.w*(o?.5:.52),y:s.video.y+(o?34:58)+250*i,scale:i,mSmile:1});let r=Mt();s.p.girlSlot.appendChild(r.root),Object.assign(r.state,{x:s.video.x+73,y:s.video.y+s.video.h+5,scale:.36,lid:0,mSleepy:0,mSmile:1,lookY:-.2});let l=new Z(s.p.mover,{x:s.from.x+s.sq/2,y:s.from.y+s.sq-5,scale:s.sq/132});return{...s,coach:a,girl:r,mover:l,fx:{ui:0,flash:0,splash:1,fromSq:0,toSq:0,arc:0}}}),this.view={s:.62,o:0}}build(t){let[e,o]=m.board,s=this.ctx.layers.tablet;t.set(s,{autoAlpha:0},0),t.fromTo(this.view,{s:.5,o:0},{s:1,o:1,duration:.2,ease:"power2.out"},e-.08),t.set(s,{autoAlpha:1},e-.08),t.to(this.view,{s:1.18,o:0,duration:.16,ease:"power2.in"},o-.1),t.set(s,{autoAlpha:0},o+.07);for(let a of this.layouts){let i=a.fx,r=a.mover.state,l=a.coach.state,p=r.x,c=r.y,h=r.scale,f=a.to.x-a.from.x,d=a.to.y-a.from.y;t.fromTo(i,{flash:.9},{flash:0,duration:.2},e-.04),t.to(i,{splash:0,ui:1,duration:.14,ease:"power1.inOut"},e+.3),t.to(l,{...T.poke,handPointR:1,duration:.14,ease:"power2.out"},e+.38),t.to(l,{mSmile:0,mO:1,duration:.06,yoyo:!0,repeat:3},e+.4),t.to(l,{lookX:1,turn:.4,duration:.1},e+.42),t.to(i,{fromSq:.45,duration:.08},e+.46),t.to(r,{y:c-16,scale:h*1.14,rot:-8,duration:.1,ease:"power2.out"},e+.48),t.to(i,{arc:1,toSq:.3,duration:.08},e+.54),t.to(r,{x:p+f,duration:.2,ease:"power2.inOut"},e+.58),t.to(r,{y:c+d-24,duration:.2,ease:"power1.out"},e+.58),t.to(r,{y:c+d,scale:h,rot:0,duration:.08,ease:"power2.in"},e+.78),t.to(r,{sy:.92,sx:1.06,duration:.04,yoyo:!0,repeat:1},e+.86),t.to(i,{arc:0,fromSq:.2,toSq:.55,duration:.1},e+.84),t.to(l,{lookX:0,turn:0,mSmile:1,mO:0,...T.wave,handOpenR:1,handPointR:0,duration:.12},e+.84)}}update(t,e){let o=this.ctx.layers.tablet;if(o.style.visibility==="hidden")return;let s=this.ctx.responsive.portrait;o.style.opacity=this.view.o.toFixed(3);for(let a of this.layouts){let i=a.portrait===s;if(a.svg.style.display=i?"":"none",!i)continue;a.svg.style.transform=`scale(${this.view.s.toFixed(4)})`;let r=a.fx;a.p.ui.setAttribute("opacity",r.ui.toFixed(3)),a.p.splash.setAttribute("opacity",r.splash.toFixed(3)),a.p.flash.setAttribute("opacity",r.flash.toFixed(3)),a.p.fromSq.setAttribute("opacity",r.fromSq.toFixed(3)),a.p.toSq.setAttribute("opacity",r.toSq.toFixed(3)),a.p.arc.setAttribute("opacity",r.arc.toFixed(3)),a.p.live.setAttribute("opacity",(.55+.45*Math.sin(e*8)).toFixed(3));let l=.94+Math.min(1,Math.max(0,t-m.board[0]+.1))*.1;a.p.splashLogo.setAttribute("transform",`translate(${a.svg.viewBox.baseVal.width/2} ${a.svg.viewBox.baseVal.height/2}) scale(${l.toFixed(4)}) translate(${-a.svg.viewBox.baseVal.width/2} ${-a.svg.viewBox.baseVal.height/2})`),a.coach.apply(null,e),a.girl.apply(null,e),a.mover.apply(null)}}};var St=class{constructor(t){this.ctx=t;let e=t.assets.brandLogo,o=t.layers.brand;o.innerHTML=`
      <div class="tdc-brand__scrim"></div>
      <div class="tdc-brand__stack">
        <div class="tdc-brand__logo" style="aspect-ratio:${e.width} / ${e.height}">
          <div class="tdc-brand__halo"></div>
          <img class="tdc-brand__img" alt="The Digital Chessboard" draggable="false" />
          <div class="tdc-brand__shine"></div>
        </div>
        <p class="tdc-brand__tagline">
          <span class="tdc-w">Making</span><span class="tdc-d" aria-hidden="true">\u25C6</span><span class="tdc-w">Champions</span><span class="tdc-d" aria-hidden="true">\u25C6</span><span class="tdc-w">Worldwide</span>
        </p>
      </div>`;let s=o.querySelector(".tdc-brand__img");s.src=e.url;let a=o.querySelector(".tdc-brand__shine");a.style.webkitMaskImage=a.style.maskImage=`url("${e.url}")`,this.el={root:o,logo:o.querySelector(".tdc-brand__logo"),img:s,shine:a,halo:o.querySelector(".tdc-brand__halo"),scrim:o.querySelector(".tdc-brand__scrim"),words:[...o.querySelectorAll(".tdc-w")],diamonds:[...o.querySelectorAll(".tdc-d")]},this.s={reveal:0,blur:12,bright:2.8,scale:.9,opacity:0,shine:-.6,halo:0,scrim:0},this.words=this.el.words.map(()=>({y:16,o:0})),this.diamonds=this.el.diamonds.map(()=>({s:0,o:0}))}build(t){let[e,o]=m.brand,[s,a]=m.tagline,i=this.s;t.set(this.ctx.layers.brand,{autoAlpha:0},0),t.set(this.ctx.layers.brand,{autoAlpha:1},e),t.to(i,{scrim:1,duration:.6,ease:"power1.inOut"},e),t.to(i,{halo:1,duration:.3,ease:"power2.in"},e+.2),t.to(i,{opacity:1,duration:.12},e+.22),t.to(i,{reveal:1,duration:.5,ease:"power2.out"},e+.24),t.to(i,{blur:0,bright:1,scale:1,duration:.55,ease:"power3.out"},e+.24),t.to(i,{halo:.45,duration:.5,ease:"power2.out"},e+.55),t.to(i,{shine:1.6,duration:.55,ease:"power2.inOut"},o-.2),this.words.forEach((r,l)=>t.to(r,{y:0,o:1,duration:.28,ease:"power3.out"},s+l*.1)),this.diamonds.forEach((r,l)=>t.to(r,{s:1,o:1,duration:.24,ease:"back.out(3)"},s+.08+l*.1)),this.g1=a}measure(){let t=this.el.logo.getBoundingClientRect(),e=this.ctx.container.getBoundingClientRect();if(!t.height||!e.height)return;let o=t.top+t.height/2-e.top;this.ctx.logoNdcY=1-2*o/e.height}update(){if(this.ctx.layers.brand.style.visibility==="hidden")return;let e=this.s,o=this.el;o.img.style.opacity=e.opacity.toFixed(3),o.img.style.filter=`blur(${e.blur.toFixed(2)}px) brightness(${e.bright.toFixed(3)})`;let s=e.reveal*130,a=`radial-gradient(circle at 50% 45%, #000 ${Math.max(0,s-18).toFixed(1)}%, transparent ${s.toFixed(1)}%)`;o.img.style.webkitMaskImage=o.img.style.maskImage=a,o.logo.style.transform=`scale(${e.scale.toFixed(4)})`,o.shine.style.setProperty("--shine",`${(e.shine*100).toFixed(1)}%`),o.halo.style.opacity=e.halo.toFixed(3),o.scrim.style.opacity=e.scrim.toFixed(3),this.words.forEach((i,r)=>{o.words[r].style.opacity=i.o.toFixed(3),o.words[r].style.transform=`translateY(${i.y.toFixed(2)}px)`}),this.diamonds.forEach((i,r)=>{o.diamonds[r].style.opacity=i.o.toFixed(3),o.diamonds[r].style.transform=`scale(${i.s.toFixed(3)})`})}};var Se=13.36,ae=class{constructor(t,e,o){this.container=t,this.options=e,this.a11y=o,this.stage=t.querySelector(".tdc-stage"),this.tick=this.tick.bind(this),this.lastT=-1,this.userPaused=!1}async init(){let t=this.options;this.assets=new ft({baseUrl:t.baseUrl,assets:t.assets,THREE:t.THREE,gsap:t.gsap});let[{THREE:e,gsap:o}]=await Promise.all([this.assets.loadLibraries(),this.assets.loadImages()]);this.THREE=e,this.gsap=o,this.layers=this.createLayers(),this.responsive=new mt(this.stage,{forceProfile:t.profile});let s=this.responsive.profile;this.three=new yt(e,this.layers.canvas,s);let a={THREE:e,gsap:o,container:this.stage,layers:this.layers,assets:this.assets,responsive:this.responsive,three:this.three,logoNdcY:.18};this.ctx=a,this.space=new wt(a),this.earth=new $t(a),this.network=new kt(a,this.earth),this.bedroom=new At(a),a.bedroom=this.bedroom,this.coach=new Lt(a),this.tablet=new Et(a),this.brand=new St(a),this.scenes=[this.space,this.earth,this.network,this.bedroom,this.coach,this.tablet,this.brand],this.timeline=new ut(o,{onComplete:()=>this.onComplete()});let i=this.timeline.tl;for(let r of this.scenes)r.build(i);return this.buildLayerCuts(i),this.duration=this.timeline.finalize(),this.onResize(),this.responsive.onChange(()=>this.onResize()),this.perf=new q(this.container,{onVisibleChange:r=>this.onVisible(r)}),this.perf.onDegrade(r=>{this.three.degrade(r),r>=2&&(this.space.dust.visible=!1)}),this.a11y.bind({onToggle:()=>this.timeline.playing?this.pause(!0):this.play(),onReplay:()=>this.restart()}),this.a11y.onReducedMotionChange(r=>{r&&this.showStill()}),!t.gsap&&!window.gsap&&o.ticker.lagSmoothing(0),o.ticker.add(this.tick),this.container.classList.add("tdc-is-ready"),typeof t.startAt=="number"?this.seek(t.startAt):this.a11y.reducedMotion?this.showStill():(this.timeline.seek(0),this.renderFrame(!0),t.autoplay!==!1&&this.perf.visible&&this.play()),t.onReady?.(this),this}createLayers(){let t=this.stage,e=f=>{let d=document.createElement("div");return d.className=`tdc-layer ${f}`,t.appendChild(d),d},o=e("tdc-layer--webgl"),s=document.createElement("canvas");s.setAttribute("aria-hidden","true"),o.appendChild(s);let a=X("tdc-layer tdc-layer--world");t.appendChild(a);let i=e("tdc-layer--clouds"),r=X("tdc-layer tdc-layer--overlay");t.appendChild(r);let l=e("tdc-layer--tablet"),p=e("tdc-layer--brand"),c=X("tdc-layer tdc-layer--front");t.appendChild(c);let h=e("tdc-layer--fx");return h.innerHTML='<div class="tdc-fx-flash"></div><div class="tdc-fx-vignette"></div><div class="tdc-fx-grain"></div>',{webgl:o,canvas:s,world:a,clouds:i,overlay:r,tablet:l,brand:p,front:c,fx:h,flash:h.firstChild}}buildLayerCuts(t){let e=this.layers,[o]=m.dive,[s]=m.reveal,[a]=m.tablet,[i]=m.outside;t.set(e.webgl,{autoAlpha:1},0),t.to(e.webgl,{autoAlpha:0,duration:.1},o+.72),t.to(e.webgl,{autoAlpha:1,duration:.2},s+.3),t.set(e.overlay,{autoAlpha:1},0),t.set(e.overlay,{autoAlpha:0},o+.75),t.set(e.front,{autoAlpha:0},0),t.set(e.front,{autoAlpha:1},m.wave[0]-.01),t.fromTo(e.flash,{opacity:0},{opacity:.16,duration:.06,yoyo:!0,repeat:1},a+.96),t.fromTo(e.flash,{opacity:0},{opacity:.18,duration:.08,yoyo:!0,repeat:1},i+.74)}onResize(){let{W:t,H:e,profile:o}=this.responsive;this.three.setSize(t,e,o);for(let s of[this.layers.overlay,this.layers.front])s.setAttribute("viewBox",`0 0 ${t} ${e}`);this.layers.world.removeAttribute("viewBox"),this.stage.dataset.profile=o.name,this.stage.classList.toggle("tdc-is-portrait",this.responsive.portrait),this.brand.measure(),this.renderFrame(!0)}tick(t,e){this.timeline.time===this.lastT&&!this.dirty||(this.timeline.playing&&this.perf.sample(e/1e3),this.renderFrame(!1))}renderFrame(t){let e=this.timeline.time;this.lastT=e,this.dirty=!1;let o=e;for(let a of this.scenes)a.update(e,o);(this.layers.webgl.style.visibility!=="hidden"||t)&&this.three.render()}play(){this.userPaused=!1,this.timeline.ended?this.timeline.restart():this.timeline.play(),this.a11y.setPlaying(!0),this.a11y.setEnded(!1)}pause(t=!1){t&&(this.userPaused=!0),this.timeline.pause(),this.a11y.setPlaying(!1)}restart(){this.userPaused=!1,this.timeline.restart(),this.a11y.setPlaying(!0),this.a11y.setEnded(!1)}seek(t){this.userPaused=!0,this.timeline.pause(),this.timeline.seek(t),this.renderFrame(!0),this.a11y.setPlaying(!1)}showStill(){this.timeline.pause(),this.timeline.seek(Se),this.renderFrame(!0),this.a11y.setPlaying(!1),this.container.classList.add("tdc-is-still")}onVisible(t){if(this.timeline)if(t){if(this.userPaused||this.a11y.reducedMotion||this.options.autoplay===!1&&!this.started)return;this.timeline.ended||(this.started=!0,this.play())}else this.timeline.playing&&(this.timeline.pause(),this.a11y.setPlaying(!1))}onComplete(){this.a11y.setPlaying(!1),this.a11y.setEnded(!0),this.renderFrame(!0),this.options.onComplete?.(),this.options.loop&&setTimeout(()=>this.restart(),2500)}destroy(){this.gsap?.ticker.remove(this.tick),this.timeline?.dispose(),this.perf?.dispose(),this.responsive?.dispose(),this.scenes?.forEach(t=>t.dispose?.()),this.three?.dispose(),this.assets?.dispose(),Object.values(this.layers||{}).forEach(t=>t?.remove?.())}};export{ae as SceneManager,ct as TARGET_DURATION};
