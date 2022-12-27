import React, { useLayoutEffect, useRef } from "react";
import { scrollStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
import { Bottom, Top, Middle, SideLeft, SideRight } from "./index";
import { useSpring, animated, config } from "@react-spring/three";


const ninetyDeg = Math.PI / 2;

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoards = useRef(null);

  const shelf = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5 } = scrollStore();

  const [{ position }] = useSpring(
    () => ({
      from: { position: [0, 1, 0] },
      to: { position: [0, 0, 0] },
      config: config.slow,

      onRest: () => console.log("done"),
    }),

    []
  );

  useLayoutEffect(() => {
    const sf1Interpolated = lerp(ninetyDeg, 0, sf1);
    const sf2Interpolated = lerp(ninetyDeg, 0, sf2);
    const sf3Interpolated = lerp(0.5, 0.18, sf3);
    const sf4Interpolated = lerp(1, 0.7, sf4);
    const sf5Interpolated = lerp(0, ninetyDeg, sf5);

    // Rotation
    sideBoardLeft.current.rotation.z = sf1Interpolated;
    sideBoardRight.current.rotation.z = -sf1Interpolated;

    topBoardTop.current.rotation.x = -sf2Interpolated;
    topBoardBottom.current.rotation.x = sf2Interpolated;

    shelf.current.rotation.x = sf5Interpolated;

    // Location
    // sideBoardLeft.current.position.x = sf3Interpolated;
    // sideBoardRight.current.position.x = -sf3Interpolated;

    // topBoardTop.current.position.z = sf4Interpolated;
    // topBoardBottom.current.position.z = -sf4Interpolated;
  }, [sf1, sf2, sf3, sf4, sf5]);

  return (
    <group rotation={[0, 0, 0]} ref={shelf} position={[0, 0, 0]}>
      <animated.group position={position}>
        <SideLeft ref={sideBoardLeft} />
        <SideRight ref={sideBoardRight} />
      </animated.group>
      <Top ref={topBoardTop} visible={false} />
      <Bottom ref={topBoardBottom} visible={false} />
      <Middle ref={middleBoards} visible={false} />
    </group>
  );
}
