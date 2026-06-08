import logo from "@images/customerService.png";
import Image from "next/image";
import { FaGoogle, FaShippingFast, FaStar } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import SignupForm from "./SignupForm";

export default function SignUp() {
  return (
    <div>
      <hr className="border-2 border-gray-200" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-15">
          {/* left side */}
          <div className="w-full">
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-[#16A34A]">FreshCart</span>
            </h1>
            <p className="text-xl font-medium py-3">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <div className="flex flex-col">
              <div className="flex gap-4 my-5">
                <FaStar className="w-12.5 h-12.5 bg-[#BBF7D0] text-[#16A34A] rounded-full p-3" />
                <div>
                  <h4 className="text-lg font-semibold">Premium Quality</h4>
                  <h5 className="text-base font-medium">
                    Premium quality products sourced from trusted suppliers.
                  </h5>
                </div>
              </div>
              <div className="flex gap-4 my-5">
                <FaShippingFast className="w-12.5 h-12.5 bg-[#BBF7D0] text-[#16A34A] rounded-full p-3" />
                <div>
                  <h4 className="text-lg font-semibold">Fast Delivery</h4>
                  <h5 className="text-base font-medium">
                    Same-day delivery available in most areas
                  </h5>
                </div>
              </div>
              <div className="flex gap-4 my-5">
                <FaShieldHalved className="w-12.5 h-12.5 bg-[#BBF7D0] text-[#16A34A] rounded-full p-3" />
                <div>
                  <h4 className="text-lg font-semibold">Secure Shopping</h4>
                  <h5 className="text-base font-medium">
                    Your data and payments are completely secure
                  </h5>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-md">
              <div className="flex gap-4 my-3 items-start">
                <div className="flex ml-3">
                  <Image
                    src={logo}
                    alt="CustomerService"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="flex flex-col">
                    <h4 className="text-base font-medium pb-1">
                      Sarah Johnson
                    </h4>
                    <div className="flex text-[#FFDF20]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-medium italic mt-2 mb-4 mr-10">
                      "FreshCart has transformed my shopping experience. The
                      quality of the products is outstanding, and the delivery
                      is always on time. Highly recommend!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full ">
            <div className="border-x border-b shadow-lg rounded-xl text-center mb-15">
              <h2 className="text-3xl font-semibold p-2 mt-10">
                Create Your Account
              </h2>
              <p className="text-base font-medium">
                Start your fresh journey with us today
              </p>
              <div className="grid grid-cols-2 gap-2 mt-10 mb-8">
                <button className=" border-2 rounded-md ml-10 h-10 flex items-center justify-center hover:border-[#3cf273] hover:bg-[#F0FDF4] hover:pointer-cursor">
                  <FaGoogle className="text-[#E7000B] " />
                  <h4 className="text-xs font-semibold pl-2">Google</h4>
                </button>
                <button className="border-2 rounded-md mr-10 h-10 flex items-center justify-center hover:border-[#3cf273] hover:bg-[#F0FDF4] hover:pointer-cursor">
                  <IoLogoFacebook className="text-xl text-[#155DFC] " />
                  <h4 className="text-xs font-semibold pl-2">Facebook</h4>
                </button>
              </div>
              <div className="flex items-center">
                <hr className="flex-grow border-t ml-15 border-1 border-gray-200" />
                <span className="mx-3">or</span>
                <hr className="flex-grow border-t mr-15 border-1 border-gray-200" />
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
