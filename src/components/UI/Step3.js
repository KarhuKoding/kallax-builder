//Flipping SideBoars
//Flip Sides 90deg UP
import { useLayoutEffect } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
// TODO flip first left, then right one

const ninetyDeg = Math.PI / 2;
function Step3Animations({ sideBoardLeft, sideBoardRight }) {
  const { sf3 } = scrollStore();

  const sf3Interpolated = lerp(ninetyDeg, 0, sf3);

  useLayoutEffect(() => {
    // Rotation
    if (sideBoardLeft.current === null || !sideBoardRight.current === null)
      return;
      
    sideBoardLeft.current.rotation.z = sf3Interpolated;
    sideBoardRight.current.rotation.z = -sf3Interpolated;
  }, [sf3]);

  return null;
}

export { Step3Animations };
