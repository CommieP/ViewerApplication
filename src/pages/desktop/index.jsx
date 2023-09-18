import { useRef } from "react";
import { useSelector } from "react-redux"
import { Canvas} from "@react-three/fiber";
import {Sky} from "@react-three/drei";
import GLTFModel from "../../components/GLTFModel";
import DeskTopControls from "../../components/DesktopControls";


const Desktop = () => {
    let ModelPosition = useSelector((state) => state.SetupReducer.value.modelPosition);

    return (
        <div className="w-screen h-screen">
            <Canvas className="w-screen h-screen">
                <ambientLight
                    intensity={1.25} 
                />
                <Sky
                    sunPosition={[10, 10, 10]}
                    turbidity={10}
                    rayleigh={0} 
                    inclination={0.4} 
                    distance={1000}
                />
                <GLTFModel url={"../../src/assets/scene.glb"} rotation={{x: 0, y: Math.PI/2, z: 0}} position={{x: ModelPosition.x, y: ModelPosition.y, z: ModelPosition.z}} scale={{x: 1, y: 1, z: 1}} />
                <DeskTopControls initialCameraPosition={{x : 0, y : 1.6, z: 0}}></DeskTopControls>
            </Canvas>
        </div>
        
    )
}

export default Desktop