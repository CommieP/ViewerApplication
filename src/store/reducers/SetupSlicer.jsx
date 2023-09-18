import { createSlice } from "@reduxjs/toolkit";

const SetupSlice = createSlice({
    name: "SetUpData",
    initialState: {
        value: {modelPosition: {x: 0, y : 0, z: 0}, modelRotation: {x: 0, y : 0, z: 0}, modelScale : {x: 1, y : 1, z: 1}, cameraPosition: {x: 0, y : 0, z: 0}, cameraRotationY: 0 },
    },
    reducers: {
        setSetupData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const SetUpDataSet  = SetupSlice.actions

export default SetupSlice.reducer