// pages/index.tsx

import React from 'react';
import styles from './page.module.css';


const Home: React.FC = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 24.99, imageUrl: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, imageUrl: '/product3.jpg' },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Use CSS to set background image */}
        
        <div className={styles.grid}>
          {products.map((product) => (
            <div className={styles.card} key={product.id}>
              <img src={'./joann.jpg'} alt={product.name} className={styles.productImage} />
              <h2 className={styles.home_h2}>{product.name}</h2>
              <p className={styles.home_p}>${product.price.toFixed(2)}</p>
              <button className={styles.home_btn}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;


