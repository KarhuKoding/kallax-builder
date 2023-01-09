//Intro
//Boards coming from Top, then Highlight Position Holes
import { config, useSpring } from "@react-spring/three";
import React, { useRef } from "react";
import { isInbetween, isZero, roundNumber } from "../../lib/helperfunctions";
import { timingStore } from "../../store/store";
import { useFrame } from "@react-three/fiber";
import { SidePositionHighlight } from "../PositionHighlight/SidePositionHighlight";
import { useScroll } from "@react-three/drei";
// Position Holes Highlight
function Step1Components() {
  const ref = useRef();
  const scroll = useScroll();
  const { step1Done } = timingStore();

  useFrame(() => {
    if (!ref) return;
    const sf1 = roundNumber(scroll.range(0, 1 / 11));

    if ((isInbetween(sf1) || isZero(sf1)) && step1Done) {
      ref.current.visible = true;
    } else {
      ref.current.visible = false;
    }
  });

  return <SidePositionHighlight ref={ref}></SidePositionHighlight>;
}

// FromTop Animation
function Step1Animations() {
  const { setStep1Done } = timingStore();

  const [sideBoardAnimation] = useSpring(
    () => ({
      from: { position: [0, 1, 0] },
      to: { position: [0, 0, 0] },
      config: config.slow,
      onRest: () => setStep1Done(true),
    }),

    [setStep1Done]
  );

  return sideBoardAnimation;
}

export { Step1Components, Step1Animations };
