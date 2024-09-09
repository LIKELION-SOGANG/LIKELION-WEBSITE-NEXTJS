import Link from 'next/link'
import React from 'react'

export default function Onboard3() {
  return (
    <div>
      <div className="w-full h-[80vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="font-pp cursor-pointer text-8xl">
          Like<span className="italic">lion</span> So
          <span className="italic">gang</span>
        </div>
        <div className="text-4xl">BY THE NUMBERS</div>
      </div>
      <div className="w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div>
          <span className="font-pp text-[20rem]">9</span>
          <span className="text-4xl font-medium">년</span>
        </div>
        <div className="mt-12 text-4xl font-black mb-8">운영기간</div>
        <div className="text-4xl font-light">
          멋쟁이사자처럼 서강대는 2016년부터 끊임없이 달려왔습니다.
        </div>
      </div>
      <div className="w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="relative">
          <span className="font-pp text-[18rem]">100</span>
          <span className="text-[8rem] font-thin absolute -top-20">+</span>
        </div>
        <div className="mt-12 text-4xl font-black mb-8">프로젝트 수</div>
        <div className="text-4xl font-light text-center">
          해커톤, 아이디어톤, 신촌톤, 데모데이를 포함하여
          <br />
          100여개의 프로젝트를 진행했습니다.
        </div>
      </div>
      <div className="w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="relative">
          <span className="font-pp text-[18rem]">120</span>
          <span className="text-[8rem] font-thin absolute -top-20">+</span>
        </div>
        <div className="mt-12 text-4xl font-black mb-8">가입 회원 수</div>
        <div className="text-4xl font-light">
          매년 새로운 아기사자들이 멋쟁이사자처럼과 함께 하고 있습니다.
        </div>
      </div>
      <div className="w-full h-screen flex items-center bg-black text-white">
        <img
          className="w-1/2 h-1/2"
          src="images/about/hackathon.png"
          alt=""
        />
        <div className="h-1/2 flex flex-col justify-end pl-12">
          <div className="font-pp text-9xl">Awards</div>
          <div className="mt-16 flex flex-col gap-3 text-2xl">
            <Link
              target="_blank"
              href="https://platum.kr/archives/212513">
              2023.08 | 멋쟁이사자처럼 전국 연합 해커톤 3위 (효자동개발자 팀) ↘
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/p/CTNGreslBDy/?img_index=1">
              2021.08 | 멋쟁이사자처럼 전국 연합 해커톤 1위 (URL repo 팀) ↘
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/p/CRbGH4rjBW2/?img_index=1">
              2021.07 | 멋쟁이사자처럼 전국 연합 아이디어톤 1위 (URL repo 팀) ↘
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
