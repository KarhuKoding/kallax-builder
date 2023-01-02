import { useGLTF, Edges } from "@react-three/drei";
import React, { forwardRef, useState } from "react";

export const SideRight = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/SideRight.glb");
  const [active, setActive] = useState(false);

  return (
    <mesh
      ref={ref}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
      geometry={nodes.SideRight.geometry}
      material={nodes.SideRight.material}
      position={[0.35, 0, 0]} // -0.16 default
      rotation={[0, 0, -Math.PI / 2]}
    >
      <meshStandardMaterial transparent opacity={1} />
      <Edges />
    </mesh>
  );
});

useGLTF.preload("/SideRight.glb");
