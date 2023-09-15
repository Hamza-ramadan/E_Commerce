import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Redux Data/data";


export const productsreducer = createSlice({
    name:"reduceproduct",
    initialState:products ,
    
})

export default productsreducer.reducer;
