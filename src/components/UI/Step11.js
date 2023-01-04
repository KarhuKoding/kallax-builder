// Move Shelf up and Lift y to half of Shelt Height
//Spinning Animation for the Shelf
import Confetti from "react-confetti";
import { useLayoutEffect } from "react";
import { ninetyDeg } from "../../lib/constants";
import { isInbetween, isOne, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";

function Step11Animations({ shelf }) {
  const { sf11 } = scrollStore();

  const sf11Interpolated = lerp(0, ninetyDeg, sf11);
  const sf11InterpolatedSecondary = lerp(0, 0.7, sf11);

  useLayoutEffect(() => {
    // Rotation
    if (shelf.current === null) return;
    shelf.current.rotation.x = sf11Interpolated;
    shelf.current.position.y = sf11InterpolatedSecondary;
  }, [sf11, shelf, sf11Interpolated, sf11InterpolatedSecondary]);

  return null;
}

function Step11Components() {
  const { sf11 } = scrollStore();
  return (
    isInbetween(sf11) ||
    (isOne(sf11) && (
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    ))
  );
}

export { Step11Animations, Step11Components };
