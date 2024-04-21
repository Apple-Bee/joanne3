import React from 'react';

// Define the type for an individual item
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// Define the type for props
interface Props {
  checkoutItems: Product[]; // Define checkoutItems prop as an array of Product
}

// Define the CheckoutPage component
const CheckoutPage: React.FC<Props> = ({ checkoutItems }) => {
  return (
    <div>
      <h2>Checkout Items</h2>
      <ul>
        {checkoutItems && checkoutItems.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: ${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutPage;







