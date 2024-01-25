"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {

  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen"></canvas>;
}

export default Home;
