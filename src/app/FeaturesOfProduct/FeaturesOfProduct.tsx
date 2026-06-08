import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { getSpecificProduct } from '@/api/services/route.services';


type Props = {
  id: string;
};

export default async function FeaturesOfProduct({id}: Props) {
     const productDetails = await getSpecificProduct(id);
     
  return (
      <div className="container mx-5 my-5">
        <h2>About this Product</h2>
        <h3 className='text-base font-medium text-[#4a5565] p-6'>{productDetails?.description}</h3>

          <div className='flex flex-row gap-5'>
            <div className='w-[48%] bg-[#F9FAFB] rounded-lg'>
    <h3 className='text-base font-semibold m-5'>Shipping InformationProduct Information</h3>
    
    <ul className="space-y-3 m-5 font-medium text-sm">
      <li className="flex justify-between">
       Category
         <p>{productDetails?.category?.name}</p>
      </li>
    
      <li className="flex justify-between">
        Subcategory
         <p>{productDetails?.subcategory?.[0].name}</p>
      </li>
    
      <li className="flex justify-between">
        Brand
         <p>{productDetails?.brand?.name}</p>
      </li>
    
      <li className="flex justify-between">
        Items Sold
        
      </li>
    </ul>
    </div>
    
    
    <div className='w-[48%] bg-[#F9FAFB] rounded-lg'>
    <h3 className='text-base font-semibold'>Key Features</h3>
    
    <ul className="space-y-3 m-5 font-medium text-sm">
      <li className="flex items-center gap-2">
        <FaCheck className="text-[#16A34A]" />
        Premium Quality Product
      </li>
    
      <li className="flex items-center gap-2">
        <FaCheck className="text-[#16A34A]" />
        100% Authentic Guarantee
      </li>
    
      <li className="flex items-center gap-2">
        <FaCheck className="text-[#16A34A]" />
        Fast & Secure Packaging
      </li>
    
      <li className="flex items-center gap-2">
        <FaCheck className="text-[#16A34A]" />
        Quality Tested
      </li>
    </ul>
    </div>
    </div>
      
    </div>
  )
}
