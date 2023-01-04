// Make SideboadLeft tranparent
import { useSpring, config } from "@react-spring/three";
import { useLayoutEffect, useState } from "react";
import { isInbetween, isZero, isOne } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

function Step6Animations() {
  const [sideBoardLeftOpacity, setSideBoardLeftOpacity] = useState(false);
  const { sf6 } = scrollStore();

  useLayoutEffect(() => {
    if (isInbetween(sf6)) {
      setSideBoardLeftOpacity(true);
    } else if (isZero(sf6)) {
      setSideBoardLeftOpacity(false);
    } else if (isOne(sf6)) {
      setSideBoardLeftOpacity(false);
    }
  }, [sf6]);

  const opacitySideLeftAnimation = useSpring({
    opacity: sideBoardLeftOpacity ? 0.1 : 1,
    config: config.slow,
  });

  return opacitySideLeftAnimation;
}

export { Step6Animations };
