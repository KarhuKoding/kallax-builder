import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Stats } from "@react-three/drei";

import Shelf from "./components/Shelf/Shelf";
import { ScrollIcon } from "./components/UI/Scrollicon";
import ScrollListener from "./lib/ScrollListener";

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

        <ScrollIcon />
      </div>
    </>
  );
}
