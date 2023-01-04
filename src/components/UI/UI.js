import React, { useLayoutEffect, useRef, useState } from "react";
import { scrollStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
import { ninetyDeg } from "../../lib/constants";
import { ArrowRound } from "./Arrows/ArrowRound";
import { Screws } from "./Screws";
import { timingStore } from "../../store/store";
import { SidePositionHighlight } from "./SidePositionHighlight";

// 12x Screws
export const StepOne = () => {
  const arrow1 = useRef(null);
  const ref = useRef(null);

  const [showScrews, setShowScrews] = useState(false);

  const { sf1 } = scrollStore();

  useLayoutEffect(() => {
    const sf1InterpolatedRotation = lerp(0, Math.PI * 2, sf1);
    const sf1InterpolatedPosition = lerp(0.15, 0, sf1);

    if (sf1 > 0 && sf1 < 1) {
      setShowScrews(true);
      arrow1.current.rotation.y = sf1InterpolatedRotation;
      ref.current.position.x = sf1InterpolatedPosition;
    } else if (sf1 === 0) {
      setShowScrews(false);
      arrow1.current.visible = true;
    } else if (sf1 === 1) {
      arrow1.current.visible = false;
    }
  }, [sf1]);

  return (
    <group
      dispose={null}
      position={[0.15, 0, 0]}
      visible={showScrews}
      ref={ref}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <Screws />
      <Screws position={[0.3455, 0, 0]} />
      {/* <Screws position={[1.1, 0, 0]} />
      <Screws position={[1.44, 0, 0]} /> */}
      <ArrowRound position={[-0.3725, 0, 0.34]} ref={arrow1} />;
    </group>
  );
};

// SideBoard Position Highlight
export default function UI() {
  const { sf1 } = scrollStore();
  const { step1Done, setStep1Done } = timingStore();

  useLayoutEffect(() => {
    if (sf1 === 1) {
      setStep1Done(false);
    }
  }, [sf1]);

  return <SidePositionHighlight visible={step1Done}></SidePositionHighlight>;
}
