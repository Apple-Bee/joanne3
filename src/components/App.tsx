import React, { ReactNode } from 'react';
import CartSidebar from './CartSidebar';
import Navbar from './navbar';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
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



