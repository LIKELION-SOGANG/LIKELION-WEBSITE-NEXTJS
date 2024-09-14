import React from 'react'

export default function Onboard1() {
  return (
    <section>
      <div className="text-white w-full h-[100vh] bg-black relative">
        <img
          className="absolute top-0 origin-top-left scale-[.40]"
          src="images/about/obj1.png"
          alt="object"
        />
        <img
          className="absolute origin-top-right scale-[.25] top-[-10rem]"
          src="images/about/obj2.png"
          alt="object"
        />
        <img
          className="absolute origin-top-left scale-[.30] left-[10rem] top-[60vh]"
          src="images/about/obj3.png"
          alt="object"
        />
        <div className="font-pp text-[40rem] flex items-end flex items-end absolute top-[28vh] right-[50%] translate-x-[50%]">
          <span>Like</span>
          <span className="italic">lion</span>
        </div>
        <img
          className="absolute right-20 top-[88vh]"
          src="images/about/caption-possible-white.svg"
          alt="possible-caption"
        />
      </div>
      <div className="text-white w-full h-[100vh] bg-black"></div>
    </section>
  )
}
