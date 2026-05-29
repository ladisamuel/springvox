import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NeuralCore() {
  const meshRef = useRef()
  const particlesRef = useRef()
  const linesRef = useRef()

  const particleCount = 60
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 2 + Math.random() * 2.5
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return temp
  }, [])

  const lines = useMemo(() => {
    const temp = []
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.sqrt(
          particles[i].position.reduce((acc, val, idx) => 
            acc + Math.pow(val - particles[j].position[idx], 2), 0)
        )
        if (dist < 3.5) {
          temp.push({ start: i, end: j, opacity: 1 - dist / 3.5 })
        }
      }
    }
    return temp
  }, [particles])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1
      meshRef.current.rotation.z = time * 0.05
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05
      const positions = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const angle = time * p.speed + p.offset
        positions[i * 3] = p.position[0] + Math.sin(angle) * 0.3
        positions[i * 3 + 1] = p.position[1] + Math.cos(angle * 0.7) * 0.3
        positions[i * 3 + 2] = p.position[2] + Math.sin(angle * 0.5) * 0.3
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particles.length * 3)
    particles.forEach((p, i) => {
      positions[i * 3] = p.position[0]
      positions[i * 3 + 1] = p.position[1]
      positions[i * 3 + 2] = p.position[2]
    })
    return positions
  }, [particles])

  const linePositions = useMemo(() => {
    const positions = new Float32Array(lines.length * 6)
    lines.forEach((line, i) => {
      const start = particles[line.start].position
      const end = particles[line.end].position
      positions[i * 6] = start[0]
      positions[i * 6 + 1] = start[1]
      positions[i * 6 + 2] = start[2]
      positions[i * 6 + 3] = end[0]
      positions[i * 6 + 4] = end[1]
      positions[i * 6 + 5] = end[2]
    })
    return positions
  }, [lines, particles])

  return (
    <group>
      {/* Central Sphere */}
      <mesh ref={meshRef}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#0299b1"
            emissive="#01424c"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </Sphere>
      </mesh>

      {/* Inner Glow */}
      <mesh>
        <Sphere args={[1.3, 32, 32]}>
          <meshBasicMaterial
            color="#0299b1"
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </Sphere>
      </mesh>

      {/* Outer Glow */}
      <mesh>
        <Sphere args={[1.6, 32, 32]}>
          <meshBasicMaterial
            color="#00d4ff"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
          />
        </Sphere>
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00d4ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Connecting Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0299b1" transparent opacity={0.15} />
      </lineSegments>

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0299b1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#01424c" />
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#0a0a0f', 8, 20]} />
        <NeuralCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
