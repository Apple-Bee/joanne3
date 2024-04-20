// CheckoutPage.tsx
import React from 'react';
import CheckoutItem from '../components/CheckoutItem';
import CheckoutSummary from '../components/CheckoutSummary';


const CheckoutPage: React.FC = () => {
  // Sample checkout data
  const checkoutItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 19.99 },
    { id: 2, name: 'Product 2', quantity: 1, price: 24.99 },
  ];

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {checkoutItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <CheckoutSummary checkoutItems={checkoutItems} />
    </div>
  );
};

export default CheckoutPage;