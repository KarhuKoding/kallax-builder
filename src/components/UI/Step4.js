//Middle Parts
//Make all 3 Middleparts appear
import React, { useLayoutEffect, useState } from "react";
import { config, useSpring } from "@react-spring/three";
import { scrollStore, timingStore } from "../../store/store";
import { SidePositionHighlight } from "./SidePositionHighlight";

function Step4Animations() {
  const [showMiddleParts, setShowMiddleParts] = useState(false);
  const { sf4 } = scrollStore();

  useLayoutEffect(() => {
    if (sf4 > 0 && sf4 < 1) {
      setShowMiddleParts(true);
    } else if (sf4 === 0) {
      setShowMiddleParts(false);
    }
  }, [sf4]);

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 0.01, 0],
  });

  return {middlePartsAnimation, showMiddleParts};
}

export { Step4Animations };
