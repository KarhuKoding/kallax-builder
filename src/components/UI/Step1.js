//Intro
//Boards coming from Top, then Highlight Position Holes
import { config, useSpring } from "@react-spring/three";
import React from "react";
import { isInbetween, isZero } from "../../lib/helperfunctions";
import { scrollStore, timingStore } from "../../store/store";
import { SidePositionHighlight } from "../PositionHighlight/SidePositionHighlight";

// Position Holes Highlight
function Step1Components() {
  const { state } = scrollStore();
  const sf1 = state.sf1;
  const { step1Done } = timingStore();


  return (
    <SidePositionHighlight
      visible={step1Done && (isInbetween(sf1) || isZero(sf1))}
    ></SidePositionHighlight>
  );
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
