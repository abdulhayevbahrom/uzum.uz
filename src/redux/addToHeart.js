import { createSlice } from "@reduxjs/toolkit";

export const addToHeart = createSlice({
    name: "addToHeart",
    initialState: JSON.parse(localStorage.getItem('heart')) || [],
    reducers: {
        Add_To_Heart: (state, action) => {
            if (state.some(i => i.id === action.payload.pro.id)) {
                return state.filter(i => i.id !== action.payload.pro.id)
            }
            return state = [...state, action.payload.pro];
        }
    }
})

export const { Add_To_Heart, Remove_From_Heart } = addToHeart.actions
export default addToHeart.reducer