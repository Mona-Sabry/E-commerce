import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function emptywishlist() {
  return (
    <div className='bg-gray-50'>
        <hr className='border-t border-gray-300 drop-shadow-xl'/>
        <div className='w-20 h-20 bg-gray-100 text-gray-400 text-3xl rounded-xl p-2.5 mb-4 flex items-center justify-center mt-20 mx-auto'>
      <FaRegHeart />
      </div>
<h2 className='text-xl font-bold text-center mb-3'>Your wishlist is empty</h2>
<p className='text-sm font-medium text-center text-[#6a7282]'>Browse products and save your favorites here. Sign in to <br/> sync your wishlist across devices.</p>
<Link href='/allProducts' className='flex justify-center mt-5'>
<button className='w-100 h-12 flex items-center justify-center text-base font-semibold cursor-pointer gap-2 text-white bg-[#45B56E] rounded-xl hover:bg-[#15803D]'>
    Browse Product
    <FaArrowRightLong />
    </button>
   </Link>
   <Link href='/signin' className='flex justify-center mt-5'>
   <button className='w-100 h-12 border border-gray-400 text-base font-semibold cursor-pointer bg-white rounded-xl mb-100'>Sign In</button>

   </Link>
    </div>
  )
}
