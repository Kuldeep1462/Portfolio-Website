"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"
import type { Mesh } from "three"

interface ProjectModelProps {
  type: string
}

export default function ProjectModel({ type }: ProjectModelProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  // Different models based on project type
  switch (type) {
    case "gym":
      return (
        <group ref={meshRef}>
          <mesh position={[0, 0, 0]}>
            <Text3D
              font="/fonts/Inter_Bold.json"
              size={0.5}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
            >
              {"Rock Gym"}
              <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.2} />
            </Text3D>
          </mesh>
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
            <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.2} />
          </mesh>
          <mesh position={[0.8, -1, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
            <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.2} />
          </mesh>
        </group>
      )
    case "library":
      return (
        <group ref={meshRef}>
          <mesh position={[0, 0, 0]}>
            <Text3D
              font="/fonts/Inter_Bold.json"
              size={0.4}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
            >
              {"Library"}
              <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.2} />
            </Text3D>
          </mesh>
          <mesh position={[0, -1, 0]}>
            <boxGeometry args={[1.5, 0.8, 0.2]} />
            <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.2} />
          </mesh>
          <mesh position={[0, -1, 0.3]}>
            <boxGeometry args={[1.2, 0.6, 0.2]} />
            <meshStandardMaterial color="#0284c7" metalness={0.5} roughness={0.2} />
          </mesh>
        </group>
      )
    case "ecommerce":
      return (
        <group ref={meshRef}>
          <mesh position={[0, 0, 0]}>
            <Text3D
              font="/fonts/Inter_Bold.json"
              size={0.4}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
            >
              {"Stark Power"}
              <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.2} />
            </Text3D>
          </mesh>
          <mesh position={[0, -1, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f59e0b" wireframe={true} />
          </mesh>
          <mesh position={[0, -1, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      )
    default:
      return (
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6d28d9" />
        </mesh>
      )
  }
}
