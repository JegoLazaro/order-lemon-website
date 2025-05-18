import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CustomStars from "./ThreeJsComponents/CustomStars";
import HeroLogo from "./ThreeJsComponents/HeroLogo";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-white">
      <div className="bg-black w-[100vw] h-[100vh]">
        <Canvas camera={{ position: [0, 0, 50], fov: 100 }}>
          <ambientLight intensity={0.3} />
          <CustomStars count={1000} speed={0.5} color="#2EBAAF" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />

          <HeroLogo src="/order-logo.png" size={[50, 50]} />
        </Canvas>
        {/* <img
          src="/order-logo.png"
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] transform -translate-x-1/2 -translate-y-1/2"
          alt="Centered Logo"
        /> */}
        <div className="z-0 min-h-screen bg-gray-500"></div>
      </div>
    </main>
  );
}
