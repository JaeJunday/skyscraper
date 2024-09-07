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
  const [puzzleInput, setPuzzleInput] = useState<string>('');
  const [puzzleValues, setPuzzleValues] = useState<number[][]>(initializePuzzle(4));

  useEffect(() => {

    if (!canvasRef.current)
      return;

    // Initialize camera, renderer, and controls here
    camera.current = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);
  
    renderer.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    camera.current.position.set(0, 5, 5);
    camera.current.position.y = 8;

    const blockSize = 1;

    const totalSizeX = puzzleValues.length * blockSize;
    const totalSizeZ = puzzleValues[0].length * blockSize;

    for (let i = 0; i < puzzleValues.length; i++) {
      for (let j = 0; j < puzzleValues[i].length; j++) {
        const blockGeometry = new THREE.BoxGeometry(blockSize, puzzleValues[i][j] * blockSize, blockSize);
        const blockMaterial = new THREE.MeshBasicMaterial({ color: getColor(puzzleValues[i][j]) });
        const blockMesh = new THREE.Mesh(blockGeometry, blockMaterial);
    
        // Calculate center offset
        const offsetY = -totalSizeX / 2 + (blockSize * i) + blockSize / 2;
        const offsetX = -totalSizeZ / 2 + (blockSize * j) + blockSize / 2;
    
        blockMesh.position.set(offsetX, (puzzleValues[i][j] / 2) * blockSize, offsetY);
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
    return () => {
      for (const block of blocks.current) {
        scene.current.remove(block);
      }  
      blocks.current = [];
    }
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
  }

  const handlePuzzleChange = () => {
    const numbers = puzzleInput.match(/\d+/g);
    
    if (!numbers || numbers.length === 0) {
      alert('No matching numbers found');
      return;
    }
  
    const numArr: string = numbers[0];
  
    if (numArr.length !== puzzleSize * puzzleSize) {
      alert('Input Size different: ' + `${numArr.length}`);
      return;
    }
  
    const parsedArray: number[][] = numArr.split('').map(Number).reduce((acc, num, index) => {
      const rowIndex = Math.floor(index / puzzleSize);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(num);
      return acc;
    }, [] as number[][]);
  
    console.log(parsedArray);
    setPuzzleValues(parsedArray);
  };
  
  const setPuzzleResize = (size: number) => {
    if (size < 4 || size > 9) {
      alert('Puzzle size must be range 4 ~ 10');
      return;
    }
    setPuzzleSize(size);
  }

  return (
    <div>
      <canvas ref={canvasRef} className="w-full" style={{ height: '80vh' }}></canvas>

      <div className="mx-4">
        <label htmlFor="puzzleSize" className="block text-sm font-medium text-gray-700">
          Puzzle Size:
        </label>
        <input
          type="number"
          id="puzzleSize"
          name="puzzleSize"
          className="mt-1 p-2 border rounded-md"
          value={puzzleSize}
          onChange={(e) => setPuzzleResize(parseInt(e.target.value, 10))}
        />
      </div>

      <div>
      <div className="mx-4">
        <label htmlFor="puzzleHeight" className="block text-sm font-medium text-gray-700">
          Puzzle Input: {puzzleSize * puzzleSize}
        </label>
        <input
          type="text"
          id="puzzleHeight"
          name="puzzleHeight"
          className="mt-1 p-2 border rounded-md"
          value={puzzleInput}
          onChange={(e) => setPuzzleInput(e.target.value)}
        />
      </div>

      <button
        onClick={handlePuzzleChange}
        className="mt-4 mx-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Change Puzzle Size
      </button>
    </div>
    </div>
  );
}

export default Home;
