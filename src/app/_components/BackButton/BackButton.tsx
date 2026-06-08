'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {FaArrowLeft } from "react-icons/fa6";

export default function BackButton() {
const router = useRouter();
  return (
    <div>
       <button
      onClick={()=> router.back()}
       className='group w-40 h-16 border shadow-xl flex items-center justify-center text-base font-semibold cursor-pointer gap-2 bg-white rounded-xl hover:-translate-y-1 transition-all duration-300'>
        <FaArrowLeft className='text-xl transition-transform duration-300 group-hover:-translate-x-1'/>
        <h4>Go Back</h4>
      </button>
    </div>
  )
}
