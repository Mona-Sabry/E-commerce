import React from 'react'
import { ProductCardProps } from '../ProductCard/productCard.types';

export default function Discount({ product }: ProductCardProps) {

  if (!product.priceAfterDiscount) return null;

  const price = Number(product.price);
  const discounted = Number(product.priceAfterDiscount);

  const discount = Math.round(
    ((price - discounted) / price) * 100
  );

  return (
    <div className='w-fit px-2 py-1 bg-red-600 text-white rounded-sm absolute top-3 left-2 text-xs font-bold z-10'>
      -{discount}%
    </div>
  );
}