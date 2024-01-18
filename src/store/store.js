import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './cartslice';
import productReducer from './Productslice';
const store = configureStore({
    reducer:{
        cart: cartreducer,
        product: productReducer,
    },
});

export default store;