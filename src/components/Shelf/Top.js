import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Top = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/Top.glb");
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.Top.geometry}
      material={nodes.Top.material}
      position={[0, 0, -0.69]}
      rotation={[-Math.PI / 2, 0, 0]}
      visible={visible}
    />
  );
});

useGLTF.preload("/Top.glb");
