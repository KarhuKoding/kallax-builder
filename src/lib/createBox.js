export function createBox(width = 1, height = 1, depth = 1, color = "gray") {
  return (
    <>
      <boxGeometry args={[width, height, depth]} />
      <meshBasicMaterial color={color} />
    </>
  );
}
