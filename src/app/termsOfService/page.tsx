import React from 'react'
import Link from 'next/link';
import { FaFileContract ,  FaIdCard ,FaBalanceScale } from "react-icons/fa";
import { FaHandshakeSimple ,FaUserCheck , FaCreditCard , FaTruck ,FaArrowRotateLeft ,FaEnvelope , FaArrowLeftLong , FaArrowRight} from "react-icons/fa6";


const cardStyle= "w-full border rounded-2xl mb-4 p-8 shadow-sm hover:shadow-lg group transition"
const iconStyle = "w-12 h-12 bg-[#F0FDF4] text-[#16A34A] rounded-lg flex items-center justify-center group-hover:text-white  group-hover:bg-[#22C55E]"
const titleStyle="text-xl font-bold pt-2"
const subTitleStyle = "text-xs font-bold text-[#22C55E]"
const SpanStyle ="w-8 h-8 text-xs font-bold text-[#22C55E] bg-[#F0FDF4] rounded-lg flex items-center justify-center mt-3"
const paragraphStyle = "text-sm font-medium mt-3 ml-3"


export default function termsOfService() {
  return (
    <div>
      <div className="w-full h-[240px] bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white pt-0">
        <div className="container mx-auto px-4 sm:py-16 ">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 ">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Terms of Service</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              < FaFileContract className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <p className="text-white/80 mt-1">
              Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </div>

<div  className="container mx-auto px-4 sm:py-16 ">
    <div className='w-full h-30  border-[#FDF0BB] border-2 rounded-xl shadow-md mb-0 bg-[#FDF9E5] text-[#7B3306] p-8 '>
<div className='flex items-center gap-3 mb-5'>
    <div className="w-12 h-12 bg-[#FE9A00] text-white rounded-lg flex items-center justify-center">
    <FaFileContract size={25}/>
    </div>
<div className='flex flex-col'>
    <h2 className="text-lg font-bold">Important Notice</h2>
    <p className="text-base font-medium">By accessing and using FreshCart, you accept and agree to be bound by the terms and provisions of this agreement. Please read these terms carefully before using our services.
</p>
</div>
</div>
    </div>
</div>


<div className="container mx-auto px-4 sm:py-4 ">
<div className='flex flex-col lg:flex-row gap-4'>
{/* left side */}
<div className='lg:w-1/2 flex flex-col'>
<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaHandshakeSimple size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 1</h4>
    <h2 className={titleStyle}>Acceptance of Terms</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>1.1</span>
    <p className={paragraphStyle}>By accessing or using the Service, you acknowledge that you have read, understood, and agree <br/>to be bound by these Terms.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>1.2</span>
    <p className={paragraphStyle}>If you do not agree to these Terms, you must not access or use the Service.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>1.3</span>
    <p className={paragraphStyle}>We reserve the right to modify these Terms at any time, and such modifications shall be <br/>effective immediately upon posting.</p>
</div>

</div>

<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaIdCard size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 3</h4>
    <h2 className={titleStyle}>Account Registration</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>3.1</span>
    <p className={paragraphStyle}>You may be required to create an account to access certain features of the Service.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.2</span>
    <p className={paragraphStyle}>You agree to provide accurate, current, and complete information during registration.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.3</span>
    <p className={paragraphStyle}>You are solely responsible for maintaining the confidentiality of your account credentials.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>3.4</span>
    <p className={paragraphStyle}>You agree to notify us immediately of any unauthorized use of your account.</p>
</div>
</div>

<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaTruck size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 5</h4>
    <h2 className={titleStyle}>Shipping and Delivery</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>5.1</span>
    <p className={paragraphStyle}>Shipping times are estimates only and are not guaranteed.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.2</span>
    <p className={paragraphStyle}>Risk of loss and title for items purchased pass to you upon delivery to the carrier.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>5.3</span>
    <p className={paragraphStyle}>We are not responsible for delays caused by carriers, customs, or other factors beyond our <br/>control.</p>
</div>
</div>

<div className={`${cardStyle} h-44`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaBalanceScale size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 7</h4>
    <h2 className={titleStyle}>Limitation of Liability</h2>
</div>
</div>

    <p className={paragraphStyle}>To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect,
        <br/>incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
        <br/>incurred directly or indirectly.</p>
</div>

</div>


{/* right side */}
<div className='lg:w-1/2 flex flex-col'>
<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaUserCheck size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 2</h4>
    <h2 className={titleStyle}>User Eligibility</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>2.1</span>
    <p className={paragraphStyle}>The Service is intended for users who are at least eighteen (18) years of age.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.2</span>
    <p className={paragraphStyle}>By using the Service, you represent and warrant that you are of legal age to form a binding<br/>contract.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>2.3</span>
    <p className={paragraphStyle}>
If you are accessing the Service on behalf of a legal entity, you represent that you have the <br/>authority to bind such entity.</p>
</div>
</div>

<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaCreditCard size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 4</h4>
    <h2 className={titleStyle}>Orders and Payments</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>4.1</span>
    <p className={paragraphStyle}>All orders placed through the Service are subject to acceptance and availability.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>4.2</span>
    <p className={paragraphStyle}>Prices are subject to change without notice prior to order confirmation.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>4.3</span>
    <p className={paragraphStyle}>Payment must be made in full at the time of purchase through approved payment methods.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>4.4</span>
    <p className={paragraphStyle}>We reserve the right to refuse or cancel any order at our sole discretion.</p>
</div>
</div>

<div className={`${cardStyle} h-[280px]`}>
<div className='flex items-center gap-3 mb-5'>
    <div className={iconStyle}>
    <FaArrowRotateLeft size={25}/>
    </div>
<div className='flex flex-col'>
    <h4 className={subTitleStyle}>Article 6</h4>
    <h2 className={titleStyle}>Returns and Refunds</h2>
</div>
</div>

<div className='flex flex-row' >
    <span className={SpanStyle}>6.1</span>
    <p className={paragraphStyle}>Our return policy allows returns within 14 days of delivery for most items.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>6.2</span>
    <p className={paragraphStyle}>Products must be unused and in original packaging.</p>
</div>
<div className='flex flex-row' >
    <span className={SpanStyle}>6.3</span>
    <p className={paragraphStyle}>Refunds will be processed within 5-7 business days after receiving the returned item.</p>
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
        <a href='mailto:support@freshcart.com' className='text-[#16A34A] hover:underline hover:text-[#15803D]'> support@freshcart.com</a>
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

    <Link href='/privacyPolicy' className='flex flex-row gap-3 items-center justify-center bg-[#22C55E] text-white p-4 rounded-xl hover:bg-[#16A34A] text-base font-medium'>
       View Privacy Policy < FaArrowRight/>
    </Link>
</div>
</div>
    </div>
  )
}
