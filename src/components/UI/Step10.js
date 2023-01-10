// TopBottom-Screws
// - 8x TopBottom Screws coming from Top/Side, Arrow
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  isInbetween,
  isOne,
  isZero,
  lerp,
  roundNumber,
} from "../../lib/helperfunctions";
import { ArrowRound } from "../Arrows/ArrowRound";
import { ScrewTop } from "../Screws/ScrewsTop";

// 8x TopScrews
function ScrewsTop() {
  const ref = useRef(null);

  const scroll = useScroll();

  useFrame(() => {
    if (!ref) return;
    const sf10 = roundNumber(scroll.range(9 / 11, 1 / 11));

    const sf10InterpolatedPosition = lerp(-0.2, 0.075, sf10);

    if (isInbetween(sf10)) {
      ref.current.visible = true;
      ref.current.position.z = sf10InterpolatedPosition;
    } else if (isZero(sf10)) {
      ref.current.visible = false;
    }
    if (isOne(sf10)) {
      ref.current.position.z = 0.075;
    }
  });

  return (
    <group
      dispose={null}
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, -0.2]}
      visible={false}
    >
      <ScrewTop />
    </group>
  );
}

function ScrewsBottom() {
  const arrow1 = useRef(null);
  const ref = useRef(null);

  const scroll = useScroll();

  useFrame(() => {
    if (!ref || !arrow1) return;
    const sf10 = roundNumber(scroll.range(9 / 11, 1 / 11));

    const sf10InterpolatedRotation = lerp(0, Math.PI * 6, sf10);
    const sf10InterpolatedPosition = lerp(-0.2, 0.075, sf10);

    if (isInbetween(sf10)) {
      ref.current.visible = true;
      arrow1.current.rotation.y = sf10InterpolatedRotation;
      ref.current.position.z = -sf10InterpolatedPosition;
      arrow1.current.visible = true;
    } else if (isZero(sf10)) {
      ref.current.visible = false;
    } else if (isOne(sf10)) {
      ref.current.position.z = -0.075;
      arrow1.current.visible = false;
    }
  });

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

export { ScrewsTop, ScrewsBottom };
