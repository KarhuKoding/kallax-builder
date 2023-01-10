import React, { useRef } from "react";
import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function PageNumber() {
  const scroll = useScroll();
  const ref = useRef();

  useFrame(() => {
    if (ref.current === null) return;
    const test = Math.floor(scroll.offset * 10);
    ref.current.innerHTML = `${test}`;
  });

  return (
    <Html>
      <div className="page_indicator">
        <h1 ref={ref}>{1}</h1>
      </div>
    </Html>
  );
}

export default PageNumber;
