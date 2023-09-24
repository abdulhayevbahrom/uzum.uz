import { configureStore } from '@reduxjs/toolkit'
import addToCart from './addToCart'

export const store = configureStore({
    reducer: {
        addToCart,
        opencatalog:false
    }
})




// import { configureStore } from "@reduxjs/toolkit";
// import addToCart from "./addToCart";

// const store = configureStore({
//     reducer: {
//         addToCart,
//     }
// })

// export default store