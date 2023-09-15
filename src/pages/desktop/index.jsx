import { useSelector } from "react-redux"
import { Canvas } from "@react-three/fiber";
import { useGLTF, PointerLockControls, Sky} from "@react-three/drei";


const Desktop = () => {
    let ModelPosition = useSelector((state) => state.ModelPositionReducer.value);
    
    return (
        <Canvas>
            <Sky sunPosition={[10, 10, 10]} turbidity={1} rayleigh={0} inclination={0.4} distance={1000}/>
            
        </Canvas>
    )
}

export default Desktop