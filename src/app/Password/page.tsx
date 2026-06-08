// import React from 'react'
// import { FaLock } from "react-icons/fa";
// import PasswordForm from './PasswordForm'

// export default function UserPassword() {
//   return (
//     <div>
//                 <div className="w-full lg:w-4/5 flex flex-col gap-5 mt-5">
//                         <div className="w-full border border-gray-200 rounded-2xl p-5 shadow-sm ">
//                           <div className="flex gap-3 mb-3">
//                           <FaLock className='w-[50px] h-[50px] text-2xl text-[#E17100] bg-[#FEF3C6] p-4 rounded-lg mb-3'/>
//                           <div>
//                           <h3 className="text-base font-bold pb-1 hover:cursor-pointer">Change Password</h3>
//                           <p className="text-sm text-gray-600 pb-3">Update your account password</p>
//                          </div>
//                          </div>

//                          <PasswordForm/>
// </div>
//     </div>
//     </div>
//   )
// }
import React from 'react'
import { FaLock } from "react-icons/fa";
import PasswordForm from './PasswordForm'

export default function UserPassword() {
  return (
    <div>

      <div className="flex gap-3 mb-3">

        <FaLock className='w-[50px] h-[50px] text-2xl text-[#E17100] bg-[#FEF3C6] p-4 rounded-lg mb-3'/>

        <div>
          <h3 className="text-base font-bold pb-1">
            Change Password
          </h3>

          <p className="text-sm text-gray-600 pb-3">
            Update your account password
          </p>
        </div>

      </div>

      <PasswordForm />

    </div>
  )
}