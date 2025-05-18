import React, { useEffect, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

const HeroLogo = ({ src = "/logo.png", position = [0, 0, 0] }) => {
  const texture = useLoader(THREE.TextureLoader, src);
  const meshRef = useRef();
  const { viewport } = useThree();

  const [size, setSize] = useState([50, 50]); // Default size

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setSize([15, 15]);
    } else {
      setSize([50, 50]);
    }
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.5,
        ease: "power3.out",
        delay: 0.1,
        onComplete: () => {
          gsap.to(meshRef.current.scale, {
            x: 1.05,
            y: 1.05,
            duration: 1.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      });
    }
  }, []);

  return (
    <mesh ref={meshRef} position={position} scale={[0.001, 0.001, 0.001]}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default HeroLogo;
