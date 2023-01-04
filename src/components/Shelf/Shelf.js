import React, { useLayoutEffect, useRef, useState } from "react";
import { scrollStore } from "../../store/store";

import { lerp } from "../../lib/helperfunctions";
import { Bottom, Top, Middle, SideLeft, SideRight } from "./index";
import { useSpring, animated, config } from "@react-spring/three";

import {
  Step1Components,
  Step1Animations,
  Step2Components,
  Step3Animations,
  Step4Animations,
  Step5Animations,
  Step6Animations,
  Step7Components,
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

  const [showTopBottom, setShowTopBottom] = useState(false);


  // Step1
  const sideBoardAnimation = Step1Animations();
  // Step2
  // Step3
  // Step4
  const { middlePartsAnimation, showMiddleParts } = Step4Animations();
  // Step5
  // Step6
  const opacitySideLeftAnimation = Step6Animations();
  // Step6
  // Step8
  // Step9
  // Step10
  // Step11

  useLayoutEffect(() => {
    const sf6Interpolated = lerp(ninetyDeg, 0, sf6);
    const sf8Interpolated = lerp(0, ninetyDeg, sf8);
    const sf8InterpolatedSecondary = lerp(0, 0.7, sf8);
    const sf8InterpolatedFull = lerp(0, Math.PI, sf8);

    topBoardTop.current.rotation.x = -sf6Interpolated;
    topBoardBottom.current.rotation.x = sf6Interpolated;

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
          <Step5Animations
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
      <Step7Components />

      {/* Top and Bottom */}
      <Top ref={topBoardTop} visible={showTopBottom} />
      <Bottom ref={topBoardBottom} visible={showTopBottom} />
    </group>
  );
}
