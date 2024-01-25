"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import smoothCameraAnimation from "./smoothCameraAnimation";

function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("black");

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const camera = new THREE.PerspectiveCamera(30, 1);
    camera.position.set(0, 1, 3);

    // light
    const leftLight = new THREE.DirectionalLight("purple", 10);
    const rightLight = new THREE.DirectionalLight("purple", 10);
    const bottom = new THREE.DirectionalLight("white", 5);
    const topLight = new THREE.DirectionalLight("white", 5);

    topLight.position.set(0, 20, 0);
    leftLight.position.set(-10, -20, 5);
    bottom.position.set(0, -0.5, 0);
    rightLight.position.set(10, -20, 5);

    scene.add(bottom);
    scene.add(topLight);
    scene.add(leftLight);
    scene.add(rightLight);

    // mouse control
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;

    // gltf loader
    const loader = new GLTFLoader();

    // genie
    const callGenie = async () => {
      return new Promise<void>((resolve) => {
        loader.load("/aladdin/genie/scene.gltf", (gltf: { scene: any }) => {
          gltf.scene.scale.set(1.5, 1.5, 1.5);
          gltf.scene.position.set(0, 1.9, 0);
          gltf.scene.rotation.set(1.2, 0, 0);
          scene.add(gltf.scene);
          resolve();
        });
      });
    };

    // lamp
    loader.load("/aladdin/lamp/scene.gltf", (gltf: { scene: any }) => {
      scene.add(gltf.scene);
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // 캔버스 크기 조절
      renderer.setSize(newWidth, newHeight);

      // 카메라 비율 업데이트
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    const clickAnimation = () => {
      const startPosition = controls.object.position.clone(); // 현재 카메라 위치를 가져옴
      const targetPosition = new THREE.Vector3(0, -6, 3);
      smoothCameraAnimation(startPosition, targetPosition, 2000, controls); // 3초 동안 애니메이션
    };

    const onClick = async (event: { clientX: number; clientY: number }) => {
      // 마우스 좌표 정규화
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      // Raycaster 설정
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Raycaster로 클릭 지점의 객체 검출
      const intersects = raycaster.intersectObjects(scene.children, true);

      // 클릭된 객체 확인
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        console.log(intersects);
        // 램프 누르면
        if (clickedObject.name === "LampBottom_0") {
          await callGenie();
          clickAnimation();
        }
      }
    };

    const updateFrame = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(updateFrame);
    };

    // 클릭 이벤트 리스너 등록
    window.addEventListener("click", onClick);
    window.addEventListener("resize", handleResize);

    // 초기 화면 사이즈 설정
    handleResize();

    // 프레임 조정
    updateFrame();

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen"></canvas>;
}

export default Home;
