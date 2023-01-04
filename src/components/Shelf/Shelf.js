import React, { useRef } from "react";
import { animated } from "@react-spring/three";
import { Bottom, Middle, SideLeft, SideRight, Top } from "./index";

import {
  Step11Animations,
  Step1Animations,
  Step1Components,
  Step2Components,
  Step3Animations,
  Step4Animations,
  Step5Animations,
  Step6Animations,
  Step7Components,
  Step9Animations,
} from "../UI/";

export default function Shelf() {
  const left = useRef(null);
  const right = useRef(null);
  const top = useRef(null);
  const bottom = useRef(null);
  const middle = useRef(null);
  const shelf = useRef(null);

  // Step1
  const sideBoardAnimation = Step1Animations();
  // Step2
  const { ScrewsLeft, ScrewsRight } = Step2Components();
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
      <Step1Components />
      <animated.group position={sideBoardAnimation.position}>

        <SideLeft ref={left} opacity={opacitySideLeftAnimation.opacity}>
          <ScrewsLeft />
        </SideLeft>
        
        <SideRight ref={right}>
          <ScrewsRight />
        </SideRight>
      </animated.group>

      {/* Middle */}
      <animated.group position={middlePartsAnimation.position}>
        <Middle ref={middle} visible={showMiddleParts} />
      </animated.group>
      <Step7Components />

      {/* Top and Bottom */}
      <Top ref={top} visible={false} />
      <Bottom ref={bottom} visible={false} />

      {/* Animations */}
      <Step3Animations left={left} right={right} />
      <Step5Animations left={left} right={right} />
      <Step9Animations top={top} bottom={bottom} />
      <Step11Animations shelf={shelf} />
    </group>
  );
}
