import React from "react";
import { useGLTF } from "@react-three/drei";

export function ArrowStraight({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}) {
  const { nodes } = useGLTF("/ArrowStraight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ArrowStraight.geometry}
        material={nodes.ArrowStraight.material}
        position={position}
        rotation={rotation}
      >
        <meshBasicMaterial color={"gray"} toneMapped={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/ArrowStraight.glb");
