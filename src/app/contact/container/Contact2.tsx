import React from 'react'

export default function Contact2() {
  return (
    <section>
      <div className="overflow-x-hidden">
        <ul
          className={`
          px-8 ml-4 gap-32 flex flex-col
          mobile:px-16 mobile:ml-4 mobile:gap-32
          tablet:px-80 tablet:ml-16 tablet:gap-16
          desktop:px-80 desktop:ml-16 desktop:gap-32`}>
          <li>
            <p className="text-black font-pp text-[1.5rem] mobile:text-[1.8rem] tablet:text-[2.5rem] desktop:text-[2.2rem]">
              (instagram)
            </p>
            <a
              href="https://www.instagram.com/likelion_sg/"
              className="text-black font-pp font-normal group inline-block text-[2.3rem] mobile:text-[2.8rem] tablet:text-[6rem] desktop:text-[6rem]"
              target="_blank">
              @likelion_sg ↘
              <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
            </a>
          </li>
          <li>
            <p className="text-black font-pp text-[1.5rem] mobile:text-[1.8rem] tablet:text-[2.5rem] desktop:text-[2.2rem]">
              (github)
            </p>
            <a
              href="https://github.com/LIKELION-SOGANG"
              className="text-black font-pp font-normal group inline-block text-[2.3rem] mobile:text-[2.8rem] tablet:text-[6rem] desktop:text-[6rem]"
              target="_blank">
              likelionsg ↘︎
              <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
            </a>
          </li>
          <li>
            <p className="text-black font-pp text-[1.5rem] mobile:text-[1.8rem] tablet:text-[2.5rem] desktop:text-[2.2rem]">
              (email)
            </p>
            <a className="text-black font-pp font-normal group inline-block text-[2.3rem] mobile:text-[2.8rem] tablet:text-[6rem] desktop:text-[6rem]">
              likelion_sg@gmail.com ↘︎
              <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
            </a>
          </li>
          <li>
            <p className="text-black font-pp text-[1.5rem] mobile:text-[1.8rem] tablet:text-[2.5rem] desktop:text-[2.2rem]">
              (kakaotalk)
            </p>
            <a className="text-black font-pp font-normal group inline-block text-[2.3rem] mobile:text-[2.8rem] tablet:text-[6rem] desktop:text-[6rem]">
              inyoungjung ↘︎
              <div className=" h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black "></div>
            </a>
          </li>
          <li>
            <p className="text-black font-pp text-[1.5rem] mobile:text-[1.8rem] tablet:text-[2.5rem] desktop:text-[2.2rem]">
              (likelion univ.)
            </p>
            <a
              href="https://likelion.university/"
              className="text-black font-pp font-normal group inline-block text-[2.3rem] mobile:text-[2.8rem] tablet:text-[6rem] desktop:text-[6rem]"
              target="_blank">
              https://likelion.university/ ↘︎
              <div
                className={` h-[3px] -mt-6 group-hover:animate-scaleLeft group-hover:bg-black `}></div>
            </a>
          </li>
        </ul>
        <div className="p-80"></div>
      </div>
    </section>
  )
}
