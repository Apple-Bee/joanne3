'use client'

import 'smastrom/react/style.css'
import {Rating} from '@smastrom/react-rating'
interface ProductRateProps {
    rate: number;
    count: number;
}

const ProductRate: React.FC<ProductRateProps> = ({ rate, count }) => {
    return (
      <div className="flex">
        <Rating style={{ maxWidth: 100 }} value={rate} readOnly /> {count}{' '}
        reviews
      </div>
    );
  };
  
  export default ProductRate;
