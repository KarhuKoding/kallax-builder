import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ScrewTop() {
  const { nodes } = useGLTF("/screwTop.glb");

  return (
    <>
      <mesh geometry={nodes.ScrewTop.geometry} position={[0.185, 0, 0.0265]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.5}
          color={0xa8a8a8}
        ></meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.ScrewTop.geometry} position={[0.185, 0, 0.369]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.5}
          color={0xa8a8a8}
        ></meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.ScrewTop.geometry} position={[-0.1845, 0, 0.0265]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.5}
          color={0xa8a8a8}
        ></meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.ScrewTop.geometry} position={[-0.1845, 0, 0.369]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.5}
          color={0xa8a8a8}
        ></meshStandardMaterial>
      </mesh>
    </>
  );
}

export const ScrewsTop = forwardRef(
  (
    { rotation = [-Math.PI / 2, 0, 0], position = [0, 0, 0], ...props },
    ref
  ) => {
    return (
      <group ref={ref} dispose={null} rotation={rotation} position={position}>
        <ScrewTop />
      </group>
    );
  }
);

useGLTF.preload("/screwTop.glb");
