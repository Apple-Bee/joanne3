// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>     
          <div className={styles.centerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/cart">Cart</Link>

            <Link href="/store">Store</Link>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;


