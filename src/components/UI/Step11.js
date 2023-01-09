// Move Shelf up and Lift y to half of Shelt Height
//Spinning Animation for the Shelf
import Confetti from "react-confetti";
import { useLayoutEffect } from "react";
import { ninetyDeg } from "../../lib/constants";
import { isInbetween, isOne, lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { useFrame } from "@react-three/fiber";

function Step11Animations({ shelf }) {
  const { state } = scrollStore();
  const sf11 = state.sf11;

  const sf11Interpolated = lerp(0, ninetyDeg, sf11);
  const sf11InterpolatedSecondary = lerp(0, 0.7, sf11);

  //SpinningAnimation
  useFrame((state, delta) => {
    if (shelf.current === null) return;
    else if (!isOne(sf11)) return (shelf.current.rotation.z = 0);
    shelf.current.rotation.z += delta;
  });

  useLayoutEffect(() => {
    // Rotation
    if (shelf.current === null) return;
    shelf.current.rotation.x = sf11Interpolated;
    shelf.current.position.y = sf11InterpolatedSecondary;
  }, [sf11, shelf, sf11Interpolated, sf11InterpolatedSecondary]);

  return null;
}

function Step11Components() {
  const { state } = scrollStore();
  const sf11 = state.sf11;

  return (
    isInbetween(sf11) ||
    (isOne(sf11) && (
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    ))
  );
}

export { Step11Animations, Step11Components };
