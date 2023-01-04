// Show TopAnd Bottom
import { useLayoutEffect, useState } from "react";
import { isZero, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { ninetyDeg } from "../../lib/constants";

// Rotate up 90deg both at same time and move a little bit towards the Shelf

// Show, Rotate and Move TopParts
function Step9Animations({ top, bottom }) {
  const { sf9 } = scrollStore();

  const sf9Interpolated = lerp(ninetyDeg, 0, sf9);

  console.log("rotate 9", sf9);
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
    top.current.rotation.x = -sf9Interpolated;
    bottom.current.rotation.x = sf9Interpolated;
  }, [sf9]);

  return null;
}

export { Step9Animations };
