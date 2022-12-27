import React, { useLayoutEffect, useRef, useState } from "react";
import { scrollStore } from "../../store/store";
import { timingStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
import { Bottom, Top, Middle, SideLeft, SideRight } from "./index";
import { useSpring, animated, config } from "@react-spring/three";
import { StepOne } from "../UI/UI";

const ninetyDeg = Math.PI / 2;

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoards = useRef(null);

  const shelf = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5 } = scrollStore();
  const { setIntro } = timingStore();
  const [showMiddleParts, setShowMiddleParts] = useState(false);

  // SideBoardAnimation
  const [sideBoardAnimation] = useSpring(
    () => ({
      from: { position: [0, 1, 0] },
      to: { position: [0, 0, 0] },
      config: config.slow,

      onRest: () => setIntro(true),
    }),

    []
  );

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 1, 0],
    config: config.slow,
  });
  useLayoutEffect(() => {
    const sf2Interpolated = lerp(ninetyDeg, 0, sf2);

    const sf3Interpolated = lerp(0.5, 0.18, sf3);
    const sf4Interpolated = lerp(-0.35, -0.165, sf4);
    const sf5Interpolated = lerp(1, 0.7, sf4);
    const sf6Interpolated = lerp(0, ninetyDeg, sf5);

    // Rotation
    sideBoardLeft.current.rotation.z = sf2Interpolated;
    sideBoardRight.current.rotation.z = -sf2Interpolated;

    if (sf3 > 0 && sf3 < 1) {
      setShowMiddleParts(true);
    } else if (sf3 === 0) {
      setShowMiddleParts(false);
    }
     // topBoardTop.current.rotation.x = -sf2Interpolated;
    // topBoardBottom.current.rotation.x = sf2Interpolated;

    // shelf.current.rotation.x = sf5Interpolated;

    // Location
     sideBoardLeft.current.position.x = sf4Interpolated;
     sideBoardRight.current.position.x = -sf4Interpolated;

    // topBoardTop.current.position.z = sf4Interpolated;
    // topBoardBottom.current.position.z = -sf4Interpolated;
  }, [sf2, sf3, sf4, sf5]);

  return (
    <group rotation={[0, 0, 0]} ref={shelf} position={[0, 0, 0]}>
      <animated.group position={sideBoardAnimation.position}>
        <SideLeft ref={sideBoardLeft}>
          <StepOne />
        </SideLeft>
        <SideRight ref={sideBoardRight} />
      </animated.group>

      <animated.group position={middlePartsAnimation.position}>
        <Middle ref={middleBoards} visible={showMiddleParts} />
      </animated.group>

      <Top ref={topBoardTop} visible={false} />
      <Bottom ref={topBoardBottom} visible={false} />
    </group>
  );
}
