'use client'
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import ProductRate from "@/components/ProductRate";
import { data } from "@/utils/data";
import AddToCart from "./AddToCart";

interface ProductItemProps {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    rating: number;
    numReviews: number;
    brand: string;
    // Add other properties of the product as needed
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/joann.jpg`}
          width={125}
          height={125}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col item-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews}/>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <AddToCart showQty={false} product={product} increasePerClick={true} redirect= {false}/>
      </div>
    </div>
  );
};

export default ProductItem;

