
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function TechCore() {
  const meshRef = useRef(null);
  const wireRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = Math.sin(t * 0.15 + 1) * 0.15;
      wireRef.current.rotation.y = t * 0.12 + 0.5;
    }
  });

  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 60; i++) {
      const t = (i * 2.399) % (Math.PI * 2);
      const u = Math.acos(2 * ((i * 0.271) % 1) - 1);
      const r = 2.2 + ((i * 0.137) % 1) * 0.3;
      p.push(new THREE.Vector3(
        r * Math.sin(u) * Math.cos(t),
        r * Math.sin(u) * Math.sin(t),
        r * Math.cos(u)
      ));
    }
    return p;
  }, []);

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshDistortMaterial
            color="#0299b1"
            emissive="#0299b1"
            emissiveIntensity={0.15}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.35}
            distort={0.15}
            speed={1.5}
          />
        </mesh>
      </Float>

      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color="#0299b1"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[2.4, 0]} />
          <meshBasicMaterial
            color="#0abde3"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>

      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.035, 6, 6]} />
          <meshBasicMaterial color="#0299b1" transparent opacity={0.4 + ((i * 0.193) % 1) * 0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="w-full h-full p-10 "
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#0299b1" />
        <pointLight position={[-5, -3, 2]} intensity={0.4} color="#0abde3" />
        <TechCore />
      </Canvas>
    </motion.div>
  );
}
