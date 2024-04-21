import React from "react";
import Link from 'next/link';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

interface ProductItemProps {
  product: {
    id: number;
    image: string;
    name: string;
    // Add other properties of the product as needed
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <a>
          <Image
            src={product.image}
            width={400}
            height={400} // Corrected "hight" to "height"
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
    </div>
    //<div className="flex flex-col items-center justify-center p-55">
        //</div
    
  )
};

export default ProductItem;
