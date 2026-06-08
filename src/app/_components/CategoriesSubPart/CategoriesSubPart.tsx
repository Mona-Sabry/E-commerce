import React from 'react'
import { getAllCategories} from "@/api/services/route.services";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { Key } from 'lucide-react';

export default async function CategoriesSubPart() {

 const allCategories = await getAllCategories(); 

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between m-6">
         <div className="flex items-center">
  {/* side line*/}
  <div className="w-1.5 h-8 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
  <h2 className=" text-3xl font-bold ml-3">
    Shop By <span className="text-[#009966]">Category</span>
  </h2>
  </div>

<div className='flex items-center gap-2 text-[#16A34A]'>
<Link className='text-base font-medium' href='/allCategories'>View All Categories</Link>
<FaArrowRightLong />
</div>
</div>

<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-3 ml-6 mr-4'>
{allCategories?.map(category =><div className='h-35 border rounded-lg flex justify-center items-center flex-col hover:shadow-sm' key={category._id}>
<img className='w-20 h-20 rounded-full' src={category.image} alt={category.name}/>
<h3 className='pt-3'>{category.name}</h3>
</div>)}

    </div>
    </div>
  )
}
