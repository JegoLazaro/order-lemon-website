import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const CustomStars = ({ count = 1000, speed = 0.1, direction = 'z', color }) => {
    const pointsRef = useRef();

  // Generate star positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 200;     // x
      arr[i + 1] = (Math.random() - 0.5) * 200; // y
      arr[i + 2] = (Math.random() - 0.5) * 200; // z
    }
    return arr;
  }, [count]);

  // Move stars in Z-axis
  useFrame(() => {
    const posAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      let index = i * 3;

      posAttr.array[index + 2] += speed;

      // Reset star behind camera
      if (posAttr.array[index + 2] > 100) {
        posAttr.array[index + 2] = -100;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default CustomStars;
