import Link from "next/link";
import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { getAllProducts } from "@/api/services/route.services";
import ProductCard from "../_components/ProductCard/ProductCard";

export default function allProducts() {
  return (
    <div className="w-full h-[240px] bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <Link className="hover:text-white transition-colors" href="/">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-medium">All Products</span>
        </nav>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            <FaBoxOpen className="text-3xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              All Products
            </h1>
            <p className="text-white/80 mt-1">
              Explore our complete product collection
            </p>
          </div>

          <h3 className="text-sm font-medium text-[#6A7282]">
            Showing 40 products
          </h3>

          {/* <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-2 p-6">
            {allProducts?.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
