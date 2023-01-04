//Move Sideparts into Middle Parts

import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
//TODO first left then right

function Step5Animations({ sideBoardLeft, sideBoardRight }) {
  const { sf5 } = scrollStore();

  const sf5Interpolated = lerp(-0.35, -0.165, sf5);

  useLayoutEffect(() => {
    // Rotation
    if (sideBoardLeft.current === null || sideBoardRight.current === null)
      return;

    sideBoardLeft.current.position.x = sf5Interpolated;
    sideBoardRight.current.position.x = -sf5Interpolated;
  }, [sf5]);

  return null;
}

export { Step5Animations };
