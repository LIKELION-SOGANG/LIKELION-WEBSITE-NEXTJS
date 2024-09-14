import React from 'react'

export default function Contact1() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-x-hidden">
        <img
          className="absolute w-[33vw] h-[33vw] left-[11.1vw] top-[-10vw]"
          src="/images/contact/obj1.png"
        />
        <img
          className="absolute w-[45vw] h-[45vw] left-[66vw]"
          src="/images/contact/obj2.png"
        />
      </div>
      <div className="text-center mt-[-24vw]">
        <div className="text-black text-[6rem] font-pp font-thin">
          Connect With Us!
        </div>
      </div>
      <div className="relative w-full h-screen overflow-x-hidden">
        <img
          className="absolute w-[43.75vw] h-[60vw] top-[-17vw]"
          src="/images/contact/obj3.png"
        />
        <img
          className="absolute w-[30vw] h-[31vw] left-[58vw] top-[10vw]"
          src="/images/contact/obj4.png"
        />
      </div>
      <div className="mt-[-10vw] px-80 ml-16 flex flex-col gap-16">
        <div>
          <p className="text-black text-[2.5rem] font-pp">(instagram)</p>
          <a
            href="https://www.instagram.com/likelion_sg/"
            className="text-black text-[6rem] font-pp font-normal">
            @likelion_sg ↘
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(github)</p>
          <a className="text-black text-[6rem] font-pp font-normal">
            likelionsg ↘︎
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(email)</p>
          <a className="text-black text-[6rem] font-pp font-normal">
            likelion_sg@gmail.com ↘︎
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(kakaotalk)</p>
          <a className="text-black text-[6rem] font-pp font-normal">
            inyoungjung ↘︎
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(likelion univ.)</p>
          <a className="text-black text-[6rem] font-pp font-normal">
            https://likelion.university/ ↘︎
          </a>
        </div>
      </div>
      <div className="p-80"></div>
    </div>
  )
}
