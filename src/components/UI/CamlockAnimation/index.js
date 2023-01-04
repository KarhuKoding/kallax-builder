import { Circle, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { createPortal, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

// Components
import { CamlockAnimation } from "./CamlockAnimation";

function SpeakingBubble() {
  const { nodes } = useGLTF("/speakingBubble.glb");
  return (
    <mesh
      geometry={nodes.Circle.geometry}
      rotation={[Math.PI / 2, 0, 0]}
      scale={1.02}
      position={[0, 0, -0.001]}
    >
      <meshBasicMaterial color="black"></meshBasicMaterial>
    </mesh>
  );
}

function RenderTargetPlane({ visible, position = [0.48, 1, -0.33] }) {
  const cam = useRef();
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f2028);

    const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {
      format: THREE.RGBFormat,
      stencilBuffer: false,
    });
    target.samples = 8;
    return [scene, target];
  }, []);

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      <PerspectiveCamera
        ref={cam}
        position={[-0.1, 1.08, 5]}
        fov={35}
        zoom={10}
      />

      {createPortal(<CamlockAnimation />, scene)}

      <Circle args={[0.5, 32]} position={position} visible={visible}>
        <meshStandardMaterial attach="material" map={target.texture} />
        <SpeakingBubble />
      </Circle>
    </>
  );
}

export default RenderTargetPlane;
