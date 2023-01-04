import React, { forwardRef } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import Camlock from "../UI/CamlockAnimation/Camlock";

const Camlocks = () => {
  return (
    <>
      <Camlock position={[-0.141, 0, -0.027]} />
      <Camlock position={[0.141, 0, -0.027]} rotation={[0, -Math.PI / 2, 0]} />
      <Camlock position={[-0.141, 0, -0.363]} />
      <Camlock position={[0.141, 0, -0.363]} rotation={[0, -Math.PI / 2, 0]} />
    </>
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
