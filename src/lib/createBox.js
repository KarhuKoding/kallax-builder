export function createBox(
  width = 1,
  height = 1,
  depth = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = "gray"
) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[width, height, depth]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
