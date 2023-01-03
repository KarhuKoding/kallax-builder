import React, { useLayoutEffect, useRef, useState } from "react";
import { scrollStore } from "../../store/store";
import { timingStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
import { Bottom, Top, Middle, SideLeft, SideRight } from "./index";
import { useSpring, animated, config } from "@react-spring/three";
import { StepOne } from "../UI/UI";
import CloseUpAnimation from "../UI/CamlockAnimation/index";

const ninetyDeg = Math.PI / 2;

export default function Shelf() {
  const sideBoardLeft = useRef(null);
  const sideBoardRight = useRef(null);
  const topBoardTop = useRef(null);
  const topBoardBottom = useRef(null);
  const middleBoards = useRef(null);

  const shelf = useRef(null);

  const { sf1, sf2, sf3, sf4, sf5, sf6, sf7, sf8 } = scrollStore();
  const { setIntro } = timingStore();
  const [showMiddleParts, setShowMiddleParts] = useState(false);
  const [showTopBottom, setShowTopBottom] = useState(false);
  const [sideBoardLeftOpacity, setSideBoardLeftOpacity] = useState(false);

  // SideBoardAnimation
  const [sideBoardAnimation] = useSpring(
    () => ({
      from: { position: [0, 1, 0] },
      to: { position: [0, 0, 0] },
      config: config.slow,

      onRest: () => setIntro(true),
    }),

    []
  );

  // Opacity SideLeft

  const middlePartsAnimation = useSpring({
    position: showMiddleParts ? [0, 0, 0] : [0, 0.01, 0],

    onRest: () => setSideBoardLeftOpacity(true),
  });

  const opacitySideLeftAnimation = useSpring({
    opacity: sideBoardLeftOpacity ? 0.1 : 1,
    config: config.slow,
  });

  useLayoutEffect(() => {
    const sf2Interpolated = lerp(ninetyDeg, 0, sf2);

    const sf3Interpolated = lerp(0.5, 0.18, sf3);
    const sf4Interpolated = lerp(-0.35, -0.165, sf4);
    const sf6Interpolated = lerp(ninetyDeg, 0, sf6);
    const sf8Interpolated = lerp(0, ninetyDeg, sf8);
    const sf8InterpolatedSecondary= lerp(0, 0.7, sf8);
    const sf8InterpolatedFull= lerp(0, Math.PI, sf8);


    // Rotation
    sideBoardLeft.current.rotation.z = sf2Interpolated;
    sideBoardRight.current.rotation.z = -sf2Interpolated;

    // Stage 3

    if (sf3 > 0 && sf3 < 1) {
      setShowMiddleParts(true);
    } else if (sf3 === 0) {
      setShowMiddleParts(false);
      setSideBoardLeftOpacity(false);
    }
    sideBoardLeft.current.position.x = sf4Interpolated;
    sideBoardRight.current.position.x = -sf4Interpolated;

    // Stage 5

    console.log("sf5", sf5);

    if (sf6 > 0 && sf6 < 1) {
      setSideBoardLeftOpacity(false);
      setShowTopBottom(true);
    } else if (sf6 === 0) {
      setShowTopBottom(false);
    }

    topBoardTop.current.rotation.x = -sf6Interpolated;
    topBoardBottom.current.rotation.x = sf6Interpolated;

    // Stage 7

    // TOP + Bottom Screws

    // Stage 8

    // Put Shelf up
    shelf.current.rotation.x = sf8Interpolated;

    shelf.current.position.y = sf8InterpolatedSecondary;


  }, [sf2, sf3, sf4, sf5, sf6, sf7, sf8]);

  return (
    <group rotation={[0, 0, 0]} ref={shelf} position={[0, 0, 0]}>
      <animated.group position={sideBoardAnimation.position}>
        <SideLeft
          ref={sideBoardLeft}
          opacity={opacitySideLeftAnimation.opacity}
        >
          <StepOne />
        </SideLeft>
        <SideRight ref={sideBoardRight} />
      </animated.group>

      <animated.group position={middlePartsAnimation.position}>
        <Middle ref={middleBoards} visible={showMiddleParts} />
      </animated.group>
      <CloseUpAnimation visible={sf5 > 0 && sf5 < 1} />

      <Top ref={topBoardTop} visible={showTopBottom} />
      <Bottom ref={topBoardBottom} visible={showTopBottom} />
    </group>
  );
}
