import useStore from "../Store/useStore";

const Sphere = ({ data }) => {
  const { name, position, rotation, scale, color } = data;

  return (
    <mesh name={name} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const Spheres = () => {
  const [spheres] = useStore((state) => [state.spheres]);

  return (
    <>
      {spheres.map((sphere) => (
        <Sphere key={sphere.name} data={sphere} />
      ))}
    </>
  );
};

export default Spheres;
