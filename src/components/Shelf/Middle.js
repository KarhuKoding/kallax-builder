import { Edges, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { forwardRef, useRef } from "react";
import {
  isInbetween,
  roundNumber,
  isZero,
  isOne,
} from "../../lib/helperfunctions";
import Camlock from "../Screws/Camlock";
import { lerp } from "../../lib/helperfunctions";

const Camlocks = () => {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!ref) return;
    const sf7 = roundNumber(scroll.range(6 / 11, 1 / 11));
    const sf7Interpolated = lerp(0.08, 0, sf7);

    console.log("sf7", sf7);
    if (isInbetween(sf7)) {
      ref.current.visible = true;
      ref.current.position.y = sf7Interpolated;
    } else if (isZero(sf7)) {
      ref.current.visible = false;
    }
  });

  return (
    <group dispose={null} position={[0, 0.08, 0]} ref={ref} visible={false}>
      <Camlock position={[-0.141, 0, -0.027]} />
      <Camlock position={[0.141, 0, -0.027]} rotation={[0, -Math.PI / 2, 0]} />
      <Camlock position={[-0.141, 0, -0.363]} />
      <Camlock position={[0.141, 0, -0.363]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
};

export const Middle = forwardRef(({ visible = true, ...props }, ref) => {
  const { nodes } = useGLTF("/Middle.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle2.geometry}
        position={[0, 0, 0.35]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <meshStandardMaterial transparent />
        <Edges />

        <Camlocks />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle3.geometry}
        position={[0, 0, -0.33]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <meshStandardMaterial transparent />
        <Edges />

        <Camlocks />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle1.geometry}
        position={[0, 0, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <meshStandardMaterial transparent />
        <Edges />

        <Camlocks />
      </mesh>
    </group>
  );
});

useGLTF.preload("/Middle.glb");
