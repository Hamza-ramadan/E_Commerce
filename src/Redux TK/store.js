import { configureStore } from "@reduxjs/toolkit";
import  productsreducer  from "./Reducers/ProductReducer";
import  cartreducer  from "./Reducers/CartSlice";
import  compare from "./Reducers/CompareSlice";
import wishlistslice  from "./Reducers/Wihlist";


export const store = configureStore({
    reducer:{
        Products:productsreducer,
        Cart:cartreducer,
        Compare:compare,
        Wishlist:wishlistslice,
    },
})