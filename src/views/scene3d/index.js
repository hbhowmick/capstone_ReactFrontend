import React, { Component } from 'react';
import './index.css';
import { SceneView, Scene, Layer, Camera, UI, Ground, SliceTool, DistanceMeasurementTool, DrawingTool } from 'react-sceneview';


class Scene3D extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <SceneView id="sceneview">
              <UI.Zoom />
              <UI.Compass />
              <Scene basemap="dark-gray" ground="world-elevation" container="viewDiv">
                <Ground
                  opacity={0.5}
                  navigationConstraint={{ type: 'none' }}
                />
                <Scene.Layer
                  id="buildings"
                  layerType="scene"
                  zoomTo
                  selectable
                  url="https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Building_Montreal/SceneServer"
                  onLoad={({ id }) => console.log(id)}
                />
              </Scene>
            </SceneView>
          </div>
        </div>
    );
  }
}

export default Scene3D;
