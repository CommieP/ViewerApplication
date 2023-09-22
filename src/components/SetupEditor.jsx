import { useDispatch, useSelector } from "react-redux";
import { SetUpDataSet } from "../store/reducers/SetupSlicer";
import AppButton from "../blocks/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataField from "./DataField";


const SetupEditor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SetupDataStore = useSelector((state) => state.SetupReducer.value);

    const [SetupData, SetSetupData] = useState(
        {
            "modelPosition": { x: 0, y: 0, z: 0 },
            "modelRotation": { y: 0},
            "modelScale": { x: 1, y: 1, z: 1 },
            "cameraPosition": { x: 0, y: 1.6, z: 0 },
            "cameraRotation": { y: 0 }
        }
    );


    const startScene = () => {
        dispatch(SetUpDataSet.setSetupData({ modelPosition:  SetupData["modelPosition"] , modelRotation: SetupData["modelRotation"], modelScale: SetupData["modelScale"], cameraPosition: SetupData["cameraPosition"], cameraRotationY: SetupData["cameraRotation"] }));
        navigate("/desktop");
    }


    const handleChange = (position, value, type) => {
        console.log(SetupData, "pre");
        let updatedSetupData = { ...SetupData };
      
        // Update the specific property based on the type and position
        updatedSetupData[type] = {
            ...updatedSetupData[type],
            [position.item]: value
        };

        SetSetupData(updatedSetupData);

        // Dispatch the updated data
        dispatch(SetUpDataSet.setSetupData({
          modelPosition: SetupData["modelPosition"],
          modelRotation: SetupData["modelRotation"],
          modelScale: SetupData["modelScale"],
          cameraPosition: SetupData["cameraPosition"],
          cameraRotationY: SetupData["cameraRotation"]
        }));
      }
      


    return (
        <>
            <div className = "w-1/2 h-screen">
            <DataField title={"Camera Position"} data = {SetupData} field={"cameraPosition"} handleChange={handleChange}></DataField>
                <DataField title={"Camera Rotation"} data = {SetupData} field={"cameraRotation"} handleChange={handleChange}></DataField>
                <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
                <DataField title={"Model Rotation"} data = {SetupData} field={"modelRotation"} handleChange={handleChange}></DataField>
                <DataField title={"Model Scale"} data = {SetupData} field={"modelScale"} handleChange={handleChange}></DataField>
                <AppButton onClick={() => startScene()} title="Start"></AppButton>
            </div>  
        </>

    )
}

export default SetupEditor