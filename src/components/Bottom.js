import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Bottom = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/Bottom.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom.geometry}
        material={nodes.Bottom.material}
        position={[0, 0, 0.69]}
      />
    </group>
  );
});

useGLTF.preload("/Bottom.glb");
