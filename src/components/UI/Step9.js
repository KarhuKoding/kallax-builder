// Show TopAnd Bottom
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ninetyDeg } from "../../lib/constants";
import { isZero, lerp, roundNumber } from "../../lib/helperfunctions";

// Show, Rotate and Move TopParts
function Step9Animations({ top, bottom }) {
  const scroll = useScroll();

  useFrame(() => {
    if (!top || !bottom) return;
    const sf9 = roundNumber(scroll.range(8 / 11, 1 / 11));

    const sf9InterpolatedRotation = lerp(ninetyDeg, 0, sf9);
    const sf9InterpolatedLocation = lerp(-0.8, -0.69, sf9);

    // visibility
    if (sf9 > 0) {
      top.current.visible = true;
      bottom.current.visible = true;
    } else if (isZero(sf9)) {
      top.current.visible = false;
      bottom.current.visible = false;
    }
    // Rotation
    if (top.current === null || bottom.current === null) return;
    top.current.rotation.x = -sf9InterpolatedRotation;
    bottom.current.rotation.x = sf9InterpolatedRotation;

    top.current.position.z = sf9InterpolatedLocation;
    bottom.current.position.z = -sf9InterpolatedLocation;
  });

  return null;
}

export { Step9Animations };

