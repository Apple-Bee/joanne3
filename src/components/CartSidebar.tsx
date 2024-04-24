import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartState } from '@/redux/slices/cartSlice'; // Adjust the import path based on your project structure
import { removeFromCart } from '@/redux/slices/cartSlice'; // Adjust the import path based on your project structure
import { CartItem } from '@/redux/slices/cartSlice';
import Link from 'next/link';
import Image from 'next/image'; // Assuming you're using Next.js Image component

const CartSidebar: React.FC = () => {
  const { loading, cartItems, itemsPrice } = useSelector((state: { cart: CartState }) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const addToCartHandler = (item: CartItem, qty: number) => {
    // Implement your addToCartHandler logic here
  };

  return (
    <div className="cart-sidebar">
      {loading ? (
        <div className='loadingSidebar'> Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className='emptyCart'>Cart is empty</div>
      ) : (
        <>
          <div className='subtotal-container'>
            <div>subtotal</div>
            <div className='items-price'>${itemsPrice}</div>
            <div>
              <Link href="/cart" className='cart-btn'>
                Go to cart
              </Link>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-item'>
              <Link href={`/product/${item.id}`} className='dontknow'>
                {item.image ? (
                 <Image src={item.image} alt={item.name} width={50} height={50} className="p" />
                 ) : (
                  <div>No Image Available</div>
                )}
                 </Link>
                <select
                  value={item.quantity}
                  onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button className='delete-btn' onClick={() => removeFromCartHandler(item.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;







