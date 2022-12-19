import { forwardRef } from "react";
import { createBox, dimensions } from "../../lib";

const { side, top, middle } = dimensions;

// 2x Side
const SideBoardLeft = forwardRef((props, ref) => (
  <mesh position={[0.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
    {createBox(side.width, side.height, side.depth, "blue")}
  </mesh>
));

const SideBoardRight = forwardRef((props, ref) => (
  <mesh position={[-0.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
    {createBox(side.width, side.height, side.depth, "blue")}
  </mesh>
));

// 2x Top
const TopBoardTop = forwardRef((props, ref) => (
  <mesh position={[0, 0, -1]} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
    {createBox(top.width, top.height, top.depth, "hotpink")}
  </mesh>
));

const TopBoardBottom = forwardRef((props, ref) => (
  <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
    {createBox(top.width, top.height, top.depth, "hotpink")}
  </mesh>
));

// // 3x Middle
const MiddleBoard1 = forwardRef((props, ref) => (
  <mesh position={[0, 0, -0.33]} rotation={[0, 0, 0]} ref={ref}>
    {createBox(middle.width, middle.height, middle.depth, "lime")}
  </mesh>
));

const MiddleBoard2 = forwardRef((props, ref) => (
  <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} ref={ref}>
    {createBox(middle.width, middle.height, middle.depth, "lime")}
  </mesh>
));

const MiddleBoard3 = forwardRef((props, ref) => (
  <mesh position={[0, 0, 0.33]} rotation={[0, 0, 0]} ref={ref}>
    {createBox(middle.width, middle.height, middle.depth, "lime")}
  </mesh>
));

export {
  SideBoardLeft,
  SideBoardRight,
  TopBoardTop,
  TopBoardBottom,
  MiddleBoard1,
  MiddleBoard2,
  MiddleBoard3,
};
