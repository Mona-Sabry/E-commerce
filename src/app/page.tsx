import Image from "next/image";
import Subnav from "./_components/Subnav/Subnav";
import { MdLocalShipping } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { getAllProducts } from "@/api/services/route.services";
import ProductCard from "./_components/ProductCard/ProductCard";
import MySwiper from "./_components/MySwiper/MySwiper";
import image1 from "@images/banner-4.jpeg";
import image2 from "@images/blog-img-2.jpeg";
import image3 from "@images/slider-2.jpeg";
import CategoriesSubPart from "./_components/CategoriesSubPart/CategoriesSubPart";
import AnimatedCard from './_components/AnimatedCard/AnimatedCard'

const style =
  "flex items-center gap-4 p-3 shadow-sm rounded-xl flex flex-row gap-3 items-center bg-white hover:shadow-md";

export default async function Home() {
  const allProducts = await getAllProducts();

  return (
    <div>
      {/* part 1 carousel */}
      <MySwiper
        imageList={[
          {
            src: image1.src,
            title: "Fresh Products Delivered to your Door",
            subTitle: "Get 20% off your first order",
            buttonLeft: "Shop Now",
            buttonRight: "View Deals",
            buttonLeftTextColor: "#00C950",
          },
          {
            src: image2.src,
            title: "Premium Quality Guaranteed",
            subTitle: "Fresh from farm to your table",
            buttonLeft: "Shop Now",
            buttonRight: "Learn More",
            buttonLeftTextColor: "#2B7FFF",
          },
          {
            src: image3.src,
            title: "Fast &amp; Free Delivery",
            subTitle: "Same day delivery available",
            buttonLeft: "Order Now",
            buttonRight: "Delivery Info",
            buttonLeftTextColor: "#AD46FF",
          },
        ]}
      />

      {/* part 2  */}
      <div className="bg-[#F9FAFB] py-8 ">
        <div className="container mx-auto px-6">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className={style}>
              <MdLocalShipping className="w-[50] h-[50] text-2xl text-[#2B7FFF] bg-[#EFF6FF] p-3 rounded-full" />
              <div>
                <h3 className="text-sm font-semibold">Free Shipping</h3>
                <h6 className="text-xs font-medium">On orders over 500 EGP</h6>
              </div>
            </div>

            <div className={style}>
              <FaShieldAlt className="w-[50] h-[50] text-2xl text-[#16A34A] bg-[#DCFCE7] p-3 rounded-full" />
              <div>
                <h3 className="text-sm font-semibold">Secure Payment</h3>
                <h6 className="text-xs font-medium">
                  100% secure transactions
                </h6>
              </div>
            </div>

            <div className={style}>
              <IoMdRefresh className="scale-x-[-1] w-[50] h-[50] text-2xl text-[#FF6900] bg-[#FFF7ED] p-3 rounded-full" />
              <div>
                <h3 className="text-sm font-semibold">Easy Returns</h3>
                <h6 className="text-xs font-medium">14-day return policy</h6>
              </div>
            </div>

            <div className={style}>
              <MdHeadsetMic className="w-[50] h-[50] text-2xl text-[#AD46FF] bg-[#FAF5FF] p-3 rounded-full" />
              <div>
                <h3 className="text-sm font-semibold">24/7 Support</h3>
                <h6 className="text-xs font-medium">Dedicated support team</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}
      <CategoriesSubPart />

      {/* part 4 */}
      <div className="container mx-auto px-5 my-5 overflow-x-hidden">
  <div className='flex flex-col lg:flex-row gap-5'>

    <AnimatedCard className='w-full lg:flex-1' direction="left">
      <div className='relative overflow-hidden bg-gradient-to-br from-[#00AB72] via-[#009867] to-[#007D57] text-white rounded-xl p-6'>
        <div className="absolute -right-15 top-2 -translate-y-1/2 w-40 h-40 bg-[#1AA377] rounded-full"></div>
          <div className="absolute -left-15 -bottom-40 -translate-y-1/2 w-40 h-40 bg-[#1AA377] rounded-full z-0"></div>
<div className='relative'>
        <div className="w-40 mb-4 px-2 py-1 text-sm font-medium flex items-center gap-2 bg-[#33C493] rounded-xl">
          <span>🔥</span>
          <h5>Deal of the Day</h5>
        </div>

        <h2 className="text-3xl font-bold pb-3">
          Fresh Organic Fruits
        </h2>

        <p className="text-base font-medium text-[#fffc] pb-3">
          Get up to 40% off on selected organic fruits
        </p>

        <span className="text-3xl font-bold pb-3 block">
          40% OFF
          <span className="text-sm font-medium text-[#ffffffb3]">
            Use code:
          </span>
          <span className="text-sm font-bold">ORGANIC40</span>
        </span>

        <div className="flex gap-2 items-center text-[#009966] bg-white rounded-xl px-4 py-2 w-fit mt-4">
          <Link href='/allProducts' className="text-base font-medium">
            Shop Now
          </Link>
          <FaArrowRightLong />
        </div>
</div>
      </div>
    </AnimatedCard>

    <AnimatedCard className='w-full lg:flex-1' direction="right">
      <div className='relative overflow-hidden bg-gradient-to-br from-[#FF8514] via-[#FF693B] to-[#FF4A4C] text-white rounded-xl p-6'>
          <div className="absolute -right-15 top-2 -translate-y-1/2 w-40 h-40 bg-[#FF7055] rounded-full"></div>
          <div className="absolute -left-16 -bottom-40 -translate-y-1/2 w-40 h-40 bg-[#FF7650] rounded-full z-0"></div>
<div className='relative'>
        <div className="w-40 mb-4 px-2 py-1 text-sm font-medium flex items-center gap-2 bg-[#FF9A4A] rounded-xl">
          <span>✨</span>
          <h5>New Arrivals</h5>
        </div>

        <h2 className="text-3xl font-bold pb-3">
          Exotic Vegetables
        </h2>

        <p className="text-base font-medium text-[#fffc] pb-3">
          Discover our latest collection of premium vegetables
        </p>

        <span className="text-3xl font-bold pb-3 block">
          25% OFF
          <span className="text-sm font-medium text-[#ffffffb3]">
            Use code:
          </span>
          <span className="text-sm font-bold"> FRESH25</span>
        </span>

        <div className="flex gap-2 items-center text-[#FF6900] bg-white rounded-xl px-4 py-2 w-fit mt-4">
          <Link href='/allProducts' className="text-base font-medium">
            Explore Now
          </Link>
          <FaArrowRightLong />
        </div>
</div>
      </div>
    </AnimatedCard>

  </div>
</div>

      {/* part 5 */}
      <div className="container mx-auto ">
        <div className="flex items-center gap-3 ">
          {/* side line*/}
          <div className="w-1.5 h-8 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-3xl font-bold ml-3">
            Featured <span className="text-[#009966]">Products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-2 p-6">
          {allProducts?.map((product) => (
              <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

