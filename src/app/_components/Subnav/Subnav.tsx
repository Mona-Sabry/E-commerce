import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaGift ,FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import UserStatus from '../userStatus/UserStatus';


export default async function Subnav() {

  return (
    <div className='container mx-auto py-3 px-4'>
    <div className='flex-row gap-6 justify-between items-center hidden md:flex'>
        <div className='flex flex-row items-center gap-5'>
        <div className='flex flex-row items-center gap-2 text-gray-600'>
 <MdLocalShipping className='text-[#16a34a]'/>
 <h3>Free Shipping on Orders 500 EGP</h3>
        </div>
     

      <div className='flex flex-row items-center gap-2 text-gray-600'>
<FaGift className='text-[#16a34a]' />
 <h3>New Arrivals Daily</h3>
        </div>
        </div>

        <div className='flex flex-row gap-5'>
            <div className='text-gray-600 flex flex-row gap-2 items-center hover:text-[#16a34a]'>
<FaPhone/>
<a href='tel:+18001234567'>+1 (800) 123-4567</a>
            </div>

<div className='text-gray-600 flex flex-row gap-2 items-center hover:text-[#16a34a]'>
    <CiMail />
  <a href="mailto:support@freshcart.com"> support@freshcart.com</a> 
</div>

 <div className="border-l border-gray-200 h-6 mx-2"></div>

<UserStatus/>
 
         </div>
    </div>
   </div>
  )
}
