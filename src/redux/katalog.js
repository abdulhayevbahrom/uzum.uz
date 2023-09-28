import { createSlice } from "@reduxjs/toolkit";

export const katalog = createSlice({
    name: "katalog",
    initialState: false,
    reducers: {
        OPEN_CATALOG: (state, action) => {
            return state = !state
        }
    }
})


export const { OPEN_CATALOG } = katalog.actions
export default katalog.reducer