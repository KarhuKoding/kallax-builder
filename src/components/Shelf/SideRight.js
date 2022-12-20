import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const SideRight = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/SideRight.glb");
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.SideRight.geometry}
      material={nodes.SideRight.material}
      position={[0.35, 0, 0]} // 0.16 default
      rotation={[0, 0, -Math.PI / 2]}
    />
  );
});

useGLTF.preload("/SideRight.glb");
