"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scene = useRef<THREE.Scene>(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const controls = useRef<OrbitControls | null>(null);
  const blocks = useRef<THREE.Mesh[]>([]);
  const [puzzleSize, setPuzzleSize] = useState<number>(4);
  const [puzzleValues, setPuzzleValues] = useState<number[][]>(initializePuzzle(4));

  useEffect(() => {
    // Initialize camera, renderer, and controls here
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);

    renderer.current.setSize(window.innerWidth, window.innerHeight);
    camera.current.position.z = 5;

    const blockSize = 1;

    for (let i = 0; i < puzzleValues.length; i++) {
      for (let j = 0; j < puzzleValues[i].length; j++) {
        const blockGeometry = new THREE.BoxGeometry(blockSize, puzzleValues[i][j] * blockSize, blockSize);
        const blockMaterial = new THREE.MeshBasicMaterial({ color: getColor(puzzleValues[i][j]) });
        const blockMesh = new THREE.Mesh(blockGeometry, blockMaterial);
        blockMesh.position.set(i * blockSize, (puzzleValues[i][j] / 2) * blockSize, j * blockSize);
        scene.current.add(blockMesh);
        blocks.current.push(blockMesh);
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (controls.current) controls.current.update();
      if (renderer.current && camera.current) renderer.current.render(scene.current, camera.current);
    };

    animate();
  }, [puzzleValues]);

  const getColor = (value: number) => {
    const colorMap: Record<number, number> = {
      1: 0xcc0000, // Red
      2: 0x00cc00, // Green
      3: 0x0000cc, // Blue
      4: 0xcccc00, // Yellow
      5: 0xaa00aa, // Magenta
      6: 0x00aaaa, // Cyan
      7: 0x999999, // Light Gray
      8: 0x555555, // Dark Gray
      9: 0x333333, // Darker Gray
    };
    return colorMap[value] || 0x888888;
  };

  function initializePuzzle(size: number) {
    // 초기 퍼즐 생성 함수
    const values: number[][] = [
      [1, 2, 3, 4],
      [4, 3, 2, 1],
      [2, 1, 4, 3],
      [3, 4, 1, 2],
    ];
    
    return values;
  };

  const handlePuzzleChange = () => {
    const newSize = prompt("Enter puzzle size:");
    if (newSize) {
      const size = parseInt(newSize.trim(), 10);
      if (size > 0) {
        setPuzzleSize(size);
        setPuzzleValues(initializePuzzle(size));
      } else {
        alert("Invalid size. Please enter a positive integer.");
      }
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} className="w-full h-screen"></canvas>
      <button onClick={handlePuzzleChange}>Change Puzzle Size</button>
    </div>
  );
}

export default Home;
