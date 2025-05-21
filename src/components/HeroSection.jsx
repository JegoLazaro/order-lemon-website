import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CustomStars from "../ThreeJsComponents/CustomStars";
import { OrbitControls } from "@react-three/drei";
import HeroLogo from "../ThreeJsComponents/HeroLogo";

const HeroSection = () => {
  return (
    <div className="relative h-dvh w-screen bg-black overflow-x-hidden">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <CustomStars count={1000} speed={0.05} color="#2EBAAF" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <HeroLogo src="/order-logo.png" />
      </Canvas>
    </div>
  );
};

export default HeroSection;
