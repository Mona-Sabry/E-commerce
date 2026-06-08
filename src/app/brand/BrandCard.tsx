import React from 'react'
import { brandType } from '@/api/types'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


interface BrandCardProps {
    brand:brandType
}

export default function BrandCard({brand}: BrandCardProps) {
  return (
     <Link href={`/brand/${brand._id}`}>
   <div className='group w-full border rounded-2xl my-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-violet-300'>
     <div className='bg-[#F9FAFB] mt-5 pt-5 pb-10 mx-5 rounded-xl'>
      <div className='overflow-hidden w-[80%] h-[50%] mt-6 mx-auto transition-transform duration-500 group-hover:scale-110' >
        <img className="w-full h-full  object-cover "
         src={brand.image} alt={brand.name} />
</div>
</div>
        <h3 className='text-base font-bold text-center m-2 group-hover:text-[#7F22FE]'>{brand.name}</h3>
        <div className='flex items-center justify-center mb-5 gap-2 text-[#7F22FE] text-xs font-medium opacity-0 group-hover:opacity-100'>
      <h3>View Products</h3> 
        <FaArrowRightLong />
        </div>
      </div>
      </Link>
  )
}
