import { getAllCategories } from "@/api/services/route.services";
import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";
import CategoryCard from "./CategoryCard";

export default async function allCategories() {
  const allCategories = await getAllCategories();

  return (
    <div>
      <div className="w-full h-60 bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white pt-0">
        <div className="container mx-auto px-4 sm:py-16 ">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 ">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Categories</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaBoxOpen className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                All Categories
              </h1>
              <p className="text-white/80 mt-1">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ml-6 px-4">
          {allCategories?.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
