import useStore from "../Store/useStore";

const Plane = ({ data }) => {
  const { name, position, rotation, scale, color } = data;

  return (
    <mesh name={name} position={position} rotation={rotation} scale={scale}>
      <planeGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const Planes = () => {
  const [planes] = useStore((state) => [state.planes]);

  return (
    <>
      {planes.map((plane) => (
        <Plane key={plane.name} data={plane} />
      ))}
    </>
  );
};

export default Planes;
