import React from 'react'
import { FaBoxOpen ,FaArrowRightLong} from "react-icons/fa6";
import Link from 'next/link';
import { getUserCart } from '@/api/services/route.services';

export default async function emptyCart() {
  await getUserCart();
  return (
    <div className='bg-gray-50'>
        <hr className='border-t border-gray-300 drop-shadow-xl'/>
        <div className='w-20 h-20 bg-gray-100 text-gray-400 text-3xl rounded-full p-2.5 mb-4 flex items-center justify-center mt-20 mx-auto'>
      <FaBoxOpen />
      </div>
<h2 className='text-xl font-bold text-center mb-3'>Your cart is empty</h2>
<p className='text-sm font-medium text-center text-[#6a7282]'>Looks like you haven't added anything to your cart yet.
 <br/> Start exploring our products!</p>
<Link href='/' className='flex justify-center mt-5'>
<button className='w-100 h-12 flex items-center justify-center text-base font-semibold cursor-pointer gap-2 mb-5 text-white bg-[#45B56E] rounded-xl hover:bg-[#15803D]'>
   Start Shopping
    <FaArrowRightLong />
    </button>
   </Link>
   
    </div>
  )
}
