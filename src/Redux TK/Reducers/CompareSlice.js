import { createSlice } from "@reduxjs/toolkit";

export const compare =createSlice({
    initialState :[],
    name :"compare",
    reducers:{
        addToCardcompare:(state , action) =>{
            const foundProduct = state.find((product) => product.id === action.payload.id);
            if (foundProduct) {
                
            }
            else{
                const productClone = {...action.payload}
                state.push(productClone);
            }
        },
        deleteToCardcompare:(state , action) =>{
            return state.filter((product) => product.id !== action.payload.id)
        },
    }
})
export const {addToCardcompare ,deleteToCardcompare} =compare.actions;
export default compare.reducer;