import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/app/page.module.css';

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
  // Check if items array is empty or undefined
  if (!items || items.length === 0) {
    return (
      <div>
        <Navbar />
        <div className={styles.container}>Cart is empty</div>
      </div>
    );
  }

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
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
    </div>
  );
};

export default Cart;

