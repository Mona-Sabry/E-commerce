import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";

const styleFooter = 'w-[50px] h-[50px] text-2xl text-[#16A34A] bg-[#DCFCE7] p-3 rounded-lg';
export default function SubFooter() {
  return (
    <div className='bg-[#F0FDF4]'>
        <hr className='border-[#DCFCE7]'/>
        <div className="container mx-auto px-4" >
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  p-6 gap-y-5 gap-x-[50px]'>
      
        <div className='flex flex-row gap-3 items-center'>
  <MdLocalShipping className={styleFooter}/>
  <div>
    <h3 className='text-sm font-semibold'>Free Shipping</h3>
    <h6 className='text-xs font-medium'>On orders over 500 EGP</h6>
  </div>
        </div>
      

        <div className='flex flex-row gap-3 items-center'>
      <FaShieldAlt className={styleFooter} />
      <div>
    <h3 className='text-sm font-semibold'>Easy Returns</h3>
    <h6 className='text-xs font-medium'>14-day return policy</h6>
  </div>
        </div>

 <div className='flex flex-row gap-3 items-center'>
      <IoMdRefresh className={`${styleFooter} scale-x-[-1]`}/>
      <div>
    <h3 className='text-sm font-semibold'>Secure Payment</h3>
    <h6 className='text-xs font-medium'>100% secure checkout</h6>
  </div>
        </div>
      
       <div className='flex flex-row gap-3 items-center'>
     <MdHeadsetMic className={styleFooter}/>
     <div>
    <h3 className='text-sm font-semibold'>24/7 Support</h3>
    <h6 className='text-xs font-medium'>Contact us anytime</h6>
  </div>
        </div>
    </div>
    </div>
    </div>
  )
}
