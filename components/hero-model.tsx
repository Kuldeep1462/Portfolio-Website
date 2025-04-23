"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"
import type { Mesh } from "three"

export default function HeroModel() {
  const meshRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }

    if (textRef.current) {
      textRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group>
      {/* 3D Text */}
      <mesh ref={textRef} position={[0, 0, 0]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {`<Dev/>`}
          <meshStandardMaterial color="#6d28d9" metalness={0.5} roughness={0.2} />
        </Text3D>
      </mesh>

      {/* Floating Spheres */}
      <mesh ref={meshRef} position={[1.5, 1, -1]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh position={[-1.5, -1, -1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ec4899" metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh position={[-1, 1, -2]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#14b8a6" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}
