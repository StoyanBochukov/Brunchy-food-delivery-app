import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from '../redux/ui/uiSlice'
import { cartReducer } from '../redux/cart/cartSlice'


const store = configureStore({
    reducer:{
        ui: uiReducer,
        cart: cartReducer
    }
})

export default store