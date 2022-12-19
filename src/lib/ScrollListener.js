import { useScroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

import { scrollStore } from "../store/store";
import { roundNumber } from "../lib/helperfunctions";

export default function ScrollListener({ children }) {
  return (
    <ScrollControls pages={5} damping={100}>
      <FetchScrollData />
      {children}
    </ScrollControls>
  );
}

function FetchScrollData() {
  const scroll = useScroll();
  const { setSf1, setSf2, setSf3, setSf4, setSf5 } = scrollStore();

  useFrame(() => {
    const offsetRange1 = scroll.range(0, 1 / 5);
    const offsetRange2 = scroll.range(1 / 5, 1 / 5);
    const offsetRange3 = scroll.range(2 / 5, 1 / 5);
    const offsetRange4 = scroll.range(3 / 5, 1 / 5);
    const offsetRange5 = scroll.range(4 / 5, 1 / 5);

    // TODO make more beautiful

    setSf1(offsetRange1);
    setSf2(offsetRange2);
    setSf3(offsetRange3);
    setSf4(offsetRange4);
    setSf5(offsetRange5);
  
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
