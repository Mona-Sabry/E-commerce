'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { FiRefreshCw } from "react-icons/fi";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function SideIcons({
  productId,
}: {
  productId: string;
}) {

  const [clicked, setClicked] = useState(false);

  const { data: session } = useSession();

 const handleHeartClick = async (
  e: React.MouseEvent<HTMLButtonElement>
) => {

  e.preventDefault();

  setClicked(prev => !prev);

  try {
const { data: session } = useSession();

    const token = (session as any)?.routeToken;

    console.log("TOKEN =>", token);
    console.log("PRODUCT ID =>", productId);

   const res = await fetch(
  "https://ecommerce.routemisr.com/api/v1/wishlist",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ productId }),
  }
);

const data = await res.json();

console.log("STATUS:", res.status);
console.log("RESPONSE:", data);

  } catch (error) {
    console.log(error);
  }
};

  const handleRefreshClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
  };

  return (
    <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">

     
      <button
        onClick={handleHeartClick}
        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow cursor-pointer"
      >
        {clicked ? (
          <FaHeart className="text-red-600" />
        ) : (
          <FaRegHeart className="hover:text-red-600" />
        )}
      </button>

      <button onClick={handleRefreshClick}>
        <FiRefreshCw className="cursor-pointer text-gray-500 hover:text-green-600 bg-white w-8 h-8 p-2 rounded-full shadow" />
      </button>

     
      <FaRegEye className="cursor-pointer text-gray-500 hover:text-green-600 bg-white w-8 h-8 p-2 rounded-full shadow" />

    </div>
  );
}
