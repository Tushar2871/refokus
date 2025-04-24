import React from "react";
import {motion} from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    // this is the main div which will contain one card
    <motion.div whileHover = {{backgroundColor: hover === "true" && "#7443ff " , padding:"25px"}}
      className={`p-5 bg-zinc-800 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      {/* this parent div is wrapper helpful in animation */}
      <div>
        {/* this will contain heading and arrow*/}
        <div className="h-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever</h1>
      </div>
      {/* this div will contain parts of the lower side of the card */}
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tighter leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {
          // this is para for card one
          para && (
            <p className="text-zinc-500 font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          )
        }
      </div>
    </motion.div>
  );
}

export default Card;
