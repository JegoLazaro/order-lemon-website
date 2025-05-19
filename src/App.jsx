import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
import CustomStars from "./ThreeJsComponents/CustomStars";
import HeroLogo from "./ThreeJsComponents/HeroLogo";
import Heading from "./components/Heading";
import MarqueeImageScroll from "./components/MarqueeImageScroll";
import LemonTea from "./ThreeJsComponents/LemonTea";

export default function App() {
  useEffect(() => {
    // Wait for canvas and DOM to fully render, then refresh ScrollTrigger
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // tweak delay if needed

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-white">
      <div className="bg-black w-full h-screen">
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

        {/* Placeholder below 3D scene */}
        <div className="z-0  w-full h-screen bg-black">
          {/* <MarqueeImageScroll /> */}
          <Heading
            title="The Best Lemon Tea In The Universe!"
            containerClass="text-center bg-black text-8xl md:text-6xl font-bold text-[#2EBAAF] py-40  uppercase"
          />
          <div className="z-0 max-w-5xl h-1/2 md:w-full ">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
              <ambientLight intensity={2} />
              <CustomStars count={1000} speed={0.05} color="#2EBAAF" />

              <LemonTea
                modelPath="/lemon-tea.glb"
                scale={1.1}
                position={[-2.5, -3.5, 5]}
              />
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
              />
            </Canvas>
          </div>
        </div>
        <div className="z-0 min-h-screen bg-black"></div>
      </div>
    </main>
  );
}
