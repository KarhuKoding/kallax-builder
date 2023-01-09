import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Stats } from "@react-three/drei";

import PageNumber from "./components/PageNumber/PageNumber";
import ScrollListener from "./lib/ScrollListener";
import Shelf from "./components/Shelf/Shelf";
import { Step11Components } from "./components/UI";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Canvas shadows>
          <Stats />
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} adjustCamera>
              <ScrollListener>
                <Shelf />
              </ScrollListener>
            </Stage>
          </Suspense>
          <OrbitControls enableZoom={false} makeDefault />
        </Canvas>

        <PageNumber />
      </div>
      {/* Confetti */}
      <Step11Components />
    </>
  );
}
