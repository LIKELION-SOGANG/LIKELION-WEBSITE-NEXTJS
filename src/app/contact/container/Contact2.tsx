import React from 'react'

export default function Contact2() {
  return (
    <div>
      <div className="px-80 ml-16 flex flex-col gap-16">
        <div>
          <p className="text-black text-[2.5rem] font-pp">(instagram)</p>
          <a
            href="https://www.instagram.com/likelion_sg/"
            className="text-black text-[6rem] font-pp font-normal group inline-block"
            target="_blank">
            @likelion_sg ↘
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(github)</p>
          <a
            href="https://github.com/LIKELION-SOGANG"
            className="text-black text-[6rem] font-pp font-normal group inline-block"
            target="_blank">
            likelionsg ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(email)</p>
          <a className="text-black text-[6rem] font-pp font-normal group inline-block">
            likelion_sg@gmail.com ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(kakaotalk)</p>
          <a className="text-black text-[6rem] font-pp font-normal group inline-block">
            inyoungjung ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="text-black text-[2.5rem] font-pp">(likelion univ.)</p>
          <a
            href="https://likelion.university/"
            className="text-black text-[6rem] font-pp font-normal group inline-block"
            target="_blank">
            https://likelion.university/ ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
      </div>
      <div className="p-80"></div>
    </div>
  )
}
