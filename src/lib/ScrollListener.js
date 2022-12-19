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
  const { setSf1, setSf2, setSf3, setSf4 } = scrollStore();

  useFrame(() => {
    const offsetRange1 = scroll.range(0, 1 / 4);
    const offsetRange2 = scroll.range(1 / 4, 1 / 4);
    const offsetRange3 = scroll.range(2 / 4, 1 / 4);
    const offsetRange4 = scroll.range(3 / 4, 1 / 4);

    // TODO make more beautiful

    if (offsetRange1 > 0) {
      setSf1(offsetRange1);
    }
    if (offsetRange2 > 0) {
      setSf2(offsetRange2);
    }
    if (offsetRange3 > 0) {
      setSf3(offsetRange3);
    }
    if (offsetRange4 > 0) {
      setSf4(offsetRange4);
    }

    console.log(
      "scroll",
      roundNumber(offsetRange1),
      roundNumber(offsetRange2),
      roundNumber(offsetRange3),
      roundNumber(offsetRange4)
    );
  });
  return null;
}
