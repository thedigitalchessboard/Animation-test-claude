// Shared WebGL renderer / scene / camera for Space, Earth and Network scenes.

import { PerformanceManager } from './PerformanceManager.js';

export class ThreeStage {
  constructor(THREE, canvas, profile) {
    this.THREE = THREE;
    this.profile = profile;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: profile.antialias,
      alpha: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 16 / 9, 0.01, 400);
    this.dprScale = 1;
  }

  setSize(W, H, profile = this.profile) {
    this.profile = profile;
    const dpr = PerformanceManager.cappedDpr(profile.dprCap) * this.dprScale;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(W, H, false);
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.W = W; this.H = H;
  }

  degrade(level) {
    this.dprScale = level >= 2 ? 0.6 : 0.8;
    if (this.W) this.setSize(this.W, this.H);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.scene.traverse((o) => {
      o.geometry?.dispose?.();
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      mats.forEach((m) => {
        for (const k in m.uniforms || {}) m.uniforms[k].value?.dispose?.();
        m.map?.dispose?.();
        m.dispose();
      });
    });
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}
