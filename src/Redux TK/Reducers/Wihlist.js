import { createSlice } from "@reduxjs/toolkit";

export const wishlistslice =createSlice({
    initialState :[],
    name :"compare",
    reducers:{
        addToCardwishlist:(state , action) =>{
            const foundProduct = state.find((product) => product.id === action.payload.id);
            if (foundProduct) {
                
            }
            else{
                const productClone = {...action.payload}
                state.push(productClone);
            }
        },
        deleteToCardwishlist:(state , action) =>{
            return state.filter((product) => product.id !== action.payload.id)
        },
    }
})
export const {deleteToCardwishlist ,addToCardwishlist} =wishlistslice.actions;
export default wishlistslice.reducer;