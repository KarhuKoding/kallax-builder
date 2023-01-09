//Sideboard-Screws
//12x Sideboard Screws coming from Top with spinningArrow Arrow
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { isInbetween, isOne, isZero, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { ArrowRound } from "../Arrows/ArrowRound";
import { ScrewsSide } from "../Screws/ScrewsSide";

// 12x ScrewsSide
function Step2Animations() {
  const [showScrews, setShowScrews] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [position, setPosition] = useState(0);
  const [rotation, setRotation] = useState(0.15);

  const { state } = scrollStore();
  const sf2 = state.sf2;

  useLayoutEffect(() => {
    const sf1InterpolatedRotation = lerp(0, Math.PI * 2, sf2);
    const sf1InterpolatedPosition = lerp(0.15, 0, sf2);

    if (isInbetween(sf2)) {
      setShowScrews(true);
      setRotation(sf1InterpolatedRotation);
      setPosition(sf1InterpolatedPosition);
    } else if (isZero(sf2)) {
      setShowScrews(false);
      setShowArrow(true);
    } else if (isOne(sf2)) {
      setShowArrow(false);
    }
  }, [sf2]);

  return { showScrews, showArrow, position, rotation };
}

function ScrewsLeft() {
  const arrow1 = useRef(null);
  const ref = useRef(null);
  const { showScrews, showArrow, position, rotation } = Step2Animations();

  useEffect(() => {
    arrow1.current.visible = showArrow;

    if (!showScrews) return;
    arrow1.current.rotation.y = rotation;
    ref.current.position.x = position;
  }, [arrow1, showArrow, position, rotation, showScrews]);

  return (
    <group
      dispose={null}
      position={[0.15, -0.0075, 0.0008]}
      ref={ref}
      rotation={[0, 0, -Math.PI / 2]}
      visible={showScrews}
    >
      <ScrewsSide />
      <ScrewsSide position={[0.344, 0, 0]} />
      <ArrowRound position={[-0.3725, 0, 0.34]} ref={arrow1} />;
    </group>
  );
}

function ScrewsRight() {
  const ref = useRef(null);
  const { showScrews, position } = Step2Animations();

  useEffect(() => {
    if (!showScrews) return;
    ref.current.position.y = position;
  }, [showScrews, position]);

  return (
    <group
      dispose={null}
      position={[0.393, -0.0075, 0.0008]}
      ref={ref}
      rotation={[0, 0,0]}
      visible={showScrews}
    >
      <ScrewsSide />
      <ScrewsSide position={[0.344, 0, 0]} />
    </group>
  );
}

function Step2Components() {
  return { ScrewsRight, ScrewsLeft };
}

export { Step2Components };
