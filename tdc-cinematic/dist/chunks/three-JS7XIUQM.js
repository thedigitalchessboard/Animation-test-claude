/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var oh=0,Hs=1,lh=2,Ea=1,hh=2,Pr=3,Fi=0,Rt=1,ui=2,pi=0,Nr=1,ks=2,Gs=3,Ws=4,ch=5,lr=100,uh=101,dh=102,ph=103,fh=104,mh=200,gh=201,_h=202,vh=203,Ko=204,Zo=205,Sh=206,Mh=207,xh=208,yh=209,Eh=210,Th=211,bh=212,Ah=213,wh=214,Rn=0,Cn=1,Pn=2,Fr=3,Ln=4,Nn=5,Dn=6,Un=7,Jo=0,Rh=1,Ch=2,Qt=0,$o=1,Qo=2,el=3,tl=4,il=5,rl=6,al=7,nl=300,Bi=301,mr=302,Xa=303,ja=304,za=306,In=1e3,di=1001,On=1002,_t=1003,Ph=1004,Kr=1005,Mt=1006,Ya=1007,Ii=1008,It=1009,sl=1010,ol=1011,Br=1012,_s=1013,ti=1014,Jt=1015,ii=1016,vs=1017,Ss=1018,zr=1020,ll=35902,hl=35899,cl=1021,ul=1022,kt=1023,gi=1026,Oi=1027,dl=1028,Ms=1029,zi=1030,xs=1031,ys=1033,Ta=33776,ba=33777,Aa=33778,wa=33779,Fn=35840,Bn=35841,zn=35842,Vn=35843,Hn=36196,kn=37492,Gn=37496,Wn=37488,Xn=37489,La=37490,jn=37491,Yn=37808,qn=37809,Kn=37810,Zn=37811,Jn=37812,$n=37813,Qn=37814,es=37815,ts=37816,is=37817,rs=37818,as=37819,ns=37820,ss=37821,os=36492,ls=36494,hs=36495,cs=36283,us=36284,Na=36285,ds=36286,Da=2300,ps=2301,qa=2302,Xs=2303,js=2400,Ys=2401,qs=2402,Lh=3200,Ks=0,Nh=1,wi="",Ut="srgb",Ua="srgb-linear",Ia="linear",je="srgb",Ka=7680,Dh=519,Uh=512,Ih=513,Oh=514,Es=515,Fh=516,Bh=517,Ts=518,zh=519,pl=35044,Zs="300 es",$t=2e3,Oa=2001;function Vh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Hh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function kh(){let e=Fa("canvas");return e.style.display="block",e}var Js={},gr=null;function Ba(...e){let t="THREE."+e.shift();gr?gr("log",t,...e):console.log(t,...e)}function fl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function we(...e){e=fl(e);let t="THREE."+e.shift();if(gr)gr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Pe(...e){e=fl(e);let t="THREE."+e.shift();if(gr)gr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function pr(...e){let t=e.join(" ");t in Js||(Js[t]=!0,we(...e))}function Gh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Wh={[Rn]:Cn,[Pn]:Dn,[Ln]:Un,[Fr]:Nn,[Cn]:Rn,[Dn]:Pn,[Un]:Ln,[Nn]:Fr},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=1234567,Dr=Math.PI/180,Vr=180/Math.PI;function fi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[e&255]+vt[e>>8&255]+vt[e>>16&255]+vt[e>>24&255]+"-"+vt[t&255]+vt[t>>8&255]+"-"+vt[t>>16&15|64]+vt[t>>24&255]+"-"+vt[i&63|128]+vt[i>>8&255]+"-"+vt[i>>16&255]+vt[i>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toLowerCase()}function Fe(e,t,i){return Math.max(t,Math.min(i,e))}function bs(e,t){return(e%t+t)%t}function Xh(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function jh(e,t,i){return e!==t?(i-e)/(t-e):0}function Ur(e,t,i){return(1-i)*e+i*t}function Yh(e,t,i,r){return Ur(e,t,1-Math.exp(-i*r))}function qh(e,t=1){return t-Math.abs(bs(e,t*2)-t)}function Kh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Zh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Jh(e,t){return e+Math.floor(Math.random()*(t-e+1))}function $h(e,t){return e+Math.random()*(t-e)}function Qh(e){return e*(.5-Math.random())}function ec(e){e!==void 0&&($s=e);let t=$s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tc(e){return e*Dr}function ic(e){return e*Vr}function rc(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ac(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function nc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function sc(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),p=n((t-r)/2),c=s((t-r)/2),f=n((r-t)/2),S=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*p,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*p,o*h);break;case"ZXZ":e.set(l*p,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*S,l*f,o*h);break;case"YXY":e.set(l*f,o*u,l*S,o*h);break;case"ZYZ":e.set(l*S,l*f,o*u,o*h);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bg={DEG2RAD:Dr,RAD2DEG:Vr,generateUUID:fi,clamp:Fe,euclideanModulo:bs,mapLinear:Xh,inverseLerp:jh,lerp:Ur,damp:Yh,pingpong:qh,smoothstep:Kh,smootherstep:Zh,randInt:Jh,randFloat:$h,randFloatSpread:Qh,seededRandom:ec,degToRad:tc,radToDeg:ic,isPowerOfTwo:rc,ceilPowerOfTwo:ac,floorPowerOfTwo:nc,setQuaternionFromProperEuler:sc,normalize:Ye,denormalize:Ht},ml=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ml.prototype.isVector2=!0;var Ee=ml,Hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],p=a[n+0],c=a[n+1],f=a[n+2],S=a[n+3];if(u!==S||o!==p||l!==c||h!==f){let y=o*p+l*c+h*f+u*S;y<0&&(p=-p,c=-c,f=-f,S=-S,y=-y);let m=1-s;if(y<.9995){let d=Math.acos(y),A=Math.sin(d);m=Math.sin(m*d)/A,s=Math.sin(s*d)/A,o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+S*s}else{o=o*m+p*s,l=l*m+c*s,h=h*m+f*s,u=u*m+S*s;let d=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=d,l*=d,h*=d,u*=d}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],p=a[n+1],c=a[n+2],f=a[n+3];return e[t]=s*f+h*u+o*c-l*p,e[t+1]=o*f+h*p+l*u-s*c,e[t+2]=l*f+h*c+s*p-o*u,e[t+3]=h*f-s*u-o*p-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),p=o(i/2),c=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"YXZ":this._x=p*h*u+l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"ZXY":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u-p*c*f;break;case"ZYX":this._x=p*h*u-l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u+p*c*f;break;case"YZX":this._x=p*h*u+l*c*f,this._y=l*c*u+p*h*f,this._z=l*h*f-p*c*u,this._w=l*h*u-p*c*f;break;case"XZY":this._x=p*h*u-l*c*f,this._y=l*c*u-p*h*f,this._z=l*h*f+p*c*u,this._w=l*h*u+p*c*f;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],p=i+s+u;if(p>0){let c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gl=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Qs.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Qs.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*h+s*p-o*u,this.y=r+l*u+o*h-n*p,this.z=a+l*p+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gl.prototype.isVector3=!0;var U=gl,Za=new U,Qs=new Hi,_l=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],p=r[7],c=r[2],f=r[5],S=r[8],y=a[0],m=a[3],d=a[6],A=a[1],R=a[4],x=a[7],T=a[2],b=a[5],w=a[8];return n[0]=s*y+o*A+l*T,n[3]=s*m+o*R+l*b,n[6]=s*d+o*x+l*w,n[1]=h*y+u*A+p*T,n[4]=h*m+u*R+p*b,n[7]=h*d+u*x+p*w,n[2]=c*y+f*A+S*T,n[5]=c*m+f*R+S*b,n[8]=c*d+f*x+S*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=u*s-o*h,c=o*l-u*n,f=h*n-s*l,S=i*p+r*c+a*f;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/S;return t[0]=p*y,t[1]=(a*h-u*r)*y,t[2]=(o*r-a*s)*y,t[3]=c*y,t[4]=(u*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ja.makeScale(t,i)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ja.makeRotation(-t)),this}translate(t,i){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ja.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_l.prototype.isMatrix3=!0;var De=_l,Ja=new De,eo=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),to=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oc(){let e={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===je&&(a.r=mi(a.r),a.g=mi(a.g),a.b=mi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===je&&(a.r=fr(a.r),a.g=fr(a.g),a.b=fr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wi?Ia:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ua]:{primaries:t,whitePoint:r,transfer:Ia,toXYZ:eo,fromXYZ:to,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:t,whitePoint:r,transfer:je,toXYZ:eo,fromXYZ:to,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),e}var ze=oc();function mi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function fr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Wi,lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=Fa("canvas")),Wi.width=e.width,Wi.height=e.height;let r=Wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=mi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hc=0,As=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push($a(r[n].image)):a.push($a(r[n]))}else a=$a(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function $a(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?lc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var cc=0,Qa=new U,Ot=class Ra extends Vi{constructor(t=Ra.DEFAULT_IMAGE,i=Ra.DEFAULT_MAPPING,r=di,a=di,n=Mt,s=Ii,o=kt,l=It,h=Ra.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=fi(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){we(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){we(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case In:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case On:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case In:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case On:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=nl;Ot.DEFAULT_ANISOTROPY=1;var vl=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],p=s[5],c=s[9],f=s[2],S=s[6],y=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-f)<.01&&Math.abs(c-S)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+f)<.1&&Math.abs(c+S)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,A=(p+1)/2,R=(y+1)/2,x=(l+u)/4,T=(h+f)/4,b=(c+S)/4;return d>A&&d>R?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=x/r,n=T/r):A>R?A<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(A),r=x/a,n=b/a):R<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(R),r=T/n,a=b/n),this.set(r,a,n,i),this}let m=Math.sqrt((S-c)*(S-c)+(h-f)*(h-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(S-c)/m,this.y=(h-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vl.prototype.isVector4=!0;var ct=vl,uc=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Ot(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new As(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends uc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sl=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},dc=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ml=class xl{constructor(t,i,r,a,n,s,o,l,h,u,p,c,f,S,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,p,c,f,S,y,m)}set(t,i,r,a,n,s,o,l,h,u,p,c,f,S,y,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=h,d[6]=u,d[10]=p,d[14]=c,d[3]=f,d[7]=S,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Xi.setFromMatrixColumn(t,0).length(),n=1/Xi.setFromMatrixColumn(t,1).length(),s=1/Xi.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let c=s*u,f=s*p,S=o*u,y=o*p;i[0]=l*u,i[4]=-l*p,i[8]=h,i[1]=f+S*h,i[5]=c-y*h,i[9]=-o*l,i[2]=y-c*h,i[6]=S+f*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,f=l*p,S=h*u,y=h*p;i[0]=c+y*o,i[4]=S*o-f,i[8]=s*h,i[1]=s*p,i[5]=s*u,i[9]=-o,i[2]=f*o-S,i[6]=y+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,f=l*p,S=h*u,y=h*p;i[0]=c-y*o,i[4]=-s*p,i[8]=S+f*o,i[1]=f+S*o,i[5]=s*u,i[9]=y-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,f=s*p,S=o*u,y=o*p;i[0]=l*u,i[4]=S*h-f,i[8]=c*h+y,i[1]=l*p,i[5]=y*h+c,i[9]=f*h-S,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,f=s*h,S=o*l,y=o*h;i[0]=l*u,i[4]=y-c*p,i[8]=S*p+f,i[1]=p,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=f*p+S,i[10]=c-y*p}else if(t.order==="XZY"){let c=s*l,f=s*h,S=o*l,y=o*h;i[0]=l*u,i[4]=-p,i[8]=h*u,i[1]=c*p+y,i[5]=s*u,i[9]=f*p-S,i[2]=S*p-f,i[6]=o*u,i[10]=y*p+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pc,t,fc)}lookAt(t,i,r){let a=this.elements;return Pt.subVectors(t,i),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xi.crossVectors(r,Pt),xi.lengthSq()===0&&(Math.abs(r.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xi.crossVectors(r,Pt)),xi.normalize(),Zr.crossVectors(Pt,xi),a[0]=xi.x,a[4]=Zr.x,a[8]=Pt.x,a[1]=xi.y,a[5]=Zr.y,a[9]=Pt.y,a[2]=xi.z,a[6]=Zr.z,a[10]=Pt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],p=r[5],c=r[9],f=r[13],S=r[2],y=r[6],m=r[10],d=r[14],A=r[3],R=r[7],x=r[11],T=r[15],b=a[0],w=a[4],_=a[8],E=a[12],W=a[1],I=a[5],B=a[9],K=a[13],O=a[2],V=a[6],J=a[10],H=a[14],oe=a[3],X=a[7],Y=a[11],$=a[15];return n[0]=s*b+o*W+l*O+h*oe,n[4]=s*w+o*I+l*V+h*X,n[8]=s*_+o*B+l*J+h*Y,n[12]=s*E+o*K+l*H+h*$,n[1]=u*b+p*W+c*O+f*oe,n[5]=u*w+p*I+c*V+f*X,n[9]=u*_+p*B+c*J+f*Y,n[13]=u*E+p*K+c*H+f*$,n[2]=S*b+y*W+m*O+d*oe,n[6]=S*w+y*I+m*V+d*X,n[10]=S*_+y*B+m*J+d*Y,n[14]=S*E+y*K+m*H+d*$,n[3]=A*b+R*W+x*O+T*oe,n[7]=A*w+R*I+x*V+T*X,n[11]=A*_+R*B+x*J+T*Y,n[15]=A*E+R*K+x*H+T*$,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],p=t[6],c=t[10],f=t[14],S=t[3],y=t[7],m=t[11],d=t[15],A=l*f-h*c,R=o*f-h*p,x=o*c-l*p,T=s*f-h*u,b=s*c-l*u,w=s*p-o*u;return i*(y*A-m*R+d*x)-r*(S*A-m*T+d*b)+a*(S*R-y*T+d*w)-n*(S*x-y*b+m*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],p=t[9],c=t[10],f=t[11],S=t[12],y=t[13],m=t[14],d=t[15],A=i*o-r*s,R=i*l-a*s,x=i*h-n*s,T=r*l-a*o,b=r*h-n*o,w=a*h-n*l,_=u*y-p*S,E=u*m-c*S,W=u*d-f*S,I=p*m-c*y,B=p*d-f*y,K=c*d-f*m,O=A*K-R*B+x*I+T*W-b*E+w*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/O;return t[0]=(o*K-l*B+h*I)*V,t[1]=(a*B-r*K-n*I)*V,t[2]=(y*w-m*b+d*T)*V,t[3]=(c*b-p*w-f*T)*V,t[4]=(l*W-s*K-h*E)*V,t[5]=(i*K-a*W+n*E)*V,t[6]=(m*x-S*w-d*R)*V,t[7]=(u*w-c*x+f*R)*V,t[8]=(s*B-o*W+h*_)*V,t[9]=(r*W-i*B-n*_)*V,t[10]=(S*b-y*x+d*A)*V,t[11]=(p*x-u*b-f*A)*V,t[12]=(o*E-s*I-l*_)*V,t[13]=(i*I-r*E+a*_)*V,t[14]=(y*R-S*T-m*A)*V,t[15]=(u*T-p*R+c*A)*V,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,p=o+o,c=n*h,f=n*u,S=n*p,y=s*u,m=s*p,d=o*p,A=l*h,R=l*u,x=l*p,T=r.x,b=r.y,w=r.z;return a[0]=(1-(y+d))*T,a[1]=(f+x)*T,a[2]=(S-R)*T,a[3]=0,a[4]=(f-x)*b,a[5]=(1-(c+d))*b,a[6]=(m+A)*b,a[7]=0,a[8]=(S+R)*w,a[9]=(m-A)*w,a[10]=(1-(c+y))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Xi.set(a[0],a[1],a[2]).length(),o=Xi.set(a[4],a[5],a[6]).length(),l=Xi.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Ft.copy(this);let h=1/s,u=1/o,p=1/l;return Ft.elements[0]*=h,Ft.elements[1]*=h,Ft.elements[2]*=h,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=p,Ft.elements[9]*=p,Ft.elements[10]*=p,i.setFromRotationMatrix(Ft),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=$t,l=!1){let h=this.elements,u=2*n/(i-t),p=2*n/(r-a),c=(i+t)/(i-t),f=(r+a)/(r-a),S,y;if(l)S=n/(s-n),y=s*n/(s-n);else if(o===$t)S=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===Oa)S=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=p,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=$t,l=!1){let h=this.elements,u=2/(i-t),p=2/(r-a),c=-(i+t)/(i-t),f=-(r+a)/(r-a),S,y;if(l)S=1/(s-n),y=s/(s-n);else if(o===$t)S=-2/(s-n),y=-(s+n)/(s-n);else if(o===Oa)S=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=p,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=S,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Ml.prototype.isMatrix4=!0;var ot=Ml,Xi=new U,Ft=new ot,pc=new U(0,0,0),fc=new U(1,1,1),xi=new U,Zr=new U,Pt=new U,io=new ot,ro=new Hi,Hr=class yl{constructor(t=0,i=0,r=0,a=yl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],p=a[2],c=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Fe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(io,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hr.DEFAULT_ORDER="XYZ";var El=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mc=0,ao=new U,ji=new Hi,si=new ot,Jr=new U,xr=new U,gc=new U,_c=new Hi,no=new U(1,0,0),so=new U(0,1,0),oo=new U(0,0,1),lo={type:"added"},vc={type:"removed"},Yi={type:"childadded",child:null},en={type:"childremoved",child:null},Wt=class Ca extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ca.DEFAULT_UP.clone();let t=new U,i=new Hr,r=new Hi,a=new U(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new De}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ca.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ca.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ji.setFromAxisAngle(t,i),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,i){return ji.setFromAxisAngle(t,i),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(no,t)}rotateY(t){return this.rotateOnAxis(so,t)}rotateZ(t){return this.rotateOnAxis(oo,t)}translateOnAxis(t,i){return ao.copy(t).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(no,t)}translateY(t){return this.translateOnAxis(so,t)}translateZ(t){return this.translateOnAxis(oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jr.copy(t):Jr.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(xr,Jr,this.up):si.lookAt(Jr,xr,this.up),this.quaternion.setFromRotationMatrix(si),a&&(si.extractRotation(a.matrixWorld),ji.setFromRotationMatrix(si),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lo),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vc),en.child=t,this.dispatchEvent(en),en.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lo),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,gc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,_c,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let p=l[h];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),p=s(t.shapes),c=s(t.skeletons),f=s(t.animations),S=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),p.length>0&&(r.shapes=p),c.length>0&&(r.skeletons=c),f.length>0&&(r.animations=f),S.length>0&&(r.nodes=S)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new U(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $r=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sc={type:"move"},tn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let S of e.hand.values()){let y=t.getJointPose(S,i),m=this._getHandJoint(l,S);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),c=.02,f=.005;l.inputState.pinching&&p>c+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=c-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sc)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function rn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ze.workingColorSpace){if(e=bs(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=rn(n,a,e+1/3),this.g=rn(n,a,e),this.b=rn(n,a,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function i(a){a!==void 0&&parseFloat(a)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Tl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ze.workingToColorSpace(St.copy(this),e),Math.round(Fe(St.r*255,0,255))*65536+Math.round(Fe(St.g*255,0,255))*256+Math.round(Fe(St.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(St.copy(this),t);let i=St.r,r=St.g,a=St.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Ut){ze.workingToColorSpace(St.copy(this),e);let t=St.r,i=St.g,r=St.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Qr);let i=Ur(yi.h,Qr.h,t),r=Ur(yi.s,Qr.s,t),a=Ur(yi.l,Qr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new He;He.NAMES=Tl;var Pg=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bt=new U,oi=new U,an=new U,li=new U,qi=new U,Ki=new U,ho=new U,nn=new U,sn=new U,on=new U,ln=new ct,hn=new ct,cn=new ct,hr=class cr{constructor(t=new U,i=new U,r=new U){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Bt.subVectors(t,i),a.cross(Bt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Bt.subVectors(a,i),oi.subVectors(r,i),an.subVectors(t,i);let s=Bt.dot(Bt),o=Bt.dot(oi),l=Bt.dot(an),h=oi.dot(oi),u=oi.dot(an),p=s*h-o*o;if(p===0)return n.set(0,0,0),null;let c=1/p,f=(h*l-o*u)*c,S=(s*u-o*l)*c;return n.set(1-f-S,S,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,li.x),l.addScaledVector(s,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return ln.setScalar(0),hn.setScalar(0),cn.setScalar(0),ln.fromBufferAttribute(t,i),hn.fromBufferAttribute(t,r),cn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ln,n.x),s.addScaledVector(hn,n.y),s.addScaledVector(cn,n.z),s}static isFrontFacing(t,i,r,a){return Bt.subVectors(r,i),oi.subVectors(t,i),Bt.cross(oi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bt.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bt.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return cr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return cr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return cr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;qi.subVectors(a,r),Ki.subVectors(n,r),nn.subVectors(t,r);let l=qi.dot(nn),h=Ki.dot(nn);if(l<=0&&h<=0)return i.copy(r);sn.subVectors(t,a);let u=qi.dot(sn),p=Ki.dot(sn);if(u>=0&&p<=u)return i.copy(a);let c=l*p-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(qi,s);on.subVectors(t,n);let f=qi.dot(on),S=Ki.dot(on);if(S>=0&&f<=S)return i.copy(n);let y=f*h-l*S;if(y<=0&&h>=0&&S<=0)return o=h/(h-S),i.copy(r).addScaledVector(Ki,o);let m=u*S-f*p;if(m<=0&&p-u>=0&&f-S>=0)return ho.subVectors(n,a),o=(p-u)/(p-u+(f-S)),i.copy(a).addScaledVector(ho,o);let d=1/(m+y+c);return s=y*d,o=c*d,i.copy(r).addScaledVector(qi,s).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,zt):zt.fromBufferAttribute(a,n),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ta.subVectors(this.max,yr),Zi.subVectors(e.a,yr),Ji.subVectors(e.b,yr),$i.subVectors(e.c,yr),Ei.subVectors(Ji,Zi),Ti.subVectors($i,Ji),Pi.subVectors(Zi,$i);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Pi.z,Pi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Pi.z,0,-Pi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Pi.y,Pi.x,0];return!un(t,Zi,Ji,$i,ta)||(t=[1,0,0,0,1,0,0,0,1],!un(t,Zi,Ji,$i,ta))?!1:(ia.crossVectors(Ei,Ti),t=[ia.x,ia.y,ia.z],un(t,Zi,Ji,$i,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new U,new U,new U,new U,new U,new U,new U,new U],zt=new U,ea=new Gr,Zi=new U,Ji=new U,$i=new U,Ei=new U,Ti=new U,Pi=new U,yr=new U,ta=new U,ia=new U,Li=new U;function un(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Li.fromArray(e,n);let o=a.x*Math.abs(Li.x)+a.y*Math.abs(Li.y)+a.z*Math.abs(Li.z),l=t.dot(Li),h=i.dot(Li),u=r.dot(Li);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var ht=new U,ra=new Ee,Mc=0,ei=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},bl=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Al=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}},bt=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}},xc=new Gr,Er=new U,dn=new U,Va=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(dn)),this.expandByPoint(Er.copy(e.center).sub(dn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yc=0,Dt=new ot,pn=new Wt,Qi=new U,Lt=new Gr,Tr=new Gr,gt=new U,Xt=class wl extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Al:bl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new De().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dt.makeRotationFromQuaternion(t),this.applyMatrix4(Dt),this}rotateX(t){return Dt.makeRotationX(t),this.applyMatrix4(Dt),this}rotateY(t){return Dt.makeRotationY(t),this.applyMatrix4(Dt),this}rotateZ(t){return Dt.makeRotationZ(t),this.applyMatrix4(Dt),this}translate(t,i,r){return Dt.makeTranslation(t,i,r),this.applyMatrix4(Dt),this}scale(t,i,r){return Dt.makeScale(t,i,r),this.applyMatrix4(Dt),this}lookAt(t){return pn.lookAt(t),pn.updateMatrix(),this.applyMatrix4(pn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new bt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Lt.setFromBufferAttribute(n),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let r=this.boundingSphere.center;if(Lt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Lt.min,Tr.min),Lt.expandByPoint(gt),gt.addVectors(Lt.max,Tr.max),Lt.expandByPoint(gt)):(Lt.expandByPoint(Tr.min),Lt.expandByPoint(Tr.max))}Lt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)gt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(gt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)gt.fromBufferAttribute(o,h),l&&(Qi.fromBufferAttribute(t,h),gt.add(Qi)),a=Math.max(a,r.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ei(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<r.count;_++)o[_]=new U,l[_]=new U;let h=new U,u=new U,p=new U,c=new Ee,f=new Ee,S=new Ee,y=new U,m=new U;function d(_,E,W){h.fromBufferAttribute(r,_),u.fromBufferAttribute(r,E),p.fromBufferAttribute(r,W),c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,E),S.fromBufferAttribute(n,W),u.sub(h),p.sub(h),f.sub(c),S.sub(c);let I=1/(f.x*S.y-S.x*f.y);isFinite(I)&&(y.copy(u).multiplyScalar(S.y).addScaledVector(p,-f.y).multiplyScalar(I),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-S.x).multiplyScalar(I),o[_].add(y),o[E].add(y),o[W].add(y),l[_].add(m),l[E].add(m),l[W].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let _=0,E=A.length;_<E;++_){let W=A[_],I=W.start,B=W.count;for(let K=I,O=I+B;K<O;K+=3)d(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let R=new U,x=new U,T=new U,b=new U;function w(_){T.fromBufferAttribute(a,_),b.copy(T);let E=o[_];R.copy(E),R.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(b,E);let W=x.dot(l[_])<0?-1:1;s.setXYZW(_,R.x,R.y,R.z,W)}for(let _=0,E=A.length;_<E;++_){let W=A[_],I=W.start,B=W.count;for(let K=I,O=I+B;K<O;K+=3)w(t.getX(K+0)),w(t.getX(K+1)),w(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,f=r.count;c<f;c++)r.setXYZ(c,0,0,0);let a=new U,n=new U,s=new U,o=new U,l=new U,h=new U,u=new U,p=new U;if(t)for(let c=0,f=t.count;c<f;c+=3){let S=t.getX(c+0),y=t.getX(c+1),m=t.getX(c+2);a.fromBufferAttribute(i,S),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),o.fromBufferAttribute(r,S),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(S,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,f=i.count;c<f;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gt.fromBufferAttribute(t,i),gt.normalize(),t.setXYZ(i,gt.x,gt.y,gt.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,p=o.normalized,c=new h.constructor(l.length*u),f=0,S=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let d=0;d<u;d++)c[S++]=h[f++]}return new ei(c,u,p)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new wl,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,p=h.length;u<p;u++){let c=h[u],f=t(c,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let p=0,c=h.length;p<c;p++){let f=h[p];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],p=n[h];for(let c=0,f=p.length;c<f;c++)u.push(p[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let p=s[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ec=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Et=new U,co=class Rl{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.applyMatrix4(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.applyNormalMatrix(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.transformDirection(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ht(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ye(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ht(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ht(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ht(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ht(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array),n=Ye(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new ei(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fn=new U,Tc=new U,bc=new De,Ai=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=fn.subVectors(i,t).cross(Tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(fn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bc.getNormalMatrix(e),r=this.coplanarPoint(fn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ac=0,vr=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Nr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wc=class extends vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,br=new U,tr=new U,ir=new U,rr=new Ee,Ar=new Ee,Cl=new ot,aa=new U,wr=new U,na=new U,uo=new Ee,mn=new Ee,po=new Ee,Lg=class extends Wt{constructor(e=new wc){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ec(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new co(i,3,0,!1)),er.setAttribute("uv",new co(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Cl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-ir.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;sa(aa.set(-.5,-.5,0),ir,n,tr,r,a),sa(wr.set(.5,-.5,0),ir,n,tr,r,a),sa(na.set(.5,.5,0),ir,n,tr,r,a),uo.set(0,0),mn.set(1,0),po.set(1,1);let s=e.ray.intersectTriangle(aa,wr,na,!1,br);if(s===null&&(sa(wr.set(-.5,.5,0),ir,n,tr,r,a),mn.set(0,1),s=e.ray.intersectTriangle(aa,na,wr,!1,br),s===null))return;let o=e.ray.origin.distanceTo(br);o<e.near||o>e.far||t.push({distance:o,point:br.clone(),uv:hr.getInterpolation(br,aa,wr,na,uo,mn,po,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sa(e,t,i,r,a,n){rr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(Ar.x=n*rr.x-a*rr.y,Ar.y=a*rr.x+n*rr.y):Ar.copy(rr),e.copy(t),e.x+=Ar.x,e.y+=Ar.y,e.applyMatrix4(Cl)}var ci=new U,gn=new U,oa=new U,la=new U,Pl=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gn.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),la.copy(this.origin).sub(gn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(oa),s=la.dot(this.direction),o=-la.dot(oa),l=la.lengthSq(),h=Math.abs(1-n*n),u,p,c,f;if(h>0)if(u=n*o-s,p=n*s-o,f=a*h,u>=0)if(p>=-f)if(p<=f){let S=1/h;u*=S,p*=S,c=u*(u+n*p+2*s)+p*(n*u+p+2*o)+l}else p=a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p=-a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;else p<=-f?(u=Math.max(0,-(-n*a+s)),p=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l):p<=f?(u=0,p=Math.min(Math.max(-a,-o),a),c=p*(p+2*o)+l):(u=Math.max(0,-(n*a+s)),p=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+p*(p+2*o)+l);else p=n>0?-a:a,u=Math.max(0,-(n*p+s)),c=-u*u+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gn).addScaledVector(oa,p),c}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),r=ci.dot(ci)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-p.z)*u,o=(e.max.z-p.z)*u):(s=(e.max.z-p.z)*u,o=(e.min.z-p.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,u=e.x-n.x,p=e.y-n.y,c=e.z-n.z,f=t.x-n.x,S=t.y-n.y,y=t.z-n.z,m=i.x-n.x,d=i.y-n.y,A=i.z-n.z,R=Math.abs(o),x=Math.abs(l),T=Math.abs(h),b,w,_,E,W,I,B,K,O,V,J,H;if(R>=x&&R>=T?(_=o,I=u,O=f,H=m,o>=0?(b=l,w=h,E=p,W=c,B=S,K=y,V=d,J=A):(b=h,w=l,E=c,W=p,B=y,K=S,V=A,J=d)):x>=T?(_=l,I=p,O=S,H=d,l>=0?(b=h,w=o,E=c,W=u,B=y,K=f,V=A,J=m):(b=o,w=h,E=u,W=c,B=f,K=y,V=m,J=A)):(_=h,I=c,O=y,H=A,h>=0?(b=o,w=l,E=u,W=p,B=f,K=S,V=m,J=d):(b=l,w=o,E=p,W=u,B=S,K=f,V=d,J=m)),_===0)return null;let oe=b/_,X=w/_,Y=1/_,$=E-oe*I,Ie=W-X*I,ye=B-oe*O,et=K-X*O,Ue=V-oe*H,j=J-X*H,ie=Ue*et-j*ye,ne=$*j-Ie*Ue,be=ye*Ie-et*$;if(r){if(ie<0||ne<0||be<0)return null}else if((ie<0||ne<0||be<0)&&(ie>0||ne>0||be>0))return null;let Ce=ie+ne+be;if(Ce===0)return null;let pe=Y*(ie*I+ne*O+be*H);return(Ce>0?pe<0:pe>0)?null:this.at(pe/Ce,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ll=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fo=new ot,Ni=new Pl,ha=new Va,mo=new U,ca=new U,ua=new U,da=new U,_n=new U,pa=new U,go=new U,fa=new U,_i=class extends Wt{constructor(e=new Xt,t=new Ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){pa.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(_n.fromBufferAttribute(u,e),n?pa.addScaledVector(_n,h):pa.addScaledVector(_n.sub(t),h))}t.add(pa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),!(ha.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ha,mo)===null||Ni.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(fo.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(fo),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,S=p.length;f<S;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),A=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let R=d,x=A;R<x;R+=3){let T=s.getX(R),b=s.getX(R+1),w=s.getX(R+2);r=ma(this,m,e,i,l,h,u,T,b,w),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),S=Math.min(s.count,c.start+c.count);for(let y=f,m=S;y<m;y+=3){let d=s.getX(y),A=s.getX(y+1),R=s.getX(y+2);r=ma(this,n,e,i,l,h,u,d,A,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,S=p.length;f<S;f++){let y=p[f],m=n[y.materialIndex],d=Math.max(y.start,c.start),A=Math.min(o.count,Math.min(y.start+y.count,c.start+c.count));for(let R=d,x=A;R<x;R+=3){let T=R,b=R+1,w=R+2;r=ma(this,m,e,i,l,h,u,T,b,w),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),S=Math.min(o.count,c.start+c.count);for(let y=f,m=S;y<m;y+=3){let d=y,A=y+1,R=y+2;r=ma(this,n,e,i,l,h,u,d,A,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Rc(e,t,i,r,a,n,s,o){let l;if(t.side===Rt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Fi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(fa);return h<i.near||h>i.far?null:{distance:h,point:fa.clone(),object:e}}function ma(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,ca),e.getVertexPosition(l,ua),e.getVertexPosition(h,da);let u=Rc(e,t,i,r,ca,ua,da,go);if(u){let p=new U;hr.getBarycoord(go,ca,ua,da,p),a&&(u.uv=hr.getInterpolatedAttribute(a,o,l,h,p,new Ee)),n&&(u.uv1=hr.getInterpolatedAttribute(n,o,l,h,p,new Ee)),s&&(u.normal=hr.getInterpolatedAttribute(s,o,l,h,p,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new U,materialIndex:0};hr.getNormal(ca,ua,da,c.normal),u.face=c,u.barycoord=p}return u}var Cc=class extends Ot{constructor(e=null,t=1,i=1,r,a,n,s,o,l=_t,h=_t,u,p){super(null,n,s,o,l,h,r,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=new Va,Pc=new Ee(.5,.5),ga=new U,Nl=class{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,a=new Ai,n=new Ai){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$t,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],p=a[6],c=a[7],f=a[8],S=a[9],y=a[10],m=a[11],d=a[12],A=a[13],R=a[14],x=a[15];if(r[0].setComponents(l-n,c-h,m-f,x-d).normalize(),r[1].setComponents(l+n,c+h,m+f,x+d).normalize(),r[2].setComponents(l+s,c+u,m+S,x+A).normalize(),r[3].setComponents(l-s,c-u,m-S,x-A).normalize(),i)r[4].setComponents(o,p,y,R).normalize(),r[5].setComponents(l-o,c-p,m-y,x-R).normalize();else if(r[4].setComponents(l-o,c-p,m-y,x-R).normalize(),t===$t)r[5].setComponents(l+o,c+p,m+y,x+R).normalize();else if(t===Oa)r[5].setComponents(o,p,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=Pc.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lc=class extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_o=new ot,fs=new Pl,_a=new Va,va=new U,Ng=class extends Wt{constructor(e=new Xt,t=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=a,e.ray.intersectsSphere(_a)===!1)return;_o.copy(r).invert(),fs.copy(e.ray).applyMatrix4(_o);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let c=u,f=p;c<f;c++){let S=l.getX(c);va.fromBufferAttribute(h,S),vo(va,S,o,r,e,t,this)}}else{let u=Math.max(0,n.start),p=Math.min(h.count,n.start+n.count);for(let c=u,f=p;c<f;c++)va.fromBufferAttribute(h,c),vo(va,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function vo(e,t,i,r,a,n,s){let o=fs.distanceSqToPoint(e);if(o<i){let l=new U;fs.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Dl=class extends Ot{constructor(e=[],t=Bi,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dg=class extends Ot{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kr=class extends Ot{constructor(e,t,i=ti,r,a,n,s=_t,o=_t,l,h=gi,u=1){if(h!==gi&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nc=class extends kr{constructor(e,t=ti,i=Bi,r,a,n=_t,s=_t,o,l=gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ul=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ws=class Il extends Xt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],p=[],c=0,f=0;S("z","y","x",-1,-1,r,i,t,s,n,0),S("z","y","x",1,-1,r,i,-t,s,n,1),S("x","z","y",1,1,t,r,i,a,s,2),S("x","z","y",1,-1,t,r,-i,a,s,3),S("x","y","z",1,-1,t,i,r,a,n,4),S("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(p,2));function S(y,m,d,A,R,x,T,b,w,_,E){let W=x/w,I=T/_,B=x/2,K=T/2,O=b/2,V=w+1,J=_+1,H=0,oe=0,X=new U;for(let Y=0;Y<J;Y++){let $=Y*I-K;for(let Ie=0;Ie<V;Ie++){let ye=Ie*W-B;X[y]=ye*A,X[m]=$*R,X[d]=O,h.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[d]=b>0?1:-1,u.push(X.x,X.y,X.z),p.push(Ie/w),p.push(1-Y/_),H+=1}}for(let Y=0;Y<_;Y++)for(let $=0;$<w;$++){let Ie=c+$+V*Y,ye=c+$+V*(Y+1),et=c+($+1)+V*(Y+1),Ue=c+($+1)+V*Y;l.push(Ie,ye,Ue),l.push(ye,et,Ue),oe+=6}o.addGroup(f,oe,E),f+=oe,c+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,p=(n-h)/u;return(r+p)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Ee:new U);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,r=[],a=[],n=[],s=new U,o=new ot;for(let c=0;c<=e;c++){let f=c/e;r[c]=this.getTangentAt(f,new U)}a[0]=new U,n[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),p<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Fe(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,f))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos(Fe(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],c*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ol=class extends vi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ee){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=o-this.aX,c=l-this.aY;o=p*h-c*u+this.aX,l=p*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends Ol{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Rs(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,p){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+p)+(l-o)/p;c*=u,f*=u,a(s,o,c,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var So=new U,Mo=new U,vn=new Rs,Sn=new Rs,Mn=new Rs,Uc=class extends vi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Mo.subVectors(r[0],r[1]).add(r[0]),l=Mo);let u=r[s%a],p=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(So.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),c),S=Math.pow(u.distanceToSquared(p),c),y=Math.pow(p.distanceToSquared(h),c);S<1e-4&&(S=1),f<1e-4&&(f=S),y<1e-4&&(y=S),vn.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,f,S,y),Sn.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,f,S,y),Mn.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,f,S,y)}else this.curveType==="catmullrom"&&(vn.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Sn.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Mn.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return i.set(vn.calc(o),Sn.calc(o),Mn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xo(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Ic(e,t){let i=1-e;return i*i*t}function Oc(e,t){return 2*(1-e)*e*t}function Fc(e,t){return e*e*t}function Ir(e,t,i,r){return Ic(e,t)+Oc(e,i)+Fc(e,r)}function Bc(e,t){let i=1-e;return i*i*i*t}function zc(e,t){let i=1-e;return 3*i*i*e*t}function Vc(e,t){return 3*(1-e)*e*e*t}function Hc(e,t){return e*e*e*t}function Or(e,t,i,r,a){return Bc(e,t)+zc(e,i)+Vc(e,r)+Hc(e,a)}var kc=class extends vi{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Or(e,r.x,a.x,n.x,s.x),Or(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gc=class extends vi{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Or(e,r.x,a.x,n.x,s.x),Or(e,r.y,a.y,n.y,s.y),Or(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends vi{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends vi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends vi{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ir(e,r.x,a.x,n.x),Ir(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fl=class extends vi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ir(e,r.x,a.x,n.x),Ir(e,r.y,a.y,n.y),Ir(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(xo(s,o.x,l.x,h.x,u.x),xo(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Uc,CubicBezierCurve:kc,CubicBezierCurve3:Gc,EllipseCurve:Ol,LineCurve:Wc,LineCurve3:Xc,QuadraticBezierCurve:jc,QuadraticBezierCurve3:Fl,SplineCurve:Yc}),Bl=class zl extends Xt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,p=t/o,c=i/l,f=[],S=[],y=[],m=[];for(let d=0;d<u;d++){let A=d*c-s;for(let R=0;R<h;R++){let x=R*p-n;S.push(x,-A,0),y.push(0,0,1),m.push(R/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){let R=A+h*d,x=A+h*(d+1),T=A+1+h*(d+1),b=A+1+h*d;f.push(R,x,b),f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new bt(S,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.width,t.height,t.widthSegments,t.heightSegments)}},Ug=class Vl extends Xt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],p=new U,c=new U,f=[],S=[],y=[],m=[];for(let d=0;d<=r;d++){let A=[],R=d/r,x=s+R*o,T=t*Math.cos(x),b=Math.sqrt(t*t-T*T),w=0;d===0&&s===0?w=.5/i:d===r&&l===Math.PI&&(w=-.5/i);for(let _=0;_<=i;_++){let E=_/i,W=a+E*n;p.x=-b*Math.cos(W),p.y=T,p.z=b*Math.sin(W),S.push(p.x,p.y,p.z),c.copy(p).normalize(),y.push(c.x,c.y,c.z),m.push(E+w,1-R),A.push(h++)}u.push(A)}for(let d=0;d<r;d++)for(let A=0;A<i;A++){let R=u[d][A+1],x=u[d][A],T=u[d+1][A],b=u[d+1][A+1];(d!==0||s>0)&&f.push(R,x,b),(d!==r-1||l<Math.PI)&&f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new bt(S,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ig=class Hl extends Xt{constructor(t=new Fl(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new U,l=new U,h=new Ee,u=new U,p=[],c=[],f=[],S=[];y(),this.setIndex(S),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(f,2));function y(){for(let R=0;R<i;R++)m(R);m(n===!1?i:0),A(),d()}function m(R){u=t.getPointAt(R/i,u);let x=s.normals[R],T=s.binormals[R];for(let b=0;b<=a;b++){let w=b/a*Math.PI*2,_=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+_*T.x,l.y=E*x.y+_*T.y,l.z=E*x.z+_*T.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let R=1;R<=i;R++)for(let x=1;x<=a;x++){let T=(a+1)*(R-1)+(x-1),b=(a+1)*R+(x-1),w=(a+1)*R+x,_=(a+1)*(R-1)+x;S.push(T,b,_),S.push(b,w,_)}}function A(){for(let R=0;R<=i;R++)for(let x=0;x<=a;x++)h.x=R/i,h.y=x/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hl(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _r(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(yo(a))a.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(yo(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Tt(e){let t={};for(let i=0;i<e.length;i++){let r=_r(e[i]);for(let a in r)t[a]=r[a]}return t}function yo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Kc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function kl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var Zc={clone:_r,merge:Tt},Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new De().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qc=class extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},eu=class extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tu=class extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ar(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function xn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Wr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},iu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:js,endingEnd:js}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Ys:a=e,s=2*t-i;break;case qs:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Ys:n=e,o=2*i-t;break;case qs:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,c=this._weightNext,f=(i-t)/(r-t),S=f*f,y=S*f,m=-p*y+2*p*S-p*f,d=(1+p)*y+(-1.5-2*p)*S+(-.5+p)*f+1,A=(-1-c)*y+(1.5+c)*S+.5*f,R=c*y-c*S;for(let x=0;x!==s;++x)a[x]=m*n[h+x]+d*n[l+x]+A*n[o+x]+R*n[u+x];return a}},ru=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let p=0;p!==s;++p)a[p]=n[l+p]*u+n[o+p]*h;return a}},au=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},nu=class extends Wr{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(r-t),S=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*S+n[o+y]*f;return a}let p=s*2,c=e-1;for(let f=0;f!==s;++f){let S=n[l+f],y=n[o+f],m=c*p+f*2,d=u[m],A=u[m+1],R=e*p+f*2,x=h[R],T=h[R+1],b=ou(i,t,d,x,r);a[f]=Gl(b,S,A,T,y)}return a}};function Gl(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function su(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function ou(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Gl(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=su(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var ai=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),xn(e.settings)&&(i.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break;case Xs:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;xn(this.settings)&&(Eo(this.settings.inTangents,e),Eo(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Pe("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Hh(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qa,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,p=u-i,c=u+i;for(let f=0;f!==i;++f){let S=t[u+f];if(S!==t[p+f]||S!==t[c+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,p=n*i;for(let c=0;c!==i;++c)t[p+c]=t[u+c]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,xn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Eo(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ps;var Xr=class extends ai{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Da;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};lu.prototype.ValueTypeName="color";var hu=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};hu.prototype.ValueTypeName="number";var cu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Hi.slerpFlat(a,0,n,l-s,n,l,o);return a}},Wl=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends ai{constructor(e,t,i){super(e,t,i)}};jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Da;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};uu.prototype.ValueTypeName="vector";var du=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let c=l[u],f=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new du,fu=class{constructor(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=new U,Ma=new Hi,qt=new U,Xl=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sa,Ma,qt),qt.x===1&&qt.y===1&&qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ma,qt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Sa,Ma,qt),qt.x===1&&qt.y===1&&qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ma,qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new U,To=new Ee,bo=new Ee,Vt=class extends Xl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,To,bo),t.subVectors(bo,To)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jl=class extends Xl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=-90,sr=1,mu=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(nr,sr,e,t);r.layers=this.layers,this.add(r);let a=new Vt(nr,sr,e,t);a.layers=this.layers,this.add(a);let n=new Vt(nr,sr,e,t);n.layers=this.layers,this.add(n);let s=new Vt(nr,sr,e,t);s.layers=this.layers,this.add(s);let o=new Vt(nr,sr,e,t);o.layers=this.layers,this.add(o);let l=new Vt(nr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===$t)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,c),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},gu=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Cs="\\[\\]\\.:\\/",_u=new RegExp("["+Cs+"]","g"),Ps="[^"+Cs+"]",vu="[^"+Cs.replace("\\.","")+"]",Su=/((?:WC+[\/:])*)/.source.replace("WC",Ps),Mu=/(WCOD+)?/.source.replace("WCOD",vu),xu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ps),yu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ps),Eu=new RegExp("^"+Su+Mu+xu+yu+"$"),Tu=["material","materials","bones","map"],bu=class{constructor(e,t,i){let r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},at=class ur{constructor(t,i,r){this.path=i,this.parsedPath=r||ur.parseTrackName(i),this.node=ur.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ur.Composite(t,i,r):new ur(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_u,"")}static parseTrackName(t){let i=Eu.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Tu.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=ur.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=bu;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1),Au=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}};Au.prototype.isMatrix2=!0;function Ao(e,t,i,r){let a=wu(r);switch(i){case cl:return e*t;case dl:return e*t/a.components*a.byteLength;case Ms:return e*t/a.components*a.byteLength;case zi:return e*t*2/a.components*a.byteLength;case xs:return e*t*2/a.components*a.byteLength;case ul:return e*t*3/a.components*a.byteLength;case kt:return e*t*4/a.components*a.byteLength;case ys:return e*t*4/a.components*a.byteLength;case Ta:case ba:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Aa:case wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bn:case Vn:return Math.max(e,16)*Math.max(t,8)/4;case Fn:case zn:return Math.max(e,8)*Math.max(t,8)/2;case Hn:case kn:case Wn:case Xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gn:case La:case jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Zn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Jn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $n:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Qn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case es:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ts:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case is:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case rs:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case as:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ns:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ss:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case os:case ls:case hs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case cs:case us:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Na:case ds:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wu(e){switch(e){case It:case sl:return{byteLength:1,components:1};case Br:case ol:case ii:return{byteLength:2,components:1};case vs:case Ss:return{byteLength:2,components:4};case ti:case _s:case Jt:return{byteLength:4,components:1};case ll:case hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Yl(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Ru(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,p=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,h){let u=l.array,p=l.updateRanges;if(e.bindBuffer(h,o),p.length===0)e.bufferSubData(h,0,u);else{p.sort((f,S)=>f.start-S.start);let c=0;for(let f=1;f<p.length;f++){let S=p[c],y=p[f];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++c,p[c]=y)}p.length=c+1;for(let f=0,S=p.length;f<S;f++){let y=p[f];e.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
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
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,wd=`uniform sampler2D dfgLUT;
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
	vec3 f0 = material.specularColorBlended;
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Rd=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Yp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,$p=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Qp=`#define STANDARD
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
}`,ef=`#define STANDARD
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
}`,tf=`#define TOON
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
}`,rf=`#define TOON
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
}`,af=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,of=`uniform vec3 color;
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
}`,lf=`uniform float rotation;
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
}`,hf=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Nu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Iu,aomap_pars_fragment:Ou,batching_pars_vertex:Fu,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Vu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Yu,color_fragment:qu,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:$u,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:nd,colorspace_pars_fragment:sd,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:hd,envmap_pars_vertex:cd,envmap_physical_pars_fragment:xd,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:fd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Sd,lights_pars_begin:Md,lights_toon_fragment:yd,lights_toon_pars_fragment:Ed,lights_phong_fragment:Td,lights_phong_pars_fragment:bd,lights_physical_fragment:Ad,lights_physical_pars_fragment:wd,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,lightprobes_pars_fragment:Ld,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Id,map_fragment:Od,map_pars_fragment:Fd,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:kd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:jd,normal_fragment_begin:Yd,normal_fragment_maps:qd,normal_pars_fragment:Kd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ip,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:np,project_vertex:sp,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:pp,shadowmask_pars_fragment:fp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:Sp,specularmap_pars_fragment:Mp,tonemapping_fragment:xp,tonemapping_pars_fragment:yp,transmission_fragment:Ep,transmission_pars_fragment:Tp,uv_pars_fragment:bp,uv_pars_vertex:Ap,uv_vertex:wp,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Np,cube_vert:Dp,cube_frag:Up,depth_vert:Ip,depth_frag:Op,distance_vert:Fp,distance_frag:Bp,equirect_vert:zp,equirect_frag:Vp,linedashed_vert:Hp,linedashed_frag:kp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:jp,meshmatcap_vert:Yp,meshmatcap_frag:qp,meshnormal_vert:Kp,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:$p,meshphysical_vert:Qp,meshphysical_frag:ef,meshtoon_vert:tf,meshtoon_frag:rf,points_vert:af,points_frag:nf,shadow_vert:sf,shadow_frag:of,sprite_vert:lf,sprite_frag:hf},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Zt={basic:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Tt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Tt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Tt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Tt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Tt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Tt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Tt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Tt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Tt([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Tt([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zt.physical={uniforms:Tt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var xa={r:0,b:0,g:0},cf=new ot,ql=new De;ql.set(-1,0,0,0,1,0,0,0,1);function uf(e,t,i,r,a,n){let s=new He(0),o=a===!0?0:1,l,h,u=null,p=0,c=null;function f(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let x=A.backgroundBlurriness>0;R=t.get(R,x)}return R}function S(A){let R=!1,x=f(A);x===null?m(s,o):x&&x.isColor&&(m(x,1),R=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(A,R){let x=f(R);x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new _i(new ws(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:_r(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ql),h.material.toneMapped=ze.getTransfer(x.colorSpace)!==je,(u!==x||p!==x.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,c=e.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _i(new Bl(2,2),new ri({name:"BackgroundMaterial",uniforms:_r(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ze.getTransfer(x.colorSpace)!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,c=e.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,R){A.getRGB(xa,kl(e)),i.buffers.color.setClear(xa.r,xa.g,xa.b,R,n)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,R=1){s.set(A),o=R,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(s,o)},render:S,addToRenderList:y,dispose:d}}function df(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(I,B,K,O,V){let J=!1,H=p(I,O,K,B);n!==H&&(n=H,h(n.object)),J=f(I,O,K,V),J&&S(I,O,K,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,x(I,B,K,O),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function h(I){return e.bindVertexArray(I)}function u(I){return e.deleteVertexArray(I)}function p(I,B,K,O){let V=O.wireframe===!0,J=r[B.id];J===void 0&&(J={},r[B.id]=J);let H=I.isInstancedMesh===!0?I.id:0,oe=J[H];oe===void 0&&(oe={},J[H]=oe);let X=oe[K.id];X===void 0&&(X={},oe[K.id]=X);let Y=X[V];return Y===void 0&&(Y=c(l()),X[V]=Y),Y}function c(I){let B=[],K=[],O=[];for(let V=0;V<i;V++)B[V]=0,K[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:O,object:I,attributes:{},index:null}}function f(I,B,K,O){let V=n.attributes,J=B.attributes,H=0,oe=K.getAttributes();for(let X in oe)if(oe[X].location>=0){let Y=V[X],$=J[X];if($===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;H++}return n.attributesNum!==H||n.index!==O}function S(I,B,K,O){let V={},J=B.attributes,H=0,oe=K.getAttributes();for(let X in oe)if(oe[X].location>=0){let Y=J[X];Y===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),V[X]=$,H++}n.attributes=V,n.attributesNum=H,n.index=O}function y(){let I=n.newAttributes;for(let B=0,K=I.length;B<K;B++)I[B]=0}function m(I){d(I,0)}function d(I,B){let K=n.newAttributes,O=n.enabledAttributes,V=n.attributeDivisors;K[I]=1,O[I]===0&&(e.enableVertexAttribArray(I),O[I]=1),V[I]!==B&&(e.vertexAttribDivisor(I,B),V[I]=B)}function A(){let I=n.newAttributes,B=n.enabledAttributes;for(let K=0,O=B.length;K<O;K++)B[K]!==I[K]&&(e.disableVertexAttribArray(K),B[K]=0)}function R(I,B,K,O,V,J,H){H===!0?e.vertexAttribIPointer(I,B,K,V,J):e.vertexAttribPointer(I,B,K,O,V,J)}function x(I,B,K,O){y();let V=O.attributes,J=K.getAttributes(),H=B.defaultAttributeValues;for(let oe in J){let X=J[oe];if(X.location>=0){let Y=V[oe];if(Y===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let $=Y.normalized,Ie=Y.itemSize,ye=t.get(Y);if(ye===void 0)continue;let et=ye.buffer,Ue=ye.type,j=ye.bytesPerElement,ie=Ue===e.INT||Ue===e.UNSIGNED_INT||Y.gpuType===_s;if(Y.isInterleavedBufferAttribute){let ne=Y.data,be=ne.stride,Ce=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let pe=0;pe<X.locationSize;pe++)d(X.location+pe,ne.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe);e.bindBuffer(e.ARRAY_BUFFER,et);for(let pe=0;pe<X.locationSize;pe++)R(X.location+pe,Ie/X.locationSize,Ue,$,be*j,(Ce+Ie/X.locationSize*pe)*j,ie)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)d(X.location+ne,Y.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<X.locationSize;ne++)m(X.location+ne);e.bindBuffer(e.ARRAY_BUFFER,et);for(let ne=0;ne<X.locationSize;ne++)R(X.location+ne,Ie/X.locationSize,Ue,$,Ie*j,Ie/X.locationSize*ne*j,ie)}}else if(H!==void 0){let $=H[oe];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(X.location,$);break;case 3:e.vertexAttrib3fv(X.location,$);break;case 4:e.vertexAttrib4fv(X.location,$);break;default:e.vertexAttrib1fv(X.location,$)}}}}A()}function T(){E();for(let I in r){let B=r[I];for(let K in B){let O=B[K];for(let V in O){let J=O[V];for(let H in J)u(J[H].object),delete J[H];delete O[V]}}delete r[I]}}function b(I){if(r[I.id]===void 0)return;let B=r[I.id];for(let K in B){let O=B[K];for(let V in O){let J=O[V];for(let H in J)u(J[H].object),delete J[H];delete O[V]}}delete r[I.id]}function w(I){for(let B in r){let K=r[B];for(let O in K){let V=K[O];if(V[I.id]===void 0)continue;let J=V[I.id];for(let H in J)u(J[H].object),delete J[H];delete V[I.id]}}}function _(I){for(let B in r){let K=r[B],O=I.isInstancedMesh===!0?I.id:0,V=K[O];if(V!==void 0){for(let J in V){let H=V[J];for(let oe in H)u(H[oe].object),delete H[oe];delete V[J]}delete K[O],Object.keys(K).length===0&&delete r[B]}}}function E(){W(),s=!0,n!==a&&(n=a,h(n.object))}function W(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:W,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function pf(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let p=0;for(let c=0;c<u;c++)p+=h[c];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function ff(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==kt&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==It&&w!==Jt&&!_&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(we("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:x,maxSamples:T,samples:b}}function mf(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ai,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let f=p.length!==0||c||r!==0||a;return a=c,r=p.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,c){i=u(p,c,0)},this.setState=function(p,c,f){let S=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||S===null||S.length===0||n&&!m)n?u(null):h();else{let A=n?0:r,R=A*4,x=d.clippingState||null;l.value=x,x=u(S,c,R,f);for(let T=0;T!==R;++T)x[T]=i[T];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(p,c,f,S){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,S!==!0||m===null){let d=f+y*4,A=c.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,x=f;R!==y;++R,x+=4)s.copy(p[R]).applyMatrix4(A,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var dr=4,gf=6,_f=20,vf=256,Rr=new jl,wo=new He,yn=null,En=0,Tn=0,bn=!1,Sf=new U,Ui=new U,Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Sf}=a;yn=this._renderer.getRenderTarget(),En=this._renderer.getActiveCubeFace(),Tn=this._renderer.getActiveMipmapLevel(),bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yn,En,Tn),this._renderer.xr.enabled=bn,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yn=this._renderer.getRenderTarget(),En=this._renderer.getActiveCubeFace(),Tn=this._renderer.getActiveMipmapLevel(),bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:ii,format:kt,colorSpace:Ua,depthBuffer:!1},r=Co(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mf(a)),this._blurMaterial=yf(a,e,t),this._ggxMaterial=xf(a,e,t)}return r}_compileMaterial(e){let t=new _i(new Xt,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,i,r,a){let n=new Vt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(wo),l.toneMapping=Qt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new ws,new Ll({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,c=p.material,f=!1,S=e.background;S?S.isColor&&(c.color.copy(S),e.background=null,f=!0):(c.color.copy(wo),f=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):m===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let d=this._cubeSize;or(r,m*d,y>2?d:0,d,d),l.setRenderTarget(r),f&&l.render(p,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Bi||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;or(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Rr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),p=l*1.25,c=u*p,{_lodMax:f}=this,S=this._sizeLods[i],y=3*S*(i>f-dr?i-f+dr:0),m=4*(this._cubeSize-S);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=f-t,or(a,y,m,3*S,2*S),r.setRenderTarget(a),r.render(s,Rr),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,or(e,y,m,3*S,2*S),r.setRenderTarget(e),r.render(s,Rr)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-dr?r-this._lodMax+dr:0),p=4*(this._cubeSize-h);or(t,u,p,3*h,2*h),n.setRenderTarget(t),n.render(o,Rr)}};function Mf(e){let t=[],i=[],r=e,a=e-dr+1+gf;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,c=6,f=3,S=new Float32Array(f*c*p),y=new Float32Array(f*c*p);for(let d=0;d<p;d++){let A=d%3*2/3-1,R=d>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(x,f*c*d);for(let T=0;T<c;T++){let b=u[T*2]*2-1,w=u[T*2+1]*2-1;d===0?Ui.set(1,w,b):d===1?Ui.set(-b,1,-w):d===2?Ui.set(-b,w,1):d===3?Ui.set(-1,w,-b):d===4?Ui.set(-b,-1,w):Ui.set(b,w,-1),Ui.toArray(y,(d*c+T)*f)}}let m=new Xt;m.setAttribute("position",new ei(S,f)),m.setAttribute("outputDirection",new ei(y,f)),i.push(new _i(m,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:t}}function Co(e,t,i){let r=new Gt(e,t,i);return r.texture.mapping=za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function or(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function xf(e,t,i){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function yf(e,t,i){return new ri({name:"SphericalGaussianBlur",defines:{SAMPLES:_f,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Po(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Lo(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:pi});a.uniforms.tEquirect.value=t;let n=new _i(r,a),s=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Mt),new mu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Ef(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,f=!1){return c==null?null:f?s(c):n(c)}function n(c){if(c&&c.isTexture){let f=c.mapping;if(f===Xa||f===ja)if(t.has(c)){let S=t.get(c).texture;return o(S,c.mapping)}else{let S=c.image;if(S&&S.height>0){let y=new Kl(S.height);return y.fromEquirectangularTexture(e,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let f=c.mapping,S=f===Xa||f===ja,y=f===Bi||f===mr;if(S||y){let m=i.get(c),d=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return r===null&&(r=new Ro(e)),m=S?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let A=c.image;return S&&A&&A.height>0||y&&A&&l(A)?(r===null&&(r=new Ro(e)),m=S?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,f){return f===Xa?c.mapping=Bi:f===ja&&(c.mapping=mr),c}function l(c){let f=0,S=6;for(let y=0;y<S;y++)c[y]!==void 0&&f++;return f===S}function h(c){let f=c.target;f.removeEventListener("dispose",h);let S=t.get(f);S!==void 0&&(t.delete(f),S.dispose())}function u(c){let f=c.target;f.removeEventListener("dispose",u);let S=i.get(f);S!==void 0&&(i.delete(f),S.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function Tf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&pr("WebGLRenderer: "+r+" extension not supported."),a}}}function bf(e,t,i,r){let a={},n=new WeakMap;function s(p){let c=p.target;c.index!==null&&t.remove(c.index);for(let S in c.attributes)t.remove(c.attributes[S]);c.removeEventListener("dispose",s),delete a[c.id];let f=n.get(c);f&&(t.remove(f),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(p,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function l(p){let c=p.attributes;for(let f in c)t.update(c[f],e.ARRAY_BUFFER)}function h(p){let c=[],f=p.index,S=p.attributes.position,y=0;if(S===void 0)return;if(f!==null){let A=f.array;y=f.version;for(let R=0,x=A.length;R<x;R+=3){let T=A[R+0],b=A[R+1],w=A[R+2];c.push(T,b,b,w,w,T)}}else{let A=S.array;y=S.version;for(let R=0,x=A.length/3-1;R<x;R+=3){let T=R+0,b=R+1,w=R+2;c.push(T,b,b,w,w,T)}}let m=new(S.count>=65535?Al:bl)(c,1);m.version=y;let d=n.get(p);d&&t.remove(d),n.set(p,m)}function u(p){let c=n.get(p);if(c){let f=p.index;f!==null&&c.version<f.version&&h(p)}else h(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function Af(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,c){e.drawElements(r,c,n,p*s),i.update(c,r,1)}function h(p,c,f){f!==0&&(e.drawElementsInstanced(r,c,n,p*s,f),i.update(c,r,f))}function u(p,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,p,0,f);let S=0;for(let y=0;y<f;y++)S+=c[y];i.update(S,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function wf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Pe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Rf(e,t,i){let r=new WeakMap,a=new ct;function n(s,o,l){let h=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==p){let f=function(){_.dispose(),r.delete(o),o.removeEventListener("dispose",f)};c!==void 0&&c.texture.dispose();let S=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],x=0;S===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*b*4*p),_=new Sl(w,T,b,p);_.type=Jt,_.needsUpdate=!0;let E=x*4;for(let W=0;W<p;W++){let I=d[W],B=A[W],K=R[W],O=T*b*4*W;for(let V=0;V<I.count;V++){let J=V*E;S===!0&&(a.fromBufferAttribute(I,V),w[O+J+0]=a.x,w[O+J+1]=a.y,w[O+J+2]=a.z,w[O+J+3]=0),y===!0&&(a.fromBufferAttribute(B,V),w[O+J+4]=a.x,w[O+J+5]=a.y,w[O+J+6]=a.z,w[O+J+7]=0),m===!0&&(a.fromBufferAttribute(K,V),w[O+J+8]=a.x,w[O+J+9]=a.y,w[O+J+10]=a.z,w[O+J+11]=K.itemSize===4?a.w:1)}}c={count:p,texture:_,size:new Ee(T,b)},r.set(o,c),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let S=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function Cf(e,t,i,r,a){let n=new WeakMap;function s(h){let u=a.render.frame,p=h.geometry,c=t.get(h,p);if(n.get(c)!==u&&(t.update(c),n.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,u))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==u&&(f.update(),n.set(f,u))}return c}function o(){n=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var Pf={[$o]:"LINEAR_TONE_MAPPING",[Qo]:"REINHARD_TONE_MAPPING",[el]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[rl]:"AGX_TONE_MAPPING",[al]:"NEUTRAL_TONE_MAPPING",[il]:"CUSTOM_TONE_MAPPING"};function Lf(e,t,i,r,a,n){let s=new Gt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Xt;h.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bt([0,2,0,0,2,0],2));let u=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _i(h,u),c=new jl(-1,1,1,-1,0,1),f=null,S=null,y=!1,m,d=null,A=[],R=!1;this.setSize=function(x,T){s.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let b=0;b<A.length;b++){let w=A[b];w.setSize&&w.setSize(x,T)}},this.setEffects=function(x){A=x,R=A.length>0&&A[0].isRenderPass===!0;let T=s.width,b=s.height;A.length>0&&o===null&&(o=new Gt(T,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(T,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){let _=A[w];_.setSize&&_.setSize(T,b)}},this.begin=function(x,T){if(y||x.toneMapping===Qt&&A.length===0)return!1;if(d=T,T!==null){let b=T.width,w=T.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return R===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=Qt,!0},this.hasRenderPass=function(){return R},this.end=function(x,T){x.toneMapping=m,y=!0;let b=s,w=o;for(let _=0;_<A.length;_++){let E=A[_];E.enabled!==!1&&(E.render(x,w,b,T),E.needsSwap!==!1&&(b=w,w=w===o?l:o))}if(f!==x.outputColorSpace||S!==x.toneMapping){f=x.outputColorSpace,S=x.toneMapping,u.defines={},ze.getTransfer(f)===je&&(u.defines.SRGB_TRANSFER="");let _=Pf[S];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(d),x.render(p,c),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zl=new Ot,ms=new kr(1,1),Jl=new Sl,$l=new dc,Ql=new Dl,No=[],Do=[],Uo=new Float32Array(16),Io=new Float32Array(9),Oo=new Float32Array(4);function Sr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=No[a];if(n===void 0&&(n=new Float32Array(a),No[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function ft(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function mt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ka(e,t){let i=Do[t];i===void 0&&(i=new Int32Array(t),Do[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Nf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Df(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2fv(this.addr,t),mt(i,t)}}function Uf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ft(i,t))return;e.uniform3fv(this.addr,t),mt(i,t)}}function If(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4fv(this.addr,t),mt(i,t)}}function Of(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;Oo.set(r),e.uniformMatrix2fv(this.addr,!1,Oo),mt(i,r)}}function Ff(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;Io.set(r),e.uniformMatrix3fv(this.addr,!1,Io),mt(i,r)}}function Bf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ft(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),mt(i,t)}else{if(ft(i,r))return;Uo.set(r),e.uniformMatrix4fv(this.addr,!1,Uo),mt(i,r)}}function zf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Vf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2iv(this.addr,t),mt(i,t)}}function Hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ft(i,t))return;e.uniform3iv(this.addr,t),mt(i,t)}}function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4iv(this.addr,t),mt(i,t)}}function Gf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Wf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ft(i,t))return;e.uniform2uiv(this.addr,t),mt(i,t)}}function Xf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ft(i,t))return;e.uniform3uiv(this.addr,t),mt(i,t)}}function jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ft(i,t))return;e.uniform4uiv(this.addr,t),mt(i,t)}}function Yf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ms.compareFunction=i.isReversedDepthBuffer()?Ts:Es,n=ms):n=Zl,i.setTexture2D(t||n,a)}function qf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||$l,a)}function Kf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Ql,a)}function Zf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Jl,a)}function Jf(e){switch(e){case 5126:return Nf;case 35664:return Df;case 35665:return Uf;case 35666:return If;case 35674:return Of;case 35675:return Ff;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Vf;case 35668:case 35672:return Hf;case 35669:case 35673:return kf;case 5125:return Gf;case 36294:return Wf;case 36295:return Xf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}function $f(e,t){e.uniform1fv(this.addr,t)}function Qf(e,t){let i=Sr(t,this.size,2);e.uniform2fv(this.addr,i)}function em(e,t){let i=Sr(t,this.size,3);e.uniform3fv(this.addr,i)}function tm(e,t){let i=Sr(t,this.size,4);e.uniform4fv(this.addr,i)}function im(e,t){let i=Sr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function rm(e,t){let i=Sr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function am(e,t){let i=Sr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function nm(e,t){e.uniform1iv(this.addr,t)}function sm(e,t){e.uniform2iv(this.addr,t)}function om(e,t){e.uniform3iv(this.addr,t)}function lm(e,t){e.uniform4iv(this.addr,t)}function hm(e,t){e.uniform1uiv(this.addr,t)}function cm(e,t){e.uniform2uiv(this.addr,t)}function um(e,t){e.uniform3uiv(this.addr,t)}function dm(e,t){e.uniform4uiv(this.addr,t)}function pm(e,t,i){let r=this.cache,a=t.length,n=ka(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ms:s=Zl;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function fm(e,t,i){let r=this.cache,a=t.length,n=ka(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||$l,n[s])}function mm(e,t,i){let r=this.cache,a=t.length,n=ka(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Ql,n[s])}function gm(e,t,i){let r=this.cache,a=t.length,n=ka(i,a);ft(r,n)||(e.uniform1iv(this.addr,n),mt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Jl,n[s])}function _m(e){switch(e){case 5126:return $f;case 35664:return Qf;case 35665:return em;case 35666:return tm;case 35674:return im;case 35675:return rm;case 35676:return am;case 5124:case 35670:return nm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return hm;case 36294:return cm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}var vm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jf(t.type)}},Sm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}},Mm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},An=/(\w+)(\])?(\[|\.)?/g;function Fo(e,t){e.seq.push(t),e.map[t.id]=t}function xm(e,t,i){let r=e.name,a=r.length;for(An.lastIndex=0;;){let n=An.exec(r),s=An.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Fo(i,h===void 0?new vm(o,e,t):new Sm(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new Mm(o),Fo(i,u)),i=u}}}var Pa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);xm(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Bo(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var ym=37297,Em=0;function Tm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var zo=new De;function bm(e){ze._getMatrix(zo,ze.workingColorSpace,e);let t=`mat3( ${zo.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(e)){case Ia:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Vo(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Tm(e.getShaderSource(t),s)}else return a}function Am(e,t){let i=bm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var wm={[$o]:"Linear",[Qo]:"Reinhard",[el]:"Cineon",[tl]:"ACESFilmic",[rl]:"AgX",[al]:"Neutral",[il]:"Custom"};function Rm(e,t){let i=wm[t];return i===void 0?(we("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var ya=new U;function Cm(){ze.getLuminanceCoefficients(ya);let e=ya.x.toFixed(4),t=ya.y.toFixed(4),i=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Lm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Nm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Lr(e){return e!==""}function Ho(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ko(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function gs(e){return e.replace(Dm,Im)}var Um=new Map;function Im(e,t){let i=Oe[t];if(i===void 0){let r=Um.get(t);if(r!==void 0)i=Oe[r],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gs(i)}var Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Go(e){return e.replace(Om,Fm)}function Fm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Wo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Bm={[Ea]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function zm(e){return Bm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vm={[Bi]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function Hm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Vm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var km={[mr]:"ENVMAP_MODE_REFRACTION"};function Gm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":km[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wm={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ch]:"ENVMAP_BLENDING_ADD"};function Xm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Wm[e.combine]||"ENVMAP_BLENDING_NONE"}function jm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ym(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=zm(i),h=Hm(i),u=Gm(i),p=Xm(i),c=jm(i),f=Pm(i),S=Lm(n),y=a.createProgram(),m,d,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Wo(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Wo(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qt?"#define TONE_MAPPING":"",i.toneMapping!==Qt?Oe.tonemapping_pars_fragment:"",i.toneMapping!==Qt?Rm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Am("linearToOutputTexel",i.outputColorSpace),Cm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lr).join(`
`)),s=gs(s),s=Ho(s,i),s=ko(s,i),o=gs(o),o=Ho(o,i),o=ko(o,i),s=Go(s),o=Go(o),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",i.glslVersion===Zs?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=A+m+s,x=A+d+o,T=Bo(a,a.VERTEX_SHADER,R),b=Bo(a,a.FRAGMENT_SHADER,x);a.attachShader(y,T),a.attachShader(y,b),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function w(I){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(y)||"",K=a.getShaderInfoLog(T)||"",O=a.getShaderInfoLog(b)||"",V=B.trim(),J=K.trim(),H=O.trim(),oe=!0,X=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,b);else{let Y=Vo(a,T,"vertex"),$=Vo(a,b,"fragment");Pe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Y+`
`+$)}else V!==""?we("WebGLProgram: Program Info Log:",V):(J===""||H==="")&&(X=!1);X&&(I.diagnostics={runnable:oe,programLog:V,vertexShader:{log:J,prefix:m},fragmentShader:{log:H,prefix:d}})}a.deleteShader(T),a.deleteShader(b),_=new Pa(a,y),E=Nm(a,y)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=a.getProgramParameter(y,ym)),W},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=b,this}var qm=0,Km=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zm(e),t.set(e,i)),i}},Zm=class{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}};function Jm(e){return e===zi||e===La||e===Na}function $m(e,t,i,r,a,n){let s=new El,o=new Km,l=new Set,h=[],u=new Map,p=r.logarithmicDepthBuffer,c=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,W,I,B,K){let O=I.fog,V=B.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=t.get(_.envMap||J,H),X=oe&&oe.mapping===za?oe.image.height:null,Y=f[_.type];_.precision!==null&&(c=r.getMaxPrecision(_.precision),c!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));let $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=$!==void 0?$.length:0,ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let et,Ue,j,ie;if(Y){let pt=Zt[Y];et=pt.vertexShader,Ue=pt.fragmentShader}else{et=_.vertexShader,Ue=_.fragmentShader;let pt=o.getVertexShaderStage(_),Xe=o.getFragmentShaderStage(_);o.update(_,pt,Xe),j=pt.id,ie=Xe.id}let ne=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,pe=B.isBatchedMesh===!0,qe=!!_.map,ke=!!_.matcap,Ne=!!oe,nt=!!_.aoMap,xt=!!_.lightMap,Ct=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,At=!!_.displacementMap,ut=!!_.emissiveMap,dt=!!_.metalnessMap,L=!!_.roughnessMap,wt=_.anisotropy>0,Ge=_.clearcoat>0,it=_.dispersion>0,M=_.retroreflectivity>0,g=_.iridescence>0,C=_.sheen>0,k=_.transmission>0,Z=wt&&!!_.anisotropyMap,se=Ge&&!!_.clearcoatMap,ce=Ge&&!!_.clearcoatNormalMap,D=Ge&&!!_.clearcoatRoughnessMap,re=g&&!!_.iridescenceMap,he=g&&!!_.iridescenceThicknessMap,_e=C&&!!_.sheenColorMap,te=C&&!!_.sheenRoughnessMap,xe=!!_.specularMap,Te=!!_.specularColorMap,Le=!!_.specularIntensityMap,We=k&&!!_.transmissionMap,N=k&&!!_.thicknessMap,q=!!_.gradientMap,Q=!!_.alphaMap,fe=_.alphaTest>0,ve=!!_.alphaHash,ee=!!_.extensions,de=Qt;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(de=e.toneMapping);let Re={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:Ue,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:pe,batchingColor:pe&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:ke,envMap:Ne,envMapMode:Ne&&oe.mapping,envMapCubeUVHeight:X,aoMap:nt,lightMap:xt,bumpMap:Ct,normalMap:tt,displacementMap:At,emissiveMap:ut,normalMapObjectSpace:tt&&_.normalMapType===Nh,normalMapTangentSpace:tt&&_.normalMapType===Ks,packedNormalMap:tt&&_.normalMapType===Ks&&Jm(_.normalMap.format),metalnessMap:dt,roughnessMap:L,anisotropy:wt,anisotropyMap:Z,clearcoat:Ge,clearcoatMap:se,clearcoatNormalMap:ce,clearcoatRoughnessMap:D,dispersion:it,retroreflection:M,iridescence:g,iridescenceMap:re,iridescenceThicknessMap:he,sheen:C,sheenColorMap:_e,sheenRoughnessMap:te,specularMap:xe,specularColorMap:Te,specularIntensityMap:Le,transmission:k,transmissionMap:We,thicknessMap:N,gradientMap:q,opaque:_.transparent===!1&&_.blending===Nr&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:ve,combine:_.combine,mapUv:qe&&S(_.map.channel),aoMapUv:nt&&S(_.aoMap.channel),lightMapUv:xt&&S(_.lightMap.channel),bumpMapUv:Ct&&S(_.bumpMap.channel),normalMapUv:tt&&S(_.normalMap.channel),displacementMapUv:At&&S(_.displacementMap.channel),emissiveMapUv:ut&&S(_.emissiveMap.channel),metalnessMapUv:dt&&S(_.metalnessMap.channel),roughnessMapUv:L&&S(_.roughnessMap.channel),anisotropyMapUv:Z&&S(_.anisotropyMap.channel),clearcoatMapUv:se&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&S(_.sheenRoughnessMap.channel),specularMapUv:xe&&S(_.specularMap.channel),specularColorMapUv:Te&&S(_.specularColorMap.channel),specularIntensityMapUv:Le&&S(_.specularIntensityMap.channel),transmissionMapUv:We&&S(_.transmissionMap.channel),thicknessMapUv:N&&S(_.thicknessMap.channel),alphaMapUv:Q&&S(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(tt||wt),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(qe||Q),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&W.length>0,shadowMapType:e.shadowMap.type,toneMapping:de,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===je,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ui,flipSided:_.side===Rt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let W in _.defines)E.push(W),E.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(d(E,_),A(E,_),E.push(e.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function A(_,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function R(_){let E=f[_.type],W;if(E){let I=Zt[E];W=Zc.clone(I.uniforms)}else W=_.uniforms;return W}function x(_,E){let W=u.get(E);return W!==void 0?++W.usedTimes:(W=new Ym(e,E,_,a),h.push(W),u.set(E,W)),W}function T(_){if(--_.usedTimes===0){let E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:x,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:w}}function Qm(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function eg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Xo(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function jo(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function o(c,f,S,y,m,d){let A=e[t];return A===void 0?(A={id:c.id,object:c,geometry:f,material:S,materialVariant:s(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:d},e[t]=A):(A.id=c.id,A.object=c,A.geometry=f,A.material=S,A.materialVariant=s(c),A.groupOrder=y,A.renderOrder=c.renderOrder,A.z=m,A.group=d),t++,A}function l(c,f,S,y,m,d,A){A.reversedDepth===!0&&(m=-m);let R=o(c,f,S,y,m,d);S.transmission>0?r.push(R):S.transparent===!0?a.push(R):i.push(R)}function h(c,f,S,y,m,d){let A=o(c,f,S,y,m,d);S.transmission>0?r.unshift(A):S.transparent===!0?a.unshift(A):i.unshift(A)}function u(c,f){i.length>1&&i.sort(c||eg),r.length>1&&r.sort(f||Xo),a.length>1&&a.sort(f||Xo)}function p(){for(let c=t,f=e.length;c<f;c++){let S=e[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:p,sort:u}}function tg(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new jo,e.set(r,[s])):a>=n.length?(s=new jo,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function ig(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new U,color:new He};break;case"SpotLight":i={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=i,i}}}function rg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var ag=0;function ng(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function sg(e){let t=new ig,i=rg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);let a=new U,n=new ot,s=new ot;function o(h){let u=0,p=0,c=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let f=0,S=0,y=0,m=0,d=0,A=0,R=0,x=0,T=0,b=0,w=0,_=0,E=0,W=0;h.sort(ng);for(let B=0,K=h.length;B<K;B++){let O=h[B],V=O.color,J=O.intensity,H=O.distance,oe=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===zi?oe=O.shadow.map.texture:oe=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=V.r*J,p+=V.g*J,c+=V.b*J;else if(O.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(O.sh.coefficients[X],J);W++}else if(O.isSunLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,$=i.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[S]=$,r.sunShadowMap[S]=oe;let Ie=Y.getViewportCount();for(let ye=0;ye<Ie;ye++)r.sunShadowMatrix[y+ye]=Y.getMatrix(ye),r.sunShadowCascade[y+ye]=Y._cascadeData[ye];y+=Ie,S++}r.sun[f]=X,f++}else if(O.isDirectionalLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,$=i.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=oe,r.directionalShadowMatrix[m]=O.shadow.matrix,T++}r.directional[m]=X,m++}else if(O.isSpotLight){let X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(V).multiplyScalar(J),X.distance=H,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,r.spot[A]=X;let Y=O.shadow;if(O.map&&(r.spotLightMap[_]=O.map,_++,Y.updateMatrices(O),O.castShadow&&E++),r.spotLightMatrix[A]=Y.matrix,O.castShadow){let $=i.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.spotShadow[A]=$,r.spotShadowMap[A]=oe,w++}A++}else if(O.isRectAreaLight){let X=t.get(O);X.color.copy(V).multiplyScalar(J),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),r.rectArea[R]=X,R++}else if(O.isPointLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),X.distance=O.distance,X.decay=O.decay,O.castShadow){let Y=O.shadow,$=i.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,r.pointShadow[d]=$,r.pointShadowMap[d]=oe,r.pointShadowMatrix[d]=O.shadow.matrix,b++}r.point[d]=X,d++}else if(O.isHemisphereLight){let X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(J),X.groundColor.copy(O.groundColor).multiplyScalar(J),r.hemi[x]=X,x++}}R>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=c;let I=r.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==d||I.spotLength!==A||I.rectAreaLength!==R||I.hemiLength!==x||I.numSunShadows!==S||I.numDirectionalShadows!==T||I.numPointShadows!==b||I.numSpotShadows!==w||I.numSpotMaps!==_||I.numLightProbes!==W)&&(r.sun.length=f,r.directional.length=m,r.spot.length=A,r.rectArea.length=R,r.point.length=d,r.hemi.length=x,r.sunShadow.length=S,r.sunShadowMap.length=S,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=b,r.pointShadowMap.length=b,r.pointShadowMatrix.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+_-E,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=W,I.sunLength=f,I.directionalLength=m,I.pointLength=d,I.spotLength=A,I.rectAreaLength=R,I.hemiLength=x,I.numSunShadows=S,I.numDirectionalShadows=T,I.numPointShadows=b,I.numSpotShadows=w,I.numSpotMaps=_,I.numLightProbes=W,r.version=ag++)}function l(h,u){let p=0,c=0,f=0,S=0,y=0,m=0,d=u.matrixWorldInverse;for(let A=0,R=h.length;A<R;A++){let x=h[A];if(x.isSunLight){let T=r.sun[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),p++}else if(x.isDirectionalLight){let T=r.directional[c];T.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),c++}else if(x.isSpotLight){let T=r.spot[S];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),S++}else if(x.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),s.identity(),n.copy(x.matrixWorld),n.premultiply(d),s.extractRotation(n),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),y++}else if(x.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){let T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function Yo(e){let t=new sg(e),i=[],r=[],a=[];function n(c){p.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let p={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:p,setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function og(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Yo(e),t.set(a,[o])):n>=s.length?(o=new Yo(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`,cg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ug=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],qo=new ot,Cr=new U,wn=new U;function dg(e,t,i){let r=new Nl,a=new Ee,n=new Ee,s=new ct,o=new eu,l=new tu,h={},u=i.maxTextureSize,p={[Fi]:Rt,[Rt]:Fi,[ui]:ui},c=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let S=new Xt;S.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _i(S,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let d=this.type;this.render=function(b,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===hh&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let E=e.getRenderTarget(),W=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),B=e.state;B.setBlending(pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let K=d!==this.type;K&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=b.length;O<V;O++){let J=b[O],H=J.shadow;if(H===void 0){we("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let oe=H.getFrameExtents();a.multiply(oe),n.copy(H.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/oe.x),a.x=n.x*oe.x,H.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/oe.y),a.y=n.y*oe.y,H.mapSize.y=n.y));let X=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||K===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Pr){if(J.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gt(a.x,a.y,{format:zi,type:ii,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new kr(a.x,a.y,Jt),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=gi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_t,H.map.depthTexture.magFilter=_t}else J.isPointLight?(H.map=new Kl(a.x),H.map.depthTexture=new Nc(a.x,ti)):(H.map=new Gt(a.x,a.y),H.map.depthTexture=new kr(a.x,a.y,ti)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=gi,this.type===Ea?(H.map.depthTexture.compareFunction=X?Ts:Es,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_t,H.map.depthTexture.magFilter=_t);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==a.x||H.map.height!==a.y)&&H.map.setSize(a.x,a.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,_);for(let $=0;$<Y;$++){let Ie=H.getCamera($);if(J.isPointLight){let ye=H.camera,et=H.matrix,Ue=J.distance||ye.far;Ue!==ye.far&&(ye.far=Ue,ye.updateProjectionMatrix()),Cr.setFromMatrixPosition(J.matrixWorld),ye.position.copy(Cr),wn.copy(ye.position),wn.add(cg[$]),ye.up.copy(ug[$]),ye.lookAt(wn),ye.updateMatrixWorld(),et.makeTranslation(-Cr.x,-Cr.y,-Cr.z),qo.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qo,ye.coordinateSystem,ye.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,$),e.clear();else{$===0&&(e.setRenderTarget(H.map),e.clear());let ye=H.getViewport($);s.set(n.x*ye.x,n.y*ye.y,n.x*ye.z,n.y*ye.w),B.viewport(s)}r=H.getFrustum($),x(w,_,Ie,J,this.type)}H.isPointLightShadow!==!0&&this.type===Pr&&A(H,_),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(E,W,I)};function A(b,w){let _=t.update(y);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Gt(a.x,a.y,{format:zi,type:ii}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),c.uniforms.shadow_pass.value=b.map.depthTexture,c.uniforms.resolution.value.set(b.map.width,b.map.height),c.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(w,null,_,c,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(w,null,_,f,y,null)}function R(b,w,_,E){let W=null,I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)W=I;else if(W=_.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=W.uuid,K=w.uuid,O=h[B];O===void 0&&(O={},h[B]=O);let V=O[K];V===void 0&&(V=W.clone(),O[K]=V,w.addEventListener("dispose",T)),W=V}if(W.visible=w.visible,W.wireframe=w.wireframe,E===Pr?W.side=w.shadowSide!==null?w.shadowSide:w.side:W.side=w.shadowSide!==null?w.shadowSide:p[w.side],W.alphaMap=w.alphaMap,W.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,W.map=w.map,W.clipShadows=w.clipShadows,W.clippingPlanes=w.clippingPlanes,W.clipIntersection=w.clipIntersection,W.displacementMap=w.displacementMap,W.displacementScale=w.displacementScale,W.displacementBias=w.displacementBias,W.wireframeLinewidth=w.wireframeLinewidth,W.linewidth=w.linewidth,_.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let B=e.properties.get(W);B.light=_}return W}function x(b,w,_,E,W){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&W===Pr)&&(!b.frustumCulled||b.intersectsFrustum(r))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let B=t.update(b),K=b.material;if(Array.isArray(K)){let O=B.groups;for(let V=0,J=O.length;V<J;V++){let H=O[V],oe=K[H.materialIndex];if(oe&&oe.visible){let X=R(b,oe,E,W);b.onBeforeShadow(e,b,w,_,B,X,H),e.renderBufferDirect(_,null,B,X,b,H),b.onAfterShadow(e,b,w,_,B,X,H)}}}else if(K.visible){let O=R(b,K,E,W);b.onBeforeShadow(e,b,w,_,B,O,null),e.renderBufferDirect(_,null,B,O,b,null),b.onAfterShadow(e,b,w,_,B,O,null)}}let I=b.children;for(let B=0,K=I.length;B<K;B++)x(I[B],w,_,E,W)}function T(b){b.target.removeEventListener("dispose",T);for(let w in h){let _=h[w],E=b.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function pg(e,t){function i(){let N=!1,q=new ct,Q=null,fe=new ct(0,0,0,0);return{setMask:function(ve){Q!==ve&&!N&&(e.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){N=ve},setClear:function(ve,ee,de,Re,pt){pt===!0&&(ve*=Re,ee*=Re,de*=Re),q.set(ve,ee,de,Re),fe.equals(q)===!1&&(e.clearColor(ve,ee,de,Re),fe.copy(q))},reset:function(){N=!1,Q=null,fe.set(-1,0,0,0)}}}function r(){let N=!1,q=!1,Q=null,fe=null,ve=null;return{setReversed:function(ee){if(q!==ee){let de=t.get("EXT_clip_control");ee?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),q=ee;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return q},setTest:function(ee){ee?ne(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!N&&(e.depthMask(ee),Q=ee)},setFunc:function(ee){if(q&&(ee=Wh[ee]),fe!==ee){switch(ee){case Rn:e.depthFunc(e.NEVER);break;case Cn:e.depthFunc(e.ALWAYS);break;case Pn:e.depthFunc(e.LESS);break;case Fr:e.depthFunc(e.LEQUAL);break;case Ln:e.depthFunc(e.EQUAL);break;case Nn:e.depthFunc(e.GEQUAL);break;case Dn:e.depthFunc(e.GREATER);break;case Un:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=ee}},setLocked:function(ee){N=ee},setClear:function(ee){ve!==ee&&(ve=ee,q&&(ee=1-ee),e.clearDepth(ee))},reset:function(){N=!1,Q=null,fe=null,ve=null,q=!1}}}function a(){let N=!1,q=null,Q=null,fe=null,ve=null,ee=null,de=null,Re=null,pt=null;return{setTest:function(Xe){N||(Xe?ne(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(Xe){q!==Xe&&!N&&(e.stencilMask(Xe),q=Xe)},setFunc:function(Xe,jt,ni){(Q!==Xe||fe!==jt||ve!==ni)&&(e.stencilFunc(Xe,jt,ni),Q=Xe,fe=jt,ve=ni)},setOp:function(Xe,jt,ni){(ee!==Xe||de!==jt||Re!==ni)&&(e.stencilOp(Xe,jt,ni),ee=Xe,de=jt,Re=ni)},setLocked:function(Xe){N=Xe},setClear:function(Xe){pt!==Xe&&(e.clearStencil(Xe),pt=Xe)},reset:function(){N=!1,q=null,Q=null,fe=null,ve=null,ee=null,de=null,Re=null,pt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},p={},c={},f=new WeakMap,S=[],y=null,m=!1,d=null,A=null,R=null,x=null,T=null,b=null,w=null,_=new He(0,0,0),E=0,W=!1,I=null,B=null,K=null,O=null,V=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,oe=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=oe>=2);let Y=null,$={},Ie=e.getParameter(e.SCISSOR_BOX),ye=e.getParameter(e.VIEWPORT),et=new ct().fromArray(Ie),Ue=new ct().fromArray(ye);function j(N,q,Q,fe){let ve=new Uint8Array(4),ee=e.createTexture();e.bindTexture(N,ee),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<Q;de++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(q,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,ve):e.texImage2D(q+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ve);return ee}let ie={};ie[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(e.DEPTH_TEST),s.setFunc(Fr),Ct(!1),tt(Hs),ne(e.CULL_FACE),nt(pi);function ne(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function Ce(N,q){return c[N]!==q?(e.bindFramebuffer(N,q),c[N]=q,N===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=q),N===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=q),!0):!1}function pe(N,q){let Q=S,fe=!1;if(N){Q=f.get(q),Q===void 0&&(Q=[],f.set(q,Q));let ve=N.textures;if(Q.length!==ve.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,de=ve.length;ee<de;ee++)Q[ee]=e.COLOR_ATTACHMENT0+ee;Q.length=ve.length,fe=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,fe=!0);fe&&e.drawBuffers(Q)}function qe(N){return y!==N?(e.useProgram(N),y=N,!0):!1}let ke={[lr]:e.FUNC_ADD,[uh]:e.FUNC_SUBTRACT,[dh]:e.FUNC_REVERSE_SUBTRACT};ke[ph]=e.MIN,ke[fh]=e.MAX;let Ne={[mh]:e.ZERO,[gh]:e.ONE,[_h]:e.SRC_COLOR,[Ko]:e.SRC_ALPHA,[Eh]:e.SRC_ALPHA_SATURATE,[xh]:e.DST_COLOR,[Sh]:e.DST_ALPHA,[vh]:e.ONE_MINUS_SRC_COLOR,[Zo]:e.ONE_MINUS_SRC_ALPHA,[yh]:e.ONE_MINUS_DST_COLOR,[Mh]:e.ONE_MINUS_DST_ALPHA,[Th]:e.CONSTANT_COLOR,[bh]:e.ONE_MINUS_CONSTANT_COLOR,[Ah]:e.CONSTANT_ALPHA,[wh]:e.ONE_MINUS_CONSTANT_ALPHA};function nt(N,q,Q,fe,ve,ee,de,Re,pt,Xe){if(N===pi){m===!0&&(be(e.BLEND),m=!1);return}if(m===!1&&(ne(e.BLEND),m=!0),N!==ch){if(N!==d||Xe!==W){if((A!==lr||T!==lr)&&(e.blendEquation(e.FUNC_ADD),A=lr,T=lr),Xe)switch(N){case Nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ks:e.blendFunc(e.ONE,e.ONE);break;case Gs:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ws:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",N);break}else switch(N){case Nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ks:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Gs:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ws:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",N);break}R=null,x=null,b=null,w=null,_.set(0,0,0),E=0,d=N,W=Xe}return}ve=ve||q,ee=ee||Q,de=de||fe,(q!==A||ve!==T)&&(e.blendEquationSeparate(ke[q],ke[ve]),A=q,T=ve),(Q!==R||fe!==x||ee!==b||de!==w)&&(e.blendFuncSeparate(Ne[Q],Ne[fe],Ne[ee],Ne[de]),R=Q,x=fe,b=ee,w=de),(Re.equals(_)===!1||pt!==E)&&(e.blendColor(Re.r,Re.g,Re.b,pt),_.copy(Re),E=pt),d=N,W=!1}function xt(N,q){N.side===ui?be(e.CULL_FACE):ne(e.CULL_FACE);let Q=N.side===Rt;q&&(Q=!Q),Ct(Q),N.blending===Nr&&N.transparent===!1?nt(pi):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),n.setMask(N.colorWrite);let fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(N){I!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),I=N)}function tt(N){N!==oh?(ne(e.CULL_FACE),N!==B&&(N===Hs?e.cullFace(e.BACK):N===lh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),B=N}function At(N){N!==K&&(H&&e.lineWidth(N),K=N)}function ut(N,q,Q){N?(ne(e.POLYGON_OFFSET_FILL),(O!==q||V!==Q)&&(O=q,V=Q,s.getReversed()&&(q=-q),e.polygonOffset(q,Q))):be(e.POLYGON_OFFSET_FILL)}function dt(N){N?ne(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function L(N){N===void 0&&(N=e.TEXTURE0+J-1),Y!==N&&(e.activeTexture(N),Y=N)}function wt(N,q,Q){Q===void 0&&(Y===null?Q=e.TEXTURE0+J-1:Q=Y);let fe=$[Q];fe===void 0&&(fe={type:void 0,texture:void 0},$[Q]=fe),(fe.type!==N||fe.texture!==q)&&(Y!==Q&&(e.activeTexture(Q),Y=Q),e.bindTexture(N,q||ie[N]),fe.type=N,fe.texture=q)}function Ge(){let N=$[Y];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{e.compressedTexImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function g(){try{e.texSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function C(){try{e.texSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function se(){try{e.texStorage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function ce(){try{e.texStorage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function D(){try{e.texImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function re(){try{e.texImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function he(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function _e(N,q){p[N]!==q&&(e.pixelStorei(N,q),p[N]=q)}function te(N){et.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),et.copy(N))}function xe(N){Ue.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Ue.copy(N))}function Te(N,q){let Q=h.get(q);Q===void 0&&(Q=new WeakMap,h.set(q,Q));let fe=Q.get(N);fe===void 0&&(fe=e.getUniformBlockIndex(q,N.name),Q.set(N,fe))}function Le(N,q){let Q=h.get(q).get(N);l.get(q)!==Q&&(e.uniformBlockBinding(q,Q,N.__bindingPointIndex),l.set(q,Q))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},p={},Y=null,$={},c={},f=new WeakMap,S=[],y=null,m=!1,d=null,A=null,R=null,x=null,T=null,b=null,w=null,_=new He(0,0,0),E=0,W=!1,I=null,B=null,K=null,O=null,V=null,et.set(0,0,e.canvas.width,e.canvas.height),Ue.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ne,disable:be,bindFramebuffer:Ce,drawBuffers:pe,useProgram:qe,setBlending:nt,setMaterial:xt,setFlipSided:Ct,setCullFace:tt,setLineWidth:At,setPolygonOffset:ut,setScissorTest:dt,activeTexture:L,bindTexture:wt,unbindTexture:Ge,compressedTexImage2D:it,compressedTexImage3D:M,texImage2D:D,texImage3D:re,pixelStorei:_e,getParameter:he,updateUBOMapping:Te,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:ce,texSubImage2D:g,texSubImage3D:C,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:te,viewport:xe,reset:We}}function fg(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,u=new WeakMap,p=new Set,c,f=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,g){return S?new OffscreenCanvas(M,g):Fa("canvas")}function m(M,g,C){let k=1,Z=it(M);if((Z.width>C||Z.height>C)&&(k=C/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let se=Math.floor(k*Z.width),ce=Math.floor(k*Z.height);c===void 0&&(c=y(se,ce));let D=g?y(se,ce):c;return D.width=se,D.height=ce,D.getContext("2d").drawImage(M,0,0,se,ce),we("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+ce+")."),D}else return"data"in M&&we("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function d(M){return M.generateMipmaps}function A(M){e.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(M,g,C,k,Z,se=!1){if(M!==null){if(e[M]!==void 0)return e[M];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce;k&&(ce=t.get("EXT_texture_norm16"),ce||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=g;if(g===e.RED&&(C===e.FLOAT&&(D=e.R32F),C===e.HALF_FLOAT&&(D=e.R16F),C===e.UNSIGNED_BYTE&&(D=e.R8),C===e.UNSIGNED_SHORT&&ce&&(D=ce.R16_EXT),C===e.SHORT&&ce&&(D=ce.R16_SNORM_EXT)),g===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(D=e.R8UI),C===e.UNSIGNED_SHORT&&(D=e.R16UI),C===e.UNSIGNED_INT&&(D=e.R32UI),C===e.BYTE&&(D=e.R8I),C===e.SHORT&&(D=e.R16I),C===e.INT&&(D=e.R32I)),g===e.RG&&(C===e.FLOAT&&(D=e.RG32F),C===e.HALF_FLOAT&&(D=e.RG16F),C===e.UNSIGNED_BYTE&&(D=e.RG8),C===e.UNSIGNED_SHORT&&ce&&(D=ce.RG16_EXT),C===e.SHORT&&ce&&(D=ce.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(D=e.RG8UI),C===e.UNSIGNED_SHORT&&(D=e.RG16UI),C===e.UNSIGNED_INT&&(D=e.RG32UI),C===e.BYTE&&(D=e.RG8I),C===e.SHORT&&(D=e.RG16I),C===e.INT&&(D=e.RG32I)),g===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(D=e.RGB8UI),C===e.UNSIGNED_SHORT&&(D=e.RGB16UI),C===e.UNSIGNED_INT&&(D=e.RGB32UI),C===e.BYTE&&(D=e.RGB8I),C===e.SHORT&&(D=e.RGB16I),C===e.INT&&(D=e.RGB32I)),g===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(D=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(D=e.RGBA16UI),C===e.UNSIGNED_INT&&(D=e.RGBA32UI),C===e.BYTE&&(D=e.RGBA8I),C===e.SHORT&&(D=e.RGBA16I),C===e.INT&&(D=e.RGBA32I)),g===e.RGB&&(C===e.UNSIGNED_SHORT&&ce&&(D=ce.RGB16_EXT),C===e.SHORT&&ce&&(D=ce.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(D=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(D=e.R11F_G11F_B10F)),g===e.RGBA){let re=se?Ia:ze.getTransfer(Z);C===e.FLOAT&&(D=e.RGBA32F),C===e.HALF_FLOAT&&(D=e.RGBA16F),C===e.UNSIGNED_BYTE&&(D=re===je?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&ce&&(D=ce.RGBA16_EXT),C===e.SHORT&&ce&&(D=ce.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(D=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(D=e.RGB5_A1)}return(D===e.R16F||D===e.R32F||D===e.RG16F||D===e.RG32F||D===e.RGBA16F||D===e.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function T(M,g){let C;return M?g===null||g===ti||g===zr?C=e.DEPTH24_STENCIL8:g===Jt?C=e.DEPTH32F_STENCIL8:g===Br&&(C=e.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ti||g===zr?C=e.DEPTH_COMPONENT24:g===Jt?C=e.DEPTH_COMPONENT32F:g===Br&&(C=e.DEPTH_COMPONENT16),C}function b(M,g){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==_t&&M.minFilter!==Mt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){let g=M.target;g.removeEventListener("dispose",w),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&p.delete(g)}function _(M){let g=M.target;g.removeEventListener("dispose",_),I(g)}function E(M){let g=r.get(M);if(g.__webglInit===void 0)return;let C=M.source,k=f.get(C);if(k){let Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&W(M),Object.keys(k).length===0&&f.delete(C)}r.remove(M)}function W(M){let g=r.get(M);e.deleteTexture(g.__webglTexture);let C=M.source,k=f.get(C);delete k[g.__cacheKey],s.memory.textures--}function I(M){let g=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)e.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else e.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)e.deleteFramebuffer(g.__webglFramebuffer[k]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let C=M.textures;for(let k=0,Z=C.length;k<Z;k++){let se=r.get(C[k]);se.__webglTexture&&(e.deleteTexture(se.__webglTexture),s.memory.textures--),r.remove(C[k])}r.remove(M)}let B=0;function K(){B=0}function O(){return B}function V(M){B=M}function J(){let M=B;return M>=a.maxTextures&&we("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,M}function H(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function oe(M,g){let C=r.get(M);if(M.isVideoTexture&&wt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&C.__version!==M.version){let k=M.image;if(k===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{be(C,M,g);return}}else M.isExternalTexture&&(C.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+g)}function X(M,g){let C=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){be(C,M,g);return}else M.isExternalTexture&&(C.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+g)}function Y(M,g){let C=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){be(C,M,g);return}i.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+g)}function $(M,g){let C=r.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&C.__version!==M.version){Ce(C,M,g);return}i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+g)}let Ie={[In]:e.REPEAT,[di]:e.CLAMP_TO_EDGE,[On]:e.MIRRORED_REPEAT},ye={[_t]:e.NEAREST,[Ph]:e.NEAREST_MIPMAP_NEAREST,[Kr]:e.NEAREST_MIPMAP_LINEAR,[Mt]:e.LINEAR,[Ya]:e.LINEAR_MIPMAP_NEAREST,[Ii]:e.LINEAR_MIPMAP_LINEAR},et={[Uh]:e.NEVER,[zh]:e.ALWAYS,[Ih]:e.LESS,[Es]:e.LEQUAL,[Oh]:e.EQUAL,[Ts]:e.GEQUAL,[Fh]:e.GREATER,[Bh]:e.NOTEQUAL};function Ue(M,g){if(g.type===Jt&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Mt||g.magFilter===Ya||g.magFilter===Kr||g.magFilter===Ii||g.minFilter===Mt||g.minFilter===Ya||g.minFilter===Kr||g.minFilter===Ii)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,Ie[g.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,Ie[g.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,Ie[g.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,ye[g.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_t||g.minFilter!==Kr&&g.minFilter!==Ii||g.type===Jt&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function j(M,g){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));let k=g.source,Z=f.get(k);Z===void 0&&(Z={},f.set(k,Z));let se=H(g);if(se!==M.__cacheKey){Z[se]===void 0&&(Z[se]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,C=!0),Z[se].usedTimes++;let ce=Z[M.__cacheKey];ce!==void 0&&(Z[M.__cacheKey].usedTimes--,ce.usedTimes===0&&W(g)),M.__cacheKey=se,M.__webglTexture=Z[se].texture}return C}function ie(M,g,C){return Math.floor(Math.floor(M/C)/g)}function ne(M,g,C,k){let Z=M.updateRanges;if(Z.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,C,k,g.data);else{Z.sort((he,_e)=>he.start-_e.start);let se=0;for(let he=1;he<Z.length;he++){let _e=Z[se],te=Z[he],xe=_e.start+_e.count,Te=ie(te.start,g.width,4),Le=ie(_e.start,g.width,4);te.start<=xe+1&&Te===Le&&ie(te.start+te.count-1,g.width,4)===Te?_e.count=Math.max(_e.count,te.start+te.count-_e.start):(++se,Z[se]=te)}Z.length=se+1;let ce=i.getParameter(e.UNPACK_ROW_LENGTH),D=i.getParameter(e.UNPACK_SKIP_PIXELS),re=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let he=0,_e=Z.length;he<_e;he++){let te=Z[he],xe=Math.floor(te.start/4),Te=Math.ceil(te.count/4),Le=xe%g.width,We=Math.floor(xe/g.width),N=Te;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(e.UNPACK_SKIP_ROWS,We),i.texSubImage2D(e.TEXTURE_2D,0,Le,We,N,1,C,k,g.data)}M.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ce),i.pixelStorei(e.UNPACK_SKIP_PIXELS,D),i.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function be(M,g,C){let k=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=e.TEXTURE_3D);let Z=j(M,g),se=g.source;i.bindTexture(k,M.__webglTexture,e.TEXTURE0+C);let ce=r.get(se);if(se.version!==ce.__version||Z===!0){if(i.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)){let q=ze.getPrimaries(ze.workingColorSpace),Q=g.colorSpace===wi?null:ze.getPrimaries(g.colorSpace),fe=g.colorSpace===wi||q===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}i.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let D=m(g.image,!1,a.maxTextureSize);D=Ge(g,D);let re=n.convert(g.format,g.colorSpace),he=n.convert(g.type),_e=x(g.internalFormat,re,he,g.normalized,g.colorSpace,g.isVideoTexture);Ue(k,g);let te,xe=g.mipmaps,Te=g.isVideoTexture!==!0,Le=ce.__version===void 0||Z===!0,We=se.dataReady,N=b(g,D);if(g.isDepthTexture)_e=T(g.format===Oi,g.type),Le&&(Te?i.texStorage2D(e.TEXTURE_2D,1,_e,D.width,D.height):i.texImage2D(e.TEXTURE_2D,0,_e,D.width,D.height,0,re,he,null));else if(g.isDataTexture)if(xe.length>0){Te&&Le&&i.texStorage2D(e.TEXTURE_2D,N,_e,xe[0].width,xe[0].height);for(let q=0,Q=xe.length;q<Q;q++)te=xe[q],Te?We&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,te.width,te.height,re,he,te.data):i.texImage2D(e.TEXTURE_2D,q,_e,te.width,te.height,0,re,he,te.data);g.generateMipmaps=!1}else Te?(Le&&i.texStorage2D(e.TEXTURE_2D,N,_e,D.width,D.height),We&&ne(g,D,re,he)):i.texImage2D(e.TEXTURE_2D,0,_e,D.width,D.height,0,re,he,D.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Te&&Le&&i.texStorage3D(e.TEXTURE_2D_ARRAY,N,_e,xe[0].width,xe[0].height,D.depth);for(let q=0,Q=xe.length;q<Q;q++)if(te=xe[q],g.format!==kt)if(re!==null)if(Te){if(We)if(g.layerUpdates.size>0){let fe=Ao(te.width,te.height,g.format,g.type);for(let ve of g.layerUpdates){let ee=te.data.subarray(ve*fe/te.data.BYTES_PER_ELEMENT,(ve+1)*fe/te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,ve,te.width,te.height,1,re,ee)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,te.width,te.height,D.depth,re,te.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,_e,te.width,te.height,D.depth,0,te.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?We&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,te.width,te.height,D.depth,re,he,te.data):i.texImage3D(e.TEXTURE_2D_ARRAY,q,_e,te.width,te.height,D.depth,0,re,he,te.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Te&&Le&&i.texStorage2D(e.TEXTURE_2D,N,_e,xe[0].width,xe[0].height);for(let q=0,Q=xe.length;q<Q;q++)te=xe[q],g.format!==kt?re!==null?Te?We&&i.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,te.width,te.height,re,te.data):i.compressedTexImage2D(e.TEXTURE_2D,q,_e,te.width,te.height,0,te.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?We&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,te.width,te.height,re,he,te.data):i.texImage2D(e.TEXTURE_2D,q,_e,te.width,te.height,0,re,he,te.data)}else if(g.isDataArrayTexture)if(Te){if(Le&&i.texStorage3D(e.TEXTURE_2D_ARRAY,N,_e,D.width,D.height,D.depth),We)if(g.layerUpdates.size>0){let q=Ao(D.width,D.height,g.format,g.type);for(let Q of g.layerUpdates){let fe=D.data.subarray(Q*q/D.data.BYTES_PER_ELEMENT,(Q+1)*q/D.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,D.width,D.height,1,re,he,fe)}g.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,re,he,D.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,D.width,D.height,D.depth,0,re,he,D.data);else if(g.isData3DTexture)Te?(Le&&i.texStorage3D(e.TEXTURE_3D,N,_e,D.width,D.height,D.depth),We&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,re,he,D.data)):i.texImage3D(e.TEXTURE_3D,0,_e,D.width,D.height,D.depth,0,re,he,D.data);else if(g.isFramebufferTexture){if(Le)if(Te)i.texStorage2D(e.TEXTURE_2D,N,_e,D.width,D.height);else{let q=D.width,Q=D.height;for(let fe=0;fe<N;fe++)i.texImage2D(e.TEXTURE_2D,fe,_e,q,Q,0,re,he,null),q>>=1,Q>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),D.parentNode!==q){q.appendChild(D),p.add(g),q.onpaint=Q=>{let fe=Q.changedElements;for(let ve of p)fe.includes(ve.image)&&(ve.needsUpdate=!0)},q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,D);else{let Q=e.RGBA,fe=e.RGBA,ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Q,fe,ve,D)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Te&&Le){let q=it(xe[0]);i.texStorage2D(e.TEXTURE_2D,N,_e,q.width,q.height)}for(let q=0,Q=xe.length;q<Q;q++)te=xe[q],Te?We&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,re,he,te):i.texImage2D(e.TEXTURE_2D,q,_e,re,he,te);g.generateMipmaps=!1}else if(Te){if(Le){let q=it(D);i.texStorage2D(e.TEXTURE_2D,N,_e,q.width,q.height)}We&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,re,he,D)}else i.texImage2D(e.TEXTURE_2D,0,_e,re,he,D);d(g)&&A(k),ce.__version=se.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ce(M,g,C){if(g.image.length!==6)return;let k=j(M,g),Z=g.source;i.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+C);let se=r.get(Z);if(Z.version!==se.__version||k===!0){i.activeTexture(e.TEXTURE0+C);let ce=ze.getPrimaries(ze.workingColorSpace),D=g.colorSpace===wi?null:ze.getPrimaries(g.colorSpace),re=g.colorSpace===wi||ce===D?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let he=g.isCompressedTexture||g.image[0].isCompressedTexture,_e=g.image[0]&&g.image[0].isDataTexture,te=[];for(let ee=0;ee<6;ee++)!he&&!_e?te[ee]=m(g.image[ee],!0,a.maxCubemapSize):te[ee]=_e?g.image[ee].image:g.image[ee],te[ee]=Ge(g,te[ee]);let xe=te[0],Te=n.convert(g.format,g.colorSpace),Le=n.convert(g.type),We=x(g.internalFormat,Te,Le,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,q=se.__version===void 0||k===!0,Q=Z.dataReady,fe=b(g,xe);Ue(e.TEXTURE_CUBE_MAP,g);let ve;if(he){N&&q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,We,xe.width,xe.height);for(let ee=0;ee<6;ee++){ve=te[ee].mipmaps;for(let de=0;de<ve.length;de++){let Re=ve[de];g.format!==kt?Te!==null?N?Q&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Re.width,Re.height,Te,Re.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,We,Re.width,Re.height,0,Re.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Re.width,Re.height,Te,Le,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,We,Re.width,Re.height,0,Te,Le,Re.data)}}}else{if(ve=g.mipmaps,N&&q){ve.length>0&&fe++;let ee=it(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(_e){N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,te[ee].width,te[ee].height,Te,Le,te[ee].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,te[ee].width,te[ee].height,0,Te,Le,te[ee].data);for(let de=0;de<ve.length;de++){let Re=ve[de].image[ee].image;N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Re.width,Re.height,Te,Le,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,We,Re.width,Re.height,0,Te,Le,Re.data)}}else{N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,Le,te[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Te,Le,te[ee]);for(let de=0;de<ve.length;de++){let Re=ve[de];N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Te,Le,Re.image[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,We,Te,Le,Re.image[ee])}}}d(g)&&A(e.TEXTURE_CUBE_MAP),se.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function pe(M,g,C,k,Z,se){let ce=n.convert(C.format,C.colorSpace),D=n.convert(C.type),re=x(C.internalFormat,ce,D,C.normalized,C.colorSpace),he=r.get(g),_e=r.get(C);if(_e.__renderTarget=g,!he.__hasExternalTextures){let te=Math.max(1,g.width>>se),xe=Math.max(1,g.height>>se);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?i.texImage3D(Z,se,re,te,xe,g.depth,0,ce,D,null):i.texImage2D(Z,se,re,te,xe,0,ce,D,null)}i.bindFramebuffer(e.FRAMEBUFFER,M),L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Z,_e.__webglTexture,0,dt(g)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Z,_e.__webglTexture,se),i.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(M,g,C){if(e.bindRenderbuffer(e.RENDERBUFFER,M),g.depthBuffer){let k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,se=T(g.stencilBuffer,Z),ce=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,dt(g),se,g.width,g.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,dt(g),se,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,se,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,M)}else{let k=g.textures;for(let Z=0;Z<k.length;Z++){let se=k[Z],ce=n.convert(se.format,se.colorSpace),D=n.convert(se.type),re=x(se.internalFormat,ce,D,se.normalized,se.colorSpace);L(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,dt(g),re,g.width,g.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,dt(g),re,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,re,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ke(M,g,C){let k=g.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=r.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,g.depthTexture);let he=n.convert(g.depthTexture.format),_e=n.convert(g.depthTexture.type),te;g.depthTexture.format===gi?te=e.DEPTH_COMPONENT24:g.depthTexture.format===Oi&&(te=e.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,te,g.width,g.height,0,he,_e,null)}}else oe(g.depthTexture,0);let se=Z.__webglTexture,ce=dt(g),D=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,re=g.depthTexture.format===Oi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===gi)L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,D,se,0,ce):e.framebufferTexture2D(e.FRAMEBUFFER,re,D,se,0);else if(g.depthTexture.format===Oi)L(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,D,se,0,ce):e.framebufferTexture2D(e.FRAMEBUFFER,re,D,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(M){let g=r.get(M),C=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let k=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(C)for(let k=0;k<6;k++)ke(g.__webglFramebuffer[k],M,k);else{let k=M.texture.mipmaps;k&&k.length>0?ke(g.__webglFramebuffer[0],M,0):ke(g.__webglFramebuffer,M,0)}else if(C){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=e.createRenderbuffer(),qe(g.__webglDepthbuffer[k],M,!1);else{let Z=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,se)}}else{let k=M.texture.mipmaps;if(k&&k.length>0?i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),qe(g.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,se)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(M,g,C){let k=r.get(M);g!==void 0&&pe(k.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&Ne(M)}function xt(M){let g=M.texture,C=r.get(M),k=r.get(g);M.addEventListener("dispose",_);let Z=M.textures,se=M.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=g.version,s.memory.textures++),se){C.__webglFramebuffer=[];for(let D=0;D<6;D++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[D]=[];for(let re=0;re<g.mipmaps.length;re++)C.__webglFramebuffer[D][re]=e.createFramebuffer()}else C.__webglFramebuffer[D]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let D=0;D<g.mipmaps.length;D++)C.__webglFramebuffer[D]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(ce)for(let D=0,re=Z.length;D<re;D++){let he=r.get(Z[D]);he.__webglTexture===void 0&&(he.__webglTexture=e.createTexture(),s.memory.textures++)}if(M.samples>0&&L(M)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let D=0;D<Z.length;D++){let re=Z[D];C.__webglColorRenderbuffer[D]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[D]);let he=n.convert(re.format,re.colorSpace),_e=n.convert(re.type),te=x(re.internalFormat,he,_e,re.normalized,re.colorSpace,M.isXRRenderTarget===!0),xe=dt(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,te,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+D,e.RENDERBUFFER,C.__webglColorRenderbuffer[D])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),qe(C.__webglDepthRenderbuffer,M,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(se){i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,g);for(let D=0;D<6;D++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)pe(C.__webglFramebuffer[D][re],M,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,re);else pe(C.__webglFramebuffer[D],M,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);d(g)&&A(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ce){for(let D=0,re=Z.length;D<re;D++){let he=Z[D],_e=r.get(he),te=e.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(te=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(te,_e.__webglTexture),Ue(te,he),pe(C.__webglFramebuffer,M,he,e.COLOR_ATTACHMENT0+D,te,0),d(he)&&A(te)}i.unbindTexture()}else{let D=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(D=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(D,k.__webglTexture),Ue(D,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)pe(C.__webglFramebuffer[re],M,g,e.COLOR_ATTACHMENT0,D,re);else pe(C.__webglFramebuffer,M,g,e.COLOR_ATTACHMENT0,D,0);d(g)&&A(D),i.unbindTexture()}M.depthBuffer&&Ne(M)}function Ct(M){let g=M.textures;for(let C=0,k=g.length;C<k;C++){let Z=g[C];if(d(Z)){let se=R(M),ce=r.get(Z).__webglTexture;i.bindTexture(se,ce),A(se),i.unbindTexture()}}}let tt=[],At=[];function ut(M){if(M.samples>0){if(L(M)===!1){let g=M.textures,C=M.width,k=M.height,Z=e.COLOR_BUFFER_BIT,se=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=r.get(M),D=g.length>1;if(D)for(let he=0;he<g.length;he++)i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let re=M.texture.mipmaps;re&&re.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<g.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),D){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let _e=r.get(g[he]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,C,k,0,0,C,k,Z,e.NEAREST),l===!0&&(tt.length=0,At.length=0,tt.push(e.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(tt.push(se),At.push(se),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,At)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),D)for(let he=0;he<g.length;he++){i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let _e=r.get(g[he]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,_e,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let g=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function dt(M){return Math.min(a.maxSamples,M.samples)}function L(M){let g=r.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function wt(M){let g=s.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Ge(M,g){let C=M.colorSpace,k=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==Ua&&C!==wi&&(ze.getTransfer(C)===je?(k!==kt||Z!==It)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",C)),g}function it(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=oe,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=nt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mg(e,t){function i(r,a=wi){let n,s=ze.getTransfer(a);if(r===It)return e.UNSIGNED_BYTE;if(r===vs)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ss)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ll)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===hl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===sl)return e.BYTE;if(r===ol)return e.SHORT;if(r===Br)return e.UNSIGNED_SHORT;if(r===_s)return e.INT;if(r===ti)return e.UNSIGNED_INT;if(r===Jt)return e.FLOAT;if(r===ii)return e.HALF_FLOAT;if(r===cl)return e.ALPHA;if(r===ul)return e.RGB;if(r===kt)return e.RGBA;if(r===gi)return e.DEPTH_COMPONENT;if(r===Oi)return e.DEPTH_STENCIL;if(r===dl)return e.RED;if(r===Ms)return e.RED_INTEGER;if(r===zi)return e.RG;if(r===xs)return e.RG_INTEGER;if(r===ys)return e.RGBA_INTEGER;if(r===Ta||r===ba||r===Aa||r===wa)if(s===je)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ta)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ba)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Aa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ta)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Aa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fn||r===Bn||r===zn||r===Vn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Fn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hn||r===kn||r===Gn||r===Wn||r===Xn||r===La||r===jn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Hn||r===kn)return s===je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Gn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wn)return n.COMPRESSED_R11_EAC;if(r===Xn)return n.COMPRESSED_SIGNED_R11_EAC;if(r===La)return n.COMPRESSED_RG11_EAC;if(r===jn)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yn||r===qn||r===Kn||r===Zn||r===Jn||r===$n||r===Qn||r===es||r===ts||r===is||r===rs||r===as||r===ns||r===ss)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Yn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$n)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===es)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ts)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===is)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rs)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===as)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ns)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ss)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===os||r===ls||r===hs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===os)return s===je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ls)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cs||r===us||r===Na||r===ds)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===cs)return n.COMPRESSED_RED_RGTC1_EXT;if(r===us)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Na)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ds)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`,vg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ri({vertexShader:gg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new Bl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sg=class extends Vi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,p=null,c=null,f=null,S=typeof XRWebGLBinding<"u",y=new vg,m={},d=t.getContextAttributes(),A=null,R=null,x=[],T=[],b=new Ee,w=null,_=null,E=new Vt;E.viewport=new ct;let W=new Vt;W.viewport=new ct;let I=[E,W],B=new gu,K=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=x[j];return ie===void 0&&(ie=new tn,x[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=x[j];return ie===void 0&&(ie=new tn,x[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=x[j];return ie===void 0&&(ie=new tn,x[j]=ie),ie.getHandSpace()};function V(j){let ie=T.indexOf(j.inputSource);if(ie===-1)return;let ne=x[ie];ne!==void 0&&(ne.update(j.inputSource,j.frame,l||n),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",H);for(let j=0;j<x.length;j++){let ie=T[j];ie!==null&&(T[j]=null,x[j].disconnect(ie))}K=null,O=null,y.reset();for(let j in m)delete m[j];if(e.setRenderTarget(A),c=null,p=null,u=null,r=null,R=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),_!==null){let j=_.camera;j.fov=_.fov,j.zoom=_.zoom,j.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ne=null,be=null;d.depth&&(be=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?Oi:gi,ne=d.stencil?zr:ti);let Ce={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};u=this.getBinding(),p=u.createProjectionLayer(Ce),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Gt(p.textureWidth,p.textureHeight,{format:kt,type:It,depthTexture:new kr(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ie={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),R=new Gt(c.framebufferWidth,c.framebufferHeight,{format:kt,type:It,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(j){for(let ie=0;ie<j.removed.length;ie++){let ne=j.removed[ie],be=T.indexOf(ne);be>=0&&(T[be]=null,x[be].disconnect(ne))}for(let ie=0;ie<j.added.length;ie++){let ne=j.added[ie],be=T.indexOf(ne);if(be===-1){for(let pe=0;pe<x.length;pe++)if(pe>=T.length){T.push(ne),be=pe;break}else if(T[pe]===null){T[pe]=ne,be=pe;break}if(be===-1)break}let Ce=x[be];Ce&&Ce.connect(ne)}}let oe=new U,X=new U;function Y(j,ie,ne){oe.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ne.matrixWorld);let be=oe.distanceTo(X),Ce=ie.projectionMatrix.elements,pe=ne.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),ke=Ce[14]/(Ce[10]+1),Ne=(Ce[9]+1)/Ce[5],nt=(Ce[9]-1)/Ce[5],xt=(Ce[8]-1)/Ce[0],Ct=(pe[8]+1)/pe[0],tt=qe*xt,At=qe*Ct,ut=be/(-xt+Ct),dt=ut*-xt;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(dt),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let L=qe+ut,wt=ke+ut,Ge=tt-dt,it=At+(be-dt),M=Ne*ke/wt*L,g=nt*ke/wt*L;j.projectionMatrix.makePerspective(Ge,it,M,g,L,wt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ne=j.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(ne=y.depthFar)),B.near=W.near=E.near=ie,B.far=W.far=E.far=ne,(K!==B.near||O!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,O=B.far),B.layers.mask=j.layers.mask|6,E.layers.mask=B.layers.mask&-5,W.layers.mask=B.layers.mask&-3;let be=j.parent,Ce=B.cameras;$(B,be);for(let pe=0;pe<Ce.length;pe++)$(Ce[pe],be);Ce.length===2?Y(B,E,W):B.projectionMatrix.copy(E.projectionMatrix),_===null&&j.isPerspectiveCamera&&(_={camera:j,fov:j.fov,zoom:j.zoom}),Ie(j,B,be)};function Ie(j,ie,ne){ne===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&c===null))return o},this.setFoveation=function(j){o=j,p!==null&&(p.fixedFoveation=j),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(j){return m[j]};let ye=null;function et(j,ie){if(h=ie.getViewerPose(l||n),f=ie,h!==null){let ne=h.views;c!==null&&(e.setRenderTargetFramebuffer(R,c.framebuffer),e.setRenderTarget(R));let be=!1;ne.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let pe=0;pe<ne.length;pe++){let qe=ne[pe],ke=null;if(c!==null)ke=c.getViewport(qe);else{let nt=u.getViewSubImage(p,qe);ke=nt.viewport,pe===0&&(e.setRenderTargetTextures(R,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(R))}let Ne=I[pe];Ne===void 0&&(Ne=new Vt,Ne.layers.enable(pe),Ne.viewport=new ct,I[pe]=Ne),Ne.matrix.fromArray(qe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(qe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),pe===0&&(B.matrix.copy(Ne.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(Ne)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){u=i.getBinding();let pe=u.getDepthInformation(ne[0]);pe&&pe.isValid&&pe.texture&&y.init(pe,r.renderState)}if(Ce&&Ce.includes("camera-access")&&S){e.state.unbindTexture(),u=i.getBinding();for(let pe=0;pe<ne.length;pe++){let qe=ne[pe].camera;if(qe){let ke=m[qe];ke||(ke=new Ul,m[qe]=ke);let Ne=u.getCameraImage(qe);ke.sourceTexture=Ne}}}}for(let ne=0;ne<x.length;ne++){let be=T[ne],Ce=x[ne];be!==null&&Ce!==void 0&&Ce.update(be,ie,l||n)}ye&&ye(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),f=null}let Ue=new Yl;Ue.setAnimationLoop(et),this.setAnimationLoop=function(j){ye=j},this.dispose=function(){}}},Mg=new ot,eh=new De;eh.set(-1,0,0,0,1,0,0,0,1);function xg(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,kl(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,A,R,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),c(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(n(m,d),S(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),y(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,R):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=t.get(d),R=A.envMap,x=A.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=R*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function yg(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let b=T.program;r.uniformBlockBinding(x,b)}function h(x,T){let b=a[x.id];b===void 0&&(m(x),b=u(x),a[x.id]=b,x.addEventListener("dispose",A));let w=T.program;r.updateUBOMapping(x,w);let _=t.render.frame;n[x.id]!==_&&(c(x),n[x.id]=_)}function u(x){let T=p();x.__bindingPointIndex=T;let b=e.createBuffer(),w=x.__size,_=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,w,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,b),b}function p(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){let T=a[x.id],b=x.uniforms,w=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,E=b.length;_<E;_++){let W=b[_];if(Array.isArray(W))for(let I=0,B=W.length;I<B;I++)f(W[I],_,I,w);else f(W,_,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(x,T,b,w){if(y(x,T,b,w)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let W=0;for(let I=0;I<E.length;I++){let B=E[I],K=d(B);S(B,x.__data,W),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(E,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,x.__data)}}function S(x,T,b){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,b)}function y(x,T,b,w){let _=x.value,E=T+"_"+b;if(w[E]===void 0)return typeof _=="number"||typeof _=="boolean"?w[E]=_:ArrayBuffer.isView(_)?w[E]=_.slice():w[E]=_.clone(),!0;{let W=w[E];if(typeof _=="number"||typeof _=="boolean"){if(W!==_)return w[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(W.equals(_)===!1)return W.copy(_),!0}}return!1}function m(x){let T=x.uniforms,b=0,w=16;for(let E=0,W=T.length;E<W;E++){let I=Array.isArray(T[E])?T[E]:[T[E]];for(let B=0,K=I.length;B<K;B++){let O=I[B],V=Array.isArray(O.value)?O.value:[O.value];for(let J=0,H=V.length;J<H;J++){let oe=V[J],X=d(oe),Y=b%w,$=Y%X.boundary,Ie=Y+$;b+=$,Ie!==0&&w-Ie<X.storage&&(b+=w-Ie),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=X.storage}}}let _=b%w;return _>0&&(b+=w-_),x.__size=b,x.__cache={},this}function d(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):we("WebGLRenderer: Unsupported uniform value type.",x),T}function A(x){let T=x.target;T.removeEventListener("dispose",A);let b=s.indexOf(T.__bindingPointIndex);s.splice(b,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function R(){for(let x in a)e.deleteBuffer(a[x]);s=[],a={},n={}}return{bind:l,update:h,dispose:R}}var Eg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kt=null;function Tg(){return Kt===null&&(Kt=new Cc(Eg,16,16,zi,ii),Kt.name="DFG_LUT",Kt.minFilter=Mt,Kt.magFilter=Mt,Kt.wrapS=di,Kt.wrapT=di,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt}var Bg=class{constructor(e={}){let{canvas:t=kh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:c=It}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let S=c,y=new Set([ys,xs,Ms]),m=new Set([It,ti,Br,zr,vs,Ss]),d=new Uint32Array(4),A=new Int32Array(4),R=new U,x=null,T=null,b=[],w=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,W=!1,I=null,B=null,K=null,O=null;this._outputColorSpace=Ut;let V=0,J=0,H=null,oe=-1,X=null,Y=new ct,$=new ct,Ie=null,ye=new He(0),et=0,Ue=t.width,j=t.height,ie=1,ne=null,be=null,Ce=new ct(0,0,Ue,j),pe=new ct(0,0,Ue,j),qe=!1,ke=new Nl,Ne=!1,nt=!1,xt=new ot,Ct=new U,tt=new ct,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function dt(){return H===null?ie:1}let L=i;function wt(v,P){return t.getContext(v,P)}let Ge,it,M,g,C,k,Z,se,ce,D,re,he,_e,te,xe,Te,Le,We,N,q,Q,fe,ve;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),L===null){let P="webgl2";if(L=wt(P,v),L===null)throw wt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(v){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Pe("WebGLRenderer: "+v.message),v}function ee(){Ge=new Tf(L),Ge.init(),Q=new mg(L,Ge),it=new ff(L,Ge,e,Q),M=new pg(L,Ge),it.reversedDepthBuffer&&p&&M.buffers.depth.setReversed(!0),B=L.createFramebuffer(),K=L.createFramebuffer(),O=L.createFramebuffer(),g=new wf(L),C=new Qm,k=new fg(L,Ge,M,C,it,Q,g),Z=new Ef(E),se=new Ru(L),fe=new df(L,se),ce=new bf(L,se,g,fe),D=new Cf(L,ce,se,fe,g),We=new Rf(L,it,k),xe=new mf(C),re=new $m(E,Z,Ge,it,fe,xe),he=new xg(E,C),_e=new tg,te=new og(Ge),Le=new uf(E,Z,M,D,f,o),Te=new dg(E,D,it),ve=new yg(L,g,it,M),N=new pf(L,Ge,g),q=new Af(L,Ge,g),g.programs=re.programs,E.capabilities=it,E.extensions=Ge,E.properties=C,E.renderLists=_e,E.shadowMap=Te,E.state=M,E.info=g}S!==It&&(_=new Lf(S,t.width,t.height,s,r,a));let de=new Sg(E,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Ge.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ge.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(v){v!==void 0&&(ie=v,this.setSize(Ue,j,!1))},this.getSize=function(v){return v.set(Ue,j)},this.setSize=function(v,P,G=!0){if(de.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=v,j=P,t.width=Math.floor(v*ie),t.height=Math.floor(P*ie),G===!0&&(t.style.width=v+"px",t.style.height=P+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Ue*ie,j*ie).floor()},this.setDrawingBufferSize=function(v,P,G){Ue=v,j=P,ie=G,t.width=Math.floor(v*G),t.height=Math.floor(P*G),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===It){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Y)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,P,G,z){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,P,G,z),M.viewport(Y.copy(Ce).multiplyScalar(ie).round())},this.getScissor=function(v){return v.copy(pe)},this.setScissor=function(v,P,G,z){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,P,G,z),M.scissor($.copy(pe).multiplyScalar(ie).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(v){M.setScissorTest(qe=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){be=v},this.getClearColor=function(v){return v.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,G=!0){let z=0;if(v){let F=!1;if(H!==null){let ae=H.texture.format;F=y.has(ae)}if(F){let ae=H.texture.type,ue=m.has(ae),me=Le.getClearColor(),ge=Le.getClearAlpha(),Ae=me.r,Be=me.g,Ve=me.b;ue?(d[0]=Ae,d[1]=Be,d[2]=Ve,d[3]=ge,L.clearBufferuiv(L.COLOR,0,d)):(A[0]=Ae,A[1]=Be,A[2]=Ve,A[3]=ge,L.clearBufferiv(L.COLOR,0,A))}else z|=L.COLOR_BUFFER_BIT}P&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Le.dispose(),_e.dispose(),te.dispose(),C.dispose(),Z.dispose(),D.dispose(),fe.dispose(),ve.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ns),de.removeEventListener("sessionend",Ds),Ri.stop()};function Re(v){v.preventDefault(),Ba("WebGLRenderer: Context Lost."),W=!0}function pt(){Ba("WebGLRenderer: Context Restored."),W=!1;let v=g.autoReset,P=Te.enabled,G=Te.autoUpdate,z=Te.needsUpdate,F=Te.type;ee(),g.autoReset=v,Te.enabled=P,Te.autoUpdate=G,Te.needsUpdate=z,Te.type=F}function Xe(v){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function jt(v){let P=v.target;P.removeEventListener("dispose",jt),ni(P)}function ni(v){th(v),C.remove(v)}function th(v){let P=C.get(v).programs;P!==void 0&&(P.forEach(function(G){re.releaseProgram(G)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,G,z,F,ae){P===null&&(P=At);let ue=F.isMesh&&F.matrixWorld.determinantAffine()<0,me=ah(v,P,G,z,F);M.setMaterial(z,ue);let ge=G.index,Ae=1;if(z.wireframe===!0){if(ge=ce.getWireframeAttribute(G),ge===void 0)return;Ae=2}let Be=G.drawRange,Ve=G.attributes.position,Me=Be.start*Ae,Ke=(Be.start+Be.count)*Ae;ae!==null&&(Me=Math.max(Me,ae.start*Ae),Ke=Math.min(Ke,(ae.start+ae.count)*Ae)),ge!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,ge.count)):Ve!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,Ve.count));let lt=Ke-Me;if(lt<0||lt===1/0)return;fe.setup(F,z,me,G,ge);let $e,Qe=N;if(ge!==null&&($e=se.get(ge),Qe=q,Qe.setIndex($e)),F.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*dt()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(F.isLine){let rt=z.linewidth;rt===void 0&&(rt=1),M.setLineWidth(rt*dt()),F.isLineSegments?Qe.setMode(L.LINES):F.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else F.isPoints?Qe.setMode(L.POINTS):F.isSprite&&Qe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let rt=F._multiDrawStarts,Se=F._multiDrawCounts,yt=F._multiDrawCount,Ci=ge?se.get(ge).bytesPerElement:1,Nt=C.get(z).currentProgram.getUniforms();for(let Yt=0;Yt<yt;Yt++)Nt.setValue(L,"_gl_DrawID",Yt),Qe.render(rt[Yt]/Ci,Se[Yt])}else if(F.isInstancedMesh)Qe.renderInstances(Me,lt,F.count);else if(G.isInstancedBufferGeometry){let rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,rt);Qe.renderInstances(Me,lt,Se)}else Qe.render(Me,lt)};function Ls(v,P,G,z){I!==null&&v.isNodeMaterial&&I.setObject(z,v),Ne===!0&&xe.setState(v,G,!1),v.transparent===!0&&v.side===ui&&v.forceSinglePass===!1?(v.side=Rt,v.needsUpdate=!0,qr(v,P,z),v.side=Fi,v.needsUpdate=!0,qr(v,P,z),v.side=ui):qr(v,P,z)}this.compile=function(v,P,G=null){G===null&&(G=v),I!==null&&I.renderStart(v,P,G),T=te.get(G),T.init(P),w.push(T),G.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),v!==G&&v.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),nt=this.localClippingEnabled,Ne=xe.init(this.clippingPlanes,nt),Ne===!0&&xe.setGlobalState(this.clippingPlanes,P),I!==null&&Te.render(T.state.shadowsArray,G,P);let z=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ae=F.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){let me=ae[ue];Ls(me,G,P,F),z.add(me)}else Ls(ae,G,P,F),z.add(ae)}),T=w.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(v,P,G=null){let z=this.compile(v,P,G);return new Promise(F=>{function ae(){if(z.forEach(function(ue){let me=C.get(ue).currentProgram;(me===void 0||me.isReady())&&z.delete(ue)}),z.size===0){F(v);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ga=null;function ih(v){Ga&&Ga(v)}function Ns(){Ri.stop()}function Ds(){Ri.start()}let Ri=new Yl;Ri.setAnimationLoop(ih),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(v){Ga=v,de.setAnimationLoop(v),v===null?Ri.stop():Ri.start()},de.addEventListener("sessionstart",Ns),de.addEventListener("sessionend",Ds),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;I!==null&&I.renderStart(v,P);let G=de.enabled===!0&&de.isPresenting===!0,z=_!==null&&(H===null||G)&&_.begin(E,H);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(P),P=de.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,P,H),T=te.get(v,w.length),T.init(P),T.state.textureUnits=k.getTextureUnits(),w.push(T),xt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ke.setFromProjectionMatrix(xt,$t,P.reversedDepth),nt=this.localClippingEnabled,Ne=xe.init(this.clippingPlanes,nt),x=_e.get(v,b.length),x.init(),b.push(x),de.enabled===!0&&de.isPresenting===!0){let ae=E.xr.getDepthSensingMesh();ae!==null&&Wa(ae,P,-1/0,E.sortObjects)}Wa(v,P,0,E.sortObjects),x.finish(),I!==null&&I.updateLights(T.state.lightsArray),E.sortObjects===!0&&x.sort(ne,be),ut=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ut&&Le.addToRenderList(x,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&xe.beginShadows();let F=T.state.shadowsArray;if(Te.render(F,v,P),Ne===!0&&xe.endShadows(),(z&&_.hasRenderPass())===!1){let ae=x.opaque,ue=x.transmissive;if(T.setupLights(),P.isArrayCamera){let me=P.cameras;if(ue.length>0)for(let ge=0,Ae=me.length;ge<Ae;ge++){let Be=me[ge];Is(ae,ue,v,Be)}ut&&Le.render(v);for(let ge=0,Ae=me.length;ge<Ae;ge++){let Be=me[ge];Us(x,v,Be,Be.viewport)}}else ue.length>0&&Is(ae,ue,v,P),ut&&Le.render(v),Us(x,v,P)}H!==null&&J===0&&(k.updateMultisampleRenderTarget(H),k.updateRenderTargetMipmap(H)),z&&_.end(E),v.isScene===!0&&v.onAfterRender(E,v,P),fe.resetDefaultState(),oe=-1,X=null,w.pop(),w.length>0?(T=w[w.length-1],k.setTextureUnits(T.state.textureUnits),Ne===!0&&xe.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?x=b[b.length-1]:x=null,I!==null&&I.renderEnd()};function Wa(v,P,G,z){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ke)){z&&tt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xt);let ae=D.update(v),ue=v.material;ue.visible&&x.push(v,ae,ue,G,tt.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ke))){let ae=D.update(v),ue=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),tt.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),tt.copy(ae.boundingSphere.center)),tt.applyMatrix4(v.matrixWorld).applyMatrix4(xt)),Array.isArray(ue)){let me=ae.groups;for(let ge=0,Ae=me.length;ge<Ae;ge++){let Be=me[ge],Ve=ue[Be.materialIndex];Ve&&Ve.visible&&x.push(v,ae,Ve,G,tt.z,Be,P)}}else ue.visible&&x.push(v,ae,ue,G,tt.z,null,P)}}let F=v.children;for(let ae=0,ue=F.length;ae<ue;ae++)Wa(F[ae],P,G,z)}function Us(v,P,G,z){let{opaque:F,transmissive:ae,transparent:ue}=v;T.setupLightsView(G),Ne===!0&&xe.setGlobalState(E.clippingPlanes,G),z&&M.viewport(Y.copy(z)),F.length>0&&Yr(F,P,G),ae.length>0&&Yr(ae,P,G),ue.length>0&&Yr(ue,P,G),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Is(v,P,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Ve=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Gt(1,1,{generateMipmaps:!0,type:Ve?ii:It,minFilter:Ii,samples:Math.max(4,it.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let F=T.state.transmissionRenderTarget[z.id],ae=z.viewport||Y;F.setSize(ae.z*E.transmissionResolutionScale,ae.w*E.transmissionResolutionScale);let ue=E.getRenderTarget(),me=E.getActiveCubeFace(),ge=E.getActiveMipmapLevel();E.setRenderTarget(F),E.getClearColor(ye),et=E.getClearAlpha(),et<1&&E.setClearColor(16777215,.5),E.clear(),ut&&Le.render(G);let Ae=E.toneMapping;E.toneMapping=Qt;let Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ne===!0&&xe.setGlobalState(E.clippingPlanes,z),Yr(v,G,z),k.updateMultisampleRenderTarget(F),k.updateRenderTargetMipmap(F),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Me=0,Ke=P.length;Me<Ke;Me++){let lt=P[Me],{object:$e,geometry:Qe,material:rt,group:Se}=lt;if(rt.side===ui&&$e.layers.test(z.layers)){let yt=rt.side;rt.side=Rt,rt.needsUpdate=!0,Os($e,G,z,Qe,rt,Se),rt.side=yt,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(k.updateMultisampleRenderTarget(F),k.updateRenderTargetMipmap(F))}E.setRenderTarget(ue,me,ge),E.setClearColor(ye,et),Be!==void 0&&(z.viewport=Be),E.toneMapping=Ae}function Yr(v,P,G){let z=P.isScene===!0?P.overrideMaterial:null;for(let F=0,ae=v.length;F<ae;F++){let ue=v[F],{object:me,geometry:ge,group:Ae}=ue,Be=ue.material;Be.allowOverride===!0&&z!==null&&(Be=z),me.layers.test(G.layers)&&Os(me,P,G,ge,Be,Ae)}}function Os(v,P,G,z,F,ae){I!==null&&F.isNodeMaterial&&I.setObject(v,F),v.onBeforeRender(E,P,G,z,F,ae),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(E,P,G,z,v,ae),F.transparent===!0&&F.side===ui&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,E.renderBufferDirect(G,P,z,F,v,ae),F.side=Fi,F.needsUpdate=!0,E.renderBufferDirect(G,P,z,F,v,ae),F.side=ui):E.renderBufferDirect(G,P,z,F,v,ae),v.onAfterRender(E,P,G,z,F,ae)}function qr(v,P,G){P.isScene!==!0&&(P=At);let z=C.get(v),F=T.state.lights,ae=T.state.shadowsArray,ue=F.state.version,me=re.getParameters(v,F.state,ae,P,G,T.state.lightProbeGridArray),ge=re.getProgramCacheKey(me),Ae=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=Z.get(v.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",jt),Ae=new Map,z.programs=Ae);let Ve=Ae.get(ge);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===ue)return Bs(v,me),Ve}else me.uniforms=re.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,G,me),v.onBeforeCompile(me,E),Ve=re.acquireProgram(me,ge),Ae.set(ge,Ve),z.uniforms=me.uniforms;let Me=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=xe.uniform),Bs(v,me),z.needsLights=sh(v),z.lightsStateVersion=ue,z.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.sunLights.value=F.state.sun,Me.sunLightShadows.value=F.state.sunShadow,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.sunShadowMatrix.value=F.state.sunShadowMatrix,Me.sunShadowCascade.value=F.state.sunShadowCascade,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function Fs(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Pa.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Bs(v,P){let G=C.get(v);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function rh(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;R.setFromMatrixPosition(P.matrixWorld);for(let G=0,z=v.length;G<z;G++){let F=v[G];if(F.texture!==null&&F.boundingBox.containsPoint(R))return F}return null}function ah(v,P,G,z,F){P.isScene!==!0&&(P=At),k.resetTextureUnits();let ae=P.fog,ue=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,me=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ze.workingColorSpace,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=Z.get(z.envMap||ue,ge),Be=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color,$e=Qt;z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($e=E.toneMapping);let Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=Qe!==void 0?Qe.length:0,Se=C.get(z),yt=T.state.lights;if(Ne===!0&&(nt===!0||v!==X)){let Je=v===X&&z.id===oe;xe.setState(z,v,Je)}let Ci=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==yt.state.version||Se.outputColorSpace!==me||F.isBatchedMesh&&Se.batching===!1||!F.isBatchedMesh&&Se.batching===!0||F.isBatchedMesh&&Se.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&Se.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&Se.instancing===!1||!F.isInstancedMesh&&Se.instancing===!0||F.isSkinnedMesh&&Se.skinning===!1||!F.isSkinnedMesh&&Se.skinning===!0||F.isInstancedMesh&&Se.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Se.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Se.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Se.instancingMorph===!1&&F.morphTexture!==null||Se.envMap!==Ae||z.fog===!0&&Se.fog!==ae||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==xe.numPlanes||Se.numIntersection!==xe.numIntersection)||Se.vertexAlphas!==Be||Se.vertexTangents!==Ve||Se.morphTargets!==Me||Se.morphNormals!==Ke||Se.morphColors!==lt||Se.toneMapping!==$e||Se.morphTargetsCount!==rt||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ci=!0):(Ci=!0,Se.__version=z.version);let Nt=Se.currentProgram;Ci===!0&&(Nt=qr(z,P,F),I&&z.isNodeMaterial&&I.onUpdateProgram(z,Nt,Se));let Yt=!1,Si=!1,ki=!1,Ze=Nt.getUniforms(),st=Se.uniforms;if(M.useProgram(Nt.program)&&(Yt=!0,Si=!0,ki=!0),z.id!==oe&&(oe=z.id,Si=!0),Se.needsLights){let Je=rh(T.state.lightProbeGridArray,F);Se.lightProbeGrid!==Je&&(Se.lightProbeGrid=Je,Si=!0)}if(Yt||X!==v){M.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",v.projectionMatrix),Ze.setValue(L,"viewMatrix",v.matrixWorldInverse);let Je=Ze.map.cameraPosition;Je!==void 0&&Je.setValue(L,Ct.setFromMatrixPosition(v.matrixWorld)),it.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),X!==v&&(X=v,Si=!0,ki=!0)}if(Se.needsLights&&(yt.state.sunShadowMap.length>0&&Ze.setValue(L,"sunShadowMap",yt.state.sunShadowMap,k),yt.state.directionalShadowMap.length>0&&Ze.setValue(L,"directionalShadowMap",yt.state.directionalShadowMap,k),yt.state.spotShadowMap.length>0&&Ze.setValue(L,"spotShadowMap",yt.state.spotShadowMap,k),yt.state.pointShadowMap.length>0&&Ze.setValue(L,"pointShadowMap",yt.state.pointShadowMap,k)),F.isSkinnedMesh){Ze.setOptional(L,F,"bindMatrix"),Ze.setOptional(L,F,"bindMatrixInverse");let Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ze.setValue(L,"boneTexture",Je.boneTexture,k))}F.isBatchedMesh&&(Ze.setOptional(L,F,"batchingTexture"),Ze.setValue(L,"batchingTexture",F._matricesTexture,k),Ze.setOptional(L,F,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",F._indirectTexture,k),Ze.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",F._colorsTexture,k));let Mi=G.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&We.update(F,G,Nt),(Si||Se.receiveShadow!==F.receiveShadow)&&(Se.receiveShadow=F.receiveShadow,Ze.setValue(L,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(st.envMapIntensity.value=P.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=Tg()),Si){if(Ze.setValue(L,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&nh(st,ki),ae&&z.fog===!0&&he.refreshFogUniforms(st,ae),he.refreshMaterialUniforms(st,z,ie,j,T.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.lightProbeGrid){let Je=Se.lightProbeGrid;st.probesSH.value=Je.texture,st.probesMin.value.copy(Je.boundingBox.min),st.probesMax.value.copy(Je.boundingBox.max),st.probesResolution.value.copy(Je.resolution)}Pa.upload(L,Fs(Se),st,k)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(L,Fs(Se),st,k),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ze.setValue(L,"center",F.center),Ze.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ze.setValue(L,"normalMatrix",F.normalMatrix),Ze.setValue(L,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let Je=z.uniformsGroups;for(let Mr=0,Gi=Je.length;Mr<Gi;Mr++){let Vs=Je[Mr];ve.update(Vs,Nt),ve.bind(Vs,Nt)}}return Nt}function nh(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function sh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(v,P,G){let z=C.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),C.get(v.texture).__webglTexture=P,C.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let G=C.get(v);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,G=0){H=v,V=P,J=G;let z=null,F=!1,ae=!1;if(v){let ue=C.get(v);if(ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),Y.copy(v.viewport),$.copy(v.scissor),Ie=v.scissorTest,M.viewport(Y),M.scissor($),M.setScissorTest(Ie),oe=-1;return}else if(ue.__webglFramebuffer===void 0)k.setupRenderTarget(v);else if(ue.__hasExternalTextures)k.rebindTextures(v,C.get(v.texture).__webglTexture,C.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ae=v.depthTexture;if(ue.__boundDepthTexture!==Ae){if(Ae!==null&&C.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(v)}}let me=v.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(ae=!0);let ge=C.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ge[P])?z=ge[P][G]:z=ge[P],F=!0):v.samples>0&&k.useMultisampledRTT(v)===!1?z=C.get(v).__webglMultisampledFramebuffer:Array.isArray(ge)?z=ge[G]:z=ge,Y.copy(v.viewport),$.copy(v.scissor),Ie=v.scissorTest}else Y.copy(Ce).multiplyScalar(ie).floor(),$.copy(pe).multiplyScalar(ie).floor(),Ie=qe;if(G!==0&&(z=B),M.bindFramebuffer(L.FRAMEBUFFER,z)&&M.drawBuffers(v,z),M.viewport(Y),M.scissor($),M.setScissorTest(Ie),F){let ue=C.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,G)}else if(ae){let ue=P;for(let me=0;me<v.textures.length;me++){let ge=C.get(v.textures[me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+me,ge.__webglTexture,G,ue)}}else if(v!==null&&G!==0){let ue=C.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,G)}oe=-1};function zs(v){let P=C.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=it.textureFormatReadable(v.format),P.__typeReadable=it.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,G,z,F,ae,ue,me=0){if(!(v&&v.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=C.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){M.bindFramebuffer(L.FRAMEBUFFER,ge);try{let Ae=v.textures[me],Be=Ae.format,Ve=Ae.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Me=zs(Ae);if(Me.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-z&&G>=0&&G<=v.height-F&&L.readPixels(P,G,z,F,Q.convert(Be),Q.convert(Ve),ae)}finally{let Ae=H!==null?C.get(H).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(v,P,G,z,F,ae,ue,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=C.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge)if(P>=0&&P<=v.width-z&&G>=0&&G<=v.height-F){M.bindFramebuffer(L.FRAMEBUFFER,ge);let Ae=v.textures[me],Be=Ae.format,Ve=Ae.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Me=zs(Ae);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(P,G,z,F,Q.convert(Be),Q.convert(Ve),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let lt=H!==null?C.get(H).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,lt);let $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gh(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ke),L.deleteSync($e),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,G=0){let z=Math.pow(2,-G),F=Math.floor(v.image.width*z),ae=Math.floor(v.image.height*z),ue=P!==null?P.x:0,me=P!==null?P.y:0;k.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ue,me,F,ae),M.unbindTexture()},this.copyTextureToTexture=function(v,P,G=null,z=null,F=0,ae=0){let ue,me,ge,Ae,Be,Ve,Me,Ke,lt,$e=v.isCompressedTexture?v.mipmaps[ae]:v.image;if(G!==null)ue=G.max.x-G.min.x,me=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Be=G.min.y,Ve=G.isBox3?G.min.z:0;else{let st=Math.pow(2,-F);ue=Math.floor($e.width*st),me=Math.floor($e.height*st),v.isDataArrayTexture?ge=$e.depth:v.isData3DTexture?ge=Math.floor($e.depth*st):ge=1,Ae=0,Be=0,Ve=0}z!==null?(Me=z.x,Ke=z.y,lt=z.z):(Me=0,Ke=0,lt=0);let Qe=Q.convert(P.format),rt=Q.convert(P.type),Se;P.isData3DTexture?(k.setTexture3D(P,0),Se=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(k.setTexture2DArray(P,0),Se=L.TEXTURE_2D_ARRAY):(k.setTexture2D(P,0),Se=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let yt=M.getParameter(L.UNPACK_ROW_LENGTH),Ci=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Nt=M.getParameter(L.UNPACK_SKIP_PIXELS),Yt=M.getParameter(L.UNPACK_SKIP_ROWS),Si=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,$e.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),M.pixelStorei(L.UNPACK_SKIP_ROWS,Be),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);let ki=v.isDataArrayTexture||v.isData3DTexture,Ze=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let st=C.get(v),Mi=C.get(P),Je=C.get(st.__renderTarget),Mr=C.get(Mi.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Gi=0;Gi<ge;Gi++)ki&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(v).__webglTexture,F,Ve+Gi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(P).__webglTexture,ae,lt+Gi)),L.blitFramebuffer(Ae,Be,ue,me,Me,Ke,ue,me,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||C.has(v)){let st=C.get(v),Mi=C.get(P);M.bindFramebuffer(L.READ_FRAMEBUFFER,K),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Je=0;Je<ge;Je++)ki?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,st.__webglTexture,F,Ve+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,st.__webglTexture,F),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mi.__webglTexture,ae,lt+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mi.__webglTexture,ae),F!==0?L.blitFramebuffer(Ae,Be,ue,me,Me,Ke,ue,me,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D(Se,ae,Me,Ke,lt+Je,Ae,Be,ue,me):L.copyTexSubImage2D(Se,ae,Me,Ke,Ae,Be,ue,me);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Se,ae,Me,Ke,lt,ue,me,ge,Qe,rt,$e.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,ae,Me,Ke,lt,ue,me,ge,Qe,$e.data):L.texSubImage3D(Se,ae,Me,Ke,lt,ue,me,ge,Qe,rt,$e):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,Me,Ke,ue,me,Qe,rt,$e.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,Me,Ke,$e.width,$e.height,Qe,$e.data):L.texSubImage2D(L.TEXTURE_2D,ae,Me,Ke,ue,me,Qe,rt,$e);M.pixelStorei(L.UNPACK_ROW_LENGTH,yt),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ci),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),M.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Si),ae===0&&P.generateMipmaps&&L.generateMipmap(Se),M.unbindTexture()},this.initRenderTarget=function(v){C.get(v).__webglFramebuffer===void 0&&k.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?k.setTextureCube(v,0):v.isData3DTexture?k.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?k.setTexture2DArray(v,0):k.setTexture2D(v,0),M.unbindTexture()},this.resetState=function(){V=0,J=0,H=null,M.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};export{ks as AdditiveBlending,Rt as BackSide,ei as BufferAttribute,Xt as BufferGeometry,Dg as CanvasTexture,di as ClampToEdgeWrapping,He as Color,bt as Float32BufferAttribute,$r as Group,Mt as LinearFilter,bg as MathUtils,ot as Matrix4,_i as Mesh,Nr as NormalBlending,Vt as PerspectiveCamera,Ng as Points,Fl as QuadraticBezierCurve3,In as RepeatWrapping,Ut as SRGBColorSpace,Pg as Scene,ri as ShaderMaterial,Ug as SphereGeometry,Lg as Sprite,wc as SpriteMaterial,Ig as TubeGeometry,Ee as Vector2,U as Vector3,Bg as WebGLRenderer};
