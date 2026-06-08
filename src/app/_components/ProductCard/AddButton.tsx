'use client'

import { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoCheckmarkSharp } from 'react-icons/io5'
import { MouseEvent } from 'react';
import { addProductToCart } from '@/app/cart/cart.actions';

interface addButtonProps{
  id:string;
}

export default function AddButton({id} : addButtonProps) {
  const [added, setAdd] = useState(false);
  const [loading , setLoading]= useState(false);

async function handleClick(e:MouseEvent){
  e.preventDefault();

  if (loading){
    return;
  }
  setLoading(true);

  try{
 await addProductToCart(id);
 
 setAdd(true);
 setTimeout(()=>{
setAdd(false)},
1500);
  }
  catch (error: any) {
      console.log(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }

}
  return (
   
    <button
      onClick={handleClick} 
      disabled={loading}
      className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${added ? 'bg-[#15803D]' : 'bg-[#16a34a] '}text-white
                  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {added ? <IoCheckmarkSharp className="text-lg bg-[#1dd761] w-10 h-10 rounded-full p-2 " /> : <FaPlus className="text-lg" />}
   
    </button>
       
  )
}