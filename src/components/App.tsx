'use client'
import React, { ReactNode, useEffect } from 'react';
import CartSidebar from './CartSidebar';
import { useDispatch } from 'react-redux';
import Navbar from './navbar';
//import '@/styles/globals.css';
import { hideLoading } from '@/redux/slices/cartSlice';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  return (
    <div>
        
      <div className="container">
        <Navbar />
        
        <main>{children}</main>
        <div className="cart-sidebar-container">
        <CartSidebar />
        </div>
      </div>
      
    </div>
  );
};

export default App;



