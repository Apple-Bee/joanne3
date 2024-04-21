import React from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

interface Props {
  item?: Item; // Make the item prop optional
}

const CheckoutButton: React.FC<Props> = ({ item }) => {
  const handleCheckout = () => {
    // Implement checkout functionality
    console.log('Proceed to checkout');
  };

  return (
    <button onClick={handleCheckout}>Confirm Checkout</button>
  );
};

export default CheckoutButton;

