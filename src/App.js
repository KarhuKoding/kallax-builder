import {
  Html,
  OrbitControls,
  PerformanceMonitor,
  Stage,
  Stats,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense, useState } from "react";
import { isBrowser } from "react-device-detect";

import Shelf from "./components/Shelf/Shelf";
import { ScrollIcon } from "./components/UI/Scrollicon";
import ScrollListener from "./lib/ScrollListener";

import "./styles.css";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white" }}>
      {Math.floor(progress)} % loaded
    </Html>
  );
}

export default function App() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <>
      <div className="App">
        <Canvas
          gl={{ antialias: true }}
          dpr={dpr}
          camera={{
            zoom: isBrowser ? 1 : 1.5,
   
        
            position: [-3, 2, 4],
          }}
        >
          <PerformanceMonitor onDecline={() => setDpr(1)}></PerformanceMonitor>
          <Stats />
          <Suspense fallback={<Loader />}>
            <Stage environment="city" intensity={0.6} adjustCamera center={{top: 1}}>
              <ScrollListener>
                <Shelf />
              </ScrollListener>
            </Stage>
          </Suspense>
          {isBrowser && <OrbitControls enableZoom={false} makeDefault />}
        </Canvas>
        <ScrollIcon />
      </div>
    </>
  );
}
