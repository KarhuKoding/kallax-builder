import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Screw(props) {
  const { nodes, materials } = useGLTF("/placeholderScrew.glb");
  return (
    <mesh
      geometry={nodes.PlaceholderScrew.geometry}
      material={nodes.PlaceholderScrew.material}
      position={[-1, 0, 0]}
    >
      <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
    </mesh>
  );
}

useGLTF.preload("/placeholderScrew.glb");
