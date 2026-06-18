"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

class Spring {
  value: number;
  velocity: number;
  stiffness: number;
  damping: number;

  constructor(initial: number, stiffness = 0.05, damping = 0.82) {
    this.value = initial;
    this.velocity = 0;
    this.stiffness = stiffness;
    this.damping = damping;
  }

  update(target: number): number {
    const force = (target - this.value) * this.stiffness;
    this.velocity = this.velocity * this.damping + force;
    this.value += this.velocity;
    return this.value;
  }
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");
    scene.fog = new THREE.FogExp2("#ffffff", 0.035);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const seg = isMobile ? 60 : 120;
    const geometry = new THREE.PlaneGeometry(55, 55, seg, seg);
    geometry.rotateX(-Math.PI / 2);

    const initialPositions = new Float32Array(
      geometry.attributes.position.array,
    );

    const material = new THREE.MeshPhysicalMaterial({
      color: "#f8f9fa",
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -3.5;
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight("#ffffff", 2.2);
    dirLight.position.set(5, 15, 8);
    scene.add(dirLight);

    const spotLight = new THREE.PointLight("#cbd5e1", 5, 40);
    spotLight.position.set(-10, 8, -5);
    scene.add(spotLight);

    const mouseLight = new THREE.PointLight("#d4f5a0", 4, 25);
    mouseLight.position.set(0, 2, 5);
    if (!isMobile) scene.add(mouseLight);

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();
    const springCamX = new Spring(0, 0.04, 0.86);
    const springCamY = new Spring(3.5, 0.04, 0.86);
    const springCamZ = new Spring(8.0, 0.05, 0.82);
    const springLightX = new Spring(0, 0.07, 0.78);
    const springLightZ = new Spring(5, 0.07, 0.78);

    let mouseWorldX = 0;
    let mouseWorldZ = 0;
    let mouseRippleIntensity = 0;
    let targetRippleIntensity = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;
    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 1.5;

      if (!isMobile) {
        mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseVec.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouseVec, camera);
        const hits = raycaster.intersectObject(mesh);
        if (hits.length > 0) {
          mouseWorldX = hits[0].point.x;
          mouseWorldZ = hits[0].point.z;
          targetRippleIntensity = 1.0;
        }
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const onMouseLeave = () => {
      targetRippleIntensity = 0;
    };
    window.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) * 0.0012;

      mouseRippleIntensity +=
        (targetRippleIntensity - mouseRippleIntensity) * 0.06;
      targetRippleIntensity *= 0.92;

      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const ix = initialPositions[i * 3];
        const iz = initialPositions[i * 3 + 2];

        const wave1 = Math.sin(ix * 0.2 + t * 0.8) * 1.2;
        const wave2 = Math.cos(iz * 0.15 + t * 0.6) * 0.9;
        const wave3 = Math.sin((ix - iz) * 0.1 - t * 0.4) * 0.6;

        let ripple = 0;
        if (!isMobile && mouseRippleIntensity > 0.01) {
          const dx = ix - mouseWorldX;
          const dz = iz - mouseWorldZ;
          const dist2 = dx * dx + dz * dz;
          ripple = Math.exp(-dist2 * 0.07) * mouseRippleIntensity * 3.0;
        }

        positions.setY(i, wave1 + wave2 + wave3 + ripple);
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      currentScrollY += (targetScrollY - currentScrollY) * 0.05;
      const scrollProgress = currentScrollY / window.innerHeight;
      camera.position.x = springCamX.update(targetMouseX);
      camera.position.y = springCamY.update(
        3.5 + targetMouseY * 0.5 - scrollProgress * 0.8,
      );
      camera.position.z = springCamZ.update(8.0 - scrollProgress * 4.5);

      if (!isMobile) {
        mouseLight.position.x = springLightX.update(targetMouseX * 10);
        mouseLight.position.y = 3 + targetMouseY * 3;
        mouseLight.position.z = springLightZ.update(5 - scrollProgress * 3);
        mouseLight.intensity = 3 + mouseRippleIntensity * 5;
      }

      mesh.rotation.z = scrollProgress * 0.2;
      camera.lookAt(0, -1, -scrollProgress * 4.5);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
