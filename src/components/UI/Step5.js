//Move Sideparts into Middle Parts

import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
//TODO first left then right

function Step5Animations({ left, right }) {
  const { sf5 } = scrollStore();

  const sf5Interpolated = lerp(-0.35, -0.165, sf5);

  useLayoutEffect(() => {
    // Rotation
    if (left.current === null || right.current === null) return;

    left.current.position.x = sf5Interpolated;
    right.current.position.x = -sf5Interpolated;
  }, [sf5, left, right, sf5Interpolated]);

  return null;
}

export { Step5Animations };
