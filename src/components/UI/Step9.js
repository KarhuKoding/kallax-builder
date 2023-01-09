// Show TopAnd Bottom
import { useLayoutEffect } from "react";
import { ninetyDeg } from "../../lib/constants";
import { isZero, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

// Show, Rotate and Move TopParts
function Step9Animations({ top, bottom }) {
  const { state } = scrollStore();
  const sf9 = state.sf9;

  const sf9InterpolatedRotation = lerp(ninetyDeg, 0, sf9);
  const sf9InterpolatedLocation = lerp(-0.8, -0.69, sf9);

  useLayoutEffect(() => {
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
  }, [sf9, top, bottom, sf9InterpolatedRotation, sf9InterpolatedLocation]);

  return null;
}

export { Step9Animations };
