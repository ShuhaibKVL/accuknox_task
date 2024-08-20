import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryData : [],
}

export const widgetSlice = createSlice({
    name:"widget",
    initialState,
    reducers : {
        setData:(state,action) =>{
            state.categoryData = action.payload.jsonData            
        }
    }
})

export const { setData } = widgetSlice.actions

export default widgetSlice.reducer