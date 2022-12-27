import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Bottom = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/Bottom.glb");
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.Bottom.geometry}
      material={nodes.Bottom.material}
      position={[0, 0, 0.69]}
      rotation={[Math.PI / 2, 0, 0]}
      visible={visible}
    />
  );
});

useGLTF.preload("/Bottom.glb");
