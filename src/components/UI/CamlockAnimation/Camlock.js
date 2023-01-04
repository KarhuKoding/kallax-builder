import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Camlock({
  position = [0, 0, 0],
  rotation = [0, Math.PI / 2, 0],
  ...props
}) {
  const { nodes, materials } = useGLTF("/Camlock.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cutter4x001.geometry}
        material={nodes.Cutter4x001.material}
        position={position}
        rotation={rotation}
      >
        <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Camlock.glb");
