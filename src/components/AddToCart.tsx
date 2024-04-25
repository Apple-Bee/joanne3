import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

interface RootState {
    cart: {
        cartItems: CartItem[];
    };
}

interface AddToCartProps {
    product: {
        id: string;
        name: string;
        countInStock: number; // Ensure countInStock is always a number
        price: number;
        numReviews: number;
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
    const cartItems = useSelector((state: RootState) => state.cart.cartItems );
    const router = useRouter();
    const [quantity, setQty] = useState(1);

    const addToCartHandler = async () => {
        let newQty = quantity;
    
        if (increasePerClick) {
            console.log("Cart Items:", cartItems); // Log the cartItems array
            const existItem = cartItems.find((x) => x.id === product.id);
            console.log("Existing Item:", existItem); // Log the existItem variable
    
            if (!existItem) {
                console.log("Product not found in cart");
            }
    
            if (existItem && existItem.quantity + 1 <= product.countInStock) {
                newQty = existItem.quantity + 1;
            } else {
                return alert("No more product exists or stock information is unavailable.");
            }
        }
    
        // Dispatch the addToCart action with the correct properties
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            countInStock: product.countInStock,
            quantity: newQty,
            // Add other properties as needed
        }));
    
        // Redirect to the cart page if needed
        if (redirect) {
            router.push('/cart');
        }
    };
    

    return (
        <>
            {showQty && (
                <div className="show-qty">
                    <div>QTY</div>
                    <select
                        value={quantity}
                        onChange={(e) => setQty(Number(e.target.value))}
                    >
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                {product.countInStock > 0 ? (
                    <button className="add-btn" onClick={addToCartHandler}>Add to Cart</button>
                ) : (
                    <button disabled>Out of Stock</button>
                )}
            </div>
        </>
    );
};

export default AddToCart;





