
import React from 'react'
import { FaUser } from "react-icons/fa6";
import Link from 'next/link';
import UserAccountForm from './UserAccountForm';
import UserPassword from '@/app/Password/page';
import { getLoggedUserData } from './userAccountActions';
import UserAccountClient from "./UserAccountClient";


export default async function UserAccount() {
  const userData = await getLoggedUserData();

  return (
    <div>
      <div className="w-full h-60 bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">

        <div className="container mx-auto px-4 py-12 sm:py-16">

          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <span className="text-white/40">/</span>

            <span className="text-white font-medium">
              My Account
            </span>
          </nav>

          <div className="flex items-center gap-5">

            <div className="w-[70px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaUser className="text-3xl text-white" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                My Account
              </h1>

              <p className="text-white/80 mt-1">
                Manage your addresses and account settings
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-0 sm:py-16">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Side */}
          <div className="w-full lg:w-1/5 flex flex-col">

            <div className='rounded-xl p-2 border border-gray-200 shadow-md'>

              <h3 className='text-base font-bold p-3'>
                My Account
              </h3>

              <hr />

            


<UserAccountClient />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-4/5 flex flex-col gap-5">

            <h2 className='text-xl font-bold mb-0'>
              Account Settings
            </h2>

            <p className='text-sm font-medium'>
              Update your profile information and change your password
            </p>

            <div className="w-full border border-gray-200 rounded-2xl p-5 shadow-sm">

              <div className="flex gap-3 mb-3">

                <FaUser className='w-[50px] h-[50px] text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg mb-3' />

                <div>

                  <h3 className="text-base font-bold pb-1">
                    Profile Information
                  </h3>

                  <p className="text-sm text-gray-600 pb-3">
                    Update your personal details
                  </p>

                </div>
              </div>

              <UserAccountForm user={userData.data} />

            </div>

            <div className="w-full border border-gray-200 rounded-2xl p-5 shadow-sm">
              <UserPassword />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}