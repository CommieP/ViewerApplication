import { createSlice } from "@reduxjs/toolkit";

const ModelPositionSlice = createSlice({
    name: "ModelPosition",
    initialState: {
        value: null,
    },
    reducers: {
        setModelPositionValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { ModelPositionAction } = ModelPositionSlice.actions

export default ModelPositionSlice.reducer