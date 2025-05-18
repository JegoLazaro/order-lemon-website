import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CustomStars from "./ThreeJsComponents/CustomStars";
import HeroLogo from "./ThreeJsComponents/HeroLogo";

export default function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-white">
      <div className="bg-black w-full h-screen">
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <CustomStars count={1000} speed={0.15} color="#2EBAAF" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <HeroLogo src="/order-logo.png" />
        </Canvas>

        {/* Placeholder below 3D scene */}
        <div className="z-0 min-h-screen bg-gray-500"></div>
      </div>
    </main>
  );
}
