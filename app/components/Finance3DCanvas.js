'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

// A complex 3D wireframe network node that rotates slowly
function AbstractNetworkNode() {
  const meshRef = useRef();

  // Slow, continuous rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Wireframe Globe */}
      <mesh>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshBasicMaterial 
          color="#00e5e5" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
      
      {/* Inner Glowing Distorted Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#a855f7"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.9}
            roughness={0.1}
            distort={0.4}
            speed={2}
            transparent={true}
            opacity={0.5}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Finance3DCanvas() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00e5e5" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
        
        {/* The 3D Scene Elements */}
        <AbstractNetworkNode />
        {/* Removed DataParticles to keep design simple as requested */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Adds depth of field and fog to blend it into the dark background */}
        <fog attach="fog" args={['#02050a', 5, 15]} />
      </Canvas>
    </div>
  );
}
