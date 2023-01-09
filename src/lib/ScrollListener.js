import React from "react";
import { ScrollControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scrollStore } from "../store/store";
import { roundNumber } from "../lib/helperfunctions";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={11} damping={100}>
      <FetchScrollData />
      {children}
    </ScrollControls>
  );
}

function FetchScrollData() {
  const scroll = useScroll();
  const { setState } = scrollStore();

  useFrame(() => {
    const offsetRange1 = roundNumber(scroll.range(0, 1 / 11));
    const offsetRange2 = roundNumber(scroll.range(1 / 11, 1 / 11));
    const offsetRange3 = roundNumber(scroll.range(2 / 11, 1 / 11));
    const offsetRange4 = roundNumber(scroll.range(3 / 11, 1 / 11));
    const offsetRange5 = roundNumber(scroll.range(4 / 11, 1 / 11));
    const offsetRange6 = roundNumber(scroll.range(5 / 11, 1 / 11));
    const offsetRange7 = roundNumber(scroll.range(6 / 11, 1 / 11));
    const offsetRange8 = roundNumber(scroll.range(7 / 11, 1 / 11));
    const offsetRange9 = roundNumber(scroll.range(8 / 11, 1 / 11));
    const offsetRange10 = roundNumber(scroll.range(9 / 11, 1 / 11));
    const offsetRange11 = roundNumber(scroll.range(10 / 11, 1 / 11));

    const state = {
      sf1: offsetRange1,
      sf2: offsetRange2,
      sf3: offsetRange3,
      sf4: offsetRange4,
      sf5: offsetRange5,
      sf6: offsetRange6,
      sf7: offsetRange7,
      sf8: offsetRange8,
      sf9: offsetRange9,
      sf10: offsetRange10,
      sf11: offsetRange11,
    };

    // setState(state);
  });
  return null;
}
