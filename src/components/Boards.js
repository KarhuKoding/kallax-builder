import React from "react";
import { createBox } from "../lib";
import { dimensions } from "../lib";

export default function Boards() {
  const { side, top, middle } = dimensions;

  const sideBoard_Left = createBox(
    side.width,
    side.height,
    side.depth,
    [-0.5, 0, 0],
    [Math.PI / 2, 0, 0]
  );

  const sideBoard_Right = createBox(
    side.width,
    side.height,
    side.depth,
    [0.5, 0, 0],
    [Math.PI / 2, 0, 0]
  );

  const topBoard_Top = createBox(
    top.width,
    top.height,
    top.depth,
    [0, 0, -1],
    [Math.PI / 2, 0, 0]
  );

  const topBoard_Bottom = createBox(
    top.width,
    top.height,
    top.depth,
    [0, 0, 1],
    [Math.PI / 2, 0, 0]
  );

  const middleBoard_1 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, -0.33],
    [0, 0, 0]
  );

  const middleBoard_2 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, 0],
    [0, 0, 0]
  );

  const middleBoard_3 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, 0.33],
    [0, 0, 0]
  );

  return (
    <>
      {sideBoard_Left}
      {sideBoard_Right}

      {topBoard_Top}
      {topBoard_Bottom}

      {middleBoard_1}
      {middleBoard_2}
      {middleBoard_3}
    </>
  );
}
