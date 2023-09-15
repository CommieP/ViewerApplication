import { createSlice } from "@reduxjs/toolkit";

const ModelPositionSlice = createSlice({
    name: "ModelPosition",
    initialState: {
        value: {x: 0, y : 0, z: 0},
    },
    reducers: {
        setModelPositionValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const ModelPositionSet  = ModelPositionSlice.actions

export default ModelPositionSlice.reducer