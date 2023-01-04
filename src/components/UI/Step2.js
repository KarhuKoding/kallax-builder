//Sideboard-Screws
//12x Sideboard Screws coming from Top with spinningArrow Arrow

// TODO add Screws for Side Right

import React, { useLayoutEffect, useRef, useState } from "react";
import { lerp } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { ArrowRound } from "../Arrows/ArrowRound";
import { Screws } from "../Screws/Screws";

// 12x Screws
const Step2Components = () => {
  const arrow1 = useRef(null);
  const ref = useRef(null);
  const [showScrews, setShowScrews] = useState(false);

  const { sf2 } = scrollStore();

  useLayoutEffect(() => {
    const sf1InterpolatedRotation = lerp(0, Math.PI * 2, sf2);
    const sf1InterpolatedPosition = lerp(0.15, 0, sf2);

    if (sf2 > 0 && sf2 < 1) {
      setShowScrews(true);
      arrow1.current.rotation.y = sf1InterpolatedRotation;
      ref.current.position.x = sf1InterpolatedPosition;
    } else if (sf2 === 0) {
      setShowScrews(false);
      arrow1.current.visible = true;
    } else if (sf2 === 1) {
      arrow1.current.visible = false;
    }
  }, [sf2]);

  return (
    <group
      dispose={null}
      position={[0.15, 0, 0]}
      visible={showScrews}
      ref={ref}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <Screws />
      <Screws position={[0.3455, 0, 0]} />
      {/* <Screws position={[1.1, 0, 0]} />
      <Screws position={[1.44, 0, 0]} /> */}
      <ArrowRound position={[-0.3725, 0, 0.34]} ref={arrow1} />;
    </group>
  );
};

export { Step2Components };
