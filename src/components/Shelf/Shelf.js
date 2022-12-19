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

  const { sf1, sf2, sf3, sf4 } = scrollStore();

  useLayoutEffect(() => {
    const sf1Interpolated = lerp(0, Math.PI / 2, sf1);
    const sf2Interpolated = lerp(Math.PI / 2, 0, sf2);
    const sf3Interpolated = lerp(0.5, 0.18, sf3);
    const sf4Interpolated = lerp(1, 0.7, sf4);

    // Rotation
    sideBoardLeft.current.rotation.y = sf1Interpolated;
    sideBoardRight.current.rotation.y = -sf1Interpolated;

    topBoardTop.current.rotation.x = sf2Interpolated;
    topBoardBottom.current.rotation.x = -sf2Interpolated;

    // Location
    sideBoardLeft.current.position.x = sf3Interpolated;
    sideBoardRight.current.position.x = -sf3Interpolated;

    topBoardTop.current.position.z = sf4Interpolated;
    topBoardBottom.current.position.z = -sf4Interpolated;

  }, [sf1, sf2, sf3, sf4]);

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
