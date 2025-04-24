import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (

    // this contains get started buttom of the navbar 
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium '>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button