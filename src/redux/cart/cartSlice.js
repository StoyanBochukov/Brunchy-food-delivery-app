import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addIntemToCart(state, action){
            const newItem = action.payload
            const existingItem = state.items.find( item => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title                    
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },
        cartTotalAmout(state, action){
           let {total} = state.items.reduce((cartTotal, item) => {
                const { price, quantity } = item
                const itemTotal = price * quantity
                cartTotal.total += itemTotal
                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })
            state.totalAmount = total
        },
        resetCart(state){
            state.items = []
            state.totalAmount = 0
            state.totalQuantity = 0
        } 
        
    }
})

export const cartSliceActions = cartSlice.actions
export const cartReducer = cartSlice.reducer