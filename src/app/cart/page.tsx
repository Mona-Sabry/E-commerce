import React from 'react'
import Link from "next/link";
import { FaCartShopping , FaUser  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { getUserCart } from '@/api/services/route.services';
import CartClient from '../_components/CartClient/CartClient';
import { CartResponse } from '@/api/types';
import { BsArrowLeft } from "react-icons/bs";




export default async function cartShopping() {
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
          <span className="font-medium">Shopping Cart</span>
        </nav>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#16A34A] text-white backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            <FaCartShopping  className="text-3xl" />
          </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Shopping Cart
            </h1>
            </div>
    <h3 className='text-base font-medium text-[#6a7282] pt-2'>You have <span className='text-[#16A34A]'>{products.length}</span> in your cart</h3>


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


{/* right side */}
 <div className='col-span-1 border border-gray-200 rounded-xl mt-5 shadow-lg sticky top-4 max-h-[500px]'>
<h3 className='font-bold text-lg bg-black text-white p-4 rounded-t-xl mb-5'>Order Summary</h3>
<div className='flex flex-col'>
    <div className='flex justify-between text-[#4a5565] text-base px-4'>
        <h4 className='font-medium '>Subtotal ({products.length} items)</h4>
        <h4 className='font-semibold'>{totalCartPrice}</h4>
    </div>

     <div className='flex justify-between font-medium text-base text-[#4a5565] p-4'>
        <h4 >Shipping</h4>
        <h4 className='text-[#16A34A]'>Calculated at checkout</h4>
    </div>
<hr className='w-[90%] mx-auto'/>
    <div className='text-lg font-bold p-4 flex justify-between'>
        <h4 >Estimated Total</h4>
        <h4 className='text-[#16A34A]'> {clientTotal.toLocaleString()} EGP</h4>
    </div>
</div>

<Link href='/signin' className='w-[90%] h-12 text-base font-medium text-center bg-[#16A34A] pb-2 ml-5 text-white rounded-xl mb-5  flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-[#15803D]'>
<FaUser />Login to Checkout
</Link>

<div className='flex gap-2 mt-2 justify-center font-medium text-xs'>
    <h5 className='text-[#99a1af]'>Don't have an account?</h5>
    <Link href='/signup' className='text-[#16A34A] pb-3'>Sign up</Link>  
 </div> 
<hr className='w-[90%] mx-auto pb-3'/>
<div className='pb-5 pl-5 text-xs font-medium text-[#6a7282]'>
    <h4>✓ Your cart items will be saved</h4>
    <h4>✓ Track your orders easily</h4>
    <h4>✓ Access exclusive member deals</h4>
</div>
</div>
</div>

</div>
</div>  

</div>

 )
 }
