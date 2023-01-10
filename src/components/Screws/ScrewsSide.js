import React from "react";
import * as THREE from "three";
import { useGLTF, Instances, Instance } from "@react-three/drei";

function Screws() {
  const { nodes } = useGLTF("/screwSide.glb");
  const material = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.5,
    color: 0xa8a8a8,
  });

  return (
    <Instances
      geometry={nodes.ScrewSIde.geometry}
      material={material}
      limit={6}
    >
      <group position={[0, 0, 0]}>
        <Instance position={[-0.3725, -0.019, 0.338]} />
        <Instance position={[-0.3725, -0.019, 0]} />
        <Instance position={[-0.3725, -0.019, -0.341]} />
      </group>
      <group position={[0.344, 0, 0]}>
        <Instance position={[-0.3725, -0.019, 0.338]} />
        <Instance position={[-0.3725, -0.019, 0]} />
        <Instance position={[-0.3725, -0.019, -0.341]} />
      </group>
    </Instances>
  );
}

export function ScrewsSide() {
  return <Screws />;
}

useGLTF.preload("/screwSide.glb");
