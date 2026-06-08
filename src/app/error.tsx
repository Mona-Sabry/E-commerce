'use client'
import React from 'react'
import { FaCartShopping ,FaSeedling } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import Link from 'next/link';
import BackButton from './_components/BackButton/BackButton';
import { FaAppleAlt , FaLemon , FaCarrot  } from "react-icons/fa";

export default function Error({error , reset}: {error:Error , reset:()=>void}) {
  
  return (
    <div className='relative bg-[#F8FBFA]'>
       <hr className='border-t border-gray-300 '/>
      <FaAppleAlt className='absolute top-20 left-20 text-4xl text-[#BBF7D0] animate-[float_3s_ease-in-out_infinite]'/>
      <FaAppleAlt className='absolute top-80 left-60 text-xl text-[#d0f7e0] animate-[float_3s_ease-in-out_infinite]'/>
      <FaLemon className='absolute top-160 left-30 text-4xl text-[#BBF7D0] animate-[float_3s_ease-in-out_infinite]'/>
      <FaCarrot className='absolute top-40 right-20 text-4xl text-[#BBF7D0] animate-[float_3s_ease-in-out_infinite]' />
      <FaCarrot className='absolute top-80 right-40 text-xl text-[#d0f7e0] animate-[float_3s_ease-in-out_infinite]'/>
      <FaSeedling className='absolute top-160 right-60 text-4xl text-[#BBF7D0] animate-[float_3s_ease-in-out_infinite]' />

     
      <div className='w-60 h-40 relative bg-white shadow-lg rounded-2xl p-2.5 mb-4 flex items-center justify-center mt-20 mx-auto'>
        <FaCartShopping className='text-7xl text-[#6EE599]'/>
        <div className='absolute rounded-full bg-white -top-6 -right-6'>
          <div className='w-22 h-22 bg-white shadow-xl rounded-full flex items-center justify-center'>
            <h3 className='w-18 h-18 text-2xl font-black bg-[#1DB956] text-white rounded-full p-4 flex items-center justify-center'>404</h3>
          </div>
        </div>
      </div>

      <div className='flex gap-5 items-center justify-center'>
        <div className='w-3 h-3 bg-[#6EE599] rounded-full '></div>
        <div className="w-10 h-10  border-b-[3px] border-[#6EE599] rounded-full mb-3 "></div>
        <div className='w-3 h-3 bg-[#6EE599] rounded-full '></div>
      </div>

      <h1 className='text-5xl font-black text-center m-5'>Oops! Nothing Here</h1>
      <p className='text-lg font-medium text-[#6a7282] text-center mb-8'>Looks like this page went out of stock! Don't worry,<br/> there's plenty more fresh content to explore.</p>
    
    <div className='flex items-center justify-center gap-3 mb-8'>
      <Link href='/'>
      <button className='w-60 h-16 flex items-center justify-center text-base font-semibold cursor-pointer gap-2 text-white bg-[#1CB555] rounded-xl hover:bg-[#15803D] hover:-translate-y-1 transition-all duration-300'>
        <AiFillHome className='text-xl'/>
        <h4>Go to Homepage</h4>
      </button>
      </Link>
<BackButton/>
    </div>
    
<div className='w-180 h-auto border shadow-lg rounded-2xl flex flex-col items-center justify-center p-10 mb-20 ml-100'>
  <h4 className='text-sm font-medium text-[#99a1af] mb-5'>POPULAR DESTINATIONS</h4>
  <div className='flex gap-3'>
    <Link href='/allProducts' className='w-40 h-12 flex items-center justify-center rounded-lg py-3 px-5  text-[#3E9960] bg-[#F0FDF4] hover:bg-[#DCFCE7] text-center'>All Products
    </Link>
    <Link href='/allCategories' className='w-40 h-12 flex items-center justify-center rounded-lg py-3 px-5 bg-[#e7e9ee] hover:bg-[#d6d8dc] text-center'>Categories
    </Link>
     <Link href='/error' className='w-40 h-12 flex items-center justify-center rounded-lg py-3 px-5 bg-[#e7e9ee] hover:bg-[#d6d8dc] text-center'>Today's Deals
    </Link>
     <Link href='/contact' className='w-40 h-12 flex items-center justify-center rounded-lg py-3 px-5 bg-[#e7e9ee] hover:bg-[#d6d8dc] text-center'>Contact Us
    </Link>
  </div>
</div>

    </div>
  )
}
