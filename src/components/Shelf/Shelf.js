import React, { useLayoutEffect, useRef, useState } from "react";
import { scrollStore } from "../../store/store";

import { lerp } from "../../lib/helperfunctions";
import { Bottom, Top, Middle, SideLeft, SideRight } from "./index";
import { useSpring, animated, config } from "@react-spring/three";
import CloseUpAnimation from "../UI/CamlockAnimation/index";

import {
  Step1Components,
  Step1Animations,
  Step2Components,
  Step3Animations,
} from "../UI/";

const ninetyDeg = Math.PI / 2;

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoards = useRef(null);

  const shelf = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5, sf6, sf7, sf8 } = scrollStore();

  const [showMiddleParts, setShowMiddleParts] = useState(false);
  const [showTopBottom, setShowTopBottom] = useState(false);
  const [sideBoardLeftOpacity, setSideBoardLeftOpacity] = useState(false);

  // Step1
  const sideBoardAnimation = Step1Animations();

  // Opacity SideLeft

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 0.01, 0],
    onRest: () => setSideBoardLeftOpacity(true),
  });

  const opacitySideLeftAnimation = useSpring({
    opacity: sideBoardLeftOpacity ? 0.1 : 1,
    config: config.slow,
  });

  useLayoutEffect(() => {
    const sf4Interpolated = lerp(-0.35, -0.165, sf4);
    const sf6Interpolated = lerp(ninetyDeg, 0, sf6);
    const sf8Interpolated = lerp(0, ninetyDeg, sf8);
    const sf8InterpolatedSecondary = lerp(0, 0.7, sf8);
    const sf8InterpolatedFull = lerp(0, Math.PI, sf8);

    // Stage 3

    if (sf3 > 0 && sf3 < 1) {
      setShowMiddleParts(true);
    } else if (sf3 === 0) {
      setShowMiddleParts(false);
      setSideBoardLeftOpacity(false);
    }
    sideBoardLeft.current.position.x = sf4Interpolated;
    sideBoardRight.current.position.x = -sf4Interpolated;

    // Stage 5

    if (sf6 > 0 && sf6 < 1) {
      setSideBoardLeftOpacity(false);
      setShowTopBottom(true);
    } else if (sf6 === 0) {
      setShowTopBottom(false);
    }

    topBoardTop.current.rotation.x = -sf6Interpolated;
    topBoardBottom.current.rotation.x = sf6Interpolated;

    // Stage 7

    // TOP + Bottom Screws

    shelf.current.rotation.x = sf8Interpolated;

    shelf.current.position.y = sf8InterpolatedSecondary;
  }, [sf2, sf3, sf4, sf5, sf6, sf7, sf8]);

  return (
    <group ref={shelf} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      {/* Sideboars */}
      <animated.group position={sideBoardAnimation.position}>
        <SideLeft
          ref={sideBoardLeft}
          opacity={opacitySideLeftAnimation.opacity}
        >
          <Step2Components />
          <Step3Animations
            sideBoardLeft={sideBoardLeft}
            sideBoardRight={sideBoardRight}
          />
        </SideLeft>
        <SideRight ref={sideBoardRight} />
      </animated.group>
      <Step1Components></Step1Components>

      {/* Middle */}
      <animated.group position={middlePartsAnimation.position}>
        <Middle ref={middleBoards} visible={showMiddleParts} />
      </animated.group>
      <CloseUpAnimation visible={sf5 > 0 && sf5 < 1} />

      {/* Top and Bottom */}
      <Top ref={topBoardTop} visible={showTopBottom} />
      <Bottom ref={topBoardBottom} visible={showTopBottom} />
    </group>
  );
}
