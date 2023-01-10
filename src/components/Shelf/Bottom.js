import React, { forwardRef } from "react";
import { useGLTF, Edges } from "@react-three/drei";

export const Bottom = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes } = useGLTF("/Bottom.glb");
  return (
    <mesh
      ref={ref}
      geometry={nodes.Bottom.geometry}
      position={[0, 0, 0.69]}
      rotation={[Math.PI / 2, 0, 0]}
      visible={visible}
    >
      <meshStandardMaterial transparent />
      <Edges />
      {props.children}
    </mesh>
  );
});

useGLTF.preload("/Bottom.glb");
