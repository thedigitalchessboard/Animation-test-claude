import{a as W,b as x,c as z,d as V,e as Ot,f as Qt}from"./chunk-AYQGYZHK.js";var oe={logoMark:"assets/brand/tdc-logo-mark-dark.webp",logoHorizontal:"assets/brand/tdc-logo-horizontal-light.webp",logoTransparent:null,landMask:"assets/earth/land-mask.webp"},ft=class r{constructor({baseUrl:t,assets:e={},THREE:o=null,gsap:s=null}={}){this.baseUrl=t,this.paths={...oe,...e},this.injected={THREE:o,gsap:s},this.images={},this.textures=new Set}url(t){if(!t)return null;try{return new URL(t,this.baseUrl).href}catch{return t}}async loadLibraries(){let[t,e]=await Promise.all([this.injected.THREE||import("./three-JS7XIUQM.js"),this.injected.gsap||(window.gsap??import("./gsap-FC6IJHY2.js").then(o=>o.gsap))]);return this.THREE=t,this.gsap=e,{THREE:t,gsap:e}}loadImage(t,e){return new Promise((o,s)=>{let i=new Image;i.decoding="async",i.crossOrigin="anonymous",i.onload=()=>{this.images[t]=i,o(i)},i.onerror=()=>s(new Error(`[tdc-cinematic] could not load ${t}: ${e}`)),i.src=e})}async loadImages(){let t=this.paths,e=[this.loadImage("logoHorizontal",this.url(t.logoHorizontal)),this.loadImage("landMask",this.url(t.landMask))];if(t.logoTransparent?e.push(this.loadImage("logoTransparent",this.url(t.logoTransparent))):e.push(this.loadImage("logoMark",this.url(t.logoMark))),await Promise.all(e),this.logoHorizontalUrl=this.url(t.logoHorizontal),t.logoTransparent){let o=this.images.logoTransparent;this.brandLogo={url:this.url(t.logoTransparent),width:o.naturalWidth||1e3,height:o.naturalHeight||1e3}}else this.brandLogo=r.removeFlatBackground(this.images.logoMark);return this}static removeFlatBackground(t){let e=t.naturalWidth,o=t.naturalHeight,s=document.createElement("canvas");s.width=e,s.height=o;let i=s.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0);let a=i.getImageData(0,0,e,o),c=a.data,n=Math.max(4,Math.round(Math.min(e,o)*.04)),l=[],d=[],h=[],p=[];for(let L=0;L<o;L+=2)for(let R=0;R<e;R+=2){if(R>=n&&R<e-n&&L>=n&&L<o-n)continue;let P=(L*e+R)*4;l.push(c[P]),d.push(c[P+1]),h.push(c[P+2]),p.push(.299*c[P]+.587*c[P+1]+.114*c[P+2])}let f=(L,R)=>L.slice().sort((P,ct)=>P-ct)[Math.min(L.length-1,Math.floor(L.length*R))],u=[f(l,.5),f(d,.5),f(h,.5)],m=f(p,.995)+4,g=Math.max(1,255-m),k=e,$=o,b=0,y=0;for(let L=0;L<o;L++)for(let R=0;R<e;R++){let P=(L*e+R)*4,Z=(.299*c[P]+.587*c[P+1]+.114*c[P+2]-m)/g;if(Z=Z<=0?0:Z>=1?1:Z,Z>0){for(let X=0;X<3;X++)c[P+X]=Math.min(255,Math.max(0,(c[P+X]-u[X]*(1-Z))/Z));Z>.2&&(R<k&&(k=R),R>b&&(b=R),L<$&&($=L),L>y&&(y=L))}c[P+3]=Math.round(Z*255)}i.putImageData(a,0,0);let v=Math.round(Math.max(e,o)*.015);k=Math.max(0,k-v),$=Math.max(0,$-v),b=Math.min(e-1,b+v),y=Math.min(o-1,y+v);let C=b-k+1,E=y-$+1,S=document.createElement("canvas");return S.width=C,S.height=E,S.getContext("2d").drawImage(s,k,$,C,E,0,0,C,E),{url:S.toDataURL("image/png"),width:C,height:E}}dispose(){this.textures.forEach(t=>t.dispose?.()),this.textures.clear(),this.images={}}};var ut=class{constructor(t,{onComplete:e}={}){this.gsap=t,this.clock={t:0},this.tl=t.timeline({paused:!0,onComplete:e}),this.tl.fromTo(this.clock,{t:0},{t:36.6,duration:36.6,ease:"none"},0)}finalize(){let t=this.tl.duration();if(t>59){let e=t/36.6;this.tl.timeScale(e),console.warn(`[tdc-cinematic] timeline was ${t.toFixed(2)}s \u2014 time-scaled \xD7${e.toFixed(3)} to stay under ${59}s`)}return this.duration=this.tl.duration()/this.tl.timeScale(),this.duration}get time(){return this.clock.t}get playing(){return!this.tl.paused()&&this.tl.progress()<1}get ended(){return this.tl.progress()>=1}play(){this.tl.play()}pause(){this.tl.pause()}restart(){this.tl.restart()}seek(t){this.tl.seek(Math.max(0,Math.min(t,this.tl.duration())))}dispose(){this.tl.kill()}};var yt=class r{constructor(t,{forceProfile:e}={}){this.container=t,this.forceProfile=e,this.listeners=new Set,this.W=1,this.H=1,this.measure(),this.ro=new ResizeObserver(()=>{let o=this.profile.name,{W:s,H:i}=this;this.measure(),(s!==this.W||i!==this.H)&&this.listeners.forEach(a=>a(this,o!==this.profile.name))}),this.ro.observe(t)}measure(){let t=this.container.getBoundingClientRect();this.W=Math.max(1,Math.round(t.width)),this.H=Math.max(1,Math.round(t.height)),this.aspect=this.W/this.H,this.profile=Qt[this.forceProfile]||Qt[r.pick(this.W)],this.portrait=this.aspect<1.05,this.unit=Math.min(this.H,this.W*1.05)/900}static pick(t){return t<640?"mobile":t<1024?"tablet":"desktop"}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}dispose(){this.ro.disconnect(),this.listeners.clear()}};var tt=class{constructor(t,{onVisibleChange:e,threshold:o=.35}={}){this.container=t,this.onVisibleChange=e,this.inView=!1,this.pageVisible=!document.hidden,this.samples=[],this.level=0,this.degradeListeners=new Set,this.io=new IntersectionObserver(s=>{for(let i of s)this.inView=i.isIntersecting&&i.intersectionRatio>=o;this.emit()},{threshold:[0,o,.6,1]}),this.io.observe(t),this.onDocVis=()=>{this.pageVisible=!document.hidden,this.emit()},document.addEventListener("visibilitychange",this.onDocVis)}get visible(){return this.inView&&this.pageVisible}emit(){let t=this.visible;t!==this.lastVisible&&(this.lastVisible=t,this.onVisibleChange?.(t))}static cappedDpr(t){return Math.min(window.devicePixelRatio||1,t)}sample(t){if(t<=0||t>.5||(this.samples.push(t),this.samples.length<45))return;let e=this.samples.reduce((o,s)=>o+s,0)/this.samples.length;this.samples.length=0,e>1/38&&this.level<2&&(this.level+=1,this.degradeListeners.forEach(o=>o(this.level)))}onDegrade(t){this.degradeListeners.add(t)}dispose(){this.io.disconnect(),document.removeEventListener("visibilitychange",this.onDocVis),this.degradeListeners.clear()}};var mt=class{constructor(t,e,o){this.THREE=t,this.profile=o,this.renderer=new t.WebGLRenderer({canvas:e,antialias:o.antialias,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.setClearColor(0,0),this.scene=new t.Scene,this.camera=new t.PerspectiveCamera(35,16/9,.01,400),this.dprScale=1}setSize(t,e,o=this.profile){this.profile=o;let s=tt.cappedDpr(o.dprCap)*this.dprScale;this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.W=t,this.H=e}degrade(t){this.dprScale=t>=2?.6:.8,this.W&&this.setSize(this.W,this.H)}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(o=>{for(let s in o.uniforms||{})o.uniforms[s].value?.dispose?.();o.map?.dispose?.(),o.dispose()})}),this.renderer.dispose(),this.renderer.forceContextLoss?.()}};var ae="http://www.w3.org/2000/svg",Zt=0;function T(r="tdc"){return Zt+=1,`${r}-${Zt.toString(36)}`}function B(r,t={},e=null){let o=document.createElementNS(ae,r);for(let s in t)o.setAttribute(s,t[s]);return e&&e.appendChild(o),o}function J(r,t){let e=B("svg",{class:r,"aria-hidden":"true",focusable:"false",preserveAspectRatio:"xMidYMid slice"});return t&&e.setAttribute("viewBox",t),e}function D(r,t={}){let e=B("g",t);return e.innerHTML=r,e}function _(r){let t={};return r.querySelectorAll("[data-part]").forEach(e=>{t[e.getAttribute("data-part")]=e}),t}var w=r=>(Math.round(r*100)/100).toString();function M(r,t,e){if(!r)return;let o=`__${t}`;r[o]!==e&&(r[o]=e,r.setAttribute(t,e))}function A(r,t){M(r,"opacity",w(Math.max(0,Math.min(1,t))))}var j=class{constructor({root:t,parts:e,joints:o,face:s,state:i}){this.root=t,this.parts=e,this.joints=o,this.face=s,this.state={x:0,y:0,rot:0,scale:1,flipX:1,opacity:1,lookX:0,lookY:0,lid:0,browY:0,browTilt:0,turn:0,...Object.fromEntries(Object.keys(o).map(a=>[a,0])),...i},this.hooks=[]}onApply(t){return this.hooks.push(t),this}apply(t,e=0){let o=this.state,s=t?t(o.x,o.y,o.scale):{x:o.x,y:o.y,s:o.scale};if(M(this.root,"transform",`translate(${w(s.x)} ${w(s.y)}) rotate(${w(o.rot)}) scale(${w(s.s*o.flipX)} ${w(s.s)})`),A(this.root,o.opacity),M(this.root,"visibility",o.opacity<=.001?"hidden":"visible"),o.opacity<=.001)return;for(let a in this.joints){let c=this.parts[a];if(!c)continue;let[n,l]=this.joints[a];M(c,"transform",`rotate(${w(o[a])} ${n} ${l})`)}let i=this.face;if(i){let[a,c]=i.maxLook;for(let n of i.eyes){M(n.iris,"transform",`translate(${w(o.lookX*a)} ${w(o.lookY*c)})`);let l=Math.max(0,Math.min(1,o.lid));M(n.lid,"transform",`translate(0 ${w(-n.ry)}) scale(1 ${w(l+1e-4)}) translate(0 ${w(n.ry)})`),M(n.lash,"transform",`translate(0 ${w(l*n.ry*.35)}) scale(1 ${w(1-1.5*l)})`)}i.brows.forEach((n,l)=>{let d=l===0?1:-1;M(n.node,"transform",`translate(0 ${w(o.browY)}) rotate(${w(o.browTilt*d)} ${n.cx} ${n.cy})`)});for(let n in i.mouths)A(i.mouths[n],o[n]??0);i.features&&M(i.features,"transform",`translate(${w(o.turn*i.turnShift)} 0)`)}for(let a of this.hooks)a(o,e)}};function et(r){return r.match(/-?\d*\.?\d+/g).map(Number)}function gt(r){return r.replace(/-?\d*\.?\d+/g,"#")}function xt(r,t){let e=0;return r.replace(/#/g,()=>w(t[e++]))}var Y=class{constructor(t,e={}){this.root=t,this.state={x:0,y:0,rot:0,scale:1,sx:1,sy:1,opacity:1,...e}}apply(t){let e=this.state,o=t?t(e.x,e.y,e.scale):{x:e.x,y:e.y,s:e.scale};M(this.root,"transform",`translate(${w(o.x)} ${w(o.y)}) rotate(${w(e.rot)}) scale(${w(o.s*e.sx)} ${w(o.s*e.sy)})`),A(this.root,e.opacity),M(this.root,"visibility",e.opacity<=.001?"hidden":"visible")}};var ot="M22 121 H78 V114 Q78 106 69 104 H31 Q22 106 22 114 Z",G={pawn:ot+" M36 104 Q40 90 43 74 L37 72 Q33 68 38 65 L44 63 Q32 56 32 43 Q32 26 50 26 Q68 26 68 43 Q68 56 56 63 L62 65 Q67 68 63 72 L57 74 Q60 90 64 104 Z",rook:ot+" M33 104 L37 62 L31 57 L31 34 L40 34 L40 42 L46 42 L46 34 L54 34 L54 42 L60 42 L60 34 L69 34 L69 57 L63 62 L67 104 Z",knight:ot+" M31 104 Q30 88 40 77 Q48 68 47 60 Q41 62 35 66 Q28 69 24 63 Q20 57 26 50 Q34 40 38 33 Q42 25 49 21 L47 12 Q53 14 57 19 Q71 22 77 38 Q83 57 77 81 Q75 93 73 104 Z",bishop:ot+" M36 104 Q40 86 44 73 L38 71 Q34 67 40 64 L44 62 Q31 52 34 38 Q38 26 50 17 Q62 26 66 38 Q69 52 56 62 L60 64 Q66 67 62 71 L56 73 Q60 86 64 104 Z M50 3 A6 6 0 1 1 49.9 3 Z",queen:ot+" M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L41 57 L28 30 L40 44 L42 22 L50 40 L58 22 L60 44 L72 30 L59 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z",king:ot+" M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L42 57 Q29 47 31 37 Q34 28 50 31 Q66 28 69 37 Q71 47 58 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z M47 6 H53 V13 H60 V19 H53 V29 H47 V19 H40 V13 H47 Z"},ie={knight:'<circle cx="44" cy="35" r="2.6" fill="#0B1E3D"/><path d="M58 24 Q66 34 66 52" stroke="#0B1E3D" stroke-opacity=".35" stroke-width="2" fill="none"/>',bishop:'<path d="M55 34 L45 46" stroke="#0B1E3D" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round"/>',queen:'<circle cx="28" cy="29" r="4"/><circle cx="42" cy="21" r="4"/><circle cx="58" cy="21" r="4"/><circle cx="72" cy="29" r="4"/>',pawn:"",rook:"",king:""};function O(r,t,{shadow:e=!0,tone:o="gold"}={}){let s=`url(#${t})`,i=o==="navy"?"#050d1f":o==="ivory"?"#9aa6bb":"#7a5a22",a=ie[r].replace(/<circle /g,`<circle fill="${s}" stroke="${i}" stroke-width="1.4" `);return`
    <g transform="translate(-50 -120)">
      ${e?'<ellipse data-part="shadow" cx="50" cy="121" rx="30" ry="5" fill="#000" opacity=".28"/>':""}
      <path d="${G[r]}" fill="${s}" stroke="${i}" stroke-width="1.6" stroke-linejoin="round" fill-rule="nonzero"/>
      ${a}
      <path d="${G[r]}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1" transform="translate(-1.2 -1)"/>
    </g>`}function I(r){return`
    <linearGradient id="${r}-gold" x1="0" y1="0" x2="1" y2="0.25">
      <stop offset="0" stop-color="#F6E3A8"/><stop offset=".38" stop-color="#E0BC69"/>
      <stop offset=".7" stop-color="#B98D3C"/><stop offset="1" stop-color="#8A6424"/>
    </linearGradient>
    <linearGradient id="${r}-ivory" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#EDE9E0"/><stop offset="1" stop-color="#BFC5D2"/>
    </linearGradient>
    <linearGradient id="${r}-navy" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#3F5F9E"/><stop offset=".5" stop-color="#1A2F5C"/><stop offset="1" stop-color="#0A1631"/>
    </linearGradient>`}function Yt(r,t=256){let e=document.createElement("canvas");e.width=t,e.height=t;let o=e.getContext("2d"),s=t/150;o.translate(t/2-50*s,t*.06),o.scale(s,s);let i=new Path2D(G[r]);o.save(),o.shadowColor="rgba(242, 216, 146, 0.85)",o.shadowBlur=18*s,o.fillStyle="#E0BC69",o.fill(i),o.restore();let a=o.createLinearGradient(20,0,80,20);return a.addColorStop(0,"#FFF1C6"),a.addColorStop(.4,"#E6C475"),a.addColorStop(.75,"#B98D3C"),a.addColorStop(1,"#8A6424"),o.fillStyle=a,o.fill(i),o.lineWidth=1.6,o.strokeStyle="#7a5a22",o.stroke(i),r==="knight"&&(o.fillStyle="#0B1E3D",o.beginPath(),o.arc(44,35,2.6,0,Math.PI*2),o.fill()),r==="queen"&&(o.fillStyle=a,[[28,29],[42,21],[58,21],[72,29]].forEach(([c,n])=>{o.beginPath(),o.arc(c,n,4,0,Math.PI*2),o.fill(),o.stroke()})),e}var Ct="#3E1512";function St({logoUrl:r,tablet:t=!0,skin:e="#8C5A3C",hair:o="#2A1C16",patch:s="#D8B15E"}){let i=e,a=T("astro"),c=`
  <defs>
    <linearGradient id="${a}-suit" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#E4E8F0"/><stop offset="1" stop-color="#A9B3C6"/>
    </linearGradient>
    <radialGradient id="${a}-visor" cx=".35" cy=".3" r=".9">
      <stop offset="0" stop-color="#2A4F9E"/><stop offset=".6" stop-color="#10275A"/><stop offset="1" stop-color="#060F26"/>
    </radialGradient>
    <radialGradient id="${a}-glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#EAF3FF" stop-opacity=".9"/><stop offset="1" stop-color="#EAF3FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="${a}-visorClip"><ellipse cx="0" cy="-148" rx="35" ry="31"/></clipPath>
    <clipPath id="${a}-eye"><ellipse rx="3.4" ry="4"/></clipPath>
    <clipPath id="${a}-screen"><rect x="-36" y="-66" width="72" height="44" rx="3"/></clipPath>
  </defs>
  <g data-part="body">
    <rect x="-50" y="-118" width="100" height="112" rx="22" fill="#B9C2D2"/>
    <path d="M-44 -10 Q-78 6 -66 34 Q-30 48 6 36 Q14 22 2 8 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M44 -10 Q78 6 66 34 Q30 48 -6 36 Q-14 22 -2 8 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <ellipse cx="-68" cy="28" rx="13" ry="10" fill="#9AA6BB"/><ellipse cx="68" cy="28" rx="13" ry="10" fill="#9AA6BB"/>
    <path d="M-40 10 Q-47 -50 -40 -96 Q-30 -113 0 -115 Q30 -113 40 -96 Q47 -50 40 10 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <g transform="translate(-29 -86)">
      <circle r="8" fill="#0B1E3D" stroke="${s}" stroke-width="1.5"/>
      <path d="${G.knight}" transform="scale(.11) translate(-50 -66)" fill="#D8B15E"/>
    </g>
    ${t?`<path d="M-46 -92 Q-64 -60 -44 -40 L-14 -40 L-16 -52 L-34 -54 Q-36 -72 -30 -86 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M46 -92 Q64 -60 44 -40 L14 -40 L16 -52 L34 -54 Q36 -72 30 -86 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>`:`
    <path d="M-46 -92 Q-66 -60 -60 -24 Q-58 -4 -44 0 L-34 -10 Q-44 -30 -40 -60 Q-38 -76 -30 -86 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <circle cx="-44" cy="0" r="9.5" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
    <g data-part="armR">
      <path d="M30 -98 Q52 -106 60 -86 L71 -50 Q63 -36 50 -44 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
      <g data-part="foreR">
        <path d="M71 -52 Q60 -34 49 -44 L21 -90 Q25 -106 38 -102 Z" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
        <g transform="translate(27 -100)">
          <circle r="9.5" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
          <path data-part="thumb" d="M-2 -8 Q-3 -18 3 -18 Q7 -17 5 -8 Z" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.2" opacity="0"/>
        </g>
      </g>
    </g>`}
    <g data-part="tablet" ${t?"":'display="none"'}>
      <ellipse cx="0" cy="-44" rx="70" ry="44" fill="url(#${a}-glow)" opacity=".35"/>
      <rect x="-40" y="-70" width="80" height="52" rx="6" fill="#0B1E3D"/>
      <rect x="-36" y="-66" width="72" height="44" rx="3" fill="#FFFFFF"/>
      <g clip-path="url(#${a}-screen)">
        ${r?`<image href="${r}" x="-33" y="-63" width="66" height="38" preserveAspectRatio="xMidYMid meet"/>`:""}
      </g>
      <circle cx="-15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
      <circle data-part="tapGlow" cx="14" cy="-40" r="7" fill="#DDEBFF" opacity="0"/>
      <g data-part="gloveR"><circle cx="15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
        <path d="M15 -27 L15 -33" stroke="#F4F6FA" stroke-width="5" stroke-linecap="round"/></g>
    </g>
    <g data-part="head">
      <rect x="-24" y="-112" width="48" height="12" rx="4" fill="#C7CEDA"/>
      <circle cx="0" cy="-150" r="47" fill="url(#${a}-suit)" stroke="#9AA6BB" stroke-width="2"/>
      <ellipse cx="0" cy="-148" rx="37" ry="33" fill="#C7CEDA"/>
      <ellipse cx="0" cy="-148" rx="35" ry="31" fill="url(#${a}-visor)"/>
      <g clip-path="url(#${a}-visorClip)">
        <path d="M-21 -150 Q-22 -126 0 -122 Q22 -126 21 -150 Q20 -172 0 -173 Q-20 -172 -21 -150 Z" fill="${i}"/>
        <path d="M-22 -150 Q-24 -176 0 -178 Q24 -176 22 -150 Q16 -166 0 -166 Q-16 -166 -22 -150 Z" fill="${o}"/>
        <g data-part="features">
          ${[-8,8].map((h,p)=>`
          <g transform="translate(${h} -150)">
            <g clip-path="url(#${a}-eye)">
              <ellipse rx="3.4" ry="4" fill="#FFFDF8"/>
              <g data-part="iris${p}"><circle r="2.4" fill="#2A170E"/><circle cx=".8" cy="-1" r=".8" fill="#fff"/></g>
              <rect data-part="lid${p}" x="-4" y="-4" width="8" height="8" fill="${i}"/>
            </g>
            <path data-part="lash${p}" d="M-3.6 0 Q0 -8 3.6 0" stroke="#1A0E0A" stroke-width="1.3" fill="none"/>
          </g>`).join("")}
          <path data-part="browL" d="M-12 -157 Q-8 -160 -4 -158" stroke="${o}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="browR" d="M4 -158 Q8 -160 12 -157" stroke="${o}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="mSoft" d="M-5 -134 Q0 -130 5 -134" stroke="${Ct}" stroke-width="1.7" fill="none" stroke-linecap="round"/>
          <path data-part="mGrin" d="M-7 -135 Q0 -126 7 -135 Z" fill="${Ct}" opacity="0"/>
          <ellipse data-part="mO" cx="0" cy="-133" rx="3" ry="3.6" fill="${Ct}" opacity="0"/>
        </g>
        <ellipse cx="0" cy="-118" rx="40" ry="16" fill="#D8E8FF" opacity=".16"/>
      </g>
      <path d="M-26 -166 Q-12 -178 8 -176" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45" fill="none"/>
      <path d="M18 -126 Q28 -134 31 -146" stroke="#D8B15E" stroke-width="2" stroke-linecap="round" opacity=".5" fill="none"/>
    </g>
  </g>`,n=D(c,{class:"tdc-astronaut"}),l=_(n),d=new j({root:n,parts:l,joints:{head:[0,-108],body:[0,-40],tablet:[0,-44],armR:[42,-94],foreR:[60,-46]},face:{eyes:[0,1].map(h=>({lid:l[`lid${h}`],lash:l[`lash${h}`],iris:l[`iris${h}`],ry:4})),brows:[{node:l.browL,cx:-8,cy:-158},{node:l.browR,cx:8,cy:-158}],mouths:{mSoft:l.mSoft,mGrin:l.mGrin,mO:l.mO},features:l.features,turnShift:3,maxLook:[1,1.2]},state:{lookY:.8,lid:.25,mSoft:1,mGrin:0,mO:0,tap:0,thumb:0}});return d.onApply(h=>{M(l.gloveR,"transform",`translate(${w(-2*h.tap)} ${w(-14*h.tap)})`),A(l.tapGlow,h.tap*.8),l.thumb&&A(l.thumb,h.thumb)}),d}var U=class{constructor(t,{parseEase:e,logKeys:o=[],smooth:s=!0}={}){this.keys=t,this.logKeys=new Set(o),this.smooth=s,this.eases=t.map(i=>e(i.ease||"power2.inOut")),this.out={...t[0]},this.channels=Object.keys(t[0]).filter(i=>i!=="t"&&i!=="ease"&&typeof t[0][i]=="number"),s&&this.buildSplines()}buildSplines(){let t=this.keys.map(e=>e.t);this.splines={};for(let e of this.channels){let o=this.keys.map(c=>{let n=c[e]??this.keys[0][e];return this.logKeys.has(e)?Math.log(n):n}),s=t.length,i=[];for(let c=0;c<s-1;c++)i.push((o[c+1]-o[c])/(t[c+1]-t[c]||1e-6));let a=new Array(s);a[0]=0,a[s-1]=0;for(let c=1;c<s-1;c++)if(i[c-1]*i[c]<=0)a[c]=0;else{let n=t[c]-t[c-1],l=t[c+1]-t[c],d=2*l+n,h=l+2*n;a[c]=(d+h)/(d/i[c-1]+h/i[c])}this.splines[e]={ys:o,m:a}}this.ts=t}at(t){let e=this.keys,o=this.out,s=e.length-1;t<=e[0].t&&(t=e[0].t),t>=e[s].t&&(t=e[s].t);let i=0;for(;i<s-1&&t>e[i+1].t;)i++;let a=e[i],c=e[i+1],n=c.t-a.t||1e-6,l=Math.min(1,Math.max(0,(t-a.t)/n));if(this.smooth){let h=l*l,p=h*l,f=2*p-3*h+1,u=p-2*h+l,m=-2*p+3*h,g=p-h;for(let k of this.channels){let{ys:$,m:b}=this.splines[k],y=f*$[i]+u*n*b[i]+m*$[i+1]+g*n*b[i+1];o[k]=this.logKeys.has(k)?Math.exp(y):y}return o}let d=this.eases[i+1](l);for(let h of this.channels){let p=a[h],f=c[h]??p;o[h]=this.logKeys.has(h)?Math.exp(Math.log(p)+(Math.log(f)-Math.log(p))*d):p+(f-p)*d}return o}};var se=`
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
}`,re=`
varying vec3 vColor; varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float a = pow(core, 2.2) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`,ne=`
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
}`,le=`
varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(0.95, 0.85, 0.6, a);
}`;function ce(r){let t=r;return()=>((t=t*16807%2147483647)-1)/2147483646}var $t=class{constructor(t){this.ctx=t;let{THREE:e}=t,o=ce(11),s=t.responsive.profile,i=s.stars,a=new Float32Array(i*3),c=new Float32Array(i),n=new Float32Array(i),l=new Float32Array(i*3);for(let $=0;$<i;$++){let b=o()*2-1,y=o()*Math.PI*2,v=60+o()*60,C=Math.sqrt(1-b*b);a.set([v*C*Math.cos(y),v*b,v*C*Math.sin(y)-20],$*3);let E=o()<.06;c[$]=E?2.6+o()*2.2:.8+o()*1.4,n[$]=o();let S=o(),L=S<.08?[.95,.85,.57]:S<.3?[.72,.8,1]:[1,.98,.94];l.set(L,$*3)}let d=new e.BufferGeometry;d.setAttribute("position",new e.BufferAttribute(a,3)),d.setAttribute("aSize",new e.BufferAttribute(c,1)),d.setAttribute("aPhase",new e.BufferAttribute(n,1)),d.setAttribute("aColor",new e.BufferAttribute(l,3)),this.starUniforms={uTime:{value:0},uPixel:{value:1},uAlpha:{value:1}},this.stars=new e.Points(d,new e.ShaderMaterial({vertexShader:se,fragmentShader:re,uniforms:this.starUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.stars.frustumCulled=!1,t.three.scene.add(this.stars);let h=s.dust,p=new Float32Array(h*3),f=new Float32Array(h),u=new Float32Array(h);for(let $=0;$<h;$++)p.set([(o()-.5)*16,(o()-.5)*9,2+o()*14],$*3),f[$]=.6+o()*1.6,u[$]=o();let m=new e.BufferGeometry;m.setAttribute("position",new e.BufferAttribute(p,3)),m.setAttribute("aSize",new e.BufferAttribute(f,1)),m.setAttribute("aPhase",new e.BufferAttribute(u,1)),this.dustUniforms={uTime:{value:0},uPixel:{value:1},uAlpha:{value:.8}},this.dust=new e.Points(m,new e.ShaderMaterial({vertexShader:ne,fragmentShader:le,uniforms:this.dustUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.dust.frustumCulled=!1,t.three.scene.add(this.dust);let g=T("space");this.gid=g,this.overlayGroup=D(`<defs>${I(g)}
      <linearGradient id="${g}-beam" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#BFD8FF" stop-opacity=".55"/><stop offset="1" stop-color="#BFD8FF" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="${g}-under" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#6FA0FF" stop-opacity=".45"/><stop offset="1" stop-color="#6FA0FF" stop-opacity="0"/>
      </radialGradient></defs>`,{class:"tdc-space"}),t.layers.overlay.appendChild(this.overlayGroup),this.playerA=St({logoUrl:t.assets.logoHorizontalUrl}),this.playerB=St({tablet:!1,skin:"#EBC3A4",hair:"#C58A45"}),this.beam=B("path",{fill:`url(#${g}-beam)`,opacity:"0.8"},this.overlayGroup),this.overlayGroup.appendChild(this.playerA.root),this.overlayGroup.appendChild(this.playerB.root),Object.assign(this.playerA.state,{x:1.35,y:.66,scale:1.05,lookX:.6,lookY:.5}),Object.assign(this.playerB.state,{x:1.655,y:.66,scale:1.05,flipX:-1,lookX:.7,lookY:.5,lid:.15}),this.board={x:1.502,y:.53,s:1.05},this.boardEl=D(he(g),{class:"tdc-holo-board"}),this.overlayGroup.appendChild(this.boardEl),this.pieceLayer=B("g",{},this.overlayGroup);let k=[["rook","ivory",0,7],["king","ivory",6,7],["pawn","ivory",5,6],["pawn","ivory",1,6],["bishop","ivory",3,5],["queen","ivory",4,7],["pawn","gold",2,1],["pawn","gold",6,1],["rook","gold",7,0],["king","gold",4,0],["queen","gold",3,0]].sort(($,b)=>$[2]+$[3]-(b[2]+b[3]));this.pieces=k.map(([$,b,y,v])=>{let C=D(O($,`${g}-${b}`,{tone:b}));return this.pieceLayer.appendChild(C),{prop:new Y(C,{scale:.24}),i:y,j:v}}),this.knight=new Y(D(O("knight",`${g}-gold`)),{scale:.27}),this.overlayGroup.appendChild(this.knight.root),this.knightFrom=[1,2],this.knightTo=[2,4],Object.assign(this.knight.state,this.sq(...this.knightFrom)),this.selectRing=B("ellipse",{rx:"18",ry:"9.5",fill:"none",stroke:"#F2D892","stroke-width":"2",opacity:"0"},this.pieceLayer),this.fx={select:0,beam:.8,fade:1},this.buildCamera(),this.camNow={fx:.5,fy:.5,z:1},t.spaceCam=this.camNow,t.spacePlace=()=>this.makePlace()}sq(t,e){let o=this.board;return{x:o.x+(t-e)*17*o.s/1600,y:o.y+((t+e)*9-63)*o.s/900}}buildCamera(){let t=this.ctx.gsap.parseEase,[e,o]=x.coachFly,[s,i]=x.players,[,a]=x.surprise,[c,n]=x.fix,[,l]=x.sorry,[d,h]=x.farewell,[p]=x.dive;this.camTrack=new U([{t:0,fx:.5,fy:.5,z:1},{t:e,fx:.5,fy:.5,z:1},{t:o-.1,fx:.75,fy:.5,z:1.02},{t:s+.95,fx:1.502,fy:.5,z:1.14},{t:i,fx:1.502,fy:.49,z:1.18},{t:a,fx:1.53,fy:.4,z:1.24},{t:n,fx:1.51,fy:.4,z:1.3},{t:l,fx:1.505,fy:.4,z:1.3},{t:h,fx:1.4,fy:.46,z:1.12},{t:p+.6,fx:.62,fy:.52,z:1},{t:p+1.2,fx:.5,fy:.5,z:1}],{parseEase:t,logKeys:["z"]}),this.times={c0:e,c1:o,p0:s,p1:i,f0:c,fa0:d}}build(t){let[e]=x.players,[o]=x.bump,[s]=x.surprise,[i,a]=x.fix,[c]=x.sorry,[n,l]=x.farewell,[d]=x.dive,h=this.playerA.state,p=this.playerB.state,f=this.knight.state,u=this.sq(...this.knightFrom),m=this.sq(...this.knightTo),g=k=>t.to(h,{tap:1,duration:.16,yoyo:!0,repeat:1,ease:"sine.inOut"},k);t.to(p,{head:-5,duration:.6,yoyo:!0,repeat:1,ease:"sine.inOut"},e+.2),g(e+.55),t.to(this.fx,{select:1,duration:.25},e+.75),t.to(f,{y:u.y-.05,rot:-6,duration:.45,ease:"sine.out"},e+.8),t.to(h,{lookX:.8,lookY:-.2,duration:.3,ease:"sine.inOut"},e+.8),t.to(p,{lookX:.7,lookY:-.3,lid:0,browY:-1,duration:.3,ease:"sine.inOut"},e+.9),t.to(this.fx,{select:0,duration:.1},o+.02),t.to(f,{x:1.69,y:.17,rot:300,scale:.34,duration:1,ease:"power2.out"},o+.02),t.to([h,p],{mSoft:0,mGrin:0,mO:1,browY:-2.5,lid:0,duration:.14},o+.08),t.to(h,{lookX:1,lookY:-1,head:6,duration:.25,ease:"power2.out"},o+.08),t.to(p,{lookX:-.6,lookY:-1,head:-6,armR:10,duration:.25,ease:"power2.out"},o+.1),t.to(f,{x:1.695,y:.175,rot:340,duration:.3,ease:"sine.out"},i),t.to(f,{x:u.x+.004,y:u.y-.085,rot:360,scale:.27,duration:.55,ease:"power2.inOut"},i+.32),t.to(f,{y:u.y,rot:360,duration:.25,ease:"power2.in"},a-.28),t.set(f,{rot:0},a-.02),t.to([h,p],{lookX:0,lookY:-.5,head:0,duration:.25,ease:"sine.inOut"},i+.35),t.to([h,p],{lookX:.2,lookY:.3,duration:.25},a-.3),t.to(h,{lookX:.9,lookY:-1,duration:.25},c+.05),t.to(p,{lookX:-.9,lookY:-1,duration:.25},c+.1),t.to([h,p],{mO:0,mGrin:1,browY:0,lid:.3,duration:.2},c+.55),t.to(h,{head:7,duration:.3,yoyo:!0,repeat:1,ease:"sine.inOut"},c+.6),t.to(p,{armR:-40,foreR:70,thumb:1,head:-4,duration:.3,ease:"back.out(1.6)"},c+.7),t.to(p,{armR:0,foreR:0,thumb:0,lookX:.7,lookY:.5,head:0,mGrin:.4,mSoft:.6,duration:.35,ease:"sine.inOut"},n+.2),t.to(h,{lookX:.6,lookY:.5,head:0,mGrin:.5,mSoft:.5,duration:.3},n+.15),g(n+.3),t.to(f,{y:u.y-.04,duration:.2,ease:"sine.out"},n+.45),t.to(f,{x:m.x,duration:.4,ease:"sine.inOut"},n+.62),t.to(f,{y:m.y-.05,duration:.2,ease:"sine.out"},n+.62),t.to(f,{y:m.y,duration:.2,ease:"power2.in"},n+.82),t.to(this.fx,{fade:0,duration:.45,ease:"power1.in"},d+.2),this.bumpTime=o,this.d0=d}makePlace(){let{W:t,H:e,unit:o,profile:s,portrait:i}=this.ctx.responsive,a=this.camNow,c=o*a.z*(i?.92:1),n=s.charScale*(i?.85:1);return(l,d,h)=>({x:t/2+(l-a.fx)*1600*c,y:e/2+(d-a.fy)*900*c,s:h*c*n})}update(t,e){this.starUniforms.uTime.value=e,this.dustUniforms.uTime.value=e;let o=this.ctx.three.renderer.getPixelRatio();if(this.starUniforms.uPixel.value=o,this.dustUniforms.uPixel.value=o,this.dustUniforms.uAlpha.value=t<x.dive[0]+.1?.8:.35,Object.assign(this.camNow,this.camTrack.at(t)),t>x.dive[0]+.8&&t<x.reveal[0])return;let s=this.makePlace();this.overlayGroup.setAttribute("opacity",this.fx.fade.toFixed(3));let i=(u,m,g=.004)=>{let k=u.state,$=k.y,b=k.rot;k.y=$+Math.sin(e*1.1+m)*g,k.rot=b+Math.sin(e*.7+m)*1.5,u.apply(s,e),k.y=$,k.rot=b};i(this.playerA,0),i(this.playerB,2);let a=Math.sin(e*1.2)*.003,c=s(this.board.x,this.board.y+a,this.board.s);this.boardEl.setAttribute("transform",`translate(${c.x.toFixed(1)} ${c.y.toFixed(1)}) scale(${c.s.toFixed(4)})`);for(let u of this.pieces){let m=this.sq(u.i,u.j);u.prop.state.x=m.x,u.prop.state.y=m.y+a,u.prop.apply(s)}let n=this.knight.state,l=n.y;n.y=l+(t<this.bumpTime?a:0),this.knight.apply(s),n.y=l;let d=s(this.sq(...this.knightFrom).x,this.sq(...this.knightFrom).y+a,1);this.selectRing.setAttribute("transform",`translate(${d.x.toFixed(1)} ${d.y.toFixed(1)}) scale(${d.s.toFixed(3)})`),this.selectRing.setAttribute("opacity",(this.fx.select*(.7+.3*Math.sin(e*5))).toFixed(3));let h=s(this.playerA.state.x+.02,this.playerA.state.y-.05,1),p=s(this.board.x-136/1600,this.board.y+a,1),f=s(this.board.x,this.board.y+a+72/900,1);this.beam.setAttribute("d",`M${h.x.toFixed(1)} ${h.y.toFixed(1)} L${p.x.toFixed(1)} ${p.y.toFixed(1)} L${f.x.toFixed(1)} ${f.y.toFixed(1)} Z`)}dispose(){this.overlayGroup.remove()}};function he(r){let o="";for(let s=0;s<8;s++)for(let i=0;i<8;i++){let a=(s-i)*17,c=(s+i)*9-63;o+=`<path d="M${a} ${c-9} L${a+17} ${c} L${a} ${c+9} L${a-17} ${c} Z" fill="${(s+i)%2?"#2C5BC4":"#EDE7DA"}" fill-opacity="${(s+i)%2?.78:.86}"/>`}return`
    <ellipse cx="0" cy="102" rx="166" ry="50" fill="url(#${r}-under)"/>
    <path d="M-136 0 L0 72 L0 82 L-136 10 Z" fill="#132B57"/>
    <path d="M0 72 L136 0 L136 10 L0 82 Z" fill="#0B1E3D"/>
    ${o}
    <path d="M0 -72 L136 0 L0 72 L-136 0 Z" fill="none" stroke="#F2D892" stroke-width="1.6" stroke-opacity=".9"/>
    <path d="M-136 0 L0 72 L136 0" fill="none" stroke="#BFD8FF" stroke-width="1" stroke-opacity=".5" transform="translate(0 10)"/>`}var Ht=`
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  vUv = uv;
  vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,de=`
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
}`,pe=`
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
}`,fe=`
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
}`,ue=`
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
}`;function ht(r,t,e,o=1){let s=(e+180)/360*Math.PI*2,i=(90-t)/180*Math.PI;return new r.Vector3(-o*Math.cos(s)*Math.sin(i),o*Math.cos(i),o*Math.sin(s)*Math.sin(i))}function ye(r,t,e){let o=r*374761393+t*668265263+e*2147483647;return o=(o^o>>>13)*1274126177,((o^o>>>16)>>>0)/4294967295}function me(r,t,e){let o=Math.floor(r),s=Math.floor(t),i=Math.floor(e),a=r-o,c=t-s,n=e-i,l=a*a*(3-2*a),d=c*c*(3-2*c),h=n*n*(3-2*n),p=(u,m,g)=>u+(m-u)*g,f=(u,m,g)=>ye(o+u,s+m,i+g);return p(p(p(f(0,0,0),f(1,0,0),l),p(f(0,1,0),f(1,1,0),l),d),p(p(f(0,0,1),f(1,0,1),l),p(f(0,1,1),f(1,1,1),l),d),h)}var wt=class{constructor(t){this.ctx=t;let{THREE:e}=t,o=t.responsive.profile;this.sun=new e.Vector3(.82,.32,.48).normalize(),this.group=new e.Group,this.spin=new e.Group,this.group.add(this.spin),t.three.scene.add(this.group),this.halo=new e.Sprite(new e.SpriteMaterial({map:this.haloTexture(),transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,opacity:.85})),this.halo.scale.set(3.3,3.3,1),this.halo.renderOrder=-1,this.group.add(this.halo);let s=new e.CanvasTexture(this.earthCanvas(t.assets.images.landMask,o.earthTex));s.anisotropy=4,s.wrapS=e.RepeatWrapping,this.earthUniforms={uMap:{value:s},uSun:{value:this.sun.clone()},uDim:{value:1},uDots:{value:1}},this.earth=new e.Mesh(new e.SphereGeometry(1,o.name==="mobile"?64:96,o.name==="mobile"?48:72),new e.ShaderMaterial({vertexShader:Ht,fragmentShader:de,uniforms:this.earthUniforms})),this.spin.add(this.earth);let i=new e.CanvasTexture(this.cloudCanvas(o.cloudTex));i.wrapS=e.RepeatWrapping,this.cloudUniforms={uMap:{value:i},uSun:{value:this.sun.clone()},uAlpha:{value:.55}},this.clouds=new e.Mesh(new e.SphereGeometry(1.014,64,48),new e.ShaderMaterial({vertexShader:Ht,fragmentShader:pe,uniforms:this.cloudUniforms,transparent:!0,depthWrite:!1})),this.spin.add(this.clouds);let a=V.length,c=new Float32Array(a*3),n=new Float32Array(a),l=new Float32Array(a),d=new Float32Array(a);V.forEach((p,f)=>{ht(e,p.lat,p.lon,1.012).toArray(c,f*3),n[f]=p.home?.02:.05+f*37%23/23*.8,l[f]=p.home?1:0,d[f]=f*.137%1});let h=new e.BufferGeometry;h.setAttribute("position",new e.BufferAttribute(c,3)),h.setAttribute("aDelay",new e.BufferAttribute(n,1)),h.setAttribute("aHome",new e.BufferAttribute(l,1)),h.setAttribute("aPhase",new e.BufferAttribute(d,1)),this.nodeUniforms={uReveal:{value:0},uTime:{value:0},uPixel:{value:1},uBoost:{value:0}},this.nodes=new e.Points(h,new e.ShaderMaterial({vertexShader:fe,fragmentShader:ue,uniforms:this.nodeUniforms,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending})),this.spin.add(this.nodes),this.buildCameraTrack(),this.buildCloudLayer()}haloTexture(){let e=document.createElement("canvas");e.width=e.height=256;let o=e.getContext("2d"),s=o.createRadialGradient(256/2,256/2,256*.29,256/2,256/2,256/2);return s.addColorStop(0,"rgba(120,170,255,0.55)"),s.addColorStop(.18,"rgba(70,120,230,0.28)"),s.addColorStop(.5,"rgba(40,80,190,0.08)"),s.addColorStop(1,"rgba(20,40,120,0)"),o.fillStyle=s,o.fillRect(0,0,256,256),new this.ctx.THREE.CanvasTexture(e)}earthCanvas(t,e){let o=e/2,s=document.createElement("canvas");s.width=e,s.height=o;let i=s.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0,e,o);let c=i.getImageData(0,0,e,o).data,n=i.createImageData(e,o),l=n.data,d=(g,k)=>c[((k|0)*e+((g|0)%e+e)%e)*4]/255,h=e/256,p=h*.3,f=3,u=()=>((f=f*16807%2147483647)-1)/2147483646;for(let g=0;g<o;g++){let k=(.5-(g+.5)/o)*Math.PI,$=Math.max(Math.cos(k),.12),b=h/$,y=Math.floor(g/h),v=(y+.5)*h,C=g-v,E=y%2*b*.5;for(let S=0;S<e;S++){let L=(g*e+S)*4,R=c[L]/255,ct=(Math.floor((S-E)/b)+.5)*b+E,Z=(S-ct)*$,X=Math.sqrt(Z*Z+C*C),Tt=0;X<p+1&&d(ct,v)>.5&&(Tt=Math.max(0,Math.min(1,p+.6-X))),l[L]=R*255,l[L+1]=Tt*255,l[L+2]=0,l[L+3]=255}}let m=(g,k,$,b)=>{for(let y=Math.max(0,k-$);y<Math.min(o,k+$);y++)for(let v=g-$;v<g+$;v++){let C=(v%e+e)%e,E=Math.hypot(v-g,y-k)/$;if(E>1)continue;let S=(y*e+C)*4;l[S+2]=Math.min(255,l[S+2]+b*(1-E)*(1-E)*(c[S]>100?1:.15))}};for(let g=0;g<e*1.2;g++){let k=u()*e,$=o*(.18+u()*.6);d(k,$)>.5&&m(k|0,$|0,Math.max(1,e/1024),110+u()*120)}return V.forEach(g=>{m(Math.round((g.lon+180)/360*e),Math.round((90-g.lat)/180*o),Math.round(e/220),220)}),i.putImageData(n,0,0),s}cloudCanvas(t){let e=t/2,o=document.createElement("canvas");o.width=t,o.height=e;let s=o.getContext("2d"),i=s.createImageData(t,e),a=i.data;for(let c=0;c<e;c++){let n=c/e,l=(.5-n)*Math.PI,d=.55+.45*Math.abs(Math.sin(l*3));for(let h=0;h<t;h++){let p=h/t*Math.PI*2,f=Math.cos(p)*2.2,u=Math.sin(p)*2.2,m=n*4.4,g=0,k=.55,$=1;for(let v=0;v<4;v++)g+=me(f*$+11,m*$,u*$)*k,k*=.5,$*=2.1;let b=Math.max(0,Math.min(1,(g-.5)*2.6))*d,y=(c*t+h)*4;a[y]=a[y+1]=a[y+2]=b*255,a[y+3]=255}}return s.putImageData(i,0,0),o}buildCameraTrack(){let t=this.ctx.gsap.parseEase,[e,o]=x.space,[s,i]=x.coachFly,[,a]=x.players,[c]=x.dive,[n,l]=x.reveal,[,d]=x.brand;this.track=new U([{t:e,dist:26,camX:0,camY:.12,lat:12,lon:-44,earthY:0},{t:o-.3,dist:8,camX:0,camY:0,lat:15,lon:-10,earthY:0},{t:i,dist:7.1,camX:0,camY:-.05,lat:16,lon:4,earthY:0},{t:a,dist:6.8,camX:0,camY:-.1,lat:16,lon:14,earthY:0},{t:c,dist:6.5,camX:0,camY:-.1,lat:16,lon:26,earthY:0},{t:c+.62,dist:1.7,camX:0,camY:0,lat:z.lat,lon:z.lon,earthY:0},{t:c+1,dist:1.08,camX:0,camY:0,lat:z.lat,lon:z.lon,earthY:0},{t:n+.3,dist:1.08,camX:0,camY:0,lat:z.lat,lon:z.lon,earthY:0},{t:n+1.1,dist:2.9,camX:0,camY:0,lat:z.lat,lon:z.lon-8,earthY:0},{t:l-.5,dist:5.2,camX:0,camY:0,lat:20,lon:40,earthY:0},{t:l+.1,dist:5.1,camX:0,camY:0,lat:18,lon:46,earthY:0},{t:d-.1,dist:4.9,camX:0,camY:0,lat:-8,lon:42,earthY:-1.78},{t:36.6,dist:4.8,camX:0,camY:0,lat:-9,lon:50,earthY:-1.8}],{parseEase:t,logKeys:["dist"]}),this.f0=s}buildCloudLayer(){let t=this.ctx.layers.clouds,e=this.ctx.responsive.profile.name==="mobile"?10:18,o=5,s=()=>((o=o*16807%2147483647)-1)/2147483646;this.puffs=[];for(let i=0;i<e;i++){let a=document.createElement("div");a.className="tdc-cloud";let c=s()*Math.PI*2,n=.08+s()*.55;this.puffs.push({el:a,x:Math.cos(c)*n,y:Math.sin(c)*n*.7,depth:.12+i/e*1,w:.5+s()*.6,tint:s()}),a.style.setProperty("--tint",s()<.5?"0":"1"),t.appendChild(a)}this.haze=document.createElement("div"),this.haze.className="tdc-haze",t.appendChild(this.haze),this.cloud={c:0}}build(t){let[e,o]=x.dive,[s]=x.reveal,[i,a]=x.network,[c]=x.brand;t.fromTo(this.nodeUniforms.uReveal,{value:0},{value:1,duration:1.7,ease:"sine.inOut"},.8),t.to(this.nodeUniforms.uBoost,{value:1,duration:.3},i),t.fromTo(this.cloud,{c:0},{c:1.25,duration:.75,ease:"none"},e+.5),t.to(this.cloud,{c:0,duration:.6,ease:"none"},s+.2),t.to(this.earthUniforms.uDim,{value:.55,duration:.8,ease:"power2.inOut"},c),t.to(this.halo.material,{opacity:.45,duration:.8},c),this.diveEnd=o}update(t,e){let{camera:o}=this.ctx.three,{aspect:s,portrait:i}=this.ctx.responsive,a=this.track.at(t),c=s>=1.3?1:1+(1.3-s)*.8,n=Math.min(1,s/1.78),l=a.earthY*(i?1.22:1),d=this.ctx.spaceCam,h=d&&t<x.dive[0]+1.2?(d.fx-.5)*3*n:0,p=a.camX*n+h;o.position.set(p,a.camY,a.dist*(a.dist>2.2?c:1)),o.lookAt(p,a.camY,0),this.group.position.y=l,this.earthUniforms.uDots.value=Math.min(1,Math.max(0,(a.dist-1.4)/1.4));let f=a.lat*Math.PI/180,m=(a.lon+180)/360*Math.PI*2,g=Math.atan2(-Math.cos(m),Math.sin(m));this.spin.rotation.set(f,-g,0,"XYZ"),this.clouds.rotation.y=t*.012,this.nodeUniforms.uTime.value=e,this.nodeUniforms.uPixel.value=this.ctx.three.renderer.getPixelRatio()*(this.ctx.three.H/900),this.earthUniforms.uSun.value.copy(this.sun),this.cloudUniforms.uSun.value.copy(this.sun),this.updateClouds()}updateClouds(){let t=this.cloud.c,e=this.ctx.layers.clouds,o=t>.001&&t<1.249;if(e.style.visibility=o?"visible":"hidden",!o)return;let{W:s,H:i}=this.ctx.responsive,a=Math.max(s,i);for(let n of this.puffs){let l=n.depth-t+.25;if(l<=.03){n.el.style.opacity="0";continue}let d=.22/l,h=s/2+n.x*d*a,p=i/2+n.y*d*a,f=n.w*d*a,u=Math.min(1,(l-.03)/.12),m=Math.min(1,Math.max(0,(1.1-l)/.4));n.el.style.opacity=(u*m).toFixed(3),n.el.style.transform=`translate3d(${(h-f/2).toFixed(1)}px, ${(p-f*.3).toFixed(1)}px, 0) scale(${(f/100).toFixed(3)}, ${(f*.6/100).toFixed(3)})`}let c=Math.max(0,1-Math.abs(t-.62)/.3);this.haze.style.opacity=(c*.9).toFixed(3)}dispose(){this.puffs.forEach(t=>t.el.remove()),this.haze.remove()}};var it="#F7F5F0",ge="#D8B15E",dt="#5A2020";function _t(r,t,e){return`
    <path d="M-44 -136 Q-56 -118 -56 -96 L-54 -72 L-38 -72 L-36 -100 Q-34 -122 -28 -134 Z" fill="url(#PJ)"/>
    <g data-part="fore${r}">
      <path d="M-54 -77 L-38 -77 L-41 -26 L-53 -26 Z" fill="url(#PJ)"/>
      <path d="M-54.5 -31 L-39.5 -31 L-40 -22 L-54 -22 Z" fill="${it}"/>
      <g data-part="hand${r}">
        <g data-part="relax${r}">
          <path d="M-54 -23 Q-56 -8 -50 -4 Q-44 -2 -41 -8 Q-39 -16 -40 -23 Z" fill="${t}"/>
          <path d="M-41 -18 Q-35 -16 -36 -11 Q-38 -9 -41 -12 Z" fill="${e}"/>
        </g>
        <g data-part="point${r}" opacity="0">
          <path d="M-54 -23 Q-55 -11 -49 -9 Q-42 -9 -40 -23 Z" fill="${t}"/>
          <path d="M-50 -11 L-49.5 3 Q-47.5 6 -45.5 3 L-45.5 -11 Z" fill="${t}"/>
        </g>
      </g>
    </g>`}var at=(r,t,e=1)=>`<path d="M${r} ${t-4*e} L${r+1.2*e} ${t-1.2*e} L${r+4*e} ${t} L${r+1.2*e} ${t+1.2*e} L${r} ${t+4*e} L${r-1.2*e} ${t+1.2*e} L${r-4*e} ${t} L${r-1.2*e} ${t-1.2*e} Z"/>`,xe={puffs:(r,t)=>({back:`<path d="M-50 -152 Q-62 -170 -56 -196 Q-64 -226 -44 -246 Q-36 -268 -8 -266 Q18 -274 36 -256 Q60 -246 58 -218 Q66 -194 56 -172 Q60 -156 48 -148 Q40 -140 30 -150 L-30 -150 Q-40 -140 -50 -152 Z" fill="${r}"/>
      <g transform="translate(-44 -262) rotate(-18)"><path d="${zt}" fill="${r}"/></g>
      <g transform="translate(44 -262) rotate(18) scale(-1 1)"><path d="${zt}" fill="${r}"/></g>
      <ellipse cx="-33" cy="-246" rx="7" ry="4.5" transform="rotate(-38 -33 -246)" fill="${t}"/>
      <ellipse cx="33" cy="-246" rx="7" ry="4.5" transform="rotate(38 33 -246)" fill="${t}"/>`,front:`<path d="M-42 -206 Q-46 -244 -12 -252 Q24 -258 42 -232 Q46 -220 42 -206 Q38 -222 28 -228 Q22 -218 12 -226 Q4 -216 -6 -226 Q-14 -216 -24 -226 Q-32 -218 -42 -206 Z" fill="${r}"/>
      <path d="M-20 -244 Q-4 -250 12 -246" stroke="#4E3428" stroke-width="1.6" fill="none" stroke-linecap="round"/>`}),bob:r=>({back:`<path d="M-52 -160 Q-60 -214 -44 -246 Q-24 -272 0 -270 Q24 -272 44 -246 Q60 -214 52 -160 Q40 -150 26 -156 L-26 -156 Q-40 -150 -52 -160 Z" fill="${r}"/>`,front:`<path d="M-43 -206 Q-46 -254 0 -258 Q46 -254 43 -206 Q40 -222 32 -226 L-32 -226 Q-40 -222 -43 -206 Z" fill="${r}"/>
      <path d="M-24 -250 Q0 -256 22 -250" stroke="#fff" stroke-opacity=".18" stroke-width="3" fill="none" stroke-linecap="round"/>`}),ponytail:(r,t)=>({back:`<path d="M26 -250 Q70 -262 74 -214 Q76 -176 58 -150 Q62 -186 52 -214 Q46 -236 26 -236 Z" fill="${r}"/>
      <ellipse cx="34" cy="-248" rx="7" ry="5" fill="${t}"/>
      <path d="M-46 -196 Q-52 -250 0 -262 Q48 -258 46 -196 Z" fill="${r}"/>`,front:`<path d="M-43 -204 Q-44 -250 -4 -258 Q40 -258 44 -214 Q30 -236 4 -230 Q-24 -226 -43 -204 Z" fill="${r}"/>`}),short:r=>({back:`<path d="M-45 -196 Q-50 -254 -6 -262 Q40 -264 46 -220 Q48 -206 45 -194 Z" fill="${r}"/>`,front:`<path d="M-43 -208 Q-46 -250 -8 -258 Q34 -262 45 -228 Q46 -216 43 -206 Q38 -228 22 -232 Q2 -240 -18 -232 Q-34 -226 -43 -208 Z" fill="${r}"/>
      <path d="M-18 -250 Q6 -258 28 -248" stroke="#fff" stroke-opacity=".15" stroke-width="3" fill="none" stroke-linecap="round"/>`}),coily:r=>({back:`<path d="M-48 -200 a12 12 0 0 1 2 -22 a13 13 0 0 1 12 -22 a13 13 0 0 1 20 -12 a13 13 0 0 1 22 0 a13 13 0 0 1 20 12 a13 13 0 0 1 12 22 a12 12 0 0 1 2 22 Z" fill="${r}"/>`,front:`<path d="M-43 -206 Q-44 -236 -30 -240 a8 8 0 0 1 14 -6 a8 8 0 0 1 16 -2 a8 8 0 0 1 16 2 a8 8 0 0 1 14 6 Q44 -236 43 -206 Q36 -226 0 -228 Q-36 -226 -43 -206 Z" fill="${r}"/>`}),hijab:(r,t,e)=>({back:`<path d="M-56 -150 Q-62 -206 -48 -244 Q-26 -276 0 -276 Q26 -276 48 -244 Q62 -206 56 -150 Q40 -128 0 -126 Q-40 -128 -56 -150 Z" fill="${e}"/>`,front:`<path d="M-44 -196 Q-44 -250 0 -258 Q44 -250 44 -196 Q44 -176 36 -162 Q46 -186 40 -214 Q30 -240 0 -242 Q-30 -240 -40 -214 Q-46 -186 -36 -162 Q-44 -176 -44 -196 Z" fill="${e}"/>
      <path d="M-38 -214 Q0 -236 38 -214" stroke="${t}" stroke-width="2.4" fill="none" opacity=".8"/>
      <path d="M-40 -164 Q-30 -148 0 -146 Q30 -148 40 -164 Q44 -138 30 -128 L-30 -128 Q-44 -138 -40 -164 Z" fill="${e}"/>`})},kt={aiko:{skin:"#F2CFB0",skinShade:"#D9AE8C",hair:"#16110F",hairStyle:"bob",top:"#C9474F",topDark:"#9E2F37",pattern:"none",collar:!1},mateo:{skin:"#C98D62",skinShade:"#A56D45",hair:"#3A2418",hairStyle:"short",top:"#E0B24E",topDark:"#B98A2E",pattern:"none",collar:!1},amani:{skin:"#6E4129",skinShade:"#56301D",hair:"#120B08",hairStyle:"coily",top:"#F7F5F0",topDark:"#C9CED9",pattern:"knight",collar:!1},emma:{skin:"#F7D6BD",skinShade:"#E0B597",hair:"#D9A955",hairStyle:"ponytail",top:"#3C62B8",topDark:"#27468F",pattern:"none",collar:!1},layla:{skin:"#D7A07B",skinShade:"#B9805C",hair:"#1B120E",hairStyle:"hijab",cloth:"#1D3F84",top:"#2C5BC4",topDark:"#1A3A78",pattern:"none",collar:!1},liam:{skin:"#F4D3BB",skinShade:"#DDB399",hair:"#B5562B",hairStyle:"short",top:"#2E8B6E",topDark:"#1F6450",pattern:"none",collar:!1}},zt="M-19 4 a9 9 0 0 1 -2 -14 a10 10 0 0 1 12 -10 a10 10 0 0 1 16 2 a10 10 0 0 1 8 14 a10 10 0 0 1 -6 13 a10 10 0 0 1 -14 3 a10 10 0 0 1 -14 -8 Z";function st(r={}){let t={skin:"#E0A67E",skinShade:"#C4865F",hair:"#2B1911",hairStyle:"puffs",top:"#3C62B8",topDark:"#27468F",topLight:null,pattern:"stars",collar:!0,cloth:"#1D3F84",...r},e=t.skin,o=t.skinShade,s=t.hair,i=xe[t.hairStyle](s,ge,t.cloth),a=T("girl"),c=`
  <defs>
    <linearGradient id="${a}-pj" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${t.topLight||t.top}" stop-opacity="1"/><stop offset=".6" stop-color="${t.top}"/><stop offset="1" stop-color="${t.topDark}"/>
    </linearGradient>
    <radialGradient id="${a}-skin" cx=".4" cy=".35" r=".78">
      <stop offset="0" stop-color="#EDB891"/><stop offset=".72" stop-color="${e}"/><stop offset="1" stop-color="${o}"/>
    </radialGradient>
    <radialGradient id="${a}-iris" cx=".45" cy=".35" r=".7">
      <stop offset="0" stop-color="#8A5530"/><stop offset="1" stop-color="#3A2112"/>
    </radialGradient>
    <radialGradient id="${a}-screen" cx=".5" cy="1.05" r=".95">
      <stop offset="0" stop-color="#FFF6E0" stop-opacity=".7"/><stop offset=".5" stop-color="#DCE9FF" stop-opacity=".28"/><stop offset="1" stop-color="#9DBCF5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${a}-spill" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F4F9FF" stop-opacity=".95"/><stop offset="1" stop-color="#CFE2FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${a}-beam" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#E6F0FF" stop-opacity=".5"/><stop offset="1" stop-color="#E6F0FF" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${a}-eye"><ellipse cx="0" cy="0" rx="8.6" ry="10"/></clipPath>
    <clipPath id="${a}-face"><path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z"/></clipPath>
  </defs>
  <g data-part="body">
    <path d="M-38 0 Q-44 -64 -41 -116 Q-38 -136 -16 -142 L16 -142 Q38 -136 41 -116 Q44 -64 38 0 Z" fill="url(#${a}-pj)"/>
    ${t.pattern==="stars"?`<g fill="${it}" opacity=".8">${at(-22,-100)}${at(18,-72)}${at(-12,-40,.8)}${at(24,-26,.9)}${at(-28,-14,.7)}${at(8,-118,.7)}</g>
    <circle cx="0" cy="-104" r="2.6" fill="${it}"/><circle cx="0" cy="-80" r="2.6" fill="${it}"/><circle cx="0" cy="-56" r="2.6" fill="${it}"/>`:""}
    ${t.pattern==="knight"?`<path d="${G.knight}" transform="translate(-13 -104) scale(.26)" fill="#1D3F84"/>`:""}
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -133 -10 -138 Z" fill="${o}"/>
    <path d="M-9.5 -156 Q0 -148 9.5 -156 L9.5 -149 Q0 -143 -9.5 -149 Z" fill="#A86B48" opacity=".5"/>
    ${t.collar?`<path d="M-17 -142 Q-24 -124 -5 -123 Q1 -130 0 -139 Z M17 -142 Q24 -124 5 -123 Q-1 -130 0 -139 Z" fill="${it}"/>`:`<path d="M-15 -142 Q0 -128 15 -142" stroke="${t.topDark}" stroke-width="4" fill="none"/>`}
    <g data-part="held" opacity="0">
      <rect x="-60" y="-126" width="120" height="80" rx="9" fill="#13244A" stroke="#2C4A86" stroke-width="2.5"/>
      <circle cx="0" cy="-118" r="2.2" fill="#0A1430"/>
      <g transform="translate(0 -86)">
        <circle r="12" fill="none" stroke="#D8B15E" stroke-width="1.8" opacity=".85"/>
        <path d="${G.knight}" transform="scale(.15) translate(-50 -66)" fill="#D8B15E"/>
      </g>
    </g>
    <g data-part="armL">${_t("L",e,o)}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${_t("R",e,o)}</g></g>
    <g data-part="head">
      ${i.back}
      ${t.hairStyle==="hijab"?"":`<ellipse cx="-41" cy="-200" rx="6" ry="9" fill="${o}"/><ellipse cx="41" cy="-200" rx="6" ry="9" fill="${o}"/>`}
      <path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z" fill="url(#${a}-skin)"/>
      <path d="M24 -206 Q40 -186 22 -162 Q36 -178 37 -200 Z" fill="${o}" opacity=".35"/>
      <ellipse cx="-22" cy="-192" rx="6" ry="3.4" fill="#FFF1E4" opacity=".25"/>
      <g data-part="features">
        ${[-16,16].map((h,p)=>`
        <g transform="translate(${h} -200)">
          <g clip-path="url(#${a}-eye)">
            <ellipse rx="8.6" ry="10" fill="#FFFDF8"/>
            <g data-part="iris${p}">
              <circle r="6.8" fill="url(#${a}-iris)"/><circle data-part="pupil${p}" r="3.4" fill="#120906"/>
              <circle cx="2.3" cy="-3" r="2.5" fill="#fff"/><circle cx="-2.6" cy="2.6" r="1.1" fill="#fff"/>
              <rect data-part="reflect${p}" x="-4.6" y="1" width="3.6" height="2.4" rx=".6" fill="#E4F1FF" opacity="0"/>
            </g>
            <rect data-part="lid${p}" x="-10" y="-10" width="20" height="20" fill="${e}"/>
          </g>
          <path data-part="lash${p}" d="M-9.4 0 Q0 -20 9.4 0 ${p?"M8.6 -2.4 L11.6 -5":"M-8.6 -2.4 L-11.6 -5"}" stroke="#1C120D" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path data-part="sparkle${p}" transform="scale(0)" d="M0 -5 L1.1 -1.1 L5 0 L1.1 1.1 L0 5 L-1.1 1.1 L-5 0 L-1.1 -1.1 Z" fill="#FFF6D6"/>
        </g>`).join("")}
        <path data-part="browL" d="M-24 -217 Q-17 -222.5 -9 -219" stroke="${s}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M9 -219 Q17 -222.5 24 -217" stroke="${s}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path d="M-1 -192 Q-3.6 -184 0.6 -183" stroke="${o}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="-26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/><circle cx="26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/>
        <path data-part="mSleepy" d="M-5 -172 Q0 -170.5 5 -172" stroke="${dt}" stroke-width="1.9" fill="none" stroke-linecap="round"/>
        <g data-part="mYawn" opacity="0"><ellipse cx="0" cy="-171" rx="5.2" ry="7.2" fill="${dt}"/><ellipse cx="0" cy="-167" rx="3.2" ry="2" fill="#D0676A"/></g>
        <ellipse data-part="mO" cx="0" cy="-172" rx="3.2" ry="3.8" fill="${dt}" opacity="0"/>
        <path data-part="mSoft" d="M-8 -175 Q0 -167.5 8 -175" stroke="${dt}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0"/>
        <g data-part="mSmile" opacity="0">
          <path d="M-13 -176 Q0 -157 13 -176 Q0 -172 -13 -176 Z" fill="${dt}"/>
          <path d="M-11.5 -175.4 Q0 -172.2 11.5 -175.4 Q10 -172.8 8.5 -172 Q0 -170.5 -8.5 -172 Q-10 -172.8 -11.5 -175.4 Z" fill="#fff"/>
          <path d="M-5 -164.5 Q0 -168 5 -164.5 Q0 -162.8 -5 -164.5 Z" fill="#D0676A"/>
        </g>
      </g>
      ${i.front}
      <path data-part="faceLight" clip-path="url(#${a}-face)" d="M-60 -270 H60 V-140 H-60 Z" fill="url(#${a}-screen)" opacity="0" style="mix-blend-mode:screen"/>
    </g>
    <g data-part="spill" opacity="0" style="mix-blend-mode:screen">
      <ellipse cx="0" cy="-138" rx="96" ry="30" fill="url(#${a}-spill)"/>
      <path d="M-56 -128 L-70 -210 L70 -210 L56 -128 Z" fill="url(#${a}-beam)" opacity=".55"/>
    </g>
  </g>`.replace(/url\(#PJ\)/g,`url(#${a}-pj)`),n=D(c,{class:"tdc-girl"}),l=_(n),d=new j({root:n,parts:l,joints:{armL:[-38,-128],foreL:[-46,-74],handL:[-47,-23],armR:[-38,-128],foreR:[-46,-74],handR:[-47,-23],head:[0,-150],body:[0,0]},face:{eyes:[0,1].map(h=>({lid:l[`lid${h}`],lash:l[`lash${h}`],iris:l[`iris${h}`],ry:10})),brows:[{node:l.browL,cx:-16,cy:-219},{node:l.browR,cx:16,cy:-219}],mouths:{mSleepy:l.mSleepy,mYawn:l.mYawn,mO:l.mO,mSoft:l.mSoft,mSmile:l.mSmile},features:l.features,turnShift:7,maxLook:[2.4,2]},state:{armL:8,armR:8,lid:1,mSleepy:1,mYawn:0,mO:0,mSoft:0,mSmile:0,handPointL:0,handPointR:0,sparkle:0,faceLight:0,reflect:0,pupil:1,breathe:0,held:0,heldX:0,heldY:0,heldRot:0,spill:0}});return d.onApply((h,p)=>{for(let g of["L","R"])A(l[`point${g}`],h[`handPoint${g}`]),A(l[`relax${g}`],1-h[`handPoint${g}`]);A(l.faceLight,h.faceLight),A(l.held,h.held),M(l.held,"transform",`translate(${w(h.heldX)} ${w(h.heldY)}) rotate(${w(h.heldRot)} 0 -86)`),A(l.spill,h.spill);let f=h.sparkle*(.88+.12*Math.sin(p*5))*Math.max(0,1-h.lid*1.6),u=h.lookX*2.4,m=h.lookY*2;M(l.sparkle0,"transform",`translate(${w(2.3+u)} ${w(-3+m)}) rotate(${w(p*25)}) scale(${w(f)})`),M(l.sparkle1,"transform",`translate(${w(2.3+u)} ${w(-3+m)}) rotate(${w(-p*25)}) scale(${w(f)})`),A(l.reflect0,h.reflect),A(l.reflect1,h.reflect),M(l.pupil0,"r",w(3.4*h.pupil)),M(l.pupil1,"r",w(3.4*h.pupil)),h.breathe&&M(l.body,"transform",`rotate(${w(h.body)} 0 0) scale(1 ${w(1+Math.sin(p*2.2)*.01*h.breathe)})`)}),d}var It={jp:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#fff"/><circle cx="${r+11}" cy="${t+7.5}" r="4.4" fill="#BC002D"/>`,ke:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#006600"/><rect x="${r}" y="${t}" width="22" height="5" fill="#111"/><rect x="${r}" y="${t+5}" width="22" height="5" fill="#fff"/><rect x="${r}" y="${t+6}" width="22" height="3" fill="#BB0000"/>`,ae:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#fff"/><rect x="${r}" y="${t}" width="22" height="5" fill="#00732F"/><rect x="${r}" y="${t+10}" width="22" height="5" fill="#111"/><rect x="${r}" y="${t}" width="6" height="15" fill="#FF0000"/>`,de:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="5" fill="#111"/><rect x="${r}" y="${t+5}" width="22" height="5" fill="#DD0000"/><rect x="${r}" y="${t+10}" width="22" height="5" fill="#FFCE00"/>`,gb:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#012169"/><path d="M${r} ${t} L${r+22} ${t+15} M${r+22} ${t} L${r} ${t+15}" stroke="#fff" stroke-width="3"/><path d="M${r+11} ${t} V${t+15} M${r} ${t+7.5} H${r+22}" stroke="#fff" stroke-width="4.5"/><path d="M${r+11} ${t} V${t+15} M${r} ${t+7.5} H${r+22}" stroke="#C8102E" stroke-width="2.4"/>`,br:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#009C3B"/><path d="M${r+11} ${t+2} L${r+20} ${t+7.5} L${r+11} ${t+13} L${r+2} ${t+7.5} Z" fill="#FFDF00"/><circle cx="${r+11}" cy="${t+7.5}" r="3.3" fill="#002776"/>`};var $e=[{kid:"aiko",flag:"jp",lat:35.7,lon:139.7,bg:"#FBE3D9",dx:90,dy:-60},{kid:"layla",flag:"ae",lat:25.2,lon:55.3,bg:"#E2EAFB",dx:105,dy:-40},{kid:"amani",flag:"ke",lat:-1.3,lon:36.8,bg:"#FDF1D6",dx:100,dy:55},{kid:"emma",flag:"de",lat:52.5,lon:13.4,bg:"#E3F1E6",dx:60,dy:-120},{kid:"liam",flag:"gb",lat:51.5,lon:-.1,bg:"#F3E6FB",dx:-115,dy:-70}],we=`
varying float vT;
void main(){
  vT = uv.x;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ke=`
uniform float uProgress; uniform float uAlpha; uniform float uTime; uniform vec3 uColor;
varying float vT;
void main(){
  if (vT > uProgress) discard;
  float head = smoothstep(uProgress - 0.12, uProgress, vT) * step(uProgress, 0.999);
  float pulse = pow(0.5 + 0.5 * sin((vT * 3.0 - uTime * 1.4) * 6.2831), 8.0) * 0.6;
  vec3 col = mix(uColor, vec3(1.0, 0.98, 0.9), head + pulse * 0.5);
  float a = uAlpha * (0.5 + 0.5 * head + pulse);
  gl_FragColor = vec4(col, a);
}`,be=`
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
}`,bt=class{constructor(t,e){this.ctx=t,this.earth=e;let{THREE:o}=t,s=V.map(y=>ht(o,y.lat,y.lon,1.01)),i=V.findIndex(y=>y.home),a=new o.ShaderMaterial({vertexShader:we,fragmentShader:ke,uniforms:{uProgress:{value:0},uAlpha:{value:.9},uTime:{value:0},uColor:{value:new o.Color(.95,.8,.45)}},transparent:!0,depthWrite:!1,blending:o.AdditiveBlending}),c=(y,v,C)=>{let E=y.clone().add(v).multiplyScalar(.5),S=y.angleTo(v);E.normalize().multiplyScalar(1.01+S*.28);let L=new o.QuadraticBezierCurve3(y,E,v),R=new o.Mesh(new o.TubeGeometry(L,48,C,5,!1),a.clone());return R.userData.curve=L,R.userData.len=S,this.earth.spin.add(R),R};this.early=Ot.map(([y,v])=>c(s[y],s[v],.0038)),this.global=s.map((y,v)=>({p:y,i:v})).filter(({i:y})=>y!==i).map(({p:y})=>c(s[i],y,.0042)),a.dispose(),this.pieces=[],V.forEach((y,v)=>{if(!y.piece)return;let C=new o.CanvasTexture(Yt(y.piece,256)),E=new o.Sprite(new o.SpriteMaterial({map:C,transparent:!0,depthWrite:!1}));E.center.set(.5,.05),E.position.copy(ht(o,y.lat,y.lon,1.03)),E.scale.set(1e-4,1e-4,1),E.userData.pop={s:0},this.earth.spin.add(E),this.pieces.push(E)});let n=t.responsive.profile.converge,l=[...this.global,...this.early],d=new Float32Array(n*3),h=new Float32Array(n),p=new Float32Array(n),f=9,u=()=>((f=f*16807%2147483647)-1)/2147483646,m=new o.Vector3;for(let y=0;y<n;y++)l[y%l.length].userData.curve.getPoint(u(),m),m.toArray(d,y*3),h[y]=u(),p[y]=u();let g=new o.BufferGeometry;g.setAttribute("position",new o.BufferAttribute(new Float32Array(n*3),3)),g.setAttribute("aStart",new o.BufferAttribute(d,3)),g.setAttribute("aDelay",new o.BufferAttribute(h,1)),g.setAttribute("aSeed",new o.BufferAttribute(p,1)),this.convUniforms={uEarth:{value:new o.Matrix4},uTarget:{value:new o.Vector3},uP:{value:0},uPixel:{value:1},uTime:{value:0}},this.converge=new o.Points(g,new o.ShaderMaterial({vertexShader:be,fragmentShader:ve,uniforms:this.convUniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:o.AdditiveBlending})),this.converge.frustumCulled=!1,this.converge.renderOrder=10,t.three.scene.add(this.converge);let k=document.createElement("canvas");k.width=k.height=128;let $=k.getContext("2d"),b=$.createRadialGradient(64,64,0,64,64,64);b.addColorStop(0,"rgba(255,250,235,1)"),b.addColorStop(.2,"rgba(242,216,146,0.65)"),b.addColorStop(1,"rgba(242,216,146,0)"),$.fillStyle=b,$.fillRect(0,0,128,128),this.flash=new o.Sprite(new o.SpriteMaterial({map:new o.CanvasTexture(k),transparent:!0,depthWrite:!1,depthTest:!1,blending:o.AdditiveBlending,opacity:0})),this.flash.renderOrder=11,this.pieces.forEach(y=>{let v=new o.Sprite(new o.SpriteMaterial({map:this.flash.material.map,transparent:!0,depthWrite:!1,blending:o.AdditiveBlending,opacity:0}));v.position.copy(y.position),v.scale.set(1e-4,1e-4,1),y.userData.burst={s:.02,o:0,sprite:v},this.earth.spin.add(v)}),this.flash.userData.s={size:.01},t.three.scene.add(this.flash),this.tmp=new o.Vector3,this.buildKids()}buildKids(){let{THREE:t}=this.ctx,e=this.ctx.layers.kids,o=T("kids");this.kids=$e.map((s,i)=>{let a=B("g",{opacity:"0"},e),c=B("path",{stroke:"#F2D892","stroke-width":"1.4","stroke-opacity":".8",fill:"none","stroke-dasharray":"3 4"},a),n=B("circle",{r:"3.5",fill:"#FFF3C8"},a),l=D(`
        <clipPath id="${o}-c${i}"><circle r="46"/></clipPath>
        <circle r="52" fill="#0B1E3D" opacity=".55"/>
        <g clip-path="url(#${o}-c${i})">
          <circle r="46" fill="${s.bg}"/>
          <g data-slot="1"></g>
          <ellipse cx="0" cy="40" rx="44" ry="16" fill="#DDEBFF" opacity=".35"/>
        </g>
        <circle r="47" fill="none" stroke="#D8B15E" stroke-width="3"/>
        ${It[s.flag](20,-46)}`);a.appendChild(l);let d=st(kt[s.kid]);l.querySelector("[data-slot]").appendChild(d.root),Object.assign(d.state,{x:0,y:92,scale:.42,lid:0,mSleepy:0,mSmile:1,lookY:.6,held:1,heldY:30,armL:5,foreL:-16,armR:5,foreR:-16,faceLight:.45,spill:.6});let h=ht(t,s.lat,s.lon,1.01);return{g:a,line:c,dot:n,bubble:l,kid:d,local:h,dx:s.dx,dy:s.dy,st:{s:0,o:0},phase:i*1.3}}),this.v1=new t.Vector3,this.v2=new t.Vector3,this.v3=new t.Vector3}build(t){let[e,o]=x.network,[s,i]=x.reveal,[a,c]=x.brand;this.early.forEach((d,h)=>{t.fromTo(d.material.uniforms.uProgress,{value:0},{value:1,duration:.8,ease:"sine.inOut"},e+.9+h*.07)}),t.to(this.early.map(d=>d.material.uniforms.uAlpha),{value:.35,duration:.8},o+.6),[...this.global].sort((d,h)=>d.userData.len-h.userData.len).forEach((d,h)=>{t.fromTo(d.material.uniforms.uProgress,{value:0},{value:1,duration:.8+d.userData.len*.3,ease:"sine.out"},s+.6+h*.05)}),t.to(this.early.map(d=>d.material.uniforms.uAlpha),{value:.8,duration:.6},s+1),this.pieces.forEach((d,h)=>{let p=s+1.1+h*.22;t.fromTo(d.userData.pop,{s:0},{s:1,duration:.6,ease:"back.out(1.8)"},p),t.fromTo(d.userData.burst,{s:.02,o:0},{s:.42,o:1,duration:.16,ease:"power2.out"},p-.04),t.to(d.userData.burst,{s:.6,o:0,duration:.35,ease:"power2.in"},p+.12)}),this.kids.forEach((d,h)=>{t.fromTo(d.st,{s:0,o:0},{s:1,o:1,duration:.5,ease:"back.out(1.8)"},s+1+h*.3),t.to(d.kid.state,{armR:150,foreR:30,handPointR:0,duration:.25,ease:"sine.out"},s+1.4+h*.3),t.to(d.kid.state,{foreR:0,duration:.2,yoyo:!0,repeat:1,ease:"sine.inOut"},s+1.65+h*.3),t.to(d.kid.state,{armR:5,foreR:-16,duration:.3},s+2.1+h*.3),t.to(d.st,{s:.2,o:0,duration:.35,ease:"power2.in"},a-.1+h*.05)}),t.fromTo(this.convUniforms.uP,{value:0},{value:1,duration:c-a+.05,ease:"power1.in"},a-.05);let l=[...this.global,...this.early].map(d=>d.material.uniforms.uAlpha);t.to(l,{value:.28,duration:.6,ease:"power2.inOut"},a+.1),t.to(this.flash.material,{opacity:1,duration:.6,ease:"power2.in"},a+.05),t.to(this.flash.userData.s,{size:1.1,duration:.65,ease:"power3.in"},a+.05),t.to(this.flash.material,{opacity:0,duration:.6,ease:"power2.out"},a+.7),t.to(this.flash.userData.s,{size:1.9,duration:.6,ease:"power2.out"},a+.7),t.to(this.pieces.map(d=>d.userData.pop),{s:.8,duration:.6},a+.2),this.r1=i}updateKids(t){if(this.ctx.layers.kids.style.visibility==="hidden")return;let{camera:o}=this.ctx.three,{W:s,H:i,unit:a,portrait:c}=this.ctx.responsive,n=a*(c?1.1:1.3);for(let l of this.kids){if(l.st.o<=.001){M(l.g,"opacity","0");continue}let d=this.v1.copy(l.local).applyMatrix4(this.earth.spin.matrixWorld),h=this.v2.copy(d).sub(this.v3.setFromMatrixPosition(this.earth.spin.matrixWorld)).normalize(),p=this.v3.copy(o.position).sub(d).normalize(),f=Math.max(0,Math.min(1,(h.dot(p)-.12)/.25)),u=d.project(o),m=(u.x*.5+.5)*s,g=(-u.y*.5+.5)*i,k=Math.sin(t*1.3+l.phase)*4*n,$=m+l.dx*n*.85,b=g+l.dy*n*.85+k;M(l.g,"opacity",w(l.st.o*f)),M(l.line,"d",`M${w(m)} ${w(g)} L${w($)} ${w(b+44*n*l.st.s)}`),M(l.dot,"transform",`translate(${w(m)} ${w(g)})`),M(l.bubble,"transform",`translate(${w($)} ${w(b)}) scale(${w(n*l.st.s)})`),l.kid.apply(null,t)}}update(t,e){let{three:o}=this.ctx;for(let l of[...this.early,...this.global])l.material.uniforms.uTime.value=e;let s=this.ctx.responsive.portrait?.3:.24;this.pieces.forEach(l=>{let d=l.userData.pop.s;l.scale.set(s*d+1e-4,s*d+1e-4,1);let h=l.userData.burst;h.sprite.scale.set(h.s,h.s,1),h.sprite.material.opacity=h.o});let i=o.camera,a=this.ctx.logoNdcY??.18;this.tmp.set(0,a,.5).unproject(i).sub(i.position).normalize();let c=this.convUniforms.uTarget.value.copy(i.position).addScaledVector(this.tmp,2.4);this.earth.spin.updateMatrixWorld(),this.convUniforms.uEarth.value.copy(this.earth.spin.matrixWorld),this.convUniforms.uPixel.value=o.renderer.getPixelRatio()*(o.H/900),this.flash.position.copy(c),this.updateKids(e);let n=this.flash.userData.s.size;this.flash.scale.set(n,n,1)}};var F={x:770,y:452,w:76,h:47.5},q=F.w/1600;function Xt(r,t){return{x:F.x+r*q,y:F.y+t*q}}function Fe(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Vt(r,t,e,o,s,i,a,c,n,l,d="#F2D892"){let h="";for(let p=0;p<o;p++)for(let f=0;f<s;f++)if(r()<l){let u=(.45+r()*.5).toFixed(2);h+=`<rect x="${(t+p*c).toFixed(1)}" y="${(e+f*n).toFixed(1)}" width="${i}" height="${a}" fill="${d}" opacity="${u}"/>`}return h}function Nt(r,{y:t,minH:e,maxH:o,color:s,count:i,x0:a=-300,x1:c=1900,lit:n=.25}){let l="",d=a;for(let h=0;h<i&&d<c;h++){let p=40+r()*90,f=e+r()*(o-e);l+=`<rect x="${d.toFixed(1)}" y="${(t-f).toFixed(1)}" width="${p.toFixed(1)}" height="${(f+400).toFixed(1)}" fill="${s}"/>`,r()<.25&&(l+=`<rect x="${(d+p*.4).toFixed(1)}" y="${(t-f-18).toFixed(1)}" width="3" height="18" fill="${s}"/>`),l+=Vt(r,d+6,t-f+10,Math.floor((p-8)/12),Math.floor(f/16),5,7,12,16,n),d+=p+r()*14}return l}function rt(r,t,e,o,s,i,a){return`
    <path d="M${r-12} ${t} L${r+e/2} ${t-o*.38} L${r+e+12} ${t} Z" fill="${i}"/>
    <rect x="${r}" y="${t}" width="${e}" height="${o}" fill="${s}"/>
    ${Vt(a,r+14,t+18,Math.floor((e-20)/34),Math.floor((o-30)/50),20,26,34,50,.55)}`}function vt(r,t,e,o="#10345A"){return`<g transform="translate(${r} ${t}) scale(${e})">
    <rect x="-4" y="-10" width="8" height="40" fill="#0A1C38"/>
    <circle cx="0" cy="-40" r="34" fill="${o}"/><circle cx="-22" cy="-22" r="24" fill="${o}"/><circle cx="22" cy="-24" r="26" fill="${o}"/>
    <circle cx="-8" cy="-52" r="16" fill="#1B4C7A" opacity=".55"/></g>`}function Me(r,t){let e=(()=>{let i="";for(let h=0;h<8;h++)for(let p=0;p<8;p++){let f=p/8,u=(p+1)/8,m=C=>(1-C)*18,g=150+m(f)+(200-2*m(f))*(h/8),k=150+m(f)+(200-2*m(f))*((h+1)/8),$=150+m(u)+(200-2*m(u))*((h+1)/8),b=150+m(u)+(200-2*m(u))*(h/8),y=598+36*f,v=598+36*u;i+=`<path d="M${g.toFixed(1)} ${y.toFixed(1)} L${k.toFixed(1)} ${y.toFixed(1)} L${$.toFixed(1)} ${v.toFixed(1)} L${b.toFixed(1)} ${v.toFixed(1)} Z" fill="${(h+p)%2?"#1D3F84":"#EDE7DA"}"/>`}return i})(),o=Array.from({length:17},(i,a)=>{let c=a/16,n=90+c*1420,l=110+Math.sin(c*Math.PI)*70+Math.sin(c*Math.PI*4)*6;return`<circle cx="${n.toFixed(1)}" cy="${(l+8).toFixed(1)}" r="16" fill="#F2D892" opacity=".16"/><circle cx="${n.toFixed(1)}" cy="${(l+8).toFixed(1)}" r="5.5" fill="#F7E2A6"/>`}).join(""),s=Array.from({length:34},(i,a)=>`<rect x="${404+a*20.3}" y="${a%2?699:707}" width="20.3" height="8" fill="${a%2?"#F7F5F0":"#0B1E3D"}"/>`).join("");return`
  <g data-part="bedroom" transform="translate(${F.x} ${F.y}) scale(${q})">
    <rect x="-40" y="-40" width="1680" height="1080" fill="url(#${r}-wall)"/>
    <g data-part="wallDecor">
    <path d="M300 170 L760 150 L840 620 L240 640 Z" fill="#F2D892" opacity=".07"/>
    <path d="M40 520 H1560" stroke="#0E2552" stroke-width="6" opacity=".6"/>
    <path d="M90 110 Q800 250 1510 110" stroke="#0A1A38" stroke-width="2.5" fill="none"/>
    ${o}
    <!-- poster -->
    <g transform="translate(640 160)">
      <rect width="220" height="170" rx="4" fill="#F7F5F0"/>
      <rect x="10" y="10" width="200" height="150" fill="#0B1E3D"/>
      ${Array.from({length:16},(i,a)=>`<rect x="${30+a%4*22}" y="${36+Math.floor(a/4)*22}" width="22" height="22" fill="${(a+Math.floor(a/4))%2?"#2C5BC4":"#EDE7DA"}" opacity=".85"/>`).join("")}
      <g transform="translate(160 128) scale(.72)">${O("knight",`${r}-gold`,{shadow:!1})}</g>
    </g>
    <!-- shelf with trophy and books -->
    <rect x="140" y="330" width="340" height="14" rx="3" fill="#0A1A38"/>
    <g transform="translate(212 330)">
      <path d="M-30 -86 H30 Q30 -46 8 -38 L6 -22 H16 V0 H-16 V-22 H-6 L-8 -38 Q-30 -46 -30 -86 Z" fill="url(#${r}-gold)" stroke="#7a5a22" stroke-width="2"/>
      <path d="M-30 -80 Q-48 -80 -44 -62 Q-40 -52 -26 -52 M30 -80 Q48 -80 44 -62 Q40 -52 26 -52" stroke="#C9A24B" stroke-width="5" fill="none"/>
      <path d="${G.knight}" transform="translate(-9 -110) scale(.18)" fill="#E6C475"/>
    </g>
    <rect x="290" y="252" width="22" height="78" fill="#F7F5F0"/><rect x="314" y="262" width="18" height="68" fill="#2C5BC4"/>
    <rect x="334" y="248" width="24" height="82" fill="#D8B15E"/><rect x="360" y="266" width="20" height="64" fill="#13306A" transform="rotate(12 370 330)"/>
    <g transform="translate(430 330)"><rect x="-26" y="-34" width="52" height="34" rx="6" fill="#13306A"/><circle cx="-11" cy="-17" r="9" fill="#F7F5F0"/><circle cx="11" cy="-17" r="9" fill="#F7F5F0"/><rect x="-14" y="-42" width="6" height="8" fill="#D8B15E"/><rect x="8" y="-42" width="6" height="8" fill="#D8B15E"/></g>
    </g>
    <!-- desk with chessboard and notebook -->
    <rect x="80" y="636" width="330" height="22" rx="4" fill="#0E2148"/>
    <rect x="96" y="658" width="16" height="200" fill="#0A1936"/><rect x="378" y="658" width="16" height="200" fill="#0A1936"/>
    <path d="M150 634 L350 634 L350 640 L150 640 Z" fill="#0A1936"/>
    ${e}
    <g transform="translate(206 616) scale(.2)">${O("king",`${r}-ivory`)}</g>
    <g transform="translate(236 626) scale(.17)">${O("pawn",`${r}-ivory`)}</g>
    <g transform="translate(290 612) scale(.19)">${O("queen",`${r}-navy`,{tone:"navy"})}</g>
    <g transform="translate(318 626) scale(.18)">${O("knight",`${r}-navy`,{tone:"navy"})}</g>
    <g transform="translate(262 606) scale(.17)">${O("rook",`${r}-navy`,{tone:"navy"})}</g>
    <g transform="translate(96 606) rotate(-6)"><rect width="46" height="30" rx="2" fill="#F7F5F0"/><rect width="7" height="30" fill="#2C5BC4"/><path d="M14 10 H40 M14 17 H36 M14 24 H38" stroke="#9AA6BB" stroke-width="2"/></g>
    <!-- rug + floor -->
    <rect x="-40" y="840" width="1680" height="200" fill="#0A1834"/>
    <path d="M-40 900 H1640 M-40 960 H1640" stroke="#0F2146" stroke-width="3"/>
    <ellipse cx="760" cy="905" rx="430" ry="58" fill="#1F4390"/><ellipse cx="760" cy="905" rx="400" ry="46" fill="none" stroke="#F7F5F0" stroke-width="4" stroke-dasharray="14 10" opacity=".7"/>
    <!-- focus pull: dims the room behind her when the screen lights up -->
    <rect data-part="dim" x="-200" y="-200" width="2000" height="1400" fill="#040B1C" opacity="0"/>
    <!-- bed -->
    <path d="M1086 760 V470 Q1086 430 1116 430 Q1146 430 1146 470 V760 Z" fill="#0E2148"/>
    <path d="M1096 480 Q1096 446 1116 446 Q1136 446 1136 480" stroke="#D8B15E" stroke-width="3" fill="none"/>
    <path d="M360 760 V580 Q360 560 380 560 Q400 560 400 580 V760 Z" fill="#0E2148"/>
    <rect x="392" y="648" width="702" height="92" fill="#112655"/>
    <rect x="400" y="598" width="690" height="56" rx="14" fill="#EDE7DA"/>
    <ellipse cx="1004" cy="585" rx="80" ry="31" fill="#F7F5F0"/><path d="M936 598 Q1004 614 1072 596" stroke="#C9CBD4" stroke-width="3" fill="none"/>
    <g data-part="girlSlot"></g>
    <path data-part="blanket" d="" fill="url(#${r}-blanket)"/>
    ${s}
    <!-- nightstand with tablet, headphones and books -->
    <rect x="1150" y="624" width="170" height="216" rx="8" fill="#0E2148"/>
    <rect x="1142" y="612" width="186" height="18" rx="5" fill="#15306A"/>
    <path d="M1162 700 H1308 M1162 770 H1308" stroke="#0A1834" stroke-width="3"/>
    <circle cx="1235" cy="736" r="5" fill="#D8B15E"/><circle cx="1235" cy="806" r="5" fill="#D8B15E"/>
    <rect x="1256" y="590" width="62" height="11" rx="2" fill="#2C5BC4"/><rect x="1260" y="601" width="56" height="11" rx="2" fill="#F7F5F0"/>
    <path d="${G.knight}" transform="translate(1281 590.5) scale(.09)" fill="#F2D892"/>
    ${t?'<path d="M1270 588 Q1290 556 1310 588" stroke="#13306A" stroke-width="6" fill="none"/><ellipse cx="1270" cy="588" rx="8" ry="5" fill="#2C5BC4"/><ellipse cx="1310" cy="588" rx="8" ry="5" fill="#2C5BC4"/>':""}
    <g data-part="tabletNS" transform="translate(1196 612)">
      <ellipse data-part="nsGlow" cx="-4" cy="-44" rx="70" ry="60" fill="url(#${r}-notif)" opacity=".6"/>
      <path d="M-34 -2 L-40 -82 L22 -92 L28 -6 Z" fill="#0B1E3D"/>
      <path d="M-30 -7 L-35.5 -78 L18 -87 L23.5 -10 Z" fill="#132B57"/>
      <g data-part="nsIcon" transform="translate(-6 -46) skewY(-8)">
        <circle r="16" fill="#0B1E3D" stroke="#D8B15E" stroke-width="2.5"/>
        <path d="${G.knight}" transform="scale(.2) translate(-50 -66)" fill="#F2D892"/>
      </g>
      <path d="M-20 0 L20 -4 L8 -18 Z" fill="#0A1834"/>
    </g>
    <path data-part="roomGlow" d="M500 1000 C500 600 700 300 960 300 C1220 300 1420 600 1420 1000 Z" fill="url(#${r}-roomGlow)" opacity="0"/>
    <!-- out-of-focus foreground (parallax depth): a leafy plant and the bed post -->
    <g data-part="fg" opacity=".92">
      <g fill="url(#${r}-fgLeaf)">
        <path d="M150 1060 C90 900 20 860 -40 850 C40 900 90 960 120 1060 Z"/>
        <path d="M170 1060 C160 880 200 790 260 740 C230 830 210 930 200 1060 Z"/>
        <path d="M190 1060 C260 930 340 900 420 905 C340 940 270 990 230 1060 Z"/>
        <path d="M140 1060 C60 960 -10 960 -60 980 C10 990 70 1020 100 1060 Z"/>
      </g>
      <path d="M100 1000 H280 L262 1080 H118 Z" fill="#050D20"/>
    </g>
  </g>`}function jt({detail:r=!0}={}){let t=T("world"),e=Fe(7),o=`
  <defs>
    ${I(t)}
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
    <linearGradient id="${t}-fgLeaf" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#10284F"/><stop offset="1" stop-color="#040B1C"/>
    </linearGradient>
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
    <g data-part="nearBack">
    <rect x="-2000" y="752" width="5600" height="600" fill="#0A1934"/>
    ${rt(330,520,170,240,"#1A2F5E","#0F2146",e)}
    ${rt(520,560,150,200,"#22396E","#132B57",e)}
    ${rt(960,540,160,220,"#1C3366","#0F2146",e)}
    ${rt(1140,500,190,260,"#172C5A","#0C1D40",e)}
    ${r?rt(110,560,180,200,"#20386B","#11264F",e)+rt(1360,550,170,210,"#1E3569","#10244C",e):""}
    </g>
    ${Me(t,r)}
    <g data-part="exterior">
    <!-- the girl's house: facade with a real hole where the window is -->
    <path d="M700 420 H916 V760 H700 Z M${F.x} ${F.y} V${F.y+F.h} H${F.x+F.w} V${F.y} Z" fill="url(#${t}-facade)" fill-rule="evenodd"/>
    <g opacity=".18" stroke="#8C98B4" stroke-width="1">${Array.from({length:16},(i,a)=>`<path d="M700 ${440+a*20} H916"/>`).join("")}</g>
    <!-- warm glow around (never over) the window, so the interior stays clean -->
    <path d="M${F.x-F.w*.9} ${F.y-F.h} h${F.w*2.8} v${F.h*3} h${-F.w*2.8} Z M${F.x} ${F.y} v${F.h} h${F.w} v${-F.h} Z" fill-rule="evenodd" fill="url(#${t}-lamp)" opacity=".55"/>
    <rect x="${F.x-2}" y="${F.y+F.h+7}" width="${F.w+4}" height="7" rx="2" fill="#13306A"/>
    <g fill="#D8B15E">${Array.from({length:7},(i,a)=>`<circle cx="${F.x+6+a*10.5}" cy="${F.y+F.h+6}" r="2.6"/>`).join("")}</g>
    <path d="M684 426 L808 326 L932 426 Z" fill="#13306A"/>
    <path d="M684 426 L808 326 L932 426" stroke="#D8B15E" stroke-width="2.5" fill="none"/>
    <rect x="860" y="346" width="22" height="52" fill="#13306A"/>
    <rect data-part="glass" x="${F.x}" y="${F.y}" width="${F.w}" height="${F.h}" fill="url(#${t}-glass)"/>
    <rect x="${F.x-3}" y="${F.y-3}" width="${F.w+6}" height="${F.h+6}" fill="none" stroke="#F7F5F0" stroke-width="4"/>
    <rect x="${F.x-7}" y="${F.y+F.h+2}" width="${F.w+14}" height="5" rx="1.5" fill="#F7F5F0"/>
    <rect x="720" y="600" width="46" height="52" fill="#F2D892" opacity=".85"/><rect x="850" y="600" width="46" height="52" fill="#F2D892" opacity=".7"/>
    <path d="M743 600 V652 M720 626 H766 M873 600 V652 M850 626 H896" stroke="#EDE7DA" stroke-width="3"/>
    <rect x="792" y="690" width="34" height="70" rx="3" fill="#13306A"/><circle cx="819" cy="727" r="2.5" fill="#D8B15E"/>
    <rect x="770" y="757" width="80" height="6" fill="#9FA8BE"/>
    <g data-part="exteriorSlot"></g>
    ${vt(660,740,1.05)}${vt(960,748,.9,"#0E2E52")}${vt(250,752,1.2)}${vt(1330,752,1.1,"#0E2E52")}
    <g transform="translate(1040 752)"><rect x="-3" y="-120" width="6" height="120" fill="#0A1834"/><circle cx="0" cy="-124" r="36" fill="url(#${t}-lamp)"/><circle cx="0" cy="-124" r="7" fill="#F7E2A6"/></g>
    </g>
  </g>`,s=D(o,{class:"tdc-world"});return{root:s,parts:_(s),id:t}}var Rt="M404 612 C500 552 760 536 950 566 C1010 576 1060 594 1090 606 L1090 712 C900 724 600 724 404 712 Z",Ut="M404 640 C560 632 780 600 905 588 C985 582 1050 606 1090 624 L1090 712 C900 724 600 724 404 712 Z";var H=(r,t,e,o,s,i=0)=>{let a=Xt(t,e);return{t:r,x:a.x,y:a.y,z:o/q,px:i*q}},Ft=class{constructor(t){this.ctx=t;let e=t.responsive.profile.extraDetail;this.world=jt({detail:e}),this.cam=B("g",{class:"tdc-world-cam"}),this.cam.appendChild(this.world.root),t.layers.world.appendChild(this.cam);let o=this.world.parts;this.p=o,this.girl=st(),o.girlSlot.appendChild(this.girl.root),Object.assign(this.girl.state,{x:742,y:598,rot:80,head:-12,armL:-2,armR:-2,foreL:-6,foreR:-6,lid:1,mSleepy:1,breathe:1}),this.blanketTpl=gt(Rt),this.blanketA=et(Rt),this.blanketB=et(Ut),this.blanketNums=this.blanketA.slice(),this.fx={blanket:0,nsGlow:0,nsTablet:1,roomGlow:0,glass:1,sparkles:0,dim:0},this.sparkleGroup=B("g",{opacity:"0"},o.bedroom),this.sparkles=Array.from({length:9},(s,i)=>({el:B("path",{d:"M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z",fill:i%3?"#F2D892":"#FFFFFF"},this.sparkleGroup),x:900+i*37%120,phase:i*.37,speed:.6+i%4*.15})),this.buildCamera()}buildCamera(){let t=this.ctx.gsap.parseEase,[e]=x.dive,[o]=x.arrive,[s,i]=x.bedroom,[a]=x.tablet,[c]=x.board,[n,l]=x.eyes,[d,h]=x.outside,[p]=x.reveal,f=[{t:e+.8,x:808,y:470,z:.62,px:0},{t:o,x:808,y:490,z:.95,px:0},{t:o+.6,x:822,y:480,z:1.6,px:20},{t:o+1.2,x:840,y:477,z:5.8,px:22},{t:o+2.35,x:840,y:477,z:6.6,px:20},{t:o+2.95,x:828,y:476,z:8.5,px:0},H(s+.45,800,500,1,0,150),H(s+1.3,830,515,1.08,0,165),H(s+2.4,880,530,1.3,0,120),H(i-.05,975,548,1.95,0,30),H(a+.6,985,505,1.45,0,60),H(a+1.2,965,480,1.75,0,20),H(c-.12,960,470,2.3,0,0),H(c+.05,960,526,4.6,0,0),H(n,962,392,3.25,0,0),H(n+.8,964,408,2.6,0,0),H(l-.05,962,400,2.9,0,0),{t:d+.75,x:834,y:476,z:5.7,px:8},{t:h,x:838,y:476,z:5.3,px:8},{t:p+.55,x:808,y:520,z:.62,px:0}];this.track=new U(f,{parseEase:t,logKeys:["z"]})}build(t){let e=this.girl.state,o=this.fx,[s]=x.dive,[i]=x.arrive,[a,c]=x.bedroom,[n]=x.tablet,[l]=x.board,[d,h]=x.eyes,[p]=x.outside,[f]=x.reveal,u=this.ctx.layers.world;t.set(u,{autoAlpha:0},0),t.to(u,{autoAlpha:1,duration:.15},s+.75),t.to(u,{autoAlpha:0,duration:.18},f+.45),t.to(o,{glass:0,duration:.2},a+.15),t.to(o,{glass:1,duration:.3},p+.45),t.to(o,{nsGlow:1,duration:.3},i+3),t.to(o,{nsGlow:.45,duration:.55,yoyo:!0,repeat:5,ease:"sine.inOut"},i+3.35),t.to(e,{lid:.75,duration:.18,yoyo:!0,repeat:1,ease:"sine.inOut"},a+1.1),t.to(e,{lid:.6,duration:.3,ease:"sine.out"},a+1.45),t.to(e,{armL:165,armR:160,foreL:8,foreR:10,rot:76,head:-20,lid:.95,mSleepy:0,mYawn:1,browY:3,duration:.5,ease:"sine.inOut"},a+1.6),t.to(e,{armL:-2,armR:16,foreL:-6,foreR:-10,rot:80,head:-12,lid:.6,mYawn:0,mSleepy:1,browY:1.5,duration:.45,ease:"sine.inOut"},a+2.3),t.to(e,{armR:4,foreR:-166,duration:.3,ease:"sine.inOut"},a+2.6),t.to(e,{foreR:-158,duration:.12,yoyo:!0,repeat:3,ease:"sine.inOut"},a+2.85),t.to(e,{armR:-2,foreR:-6,duration:.3,ease:"sine.inOut"},a+3.3),t.to(e,{lid:1,duration:.09,yoyo:!0,repeat:1},a+3.2),t.to(e,{lookY:-1,lookX:.3,duration:.3,ease:"sine.inOut"},a+3.35),t.to(e,{lid:.02,browY:-4,mSleepy:0,mO:1,head:-4,duration:.35,ease:"sine.out"},c-.45),t.to(e,{rot:0,x:960,y:612,head:8,breathe:0,duration:.5,ease:"back.out(1.1)"},n),t.to(o,{blanket:1,duration:.5,ease:"power2.out"},n),t.to(e,{lookX:1,lookY:.2,duration:.2},n+.2),t.to(e,{body:26,armR:76,foreR:22,armL:20,duration:.3,ease:"power2.out"},n+.55),t.set(o,{nsTablet:0},n+.85),t.set(e,{held:1,heldX:180,heldY:-60,heldRot:12},n+.85),t.to(e,{body:0,heldX:0,heldY:30,heldRot:0,armL:5,foreL:-16,armR:5,foreR:-16,head:2,lookX:0,lookY:.9,duration:.4,ease:"power2.inOut"},n+.85),t.to(e,{mO:0,mSoft:1,duration:.2},n+1),t.to(e,{handPointR:1,armR:14,foreR:-150,duration:.15},n+1.35),t.to(e,{foreR:-138,duration:.07,yoyo:!0,repeat:1},n+1.5),t.to(e,{spill:.75,faceLight:.5,duration:.2,ease:"power2.out"},n+1.55),t.to(o,{roomGlow:.7,dim:.35,duration:.35},n+1.55),t.to(e,{handPointR:0,armR:5,foreR:-16,browY:-4.5,lid:0,mSoft:0,mO:.8,duration:.2},n+1.62),t.set(e,{mO:0,mSoft:.8,mSmile:0,reflect:1,faceLight:.7,lookY:.75,browY:-3},l),t.set(o,{roomGlow:.25,dim:.55},l),t.to(e,{sparkle:.85,pupil:1.2,browY:-5,duration:.45,ease:"back.out(2)"},d+.2),t.to(o,{sparkles:.6,duration:.4},d+.25),t.to(e,{mSmile:1,mSoft:0,duration:.35,ease:"sine.out"},d+.4),t.to(e,{armR:128,foreR:52,y:604,lookY:.2,lookX:0,duration:.3,ease:"back.out(1.6)"},d+.8),t.to(e,{foreR:40,duration:.14,yoyo:!0,repeat:1,ease:"sine.inOut"},d+1.1),t.to(e,{armR:5,foreR:-16,y:612,lookY:.75,duration:.35,ease:"sine.inOut"},d+1.45),t.to(e,{lid:1,duration:.08,yoyo:!0,repeat:1},d+1.6),t.to(e,{head:-5,duration:.3,ease:"sine.inOut"},d+1.7),t.to(o,{sparkles:0,dim:.2,duration:.4},h+.1),t.to(e,{sparkle:.6,duration:.3},h),this.e0=d}update(t,e){if(this.ctx.layers.world.style.visibility==="hidden")return;let{W:s,H:i,portrait:a}=this.ctx.responsive,c=this.track.at(t),l=Math.max(s/1600,i/900)*c.z,d=c.x+(a?c.px:0);M(this.cam,"transform",`translate(${w(s/2-d*l)} ${w(i/2-c.y*l)}) scale(${w(l)})`);let h=s/2+(F.x-d)*l,p=i/2+(F.y-c.y)*l,f=h<=-1&&p<=-1&&h+F.w*l>=s+1&&p+F.h*l>=i+1;if(f!==this.inside){this.inside=f;let $=f?"none":"";for(let b of["far","mid","nearBack","exterior"])this.p[b].style.display=$}let u=this.fx,m=this.blanketNums;for(let $=0;$<m.length;$++)m[$]=this.blanketA[$]+(this.blanketB[$]-this.blanketA[$])*u.blanket;M(this.p.blanket,"d",xt(this.blanketTpl,m)),A(this.p.nsGlow,u.nsGlow*u.nsTablet),A(this.p.nsIcon,Math.min(1,u.nsGlow*2)),A(this.p.tabletNS,u.nsTablet),A(this.p.roomGlow,u.roomGlow),A(this.p.glass,u.glass),A(this.p.dim,u.dim);let g=(d-770)/q-900,k=(c.y-452)/q-500;if(M(this.p.wallDecor,"transform",`translate(${w(g*.07)} ${w(k*.05)})`),M(this.p.fg,"transform",`translate(${w(-g*.16)} ${w(-k*.1)})`),this.girl.apply(null,e),A(this.sparkleGroup,u.sparkles),u.sparkles>0)for(let $ of this.sparkles){let b=((t-this.e0)*$.speed+$.phase)%1,y=540-b*260,v=$.x+Math.sin((t+$.phase)*5)*12;M($.el,"transform",`translate(${w(v)} ${w(y)}) scale(${w(Math.sin(b*Math.PI)*1.2)})`)}}dispose(){this.cam.remove()}};var N="#B87752",pt="#955A3B",K="#1A1311",qt="#0B1E3D",Kt="#0F2550",nt="#F7F5F0",Bt="#D8B15E",Mt="#4A1A18",Dt="M-40 -132 C-58 -90 -66 -20 -70 34 C-40 44 -20 40 0 42 C20 40 40 44 70 34 C66 -20 58 -90 40 -132 Z",Le="M-40 -132 C-66 -80 -84 0 -64 96 C-40 84 -24 116 0 104 C24 118 44 88 70 110 C78 10 62 -80 40 -132 Z";function Wt(){return`
    <path d="M-31 -6 L-3 -6 L-7 88 Q-16 92 -27 88 Z" fill="${Kt}"/>
    <path d="M-29 -2 L-26 86" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
    <g data-part="SHIN">
      <path d="M-27 84 L-7 84 L-9 166 L-25 166 Z" fill="${Kt}"/>
      <path d="M-25.5 90 L-24 163" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
      <path d="M-31 164 Q-33 185 -18 186 L0 186 Q7 185 5 175 Q1 163 -10 162 Z" fill="${nt}"/>
      <path d="M-32 181 L5.5 181" stroke="#B8C1D1" stroke-width="2.4"/>
      <path d="M-25 172 Q-15 177 -4 170" stroke="${Bt}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>`}function Jt(r){let t=r;return`
    <path d="M-46 -134 Q-58 -118 -60 -94 L-58 -66 L-42 -64 L-38 -96 Q-36 -118 -30 -128 Z" fill="url(#JACKET)"/>
    <path d="M-46 -134 Q-58 -118 -58 -101 Q-47 -106 -37 -104 Q-36 -120 -30 -128 Z" fill="#24479A"/>
    <path d="M-58 -101 Q-47 -106 -37 -104" stroke="${Bt}" stroke-width="1.6" fill="none"/>
    <g data-part="fore${t}">
      <path d="M-58 -70 L-42 -68 L-45 -14 L-59 -14 Z" fill="url(#JACKET)"/>
      <path d="M-60.5 -19 L-43.5 -19 L-44 -8 L-60 -8 Z" fill="${nt}"/>
      <g data-part="hand${t}">
        <g data-part="relax${t}">
          <path d="M-59 -9 Q-61 7 -56 13 Q-52 16 -48 13 Q-43 7 -45 -9 Z" fill="${N}"/>
          <path d="M-46 -4 Q-40 -2 -40.5 4 Q-42.5 7 -46 4 Z" fill="${pt}"/>
        </g>
        <g data-part="open${t}" opacity="0">
          <path d="M-60 -8 Q-61.5 5 -52.5 7.5 Q-44 6 -45 -8 Z" fill="${N}"/>
          <g stroke="${N}" stroke-width="3.6" stroke-linecap="round">
            <path d="M-58.6 4 L-61 13.5"/><path d="M-55.2 6 L-55.8 17"/><path d="M-51.6 6.2 L-51.2 17"/><path d="M-48.2 5 L-46.2 13.5"/><path d="M-45.3 -2 L-40 3.5"/>
          </g>
        </g>
        <g data-part="point${t}" opacity="0">
          <path d="M-59 -9 Q-60 4 -54 6 Q-46 6 -45 -9 Z" fill="${N}"/>
          <path d="M-55.5 3 L-54.5 20 Q-52.5 23 -50.5 20 L-50.5 3 Z" fill="${N}"/>
        </g>
      </g>
    </g>`}var Ae={"#B87752":"#E0AC86","#955A3B":"#C08962","#CB8C66":"#ECC19E","#6E3F29":"#A06B4B","#1A1311":"#231714","#23478F":"#4A7BDB","#132D5E":"#2C5BC4","#0F2550":"#1E4596"};function lt({gold:r=Bt,variant:t="knight"}={}){let e=t==="mentor",o=T("coach"),s=`
  <defs>
    <linearGradient id="${o}-jacket" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#23478F"/><stop offset=".55" stop-color="#132D5E"/><stop offset="1" stop-color="${qt}"/>
    </linearGradient>
    <linearGradient id="${o}-cape" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1B3A78"/><stop offset="1" stop-color="#0A1A38"/>
    </linearGradient>
    <radialGradient id="${o}-skin" cx=".38" cy=".35" r=".75">
      <stop offset="0" stop-color="#CB8C66"/><stop offset=".7" stop-color="${N}"/><stop offset="1" stop-color="${pt}"/>
    </radialGradient>
    <linearGradient id="${o}-trail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F2D892" stop-opacity=".9"/><stop offset=".25" stop-color="#F7F5F0" stop-opacity=".45"/><stop offset="1" stop-color="#F7F5F0" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${o}-eyeL"><ellipse cx="0" cy="0" rx="4.9" ry="5.7"/></clipPath>
  </defs>
  <g data-part="body">
    <g data-part="trail" opacity="0">
      <path d="M-24 150 Q-14 170 -17 820 L-13 820 Q-8 170 -12 150 Z" fill="url(#${o}-trail)"/>
      <path d="M2 120 Q9 170 8 1000 L13 1000 Q16 170 16 120 Z" fill="url(#${o}-trail)" opacity=".75"/>
      <path d="M28 150 Q36 170 35 700 L38 700 Q41 170 38 150 Z" fill="url(#${o}-trail)" opacity=".55"/>
    </g>
    <g data-part="cape" ${e?'display="none"':""}>
      <path data-part="capePath" d="${Dt}" fill="url(#${o}-cape)" stroke="${r}" stroke-width="2.2" stroke-linejoin="round"/>
    </g>
    <g data-part="legL">${Wt().replace("SHIN","shinL")}</g>
    <g transform="scale(-1 1)"><g data-part="legR">${Wt().replace("SHIN","shinR")}</g></g>
    <path d="M-32 -14 H32 V4 Q0 10 -32 4 Z" fill="#081733"/>
    <rect x="-5.5" y="-11" width="11" height="9" rx="1.5" fill="none" stroke="${r}" stroke-width="2"/>
    <path d="M-31 -4 Q-35 -62 -44 -118 Q-42 -134 -22 -140 L22 -140 Q42 -134 44 -118 Q35 -62 31 -4 Z" fill="url(#${o}-jacket)"/>
    <path d="M-44 -118 Q-38 -70 -31 -4 L-25 -4 Q-31 -66 -37 -117 Z" fill="#2C5BC4" opacity=".55"/>
    <path d="M44 -118 Q38 -70 31 -4 L25 -4 Q31 -66 37 -117 Z" fill="#2C5BC4" opacity=".35"/>
    ${e?`<path d="M-16 -141 L0 -96 L16 -141 Z" fill="${nt}"/>
    <path d="M-16 -141 L-4 -100 L-10 -60 M16 -141 L4 -100 L10 -60" stroke="#16336E" stroke-width="2.4" fill="none" stroke-linejoin="round"/>`:`<path d="M-41 -113 L0 -90 L41 -113" stroke="${nt}" stroke-width="3.2" fill="none" stroke-linejoin="round"/>
    <path d="M0 -72 L0 -8" stroke="${nt}" stroke-width="1.4" opacity=".35"/>`}
    <g data-part="emblem" transform="${e?"translate(-24 -104) scale(.62)":"translate(0 -84)"}">
      <circle r="13.5" fill="${qt}" stroke="${r}" stroke-width="2.2"/>
      <path d="${G.knight}" transform="scale(.19) translate(-50 -66)" fill="${r}"/>
    </g>
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -132 -10 -138 Z" fill="${pt}"/>
    <path d="M-9.5 -154 Q0 -146 9.5 -154 L9.5 -147 Q0 -141 -9.5 -147 Z" fill="#6E3F29" opacity=".55"/>
    <path d="M-20 -141 Q0 -127 20 -141 L16 -151 Q0 -139 -16 -151 Z" fill="${nt}"/>
    <g data-part="armL">${Jt("L")}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${Jt("R")}</g></g>
    <g data-part="head">
      ${e?`<path d="M-31 -196 Q-38 -240 0 -244 Q38 -240 31 -196 Q36 -158 28 -134 Q14 -128 12 -150 L-12 -150 Q-14 -128 -28 -134 Q-36 -158 -31 -196 Z" fill="${K}"/>`:""}
      <ellipse cx="-24" cy="-186" rx="5" ry="8" fill="${N}"/><ellipse cx="24" cy="-186" rx="5" ry="8" fill="${N}"/>
      <path d="M-24 -196 Q-25 -170 -16 -158 Q-8 -148 0 -148 Q8 -148 16 -158 Q25 -170 24 -196 Q23 -222 0 -224 Q-23 -222 -24 -196 Z" fill="url(#${o}-skin)"/>
      <ellipse cx="0" cy="-208" rx="22" ry="6.5" fill="${pt}" opacity=".4"/>
      <path d="M13 -196 Q22 -178 12 -158 Q20 -170 21 -190 Z" fill="${pt}" opacity=".35"/>
      <ellipse cx="-13" cy="-178" rx="4.5" ry="2.6" fill="#FFE9D6" opacity=".22"/>
      ${e?`<circle cx="-25" cy="-176" r="2.6" fill="${r}"/><circle cx="25" cy="-176" r="2.6" fill="${r}"/>`:`<path d="M-25 -190 Q-28 -222 -6 -230 Q18 -236 27 -212 Q29 -200 25 -188 Q23 -204 16 -210 Q2 -214 -10 -210 Q-20 -204 -25 -190 Z" fill="${K}"/>
      <path d="M-24.5 -196 L-22.5 -181 L-20.5 -196 Z M24.5 -196 L22.5 -181 L20.5 -196 Z" fill="${K}"/>`}
      <g data-part="features">
        ${[-9,9].map((p,f)=>`
        <g transform="translate(${p} -187)">
          <g clip-path="url(#${o}-eyeL)">
            <ellipse rx="4.9" ry="5.7" fill="#FFFDF8"/>
            <g data-part="iris${f}">
              <circle r="3.6" fill="#3A2415"/><circle r="1.8" fill="#0A0706"/>
              <circle cx="1.1" cy="-1.4" r="1.15" fill="#fff"/>
              <circle data-part="glint${f}" cx="-1.2" cy="1.3" r=".7" fill="${r}" opacity="0"/>
            </g>
            <rect data-part="lid${f}" x="-6" y="-5.7" width="12" height="11.4" fill="${N}"/>
          </g>
          <path data-part="lash${f}" d="M-5.4 0 Q0 -11.6 5.4 0" stroke="#170F0C" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        </g>`).join("")}
        <path data-part="browL" d="M-14.5 -196 Q-9 -200.5 -3.5 -197.5" stroke="${K}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M3.5 -197.5 Q9 -200.5 14.5 -196" stroke="${K}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path d="M-1 -188 Q-3.6 -177 -0.6 -175.6 Q2.4 -175 4 -176.6" stroke="#80472D" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <circle cx="-14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/><circle cx="14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/>
        <g data-part="mSmile">
          <path d="M-10.5 -168.5 Q0 -154 10.5 -168.5 Q0 -165.5 -10.5 -168.5 Z" fill="${Mt}"/>
          <path d="M-9 -168 Q0 -165.6 9 -168 Q8.4 -165.6 7.2 -164.8 Q0 -163.2 -7.2 -164.8 Q-8.4 -165.6 -9 -168 Z" fill="#fff"/>
          <path d="M-4.2 -159.4 Q0 -162.2 4.2 -159.4 Q0 -157.6 -4.2 -159.4 Z" fill="#C9605A"/>
        </g>
        <ellipse data-part="mO" cx="0" cy="-164" rx="3.7" ry="4.8" fill="${Mt}" opacity="0"/>
        <g data-part="mEek" opacity="0">
          <path d="M-10.5 -167.5 Q0 -169.5 10.5 -167.5 Q9.5 -160 0 -160.5 Q-9.5 -160 -10.5 -167.5 Z" fill="#fff" stroke="${Mt}" stroke-width="1.4"/>
          <path d="M-9.4 -164 Q0 -165.2 9.4 -164" stroke="#C9C2B8" stroke-width="1"/>
        </g>
        <path data-part="mProud" d="M-8.5 -168.5 Q0 -161.5 8.5 -168.5" stroke="${Mt}" stroke-width="2.3" fill="none" stroke-linecap="round" opacity="0"/>
      </g>
      ${e?`<path d="M-26 -188 Q-30 -228 0 -232 Q30 -228 27 -190 Q24 -212 8 -214 Q-10 -212 -26 -188 Z" fill="${K}"/>
      <path d="M-4 -229 Q10 -234 20 -226" stroke="#4A3A33" stroke-width="1.5" fill="none" stroke-linecap="round"/>`:`<path d="M-10 -226 Q2 -251 29 -236 Q22 -232 18 -222 Q8 -231 -10 -226 Z" fill="${K}"/>
      <path d="M-1 -235 Q9 -243 21 -237" stroke="#4A3A33" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M-3 -212 q-7 6 -2 12 q4 3 5 -2" stroke="${K}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}
    </g>
  </g>`.replace(/url\(#JACKET\)/g,`url(#${o}-jacket)`),i=D(e?s.replace(/#[0-9A-F]{6}/g,p=>Ae[p]||p):s,{class:"tdc-coach"}),a=_(i),c=new j({root:i,parts:a,joints:{armL:[-40,-126],foreL:[-50,-66],handL:[-52,-9],armR:[-40,-126],foreR:[-50,-66],handR:[-52,-9],legL:[-17,0],shinL:[-17,86],legR:[-17,0],shinR:[-17,86],head:[0,-150],body:[0,0]},face:{eyes:[0,1].map(p=>({lid:a[`lid${p}`],lash:a[`lash${p}`],iris:a[`iris${p}`],ry:5.7})),brows:[{node:a.browL,cx:-9,cy:-198},{node:a.browR,cx:9,cy:-198}],mouths:{mSmile:a.mSmile,mO:a.mO,mEek:a.mEek,mProud:a.mProud},features:a.features,turnShift:5,maxLook:[1.6,1.4]},state:{armL:12,armR:12,foreL:0,foreR:0,legL:3,legR:3,mSmile:1,mO:0,mEek:0,mProud:0,handOpenL:0,handOpenR:0,handPointL:0,handPointR:0,capeStream:0,capeFlutter:1,bob:0,glint:0,trail:0}}),n=gt(Dt),l=et(Dt),d=et(Le),h=l.slice();return c.onApply((p,f)=>{let u=p.capeStream;for(let m=0;m<l.length;m++){let g=m>2&&m<l.length-4?Math.sin(f*(4+4*u)+m*.7)*(1+3*u)*p.capeFlutter:0;h[m]=l[m]+(d[m]-l[m])*u+g}M(a.capePath,"d",xt(n,h));for(let m of["L","R"]){let g=p[`handOpen${m}`],k=p[`handPoint${m}`];A(a[`open${m}`],g),A(a[`point${m}`],k),A(a[`relax${m}`],1-Math.max(g,k))}A(a.glint0,p.glint),A(a.glint1,p.glint),A(a.trail,p.trail)}),c}var Q={stand:{armL:12,armR:12,foreL:0,foreR:0,legL:3,legR:3,shinL:0,shinR:0,head:0,body:0},fly:{armL:170,foreL:5,armR:25,foreR:-20,legL:4,shinL:8,legR:-2,shinR:18,head:-62,body:0},brake:{armL:38,foreL:38,armR:42,foreR:30,legL:24,shinL:-50,legR:16,shinR:-40,head:0,body:0},relieved:{armL:14,foreL:-6,armR:14,foreR:-6,legL:4,shinL:-4,legR:3,shinR:-3,head:4,body:0},sorry:{armL:55,foreL:95,armR:140,foreR:115,legL:6,shinL:-10,legR:2,shinR:-6,head:-6,body:0},dive:{armL:176,foreL:0,armR:176,foreR:0,legL:2,shinL:6,legR:2,shinR:6,head:0,body:0},proud:{armL:34,foreL:-78,armR:34,foreR:-78,legL:5,shinL:0,legR:5,shinR:0,head:4,body:0},poke:{armL:34,foreL:-78,armR:88,foreR:18,legL:5,shinL:0,legR:5,shinR:0,head:8,body:0},catch:{armL:20,foreL:-10,armR:118,foreR:-6,legL:14,shinL:-30,legR:6,shinR:-14,head:-6,body:0},place:{armL:18,foreL:-12,armR:62,foreR:-62,legL:10,shinL:-20,legR:4,shinR:-8,head:10,body:0},apology:{armL:14,foreL:-140,armR:14,foreR:-140,legL:4,shinL:-6,legR:4,shinR:-6,head:12,body:0},shh:{armL:14,foreL:-8,armR:-10,foreR:-168,legL:3,shinL:0,legR:3,shinR:0,head:4,body:0},peek:{armL:70,foreL:40,armR:16,foreR:-30,legL:6,shinL:-6,legR:2,shinR:0,head:-10,body:0},knock:{armL:84,foreL:-18,armR:16,foreR:-30,legL:6,shinL:-6,legR:2,shinR:0,head:-8,body:0},heart:{armL:34,foreL:-78,armR:10,foreR:-142,legL:5,shinL:0,legR:5,shinR:0,head:6,body:0},salute:{armL:14,foreL:-8,armR:150,foreR:70,legL:3,shinL:0,legR:3,shinR:0,head:-4,body:0},wave:{armL:14,foreL:-8,armR:150,foreR:30,legL:3,shinL:0,legR:3,shinR:0,head:-4,body:0},run:{armL:120,foreL:10,armR:40,foreR:-70,legL:40,shinL:-70,legR:-20,shinR:30,head:-50,body:0}};var Pt=(r,t={})=>({...Q[r],...t}),Lt=class{constructor(t){this.ctx=t;let e=T("coachfx"),o=D(`<defs>${I(e)}</defs>`);this.space=lt(),t.layers.overlay.appendChild(this.space.root),Object.assign(this.space.state,Pt("fly"),{x:-.25,y:.62,rot:70,scale:.7,capeStream:1,trail:1,opacity:0});let s=t.bedroom.p.exteriorSlot;s.appendChild(o),this.window=lt(),s.appendChild(this.window.root),Object.assign(this.window.state,Pt("proud"),{x:872,y:486,scale:.16,mSmile:0,mProud:1,lookX:-1,turn:-.5,capeStream:.25}),this.windowKnight=new Y(D(O("knight",`${e}-gold`,{shadow:!1})),{x:900,y:470,scale:0,rot:-6}),s.appendChild(this.windowKnight.root),this.ring=B("circle",{r:"10",fill:"none",stroke:"#F2D892","stroke-width":"1.2",opacity:"0"},s),this.ringState={r:2,o:0},this.spark=B("g",{opacity:"0"},s),this.spark.innerHTML='<circle r="3.2" fill="#F2D892" opacity=".35"/><path d="M0 -2.4 L.6 -.6 L2.4 0 L.6 .6 L0 2.4 L-.6 .6 L-2.4 0 L-.6 -.6 Z" fill="#FFF6D6"/>',this.sparkState={x:846,y:470,o:0,s:1};let i=t.layers.front;i.appendChild(D(`<defs>${I(e+"f")}</defs>`)),this.chaseKnight=new Y(D(O("knight",`${e}f-gold`)),{x:1.1,y:.94,scale:0,opacity:0}),this.finale=lt(),i.appendChild(this.finale.root),i.appendChild(this.chaseKnight.root),t.responsive.profile.name!=="mobile"&&(this.space.root.setAttribute("filter",`url(#${t.layers.glowId}-o)`),this.finale.root.setAttribute("filter",`url(#${t.layers.glowId}-f)`)),Object.assign(this.finale.state,Pt("wave"),{x:1.25,y:1.03,rot:-14,scale:1.45,opacity:0,capeStream:.2})}build(t){this.buildSpace(t),this.buildWindow(t),this.buildFinale(t)}buildSpace(t){let e=this.space.state,[o,s]=x.coachFly,[i]=x.bump,[a,c]=x.surprise,[n,l]=x.fix,[d,h]=x.sorry,[p]=x.farewell,[f]=x.dive;t.set(e,{opacity:1},o-.05),t.to(e,{x:.42,y:.5,duration:.9,ease:"sine.out"},o),t.to(e,{lookX:-.5,lookY:-.2,turn:-.35,duration:.25,ease:"sine.inOut"},o+.35),t.to(e,{glint:1,duration:.25,yoyo:!0,repeat:1},o+.55),t.to(e,{lid:1,duration:.1,yoyo:!0,repeat:1,ease:"sine.inOut"},o+.62),t.to(e,{lookX:.4,lookY:0,turn:.2,duration:.3},o+.95),t.to(e,{x:1.45,y:.46,duration:s-o-.8,ease:"power1.in"},o+.9),t.set(e,{opacity:0},s+.2),t.set(e,{x:.98,y:.44,rot:80,lookX:.5,lookY:0,turn:.2,trail:1,capeStream:1,opacity:1},i-.32),t.to(e,{x:1.73,duration:.45,ease:"none"},i-.3),t.to(e,{x:1.76,y:.3,rot:8,capeStream:.3,trail:0,...Q.brake,duration:.35,ease:"power3.out"},i+.15),t.to(e,{mSmile:0,mO:1,browY:-4.5,lookX:-.8,lookY:-.8,turn:-.5,head:-8,duration:.2,ease:"power2.out"},a),t.to(e,{lid:1,duration:.07,yoyo:!0,repeat:3},a+.35),t.to(e,{x:1.66,y:.29,rot:-10,...Q.catch,handOpenR:1,mO:.6,lookX:.2,lookY:-.6,turn:.1,duration:.25,ease:"power2.out"},n),t.to(e,{handOpenR:0,mO:0,mEek:1,duration:.1},n+.3),t.to(e,{x:1.46,y:.325,rot:4,...Q.place,lookX:.6,lookY:.8,turn:.3,duration:.55,ease:"power2.inOut"},n+.32),t.to(e,{y:.345,head:14,duration:.25,ease:"sine.inOut"},l-.28),t.to(e,{...Q.apology,x:1.5,y:.255,rot:0,handOpenL:1,handOpenR:1,mEek:1,browY:-1.5,browTilt:15,lid:.35,lookX:-.8,lookY:.5,turn:-.3,duration:.3,ease:"power2.out"},d),t.to(e,{rot:-14,duration:.28,yoyo:!0,repeat:1,ease:"sine.inOut"},d+.15),t.to(e,{lookX:.8,turn:.3,duration:.2},d+.45),t.to(e,{rot:14,duration:.25,yoyo:!0,repeat:1,ease:"sine.inOut"},d+.5),t.to(e,{...Q.relieved,mEek:0,mSmile:1,browTilt:0,browY:-1,lid:.3,handOpenL:0,handOpenR:0,lookX:0,lookY:0,turn:0,duration:.3,ease:"power2.out"},h-.25),t.to(e,{...Q.salute,handOpenR:1,lid:0,duration:.25,ease:"back.out(1.6)"},p),t.to(e,{foreR:40,duration:.18,ease:"sine.out"},p+.35),t.to(e,{...Q.dive,rot:228,handOpenR:0,lookX:0,lookY:0,capeStream:1,trail:1,duration:.3,ease:"power2.inOut"},f-.15),t.to(e,{x:.7,y:.58,scale:.02,duration:.8,ease:"power2.in"},f+.1),t.to(e,{opacity:0,duration:.12},f+.75)}buildWindow(t){let e=this.window.state,o=this.windowKnight.state,s=this.sparkState,[i]=x.dive,[a,c]=x.arrive,[n,l]=x.outside;t.set(e,{...Q.dive,x:930,y:60,rot:200,scale:.12,trail:1,capeStream:1,opacity:0},0),t.set(e,{opacity:1},a+.3),t.to(e,{x:876,y:486,scale:.16,duration:.6,ease:"power2.out"},a+.35),t.to(e,{...Q.stand,rot:0,trail:0,capeStream:.25,lookX:-.4,duration:.3,ease:"back.out(1.8)"},a+.85),t.to(e,{...Q.peek,x:866,rot:-8,handOpenL:1,lookX:-1,lookY:.4,turn:-.5,mSmile:0,mProud:1,lid:.25,duration:.45,ease:"sine.inOut"},a+1.1),t.to(e,{...Q.shh,x:874,rot:0,handOpenL:0,handPointR:1,lookX:0,lookY:0,turn:.1,lid:.1,duration:.35,ease:"sine.inOut"},a+1.75),t.to(e,{...Q.knock,x:868,handPointR:0,handPointL:1,lookX:-1,lookY:.2,turn:-.4,mProud:0,mSmile:1,duration:.3,ease:"sine.inOut"},a+2.3),t.to(e,{foreL:-8,duration:.1,yoyo:!0,repeat:1},a+2.5),t.fromTo(s,{x:846,y:470,o:0,s:.6},{o:1,s:1.3,duration:.12},a+2.6),t.to(s,{x:827,y:478,duration:.35,ease:"sine.inOut"},a+2.66),t.to(s,{o:0,s:.4,duration:.14},a+2.98),t.to(e,{...Q.proud,handPointL:0,lookX:-1,turn:-.5,mSmile:0,mProud:1,duration:.4,ease:"sine.inOut"},c-.2),t.to(e,{...Q.heart,handOpenR:1,mProud:1,mSmile:0,lid:.35,head:4,lookX:-1,turn:-.5,duration:.4,ease:"sine.inOut"},n+.2),t.to(e,{head:10,duration:.3,yoyo:!0,repeat:1,ease:"sine.inOut"},n+.75),t.to(o,{scale:.15,rot:0,duration:.35,ease:"back.out(2.2)"},n+1.2),t.to(e,{lookX:1,turn:.5,lid:0,browY:-2.5,mProud:0,mSmile:1,handOpenR:0,duration:.2},n+1.4),t.to(e,{...Q.poke,handPointR:1,duration:.22,ease:"power2.out"},n+1.55),t.to(o,{y:462,rot:14,duration:.12,ease:"power2.out"},n+1.75),t.to(o,{x:906,y:468,rot:0,duration:.14,ease:"power2.in"},n+1.87),t.fromTo(this.ringState,{r:2,o:.9},{r:70,o:0,duration:.8,ease:"power2.out"},n+1.85),t.to(e,{...Q.proud,handPointR:0,duration:.3},l+.05)}buildFinale(t){let e=this.finale.state,o=this.chaseKnight.state,[s]=x.wave,[i,a]=x.chase;t.set(e,{opacity:1,handOpenR:1,mSmile:1,browY:-3,lookX:0,lookY:0,turn:0},s),t.fromTo(e,{x:1.28,rot:-22},{x:.84,rot:-5,duration:.4,ease:"back.out(1.4)"},s),t.fromTo(e,{foreR:38},{foreR:-16,duration:.2,yoyo:!0,repeat:3,ease:"sine.inOut"},s+.3),t.set(o,{opacity:1,scale:.85,x:1.12,y:.93},i),[.95,.8,.65,.5,.35,.2,.05,-.12,-.3].forEach((n,l)=>{let d=i+.05+l*.19;t.to(o,{x:n,duration:.19,ease:"sine.inOut"},d),t.to(o,{y:.84,rot:-12,sy:1.06,sx:.95,duration:.095,ease:"power2.out"},d),t.to(o,{y:.93,rot:0,sy:1,sx:1,duration:.095,ease:"power2.in"},d+.095)}),t.to(e,{lookX:-1,lookY:.6,turn:-.6,head:-9,foreR:20,browY:-4,mSmile:0,mO:1,duration:.12},i+.2),t.to(e,{lookX:0,lookY:0,turn:.15,head:3,browY:-5.5,duration:.12},i+.55),t.to(e,{lookX:-1,lookY:.4,turn:-.7,head:-10,browY:1,mO:0,mSmile:1,duration:.12},i+.9),t.set(e,{flipX:-1,handOpenR:0},i+1.18),t.to(e,{...Q.fly,rot:-72,lookX:0,lookY:0,turn:0,capeStream:1,trail:1,duration:.15},i+1.18),t.to(e,{x:-.45,y:.95,duration:a-i-1.25,ease:"power2.in"},i+1.22),t.set(e,{opacity:0},a-.001)}update(t,e){let{W:o,H:s,unit:i,profile:a}=this.ctx.responsive,c=a.charScale,n=(d,h,p)=>({x:d*o,y:h*s,s:p*i*c});if(t<x.dive[0]+1){let d=this.space.state,h=d.y;d.y=h+Math.sin(e*1.3)*.004,this.space.apply(this.ctx.spacePlace?.()||n,e),d.y=h}else this.space.state.opacity!==0&&(this.space.state.opacity=0,this.space.apply(n,e));if(this.ctx.layers.world.style.visibility!=="hidden"){let d=this.window.state,h=d.y;d.y=h+Math.sin(e*1.4)*.6,this.window.apply(null,e);let p=this.sparkState;this.spark.setAttribute("transform",`translate(${p.x.toFixed(2)} ${p.y.toFixed(2)}) scale(${p.s.toFixed(3)})`),this.spark.setAttribute("opacity",p.o.toFixed(3)),d.y=h,this.windowKnight.apply(null),this.ring.setAttribute("r",this.ringState.r.toFixed(2)),this.ring.setAttribute("opacity",this.ringState.o.toFixed(3)),this.ring.setAttribute("cx",this.windowKnight.state.x.toFixed(1)),this.ring.setAttribute("cy",(this.windowKnight.state.y-9).toFixed(1))}let l=this.ctx.responsive.portrait;this.finale.apply((d,h,p)=>({x:(d-(l?.08:0))*o,y:(h+(l?.06:0))*s,s:p*i*c*(l?.8:1)}),e),this.chaseKnight.apply(n)}};var Ee=["rnbqkbnr","pppp.ppp","........","....p...","....P...","........","PPPP.PPP","RNBQKBNR"],Qe={p:"pawn",n:"knight",b:"bishop",r:"rook",q:"queen",k:"king"},te=[{kid:"aiko",flag:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#fff"/><circle cx="${r+11}" cy="${t+7.5}" r="4.4" fill="#BC002D"/>`},{kid:"mateo",flag:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#009C3B"/><path d="M${r+11} ${t+2} L${r+20} ${t+7.5} L${r+11} ${t+13} L${r+2} ${t+7.5} Z" fill="#FFDF00"/><circle cx="${r+11}" cy="${t+7.5}" r="3.3" fill="#002776"/>`},{kid:"amani",flag:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#006600"/><rect x="${r}" y="${t}" width="22" height="5" fill="#111"/><rect x="${r}" y="${t+5}" width="22" height="5" fill="#fff"/><rect x="${r}" y="${t+6}" width="22" height="3" fill="#BB0000"/>`},{kid:"layla",flag:(r,t)=>`<rect x="${r}" y="${t}" width="22" height="15" rx="2" fill="#fff"/><rect x="${r}" y="${t}" width="22" height="5" fill="#00732F"/><rect x="${r}" y="${t+10}" width="22" height="5" fill="#111"/><rect x="${r}" y="${t}" width="6" height="15" fill="#FF0000"/>`}];function Ce(r,t,e){let o=t?660:1e3,s=t?1e3:660,i={x:40,y:40,w:o-80,h:s-80},a=t?{x:60,y:114,w:540,h:250}:{x:60,y:114,w:404,h:318},c=t?{x:60,y:374,w:540,h:112}:{x:60,y:444,w:404,h:132},n=t?55:56,l=t?{x:110,y:498}:{x:484,y:122},d=(b,y)=>({x:l.x+b*n,y:l.y+y*n}),h="",p="";for(let b=0;b<8;b++)for(let y=0;y<8;y++){let{x:v,y:C}=d(y,b);h+=`<rect x="${v}" y="${C}" width="${n}" height="${n}" fill="${(b+y)%2?"#2C5BC4":"#EDE7DA"}"/>`;let E=Ee[b][y];if(E!=="."){let S=E===E.toUpperCase(),L=Qe[E.toLowerCase()];p+=`<g ${b===7&&y===6?'data-part="knightMv"':b===7&&y===5?'data-part="bishopMv"':""} transform="translate(${v+n/2} ${C+n-5}) scale(${(n/132).toFixed(3)})">${O(L,`${r}-${S?"ivory":"navy"}`,{tone:S?"ivory":"navy"})}</g>`}}let f=(c.w-24)/4,u=te.map((b,y)=>{let v=c.x+y*(f+8);return`<g data-part="tile${y}">
      <clipPath id="${r}-tile${y}"><rect x="${v}" y="${c.y}" width="${f}" height="${c.h}" rx="10"/></clipPath>
      <rect x="${v}" y="${c.y}" width="${f}" height="${c.h}" rx="10" fill="${["#FBE3D9","#E3F1E6","#FDF1D6","#E2EAFB"][y]}"/>
      <g clip-path="url(#${r}-tile${y})"><g data-part="kidSlot${y}"></g></g>
      <rect x="${v}" y="${c.y}" width="${f}" height="${c.h}" rx="10" fill="none" stroke="#fff" stroke-width="3"/>
      ${b.flag(v+8,c.y+8)}
    </g>`}).join(""),m=Array.from({length:26},(b,y)=>`<rect data-part="cf${y}" width="${6+y%3*2}" height="${4+y%2*3}" rx="1" fill="${["#D8B15E","#2C5BC4","#F2D892","#E5484D","#F7F5F0"][y%5]}" opacity="0"/>`).join(""),g=`
    <defs>
      ${I(r)}
      <linearGradient id="${r}-vid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D3B74"/><stop offset="1" stop-color="#0B1E3D"/></linearGradient>
      <clipPath id="${r}-vclip"><rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" rx="14"/></clipPath>
      <clipPath id="${r}-screen"><rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" rx="16"/></clipPath>
      <radialGradient id="${r}-burst" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3C8"/><stop offset=".5" stop-color="#F2D892" stop-opacity=".6"/><stop offset="1" stop-color="#F2D892" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${o}" height="${s}" rx="46" fill="#0A142E"/>
    <rect x="6" y="6" width="${o-12}" height="${s-12}" rx="41" fill="none" stroke="#2A3F72" stroke-width="3"/>
    <circle cx="${t?o/2:20}" cy="${t?20:s/2}" r="4" fill="#1C2C55"/>
    <g clip-path="url(#${r}-screen)">
      <rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" fill="#F7F5F0"/>
      <g data-part="ui" opacity="0">
        <rect x="${i.x}" y="${i.y}" width="${i.w}" height="62" fill="#FFFFFF"/>
        <path d="M${i.x} ${i.y+62} H${i.x+i.w}" stroke="#DCD8CE" stroke-width="2"/>
        <image href="${e}" x="${i.x+16}" y="${i.y+9}" width="${t?150:170}" height="44" preserveAspectRatio="xMinYMid meet"/>
        <circle data-part="live" cx="${i.x+i.w-30}" cy="${i.y+31}" r="8" fill="#E5484D"/>
        <rect x="${a.x}" y="${a.y}" width="${a.w}" height="${a.h}" rx="14" fill="url(#${r}-vid)"/>
        <g clip-path="url(#${r}-vclip)">
          <path d="M${a.x} ${a.y+a.h*.36} H${a.x+a.w} M${a.x} ${a.y+a.h*.66} H${a.x+a.w}" stroke="#2A4A8A" stroke-width="6"/>
          ${Array.from({length:12},(b,y)=>`<rect x="${a.x+18+y*24}" y="${a.y+a.h*.36-32-y%3*6}" width="17" height="${32+y%3*6}" fill="${["#D8B15E","#F7F5F0","#4A76D6"][y%3]}" opacity=".5"/>`).join("")}
          <g data-part="coachSlot"></g>
        </g>
        ${u}
        <rect x="${l.x-6}" y="${l.y-6}" width="${n*8+12}" height="${n*8+12}" rx="8" fill="#0B1E3D"/>
        ${h}
        <rect data-part="hlA" x="${d(6,7).x}" y="${d(6,7).y}" width="${n}" height="${n}" fill="#D8B15E" opacity="0"/>
        <rect data-part="hlB" x="${d(5,5).x}" y="${d(5,5).y}" width="${n}" height="${n}" fill="#D8B15E" opacity="0"/>
        <rect data-part="hlC" x="${d(5,7).x}" y="${d(5,7).y}" width="${n}" height="${n}" fill="#D8B15E" opacity="0"/>
        <circle data-part="hint" cx="${d(2,4).x+n/2}" cy="${d(2,4).y+n/2}" r="${n*.18}" fill="#D8B15E" opacity="0"/>
        ${p}
        <circle data-part="burst" cx="${d(2,4).x+n/2}" cy="${d(2,4).y+n/2}" r="${n}" fill="url(#${r}-burst)" opacity="0"/>
        <g data-part="check" transform="scale(0)">
          <circle r="16" fill="#2E9E5B" stroke="#fff" stroke-width="3"/><path d="M-7 0 L-2 5 L8 -6" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        ${m}
      </g>
      <g data-part="splash">
        <rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" fill="#FFFFFF"/>
        <g data-part="splashLogo">
          <image href="${e}" x="${o/2-(t?250:330)}" y="${s/2-150}" width="${t?500:660}" height="300" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>
      <rect data-part="flash" x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}" fill="#FFFFFF" opacity="0"/>
    </g>
    <!-- her hand (point of view), reaching up onto the screen -->
    <g data-part="finger" opacity="0">
      <path d="M-11 0 Q-12 -58 -9 -86 Q-6 -98 0 -98 Q6 -98 9 -86 Q12 -58 11 0 Z" fill="#E0A67E"/>
      <path d="M-4 -92 Q0 -95 4 -92" stroke="#F3D2BA" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M-40 60 Q-46 10 -24 -6 Q-12 -14 12 -12 Q34 -6 40 22 L44 90 L-40 90 Z" fill="#D69B73"/>
    </g>
    <ellipse cx="${t?12:16}" cy="${s*.62}" rx="30" ry="46" fill="#E0A67E"/>
    <ellipse cx="${o-(t?12:16)}" cy="${s*.6}" rx="30" ry="46" fill="#E0A67E"/>`,k=J(`tdc-tablet-device ${t?"is-portrait":"is-landscape"}`,`0 0 ${o} ${s}`);k.setAttribute("preserveAspectRatio","xMidYMid meet"),k.appendChild(D(g));let $=_(k);return{svg:k,p:$,video:a,tiles:c,tileW:f,sq:n,at:d,portrait:t,DW:o,DH:s,S:i}}var At=class{constructor(t){this.ctx=t;let e=t.assets.logoHorizontalUrl;this.layouts=[!1,!0].map(o=>{let s=Ce(T("tab"),o,e);t.layers.tablet.appendChild(s.svg);let i=lt({variant:"mentor"});s.p.coachSlot.appendChild(i.root);let a=o?.95:1.28;Object.assign(i.state,Q.stand,{x:s.video.x+s.video.w*(o?.5:.52),y:s.video.y+(o?30:46)+250*a,scale:a,mSmile:1});let c=te.map((f,u)=>{let m=st(kt[f.kid]);s.p[`kidSlot${u}`].appendChild(m.root);let g=o?.36:.4;return Object.assign(m.state,{x:s.tiles.x+u*(s.tileW+8)+s.tileW/2,y:s.tiles.y+s.tiles.h+40*g/.4,scale:g,lid:0,mSleepy:0,mSmile:.2,mSoft:.8,lookY:.2,armL:8,armR:8}),m}),n=(f,u,m)=>new Y(s.p[f],{x:s.at(u,m).x+s.sq/2,y:s.at(u,m).y+s.sq-5,scale:s.sq/132}),l=n("knightMv",6,7),d=n("bishopMv",5,7),h=new Y(s.p.finger,{x:s.DW*.55,y:s.DH+140,scale:o?1.1:1,opacity:0}),p=Array.from({length:26},(f,u)=>({node:s.p[`cf${u}`],x:s.S.x+u*37%100/100*s.S.w,phase:u*.137%1,spin:(u%2?1:-1)*(120+u%5*40)}));return{...s,mentor:i,kids:c,knight:l,bishop:d,finger:h,confetti:p,fx:{ui:0,flash:0,splash:1,hlA:0,hlB:0,hlC:0,hint:0,burst:0,check:0,confetti:0}}}),this.view={s:.62,o:0,iris:0}}build(t){let[e,o]=x.board,s=this.ctx.layers.tablet;t.set(s,{autoAlpha:0},0),t.fromTo(this.view,{s:.9,o:1,iris:0},{s:1,iris:1,duration:.32,ease:"power2.in"},e-.06),t.set(s,{autoAlpha:1},e-.06),t.to(this.view,{s:1.16,o:0,duration:.3,ease:"power2.in"},o-.1),t.set(s,{autoAlpha:0},o+.21);for(let i of this.layouts){let a=i.fx,c=i.mentor.state,n=i.knight.state,l=i.bishop.state,d=i.finger.state,h={x:n.x,y:n.y,s:n.scale},p={x:l.x,y:l.y,s:l.scale},f=i.at(5,5),u=i.at(2,4),m=i.sq/2;t.fromTo(a,{flash:.9},{flash:0,duration:.35},e),t.to(a,{splash:0,ui:1,duration:.3,ease:"sine.inOut"},e+.8),t.to(c,{...Q.wave,handOpenR:1,duration:.25,ease:"sine.out"},e+1),t.fromTo(c,{foreR:30},{foreR:-10,duration:.2,yoyo:!0,repeat:3,ease:"sine.inOut"},e+1.1),i.kids.forEach((g,k)=>{let $=e+1.05+k*.12;t.to(g.state,{armR:140,foreR:30,mSmile:1,mSoft:0,duration:.2,ease:"sine.out"},$),t.to(g.state,{foreR:0,duration:.18,yoyo:!0,repeat:1,ease:"sine.inOut"},$+.2),t.to(g.state,{armR:8,foreR:0,mSmile:.3,mSoft:.7,duration:.25},$+.62)}),t.to(c,{...Q.poke,handOpenR:0,handPointR:1,lookX:1,turn:.4,duration:.25,ease:"sine.inOut"},e+1.7),t.to(c,{mSmile:0,mO:1,duration:.1,yoyo:!0,repeat:3},e+1.75),t.to(a,{hlA:.45,duration:.15},e+1.85),t.to(n,{y:h.y-16,scale:h.s*1.12,rot:-8,duration:.15,ease:"power2.out"},e+1.9),t.to(n,{x:f.x+m,duration:.35,ease:"sine.inOut"},e+2.05),t.to(n,{y:f.y+i.sq-5-26,duration:.35,ease:"sine.out"},e+2.05),t.to(n,{y:f.y+i.sq-5,scale:h.s,rot:0,duration:.12,ease:"power2.in"},e+2.4),t.to(a,{hlA:.15,hlB:.4,duration:.15},e+2.4),t.to(c,{...Q.wave,handPointR:0,handOpenR:1,lookX:0,turn:0,mSmile:1,mO:0,foreR:60,duration:.25,ease:"sine.inOut"},e+2.55),t.to(a,{hlA:0,hlB:0,hlC:.45,hint:1,duration:.2},e+2.6),t.fromTo(d,{x:p.x+30,y:i.DH+140,opacity:1},{x:p.x+4,y:p.y+64,duration:.35,ease:"sine.out"},e+2.7),t.to(d,{sy:.94,sx:.94,duration:.08,yoyo:!0,repeat:1},e+3.05),t.to(l,{y:p.y-16,scale:p.s*1.14,rot:-8,duration:.14,ease:"power2.out"},e+3.1),t.to(l,{x:u.x+m,duration:.35,ease:"sine.inOut"},e+3.22),t.to(l,{y:u.y+i.sq-5-24,duration:.35,ease:"sine.out"},e+3.22),t.to(d,{x:u.x+m+4,y:u.y+i.sq+60,duration:.35,ease:"sine.inOut"},e+3.22),t.to(l,{y:u.y+i.sq-5,scale:p.s,rot:0,duration:.12,ease:"power2.in"},e+3.57),t.to(a,{hlC:0,hint:0,duration:.1},e+3.57),t.fromTo(a,{burst:0},{burst:1,duration:.15,yoyo:!0,repeat:1},e+3.62),t.to(a,{check:1,duration:.3,ease:"back.out(2.5)"},e+3.65),t.to(d,{y:i.DH+160,duration:.3,ease:"sine.in"},e+3.7),t.fromTo(a,{confetti:0},{confetti:.999,duration:.8,ease:"none"},e+3.62),i.kids.forEach((g,k)=>{t.to(g.state,{armL:150,armR:150,foreL:10,foreR:10,mSmile:1,mSoft:0,lid:.3,duration:.2,ease:"back.out(2)"},e+3.68+k*.05)}),t.to(c,{...Q.apology,handOpenL:1,handOpenR:1,handPointR:0,head:0,lid:.3,duration:.2,ease:"sine.out"},e+3.7),t.to(c,{foreL:-128,foreR:-128,duration:.1,yoyo:!0,repeat:3},e+3.8)}this.b0=e}update(t,e){let o=this.ctx.layers.tablet;if(o.style.visibility==="hidden")return;let s=this.ctx.responsive.portrait;o.style.opacity=this.view.o.toFixed(3);let i=this.view.iris*90;o.style.clipPath=i>=89.9?"none":`circle(${i.toFixed(2)}% at 50% 56%)`;for(let a of this.layouts){let c=a.portrait===s;if(a.svg.style.display=c?"":"none",!c)continue;a.svg.style.transform=`scale(${this.view.s.toFixed(4)})`;let n=a.fx,l=(h,p)=>a.p[h].setAttribute("opacity",Math.max(0,Math.min(1,p)).toFixed(3));l("ui",n.ui),l("splash",n.splash),l("flash",n.flash),l("hlA",n.hlA),l("hlB",n.hlB),l("hlC",n.hlC),l("hint",n.hint*(.55+.45*Math.sin(e*6))),l("burst",n.burst),l("live",.6+.4*Math.sin(e*4)),a.p.check.setAttribute("transform",`translate(${a.at(2,4).x+a.sq} ${a.at(2,4).y}) scale(${n.check.toFixed(3)})`);let d=.94+Math.min(1,Math.max(0,t-this.b0+.1))/.9*.08;a.p.splashLogo.setAttribute("transform",`translate(${a.DW/2} ${a.DH/2}) scale(${d.toFixed(4)}) translate(${-a.DW/2} ${-a.DH/2})`);for(let h of a.confetti){if(n.confetti<=0){h.node.setAttribute("opacity","0");continue}let p=n.confetti+h.phase*.35,f=a.S.y+40+p*(a.S.h+40)*.9,u=h.x+Math.sin((p+h.phase)*9)*14;h.node.setAttribute("transform",`translate(${u.toFixed(1)} ${f.toFixed(1)}) rotate(${(p*h.spin).toFixed(1)})`),h.node.setAttribute("opacity",Math.min(1,(1-n.confetti)*3).toFixed(3))}a.mentor.apply(null,e),a.kids.forEach(h=>h.apply(null,e)),a.knight.apply(null),a.bishop.apply(null),a.finger.apply(null)}}};var Et=class{constructor(t){this.ctx=t;let e=t.assets.brandLogo,o=t.layers.brand;o.innerHTML=`
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
      </div>`;let s=o.querySelector(".tdc-brand__img");s.src=e.url;let i=o.querySelector(".tdc-brand__shine");i.style.webkitMaskImage=i.style.maskImage=`url("${e.url}")`,this.el={root:o,logo:o.querySelector(".tdc-brand__logo"),img:s,shine:i,halo:o.querySelector(".tdc-brand__halo"),scrim:o.querySelector(".tdc-brand__scrim"),words:[...o.querySelectorAll(".tdc-w")],diamonds:[...o.querySelectorAll(".tdc-d")]},this.s={reveal:0,blur:12,bright:2.8,scale:.9,opacity:0,shine:-.6,halo:0,scrim:0},this.words=this.el.words.map(()=>({y:16,o:0})),this.diamonds=this.el.diamonds.map(()=>({s:0,o:0}))}build(t){let[e,o]=x.brand,[s]=x.tagline,i=this.s;t.set(this.ctx.layers.brand,{autoAlpha:0},0),t.set(this.ctx.layers.brand,{autoAlpha:1},e),t.to(i,{scrim:1,duration:.8,ease:"sine.inOut"},e),t.to(i,{halo:1,duration:.45,ease:"power2.in"},e+.3),t.to(i,{opacity:1,duration:.2},e+.4),t.to(i,{reveal:1,duration:.7,ease:"power2.out"},e+.42),t.to(i,{blur:0,bright:1,scale:1,duration:.8,ease:"power3.out"},e+.42),t.to(i,{halo:.45,duration:.7,ease:"sine.out"},e+.85),t.to(i,{shine:1.6,duration:.8,ease:"sine.inOut"},o-.2),this.words.forEach((a,c)=>t.to(a,{y:0,o:1,duration:.45,ease:"power3.out"},s+c*.15)),this.diamonds.forEach((a,c)=>t.to(a,{s:1,o:1,duration:.35,ease:"back.out(2.2)"},s+.12+c*.15))}measure(){let t=this.el.logo.getBoundingClientRect(),e=this.ctx.container.getBoundingClientRect();if(!t.height||!e.height)return;let o=t.top+t.height/2-e.top;this.ctx.logoNdcY=1-2*o/e.height}update(){if(this.ctx.layers.brand.style.visibility==="hidden")return;let e=this.s,o=this.el;o.img.style.opacity=e.opacity.toFixed(3),o.img.style.filter=`blur(${e.blur.toFixed(2)}px) brightness(${e.bright.toFixed(3)})`;let s=e.reveal*130,i=`radial-gradient(circle at 50% 45%, #000 ${Math.max(0,s-18).toFixed(1)}%, transparent ${s.toFixed(1)}%)`;o.img.style.webkitMaskImage=o.img.style.maskImage=i,o.logo.style.transform=`scale(${e.scale.toFixed(4)})`,o.shine.style.setProperty("--shine",`${(e.shine*100).toFixed(1)}%`),o.halo.style.opacity=e.halo.toFixed(3),o.scrim.style.opacity=e.scrim.toFixed(3),this.words.forEach((a,c)=>{o.words[c].style.opacity=a.o.toFixed(3),o.words[c].style.transform=`translateY(${a.y.toFixed(2)}px)`}),this.diamonds.forEach((a,c)=>{o.diamonds[c].style.opacity=a.o.toFixed(3),o.diamonds[c].style.transform=`scale(${a.s.toFixed(3)})`})}};var Se=x.wave[0]+.5,ee=class{constructor(t,e,o){this.container=t,this.options=e,this.a11y=o,this.stage=t.querySelector(".tdc-stage"),this.tick=this.tick.bind(this),this.lastT=-1,this.userPaused=!1}async init(){let t=this.options;this.assets=new ft({baseUrl:t.baseUrl,assets:t.assets,THREE:t.THREE,gsap:t.gsap});let[{THREE:e,gsap:o}]=await Promise.all([this.assets.loadLibraries(),this.assets.loadImages()]);this.THREE=e,this.gsap=o,this.layers=this.createLayers(),this.responsive=new yt(this.stage,{forceProfile:t.profile});let s=this.responsive.profile;this.three=new mt(e,this.layers.canvas,s);let i={THREE:e,gsap:o,container:this.stage,layers:this.layers,assets:this.assets,responsive:this.responsive,three:this.three,logoNdcY:.18};this.ctx=i,this.space=new $t(i),this.earth=new wt(i),this.network=new bt(i,this.earth),this.bedroom=new Ft(i),i.bedroom=this.bedroom,this.coach=new Lt(i),this.tablet=new At(i),this.brand=new Et(i),this.scenes=[this.space,this.earth,this.network,this.bedroom,this.coach,this.tablet,this.brand],this.timeline=new ut(o,{onComplete:()=>this.onComplete()});let a=this.timeline.tl;for(let c of this.scenes)c.build(a);return this.buildLayerCuts(a),this.duration=this.timeline.finalize(),this.onResize(),this.responsive.onChange(()=>this.onResize()),this.perf=new tt(this.container,{onVisibleChange:c=>this.onVisible(c)}),this.perf.onDegrade(c=>{this.three.degrade(c),c>=2&&(this.space.dust.visible=!1)}),this.a11y.bind({onToggle:()=>this.timeline.playing?this.pause(!0):this.play(),onReplay:()=>this.restart()}),this.a11y.onReducedMotionChange(c=>{c&&this.showStill()}),!t.gsap&&!window.gsap&&o.ticker.lagSmoothing(0),o.ticker.add(this.tick),this.container.classList.add("tdc-is-ready"),typeof t.startAt=="number"?this.seek(t.startAt):this.a11y.reducedMotion?this.showStill():(this.timeline.seek(0),this.renderFrame(!0),t.autoplay!==!1&&this.perf.visible&&this.play()),t.onReady?.(this),this}createLayers(){let t=this.stage,e=u=>{let m=document.createElement("div");return m.className=`tdc-layer ${u}`,t.appendChild(m),m},o=e("tdc-layer--webgl"),s=document.createElement("canvas");s.setAttribute("aria-hidden","true"),o.appendChild(s);let i=J("tdc-layer tdc-layer--world");t.appendChild(i);let a=e("tdc-layer--clouds"),c=J("tdc-layer tdc-layer--overlay");t.appendChild(c);let n=J("tdc-layer tdc-layer--kids");t.appendChild(n);let l=e("tdc-layer--tablet"),d=e("tdc-layer--brand"),h=J("tdc-layer tdc-layer--front");t.appendChild(h);let p=`tdc-glow-${Math.random().toString(36).slice(2,8)}`;for(let u of[c,h])u.innerHTML=`<defs><filter id="${p}-${u===h?"f":"o"}" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#F2D892" flood-opacity=".32"/>
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#020816" flood-opacity=".45"/></filter></defs>`;let f=e("tdc-layer--fx");return f.innerHTML='<div class="tdc-fx-flash"></div><div class="tdc-fx-vignette"></div><div class="tdc-fx-grain"></div>',{webgl:o,canvas:s,world:i,clouds:a,overlay:c,kids:n,tablet:l,brand:d,front:h,fx:f,flash:f.firstChild,glowId:p}}buildLayerCuts(t){let e=this.layers,[o]=x.dive,[s]=x.reveal,[i]=x.tablet,[a]=x.outside,[c]=x.brand;t.set(e.webgl,{autoAlpha:1},0),t.to(e.webgl,{autoAlpha:0,duration:.1},o+.88),t.to(e.webgl,{autoAlpha:1,duration:.2},s+.35),t.set(e.overlay,{autoAlpha:1},0),t.set(e.overlay,{autoAlpha:0},o+.95),t.set(e.kids,{autoAlpha:0},0),t.set(e.kids,{autoAlpha:1},s+.5),t.set(e.kids,{autoAlpha:0},c+.5),t.set(e.front,{autoAlpha:0},0),t.set(e.front,{autoAlpha:1},x.wave[0]-.01),t.fromTo(e.flash,{opacity:0},{opacity:.16,duration:.1,yoyo:!0,repeat:1},i+1.55),t.fromTo(e.flash,{opacity:0},{opacity:.14,duration:.12,yoyo:!0,repeat:1},a+1.85)}onResize(){let{W:t,H:e,profile:o}=this.responsive;this.three.setSize(t,e,o);for(let s of[this.layers.overlay,this.layers.front,this.layers.kids])s.setAttribute("viewBox",`0 0 ${t} ${e}`);this.layers.world.removeAttribute("viewBox"),this.stage.dataset.profile=o.name,this.stage.classList.toggle("tdc-is-portrait",this.responsive.portrait),this.brand.measure(),this.renderFrame(!0)}tick(t,e){this.timeline.time===this.lastT&&!this.dirty||(this.timeline.playing&&this.perf.sample(e/1e3),this.renderFrame(!1))}renderFrame(t){let e=this.timeline.time;this.lastT=e,this.dirty=!1;let o=e;for(let i of this.scenes)i.update(e,o);(this.layers.webgl.style.visibility!=="hidden"||t)&&this.three.render()}play(){this.userPaused=!1,this.timeline.ended?this.timeline.restart():this.timeline.play(),this.a11y.setPlaying(!0),this.a11y.setEnded(!1)}pause(t=!1){t&&(this.userPaused=!0),this.timeline.pause(),this.a11y.setPlaying(!1)}restart(){this.userPaused=!1,this.timeline.restart(),this.a11y.setPlaying(!0),this.a11y.setEnded(!1)}seek(t){this.userPaused=!0,this.timeline.pause(),this.timeline.seek(t),this.renderFrame(!0),this.a11y.setPlaying(!1)}showStill(){this.timeline.pause(),this.timeline.seek(Se),this.renderFrame(!0),this.a11y.setPlaying(!1),this.container.classList.add("tdc-is-still")}onVisible(t){if(this.timeline)if(t){if(this.userPaused||this.a11y.reducedMotion||this.options.autoplay===!1&&!this.started)return;this.timeline.ended||(this.started=!0,this.play())}else this.timeline.playing&&(this.timeline.pause(),this.a11y.setPlaying(!1))}onComplete(){this.a11y.setPlaying(!1),this.a11y.setEnded(!0),this.renderFrame(!0),this.options.onComplete?.(),this.options.loop&&setTimeout(()=>this.restart(),2500)}destroy(){this.gsap?.ticker.remove(this.tick),this.timeline?.dispose(),this.perf?.dispose(),this.responsive?.dispose(),this.scenes?.forEach(t=>t.dispose?.()),this.three?.dispose(),this.assets?.dispose(),Object.values(this.layers||{}).forEach(t=>t?.remove?.())}};export{ee as SceneManager,W as TARGET_DURATION};
