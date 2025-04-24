import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
function Work() {
const[images,seImages] = useState([
  {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
])
// here we have extracted from useScroll that how much scroll on y axis 
    const{ scrollYProgress } = useScroll()
// whenever progress changes that is on scroll, data is the progress
   scrollYProgress.on("change",(data)=>{

    function imagesShow(arr){
      // here we have extracted previous state and then mapped on in it, while maping we are checking whether the current index is present in the array or not 
      seImages(prev =>(
        prev.map((item,index) => (
          arr.indexOf(index) === -1 ? (
            {...item,isActive: false}
          )
          : {...item,isActive:true}
        ))
      ))
    }
// here value of switches is percent of scroll and returns the number of images through imagesShow how many images to be displayed 
    switch(Math.floor(data*100)){
      case 0:
        // here blank array indicates that no image will be shown
        imagesShow([])
        break;
      case 1:
        imagesShow([0]) 
        break;
      case 2:
        imagesShow([0,1])
        break;
      case 3:
        imagesShow([0,1,2])
        break;
      case 4:
        imagesShow([0,1,2,3])
        break;
      case 6:
        imagesShow([0,1,2,3,4])
        break;
      case 8:
        imagesShow([0,1,2,3,4,5])
    }
   })

  return (
    // has the full control
    <div className='w-full mt-10'>
        {/* this will contain the main name or heading */}
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>work</h1>
            {/* this div will contain all the images  */}
            <div className='absolute top-0 w-full h-full '>
                {images.map((elem,index)=>(elem.isActive && (<img 
                key = {index}
                className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' src={elem.url} 
                   style={{top: elem.top,
                    left : elem.left,
                   }}
                   alt="" />)))}
             </div>
        </div>
    </div>
  )
}

export default Work