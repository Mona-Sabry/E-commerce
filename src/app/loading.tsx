import React from 'react'
import { RingLoader } from "react-spinners";

export default function loading() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <RingLoader color="#079210" />
    </div>
  )
}
