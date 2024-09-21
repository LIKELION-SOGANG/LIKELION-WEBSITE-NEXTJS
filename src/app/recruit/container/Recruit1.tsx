'use client'

import React from 'react'
import ScrollLottie from '../ScrollLottie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Recruit1 = () => {
  const router = useRouter()

  const onClickApply = () => {
    console.log('clicked!')
    router.push('/recruit/apply')
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-end">
        <div className="pointer-events-none w-[1270px]  h-[1270px] relative m-[36px_0_150px_200px] max-tablet:ml-0 box-border flex justify-end">
          <div className="w-[1270px] h-[1270px] // max-tablet:right-[-50rem] max-mobile:right-[-62.5rem] max-desktop:right-[-20rem] // max-tablet:top-[-10rem] //  absolute -z-10 flex justify-center">
            <Image
              src="/images/recruit/obj2.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="-z-10"
              priority={true}
              sizes="(max-width: 768px) 100vw, 1270px"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute font-pp -z-10 max-tablet:top-[23.8rem] top-[35rem] text-center italic text-[9rem] max-desktop:text-[9rem] max-tablet:text-[4.5rem]">
          Want To <br className="tablet:hidden" />
          Join Us?
        </div>

        <button
          onClick={onClickApply}
          className="cursor-pointer text-black text-[2rem] p-[1.5rem_3rem] max-tablet:hidden absolute top-[50rem] rounded-[3rem] bg-white">
          APLLY NOW
        </button>

        <div className="tablet:hidden absolute w-[10rem] h-[10rem] top-[45.4rem] -z-10 right-[2.5rem] rounded-full bg-white flex items-center justify-center">
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
