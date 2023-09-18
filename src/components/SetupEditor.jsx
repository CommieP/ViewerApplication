import { useDispatch} from "react-redux";
import { SetUpDataSet } from "../store/reducers/SetupSlicer";
import NumberInput from "../blocks/NumberInput"
import AppButton from "../blocks/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SetupEditor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ModelPosition, SetModelPosition] = useState({x: 0, y: 0, z:0});


    const handleInputChange = (key, newValue) => {
        SetModelPosition(value => ({
            ...value,
            [key]: newValue
        }));
    }

    const startScene = () => {
        dispatch(SetUpDataSet.setSetupData({modelPosition: {ModelPosition}, modelRotation: {x: 0, y : 0, z: 0}, modelScale : {x: 1, y : 1, z: 1}, cameraPosition: {x: 0, y : 0, z: 0}, cameraRotationY: 0 }));
        navigate("/desktop");
    }

    
    return (
        <>
            <NumberInput id = "x" value={ModelPosition.x} onChange={(value) => handleInputChange("x", parseFloat(value))}/>
            <NumberInput id = "y" value={ModelPosition.y} onChange={(value) => handleInputChange("y", parseFloat(value))}/>
            <NumberInput id = "z" value={ModelPosition.z} onChange={(value) => handleInputChange("z", parseFloat(value))}/>

            <AppButton onClick={() => startScene() } title ="Start"></AppButton>
        </>
        
    )
}

export default SetupEditor