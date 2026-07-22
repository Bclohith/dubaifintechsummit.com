"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Stars } from '@react-three/drei';

function ParticleSystem() {
  const groupRef = useRef();
  
  // Slowly rotate the entire particle system for a dynamic cinematic feel
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Deep space background stars */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      {/* Interactive foreground cyber particles (cyan and purple) */}
      <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.6} color="#00e5e5" />
      <Sparkles count={100} scale={15} size={3} speed={0.2} opacity={0.4} color="#b026ff" />
      <Sparkles count={50} scale={20} size={5} speed={0.1} opacity={0.2} color="#ffffff" />
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #060f1d 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
