'use client';

import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { addProductToCart } from '@/app/cart/cart.actions';
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  id: string;
};

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin ", className)}
      {...props}
    />
  )
}

export default function AddToCartButton({ id }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleClick() {
    try {
      setStatus("loading");

      await addProductToCart(id); 

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.log(error);
      setStatus("idle");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={status === "loading"}
      className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-white transition-all duration-200
      ${
        status === "idle"
          ? "bg-[#16a34a] hover:bg-[#15803D]"
          : status === "loading"
          ? "bg-[#16a34a] cursor-not-allowed"
          : "bg-[#15803D]"
      } active:scale-95`}
    >
      {/* Loading */}
      {status === "loading" && <Spinner/>}

      {/* Idle */}
      {status === "idle" && (
        <>
          <FaCartShopping />
          Add To Cart
        </>
      )}

      {/* Success */}
      {status === "success" && (
        <>
          <IoCheckmarkSharp />
          Added to Cart
        </>
      )}
    </button>
  );
}



