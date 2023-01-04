//Move Camlock Screws + Show CloseUp Animation
import React, { useState, useLayoutEffect } from "react";
import CloseUpAnimation from "./CamlockAnimation/index";
import { isInbetween, isZero, isOne } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
// TODO move Camlock Screws

// CloseUp Animation
function Step7Components() {
  const { sf7, sf8 } = scrollStore();
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (isInbetween(sf7) || isInbetween(sf8)) {
      setIsVisible(true);
    } else if (isZero(sf7)) {
      setIsVisible(false);
    } else if (isOne(sf8)) {
      setIsVisible(false);
    }
  }, [sf7, sf8]);

  return <CloseUpAnimation visible={isVisible}></CloseUpAnimation>;
}

export { Step7Components };
