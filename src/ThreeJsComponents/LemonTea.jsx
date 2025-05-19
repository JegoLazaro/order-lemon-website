import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';

// Preload the model to optimize loading performance
useGLTF.preload("/lemon-tea.glb");

const LemonTea = ({ 
  modelPath, 
  scale = 1, 
  position 
}) => {
  const { scene } = useGLTF(modelPath);

  const texture = useTexture('/lemon-tea-texture2.png');

  useEffect(() => {
    // Set how texture wraps when repeating
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.wrapT = texture.wrapS = THREE.RepeatWrapping;

    // Higher values = more tiling (smaller texture pattern)
    texture.repeat.set(.8, 1.15); // .set(xRepeat, yRepeat)

    // Offset moves the texture along the surface
    // Higher X = shift left; higher Y = shift upward
    texture.offset.set(0, 0); // .set(xOffset, yOffset)

    // Rotate the texture in radians (e.g., Math.PI / 2 = 90°)
    texture.rotation = -.15;

    // Center point for rotation (0.5, 0.5 = rotate around the middle)
    texture.center.set(0.05,0.25);

    // Traverse each mesh in the model and apply the texture
    scene.traverse((child) => {
      if (child.isMesh) {

        // Set the texture as the mesh’s base color map
        child.material.map = texture;

        // Adjust material appearance:
        // metalness: 0 = plastic, 1 = metal
        child.material.metalness = 0.1;

        // roughness: 0 = shiny/smooth, 1 = very matte
        child.material.roughness = 0.8;

        // Apply changes to material
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

export default LemonTea;
