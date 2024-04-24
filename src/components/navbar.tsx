'use client'
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useSelector } from 'react-redux';

interface CartItem {
  id: string;
  name: string;
  qty: number; // Add type for qty property
}

interface RootState {
  cart: {
    loading: boolean;
    cartItems: CartItem[];
  };
}

const Navbar: React.FC = () => {
  const { loading, cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.centerLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className={`${styles.link} ${styles.dropdown}`}>
            <h1 className={styles.h1shop}><span>Shop</span></h1>
            <div className={styles.dropdownContent}>
              <Link href="./store">Mugs</Link>
              <Link href="./store">Paintings</Link>
              <Link href="./store">Download</Link>
              <Link href="./store">Pencils</Link>
            </div>
          </div>
        </div>
        <div>
          <span className="cart-badge">
            {loading ? '' : cartItems.reduce((a: number, c: CartItem) => a + c.qty, 0)}</span> {/* Add types for a and c */}
          <Link href="/cart"><br />Cart</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;





