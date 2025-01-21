"use client";
import { AndroidDevelopment } from "@/constants";
import { useState } from "react";
import Item from "./Card";



const Appdev = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (into: any) => {
    setActiveCard(into === activeCard ? null : into);
  };
  return (
    <>

      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="h-[15px] w-[15px] shadow-dotShadowCyan self-center rounded-full bg-white"></div>

          <div className=" w-[5px]  bg-gradient-to-b from-[#2CC4F5] to-transparent duration-700 transition h-full"></div>
        </div>
        <div className="max-w-[1920px] mx-auto flex">
          <div className="ml-[5px] sm:ml-[10px] md:ml-[40px] lg:ml-[70px]">

          </div>
          <div className="flex flex-col">
            <div className="text-[16px] md:text-2xl lg:text-4xl mb-[30px] leading-normal text-white ">App Development</div>
            <div className="grid mr-0 grid-cols-2 sm:grid-cols-3 mb-10 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-2 md:gap-4 lg:gap-8">

              {AndroidDevelopment.map((into, index) => {
                return <Item into={into} key={index} isActive={true}
                  onClick={() => handleCardClick(into)} />
              })}

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Appdev
