import { useDispatch } from "react-redux";
import { SetUpDataSet } from "../store/reducers/SetupSlicer";
import NumberInput from "../blocks/NumberInput"
import AppButton from "../blocks/Button";
import DataLabel from "../blocks/Label";
import DataTitle from "../blocks/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataField from "./DataField";


const SetupEditor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [SetupData, SetSetupData] = useState(
        {
            "modelPosition": { x: 0, y: 0, z: 0 },
            "modelRotation": { x: 0, y: 0, z: 0 },
            "modelScale": { x: 1, y: 1, z: 1 },
            "cameraPosition": { x: 0, y: 0, z: 0 },
            "cameraRotation": { y: 0 }
        }
    );

    const startScene = () => {
        dispatch(SetUpDataSet.setSetupData({ modelPosition:  SetupData["modelPosition"] , modelRotation: SetupData["modelRotation"], modelScale: SetupData["modelScale"], cameraPosition: SetupData["cameraPosition"], cameraRotationY: SetupData["cameraRotation"] }));
        navigate("/desktop");
    }


    const handleChange = (position, value, type) => {
        let overalPosition = {...SetupData};

        console.log(position, value, type);

        overalPosition = {
            ...overalPosition,
            [type]:{
                ...overalPosition[type],
                [position.item] : value
            }
        }

        console.log(overalPosition);

        SetSetupData(overalPosition)
    }


    return (
        <>
            <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
            <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
            <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
            <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
            <DataField title={"Model Position"} data = {SetupData} field={"modelPosition"} handleChange={handleChange}></DataField>
            <AppButton onClick={() => startScene()} title="Start"></AppButton>
        </>

    )
}

export default SetupEditor