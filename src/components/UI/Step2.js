//Sideboard-Screws
//12x Sideboard Screws coming from Top with spinningArrow Arrow
import React, { useRef } from "react";
import { isInbetween, isOne, isZero, lerp } from "../../lib/helperfunctions";
import { ArrowRound } from "../Arrows/ArrowRound";
import { ScrewsSide } from "../Screws/ScrewsSide";
import { useScroll } from "@react-three/drei";
import { roundNumber } from "../../lib/helperfunctions";
import { useFrame } from "@react-three/fiber";

// 12x ScrewsSide
function ScrewsLeft() {
  const arrow1 = useRef(null);
  const ref = useRef(null);

  const scroll = useScroll();

  useFrame(() => {
    if (!arrow1 || !ref) return;
    const sf2 = roundNumber(scroll.range(1 / 11, 1 / 11));

    const sf2InterpolatedRotation = lerp(0, Math.PI * 2, sf2);
    const sf2InterpolatedPosition = lerp(0.15, 0, sf2);

    if (isInbetween(sf2)) {
      ref.current.visible = true;
      arrow1.current.rotation.y = sf2InterpolatedRotation;
      ref.current.position.x = sf2InterpolatedPosition;
    } else if (isZero(sf2)) {
      arrow1.current.visible = true;
    } else if (isOne(sf2)) {
      arrow1.current.visible = false;
    }
  });

  return (
    <group
      dispose={null}
      position={[0.15, -0.0075, 0.0008]}
      ref={ref}
      rotation={[0, 0, -Math.PI / 2]}
      visible={false}
    >
      <ScrewsSide />
      <ArrowRound position={[-0.3725, 0, 0.34]} ref={arrow1} />;
    </group>
  );
}

function ScrewsRight() {
  const ref = useRef(null);

  const scroll = useScroll();

  useFrame(() => {
    if (!ref) return;

    const sf2 = roundNumber(scroll.range(1 / 11, 1 / 11));
    const sf2InterpolatedPosition = lerp(0.15, 0, sf2);
    if (isInbetween(sf2)) {
      ref.current.visible = true;
      ref.current.position.y = sf2InterpolatedPosition;
    }
  });

  return (
    <group
      dispose={null}
      position={[0.393, 0.15, 0.0008]}
      ref={ref}
      rotation={[0, 0, 0]}
      visible={false}
    >
      <ScrewsSide />
    </group>
  );
}

export { ScrewsLeft, ScrewsRight };
