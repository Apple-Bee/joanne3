import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const itemToAdd = action.payload;
            const existingItem = state.cartItems.find(item => item.id === itemToAdd.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push(itemToAdd);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

