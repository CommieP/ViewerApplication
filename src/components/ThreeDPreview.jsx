import { Canvas} from "@react-three/fiber";
import {OrbitControls, Sky} from "@react-three/drei";
import GLTFModel from "./GLTFModel";


const ThreeDPreview = ({ModelPosition}) => {
    console.log(ModelPosition)
    return (
        <div className="w-1/2 h-screen">
            <Canvas className="w-full h-screen" camera = {
                {
                    position: [1, 1.6, 0],
                    rotation: [Math.PI/2., Math.PI/2, 0]
                }}>
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
                <GLTFModel 
                    url={"../../src/assets/scene.glb"}
                    rotation={{x: 0, y: Math.PI/2, z: 0}}
                    position={{x: ModelPosition.x, y: ModelPosition.y, z: ModelPosition.z}} 
                    scale={{x: 1, y: 1, z: 1}} 
                />
                <OrbitControls></OrbitControls>
            </Canvas>
        </div>
        
    )
}

export default ThreeDPreview