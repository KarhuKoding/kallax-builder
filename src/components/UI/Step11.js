// Move Shelf up and Lift y to half of Shelt Height
//Spinning Animation for the Shelf
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ninetyDeg } from "../../lib/constants";
import {
  isInbetween,
  isOne,
  lerp,
  roundNumber
} from "../../lib/helperfunctions";

function Step11Animations({ shelf }) {
  const scroll = useScroll();
  //SpinningAnimation
  useFrame((state, delta) => {
    if (shelf.current === null) return;
    const sf11 = roundNumber(scroll.range(10 / 11, 1 / 11));

    const sf11Interpolated = lerp(0, ninetyDeg, sf11);
    const sf11InterpolatedSecondary = lerp(0, 0.7, sf11);

    if (isInbetween(sf11)) {
      shelf.current.position.y = sf11InterpolatedSecondary;
      shelf.current.rotation.x = sf11Interpolated;
    } else if (isOne(sf11)) {
      shelf.current.rotation.z += delta;
    } else if (!isOne(sf11)) {
      shelf.current.rotation.z = 0;
    }
  });

  return null;
}

export { Step11Animations };

