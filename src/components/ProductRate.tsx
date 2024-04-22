'use client'

import '@smastrom/react-rating/style.css';

import React from 'react';
import {Rating} from '@smastrom/react-rating';



const ProductRate: React.FC<{ rate: number; count: number }> = ({ rate, count }) => {
  return (
    <div className="flex">
      <Rating style={{ maxWidth: 100 }} value={rate} readOnly /> {count} reviews
    </div>
  );
};

export default ProductRate;
