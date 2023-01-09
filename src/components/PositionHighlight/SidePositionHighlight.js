import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ArrowStraight } from "../Arrows/ArrowStraight";

export const SidePositionHighlight = forwardRef(
  ({ visible = true, ...props }, ref) => {
    const { nodes } = useGLTF("/SidePositionHighlight.glb");

    return (
      <group {...props} dispose={null} ref={ref}>
        {/* left */}
        <mesh
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
);

useGLTF.preload("/SidePositionHighlight.glb");
