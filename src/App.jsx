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
import HeroSection from "./components/HeroSection";

export default function App() {
  useEffect(() => {
    // Wait for canvas and DOM to fully render, then refresh ScrollTrigger
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // tweak delay if needed

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
      <HeroSection />

      <div className="min-h-96 rounded-lg w-screen flex justify-center">
        <section
          id="about"
          className="bg-[#2EBAAF] flex py-8 flex-row justify-center items-center w-screen flex-wrap"
        >
          <div id="heading" className=" max-w-1/2">
            <h1
              id="main-header"
              className="text-4xl font-sans uppercase font-medium"
            >
              The Best Lemon Tea In The Universe!
            </h1>
            <p id="sub-header" className="max-w-3/4 text-justify text-lg m-4 text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div
            id="model"
            className="bg-black rounded-lg relative h-[450px] min-w-1/3"
          >
            <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
              <ambientLight intensity={2} />
              <CustomStars count={1500} speed={0.05} color="#2EBAAF" />

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
        </section>
      </div>

      {/*  */}
      
      <div className="min-h-96 rounded-lg w-screen flex justify-center">
        <section
          id="about"
          className="bg-[#2EBAAF] py-8 flex flex-row justify-center items-center w-screen flex-wrap"
        >
          <div
            id="model"
            className=" rounded-2xl  flex items-center relative h-[450px] min-w-1/3"
          >
            <img
              src="/stock1.jpg"
              className="rounded-lg object-contain"
            />
          </div>
          <div id="heading" className="max-w-1/2 flex flex-col ">
            <h1
              id="main-header"
              className="text-4xl font-sans uppercase font-medium"
            >
              The Best Lemon Tea In The Universe!
            </h1>
            <p id="sub-header" className="max-w-3/4 text-justify text-lg text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </div>

      <section id="tag-line">
        <div className="w-screen h-full ">
          <h1 className="uppercase text-7xl font-semibold text-center my-14 text-[#2EBAAF] animate-pulse">
            The Best lemon tea in the universe
          </h1>
        </div>
      </section>

      <div className="z-0 min-h-screen bg-white"></div>
    </main>
  );
}
