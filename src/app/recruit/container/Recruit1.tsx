import React from 'react'
import ScrollLottie from '../ScrollLottie'

const Recruit1 = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="w-full relative h-[1268px] m-[36px_0_150px_200px] max-tablet:ml-0 box-border flex justify-end">
          <div className=" w-full -z-10 flex justify-center absolute h-full bg-[url('/images/about/obj2.png')] bg-lightgray bg-center bg-cover bg-no-repeat"></div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="absolute font-pp -z-10 max-tablet:top-[23.8rem] top-[35rem] text-center italic text-[9rem] max-desktop:text-[9rem] max-tablet:text-[4.5rem]">
          Want To <br className="tablet:hidden" />
          Join Us?
        </div>

        <div className="max-tablet:hidden absolute top-[50rem] rounded-[3rem] bg-white">
          <div className="text-black text-[2rem] p-[1.5rem_3rem]">
            APLLY NOW
          </div>
        </div>

        <div className="tablet:hidden absolute w-[10rem] h-[10rem] top-[45.4rem] right-[2.5rem] rounded-full bg-white flex items-center justify-center">
          <div className="text-black text-[1.6rem] text-center whitespace-pre-line">{`APLLY\nNOW`}</div>
        </div>
        <div className="absolute top-[75rem]">
          <ScrollLottie />
        </div>
      </div>
    </div>
  )
}

export default Recruit1
