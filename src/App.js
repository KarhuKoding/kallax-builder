import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

// Components
import Shelf from "./components/Shelf/Shelf";
import ScrollListener from "./lib/ScrollListener";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <ScrollListener>
              <Shelf />
            </ScrollListener>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
