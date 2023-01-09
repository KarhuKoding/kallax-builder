//Middle Parts
//Make all 3 Middleparts appear
import { useSpring } from "@react-spring/three";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { isInbetween, isZero, roundNumber } from "../../lib/helperfunctions";
// TODO find a way to remove setState in useFrame

function Step4Animations() {
  const [showMiddleParts, setShowMiddleParts] = useState(false);
  const scroll = useScroll();

  useFrame(() => {
    const sf4 = roundNumber(scroll.range(3 / 11, 1 / 11));

    if (isInbetween(sf4)) {
      setShowMiddleParts(true);
    } else if (isZero(sf4)) {
      setShowMiddleParts(false);
    }
  });

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 0.01, 0],
  });

  return { middlePartsAnimation, showMiddleParts };
}

export { Step4Animations };

