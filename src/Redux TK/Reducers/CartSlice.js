import { createSlice } from "@reduxjs/toolkit";
// import { cart } from "../Redux Data/data";

export const cartreducer = createSlice({
    name:"reducecart",
    initialState:[],
    reducers:{
        addCart:(state , action )=>{
            const foundProduct = state.find((product) => product.id === action.payload.id);
            if (foundProduct) {
                foundProduct.quantity+=1;
            }
            else{
                const productClone = {...action.payload , quantity:1}
                state.push(productClone);
            }
        },
        deleteToCard:(state , action) =>{
            return state.filter((product) => product.id !== action.payload.id)
        },
        incrementItem:(state , action) =>{
            const foundProduct = state.find((product) => product.id === action.payload.id);
            if (foundProduct) {
                foundProduct.quantity+=1;
            }
        },
        decrementItem:(state , action) =>{
            const foundProduct = state.find((product) => product.id === action.payload.id);
            if (foundProduct) {
                foundProduct.quantity-=1;
            }
        },
        ClearAll:(state , action) =>{
            return [];
        }
    }
})
    export const {addCart,deleteToCard ,incrementItem ,decrementItem,ClearAll} = cartreducer.actions;

export default cartreducer.reducer;