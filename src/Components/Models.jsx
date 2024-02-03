import { useMemo } from "react";
import { Color, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";

import useStore from "../Store/useStore";

// const singleCubeData = {
//     name: "box0",
//     position: [0, 0, 0],
//     rotation: [0, 0, 0],
//     scale: [0, 0, 0],
//     color: "#ffffff"
// }

const Model = ({ data, index }) => {
  const { fileUrl, position, rotation, scale, color } = data;

  const material = new MeshStandardMaterial();

  const model = useGLTF(fileUrl);

  useMemo(() => {
    const { scene } = model;

    const applyMaterial = (obj) => {
      obj.forEach((child) => {
        if (child.type === "Mesh") {
          child.material = material;
        } else if (child.type === "Object3D" || child.type === "Group") {
          applyMaterial(child.children);
        }
      });
    };

    applyMaterial(scene.children);
  }, [model]);

  return (
    <primitive
      object={model.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

const Models = () => {
  const [models] = useStore((state) => [state.models]);

  return (
    <>
      {models.map((model, index) => (
        <Model key={model.name} index={index} data={model} />
      ))}
    </>
  );
};

export default Models;
