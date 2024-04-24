'use client'
import React, { ReactNode, useEffect } from 'react';
import CartSidebar from './CartSidebar';
import { useDispatch } from 'react-redux';
import Navbar from './navbar';
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
        <CartSidebar />
      </div>
      
    </div>
  );
};

export default App;



