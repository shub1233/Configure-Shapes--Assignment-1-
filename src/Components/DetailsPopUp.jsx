import { MathUtils, Color } from "three";
import useStore from "../Store/useStore";

const DetailsPopUp = () => {
  const [selectedObject, setSelectedObject] = useStore((state) => [state.selectedObject, state.setSelectedObject]);

  const handlePositionChange = (type, pos, event) => {
    let value = event.target.value;

    if (type === 'rotation') {
      value = MathUtils.degToRad(event.target.value);
    }
    selectedObject[type][pos] = value;

    setSelectedObject(selectedObject);
  }

  const handleColorChange = (event) => {
    let color = event.target.value;
    const col = new Color(color); 
    selectedObject.material.color = col;
    setSelectedObject(selectedObject);
  }

  if (selectedObject)
    return (
      <div className="details-container">
        <div className="flx-col main-group">
          <label className="main-label">Name</label>
          <input type="text" value={selectedObject.name} readOnly />
        </div>

        <div className="flx-col main-group">
          <label className="main-label">Transformation</label>
          <div className="gap-sm">
            <div className="jst-btwn">
              <label className="sub-label">Position</label>
              <div className="flx-row xyz-container">
                <div className="flx-row">
                  <label className="sub-sub-label">x</label>
                  <input
                    className="sub-input"
                    value={selectedObject.position.x}
                    type="number"
                    step="0.1"
                    onChange={(e) => handlePositionChange('position', 'x', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">y</label>
                  <input
                    className="sub-input"
                    type="number"
                    step="0.1"
                    value={selectedObject.position.y}
                    onChange={(e) => handlePositionChange('position', 'y', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">z</label>
                  <input
                    className="sub-input"
                    type="number"
                    step="0.1"
                    value={selectedObject.position.z}
                    onChange={(e) => handlePositionChange('position', 'z', e)}
                  />
                </div>
              </div>
            </div>

            <div className="jst-btwn">
              <label className="sub-label">Rotation</label>
              <div className="flx-row xyz-container">
                <div className="flx-row">
                  <label className="sub-sub-label">x</label>
                  <input
                    className="sub-input"
                    type="number"
                    min="-360" 
                    max="360"
                    value={MathUtils.radToDeg(selectedObject.rotation.x)}
                    onChange={(e) => handlePositionChange('rotation', 'x', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">y</label>
                  <input
                    className="sub-input"
                    type="number"
                    min="-360" 
                    max="360"
                    value={MathUtils.radToDeg(selectedObject.rotation.y)}
                    onChange={(e) => handlePositionChange('rotation', 'y', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">z</label>
                  <input
                    className="sub-input"
                    type="number"
                    min="-360" 
                    max="360"
                    value={MathUtils.radToDeg(selectedObject.rotation.z)}
                    onChange={(e) => handlePositionChange('rotation', 'z', e)}
                  />
                </div>
              </div>
            </div>

            <div className="jst-btwn">
              <label className="sub-label">Scale</label>
              <div className="flx-row xyz-container">
                <div className="flx-row">
                  <label className="sub-sub-label">x</label>
                  <input
                    className="sub-input"
                    type="number"
                    step="0.1"
                    value={selectedObject.scale.x}
                    onChange={(e) => handlePositionChange('scale', 'x', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">y</label>
                  <input
                    className="sub-input"
                    type="number"
                    step="0.1"
                    value={selectedObject.scale.y}
                    onChange={(e) => handlePositionChange('scale', 'y', e)}
                  />
                </div>
                <div className="flx-row">
                  <label className="sub-sub-label">z</label>
                  <input
                    className="sub-input"
                    type="number"
                    step="0.1"
                    value={selectedObject.scale.z}
                    onChange={(e) => handlePositionChange('scale', 'z', e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flx-row main-group">
          <label className="main-label mr-20">Color</label>
          <input type="color" value={`#${selectedObject.material.color.getHexString()}`} onChange={handleColorChange} />
        </div>
      </div>
    );

  return <></>;
};

export default DetailsPopUp;
