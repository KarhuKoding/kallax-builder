import React, { forwardRef } from "react";
import * as THREE from "three";
import { useGLTF, Instances, Instance } from "@react-three/drei";

export function ScrewTop() {
  const { nodes } = useGLTF("/screwTop.glb");
  const material = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.5,
    color: 0xa8a8a8,
  });

  return (
    <Instances geometry={nodes.ScrewTop.geometry} material={material} limit={4}>
      <Instance position={[0.185, 0, 0.0265]}></Instance>
      <Instance position={[0.185, 0, 0.369]}></Instance>
      <Instance position={[-0.1845, 0, 0.0265]}></Instance>
      <Instance position={[-0.1845, 0, 0.369]}></Instance>
    </Instances>
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
