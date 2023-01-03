import { useScroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

import { scrollStore } from "../store/store";
import { roundNumber } from "../lib/helperfunctions";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={7} damping={100}>
      <FetchScrollData />
      {children}
    </ScrollControls>
  );
}

function FetchScrollData() {
  const scroll = useScroll();
  const { setSf1, setSf2, setSf3, setSf4, setSf5, setSf6, setSf7, setSf8 } =
    scrollStore();

  useFrame(() => {
    const offsetRange1 = scroll.range(0, 1 / 8);
    const offsetRange2 = scroll.range(1 / 8, 1 / 8);
    const offsetRange3 = scroll.range(2 / 8, 1 / 8);
    const offsetRange4 = scroll.range(3 / 8, 1 / 8);
    const offsetRange5 = scroll.range(4 / 8, 1 / 8);
    const offsetRange6 = scroll.range(5 / 8, 1 / 8);
    const offsetRange7 = scroll.range(6 / 8, 1 / 8);
    const offsetRange8 = scroll.range(7 / 8, 1 / 8);

    // TODO make more beautiful

    setSf1(offsetRange1);
    setSf2(offsetRange2);
    setSf3(offsetRange3);
    setSf4(offsetRange4);
    setSf5(offsetRange5);
    setSf6(offsetRange6);
    setSf7(offsetRange7);
    setSf8(offsetRange8);

    // console.log(
    //   "scroll",
    //   roundNumber(offsetRange1),
    //   roundNumber(offsetRange2),
    //   roundNumber(offsetRange3),
    //   roundNumber(offsetRange4),
    //   roundNumber(offsetRange5)
    // );
  });
  return null;
}
