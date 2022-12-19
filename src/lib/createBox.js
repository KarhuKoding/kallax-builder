export function createBox(width = 1, height = 1, depth = 1, color = 0xcccfd1) {
  return (
    <>
      <boxGeometry args={[width, height, depth]} />
      <meshPhysicalMaterial
        color={color}
        emissive={0x000000}
        roughness={0.3}
        metalness={0.1}
        reflectivity={0.4}
      />
    </>
  );
}
