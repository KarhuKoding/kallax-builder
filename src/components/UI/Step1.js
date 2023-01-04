//Intro
//Boards coming from Top, then Highlight Position Holes
import React, { useLayoutEffect } from "react";
import { config, useSpring } from "@react-spring/three";
import { scrollStore, timingStore } from "../../store/store";
import { SidePositionHighlight } from "../PositionHighlight/SidePositionHighlight";

// Position Holes Highlight
function Step1Components() {
  const { sf1 } = scrollStore();
  const { step1Done, setStep1Done } = timingStore();

  useLayoutEffect(() => {
    if (sf1 === 1) {
      setStep1Done(false);
    }
  }, [sf1, setStep1Done]);

  return <SidePositionHighlight visible={step1Done}></SidePositionHighlight>;
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
