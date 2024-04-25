'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image?: string;
    countInStock: number;
}

export interface CartState {
    loading: boolean;
    cartItems: CartItem[];
    itemsPrice: string;
    shippingPrice: string;
    taxPrice: string;
    totalPrice: string;
}



export const initialCartState: CartState = {
    loading: true,
    cartItems: [],
    itemsPrice: "0.00",
    shippingPrice: "0.00",
    taxPrice: "0.00",
    totalPrice: "0.00",
};



export const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState :initialCartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((x) => x.id === item.id);

            if (existingItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x.id === existingItem.id ? item : x
                );
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            );
            state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 100);

            state.taxPrice = addDecimals(0.15 * parseFloat(state.itemsPrice));
            state.totalPrice = addDecimals(
                parseFloat(state.itemsPrice) +
                parseFloat(state.shippingPrice) +
                parseFloat(state.taxPrice)
            );

            Cookies.set('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemIdToRemove = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);

            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            );
            state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 100);

            state.taxPrice = addDecimals(0.15 * parseFloat(state.itemsPrice));
            state.totalPrice = addDecimals(
                parseFloat(state.itemsPrice) +
                parseFloat(state.shippingPrice) +
                parseFloat(state.taxPrice)
            );

            Cookies.set('cart', JSON.stringify(state));
        },

        hideLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { addToCart, removeFromCart, hideLoading } = cartSlice.actions;
export default cartSlice.reducer;



