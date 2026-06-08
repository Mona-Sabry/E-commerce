'use client';

import { useState } from "react";


type Props = {
  product: any;
  hideLabel?: boolean;
   quantity: number;
  setQuantity: (value: number) => void;
  buttonClassplus?: string;
  buttonClassminus?: string;
};

export default function ProductActions({ product, hideLabel ,quantity, setQuantity, buttonClassplus , buttonClassminus}: Props) {

  const price = Number(
    product?.priceAfterDiscount ?? product?.price ?? 0
  );

  const total = price * quantity;

  return (
    <div>
      {/* Quantity */}
      <div className="ml-5 mb-3">
        
        {!hideLabel && (
        <h4 className="font-medium text-sm mb-2">Quantity</h4>
          )}
          <div className="flex items-center gap-3 border rounded-lg px-5 py-1 w-fit">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className={`px-3 py-1 text-3xl ${ buttonClassminus}`}
        >
          -
        </button>

        <span className="text-lg font-bold">{quantity}</span>

        <button
          onClick={() => setQuantity( quantity + 1)}
          className={`px-3 py-1 text-3xl ${ buttonClassplus}`}
        >
          +
        </button>
      </div>
</div>
      {/* Total */}
      {!hideLabel && (
      <div className='flex justify-between ml-5 bg-[#F9FAFB] p-4 rounded-lg mb-5 mr-5 mt-3'>
        <h4>Total Price:</h4>
        <span className='text-[#16A34A] text-2xl font-bold'>
          {total}.00 EGP
        </span>
      </div>
      )}
    </div>
  );
}