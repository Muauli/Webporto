"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. SCENE & CAMERA (Lensa Sinematik)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");
    // Kabut tipis agar ujung ombak raksasa membaur estetik dengan background
    scene.fog = new THREE.FogExp2("#ffffff", 0.035);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 3. GEOMETRY (Resolusi tinggi untuk ombak yang rumit)
    const geometry = new THREE.PlaneGeometry(55, 55, 120, 120);
    geometry.rotateX(-Math.PI / 2);

    const initialPositions = new Float32Array(
      geometry.attributes.position.array,
    );

    // 4. MATERIAL (Sutra Mengkilap)
    const material = new THREE.MeshPhysicalMaterial({
      color: "#f8f9fa",
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    // KUNCI AMAN: Jaring diturunkan sangat dalam agar puncak ombak tidak menabrak layar
    mesh.position.y = -3.5;
    scene.add(mesh);

    // 5. LIGHTING (Pencahayaan Dramatis)
    const ambientLight = new THREE.AmbientLight("#ffffff", 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight("#ffffff", 2.2);
    dirLight.position.set(5, 15, 8);
    scene.add(dirLight);

    const spotLight = new THREE.PointLight("#cbd5e1", 5, 40);
    spotLight.position.set(-10, 8, -5);
    scene.add(spotLight);

    // 6. EVENT LISTENERS
    let targetScrollY = 0;
    let currentScrollY = 0;
    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Efek parallax mouse ditahan di level yang sangat elegan (anti pusing)
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // 7. MAIN ANIMATION LOOP
    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const t = (performance.now() - startTime) * 0.0012;

      // 🌊 KEMBALINYA GELOMBANG AGRESIF YANG KEREN
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const ix = initialPositions[i * 3];
        const iz = initialPositions[i * 3 + 2];

        // Rumus ombak tinggi ala versi "wild" sebelumnya
        const wave1 = Math.sin(ix * 0.2 + t * 0.8) * 1.2;
        const wave2 = Math.cos(iz * 0.15 + t * 0.6) * 0.9;
        const wave3 = Math.sin((ix - iz) * 0.1 - t * 0.4) * 0.6;

        positions.setY(i, wave1 + wave2 + wave3);
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      // --- LOGIKA KAMERA DRONE & SCROLLYTELLING ---

      currentScrollY += (targetScrollY - currentScrollY) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const scrollProgress = currentScrollY / window.innerHeight;

      // X: Kamera bergeser kiri-kanan tipis mengikuti mouse
      camera.position.x = mouseX;

      // Y: Kamera stabil di atas awan, sedikit turun saat di-scroll
      camera.position.y = 3.5 + mouseY * 0.5 - scrollProgress * 0.8;

      // Z: EFEK SCROLLYTELLING -> Terbang maju melintasi ombak
      camera.position.z = 8.0 - scrollProgress * 4.5;

      // Rotasi halus pada ombak saat di-scroll menambah kesan dinamis
      mesh.rotation.z = scrollProgress * 0.2;

      // Kamera selalu fokus ke tengah depan
      camera.lookAt(0, -1, -scrollProgress * 4.5);

      renderer.render(scene, camera);
    };

    animate();

    // 8. CLEANUP
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
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
