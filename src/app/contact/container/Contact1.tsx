import React from 'react'

export default function Contact1() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-x-hidden">
        <img
          className=" absolute desktop:left-[11.1vw] tablet:left-[11.1vw] mobile:left-[50vw] w-[33vw] h-[33vw] top-[-10vw]"
          src="/images/contact/obj1.png"
        />
        <img
          className="absolute w-[45vw] h-[45vw] left-[66vw]"
          src="/images/contact/obj2.png"
        />
      </div>
      <div className="text-center mt-[-24vw]">
        <div className="text-[6rem] text-black font-pp font-thin">
          Connect With Us!
        </div>
      </div>
      <div className="relative w-full h-[80vh] overflow-x-hidden">
        <img
          className="absolute w-[31vw] h-[29vw] top-[-1vw]"
          src="/images/contact/obj3.png"
        />
        <img
          className="absolute w-[31vw] h-[32vw] left-[58vw] top-[10vw]"
          src="/images/contact/obj4.png"
        />
      </div>
    </div>
  )
}
