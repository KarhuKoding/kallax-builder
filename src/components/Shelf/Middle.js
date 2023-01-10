import {
  Edges,
  useGLTF,
  useScroll,
  Instances,
  Instance,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { forwardRef, useRef } from "react";
import {
  isInbetween,
  isZero,
  lerp,
  roundNumber,
} from "../../lib/helperfunctions";
import Camlocks from "../Screws/Camlocks";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

const Screws = () => {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!ref) return;
    const sf7 = roundNumber(scroll.range(6 / 11, 1 / 11));
    const sf7Interpolated = lerp(0.08, 0, sf7);

    if (isInbetween(sf7)) {
      ref.current.visible = true;
      ref.current.position.y = sf7Interpolated;
    } else if (isZero(sf7)) {
      ref.current.visible = false;
    }
  });

  return (
    <group dispose={null} position={[0, 0.08, 0]} ref={ref} visible={false}>
      <Camlocks />
    </group>
  );
};

// const Material = () => {
//   return (
//     <>
//       <meshStandardMaterial transparent></meshStandardMaterial>
//       <Edges />
//     </>
//   );
// };

export const Middle = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes } = useGLTF("/Middle.glb");
  const material = new THREE.MeshStandardMaterial({
    transparent: true,
  });

  return (
    <Instances
      geometry={nodes.Middle2.geometry}
      material={material}
      limit={3}
      visible={visible}
    >
      <group {...props} dispose={null} ref={ref}>
        <Instance position={[0, 0, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
          <Screws />
        </Instance>
        <Instance position={[0, 0, -0.33]} rotation={[Math.PI / 2, 0, 0]}>
          <Screws />
        </Instance>
        <Instance position={[0, 0, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
          <Screws />
        </Instance>
      </group>
    </Instances>
  );
});

useGLTF.preload("/Middle.glb");
