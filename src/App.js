import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        
        <mesh>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>

        <ambientLight args={[0xff0000]} intensity={0.1} />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
