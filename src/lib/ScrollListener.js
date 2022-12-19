import { useScroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

import { scrollStore } from "../store/store";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={2} damping={100}>
      <FetchScrollData />
      {children}
    </ScrollControls>
  );
}

function FetchScrollData() {
  const scroll = useScroll();
  const { setScrollFactor } = scrollStore();

  useFrame(() => {
    const offset = scroll.offset;
    setScrollFactor(offset);
  });
  return null;
}
