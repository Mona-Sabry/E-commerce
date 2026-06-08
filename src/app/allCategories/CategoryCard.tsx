import React from 'react'
import {categoryType} from "@/api/types";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


interface CategoryCardProps {
  category: categoryType;
}
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className='group w-full h-92.5 border rounded-2xl my-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-green-300'>
      <div className='overflow-hidden w-[90%] h-55 mt-6 mx-auto rounded-2xl' >
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         src={category.image} alt={category.name} />
</div>
        <h3 className='text-base font-bold text-center m-3 group-hover:text-[#16A34A]'>{category.name}</h3>
        <div className='flex items-center justify-center gap-2 text-[#16A34A] text-xs font-medium opacity-0 group-hover:opacity-100'>
        <Link href='/SubCategory'>View Subcategories</Link>
        <FaArrowRightLong />
        </div>
      </div>
      
   
  )
}
