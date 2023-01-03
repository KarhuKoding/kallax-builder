import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";

export function CamlockAnimation(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/camlock_animation.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log("actions", actions);
    actions["CamLockAction"].play();
    actions["ScrewdriverAction.001"].play();
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0.15, Math.PI / 5, 0]}
    >
      <directionalLight color="#ffff" position={[-1, 1, 1]}></directionalLight>

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
            geometry={nodes.Cylinder012.geometry}
            material={materials.Camlock}
          />
          <mesh
            name="Cylinder012_1"
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
            geometry={nodes["Screwdriver-Mesh"].geometry}
            material={materials.red}
          />
          <mesh
            name="Screwdriver-Mesh_1"
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
