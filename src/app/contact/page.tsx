import React from "react";
import Link from "next/link";
import { IoMdMail, IoLogoInstagram } from "react-icons/io";
import { MdLocationOn, MdHeadsetMic, MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaFacebookF, FaPhone, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsQuestion } from "react-icons/bs";
import {ContactForm} from "./ContactForm"


const iconStyle =
  "bg-gray-200 rounded-full p-3 text-gray-500 cursor-pointer hover:bg-[#16A34A] hover:text-white transition-colors duration-200";

// ---------------------- InfoCard Component ----------------------
interface InfoCardProps {
  icon:React.ReactNode;
  title: string;
  subtitle?:React.ReactNode;
  link?: string;
  textLink?:string; 
}

const InfoCard = ({icon , title ,subtitle ,  link , textLink} : InfoCardProps)=>{
  return(
  <div className="w-full border border-gray-200 flex items-center rounded-2xl p-5 gap-3 mt-5 shadow-sm">
    <div className="flex flex-col justify-start">{icon}</div>
    <div className="flex flex-col">
      <h3 className="text-base font-semibold pb-2">{title}</h3>
      {subtitle && <h4 className="text-sm font-medium text-[#6a7282]">{subtitle}</h4>}
      {link && (
        <a
          href={link}
          className="text-[#16A34A] text-base font-medium hover:underline mt-1"
        >
          {textLink}
        </a>
      )}
       </div>
  </div>
  )
}

// ---------------------- Main Contact Page ----------------------
export default function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="w-full h-60 bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-[70px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <MdHeadsetMic className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
              <p className="text-white/80 mt-1">We'd love to hear from you. Get in touch with our team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 mt-0 sm:py-16 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Info */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <InfoCard
              icon={<FaPhone className="w-[50px] h-[50px] text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg" />}
              title="Phone"
              subtitle="Mon-Fri from 8am to 6pm"
              link="tel:+18001234567"
              textLink= "+18001234567"
            />
            <InfoCard
              icon={<IoMdMail className="w-[50px] h-[50px] text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg" />}
              title="Email"
              subtitle="We'll respond within 24 hours"
              link="mailto:support@freshcart.com"
              textLink= "support@freshcart.com"
            />
            <InfoCard
              icon={<MdLocationOn className="w-[50px] h-[50px] text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg" />}
              title="Office"
                subtitle={
    <>
      123 Commerce Street <br />
      New York, NY 10001 <br />
      United States
    </>
  }
            />
            <InfoCard
              icon={<MdOutlineAccessTimeFilled className="w-[50px] h-[50px] text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg" />}
              title="Business Hours"
              subtitle={
                <>
                Mon-Fri: 8am - 6pm <br /> Sat: 9am - 4pm <br /> Sun: Closed
                </>
                }
            />
            <div className="w-full border border-gray-200 rounded-2xl p-5 mt-5 shadow-sm">
              <h3 className="text-base font-semibold pb-2">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <div className={iconStyle}><FaFacebookF /></div>
                <div className={iconStyle}><FaTwitter /></div>
                <div className={iconStyle}><IoLogoInstagram /></div>
                <div className={iconStyle}><FaLinkedinIn /></div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-5">
            <div className="w-full border border-gray-200 rounded-2xl p-5 shadow-sm ">
              <div className="flex gap-3 mb-3">
              <MdHeadsetMic className='w-[50px] h-[50px]  text-[#16A34A] bg-[#F0FDF4] p-4 rounded-lg mb-3'/>
              <div>
              <h3 className="text-xl font-bold pb-1 hover:cursor-pointer">Send us a Message</h3>
              <p className="text-sm text-gray-600 pb-3">Fill out the form and we'll get back to you</p>
             </div>
             </div>
              <ContactForm />
            </div>

            <div className="w-full border border-gray-200 rounded-2xl p-5 bg-[#F0FDF4] flex gap-3 items-center">
              <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-xl border border-gray-200">
                <div className="w-5 h-5 rounded-full text-white bg-[#16A34A]  flex items-start justify-center">
                <BsQuestion  />
              </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold pb-1">Looking for quick answers?</h3>
                <p className="text-sm text-gray-600 pb-1">
                  Check out our Help Center for frequently asked questions about orders, shipping, returns, and more.
                </p>
                <Link href="#" className="text-sm font-medium text-[#16A34A] hover:underline hover:cursor-pointer">
                  Visit Help Center →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}