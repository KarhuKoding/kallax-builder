import React, { forwardRef } from "react";
import { useGLTF, Instances, Instance } from "@react-three/drei";
import { ArrowStraight } from "../Arrows/ArrowStraight";
import * as THREE from "three";

export const SidePositionHighlight = forwardRef(
  ({ visible = true, ...props }, ref) => {
    const { nodes } = useGLTF("/SidePositionHighlight.glb");
    const material = new THREE.MeshStandardMaterial({
      color: "blue",
      emissiveIntensity: 2,
      emissive: "blue",
    });

    return (
      <Instances
        geometry={nodes.SidePostionHighlight.geometry}
        material={material}
        limit={4}
        ref={ref}
      >
        <group {...props} dispose={null}>
          {/* left */}
          <Instance
            position={[-0.73, -0.015, -0.68]}
            rotation={[0, 0, -Math.PI]}
          >
            <ArrowStraight
              rotation={[0, Math.PI / 1.5, 0]}
              position={[0.01, -0.015, 0.02]}
            ></ArrowStraight>
            <ArrowStraight
              rotation={[0, Math.PI / 3, 0]}
              position={[0.01, -0.015, 1.34]}
            ></ArrowStraight>
          </Instance>

          {/* right */}
          <Instance position={[0.73, -0.015, -0.68]} rotation={[0, 0, 0]}>
            <ArrowStraight
              rotation={[0, Math.PI / 1.5, 0]}
              position={[0.01, 0.015, 0.02]}
            ></ArrowStraight>
            <ArrowStraight
              rotation={[0, Math.PI / 3, 0]}
              position={[0.01, 0.015, 1.34]}
            ></ArrowStraight>
          </Instance>
        </group>
      </Instances>
    );
  }
);

useGLTF.preload("/SidePositionHighlight.glb");
