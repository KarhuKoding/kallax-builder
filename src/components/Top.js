import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Top = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/Top.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={nodes.Top.material}
        position={[0, 0, -0.69]}
      />
    </group>
  );
});

useGLTF.preload("/Top.glb");
