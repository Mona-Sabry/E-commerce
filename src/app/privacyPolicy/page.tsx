import React from 'react'
import Link from 'next/link';
import {  FaShieldAlt, FaDatabase, FaUserCheck, FaCookie } from "react-icons/fa";
import {FaUserShield ,  FaShareNodes ,FaEnvelope , FaArrowLeftLong , FaArrowRight} from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const cardStyle= "w-full border rounded-2xl mb-4 p-8 shadow-sm hover:shadow-lg group transition"
const iconStyle = "w-12 h-12 bg-[#F0FDF4] text-[#16A34A] rounded-lg flex items-center justify-center group-hover:text-white  group-hover:bg-[#22C55E]"
const titleStyle="text-xl font-bold pt-2"
const subTitleStyle = "text-xs font-bold text-[#22C55E]"
const SpanStyle ="w-8 h-8 text-xs font-bold text-[#22C55E] bg-[#F0FDF4] rounded-lg flex items-center justify-center mt-3"
const paragraphStyle = "text-sm font-medium mt-3 ml-3"


export default function privacyPolicy() {
  return (
    <div>
      <div className="w-full h-[240px] bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white pt-0">
        <div className="container mx-auto px-4 sm:py-16 ">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 ">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              < FaShieldAlt className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-white/80 mt-1">
            Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </div>

<div  className="container mx-auto px-4 sm:py-16 ">
    <div className='w-full h-40  border-[#99ecb9] border-2 rounded-xl shadow-md mb-0 bg-[#ECFCF2] text-[#145839] p-8 '>
<div className='flex items-center gap-3 mb-5'>
    <div className="w-12 h-12 bg-[#22C55E] text-white rounded-lg flex items-center justify-center">
    <FaShieldAlt size={25}/>
    </div>
<div className='flex flex-col'>
    <h2 className="text-lg font-bold">Your Privacy Matters</h2>
    <p className="text-base font-medium">This Privacy Policy describes how FreshCart collects, uses, and protects your personal information when you use our services. We are committed to ensuring that your privacy is <br/>protected.
</p>
</div>
</div>
    </div>
</div>


<div className="container mx-auto px-4 sm:py-4 ">
<div className='flex flex-col lg:flex-row gap-4'>
{/* left side */}
<div className='lg:w-1/2 flex flex-col'>
<div className={`${cardStyle} h-[350px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaDatabase size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 1</h4>
    <h2 className={titleStyle}>Information We Collect</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>1.1</span>
    <p className={paragraphStyle}><span className='font-bold'>Personal Data: </span> Name, email address, phone number, and shipping address.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>1.2</span>
    <p className={paragraphStyle}><span className='font-bold'>Payment Data: </span>Credit card information processed securely through our payment providers.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>1.3</span>
    <p className={paragraphStyle}><span className='font-bold'>Technical Data: </span>IP address, browser type, device information, and access times.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>1.4</span>
    <p className={paragraphStyle}><span className='font-bold'>Usage Data: </span>Pages viewed, products browsed, and actions taken within our platform.</p>
</div>
</div>

<div className={`${cardStyle} h-[300px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <IoLockClosedSharp size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 3</h4>
    <h2 className={titleStyle}>Data Protection</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>3.1</span>
    <p className={paragraphStyle}>We implement industry-standard encryption (SSL/TLS) for all data transfers.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.2</span>
    <p className={paragraphStyle}>Payment information is processed by PCI-compliant payment providers.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.3</span>
    <p className={paragraphStyle}>We conduct regular security audits and vulnerability assessments.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.4</span>
    <p className={paragraphStyle}>Access to personal data is restricted to authorized personnel only.</p>
</div>
</div>

<div className={`${cardStyle} h-[350px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaUserCheck size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 5</h4>
    <h2 className={titleStyle}>Your Rights</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>5.1</span>
    <p className={paragraphStyle}><span className='font-bold'>Access: </span>Request a copy of your personal data.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.2</span>
    <p className={paragraphStyle}><span className='font-bold'>Rectification: </span>Request correction of inaccurate data.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.3</span>
    <p className={paragraphStyle}><span className='font-bold'>Erasure: </span>Request deletion of your personal data.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.4</span>
    <p className={paragraphStyle}><span className='font-bold'>Portability: </span>Request your data in a portable format.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.5</span>
    <p className={paragraphStyle}><span className='font-bold'>Opt-out: </span>Unsubscribe from marketing communications at any time.</p>
</div>
</div>

<div className={`${cardStyle} h-44`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    < MdAccessTimeFilled size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 7</h4>
    <h2 className={titleStyle}>Data Retention</h2>
</div>
</div>

    <p className={paragraphStyle}>We retain your personal information only for as long as necessary to fulfill the purposes outlined in
        <br/>this policy, or as required by law. Account data is deleted within 30 days of account closure upon
        <br/>request.</p>
</div>

</div>


{/* right side */}
<div className='lg:w-1/2 flex flex-col'>
<div className={`${cardStyle} h-[350px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaUserShield size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 2</h4>
    <h2 className={titleStyle}>How We Use Your Information</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>2.1</span>
    <p className={paragraphStyle}>To process and fulfill your orders.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.2</span>
    <p className={paragraphStyle}>To send order confirmations and shipping updates.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.3</span>
    <p className={paragraphStyle}>To provide customer support and respond to inquiries.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.4</span>
    <p className={paragraphStyle}>To improve our products, services, and user experience.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.5</span>
    <p className={paragraphStyle}>To send promotional communications (with your consent).</p>
</div>
</div>

<div className={`${cardStyle} h-[300px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaShareNodes size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 4</h4>
    <h2 className={titleStyle}>Information Sharing</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>4.1</span>
    <p className={paragraphStyle}>We do not sell, trade, or rent your personal information to third parties.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>4.2</span>
    <p className={paragraphStyle}>We may share data with trusted service providers who assist in our operations.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>4.3</span>
    <p className={paragraphStyle}>We may disclose information when required by law or to protect our rights.</p>
</div>
</div>

<div className={`${cardStyle} h-[350px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaCookie size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 6</h4>
    <h2 className={titleStyle}>Cookies</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>6.1</span>
    <p className={paragraphStyle}>We use cookies to enhance your browsing experience and remember preferences.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>6.2</span>
    <p className={paragraphStyle}>You can control cookie settings through your browser preferences.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>6.3</span>
    <p className={paragraphStyle}>Disabling cookies may affect the functionality of certain features.</p>
</div>
</div>

<div className={`${cardStyle} h-44`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaEnvelope size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 8</h4>
    <h2 className={titleStyle}>Contact Us</h2>
</div>
</div>

    <p className={paragraphStyle}>If you have any questions about these Terms, please contact us at
        <a href='mailto:privacy@freshcart.com' className='text-[#16A34A] hover:underline hover:text-[#15803D]'> privacy@freshcart.com</a>
    </p>
</div>
</div>

</div>
</div>

<hr className='w-[95%] mx-auto mb-5 border-1.5'/>

<div  className="container mx-auto px-4 sm:py-16 ">
<div className='flex justify-between'>
    <Link href='/' className='flex flex-row gap-3 items-center justify-center bg-[#f1f3f8] p-4 rounded-xl hover:bg-[#E5E7EB] text-base font-medium'>
        < FaArrowLeftLong/>Back To Home
    </Link>

    <Link href='/termsOfService' className='flex flex-row gap-3 items-center justify-center bg-[#22C55E] text-white p-4 rounded-xl hover:bg-[#16A34A] text-base font-medium'>
       View Terms Of Service < FaArrowRight/>
    </Link>
</div>
</div>
    </div>
  )
}
