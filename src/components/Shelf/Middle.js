import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import Camlock from "../UI/Camlock";

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
  const { nodes, materials } = useGLTF("/Middle.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle2.geometry}
        material={nodes.Middle2.material}
        position={[0, 0, 0.35]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <Camlocks />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle3.geometry}
        material={nodes.Middle3.material}
        position={[0, 0, -0.33]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <Camlocks />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle1.geometry}
        material={nodes.Middle1.material}
        position={[0, 0, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={visible}
      >
        <Camlocks />
      </mesh>
    </group>
  );
});

useGLTF.preload("/Middle.glb");
