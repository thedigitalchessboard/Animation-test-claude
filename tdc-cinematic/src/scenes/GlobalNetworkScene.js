// SCENES 02, 11, 12: glowing connections between students, chess pieces rising
// from connection points, and the light that converges into the brand reveal.

import { SCENES, NODES, EARLY_ARCS } from '../config.js';
import { latLonToVec3 } from './EarthScene.js';
import { pieceCanvas } from '../art/pieces.js';

const ARC_VERT = `
varying float vT;
void main(){
  vT = uv.x;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const ARC_FRAG = `
uniform float uProgress; uniform float uAlpha; uniform float uTime; uniform vec3 uColor;
varying float vT;
void main(){
  if (vT > uProgress) discard;
  float head = smoothstep(uProgress - 0.12, uProgress, vT) * step(uProgress, 0.999);
  float pulse = pow(0.5 + 0.5 * sin((vT * 3.0 - uTime * 1.4) * 6.2831), 8.0) * 0.6;
  vec3 col = mix(uColor, vec3(1.0, 0.98, 0.9), head + pulse * 0.5);
  float a = uAlpha * (0.5 + 0.5 * head + pulse);
  gl_FragColor = vec4(col, a);
}`;
const CONV_VERT = `
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
}`;
const CONV_FRAG = `
varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(1.0, 0.88, 0.58, a);
}`;

export class GlobalNetworkScene {
  constructor(ctx, earthScene) {
    this.ctx = ctx;
    this.earth = earthScene;
    const { THREE } = ctx;
    const pts = NODES.map((n) => latLonToVec3(THREE, n.lat, n.lon, 1.01));
    const homeIdx = NODES.findIndex((n) => n.home);

    const baseMat = new THREE.ShaderMaterial({
      vertexShader: ARC_VERT, fragmentShader: ARC_FRAG,
      uniforms: { uProgress: { value: 0 }, uAlpha: { value: 0.9 }, uTime: { value: 0 }, uColor: { value: new THREE.Color(0.95, 0.8, 0.45) } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const mkArc = (a, b, radius) => {
      const mid = a.clone().add(b).multiplyScalar(0.5);
      const ang = a.angleTo(b);
      mid.normalize().multiplyScalar(1.01 + ang * 0.28);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, radius, 5, false), baseMat.clone());
      mesh.userData.curve = curve;
      mesh.userData.len = ang;
      this.earth.spin.add(mesh);
      return mesh;
    };
    this.early = EARLY_ARCS.map(([i, j]) => mkArc(pts[i], pts[j], 0.0038));
    this.global = pts
      .map((p, i) => ({ p, i }))
      .filter(({ i }) => i !== homeIdx)
      .map(({ p }) => mkArc(pts[homeIdx], p, 0.0042));
    baseMat.dispose();

    // Chess pieces rising from six connection points.
    this.pieces = [];
    NODES.forEach((n, i) => {
      if (!n.piece) return;
      const tex = new THREE.CanvasTexture(pieceCanvas(n.piece, 256));
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      sprite.center.set(0.5, 0.05);
      sprite.position.copy(latLonToVec3(THREE, n.lat, n.lon, 1.03));
      sprite.scale.set(0.0001, 0.0001, 1);
      sprite.userData.pop = { s: 0 };
      this.earth.spin.add(sprite);
      this.pieces.push(sprite);
    });

    // Convergence particles, sampled along the arcs (Earth-local positions).
    const count = ctx.responsive.profile.converge;
    const arcs = [...this.global, ...this.early];
    const start = new Float32Array(count * 3), delay = new Float32Array(count), seed = new Float32Array(count);
    let s = 9;
    const rnd = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
    const v = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const arc = arcs[i % arcs.length];
      arc.userData.curve.getPoint(rnd(), v);
      v.toArray(start, i * 3);
      delay[i] = rnd();
      seed[i] = rnd();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    g.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
    g.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    this.convUniforms = {
      uEarth: { value: new THREE.Matrix4() }, uTarget: { value: new THREE.Vector3() },
      uP: { value: 0 }, uPixel: { value: 1 }, uTime: { value: 0 },
    };
    this.converge = new THREE.Points(g, new THREE.ShaderMaterial({
      vertexShader: CONV_VERT, fragmentShader: CONV_FRAG, uniforms: this.convUniforms,
      transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    }));
    this.converge.frustumCulled = false;
    this.converge.renderOrder = 10;
    ctx.three.scene.add(this.converge);

    // Gathering light at the logo position.
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const cg = c.getContext('2d');
    const grd = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(255,250,235,1)');
    grd.addColorStop(0.2, 'rgba(242,216,146,0.65)');
    grd.addColorStop(1, 'rgba(242,216,146,0)');
    cg.fillStyle = grd; cg.fillRect(0, 0, 128, 128);
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, opacity: 0,
    }));
    this.flash.renderOrder = 11;
    this.pieces.forEach((sp) => {
      const b = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.flash.material.map, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0,
      }));
      b.position.copy(sp.position);
      b.scale.set(0.0001, 0.0001, 1);
      sp.userData.burst = { s: 0.02, o: 0, sprite: b };
      this.earth.spin.add(b);
    });
    this.flash.userData.s = { size: 0.01 };
    ctx.three.scene.add(this.flash);
    this.tmp = new THREE.Vector3();
  }

  build(tl) {
    const [n0, n1] = SCENES.network;
    const [r0, r1] = SCENES.reveal;
    const [b0, b1] = SCENES.brand;

    // 02: a constellation of early connections.
    this.early.forEach((m, i) => {
      tl.fromTo(m.material.uniforms.uProgress, { value: 0 }, { value: 1, duration: 0.6, ease: 'sine.inOut' }, n0 + i * 0.05);
    });
    tl.to(this.early.map((m) => m.material.uniforms.uAlpha), { value: 0.35, duration: 0.6 }, n1 + 0.4);

    // 11: the network spreads out from the girl's home to the whole world.
    const sorted = [...this.global].sort((a, b) => a.userData.len - b.userData.len);
    sorted.forEach((m, i) => {
      tl.fromTo(m.material.uniforms.uProgress, { value: 0 }, { value: 1, duration: 0.5 + m.userData.len * 0.2, ease: 'power2.out' }, r0 + 0.45 + i * 0.025);
    });
    tl.to(this.early.map((m) => m.material.uniforms.uAlpha), { value: 0.8, duration: 0.4 }, r0 + 0.8);
    // Each piece rises out of its connection point with a small burst of light.
    this.pieces.forEach((sp, i) => {
      const at = r0 + 0.6 + i * 0.1;
      tl.fromTo(sp.userData.pop, { s: 0 }, { s: 1, duration: 0.45, ease: 'back.out(2.2)' }, at);
      tl.fromTo(sp.userData.burst, { s: 0.02, o: 0 }, { s: 0.42, o: 1, duration: 0.16, ease: 'power2.out' }, at - 0.04);
      tl.to(sp.userData.burst, { s: 0.6, o: 0, duration: 0.35, ease: 'power2.in' }, at + 0.12);
    });

    // 12: everything gathers into light at the logo.
    tl.fromTo(this.convUniforms.uP, { value: 0 }, { value: 1, duration: b1 - b0 + 0.05, ease: 'power1.in' }, b0 - 0.05);
    const all = [...this.global, ...this.early].map((m) => m.material.uniforms.uAlpha);
    tl.to(all, { value: 0.28, duration: 0.6, ease: 'power2.inOut' }, b0 + 0.1);
    tl.to(this.flash.material, { opacity: 1, duration: 0.45, ease: 'power2.in' }, b0 + 0.05);
    tl.to(this.flash.userData.s, { size: 1.1, duration: 0.5, ease: 'power3.in' }, b0 + 0.05);
    tl.to(this.flash.material, { opacity: 0, duration: 0.45, ease: 'power2.out' }, b0 + 0.52);
    tl.to(this.flash.userData.s, { size: 1.9, duration: 0.45, ease: 'power2.out' }, b0 + 0.52);
    tl.to(this.pieces.map((p) => p.userData.pop), { s: 0.8, duration: 0.6 }, b0 + 0.2);
    this.r1 = r1;
  }

  update(t, time) {
    const { three } = this.ctx;
    for (const m of [...this.early, ...this.global]) m.material.uniforms.uTime.value = time;
    const ps = this.ctx.responsive.portrait ? 0.3 : 0.24;
    this.pieces.forEach((sp) => {
      const k = sp.userData.pop.s;
      sp.scale.set(ps * k + 0.0001, ps * k + 0.0001, 1);
      const b = sp.userData.burst;
      b.sprite.scale.set(b.s, b.s, 1);
      b.sprite.material.opacity = b.o;
    });

    // Target = the point in front of the camera behind the logo centre.
    const cam = three.camera;
    const ndcY = this.ctx.logoNdcY ?? 0.18;
    this.tmp.set(0, ndcY, 0.5).unproject(cam).sub(cam.position).normalize();
    const target = this.convUniforms.uTarget.value.copy(cam.position).addScaledVector(this.tmp, 2.4);
    this.earth.spin.updateMatrixWorld();
    this.convUniforms.uEarth.value.copy(this.earth.spin.matrixWorld);
    this.convUniforms.uPixel.value = three.renderer.getPixelRatio() * (three.H / 900);
    this.flash.position.copy(target);
    const fs = this.flash.userData.s.size;
    this.flash.scale.set(fs, fs, 1);
  }
}
