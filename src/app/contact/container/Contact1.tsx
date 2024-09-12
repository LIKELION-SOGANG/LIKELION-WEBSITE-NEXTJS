import React from 'react'

export default function Contact1() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          className="absolute w-[48rem] h-[48rem] left-[16.5rem] top-[-14.8rem]"
          src="/images/contact/obj1.png"
        />
        <img
          className="absolute w-[65rem] h-[61rem] left-[94rem] right-[-15rem]"
          src="/images/contact/obj2.png"
        />
      </div>
      <div className="text-center mt-[-35rem]">
        <div className="text-black text-[6rem] font-pp font-thin">
          Connect With Us!
        </div>
      </div>
      <div className="relative w-full h-screen">
        <img
          className="absolute w-[63rem] h-[90rem] top-[-25rem]"
          src="/images/contact/obj3.png"
        />
        <img
          className="absolute w-[46rem] h-[49em] left-[82rem] top-[15rem]"
          src="/images/contact/obj4.png"
        />
      </div>
    </div>
  )
}
