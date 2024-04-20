// CheckoutSummary.tsx
import React from 'react';

interface CheckoutSummaryProps {
  checkoutItems: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ checkoutItems }) => {
  // Calculate total price
  const totalPrice = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout Summary</h2>
      <p>Total Items: {checkoutItems.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CheckoutSummary;