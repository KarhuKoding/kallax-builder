import { useGLTF, Instances, Instance } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export default function Camlocks() {
  const { nodes } = useGLTF("/Camlock.glb");
  const material = new THREE.MeshStandardMaterial({ color: 0x333333 });

  return (
    <Instances geometry={nodes.Cutter4x001.geometry} material={material} limit={4}>
      <Instance position={[-0.141, 0, -0.027]} rotation={[0, Math.PI / 2, 0]} />
      <Instance position={[0.141, 0, -0.027]} rotation={[0, -Math.PI / 2, 0]} />
      <Instance position={[-0.141, 0, -0.363]} rotation={[0, Math.PI / 2, 0]} />
      <Instance position={[0.141, 0, -0.363]} rotation={[0, -Math.PI / 2, 0]} />
    </Instances>
  );
}
useGLTF.preload("/Camlock.glb");
