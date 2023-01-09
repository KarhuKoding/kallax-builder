//Move Sideparts into Middle Parts
import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

function Step5Animations({ left, right }) {
  const { state } = scrollStore();
  const sf5 = state.sf5;

  const sf5double = sf5 * 2;

  const sf5InterpolatedRight =
    sf5double <= 1 ? lerp(0.35, 0.165, sf5double) : 0.165;

  const sf5InterpolatedLeft =
    sf5double > 1 ? lerp(-0.35, -0.165, sf5double - 1) : -0.35;

  useLayoutEffect(() => {
    // Rotation
    if (left.current === null || right.current === null) return;

    right.current.position.x = sf5InterpolatedRight;
    left.current.position.x = sf5InterpolatedLeft;
  }, [sf5, left, right, sf5InterpolatedRight, sf5InterpolatedLeft]);

  return null;
}

export { Step5Animations };
