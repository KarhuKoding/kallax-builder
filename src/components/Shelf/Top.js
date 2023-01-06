import React, { forwardRef } from "react";
import { useGLTF, Edges } from "@react-three/drei";

export const Top = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes } = useGLTF("/Top.glb");
  return (
    <mesh
      ref={ref}
      geometry={nodes.Top.geometry}
      position={[0, 0, -0.69]}
      rotation={[-Math.PI / 2, 0, 0]}
      visible={visible}
    >
      <meshStandardMaterial transparent color="red"/>
      <Edges />
      {props.children}
    </mesh>
  );
});

useGLTF.preload("/Top.glb");
