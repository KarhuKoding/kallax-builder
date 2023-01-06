import React from "react";
import { useGLTF } from "@react-three/drei";

function Screw({ position }) {
  const { nodes } = useGLTF("/screwSide.glb");
  return (
    <mesh geometry={nodes.ScrewSIde.geometry} position={position}>
      <meshStandardMaterial
        metalness={1}
        roughness={0.5}
        color={0xa8a8a8}
      ></meshStandardMaterial>
    </mesh>
  );
}

export function ScrewsSide({ position = [0, 0, 0] }) {
  return (
    <group dispose={null} position={position}>
      <Screw position={[-0.3725, -0.019, 0.338]} />
      <Screw position={[-0.3725, -0.019, 0]} />
      <Screw position={[-0.3725, -0.019, -0.341]} />
    </group>
  );
}

useGLTF.preload("/screwSide.glb");
