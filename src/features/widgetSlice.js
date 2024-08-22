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
        },
        updateCategory: (state, action) => {
            const { categoryName, newCategoryData } = action.payload;        
            if (state.categoryData.categories && Array.isArray(state.categoryData.categories)) {
                const category = state.categoryData.categories.find(category => category.name === categoryName);
                if (category) {
                    if (Array.isArray(category.widgets)) {
                        
                        category.widgets.push(newCategoryData);
                    } else {
                        console.error("widgets is not an array");
                    }
                    
                    console.log("Updated widgets:", category.widgets);
                } else {
                    console.log("Category not found");
                }
            } else {
                console.error("categoryData.categories is undefined or not an array");
            }
        }
        
    }
})

export const { setData , updateCategory} = widgetSlice.actions

export default widgetSlice.reducer