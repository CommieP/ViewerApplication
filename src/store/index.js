import { configureStore } from '@reduxjs/toolkit'
import SetupSlicer from './reducers/SetupSlicer';

const store =  configureStore({
  reducer: {
    SetupReducer : SetupSlicer
  },
})

export default store;