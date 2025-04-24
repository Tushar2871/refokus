import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    //  This is the div that will contain all the smaller components along with the bottom border
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        {/* this div binds together everything on the left of the navbar */}
       <div className='nleft flex items-center'>
         {/*this is for logo */}

         <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        {/* this is for links or navigation */}
        <div className='links flex gap-14 ml-20'>
            {["Home","Work","Culture" , "", "News"].map((elem,index)=> (
                elem.length ===0 ? 
                // this is for line between the navbar elements
                <span key={index} className='w-[2px] h-7 bg-zinc-700'></span>:<a key={index} className='font-regular text-sm flex items-center gap-1' href='#'>
            
                {/* this is for the green dot */}
                {index ===1 &&  (<span style={{boxShadow : "0 0 0.25em #00FF19"}} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span>)}
                
                {elem}
            </a>
        ))}

        </div>
       </div>
       <Button/>
    </div>
  )
}

export default Navbar