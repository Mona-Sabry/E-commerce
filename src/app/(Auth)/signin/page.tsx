import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGoogle, FaShieldAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdLocalShipping, MdOutlineAccessTimeFilled } from "react-icons/md";
import image from "../../../assets/images/login.png";
import { IoLockClosedSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import SigninForm from "./SigninForm";
import Link from "next/link";

export default function Signin() {
  process.env.NEXTAUTH_SECRET
  return (
    <div>
      <hr />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* left side */}
          <div className="flex flex-col w-[90%] rounded-2xl ml-15 mt-30">
            <div className="w-full h-[400px] relative">
              <Image
                src={image}
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                className="shadow-lg rounded-2xl w-full h-100"
              />
            </div>

            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h1>
              <h2 className="text-lg font-medium text-[#4a5565] mt-6">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </h2>

              <div className="flex gap-6 justify-center mt-6">
                <div className="flex gap-2">
                  <MdLocalShipping className="text-[#16a34a] text-xl" />
                  <h4 className="text-sm font-medium text-[#6a7282]">
                    Free Delivery
                  </h4>
                </div>
                <div className="flex gap-2">
                  <FaShieldAlt className="text-[#16a34a] " />
                  <h4 className="text-sm font-medium text-[#6a7282]">
                    Secure Payment
                  </h4>
                </div>
                <div className="flex gap-2">
                  <MdOutlineAccessTimeFilled className="text-[#16a34a] text-xl" />
                  <h4 className="text-sm font-medium text-[#6a7282]">
                    24/7 Support
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className=" rounded-2xl text-center shadow-lg ">
            <h2 className="mt-10 text-3xl font-bold mb-4">
              Fresh<span className="text-[#16a34a]">Cart</span>
            </h2>
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <h4 className="text-base font-medium text-[#4a5565] mt-2">
              Sign in to continue your fresh shopping experience
            </h4>

            <button className="w-[90%] border-2 rounded-md ml-10 h-12 mb-3 mt-5 flex items-center justify-center hover:border-[#3cf273] hover:bg-[#F0FDF4] hover:cursor-pointer">
              <FaGoogle className="text-[#E7000B] " />
              <h4 className="text-base font-medium pl-2">
                Continue With Google
              </h4>
            </button>

            <button className="w-[90%] border-2 rounded-md ml-10 h-12 mb-3 flex items-center justify-center hover:border-[#3cf273] hover:bg-[#F0FDF4] hover:cursor-pointer">
              <IoLogoFacebook className="text-xl text-[#155DFC] " />
              <h4 className="text-base font-medium pl-2">
                Continue With Facebook
              </h4>
            </button>

            <div className="flex items-center mt-4 mb-6">
              <hr className="flex-grow border-t ml-10 border-1 border-gray-200" />
              <span className="mx-3 text-[#9AA1A6] text-sm font-medium">OR CONTINUE WITH EMAIL</span>
              <hr className="flex-grow border-t mr-10 border-1 border-gray-200" />
            </div>

          <SigninForm/>

            <hr className="border-gray-100 mt-8 w-[90%] ml-10" />
            <h4 className="text-base font-medium my-6">
             New to FreshCart?
              <span className="text-[#16A34A] pl-3">
                <Link href='/signup'>
                 Create an account
                  </Link>
                 </span>
                  
            </h4>

            <div className="flex gap-6 justify-center mb-10">
                <div className="flex gap-2">
                  <IoLockClosedSharp className="text-[#6A7282] " />
                  <h4 className="text-xs font-medium text-[#6a7282]">
                    SSL Secured
                  </h4>
                </div>
                <div className="flex gap-2">
                  <FaUsers className="text-[#6a7282] " />
                  <h4 className="text-xs font-medium text-[#6a7282]">
                   50K+ Users
                  </h4>
                </div>
                <div className="flex gap-2">
                  <FaStar className="text-[#6a7282] " />
                  <h4 className="text-xs font-medium text-[#6a7282]">
                   4.9 Rating
                  </h4>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
