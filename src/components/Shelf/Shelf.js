import React, { useLayoutEffect, useRef } from "react";

import { scrollStore } from "../../store/store";
import {
  SideBoardLeft,
  SideBoardRight,
  TopBoardTop,
  TopBoardBottom,
  MiddleBoard1,
  MiddleBoard2,
  MiddleBoard3,
} from "./Boards";
import { lerp } from "../../lib/helperfunctions";

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoard1 = useRef(null);
  const middleBoard2 = useRef(null);
  const middleBoard3 = useRef(null);

  const { scrollFactor } = scrollStore();

  useLayoutEffect(() => {
    const rotation = lerp(Math.PI / 2, 0, scrollFactor);
    console.log("rotation", rotation);
    sideBoardLeft.current.rotation.y = rotation;
  }, [scrollFactor]);

  return (
    <>
      <SideBoardLeft ref={sideBoardLeft} />
      <SideBoardRight ref={sideBoardRight} />
      <TopBoardTop ref={topBoardTop} />
      <TopBoardBottom ref={topBoardBottom} />
      <MiddleBoard1 ref={middleBoard1} />
      <MiddleBoard2 ref={middleBoard2} />
      <MiddleBoard3 ref={middleBoard3} />
    </>
  );
}
