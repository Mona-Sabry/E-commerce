"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { FaLocationArrow } from "react-icons/fa";

export const ContactForm = () => ( 
  <div className="flex flex-col gap-5 ">
    <div className="flex sm:flex-row gap-3">
      <div className="flex-1">
        <label htmlFor="name">Full Name</label>
        <input id="name" placeholder="John Doe" 
        className={`h-12 w-full pl-2 text-base font-medium rounded-md outline-none
              border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-400  transition-colors mt-2`}
        />
      </div>

      <div className="flex-1 ">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className={`h-12 w-full pl-2 text-base font-medium rounded-md outline-none
              border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-400  transition-colors mt-2`}
        />
      </div>
    </div>

    <div>
      <label htmlFor="subject">Subject</label>
      <select id="subject" className={`h-12 w-full pl-3 text-base font-medium rounded-md outline-none
         border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-400  transition-colors mt-2`}>
         <option>Select a Subject</option>
        <option>General Inquiry</option>
        <option>Order Support</option>
        <option>Shipping Question</option>
        <option>Returns & Refunds</option>
        <option>Product Information</option>
        <option>Feedback & Suggestions</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="How can we help you?" className={`h-36 w-full pl-3 text-base font-medium rounded-md outline-none
         border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-400  transition-colors mt-2`} />
    </div>

    <Button type="submit" className="w-full md:w-1/2 lg:w-[25%] h-12 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold flex items-center justify-center gap-2">
       <FaLocationArrow />Send Message
    </Button>
  </div>
);

