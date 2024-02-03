import { useRef } from "react";
import useStore from "../Store/useStore";

const AddComponent = () => {
  const inputUploadRef = useRef();

  const [setModelData, setSphereData, setCubeData, setPlaneData] = useStore((state) => [
    state.setModelData,
    state.setSphereData,
    state.setCubeData,
    state.setPlaneData,
  ]);

  const handleAddObject = (type) => {
    const obj = {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: "#7A7A7A",
    };

    if (type === "sphere") setSphereData(obj);
    if (type === "cube") setCubeData(obj);
    if (type === "plane") setPlaneData(obj);
  };

  const uploadClick = () => {
    inputUploadRef.current.click();
  }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    const obj = {
      name: file.name,
      fileUrl: url,
      isLoaded: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2],
      color: "#7A7A7A",
    };

    setModelData(obj);
  }

  return (
    <div className="button-container">
      <input type='file' ref={inputUploadRef} accept=".glb,.gltf" style={{display: 'none'}} onChange={handleUpload}/>
      <button className="basic-btn" onClick={uploadClick}>Upload 3D Model</button>
      <button className="basic-btn" onClick={() => handleAddObject("sphere")}>
        Add Sphere
      </button>
      <button className="basic-btn" onClick={() => handleAddObject("cube")}>
        Add Cube
      </button>
      <button className="basic-btn" onClick={() => handleAddObject("plane")}>
        Add Plane
      </button>
    </div>
  );
};

export default AddComponent;
