"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function SikhCharacter() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#e5c07b" />
      </mesh>

      {/* Turban */}
      <mesh position={[0, 0.7, 0]}>
        <torusGeometry args={[0.55, 0.2, 16, 100]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Turban top */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.15, 0.5, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.15, 0.5, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Beard */}
      <mesh position={[0, 0.2, 0.2]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 3]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  )
}

export default function SikhBoyModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <SikhCharacter />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
