import { useScroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

import { scrollStore } from "../store/store";
import { roundNumber } from "../lib/helperfunctions";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={4} damping={100}>
      <FetchScrollData />
      {children}
    </ScrollControls>
  );
}

function FetchScrollData() {
  const scroll = useScroll();
  const { setSf1, setSf2 } = scrollStore();

  useFrame(() => {
    const offsetRange1 = scroll.range(0, 2 / 4);
    const offsetRange2 = scroll.range(2 / 4, 2 / 4);

    if (offsetRange1 > 0) {
      setSf1(offsetRange1);
    }
    if (offsetRange2 > 0) {
      setSf2(offsetRange2);
    }

    console.log("scroll", roundNumber(offsetRange1), roundNumber(offsetRange2));
  });
  return null;
}
