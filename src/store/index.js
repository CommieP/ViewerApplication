import { configureStore } from '@reduxjs/toolkit'
import modelPositionSlicer from './reducers/modelPositionSlicer'

const store =  configureStore({
  reducer: {
    ModelPositionReducer : modelPositionSlicer
  },
})

export default store;