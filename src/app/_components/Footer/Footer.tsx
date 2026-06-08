import React from "react";
import Image from "next/image";
import { FaPhone ,FaTwitter , FaCreditCard} from "react-icons/fa6";
import { IoMdMail, IoLogoInstagram  } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF ,FaYoutube} from "react-icons/fa";
import Link from "next/link";


const iconStyle =
  'bg-gray-800 rounded-full p-3 text-gray-400 cursor-pointer hover:bg-[#36DE80] hover:text-white transition-colors duration-200';
const LinkStyle = "hover:text-[#36DE80] cursor-pointer";


export default function Footer() {
  return (
    <div className="bg-[#101828]">
      <div className="container mx-auto px-4 ">
        <div className=" text-[#99A1AF] p-8">
          <div className=" grid grid-cols-1 md:grid-cols-6 gap-8 px-0">
            <div className="col-span-2">
              <div className="bg-white  px-4 py-2 mb-6 rounded-xl inline-block">
                <Image
                  src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
                  alt="Freshcart"
                  width={180}
                  height={70}
                  className="w-30 sm:w-40"
                />
              </div>
              <p className="mb-3">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-[#36DE80]" />
                  <a
                    href="tel:+18001234567"
                    className="hover:text-[#36DE80] cursor-pointer"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <IoMdMail className="text-[#36DE80]" />
                  <a
                    href="mailto:support@freshcart.com"
                    className="hover:text-[#36DE80] cursor-pointer"
                  >
                    support@freshcart.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-[#36DE80]" />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>

              <div className="flex gap-4 mt-5">
                <div className={iconStyle}>
                  <FaFacebookF className="text-xl" />
                </div>

                <div className={iconStyle}>
                  <FaTwitter className="text-xl" />
                </div>

                <div className={iconStyle}>
                  <IoLogoInstagram className="text-xl" />
                </div>

                <div className={iconStyle}>
                  <FaYoutube className="text-xl" />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className=" text-white font-bold">Shop</h3>
                <Link href="/" className={LinkStyle}>
                  All Products
                </Link>
                <Link href="/allCategories" className={LinkStyle}>
                  Categories
                </Link>
                <Link href="/brand" className={LinkStyle}>
                  Brands
                </Link>
                <Link href="" className={LinkStyle}>
                  Electronics
                </Link>
                <Link href="" className={LinkStyle}>
                  Men's Fashion
                </Link>
                <Link href="" className={LinkStyle}>
                  Women's Fashion
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className=" text-white font-bold">Account</h3>
                <Link href="/UserAccount" className={LinkStyle}>
                  My Account
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Order History
                </Link>
                <Link  href="/wishlist" className={LinkStyle}>
                  Wishlist
                </Link>
                <Link href="/cart" className={LinkStyle}>
                  Shopping Cart
                </Link>
                <Link href="/signin" className={LinkStyle}>
                  Sign In
                </Link>
                <Link href="/signup" className={LinkStyle}>
                  Create Account
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className=" text-white font-bold">Support</h3>
                <Link href="/contact" className={LinkStyle}>
                  Contact Us
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Help Center
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Shipping Info
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Returns & Refunds
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Track Order
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className=" text-white font-bold">Legal</h3>
                <Link href="/privacyPolicy" className={LinkStyle}>
                  Privacy Policy
                </Link>
                <Link href="/termsOfService" className={LinkStyle}>
                  Terms of Service
                </Link>
                <Link href="/errorpage" className={LinkStyle}>
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-gray-800 m-5" />

          <div className="flex flex-col sm:flex-row  justify-between text-gray-500 text-sm gap-2 px-0">
            <div className="text-gray-500 text-sm text-center sm:text-left">
              © 2026 FreshCart. All rights reserved.
            </div>

            <div className="text-gray-500 flex flex-row flex-wrap gap-5 mt-2 sm:mt-0 justify-center">
              <div className="flex flex-row gap-3 items-center ">
                <FaCreditCard />
                <span>Visa</span>
              </div>
              <div className="flex flex-row gap-3 items-center ">
                <FaCreditCard />
                <span>Mastercard</span>
              </div>
              <div className="flex flex-row gap-3 items-center ">
                <FaCreditCard />
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
