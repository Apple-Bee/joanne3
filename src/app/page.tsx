import React from 'react';
import Navbar from '../components/navbar';
import styles from './page.module.css';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import {data} from '@/utils/data';
import Image from 'next/image';
import ProductItem from '@/components/ProductItem';

// Load CheckoutPage dynamically
//const CheckoutPage = dynamic(() => import('@/components/CheckoutPage'));

const Home: React.FC = () => {
  // Sample product data
  //const products = [
    //{ id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    //{ id: 2, name: 'Product 2', price: 24.99, imageUrl: '/product2.jpg' },
    //{ id: 3, name: 'Product 3', price: 29.99, imageUrl: '/product3.jpg' },
  //];
  const {products} = data;

  return (
    <div className={styles.container}>
      <Navbar />
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
      {/* Render CheckoutPage dynamically */}
      <div className='grid grid-cols-1 gap-4 ms:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
                <ProductItem key={product.id} product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.name,
                  rating: product.rating,
                  numReviews: product.numReviews,
                  brand: ' ',
                  countInStock: product.countInStock,
  
              }} />
          ))}
      </div>
        /*CheckoutPage checkoutItems={[]} my this is reserve test /*
    </div>
  
  );
};

export default Home;






