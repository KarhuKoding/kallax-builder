import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const SideLeft = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/SideLeft.glb");
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.SideLeft.geometry}
      material={nodes.SideLeft.material}
      position={[-0.35, 0, 0]} // -0.16 default
      rotation={[0, 0, Math.PI / 2]}
    />
  );
});

useGLTF.preload("/SideLeft.glb");
