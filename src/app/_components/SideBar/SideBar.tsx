"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuAlignJustify } from "react-icons/lu";
import { MdHeadsetMic } from "react-icons/md";


const iconStyle =
  "hover:text-green-600 cursor-pointer hover:bg-green-50 rounded-lg pl-3 flex items-center h-10";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className=" bg-green-600 text-white p-3 rounded-full cursor-pointer  md:hidden"
        onClick={() => setOpen(true)}
      >
        <LuAlignJustify />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-[9998]"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-74 bg-white z-[9999] shadow-lg transform transition-transform duration-300 overflow-y-auto ml-6
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="bg-white  px-4 py-2 rounded-xl inline-block">
            <Image
              src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
              alt="Freshcart"
              width={180}
              height={70}
              className="w-30 sm:w-40 "
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Search Input */}
        <div className="relative p-4 border-b">
          <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-[#16a34a] w-8 h-8 p-2 mr-3 rounded-lg hover:bg-[#15803d] " />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-3 p-4">
          <Link href='/' className={iconStyle} onClick={()=>setOpen(false)}>Home</Link>
          <Link href='/allProducts' className={iconStyle} onClick={()=>setOpen(false)}>Shop</Link>
          <Link href='/allCategories' className={iconStyle} onClick={()=>setOpen(false)}>Categories</Link>
          <Link href='/brand' className={iconStyle} onClick={()=>setOpen(false)}>Brands</Link>
        </ul>

        <hr className="my-2" />

        {/* Wishlist & Cart */}

        <div className="flex gap-2 h-12 items-center m-3 hover:bg-green-50 group rounded-lg px-2">
          <FaRegHeart className="flex items-center text-red-600 bg-red-100 w-7 h-7 p-2 rounded-full ml-2" />
          <h3 className="text-sm">WishList</h3>
        </div>
        <div className="flex gap-2  h-12 items-center m-3 hover:bg-green-50 group rounded-lg px-2">
          <FaCartShopping className="flex items-center text-[#16a34a] bg-[#F3F4F6]  w-7 h-7 p-2 rounded-full ml-2" />
          <h3 className="text-sm">Cart</h3>
        </div>

        <hr className="my-2" />

        {/* Sign In / Sign Up */}
        <div className="p-4 flex gap-2">
          <button className="flex-1 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition">
            Sign In
          </button>
          <button className="flex-1 border border-green-600 text-green-600 p-2 rounded-lg hover:bg-green-50 transition">
            Sign Up
          </button>
        </div>

        {/* Support */}
        <div className="p-4 flex items-center gap-3 bg-gray-50 rounded-lg m-3 hover:bg-green-50 transition cursor-pointer">
          <MdHeadsetMic className="text-green-600 w-8 h-8 p-2 bg-green-100 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Need Help?</span>
            <span className="text-green-600 text-sm">Contact Support</span>
          </div>
        </div>
      </div>
    </>
  );
}
