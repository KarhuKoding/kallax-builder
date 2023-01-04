//Flipping SideBoars
//Flip Sides 90deg UP
import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

const ninetyDeg = Math.PI / 2;
function Step3Animations({ left, right }) {
  const { sf3 } = scrollStore();
  const sf3double = sf3 * 2;

  const sf3InterpolatedRight =
    sf3double <= 1 ? lerp(-ninetyDeg, 0, sf3double) : 0;

  const sf3InterpolatedLeft =
    sf3double > 1 ? lerp(ninetyDeg, 0, sf3double - 1) : ninetyDeg;

  useLayoutEffect(() => {
    // Rotation
    if (left.current === null || !right.current === null) return;

    right.current.rotation.z = sf3InterpolatedRight;
    left.current.rotation.z = sf3InterpolatedLeft;
  }, [sf3, left, right, sf3InterpolatedRight, sf3InterpolatedLeft]);

  return null;
}

export { Step3Animations };

