import { CartItem, addToCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
    cart: {
        cartItems: CartItem[];
        // Add other properties of your cart slice state
    };
    // Add other slices of your Redux state
}

interface AddToCartProps {
    product: {
        id: string;
        name: string;
        countInStock?: number;
        price: number;
        // Add any other necessary properties from your product object
    };
    showQty?: boolean;
    redirect?: boolean;
    increasePerClick?: boolean;
}

const AddToCart: React.FC<AddToCartProps> = ({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
   }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const router = useRouter();
    const [quantity, setQty] = useState(1);

    const addToCartHandler = async () => {
        let newQty = quantity;
    
        if (increasePerClick) {
            const existItem = cartItems.find((x: CartItem) => x.id === product.id);
    
            if (product.countInStock === undefined) {
                return alert("Product stock information is unavailable.");
            }
    
            if (existItem && existItem.quantity + 1 <= product.countInStock) {
                newQty = existItem.quantity + 1;
            } else {
                return alert("No more product exists");
            }
        }
    
        // Ensure countInStock is always a number
        const countInStock = product.countInStock ?? 0; // Defaulting to 0 if undefined
    
        // Assuming price is included in the product object
        if (typeof product.price !== 'number') {
            return alert("Product price information is missing or invalid.");
        }
    
        // Destructure price from the product object
        const { price, ...productWithoutPrice } = product;
    
        // Dispatch the addToCart action with the correct properties
        dispatch(addToCart({ ...productWithoutPrice, countInStock, price, quantity: newQty }));
    
        // Router instance
        const router = useRouter();
    
        // Redirect to the cart page if needed
        if (redirect) {
            router.push('/cart');
        }
    };
    
    
    

    return (
        <div>
            {showQty && (
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQty(Number(e.target.value))}
                    min={1}
                    max={product.countInStock}
                />
            )}
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;
