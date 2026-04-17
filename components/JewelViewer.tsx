'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function JewelViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const W = () => container.clientWidth;
    const H = () => container.clientHeight;

    // Renderer — transparent bg so site background shows through
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, W() / H(), 0.01, 100);
    camera.position.set(0, 0.05, 0.35);

    // OrbitControls — 讓使用者可以拖拉旋轉
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enablePan = false;
    controls.minDistance = 0.15;
    controls.maxDistance = 0.7;
    controls.minPolarAngle = Math.PI * 0.2;
    controls.maxPolarAngle = Math.PI * 0.75;

    // === LIGHTS ===
    const ambient = new THREE.AmbientLight(0xf0f4ff, 2.0);
    scene.add(ambient);

    // 主要冷白光
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(2, 4, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // 正面補光
    const frontLight = new THREE.DirectionalLight(0xf8f8ff, 1.8);
    frontLight.position.set(0, 1, 5);
    scene.add(frontLight);

    // 冷藍 rim light（白金側面反射）
    const goldFill = new THREE.PointLight(0xd0d8e8, 2.0, 3);
    goldFill.position.set(-0.5, 0.3, 0.5);
    scene.add(goldFill);

    const rimLight = new THREE.DirectionalLight(0xdde8ff, 1.5);
    rimLight.position.set(-2, 1, -2);
    scene.add(rimLight);

    // 底部反射
    const bottomLight = new THREE.PointLight(0xffffff, 1.2, 2);
    bottomLight.position.set(0, -0.5, 0);
    scene.add(bottomLight);

    // 左側補光
    const leftLight = new THREE.DirectionalLight(0xf0f0ff, 1.2);
    leftLight.position.set(-3, 2, 1);
    scene.add(leftLight);

    // === LOAD GLB ===
    const loader = new GLTFLoader();
    let model: THREE.Group | null = null;

    loader.load(
      '/diamond_engagement_ring.glb',
      (gltf) => {
        model = gltf.scene;

        // 強化材質
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;

          const mat = child.material as THREE.MeshStandardMaterial;
          if (!mat) return;

          const name = mat.name?.toLowerCase() || '';

          if (name.includes('crystal') || name.includes('diamond')) {
            // 鑽石：高透明 + 折射，像原版帶點灰白的透明感
            const crystalMat = new THREE.MeshPhysicalMaterial({
              color: 0xf0f4f8,
              metalness: 0.0,
              roughness: 0.02,
              transmission: 0.88,
              thickness: 0.8,
              ior: 2.42,
              reflectivity: 1.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              transparent: true,
              opacity: 0.92,
              envMapIntensity: 1.2,
            });
            child.material = crystalMat;
          } else if (name.includes('metal') || name.includes('gold') || name.includes('ring')) {
            // 白金/鉑金：冷銀白，高反射，略帶藍灰
            const metalMat = new THREE.MeshPhysicalMaterial({
              color: 0xe8eaed,
              metalness: 1.0,
              roughness: 0.18,
              reflectivity: 1.0,
              clearcoat: 0.8,
              clearcoatRoughness: 0.05,
              envMapIntensity: 1.2,
            });
            child.material = metalMat;
          }
        });

        // 置中並縮放
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 0.22 / maxDim;

        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        model.position.y -= 0.01;

        scene.add(model);
      },
      undefined,
      (err) => console.error('GLB load error:', err)
    );

    // === MOUSE SUBTLE PARALLAX ===
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5);
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5);
    };
    container.addEventListener('mousemove', onMouseMove);

    // 滑鼠進入時停止自轉
    const onEnter = () => { controls.autoRotate = false; };
    const onLeave = () => { controls.autoRotate = true; };
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    // === ANIMATE ===
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();

      // 微微搖擺
      if (model) {
        model.rotation.z = Math.sin(Date.now() * 0.0005) * 0.03;
      }

      // 燈光跟著滑鼠
      goldFill.position.x = -0.5 + mouseX * 0.4;
      goldFill.position.y =  0.3 + mouseY * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ cursor: 'grab' }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* 拖拉提示 */}
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] text-stone-400 uppercase pointer-events-none select-none">
        Drag to rotate
      </p>
    </div>
  );
}
