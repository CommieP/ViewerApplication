import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const GLTFModel = ({url, rotation, position, scale }) => {
    const model = useGLTF(url);

    model.scene.rotation.x = rotation.x || 0;
    model.scene.rotation.y = rotation.y || 0;
    model.scene.rotation.z = rotation.z || 0;

    model.scene.scale.set(scale.x, scale.y, scale.z);
    model.scene.position.set(position.x, position.y, position.z);


    return(
        <primitive object={model.scene}></primitive>
    )  
}

export default GLTFModel;