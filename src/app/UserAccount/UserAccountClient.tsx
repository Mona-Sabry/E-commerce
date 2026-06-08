
'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLocationDot, FaGear } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function UserAccountClient() {
  const pathname = usePathname();

  const isAddressActive = pathname === "/UserAddress";
  const isSettingsActive = pathname === "/UserAccount";

  return (
    <div>

     

      {/* My Addresses */}
      <Link
        href="/UserAddress"
        className={`w-full flex items-center justify-between gap-3 mt-3 rounded-xl p-3 transition-all group
        ${isAddressActive ? "bg-[#F0FDF4]" : "hover:bg-[#F9FAFB]"}`}
      >
        <div className="flex items-center gap-3">
          <FaLocationDot
            className={`w-10 h-10 rounded-lg p-3 transition-all
            ${
              isAddressActive
                ? "bg-[#22C55E] text-white"
                : "bg-[#eceff1] text-[#808ba1] group-hover:bg-[#E5E7EB]"
            }`}
          />

          <h4
            className={`text-base font-medium transition-all
            ${isAddressActive ? "text-[#16A34A]" : ""}`}
          >
            My Addresses
          </h4>
        </div>

        <IoIosArrowForward className="text-gray-400" />
      </Link>

      {/* Settings */}
      <Link
        href="/UserAccount"
        className={`w-full flex items-center justify-between gap-3 rounded-xl p-3 transition-all group
        ${isSettingsActive ? "bg-[#F0FDF4]" : "hover:bg-[#F9FAFB]"}`}
      >
        <div className="flex items-center gap-3">
          <FaGear
            className={`w-10 h-10 rounded-lg p-3 transition-all
            ${
              isSettingsActive
                ? "bg-[#22C55E] text-white"
                : "bg-[#eceff1] text-[#808ba1] group-hover:bg-[#E5E7EB]"
            }`}
          />

          <h4
            className={`text-base font-medium transition-all
            ${isSettingsActive ? "text-[#16A34A]" : ""}`}
          >
            Settings
          </h4>
        </div>

        <IoIosArrowForward className="text-gray-400" />
      </Link>

    </div>
  );
}