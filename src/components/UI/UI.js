import React, { useLayoutEffect, useRef } from "react";
import { scrollStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
import { ninetyDeg } from "../../lib/constants";
import { ArrowRound } from "./ArrowRound";
import { Screw } from "./Screw";

export default function Shelf() {
  const arrow1 = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5 } = scrollStore();

  useLayoutEffect(() => {
    const sf1Interpolated = lerp(0, Math.PI * 1.5, sf1);

    arrow1.current.rotation.y = sf1Interpolated;
  }, [sf1, sf2, sf3, sf4, sf5]);

  return (
    <group>
      <ArrowRound position={[-1, 0, 0]} ref={arrow1} />;
      <Screw />;
    </group>
  );
}
