import {
  OrbitControls,
  Stage,
  Plane,
  PerspectiveCamera,
  TorusKnot,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense, useMemo, useRef } from "react";
import { createPortal, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import ScrollListener from "./lib/ScrollListener";
// Components
import Shelf from "./components/Shelf/Shelf";
import UI from "./components/UI/UI";

import "./styles.css";

function SpinningThing() {
  const mesh = useRef();
  useFrame(
    () =>
      (mesh.current.rotation.x =
        mesh.current.rotation.y =
        mesh.current.rotation.z +=
          0.01)
  );
  return (
    <TorusKnot ref={mesh} args={[1, 0.4, 100, 64]}>
      <meshNormalMaterial attach="material" />
    </TorusKnot>
  );
}

function RenderTargetPlane() {
  const cam = useRef();
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("orange");
    const target = new THREE.WebGLMultisampleRenderTarget(1024, 1024, {
      format: THREE.RGBFormat,
      stencilBuffer: false,
    });
    target.samples = 8;
    return [scene, target];
  }, []);

  useFrame((state) => {
    cam.current.position.z =
      5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      <PerspectiveCamera ref={cam} position={[0, 0, 3]} />
      {createPortal(<SpinningThing />, scene)}
      <Plane args={[2, 2, 2]}>
        <meshStandardMaterial attach="material" map={target.texture} />
      </Plane>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <ScrollListener>
              <RenderTargetPlane />

              <Shelf />

              <UI />
            </ScrollListener>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
