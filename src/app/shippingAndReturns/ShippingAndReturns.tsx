import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaCheck , FaArrowRotateLeft ,FaShieldHalved} from "react-icons/fa6";

export default function ShippingAndReturns() {
  return (
    <div className="container mx-5 my-5">
      <div className='flex flex-row gap-5'>
        <div className='w-[48%] bg-[#E3FCEB] rounded-lg'>
<div className='flex gap-3 m-5 items-center'>
<div className='w-10 h-10 rounded-full bg-[#16A34A] text-white pt-2 pl-2 text-2xl '><FaTruck/></div>
<h3 className='text-base font-semibold'>Shipping Information</h3>
</div>

<ul className="space-y-3 m-5 font-medium text-sm">
  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Free shipping on orders over $50
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Standard delivery: 3-5 business days
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Express delivery available (1-2 business days)
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Track your order in real-time
  </li>
</ul>
        </div>


<div className='w-[48%] bg-[#E3FCEB] rounded-lg'>
<div className='flex gap-3 m-5 items-center'>
<div className='w-10 h-10 rounded-full bg-[#16A34A] text-white pt-2 pl-2 text-2xl '><FaArrowRotateLeft /></div>
<h3 className='text-base font-semibold'>Returns & Refunds</h3>
</div>

<ul className="space-y-3 m-5 font-medium text-sm">
  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
   30-day hassle-free returns
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Full refund or exchange available
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Free return shipping on defective items
  </li>

  <li className="flex items-center gap-2">
    <FaCheck className="text-[#16A34A]" />
    Easy online return process
  </li>
</ul>
</div>
</div>

<div className='w-[98%] bg-[#F9FAFB] rounded-lg p-5  my-5'>
  <div className='flex gap-3 m-5 items-center'>
  <div className='w-10 h-10 rounded-full bg-[#E5E7EB] text-gray-600 pt-2 pl-2 text-2xl '><FaShieldHalved/></div>
  <div>
<h3 className='text-base font-semibold'>Buyer Protection Guarantee</h3>
<p>Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.</p>
      </div>
      </div>
      </div>
    </div>
  )
}
