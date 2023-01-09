// Make SideboadLeft tranparent
import { config, useSpring } from "@react-spring/three";
import { useState } from "react";
import { isInbetween, isOne, isZero } from "../../lib/helperfunctions";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { roundNumber } from "../../lib/helperfunctions";

// TODO find a way to remove setState in useFrame

function Step6Animations() {
  const [sideBoardLeftOpacity, setSideBoardLeftOpacity] = useState(false);

  const scroll = useScroll();

  useFrame(() => {
    const sf6 = roundNumber(scroll.range(5 / 11, 1 / 11));
    const sf7 = roundNumber(scroll.range(6 / 11, 1 / 11));
    const sf8 = roundNumber(scroll.range(7 / 11, 1 / 11));

    if (isInbetween(sf6) || isInbetween(sf7) || isInbetween(sf8)) {
      setSideBoardLeftOpacity(true);
    } else if (isZero(sf6)) {
      setSideBoardLeftOpacity(false);
    } else if (isOne(sf8)) {
      setSideBoardLeftOpacity(false);
    }
  });

  const opacitySideLeftAnimation = useSpring({
    opacity: sideBoardLeftOpacity ? 0.1 : 1,
    config: config.slow,
  });

  return opacitySideLeftAnimation;
}

export { Step6Animations };

