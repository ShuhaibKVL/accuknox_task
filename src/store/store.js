import { configureStore } from "@reduxjs/toolkit";
import widgetSlice from "@/features/widgetSlice";

const store = configureStore({
    reducer:{
        category :widgetSlice
    }
})

export default store