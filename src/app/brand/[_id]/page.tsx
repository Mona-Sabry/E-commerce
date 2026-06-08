// import React from 'react';
// import Link from 'next/link';
// import { getSpecificBrand } from '@/api/services/route.services';
// import {getProductsByBrand} from  '@/api/services/route.services';
// import ProductCard from '@/app/_components/ProductCard/ProductCard';
// import { ProductType, brandType } from "@/api/types";


// interface BrandDetailsProps{
//    params : {_id :string}
// }

// export default async function BrandDetails({params}: BrandDetailsProps) {
//     const brandData : brandType |undefined = await getSpecificBrand (params._id);
//     const products : ProductType[]= await getProductsByBrand (params._id);
 
//   return (
//     <div>
//       <div className="w-full h-[240px] bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
//         <div className="container mx-auto px-4 py-12 sm:py-16">
//           <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
//             <Link className="hover:text-white transition-colors" href="/">
//               Home
//             </Link>
//             <span className="text-white/40">/</span>
//             <Link className="hover:text-white transition-colors" href="/brand">
//               Brands
//             </Link>
//             <span className="text-white/40">/</span>
//             <span className="text-white font-medium">{brandData.name}</span> 
//           </nav>
//           <div className="flex items-center gap-5">
//             <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
//              <img className="w-[80%] h-[80%]  object-cover "
//          src={brandData.image} alt={brandData.name} />
//             </div>
//             <div>
//               <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
//               {brandData.name}
//               </h1>
//               <p className="text-white/80 mt-1">
//               Shop {brandData.name} products
//               </p>
//             </div>
//           </div>
//         </div>
//        </div>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//          {products.map((product) => (
//            <ProductCard key={product.id} product={product} />
//         ))}
//        </div>
    
//     </div>
//   )
// }
import React from 'react';
import Link from 'next/link';
import { getSpecificBrand, getProductsByBrand } from '@/api/services/route.services';
import ProductCard from '@/app/_components/ProductCard/ProductCard';
import { ProductType, brandType } from "@/api/types";

interface BrandDetailsProps {
  params: { _id: string }
}

export default async function BrandDetails({ params }: BrandDetailsProps) {
 
  const brandData: brandType | undefined = await getSpecificBrand(params._id);
  console.log("brandData from API:", brandData);
  
  if (!brandData) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Brand not found
      </div>
    );
  }


  const products: ProductType[] = await getProductsByBrand(params._id);

  return (
    <div>
  
      <div className="w-full h-[240px] bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
        
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <Link className="hover:text-white transition-colors" href="/brand">Brands</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">{brandData.name}</span>
          </nav>

          {/* Brand Info */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              {brandData.image && (
                <img
                  className="w-[80%] h-[80%] object-cover"
                  src={brandData.image}
                  alt={brandData.name}
                />
              )}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{brandData.name}</h1>
              <p className="text-white/80 mt-1">Shop {brandData.name} products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found for this brand</p>
        )}
      </div>
    </div>
  );
}