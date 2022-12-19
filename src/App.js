import { OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

// Components
import Boards from "./components/Boards";
import ScrollListener from "./lib/ScrollListener";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <ScrollListener>
          {/* Ground Plane */}
          <Plane rotation={[-Math.PI / 2, 0, 0]} args={[10, 10]}></Plane>
          {/* Boards */}
          <Boards />

          <ambientLight args={[0xff0000]} intensity={0.1} />
          {/* <OrbitControls makeDefault /> */}
        </ScrollListener>
      </Canvas>
    </div>
  );
}
