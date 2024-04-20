// CheckoutButton.tsx
import React from 'react';
//import checkout from '../app/cart/checkout';

const CheckoutButton: React.FC = () => {
  const handleCheckout = () => {
    // Implement checkout functionality
    console.log('Proceed to checkout');
  };

  return (
    <button onClick={handleCheckout}>Confirm Checkout</button>
  );
};

export default CheckoutButton;