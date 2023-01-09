// TopBottom-Screws
// - 8x TopBottom Screws coming from Top/Side, Arrow
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { isInbetween, isOne, isZero, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { ArrowRound } from "../Arrows/ArrowRound";
import { ScrewTop } from "../Screws/ScrewsTop";

// 8x TopScrews
function Step10Animations() {
  const [showScrews, setShowScrews] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [position, setPosition] = useState(0);
  const [rotation, setRotation] = useState(0.15);

  const { state } = scrollStore();
  const sf10 = state.sf10;

  useLayoutEffect(() => {
    const sf1InterpolatedRotation = lerp(0, Math.PI * 6, sf10);

    const sf1InterpolatedPosition = lerp(-0.2, 0.076, sf10);

    if (isInbetween(sf10)) {
      setShowScrews(true);
      setRotation(sf1InterpolatedRotation);
      setPosition(sf1InterpolatedPosition);
      setShowArrow(true);
    } else if (isZero(sf10)) {
      setShowScrews(false);
    } else if (isOne(sf10)) {
      setShowArrow(false);
    }
  }, [sf10]);

  return { showScrews, showArrow, position, rotation };
}

export function ScrewsTop() {
  const ref = useRef(null);
  const { position, rotation, showScrews } = Step10Animations();

  useEffect(() => {
    if (!showScrews) return;
    ref.current.position.z = position;
  }, [position, rotation, showScrews]);

  return (
    <group
      dispose={null}
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, -0.2]}
    >
      <ScrewTop />
    </group>
  );
}

function ScrewsBottom() {
  const arrow1 = useRef(null);
  const ref = useRef(null);
  const { position, rotation, showScrews, showArrow } = Step10Animations();

  useEffect(() => {
    arrow1.current.visible = showArrow;

    if (!showScrews) return;
    arrow1.current.rotation.y = rotation;
    ref.current.position.z = -position;
  }, [arrow1, showArrow, position, rotation, showScrews]);

  return (
    <group
      dispose={null}
      ref={ref}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0.396, 0.2]}
    >
      <ScrewTop />
      <ArrowRound position={[-0.1845, 0.05, 0.0265]} ref={arrow1} />;
    </group>
  );
}

function Step10Components() {
  return { ScrewsTop, ScrewsBottom };
}

export { Step10Components };
