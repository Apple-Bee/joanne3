import React from 'react';
import CheckoutPage from '@/components/CheckoutPage';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
