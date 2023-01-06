import { useGLTF, Edges } from "@react-three/drei";
import React, { forwardRef } from "react";
import { animated } from "@react-spring/three";

export const SideLeft = forwardRef(({ opacity = 1, ...props }, ref) => {
  const { nodes } = useGLTF("/SideLeft.glb");

  return (
    <mesh
      ref={ref}
      geometry={nodes.SideLeft.geometry}
      position={[-0.35, 0, 0]} // -0.16 default
      rotation={[0, 0, Math.PI / 2]}
    >
      <animated.meshStandardMaterial transparent opacity={opacity} />
      <Edges />
      {props.children}
    </mesh>
  );
});

useGLTF.preload("/SideLeft.glb");
