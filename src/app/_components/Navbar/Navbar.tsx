"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import AuthSideBar from "../authSideBar/AuthSideBar";
import SideBar from "../SideBar/SideBar";
import  { CartContextType, useCart } from "@/app/_context/cartContext";
import {WishlistContext ,  useWishlist} from "@/app/_context/wishlistContext";

export function InputBasic() {
  return (
    <div className="relative w-full hidden md:flex">
      <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-[#16a34a] w-8 h-8 p-2 rounded-full hover:bg-[#15803d] " />
      <input
        id="search"
        type="text"
        className="w-full text-sm pr-10 pl-4 py-3 rounded-4xl border border-gray-300 outline-none focus:border-transparent focus:ring-1 focus:ring-[#1EB857] focus:shadow-[0_0_10px_rgba(22,163,74,0.3)]"
        placeholder="Search for products,brands and more...."
      />
    </div>
  );
}

const components: { title: string; href: string }[] = [
  {
    title: "All Categories",
    href: "/allCategories",
  },
  {
    title: "Electronics",
    href: "/electronics",
  },
  {
    title: "Women's Fashion",
    href: "/women",
  },
  {
    title: "Men's Fashion",
    href: "/men",
  },
  {
    title: "Beauty & Health",
    href: "/beauty",
  },
];

export default function Navbar() {
  const [openAuthSidebar, setOpenAuthSidebar] = useState(false);
  const session = useSession();

  const username = session.data?.user?.name;
  const isUserAuthenticated = session.status === "authenticated";

const{numberOfCartItems}= (useCart() as CartContextType);
const { wishlist } = useWishlist();
const numberOfWishlistItems = wishlist.length;

  return (
    <div>
      <hr />
      <div className="container mx-auto px-4">
        <div className="m-0 p-0 sticky top-0 z-[999]">
          <NavigationMenu className="w-full max-w-none justify-center">
            <div className="flex justify-between items-center px-2 py-3 w-full">
              {/* left side */}
              <div className="bg-white  px-4 py-2 rounded-xl inline-block">
                <Image
                  src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
                  alt="Freshcart"
                  width={180}
                  height={70}
                  className="w-30 sm:w-40 "
                />
              </div>

              {/* middle part */}
              <div className="flex-1 mx-4">
                <InputBasic />
              </div>

              {/* right side */}
              <NavigationMenuList className="flex gap-3 items-center ">
                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuLink asChild>
                    <Link
                      className="text-base font-medium hover:text-[#16a34a] hover:bg-white"
                      href="/"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:flex ">
                  <NavigationMenuLink asChild>
                    <Link
                      className="text-base font-medium hover:text-[#16a34a] hover:bg-white"
                      href="/allProducts"
                    >
                      Shop
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenu className="relative hidden md:flex">
                  <NavigationMenuList className="flex gap-6 items-center">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base font-medium hover:text-[#16a34a] hover:bg-white">
                        Categories
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className=" sm:w-40 md:w-50">
                        <ul className="grid gap-2 p-2">
                          {components.map((component) => (
                            <ListItem
                              className="hover:text-[#16a34a] hover:bg-[#F0FDF4] z-[100]"
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>

                  {/* change dropdown's place*/}
                  <NavigationMenuViewport className="absolute left-0 top-full mt-2" />
                </NavigationMenu>

                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuLink asChild>
                    <Link
                      className="text-base font-medium hover:text-[#16a34a] hover:bg-white"
                      href="/brand"
                    >
                      Brands
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:flex">
                  <div className="cursor-pointer flex items-center gap-3">
                    <div className="flex items-center justify-center">
                      <MdHeadsetMic className=" text-[#16a34a] bg-[#F3FDF6] rounded-full p-2 w-8 h-8 text-xl font-bold hover:text-[#45B56E]" />
                    </div>
                    <Link href="/contact" className="flex flex-col">
                      <span className="text-sm text-[#777c86] hover:text-[#aeb1b7]">
                        Support
                      </span>
                      <span className="text-sm text-[#191a1d] hover:text-[#474d56]">
                        24/7 Help
                      </span>
                    </Link>
                  </div>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:flex">
                  <div className="border-l border-gray-200 h-10 mx-2"></div>
                </NavigationMenuItem>

                {isUserAuthenticated?(
                  <>
                    <div className="flex items-center gap-3 mr-3">
                      <Link href="/wishlist" className="relative">
                        <FaRegHeart className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border-4 border-white">{numberOfWishlistItems}</span>

                      </Link>
                      <Link href="/cart" className="relative">
                        <FaCartShopping className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer " />
                     <span className="absolute -top-1 -right-1 bg-[#16a34a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{numberOfCartItems}</span>
                      </Link>
                    </div>

                    <NavigationMenuItem className="hidden md:flex">
                      <div className="relative hidden md:flex">
                        <button
                          onClick={() => setOpenAuthSidebar(!openAuthSidebar)}
                          className="bg-transparent hover:bg-transparent focus:bg-transparent"
                        >
                          <span className="flex items-center justify-center text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer">
                            <FaRegCircleUser />
                          </span>
                        </button>

                        {openAuthSidebar && (
                          <div className="absolute top-14 right-0 z-50 bg-white shadow-xl rounded-2xl p-4 border border-gray-100">
                            <AuthSideBar />
                          </div>
                        )}
                      </div>
                    </NavigationMenuItem>
                  </>
                ) : (
                  <>
                    {/* <div className="flex items-center gap-3 mr-3">
                      <Link href="/emptywishlist">
                        <FaRegHeart className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer" />
                      </Link>
                      <Link href="/emptyCart">
                        <FaCartShopping className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer " />
                      </Link>
                    </div> */}
                     <div className="flex items-center gap-3 mr-3 relative">
                        <Link href="/wishlist">
                        <FaRegHeart className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{numberOfWishlistItems}</span>

                      </Link>
                      <Link href="/cart">
                        <FaCartShopping className="text-gray-500 w-10 h-10 hover:text-[#16a34a] hover:bg-[#F3F4F6] rounded-full p-2.5 cursor-pointer " />
                     <span className="absolute -top-1 -right-1 bg-[#16a34a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{numberOfCartItems}</span>
                      </Link>
                    </div>

                    <NavigationMenuItem className="hidden md:flex">
                      <NavigationMenuLink
                        asChild
                        className="bg-transparent hover:bg-transparent focus:bg-transparent"
                      >
                        <Link href="/signin" className="group">
                          <span className="flex items-center justify-center gap-2 px-4 py-2 border-none shadow-none bg-[#16a34a] text-white  rounded-xl hover:bg-[#15803d]">
                            <BiUser />
                            Sign In
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </>
                )}
              </NavigationMenuList>
            </div>

            {/* sidebar */}
            <SideBar />
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
