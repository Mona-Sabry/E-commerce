'use client';
import { useState } from 'react';
import { FaBoxOpen} from "react-icons/fa6";
import { FaStar , FaTruck } from "react-icons/fa";
import ShippingAndReturns from '@/app/shippingAndReturns/ShippingAndReturns';


const productDetailsStyle ='flex justify-center items-center gap-3 text-[#16A34A] font-medium text-base py-5 px-3 cursor-pointer hover:bg-[#F7FEF9] ';

type Props = {
  id: string;
};

export default function Details({id}:Props) {
    const [activeTab, setActiveTab] = useState("details");
  return (
    <div>
      <div className='flex flex-row gap-20'>

  <button
    onClick={() => setActiveTab("details")}
    className={productDetailsStyle}
  >
    <FaBoxOpen /> Product Details
  </button>

  <button
    onClick={() => setActiveTab("reviews")}
    className={productDetailsStyle}
  >
    <FaStar /> Reviews
  </button>

  <button
    onClick={() => setActiveTab("shipping")}
    className={productDetailsStyle}
  >
    <FaTruck /> Shipping & Returns
  </button>

</div>

<hr />
{activeTab === "details" && (
  <div className="p-4">
  {/* <FeaturesOfProduct id={id} /> */}
  </div>
)}

{activeTab === "reviews" && (
  <div className="p-4">
    Reviews content...
  </div>
)}

{activeTab === "shipping" && (
  <div className="p-4">
    <ShippingAndReturns/>
  </div>
)}
    </div>
  )
}
