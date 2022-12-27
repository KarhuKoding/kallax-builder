import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HighlightLeft(props) {
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
      >
    
        <meshStandardMaterial
          color={0xff6a00}
          emissive={"red"}
          emissiveIntensity={0}
        ></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/highlightLeft.glb");
