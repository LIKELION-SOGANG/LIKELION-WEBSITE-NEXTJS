import React from 'react'

export default function Onboard1() {
  return (
    <div className="">
      <div className="relative text-white w-full h-screen bg-black flex flex-col justify-end items-center">
        <img
          className="absolute top-0"
          src="images/about/obj1.png"
          alt="object"
        />
        <img
          className="scale-[.50] absolute left-0 bottom-0"
          src="images/about/obj2.png"
          alt="object"
        />
        <img
          className="scale-[.30] absolute"
          src="images/about/obj3.png"
          alt="object"
        />
        <div className="font-pp text-[40rem] flex items-end flex items-end pd-0 absolute -bottom-12">
          <span>Like</span>
          <span className="italic">lion</span>
        </div>
        <img
          className="absolute right-20"
          src="images/about/caption-possible-white.svg"
          alt="possible-caption"
        />
      </div>
      <div className="text-white w-full h-screen bg-black"></div>
    </div>
  )
}
