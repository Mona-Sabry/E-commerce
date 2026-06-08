'use client'
import { FaRegCircleUser,FaRegAddressBook,FaArrowRightFromBracket} from "react-icons/fa6";
import Link from 'next/link';
import { CiUser } from "react-icons/ci";
import { FaBoxOpen,FaRegHeart } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const style = "flex w-full items-center gap-2 px-3 py-2 rounded-md hover:bg-[#dcfce7] hover:text-[#16A34A]";

export default function AuthSideBar() {

const { data: session } = useSession();

  return (
    <div className="w-52 h-70 mb-4">
        <div>
          <div className="flex gap-2 mb-2">
      <FaRegCircleUser className="w-8 h-8 text-[#16A34A] bg-[#DCFCE7] rounded-full p-2"/>
     
        <h4 className="text-base font-medium">{session?.user?.name}</h4>
</div>
<hr className="mb-2"/>

      <ul className="w-full flex flex-col gap-1 text-sm font-medium text-gray-500">

  <li className="w-full">
    <Link href="/UserAddress" className={style}>
      <CiUser />
      <span>My Profile</span>
    </Link>
  </li>

  <li className="w-full">
    <Link href="/cartShopping" className={style}>
      <FaBoxOpen />
      <span>My Orders</span>
    </Link>
  </li>

  <li className="w-full">
    <Link href="/wishlist" className={style}>
      <FaRegHeart />
      <span>My Wishlist</span>
    </Link>
  </li>

  <li className="w-full">
    <Link href="/UserAddress" className={style}>
      <FaRegAddressBook />
      <span>Addresses</span>
    </Link>
  </li>

  <li className="w-full">
    <Link href="/UserAccount" className={style}>
      <RiSettings3Fill />
      <span>Settings</span>
    </Link>
  </li>

</ul>

        <hr className="my-2" />
<button
  onClick={() => signOut({ callbackUrl: "/signin" })}
  className="flex w-full items-center gap-2 px-3 py-2 rounded-md text-red-500 hover:bg-[#FEF2F2]">
  <FaArrowRightFromBracket />
  Sign Out
</button>     
 </div>
    </div>
  )
}
