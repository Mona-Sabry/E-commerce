'use client'
import React from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogOut() {

  const router = useRouter();

  async function handleLogOut(){
    await signOut ({redirect: false});
    router.push('/signin');
  }

  return (
    <button
      onClick={handleLogOut}
      className='text-gray-600 flex flex-row gap-2 items-center hover:text-[#c7131f]'
    >
      <FaArrowRightFromBracket />
      Sign Out
    </button>
  )
}


