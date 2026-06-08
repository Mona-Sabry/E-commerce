"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import LogOut from "../logout/LogOut";

export default function UserStatus() {
  const session = useSession();

  const username = session.data?.user?.name;
  const isUserAuthenticated = session.status === "authenticated";

  return isUserAuthenticated ? (
    <>
      <div className="text-gray-600 text-sm font-medium flex flex-row gap-2 items-center hover:text-[#16a34a]">
        <BiUser />
        <Link href="/myAccount">{username}</Link>
      </div>

      <LogOut />
    </>
  ) : (
    <>
      <div className="text-gray-600 flex flex-row gap-2 items-center hover:text-[#16a34a]">
        <BiUser />
        <Link href="/signin">Sign In</Link>
      </div>

      <div className="text-gray-600 flex flex-row gap-2 items-center hover:text-[#16a34a]">
        <FaUserPlus />
        <Link href="/signup">Sign Up</Link>
      </div>
    </>
  );
}
