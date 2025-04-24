import React from 'react'

function Footer() {
  return (
    // this is a wrapper div for whole footer
    <div className='w-full'>
        {/* this div is responsible for gap  */}
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            {/* this div occupies half the space and contains heading */}
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>

            {/* this is the left div which contain the 3 columns */}
            <div className='basis-1/2 flex gap-4'>
                {/* div 1 for Socials */}
                <div className='basis-1/3'>
                    {/* array which will contain the links */}
                     <h4 className='mb-10 text-zinc-400 capitalize'>
                    Socials
                     </h4>
                     {["Instagram","Twitter","Linkedin"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600'>
                     {item}
                      </a>)}
                </div>

                {/* div 2 for socials */}
                <div className='basis-1/3'>
                    {/* array which will contain the links */}
                     <h4 className='mb-10 text-zinc-400 capitalize'>
                    Socials
                     </h4>
                     {["Instagram","Twitter","Linkedin"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600'>
                     {item}
                      </a>)}
                </div>

                {/* div 3 for socials  */}
                <div className='basis-1/2 flex flex-col items-end'>
                        <p className='text-right'>
                        Refokus is pioneering digital agency driven by design and empowered by technology.
                        </p>
                        <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" className='w-32 mt-10' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer