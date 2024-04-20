// CheckoutItem.tsx
import React from 'react';

interface CheckoutItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      {/* Add buttons to modify quantity or remove item */}
    </div>
  );
};

export default CheckoutItem;