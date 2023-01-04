import { useScroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

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
  const {
    setSf1,
    setSf2,
    setSf3,
    setSf4,
    setSf5,
    setSf6,
    setSf7,
    setSf8,
    setSf9,
    setSf10,
    setSf11,
  } = scrollStore();

  useFrame(() => {
    const offsetRange1 = scroll.range(0, 1 / 11);
    const offsetRange2 = scroll.range(1 / 11, 1 / 11);
    const offsetRange3 = scroll.range(2 / 11, 1 / 11);
    const offsetRange4 = scroll.range(3 / 11, 1 / 11);
    const offsetRange5 = scroll.range(4 / 11, 1 / 11);
    const offsetRange6 = scroll.range(5 / 11, 1 / 11);
    const offsetRange7 = scroll.range(6 / 11, 1 / 11);
    const offsetRange8 = scroll.range(7 / 11, 1 / 11);
    const offsetRange9 = scroll.range(8 / 11, 1 / 11);
    const offsetRange10 = scroll.range(9 / 11, 1 / 11);
    const offsetRange11 = scroll.range(10 / 11, 1 / 11);

    // TODO make more beautiful, put into one object

    setSf1(offsetRange1);
    setSf2(offsetRange2);
    setSf3(offsetRange3);
    setSf4(offsetRange4);
    setSf5(offsetRange5);
    setSf6(offsetRange6);
    setSf7(offsetRange7);
    setSf8(offsetRange8);
    setSf9(offsetRange9);
    setSf10(offsetRange10);
    setSf11(offsetRange11);

    console.log(
      "scroll 1",
      roundNumber(offsetRange1),
      "scroll 2",
      roundNumber(offsetRange2)
    );
  });
  return null;
}
