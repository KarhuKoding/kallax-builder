import { Edges, useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";

export const SideRight = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/SideRight.glb");

  return (
    <mesh
      ref={ref}
      geometry={nodes.SideRight.geometry}
      material={nodes.SideRight.material}
      position={[0.35, 0, 0]} // -0.16 default
      rotation={[0, 0, 0]}
    >
      <meshStandardMaterial transparent opacity={1} />
      <Edges />
      {props.children}
    </mesh>
  );
});

useGLTF.preload("/SideRight.glb");
