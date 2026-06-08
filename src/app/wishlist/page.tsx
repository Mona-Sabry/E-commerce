import React from 'react'
import Link from "next/link";
import { FaHeart} from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { getUserCart } from '@/api/services/route.services';
import CartClient from '../_components/CartClient/CartClient';
import { CartResponse } from '@/api/types';
import { BsArrowLeft } from "react-icons/bs";




export default async function wishlist() {
  const userCart = await getUserCart();

  if(!userCart){
    return;
  }
  

 const {totalCartPrice , products } = (userCart as CartResponse)

 

  const clientTotal = products.reduce((sum, item) => {
  return sum + item.price * item.count;
}, 0);

  return (
    <div>
         <hr className='shadow-2xl border-y'/>
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-0 sm:py-6">
        <nav className="flex items-center gap-2  mb-6 text-sm font-medium">
          <Link className="hover:text-[#16A34A] transition-colors text-gray-600" href="/">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium">Wishlist</span>
        </nav>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#FEF2F2] text-[#FB2C36] backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            <FaHeart  className="text-3xl" />
          </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Shopping Cart
            </h1>
            </div>
    <h3 className='text-base font-medium text-[#6a7282] pt-2'>{products.length} items saved</h3>


 <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

{/* left side */}
<div className="col-span-2 gap-5  mt-5 ">

{products.map((item) => (

  <div
    key={item._id}
    
    className="border border-gray-200 shadow-md mb-3 rounded-xl p-4 flex justify-between items-center gap-4"
  >

    <div className="font-medium bg-[#F9FAFB] rounded-xl">
    <img
      src={item.product.imageCover}
      alt={item.product.title}
      className="w-[80%] max-h-48 p-3 ml-3 object-cover rounded-lg"
    />
</div>
    <div className="flex-1">
      <h3 className='text-lg font-semibold hover:text-[#16A34A]'>{item.product.title}</h3>
      <h3 className='w-32 text-center p-1.5 rounded-xl my-3 text-xs font-medium text-[#16A34A] bg-[#F0FDF4]'>{item?.product?.category?.name}</h3>
      <h3 className='text-lg font-bold text-[#16A34A] mb-5 '>{item.price} EGP</h3>
   
   <div>
      <CartClient product={item.product} count={item.count} itemId={item._id}   price={item.price}/>
    </div>
    </div>

  </div>
))}

<hr className='m-5'/>

<div className='flex justify-between'>
<Link href='/' className='flex items-center gap-2 hover:text-[#16A34A] '>
<BsArrowLeft/>
Continue Shopping
</Link>

<div className='flex items-center gap-2 text-gray-400 hover:text-red-500 group'>
  <MdDelete className='group-hover:scale-110' />
  Clear all items
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)};