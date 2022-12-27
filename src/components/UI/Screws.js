import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Screws({
  position = [0, 0, 0],

  ...props
}) {
  const { nodes, materials } = useGLTF("/placeholderScrew.glb");
  return (
    <group dispose={null} position={position}>
      <mesh
        geometry={nodes.PlaceholderScrew.geometry}
        material={nodes.PlaceholderScrew.material}
        position={[-0.3715, 0, 0.34]}
      >
        <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
      </mesh>

      <mesh
        geometry={nodes.PlaceholderScrew.geometry}
        material={nodes.PlaceholderScrew.material}
        position={[-0.3715, 0, 0]}
      >
        <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
      </mesh>

      <mesh
        geometry={nodes.PlaceholderScrew.geometry}
        material={nodes.PlaceholderScrew.material}
        position={[-0.3715, 0, -0.34]}
      >
        <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/placeholderScrew.glb");
