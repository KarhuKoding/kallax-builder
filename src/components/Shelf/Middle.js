import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Middle = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/Middle.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle2.geometry}
        material={nodes.Middle2.material}
        position={[0, 0, 0.35]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle3.geometry}
        material={nodes.Middle3.material}
        position={[0, 0, -0.33]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle1.geometry}
        material={nodes.Middle1.material}
        position={[0, 0, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      />
    </group>
  );
});

useGLTF.preload("/Middle.glb");
