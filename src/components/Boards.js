import React from "react";
import { createBox } from "../lib";
import { dimensions } from "../lib";
import { scrollStore } from "../store/store";

export default function Boards() {
  const { rotation } = scrollStore();

  console.log("rotation", rotation);

  const { side, top, middle } = dimensions;

  // 2x Side

  const sideBoard_Left = createBox(
    side.width,
    side.height,
    side.depth,
    [-0.5, 0, 0],
    [Math.PI / 2, 0, 0],
    "blue"
  );

  const sideBoard_Right = createBox(
    side.width,
    side.height,
    side.depth,
    [0.5, 0, 0],
    [Math.PI / 2, 0, 0],
    "blue"
  );

  // 2x Top

  const topBoard_Top = createBox(
    top.width,
    top.height,
    top.depth,
    [0, 0, -1],
    [Math.PI / 2, 0, 0],
    "hotpink"
  );

  const topBoard_Bottom = createBox(
    top.width,
    top.height,
    top.depth,
    [0, 0, 1],
    [Math.PI / 2, 0, 0],
    "hotpink"
  );

  // 3x Middle

  const middleBoard_1 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, -0.33],
    [0, 0, 0],
    "lime"
  );

  const middleBoard_2 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, 0],
    [0, 0, 0],
    "lime"
  );

  const middleBoard_3 = createBox(
    middle.width,
    middle.height,
    middle.depth,
    [0, middle.height / 2, 0.33],
    [0, 0, 0],
    "lime"
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
