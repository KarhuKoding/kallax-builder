import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";

// Components
import Boards from "./components/Boards";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Plane rotation={[-Math.PI / 2, 0, 0]} args={[10, 10]}></Plane>
        <Boards />

        <ambientLight args={[0xff0000]} intensity={0.1} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
