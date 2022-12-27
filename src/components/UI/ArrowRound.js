import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

// TODO create instances
export const ArrowRound = forwardRef(
  ({ position = [0, 0, 0], rotation = [0, 0, 0] }, ref) => {
    const { nodes } = useGLTF("/ArrowRound.glb");
    return (
      <mesh
        ref={ref}
        geometry={nodes.ArrowRound.geometry}
        position={position}
        rotation={rotation}
      >
        <meshStandardMaterial color={0xffa500}></meshStandardMaterial>
      </mesh>
    );
  }
);

useGLTF.preload("/ArrowRound.glb");
