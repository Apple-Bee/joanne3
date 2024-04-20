// pages/store.tsx (or store/index.tsx)
import React from 'react';
import styles from '@/app/store/store.module.css';
import Navbar from '@/components/navbar';




import ScrollListenerComponent from '@/components/ScrollListenerComponent';

const Store: React.FC = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 24.99, imageUrl: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, imageUrl: '/product3.jpg' },
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 24.99, imageUrl: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, imageUrl: '/product3.jpg' },
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 24.99, imageUrl: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, imageUrl: '/product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.categoriesSection}>
        <h2 className={styles.categoriesHeading}></h2>
        <ul className={styles.categoriesList}>
        </ul>
      </section>
      <h1 className={styles.home_h1}></h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={'/joann.jpg'} alt={product.name} className={styles.productImage} />
            <h2 className={styles.home_h2}>{product.name}</h2>
            <p className={styles.home_p}>${product.price.toFixed(2)}</p>
            <button className={styles.buy_btn}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

