import React, { useRef } from "react";
import { animated } from "@react-spring/three";
import { Bottom, Middle, SideLeft, SideRight, Top } from "./index";

import {
  Step11Animations, Step1Animations, Step1Components, Step2Components,
  Step3Animations,
  Step4Animations,
  Step5Animations,
  Step6Animations,
  Step7Components,
  Step9Animations
} from "../UI/";

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoards = useRef(null);
  const shelf = useRef(null);

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
      <Top ref={topBoardTop} visible={false} />
      <Bottom ref={topBoardBottom} visible={false} />
      <Step9Animations top={topBoardTop} bottom={topBoardBottom} />
      <Step11Animations shelf={shelf} />
    </group>
  );
}
