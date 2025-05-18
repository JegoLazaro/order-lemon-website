import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import gsap from 'gsap';

const HeroLogo = ({ src = '/logo.png', targetSize = [1.5, 1.5], position = [0, 0, 0] }) => {
    const texture = useLoader(THREE.TextureLoader, src);
    const meshRef = useRef();
  
    useEffect(() => {
      if (meshRef.current) {
        // Animate the mesh's scale from tiny to full size using GSAP
        gsap.to(meshRef.current.scale, {
          x: 50,
          y: 50,
          z: 1,
          duration: 6,
          ease: 'power3.out',
          delay: 0.1,
          onComplete: () => {
            // Start pulsing after the initial scale-up
            gsap.to(meshRef.current.scale, {
              x: 53,
              y: 53,
              duration: 1,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1, // infinite loop
            });
          }
        });
      }
    }, []);
  
    return (
      <mesh ref={meshRef} position={position} scale={[0.001, 0.001, 0.001]}>
        <planeGeometry args={targetSize} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    );
  };
  
  export default HeroLogo;
