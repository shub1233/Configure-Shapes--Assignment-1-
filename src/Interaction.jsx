import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { TransformControls } from "@react-three/drei";
import useStore from "./Store/useStore";

const Interaction = () => {
  const [transformMode, setTransformMode] = useState("translate");
  const { raycaster, pointer, camera, scene } = useThree();

  const [selectedObject, setSelectedObject, setChangeCounter, resetCounter] =
    useStore((state) => [
      state.selectedObject,
      state.setSelectedObject,
      state.setChangeCounter,
      state.resetCounter,
    ]);

  useEffect(() => {
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePointerDown = (event) => {
    if (event.target.localName === "canvas") {
      raycaster.setFromCamera(pointer, camera);

      const meshes = scene.children.filter((child) => child.isMesh || child.isGroup);
      const intersects = raycaster.intersectObjects(meshes, true);

      if (intersects.length) {
        setSelectedObject(intersects[0].object);
      } else {
        resetCounter();
        setSelectedObject(undefined);
      }
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "w":
      case "W":
        setTransformMode("translate");
        break;

      case "e":
      case "E":
        setTransformMode("rotate");
        break;

      case "r":
      case "R":
        setTransformMode("scale");
        break;
    }
  };

  return (
    <>
      {!!selectedObject && (
        <TransformControls
          object={selectedObject}
          mode={transformMode}
          size={0.5}
          onChange={() => setChangeCounter()}
        />
      )}
    </>
  );
};

export default Interaction;
