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
        <Canvas gl={{ antialias: true }} dpr={dpr}>
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          ></PerformanceMonitor>
          <Stats />
          <Suspense fallback={<Loader />}>
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
