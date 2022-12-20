import React, { useLayoutEffect, useRef } from "react";
import { scrollStore } from "../store/store";
import {
  SideBoardLeft,
  SideBoardRight,
  TopBoardTop,
  TopBoardBottom,
  MiddleBoard1,
  MiddleBoard2,
  MiddleBoard3,
} from "./BoardsOld";
import { lerp } from "../lib/helperfunctions";
import { dimensions } from "./dimensions";
import { Center } from "@react-three/drei";

const ninetyDeg = Math.PI / 2;

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoard1 = useRef(null);
  const middleBoard2 = useRef(null);
  const middleBoard3 = useRef(null);

  const shelf = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5 } = scrollStore();

  useLayoutEffect(() => {
    const sf1Interpolated = lerp(0, ninetyDeg, sf1);
    const sf2Interpolated = lerp(ninetyDeg, 0, sf2);
    const sf3Interpolated = lerp(0.5, 0.18, sf3);
    const sf4Interpolated = lerp(1, 0.7, sf4);
    const sf5Interpolated = lerp(0, ninetyDeg, sf5);

    // Rotation
    sideBoardLeft.current.rotation.y = sf1Interpolated;
    sideBoardRight.current.rotation.y = -sf1Interpolated;

    topBoardTop.current.rotation.x = sf2Interpolated;
    topBoardBottom.current.rotation.x = -sf2Interpolated;

    shelf.current.rotation.x = sf5Interpolated;

    // Location
    sideBoardLeft.current.position.x = sf3Interpolated;
    sideBoardRight.current.position.x = -sf3Interpolated;

    topBoardTop.current.position.z = sf4Interpolated;
    topBoardBottom.current.position.z = -sf4Interpolated;
  }, [sf1, sf2, sf3, sf4, sf5]);

  return (
    <group rotation={[ninetyDeg, 0, 0]} ref={shelf} position={[0, 2, 0]}>
      <SideBoardLeft ref={sideBoardLeft} />
      <SideBoardRight ref={sideBoardRight} />
      <TopBoardTop ref={topBoardTop} />
      <TopBoardBottom ref={topBoardBottom} />
      <MiddleBoard1 ref={middleBoard1} />
      <MiddleBoard2 ref={middleBoard2} />
      <MiddleBoard3 ref={middleBoard3} />
    </group>
  );
}
