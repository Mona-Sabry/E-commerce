'use client'

import { useState } from "react";
import ProductActions from "../ProductActions/ProductActions";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

type Props = {
  product: any;
  count: number;
  itemId: string;
  price: number;
};

export default function CartClient({
  product,
  count,
  itemId,
  price,
}: Props) {

  const [quantity, setQuantity] = useState(count);
const router = useRouter();

function handleQuantityChange(newCount: number) {
  setQuantity(newCount);    
  updateCount(newCount);   
}

  
async function updateCount(newCount: number) {
  if (newCount < 1) return;

  setQuantity(newCount);

  const token = localStorage.getItem("token");
  if (!token) return;

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${product._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token, 
      },
      body: JSON.stringify({
        count: newCount,
      }),
    }
  );

  const data = await res.json();
  console.log("UPDATE RESPONSE:", data);
}

async function handleDelete(productId: string) {
  const token = localStorage.getItem("token");

  console.log("DELETE PRODUCT ID:", productId);

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token || "",
      },
    }
  );

  const data = await res.json();

  console.log("DELETE RESPONSE:", data);

  router.refresh(); 
}
  return (
    <div className="flex items-center justify-between w-full">

      {/* quantity */}
      <div className="w-36 h-10 flex items-center justify-center">

        <ProductActions
          product={product}
          quantity={quantity}
           setQuantity={handleQuantityChange}
          hideLabel
          buttonClassplus="w-8 h-8 text-2xl text-white bg-[#16A34A] hover:bg-[#15803D] rounded-md flex items-center justify-center"
          buttonClassminus="w-8 h-8 text-3xl border rounded-md flex items-center justify-center"
        />

      </div>

      {/* total price */}
      <div className="flex items-center gap-4">

        <div className="min-w-[120px] text-right">

          <h5 className="text-xs font-medium text-[#99a1af]">
            Total
          </h5>

          <h4 className="text-xl font-bold">
            {(price * quantity).toLocaleString()}
            <span className="text-sm font-medium text-[#99a1af]">
              {" "}EGP
            </span>
          </h4>

        </div>

        {/* delete button */}
        {/* <button className="w-10 h-10 bg-red-100 rounded-lg border border-red-300 hover:bg-red-500 flex items-center justify-center group">

          <MdDelete className="text-red-500 text-2xl group-hover:text-white" />

        </button> */}
        {/* <div
  onClick={() => handleDelete(product._id)}
  className="w-10 h-10 bg-red-100 rounded-lg border border-red-300 hover:bg-red-500 flex items-center justify-center group cursor-pointer"
>
  <MdDelete className="text-red-500 text-2xl group-hover:text-white" />
</div> */}
<div
  onClick={() => handleDelete(itemId)}
  className="w-10 h-10 bg-red-100 rounded-lg border border-red-300 hover:bg-red-500 flex items-center justify-center group cursor-pointer"
>
  <MdDelete className="text-red-500 text-2xl group-hover:text-white" />
</div>
      </div>

    </div>
  );
}