import { OrbitControls } from "@react-three/drei";
import MeshCollection from "./MeshCollection";
import Interaction from "./Interaction";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <gridHelper name="grid" args={[55, 100, "black", "white"]} />
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.5}
      />
      
      <ambientLight intensity={1.5} />
      <Interaction />
      <MeshCollection />
    </>
  );
};

export default Experience;
