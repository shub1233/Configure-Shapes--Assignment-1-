import useStore from "../Store/useStore";

// const singleCubeData = {
//     name: "box0",
//     position: [0, 0, 0],
//     rotation: [0, 0, 0],
//     scale: [0, 0, 0],
//     color: "#ffffff"
// }

const Cube = ({ data }) => {
  const { name, position, rotation, scale, color } = data;

  return (
    <mesh name={name} position={position} rotation={rotation} scale={scale}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  const handleClick = (e) => {
    console.log("handle", e);

    if (e.intersections.length) {
      console.log(e.intersections[0]);
      setBox(e.intersections[0].object);
    }
  };

  return (
    <>
      {cubes.map((cube) => (
        <Cube key={cube.name} data={cube} />
      ))}
    </>
  );
};

export default Cubes;
