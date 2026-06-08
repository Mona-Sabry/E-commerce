'use client';

import { useState } from "react";
import ProductActions from "../ProductActions/ProductActions";
import AddToCartButton from "../ProductCard/AddToCartButton";
import { FaBolt } from "react-icons/fa6";

type Props = {
  productDetails: any;
};

export default function ProductInfo({ productDetails }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ProductActions
        product={productDetails}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <div className='flex flex-row gap-3 my-5 ml-5 mr-5'>
        <AddToCartButton
          id={productDetails?.id || ""}
          quantity={quantity}
        />

        <button className='flex-1 flex items-center justify-center gap-2 bg-black text-white p-4 rounded-xl'>
          <FaBolt />
          Buy Now
        </button>
      </div>
    </>
  );
}