import Cubes from "./Components/Cubes";
import Models from "./Components/Models";
import Planes from "./Components/Planes";
import Spheres from "./Components/Spheres";

const MeshCollection = () => {
    return (
        <>
            <Cubes />
            <Spheres />
            <Planes />
            <Models />
        </>
    )
}

export default MeshCollection;
