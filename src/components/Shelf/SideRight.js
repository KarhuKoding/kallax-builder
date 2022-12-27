import React, { forwardRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

export const SideRight = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/SideRight.glb");
  const [active, setActive] = useState(false);

  const [{ position }] = useSpring(
    () => ({
      from: { position: [0.35, 1, 0] },
      to: { position: [0.35, 0, 0] },
      config: config.slow,
    }),
    []
  );

  return (
    <animated.mesh
      ref={ref}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
      geometry={nodes.SideRight.geometry}
      material={nodes.SideRight.material}
      position={position} // -0.16 default
      rotation={[0, 0, -Math.PI / 2]}
    />
  );
});

useGLTF.preload("/SideRight.glb");
