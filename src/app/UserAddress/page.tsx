"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGear, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import AddButton from "./AddButton";

export default function UserAddress() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-60 bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <span className="text-white/40">/</span>

            <span className="text-white font-medium">My Account</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-[70px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaUser className="text-3xl text-white" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                My Account
              </h1>

              <p className="text-white/80 mt-1">
                Manage your addresses and account settings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-0 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-1/5 flex flex-col">
            <div className="rounded-xl p-2 border border-gray-200 shadow-md">
              <h3 className="text-base font-bold p-3">My Account</h3>

              <hr />

              <Link
                href="/UserAddress"
                className="w-full flex items-center justify-between gap-3 mt-3 cursor-pointer rounded-xl p-3 hover:bg-[#F9FAFB] transition-all focus:bg-[#F0FDF4] group"
              >
                <div className="flex items-center gap-3">
                  <FaLocationDot className="w-10 h-10 rounded-lg p-3 bg-[#eceff1] text-[#808ba1] group-hover:bg-[#E5E7EB] group-focus:bg-[#22C55E] group-focus:text-white" />

                  <h4 className="text-base font-medium">My Addresses</h4>
                </div>

                <IoIosArrowForward className="text-gray-400" />
              </Link>

              <Link
                href="/UserAccount"
                className="w-full flex items-center justify-between gap-3 cursor-pointer rounded-xl p-3 hover:bg-[#F9FAFB] transition-all focus:bg-[#F0FDF4] group"
              >
                <div className="flex items-center gap-3">
                  <FaGear className="w-10 h-10 rounded-lg p-3 bg-[#eceff1] text-[#808ba1] group-hover:bg-[#E5E7EB] group-focus:bg-[#22C55E] group-focus:text-white" />

                  <h4 className="text-base font-medium">Settings</h4>
                </div>

                <IoIosArrowForward className="text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-4/5 flex flex-col gap-5">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold mb-0">My Addresses</h2>

                <p className="text-sm font-medium">
                  Manage your saved delivery addresses
                </p>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="bg-[#16A34A] text-white rounded-xl px-5 py-2 text-base font-semibold"
              >
                + Add Address
              </button>
            </div>
            <AddButton open={open} setOpen={setOpen} />
            <div className="w-full border border-gray-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="w-[50px] h-[50px] bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-5">
  <FaLocationDot className="text-[#99A1AF] text-2xl block" />
</div>

              <h3 className="text-lg font-bold pb-1">No Addresses Yet</h3>

              <p className="text-gray-600 pb-3 mb-5 text-base font-medium">
                Add your first delivery address to make checkout <br />
                faster and easier.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="bg-[#16A34A] text-white rounded-xl px-5 py-2 text-base font-semibold"
              >
                + Add Your First Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
