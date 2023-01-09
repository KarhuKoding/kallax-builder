//Move Sideparts into Middle Parts
import { lerp, roundNumber } from "../../lib/helperfunctions";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Step5Animations({ left, right }) {
  const scroll = useScroll();

  useFrame(() => {
    if (!left || !right) return;

    const sf5 = roundNumber(scroll.range(4 / 11, 1 / 11));

    const sf5double = sf5 * 2;

    const sf5InterpolatedRight =
      sf5double <= 1 ? lerp(0.35, 0.165, sf5double) : 0.165;

    const sf5InterpolatedLeft =
      sf5double > 1 ? lerp(-0.35, -0.165, sf5double - 1) : -0.35;

    right.current.position.x = sf5InterpolatedRight;
    left.current.position.x = sf5InterpolatedLeft;
  });

  return null;
}

export { Step5Animations };
