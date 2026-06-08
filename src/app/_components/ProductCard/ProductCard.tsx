'use client'
import React from "react";
import { ProductCardProps } from "./productCard.types";
import Rating from "../Rating/Rating";
import AddButton from "./AddButton";
import SideIcons from "@/app/_components/SideIcons/SideIcons";
import Discount from "../Discount/Discount";
import Link from "next/link";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative border rounded-lg w-55 h-90 m-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg ">
      <Link href={`/products/${product.id}`}>

      <div className="pl-10 pr-10">
        <img src={product.imageCover} alt={product.title} />
      </div>

      <div className="p-3">
        <div className="text-xs font-medium text-[#6a7282] ">
          {product.category.name}
        </div>
        {/* show 2 lines only */}
        <h2 className="text-base font-medium text-[#364153] line-clamp-2">
          {product.title}
        </h2>
        <div className="text-xs font-medium text-[#6a7282] flex gap-2 pt-2">
          <Rating
            rating={Number(product.ratingsAverage)}
            count={Number(product.ratingsQuantity)}
          />
        </div>

        <div className="flex items-center justify-between pt-3 pb-3">
          <h5>
            {product.priceAfterDiscount ? (
              <>
                <span className="text-lg font-bold pr-2 text-[#16a34a]">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="text-sm font-medium line-through text-[#6a7282]">
                  {product.price} EGP
                </span>
              </>
            ) : (
              <span className="text-lg font-bold">{product.price} EGP </span>
            )}
          </h5>
          <AddButton id={product._id}/>
        </div>
         </div>
</Link>
        <SideIcons productId={product._id} />
        <Discount product={product} />
      </div>
   
  );
}
