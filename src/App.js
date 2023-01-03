import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import ScrollListener from "./lib/ScrollListener";
// Components
import Shelf from "./components/Shelf/Shelf";
import UI from "./components/UI/UI";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <ScrollListener>
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
