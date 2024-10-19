import { configureStore} from "@reduxjs/toolkit";
import productReducer from "../store/productSlice";

export const store = configureStore({
    reducer: {
        productSlice: productReducer,
        // Add the reducer here 
    }});