import React from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Props {
  item: Item;
}

const CheckoutItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>Price: ${item.price.toFixed(2)}</div>
      <div>Quantity: {item.quantity}</div>
    </div>
  );
};

export default CheckoutItem;

