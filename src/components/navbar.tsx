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
          <div className={`${styles.link} ${styles.dropdown}`}> {/* Apply styles.link class */}
            <h1 className={styles.h1shop}><span>Shop</span></h1>
            <div className={styles.dropdownContent}>
              <Link href="./store">Mugs</Link>
              <Link href="./store">Paintings</Link>
              <Link href="./store">Download</Link>
              <Link href="./store">Pencils</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;




