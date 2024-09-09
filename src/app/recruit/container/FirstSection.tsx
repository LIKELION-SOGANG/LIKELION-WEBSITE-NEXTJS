import React from 'react'
import ScrollLottie from '../ScrollLottie'

const FirstSection = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="w-full relative h-[1268px] m-[36px_0_150px_200px] max-tablet:ml-0 box-border flex justify-end">
          <div className="w-full -z-10 flex justify-center relative h-full bg-[url('/images/about/obj2.png')] bg-lightgray bg-center bg-cover bg-no-repeat"></div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="absolute font-pp -z-10 top-[35rem] text-center italic text-[9rem] max-desktop:text-[9rem] max-tablet:text-[4.5rem]">
          Want To <br className="tablet:hidden" />
          Join Us?
        </div>
        <div className=" absolute top-[50rem] rounded-[3rem] bg-white">
          <div className="text-black text-[2rem] p-[1.5rem_3rem]">
            APLLY NOW
          </div>
        </div>
        <div className="absolute top-[75rem]">
          <ScrollLottie />
        </div>
      </div>
    </div>
  )
}

export default FirstSection
