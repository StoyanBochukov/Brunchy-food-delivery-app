import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from '../redux/ui/uiSlice'


const store = configureStore({
    reducer:{
        ui: uiReducer
    }
})

export default store