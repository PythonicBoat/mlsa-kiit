import { Just_Another_Hand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar4Week } from "react-icons/bs";
const anotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
});
const EventHero = () => {
  return (
    <>
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/heroLeft.png"
          alt="hero left gradient"
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] md:h-full md:w-[50%] max-w-[1920px] "
        />
        <div className="z-20 absolute right-0 top-[22rem] h-[120vh] w-[50%] max-w-[1920px] lg:h-[100vh] lg:w-[40%] opacity-60">
          <Image
            src="/heroRight.png"
            alt="hero right gradient"
            width={1000}
            height={800}
            className="h-full w-full z-8"
          />
        </div>
      </div>
      <div className="relative">
        <div className=" no-repeat h-[400px] md:h-[88vh] w-full bg-[url('/EventHero.png')] bg-cover  bg-center bg-no-repeat">
          <div className="mx-auto h-[100px] w-[93%]  text-right text-white">
            <div className="py-4 md:py-2 mx-auto mt-[5rem]  border-[1px] border-[#858585] border-solid flex items-center   justify-between rounded-xl bg-[#25252580] text-white shadow-gray  lg:w-[100%] ">
              <Link href={""} target="_blank">
                <Image
                  src='/eventImages/project wing 4.0.png'
                  alt="Hackoplcpyse Event"
                  width={150}
                  height={150}
                  className=" ml-6 sm:ml-10 h-[105px] w-[100px] md:h-[125px] object-contain md:w-[120px] lg:h-[150px] lg:w-[130px] "
                />
                {/* <Image
                  src='/Hackocalypse.png'
                  alt="Hackoplcpyse Event"
                  width={150}
                  height={150}
                  className=" ml-6 sm:ml-10 h-[105px] w-[100px] md:h-[125px] object-cover md:w-[120px] lg:h-[150px] lg:w-[130px] "
                /> */}
              </Link>
              <div className="flex cursor-default flex-col  items-end justify-between pr-3 pt-3  text-right md:text-lg lg:text-xl font-normal capitalize">
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-semibold md:leading-2 lg:leading-4 md:py-1 md:text-xl lg:text-2xl">
                    Project Wing 4.0
                  </h1>

                  <div className="my-2 flex items-center justify-end gap-1">
                    <BsCalendar4Week />
                    <p>12th Jan</p>
                  </div>
                  <div className="duration-50 mb-2 mt-1 h-[2px] w-[100%] bg-gradient-to-r from-transparent to-[#ffffff]  my-1 lg:my-2 "></div>
                  <div className="flex sm:flex-row sm:gap-4 sm:items-center flex-col ">
                    {/* <p className="py-1 text-end lg:py-2 text-xs font-[100px] md:text-base">
                      Join us for an exciting 24-hour hackathon! Build innovative solutions and win amazing prizes.
                    </p> */}
                  </div>
                </div>
                <Link href="http://register.mlsakiit.com" target="_blank">
                  <button
                  disabled={true}
                  className=" mb-[15px]  flex w-full items-center justify-center  whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5] to-[#3BABCF]  px-2  py-1 text-xs lg:text-xl lg:px-8  ">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left  text-3xl md:text-4xl lg:text-5xl px-10 absolute bottom-[-3px] jj w-[100vw]">
          <h1 className="mx-[-10px] lg:mx-[19px] bg-gradient-to-br from-[#5051F9]  to-[#DFDFFF] leading-20 font-semibold text-transparent bg-clip-text">Events</h1>
          <h2 className="mx-[-10px] lg:mx-[19px] text-[18px] md:text-[25px] lg:py-1 lg:text-[33px]">Our past successful events</h2>
        </div>
      </div>
    </>

  );
};

export default EventHero;

