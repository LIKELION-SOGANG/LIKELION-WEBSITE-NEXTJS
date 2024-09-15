import React from 'react'

export default function Contact2() {
  return (
    <div className="overflow-x-hidden">
      <div className="desktop:px-80 ml-16 gap-16 tablet:px-80 ml-16 gap-16 mobile:px-16 ml-4 gap-32 flex flex-col ">
        <div>
          <p className="desktop:text-[2.2rem] tablet:text-[2.5rem] mobile:text-[1.8rem] text-black font-pp">
            (instagram)
          </p>
          <a
            href="https://www.instagram.com/likelion_sg/"
            className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[2.8rem] text-black font-pp font-normal group inline-block"
            target="_blank">
            @likelion_sg ↘
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="desktop:text-[2.5rem] tablet:text-[2.5rem] mobile:text-[1.8rem] text-black font-pp">
            (github)
          </p>
          <a
            href="https://github.com/LIKELION-SOGANG"
            className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[2.8rem] text-black font-pp font-normal group inline-block"
            target="_blank">
            likelionsg ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="desktop:text-[2.5rem] tablet:text-[2.5rem] mobile:text-[1.8rem] text-black font-pp">
            (email)
          </p>
          <a className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[2.8rem] text-black font-pp font-normal group inline-block">
            likelion_sg@gmail.com ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="desktop:text-[2.5rem] tablet:text-[2.5rem] mobile:text-[1.8rem] text-black font-pp">
            (kakaotalk)
          </p>
          <a className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[2.8rem] text-black font-pp font-normal group inline-block">
            inyoungjung ↘︎
            <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
          </a>
        </div>
        <div>
          <p className="desktop:text-[2.5rem] tablet:text-[2.5rem] mobile:text-[1.8rem] text-black font-pp">
            (likelion univ.)
          </p>
          <a
            href="https://likelion.university/"
            className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[2.8rem] text-black font-pp font-normal group inline-block"
            target="_blank">
            https://likelion.university/ ↘︎
            <div
              className={` h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black `}></div>
          </a>
        </div>
      </div>
      <div className="p-80"></div>
    </div>
  )
}
