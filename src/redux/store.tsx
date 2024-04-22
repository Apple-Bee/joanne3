import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
