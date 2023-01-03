
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function CamlockAnimtion(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/camlock_animation.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cutter12Right001"
          castShadow
          receiveShadow
          geometry={nodes.Cutter12Right001.geometry}
          material={materials.Camlock}
          position={[-0.32, 0.02, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="CamLock"
          position={[-0.14, 0.36, 0.06]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials.Camlock}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials.CamlockHighlight}
          />
        </group>
        <group
          name="Screwdriver"
          position={[-0.14, 0.36, 0.52]}
          rotation={[0, -1.57, 0]}
        >
          <mesh
            name="Screwdriver-Mesh"
            castShadow
            receiveShadow
            geometry={nodes["Screwdriver-Mesh"].geometry}
            material={materials.red}
          />
          <mesh
            name="Screwdriver-Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes["Screwdriver-Mesh_1"].geometry}
            material={materials["default"]}
          />
        </group>
        <mesh
          name="Middle1001"
          castShadow
          receiveShadow
          geometry={nodes.Middle1001.geometry}
          material={nodes.Middle1001.material}
          position={[0, 0, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/camlock_animation.glb");
