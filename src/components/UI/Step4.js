//Middle Parts
//Make all 3 Middleparts appear
import { useSpring } from "@react-spring/three";
import { useLayoutEffect, useState } from "react";
import { isInbetween, isZero } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

function Step4Animations() {
  const [showMiddleParts, setShowMiddleParts] = useState(false);
  const { sf4 } = scrollStore();

  useLayoutEffect(() => {
    if (isInbetween(sf4)) {
      setShowMiddleParts(true);
    } else if (isZero(sf4)) {
      setShowMiddleParts(false);
    }
  }, [sf4]);

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 0.01, 0],
  });

  return { middlePartsAnimation, showMiddleParts };
}

export { Step4Animations };

