import { OrbitControls } from "@react-three/drei";
import MeshCollection from "./MeshCollection";
import Interaction from "./Interaction";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <gridHelper name="grid" args={[55, 100, "black", "white"]}/>
      <Interaction />
      <MeshCollection />
    </>
  );
};

export default Experience;
