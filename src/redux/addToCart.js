import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
    name: "addTocart",
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {
        ADD_TO_CART: (state, action) => {
            let index = state.findIndex(i => i.id === action.payload.pro.id);
            if (index < 0) {
                return state = [...state, { ...action.payload.pro, quantity: 1 }]
            }
            else {
                return state = state.map((item, inx) =>
                    inx === index ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        }
    }
})

export const { ADD_TO_CART } = addToCart.actions
export default addToCart.reducer





// import { createSlice } from "@reduxjs/toolkit";

// export const addToCart = createSlice({
//     name: "addToCart",
//     initialState: { cart: [] },
//     reducers: {
//         ADD_TO_CART: (state, action) => {
//             state.cart = state.cart.push(action.payload.pro)
//         }
//     }
// })

// export const { ADD_TO_CART } = addToCart.actions
// export default addToCart.reducer