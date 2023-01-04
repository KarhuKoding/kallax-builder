import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ArrowStraight } from "./Arrows/ArrowStraight";

export function SidePositionHighlight(props) {
  const { nodes, materials } = useGLTF("/SidePositionHighlight.glb");
  return (
    <group {...props} dispose={null}>
      {/* left */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SidePostionHighlight.geometry}
        material={nodes.SidePostionHighlight.material}
        position={[-0.73, -0.015, -0.68]}
        rotation={[0, 0, -Math.PI]}
      >
        <meshStandardMaterial
          color={"blue"}
          emissiveIntensity={2}
          emissive={"blue"}
        />
        <ArrowStraight
          rotation={[0, Math.PI / 1.5, 0]}
          position={[0.01, -0.015, 0.02]}
        ></ArrowStraight>
        <ArrowStraight
          rotation={[0, Math.PI / 3, 0]}
          position={[0.01, -0.015, 1.34]}
        ></ArrowStraight>
      </mesh>

      {/* right */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SidePostionHighlight.geometry}
        material={nodes.SidePostionHighlight.material}
        position={[0.73, -0.015, -0.68]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={"blue"}
          emissiveIntensity={2}
          emissive={"blue"}
        />
        <ArrowStraight
          rotation={[0, Math.PI / 1.5, 0]}
          position={[0.01, 0.015, 0.02]}
        ></ArrowStraight>
        <ArrowStraight
          rotation={[0, Math.PI / 3, 0]}
          position={[0.01, 0.015, 1.34]}
        ></ArrowStraight>
      </mesh>
    </group>
  );
}

useGLTF.preload("/SidePositionHighlight.glb");
