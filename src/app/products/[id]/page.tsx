import React from 'react'
import { PiHouseLineFill } from "react-icons/pi";
import { FaChevronRight , FaBolt } from "react-icons/fa6";
import { getSpecificProduct } from '@/api/services/route.services';
import Rating from '@/app/_components/Rating/Rating';
import { GoDotFill } from "react-icons/go";
import { FaShippingFast , FaRegHeart , FaShareAlt} from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import AddToCartButton from '@/app/_components/ProductCard/AddToCartButton';
import ProductGallery from '@/app/_components/ProductGallery/ProductGallery';
import ProductActions from '@/app/_components/ProductActions/ProductActions';
import Details from '@/app/_components/Details/Details';

const style='w-[180px] h-[100px]  flex flex-row justify-center gap-2 items-center bg-white pl-0 pb-3';
const iconStyle = 'w-[40] h-[40] text-2xl text-[#16A34A] bg-[#DCFCE7] p-3 rounded-full';

export default async function ProductDetails({params}:{params:Promise<{id:string}>}) {
    
    const id =(await params).id;
    const productDetails = await getSpecificProduct(id);
    const inStock = Number(productDetails?.quantity) > 0;

    const price = Number(productDetails?.price);
const discounted = Number(productDetails?.priceAfterDiscount);

const discount =
  price && discounted
    ? Math.round(((price - discounted) / price) * 100)
    : 0;

  return (
    <div className="container mx-auto">
<div className='flex gap-2 text-sm font-medium p-2 text-gray-500 items-center'>
    <div className='flex gap-2 hover:text-[#16a34a] items-center'>
    <PiHouseLineFill />
    <span>Home</span>
    </div>

    <FaChevronRight />

    <div className='hover:text-[#16a34a]'>
        <p>{productDetails?.category.name}</p>
    </div>

<FaChevronRight />
{/* subcategory */}
    <div className='hover:text-[#16a34a]'>
        <p>{productDetails?.subcategory?.[0].name}</p>
    </div>

    <FaChevronRight />

    <div className='text-black'>
        <p>{productDetails?.title}</p>
    </div>
</div>


    <div className='grid grid-cols-3 gap-4'>
<div className='col-span-1 border rounded-xl m-3 pt-3 shadow-sm sticky top-4'>
  <ProductGallery
    images={productDetails?.images || []}
    title={productDetails?.title || ""}
  />
</div>


      <div  className='col-span-2 border rounded-xl m-3 shadow-sm'>
        <div className='flex gap-3 p-6'>
        <h3 className='w-fit bg-[#F0FDF4] text-[#16a34a] font-medium text-xs p-2 text-center rounded-xl'>{productDetails?.category?.name}</h3>
        <h3 className='w-fit bg-[#F3F4F6] text-[#364153] font-medium text-xs p-2 text-center rounded-xl'>{productDetails?.brand?.name}</h3>
</div>

        <h2 className='text-3xl font-bold pl-6 pt-0'>{productDetails?.title}</h2>
    

<div className="text-sm font-medium text-[#6a7282] flex gap-2 pt-2 pl-6">
<Rating 
rating={Number(productDetails?.ratingsAverage)}
count={Number(productDetails?.ratingsQuantity)}
 label="reviews"
/>
   </div>

<div className="flex items-center gap-6 my-5 ml-5">
  {productDetails?.priceAfterDiscount ? (
    <>
      <span className="text-3xl font-bold  ">
        {productDetails.priceAfterDiscount} EGP
      </span>

      <span className="text-lg line-through text-gray-500">
        {productDetails.price} EGP
      </span>

      <div className="w-fit text-sm font-medium  px-2 py-1 bg-red-600 text-white rounded-3xl ml-2">
        save {discount}%
      </div>
    </>
  ) : (
    <span className="text-3xl font-bold">
      {productDetails?.price} EGP
    </span>
  )}
</div>

<div
  className={`flex gap-1 items-center pl-2 pr-2 ml-6 mb-6 w-fit rounded-xl 
  ${inStock ? "bg-[#F0FDF4] text-[#16a34a]" : "bg-red-100 text-red-500"}`}
>
  <GoDotFill className={inStock ? "text-[#16a34a]" : "text-red-500"} />

  <h4 className={inStock ? "text-[#16a34a]" : "text-red-500"}>
    {inStock ? "In Stock" : "Out of Stock"}
  </h4>
</div>

<hr className='w-[90%] text-center pl-6'/>
 <h3 className='text-base font-medium text-[#4a5565] p-6'>{productDetails?.description}</h3>

<ProductActions product={productDetails} />

<div className='flex flex-row gap-3 my-5 ml-5 mr-5'>
 <AddToCartButton id={productDetails?.id ||""}/>
  <button className='flex-1 flex items-center justify-center gap-2 bg-black text-white p-4 rounded-xl cursor-pointer  active:scale-98'>
    <FaBolt/>Buy Now</button>
</div>

 <div className='flex flex-row gap-3 my-5 ml-5 mr-5'>
<button className='flex-11 flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-xl cursor-pointer hover:text-[#16A367] hover:border-[#86EFAC]'>
  <FaRegHeart/>Add To Wishlist</button>
<button className='flex-1 flex items-center justify-center border border-gray-300 p-3 rounded-xl cursor-pointer hover:text-[#16A367] hover:border-[#86EFAC]'>
  <FaShareAlt/></button>
 </div>


<hr className='w-[90%] text-gray-200 mx-auto'/>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-y-3 gap-x-60'>
<div className={style}>
  <FaShippingFast className={iconStyle}/>
  <div>
    <h3 className='text-sm font-semibold'>Free Delivery</h3>
    <h6 className='text-xs font-medium'>Orders over $50</h6>
  </div>
        </div>
      
 <div className={style}>
      <IoMdRefresh className={`${iconStyle} scale-x-[-1]`}/>
      <div>
    <h3 className='text-sm font-semibold'>30 Days Return</h3>
    <h6 className='text-xs font-medium'>Money back</h6>
  </div>
        </div>
      
        <div className={style}>
      <FaShieldAlt className={iconStyle} />
      <div>
    <h3 className='text-sm font-semibold'>Secure Payment</h3>
    <h6 className='text-xs font-medium'>100% Protected</h6>
  </div>
        </div>
       
    </div>

    </div>
    </div>

   <Details id={id} />

   </div>
   
  )
}
