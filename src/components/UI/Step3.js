//Flipping SideBoars
//Flip Sides 90deg UP

import { lerp, roundNumber } from "../../lib/helperfunctions";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ninetyDeg = Math.PI / 2;
function Step3Animations({ left, right }) {
  const scroll = useScroll();

  useFrame(() => {
    if (!left || !right) return;

    const sf3 = roundNumber(scroll.range(2 / 11, 1 / 11));

    const sf3double = sf3 * 2;

    const sf3InterpolatedRight =
      sf3double <= 1 ? lerp(0, ninetyDeg, sf3double) : ninetyDeg;

    const sf3InterpolatedLeft =
      sf3double > 1 ? lerp(ninetyDeg, 0, sf3double - 1) : ninetyDeg;

    right.current.rotation.z = sf3InterpolatedRight;
    left.current.rotation.z = sf3InterpolatedLeft;
  });

  return null;
}

export { Step3Animations };
