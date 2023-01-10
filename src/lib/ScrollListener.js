import { ScrollControls } from "@react-three/drei";
import React from "react";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={11} damping={100} id="test">
      {children}
    </ScrollControls>
  );
}
