import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Screw() {
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

export function ScrewsTop({
  rotation = [-Math.PI / 2, 0, 0],
  position = [0, 0, 0],
}) {
  const group = useRef();
  return (
    <group ref={group} dispose={null} rotation={rotation} position={position}>
      <Screw />
    </group>
  );
}

useGLTF.preload("/screwTop.glb");
