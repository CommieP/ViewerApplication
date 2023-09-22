import { Canvas} from "@react-three/fiber";
import {OrbitControls, Sky} from "@react-three/drei";
import GLTFModel from "./GLTFModel";
import CustomCamera from "./CustomCamera";


const ThreeDPreview = ({data}) => {

    console.log(data.cameraRotationY)

    return (
        <div className="w-1/2 h-screen">
            <Canvas className="w-full h-screen">
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

                <CustomCamera position={[data.cameraPosition.x, data.cameraPosition.y, data.cameraPosition.z]} rotation={[0, data.cameraRotationY.y, 0]} />

                <GLTFModel 
                    url={"../../src/assets/scene.glb"}
                    rotation={{x: data.modelRotation.x, y: data.modelRotation.y, z: data.modelRotation.z}}
                    position={{x: data.modelPosition.x, y: data.modelPosition.y, z: data.modelPosition.z}} 
                    scale={{x: 1, y: 1, z: 1}} 
                />
            </Canvas>
        </div>
        
    )
}

export default ThreeDPreview