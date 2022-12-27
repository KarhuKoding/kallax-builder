import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HighlightLeft({ visible, ...props }) {
  const { nodes, materials } = useGLTF("/highlightLeft.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cutter12Left.geometry}
        material={nodes.Cutter12Left.material}
        position={[-0.549, -0.02, 0]}
        rotation={[0, 0, -Math.PI]}
        visible={visible}
      >
        <meshBasicMaterial color={"red"} toneMapped={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/highlightLeft.glb");
