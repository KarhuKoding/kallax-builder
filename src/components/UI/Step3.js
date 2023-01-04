//Flipping SideBoars
//Flip Sides 90deg UP
import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
// TODO flip first left, then right one

const ninetyDeg = Math.PI / 2;
function Step3Animations({ left, right }) {
  const { sf3 } = scrollStore();

  const sf3Interpolated = lerp(ninetyDeg, 0, sf3);

  useLayoutEffect(() => {
    // Rotation
    if (left.current === null || !right.current === null) return;

    left.current.rotation.z = sf3Interpolated;
    right.current.rotation.z = -sf3Interpolated;
  }, [sf3, left, right, sf3Interpolated]);

  return null;
}

export { Step3Animations };
