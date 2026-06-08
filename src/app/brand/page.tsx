import React from "react";
import { FaTags } from "react-icons/fa";
import { getAllBrands } from "@/api/services/route.services";
import Link from "next/link";
import BrandCard from "./BrandCard";

export default async function brand() {
  const allBrands = await getAllBrands();

  return (
    <div>
      <div className="w-full h-[240px] bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Brands</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaTags className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Top Brands
              </h1>
              <p className="text-white/80 mt-1">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ml-6 px-4 my-auto">
    {allBrands?.map((brand) => (
    <BrandCard  key={brand._id} brand={brand}/>))}
  </div>
</div>
    </div>
  );
}
